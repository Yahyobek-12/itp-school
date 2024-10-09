import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from 'react';
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const clickToggle = () => {
    setToggle(!toggle)
  }

  return (
    <nav className="w-[100%] h-[80px] fixed flex items-center justify-between md:px-16 px-6 z-10 shadow-md shadow-gray-900">
        <Link to="/" className='text-blue-500 text-3xl z-10'>ITP <span className='font-bold font-mono text-white'>School</span></Link>
        <ul className='md:block hidden'>
          <Link to="/" className='py-[15px] px-[25px] text-gray-300 font-bold rounded-md hover:bg-slate-800'>Bosh Sahifa</Link>
          <Link to="/courses" className='py-[15px] px-[25px] text-gray-300 font-bold rounded-md hover:bg-slate-800'>Kurslar</Link>
          <Link to="/blog" className='py-[15px] px-[25px] text-gray-300 font-bold rounded-md hover:bg-slate-800'>Do'kon</Link>
        </ul>
        <Link to="/" className='py-[10px] px-[20px] ml-4 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600 text-white rounded-md hover:scale-[98%] border-b-[3px] border-blue-800 hidden md:block'>Bog'lanish</Link>
        {toggle ? <IoClose className='text-white text-[40px] block md:hidden py-2 px-2 z-10' style={{ cursor: 'pointer' }}onClick={clickToggle} /> : <HiMenuAlt4 className='text-white text-[40px] block md:hidden py-2 px-2 z-10' style={{ cursor: 'pointer' }}onClick={clickToggle} />}

        <div className={`${toggle ? 'block' : 'hidden'} md:hidden block w-[100%] h-[50vh] fixed top-0 left-0 bg-slate-950 px-4`}>
          <ul className='py-16 px-2'>
            <Link to="/" className='text-white block mt-6'>Bosh Sahifa</Link>
            <Link to="/" className='text-white block mt-6'>Kurslar</Link>
            <Link to="/" className='text-white block mt-6'>Do'kon</Link>  
          </ul>
          {/* <hr className='bg-gray-100' /> */}
          <Link to="/" className='py-[10px] px-[20px] bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600 text-white rounded-md hover:opacity-85'>Bog'lanish</Link>
        </div>
    </nav>
  )
}

export default Navbar