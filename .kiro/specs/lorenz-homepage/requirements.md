# Lorenz Plumbing Website - Homepage Replica Requirements

## Overview
Create a pixel-perfect React replica of the Lorenz Plumbing Heating & Air homepage (https://lorenzphac.com/) with exact UI, interactions, animations, and responsive behavior.

## Reference Materials
- Screenshots: `screenshots/` folder (15 section screenshots)
- Scraped assets: `lorenz-copy/` folder (images, CSS, fonts, icons)
- Live site: https://lorenzphac.com/

---

## Functional Requirements

### FR-1: Header/Navigation
- **FR-1.1**: Sticky header that stays fixed on scroll
- **FR-1.2**: Logo (Lorenz oval logo) links to homepage
- **FR-1.3**: Main navigation: Services, About Us, Resources, Contact
- **FR-1.4**: Services dropdown with mega-menu (Plumbing, Heating, AC, Sewer, Additional)
- **FR-1.5**: "Call Us Today" with phone number (417) 441-3517
- **FR-1.6**: "Book Service" CTA button (blue with arrow icon)
- **FR-1.7**: Search icon button
- **FR-1.8**: Mobile hamburger menu for responsive

### FR-2: Hero Section
- **FR-2.1**: Full-width background image (technician working on HVAC)
- **FR-2.2**: Blue diagonal overlay on right side
- **FR-2.3**: H1: "Plumbing, Heating, and Air Conditioning Services in Springfield, MO & Beyond"
- **FR-2.4**: H2: "Your FRIENDS in Plumbing Heating & Air"
- **FR-2.5**: Description paragraph
- **FR-2.6**: 3 bullet points with checkmarks (45+ Years, Free Estimates, Financing)
- **FR-2.7**: "200+ Google Reviews" badge with star rating and profile avatars
- **FR-2.8**: 3 CTA cards below hero (Schedule Free Estimate, Performance Maintenance, Free Water Heater Estimate)

### FR-3: Services Section
- **FR-3.1**: Section title "Our Services" with "View All Services" button
- **FR-3.2**: 5 service cards in grid layout:
  - Plumbing (faucet icon)
  - Heating (flame icon)
  - Air Conditioning (fan icon)
  - Sewer and Drain (pipe icon)
  - Additional Services (gear icon)
- **FR-3.3**: Each card has: image, icon, title, description, "View Service" link
- **FR-3.4**: Hover effect on cards (lift/shadow)

### FR-4: Our Process Section
- **FR-4.1**: Left side: Image of woman on phone
- **FR-4.2**: Right side: "Our Process" / "A Process That Works"
- **FR-4.3**: 4 steps with icons:
  - Step 1: Contact Our Team
  - Step 2: Schedule Your Estimate or Repair
  - Step 3: Review Your Estimate
  - Step 4: Problem Solved!
- **FR-4.4**: Expandable/accordion behavior on step click

### FR-5: Reviews Section
- **FR-5.1**: Full-width background image (Lorenz van)
- **FR-5.2**: "Reviews" / "Our Client Stories" heading
- **FR-5.3**: "Leave A Review" and "See All Reviews" buttons
- **FR-5.4**: Carousel slider with review cards
- **FR-5.5**: Each review: quote, customer name, Google logo, 5-star rating, profile photo
- **FR-5.6**: Left/right navigation arrows
- **FR-5.7**: Auto-slide animation

### FR-6: Partnerships Section
- **FR-6.1**: "Our Proud Partnerships" heading with description
- **FR-6.2**: 3 partner logos: Diamond Contractor Elite, Trane Comfort Specialist, Generac
- **FR-6.3**: "Learn more" button

### FR-7: Honest Service Section
- **FR-7.1**: Left: Image of smiling technician with van
- **FR-7.2**: Right: "Your Source for Honest Heating, Air Conditioning, and Plumbing"
- **FR-7.3**: Description paragraph
- **FR-7.4**: "Book Your Appointment" CTA button

### FR-8: About Us Section
- **FR-8.1**: Blue diagonal background
- **FR-8.2**: "Lorenz Guarantee" badge
- **FR-8.3**: "About Us" / "A History of Dependable Service"
- **FR-8.4**: Quote from Mike (owner)
- **FR-8.5**: Mike's signature (handwritten style)
- **FR-8.6**: Mike's photo (circular crop)
- **FR-8.7**: Social proof bar: Google 4.9, Facebook 90%, Angi 4.5
- **FR-8.8**: "Meet Our Team" button

### FR-9: Proud Members Section
- **FR-9.1**: "Proud Members Of" heading
- **FR-9.2**: 3 logos: HBA, Springfield Chamber, BBB A+ Rating

### FR-10: Service Areas Section
- **FR-10.1**: Missouri map with highlighted service area
- **FR-10.2**: Location markers for Springfield and Branson
- **FR-10.3**: "Service Areas" / "Missouri-Made Service You Can Trust"
- **FR-10.4**: List of cities served (Nixa, Ozark, Rogersville, etc.)
- **FR-10.5**: "Get In Touch" button

### FR-11: Offers & Deals Section
- **FR-11.1**: "Offers & Deals" / "Save Money, Stay Comfortable"
- **FR-11.2**: Left: Image with Trane badge
- **FR-11.3**: Right: Red-bordered card with "Performance Maintenance Agreement"
- **FR-11.4**: Checklist items with red checkmarks
- **FR-11.5**: "Learn More" button

### FR-12: Trusted Since 1978 Section
- **FR-12.1**: Left: Image of technician working on wiring
- **FR-12.2**: Right: Blue background with "Trusted Since 1978"
- **FR-12.3**: Description text
- **FR-12.4**: "Get In Touch" button

### FR-13: FAQ Section
- **FR-13.1**: Left side: Mike's photo, quote, "See All Questions" button
- **FR-13.2**: Right side: Accordion FAQ items
- **FR-13.3**: 4 questions:
  - What services does Lorenz offer?
  - Do you offer financing options?
  - How do I schedule an appointment?
  - Why should I trust Lorenz?
- **FR-13.4**: Expand/collapse animation on click
- **FR-13.5**: First question expanded by default

### FR-14: Blog Section
- **FR-14.1**: "Blog" / "Your Home Services Hub"
- **FR-14.2**: "View All Articles" button
- **FR-14.3**: 3 blog cards with:
  - Featured image
  - Read time badge (e.g., "5 MIN READ")
  - Title
  - Excerpt
  - "Keep Reading" link

### FR-15: Contact Section
- **FR-15.1**: Full-width team photo background
- **FR-15.2**: "Lorenz: Your Friends in Heating Plumbing & Air"
- **FR-15.3**: "Schedule Your Appointment" button
- **FR-15.4**: Multi-step form card:
  - Step 1: ZIP Code
  - Step 2: Contact info
  - Step 3: Service type
- **FR-15.5**: Social proof badges (Google, Facebook, BBB)

### FR-16: Footer
- **FR-16.1**: Lorenz logo
- **FR-16.2**: Two location columns (Springfield, Branson)
- **FR-16.3**: Phone numbers and email
- **FR-16.4**: "Emergency Services 24/7" text
- **FR-16.5**: Mega navigation (7 columns): Plumbing, Sewer/Drain, Heating, AC, Additional, About, Resources
- **FR-16.6**: Copyright bar with Privacy Policy, Terms, Accessibility links
- **FR-16.7**: "Site design by Hook Agency" credit

---

## Non-Functional Requirements

### NFR-1: Performance
- Page load under 3 seconds
- Lazy load images below fold
- Optimized asset delivery

### NFR-2: Responsive Design
- Desktop: 1440px+
- Tablet: 768px - 1439px
- Mobile: 320px - 767px

### NFR-3: Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)

### NFR-4: Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

---

## Data Requirements

### DR-1: JSON Data Files
- `services.json` - Service cards data
- `reviews.json` - Customer testimonials
- `team.json` - Team member info
- `faq.json` - FAQ questions/answers
- `blog.json` - Blog post previews
- `locations.json` - Service area cities
- `navigation.json` - Menu structure

---

## Acceptance Criteria

1. Visual comparison with live site shows < 5% deviation
2. All animations match original timing and easing
3. All hover states replicated
4. Responsive breakpoints match original
5. All links functional (internal navigation)
6. Form UI complete (submission mocked)
7. Carousel/slider functionality working
8. FAQ accordion working
