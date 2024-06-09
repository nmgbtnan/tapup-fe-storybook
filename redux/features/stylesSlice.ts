import { createSlice, PayloadAction} from "@reduxjs/toolkit";



const initialState = {
  color : '#000000',
  bgColor: '#ffffff'
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
    }
  }
});

export const {changeBgColor, changeColor} = styles.actions;
export default  styles.reducer;