import { Route, Routes } from 'react-router'

import { MainLayout } from './components'
import { Category, Detail, Home, NotFound } from './pages'
import { AuthProvider } from './context'

import './App.css'

function App() {
  return (
    <div className="container">
      <div className="content">
        <AuthProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:category" element={<Category />} />
              <Route path="/:category/:id" element={<Detail />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  )
}

export default App
