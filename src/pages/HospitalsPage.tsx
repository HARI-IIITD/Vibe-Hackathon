import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, ExternalLink, Search, ArrowLeft } from "lucide-react";
import hospitalsData from "@/data/pune_hospitals.json";

interface Hospital {
  hospital_name: string;
  area: string;
  helpline: string;
  location_link: string;
}

const HospitalsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>("all");

  const hospitals = hospitalsData as Hospital[];

  const areas = useMemo(() => {
    const uniqueAreas = [...new Set(hospitals.map((h) => h.area))].sort();
    return uniqueAreas;
  }, [hospitals]);

  const filteredHospitals = useMemo(() => {
    return hospitals.filter((hospital) => {
      const matchesSearch =
        hospital.hospital_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.area.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesArea = selectedArea === "all" || hospital.area === selectedArea;
      return matchesSearch && matchesArea;
    });
  }, [hospitals, searchQuery, selectedArea]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-12 px-6 gradient-hero">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Vaccination Centers in Pune
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Find government vaccination centers near you. All centers provide free vaccines under the National Immunization Programme.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 border-b border-border bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by hospital name or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedArea} onValueChange={setSelectedArea}>
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Filter by area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Areas</SelectItem>
                {areas.map((area) => (
                  <SelectItem key={area} value={area}>
                    {area}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Showing {filteredHospitals.length} of {hospitals.length} centers
          </p>
        </div>
      </section>

      {/* Hospitals Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {filteredHospitals.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hospitals found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredHospitals.map((hospital, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-5 border border-border/50 card-hover animate-fade-in"
                  style={{ animationDelay: `${(index % 12) * 0.05}s` }}
                >
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    {hospital.hospital_name}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span>{hospital.area}</span>
                    </div>

                    {hospital.helpline && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <a
                          href={`tel:${hospital.helpline}`}
                          className="hover:text-primary transition-colors"
                        >
                          {hospital.helpline}
                        </a>
                      </div>
                    )}

                    {hospital.location_link && (
                      <a
                        href={hospital.location_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline mt-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View on Map
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HospitalsPage;
