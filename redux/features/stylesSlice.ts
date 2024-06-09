import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  color : '#000000',
  bgColor: '#ffffff',
  nameColor: '#000000',
  nameFontFamily: 'font-roboto-condensed',
  fontFamily: 'font-roboto-condensed',
  nameSize: '18px',
  infoSize: '14px',
} 

export const styles = createSlice({
  name: "styles",
  initialState,
  reducers: 
  {
    changeColor: (state, action: PayloadAction<string>)  => {
      state.color = action.payload
    },
    changeBgColor: (state, action: PayloadAction<string>)  => {
      state.bgColor = action.payload
    },
    changeNameColor: (state, action: PayloadAction<string>)  => {
      state.nameColor = action.payload
    },
    
    changeNameFontFamily: (state, action: PayloadAction<string>)  => {
      state.nameFontFamily = action.payload
    },
    changeFontFamily: (state, action: PayloadAction<string>)  => {
      state.fontFamily = action.payload
    },

    changeNameSize: (state, action: PayloadAction<string>)  => {
      state.nameSize = action.payload
    },
    changeInfoSize: (state, action: PayloadAction<string>)  => {
      state.infoSize = action.payload
    },
  }
});

export const {changeBgColor, changeColor, changeNameColor, changeFontFamily, changeNameFontFamily, changeNameSize, changeInfoSize} = styles.actions;
export default  styles.reducer;