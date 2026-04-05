const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import PageHero from '../components/PageHero';
import ContentBlock from '../components/ContentBlock';
import SectionDivider from '../components/SectionDivider';
import AnimatedReveal from '../components/AnimatedReveal';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const GAMES_IMG = "https://mattjackdreamingfactory.com/assets/games.png";

export default function GameMaking() {
  return (
    <div>
      <PageHero
        title="Weaving Worlds From Branches"
        subtitle="Building games where imagination takes root"
        image={GAMES_IMG}
      />

      <div className="max-w-4xl mx-auto px-6 py-24">
        <ContentBlock
          heading="Branching Out into Interactive Narratives"
          text={[
            "We believe games are more than just pixels on a screen; they're living worlds pulsating with potential. We draw inspiration from the patient artistry of bonsai, imbuing our games with meticulous detail, harmonious balance, and a profound respect for nature's delicate beauty.",
            "Imagine traversing through whimsical landscapes where towering oaks whisper secrets and miniature creatures flutter amongst the leaves. Each branch becomes a pathway, each leaf a hidden treasure, inviting you to explore and uncover the stories woven into the world.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="Where Storytelling and Gameplay Bloom"
          accent
          text={[
            "Our games are not just visually stunning; they're designed to engage your mind and tug at your heartstrings. We craft narratives that bloom organically from the environment, where every challenge feels like a natural obstacle to overcome, every choice ripples through the world, and every triumph feels like a branch reaching towards the sun.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="From Dream to Playable Reality"
          text={[
            "Just like in the art of bonsai, every decision in our game development process is deliberate and meticulous. We nurture ideas, prune unnecessary complexity, and cultivate environments that spark imagination and foster connection.",
          ]}
        />

        <SectionDivider />

        <ContentBlock
          heading="Let Your Inner Explorer Take Root"
          accent
          text={[
            "We believe games have the power to transport us, to challenge us, and to bring us closer. Whether you're a seasoned adventurer or a curious newcomer, our games offer a haven for your imagination, a place to discover the quiet thrill of exploration, the joy of collaboration, and the beauty of stories whispered amongst the leaves.",
          ]}
        />

        <AnimatedReveal className="text-center mt-16">
          <p className="font-outfit text-foreground/60 text-lg mb-8 font-cinzel">
            Ready to Plant Your Seed of Adventure?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-outfit font-medium hover:bg-primary/90 transition-all group"
          >
            Explore With Us
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedReveal>
      </div>
    </div>
  );
}
