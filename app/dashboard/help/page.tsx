"use client";

import React from "react";

export default function HelpPage() {
    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <h1>Get Help</h1>
                <p>Find answers to common questions about TWONNECT.</p>
            </header>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div className="chart-card">
                    <h3 style={{ marginBottom: "1rem" }}>Frequently Asked Questions</h3>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <div>
                            <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>How do I &quot;dump&quot; a problem?</h4>
                            <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>Click the &quot;Submit New Idea&quot; button in the sidebar and fill out the problem form.</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: "0.95rem", fontWeight: 700 }}>Is TWONNECT AI free to use?</h4>
                            <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>Yes, for early adopters, TWONNECT AI refinement is included in the platform experience.</p>
                        </div>
                    </div>
                </div>

                <div className="chart-card">
                    <h3 style={{ marginBottom: "1rem" }}>Contact Support</h3>
                    <p style={{ fontSize: "0.9rem", color: "#6b7280", marginBottom: "1.5rem" }}>Need more help? Our team is available to assist you with any platform-related issues.</p>
                    <button className="btn-black">Open Support Ticket</button>
                </div>
            </div>
        </div>
    );
}
