// Get chatbot elements
const chatbot = document.getElementById('chatbot');
const conversation = document.getElementById('conversation');
const inputForm = document.getElementById('input-form');
const inputField = document.getElementById('input-field');

// Add event listener to input form
inputForm.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get user input
    const input = inputField.value;

    // Clear input field
    inputField.value = '';
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });

    // Add user input to conversation
    let message = document.createElement('div');
    message.classList.add('chatbot-message', 'user-message');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${input}</p>`;
    conversation.appendChild(message);

    // Generate chatbot response
    const response = generateResponse(input);

    // Add chatbot response to conversation
    message = document.createElement('div');
    message.classList.add('chatbot-message', 'chatbot');
    message.innerHTML = `<p class="chatbot-text" sentTime="${currentTime}">${response}</p>`;
    conversation.appendChild(message);
    message.scrollIntoView({ behavior: "smooth" });
});

// Function to clean and normalize user input
function normalizeInput(input) {
    return input.toLowerCase().trim();
}

// Define possible responses related to the website and general conversation
const responses = {
    "hi": "Hello! How can I assist you today? 😊",
    "hello": "Hi there! What can I do for you? 😊",
    "how are you": "I'm just a bot, but I'm here and ready to help! How can I assist you today? 😊",
    "thank you": "You're welcome! If you have any more questions, feel free to ask. 😊",
    "site overview": "Unify is a platform where you can explore top-notch VR games and unique NFTs. We feature game showcases, NFT collections, and much more.",
    "unify": "Unify offers exciting VR games and NFTs. Check out our featured games and NFT showcases for more information.",
    "tron reborn": "Tron Reborn is a featured game with unique NFTs like Light Cycle, Green Forest Attack, and Peck Cycle. Each NFT has its own rarity and price.",
    "unite fps": "Unite FPS is a thrilling first-person shooter set in an apocalyptic future. Fight zombies and become the MVP in this intense game.",
    "games section": "In the Games section, you'll find detailed information about our featured games, including Tron Reborn and Unite FPS, along with store links.",
    "about us": "We are dedicated to bringing you the best games and NFTs from around the globe. Our platform ensures a safe and enjoyable gaming experience along with NFT ownership opportunities.",
    "contact": "For any queries, you can reach us at unifystore.com or call us at 9717926xxx.",
    "nft showcase": "Our NFT Showcase features unique items from Tron Reborn, including rare, epic, and legendary NFTs. Each one has a distinct rarity and price.",
    "light cycle": "The 'Light Cycle' is a rare NFT from Tron Reborn, priced at 2 ETH. It's a futuristic vehicle collectible in the game.",
    "green forest attack": "The 'Green Forest Attack' is a legendary NFT priced at 5 ETH, featuring dramatic artwork of a forest scene.",
    "peck cycle": "The 'Peck Cycle' is an epic NFT priced at 3 ETH, showcasing detailed designs related to Tron Reborn.",
    "nft": "NFT stands for Non-Fungible Token. It represents ownership of a unique digital item, like artwork or in-game assets.",
    "vr game": "VR stands for Virtual Reality. VR games immerse you in a digital environment, offering a more interactive experience than traditional games.",
    "default": "Hmm, I didn't quite get that. Could you please rephrase or provide more details? I'm here to help! 😊",
    "human": "I'm here to assist you! If you're unsure what to ask, try asking about our games, NFTs, or anything related to Unify. 😊",

    // Additional conversational responses
    "what's your name": "I’m Unibot, your friendly assistant! How can I help you today? 😊",
    "what can you do": "I can help you with information about our games, NFTs, and anything related to Unify. Just ask away! 😊",
    "i need help": "Of course! What do you need help with? Feel free to ask me anything about our games, NFTs, or general inquiries.",
    "can you assist me": "Absolutely! Let me know what you need assistance with, and I'll do my best to help you.",
    "show me games": "You can find details about our games in the Games section. We have exciting titles like Tron Reborn and Unite FPS.",
    "tell me about tron reborn": "Tron Reborn is a futuristic game featuring NFTs like the Light Cycle and Green Forest Attack. It's all about immersive racing and collectible assets.",
    "what is unite fps": "Unite FPS is a first-person shooter game set in an apocalyptic world where you fight zombies and compete to be the best player.",
    "how do i buy an nft": "To buy an NFT, visit the NFT Showcase section, choose the item you're interested in, and follow the purchase instructions provided.",
    "how to contact support": "For support, you can email us at unifystore.com or call us at 9717926xxx. We're here to help!",
    "what is vr": "Virtual Reality (VR) creates a simulated environment that you can interact with using VR headsets. It provides a more immersive experience compared to traditional gaming.",
    "what are nfts": "Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of a specific item, such as artwork or in-game items. They are stored on the blockchain.",
    "bye": "Goodbye! If you have more questions in the future, feel free to return. Have a great day! 😊",
    "see you later": "See you later! If you need help with anything, I'll be here. Have a wonderful day! 😊",
    "goodbye": "Goodbye! Don't hesitate to come back if you need more assistance. Take care! 😊",
    "thanks": "You're welcome! If you need any more help, just let me know. 😊"
};

// Function to generate chatbot response with fuzzy matching and human-like interaction
function generateResponse(input) {
    const normalizedInput = normalizeInput(input);

    // Check for common greetings and casual conversation
    if (normalizedInput.includes("hi") || normalizedInput.includes("hello")) {
        return responses["hi"];
    }

    if (normalizedInput.includes("how are you")) {
        return responses["how are you"];
    }

    if (normalizedInput.includes("thank you") || normalizedInput.includes("thanks")) {
        return responses["thank you"];
    }

    // Handle specific terms and phrases
    if (normalizedInput.includes("site overview") || normalizedInput.includes("about")) {
        return responses["about us"];
    }

    if (normalizedInput.includes("games section") || normalizedInput.includes("show me games")) {
        return responses["games section"];
    }

    if (normalizedInput.includes("tron reborn")) {
        return responses["tron reborn"];
    }

    if (normalizedInput.includes("unite fps")) {
        return responses["unite fps"];
    }

    if (normalizedInput.includes("nft showcase") || normalizedInput.includes("buy an nft")) {
        return responses["nft showcase"];
    }

    if (normalizedInput.includes("light cycle")) {
        return responses["light cycle"];
    }

    if (normalizedInput.includes("green forest attack")) {
        return responses["green forest attack"];
    }

    if (normalizedInput.includes("peck cycle")) {
        return responses["peck cycle"];
    }

    if (normalizedInput.includes("what is vr")) {
        return responses["vr game"];
    }

    if (normalizedInput.includes("what are nfts")) {
        return responses["nft"];
    }

    // Handle conversational responses
    if (normalizedInput.includes("what's your name") || normalizedInput.includes("who are you")) {
        return responses["what's your name"];
    }

    if (normalizedInput.includes("what can you do") || normalizedInput.includes("assist me")) {
        return responses["what can you do"];
    }

    if (normalizedInput.includes("i need help") || normalizedInput.includes("can you assist me")) {
        return responses["can you assist me"];
    }

    if (normalizedInput.includes("how to contact support") || normalizedInput.includes("contact support")) {
        return responses["how to contact support"];
    }

    if (normalizedInput.includes("bye") || normalizedInput.includes("goodbye") || normalizedInput.includes("see you later")) {
        return responses["bye"];
    }

    // Return default response if no specific match is found
    return responses["default"];
}
