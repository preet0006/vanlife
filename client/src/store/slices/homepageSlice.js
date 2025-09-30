import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const homeSlice = createSlice({
    name:"home",
    initialState:{
        hero:[],
        hero2:[],
        images:[],
        vanCard:[],
        cards:[],
        plus:{},
        loading:true
    },

    reducers:{

        sethero(state,action){
            state.hero=action.payload.hero1
            state.hero2 = action.payload.hero2
            
        },
        
        setImages(state,action){
            state.images=action.payload
            
        },

        setVanCard(state,action){
        
            state.vanCard=action.payload
        },

        setCards(state,action){
           
            state.cards = action.payload

        },
        setPlus(state,action){
          
            state.plus = action.payload

        }
    }

})
export const {sethero,setVanCard,setImages,setCards,setPlus}=homeSlice.actions;

const baseUrl = "http://localhost:3000/api/v1/"


export const getData =()=> async(dispatch)=>{
    try {
        const response = await axios.get(`${baseUrl}homepage`,{withCredentials:true});
         
        const images = {
            hero1:[],
            hero2:[],
        } 
      
        response.data.data.images.forEach((item)=>{
            if(item.section==="hero"){
                images.hero1.push(...item.imageUrl);
            } else if(item.section==="hero2"){
                images.hero2.push(...item.imageUrl)
            }
        })
       dispatch(sethero(images));
       dispatch(setVanCard(response.data.data.cards))
    //    console.log(response.data.data.cards)
        
    } catch (error) {
        console.log("something went wrong",error)
        
    }
}

export const gethome = ()=>async(dispatch)=>{
    
    const response = await axios.get(`${baseUrl}rest`,{withCredentials:true})
    // console.log(response.data.data.cards)

   dispatch( setImages(response.data.data.images));
    dispatch(setCards(response.data.data.cards))
}


export const getPlus = ()=>async(dispatch)=>{
    
    const response = await axios.get(`${baseUrl}plus`,{withCredentials:true})
   
    dispatch(setPlus(response.data.data))
   
    
}

export default homeSlice.reducer


