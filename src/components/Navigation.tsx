import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 cosmic-transition ${
      isScrolled ? 'bg-card/80 backdrop-blur-lg shadow-nebula' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold cosmic-glow">
            Nguyen Lam Giang
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground/80 hover:text-primary cosmic-transition hover:cosmic-glow"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground/80 hover:text-primary cosmic-transition hover:cosmic-glow"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground/80 hover:text-primary cosmic-transition hover:cosmic-glow"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground/80 hover:text-primary cosmic-transition hover:cosmic-glow"
            >
              Contact
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="bg-primary/10 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground aurora-glow"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;