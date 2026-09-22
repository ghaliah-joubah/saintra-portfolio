# SPRINT 08 --- Contact Page Complete Redesign & Implementation

> **Current-scope note:** `../SPRINT_PLAN.md` controls this release. Use verified real `mailto:`/WhatsApp links. The form is visibly demo-only, validates locally, never delivers/stores or clears text, and never reports submission success. Separate approval/report gates below are superseded.

## 1. Sprint Goal

Design and implement the complete public Contact page for SAINTRA.

Route:

`/contact`

The page must provide a clear and professional way for visitors to
contact SAINTRA, understand the available contact channels, optionally
indicate the service they are interested in, describe their project or
idea through a clearly labelled demo form, and receive explicit feedback
that local validation does not send the message.

Real communication uses verified email/WhatsApp links. Real form delivery
is outside this release; do not build speculative API architecture.

This Sprint defines the required page structure, contact information
behavior, form fields, validation, demo-only behavior, neutral notice
feedback, responsive behavior, accessibility requirements, verification
criteria, and workflow gates.

The exact visual design is intentionally not prescribed. Codex/Figma may
determine the final composition, styling, spacing, decorative treatment,
form layout, information presentation, and restrained motion as long as
all functional and UX requirements below are preserved.

------------------------------------------------------------------------

## 2. Required Page Structure

The Contact page must contain:

1.  Contact Hero
2.  Contact Main Section
    -   Contact Information
    -   Contact Form
3.  Closing Message

High-level flow:

Contact Hero\
↓\
Contact Main Section\
→ Contact Information\
→ Contact Form\
↓\
Closing Message

Social media links belong inside Contact Information and must not be
implemented as a separate standalone section.

The page does not require an additional traditional CTA at the bottom
because the visitor is already on the Contact page.

------------------------------------------------------------------------

# 3. Data Source

For the current Portfolio phase, contact information, services, and
relevant social links are provided through the project's local data
layer under `src/data`.

The implementation must consume approved data rather than unnecessarily
duplicating:

-   Company email.
-   Company contact number.
-   Location.
-   Social media URLs.
-   Service records.

The current data source is temporary and must not determine the future
production architecture.

API, backend, Dashboard, CMS, database, email-delivery provider, or
another production submission architecture is outside the scope of
Sprint 08.

------------------------------------------------------------------------

# 4. Contact Hero

## Purpose

Introduce the Contact page and make the next step immediately clear to
visitors who want to discuss a project, idea, requirement, or potential
collaboration.

## Required Content

The Hero must support:

-   One clear page-level heading.
-   Short supporting copy related to contacting SAINTRA.

The copy should encourage visitors to describe what they need even if
they do not yet know which SAINTRA service is appropriate.

## Design Freedom

Codex/Figma may determine:

-   Hero composition.
-   Typography.
-   Background treatment.
-   Decorative elements.
-   Appropriate restrained motion.

The Hero must remain readable, responsive, and visually consistent with
the broader Portfolio experience.

------------------------------------------------------------------------

# 5. Contact Main Section

## Purpose

Provide the two primary contact experiences in one coherent section:

1.  Direct company/contact information.
2.  Structured contact form.

On larger screens, these areas may appear side by side if appropriate.

On narrower screens, they may stack in the order that provides the
clearest user experience.

The exact layout is left to Codex/Figma.

------------------------------------------------------------------------

# 6. Contact Information

## Purpose

Provide direct, usable ways to reach or identify SAINTRA.

The Contact Information area must support:

-   Email.
-   Company contact number / WhatsApp.
-   Location.
-   Social media links.

Information must come from the approved data layer where available.

Optional missing information must disappear cleanly rather than
producing empty rows or placeholders.

------------------------------------------------------------------------

# 7. Email Behavior

If a valid company email exists:

-   Display it clearly.
-   Make it actionable through an appropriate `mailto:` link.
-   Preserve readable visible text.

If email data is absent or invalid:

-   Do not render a broken email action.
-   Do not fabricate an email address.

The implementation must not duplicate the same email value unnecessarily
across page logic and data.

------------------------------------------------------------------------

# 8. WhatsApp / Contact Number Behavior

The displayed company contact number must provide direct WhatsApp
access.

When the visitor activates the contact number/WhatsApp action:

-   Open the appropriate WhatsApp conversation destination for the
    company number.
-   Generate/use the destination in the format required by WhatsApp.
-   Avoid unnecessary duplication of the same company number in multiple
    hardcoded locations.

The current company phone/contact value remains temporary until replaced
with approved final company data.

The page must not invent a different phone number.

If no valid contact number exists, the action must disappear safely
rather than rendering a broken WhatsApp link.

The exact visual treatment may use an icon, text link, or another
approved accessible presentation.

------------------------------------------------------------------------

# 9. Location

Display the approved company location information from the data layer.

Current approved location context:

`Syria`

The Contact page must not invent:

-   A street address.
-   Office coordinates.
-   Branches.
-   Office hours.
-   A map location.

unless those details are later provided and approved.

Location may remain informational unless an approved actionable
destination exists.

------------------------------------------------------------------------

# 10. Social Media Links

Social media links must be integrated into Contact Information.

Do not create a separate Social Media section solely for the icons.

## Requirements

For every social platform that has an approved valid URL:

-   Display the appropriate platform icon.
-   Make the icon/link actionable.
-   Treat the destination as an external link.
-   Use appropriate accessible labels.
-   Use safe external-link behavior.
-   Follow the approved project icon strategy.
-   Keep icon style coherent across platforms.

If a social platform has no approved URL:

-   Do not display a fake/inactive icon.
-   Do not display an empty placeholder.

Do not invent social media profiles.

Avoid Unicode characters as a substitute for the approved icon system
when a proper icon implementation is available.

------------------------------------------------------------------------

# 11. Contact Form

## Purpose

Allow a visitor to describe their project, idea, requirement, or
question in a structured way.

The form must support the following fields:

-   Name \*
-   Email \*
-   Phone
-   Subject \*
-   Service
-   Message \*

Fields marked with `*` are required.

The `*` must be visibly associated with the field label.

Do not mark optional fields with `*`.

------------------------------------------------------------------------

# 12. Name Field

Label concept:

`Name *`

Requirements:

-   Required.
-   Must not accept an empty value as valid.
-   Whitespace-only input must not pass validation.
-   Validation error appears directly below the field.
-   User input must be preserved if another field fails validation.

Do not impose unnecessarily restrictive assumptions about valid personal
names.

------------------------------------------------------------------------

# 13. Email Field

Label concept:

`Email *`

Requirements:

-   Required.
-   Must not accept an empty value.
-   Must pass reasonable client-side email-format validation.
-   Validation error appears directly below the field.
-   The entered value remains available when other validation errors
    occur.

Client-side validation is UX assistance and does not replace future
server-side validation.

------------------------------------------------------------------------

# 14. Phone Field

Label concept:

`Phone`

The Phone field is optional.

Requirements:

-   Leaving it empty must not prevent submission.
-   If a value is entered, perform reasonable client-side validation
    without using overly restrictive country-specific assumptions.
-   Validation error, when applicable, appears directly below the field.
-   Preserve the user's entered value if another validation error
    occurs.

Do not require a Syrian-only number format unless explicitly approved
later.

------------------------------------------------------------------------

# 15. Subject Field

Label concept:

`Subject *`

Requirements:

-   Required.
-   Must not accept an empty value.
-   Whitespace-only input must not pass validation.
-   Validation error appears directly below the field.
-   Support reasonable subject lengths without breaking the form layout.

------------------------------------------------------------------------

# 16. Service Dropdown

Label concept:

`Service`

The Service field is intentionally OPTIONAL.

A visitor may have:

-   A project idea.
-   A business problem.
-   A product concept.
-   An unclear technical requirement.

without knowing which SAINTRA service best fits the need.

The form must not force the visitor to classify their request before
contacting SAINTRA.

## Data Source

Available service options must be derived from the approved shared
Services data rather than maintaining a second hardcoded service list
inside the Contact form.

This keeps the Contact form consistent with the Services catalogue.

## Behavior

The field must:

-   Use a dropdown/select-style interaction appropriate to the design.
-   Allow no service to be selected.
-   Clearly communicate that selection is optional.
-   Remain usable by keyboard.
-   Remain usable on mobile/touch devices.
-   Use the approved service identity/value needed for future
    integration.

A placeholder may communicate an intent such as:

`Select a service (optional)`

The exact wording may be adjusted during visual/copy review.

No validation error should be produced solely because no service was
selected.

------------------------------------------------------------------------

# 17. Message Field

Label concept:

`Message *`

Requirements:

-   Required.
-   Must support multi-line input.
-   Must not accept an empty value as valid.
-   Whitespace-only content must not pass validation.
-   Validation error appears directly below the field.
-   The field must remain usable for both short and reasonably detailed
    project descriptions.
-   User content must remain preserved if another field fails
    validation.

The interface should encourage the visitor to explain the idea or
requirement even when the Service field is left empty.

------------------------------------------------------------------------

# 18. Required-Field Indicators

Required fields are:

-   Name.
-   Email.
-   Subject.
-   Message.

Optional fields are:

-   Phone.
-   Service.

Only required fields must display `*`.

The visual treatment of `*` must:

-   Be clear.
-   Remain accessible.
-   Not depend on color alone to communicate required status.

Native/semantic required-state behavior should also be used where
appropriate.

------------------------------------------------------------------------

# 19. Validation Behavior

Validation messages must appear BELOW the relevant field.

Do not place validation messages beside fields.

Conceptually:

`Email *`\
`[ email input ]`\
`Please enter a valid email address.`

## Requirements

Validation must cover at minimum:

-   Missing Name.
-   Invalid/empty Email.
-   Invalid Phone when a non-empty value is provided.
-   Missing Subject.
-   Missing Message.
-   Whitespace-only required text values.

Service is optional and does not require a selection.

## Validation UX

When validation fails:

-   Do not clear the form.
-   Preserve valid user-entered values.
-   Associate the error message with its field.
-   Use accessible invalid-state semantics where appropriate.
-   Do not communicate errors using color alone.
-   Keep error text readable.
-   Avoid showing unrelated errors.

If submission reveals multiple invalid fields, all relevant field errors
may be shown so the user can correct them efficiently.

------------------------------------------------------------------------

# 20. Demo Validation Behavior --- Current Portfolio Phase

Sprint 08 does NOT implement real backend/API message delivery.

The form must be clearly labelled as demo-only before entry and at the
submit control. It validates locally but does not send or store data.

Current flow:

User selects Submit\
↓\
Client-side validation runs\
↓\
If invalid\
→ Show field-level errors below the relevant fields\
↓\
If valid\
→ Show a neutral notice that validation passed locally but no message
was sent\
→ Keep entered values available for copying/contacting through the real
email or WhatsApp links

## Critical Requirement

The demo flow is frontend validation only. No success or delivery state
may be implied.

It must not be documented as proof that:

-   An email was sent.
-   A backend received the message.
-   A database stored the message.
-   A CRM received the lead.
-   Any production delivery occurred.

The Sprint Report and code comments/documentation, where relevant, must
accurately describe this as temporary frontend-only behavior awaiting
future integration.

------------------------------------------------------------------------

# 21. Neutral Demo Notice and Real Contact Links

After the form passes client-side validation, display a neutral,
accessible notice that explicitly says the message was **not** sent.

The message may communicate an intent such as:

`Validated locally; no message was sent.`

or another approved equivalent.

The exact final wording may be refined during visual/copy review.

## Toast Requirements

The Toast must:

-   Be noticeable without being disruptive.
-   Be accessible to assistive technologies.
-   Not rely on color alone.
-   Not permanently obstruct important page content.
-   Behave correctly across desktop and mobile.
-   Avoid duplicate notices from one validation attempt.
-   Respect the project's motion/accessibility approach.

After valid local validation:

-   Form fields must retain their values.
-   Validation errors must be cleared.
-   Real `mailto:` and WhatsApp actions use verified contact values from
    local company data; omit invalid/missing actions rather than invent
    addresses or numbers.

------------------------------------------------------------------------

# 22. Future API Integration Readiness

Future real delivery is outside this release. Do not build speculative
submission infrastructure or claim that the demo form delivers leads.

Future conceptual flow:

Form\
↓\
Client-side Validation\
↓\
Submission Layer / API Request\
↓\
Real Success or Error Response\
↓\
Appropriate User Feedback

Sprint 08 must NOT decide:

-   Backend technology.
-   API endpoint.
-   Email provider.
-   CRM.
-   Database.
-   Authentication architecture.
-   Anti-spam provider.
-   Server validation architecture.

Those decisions belong to the future integration phase.

Do not create a fake API endpoint to satisfy this Sprint.

------------------------------------------------------------------------

# 23. Submit State

The form must have a clear Submit action.

The exact button wording may be determined during copy/design review.

The implementation should be ready to support a future
submitting/loading state when real asynchronous integration is added.

Do not pretend to perform a network request if no real integration
exists.

Prevent accidental duplicate frontend submissions where appropriate.

------------------------------------------------------------------------

# 24. Closing Message

The page must end with a Closing Message rather than another traditional
Contact CTA.

Approved message:

**Have a project, an idea, or simply not sure where to start? Tell us
about it.**

## Purpose

Provide a confident and welcoming final message that reinforces that
visitors may contact SAINTRA even when:

-   Their project is still an idea.
-   Requirements are not fully defined.
-   They do not know which service they need.

## Behavior

The Closing Message does not require another `Contact Us` button because
the visitor is already on the Contact page and the form is available on
the same page.

The exact visual presentation is left to Codex/Figma.

------------------------------------------------------------------------

# 25. Optional-Data Behavior

Sprint 08 must handle missing optional contact data safely.

## Missing Email

Remove the email item/action cleanly.

## Missing Contact Number

Remove the WhatsApp/contact-number action cleanly.

## Missing Social Link

Remove that specific social icon/link.

## Missing Optional Phone Form Value

Submission remains valid.

## Missing Service Selection

Submission remains valid.

Optional-data absence must not create:

-   Empty labels.
-   Empty icon containers.
-   Broken links.
-   Dangling separators.
-   Unnecessary whitespace.

------------------------------------------------------------------------

# 26. Responsive Requirements

Verify the complete Contact page around:

-   1440px
-   1024px
-   768px
-   390px
-   320px

These are verification references rather than separate fixed designs.

The page must:

-   Avoid horizontal scrolling.
-   Keep Hero content readable.
-   Keep Contact Information readable.
-   Keep email and WhatsApp links usable.
-   Keep social icons usable.
-   Keep the form readable.
-   Prevent fields from overflowing.
-   Keep validation messages directly below their fields.
-   Keep the Service dropdown usable.
-   Keep Message input usable.
-   Keep Submit action accessible.
-   Keep Toast readable and non-obstructive.
-   Keep Closing Message readable.

On smaller screens, Contact Information and Contact Form may stack.

The exact responsive arrangement is left to Codex/Figma.

------------------------------------------------------------------------

# 27. Accessibility

Requirements include:

-   One clear page-level H1.
-   Logical heading hierarchy.
-   Semantic contact information.
-   Proper form labels.
-   Programmatic association between labels and controls.
-   Required-state semantics.
-   Clear `*` indicators for required fields.
-   Accessible optional Service control.
-   Accessible validation messages.
-   Appropriate invalid-state semantics.
-   Keyboard-accessible form controls.
-   Keyboard-accessible social links.
-   Keyboard-accessible email/WhatsApp actions.
-   Visible focus states.
-   Appropriate interactive target sizes.
-   Readable contrast.
-   Errors must not depend on color alone.
-   Neutral demo notice must be announced appropriately to assistive
    technologies.
-   Reduced-motion preferences must be respected.
-   External links must have appropriate behavior/semantics.

------------------------------------------------------------------------

# 28. Motion

Motion may be used for:

-   Hero/section presentation.
-   Form focus states.
-   Validation transitions.
-   Toast appearance/disappearance.
-   Social/contact interaction feedback.

Motion must remain:

-   Purposeful.
-   Restrained.
-   Performant.
-   Consistent with the Portfolio motion system.
-   Compatible with `prefers-reduced-motion`.

Essential contact information, validation, and non-delivery feedback must
remain understandable without animation.

------------------------------------------------------------------------

# 29. Security and Link Handling

Sprint 08 is frontend-only, but external/contact links must still be
handled safely.

Requirements:

-   Validate/sanitize the construction of WhatsApp destinations from
    approved data.
-   Use appropriate external-link security behavior.
-   Do not inject untrusted HTML from form values.
-   Do not place user-entered form data into unsafe URLs.
-   Do not expose secrets, API keys, or credentials.
-   Do not add fake backend credentials/configuration.
-   Do not claim client-side validation is a security boundary.

Real server-side validation/security will be required when real form
submission is integrated later.

------------------------------------------------------------------------

# 30. Performance

The Contact page should remain lightweight.

Do not add a large form, validation, toast, social, or animation
dependency unless there is a demonstrated need and it is approved.

Prefer the existing project stack and shared components where practical.

External font/icon/social resources remain subject to the project's
approval rules.

------------------------------------------------------------------------

# 31. Component Strategy

Reuse approved shared components and patterns where appropriate.

Relevant concepts may include:

-   AppIcon/icon strategy.
-   Shared buttons/actions.
-   Section-heading patterns.
-   Form-control patterns.
-   Motion/focus tokens.

A dedicated reusable Toast component may be introduced if it provides
clear value and follows the approved proposal.

Do not globally redesign unrelated shared components as a side effect of
Sprint 08.

Any shared component change must be reviewed for impact on existing
pages.

------------------------------------------------------------------------

# 32. Out of Scope

Sprint 08 does NOT include:

-   Real API submission.
-   Backend implementation.
-   Database storage.
-   Email delivery integration.
-   CRM integration.
-   Dashboard contact-message management.
-   Authentication.
-   Production anti-spam integration unless separately approved.
-   CAPTCHA unless separately approved.
-   Services page redesign.
-   Service Details redesign.
-   Projects page redesign.
-   Project Details redesign.
-   Home page redesign.
-   About page redesign.
-   Final Navbar/Footer redesign.
-   Full-site internationalization.
-   Map integration.
-   Invented office address.
-   Invented social profiles.
-   Unapproved global redesigns.

------------------------------------------------------------------------

# 33. Implementation Workflow

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

# 34. Pre-Implementation Proposal

Before implementation, inspect the relevant project files and report:

-   Current `/contact` implementation.
-   Current contact data shape.
-   Current email data.
-   Current phone/contact number data.
-   Current location data.
-   Current social-media data.
-   Current social icon implementation.
-   Current Services data shape.
-   Current form implementation, if any.
-   Current validation behavior, if any.
-   Current submit behavior, if any.
-   Current button/form styles.
-   Existing Toast/notification mechanism, if any.
-   Existing accessibility behavior.
-   Existing motion strategy.
-   What needs to change and why.
-   Exact files expected to be modified.
-   Exact files expected to be created.
-   Data-shape changes required.
-   Shared components affected.
-   Dependencies, if any.
-   Potential impact outside `/contact`.
-   Verification plan.

The proposal must explicitly identify whether any currently displayed
contact values are temporary.

Stop and wait for explicit user approval before meaningful source edits.

Any newly discovered scope expansion requires a new proposal.

------------------------------------------------------------------------

# 35. Visual Review Gate

Build success alone does not close Sprint 08.

User visual review must include:

-   Contact Hero.
-   Contact Information layout.
-   Email presentation/action.
-   WhatsApp/contact-number presentation/action.
-   Location.
-   Social icons and external-link behavior.
-   Contact Form layout.
-   Required `*` indicators.
-   Optional Phone field.
-   Optional Service dropdown.
-   Service options.
-   Subject field.
-   Message field.
-   Validation messages below fields.
-   Invalid-state presentation.
-   Explicit demo-only label and neutral local-validation notice.
-   No delivery/success claim and no form reset.
-   Closing Message.
-   Desktop presentation.
-   Tablet presentation.
-   Mobile presentation.

Adjustments may be requested before Sprint closure.

------------------------------------------------------------------------

# 36. Technical Verification

Verify at minimum:

-   `/contact` loads correctly.
-   Direct navigation to `/contact` works.
-   Contact Hero renders correctly.
-   Approved email data renders correctly.
-   Email action uses the correct `mailto:` behavior.
-   Contact number renders correctly.
-   Contact-number action opens the correct WhatsApp destination.
-   Location renders from approved data.
-   Only approved social links are rendered.
-   Social links open the correct external destinations.
-   Social links use accessible labels.
-   Required fields display `*`.
-   Optional Phone does not display `*`.
-   Optional Service does not display `*`.
-   Name validation works.
-   Email required validation works.
-   Email format validation works.
-   Optional Phone can remain empty.
-   Non-empty invalid Phone produces appropriate validation.
-   Subject validation works.
-   Service may remain unselected.
-   Service dropdown options are derived from approved Services data.
-   Message validation works.
-   Whitespace-only required fields fail validation.
-   Validation messages appear below the relevant field.
-   User-entered values are preserved after validation failure.
-   Valid local validation states explicitly that no message was sent.
-   The implementation does not perform or claim a real delivery.
-   Form values remain available after validation.
-   Repeated interaction does not produce duplicate notices.
-   Keyboard interaction works.
-   Focus states remain visible.
-   Toast is accessible.
-   Reduced-motion behavior works.
-   Closing Message renders correctly.
-   No horizontal overflow occurs at required widths.
-   No new blocking runtime/console errors occur.
-   Existing routes outside Sprint remain functional.
-   Required build and diff checks are executed.

------------------------------------------------------------------------

# 37. Sprint Test Documentation

Only after implementation and actual verification, create the Sprint 08
test documentation using the approved project documentation structure.

Record:

-   Tested scope.
-   Acceptance criteria.
-   Test cases.
-   Expected results.
-   Actual results.
-   PASS / FAIL / BLOCKED status.
-   Contact-information tests.
-   Email-action tests.
-   WhatsApp-action tests.
-   Social-link tests.
-   Required-field tests.
-   Email-format tests.
-   Optional-Phone tests.
-   Subject tests.
-   Optional-Service tests.
-   Service-data consistency tests.
-   Message tests.
-   Whitespace-validation tests.
-   Error-placement tests.
-   Value-preservation tests.
-   Demo-only validation tests.
-   Neutral notice tests.
-   Form-value retention tests.
-   Responsive tests.
-   Keyboard tests.
-   Accessibility checks.
-   Reduced-motion checks.
-   Regression checks.
-   Known limitations.

Never report a test as PASS if it was not actually executed or directly
verified.

------------------------------------------------------------------------

# 38. Sprint Report

After implementation, testing, and visual approval, create the Sprint 08
completion report.

Record:

-   Sprint goal.
-   Implemented requirements.
-   Final Contact page structure.
-   Final Contact Information behavior.
-   Final WhatsApp behavior.
-   Final Social Media behavior.
-   Final form fields.
-   Final required/optional field behavior.
-   Final Service dropdown behavior.
-   Final validation behavior.
-   Final temporary submission behavior.
-   Final Toast behavior.
-   Final Closing Message.
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
-   Explicit note that real API delivery remains deferred.
-   Deferred work.
-   Final Sprint status.

The report must describe the actual implementation rather than planned
work.

------------------------------------------------------------------------

# 39. Git Gate

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

# 40. Acceptance Criteria

Sprint 08 is acceptable when:

-   `/contact` provides a complete Contact experience for SAINTRA.
-   Contact Hero is complete.
-   Contact Information includes approved available Email,
    WhatsApp/contact number, Location, and Social links.
-   Contact number provides direct WhatsApp access.
-   Social icons are integrated with Contact Information rather than a
    separate section.
-   Only approved social profiles are displayed.
-   Contact Form includes Name, Email, Phone, Subject, Service, Message,
    and Submit.
-   Name is required.
-   Email is required.
-   Phone is optional.
-   Subject is required.
-   Service is optional.
-   Message is required.
-   Only required fields display `*`.
-   Service options come from the approved Services data.
-   Visitors may submit the frontend form without selecting a service.
-   Validation messages appear below the relevant field.
-   Invalid form submission preserves user-entered values.
-   Valid local validation triggers only a neutral non-delivery notice.
-   Demo-only status is visible before entry and at submit.
-   The form does not send/store data or reset entered values.
-   Closing Message uses the approved intent:
    `Have a project, an idea, or simply not sure where to start? Tell us about it.`
-   No redundant final Contact CTA is required.
-   Missing optional contact data disappears safely.
-   Page is responsive without horizontal overflow.
-   Accessibility and reduced-motion requirements are preserved.
-   No unsupported company/contact/social information is invented.
-   No out-of-scope page is redesigned.
-   Required technical verification succeeds or limitations are
    documented.
-   User visual approval is received.

------------------------------------------------------------------------

# 41. Definition of Done

Sprint 08 is DONE only when:

1.  All approved Sprint 08 requirements are implemented.
2.  Contact Hero is complete.
3.  Contact Information is complete.
4.  Email action is complete.
5.  WhatsApp/contact-number action is complete.
6.  Location presentation is complete.
7.  Social Media links are complete.
8.  Contact Form structure is complete.
9.  Required/optional indicators are correct.
10. Name validation is complete.
11. Email validation is complete.
12. Optional Phone behavior is complete.
13. Subject validation is complete.
14. Optional Service dropdown is complete and data-driven.
15. Message validation is complete.
16. Validation errors render below fields.
17. Demo-only local validation behavior is complete.
18. Neutral non-delivery notice is complete.
19. Form-value retention behavior is complete.
20. Closing Message is complete.
21. Responsive behavior is verified.
22. Accessibility and reduced-motion behavior are verified.
23. Required technical verification is complete.
24. No known blocking regression remains.
25. User visual review is complete and approved.
26. Sprint 08 test documentation records actual results.
27. Sprint 08 completion report records actual implementation.
28. Real API/backend delivery remains explicitly deferred.
29. No future Sprint work is mixed into Sprint 08.
30. Git changes are reviewed.
31. Commit/push occurs only after explicit user approval.

If any required item remains incomplete, Sprint 08 remains IN PROGRESS.
