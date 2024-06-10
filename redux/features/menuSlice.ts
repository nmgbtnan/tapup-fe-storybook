import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  activeForm: '',
  overlayOpen: false,
}

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    changeActiveForm: (state, action: PayloadAction<string>)  => {
      state.activeForm = action.payload
    },
    changeOverlayOpen: (state, action: PayloadAction<boolean>)  => {
      state.overlayOpen = action.payload
    }
  }
});

export const {changeActiveForm, changeOverlayOpen} = menu.actions;
export default  menu.reducer