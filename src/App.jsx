import { Route, Routes } from 'react-router'

import { MainLayout } from './components'
import { Category, Detail, Home, NotFound } from './pages'

import './App.css'

function App() {
  return (
    <div className="container">
      <div className="content">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:id" element={<Detail />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
