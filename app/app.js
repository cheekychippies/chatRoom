
    const socket = io('http://localhost:3001')

    const roomInput = document.querySelector('#roomInput');
    const joinButton = document.querySelector('#joinButton');
    const leaveButton = document.querySelector('#leaveButton');
    const messageForm = document.querySelector('#messageForm');

    socket.on('messageHistory', (messages) => {
        const messageList = document.querySelector('#messages');
        messageList.innerHTML = ''; // Clear the current messages
        // Add each message in the history to the message list
        messages.forEach((message) => {
            const li = document.createElement('li');
            li.textContent = message;
            messageList.appendChild(li);
        });
    });

    joinButton.addEventListener('click', () => {
        console.log('Join Room button clicked')
        const room = roomInput.value;
        socket.emit('joinRoom', room);
        messageForm.style.display = 'block'; // Show the message form when a room is joined
        roomInput.style.display = 'none'; // Hide the room input field
        joinButton.style.display = 'none'; // Hide the Join Room button
        leaveButton.style.display = 'block'; // Show the Leave Room button
        document.querySelector('#messages').style.display = 'block';
    });

    leaveButton.addEventListener('click', () => {
        console.log('Leave Room button clicked')
        const room = roomInput.value;
        socket.emit('leaveRoom', room);
        messageForm.style.display = 'none'; // Hide the message form when a room is left
        roomInput.style.display = 'block'; // Show the room input field
        joinButton.style.display = 'block'; // Show the Join Room button
        leaveButton.style.display = 'none'; // Hide the Leave Room button
        document.querySelector('#messages').style.display = 'none';
    });

    function sendMessage(e) {
        e.preventDefault();
        const input = document.querySelector('#messageInput');
        if (input.value) {
            socket.emit('message', { room: roomInput.value, message: input.value });
            input.value = '';
        }
        input.focus();
    }

    messageForm.addEventListener('submit', sendMessage);

    socket.on('message', (data) => {
        const li = document.createElement('li');
        li.textContent = data;
        document.querySelector('#messages').appendChild(li);
    });
