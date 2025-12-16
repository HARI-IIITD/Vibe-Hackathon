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
      {
        name: "Td (10 Years)",
        protectsAgainst: "Tetanus & Diphtheria",
        importance: "Maintains protection through adolescence",
        friendlyInfo:
          "This booster refreshes your body's memory of how to fight tetanus and diphtheria. It is the same safe vaccine you received as a child.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Keeps immunity strong during active teenage years when injuries are common from sports and outdoor activities.",
        commonSideEffects:
          "Pain, redness or swelling at the injection site, mild fever or body ache for 1–2 days.",
        whenToSeeDoctor:
          "If swelling becomes very large, you have high fever that does not settle, difficulty moving the arm, or signs of allergy like breathing trouble.",
        riskIfNotTaken:
          "Protection from childhood vaccines fades over time. Without this booster, even a small dirty wound can lead to tetanus, which causes painful muscle spasms and can be life-threatening.",
      },
      {
        name: "Td Booster (16 Years)",
        protectsAgainst: "Tetanus & Diphtheria",
        importance: "Long-term protection into adulthood",
        friendlyInfo:
          "Another reminder dose to carry protection into adulthood. This vaccine has been used safely for decades worldwide.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Ensures continued protection as you transition into adulthood, college, work, and independent life.",
        commonSideEffects:
          "Mild soreness or stiffness in the arm, low-grade fever, tiredness for a day or two.",
        whenToSeeDoctor:
          "If you experience very high fever, severe arm pain or swelling, difficulty breathing, or any unusual symptoms.",
        riskIfNotTaken:
          "Immunity continues to weaken without boosters. Adults without updated tetanus protection are at serious risk from common injuries like cuts, puncture wounds, or animal bites.",
      },
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
      {
        name: "Influenza (Yearly)",
        protectsAgainst: "Seasonal flu, pneumonia",
        importance: "Aging weakens natural immunity to flu",
        friendlyInfo:
          "This yearly vaccine is specially important for elders. It reduces the chance of severe flu that can lead to pneumonia and hospital stay.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Reduces yearly risk of flu complications, hospital admissions, and keeps seniors active and healthy through flu season.",
        commonSideEffects:
          "Mild soreness at the injection site, low fever, body ache for 1–2 days.",
        whenToSeeDoctor:
          "If you have very high fever, chest pain, difficulty breathing, or feel extremely weak.",
        riskIfNotTaken:
          "Seniors are at high risk of severe flu complications including pneumonia, which can be life-threatening. Flu can also worsen existing heart, lung, or diabetes conditions.",
      },
      {
        name: "Pneumococcal",
        protectsAgainst: "Pneumonia, meningitis, blood infections",
        importance: "Critical protection for elderly lungs",
        friendlyInfo:
          "This vaccine protects your lungs and brain from serious bacterial infections. It is especially helpful as immunity naturally weakens with age.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Provides long-lasting protection against pneumonia and related infections that are more dangerous for elderly people.",
        commonSideEffects:
          "Pain or redness at the injection site, mild fever, muscle aches for a short time.",
        whenToSeeDoctor:
          "If you develop high fever, breathing difficulty, confusion, or severe weakness.",
        riskIfNotTaken:
          "Elderly people without this vaccine have much higher risk of severe pneumonia, which is a leading cause of hospitalization and death in seniors.",
      },
      {
        name: "COVID-19 Booster",
        protectsAgainst: "Severe COVID, hospitalization",
        importance: "Higher risk group needs updated protection",
        friendlyInfo:
          "Boosters refresh protection against COVID, which is especially important for seniors who are more likely to have severe illness.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Maintains strong protection against severe COVID, ICU admission, and death from COVID complications.",
        commonSideEffects:
          "Arm pain, mild fever, tiredness, headache or body ache for 1–3 days.",
        whenToSeeDoctor:
          "If you have very high fever, chest pain, difficulty breathing, or any severe symptoms that worry you.",
        riskIfNotTaken:
          "Seniors are at highest risk of severe COVID outcomes including hospitalization and death. Protection from earlier doses weakens over time.",
      },
      {
        name: "Td / TT",
        protectsAgainst: "Tetanus from injuries",
        importance: "Continues protection from common injuries",
        friendlyInfo:
          "This simple injection protects you from tetanus, which can happen from small cuts or falls. Seniors often have more minor injuries, making this important.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Maintains lifelong protection from tetanus, especially important as skin becomes more fragile with age.",
        commonSideEffects:
          "Mild pain or stiffness in the arm, low fever for a day.",
        whenToSeeDoctor:
          "If you have severe swelling, high fever, or any signs of allergic reaction.",
        riskIfNotTaken:
          "Even a small wound from gardening, kitchen work, or a fall can cause tetanus. Without protection, tetanus causes severe muscle spasms and can be fatal.",
      },
      {
        name: "Shingles (Herpes Zoster)",
        protectsAgainst: "Shingles, painful nerve infection",
        importance: "Prevents reactivation of childhood chickenpox virus",
        friendlyInfo:
          "If you had chickenpox as a child, the virus stays in your body. As immunity weakens with age, it can come back as painful shingles. This vaccine prevents that.",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit:
          "Prevents shingles outbreaks and the long-lasting nerve pain (post-herpetic neuralgia) that can persist for months or years.",
        commonSideEffects:
          "Pain, redness or swelling at the injection site, mild headache, tiredness, muscle pain.",
        whenToSeeDoctor:
          "If you develop a rash, very high fever, severe pain, or any concerning symptoms.",
        riskIfNotTaken:
          "About 1 in 3 people who had chickenpox will get shingles. It causes a painful, blistering rash and can lead to months of severe nerve pain that affects daily life.",
      },
    ],
  },
];

export const situationGroups: SituationGroup[] = [
  {
    id: "pregnancy",
    title: "Pregnancy",
    icon: "🤰",
    vaccines: [
      {
        name: "Td / Tdap",
        protectsAgainst: "Protects mother & newborn from tetanus, diphtheria, pertussis",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Protects the mother during delivery and passes antibodies to the baby, protecting the newborn in the first months of life.",
        commonSideEffects: "Mild pain at the injection site, low fever, tiredness for a day or two.",
        whenToSeeDoctor: "If you have high fever, severe swelling, or any concerning symptoms during pregnancy.",
        riskIfNotTaken: "Newborns are highly vulnerable to whooping cough and tetanus. Without maternal vaccination, babies have no protection until they can receive their own vaccines.",
      },
      {
        name: "Influenza",
        protectsAgainst: "Prevents severe flu complications",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Protects both mother and baby from flu complications during pregnancy, which can cause preterm birth and other problems.",
        commonSideEffects: "Mild arm soreness, low fever, body ache for 1–2 days.",
        whenToSeeDoctor: "If you develop high fever, difficulty breathing, or severe symptoms.",
        riskIfNotTaken: "Pregnant women are at higher risk of severe flu complications, hospitalization, and adverse pregnancy outcomes including preterm delivery.",
      },
      {
        name: "COVID-19",
        protectsAgainst: "Protects mother & baby",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Reduces risk of severe COVID during pregnancy and may provide some protection to the newborn through antibodies.",
        commonSideEffects: "Arm pain, mild fever, tiredness, headache for 1–3 days.",
        whenToSeeDoctor: "If you have high fever, breathing difficulty, chest pain, or any severe symptoms.",
        riskIfNotTaken: "Pregnant women with COVID are at higher risk of severe illness, ICU admission, preterm birth, and other pregnancy complications.",
      },
    ],
  },
  {
    id: "school-going",
    title: "School-Going Children",
    icon: "🧒",
    vaccines: [
      {
        name: "MMR",
        protectsAgainst: "Prevents measles, mumps, rubella",
        route: "Injection",
        site: "Given under the skin of the upper arm",
        longTermBenefit: "Protects against highly contagious diseases that spread quickly in school settings, preventing outbreaks.",
        commonSideEffects: "Mild fever, mild rash 5–10 days after vaccination, slight soreness at injection site.",
        whenToSeeDoctor: "If your child has very high fever, severe rash, difficulty breathing, or seems very unwell.",
        riskIfNotTaken: "Measles spreads very easily in schools. Unvaccinated children can get serious complications like pneumonia, brain infection, and can spread disease to younger siblings.",
      },
      {
        name: "DPT Booster",
        protectsAgainst: "Maintains immunity",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Keeps protection strong against diphtheria, whooping cough, and tetanus during active school years.",
        commonSideEffects: "Pain or swelling at injection site, mild fever, temporary tiredness.",
        whenToSeeDoctor: "If there is severe swelling, high fever that does not settle, or the child seems very unwell.",
        riskIfNotTaken: "Without boosters, immunity from earlier vaccines weakens. Whooping cough outbreaks in schools are common among unvaccinated children.",
      },
      {
        name: "Varicella",
        protectsAgainst: "Chickenpox prevention",
        route: "Injection",
        site: "Given under the skin of the upper arm",
        longTermBenefit: "Prevents chickenpox, which can cause missed school days, skin infections, and rarely serious complications.",
        commonSideEffects: "Soreness at injection site, mild fever, rarely a few small spots.",
        whenToSeeDoctor: "If your child develops widespread rash with high fever or seems very sick.",
        riskIfNotTaken: "Chickenpox spreads very easily in schools. While usually mild, it can cause serious skin infections, pneumonia, and brain inflammation in some children.",
      },
      {
        name: "Typhoid",
        protectsAgainst: "Common in school environments",
        route: "Injection or oral",
        site: "Injection in upper arm, or oral capsules",
        longTermBenefit: "Protects against typhoid fever, which can spread through contaminated food and water in school canteens.",
        commonSideEffects: "Mild pain at injection site, low fever, headache for a day.",
        whenToSeeDoctor: "If your child has persistent high fever, severe stomach pain, or vomiting.",
        riskIfNotTaken: "Typhoid can cause prolonged fever, weakness, and serious complications. School children are at risk from shared food and water sources.",
      },
    ],
  },
  {
    id: "college-students",
    title: "College Students / Young Adults",
    icon: "🎓",
    vaccines: [
      {
        name: "Td / Tdap",
        protectsAgainst: "Long-term protection",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Maintains protection from tetanus and diphtheria as you become an independent adult with new activities and environments.",
        commonSideEffects: "Mild arm pain, low fever, tiredness for 1–2 days.",
        whenToSeeDoctor: "If you have severe swelling, high fever, or difficulty moving your arm.",
        riskIfNotTaken: "Young adults often engage in sports, travel, and outdoor activities that increase injury risk. Tetanus from a small wound can be fatal.",
      },
      {
        name: "MMR",
        protectsAgainst: "If missed earlier",
        route: "Injection",
        site: "Given under the skin of the upper arm",
        longTermBenefit: "Ensures protection against measles, mumps, and rubella, especially important in college hostels where diseases spread easily.",
        commonSideEffects: "Mild fever, slight rash, soreness at injection site.",
        whenToSeeDoctor: "If you have high fever, severe rash, or breathing difficulty.",
        riskIfNotTaken: "College campuses have seen measles and mumps outbreaks. These diseases can cause serious complications and disrupt your studies.",
      },
      {
        name: "Hepatitis B",
        protectsAgainst: "Hostel & close-contact risk",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Provides lifelong protection against Hepatitis B, important in shared living spaces and during the start of adult relationships.",
        commonSideEffects: "Mild soreness at injection site, low fever for a day.",
        whenToSeeDoctor: "If you have severe allergic symptoms or very high fever.",
        riskIfNotTaken: "Hepatitis B can cause chronic liver disease and liver cancer. Young adults are at risk through sharing personal items, injuries, and intimate contact.",
      },
      {
        name: "HPV",
        protectsAgainst: "Prevents cervical & other cancers",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Prevents HPV infection that can cause cervical cancer in women and other cancers in both men and women.",
        commonSideEffects: "Pain, redness at injection site, mild fever, headache.",
        whenToSeeDoctor: "If you have severe allergic reaction or fainting.",
        riskIfNotTaken: "HPV causes nearly all cervical cancers and many other cancers. Vaccination before exposure provides the best protection.",
      },
    ],
  },
  {
    id: "travel",
    title: "Travel (Domestic & International)",
    icon: "✈️",
    vaccines: [
      {
        name: "JE (Japanese Encephalitis)",
        protectsAgainst: "Hill / forest travel in endemic areas",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Protects against brain fever when traveling to areas where Japanese Encephalitis is common.",
        commonSideEffects: "Mild pain at injection site, low fever, headache.",
        whenToSeeDoctor: "If you develop high fever, severe headache, confusion, or neck stiffness.",
        riskIfNotTaken: "Japanese Encephalitis can cause permanent brain damage or death. Travelers to rural and forested areas in endemic regions are at risk.",
      },
      {
        name: "Typhoid",
        protectsAgainst: "Poor sanitation areas",
        route: "Injection or oral",
        site: "Injection in upper arm, or oral capsules",
        longTermBenefit: "Protects against typhoid when traveling to areas with poor water and food safety.",
        commonSideEffects: "Mild injection site pain, low fever, headache.",
        whenToSeeDoctor: "If you have persistent high fever, severe stomach pain, or bloody stools.",
        riskIfNotTaken: "Typhoid is common in areas with poor sanitation. It causes prolonged fever, weakness, and can be life-threatening without treatment.",
      },
      {
        name: "Yellow Fever, Meningococcal",
        protectsAgainst: "International travel (country rules apply)",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Required for entry to many countries and protects against serious diseases prevalent in certain regions.",
        commonSideEffects: "Mild fever, headache, muscle aches, soreness at injection site.",
        whenToSeeDoctor: "If you have severe allergic reaction, very high fever, or feel extremely unwell.",
        riskIfNotTaken: "Some countries require proof of vaccination for entry. Without it, you risk both denial of entry and exposure to deadly diseases.",
      },
      {
        name: "Influenza, COVID Booster",
        protectsAgainst: "All travel situations",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Reduces risk of respiratory illness during travel, which can ruin trips and spread disease.",
        commonSideEffects: "Arm soreness, mild fever, body ache for 1–2 days.",
        whenToSeeDoctor: "If you have high fever, breathing difficulty, or severe symptoms.",
        riskIfNotTaken: "Travel involves crowded spaces like airports and hotels where respiratory infections spread easily. Getting sick while traveling is costly and dangerous.",
      },
    ],
  },
  {
    id: "healthcare-workers",
    title: "Healthcare Workers",
    icon: "🏥",
    vaccines: [
      {
        name: "Hepatitis B",
        protectsAgainst: "Blood exposure",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Essential protection for healthcare workers who may be exposed to blood and body fluids.",
        commonSideEffects: "Mild soreness at injection site, low fever.",
        whenToSeeDoctor: "If you have severe allergic symptoms or high fever.",
        riskIfNotTaken: "Healthcare workers have high risk of needlestick injuries. Hepatitis B can cause chronic liver disease and end a medical career.",
      },
      {
        name: "Influenza",
        protectsAgainst: "Patient safety",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Protects both healthcare workers and vulnerable patients from flu.",
        commonSideEffects: "Arm soreness, mild fever, body ache for 1–2 days.",
        whenToSeeDoctor: "If you have high fever, breathing difficulty, or severe symptoms.",
        riskIfNotTaken: "Healthcare workers can spread flu to vulnerable patients including newborns, elderly, and immunocompromised individuals.",
      },
      {
        name: "MMR",
        protectsAgainst: "Prevent outbreaks",
        route: "Injection",
        site: "Given under the skin of the upper arm",
        longTermBenefit: "Ensures healthcare workers do not spread measles, mumps, or rubella in hospitals.",
        commonSideEffects: "Mild fever, slight rash, soreness at injection site.",
        whenToSeeDoctor: "If you have high fever or severe symptoms.",
        riskIfNotTaken: "Hospital outbreaks of measles and rubella can be devastating, especially for pregnant patients and newborns.",
      },
      {
        name: "COVID-19",
        protectsAgainst: "High-risk exposure",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Reduces risk of severe COVID and prevents spread to vulnerable patients.",
        commonSideEffects: "Arm pain, mild fever, tiredness, headache for 1–3 days.",
        whenToSeeDoctor: "If you have severe chest pain, breathing difficulty, or very high fever.",
        riskIfNotTaken: "Healthcare workers face constant COVID exposure. Getting severely ill means time off work and risk of spreading to patients.",
      },
      {
        name: "Varicella",
        protectsAgainst: "Prevent hospital spread",
        route: "Injection",
        site: "Given under the skin of the upper arm",
        longTermBenefit: "Prevents chickenpox spread in hospitals where it can be dangerous for immunocompromised patients.",
        commonSideEffects: "Soreness at injection site, mild fever, rarely a few spots.",
        whenToSeeDoctor: "If you develop widespread rash or high fever.",
        riskIfNotTaken: "Chickenpox in hospitals can be life-threatening for cancer patients, transplant recipients, and newborns.",
      },
    ],
  },
  {
    id: "high-risk-jobs",
    title: "High-Risk Occupations",
    icon: "🔧",
    vaccines: [
      {
        name: "Hepatitis A, Typhoid",
        protectsAgainst: "Sanitation workers",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Protects workers who handle sewage and waste from waterborne diseases.",
        commonSideEffects: "Mild soreness at injection site, low fever, tiredness.",
        whenToSeeDoctor: "If you have persistent high fever, severe stomach pain, or yellowing of eyes.",
        riskIfNotTaken: "Sanitation workers are constantly exposed to contaminated water and waste. Hepatitis A and typhoid can cause serious liver disease and prolonged illness.",
      },
      {
        name: "Hepatitis B, Rabies",
        protectsAgainst: "Lab workers",
        route: "Injection",
        site: "Given in the upper arm (muscle) or thigh for some rabies doses",
        longTermBenefit: "Essential protection for lab workers handling blood samples and animal specimens.",
        commonSideEffects: "Pain at injection site, mild fever, headache.",
        whenToSeeDoctor: "If you have severe allergic reaction or very high fever.",
        riskIfNotTaken: "Lab accidents can expose workers to deadly viruses. Rabies is almost always fatal once symptoms appear.",
      },
      {
        name: "Rabies",
        protectsAgainst: "Animal handlers",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Pre-exposure protection for veterinarians, zoo workers, and animal shelter staff.",
        commonSideEffects: "Soreness at injection site, mild fever, headache.",
        whenToSeeDoctor: "If you have severe allergic symptoms or an animal bite even after vaccination.",
        riskIfNotTaken: "Rabies is fatal once symptoms appear. Animal handlers need protection before any potential exposure.",
      },
      {
        name: "Td",
        protectsAgainst: "Construction workers",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Critical protection for workers who frequently get cuts and injuries from metal, nails, and contaminated materials.",
        commonSideEffects: "Mild arm soreness, low fever for a day.",
        whenToSeeDoctor: "If you have severe swelling or high fever.",
        riskIfNotTaken: "Construction sites are full of tetanus-prone injuries. A simple nail puncture can lead to life-threatening tetanus without vaccination.",
      },
    ],
  },
  {
    id: "chronic-illness",
    title: "Chronic Illness (Diabetes, Heart, Lung, Kidney)",
    icon: "💊",
    vaccines: [
      {
        name: "Influenza",
        protectsAgainst: "Prevent severe infection",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Reduces risk of flu complications that are more severe in people with chronic conditions.",
        commonSideEffects: "Mild arm soreness, low fever, tiredness for 1–2 days.",
        whenToSeeDoctor: "If you have high fever, breathing difficulty, or worsening of your chronic condition.",
        riskIfNotTaken: "People with diabetes, heart disease, or lung problems have much higher risk of hospitalization and death from flu.",
      },
      {
        name: "Pneumococcal",
        protectsAgainst: "Prevent pneumonia",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Provides strong protection against pneumonia, which is more dangerous for people with chronic illnesses.",
        commonSideEffects: "Soreness at injection site, mild fever, muscle aches.",
        whenToSeeDoctor: "If you have breathing difficulty, chest pain, or worsening symptoms.",
        riskIfNotTaken: "Chronic illness patients have weakened immunity. Pneumonia can quickly become life-threatening in these individuals.",
      },
      {
        name: "COVID Booster",
        protectsAgainst: "High risk",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Maintains protection against severe COVID, which disproportionately affects people with chronic conditions.",
        commonSideEffects: "Arm pain, mild fever, tiredness for 1–3 days.",
        whenToSeeDoctor: "If you have severe symptoms or worsening of your underlying condition.",
        riskIfNotTaken: "People with chronic illness are at highest risk of severe COVID outcomes, hospitalization, and death.",
      },
      {
        name: "Hepatitis B",
        protectsAgainst: "Added protection",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Protects against liver infection, especially important for diabetics and those on dialysis who have frequent medical procedures.",
        commonSideEffects: "Mild soreness at injection site, low fever.",
        whenToSeeDoctor: "If you have severe allergic symptoms or high fever.",
        riskIfNotTaken: "Chronic illness patients have frequent blood tests and medical procedures, increasing exposure risk to Hepatitis B.",
      },
    ],
  },
  {
    id: "animal-bite",
    title: "Animal Bite / Exposure",
    icon: "🐕",
    vaccines: [
      {
        name: "Rabies vaccine",
        protectsAgainst: "Dog / cat bite",
        route: "Injection",
        site: "Given in the upper arm (muscle) – multiple doses required",
        longTermBenefit: "Prevents rabies, a fatal disease, when given promptly after an animal bite.",
        commonSideEffects: "Pain and redness at injection site, headache, mild fever, dizziness.",
        whenToSeeDoctor: "Immediately after any animal bite, and if you develop fever, headache, or unusual sensations at the bite site.",
        riskIfNotTaken: "Rabies is almost 100% fatal once symptoms appear. Immediate vaccination after a bite is essential for survival.",
      },
      {
        name: "Td / TT",
        protectsAgainst: "Tetanus-prone wound",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Prevents tetanus from animal bite wounds, which are often deep and contaminated.",
        commonSideEffects: "Mild arm soreness, low fever for a day.",
        whenToSeeDoctor: "If you have severe swelling, high fever, or the wound shows signs of infection.",
        riskIfNotTaken: "Animal bites create deep puncture wounds ideal for tetanus bacteria. Tetanus causes severe muscle spasms and can be fatal.",
      },
    ],
  },
  {
    id: "flood-disaster",
    title: "Natural Disasters / Flood Areas",
    icon: "🌊",
    vaccines: [
      {
        name: "Hepatitis A",
        protectsAgainst: "Contaminated water",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Protects against liver infection from contaminated water and food common during floods.",
        commonSideEffects: "Soreness at injection site, mild fever, tiredness.",
        whenToSeeDoctor: "If you develop yellowing of eyes, severe stomach pain, or persistent vomiting.",
        riskIfNotTaken: "Floods contaminate water supplies. Hepatitis A causes severe liver inflammation, prolonged illness, and can be fatal in some cases.",
      },
      {
        name: "Typhoid",
        protectsAgainst: "Poor sanitation",
        route: "Injection or oral",
        site: "Injection in upper arm, or oral capsules",
        longTermBenefit: "Protects against typhoid fever when clean water and proper sanitation are unavailable.",
        commonSideEffects: "Mild injection site pain, low fever, headache.",
        whenToSeeDoctor: "If you have persistent high fever, severe stomach pain, or bloody stools.",
        riskIfNotTaken: "During floods, sewage mixes with drinking water. Typhoid can cause life-threatening complications without proper treatment.",
      },
      {
        name: "Td / TT",
        protectsAgainst: "Injuries",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Protects against tetanus from injuries sustained during rescue, cleanup, and rebuilding.",
        commonSideEffects: "Mild arm soreness, low fever for a day.",
        whenToSeeDoctor: "If you have a deep wound, severe swelling, or signs of infection.",
        riskIfNotTaken: "Disaster areas are full of debris, rusty metal, and contaminated soil. Any wound can lead to tetanus without protection.",
      },
    ],
  },
  {
    id: "immunocompromised",
    title: "Immunocompromised (Doctor Guided)",
    icon: "🩺",
    vaccines: [
      {
        name: "Influenza",
        protectsAgainst: "Safe option (inactivated)",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Safe protection against flu for those with weakened immune systems.",
        commonSideEffects: "Mild arm soreness, low fever, tiredness – response may be milder due to weak immunity.",
        whenToSeeDoctor: "If you develop any fever, breathing difficulty, or feel unwell – immunocompromised patients should seek care earlier.",
        riskIfNotTaken: "Flu can be life-threatening for immunocompromised individuals. Even mild flu can lead to severe pneumonia and hospitalization.",
      },
      {
        name: "Pneumococcal",
        protectsAgainst: "Severe infection risk",
        route: "Injection",
        site: "Given in the upper arm (muscle)",
        longTermBenefit: "Provides critical protection against bacterial pneumonia for those with weakened defenses.",
        commonSideEffects: "Soreness at injection site, mild fever, muscle aches.",
        whenToSeeDoctor: "If you have any fever, breathing difficulty, or feel unwell.",
        riskIfNotTaken: "Immunocompromised patients are at extremely high risk of severe pneumonia and blood infections that can be fatal.",
      },
      {
        name: "Hepatitis B",
        protectsAgainst: "Added protection",
        route: "Injection",
        site: "Given in the upper arm (muscle) – may need higher doses",
        longTermBenefit: "Protects against liver infection, though response may be weaker and require additional doses.",
        commonSideEffects: "Mild soreness at injection site, low fever.",
        whenToSeeDoctor: "If you have any concerning symptoms or allergic reaction.",
        riskIfNotTaken: "Immunocompromised patients have frequent medical procedures and blood tests, increasing Hepatitis B exposure risk.",
      },
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
