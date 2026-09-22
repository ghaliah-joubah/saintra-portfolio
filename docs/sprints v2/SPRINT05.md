# SPRINT 05 --- Service Details Complete Redesign & Implementation

> **Current-scope note:** `../SPRINT_PLAN.md` also includes optional team/technologies only when verified local service data provides them. Do not invent facts. Separate approval/report gates below are superseded for the one-run build.

## 1. Sprint Goal

Design and implement the complete public Service Details experience for
SAINTRA.

Route:

`/services/:id`

The page must present one selected service in greater depth, explain
what the service includes and how SAINTRA approaches the work,
optionally display a service video when valid video data exists, show
related projects when relationships exist, and provide a clear path to
contact SAINTRA.

This Sprint defines the required page structure, behavior, data
expectations, optional-content handling, responsive behavior,
accessibility requirements, and verification criteria.

The exact visual design is intentionally not prescribed. Codex/Figma may
determine the final composition, styling, spacing, decorative treatment,
and visual language as long as all requirements in this Sprint are
preserved.

------------------------------------------------------------------------

## 2. Required Page Structure

The Service Details page must support the following sections:

1.  Service Hero / Introduction
2.  Service Overview
3.  What's Included
4.  Our Process
5.  Optional Video
6.  Related Projects
7.  CTA

High-level flow:

Service Hero / Introduction\
↓\
Service Overview\
↓\
What's Included\
↓\
Our Process\
↓\
Optional Video --- only when valid video data exists\
↓\
Related Projects --- only when related projects exist\
↓\
CTA

Optional sections must disappear cleanly when their required data does
not exist.

------------------------------------------------------------------------

## 3. Data Source

For the current Portfolio phase, service and project information is
provided through the project's local data layer under `src/data`.

The page must resolve the selected service using the route identifier
rather than duplicating service records inside the page template.

The implementation must remain data-driven and must not assume:

-   A specific service ID.
-   A fixed service description length.
-   A fixed number of What's Included entries.
-   A fixed number of Process entries.
-   That every service has a video.
-   That every service has related projects.
-   A fixed number of related projects.

API, backend, Dashboard, CMS, database, or another future production
data source is outside the scope of this Sprint.

------------------------------------------------------------------------

# 4. Service Resolution and Invalid Service State

The route parameter in:

`/services/:id`

must resolve the corresponding service using its stable identifier.

If a valid service exists, render the Service Details experience.

If no service matches the requested identifier:

-   Do not render a broken page.
-   Do not display stale data from another service.
-   Present an appropriate not-found/invalid-service state.
-   Provide a useful navigation path back to the Services catalogue or
    another appropriate approved destination.

The exact visual design of the invalid-service state is left to the
design.

------------------------------------------------------------------------

# 5. Service Hero / Introduction

## Purpose

Introduce the selected service immediately and establish its identity.

## Required Content

The first section must support:

-   Service name.
-   Introductory service description/copy.
-   Main service image.

The main image belongs to the selected service and must come from the
service data.

## Main Service Image

Sprint 05 requires one primary service image/visual in the opening
section.

The image must:

-   Be relevant to the selected service.
-   Be data-driven.
-   Scale responsively.
-   Preserve an appropriate aspect ratio.
-   Avoid layout breakage.
-   Include appropriate alternative text when informative.
-   Be treated as decorative appropriately when it conveys no additional
    information.

A separate service image gallery/slider is intentionally not required in
this Sprint.

The page must not invent a gallery merely to fill visual space.

## Design Freedom

Codex/Figma may determine:

-   Image placement.
-   Text/image relationship.
-   Hero composition.
-   Background treatment.
-   Decorative elements.
-   Typography.
-   Appropriate motion.

The exact visual solution is not prescribed.

------------------------------------------------------------------------

# 6. Service Overview

## Purpose

Provide a deeper readable explanation of the selected service beyond the
short introduction used in the Hero or Services catalogue.

## Content

The section should support:

-   Section heading/label where appropriate.
-   One or more descriptive paragraphs.
-   Additional approved explanatory content where present in the service
    data.

## Requirements

-   Content must remain readable.
-   Layout must tolerate varying text lengths.
-   The section must not depend on a fixed number of paragraphs.
-   Do not invent unsupported capabilities, technologies, results,
    certifications, or business claims.
-   The exact editorial layout is left to Codex/Figma.

------------------------------------------------------------------------

# 7. What's Included

## Purpose

Explain what SAINTRA can help the client with as part of the selected
service.

## Content Model

The content must be data-driven and may contain multiple topics/items.

Each meaningful content item should support structured information such
as:

-   Title.
-   Explanatory text.

The number of items must not be fixed.

## Presentation Requirement

What's Included must NOT be reduced to a plain checklist or simple
bullet list as the primary visual treatment.

Avoid a presentation whose main experience is only:

`✓ Item`\
`✓ Item`\
`✓ Item`

Instead, the section must feel like readable, structured service
content.

Each topic should have enough hierarchy to communicate what it
represents and, where data exists, explain it with meaningful supporting
text.

## Design Freedom

The exact visual composition is left to Codex/Figma.

Possible design directions may include editorial composition, structured
content blocks, alternating content, or another distinctive readable
presentation.

Cards, timelines, numbering, columns, or other treatments are not
mandatory unless proposed as part of the final design.

The priority is readable explanatory content rather than a generic
checklist.

------------------------------------------------------------------------

# 8. Our Process

## Purpose

Explain how SAINTRA approaches the selected service from initial
understanding through delivery or the relevant workflow.

## Content Model

Process content must be data-driven.

Each process stage/topic should support structured information such as:

-   Stage/title.
-   Explanatory text.

The implementation must not assume the same number of process stages for
every service.

The exact process names and descriptions must come from approved service
data rather than being invented in the template.

## Presentation Requirement

Our Process must NOT be presented merely as a basic bullet/check list.

The visitor should be able to read and understand each stage and its
explanation.

Conceptually:

`Stage / Topic`\
`Meaningful explanatory text`

rather than:

`✓ Step 1`\
`✓ Step 2`\
`✓ Step 3`

## Design Freedom

Codex/Figma may choose an appropriate visual structure such as an
editorial flow, timeline-inspired treatment, progressive composition,
structured sections, or another suitable design.

A specific timeline/card/numbering style is not required by this Sprint.

------------------------------------------------------------------------

# 9. Optional Video

## Purpose

Allow a service to include supporting video content when valid video
data is available.

## Conditional Rendering

The entire Video section is optional.

If the selected service contains a valid supported video value:

-   Display the Video section.

If no valid video value exists:

-   Do not render the Video section.
-   Do not show a placeholder.
-   Do not show "Video unavailable".
-   Do not leave an empty visual gap.

The surrounding page must close naturally when the section is absent.

## Video Behavior

For supported YouTube content:

-   Use an appropriate responsive embed.
-   Preserve a suitable aspect ratio.
-   Do not autoplay unnecessarily.
-   Provide an appropriate title/accessibility label.
-   Avoid loading or embedding malformed/invalid values as if they were
    valid content.

The exact visual framing of the video is left to the design.

------------------------------------------------------------------------

# 10. Related Projects

## Purpose

Show real portfolio projects associated with the selected service and
allow the visitor to continue from the service into relevant project
work.

## Relationship

Related projects must be determined using the approved relationship data
between services and projects, such as stable service identifiers
referenced by projects.

Do not create a duplicate manually maintained Related Projects dataset
when an approved relationship already exists.

## Conditional Rendering

If the selected service has no related projects:

-   Do not render the Related Projects section.
-   Do not show an empty project grid.
-   Do not show a placeholder.
-   Do not show pagination.
-   Do not leave unnecessary empty space.

If one or more related projects exist:

-   Render the Related Projects section.
-   Show only projects actually related to the selected service.

------------------------------------------------------------------------

## 10.1 Related Project Cards

Related projects must be presented using project cards or an appropriate
compact project-card variation.

The cards should remain visually smaller/lighter than the primary
project catalogue experience so that they support the Service Details
page rather than overpowering it.

Each related project card must provide a clear path to:

`/projects/:id`

The exact visual content of the compact card may follow the approved
project data and shared component strategy.

The entire interaction must remain understandable without depending only
on hover.

------------------------------------------------------------------------

## 10.2 Related Projects Pagination

Related Projects uses a fixed page capacity of:

**3 projects per page**

This capacity remains logically consistent across responsive widths.

### One Page

If there are 1--3 related projects:

-   Display the available projects.
-   Do NOT display pagination.

Examples:

-   1 project → no pagination.
-   2 projects → no pagination.
-   3 projects → no pagination.

### Multiple Pages

If there are more than 3 related projects:

-   Display up to 3 projects on the current page.
-   Display pagination.
-   Calculate the correct number of pages from the related-project
    count.

Examples:

-   4 projects → 2 pages.
-   6 projects → 2 pages.
-   7 projects → 3 pages.

Pagination must only appear when a second page actually exists.

## Pagination Behavior

Pagination must:

-   Clearly identify the current page.
-   Provide a clear way to navigate available pages.
-   Prevent invalid page states.
-   Avoid unexpected infinite wrapping.
-   Be keyboard accessible.
-   Use appropriate accessibility semantics.
-   Reuse an approved shared Pagination component when it satisfies the
    requirements.

------------------------------------------------------------------------

## 10.3 Responsive Related Projects

The logical page capacity remains 3 projects per page across desktop,
tablet, and mobile.

The layout of those projects may change responsively.

Conceptually:

Desktop:

`[ Project ] [ Project ] [ Project ]`

Smaller widths may become:

`[ Project ] [ Project ]`

with the remaining project adapting appropriately within the same
logical page.

Narrow mobile may become:

`[ Project ]`\
`[ Project ]`\
`[ Project ]`

This prevents viewport resizing from unnecessarily changing the logical
project pages.

The exact responsive card arrangement is left to Codex/Figma.

No horizontal overflow is allowed.

------------------------------------------------------------------------

# 11. CTA

## Purpose

End the Service Details page with a contextual next step for visitors
interested in the selected service.

The CTA should communicate an intent appropriate to a service-detail
context, such as:

-   Interested in this service?
-   Have a project that needs this kind of work?
-   Tell SAINTRA about your requirements and start a conversation.

These are message directions, not mandatory final copy.

## Navigation

The primary CTA must navigate to:

`/contact`

## Design Freedom

Codex/Figma may determine:

-   Final heading.
-   Supporting text.
-   Button wording.
-   Composition.
-   Background treatment.
-   Decorative treatment.

The CTA should feel related to the selected service while remaining
consistent with the Portfolio identity.

------------------------------------------------------------------------

# 12. Optional-Content Behavior

Sprint 05 must explicitly support different combinations of service
data.

Examples include:

### Full Content

Service has:

-   Main image.
-   Overview.
-   What's Included.
-   Our Process.
-   Video.
-   Related Projects.

All applicable sections render.

### No Video

The Video section disappears completely and the page flow closes
naturally.

### No Related Projects

The Related Projects section disappears completely and the page
continues naturally to the CTA.

### No Video and No Related Projects

Both optional sections disappear without leaving placeholders or empty
gaps.

Optional content must not create broken spacing, dangling headings,
empty containers, or visual artifacts.

------------------------------------------------------------------------

# 13. Responsive Requirements

Verify the complete Service Details page around:

-   1440px
-   1024px
-   768px
-   390px
-   320px

These are verification references rather than separate fixed designs.

The page must:

-   Avoid horizontal scrolling.
-   Avoid clipped text.
-   Keep the main service image usable and proportional.
-   Adapt text/image compositions naturally.
-   Keep What's Included readable.
-   Keep Our Process readable.
-   Keep optional video responsive.
-   Keep related-project cards usable.
-   Keep pagination usable.
-   Keep the CTA usable.
-   Avoid forcing desktop dimensions onto narrow screens.
-   Prevent decorative elements from interfering with content.

------------------------------------------------------------------------

# 14. Motion

Motion may be used where it improves the Service Details experience.

The exact section transitions, image motion, hover/focus responses, or
decorative motion may be proposed during design.

Motion must remain:

-   Purposeful.
-   Restrained.
-   Performant.
-   Consistent with the Portfolio motion system.
-   Compatible with `prefers-reduced-motion`.

Essential content and navigation must never depend on animation.

Where practical, prefer performant properties such as `transform` and
`opacity`.

------------------------------------------------------------------------

# 15. Accessibility

Requirements include:

-   One clear page-level H1 based on the selected service.
-   Logical heading hierarchy.
-   Semantic content structure.
-   Readable contrast.
-   Keyboard-accessible project navigation.
-   Keyboard-accessible pagination.
-   Visible focus states.
-   Appropriate interactive target sizes.
-   Appropriate image alternative text behavior.
-   Accessible video title/label when video exists.
-   Decorative elements must not create unnecessary semantic noise.
-   Essential information must not depend on animation.
-   Reduced-motion support.
-   Optional sections must disappear semantically as well as visually
    when absent.

------------------------------------------------------------------------

# 16. Data Flexibility

The implementation must not assume:

-   One specific service.
-   Fixed text lengths.
-   Fixed What's Included count.
-   Fixed Process stage count.
-   That every service has video.
-   That every service has projects.
-   That every service has exactly 3 related projects.
-   A permanent ordering of related projects.

Service and project relationships must use stable approved identifiers.

Changing service content in the data layer must not require redesigning
the page template.

------------------------------------------------------------------------

# 17. Assets

The primary service image must follow the project's approved asset
strategy.

Assets must:

-   Remain replaceable.
-   Scale appropriately.
-   Avoid unnecessary layout shift where practical.
-   Not fabricate real clients, projects, awards, certifications, or
    company achievements.

A separate service gallery is outside this Sprint unless later
explicitly approved.

------------------------------------------------------------------------

# 18. Dependencies

Use the existing approved project stack where practical.

The Service Details page, optional video rendering, related-project
filtering, and simple pagination should not require a new dependency by
default.

If a new dependency is considered necessary, it must first be proposed
with:

-   Reason.
-   Purpose.
-   Alternatives.
-   Bundle/performance impact.
-   Maintenance impact.

Implementation must wait for explicit approval.

------------------------------------------------------------------------

# 19. Component Strategy

Reuse approved shared components where appropriate.

Relevant shared concepts may include:

-   Project cards.
-   Pagination.
-   Icons.
-   Shared buttons/actions.
-   Section-heading patterns.

A compact variation of a shared ProjectCard may be introduced when
appropriate, but changes must not unintentionally alter the main
Projects catalogue.

New components may be introduced when they provide clear structural,
behavioral, or reusable value.

Do not globally redesign unrelated components as a side effect of Sprint
05.

------------------------------------------------------------------------

# 20. Out of Scope

Sprint 05 does NOT include:

-   Services catalogue redesign beyond necessary regression-safe
    shared-component work.
-   Project Details redesign.
-   Projects catalogue redesign.
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
-   A service image gallery/slider.
-   Invented service content.
-   Unapproved global redesigns.

------------------------------------------------------------------------

# 21. Implementation Workflow

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

# 22. Pre-Implementation Proposal

Before implementation, inspect the relevant project files and report:

-   Current `/services/:id` implementation.
-   Current service data shape.
-   Current project data shape.
-   Current service/project relationship mechanism.
-   Current image/video fields, if any.
-   Existing ProjectCard behavior.
-   Existing Pagination behavior.
-   What needs to change and why.
-   Exact files expected to be modified.
-   Exact files expected to be created.
-   Data-shape changes required.
-   Shared components affected.
-   Dependencies, if any.
-   Potential impact outside `/services/:id`.
-   Verification plan.

Stop and wait for explicit user approval before meaningful source edits.

Any newly discovered scope expansion requires a new proposal.

------------------------------------------------------------------------

# 23. Visual Review Gate

Build success alone does not close Sprint 05.

User visual review must include:

-   Service Hero / Introduction.
-   Main service image.
-   Service Overview.
-   What's Included.
-   Our Process.
-   Service with Video.
-   Service without Video.
-   Service with Related Projects.
-   Service without Related Projects.
-   1 related project.
-   3 related projects.
-   More than 3 related projects with pagination.
-   Related-project card sizing.
-   Project navigation.
-   CTA.
-   Invalid-service state.
-   Desktop presentation.
-   Tablet presentation.
-   Mobile presentation.

Adjustments may be requested before Sprint closure.

------------------------------------------------------------------------

# 24. Technical Verification

Verify at minimum:

-   `/services/:id` resolves a valid service correctly.
-   Direct navigation to a valid service URL works.
-   Invalid service ID is handled safely.
-   Correct service name renders.
-   Correct service image renders.
-   Service Overview uses selected service data.
-   What's Included uses selected service data.
-   What's Included is not reduced to a plain checklist-only
    presentation.
-   Our Process uses selected service data.
-   Our Process is not reduced to a plain checklist-only presentation.
-   Valid video data renders the Video section.
-   Missing video data removes the entire Video section.
-   Video does not autoplay unnecessarily.
-   Video embed is responsive.
-   Related Projects are derived from the approved service/project
    relationship.
-   Unrelated projects are not shown.
-   Missing related projects removes the entire section.
-   1--3 related projects do not show pagination.
-   More than 3 related projects show pagination.
-   Related-project pagination uses 3 projects per logical page.
-   Responsive resizing does not unnecessarily change logical
    related-project pages.
-   Each related project navigates to the correct `/projects/:id`.
-   CTA navigates to `/contact`.
-   Optional-section absence creates no broken spacing.
-   Keyboard navigation works.
-   Focus states remain visible.
-   Reduced-motion behavior works.
-   No horizontal overflow at required widths.
-   No new blocking runtime/console errors.
-   Existing routes outside Sprint remain functional.
-   Required build and diff checks are executed.

------------------------------------------------------------------------

# 25. Sprint Test Documentation

Only after implementation and actual verification, create the Sprint 05
test documentation using the approved project documentation structure.

Record:

-   Tested scope.
-   Acceptance criteria.
-   Test cases.
-   Expected results.
-   Actual results.
-   PASS / FAIL / BLOCKED status.
-   Valid/invalid service route tests.
-   Main image tests.
-   What's Included tests.
-   Our Process tests.
-   Video-present/video-absent tests.
-   Related-project relationship tests.
-   0/1/3/4+ related-project tests.
-   Pagination tests.
-   Responsive tests.
-   Navigation tests.
-   Accessibility checks.
-   Reduced-motion checks.
-   Regression checks.
-   Known limitations.

Never report a test as PASS if it was not actually executed or directly
verified.

------------------------------------------------------------------------

# 26. Sprint Report

After implementation, testing, and visual approval, create the Sprint 05
completion report.

Record:

-   Sprint goal.
-   Implemented requirements.
-   Final Service Details structure.
-   Final optional-video behavior.
-   Final related-project behavior.
-   Final pagination behavior.
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

# 27. Git Gate

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

# 28. Acceptance Criteria

Sprint 05 is acceptable when:

-   `/services/:id` provides a complete Service Details experience.
-   A valid service is resolved from its stable identifier.
-   Invalid service identifiers are handled safely.
-   Service Hero includes the service name, introduction, and main
    service image.
-   A separate service gallery is not required.
-   Service Overview provides deeper readable content.
-   What's Included uses structured titles/explanatory content rather
    than a simple checklist-only presentation.
-   Our Process uses readable structured stages/topics with explanatory
    text rather than a simple checklist-only presentation.
-   Video appears only when valid video data exists.
-   Missing video removes the entire Video section cleanly.
-   Related Projects appear only when relationships exist.
-   Missing related projects remove the entire section cleanly.
-   Related project cards remain appropriately compact for the Service
    Details context.
-   Related project cards navigate to `/projects/:id`.
-   Related Projects use 3 projects per logical page.
-   Pagination is hidden for 1--3 related projects.
-   Pagination appears only when more than 3 related projects create a
    second page.
-   Related-project layout adapts responsively without changing logical
    page capacity.
-   CTA is appropriate to the selected-service context and navigates to
    `/contact`.
-   Page remains responsive without horizontal overflow.
-   Accessibility and reduced-motion requirements are preserved.
-   No unsupported company/service claims are invented.
-   No out-of-scope page is redesigned.
-   Required technical verification succeeds or limitations are
    documented.
-   User visual approval is received.

------------------------------------------------------------------------

# 29. Definition of Done

Sprint 05 is DONE only when:

1.  All approved Sprint 05 requirements are implemented.
2.  Service Hero / Introduction is complete.
3.  Main service image behavior is complete.
4.  Service Overview is complete.
5.  What's Included is complete.
6.  Our Process is complete.
7.  Optional Video behavior is complete.
8.  Related Projects conditional behavior is complete.
9.  Related Projects pagination is complete.
10. CTA is complete.
11. Invalid-service handling is complete.
12. Responsive behavior is verified.
13. Accessibility and reduced-motion behavior are verified.
14. Required technical verification is complete.
15. No known blocking regression remains.
16. User visual review is complete and approved.
17. Sprint 05 test documentation records actual results.
18. Sprint 05 completion report records actual implementation.
19. No future Sprint work is mixed into Sprint 05.
20. Git changes are reviewed.
21. Commit/push occurs only after explicit user approval.

If any required item remains incomplete, Sprint 05 remains IN PROGRESS.
