import {SearchCustom} from '../SearchCustom/SearchCustom'
import React, {useEffect, useState} from 'react'
import {Header} from 'antd/lib/layout/layout'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {AvatarCustom} from '../AvatarCustom/AvatarCustom'
import {RootStateType} from '../../redux/rootReducer'
import './HeaderCustom.css'
import {setIsModalVisible, setModalType, setLanguage} from '../../redux/appReducer'
import {authLogout, cleanAuthError, setIsRegistered} from '../../redux/authReducer'
import {FileUploader} from '../FileUploader/FileUploader'
import {Select} from '../Select/Select'

type PropsType = {
    isSearch: boolean
}
export const HeaderCustom: React.FC<PropsType> = ({isSearch}) => {
    const dispatch = useDispatch()
    const avatar = useSelector((state: RootStateType) => state.auth.avatar)
    const isAuthenticated = useSelector((state: RootStateType) => state.auth.isAuthenticated)
    const userName = useSelector((state: RootStateType) => state.auth.name)
    const language = useSelector((state: RootStateType) => state.app.language)
    const [login, setLogin] = useState('Войти')
    const [register, setRegister] = useState('Зарегистрираваться')
    const [logout, setLogout] = useState('Выйти')
    useEffect(() => {
        if (language === 'en') {
            setLogin('Login')
            setLogout('Logout')
            setRegister('Register')
        } else if (language === 'de') {
            setLogin('Eintreten')
            setLogout('Ausloggen')
            setRegister('Registrieren')
        } else {
            setLogin('Войти')
            setLogout('Выйти')
            setRegister('Зарегистрираваться')
        }
    }, [language])
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
                {
                    !isAuthenticated
                        ?
                        <>
                            <div></div>
                            <div className='login' onClick={loginHandler}>
                                <a>{login}</a>
                            </div>
                            <div className='register' onClick={registerHandler}>
                                <a>{register}</a>
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
                                <a>{logout}</a>
                            </div>
                        </>
                }
            </div>
            <div className='lowerHeader'>
                <Select />
                {isSearch && <SearchCustom/>}

            </div>
        </Header>
    )
}
