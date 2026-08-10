# Collaborative --- Product & Implementation Specification

> **Purpose of this document:** This file is the canonical product
> context for AI coding tools and engineers implementing the
> Collaborative platform. It explains the product vision, terminology,
> user journeys, MVP scope, domain model, business rules, UX principles,
> privacy model, and suggested technical architecture.

------------------------------------------------------------------------

## 1. Product summary

**Collaborative** is a digital collaboration network where **projects
meet skills so people can build together**.

Collaborative is **not a freelance marketplace**.

The platform does not primarily connect a paying client with a service
provider. It connects:

-   people who have ideas with people who have complementary skills;
-   talents who want to contribute with projects they believe in;
-   existing product teams with people who can help them grow;
-   project owners who want immediate execution with the internal
    **Collaborative Team**.

The central product philosophy is:

> **Tu n'as pas besoin d'avoir toutes les compétences pour lancer une
> idée. Tu as besoin de trouver les bonnes personnes avec qui la
> construire.**

The core value exchange is:

> **L'opportunité de construire ensemble.**

A concise positioning statement:

> **Collaborative est le réseau où les projets rencontrent les
> compétences pour construire ensemble.**

The product journey is:

> **Rencontrer → Constituer → Co-construire → Lancer**

------------------------------------------------------------------------

## 2. Problem

Many professionals understand real problems in their industries and have
ideas for digital solutions, but:

-   they do not have technical skills;
-   finding reliable developers or other collaborators is difficult;
-   some developers request a large ownership share before proving
    collaboration fit;
-   implementation can be slow;
-   a founder may need multiple skills, not only a developer;
-   developers and makers can build products but may lack sales,
    marketing, operations, or market follow-up;
-   products are sometimes launched on app stores or the web and then
    abandoned because the builder has no team;
-   strong ideas remain untested because the right people never meet.

The deeper problem is therefore not simply "access to developers."

It is:

> **People with projects and people with useful complementary skills
> have difficulty finding each other, establishing trust, and moving
> from a match to actual co-construction.**

------------------------------------------------------------------------

## 3. Product thesis

Collaborative should solve three successive problems:

1.  **Discovery** --- help projects and relevant talents discover each
    other.
2.  **Team formation** --- help compatible people decide to collaborate.
3.  **Execution** --- help a newly formed team move toward an MVP and
    the market.

Matching alone is not the product.

A successful Collaborative outcome is not:

> "Two users exchanged messages."

A successful outcome is:

> "People who would not otherwise have met started building a project
> together."

------------------------------------------------------------------------

## 4. Core user intents

The platform must be designed around four primary entry intents.

### 4.1 I have an idea

**User statement:**

> J'ai une idée → Je cherche des personnes pour la construire.

Typical needs:

-   validate or frame the project;
-   find technical profiles;
-   find product/design/business/marketing profiles;
-   form an initial team;
-   protect sensitive information;
-   build an MVP.

### 4.2 I have skills

**User statement:**

> J'ai des compétences → Je cherche un projet auquel contribuer.

A user can join Collaborative without having a project.

Example talent profile:

``` text
Développeur Flutter
Disponible pour rejoindre un projet
Intéressé par : Fintech, mobilité, SaaS
Implication : soirées/week-ends
Ouvert à : co-founder / equity / co-construction
```

### 4.3 I already built a product

**User statement:**

> J'ai déjà construit un produit → Je cherche des personnes pour le
> développer sur le marché.

Typical needs:

-   growth;
-   business development;
-   sales;
-   marketing;
-   product management;
-   technical reinforcement;
-   operations;
-   community building.

### 4.4 I want to move immediately

**User statement:**

> Je veux avancer immédiatement → Je travaille avec l'équipe
> Collaborative.

This route does not depend on public matching.

The internal Collaborative Team can provide:

-   digital/product expertise;
-   product framing;
-   UX/UI;
-   development;
-   MVP implementation;
-   marketing support;
-   go-to-market support;
-   remote team execution.

This is an important differentiator from pure co-founder matching
networks.

------------------------------------------------------------------------

## 5. What Collaborative is NOT

AI agents and developers must preserve these boundaries.

Collaborative is **not**:

-   Upwork;
-   Fiverr;
-   Malt;
-   a job board;
-   a generic recruitment platform;
-   a marketplace where clients post budgets and freelancers bid;
-   a platform whose primary transaction is "money in exchange for a
    deliverable."

Avoid product language such as:

-   Hire freelancer
-   Place bid
-   Client
-   Contractor
-   Gig
-   Fixed-price job
-   Hourly job

Prefer:

-   Collaborator
-   Talent
-   Builder / Co-builder
-   Contributor
-   Project
-   Opportunity
-   Collaboration
-   Join project
-   Propose collaboration
-   Build together

Compensation may exist between collaborators, including equity, revenue
share, cash, hybrid arrangements, or unpaid early exploration, but
**compensation is not the defining mechanic of the network**.

------------------------------------------------------------------------

## 6. Main competitive differentiation

Collaborative combines these capabilities:

  Capability                      Collaborative
  ------------------------------- ---------------
  Find a co-founder               Yes
  Talent searches for a project   Yes
  Project searches for skills     Yes
  Multi-profile co-construction   Yes
  Ready-to-start internal team    Yes
  MVP / market support            Yes

The product should not reduce "collaboration" to co-founder matching.

A project may need:

-   one developer;
-   two developers + a designer;
-   product + marketing;
-   business + technical profiles;
-   a temporary contributor;
-   a future co-founder;
-   several co-builders.

The relationship may evolve over time.

------------------------------------------------------------------------

## 7. Initial market / pilot

The initial practical launch context is **Silikin Village in Kinshasa**,
an ecosystem containing entrepreneurs, tech profiles, professionals, and
innovation actors.

Treat this as an initial community/pilot, not a permanent geographical
restriction.

The pilot should optimize for **real collaborations started**, not
vanity registration numbers.

Example pilot funnel:

``` text
Founders / project owners
        ↓
Publish opportunities
        ↓
Talents create profiles
        ↓
Relevant discovery
        ↓
Expressions of interest
        ↓
Mutual acceptance
        ↓
Conversation
        ↓
Collaboration starts
        ↓
Project moves toward MVP / market
```

A strong pilot KPI is:

**Number of collaborations actually started.**

------------------------------------------------------------------------

# 8. MVP strategy

## 8.1 Platform

The MVP should be a **responsive web application / PWA**.

Reasons:

-   QR-code acquisition at physical events;
-   zero app-store installation friction;
-   desktop-friendly project creation;
-   mobile-friendly discovery;
-   easier and faster iteration;
-   one codebase;
-   PWA can later support installability and notifications.

Native mobile applications are a later phase once repeat usage,
messaging, matching notifications, and retention justify them.

------------------------------------------------------------------------

# 9. MVP feature scope

The MVP should focus on this loop:

> **Discover → Create profile → Publish/Join opportunity → Match →
> Discuss → Collaborate**

## P0 --- required

1.  Authentication
2.  Onboarding
3.  Talent profiles
4.  Project profiles
5.  Collaboration opportunities
6.  Opportunity discovery/feed
7.  Talent discovery
8.  Expression of interest
9.  Project invitation to talent
10. Mutual matching
11. Basic conversation/messaging
12. Notifications
13. Privacy levels
14. Collaboration workspace/status
15. Collaborative Team contact/request flow
16. Search/filtering
17. Reporting/blocking
18. Basic moderation/admin tools

## P1 --- after initial validation

-   recommendation scoring;
-   saved projects/talents;
-   richer matching;
-   NDA acceptance;
-   verification badges;
-   project updates;
-   collaboration milestones;
-   endorsements;
-   event/community integration;
-   push notifications;
-   project analytics.

## P2 --- later

-   native mobile apps;
-   advanced AI matching;
-   AI project framing assistant;
-   integrated project management;
-   contribution/equity agreements;
-   cap table integrations;
-   video introductions;
-   community events;
-   accelerator/hub portals;
-   university portals;
-   multi-community deployments.

------------------------------------------------------------------------

# 10. Information architecture

Suggested primary navigation for authenticated users:

``` text
Home / Discover
Opportunities
Talents
My Projects
Messages
Notifications
Profile
```

Secondary:

``` text
Collaborative Team
Saved
Settings
Help
Report / Safety
```

For a project owner:

``` text
My Projects
  └── Project
      ├── Overview
      ├── Opportunity
      ├── Interested talents
      ├── Team
      ├── Messages
      ├── Collaboration
      └── Settings / Privacy
```

------------------------------------------------------------------------

# 11. Authentication

Support at minimum:

-   email + password;
-   Google authentication if practical.

Later:

-   LinkedIn;
-   GitHub.

Required flows:

-   sign up;
-   sign in;
-   email verification;
-   forgot password;
-   reset password;
-   logout;
-   account deletion.

Do not require users to identify permanently as either "founder" or
"talent."

A single person may simultaneously:

-   own a project;
-   contribute to another project;
-   have skills;
-   seek collaborators.

Roles are contextual, not rigid account types.

------------------------------------------------------------------------

# 12. Onboarding

The first important question should be:

> **Qu'est-ce qui t'amène sur Collaborative ?**

Allow one or multiple intentions:

``` text
[ ] J'ai une idée
[ ] J'ai des compétences
[ ] J'ai déjà un produit
[ ] Je veux avancer immédiatement
```

Then collect only information needed to produce value quickly.

Suggested onboarding:

### Identity

-   first name;
-   last name;
-   profile photo;
-   city;
-   country;
-   remote availability;
-   short bio.

### Skills

-   primary role;
-   skills;
-   years/level of experience;
-   portfolio / LinkedIn / GitHub optional.

### Interests

-   sectors;
-   types of products;
-   technologies;
-   causes/domains.

### Collaboration preferences

-   weekly availability;
-   preferred working mode;
-   open to co-founder;
-   open to equity;
-   open to revenue share;
-   open to paid collaboration;
-   open to exploratory co-building;
-   remote / hybrid / local.

### Current objective

One or more core intents.

Onboarding should be progressive. Avoid a long mandatory form before the
user can see the network.

------------------------------------------------------------------------

# 13. Talent profile

A Talent Profile should communicate **capability + interest +
availability + collaboration intent**.

Example:

``` text
Patrick M.
Développeur Flutter
Kinshasa · Remote

À propos
Mobile developer interested in financial inclusion and mobility products.

Skills
Flutter
Firebase
Node.js
API integration

Interested in
Fintech
SaaS
Mobility

Availability
10–15h/week
Evenings & weekends

Open to
Co-founder
Equity
Co-construction

Projects
2 collaborations
```

## Profile fields

``` ts
UserProfile {
  id
  userId
  firstName
  lastName
  headline
  bio
  avatarUrl
  city
  country
  timezone
  remotePreference
  primaryRole
  experienceLevel
  availabilityHoursPerWeek
  availabilityText
  collaborationModes[]
  interests[]
  skills[]
  languages[]
  linkedinUrl?
  githubUrl?
  portfolioUrl?
  verificationStatus
  profileVisibility
  createdAt
  updatedAt
}
```

------------------------------------------------------------------------

# 14. Skills

Skills should be normalized entities, not only free-text strings.

Example categories:

### Technology

-   Flutter
-   React
-   Next.js
-   Node.js
-   Python
-   Django
-   Laravel
-   Java
-   Kotlin
-   Swift
-   Firebase
-   PostgreSQL
-   DevOps
-   AI/ML

### Product

-   Product Management
-   Product Strategy
-   UX Research
-   UI Design
-   UX Design

### Business

-   Business Development
-   Sales
-   Partnerships
-   Finance
-   Operations
-   Strategy

### Marketing

-   Growth
-   Content
-   Community
-   Social Media
-   Performance Marketing
-   Branding

Allow admin-managed skills and optionally user-suggested skills pending
normalization.

------------------------------------------------------------------------

# 15. Projects

A project is the private canonical object representing what a team wants
to build.

A project is **not automatically public**.

``` ts
Project {
  id
  ownerId
  name
  slug
  shortDescription
  fullDescription
  sector
  stage
  locationMode
  city?
  country?
  websiteUrl?
  logoUrl?
  visibility
  status
  createdAt
  updatedAt
}
```

Suggested stages:

``` text
IDEA
PROBLEM_VALIDATED
CONCEPT
PROTOTYPE
MVP_IN_PROGRESS
MVP_LIVE
EARLY_TRACTION
GROWTH
```

Project statuses:

``` text
DRAFT
ACTIVE
PAUSED
ARCHIVED
```

------------------------------------------------------------------------

# 16. Collaboration Opportunities

The public object is an **Opportunity**, not necessarily the complete
Project.

This distinction is critical.

> **The project stays private. The collaboration need becomes public.**

Example:

``` text
HealthTech · Prototype

Recherche développeur mobile + profil marketing

Projet digital en phase MVP dans le secteur de la santé.

Skills needed
Flutter
Growth Marketing

Commitment
10 hours/week

Location
Kinshasa / Remote

Collaboration
Co-construction / equity possible
```

## Opportunity model

``` ts
Opportunity {
  id
  projectId
  createdBy
  title
  publicSummary
  sector
  projectStage
  locationMode
  city?
  country?
  weeklyCommitment?
  collaborationModes[]
  skillsNeeded[]
  rolesNeeded[]
  status
  publishedAt?
  expiresAt?
  createdAt
  updatedAt
}
```

Statuses:

``` text
DRAFT
PUBLISHED
PAUSED
FILLED
CLOSED
```

A project can eventually have multiple opportunities, although MVP UI
may initially encourage one active opportunity per project.

------------------------------------------------------------------------

# 17. Privacy architecture

Idea theft is a core trust concern.

The platform must use **progressive disclosure**.

## Level 1 --- Public

Visible to the network:

-   sector;
-   general project category;
-   public summary;
-   stage;
-   skills needed;
-   roles needed;
-   collaboration mode;
-   commitment;
-   location mode.

Do not require:

-   secret mechanics;
-   complete business model;
-   proprietary documents;
-   detailed technical architecture;
-   sensitive customer information.

## Level 2 --- Approved candidate

Visible when the project owner accepts an expression of interest or
explicitly shares access:

-   deeper problem statement;
-   target audience;
-   product concept;
-   MVP objective;
-   selected private notes/resources.

## Level 3 --- Confirmed collaborator

Visible after collaboration confirmation and, later, optional NDA
acceptance:

-   detailed project documents;
-   specifications;
-   private roadmap;
-   prototypes;
-   sensitive links;
-   team workspace;
-   confidential files.

Implement access control at the API/database layer, not only in the UI.

------------------------------------------------------------------------

# 18. Expressions of interest

A talent can select:

> **Je veux contribuer**

This creates an Expression of Interest.

``` ts
ExpressionOfInterest {
  id
  opportunityId
  talentUserId
  message?
  proposedRole?
  status
  createdAt
  respondedAt?
}
```

Statuses:

``` text
PENDING
ACCEPTED
DECLINED
WITHDRAWN
```

Rules:

-   a user cannot apply twice to the same opportunity while an active
    expression exists;
-   project owners can view the applicant's profile;
-   accepting can unlock Level 2 information;
-   acceptance does not automatically make someone a confirmed team
    member.

------------------------------------------------------------------------

# 19. Project-to-talent invitations

Discovery must work in both directions.

A project owner can find a talent and choose:

> **Proposer une collaboration**

``` ts
CollaborationInvitation {
  id
  projectId
  opportunityId?
  senderUserId
  recipientUserId
  message?
  proposedRole?
  status
  createdAt
  respondedAt?
}
```

Statuses:

``` text
PENDING
ACCEPTED
DECLINED
WITHDRAWN
```

------------------------------------------------------------------------

# 20. Match

A Match represents sufficient mutual interest to start a deeper
conversation.

Possible triggers:

-   talent expresses interest → project accepts;
-   project invites talent → talent accepts.

``` ts
Match {
  id
  projectId
  opportunityId?
  userId
  source
  status
  createdAt
}
```

Match status:

``` text
ACTIVE
CLOSED
CONVERTED_TO_COLLABORATION
```

The MVP does **not** require Tinder-style swiping.

The UI should favor deliberate discovery over addictive mechanics.

------------------------------------------------------------------------

# 21. Messaging

After mutual interest, users need a lightweight conversation layer.

Minimum:

``` ts
Conversation {
  id
  projectId?
  createdAt
}

ConversationParticipant {
  conversationId
  userId
  joinedAt
}

Message {
  id
  conversationId
  senderId
  body
  createdAt
  readAt?
}
```

MVP:

-   text messages;
-   timestamps;
-   unread state;
-   conversation list;
-   basic links.

Later:

-   attachments;
-   voice;
-   calls;
-   group channels;
-   project rooms.

Do not attempt to build Slack in the MVP.

------------------------------------------------------------------------

# 22. Collaboration

A conversation/match can become an actual Collaboration.

This transition is one of the most important events in the product.

CTA example:

> **Commencer la collaboration**

Both parties should confirm.

``` ts
Collaboration {
  id
  projectId
  status
  startedAt
  endedAt?
  collaborationMode
  notes?
}
```

``` ts
CollaborationMember {
  collaborationId
  userId
  role
  ownershipLabel?
  joinedAt
  leftAt?
}
```

Statuses:

``` text
PENDING_CONFIRMATION
ACTIVE
PAUSED
COMPLETED
ENDED
```

The product should measure this conversion:

``` text
Opportunity
→ Interest
→ Match
→ Conversation
→ Collaboration
```

------------------------------------------------------------------------

# 23. Collaboration modes

Use a controlled enum plus optional explanatory text.

``` text
CO_FOUNDER
EQUITY
REVENUE_SHARE
CO_BUILD
PAID
HYBRID
EXPLORATORY
OTHER
```

Important:

The platform should never imply that equity agreements are legally
completed simply because a user selected "Equity."

Display appropriate informational disclaimers.

------------------------------------------------------------------------

# 24. Discovery

There are two primary discovery surfaces.

## 24.1 Discover Opportunities

Cards should show:

-   sector;
-   title;
-   project stage;
-   public summary;
-   skills needed;
-   commitment;
-   location;
-   collaboration modes;
-   current team count where appropriate;
-   CTA: **Je veux contribuer**.

Filters:

-   skills;
-   roles;
-   sector;
-   stage;
-   location;
-   remote;
-   availability;
-   collaboration mode.

## 24.2 Discover Talents

Cards should show:

-   name;
-   headline;
-   location;
-   top skills;
-   sectors/interests;
-   availability;
-   collaboration modes;
-   optional compatibility score;
-   CTA: **Voir le profil** / **Proposer une collaboration**.

Filters:

-   skill;
-   role;
-   interest;
-   city/country;
-   remote;
-   availability;
-   collaboration mode.

------------------------------------------------------------------------

# 25. Matching and recommendations

Do not over-engineer AI matching in V1.

Start with deterministic scoring.

Example conceptual score:

``` text
skill overlap
+ role match
+ sector interest
+ availability compatibility
+ location compatibility
+ collaboration-mode compatibility
+ project-stage preference
```

Example:

``` ts
score =
  skillScore * 0.35 +
  interestScore * 0.20 +
  availabilityScore * 0.15 +
  collaborationModeScore * 0.15 +
  locationScore * 0.10 +
  stageScore * 0.05
```

Weights should be configurable.

Do not expose a fake high-precision number unless enough data exists.

Prefer labels when confidence is weak:

``` text
Strong match
Good match
Relevant
```

AI matching can be added after real collaboration data exists.

------------------------------------------------------------------------

# 26. Collaborative Team route

This is a distinct product route.

CTA:

> **Travailler avec l'équipe Collaborative**

or

> **Parler à Collaborative**

Request form:

``` text
Project name
What are you trying to build?
Current stage
What already exists?
What do you need?
Desired timeline
Contact information
Optional documents
```

Needs:

``` text
Product strategy
UX/UI
Development
MVP
Marketing
Go-to-market
Other
```

Store as:

``` ts
CollaborativeTeamRequest {
  id
  userId
  projectId?
  summary
  stage
  needs[]
  timeline?
  status
  createdAt
}
```

Statuses:

``` text
NEW
REVIEWING
CONTACTED
QUALIFIED
IN_PROGRESS
CLOSED
```

------------------------------------------------------------------------

# 27. Notifications

MVP notification events:

-   someone expresses interest in your opportunity;
-   your expression was accepted;
-   your expression was declined;
-   project invited you;
-   invitation accepted;
-   new match;
-   new message;
-   collaboration confirmation requested;
-   collaboration confirmed;
-   relevant opportunity recommendation.

Channels:

-   in-app required;
-   email recommended;
-   web push later.

------------------------------------------------------------------------

# 28. Trust & safety

Trust is a product feature.

Required MVP controls:

-   report user;
-   report project/opportunity;
-   block user;
-   admin moderation;
-   account suspension;
-   opportunity removal;
-   abuse reason categories.

Potential verification:

``` text
EMAIL_VERIFIED
IDENTITY_VERIFIED
PROFESSIONAL_VERIFIED
COMMUNITY_VERIFIED
```

Do not overstate verification.

If only email is verified, never visually imply identity verification.

------------------------------------------------------------------------

# 29. NDA / confidentiality --- later P1

Optional digital NDA flow before Level 3 access.

Store:

``` ts
ConfidentialityAgreement {
  id
  projectId
  userId
  agreementVersion
  acceptedAt
  ipHash?
  status
}
```

UI:

``` text
🔒 Informations protégées

Pour accéder aux détails confidentiels de ce projet,
accepte l'accord de confidentialité.
```

Legal text should be reviewed by qualified local counsel before
production use.

------------------------------------------------------------------------

# 30. Search

Global search should eventually cover:

-   talents;
-   opportunities;
-   projects user can access;
-   skills.

For MVP, PostgreSQL full-text / trigram search is sufficient.

Do not introduce Elasticsearch unless scale actually requires it.

------------------------------------------------------------------------

# 31. Admin console

Minimum admin functionality:

### Users

-   search;
-   inspect;
-   verify;
-   suspend;
-   reactivate.

### Opportunities

-   list;
-   review reports;
-   hide/unpublish;
-   feature.

### Projects

-   inspect metadata;
-   moderate.

### Reports

-   queue;
-   status;
-   notes;
-   resolution.

### Skills

-   create;
-   merge;
-   rename;
-   disable.

### Collaborative Team requests

-   pipeline;
-   assign;
-   update status.

### Pilot metrics

-   users;
-   completed profiles;
-   projects;
-   opportunities;
-   expressions;
-   matches;
-   conversations;
-   collaborations started.

------------------------------------------------------------------------

# 32. Analytics events

Instrument events from day one.

Suggested events:

``` text
signup_started
signup_completed
onboarding_completed

profile_viewed
profile_completed

project_created
project_updated

opportunity_created
opportunity_published
opportunity_viewed

talent_viewed
talent_search_performed
opportunity_search_performed

interest_sent
interest_accepted
interest_declined

invitation_sent
invitation_accepted
invitation_declined

match_created

conversation_started
message_sent

collaboration_requested
collaboration_started
collaboration_ended

collaborative_team_request_submitted
```

Core funnel:

``` text
Active users
→ relevant discovery
→ expression/invitation
→ match
→ conversation
→ collaboration started
```

North-star candidate:

> **Active collaborations started through Collaborative.**

Supporting metric:

> **Percentage of matches converting into a collaboration.**

------------------------------------------------------------------------

# 33. UX / UI direction

The approved visual territory is called **The Spark**.

Concept:

> A meeting between two complementary forces creates something new.

Logo:

-   two overlapping circles;
-   orange side;
-   blue side;
-   white intersection;
-   spark/star in the intersection;
-   wordmark: Collaborative.

Conceptually:

``` text
Idea × Skill → Spark → Project
```

## Brand personality

The interface should feel:

-   high-tech;
-   premium;
-   credible;
-   optimistic;
-   human;
-   collaborative;
-   product-led;
-   international;
-   energetic without looking childish.

Avoid:

-   generic corporate consulting design;
-   freelance marketplace aesthetics;
-   excessive gradients everywhere;
-   crypto/Web3 visual clichés;
-   gamification-heavy UI;
-   childish illustrations.

## Visual tokens

Initial palette:

``` css
--navy: #071127;
--orange: #FF5A00;
--blue: #3D3DFF;
--violet: #6C43FF;
--cyan: #12C2D8;
--background: #F6F7FB;
--surface: #FFFFFF;
--text: #0A1020;
--muted: #667085;
--border: #E7E9F0;
```

Typography direction:

``` text
Headings: Manrope / similar geometric modern sans
Body/UI: Inter / similar highly readable sans
```

UI principles:

-   generous white space;
-   rounded but professional cards;
-   subtle depth;
-   restrained gradients;
-   strong typography;
-   profile cards rich in meaningful metadata;
-   product screenshots/UI should make Collaborative feel like an active
    network;
-   responsive mobile-first behavior;
-   accessible contrast;
-   clear CTAs;
-   skeleton loading;
-   empty states that teach the user what to do next.

------------------------------------------------------------------------

# 34. Landing page

The current approved information structure:

``` text
Navbar

Hero
  "Les projets rencontrent les bonnes compétences."
  Core philosophy
  CTA: J'ai un projet
  CTA: J'ai des compétences
  Product/profile preview

Entry intents
  J'ai une idée
  J'ai des compétences
  J'ai déjà un produit
  Je veux avancer maintenant

How Collaborative works
  Rencontrer
  Constituer
  Co-construire
  Lancer

Opportunity preview
  Project cards
  Skills
  Stage
  Commitment
  Location
  CTA: Je veux contribuer

Collaborative Team
  Product
  UX/UI
  Development
  Marketing / Market

Brand statement
  "L'opportunité de construire ensemble."

Final CTA

Footer
```

Important hero copy:

> **Les projets rencontrent les bonnes compétences.**

Supporting copy:

> **Tu n'as pas besoin d'avoir toutes les compétences pour lancer une
> idée. Tu as besoin de trouver les bonnes personnes avec qui la
> construire.**

------------------------------------------------------------------------

# 35. Suggested application screens

## Public

``` text
/
 /opportunities
 /opportunities/:slug
 /talents
 /talents/:username
 /about
 /team
 /login
 /signup
```

## Authenticated

``` text
/app
/app/discover
/app/opportunities
/app/talents
/app/projects
/app/projects/new
/app/projects/:id
/app/projects/:id/opportunity
/app/projects/:id/interests
/app/projects/:id/team
/app/messages
/app/messages/:conversationId
/app/notifications
/app/profile
/app/profile/edit
/app/settings
/app/collaborative-team
```

## Admin

``` text
/admin
/admin/users
/admin/projects
/admin/opportunities
/admin/reports
/admin/skills
/admin/team-requests
/admin/analytics
```

------------------------------------------------------------------------

# 36. Suggested technical architecture

This is a recommendation, not a hard product requirement.

A pragmatic MVP stack:

``` text
Frontend / full-stack:
Next.js + TypeScript

UI:
Tailwind CSS
Radix UI / shadcn-style accessible primitives

Database:
PostgreSQL

ORM:
Prisma or Drizzle

Authentication:
Auth.js / Clerk / Supabase Auth

Object storage:
S3-compatible storage / Supabase Storage

Realtime messaging:
Supabase Realtime / Pusher / Ably / WebSockets

Email:
Resend / equivalent

Analytics:
PostHog / equivalent

Error monitoring:
Sentry / equivalent

Hosting:
Vercel + managed PostgreSQL
or
Supabase-based stack
```

For fastest MVP implementation, a cohesive **Next.js + PostgreSQL +
Supabase** architecture is reasonable.

Avoid microservices initially.

Use a modular monolith.

------------------------------------------------------------------------

# 37. Suggested code architecture

Example:

``` text
src/
├── app/
│   ├── (marketing)/
│   ├── (auth)/
│   ├── app/
│   └── admin/
│
├── components/
│   ├── ui/
│   ├── profiles/
│   ├── projects/
│   ├── opportunities/
│   ├── matching/
│   ├── messaging/
│   └── layout/
│
├── features/
│   ├── auth/
│   ├── onboarding/
│   ├── profiles/
│   ├── skills/
│   ├── projects/
│   ├── opportunities/
│   ├── interests/
│   ├── invitations/
│   ├── matches/
│   ├── messaging/
│   ├── collaborations/
│   ├── notifications/
│   ├── moderation/
│   └── collaborative-team/
│
├── lib/
│   ├── db/
│   ├── auth/
│   ├── permissions/
│   ├── analytics/
│   ├── email/
│   └── validation/
│
└── types/
```

Feature boundaries should reflect the domain, not arbitrary technical
layers.

------------------------------------------------------------------------

# 38. Authorization

Authorization is critical because project information has progressive
confidentiality.

Use explicit permission functions.

Examples:

``` ts
canViewProject(user, project)
canViewPrivateProjectDetails(user, project)
canEditProject(user, project)
canManageOpportunity(user, opportunity)
canViewApplicant(user, opportunity)
canMessageConversation(user, conversation)
canAccessCollaborationWorkspace(user, collaboration)
```

Never rely on "the frontend hides the button."

Every protected read/write must be checked server-side.

------------------------------------------------------------------------

# 39. Database relationships

Conceptual relationship map:

``` text
User
 ├── UserProfile
 ├── Skills
 ├── Interests
 ├── Projects (owner)
 ├── ExpressionsOfInterest
 ├── CollaborationInvitations
 ├── Matches
 ├── Conversations
 └── Collaborations

Project
 ├── Owner
 ├── Members
 ├── Opportunities
 ├── Matches
 ├── Conversations
 ├── Collaborations
 └── Confidential Resources

Opportunity
 ├── Project
 ├── SkillsNeeded
 ├── RolesNeeded
 └── ExpressionsOfInterest
```

Use join tables for many-to-many relationships such as skills and
interests.

------------------------------------------------------------------------

# 40. API/domain actions

Prefer domain actions over generic CRUD where possible.

Examples:

``` text
createProject()
publishOpportunity()
pauseOpportunity()

expressInterest()
withdrawInterest()
acceptInterest()
declineInterest()

inviteTalent()
acceptInvitation()
declineInvitation()

createMatch()

startConversation()
sendMessage()

requestCollaboration()
confirmCollaboration()
endCollaboration()

submitCollaborativeTeamRequest()

reportUser()
reportOpportunity()
blockUser()
```

This makes business rules explicit and easier for AI coding agents to
reason about.

------------------------------------------------------------------------

# 41. Important invariants

1.  A project is not public merely because it exists.
2.  An opportunity exposes only approved public project information.
3.  Private project details require explicit authorization.
4.  A talent can also own projects.
5.  A project owner can also contribute to other projects.
6.  Accepting interest is not the same as confirming a collaboration.
7.  A match is not counted as a successful collaboration.
8.  Collaborative should measure actual collaboration starts.
9.  A blocked user cannot message or initiate new collaboration
    interactions with the blocker.
10. Suspended content must not appear in discovery.
11. Users must be able to withdraw interest/invitations where
    appropriate.
12. Do not expose private email addresses publicly.
13. Never represent a selected "equity" preference as a legal equity
    agreement.

------------------------------------------------------------------------

# 42. Empty states

Empty states are important for a network MVP.

Examples:

### No opportunities

``` text
Aucune opportunité ne correspond encore à tes critères.

Élargis tes filtres ou complète ton profil pour améliorer les recommandations.
```

### No applicants

``` text
Ton opportunité est publiée.

Nous te montrerons ici les talents qui souhaitent contribuer.
```

### No project

``` text
Tu as quelque chose que tu aimerais construire ?

Crée ton premier projet et indique les compétences qui te manquent.
```

### Talent without profile

``` text
Les projets ont besoin de savoir ce que tu peux apporter.

Complète ton profil pour commencer à apparaître dans les recherches.
```

------------------------------------------------------------------------

# 43. Initial seed data

For development/demo environments, seed realistic data.

Example sectors:

``` text
Fintech
HealthTech
EdTech
SaaS
Mobility
E-commerce
Climate
Agritech
Logistics
Media
AI
CivicTech
```

Example roles:

``` text
Frontend Developer
Backend Developer
Mobile Developer
Full-stack Developer
Product Manager
UX Designer
UI Designer
Growth Marketer
Business Developer
Sales
Operations
Finance
Data Scientist
AI Engineer
Community Manager
```

Seed:

-   20--30 talents;
-   8--12 projects;
-   10--15 opportunities;
-   several interests;
-   several matches;
-   2--3 active collaborations.

Demo content should feel like a living network.

------------------------------------------------------------------------

# 44. Localization

Initial primary language:

**French**

Architecture should be i18n-ready from the start.

Likely later:

-   English.

Do not hardcode all interface strings inside components.

Use translation keys.

------------------------------------------------------------------------

# 45. Accessibility

Target WCAG AA where practical.

Required:

-   keyboard navigation;
-   semantic HTML;
-   focus states;
-   accessible forms;
-   color contrast;
-   labels for icon-only controls;
-   reduced-motion support;
-   meaningful loading and error states.

------------------------------------------------------------------------

# 46. Performance

Target:

-   fast landing page;
-   responsive feed;
-   image optimization;
-   pagination/infinite loading where appropriate;
-   server-side filtering;
-   caching of public discovery pages;
-   lazy loading for secondary UI.

Do not fetch entire talent/project tables to filter in the browser.

------------------------------------------------------------------------

# 47. Security baseline

Implement:

-   server-side authorization;
-   input validation;
-   output encoding;
-   CSRF protection where relevant;
-   secure sessions;
-   rate limiting;
-   upload restrictions;
-   signed/private file URLs;
-   audit logs for sensitive admin actions;
-   secret management via environment variables;
-   database backups;
-   account deletion process.

Do not store plaintext passwords.

Do not expose private project resources via public object-storage URLs.

------------------------------------------------------------------------

# 48. SEO

Public opportunities and public talent profiles can become acquisition
surfaces if users opt into public visibility.

Metadata:

``` text
title
description
OpenGraph
canonical URL
structured metadata where appropriate
```

Respect privacy settings.

Never index private project pages.

------------------------------------------------------------------------

# 49. Product copy principles

Tone:

-   direct;
-   ambitious;
-   human;
-   professional;
-   simple;
-   action-oriented.

Avoid corporate jargon.

Prefer:

``` text
Construire ensemble
Rejoindre le projet
Je veux contribuer
Proposer une collaboration
Trouver des talents
Découvrir des projets
Former l'équipe
Commencer la collaboration
```

Do not describe Collaborative as a "freelance marketplace."

------------------------------------------------------------------------

# 50. Definition of MVP success

The MVP is successful if it demonstrates repeatedly that:

> **A person with a project can find at least one relevant person with
> whom they begin building it.**

The key validation is not downloads, page views, or signups.

It is:

``` text
Relevant discovery
      ↓
Mutual interest
      ↓
Conversation
      ↓
Collaboration starts
      ↓
Project progresses
```

The initial Silikin Village pilot should generate qualitative case
studies and measurable collaboration starts.

------------------------------------------------------------------------

# 51. AI coding agent instructions

When implementing Collaborative:

1.  Treat this document as the product source of truth.
2.  Preserve the distinction between **Project** and public
    **Opportunity**.
3.  Preserve progressive disclosure/privacy.
4.  Do not redesign the product into a freelance marketplace.
5.  Do not force users into permanent founder/talent account roles.
6.  Build the P0 collaboration loop before advanced AI features.
7.  Prefer simple, maintainable architecture over premature scale.
8.  Use strict TypeScript and schema validation.
9.  Implement authorization before exposing private project data.
10. Make UI responsive from the beginning.
11. Use realistic seeded data.
12. Instrument the collaboration funnel.
13. Keep business logic in explicit domain actions.
14. Add automated tests for privacy and authorization rules.
15. Ask for clarification before making a product decision that
    contradicts this specification.

------------------------------------------------------------------------

# 52. Recommended implementation order

``` text
Phase 1 — Foundation
  Authentication
  Database
  Design system
  App shell
  Profiles
  Skills

Phase 2 — Projects
  Project creation
  Project privacy
  Opportunities
  Publishing
  Discovery

Phase 3 — Network
  Talent discovery
  Expressions of interest
  Invitations
  Matches

Phase 4 — Collaboration
  Messaging
  Collaboration confirmation
  Team membership
  Notifications

Phase 5 — Operations
  Collaborative Team requests
  Reporting/blocking
  Admin moderation
  Analytics

Phase 6 — Polish
  PWA
  Email notifications
  Search improvements
  Recommendation scoring
  Performance
  Accessibility
  SEO
```

------------------------------------------------------------------------

# 53. Final product principle

Whenever a feature decision is unclear, return to this question:

> **Does this help the right people meet, form a team, and actually
> build something together?**

If not, it is probably not essential to the Collaborative MVP.

------------------------------------------------------------------------

**Collaborative**

**Rencontrer → Constituer → Co-construire → Lancer**

> **L'opportunité de construire ensemble.**
