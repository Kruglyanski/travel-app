import React from 'react'
import './App.css'
import {LayoutCustom} from './components/LayoutCustom/LayoutCustom'
import {RegistrationForm} from './components/RegistrationForm/RegistrationForm'
import {ModalCustom} from './components/ModalCustom/ModalCustom'
import {RootStateType} from './redux/rootReducer'
import {useSelector} from 'react-redux'
import {LoginForm} from './components/LoginForm/LoginForm'
import {CardList} from './components/CardList/CardList'
import CountryPage from './components/CountryPage/CountryPage'
import {Redirect, Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'

function App() {
    const isModalVisible = useSelector((state: RootStateType) => state.app.isModalVisible)
    const modalType = useSelector((state: RootStateType) => state.app.modalType)

  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <LayoutCustom isSearch={true}>
                        <CardList/>
                    </LayoutCustom>
                </Route>
                <Route path="/:id" exact>
                    <LayoutCustom isSearch={false}>
                        <CountryPage/>
                    </LayoutCustom>
                </Route>
                <Redirect to='/'/>
            </Switch>
        </BrowserRouter>

        {
            isModalVisible && <ModalCustom>
                {modalType === 'register' && <RegistrationForm/>}
                {modalType === 'login' && <LoginForm/>}
            </ModalCustom>
        }
    </div>
  )
}

export default App
