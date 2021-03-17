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
    const language = useSelector((state: RootStateType) => state.app.language)
    useEffect(() => {
        const load = async () => {
            await dispatch(fetchCountries(language))
            await dispatch(getRate())
        }
        load()

    }, [language])
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