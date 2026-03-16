"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

export default function Footer() {
    const pathname = usePathname();
    if (pathname?.startsWith("/dashboard")) return null;

    return (
        <div className="ip-footer-wrapper" style={{ overflow: 'visible', borderTop: 'none' }}>
            {/* Explicit Horizontal Grid Line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', backgroundColor: '#e2e8f0', zIndex: 10 }} />

            {/* Blueprint Framing Lines */}
            <div className="blueprint-line-v" style={{ left: 'calc(50% - 575px)', height: '100%', top: 0, width: '0.5px', opacity: 0.6 }} />
            <div className="blueprint-line-v" style={{ right: 'calc(50% - 575px)', height: '100%', top: 0, width: '0.5px', opacity: 0.6 }} />
            
            {/* Intersection Dots at the top corner of footer */}
            <div className="intersection-dot" style={{ top: 0, left: 'calc(50% - 575px)', transform: 'translate(-50%, -50%)', zIndex: 50, backgroundColor: '#ffffff' }} />
            <div className="intersection-dot" style={{ top: 0, left: 'calc(50% + 575px)', transform: 'translate(-50%, -50%)', zIndex: 50, backgroundColor: '#ffffff' }} />



            <footer className="ip-footer-container">
                <div className="ip-footer-content">
                    <div className="ip-footer-left" style={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }}>
                        <div className="ip-footer-brand" style={{ marginBottom: '1.5rem' }}>

                            <Logo style={{ fontSize: "1.75rem" }} />


                        </div>
                        <p className="ip-footer-description">
                            The all-in-one ecosystem for founders & builders. Architecting the future of startups through <span style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>validated problems.</span>
                        </p>
                        <div className="ip-footer-socials" style={{ marginTop: '1.5rem', display: 'flex', gap: '14px' }}>
                            <a href="https://x.com" target="_blank" rel="noopener" aria-label="X" className="ip-social-icon" style={{ color: '#4B5563', transition: 'color 0.2s' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="ip-social-icon" style={{ color: '#4B5563', transition: 'color 0.2s' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="ip-social-icon" style={{ color: '#4B5563', transition: 'color 0.2s' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="ip-footer-right">
                        <div className="ip-footer-column">
                            <span className="ip-footer-col-title">Platform</span>
                            <Link href="/" className="ip-footer-link">Home</Link>
                            <Link href="/#features" className="ip-footer-link">Features</Link>
                            <Link href="/blog" className="ip-footer-link">Blog</Link>
                        </div>

                        <div className="ip-footer-column">
                            <span className="ip-footer-col-title">Legal</span>
                            <Link href="/privacy" className="ip-footer-link">Privacy Policy</Link>
                            <Link href="/terms" className="ip-footer-link">Terms of Service</Link>
                        </div>

                        <div className="ip-footer-column">
                            <span className="ip-footer-col-title">Connect</span>
                            <Link href="/signin" className="ip-footer-link">Join as Builder</Link>
                            <Link href="/signin" className="ip-footer-link">Investor Portal</Link>
                        </div>

                    </div>
                </div>

                <div className="ip-footer-bottom" style={{ justifyContent: 'flex-start', textAlign: 'left' }}>
                    <div className="ip-footer-bottom-left">

                        &copy; {new Date().getFullYear()} TWONNECT. All rights reserved.
                    </div>
                </div>

            </footer>
        </div>
    );
}
