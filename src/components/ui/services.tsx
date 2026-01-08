'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextAnimate } from './text-animate';

export default function ServicesMarquee() {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const height = wrapper.scrollHeight / 2;

        gsap.to(wrapper, {
            y: -height,
            duration: 12,
            ease: 'none',
            repeat: -1,
        });
    }, []);


    return (
        <div className="relative h-[500px] overflow-hidden">
            <div ref={wrapperRef} className="flex flex-col">
                {/* First set */}
                <ServicesText />
                {/* Duplicate set */}
                <ServicesText />
            </div>
        </div>
    );
}

function ServicesText() {
    return (
        <div className="flex flex-col">
            <TextAnimate animation="blurInUp" className="tracking-tighter text-8xl font-family-ronzino font-medium text-[#ceef273e]">
                SERVICES
            </TextAnimate>
            <TextAnimate animation="blurInUp" className="tracking-tighter text-8xl font-family-ronzino font-medium text-[#ceef276c]">
                SERVICES
            </TextAnimate>
            <TextAnimate animation="blurInUp" className="tracking-tighter text-8xl font-family-ronzino font-medium text-[#ceef279e]">
                SERVICES
            </TextAnimate>
            <TextAnimate animation="blurInUp" className="tracking-tighter text-8xl font-family-ronzino font-medium text-[#ceef27ba]">
                SERVICES
            </TextAnimate>
            <TextAnimate animation="blurInUp" className="tracking-tighter text-8xl font-family-ronzino font-medium text-[#ceef27]">
                SERVICES
            </TextAnimate>
        </div>
    );
}
