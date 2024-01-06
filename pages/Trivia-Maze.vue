<template>
<p><a href="https://github.com/OtherAndrew/trivia-maze">Trivia Maze</a> is a project I worked on in 2022 as a part of my Software Development and QA class at UW Tacoma. In this post, I will go over the development process and some unique challenges my team faced during development.</p>
<h1>Description</h1>
<p>Trivia Maze is a game where the player must make their way through a maze to the goal room. In order to move, the player must open doors by answering trivia questions correctly. If the player answers the question incorrectly then the door will be locked and cannot be opened. If the path to the goal is blocked then the game is lost.</p>
<h1>Goals</h1>
<ul>
<li>Develop a software project in a team following agile methodologies, including user stories and storyboarding.</li>
<li>Create clean, easily testable code following <a href="https://en.wikipedia.org/wiki/SOLID">SOLID</a> principles of object-oriented programming.</li>
<li>Utilize software design patterns such as <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller">model–view–controller (MVC)</a>, <a href="https://en.wikipedia.org/wiki/Factory_method_pattern">factory</a>, and <a href="https://en.wikipedia.org/wiki/Singleton_pattern">singleton</a> to structure our code.</li>
<li>Employ Git and GitHub to facilitate effective collaboration and version control.</li>
</ul>
<h1>Technologies Used</h1>
<ul>
<li>Java</li>
<li><a href="https://junit.org/junit5/">JUnit</a></li>
<li><a href="https://en.wikipedia.org/wiki/Swing_(Java)">Swing</a></li>
<li><a href="https://www.sqlite.org/index.html">SQLite</a></li>
</ul>
<h1>Notable Features</h1>
<p><a href="/images/trivia-maze/game-screen.png"><img src="/images/trivia-maze/game-screen.png" alt=""></a></p>
<ul>
<li><strong>Intuitive GUI design</strong>: All functionality is accessible through the GUI, including changing the maze size, saving and loading game sessions, and activating cheats. I was able to present the game to a family member and they were able to play the game with no explanation.</li>
<li><strong>Consistent GUI appearance</strong>: This required clever use of composition. We decided to use a class for our theming that contained constants for colors and static methods to build GUI components.</li>
<li><strong>Randomized maze generation</strong>: The maze structure, question set, and answer order are all randomized per play session.</li>
<li><strong>Keyboard shortcuts</strong>: We implemented several keyboard shortcuts to simplify the player's interaction with the game. This includes WASD or arrow keys to move around, SPACE or Enter to submit answers, and ESC to back out of a question.</li>
<li><strong>Saving and loading</strong>: The player is able to create and load save files so they can save their progress and start playing again later. The game also has quick saving and loading so the player can quickly and conveniently save their progress at any point.</li>
<li><strong>Quality of life</strong>: The player can see the answer to a question they answered incorrectly, and if they lose the game, the path to the goal is revealed to them.</li>
<li><strong>Cheat toggles</strong>: The player can activate cheat settings on the difficulty menu before they start the game. This not only reduces the difficulty for the player, but also assists with testing.</li>
</ul>
<h1>Contribution</h1>
<p>I worked on Trivia Maze in a group of three. As part of this development team, I was responsible for assembling weekly deliverables, writing documentation, creating unit tests, developing the system that translated the maze data into a human-readable image, and implementing the GUI.</p>
<p>Implementing the various UI elements such as buttons and text fields was straightforward once I got used to using Swing, but I noticed I had a lot of repeated code, which would be exacerbated if I wanted to change how the UI elements looked beyond the default appearance. The solution I came up with was to create a separate class that contained methods for generating standard UI elements, as well as the colors we wanted to use throughout the application - the app theme. Any UI class would then import this class and gain access to the app theme.</p>
<h1>Challenges</h1>
<p>We had two diverging implementations of the maze data initially. One of which was based on a graph data structure and another which was based on "tiles."</p>
<p>The graph implementation was based on a 2D array of maze rooms (nodes) which are connected via doors (edges), which can be on the north, south, east, or west walls of the room.</p>
<p>The tile implementation treated rooms, doors, and walls, as "maze tiles" also stored in a 2D array, with different behaviors. Rooms and doors can be traversed, while walls are always impassable. However doors must be answered correctly in order to be traversed, otherwise they will stay blocked.</p>
<p>We decided to go forward with the graph implementation because it allowed us to generate random mazes with <a href="https://en.wikipedia.org/wiki/Kruskal%27s_algorithm">Kruskal's Algorithm</a>. By using a graph, we could also use <a href="https://en.wikipedia.org/wiki/Breadth-first_search">breadth-first search</a> to determine whether or not the player can reach the end of the maze, and end the game if they can't.</p>
<h1>Shortcomings</h1>
<p>Our group achieved most of the goals we had for this project other than a couple of stretch goals and developer options, none of which were essential for the final product or for testing. Some parts of the program were difficult to test due to internal randomization and dependencies with other parts of the program.</p>
<h1>Lessons learned</h1>
<p>I have completed team software development projects in the past but this was the first one one where I explicitly followed agile methodologies, including storyboarding. I liked storyboarding since it allowed us to look at everything we needed to accomplish and break it down into small, doable parts, and track the progress of each feature as it's worked on. For software projects since then I used user stories and storyboards to great effect to organize my team's work.</p>
<p>Two concepts my team neglected to consider until near the end of development was <a href="https://stackoverflow.com/a/383982">programming to an interface</a> and <a href="https://en.wikipedia.org/wiki/Test-driven_development">test-driven development</a>.</p>
<p>Since we neglected to use interfaces at the start of development, we had a hard time testing the maze functionality until all the pieces of the maze (rooms, doors, and questions) came together. We weren't able to use <a href="https://en.wikipedia.org/wiki/Mock_object">mock objects</a> to substitute functionality for objects that were in development since we didn't have a good idea of what the object needed to do in the first place. Defining interfaces before implementing the real objects would have given us a clearer understanding of what the objects need to accomplish.</p>
<p>Using test-driven development would have made developing unit tests for our code easier and it would have allowed us to troubleshoot bugs earlier. We decided to develop our unit tests after we finished implementing the rest of the program and found that there were some parts of our code which were difficult to test due to internal randomization or excessive dependencies. Creating the unit tests and considering every scenario and edge case first would have allowed us to sort out these problems sooner rather than later.</p>
<p><a href="/images/trivia-maze/win-screen.png"><img src="/images/trivia-maze/win-screen.png" alt=""></a></p>
<p>Overall, this project served as a great example of what to expect and consider when undertaking a software development project. I gained valuable experience in planning and designing, project management, debugging, and of course, programming. The skills I gained over the course of this project served me well in future projects.</p>
</template>