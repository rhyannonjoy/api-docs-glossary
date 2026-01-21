# Tools & Techniques

Essential tools and methods for API documentation workflows.
From version control to interactive documentation generators,
this section covers the software, platforms, and practices used
to create, test, verify, and publish API documentation.

## json-server

**Definition**: a [Node.js](https://nodejs.org/en)
tool that creates a mock REST API from a JSON file;
commonly referred to as "json-server" in lowercase when
discussing
[the npm package](https://www.npmjs.com/package/json-server),
while "JSON Server" is often used in a more general context
to describe the tool itself

**Purpose**: allows documentation writers and developers to
prototype and test API documentation without a live backend;
generates a fully functional REST API with CRUD operations -
create, read, update, delete - using methods
`GET`, `POST`, `PUT`, and `DELETE` based on a
streamlined JSON structure, enabling realistic examples
and testing scenarios

**Example**: a `db.json` file with user data automatically
creates REST endpoints: `/users` returns all users,
`/users/1` returns the user with `id` 1

**Related Terms**: [cURL](#postman), [Postman](#postman),
[REST API](api-types-architectures.md#rest-api), [Swagger](#swagger)

**Sources**:

- [JSON Server Homepage](https://json-server.dev/)
- UW API Docs: Module 3, Lesson 3, "Introduction to json-server, cURL, and Postman"

---



## Markdown

**Definition**: lightweight markup language created by John Gruber in 2004

**Purpose**: popular for writing documentation - designed to format plain
text documents and allows users to add elements like headers,
links, lists, and tables

**Related Terms**: [Git](#git), [Git Bash](#git-bash), [GitHub](#github),
[Vale](#vale)

**Sources**:

- [Markdown Guide: Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- UW API Docs: Canvas General Forum

---

## Postman

**Definition**: API development platform for designing, testing,
documenting, and monitoring APIs through a graphical interface

**Purpose**: commonly used for REST API development and testing
workflows; enables API testing and exploration without
command-line tools; provides a [GUI](#gui) alternative to cURL
for making HTTP requests, supports automated test suites, collection
sharing, and API documentation generation

**Related Terms**: Bruno, [cURL](#curl), [GUI](#gui),
[json-server](#json-server), [REST API](api-types-architectures.md#rest-api),
[Swagger](#swagger), [UI](#ui)

**Sources**:

- UW API Docs: Module 3, Lesson 3, "Introduction to json-server, cURL, and Postman"
- [Postman, Inc.: "What is Postman?"](https://www.postman.com/product/)

---

## RFC

**Definition**: acronym for Request for Comments; numbered technical documents
published by the IETF - Internet Engineering Task Force - that define standards,
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

**Related Terms**: [HTTP](core-concepts.md#http), [HTTPS](core-concepts.md#https),
[REST API](api-types-architectures.md#rest-api)

**Sources**:

- [Geeks for Geeks: "RFC (Request For Comment)"](https://www.geeksforgeeks.org/computer-networks/rfc-request-for-comment/)
- [IETF: About Page](https://www.ietf.org/about/)

---

## Swagger

**Definition**: suite of open source tools for designing, building,
documenting, and testing REST APIs based on the OpenAPI Specification

**Purpose**: provides practical tooling to work with OpenAPI Specification
(OAS) documents; enabling visual editing, interactive documentation,
and code generation from a single OAS source file

**Common Swagger tools**:

- [Swagger UI](https://swagger.io/tools/swagger-ui/) -
Generates interactive API documentation from OAS files
- [Swagger Editor](https://editor.swagger.io/) -
Web-based editor for creating and editing OAS documents
- [Swagger Codegen](https://swagger.io/tools/swagger-codegen/) -
Generates client libraries and server stubs from OAS files

**Related terms**: [GUI](#gui),
[OpenAPI Specification](core-concepts.md#openapi-specification),
[REST API](api-types-architectures.md#rest-api)

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

**Related Terms**: [CI/CD pipeline](#cicd-pipeline),
[docs-as-code](workflows-methodologies.md#docs-as-code),
[Markdown](#markdown), [pull request](#pull-request)

**Sources**:

- [JD Kato, Vale: Official Documentation](https://vale.sh/)
- [Manny Silva, Docs as Tests: "Tools"](https://www.docsastests.com/tools)

---
