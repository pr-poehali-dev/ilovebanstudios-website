import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Steal a brainrot",
      description: "Захватывающая игра, в которой вам предстоит погрузиться в безумный мир приключений. Соревнуйтесь с друзьями и покажите, кто настоящий мастер!",
      image: "https://cdn.poehali.dev/files/7433d5c4-025b-41aa-bc64-a9d35173c38b.png",
      url: "https://www.roblox.com/games/84006683269809/Steal-a-brainrot"
    },
    {
      title: "РП Чехов",
      description: "Чехов roleplay! Играй с друзьями! Но запомни тут много оружий в магазине есть!",
      image: "https://cdn.poehali.dev/files/7433d5c4-025b-41aa-bc64-a9d35173c38b.png",
      url: "https://www.roblox.com/games/88555117318628/ROLEPLAY-Release"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const eventDate = new Date('2025-10-18T22:00:00+03:00');
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
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
              <a href="#news" className="hover:text-primary transition-colors">Новости</a>
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
              </CardContent>
            </Card>
            
            <Button
              onClick={prevProject}
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-r from-primary to-accent hover:scale-110 transition-transform text-white shadow-lg"
            >
              <Icon name="ChevronLeft" size={24} />
            </Button>
            
            <Button
              onClick={nextProject}
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-r from-accent to-primary hover:scale-110 transition-transform text-white shadow-lg"
            >
              <Icon name="ChevronRight" size={24} />
            </Button>
            
            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
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

      <section id="news" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Последние новости
          </h2>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/50 hover:border-primary transition-all overflow-hidden">
              <div className="relative bg-gradient-to-r from-primary via-accent to-primary p-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-xl"></div>
                <div className="relative bg-card p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl">
                      <Icon name="Zap" size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30">
                          Событие
                        </span>
                        <span className="text-muted-foreground text-sm flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          Завтра в 22:00 МСК
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Админ абьюз
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Не пропустите эпичное событие! Админы покажут свою мощь и устроят незабываемое шоу. 
                        Приходите завтра в 22:00 по московскому времени и станьте свидетелем админ абьюза!
                      </p>
                      <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl p-6 border border-primary/30">
                        <div className="text-center mb-3">
                          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">До начала события</span>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-primary/20">
                            <div className="text-4xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-1">
                              {String(timeLeft.hours).padStart(2, '0')}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase">Часов</div>
                          </div>
                          <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-accent/20">
                            <div className="text-4xl font-black bg-gradient-to-br from-accent to-secondary bg-clip-text text-transparent mb-1">
                              {String(timeLeft.minutes).padStart(2, '0')}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase">Минут</div>
                          </div>
                          <div className="bg-card/50 backdrop-blur rounded-lg p-4 border border-secondary/20">
                            <div className="text-4xl font-black bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent mb-1">
                              {String(timeLeft.seconds).padStart(2, '0')}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase">Секунд</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-primary">
                      <Icon name="Calendar" size={20} />
                      <span className="font-semibold">18 октября 2025</span>
                    </div>
                    <div className="flex items-center gap-2 text-accent">
                      <Icon name="Users" size={20} />
                      <span className="font-semibold">Для всех игроков</span>
                    </div>
                  </div>
                </div>
              </div>
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