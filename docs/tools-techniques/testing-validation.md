# Testing-Validation

Tools and frameworks for implementing docs-as-tests workflows in API documentation.
From behavior-driven testing frameworks to browser automation tools, this section
covers the software and methods used to validate APIs, test code examples, and
verify UI procedures, ensuring documentation stays synchronized with product
implementation and catching discrepancies before users encounter them.

---

## Bruno

**Definition**: open source API client and testing tool with offline-first
approach that stores collections directly in filesystem; uses plain text
markup language Bru to save API request information

**Purpose**: enables API testing and documentation through offline-first
approach that integrates with Git workflows; local-first architecture
supports environment variables, request chaining, response assertions,
and JavaScript-based test scripts, making it suitable for both
contract and workflow testing

**Offline-first vs Cloud-based API Testing**:

| Aspect | Offline-first - Bruno | Cloud-based - Postman |
| -------- | ---------------------- | ---------------------- |
| Storage | Git repositories, plain text files | Proprietary cloud storage |
| Security | API credentials stay local | Credentials sent to third-party servers |
| Network | Works without internet | Requires connectivity for sync |
| Collaboration | Pull requests, code review | Cloud sharing |
| Cost | Free, no subscription | Free tier limited, paid plans |

**Example**: teams use Bruno to create and run API tests locally, storing
test collections in Git repositories alongside their code

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[API security](../core-concepts/api-fundamentals.md#api-security),
[contract testing](../workflows-methodologies.md#contract-testing),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[environment variables](../core-concepts/api-fundamentals.md#environment-variables),
[Postman](documentation-specific.md#postman),
[Postman Newman](testing-validation.md#postman-newman),
[workflow testing](../workflows-methodologies.md#workflow-testing)

**Sources**:

- [Bruno Docs: "What is Bruno?"](https://docs.usebruno.com/introduction/what-is-bruno)
- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)

---

## Cucumber

**Definition**:
[BDD - behavior-driven development](https://www.geeksforgeeks.org/software-engineering/behavioral-driven-development-bdd-in-software-engineering/) -
testing framework that enables writing tests in plain language using Gherkin
syntax, a set of grammar rules

**Purpose**: allows non-technical stakeholders to read and write test
scenarios; bridges communication between business requirements and technical
implementation in API testing

### Given-When-Then

Gherkin's structured syntax for describing test scenarios in natural language
uses
[the _Given-When-Then_ format](https://martinfowler.com/bliki/GivenWhenThen.html);
equivalent to
[the AAA pattern, _Arrange-Act-Assert_](https://semaphore.io/blog/aaa-pattern-test-automation),
in unit testing, but uses business-friendly language

| BDD - Gherkin | Unit Testing | Purpose | API Testing Example |
| --------------- | -------------- | --------- | --------------------- |
| **Given** | **Arrange** | Establishes preconditions and initial context | Given the API endpoint `/users/{id}` exists &rarr; server authenticates user with a valid token |
| **When** | **Act** | Describes the test action/event | When client/user sends `GET` request to `/users/123` |
| **Then** | **Assert** | Specifies expected outcomes and assertions | Then the response status code should be `200` &rarr; response body contains `"id": 123` &rarr; response time is under 500 ms |

**Example**: teams write API test scenarios that both product managers and
developers can understand and validate

```gherkin
Feature: User API retrieval

  Scenario: Successfully retrieve user by ID
    Given the API endpoint "/users/{id}" exists
    And the user is authenticated with a valid token
    When a GET request is sent to "/users/123"
    Then the response status code should be 200
    And the response body contains "id": 123
    And the response includes "name" and "email" fields
```

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[BDD](../workflows-methodologies.md#bdd),
[contract testing](../workflows-methodologies.md#contract-testing),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests), [Karate](#karate),
[snippet testing](../workflows-methodologies.md#snippet-testing),
[usability testing](../workflows-methodologies.md#usability-testing),
[workflow testing](../workflows-methodologies.md#workflow-testing)

**Sources**:

- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)
- [The Cucumber Open Source Project, Introduction: "What is Cucumber?"](https://cucumber.io/docs)

---

## Cypress

**Definition**: an open source end-to-end testing framework that enables
automated testing of web applications through browser automation, designed
with developer experience and ease of use as priorities

**Purpose**: allows technical writers to create automated tests for UI
documentation by controlling browsers, simulating user interactions, and
verifying page behavior; supports docs-as-tests workflows by validating
that documented UI procedures execute correctly; provides visual test runner
for debugging and can capture screenshots at each test step; tests written
in JavaScript or TypeScript

**Example**: a documentation team writes a Cypress test that validates
their "Google Search" tutorial by navigating to Google, entering search
terms in the search bar, pressing Enter, and verifying search results appear;
the test automatically captures a screenshot of the results page to include
in documentation; when Google changes their search bar selector, the Cypress
test fails, alerting writers that their documented instructions need updating

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[CI/CD pipeline](development-essentials.md#cicd-pipeline),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[Playwright](#playwright), [UI](development-essentials.md#ui)

**Sources**:

- [Cypress.io: Official Documentation](https://docs.cypress.io/)
- [Manny Silva, Docs as Tests: "Validate a UI with Cypress"](https://www.docsastests.com/validate-ui-with-cypress)

---

## Doc Detective

**Definition**: an open source testing tool designed specifically for
implementing docs-as-tests workflows by validating documentation against
product APIs, CLIs, and UIs

**Purpose**: enables technical writers to create automated tests that execute
documented procedures, verify UI interactions, test API endpoints, and
validate command-line instructions; catches documentation-product discrepancies
before users encounter them; integrates with CI/CD pipelines to run tests
automatically when code or documentation changes

**Example**: a documentation team writes a Doc Detective test specification
that navigates to a sign-up page, verifies the presence of specific form fields,
enters test data, clicks the "Create Account" button, and validates the expected
response; when developers change the button text from "Create Account" to
"Sign Up Now," the test fails, alerting writers to update their documentation

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[CI/CD pipeline](development-essentials.md#cicd-pipeline),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[Playwrite](#playwright), [Selenium](#selenium),
[Vale](documentation-specific.md#vale)

**Sources**:

- [Doc Detective: Official Documentation](https://doc-detective.com/)
- [Manny Silva, Docs as Tests: "Validate a UI with Doc Detective"](https://www.docsastests.com/validate-ui-with-doc-detective)
- [James Tasse: "Docs as Tests: Part I - On a High (Level)"](https://jamestasse.tech/2025/05/29/docs-as-tests-on-a-high-level/)

---

## Dredd

**Definition**: command-line tool that tests API implementations against
API Blueprint and OpenAPI specifications

**Purpose**: validates that actual API behavior matches documented specifications;
catches discrepancies between API documentation and implementation;
runs tests against a live API server, particularly valuable for
contract testing; supports hooks in many different languages
for test setup and cleanup

**Example**: developers run Dredd in CI/CD pipelines to verify API responses
match OpenAPI examples before deploying documentation updates

**Related Terms**: API Blueprint,
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[CI/CD pipeline](development-essentials.md#cicd-pipeline),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[contract testing](../workflows-methodologies.md#contract-testing),
[OpenAPI Specification](../core-concepts/documentation-specific.md#openapi-specification)

**Sources**:

- [Dredd - HTTP API Testing Framework](https://dredd.org/en/latest/index.html)
- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)

---

## `json-server`

**Definition**: a [Node.js](https://nodejs.org/en)
tool that creates a mock REST API from a JSON file;
commonly referred to as "json-server" in lowercase when
discussing
[the npm package](https://www.npmjs.com/package/json-server),
while "JSON Server" is often used in a more general context
to describe the tool itself

**Purpose**: allows documentation writers and developers to
prototype and test API documentation without a live backend;
generates a fully functional REST API with
[CRUD operations](../core-concepts/api-fundamentals.md#crud)
using methods `GET`, `POST`, `PUT`, and `DELETE` based on a
streamlined JSON structure, enabling realistic examples
and testing scenarios

**Example**: a `db.json` file with user data automatically
creates REST endpoints: `/users` returns all users,
`/users/1` returns the user with `id` 1

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[cURL](development-essentials.md#curl),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[Postman](documentation-specific.md#postman),
[REST API](../api-types-architectures.md#rest-api),
[Swagger](documentation-specific.md#swagger)

**Sources**:

- [JSON Server Homepage](https://json-server.dev/)
- UW API Docs: Module 3, Lesson 3, "Introduction to `json-server`, cURL, and Postman"

---

## Karate

**Definition**: open source testing framework that combines API testing,
mocks, performance testing, and UI automation using BDD - _behavior-driven
development_ - syntax; more structured and opinionated than Cucumber,
but with lower barrier to entry

**Purpose**: enables comprehensive API testing with minimal code and/or
without requiring comprehensive programming knowledge; supports
both functional testing and performance testing in unified framework
and reads like documentation

**Example**: testers write API test scenarios in Gherkin-like syntax that
validate responses, chain requests, and verify data transformations

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[contract testing](../workflows-methodologies.md#contract-testing),
[Cucumber](#cucumber), [UI](development-essentials.md#ui),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests)

**Sources**:

- [Karate Labs, Inc.: "API Automation Testing with Karate"](https://www.karatelabs.io/api-testing)
- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)

---

## Microcks

**Definition**: open source cloud-native tool for API mocking and
contract testing that transforms API specifications into live simulations

**Purpose**: accelerates API development by providing realistic mocks
before implementation exists; validates API conformance against OpenAPI,
AsyncAPI, GraphQL, gRPC and other specifications; supports both
synchronous and event-driven APIs

**Example**: teams import OpenAPI specifications into Microcks to generate
mock endpoints for parallel development, then run contract tests to
verify implementations match specifications

**Related Terms**: [AsyncAPI](../core-concepts/documentation-specific.md#asyncapi),
[contract testing](../workflows-methodologies.md#contract-testing),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[event-driven](../api-types-architectures.md#event-driven),
[GraphQL API](../api-types-architectures.md#graphql-api),
[gRPC API](../api-types-architectures.md#grpc-api),
[OpenAPI Specification](../core-concepts/documentation-specific.md#openapi-specification),
[Pact](#pact)

**Sources**:

- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)
- [The Linux Foundation, Microcks Docs: "What is Microcks?"](https://microcks.io/documentation/overview/what-is-microcks/)

---

## Pact

**Definition**: open source consumer-driven contract testing framework that
generates contracts from consumer tests and verifies provider implementations
satisfy those contracts

**Purpose**: contract testing tool that makes sure both API consumers and
providers stay in sync; prevents breaking changes in distributed systems by
testing integration points in isolation; enables independent deployment of
services with confidence; helps teams manage APIs as they change over
time by providing a clear record of API behavior, easily integrates
into CI/CD

**Example**: front-end team writes tests defining expected API responses,
generating contract files that backend team uses to verify their implementation
meets consumer expectations

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[CI/CD pipeline](../tools-techniques/development-essentials.md#cicd-pipeline),
[contract testing](../workflows-methodologies.md#contract-testing),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[Microcks](#microcks)

**Sources**:

- [Pact Foundation, Pact Docs: "Introduction" by Matt Fellows](https://docs.pact.io/)
- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)

---

## Playwright

**Definition**: an open source browser automation framework created by
Microsoft that enables automated testing of web applications across multiple
browsers; focuses on [Chromium](https://www.chromium.org/chromium-projects/),
[Firefox](https://www.firefox.com/en-US/?redirect_source=mozilla-org),
and [Webkit](https://webkit.org/)

**Purpose**: allows technical writers to create automated tests for UI
documentation by programmatically controlling browsers, simulating user
interactions, and verifying page behavior; supports docs-as-tests workflows
by validating that documented UI procedures work as written; can capture
screenshots, test responsive designs, and verify accessibility

**Example**: a documentation team uses Playwright to automate testing of
their web app tutorial, scripting the exact steps users should follow -
clicking buttons, filling forms, navigating between pages - and verifying that
each step produces the documented result; when a UI change breaks the
documented workflow, the Playwright test fails during CI/CD pipeline execution

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[CI/CD pipeline](development-essentials.md#cicd-pipeline), [Cypress](#cypress),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[Selenium](#selenium), [UI](development-essentials.md#ui),
[Vale](documentation-specific.md#vale)

**Sources**:

- [Manny Silva, Docs as Tests: "Tools"](https://www.docsastests.com/tools)
- [Microsoft, Playwright: Official Documentation](https://playwright.dev/)
- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)

---

## Postman Newman

**Definition**: command-line collection runner for Postman that executes API
tests and validations in automated environments

**Purpose**: enables automated testing of Postman collections in CI/CD pipelines,
continuous integration workflows, and headless environments; runs the same
API tests created in Postman GUI without requiring the graphical interface;
validates API behavior, response codes, data structures, and performance
against documented expectations

**Why this belongs in `Testing-Validation`**: executes automated API tests against
live endpoints to validate runtime behavior, distinguishing it from Postman's
interactive exploration interface; focuses on continuous validation and regression
testing in CI/CD pipelines rather than manual API discovery, making it
_fundamentally a testing automation tool_

**Example**:

| Phase | Action | Result |
| ------ | -------------- | -------- |
| **Setup** | Documentation team creates Postman collections documenting their API | Newman runs these collections automatically in their CI/CD pipeline |
| **Testing** | Documentation team adds embedded tests that validate response schemas and status codes | Newman runs these tests automatically in their CI/CD pipeline |
| **Detection** | Developer changes endpoint response format without updating spec | Newman catches breaking changes |
| **Prevention** | Build fails, blocks deployment | Team updates documentation before code ships |

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[CI/CD pipeline](development-essentials.md#cicd-pipeline),
[contract testing](../workflows-methodologies.md#contract-testing),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests), [Dredd](#dredd),
[Postman](documentation-specific.md#postman), [Redocly Respect](testing-validation.md#redocly-respect)

**Sources**:

- [Postman, Inc., Postman Docs: "Run and test collections from the command line using Newman CLI"](https://learning.postman.com/docs/collections/using-newman-cli/command-line-integration-with-newman/)
- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)

---

## Redocly Respect

**Definition**: API contract and workflow testing tool that
continuously validates live APIs against Arazzo/OpenAPI definitions

**Purpose**: ensures documentation reflects actual API behavior by testing
endpoints, response codes, data schemas, and workflows against specifications;
catches discrepancies between documented and implemented behavior before they
affect users; treats API and workflow definitions as living tests that
validate documentation accuracy

**Why this belongs in `Testing-Validation`**: validates _runtime API behavior_
against specifications through actual endpoint testing and workflow execution,
distinguishing it from static spec linters like
[Redocly CLI](https://redocly.com/docs/cli/),
[Spectral](https://stoplight.io/open-source/spectral), or
[Vale](https://vale.sh/docs) that _analyze documents without making API calls_;
focuses on contract testing that ensures the live API matches what documentation
promises, making it _fundamentally a testing tool rather than a documentation
renderer_

**Example**:

| Phase | Action | Result |
| ------ | -------------- | -------- |
| **Setup** | Documentation team integrates Respect into CI/CD pipeline | Automated testing on every commit |
| **Testing** | Respect makes API calls to payment endpoints | Validates response codes, data structures, workflows match OpenAPI spec |
| **Detection** | Developer changes endpoint response format without updating spec | Respect detects mismatch between live API and documentation |
| **Prevention** | Build fails, blocks deployment | Team updates documentation before code ships |

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
Arazzo, [CI/CD pipeline](development-essentials.md#cicd-pipeline),
[contract testing](../workflows-methodologies.md#contract-testing),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests), [Dredd](#dredd),
[OpenAPI Specification](../core-concepts/documentation-specific.md#openapi-specification),
[Postman Newman](#postman-newman), [Redocly](documentation-specific.md#redocly),
[workflow testing](../workflows-methodologies.md#workflow-testing)

**Sources**:

- [Redocly Docs: "Respect your API and detect problems early"](https://redocly.com/docs/respect/)
- [Redocly Docs: "Use Cases for Respect"](https://redocly.com/docs/respect/use-cases)
- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)

---

## Selenium

**Definition**: an open source framework for automating web browser
interactions used for testing web applications

**Purpose**: enables automated testing of web-based documentation and
tutorials by simulating user actions in browsers; supports docs-as-tests
workflows by validating that documented UI procedures execute correctly;
allows technical writers to create test scripts that verify documented
workflows across different browsers and platforms

**Example**: a technical writer creates a Selenium script that automates
the steps in their "Getting Started" guide, opening the app URL,
entering credentials in the login form, clicking through each documented
menu option, and verifying that each action produces the expected result;
the script runs nightly to catch any UI changes that would make the
documentation inaccurate

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[Cypress](#cypress), [Doc Detective](#doc-detective),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[Playwright](#playwright), [UI](development-essentials.md#ui)

**Sources**:

- [Software Freedom Conservancy, Selenium: Official Documentation](https://www.selenium.dev/)
- [Manny Silva, Docs as Tests: "Tools"](https://www.docsastests.com/tools)

---

## Speakeasy

**Definition**: platform for generating and maintaining API SDKs and
documentation from OpenAPI specifications

**Purpose**: automates SDK creation across multiple programming languages;
keeps client libraries synchronized with API changes through code generation;
excels at contract testing by verifying that both the API implementation
follows the expected contract and that generated SDKs correctly interact
with the API, offering detailed validation of request/response schemas,
status codes, and error handling in a unified workflow

**Example**: API providers use Speakeasy to generate Python, TypeScript, and
Go SDKs from their OpenAPI specification, updating all SDKs automatically
when the API changes

**Related Terms**:
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[error handling](../core-concepts/api-fundamentals.md#error-handling),
[HTTP status codes](../core-concepts/api-fundamentals.md#http-status-codes),
[OpenAPI Specification](../core-concepts/documentation-specific.md#openapi-specification),
[request/response](../core-concepts/api-fundamentals.md#requestresponse),
SDK

**Sources**:

- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)
- [Speakeasy Docs: "Get started with Speakeasy"](https://www.speakeasy.com/docs)

---
