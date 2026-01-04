# AI & APIs

Artificial intelligence technologies and concepts relevant to API
documentation. This section covers AI tools, terminology, and practices
that impact how technical writers create and enhance API documentation.

**AI-assisted documentation workflow**:

```mermaid
flowchart LR
    A[plan] --> B[draft with AI]
    B --> C[human review]
    C --> D[refine & verify]
    D --> E[publish]
    E --> F[maintain]
    F --> B
    
    style B fill:#8B4789,stroke:#00D4FF,color:#f5f1e8
    style C fill:#2a2a2a,stroke:#00D4FF,color:#f5f1e8
    style D fill:#2a2a2a,stroke:#00D4FF,color:#f5f1e8
```

---

## AI

**Definition**: acronym for Artificial Intelligence; technologies that
use computers and large datasets to perform tasks, make predictions,
or solve problems that typically require human intelligence

**Purpose**: encompasses tools and techniques increasingly used in API
documentation workflows, from content generation to automated testing

**Related Terms**: [genAI](#genai), [Large Language Model](#large-language-model),
[Machine Learning](#machine-learning),
[Natural Language Processing](#natural-language-processing)

**Sources**:

- [University of Washington: "AI + Teaching"](https://teaching.washington.edu/course-design/ai/)
- UW API Docs: Module 1, Lesson 4, "Intro to AI and API docs"

---

## AI-assisted documentation

**Definition**: documentation created or enhanced using AI tools while
maintaining human oversight for accuracy, technical correctness, and
quality

**Purpose**: accelerates documentation workflows by handling repetitive
tasks, allowing technical writers to focus on complex explanations,
accuracy verification, and user experience

**Example**: using AI to generate initial drafts of API reference
descriptions, then manually reviewing and enhancing with technical
details and examples

**Related Terms**: [AI](#ai), [genAI](#genai),
[Large Language Model](#large-language-model)

**Source**: UW API Docs: Module 1, Lesson 4, "Intro to AI and API docs"

---

## AI-assisted usability analysis

**Definition**: use of artificial intelligence tools to analyze
usability test results and identify patterns in user behavior or
interface issues

**Purpose**: accelerates analysis of certain types of usability
data while recognizing the limitations of AI in evaluating human
factors

**Appropriate use cases**:

- Mechanical tests: language clarity, navigation patterns,
consistency checks
- Pattern identification: recurring user errors, common
interaction sequences
- Quantitative analysis: time-on-task, completion rates,
click paths

**Limitations**:

- Can't reliably assess human factors: credibility,
perception, satisfaction, emotional responses
- AI capabilities and best practices evolve rapidly, requiring
ongoing evaluation
- Results should supplement, not replace, human expertise in
usability research
- Interpretation quality depends on the specific AI tools and
prompts used

_**Note**: this represents current perspectives on AI implementation
into usability testing strategies and may evolve as AI capabilities
develop_

**Related Terms**: [AI](#ai),
[guerrilla usability testing](workflows-methodologies.md#guerrilla-usability-testing),
[usability testing](workflows-methodologies.md#usability-testing)

**Source**: UW API Docs: Module 4, Lesson 3, "Review usability testing for API"

---

## AI bias

**Definition**: systematic errors or unfair outcomes in AI systems that
reflect prejudices present in training data or model design

**Purpose**: awareness of AI bias ensures documentation teams critically
assess AI-generated content rather than accepting it as authoritative,
particularly for examples involving people, places, or cultural contexts

**Related Terms**: [AI](#ai), [training data](#training-data)

**Sources**:

- [University of Washington: "AI + Teaching"](https://teaching.washington.edu/course-design/ai/)
- UW API Docs: Module 1, Lesson 4, "Intro to AI and API docs"

---

## genAI

**Definition**: acronym for Generative AI; AI systems that create
new content by identifying patterns in training data and using
probability to generate text, images, or other media

**Purpose**: assists API documentation writers with drafting, editing,
and formatting tasks while requiring human oversight for accuracy
and quality

**Example**: using Claude or ChatGPT to draft initial API endpoint
descriptions that writers then refine and verify

**Related Terms**: [AI](#ai), [Large Language Model](#large-language-model),
[Machine Learning](#machine-learning)

**Sources**:

- [University of Washington: "AI + Teaching"](https://teaching.washington.edu/course-design/ai/)
- UW API Docs: Module 1, Lesson 4, "Intro to AI and API docs"

---

## Large Language Model

**Definition**: also known as an LLM; form of genAI trained on large
amounts of text that generates human-like responses using deep learning
and neural networks

**Purpose**: handles repetitive or foundational documentation tasks
such as generating boilerplate descriptions, summarizing content,
or translating text

**Example**: LLMs can draft initial OpenAPI specification descriptions
or generate code examples in many programming languages

**Related Terms**: [AI](#ai), [genAI](#genai),
[Natural Language Processing](#natural-language-processing)

**Sources**:

- [University of Washington: "AI + Teaching"](https://teaching.washington.edu/course-design/ai/)
- UW API Docs: Module 1, Lesson 4, "Intro to AI and API docs"

---

## Machine Learning

**Definition**: practice of using algorithms and large datasets to
train computers to recognize patterns and apply learned patterns
to complete new tasks

**Purpose**: enables AI tools to improve API documentation through
pattern recognition in existing documentation, automated categorization,
and predictive suggestions

**Related Terms**: [AI](#ai), [genAI](#genai),
[Natural Language Processing](#natural-language-processing)

**Sources**:

- [University of Washington: "AI + Teaching"](https://teaching.washington.edu/course-design/ai/)
- UW API Docs - Module 1, Lesson 4, "Intro to AI and API docs"

---

## Natural Language Processing

**Definition**: also known as NLP; computer's ability to analyze and
generate responses that mimic human language use through machine learning
on large text datasets

**Purpose**: powers features in documentation tools such as search capability,
autocomplete, spell-check, and automated translation of API documentation

**Example**: NLP enables smart search in API documentation that understands
queries like "how to authenticate" and returns relevant authentication endpoints

**Related Terms**: [AI](#ai), [Large Language Model](#large-language-model),
[Machine Learning](#machine-learning)

**Sources**:

- [University of Washington: "AI + Teaching"](https://teaching.washington.edu/course-design/ai/)
- UW API Docs: Module 1, Lesson 4, "Intro to AI and API docs"

---

## prompt engineering

**Definition**: practice of crafting effective instructions and
queries to AI systems to generate desired outputs

**Purpose**: enables documentation teams to consistently collect
useful results from AI tools by providing clear context, constraints,
and expected output formats

**Example**: requesting "Generate an OpenAPI description for a
`GET` endpoint that retrieves user profiles, including response codes
and example JSON" rather than "describe this endpoint"

**Related Terms**: [AI](#ai), [Large Language Model](#large-language-model)

**Sources**:

- [University of Washington: "AI + Teaching"](https://teaching.washington.edu/course-design/ai/)
- UW API Docs: Module 1, Lesson 4, "Intro to AI and API docs"

---

## training data

**Definition**: large datasets used to teach machine learning models to
recognize patterns and generate responses

**Purpose**: understanding training data limitations helps documentation teams
recognize when AI outputs may contain biases, outdated information, or
inaccuracies requiring verification

**Related Terms**: [AI](#ai), [Large Language Model](#large-language-model),
[Machine Learning](#machine-learning)

**Sources**:

- [University of Washington: "AI + Teaching"](https://teaching.washington.edu/course-design/ai/)
- UW API Docs: Module 1, Lesson 4, "Intro to AI and API docs"

---
