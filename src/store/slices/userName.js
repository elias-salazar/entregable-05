import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    changeName: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeName } = userNameSlice.actions;

export default userNameSlice.reducer;
