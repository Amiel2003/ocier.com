'use client';
import React from 'react';
import {
    siFirebase,
    siLaravel,
    siJavascript,
    siReact,
    siPhp,
    siPython,
    siTypescript,
    siMongodb,
    siMysql,
    siGithub,
    siGit,
    siFlask,
    siPostman,
    siNextdotjs,
    siFigma,
    siWordpress,
    siElementor,
    siCloudinary,
    siGooglesheets,
    siGoogledocs,
} from 'simple-icons';
import TechIcon from './Tech-icon';

const icons = [
    { icon: siJavascript, name: 'Javascript' },
    { icon: siTypescript, name: 'Typescript' },
    { icon: siReact, name: 'React' },
    { icon: siPhp, name: 'PHP' },
    { icon: siLaravel, name: 'Laravel' },
    { icon: siGithub, name: 'Github' },
    { icon: siGit, name: 'Git' },
    { icon: siPython, name: 'Python' },
    { icon: siFirebase, name: 'Firebase' },
    { icon: siMysql, name: 'MySQL' },
    { icon: siMongodb, name: 'MongoDB' },
    { icon: siFlask, name: 'Flask' },
    { icon: siPostman, name: 'Postman' },
    { icon: siNextdotjs, name: 'NextJS' },
    { icon: siFigma, name: 'Figma' },
    { icon: siWordpress, name: 'WordPress' },
    { icon: siElementor, name: 'Elementor' },
    { icon: siCloudinary, name: 'Cloudinary' },
    { icon: siGooglesheets, name: 'Google Sheets' },
    { icon: siGoogledocs, name: 'Google Docs' },
];

const TechStack = () => {
    const size = 35;
    const color = '#E0E1E2';

    return (
        <section className="relative overflow-hidden w-full py-10 rounded-lg border border-background">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

            <div className="animate-marquee gap-14">
                {[...icons, ...icons].map((item, index) => (
                    <TechIcon
                        key={index}
                        icon={item.icon}
                        name={item.name}
                        size={size}
                        color={color}
                    />
                ))}
            </div>
        </section>
    );
};

export default TechStack;
