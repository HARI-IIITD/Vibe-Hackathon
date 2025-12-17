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
        <div className="max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-[3fr_3fr] gap-10">
            {/* Age-Wise Vaccines */}
            <div className="bg-card rounded-2xl border border-border/50 p-6">
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
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-3">
                  {ageGroups.slice(0, Math.ceil(ageGroups.length / 2)).map((group, index) => (
                    <AgeGroupCard key={group.id} group={group} index={index} />
                  ))}
                </div>
                <div className="space-y-3">
                  {ageGroups.slice(Math.ceil(ageGroups.length / 2)).map((group, index) => (
                    <AgeGroupCard key={group.id} group={group} index={index + Math.ceil(ageGroups.length / 2)} />
                  ))}
                </div>
              </div>
            </div>

            {/* Situation-Wise Vaccines */}
            <div className="bg-card rounded-2xl border border-border/50 p-6">
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
              <div className="grid md:grid-cols-2 gap-3">
                <div className="space-y-3">
                  {situationGroups.slice(0, Math.ceil(situationGroups.length / 2)).map((group, index) => (
                    <SituationCard key={group.id} group={group} index={index} />
                  ))}
                </div>
                <div className="space-y-3">
                  {situationGroups.slice(Math.ceil(situationGroups.length / 2)).map((group, index) => (
                    <SituationCard key={group.id} group={group} index={index + Math.ceil(situationGroups.length / 2)} />
                  ))}
                </div>
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
