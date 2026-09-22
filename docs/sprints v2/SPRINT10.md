# SPRINT 10 --- Portfolio Final QA, Accessibility, Performance & Regression

> **Current-scope note:** `../SPRINT_PLAN.md` defines completion and one-run evidence files. Verify the form never claims delivery; verify actual contact links only when real values exist. Do not mark missing factual content, contact details, hosting, or unrun checks PASS. Separate approval/report gates below are superseded.

## 1. Sprint Goal

Perform the final Portfolio-wide quality, accessibility, responsiveness,
performance, regression, and production-readiness audit for SAINTRA.

Sprint 10 is the final closure gate for the public Portfolio.

It must verify that the functionality and UX approved across the
previous Portfolio sprints continue to work together correctly after all
page-level, shared-component, responsive, and internationalization work
has been integrated.

Sprint 10 is NOT a feature-development sprint and is NOT a redesign
sprint.

Its purpose is to:

1.  Find defects and regressions.
2.  Fix approved defects that are within the already-approved Portfolio
    scope.
3.  Verify all public routes and major interactions.
4.  Verify responsive behavior.
5.  Verify English/LTR and Arabic/RTL behavior.
6.  Perform a final accessibility audit.
7.  Perform a final performance audit.
8.  Review production-build readiness.
9.  Confirm that previously approved requirements were not lost or
    broken.
10. Produce the final Sprint test and completion documentation.

A new feature, new product requirement, major redesign, backend
architecture, Dashboard work, or unrelated refactor must not be
introduced under the label of QA.

------------------------------------------------------------------------

# 2. Sprint Nature

Sprint 10 is primarily an AUDIT, VERIFICATION, REGRESSION-FIX, and
CLOSURE sprint.

The expected workflow is:

Inspect\
→ Audit\
→ Identify Findings\
→ Classify Findings\
→ Propose Fixes\
→ User Approval\
→ Apply Approved Fixes\
→ Re-test\
→ Visual Review\
→ Final Verification\
→ TEST10\
→ REPORT10\
→ Git Review\
→ User Approval for Commit/Push

The existence of Sprint 10 does not authorize unrestricted cleanup or
source changes.

All meaningful fixes remain subject to the project's Proposal → Approval
→ Apply workflow.

------------------------------------------------------------------------

# 3. Portfolio Routes in Scope

Verify all current public Portfolio routes, including:

-   `/`
-   `/about`
-   `/services`
-   `/services/:id`
-   `/projects`
-   `/projects/:id`
-   `/contact`

Also verify invalid/dynamic-route behavior where applicable, such as:

-   Invalid Service ID.
-   Invalid Project ID.

If additional approved public routes exist by the time Sprint 10 starts,
they must be identified during the pre-audit inspection and included in
the verification plan.

Do not invent new routes as part of Sprint 10.

------------------------------------------------------------------------

# 4. Previous Sprint Regression Coverage

Sprint 10 must verify that the final integrated Portfolio still
satisfies the approved behavior established across previous Portfolio
sprints.

The audit must not assume that a requirement remains correct merely
because it passed in an earlier Sprint.

Later shared changes may have introduced regressions.

Review at minimum:

-   Foundation/design-system behavior.
-   Home.
-   About.
-   Services.
-   Service Details.
-   Projects.
-   Project Details.
-   Contact.
-   Navbar.
-   Footer.
-   Internationalization.
-   LTR/RTL.
-   Shared components.
-   Shared data relationships.
-   Responsive behavior.
-   Accessibility behavior.
-   Motion/reduced-motion behavior.

------------------------------------------------------------------------

# 5. Functional QA

Perform a full functional pass across the public Portfolio.

Verify:

-   Routes load correctly.
-   Internal navigation works.
-   Dynamic detail routes resolve correctly.
-   Invalid detail routes fail safely.
-   Buttons/actions navigate to correct destinations.
-   Filters work.
-   Pagination works.
-   Carousels/sliders work where present.
-   Project Gallery works.
-   Related content works.
-   Contact actions work.
-   External links work safely.
-   Language switching works.
-   Mobile navigation works.
-   Forms and validation work.
-   Toast behavior works.
-   Optional content behaves correctly.
-   Missing optional content does not break layouts.
-   Data relationships remain valid.

Do not rely solely on build success as proof of functional correctness.

------------------------------------------------------------------------

# 6. Home Page Regression

Verify the final approved Home page behavior, including all sections
actually completed before Sprint 10.

Review:

-   Navbar behavior at Home.
-   Hero.
-   Hero actions.
-   Approved motion/visual background.
-   About preview.
-   Projects preview.
-   Services preview.
-   View-all navigation.
-   Any approved carousel behavior.
-   Contact/closing section.
-   Responsive behavior.
-   English.
-   Arabic.
-   LTR.
-   RTL.
-   Keyboard interaction.
-   Reduced motion.

Sprint 10 must not redesign Home.

Only actual defects/regressions or approved final QA corrections are in
scope.

------------------------------------------------------------------------

# 7. About Page Regression

Verify:

-   About Hero.
-   Company Story.
-   Statistics.
-   Count-up behavior.
-   Statistics suffixes.
-   Count-up runs as approved.
-   Reduced-motion behavior.
-   Location.
-   CTA.
-   English content.
-   Arabic content.
-   LTR/RTL.
-   Responsive layout.
-   No horizontal overflow.

Verify that Statistics do not create duplicate timers/listeners or
repeatedly restart in an unintended way.

------------------------------------------------------------------------

# 8. Services Page Regression

Verify:

-   Services Hero.
-   Filter.
-   `All` behavior.
-   Data-driven categories.
-   Service cards.
-   Service icons.
-   Service-card navigation.
-   Pagination.
-   Filter-before-pagination behavior.
-   Filter-change page reset.
-   No-results behavior.
-   CTA.
-   English/Arabic.
-   LTR/RTL.
-   Responsive behavior.

Verify the approved responsive page-capacity behavior actually
implemented for Services.

Do not change the product requirement simply to simplify QA.

------------------------------------------------------------------------

# 9. Service Details Regression

Verify:

-   Valid service route.
-   Invalid service route.
-   Service Hero.
-   Service image behavior.
-   Overview.
-   What's Included.
-   Our Process.
-   Optional Video.
-   Video absence.
-   Related Projects.
-   Related Projects absence.
-   Related Projects pagination.
-   Related Project navigation.
-   CTA.
-   English/Arabic.
-   LTR/RTL.
-   Responsive behavior.
-   Keyboard accessibility.

Optional Video must disappear cleanly when unavailable/invalid.

Related Projects must disappear cleanly when none exist.

------------------------------------------------------------------------

# 10. Projects Page Regression

Verify:

-   Projects Hero.
-   Filter.
-   `All` behavior.
-   Project cards.
-   Project image behavior.
-   Missing-image placeholder behavior.
-   Project title.
-   Short description.
-   Project Type.
-   Project-card navigation.
-   Fixed logical pagination size approved for Projects.
-   Filter-before-pagination behavior.
-   Filter-change page reset.
-   No-results behavior.
-   CTA.
-   English/Arabic.
-   LTR/RTL.
-   Responsive layouts.

Project status/state must not reappear.

------------------------------------------------------------------------

# 11. Project Details Regression

Verify:

-   Valid project route.
-   Invalid project route.
-   Hero.
-   Optional project logo.
-   Missing-logo behavior.
-   Overview.
-   Gallery.
-   Project Information.
-   Project Type.
-   Technologies.
-   Platform.
-   Year.
-   Related Services.
-   Visit Project.
-   CTA.
-   English/Arabic.
-   LTR/RTL.
-   Responsive behavior.

## Gallery States

Explicitly verify:

### Zero Images

-   Gallery section disappears.
-   No fake gallery placeholder.
-   No broken spacing.

### One Image

-   Image displays appropriately.
-   No unnecessary multi-image controls.

### Multiple Images

-   Active image is visually distinct.
-   Other images remain selectable.
-   Selecting another image changes the active image correctly.
-   Keyboard/touch behavior remains usable.
-   RTL does not break control meaning.

A separate Lightbox is not required unless it was separately approved
later.

## Optional Information

Verify:

-   Missing logo hides logo cleanly.
-   Missing Visit Project URL hides the action.
-   Zero technologies does not break layout.
-   One technology works.
-   Multiple technologies work.
-   Related Services show all approved related services.
-   No related services hides the related-services information cleanly.

------------------------------------------------------------------------

# 12. Contact Page Regression

Verify:

-   Contact Hero.
-   Contact Information.
-   Email.
-   WhatsApp/contact number.
-   Location.
-   Social links.
-   Contact Form.
-   Required/optional indicators.
-   Validation.
-   Service dropdown.
-   Submit behavior.
-   Explicit demo-only notice that does not imply delivery.
-   Closing Message.
-   English/Arabic.
-   LTR/RTL.
-   Responsive behavior.

## Form Fields

Confirm the approved fields remain exactly:

-   Name --- required.
-   Email --- required.
-   Phone --- optional.
-   Subject --- required.
-   Service --- optional.
-   Message --- required.

Confirm no unapproved Company field appears.

## Validation

Verify:

-   Required Name.
-   Required/valid Email.
-   Optional Phone.
-   Reasonable validation when Phone is supplied.
-   Required Subject.
-   Optional Service.
-   Required Message.
-   Whitespace-only required fields fail.
-   Error messages appear below corresponding fields.
-   Errors are accessible.
-   Entered values remain after failed validation.

## Demo Validation and Real Contact Links

Verify:

-   The form is visibly labelled demo-only before entry and at submit.
-   Valid local validation explicitly states that no message was sent.
-   Form values remain available and are not stored/logged.
-   No success/delivery toast or duplicate notice appears.
-   Verified email/WhatsApp links work when corresponding real data is
    supplied; missing values do not create fake links.

Real API delivery remains outside Sprint 10 unless separately introduced
through a future approved integration phase.

------------------------------------------------------------------------

# 13. Global Navbar Regression

Verify the final shared Navbar across all public routes.

Check:

-   Brand/home navigation.
-   Home.
-   About.
-   Services.
-   Projects.
-   Contact.
-   Language Selector.
-   Active route.
-   Service Details → Services active.
-   Project Details → Projects active.
-   Home top/scroll behavior where implemented.
-   Internal-page behavior.
-   Desktop layout.
-   Mobile layout.
-   Menu open/close.
-   Escape behavior.
-   Route-change behavior.
-   Resize behavior.
-   Keyboard interaction.
-   Focus states.
-   English/Arabic.
-   LTR/RTL.
-   Reduced motion.

No stale menu or scroll state should survive incorrectly between
contexts.

------------------------------------------------------------------------

# 14. Global Footer Regression

Verify:

-   SAINTRA brand.
-   Company description.
-   Navigation.
-   Contact information.
-   Email.
-   WhatsApp/contact behavior.
-   Location.
-   Social links.
-   Language Selector.
-   Copyright.
-   Missing optional contact data.
-   English/Arabic.
-   LTR/RTL.
-   Responsive behavior.
-   Keyboard accessibility.

Footer information must remain consistent with the approved shared data.

------------------------------------------------------------------------

# 15. Internationalization Regression

Verify the complete Portfolio in:

-   English / LTR.
-   Arabic / RTL.

Check:

-   Navbar.
-   Footer.
-   Home.
-   About.
-   Services.
-   Service Details.
-   Projects.
-   Project Details.
-   Contact.
-   Forms.
-   Validation.
-   Toasts.
-   Filters.
-   Pagination.
-   Galleries.
-   Empty states.
-   Invalid/not-found states.
-   Shared actions.

Verify that:

-   No raw translation keys appear.
-   No required content is unintentionally blank.
-   No major user-visible strings remain in the wrong language.
-   Language change preserves current route.
-   Language preference persists as approved.
-   Navbar/Footer selectors remain synchronized.
-   Stable project/service identity is preserved across language
    changes.
-   Data relationships do not depend on translated labels.

------------------------------------------------------------------------

# 16. RTL Audit

Perform a dedicated RTL pass.

Inspect:

-   Text alignment.
-   Navbar.
-   Mobile menu.
-   Footer.
-   Cards.
-   Forms.
-   Dropdowns.
-   Filters.
-   Pagination.
-   Galleries.
-   Carousels.
-   Directional arrows.
-   Previous/Next semantics.
-   Inline spacing.
-   Validation messages.
-   Toast placement/presentation.
-   Focus order.

Do not blindly mirror:

-   SAINTRA logo.
-   Photos.
-   Project screenshots.
-   Social platform logos.
-   Non-directional visual assets.

RTL fixes must solve actual direction issues without introducing
unrelated redesign.

------------------------------------------------------------------------

# 17. Responsive QA

Verify at minimum around:

-   1440px.
-   1024px.
-   768px.
-   390px.
-   320px.

These are verification references, not five independent fixed designs.

Perform the responsive pass in BOTH:

-   English.
-   Arabic.

Check:

-   No horizontal overflow.
-   Container behavior.
-   Section spacing.
-   Heading wrapping.
-   Body text wrapping.
-   Buttons.
-   Cards.
-   Filters.
-   Pagination.
-   Forms.
-   Dropdowns.
-   Toasts.
-   Navbar.
-   Mobile menu.
-   Footer.
-   Gallery.
-   Carousels/sliders.
-   Images.
-   Embedded video.
-   Long Arabic strings.
-   Long English strings.
-   Touch targets.

Responsive QA may fix broken layout behavior.

It must not become an excuse for unapproved page redesign.

------------------------------------------------------------------------

# 18. Content Stress Testing

Where practical, test layouts against realistic content variation.

Review behavior with:

-   Short titles.
-   Longer titles.
-   Short descriptions.
-   Longer descriptions.
-   Arabic text.
-   English text.
-   Zero optional items.
-   One item.
-   Multiple items.

Do not rewrite approved marketing content solely to make a layout easier
to implement.

The layout should tolerate reasonable content variation.

------------------------------------------------------------------------

# 19. Optional-Data Regression

Verify optional-data states across the Portfolio.

Examples include:

-   Project with no logo.
-   Project with no gallery images.
-   Project with one image.
-   Project with multiple images.
-   Project with no public URL.
-   Project with no related services.
-   Service with no video.
-   Service with no related projects.
-   Missing optional contact information.
-   Missing social link.
-   Optional Contact phone left blank.
-   Optional Contact service left unselected.

Optional absence must not produce:

-   Broken images.
-   Empty cards.
-   Empty section headings.
-   Dangling separators.
-   Broken actions.
-   Large unexplained gaps.
-   Console errors.

------------------------------------------------------------------------

# 20. Accessibility Audit

Perform a final Portfolio-wide accessibility review.

Audit at minimum:

-   Semantic HTML.
-   Heading hierarchy.
-   Landmark/navigation structure.
-   Link purpose.
-   Button semantics.
-   Form labels.
-   Required fields.
-   Validation messages.
-   `aria-current`.
-   Expanded/collapsed states.
-   Accessible names.
-   Image alternative text.
-   Decorative image handling.
-   Keyboard navigation.
-   Focus states.
-   Focus order.
-   Touch target usability.
-   Contrast.
-   Toast announcements.
-   Dropdown accessibility.
-   Mobile-menu accessibility.
-   Pagination accessibility.
-   Gallery accessibility.
-   Reduced motion.
-   Document language.
-   Document direction.

Accessibility findings should be documented even if an item cannot be
fixed without broader scope.

------------------------------------------------------------------------

# 21. Keyboard-Only Audit

Navigate the Portfolio without a mouse.

Test relevant controls using:

-   `Tab`.
-   `Shift + Tab`.
-   `Enter`.
-   `Space`.
-   `Escape`.
-   Arrow keys where the control pattern requires them.

Verify:

-   Focus is visible.
-   Focus order is logical.
-   No keyboard trap exists.
-   Mobile menu can be used.
-   Language dropdown can be used.
-   Filters can be used.
-   Pagination can be used.
-   Gallery controls can be used.
-   Form can be completed.
-   Toast does not steal focus incorrectly.
-   External links/actions remain reachable.

RTL must not produce an illogical keyboard experience.

------------------------------------------------------------------------

# 22. Focus Management

Review focus behavior after:

-   Opening/closing mobile navigation.
-   Opening/closing Language Selector.
-   Route navigation where relevant.
-   Failed form submission.
-   Valid demo form check with explicit non-delivery notice.
-   Dynamic filter/pagination changes where relevant.

Do not introduce complex focus management where native browser behavior
is already correct.

Fix actual accessibility problems rather than adding unnecessary
scripting.

------------------------------------------------------------------------

# 23. Color and Contrast

Review text, interactive elements, focus indicators, form states,
disabled states, and error/success states for sufficient readability and
contrast.

Do not rely solely on color to communicate:

-   Active navigation.
-   Validation errors.
-   Success.
-   Disabled state.
-   Selected filter.
-   Current pagination page.

Because final brand colors may still evolve, fixes should use
centralized design tokens where appropriate rather than scattering
one-off color values.

------------------------------------------------------------------------

# 24. Reduced Motion

Verify behavior when the user prefers reduced motion.

Review:

-   Home Hero motion.
-   Count-up behavior.
-   Card/icon motion.
-   Carousels/sliders.
-   Gallery transitions.
-   Navbar transitions.
-   Mobile menu.
-   Language dropdown.
-   Toast.
-   Section reveals.

Essential content and functionality must remain available without
motion.

Animations must not be required to understand state.

------------------------------------------------------------------------

# 25. Image and Media Audit

Review:

-   Project thumbnails.
-   Project Gallery images.
-   Service images.
-   Logos.
-   Icons.
-   Video embeds.
-   Placeholder assets.

Check:

-   No broken source paths.
-   Appropriate alt text.
-   Decorative assets handled appropriately.
-   Images do not overflow.
-   Aspect ratios remain usable.
-   Large assets are not unnecessarily loaded at inappropriate sizes
    where avoidable.
-   Lazy loading is used where appropriate and does not harm important
    above-the-fold UX.
-   Video embed is responsive.
-   Optional video does not load when absent.

Do not fabricate final client/project imagery during QA.

------------------------------------------------------------------------

# 26. Performance Audit

Perform a final practical performance review.

Inspect:

-   Production bundle/build.
-   Image sizes.
-   Asset loading.
-   Fonts.
-   Icon strategy.
-   Animation cost.
-   Scroll handlers.
-   Resize handlers.
-   Event listeners.
-   Timers.
-   Intersection observers.
-   Repeated computations.
-   Unnecessary rerenders.
-   Duplicate resources.
-   Unnecessary dependencies.
-   Large unused assets.
-   Route/component behavior.

Fix clear, approved performance defects without introducing premature
architecture changes.

------------------------------------------------------------------------

# 27. Lighthouse / Browser Audit

Run an appropriate browser quality audit such as Lighthouse where the
available environment supports it.

Review relevant categories such as:

-   Performance.
-   Accessibility.
-   Best Practices.
-   SEO-related technical findings where applicable.

The purpose is to identify actionable issues.

Sprint 10 must NOT use an arbitrary requirement such as `100/100` as the
only definition of quality.

Record:

-   Environment used.
-   Route(s) tested.
-   Relevant scores/results.
-   Important findings.
-   Fixes applied.
-   Remaining limitations.

A lower score caused by an understood external/dev-environment
limitation must be documented rather than hidden.

Do not claim Lighthouse was run if it was not actually executed.

------------------------------------------------------------------------

# 28. JavaScript / Runtime Audit

Review the browser console while exercising the Portfolio.

Target final state:

-   No blocking runtime errors.
-   No unexplained repeated warnings.
-   No uncaught promise failures.
-   No broken asset requests caused by the application.
-   No duplicate listener behavior.
-   No obvious memory/leak symptoms from repeated route navigation.

If a warning is external/tooling-related and cannot reasonably be fixed
in scope, document it accurately.

------------------------------------------------------------------------

# 29. Build Verification

Run the project's approved production build command.

Expected command based on the current project setup:

`npm run build`

The final report must record the actual result.

If the build fails:

-   Do not mark Sprint 10 complete.
-   Identify whether the failure was introduced by Sprint work or
    pre-existing.
-   Follow the project rules before applying a meaningful fix.

Never claim a successful build without executing it.

------------------------------------------------------------------------

# 30. Dependency Audit

Review current runtime dependencies for obvious Sprint-related concerns.

Check for:

-   Dependencies introduced but no longer used.
-   Duplicate libraries solving the same problem.
-   Heavy dependencies added without clear value.
-   Internationalization dependency usage.
-   Animation/icon dependencies.
-   Known build warnings.

Do not remove a dependency merely because it appears removable.

Any deletion/removal must follow the explicit project deletion approval
rules.

Sprint 10 is not permission for uncontrolled dependency cleanup.

------------------------------------------------------------------------

# 31. Dead / Unused Code Review

Identify obvious:

-   Unused imports.
-   Unused components.
-   Unused styles.
-   Unused assets.
-   Obsolete temporary code.
-   Duplicate logic.

However:

Identification does NOT automatically authorize deletion.

Before deletion, report:

-   Exact target.
-   Current location.
-   Why it appears unused.
-   Current references/usages checked.
-   Expected impact.
-   Replacement, if any.

Wait for explicit approval where required by the project rules.

Git history is the rollback mechanism; do not preserve large obsolete
implementations as commented code.

------------------------------------------------------------------------

# 32. Shared Component Consistency

Review shared components for consistent behavior across pages.

Examples:

-   Buttons.
-   Icons.
-   Section headings.
-   Project cards.
-   Service cards.
-   Pagination.
-   Navbar.
-   Footer.
-   Language Selector.
-   Toast if shared.

Check:

-   Same semantic role behaves consistently.
-   Focus states are consistent.
-   Disabled states are consistent.
-   Icon sizing is coherent.
-   RTL behavior is coherent.
-   Responsive behavior is coherent.

Do not redesign all components simply to make them visually identical.

Correct actual inconsistencies that violate the approved design system.

------------------------------------------------------------------------

# 33. Data Integrity Audit

Review current local Portfolio data and relationships.

Check:

-   Stable IDs.
-   Unique IDs where required.
-   Project/service relations.
-   `serviceIds`.
-   Project Type values.
-   Service category/filter values.
-   Optional media values.
-   Valid public URLs.
-   Social URLs.
-   Contact values.
-   Multilingual content structure.

Ensure UI logic does not rely on current record count as a permanent
assumption unless a requirement explicitly defines a page capacity.

Do not invent missing factual client/project information.

------------------------------------------------------------------------

# 34. Link Audit

Verify internal and external links.

Internal examples:

-   Navbar routes.
-   Footer routes.
-   View All Services.
-   View All Projects.
-   Service cards.
-   Project cards.
-   Related Projects.
-   Related Services.
-   CTA destinations.
-   Brand/Home.

External examples:

-   Social profiles.
-   WhatsApp.
-   Email.
-   Visit Project.
-   Video embeds.

Check:

-   Correct destination.
-   No broken empty href.
-   Safe external-link behavior.
-   No invalid optional action rendered.

------------------------------------------------------------------------

# 35. Route Navigation Audit

Test direct loading and in-app navigation.

Verify:

-   Refresh on normal route.
-   Refresh on dynamic detail route.
-   Navigation from cards.
-   Navigation from related content.
-   Browser Back.
-   Browser Forward.
-   Language switching on detail routes.
-   Invalid IDs.
-   Mobile-menu navigation.

Any hosting-specific SPA fallback requirement discovered should be
documented.

Do not invent hosting architecture during Sprint 10 unless separately
approved.

------------------------------------------------------------------------

# 36. Production Readiness Boundaries

Sprint 10 validates the frontend Portfolio.

It does NOT prove production readiness of systems that do not yet exist.

For example, Sprint 10 must not claim:

-   Contact messages are delivered to a backend if no API exists.
-   Dashboard content management exists.
-   Database persistence exists.
-   Authentication exists.
-   Production analytics exists.
-   Production monitoring exists.
-   Production hosting configuration is complete unless actually
    implemented and verified.

Reports must distinguish frontend readiness from deferred
external/backend infrastructure.

------------------------------------------------------------------------

# 37. Finding Classification

During the audit, classify findings so scope remains controlled.

Recommended categories:

## Blocking Defect

Prevents core functionality, route access, build, major accessibility,
or approved interaction from working.

## Regression

Previously approved behavior that no longer works correctly.

## QA Fix

Small correction needed for responsive, accessibility, consistency, or
performance compliance.

## Improvement / Enhancement

Would improve the product but is not required to satisfy approved
Portfolio behavior.

## New Feature

Introduces new capability not previously approved.

Sprint 10 may address approved Blocking Defects, Regressions, and
appropriate QA Fixes.

Improvements and New Features must not be silently implemented as QA.

------------------------------------------------------------------------

# 38. Pre-Fix Approval Gate

After the initial audit, present findings before meaningful fixes.

For each proposed fix, provide:

-   Problem.
-   Evidence/reproduction.
-   Severity/category.
-   Expected correct behavior.
-   Proposed change.
-   Why the change is necessary.
-   Exact file(s) expected to change.
-   Shared impact.
-   Risk.
-   Verification method.

Wait for explicit approval before applying meaningful source changes.

If a new issue appears during fixing that expands scope, stop and
request approval.

------------------------------------------------------------------------

# 39. No Uncontrolled Redesign

Sprint 10 must not include statements such as:

-   "This section would look better completely redesigned."
-   "Let's replace the whole layout while fixing responsiveness."
-   "Let's change the navigation architecture for cleanliness."

unless the current implementation actually violates an approved
requirement and the redesign is separately approved.

QA should stabilize the approved product, not restart product design.

------------------------------------------------------------------------

# 40. No Uncontrolled Architecture Refactor

Do not use Sprint 10 to:

-   Replace Vue Router.
-   Replace the styling architecture.
-   Replace the i18n architecture.
-   Add state-management libraries.
-   Introduce backend services.
-   Replace the data layer.
-   Rebuild pages from scratch.

A major architectural problem discovered during QA must be reported and
discussed separately.

------------------------------------------------------------------------

# 41. Final Portfolio Acceptance Checklist

Before declaring the Portfolio closed, verify the approved high-level
requirements from previous Sprints.

At minimum confirm:

## Foundation

-   Shared tokens/styles/components remain functional.
-   Responsive foundation remains intact.
-   Focus and motion foundations remain intact.

## Home

-   Final approved Home experience is present.

## About

-   Final About structure is present.
-   Statistics behavior is correct.

## Services

-   All service catalogue requirements remain present.
-   Filtering and pagination work.

## Service Details

-   Overview.
-   What's Included.
-   Process.
-   Optional Video.
-   Related Projects.
-   CTA.

## Projects

-   Catalogue.
-   Filters.
-   Project Type.
-   Pagination.
-   Missing-image behavior.

## Project Details

-   Hero.
-   Optional logo.
-   Overview.
-   Conditional Gallery.
-   Project Information.
-   Related Services.
-   Conditional Visit Project.
-   CTA.

## Contact

-   Contact information.
-   WhatsApp.
-   Social links.
-   Approved form.
-   Validation.
-   Optional Service.
-   Neutral demo-only validation notice and real contact links.
-   Closing Message.

## Global

-   Navbar.
-   Footer.
-   Language Selector.
-   English.
-   Arabic.
-   LTR.
-   RTL.
-   Persistence.
-   Same-route language switching.

A requirement missing because of a later regression must be treated as a
finding rather than silently accepted.

------------------------------------------------------------------------

# 42. Visual Final Review

After approved fixes and technical re-verification, perform a final user
visual review.

The review should cover the Portfolio as an integrated product rather
than isolated screenshots only.

Review at minimum:

-   Home.
-   About.
-   Services.
-   Service Details.
-   Projects.
-   Project Details.
-   Contact.
-   Navbar.
-   Footer.
-   Desktop.
-   Tablet.
-   Mobile.
-   English.
-   Arabic.
-   LTR.
-   RTL.
-   Forms.
-   Filters.
-   Pagination.
-   Gallery.
-   Toast.
-   Empty/optional states.

Sprint 10 is not visually approved until the user explicitly accepts the
final result.

------------------------------------------------------------------------

# 43. Technical Verification Matrix

The final verification should record actual results for at least:

-   Production build.
-   Public routes.
-   Dynamic routes.
-   Invalid routes.
-   Internal links.
-   External links.
-   Navbar.
-   Footer.
-   Mobile menu.
-   Language Selector.
-   Language persistence.
-   Same-route language switch.
-   English.
-   Arabic.
-   LTR.
-   RTL.
-   Filters.
-   Pagination.
-   Gallery.
-   Optional gallery states.
-   Optional video.
-   Related content.
-   Contact validation.
-   Contact Toast.
-   WhatsApp.
-   Social links.
-   Keyboard navigation.
-   Focus states.
-   Reduced motion.
-   Responsive widths.
-   Console/runtime.
-   Accessibility findings.
-   Performance findings.
-   Lighthouse/browser audit if executed.
-   Git diff.

Do not collapse untested areas into a generic PASS.

------------------------------------------------------------------------

# 44. Sprint Test Documentation

After implementation of approved fixes and actual final verification,
create:

`documents/sprints/TEST10.md`

The test document must record:

-   Test environment.
-   Tested commit/worktree state where appropriate.
-   Scope.
-   Test cases.
-   Expected result.
-   Actual result.
-   PASS / FAIL / BLOCKED.
-   Build test.
-   Route tests.
-   Regression tests.
-   Responsive tests.
-   English tests.
-   Arabic tests.
-   RTL/LTR tests.
-   Accessibility tests.
-   Keyboard tests.
-   Reduced-motion tests.
-   Optional-data tests.
-   Form tests.
-   Link tests.
-   Performance checks.
-   Console/runtime checks.
-   Lighthouse/browser audit results if actually executed.
-   Known limitations.

Never claim a test was executed if it was not.

------------------------------------------------------------------------

# 45. Sprint Completion Report

After implementation, testing, and final visual approval, create:

`documents/sprints/REPORT10.md`

The report must record:

-   Sprint goal.
-   Initial audit summary.
-   Findings discovered.
-   Finding classifications.
-   Fixes approved.
-   Fixes implemented.
-   Files modified.
-   Files created.
-   Files deleted only if explicitly approved.
-   Dependencies changed.
-   Build result.
-   Functional QA result.
-   Responsive QA result.
-   English/Arabic result.
-   RTL/LTR result.
-   Accessibility result.
-   Performance result.
-   Lighthouse/browser audit result if executed.
-   Runtime/console result.
-   Visual-review status.
-   Remaining non-blocking issues.
-   Deferred enhancements.
-   Deferred backend/data integration work.
-   Final Portfolio acceptance status.
-   Final Sprint status.

The report must reflect actual results, not planned work.

------------------------------------------------------------------------

# 46. Git and Repository Gate

Before Sprint 10 closure:

1.  Confirm all approved fixes are complete.
2.  Run final verification.
3.  Complete user visual review.
4.  Apply any approved final adjustments.
5.  Re-run affected verification.
6.  Create `TEST10.md`.
7.  Create `REPORT10.md`.
8.  Review Git status.
9.  Review Git diff.
10. Confirm no unrelated work is included.
11. Confirm no accidental generated/build artifacts are tracked.
12. Confirm no unauthorized deletion occurred.
13. Present final Git summary to the user.
14. Obtain explicit user approval.
15. Commit/push only after approval.

Sprint 10 must not automatically commit or push merely because tests
pass.

------------------------------------------------------------------------

# 47. Out of Scope

Sprint 10 does NOT include:

-   New Portfolio features.
-   Major visual redesign.
-   New page creation.
-   Dashboard implementation.
-   Backend implementation.
-   Contact API implementation.
-   Database implementation.
-   CMS implementation.
-   Authentication.
-   Production analytics unless separately approved.
-   New production hosting architecture.
-   Replacing the local data architecture.
-   A third language.
-   New service/product concepts.
-   Unapproved content invention.
-   Uncontrolled dependency cleanup.
-   Uncontrolled source deletion.
-   Uncontrolled architectural refactoring.

Potential future Data Integration/API work remains a separate
decision/phase.

------------------------------------------------------------------------

# 48. Acceptance Criteria

Sprint 10 is acceptable when:

-   All public Portfolio routes have been audited.
-   Major approved interactions have been regression-tested.
-   Approved optional-data states have been tested.
-   Navbar and Footer have been verified.
-   English/LTR has been verified.
-   Arabic/RTL has been verified.
-   Language switching and persistence have been verified.
-   Responsive behavior has been verified at required reference widths.
-   No known blocking horizontal overflow remains.
-   Keyboard navigation has been reviewed.
-   Focus states have been reviewed.
-   Form accessibility has been reviewed.
-   Navigation accessibility has been reviewed.
-   Reduced-motion behavior has been reviewed.
-   Project Gallery states have been reviewed.
-   Filters and pagination have been reviewed.
-   Contact validation and non-delivering demo behavior have been
    reviewed.
-   Internal/external links have been reviewed.
-   Performance has been audited.
-   Runtime/console behavior has been reviewed.
-   Production build has been executed successfully or a blocker is
    explicitly documented.
-   Lighthouse/browser audit has been executed where supported, with
    actual results documented.
-   Approved blocking defects/regressions are fixed and re-tested.
-   No unapproved new features are mixed into Sprint 10.
-   No unapproved redesign is mixed into Sprint 10.
-   No unapproved destructive cleanup is performed.
-   Final Portfolio Acceptance Checklist has been completed.
-   User final visual review is complete and approved.
-   `TEST10.md` records actual test results.
-   `REPORT10.md` records actual final state.
-   Git changes are reviewed before commit/push.

------------------------------------------------------------------------

# 49. Definition of Done

Sprint 10 is DONE only when:

1.  Initial Portfolio-wide audit is complete.
2.  Findings are documented and classified.
3.  Proposed meaningful fixes receive approval.
4.  Approved blocking defects are resolved or explicitly accepted as
    documented limitations.
5.  Approved regressions are resolved or explicitly accepted as
    documented limitations.
6.  Approved QA fixes are applied.
7.  Home regression verification is complete.
8.  About regression verification is complete.
9.  Services regression verification is complete.
10. Service Details regression verification is complete.
11. Projects regression verification is complete.
12. Project Details regression verification is complete.
13. Contact regression verification is complete.
14. Navbar regression verification is complete.
15. Footer regression verification is complete.
16. Internationalization regression verification is complete.
17. English/LTR verification is complete.
18. Arabic/RTL verification is complete.
19. Responsive verification is complete.
20. Optional-data verification is complete.
21. Accessibility audit is complete.
22. Keyboard audit is complete.
23. Focus-state audit is complete.
24. Reduced-motion audit is complete.
25. Link audit is complete.
26. Data-integrity review is complete.
27. Performance audit is complete.
28. Runtime/console audit is complete.
29. Production build verification is complete.
30. Lighthouse/browser audit is completed where supported and actual
    results are documented.
31. Final Portfolio Acceptance Checklist is complete.
32. No known unapproved feature work is included.
33. No known unauthorized deletion is included.
34. No known blocking regression remains unless explicitly accepted and
    documented.
35. User final visual review is complete and approved.
36. `TEST10.md` is created from actual executed verification.
37. `REPORT10.md` reflects the actual final Portfolio state.
38. Git status/diff is reviewed.
39. Commit/push occurs only after explicit user approval.

If any required closure item remains incomplete, Sprint 10 remains IN
PROGRESS.

------------------------------------------------------------------------

# 50. Portfolio Closure Principle

Sprint 10 is the final quality gate for the current public Portfolio
phase.

Completion means the approved frontend Portfolio has been audited as one
integrated product and is ready to close its current frontend
implementation phase based on the verified scope.

It does NOT mean deferred systems such as backend APIs, Dashboard,
database, CMS, or future data-source architecture have been completed.

Those remain separate future phases and must not be represented as
completed by Sprint 10.
