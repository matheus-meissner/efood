import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/Header/'
import HeaderHome from './components/HeaderHome/'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<HeaderHome />} />
        <Route path="/*" element={<Header />} />
      </Routes>
      <Rotas />
      <Footer />
    </Router>
  )
}

export default App
