const actions = [
    "Thinking too much",
    "Feeling insecure",
    "Dreaming of being a rock star",
    "Procrastinating",
    "Eating snacks",
    "Watching cat videos",
    "Talking to my plants",
    "Dancing like nobody's watching",
    "Singing in the shower",
    "Contemplating the universe"
];

function changeAction() {
    const actionElement = document.getElementById('action');
    const randomIndex = Math.floor(Math.random() * actions.length);
    actionElement.textContent = actions[randomIndex];
}

// Change action immediately on load
changeAction();

// Change action at regular intervals
setInterval(changeAction, 10000); // 10000 milliseconds = 10 seconds
