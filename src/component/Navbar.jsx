import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="w-full">
                <div className=" bg-indigo-700 text-white text-sm  font-bold font-sans w-full px-3 py-3 bg-[url(https://wallpapercave.com/wp/wp1931300.jpg)]">
                    <ul className='flex gap-6 mx-auto ml-5'>
                        <li className=' cursor-pointer hover:text-xs hover:bg-indigo-950 p-1  rounded-lg '>itask</li>
                        <li className=' cursor-pointer hover:text-xs  hover:bg-indigo-950 p-1  rounded-lg'>Home</li>
                        <li className=' cursor-pointer hover:text-xs hover:bg-indigo-950 p-1 rounded-lg'>Login</li>
                    </ul>
                </div>
            </div>
            </div>

       
  )
}

export default Navbar
