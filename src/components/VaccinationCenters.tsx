import { useState, useMemo } from "react";
import { MapPin, Phone, ExternalLink, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import hospitalsData from "@/data/pune_hospitals.json";

interface Hospital {
  hospital_name: string;
  area: string;
  helpline: string;
  location_link: string;
}

const VaccinationCenters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const hospitals = hospitalsData as Hospital[];

  const filteredHospitals = useMemo(() => {
    if (!searchTerm) return hospitals;
    const term = searchTerm.toLowerCase();
    return hospitals.filter(
      (h) =>
        h.hospital_name.toLowerCase().includes(term) ||
        h.area.toLowerCase().includes(term)
    );
  }, [hospitals, searchTerm]);

  const areas = useMemo(() => {
    return [...new Set(hospitals.map((h) => h.area))].sort();
  }, [hospitals]);

  return (
    <section id="centers" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Find a Center</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Government Vaccination Centers in Pune
          </h2>
          <p className="text-muted-foreground">
            {hospitals.length} verified centers across the city
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by hospital name or area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-11 py-6 rounded-xl border-border/50 bg-card"
            />
          </div>
        </div>

        {/* Area quick filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <button
            onClick={() => setSearchTerm("")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !searchTerm
                ? "bg-primary text-primary-foreground"
                : "bg-accent text-accent-foreground hover:bg-accent/80"
            }`}
          >
            All Areas
          </button>
          {areas.slice(0, 8).map((area) => (
            <button
              key={area}
              onClick={() => setSearchTerm(area)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                searchTerm === area
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground hover:bg-accent/80"
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredHospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-5 border border-border/50 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2">
                {hospital.hospital_name}
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{hospital.area}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <a
                    href={`tel:${hospital.helpline}`}
                    className="hover:text-primary transition-colors"
                  >
                    {hospital.helpline}
                  </a>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(
                  hospital.hospital_name + " " + hospital.area + " Pune"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary hover:underline"
              >
                Get Directions
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No centers found matching "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-2 text-primary hover:underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VaccinationCenters;
