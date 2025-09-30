import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const buildSlice = createSlice({
    name:"build",
    initialState:{
        intialPhoto:"",
        baseData:[],
        gearsData:[],
        modifyimages:[],
        initialStateImage:[],
        orderData:[]

    },
    reducers:{
        setGear(state,action){
          
            state.gearsData=action.payload
        },

        setImage(state,action){
        
            state.modifyimages=action.payload
        },
        
        setInitial(state,action){
            
            state.intialPhoto=action.payload
        },
        removeInitial(state,action){
            state.initialStateImage = state.initialStateImage.filter(
                (item) => item.name !== action.payload.name);
        },   
        
        setBase(state,action){
           state.baseData = [action.payload]
        },

        setOrderDetails(state,action){
            console.log(action.payload)
            state.orderData=action.payload
        }
    }
})

export const {setGear,setImage,setInitial,removeInitial,setBase,setOrderDetails}=buildSlice.actions

const baseUrl = "http://localhost:3000/api/v1/"

export const fetchData = ()=>async(dispatch)=>{
try {
        const response = await axios.get(`${baseUrl}build`,{withCredentials:true})
        
        dispatch(setGear(response.data.gears))
        dispatch(setImage(response.data.modifyimages));

       
        dispatch(setBase({model:response.data.models, color: response.data.color, utilities: response.data.utilities }));

        
       
        
} catch (error) {
    console.log(error)
}
}