import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'
import { getWeather} from '../../redux/countryReducer'

export const Weather = () => {
    const dispatch = useDispatch()

    const capitalId = useSelector((state: RootStateType) => state.countries.currentCountry!.capitalLocation.id)
    const weather = useSelector((state: RootStateType) => state.countries.weather)
    const name = useSelector((state: RootStateType) => state.countries.currentCountry!.capital)
    useEffect( () => {
        dispatch(getWeather(capitalId))

    }, [])

    return (
        <div className='weather'>
            <h3>Погода в {name}:</h3>

            {
                weather.weather && <div>
                <img src={"http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png"} />
                <p>{weather.weather[0].description}</p>
                <p> t: {(weather.main.temp - 273.15).toFixed(1)} &#176; C</p>
            </div>
            }
        </div>
    )
}