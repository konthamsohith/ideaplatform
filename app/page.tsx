"use client";

import React, { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import SmoothScroll from "./components/SmoothScroll";
import HeroBg from "./components/HeroBg";

// New Landing Page Components
import HeroSection from "./components/landing/HeroSection";
import TheProblemSection from "./components/landing/TheProblemSection";
import HowItWorksSection from "./components/landing/HowItWorksSection";
import AIValidationSection from "./components/landing/AIValidationSection";
import ExploreProblemsSection from "./components/landing/ExploreProblemsSection";
import UserValueSection from "./components/landing/UserValueSection";
import StatsSection from "./components/landing/StatsSection";
import FinalCTASection from "./components/landing/FinalCTASection";
import AboutSection from "./components/landing/AboutSection";

export default function Home() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            router.push("/dashboard");
        }
    }, [user, loading, router]);

    useEffect(() => {
        document.documentElement.classList.add('hide-scrollbar');
        return () => document.documentElement.classList.remove('hide-scrollbar');
    }, []);

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "TWONNECT",
        "url": "https://twonnect.me",
        "logo": "https://twonnect.me/assests/TWONNECTcircle.png",
        "description": "Connecting early-stage startup founders with validated problem statements and angel investors to build Y Combinator-ready companies.",
        "sameAs": [
            "https://twitter.com/twonnect",
            "https://linkedin.com/company/twonnect"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "url": "https://twonnect.me/contact"
        }
    };

    return (
        <main className="avanza-home" style={{ position: 'relative', overflowX: 'hidden' }}>
            {/* Light redirection overlay */}
            {(loading || user) && (
                <div style={{
                    position: "fixed",
                    inset: 0,
                    backgroundColor: "#f0f7ff",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }} />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <HeroBg />
            <SmoothScroll />

            <div style={{ position: 'relative', zIndex: 10 }}>
                <HeroSection />
                <TheProblemSection />
                <HowItWorksSection />
                <AIValidationSection />
                <ExploreProblemsSection />
                <UserValueSection />
                <StatsSection />
                <FinalCTASection />
                <AboutSection />
            </div>
        </main>
    );
}
