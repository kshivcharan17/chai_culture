document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emailForm");
    const input = document.getElementById("emailInput");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = input.value.trim();

        if (email === "") return;

        alert("Thank you! We’ll notify you at " + email);
        input.value = "";
    });

    document.querySelector(".container").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".container").style.transition = "opacity 1.2s ease";
        document.querySelector(".container").style.opacity = "1";
    }, 200);
});
