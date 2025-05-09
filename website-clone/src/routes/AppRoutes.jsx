import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../components/HomeComponents/Dashboard';
import Deposit from '../components/HomeComponents/Deposit';
import Claim from '../components/HomeComponents/Claim';
import Leaderboard from '../components/HomeComponents/Leaderboard';
import Profile from '../components/HomeComponents/Profile';
import Referal from '../components/HomeComponents/Referal';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}>
                <Route index element={<Navigate to="dashboard" replace />} />

                <Route path='dashboard' element={<Dashboard />} />
                <Route path='deposit' element={<Deposit />} />
                <Route path='claim' element={<Claim />} />
                <Route path='leaderboard' element={<Leaderboard />} />
                <Route path='profile' element={<Profile />} />
                <Route path='referal' element={<Referal />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
