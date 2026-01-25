import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const OrderSlice = createSlice({
    name:'Order',
    initialState:{
        van:{},
        color:{},
        modifications:{},
        inventory:[],
        loading:false
    },

    reducers:{

         setLoading(state, action) {
         state.loading = action.payload;
        },

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
            state.loading = false

        }}
    }
})

export const { setOrder, setColor, setModify,setInventory,setLoading } = OrderSlice.actions;

const baseUrl = import.meta.env.VITE_API_URL;

export const InventoryData = ()=>async(dispatch)=>{
   try {
    dispatch(setLoading(true))
    const response = await axios.get(`${baseUrl}/inventory`,{withCredentials:true})
    console.log(response)
    dispatch(setInventory(response.data))

    
   } catch (error) {
    dispatch(setLoading(false))
    console.log(error)
    
   }
}

export default OrderSlice.reducer;