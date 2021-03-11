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
    name: string,
    capital: string,
    capitalLocation: {
        coordinates: [
            string
        ],
        type: string
    },
    description: string,
    imageUrl: string,
    videoUrl: string,
    currency: string,
    ISOCode: string,
    places: Array<PlaceType>
}

type StateType = {
    countries: Array<CountryType>
    currentCountry: CountryType | null
}


const initialState: StateType = {
    countries: [],
    currentCountry: null
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
    async (id:string) => {
        const data = await api.fetchCountry(id)
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

    }
})

export const {} = countryReducer.actions

export default countryReducer.reducer