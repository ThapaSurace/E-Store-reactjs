import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart : (state,action) => {
            state.isFetching = true
        },
        loginSuccess: (state,action) => {
            state.user = action.payload
        },
        loginFailure: (state,action) => {
            state.error = true
        }
    }
})
export const {loginStart, loginSuccess, loginFailure} = 
authSlice.actions
export default authSlice.reducer