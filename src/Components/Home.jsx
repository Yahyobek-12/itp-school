import { Link } from 'react-router-dom'
import htmlImg from '../Images/html.png'
import cssImg from '../Images/css.png'
import { HSec1, HSec2, HSec3, HSec4, HSec5 } from '../Constants'

const Home = () => {
  return (
    <div>
        <div className="w-[100%] h-screen flex items-center justify-center px-4">
        <div className=''>
            <h1 id="home-title" className="lg:text-8xl md:text-7xl xs:text-6xl sx:text-5xl text-4xl font-bold font-outfit text-white">ITP School bilan birga <br /> kelajagingizni yarating</h1>
            <p className="mt-10 text-white xs:max-w-[550px] max-w-[450px] text-[20px]">ITP School'da har bir qadam sizni IT sohasida muvaffaqiyat sari yetaklaydi. Bilim va amaliyot bilan orzularingizni ro'yobga chiqaring!</p>
            <div className='mt-10'>
                <Link to="https://t.me/ALTAQVOOOO" target='_blank' className='py-4 px-12 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 rounded-md text-white hover:opacity-85'>Kursga yozilish</Link>
            </div>
        </div>

            <img id='html-css' src={htmlImg} alt="html-img" className='w-[200px] h-[200px] absolute bottom-[3rem] right-[10rem] hidden xl:block' />
            <img id='html-css' src={cssImg} alt="html-img" className='w-[100px] h-[100px] absolute top-[8rem] left-[4rem] hidden xl:block' />
        </div>
        <HSec1 />
        <HSec2 />
        <HSec3 />
        <HSec4 />
        <HSec5 />
    </div>
  )
}

export default Home