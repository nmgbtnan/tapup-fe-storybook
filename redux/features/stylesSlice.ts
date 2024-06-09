import { createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState = {
  color : '#000000',
  bgColor: '#ffffff',
  nameColor: '#000000'
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
    }
  }
});

export const {changeBgColor, changeColor, changeNameColor} = styles.actions;
export default  styles.reducer;