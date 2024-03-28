import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    total: number,
    firstName: string,
    lastName: string,
    phone: string,
    email?: string,
    cart: any[]
}

const initialState: CartState = {
    total: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    cart: []
}

const cartSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {}
});

export const { } = cartSlice.actions

export default cartSlice.reducer