# StepWise - AI Career Coach

StepWise is an AI-powered platform to accelerate your career growth with personalized insights, resume building, interview preparation, and more.

## Features

- **AI-Powered Career Guidance**
- **Industry Insights** (salary, growth rate, top skills, trends)
- **Resume Builder**
- **Interview Preparation**
- **User Dashboard**
- **Authentication with Clerk**
- **PostgreSQL database via Prisma**
- **Google Gemini AI integration**

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Clerk (Authentication)
- Google Generative AI (Gemini)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stepwise.git
   cd stepwise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env.local` and fill in your values:
     ```
     DATABASE_URL=your_postgres_connection_string
     GEMINI_API_KEY=your_google_gemini_api_key
     CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
     CLERK_SECRET_KEY=your_clerk_secret_key
     ```

4. **Set up the database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Project Structure

```
app/                # Next.js routes, pages, layouts
components/         # Shared React components
prisma/             # Prisma schema
actions/            # Server actions (AI, dashboard, interview)
lib/                # Utility files (Prisma client, helpers)
public/             # Static assets
```

## AI Insights Example

Industry insights are generated using Google Gemini AI and stored in the database.  
Example output:
```json
{
  "salaryRanges": [
    { "role": "Software Engineer", "min": 60000, "max": 120000, "median": 90000, "location": "US" }
  ],
  "growthRate": 8.5,
  "demandLevel": "High",
  "topSkills": ["JavaScript", "React", "Node.js", "SQL", "Cloud"],
  "marketOutlook": "Positive",
  "keyTrends": ["Remote Work", "AI Adoption"],
  "recommendedSkills": ["TypeScript", "Docker"]
}
```

## License

MIT

---

**Feel free to ask for a more detailed or customized README!**