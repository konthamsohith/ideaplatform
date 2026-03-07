import React from "react";
import "../globals.css";

const blogPosts = [
    {
        title: "Why Great Startups Start With Problems",
        desc: "The most common mistake first-time founders make is building a solution before validating the problem. Here is how to avoid it.",
        author: "Sohith Kontham",
        date: "March 8, 2026",
        readTime: "5 min read",
        color: "#fef3c7",
        textColor: "#d97706"
    },
    {
        title: "How Builders Turn Problems Into Products",
        desc: "A technical deep-dive into the transition from a raw problem statement to a prototype MVP over a single weekend.",
        author: "Alex Rivera",
        date: "February 28, 2026",
        readTime: "8 min read",
        color: "#dbeafe",
        textColor: "#2563eb"
    },
    {
        title: "AI Tools for Startup Idea Validation",
        desc: "Before writing code, use these AI workflows to verify market gaps, find competitors, and analyze potential disadvantages.",
        author: "TWONNECT AI Team",
        date: "February 15, 2026",
        readTime: "4 min read",
        color: "#ecfdf5",
        textColor: "#059669"
    },
    {
        title: "Lessons From Successful Builders",
        desc: "Interviews with three teams who met on TWONNECT and successfully raised their seed rounds.",
        author: "Sarah Chen",
        date: "January 30, 2026",
        readTime: "12 min read",
        color: "#fce7f3",
        textColor: "#db2777"
    },
    {
        title: "The Future of Problem-Driven Innovation",
        desc: "Why the traditional venture capital model is shifting towards early-stage platforms like TWONNECT.",
        author: "Sohith Kontham",
        date: "January 12, 2026",
        readTime: "6 min read",
        color: "#f3e8ff",
        textColor: "#9333ea"
    }
];

export default function BlogPage() {
    return (
        <main className="avanza-home" style={{ position: 'relative', overflowX: 'hidden' }}>

            <section className="landing-section" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
                <div className="container text-center">
                    <div className="badge-pill mb-4 mx-auto">
                        <span>TWONNECT Blog</span>
                    </div>
                    <h1 className="hero-title">Insights & Stories</h1>
                    <p className="hero-subtitle">
                        Learn from world-class builders, investors, and startup founders who are turning real problems into successful products.
                    </p>
                </div>
            </section>

            <section className="landing-section" style={{ paddingTop: '20px' }}>
                <div className="container">
                    <div className="grid-2" style={{ gap: '3rem' }}>
                        {blogPosts.map((post, i) => (
                            <div key={i} className="card interactive-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0', overflow: 'hidden' }}>
                                {/* Featured Image Placeholder */}
                                <div style={{ height: '220px', width: '100%', background: post.color, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-color)' }}>
                                    <svg width="48" height="48" fill="none" stroke={post.textColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h.01" /><path d="m14 14-3 3-3-3" /><rect width="18" height="18" x="3" y="3" rx="2" /><path d="m3 16 5-5c.8-.8 2-.8 2.8 0l6.2 6.2" /></svg>
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1rem', lineHeight: '1.4' }}>{post.title}</h3>
                                    <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>
                                        {post.desc}
                                    </p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1.5rem', borderTop: '1px solid var(--muted-bg)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--blue)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 600 }}>
                                                {post.author.split(' ').map(n => n[0]).join('')}
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--foreground)' }}>{post.author}</div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{post.date}</div>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 500 }}>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
