import { createSlice } from "@reduxjs/toolkit";
import { getShows } from "../actions/showsActions";

const INITIAL_STATE={
    shows:[],
    loading:true,
    isError:false
}
const showsSlice=createSlice({
        name:'shows',
        initialState:INITIAL_STATE,
        reducers:{
       
        },
        extraReducers:(builder)=>{
          builder
          .addCase(getShows.pending,(state)=>{
            state.loading=true;
          })  
          .addCase(getShows.fulfilled,(state,action)=>{
            // console.log(action.payload)
            state.shows=action.payload;
            state.loading=false;
          })
          .addCase(getShows.rejected,(state)=>{
            state.isError=true;
            state.loading=false
          })
        }
})

export const showReducer=showsSlice.reducer;
export const showSelector=(state)=>state.showReducer;
export const action=showsSlice.actions;