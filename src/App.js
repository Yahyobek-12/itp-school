import { Routes, Route } from 'react-router-dom'
import { Navbar, Home, Footer, Courses } from './Constants'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App