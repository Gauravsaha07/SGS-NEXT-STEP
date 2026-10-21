import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counselors: null
}

const counselor = createSlice({
    name: "counselor",
    initialState,
    reducers: {
        setCounselors: (state, action) => {
            return {
                ...state,
                counselors: action.payload
            }
        }
    }
});

export const { setCounselors } = counselor.actions

export default counselor.reducer