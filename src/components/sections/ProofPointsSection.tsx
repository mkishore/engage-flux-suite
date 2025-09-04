import { TrendingUp, Users, Globe2, Award, Target, Zap, TrendingDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProofPointsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const proofPoints = [
    {
      icon: TrendingDown,
      metric: "25%",
      title: "Churn Reduction",
      description: "Teams cut churn by 25% in first 30 days",
      color: "text-success-glow",
      bgColor: "bg-success/10"
    },
    {
      icon: TrendingUp,
      metric: "3x",
      title: "ARPU Boost",
      description: "AI-driven offers deliver 200-300% ARPU uplift",
      color: "text-primary-glow",
      bgColor: "bg-primary/10"
    },
    {
      icon: Globe2,
      metric: "10+",
      title: "Global Markets",
      description: "Live in 10+ markets with Stripe, Razorpay, Coinbase",
      color: "text-secondary-glow",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Users,
      metric: "1M+",
      title: "Users Powered",
      description: "Over 1 million users engaged daily across platforms",
      color: "text-accent-glow",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 h-2 w-2 bg-primary/30 rounded-full animate-glow-pulse"></div>
        <div className="absolute top-20 right-1/3 h-3 w-3 bg-secondary/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-1/3 h-4 w-4 bg-accent/25 rounded-full animate-glow-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 right-1/4 h-2 w-2 bg-success/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-white text-sm font-semibold mb-6 shadow-glow animate-glow-pulse">
            <Award className="h-4 w-4" />
            Battle-Tested Results
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent-glow to-foreground bg-clip-text text-transparent">
            Numbers Don't Lie
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real teams. Real growth. Real results you can <span className="font-bold text-foreground">bank on</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {proofPoints.map((proof, index) => (
            <div 
              key={index}
              className={`group relative text-center transition-all duration-700 hover:scale-105 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <div className="bg-card border border-card-border rounded-2xl p-8 h-full shadow-card hover:shadow-glow transition-all duration-500 relative overflow-hidden group-hover:border-primary/30">
                {/* Hover glow background */}
                <div className={`absolute inset-0 ${proof.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-full ${proof.bgColor} border border-card-border group-hover:animate-glow-pulse`}>
                      <proof.icon className={`h-8 w-8 ${proof.color}`} />
                    </div>
                  </div>
                  
                  {/* Metric */}
                  <div className={`text-4xl md:text-5xl font-black mb-2 ${proof.color} group-hover:animate-glow-pulse`}>
                    {proof.metric}
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-primary-glow transition-colors">
                    {proof.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {proof.description}
                  </p>
                  
                  {/* Pulse indicator */}
                  <div className="flex justify-center mt-6">
                    <div className={`h-2 w-2 rounded-full ${proof.bgColor} animate-glow-pulse`} style={{animationDelay: `${index * 0.3}s`}}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators with enhanced animation */}
        <div 
          className={`bg-card border border-card-border rounded-xl p-8 text-center shadow-card transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-muted-foreground">
              <span className="font-semibold">Powering growth for:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="h-8 w-8 bg-gradient-primary rounded group-hover:animate-glow-pulse"></div>
                <span className="group-hover:text-primary-glow transition-colors">Game Studios</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="h-8 w-8 bg-gradient-secondary rounded group-hover:animate-glow-pulse"></div>
                <span className="group-hover:text-secondary-glow transition-colors">Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="h-8 w-8 bg-gradient-accent rounded group-hover:animate-glow-pulse"></div>
                <span className="group-hover:text-accent-glow transition-colors">Web3 Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA hint */}
        <div 
          className={`text-center mt-12 transition-all duration-1000 delay-1500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/20 border border-card-border text-muted-foreground text-sm hover:bg-primary/10 hover:border-primary/30 hover:text-primary-glow transition-all duration-300 cursor-pointer">
            <Zap className="h-4 w-4" />
            Join the winning teams
          </div>
        </div>
      </div>
    </section>
  );
};