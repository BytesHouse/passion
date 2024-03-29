import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
    total: number,
    firstName: string,
    lastName: string,
    phone: string,
    email?: string,
    cart: Item[]
}

type Item = {
    id: number,
    name: string,
    price: number,
    image: string,
    count: number
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
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            state.cart.push(action.payload)
            state.total += action.payload.price
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
            state.total -= action.payload.price
        },
        incTotal: (state, action: PayloadAction<any>) => {
            state.total += action.payload.price
            state.cart = state.cart.map(item => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        count: action.payload + 1
                    }
                }
                return item
            })
        },
        decTotal: (state, action: PayloadAction<any>) => {
            state.total -= action.payload.price
            state.cart = state.cart.map(item => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        count: action.payload - 1
                    }
                }
                return item
            })
        },
    }
});

export const {
    addToCart,
    removeFromCart,
    incTotal,
    decTotal
} = cartSlice.actions

export default cartSlice.reducer