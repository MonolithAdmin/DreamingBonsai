const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import PageHero from '../components/PageHero';
import ContentBlock from '../components/ContentBlock';
import SectionDivider from '../components/SectionDivider';
import AnimatedReveal from '../components/AnimatedReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DESIGN_IMG = "https://media.db.com/images/public/69d1685144b1fbb1e8ed4171/0751c9c27_generated_71ae379f.png";

export default function GraphicDesign() {
  return (
    <div>
      <PageHero
        title="Graphic Design That Grows on You"
        subtitle="A full spectrum of graphic design services that blossom with meticulous care"
        image={DESIGN_IMG}
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <ContentBlock
          heading="Branching Out with Brand Identity"
          text={[
            "Your brand is the seed from which everything grows. We cultivate strong brand identities through captivating logos, harmonious colour palettes, and typography that speaks your essence.",
            "We believe in designs that not only stand out but also tell your story, whispering your values and resonating with your audience like the rustling leaves of a bonsai tree.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="Websites that Flourish"
          accent
          text={[
            "Your website is your digital oasis, a space where visitors can wander, explore, and connect with your brand. We craft websites that are as visually stunning as they are functional, with intuitive navigation, engaging content, and a touch of whimsical magic that keeps users coming back for more.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="Visual Storytelling For Your Social Media"
          text={[
            "From captivating social media graphics to eye-catching marketing materials, we ensure your brand's story blooms across every touchpoint. We create cohesive visual experiences that leave a lasting impression, whether it's a playful Instagram post or a polished brochure.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="Let Your Vision Take Root"
          accent
          text={[
            "No project is too big or too small for our passionate team. We approach every challenge with the same dedication and attention to detail as a bonsai artist, nurturing your vision until it flourishes into a vibrant reality.",
          ]}
        />

        <AnimatedReveal className="text-center mt-16">
          <p className="font-outfit text-foreground/60 text-lg mb-2 font-cinzel">
            Ready to watch your brand blossom?
          </p>
          <p className="font-outfit text-foreground/50 text-base mb-8">
            Contact us today for a free consultation. Let's grow something beautiful together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-outfit font-medium hover:bg-primary/90 transition-all group"
          >
            Free Consultation
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedReveal>
      </div>
    </div>
  );
}