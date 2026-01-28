function handleSubmit(e) {
    e.preventDefault();
    const email = document.querySelector(".signup input").value;
    alert("Thank you! We’ll notify you at " + email);
    document.querySelector(".signup input").value = "";
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".container").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".container").style.transition = "opacity 1.2s ease";
        document.querySelector(".container").style.opacity = "1";
    }, 200);
});
