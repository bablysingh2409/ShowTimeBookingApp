import React from 'react'
import { Link, Outlet } from 'react-router-dom';



function Nav() {
    
    return (
        <>
            <div className='h-[15vh] bg-[#0766AD] p-3'>
                <div className='flex justify-between items-center '>
                    <div className='w-[50px] h-[50px] border-2 border-black rounded-full transition ease-in-out delay-150 hover:-translate-y-1 
                    hover:scale-110 ml-3 '>
                        <Link to='/'>
                           <p className=' text-xl font-bold pt-2 w-[100%] h-[100%] border-2 border-[#053B50] rounded-full 
                           text-center text-white hover:text-[#053B50]'> FSA</p>
                        </Link>
                    </div>
                    <div className='w-[20%]'>
                        
                                <div className='p-3'>
                                        <p className='text-xl text-white font-semibold hover:text-[#053B50] '><Link to='/'>Home</Link></p>
                                </div> 
                             
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Nav