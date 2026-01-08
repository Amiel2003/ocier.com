'use client';

type CardType = {
    url: string;
    title: string;
    id: number;
    description: string
};

export const Card = ({
    card,
    isFlipped,
    onClick,
}: {
    card: CardType;
    isFlipped: boolean;
    onClick: () => void;
}) => {
    return (
        <div
            className="relative h-[420px] w-[260px] sm:h-[520px] sm:w-[320px] md:h-[580px] md:w-[400px] cursor-pointer perspective-1000"
            onClick={onClick}
        >
            <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* FRONT */}
                <div className="absolute w-full h-full backface-hidden overflow-hidden shadow-lg">
                    <img
                        src={card.url}
                        alt={card.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full backface-hidden bg-background items-center justify-center px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 shadow-lg rotate-y-180">
                    <h2 className="text-accent-foreground text-3xl sm:text-4xl md:text-6xl font-bold font-family-ronzino tracking-tighter">
                        {card.title}
                    </h2>
                    <p className="mt-4 sm:mt-6 md:mt-7 font-family-jetbrains text-xs sm:text-sm">
                        {card.description}
                    </p>
                </div>
            </div>

            <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </div>
    );
};
