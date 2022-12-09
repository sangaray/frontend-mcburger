import { createSlice } from "@reduxjs/toolkit";
import { getAllBranches } from "../../../actions";
import { getBranchById } from "../../../actions";


export const branchesSlice = createSlice({
    name: "products",
    initialState: {
        branches: [],
        detail: {}
    },
    reducers: {
        getAllBranches: (state, action) => {
            state.branches = action.payload
        },
        getBranchById: (state, action) => {
            state.branches = action.payload
        },
    }
})

export const { getAllBranches, getBranchById } = branchesSlice.actions;

export default branchesSlice.reducer;