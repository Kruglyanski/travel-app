import React, {useState} from 'react'
import './Select.css'
import {DownOutlined} from '@ant-design/icons'


export const Select = () => {

    const [dropdown, setDropdown] = useState({
        items: [
            {id: 0, data: 'Русский', isActive: false},
            {id: 1, data: 'English', isActive: false},
            {id: 2, data: 'Deutsch', isActive: false},

        ],
        label: 'lang',
        valid: false,
        touched: false,
        errorMessage: 'Выберите язык'
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
                                dropdown.items.find(i => i.isActive)?.data
                                :
                                'Язык'
                        }

                    </div>
                    <div className='arrow'>
                        <DownOutlined />
                    </div>

                </div>
                <ul className='dropdownMenu'>
                    {dropdown.items.map(i => {
                        return <li
                            key={i.id}
                            onClick={(e) => itemHandler(i.id)}
                        >
                            {i.data}
                        </li>
                    })}
                </ul>
            </div>

    )
}