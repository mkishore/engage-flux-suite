import { Gamepad2, Smartphone, Globe } from "lucide-react";

export const AudienceSection = () => {
  const audiences = [
    {
      icon: Gamepad2,
      title: "Game Studios",
      subtitle: "mobile, web3, or console",
      description: "Boost player engagement and monetization with AI-driven retention systems tailored for gaming.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Smartphone,
      title: "App Publishers",
      subtitle: "fintech, lifestyle, e-commerce apps",
      description: "Transform your app growth with personalized user journeys and intelligent payment optimization.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Globe,
      title: "Web3 & Mini-App Developers",
      subtitle: "TG bots, Discord games, NFT projects",
      description: "Scale your decentralized apps with blockchain-ready growth tools and crypto payment integration.",
      gradient: "bg-gradient-accent"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-secondary-glow bg-clip-text text-transparent">
            Built for Modern Developers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're building the next viral game or revolutionary app, our suite scales with your ambitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="group bg-card border border-card-border rounded-xl p-8 text-center shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`inline-flex p-6 rounded-full ${audience.gradient} mb-6 mx-auto shadow-button`}>
                <audience.icon className="h-12 w-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-2 text-card-foreground group-hover:text-primary-glow transition-colors">
                {audience.title}
              </h3>
              
              <p className="text-muted-foreground text-sm font-medium mb-4 opacity-80">
                {audience.subtitle}
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};