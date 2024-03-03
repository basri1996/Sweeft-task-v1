import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface HistoryStateTypes {
    history: {
      historyArray: string[];
    };
  }


const initialState:HistoryStateTypes["history"] = {
    historyArray:[],
  };

const historySlice = createSlice({
  name: "history",
  initialState: initialState,
  reducers: {
    addToHistory(state, action:PayloadAction<string>) {
        // state.historyArray.push(action.payload);
        if(!state.historyArray.includes(action.payload)){
          state.historyArray = [...state.historyArray,action.payload];
        }
      },
  }
});

export const {addToHistory} = historySlice.actions;

export default historySlice.reducer;
