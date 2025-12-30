import { useEffect, useState } from "react";

interface TypewriterProps {
    text: string;
    isVisible: boolean;
}

export function Typewriter({ text, isVisible }: TypewriterProps) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!isVisible) return;

        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            if (index === text.length) clearInterval(interval);
        }, 50); // typing speed

        return () => clearInterval(interval);
    }, [isVisible, text]);

    return <span>{displayedText}</span>;
}
