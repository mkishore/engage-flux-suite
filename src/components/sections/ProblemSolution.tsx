import { AlertTriangle, Target, Zap, Clock, DollarSign } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ProblemSolution = () => {
  const { elementRef: problemRef, isVisible: problemVisible } = useScrollAnimation();
  const { elementRef: solutionRef, isVisible: solutionVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-32 w-32 bg-destructive/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 h-40 w-40 bg-success/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div 
            ref={problemRef}
            className={`transition-all duration-1000 ${
              problemVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-destructive/20 animate-glow-pulse">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Reality Check</h2>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                Your competition ships features in <span className="text-destructive">weeks</span>. 
                You're stuck for <span className="text-destructive font-black">months</span>.
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-card-foreground">6+ months</span> building basic loyalty systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <DollarSign className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-card-foreground">$200k+</span> in dev costs for clunky solutions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-card-foreground">Zero personalization</span> — one-size-fits-nobody approach
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div 
            ref={solutionRef}
            className={`transition-all duration-1000 delay-300 ${
              solutionVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-success/20 animate-glow-pulse">
                <Target className="h-8 w-8 text-success" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">The Game Changer</h2>
            </div>
            <div className="bg-gradient-card border border-card-border rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-8 w-8 text-primary-glow animate-glow-pulse" />
                <h3 className="text-2xl font-bold text-card-foreground">
                  ScaleCraft AI Suite
                </h3>
              </div>
              <p className="text-lg text-card-foreground font-medium mb-6 leading-relaxed">
                Deploy enterprise-grade growth systems in <span className="text-success-glow font-bold">days, not months</span>. 
                AI handles the complexity. You handle the success.
              </p>
              <div className="space-y-4">
                {[
                  { text: "Launch in 48 hours", icon: "⚡" },
                  { text: "AI personalizes for every user", icon: "🎯" },
                  { text: "Replace 5+ tools with one", icon: "🔧" },
                  { text: "Scale to 100M users instantly", icon: "🚀" }
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-4 p-3 rounded-lg bg-success/5 transition-all duration-500 ${
                      solutionVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                    }`}
                    style={{transitionDelay: `${600 + index * 100}ms`}}
                  >
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="text-card-foreground font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};