# Documentation-Specific

Tools for rendering, exploring, and maintaining API documentation.
From interactive specification viewers to automated style checkers,
this section covers the platforms that help teams create accurate,
consistent, and developer-friendly API documentation.

<!-- TODO: consider adding GitHub Pages, Stoplight, MkDocs, Docusaurus, Static site generators -->

## Markdown

**Definition**: lightweight markup language created by John Gruber in 2004

**Purpose**: popular for writing documentation - designed to format plain
text documents and allows users to add elements like headers,
links, lists, and tables

**Related Terms**: [Git](development-essentials.md#git),
[Git Bash](development-essentials.md#git-bash),
[GitHub](development-essentials.md#github), [Vale](#vale)

**Sources**:

- [Markdown Guide: Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- UW API Docs: Canvas General Forum

---

## Postman

**Definition**: API development platform for designing, testing,
documenting, and monitoring APIs through a graphical interface

**Purpose**: commonly used for REST API development and testing
workflows; enables API testing and exploration without
command-line tools; provides a GUI alternative to cURL
for making HTTP requests, supports automated test suites, collection
sharing, and API documentation generation

**Why this belongs in `Documentation-Specific`**: Postman is primarily
a platform for exploring, documenting, and sharing APIs through
collections, automated documentation generation, and collaborative
workspaces; while it includes testing capabilities, its _core identity_
centers on API discovery and documentation workflows rather than
automated validation - teams use Postman to understand how APIs work
and communicate that understanding to others, making it
_fundamentally a documentation and exploration tool_

**Example**: a technical writer creates a Postman collection documenting
all endpoints for a payment API, organizing requests into folders like
"Authentication," "Transactions," and "Refunds"; they add descriptions,
example requests with pre-filled parameters, and expected responses to
each endpoint; the team shares this collection with developers and partners,
who use it to explore the API interactively and understand how different
endpoints work together - the collection becomes living documentation
that stays synchronized with the API as it evolves

**Related Terms**:
[Bruno](testing-validation.md#bruno), [cURL](development-essentials.md#curl),
[GUI](development-essentials.md#gui), [json-server](testing-validation.md#json-server),
[REST API](../api-types-architectures.md#rest-api), [Swagger](#swagger),
[UI](development-essentials.md#ui)

**Sources**:

- UW API Docs: Module 3, Lesson 3, "Introduction to json-server, cURL, and Postman"
- [Postman, Inc.: "What is Postman?"](https://www.postman.com/product/)

---

## RFC

**Definition**: acronym for _Request for Comments_; numbered technical documents
published by the IETF - _Internet Engineering Task Force_ - that define standards,
protocols, and procedures for internet technologies

**Purpose**: RFCs provide authoritative specifications for protocols
like HTTP, HTTPS, and other web standards; API documentation writers
reference RFCs to ensure accurate technical descriptions and link to
them as sources for protocol definitions and behavior

**Example**: when documenting HTTP status codes, writers cite
[IETF RFC 9110 - HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110.html)
as the authoritative source; RFC numbers, such as RFC 9110, provide
a permanent, verifiable reference that remains accessible even as
web pages change

**Related Terms**: [HTTP](../core-concepts.md#http),
[HTTPS](../core-concepts.md#https),
[REST API](../api-types-architectures.md#rest-api)

**Sources**:

- [Geeks for Geeks: "RFC (Request For Comment)"](https://www.geeksforgeeks.org/computer-networks/rfc-request-for-comment/)
- [IETF: About Page](https://www.ietf.org/about/)

---

## Redocly

**Definition**: API documentation platform and OpenAPI tooling suite for
creating, validating, and publishing API reference documentation

**Purpose**: transforms OpenAPI specifications into interactive,
customizable documentation; provides linting and validation for API
specifications through automated rule enforcement

**Common Redocly tools**:

- [Redocly CLI](https://redocly.com/docs/cli/) - Command-line interface
for linting, bundling, and building OpenAPI documents
- [Redocly Respect](https://redocly.com/docs/respect/) - OpenAPI linter
that validates specifications against style guides and best practices
- [Redocly Developer Portal](https://redocly.com/docs/developer-portal/) -
Hosts and renders interactive API documentation

**Example**: teams use Redocly CLI with Respect to lint OpenAPI files for
style guide compliance in CI/CD pipelines, catching specification errors
like missing descriptions or inconsistent naming conventions before
deployment; once validated, documentation deploys to Redocly's hosting
platform where developers can explore endpoints interactively

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[CI/CD pipeline](development-essentials.md#cicd-pipeline),
[CLI](development-essentials.md#cli),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[OpenAPI Specification](../core-concepts.md#openapi-specification),
[Spectral](#spectral), [Swagger](#swagger), [Vale](#vale)

**Sources**:

- [Redocly Docs: "About Redocly Documentation"](https://redocly.com/docs/)
- [Redocly Docs: "Redocly Respect Use Cases"](https://redocly.com/docs/respect/use-cases)
- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)

---

## Spectral

**Definition**: open source JSON/YAML linter for creating automated
style guides and validating API descriptions against customizable rulesets

**Purpose**: enforces API design standards and best practices by checking
OpenAPI, AsyncAPI, and JSON Schema documents for structure, completeness,
and style compliance; catches specification errors before API implementation;
ensures consistent API design patterns across teams through automated validation
of OpenAPI/AsyncAPI documents

**Example**: a documentation team configures Spectral to enforce their API
style guide, requiring all endpoints to have descriptions, examples, and
proper HTTP status code documentation; when a developer submits a pull
request with an OpenAPI spec missing operation descriptions, Spectral flags
the violations in CI/CD, preventing merge until documentation is complete

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[AsyncAPI](../core-concepts.md#asyncapi),
[contract testing](../workflows-methodologies.md#contract-testing),
[JSON](../core-concepts.md#json),
[OpenAPI Specification](../core-concepts.md#openapi-specification),
[Redocly](#redocly)

**Sources**:

- [SmartBear Software, Stoplight: "Spectral: An open source API style guide enforcer and linter"](https://stoplight.io/open-source/spectral)
- [GitHub: stoplightio/spectral](https://github.com/stoplightio/spectral)

---

## Swagger

**Definition**: suite of open source tools for designing, building,
documenting, and testing REST APIs based on the OpenAPI Specification

**Purpose**: provides practical tooling to work with OpenAPI Specification
(OAS) documents; enabling visual editing, interactive documentation,
and code generation from a single OAS source file

**Why this belongs in `Documentation-Specific`**: Swagger is an
interactive documentation renderer that visualizes OpenAPI specifications
as browsable, explorable API documentation; while its "Try it out" feature
allows endpoint testing, this functionality serves documentation exploration
rather than automated validation - the tool's primary purpose is presenting
API specifications to developers in human-readable, interactive format,
making it a _documentation presentation tool_ rather than a testing framework

**Common Swagger tools**:

- [Swagger UI](https://swagger.io/tools/swagger-ui/) -
Generates interactive API documentation from OAS files
- [Swagger Editor](https://editor.swagger.io/) -
Web-based editor for creating and editing OAS documents
- [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) -
Generates client libraries and server stubs from OAS files

**Example**: a development team maintains an OpenAPI specification file that
describes their REST API; when they deploy documentation updates, Swagger
automatically renders the specification as an interactive website where
developers can browse endpoints, view request/response schemas, and click
"Try it out" to make test calls directly from the documentation - this
allows API consumers to understand and experiment with endpoints without
leaving the documentation page

**Related terms**: [GUI](development-essentials.md#gui),
[OpenAPI Specification](../core-concepts.md#openapi-specification),
[Redocly](#redocly), [REST API](../api-types-architectures.md#rest-api)

**Source**: [SmartBear Software: "What is Swagger"](https://swagger.io/docs/specification/v2_0/what-is-swagger/)

---

## Vale

**Definition**: an open source command-line tool for linting prose and enforcing
editorial style rules in documentation

**Purpose**: maintains consistency in technical writing by automatically checking
documentation against customizable style guides; catches grammar errors,
terminology inconsistencies, and style violations; integrates with docs-as-code
workflows and CI/CD pipelines to enforce writing standards before publishing;
supports multiple style guides including Microsoft, Google, and
custom rules

**Example**: a documentation team configures Vale to enforce their API documentation
style guide, which requires using "endpoint" instead of "API call" and prohibits
passive voice in code examples; when a writer submits a pull request with
documentation that violates these rules, Vale flags the issues in the CI/CD pipeline,
preventing merge until the team releases corrections

**Related Terms**: [CI/CD pipeline](development-essentials.md#cicd-pipeline),
[docs-as-code](../workflows-methodologies.md#docs-as-code),
[Markdown](#markdown), [pull request](development-essentials.md#pull-request),
[Redocly](#redocly)

**Sources**:

- [JD Kato, Vale: Official Documentation](https://vale.sh/)
- [Manny Silva, Docs as Tests: "Tools"](https://www.docsastests.com/tools)

---
