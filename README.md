## Pune Vaccine Guide

An interactive web app that helps families in Pune understand recommended vaccines across all stages of life and discover nearby government vaccination centers.

### Key Features

- **Age-wise vaccine planner**: Explore vaccines recommended from birth through senior years, grouped by age brackets with clear explanations of what each vaccine protects against and why it matters.
- **Situation-wise guidance**: View vaccine recommendations based on real-life situations such as pregnancy, school/college, travel, chronic illness, high‑risk jobs, disasters, and more.
- **Pune vaccination center finder**: Search verified government vaccination centers in Pune by hospital name or area, with quick filters and direct links to call and open directions in Google Maps.
- **FAQ & education**: Simple, trustworthy answers to common vaccine questions (safety, missed doses, adult vaccines, free government vaccines, multiple vaccines at once, etc.).
- **Modern, responsive UI**: Built with shadcn-ui, Tailwind CSS, and Lucide icons for a clean and mobile-friendly experience.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI & Styling**: Tailwind CSS, shadcn-ui (Radix UI), Lucide icons
- **State & Data**: React Query (`@tanstack/react-query`), React Router (`react-router-dom`)
- **Backend / Services**: Supabase client configured (via environment variables) for future data integrations

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** (comes with Node.js) or **bun**/**pnpm** if you prefer (scripts assume npm by default)

### Installation

1. **Clone the repository**

```bash
git clone <REPOSITORY_URL>
cd Vibe-Hackathon-main
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment (optional but recommended if using Supabase)**

Create a `.env` file in the project root (same folder as `vite.config.ts`) and add:

```bash
VITE_SUPABASE_URL=<your-supabase-url>
VITE_SUPABASE_PUBLISHABLE_KEY=<your-supabase-anon-key>
```

If you do not set these variables, only features that rely on Supabase will be unavailable; the static vaccine guidance and Pune center search will still work from bundled data.

4. **Run the development server**

```bash
npm run dev
```

The app will start on a local Vite dev URL (typically `http://localhost:5173`).

### Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure (Overview)

- **`src/pages`**: Main routes, including the home page (`Index`) and age-group detail page.
- **`src/components`**: Reusable UI components such as `Header`, `HeroSection`, `AgeGroupCard`, `SituationCard`, `FAQSection`, `VaccinationCenters`, and shared UI primitives under `ui/`.
- **`src/data`**: Static data such as `vaccineData.ts` (age and situation vaccine mappings) and `pune_hospitals.json` (Pune vaccination center list).
- **`src/integrations/supabase`**: Supabase client and generated types.
- **`src/lib`**: Utility helpers (e.g., `utils.ts`).

## Main User Flows

- **Understand vaccines by age**: From the homepage, browse the "Vaccines by Age Group" section and click age cards (e.g., at birth, infants, adolescents, adults, senior citizens) to view detailed vaccine lists and explanations.
- **Understand vaccines by situation**: On the same page, expand "Vaccines by Life Situation" groups (pregnancy, travel, healthcare workers, etc.) to see recommended vaccines and what they protect against.
- **Find a vaccination center in Pune**: Use the "Government Vaccination Centers in Pune" section to search by area or hospital name, filter quickly by popular areas, call the center directly, or open directions in Google Maps.

## Scripts

- **`npm run dev`**: Start the Vite development server.
- **`npm run build`**: Build the app for production.
- **`npm run build:dev`**: Development-mode build (useful for debugging prod-like output).
- **`npm run preview`**: Preview the production build locally.
- **`npm run lint`**: Run ESLint checks.

## Contributors

- **Hari** – `harikrishnasharma@gmail.com`
- **Aayush Jha** – `24bds002@iitdwd.ac.in`

