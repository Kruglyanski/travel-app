import {configureStore, combineReducers} from '@reduxjs/toolkit'
import appReducer from './appReducer'

import authReducer from './authReducer'
import countryReducer from './countryReducer'

const rootReducer = combineReducers({
     auth: authReducer,
     country: countryReducer,
    app: appReducer
})
export type RootStateType = ReturnType<typeof rootReducer>
export const store = configureStore({
    reducer: rootReducer

})
