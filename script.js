document.querySelector("button").addEventListener("click", () => {
    alert("Thank you! We will notify you at launch.");
});
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".container").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".container").style.transition = "opacity 1.2s ease";
        document.querySelector(".container").style.opacity = "1";
    }, 200);
});
