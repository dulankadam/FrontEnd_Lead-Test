# Port Template Library (Demo)
A small React + TypeScript component set demonstrating a hierarchical "Port Template" editor.

Project Structure
/
├── src/
│   ├── components/
│   │   ├── PortTemplate/                
│   │   │   ├── PortTemplate.tsx         
│   │   │   └── TreeItem.tsx             
│   │   └── shared/                      
│   │       ├── DocumentsSection.tsx
│   │       ├── FieldInput.tsx
│   │       ├── HeaderFields.tsx
│   │       ├── HeaderTabs.tsx
│   │       └── SectionHeader.tsx
│   ├── utils/
│   │   └── treeUtils.ts                 
│   ├── types.ts                         
│   ├── App.tsx                          
│   └── index.tsx                        
│
├── package.json
├── tsconfig.json                        
└── README.md

# Port Template Library (React + TypeScript + Tailwind)

A small component set demonstrating a hierarchical "Port Template" editor.

## Install & run

1. `npm install`
2. `npm run dev` (uses Vite)

## Notes
- Uses Tailwind for styling. See `tailwind.config.cjs`.
- Project is split into components and shared subfolders:
  - `src/components/PortTemplate/PortTemplate.tsx`
  - `src/components/PortTemplate/TreeItem.tsx`
  - `src/components/shared/*`
- Utilities are in `src/utils/treeUtils.ts` and types in `src/types.ts`.

TODO: add unit tests and storybook if needed.
