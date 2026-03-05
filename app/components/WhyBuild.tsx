export default function WhyBuild() {
    return (
        <section className="wb-section container">
            {/* Header */}
            <div className="wb-header">
                <h2 className="wb-title">Why Build with TWONNECT?</h2>
                <p className="wb-subtitle">Crafted to take you from idea to launch at your own pace</p>
            </div>

            {/* Bento grid */}
            <div className="wb-grid">

                {/* Row 1 — Card 1: Expert Community */}
                <div className="wb-card wb-community">
                    <div className="wb-card-text">
                        <h3>Expert Community</h3>
                        <p>Connect with experienced founders, builders, and investors who share real-world knowledge</p>
                    </div>
                    {/* Orbital avatar visual */}
                    <div className="wb-orbital" aria-hidden="true">
                        <div className="wb-orbit wb-orbit-1">
                            <div className="wb-avatar wb-av-a" />
                            <div className="wb-avatar wb-av-b" />
                        </div>
                        <div className="wb-orbit wb-orbit-2">
                            <div className="wb-avatar wb-av-c" />
                            <div className="wb-avatar wb-av-d" />
                        </div>
                        <div className="wb-center-dot" />
                    </div>
                </div>

                {/* Row 1 — Card 2: Live Collaboration (lime highlight) */}
                <div className="wb-card wb-collab wb-lime">
                    <div className="wb-card-text">
                        <h3>Live Collaboration</h3>
                        <p>Engage with real problems that make building meaningful and fun</p>
                    </div>
                    {/* Grid icon visual */}
                    <div className="wb-collab-visual" aria-hidden="true">
                        <div className="wb-mini-grid">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <div key={i} className={`wb-mini-cell ${i === 4 ? "wb-mini-cell-active" : ""}`} />
                            ))}
                        </div>
                        <svg className="wb-cursor" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M4 0l16 12-7 2-4 8z" />
                        </svg>
                    </div>
                </div>

                {/* Row 1 — Card 3: Build Anytime */}
                <div className="wb-card wb-anytime">
                    <div className="wb-card-text">
                        <h3>Build Anytime</h3>
                        <p>Access all problems and resources on your own schedule</p>
                    </div>
                    {/* Bar chart visual */}
                    <div className="wb-bar-chart" aria-hidden="true">
                        {[60, 80, 100, 70, 40, 55, 30].map((h, i) => (
                            <div key={i} className="wb-bar-wrap">
                                <div className="wb-bar" style={{ height: `${h}%` }} />
                                <span className="wb-bar-label">{["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 — Card 4: Verified Problems (dark) */}
                <div className="wb-card wb-verified wb-dark">
                    <div className="wb-card-text">
                        <h3>Verified Problems</h3>
                        <p>Get access to officially validated, high-impact problems on completion</p>
                    </div>
                    <div className="wb-badges" aria-hidden="true">
                        <div className="wb-badge-item wb-badge-lime">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            Verified
                        </div>
                        <div className="wb-badge-item">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                            Validated
                        </div>
                    </div>
                </div>

                {/* Row 2 — Card 5: AI Refinement */}
                <div className="wb-card wb-ai">
                    <div className="wb-card-text">
                        <h3>AI-Powered Refinement</h3>
                        <p>Get instant AI feedback and suggestions whenever you need help shaping your idea</p>
                    </div>
                    {/* Chat bubble visual */}
                    <div className="wb-chat" aria-hidden="true">
                        <div className="wb-bubble wb-bubble-in">Can you help me validate this idea?</div>
                        <div className="wb-bubble wb-bubble-out">Great idea! Here are 3 market insights to strengthen it.</div>
                    </div>
                </div>

                {/* Row 2 — Card 6: Launch Your Startup (blue) */}
                <div className="wb-card wb-launch wb-blue">
                    <div className="wb-card-text">
                        <h3>Launch Your Startup</h3>
                        <p>Master the complete skill set — from problem discovery to fundraising and launch.</p>
                    </div>
                    {/* Dashboard visual */}
                    <div className="wb-dashboard" aria-hidden="true">
                        <div className="wb-dash-rows">
                            <div className="wb-dash-row" />
                            <div className="wb-dash-row wb-dash-short" />
                            <div className="wb-dash-row" />
                        </div>
                        <div className="wb-dash-avatar" />
                    </div>
                </div>

            </div>
        </section>
    );
}
