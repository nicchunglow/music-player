# Today's Weather App

## Table of contents

- [Introduction](#Introduction)

- [Setup](#Setup)

- [Available Scripts](#Available-Scripts)

- [Technologies](#Technologies)

- [Environment Variables](#Environment-Variables)

- [Improvements](#Improvements)

## Introduction

Design and develop a music player based on the given specification
using JavaScript/TypeScript: React + Redux.

Goal:
Ensure songs will keep playing in shuffled loops. The songs will keep playing without
ever stopping – like a Repeat func,on being enabled.

E.g., aNer the last song, program will loop the songs again, but loop should be of a
different shuffle order – meaning the 1st round and the 2nd round should not be the
same.

Considertions:

- product thinking
- all rounded considerations
- design concepts.

## Setup

```

$ cd ../

$ git clone https://github.com/nicchunglow/music-player

$ npm install

$ npm run dev
```

## Available Scripts

```
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "fix": "eslint --fix . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "test": "jest",
  "test:watch": "jest --watchAll",
  "test:coverage": "jest --watchAll --coverage",
  "preview": "vite preview",
  "prepare": "husky"
```

## Technologies

dependencies:

```
  "@reduxjs/toolkit": "^2.2.1",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "ts-node": "^10.9.2"
```

## Improvements
