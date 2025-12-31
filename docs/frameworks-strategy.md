# Frameworks & strategy

Conceptual models and strategic approaches for API documentation work.
This section covers frameworks for understanding API usability, developer
personas, organizational contexts, and market dynamics that inform how
documentation teams plan their work.

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

**Related terms**: [API](core-concepts.md#api),
[API reference topic](core-concepts.md#api-reference-topic),
[end-user software engineer](#end-user-software-engineer),
[usability testing](workflows-methodologies.md#usability-testing)

**Sources**:

- [Docs By Design: "Applying the Cognitive Dimensions of API Usability to Improve API Documentation Planning" by Robert Watson](https://docsbydesign.com/wp-content/uploads/2015/01/SIGDOC2014_CogDimForDocEstimate_PosterPaper.pdf)
- [Docs By Design: "Audience, Market, Product Webinar"](https://docsbydesign.com/category/technical-writing/audience-market-product/)

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

**Related Terms**: [API](core-concepts.md#api),
[end-user software engineer](#end-user-software-engineer)

**Source**: [Parson: "API documentation - What software engineers can teach us" by Stephanie Steinhardt](https://www.parson-europe.com/en/knowledge-base/api-documentation-what-software-engineers-can-teach-us)

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

**Related Terms**: [domain knowledge](#domain-knowledge),
[usability testing](workflows-methodologies.md#usability-testing)

**Sources**:

- [Dagstuhl Seminar Proceedings: "What is an End-User Software Engineer?" by Steven Clarke](https://drops.dagstuhl.de/entities/document/10.4230/DagSemProc.07081.26)
- UW API Docs: Module 4, Lesson 1, "Audience analysis and readers' goals"

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

**Related Terms**: [API overview topic](core-concepts.md#api-overview-topic),
[sales collateral](#sales-collateral)

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

**Related Terms**: [API overview topic](core-concepts.md#api-overview-topic),
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
