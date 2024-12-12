import React, { useEffect } from 'react'
import LoginPage from './pages/LoginPage'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import InterestPage from './pages/InterestPage'
import VideoRecording from './pages/VideoRecording'
import LevelPage from './pages/LevelPage'
import LevelDetailPage from './pages/LevelDetailPage'
import HomePage from './pages/HomePage'
import { useAuthStore } from "./store/useAuthStore";
import { Toaster } from "react-hot-toast";


const App = () => {
  const { checkAuth, authUser, checkingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (checkingAuth) return null;
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage /> }/>
        <Route path="/signup" element={<SignupPage /> } />
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/interest" element={<InterestPage />} />
        <Route path='/test' element={<VideoRecording /> } />
        <Route path='/level' element={<LevelPage /> } />
        <Route path='/level/:level' element={<LevelDetailPage /> } />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
