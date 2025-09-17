import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const OrderSlice = createSlice({
    name:'Order',
    initialState:{
        van:{},
        color:{},
        modifications:{},
        inventory:[],
    },

    reducers:{
        setOrder(state,action){
            state.van=action.payload
        },
        setColor(state,action){
            state.color = action.payload
        },
        setModify(state,action){
            state.modifications=action.payload
        },
        setInventory(state,action){{
            state.inventory=action.payload
        }}
    }
})

export const { setOrder, setColor, setModify,setInventory } = OrderSlice.actions;

const baseUrl = "http://localhost:3000/api/v1/"

export const InventoryData = ()=>async(dispatch)=>{
   try {
    const response = await axios.get(`${baseUrl}inventory`,{withCredentials:true})
    console.log(response)
    dispatch(setInventory(response.data))

    
   } catch (error) {
    console.log(error)
    
   }
}

export default OrderSlice.reducer;