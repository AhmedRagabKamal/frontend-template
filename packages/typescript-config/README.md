# TypeScript Configuration Guide

A comprehensive guide to TypeScript configurations for different JavaScript environments, focusing on base, React, and Next.js setups.

## Table of Contents

- [Overview](#overview)
- [Configuration Types](#configuration-types)
  - [Base Configuration](#1-base-configuration-basejson)
  - [React Configuration](#2-react-configuration-reactjson)
  - [Next.js Configuration](#3-nextjs-configuration-nextjsjson)
- [Benefits](#benefits)
- [Requirements](#requirements)
- [Usage](#usage)

## Overview

The TypeScript configurations follow a hierarchical structure:

```text
base.json (Foundation)
   ↓
react.json (React features)
   ↓
nextjs.json (Next.js features)
```

Each configuration builds upon the previous one, providing incremental features and optimizations for specific use cases.

## Configuration Types

### 1. Base Configuration (`base.json`)

The foundation configuration that sets up core TypeScript settings:

```json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "lib": ["ESNext", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "noUncheckedIndexedAccess": true,
    "strict": true,
    "target": "ES2022"
  }
}
```

Key features:

- Generates `.d.ts` type declaration files
- Enables modern JavaScript features
- Strict type checking
- Node.js module resolution
- DOM type definitions

### 2. React Configuration (`react.json`)

Extends the base configuration with React-specific settings:

```json
{
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}
```

Key features:

- Inherits all base configuration settings
- Enables JSX support for React
- No need for React imports in JSX files

### 3. Next.js Configuration (`nextjs.json`)

Extends the React configuration with Next.js-specific settings:

```json
{
  "extends": "./react.json",
  "compilerOptions": {
    "plugins": [{ "name": "next" }],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "allowJs": true,
    "jsx": "preserve",
    "noEmit": true
  }
}
```

Key features:

- Next.js TypeScript plugin support
- Latest ECMAScript module syntax
- Bundler-style module resolution
- JavaScript file compilation support
- Preserved JSX for Next.js transformation

## Benefits

- ✨ **Modular Configuration**: Easy to maintain and update
- 🛡️ **Type Safety**: Strict type checking by default
- 🚀 **Modern JavaScript**: Latest ECMAScript features
- ⚛️ **Framework Optimized**: Specific settings for React and Next.js
- 🔍 **Better Developer Experience**: Enhanced IDE support and type checking

## Requirements

- TypeScript v5.x
- Node.js (Latest LTS recommended)
- Compatible code editor (VS Code recommended)

## Usage

1. Choose your configuration based on project type
2. Install the configuration package in your project:
3. Add the configuration to your project's `tsconfig.json`:

```bash
pnpm add @frontend-template/typescript-config
```

```json
{
  "extends": "@frontend-template/typescript-config/nextjs.json"
}
```
