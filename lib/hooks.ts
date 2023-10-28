import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { SectionName } from "./types";

type useSectionInViewProps = {
    sectionName: SectionName;
}

export function useSectionInView (sectionName : SectionName, threshold = 0.75) { // by writting this we don't have to mention the type seperatly
    const {ref, inView} = useInView({
        threshold,
      });  // inView tell us the current state
      const { setactiveSection , timeOfLastClick} = useActiveSectionContext();
    
      useEffect(() => {
      if(inView  && Date.now() - timeOfLastClick > 1000) {
        setactiveSection(sectionName);
      }
    }, [inView, setactiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}

