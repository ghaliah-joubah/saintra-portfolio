# 02. Pages & Components Specifications

## 1. Home Page
- **Hero Section:**
  - Remove all Tech Stack badges.
  - Layout: Text and CTA on the Left (in LTR) / Right (in RTL). 
  - Visual: Implement a 3D-inspired element or highly polished CSS animated graphic on the opposite side. Background extends behind the Navbar.
- **Why Partner with SAINTRA:**
  - Layout: Icon and Title inline horizontally. Remove enclosing borders around the icon.
- **Services Preview:**
  - Layout: Smaller, tighter cards. Service Type/Category badge placed inline next to the main Icon.
- **Projects Preview:**
  - Layout: Remove tech stack tags. Relocate Project Type below the image and above the Project Title.

## 2. Services Page & Details
- **List Page (`/services`):**
  - **Filtering:** Replace buttons with a styled `<select>` or custom Dropdown. Default value: "All / الكل".
  - **Pagination:** Maximum 9 items per page. UI uses [ < ] [ Page Numbers ] [ > ].
  - **Cards:** Adopt the smaller card design from the Home page.
- **Details Page (`/services/:id`):**
  - **Reordering:**
    1. Action Button + Overview text + Main Image (Grouped visually).
    2. `What's Included`.
    3. YouTube Video Embed.
  - **What's Included UI:** 2-column CSS Grid (`grid-cols-2`). Add subtle hover effects (e.g., background tint `hover:bg-slate-50`).
  - **Our Process UI:** Remove numerical badges from cards. Add interactive hover lift effect.

## 3. Projects Page & Details
- **List Page (`/projects`):**
  - Remove the repetitive word "Projects" at the top of the content area.
  - **Filtering:** Dropdown select, default "All / الكل".
  - **Pagination:** Replace "Next/Prev" and "Page" text with Icon Arrows and raw page numbers `[<] 1 2 3 [>]`.
  - **Cards:** Project type moved below the image.
- **Details Page (`/projects/:id`):**
  - **Reordering:**
    1. Project Type + Title + Description + Main Cover Image.
    2. *NEW SECTION:* Project Details & Scope (Content mapped from `fullDescription`).
    3. *NEW SECTION:* Stripe-like Full-Bleed Slider.
    4. Project Information (Year, Completion Date, Live Link).
    5. Technologies.
    6. Related Services.
  - **Stripe-Style Slider:**
    - Full viewport width (`w-screen -mx-[calc((100vw-100%)/2)]`).
    - Horizontal scroll/snap mechanism (`overflow-x-auto snap-x`).
    - Remove the existing Lightbox/Modal. No card enclosures for images.
  - **Information Section:** Remove `Platform` and `Team Size`. Expand `Completion Date`. Move `Live URL` button into this block.

## 4. About Us Page
- **Redundancy Cleanup:**
  - Remove `Technologies` section entirely.
  - Remove `Core Values` section entirely (already on Home).
- **Mission & Vision:** Place titles inline horizontally with their respective icons.
- **Location:** Remove the standalone `Locations` section. Merge location data ("Syria") into the top Introduction block.

## 5. Contact Page
- **Form UI:**
  - Use `placeholder` attributes dynamically bound to the active language (`t()`).
  - Remove standalone `<label>` tags above inputs to achieve a cleaner look. Add `aria-label` for screen readers.
- **Textarea:** Lock resizing (`resize-none`), fix height, enable internal vertical scroll (`overflow-y-auto`).
- **Service Select:** Ensure long text does not truncate improperly. Add `title` attribute for native browser tooltips on hover.
- **Content:** Remove the "Demo Only" warning block completely. Rename submit button to "إرسال / Send".

## 6. Footer
- Remove the list of specific services. Replace with a single "Services" link under Quick Links.
- Add WhatsApp number below the Email address.
- Simplified "Back to Top" (Arrow icon only, no text).
- Language toggle updated to Match Navbar rules.
