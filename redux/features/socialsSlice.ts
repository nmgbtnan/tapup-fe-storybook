import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";

const initialState = {
  socials: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/',
      icon: 'facebook',
      iconColor: '',
      iconBgColor: '',
    }
  ]
}