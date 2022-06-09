import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        setProductData(state, action){
            state.items = action.payload.items
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice;