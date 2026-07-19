# Teman Ngoding - Landing Page

Welcome to the official landing page repository for [temanngoding.id](https://temanngoding.id). This platform offers private 1-on-1 tutoring and online coding courses in Indonesia, uniquely themed around an RPG gaming experience (with Quests, EXP, Mana, and Levels).

## 🚀 Tech Stack

This project is built with a modern frontend stack to ensure high performance, SEO optimization, and a seamless developer experience:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **OG Images:** `@vercel/og` for automatic and dynamic Open Graph image generation
- **Language:** TypeScript

## 📁 Project Structure

The codebase is organized using the Next.js App Router conventions:

```text
src/
├── app/                  # Next.js App Router (Pages, Layouts, API Routes, SEO)
│   ├── api/og/           # Dynamic Open Graph Image API Endpoint
│   ├── blog/             # Blog pages
│   ├── course/           # Individual course pages (Quests)
│   ├── package/          # Bundled course pages
│   ├── services/         # Web development services
│   ├── layout.tsx        # Root layout & global metadata
│   ├── page.tsx          # Home page
│   ├── sitemap.ts        # Dynamic sitemap generation
│   ├── robots.ts         # Robots.txt configuration
│   ├── opengraph-image.tsx # Root OG image generation
│   └── twitter-image.tsx   # Root Twitter image generation
├── components/           # Reusable UI components
│   ├── modules/          # Complex, feature-specific components (e.g. PackageList)
│   └── shared/           # Generic, reusable components (e.g. Buttons, Cards, Navbars)
├── constants/            # Static data and configuration
│   └── index.tsx         # Centralized data (Courses, Packages, Mentors, Services)
├── hooks/                # Custom React Hooks and Utility Functions
│   └── index.tsx         # Shared logic (e.g., calcLevel, calculatePackageStats)
└── types/                # TypeScript type definitions
    └── index.ts          # Centralized interfaces and types
```

## 🛠️ Data Management & Content

To add or modify the content of the landing page (such as new courses, mentors, or packages), you generally don't need to touch the UI components. All core content is managed centrally in:

- **`src/constants/index.tsx`**: Contains the arrays for `courses`, `learningPackages`, `mentors`, `blogs`, etc.
- **`src/hooks/index.tsx`**: Contains helper functions that calculate stats automatically (e.g., calculating a package's total price with a 30% discount based on its bundled courses).

Whenever you add a new course or package in `constants`, it will automatically appear on the website and be included in the dynamic `sitemap.ts`.

## 💻 Running Locally

1. **Install Dependencies**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

2. **Run the Development Server**
   Start the local dev server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Build for Production**
   To test the production build locally:
   ```bash
   npm run build
   npm run start
   ```

## 🌐 SEO & Open Graph

This project is heavily optimized for Search Engines and Social Media sharing:
- The `src/app/sitemap.ts` automatically maps all dynamic routes (courses, packages, blogs) for Google crawlers.
- Open Graph images are generated dynamically using Next.js File Conventions (`opengraph-image.tsx`) based on a base background template.
- Social media previews can also be generated via the API route (`/api/og`).
