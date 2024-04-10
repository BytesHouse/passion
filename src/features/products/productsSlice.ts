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
    filter: number,
}

const initialState: ProductsState = {
    products: [],
    filter: 0,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        load: (state, action: PayloadAction<any>) => {
            state.products = action.payload
        },
        setFilter: (state, action: PayloadAction<number>) => {
            state.filter = action.payload
            state.products = state.products.filter((product) => product.category == action.payload)
        }

    }
})

export const { load,setFilter } = productsSlice.actions
export default productsSlice.reducer