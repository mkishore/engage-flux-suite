import { AlertTriangle, Target, Zap } from "lucide-react";

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <h2 className="text-3xl font-bold text-foreground">The Problem</h2>
            </div>
            <div className="bg-card border border-card-border rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-semibold mb-4 text-card-foreground">
                Building engagement systems is slow, expensive, and complex.
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Most teams spend <span className="text-destructive font-semibold">months coding</span> offers, 
                loyalty programs, quests, and payment flows — only to end up with clunky, 
                hard-to-scale systems that can't adapt to user behavior.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-success" />
              <h2 className="text-3xl font-bold text-foreground">Our Solution</h2>
            </div>
            <div className="bg-gradient-card border border-card-border rounded-xl p-8 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-6 w-6 text-primary-glow" />
                <h3 className="text-2xl font-semibold text-card-foreground">
                  AI Game & App Suite
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A ready-made, AI-powered growth engine that adapts to your users and scales with your business.
              </p>
              <div className="space-y-4">
                {[
                  "Deploy engagement systems in days, not months",
                  "AI automatically optimizes for each user segment",
                  "One platform replaces multiple fragmented tools",
                  "Global scale with built-in localization"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-success rounded-full animate-glow-pulse" style={{animationDelay: `${index * 0.2}s`}}></div>
                    <span className="text-card-foreground">{benefit}</span>
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