"use client";

import React from 'react';
import Header from './Header';

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default MainLayout;