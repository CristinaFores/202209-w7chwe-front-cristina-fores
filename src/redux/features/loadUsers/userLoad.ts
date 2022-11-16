import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserListState, UserStructure } from "./types";

const userListInitialState: UserListState = {
  list: [],
};

const userListSlice = createSlice({
  name: "userList",
  initialState: userListInitialState,
  reducers: {
    loadUserList: (
      currentUserListState,
      action: PayloadAction<UserStructure[]>
    ): UserListState => ({
      ...currentUserListState,
      list: [...action.payload],
    }),
  },
});

export const userListReducer = userListSlice.reducer;

export const { loadUserList: loadUserListActionCreator } =
  userListSlice.actions;
