import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Rocket } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 h-32 w-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 h-40 w-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 w-60 bg-accent/10 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-6 rounded-full bg-gradient-primary shadow-glow animate-glow-pulse">
              <Rocket className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent leading-tight">
            Don't reinvent the wheel.
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Supercharge your game/app growth with AI-powered retention, engagement, and payments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="hero" size="xl" className="group shadow-glow">
              <Zap className="h-6 w-6" />
              Start Free Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="h-5 w-5" />
              Book a Demo
            </Button>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col items-center gap-3 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="h-3 w-3 bg-success rounded-full animate-glow-pulse"></div>
              <span className="text-muted-foreground">No setup fees</span>
            </div>
            <div className="flex flex-col items-center gap-3 animate-scale-in" style={{animationDelay: '0.4s'}}>
              <div className="h-3 w-3 bg-primary rounded-full animate-glow-pulse"></div>
              <span className="text-muted-foreground">Deploy in minutes</span>
            </div>
            <div className="flex flex-col items-center gap-3 animate-scale-in" style={{animationDelay: '0.6s'}}>
              <div className="h-3 w-3 bg-secondary rounded-full animate-glow-pulse"></div>
              <span className="text-muted-foreground">Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};