"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TheProblemSection() {
    return (
        <section className="landing-section bg-muted">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-[800px] mx-auto"
                >
                    <h2 className="section-title">The Innovation Disconnect</h2>
                    <p className="section-subtitle">
                        Most builders struggle to find meaningful problems to work on, ending up building toys. Meanwhile, people experiencing painful, real-world problems lack the technical skills to build solutions.
                    </p>
                </motion.div>

                <div className="grid-2">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="card"
                    >
                        <div className="flex-center" style={{ width: '48px', height: '48px', background: '#fee2e2', color: '#ef4444', borderRadius: '12px', marginBottom: '1.5rem' }}>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </div>
                        <h3 className="card-header" style={{ fontSize: '1.25rem', fontWeight: 600, border: 'none', padding: 0 }}>The Gap</h3>
                        <p className="card-body">Great developers often build products nobody wants because they lack domain expertise. Industry experts suffer through inefficient manual processes because they can't code.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="card"
                    >
                        <div className="flex-center" style={{ width: '48px', height: '48px', background: '#d1fae5', color: '#10b981', borderRadius: '12px', marginBottom: '1.5rem' }}>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                        </div>
                        <h3 className="card-header" style={{ fontSize: '1.25rem', fontWeight: 600, border: 'none', padding: 0 }}>The Bridge</h3>
                        <p className="card-body">TWONNECT brings them together. Share your burning problem, let passionate engineers build the solution, and let investors fund the resulting startup.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
