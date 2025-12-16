import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { AgeGroup } from "@/data/vaccineData";

interface AgeGroupCardProps {
  group: AgeGroup;
  index: number;
}

const AgeGroupCard = ({ group, index }: AgeGroupCardProps) => {
  return (
    <Link
      to={`/age/${group.id}`}
      className="block group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="card-hover bg-card rounded-2xl p-5 border border-border/50 gradient-card">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-2xl shrink-0">
            {group.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {group.shortTitle}
            </h3>
            <p className="text-sm text-muted-foreground">
              {group.vaccines.length} vaccines
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
        </div>
      </div>
    </Link>
  );
};

export default AgeGroupCard;
