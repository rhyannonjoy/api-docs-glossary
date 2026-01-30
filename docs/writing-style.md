# Writing Style

Language conventions, tone guidelines, and rhetorical approaches
that shape how API documentation communicates with its audience.
This section covers grammar distinctions, content strategy principles,
and stylistic choices that affect clarity, professionalism, and user
engagement in technical writing.

**Example audience communication workflow**:

```mermaid
flowchart TD
    Rhetorical[rhetorical approach] --> Audience[consider audience]
    Rhetorical --> Purpose[consider purpose]
    Rhetorical --> Context[consider context]
    
    Audience --> Tone[choose tone]
    Purpose --> Tone
    Context --> Tone
    
    Tone --> Voice[express consistent voice]
```

---

## active voice

**Definition**: sentence structure where the subject performs the
action rather than receiving it

**Purpose**: creates direct, clear communication that emphasizes
who does what in API documentation

**Example**:

- ✅ Active - "The API returns a JSON response"
- ❌ Passive - "A JSON response is returned by the API"

**Related Terms**: [rhetorical approach](#rhetorical-approach),
[tone](#tone), [voice](#voice)

**Source**: [API Docs Glossary: Style Guide](../docs/meta/style-guide.md)

---

## affect vs effect

**Definition**: commonly confused words where "affect" typically
functions as a _verb_ meaning "to influence" and "effect" typically
functions as a _noun_ meaning "the result"

**Purpose**: maintains professional credibility and clarity in
technical writing by using correct grammar

**Examples**:

- verb - "API latency affects user experience"
- noun - "The effect of caching improves response time"

**Related Terms**: [content](#content), [voice](#voice)

**Sources**:

- [I'd Rather Be Writing: "How do design, length, and relevance affect how people use API reference docs -- interview with Bob Watson"](https://idratherbewriting.com/2015/07/30/bob-watson-phd-dissertation-on-api-doc-mythbusting-testing-usability-performance/)
- [Wordrake: "Affect vs. Effect: Understanding the Difference and Choosing the Right Word" by Ivy B.Grey](https://www.wordrake.com/resources/affect-vs.-effect-understanding-the-difference-and-choosing-the-right-word)

---

## content

**Definition**: technical communication concept; anything written for
someone else to read, encompassing documentation, guides, reference
materials, and instructional text

**Purpose**: establishes the scope of technical communication work
and emphasizes the reader-focused nature of documentation

**Example**: API reference topics, tutorials, quickstart guides,
and conceptual explanations all constitute content

### content types

| Aspect | Content | Structured Content | Modular Content | Kinetic Content | Liquid Content |
| -------- | --------- | ------------------- | ----------------- | ----------------- | ---------------- |
| **Definition** | anything written for someone else to read | content organized into discrete, labeled components | self-contained units that function independently | content designed for dynamic combination with minimal human intervention | content that adapts in real-time based on user context |
| **Key Technology** | any writing/publishing tool | content management systems, databases | component-based CMS, DITA | automation platforms, APIs, real-time data integration | AI, LLMs, agentic systems |
| **Primary Goal** | communicate information | enable systematic reuse | maximize consistency across contexts | automate personalization and distribution | transform format and delivery based on user needs |
| **Human Involvement** | high - manual creation and updates | moderate - structured authoring | moderate - component maintenance | low - automated assembly | minimal - AI-driven transformation |
| **API Docs Example** | traditional endpoint documentation page | endpoint data in separate, queryable fields | reusable error code descriptions | docs with real-time API status and user-specific examples | text documentation that converts to audio or adjusts detail level automatically |

**Related Terms**: [CMS](./tools-techniques/documentation-specific.md#cms),
[Diátaxis](frameworks-strategy.md#diátaxis),
[kinetic content](#kinetic-content), [liquid content](ai-and-apis.mdx#liquid-content),
[metadata](./tools-techniques/documentation-specific.md#metadata),
[modular content](#modular-content), [rhetorical approach](#rhetorical-approach),
[structured content](#structured-content),
[technical communication](frameworks-strategy.md#technical-communication),
[tone](#tone), [voice](#voice)

**Source**: [Docs By Design: "Audience, Market, Product Webinar"](https://docsbydesign.com/category/technical-writing/audience-market-product/)

---

## kinetic content

**Definition**: content creation philosophy and structural approach;
the process of automating the recombination of modular content and
the content designed for combination and recombination dynamically,
integrating real-time data, and distributing to multiple
audiences with minimal human intervention

**Purpose**: enables automation and personalization of documentation
delivery while maintaining accuracy and relevance; represents a
technology-agnostic approach to flexible content that emphasizes
properties like personalization, data integration, automation,
omnichannel delivery, interoperability, and scale

**Why this belongs in `Writing Style`**: describes a content creation
philosophy and structural approach that focuses on content design
and organization rather than the specific AI technologies that might
implement it; represents a strategic writing methodology similar to
modular documentation or structured authoring, emphasizing the principles
of dynamic content assembly rather than the tools that enable it

**Example**: API documentation that automatically updates code
examples based on the user's preferred programming language,
authentication method, or API version; or endpoint documentation
that pulls real-time status information and adjusts examples based on
current API capabilities

**Related Terms**: [CMS](./tools-techniques/documentation-specific.md#cms),
[content](#content), [liquid content](ai-and-apis.mdx#liquid-content),
[modular content](#modular-content), [real-time](api-types-architectures.md#real-time),
[structured content](#structured-content)

**Source**: [Kinetic Council, "What is Kinetic Information?"](https://www.kineticcouncil.org/about)

---

## modular content

**Definition**: the process of making structured content reusable;
content strategy of self-contained content units designed to function
independently and enable tech writers to combine units in different
ways across documentation

**Purpose**: maximizes content reuse and maintains consistency when
the same information appears in multiple contexts; builds on
structured content principles to enable dynamic content assembly;
supports discoverability and exposes relationships that glue
individual topics together

**Example**: a reusable authentication code snippet that appears in
multiple API endpoint examples, or a standard error response
description used across reference documentation without manual
copying

**Related Terms**: [CMS](./tools-techniques/documentation-specific.md#cms),
[content](#content), [kinetic content](#kinetic-content),
[liquid content](ai-and-apis.mdx#liquid-content),
[structured content](#structured-content)

**Sources**:

- [Crafter Software Corporation, Content Management: "What is Modular Content?" by Amanda Lee](https://craftercms.com/blog/2024/07/what-is-modular-content)
- [MadCap Software, MadBlog: "What is Modular Writing?" by Una Cogavin](https://www.madcapsoftware.com/blog/what-is-modular-writing/)

---

## rhetorical approach

**Definition**: framework that treats communication as action embedded
in culture, values, and power structures, recognizing that each
communication situation is unique and requires analysis of its
specific context

**Purpose**: ensures technical writers consider audience, purpose,
and context when crafting API documentation rather than applying
one-size-fits-all solutions

**Example**: choosing between formal reference documentation for
experienced developers versus conversational tutorials for beginners
demonstrates rhetorical awareness

**Related Terms**: [active voice](#active-voice), [content](#content),
[tone](#tone)

**Sources**:

- [Docs By Design: "Audience, Market, Product Webinar"](https://docsbydesign.com/category/technical-writing/audience-market-product/)
- [Pressbooks, University of Minnesota, Introduction to Technical and Professional Communication: "Understanding Rhetoric" by Brigitte Mussack and Evelyn Dsouza](https://pressbooks.umn.edu/techwriting/chapter/chapter-1/#:~:text=A%20rhetorical%20approach%20frames%20communication,systems%20of%20power%20and%20oppression.)

---

## structured content

**Definition**: foundational approach to organizing content;
content strategy that treats digital content like data;
demonstrates content organized into discrete, clearly
labeled components documentation teams can easily manage, query,
and use systematically across multiple outputs

**Purpose**: enables content reuse, consistency, and efficient
maintenance by separating content from presentation; forms the
foundation for modular, kinetic, and liquid content approaches

**Example**: an API endpoint description stored as separate fields -
method, path, parameters, response codes - in a CMS rather than
as a single block of text, allowing the same information to appear
in reference docs, tutorials, and SDK documentation

**Related Terms**: [CMS](./tools-techniques/documentation-specific.md#cms),
[content](#content), [kinetic content](#kinetic-content),
[liquid content](ai-and-apis.mdx#liquid-content),
[metadata](./tools-techniques/documentation-specific.md#metadata),
[modular content](#modular-content),
[reference](./core-concepts/documentation-specific.md#reference),
[SDK](./core-concepts/api-fundamentals.md#sdk)

**Sources**:

- [ButterCMS: "Structured Content 101: What Is It? Why Do You Need It?" by Alex Williams](https://buttercms.com/blog/structured-content/)
- [Wikipedia: "Structured content"](https://en.wikipedia.org/wiki/Structured_content)

---

## tone

**Definition**: the attitude or emotional quality conveyed through
word choice, sentence structure, and stylistic decisions in
written communication and/or content

**Purpose**: establishes the relationship between documentation
and readers, affecting engagement, trust, and comprehension

**Example**: conversational tone uses contractions and direct
address - "you'll need to authenticate," while formal tone avoids
both - "authentication is required"

**Related Terms**: [active voice](#active-voice), [content](#content),
[rhetorical approach](#rhetorical-approach),
[tone](#tone)

**Source**: [API Docs Glossary: Style Guide](../docs/meta/style-guide.md)

---

## voice

**Definition**: the consistent personality and perspective expressed
throughout documentation, distinct from tone which can vary by context

**Purpose**: creates cohesive documentation that readers recognize as
coming from a unified source regardless of who writes individual pieces

**Example**: a documentation voice might be "helpful but not condescending"
or "technically precise but accessible," maintained across all content types

**Related Terms**: [active voice](#active-voice), [content](#content),
[rhetorical approach](#rhetorical-approach),
[tone](#tone)

**Source**: [API Docs Glossary: Style Guide](../docs/meta/style-guide.md)

---
