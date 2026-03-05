"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

export default function NewsletterCTA() {
    const pathname = usePathname();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    if (pathname?.startsWith("/dashboard")) return null;

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (email.trim()) {
            setSubmitted(true);
        }
    }

    return (
        <section className="nl-wrapper">
            <div className="nl-card">
                {/* Mosaic tile grid – decorative */}
                <div className="nl-tiles" aria-hidden="true">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div key={i} className="nl-tile" />
                    ))}
                </div>

                {/* Content */}
                <div className="nl-content">
                    {submitted ? (
                        <>
                            <h2 className="nl-title">You&apos;re on the list! 🎉</h2>
                            <p className="nl-subtitle">
                                We&apos;ll let you know as soon as something new drops.
                            </p>
                        </>
                    ) : (
                        <>
                            <h2 className="nl-title">First Access to Fresh Content</h2>
                            <p className="nl-subtitle">
                                Don&apos;t wait around —{" "}
                                <span className="nl-accent">new problems launch every week,</span>{" "}
                                and you&apos;ll be the first to{" "}
                                <span className="nl-accent-blue">know</span>
                            </p>
                            <form className="nl-form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="nl-input"
                                    placeholder="Enter your email here"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="nl-btn">
                                    Subscribe
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
