"use client";

import React from "react";
import Link from "next/link";

const IconSparkles = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813h6.111l-4.943 3.591 1.887 5.85L12 14.663l-4.967 3.591 1.887-5.85-4.943-3.591h6.111L12 3z" /></svg>
);

const myIdeas = [
    { title: "Smart Urban Drainage", status: "Refinement", impact: "High", collaborators: 3 },
    { title: "Low-Cost Water Purifier", status: "Draft", impact: "Medium", collaborators: 0 },
    { title: "AI Agriculture Guard", status: "Collaborative", impact: "Critical", collaborators: 8 },
];

export default function MyIdeasPage() {
    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                        <h1>My Ideas</h1>
                        <p>Manage and track the problems you&apos;ve dumped and refined.</p>
                    </div>
                </div>
            </header>

            <div className="dashboard-list">
                {myIdeas.map((idea, index) => (
                    <div key={index} className="list-item">
                        <div className="item-main">
                            <div className="item-tag" style={{
                                background: idea.status === "Collaborative" ? "rgba(187, 244, 81, 0.1)" : "rgba(0, 122, 255, 0.1)",
                                color: idea.status === "Collaborative" ? "#749a1d" : "var(--blue)"
                            }}>
                                {idea.status}
                            </div>
                            <h4>{idea.title}</h4>
                            <p>Impact Score: <strong>{idea.impact}</strong> &bull; {idea.collaborators} Active Collaborators</p>
                        </div>
                        <div className="item-meta">
                            <div style={{ display: "flex", gap: "0.5rem" }}>
                                <button className="btn-ghost">Edit</button>
                                <button className="btn-black" style={{ display: "flex", alignItems: "center", gap: "0.4rem", padding: "0.5rem 1rem", fontSize: "0.85rem" }}>
                                    <IconSparkles /> AI Audit
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {myIdeas.length === 0 && (
                    <div className="chart-card" style={{ textAlign: "center", padding: "4rem" }}>
                        <p style={{ color: "#6b7280" }}>You haven&apos;t dumped any problems yet.</p>
                        <Link href="/dashboard/submit" className="btn-blue" style={{ marginTop: "1rem", display: "inline-block" }}>
                            Dump Your First Problem
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
