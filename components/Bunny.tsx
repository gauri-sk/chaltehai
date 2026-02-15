
import React from 'react';

interface BunnyProps {
  happy?: boolean;
}

export const Bunny: React.FC<BunnyProps> = ({ happy = false }) => {
  return (
    <div className={`relative w-48 h-48 mx-auto floating ${happy ? 'scale-110' : ''} transition-transform duration-500`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Ears */}
        <ellipse cx="75" cy="40" rx="15" ry="45" fill="#FFFFFF" stroke="#F472B6" strokeWidth="4" transform="rotate(-10 75 40)" />
        <ellipse cx="75" cy="40" rx="8" ry="30" fill="#FCE7F3" transform="rotate(-10 75 40)" />
        
        <ellipse cx="125" cy="40" rx="15" ry="45" fill="#FFFFFF" stroke="#F472B6" strokeWidth="4" transform="rotate(10 125 40)" />
        <ellipse cx="125" cy="40" rx="8" ry="30" fill="#FCE7F3" transform="rotate(10 125 40)" />

        {/* Head */}
        <circle cx="100" cy="110" r="60" fill="#FFFFFF" stroke="#F472B6" strokeWidth="4" />
        
        {/* Eyes */}
        {happy ? (
          <>
            <path d="M75 105 Q 85 95 95 105" fill="none" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" />
            <path d="M105 105 Q 115 95 125 105" fill="none" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" />
          </>
        ) : (
          <>
            <circle cx="80" cy="105" r="5" fill="#F472B6" />
            <circle cx="120" cy="105" r="5" fill="#F472B6" />
          </>
        )}

        {/* Cheeks */}
        <circle cx="70" cy="125" r="8" fill="#FCE7F3" opacity="0.8" />
        <circle cx="130" cy="125" r="8" fill="#FCE7F3" opacity="0.8" />

        {/* Nose and Mouth */}
        <path d="M95 120 L100 125 L105 120" fill="none" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 125 L100 135 Q 100 145 90 145" fill="none" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 135 Q 100 145 110 145" fill="none" stroke="#F472B6" strokeWidth="3" strokeLinecap="round" />
        
        {/* Heart icon if happy */}
        {happy && (
          <path d="M170 60 Q 170 50 160 50 Q 150 50 150 60 Q 150 70 170 85 Q 190 70 190 60 Q 190 50 180 50 Q 170 50 170 60" 
                fill="#F472B6" className="animate-pulse" />
        )}
      </svg>
    </div>
  );
};
