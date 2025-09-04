import { CheckCircle, Rocket, Users, TrendingUp, DollarSign, Globe, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const BenefitsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const benefits = [
    {
      icon: Rocket,
      title: "Ship 10x Faster",
      description: "Go live in 48 hours, not 6 months",
      color: "text-primary-glow",
      metric: "10x faster deployment"
    },
    {
      icon: Users,
      title: "Retention Boost",
      description: "AI-driven personalization keeps users hooked",
      color: "text-secondary-glow",
      metric: "+35% retention rates"
    },
    {
      icon: TrendingUp,
      title: "Revenue Explosion",
      description: "Smart upsells & payment optimization",
      color: "text-success-glow",
      metric: "+150% ARPU increase"
    },
    {
      icon: DollarSign,
      title: "Cost Crusher",
      description: "Replace expensive tool stack with one platform",
      color: "text-accent-glow",
      metric: "Save $50k+/year"
    },
    {
      icon: Globe,
      title: "Global Beast",
      description: "Scale to any market instantly",
      color: "text-primary-glow",
      metric: "200+ countries ready"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/10 via-background to-muted/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 bg-primary/5 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold mb-6 shadow-glow animate-glow-pulse">
            <Zap className="h-4 w-4" />
            Proven Results
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent">
            Why Winners Choose ScaleCraft
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join <span className="font-bold text-foreground">1,000+ teams</span> who've transformed their growth with battle-tested AI systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group text-center transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{transitionDelay: `${index * 150}ms`}}
            >
              <div className="bg-card border border-card-border rounded-xl p-6 h-full shadow-card hover:shadow-glow transition-all duration-500 group-hover:border-primary/30 relative overflow-hidden">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gradient-primary shadow-button animate-float group-hover:animate-glow-pulse">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className={`text-xs font-bold ${benefit.color} mb-2 opacity-80`}>
                      {benefit.metric}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary-glow transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="flex justify-center mt-4">
                    <CheckCircle className={`h-5 w-5 ${benefit.color} animate-glow-pulse`} />
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