"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  // const {ref, inView} = useInView({
  //   threshold: 0.75,
  // });  // inView tell us the current state
  // const { setactiveSection, timeOfLastClick } = useActiveSectionContext();

  // useEffect(() => {
  //   if(inView && Date.now() - timeOfLastClick > 1000) {  // after clicking about the icon will directly go to about instead of hovering over other icons.
  //     setactiveSection("About");
  //   }
  // }, [inView, setactiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {" "}
        <span className="font-medium">
          I&apos;m a driven Information Technology major at Kalinga Institute of
          Industrial Technology, with a strong grasp of data structures and
          algorithms. My passion for software development lies in tackling
          real-world challenges and finding solutions that make a difference. My
          core stack includes React, Next.js, Node.js, and MongoDB, complemented
          by my familiarity with TypeScript and Prisma.
        </span>
      </p>

      <p>
        <span>
          I&apos;m a lifelong learner, always eager to explore new technologies.
          I&apos;m currently seeking an opportunity to apply my skills and make
          meaningful contributions within a full-time software developer
          position.
        </span>
      </p>
    </motion.section>
  );
}
