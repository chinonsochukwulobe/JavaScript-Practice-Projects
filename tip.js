const billInput = document.querySelector("#bill");
const customTipInput = document.querySelector("#custom-tip");
const peopleInput = document.querySelector("#people");

const tipButtons = document.querySelectorAll(".tip-btn");

const tipAmount = document.querySelector("#tip-amount");
const tipPerPerson = document.querySelector("#tip-per-person");
const totalPerPerson = document.querySelector("#total-per-person");

const resetBtn = document.querySelector("#reset-btn");

let selectedTip = 0;
tipButtons.forEach(button => {
    button.addEventListener("click", () => {

        tipButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        selectedTip = Number(button.dataset.tip);

        customTipInput.value = "";

        calculateTip();
    });
});
customTipInput.addEventListener("input", () => {

    tipButtons.forEach(btn => btn.classList.remove("active"));

    selectedTip = Number(customTipInput.value);

    calculateTip();
});
function calculateTip(){
    const bill = Number(billInput.value);
    const people = Number(peopleInput.value);
    if(bill <= 0 || people < 1){
        tipAmount.textContent = "0.00";
        tipPerPerson.textContent = "0.00";
        totalPerPerson.textContent = "0.00";

        return;
    }
    const tip = bill * (selectedTip / 100);

    const eachTip = tip / people;

    const eachTotal = (bill + tip) / people;
    tipAmount.textContent = tip.toFixed(2);
    tipPerPerson.textContent = eachTip.toFixed(2);
    totalPerPerson.textContent = eachTotal.toFixed(2);
}
billInput.addEventListener("input", calculateTip);

peopleInput.addEventListener("input", calculateTip);
resetBtn.addEventListener("click", () => {

    billInput.value = "";
    customTipInput.value = "";
    peopleInput.value = "";

    selectedTip = 0;

    tipButtons.forEach(btn => btn.classList.remove("active"));

    tipAmount.textContent = "0.00";
    tipPerPerson.textContent = "0.00";
    totalPerPerson.textContent = "0.00";

});