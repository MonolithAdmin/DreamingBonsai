import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-cinzel text-xl text-primary text-glow mb-4">Dreaming Bonsai</h3>
            <p className="font-outfit text-sm text-muted-foreground leading-relaxed">
              Shaping dreams, one leaf at a time. Where art meets nature and imagination takes root.
            </p>
          </div>
          <div>
            <h4 className="font-cinzel text-sm uppercase tracking-widest text-foreground/70 mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              {[
                { path: '/about', label: 'About Us' },
                { path: '/graphic-design', label: 'Graphic Design' },
                { path: '/illustrations', label: 'Illustrations' },
                { path: '/game-making', label: 'Game Making' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-outfit text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-cinzel text-sm uppercase tracking-widest text-foreground/70 mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/dreamingbonsai/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-outfit text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Instagram
              </a>
              <Link
                to="/contact"
                className="font-outfit text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-border/20 text-center">
          <p className="font-outfit text-xs text-muted-foreground/50">
            © {new Date().getFullYear()} Dreaming Bonsai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}