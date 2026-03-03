"use client";

import { useEffect } from "react";

/**
 * Attaches an IntersectionObserver to every element with class `reveal`.
 * When it enters the viewport it gets `reveal-visible` which triggers the CSS fade-up transition.
 */
export default function ScrollReveal() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target); // only animate once
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        const els = document.querySelectorAll(".reveal");
        els.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null; // purely side-effectful
}
