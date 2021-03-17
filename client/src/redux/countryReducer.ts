import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from '../api/api'
//export type PostsArrayType = Array<PostType>
export type PlaceType = {
    name: string,
    description: string
    photoUrl: string,
}

export type CountryType = {
    _id: string
    name: string
    capital: string
    capitalLocation: {
        coordinates: [
            string
        ]
        type: string
        id: string
    }
    description: string
    imageUrl: string
    videoUrl: string
    currency: string
    timeOffset: string
    ISOCode: string
    places: Array<PlaceType>
}

type StateType = {
    isFiltered: boolean
    filteredCountries: Array<CountryType>
    countries: Array<CountryType>
    currentCountry: CountryType | null
    currencies: any
    weather: any
    rate: any
}


const initialState: StateType = {
    isFiltered: false,
    filteredCountries: [],
    countries: [],
    currentCountry: null,
    currencies: {},
    weather: {},
    rate: []
}


export const fetchCountries = createAsyncThunk(
    'countryReducer/fetchCountries ',
    async () => {
        const data = await api.fetchCountries()
            .then((res) => res && res.json())

        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }

        return data

    }
)
export const fetchCountry = createAsyncThunk(
    'countryReducer/fetchCountry ',
    async (id: string) => {
        const data = await api.fetchCountry(id)
            .then((res) => res && res.json())
        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }

        return data

    }
)

export const getCurrency = createAsyncThunk(
    'countryReducer/getCurrency ',
    async () => {
        const data = await api.getCurrency()
            .then((res) => res && res.json())
        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }

        return data

    }
)
export const getWeather = createAsyncThunk(
    'countryReducer/getWeather ',
    async (id: string) => {
        const data = await api.getWeather(id)
            .then((res) => res && res.json())
        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }

        return data

    }
)

export const setRate = createAsyncThunk(
    'countryReducer/setRate ',
    async ({value, userId, countryId}:{value: string, userId: string, countryId: string}) => {
        const data = await api.setRate({value, userId, countryId})
            .then((res) => res && res.json())
        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }

        return data

    }
)
export const getRate = createAsyncThunk(
    'countryReducer/getRate ',
    async () => {
        const data = await api.getRate()
            .then((res) => res && res.json())
        if (!data) {
            throw new Error(data.message || 'Something went wrong!')
        }

        return data

    }
)

const countryReducer = createSlice({
    name: 'countryReducer',
    initialState,
    reducers: {
        filterCountries: (state, action) => {
            return {
                ...state,
                isFiltered: true,
                filteredCountries: action.payload
            }
        },

    },
    extraReducers: {

        [fetchCountries.fulfilled.type]: (state, action) => {
            return {
                ...state,
                countries: action.payload
            }

        },
        [fetchCountry.fulfilled.type]: (state, action) => {

            return {
                ...state,
                currentCountry: action.payload
            }

        },
        [getCurrency.fulfilled.type]: (state, action) => {

            return {
                ...state,
                currencies: action.payload
            }

        },
        [getWeather.fulfilled.type]: (state, action) => {

            return {
                ...state,
                weather: action.payload
            }

        },
        [getRate.fulfilled.type]: (state, action) => {

            return {
                ...state,
                rate: action.payload
            }

        }

    }
})

export const {filterCountries} = countryReducer.actions

export default countryReducer.reducer