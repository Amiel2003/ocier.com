'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

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
    }
    date: string;
    type: string;
    description: string;
};

export default function ProjectCard({ project }: { project: Project }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="sticky-card sticky top-[65px] flex items-center justify-center pb-40">
            <div className="relative w-screen h-screen overflow-hidden">
                <div className="grid grid-cols-15 bg-accent-foreground p-3 gap-3">

                    {/* Background Image Section */}
                    <div className="w-full col-span-10 min-h-[calc(100vh-90px)] mb-30">
                        <div
                            className="w-full h-full bg-center bg-cover bg-no-repeat rounded-2xl transition-all duration-200"
                            style={{ backgroundImage: `url(${project.cover[activeIndex]})` }}
                        />

                    </div>

                    {/* Info Section */}
                    <div className="col-span-5 flex flex-col border border-background rounded-2xl mb-30 px-12 pt-15 pb-10">
                        <div className="flex flex-col items-start justify-start">
                            <div className="flex flex-row  w-full">


                                <p className="ml-auto text-background font-family-jetbrains">
                                    {project.date}
                                </p>

                            </div>

                            {typeof project.logo === 'string' ? (
                                <img
                                    src={project.logo}
                                    alt={`${project.title} Logo`}
                                    className="w-34 h-8 md:w-69 md:h-19"
                                />
                            ) : (
                                <project.logo className={`w-34 h-8 md:w-69 md:h-19 ${project.title == 'Dormy' && 'md:-ml-4'}`} />
                            )}
                        </div>

                        <div className='text-background flex flex-row gap-2'>
                            {project.link.hasSite &&
                                <button
                                    onClick={() => window.open(project.link.link, '_blank')}
                                    className="hover:bg-gray-700 transition-all duration-200 flex gap-1 text-xs items-center font-family-poppins bg-gray-600 px-2 py-1 rounded-sm cursor-pointer"
                                >
                                    <Globe size={12} />
                                    Website
                                </button>
                            }

                            {project.link.hasSource && <button
                                onClick={() => window.open(project.link.source, '_blank')}
                                className="hover:bg-gray-700 transition-all duration-200 flex gap-1 text-xs items-center font-family-poppins bg-gray-600 px-2 py-1 rounded-sm"
                            >
                                <FaGithub size={12} />
                                Source
                            </button>}


                        </div>

                        <p className="relative z-10 text-md font-family-ronzino pt-6 text-gray-400">
                            {project.description}
                        </p>

                        {/* Mini Slider */}
                        <div className="flex mt-5 gap-2">
                            {project.cover.map((img, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`w-15 h-12 rounded cursor-pointer border-2 ${idx === activeIndex ? 'border-accent' : 'border-gray-400'
                                        }`}
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                />
                            ))}
                        </div>

                        <div className="mt-auto flex items-center justify-start text-background">
                            {project.colors.map((color, index) => (
                                <div
                                    key={index}
                                    className="w-12 h-24"
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
