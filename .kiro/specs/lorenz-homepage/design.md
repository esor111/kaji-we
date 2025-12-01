# Lorenz Homepage - Technical Design Document

## Architecture Overview

### Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: CSS Modules + CSS Variables
- **Icons**: SVG icons from scraped assets
- **Animations**: CSS transitions + Framer Motion (for complex animations)
- **Carousel**: Swiper.js
- **State**: React useState/useContext (no Redux needed)

---

## Design Tokens

### Colors
```css
:root {
  /* Primary */
  --color-primary-blue: #1a1f71;      /* Dark navy blue */
  --color-primary-red: #e31837;       /* Lorenz red */
  
  /* Secondary */
  --color-blue-light: #2d3494;        /* Lighter blue for hovers */
  --color-blue-dark: #0f1347;         /* Darker blue for gradients */
  
  /* Neutrals */
  --color-white: #ffffff;
  --color-gray-100: #f8f9fa;
  --color-gray-200: #e9ecef;
  --color-gray-300: #dee2e6;
  --color-gray-600: #6c757d;
  --color-gray-900: #212529;
  
  /* Accents */
  --color-google: #4285f4;
  --color-facebook: #1877f2;
  --color-success: #28a745;
}
```

### Typography
```css
:root {
  /* Font Families */
  --font-heading: 'Oswald', sans-serif;
  --font-body: 'Open Sans', sans-serif;
  
  /* Font Sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Spacing
```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Breakpoints
```css
/* Mobile First */
--bp-sm: 576px;
--bp-md: 768px;
--bp-lg: 992px;
--bp-xl: 1200px;
--bp-xxl: 1400px;
```

---

## Component Architecture

```
src/
├── components/
│   ├── common/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   ├── Card/
│   │   ├── Icon/
│   │   ├── Container/
│   │   └── SectionHeader/
│   │
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.css
│   │   │   ├── MegaMenu.jsx
│   │   │   └── MobileMenu.jsx
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   │
│   └── sections/
│       ├── Hero/
│       │   ├── Hero.jsx
│       │   ├── Hero.module.css
│       │   └── HeroCards.jsx
│       ├── Services/
│       │   ├── Services.jsx
│       │   ├── Services.module.css
│       │   └── ServiceCard.jsx
│       ├── Process/
│       ├── Reviews/
│       │   ├── Reviews.jsx
│       │   ├── Reviews.module.css
│       │   └── ReviewCard.jsx
│       ├── Partnerships/
│       ├── HonestService/
│       ├── About/
│       ├── ProudMembers/
│       ├── ServiceAreas/
│       ├── Offers/
│       ├── Trusted/
│       ├── FAQ/
│       │   ├── FAQ.jsx
│       │   ├── FAQ.module.css
│       │   └── FAQItem.jsx
│       ├── Blog/
│       │   ├── Blog.jsx
│       │   └── BlogCard.jsx
│       └── Contact/
│           ├── Contact.jsx
│           └── ContactForm.jsx
│
├── data/
│   ├── services.json
│   ├── reviews.json
│   ├── faq.json
│   ├── blog.json
│   ├── locations.json
│   └── navigation.json
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── video/
│
├── styles/
│   ├── variables.css
│   ├── reset.css
│   ├── global.css
│   └── animations.css
│
├── hooks/
│   └── useIntersectionObserver.js
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── main.jsx
```

---

## Component Specifications

### Header Component
```jsx
// Props: none (uses navigation.json)
// State: isScrolled, isMobileMenuOpen, activeDropdown
// Behavior:
//   - Sticky on scroll (add shadow when scrolled)
//   - Mega menu on hover (desktop)
//   - Hamburger menu (mobile)
```

### Hero Component
```jsx
// Props: none
// Features:
//   - Background image with blue diagonal overlay
//   - CSS clip-path for diagonal effect
//   - Animated entrance (fade in + slide up)
```

### ServiceCard Component
```jsx
// Props: { image, icon, title, description, link }
// Hover: translateY(-8px) + box-shadow increase
// Transition: 0.3s ease
```

### ReviewCarousel Component
```jsx
// Uses: Swiper.js
// Config:
//   - slidesPerView: 3 (desktop), 1 (mobile)
//   - spaceBetween: 30
//   - loop: true
//   - autoplay: { delay: 5000 }
//   - navigation: true
```

### FAQItem Component
```jsx
// Props: { question, answer, isOpen, onToggle }
// Animation: max-height transition for expand/collapse
// Icon: Arrow rotates 180deg when open
```

### ContactForm Component
```jsx
// State: currentStep (1-3), formData
// Steps:
//   1. ZIP Code input
//   2. Name, Email, Phone
//   3. Service type selection
// Validation: Basic client-side
```

---

## Animation Specifications

### Entrance Animations
```css
/* Fade In Up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger delay for lists */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
```

### Hover Effects
```css
/* Card Lift */
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Button Scale */
.button:hover {
  transform: scale(1.02);
}

/* Link Underline */
.link::after {
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.link:hover::after {
  transform: scaleX(1);
}
```

### Scroll Animations
- Use Intersection Observer
- Trigger animations when section enters viewport
- 20% threshold for trigger

---

## Data Schema

### services.json
```json
[
  {
    "id": "plumbing",
    "title": "Plumbing",
    "description": "Reliable plumbing service...",
    "icon": "icon-plumbing-blue.svg",
    "image": "plumbing-service.webp",
    "link": "/plumbing"
  }
]
```

### reviews.json
```json
[
  {
    "id": 1,
    "name": "Gregory G",
    "text": "I scheduled Lorenz to come help me...",
    "rating": 5,
    "source": "google",
    "avatar": "gregory-g.png"
  }
]
```

### faq.json
```json
[
  {
    "id": 1,
    "question": "What services does Lorenz Plumbing Heating & Air offer?",
    "answer": "We provide a complete range of services..."
  }
]
```

---

## Responsive Behavior

### Header
- Desktop: Full nav visible, mega menu on hover
- Tablet: Condensed nav, dropdown menus
- Mobile: Hamburger menu, slide-out drawer

### Hero
- Desktop: Side-by-side layout (image left, content right)
- Mobile: Stacked, image as background

### Services Grid
- Desktop: 3 columns (top row), 2 columns (bottom row)
- Tablet: 2 columns
- Mobile: 1 column

### Reviews Carousel
- Desktop: 3 visible slides
- Tablet: 2 visible slides
- Mobile: 1 visible slide

### Footer
- Desktop: 7-column mega nav
- Tablet: 3-column grid
- Mobile: Accordion sections

---

## Performance Optimizations

1. **Image Optimization**
   - Use WebP format
   - Lazy load below-fold images
   - Responsive srcset

2. **Code Splitting**
   - Lazy load section components
   - Dynamic import for Swiper

3. **CSS**
   - CSS Modules for scoping
   - Purge unused styles in production

4. **Fonts**
   - Preload critical fonts
   - font-display: swap
