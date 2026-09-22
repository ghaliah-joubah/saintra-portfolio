# SPRINT 07 --- Project Details Complete Redesign & Implementation

> **Current-scope note:** `../SPRINT_PLAN.md` also supports deadline, completion date, and team when verified local project data exists. Never show public status or start date. Related services belong in information, not by Visit Project. Separate approval/report gates below are superseded.

## 1. Sprint Goal

Design and implement the complete public Project Details experience for
SAINTRA.

Route:

`/projects/:id`

The page must present one selected project in depth, explain the project
clearly, provide an interactive project-image gallery when images exist,
present structured project information, expose the services associated
with the project as navigable links, optionally provide access to the
live project when a valid URL exists, and end with a contextual contact
CTA.

This Sprint defines the required structure, behavior, data expectations,
optional/missing-data handling, responsive behavior, accessibility
requirements, motion, verification criteria, and workflow gates.

The exact visual design is intentionally not prescribed. Codex/Figma may
determine the final composition, styling, spacing, decorative treatment,
gallery proportions, information presentation, and animation language as
long as all functional and UX requirements below are preserved.

------------------------------------------------------------------------

## 2. Required Page Structure

The Project Details page must contain:

1.  Project Hero / Introduction
2.  Project Overview
3.  Project Gallery --- conditional
4.  Project Information
5.  CTA

High-level flow:

Project Hero / Introduction\
↓\
Project Overview\
↓\
Project Gallery --- only when project images exist\
↓\
Project Information\
↓\
CTA

Related services are intentionally integrated into Project Information
rather than implemented as a separate carousel, pagination system, or
standalone catalogue section.

------------------------------------------------------------------------

## 3. Data Source

For the current Portfolio phase, project and service information is
provided through the project's local data layer under `src/data`.

The page must resolve the selected project using its route identifier
rather than duplicating project records inside the page template.

The implementation must remain data-driven and must not assume:

-   A specific project ID.
-   A fixed project description length.
-   That every project has a logo.
-   That every project has gallery images.
-   A fixed number of project images.
-   A fixed number of technologies.
-   A fixed number of platforms.
-   That every project has related services.
-   A fixed number of related services.
-   That every project has a public/live website URL.

API, backend, Dashboard, CMS, database, or another future production
data source is outside the scope of this Sprint.

------------------------------------------------------------------------

# 4. Project Resolution and Invalid Project State

The route parameter in:

`/projects/:id`

must resolve the corresponding project using its stable identifier.

If a valid project exists, render the complete Project Details
experience.

If no project matches the requested identifier:

-   Do not render a broken page.
-   Do not display stale data from another project.
-   Present an appropriate not-found/invalid-project state.
-   Provide a useful navigation path back to the Projects catalogue or
    another appropriate approved destination.

The exact visual treatment of the invalid-project state is left to
Codex/Figma.

------------------------------------------------------------------------

# 5. Project Hero / Introduction

## Purpose

Introduce the selected project immediately and establish its identity.

## Required Content

The opening section must support:

-   Project name.
-   Introductory project copy/description.
-   Optional project logo.

## Project Logo

The project logo is optional.

If valid logo data exists:

-   Display the logo appropriately.
-   Keep it proportional and responsive.
-   Use appropriate alternative text where the logo is informative.

If no project logo exists:

-   Do not display a fake logo.
-   Do not force a placeholder logo.
-   Do not leave an empty logo container.
-   Allow the Hero composition to adapt naturally.

## Main Image Decision

Sprint 07 does not require a separate duplicated `mainImage` field
solely for the Project Details Hero.

Project visual imagery should be handled through the project's
image/gallery data.

This avoids unnecessarily duplicating the same project visual across
separate data fields.

The Project Card image/thumbnail used by the Projects catalogue may
continue to follow its own approved thumbnail/placeholder behavior.

## Design Freedom

Codex/Figma may determine:

-   Hero composition.
-   Logo placement.
-   Text hierarchy.
-   Background treatment.
-   Decorative elements.
-   Appropriate motion.

The Hero must remain complete whether the optional logo exists or not.

------------------------------------------------------------------------

# 6. Project Overview

## Purpose

Explain the selected project in greater depth than the short description
shown on the Projects catalogue card.

## Content

The section should support:

-   Section heading/label where appropriate.
-   One or more descriptive paragraphs.
-   Additional approved explanatory project content where present in the
    data.

## Requirements

-   Content must remain readable.
-   Layout must tolerate varying text lengths.
-   The section must not depend on a fixed number of paragraphs.
-   Do not invent unsupported client names, results, metrics,
    achievements, awards, business outcomes, or technologies.
-   Exact editorial presentation is left to Codex/Figma.

## Excluded Information

Do not reintroduce:

-   Project State / Status.
-   Project Start Date.

These fields are not part of the approved Project Details UI.

------------------------------------------------------------------------

# 7. Project Gallery

## Purpose

Provide an interactive visual presentation of the selected project's
available images.

The Gallery is a core Project Details feature when project images exist.

## Gallery Interaction Model

The Gallery must use an active-image presentation:

-   One image is visually dominant/expanded.
-   Remaining images occupy smaller visual areas.
-   Selecting/clicking another image makes that image the active
    dominant image.
-   The previously active image returns to the smaller state.
-   The transition should feel smooth and intentional.

Conceptually:

`[        ACTIVE IMAGE        ] [small] [small]`

After selecting another image:

`[small] [        ACTIVE IMAGE        ] [small]`

The exact proportions, orientation, ordering, and animation are left to
Codex/Figma.

The interaction direction is inspired by modern expandable visual/card
presentations, but the implementation must remain original to SAINTRA
rather than copying another site's exact styling.

------------------------------------------------------------------------

## 7.1 Gallery Data States

### Zero Images

If the selected project has no valid gallery images:

-   Do not render the Project Gallery section.
-   Do not show an empty gallery.
-   Do not show image placeholders inside the gallery.
-   Do not show slider controls.
-   Do not leave unnecessary empty space.

The page must flow naturally from Project Overview to the next
applicable section.

### One Image

If exactly one valid project image exists:

-   Display the image as the dominant/full gallery visual.
-   Do not render unnecessary slider/navigation controls.
-   Do not create fake additional images.

### Two or More Images

If two or more valid images exist:

-   Render the active-image Gallery.
-   One image is active/dominant.
-   Remaining images remain smaller/selectable.
-   Selecting another image updates the active state.
-   The active state must always remain valid.

------------------------------------------------------------------------

## 7.2 Gallery Navigation

The primary required interaction is direct selection of the smaller
project images.

Additional Previous/Next controls may be proposed if they materially
improve accessibility or responsive usability, but they are not required
solely for decoration.

Any controls that are added must:

-   Be keyboard accessible.
-   Have accessible names.
-   Have visible focus states.
-   Avoid unexpected infinite wrapping unless explicitly approved.
-   Remain usable on touch devices.

------------------------------------------------------------------------

## 7.3 Gallery and Lightbox

A separate Lightbox is not required in Sprint 07.

The expandable active-image Gallery itself is the approved primary image
interaction.

Do not introduce an additional Lightbox dependency or interaction unless
separately proposed and approved.

------------------------------------------------------------------------

# 8. Project Information

## Purpose

Present important structured information about the selected project in
one clear area.

## Required Information

The Project Information section must support:

-   Project Type.
-   Technologies.
-   Platform.
-   Year.
-   Related Services.
-   Visit Project action --- conditional.

The exact visual layout is left to Codex/Figma.

The information may be presented through a structured editorial layout,
information grid, rows, grouped metadata, or another readable approach.

------------------------------------------------------------------------

# 9. Project Type

Project Type identifies what kind of project is being viewed.

Examples may include:

-   Web Application.
-   Mobile Application.
-   AI Solution.
-   Desktop Application.
-   UI/UX project.
-   Another approved project type.

The actual value must come from the project data.

Do not infer the type from the project title.

This field should remain compatible with the Project Type/category
concept used by the Projects catalogue/filtering experience.

------------------------------------------------------------------------

# 10. Technologies

The project may contain one or multiple technologies.

Examples may include frameworks, languages, tools, or other approved
technologies actually associated with the project.

Requirements:

-   Data-driven.
-   Support zero, one, or multiple values safely.
-   Do not assume a fixed technology count.
-   Do not invent technologies that are not present in project data.
-   Layout must wrap/adapt cleanly when multiple technologies exist.

The exact visual treatment is left to the design.

------------------------------------------------------------------------

# 11. Platform

The project may target one or multiple platforms.

The implementation must not assume that every project has exactly one
platform.

Examples may include approved values such as:

-   Web.
-   Mobile.
-   Desktop.
-   Multiple platforms.

Requirements:

-   Data-driven.
-   Support one or multiple platform values where the approved data
    requires it.
-   Adapt responsively when multiple values exist.

------------------------------------------------------------------------

# 12. Year

The Project Information section must support the project's year.

The value must come from approved project data.

Do not fabricate a year when none is available.

If the final approved data model permits the Year field to be optional,
its absence must not break the information layout or create an empty
label/value row.

------------------------------------------------------------------------

# 13. Related Services Inside Project Information

## Purpose

Show which SAINTRA services are associated with the selected project
without turning the Project Details page into a second Services
catalogue.

Related Services must be integrated into Project Information.

Do NOT create a separate Services carousel or Services pagination system
for Sprint 07.

## Relationship

Related services must be resolved from the approved relationship between
the project and service data, such as the project's stable `serviceIds`.

Do not create a duplicate manually maintained Related Services dataset
when the existing relationship can be used.

## Behavior

If one or more related services exist:

-   Display all applicable related service names in Project Information.
-   Each service name must provide a clear navigation path to:

`/services/:id`

The visual presentation may use:

-   Text links.
-   Tags/chips.
-   Structured inline links.
-   Another compact design-approved treatment.

The exact treatment is left to Codex/Figma.

## Number of Services

Do not artificially limit the display to three services.

If a project is associated with more than three services, display the
complete related-service set in a responsive, readable way.

No carousel or pagination is required.

## No Related Services

If no related services exist:

-   Remove the Services information row/group completely.
-   Do not display empty tags.
-   Do not show `No services`.
-   Do not leave an empty information slot.

------------------------------------------------------------------------

# 14. Visit Project --- Optional

## Purpose

Allow visitors to open the live/public project when a valid external
project URL exists.

## Conditional Rendering

If the selected project contains a valid public URL:

-   Display a clear Visit Project / Visit Website action or equivalent.
-   Treat it as an external destination where applicable.

If no valid URL exists:

-   Do not display the action.
-   Do not display a disabled button.
-   Do not show a placeholder URL.
-   Do not leave an empty action container.

## Link Behavior

The implementation must handle external navigation safely and
appropriately.

If opening a new browser context/tab is used, apply the appropriate
security relationship attributes.

Malformed or missing URLs must not be rendered as valid project links.

------------------------------------------------------------------------

# 15. CTA

## Purpose

End the Project Details page with a contextual next step after the
visitor has explored the selected project.

The CTA should communicate an intent appropriate to a Project Details
context, such as:

-   Have a similar project in mind?
-   Have a different idea you want to turn into a digital product?
-   Tell SAINTRA about your project and requirements.

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

The CTA should fit the Project Details context without needing to
duplicate CTAs from other pages exactly.

------------------------------------------------------------------------

# 16. Optional-Content Behavior

Sprint 07 must support different combinations of project data safely.

## Project With Logo

Display the logo appropriately in the Hero.

## Project Without Logo

Remove the logo cleanly and adapt the Hero composition.

## Project With Zero Images

Remove the entire Gallery section.

## Project With One Image

Display one dominant gallery visual without unnecessary controls.

## Project With Multiple Images

Enable the expandable active-image Gallery interaction.

## Project With Related Services

Display all related service links within Project Information.

## Project Without Related Services

Remove the Services information row/group.

## Project With Public URL

Display the Visit Project action.

## Project Without Public URL

Remove the Visit Project action.

Optional-data absence must never create:

-   Empty headings.
-   Empty containers.
-   Broken controls.
-   Broken images.
-   Dangling separators.
-   Unnecessary whitespace.

------------------------------------------------------------------------

# 17. Responsive Requirements

Verify the complete Project Details page around:

-   1440px
-   1024px
-   768px
-   390px
-   320px

These are verification references rather than separate fixed designs.

The page must:

-   Avoid horizontal scrolling.
-   Avoid clipped text.
-   Keep Hero content readable.
-   Adapt gracefully when the logo is absent.
-   Keep Project Overview readable.
-   Adapt the expandable Gallery appropriately.
-   Keep the active image understandable on narrow screens.
-   Keep smaller/selectable images usable on touch devices.
-   Keep Project Information readable.
-   Wrap Technologies safely.
-   Wrap multiple Platforms safely.
-   Keep Related Service links usable.
-   Keep Visit Project action usable when present.
-   Keep CTA content usable.
-   Avoid forcing desktop Gallery proportions onto narrow screens.

The Gallery may use a different responsive composition while preserving
the same active-image interaction concept.

------------------------------------------------------------------------

# 18. Gallery Responsive Behavior

The active-image Gallery concept must remain recognizable across
supported widths, but the exact desktop geometry does not need to be
forced onto mobile.

Codex/Figma may adapt:

-   Image orientation.
-   Relative active/inactive proportions.
-   Horizontal vs. alternative compact arrangement.
-   Touch target sizing.
-   Transition behavior.

Requirements:

-   The active image remains visually distinguishable.
-   Inactive images remain selectable when multiple images exist.
-   Images do not become unusably narrow.
-   No horizontal overflow is introduced.
-   Touch interaction remains clear.
-   Essential image navigation does not depend on hover.

------------------------------------------------------------------------

# 19. Motion

Motion is appropriate for the active-image Gallery and may also be used
for approved page interactions.

Gallery transitions may animate:

-   Relative size.
-   Position.
-   Opacity.
-   Transform.
-   Another performant property appropriate to the approved design.

Motion must remain:

-   Purposeful.
-   Smooth.
-   Restrained.
-   Performant.
-   Consistent with the Portfolio motion system.
-   Compatible with `prefers-reduced-motion`.

Essential content and navigation must never depend on animation.

Reduced-motion users must still be able to select and view every project
image.

------------------------------------------------------------------------

# 20. Accessibility

Requirements include:

-   One clear page-level H1 based on the selected project.
-   Logical heading hierarchy.
-   Semantic content structure.
-   Keyboard-accessible Gallery image selection.
-   Clear active-image state where appropriate.
-   Accessible labels for interactive Gallery controls.
-   Visible focus states.
-   Appropriate image alternative text.
-   Decorative imagery treated appropriately.
-   Keyboard-accessible Related Service links.
-   Keyboard-accessible Visit Project action.
-   Appropriate external-link behavior.
-   Appropriate interactive target sizes.
-   Readable contrast.
-   Essential information must not depend on animation.
-   Reduced-motion support.
-   Optional sections/elements must disappear semantically as well as
    visually when absent.

------------------------------------------------------------------------

# 21. Data Flexibility

The implementation must not assume:

-   One specific project.
-   Fixed project text lengths.
-   Every project has a logo.
-   Every project has images.
-   Exactly one image.
-   A fixed Gallery image count.
-   A fixed technology count.
-   Exactly one platform.
-   A fixed related-service count.
-   Every project has a website.
-   The current project ordering is permanent.

Stable IDs must be used for:

-   Project resolution.
-   Service relationships.
-   Navigation.

Changing project content in the data layer must not require duplicating
or redesigning the page template.

------------------------------------------------------------------------

# 22. Assets

Project logos and images must follow the project's approved asset
strategy.

Assets must:

-   Remain replaceable.
-   Scale appropriately.
-   Preserve suitable aspect ratios.
-   Avoid unnecessary layout breakage.
-   Avoid fabricated client imagery.
-   Avoid unsupported company/project claims.

If Gallery images are missing, the Gallery disappears rather than
filling itself with fake placeholder project screenshots.

This is intentionally different from the Projects catalogue card, where
a placeholder is required to preserve the card structure.

------------------------------------------------------------------------

# 23. Dependencies

Use the existing approved project stack where practical.

The active-image Gallery should preferably be implemented without
introducing a heavy slider/gallery dependency if the required behavior
can be achieved cleanly with the existing stack.

If a new dependency is considered necessary, it must first be proposed
with:

-   Reason.
-   Purpose.
-   Alternatives.
-   Bundle/performance impact.
-   Maintenance impact.

Implementation waits for explicit approval.

Do not add a Lightbox dependency because Lightbox is not required in
this Sprint.

------------------------------------------------------------------------

# 24. Component Strategy

Reuse approved shared components where appropriate.

Relevant concepts may include:

-   Icons.
-   Shared buttons/actions.
-   Section headings.
-   Navigation/link patterns.

A dedicated Project Gallery component may be introduced if it provides
clear structural and behavioral value.

Project Information may also be componentized if doing so improves
clarity/reusability without over-engineering.

Do not globally redesign unrelated shared components as a side effect of
Sprint 07.

------------------------------------------------------------------------

# 25. Out of Scope

Sprint 07 does NOT include:

-   Projects catalogue redesign beyond necessary regression-safe shared
    work.
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
-   Project State / Status UI.
-   Project Start Date UI.
-   Separate Related Services carousel.
-   Related Services pagination.
-   Separate project Lightbox.
-   Unapproved global redesigns.
-   Fabricated project/client content.

------------------------------------------------------------------------

# 26. Implementation Workflow

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

# 27. Pre-Implementation Proposal

Before implementation, inspect the relevant project files and report:

-   Current `/projects/:id` implementation.
-   Current project data shape.
-   Current project logo field/state.
-   Current project image/gallery fields.
-   Current Project Type field/state.
-   Current Technologies field/state.
-   Current Platform field/state.
-   Current Year field/state.
-   Current project URL field/state.
-   Current service relationship mechanism such as `serviceIds`.
-   Current service routing.
-   Existing image/asset strategy.
-   Existing motion strategy.
-   What needs to change and why.
-   Exact files expected to be modified.
-   Exact files expected to be created.
-   Data-shape changes required.
-   Shared components affected.
-   Dependencies, if any.
-   Potential impact outside `/projects/:id`.
-   Verification plan.

Stop and wait for explicit user approval before meaningful source edits.

Any newly discovered scope expansion requires a new proposal.

------------------------------------------------------------------------

# 28. Visual Review Gate

Build success alone does not close Sprint 07.

User visual review must include:

-   Project Hero / Introduction.
-   Project with logo.
-   Project without logo.
-   Project Overview.
-   Project with zero Gallery images.
-   Project with one Gallery image.
-   Project with multiple Gallery images.
-   Active-image Gallery interaction.
-   Selection of inactive/smaller images.
-   Gallery responsive behavior.
-   Project Information.
-   Project Type.
-   Technologies.
-   Platform.
-   Year.
-   Project with related services.
-   Project without related services.
-   Navigation from service name to `/services/:id`.
-   Project with Visit Project URL.
-   Project without Visit Project URL.
-   CTA.
-   Invalid-project state.
-   Desktop presentation.
-   Tablet presentation.
-   Mobile presentation.

Adjustments may be requested before Sprint closure.

------------------------------------------------------------------------

# 29. Technical Verification

Verify at minimum:

-   `/projects/:id` resolves a valid project correctly.
-   Direct navigation to a valid Project Details URL works.
-   Invalid project ID is handled safely.
-   Correct project name renders.
-   Correct introductory content renders.
-   Project logo renders when valid logo data exists.
-   Missing logo removes the logo cleanly.
-   Project Overview uses selected project data.
-   Project State/Status is not displayed.
-   Project Start Date is not displayed.
-   Zero gallery images remove the entire Gallery section.
-   One gallery image renders without unnecessary navigation.
-   Two or more gallery images enable the active-image interaction.
-   Selecting an inactive image makes it active/dominant.
-   Previously active image returns to the inactive/smaller
    presentation.
-   Gallery state remains valid after repeated selections.
-   Gallery works with keyboard interaction.
-   Gallery remains usable on touch/mobile.
-   Reduced-motion behavior works.
-   Project Type renders from approved data.
-   Technologies render correctly for varying counts.
-   Platform supports approved one/multiple values.
-   Year renders correctly when available.
-   Related services are derived from the approved project/service
    relationship.
-   Unrelated services are not shown.
-   Every related service link navigates to the correct `/services/:id`.
-   Missing related services remove the Services information group.
-   No Related Services pagination/carousel is introduced.
-   Valid public project URL displays the Visit Project action.
-   Missing/invalid URL removes the Visit Project action.
-   External project link behavior is safe.
-   CTA navigates to `/contact`.
-   Optional-data absence creates no broken spacing.
-   No horizontal overflow occurs at required widths.
-   No new blocking runtime/console errors occur.
-   Existing routes outside Sprint remain functional.
-   Required build and diff checks are executed.

------------------------------------------------------------------------

# 30. Sprint Test Documentation

Only after implementation and actual verification, create the Sprint 07
test documentation using the approved project documentation structure.

Record:

-   Tested scope.
-   Acceptance criteria.
-   Test cases.
-   Expected results.
-   Actual results.
-   PASS / FAIL / BLOCKED status.
-   Valid/invalid project route tests.
-   Logo-present/logo-absent tests.
-   Zero/one/many Gallery image tests.
-   Active-image Gallery interaction tests.
-   Keyboard Gallery tests.
-   Responsive Gallery tests.
-   Reduced-motion tests.
-   Project Information tests.
-   Technologies count tests.
-   Platform tests.
-   Related-service relationship tests.
-   Related-service navigation tests.
-   URL-present/URL-absent tests.
-   External-link tests.
-   CTA navigation tests.
-   Responsive tests.
-   Accessibility checks.
-   Regression checks.
-   Known limitations.

Never report a test as PASS if it was not actually executed or directly
verified.

------------------------------------------------------------------------

# 31. Sprint Report

After implementation, testing, and visual approval, create the Sprint 07
completion report.

Record:

-   Sprint goal.
-   Implemented requirements.
-   Final Project Details structure.
-   Final Hero/logo behavior.
-   Final Project Overview behavior.
-   Final Gallery interaction.
-   Final zero/one/many image behavior.
-   Final Project Information structure.
-   Final Related Services behavior.
-   Final Visit Project behavior.
-   Final responsive behavior.
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

# 32. Git Gate

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

# 33. Acceptance Criteria

Sprint 07 is acceptable when:

-   `/projects/:id` provides a complete Project Details experience.
-   A valid project is resolved using its stable identifier.
-   Invalid project identifiers are handled safely.
-   Project Hero includes project name and introductory content.
-   Project logo appears only when valid logo data exists.
-   Missing logo does not create a placeholder or empty container.
-   Project Overview provides deeper readable project content.
-   Project State/Status is not displayed.
-   Project Start Date is not displayed.
-   Gallery disappears completely when no project images exist.
-   One image displays without unnecessary controls.
-   Two or more images use the approved active-image expandable Gallery.
-   The selected image becomes dominant and remaining images become
    smaller/selectable.
-   Gallery interaction remains usable across desktop, tablet, mobile,
    keyboard, and touch input.
-   A separate Lightbox is not required.
-   Project Information contains Project Type, Technologies, Platform,
    Year, applicable Related Services, and conditional Visit Project
    action.
-   Related Services are integrated into Project Information rather than
    a separate carousel/pagination section.
-   All related services may be displayed; they are not artificially
    limited to three.
-   Each related service can navigate to `/services/:id`.
-   Missing related services remove their information group cleanly.
-   Visit Project appears only when a valid URL exists.
-   Missing project URL does not produce a disabled or empty action.
-   CTA is appropriate to the Project Details context and navigates to
    `/contact`.
-   Optional-content combinations do not break the layout.
-   Page is responsive without horizontal overflow.
-   Accessibility and reduced-motion requirements are preserved.
-   No unsupported project/client/company claims are invented.
-   No out-of-scope page is redesigned.
-   Required technical verification succeeds or limitations are
    documented.
-   User visual approval is received.

------------------------------------------------------------------------

# 34. Definition of Done

Sprint 07 is DONE only when:

1.  All approved Sprint 07 requirements are implemented.
2.  Project Hero / Introduction is complete.
3.  Optional project-logo behavior is complete.
4.  Project Overview is complete.
5.  Project Gallery zero/one/many-image behavior is complete.
6.  Active-image Gallery interaction is complete.
7.  Project Information is complete.
8.  Project Type behavior is complete.
9.  Technologies behavior is complete.
10. Platform behavior is complete.
11. Year behavior is complete.
12. Related Services integration and navigation are complete.
13. Conditional Visit Project behavior is complete.
14. CTA is complete.
15. Invalid-project handling is complete.
16. Responsive behavior is verified.
17. Accessibility and reduced-motion behavior are verified.
18. Required technical verification is complete.
19. No known blocking regression remains.
20. User visual review is complete and approved.
21. Sprint 07 test documentation records actual results.
22. Sprint 07 completion report records actual implementation.
23. No future Sprint work is mixed into Sprint 07.
24. Git changes are reviewed.
25. Commit/push occurs only after explicit user approval.

If any required item remains incomplete, Sprint 07 remains IN PROGRESS.
