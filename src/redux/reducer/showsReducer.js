import { createSlice } from "@reduxjs/toolkit";
import { getShows } from "../actions/showsActions";

const INITIAL_STATE={
    shows:[],
    loading:false,
    isError:false
}
const showsSlice=createSlice({
        name:'shows',
        initialState:INITIAL_STATE,
        reducers:{},
        extraReducers:(builder)=>{
          builder
          .addCase(getShows.pending,(state)=>{
            state.loading=true;
          })  
          .addCase(getShows.fulfilled,(state,actions)=>{
            state.shows=actions.payload;
            state.loading=false;
          })
          .addCase(getShows.rejected,(state)=>{
            state.isError=true;
          })
        }
})

export const showReducer=showsSlice.reducer;
export const showSelector=(state)=>state.showReducer;