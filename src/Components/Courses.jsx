import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GradientIMG from '../Images/gradient-shape.png'
import RishotkaIMG from '../Images/rishotka.png'

const Courses = () => {
  return (
    <Swiper
      pagination={true} modules={[Pagination]} 
      className="w-[100%] md:h-[100vh] xs:h-[150vh] sx:h-[175vh] h-[190vh] custom-swiper-pagination"
    >
      <SwiperSlide>
        <div className='w-[100%] md:h-[100%] h-[70%] md:mt-0 sm:mt-28 xs:mt-36 mt-56 xl:px-56 lg:px-36 sm:px-12 px-4 flex items-center justify-center'>
          <div>
            <h1 className='lg:text-8xl text-6xl text-white font-bold'>ITP School kurslari bilan tanishing`</h1>
            <p className='text-gray-300 mt-4 xs:text-2xl text-xl'>Zamonaviy texnologiyalar dunyosida muvaffaqiyatga erishishni xohlaysizmi? ITP School sizga bu yo'lda birinchi va eng muhim qadamingizni tashlashda yordam beradi! Bizning kurslarimiz zamonaviy IT bilimlarini o'zlashtirishni istagan har bir kishiga moslashgan bo'lib, sizga o'z maqsadlaringizga tez va samarali yetishish imkonini beradi.</p>
            <p className='text-gray-300 mt-8 xs:text-2xl text-xl md:hidden block'>Kompyuter savodxonligi yoki frontend dasturlashni o'rganishni xohlaysizmi? Biz sizga kerakli bilim va ko'nikmalarni taqdim etamiz, shu bilan birga o'quv jarayoningiz qiziqarli va samarali bo'lishini ta'minlaymiz. Har bir kurs amaliy mashg'ulotlarga boy bo'lib, sizga real loyihalar ustida ishlash imkonini beradi.</p>
            <p className='text-gray-300 mt-8 xs:text-2xl text-xl md:hidden block'>Bizning professional o'qituvchilarimiz qo'llab-quvvatlovida siz qisqa vaqt ichida o'zingiz xohlagan natijalarga erishishingiz mumkin!</p>
          </div>
          <img src={RishotkaIMG} alt="element-img" className='absolute md:w-[300px] w-[400px] md:opacity-100 opacity-75 top-[5rem] right-[2rem] -z-10' />
          <img src={GradientIMG} alt="element-img" className='absolute md:w-[200px] w-[400px] md:opacity-100 opacity-75 bottom-[2rem] left-[0] -z-10' />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-[100%] h-[100%] md:py-28 py-24 sm:px-12 px-4">
          <div>
            <h1 className='text-white lg:text-2xl tetx-xl'>🎯 Kursning maqsadi: Har bir talaba kompyuter bilan mustaqil ishlay olishi, asosiy dasturlarni bilishi, va kundalik hayotda kerak bo'ladigan kompyuter ko'nikmalariga ega bo'lishini ta'minlash.</h1>
            <div className='md:flex block w-[100%] h-[100%] items-center justify-between lg:mt-10 md:mt-8 mt-4'>
            <div className='md:mt-0 mt-6'>
              <h2 className='text-gray-200 text-xl'>📚 Nimalarni o'rganasiz?</h2>
              <ul className='mt-4'>
                <li className='text-gray-300 mt-4'>Kompyuterning asosiy qismlari va ularning vazifalari</li>
                <li className='text-gray-300 mt-4'>Windows operatsion tizimi bilan ishlash</li>
                <li className='text-gray-300 mt-4'>Microsoft Office dasturlaridan (Word, Excel, PowerPoint) foydalanish</li>
                <li className='text-gray-300 mt-4'>Internet va xavfsizlik masalalari</li>
                <li className='text-gray-300 mt-4'>Fayllarni yaratish, saqlash va tartiblash</li>
                <li className='text-gray-300 mt-4'>Elektron pochta yaratish va undan foydalanish</li>
              </ul>
            </div>
           <div className='md:mt-0 mt-6'>
            <h2 className='text-xl text-white'>💻 Kimlar uchun?</h2>
            <ul className='mt-3'>
              <li className='text-gray-300 mt-4'>Kompyuter bilan endigina tanishayotganlar uchun</li>
              <li className='text-gray-300 mt-4'>Ishda yoki o'qishda kompyuter kerak bo'lib, ko'nikmalari yetarli bo'lmaganlar uchun</li>
              <li className='text-gray-300 mt-4'>Kundalik hayotda kompyuter ko'nikmalarini oshirishni istagan har bir kishi uchun</li>
            </ul>
            <h2 className='text-xl text-white mt-4'>⏰ Kurs davomiyligi: 1 oy</h2>
            <p className='text-gray-300 mt-3'>💵 Narxi: 200,000 so'm</p>
           </div>
          </div>
          <h1 className='text-white lg:text-2xl tetx-xl mt-6 md:mb-10 mb-6'>🚀 O'quv jarayoni: Oson va tushunarli metodika asosida, amaliy mashg'ulotlar bilan boyitilgan. Darslarimizdan so'ng siz kompyuterda ishlashni mukammal o'rganib olasiz!.</h1>
          <Link to="https://t.me/ALTAQVOOOO" target='_blank' className='text-gray-400'>🔗 Ro'yxatdan o'ting va zamonaviy dunyoda birinchi qadamni tashlang!</Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-[100%] h-[100%] md:py-28 py-24 sm:px-12 px-4">
          <div>
            <h1 className='text-white lg:text-2xl tetx-xl'>🎯 Kursning maqsadi: Har bir talaba zamonaviy vebsaytlar yaratish uchun kerakli bo'lgan asosiy frontend texnologiyalarni mukammal o'zlashtirib, o'zining ilk web-loyihalarini yaratishni o'rganadi.</h1>
            <div className='md:flex block w-[100%] h-[100%] items-center justify-between lg:mt-10 md:mt-8 mt-4'>
            <div className='md:mt-0 mt-6'>
              <h2 className='text-gray-200 text-xl'>📚 Nimalarni o'rganasiz?</h2>
              <ul className='mt-4'>
                <li className='text-gray-300 mt-4'>HTML: Veb sahifalarni yaratish uchun asosiy tuzilish</li>
                <li className='text-gray-300 mt-4'>CSS: Sahifalarga chiroyli ko'rinish berish va dizayn qilish</li>
                <li className='text-gray-300 mt-4'>JavaScript: Interaktivlik va dinamika qo'shish</li>
                <li className='text-gray-300 mt-4'>Responsive dizayn: Mobil va boshqa qurilmalar uchun moslashuvchan vebsaytlar yaratish</li>
                <li className='text-gray-300 mt-4'>Bootstrap va Tailwind CSS: Tez va samarali ishlash uchun CSS frameworklaridan foydalanish</li>
                <li className='text-gray-300 mt-4'>Git va GitHub: Loyiha boshqaruvi va kodlarni versiyalash</li>
              </ul>
            </div>
           <div className='md:mt-0 mt-6'>
            <h2 className='text-xl text-white'>💻 Kimlar uchun?</h2>
            <ul className='mt-3'>
              <li className='text-gray-300 mt-4'>Veb-dizayn va dasturlashni endigina boshlayotganlar uchun</li>
              <li className='text-gray-300 mt-4'>Freelancer bo'lib ishlashni xohlaganlar uchun</li>
              <li className='text-gray-300 mt-4'>O'zining veb-loyihalarini yaratishni istagan har bir kishi uchun</li>
            </ul>
            <h2 className='text-xl text-white mt-4'>⏰ Kurs davomiyligi: 12 oy</h2>
            <p className='text-gray-300 mt-3'>💵 Narxi: 300,000 so'm</p>
           </div>
          </div>
          <h1 className='text-white lg:text-2xl tetx-xl mt-6 md:mb-10 mb-6'>🚀 O'quv jarayoni: Amaliy mashg'ulotlar va real loyihalar asosida o'qitiladi. Kurs davomida siz bir nechta to'liq veb-loyihalarni tayyorlay olasiz!</h1>
          <Link to="https://t.me/ALTAQVOOOO" target='_blank' className='text-gray-400'>🔗 Ro'yxatdan o'ting va frontend dasturlash olamiga birinchi qadamni tashlang!</Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Courses;
