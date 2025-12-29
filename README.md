# [API Docs Glossary](https://rhyannonjoy.github.io/api-docs-glossary/)

A comprehensive glossary of API documentation fundamental concepts, processes,
tools, and best practices. This project originated from coursework in the
[University of Washington's AI-Enhanced API Documentation certification program](https://www.pce.uw.edu/specializations/api-documentation).
Thank you to [Docs By Design](https://docsbydesign.com/)
and the [Write the Docs](https://www.writethedocs.org/)
community for inspiration and resources.

This glossary is a living document, intended to evolve as the terms do. The API Docs
Glossary is a personal learning project, but suggestions and corrections are welcome.
Visit the
[Contribution Guide](https://rhyannonjoy.github.io/api-docs-glossary/docs/contribution-guide)
for more information.

## Topics covered

- [API Fundamentals](https://rhyannonjoy.github.io/api-docs-glossary/docs/core-concepts#api-fundamentals):
REST APIs, security
- [Documentation-Specific Concepts](https://rhyannonjoy.github.io/api-docs-glossary/docs/core-concepts#documentation-specific-concepts):
OpenAPI specification, overview topics
- [Frameworks & Strategy](https://rhyannonjoy.github.io/api-docs-glossary/docs/frameworks-strategy):
audience analysis, domain knowledge
- [Tools & Techniques](https://rhyannonjoy.github.io/api-docs-glossary/docs/tools-techniques):
cURL, Postman
- [Workflows & Methodologies](https://rhyannonjoy.github.io/api-docs-glossary/docs/workflows-methodologies):
project management, usability testing
- [Writing Style](https://rhyannonjoy.github.io/api-docs-glossary/docs/writing-style):
content strategy, rhetorical approach
- [AI & APIs](https://rhyannonjoy.github.io/api-docs-glossary/docs/ai-and-apis):
artificial intelligence in API documentation

## Getting started

Whether you're a technical writer, developer, or student learning API documentation,
this resource provides clear definitions and context for essential concepts. Visit
the following for more information:

- [Introduction](https://rhyannonjoy.github.io/api-docs-glossary/docs/introduction)
- [Getting Started](https://rhyannonjoy.github.io/api-docs-glossary/docs/getting-started)
- [Quick Reference](https://rhyannonjoy.github.io/api-docs-glossary/docs/quick-reference)

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

### Local development

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

## Built with

- [Docusaurus](https://docusaurus.io/): Documentation site generator
- [React](https://reactjs.org/): UI framework
- [Markdown](https://www.markdownguide.org/): Content format

## Project structure

```shell
api-docs-glossary/
├── docs/                  # Documentation markdown files
├── src/                   # Custom React components and pages
├── static/                # Static assets (images, etc.)
├── docusaurus.config.js   # Docusaurus configuration
└── sidebars.js            # Sidebar navigation configuration
```

## License

This project is open source and available under the MIT License.
