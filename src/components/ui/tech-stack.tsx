'use client'
import React from 'react';
import { siFirebase, siLaravel, siJavascript, siReact, siPhp, siPython, siTypescript, siMongodb, siMysql, siGithub, siGit, siFlask, siPostman, siNextdotjs, siFigma, siCanvas, siWordpress, siElementor, siCloudinary, siGooglesheets, siGoogledocs } from 'simple-icons';
import TechIcon from './Tech-icon';

const TechStack = () => {
    const size = 40;
    const color = '#1F1F1F'
    return (
        <div className=' md:ml-16 ml-2 mr-32 flex flex-col gap-8 md:mt-3 mt-5'>
            <div className='flex justify-between'>
                <TechIcon icon={siJavascript} name='Javascript' size={size} color={color} />
                <TechIcon icon={siTypescript} name='Typescript' size={size} color={color} />
                <TechIcon icon={siReact} name='React' size={size} color={color} />
                <TechIcon icon={siPhp} name='Php' size={size} color={color} />
                <TechIcon icon={siLaravel} name='Laravel' size={size} color={color} />
            </div>

            <div className='flex justify-between'>
                <TechIcon icon={siGithub} name='Github' size={size} color={color} />
                <TechIcon icon={siGit} name='Git' size={size} color={color} />
                <TechIcon icon={siPython} name='Python' size={size} color={color} />
                <TechIcon icon={siFirebase} name='Firebase' size={size} color={color} />
                <TechIcon icon={siMysql} name='MySQL' size={size} color={color} />
            </div>

            <div className='flex justify-between'>
                <TechIcon icon={siMongodb} name='MongoDB' size={size} color={color} />
                <TechIcon icon={siFlask} name='Flask' size={size} color={color} />
                <TechIcon icon={siPostman} name='Postman' size={size} color={color} />
                <TechIcon icon={siNextdotjs} name='NextJS' size={size} color={color} />
                <TechIcon icon={siFigma} name='Figma' size={size} color={color} />
            </div>

            <div className='flex justify-between'>
                <TechIcon icon={siWordpress} name='Wordpress' size={size} color={color} />
                <TechIcon icon={siElementor} name='Elementor' size={size} color={color} />
                <TechIcon icon={siCloudinary} name='Cloudinary' size={size} color={color} />
                <TechIcon icon={siGooglesheets} name='Google Sheets' size={size} color={color} />
                <TechIcon icon={siGoogledocs} name='Google Docs' size={size} color={color} />
            </div>

        </div>
    );
}

export default TechStack;
