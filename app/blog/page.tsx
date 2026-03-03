import Link from "next/link";
import "../globals.css";
import "./blog.css";

const posts = [
    {
        slug: "validate-ideas-faster",
        tag: "Product",
        date: "Feb 20, 2026",
        title: "How to Validate Startup Ideas 10x Faster Using Community Feedback",
        excerpt: "Most founders spend months building before they know if anyone cares. Here's a faster way — validate with real people before writing a single line of code.",
        readTime: "5 min read",
        accent: "#007aff",
    },
    {
        slug: "ai-refinement-guide",
        tag: "AI & Tools",
        date: "Feb 14, 2026",
        title: "Inside Idea Platform's AI Refinement: How It Turns Raw Ideas Into Product Specs",
        excerpt: "Our AI agent doesn't just clean up your writing — it asks the right questions, identifies gaps, and produces a structured requirements doc builders can act on immediately.",
        readTime: "7 min read",
        accent: "#bbf451",
    },
    {
        slug: "find-cofounder",
        tag: "Community",
        date: "Feb 8, 2026",
        title: "The Builder Directory: A Better Way to Find Your Co-Founder",
        excerpt: "Finding a co-founder through LinkedIn feels like shouting into a void. The Builder Directory matches you based on skills, availability, and the problems you care about.",
        readTime: "4 min read",
        accent: "#007aff",
    },
    {
        slug: "investor-hub-launch",
        tag: "Fundraising",
        date: "Jan 30, 2026",
        title: "Investor Hub is Live: How Startups Are Connecting With Capital on Idea Platform",
        excerpt: "We launched Investor Hub to bridge the gap between validated problems and the investors who want to back them early. Here's what we learned in the first 30 days.",
        readTime: "6 min read",
        accent: "#000000",
    },
    {
        slug: "social-impact-problems",
        tag: "Impact",
        date: "Jan 22, 2026",
        title: "The 10 Most Impactful Open Problems in Social Tech Right Now",
        excerpt: "We analysed 1,200+ submissions and surfaced the problems with the most real-world urgency, community traction, and builder team formation potential.",
        readTime: "8 min read",
        accent: "#007aff",
    },
    {
        slug: "from-idea-to-mvp",
        tag: "Build",
        date: "Jan 15, 2026",
        title: "From Validated Problem to Working MVP in 6 Weeks: A Builder's Playbook",
        excerpt: "Six weeks. One validated problem. Zero VC backing. Here's how a team of three shipped a working MVP and got their first paying customer using Idea Platform.",
        readTime: "10 min read",
        accent: "#bbf451",
    },
];

export const metadata = {
    title: "Blog — Idea Platform",
    description: "Insights on startup validation, building products, and community-driven growth from the Idea Platform team.",
};

export default function BlogPage() {
    return (
        <main className="blog-page">
            {/* Hero */}
            <section className="blog-hero">
                <div className="blog-hero-inner container">
                    <div className="blog-label">
                        <span className="blog-label-dot" />
                        Latest from Idea Platform
                    </div>
                    <h1 className="blog-hero-title">Ideas Worth Reading</h1>
                    <p className="blog-hero-sub">
                        Insights on startup validation, building with community, and shipping things that matter.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="blog-grid-section container">
                <div className="blog-grid">
                    {posts.map((p) => (
                        <article key={p.slug} className="blog-card">
                            {/* Coloured top strip */}
                            <div className="blog-card-strip" style={{ background: p.accent }} />

                            <div className="blog-card-body">
                                <div className="blog-card-meta">
                                    <span className="blog-tag" style={{ color: p.accent, background: `${p.accent}16` }}>
                                        {p.tag}
                                    </span>
                                    <span className="blog-date">{p.date}</span>
                                </div>
                                <h2 className="blog-card-title">{p.title}</h2>
                                <p className="blog-card-excerpt">{p.excerpt}</p>
                                <div className="blog-card-footer">
                                    <span className="blog-read-time">{p.readTime}</span>
                                    <Link href={`/blog/${p.slug}`} className="blog-read-link">
                                        Read more →
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="blog-cta container">
                <p>Want to contribute a post or share your builder story?</p>
                <Link href="/contact">
                    <button className="btn-black">Get in Touch</button>
                </Link>
            </section>
        </main>
    );
}
