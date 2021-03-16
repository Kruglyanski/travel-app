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
import {fetchCountries, getCurrency} from '../../redux/countryReducer'
import {CardList} from '../CardList/CardList'

const { Header, Content, Footer, Sider } = Layout
type PropsType = {
    children:React.ReactNode
    isSearch: boolean
}
export const LayoutCustom:React.FC<PropsType> = ({children, isSearch}) => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state: RootStateType) => state.auth.isAuthenticated)
    const userId = useSelector((state: RootStateType) => state.auth.userId)
    const avatar = useSelector((state: RootStateType) => state.auth.avatar)


//авторизация из LocalStorage
    useEffect(() => {
        const localStorageAuthData = JSON.parse(localStorage.getItem('userData') as string)
        localStorageAuthData && dispatch(setIsAuthenticated(localStorageAuthData))
        isAuthenticated && dispatch(setMe(userId))
    }, [dispatch, userId])



    return (
        <Layout className='layout'>
            <HeaderCustom isSearch={isSearch}/>
            <Content className="site-layout" style={{ padding: '50px'}}>
                <div className="site-layout-background" >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <div className="footerContent">
                    Created by <a href="https://github.com/Kruglyanski">Roman Kruglyansky</a> 2021
                    <a href="https://rs.school/js/">
                        <div className="rs"/>
                    </a>

                </div>
            </Footer>
        </Layout>
    )

}


