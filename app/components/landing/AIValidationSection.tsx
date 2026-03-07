"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AIValidationSection() {
    return (
        <section className="landing-section bg-muted">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="section-title">AI Idea Validation</h2>
                    <p className="section-subtitle">Before writing a single line of code, our AI Agent analyzes your problem against the market to ensure it's worth solving.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="ai-mockup"
                >
                    <div className="ai-header">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                        TWONNECT AI Agent
                    </div>
                    <div className="ai-body">
                        <div className="ai-message" style={{ justifyContent: 'flex-end' }}>
                            <div className="ai-bubble" style={{ background: 'var(--primary)', color: 'white', borderTopLeftRadius: '12px', borderTopRightRadius: '0', flex: 'none', maxWidth: '80%' }}>
                                I have an idea for a platform that connects freelance plumbers with immediate local emergency jobs.
                            </div>
                        </div>
                        <div className="ai-message">
                            <div className="ai-bubble">
                                <strong style={{ display: 'block', marginBottom: '8px', color: 'var(--primary)' }}>Analysis Complete</strong>
                                <p style={{ margin: '0 0 12px 0' }}>I've analyzed your problem statement against current market data.</p>

                                <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <li><strong>Existing Competitors:</strong> TaskRabbit, Thumbtack, Angi.</li>
                                    <li><strong>Disadvantages of Current Solutions:</strong> High latency for emergencies (often takes 2+ hours to get a response). High platform fees for contractors.</li>
                                    <li><strong>Potential Market Gap:</strong> An "Uber-style" immediate dispatch system with sub-15 minute SLAs for critical emergencies (burst pipes).</li>
                                </ul>

                                <button className="btn-lime" style={{ marginTop: '16px', fontSize: '0.85rem', padding: '0.5rem 1rem' }}>Publish Problem</button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
