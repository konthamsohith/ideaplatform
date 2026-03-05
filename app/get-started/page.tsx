"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function GetStarted() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push("/signin");
        }
    }, [user, loading, router]);

    const roles = [
        {
            id: "developer",
            title: "Developer",
            description: "Build real impact, master your craft, and find actionable startup ideas to launch.",
            icon: "💻",
            color: "#3b82f6",
            bgColor: "#eff6ff",
        },
        {
            id: "idea-giver",
            title: "Idea Giver",
            description: "Validate your vision, find talented builders, and turn your problems into solutions.",
            icon: "💡",
            color: "#f59e0b",
            bgColor: "#fffbeb",
        },
        {
            id: "investor",
            title: "Investor",
            description: "Discover high-potential startup solutions and back the next generation of builders.",
            icon: "📈",
            color: "#10b981",
            bgColor: "#ecfdf5",
        }
    ];

    if (loading || !user) return null;

    return (
        <main className="get-started-page">
            <div className="onboarding-container">
                <div className="onboarding-header">
                    <h1>How will you contribute?</h1>
                    <p>Choose the role that best describes your path on the platform.</p>
                </div>

                <div className="role-grid">
                    {roles.map((role) => (
                        <div key={role.id} className="role-card">
                            <div className="role-icon" style={{ background: role.bgColor }}>
                                {role.icon}
                            </div>
                            <h3>{role.title}</h3>
                            <p>{role.description}</p>
                            <Link href="/dashboard" className="role-btn">
                                Select {role.title}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="onboarding-footer">
                    <p>Logged in as <strong>{user.email}</strong></p>
                </div>
            </div>
        </main>
    );
}
