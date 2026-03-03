"use client";

import { motion } from "framer-motion";

const blobs = [
    {
        className: "blob-blue",
        initial: { x: 0, y: 0, scale: 1 },
        animate: {
            x: [0, 50, -25, 35, 0],
            y: [0, 30, 55, -20, 0],
            scale: [1, 1.06, 0.97, 1.04, 1],
        },
        duration: 22,
    },
    {
        className: "blob-lavender",
        initial: { x: 0, y: 0, scale: 1 },
        animate: {
            x: [0, -35, 55, -15, 0],
            y: [0, 45, 20, -35, 0],
            scale: [1, 1.08, 0.94, 1.05, 1],
        },
        duration: 26,
    },
    {
        className: "blob-mint",
        initial: { x: 0, y: 0, scale: 1 },
        animate: {
            x: [0, -45, 30, 20, 0],
            y: [0, -30, -55, 40, 0],
            scale: [1, 1.07, 0.97, 1.02, 1],
        },
        duration: 20,
    },
    {
        className: "blob-teal",
        initial: { x: 0, y: 0, scale: 1 },
        animate: {
            x: [0, 40, -30, -40, 0],
            y: [0, -40, 45, -25, 0],
            scale: [1, 1.05, 0.96, 1.04, 1],
        },
        duration: 24,
    },
];

export default function HeroBg() {
    return (
        <div className="hero-bg-mesh" aria-hidden="true">
            {blobs.map((blob, i) => (
                <motion.div
                    key={i}
                    className={`hero-blob ${blob.className}`}
                    initial={blob.initial}
                    animate={blob.animate}
                    transition={{
                        duration: blob.duration,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "mirror",
                    }}
                />
            ))}
        </div>
    );
}
