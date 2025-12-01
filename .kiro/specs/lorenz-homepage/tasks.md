# Lorenz Homepage - Implementation Tasks

## Phase 1: Project Setup & Foundation

### Task 1.1: Asset Migration
- [ ] Copy images from `lorenz-copy/images/` to `src/assets/images/`
- [ ] Copy icons/SVGs from `lorenz-copy/fonts/` to `src/assets/icons/`
- [ ] Copy video from `lorenz-copy/media/` to `src/assets/video/`
- [ ] Organize assets by category (heroes, services, team, logos, icons)

### Task 1.2: CSS Foundation
- [ ] Create `src/styles/variables.css` with design tokens
- [ ] Create `src/styles/reset.css` for browser normalization
- [ ] Create `src/styles/global.css` for base styles
- [ ] Create `src/styles/animations.css` for reusable animations
- [ ] Import Google Fonts (Oswald, Open Sans)

### Task 1.3: JSON Data Files
- [ ] Create `src/data/navigation.json` - menu structure
- [ ] Create `src/data/services.json` - 5 service cards
- [ ] Create `src/data/reviews.json` - 9 customer reviews
- [ ] Create `src/data/faq.json` - 4 FAQ items
- [ ] Create `src/data/blog.json` - 3 blog posts
- [ ] Create `src/data/locations.json` - service area cities
- [ ] Create `src/data/process.json` - 4 process steps

### Task 1.4: Common Components
- [ ] Create `Button` component (primary, secondary, outline variants)
- [ ] Create `Container` component (max-width wrapper)
- [ ] Create `SectionHeader` component (title + subtitle pattern)
- [ ] Create `Icon` component (SVG loader)

---

## Phase 2: Layout Components

### Task 2.1: Header Component
- [ ] Create Header structure (logo, nav, CTA)
- [ ] Implement sticky behavior with scroll detection
- [ ] Style navigation links with hover states
- [ ] Create MegaMenu component for Services dropdown
- [ ] Add phone number and Book Service button
- [ ] Add search icon button

### Task 2.2: Mobile Navigation
- [ ] Create hamburger menu icon
- [ ] Create MobileMenu slide-out drawer
- [ ] Implement accordion for mobile sub-menus
- [ ] Add close button and overlay

### Task 2.3: Footer Component
- [ ] Create footer layout (logo, locations, nav columns)
- [ ] Add Springfield and Branson location info
- [ ] Create mega navigation grid (7 columns)
- [ ] Add copyright bar with links
- [ ] Style for responsive (accordion on mobile)

---

## Phase 3: Hero Section

### Task 3.1: Hero Layout
- [ ] Create Hero component structure
- [ ] Add background image (technician photo)
- [ ] Create blue diagonal overlay with CSS clip-path
- [ ] Position content on right side

### Task 3.2: Hero Content
- [ ] Add H1 and H2 headings
- [ ] Add description paragraph
- [ ] Create bullet list with checkmark icons
- [ ] Add Google Reviews badge with avatars

### Task 3.3: Hero CTA Cards
- [ ] Create 3 CTA cards below hero
- [ ] Add icons and text for each card
- [ ] Style hover effects
- [ ] Make responsive (stack on mobile)

---

## Phase 4: Services Section

### Task 4.1: Services Layout
- [ ] Create Services section container
- [ ] Add section header with "View All Services" button
- [ ] Create grid layout (3+2 pattern)

### Task 4.2: ServiceCard Component
- [ ] Create card structure (image, icon, title, description)
- [ ] Style card with rounded corners and shadow
- [ ] Add hover effect (lift + shadow)
- [ ] Add "View Service" link with arrow

### Task 4.3: Services Data Integration
- [ ] Load services from JSON
- [ ] Map data to ServiceCard components
- [ ] Add correct images and icons for each service

---

## Phase 5: Process Section

### Task 5.1: Process Layout
- [ ] Create two-column layout (image left, content right)
- [ ] Add woman-on-phone image
- [ ] Add section header

### Task 5.2: Process Steps
- [ ] Create ProcessStep component
- [ ] Add 4 steps with icons and text
- [ ] Implement accordion expand/collapse
- [ ] Add step numbers and styling

---

## Phase 6: Reviews Section

### Task 6.1: Reviews Layout
- [ ] Create full-width section with van background
- [ ] Add dark overlay for readability
- [ ] Add section header and buttons

### Task 6.2: Reviews Carousel
- [ ] Install and configure Swiper.js
- [ ] Create ReviewCard component
- [ ] Style cards with profile photo, quote, name, rating
- [ ] Add navigation arrows
- [ ] Configure autoplay and loop

### Task 6.3: Reviews Data
- [ ] Populate reviews.json with 9 reviews
- [ ] Add Google logo and star rating images
- [ ] Test carousel functionality

---

## Phase 7: Middle Sections

### Task 7.1: Partnerships Section
- [ ] Create section with heading and description
- [ ] Add 3 partner logos (Diamond, Trane, Generac)
- [ ] Add "Learn more" button

### Task 7.2: Honest Service Section
- [ ] Create two-column layout
- [ ] Add van/technician image
- [ ] Add heading, description, CTA button

### Task 7.3: About Section
- [ ] Create blue diagonal background
- [ ] Add Lorenz Guarantee badge
- [ ] Add Mike's quote and signature
- [ ] Add Mike's circular photo
- [ ] Add social proof bar (Google, Facebook, Angi ratings)

### Task 7.4: Proud Members Section
- [ ] Add "Proud Members Of" heading
- [ ] Add 3 logos (HBA, Springfield Chamber, BBB)

### Task 7.5: Service Areas Section
- [ ] Add Missouri map image with markers
- [ ] Add section header and description
- [ ] Create city list grid
- [ ] Add "Get In Touch" button

### Task 7.6: Offers Section
- [ ] Create section header
- [ ] Add image with Trane badge
- [ ] Create red-bordered card
- [ ] Add checklist items
- [ ] Add "Learn More" button

### Task 7.7: Trusted Section
- [ ] Create two-column layout
- [ ] Add technician image (circular crop)
- [ ] Add blue background with heading
- [ ] Add "Get In Touch" button

---

## Phase 8: FAQ Section

### Task 8.1: FAQ Layout
- [ ] Create two-column layout
- [ ] Left: Mike's photo, quote, button
- [ ] Right: FAQ accordion

### Task 8.2: FAQ Accordion
- [ ] Create FAQItem component
- [ ] Implement expand/collapse with animation
- [ ] Add rotating arrow icon
- [ ] First item open by default
- [ ] Load data from faq.json

---

## Phase 9: Blog Section

### Task 9.1: Blog Layout
- [ ] Create section header with "View All Articles" button
- [ ] Create 3-column grid

### Task 9.2: BlogCard Component
- [ ] Create card with image, read time badge, title, excerpt
- [ ] Add "Keep Reading" link
- [ ] Style hover effects
- [ ] Load data from blog.json

---

## Phase 10: Contact Section

### Task 10.1: Contact Layout
- [ ] Create full-width team photo background
- [ ] Add heading and CTA button
- [ ] Position form card on right

### Task 10.2: Contact Form
- [ ] Create multi-step form component
- [ ] Step 1: ZIP Code input
- [ ] Step 2: Contact info fields
- [ ] Step 3: Service selection
- [ ] Add progress indicator
- [ ] Add social proof badges

---

## Phase 11: Animations & Polish

### Task 11.1: Scroll Animations
- [ ] Create useIntersectionObserver hook
- [ ] Add fade-in-up animations to sections
- [ ] Add stagger delays for lists/grids

### Task 11.2: Hover States
- [ ] Verify all button hover effects
- [ ] Verify all card hover effects
- [ ] Verify all link hover effects

### Task 11.3: Transitions
- [ ] Smooth scroll for anchor links
- [ ] Header shadow transition on scroll
- [ ] Menu transitions

---

## Phase 12: Responsive & Testing

### Task 12.1: Responsive Testing
- [ ] Test at 1440px (desktop)
- [ ] Test at 1024px (tablet landscape)
- [ ] Test at 768px (tablet portrait)
- [ ] Test at 375px (mobile)
- [ ] Fix any layout issues

### Task 12.2: Cross-Browser Testing
- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge

### Task 12.3: Visual Comparison
- [ ] Compare each section with screenshots
- [ ] Adjust spacing/sizing as needed
- [ ] Verify colors match exactly
- [ ] Verify fonts match exactly

### Task 12.4: Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images if needed
- [ ] Lazy load below-fold content
- [ ] Verify load time < 3s

---

## Completion Checklist

- [ ] All 16 sections implemented
- [ ] All animations working
- [ ] Fully responsive
- [ ] All data from JSON files
- [ ] Visual match with original site
- [ ] No console errors
- [ ] Clean, organized code
