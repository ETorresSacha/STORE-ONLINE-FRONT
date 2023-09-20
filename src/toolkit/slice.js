import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    opcion:""

};

export const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    startIsLoading: (state) => {
      state.isLoading = true;
    },

    // OPCIÓN DEL NAV
    startOption: (state, { payload }) => {
        state.opcion = payload;
      },


  },
});

export const {
  
} = workSlice.actions;

//export default workSlice.reducer
