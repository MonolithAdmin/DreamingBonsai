import { useEffect, useState } from 'react';

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 8 + Math.random() * 12,
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setPetals(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
        >
          <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10" cy="10" rx="8" ry="5" transform="rotate(30 10 10)"
              fill="hsl(340, 60%, 65%)" opacity="0.8" />
          </svg>
        </div>
      ))}
    </div>
  );
}