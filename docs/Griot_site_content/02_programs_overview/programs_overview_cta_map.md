# Programs Overview CTA Map

## CTA Strategy Summary

The Programs Overview page should help parents move from comparison to a clear next step. The primary action is a trial class. Secondary actions support early cohorts, program detail pages, waitlists, updates, school inquiries, and contact.

## Approved CTA System

Primary CTA: Book a Trial Class

Secondary CTA: Join Founding Families

Program CTAs: View Chess Program, View Coding Program, View Robotics Program, View Math Program, View AI Program

Waitlist CTAs: Join Math Waitlist, Get AI Literacy Updates, Get Class Updates

School CTA: Request School Demo

Support CTA: Contact Us

---

## CTA: Book a Trial Class

- Label: Book a Trial Class
- Section where it appears: Hero, Parent Decision, Recommended Starting Points, Program Comparison, How to Choose, Learning Format, Trial Class, Founding Families, FAQ Preview, Final CTA
- Recommended route: `/trial-class` or `/free-trial`
- Purpose: Give parents a low-risk way to see the class format before enrolling.
- Parent journey stage: Evaluation / trial conversion
- Route status: Needs to be created unless an equivalent trial registration path exists.
- Developer notes: The form should collect child grade, program interest, parent contact, preferred schedule, and permission to follow up.

## CTA: Join Founding Families

- Label: Join Founding Families
- Section where it appears: Hero, Founding Families, Final CTA
- Recommended route: `/founding-families` or `/enrollment/founding-families`
- Purpose: Convert high-intent families into early cohort interest.
- Parent journey stage: Decision / early enrollment
- Route status: Needs to be created unless an equivalent founding family path exists.
- Developer notes: Confirm the offer details before adding scarcity or priority-language claims.

## CTA: View Programs

- Label: View Programs
- Section where it appears: Parent Decision, Trial Class
- Recommended route: `/programs`
- Purpose: Keep parents in the comparison flow when they are not ready to choose a trial.
- Parent journey stage: Awareness / consideration
- Route status: Exists as the Programs Overview route.
- Developer notes: Use as a general support CTA, not as the main action on the Programs page itself.

## CTA: View Chess Program

- Label: View Chess Program
- Section where it appears: Program Areas, Program Comparison
- Recommended route: `/programs/chess-strategy-lab`
- Purpose: Route parents interested in focus, patience, planning, and decision-making.
- Parent journey stage: Consideration
- Route status: Needs to be created.
- Developer notes: Can temporarily route to an approved course detail page only if the parent-facing program page is not ready.

## CTA: View Coding Program

- Label: View Coding Program
- Section where it appears: Program Areas, Program Comparison
- Recommended route: `/programs/coding-foundations`
- Purpose: Route parents interested in coding, project creation, logic, and debugging.
- Parent journey stage: Consideration
- Route status: Needs to be created.
- Developer notes: Keep Coding Foundations separate from AI Literacy in navigation and copy.

## CTA: View Robotics Program

- Label: View Robotics Program
- Section where it appears: Program Areas, Program Comparison
- Recommended route: `/programs/robotics-lab`
- Purpose: Route parents interested in hands-on building, testing, and troubleshooting.
- Parent journey stage: Consideration / waitlist
- Route status: Needs to be created.
- Developer notes: If the program is not open yet, the page should clearly show the public status label and waitlist action.

## CTA: View Math Program

- Label: View Math Program
- Section where it appears: Program Areas
- Recommended route: `/programs/math-reasoning`
- Purpose: Route parents interested in logic, patterns, and math confidence.
- Parent journey stage: Consideration / waitlist
- Route status: Needs to be created.
- Developer notes: If the page is not ready, use the Math waitlist action instead of sending parents to a blank route.

## CTA: Join Math Waitlist

- Label: Join Math Waitlist
- Section where it appears: Recommended Starting Points, Program Areas, Program Comparison
- Recommended route: `/program-waitlist?program=math-reasoning`
- Purpose: Capture demand for Math Reasoning by grade band and schedule.
- Parent journey stage: Consideration / soft conversion
- Route status: Needs to be created.
- Developer notes: Form should capture child grade, schedule preference, and parent concerns about math confidence.

## CTA: View AI Program

- Label: View AI Program
- Section where it appears: Program Areas
- Recommended route: `/programs/ai-literacy`
- Purpose: Route parents interested in responsible, age-appropriate AI education.
- Parent journey stage: Consideration / early access
- Route status: Needs to be created.
- Developer notes: If the program page is not ready, use the AI Literacy updates action instead.

## CTA: Get AI Literacy Updates

- Label: Get AI Literacy Updates
- Section where it appears: Recommended Starting Points, Program Areas, Program Comparison
- Recommended route: `/early-access?program=ai-literacy`
- Purpose: Capture interest from families waiting for AI Literacy openings.
- Parent journey stage: Awareness / soft conversion
- Route status: Needs to be created unless handled by an embedded form.
- Developer notes: Keep AI Literacy separate from Coding Foundations in interest capture.

## CTA: Get Class Updates

- Label: Get Class Updates
- Section where it appears: Recommended Starting Points, Program Comparison, Learning Format, Final CTA support areas
- Recommended route: `/early-access`
- Purpose: Capture families who are interested but not ready for a trial or whose preferred program is not open yet.
- Parent journey stage: Awareness / soft conversion
- Route status: Needs to be created unless handled by an embedded form.
- Developer notes: Use this for general class opening, waitlist, and cohort update capture.

## CTA: Request School Demo

- Label: Request School Demo
- Section where it appears: School and Group Programs
- Recommended route: `/school-partnerships` or `/contact?interest=school-demo`
- Purpose: Route schools, homeschool groups, and organizations into a separate inquiry path.
- Parent journey stage: Institutional buyer path
- Route status: Needs dedicated route; `/contact` exists as a fallback if supported.
- Developer notes: The form should ask for organization type, student age range, group size, preferred programs, and timeline.

## CTA: Contact Us

- Label: Contact Us
- Section where it appears: Grade Bands, How to Choose, School and Group Programs, FAQ Preview
- Recommended route: `/contact`
- Purpose: Give parents and school contacts a general question path.
- Parent journey stage: Support / clarification
- Route status: Exists in the current site navigation.
- Developer notes: Add inquiry categories when possible so messages can be routed by parent, school, trial, waitlist, or program question.

## CTA: See How It Works

- Label: See How It Works
- Section where it appears: Parent Visibility
- Recommended route: `/#how-it-works`
- Purpose: Explain parent journey, dashboard visibility, and class flow.
- Parent journey stage: Awareness / trust-building
- Route status: Needs anchor support if not already present.
- Developer notes: Use this only if the homepage has a matching section id.
