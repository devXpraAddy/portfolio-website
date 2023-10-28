"use client";

import type { SectionName } from '@/lib/types';
import React, { useState, createContext, useContext } from 'react'

// this component will keep track of the state

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setactiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {

    const [activeSection, setactiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return <ActiveSectionContext.Provider value={{
    activeSection,
    setactiveSection,
    timeOfLastClick,
    setTimeOfLastClick
  }}
  >
    {children}
  </ActiveSectionContext.Provider>;
}
// Provider is from create context


//custom hook to take care of the null value
export function useActiveSectionContext() {   // it could have been made in the header
    const context = useContext(ActiveSectionContext);

    if(context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }
    return context;
}


