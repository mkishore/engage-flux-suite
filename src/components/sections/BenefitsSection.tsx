import { CheckCircle, Rocket, Users, TrendingUp, DollarSign, Globe } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: Rocket,
      title: "Faster GTM",
      description: "Deploy growth loops in days, not months",
      color: "text-primary-glow"
    },
    {
      icon: Users,
      title: "Higher Retention",
      description: "Personalized offers & loyalty systems keep players engaged",
      color: "text-secondary-glow"
    },
    {
      icon: TrendingUp,
      title: "More Revenue",
      description: "Optimized payments + upsell automation = higher ARPU",
      color: "text-success-glow"
    },
    {
      icon: DollarSign,
      title: "Lower Costs",
      description: "One suite replaces multiple fragmented tools",
      color: "text-accent-glow"
    },
    {
      icon: Globe,
      title: "Global Ready",
      description: "Scale across markets with localization & multi-currency support",
      color: "text-primary-glow"
    }
  ];

  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Teams Choose Our Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of teams who've accelerated their growth with our AI-powered platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center animate-scale-in hover:scale-105 transition-transform duration-300"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-card border border-card-border rounded-xl p-8 h-full shadow-card hover:shadow-glow transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-primary">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <CheckCircle className={`h-5 w-5 ${benefit.color}`} />
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};