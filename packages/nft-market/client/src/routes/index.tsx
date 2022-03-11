import React from 'react';
import {
    Routes,
    Route
} from 'react-router-dom';
import Home from '../pages/Home';
import Mint from '../pages/Mint';
import Chat from '../pages/Chat';
import Login from '../pages/Login';
import RequireAuth from './RequireAuth';

const RoutingContainer: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mint" element={<Mint />} />
            <Route
                path="/chat"
                element={
                    <RequireAuth>
                        <Chat />
                    </RequireAuth>
                }
            />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default RoutingContainer;