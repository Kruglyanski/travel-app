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


    useEffect(() => {
        dispatch(getCurrency())
    }, [])

    return (
        <div>
            <div className="currencies">
                <h3>Курс {currency}:</h3>
                {
                    currencies.rates && <div>
                        <p><b>USD: {currencies.rates[currency].toFixed(2)}</b></p>
                        <p><b>EUR: {(currencies.rates[currency] / currencies.rates['EUR']).toFixed(2)}</b></p>
                        <p><b>RUB: {(currencies.rates[currency] / currencies.rates['RUB']).toFixed(2)}</b></p>
                    </div>
                }

            </div>
        </div>
    )
}