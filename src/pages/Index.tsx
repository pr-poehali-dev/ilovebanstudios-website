import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              ILOVEBANSTUDIOS
            </div>
            <div className="flex gap-6 items-center">
              <a href="#about" className="hover:text-primary transition-colors">О группе</a>
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#support" className="hover:text-primary transition-colors">Поддержка</a>
            </div>
          </div>
        </div>
      </nav>

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
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            О группе
          </h2>
          <Card className="bg-card/50 backdrop-blur border-2 border-primary/20 hover:border-primary/50 transition-all hover-scale">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-primary to-accent p-4 rounded-2xl">
                  <Icon name="Megaphone" size={40} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">ilovebanstudios</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Мы создаем уникальные игровые проекты в Roblox. Наша команда работает над инновационными играми, 
                    которые объединяют игроков со всего мира. Присоединяйтесь к нашему сообществу и станьте частью 
                    чего-то большого!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Проекты в Roblox
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-muted border-2 border-accent/30 hover:border-accent transition-all hover-scale overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-accent/20 to-primary/20 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/7433d5c4-025b-41aa-bc64-a9d35173c38b.png" 
                  alt="ilovebanstudios screenshot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Icon name="Play" size={80} className="text-white drop-shadow-lg" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <Icon name="Gamepad2" size={32} className="text-primary" />
                  Steal a brainrot
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  Захватывающая игра, в которой вам предстоит погрузиться в безумный мир приключений. 
                  Соревнуйтесь с друзьями и покажите, кто настоящий мастер!
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-accent to-primary hover:scale-105 transition-transform text-white font-semibold"
                  size="lg"
                  asChild
                >
                  <a href="https://www.roblox.com/games/84006683269809/Steal-a-brainrot" target="_blank" rel="noopener noreferrer">
                    <Icon name="ExternalLink" size={20} className="mr-2" />
                    Играть сейчас
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="support" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Поддержка
          </h2>
          <Card className="bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/50 hover:border-secondary transition-all p-8">
            <CardContent>
              <Icon name="MessageCircle" size={60} className="mx-auto mb-6 text-secondary" />
              <h3 className="text-2xl font-bold mb-4">Нужна помощь?</h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Свяжитесь с нашей службой поддержки для получения помощи по любым вопросам
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-secondary to-accent hover:scale-105 transition-transform text-background font-semibold px-8"
              >
                <Icon name="Send" size={20} className="mr-2" />
                @SupportsGladmin
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-background/50 backdrop-blur">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            ILOVEBANSTUDIOS
          </div>
          <p className="text-muted-foreground mb-6">Gaming Group © 2025</p>
          <div className="flex gap-4 justify-center">
            <Icon name="Users" size={24} className="text-primary hover:scale-110 transition-transform cursor-pointer" />
            <Icon name="MessageCircle" size={24} className="text-secondary hover:scale-110 transition-transform cursor-pointer" />
            <Icon name="Gamepad2" size={24} className="text-accent hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;