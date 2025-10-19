# React Component Library – Port Template

This repository contains a **TypeScript-based React Component Library** designed to provide reusable, modular UI components and utilities for building modern React applications.
It is developed with **Tailwind CSS** for styling and supports integration with **React 18+**.

---

## 📁 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── PortTemplate/                
│   │   │   ├── PortTemplate.tsx         # Main layout component
│   │   │   └── TreeItem.tsx             # Internal component used by PortTemplate
│   │   └── shared/                      
│   │       ├── DocumentsSection.tsx     # Section for displaying documents or items
│   │       ├── FieldInput.tsx           # Generic input field component
│   │       ├── HeaderFields.tsx         # Displays header-level field information
│   │       ├── HeaderTabs.tsx           # Dynamic tab component for section navigation
│   │       └── SectionHeader.tsx        # Section header with title and optional actions
│   ├── utils/
│   │   └── treeUtils.ts                 # Utility functions for tree structure handling
│   ├── types.ts                         # Shared TypeScript interfaces and type definitions
│   ├── index.css                        # Global styles with Tailwind directives
│   └── index.tsx                        # Entry point that exports all components
├── public/
│   └── index.html                       # HTML template (used for testing/demo)
├── dist/                                # Output folder after build
│   └── ...build files
├── .babelrc                             # Babel configuration for transpiling
├── .gitignore                           # Git ignore file
├── package-lock.json
├── package.json
├── postcss.config.cjs                   # PostCSS configuration for Tailwind
├── tailwind.config.cjs                  # Tailwind CSS configuration
├── tsconfig.json                        # TypeScript configuration
├── webpack.config.js                    # Webpack configuration for bundling
└── README.md                            # Project documentation
```

---

## ⚙️ Build Instructions

Follow the steps below to build and use the library in your React projects.

### 1️⃣ Build the Library

Run the following command in the root directory:

```bash
npm run build
```

This will compile the TypeScript code and create a **`dist/`** folder containing the production build.

---

### 2️⃣ Prepare for Distribution

Once the build is complete, confirm that the **`dist`** folder has been generated.
Next, copy the `dist` folder to your desired location, for example, into a `lib` directory of your client project.

```bash
/lib/PortTemplateLib
```

---

### 3️⃣ Create a `package.json` Inside the `dist` Folder

In the root of the `dist` folder, create a new `package.json` file using the following structure:

```json
{
  "name": "port-template",
  "version": "1.0.0",
  "main": "index.js",
  "module": "index.js",
  "types": "types/index.d.ts",
  "exports": {
    ".": {
      "import": "./index.js",
      "require": "./index.js",
      "types": "./types/index.d.ts"
    }
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

This ensures proper resolution for both **CommonJS** and **ESM** module imports.

---

### 4️⃣ Install the Library in a Client Application

In your client project, navigate to the project root and run:

```bash
npm install ./lib/PortTemplateLib
```

This will add the local library as a dependency to your application.

---

### 5️⃣ Import and Use Components

Once installed, you can import the library components as follows:

```tsx
import {
  HeaderTabs,
  TabType,
  HeaderFields,
  PortTemplate,
  FieldInput
} from "port-template";
```

You can now use them directly inside your React application components.

---

## 🧩 Example Usage

```tsx
import React from "react";
import { PortTemplate, HeaderTabs, FieldInput } from "port-template";

const ExamplePage = () => {
  return (
    <div className="p-6">
      <HeaderTabs
        tabs={[
          { id: 1, title: "Overview" },
          { id: 2, title: "Documents" }
        ]}
      />
      
      <FieldInput label="Project Name" placeholder="Enter name" />

      <PortTemplate />
    </div>
  );
};

export default ExamplePage;
```

---

## 🧠 Notes

* The library is **fully written in TypeScript**, ensuring strong typing and IntelliSense support.
* **Tailwind CSS** is used for styling, so ensure Tailwind is configured in your consuming project.
* Only **React 18+** is supported.
* `treeUtils.ts` provides helper functions for rendering hierarchical (tree-based) structures used within components like `PortTemplate` and `TreeItem`.

---

## 📦 Tech Stack

* **React 18+**
* **TypeScript**
* **Tailwind CSS**
* **Webpack**
* **PostCSS**
* **Babel**

---

## 👨‍💻 Author

**Developed by:** *Damith Weerawardana*
**Role:** Senior Full stack Developer / Software Engineer
**Version:** 1.0.0

Feel free to contribute or extend the component set as needed.

---

## 🪪 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute it with proper attribution.

---
