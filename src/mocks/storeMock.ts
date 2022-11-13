import { configureStore } from "@reduxjs/toolkit";
import { UserState } from "../redux/features/userSlice/types";
import { userReducer } from "../redux/features/userSlice/userSlice";

const initialState: UserState = {
  id: "",
  token: "",
  username: "",
  isLogged: false,
};

export const mockInitialStore = configureStore({
  reducer: {
    user: userReducer,
  },

  preloadedState: {
    user: initialState,
  },
});
