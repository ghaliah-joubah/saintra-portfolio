# SAINTRA Portfolio --- UI/UX Modification Specification

## Scope

This document contains the requested portfolio modifications for the
current iteration. It does not require full SRS implementation. Preserve
the existing Vue architecture and existing functionality unless a change
is explicitly requested below.

## 1. Global Requirements

### 1.1 Strict Arabic / English Consistency

Review the entire portfolio so the active language is respected
everywhere: - English mode: no Arabic user-facing text. - Arabic mode:
no English user-facing text. - Apply this to headings, labels, buttons,
placeholders, CTA sections, cards, metadata, forms, navigation, and
detail pages. - Fix mixed-language cases globally, not only the examples
explicitly mentioned below.

### 1.2 Website Images

Review and update images throughout the website so they are
professional, modern, appropriate for a software company, and relevant
to the corresponding projects/services. Avoid generic imagery that
conflicts with the content.

### 1.3 Floating Back-to-Top Button

Make the Back-to-Top arrow a true floating control on all pages: - It
must not be part of the footer. - It should remain clearly accessible
when appropriate. - Clicking it smoothly returns to the top of the
current page. - Positioning must work correctly in both RTL and LTR.

### 1.4 Shared Project Card Style

Project cards everywhere must clearly look like cards: - visible
separation/boundaries; - consistent border/radius/spacing/elevation; -
image zoom on hover; - stronger card/border shadow on hover. Apply this
consistently to Home, Projects, related projects, and other reused
project-card instances.

## 2. Navbar

### 2.1 Internal Pages

On every page except Home: - use a white/light Navbar background; - add
an appropriate subtle shadow; - maintain strong text/icon contrast.

### 2.2 Home Navbar

At the top of Home: - Navbar and Hero must visually share the same
background environment; - Navbar should initially feel integrated into
the Hero; - use a subtle glass/crystal layer behind Navbar content.

After scrolling beyond an appropriate threshold: - smoothly change the
Navbar to the white/light style used on other pages; - add the same
subtle shadow.

## 3. Home Page

### 3.1 Hero Background

Create a professional animated Hero background appropriate for a
software-development company. The direction should be elegant/classic,
technical, modern, and not visually noisy.

Prefer a controlled animated technical composition or a tasteful 3D
object in a selected part of the Hero rather than excessive full-screen
motion. Prioritize readability, performance, responsiveness,
reduced-motion support, and compatibility with the glass Navbar.

### 3.2 Remove Hero Badge

Remove: `⚡ Your Trusted Software Partner`

### 3.3 Hero Buttons

Unify the hover behavior of the Hero CTA buttons. Use one coherent
interaction system for both, such as subtle upward movement or a
coordinated color transition.

### 3.4 Home Project Cards

Restore the clear card appearance that existed before the recent
change: - restore visible card boundaries; - restore the `View Details`
action; - retain image zoom on hover; - add/retain card or border
shadow/elevation on hover.

### 3.5 Why Partner with SAINTRA?

Fix the cards in this section: - cards in the same row should have
consistent heights; - every item must clearly appear as a separate
card; - cards must be visually separated; - place the icon on exactly
the same line as its title with correct alignment; - preserve responsive
behavior.

## 4. Footer

### 4.1 WhatsApp

Replace the phone icon beside the phone number with a WhatsApp icon.

### 4.2 Social Media

Move the social-media icons into the `Contact` footer column and keep
spacing/responsiveness clean.

## 5. About Us Page

### 5.1 Remove Syria

Remove `Syria` from the beginning/top area of About Us in both Arabic
and English.

### 5.2 Establishment Year

Fix the mixed-language `Est.` / سنة التأسيس display according to the
global language rule.

### 5.3 Mission & Vision

The Mission and Vision icons must have explicit corresponding localized
labels. Display the appropriate Mission/Vision text beside/with each
icon, using only the active language.

### 5.4 CTA Language

Fix the section containing `دعنا نساعدك في بناء خطتك البرمجية التالية`
so all of its content follows the active language.

### 5.5 Metrics & Impact

When the `Metrics & Impact` section enters the viewport: - animate each
metric from 0 to its configured final value; - use smooth count-up
animation; - avoid unnecessary repeated restarts during ordinary
scrolling; - respect reduced-motion preferences.

## 6. Services Page

### 6.1 Remove Redundant Services Label

Remove the standalone/redundant `Services` label at the beginning of the
page. Do not remove necessary page content/headings.

### 6.2 Remove Filtering

Remove the current service filtering UI/functionality.


## 7. Service Details Page

### 7.1 Back to Services

At the beginning of the page, add a designed back-navigation element: -
arrow icon; - localized `Services` label; - navigate to `/services`; -
correct RTL/LTR direction; - active language only.

### 7.2 First Section

The first main section must group: - service type/category; - service
title; - short description; - Contact CTA button.

### 7.3 Detailed Description

The next section should contain the detailed explanation of the service.

### 7.4 Video

If the service has a video URL: - display the video; - use a medium,
balanced size; - do not let it occupy the entire screen; - keep it
responsive. If there is no video, render no empty video area.

### 7.5 Related Projects

Related projects must clearly appear as cards and follow the shared
Project Card Style.

## 8. Projects Page

### 8.1 Filter Label

Keep project filtering, but add a clear localized visible label such as
`Filter` / its Arabic equivalent so the purpose of the control is
immediately understandable.

### 8.2 Project Cards

Make project items clearly appear as cards: - visible
separation/boundaries; - consistent spacing; - image zoom on hover; -
card/border shadow on hover.

## 9. Project Details Page

### 9.1 Back to Projects

At the beginning, add a designed navigation element: - arrow icon; -
localized `Projects` label; - navigate to `/projects`; - correct
RTL/LTR; - active language only.

### 9.2 Remove Main Project Image

Remove the current standalone main project image. Project imagery should
be presented through the Project Gallery when gallery images exist.

### 9.3 Project Type & Navbar Spacing

Redesign the project type/category presentation so visitors immediately
understand what it represents. It must not look like an unexplained
badge. Also add sufficient vertical space between the Navbar and the
start of Project Details content.

### 9.4 Information Architecture

#### Section 1 --- Project Introduction

Group together: - project type; - project title; - short description.

#### Section 2 --- Details & Project Information

Create a coordinated two-part section.

**Part A --- Details & Scope** - detailed project description; - project
scope/content.

**Part B --- Project Information** Show available structured
information: - implementation year; - update/extension year or date,
only if the field exists; - live project link/button, when available; -
technologies used; - services provided/associated with the project.

Do not render empty optional fields.

#### Section 3 --- Project Gallery

Show the gallery slider after the information section only if project
gallery images exist.

## 10. Project Gallery --- Stripe-Inspired Carousel

### Reference

Use the interaction pattern of the
`What's happening — See the latest from Stripe` carousel on:
https://stripe.com/en-ch

### Required Interpretation

Do **not** copy Stripe's source code, branding, content, exact sizing,
or visual identity. Recreate the interaction concept for SAINTRA's
Project Gallery.

Implement: - a horizontal carousel/track; - large, well-composed project
screenshot/image slides; - visible continuation toward adjacent/next
content so it is obvious more slides exist; - clear previous/next
controls; - smooth horizontal movement; - touch/swipe support on
mobile; - responsive slide width/visible-item behavior; - consistent
image heights and suitable `object-fit`; - no unnecessary controls when
only one image exists; - no gallery section when there are zero
images; - sensible keyboard/accessibility behavior; - correct RTL/LTR
behavior.

### Instruction to Codex

> Create a responsive horizontal Project Gallery carousel inspired by
> the **interaction pattern** of Stripe's "What's happening" carousel: a
> premium horizontal track with clearly composed large visual slides,
> visible continuation toward the next item, smooth previous/next
> movement, and touch/swipe support. Adapt the visual design to SAINTRA
> rather than cloning Stripe. The gallery is for project
> screenshots/images, not news cards.

## 11. Contact Page

### 11.1 Remove Redundant Contact Label

Remove the standalone/redundant `Contact` label at the beginning of the
page.

### 11.2 Form Labels

Every field must have its own clear visible `<label>`. Do not use
placeholders as the only field identification.

### 11.3 Submit Button

The submit button does not need to span the full form width. Give it an
intentional, balanced width/alignment while preserving responsive
behavior.

### 11.4 Service Select

Improve the service dropdown: - add spacing between the arrow and field
edge; - make `Select Service` visually behave as a placeholder; - use a
lighter/muted placeholder color; - use normal input text styling after a
real service is selected; - handle RTL/LTR spacing correctly.

### 11.5 Field Interaction

Add a consistent professional hover/focus treatment to form fields, such
as a subtle border transition, ring/shadow, or controlled background
change. Avoid excessive motion.

### 11.6 WhatsApp Icon

Replace the phone-number icon with a WhatsApp icon.

## 12. Responsive & Quality Requirements

Verify all changes across supported breakpoints: - no horizontal
overflow; - no broken card layouts/heights; - correct RTL/LTR; -
readable Navbar/Hero contrast; - touch-friendly carousel; - usable
mobile forms; - no animation-induced layout shifts; - sensible mobile
alternatives to hover; - reduced-motion support for non-essential
animation.

## 13. Implementation Constraints

-   Preserve the current Vue project architecture unless technically
    necessary.
-   Reuse shared components where appropriate.
-   Do not remove functionality unless explicitly requested here.
-   Do not introduce unrelated redesigns.
-   Keep all user-facing copy localized.
-   Conditionally render optional service/project data instead of empty
    placeholders.
-   Keep project-card behavior consistent across the site.
-   Follow the project's existing approval rules before
    deleting/replacing source code.
-   Verify the build and responsive states after implementation.
