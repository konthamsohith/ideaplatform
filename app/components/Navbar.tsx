"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 24);

            // Scroll progress 0→1
            const docH = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(docH > 0 ? Math.min(y / docH, 1) : 0);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Scroll progress bar */}
            <div className="scroll-progress" style={{ width: `${progress * 100}%` }} />

            <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
                <div className="navbar-container">
                    <Link href="/" className="navbar-logo">
                        <span style={{ color: "var(--blue)" }}>Idea</span>
                        <span style={{ color: "var(--foreground)" }}>Platform</span>
                    </Link>
                    <div className="navbar-links">
                        <Link href="/#why-build">About</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/#faq-section">FAQ</Link>
                    </div>
                    <div className="navbar-actions">
                        <button className="btn-blue" style={{ marginRight: "0.5rem" }}>Sign In</button>
                        <button className="btn-lime">Get Started</button>
                    </div>
                </div>
            </nav>
        </>
    );
}
