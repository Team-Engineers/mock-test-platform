import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    name: "",
    contact: "",
    accessLevel: "",
    userId: "",
    mock_test: {
      timeTaken: "",
      selectedOptions: [],
      optionsUI: [],
      questionStatus: [],
      totalQuestion: 60,
      testSubmitted: false,
    },
  },
  reducers: {
    setSliceEmail: (state, action) => {
      state.email = action.payload;
    },
    setSliceName: (state, action) => {
      state.name = action.payload;
    },
    setSliceContact: (state, action) => {
      state.contact = action.payload;
    },

    setSliceAccessLevel: (state, action) => {
      state.accessLevel = action.payload;
    },
    setSliceUserId: (state, action) => {
      state.userId = action.payload;
    },
    setTestCompleted: (state, action) => {
      const {
        timeTaken,
        selectedOptions,
        optionsUI,
        questionStatus,
        totalQuestion,
        testSubmitted,
      } = action.payload;
      return {
        ...state,
        mock_test: {
          ...state.mock_test,
          timeTaken,
          selectedOptions,
          optionsUI, // Corrected
          questionStatus,
          totalQuestion,
          testSubmitted,
        },
      };
    },
  },
});

export const {
  setSliceEmail,
  setSliceName,
  setSliceContact,
  setSliceAccessLevel,
  setSliceUserId,
  setTestCompleted,
} = userSlice.actions;

export default userSlice.reducer;
