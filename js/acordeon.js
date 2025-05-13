document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".faq__answer").forEach((answer) => {
        answer.style.display = "none";
    });

    document.querySelectorAll(".faq__item").forEach((item) => {
        item.addEventListener("click", function () {
            const isOpen = this.classList.contains("active");

            document.querySelectorAll(".faq__item").forEach((el) => {
                el.classList.remove("active");
                el.querySelector(".faq__answer").style.display = "none";
            });

            if (!isOpen) {
                this.classList.add("active");
                this.querySelector(".faq__answer").style.display = "flex";
            }
        });
    });
});