const radioButtons = document.querySelectorAll('input[name="serverchoose"]');

document.getElementById("launchBtn").addEventListener("click", () => {
    window.electronAPI.launchGame();
});

radioButtons.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.checked) {
            window.electronAPI.updateServer(radio.id);
        }
    });
});