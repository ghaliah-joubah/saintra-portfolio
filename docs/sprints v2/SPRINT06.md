# SPRINT 06 --- Projects Page Complete Redesign & Implementation

> **Current-scope note:** `../SPRINT_PLAN.md` is the one-run contract. `/projects` lists all local projects with six per logical page; Home is limited to a six-project preview. Separate approval/report gates below are superseded.

## 1. Sprint Goal

Design and implement the complete public Projects catalogue page for
SAINTRA.

Route:

`/projects`

The page must introduce SAINTRA's projects, allow visitors to filter the
catalogue by project type/category, present projects through compact and
informative project cards, support scalable pagination, handle projects
with and without images safely, and provide a clear path from every
project card to its dedicated Project Details page.

This Sprint defines the required structure, behavior, data expectations,
responsive behavior, accessibility, motion, optional/missing-data
handling, verification requirements, and workflow gates.

The exact visual design is intentionally not prescribed. Codex/Figma may
determine the final composition, styling, spacing, decorative treatment,
card styling, and animation language as long as all functional and UX
requirements below are preserved.

------------------------------------------------------------------------

## 2. Required Page Structure

The Projects page must contain:

1.  Projects Hero
2.  Projects List / Catalogue
    -   Filter controls at the beginning of the catalogue section
    -   Project cards
    -   Pagination when required
3.  CTA

High-level flow:

Projects Hero\
↓\
Projects Catalogue\
→ Filter Controls\
→ Project Cards\
→ Pagination when required\
↓\
CTA

The filter must appear before the project cards inside the catalogue
experience.

------------------------------------------------------------------------

## 3. Data Source

For the current Portfolio phase, project information is provided through
the project's local data layer under `src/data`.

The page must consume project data rather than duplicating individual
project records inside the page template.

The implementation must not assume a permanent number of projects.

It must support:

-   Zero projects.
-   One project.
-   A few projects.
-   Exactly one page of projects.
-   Multiple pages of projects.
-   A significantly larger catalogue in the future.

API, backend, Dashboard, CMS, database, or another future production
data source is outside the scope of this Sprint.

------------------------------------------------------------------------

# 4. Projects Hero

## Purpose

Introduce the Projects page and establish that the page represents
SAINTRA's project/portfolio work.

## Required Content

The Hero must support:

-   Projects-related eyebrow/label where appropriate.
-   Main page heading.
-   Supporting description.

## Design Freedom

The exact Hero composition, background, decorative elements, typography,
imagery, and optional motion are left to Codex/Figma.

The Hero should feel consistent with the Portfolio identity without
needing to duplicate the Home, About, or Services Hero.

## Requirements

-   One clear page-level H1.
-   Strong readable hierarchy.
-   Responsive behavior across supported widths.
-   Decorative visuals must not interfere with content.
-   Essential information must not depend on animation.
-   No horizontal overflow.

------------------------------------------------------------------------

# 5. Projects Filter

## Purpose

Allow visitors to narrow the Projects catalogue by project
type/category.

The filter must also make browsing a larger catalogue easier.

## Placement

Filter controls must appear at the beginning of the Projects Catalogue
section, before the project cards.

Conceptually:

`Catalogue Heading / Context`\
`Filter Controls`\
`Project Cards`\
`Pagination`

## Project Types / Categories

The project data model must support an explicit project type/category or
equivalent filterable field.

Possible examples may include:

-   Web Application
-   Mobile Application
-   AI Solution
-   UI/UX
-   Desktop Application
-   Other approved project types

These are examples only and must not be treated as a permanently fixed
hardcoded list.

The available filter options should be derived from the approved project
data/categories where practical.

An `All` option must allow the visitor to return to the complete project
catalogue.

## Important Distinction

The project type is not only an internal filtering mechanism.

The type/category must also be visible on each Project Card so that
visitors browsing `All Projects` can immediately understand what kind of
project each card represents.

## Filter Behavior

Filtering occurs before pagination.

Required order:

`All Projects → Selected Filter → Filtered Results → Pagination → Visible Project Cards`

When the active filter changes:

-   Update the catalogue to show only matching projects.
-   Recalculate pagination from the filtered results.
-   Return to the first valid page.
-   Hide pagination when the filtered results fit on one page.
-   Show a valid no-results state when no project matches.

Filtering must remain usable on all supported screen sizes.

## Design Freedom

The filter may use an appropriate accessible responsive presentation
such as chips, tabs, select/dropdown behavior, controls, or another
approved solution.

The exact visual treatment is left to the design.

The active filter must always be understandable.

------------------------------------------------------------------------

# 6. Projects Catalogue

## Purpose

Display SAINTRA projects through a scalable catalogue that remains clear
whether there is one project or many.

The catalogue must not depend on the current project count.

## Required Project Card Content

Each Project Card must support:

-   Project image.
-   Project title.
-   Short project description.
-   Visible project type/category.
-   Clear interaction/action leading to Project Details.

Navigation target:

`/projects/:id`

## Removed / Excluded Card Content

Project `status` / `state` must not be displayed as part of the Projects
catalogue card.

Sprint 06 must not reintroduce that previously removed UI concept.

------------------------------------------------------------------------

# 7. Project Card Design Intent

Project cards should remain reasonably compact.

They must not become unnecessarily large or dominate the page with
oversized content.

The goal is to allow multiple projects to be browsed comfortably while
preserving:

-   Readable titles.
-   Readable short descriptions.
-   Clear project type.
-   Useful imagery.
-   Clear navigation.

The exact card dimensions, radius, spacing, image ratio, typography, and
visual treatment are left to Codex/Figma.

The implementation must tolerate different title and description lengths
without creating a broken layout.

------------------------------------------------------------------------

# 8. Project Image and Placeholder Behavior

## Project With Image

When valid project image data exists:

-   Display the project image.
-   Preserve an appropriate aspect ratio.
-   Avoid unnecessary distortion.
-   Prevent broken-image presentation.

## Project Without Image

If the project has no valid image:

-   Do not leave the image area empty.
-   Do not display a broken image.
-   Display an approved project placeholder/visual fallback.

The placeholder should:

-   Feel intentional.
-   Fit the Portfolio visual language.
-   Preserve the card structure.
-   Remain replaceable.
-   Avoid fabricating client/project imagery.

The card must remain visually complete whether a real project image
exists or not.

------------------------------------------------------------------------

# 9. Project Card Interaction

Project cards should support a meaningful interactive treatment.

On pointer-capable devices, hover may trigger an appropriate visual
response such as:

-   Subtle image movement/scale.
-   Small card transform.
-   Reveal or movement of an arrow/action.
-   Border/background response.
-   Another restrained design-approved interaction.

The exact hover effect is left to Codex/Figma.

Requirements:

-   Interaction must remain subtle and professional.
-   Hover must not be required to understand the card.
-   Navigation must remain available without hover.
-   Keyboard users must receive an equivalent clear focus experience.
-   Touch/mobile users must be able to access Project Details normally.
-   Motion must respect reduced-motion preferences.

The card or its clearly defined action must navigate to:

`/projects/:id`

------------------------------------------------------------------------

# 10. Pagination

## Purpose

Keep the Projects catalogue scalable when the number of projects becomes
large.

## Fixed Logical Page Capacity

Sprint 06 uses:

**6 projects per logical page**

The logical page capacity remains 6 across supported screen sizes.

The responsive layout may change how those six cards are arranged, but
resizing the viewport must not unnecessarily change which six projects
belong to the current page.

## Pagination Visibility

If the current filtered result contains:

-   0 projects → no pagination.
-   1 project → no pagination.
-   2--6 projects → no pagination.
-   7+ projects → pagination appears.

Pagination must only appear when a second logical page actually exists.

## Examples

-   1 project → 1 page → pagination hidden.
-   6 projects → 1 page → pagination hidden.
-   7 projects → 2 pages → pagination visible.
-   12 projects → 2 pages → pagination visible.
-   13 projects → 3 pages → pagination visible.

## Pagination Behavior

Pagination must:

-   Clearly identify the current page.
-   Provide a clear way to navigate available pages.
-   Prevent invalid page states.
-   Avoid unexpected infinite wrapping.
-   Disable/unavailable boundary actions appropriately.
-   Be keyboard accessible.
-   Use appropriate accessibility semantics.
-   Be hidden when only one page exists.

If the approved shared Pagination component satisfies these
requirements, it should be reused rather than duplicated.

------------------------------------------------------------------------

# 11. Relationship Between Filtering and Pagination

Filtering and pagination must operate as one coherent system.

Required processing order:

1.  Read the complete projects dataset.
2.  Apply the selected project-type filter.
3.  Determine the filtered result count.
4.  Calculate pages using 6 projects per page.
5.  Normalize the current page if necessary.
6.  Display only the six-or-fewer projects belonging to the current
    page.

Changing a filter must reset the catalogue to the first valid page.

Pagination visibility must be based on the current filtered result
count, not the total unfiltered project count.

Example:

-   Total projects: 20.
-   Filter `Mobile Application`: 4 matches.
-   Result: show all 4 matching projects and hide pagination.

------------------------------------------------------------------------

# 12. Responsive Catalogue Layout

The logical pagination capacity remains 6 projects per page.

Only the card arrangement changes responsively.

## Large Screens

A suitable large-screen layout may present:

`[ Project ] [ Project ] [ Project ]`\
`[ Project ] [ Project ] [ Project ]`

This represents 6 projects on the current logical page.

## Smaller Screens

A suitable smaller layout may present two cards per row:

`[ Project ] [ Project ]`\
`[ Project ] [ Project ]`\
`[ Project ] [ Project ]`

Then pagination appears below the cards when multiple logical pages
exist.

This two-card layout is a preferred target where card readability
remains comfortable.

## Very Narrow Screens

The design must not force two cards beside each other if doing so
causes:

-   Unreadable text.
-   Excessively narrow cards.
-   Broken images.
-   Cramped controls.
-   Horizontal overflow.

At very narrow widths, the layout may adapt to one card per row while
still keeping **6 projects on the same logical pagination page**:

`[ Project ]`\
`[ Project ]`\
`[ Project ]`\
`[ Project ]`\
`[ Project ]`\
`[ Project ]`

The breakpoint and exact responsive behavior should follow the approved
responsive system.

The priority is usability, not forcing a specific column count at every
width.

------------------------------------------------------------------------

# 13. Catalogue States

The Projects page must explicitly support all important data states.

## Zero Projects

If no projects exist:

-   Do not render a broken or empty card grid.
-   Show an appropriate empty state.
-   Do not show pagination.
-   Do not create meaningless filter interactions.
-   Keep the rest of the page functional.

## One Project

If exactly one project exists:

-   Display it intentionally.
-   Do not duplicate it to fill the layout.
-   Do not show pagination.

## Few Projects

For 2--6 projects:

-   Display all available projects.
-   Preserve intentional responsive alignment.
-   Do not show pagination.

## Many Projects

For 7+ projects:

-   Display only the current six-or-fewer project records.
-   Show pagination.
-   Preserve the active filter.

## No Filter Matches

If projects exist but the active filter has zero matching results:

-   Show a clear no-results state.
-   Do not show pagination.
-   Provide a clear way to return to `All` projects.

------------------------------------------------------------------------

# 14. CTA

## Purpose

End the Projects page with an appropriate next step after visitors have
explored SAINTRA's work.

The CTA should communicate an intent appropriate to a project/portfolio
context, such as:

-   Have a project in mind?
-   Saw something similar to what you need?
-   Tell SAINTRA about your idea and requirements.

These are message directions, not mandatory final copy.

## Navigation

The primary CTA must navigate to:

`/contact`

## Design Freedom

Codex/Figma may determine:

-   Final heading.
-   Supporting copy.
-   Button wording.
-   Composition.
-   Background treatment.
-   Decorative treatment.

The CTA does not need to duplicate the Home, About, or Services CTA
exactly.

------------------------------------------------------------------------

# 15. Responsive Requirements

Verify the complete Projects page around:

-   1440px
-   1024px
-   768px
-   390px
-   320px

These are verification references rather than separate fixed designs.

The page must:

-   Avoid horizontal scrolling.
-   Avoid clipped project content.
-   Keep filter controls usable.
-   Keep project cards readable.
-   Keep project type/category visible.
-   Keep project images/placeholders proportional.
-   Keep Project Details navigation obvious.
-   Keep pagination usable.
-   Adapt the card grid without changing the logical 6-project page
    capacity.
-   Avoid forcing an unusable two-column layout on extremely narrow
    screens.
-   Keep CTA content usable.

------------------------------------------------------------------------

# 16. Motion

Project cards may include approved hover/focus motion.

Other page or section motion may be proposed during design.

Motion must remain:

-   Purposeful.
-   Restrained.
-   Performant.
-   Consistent with the Portfolio motion system.
-   Compatible with `prefers-reduced-motion`.

Essential content or navigation must never depend on animation.

Where practical, prefer performant animation properties such as
`transform` and `opacity`.

------------------------------------------------------------------------

# 17. Accessibility

Requirements include:

-   One clear page-level H1.
-   Logical heading hierarchy.
-   Semantic catalogue structure.
-   Accessible filter controls.
-   Clear active-filter state.
-   Keyboard-accessible project navigation.
-   Keyboard-accessible pagination.
-   Clear current-page semantics.
-   Visible focus states.
-   Appropriate interactive target sizes.
-   Readable contrast.
-   Meaningful image alternative text where appropriate.
-   Decorative placeholders treated appropriately.
-   Hover-only information must be avoided.
-   Reduced-motion support.
-   Empty and no-results states must remain understandable.

------------------------------------------------------------------------

# 18. Data Flexibility

The implementation must not assume:

-   Exactly 6 total projects.
-   The current project titles will remain unchanged.
-   The current categories are permanent.
-   Every project has an image.
-   Every project description has the same length.
-   Every project has the same type.
-   The current project ordering is permanent.

The project type/category must be represented explicitly in the approved
project data shape rather than guessed from the visible title.

Stable IDs must be used for Project Details routing.

Changing project records in the data layer must not require duplicating
or rewriting the page template.

------------------------------------------------------------------------

# 19. Assets and Placeholder Strategy

Project imagery must follow the project's approved asset strategy.

Real project images, when available, must remain replaceable.

Missing images must use an approved placeholder rather than:

-   Empty containers.
-   Broken URLs.
-   Fabricated client imagery.
-   Unapproved external stock imagery.

External image sources or new asset dependencies require the normal
proposal and approval process.

------------------------------------------------------------------------

# 20. Dependencies

Use the existing approved project stack where practical.

Filtering, pagination, placeholder handling, and simple hover
interactions should not require a new dependency by default.

If a new dependency is considered necessary, it must first be proposed
with:

-   Reason.
-   Purpose.
-   Alternatives.
-   Bundle/performance impact.
-   Maintenance impact.

Implementation waits for explicit approval.

------------------------------------------------------------------------

# 21. Component Strategy

Reuse approved shared components where appropriate.

Relevant existing concepts may include:

-   ProjectCard.
-   Pagination.
-   Icons.
-   Shared buttons/actions.
-   Section-heading patterns.

Existing components may be extended only within the approved proposal
and without creating unrelated regressions.

ProjectCard changes must consider every location where the shared card
is already used, including any related-project usage.

New components may be introduced when they provide clear structural,
behavioral, or reusable value.

Do not globally redesign unrelated shared components as a side effect of
Sprint 06.

------------------------------------------------------------------------

# 22. Out of Scope

Sprint 06 does NOT include:

-   Project Details redesign/implementation beyond navigation to it.
-   Project image gallery/slider.
-   Project logo implementation.
-   Project lightbox.
-   Service Details redesign.
-   Services catalogue redesign.
-   Home page redesign.
-   About page redesign.
-   Contact page redesign.
-   Final Navbar/Footer redesign.
-   Full-site internationalization.
-   Dashboard implementation.
-   Backend implementation.
-   API integration.
-   Database implementation.
-   CMS integration.
-   Project status/state UI.
-   Search unless separately approved.
-   Sorting unless separately approved.
-   Final production branding.
-   Unapproved global redesigns.

Project Details-specific visual/media functionality belongs to Sprint
07.

------------------------------------------------------------------------

# 23. Implementation Workflow

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

------------------------------------------------------------------------

# 24. Pre-Implementation Proposal

Before implementation, inspect the relevant project files and report:

-   Current `/projects` implementation.
-   Current project data shape.
-   Current project type/category data.
-   Current project image fields.
-   Current ProjectCard behavior.
-   Current Pagination behavior.
-   Existing filter behavior, if any.
-   Existing placeholder/assets strategy.
-   Current Project Details route behavior.
-   What needs to change and why.
-   Exact files expected to be modified.
-   Exact files expected to be created.
-   Data-shape changes required.
-   Shared components affected.
-   Dependencies, if any.
-   Potential impact outside `/projects`.
-   Verification plan.

Stop and wait for explicit user approval before meaningful source edits.

Any newly discovered scope expansion requires a new proposal.

------------------------------------------------------------------------

# 25. Visual Review Gate

Build success alone does not close Sprint 06.

User visual review must include:

-   Projects Hero.
-   Filter placement before project cards.
-   `All` filter.
-   Individual project-type filters.
-   Project card sizing.
-   Project image behavior.
-   Missing-image placeholder.
-   Visible project type/category.
-   Short description presentation.
-   Hover/focus interaction.
-   Project Details navigation.
-   Zero-project state.
-   One-project state.
-   2--6 project state.
-   7+ project state.
-   Pagination.
-   No-filter-results state.
-   Large-screen catalogue layout.
-   Two-card smaller-screen layout where appropriate.
-   Very narrow-screen fallback.
-   CTA.
-   Overall page hierarchy.

Adjustments may be requested before Sprint closure.

------------------------------------------------------------------------

# 26. Technical Verification

Verify at minimum:

-   `/projects` loads correctly.
-   Direct navigation to `/projects` works.
-   Hero renders correctly.
-   Project records are consumed from the approved data layer.
-   Project titles render correctly.
-   Short descriptions render correctly.
-   Project type/category renders visibly on each card.
-   Project status/state is not displayed.
-   Valid project images render correctly.
-   Missing project images use the approved placeholder.
-   No broken image state appears.
-   Every Project Card navigates to the correct `/projects/:id`.
-   `All` filter works.
-   Available project-type filters return correct projects.
-   Filtering occurs before pagination.
-   Changing filters resets to the first valid page.
-   No-results filter state works.
-   Pagination is hidden for 0--6 filtered projects.
-   Pagination appears for 7+ filtered projects.
-   Pagination uses 6 projects per logical page.
-   Current-page state is correct.
-   Previous/Next boundaries behave correctly where those controls
    exist.
-   Responsive layout changes do not alter the logical 6-project page
    capacity.
-   Two-card smaller-screen layout works where space permits.
-   Very narrow screens adapt safely if two cards become unusable.
-   Project card hover interaction works on pointer devices.
-   Keyboard/focus interaction remains equivalent.
-   Reduced-motion behavior works.
-   CTA navigates to `/contact`.
-   No horizontal overflow at required widths.
-   No new blocking runtime/console errors.
-   Existing routes outside Sprint remain functional.
-   Required build and diff checks are executed.

------------------------------------------------------------------------

# 27. Sprint Test Documentation

Only after implementation and actual verification, create the Sprint 06
test documentation using the approved project documentation structure.

Record:

-   Tested scope.
-   Acceptance criteria.
-   Test cases.
-   Expected results.
-   Actual results.
-   PASS / FAIL / BLOCKED status.
-   Filter tests.
-   Pagination tests.
-   0/1/few/many project-state tests.
-   Image-present tests.
-   Missing-image placeholder tests.
-   Project-type visibility tests.
-   Project navigation tests.
-   Hover/focus tests.
-   Responsive layout tests.
-   Accessibility checks.
-   Reduced-motion checks.
-   Regression checks.
-   Known limitations.

Never report a test as PASS if it was not actually executed or directly
verified.

------------------------------------------------------------------------

# 28. Sprint Report

After implementation, testing, and visual approval, create the Sprint 06
completion report.

Record:

-   Sprint goal.
-   Implemented requirements.
-   Final Projects page structure.
-   Final filtering behavior.
-   Final Project Card content.
-   Final image/placeholder behavior.
-   Final pagination behavior.
-   Final responsive catalogue behavior.
-   Files added.
-   Files modified.
-   Data-shape changes.
-   Dependencies added/removed.
-   Verification performed.
-   Build/test results.
-   Visual-review status.
-   Approved deviations.
-   Known issues.
-   Deferred work.
-   Final Sprint status.

The report must describe the actual implementation rather than planned
work.

------------------------------------------------------------------------

# 29. Git Gate

Before Sprint closure:

1.  Review implementation.
2.  Complete technical verification.
3.  Complete user visual review.
4.  Apply approved adjustments.
5.  Complete final verification.
6.  Create required TEST and REPORT documentation.
7.  Review Git status and diff.
8.  Confirm no unrelated work is included.
9.  Obtain user approval for Git actions.
10. Commit/push only after approval.

------------------------------------------------------------------------

# 30. Acceptance Criteria

Sprint 06 is acceptable when:

-   `/projects` provides a complete Projects catalogue experience for
    SAINTRA.
-   Projects Hero is complete.
-   Filter controls appear before the project cards.
-   Filtering is available and usable across supported screen sizes.
-   Project types/categories are represented explicitly in data.
-   `All` restores the complete catalogue.
-   Project type/category is visibly displayed on every applicable
    Project Card.
-   Project status/state is not displayed.
-   Each Project Card includes image/placeholder, title, short
    description, project type, and clear Project Details navigation.
-   Missing project images never leave an empty or broken visual area.
-   Cards remain reasonably compact.
-   Cards provide an approved hover/focus interaction without depending
    on hover for navigation.
-   Projects use 6 records per logical pagination page.
-   Pagination is hidden for 0--6 filtered results.
-   Pagination appears only when 7+ filtered results create another
    page.
-   Filtering occurs before pagination.
-   Pagination recalculates correctly after filtering.
-   Large layouts can present the six projects appropriately.
-   Smaller layouts can present two cards per row where readable.
-   Very narrow layouts may fall back to one card per row without
    changing the logical 6-project page capacity.
-   Zero, one, few, many, and no-filter-match states are handled safely.
-   Every project navigates to `/projects/:id`.
-   CTA is appropriate to the Projects context and navigates to
    `/contact`.
-   Page is responsive without horizontal overflow.
-   Accessibility and reduced-motion requirements are preserved.
-   No unsupported project/company claims are invented.
-   No out-of-scope page is redesigned.
-   Required technical verification succeeds or limitations are
    documented.
-   User visual approval is received.

------------------------------------------------------------------------

# 31. Definition of Done

Sprint 06 is DONE only when:

1.  All approved Sprint 06 requirements are implemented.
2.  Projects Hero is complete.
3.  Projects filtering is complete.
4.  Project Card content and interaction are complete.
5.  Project image/placeholder behavior is complete.
6.  Project type/category presentation is complete.
7.  Projects pagination is complete.
8.  Zero/one/few/many/no-results states are handled.
9.  Project Details navigation is complete.
10. CTA is complete.
11. Responsive behavior is verified.
12. Accessibility and reduced-motion behavior are verified.
13. Required technical verification is complete.
14. No known blocking regression remains.
15. User visual review is complete and approved.
16. Sprint 06 test documentation records actual results.
17. Sprint 06 completion report records actual implementation.
18. No future Sprint work is mixed into Sprint 06.
19. Git changes are reviewed.
20. Commit/push occurs only after explicit user approval.

If any required item remains incomplete, Sprint 06 remains IN PROGRESS.
