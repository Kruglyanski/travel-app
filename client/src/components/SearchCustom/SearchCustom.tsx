import React from 'react'
import { Input } from 'antd'
import './SearchCustom.css'
const { Search } = Input

export const SearchCustom = () => {
    const onSearch = (value: string) => console.log(value)
    return (
        <div className='searchWrapper'>
            <Search
                placeholder="search"
                onSearch={onSearch}
                enterButton
                size="large"
            />
        </div>
    )
}



