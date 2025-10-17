import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface ProjectsProps {
  projects: Project[];
  currentProject: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

const Projects = ({ projects, currentProject, onNext, onPrev, onSelect }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Проекты в Roblox
        </h2>
        <div className="max-w-2xl mx-auto relative">
          <Card className="bg-gradient-to-br from-card to-muted border-2 border-accent/30 hover:border-accent transition-all hover-scale overflow-hidden">
            <div className="relative h-64 bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
              <img 
                src={projects[currentProject].image}
                alt={projects[currentProject].title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Icon name="Play" size={80} className="text-white drop-shadow-lg" />
              </div>
            </div>
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Icon name="Gamepad2" size={32} className="text-primary" />
                {projects[currentProject].title}
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                {projects[currentProject].description}
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-accent to-primary hover:scale-105 transition-transform text-white font-semibold"
                    size="lg"
                    asChild
                  >
                    <a href={projects[currentProject].url} target="_blank" rel="noopener noreferrer">
                      <Icon name="ExternalLink" size={20} className="mr-2" />
                      Играть сейчас
                    </a>
                  </Button>
                  <Button 
                    className="flex-1 bg-gradient-to-r from-secondary to-accent hover:scale-105 transition-transform text-background font-semibold"
                    size="lg"
                    asChild
                  >
                    <a href="#support">
                      <Icon name="MessageSquare" size={20} className="mr-2" />
                      Пишите нам
                    </a>
                  </Button>
                </div>
                {projects[currentProject].title === "Steal a brainrot" && (
                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105 transition-transform text-white font-bold shadow-lg shadow-purple-500/50"
                    size="lg"
                    asChild
                  >
                    <a href="https://www.roblox.com/share?code=aa77e00c17fed845a2948cf1c1e3f687&type=Server" target="_blank" rel="noopener noreferrer">
                      <Icon name="Lock" size={20} className="mr-2" />
                      Зайти на приват разработчика
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Button
            onClick={onPrev}
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-primary to-accent hover:scale-110 transition-transform text-white shadow-lg"
          >
            <Icon name="ChevronLeft" size={24} />
          </Button>
          
          <Button
            onClick={onNext}
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-accent to-primary hover:scale-110 transition-transform text-white shadow-lg"
          >
            <Icon name="ChevronRight" size={24} />
          </Button>
          
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => onSelect(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentProject 
                    ? 'w-8 bg-gradient-to-r from-primary to-accent' 
                    : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
