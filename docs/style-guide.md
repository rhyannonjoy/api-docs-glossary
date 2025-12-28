# Style guide

This guide defines content standards for the API Docs Glossary:
what makes a good term entry, how to format definitions,
capitalization rules, and writing conventions. All contributions
must follow these standards to maintain consistency and quality.

For technical setup and the pull request process, visit the
[Contribution Guide](contribution-guide.md).

## What to contribute

Documentation improvements are always welcome. Contributions must
benefit API Docs Glossary readers. Contributions are _especially_
welcome if they:

- Add new API documentation terms with clear definitions
- Improve clarity of existing definitions
- Add relevant examples to existing terms
- Fix technical inaccuracies

Before contributing, create
[an issue](https://github.com/rhyannonjoy/api-docs-glossary/issues)
to discuss additions or changes.

## Add a new glossary term

Most terms live in existing category files. To add a new term:

1. Identify which category file the term belongs in:
   - `core-concepts.md` - Fundamental API documentation concepts
   - `quick-reference.md` - Common terms and quick definitions
   - `tools-and-techniques.md` - Tools, software, and methods

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

5. Submit the pull request

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
- This breaks Vale rules, but that's OK

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

- List terms in alphabetical or local order: prerequisites first,
then workflow-related, then alternatives
- Use the exact term name as it appears in its heading
- Separate with commas: `**Related Terms**: branch, commit, merge, rebase`

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
5. Test the navigation locally to ensure the new category appears correctly
