
import React from 'react';

interface PenguinProps {
  happy?: boolean;
}

export const Penguin: React.FC<PenguinProps> = ({ happy = false }) => {
  return (
    <div className={`relative w-64 h-64 mx-auto floating ${happy ? 'scale-110' : ''} transition-transform duration-500 flex items-center justify-center`}>
      <svg viewBox="0 0 240 240" className="w-full h-full drop-shadow-xl">
        <defs>
          <radialGradient id="bodyGradient" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#F472B6" />
          </radialGradient>
          <radialGradient id="bellyGradient" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF1F2" />
          </radialGradient>
        </defs>

        {/* Feet */}
        <ellipse cx="90" cy="210" rx="25" ry="12" fill="#FDA4AF" />
        <ellipse cx="150" cy="210" rx="25" ry="12" fill="#FDA4AF" />

        {/* Body */}
        <ellipse cx="120" cy="110" rx="85" ry="100" fill="url(#bodyGradient)" />
        
        {/* Belly/Face White Part */}
        <ellipse cx="120" cy="120" rx="70" ry="85" fill="url(#bellyGradient)" />
        <path d="M60 90 Q 120 40 180 90 L 180 160 Q 120 200 60 160 Z" fill="url(#bellyGradient)" />

        {/* Wings */}
        <path d="M45 100 Q 10 120 40 170" stroke="#F472B6" strokeWidth="25" strokeLinecap="round" fill="none" />
        <path d="M195 100 Q 230 120 200 170" stroke="#F472B6" strokeWidth="25" strokeLinecap="round" fill="none" />

        {/* Eyes */}
        <g transform={happy ? "translate(0, -2)" : ""}>
          <circle cx="85" cy="100" r="14" fill="#334155" />
          <circle cx="155" cy="100" r="14" fill="#334155" />
          <circle cx="80" cy="94" r="5" fill="white" />
          <circle cx="150" cy="94" r="5" fill="white" />
        </g>

        {/* Cheeks */}
        <circle cx="75" cy="125" r="10" fill="#FDA4AF" opacity="0.6" />
        <circle cx="165" cy="125" r="10" fill="#FDA4AF" opacity="0.6" />

        {/* Beak */}
        {happy ? (
          <path d="M105 125 Q 120 155 135 125 Z" fill="#FDA4AF" stroke="#E11D48" strokeWidth="1" />
        ) : (
          <path d="M105 130 Q 120 115 135 130 Q 120 145 105 130" fill="#FDA4AF" />
        )}
        
        {/* Heart icon if happy */}
        {happy && (
          <path d="M190 50 Q 190 40 180 40 Q 170 40 170 50 Q 170 60 190 75 Q 210 60 210 50 Q 210 40 200 40 Q 190 40 190 50" 
                fill="#F472B6" className="animate-pulse">
            <animateTransform attributeName="transform" type="scale" values="1;1.2;1" dur="1s" repeatCount="indefinite" />
          </path>
        )}
      </svg>
    </div>
  );
};
