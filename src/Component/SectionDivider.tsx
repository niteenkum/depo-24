import React from 'react'

interface SectionDividerProps {
  myRef?: any,
  title: string
}

export default function SectionDivider( {myRef, title}: SectionDividerProps) {
  return (
    <div
    className={
      "flex items-center justify-between mt-12 mb-4 text-slate-700" 
    }
    ref={myRef} 
    id="furn"    
  >
    <div className="text-lg font-bold capitalize mr-4">
    {title}
    </div>
    <div className=" h-1 w-[80%] bg-orange-700"></div>
  </div>
  )
}
