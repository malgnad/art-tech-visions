import { useEffect, useRef, useState } from 'react';

interface InteractivePlanetProps {
  size?: number;
  color?: string;
  className?: string;
  hasRing?: boolean;
}

const InteractivePlanet = ({ 
  size = 200, 
  color = 'from-pink-500 to-purple-600',
  className = '',
  hasRing = true
}: InteractivePlanetProps) => {
  const planetRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [rotationSpeed, setRotationSpeed] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - dragStart.x;
        const speed = deltaX * 0.5;
        setRotationSpeed(speed);
        setRotation(prev => prev + speed);
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  useEffect(() => {
    if (!isDragging && rotationSpeed !== 0) {
      const decay = setInterval(() => {
        setRotationSpeed(prev => {
          const newSpeed = prev * 0.95;
          if (Math.abs(newSpeed) < 0.1) {
            clearInterval(decay);
            return 0;
          }
          setRotation(r => r + newSpeed);
          return newSpeed;
        });
      }, 16);
      return () => clearInterval(decay);
    }
  }, [isDragging, rotationSpeed]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
    setRotationSpeed(0);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={planetRef}
        className={`rounded-full bg-gradient-to-br ${color} cursor-grab active:cursor-grabbing shadow-2xl transition-all duration-300`}
        style={{
          width: size,
          height: size,
          transform: `rotate(${rotation}deg)`,
          boxShadow: `0 0 ${size * 0.4}px ${size * 0.1}px rgba(236, 72, 153, 0.3), inset -${size * 0.1}px -${size * 0.1}px ${size * 0.2}px rgba(0, 0, 0, 0.5)`,
        }}
        onMouseDown={handleMouseDown}
      >
        {/* Surface details */}
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-black/20" />
          <div className="absolute top-1/2 right-1/4 w-1/4 h-1/4 rounded-full bg-white/10" />
          <div className="absolute bottom-1/3 left-1/2 w-1/5 h-1/5 rounded-full bg-black/15" />
        </div>
      </div>
      
      {hasRing && (
        <div
          className="absolute top-1/2 left-1/2 border-4 border-pink-400/40 rounded-full pointer-events-none"
          style={{
            width: size * 1.6,
            height: size * 0.3,
            transform: `translate(-50%, -50%) rotateX(75deg) rotate(${rotation * 0.3}deg)`,
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.3)',
          }}
        />
      )}
    </div>
  );
};

export default InteractivePlanet;
