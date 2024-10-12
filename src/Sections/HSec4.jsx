import { Link } from 'react-router-dom'
import fallIMG from '../Images/blue-fall.png'

const HSec4 = () => {
  return (
    <div className='w-full md:h-[120vh] xs:h-[80vh] h-[60vh] py-4 xs:py-12 px-4 xs:px-12 text-center lg:mt-0 xs:mt-[60rem] mt-[45rem]'>
      <h1 className='text-xl sx:text-3xl xs:text-5xl md:text-7xl text-white uppercase font-bold'>
        <span className='text-blue-500'>Kuzgi</span> qabul <span className='text-blue-500'>ochiq</span>
      </h1>
      <div className='w-full lg:h-[85%] md:h-[75%] sm:h-[80%] h-[70%] flex items-center justify-center mb-4'>
        <img src={fallIMG} alt="fall-img" className='w-[300px] xs:w-[500px] md:w-[900px]' />
      </div>
      <div className='mt-5 xs:mt-0'>
        <Link to="https://t.me/ALTAQVOOOO" target='_blank' className='py-3 md:py-4 px-6 md:px-12 bg-gradient-to-bl from-blue-700 via-blue-300 to-blue-700 rounded-md text-white text-[20px] md:text-2xl border-b-2 border-blue-500 hover:opacity-85'>
          Kursga yozilish
        </Link>
      </div>
    </div>
  )
}

export default HSec4
