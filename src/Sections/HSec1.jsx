import { Link } from 'react-router-dom'
import pcIMG from '../Images/PC.png'

const HSec1 = () => {
  return (
    <div className="w-[100%] h-=[80vh] xl:flex block items-center justify-evenly px-6">
        <div className=''>
            <h1 className='sm:text-7xl text-5xl text-white font-bold'><span className='text-blue-500'>Bizning</span> Kursimiz <br /> Haqida <span className='text-blue-500'> Qisqacha</span></h1>
            <p className='text-gray-300 mt-4 xl:max-w-[550px] max-w-[100%]'>Komp'yuter texnologiyalari va dasturlash dunyosiga qadam qo'ying!
            ITP School'da sizni qiziqarli va amaliy kurslar kutmoqda. Bizning maqsadimiz — sizga zamonaviy texnologiyalarni o'rganishda yordam berish va IT sohasida muvaffaqiyatli karera yaratishingizga ko'maklashishdir.</p>
            <div className='mt-8'>
              <Link to="/courses" className='py-3 px-12 bg-gradient-to-tl from-blue-800 to-blue-400 text-white rounded-md hover:opacity-85'>Kurslar</Link>
            </div>
        </div>
        <img src={pcIMG} alt="old-img" className='w-[800px] mt-12 md:0' />
    </div>
  )
}

export default HSec1