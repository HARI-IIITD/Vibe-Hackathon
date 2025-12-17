import { Shield, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden bg-background">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/background/background.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/88" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl animate-pulse-soft" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-center max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in">
              Protect Today.{" "}
              <span className="text-primary">Prevent Tomorrow.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Vaccines for every stage of life. Trusted information for Pune's families.
            </p>
            <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground">
                
                
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 text-accent-foreground">
               
                
              </div>
            </div>
          </div>

          {/* Vaccine Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-accent/30" />
              
              {/* Vaccine image container */}
              <div className="absolute inset-4 rounded-full bg-card shadow-soft flex items-center justify-center overflow-hidden animate-syringe">
                <img 
                  src="/Vaccine.jpeg" 
                  alt="Vaccine" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Static badges */}
              <div className="absolute -top-2 right-4 px-3 py-1.5 bg-card rounded-full shadow-card">
                <span className="text-xs font-medium text-primary">💉 BCG</span>
              </div>
              <div className="absolute top-1/4 -left-4 px-3 py-1.5 bg-card rounded-full shadow-card">
                <span className="text-xs font-medium text-primary">🛡️ Safe</span>
              </div>
              <div className="absolute bottom-8 -right-2 px-3 py-1.5 bg-card rounded-full shadow-card">
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
