import { useState, useEffect } from "react";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import News from "@/components/sections/News";
import Rules from "@/components/sections/Rules";
import Support from "@/components/sections/Support";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [currentProject, setCurrentProject] = useState(0);
  const [currentNews, setCurrentNews] = useState(0);

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

  const news = [
    {
      tag: "Событие",
      icon: "Zap",
      date: "Завтра в 22:00 МСК",
      fullDate: "18 октября 2025",
      title: "Админ абьюз",
      description: "Не пропустите эпичное событие! Админы покажут свою мощь и устроят незабываемое шоу. Приходите завтра в 22:00 по московскому времени и станьте свидетелем админ абьюза!",
      showTimer: true
    },
    {
      tag: "Анонс",
      icon: "Rocket",
      date: "28 октября в 15:00",
      fullDate: "28 октября 2025",
      title: "Новая игра уже скоро!",
      description: "Сейчас мы создаём игру ещё одну! Выйдет 28 октября в 15:00. Готовьтесь к чему-то совершенно новому и невероятному!",
      showTimer: false
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % news.length);
  };

  const prevNews = () => {
    setCurrentNews((prev) => (prev - 1 + news.length) % news.length);
  };

  useEffect(() => {
    setTimeLeft({ hours: 12, minutes: 1, seconds: 10 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <Navigation />
      <Hero />
      <About />
      <Projects 
        projects={projects}
        currentProject={currentProject}
        onNext={nextProject}
        onPrev={prevProject}
        onSelect={setCurrentProject}
      />
      <News 
        news={news}
        currentNews={currentNews}
        timeLeft={timeLeft}
        onNext={nextNews}
        onPrev={prevNews}
        onSelect={setCurrentNews}
      />
      <Rules />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
