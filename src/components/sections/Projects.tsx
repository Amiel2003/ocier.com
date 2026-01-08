'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProjectCard from '../ui/project-card';
import BentoSlide from '../ui/bento-slide';
import MatigdaAppLogo from '../ui/projects/matigda/app-logo';
import DormyAppLogo from '../ui/projects/dormy/app-logo';
import CrashWatchAppLogo from '../ui/projects/crashwatch/app-logo';

gsap.registerPlugin(ScrollTrigger);

type Project = {
    title: string;
    cover: string[];
    colors: string[];
    logo: React.FC<React.SVGProps<SVGSVGElement>> | string;
    link: {
        link: string,
        source: string,
        hasSite: boolean,
        hasSource: boolean,
    };
    date: string;
    type: string;
    description: string;
    layout: 'default' | 'bento';
    tags: string[];
};

const projects: Project[] = [
    {
        title: 'MATIGDA',
        cover: [
            '/images/matigda/image.png',
            '/images/matigda/dashboard.png',
            '/images/matigda/yearbooks.png',
            '/images/matigda/sidebar.png',
        ],
        colors: ['#08090C', '#111111', '#0C1320', '#232326', '#00BC7D'],
        logo: MatigdaAppLogo,
        link: {
            link: "https://matigda.com/login",
            source: "",
            hasSite: true,
            hasSource: false,
        },
        date: "2025",
        type: "Information System",
        description: "Co-developed and deployed a comprehensive yearbook management system for Bukidnon State University's official yearbook, Matigda, featuring appointment booking, subscriptions, yearbook onboarding, and payment verification.",
        layout: "default",
        tags: ['React', 'Laravel', 'PostgreSQL', 'Tailwind'],
    },
    {
        title: 'Dormy',
        cover: [
            '/images/dormy/pricing2.png',
            '/images/dormy/dashboard.png',
            '/images/dormy/tenants.png',
        ],
        colors: ['#0C2D57', '#FC6736', '#EEEFF2', '#F6F9FF', '#FFFFFF'],
        logo: DormyAppLogo,
        link: {
            link: "",
            source: "https://github.com/OrangeMintz/Dorm-Management-System",
            hasSite: false,
            hasSource: true,
        },
        date: "2024",
        type: "Information System",
        description: "Collaborated on a SaaS multi-tenant platform for universities as a school project, streamlining dorm management with user-role control. Features include managing dorms and rooms, assigning students, and maintaining resident records.",
        layout: "default",
        tags: ['Laravel', 'PostgreSQL', 'Tailwind', 'Tenancy'],
    },
    {
        title: 'CrashWatch',
        cover: [
            '/images/crashwatch/modal.png',
            '/images/crashwatch/dashboard.png',
            '/images/crashwatch/device2.png',
        ],
        colors: ['#777979', '#c74b3b', '#eaeaed', '#f8f9fc', '#ffffff'],
        logo: CrashWatchAppLogo,
        link: {
            link: "",
            source: "https://github.com/Amiel2003/CrashWatch.git",
            hasSite: false,
            hasSource: true,
        },
        date: "2025",
        type: "Information System",
        description: "Led the development of a capstone sensor-driven system that integrates accelerometer data, GPS tracking, web technologies, and SMS alerts to detect collisions and abnormal movement patterns for real-time accident detection and location-based notification.",
        layout: "default",
        tags: ['IoT', 'Laravel', 'Python', 'Realtime'],
    },
];

export default function StickyProjects() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const cards = gsap.utils.toArray<HTMLElement>('.sticky-card');

            cards.forEach((card, index) => {
                if (index === cards.length - 1) return;

                const nextCard = cards[index + 1];

                gsap.fromTo(
                    card,
                    { opacity: 1, scale: 1, y: 0 },
                    {
                        opacity: 0,
                        scale: 0.85,
                        y: 40,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: nextCard,
                            start: 'top bottom',
                            end: 'top top',
                            scrub: true,
                        },
                    }
                );
            });
        },
        { scope: containerRef }
    );

    return (
        <div className="bg-accent-foreground" ref={containerRef}>

            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-accent-foreground text-background py-5 px-6">
                <h1 className="text-xs md:text-lg font-semibold font-family-ronzino">
                    // Web Projects
                </h1>
            </div>

            {/* Cards */}
            <div className="w-full md:px-12">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
                <div className="sticky-card sticky top-[15px] flex items-center justify-center pb-10 bg-accent-foreground">
                </div>
            </div>
        </div>
    );
}
