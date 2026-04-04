import AnimatedReveal from './AnimatedReveal';

export default function ContentBlock({ heading, text, accent = false }) {
  return (
    <AnimatedReveal direction="up" className="mb-16">
      <h2 className={`font-cinzel text-2xl md:text-3xl mb-6 leading-snug ${accent ? 'text-accent text-glow-pink' : 'text-primary text-glow'}`}>
        {heading}
      </h2>
      <div className="font-outfit text-foreground/70 text-base md:text-lg leading-relaxed space-y-4">
        {Array.isArray(text) ? text.map((p, i) => <p key={i}>{p}</p>) : <p>{text}</p>}
      </div>
    </AnimatedReveal>
  );
}