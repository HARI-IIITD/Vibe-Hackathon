import { useParams, Link, Navigate } from "react-router-dom";
import { ageGroups } from "@/data/vaccineData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveSyringeCard from "@/components/InteractiveSyringeCard";
import { ArrowLeft, Shield } from "lucide-react";

const AgeGroupPage = () => {
  const { id } = useParams<{ id: string }>();
  const group = ageGroups.find((g) => g.id === id);

  if (!group) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-12 px-6 gradient-hero">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl">
              {group.icon}
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                {group.title}
              </h1>
              <p className="text-muted-foreground">
                {group.vaccines.length} recommended vaccines
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">
            {group.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Vaccines List */}
          <div className="space-y-4">
            <h2 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Recommended Vaccines
            </h2>

            {group.vaccines.map((vaccine, index) => (
              <InteractiveSyringeCard 
                key={index} 
                vaccine={vaccine} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgeGroupPage;
