'use client'
import StickyProjects from "@/components/sections/Projects";
import { GraphicCards } from "@/components/sections/Graphics";

export default function Works() {
    const synonyms = ["Works", "Crafts", "Creations", "Projects"];
    const separator = " • ";
    const fullText = synonyms.join(separator);

    // Create duplicated text for seamless infinite scroll
    const scrollContent = `${fullText}${separator}${fullText}${separator}`;

    return (
        <div>
            <div className="relative overflow-hidden bg-background py-5">
                <div
                    className="flex whitespace-nowrap"
                    style={{
                        animation: 'scroll 25s linear infinite',
                    }}
                >
                    <span className="text-accent-foreground text-xs md:text-8xl font-semibold font-family-ronzino tracking-tighter px-6">
                        {scrollContent}
                    </span>
                    <span className="text-accent-foreground text-xs md:text-8xl font-semibold font-family-ronzino tracking-tighter px-6">
                        {scrollContent}
                    </span>
                </div>
            </div>
            <StickyProjects />
            <GraphicCards />

            <style jsx global>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    )
}