"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = ["AI & Tech", "Social Impact", "Free to Build"] as const;
type Tab = typeof tabs[number];

const problems: Record<Tab, { id: number; tag: string; level: string; title: string; added: string; builders: number; hours: string; color: string }[]> = {
    "AI & Tech": [
        {
            id: 1,
            tag: "AI & Tech",
            level: "Advanced",
            title: "Build an AI-powered contract review tool for SMEs",
            added: "12/02/2025",
            builders: 14,
            hours: "8+ hrs to validate",
            color: "#0a0a1a",
        },
        {
            id: 2,
            tag: "AI & Tech",
            level: "Intermediate",
            title: "Automated bug triaging system for open-source repos",
            added: "20/01/2025",
            builders: 9,
            hours: "6+ hrs to validate",
            color: "#0d1a2b",
        },
        {
            id: 3,
            tag: "AI & Tech",
            level: "Advanced",
            title: "Real-time multilingual transcription for live events",
            added: "05/03/2025",
            builders: 21,
            hours: "10+ hrs to validate",
            color: "#0a1a0a",
        },
    ],
    "Social Impact": [
        {
            id: 4,
            tag: "Social Impact",
            level: "Beginner",
            title: "Platform connecting local NGOs with skilled volunteers",
            added: "01/02/2025",
            builders: 7,
            hours: "4+ hrs to validate",
            color: "#1a0d0d",
        },
        {
            id: 5,
            tag: "Social Impact",
            level: "Intermediate",
            title: "Mental health check-in app for remote workers",
            added: "18/01/2025",
            builders: 12,
            hours: "5+ hrs to validate",
            color: "#120a1a",
        },
        {
            id: 6,
            tag: "Social Impact",
            level: "Beginner",
            title: "Hyperlocal food waste reduction marketplace",
            added: "22/02/2025",
            builders: 5,
            hours: "3+ hrs to validate",
            color: "#1a1a0a",
        },
    ],
    "Free to Build": [
        {
            id: 7,
            tag: "Free to Build",
            level: "Beginner",
            title: "Open-source habit tracker with community challenges",
            added: "10/01/2025",
            builders: 18,
            hours: "3+ hrs to validate",
            color: "#0a1a1a",
        },
        {
            id: 8,
            tag: "Free to Build",
            level: "Intermediate",
            title: "Developer portfolio builder with GitHub integration",
            added: "14/02/2025",
            builders: 26,
            hours: "5+ hrs to validate",
            color: "#1a0a1a",
        },
        {
            id: 9,
            tag: "Free to Build",
            level: "Beginner",
            title: "Markdown-based personal wiki with local-first sync",
            added: "28/02/2025",
            builders: 11,
            hours: "4+ hrs to validate",
            color: "#0d1a0d",
        },
    ],
};

const levelColors: Record<string, string> = {
    Beginner: "#22c55e",
    Intermediate: "#f59e0b",
    Advanced: "#ef4444",
};

export default function FeaturedProblems() {
    const [active, setActive] = useState<Tab>("AI & Tech");

    return (
        <section className="fp-section container">
            {/* Header */}
            <div className="fp-header">
                <h2 className="fp-title">Explore &amp; Build, Together</h2>
                <p className="fp-subtitle">
                    Discover a range of validated problems designed to help you{" "}
                    <span className="fp-accent">master building,</span> launch MVPs, and{" "}
                    <span className="fp-accent-blue">create real impact</span>
                </p>
            </div>

            {/* Tab pills */}
            <div className="fp-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`fp-tab ${active === tab ? "fp-tab-active" : ""}`}
                        onClick={() => setActive(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="fp-grid">
                {problems[active].map((p) => (
                    <div key={p.id} className="fp-card">
                        {/* Dark image area */}
                        <div className="fp-card-image" style={{ background: p.color }}>
                            <div className="fp-unlock-pill">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                View Problem
                            </div>
                        </div>

                        {/* Meta badges */}
                        <div className="fp-card-meta">
                            <span className="fp-badge fp-badge-tag">{p.tag}</span>
                            <span className="fp-badge" style={{ color: levelColors[p.level], background: `${levelColors[p.level]}18` }}>
                                {p.level}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="fp-card-title">{p.title}</h3>

                        {/* Stats */}
                        <ul className="fp-card-stats">
                            <li>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                                Added: {p.added}
                            </li>
                            <li>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                {p.builders} Builders joined
                            </li>
                            <li>
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                {p.hours}
                            </li>
                        </ul>

                        {/* CTA */}
                        <Link href={`/problem/${p.id}`} className="fp-card-btn">
                            Explore Problem
                        </Link>
                    </div>
                ))}
            </div>

            {/* View all */}
            <div className="fp-view-all">
                <Link href="/explore">
                    <button className="btn-lime fp-view-btn">View All Problems</button>
                </Link>
            </div>
        </section>
    );
}
