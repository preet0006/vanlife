import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const buildSlice = createSlice({
    name:"build",

    initialState: {
    intialPhoto: "",
    baseData: [],
    gearsData: [],
    modifyimages: [],
    initialStateImage: [],
    orderData: [],
    loading: false,
    error: null
 },


      reducers: {
     fetchStart(state) {
       state.loading = true;
       state.error = null;
     },
     fetchSuccess(state) {
       state.loading = false;
     },
     fetchError(state, action) {
       state.loading = false;
       state.error = action.payload;
     },
   
     setGear(state, action) {
       state.gearsData = action.payload;
     },
   
     setImage(state, action) {
       state.modifyimages = action.payload;
     },
   
     setInitial(state, action) {
       state.intialPhoto = action.payload;
     },
   
     removeInitial(state, action) {
       state.initialStateImage = state.initialStateImage.filter(
         (item) => item.name !== action.payload.name
       );
     },
   
     setBase(state, action) {
       state.baseData = [action.payload];
     },
   
     setOrderDetails(state, action) {
       state.orderData = action.payload;
     }
   }
   })
   
export const {setGear,setImage,setInitial,removeInitial,setBase,setOrderDetails,fetchStart,fetchSuccess,fetchError}=buildSlice.actions

const baseUrl = import.meta.env.VITE_API_URL;

export const fetchData = ()=>async(dispatch)=>{
try {
       dispatch(fetchStart());
        const response = await axios.get(`${baseUrl}/build`,{withCredentials:true})
        
        dispatch(setGear(response.data.gears))
        dispatch(setImage(response.data.modifyimages));

       
        dispatch(setBase({model:response.data.models, color: response.data.color, utilities: response.data.utilities }));

         dispatch(fetchSuccess());
       
        
} catch (error) {

    dispatch(fetchError(error.message || "Something went wrong"));
}
}