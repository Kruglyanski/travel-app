import {Select} from '../Select/Select'
import {SearchCustom} from '../SearchCustom/SearchCustom'
import React from 'react'
import {Header} from 'antd/lib/layout/layout'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {AvatarCustom} from '../AvatarCustom/AvatarCustom'
import {RootStateType} from '../../redux/rootReducer'
import './HeaderCustom.css'
import {setIsModalVisible, setModalType} from '../../redux/appReducer'
import {authLogout, cleanAuthError, setIsRegistered} from '../../redux/authReducer'
import {FileUploader} from '../FileUploader/FileUploader'

export const HeaderCustom = () => {
    const dispatch = useDispatch()
    const avatar = useSelector((state: RootStateType) => state.auth.avatar)
    const isAuthenticated = useSelector((state: RootStateType) => state.auth.isAuthenticated)
    const userId = useSelector((state: RootStateType) => state.auth.userId)
    const userName = useSelector((state: RootStateType) => state.auth.name)

    const logoutHandler = () => {
        dispatch(authLogout())
        localStorage.removeItem('userData')

    }
    const loginHandler = () => {
        dispatch(setModalType('login'))
        dispatch(setIsModalVisible(true))
        dispatch(cleanAuthError())
    }

    const registerHandler = () => {
        dispatch(setModalType('register'))
        dispatch(setIsModalVisible(true))
        dispatch(setIsRegistered(false))

    }

    return (
        <Header style={{width: '100%'}}>
            <div className='upperHeader'>
                <div className="logo"/>
                <h1>Travel App</h1>
                <Select/>

                <div className='me'>

                    {
                        !isAuthenticated
                            ?
                            <div>
                                <div className='login' onClick={loginHandler}>
                                    Log In
                                </div>
                                <div className='register' onClick={registerHandler}>
                                    Register
                                </div>
                            </div>
                            :
                            <>

                                <div className='name'>{userName || 'Matrix Matrix'} </div>

                                {
                                    avatar
                                        ?
                                        <AvatarCustom avatar={avatar}/>
                                        :
                                        <FileUploader/>
                                }

                                <div className='logout' onClick={logoutHandler}>
                                    Log Out
                                </div>
                            </>

                    }

                </div>


            </div>
            <div className='lowerHeader'>
                <SearchCustom/>
            </div>

        </Header>
    )
}
