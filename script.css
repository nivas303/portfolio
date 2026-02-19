const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 1920;
canvas.height = 1080;

const frameCount = 240;
const currentFrame = index => (
  `./frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`
);

const images = [];
const imageAssets = { frame: 0 };

// Preload images
for (let i = 1; i <= frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

// Draw first frame
images[0].onload = () => {
  context.drawImage(images[0], 0, 0);
};

// Scroll Animation logic
window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

const updateImage = index => {
  context.drawImage(images[index - 1], 0, 0);
}

const html = document.documentElement;

/** * CHATBOT LOGIC
 * Note: You will need to replace 'YOUR_API_KEY' and the endpoint 
 * with your actual Gemini API implementation.
 */

const SYSTEM_PROMPT = `
You are a career assistant for Nivas M. 
Your ONLY source of truth is the following resume content:
- Name: Nivas M from Aruppukottai, Tamil Nadu.
- Education: BE in ECE from Govt College of Engineering, Tirunelveli (GPA: 8.05).
- Experience: IBM AI Cloud Internship (AI apps/cloud), 1M1B Data Analytics Internship (Tableau, Global Warming analysis).
- Skills: C++, Python, Django, Tableau, MySQL, Full Stack, Data Analysis.
- Certifications: Coursera Data Analytics, NPTEL Data Science.
Strict Rule: If the user asks anything NOT in this list (e.g., weather, politics, or other people), 
politely state you can only discuss Nivas's professional qualifications.
`;

const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', async () => {
    const text = userInput.value;
    if(!text) return;

    // Append user message
    chatBody.innerHTML += `<div class="user-msg">${text}</div>`;
    userInput.value = '';

    // Simulate API Call (Update this with your actual Gemini 2.5 Flash fetch call)
    // You would pass the SYSTEM_PROMPT as the 'system_instruction' in the API.
    setTimeout(() => {
        chatBody.innerHTML += `<div class="bot-msg">I am currently set up as a UI demo. To make me live, connect your Gemini API key in script.js using the provided system prompt!</div>`;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
});
