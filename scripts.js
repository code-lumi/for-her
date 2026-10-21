const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttons = document.getElementById("buttons");

const question = document.getElementById("question");
const questionText = document.getElementById("questionText");
const message = document.getElementById("message");
const mainEmoji = document.getElementById("mainEmoji");
const footer = document.getElementById("footer");

function moveNoButton() {
    const area = buttons.getBoundingClientRect();
    const button = noBtn.getBoundingClientRect();

    const maxX = Math.max(0, area.width - button.width);
    const maxY = Math.max(0, area.height - button.height);

    // Find a random position inside the button area.
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.style.right = "auto";
}

// Move away when approached with a mouse or touchscreen.
noBtn.addEventListener("pointerenter", moveNoButton);
noBtn.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    moveNoButton();
});

// If a click still happens, don't select No.
noBtn.addEventListener("click", (event) => {
    event.preventDefault();
    moveNoButton();
});

// The Yes button displays the happy ending.
yesBtn.addEventListener("click", () => {
    question.textContent = "Yayyy! 🥹💖";
    questionText.textContent = "I like you too! ❤️";
    message.textContent =
        "You just made my day a whole lot better! 🌸";
    mainEmoji.textContent = "🥰";
    footer.textContent = "This little moment is special 💕";

    buttons.style.display = "none";

    document.body.classList.add("happy");
});