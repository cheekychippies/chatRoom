## README

### Name of Student
Jouko Lavonen

### Progress of Development
This application is a simple chat room application built using JavaScript and the Socket.IO library. It allows users to join different chat rooms and send messages to other users in the same room.

The application uses a client-server model, where the server is responsible for managing the chat rooms and broadcasting messages to the appropriate users. The client-side of the application, running in the user's browser, is responsible for displaying the chat interface and handling user interactions.

When a user joins a room, the server sends the history of that room to the user. When a user sends a message, the server adds it to the appropriate room's message array and broadcasts it to all users in that room. When a user leaves a room, the server stops sending them messages from that room.

The application uses the Socket.IO library to handle real-time communication between the client and the server. This library allows for real-time, bidirectional and event-based communication, which is ideal for a chat application.

The client-side code is written in JavaScript and runs in the user's browser. It uses the DOM API to manipulate the chat interface based on user interactions and server events. The server-side code is also written in JavaScript and runs on a Node.js server.

The application's user interface is a simple HTML page with a form for sending messages, a list for displaying messages, and buttons for joining and leaving rooms. The page also includes a CSS file for styling the interface.

### npm Commands
- `npm start`: Starts the web server.

### Instructions
#### Starting the Web Server
1.Run `npm install` to install dependencies.
2.Start the web server by running `npm start`.
3.The server will start running on the specified port which in this case is 3001.

#### Accessing the Website
Once the server is running, you can access the website by opening the index.html file in your browser. You can then join a chat room by entering a room name and clicking the "Join Room" button. You can send messages in the chat room by entering text in the input field and clicking the "Send" button.

### Answering Questions
1. **What was the most challenging part while developing?** 
    - The most challenging part of this project was to just understand how the socket io library works and how to implement it in the project. First try didn't work, but after some research and watching YouTube tutorials I was able to get it working.
    - Another challenge was to create the rooms and make sure that the conversations stayed in the right room. This was solved by creating a separate array for each room and sending the messages to the right room.
2. **Which resources or websites were most helpful to you?**
    - YouTube tutorials
    - Course materials
    - Socket.io documentation
    - GitHub Copilot


3. **If you use any libraries/npm packages, briefly explain why you choose to use them.**
    - `express`: For building the web application.
    - `socket.io`: For real-time communication between the client and the server.
    - `http`: For creating the server.'

