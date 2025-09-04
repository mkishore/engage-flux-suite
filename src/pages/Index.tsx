import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ProofPointsSection } from "@/components/sections/ProofPointsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSolution />
      <FeaturesSection />
      <BenefitsSection />
      <AudienceSection />
      <ProofPointsSection />
      <CTASection />
    </main>
  );
};

export default Index;