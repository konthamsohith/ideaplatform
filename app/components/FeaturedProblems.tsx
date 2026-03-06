"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = ["Validated Opportunities"] as const;
type Tab = typeof tabs[number];

const problems: Record<Tab, { id: number; tag: string; level: string; title: string; added: string; builders: number; hours: string; color: string }[]> = {
    "Validated Opportunities": [
        {
            id: 1,
            tag: "Validated",
            level: "Advanced",
            title: "Build an AI-powered contract review tool for SMEs",
            added: "12/02/2025",
            builders: 14,
            hours: "8+ hrs to validate",
            color: "#0a0a1a",
        },
        {
            id: 2,
            tag: "Validated",
            level: "Intermediate",
            title: "Mental health check-in app for remote workers",
            added: "18/01/2025",
            builders: 12,
            hours: "5+ hrs to validate",
            color: "#120a1a",
        },
        {
            id: 3,
            tag: "Validated",
            level: "Beginner",
            title: "Hyperlocal food waste reduction marketplace",
            added: "22/02/2025",
            builders: 5,
            hours: "3+ hrs to validate",
            color: "#1a1a0a",
        },
    ],
};

const levelColors: Record<string, string> = {
    Beginner: "#22c55e",
    Intermediate: "#f59e0b",
    Advanced: "#ef4444",
};

export default function FeaturedProblems() {
    const [active, setActive] = useState<Tab>("Validated Opportunities");

    return (
        <section className="fp-section container">
            {/* Header */}
            <div className="fp-header">
                <h2 className="fp-title">Validated Startup <span className="fp-accent">Missions</span></h2>
                <p className="fp-subtitle">
                    Discover a range of validated problems designed to help you{" "}
                    master building, launch MVPs, and{" "}
                    <span className="fp-accent-blue">create real impact.</span>
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
                        <div className="fp-card-image" style={{ background: `linear-gradient(135deg, ${p.color}, #000)` }}>
                            <div className="fp-unlock-pill">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M15 3h6v6" />
                                    <path d="M10 14L21 3" />
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                </svg>
                                View Idea
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
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                                Listed: {p.added}
                            </li>
                            <li>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                {p.builders} Collaborators
                            </li>
                            <li>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                {p.hours}
                            </li>
                        </ul>

                        {/* CTA Footer */}
                        <div className="fp-card-footer">
                            <Link href="/signin" className="fp-card-btn">
                                Explore Idea
                            </Link>
                            <button className="fp-card-btn-secondary" title="Save to interest list" aria-label="Save to interest list">
                                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
