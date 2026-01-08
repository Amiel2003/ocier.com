'use client';
import { HorizontalScrollCarousel } from "../ui/horizontal-scroll-carousel";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const GraphicCards = () => {
    const ref = useRef<HTMLDivElement>(null);

    // Use scroll progress for smooth progressive animation as section approaches viewport
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"] // Track from start entering to end exiting
    });

    // Smooth ease-out animation with custom easing curve
    // Eases in smoothly and stays visible, then eases out
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0],
        { clamp: false }
    );

    const y = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [80, 0, 0, -40],
        { clamp: false }
    );

    // Scale for a subtle zoom effect with ease-out
    const scale = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0.95, 1, 1, 0.98],
        { clamp: false }
    );

    return (
        <motion.div
            ref={ref}
            style={{
                opacity,
                y,
                scale,
            }}
            transition={{
                ease: [0.16, 1, 0.3, 1], // Custom ease-out curve
            }}
        >
            <div className="bg-accent-foreground">
                {/* Sticky title that stays at top left during card scrolling */}
                <div className="md:sticky top-0 z-50 bg-accent-foreground text-background pt-5 -mb-11 px-6">
                    <div className="text-xs md:text-lg font-semibold">
                        // Graphics
                    </div>
                </div>

                <HorizontalScrollCarousel />

            </div >
        </motion.div>

    );
};


