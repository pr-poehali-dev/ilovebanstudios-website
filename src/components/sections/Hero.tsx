import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
          ILOVEBANSTUDIOS
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          Gaming Group
        </p>
        <div className="flex gap-4 justify-center animate-fade-in flex-wrap">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform text-white font-semibold px-8"
            asChild
          >
            <a href="https://www.roblox.com/users/8656342223/profile" target="_blank" rel="noopener noreferrer">
              <Icon name="User" size={20} className="mr-2" />
              Аккаунт в Roblox
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-background transition-all"
            asChild
          >
            <a href="https://www.roblox.com/games/84006683269809/Steal-a-brainrot" target="_blank" rel="noopener noreferrer">
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Наши игры
            </a>
          </Button>
        </div>
        <div className="mt-6 animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:scale-105 transition-transform text-white font-bold px-8 shadow-lg shadow-yellow-500/50"
            asChild
          >
            <a href="https://www.roblox.com/games/84006683269809/Steal-a-brainrot" target="_blank" rel="noopener noreferrer">
              <Icon name="Trophy" size={20} className="mr-2" />
              Самая лучшая игра за историю
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
