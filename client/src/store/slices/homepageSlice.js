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

    reducers: {
    setLoading(state, action) {
    state.loading = action.payload;
  },

    sethero(state, action) {
      state.hero = action.payload.hero1;
      state.hero2 = action.payload.hero2;
      state.loading = false;
    },
  
    setImages(state, action) {
      state.images = action.payload;
      state.loading = false;
    },
  
    setVanCard(state, action) {
      state.vanCard = action.payload;
      state.loading = false;
    },
  
    setCards(state, action) {
      state.cards = action.payload;
      state.loading = false;
    },
  
    setPlus(state, action) {
      state.plus = action.payload;
      state.loading = false;
    }
 }  


})
export const {sethero,setVanCard,setImages,setCards,setPlus,setLoading}=homeSlice.actions;

const baseUrl = import.meta.env.VITE_API_URL;


export const getData =()=> async(dispatch)=>{
    try {
        dispatch(setLoading(true))
        const response = await axios.get(`${baseUrl}/homepage`,{withCredentials:true});
         
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
        dispatch(setLoading(false))
        console.log("something went wrong",error)
        
    }
}

    export const gethome = () => async (dispatch) => {
      try {
        dispatch(setLoading(true));
    
        const response = await axios.get(
          `${baseUrl}/rest`,
          { withCredentials: true }
        );
    
        dispatch(setImages(response.data.data.images));
        dispatch(setCards(response.data.data.cards));
    
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    };
    
    
    export const getPlus = () => async (dispatch) => {
      try {
        dispatch(setLoading(true));
    
        const response = await axios.get(
          `${baseUrl}/plus`,
          { withCredentials: true }
        );
    
        dispatch(setPlus(response.data.data));
    
      } catch (error) {
        dispatch(setLoading(false));
        console.log(error);
      }
    };
    
    
    export default homeSlice.reducer


