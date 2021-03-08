import {configureStore, combineReducers} from '@reduxjs/toolkit'

import authReducer from './authReducer'
import countryReducer from './countryReducer'

const rootReducer = combineReducers({
     auth: authReducer,
     country: countryReducer
})
export type RootState = ReturnType<typeof rootReducer>
export const store = configureStore({
    reducer: rootReducer

})
