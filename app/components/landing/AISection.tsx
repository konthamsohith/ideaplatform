"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AISection() {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className="ai-section" id="highlights" style={{ padding: '6rem 1rem', background: '#fafafa', borderBottom: '1px solid #e5e7eb' }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                {/* Section Header */}
                <motion.div 
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                    style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px' }}
                >
                    <h2 style={{ fontSize: '48px', fontWeight: 510, fontFamily: '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', color: '#111827', marginBottom: '1rem', letterSpacing: '-0.04em', lineHeight: '48px' }}>
                        The future, enhanced by AI
                    </h2>


                    <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: '1.6' }}>
                        Harnessing the power of artificial intelligence to revolutionize co-founder matching, readines audits, and institutional funding cycles.
                    </p>
                </motion.div>

                {/* Grid Wrapper */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    
                    {/* Row 1: 1fr | 1fr | 1fr */}
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        
                        {/* Card 1: Co-Founder Agent */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                            style={{ flex: 1, minWidth: '280px', background: '#ffffff', borderRadius: '24px', padding: '2.5rem', border: '1px solid #f3f4f6', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', minHeight: '380px', height: 'auto' }}
                        >
                            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '0.4rem' }}>Co-Founder Agent</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                                AI continuously scans top skill profiles to match you seamlessly with complementary builders.
                            </p>
                            
                            <div style={{ flex: 1, background: '#f8fafc', borderRadius: '16px', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #e2e8f0' }}>
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.92, x: -12 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.4, ease: "easeOut" }}
                                    style={{ background: '#ffffff', padding: '10px 12px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', display: 'flex', gap: '6px', alignItems: 'flex-start' }}
                                >
                                    <div style={{ color: '#0066ff', marginTop: '1px', flexShrink: 0 }}>
                                         <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0066ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
                                    </div>
                                    <div style={{ fontSize: '0.62rem', color: '#374151', lineHeight: '1.4', fontWeight: 500 }}>Match me with elite founders having Fintech exits.</div>
                                </motion.div>

                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.92, x: 12 }}
                                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: 0.9, ease: "easeOut" }}
                                    style={{ background: '#0066ff', color: '#ffffff', padding: '10px 12px', borderRadius: '12px', alignSelf: 'flex-end', maxWidth: '95%', fontSize: '0.62rem', lineHeight: '1.4', boxShadow: '0 6px 16px rgba(0,102,255,0.18)', fontWeight: 600 }}
                                >
                                    Found 3 matching anchors. 98% compatibility algorithm applied.
                                </motion.div>
                            </div>

                        </motion.div>

                        {/* Card 2: Personalization */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                            style={{ flex: 1, minWidth: '280px', background: '#ffffff', borderRadius: '24px', padding: '2.5rem', border: '1px solid #f3f4f6', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', minHeight: '380px', height: 'auto' }}
                        >
                            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '0.4rem' }}>Smart Pitch Adapts</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                                AI tailors pitch decks dynamically to each angel investor's historical thesis records.
                            </p>
                            
                            <div style={{ flex: 1, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', minHeight: '160px' }}>
                                {/* Static Dashed Circle (SVG for dash control) */}
                                <div style={{ position: 'absolute', width: '140px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                                    <svg width="140" height="140" viewBox="0 0 140 140">
                                        <circle cx="70" cy="70" r="65" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />

                                    </svg>
                                </div>




                                {/* Rotating invisible orbital layer for Satellites */}
                                <motion.div 
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 24, ease: "linear", repeat: Infinity }}
                                    style={{ width: '130px', height: '130px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', pointerEvents: 'none' }}
                                >
                                    {/* Satellite 1: Top Center - Sparkles (AI magic) */}
                                    <motion.div 
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
                                        style={{ position: 'absolute', top: 0, left: '50%', x: '-50%', y: '-50%', width: '32px', height: '32px', borderRadius: '50%', background: '#a3e635', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', border: '1.5px solid white', boxShadow: '0 3px 8px rgba(0,0,0,0.05)', pointerEvents: 'auto' }}
                                    >
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                                    </motion.div>
                                    
                                    {/* Satellite 2: Bottom Center - TrendingUp (Scale) */}
                                    <motion.div 
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 24, ease: "linear", repeat: Infinity }}
                                        style={{ position: 'absolute', bottom: 0, left: '50%', x: '-50%', y: '50%', width: '32px', height: '32px', borderRadius: '50%', background: '#facc15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', border: '1.5px solid white', boxShadow: '0 3px 8px rgba(0,0,0,0.05)', pointerEvents: 'auto' }}
                                    >
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                                    </motion.div>
                                </motion.div>

                                {/* Static Center Icon - Presentation Screen */}
                                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#0066ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '1.25rem', boxShadow: '0 8px 16px rgba(0,102,255,0.2)', cursor: 'pointer', zIndex: 1 }}>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2" ry="2"/><line x1="7" y1="20" x2="17" y2="20"/><line x1="12" y1="16" x2="12" y2="20"/></svg>
                                </div>
                            </div>



                        </motion.div>

                        {/* Card 3: Autonomous Grade */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                            style={{ flex: 1, minWidth: '280px', background: '#ffffff', borderRadius: '24px', padding: '1.75rem 2.25rem 2.25rem 2.25rem', border: '1px solid #f3f4f6', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', minHeight: '380px', height: 'auto' }}
                        >
                            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '0.4rem' }}>Autonomous Diligence</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.92rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                                AI continuously audits and keeps your startup parameters relevant and optimized for scaling.
                            </p>
                            
                            <motion.div 
                                style={{ flex: 1, background: '#f8fafc', borderRadius: '16px', padding: '0.85rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '6px' }}
                            >
                                <motion.div 
                                    animate={{ borderColor: ['#e2e8f0', '#0066ff', '#e2e8f0'] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#ffffff', padding: '6px 10px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}
                                >
                                     <div style={{ color: '#0066ff', flexShrink: 0 }}>
                                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
                                     </div>
                                     <div style={{ fontSize: '0.62rem', color: '#4b5563', fontWeight: 600 }}>Ask AI to evaluate cap table...</div>
                                </motion.div>

                                <div style={{ marginTop: '3px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                    {[
                                        'Audit cap structure', 
                                        'Verify validation data', 
                                        'Rate investor thesis'
                                    ].map((item, idx) => (
                                        <motion.div 
                                            key={idx} 
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.35, delay: 0.5 + idx * 0.22, ease: "easeOut" }}
                                            whileHover={{ x: 2, background: '#f9fafb' }}
                                            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff', padding: '6px 10px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', border: '1px solid #f3f4f6', cursor: 'pointer', transition: 'background 0.2s' }}
                                        >
                                            <span style={{ fontSize: '0.62rem', color: '#111827', fontWeight: 600 }}>{item}</span>
                                            <span style={{ fontSize: '0.62rem', color: '#0066ff', fontWeight: 800 }}>→</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                        </motion.div>

                    </div>

                    {/* Row 2: 1fr | 2fr */}
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        
                        {/* Card 4: Traction Velocity */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                            style={{ flex: 1, minWidth: '280px', background: '#ffffff', borderRadius: '24px', padding: '2.5rem', border: '1px solid #f3f4f6', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', minHeight: '360px', height: 'auto' }}
                        >
                            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '0.4rem' }}>Traction Velocity</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                                AI tracks velocity speed analysis, letting your team focus actionable setups.
                            </p>
                            
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
                                <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', color: '#6b7280', fontWeight: 600 }}>MATCH SPEED</div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827' }}>+45%</div>
                                    </div>
                                    <div style={{ color: '#22c55e' }}>
                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                                    </div>
                                </div>
                                <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e2e8f0' }}>
                                    <div>
                                        <div style={{ fontSize: '0.65rem', color: '#6b7280', fontWeight: 600 }}>CAP AUDIT TIME</div>
                                        <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827' }}>-80%</div>
                                    </div>
                                    <div style={{ color: '#22c55e' }}>
                                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 5: Actionable Diligence */}
                        <motion.div 
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                            style={{ flex: 2, minWidth: '350px', background: '#ffffff', borderRadius: '24px', padding: '2.5rem', border: '1px solid #f3f4f6', boxShadow: '0 10px 30px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', minHeight: '360px', height: 'auto' }}
                        >
                            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#111827', marginBottom: '0.4rem' }}>Actionable Diagnostics</h3>
                            <p style={{ color: '#6b7280', fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                                AI analyzes user behavior match metrics, traffic grade, and conversions to optimize your rating.
                            </p>
                            
                            <div style={{ flex: 1, background: '#f8fafc', borderRadius: '16px', padding: '1.25rem', border: '1px solid #e2e8f0', display: 'flex', gap: '20px', alignItems: 'center' }}>
                                 <div style={{ textAlign: 'center' }}>
                                      <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', marginBottom: '8px' }}>
                                           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                      </div>
                                      <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827' }}>Lead Founder</div>
                                      <div style={{ fontSize: '0.7rem', color: '#6b7280' }}>Fintech Specialty</div>
                                 </div>
                                 <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                      <div style={{ background: '#ffffff', padding: '12px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                           <div>
                                                <div style={{ fontSize: '0.65rem', color: '#6b7280' }}>Investor Readiness Score</div>
                                                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0066ff' }}>94.2</div>
                                           </div>
                                           <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f0f7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0066ff' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                                           </div>
                                      </div>
                                      <div style={{ background: '#ffffff', padding: '12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                                           <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4b5563' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                           </div>
                                           <div>
                                                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#111827' }}>Verified for YC W26</div>
                                                <div style={{ fontSize: '0.65rem', color: '#6b7280' }}>Audit rating: Institutional</div>
                                           </div>
                                      </div>
                                 </div>
                            </div>
                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    );
}
