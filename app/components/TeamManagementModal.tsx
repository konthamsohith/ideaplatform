"use client";

import React, { useEffect, useState } from "react";
import {
    getIdeaTeamMembers,
    getCollaborationRequestsByIdea,
    updateCollaborationRequestStatus,
    CollaborationRequest
} from "@/lib/supabase-db";
import { Modal } from "./Modal";

interface TeamMember {
    user_id: string;
    full_name: string;
    avatar_url?: string;
    is_owner: boolean;
}

interface TeamManagementModalProps {
    isOpen: boolean;
    onClose: () => void;
    ideaId: string;
    ideaTitle: string;
    isOwner: boolean;
    onUpdate?: () => void;
}

export default function TeamManagementModal({
    isOpen,
    onClose,
    ideaId,
    ideaTitle,
    isOwner,
    onUpdate
}: TeamManagementModalProps) {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [requests, setRequests] = useState<CollaborationRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const [actionLoading, setActionLoading] = useState<number | null>(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [memberData, requestData] = await Promise.all([
                getIdeaTeamMembers(ideaId),
                isOwner ? getCollaborationRequestsByIdea(ideaId) : Promise.resolve([])
            ]);
            setMembers(memberData);
            setRequests(requestData);
        } catch (error) {
            console.error("Error fetching team management data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen && ideaId) {
            fetchData();
        }
    }, [isOpen, ideaId]);

    const handleRequestAction = async (requestId: number, status: 'accepted' | 'rejected') => {
        setActionLoading(requestId);
        try {
            const success = await updateCollaborationRequestStatus(requestId, status);
            if (success) {
                await fetchData(); // Refresh data
                if (onUpdate) onUpdate();
            } else {
                alert("Failed to update request status.");
            }
        } catch (error) {
            console.error("Error handling request action:", error);
        } finally {
            setActionLoading(null);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={`Team: ${ideaTitle}`}>
            <div className="team-management-content" style={{ minWidth: "400px" }}>
                <section style={{ marginBottom: "2rem" }}>
                    <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", color: "#374151" }}>Current Team</h3>
                    {loading ? (
                        <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>Loading team members...</p>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {members.map((member) => (
                                <div key={member.user_id} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.5rem", borderRadius: "12px", background: "#f9fafb" }}>
                                    <div style={{
                                        width: "32px",
                                        height: "32px",
                                        borderRadius: "50%",
                                        background: member.is_owner ? "var(--primary)" : "#e5e7eb",
                                        color: member.is_owner ? "white" : "#4b5563",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "0.75rem",
                                        fontWeight: 600
                                    }}>
                                        {member.full_name.charAt(0).toUpperCase()}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>{member.full_name}</p>
                                        <p style={{ fontSize: "0.75rem", color: "#6b7280", margin: 0 }}>{member.is_owner ? "Project Lead" : "Collaborator"}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </section>

                {isOwner && (
                    <section>
                        <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: "1rem", color: "#374151" }}>Collaboration Requests</h3>
                        {loading ? (
                            <p style={{ color: "#6b7280", fontSize: "0.9rem" }}>Loading requests...</p>
                        ) : requests.filter(r => r.status === 'pending').length === 0 ? (
                            <p style={{ color: "#6b7280", fontSize: "0.85rem", fontStyle: "italic" }}>No pending requests.</p>
                        ) : (
                            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                                {requests.filter(r => r.status === 'pending').map((req) => (
                                    <div key={req.id} style={{ border: "1px solid #e5e7eb", borderRadius: "16px", padding: "1rem" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                                            <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem" }}>
                                                {req.user_full_name?.charAt(0)}
                                            </div>
                                            <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{req.user_full_name}</span>
                                        </div>
                                        <p style={{ fontSize: "0.85rem", color: "#4b5563", marginBottom: "1rem", lineHeight: "1.4" }}>
                                            "{req.message}"
                                        </p>
                                        <div style={{ display: "flex", gap: "0.5rem" }}>
                                            <button
                                                onClick={() => handleRequestAction(req.id, 'accepted')}
                                                disabled={actionLoading === req.id}
                                                style={{
                                                    flex: 1,
                                                    padding: "0.5rem",
                                                    borderRadius: "8px",
                                                    background: "var(--black)",
                                                    color: "white",
                                                    fontSize: "0.8rem",
                                                    fontWeight: 600,
                                                    cursor: "pointer",
                                                    border: "none"
                                                }}
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => handleRequestAction(req.id, 'rejected')}
                                                disabled={actionLoading === req.id}
                                                style={{
                                                    flex: 1,
                                                    padding: "0.5rem",
                                                    borderRadius: "8px",
                                                    background: "transparent",
                                                    border: "1px solid #e5e7eb",
                                                    color: "#ef4444",
                                                    fontSize: "0.8rem",
                                                    fontWeight: 600,
                                                    cursor: "pointer"
                                                }}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}
            </div>
        </Modal>
    );
}
