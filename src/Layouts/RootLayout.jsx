import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';
import SmoothFollower from '../Cursor/SmoothFollower';

const RootLayout = () => {
    return (
        <div className='container mx-auto'>
              <SmoothFollower />
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;