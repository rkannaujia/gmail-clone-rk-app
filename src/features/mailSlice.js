import {  createSlice } from '@reduxjs/toolkit';


export const mailSlice = createSlice({
  name: 'mail',
   initialState :{
     selectedMail: null,
    sendMessageIsOpen: false,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMail: (state, action) =>{
      state.selectedMail= action.payload;
    },
    OpenSendMessage: (state) => {
     
      state.sendMessageIsOpen= true;
    },
    CloseSendMessgae : (state) => {
      state.sendMessageIsOpen= false;
    },
  },
  
});

export const { selectMail, OpenSendMessage, CloseSendMessgae } = mailSlice.actions;


export const selectOpenMail = (state) => state.mail.selectedMail;
export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;


export default mailSlice.reducer;
