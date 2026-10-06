import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

export function MacbookScrollDemo() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <div 
        className="scale-90 origin-top" 
        style={{ 
          transform: 'scale(0.9)',
          transformOrigin: 'top center',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <MacbookScroll
          title={
            <span>
              Experience Seamless Looping Videos <br /> On This Macbook Display
            </span>
          }
          src={`/videos/leadseeder.mp4`}
          showGradient={false}
        />
      </div>
    </div>
  );
}