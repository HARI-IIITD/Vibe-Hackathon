import { useParams, Link, Navigate } from "react-router-dom";
import { ageGroups } from "@/data/vaccineData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InterestForm from "@/components/InterestForm";
import { ArrowLeft, Shield, CheckCircle, Info, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

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
                <Dialog key={index}>
                  <div
                    className="bg-card rounded-2xl p-5 border border-border/50 card-hover animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <DialogTrigger asChild>
                            <button className="font-display font-semibold text-foreground underline-offset-4 hover:underline text-left">
                              {vaccine.name}
                            </button>
                          </DialogTrigger>
                          <Info className="w-4 h-4 text-primary" />
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          <span className="font-medium">Protects against:</span>{" "}
                          {vaccine.protectsAgainst}
                        </p>
                        {"friendlyInfo" in vaccine && vaccine.friendlyInfo && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {vaccine.friendlyInfo}
                          </p>
                        )}
                        {vaccine.importance && (
                          <p className="text-sm text-primary/80 bg-accent/50 px-3 py-1.5 rounded-lg inline-block mb-2">
                            {vaccine.importance}
                          </p>
                        )}
                        <Link
                          to="/hospitals"
                          className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline mt-2"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          Find a vaccination center
                        </Link>
                      </div>
                    </div>
                  </div>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{vaccine.name}</DialogTitle>
                      <DialogDescription>
                        {vaccine.protectsAgainst}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-3 text-sm">
                      {(vaccine.route || vaccine.site) && (
                        <div>
                          <p className="font-semibold text-foreground">
                            How is it given?
                          </p>
                          <p className="text-muted-foreground">
                            {vaccine.route && <span>{vaccine.route}</span>}
                            {vaccine.route && vaccine.site && <span> · </span>}
                            {vaccine.site && <span>{vaccine.site}</span>}
                          </p>
                        </div>
                      )}

                      {vaccine.longTermBenefit && (
                        <div>
                          <p className="font-semibold text-foreground">
                            Long-term benefit
                          </p>
                          <p className="text-muted-foreground">
                            {vaccine.longTermBenefit}
                          </p>
                        </div>
                      )}

                      {vaccine.commonSideEffects && (
                        <div>
                          <p className="font-semibold text-foreground">
                            Common, mild side effects
                          </p>
                          <p className="text-muted-foreground">
                            {vaccine.commonSideEffects}
                          </p>
                        </div>
                      )}

                      {vaccine.whenToSeeDoctor && (
                        <div>
                          <p className="font-semibold text-foreground">
                            When should you see a doctor?
                          </p>
                          <p className="text-muted-foreground">
                            {vaccine.whenToSeeDoctor}
                          </p>
                        </div>
                      )}

                      {vaccine.riskIfNotTaken && (
                        <div>
                          <p className="font-semibold text-foreground">
                            If the vaccine is not taken
                          </p>
                          <p className="text-muted-foreground">
                            {vaccine.riskIfNotTaken}
                          </p>
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
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
