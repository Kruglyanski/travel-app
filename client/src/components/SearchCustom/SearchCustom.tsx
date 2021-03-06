import React, {useEffect, useLayoutEffect, useState} from 'react'
import { Input } from 'antd'
import './SearchCustom.css'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'
import { filterCountries } from '../../redux/countryReducer'
const { Search } = Input

export const SearchCustom = () => {
    const dispatch = useDispatch()
    const countries = useSelector((state: RootStateType) => state.countries.countries)
    const language = useSelector((state: RootStateType) => state.app.language)
    const [placeholder, setPlaceholder] = useState('Поиск')
    useEffect(() => {
        if (language === 'en') {
            setPlaceholder('Search')
        } else if (language === 'de') {
            setPlaceholder('Suche')
        } else setPlaceholder('Поиск')
    }, [language])
    const onSearch = (value: string) => {
        const filter = countries.filter(country => {
            return (
                country.name.toLowerCase().includes(value.toLowerCase())
                || country.capital.toLowerCase().includes(value.toLowerCase())
            )
        })
        dispatch(filterCountries(filter))
    }
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filter = countries.filter(country => {
            return (
                country.name.toLowerCase().includes(e.target.value.toLowerCase())
                || country.capital.toLowerCase().includes(e.target.value.toLowerCase())
            )
        })
        dispatch(filterCountries(filter))
    }


    return (
        <div className='searchWrapper'>
            <Search
                autoFocus={true}
                allowClear={true}
                placeholder={placeholder}
                onSearch={onSearch}
                onChange={onChange}
                enterButton
                size="large"
            />
        </div>
    )
}



