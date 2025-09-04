import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Gamepad2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Gaming Suite Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Gamepad2 className="absolute top-20 left-20 h-8 w-8 text-primary-glow animate-float opacity-60" />
        <Zap className="absolute top-32 right-32 h-6 w-6 text-secondary-glow animate-float opacity-40" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-32 left-32 h-4 w-4 bg-accent rounded-full animate-glow-pulse opacity-50" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-40 right-20 h-3 w-3 bg-success rounded-full animate-glow-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-primary text-white text-sm font-semibold shadow-glow">
              <Zap className="h-4 w-4" />
              AI-Powered Growth Suite
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-foreground bg-clip-text text-transparent leading-tight">
            Scale engagement.
            <br />
            <span className="text-secondary-glow">Boost retention.</span>
            <br />
            <span className="text-accent-glow">Unlock revenue.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Your all-in-one AI growth suite for games and apps. Deploy engagement systems in days, not months.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Start Free Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="group">
              <Play className="h-5 w-5" />
              Book a Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 bg-success rounded-full animate-glow-pulse"></div>
              Deploy in days, not months
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 bg-secondary rounded-full animate-glow-pulse" style={{animationDelay: '0.5s'}}></div>
              AI-powered personalization
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="h-2 w-2 bg-accent rounded-full animate-glow-pulse" style={{animationDelay: '1s'}}></div>
              Global scale ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};