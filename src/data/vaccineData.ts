export interface Vaccine {
  name: string;
  protectsAgainst: string;
  importance?: string;
  // Simple, friendly explanation in plain language (for rural / low-literacy users)
  friendlyInfo?: string;
  // How the vaccine is given: injection / oral drops, etc.
  route?: string;
  // Where on the body it is usually given
  site?: string;
  // How it helps in the long run / why it is important
  longTermBenefit?: string;
  // Common, usually mild side effects
  commonSideEffects?: string;
  // Warning signs: when to consult a doctor
  whenToSeeDoctor?: string;
  // What can happen if the vaccine is not taken
  riskIfNotTaken?: string;
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
      {
        name: "BCG",
        protectsAgainst: "Tuberculosis (TB), especially severe TB in children",
        importance: "Prevents life-threatening TB infections in infants",
        friendlyInfo:
          "This vaccine uses a very weak form of the TB germ that cannot cause TB. It simply teaches your baby's body how to fight TB early in life.",
        route: "Injection",
        site: "Usually given on the upper arm or shoulder of the newborn",
        longTermBenefit:
          "Greatly reduces the chance of severe TB in children, like TB of the brain or lungs.",
        commonSideEffects:
          "Small swelling or a tiny blister at the injection spot, later a small scar. Mild fever is possible.",
        whenToSeeDoctor:
          "If the swelling becomes very big, oozes pus for many weeks, or the baby seems very weak or very sick.",
        riskIfNotTaken:
          "Higher chance of serious TB, which can damage the lungs, brain and other organs and can be life‑threatening.",
      },
      {
        name: "Hepatitis B (Birth dose)",
        protectsAgainst: "Hepatitis B infection → liver disease & cancer",
        importance: "Early protection prevents chronic liver disease",
        friendlyInfo:
          "This vaccine contains only a small, purified part of the virus, not the whole virus. It cannot give Hepatitis B, but it safely builds strong liver protection.",
        route: "Injection",
        site: "Given on the thigh of the newborn (muscle injection)",
        longTermBenefit:
          "Protects the liver from Hepatitis B infection that can cause lifelong liver disease and liver cancer.",
        commonSideEffects:
          "Mild pain, redness or slight swelling at the injection site, low‑grade fever, baby may be a little fussy.",
        whenToSeeDoctor:
          "If the baby has very high fever, cries continuously and cannot be consoled, is very sleepy or difficult to wake up, or has breathing trouble.",
        riskIfNotTaken:
          "If the baby catches Hepatitis B early in life, there is a high chance of chronic liver damage, cirrhosis and liver cancer later.",
      },
      {
        name: "OPV-0 (Polio)",
        protectsAgainst: "Polio (paralysis-causing viral disease)",
        importance: "First step toward complete polio protection",
        friendlyInfo:
          "These 2–3 drops contain a very weak form of the polio virus. It does not cause paralysis; instead, it trains your baby’s body to fight polio all through life.",
        route: "Oral drops",
        site: "2–3 drops are put in the baby’s mouth on the tongue",
        longTermBenefit:
          "Protects the child from polio, a disease that can cause permanent weakness or paralysis of the legs and arms.",
        commonSideEffects:
          "Usually no side effects. Rarely mild loose motions or fever for a short time.",
        whenToSeeDoctor:
          "If the child has continuous vomiting, looks very weak, or you notice sudden weakness of any limb.",
        riskIfNotTaken:
          "Unprotected children can get polio from infected water or people, leading to life‑long paralysis and disability.",
      },
    ],
  },
  {
    id: "infants-toddlers",
    title: "Infants & Toddlers (6 weeks – 24 months)",
    shortTitle: "Infants & Toddlers",
    description: "Critical vaccines during early childhood to build strong immunity against common childhood diseases.",
    icon: "🍼",
    vaccines: [
      {
        name: "Pentavalent (1, 2, 3)",
        protectsAgainst:
          "Diphtheria, Whooping Cough, Tetanus, Hepatitis B, Hib (pneumonia & meningitis)",
        importance: "Five-in-one protection for major childhood diseases",
        friendlyInfo:
          "This is a 5‑in‑1 vaccine. It does not contain whole germs, only safe parts that cannot cause disease. It saves your child from many serious illnesses with a single injection.",
        route: "Injection",
        site: "Given on the front outer part of the thigh (muscle)",
        longTermBenefit:
          "Protects the child from diphtheria, whooping cough, tetanus, Hepatitis B and Hib infections that can cause pneumonia and meningitis.",
        commonSideEffects:
          "Mild fever, pain or swelling at injection site, temporary fussiness or sleepiness.",
        whenToSeeDoctor:
          "If fever is very high, the child has fits/convulsions, continuous crying for more than 3 hours, or seems very drowsy or limp.",
        riskIfNotTaken:
          "Without this vaccine, the child is open to serious infections like whooping cough, meningitis and tetanus, which can cause disability or death.",
      },
      {
        name: "OPV (1, 2, 3, Booster)",
        protectsAgainst: "Polio",
        importance: "Multiple doses ensure complete polio immunity",
        friendlyInfo:
          "Like the birth polio drops, these doses keep reminding the body how to fight polio. Taking all doses is important to keep the child safe from paralysis.",
        route: "Oral drops",
        site: "Drops are placed in the child’s mouth on the tongue",
        longTermBenefit:
          "Strengthens and maintains protection from polio throughout childhood.",
        commonSideEffects:
          "Usually none. Occasionally mild loose motions or slight fever.",
        whenToSeeDoctor:
          "If the child has severe vomiting, signs of dehydration (no urine, very dry mouth), or sudden weakness in any limb.",
        riskIfNotTaken:
          "Higher chance of getting polio, which can permanently weaken the legs/arms and affect normal life and work.",
      },
      {
        name: "IPV-1",
        protectsAgainst: "Polio (injectable protection)",
        importance: "Injectable polio vaccine for added protection",
        friendlyInfo:
          "This is an injection with killed (dead) polio virus. Because the virus is dead, it cannot cause polio, but it gives very strong and safe protection.",
        route: "Injection",
        site: "Usually given in the thigh (muscle)",
        longTermBenefit:
          "Adds extra, very strong protection against polio, even if the child later drinks contaminated water.",
        commonSideEffects:
          "Redness, pain or mild swelling where injected; low‑grade fever is possible.",
        whenToSeeDoctor:
          "If there is very high fever, severe allergic reaction like swelling of face or difficulty breathing (very rare).",
        riskIfNotTaken:
          "Polio risk remains higher, especially in areas where polio virus might still circulate.",
      },
      {
        name: "Rotavirus (1, 2)",
        protectsAgainst: "Severe diarrhea & dehydration",
        importance: "Prevents dangerous dehydration in infants",
        friendlyInfo:
          "Given as oral drops, this vaccine protects against severe loose motions. It helps avoid hospital admission and weakness from heavy water loss.",
        route: "Oral drops",
        site: "Drops are given in the baby’s mouth",
        longTermBenefit:
          "Reduces the chance of repeated severe diarrhea episodes that can lead to hospitalisation and poor growth.",
        commonSideEffects:
          "Mild loose motions, slight irritability or mild stomach discomfort for a short time.",
        whenToSeeDoctor:
          "If the child has very frequent watery stools, blood in stool, vomiting everything, sunken eyes or is very sleepy.",
        riskIfNotTaken:
          "Higher risk of severe diarrhea and dehydration, which can be life‑threatening in small children.",
      },
      {
        name: "PCV (1 + Booster)",
        protectsAgainst: "Pneumonia, meningitis, blood infections",
        importance: "Guards against serious bacterial infections",
        friendlyInfo:
          "This vaccine protects the lungs and brain from strong infections. It uses only a cleaned part of the germ, so it is safe and cannot cause pneumonia.",
        route: "Injection",
        site: "Given in the thigh (muscle) in infants; arm in older children",
        longTermBenefit:
          "Greatly lowers the chance of severe pneumonia, ear infections and meningitis, reducing hospital admissions.",
        commonSideEffects:
          "Pain, redness or swelling at the injection site, mild fever or irritability for 1–2 days.",
        whenToSeeDoctor:
          "If high fever does not improve with medicine, child has breathing difficulty, fits or becomes very drowsy.",
        riskIfNotTaken:
          "Greater risk of severe pneumonia, ear infections and brain infections that can cause hearing loss or disability.",
      },
      {
        name: "MR-1 (Measles–Rubella)",
        protectsAgainst:
          "Measles (fever, rash, pneumonia), Rubella (birth defects)",
        importance: "Given at 9 months for early measles protection",
        friendlyInfo:
          "This vaccine prevents measles and rubella, which can be dangerous for children and unborn babies. It is used worldwide and is very safe for your child.",
        route: "Injection",
        site: "Given under the skin of the upper arm or thigh",
        longTermBenefit:
          "Protects from measles (which can cause pneumonia and brain infection) and rubella (which can harm unborn babies during pregnancy).",
        commonSideEffects:
          "Mild fever, mild rash or swelling at the injection site 5–10 days after the shot; usually settles on its own.",
        whenToSeeDoctor:
          "If rash is very widespread with high fever, child has trouble breathing, fits or seems very unwell.",
        riskIfNotTaken:
          "Higher chance of measles outbreaks, pneumonia, brain infection and rubella, especially dangerous for pregnant women and their babies.",
      },
      {
        name: "JE-1 & JE-2 (endemic areas)",
        protectsAgainst: "Japanese Encephalitis (brain infection)",
        importance: "Essential in regions where JE is common",
        friendlyInfo:
          "In areas where this brain fever is common, this vaccine is very important. It uses a weakened or killed virus to safely protect the child’s brain.",
        route: "Injection",
        site: "Given in the thigh or upper arm depending on age",
        longTermBenefit:
          "Protects against a serious brain infection that can cause permanent brain damage or death.",
        commonSideEffects:
          "Mild fever, pain or redness at the injection spot; usually settles quickly.",
        whenToSeeDoctor:
          "If the child develops very high fever, severe headache, vomiting, fits or becomes unconscious.",
        riskIfNotTaken:
          "In JE‑prone areas, unvaccinated children are at risk of brain fever, leading to disability, learning problems or death.",
      },
      {
        name: "MR-2",
        protectsAgainst: "Measles & Rubella (16-24 months)",
        importance: "Booster dose for long-lasting immunity",
        friendlyInfo:
          "This is a repeat dose of the same safe MR vaccine. It does not harm the child; it only keeps the protection strong for many more years.",
        route: "Injection",
        site: "Given under the skin of the upper arm",
        longTermBenefit:
          "Refreshes and strengthens protection against measles and rubella into later childhood.",
        commonSideEffects:
          "Similar to MR‑1: mild fever, mild rash or soreness at the injection site for a short time.",
        whenToSeeDoctor:
          "If the child has high fever, difficulty breathing, fits or looks very sick.",
        riskIfNotTaken:
          "Protection from the first dose may fade, increasing risk of measles and rubella during school years.",
      },
      {
        name: "DPT Booster-1",
        protectsAgainst: "Diphtheria, Whooping Cough, Tetanus",
        importance: "Strengthens immunity at 16-24 months",
        friendlyInfo:
          "This booster reminds the child’s body how to fight these three diseases. It is the same type of vaccine as before and has been safely used for many years.",
        route: "Injection",
        site: "Usually given in the thigh or upper arm",
        longTermBenefit:
          "Keeps protection strong against diphtheria, whooping cough and tetanus as the child grows.",
        commonSideEffects:
          "Pain, redness or swelling at the injection site, mild fever, temporary crankiness.",
        whenToSeeDoctor:
          "If swelling becomes very large and painful, fever is high and not settling, or the child appears very weak.",
        riskIfNotTaken:
          "Immunity can weaken, leaving the child more open to whooping cough, diphtheria and tetanus.",
      },
      {
        name: "Vitamin A",
        protectsAgainst: "Night blindness & weak immunity",
        importance: "Supportive dose for healthy development",
        friendlyInfo:
          "This is not a vaccine but a vitamin syrup that keeps eyes, growth and immunity strong. It is very safe and helps the child stay healthy.",
        route: "Oral liquid",
        site: "Given by mouth using a spoon or small cup",
        longTermBenefit:
          "Prevents night blindness and supports good growth and strong immunity in children.",
        commonSideEffects:
          "Occasionally mild vomiting if given too fast or on an empty stomach; usually no problem.",
        whenToSeeDoctor:
          "If the child vomits repeatedly, seems very drowsy or has any unusual behaviour after the dose.",
        riskIfNotTaken:
          "Higher chance of weak eyesight, night blindness and more frequent infections due to poor immunity.",
      },
    ],
  },
  {
    id: "children",
    title: "Children (5–6 Years)",
    shortTitle: "Children",
    description: "School-entry vaccines to boost immunity before your child enters a group learning environment.",
    icon: "🧒",
    vaccines: [
      {
        name: "DPT Booster-2",
        protectsAgainst: "Diphtheria, Whooping Cough, Tetanus",
        importance: "Pre-school booster for continued protection",
        friendlyInfo:
          "This is another reminder dose of the same DPT vaccine. It keeps protection strong during school years and does not harm the child’s health.",
        route: "Injection",
        site: "Usually given in the upper arm",
        longTermBenefit:
          "Maintains protection against diphtheria, whooping cough and tetanus into school age.",
        commonSideEffects:
          "Mild fever, pain or swelling at the injection site, temporary tiredness.",
        whenToSeeDoctor:
          "If the child has very high fever, severe pain or swelling, difficulty moving the arm, or appears very unwell.",
        riskIfNotTaken:
          "Protection from earlier doses may slowly go down, increasing risk of infection during school years.",
      },
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
      {
        name: "Td / TT (every 10 years)",
        protectsAgainst: "Tetanus (lockjaw) & diphtheria",
        importance: "Regular boosters prevent tetanus from injuries",
        friendlyInfo:
          "This injection is especially important if you work with tools, soil or animals. It is a simple, safe way to prevent deadly tetanus after cuts or wounds.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Provides long‑term protection from tetanus and diphtheria, especially important for people with frequent minor injuries.",
        commonSideEffects:
          "Pain or stiffness in the arm, mild fever or tiredness for 1–2 days.",
        whenToSeeDoctor:
          "If there is very large swelling, severe pain, high fever or signs of allergy like difficulty breathing (rare).",
        riskIfNotTaken:
          "Even a small dirty wound can lead to tetanus, which can cause severe muscle spasms and can be fatal.",
      },
      {
        name: "Hepatitis B",
        protectsAgainst: "Liver infection, cirrhosis, liver cancer",
        importance: "Protects against workplace and lifestyle exposure",
        friendlyInfo:
          "This vaccine does not affect daily strength or fertility. It quietly protects your liver for many years from a serious infection.",
        route: "Injection",
        site: "Given in the upper arm (muscle) in adults",
        longTermBenefit:
          "Reduces the chance of long‑term liver infection, cirrhosis and liver cancer.",
        commonSideEffects:
          "Soreness at the injection site, mild fever or body ache for a short time.",
        whenToSeeDoctor:
          "If there is very high fever, difficulty breathing, or a severe allergic reaction (very rare).",
        riskIfNotTaken:
          "If exposed to Hepatitis B through blood, unprotected people can develop chronic liver disease and liver cancer.",
      },
      {
        name: "MMR",
        protectsAgainst: "Measles, Mumps, Rubella",
        importance: "Catch-up vaccine if missed during childhood",
        friendlyInfo:
          "Even in adults, this vaccine is safe and helpful. It stops the spread of these infections to children, pregnant women and the community.",
        route: "Injection",
        site: "Given under the skin of the upper arm",
        longTermBenefit:
          "Prevents measles, mumps and rubella, reducing complications like infertility (mumps in males), brain infection and harm to unborn babies.",
        commonSideEffects:
          "Mild fever, mild rash, slight swelling of glands or soreness at the injection site.",
        whenToSeeDoctor:
          "If you have very high fever, difficulty breathing, severe rash or feel extremely unwell.",
        riskIfNotTaken:
          "You remain at risk of measles, mumps and rubella and can spread these to small children and pregnant women.",
      },
      {
        name: "Influenza (Flu)",
        protectsAgainst: "Seasonal flu, severe lung infection",
        importance: "Yearly vaccine for flu prevention",
        friendlyInfo:
          "This is taken once a year before the flu season. It cannot cause flu but reduces chances of high fever, body pain and hospital stay.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Reduces chances of severe flu, hospital admission and time off work each year.",
        commonSideEffects:
          "Mild fever, body ache or soreness in the arm that improves in 1–2 days.",
        whenToSeeDoctor:
          "If symptoms are very severe, last many days, or you have trouble breathing or chest pain.",
        riskIfNotTaken:
          "Higher risk of catching flu every season, which can be dangerous for people with weak lungs, heart or diabetes.",
      },
      {
        name: "COVID-19 Booster",
        protectsAgainst: "Severe COVID, hospitalization, death",
        importance: "Updated protection against current variants",
        friendlyInfo:
          "Boosters refresh the body’s memory against COVID. These vaccines are well tested and help prevent serious breathing problems and hospital admissions.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Keeps protection strong against severe COVID, reducing risk of ICU care and death.",
        commonSideEffects:
          "Pain at the injection site, mild fever, tiredness, headache or body ache for 1–3 days.",
        whenToSeeDoctor:
          "If you have very high fever that does not come down, chest pain, difficulty breathing, or any serious allergic signs like swelling of face or tongue.",
        riskIfNotTaken:
          "Protection from earlier doses slowly goes down, increasing the chance of severe COVID infection and complications.",
      },
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
