import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export function getAllBranches() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/branches")
        return dispatch(getBranches(json.data))
    }
}

export const { getBranches, getBranchById } = branchesSlice.actions;

export default branchesSlice.reducer;