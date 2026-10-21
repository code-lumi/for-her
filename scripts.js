
document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const buttons = document.getElementById("buttons");

    const question = document.getElementById("question");
    const questionText = document.getElementById("questionText");
    const message = document.getElementById("message");
    const mainEmoji = document.getElementById("mainEmoji");
    const footer = document.getElementById("footer");

    // Stop silently if the HTML IDs do not match.
    if (
        !yesBtn || !noBtn || !buttons ||
        !question || !questionText || !message || !mainEmoji
    ) {
        console.error("Check that your HTML IDs match script.js.");
        return;
    }

    let lastX = -1;
    let lastY = -1;

    function moveNoButton() {
        const area = buttons.getBoundingClientRect();
        const btn = noBtn.getBoundingClientRect();

        const maxX = Math.max(0, area.width - btn.width);
        const maxY = Math.max(0, area.height - btn.height);

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        // Avoid choosing exactly the same position twice.
        if (maxX > 10 && maxY > 10) {
            let attempts = 0;
            while (
                Math.abs(x - lastX) < 35 &&
                Math.abs(y - lastY) < 25 &&
                attempts < 10
            ) {
                x = Math.random() * maxX;
                y = Math.random() * maxY;
                attempts++;
            }
        }

        lastX = x;
        lastY = y;

        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
        noBtn.style.right = "auto";
    }

    // Desktop: move away when approached.
    noBtn.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "mouse") {
            moveNoButton();
        }
    });

    // Touchscreen: move when someone tries to tap No.
    noBtn.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        moveNoButton();
    });

    noBtn.addEventListener("click", (event) => {
        event.preventDefault();
        moveNoButton();
    });

    // Yes must always work.
    yesBtn.addEventListener("click", () => {
        question.textContent = "Yayyy! 🥹💖";
        questionText.textContent = "I like you too! ❤️";
        message.textContent =
            "You just made my day a whole lot better! 🌸";
        mainEmoji.textContent = "🥰";

        if (footer) {
            footer.textContent = "This little moment is special 💕";
        }

        buttons.hidden = true;
    });
});
