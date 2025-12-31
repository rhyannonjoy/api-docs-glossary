# Style guide

This guide defines content standards for the API Docs Glossary:
what makes a good term entry, how to format definitions,
capitalization rules, and writing conventions. All contributions
must follow these standards to maintain consistency and quality.

_For technical setup and the pull request process, visit the
[Contribution Guide](contribution-guide.md)._

---

## Glossary philosophy

The API Docs Glossary exists to demystify API documentation terminology
for writers, developers, and technical communicators.
Good glossary entries:

- **Aim for clarity over comprehensiveness** - brief, scannable
definitions that get readers oriented quickly
- **Connect concepts** - show how terms relate to each other through
thoughtful linking
- **Focus on API documentation context** - explain why terms matter
specifically for documenting APIs
- **Serve real needs** - address terms readers actually encounter in
API documentation work

_This glossary isn't an exhaustive technical reference. It's a practical
resource for people learning or working in API documentation who need
quick, reliable definitions._

---

## What to contribute

Documentation improvements are always welcome. Contributions must
benefit API Docs Glossary readers. Contributions are _especially_
welcome if they:

- add new API documentation terms with clear definitions
- improve clarity of existing definitions
- add relevant examples to existing terms
- fix technical inaccuracies

Before contributing, create
[an issue](https://github.com/rhyannonjoy/api-docs-glossary/issues)
to discuss additions or changes.

---

## Add a new glossary term

Most terms live in existing category files. To add a new term:

1. Identify which category file the term belongs in:
   - `quick-reference.md` - Common terms, concise definitions
   - `core-concepts.md` - Fundamental API documentation concepts
   - `ai-and-apis.md` - AI technologies, concepts relevant to API documentation
   - `tools-techniques.md` - Tools, software, methods
   - `workflows-methodologies.md` - Development, documentation workflows for API projects
   - `frameworks-strategy.md` - Conceptual models, strategic approaches for API documentation work
   - `writing-style.md` - Language conventions, tone guidelines, rhetorical approaches

2. Add the term using this format:

    ```markdown
    ## Term Name
   
    **Definition**: Brief, clear definition
   
    **Purpose**: Why this matters for API documentation
   
    **Example**: Real-world example or use case (optional)
   
    **Related Terms**: Link to other relevant terms

    **Source**: Acknowledgement of the information's origin
    ```

3. Place the term alphabetically within its section
or at the end of the appropriate subsection

4. Test locally with `npm start` to ensure formatting looks correct

---

## Capitalization

Use consistent capitalization to maintain clarity and
professionalism.

### Term rules by category

| Category | Rule | Examples |
| -------- | -------- | --------- |
| Proper noun & products | Always capitalize official names | Agile, Git, GitHub |
| Official tools | Capitalize specific product names | GitHub Desktop, Swagger Editor |
| Acronyms | Always capitalize | API, GUI, HTTP/HTTPS, REST |
| Brand-specific | Follow the product's capitalization | cURL, json-server, macOS |
| Common terms | Use lowercase | branch, commit, repository |
| Git commands | Use lowercase | pull, push, rebase |
| Generic phrases | Use lowercase | merge conflict, pull request, version control |
| File types | Use lowercase unless referring to the language | `markdown` file, but Markdown language |

### Headings

Match term headings with the capitalization of the term itself:

- `## branch` not `## Branch`
- `## GitHub` not `## github`
- this preference breaks Vale rules, but that's OK

### Definition and purpose fields

Use sentence fragments and/or phrases rather than complete sentences.
Start with lowercase unless the word is a proper noun:

```markdown
## branch

**Definition**: a parallel version of a repository that
enables work on changes without affecting the main codebase

**Purpose**: enables multiple developers to work on different
features simultaneously in API documentation workflows
```

**Rare exception:** if a definition must be a complete sentence
for clarity, capitalize the first word per standard sentence rules,
even if it's the term itself:

```markdown
## rebase

**Definition**: Rebase updates the base commit from
which a branch was created.
```

---

## Related terms linking strategy

Link related terms to help readers navigate connected concepts
and build understanding of how terms relate to each other.
Include 3-6 related terms per entry. Too few misses valuable
connections, while too many overwhelms and dilutes relevance.
Link terms that are:

- **Directly connected**: terms used together in workflows,
such as branch → merge, commit, rebase
- **Prerequisite concepts**: terms readers need to understand
first, such as REST API → HTTP, JSON
- **Higher-level concepts**: category terms that provide context,
such as cURL → API testing, command line

### Link format

- list terms in alphabetical or local order: prerequisites first,
then workflow-related, then alternatives
- use the exact term name as it appears in its heading
- separate with commas: `**Related Terms**: branch, commit, merge, rebase`

### Linking syntax

**For terms in the same file:**

```markdown
**Related Terms**: [term name](#term-name)
```

Example: `**Related Terms**: [API](#api), [REST API](#rest-api)`

**For terms in different files:**

```markdown
**Related Terms**: [term name](filename.md#term-name)
```

Example: `**Related Terms**: [Git](tools-techniques.md#git), [GitHub](tools-techniques.md#github)`

**Important**:

- the anchor link - `#term-name` - must exactly match the heading
- use lowercase and hyphens for multi-word terms: `#http-status-codes`
- acronyms are lowercase in anchors: `#rest-api` not `#REST-API`
- test all links locally with `npm start` before submitting
- _**only link to terms that exist** - don't list terms in the
Related Terms list that don't have glossary entries_

---

## Source references

Provide specific, verifiable sources for all term definitions
and information. Sources acknowledge where information originates
and allow readers to explore topics further.

### Format guidelines

**For web sources**, use descriptive link text with the full URL:

```markdown
**Source**: [Organization Name: "Page Title"](https://full-url.com)
```

Example:

```markdown
**Source**: [IETF RFC 9110 - HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)
```

**For course materials**, include course name, module, lesson, and topic title:

```markdown
**Source**: Course Name: Module X, Lesson Y, "Topic Title"
```

Example:

```markdown
**Source**: UW API Docs: Module 5, Lesson 1, "REST API Fundamentals"
```

**For many sources**, use a bulleted list:

```markdown
**Sources**:

- [Organization: "Title"](https://url.com)
- Course Name: Module X, Lesson Y, "Topic"
```

Example:

```markdown
**Sources**:

- [University of Washington: "AI + Teaching"](https://teaching.washington.edu/course-design/ai/)
- UW API Docs: Module 1, Lesson 4, "Intro to AI and API docs"
```

### Best practices

- be as specific as possible - include authors' names, exact page titles,
section names, or RFC, Requests for Comments, numbers
- for official specifications - HTTP, OpenAPI - link to the authoritative
source
- for course materials without public URLs, provide enough detail for
verification
- if citing forum discussions or informal sources, note the context:
"UW API Docs Canvas Forum"
- when a term draws from many sources, sort them alphabetically

---

## Voice and tone

Write in active voice without first-person pronouns to maintain
directness and professional tone.

### Active voice

Use active voice where the subject performs the action:

- ✅ "Git tracks changes in files"
- ❌ "Changes in files are tracked by Git"
- ✅ "Developers use branches to isolate work"
- ❌ "Branches are used by developers to isolate work"

### Avoid first-person pronouns

Write from a neutral, instructional perspective:

- ❌ "We use branches to isolate work"
- ❌ "You should commit changes frequently"
- ✅ "Branches isolate work without affecting the main codebase"
- ✅ "Frequent commits create detailed project history"

### Exception for purpose and example fields

Use second person - "users," "developers," "writers" -
when describing who performs actions:

- ✅ `**Purpose**: enables developers to work on different features simultaneously`
- ✅ `**Example**: developers create a branch named docs/add-webhook-guide`

### Clarity over rules

If passive voice improves clarity or readability, use it -
but this is likely rare. When in doubt, rewrite in active voice.

---

## Add a term to Quick Reference

_**Note**: every Quick Reference entry must have a corresponding full entry in a
category file; don't create Quick Reference entries for terms that lack detailed
definitions elsewhere in the glossary_

The Quick Reference page provides concise definitions and filing
locations for commonly used terms. Add terms to Quick Reference when
they meet these criteria:

- Frequently referenced across many contexts
- Benefit from a brief, scannable definition
- Already have a full entry in one of the main category files

To add a term to Quick Reference:

1. **Add the term alphabetically** under the appropriate letter
heading in `quick-reference.md`

2. **Use this format**:

   ```markdown
      ### term name

      - category or ecosystem context
      - brief definition or key characteristic

      **Glossary Term Entry Location**: [Category Name - term name](category-file.md#term-name)

      ---
   ```

3. **Link to the full entry** using the syntax: `[Link Text](page-name.md#header-id)`

   - `page-name.md` is the category filename
   - `header-id` is the exact heading, including capitalization
   - Match the `header-id` to the heading exactly as it appears in the target file

4. **Example**:

   ```markdown
      ### Waterfall

      - project management method
      - traditional, sequential, linear, idealistic

      **Glossary Term Entry Location**: [Workflows & Methodologies - Waterfall](workflows-methodologies.md#waterfall)

      ---
   ```

5. **Test the link** locally with `npm start` to ensure it navigates
correctly to the full entry

---

## Create a new category

If the term doesn't fit existing categories and warrants a new one:

1. Create a new Markdown file in the `docs/` directory, such as `advanced-topics.md`
2. Add a category overview following this format:

   ```markdown
   # Category name
   
   Brief description of what this category covers. This section explains
   the scope and purpose, helping readers understand what types of terms
   they'll find here and why these concepts matter for API documentation.
   ```

   ```markdown
   <!-- Example overview with value proposition -->
   # Tools & techniques
   
   Essential tools and methods for API documentation workflows.
   From version control to interactive documentation generators,
   this section covers the software, platforms, and practices used
   to create, test, validate, and publish API documentation.
   ```

3. Add the term and/or terms using the format described in
[Add a new glossary term](#add-a-new-glossary-term)
4. Add the new file to `sidebars.ts` in the logical position within the array
5. Test the navigation locally with `npm start` to ensure the new category
appears correctly

---
