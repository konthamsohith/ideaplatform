"use client";

import React from "react";

const investorDeals = [
    { title: "SolarGlass Hub", stage: "Pre-Seed", fundingNeeded: "$250k", traction: "10 Pilots" },
    { title: "Medi-AI Logistics", stage: "Seed", fundingNeeded: "$1.2M", traction: "Revenue" },
    { title: "HyperLocal Delivery", stage: "Series A", fundingNeeded: "$5M", traction: "Scale" },
];

export default function InvestorPortalPage() {
    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <h1>Investor Portal</h1>
                <p>Discover venture-ready ideas and high-impact teams.</p>
            </header>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-title">Venture Ready</div>
                    <div className="stat-value">42</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Avg. Pitch Score</div>
                    <div className="stat-value">8.4</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Active Investors</div>
                    <div className="stat-value">128</div>
                </div>
                <div className="stat-card">
                    <div className="stat-title">Capital Interest</div>
                    <div className="stat-value">$12.4M</div>
                </div>
            </div>

            <div className="chart-card">
                <div className="chart-header">
                    <div className="chart-title">
                        <h3>Featured Opportunities</h3>
                        <p>Teams that have successfully passed AI validation &amp; pilot phases.</p>
                    </div>
                </div>

                <div className="dashboard-list">
                    {investorDeals.map((deal, index) => (
                        <div key={index} className="list-item">
                            <div className="item-main">
                                <div className="item-tag" style={{ background: "rgba(187, 244, 81, 0.1)", color: "#749a1d" }}>{deal.stage}</div>
                                <h4>{deal.title}</h4>
                                <p>Goal: <strong>{deal.fundingNeeded}</strong> &bull; Traction: {deal.traction}</p>
                            </div>
                            <div className="item-meta">
                                <button className="btn-blue">Request Pitch</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
