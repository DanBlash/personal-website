
const aboutMeTitle = document.querySelector(".about-me-title");
const aboutMeText = document.querySelector(".about-me-text");
const aboutMeText2 = document.querySelector(".about-me-text2");


window.addEventListener("scroll", () =>{
    if (window.scrollY > 1) {
        aboutMeTitle.style.display= "flex";
        aboutMeTitle.classList.add("slide-in-bottom"); 
    } else if (window.scrollY > 500) {
        aboutMeTitle.style.display= "none";
        aboutMeTitle.classList.remove("fade-in");
    }
    
    console.log("Scroll position y:", window.scrollY)
})


window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        aboutMeText.style.display= "flex";
        aboutMeText.classList.add("slide-in-bottom"); 
    } else if (window.scrollY > 500) {
        aboutMeText.style.display= "none";
        aboutMeText.classList.remove("fade-in");
    }
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        aboutMeText2.style.display= "flex";
        aboutMeText2.classList.add("slide-in-bottom"); 
    } else if (window.scrollY > 700) {
        aboutMeText2.style.display= "none";
        aboutMeText2.classList.remove("fade-in");
    }
})
// const knowledgeButton = document.getElementById("knowledge-card");

// knowledgeButton.addEventListener("click", () => {
//     window.location.href = "knowledge.html";
// })

// const aboutButton = document.getElementById("about-card");

// aboutButton.addEventListener("click", () => {
//     window.location.href = "about.html";
// })

// const socialButton = document.getElementById("social-card");

// socialButton.addEventListener("click", () => {
//     window.location.href = "social.html";
// })