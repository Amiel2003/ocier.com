'use client';

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "./card";
import { useIsMobile } from "../../hooks/use-mobile";

type CardType = {
    url: string;
    title: string;
    id: number;
    description: string;
};

const cards: CardType[] = [
    {
        url: "/images/graphics/meet_the_team.webp",
        title: "The Team",
        id: 1,
        description: "This is a team highlight graphic for the team page I created during our Innovative Leadership subject in college. I aimed to achieve a fun, graffiti-inspired design that showcases playfulness and creativity while representing each member’s personality.",
    },
    {
        url: "/images/graphics/clipse.webp",
        title: "Clipse",
        id: 2,
        description: "I’ve been a big fan of hip-hop music for as long as I can remember. There was a time when I had Clipse’s album Let God Sort Em Out on repeat, which inspired me to create a graphic that captures the essence of hip-hop culture through the font-style and dithered image.",
    },
    {
        url: "/images/graphics/nope.webp",
        title: "Nope",
        id: 3,
        description: "I never really thought I’d enjoy an alien-horror movie, but Nope was a pleasant surprise. It inspired me to create a graphic that captures the film’s eerie anomalies. I chose a dark blue color theme to represent the sky—specifically the clouds—where the alien hides",
    },
    {
        url: "/images/graphics/webinar.webp",
        title: "Webinar",
        id: 4,
        description: "This webinar graphic showcases my design skills in creating professional and visually compelling layouts. I used AI to generate a fictional CEO and company name to serve as the subject of the poster. My goal was to create a captivating and engaging design that would spark interest and encourage people to attend the webinar.",
    },
    {
        url: "/images/graphics/camp.webp",
        title: "Camp",
        id: 6,
        description: "I wanted to try a product showcase–style graphic to demonstrate my ability to handle product-focused designs for a company. Since I really enjoy hiking and camping, I chose a dark green color palette to represent nature and the outdoors.",
    },
    {
        url: "/images/graphics/moneycache.webp",
        title: "Moneycache",
        id: 5,
        description: "I created this poster during my internship at Logicbase Interactive Ent. We were provided with specific assets and color schemes to follow, and I chose this layout because it aligned with the company’s existing design style. I did, however, change the font, as the original typeface didn’t resonate with me and I felt an alternative worked better for the overall design.",
    },
];

export const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useIsMobile();
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Adjust the end value to stop when last card is visible.
    // Use a slightly larger translate range on mobile so the last card is fully brought into view.
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

    const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

    const handleCardClick = (id: number) => {
        setFlippedCardId(prev =>
            prev === id ? null : id // clicking same card flips it back
        );
    };

    // On mobile, render a normal vertically scrolling list of cards.
    if (isMobile) {
        return (
            <section
                ref={targetRef}
                className="relative bg-accent-foreground py-10 px-4 space-y-6"
            >
                {cards.map((card) => (
                    <div key={card.id} className="flex justify-center">
                        <Card
                            card={card}
                            isFlipped={flippedCardId === card.id}
                            onClick={() => handleCardClick(card.id)}
                        />
                    </div>
                ))}
            </section>
        );
    }

    // On larger screens, keep the sticky horizontal scroll experience.
    return (
        <section
            ref={targetRef}
            className="relative bg-accent-foreground h-[300vh]"
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return (
                            <Card
                                card={card}
                                key={card.id}
                                isFlipped={flippedCardId === card.id}
                                onClick={() => handleCardClick(card.id)}
                            />
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};