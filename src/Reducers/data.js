import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        username: '',
        role: null
    },
    reducers: {
        loginAction: (state,action) => {
            state.username = action.payload.username;
            state.role = action.payload.role;
        },

        logoutAction: (state, action) => {
            localStorage.removeItem("skincare_login");
            state.username='';
            state.role=null;  
        }
    }
});
export const {loginAction, logoutAction} = dataSlice.actions;
export default dataSlice.reducer;