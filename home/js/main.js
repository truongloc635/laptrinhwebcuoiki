/*Main java */
function searchclick()
{
	if (window.matchMedia("(max-width: 950px)").matches) 
	{
		var x=document.getElementById("main-header");
		x.style.display="none";
		var y=document.getElementById("header-mid-min");
		y.style.display="flex";
		
	}
}	
function hidesearchclick()
{
	if (window.matchMedia("(max-width: 950px)").matches) 
	{
		var y=document.getElementById("header-mid-min");
		y.style.display="none";
		var x=document.getElementById("main-header");
		x.style.display="flex";		
	}
}
function barmenu()
{
	if (window.matchMedia("(max-width: 950px)").matches) 
	{
		var y=document.getElementById("header-bottom");
		y.style.display="block";	
		var huy=document.getElementById("huy");
		huy.style.display="block";	
	}
}	
function hidebarmenu()
{
	if (window.matchMedia("(max-width: 950px)").matches) 
	{
		var y=document.getElementById("header-bottom");
		y.style.display="none";	
		var huy=document.getElementById("huy");
		huy.style.display="none";	
	}	
}
window.addEventListener('scroll',function(){
	var x=document.getElementById("fixed0");
	if(window.scrollY<150)	
	{
		x.style.position="static";
	}
	else
	{
		x.style.position="fixed";
		x.style.bottom="100px";
	    x.style.right="0px";
	}	
});
function showchatbox() 
{
    var x = document.getElementById("chatboxloc");
    if (x.style.display === "none" || x.style.display === "") 
	{
        x.style.display = "block";
    }
	else 
	{
        x.style.display = "none";
    }
}
function hidechatbox() 
{
    var x = document.getElementById("chatboxloc");
    x.style.display = "none";
}


/*chatbox*/
document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", function() {
        });
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
        </div>
    `;
    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
    
    try {
        const response = await fetch("http://localhost:8000/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });
        
        const data = await response.json();        
        chatBox.innerHTML += `
            <div class="bot-message">
                ${data.answer}
            </div>
        `;
    } catch (error) {
        chatBox.innerHTML += `
        <div class ="bot-message">
             ${error}
        `;
    }
    chatBox.scrollTop = chatBox.scrollHeight;
}
