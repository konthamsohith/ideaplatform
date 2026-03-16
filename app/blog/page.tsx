"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./blog.css";

import { blogPosts, categories } from "./data";


export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '6rem', position: 'relative' }}>
            {/* Light Mesh background glow just at the top edge */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', background: 'linear-gradient(to bottom, #f8fafc, #ffffff)', zIndex: 0 }} />

            <section style={{ paddingTop: '160px', paddingBottom: '60px', position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem' }}>
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F1F5F9', color: '#475569', padding: '5px 12px', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.03em', marginBottom: '1rem' }}>
                        <span>TWONNECT JOURNAL</span>
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        style={{ fontSize: '48px', fontWeight: 510, fontFamily: '"Inter Variable", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif', color: '#0F172A', letterSpacing: '-0.04em', lineHeight: '48px', marginBottom: '0.75rem' }}>
                        The Architect's Journal
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        style={{ color: '#64748B', fontSize: '1rem', lineHeight: '1.6', maxWidth: '480px' }}>
                        Guidance on matching, building, and scaling startup ideas with technical-grade validation matrices.
                    </motion.p>
                </div>
            </section>

            {/* Split Layout Feed + Sidebar index */}
            <section style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: '5rem' }}>
                    {/* Left Feed */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {filteredPosts.map((post, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                style={{ display: 'flex', gap: '2rem', paddingBottom: '2.5rem', marginBottom: '2.5rem', borderBottom: '1px solid #F1F5F9', alignItems: 'flex-start' }}>
                                
                                <Link href={`/blog/${post.slug}`} style={{ display: 'flex', gap: '2rem', width: '100%', textDecoration: 'none', color: 'inherit', alignItems: 'flex-start' }}>
                                    <div style={{ width: '240px', height: '150px', background: post.gradient, borderRadius: '14px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                                        {post.image && (
                                            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        )}
                                    </div>

                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <span style={{ color: '#444', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>{post.category}</span>
                                        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#0F172A', marginBottom: '0.5rem', lineHeight: '1.3', letterSpacing: '-0.02em', cursor: 'pointer', transition: 'color 0.15s' }}>{post.title}</h3>
                                        <p style={{ color: '#64748B', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1.25rem', flex: 1 }}>{post.desc}</p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 700, color: '#000' }}>{post.author[0]}</div>
                                            <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#334155' }}>{post.author}</span>
                                            <span style={{ color: '#E2E8F0' }}>&middot;</span>
                                            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{post.readTime} read</span>
                                        </div>
                                    </div>
                                </Link>

                            </motion.div>
                        ))}
                    </div>

                    {/* Right Sidebar Category Panel */}
                    <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F1F5F9' }}>Categories</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '3rem' }}>
                            {categories.map((cat, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{ 
                                        padding: '10px 14px', 
                                        borderRadius: '8px', 
                                        border: 'none', 
                                        background: selectedCategory === cat ? '#F8FAFC' : 'transparent',
                                        color: selectedCategory === cat ? '#000' : '#64748B',
                                        fontSize: '0.88rem',
                                        fontWeight: selectedCategory === cat ? 600 : 400,
                                        cursor: 'pointer',
                                        transition: 'all 0.15s',
                                        textAlign: 'left',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                    <span>{cat}</span>
                                    {selectedCategory === cat && <span style={{ width: '5px', height: '5px', background: '#000', borderRadius: '50%' }} />}
                                </button>
                            ))}
                        </div>

                        {/* Related / Trending Sections with images */}
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F1F5F9' }}>Trending</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {blogPosts.slice(0, 3).map((p, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
                                    <div style={{ width: '55px', height: '55px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, boxShadow: '0 2px 6px rgba(0,0,0,0.03)' }}>
                                        {p.image && (
                                            <img src={p.image} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        )}
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                                        <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#1E293B', lineHeight: '1.2', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.title}</span>
                                        <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{p.readTime}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}



