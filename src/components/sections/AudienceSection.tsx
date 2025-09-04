import { Gamepad2, Smartphone, Globe, Star, Trophy, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AudienceSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const audiences = [
    {
      icon: Gamepad2,
      title: "Game Studios",
      subtitle: "Mobile • Web3 • Console",
      description: "Turn players into superfans with AI that learns their behavior and creates irresistible offers.",
      gradient: "bg-gradient-primary",
      stats: "500M+ gamers engaged",
      examples: ["Supercell", "King", "Ubisoft style studios"]
    },
    {
      icon: Smartphone,
      title: "App Publishers",
      subtitle: "Fintech • Lifestyle • E-commerce",
      description: "Convert casual users into power users with hyper-personalized growth loops that actually work.",
      gradient: "bg-gradient-secondary",
      stats: "200M+ app users retained",
      examples: ["Revolut", "Spotify", "Amazon style apps"]
    },
    {
      icon: Globe,
      title: "Web3 Builders",
      subtitle: "Telegram • Discord • NFT Projects",
      description: "Scale your crypto community with Web3-native tools and blockchain payment optimization.",
      gradient: "bg-gradient-accent",
      stats: "50M+ Web3 interactions",
      examples: ["Notcoin", "Hamster Kombat", "TON ecosystem"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-muted/5 to-background relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Star className="absolute top-20 left-20 h-6 w-6 text-primary/30 animate-float" />
        <Trophy className="absolute top-40 right-32 h-8 w-8 text-secondary/20 animate-float" style={{animationDelay: '1s'}} />
        <Rocket className="absolute bottom-32 left-1/4 h-5 w-5 text-accent/25 animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-secondary-glow to-foreground bg-clip-text text-transparent">
            Built for Winners
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From <span className="font-bold text-foreground">indie studios to unicorns</span> — 
            ScaleCraft powers growth for teams who refuse to settle for average.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className={`group relative bg-card border border-card-border rounded-2xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-700 hover:-translate-y-4 overflow-hidden ${
                isVisible 
                  ? 'opacity-100 translate-y-0 rotate-0' 
                  : 'opacity-0 translate-y-20 rotate-3'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                transformOrigin: 'center bottom'
              }}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon with floating animation */}
                <div className={`inline-flex p-6 rounded-2xl ${audience.gradient} mb-6 mx-auto shadow-button group-hover:animate-glow-pulse`}>
                  <audience.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Stats badge */}
                <div className="inline-block px-3 py-1 rounded-full bg-success/10 border border-success/20 mb-4">
                  <span className="text-xs font-semibold text-success">{audience.stats}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-card-foreground group-hover:text-primary-glow transition-colors">
                  {audience.title}
                </h3>
                
                <p className="text-muted-foreground text-sm font-medium mb-6 opacity-80 tracking-wider uppercase">
                  {audience.subtitle}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  {audience.description}
                </p>

                {/* Example companies */}
                <div className="pt-4 border-t border-card-border/50">
                  <p className="text-xs text-muted-foreground/60 mb-2">Trusted by teams like:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {audience.examples.map((example, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded bg-muted/20 text-muted-foreground">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};