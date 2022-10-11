import { createSlice } from "@reduxjs/toolkit";
import { StoreEntity } from "../../../domain/store/store.entity";

let initialState: Array<StoreEntity> = [];

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
