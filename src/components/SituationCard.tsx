import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SituationGroup } from "@/data/vaccineData";
import { Shield, Info } from "lucide-react";

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
                  <Dialog key={idx}>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-accent/30">
                      <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <DialogTrigger asChild>
                            <button className="font-medium text-foreground text-sm underline-offset-4 hover:underline text-left">
                              {vaccine.name}
                            </button>
                          </DialogTrigger>
                          <Info className="w-3 h-3 text-primary" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {vaccine.protectsAgainst}
                        </p>
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
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default SituationCard;
