import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SparkleTrail = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Add new sparkle
      const newSparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 4 + 2, // Random size between 2-6px
        color: `hsl(${Math.random() * 60 + 280}, 100%, 70%)`, // Random purple hue
      };
      
      setSparkles(prev => [...prev, newSparkle].slice(-20)); // Keep last 20 sparkles
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="sparkle-trail" style={{ pointerEvents: 'none' }}>
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ 
              opacity: 1,
              scale: 1,
              x: sparkle.x,
              y: sparkle.y
            }}
            animate={{ 
              opacity: 0,
              scale: 0,
              x: sparkle.x + (Math.random() - 0.5) * 20,
              y: sparkle.y + (Math.random() - 0.5) * 20
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              width: sparkle.size,
              height: sparkle.size,
              backgroundColor: sparkle.color,
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 9999,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default SparkleTrail; 