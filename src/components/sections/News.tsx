import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface NewsItem {
  tag: string;
  icon: string;
  date: string;
  fullDate: string;
  title: string;
  description: string;
  showTimer: boolean;
}

interface NewsProps {
  news: NewsItem[];
  currentNews: number;
  timeLeft: { hours: number; minutes: number; seconds: number };
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

const News = ({ news, currentNews, timeLeft, onNext, onPrev, onSelect }: NewsProps) => {
  return (
    <section id="news" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Последние новости
        </h2>
        <div className="max-w-3xl mx-auto relative">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/50 hover:border-primary transition-all overflow-hidden">
            <div className="relative bg-gradient-to-r from-primary via-accent to-primary p-1">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-xl"></div>
              <div className="relative bg-card p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl">
                    <Icon name={news[currentNews].icon} size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold border border-primary/30">
                        {news[currentNews].tag}
                      </span>
                      <span className="text-muted-foreground text-sm flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {news[currentNews].date}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {news[currentNews].title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      {news[currentNews].description}
                    </p>
                    {news[currentNews].showTimer && (
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
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-border mb-6">
                  <div className="flex items-center gap-2 text-primary">
                    <Icon name="Calendar" size={20} />
                    <span className="font-semibold">{news[currentNews].fullDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-accent">
                    <Icon name="Users" size={20} />
                    <span className="font-semibold">Для всех игроков</span>
                  </div>
                </div>
                {news[currentNews].showTimer && (
                  <Button 
                    className="w-full bg-gradient-to-r from-primary via-accent to-primary hover:scale-105 transition-transform text-white font-bold shadow-lg shadow-primary/50 animate-pulse"
                    size="lg"
                    asChild
                  >
                    <a href="https://landofgames.ru/articles/guides/28468-admin-abjuz-v-steal-a-brainrot-kogda-prohodit.html" target="_blank" rel="noopener noreferrer">
                      <Icon name="Zap" size={20} className="mr-2" />
                      Не хочешь пропустить админ абьюз? Нажимай!
                    </a>
                  </Button>
                )}
              </div>
            </div>
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
            {news.map((_, index) => (
              <button
                key={index}
                onClick={() => onSelect(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentNews 
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

export default News;
