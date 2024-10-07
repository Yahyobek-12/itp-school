import { Routes, Route } from 'react-router-dom'
import { Navbar, Home } from './Constants'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App