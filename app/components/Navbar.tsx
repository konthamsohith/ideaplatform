"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [activeSection, setActiveSection] = useState<string>("");
    const { user, loading, logout } = useAuth();
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push("/");
    };

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 24);

            // Scroll progress 0→1
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docH > 0 ? Math.min(y / docH, 1) : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        // IntersectionObserver for active section
        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -50% 0px', // detects when section is in top-half of center
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sectionIds = ['about', 'features', 'highlights', 'faq'];
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

    if (pathname?.startsWith("/dashboard")) return null;

    return (
        <>
            {/* Scroll progress bar */}
            <div className="scroll-progress" style={{ width: `${progress * 100}%` }} />

            <nav className="navbar-wrapper">
                {/* Navbar Blueprint Lines */}
                <div className="blueprint-line-v" style={{ left: 'calc(50% - 575px)', height: '100vh', top: 0, width: '0.5px', opacity: 0.6 }} />
                <div className="blueprint-line-v" style={{ right: 'calc(50% - 575px)', height: '100vh', top: 0 }} />

                {/* Intersection squares at navbar bottom */}
                <div className="intersection-dot" style={{ top: '100%', left: 'calc(50% - 575px)', transform: 'translate(-50%, -50%)' }} />
                <div className="intersection-dot" style={{ top: '100%', left: 'calc(50% + 575px)', transform: 'translate(-50%, -50%)' }} />

                <div className="navbar-container">
                    <Link href={user ? "/dashboard" : "/"} className="navbar-logo">
                        <Logo style={{ fontSize: '1.75rem' }} />
                    </Link>

                    <div className="navbar-links">
                        <Link href="/#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</Link>
                        <Link href="/#features" className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}>Feature</Link>
                        <Link href="/#highlights" className={`nav-link ${activeSection === 'highlights' ? 'active' : ''}`}>Highlights</Link>
                        <Link href="/#faq" className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`}>FAQs</Link>
                    </div>

                    <div className="navbar-actions">
                        {!loading ? (
                            user ? (
                                <div className="nav-user-profile">
                                    {user.user_metadata?.avatar_url ? (
                                        <img src={user.user_metadata.avatar_url} alt={user.user_metadata.full_name || ""} className="nav-avatar" />
                                    ) : (
                                        <div className="nav-avatar initials-avatar">
                                            {(user.user_metadata?.full_name || user.email || "U")
                                                .split(' ')
                                                .map((n: string) => n[0])
                                                .join('')
                                                .toUpperCase()
                                                .slice(0, 2)}
                                        </div>
                                    )}
                                    <button className="btn-signout" onClick={handleLogout}>Sign Out</button>
                                </div>
                            ) : (
                                <div className="nav-auth-buttons">
                                    <Link href="/signin"><button className="btn-signin">Sign In</button></Link>
                                    <Link href="/signup"><button className="btn-black-pill">Get Started</button></Link>
                                </div>
                            )
                        ) : (
                            <div className="nav-loading-placeholder" />
                        )}
                    </div>

                    <button className="navbar-burger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', zIndex: 1000, display: 'none', alignItems: 'center', color: '#0F172A' }}>
                        {isOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
                        )}
                    </button>

                    {isOpen && (
                        <div className="navbar-mobile-overlay" style={{ position: 'absolute', top: '100%', left: 0, right: 0, background: '#ffffff', borderBottom: '1px solid #E2E8F0', padding: '1rem 1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 999 }}>
                            <Link href="/#about" onClick={() => setIsOpen(false)} className="mobile-nav-link" style={{ fontSize: '1rem', fontWeight: 500, color: '#0F172A', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #F1F5F9' }}>About</Link>
                            <Link href="/#features" onClick={() => setIsOpen(false)} className="mobile-nav-link" style={{ fontSize: '1rem', fontWeight: 500, color: '#0F172A', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #F1F5F9' }}>Features</Link>
                            <Link href="/#highlights" onClick={() => setIsOpen(false)} className="mobile-nav-link" style={{ fontSize: '1rem', fontWeight: 500, color: '#0F172A', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid #F1F5F9' }}>Highlights</Link>
                            <Link href="/#faq" onClick={() => setIsOpen(false)} className="mobile-nav-link" style={{ fontSize: '1rem', fontWeight: 500, color: '#0F172A', textDecoration: 'none', padding: '10px 0', borderBottom: 'none' }}>FAQs</Link>
                            {!user && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', marginTop: '1rem' }}>
                                    <Link href="/signin" onClick={() => setIsOpen(false)} style={{ width: '100%' }}><button className="btn-signin" style={{ width: '100%' }}>Sign In</button></Link>
                                    <Link href="/signup" onClick={() => setIsOpen(false)} style={{ width: '100%' }}><button className="btn-black-pill" style={{ width: '100%' }}>Get Started</button></Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
