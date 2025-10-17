import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
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
  );
};

export default About;
