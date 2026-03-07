"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FinalCTASection() {
    return (
        <section className="landing-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="nl-card mx-auto max-w-4xl"
                >
                    <div className="nl-tiles">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div key={i} className="nl-tile" />
                        ))}
                    </div>

                    <div className="nl-content">
                        <h2 className="nl-title">Start Building Solutions That Matter</h2>
                        <p className="nl-subtitle mt-2 text-muted max-w-lg">
                            Whether you have a problem to share, skills to build, or capital to invest, TWONNECT is the ecosystem for you.
                        </p>
                        <div className="btn-group mt-6">
                            <Link href="/auth">
                                <button className="btn-black btn-lg">Get Started</button>
                            </Link>
                            <Link href="#explore">
                                <button className="btn-outline btn-lg" style={{ borderRadius: '50px', padding: '1rem 2rem', fontWeight: 600, background: 'white' }}>Explore Problems</button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
