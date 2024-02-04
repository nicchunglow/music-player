# Today's Weather App

## Table of contents

- [Introduction](#Introduction)

- [Assumptions/Actions Taken](#Assumptions/Actions-Taken)

- [Setup](#Setup)

- [Available Scripts](#Available-Scripts)

- [Technologies](#Technologies)

- [Environment Variables](#Environment-Variables)

- [Improvements](#Improvements)

## Introduction

1. Display information at least based on mock up UI.

2. User can input city and country name to get weather information and display them on UI. Please use AJAX to get weather information from OpenWeatherAPI(https://openweathermap.org/api).

3. User can find their records in search history, and can click search button to call api again. Can click delete button to remove the record.

4. If user inputs invalid city or country name, show appropriate message on UI.

## Assumptions/Actions Taken

1. The figma UI does not have more than 1 search bar as compared to the Task mock up. I decided to follow the figma mock up instead. In this Application, Country or city is usable because of the "Call current weather data" by "OpenWeatherApp". Working example will be typing “Singapore”,“Indonesia” (Country) or “Osaka”, “New York” (City).

2. Only Light theme is used for this project.

3. Error Message box is placed above the search box instead because the message will clash with the image icon.

4. This App is built with responsive design, suitable for all screen sizes till Laptop size at 1440 x1340. Best viewed in either Mobile M 375 X 737 or Laptop size 1440 x1340.

5. This codebase is written with tests. The test coverage right now is at 78.22.

6. Based on my understanding of React, I decided to continue this assignment on React with Vite.

7. Axios is used for AJAX calls.

8. I added debounce for the typing on the search input, which will call the api after 5 seconds. The working assumption is that the user may not go ahead with clicking the button after typing.

9. For saving history, as there was no backend to save the data, I made it to save in the localStorage instead. This can allow the users to save and come back to the web-app again. The user can remove all their data by clearing cache.

10. For my code structure, I only have App and Components.The “App” folder currently serves as the “pages” folder. If there are more pages, this will naturally go into "pages".

## Setup

1.

```

$ cd ../

$ git clone https://github.com/nicchunglow/weather-app.git

$ npm install

$ Add your .env Environments

$ npm run dev
```

## Available Scripts

```
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "fix": "eslint --fix . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "test": "jest",
    "test:watch": "jest --watchAll",
    "test:coverage": "jest --watchAll --coverage",
    "preview": "vite preview",
    "prepare": "husky"
  }
```

## Technologies

dependencies:

```
- "axios": "^1.6.7",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-loader-spinner": "^6.1.6",
- "ts-node": "^10.9.2",
- "tailwindcss": "^3.4.1"
- "vite": "^5.0.12"
```

## Environment Variables

```
BASE_URL= <-(Use OpenWeatherApi)
API_KEY= <-(For OpenWeatherApi)
```

## Improvements

1. Cover the code better with test. I have issues with axios-mock-adapter. Suspect something to do with React with Vite implementation. So have to handle the config and environment aspect of mocking.

2. Implement theming.
