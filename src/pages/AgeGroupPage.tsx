import { useParams, Link, Navigate } from "react-router-dom";
import { ageGroups } from "@/data/vaccineData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InterestForm from "@/components/InterestForm";
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";

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
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Vaccines List */}
            <div className="lg:col-span-3 space-y-4">
              <h2 className="font-display font-semibold text-xl text-foreground mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Recommended Vaccines
              </h2>

              {group.vaccines.map((vaccine, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-5 border border-border/50 card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {vaccine.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="font-medium">Protects against:</span>{" "}
                        {vaccine.protectsAgainst}
                      </p>
                      {vaccine.importance && (
                        <p className="text-sm text-primary/80 bg-accent/50 px-3 py-1.5 rounded-lg inline-block">
                          {vaccine.importance}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interest Form */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <InterestForm ageGroup={group.id} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgeGroupPage;
