# 04. Execution Master Plan

When the execution command is given, the agent MUST follow this chronological strict roadmap in one continuous run.

## Phase 1: Foundation & Theme Overhaul
1. **Tailwind Config:** Remove dark mode enforcement. Update color palette (Navy, Sky, Slate-50).
2. **Global CSS:** Define `--transition-smooth`. Remove heavy dark backgrounds from `body`.
3. **i18n Composables:** Set `en` as default. Ensure strict language segregation.
4. **App Shell (Navbar & Footer):** 
   - Implement Scroll Listener in Navbar (Transparent to Solid White + Shadow).
   - Update Nav Links (no buttons, bottom-border on hover/active).
   - Unify Language Switcher.
   - Update Footer (Add WA, strip services list, simplify Back to Top).

## Phase 2: Structural Page Updates
1. **Home Page:** Redesign Hero (3D/Animation right, text left), re-layout Why Choose Us, shrink Service/Project cards, reposition tags.
2. **About Page:** Remove Tech and Values. Inline Mission/Vision titles. Update location to Syria and integrate it into the top section.
3. **Contact Page:** Remove demo warning. Swap labels for localized placeholders. Lock Textarea. Fix Select truncate issue. Update button text.

## Phase 3: Complex Component Engineering
1. **Projects/Services Lists:** Replace filter buttons with Dropdown Select. Implement Arrow+Number pagination.
2. **Service Details:** Reorder DOM (Button + Overview + Image -> 2-Col What's Included -> YouTube). Add hover states to lists. Remove numbers from Process cards.
3. **Project Details:** Reorder DOM. Move Live Link to Info block. Strip Platform/Team. 
4. **Stripe-Style Slider:** Build the custom full-bleed CSS Scroll Snap slider for Project Details. Delete old Lightbox Modal component if completely unused.

## Phase 4: Data Alignment & Final Verification
1. Update `company.json` (Syria).
2. Update `siteCopy.json` (Placeholders, Send button).
3. Run `npm run build` to verify production compilation.
4. Ensure no visual or functional regressions occur in the Admin Dashboard due to the public theme changes.
