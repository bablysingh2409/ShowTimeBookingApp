import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { showSelector } from '../redux/reducer/showsReducer';

function ShowDetails() {
    const { id } = useParams();
    const [show, setShow] = useState([]);
    const { shows } = useSelector(showSelector);
    const navigate=useNavigate();


    useEffect(() => {
        const showDetails = shows.filter((sh) => sh.show.id === parseInt(id, 10));
        console.log(showDetails)
        setShow([...showDetails])
    }, [id,shows]);

    const handleBooking = (showName) => {
         navigate(`/book-show/${showName}`)
 
    }

    return (
        <div className=' p-2 '>
            <div className='w-[100%] m-auto p-2  h-full'>
                {
                    show.map((u) => {
                        const imgUrl = u.show.image?.original
                            ? u.show.image.original
                            : 'https://m.media-amazon.com/images/M/MV5BMjI0NDE2OTA4Ml5BMl5BanBnXkFtZTcwODU5NzQzOQ@@._V1_.jpg)';
                        return (
                            <div key={u.show.id} className='flex p-4 
                           h-full shadow-lg shadow-[#0766AD] gap-3'>
                                <div className='w-[30%]'>
                                    <img src={imgUrl} alt='show-img'/>
                                </div>
                                <div className='w-[50%]  flex flex-col p-3 items-center'>
                                    <h1 className='text-5xl uppercase font-bold text-[#7E2553]'>{u.show.name}</h1>
                                    <div className='text-lg mt-8'>
                                    <div dangerouslySetInnerHTML={{ __html: u.show.summary }} />
                                    </div>
                                </div>

                                <div className='w-[20%] flex p-2 flex-col justify-between gap-5'>
                                    <div>
                                    <h1 className='text-lg uppercase font-bold text-[#7E2553]'>Language- <span className='font-semibold
                                  pl-4 text-[#3B3486] text-sm'>{u.show.language}</span></h1>
                                <h1 className='text-lg uppercase font-bold text-[#7E2553]'>Genres- {u.show.genres.map((m,i)=><span className='font-semibold
                                    pl-4 text-[#3B3486] text-sm' key={i}>{m}</span>)}</h1>
                                    <h1 className='text-lg uppercase font-bold text-[#7E2553]'>Rating- <span className='font-semibold
                                  pl-4 text-[#3B3486] text-sm'>{u.show.rating.average}/10</span></h1>
                                    </div>
                                    <button className=' p-2  border-2 border-[#294B29] bg-[#294B29] w-full m-auto text-xl font-bold text-white hover:text-[#294B29]
                                 hover:bg-white rounded' onClick={() => handleBooking(u.show.name)}>Book Show</button>
                                </div>
                            </div>)
                    })
                }
            </div>
        </div>
    )
}

export default ShowDetails