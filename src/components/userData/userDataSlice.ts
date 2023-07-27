import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        user: "Shivam",
        password: "12445"
    }
]

const userDataSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        updateUserContent(state,action) {
         const { user, password} = action.payload;
            return [{
                    user: user,
                    password: password
                }]
        }
    }
});
export const { updateUserContent } = userDataSlice.actions;
export default userDataSlice.reducer;