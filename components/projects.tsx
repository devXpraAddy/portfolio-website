"use client"

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

//   const {ref, inView} = useInView({
//     threshold: 0.5,
//   });  // inView tell us the current state
//   const { setactiveSection, timeOfLastClick } = useActiveSectionContext();

//   useEffect(() => {
//   if(inView  && Date.now() - timeOfLastClick > 1000) {
//     setactiveSection("Projects");
//   }
// }, [inView, setactiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id ="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

