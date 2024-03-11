# TeamSpirit Music Player

## Table of contents

- [Introduction](#Introduction)

- [Features](#Features)

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

Currently, the music player is able to:

- play and pause song
- go to next song or previous song if available
- choose a song from the queue list
- play shuffled or unshuffled song list
- Have 'now playing' notification if it is playing

For a comprehensive breakdown of features by use cases, please reference the [Features](#Features) list below.

### Mobile-Responsive

As the product thought was to have a mobile-first application,
the current app is mobile-responsive, with the recommended viewing dimensions at :

- Mobile view : 430 x 932 (Iphone 14 pro max reference)
- Desktop view : 1440px x 921 (laptop L reference)

### Codebase best practices

This code base is also unit test backed, with 92.05% coverage. Most basic functionalities should have been covered.

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
