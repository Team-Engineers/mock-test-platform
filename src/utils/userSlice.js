import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        name: "",
        contact: "",
        accessLevel: "",
        userId: "",
        mock_test : {
            timeTaken : "",
            selectedOptions : [],
            optionsUI : [],
            questionStatus  : [],
            totalQuestion : 60
        }

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
        setTestCompleted : (state , action )=>{
            state.mock_test.timeTaken = action.payload.timeTaken;
            state.mock_test.selectedOptions = action.payload.selectedOptions;
            state.mock_test.optionsUI = action.payload.optionsUI;
            state.mock_test.questionStatus = action.payload.questionStatus;
            state.mock_test.totalQuestion = action.payload.totalQuestion;

        }
    },
});

export const {
    setSliceEmail,
    setSliceName,
    setSliceContact,
    setSliceAccessLevel,
    setSliceUserId,
    setTestCompleted
} = userSlice.actions;

export default userSlice.reducer;