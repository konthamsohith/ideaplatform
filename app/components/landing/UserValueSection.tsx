"use client";

import React from "react";
import { motion } from "framer-motion";

export default function UserValueSection() {
    return (
        <section className="landing-section bg-muted">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">Built for the Entire Ecosystem</h2>
                    <p className="section-subtitle">We don't just help builders. We connect the three pillars of a successful startup.</p>
                </div>

                <div className="grid-3" style={{ gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex-col gap-4 text-center"
                    >
                        <div className="flex-center mx-auto" style={{ width: '64px', height: '64px', background: '#fef3c7', color: '#d97706', borderRadius: '16px', marginBottom: '1rem' }}>
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>For Problem Givers</h3>
                        <p className="text-muted">Share your industry pain points and find technical co-founders or builder teams who can execute your vision.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-col gap-4 text-center"
                    >
                        <div className="flex-center mx-auto" style={{ width: '64px', height: '64px', background: '#dbeafe', color: '#2563eb', borderRadius: '16px', marginBottom: '1rem' }}>
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>For Builders</h3>
                        <p className="text-muted">Stop searching for ideas. Discover validated, real-world problems and collaborate with others to build impactful solutions.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex-col gap-4 text-center"
                    >
                        <div className="flex-center mx-auto" style={{ width: '64px', height: '64px', background: '#ecfdf5', color: '#059669', borderRadius: '16px', marginBottom: '1rem' }}>
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>For Investors</h3>
                        <p className="text-muted">Discover early-stage startups that are actively solving real-world problems with proven traction and dedicated teams.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
