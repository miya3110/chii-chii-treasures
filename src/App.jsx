import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Suzumori from './Suzumori'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suzumori" element={<Suzumori />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App