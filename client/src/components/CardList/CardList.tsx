import React, {useEffect} from 'react'
import './CardList.css'
import {CardCustom} from '../CardCustom/CardCustom'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'
import {fetchCountries, getRate} from '../../redux/countryReducer'

export const CardList = () => {

    const dispatch = useDispatch()
    const countries = useSelector((state: RootStateType) => state.countries.countries)
    const filteredCountries = useSelector((state: RootStateType) => state.countries.filteredCountries)
    const isFiltered = useSelector((state: RootStateType) => state.countries.isFiltered)

    useEffect(() => {
        const load = async () => {
            await dispatch(fetchCountries())
            await dispatch(getRate())
        }
        load()

    }, [])
    return (
        <div className='cardList'>
            {
                !isFiltered
                    ?
                countries.map(country => <CardCustom key={country._id} country={country}/>)
            :
                    filteredCountries.map(country => <CardCustom key={country._id} country={country}/>)

            }
        </div>
    )
}