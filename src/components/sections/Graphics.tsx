'use client';
import { useState } from "react";
const PortfolioCards = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const cards = [
        {
            id: 1,
            title: "Post Salad",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=600&fit=crop",
            color: "bg-blue-500"
        },
        {
            id: 2,
            title: "Epiphany Homes",
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=600&fit=crop",
            color: "bg-amber-100"
        },
        {
            id: 3,
            title: "Vibes App",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop",
            color: "bg-orange-400"
        },
        {
            id: 4,
            title: "PBS Series",
            image: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop",
            color: "bg-slate-700"
        },
        {
            id: 5,
            title: "Art Magazine",
            image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=400&h=600&fit=crop",
            color: "bg-white"
        },
        {
            id: 6,
            title: "Optex Tech",
            image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=400&h=600&fit=crop",
            color: "bg-blue-600"
        }
    ];

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8">
            <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
                {cards.map((card, index) => {
                    const totalCards = cards.length;
                    const middleIndex = (totalCards - 1) / 2;
                    const offset = (index - middleIndex) * 170;
                    const rotation = (index - middleIndex) * 5;

                    const isHovered = hoveredIndex === index;
                    const isOtherHovered = hoveredIndex !== null && !isHovered;

                    return (
                        <div
                            key={card.id}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="absolute transition-all duration-350 ease-in-out cursor-pointer h-125
                            "
                            style={{
                                transform: isHovered
                                    ? `translateX(${(index <= 3) ? offset - 65 : offset + 65}px) translateY(-10px) rotate(0deg)`
                                    : isOtherHovered
                                        ? `translateX(${offset}px) rotate(${rotation}deg) `
                                        : `translateX(${offset - index + 2}px) translateY(${offset + index - 10}) rotate(${rotation}deg) scale(1)`,
                                zIndex: isHovered ? 50 : 10 + index,
                                filter: isOtherHovered ? 'brightness(0.6)' : 'brightness(1)',
                            }}
                        >

                            <div className="w-88 overflow-hidden shadow-2xl bg-white h-full">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                    <h3 className="text-white text-xl font-bold">{card.title}</h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PortfolioCards;