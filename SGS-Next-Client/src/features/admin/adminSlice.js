import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    users: null,
    careers: null,
    categories: null,
    credits: null,
    counselors: null,
    roadmaps: null,
    messages: []

}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setAdminData: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        },
        setUpdateUser: (state, action) => {
            return {
                ...state,
                users: state.users.map(user => user._id === action.payload._id ? action.payload : user)
            }
        },
        setCategories: (state, action) => {
            return {
                ...state,
                categories: [action.payload, ...state.categories]
            }
        },
        setApprovals: (state, action) => {
            return {
                ...state,
                counselors: state.counselors.map(counselor => counselor._id === action.payload._id ? action.payload : counselor)
            }
        },
        setCreditApprovals: (state, action) => {
            return {
                ...state,
                credits: state.credits.map(credit => credit._id === action.payload._id ? action.payload : credit)
            }
        },
        setMessage: (state, action) => {
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        }
    }
});

export const { setAdminData, setUpdateUser, setCategories, setApprovals, setCreditApprovals, setMessage } = adminSlice.actions

export default adminSlice.reducer