import React from 'react'

import './App.css'
import {AdminForm} from './components/AdminForm/AdminForm'
import {LayoutCustom} from './components/LayoutCustom/LayoutCustom'
import {FileUploader} from './components/FileUploader/FileUploader'
import {RegistrationForm} from './components/RegistrationForm/RegistrationForm'
import {ModalCustom} from './components/ModalCustom/ModalCustom'
import {RootStateType} from './redux/rootReducer'
import {useSelector} from 'react-redux'
import {LoginForm} from './components/LoginForm/LoginForm'

function App() {
    const isModalVisible = useSelector((state: RootStateType) => state.app.isModalVisible)
    const modalType = useSelector((state: RootStateType) => state.app.modalType)

  return (
    <div className="App">
        {/*<AdminForm/>*/}
        <LayoutCustom/>
        {/*<RegistrationForm/>*/}
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
