import { useEffect, useState, useRef } from "react";

export function useInView(threshold = 0.1) {
    const ref = useRef<HTMLDivElement | null>(null); // <--- change here
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, threshold]);

    return { ref, isVisible };
}
