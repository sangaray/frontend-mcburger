import { createSlice } from "@reduxjs/toolkit";

export const branchesSlice = createSlice({
    name: "branches",
    initialState: {
        branches: [],
        detail: {}
    },
    reducers: {
        getBranches: (state, action) => {
            state.branches = action.payload
        },
        getBranchById: (state, action) => {
            state.branches = action.payload
        },
    }
})

export const { getBranches, getBranchById } = branchesSlice.actions;

export default branchesSlice.reducer;