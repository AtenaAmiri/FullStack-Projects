const sendBtn = document.getElementById("sendBtn");
const textBox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");
const user = { message: "" };

let arrayOfPossibleMessages = [
  {
    message: "hi",
    response: "hello",
  },
  {
    message: "how are you?",
    response: "I'm fine",
  },
  {
    message: "what's your name?",
    response: "I'm a chatbot",
  },
  {
    message: "what is your name?",
    response: "I'm a chatbot",
  },
  {
    message: "how old are you?",
    response: "I'm ageless",
  },
  {
    message: "do you have kids?",
    response: " No, I don't",
  },
  {
    message: "do you sleep early?",
    response: "No, I don't",
  },
  {
    message: "do you have a car?",
    response: " I travel through space",
  },
  {
    message: "can you dance?",
    response: "yes,Tango",
  },
  {
    message: "what's your favorite food?",
    response: "Pizza",
  },
  {
    message: "what is your favorite food?",
    response: "Pizza",
  },
  {
    message: "do you have a job?",
    response: "yes",
  },
  {
    message: "where do you live?",
    response: "in the web",
  },
  {
    message: "where were you born?",
    response: "on Mars",
  },
  {
    message: "do you have siblings?",
    response: "Yes, I have got 3 ",
  },
];

function sendMessage(userMessage) {
  const messageElement = document.createElement("div");
  messageElement.style.textAlign = "right";
  messageElement.style.margin = "10px";
  messageElement.innerHTML = `<span>You : ${userMessage}</span>`;
  chatContainer.appendChild(messageElement);
}

function chatbotResponse(userMessage) {
  let chatbotMessage = "";
  if (userMessage.length > 5 || userMessage === "hi") {
    let result = arrayOfPossibleMessages.filter((val) =>
      val.message.includes(userMessage.toLowerCase())
    );
    if (result.length > 0) {
      let response = result[0].response;
      chatbotMessage = response;
    } else {
      chatbotMessage = "Please send another message";
    }
  } else {
    chatbotMessage = "Please a different message";
  }

  const messageElement = document.createElement("div");
  messageElement.innerHTML = `<span>Chatbot : ${chatbotMessage}</span>`;

  setTimeout(() => {
    messageElement.animate(
      [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
      { duration: 200 }
    );
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 1000);
}

sendBtn.addEventListener("click", function (e) {
  const userMessage = textBox.value;

  if (userMessage === "") {
    alert("Please type in a message");
  } else {
    let userMessageText = userMessage.trim();
    user.message = userMessageText;
    textBox.value = "";
    sendMessage(userMessageText);
    chatbotResponse(userMessageText);
  }
});
