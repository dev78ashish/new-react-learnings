import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import ProtectedRoute from '../components/ProtectedRoute'
import AdminLogin from '../components/AdminLogin'
import ChangePassword from '../components/ChangePassword'
import SingleBlogPage from '../components/BlogSection/components/SingleBlogPage'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={
                <ProtectedRoute>
                    <Home />
                </ProtectedRoute>
            } />
            <Route path="/blogs/:id" element={
                <ProtectedRoute>
                    <SingleBlogPage />
                </ProtectedRoute>
            } />
            <Route path='/login' element={<AdminLogin />} />
            <Route path='/change-password' element={<ChangePassword />} />
        </Routes>
    )
}

export default AppRoutes