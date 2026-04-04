import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Mail, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedReveal from '../components/AnimatedReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <AnimatedReveal>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-primary animate-glow-pulse" />
            <span className="font-outfit text-xs tracking-[0.3em] uppercase text-primary/60">Get in Touch</span>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <h1 className="font-cinzel text-4xl md:text-6xl font-semibold text-foreground mb-4">
            Let's Create <span className="text-primary text-glow">Together</span>
          </h1>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <p className="font-outfit text-foreground/50 text-lg max-w-xl mb-16">
            Reach out and let's see what breathtaking worlds we can co-create.
          </p>
        </AnimatedReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <AnimatedReveal direction="scale">
                <div className="rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="text-primary" size={24} />
                  </div>
                  <h3 className="font-cinzel text-2xl text-foreground mb-3">Message Sent!</h3>
                  <p className="font-outfit text-foreground/50">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              </AnimatedReveal>
            ) : (
              <AnimatedReveal delay={0.3}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-outfit text-xs uppercase tracking-widest text-foreground/40 mb-2 block">Name</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-card/50 border-border/30 font-outfit focus:border-primary/50 h-12"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-outfit text-xs uppercase tracking-widest text-foreground/40 mb-2 block">Email</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-card/50 border-border/30 font-outfit focus:border-primary/50 h-12"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-outfit text-xs uppercase tracking-widest text-foreground/40 mb-2 block">Subject</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-card/50 border-border/30 font-outfit focus:border-primary/50 h-12"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="font-outfit text-xs uppercase tracking-widest text-foreground/40 mb-2 block">Message</label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-card/50 border-border/30 font-outfit focus:border-primary/50 min-h-[160px] resize-none"
                      placeholder="Tell us about your vision..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3 h-12 rounded-full bg-primary text-primary-foreground font-outfit font-medium hover:bg-primary/90 gap-2"
                  >
                    Send Message
                    <Send size={14} />
                  </Button>
                </form>
              </AnimatedReveal>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedReveal delay={0.4} direction="right">
              <div className="space-y-8">
                <div className="rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm p-8">
                  <h3 className="font-cinzel text-lg text-foreground mb-6">Connect With Us</h3>
                  <div className="space-y-5">
                    <a
                      href="https://www.instagram.com/dreamingbonsai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Instagram size={18} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-outfit text-sm text-foreground/70 group-hover:text-accent transition-colors">@dreamingbonsai</p>
                        <p className="font-outfit text-xs text-foreground/30">Instagram</p>
                      </div>
                    </a>
                    <a href="mailto:hello@dreamingbonsai.com" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-outfit text-sm text-foreground/70 group-hover:text-primary transition-colors">hello@dreamingbonsai.com</p>
                        <p className="font-outfit text-xs text-foreground/30">Email</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/30 bg-card/30 backdrop-blur-sm p-8">
                  <h3 className="font-cinzel text-lg text-foreground mb-3">Commissions Open</h3>
                  <p className="font-outfit text-sm text-foreground/50 leading-relaxed">
                    Sketches, full illustrations, colorization, comics — DM us or fill out the form to start your project.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </div>
  );
}