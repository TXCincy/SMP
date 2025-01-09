# Lacrosse Field Visualizer

This project visualizes a sequence of movements on a lacrosse field.

## Project Structure

```
SMPOV25
├── src
│   ├── index.html       # Main HTML document for the visualizer
│   ├── styles.css       # Styles for the visualizer
│   └── app.js           # JavaScript logic for rendering movements
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Create the Project Folder**:
   - Open your terminal or command prompt.
   - Navigate to the location where you want to create the project.
   - Run the command: `mkdir SMPOV25` to create the project folder.
   - Navigate into the folder: `cd SMPOV25`.

2. **Initialize npm**:
   - Run the command: `npm init -y` to create a `package.json` file with default settings.

3. **Create the Directory Structure**:
   - Create the `src` folder: `mkdir src`.
   - Inside the `src` folder, create the following files:
     - `touch src/index.html`
     - `touch src/styles.css`
     - `touch src/app.js`

4. **Edit the HTML File**:
   - Open `src/index.html` in your code editor and add the basic HTML structure, linking to the CSS and JavaScript files.

5. **Edit the CSS File**:
   - Open `src/styles.css` in your code editor and define styles for your visualizer.

6. **Edit the JavaScript File**:
   - Open `src/app.js` in your code editor and implement the logic for the visualizer.

7. **Update the package.json**:
   - If you need any specific libraries (like a visualization library), install them using npm, e.g., `npm install <library-name>`.
   - Add any necessary scripts in the `package.json` for building or running the project.

### Running the Project

- You can use a local server to serve your HTML file. You can install a package like `lite-server` or `http-server` for this purpose.
- Run the command: `npx lite-server` or `npx http-server` to start the server and view your visualizer in the browser.

## How to Use

1. Open `index.html` in your browser.
2. Enter a sequence of actions in the input field (e.g., `Tilted→Mini→Gold`).
3. Click the "Visualize" button to see the movements on the field.

## Actions

- **Tilted**: Tilted starting setup.
- **Mini**: Mirror action.
- **Gold**: Give and go.

## Features

- Interactive visualization of lacrosse plays.
- User-friendly interface for understanding movements.
- Customizable settings for different plays.

## Contributing

Feel free to submit issues or pull requests to improve the project!