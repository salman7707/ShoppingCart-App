import { createSlice } from "@reduxjs/toolkit";

interface userinfo {
    email: string;
    password: string;
}

export interface auth {
    usercredentials: userinfo;
    userLogin: boolean;
}

const initialState: auth = {
    usercredentials: { email: "", password: "" },
    userLogin: false,
}

export const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.usercredentials = action.payload;
            state.userLogin = true;
        },
        clearCredentials: (state) => {
            state.usercredentials = { email: '', password: '' };
            state.userLogin = false;
        },
    }
})

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;