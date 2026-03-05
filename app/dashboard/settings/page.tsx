"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push("/");
    };

    return (
        <div className="dashboard-page">
            <header className="dashboard-header">
                <h1>Settings</h1>
                <p>Manage your account, preferences, and platform role.</p>
            </header>

            <div className="chart-card" style={{ maxWidth: "800px" }}>
                <div className="input-wrapper">
                    <label className="input-label">Display Name</label>
                    <input type="text" className="base-input" defaultValue={user?.displayName || "Sohith"} />
                </div>
                <div className="input-wrapper">
                    <label className="input-label">Email Address</label>
                    <input type="email" className="base-input" defaultValue={user?.email || ""} disabled />
                </div>
                <div className="input-wrapper">
                    <label className="input-label">Platform Role</label>
                    <select className="base-input">
                        <option>Idea Giver</option>
                        <option>Developer / Builder</option>
                        <option>Investor</option>
                    </select>
                </div>

                <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid #e5e7eb", display: "flex", justifyContent: "space-between" }}>
                    <button className="btn-blue">Save Changes</button>
                    <button onClick={handleLogout} className="btn-ghost" style={{ color: "#ef4444" }}>Sign Out</button>
                </div>
            </div>
        </div>
    );
}
