import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    posts: [],
}

const sagaSlice = createSlice({
    name: 'saga',
    initialState,
    reducers: {}
})

export const {} = sagaSlice.actions
export default sagaSlice.reducer;