import { Syringe, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Syringe className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground">PuneVax</h3>
              <p className="text-xs text-muted-foreground">Vaccine Awareness for Pune</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            This website is for educational purposes only. Always consult healthcare professionals for medical advice.
          </p>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for Pune
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
