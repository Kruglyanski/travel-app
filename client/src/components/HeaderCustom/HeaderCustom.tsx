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

type PropsType = {
    isSearch: boolean
}
export const HeaderCustom: React.FC<PropsType> = ({isSearch}) => {
    const dispatch = useDispatch()
    const avatar = useSelector((state: RootStateType) => state.auth.avatar)
    const isAuthenticated = useSelector((state: RootStateType) => state.auth.isAuthenticated)
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
                <Link to={'/'}>
                    <div className="logo"/>
                </Link>
                <h1>Travel App</h1>
                {/*<Select/>*/}

                    {
                        !isAuthenticated
                            ?
                            <>
                                <div></div>
                                <div className='login' onClick={loginHandler}>
                                    <a>Log In</a>
                                </div>
                                <div className='register' onClick={registerHandler}>
                                    <a>Register</a>
                                </div>
                            </>
                            :
                            <>

                                {
                                    avatar
                                        ?
                                        <AvatarCustom avatar={avatar}/>
                                        :
                                        <FileUploader/>
                                }
                                <div className='name'>{userName || 'Пользователь'} </div>
                                <div className='logout' onClick={logoutHandler}>
                                    <a>Log Out</a>
                                </div>
                            </>

                    }

            </div>
            <div className='lowerHeader'>
                {isSearch && <SearchCustom/>}
            </div>

        </Header>
    )
}
