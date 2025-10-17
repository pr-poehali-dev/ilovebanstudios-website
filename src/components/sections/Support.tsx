import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Support = () => {
  return (
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
              className="bg-gradient-to-r from-secondary to-primary hover:scale-105 transition-transform text-white font-semibold"
              asChild
            >
              <a href="https://www.roblox.com/users/8656342223/profile" target="_blank" rel="noopener noreferrer">
                <Icon name="Mail" size={20} className="mr-2" />
                Написать в поддержку
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Support;
