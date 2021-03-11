import React, {useEffect} from 'react'
import './CardList.css'
import {CardCustom} from '../CardCustom/CardCustom'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'
import {fetchCountries} from '../../redux/countryReducer'

export const CardList = () => {

    const dispatch = useDispatch()
    const countries = useSelector((state: RootStateType) => state.countries.countries)

    useEffect(() => {
        dispatch(fetchCountries())
    }, [])
    return (
        <div className='cardList'>

            {countries.map(country => <CardCustom key={country._id}country={country}/>)}
        </div>
    )
}