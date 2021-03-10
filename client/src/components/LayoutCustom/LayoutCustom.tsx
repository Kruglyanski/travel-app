import React, {useEffect} from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import './LayoutCustom.css'
import {CardCustom} from '../CardCustom/CardCustom'
import {SearchCustom} from '../SearchCustom/SearchCustom'
import { Select } from '../Select/Select'
import {HeaderCustom} from '../HeaderCustom/HeaderCustom'
import {setIsAuthenticated, setMe} from '../../redux/authReducer'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../../redux/rootReducer'

const { Header, Content, Footer, Sider } = Layout

export const LayoutCustom = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: RootStateType) => state.auth.isAuthenticated)
    const userId = useSelector((state: RootStateType) => state.auth.userId)

//авторизация из LocalStorage
    useEffect(() => {
        const localStorageAuthData = JSON.parse(localStorage.getItem('userData') as string)
        localStorageAuthData && dispatch(setIsAuthenticated(localStorageAuthData))
        isAuthenticated && dispatch(setMe(userId))
    }, [dispatch, userId])

    return (
        <Layout className='layout'>
            <HeaderCustom/>
            <Content className="site-layout" style={{ padding: '50px'}}>
                <div className="site-layout-background" >
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                    <CardCustom />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    )

}


