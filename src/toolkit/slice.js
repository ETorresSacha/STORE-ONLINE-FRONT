import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    option:""
};

export const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    startIsLoading: (state) => {
      state.isLoading = true;
    },

    // OPCIÓN DEL NAV
    startOption: (state, { payload }) => {
        state.option = payload;
      },


  },
});

export const {
  startIsLoading,
  startOption
  
} = clothesSlice.actions;

//export default workSlice.reducer
