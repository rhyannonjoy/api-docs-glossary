# Diagramming & Visualization

Tools and techniques for creating visual representations of technical concepts,
system architectures, and workflows in API documentation. From straightforward
flowcharts to complex infrastructure diagrams, this section covers software and
approaches for making abstract concepts concrete and scannable to serve
diverse reader needs.

---

## draw.io

**Definition**: also known as `diagrams.net` - free, open source diagramming tool
for creating flowcharts, network diagrams, UML - _unified modeling language_ -
diagrams, and technical architecture visualizations

**Purpose**: enables tech writers to create professional diagrams without licensing
costs; supports export to multiple formats including PNG, SVG, and PDF for embedding
in documentation

**Example**: create an AWS architecture diagram showing API Gateway → Lambda → DynamoDB
flow with proper AWS service icons, then export as SVG for docs embedding

**Related Terms**: [Excalidraw](#excalidraw), [Lucidchart](#lucidchart), SVG

**Sources**:

- [draw.io Ltd Homepage: "Security-first diagramming for teams"](https://www.drawio.com/)
- [Wikipedia: "diagrams.net"](https://en.wikipedia.org/wiki/Diagrams.net)

---

## Excalidraw

**Definition**: open source sketching tool that creates hand-drawn style diagrams
with a minimalist interface and collaborative features

**Purpose**: provides quick, low-fidelity diagramming for documentation where
informal visual style aids comprehension without the overhead of polished graphics

**Example**: sketch a request-response flow between client and API server using
hand-drawn boxes and arrows that render instantly without design decisions

**Related Terms**: [draw.io](#drawio), [Lucidchart](#lucidchart),
[request-response](../core-concepts/api-fundamentals.md#request-response), SVG

**Sources**:

- [Excalidraw Whiteboard](https://excalidraw.com/)
- [YouTube: "How to Use Excalidraw: Complete Beginner Tutorial (2026 Update)" by Lvl 99 TechSkillz](https://www.youtube.com/watch?v=OU83LfTIWn8)

---

## Lucidchart

**Definition**: web-based diagramming tool with real-time collaboration features,
extensive shape libraries, and integrations with documentation platforms

**Purpose**: enables teams to collaboratively create and maintain technical
diagrams with professional templates for system architecture, API flows, and
network topologies

**Example**: multiple technical writers simultaneously update a microservices
architecture diagram while integrating it with
[Confluence](https://www.atlassian.com/software/confluence) documentation

**Related Terms**: [draw.io](#drawio), [Excalidraw](#excalidraw)

**Sources**:

- [Lucid Software Inc., Lucidchart Homepage: "Diagramming powered by intelligence"](https://www.lucidchart.com/)
- [Wikipedia: "Lucidchart"](https://en.wikipedia.org/wiki/Lucidchart)

---

## Python Diagrams

**Definition**: Python library that generates infrastructure architecture diagrams
using code; includes pre-built icons for
[AWS](https://aws.amazon.com/what-is-aws/),
[Azure](https://azure.microsoft.com/en-us), [GCP](https://cloud.google.com/),
[Kubernetes](https://kubernetes.io/), and other cloud services

**Purpose**: enables version-controlled, reproducible infrastructure diagrams in
API documentation through code rather than manual drawing tools

**Example**: write Python code that generates an AWS architecture diagram with
proper service icons, then commit both the code and output image to version control -

```python
from diagrams import Diagram
from diagrams.aws.compute import Lambda
from diagrams.aws.network import APIGateway
from diagrams.aws.database import Dynamodb

with Diagram("API Architecture"):
    APIGateway("API") >> Lambda("Function") >> Dynamodb("Database")
```

**Related Terms**: [commit](development-essentials.md#commit),
[docs-as-code](../workflows-methodologies.md#docs-as-code),
PlantUML, [version control](development-essentials.md#version-control)

**Sources**:

- [Mingrammer: "Diagrams - Diagram as Code"](https://diagrams.mingrammer.com/)
- [Python Software Foundation: "diagrams 0.25.1"](https://pypi.org/project/diagrams/)

---
