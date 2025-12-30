'use client';
import React from 'react';
import Education from './Education';
import Experience from './Experience';
import { motion } from 'framer-motion';

const BackgroundSection = () => {
    return (
        <div className="bg-background pb-14 text-accent-foreground md:py-0 md:px-0">
            <Experience />
            <motion.div
                initial={{ opacity: 0, y: 50 }} // start invisible and slightly below
                whileInView={{ opacity: 1, y: 0 }} // animate into view
                viewport={{ once: false, amount: 0.3 }} // trigger when 30% visible
                transition={{ duration: 0.4, ease: "easeOut" }} // animation settings
            >

                <Education />
            </motion.div>
        </div>
    );
}

export default BackgroundSection;
