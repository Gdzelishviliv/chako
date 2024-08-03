const buttonsContainer = document.getElementById('buttonsContainer');
const hiddenContent = document.getElementById('hiddenContent');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const message = document.getElementById('message');

// ღილაკის შემთხვევითი პოზიცია
function randomPosition() {
    const buttonRect = dislikeBtn.getBoundingClientRect();
    const top = Math.random() * (window.innerHeight - buttonRect.height);
    const left = Math.random() * (window.innerWidth - buttonRect.width);
    dislikeBtn.style.top = `${top}px`;
    dislikeBtn.style.left = `${left}px`;
}

// ღილაკების ჩვენება
function showButtons() {
    buttonsContainer.classList.remove('hidden');
}

// ღილაკზე დაჭერის შემდეგ 5 წამით გაწვდოს
dislikeBtn.addEventListener('mouseover', () => {
    dislikeBtn.style.position = 'absolute';
    randomPosition();
});

let clickTimeout;

dislikeBtn.addEventListener('click', () => {
    clearTimeout(clickTimeout);

    clickTimeout = setTimeout(() => {
        showButtons();
        hiddenContent.classList.remove('hidden');
    }, 5000); // 5 seconds
});

// "მომწონხარ" ღილაკზე დაჭერისას შეტყობინების გაწვდვა
likeBtn.addEventListener('click', () => {
    message.classList.remove('hidden');
});
