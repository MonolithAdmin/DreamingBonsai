const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';
import AnimatedReveal from '../components/AnimatedReveal';
import ServiceCard from '../components/ServiceCard';
import SectionDivider from '../components/SectionDivider';

const HERO_IMG = "https://media.db.com/images/public/69d1685144b1fbb1e8ed4171/155504052_generated_ebd3153f.png";
const ABOUT_IMG = "https://media.db.com/images/public/69d1685144b1fbb1e8ed4171/9e30e091b_generated_fbe24245.png";
const DESIGN_IMG = "https://media.db.com/images/public/69d1685144b1fbb1e8ed4171/0751c9c27_generated_71ae379f.png";
const ILLUST_IMG = "https://media.db.com/images/public/69d1685144b1fbb1e8ed4171/4203c4c93_generated_d96e7430.png";
const GAMES_IMG = "https://media.db.com/images/public/69d1685144b1fbb1e8ed4171/fefe5e6cb_generated_83bc6f9f.png";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src={HERO_IMG} alt="Dreaming Bonsai hero" className="w-full h-full object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />

        <motion.div
          className="relative z-10 h-full flex flex-col justify-center px-6 max-w-7xl mx-auto"
          style={{ opacity: heroOpacity, y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles size={16} className="text-primary animate-glow-pulse" />
            <span className="font-outfit text-sm tracking-[0.3em] uppercase text-primary/80">Art & Design Studio</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] max-w-5xl"
          >
            <span className="text-foreground">Dreaming</span>
            <br />
            <span className="text-primary text-glow">Bonsai</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-outfit text-lg md:text-xl text-foreground/50 max-w-xl"
          >
            Shaping dreams, one leaf at a time
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-10 flex gap-4"
          >
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-outfit text-sm font-medium hover:bg-primary/90 transition-all"
            >
              Discover Our World
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border/50 text-foreground/70 font-outfit text-sm hover:border-primary/50 hover:text-primary transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 rounded-full border border-foreground/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-primary/60" />
          </div>
        </motion.div>
      </section>

      {/* About Preview */}
      <ParallaxSection bgImage={ABOUT_IMG} className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedReveal>
            <span className="font-outfit text-xs tracking-[0.3em] uppercase text-primary/60 mb-4 block">Who We Are</span>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <h2 className="font-cinzel text-3xl md:text-5xl font-semibold text-foreground leading-tight max-w-3xl">
              Where Ideas <span className="text-primary text-glow">Take Root</span>
            </h2>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <p className="mt-6 font-outfit text-foreground/50 text-lg max-w-2xl leading-relaxed">
              We're storytellers, dream weavers, and miniature world architects. We believe in the power of art to cultivate wonder, and in design's ability to shape your vision.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.3}>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 font-outfit text-sm text-primary hover:text-accent transition-colors group"
            >
              Learn more about us
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedReveal>
        </div>
      </ParallaxSection>

      <SectionDivider />

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <AnimatedReveal>
          <span className="font-outfit text-xs tracking-[0.3em] uppercase text-primary/60 mb-4 block text-center">Our Services</span>
        </AnimatedReveal>
        <AnimatedReveal delay={0.1}>
          <h2 className="font-cinzel text-3xl md:text-5xl font-semibold text-foreground text-center mb-16">
            What We <span className="text-accent text-glow-pink">Create</span>
          </h2>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Graphic Design"
            description="Brand identities, websites, and visual storytelling that grows on you."
            image={DESIGN_IMG}
            link="/graphic-design"
            index={0}
          />
          <ServiceCard
            title="Illustrations & Art"
            description="Where imagination takes root, blossoming into breathtaking visual art."
            image={ILLUST_IMG}
            link="/illustrations"
            index={1}
          />
          <ServiceCard
            title="Game Making"
            description="Weaving worlds from branches, building games where imagination takes root."
            image={GAMES_IMG}
            link="/game-making"
            index={2}
          />
        </div>
      </section>

      <SectionDivider />

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent blur-[120px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <AnimatedReveal>
            <h2 className="font-cinzel text-3xl md:text-5xl font-semibold text-foreground mb-6">
              Ready to <span className="text-primary text-glow">Grow</span> Something Beautiful?
            </h2>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <p className="font-outfit text-foreground/50 text-lg mb-10 leading-relaxed">
              Reach out, and let's see what breathtaking worlds we can co-create together.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.2}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-outfit font-medium hover:bg-primary/90 transition-all group"
            >
              Start Your Journey
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedReveal>
        </div>
      </section>
    </div>
  );
}