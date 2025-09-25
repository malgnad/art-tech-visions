import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ExternalLink, Eye } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  tags: string[];
}

const ProjectCard = ({ title, description, image, slug, tags }: ProjectCardProps) => {
  return (
    <Card className="group bg-card/50 border-border/50 nebula-glow hover:shadow-glow cosmic-transition overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover cosmic-transition group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold mb-2 cosmic-glow">{title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 text-xs bg-secondary/50 text-secondary-foreground rounded-full border border-border/30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button 
            asChild
            variant="outline"
            size="sm"
            className="flex-1 bg-primary/10 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Link to={`/projects/${slug}`}>
              <Eye className="w-4 h-4 mr-2" />
              View Project
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;