import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-muted/20">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <Icon name="Rocket" size={28} className="text-primary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ILOVEBANSTUDIOS
          </span>
        </div>
        <p className="text-muted-foreground mb-6">
          Создаем игры, которые объединяют
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.roblox.com/users/8656342223/profile" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Icon name="User" size={24} />
          </a>
          <a href="https://www.roblox.com/games/84006683269809/Steal-a-brainrot" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            <Icon name="Gamepad2" size={24} />
          </a>
          <a href="#support" className="hover:text-secondary transition-colors">
            <Icon name="MessageCircle" size={24} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © 2025 ILOVEBANSTUDIOS. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
