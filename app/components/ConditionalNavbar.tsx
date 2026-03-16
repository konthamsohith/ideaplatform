"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function ConditionalNavbar() {
    const pathname = usePathname();
    const hideNavbarRoutes = ['/signin', '/signup', '/privacy', '/terms'];
    
    if (hideNavbarRoutes.includes(pathname)) {

        return null;
    }

    return <Navbar />;
}
