import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors overflow-hidden">
            <img 
              src="/Logo.jpeg" 
              alt="PuneVax Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-foreground">PuneVax</h1>
            <p className="text-xs text-muted-foreground">Vaccine Awareness</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/hospitals" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Find Centers
          </Link>
          <a 
            href="#faq" 
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
