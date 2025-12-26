# Tools & techniques

Essential tools and methods for API documentation workflows.
From version control to interactive documentation generators,
this section covers the software, platforms, and practices used
to create, test, validate, and publish API documentation.

## branch

**Definition**: a parallel version of a repository, enabling users
to work on changes without affecting the main codebase

**Purpose**: enables many developers to work on different features
simultaneously - in API documentation workflows, branches allow
users to draft documentation updates independently before merging
them into the published version

**Related Terms**: dev branch, feature branch, main branch,
merge, rebase

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## cherry-pick

**Definition**: copy selected commits from one branch to another
without merging the entire branch

**Purpose**: allows users to port specific documentation fixes
or updates between branches without bringing along
unrelated changes

**Related Terms**: branch, commit, merge

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## clone

**Definition**: a copy of a repository that lives on a user's local
computer rather than on GitHub

**Purpose**: enables users to work on API documentation locally,
using their preferred text editor and build tools, before pushing
changes back to the remote repository

**Related Terms**: fork, origin repo, pull, push

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## commit

**Definition**: a repository snapshot at a specific point-in-time,
identified by hash

**Purpose**: creates a trackable history of documentation changes;
each commit represents a logical unit of work such as "add
authentication endpoints" or "fix typo in rate limiting docs"

**Related Terms**: cherry-pick, commit hash, pull, push, squash

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## commit hash

**Definition**: a unique alphanumeric automatically generated for
each commit in a Git repository

**Purpose**: enables precise referencing of specific documentation
versions; use commit hashes to troubleshoot issues,
track published content, or revert to previous states

**Example**: `a3f2b1c` refers to a specific commit with
authentication endpoint updates

**Formatting Note**: commonly represented as
40-character strings, but Git displays shortened versions
that are 7-characters long, can be longer depending on
the repository size to ensure uniqueness

**Related Terms**: branch, cherry-pick, commit

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## cURL

**Definition**: an acronym for "client URL" - a command-line tool
available on Windows, macOS, and Linux that sends and receives HTTP
and HTTPS requests

**Purpose**: enables communication with web services and API testing
without a web browser; supports scripting and automation by combining
with other command-line tools, with output displayable in the terminal
or saved to files; essential for testing API endpoints during
documentation development

**Example**: `curl -X GET https://api.example.com/users`
retrieves user data from an API endpoint

**Related terms**: json-server, REST API, Postman, Swagger

**Further Reading**:

- [curl Command in Linux with Examples](https://www.geeksforgeeks.org/linux-unix/curl-command-in-linux-with-examples/)
- [Everything cURL](https://everything.curl.dev/index.html)
- [What is cURL and how does it relate to APIs?](https://developer.ibm.com/articles/what-is-curl-command/)

_Sources_

- _Module 3, Lesson 3, "Introduction to json-server, cURL, and Postman"_
- _Module 5, Lesson 3, "API Test and Documentation Tools"_

## dev branch

**Definition**: short for "development" branch -
a version of the repository actively undergoing development,
separate from the published `main` branch

**Purpose**: provides a testing ground for documentation
changes before publishing; users can stage many updates,
review them collectively, and ensure all changes work
together before merging to main

**Related Terms**: branch, feature branch, main branch,
merge

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## feature branch

**Definition**: a development branch dedicated to work on a
specific feature or documentation update

**Purpose**: isolates changes for a particular API endpoint,
guide, or documentation section and allows parallel work on
many documentation tasks without conflicts; delete after
merging into the `main` branch

**Example**: a branch names `docs/add-webhook-guide` contains
only the documentation for a new webhook feature

**Related Terms**: branch, dev branch, main branch, merge

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## fork

**Definition**: a personal copy of another user's repository
that lives in a GitHub account

**Purpose**: enables contributions to open source API
documentation without requiring direct write access to the
original repository; contributors make changes in their
fork, then submit pull requests to the upstream repository

**Related Terms**: clone, pull request, repository,
upstream repository

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## force push

**Definition**: move changes to a remote repository that
rewrites commits already present in that repository

**Purpose**: allows cleanup of commit history in feature
branches, particularly after rebasing or squashing commits -
only use on personal dev branches, never on shared
branches like `main`

**Related Terms**: dev branch, feature branch, push, rebase,
squash

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## Git

**Definition**: command-line program that executes version control
functions for tracking changes in files

**Purpose**: enables collaborative API documentation workflows where
many writers can work simultaneously, track revision history, and
maintain published versions separate from draft content

**Core Git Concepts**:

| Term | Brief Definition |
| -------- | --------- |
| branch | parallel version of a repository |
| clone | local copy of a repository |
| commit | repository snapshot at a specific point-in-time |
| fork | personal copy of another user's repository |
| merge | move changes from one branch into another |
| pull | fetch changes from a remote repository |
| push | move local changes to a remote repository |
| rebase | update the base commit from its source branch |
| squash | bundle many commits into a single commit |

**Related Terms**: Git Bash, GitHub, GitHub Desktop

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## Git Bash

**Definition**: command-line interface for Windows that emulates
the Unix Bash command line

**Purpose**: provides Windows users access to Git
commands and Unix-style terminal operations; enables
Windows users to execute the same Git commands as macOS and
Linux users, who already have native Bash terminals, creating
consistent workflows across all operating systems

**Key clarification**: when downloading
[Git for Windows](https://git-scm.com/), Git Bash is part of the
installation, while macOS users install Git either through the same
site or [Homebrew](https://brew.sh/) and user their existing
Terminal app

**Related Terms**: Git, GitHub, GitHub Desktop

_Sources_ 

- [Git](https://git-scm.com/)
- _Module 2, Lesson 1, "Getting Started with Git"_

## GitHub

**Definition**: cloud-based platform that provides storage,
version control, and automation services for Git repositories

**Purpose**: hosts remote repositories for API documentation
projects, enabling team collaboration, automated deployments,
and integrated workflows; provides web-based tools for
code review, issue tracking, and continuous integration that
complement local Git operations

**Related Terms**: Git, Git Base, GitHub Desktop

_Sources_ 

- _Module 2, Lesson 1, "Getting Started with Git"_
- [GitHub](https://github.com/)

## GitHub Desktop

**Definition**: graphical user interface (GUI) app that
manages GitHub repositories

**Purpose**: offers a visual alternative to command-line
Git operations; allows documentation teams to commit changes,
manage branches, and sync repositories without memorizing
Git commands, making version control more accessible to
non-technical writers

**Related Terms**: Git, GitHub, Git Bash, repository

_Sources_ 

- _Module 2, Lesson 1, "Getting Started with Git"_
- [GitHub Desktop](https://github.com/apps/desktop)

## json-server

**Definition**: a [Node.js](https://nodejs.org/en)
tool that creates a mock REST API from a JSON file

**Purpose**: allows documentation writers and developers to
prototype and test API documentation without a live backend;
generates a fully functional REST API with CRUD
(create, read, update, delete) operations using methods
`GET`, `POST`, `PUT`, and `DELETE` based on a
streamlined JSON structure, enabling realistic examples
and testing scenarios

**Example**: a `db.json` file with user data automatically
creates REST endpoints: `/users` returns all users,
`/users/1` returns the user with `id` 1

**Related Terms**: cURL, Postman, REST API, Swagger

_Sources_

- [json-server.dev](https://json-server.dev/)
- _Module 3, Lesson 3, "Introduction to json-server, cURL, and Postman"_

## main branch

**Definition**: the default branch of a repository containing
the published, released, or trusted version of content

**Purpose**: represents the single source of truth for live
API documentation; all feature branches merge into `main`,
and development systems typically publish documentation
directly from this branch

**Related Terms**: branch, deploy, dev branch, feature branch,
merge

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## Markdown

**Definition**: lightweight markup language created by John Gruber in 2004

**Purpose**: popular for writing documentation - designed to format plain
text documents and allows users to add elements like headers,
links, lists, and tables

**Related Terms**: cURL, Git, Git Bash

_Sources_

- _Mentioned in class Canvas question thread_
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)

## merge

**Definition**: move changes from one branch into another
branch, combining their histories

**Purpose**: integrates completed documentation updates
from feature branches into the `main` branch for
publication; the merge process preserves the commit
history from both branches

**Related Terms**: branch, merge conflict, pull request,
rebase

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## merge commit

**Definition**: integrates changes from a feature branch
with updates that occurred in the original branch after
branching

**Purpose**: bundles all commits from a feature branch
together with updates to `main` into a single commit,
marking the exact point when the feature branch
merged into `main`

**The Tradeoff**: merge commits create a branched
history structure that's more complex to navigate than
a linear commit sequence; they're _clear markers_ as in,
"this feature was added here" - but _create complex graphs_
with lots of branches splitting and rejoining

**Related Terms**: commit, feature branch, merge, squash

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## merge conflict

**Definition**: situation where two commits contain changes
to the same file that Git can't automatically resolve

**Purpose**: requires manual intervention to decide which changes
to keep; common in collaborative documentation environments
when many writers edit the same page simultaneously

**Example**: two writers update the same API endpoint
description - Git flags the conflict and requests manual
resolution before completing the merge; resolution can
sometimes be in the GitHub UI directly, but some conflicts
are too complex and require resolution from the text editor

**Related Terms**: branch, commit, merge, pull request

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## origin repo

**Definition**: the default upstream repository, typically
the clone source repository

**Purpose**: serves as the primary remote destination when
pushing local documentation changes; Git automatically
configures origin when cloning a repository

**Related Terms**: clone, pull, push, upstream repo

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## pull

**Definition**: fetch changes from a remote repository and
integrating them into the local branch

**Purpose**: keep local documentation copies synchronized
with remote changes made by other team members; running
`git pull` before starting work prevents merge conflicts

**Related Terms**: clone, merge, origin repo, push

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## pull request (PR)

**Definition**: invites repository maintainers to review
and merge changes from one branch or fork into their
repository

**Purpose**: enables peer review of documentation changes
before publication; team members can comment on specific
lines, suggest edits, and approve or request changes
before merging

**Related Terms**: branch, feature branch, fork, merge

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## push

**Definition**: move local commits to a remote repository

**Purpose**: shares documentation changes with the team
by uploading commits from a local machine to GitHub;
enables collaboration and backs up work to the remote
repository

**Related Terms**: commit, force push, origin repo, pull

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## Postman

**Definition**: API development platform for designing, testing,
documenting, and monitoring APIs through a graphical interface

**Purpose**: Commonly used for REST API development and testing
workflows. Enables API testing and exploration without
command-line tools. Provides a graphical user interface (GUI)
alternative to cURL for making HTTP requests, supports
automated test suites, collection sharing, and API
documentation generation.

**Related Terms**: cURL, json-server, REST API, Swagger

_Sources_

- _Module 3, Lesson 3, "Introduction to json-server, cURL, and Postman"_
- [What is Postman?](https://www.postman.com/product/)

## rebase

**Definition**: updates the base commit from the source branch,
relocating commits to appear after current commits in
the target branch

**Purpose**: maintains a clean, linear commit history in the
`main` branch; resyncs feature branches with `main` after the
source branch changes, making documentation history easier to
follow than merge commits

**The Tradeoff**: rebasing rewrites commit history, which
can cause problems on shared branches where others have based
work on the original commits; complex rebases may require
resolving the same conflict across many commits, and
rebasing becomes impossible if the branch already contains
merge commits or squashed history

**Related Terms**: branch, commit, feature branch, force push,
merge, squash

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## repository (repo)

**Definition**: a storage location for files under Git
version control that tracks the complete history of changes

**Purpose**: contains all API documentation source files,
configuration, and revision history; serves as the central
hub for collaborative documentation work

**Related Terms**: branch, clone, fork, Git, GitHub

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## squash

**Definition**: combining many commits into a single commit

**Purpose**: allows writers to save small, incremental commits
during work while condensing them into one logical unit before
creating a pull request or merging; creates cleaner
documentation history by grouping related changes

**Example**: ten commits like "fix typo," "clean whitespace"
become one commit: "Add OAuth 2.0 authentication guide"

**Related Terms**: commit, merge, pull request, rebase

_Source - Module 2, Lesson 1, "Getting Started with Git"_

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

**Related terms**: OpenAPI Specification (OAS), REST API, YAML

_Source - [What is Swagger](https://swagger.io/docs/specification/v2_0/what-is-swagger/)_

## upstream repository

**Definition**: the original, source repository of a fork

**Purpose**: serves as the authoritative source for open source
documentation projects; contributors sync their forks with
the upstream repo to incorporate the latest changes before
creating pull requests

**Related Terms**: clone, fork, origin repo, pull

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## version control

**Definition**: system that tracks changes in documents
and other files over time

**Purpose**: records the complete history of documentation
changes, enabling teams to see who made what changes and when,
revert to previous versions, and work on multiple updates
simultaneously without overwriting each other's work; Git
repositories store projects under the control of the project
owner, who can grant access or require contributors to fork
the repository to their own GitHub account

**Related Terms**: branch, commit, Git, Git Bash, GitHub

_Source - Module 2, Lesson 1, "Getting Started with Git"_

## workspace

**Definition**: the directory on a local computer that
contains cloned repositories

**Purpose**: provides the local environment where writers
edit documentation files, test builds, and prepare commits
before pushing to remote repositories

**Related Terms**: clone, fork, repository

_Source - Module 2, Lesson 1, "Getting Started with Git"_
