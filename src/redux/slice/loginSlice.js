import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    password: "",
};

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload)
            state.email = action.payload.email;
            state.password = action.payload.password
        },
    },
});

export const { setUser } = loginSlice.actions;
export default loginSlice.reducer;