# InfyAir Website

Follow the steps below to pull and run the InfyAir website in your local environment:

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Installation

To get started with the InfyAir website project, follow these steps:

1. **Clone the repository:**

    ```bash
    https://github.com/INFYAIR-DEV/INFYAIR-Website.git
    cd INFYAIR-Website
    ```

2. **Install dependencies:**

    Ensure you have [Node.js](https://nodejs.org/) installed. Then, run:

    ```bash
    npm install
    ```

## Usage

To start the project, use the following command:

```bash
npm start
```


## Project Structure

The project's file structure is organized as follows:

```
infyair/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Contact.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```


- **`public/`**: This directory contains the HTML file so you can tweak it, for example, to set the `<title>`.
- **`src/`**: This directory contains the React components, pages, and other source files.
- **`components/`**: Reusable React components.
- **`pages/`**: Different pages of the website, like Home and Contact.
