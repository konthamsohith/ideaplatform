"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
    {
        id: "collect",
        title: "1. Information We Collect",
        content: `At TWONNECT, we collect information necessary to facilitate connection between founders, builders, and investors. 
        
        Personal Data you provide:
        • Account Details: Name, email address, LinkedIn profile URL, and credentials.
        • Startup Data: Submitted problem statements, ideas, validation metrics, and pitch decks.
        • Investor Profiles: Background, historical investment thesis records, and funding capacity limit rules.
        • Builder Profiles: Technical skills, portfolios, and experience levels safely.

        Usage Data automatically collected:
        We collect data on how you interact with our validation workspace. This includes IP Address, device browser type, time spent on pages, and referring URLs.`
    },
    {
        id: "use",
        title: "2. How We Use Your Information",
        content: `We use your data strictly to refine the matchmaking experience and secure validation matrices benchmarks accurately:
        • To match Founders with relevant Builders and optimal Angel Investors securely.
        • To run AI-assisted readiness audits and pitch deck adaptation algorithms flawlessly.
        • To manage secure communications inside the TWONNECT ecosystem dashboard framing.
        • To administer account status notifications and verify credentials authenticity.`
    },
    {
        id: "sharing",
        title: "3. Data Sharing & Confidentiality",
        content: `We understand that startup ideas are highly sensitive asset values. Your proposal data is shared only with matched verification experts, builders you invite, or investors who fit your historical thesis.
        
        We do not sell your personal or startup details to third-party advertisers. 
        
        We may share data where strictly required by law:
        In compliance with court orders, legal audits, or to protect the safety and core infrastructure parameters of the system accurately cleanly.`
    },
    {
        id: "legal",
        title: "4. Legal Basis for Processing (GDPR)",
        content: `Under the General Data Protection Regulation (GDPR), we process your personal data under the following legal grounds:
        • Consent: You have given us clear consent to process your data for a specific purpose (matching and validates).
        • Contract: Processing is necessary for a contract we have with you to provide the validating ecosystem workspace setups.
        • Legitimate Interests: Processing is necessary for our legitimate interests (or those of a third party) securely.`
    },
    {
        id: "retention",
        title: "5. Data Retention",
        content: `We retain your personal and startup information only for as long as is necessary for the purposes set out in this Privacy Policy. 
        
        If you close your account, we will delete or anonymize your standard node profiles within 30 days, unless longer retention is required by governing framework legislation parameters securely.`
    },
    {
        id: "rights",
        title: "6. Your Data Subject Rights",
        content: `Depending on your location, you have certain rights regarding your personal data:
        • The right to access: You can request copies of your personal data setup.
        • The right to rectification: You can request that we correct any information you believe is inaccurate.
        • The right to erasure: You can request that we erase your data under certain conditions set rules.
        • The right to object: You can object to our processing of your personal data at any boundary layer.`
    },
    {
        id: "cookies",
        title: "7. Cookies & Tracking",
        content: `TWONNECT uses essential cookies to authenticate sessions and maintain workspace persistence records cleanly. 
        
        Analytical cookies are used to track feature adoption rates, helping us refine matching algorithms accurately. You can manage your cookie preferences in your browser settings overlay framing.`
    },
    {
        id: "contact",
        title: "8. Contact Us",
        content: `If you have questions about this Privacy Policy, your data, or would like to exercise your rights, please contact our Legal Data Protection team:
        
        Email: legal@twonnect.com
        Address: TWONNECT Legal Affairs, 121 Innovation Drive, suite 100`
    }
];

export default function PrivacyPage() {
    return (
        <div style={{ background: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <main style={{ maxWidth: '1140px', margin: '0 auto', padding: '120px 1.5rem 8rem', width: '100%' }}>
                <Link href="/" style={{ color: '#64748B', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '3rem', fontSize: '0.9rem', fontWeight: 500 }}>
                    &larr; Back to Home
                </Link>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 280px', gap: '5rem' }}>
                    {/* Left main content columns layout */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h1 style={{ fontSize: '3rem', fontWeight: 600, color: '#0F172A', letterSpacing: '-0.03em', lineHeight: '1.1', marginBottom: '1rem' }}>
                                Privacy Policy
                            </h1>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '4rem' }}>
                                Last updated: October 2026 &middot; 5 min read
                            </p>
                        </motion.div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                            {sections.map((sec, idx) => (
                                <motion.section 
                                    key={sec.id}
                                    id={sec.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    style={{ paddingBottom: '3rem', borderBottom: idx < sections.length - 1 ? '1px solid #F1F5F9' : 'none' }}
                                >
                                    <h2 style={{ fontSize: '1.4rem', fontWeight: 600, color: '#0F172A', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>{sec.title}</h2>
                                    <div style={{ color: '#334155', fontSize: '1rem', lineHeight: '1.7', whiteSpace: 'pre-line', fontFamily: '"Inter Variable", sans-serif' }}>
                                        {sec.content}
                                    </div>
                                </motion.section>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar navigation anchors map */}
                    <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
                        <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', textTransform: 'uppercase', letterSpacing: '0.05rem', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #F1F5F9' }}>
                            Sections
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {sections.map((sec) => (
                                <a 
                                    key={sec.id}
                                    href={`#${sec.id}`}
                                    style={{ 
                                        padding: '10px 14px', 
                                        borderRadius: '8px', 
                                        color: '#64748B',
                                        fontSize: '0.88rem',
                                        fontWeight: 400,
                                        cursor: 'pointer',
                                        transition: 'all 0.15s',
                                        textAlign: 'left',
                                        textDecoration: 'none',
                                        display: 'block'
                                    }}
                                    className="privacy-nav-link"
                                >
                                    {sec.title.split('. ')[1] || sec.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .privacy-nav-link:hover {
                    background: #F8FAFC;
                    color: #0F172A !important;
                }
            `}</style>
        </div>
    );
}


