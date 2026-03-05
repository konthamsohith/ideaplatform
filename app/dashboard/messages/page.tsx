"use client";

import React from "react";

const chats = [
    { name: "Sohith (Co-founder)", lastMsg: "Let's review the mockups tomorrow.", time: "2m ago", active: true },
    { name: "IdeaAI Assistant", lastMsg: "I've refined your problem statement...", time: "1h ago", active: false },
    { name: "Investor Group #4", lastMsg: "We are interested in your recent pilot...", time: "5h ago", active: false },
];

export default function MessagesPage() {
    return (
        <div className="dashboard-page" style={{ height: "calc(100vh - 100px)", display: "flex", flexDirection: "column" }}>
            <header className="dashboard-header">
                <h1>Messages</h1>
                <p>Connect with co-founders, collaborators, and mentors.</p>
            </header>

            <div className="chart-card" style={{ flex: 1, display: "grid", gridTemplateColumns: "300px 1fr", padding: 0, overflow: "hidden" }}>
                <div style={{ borderRight: "1px solid #e5e7eb", overflowY: "auto" }}>
                    {chats.map((chat, index) => (
                        <div key={index} style={{
                            padding: "1.25rem",
                            borderBottom: "1px solid #f3f4f6",
                            cursor: "pointer",
                            background: chat.active ? "#f9fafb" : "transparent"
                        }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>{chat.name}</span>
                                <span style={{ fontSize: "0.75rem", color: "#9ca3af" }}>{chat.time}</span>
                            </div>
                            <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                {chat.lastMsg}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", background: "#fafafa" }}>
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af" }}>
                        Select a conversation to start chatting
                    </div>
                    <div style={{ padding: "1.5rem", background: "#fff", borderTop: "1px solid #e5e7eb" }}>
                        <div style={{ display: "flex", gap: "1rem" }}>
                            <input
                                type="text"
                                className="base-input"
                                style={{ flex: 1, borderRadius: "12px" }}
                                placeholder="Type a message..."
                                disabled
                            />
                            <button className="btn-blue" disabled>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
