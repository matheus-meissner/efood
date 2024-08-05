import Home from './pages/Home'
import Categories from './pages/Categories'
import { Route, Routes } from 'react-router-dom'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolcevitatrattoria" element={<Categories />} />
  </Routes>
)

export default Rotas
