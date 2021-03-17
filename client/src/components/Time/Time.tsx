import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'

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
    const monthArr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']
    const weekArr = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    return (day + ' ' +monthArr[month]+ ' ' +year+ ' ' +'года, '+ weekArr[dayOfWeek] + ' ' +zero(hour)+ ':' + zero(minutes) + ':' + zero(seconds))

}



export const  Time = () => {
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
            <h3>Текущие дата и время:</h3>
            <p>{time}</p>
        </div>
    )
}