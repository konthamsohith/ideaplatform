"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../globals.css";

const faqs = [
    {
        question: "What is TWONNECT?",
        answer: "TWONNECT is a platform where people share real-world problems and builders collaborate to create solutions that can become startups."
    },
    {
        question: "Who can use the platform?",
        answer: "Anyone with a problem, builders who want to create solutions, and investors looking for new opportunities."
    },
    {
        question: "Do I need technical skills to share a problem?",
        answer: "No. Anyone can share problems or ideas. Our builder community will handle the technical execution."
    },
    {
        question: "How does the AI idea validator work?",
        answer: "It analyzes your idea, identifies similar products in the market, highlights disadvantages of existing solutions, and identifies opportunities."
    },
    {
        question: "Can builders become co-founders?",
        answer: "Yes. Builders collaborating on solutions can form startup teams and eventually spin out as fully funded companies."
    }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid var(--border-color)', padding: '1.5rem 0' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'left'
                }}
            >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: isOpen ? 'var(--primary)' : 'var(--foreground)', transition: 'color 0.2s' }}>
                    {question}
                </h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center' }}
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{ paddingTop: '1rem', color: 'var(--muted)', lineHeight: '1.6', fontSize: '1.05rem' }}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQPage() {
    return (
        <main className="avanza-home" style={{ position: 'relative', overflowX: 'hidden' }}>

            <section className="landing-section" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
                <div className="container text-center max-w-3xl mx-auto">
                    <div className="badge-pill mb-4 mx-auto">
                        <span>Help Center</span>
                    </div>
                    <h1 className="hero-title" style={{ fontSize: '3rem' }}>Frequently Asked Questions</h1>
                    <p className="hero-subtitle">
                        Everything you need to know about building, sharing, and investing on the TWONNECT platform.
                    </p>
                </div>
            </section>

            <section className="landing-section" style={{ paddingTop: '0px' }}>
                <div className="container max-w-3xl mx-auto">
                    <div style={{ background: 'var(--card-bg)', borderRadius: '16px', padding: '2rem', border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
