'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

type Project = {
    title: string;
    cover: string[]; // FIXED: keep this flat for safety
    colors: string[];
    logo: React.FC<React.SVGProps<SVGSVGElement>> | string;
    link: {
        link: string;
        source: string;
        hasSite: boolean;
        hasSource: boolean;
    };
    date: string;
    type: string;
    description: string;
    layout: 'default' | 'bento';
    tags: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="sticky-card sticky top-[65px] flex justify-center pb-40">
            <div className="relative w-screen min-h-[100svh] md:h-screen overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-15 gap-3 bg-accent-foreground p-2 md:p-3">

                    {/* ================= IMAGE SECTION ================= */}
                    <div className="order-1 md:order-none col-span-1 md:col-span-10">
                        <div
                            className="
                                w-full
                                h-[240px]
                                sm:h-[300px]
                                md:h-[calc(100vh-90px)]
                                bg-center bg-cover bg-no-repeat
                                rounded-2xl
                                transition-all duration-200
                            "
                            style={{
                                backgroundImage: `url(${project.cover[activeIndex]})`,
                            }}
                        />
                    </div>

                    {/* ================= INFO SECTION ================= */}
                    <div
                        className="
                            order-2 md:order-none
                            col-span-1 md:col-span-5
                            flex flex-col
                            border border-background
                            rounded-2xl
                            px-4 md:px-12
                            pt-4 md:pt-15
                            pb-10
                        "
                    >
                        {/* Header */}
                        <div className="flex items-start w-full">
                            {/* Mobile links */}
                            <div className="flex gap-2 md:hidden">
                                {project.link.hasSite && (
                                    <button onClick={() => window.open(project.link.source, '_blank')} className="hover:bg-gray-700 transition-all text-background  duration-200 flex gap-1 text-xs items-center font-family-poppins bg-gray-600 px-2 py-1 rounded-sm" >
                                        <Globe size={12} />
                                        Website
                                    </button>
                                )}

                                {project.link.hasSource && (
                                    <button onClick={() => window.open(project.link.source, '_blank')} className="hover:bg-gray-700 transition-all text-background  duration-200 flex gap-1 text-xs items-center font-family-poppins bg-gray-600 px-2 py-1 rounded-sm" >
                                        <FaGithub size={12} />
                                        Source
                                    </button>
                                )}
                            </div>

                            <p className="ml-auto text-background text-xs md:text-sm font-family-jetbrains">
                                {project.date}
                            </p>
                        </div>

                        {/* Logo */}
                        <div className="mt-4 md:self-start">
                            {typeof project.logo === 'string' ? (
                                <img
                                    src={project.logo}
                                    alt={`${project.title} logo`}
                                    className="w-34 h-8 md:w-69 md:h-19"
                                />
                            ) : (
                                <project.logo
                                    className={`w-34 h-8 md:w-69 md:h-19 ${project.title === 'Dormy' ? 'md:-ml-4' : ''
                                        }`}
                                />
                            )}
                        </div>

                        {/* Desktop links */}
                        <div className="hidden md:flex gap-2 mt-4">
                            {project.link.hasSite && (
                                <button onClick={() => window.open(project.link.source, '_blank')} className="hover:bg-gray-700 transition-all text-background duration-200 flex gap-1 text-xs items-center font-family-poppins bg-gray-600 px-2 py-1 rounded-sm" >
                                    <Globe size={12} />
                                    Website
                                </button>
                            )}

                            {project.link.hasSource && (
                                <button onClick={() => window.open(project.link.source, '_blank')} className="hover:bg-gray-700 transition-all text-background duration-200 flex gap-1 text-xs items-center font-family-poppins bg-gray-600 px-2 py-1 rounded-sm" >
                                    <FaGithub size={12} />
                                    Source
                                </button>
                            )}
                        </div>

                        {/* Description */}
                        <p className="md:mt-6 mt-3 text-xs md:text-sm text-gray-400 font-family-ronzino">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 md:mt-5 mt-3">
                            {project.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="
                                        md:px-3 px-2 md:py-1
                                        text-[9px] md:text-[11px]
                                        rounded-full
                                        bg-white/10
                                        backdrop-blur-md
                                        border border-white/20
                                        text-white
                                        hover:bg-white/20
                                        transition
                                    "
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Mini Slider */}
                        <div className="flex gap-2 mt-5 overflow-x-auto pb-2">
                            {project.cover.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`
                                        md:min-w-[60px] md:h-[48px] h-[35px] min-w-[40px]
                                        rounded
                                        border-2
                                        transition
                                        ${idx === activeIndex
                                            ? 'border-accent'
                                            : 'border-gray-400'
                                        }
                                    `}
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                            ))}
                        </div>

                        {/* Color Palette */}
                        <div className="mt-auto flex">
                            {project.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className="w-12 md:h-24 h-5"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
