import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Rules = () => {
  return (
    <section id="rules" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Правила сервера
        </h2>
        <div className="grid gap-6">
          <Card className="bg-gradient-to-br from-card to-muted border-2 border-primary/30 hover:border-primary/60 transition-all hover-scale">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl flex-shrink-0">
                  <Icon name="ShieldOff" size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <span className="text-primary">1.</span> Нельзя воровать
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Запрещено воровство любых игровых предметов и ресурсов у других игроков
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-muted border-2 border-accent/30 hover:border-accent/60 transition-all hover-scale">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-accent to-secondary p-3 rounded-xl flex-shrink-0">
                  <Icon name="MessageSquareOff" size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <span className="text-accent">2.</span> Нельзя оскорблять
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Запрещены оскорбления, грубость и неуважительное поведение
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-card to-muted border-2 border-secondary/30 hover:border-secondary/60 transition-all hover-scale">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-secondary to-primary p-3 rounded-xl flex-shrink-0">
                  <Icon name="Heart" size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <span className="text-secondary">3.</span> Дружить смирно
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Будьте дружелюбны, уважайте других игроков и играйте мирно
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h3 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Наказания
          </h3>
          <div className="grid gap-6">
            <Card className="bg-gradient-to-br from-red-950/20 to-orange-950/20 border-2 border-red-500/40 hover:border-red-500/70 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-600 to-orange-600 p-3 rounded-xl flex-shrink-0">
                    <Icon name="AlertTriangle" size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-red-400">
                      За воровство
                    </h4>
                    <p className="text-lg text-muted-foreground">
                      Вас забанят на <span className="text-red-400 font-bold">1 месяц</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-950/20 to-orange-950/20 border-2 border-orange-500/40 hover:border-orange-500/70 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange-600 to-red-600 p-3 rounded-xl flex-shrink-0">
                    <Icon name="Ban" size={28} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-orange-400">
                      За оскорбления
                    </h4>
                    <p className="text-lg text-muted-foreground">
                      Вас забанят на <span className="text-orange-400 font-bold">5 месяцев</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
