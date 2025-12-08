import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface UserState { name: string; loggedIn: boolean, toastMessage:string }
const initialState: UserState = { name: "", loggedIn: false, toastMessage:"" };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.name = "";
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
