"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        question: "What is TWONNECT?",
        answer: "TWONNECT connects early-stage co-founders with validated startup ideas and early capital. We specialize in operational readiness for institutional rounds."
    },
    {
        question: "How does the AI Matchmaking algorithm work?",
        answer: "Our proprietary AI continuously scans top skill demographics, industry history, and absolute operational compatibility to match you with complementary co-builders seamlessly."
    },
    {
        question: "Is Twonnect open to any startup stage?",
        answer: "We specialize in Idea, Build, and Invest readiness cycles. Whether you have a validated problem statement or are reading cap table diligence for accredited investors, we scale with you."
    },
    {
         question: "How do I prepare for institutional Cap Table audits?",
         answer: "You can use the Unified Workspace dynamic audit diagnostic analyzer, which executes continuous operational review loops keeping your parameters fully optimized 24/7."
    },
    {
         question: "How can angle investors get involved?",
         answer: "Accredited angel investors can access our Deal Flow match stream, providing accredited pathways into highly validated cap tables with certified diagnostics."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="faq-section" id="faq" style={{ padding: '3.5rem 1rem 1rem 1rem', background: '#ffffff' }}>

            <div className="container" style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* Section Header */}
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                    style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >

                    <div style={{ background: '#f3f4f6', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, color: '#4b5563', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '1.25rem' }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#111827' }}><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /></svg>
                        FAQ
                    </div>

                    <p style={{ maxWidth: '600px', fontSize: '48px', color: '#111827', fontWeight: 510, letterSpacing: '-0.04em', lineHeight: '48px', marginBottom: '2.5rem', fontFamily: '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif' }}>
                        Frequently Asked Questions
                    </p>




                </motion.div>


                {/* FAQ List Accordions */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div 
                                key={index}
                                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                                whileHover={{ y: -3, boxShadow: '0 20px 40px rgba(0,0,0,0.03)', borderColor: '#e2e8f0' }}
                                style={{ 
                                    background: '#ffffff', 
                                    border: isOpen ? '1px solid #bfdbfe' : '1px solid #f3f4f6', 
                                    borderRadius: '20px', 
                                    overflow: 'hidden', 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    transition: 'border-color 0.2s, box-shadow 0.2s',
                                    cursor: 'pointer'
                                 }}
                                 onClick={() => toggleAccordion(index)}
                            >
                                {/* Left Animated Accent Gradient */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div 
                                            initial={{ height: 0 }}
                                            animate={{ height: '100%' }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.35, ease: 'easeInOut' }}
                                            style={{ position: 'absolute', left: 0, top: 0, width: '4px', background: '#3b82f6' }}
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Question Header */}
                                <div 
                                    style={{ 
                                        width: '100%', 
                                        padding: '1.75rem', 
                                        background: 'transparent', 
                                        border: 'none', 
                                        display: 'flex', 
                                        justifyContent: 'space-between', 
                                        alignItems: 'center', 
                                        textAlign: 'left'
                                     }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flex: 1 }}>
                                        <div style={{ 
                                            fontFamily: 'monospace', 
                                            fontSize: '0.9rem', 
                                            fontWeight: 800, 
                                            color: isOpen ? '#3b82f6' : '#9ca3af', 
                                            background: isOpen ? '#eff6ff' : '#f8f9fa', 
                                            width: '32px', 
                                            height: '32px', 
                                            border: isOpen ? '1px solid #bfdbfe' : '1px solid #f1f3f5', 
                                            borderRadius: '8px', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            transition: 'all 0.2s'
                                        }}>
                                            {(index + 1).toString().padStart(2, '0')}
                                        </div>
                                        <span style={{ fontSize: '1.15rem', fontWeight: 700, color: isOpen ? '#111827' : '#374151', transition: 'color 0.2s', flex: 1 }}>
                                            {item.question}
                                        </span>
                                    </div>

                                    <motion.div 
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25, ease: 'easeOut' }}
                                        style={{ color: isOpen ? '#3b82f6' : '#9ca3af', flexShrink: 0, marginLeft: '1rem' }}
                                    >
                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                                    </motion.div>
                                </div>

                                {/* Answer Body */}
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{ padding: '0 1.75rem 1.75rem 4.75rem', color: '#4b5563', fontSize: '1rem', lineHeight: '1.65' }}>
                                                {item.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}

                </div>

            </div>
        </section>
    );

}
