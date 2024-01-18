---
title: "ChatterCast"
description: "A blog post describing the development process of ChatterCast - an instant messaging and weather app I helped develop as a part of my Mobile App Development class."
date:
    published: "2024-01-15"
    updated: "2024-01-17"
image:
    src: "/images/posts/chattercast/logo.png"
    alt: "The ChatterCast logo."
---

[ChatterCast](https://github.com/AmtojKaur/Group4_Project) is a full stack instant messaging and weather app I helped develop as a part of my Mobile App Development class at UW Tacoma. In this post, I will go over my contribution to this project and some challenges I faced during development.

## Description

---

![ChatterCast home screen](/images/posts/chattercast/home.png)

ChatterCast is an instant messaging app similar in basic functionality to [Discord](https://discord.com). A user can add other users to their contacts and start chats with them. Users can also create chat rooms where multiple users can participate in a chat simultaneously. Additionally, ChatterCast gives users a weather forecast for their location or any other location.

## Goals

---

- Develop an Android app with the following functionalities:
    - Registration
    - Login and logout 
    - Adding, requesting, and removing contacts
    - Send and receive messages
    - Start an individual or group chat with existing contacts
    - Notifications for messages, contact requests, and new chats
    - Weather forecast
    - Save favorite locations
- While developing the Android client, we should:
    - Follow best practices for designing mobile user interfaces, following [Material Design](https://m3.material.io) guidelines.
    - Use [Activities](https://developer.android.com/guide/components/activities/intro-activities?hl=en), [Fragments](https://developer.android.com/guide/fragments), and [ViewModels](https://developer.android.com/topic/libraries/architecture/viewmodel) to implement the user interface and client functionality.
    - Use build tools and scripts to build and deploy our application. 
- Develop a web service to handle messaging, contacts, registration, and authentication for our application.
    - Create and administer a database to store user data and messages.
    - Use a third-party API to retrieve weather information.
    - Validate web service functionality with automated testing.
    - Deploy web service to a cloud platform.
- Exercise version control best practices to effectively collaborate on code.
- Follow agile software development practices.
    - Participate in daily stand-ups, sprint planning, backlog refinement, code review, and sprint retrospective meetings over multiple two-week sprints.
    - Organize work items with user stories and Kanban boards.
- Present app to client at different stages of development.

## Technologies Used

---

- Java
- Android
- JavaScript
- [Express.js](https://expressjs.com)
- SQL
- [PostgreSQL](https://www.postgresql.org)
- [Postman](https://www.postman.com)
- [Heroku](https://www.heroku.com)

## Notable Features

---

- **Registration and authentication**: Users need to register to use the app and verify their account using email. The server stores the user's name, email, nickname, and hashed password.
    - **Email validation**: The web service checks if the email exists.
    - **Password reset**: A user can reset their password if they forgot it.
    - **Change password**: A user can change their password if they choose to.
    - **Password validation**: Users need to choose a strong password (length, capitals, numbers, special characters).
- **Themes**: The user can switch between several color schemes using the settings menu.
- **Weather data from GPS coordinates or ZIP**: The web service can retrieve weather data for a location given GPS coordinates or a ZIP code.

## Contribution

---

I worked on ChatterCast in a five-person group. I worked on the Android client at first but as development progressed, I transitioned to working on the server. I was responsible for implementing:

- Android app:
    - Weather and recent messages Fragments for the home screen
    - Settings menu
    - Bottom navigation bar
- Server API endpoints:
    - Requesting weather and location data
    - Creating and removing favorite locations
    - Sending, accepting, and removing contact requests.

I also wrote documentation for each API endpoint with [apiDoc](https://apidocjs.com) and tested each endpoint with [Postman](https://www.postman.com). Using Postman allowed us to demonstrate server functionality without needing to have the feature working on the client.

## Implementation Challenges

---

### Fetching weather information

The toughest challenge I had to contend with was fetching the weather information from a third-party API.

I chose to use the [National Weather Service API](https://www.weather.gov/documentation/services-web-api) because it was free to use and I didn't need to register for an API key. In hindsight it wasn't as easy an API to work with compared to [OpenWeatherMap](https://openweathermap.org/api) but it did give me all the information I needed: current conditions, the seven-day forecast, and the twenty-four-hour forecast. It was simply a matter of getting all the information I needed and packaging it into a JSON to send to the client. The problem was asynchronous programming, a concept I had little prior experience with.

![Prototype weather fetch code](/images/posts/chattercast/prototype-weather-fetch-code.png)

<small>An early version of the code used to fetch weather data. Notice the nesting and all the `.then()`s.</small>

My main issue was learning how to resolve [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). I wasn't exactly sure how they worked, but I knew that I could access the data contained within a promise if I used `.then()`. I eventually got the code working and printing the weather forecast to console, but now I needed refactor it so it could plug into our Express.js code.

![Final weather fetch code](/images/posts/chattercast/final-weather-fetch-code.png)

<small>Much better.</small>

I eventually found out about the [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator, which made handling promises much cleaner. Using `await` allowed me to seriously clean up the data fetching code, which then allowed me to refactor the data processing code into three separate functions for each part of the forecast. I could now use the code in the weather API endpoint for our project.

### Rewriting the Contacts API

Nearing the end of the project, we had *some* of the functionality working. The API for adding and removing contacts and contact requests however, was not. I offered to take a look at the contacts endpoint to see how I could fix things and came to the conclusion that it needed to be rewritten from the ground up.

The first thing I did was make certain what the contacts endpoint needed to do. I got on a group call with my teammates to iron out the requirements. The next thing I did was examine the database to see how contacts were going to be implemented.

The way that the database structure translated into contacts and contact requests was not immediately clear to me at first so it took a while to understand what was going on. Without getting too into the implementation details, pending contacts consist of one row in the contacts table while confirmed contacts consist of two - basically a pair of "requests". Once I figured this out, I then made use of my new SQL knowledge from my Database Design class to rewrite the contacts API. 

Running database queries with Express was pretty straightforward and followed the same formula:

1. Validate input from client.
2. Verify record exists matching the input.
3. Query database and create/read/update/delete rows
4. Send response to client.

After several hours of work, I managed to get the new contacts API working, complete with apiDoc comments explaining its usage.

## Team Experience

---

### Communication

One of our strengths as a team was our communication. We kept in constant contact via Discord, and whenever someone had an issue they could just bring it up in the Discord chat and everyone could stay informed about it. Nobody fell off the face of the Earth, and nobody was left in the dark.

### Scrum

ChatterCast was the first project I was a part of where I worked in structured two-week sprints, with daily stand-ups, sprint planning, backlog refinement, code review, and sprint retrospective meetings.

Sticking to the meeting schedule was difficult initially. Our schedules didn't conveniently line up and our daily stand-ups often ran longer than expected. As we got more used to the scrum process however, meetings ran smoother and stayed on topic more often.

Using GitHub Projects for user stories took some getting used to. I used Trello in the past but GitHub Projects felt more restrictive. It did have some features I appreciated though. We could put a checklist on each user story so we could see what progress has been made and what still needed to be accomplished. We could also link each story to a pull request, which made tracking finished work much easier.

### Code merging

Code merging was an issue throughout the project. At the beginning of the project, we chose to branch off from the dev branch using personal branches for our work, and then merge at the end of the sprint. This resulted in long meetings where we spent hours merging code and fixing conflicts.

We eventually chose to do feature branches rather than personal branches. This worked out better, but we still ended up spending a lot of time merging code at the end of the sprint.

Had we worked longer on this project, I think we would have switched to a [continuous integration](https://www.atlassian.com/continuous-delivery/continuous-integration) approach, merging code often as features get completed.

## Shortcomings

---

Unfortunately, we were not able to implement all our planned features due to time constraints. The following features were not fully implemented on the Android client but worked server-side:

- Adding, requesting, and removing contacts
- Saving and deleting favorite locations
- Sending and receiving messages
- Creating individual chats and group chats

The following features were not fully implemented client-side or server-side:

- Remember user on login
- Sign out
- Notifications

## Takeaways

---

Building ChatterCast was undoubtedly one of the most rigorous projects I have undertaken. I had to learn how to quickly get up to speed and deliver code. Beyond that, I now have a greater understanding about what it takes to develop a full stack mobile app and how to work well with others to deliver code.

