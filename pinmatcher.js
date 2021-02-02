function generateRandom() {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return randomNumber;
}

function getPin() {
    const randomPin = document.getElementById('random-pin');
    randomPin.value = generateRandom();

}

function verifyPin() {
    const pinValue = document.getElementById('random-pin').value;
    const typedNumber = document.getElementById('show-number').value;

    if (pinValue === typedNumber) {
        const correctPin = document.getElementById('correct-pin');
        correctPin.style.display = "block";
        const incorrectPin = document.getElementById('incorrect-pin');
        incorrectPin.style.display = "none";
    } else {
        const incorrectPin = document.getElementById('incorrect-pin');
        incorrectPin.style.display = "block";
        const correctPin = document.getElementById('correct-pin');
        correctPin.style.display = "none";
        attempts();
    }
}

function attempts() {
    const attemptsLeft = document.getElementById("attempts").innerText;
    attemptsLeftNumber = parseInt(attemptsLeft);
    if (document.getElementById('attempts').innerText == 0) {
        document.getElementById('submit').disabled = true;

    } 
    else 
    {
        document.getElementById('submit').disabled = false;
        const decrement = attemptsLeftNumber - 1;
        document.getElementById('attempts').innerText = decrement;

    }


}


const generatePinBtn = document.getElementById('generate-pin-button');
generatePinBtn.addEventListener('click', function () {
    getPin();

})

const calculator = document.getElementById('number-container');
calculator.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typedNumber = document.getElementById('show-number');

            typedNumber.value = ""



        } else if (digit === "<") {
            const value = document.getElementById('show-number').value;

            document.getElementById('show-number').value = value.substring(0, value.length - 1);

        }



    } else {
        const typedNumber = document.getElementById('show-number');

        typedNumber.value = typedNumber.value + digit;
    }
})

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function () {
    verifyPin();
})