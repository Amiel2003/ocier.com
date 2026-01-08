'use client';
import React from 'react';
import Education from './Education';
import Experience from './Experience';
import { motion } from 'framer-motion';

const BackgroundSection = () => {
    return (
        <div className="bg-background pb-14 text-accent-foreground md:py-0 md:px-0">
            <Experience />
        </div>
    );
}

export default BackgroundSection;
