const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector("#submit-btn");
const error = document.querySelector(".error");
const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
const selectedRatingText = document.querySelector(".selected-rating");

// Store the selected rating
let selectedRating = null;
ratingButtons.forEach((button) => {
    button.addEventListener("click", () => {
        ratingButtons.forEach((btn) => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        selectedRating = button.textContent;
        error.textContent = "";
    });
});
submitBtn.addEventListener("click", () => {

    if (selectedRating === null) {
        error.textContent = "Please select a rating.";
        return;
    }
    mainContainer.classList.add("hidden");
    thankYou.classList.remove("hidden");

    selectedRatingText.textContent = `You selected ${selectedRating} out of 5`;
});