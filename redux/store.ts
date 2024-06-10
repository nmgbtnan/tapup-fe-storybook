import {configureStore} from '@reduxjs/toolkit';
import styles from './features/stylesSlice';
import  menu  from './features/menuSlice';
import  profile  from './features/profileSlice';

const store = configureStore({
  reducer: {
    styles,
    menu,
    profile
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// selectors
