import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../components/HomeComponents/Dashboard';
import Deposit from '../components/HomeComponents/Deposit';
import Claim from '../components/HomeComponents/Claim';
import Leaderboard from '../components/HomeComponents/Leaderboard';
import Profile from '../components/HomeComponents/Profile';
import Referal from '../components/HomeComponents/Referal';
import { ROUTES } from './routes';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<Home />}>
                <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />

                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                <Route path={ROUTES.DEPOSIT} element={<Deposit />} />
                <Route path={ROUTES.CLAIM} element={<Claim />} />
                <Route path={ROUTES.LEADERBOARD} element={<Leaderboard />} />
                <Route path={ROUTES.PROFILE} element={<Profile />} />
                <Route path={ROUTES.REFERAL} element={<Referal />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
