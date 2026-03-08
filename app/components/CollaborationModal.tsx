"use client";

import React, { useState } from "react";
import { Modal } from "./Modal";

interface CollaborationModalProps {
    isOpen: boolean;
    onClose: () => void;
    ideaTitle: string;
    onSend: (message: string) => Promise<void>;
}

export default function CollaborationModal({ isOpen, onClose, ideaTitle, onSend }: CollaborationModalProps) {
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);

    const handleSend = async () => {
        if (!message.trim()) {
            alert("Please enter a message explaining why you'd like to join.");
            return;
        }

        setSending(true);
        try {
            await onSend(message);
            setMessage("");
            onClose();
        } catch (error) {
            console.error("Error sending collaboration request:", error);
            alert("Failed to send request. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Request to Join">
            <div style={{ minWidth: "300px", padding: "0.5rem 0" }}>
                <p style={{ fontSize: "0.95rem", color: "#4b5563", marginBottom: "1.5rem", lineHeight: "1.5" }}>
                    You are requesting to join <strong>{ideaTitle}</strong>.
                    Tell the project lead a bit about yourself and how you can contribute.
                </p>

                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="E.g., I'm a full-stack developer with experience in React and Node.js. I'd love to help build out the frontend..."
                    style={{
                        width: "100%",
                        height: "120px",
                        padding: "0.75rem",
                        borderRadius: "12px",
                        border: "1px solid #e5e7eb",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                        marginBottom: "1.5rem",
                        resize: "none",
                        outline: "none"
                    }}
                />

                <div style={{ display: "flex", gap: "1rem" }}>
                    <button
                        onClick={onClose}
                        style={{
                            flex: 1,
                            padding: "0.75rem",
                            borderRadius: "12px",
                            border: "1px solid #e5e7eb",
                            background: "transparent",
                            fontWeight: 600,
                            cursor: "pointer"
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSend}
                        disabled={sending}
                        style={{
                            flex: 2,
                            padding: "0.75rem",
                            borderRadius: "12px",
                            border: "none",
                            background: "var(--black)",
                            color: "white",
                            fontWeight: 600,
                            cursor: sending ? "not-allowed" : "pointer",
                            opacity: sending ? 0.7 : 1
                        }}
                    >
                        {sending ? "Sending..." : "Send Request"}
                    </button>
                </div>
            </div>
        </Modal>
    );
}
