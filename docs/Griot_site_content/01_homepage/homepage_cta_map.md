# Homepage CTA Map

## CTA Strategy Summary

The homepage should move parents through a clear decision path:

1. Understand what Griot Academy offers.
2. Compare the main program areas.
3. Choose a low-friction next step.
4. Enter a trial, early cohort, update list, or school inquiry flow.

Account creation should not be the main marketing CTA. It should happen after a parent chooses a trial, cohort, enrollment path, or program interest.

## Recommended CTA Hierarchy

Primary CTA: Book a Trial Class

Secondary CTA: Join Founding Families

Support CTA: View Programs

School CTA: Request School Demo

---

## CTA: Book a Trial Class

- Section where it appears: Hero, Program Overview, Student Outcomes, How It Works, Parent Dashboard, Student Experience, Trial Class, Final CTA, Footer CTA
- Recommended route: `/free-trial` or `/trial-class`
- Purpose: Give parents a clear, low-risk way to experience a class before enrolling.
- Parent journey stage: Evaluation / trial conversion
- Route status: Needs to be created unless an equivalent trial registration route already exists.
- Developer notes: This should be the primary marketing CTA. Trial signup should collect parent name, email, child grade, program interest, preferred schedule, and permission to follow up.

## CTA: Join Founding Families

- Section where it appears: Hero, Founding Families, Final CTA, Footer CTA
- Recommended route: `/founding-families` or `/enrollment/founding-families`
- Purpose: Convert high-intent parents into early cohort interest or founding family enrollment.
- Parent journey stage: Decision / early enrollment
- Route status: Needs to be created unless an equivalent founding family route already exists.
- Developer notes: Present this as early cohort access and feedback participation. Do not imply guaranteed placement until cohort limits and schedule are confirmed.

## CTA: View Programs

- Section where it appears: Hero support link, Parent Problem, Program Overview, Student Outcomes, Student Experience, Trial Class, Email Capture, Final CTA
- Recommended route: `/programs`
- Purpose: Let parents compare chess, coding, robotics, math, AI literacy, and STEM options.
- Parent journey stage: Awareness / consideration
- Route status: Exists in current preview as `/programs`.
- Developer notes: Use this label instead of "Explore Programs" when a more direct action is preferred. "Compare Programs" can be used on the Programs Overview page.

## CTA: Get Class Updates

- Section where it appears: How It Works, Safety and Trust, Email Capture
- Recommended route: `/early-access` or embedded interest form
- Purpose: Capture parents who are interested but not ready to choose a trial or cohort.
- Parent journey stage: Awareness / soft conversion
- Route status: Needs to be created unless handled by an embedded form or CRM capture.
- Developer notes: This replaces vague "early access" language when the offer is updates about class openings, trial dates, and cohort availability.

## CTA: See How It Works

- Section where it appears: Parent Problem, Parent Dashboard / Progress Visibility
- Recommended route: `#how-it-works` homepage anchor
- Purpose: Help parents understand the process before committing.
- Parent journey stage: Awareness / education
- Route status: Needs anchor support if not already present.
- Developer notes: Use when the parent needs clarity, not urgency.

## CTA: Request School Demo

- Section where it appears: School Partnership Teaser, Footer CTA
- Recommended route: `/school-partnerships` or `/contact?interest=school-demo`
- Purpose: Route school leaders, homeschool groups, and enrichment coordinators into an institutional inquiry path.
- Parent journey stage: Institutional buyer path / partnership inquiry
- Route status: Needs to be created if a dedicated school partnerships page does not exist. Current preview has `/contact`.
- Developer notes: Use "Request School Demo" instead of "Request School Partnership" when the next action is likely a conversation or walkthrough.

## CTA: Contact Us

- Section where it appears: Safety and Trust, School Partnership Teaser, Footer
- Recommended route: `/contact`
- Purpose: Give parents and schools a general inquiry path.
- Parent journey stage: Support / questions / partnership inquiry
- Route status: Exists in current preview as `/contact`.
- Developer notes: Contact form should include inquiry type so school, parent, trial, and program questions can be routed cleanly.

## CTA: Login

- Section where it appears: Header
- Recommended route: App login route, likely external app or `/login`
- Purpose: Serve existing parents, students, teachers, and administrators.
- Parent journey stage: Existing user access
- Route status: Current header uses a Login button. Confirm final route behavior.
- Developer notes: Keep this available but visually secondary to the marketing CTAs.

## CTA: Signup

- Section where it appears: Header
- Recommended route: Parent signup or enrollment route after intent is known
- Purpose: Account creation for users who already know they want to proceed.
- Parent journey stage: Late decision / account creation
- Route status: Current header includes Signup.
- Developer notes: Do not use generic Signup as the dominant homepage CTA. Trial, founding family, and program-selection flows should come first.

## CTA: View Curriculum / View All / Details

- Section where it appears: Current hero and course catalog
- Recommended route: `/programs` and approved program detail pages
- Purpose: Existing route into program discovery.
- Parent journey stage: Consideration
- Route status: `/programs` exists. Individual final program pages still need content approval.
- Developer notes: Replace broad "View Curriculum" with "View Programs" or a specific program CTA until curriculum content is ready.

## Retired Generic Final CTA

- Section where it appears: Current final CTA
- Recommended route: Replace with `Book a Trial Class`
- Purpose: Current broad CTA; should be made more specific.
- Parent journey stage: Decision
- Route status: Current CTA routes to `/signup`; recommended replacement route needs to be created.
- Developer notes: Retire broad journey-style labels. They sound generic and do not tell the parent what happens next.

## CTA: Partner With Us / Inquire About Institutional Licensing

- Section where it appears: Current institutional CTA and final CTA
- Recommended route: `/school-partnerships` or `/contact?interest=school-demo`
- Purpose: Convert school and district interest.
- Parent journey stage: Institutional buyer path
- Route status: Current preview routes to `/contact`; dedicated partnership route recommended.
- Developer notes: Replace with "Request School Demo" for a clearer next step.
