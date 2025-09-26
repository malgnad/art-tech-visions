import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { ArrowLeft, Moon, Code, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

import noctopusImage from '@/assets/noctopus.png';

const Noctopus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-aurora opacity-30" />
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
                  Noctopus
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  Introductory Programming Course Project
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed mb-8">
                  A soothing bedtime-story-themed website that combines storytelling with web development. 
                  Created to practice fundamental web development skills while exploring the gentle art 
                  of digital storytelling and sleep-focused user experience design.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {['Web Development', 'Storytelling', 'UX Design', 'CSS Animation'].map((tag) => (
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
                    <Moon className="w-4 h-4 mr-2" />
                    Visit Website
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
                    src={noctopusImage} 
                    alt="Noctopus - Bedtime Story Website"
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
                <p className="text-muted-foreground">Spring 2024</p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Code className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Technology</h3>
                <p className="text-muted-foreground">HTML, CSS, JavaScript</p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Heart className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Theme</h3>
                <p className="text-muted-foreground">Sleep & Wellness</p>
              </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <Card className="p-8 bg-card/50 border-border/50 nebula-glow">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Project Overview</h2>
                  <div className="space-y-4 text-foreground/90 leading-relaxed">
                    <p>
                      Noctopus is a whimsical bedtime-story website that promotes healthy sleep habits 
                      through engaging storytelling and calming design. Created as my first major web 
                      development project, it combines fundamental programming concepts with thoughtful 
                      user experience design.
                    </p>
                    <p>
                      The website features our adorable mascot octopus who guides users through 
                      bedtime routines, sleep tips, and gentle stories designed to help visitors 
                      wind down for the night. The project emphasizes the importance of good sleep 
                      hygiene in our digital age.
                    </p>
                    <p>
                      Through this project, I learned core web development principles while exploring 
                      how design choices can influence user behavior and emotional responses, 
                      particularly in promoting relaxation and wellness.
                    </p>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="p-8 bg-card/50 border-border/50 nebula-glow mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Key Features</h2>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start space-x-3">
                      <Moon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Interactive bedtime stories with the Noctopus character</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Moon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Sleep tips and healthy bedtime routine guidance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Moon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Calming color palette and soothing animations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Moon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Progressive web app features for bedside use</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Moon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Responsive design optimized for various devices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Moon className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Gentle reminder system for bedtime routines</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-8 bg-card/50 border-border/50 nebula-glow">
                  <h2 className="text-3xl font-bold mb-6 text-primary">Learning Outcomes</h2>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Fundamental HTML structure and semantic markup</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>CSS animations and transitions for smooth interactions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>JavaScript DOM manipulation and event handling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Code className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>Responsive design principles and mobile optimization</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 cosmic-glow">Design for Wellness</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Creating a digital space that promotes relaxation and healthy sleep habits
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Moon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Calming Aesthetics</h3>
                <p className="text-muted-foreground">
                  Soft gradients and gentle animations that don't strain the eyes before bedtime
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Emotional Connection</h3>
                <p className="text-muted-foreground">
                  Storytelling that creates a personal bond between user and the Noctopus character
                </p>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow text-center">
                <Code className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Accessible Design</h3>
                <p className="text-muted-foreground">
                  Intuitive navigation and readable typography for users of all ages
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact & Reflection */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-6">
            <Card className="p-8 bg-card/50 border-border/50 nebula-glow max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-primary text-center">Project Impact</h2>
              <div className="text-foreground/90 leading-relaxed space-y-4">
                <p>
                  Noctopus represents my first deep dive into web development, where I learned that 
                  technology can be a force for wellness and positive habits. The project taught me 
                  the importance of considering user emotional states and designing with empathy.
                </p>
                <p>
                  Working on this sleep-focused website made me more aware of how digital interfaces 
                  can either contribute to or alleviate the stresses of modern life. It reinforced 
                  my belief that technology should serve humanity's wellbeing, not just functionality.
                </p>
                <p>
                  The positive feedback from classmates and instructors validated my approach to 
                  combining technical learning with meaningful design, setting the foundation for 
                  my continued exploration of technology that makes a positive difference.
                </p>
              </div>
            </Card>
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
                <Link to="/projects/octopaint">View OctoPaint →</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Noctopus;