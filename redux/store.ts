import {configureStore} from '@reduxjs/toolkit';
import styles from './features/stylesSlice';

const store = configureStore({
  reducer: {
    styles
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// selectors
