// Add a typing indicator element
const typingIndicator = document.createElement('div');
typingIndicator.className = 'typing-indicator';
typingIndicator.innerHTML = '<span></span><span></span><span></span>';

function generateResponse(input) {
    // Clear previous typing indicator
    if (conversation.lastElementChild && conversation.lastElementChild.classList.contains('typing-indicator')) {
        conversation.lastElementChild.remove();
    }

    // Show typing indicator
    conversation.appendChild(typingIndicator);

    // Simulate typing delay
    setTimeout(() => {
        // Remove typing indicator
        typingIndicator.remove();

        // Generate response
        let response;
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
            response = greetings[Math.floor(Math.random() * greetings.length)];
        } else if (lowerInput.includes("bye") || lowerInput.includes("goodbye") || lowerInput.includes("see you")) {
            response = farewells[Math.floor(Math.random() * farewells.length)];
        } else if (lowerInput.includes("thank you") || lowerInput.includes("thanks")) {
            response = thankYouResponses[Math.floor(Math.random() * thankYouResponses.length)];
        } else if (lowerInput.includes("sorry") || lowerInput.includes("apologize")) {
            response = apologies[Math.floor(Math.random() * apologies.length)];
        } else if (lowerInput.includes("site") || lowerInput.includes("website") || lowerInput.includes("about")) {
            response = siteInfo;
        } else if (lowerInput.includes("purpose") || lowerInput.includes("function") || lowerInput.includes("what is this site for")) {
            response = sitePurpose;
        } else if (lowerInput.includes("games") || lowerInput.includes("what games") || lowerInput.includes("games available")) {
            response = gamesList;
        } else if (lowerInput.includes("unite fps")) {
            response = uniteFPS;
        } else if (lowerInput.includes("tron reborn")) {
            response = tronReborn;
        } else {
            response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }

        // Add chatbot response to conversation
        let message = document.createElement('div');
        message.classList.add('chatbot-message', 'chatbot');
        message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
        conversation.appendChild(message);
        message.scrollIntoView({ behavior: "smooth" });
    }, 1000); // Typing delay (1 second)
}
