import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {api} from '../api/api'
//export type PostsArrayType = Array<PostType>
export type PlaceType = {
    name: string,
    description: string
    photoUrl: string,
}

type ItemType = {

    name: string,
    capital: string,
    capitalLocation: {
        coordinates: [
            number
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
    items: Array<ItemType>
}


const initialState = {
    items: []
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

// export const sendPost = createAsyncThunk(
//     'postReducer/sendPost',
//     async (postData:{text: string, userName: string, avatar: string}) => {
//         const data = await api.sendPost(postData)
//             .then((res) => res && res.json())
//         if (!data) {
//             throw new Error(data.message || 'Something went wrong!')
//         }
//         return data
//     }
// )
// export const deletePost = createAsyncThunk(
//     'postReducer/deletePost',
//     async (id: number) => {
//          await api.deletePost(id)
//         return id
//     }
// )


const countryReducer = createSlice({
    name: 'countryReducer',
    initialState,
    reducers: {
        // currentPostChange: (state, action) => {
        //     return {
        //         ...state,
        //         text: action.payload
        //     }
        // },
        // clearInput: (state) => {
        //     return {
        //         ...state,
        //         text: ''
        //     }
        // }


    },
    extraReducers: {

        [fetchCountries.fulfilled.type]: (state, action) => {

            return {
                ...state,
                posts: action.payload
            }

        },
    //     [deletePost.fulfilled.type]: (state, action) => {
    //
    //         return {
    //             ...state,
    //             posts: [...state.posts.filter(i => i._id !== String(action.payload))]
    //
    //         }
    //
    //     },
    //     [sendPost.fulfilled.type]: (state, action) => {
    //
    //         return {
    //             ...state,
    //             posts: [
    //                 ...state.posts,
    //                 action.payload
    //             ]
    //         }
    //
    //     }
    //
    //
     }
})

export const {} = countryReducer.actions

export default countryReducer.reducer