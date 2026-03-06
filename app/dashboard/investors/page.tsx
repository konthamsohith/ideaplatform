"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── Icons ──────────────────────────────────────────
const IconSearch = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
);
const IconFilter = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
);
const IconUsers = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const IconActivity = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
);
const IconStar = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
);
const IconTrendingUp = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
);
const IconCheckCircle = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
);
const IconArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);

// ── Mock Data ──────────────────────────────────────────
const investorDeals = [
    {
        id: "deal-1",
        title: "SolarGlass Hub",
        problem: "Inefficient solar panel tracking and maintenance leading to 20% output loss.",
        stage: "Pre-Seed",
        industry: "CleanTech",
        fundingNeeded: "$250k",
        traction: "10 Pilots, $15k LOI",
        teamSize: 3,
        aiScore: 88
    },
    {
        id: "deal-2",
        title: "Medi-AI Logistics",
        problem: "Rural clinics face 48-hour delays in critical supply chains.",
        stage: "Seed",
        industry: "HealthTech",
        fundingNeeded: "$1.2M",
        traction: "$12k MRR, 5 Hospitals",
        teamSize: 6,
        aiScore: 94
    },
    {
        id: "deal-3",
        title: "HyperLocal Delivery",
        problem: "Last-mile delivery costs remain unprofitable for independent retailers.",
        stage: "Series A",
        industry: "Logistics",
        fundingNeeded: "$5M",
        traction: "1M deliveries, Break-even",
        teamSize: 42,
        aiScore: 91
    },
    {
        id: "deal-4",
        title: "Eco-Sync Waste Mgmt",
        problem: "Cities lack real-time data on waste bin utilization.",
        stage: "Idea",
        industry: "Smart City",
        fundingNeeded: "$50k",
        traction: "Prototype built, City grant won",
        teamSize: 2,
        aiScore: 76
    },
];

const trendingProblems = [
    { title: "Affordable Cold Storage", builders: 14, market: "$24B" },
    { title: "AI Code Review Audits", builders: 8, market: "$3.5B" },
    { title: "Micro-grid Energy Sharing", builders: 22, market: "$18B" },
];

const topTeams = [
    { name: "Nexus Builders", size: 4, projects: 3, winRate: "100%" },
    { name: "Alpha Squad", size: 6, projects: 5, winRate: "80%" },
    { name: "Code & Cognition", size: 2, projects: 1, winRate: "100%" },
];

const activityFeed = [
    { time: "10m ago", event: "Medi-AI Logistics launched Beta v2.0" },
    { time: "1h ago", event: "New Pitch Request sent to SolarGlass Hub" },
    { time: "3h ago", event: "Alpha Squad formed a new team for 'Smart Grid Optimization'" },
    { time: "5h ago", event: "HyperLocal Delivery updated their traction metrics" },
];

export default function InvestorPortalPage() {
    const [activeTab, setActiveTab] = useState("All");

    return (
        <div className="dashboard-page" style={{ paddingBottom: "4rem" }}>

            {/* 1. Hero Section */}
            <header className="dashboard-header" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Discover the Next High-Impact Startups</h1>
                    <p style={{ fontSize: '1.1rem', color: '#6b7280', lineHeight: 1.6 }}>
                        Explore validated problems, top-tier builder teams, and emerging startups born directly from our platform's problem-solving engine.
                    </p>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button className="btn-black" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Explore Opportunities <IconArrowRight />
                    </button>
                    <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#fff' }}>
                        Become an Investor
                    </button>
                </div>
            </header>

            {/* 2. Opportunity Snapshot Section */}
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Opportunity Snapshot</h3>
                <div className="stats-grid">
                    {[
                        { title: "Venture Ready", value: "42", icon: <IconCheckCircle /> },
                        { title: "Avg. Validation Score", value: "8.4", icon: <IconStar /> },
                        { title: "Active Investors", value: "128", icon: <IconUsers /> },
                        { title: "Capital Seeking", value: "$12.4M", icon: <IconTrendingUp /> },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="stat-card"
                            whileHover={{ y: -4, boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                                <div className="stat-title">{stat.title}</div>
                                <div style={{ color: "var(--blue)", opacity: 0.8 }}>{stat.icon}</div>
                            </div>
                            <div className="stat-value">{stat.value}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 3. Filters and Search */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', gap: '0.5rem', background: '#fff', padding: '4px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
                    {['All', 'Idea', 'Pre-Seed', 'Seed', 'Series A'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '8px',
                                border: 'none',
                                background: activeTab === tab ? '#f3f4f6' : 'transparent',
                                color: activeTab === tab ? '#000' : '#6b7280',
                                fontWeight: activeTab === tab ? 600 : 500,
                                fontSize: '0.875rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <div style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)', color: '#9ca3af', pointerEvents: 'none' }}>
                            <IconSearch />
                        </div>
                        <input
                            type="text"
                            placeholder="Search startups or industries..."
                            style={{
                                padding: '0.6rem 1rem 0.6rem 36px',
                                borderRadius: '10px',
                                border: '1px solid #e5e7eb',
                                outline: 'none',
                                fontSize: '0.9rem',
                                width: '250px'
                            }}
                        />
                    </div>
                    <button style={{ padding: '0.6rem', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', color: '#6b7280', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <IconFilter />
                    </button>
                </div>
            </div>

            {/* Main Content Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>

                {/* Left Column: Featured Startups */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Featured Opportunities</h3>

                    <AnimatePresence mode="popLayout">
                        {investorDeals
                            .filter(deal => activeTab === 'All' || deal.stage === activeTab)
                            .map((deal) => (
                                <motion.div
                                    key={deal.id}
                                    layout
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="chart-card"
                                    style={{ padding: '1.5rem', cursor: 'pointer' }}
                                    whileHover={{ borderColor: 'rgba(0,0,0,0.1)', boxShadow: '0 8px 30px rgba(0,0,0,0.04)' }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                                                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{deal.title}</h4>
                                                <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '50px', background: 'var(--blue)', color: '#fff', fontWeight: 600 }}>{deal.industry}</span>
                                            </div>
                                            <p style={{ margin: 0, color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.5 }}>"{deal.problem}"</p>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600, marginBottom: '2px' }}>AI Match Score</div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                                <div style={{ width: `${deal.aiScore}%`, height: '100%', background: deal.aiScore > 90 ? '#10b981' : 'var(--blue)' }} />
                                                <span style={{ fontWeight: 700, color: deal.aiScore > 90 ? '#10b981' : '#111' }}>{deal.aiScore}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '1.5rem', margin: '1.25rem 0', padding: '1rem', background: '#f9fafb', borderRadius: '12px' }}>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Stage</div>
                                            <div style={{ fontWeight: 600 }}>{deal.stage}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Raising</div>
                                            <div style={{ fontWeight: 600 }}>{deal.fundingNeeded}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Traction</div>
                                            <div style={{ fontWeight: 600 }}>{deal.traction}</div>
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>Team</div>
                                            <div style={{ fontWeight: 600 }}>{deal.teamSize} members</div>
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                                        <button className="btn-blue" style={{ flex: 1 }}>Request Pitch Deck</button>
                                        <button className="btn-outline" style={{ flex: 1, border: '1px solid #e5e7eb', background: '#fff' }}>View Full Profile</button>
                                    </div>
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>

                {/* Right Column: Widgets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Trending Problems */}
                    <div className="chart-card">
                        <div className="chart-header" style={{ marginBottom: '1rem' }}>
                            <div className="chart-title">
                                <h3>Trending Problems</h3>
                                <p>Where builders are focusing right now</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {trendingProblems.map((tp, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: i !== trendingProblems.length - 1 ? '1rem' : '0', borderBottom: i !== trendingProblems.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                                    <div>
                                        <h4 style={{ margin: '0 0 4px 0', fontSize: '0.95rem' }}>{tp.title}</h4>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{tp.builders} currently building</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: '0.75rem', color: '#6b7280', textTransform: 'uppercase' }}>Est. Market</div>
                                        <div style={{ fontWeight: 700, color: '#10b981' }}>{tp.market}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Top Teams */}
                    <div className="chart-card">
                        <div className="chart-header" style={{ marginBottom: '1rem' }}>
                            <div className="chart-title">
                                <h3>Top Builder Teams</h3>
                                <p>Proven executors on the platform</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {topTeams.map((team, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.85rem' }}>
                                        {i + 1}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ margin: '0 0 2px 0', fontSize: '0.95rem' }}>{team.name}</h4>
                                        <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{team.size} members &bull; {team.projects} projects</div>
                                    </div>
                                    <div style={{ background: '#ecfdf5', color: '#059669', padding: '2px 6px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                                        {team.winRate}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="chart-card">
                        <div className="chart-header" style={{ marginBottom: '1rem', borderBottom: '1px solid #f3f4f6', paddingBottom: '0.75rem' }}>
                            <div className="chart-title" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <IconActivity />
                                <h3 style={{ margin: 0 }}>Live Activity</h3>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '4px', top: '10px', bottom: '10px', width: '2px', background: '#f3f4f6', zIndex: 0 }} />
                            {activityFeed.map((act, i) => (
                                <div key={i} style={{ display: 'flex', gap: '1rem', position: 'relative', zIndex: 1 }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fff', border: '2px solid var(--blue)', marginTop: '4px', flexShrink: 0 }} />
                                    <div>
                                        <p style={{ margin: '0 0 4px 0', fontSize: '0.9rem', color: '#111', lineHeight: 1.4 }}>{act.event}</p>
                                        <span style={{ fontSize: '0.75rem', color: '#9ca3af' }}>{act.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
