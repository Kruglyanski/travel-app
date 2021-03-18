import {createSlice} from '@reduxjs/toolkit'

type StateType = {
    isModalVisible: boolean
    modalType: 'login' | 'register'
    language: string
}

const initialState: StateType = {
    isModalVisible: false,
    modalType: 'login',
    language: 'ru'
}


export const appReducer = createSlice({
    name: 'appReducer',
    initialState,
    reducers: {
        setIsModalVisible: (state, action) => {
            return {
                ...state,
                isModalVisible: action.payload
            }
        },
        setModalType: (state, action) => {
            return {
                ...state,
                modalType: action.payload
            }
        },
        setLanguage: (state, action) => {
            return {
                ...state,
                language: action.payload
            }
        },
    },
    extraReducers: {}
})

export const {
    setIsModalVisible,
    setModalType,
    setLanguage
} = appReducer.actions

export default appReducer.reducer