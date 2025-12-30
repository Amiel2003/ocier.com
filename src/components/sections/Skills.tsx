'use client';
import StickyCards from "@/components/ui/sticky-cards";
import TiltCard from "@/components/ui/TiltedCard";
import { useState, useEffect } from "react";

export function SkillSection() {
    const [activeCard, setActiveCard] = useState(0)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [index, setIndex] = useState("")
    const infoArray = [
        {
            index: "00",
            title: "Amiel Jay S. Ocier",
            description: "Eager to learn and grow."
        },
        {
            index: "01",
            title: "Full-stack",
            description: "I guess I'm a one man army. Kidding, I can do both frontend and backend."
        },
        {
            index: "02",
            title: "Creative",
            description: "Hey! No templates for this portfolio, just inspirations."
        },
        {
            index: "03",
            title: "Visual",
            description: "It irritates my eyes seeing colors that don't match! Just kidding."
        },
        {
            index: "04",
            title: "Keen",
            description: "I swear, I have the greatest music taste ever! I'd debate over this, joke!"
        },
    ]

    useEffect(() => {
        setTitle(infoArray[activeCard].title ?? infoArray[0].title)
        setDescription(infoArray[activeCard].description ?? infoArray[0].description)
        setIndex(infoArray[activeCard].index ?? infoArray[0].index)
    }, [activeCard])

    return (
        <div className="grid grid-cols-10 relative bg-accent-foreground text-background -mt-8 md:pb-77 ">
            <div className="col-span-6 md:mt-0 pt-32 md:w-full w-full">
                <StickyCards onActiveChange={setActiveCard} />
            </div>

            <div className="sticky top-17 mt-32 h-fit col-span-4 md:block hidden md:mt-0 ">
                <div className="mr-20 w-3/4">
                    <TiltCard
                        title={title}
                        description={description}
                        index={index}
                    />
                </div>
            </div>
        </div>

    );
}
