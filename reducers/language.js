import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {country: "Fra", language: 'fr-FR'}
};

console.log(initialState)

export const languagesSlice = createSlice({
 name: 'language',

  initialState,
 reducers: {
   addLanguageToStore: (state, action) => {
     state.value.country = action.payload.country,
     state.value.language = action.payload.language

   },
 },
});

export const { addLanguageToStore} = languagesSlice.actions;
export default languagesSlice.reducer;