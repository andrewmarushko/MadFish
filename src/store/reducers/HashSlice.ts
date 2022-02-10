import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHashes } from "../../models/IHashes";

interface HashState {
    hashes: IHashes[],
}

const initialState: HashState = {
    hashes: [],
}

export const hashSlice = createSlice({
    name: 'hash',
    initialState,
    reducers: {
        addBalance(state, action: PayloadAction<IHashes>) {
            state.hashes.push(action.payload);
        },
        removeBalance(state, action: PayloadAction<IHashes>) {
          state.hashes = state.hashes.filter(item => item.id !== action.payload.id);
        }
    }
})

export default hashSlice.reducer;