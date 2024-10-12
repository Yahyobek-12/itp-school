import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-newBlack text-white py-6 sm:px-10 px-4">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* ITP School Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ITP School</h2>
          <p className="mb-4">
          Texnologiya mutaxassisi bo'lish sari ilk qadamlaringizni biz bilan boshlang. Dasturlashni, kompyuter savodxonligini va boshqa ko'plab bilimlarni o'rganing.
          </p>
          <p>© 2024 ITP School. Barcha huquqlar himoyalangan.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <Link to="#home" className="block hover:text-gray-400 mb-2">Bosh Sahifa</Link>
          <Link to="#courses" className="block hover:text-gray-400 mb-2">Kurslar</Link>
          <Link to="#contact" className="block hover:text-gray-400">Bog'lanish</Link>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-bold mb-4">Biz bilan bog'lanish</h3>
          <p>Email: itpschool@gmail.com</p>
          <p>Phone: +998 (93) 811-36-72</p>

          <div className="flex space-x-4 mt-4">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-[50px] flex items-center justify-center mt-8 border-t-[1px] border-gray-400 pt-8 mb-4">
        <p className="text-xl">&copy; 2024 ITP School | Created by <Link to="https://yahyobek.vercel.app/" target='_blank' className='text-gray-300 border-b-2 border-gray-300'>Yahyobek</Link></p>
      </div>
    </footer>
  );
}

export default Footer;
