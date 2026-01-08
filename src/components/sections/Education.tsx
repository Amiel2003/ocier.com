import React from "react";

const educationData = [
    {
        id: 1,
        icon: "/icons/star2.png",
        start_date: "2021",
        end_date: "2025",
        school: "Bukidnon State University",
        program: "Bachelor of Science in Information Technology",
        description:
            "Graduated Cum Laude, specializing in web and system development, with hands-on experience building full-stack applications and academic projects.",
        address: "Malaybalay City, Bukidnon",
    },
    {
        id: 2,
        icon: "/icons/shape2.png",
        start_date: "2015",
        end_date: "2021",
        school: "Bukidnon National High School",
        program: "Humanities and Social Sciences / SPA",
        description:
            "Earned academic honors while building a strong foundation in humanities, communication, and creative disciplines through the Special Program in the Arts.",
        address: "Malaybalay City, Bukidnon",
    },
];

const Education = () => {
    return (
        <div className="text-background flex flex-col gap-2">
            {educationData.map((educ, index) => (
                <div key={index} className="flex flex-col gap-0">
                    {/* Main Card */}
                    <div className="border border-background rounded-t-lg px-3 md:px-4 py-2">
                        <div className="grid grid-cols-5 gap-1 md:gap-1">
                            {/* Date Column */}
                            <div className="col-span-1 tracking-tight">
                                <div className="text-xs md:text-md font-family-jetbrains">{educ.start_date}-</div>
                                <h1 className="font-bold font-family-ronzino text-3xl md:text-5xl">{educ.end_date}</h1>
                            </div>

                            {/* Content Column */}
                            <div className="col-span-4 tracking-tight">
                                <h1 className="font-bold font-family-ronzino text-base md:text-xl">{educ.program}</h1>
                                <p className="text-sm md:text-md">{educ.school}</p>
                                <div className="tracking-tight text-xs md:text-sm font-family-ronzino text-gray-400 font-light">
                                    {educ.address}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Description Panel (Outside Main Card) */}
                    <div className="border border-background rounded-b-lg border-t-0 px-3 md:px-4 pt-2 pb-2 text-xs tracking-tight text-gray-300 font-family-jetbrains bg-white/10 backdrop-blur-md">
                        {educ.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;
