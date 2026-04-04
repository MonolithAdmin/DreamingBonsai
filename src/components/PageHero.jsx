import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PageHero({ title, subtitle, image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      <motion.div
        className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 max-w-7xl mx-auto"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-cinzel text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground text-glow leading-tight max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-outfit text-lg md:text-xl text-foreground/60 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}