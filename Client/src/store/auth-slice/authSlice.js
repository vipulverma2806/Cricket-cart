import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    isAuthenticated:false,
    isLoading:false,
    user:null,
}

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
