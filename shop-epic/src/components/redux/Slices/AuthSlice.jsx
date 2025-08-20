import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice=createSlice({
    name:"auth",
    initialState:{
        user:null
    },
    reducers:{
        settingUser:(state,action)=>{
            state.user=action.payload;
        },
        clearUser:(state)=>{
            state.user=null;
        }
    }
})

export const {settingUser,clearUser}=AuthSlice.actions;
export default AuthSlice.reducer;