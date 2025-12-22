# Contribution guide

Documentation improvements are always welcome. Contributions
must benefit API Docs Glossary readers. Create
[an issue](https://github.com/rhyannonjoy/api-docs-glossary/issues) and/or
make [a pull request](https://github.com/rhyannonjoy/api-docs-glossary/pulls).
Contributions are especially welcome if they:

- Add new API documentation terms with clear definitions
- Improve clarity of existing definitions
- Add relevant examples to existing terms
- Fix technical inaccuracies

## Code of conduct

Please be respectful and constructive in all interactions.
This project follows standard open source etiquette.

## Pull request tips

1. Fork this repository to a personal [GitHub](https://github.com) account.
2. Build a local copy of the documentation from the fork:

   ```bash
      npm install
      npm start
   ```

3. Install [Vale](https://vale.sh/) in the development environment.
4. If using [VS Code](https://code.visualstudio.com/download), install extensions
[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
and [Vale VS Code](https://marketplace.visualstudio.com/items?itemName=ChrisChinchilla.vale-vscode).
5. Test all changes locally before submitting a pull request.
6. Pull requests should be complete and self-contained. Don't submit
placeholder content or partial entries.
7. Ideally, pull requests should address an existing issue,
but this isn't required.
8. Don't submit pull requests with lint or Vale errors in
the content or code examples.

## Add a new glossary term

Most terms live in existing category files. To add a new term:

1. Identify which category file the term belongs in:
   - `core-concepts.md` - Fundamental API documentation concepts
   - `quick-reference.md` - Common terms and quick definitions
   - `tools-and-techniques.md` - Tools, software, and methods

2. Add the term using this format:

    ```markdown
    ## Term Name
   
    **Definition**: Brief, clear definition
   
    **Purpose**: Why this matters for API documentation
   
    **Example**: Real-world example or use case (optional)
   
    **Related terms**: Link to other relevant terms
    ```

3. Place the term alphabetically within its section
or at the end of the appropriate subsection

4. Test locally with `npm start` to ensure formatting looks correct

5. Submit the pull request

## Create a new category

If the term doesn't fit existing categories and warrants a new one:

1. Create a new Markdown file in the `docs/` directory, such as `advanced-topics.md`
2. Add the term and/or terms using the format described in the previous section
3. Add the new file to `sidebars.ts` in the logical position within the array
4. Test the navigation locally to ensure the new category appears correctly

## Troubleshooting

### Documentation build fails locally

Make sure all software requirements installed correctly.
For example, ensure [Node.js](https://nodejs.org/en/download)
and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
are up to date. Run `npm install` in the fork directory,
then attempt the build again.

### Vale or markdownlint extensions don't appear in VS Code

Install the extensions from
[the Visual Studio Code marketplace](https://marketplace.visualstudio.com/VSCode).
Reload VS Code (`Ctrl+R` on Windows/Linux, `Cmd+R` on Mac) after installation.

### Vale reports errors but the content appears correct

Check the `.vale.ini` configuration file in the repository root.
Use `vale .` to run Vale from the command line and observe
detailed error output.

### Pull request marked as having lint errors

Run `npm run lint` locally to identify errors before submission.
Most formatting issues can be auto-fixed with `npm run lint:fix`.

### Changes don't appear after pushing to GitHub

GitHub Pages can take a few minutes to rebuild and deploy.
Wait a few minutes, then refresh the site. Clear the browser cache
(`Ctrl+Shift+Delete` on Windows/Linux, `Cmd+Shift+Delete` on Mac)
if changes still don't appear.

## Related topics

- [Introduction](introduction.md)
- [Getting Started](getting-started.md)
- [Quick Reference](quick-reference.md)
