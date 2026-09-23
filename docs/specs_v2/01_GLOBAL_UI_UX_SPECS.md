# 01. Global UI/UX & Architecture Specifications

## 1. Theme & Color Palette Shift (Light/Corporate Mode)
- **Current State:** Heavy reliance on `slate-950` (Dark Theme) and dark glassmorphism.
- **New State:** A bright, professional, and trustworthy corporate theme.
- **Color System:**
  - **Primary:** Deep Navy Blue (كحلي) for primary text and major elements (`text-navy-900`).
  - **Secondary:** Sky Blue (أزرق سماوي) for accents, primary buttons, and hover states (`bg-sky-500`, `text-sky-500`).
  - **Backgrounds:** Light Gray (`bg-slate-50`) to White (`bg-white`) for main containers. Dark Gray for specific highlighted sections.
  - **Black:** Used strictly for typography emphasis or subtle borders, not as a background.
- **Shadows & Glassmorphism:** Replace dark glassmorphism with soft, diffused drop shadows (e.g., `shadow-lg shadow-slate-200/50`) and white translucent backgrounds (`bg-white/80 backdrop-blur-md`).

## 2. Global Navigation (Navbar) Behavior
- **Scroll Effect (Home Page):** 
  - `scrollY === 0`: Transparent/Crystal background, extending the Hero section.
  - `scrollY > 50`: Transitions to solid White (`bg-white`) with a soft bottom shadow.
- **Link Styling:**
  - Remove button-like background enclosures.
  - Default: Deep Navy text.
  - Hover: Sky Blue text with a subtle 2px bottom border/underline appearing.
  - Active Route: Persistent Sky Blue bottom border.

## 3. Localization & Language Rules
- **Default Locale:** Set English (`en`) as the absolute default upon first visit.
- **Strict Separation:** A component must only render the active language payload. `t(data)` must guarantee no Arabic strings leak into the English view and vice-versa.
- **Language Switcher:**
  - Implement as a unified Toggle/Switch or a Globe icon with the *target* language text (e.g., viewing AR shows "EN", viewing EN shows "AR").
  - Apply this unified switcher to both Navbar and Footer.

## 4. Minor Added Enhancements (SE Standards)
- **Animation Consistency:** Establish a global CSS variable for transitions (`--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`) to unify Navbar scroll, hover effects, and Slider movements.
- **Accessibility (a11y):** Ensure contrast ratios in the new light theme pass WCAG AA. Maintain `aria-labels` for the language switcher and icon-only buttons (like "Back to Top").
