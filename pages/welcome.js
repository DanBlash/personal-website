const welcomeButton = document.getElementById("welcome-Button");
const buttonContainer = document.querySelector(".container");

welcomeButton.addEventListener("click", () => {
    if (!buttonContainer.classList.contains("slide-out-fwd-center")) {
        buttonContainer.classList.toggle("slide-out-fwd-center");
    }
    setTimeout(() => {
        window.location.href = "home.html";
    }, 1000);

    
})

