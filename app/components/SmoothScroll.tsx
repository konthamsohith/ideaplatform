"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Intercept anchor clicks for smooth scrolling
        const handleAnchorClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest('a');
            if (target && target.hash && target.origin === window.location.origin) {
                // Only intercept if we are on the same page or root
                const targetPath = target.pathname.replace(/\/$/, '');
                const currentPath = window.location.pathname.replace(/\/$/, '');
                
                if (targetPath === currentPath || (targetPath === '' && currentPath === '/')) {
                    e.preventDefault();
                    
                    // Scroll to target
                    const element = document.querySelector(target.hash);
                    if (element) {
                        lenis.scrollTo(target.hash, {
                            offset: -80, // Matches scroll-padding-top in CSS
                            duration: 1.2,
                        });
                        // Optional: update URL hash without scrolling
                        window.history.pushState(null, '', target.hash);
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            document.removeEventListener('click', handleAnchorClick);
            lenis.destroy();
        };
    }, []);

    return null;
}
