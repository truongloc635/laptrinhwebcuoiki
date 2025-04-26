document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendSuggestion(text) {
    document.getElementById("user-input").value = text;
    sendMessage();
}

async function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;
    
    const chatBox = document.getElementById("chat-box");
    
    chatBox.innerHTML += `
        <div class="user-message">
            ${userInput}
            <div class="time-stamp"></div>
        </div>
    `;
    document.getElementById("user-input").value = "";
    
    const typingIndicator = document.createElement("div");
    typingIndicator.className = "typing-indicator";
    typingIndicator.innerHTML = `
        <div class="typing-bubble"></div>
        <div class="typing-bubble"></div>
        <div class="typing-bubble"></div>
    `;
    chatBox.appendChild(typingIndicator);
    chatBox.scrollTop = chatBox.scrollHeight;
    
    try {
        const response = await fetch("http://localhost:8000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });
        
        const data = await response.json();
        
        chatBox.removeChild(typingIndicator);
        
        chatBox.innerHTML += `
            <div class="bot-message">
                ${data.answer}
            </div>
        `;
    } catch (error) {
        chatBox.removeChild(typingIndicator);
    }
    chatBox.scrollTop = chatBox.scrollHeight;
}
