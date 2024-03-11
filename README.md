# TeamSpirit Music Player

## Table of contents

- [Introduction](#Introduction)

- [Features](#Features)

  - [What was done](#What-was-done)

- [Code Structure and considerations](#Code-Structure-and-considerations)
  - [Code Structure](#Code-structure)
  - [Code Considerations](#Code-Considerations)
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

E.g. After the last song, program will loop the songs again, but loop should be of a
different shuffle order – meaning the 1st round and the 2nd round should not be the
same.

Considerations:

- product thinking
- all rounded considerations
- design concepts.

## What was done

https://github.com/nicchunglow/music-player

A music player with a queue list has been created as a result. The music player is able to:

- play and pause song

- go to next song or previous song if available

- choose a song from the queue list

- play shuffled or unshuffled song list, with shuffle function enabled by default.

- Have 'now playing' notification if it is playing

For a comprehensive breakdown of features by use cases, please reference the [Features](#Features) list below.

### Mobile-Responsive

As the product's thought was to have a mobile-first application,
the current app is mobile-responsive, with the recommended viewing dimensions at :

- Mobile view : 430 x 932 (Iphone 14 pro max reference)
- Desktop view : 1440px x 921 (laptop L reference)

## Features

### As a user:

### Music Player

- I will be able to click the **play** button so that I can play the music.

- I will be able to click the **pause** button so that I can pause the music.

- I will be able to click the **back** button if there is a previous track when it is less than 3 seconds.

- I will be able to click the **back** button when it is more than 3 seconds to reset the music.

- I will be able to click the **next** button to change music

- I will able to keep the music playing when I change music

- when I click the play button, a now playing sign will appear at the song Queue so that I know that song right now at the top is playing.

- I can adjust the progress bar and play at any parts that I want.

- I can see how long a time has passed for the song and what is the total song duration.

- I can just let the song play and repeat by itself for the next song.

### Shuffle

- I will be able to unshuffle my playlist if I choose to, which will return the orignal order of the music, whichever it may be.
- my current track will not be shuffled so that I will have control of what I want to do with the current track

### Song Queue

- I will be able to see a list of songs displayed so that I know what is the order of the song, with the top song being the same song as the one in the player.

- I will be able to select the song that I am interested to hear, with will be my current song choice, and be placed infront of the rest of the songs.

- choosing the song does not count it has listened, so that I can still have the list of songs to choose from.

- if there are no more songs in the song Queue, the next song will be the first of a new list of songs, so that I can continuously listen to the songs.

## Code Structure and considerations

- This app is built on React with vite, with Redux used as state management, with tailwind for css.

- This code base is also unit test backed, with **92.05%** coverage. Most basic functionalities should have been covered.

- **husky** is implemented to have pre-commit test checks and lint if required.

- code has prettier and eslint

### Code Structure

Below is the brief structure for reference

```
my-react-app/
│
├── public/
│   └──favicon.ico
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── music/
│   │         └── artists/
│   │
│   ├── components/
│   │   ├── ButtonWithImage/
│   │   ├── Player/
│   │   ├── PlayerControls/
│   │   ├── ProgressBar/
│   │   ├── SongQueueCard/
│   │   └── SongQueueList/
│   │             ├── index.tsx/
│   │             └── SongQueueList.test.tsx
│   ├── pages/
│   │   └── App/
│   │      ├── index.tsx
│   │      └──  App.test.tsx
│   │
│   ├── helper/
│   │      ├── index.tsx
│   │      ├── helper.test.tsx
│   │      └── **.ts
│   │
│   ├── store/
│   │      ├── Reducers/
│   │          ├── index.tsx (Root Reducer)
│   │          ├── songSlice/
│   │                 ├── **.ts
│   ├── sharedTypes.ts
```

### Code Structure Considerations

The codebase is split via **pages** and **components**, which most of the files be contained with a folder, using a index.ts/tsx as the main file.

This is to allow the components to have multiple files in a single folder if required.

### State Management

#### Redux

```
{ songs : {
  songQueue: number[]
  previousSongQueue: number[]
  currentSongId: number
  isPlaying: boolean
  isShuffled: boolean
}}
```

### Code Considerations

#### General

- React with Vite is the next best recommendation, by the react documentations.

https://react.dev/learn/start-a-new-react-project#can-i-use-react-without-a-framework

- The components are built with **atomic design** in mind, with mainly pages, templates, organisms put in heavier considerations.

  e.g. The App page has a Player, which have image and PlayerControls.

  The codebase borrows atomic design approach, by applying abstractions of components when necessary.

- Tailwind was used due to its utility-first approach, allowing us to develop in the component.

#### Flow

- For our repeat music player, when we introduce a new list, the previousQueue will be used for comparison to ensure it is not the same list. After which, the previousQueue will be removed. This consideration is also based by a user starting fresh with a new queue of songs.

- Based on user behaviour, back button repeat same song is introduced. Hence, when you click the back button that has the song played more than 3 seconds, it will do a repeat. When it is under 3 seconds, it will go to the previous song. This behaviour is similar to existing music players availale.

#### Queue Logic

- The queue itself starts from a list of unsorted songs.
- This queue will be shuffled by our function (shuffleList).
- When you uncheck the isShuffled function at music at a given index, the song will go back to the original list, referencing its index.
  e.g [9,8,1], uncheck isShuffled at 8, the remaining will become [8,9], assuming the the original list ends at 9.
  This is behaviour referenced from spotify.

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
