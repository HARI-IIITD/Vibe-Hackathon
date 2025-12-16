import { Shield, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-6 gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent/30 blur-3xl animate-pulse-soft" />
      
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
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-accent/30" />
              
              {/* Syringe container */}
              <div className="absolute inset-4 rounded-full bg-card shadow-soft flex items-center justify-center animate-syringe">
                {/* Realistic Syringe SVG */}
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-32 h-32 md:w-40 md:h-40 transform rotate-45"
                >
                  {/* Syringe barrel */}
                  <rect 
                    x="35" y="20" width="30" height="50" 
                    rx="3" 
                    fill="hsl(var(--card))" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="2"
                  />
                  
                  {/* Measurement lines */}
                  <line x1="38" y1="30" x2="45" y2="30" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
                  <line x1="38" y1="40" x2="48" y2="40" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
                  <line x1="38" y1="50" x2="45" y2="50" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
                  <line x1="38" y1="60" x2="48" y2="60" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" />
                  
                  {/* Liquid inside */}
                  <rect 
                    x="37" y="45" width="26" height="23" 
                    rx="2" 
                    fill="hsl(var(--primary))" 
                    opacity="0.3"
                  />
                  
                  {/* Plunger handle */}
                  <rect 
                    x="40" y="8" width="20" height="6" 
                    rx="2" 
                    fill="hsl(var(--primary))" 
                  />
                  
                  {/* Plunger rod */}
                  <rect 
                    x="48" y="14" width="4" height="8" 
                    fill="hsl(var(--muted-foreground))"
                  />
                  
                  {/* Needle hub */}
                  <rect 
                    x="45" y="70" width="10" height="8" 
                    rx="1" 
                    fill="hsl(var(--muted))" 
                    stroke="hsl(var(--border))" 
                    strokeWidth="1"
                  />
                  
                  {/* Needle */}
                  <line 
                    x1="50" y1="78" x2="50" y2="95" 
                    stroke="hsl(var(--muted-foreground))" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                </svg>
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
