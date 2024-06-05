import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Product {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    count: number,
    category: number
}

export interface ProductsState {
    products: Product[],
    filtered: Product[],
    filter: number,
}

const initialState: ProductsState = {
    products: [],
    filtered: [],
    filter: 0,
}

const shopNamesSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        load: (state, action: PayloadAction<any>) => {
            state.products = action.payload
            state.filtered = action.payload
        },
        reset: (state) => {
            state.filtered = state.products
        },
        setFilter: (state, action: PayloadAction<number>) => {
            state.filter = action.payload
            state.filtered = state.products.filter((product) => product.category === action.payload)
        }

    }
})

export const { load,setFilter,reset } = shopNamesSlice.actions
export default shopNamesSlice.reducer