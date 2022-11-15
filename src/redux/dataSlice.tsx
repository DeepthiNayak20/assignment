import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "counter",
  initialState: [
    { id: 1, userName: "aaa" },
    { id: 2, userName: "bbb" },
    { id: 3, userName: "ccc" },
    { id: 4, userName: "ddd" },
  ],
  reducers: {
    addData: (state: any, action: any) => {
      const newData = {
        id: Date.now(),
        userName: action.payload.userName,
      };
      state.push(newData);
    },
    deleteData: (state, action) => {
      return state.filter((user) => user.id !== action.payload.id);
    },
  },
});

export const { addData, deleteData } = dataSlice.actions;

export default dataSlice.reducer;
