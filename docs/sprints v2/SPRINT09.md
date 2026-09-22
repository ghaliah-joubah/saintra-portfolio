# SPRINT 09 --- Global Navigation, Footer, Internationalization & Back-to-Top

> **Current-scope note:** `../SPRINT_PLAN.md` moves AR/EN data shape, locale state, document direction, and shared navigation into the foundation/page build. This sprint becomes a final global consistency pass, not the first implementation of i18n. Separate approval/report gates below are superseded.

## 1. Sprint Goal

Finalize the global Portfolio experience for SAINTRA by completing:

1.  Global Navbar / navigation.
2.  Global Footer.
3.  Portfolio-wide internationalization.
4.  Complete English/LTR and Arabic/RTL behavior.
5.  A scalable Language Selector that can support additional languages
    later.
6.  A global floating Back-to-Top control available throughout the
    Portfolio.

Sprint 09 applies across the complete public Portfolio rather than to
one isolated page.

The Sprint must preserve the approved page functionality from previous
Sprints while making global navigation, Footer behavior, language
behavior, directionality, and the Back-to-Top experience consistent
across the site.

Current required languages:

-   English (`en`) --- LTR.
-   Arabic (`ar`) --- RTL.

The language architecture must not assume that exactly two languages
will exist forever.

The exact final visual styling remains open to Codex/Figma within the
approved design system and requirements below.

------------------------------------------------------------------------

# 2. Sprint Scope

Sprint 09 includes:

-   Shared Navbar.
-   Desktop navigation.
-   Mobile navigation.
-   Active-route navigation state.
-   Shared Footer.
-   Footer navigation.
-   Footer contact information.
-   Footer social links.
-   Language Selector in Navbar.
-   Language Selector in Footer.
-   Centralized language configuration.
-   English translations.
-   Arabic translations.
-   LTR/RTL document behavior.
-   Portfolio-wide translated UI.
-   Translation of applicable local content/data.
-   Language persistence.
-   Same-route language switching.
-   Global floating Back-to-Top control.
-   Responsive behavior.
-   Accessibility.
-   Reduced-motion compatibility.
-   Cross-page internationalization regression verification.

------------------------------------------------------------------------

# 3. Portfolio-Wide Requirement

Internationalization in Sprint 09 is NOT limited to Navbar and Footer
labels.

The complete public Portfolio must participate in the language system.

This includes, where applicable:

-   Home.
-   About.
-   Services.
-   Service Details.
-   Projects.
-   Project Details.
-   Contact.
-   Navbar.
-   Footer.
-   Back-to-Top accessibility text.
-   Buttons.
-   Links.
-   Form labels.
-   Form placeholders.
-   Validation messages.
-   Toast messages.
-   Filter labels.
-   Pagination labels.
-   Empty states.
-   No-results states.
-   Invalid/not-found states.
-   Section headings.
-   CTA/closing copy.
-   Project/service data presented to visitors.
-   Other user-visible Portfolio strings.

Sprint 09 must not be considered complete if the Language Selector
changes only global navigation while substantial page content remains
unintentionally untranslated.

------------------------------------------------------------------------

# 4. Global Navbar

## Purpose

Provide one consistent global navigation experience across the public
Portfolio.

The Navbar must support navigation to:

-   Home.
-   About.
-   Services.
-   Projects.
-   Contact.

It must also contain:

-   SAINTRA brand/logo treatment.
-   Language Selector.

The exact order, spacing, styling, and responsive visual treatment may
be determined by Codex/Figma.

------------------------------------------------------------------------

# 5. Brand / Logo Behavior

The Navbar must provide a clear SAINTRA brand/home navigation target.

The current logo/brand asset remains replaceable until final branding is
approved.

Activating the brand/logo should navigate to Home.

Do not fabricate a final logo.

The implementation must remain compatible with future replacement of the
temporary brand treatment.

------------------------------------------------------------------------

# 6. Active Navigation State

The Navbar must clearly indicate the visitor's current primary Portfolio
section.

Examples:

-   `/` → Home active.
-   `/about` → About active.
-   `/services` → Services active.
-   `/services/:id` → Services remains active.
-   `/projects` → Projects active.
-   `/projects/:id` → Projects remains active.
-   `/contact` → Contact active.

The active state must not depend on color alone.

Use appropriate navigation semantics such as `aria-current` where
applicable.

------------------------------------------------------------------------

# 7. Navbar Route Behavior

Navigation must use the approved Vue Router behavior rather than
unnecessary full-page reloads.

Changing Portfolio pages must:

-   Preserve expected SPA routing behavior.
-   Close the mobile menu when appropriate.
-   Avoid leaving stale menu state.
-   Maintain correct active navigation state.

Changing language must not unexpectedly redirect the visitor to Home.

------------------------------------------------------------------------

# 8. Navbar Home vs. Internal Page Behavior

The Navbar may use context-aware visual behavior.

For example:

-   At the top of Home, a transparent/glass presentation may be
    appropriate.
-   After scrolling, it may transition to a more solid/readable state.
-   Internal pages may require an immediately readable Navbar
    presentation.

The exact visual behavior is left to the approved design.

Requirements:

-   Navigation must always remain readable.
-   Focus states must remain visible.
-   Contrast must remain accessible.
-   Route transitions must not leave the Navbar in an incorrect state.
-   Scroll-dependent behavior must remain stable and performant.
-   Reduced-motion preferences must be respected.

Do not redesign unrelated page content solely to support the Navbar.

------------------------------------------------------------------------

# 9. Desktop Navigation

On larger screens, primary navigation must be directly discoverable.

The desktop Navbar must provide:

-   Brand/home action.
-   Primary Portfolio navigation.
-   Language Selector.

Navigation must remain readable and usable at intermediate
desktop/tablet widths.

Do not allow navigation items to collide, clip, or create horizontal
overflow.

------------------------------------------------------------------------

# 10. Mobile Navigation

On narrow screens, the Navbar must provide an appropriate mobile
navigation experience.

The exact presentation may use an approved:

-   Menu panel.
-   Dropdown.
-   Drawer.
-   Overlay.
-   Another accessible compact navigation pattern.

Requirements:

-   Menu trigger has an accessible name.
-   Expanded/collapsed state is communicated appropriately.
-   Menu can be operated by keyboard.
-   `Escape` closes the mobile menu when open.
-   Selecting a navigation destination closes the menu where
    appropriate.
-   Focus behavior remains usable.
-   Menu does not create horizontal overflow.
-   Menu state remains valid after route changes.
-   Resize between mobile/desktop states must not leave stale
    hidden-menu behavior.
-   Language selection remains available on mobile.

The exact animation is left to Codex/Figma within the approved motion
system.

------------------------------------------------------------------------

# 11. Global Footer

## Purpose

Provide a consistent closing navigation and information area across the
Portfolio.

The Footer should remain useful without becoming an oversized duplicate
of the website.

It must support:

-   SAINTRA brand.
-   Short company description.
-   Primary navigation.
-   Contact information.
-   Social media links.
-   Language Selector.
-   Copyright.

------------------------------------------------------------------------

# 12. Footer Navigation

Footer navigation should provide access to:

-   Home.
-   About.
-   Services.
-   Projects.
-   Contact.

The Footer does not need to list every individual service.

The Services navigation destination is sufficient.

Footer navigation must use the same approved route destinations as the
Navbar.

Do not maintain conflicting duplicate route definitions solely for the
Footer.

------------------------------------------------------------------------

# 13. Footer Contact Information

The Footer must consume the same approved contact-data source used by
the Contact experience where practical.

It may include available approved:

-   Email.
-   WhatsApp/contact number.
-   Location.

Requirements:

-   Email may use `mailto:`.
-   Contact number may provide the approved WhatsApp behavior.
-   Location uses approved company data.
-   Missing optional values disappear cleanly.
-   Do not invent office details.
-   Do not unnecessarily duplicate contact values in component code.

Current location context remains:

`Syria`

Temporary contact values remain temporary until replaced with approved
final data.

------------------------------------------------------------------------

# 14. Footer Social Media

Social links belong within the Footer as global external destinations.

Requirements:

-   Render only platforms with approved valid URLs.
-   Use the approved coherent icon strategy.
-   Use accessible labels.
-   Use safe external-link behavior.
-   Do not render inactive/fake social profiles.
-   Do not use inconsistent Unicode icons when approved icons/components
    are available.

Social data should remain consistent with the Contact page rather than
being independently duplicated.

------------------------------------------------------------------------

# 15. Footer Copyright

The Footer must contain an appropriate copyright presentation for
SAINTRA.

The implementation should avoid requiring manual code edits solely
because the calendar year changes if a simple dynamic solution is
appropriate.

The exact copy and formatting may be refined during visual/copy review.

------------------------------------------------------------------------

# 16. Global Back-to-Top Control

## Purpose

Provide a convenient way for visitors who have scrolled significantly
down a page to return to the top without manually scrolling through the
full page.

The Back-to-Top control is a global Portfolio UI element and must be
available consistently across public pages where scrolling makes it
useful.

It must not be implemented independently inside every page.

Prefer one shared/global implementation.

------------------------------------------------------------------------

# 17. Back-to-Top Visibility

The Back-to-Top control should not unnecessarily remain visible while
the visitor is already at or near the top of the page.

It should become available after the visitor has scrolled a meaningful
distance.

The exact threshold may be determined during implementation/design
review.

Requirements:

-   Appearance must be predictable.
-   It must not flicker during small scroll changes.
-   It must not create unnecessary layout shifts.
-   It must not require page-specific hardcoded thresholds unless there
    is a demonstrated need.

------------------------------------------------------------------------

# 18. Back-to-Top Interaction

When activated, the control returns the current page to its top.

Normal behavior may use smooth scrolling where appropriate.

When reduced motion is preferred:

-   Avoid unnecessary animated scrolling.
-   Return to the top using behavior compatible with the user's motion
    preference.

The control must work correctly after:

-   Normal scrolling.
-   Route navigation.
-   Language changes.
-   LTR/RTL changes.
-   Responsive resizing.

It must not navigate to another route.

------------------------------------------------------------------------

# 19. Back-to-Top Visual Behavior

The control should be presented as a compact floating action.

The exact:

-   Shape.
-   Size.
-   Border.
-   Background.
-   Shadow.
-   Icon treatment.
-   Hover treatment.
-   Position offset.
-   Appearance/disappearance transition.

remain design decisions.

However:

-   Use the approved icon strategy rather than Unicode characters.
-   The icon must clearly communicate upward movement.
-   The control must remain visually coherent with the Portfolio.
-   It must not dominate the interface.
-   It must remain distinguishable from page content.

------------------------------------------------------------------------

# 20. Back-to-Top Positioning

The floating control must remain reachable without covering important
content.

Review its position against:

-   Footer content.
-   Contact form controls.
-   Toast notifications.
-   Mobile navigation.
-   Language dropdown.
-   Other floating/interactive elements.
-   Small mobile viewports.

Its positioning must be direction-aware where appropriate.

If its visual placement changes between LTR and RTL, that behavior must
be intentional and tested.

Do not blindly mirror it if the approved design calls for a consistent
physical screen position.

The final positioning strategy must be explained in the implementation
proposal if directionality affects it.

------------------------------------------------------------------------

# 21. Back-to-Top Accessibility

Requirements:

-   Use a semantic interactive element.
-   Provide an accessible name.
-   Example intent: `Back to top`.
-   Translate the accessible label according to the current language.
-   Make it keyboard reachable.
-   Preserve a visible focus state.
-   Use an appropriate touch target.
-   Do not rely on the icon alone for assistive technologies.
-   Do not depend on animation to communicate functionality.

The control must remain understandable in English and Arabic.

------------------------------------------------------------------------

# 22. Back-to-Top Performance

Scroll observation must remain lightweight.

Avoid:

-   Expensive work on every scroll event.
-   Repeated unnecessary global listeners.
-   Duplicate listeners after route changes.
-   Leaking event listeners after component lifecycle changes.

If a scroll listener is used, it must be implemented responsibly.

If another suitable browser mechanism is used, it should remain simple
and maintainable.

No new dependency should be added solely for this control unless clearly
justified and explicitly approved.

------------------------------------------------------------------------

# 23. Language Selector

## Approved Interaction

The Portfolio must use a dropdown-style Language Selector.

Do NOT implement the language switch as a permanently fixed two-language
`EN | AR` control.

The dropdown approach is required because additional languages may be
added later.

## Current Languages

Initial required language options:

-   `EN` --- English.
-   `AR` --- العربية.

## Future Example

The architecture should allow another language to be added later, for
example:

-   `DE` --- Deutsch.

This is an extensibility example only.

German translation is NOT part of Sprint 09.

------------------------------------------------------------------------

# 24. No Language Flags

Do not use country flags to represent languages.

The Language Selector should identify languages through:

-   Short language code.
-   Language name.

Example concept:

`EN  English`\
`AR  العربية`

The closed selector may display the current language abbreviation such
as:

`EN`

or:

`AR`

The exact dropdown visual treatment is left to Codex/Figma.

------------------------------------------------------------------------

# 25. Centralized Language Configuration

Supported languages must be centrally configured rather than scattered
through multiple components.

Each supported language should conceptually provide information such as:

-   Stable language code.
-   Short display code.
-   Human-readable language name.
-   Text direction.
-   Translation resource association where appropriate.

Conceptually:

English:

-   code: `en`
-   short label: `EN`
-   label: `English`
-   direction: `ltr`

Arabic:

-   code: `ar`
-   short label: `AR`
-   label: `العربية`
-   direction: `rtl`

The exact technical representation is determined during the approved
implementation proposal.

Adding a future language should not require rebuilding the Navbar/Footer
Language Selector UI from scratch.

------------------------------------------------------------------------

# 26. Language Selector Locations

A Language Selector must be available in:

-   Navbar.
-   Footer.

Both selectors must reflect the same shared current-language state.

If the visitor selects Arabic in the Navbar:

-   Navbar shows Arabic as current.
-   Footer also reflects Arabic.
-   Portfolio content becomes Arabic.
-   Document direction becomes RTL.

If the visitor selects English in the Footer:

-   Both selectors update.
-   Content becomes English.
-   Document direction becomes LTR.

Do not maintain independent Navbar/Footer language states.

------------------------------------------------------------------------

# 27. Language Persistence

The selected language must persist appropriately across:

-   Route navigation.
-   Page refresh.
-   Continued Portfolio browsing.

If the visitor selects Arabic, refreshing the current page must not
unnecessarily revert the site to English.

The implementation may use an appropriate client-side persistence
mechanism approved during implementation.

Do not introduce unnecessary account/authentication requirements for
language preference.

------------------------------------------------------------------------

# 28. Same-Route Language Switching

Changing language must preserve the visitor's current Portfolio context.

Example:

Visitor is on:

`/projects/:id`

English → Arabic

Result:

-   Remain on the same Project Details route.
-   Translate the available content.
-   Change direction to RTL.

Likewise, switching language on `/services/:id` must preserve the same
service.

Do not redirect to Home solely because language changed.

------------------------------------------------------------------------

# 29. Document Language and Direction

When English is active:

-   Document/app language must reflect English.
-   Direction must be `ltr`.

When Arabic is active:

-   Document/app language must reflect Arabic.
-   Direction must be `rtl`.

The implementation must update the appropriate document/app language and
direction attributes.

Internationalization is not complete if only visible strings change
while document direction remains incorrect.

------------------------------------------------------------------------

# 30. RTL Requirements

Arabic must provide a real RTL experience.

Review and adapt all direction-sensitive UI, including where applicable:

-   Text alignment.
-   Navbar.
-   Mobile menu.
-   Footer.
-   Forms.
-   Form labels.
-   Inputs/textareas.
-   Dropdowns.
-   Cards.
-   Section layouts.
-   Filters.
-   Pagination.
-   Galleries.
-   Slider/carousel controls.
-   Directional arrows.
-   Previous/Next semantics.
-   Inline spacing.
-   Back-to-Top positioning where applicable.

Do not blindly mirror:

-   Logos.
-   Photos.
-   Project screenshots.
-   Social platform logos.
-   Non-directional icons.
-   Decorative assets that should remain visually unchanged.

RTL behavior must be intentional rather than achieved through arbitrary
global flipping.

------------------------------------------------------------------------

# 31. CSS Direction Strategy

Direction-sensitive styling should avoid unnecessary hardcoded
left/right assumptions where practical.

Prefer a maintainable direction-aware approach, including logical layout
properties where appropriate.

The exact implementation strategy must be proposed after inspection of
the existing CSS.

Do not perform an uncontrolled global CSS rewrite solely for RTL.

Any broad shared-style changes must be explicitly included in the
pre-implementation proposal because Sprint 09 affects the entire
Portfolio.

------------------------------------------------------------------------

# 32. Translation Architecture

Translations must be centralized and maintainable.

Do not create duplicated page components such as:

-   `About.vue` + `AboutArabic.vue`.
-   `Services.vue` + `ServicesArabic.vue`.
-   `Projects.vue` + `ProjectsArabic.vue`.

The same components/pages must render the appropriate language according
to the shared current-language state.

The implementation must separate translatable content from page
structure sufficiently to avoid scattered duplicated conditional
strings.

------------------------------------------------------------------------

# 33. i18n Technical Decision

Sprint 09 defines the required internationalization behavior but does
not pre-authorize a specific dependency.

Before implementation, Codex must inspect the current project and
propose the appropriate approach, such as:

-   An established Vue internationalization solution.
-   A sufficiently maintainable lightweight project-local solution.

If a new dependency is proposed, the proposal must explain:

-   Why it is needed.
-   Why the existing stack is insufficient.
-   Alternatives considered.
-   Bundle/performance impact.
-   Maintenance impact.
-   How language persistence and RTL/LTR are handled.

Wait for explicit user approval before adding the dependency.

------------------------------------------------------------------------

# 34. English and Arabic Translation Coverage

Sprint 09 includes the actual English and Arabic Portfolio content
required for the current public site.

Translate applicable user-visible content across:

## Global

-   Navbar.
-   Footer.
-   Language Selector labels where needed.
-   Back-to-Top accessible label.
-   Shared buttons/actions.
-   Shared states.

## Home

-   Hero.
-   About preview.
-   Projects preview.
-   Services preview.
-   Other approved Home sections.
-   Contact/closing content.
-   Actions and controls.

## About

-   Hero.
-   Company Story.
-   Statistics labels.
-   Location.
-   CTA.
-   Supporting copy.

## Services

-   Hero.
-   Filters.
-   Service cards.
-   Pagination labels.
-   Empty/no-results states.
-   CTA.

## Service Details

-   Hero.
-   Overview.
-   What's Included.
-   Our Process.
-   Video-related labels where applicable.
-   Related Projects.
-   Pagination/control labels.
-   CTA.
-   Invalid/not-found states.

## Projects

-   Hero.
-   Filters.
-   Project cards.
-   Project Type presentation.
-   Pagination labels.
-   Empty/no-results states.
-   CTA.

## Project Details

-   Hero.
-   Overview.
-   Gallery labels/controls where applicable.
-   Project Information labels.
-   Project Type.
-   Technologies label.
-   Platform label.
-   Year label.
-   Services label.
-   Visit Project.
-   CTA.
-   Invalid/not-found states.

## Contact

-   Hero.
-   Contact Information labels where applicable.
-   Form labels.
-   Required-field messaging.
-   Placeholders.
-   Service dropdown.
-   Validation messages.
-   Submit action.
-   Temporary success Toast.
-   Closing Message.

Any other visible current Portfolio text discovered during
implementation must be reviewed for translation rather than silently
left in the wrong language.

------------------------------------------------------------------------

# 35. Dynamic / Data-Driven Content Translation

Local data-driven Portfolio content must support the approved languages
where it is user-visible.

This may include:

-   Service names.
-   Service short descriptions.
-   Service full descriptions.
-   What's Included content.
-   Process content.
-   Project names where translation is appropriate.
-   Project descriptions.
-   Project types.
-   Project information labels/values where translation is appropriate.
-   About content.
-   Home content.
-   Contact/closing copy.

Do not duplicate entire datasets unnecessarily if a structured
multilingual data shape can represent the content safely.

Stable identifiers and relationships must remain language-independent.

Examples of values that should generally remain stable across languages:

-   IDs.
-   Route identifiers where the current route architecture does not
    require localization.
-   `serviceIds`.
-   Asset paths.
-   URLs.
-   Technical identifiers.

Translation must not break project/service relationships.

------------------------------------------------------------------------

# 36. Brand Names, Technical Names, and Proper Nouns

Do not automatically translate values that should remain unchanged.

Examples may include:

-   SAINTRA.
-   Technology names such as Vue.js where applicable.
-   Product/platform names.
-   URLs.
-   Email addresses.
-   Social usernames.
-   Certain project names/proper nouns.

Whether a project/service marketing name has an Arabic localized label
should follow approved content data rather than automatic guessing.

Do not fabricate Arabic translations for proper names without an
approved basis.

------------------------------------------------------------------------

# 37. Missing Translation Behavior

The implementation must have a safe, reviewable strategy for missing
translations.

It must not:

-   Render raw translation keys to visitors.
-   Crash a page.
-   Break layout.
-   Silently produce blank required content.

During Sprint 09, missing required English/Arabic translations
discovered in current Portfolio scope must be identified and completed
or explicitly reported as BLOCKED if source copy is unavailable.

Do not invent factual company/project claims to fill missing content.

------------------------------------------------------------------------

# 38. Language and Forms

The Contact form must fully participate in internationalization.

Translate:

-   Labels.
-   Placeholders.
-   Optional/required supporting copy.
-   Validation messages.
-   Service dropdown placeholder.
-   Submit text.
-   Success Toast.

The form must preserve correct semantic validation regardless of
language.

Changing language must not create invalid form structure.

If language changes while the user has typed form values, implementation
should avoid unnecessarily destroying user-entered data.

------------------------------------------------------------------------

# 39. Language and Services/Projects

Filtering and pagination logic must remain based on stable underlying
identifiers/data rather than fragile translated display strings.

Changing language must not:

-   Select a different project.
-   Select a different service.
-   Break the active filter.
-   Break project/service relationships.
-   Corrupt pagination state unnecessarily.

Display labels may change while underlying identity remains stable.

------------------------------------------------------------------------

# 40. Language and Project Gallery

Project Gallery interaction must remain functional in both LTR and RTL.

If Previous/Next or directional controls exist:

-   Their visual direction and semantic meaning must be reviewed for
    RTL.
-   Image selection must remain keyboard/touch accessible.
-   Project images themselves must not be mirrored.

Changing language must not reset or corrupt Gallery state unnecessarily.

------------------------------------------------------------------------

# 41. Language and Pagination

Pagination must remain semantically correct in English and Arabic.

Review:

-   Previous/Next labels.
-   Directional icons.
-   Page-number order/presentation.
-   Current-page semantics.
-   Keyboard behavior.

Do not assume an LTR arrow direction remains semantically correct under
RTL.

Logical page data and counts must not change merely because the language
changes.

------------------------------------------------------------------------

# 42. Language Selector Accessibility

The Language Selector must be accessible.

Requirements:

-   Clear accessible name.
-   Keyboard operable.
-   Current language understandable.
-   Expanded/collapsed state communicated where applicable.
-   Options reachable by keyboard.
-   Visible focus states.
-   Touch-friendly targets.
-   Language options understandable without flags.
-   Dropdown must not trap keyboard focus incorrectly.
-   Closing behavior must be predictable.
-   `Escape` should close the dropdown where appropriate.

Language names should be presented in a way that users can recognize
them.

------------------------------------------------------------------------

# 43. Responsive Requirements

Verify global navigation, Footer, Back-to-Top, and internationalized
content around:

-   1440px.
-   1024px.
-   768px.
-   390px.
-   320px.

Verification must be performed in BOTH:

-   English / LTR.
-   Arabic / RTL.

Check:

-   Navbar.
-   Mobile menu.
-   Language dropdown.
-   Footer.
-   Back-to-Top control.
-   Page headings.
-   Cards.
-   Filters.
-   Forms.
-   Pagination.
-   Galleries.
-   CTA/closing content.
-   Long translated strings.
-   Arabic text wrapping.
-   English text wrapping.
-   No horizontal overflow.

The Back-to-Top control must remain reachable without covering important
mobile content.

Do not assume a layout verified in English automatically works in
Arabic.

------------------------------------------------------------------------

# 44. Typography

Typography must support both English and Arabic correctly.

Before replacing or introducing fonts, follow the project approval
rules.

Any font proposal must explain:

-   English support.
-   Arabic support.
-   Fallbacks.
-   Local vs. remote loading.
-   Performance impact.
-   Licensing/source considerations where relevant.

Do not choose a visually attractive font that lacks proper Arabic glyph
support.

Final font/brand decisions remain subject to approval.

------------------------------------------------------------------------

# 45. Accessibility

Sprint 09 must preserve or improve Portfolio accessibility.

Verify:

-   Semantic global navigation.
-   `aria-current` for active navigation where appropriate.
-   Mobile-menu semantics.
-   Language-selector semantics.
-   Back-to-Top semantics and accessible label.
-   Keyboard navigation.
-   Escape behavior.
-   Visible focus states.
-   Correct document language.
-   Correct document direction.
-   Readable contrast.
-   Accessible external social/contact links.
-   Accessible form translations.
-   Accessible pagination.
-   Accessible Gallery controls.
-   Reduced-motion support.
-   Meaningful heading hierarchy remains intact after translation.
-   RTL does not break focus order or interaction order.

------------------------------------------------------------------------

# 46. Motion

Global Navbar/Footer/Language Selector/Back-to-Top motion must remain
restrained and consistent with the Portfolio motion system.

Possible motion may include:

-   Navbar scroll-state transition.
-   Mobile menu opening/closing.
-   Language dropdown opening/closing.
-   Back-to-Top appearance/disappearance.
-   Smooth return-to-top behavior when motion is allowed.
-   Focus/hover feedback.

Requirements:

-   Motion must not block navigation.
-   Reduced-motion preferences must be respected.
-   Language switching must not require decorative animation.
-   RTL must not cause incorrect motion direction.
-   Back-to-Top must remain functional without animated scrolling.

The broader Portfolio motion/3D strategy is defined by the Foundation
and relevant page Sprints; Sprint 09 does not introduce unrelated
page-level 3D effects.

------------------------------------------------------------------------

# 47. Performance

Internationalization and global components must remain lightweight.

Requirements:

-   Avoid unnecessary duplicated page bundles.
-   Avoid loading duplicate page components for Arabic/English.
-   Avoid heavy dependencies without justification.
-   Avoid repeated global event listeners.
-   Clean up listeners when appropriate.
-   Avoid duplicate Back-to-Top scroll listeners.
-   Avoid unnecessary rerenders caused by independent duplicated
    language state.
-   Keep language switching responsive.
-   Keep scroll-dependent global UI performant.

If translation resources are structured separately, the implementation
approach must remain appropriate for the current Portfolio scale.

------------------------------------------------------------------------

# 48. SEO / Document Metadata Readiness

At minimum, active document language must reflect the selected language.

Any existing page title/metadata system should be reviewed so
user-visible/document-level language is not obviously inconsistent.

Sprint 09 does not require inventing a full production multilingual SEO
routing strategy unless separately approved.

Do not introduce language-prefixed routes such as `/ar/...` or `/en/...`
without explicit approval.

The current requirement is same-route language switching.

------------------------------------------------------------------------

# 49. State and Persistence

Language must use one coherent shared source of truth.

Avoid separate language state inside individual pages/components.

The shared state must keep:

-   Navbar selector.
-   Footer selector.
-   Page translations.
-   Direction.
-   Document language.

synchronized.

Persistence must not create a flash of obviously incorrect
direction/content where reasonably avoidable.

The Back-to-Top visibility state must remain a UI concern and must not
be persisted between sessions.

------------------------------------------------------------------------

# 50. Error and Empty States

All user-visible current Portfolio states must be reviewed for both
languages, including:

-   No services.
-   No projects.
-   No filter results.
-   Invalid service.
-   Invalid project.
-   Missing optional sections where explanatory copy exists.
-   Form validation.
-   Form success Toast.

Do not leave these states unintentionally English-only when Arabic is
active.

------------------------------------------------------------------------

# 51. Out of Scope

Sprint 09 does NOT include:

-   German translation.
-   A third production language.
-   Country flags for languages.
-   Duplicated Arabic page components.
-   Language-specific route prefixes unless separately approved.
-   Backend locale storage.
-   User-account language preferences.
-   Dashboard internationalization.
-   Backend/API implementation.
-   Database implementation.
-   CMS implementation.
-   Automatic machine translation at runtime.
-   Final production branding/logo if not yet approved.
-   Unrelated page redesigns.
-   New page features unrelated to global
    navigation/footer/internationalization/Back-to-Top.
-   Portfolio-wide new 3D implementation.
-   Unapproved heavy animation libraries.

Necessary RTL, translation, global-navigation, Footer, and Back-to-Top
layout corrections are in scope; unrelated visual redesign is not.

------------------------------------------------------------------------

# 52. Implementation Workflow

Follow the project rules:

Inspect\
→ Proposal\
→ User Approval\
→ Implementation\
→ Technical Verification\
→ User Visual Review\
→ Adjust / Approve / Roll Back\
→ Final Verification\
→ Sprint Test Documentation\
→ Sprint Report\
→ Git Review\
→ User Approval for Commit/Push

The existence of this Sprint file does not itself authorize source-code
changes.

Because Sprint 09 has Portfolio-wide impact, the pre-implementation
inspection and proposal must be especially explicit before shared/global
files are changed.

------------------------------------------------------------------------

# 53. Pre-Implementation Proposal

Before implementation, inspect and report at minimum:

-   Current Navbar implementation.
-   Current Footer implementation.
-   Current mobile navigation behavior.
-   Current active-route behavior.
-   Current Navbar scroll behavior.
-   Current contact/social data used globally.
-   Current language/i18n implementation, if any.
-   Current dependencies related to internationalization.
-   Current data files containing user-visible strings.
-   Current hardcoded user-visible strings inside Vue
    templates/components.
-   Current direction-sensitive CSS.
-   Current use of `left`, `right`, directional margins/paddings,
    arrows, and navigation controls.
-   Current forms/validation messages.
-   Current Toast messages.
-   Current pagination behavior.
-   Current Gallery directional behavior.
-   Current empty/not-found states.
-   Current document `lang`/`dir` behavior.
-   Existing global scroll listeners/handlers.
-   Existing Back-to-Top implementation, if any.
-   Potential conflicts between Back-to-Top and other floating UI.
-   Translation/content gaps.
-   Proposed internationalization architecture.
-   Proposed language persistence mechanism.
-   Proposed RTL strategy.
-   Proposed Back-to-Top implementation.
-   Proposed Back-to-Top positioning behavior in LTR/RTL.
-   Whether a new dependency is required.
-   Exact files expected to be modified.
-   Exact files expected to be created.
-   Data-shape changes required.
-   Shared components affected.
-   Risks/regression areas.
-   Verification plan.

Stop and wait for explicit user approval before meaningful source edits.

If implementation reveals a new major architectural requirement not
covered by the approved proposal, stop and request approval.

------------------------------------------------------------------------

# 54. Visual Review Gate

Build success alone does not close Sprint 09.

User visual review must include BOTH English and Arabic versions.

Review at minimum:

## Navbar

-   Desktop English.
-   Desktop Arabic.
-   Mobile English.
-   Mobile Arabic.
-   Active route.
-   Mobile menu.
-   Language dropdown.
-   Home top/scroll state where applicable.
-   Internal-page state.

## Footer

-   English.
-   Arabic.
-   Navigation.
-   Contact information.
-   Social links.
-   Language dropdown.
-   Copyright.
-   Narrow mobile behavior.

## Back-to-Top

-   Hidden/appropriate state near top.
-   Visible state after meaningful scroll.
-   Desktop.
-   Tablet.
-   Mobile.
-   English.
-   Arabic.
-   LTR.
-   RTL.
-   Footer interaction.
-   Toast/floating-content interaction.
-   Focus state.
-   Reduced-motion behavior.

## Portfolio Pages

Review English and Arabic behavior for:

-   Home.
-   About.
-   Services.
-   Service Details.
-   Projects.
-   Project Details.
-   Contact.

## Direction-Sensitive Features

Review:

-   Forms.
-   Filters.
-   Pagination.
-   Carousels/sliders.
-   Project Gallery.
-   Directional icons.
-   Validation.
-   Toast.
-   Empty/not-found states.

Adjustments may be requested before Sprint closure.

------------------------------------------------------------------------

# 55. Technical Verification

Verify at minimum:

-   Navbar renders across all public Portfolio routes.
-   Footer renders across all public Portfolio routes.
-   Navbar links navigate correctly.
-   Footer links navigate correctly.
-   Active navigation is correct on listing pages.
-   Active navigation remains correct on Service Details.
-   Active navigation remains correct on Project Details.
-   Mobile menu opens/closes correctly.
-   `Escape` closes the mobile menu.
-   Route navigation clears stale mobile-menu state.
-   Navbar remains readable at Home top/scroll states where implemented.
-   Footer contact information uses approved shared data.
-   Footer WhatsApp behavior is correct.
-   Footer social links are correct and safe.
-   Navbar Language Selector works.
-   Footer Language Selector works.
-   Both selectors remain synchronized.
-   English activates LTR.
-   Arabic activates RTL.
-   Document language updates correctly.
-   Selected language persists across refresh.
-   Selected language persists across route navigation.
-   Language switching preserves the current route.
-   `/services/:id` remains the same service after language switching.
-   `/projects/:id` remains the same project after language switching.
-   Home content is translated.
-   About content is translated.
-   Services content is translated.
-   Service Details content is translated.
-   Projects content is translated.
-   Project Details content is translated.
-   Contact content is translated.
-   Validation messages are translated.
-   Toast content is translated.
-   Empty/no-results states are translated.
-   Invalid project/service states are translated.
-   Service/project relationships remain intact.
-   Filters remain functional after language switching.
-   Pagination remains functional in both directions.
-   Gallery remains functional in both directions.
-   Forms remain functional in both directions.
-   User-entered form data is not unnecessarily destroyed by language
    switching.
-   Language Selector is keyboard accessible.
-   Mobile menu is keyboard accessible.
-   Back-to-Top exists globally where appropriate.
-   Back-to-Top is not unnecessarily visible near page top.
-   Back-to-Top appears after meaningful scrolling.
-   Back-to-Top returns the current page to the top.
-   Back-to-Top does not change the route.
-   Back-to-Top is keyboard accessible.
-   Back-to-Top has an accessible translated name.
-   Back-to-Top respects reduced-motion preferences.
-   Back-to-Top does not cover critical UI at required widths.
-   Back-to-Top does not create duplicate/leaking scroll listeners.
-   Focus states remain visible.
-   Reduced-motion behavior remains valid.
-   No raw translation keys appear.
-   No unintended blank required translations appear.
-   No horizontal overflow occurs at required widths in either language.
-   No new blocking runtime/console errors occur.
-   Required build and diff checks are executed.

------------------------------------------------------------------------

# 56. Sprint Test Documentation

Only after implementation and actual verification, create the Sprint 09
test documentation using the approved project documentation structure.

Record:

-   Tested scope.
-   Acceptance criteria.
-   Test cases.
-   Expected results.
-   Actual results.
-   PASS / FAIL / BLOCKED status.
-   Navbar desktop/mobile tests.
-   Navbar active-route tests.
-   Mobile-menu tests.
-   Footer tests.
-   Contact/social-link tests.
-   Language-selector tests.
-   Language persistence tests.
-   Same-route language-switch tests.
-   English translation tests.
-   Arabic translation tests.
-   LTR tests.
-   RTL tests.
-   Back-to-Top visibility tests.
-   Back-to-Top interaction tests.
-   Back-to-Top keyboard/accessibility tests.
-   Back-to-Top reduced-motion tests.
-   Back-to-Top responsive/overlap tests.
-   Form/validation translation tests.
-   Filter tests.
-   Pagination RTL/LTR tests.
-   Gallery RTL/LTR tests.
-   Empty/not-found state tests.
-   Responsive tests in both languages.
-   Keyboard tests.
-   Accessibility checks.
-   Reduced-motion checks.
-   Regression checks.
-   Known limitations.

Never report a test as PASS if it was not actually executed or directly
verified.

------------------------------------------------------------------------

# 57. Sprint Report

After implementation, testing, and visual approval, create the Sprint 09
completion report.

Record:

-   Sprint goal.
-   Implemented requirements.
-   Final Navbar structure and behavior.
-   Final mobile-navigation behavior.
-   Final Footer structure and behavior.
-   Final Language Selector behavior.
-   Final supported-language configuration.
-   Final language persistence behavior.
-   Final LTR/RTL strategy.
-   Final translation architecture.
-   Translation coverage.
-   Final Back-to-Top behavior.
-   Final Back-to-Top visibility logic.
-   Final Back-to-Top reduced-motion behavior.
-   Data-shape changes.
-   Files added.
-   Files modified.
-   Dependencies added/removed.
-   Verification performed.
-   Build/test results.
-   Visual-review status.
-   Approved deviations.
-   Missing translations, if any.
-   Known issues.
-   Deferred future-language work.
-   Final Sprint status.

The report must describe the actual implementation rather than planned
work.

------------------------------------------------------------------------

# 58. Git Gate

Before Sprint closure:

1.  Review implementation.
2.  Complete technical verification.
3.  Complete English visual review.
4.  Complete Arabic visual review.
5.  Complete Back-to-Top visual/functional review.
6.  Apply approved adjustments.
7.  Complete final verification.
8.  Create required TEST and REPORT documentation.
9.  Review Git status and diff.
10. Confirm no unrelated work is included.
11. Obtain user approval for Git actions.
12. Commit/push only after approval.

------------------------------------------------------------------------

# 59. Acceptance Criteria

Sprint 09 is acceptable when:

-   One shared final Navbar is used across the public Portfolio.
-   Navbar provides Home, About, Services, Projects, and Contact
    navigation.
-   Navbar contains the Language Selector.
-   Active primary section is clearly indicated.
-   Service Details keeps Services active.
-   Project Details keeps Projects active.
-   Desktop navigation is complete.
-   Mobile navigation is complete.
-   Mobile menu supports keyboard and Escape behavior.
-   One shared final Footer is used across the public Portfolio.
-   Footer includes brand, concise company context, navigation,
    available contact information, social links, Language Selector, and
    copyright.
-   Footer does not unnecessarily list every service.
-   Contact/social data is not unnecessarily duplicated.
-   Language Selector is a dropdown.
-   Language Selector uses language codes/names rather than country
    flags.
-   Current required languages are English and Arabic.
-   Architecture allows future additional languages without rebuilding
    the selector.
-   Navbar and Footer Language Selectors share the same state.
-   Language selection persists.
-   Changing language preserves the current route.
-   English uses LTR.
-   Arabic uses RTL.
-   Document language/direction are correct.
-   Portfolio-wide visible content is translated into English and
    Arabic.
-   User-visible local service/project content follows the multilingual
    data strategy where applicable.
-   No duplicated Arabic page components are created.
-   Stable IDs and relationships remain language-independent.
-   Forms, validation, Toasts, filters, pagination, Galleries, empty
    states, and invalid states participate in internationalization.
-   RTL behavior is intentional and does not blindly mirror
    images/logos.
-   Language Selector is accessible.
-   A shared global Back-to-Top control is implemented.
-   Back-to-Top is available across public pages where useful.
-   Back-to-Top does not remain unnecessarily visible near the top.
-   Back-to-Top returns the current page to the top without changing
    routes.
-   Back-to-Top is keyboard accessible.
-   Back-to-Top has an accessible translated label.
-   Back-to-Top respects reduced-motion preferences.
-   Back-to-Top remains usable on desktop/tablet/mobile.
-   Back-to-Top does not cover important content or floating UI.
-   Back-to-Top does not require a new dependency unless separately
    approved.
-   Navbar/Footer remain responsive.
-   All current Portfolio pages are verified in English and Arabic.
-   No horizontal overflow exists at required widths.
-   No unsupported company/project translations or claims are invented.
-   No third production language is implemented as part of Sprint 09.
-   No country flags are used for languages.
-   No unapproved route-localization architecture is introduced.
-   Required technical verification succeeds or limitations are
    documented.
-   User visual approval is received.

------------------------------------------------------------------------

# 60. Definition of Done

Sprint 09 is DONE only when:

1.  All approved Sprint 09 requirements are implemented.
2.  Global Navbar is finalized.
3.  Desktop navigation is complete.
4.  Mobile navigation is complete.
5.  Active-route behavior is complete.
6.  Global Footer is finalized.
7.  Footer contact/social behavior is complete.
8.  Navbar Language Selector is complete.
9.  Footer Language Selector is complete.
10. Shared language state is complete.
11. Language persistence is complete.
12. Same-route language switching is complete.
13. English/LTR support is complete.
14. Arabic/RTL support is complete.
15. Home translation is complete.
16. About translation is complete.
17. Services translation is complete.
18. Service Details translation is complete.
19. Projects translation is complete.
20. Project Details translation is complete.
21. Contact translation is complete.
22. Shared UI translation is complete.
23. Validation/Toast/empty/error state translation is complete.
24. Direction-sensitive UI is verified.
25. Global Back-to-Top implementation is complete.
26. Back-to-Top visibility behavior is verified.
27. Back-to-Top interaction is verified.
28. Back-to-Top accessibility is verified.
29. Back-to-Top reduced-motion behavior is verified.
30. Back-to-Top responsive/overlap behavior is verified.
31. Responsive behavior is verified in both languages.
32. Accessibility and reduced-motion behavior are verified.
33. Required technical verification is complete.
34. No raw translation keys or blocking missing translations remain.
35. No known blocking regression remains.
36. User visual review is complete and approved in English and Arabic.
37. Sprint 09 test documentation records actual results.
38. Sprint 09 completion report records actual implementation.
39. Future third-language support remains possible without redesigning
    the selector architecture.
40. No future Sprint work is mixed into Sprint 09.
41. Git changes are reviewed.
42. Commit/push occurs only after explicit user approval.

If any required item remains incomplete, Sprint 09 remains IN PROGRESS.
