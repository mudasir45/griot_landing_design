# Chess Strategy Lab CTA Map

## CTA Strategy Summary

The Chess Strategy Lab page should move parents from interest to a low-risk trial class. Secondary actions support early cohort enrollment, program comparison, updates, school inquiries, and contact.

## Recommended CTA Hierarchy

Primary CTA: Book a Trial Class

Secondary CTA: Join Founding Families

Support CTA: View Programs

School CTA: Request School Demo

Support CTA: Contact Us

---

## CTA: Book a Trial Class

- Label: Book a Trial Class
- Section where it appears: Hero, Parent Fit, What Students Practice, Grade Bands, Beginner-Friendly, How Class Works, Trial Class, Founding Families, What Makes This Different, FAQ Preview, Final CTA
- Recommended route: `/trial-class?program=chess-strategy-lab` or `/free-trial?program=chess-strategy-lab`
- Purpose: Let parents evaluate Chess Strategy Lab before enrolling.
- Parent journey stage: Evaluation / trial conversion
- Route status: Needs to be created unless an equivalent trial path exists.
- Developer notes: Form should capture child grade, chess experience, parent contact, preferred schedule, and whether the child is beginner, familiar, or experienced.

## CTA: Join Founding Families

- Label: Join Founding Families
- Section where it appears: Hero, Parent Visibility, Founding Families, Final CTA
- Recommended route: `/founding-families?program=chess-strategy-lab` or `/enrollment/founding-families?program=chess-strategy-lab`
- Purpose: Convert high-intent parents into early chess cohort interest.
- Parent journey stage: Decision / early enrollment
- Route status: Needs to be created unless an equivalent founding family path exists.
- Developer notes: Do not use capacity or priority claims until cohort size and enrollment rules are approved.

## CTA: View Programs

- Label: View Programs
- Section where it appears: Hero support link, What Students Practice, What Makes This Different
- Recommended route: `/programs`
- Purpose: Let parents compare Chess Strategy Lab with Coding Foundations, Robotics Lab, Math Reasoning, and AI Literacy.
- Parent journey stage: Awareness / consideration
- Route status: Exists as the Programs Overview route.
- Developer notes: Use when parents are not ready to choose chess or want to compare options.

## CTA: Get Class Updates

- Label: Get Class Updates
- Section where it appears: Beginner-Friendly, optional class availability areas
- Recommended route: `/early-access?program=chess-strategy-lab`
- Purpose: Capture parents who are interested but not ready to book a trial or whose preferred schedule is not available.
- Parent journey stage: Awareness / soft conversion
- Route status: Needs to be created unless handled by an embedded form.
- Developer notes: Capture grade band, schedule preference, and chess experience.

## CTA: See How It Works

- Label: See How It Works
- Section where it appears: How Class Works, Parent Visibility
- Recommended route: `/#how-it-works` or `#how-class-works`
- Purpose: Help parents understand the class flow and parent visibility before taking action.
- Parent journey stage: Awareness / trust-building
- Route status: Needs anchor support.
- Developer notes: Use a page anchor if the section exists on the Chess page; use homepage anchor only if it is more accurate.

## CTA: Request School Demo

- Label: Request School Demo
- Section where it appears: School and Group Programs
- Recommended route: `/school-partnerships?program=chess-strategy-lab` or `/contact?interest=school-demo&program=chess-strategy-lab`
- Purpose: Route school, homeschool group, after-school, and community inquiries into a group program path.
- Parent journey stage: Institutional buyer path
- Route status: Needs dedicated route; `/contact` exists as fallback if supported.
- Developer notes: Form should capture organization type, group size, grade range, schedule needs, and preferred start timeline.

## CTA: Contact Us

- Label: Contact Us
- Section where it appears: Parent Fit, Grade Bands, Trial Class, School and Group Programs, FAQ Preview
- Recommended route: `/contact`
- Purpose: Give parents and organizers a path for questions that do not fit trial or enrollment.
- Parent journey stage: Support / clarification
- Route status: Exists in current site navigation.
- Developer notes: Add inquiry type if possible so chess program questions can be routed cleanly.

## CTA: Login

- Label: Login
- Section where it appears: Header
- Recommended route: App login route, likely external app or `/login`
- Purpose: Existing user access.
- Parent journey stage: Existing user
- Route status: Confirm final route behavior.
- Developer notes: Keep visually secondary to trial and enrollment CTAs.

## CTA: Signup

- Label: Signup
- Section where it appears: Header
- Recommended route: Parent signup or enrollment route after intent is known
- Purpose: Account creation for users who already know they want to proceed.
- Parent journey stage: Late decision / account creation
- Route status: Confirm final route behavior.
- Developer notes: Do not make Signup the main program page CTA.
