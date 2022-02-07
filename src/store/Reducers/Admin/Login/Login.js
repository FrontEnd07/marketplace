import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: null,
    register: null
}

const Login = createSlice({
    name: 'admin/login',
    initialState,
    reducers: {
        logInAC(state, action) {
            state.login = action.payload
        },
        registerAC(state, action) {
            state.register = action.payload
        }
    }
})

export const {
    logInAC,
    registerAC
} = Login.actions
export default Login.reducer