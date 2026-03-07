"use client";

import React, { useState } from "react";
import { Idea } from "@/lib/supabase-db";

const IconClose = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);

const IconGlobe = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);

interface EditIdeaModalProps {
    idea: Idea;
    onClose: () => void;
    onUpdate: (id: string, data: Partial<Idea>) => Promise<void>;
}

export default function EditIdeaModal({ idea, onClose, onUpdate }: EditIdeaModalProps) {
    const [title, setTitle] = useState(idea.title);
    const [description, setDescription] = useState(idea.description);
    const [impact, setImpact] = useState(idea.impact);
    const [isCollaborative, setIsCollaborative] = useState(idea.status === "Collaborative");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await onUpdate(idea.id!, {
                title,
                description,
                impact,
                status: isCollaborative ? "Collaborative" : "Draft"
            });
            onClose();
        } catch (error) {
            console.error("Update failed:", error);
            alert("Update failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="modal-overlay" style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(8px)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            animation: "fadeIn 0.2s ease-out"
        }}>
            <div className="modal-container" style={{
                width: "100%",
                maxWidth: "560px",
                background: "white",
                borderRadius: "24px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                position: "relative",
                overflow: "hidden",
                border: "1px solid rgba(229, 231, 235, 0.5)"
            }}>
                {/* Header */}
                <header style={{
                    padding: "1.5rem 2rem",
                    borderBottom: "1px solid #f3f4f6",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    <div>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#111827", margin: 0 }}>Edit Proposal</h2>
                        <p style={{ fontSize: "0.85rem", color: "#6b7280", margin: "4px 0 0 0" }}>Update your startup idea details and visibility.</p>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: "#f3f4f6",
                            border: "none",
                            borderRadius: "50%",
                            padding: "8px",
                            cursor: "pointer",
                            color: "#6b7280",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s"
                        }}
                        className="btn-close-hover"
                    >
                        <IconClose />
                    </button>
                </header>

                <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
                    <div style={{ marginBottom: "1.5rem" }}>
                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                            Proposal Title
                        </label>
                        <input
                            type="text"
                            style={{
                                width: "100%",
                                padding: "0.875rem 1.25rem",
                                borderRadius: "12px",
                                border: "1px solid #e5e7eb",
                                fontSize: "1rem",
                                color: "#111827",
                                transition: "all 0.2s",
                                outline: "none"
                            }}
                            className="form-input-focus"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div style={{ marginBottom: "1.5rem" }}>
                        <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                            Description
                        </label>
                        <textarea
                            style={{
                                width: "100%",
                                padding: "1rem 1.25rem",
                                borderRadius: "12px",
                                border: "1px solid #e5e7eb",
                                fontSize: "0.95rem",
                                color: "#111827",
                                minHeight: "140px",
                                resize: "none",
                                transition: "all 0.2s",
                                outline: "none",
                                lineHeight: "1.5"
                            }}
                            className="form-input-focus"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
                        <div>
                            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>
                                Impact Score
                            </label>
                            <input
                                type="text"
                                style={{
                                    width: "100%",
                                    padding: "0.875rem 1.25rem",
                                    borderRadius: "12px",
                                    border: "1px solid #e5e7eb",
                                    fontSize: "1rem",
                                    fontWeight: 700,
                                    color: "#111827",
                                    outline: "none"
                                }}
                                className="form-input-focus"
                                value={impact}
                                onChange={(e) => setImpact(e.target.value)}
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                            <label
                                htmlFor="edit-collab-check"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.75rem",
                                    padding: "0.875rem 1.25rem",
                                    borderRadius: "12px",
                                    border: "1px solid #f3f4f6",
                                    background: isCollaborative ? "#bbf45115" : "#f9fafb",
                                    cursor: "pointer",
                                    transition: "all 0.2s"
                                }}
                            >
                                <input
                                    type="checkbox"
                                    id="edit-collab-check"
                                    checked={isCollaborative}
                                    onChange={(e) => setIsCollaborative(e.target.checked)}
                                    style={{ width: "18px", height: "18px", accentColor: "#bbf451" }}
                                />
                                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: isCollaborative ? "#749a1d" : "#4b5563", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                                    <IconGlobe /> Open Collaboration
                                </span>
                            </label>
                        </div>
                    </div>

                    <footer style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                        <button
                            type="button"
                            onClick={onClose}
                            style={{
                                padding: "0.875rem 1.5rem",
                                borderRadius: "12px",
                                border: "1px solid #e5e7eb",
                                background: "white",
                                fontSize: "0.95rem",
                                fontWeight: 600,
                                color: "#6b7280",
                                cursor: "pointer",
                                transition: "all 0.2s"
                            }}
                            className="btn-secondary-hover"
                            disabled={isSubmitting}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            style={{
                                padding: "0.875rem 2rem",
                                borderRadius: "12px",
                                border: "none",
                                background: "var(--blue, #007aff)",
                                fontSize: "0.95rem",
                                fontWeight: 700,
                                color: "white",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                boxShadow: "0 4px 12px rgba(0, 122, 255, 0.2)"
                            }}
                            className="btn-primary-hover"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Saving Updates..." : "Save Changes"}
                        </button>
                    </footer>
                </form>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.98); }
                    to { opacity: 1; transform: scale(1); }
                }
                .form-input-focus:focus {
                    border-color: var(--blue, #007aff) !important;
                    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
                }
                .btn-close-hover:hover {
                    background: #fee2e2 !important;
                    color: #ef4444 !important;
                    transform: rotate(90deg);
                }
                .btn-secondary-hover:hover {
                    background: #f9fafb !important;
                    border-color: #d1d5db !important;
                    color: #111827 !important;
                }
                .btn-primary-hover:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 16px rgba(0, 122, 255, 0.3) !important;
                    opacity: 0.95;
                }
                .btn-primary-hover:active {
                    transform: translateY(0);
                }
            `}</style>
        </div>
    );
}
