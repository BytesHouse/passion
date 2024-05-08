import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Shops {
    shopName: string,
}

const initialState: Shops = {
    shopName: "products"
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<any>) => {
            state.shopName = action.payload;
        },
        showName: (state: any) => {
            return state;
        },
    }
})

export const { setName, showName} = productsSlice.actions
export default productsSlice.reducer