"use client";

import React, { useState } from "react";

const IconSparkles = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813h6.111l-4.943 3.591 1.887 5.85L12 14.663l-4.967 3.591 1.887-5.85-4.943-3.591h6.111L12 3z" /></svg>
);

export default function AISandboxPage() {
    const [prompt, setPrompt] = useState("");
    const [isThinking, setIsThinking] = useState(false);

    const handleGenerate = () => {
        if (!prompt) return;
        setIsThinking(true);
        setTimeout(() => setIsThinking(false), 2000);
    };

    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <h1>AI Sandbox</h1>
                <p>Experiment with IdeaAI to refine statements and generate strategies.</p>
            </header>

            <div className="chart-card ai-summary-card" style={{ padding: "3rem", borderRadius: "32px", marginBottom: "2.5rem" }}>
                <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
                    <div style={{ background: "rgba(255,255,255,0.1)", width: "60px", height: "60px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                        <IconSparkles />
                    </div>
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>What are you building?</h2>
                    <p style={{ opacity: 0.8, marginBottom: "2rem" }}>Enter a rough problem or solution idea, and I&apos;ll help you turn it into a venture-scale strategy.</p>

                    <div style={{ position: "relative" }}>
                        <textarea
                            className="base-input"
                            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", minHeight: "120px", borderRadius: "20px", padding: "1.5rem" }}
                            placeholder="e.g. I want to solve food waste in restaurants..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                        />
                        <button
                            onClick={handleGenerate}
                            className="btn-lime"
                            style={{ position: "absolute", bottom: "1rem", right: "1rem", borderRadius: "12px", padding: "0.6rem 1.2rem", fontSize: "0.85rem" }}
                        >
                            {isThinking ? "Thinking..." : "Generate Strategy"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="stats-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                <div className="stat-card">
                    <div className="stat-title">Market Size Estimator</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "1rem" }}>Project total addressable market for any concept.</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Tech Stack Generator</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "1rem" }}>Identify best tools to build your prototype.</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Co-founder Matcher</div>
                    <div style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "1rem" }}>Find missing talent based on project needs.</div>
                </div>
            </div>
        </div>
    );
}
