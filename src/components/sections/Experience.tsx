import BasicTimeline from '../ui/timeline';
import Education from './Education';
import TechStack from '../ui/tech-stack';

const Experience = () => {

    const experiences = [
        {
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
            reference_email: "jaysontadayca@gmail.com",
            address: "Malaybalay City, Bukidnon"
        },
        {
            role: "Web Developer / Graphic Designer / Video Editor (Internship)",
            company: "Logicbase Interactive Ent.",
            date: "Jan 2025 - May 2025",
            link: "https://www.logicbaseinteractive.com/",
            haveDone: [
                "Improved website layouts, interactions, and performance through component integration and team collaboration.",
                "Designed web and social visuals, crafting intuitive interfaces and contributing to UI/UX wireframes and prototypes",
            ],
            reference: "Mary Jane E. Nazareno",
            reference_role: "HR Assistant",
            reference_email: "m_nazareno@logicbaseinteractive.com",
            address: "Cagayan De Oro City, Misamis Oriental"

        },
        {
            role: "Founder / Creative / Marketing Lead",
            company: "Krémora Dessert Shop.",
            date: "Sep 2025 - Dec 2025",
            link: "https://web.facebook.com/profile.php?id=61580300668242",
            haveDone: [
                "Crafted visual graphics and branding assets to strengthen brand identity.",
                "Managed social media content, campaigns, and audience engagement.",
                "Created and executed advertisements to increase brand visibility and drive sales."
            ],
            address: "Malaybalay City, Bukidnon"


        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-15 px-4 md:px-14 bg-accent-foreground min-h-screen md:h-screen gap-8 md:gap-17'>
            <div className='col-span-1 pt-6 md:pt-10 pb-14 md:pb-28 flex flex-col gap-5 md:gap-7'>
                <div className='text-4xl md:text-7xl font-family-ronzino tracking-tighter text-background font-medium'>Experience</div>
                <BasicTimeline experiences={experiences} />
            </div>

            <div className='col-span-1 pt-6 md:pt-10 pb-14 md:pb-28 flex flex-col gap-5 md:gap-7'>
                <div className='text-4xl md:text-7xl font-family-ronzino tracking-tighter text-background font-medium'>Education</div>
                <Education />
                <div className='text-2xl md:text-4xl font-family-ronzino tracking-tighter text-background font-medium -mb-5'>Tech Stack</div>
                <TechStack />
            </div>
        </div>

    );
}

export default Experience;
