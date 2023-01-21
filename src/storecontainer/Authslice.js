import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
  name: "",
  login: false,
};
const Authslice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    print(state, action) {
      state.name = state.name + action.payload;
      console.log("hai");
    },
    loginmeth(state, action) {
      state.login = true;
    },
    logout(state, action) {
      state.login = false;
    },
  },
});
export const AuthsliceAction = Authslice.actions;

export default Authslice;
