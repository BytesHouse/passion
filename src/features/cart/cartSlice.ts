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
        load: (state, action: PayloadAction<any>) => {
            state.cart = action.payload
            state.total = action.payload.reduce((acc: number, item: Item) => {
                return acc + Number(item.price) * Number(item.count)
            }, 0)
        },
        addToCart: (state, action: PayloadAction<any>) => {
            state.cart.push(action.payload)
            state.total += Number(action.payload.price)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeFromCart: (state, action: PayloadAction<any>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.item.id)
            state.total -= +action.payload.item.price * +action.payload.count
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        clearCart: (state) => {
            state.cart = []
            state.total = 0
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
        ,
        incTotal: (state, action: PayloadAction<any>) => {
            state.total += +action.payload.price
            state.cart = state.cart.map(item => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        count: Number(action.payload.count) + 1
                    }
                }
                return item
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))

        },
        decTotal: (state, action: PayloadAction<any>) => {
            state.total -= +action.payload.price
            state.cart = state.cart.map(item => {
                if(item.id === action.payload.id) {
                    return {
                        ...item,
                        count: +action.payload.count - 1
                    }
                }
                return item
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
    }
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    incTotal,
    decTotal,
    load
} = cartSlice.actions

export default cartSlice.reducer