const dob = document.getElementById("dob");
const calculateBtn = document.getElementById("calculateBtn");

const error = document.getElementById("error");

const result = document.getElementById("result");

const age = document.getElementById("age");
const birthday = document.getElementById("birthday");
const remaining = document.getElementById("remaining");
const weekday = document.getElementById("weekday");

function calculateAge(){

    error.textContent = "";
    result.classList.remove("show");

    if(dob.value === ""){
        error.textContent = "Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dob.value);

    const today = new Date();

    if(birthDate > today){
        error.textContent = "Date cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();

    let months = today.getMonth() - birthDate.getMonth();

    let days = today.getDate() - birthDate.getDate();

    if(days < 0){

        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();

    }

    if(months < 0){

        years--;

        months += 12;

    }

    age.textContent =
    `Age: ${years} Years, ${months} Months, ${days} Days`;

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    weekday.textContent =
    `Day Born: ${daysOfWeek[birthDate.getDay()]}`;

    let nextBirthday = new Date(
        today.getFullYear(),
        birthDate.getMonth(),
        birthDate.getDate()
    );

    if(nextBirthday < today){

        nextBirthday = new Date(
            today.getFullYear() + 1,
            birthDate.getMonth(),
            birthDate.getDate()
        );

    }

    birthday.textContent =
    `Next Birthday: ${nextBirthday.toDateString()}`;

    const oneDay = 1000 * 60 * 60 * 24;

    const daysLeft = Math.ceil(
        (nextBirthday - today) / oneDay
    );

    remaining.textContent =
    `Days Remaining: ${daysLeft}`;

    result.classList.add("show");

}

calculateBtn.addEventListener("click", calculateAge);

dob.addEventListener("change", calculateAge);