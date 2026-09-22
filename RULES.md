# RULES.md

> Current approved execution contract: `SPRINT_PLAN.md` is the concise, authoritative implementation brief for the **public portfolio only**. The ten files in `sprints v2/` are optional design/detail references; read a relevant section only when the concise plan leaves a specific implementation question open. This replaces the older per-sprint execution workflow below wherever it conflicts. No source code is authorized by this documentation-update task.

## 1. Core Principle

Create a Vue/Vite public portfolio from scratch in this same directory
(`documents/`) when a later implementation task is authorized. Keep
`SRS.md`, `RULES.md`, `SPRINT_PLAN.md`, `sprints v2/`, and `images/` intact.
The Dashboard, backend, API, CMS, database, and data-management integration
are outside this implementation. Public content comes from local `src/data`
files. Do not implement source code during a documentation-only task.

## 2. Priority

For this implementation: latest explicit user-approved instruction >
`SPRINT_PLAN.md` current-scope decisions > this file > public-portfolio
requirements in `SRS.md` > relevant detail in `sprints v2/`.
Dashboard/future-architecture sections of the SRS are deferred, not
implementation instructions. Never silently invent factual content.

## 3. Mandatory Proposal → Approval → Apply Workflow

For a later, explicit **one-run implementation request approving
`SPRINT_PLAN.md`**, inspect the directory once, report the baseline and
intended stack briefly, then execute the approved portfolio scope
continuously. Internal phase checks do not require separate approvals.
Do not interpret approval of this documentation update as permission to
write application code. Stop for a material scope/architecture change,
deletion of user material, a paid/external service, unsupported factual
content, or a decision explicitly reserved for the user.

## 4. Deletion Requires Explicit Approval

Do not delete or overwrite existing user files, assets, or unrelated
work without explicit approval. In a fresh implementation, the agent may
replace code it created during the same run while iterating, after
checking the exact target. If a pre-existing item must be removed,
identify it, its use, replacement, and impact, then ask first.

## 5. Do Not Keep Old Implementations as Large Comments

Do not routinely comment out old code and place new code beside it. This
creates dead code and conflicts. Git/version history is the rollback
mechanism. Only create a temporary side-by-side experiment when the user
explicitly approves that experiment. Remove temporary code after final
approval and any required deletion approval.

## 6. Explain Every Change

Every proposed modification/addition must have a short reason. After
implementation summarize what changed, why, files changed, and
verification performed.

## 7. Apply an Approved Concept Consistently

When an approved concept changes, inspect ALL relevant usages.
Examples: - Services navigation: Home, Services page, Navbar, Footer,
routes, cards, links. - Language: Navbar, Footer, document direction,
shared labels, translation architecture. - Icons: all usages of the
affected icon system. - Shared design tokens: all affected components.
This does NOT authorize unrelated redesigns.

## 8. Preserve Existing User Files

The current directory contains planning documents and reference images,
not the Vue/Vite application. Create the application here from scratch
when implementation is authorized. Inspect for newly added files first
and preserve any user work. Do not edit packed/derived files instead of
source files.

## 9. Strict Sprint Scope

For a one-run implementation, read `SPRINT_PLAN.md` and this file first.
Use `SRS.md` and the matching `sprints v2/SPRINTXX.md` only to resolve
details within the approved public scope. Follow the phase dependency
order in `SPRINT_PLAN.md`; shared architecture may be implemented before
individual pages. Do not let legacy sprint gates interrupt the one-run
workflow. Record exceptions in one final report.

## 10. Portfolio First

Current implementation scope is the public Portfolio.
Dashboard/data-management integration is deferred. Do not invent APIs,
authentication, backend contracts, databases, or a mandatory Dashboard
integration architecture during Portfolio Sprints. Future data
management may or may not use a custom backend/API/database; that
decision requires a later explicit proposal and approval.

## 11. Data-Driven Architecture

Create `src/data` as the approved data source for this public-site
release. Its records may be replaced later, but no future data-management
architecture is part of this implementation. No backend, API, CMS,
database, or Dashboard should be built or stubbed.

Therefore: - do not hardcode
project/service/company records in page templates; - UI must depend on
data shape, not the physical local-file source; - support changing
counts/text/optional fields; - keep stable IDs/relations; - avoid
duplicated datasets; - missing optional data must not break pages.

## 12. Temporary Assets

A final real company logo is not available yet. Final real project
images are not available yet. Logo/image structures must be easy to
replace later. Do not pretend placeholders are final assets or fabricate
real client imagery. Missing optional assets must not break layout.

## 13. Asset Strategy

Prefer project-local assets for core visuals when this improves
reliability, performance, privacy, and maintainability. Before adding an
external font, image provider, icon CDN, 3D asset host, or similar
dependency, explain why it is needed and why local/bundled usage is not
preferable.

## 14. Typography

Choose a suitable Arabic/English font and fallback within the approved
one-run scope. Prefer a local, licensed, lightweight asset. Document
the choice and performance impact in the final report.

## 15. Icons

Replace weak text/Unicode approximations with a coherent professional
icon strategy where appropriate, especially social media icons. Icons
must be recognizable, accessible, consistent, and lightweight. Prefer
local SVG/components or an already-approved icon package. Do not add a
large icon dependency without approval.

## 16. Services

A dedicated `/services` page displays ALL services from the shared
dataset. Home Services is a preview and has a clear View All/View More
action to `/services`. Cards route to `/services/:id`. Navbar/Footer
service navigation must be consistent. Maintain one dataset.

## 17. Home Hero

Build one coherent Hero. Animated/3D-inspired visuals are allowed, but
readability, responsiveness, reduced-motion support, and performance
come first. Heavy 3D dependencies require proposal and approval.

## 18. About + Statistics

Redesign About while preserving required content. Statistics animate
from zero to configured final values when visible, preserve suffixes
such as `+`, avoid duplicate timers/listeners, and remain readable with
reduced motion. Non-counter values must be handled intentionally.

## 19. Project Details

Support replaceable project logo and optional gallery/images. Gallery
should support slider/carousel, emphasized active/center image,
zoom/full-screen lightbox, responsive interaction, and zero/one/many
images. Place related services in project information, not beside
`Visit project`; retain stable `serviceIds`. Visit Project is conditional
on a valid URL.

## 20. Service Details

Support optional service image, redesigned existing What's Included,
redesigned existing Our Process, related projects, and optional YouTube
video. Video renders only when valid data exists, uses safe responsive
embedding, and does not autoplay unnecessarily.

## 21. Language

Add visible language controls to BOTH Navbar and Footer. Arabic=RTL,
English=LTR. Direction changes at document/app level. Do not duplicate
entire pages by language. Use centralized translation structure.
Language should persist through navigation/reload when implemented.

## 22. Global Redesign

Progressively evolve the simple design into a coherent modern
software-company portfolio using purposeful motion, imagery, depth,
3D-inspired visuals, micro-interactions, stronger hierarchy, and
improved composition. Do not animate everything. Maintain consistent
spacing, typography, buttons, radii, shadows, tokens, responsiveness,
and no horizontal overflow.

## 23. Accessibility

Keyboard-accessible controls; correct link/button semantics; meaningful
alt text; accessible icon-only labels; visible focus; reasonable
contrast; accessible lightbox close; reduced-motion support.

## 24. Performance

No unnecessary dependencies. Lazy-load non-critical media where
appropriate. Avoid heavy autoplay. Define media aspect ratios. Prefer
transform/opacity animations. Clean up timers/listeners/observers. Do
not load absent optional media.

## 25. Dependencies

Use only dependencies needed for the approved site. Choose stable
versions compatible with the implementation environment and record the
reason for any non-core dependency in the final report. Ask before a
paid/external service or a materially different architecture.

## 26. Code Quality

Focused readable Vue components; useful reuse without over-abstraction;
clear names; no debug logs; no dead duplicate implementations; no
unexplained commented-out code; no error suppression.

## 27. TESTXX.md After EVERY Sprint

For the one-run workflow, use one concise `IMPLEMENTATION_TESTS.md`
covering all acceptance criteria by phase. Record command/browser,
expected/actual result, and PASS/FAIL/BLOCKED. Minimum verification:
production build, every route, desktop/tablet/mobile, AR/EN and RTL/LTR,
keyboard, links, empty/optional data, console errors, reduced motion,
and representative automated checks. Never mark PASS unless executed.

## 28. REPORTXX.md After EVERY Sprint

For the one-run workflow, create one concise `IMPLEMENTATION_REPORT.md`
with scope, implementation summary, major files/dependencies, build and
test evidence, deviations, missing factual assets/content, and final
COMPLETE/PARTIAL/BLOCKED status. Do not create ten repetitive reports.

## 29. Sprint Files & SPRINT_PLAN.md

`SPRINT_PLAN.md` at this directory root is the master execution contract.
`sprints v2/SPRINTXX.md` files remain available as optional detailed
references. They do not add approval gates or supersede current-scope
decisions. Do not duplicate their long prose in the implementation
context unless a specific detail is needed.

## 30. Git and Rollback

Use Git/version control as rollback instead of commented old
implementations. Keep Sprint changes reviewable; no unrelated work; no
secrets/.env; review diff. Recommended commit:
`Sprint XX: <completed scope>`. Do not push/merge destructive or broad
changes without approval.

## 31. Definition of Done

The portfolio is DONE only when `SPRINT_PLAN.md` acceptance criteria
pass, production build and representative browser tests are run, no
known blocking defect remains, and both one-run evidence files exist.
Unverified or unavailable checks must be marked BLOCKED, not PASS.

## 32. Stop Conditions

STOP and ask for a material scope/architecture change, destructive work
on pre-existing user material, a paid/external integration, fabricated
factual content, or a decision explicitly reserved for the user. For a
normal implementation defect or failed build, diagnose and fix within
scope, then rerun verification; do not stop at the first failure.
