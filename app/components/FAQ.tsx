"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        question: "Can I use what I validate to build client projects?",
        answer: "Absolutely! All problems you validate on Idea Platform are yours to act on. Many builders go on to pitch solutions to clients or build startups directly from their validated ideas.",
    },
    {
        question: "What does the AI Refinement feature do?",
        answer: "When you submit a problem, our AI agent analyzes it, asks clarifying questions, and structures it into a clear technical requirements doc — ready for builders or investors to consume immediately.",
    },
    {
        question: "How do I contact support?",
        answer: "You can reach us via the Contact page or use the in-app chat. We typically respond within a few hours and are available 7 days a week.",
    },
    {
        question: "I'm facing login or access issues — what should I do?",
        answer: "Try clearing your browser cache and refreshing. If the issue persists, use the 'Reset Password' option on the login screen or reach out to support with your registered email.",
    },
    {
        question: "Are the problems updated regularly?",
        answer: "Yes! New validated problems are added every week across categories like AI & Tech, Social Impact, and Open Source. Subscribe to our newsletter to get first access.",
    },
    {
        question: "What makes Idea Platform different from other platforms?",
        answer: "We focus exclusively on real-world, validated problems — not theoretical exercises. Every problem listed has been vetted for market relevance, so you're always building something that matters.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="faq-section">
            {/* Gradient bg blob */}
            <div className="faq-bg" aria-hidden="true" />

            <div className="faq-inner container">
                {/* Header */}
                <div className="faq-header">
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <p className="faq-subtitle">
                        If you have any other questions, feel free to reach out directly.
                    </p>
                    <div className="faq-btns">
                        <Link href="/contact">
                            <button className="btn-blue faq-btn">Contact us</button>
                        </Link>
                        <Link href="/faq">
                            <button className="btn-lime faq-btn">View more FAQ&apos;s</button>
                        </Link>
                    </div>
                </div>

                {/* Accordion */}
                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`faq-row ${openIndex === i ? "faq-row-open" : ""}`}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <div className="faq-row-header">
                                <div className="faq-num">{i + 1}</div>
                                <span className="faq-q">{faq.question}</span>
                                <svg
                                    className="faq-chevron"
                                    width="16" height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                            {openIndex === i && (
                                <div className="faq-ans">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
