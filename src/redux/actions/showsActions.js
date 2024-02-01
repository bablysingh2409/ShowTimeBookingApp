import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllShows } from "../../services/api";


export const getShows=createAsyncThunk('shows/fetchShows',async()=>{
    try{
        const shows=await getAllShows();
        return shows;
    }
    catch(err){
        return err;
    }
})