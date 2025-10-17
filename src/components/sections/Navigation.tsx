const Navigation = () => {
  return (
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
            <a href="#rules" className="hover:text-primary transition-colors">Правила</a>
            <a href="#support" className="hover:text-primary transition-colors">Поддержка</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
