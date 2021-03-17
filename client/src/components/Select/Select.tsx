import React, {useEffect, useState} from 'react'
import './Select.css'
import {DownOutlined} from '@ant-design/icons'
import {setLanguage} from '../../redux/appReducer'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'


export const Select = () => {
    const dispatch = useDispatch()
    const language = useSelector((state: RootStateType) => state.app.language)
    const [dropdown, setDropdown] = useState({
        items: [
            {id: 0, data: 'ru', placeholder: 'русский', isActive: false},
            {id: 1, data: 'en', placeholder: 'english', isActive: false},
            {id: 2, data: 'de', placeholder: 'deutsch', isActive: false}

        ],
        label: 'lang',
        valid: false,
        touched: false

    })

    const [isOpen, setIsOpen] = useState(false)

    const setTouchedHandler = () => {
        setDropdown(prevState => {
            return {
                ...prevState,
                touched: true
            }
        })
    }

    const itemHandler = (id: number) => {
        setDropdown(prevState => {
                return {
                    ...prevState,
                    items: prevState.items
                        .map(i => {
                            if (i.id === id) {
                                dispatch(setLanguage(i.data))
                                localStorage.setItem('language', JSON.stringify({
                                    language: i.data
                                }))
                                return {...i, isActive: true}
                            }
                            return {...i, isActive: false}
                        }),
                    valid: true
                }
            }
        )

    }

    const toggle = () => {
        setIsOpen(prevState => !prevState)
        setTouchedHandler()
    }


    return (

        <div className={'dropdown' + ' ' + (isOpen && 'open')} onClick={toggle}>
            <div className='dropdownLabel'>
                <div className='dropdownLabelText'>
                    {
                        dropdown.items.find(i => i.isActive)
                            ?
                            dropdown.items.find(i => i.isActive)?.placeholder
                            :
                            dropdown.items.find(i => i.data ===language)!.placeholder
                    }

                </div>
                <div className='arrow'>
                    <DownOutlined/>
                </div>

            </div>
            <ul className='dropdownMenu'>
                {dropdown.items.map(i => {
                    return <li
                        key={i.id}
                        onClick={(e) => itemHandler(i.id)}
                    >
                        {i.placeholder}
                    </li>
                })}
            </ul>
        </div>

    )
}