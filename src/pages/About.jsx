const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import PageHero from '../components/PageHero';
import ContentBlock from '../components/ContentBlock';
import SectionDivider from '../components/SectionDivider';
import AnimatedReveal from '../components/AnimatedReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ABOUT_IMG = "https://mattjackdreamingfactory.com/assets/about.png";

export default function About() {
  return (
    <div>
      <PageHero
        title="Where Ideas Take Root"
        subtitle="Welcome to Dreaming Bonsai"
        image={ABOUT_IMG}
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <ContentBlock
          heading="We're Not Your Average Studio"
          text={[
            "We're storytellers, dream weavers, and miniature world architects. We believe in the power of art to cultivate wonder, and in design's ability to shape your vision as exquisite and intricate as a bonsai tree.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="Rooted in Nature, Reaching for the Skies"
          accent
          text={[
            "Bringing together a team of like-minded individuals, we're graphic designers who see landscapes in textures, photographers who capture the poetry of a single leaf, and illustrators who paint universes within a dewdrop.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="From Seed to Stars: Our Creative Process"
          text={[
            "Every project begins with a seed – an idea, a vision, a whisper of desire. We listen intently, nurturing that seed through brainstorming sessions, mood boards, and sketches. We delve into your story, understanding your brand's DNA and your audience's dreams.",
            "Then, the magic begins. Our designers weave visual narratives, crafting logos that bloom with personality, websites that invite exploration, and social media campaigns that resonate like whispered secrets. Our photographers capture the soul of your products in a single frame, and our illustrators conjure worlds where imagination reigns supreme.",
            "Like a skilled bonsai artist, we prune and refine, ensuring every element contributes to the harmonious whole. We believe in meticulous attention to detail, in the power of color and texture, and in the importance of negative space to let your brand breathe.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="Blooming into Something Beautiful"
          accent
          text={[
            "Dreaming Bonsai is more than just a company; it's a philosophy. We believe in the inherent beauty of nature, in the power of art to inspire, and in the limitless potential of human dream like imagination. We're here to help you cultivate your vision, to nurture your brand's story, and to create experiences that leave a lasting impression, as delicate and breathtaking as a miniature masterpiece.",
          ]}
        />

        <AnimatedReveal className="text-center mt-16">
          <p className="font-outfit text-foreground/60 text-lg mb-8">
            Ready to embark on this creative journey with us?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-outfit font-medium hover:bg-primary/90 transition-all group"
          >
            Let's Co-Create
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedReveal>
      </div>
    </div>
  );
}
