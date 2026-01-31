# Frameworks & Strategy

Meta-level frameworks and strategic approaches for API documentation work.
This section covers evaluation frameworks for API usability, developer
personas, organizational contexts, and market dynamics—the conceptual
models that inform how documentation teams plan and execute their work.
For technical API architectures and implementation
patterns, see [API Types & Architectures](api-types-architectures.md).

**Explore the cognitive dimensions framework**:

```mermaid
flowchart TD
    CD[cognitive dimensions<br/>framework]
    CD --> U[usability factors]
    CD --> D[design factors]
    
    U --> U1[learning style]
    U --> U2[working framework]
    U --> U3[progressive evaluation]
    
    D --> D1[consistency]
    D --> D2[role expressiveness]
    D --> D3[domain correspondence]

    style CD fill:#4A90E2,color:#fff
    style U fill:#50C878,color:#fff
    style D fill:#FFB347,color:#fff
```

---

## accessibility

**Definition**: the practice of designing and creating content, interfaces,
and experiences that people with diverse abilities, disabilities, and
contexts can perceive, understand, navigate, and interact with effectively

**Purpose**: ensures API documentation reaches all developers regardless of
visual, auditory, motor, or cognitive abilities; guides decisions about color
contrast, text sizing, navigation patterns, code example formatting, and
content structure to create inclusive documentation experiences

**Why this belongs in `Frameworks & Strategy`**: represents a fundamental
design philosophy and ethical framework that informs all documentation decisions
rather than a specific workflow or tool; a strategic approach to inclusive
design that shapes content strategy, IA, and UX - similar to how
docs-as-ecosystem frames documentation philosophy _rather than describing
operational practices_

**The Complexity of Accessibility**: accessibility isn't one-size-fits-all -
design choices that improve access for some users may create barriers for others,
requiring documentation teams to provide flexible options rather than single
"accessible" solutions

**Example**: light vs. dark mode

| Mode | Benefits | Challenges |
| ------ | ---------- | ------------ |
| **Light Mode** | Better for users with astigmatism, dyslexia, or certain visual processing conditions; higher contrast can improve readability for many | Can cause eye strain for users with light sensitivity, migraines, or who work in low-light environments |
| **Dark Mode** | Reduces eye strain for light-sensitive users, better for low-light conditions, can help users with certain forms of photophobia | Can reduce readability for users with astigmatism or visual processing conditions; lower contrast may be harder to read for some |

**Solution**: provide both modes as user-selectable options rather than enforcing
a single "accessible" choice, allowing developers to choose what works best for
their needs and context; additional accessibility solutions for doc teams -

- screen reader compatibility for code examples and interactive elements
- keyboard navigation for documentation sites and API explorers
- sufficient color contrast in syntax highlighting while maintaining code
readability
- alternative text for diagrams showing API architecture or data flows
- clear heading hierarchy for navigation and comprehension
- captions or transcripts for video tutorials
- plain language explanations alongside technical terminology

**Related Terms**: [content strategy](#content-strategy),
[docs-as-ecosystem](#docs-as-ecosystem), [DX](#dx),
[guerilla usability testing](workflows-methodologies.md#guerrilla-usability-testing),
[information architecture](#information-architecture),
[usability testing](workflows-methodologies.md#usability-testing), [UX](#ux)

**Sources**:

- [Utah State University, WebAIM: "Contrast and Color Accessibility"](https://webaim.org/articles/contrast/)
- [W3C: "How to Meet WCAG (Quick Reference)"](https://www.w3.org/WAI/WCAG21/quickref/)
- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/)

---

## cognitive dimensions of API usability

**Definition**: a framework for evaluating and enhancing API usability
by considering both designer and user perspectives to identify usability
issues and guide design improvements

**Purpose**: provides a structured approach to assess API design quality
across 12 dimensions, helping documentation teams identify where users
might struggle and where documentation can provide the most value; guides
documentation planning by highlighting which API aspects need clearer
explanation or examples

### the 12 dimensions

| Dimension | What it evaluates |
| ----------- | --------------- |
| **Abstraction Level** | Range of abstraction levels the API exposes and their usability for target developers |
| **Learning Style** | Learning requirements and how well they align with developers' available learning styles |
| **Working Framework** | Size of the conceptual chunk developers must hold in mind to work effectively - cognitive load |
| **Work-Step Unit** | Amount of a task developers complete in a single step |
| **Progressive Evaluation** | Degree to which developers can run incomplete code for feedback |
| **Premature Commitment** | Number of early decisions developers must make and their consequences |
| **Penetrability** | How easily the API facilitates exploration, analysis, and understanding of its components |
| **API Elaboration** | Degree to which the API needs adaptation or extension for specific developer needs |
| **API Viscosity** | Inherent barriers to change and effort required for developers to make modifications |
| **Consistency** | Uniformity and predictability of design, naming conventions, and behavior |
| **Role Expressiveness** | How plainly the API communicates the roles and responsibilities of its components |
| **Domain Correspondence** | How well the API's structure and terminology map to the problem domain |

**Example**: when documenting an authentication API with high premature
commitment, in which developers must choose OAuth vs. API keys early,
documentation should provide a clear decision guide upfront rather than
burying the comparison deep in reference docs

**Related terms**: [API](./core-concepts/api-fundamentals.md#api),
[API reference topic](./core-concepts/documentation-specific.md#api-reference-topic),
[Diátaxis](#diátaxis), [DX](#dx), [end-user software engineer](#end-user-software-engineer),
[usability testing](workflows-methodologies.md#usability-testing), [UX](#ux)

**Sources**:

- [Docs By Design: "Applying the Cognitive Dimensions of API Usability to Improve API Documentation Planning" by Robert Watson](https://docsbydesign.com/wp-content/uploads/2015/01/SIGDOC2014_CogDimForDocEstimate_PosterPaper.pdf)
- [Docs By Design: "Audience, Market, Product Webinar"](https://docsbydesign.com/category/technical-writing/audience-market-product/)

---

## content strategy

**Definition**: discipline encompassing the planning, development,
and management of content across its entire lifecycle; encompasses
content creation, governance, delivery, and measurement to meet
both user needs and business goals

**Purpose**: ensures API documentation efforts align with organizational
objectives, user needs, and resource constraints by defining what
content to create, how to maintain it, who's responsible, and how to
measure success

**Example**: content strategy for API documentation

| Priority | Activity | Rationale |
| -------- | -------- | --------- |
| Q1 | prioritize authentication and getting-started guides | highest-impact pages for new API users |
| Ongoing | engineer review before publication | validates technical accuracy |
| Versioning | maintain version-specific documentation | ensures backward compatibility |
| Metrics | track time-to-first-successful-API-call | measures effectiveness of documentation |

**Related Terms**: [accessibility](#accessibility), [content](writing-style.md#content),
[docs-as-ecosystem](#docs-as-ecosystem),
[information architecture](#information-architecture), [market](#market),
[sales collateral](#sales-collateral), [technical communication](#technical-communication)

**Sources**:

- [Kovai.co, Document360: "Technical Content Strategy: A Practical Guide to Smarter Documentation" by Janeera D.A.](https://document360.com/blog/technical-content-strategy/)
- [Wikipedia: "Content strategy"](https://en.wikipedia.org/wiki/Content_strategy)

---

## Diátaxis

**Definition**: a systematic framework for organizing technical
documentation into four distinct content types: tutorials, how-to guides,
reference, and explanation - based on whether content serves acquisition
or knowledge use, and whether it's focused on practical steps
or theoretical knowledge

**Purpose**: provides documentation teams with a structured approach to
content planning and organization by identifying which documentation type
to create and how to write it; helps prevent common documentation problems
like mixing instructional content with reference material or explanations
with tutorials, resulting in clearer, more user-friendly documentation
that serves both beginners and experts effectively

### the four content types

| Content Type | Orientation | Focus | User Question |
| ------------ | ----------- | ----- | ------------- |
| **Tutorial** | Learning | Practical steps | "Can you teach me to - ?" |
| **How-to Guide** | Goals | Practical steps | "How do I - ?" |
| **Reference** | Information | Theoretical knowledge | "What is - ?" |
| **Explanation** | Understanding | Theoretical knowledge | "Why - ?" |

**The Framework's Two Axes**:

- **Acquisition vs. Application**: whether users are learning something new,
acquisition, or applying existing knowledge to complete work, application
- **Practical Steps vs. Theoretical Knowledge**: whether content focuses on
doing, practical steps, or understanding, theoretical knowledge

**Example**: when documenting a payment API, Diátaxis guides writers to create
separate content types rather than combining all approaches into one confusing
page

| Content Type | Title | Orientation | Focus |
| ------------ | ----- | ----------- | ----- |
| Tutorial | "Process your first payment" | Learning | Practical |
| How-to Guide | "Handle payment failures" | Goals | Practical |
| Reference | "Payment API reference" | Information | Theoretical |
| Explanation | "How payment processing works" | Understanding | Theoretical |

**Related Terms**: [cognitive dimensions of API usability](#cognitive-dimensions-of-api-usability),
[content](writing-style.md#content), [domain knowledge](#domain-knowledge),
[end-user software engineer](#end-user-software-engineer),
[explanation guide](./core-concepts/documentation-specific.md#explanation-guide),
[how-to guide](./core-concepts/documentation-specific.md#how-to-guide),
[information architecture](#information-architecture),
[reference](./core-concepts/documentation-specific.md#reference),
[tutorial](./core-concepts/documentation-specific.md#tutorial)

**Sources**:

- [Diátaxis by Daniele Procida](https://diataxis.fr/)
- [GitHub: diataxis-documentation-framework](https://github.com/evildmp/diataxis-documentation-framework)

---

## docs-as-ecosystem

**Definition**: comprehensive framework for treating documentation as a complex,
dynamic system managed and nurtured through collaboration across diverse
stakeholders rather than as static code or isolated content

**Purpose**: expands beyond docs-as-code by recognizing that documentation
encompasses technical writing, design, community feedback, community management,
accessibility, SEO - search engine optimization - UX, and AI tools; encourages
holistic, multidisciplinary, and community-centered approaches to creating and
maintaining API documentation that foster sustained engagement and
collaborative growth

**Why this belongs in `Frameworks & Strategy`**: represents a conceptual paradigm
shift in how organizations approach documentation rather than a specific
operational workflow; docs-as-ecosystem expands the operational approaches of
docs-as-code and docs-as-tests into a _broader strategic framework_ that
encompasses the full complexity of documentation systems _beyond just code
management and testing practices_

| Term | Category | Focus |
| ---- | -------- | ----- |
| **docs-as-code** | `Workflows & Methodologies` | methodology for organizing documentation work using developer tools and processes |
| **docs-as-tests** | `Workflows & Methodologies` | concrete practice of running automated tests against documentation |
| **docs-as-ecosystem** | `Frameworks & Strategy` | _meta-level philosophy and organizational mindset_ for understanding documentation as a living system with multiple stakeholders, feedback loops, and interdisciplinary components |

**Example**: rather than treating API documentation as markdown files managed only by
technical writers, a docs-as-ecosystem approach establishes feedback channels through
GitHub discussions, social media, and forums, involves developer relations in analyzing
feedback trends, coordinates with product managers on documentation roadmap, and
integrates contributions from engineers, community members, and customer support to
create living documentation that evolves with community needs

**Related Terms**: [accessibility](#accessibility), [Agile](workflows-methodologies.md#agile),
[content strategy](#content-strategy), [docs-as-code](workflows-methodologies.md#docs-as-code),
[docs-as-tests](workflows-methodologies.md#docs-as-tests), [domain knowledge](#domain-knowledge),
[end-user software engineer](#end-user-software-engineer), [technical communication](#technical-communication),
[usability testing](workflows-methodologies.md#usability-testing)

**Sources**:

- [Docs-as-Ecosystem: "The Community Approach to Engineering Documentation" by Alejandra Quetzalli](https://www.docsasecosystem.com/)
- [GovFresh: "Docs-as-Ecosystem" Review by Luke Fretwell](https://govfresh.com/books/docs-as-ecosystem)

---

## domain knowledge

**Definition**: the understanding of a specific industry, discipline,
or activity

**Purpose**: enables technical writers to communicate effectively
with subject matter experts and create accurate, contextually
appropriate API documentation; writers with domain knowledge can
better assess what information developers need, ask informed questions
during research, and identify gaps or inaccuracies in documentation

**Example**: a technical writer documenting a financial trading API
benefits from domain knowledge of trading terminology, market mechanics,
and regulatory requirements - allowing them to write clearer explanations
of rate limiting during market hours or authentication requirements
for different account types

**Related Terms**: [API](./core-concepts/api-fundamentals.md#api),
[Diátaxis](#diátaxis), [docs-as-ecosystem](#docs-as-ecosystem),
[end-user software engineer](#end-user-software-engineer),
[information architecture](#information-architecture),
[taxonomy](#taxonomy), [technical communication](#technical-communication)

**Source**: [Parson: "API documentation - What software engineers can teach us" by Stephanie Steinhardt](https://www.parson-europe.com/en/knowledge-base/api-documentation-what-software-engineers-can-teach-us)

---

## DX

**Definition**: also known as DevEx, acronym for _developer experience_;
multidisciplinary field that combines principles from human-computer
interaction, UX, organizational psychology, and software engineering
to optimize development; overall experience developers have when
discovering, learning, integrating, and maintaining a software product,
API, or tool

**Purpose**: frames API documentation work within the broader context of
how developers interact with an API throughout their journey - from
initial discovery to production deployment - helping documentation teams
understand that docs are just one touchpoint in the overall developer
experience

**Example**: strong developer experience for a payment API

| Focus Area | What It Includes | Why It Matters |
| ---------- | ---------------- | -------------- |
| Getting Started | Comprehensive guides leading to a successful test transaction | Targets under 10 minutes to first successful transaction, a key DX benchmark |
| Exploration | Interactive API explorer for testing without writing code | Lowers the barrier to entry for non-developers evaluating the API |
| SDKs | Libraries in popular languages with consistent patterns | Reduces integration time and cognitive overhead across tech stacks |
| Error Handling | Clear error messages with links to relevant docs | Keeps developers in flow, troubleshooting without leaving the platform |
| Community | Active forums for developer support and discussion | Provides peer-driven support and real-world usage examples |
| Testing Tools | Webhook testing utilities | Enables developers to verify event-driven integrations locally before deployment |

**Related Terms**: [accessibility](#accessibility),
[cognitive dimensions of API usability](#cognitive-dimensions-of-api-usability),
[end-user software engineer](#end-user-software-engineer),
[error handling](./core-concepts/api-fundamentals.md#error-handling),
[getting started](./core-concepts/documentation-specific.md#getting-started),
[SDK](./core-concepts/api-fundamentals.md#sdk),
[usability testing](workflows-methodologies.md#usability-testing), [UX](#ux)

**Sources**:

- [Atlassian: "What is developer experience & why is it important?"](https://www.atlassian.com/developer-experience)
- [GitLab Inc.: "What is developer experience?"](https://about.gitlab.com/topics/devops/what-is-developer-experience/)
- [Wikipedia: "Developer experience"](https://en.wikipedia.org/wiki/Developer_experience)

---

## end-user software engineer

**Definition**: a framework for categorizing developer work styles,
characteristics, and motivations into distinct personas

**Purpose**: helps documentation teams understand different developer
approaches to learning and using APIs, enabling targeted content that
matches how each persona works; systematic developers need comprehensive
reference documentation, pragmatic developers favor structured
guides, and opportunistic developers require quick-start examples and
business-focused explanations

### the three personas

| Persona | Approach | Pride | Documentation Needs |
| ------- | -------- | -------- | -------- |
| Systematic Developer | Writes code defensively, develops deep understanding before using technology | Building elegant solutions | Comprehensive reference, architectural overviews, edge case documentation |
| Pragmatic Developer | Writes code methodically, develops enough understanding to use technology | Building robust apps | Structured tutorials, best practices, troubleshooting guides |
| Opportunistic Developer | Writes code in exploratory fashion, develops enough understanding to solve business problems | Solving business problems | Quickstart guides, business use cases, code examples |

**Example**: when documenting a payment processing API, systematic
developers need detailed security architecture documentation, pragmatic
developers need step-by-step integration guides with error handling,
and opportunistic developers need a five-minute "process your
first payment" tutorial

**Related Terms**: [Diátaxis](#diátaxis), [docs-as-ecosystem](#docs-as-ecosystem),
[domain knowledge](#domain-knowledge), [DX](#dx),
[error handling](./core-concepts/api-fundamentals.md#error-handling),
[usability testing](workflows-methodologies.md#usability-testing), [UX](#ux)

**Sources**:

- [Dagstuhl Seminar Proceedings: "What is an End-User Software Engineer?" by Steven Clarke](https://drops.dagstuhl.de/entities/document/10.4230/DagSemProc.07081.26)
- UW API Docs: Module 4, Lesson 1, "Audience analysis and readers' goals"

---

## information architecture

**Definition**: also known as IA; the structural design of information
environments that uses metadata and taxonomy to organize user content;
the practice of organizing, labeling, and structuring content to help
users find information and complete tasks

**Purpose**: enables API documentation teams to create logical, findable,
and usable documentation structures by applying principles of organization,
navigation, search, and labeling to match how developers think about and
use APIs

**Example**: designing an API documentation site's structure - deciding
whether to organize endpoints by resource type - _Users, Payments, Webhooks_
vs. by function _Create, Read, Update, Delete_, creating a navigation
hierarchy that surfaces authentication early, and labeling sections using
terminology familiar to developers rather than internal product names

**Related Terms**: [accessibility](#accessibility),
[content](writing-style.md#content), [content strategy](#content-strategy),
[CRUD](./core-concepts/api-fundamentals.md#crud), [Diátaxis](#diátaxis),
[domain knowledge](#domain-knowledge),
[knowledge graph](ai-and-apis.mdx#knowledge-graph),
[metadata](./tools-techniques/documentation-specific.md#metadata),
[taxonomy](#taxonomy), [technical communication](#technical-communication),
[usability testing](workflows-methodologies.md#usability-testing),
[UX](#ux)

**Sources**:

- [Geeks for Geeks: "Information Architecture: A Complete Guide for Beginners"](https://www.geeksforgeeks.org/blogs/information-architecture/)
- [Rosenfeld, Louis; Morville, Peter; Arango, Jorge. _Information Architecture: For the Web and Beyond - Fourth Edition_, O'Reilly Media Inc., October 2015.](https://www.oreilly.com/library/view/information-architecture-4th/9781491913529/)

---

## market

**Definition**: the space in which customers access a company or products
that compete with similar offerings

**Purpose**: influences content priorities and documentation strategy based
on competitive positioning, as an open source API competing in a crowded
marketplace needs different documentation emphasis than a proprietary
enterprise API with few alternatives; market position determines whether
documentation should focus on differentiation, ease of adoption, or
enterprise features

**Example**: a new authentication API entering a market dominated by
established players needs documentation that highlights unique
features and migration guides from competitors, while an established
API can focus on advanced use cases and optimization

**Related Terms**:
[API overview topic](./core-concepts/documentation-specific.md#api-overview-topic),
[content strategy](#content-strategy), [sales collateral](#sales-collateral)

**Source**: [Docs By Design: "Audience, Market, Product Webinar"](https://docsbydesign.com/category/technical-writing/audience-market-product/)

---

## sales collateral

**Definition**: materials used internally to inform sales representatives
or externally to educate and convert prospective customers

**Purpose**: bridges the gap between technical documentation and business
value communication; technical writers often create or contribute to sales
collateral by translating API capabilities into business benefits, use cases,
and return on investment (ROI) narratives that sales teams and prospects
can understand without deep technical knowledge

**Example**: a technical writer transforms detailed webhook documentation
into a one-page sales sheet explaining how real-time notifications reduce
customer support tickets by 40%, using non-technical language and
business metrics

**Related Terms**:
[API overview topic](./core-concepts/documentation-specific.md#api-overview-topic),
[content](./writing-style.md#content), [content strategy](#content-strategy),
[market](#market)

**Sources**:

- [Docs By Design: "Audience, Market, Product Webinar"](https://docsbydesign.com/category/technical-writing/audience-market-product/)
- [Turtl: "What is Sales Collateral?"](https://turtl.co/blog/sales-collateral/#:~:text=Sales%20collateral%20examples%20can%20either,convert%20them%20into%20new%20customers%29.)

---

## skunkworks

**Definition**: a group within an organization given high autonomy and
freedom from bureaucracy to work on advanced or experimental projects

**Purpose**: affects documentation approach for APIs and features
developed in skunkworks environments as these projects often have minimal
initial documentation, rapid iteration cycles, and uncertain futures,
requiring flexible documentation strategies that balance thoroughness
with the reality that features may change dramatically or
risk discontinuation

**Example**: a skunkworks team building an experimental machine learning
API may need lightweight, frequently updated documentation focused on
current capabilities rather than comprehensive reference materials,
with clear disclaimers about experimental status

**Related Terms**: [Agile](workflows-methodologies.md#agile),
[project management methodologies](workflows-methodologies#project-management-methodology)

**Sources**:

- [Docs By Design: "Audience, Market, Product Webinar"](https://docsbydesign.com/category/technical-writing/audience-market-product/)
- [Wikipedia: Skunk Works](https://en.wikipedia.org/wiki/Skunk_Works)

---

## taxonomy

**Definition**: hierarchical classification system that organizes concepts,
terms, or entities into categories and subcategories based on their
relationships and characteristics

**Purpose**: provides consistent structure for organizing and navigating API
documentation, enabling users to find related endpoints, understand conceptual
relationships, and build mental models of how API components relate to each
other

### taxonomy in tech comm architecture

```mermaid
flowchart LR
    TC[Technical Communication<br/>The Discipline]
    C[Content<br/>What We Create]
    SC[Structured Content<br/>Organized With Metadata]
    T[Taxonomy<br/>Classification System]
    M[Metadata<br/>Descriptive Information]
    KG[Knowledge Graph<br/>Relationship Networks]
    Dynamic[Modular/Kinetic/Liquid Content<br/>Dynamic - AI-Powered Delivery]
    
    TC --> C
    C --> SC
    SC --> T
    SC --> M
    T --> KG
    M --> KG
    KG --> Dynamic
    
    style TC fill:#4A90E2,color:#fff
    style C fill:#9B59B6,color:#fff
    style SC fill:#50C878,color:#fff
    style T fill:#FFB347,color:#fff
    style M fill:#FFB347,color:#fff
    style KG fill:#E74C3C,color:#fff
    style Dynamic fill:#F39C12,color:#fff
```

| Build Stage - Layer | Concept | Capability Unlocked |
| ------------- | --------- | --------------------- |
| **Stage 1: Foundation** | Technical Communication → Content | Create documentation |
| **Stage 2: Structure** | + Structured Content | Reuse components systematically |
| **Stage 3: Organization** | + Taxonomy + Metadata | Classify, search, and describe content |
| **Stage 4: Intelligence** | + Knowledge Graph | Understand semantic relationships |
| **Stage 5: Dynamic Delivery** | + Modular/Kinetic/Liquid | AI-assisted, adaptive documentation experiences |

**Example**: an API documentation taxonomy might organize endpoints
hierarchically or categorize error codes:

| Component | Organization |
| --------- | ------------ |
| Endpoints | `Authentication` → `OAuth 2.0` → `Token Management` → `Refresh Token Endpoint` |
| Error Codes | `Client Errors (4xx)` → `Authentication Errors` → `401 Unauthorized`, `403 Forbidden` |

**Related Terms**: [content](writing-style.md#content),
[domain knowledge](#domain-knowledge),
[knowledge graph](ai-and-apis.mdx#knowledge-graph),
[information architecture](#information-architecture),
[metadata](./tools-techniques/documentation-specific.md#metadata),
[technical communication](#technical-communication)

**Sources**:

- [Markup AI Europe, Acrolinx: "Building a Strong Content Taxonomy for Technical Documentation" by Hannah Kaufhold](https://www.acrolinx.com/blog/building-a-strong-content-taxonomy-for-technical-documentation/)
- [Wikipedia: "Taxonomy"](https://en.wikipedia.org/wiki/Taxonomy)

---

## technical communication

**Definition**: also known as tech comm; professional field focused on
creating documentation, instructions, and informational materials that
help people accomplish specific tasks or understand technical concepts

**Purpose**: establishes the discipline within which API documentation
practices, tools, and methodologies exist; encompasses writing,
information design, user experience, and content strategy for
technical audiences

**Why this belongs in `Frameworks & Strategy`**: represents the overarching
professional discipline and conceptual framework that contains all API
documentation work; `Core Concepts` focuses on API-specific fundamentals -
endpoints, authentication, responses - while technical communication is the
_meta-level field_ that defines the nature of documentation work itself -
similar to how docs-as-ecosystem frames documentation philosophy rather than
describing specific API concepts

### tech comm scope

```mermaid
flowchart TD
    TC[Technical Communication<br/>The Discipline]
    CS[Content Strategy<br/>Planning & Governance]
    UX[UX<br/>Interaction & Perception]
    DX[DX<br/>API-specific UX]
    IA[Information Architecture<br/>Organizing Information]
    
    TC --> CS
    TC --> IA
    UX --> DX
    
    CS --> Content[Content Creation]
    IA --> Structure[Structure & Navigation]
    DX --> DocGoals[Documentation Goals]
    
    style TC fill:#4A90E2,color:#fff
    style CS fill:#9B59B6,color:#fff
    style IA fill:#9B59B6,color:#fff
    style UX fill:#50C878,color:#fff
    style DX fill:#50C878,color:#fff
```

**Example**: API reference documentation, SDK tutorials, developer guides,
installation instructions, and troubleshooting articles are all forms of
technical communication created by technical communicators working in the
API documentation domain

**Related Terms**: [content](writing-style.md#content),
[content strategy](#content-strategy), [docs-as-ecosystem](#docs-as-ecosystem),
[domain knowledge](#domain-knowledge),
[information architecture](#information-architecture),
[metadata](./tools-techniques/documentation-specific.md#metadata),
[taxonomy](#taxonomy)

**Sources**:

- [Society for Technical Communication - STC, Homepage](https://www.stc.org/)
- [Wikipedia: "Technical communication"](https://en.wikipedia.org/wiki/Technical_communication)

---

## UX

**Definition**: acronym for _user experience_; multidisciplinary field
involving many stakeholders, drawing on principles from design, psychology,
engineering and business; encompasses all aspects of a person's interaction
with a product, service, or system, including their perceptions, emotions,
and responses before, during, and after use

**Purpose**: guides API documentation decisions by focusing on DX,
_developer experience_ - how developers feel when discovering, learning,
and using an API - ensuring documentation reduces friction, builds confidence,
and supports successful integration

**Example**: improving API documentation UX

| Focus Area | Action | Impact |
| ---------- | ------ | ------ |
| Interactivity | Add code examples developers can test immediately | Reduces friction between reading docs and first API call |
| Error Handling | Provide clear error messages with actionable solutions | Helps developers troubleshoot without leaving documentation |
| Content Organization | Surface authentication requirements before first API call | Prevents common blocker where developers attempt calls before authenticating |
| Code Samples | Ensure samples work copy-paste without modification | Eliminates guesswork and reduces time-to-first-successful-API-call |

**Related Terms**: [accessibility](#accessibility),
[API documentation testing](workflows-methodologies.md#api-documentation-testing),
[cognitive dimensions of API usability](#cognitive-dimensions-of-api-usability),
[DX](#dx), [end-user software engineer](#end-user-software-engineer),
[guerilla usability testing](workflows-methodologies.md#guerrilla-usability-testing),
[information architecture](#information-architecture),
[usability testing](workflows-methodologies.md#usability-testing)

**Sources**:

- [IBM: "What is user experience (UX)?" by Teganne Finn, Amanda Downie](https://www.ibm.com/think/topics/user-experience)
- [Interaction Design Foundation: "User Experience Design"](https://www.interaction-design.org/literature/topics/ux-design)

---
