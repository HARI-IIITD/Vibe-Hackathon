import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SituationGroup } from "@/data/vaccineData";
import { Shield } from "lucide-react";

interface SituationCardProps {
  group: SituationGroup;
  index: number;
}

const SituationCard = ({ group, index }: SituationCardProps) => {
  return (
    <div 
      className="animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Accordion type="single" collapsible>
        <AccordionItem value={group.id} className="border-none">
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden card-hover">
            <AccordionTrigger className="px-5 py-4 hover:no-underline [&[data-state=open]>div>.icon-container]:bg-primary [&[data-state=open]>div>.icon-container]:text-primary-foreground">
              <div className="flex items-center gap-4 w-full">
                <div className="icon-container w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-2xl shrink-0 transition-colors">
                  {group.icon}
                </div>
                <div className="flex-1 text-left min-w-0">
                  <h3 className="font-display font-semibold text-foreground truncate">
                    {group.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {group.vaccines.length} vaccines
                  </p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="px-5 pb-5 space-y-3">
                {group.vaccines.map((vaccine, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-accent/30"
                  >
                    <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {vaccine.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {vaccine.protectsAgainst}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SituationCard;
