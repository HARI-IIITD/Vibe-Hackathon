export interface Vaccine {
  name: string;
  protectsAgainst: string;
  importance?: string;
}

export interface AgeGroup {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  vaccines: Vaccine[];
}

export interface SituationGroup {
  id: string;
  title: string;
  icon: string;
  vaccines: Vaccine[];
}

export const ageGroups: AgeGroup[] = [
  {
    id: "at-birth",
    title: "At Birth (0–24 hours)",
    shortTitle: "At Birth",
    description: "Essential vaccines given within the first day of life to protect your newborn from serious diseases.",
    icon: "👶",
    vaccines: [
      { name: "BCG", protectsAgainst: "Tuberculosis (TB), especially severe TB in children", importance: "Prevents life-threatening TB infections in infants" },
      { name: "Hepatitis B (Birth dose)", protectsAgainst: "Hepatitis B infection → liver disease & cancer", importance: "Early protection prevents chronic liver disease" },
      { name: "OPV-0 (Polio)", protectsAgainst: "Polio (paralysis-causing viral disease)", importance: "First step toward complete polio protection" },
    ],
  },
  {
    id: "infants-toddlers",
    title: "Infants & Toddlers (6 weeks – 24 months)",
    shortTitle: "Infants & Toddlers",
    description: "Critical vaccines during early childhood to build strong immunity against common childhood diseases.",
    icon: "🍼",
    vaccines: [
      { name: "Pentavalent (1, 2, 3)", protectsAgainst: "Diphtheria, Whooping Cough, Tetanus, Hepatitis B, Hib (pneumonia & meningitis)", importance: "Five-in-one protection for major childhood diseases" },
      { name: "OPV (1, 2, 3, Booster)", protectsAgainst: "Polio", importance: "Multiple doses ensure complete polio immunity" },
      { name: "IPV-1", protectsAgainst: "Polio (injectable protection)", importance: "Injectable polio vaccine for added protection" },
      { name: "Rotavirus (1, 2)", protectsAgainst: "Severe diarrhea & dehydration", importance: "Prevents dangerous dehydration in infants" },
      { name: "PCV (1 + Booster)", protectsAgainst: "Pneumonia, meningitis, blood infections", importance: "Guards against serious bacterial infections" },
      { name: "MR-1 (Measles–Rubella)", protectsAgainst: "Measles (fever, rash, pneumonia), Rubella (birth defects)", importance: "Given at 9 months for early measles protection" },
      { name: "JE-1 & JE-2 (endemic areas)", protectsAgainst: "Japanese Encephalitis (brain infection)", importance: "Essential in regions where JE is common" },
      { name: "MR-2", protectsAgainst: "Measles & Rubella (16-24 months)", importance: "Booster dose for long-lasting immunity" },
      { name: "DPT Booster-1", protectsAgainst: "Diphtheria, Whooping Cough, Tetanus", importance: "Strengthens immunity at 16-24 months" },
      { name: "Vitamin A", protectsAgainst: "Night blindness & weak immunity", importance: "Supportive dose for healthy development" },
    ],
  },
  {
    id: "children",
    title: "Children (5–6 Years)",
    shortTitle: "Children",
    description: "School-entry vaccines to boost immunity before your child enters a group learning environment.",
    icon: "🧒",
    vaccines: [
      { name: "DPT Booster-2", protectsAgainst: "Diphtheria, Whooping Cough, Tetanus", importance: "Pre-school booster for continued protection" },
    ],
  },
  {
    id: "adolescents",
    title: "Adolescents (10–16 Years)",
    shortTitle: "Adolescents",
    description: "Booster vaccines during teenage years to maintain protection into adulthood.",
    icon: "🧑‍🎓",
    vaccines: [
      { name: "Td (10 Years)", protectsAgainst: "Tetanus & Diphtheria", importance: "Maintains protection through adolescence" },
      { name: "Td Booster (16 Years)", protectsAgainst: "Tetanus & Diphtheria", importance: "Long-term protection into adulthood" },
    ],
  },
  {
    id: "adults",
    title: "Adults (18–59 Years)",
    shortTitle: "Adults",
    description: "Vaccines for adults to maintain immunity and prevent diseases that can affect work and family life.",
    icon: "👨‍💼",
    vaccines: [
      { name: "Td / TT (every 10 years)", protectsAgainst: "Tetanus (lockjaw) & diphtheria", importance: "Regular boosters prevent tetanus from injuries" },
      { name: "Hepatitis B", protectsAgainst: "Liver infection, cirrhosis, liver cancer", importance: "Protects against workplace and lifestyle exposure" },
      { name: "MMR", protectsAgainst: "Measles, Mumps, Rubella", importance: "Catch-up vaccine if missed during childhood" },
      { name: "Influenza (Flu)", protectsAgainst: "Seasonal flu, severe lung infection", importance: "Yearly vaccine for flu prevention" },
      { name: "COVID-19 Booster", protectsAgainst: "Severe COVID, hospitalization, death", importance: "Updated protection against current variants" },
    ],
  },
  {
    id: "pregnant-women",
    title: "Pregnant Women",
    shortTitle: "Pregnant Women",
    description: "Safe vaccines during pregnancy that protect both mother and baby from serious infections.",
    icon: "🤰",
    vaccines: [
      { name: "Td / TT", protectsAgainst: "Tetanus in mother and newborn", importance: "Prevents neonatal tetanus, a serious newborn disease" },
      { name: "Tdap (Whooping Cough)", protectsAgainst: "Whooping cough in newborn", importance: "Passes antibodies to baby before birth" },
      { name: "Influenza", protectsAgainst: "Flu complications during pregnancy", importance: "Pregnancy increases flu complication risk" },
      { name: "COVID-19", protectsAgainst: "Severe COVID during pregnancy", importance: "Safe and recommended during pregnancy" },
    ],
  },
  {
    id: "senior-citizens",
    title: "Senior Citizens (60+ Years)",
    shortTitle: "Senior Citizens",
    description: "Important vaccines for older adults to strengthen immunity and prevent age-related complications.",
    icon: "👴",
    vaccines: [
      { name: "Influenza (Yearly)", protectsAgainst: "Seasonal flu, pneumonia", importance: "Aging weakens natural immunity to flu" },
      { name: "Pneumococcal", protectsAgainst: "Pneumonia, meningitis, blood infections", importance: "Critical protection for elderly lungs" },
      { name: "COVID-19 Booster", protectsAgainst: "Severe COVID, hospitalization", importance: "Higher risk group needs updated protection" },
      { name: "Td / TT", protectsAgainst: "Tetanus from injuries", importance: "Continues protection from common injuries" },
      { name: "Shingles (Herpes Zoster)", protectsAgainst: "Shingles, painful nerve infection", importance: "Prevents reactivation of childhood chickenpox virus" },
    ],
  },
];

export const situationGroups: SituationGroup[] = [
  {
    id: "pregnancy",
    title: "Pregnancy",
    icon: "🤰",
    vaccines: [
      { name: "Td / Tdap", protectsAgainst: "Protects mother & newborn from tetanus, diphtheria, pertussis" },
      { name: "Influenza", protectsAgainst: "Prevents severe flu complications" },
      { name: "COVID-19", protectsAgainst: "Protects mother & baby" },
    ],
  },
  {
    id: "school-going",
    title: "School-Going Children",
    icon: "🧒",
    vaccines: [
      { name: "MMR", protectsAgainst: "Prevents measles, mumps, rubella" },
      { name: "DPT Booster", protectsAgainst: "Maintains immunity" },
      { name: "Varicella", protectsAgainst: "Chickenpox prevention" },
      { name: "Typhoid", protectsAgainst: "Common in school environments" },
    ],
  },
  {
    id: "college-students",
    title: "College Students / Young Adults",
    icon: "🎓",
    vaccines: [
      { name: "Td / Tdap", protectsAgainst: "Long-term protection" },
      { name: "MMR", protectsAgainst: "If missed earlier" },
      { name: "Hepatitis B", protectsAgainst: "Hostel & close-contact risk" },
      { name: "HPV", protectsAgainst: "Prevents cervical & other cancers" },
    ],
  },
  {
    id: "travel",
    title: "Travel (Domestic & International)",
    icon: "✈️",
    vaccines: [
      { name: "JE (Japanese Encephalitis)", protectsAgainst: "Hill / forest travel in endemic areas" },
      { name: "Typhoid", protectsAgainst: "Poor sanitation areas" },
      { name: "Yellow Fever, Meningococcal", protectsAgainst: "International travel (country rules apply)" },
      { name: "Influenza, COVID Booster", protectsAgainst: "All travel situations" },
    ],
  },
  {
    id: "healthcare-workers",
    title: "Healthcare Workers",
    icon: "🏥",
    vaccines: [
      { name: "Hepatitis B", protectsAgainst: "Blood exposure" },
      { name: "Influenza", protectsAgainst: "Patient safety" },
      { name: "MMR", protectsAgainst: "Prevent outbreaks" },
      { name: "COVID-19", protectsAgainst: "High-risk exposure" },
      { name: "Varicella", protectsAgainst: "Prevent hospital spread" },
    ],
  },
  {
    id: "high-risk-jobs",
    title: "High-Risk Occupations",
    icon: "🔧",
    vaccines: [
      { name: "Hepatitis A, Typhoid", protectsAgainst: "Sanitation workers" },
      { name: "Hepatitis B, Rabies", protectsAgainst: "Lab workers" },
      { name: "Rabies", protectsAgainst: "Animal handlers" },
      { name: "Td", protectsAgainst: "Construction workers" },
    ],
  },
  {
    id: "chronic-illness",
    title: "Chronic Illness (Diabetes, Heart, Lung, Kidney)",
    icon: "💊",
    vaccines: [
      { name: "Influenza", protectsAgainst: "Prevent severe infection" },
      { name: "Pneumococcal", protectsAgainst: "Prevent pneumonia" },
      { name: "COVID Booster", protectsAgainst: "High risk" },
      { name: "Hepatitis B", protectsAgainst: "Added protection" },
    ],
  },
  {
    id: "animal-bite",
    title: "Animal Bite / Exposure",
    icon: "🐕",
    vaccines: [
      { name: "Rabies vaccine", protectsAgainst: "Dog / cat bite" },
      { name: "Td / TT", protectsAgainst: "Tetanus-prone wound" },
    ],
  },
  {
    id: "flood-disaster",
    title: "Natural Disasters / Flood Areas",
    icon: "🌊",
    vaccines: [
      { name: "Hepatitis A", protectsAgainst: "Contaminated water" },
      { name: "Typhoid", protectsAgainst: "Poor sanitation" },
      { name: "Td / TT", protectsAgainst: "Injuries" },
    ],
  },
  {
    id: "immunocompromised",
    title: "Immunocompromised (Doctor Guided)",
    icon: "🩺",
    vaccines: [
      { name: "Influenza", protectsAgainst: "Safe option (inactivated)" },
      { name: "Pneumococcal", protectsAgainst: "Severe infection risk" },
      { name: "Hepatitis B", protectsAgainst: "Added protection" },
    ],
  },
];

export const faqData = [
  {
    question: "Are vaccines safe?",
    answer: "Yes, vaccines are thoroughly tested and monitored for safety. They go through rigorous clinical trials before approval and continue to be monitored even after they're in use. Side effects are usually mild and temporary, like soreness at the injection site or a slight fever.",
  },
  {
    question: "What if I missed a dose?",
    answer: "Don't worry! It's never too late to catch up on missed vaccines. Contact your healthcare provider to discuss a catch-up schedule. For most vaccines, you don't need to restart the series—you can simply continue where you left off.",
  },
  {
    question: "Do adults need vaccines too?",
    answer: "Absolutely! Adults need vaccines to maintain immunity from childhood vaccinations, protect against diseases that are more common in adults, and stay healthy. Flu shots, tetanus boosters, and COVID-19 vaccines are especially important for adults.",
  },
  {
    question: "Are vaccines free at government centers?",
    answer: "Yes, many essential vaccines are provided free of cost at government vaccination centers in Pune. The National Immunization Programme covers vaccines for children, pregnant women, and certain adult vaccines. Visit your nearest center for more details.",
  },
  {
    question: "Can I take multiple vaccines at once?",
    answer: "Yes, receiving multiple vaccines at the same visit is safe and effective. Your immune system can handle multiple vaccines, and this approach is often recommended to ensure timely protection. Your healthcare provider will guide you on the best schedule.",
  },
];

export const puneAreas = [
  "Aundh",
  "Baner",
  "Bhosari",
  "Chinchwad",
  "Dhanori",
  "Dhayari",
  "Hadapsar",
  "Khadki",
  "Kharadi",
  "Kondhwa",
  "Koregaon Park",
  "Mundhwa",
  "Pimpri",
  "Shivajinagar",
  "Sinhagad Road",
  "Viman Nagar",
  "Wakad",
  "Warje",
  "Yerawada",
  "Other",
];
