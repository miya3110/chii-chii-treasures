import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Suzumori from './Suzumori'
import Novel from './Novel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suzumori" element={<Suzumori />} />
        <Route path="/suzumori/novel" element={<Novel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App