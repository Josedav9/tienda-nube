import { createSlice } from "@reduxjs/toolkit";

let initialState: Array<object> = [];

const userSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    addStore: (state, { payload }: { payload: object | Array<object> }) => {
      if (Array.isArray(payload)) {
        state = payload;
        return;
      }

      state.push(payload);
    },
    editStore: (state, action) => {},
    deleteStore: (state, action) => {},
  },
});

export const { addStore, editStore, deleteStore } = userSlice.actions;
export default userSlice.reducer;
