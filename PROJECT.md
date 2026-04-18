# The Pixel Lab - Photography Portfolio Website

## Project Overview

**The Pixel Lab** is a modern, responsive photography portfolio website built with React, TypeScript, Vite, and Tailwind CSS. It showcases the work of Anna Voronovskaya, a professional photographer specializing in portrait, fashion, and lifestyle photography.

The site features a clean, minimalist design with smooth scrolling, responsive layouts for mobile and desktop, and seamless section transitions.

---

## Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Custom component architecture (atoms, molecules, organisms)
- **Font**: Gill Sans MT with custom fallbacks
- **Design System**: Custom theme with clay, charcoal, and mist color palette

---

## Project Structure

```
pixel_labs/
├── src/
│   ├── assets/              # Images and media files
│   │   ├── photographer.jpeg
│   │   ├── photoshoot.jpg
│   │   ├── thepixellabs-removebg-preview.png
│   │   ├── thepixellabs.png
│   │   ├── hero.png
│   │   └── vite.svg
│   │
│   ├── components/          # React component hierarchy
│   │   ├── atoms/           # Small, reusable base components
│   │   ├── molecules/       # Combinations of atoms
│   │   ├── organisms/       # Complex sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── AboutMeSection.tsx
│   │   │   └── PricesSection.tsx
│   │   ├── pages/
│   │   ├── templates/
│   │   └── ui/
│   │
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   │
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # React DOM entry point
│   └── index.css            # Global styles and animations
│
├── public/                  # Static assets served directly
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
├── eslint.config.js        # ESLint rules
├── components.json         # shadcn/ui component config
├── README.md               # Project readme
└── PROJECT.md              # This file
```

---

## Key Features

### 1. Hero Section (`HeroSection.tsx`)
- Full-height hero image overlay with atmospheric fog effects
- Responsive logo (text-only on desktop, icon-only on mobile)
- Social media links:
  - Instagram: [@thepixellab.lb](https://www.instagram.com/thepixellab.lb)
  - WhatsApp: Direct contact link
- Smooth scroll button to portfolio section
- Animated SVG icons for social links
- Noise and fog gradient overlays for premium feel

**Features:**
- Responsive header with gap-based layout
- Fog animations with CSS keyframes (fogDrift, fogPulse)
- Smooth scroll behavior on CTA button
- Mobile-optimized social media icons

### 2. Portfolio Section (`PortfolioSection.tsx`)
- 3x3 grid gallery of photography work
- Filterable by category: All, Portrait, Fashion, Life
- Active filter indicator with underline animation
- Lazy loading of images
- "SEE MORE WORKS" button links directly to Instagram profile
- Responsive layout (full width on mobile, constrained on desktop)

**Features:**
- React hooks for state management (useState, useMemo)
- Dynamic filtering and sorting
- Priority-based image ordering
- Smooth filter transitions

### 3. About Me Section (`AboutMeSection.tsx`)
- Full-height responsive layout with centered content
- "SOMETHING" subtitle label
- "ABOUT ME" heading with elegant spacing
- Three paragraphs of biography with line-break control for desktop
- Photoshoot background image with gradient fade (hidden on mobile)
- Warm gold-to-white gradient transition at bottom

**Features:**
- Full-height centered layout with flexbox
- Smart typography with responsive font sizes
- Image gradient fade for smooth section transitions
- Mobile-optimized (no gradient overlay on mobile)

### 4. Prices Section (`PricesSection.tsx`)
- Three pricing tiers: Minimal ($100), Standard ($200), Maximum ($350)
- "Prices" heading with decorative Playball font
- Clean card-based layout with shadow and ring effects
- Each card displays:
  - Package name and price
  - Duration (2 hours)
  - Number of photos (50-70)
  - Consultation on style
- "Schedule photosession" buttons link to WhatsApp with pre-filled package info
- Responsive: Cards stack vertically on mobile, display horizontally on desktop

**Features:**
- Dynamic WhatsApp message generation per package
- Fully responsive card grid
- Tailwind CSS shadows and rings for depth
- Clean bordered button styling with hover effects

---

## Design System

### Colors
- **Primary (Accent)**: `#c46545` - Clay/terracotta tone
- **Text Dark**: `#222222` / `#333333` - Charcoal
- **Text Light**: `#555555` / `#8b8b8b` - Mist gray
- **Background**: `#d2d2d2` - Light gray
- **Warm Accent**: `#fcf7ec` - Soft gold/ivory

### Typography
- **Font Family**: Gill Sans MT (fallback: sans-serif)
- **Headings**: Light weight (300), increased letter spacing
- **Body**: Light weight (300-400), readable line height

### Spacing & Layout
- **Container Max Width**: `max-w-5xl` / `max-w-6xl`
- **Padding**: Responsive `px-6 sm:px-10`
- **Gaps**: Generous spacing between sections
- **Full Viewport Height**: `h-dvh` (dynamic viewport height)

### Animations
- **Scroll Behavior**: `scroll-smooth` for native smooth scrolling
- **Fog Effects**: CSS keyframe animations (fogDrift 18s, fogPulse 12s)
- **Hover States**: `-translate-y-0.5` on social icons, `bg-black/5` on buttons
- **Bouncing Arrow**: `animate-bounce` on scroll-down button

---

## Responsive Behavior

### Mobile-First Approach
- **Mobile**: Single-column layout, full width, optimized spacing
- **Tablet (sm: 640px)**: Begin multi-column layouts
- **Desktop (md: 768px)**: Full features, snap scrolling removed for natural scroll
- **Large (lg: 1024px)**: Maximum content width containers

### Key Responsive Features
1. **Logo**: Icon-only on mobile (`h-15`), name hidden with `hidden sm:inline`
2. **Portfolio**: Full-width grid on mobile, 3x3 grid on desktop
3. **Pricing Cards**: Stack vertically on mobile, horizontal flex row on desktop
4. **About Section**: No gradient fade on mobile (`hidden sm:block`)
5. **Text**: Scales from `text-lg` (mobile) to `text-2xl+` (desktop)

---

## Scrolling & Navigation

### Smooth Scroll
- Native CSS `scroll-smooth` class enabled globally
- Scroll-to-portfolio button uses `document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })`

### Section IDs for Deep Linking
- `#portfolio` - Portfolio gallery section
- `#about` - About me section
- `#prices` - Pricing packages section

---

## External Integrations

### Social Media
- **Instagram**: Direct link to [@thepixellab.lb](https://www.instagram.com/thepixellab.lb)
- **WhatsApp**: Contact link to `+961 70 821 128`
  - Pre-filled messages for pricing packages

---

## Browser Support

- Modern browsers with ES2020+ support
- CSS Grid, Flexbox, and CSS Variables fully utilized
- Smooth scrolling API support required

---

## Performance Optimizations

1. **Image Loading**: `loading="lazy"` on portfolio grid images
2. **Dynamic Imports**: React component code-splitting via Vite
3. **CSS Optimization**: Tailwind CSS purging unused styles
4. **Noise Pattern**: Inline SVG data URI to avoid extra HTTP requests

---

## Future Enhancements

### Planned Features
1. **Admin Dashboard** (Next.js separate project)
   - Edit about section text
   - Manage portfolio images and categories
   - Update pricing tiers
   - Single admin user with 2FA

2. **Backend API** (NestJS)
   - RESTful endpoints for content management
   - Database (PostgreSQL + Prisma ORM)
   - Role-based access control (RBAC)
   - Image storage (Cloudflare R2 or S3)

3. **Blog Section** - Photography tips and stories

4. **Contact Form** - Email/form submission

5. **Analytics** - Visitor tracking and engagement metrics

---

## Getting Started

### Installation
```bash
cd pixel_labs
npm install
```

### Development
```bash
npm run dev
```
Runs on `http://localhost:5173`

### Build
```bash
npm run build
```
Production-ready build in `dist/` folder

### Preview
```bash
npm run preview
```

---

## CSS Custom Properties & Animations

### Global Animations
```css
@keyframes fogDrift {
  /* Background gradient animation on hero fog */
}

@keyframes fogPulse {
  /* Opacity pulsing animation on hero fog */
}
```

### Reusable Classes
- `.hero-fog-top` - Top fog gradient with drift animation
- `.hero-fog-bottom` - Bottom fog gradient with pulse animation
- `.hero-noise` - Noise texture overlay

---

## Notes

- All hardcoded content should be migrated to backend/CMS for editability
- Images are currently local assets; should move to cloud storage
- Social media links are hardcoded; consider centralizing configuration
- Pricing data is hardcoded in component; should come from API
- Portfolio images use placeholder service (picsum.photos); update with real client images

---

## License

Private project. All rights reserved.

---

## Contact

For inquiries about photography services:
- Instagram: [@thepixellab.lb](https://www.instagram.com/thepixellab.lb)
- WhatsApp: [+961 70 821 128](https://wa.me/96170821128)
