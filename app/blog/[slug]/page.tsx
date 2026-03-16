"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "../data";

export default function BlogPostPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params?.slug as string;

    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 600, color: '#0F172A', marginBottom: '1rem' }}>Post Not Found</h1>
                <Link href="/blog" style={{ color: '#0066FF', textDecoration: 'none', fontWeight: 500 }}>Back to Journal</Link>
            </main>
        );
    }

    return (
        <main style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '8rem', position: 'relative' }}>
            {/* Header / Nav Back */}
            <div style={{ maxWidth: '740px', margin: '0 auto', padding: '120px 1.5rem 40px' }}>
                <button 
                    onClick={() => router.push('/blog')} 
                    style={{ background: 'none', border: 'none', color: '#64748B', fontSize: '0.9rem', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0, marginBottom: '3rem' }}
                >
                    &larr; Back to Journal
                </button>

                <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <span style={{ color: '#000', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05rem', marginBottom: '0.75rem', display: 'inline-block' }}>{post.category}</span>
                    <h1 style={{ fontSize: '3rem', fontWeight: 600, color: '#0F172A', lineHeight: '1.2', letterSpacing: '-0.03rem', marginBottom: '1.5rem', fontFamily: '"Inter Variable", sans-serif' }}>
                        {post.title}
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '2.5rem', borderBottom: '1px solid #F1F5F9' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E2E8F0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#000' }}>{post.author[0]}</div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#334155' }}>{post.author}</span>
                            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{post.date} &middot; {post.readTime} read</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Banner Image */}
            <div style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '0 1.5rem' }}>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ width: '100%', height: '420px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}
                >
                    {post.image && (
                        <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    )}
                </motion.div>
            </div>

            {/* Main Content Article Reading Frame */}
            <motion.article 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem', color: '#334155', fontSize: '1.1rem', lineHeight: '1.75', whiteSpace: 'pre-line' }}
            >
                <div style={{ fontFamily: '"Inter Variable", sans-serif' }}>
                    {post.content}
                </div>
            </motion.article>
        </main>
    );
}
