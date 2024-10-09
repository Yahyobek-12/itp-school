import { Routes, Route } from 'react-router-dom'
import { Navbar, Home, Footer } from './Constants'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App