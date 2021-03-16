import React, {useEffect} from 'react'
import {getCurrency} from '../../redux/countryReducer'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'

type PropsType = {
    currency: string
}
export const Currency: React.FC<PropsType> = ({currency}) => {

    const dispatch = useDispatch()

    const currencies = useSelector((state: RootStateType) => state.countries.currencies)
    const capitalId = useSelector((state: RootStateType) => state.countries.currentCountry!.capitalLocation.id)

    useEffect( () => {
        dispatch(getCurrency())



    }, [])

    return (
        <div>
            <div className="currencies">
                {
                    currencies.rates && <div>
                    <p>Курс валюты относительно доллара США: {currencies.rates[currency].toFixed(2)}</p>
                    <p>Курс валюты относительно евро: {(currencies.rates[currency]/currencies.rates['EUR']).toFixed(2)}</p>
                    <p>Курс валюты относительно рубля: {(currencies.rates[currency]/currencies.rates['RUB']).toFixed(2)}</p>
                </div>
                }

            </div>
        </div>
    )
}