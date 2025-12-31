# API Docs Glossary
<!-- ignore this Vale capitalization error, see Style Guide #Headings-->

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
[Contribution Guide](https://rhyannonjoy.github.io/api-docs-glossary/docs/contribution-guide)
for more information.

## Topics

- [API Fundamentals](https://rhyannonjoy.github.io/api-docs-glossary/docs/core-concepts#api-fundamentals):
core concepts, REST APIs, security
- [Documentation-Specific Concepts](https://rhyannonjoy.github.io/api-docs-glossary/docs/core-concepts#documentation-specific-concepts):
OpenAPI specification, overview topic, reference topic
- [AI & APIs](https://rhyannonjoy.github.io/api-docs-glossary/docs/ai-and-apis):
artificial intelligence in API documentation
- [Tools & Techniques](https://rhyannonjoy.github.io/api-docs-glossary/docs/tools-techniques):
cURL, Git, Postman, Swagger
- [Workflows & Methodologies](https://rhyannonjoy.github.io/api-docs-glossary/docs/workflows-methodologies):
project management approaches, usability testing
- [Frameworks & Strategy](https://rhyannonjoy.github.io/api-docs-glossary/docs/frameworks-strategy):
audience analysis, domain knowledge, sales collateral
- [Writing Style](https://rhyannonjoy.github.io/api-docs-glossary/docs/writing-style):
content strategy, rhetorical approach, tone style

## Getting Started
<!-- ignore this Vale capitalization error, see Style Guide #Headings-->

This resource provides essential concept definitions and context for
anyone working with and/or learning about API documentation.
Visit the following documentation pages for more information:

- [Introduction](https://rhyannonjoy.github.io/api-docs-glossary/docs/introduction):
find a path through the glossary
- [Getting Started](https://rhyannonjoy.github.io/api-docs-glossary/docs/getting-started):
navigate glossary structure
- [Quick Reference](https://rhyannonjoy.github.io/api-docs-glossary/docs/quick-reference):
find a specific term refresher

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
<!-- ignore this Vale capitalization error, see Style Guide #Headings-->

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
<!-- ignore this Vale capitalization error, see Style Guide #Headings-->

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
