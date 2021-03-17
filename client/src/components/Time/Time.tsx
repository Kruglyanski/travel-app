import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'


export const  Time = () => {

    const language = useSelector((state: RootStateType) => state.app.language)
    const [monthArr, setMonthArr] = useState(['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'])
    const [weekArr, setWeekArr] = useState(['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'])
    const [currDate, setCurrDate] = useState('Текущие дата и время')

    useEffect(() => {
        if (language === 'en') {
            setMonthArr(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])
            setWeekArr(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
            setCurrDate('Current date and time')

        } else if (language === 'de') {
            setMonthArr(['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'])
            setWeekArr(['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'])
            setCurrDate('Aktuelles Datum und Uhrzeit')

        } else {
            setMonthArr(['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'])
            setWeekArr(['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'])
            setCurrDate('Текущие дата и время')

        }
    }, [language])
    function calcTime( offset: number) {
        const d = new Date()
        const utc = d.getTime() + (d.getTimezoneOffset() * 60000)
        const nd = new Date(utc + (3600000*offset))
        const hour = nd.getHours()
        const minutes = nd.getMinutes()
        const seconds = nd.getSeconds()
        const day = nd.getDate()
        const dayOfWeek = nd.getDay()
        const year = nd.getFullYear()
        const month = nd.getMonth()
        const zero = (a: number) => { return a < 10 ? "0"+a : a }
        return (day + ' ' +monthArr[month]+ ' ' +year+ ' ' + weekArr[dayOfWeek] + ' ' +zero(hour)+ ':' + zero(minutes) + ':' + zero(seconds))

    }
    const timeOffset = useSelector((state: RootStateType) => state.countries.currentCountry!.timeOffset)
    const [time, setTime] = useState('')
    useEffect(() => {
        const interval = setInterval(()=>{
            setTime(calcTime(Number(timeOffset)))
        }, 1000)
        return ()=> clearInterval(interval)
    })
    return (
        <div className='time'>
            <h3>{currDate}:</h3>
            <p>{time}</p>
        </div>
    )
}