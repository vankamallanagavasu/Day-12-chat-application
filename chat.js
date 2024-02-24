document.addEventListener('DOMContentLoaded', () => {
    const messageContainer = document.getElementById('message-container');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Load messages from localStorage on page load
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    // Display existing messages
    messages.forEach(message => {
        appendMessage(message);
    });

    // Function to append message to the chat
    function appendMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        messageContainer.appendChild(messageElement);
    }

    // Function to send message
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message !== '') {
            appendMessage(message);
            messages.push(message);
            localStorage.setItem('chatMessages', JSON.stringify(messages));
            messageInput.value = '';
        }
    }

    // Event listener for send button click
    sendButton.addEventListener('click', () => {
        sendMessage();
    });

    // Event listener for pressing Enter key
    messageInput.addEventListener('keypress', event => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
