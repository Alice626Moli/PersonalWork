
import { Routes, Route, Navigate } from 'react-router-dom'
import React from 'react'
import Login from './routes/Login'
import Dashboard from './routes/Dashboard'
import User from './routes/User'
import Admin from './routes/Admin'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>1

      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={

        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>

      } />
      <Route path='/user' element={
        <ProtectedRoute>
          <User />

        </ProtectedRoute>
      } />
      <Route path='/admin' element={
        <ProtectedRoute requiredAdmin='admin'>

          <Admin />

        </ProtectedRoute>


      } />
      <Route path='*' element={<Navigate to='/dashboard' replace />} />


      {/* //replace会替换当前历史记录，不会被browser记录， */}

      auth dashboard




    </Routes>
  )
}

export default App