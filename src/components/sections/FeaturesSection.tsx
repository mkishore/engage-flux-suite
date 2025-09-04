import { Bot, Trophy, Gift, CreditCard, Palette, Users, Target } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: "Automated Offer Generation",
      description: "AI designs offers that convert, personalized to each user segment with real-time optimization.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Trophy,
      title: "Quest & Challenge System",
      description: "Gamify your app with daily, weekly, and seasonal quests that drive engagement and retention.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Gift,
      title: "Loyalty & Rewards",
      description: "Keep users coming back with tiered loyalty programs, points, perks, and exclusive benefits.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: CreditCard,
      title: "Smart Payment Routing",
      description: "Reduce failed transactions & fees with intelligent, multi-provider payment optimization.",
      gradient: "bg-gradient-primary"
    },
    {
      icon: Palette,
      title: "Marketing Templates",
      description: "Generate stunning campaigns in minutes — emails, banners, store creatives, and social posts.",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Users,
      title: "Advanced Segmentation",
      description: "AI-powered user segmentation that automatically groups players by behavior, spending, and engagement patterns.",
      gradient: "bg-gradient-accent"
    },
    {
      icon: Target,
      title: "Deep Personalization",
      description: "Deliver hyper-personalized experiences with AI that adapts content, offers, and gameplay to individual users.",
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary-glow bg-clip-text text-transparent">
            Everything You Need to Grow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A complete AI-powered growth engine with all the tools you need to engage users and drive revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-card-border rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`inline-flex p-4 rounded-lg ${feature.gradient} mb-6`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-card-foreground group-hover:text-primary-glow transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};