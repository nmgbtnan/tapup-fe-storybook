import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: 'Tony Stark',
  position: 'Software Engineer',
  bio: 'Saving the world one suit at a time. Founder of Stark Industries and the Avengers. #IronMan #TechGuru #HeroLife'
}

export const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<string>)  => {
      state.name = action.payload
    },
    changePosition: (state, action: PayloadAction<string>)  => {
      state.position = action.payload
    },
    changeBio: (state, action: PayloadAction<string>)  => {
      state.bio = action.payload
    },
  }
});

export const {changeName, changePosition, changeBio} = profile.actions;
export default  profile.reducer