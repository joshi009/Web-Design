const chatBox = document.getElementById('chatBox');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const userSelect = document.getElementById('userSelect');

// We'll store all messages in a local array for this demo
let messages = [];

// Render all messages
function renderMessages() {
  chatBox.innerHTML = '';
  messages.forEach(msg => {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'chat-message' + (msg.sender === userSelect.value ? ' me' : '');
    msgDiv.innerHTML = `<span class="sender">${msg.sender}:</span> ${msg.text}`;
    chatBox.appendChild(msgDiv);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const sender = userSelect.value;
  const text = chatInput.value.trim();
  if (text.length === 0) return;
  // Add this message
  messages.push({
    sender,
    text
  });
  renderMessages();
  chatInput.value = '';
});

// Change highlighting for "me" when user switches
userSelect.addEventListener('change', renderMessages);

// Optionally, send on Enter
chatInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    chatForm.dispatchEvent(new Event('submit'));
  }
});
