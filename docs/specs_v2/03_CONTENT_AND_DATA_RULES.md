# 03. Content & Data Migration Rules

This document outlines the strict changes required in the underlying JSON data schemas (`src/data/*.json`) to support the new UI/UX specifications.

## 1. Company Data (`company.json`)
- **Location Update:** 
  - Change Headquarters and Branches from "Saudi Arabia / Riyadh" to "Syria / سوريا".
  - Ensure the Arabic string reads properly as "سوريا" and English as "Syria".
- **Redundancy Handling:** 
  - `values` and `technologies` arrays can remain in the JSON for the Admin Dashboard's sake, but the About View must be programmed *not* to render them.

## 2. Project Data (`projects.json`)
- **Stripe-Style Slider Images:**
  - The `gallery` array should ideally point to high-quality, landscape-oriented images suitable for a full-bleed horizontal slider.
  - No schema change needed, but CSS must enforce `object-cover` and a fixed height (e.g., `h-[400px]`) to maintain slider consistency.
- **Removed Fields:** 
  - UI will ignore `teamSize` and `platform`. These can remain in the JSON schema to prevent data loss but must be removed from `ProjectDetailsView.vue`.

## 3. Site Copy Data (`siteCopy.json`)
- **Pagination Translations:** Remove keys for "Next", "Previous", and "Page" if they are no longer used by the UI.
- **Contact Form Placeholders:** Update/Add keys specifically for placeholders (e.g., `enterName: { ar: 'أدخل اسمك', en: 'Enter your name' }`).
- **Submit Button:** Update text from "Validate Form Locally" to "إرسال / Send".
- **Demo Notice:** Remove `demoNotice` key usage.

## 4. Enhanced Empty States (Minor SE Addition)
- When implementing the new `<select>` dropdown filters for Services and Projects, ensure the logic handling empty results (e.g., if a category has 0 items) maintains the new Light Theme styling elegantly.
