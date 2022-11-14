import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    addData: (state: any, action: any) => {
      const newData = {
        id: Date.now(),
        userName: action.payload.userName,
      };
      state.push(newData);
    },
  },
});

export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
