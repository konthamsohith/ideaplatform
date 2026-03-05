"use client";

import React, { useState } from "react";

const IconSearch = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
);

export default function SearchPage() {
    const [query, setQuery] = useState("");

    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <h1>Search</h1>
                <p>Find problems, solutions, and talent across the marketplace.</p>
            </header>

            <div className="input-wrapper" style={{ position: "relative", maxWidth: "600px" }}>
                <input
                    type="text"
                    className="base-input"
                    placeholder="Search for problems, tags, or people..."
                    style={{ paddingLeft: "3rem", borderRadius: "16px" }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <div style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "#9ca3af" }}>
                    <IconSearch />
                </div>
            </div>

            <div style={{ marginTop: "3rem", textAlign: "center", color: "#9ca3af" }}>
                {query ? `Searching for "${query}"...` : "Start typing to search the ecosystem"}
            </div>
        </div>
    );
}
