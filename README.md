# First React Checkpoint

A beginner React project for GoMyCode by Marvin. Created with Create React App and styled with React Bootstrap.

## Run in VS Code on Windows
1. Download the repository ZIP and extract it.
2. In VS Code, choose File → Open Folder and select the extracted project folder (the folder containing package.json).
3. Choose Terminal → New Terminal.
4. Run `npm install` and wait for it to finish.
5. Run `npm start`.
6. Open the local address shown by the terminal, normally http://localhost:3000.

Keep the terminal running while using the app. Stop it with Ctrl+C. Do not use Live Server for this React project.

## Checkpoint requirements
- Generated using `npx create-react-app@5.1.0 react-first-checkpoint --use-npm`.
- Kept src/index.js and src/reportWebVitals.js; removed the other starter files and created a new src/App.js.
- App.js imports Fragment and React Bootstrap components.
- The Fragment wraps a div with className containing App.
- Includes a collapsible Navbar, a Bootstrap-styled h1 heading, and exactly three Card components.
- Uses Container, Row, and Col to stack cards on small screens.
- Imports Bootstrap CSS in src/index.js.
- Starts with npm start and builds with npm run build.

## Files
- public/index.html: the HTML entry point.
- src/index.js: imports Bootstrap CSS and renders App.
- src/App.js: navbar, heading, three cards, about section, and footer.
- src/reportWebVitals.js: retained Create React App performance helper.
- package.json and package-lock.json: dependencies and npm commands.

## React Bootstrap installation
`npm install react-bootstrap@2.10.10 bootstrap@5.3.8`

## Notes
Create React App is deprecated, but this checkpoint specifically requires it. This project follows that requirement; other class projects may use Vite instead. No backend, payment flow, or external images are needed.

Prepared with assistance from ChatGPT/Codex. Read App.js to understand the JSX and imported components.
