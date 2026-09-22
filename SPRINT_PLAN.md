# Public Portfolio — one-run execution contract

Status: approved scope for planning; **documentation only has been authorized so far**. Application implementation requires a later explicit request. This file is deliberately the short primary brief for a coding agent. Read `RULES.md` with it; consult `SRS.md` or a section of `sprints v2/SPRINTXX.md` only for an unresolved public-site detail. Do not preload all ten long sprint files.

## 1. Outcome and boundaries

Build a complete, responsive Arabic/English SAINTRA public portfolio **from scratch in this directory** (`documents/`). The Vue/Vite app, source files, and local `src/data` do not yet exist. Preserve all existing documents and reference images. The deliverable is a runnable, buildable, deploy-ready frontend, not a claimed live deployment.

In scope: Home, About, Services, Service Details, Projects, Project Details, Contact, shared navigation/footer, language switching, responsive design, accessibility, basic SEO, testing, and real email/WhatsApp contact links when verified contact values are supplied.

Out of scope: Dashboard, admin/login, backend, API, CMS, database, server-side persistence, real form delivery, payment, analytics, and production hosting/account configuration. Do not create fake endpoints or placeholder credentials. Local `src/data` is the approved content source for this release. Keep page components data-driven without building speculative future integrations.

## 2. Decisions that override legacy documents

| Topic | Current decision |
| --- | --- |
| Existing app | There is **no app** in this directory; scaffold Vue/Vite here after checking for user-added files. Do not assume an existing implementation. |
| Document priority | Latest explicit user instruction > this plan > `RULES.md` > public SRS > relevant legacy sprint detail. Deferred SRS features do not enter this release. |
| Execution | One implementation request may cover the entire approved scope. Work through phases continuously, verify each phase, and produce one test record and one report. Stop only for reserved decisions described in `RULES.md`. |
| Project data | `src/data` contains stable IDs, localized display text, optional media, and relationships. No dashboard or remote data source. |
| Home projects | Show **up to six** projects as a preview; `/projects` lists all with six per logical page. Do not paginate the whole dataset inside Home. |
| Services | Home is a limited preview with View All. `/services` lists **all** local services, with filter and pagination as needed. |
| Contact | Verified `mailto:` and WhatsApp links are real actions. The form is explicitly labelled **demo only** before entry and at submit; it validates locally but never sends, stores, clears, or claims delivery. Never show “message sent/submitted successfully.” |
| Languages | Build AR/EN support and RTL/LTR into the foundation, not as a late retrofit. Keep stable IDs/URLs language-independent and use the same page components. |
| Completion | Feature-complete code is distinct from complete business content and live deployment. Missing verified contact details or real assets remain explicit limitations, never fabricated PASS results. |

## 3. Data contract and content policy

Use a small typed or well-validated local model (TypeScript is optional) with one canonical source per entity. Expected groups: `company`, `services`, `projects`, `siteCopy/navigation`, and social/contact links. Define stable `id`/route keys independent of locale. A localized field uses the same AR/EN shape consistently; document fallback behavior. Resolve `project.serviceIds` and service-related project lists from one relationship, not duplicate manually maintained arrays. Filter invalid/missing IDs safely.

Company data supports name, description/story, mission, vision, values, location/branches, verified statistics, technologies/expertise, logo, email, phone/WhatsApp, and social URLs as available. A missing optional section is omitted cleanly; a required factual claim must not be invented.

Service data supports localized title, short/full description, category, optional image/icon/video, What's Included, Our Process, and related projects. Team/technologies are rendered only when real local data exists; otherwise omit, rather than invent them.

Project data supports localized title/description, type, optional logo/cover/gallery, technologies, platform, year, deadline/completion date, team, live URL, and `serviceIds`. Show only verified optional fields. Public project detail must not expose project status or start date. Put related-service links in project information, not beside the Visit Project action.

Do not invent clients, employees, performance results, awards, completed projects, contact addresses, or real-looking images. Existing `images/` files are reference assets until their intended use and rights are known. Provide empty states and clearly identified replaceable assets. If essential company copy or contact values are missing, implement the data slot and document the gap; do not silently fill it with false data.

## 4. Page acceptance contract

1. **Home:** hero with restrained software/3D-inspired motion and reduced-motion fallback; company preview, Why Choose Us, limited service preview, up to six project cards, contact CTA. Buttons route correctly. No invented metrics or client claims.
2. **About:** company story, mission/vision, values, expertise/technologies, location/branches, statistics with safe count-up for numeric values, and CTA. Omit factual blocks lacking approved data without leaving blank shells.
3. **Services:** all records from local data; category filter before pagination; usable empty/one/many states; cards open `/services/:id`. A responsive capacity may differ by viewport only if page state remains valid and consistent.
4. **Service Details:** invalid ID state; overview, What's Included, Our Process, optional image and safe/lazy YouTube embed, related projects, optional team/technologies if provided, and contact CTA.
5. **Projects:** all records from local data; type filter before fixed six-item pagination; zero/one/many and missing-image states; cards open `/projects/:id`.
6. **Project Details:** invalid ID state; description, optional logo and zero/one/many-image gallery with accessible lightbox, available metadata (including deadline/completion/team when supplied), technologies, related-service links, optional valid live URL, and CTA. No public status/start date.
7. **Contact:** verified email and WhatsApp links from `src/data`, location/social links when supplied, and a **clearly non-delivering demo form**. Validate fields locally; after valid submission say only “تم التحقق من البيانات محلياً؛ لم تُرسل الرسالة” / “Validated locally; no message was sent.” Keep the entered text for copying or using the real contact links; do not reset it. No personal data in logs or local storage.
8. **Global:** AR/EN switch in navbar and footer, persistent language preference, correct document `lang` and `dir`, same-route switching, mobile navigation, back-to-top, keyboard/focus support, visible error/empty states, and no horizontal overflow.

## 5. Execution order for one coding agent

1. **Preflight:** inspect this directory and reference assets; confirm no app/source exists; identify available runtime, package manager, and any user-added files. Note missing factual inputs. Do not delete existing documents/images.
2. **Foundation:** scaffold one Vue/Vite application in this directory, router, local data contract, AR/EN translations and RTL/LTR, design tokens, shared layout, accessible controls, asset strategy. Choose minimal dependencies and record reasons.
3. **Page build:** implement Home and About, then Services and Service Details, then Projects and Project Details, then Contact. Resolve shared component needs once. Implement navbar/footer alongside pages, not only at the end.
4. **Hardening:** verify direct navigation to detail routes, broken/empty/optional data, AR/EN copy, responsive layouts, links, media fallback, keyboard/lightbox focus, reduced motion, metadata, and build. Fix in-scope defects without reopening approval for each ordinary fix.
5. **Evidence:** create `IMPLEMENTATION_TESTS.md` and `IMPLEMENTATION_REPORT.md` at this directory root. Report actual results and remaining business-content/deployment limitations. Do not claim a live site or message delivery without evidence.

Do not start a second architecture or create a second frontend project inside a nested folder. Check the existing directory before choosing scaffold commands so documentation and image folders are preserved.

## 6. Verification and definition of done

Minimum: successful production build; automated checks for local data/relationship helpers and core interactions where feasible; browser walkthrough of every route in AR and EN; 1440/1024/768/390px layouts; links and invalid URLs; keyboard navigation and focus; empty/one/many records; missing optional images/video; console/runtime errors; reduced motion; basic page title/description and image alt checks. Test the contact form as **non-delivering** and the real contact links separately. Record commands/tools and actual outcomes; mark unavailable checks BLOCKED.

Implementation is COMPLETE only when the in-scope UI and checks pass with no blocking defect. Mark PARTIAL when verified contact values, required business content, or essential assets are unavailable; a working scaffold alone is not a complete site. Actual domain publishing is a separate authorized step requiring hosting/domain access.

## 7. Inputs reserved for the user

Before claiming business-content completion, obtain or verify: company email; WhatsApp number in international format and permission to use it; approved company copy/mission/vision/values/location; project and service facts; final logo/images or permission to use clearly temporary assets; social URLs; and any hosting/domain choice if publication is later requested. The agent may finish safe implementation work while these are pending, but must not fabricate them.
