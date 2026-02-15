
import React, { useState, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Penguin } from './components/Penguin';

const App: React.FC = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: '50%', left: '50%' });
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate more static decoration positions
  const decorations = useRef([
    { top: '10%', left: '5%', icon: '🌸', size: '1rem' },
    { top: '15%', left: '20%', icon: '✨', size: '0.8rem' },
    { top: '8%', left: '80%', icon: '💖', size: '1.2rem' },
    { top: '30%', left: '90%', icon: '❄️', size: '0.9rem' },
    { top: '70%', left: '5%', icon: '💕', size: '1.1rem' },
    { top: '85%', left: '15%', icon: '🌸', size: '0.7rem' },
    { top: '90%', left: '75%', icon: '✨', size: '1rem' },
    { top: '60%', left: '85%', icon: '💖', size: '0.8rem' },
    { top: '40%', left: '10%', icon: '🌸', size: '0.9rem' },
    { top: '50%', left: '95%', icon: '❄️', size: '1.1rem' },
    { top: '25%', left: '40%', icon: '💕', size: '0.8rem' },
    { top: '75%', left: '60%', icon: '✨', size: '1.2rem' },
    { top: '5%', left: '50%', icon: '💖', size: '0.9rem' },
    { top: '95%', left: '40%', icon: '🌸', size: '1rem' },
    { top: '20%', left: '70%', icon: '❄️', size: '0.7rem' },
    { top: '80%', left: '92%', icon: '💕', size: '0.8rem' },
    { top: '12%', left: '92%', icon: '🌸', size: '1rem' },
    { top: '88%', left: '2%', icon: '✨', size: '0.9rem' },
    { top: '45%', left: '2%', icon: '💖', size: '0.8rem' },
    { top: '55%', left: '98%', icon: '💕', size: '1.1rem' },
  ]).current;

  const moveNoButton = useCallback(() => {
    if (hasAccepted) return;

    const randomTop = Math.floor(Math.random() * 70) + 15;
    const randomLeft = Math.floor(Math.random() * 70) + 15;

    setNoButtonPos({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
    
    if (!isMoved) {
      setIsMoved(true);
    }
  }, [hasAccepted, isMoved]);

  const handleYesClick = () => {
    setHasAccepted(true);
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#F472B6', '#FB7185', '#FFFFFF']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#F472B6', '#FB7185', '#FFFFFF']
      });
    }, 250);
  };

  const handleReset = () => {
    setHasAccepted(false);
    setIsMoved(false);
    setNoButtonPos({ top: '50%', left: '50%' });
  };

  const noButtonClasses = "bg-white border-2 border-pink-100 text-pink-300 font-bold py-3 px-10 rounded-full shadow-md transition-all duration-200 ease-out whitespace-nowrap active:outline-none focus:outline-none hover:shadow-lg";

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-screen flex flex-col items-center justify-center bg-white overflow-hidden"
    >
      {/* Background soft pink blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-50 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-50 rounded-full blur-[100px] opacity-60"></div>

      {/* Static Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {decorations.map((dec, i) => (
          <div 
            key={i} 
            className="absolute opacity-30 select-none" 
            style={{ top: dec.top, left: dec.left, fontSize: dec.size }}
          >
            {dec.icon}
          </div>
        ))}
      </div>

      <div className="z-10 text-center px-4 w-full">
        {!hasAccepted ? (
          <div className="flex flex-col items-center">
            <Penguin />
            <h1 className="text-4xl md:text-6xl font-black text-pink-500 mb-12 drop-shadow-sm mt-8 tracking-tight">
              Hi Dvnsh, Ghumne chale?
            </h1>
            
            <div className="flex flex-row items-center justify-center gap-8 mt-4 relative">
              {/* Yes Button */}
              <button
                onClick={handleYesClick}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-14 rounded-full shadow-xl transform transition active:scale-90 hover:scale-110 text-2xl z-20"
              >
                Yes! 🐧✨
              </button>

              {/* Initial "No" Button (Static placement) */}
              {!isMoved && (
                <button
                  onMouseEnter={moveNoButton}
                  onClick={(e) => {
                    e.preventDefault();
                    moveNoButton();
                  }}
                  className={noButtonClasses}
                >
                  No 😢
                </button>
              )}
            </div>

            {/* Evasive "No" Button (Appears after first hover) */}
            {isMoved && (
              <button
                onMouseEnter={moveNoButton}
                onClick={(e) => {
                  e.preventDefault();
                  moveNoButton();
                }}
                className={`fixed pointer-events-auto ${noButtonClasses}`}
                style={{
                  top: noButtonPos.top,
                  left: noButtonPos.left,
                  transform: 'translate(-50%, -50%)',
                  zIndex: 50
                }}
              >
                No 😢
              </button>
            )}
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-1000 flex flex-col items-center">
            <Penguin happy={true} />
            <h1 className="text-7xl md:text-8xl font-black text-pink-500 mb-6 animate-bounce mt-8 tracking-tighter">
              Yayyyyyy! 💖
            </h1>
            <p className="text-3xl text-pink-400 font-bold italic bg-white/50 px-8 py-2 rounded-full backdrop-blur-sm">
              Toh fir Plan bana! 🌸
            </p>
            <button 
              onClick={handleReset}
              className="mt-16 text-pink-300 hover:text-pink-500 underline text-sm transition-colors font-medium cursor-pointer"
            >
              Ask again?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
