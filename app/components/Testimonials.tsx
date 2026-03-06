import Link from "next/link";

const testimonials = [
    // Column 1
    [
        {
            name: "Arjun Mehta",
            handle: "@arjunbuilds",
            avatar: "#3b82f6",
            text: "I joined TWONNECT with a half-baked concept, and honestly, I thought it would go nowhere. But the way problems are broken down into actionable steps made me stick with it. Within a month, I launched my first MVP.",
            highlights: ["half-baked concept", "launched my first MVP"],
        },
        {
            name: "Priya Nair",
            handle: "@designwithpriya",
            avatar: "#f97316",
            text: "The community side of TWONNECT deserves its own shoutout. The feedback on ideas is not just academic — it's practical and usable. I applied what I learned to a client's brand and received incredible traction. Every submission directly translates to real work.",
            highlights: ["incredible traction"],
        },
        {
            name: "Ravi Shankar",
            handle: "@ravicreates",
            avatar: "#a855f7",
            text: "I've explored other platforms before, but they always felt either too broad or too niche. TWONNECT is different. Each problem builds on the previous one, and the progress feels natural, structured, and deeply motivating.",
            highlights: [],
        },
    ],
    // Column 2
    [
        {
            name: "Sneha Kapoor",
            handle: "@sneha_dev",
            avatar: "#22c55e",
            text: "TWONNECT doesn't just throw ideas at you. Every problem is explained with full context, and then you immediately apply it to real projects. I went from watching tutorials aimlessly to actually building portfolio-worthy products.",
            highlights: [],
        },
        {
            name: "Karan Verma",
            handle: "@karanbuilds",
            avatar: "#ef4444",
            text: "Before this, startup validation felt like an unsolvable puzzle. Now? It finally makes sense. The examples are practical, the feedback is sharp, and most importantly, the explanations are clear. I don't just 'know' validation now — I actually enjoy it.",
            highlights: [],
        },
        {
            name: "Fatima Sheikh",
            handle: "@fatimacodes",
            avatar: "#8b5cf6",
            text: "What surprised me most about TWONNECT was the support system. The AI refinement tool actually works — I got detailed feedback at 2 AM when I was stuck on a product framing issue. It doesn't feel like you're building alone; it feels like someone's always got your back, which keeps you moving forward.",
            highlights: ["AI refinement tool", "detailed feedback"],
        },
    ],
    // Column 3
    [
        {
            name: "Ananya Roy",
            handle: "@uxananya",
            avatar: "#ec4899",
            text: "As a designer shifting into product development, I struggled with market research. TWONNECT finally gave me the clarity I needed. This is hands-on problem solving at its best.",
            highlights: [],
        },
        {
            name: "Dev Rajput",
            handle: "@dev_js",
            avatar: "#14b8a6",
            text: "I've been building for about a year, but I never really felt confident until I found TWONNECT. The validated problems and structured thinking were game-changers. I shipped a feature for a client last month and actually got paid for it. For me, this isn't just ideation — it's career growth.",
            highlights: ["career growth"],
        },
        {
            name: "Nikhil Torres",
            handle: "@nikhildev",
            avatar: "#f59e0b",
            text: "For years I told myself startups weren't for me. But TWONNECT completely changed that mindset. The way the community simplifies difficult topics is remarkable. I started with small wins, and now I'm building full products, something I never imagined doing. It's not just a platform.",
            highlights: ["I'm building full products"],
        },
    ],
];

function highlightText(text: string, highlights: string[]) {
    if (!highlights.length) return <>{text}</>;
    const parts: React.ReactNode[] = [];
    let remaining = text;
    highlights.forEach((h) => {
        const idx = remaining.indexOf(h);
        if (idx === -1) return;
        parts.push(remaining.slice(0, idx));
        parts.push(<span key={h} className="tm-highlight">{h}</span>);
        remaining = remaining.slice(idx + h.length);
    });
    parts.push(remaining);
    return <>{parts}</>;
}

export default function Testimonials() {
    return (
        <section className="tm-section container">
            {/* Header */}
            <div className="tm-header">
                <h2 className="tm-title">What Our Builders Say</h2>
                <p className="tm-subtitle">
                    Join thousands of founders and builders who are validating and launching with TWONNECT
                </p>
            </div>

            {/* Masonry columns */}
            <div className="tm-grid">
                {testimonials.map((col, ci) => (
                    <div key={ci} className="tm-col">
                        {col.map((t, ti) => (
                            <div key={ti} className="tm-card">
                                {/* Card header */}
                                <div className="tm-card-header">
                                    <div className="tm-user">
                                        <div className="tm-avatar" style={{ background: t.avatar }}>
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <div className="tm-name">{t.name}</div>
                                            <div className="tm-handle">{t.handle}</div>
                                        </div>
                                    </div>
                                    {/* X / Twitter icon */}
                                    <svg className="tm-x-icon" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </div>
                                {/* Body */}
                                <p className="tm-body">
                                    {highlightText(t.text, t.highlights)}
                                </p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="tm-cta">
                <Link href="/signin">
                    <button className="btn-blue tm-cta-btn">Start Building Now</button>
                </Link>
            </div>
        </section>
    );
}
