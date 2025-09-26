import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Palette, Code, Monitor, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

import octopaintImage from '@/assets/octopaint.png';

const OctoPaint = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-nebula opacity-30" />
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
                  OctoPaint
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Computer Graphics Course Project
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  A charming digital drawing tool built with pixel art aesthetics, designed to practice 
                  computer graphics concepts and user interface design. Features a playful octopus 
                  theme with intuitive drawing tools and color palettes.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Computer Graphics', 'UI Design', 'Digital Art', 'Pixel Art'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-secondary/50 text-secondary-foreground rounded-full border border-border/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="animate-slide-up">
                <Card className="overflow-hidden nebula-glow">
                  <img 
                    src={octopaintImage} 
                    alt="OctoPaint - Digital Drawing Tool Interface"
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
                <Monitor className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Platform</h3>
                <p className="text-muted-foreground">Desktop Application</p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Code className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Focus</h3>
                <p className="text-muted-foreground">Computer Graphics & UI</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="p-8 bg-card/50 border-border/50 nebula-glow">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Project Overview</h2>
                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    <p>
                      OctoPaint is a delightful digital drawing application that combines functionality 
                      with whimsical design. Built as part of my Computer Graphics course, this project 
                      demonstrates core concepts of 2D graphics programming while maintaining an 
                      accessible and enjoyable user experience.
                    </p>
                    <p>
                      The application features a pixel art aesthetic with a charming octopus theme, 
                      complete with customizable brushes, color palettes, and essential drawing tools. 
                      The interface is designed to be intuitive for both beginners and experienced 
                      digital artists.
                    </p>
                    <p>
                      Through this project, I explored fundamental computer graphics principles including 
                      rasterization, color theory implementation, and user interface design patterns 
                      specific to creative software applications.
                    </p>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="p-8 bg-card/50 border-border/50 nebula-glow mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Key Features</h2>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start space-x-3">
                      <Palette className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Multiple brush tools with adjustable sizes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Palette className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Custom color palette with RGB/HSV controls</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Palette className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Layer management system</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Palette className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Undo/redo functionality</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Palette className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Export functionality for various formats</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Palette className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Pixel-perfect drawing mode</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 bg-card/50 border-border/50 nebula-glow">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Technical Challenges</h2>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Implementing efficient pixel manipulation algorithms</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Designing responsive UI components for creative tools</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Optimizing performance for real-time drawing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Creating intuitive brush dynamics and pressure sensitivity</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 cosmic-glow">Design Philosophy</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Creating an approachable digital art tool that doesn't compromise on functionality
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Palette className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Intuitive Interface</h3>
                <p className="text-muted-foreground">
                  Clean, organized toolbars that make essential functions easily accessible
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Monitor className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Visual Feedback</h3>
                <p className="text-muted-foreground">
                  Real-time preview and visual cues that guide the user's creative process
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Code className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Performance</h3>
                <p className="text-muted-foreground">
                  Optimized rendering pipeline ensuring smooth drawing experience
                </p>
              </Card>
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
                <Link to="/projects/among-the-stars">View Among the Stars →</Link>
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

export default OctoPaint;