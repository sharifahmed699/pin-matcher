function getPin() {
    const pin = Math.round(Math.random() * 10000)
    pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    }
    else {
        // console.log('3digit pin', pin)
        return getPin()
    }
}

function pinGenerate() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin
    // console.log(pin)
}

document.getElementById('type-pad').addEventListener('click', function (event) {
    const number = event.target.innerText
    const calsInput = document.getElementById('display-number')
    if (isNaN(number)) {
        if (number == 'C') {
            calsInput.value = ''
        }
    }
    else {
        const previousCals = calsInput.value
        calsInput.value = previousCals + number
    }
})

function verifyPin() {
    const pin = document.getElementById('display-pin').value
    const typeNumer = document.getElementById('display-number').value
    const successMessage = document.getElementById('success')
    const failMessage = document.getElementById('fail')
    if (pin == typeNumer) {
        successMessage.style.display = 'block'
        failMessage.style.display = 'none'
    }
    else {
        failMessage.style.display = 'block'
        successMessage.style.display = 'none'
    }
}