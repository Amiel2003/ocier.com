'use client';

import { useRef, useState } from 'react';
import './TiltedCard.css';
import Silk from "@/components/ui/Silk";
import { motion, AnimatePresence } from 'framer-motion';

export default function TiltCard({ description, title, index }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const contentRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const content = contentRef.current;

    if (!card || !glow || !content) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = -((y - centerY) / centerY);

    card.style.transform = `
      perspective(1000px)
      rotateY(${percentX * 10}deg)
      rotateX(${percentY * 10}deg)
    `;

    content.style.transform = 'translateZ(50px)';
    glow.style.opacity = '1';
    glow.style.backgroundImage = `
      radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0.27),
        rgba(0,0,0,0.06)
      )
    `;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current || !glowRef.current || !contentRef.current) return;

    cardRef.current.style.transform =
      'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    contentRef.current.style.transform = 'translateZ(0px)';
    glowRef.current.style.opacity = '0';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="tilt-card h-135 rounded-2xl shadow-xl shadow-gray-800 relative cursor-pointer transition-all duration-300 ease-out hover:scale-105 w-full px-15 py-10 flex flex-col justify-end border border-gray-700"
      style={{
        backgroundImage: `
      linear-gradient(to bottom right, rgba(0,0,0,0.4), rgba(255,255,255,0.1)),
      url('/images/services.webp')
    `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Silk background */}
      <div className="absolute inset-0 opacity-15 rounded-lg">
        <Silk
          speed={10}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
          style={{ width: '100%', height: '100%' }}
        />
      </div>


      {/* Glow */}
      <div
        ref={glowRef}
        className="glow absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className='absolute top-6 right-6 z-20'
        >
          <h1 className="text-7xl font-semibold font-family-jetbrains tracking-tighter">{index}</h1>

        </motion.div>
      </AnimatePresence>


      {/* Content at bottom */}
      <div
        ref={contentRef}
        className="tilt-card-content flex flex-col justify-end relative z-10 transition-transform duration-300 w-full"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="space-y-2 bg-accent-foreground px-6 pb-7 pt-5 rounded-lg w-full leading-5 shadow-accent-foreground shadow-2xl"
          >
            <p className="text-3xl font-family-ronzino font-medium tracking-tight ">
              {title}
            </p>
            <p className="text-gray-400 text-[13px] font-family-jetbrains">{description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>

  );
}
