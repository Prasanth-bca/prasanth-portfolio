# Prasanth's Portfolio

Modern, professional portfolio website for a Software Developer specializing in Backend Development, Automation, and Cloud Infrastructure.

## 🚀 Live Site
- **Local Dev**: http://localhost:5173/prasanth-portfolio/
- **Production**: [Add your deployed URL here]

## 📋 Overview

Professional portfolio showcasing:
- Backend systems development (Python, FastAPI, Django)
- Business automation workflows (n8n, OCR, AI)
- ERP integrations (ERPNext, Tally)
- Cloud infrastructure (AWS)

## 🛠️ Tech Stack

### Frontend
- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Package Manager**: npm (bun configured but optional)

### Deployment
- Cloudflare Pages (via wrangler.jsonc)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/Prasanth-bca/prasanth-portfolio.git
cd prasanth-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Portfolio Sections

1. **Hero** - Introduction with tech stack badges
2. **About** - Professional focus areas and expertise
3. **Skills** - Organized by category (Backend, Databases, Automation, Cloud, ERP)
4. **Experience** - Professional timeline at Altius Technologies
5. **Projects** - 4 detailed projects with architecture diagrams
6. **Contact** - Email, LinkedIn, GitHub links

## 📂 Project Structure

```
prasanth-portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx              # Landing section
│   │   ├── About.tsx             # Professional overview
│   │   ├── Skills.tsx            # Grouped skills display
│   │   ├── Experience.tsx        # Work experience
│   │   ├── Projects.tsx          # Portfolio projects
│   │   ├── Contact.tsx           # Contact information
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Section.tsx           # Reusable section wrapper
│   │   ├── Magnetic.tsx          # Hover effect component
│   │   ├── AnimatedBackground.tsx
│   │   ├── FloatingParticles.tsx
│   │   └── CustomCursor.tsx
│   ├── hooks/
│   │   ├── useSmoothScroll.ts
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point
│   └── index.css                 # Global styles
├── public/                       # Static assets
├── screenshots/                  # Portfolio screenshots
├── UPDATES.md                    # Detailed improvement summary
├── CHANGELOG.md                  # Version history
└── README.md                     # This file
```

## 🎨 Key Features

### Design
- Glass morphism UI with subtle gradients
- Smooth animations and transitions
- Magnetic hover effects on interactive elements
- Fully responsive (mobile, tablet, desktop)
- Dark/light mode support

### Content Highlights
- **4 Detailed Projects** with architecture flows
- **AWS Certification** display
- **20+ Technologies** organized in 5 categories
- **Professional Experience** with concrete highlights
- **"Currently Exploring"** section showing active learning

### Projects Showcased
1. **SmartOps AI** - AI-powered business automation platform
2. **ERP Document Automation** - Email processing with 80% efficiency gain
3. **ERPNext Customization Suite** - Custom workflows and integrations
4. **Cloud Infrastructure Deploy** - AWS production environment

## 📝 Customization Guide

### Update Personal Information

**Contact Details** (`src/components/Contact.tsx`):
```typescript
const links = [
  { label: "Email", value: "your.email@gmail.com", ... },
  { label: "LinkedIn", value: "linkedin.com/in/yourname", ... },
  { label: "GitHub", value: "github.com/yourusername", ... },
];
```

**Experience** (`src/components/Experience.tsx`):
```typescript
const experience = {
  company: "Your Company",
  role: "Your Role",
  location: "Your Location",
  period: "YYYY – Present",
  highlights: [...],
};
```

**Projects** (`src/components/Projects.tsx`):
- Update project titles, descriptions, tech stacks
- Add real GitHub links (replace `#` placeholders)
- Customize architecture flows

**Skills** (`src/components/Skills.tsx`):
- Update skill groups and technologies
- Modify certification details
- Update "Currently Exploring" technologies

## 🚢 Deployment

### Cloudflare Pages (Recommended)
```bash
# Build the project
npm run build

# Deploy with Wrangler
npx wrangler pages deploy dist
```

### Other Platforms
- **Vercel**: Connect GitHub repo, auto-deploy on push
- **Netlify**: Drag & drop `dist/` folder
- **GitHub Pages**: Use `gh-pages` branch

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Build Size**: ~400KB (optimized with Vite)
- **First Contentful Paint**: <1.5s

## 🔧 Development Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run format          # Format with Prettier (if configured)

# Type Checking
npx tsc --noEmit       # TypeScript type check
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions:
1. Open an issue
2. Submit a pull request

## 📄 License

Portfolio content © 2026 Prasanth. All rights reserved.

Code is open source for learning purposes.

## 📞 Contact

- **Email**: prasanth.e390@gmail.com
- **LinkedIn**: [linkedin.com/in/prasanth-e](https://www.linkedin.com/in/prasanth-e-ba208b252/)
- **GitHub**: [github.com/Prasanth-bca](https://github.com/Prasanth-bca)

## 🎯 Target Roles

This portfolio is optimized for:
- Software Developer (Backend)
- Backend Developer
- Automation Engineer
- Cloud Support Engineer
- DevOps Engineer
- AI Automation Engineer
- ERP Developer/Consultant

---

**Built with** ❤️ **using React, TypeScript, and Tailwind CSS**
