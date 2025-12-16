import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/vaccineData";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 px-6 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 mb-4">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border-none"
            >
              <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
                <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
                  <span className="font-display font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="px-6 pb-5">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
