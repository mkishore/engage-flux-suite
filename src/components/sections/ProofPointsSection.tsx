import { TrendingDown, TrendingUp, Globe, ArrowRight } from "lucide-react";

export const ProofPointsSection = () => {
  const proofPoints = [
    {
      icon: TrendingDown,
      metric: "25%",
      title: "Churn Reduction",
      description: "Teams using our suite reduced churn by 25% in 30 days",
      color: "text-success-glow",
      bgColor: "bg-success/10"
    },
    {
      icon: TrendingUp,
      metric: "2-3x",
      title: "ARPU Uplift",
      description: "Clients saw 2–3x uplift in ARPU through AI-driven offers",
      color: "text-primary-glow",
      bgColor: "bg-primary/10"
    },
    {
      icon: Globe,
      metric: "10+",
      title: "Global Markets",
      description: "Integrated in over 10 markets with Stripe, Razorpay, and Coinbase Commerce",
      color: "text-secondary-glow",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Proven Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real impact from teams who've transformed their growth with our AI-powered platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {proofPoints.map((proof, index) => (
            <div 
              key={index}
              className="group text-center animate-scale-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="bg-card border border-card-border rounded-xl p-8 h-full shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-full ${proof.bgColor} mb-6`}>
                  <proof.icon className={`h-8 w-8 ${proof.color}`} />
                </div>
                
                <div className={`text-4xl font-bold mb-2 ${proof.color}`}>
                  {proof.metric}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {proof.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {proof.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-card border border-card-border rounded-xl p-8 text-center shadow-card animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-muted-foreground">
              <span className="font-semibold">Trusted by:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-gradient-primary rounded"></div>
                <span>Game Studios</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-gradient-secondary rounded"></div>
                <span>Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 bg-gradient-accent rounded"></div>
                <span>Web3 Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};