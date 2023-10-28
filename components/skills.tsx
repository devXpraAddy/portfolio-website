"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";

// const fadeInAnimationVariables = {
//     initial: {
//         opacity: 0,
//         y:100
//     },
//     animate: {
//          opacity: 1, 
//          y:0,
//          transition:{ 
//             delay:0.05
//          }
//    },
// };

const fadeInAnimationVariables = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({  // can also be written without using return keyword
         opacity: 1, 
         y: 0,
         transition: { 
            delay: 0.05 * index,
         },
   }),
};

// const fadeInAnimationVariables = {
//     initial: {
//         opacity: 0,
//         y:100
//     },
//     animate: () => {
//         return {
//          opacity: 1, 
//          y:0,
//          transition:{ 
//             delay:0.05
//          }
//      };
//    },
// };


export default function Skills() {
    const { ref } = useSectionInView("Skills");

  return (
    <section id = "skills" 
    ref={ref} 
    className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {
                skillsData.map((skill, index) => (
                    <motion.li className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80" 
                    key={index}
                    variants={fadeInAnimationVariables}
                    initial = "initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                    custom = {index}
                    > {skill} 
                 </motion.li>
                ))
            }
        </ul>
    </section>
  );
}


