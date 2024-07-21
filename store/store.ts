import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export default store;
