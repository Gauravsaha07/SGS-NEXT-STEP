import { createSlice } from '@reduxjs/toolkit'
import { setCategories } from '../admin/adminSlice';

const userExist = JSON.parse(localStorage.getItem("user"))


const initialState = {
    user: userExist || null,
    categories: []
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        },
        logOutUser: (state, action) => {
            return {
                ...state,
                user: null
            }
        },
        setAllCategories: (state, action) => {
            return {
                ...state,
                categories: action.payload
            }
        }
    }
});

export const { setUser, logOutUser, setAllCategories } = authSlice.actions

export default authSlice.reducer