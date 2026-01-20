# Testing-Validation

Tools and frameworks for implementing docs-as-tests workflows in API documentation.
From behavior-driven testing frameworks to browser automation tools, this section
covers the software and methods used to validate APIs, test code examples, and
verify UI procedures, ensuring documentation stays synchronized with product
implementation and catching discrepancies before users encounter them.

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
[API security](../core-concepts.md#api-security),
[contract testing](../workflows-methodologies.md#contract-testing),
[environment variables](../core-concepts.md#environment-variables),
Newman, Postman,
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

**Related Terms**: [Karate](#karate),
[API documentation testing](../workflows-methodologies.md#api-documentation-testing),
[contract testing](../workflows-methodologies.md#contract-testing),
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
CI/CD pipeline, [docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[Playwright](#playwright), UI

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
CI/CD pipeline, [docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[Playwrite](#playwright), [Selenium](#selenium), Vale

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
CI/CD pipeline,
[contract testing](../workflows-methodologies.md#contract-testing),
[OpenAPI Specification](../core-concepts.md#openapi-specification)

**Sources**:

- [Dredd - HTTP API Testing Framework](https://dredd.org/en/latest/index.html)
- [Silva, Manny. _Docs As Tests_. First edition, Release 2, Boffin Education, May 2025.](https://boffin.education/about-docs-as-tests/)

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
[Cucumber](#cucumber), UI

**Sources**:

- [Karate Labs, Inc.: "API Automation Testing with Karate"](https://www.karatelabs.io/api-testing)
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
CI/CD pipeline, [Cypress](#cypress),
[docs-as-tests](../workflows-methodologies.md#docs-as-tests),
[Selenium](#selenium), UI, Vale

**Sources**:

- [Manny Silva, Docs as Tests: "Tools"](https://www.docsastests.com/tools)
- [Microsoft, Playwright: Official Documentation](https://playwright.dev/)

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
[Playwright](#playwright), UI

**Sources**:

- [Software Freedom Conservancy, Selenium: Official Documentation](https://www.selenium.dev/)
- [Manny Silva, Docs as Tests: "Tools"](https://www.docsastests.com/tools)

---
