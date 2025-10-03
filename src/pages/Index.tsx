import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import InteractivePlanet from '@/components/InteractivePlanet';
import { Mail, Phone, Github, Star, Code, Palette, Image, Camera, Video, Film } from 'lucide-react';

import amongTheStarsImage from '@/assets/among-the-stars.png';
import octopaintImage from '@/assets/octopaint.png';
import noctopusImage from '@/assets/noctopus.png';
import profileMainImage from '@/assets/profile-main.png';
import uehCampusImage from '@/assets/ueh-campus.png';

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
    { icon: Code, name: "TouchDesigner", level: "Beginner", iconType: "lucide" },
    { icon: Palette, name: "Blender", level: "Beginner", iconType: "lucide" },
    { icon: Star, name: "Creative Coding", level: "Intermediate", iconType: "lucide" },
    { icon: Code, name: "Web Development", level: "Beginner", iconType: "lucide" },
    { name: "Adobe Illustrator", level: "Intermediate", iconType: "image", iconPath: "/adobe-illustrator.png" },
    { name: "Photoshop", level: "Intermediate", iconType: "image", iconPath: "/adobe-photoshop.png" },
    { name: "After Effects", level: "Intermediate", iconType: "image", iconPath: "/adobe-after-effects.png" },
    { name: "Premiere Pro", level: "Intermediate", iconType: "image", iconPath: "/adobe-premiere-pro.png" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-cosmic opacity-50" />
        
        {/* Decorative Planets */}
        <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: '0s' }}>
          <InteractivePlanet size={180} color="from-pink-500 via-purple-500 to-violet-600" hasRing={true} />
        </div>
        <div className="absolute bottom-32 left-20 opacity-70 animate-float" style={{ animationDelay: '2s' }}>
          <InteractivePlanet size={80} color="from-fuchsia-400 to-pink-500" hasRing={false} />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-50 animate-float" style={{ animationDelay: '4s' }}>
          <InteractivePlanet size={60} color="from-violet-400 to-purple-500" hasRing={false} />
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className={`cosmic-transition ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="grid lg:grid-cols-2 gap-10 items-center justify-items-center max-w-7xl mx-auto">
              {/* Profile Image - Left Side */}
              <div className="flex items-center justify-center lg:justify-center">
                <div className="relative">
                  <img 
                    src={profileMainImage} 
                    alt="Nguyen Lam Giang - Profile"
                    className="w-72 h-96 object-cover rounded-2xl cosmic-glow nebula-glow shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/30 animate-pulse" />
                </div>
              </div>
              
              {/* Text Content - Right Side */}
              <div className="flex flex-col justify-center text-center lg:text-left space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold cosmic-glow">
                  Nguyen Lam Giang
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  ArtTech Student • Creative Technologist • Digital Media Explorer
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Exploring the intersection of art and technology through interactive design, 
                  creative coding, and digital media at the University of Economics Ho Chi Minh City.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
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
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        {/* Decorative Planets Around About Section */}
        <div className="absolute top-10 left-10 opacity-60 animate-float" style={{ animationDelay: '1s' }}>
          <InteractivePlanet size={100} color="from-violet-400 to-purple-500" hasRing={true} className="hover:scale-110 hover:drop-shadow-[0_0_40px_rgba(167,139,250,0.8)] transition-all duration-300" />
        </div>
        <div className="absolute top-40 left-32 opacity-70 animate-float" style={{ animationDelay: '2.5s' }}>
          <InteractivePlanet size={60} color="from-fuchsia-400 to-pink-500" hasRing={false} className="hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(236,72,153,0.9)] transition-all duration-300" />
        </div>
        <div className="absolute top-2/3 left-20 opacity-55 animate-float" style={{ animationDelay: '4s' }}>
          <InteractivePlanet size={80} color="from-pink-500 to-purple-600" hasRing={false} className="hover:scale-110 hover:drop-shadow-[0_0_35px_rgba(219,39,119,0.8)] transition-all duration-300" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-50 animate-float" style={{ animationDelay: '3s' }}>
          <InteractivePlanet size={70} color="from-pink-400 to-fuchsia-500" hasRing={false} className="hover:scale-110 hover:drop-shadow-[0_0_35px_rgba(236,72,153,0.8)] transition-all duration-300" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-40 animate-float" style={{ animationDelay: '5s' }}>
          <InteractivePlanet size={50} color="from-purple-400 to-violet-500" hasRing={false} className="hover:scale-110 hover:drop-shadow-[0_0_25px_rgba(167,139,250,0.9)] transition-all duration-300" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
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
                    <div key={skill.name} className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors">
                      {skill.iconType === "lucide" && skill.icon ? (
                        <skill.icon className="w-5 h-5 text-accent" />
                      ) : (
                        <img 
                          src={skill.iconPath} 
                          alt={`${skill.name} icon`} 
                          className="w-5 h-5 object-contain"
                        />
                      )}
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-accent" />
                    <div>
                      <p className="font-medium">University of Economics Ho Chi Minh City</p>
                      <p className="text-sm text-muted-foreground">ArtTech Major • Excellent Academic Standing</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <img 
                      src={uehCampusImage} 
                      alt="UEH University Campus"
                      className="w-full h-48 object-cover rounded-lg shadow-md ring-2 ring-primary/20"
                    />
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
                
                <div className="text-center">
                  <div className="bg-nebula rounded-2xl p-8 inline-block">
                    <h4 className="text-xl font-bold mb-4">Connect With Me</h4>
                    <div className="flex justify-center space-x-4">
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
