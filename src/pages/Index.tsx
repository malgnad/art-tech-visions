import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { Mail, Phone, Github, Linkedin, Download, Star, Code, Palette } from 'lucide-react';

import amongTheStarsImage from '@/assets/among-the-stars.png';
import octopaintImage from '@/assets/octopaint.png';
import noctopusImage from '@/assets/noctopus.png';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Among the Stars",
      description: "An interactive art project integrating art and technology, allowing users to engage with a star-themed digital installation. Created for Creative Algorithms Course.",
      image: amongTheStarsImage,
      slug: "among-the-stars",
      tags: ["Creative Coding", "Interactive Art", "Digital Installation"]
    },
    {
      title: "OctoPaint",
      description: "A simple digital drawing tool similar to basic paint software, built to practice computer graphics concepts and user interface design.",
      image: octopaintImage,
      slug: "octopaint",
      tags: ["Computer Graphics", "UI Design", "Digital Art"]
    },
    {
      title: "Noctopus",
      description: "A bedtime-story-themed website created to practice fundamental web development skills and storytelling through design.",
      image: noctopusImage,
      slug: "noctopus",
      tags: ["Web Development", "Storytelling", "Design"]
    }
  ];

  const skills = [
    { icon: Code, name: "TouchDesigner", level: "Beginner" },
    { icon: Palette, name: "Blender", level: "Beginner" },
    { icon: Star, name: "Creative Coding", level: "Intermediate" },
    { icon: Code, name: "Web Development", level: "Beginner" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cosmic opacity-50" />
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className={`cosmic-transition ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 cosmic-glow">
              Nguyen Lam Giang
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              ArtTech Student • Creative Technologist • Digital Media Explorer
            </p>
            <p className="text-lg text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Exploring the intersection of art and technology through interactive design, 
              creative coding, and digital media at the University of Economics Ho Chi Minh City.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:shadow-cosmic cosmic-transition"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-card/30 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground aurora-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cosmic-glow">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full aurora-glow" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Card className="p-8 bg-card/50 border-border/50 nebula-glow">
                <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  I am a second-year student at the University of Economics Ho Chi Minh City (UEH), 
                  majoring in ArtTech. I'm currently exploring creative technologies such as TouchDesigner 
                  and Blender, aiming to develop a strong foundation in interactive design and digital media.
                </p>
                <p className="text-foreground/90 mb-6 leading-relaxed">
                  I enjoy working in quiet environments, but I also value collaboration through meaningful 
                  discussions in team projects. While I am capable of working independently, I believe that 
                  exchanging ideas and perspectives helps achieve better outcomes.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  My philosophy is to keep learning continuously, adapt to changes, and combine creativity 
                  with technology to bring ideas to life.
                </p>
              </Card>
            </div>
            
            <div className="animate-slide-up">
              <Card className="p-8 bg-card/50 border-border/50 nebula-glow mb-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Skills & Tools</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20">
                      <skill.icon className="w-5 h-5 text-accent" />
                      <div>
                        <p className="font-medium">{skill.name}</p>
                        <p className="text-sm text-muted-foreground">{skill.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              <Card className="p-6 bg-card/50 border-border/50 nebula-glow">
                <h3 className="text-xl font-bold mb-4 text-primary">Academic Excellence</h3>
                <div className="flex items-center space-x-3">
                  <Star className="w-6 h-6 text-accent" />
                  <div>
                    <p className="font-medium">University of Economics Ho Chi Minh City</p>
                    <p className="text-sm text-muted-foreground">ArtTech Major • Excellent Academic Standing</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cosmic-glow">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full aurora-glow" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Exploring the intersection of art and technology through interactive experiences and creative coding
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.slug}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cosmic-glow">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full aurora-glow" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Let's connect and explore opportunities in creative technology and digital media
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card/50 border-border/50 nebula-glow">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-primary">Let's Collaborate</h3>
                  <p className="text-foreground/90 mb-8 leading-relaxed">
                    I'm always interested in discussing creative projects, learning opportunities, 
                    and collaborations in the intersection of art and technology.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-accent" />
                      <a 
                        href="mailto:gn24102006@gmail.com"
                        className="text-foreground/90 hover:text-primary cosmic-transition"
                      >
                        gn24102006@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-accent" />
                      <a 
                        href="tel:0765450306"
                        className="text-foreground/90 hover:text-primary cosmic-transition"
                      >
                        0765450306
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="text-center md:text-right">
                  <div className="bg-nebula rounded-2xl p-8 inline-block">
                    <h4 className="text-xl font-bold mb-4">Connect With Me</h4>
                    <div className="flex justify-center md:justify-end space-x-4">
                      <a 
                        href="https://github.com/yourusername" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button 
                          variant="outline"
                          size="icon"
                          className="bg-card/30 border-primary/30 hover:bg-primary hover:text-primary-foreground aurora-glow"
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                      </a>
                      <a 
                        href="mailto:gn24102006@gmail.com"
                        className="inline-block"
                      >
                        <Button 
                          variant="outline"
                          size="icon"
                          className="bg-card/30 border-primary/30 hover:bg-primary hover:text-primary-foreground aurora-glow"
                        >
                          <Mail className="w-5 h-5" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Nguyen Lam Giang. Crafted with creativity and technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
