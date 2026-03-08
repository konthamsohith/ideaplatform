"use client";

import React from "react";

interface CollabCardProps {
    title: string;
    description: string;
    impact: string;
    author: string;
    collaborators: number;
    teamProfiles?: { full_name: string, avatar_url?: string }[];
    onJoin: () => void;
    onManageTeam?: () => void;
    isRequested?: boolean;
    isJoined?: boolean;
    isLoading?: boolean;
}

export default function CollabCard({
    title,
    description,
    impact,
    author,
    collaborators,
    teamProfiles = [],
    onJoin,
    onManageTeam,
    isRequested,
    isJoined,
    isLoading
}: CollabCardProps) {
    const initials = author ? author.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : "??";

    return (
        <div className="premium-collab-card">
            <div className="card-status-badge">
                ACTIVE
            </div>

            <h3 className="card-title">{title}</h3>

            <div className="card-author">
                <div className="author-avatar">{initials}</div>
                <span className="author-name">by <strong>{author === "You" ? "You" : author}</strong></span>
            </div>

            <p className="card-description">
                {description.length > 140 ? description.substring(0, 137) + "..." : description}
            </p>

            <div className="card-meta">
                <div
                    className="meta-item interactive-meta"
                    onClick={onManageTeam}
                    style={{ cursor: onManageTeam ? "pointer" : "default" }}
                >
                    <span className="meta-label">Team size</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span className="meta-value">{collaborators} Members</span>
                        {collaborators > 0 && (
                            <div className="team-avatars">
                                {teamProfiles.length > 0 ? (
                                    teamProfiles.slice(0, 3).map((profile, i) => (
                                        <div
                                            key={i}
                                            className="team-avatar-icon"
                                            style={{
                                                zIndex: 10 - i,
                                                background: "#f3f4f6",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "0.6rem",
                                                fontWeight: 700,
                                                color: "#6b7280"
                                            }}
                                            title={profile.full_name}
                                        >
                                            {profile.avatar_url ? (
                                                <img src={profile.avatar_url} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                                            ) : (
                                                profile.full_name.charAt(0).toUpperCase()
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    /* Fallback if we have a count but no profiles yet */
                                    [...Array(Math.min(collaborators, 3))].map((_, i) => (
                                        <div key={i} className="team-avatar-icon" style={{ zIndex: 10 - i }} />
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
                <div className="meta-item" style={{ alignItems: "flex-end" }}>
                    <span className="meta-label">Impact</span>
                    <span className="meta-value impact-badge">{impact.substring(0, 15)}</span>
                </div>
            </div>

            <button
                className={`btn-collab-join ${isRequested || isJoined ? 'requested' : ''}`}
                onClick={onJoin}
                disabled={isRequested || isJoined || isLoading}
            >
                {isLoading ? (
                    "Sending..."
                ) : isJoined ? (
                    "Joined"
                ) : isRequested ? (
                    "Request Sent"
                ) : (
                    "Join Project"
                )}
            </button>
        </div>
    );
}
