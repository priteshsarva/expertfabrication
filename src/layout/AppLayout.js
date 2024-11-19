import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbars from '../components/Navbars'
import Footer from '../components/Footer'

const AppLayout = () => {
    return (
        <>
            <Navbars />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout
