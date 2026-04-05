const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import PageHero from '../components/PageHero';
import ContentBlock from '../components/ContentBlock';
import SectionDivider from '../components/SectionDivider';
import AnimatedReveal from '../components/AnimatedReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ILLUST_IMG = "https://mattjackdreamingfactory.com/assets/illust.png";

export default function Illustrations() {
  return (
    <div>
      <PageHero
        title="Where Imagination Takes Root"
        subtitle="Blossoming into breathtaking visual storytelling"
        image={ILLUST_IMG}
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <ContentBlock
          heading="Illustrations that Whisper Worlds"
          text={[
            "Our illustrators are weavers of dreams, conjuring vibrant universes onto canvas, page, or screen. Whether it's bringing your children's book characters to life with delicate brushstrokes or crafting eye-catching murals that transform your space into a living story, we pour our passion into every line and color.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="Fine Art that Captures Nature's Spirit"
          accent
          text={[
            "The spirit of nature whispers through our fine art. Our artists and photographers capture the essence of the bonsai – the intricate beauty of a single leaf, the quiet strength of a gnarled branch, the resilience of a miniature world thriving in a tiny pot. Let our art bring a touch of serenity and wonder to your space.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="From Page to Stage: Bringing Stories to Life"
          text={[
            "Dreaming Bonsai transcends the canvas. We collaborate with event planners, theatre creators, and other artists to translate your vision into immersive experiences.",
            "Imagine a theatrical set inspired by the graceful balance of a bonsai, or a live performance where dancers move with the fluid, deliberate grace of a tree swaying in the wind. We're here to make the impossible bloom.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="Let Your Creative Seed Flourish"
          accent
          text={[
            "No artistic dream is too small or too grand for us. We nurture your creative seedling, offering workshops, personalized art commissions, and collaborative projects that allow you to tap into your own artistic potential.",
            "Come explore the joy of drawing, delve into the meditative practice of bonsai, or learn how to tell your story through the lens of a camera.",
          ]}
        />

        <AnimatedReveal className="text-center mt-16">
          <p className="font-outfit text-foreground/60 text-lg mb-8 font-cinzel">
            Ready to Unfurl Your Creative Blossoms?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-accent text-accent-foreground font-outfit font-medium hover:bg-accent/90 transition-all group"
          >
            Discuss Your Vision
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedReveal>
      </div>
    </div>
  );
}
