import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : 'park',
    reducers: {
        changeName(state) {
            return 'joo' + state
        }
    }
})

let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
}) 

let cart = createSlice({
    name : 'cart',
    initialState:[
        {id : 0, name : 'White and Black', count : 2},
        {id : 1, name : 'Grey Yordan', count : 1}
    ],
    reducers: {
        addCount(state, action) {
            // state[action.payload].count++
            let Number = state.findIndex((a) => {return a.id === action.payload})
            state[Number].count++
        },
        addItem(state, action) {
            state.push(action.payload)
        } 
    }
})

export let { changeName } = user.actions
export let { addCount, addItem } = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
   }
}) 