# Cafeteria-Halab

A modern, responsive restaurant website for Cafeteria Halab - showcasing authentic Aleppo cuisine in Kuwait.

Live link: https://cafeteriahalab.netlify.app/

## 📋 Project Overview

This project is a single-page application (SPA) built for learning purposes, featuring a complete restaurant website with multiple pages, interactive components, and a focus on user experience. The site celebrates traditional Syrian/Aleppo cuisine with a clean, heritage-inspired design.

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Multiple Pages** - Home, Our Story, Menu, and Contact pages with React Router
- **Interactive Components** - Navigation bar with hamburger menu, auto-rotating reviews carousel
- **Video Hero Section** - Eye-catching hero section with video background
- **Product Showcase** - Best sellers grid with images and "Order Now" CTAs
- **Contact Form** - Functional form using FormSubmit service
- **Social Media Integration** - Links to Facebook, Instagram, and Twitter
- **Google Maps Integration** - Embedded location map in footer

## 🛠️ Technologies Used

- **React** (18.x) with TypeScript
- **Vite** - Fast build tool and dev server
- **React Router DOM** - Client-side routing
- **Font Awesome** - Icon library for UI elements
- **CSS3** - Custom styling with CSS variables for theming
- **FormSubmit.co** - Contact form backend

## 🎨 Design System

The site uses an "Aleppo-inspired" color palette defined in CSS variables:

- `--aleppo-stone`: #faf7f2 (Light background)
- `--aleppo-pomegranate`: #b23a3a (Primary accent - red)
- `--aleppo-olive`: #556b2f (Secondary accent - green)
- `--aleppo-charcoal`: #2b2b2b (Text color)
- `--aleppo-gold`: #c9a24d (Highlights)

## 📁 Project Structure

```
Cafeteria-halab/
├── public/
│   ├── _redirects          # Netlify redirects for SPA routing
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── Images/         # Product and team photos
│   │   └── videos/         # Hero background video
│   ├── components/
│   │   ├── home/           # Home page components
│   │   ├── menu/           # Menu page components
│   │   └── layout/         # Layout utilities (ScrollToTop)
│   ├── data/
│   │   └── menuData.ts     # Menu items data
│   ├── pages/              # Page-level components
│   ├── styles/             # Component-specific CSS files
│   ├── App.tsx             # Main app component with routes
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Cafeteria-halab
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📦 Dependencies

### Core Dependencies
- `react` - UI library
- `react-dom` - React rendering
- `react-router-dom` - Routing
- `@fortawesome/react-fontawesome` - Icon components
- `@fortawesome/free-solid-svg-icons` - Solid icons
- `@fortawesome/free-brands-svg-icons` - Brand icons

### Dev Dependencies
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `typescript` - Type checking
- `@types/react` - React type definitions

## 🎯 Learning Outcomes

This project was built to practice and demonstrate:

- **React fundamentals** - Components, props, state management (useState, useEffect)
- **TypeScript integration** - Type-safe React components
- **React Router** - Multi-page navigation in an SPA
- **Responsive design** - Mobile-first CSS with media queries
- **Component architecture** - Reusable, modular components
- **Form handling** - Third-party form service integration
- **Build optimization** - Using Vite for fast development and production builds
- **Asset management** - Images, videos, and fonts in React

## 🔗 External Integrations

- **Talabat** - Online ordering platform (linked via buttons)
- **FormSubmit.co** - Contact form email delivery
- **Google Maps** - Location embed in footer

## 📝 Key Components

- `NavigationBarComponent` - Responsive navbar with mobile menu
- `HeroSection` - Video background with CTA button
- `BestSellersGrid` - Product showcase cards
- `ReviewsComponent` - Auto-rotating customer reviews carousel
- `AboutComponent` - Feature cards with icons
- `MenuSection` - Reusable menu category component
- `Footer` - Contact info and map

## 🌐 Deployment

The `_redirects` file in the `public/` folder is configured for Netlify deployment to handle client-side routing properly.

## ⚠️ Note

This is a **learning project** created for educational purposes. The restaurant data, images, and contact information are used as examples. The Talabat links and contact email should be updated with real information before production use.

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Font Awesome for the icon library
- Vite team for the excellent build tool
- React community for documentation and resources

---

**Built with ❤️ for learning React and modern web development**