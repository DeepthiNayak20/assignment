import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getDataAsync: any = createAsyncThunk(
  "counter/getDataAsync",
  async () => {
    const response = await fetch(`http://localhost:5000/counter`);
    if (response.ok) {
      const counterData = await response.json();
      return { counterData };
    }
  }
);

export const addDataAsync: any = createAsyncThunk(
  "counter/addDataAsync",
  async (payload: any) => {
    const response = await fetch(`http://localhost:5000/counter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: payload.userName }),
    });
    if (response.ok) {
      const counterAddData = await response.json();
      return { counterAddData };
    }
  }
);

export const deleteDataAsync: any = createAsyncThunk(
  "counter/deleteDataAsync",
  async (payload: any) => {
    const response = await fetch(
      `http://localhost:5000/counter/${payload.id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      return { id: payload.id };
    }
  }
);

const dataSlice = createSlice({
  name: "counter",
  initialState: [{ id: 1, userName: "" }],
  reducers: {},
  extraReducers: {
    [getDataAsync.pending]: (state, action) => {
      console.log("fetching data...");
    },
    [getDataAsync.fulfilled]: (state: any, action: any) => {
      console.log("fetched data successfully...");
      return action.payload.counterData;
    },
    [addDataAsync.fulfilled]: (state, action) => {
      state.push(action.payload.counterAddData);
    },

    [deleteDataAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export default dataSlice.reducer;
