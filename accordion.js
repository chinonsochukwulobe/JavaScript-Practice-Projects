const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    const question = faq.querySelector(".question");

    question.addEventListener("click", () => {
        faqs.forEach((item) => {
            if (item !== faq) {
                item.classList.remove("active");
            }
        });
        faq.classList.toggle("active");
    });
});