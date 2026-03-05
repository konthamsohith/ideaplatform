"use client";

import React from "react";

const activeCollabs = [
    { title: "Eco-Sync Waste Mgmt", role: "Idea Owner", phase: "Validation", progress: 45 },
    { title: "Smart Grid Optimization", role: "Contributor", phase: "Prototyping", progress: 75 },
    { title: "Multilingual Transcription", role: "Developer", phase: "Beta Testing", progress: 90 },
];

export default function CollaborationsPage() {
    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <h1>Collaborations</h1>
                <p>Tracking progress and teams across your active projects.</p>
            </header>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "1.5rem" }}>
                {activeCollabs.map((collab, index) => (
                    <div key={index} className="stat-card collab-card" style={{ height: "fit-content" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                            <div className="item-tag">{collab.role}</div>
                            <span style={{ fontSize: "0.8rem", color: "#9ca3af", fontWeight: 600 }}>{collab.progress}% Complete</span>
                        </div>
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>{collab.title}</h3>
                        <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "1.5rem" }}>Current Phase: <strong>{collab.phase}</strong></p>

                        <div className="progress-bar-sm" style={{ marginBottom: "1.5rem" }}>
                            <div style={{ width: `${collab.progress}%` }}></div>
                        </div>

                        <div style={{ display: "flex", gap: "0.8rem" }}>
                            <button className="btn-blue" style={{ flex: 1, fontSize: "0.85rem" }}>Workspace</button>
                            <button className="btn-black" style={{ flex: 1, fontSize: "0.85rem" }}>Team Chat</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
