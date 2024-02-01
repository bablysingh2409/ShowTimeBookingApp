import React, { useEffect } from 'react';
import { showSelector } from '../redux/reducer/showsReducer';
import { useSelector, useDispatch } from 'react-redux';
import { getShows } from '../redux/actions/showsActions';
import { useNavigate } from 'react-router-dom';


function ShowList() {
    const { shows, loading } = useSelector(showSelector);
    const dispatch = useDispatch();
    const navigate=useNavigate();
   

    useEffect(() => {
        dispatch(getShows());
    }, []);

 const handleClick=(id)=>{
     navigate(`/show-details/${id}`)
 }

    if (loading) {
        return <p>loading.....</p>
    }

    return (
        <div className='w-full p-2'>
            <div className='w-[100%] m-auto p-2 '>
                <h1 className='text-7xl font-bold text-center p-4 text-[#910A67] underline'>All Shows List</h1>


                <div className='flex p-3 flex-wrap justify-center m-3  w-[100%]'>

                    {
                        shows.map((sh, i) => {
                            
                            return (
                                <div className='m-3 p-5 w-[20%]  border-2 border-[#0766AD] shadow-md shadow-[#0766AD]
                                transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102
                                 cursor-pointer flex flex-col items-center' key={sh.show.id}>
                              
                                        <h1 className='text-center text-2xl uppercase font-bold
                                                       text-[#D63484] p-2 '>{sh.show.name}</h1>
                                        <h1 className='text-lg font-semibold text-[#561C24] text-center'>Language:{sh.show.language}</h1>
                                        <h1 className='text-lg font-semibold text-[#720455] text-center'>Genres:{sh.show.genres[0]}</h1>
                                        <button className='w-[60%] p-1 border-2 border-[#0766AD] bg-[#0766AD] text-white rounded-md 
                                     text-lg  font-semibold hover:bg-[#91C8E4] hover:text-black mt-4 ' onClick={()=>handleClick(sh.show.id)}>More Details</button>
                                  
                                </div>
                                

                            )


                        })
                    }



                </div>



            </div>
        </div>
    )
}

export default ShowList