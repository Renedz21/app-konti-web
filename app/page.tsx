import Navigation from "@/components/shared/navigation";
import AiAgentSection from "@/components/shared/sections/ai-agent";
import CtaSection from "@/components/shared/sections/cta-section";
import FeaturesSection from "@/components/shared/sections/features";
import HeroSection from "@/components/shared/sections/hero";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <div className="w-full bg-background">
      <Navigation isTermsPage={false} />
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <AiAgentSection />

      {/* How It Works Section */}
      <FeaturesSection />

      {/* Final CTA Section */}
      <CtaSection />

      <Footer />
    </div>
  );
}
