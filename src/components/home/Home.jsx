import React from 'react';
import { Outlet } from 'react-router-dom';

export default function HomeLayout() {
    return (
        <div>
            <h2>Selecione uma opção para continuar:</h2>
            <Outlet />
        </div>
    )
};