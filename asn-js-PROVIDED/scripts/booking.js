/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const halfDayRate = 20;
const fullDayRate = 35;

let isFullDay = true;
let totalDays = 0;
let totalCost = 0;

window.onload = () => {
    updateTotalCost();
};

document.querySelectorAll('.blue-hover').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.toggle('clicked');
        totalDays += this.classList.contains('clicked') ? 1 : -1;
        updateTotalCost();
    });
});

const fullButton = document.querySelector('#full');
const halfButton = document.querySelector('#half');

fullButton.addEventListener('click', function () {
    isFullDay = true;
    updateTotalCost();
    this.classList.add('clicked');
    halfButton.classList.remove('clicked');
});

halfButton.addEventListener('click', function () {
    isFullDay = false;
    updateTotalCost();
    this.classList.add('clicked');
    fullButton.classList.remove('clicked');
});

document.querySelector('#clear-button').addEventListener('click', () => {
    document.querySelectorAll('.clicked').forEach(button => {
        button.classList.remove('clicked');
    });
    totalDays = 0;
    updateTotalCost();
});

function updateTotalCost() {
    totalCost = totalDays * (isFullDay ? fullDayRate : halfDayRate);
    document.querySelector('#calculated-cost').textContent = `$${totalCost}`;
}
