/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var rate = 35;
var days = 0;
var calcCost = document.getElementById('calculated-cost');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the selectedDays if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function selectDay() {
    calc();
}

function clicked(day) {
    if (day.classList.contains('clicked')) {  
    } 
    else {
        days++;
        day.classList.add('clicked');  
        selectDay();
    }
}

document.getElementById('monday').addEventListener('click', function () {
    clicked(document.getElementById('monday'));
});

document.getElementById('tuesday').addEventListener('click', function () {
    clicked(document.getElementById('tuesday'));
});

document.getElementById('wednesday').addEventListener('click', function () {
    clicked(document.getElementById('wednesday'));
});

document.getElementById('thursday').addEventListener('click', function () {
    clicked(document.getElementById('thursday'));
});

document.getElementById('friday').addEventListener('click', function () {
    clicked(document.getElementById('friday'));
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById('clear-button').addEventListener('click', clearDays);

function clearDays() {
    clearDay('monday');
    clearDay('tuesday');
    clearDay('wednesday');
    clearDay('thursday');
    clearDay('friday');

    days = 0;
    calc();
}

function clearDay(dayId) {
    var day = document.getElementById(dayId);
    if (day.classList.contains('clicked')) {
        day.classList.remove('clicked');
    }
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

document.getElementById('half').addEventListener('click', half);
document.getElementById('full').addEventListener('click', full);

function half() {
    rate = 20;
    selectDay();
    calc();
}

document.getElementById('half').addEventListener('click', function () {
    clicked(document.getElementById('half'));
});
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function full() {
    rate = 35;
    selectDay();   
    calc();
}
document.getElementById('full').addEventListener('click', function () {
    clicked(document.getElementById('full'));
});


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calc() {
    var total = rate * days;
    calcCost.innerHTML = total;
}
