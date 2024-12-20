const billAmount = document.getElementById('bill_amount');
const cashGiven = document.getElementById('cash_given');
const clickButton = document.getElementById('cash_check_button');
const noteCells = document.querySelectorAll('.no_of_notes');
const errormsg = document.getElementById('ermsg')
const returns = document.getElementById('return');
const availableNotes = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

clickButton.addEventListener('click', function validateBill() {

    const billValue = Number(billAmount.value);
    const cashValue = Number(cashGiven.value);


    if (billValue > 0 && cashValue >= billValue) {
        const amountToReturn = cashValue - billValue;
        returns.innerText = ('Amount to be given is -> Rs.' +
            amountToReturn)
        returns.style.color = 'green'
        calculateChange(amountToReturn);
    }

    if (cashValue <= 0) {
        returns.innerText =
            ("Error: Cash given should be more than or equal to the bill amount. please enter a positive value");
        returns.style.color = 'red'
    } else {
        returns.innerText =
            ("Error: Cash given should be more than or equal to the bill amount.");

        returns.style.color = 'red'
        noteCells.forEach(cell => cell.innerText = "0");

    }
});

function calculateChange(amountToReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToReturn / availableNotes[i]);
        amountToReturn %= availableNotes[i];
        noteCells[i].innerText = numberOfNotes;
    }
}
