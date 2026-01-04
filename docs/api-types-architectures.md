# API Types & Architectures
<!-- ignore this Vale capitalization error, see Style Guide #Headings-->

Different architectural patterns and protocols for building APIs.
Understanding these API types helps documentarians choose appropriate
documentation approaches, explain implementation differences to users,
and recognize when standard REST documentation conventions don't apply.

---

## event-driven

**Definition**: architectural pattern where actions trigger in response
to specific events rather than through continuous polling or scheduled
intervals

**Purpose**: improves efficiency and responsiveness by processing only
when relevant changes occur; reduces unnecessary network traffic and
server load

**Example**: a webhook API notifies an e-commerce system when payment
completes, triggering immediate order fulfillment rather than checking
payment status every few minutes

**Related Terms**: [API](core-concepts.md#api), [real-time](#real-time),
[webhook API](#webhook-api), [WebSocket API](#websocket-api)

**Source**: [Amazon Web Service, Inc., (AWS): "What is an Event-Driven Architecture?"](https://aws.amazon.com/event-driven-architecture/)

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
[schema](core-concepts.md#schema)

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

**Related Terms**: [API](core-concepts.md#api),
[HTTP versions](core-concepts.md#http-versions),
[Protocol Buffers](tools-techniques.md#protocol-buffers),
[serialization](core-concepts.md#serialization)

**Source**: [gRPC Authors: "What is gRPC?"](https://grpc.io/docs/what-is-grpc/)

---

## real-time

**Definition**: describes systems and/or APIs that process and deliver data
with minimal delay, enabling immediate responses to events as they occur

**Purpose**: supports use cases requiring instant updates like live
notifications, streaming data, collaborative editing, and monitoring
dashboards

**Example**: a WebSocket API delivers stock price changes to trading
applications within milliseconds of market movements

**Related Terms**: [event-driven](#event-driven),
[webhook API](api-types-architectures.md#webhook-api),
[WebSocket API](api-types-architectures.md#websocket-api)

**Sources**:

- [Mozilla Corporation, MDN: "WebRTC API (Web Real-time Communication)"](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
- [Wikipedia: "Real-time computing"](https://en.wikipedia.org/wiki/Real-time_computing)

---

## REST API

**Definition**: acronym for *RE*presentational State Transfer
application programming interface - one of the most widely used
approaches for building web-based APIs

**REST isn't a regulated standard**, but an architectural style for
distributed hypermedia systems, first presented by Roy Fielding in 2000;
REST is a convention, used by APIs exposed through HTTP/HTTPS web
services to exchange data.

**Key characteristics**:

- **Client-server architecture**: assumes "clients," resource users,
and "servers," resource providers
- **Stateless**: clients maintain the complete state of the interaction;
servers provide only self-contained resources
- **Cacheable**: resources saved locally to improve performance
- **Uniform interface**: standardized way of communicating between
client and server
- **Uses HTTP methods**: [`DELETE` (remove)](core-concepts.md#delete),
[`GET` (read)](core-concepts.md#get),
[`PATCH` (edit)](core-concepts.md#patch),
[`POST` (create)](core-concepts.md#post),
[`PUT` (replace)](core-concepts.md#put)
- **Commonly uses JSON**: due to its wide support in programming
languages, REST APIs use JSON, but it's not required and also
support other formats like XML

**Example request**:

```bash
GET http://localhost:3000/users/2
```

Break down this URL:

- _How_: Uses the `GET` method of the HTTP protocol
- _Where_: From `localhost:3000` server
- _What_: `users/2` instance of this resource

```mermaid
sequenceDiagram
    participant Client
    participant API Server
    participant Database
    
    Client->>API Server: GET /users/2
    API Server->>Database: Query user data
    Database-->>API Server: User record
    API Server-->>Client: 200 OK + JSON response
```

**Example response**:

`GET` requests a user resource, and the response body contains the
resource formatted as a JSON document:

```json
{
  "id": 2,
  "first_name": "Ferdinand",
  "last_name": "Smith",
  "email": "f.smith@example.com"
}
```

**Related Terms**: [API](core-concepts.md#api), [HTTP](core-concepts.md#http),
[HTTP status codes](core-concepts.md#http-status-codes), [JSON](core-concepts.md#json),
[parameters](core-concepts.md#parameters), [resource](core-concepts.md#resource),
[URL](core-concepts.md#url)

**Sources**:

- UW API Docs: Module 5, Lesson 1, "REST API Fundamentals"
- [RESTful API: "What is REST?" by Lokesh Gupta](https://restfulapi.net/)

---

## REST vs *REST*ful

**Definition**: terms are often used interchangeably, though technically
"REST" refers to the architectural style itself while "RESTful"
describes APIs that follow REST principles; in practice, both terms
describe APIs that use HTTP methods, stateless communication, and
resource-based URLs

**Purpose**: understanding this distinction helps API documentation
writers use consistent terminology; while some sources differentiate
between the two, most modern API documentation treats them as synonyms;
what matters is plainly explaining whether an API follows REST
architectural constraints rather than debating terminology

**Example**: documentation might say "this RESTful API uses HTTP methods"
or "this REST API returns JSON responses" - both are acceptable; the key
is explaining the API's behavior: stateless requests, resource-based
endpoints like `/users/123`, standard HTTP methods - `GET`, `POST`, `PUT`,
`DELETE`

**Related Terms**: [API endpoint](core-concepts.md#api-endpoint),
[HTTP](core-concepts.md#http), [HTTP method](core-concepts.md#http-method),
[resource](core-concepts.md#resource), [REST API](#rest-api)

**Sources**:

- [RESTful API: "What is REST?" by Lokesh Gupta](https://restfulapi.net/)
- [Roy Thomas Fielding's University of California Dissertation: Chapter 5 - "Representational State Transfer (REST)"](https://roy.gbiv.com/pubs/dissertation/rest_arch_style.htm)

---

## SOAP API

**Definition**: acronym for Simple Object Access Protocol; uses XML-based
messaging protocol to exchange structured information between systems,
typically over HTTP or HTTPS

**Purpose**: provides standardized, contract-based communication with
built-in error handling and security; common in enterprise environments
where formal contracts, transactions, and ACID compliance matter more
than simplicity or performance

**Key characteristics**:

- **WSDL contracts**: Web Services Description Language defines the API contract
- **XML-only**: all requests and responses use XML format
- **Protocol-independent**: can work over HTTP, SMTP, TCP, or other protocols
- **Built-in standards**: includes WS-Security, WS-AtomicTransaction,
and other enterprise features

**Example**: a banking system exposes a SOAP API for account transfers
with a formal WSDL contract specifying exact XML structure, security
requirements, and transaction guarantees

**SOAP vs REST**:

| Aspect | SOAP | REST |
| ------ | ------ | ------ |
| Protocol | Strict with rules | Architectural style with guidelines |
| Format | XML only | JSON, XML, others |
| Contract | WSDL required | Optional - OpenAPI |
| Overhead | Higher, verbose XML | Lower, lightweight JSON |
| Common use | Enterprise, legacy systems | Modern web/mobile APIs |

**Related Terms**: [API](core-concepts.md#api),
[error handling](core-concepts.md#error-handling),
[HTTP](core-concepts.md#http),
[REST API](#rest-api), [XML](tools-techniques.md#xml)

**Source**: [W3C: "SOAP Version 1.2 Part 1: Messaging Framework"](https://www.w3.org/TR/soap12/)

---

## webhook API
<!-- ignore this Vale capitalization error, see Style Guide #Headings-->

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
[API endpoint](core-concepts.md#api-endpoint), [event-driven](#event-driven),
[HTTP](core-concepts.md#http), [`POST`](core-concepts.md#post),
[real-time](#real-time)

**Source**: [Zapier: "What are webhooks?"](https://zapier.com/blog/what-are-webhooks/)

---

## WebSocket API
<!-- ignore this Vale capitalization error, see Style Guide #Headings-->

**Definition**: also known as WebSockets; maintains persistent, bidirectional
connections between client and server, enabling real-time data exchange without
repeated HTTP requests

**Purpose**: supports live updates, streaming data, and instant communication;
essential for chat applications, live dashboards, multiplayer games, and
collaborative tools

**Example**: a stock trading dashboard maintains a WebSocket connection
to receive price updates instantly as they occur, rather than polling the
server every few seconds

**Related Terms**: [API](core-concepts.md#api), [event-driven](#event-driven),
[HTTP](core-concepts.md#http), [real-time](#real-time)

**Source**: [Mozilla Corporation, MDN: "The WebSocket API (WebSockets)"](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)

---
