import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { routesHome } from './routes'
import 'antd/dist/reset.css'
import './App.css'

import Navbar from './components/NavBar'

const PrivateRoutes = () => {
  const isAuth = true

  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

function App() {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoutes />}>
          {routesHome.map((item, i) => (
            <Route key={i} path={item.path} element={item.component} />
          ))}
        </Route>
      </Routes>
    </div>
  )
}

export default App
