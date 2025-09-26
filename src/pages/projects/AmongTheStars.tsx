import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Star, Zap, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

import amongTheStarsImage from '@/assets/among-the-stars.png';

const AmongTheStars = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-cosmic opacity-30" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="mb-8">
              <Button 
                variant="outline" 
                asChild
                className="bg-card/30 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 cosmic-glow">
                  Among the Stars
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Creative Algorithms Course Project
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  An interactive art project that integrates art and technology, allowing users to 
                  engage with a mesmerizing star-themed digital installation. This project explores 
                  the vastness of space through algorithmic beauty and user interaction.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Creative Coding', 'Interactive Art', 'Digital Installation', 'Algorithmic Design'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button className="bg-primary text-primary-foreground hover:shadow-cosmic cosmic-transition">
                    <Star className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline"
                    className="bg-card/30 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground aurora-glow"
                  >
                    View Code
                  </Button>
                </div>
              </div>
              
              <div className="animate-slide-up">
                <Card className="overflow-hidden nebula-glow">
                  <img 
                    src={amongTheStarsImage} 
                    alt="Among the Stars - Interactive Installation"
                    className="w-full h-auto object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Calendar className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Duration</h3>
                <p className="text-muted-foreground">Fall 2024</p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Technology</h3>
                <p className="text-muted-foreground">Creative Coding, Interactive Media</p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Role</h3>
                <p className="text-muted-foreground">Solo Developer & Artist</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="p-8 bg-card/50 border-border/50 nebula-glow">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Project Overview</h2>
                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    <p>
                      "Among the Stars" is an immersive digital installation that invites users to explore 
                      the cosmic beauty of space through interactive algorithms. The project combines 
                      mathematical precision with artistic expression to create a mesmerizing experience 
                      of stellar formation and celestial movement.
                    </p>
                    <p>
                      Users can interact with the installation through various input methods, influencing 
                      the behavior of stars, planets, and cosmic phenomena in real-time. The project 
                      demonstrates the power of creative coding to transform complex mathematical concepts 
                      into accessible and beautiful art forms.
                    </p>
                    <p>
                      This work explores themes of infinity, beauty in mathematics, and our human 
                      connection to the cosmos, making abstract algorithmic concepts tangible through 
                      visual and interactive storytelling.
                    </p>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="p-8 bg-card/50 border-border/50 nebula-glow mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Technical Features</h2>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Real-time particle systems for stellar phenomena</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Interactive user controls for cosmic manipulation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Algorithmic generation of celestial patterns</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Dynamic lighting and atmospheric effects</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Responsive design for various display formats</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 bg-card/50 border-border/50 nebula-glow">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Learning Outcomes</h2>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Advanced understanding of creative coding principles</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Integration of mathematical concepts with artistic vision</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>User experience design in interactive installations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Performance optimization for real-time graphics</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 cosmic-glow">More Projects</h2>
              <p className="text-muted-foreground">Explore other creative technology projects</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="outline"
                className="bg-card/30 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground aurora-glow"
              >
                <Link to="/projects/octopaint">View OctoPaint →</Link>
              </Button>
              <Button 
                asChild 
                variant="outline"
                className="bg-card/30 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground aurora-glow"
              >
                <Link to="/projects/noctopus">View Noctopus →</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AmongTheStars;