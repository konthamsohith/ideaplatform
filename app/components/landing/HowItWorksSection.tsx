"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HowItWorksSection() {
    return (
        <section className="landing-section" id="how-it-works">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">How the Platform Works</h2>
                    <p className="section-subtitle">A seamless journey from a simple frustration to a funded company.</p>
                </div>

                <div className="grid-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="step-card"
                    >
                        <div className="step-number">1</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '1rem 0' }}>Share a Problem</h3>
                        <p className="text-muted">Users post real-world challenges, industry inefficiencies, or pain points they experience daily.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="step-card"
                    >
                        <div className="step-number">2</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '1rem 0' }}>Builders Collaborate</h3>
                        <p className="text-muted">Developers, designers, and innovators form teams to build software solutions for validated problems.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="step-card"
                    >
                        <div className="step-number">3</div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, margin: '1rem 0' }}>Launch Startups</h3>
                        <p className="text-muted">Successful solutions evolve into MVPs, gain early traction, and attract angel investors directly on the platform.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
