'use client';

import { useInView } from "@/hooks/use-in-view";
import { Typewriter } from "../ui/typewriter";
import { TextAnimate } from "../ui/text-animate";
import { ArrowDown, } from "lucide-react";

export function IntroSection() {
    const { ref, isVisible } = useInView(0.2);

    return (
        <div className="bg-accent-foreground pb-14 text-background py-5 px-6">
            <div className="text-xs md:text-lg font-semibold ">// Intro</div>

            <div ref={ref} className="overflow-hidden">
                <TextAnimate animation="blurIn" className="tracking-tight text-2xl md:text-6xl font-semibold transition-colors duration-500 px-1 py-8 md:px-27 md:pt-24 text-background " highlight={["versatile", "visually", "striking", "user-friendly"]} highlightClassName="text-highlight">
                    A versatile web developer and designer
                    crafting visually striking, and user-friendly digital experiences that blend design and functionality.
                </TextAnimate>
            </div>

            <div className="flex flex-col md:flex-row md:px-27 md:pb-24 px-1 pt-1 gap-4">
                {/* Button */}
                <div className="w-full md:w-[50%] flex items-start justify-start order-2 md:order-1">
                    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-background pl-6 pr-4 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] gap-2 font-family-poppins md:text-lg text-xs">
                        <span>Resume</span> <ArrowDown className="size-3 md:size-6" />
                    </button>
                </div>

                {/* Paragraph */}
                <div className="w-full md:w-[50%] flex items-end justify-end order-1 md:order-2 text-xs md:text-lg text-gray-400 font-family-poppins ">
                    I create digital experiences that are both beautiful and easy to use. Every project blends design and functionality for maximum impact. Each design is tailored to engage and delight users.
                </div>
            </div>


        </div>
    );
}
