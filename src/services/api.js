import axios from 'axios';

export const getAllShows=async()=>{
    try{
    const res=await axios.get('https://api.tvmaze.com/search/shows?q=all');
    const data=await res.data;
    // console.log(data)
    return data;
    }
    catch(err){
        return err;
    }
}


