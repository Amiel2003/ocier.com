import React from 'react';
import { ArrowDownRight } from 'lucide-react';
import Image from "next/image";

const educationData = [
    {
        id: 1,
        icon: "/icons/star2.png",
        date: "2021 - 2025",
        school: "Bukidnon State University",
        program: "Bachelor of Science in Information Technology",
        description:
            "Graduated Cum Laude, specializing in web and system development, with hands-on experience building full-stack applications and academic projects.",
    },
    {
        id: 2,
        icon: "/icons/shape2.png",
        date: "2015 - 2021",
        school: "Bukidnon National High School",
        program: "Humanities and Social Sciences / SPA",
        description:
            "Earned academic honors while building a strong foundation in humanities, communication, and creative disciplines through the Special Program in the Arts.",
    },
];


const Education = () => {
    return (
        <div className="w-full min-h-[250px] flex md:flex-row flex-col items-stretch md:pl-18 pr-12 py-10 border-accent-foreground md:mt-7">
            <div className=" place-content-start w-[40%] flex justify-between pr-4 md:pl-0 pl-7">
                {/* Left spacer / title */}
                <h1 className='text-6xl font-bold tracking-tight'>education</h1>
                <div className='items-end justify-end opacity-99 md:block hidden'>
                    <ArrowDownRight size={55} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch w-full">
                {educationData.map((edu) => (
                    <div
                        key={edu.id}
                        className="md:border-l-2 border-accent-foreground h-full pl-8 pr-7 py-4 pb-4"
                    >
                        <div className="flex items-start gap-4 pb-5 border-gray-400">
                            <Image
                                src={edu.icon}
                                alt="Icon"
                                width={65}
                                height={50}
                                className="opacity-90"
                                priority
                            />

                            <div className="flex flex-col md:leading-9 leading-6">
                                <p className="md:text-sm text-xs leading-4 font-family-ronzino font-light tracking-tight">
                                    {edu.date}
                                </p>
                                <h3 className="md:text-[26px] text-[20px] font-family-ronzino font-semibold tracking-tighter">
                                    {edu.school}
                                </h3>
                                <p className="md:text-[14px] text-[12px] leading-4 font-family-ronzino font-light tracking-tight">
                                    {edu.program}
                                </p>
                            </div>
                        </div>

                        <div className="py-5 px-7 font-family-poppins bg-accent-foreground rounded-lg">
                            <p className="md:text-[13px] text-[10px] tracking-tighter text-background indent-8">
                                {edu.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Education;
