import React from 'react'
import LoginPage from './pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import InterestPage from './pages/InterestPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/interest" element={<InterestPage />} />
      </Routes>
    </div>
  )
}

export default App
