import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgeGroupCard from "@/components/AgeGroupCard";
import SituationCard from "@/components/SituationCard";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import { ageGroups, situationGroups } from "@/data/vaccineData";
import { Calendar, Activity } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Main Content - Two Columns */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Age-Wise Vaccines */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Vaccines by Age Group
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Click to learn more
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {ageGroups.map((group, index) => (
                  <AgeGroupCard key={group.id} group={group} index={index} />
                ))}
              </div>
            </div>

            {/* Situation-Wise Vaccines */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    Vaccines by Life Situation
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Expand to view vaccines
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {situationGroups.map((group, index) => (
                  <SituationCard key={group.id} group={group} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
