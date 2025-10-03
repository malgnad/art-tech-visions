interface TwinklingStar {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  shape: 'circle' | 'diamond' | 'star' | 'cross';
}

interface TwinklingStarsProps {
  count?: number;
  className?: string;
}

const TwinklingStars = ({ count = 30, className = '' }: TwinklingStarsProps) => {
  const stars: TwinklingStar[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    shape: ['circle', 'diamond', 'star', 'cross'][Math.floor(Math.random() * 4)] as TwinklingStar['shape']
  }));

  const getShapeClass = (shape: string) => {
    switch (shape) {
      case 'diamond':
        return 'rotate-45';
      case 'star':
        return 'star-shape';
      case 'cross':
        return 'cross-shape';
      default:
        return 'rounded-full';
    }
  };

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute bg-white/60 animate-twinkle hover:bg-white/100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.9)] transition-all duration-300 pointer-events-auto ${getShapeClass(star.shape)}`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default TwinklingStars;
