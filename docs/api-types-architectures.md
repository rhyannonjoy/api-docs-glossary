# API Types & Architectures
<!-- ignore this Vale capitalization error, see Style Guide #Headings-->

Different architectural patterns and protocols for building APIs.
Understanding these API types helps documentarians choose appropriate
documentation approaches, explain implementation differences to users,
and recognize when standard REST documentation patterns don't apply.

<!-- TODO: add WebSocket API, Webhook API-->

---

## GraphQL API
<!-- ignore this Vale capitalization error, see Style Guide #Headings-->

**Definition**: uses GraphQL, _Graph Query Language_ - to let clients
request exactly the data they need through a single endpoint with
a strongly typed schema

**Purpose**: reduces over-fetching and under-fetching of data by
allowing clients to specify their exact requirements; particularly
valuable for complex, interconnected data models

**Example**: instead of calling `/users/123`, `/users/123/posts`, and
`/users/123/followers` separately, a client queries one endpoint
requesting:

```graphQL
`{ user(id: 123) { name, posts { title }, followers { name } } }`
```

**Related Terms**: [API](core-concepts.md#api),
[API endpoint](core-concepts.md#api-endpoint),
[REST API](core-concepts.md#rest-api),
schema

**Source**: [The GraphQL Foundation: "Learn GraphQL"](https://graphql.org/learn/)

---

## gRPC API

**Definition**: uses gRPC - _Google's Remote Procedure Call_ - framework,
which relies on Protocol Buffers for serialization and HTTP/2 for transport

**Purpose**: enables high-performance, strongly typed communication between
services; common in microservices architectures where efficiency and type
safety matter more than human readability

**Example**: a payment processing service exposes gRPC methods like
`ProcessPayment()` that accept and return strongly typed Protocol Buffers
messages rather than JSON

**Related Terms**: [API](core-concepts.md#api), HTTP/2, Protocol Buffers,
[REST API](core-concepts.md#rest-api), serialization,
schema

**Source**: [gRPC Authors: "What is gRPC?"](https://grpc.io/docs/what-is-grpc/)

---

## webhook API

**Definition**: pattern where a service sends HTTP `POST` requests to
client-specified URLs when specific events occur, enabling event-driven
integrations

**Purpose**: eliminates constant polling by pushing data to clients only
when relevant events happen; commonly used for notifications, integrations,
and workflow automation

**Example**: GitHub sends a webhook `POST` request to a specified URL
whenever someone opens a pull request, allowing CI/CD systems to
automatically run tests

**Related Terms**: [API](core-concepts.md#api),
[API endpoint](core-concepts.md#api-endpoint),
event-driven, [HTTP](core-concepts.md#hypertext-transfer-protocol-http),
POST

**Source**: [Zapier: "What are webhooks?"](https://zapier.com/blog/what-are-webhooks/)

---