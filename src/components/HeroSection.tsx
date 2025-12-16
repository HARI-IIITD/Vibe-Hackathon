import { Syringe, Shield, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in">
              Protect Today.{" "}
              <span className="text-primary">Prevent Tomorrow.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Vaccines for every stage of life. Trusted information for Pune's families.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Safe & Tested</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-medium">Government Approved</span>
              </div>
            </div>
          </div>

          {/* Syringe Illustration */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-accent/40 animate-pulse-soft" />
              
              {/* Syringe container */}
              <div className="absolute inset-4 rounded-full bg-card shadow-soft flex items-center justify-center">
                <div className="relative animate-syringe">
                  <Syringe className="w-24 h-24 md:w-32 md:h-32 text-primary transform rotate-45" />
                  
                  {/* Liquid effect */}
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-16 rounded-full bg-gradient-to-b from-primary/30 to-primary/60 animate-liquid blur-sm"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 right-4 px-3 py-1.5 bg-card rounded-full shadow-card animate-float" style={{ animationDelay: "0s" }}>
                <span className="text-xs font-medium text-primary">💉 BCG</span>
              </div>
              <div className="absolute top-1/4 -left-4 px-3 py-1.5 bg-card rounded-full shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
                <span className="text-xs font-medium text-primary">🛡️ Safe</span>
              </div>
              <div className="absolute bottom-8 -right-2 px-3 py-1.5 bg-card rounded-full shadow-card animate-float" style={{ animationDelay: "1s" }}>
                <span className="text-xs font-medium text-primary">✓ Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
