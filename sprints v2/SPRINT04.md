# SPRINT 04 --- Services Page Complete Implementation

> **Current-scope note:** `../SPRINT_PLAN.md` is the one-run contract. Build from local `src/data` and expose all services; consult this file only for unresolved catalogue/filter/pagination details. Its separate approval and report gates are superseded.

## 1. Sprint Goal

Design and implement the complete public Services catalogue page for
SAINTRA.

Route:

`/services`

The page must introduce SAINTRA's services, allow visitors to browse and
filter the available services, support a scalable paginated catalogue,
provide access to each service's details page, and end with a clear
contact CTA.

This Sprint defines the required structure, behavior, data expectations,
responsive behavior, accessibility, and verification criteria.

The exact visual design is intentionally not prescribed. Codex/Figma may
determine the final visual composition, styling, spacing, decorative
treatment, and animation language as long as all functional and UX
requirements below are preserved.

------------------------------------------------------------------------

## 2. Required Page Structure

The Services page must contain:

1.  Services Hero
2.  Services Filter
3.  Services List / Catalogue
4.  Pagination when required
5.  CTA

High-level flow:

Services Hero\
↓\
Services Filter\
↓\
Services Catalogue\
↓\
Pagination when required\
↓\
CTA

------------------------------------------------------------------------

## 3. Data Source

For the current Portfolio phase, services are provided through the
project's local data layer under `src/data`.

The page must consume service data rather than duplicating individual
service records inside the page template.

The implementation must not assume a permanent number of services.

It must support:

-   Zero services.
-   One service.
-   A few services.
-   Exactly one page of services.
-   More than one page of services.
-   A significantly larger catalogue in the future.

API, backend, Dashboard, CMS, database, or another future production
data source is outside the scope of this Sprint.

------------------------------------------------------------------------

# 4. Services Hero

## Purpose

The Services Hero introduces the Services page and communicates that
SAINTRA provides software, design, and digital services.

## Required Content

The Hero must support:

-   Services-related eyebrow/label.
-   Main page heading.
-   Supporting description.

## Design Freedom

The exact layout, background, decorative elements, typography
composition, visual treatment, and optional motion are left to
Codex/Figma.

The Hero should be visually connected to the Portfolio identity without
needing to duplicate the Home Hero or About Hero.

## Requirements

-   One clear page-level H1.
-   Strong readable hierarchy.
-   Responsive behavior across supported widths.
-   Decorative visuals must not interfere with content.
-   Essential information must not depend on animation.
-   No horizontal overflow.

------------------------------------------------------------------------

# 5. Services Filter

## Purpose

Visitors must be able to narrow the catalogue and quickly find the type
of service they are interested in.

Filtering is required on all supported screen sizes.

## Service Categories

The data model must support an explicit category or equivalent
filterable field.

Current or possible service categories/types may include examples such
as:

-   Flutter / Mobile Development
-   Web Development
-   AI
-   UI/UX
-   Graphic Design
-   Desktop Applications

These examples represent current or possible content and must not be
treated as a permanently fixed list.

Filter options should be derived from the approved service
data/categories where practical rather than being unnecessarily
duplicated in the page template.

An `All` option must allow the visitor to return to the complete
catalogue.

## Filter Behavior

Filtering must occur before pagination.

Conceptually:

`All Services → Selected Filter → Filtered Results → Pagination → Visible Services`

When a visitor changes the active filter:

-   The catalogue updates to show only matching services.
-   Pagination is recalculated from the filtered result set.
-   The catalogue returns to the first valid page.
-   Pagination disappears when the filtered result fits within a single
    page.
-   A valid empty-result state is shown when no service matches the
    selected filter.

Filtering must work consistently on desktop, tablet, and mobile.

## Design Freedom

The filter may be presented using an appropriate responsive UI such as
filter controls, chips, tabs, select/dropdown behavior, or another
accessible solution.

The exact visual control is left to the design, provided the active
filter is clear and the control remains usable on all supported widths.

------------------------------------------------------------------------

# 6. Services Catalogue

## Purpose

Display the available SAINTRA services in a scalable, readable
catalogue.

Each service item must provide enough information for the visitor to
understand the service at a glance and continue to its dedicated details
page.

## Required Service Content

Each service item must support:

-   Service name.
-   Short service description.
-   Relevant service icon.
-   Clear action or interactive affordance leading to the service
    details page.

Each service must navigate using its stable identifier to:

`/services/:id`

The exact CTA wording may be determined during design, for example a
details action or another clear equivalent.

## Service Icon

Each service should support an icon that meaningfully relates to that
service.

Icons should follow a coherent professional visual language rather than
using unrelated icon styles.

The icon may have subtle motion so it does not feel completely static.

The motion may be expressed through an appropriate treatment such as:

-   Gentle ambient movement.
-   Small transform.
-   Subtle rotation/tilt where appropriate.
-   Hover/focus response.
-   Another restrained animation appropriate to the selected icon.

The exact animation is a design decision.

Icon motion must:

-   Remain subtle and professional.
-   Not distract from the service name or description.
-   Avoid aggressive or excessive continuous animation.
-   Remain performant.
-   Respect `prefers-reduced-motion`.
-   Never be required to understand or access the service.

A new icon or animation dependency must not be introduced without the
normal proposal and approval process.

------------------------------------------------------------------------

# 7. Pagination

## Purpose

The Services page must remain usable when the number of services becomes
large.

Pagination is required when the number of results exceeds the configured
page capacity.

## Desktop / Larger Screens

On sufficiently large screens:

-   Display up to 6 services per page.
-   If the current filtered result contains 1--6 services, pagination
    must not appear.
-   If the current filtered result contains more than 6 services,
    pagination must appear.

Examples:

-   0 services → no pagination.
-   1 service → no pagination.
-   5 services → no pagination.
-   6 services → no pagination.
-   7 services → pagination appears.
-   10 services → pagination appears.
-   20 services → pagination appears.

## Smaller Screens

The number of visible services per page may reduce responsively to
preserve a comfortable mobile browsing experience.

For narrow/mobile layouts, the target behavior is:

-   Up to 3 services per page.
-   Services may appear vertically one below another.
-   Pagination appears when the filtered result exceeds the mobile page
    capacity.

This means a catalogue with, for example, 5 services may require
pagination on a narrow mobile layout even though the same result fits on
one desktop page.

The exact breakpoint at which the page capacity changes should follow
the approved responsive system rather than introducing an arbitrary
isolated breakpoint.

## Responsive Pagination State

Because page capacity can change with the responsive layout, the
implementation must keep pagination valid when the viewport changes.

If the current page would no longer exist after a page-size change, the
page state must be normalized to a valid page rather than showing an
empty or broken catalogue.

## Pagination Controls

Pagination must provide a clear way to move through available result
pages.

The implementation may use:

-   Previous / Next.
-   Page numbers.
-   A combination of both.

The exact visual treatment is left to the design.

Requirements:

-   Current page must be identifiable.
-   Unavailable Previous/Next actions must be disabled or unavailable
    appropriately.
-   Pagination must not wrap unexpectedly from the last page to the
    first.
-   Pagination must be keyboard accessible.
-   Appropriate accessibility semantics must be used.
-   Pagination must not be rendered when only one page exists.

If an approved shared Pagination component already exists and satisfies
these requirements, it should be reused rather than duplicated.

------------------------------------------------------------------------

# 8. Relationship Between Filtering and Pagination

Filtering and pagination must work as one coherent system.

The required order is:

1.  Read the complete services dataset.
2.  Apply the selected filter.
3.  Determine the filtered result count.
4.  Determine the responsive page capacity.
5.  Calculate the valid number of pages.
6.  Display only the services belonging to the current page.

Changing a filter must reset navigation to the first valid page.

Changing responsive page capacity must never leave the visitor on an
invalid page.

Pagination visibility is based on the currently filtered results, not
the total unfiltered service count.

------------------------------------------------------------------------

# 9. Catalogue States

The page must explicitly handle all important data states.

## Zero Services

If no services exist at all:

-   Do not render a broken or empty grid.
-   Show an appropriate empty state.
-   Do not show pagination.
-   Filtering controls that have no meaningful options must not create
    confusing empty interactions.
-   The page CTA may still provide a path to contact SAINTRA.

## One Service

If exactly one service exists:

-   Display it cleanly.
-   Do not artificially duplicate content to fill the layout.
-   Do not show pagination.

## Few Services

For a result set that fits within the current responsive page capacity:

-   Display all matching services.
-   Do not show pagination.

## Many Services

When the result exceeds the current responsive page capacity:

-   Show the correct page subset.
-   Show pagination.
-   Preserve filtering behavior.

## No Filter Matches

If services exist but the active filter returns no results:

-   Show a clear no-results state.
-   Do not show pagination for that result.
-   Provide a clear way to return to `All` services.

------------------------------------------------------------------------

# 10. Service Item Interaction

Each service item must make the path to Service Details clear.

Navigation target:

`/services/:id`

The implementation must not require the visitor to guess which element
is interactive.

Hover effects may enhance pointer interaction, but access to the service
must not depend on hover.

Keyboard users must be able to reach and activate the details
navigation.

The service details content itself belongs to Sprint 05 and must not be
duplicated into the catalogue.

------------------------------------------------------------------------

# 11. CTA

## Purpose

The Services page must end with a CTA that helps visitors who either
found the right service or are still unsure which service best fits
their needs.

## Message Intent

The CTA should communicate an idea such as:

-   Found the service you need? Contact us.
-   Not sure which service fits your requirements? Tell us what you need
    and let SAINTRA help identify the appropriate solution.

This is message intent, not mandatory final copy.

Codex/Figma may propose polished final wording consistent with the
Portfolio voice.

## Navigation

The primary CTA must lead to:

`/contact`

## Design Freedom

The exact heading, supporting copy, button wording, composition,
background, and visual treatment are left to the design.

The CTA should fit the Services context and does not need to duplicate
the Home or About CTA exactly.

------------------------------------------------------------------------

# 12. Responsive Requirements

The complete Services page must be designed and verified for desktop,
tablet, and mobile experiences.

At minimum, review around:

-   1440px
-   1024px
-   768px
-   390px
-   320px

These widths are verification references rather than separate fixed
designs.

The page must:

-   Avoid horizontal scrolling.
-   Avoid clipped text and controls.
-   Preserve readable service names and descriptions.
-   Adapt catalogue layout naturally.
-   Keep filters accessible and usable.
-   Keep pagination usable.
-   Preserve clear service-details navigation.
-   Avoid forcing desktop card dimensions onto mobile.
-   Prevent icons or decorative motion from interfering with content.

On narrow/mobile layouts, services may be presented one below another
with up to 3 services per page.

------------------------------------------------------------------------

# 13. Motion

Required/approved motion scope includes the ability to animate service
icons subtly.

Other page or section motion may be proposed during design.

Motion must remain:

-   Purposeful.
-   Restrained.
-   Performant.
-   Consistent with the Portfolio motion system.
-   Safe when content changes.
-   Compatible with reduced-motion preferences.

Essential content or navigation must never depend on animation.

------------------------------------------------------------------------

# 14. Accessibility

Requirements include:

-   One clear page-level H1.
-   Logical heading hierarchy.
-   Semantic catalogue structure.
-   Accessible filter controls.
-   Clear active-filter state.
-   Keyboard-accessible service navigation.
-   Keyboard-accessible pagination.
-   Clear current-page semantics.
-   Visible focus states.
-   Appropriate interactive target sizes.
-   Readable contrast.
-   Icons must not replace required textual meaning without an
    accessible equivalent.
-   Decorative icon animation must not create unnecessary
    assistive-technology noise.
-   Reduced-motion support.
-   Empty and no-results states must remain understandable.

------------------------------------------------------------------------

# 15. Data Flexibility

The implementation must not assume:

-   Exactly 6 total services.
-   The current service names will remain unchanged.
-   The current categories are permanent.
-   Every service description has the same length.
-   Every service uses the same icon.
-   The current ordering is permanent.

The catalogue must remain data-driven and handle reasonable changes
safely.

Stable IDs must be used for service-detail routing.

Filterable categories must be represented explicitly in the approved
data shape rather than guessed from visible service names.

------------------------------------------------------------------------

# 16. Assets and Icons

Service icons may use the project's approved icon strategy.

Icons should:

-   Be relevant to their services.
-   Use a coherent style.
-   Remain replaceable.
-   Scale correctly across responsive layouts.
-   Remain clear with and without motion.

Do not introduce external icon CDNs, large icon packages, or other asset
dependencies without proposal and approval.

No fake client imagery or unsupported company assets should be
introduced.

------------------------------------------------------------------------

# 17. Dependencies

Use the existing approved project stack where practical.

Filtering, pagination, and simple icon motion should not require a new
dependency by default.

If a dependency is considered necessary, it must first be proposed with:

-   Reason.
-   Purpose.
-   Alternatives.
-   Bundle/performance impact.
-   Maintenance impact.

Implementation waits for explicit approval.

------------------------------------------------------------------------

# 18. Component Strategy

Reuse existing shared components where they satisfy the requirements.

Relevant existing concepts may include shared service-card and
pagination components.

They may be extended only within the approved proposal and without
causing unrelated regressions.

New components may be introduced when they provide clear structural,
behavioral, or reusable value.

Do not globally redesign unrelated shared components as a side effect of
Sprint 04.

------------------------------------------------------------------------

# 19. Out of Scope

Sprint 04 does NOT include:

-   Service Details page redesign/implementation beyond navigation to
    it.
-   Home page redesign.
-   About page redesign.
-   Projects pages redesign.
-   Contact page redesign.
-   Final Navbar/Footer redesign.
-   Full-site internationalization.
-   Dashboard implementation.
-   Backend implementation.
-   API integration.
-   Database implementation.
-   CMS integration.
-   Final production branding.
-   Final logo creation.
-   Search unless separately approved.
-   Sorting unless separately approved.
-   Unapproved global redesigns.

------------------------------------------------------------------------

# 20. Implementation Workflow

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

# 21. Pre-Implementation Proposal

Before implementation, inspect the relevant project files and report:

-   Current `/services` state.
-   Current services data shape.
-   Current service routing.
-   Existing ServiceCard behavior.
-   Existing Pagination behavior.
-   Existing icon strategy.
-   What needs to change and why.
-   Exact files expected to be modified.
-   Exact files expected to be created.
-   Data changes required for filtering/icons.
-   Shared components affected.
-   Dependencies, if any.
-   Potential impact outside `/services`.
-   Verification plan.

Stop and wait for explicit user approval before meaningful source edits.

Any newly discovered scope expansion requires a new proposal.

------------------------------------------------------------------------

# 22. Visual Review Gate

Build success alone does not close Sprint 04.

User visual review must include:

-   Services Hero.
-   Filter UI on desktop.
-   Filter UI on mobile.
-   Service catalogue.
-   Service icon treatment/motion.
-   Service details action.
-   1-service state.
-   Up-to-6 desktop state.
-   More-than-6 desktop state.
-   Pagination.
-   Mobile reduced page capacity.
-   Empty services state.
-   No-filter-results state.
-   CTA.
-   Overall desktop/tablet/mobile hierarchy.

Adjustments may be requested before Sprint closure.

------------------------------------------------------------------------

# 23. Technical Verification

Verify at minimum:

-   `/services` loads correctly.
-   Direct navigation to `/services` works.
-   Hero renders correctly.
-   All service records are available to the catalogue before
    filtering/pagination.
-   Service names/descriptions/icons render from data.
-   Each service navigates to the correct `/services/:id`.
-   `All` filter works.
-   Each available category filter returns the correct services.
-   Changing filter resets to a valid first page.
-   No-results filter state works.
-   Pagination is hidden when the result fits within one page.
-   Desktop/larger layout displays up to 6 services per page.
-   More than 6 desktop results create pagination.
-   Narrow/mobile layout supports up to 3 services per page.
-   Responsive page-size changes do not create an invalid empty page.
-   Current-page state is correct.
-   Previous/Next boundary behavior is correct where those controls
    exist.
-   Zero services state works.
-   One service state works.
-   Few services state works.
-   Many services state works.
-   Icon motion works as approved.
-   Reduced-motion behavior works.
-   CTA navigates to `/contact`.
-   Keyboard navigation works.
-   Focus states remain visible.
-   No horizontal overflow at required widths.
-   No new blocking runtime/console errors.
-   Existing routes outside Sprint remain functional.
-   Required build and diff checks are executed.

------------------------------------------------------------------------

# 24. Sprint Test Documentation

Only after implementation and actual verification, create the Sprint 04
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
-   Responsive page-capacity tests.
-   Zero/one/few/many data-state tests.
-   Navigation tests.
-   Icon motion/reduced-motion tests.
-   Accessibility checks.
-   Regression checks.
-   Known limitations.

Never report a test as PASS if it was not actually executed or directly
verified.

------------------------------------------------------------------------

# 25. Sprint Report

After implementation, testing, and visual approval, create the Sprint 04
completion report.

Record:

-   Sprint goal.
-   Implemented requirements.
-   Final Services page structure.
-   Final filtering behavior.
-   Final pagination behavior.
-   Final responsive page capacities.
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

The report must describe the actual implementation.

------------------------------------------------------------------------

# 26. Git Gate

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

# 27. Acceptance Criteria

Sprint 04 is acceptable when:

-   `/services` provides a complete Services catalogue experience for
    SAINTRA.
-   Services Hero is complete.
-   Filtering is available and usable on all supported screen sizes.
-   Filter categories are data-driven/explicit rather than inferred from
    service names.
-   `All` restores the complete catalogue.
-   Services Catalogue supports zero, one, few, and many services.
-   Every service displays its name, short description, and relevant
    icon.
-   Every service provides a clear path to `/services/:id`.
-   Service icons have an approved subtle motion treatment without
    harming usability.
-   Desktop/larger layouts display up to 6 services per page.
-   Pagination is hidden for 1--6 desktop results and appears when
    desktop results exceed 6.
-   Narrow/mobile layouts may display up to 3 services per page and
    paginate when that capacity is exceeded.
-   Filtering occurs before pagination.
-   Pagination recalculates correctly after filtering.
-   No-results state is handled.
-   Responsive page-size changes never leave an invalid page.
-   CTA communicates both "found the right service" and "not sure which
    service you need" intent and leads to `/contact`.
-   Page is responsive without horizontal overflow.
-   Accessibility and reduced-motion requirements are preserved.
-   No unsupported service/company claims are invented.
-   No out-of-scope page is redesigned.
-   Required technical verification succeeds or limitations are
    documented.
-   User visual approval is received.

------------------------------------------------------------------------

# 28. Definition of Done

Sprint 04 is DONE only when:

1.  All approved Sprint 04 requirements are implemented.
2.  Services Hero is complete.
3.  Services filtering is complete.
4.  Services catalogue is complete.
5.  Responsive pagination is complete.
6.  Zero/one/few/many service states are handled.
7.  Service-details navigation is complete.
8.  Approved icon motion is complete.
9.  CTA is complete.
10. Responsive behavior is verified.
11. Accessibility and reduced-motion behavior are verified.
12. Required technical verification is complete.
13. No known blocking regression remains.
14. User visual review is complete and approved.
15. Sprint 04 test documentation records actual results.
16. Sprint 04 completion report records actual implementation.
17. No future Sprint work is mixed into Sprint 04.
18. Git changes are reviewed.
19. Commit/push occurs only after explicit user approval.

If any required item remains incomplete, Sprint 04 remains IN PROGRESS.
