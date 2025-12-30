import React from 'react';
import { ArrowDownLeft, ArrowDown, LucideGlobe, Mail } from 'lucide-react';
import Link from 'next/link';
import TechStack from '../ui/tech-stack';

const Experience = () => {

    const experiences = [
        {
            index: "01",
            role: "Full-Stack Developer / System Support (Freelance)",
            company: "MATIGDA - Bukidnon State University",
            date: "June 2025 - Present",
            link: "https://matigda.com/",
            haveDone: [
                "Developed and deployed a yearbook management system for profiles, payments, scheduling, and inventory.",
                "Built a robust backend with Laravel, PHP, and PostgreSQL, paired with a modern React/Next.js + TailwindCSS frontend.",
                "Managed user support, technical incidents, and system maintenance.",
            ],
            reference: "Jayson L. Tadayca",
            reference_role: "Lead Developer",
            reference_email: "jaysontadayca@gmail.com"
        },
        {
            role: "Web Developer / Graphic Designer / Video Editor (Internship)",
            company: "Logicbase Interactive Ent.",
            date: "January 2025 - May 2025",
            link: "https://www.logicbaseinteractive.com/",
            haveDone: [
                "Improved website layouts, interactions, and performance through component integration and team collaboration.",
                "Designed web and social visuals, crafting intuitive interfaces and contributing to UI/UX wireframes and prototypes",
            ],
            reference: "Mary Jane E. Nazareno",
            reference_role: "HR Assistant",
            reference_email: "m_nazareno@logicbaseinteractive.com"
        },
        {
            role: "Founder / Creative / Marketing Lead",
            company: "Krémora Dessert Shop.",
            date: "September 2025 - December 2025",
            link: "https://web.facebook.com/profile.php?id=61580300668242",
            haveDone: [
                "Crafted visual graphics and branding assets to strengthen brand identity.",
                "Managed social media content, campaigns, and audience engagement.",
                "Created and executed advertisements to increase brand visibility and drive sales."
            ],

        }
    ]
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-5
                md:min-h-[500px]
                 pl-6 md:pl-0 pr-0">

            {/* TITLE */}
            <div className="relative col-span-1 md:col-span-2 pr-4 md:pr-0 order-1 md:order-2">
                <div className="bg-accent-foreground text-background
                    text-4xl md:text-[90px] md:leading-14
                    font-family-ronzino
                    px-4 py-3 md:px-10 md:pb-8
                    tracking-tighter font-medium
                    rounded-t-[20px] md:rounded-t-none md:rounded-tr-0 md:rounded-br-0
                    w-3/4 md:w-full">
                    {/* <span className="font-family-archivo-black">work</span> */}
                    <ArrowDownLeft size={26} className='md:block hidden' />
                    experience
                </div>

                {/* Curve helper — desktop only */}
                <div className="relative bg-background hidden md:block">
                    <div className="w-full h-25 bg-accent-foreground relative overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-full h-full bg-background rounded-tl-full">
                            <div className=' h-full w-full flex justify-end rounded-tl-full pr-32 pt-9'>
                                <ArrowDown size={50} />
                                <h1 className='text-5xl font-family-ronzino tracking-tighter font-medium'>Tech Stack</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md:block hidden'>
                    <TechStack />
                </div>
            </div>

            {/* CONTENT */}
            <div className="col-span-1 md:col-span-3
                  bg-accent-foreground text-background
                   md:rounded-br-[80px] rounded-br-lg md:rounded-bl-0 rounded-bl-lg md:rounded-tl-0 rounded-tr-lg md:rounded-tr-none
                  order-2 md:order-1 w-full md:px-28 px-7 md:pt-0 pt-5 flex flex-col gap-2 h-fit md:pb-14 pb-7">
                {experiences.map((experience, index) => (
                    <div className={`${index != experiences.length - 1 ? "border-b" : ""} pt-4 pb-5`} key={index}>
                        <div className='flex gap-5'>
                            <div className='text-md md:text-9xl font-family-jetbrains tracking-tighter'>0{index + 1}</div>
                            <div className='flex flex-col leading-6  w-full'>
                                <div className='text-[10px] bg-background font-semibold text-accent-foreground w-fit px-2 tracking-tight text-center rounded-lg mb-2'>
                                    <span className=''>{experience.date}</span>
                                    {/* <a href=""><ArrowRightToLineIcon /></a> */}
                                </div>
                                <span className='font-semibold font-family-ronzino text-[21px]'>{experience.role}</span>
                                <span className='text-md font-medium tracking-tight'>{experience.company}</span>

                                <div className=" flex flex-col md:flex-row md:justify-between md:items-end">
                                    {/* {experience.link &&
                                        <div className="flex flex-row items-center gap-2">
                                            <LucideGlobe size={16} />
                                            <div className="text-[10px] italic text-gray-400">
                                                {experience.link}
                                            </div>
                                        </div>
                                    } */}
                                    {/* {experience.reference_email && (
                                        <div className="flex flex-row items-center gap-2">
                                            <Mail size={16} />
                                            <div className="text-[10px] italic text-gray-400">
                                                {experience.reference_email}
                                            </div>
                                        </div>
                                    )} */}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='order-3 md:hidden block mt-10'>
                <div className=' flex'>
                    <ArrowDown size={40} />
                    <h1 className='text-3xl font-family-ronzino tracking-tighter font-medium'>Tech Stack</h1>
                </div>
                <TechStack />
            </div>

        </div>

    );
}

export default Experience;
