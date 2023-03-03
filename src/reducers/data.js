import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "data",
    initialState: {
        data: {
            username: "",
            email: "",
            role: null,
        },
    },
    reducers: {
        loginAction: (state, action) => {
            state.data = action.payload;
        },
    },
});

// Export action function nya
export const { loginAction, updateAction,logoutAction } = authSlice.actions; // fungsi di dalam property reducers

// Export reducersnya
export default authSlice.reducer;
