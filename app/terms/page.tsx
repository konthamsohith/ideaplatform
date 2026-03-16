"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
    {
        id: "acceptance",
        title: "1. Acceptance of Terms",
        content: `By accessing or using the TWONNECT platform, dashboard or related services (collectively, the Service), you agree to be bound by these Terms of Service (Terms) and our Privacy Policy. 
        
        If you are using the Service on behalf of a company or legal entity, you represent and warrant that you have the authority to bind that entity to these Terms. If you do not agree to these Terms, you must not access or use the Service.`
    },
    {
        id: "roles",
        title: "2. User Roles & Eligibility",
        content: `Our ecosystem serves Founders, Builders, and Investors:
        • Founders: Users submitted problem statements or startup definitions warrant that ideas represent fully accessible core benchmarks accuracy.
        • Builders: Tech providers warrant portfolios represent authentic historical deliverables accurately cleanly.
        • Investors: Accreditation assertions warrant strict compliance limits audits parameters.
        
        You must be at least 18 years of age to participate. Verify credentials honestly; misrepresentation is grounds for immediate termination.`
    },
    {
        id: "disclaimer",
        title: "3. Disclaimer (Not Investment Advice)",
        content: `TWONNECT is an ecosystem network matching workspace tool. 
        
        We are NOT a registered broker-dealer, investment advisor, or financial node provider under the Securities and Exchange Commission (SEC) or equivalent territorial regulators.
        
        We do not guarantee funding, builder Deliverables, or validation metrics accuracy. All deals made inside or outside the workspace are at the sole discretion, due diligence, and risk parameters of the participants exclusively framing.`
    },
    {
        id: "intellectual-property",
        title: "4. Intellectual Property Rights",
        content: `• Your Content: Ideas, pitch decks, and wireframes remain your exclusive asset. By submitting data, you grant TWONNECT a non-exclusive license to host and share it with INVITED or MATCHED peers solely for matching setup algorithms setup.
        • TWONNECT Content: Dashboard interfaces, AI audit tools, and matching metrics outputs belong exclusively to TWONNECT. You may not reproduce, reverse engineer, or scrape workspace framework items without explicit support parameters.`
    },
    {
        id: "prohibited",
        title: "5. Prohibited Conduct",
        content: `You agree NOT to engage in any of the following:
        • Bypassing Interfaces: Circumventing dashboard messaging to finalize deals strictly off-platform for intent to avoid terms fees.
        • Scrapping Tools: Automatic scraping of founder datasets or investor thesis limits framing.
        • Harassment: Unfair solicitations or spam targeting listed peers loaded.
        • False audits: Intentionally submitting fake validation indices structure offsets.`
    },
    {
        id: "liability",
        title: "6. Limitation of Liability",
        content: `To the maximum extent permitted by governing law, TWONNECT shall not be liable for any indirect, incidental, special, consequential, or punitive damages structure, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
        
        This disclaimer applies specifically to startup investment fails, builder Deliverable bugs, or third party breaches outside our boundary nodes layout safely.`
    },
    {
        id: "termination",
        title: "7. Account Termination",
        content: `We reserve the right to suspend or terminate your account access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms framing.
        
        Upon termination, your right to use the Service will cease immediately limit rules parameters audits.`
    },
    {
        id: "governing-law",
        title: "8. Governing Law & Arbitration",
        content: `These Terms shall be governed and construed in accordance with the laws of the jurisdiction where TWONNECT operates, without regard to its conflict of law provisions.
        
        Any disputes arising from or relating to the subject matters of these Terms shall be settled through binding arbitration instead of courts, unless explicit class-action waivers apply safely.`
    }
];

export default function TermsPage() {
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
                                Terms of Service
                            </h1>
                            <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '4rem' }}>
                                Last updated: October 2026 &middot; 4 min read
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
                                    className="terms-nav-link"
                                >
                                    {sec.title.split('. ')[1] || sec.title}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <style jsx>{`
                .terms-nav-link:hover {
                    background: #F8FAFC;
                    color: #0F172A !important;
                }
            `}</style>
        </div>
    );
}
