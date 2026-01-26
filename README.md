# API Docs Glossary

A comprehensive glossary of API documentation fundamental concepts, processes,
tools, and best practices. This project originated from coursework in the
[University of Washington's AI-Enhanced API Documentation certification program](https://www.pce.uw.edu/specializations/api-documentation).
Thank you to [Docs By Design](https://docsbydesign.com/)
and the [Write the Docs](https://www.writethedocs.org/)
community for inspiration and resources.

[This glossary](https://rhyannonjoy.github.io/api-docs-glossary/)
is a living document, intended to evolve as the terms do. The API Docs
Glossary is a personal learning project, but suggestions and corrections are welcome.
Visit the
[Contribution Guide](https://rhyannonjoy.github.io/api-docs-glossary/docs/meta/contribution-guide)
for more information.

## Topics

- [API Fundamentals](https://rhyannonjoy.github.io/api-docs-glossary/docs/core-concepts/api-fundamentals):
core concepts, CRUD, HTTP, security, validation
- [Documentation-Specific Concepts](https://rhyannonjoy.github.io/api-docs-glossary/docs/core-concepts/documentation-specific):
AsyncAPI, OpenAPI specification, overview, reference, runbook
- [API Types & Architectures](https://rhyannonjoy.github.io/api-docs-glossary/docs/api-types-architectures):
event-driven, GraphQL, gRPC, microservices, REST, SOAP, Webhook, WebSocket
- [AI & APIs](https://rhyannonjoy.github.io/api-docs-glossary/docs/ai-and-apis):
AI bias, genAI, Large Language Model, training data
- [Tools & Techniques](https://rhyannonjoy.github.io/api-docs-glossary/docs/tools-techniques/development-essentials):
cURL, Doc Detective, Git, Postman, Swagger, Vale
- [Workflows & Methodologies](https://rhyannonjoy.github.io/api-docs-glossary/docs/workflows-methodologies):
Agile, API testing, docs-as-code, docs-as-tests, usability testing
- [Frameworks & Strategy](https://rhyannonjoy.github.io/api-docs-glossary/docs/frameworks-strategy):
audience analysis, Diátaxis, docs-as-ecosystem, domain knowledge, sales collateral
- [Writing Style](https://rhyannonjoy.github.io/api-docs-glossary/docs/writing-style):
content strategy, rhetorical approach, tone style

## Getting Started

This resource provides essential concept definitions and context for
anyone working with and/or learning about API documentation.
Visit the following documentation pages for more information:

- [Introduction](https://rhyannonjoy.github.io/api-docs-glossary/docs/introduction):
find a path through the glossary
- [Getting Started](https://rhyannonjoy.github.io/api-docs-glossary/docs/getting-started):
navigate glossary structure
- [Quick Reference](https://rhyannonjoy.github.io/api-docs-glossary/docs/quick-reference):
find a specific term refresher
- [How This Glossary is Built](https://rhyannonjoy.github.io/api-docs-glossary/docs/meta/how-glossary-built):
learn about the current glossary tools and processes
- [Style Guide](https://rhyannonjoy.github.io/api-docs-glossary/docs/meta/style-guide):
review the current glossary formatting and writing conventions

### Prerequisites

- `Node.js` version 20.0+
- `npm` or `yarn` package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/api-docs-glossary.git

# Navigate to the project directory
cd api-docs-glossary

# Install dependencies
npm install
```

### Local Development

This command starts a local development server and opens up a browser
window at `http://localhost:3000/`. Most changes display live
without having to rebuild the project or restart the server.

```bash
# Start the development server
npm run start
```

### Build

This command generates static content into the `build` directory,
which any static contents hosting service can serve.

```bash
# Create a production build
npm run build
```

## Build Components

- [Docusaurus](https://docusaurus.io/): Documentation site generator
- [React](https://reactjs.org/): UI framework
- [Markdown](https://www.markdownguide.org/): Content format

## Project Structure

```shell
api-docs-glossary/
├── docs/                  # Documentation markdown files
├── src/                   # Custom React components and pages
├── static/                # Static assets (images, etc.)
├── docusaurus.config.js   # Docusaurus configuration
└── sidebars.js            # Sidebar navigation configuration
```

## License

This project is open source and available under the MIT License,
visit the [LICENSE](LICENSE) for details.
