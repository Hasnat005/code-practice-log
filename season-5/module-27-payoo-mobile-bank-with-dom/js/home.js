const addMoneyBtn = document.getElementById('add-money');
addMoneyBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const amount = parseInt(document.getElementById("amount").value);
    console.log(amount);
    const pin = parseInt(document.getElementById('pin').value);
    if(pin === 5) {
        const currentBalance = parseInt(document.getElementById('current-balance').innerText);
        document.getElementById('current-balance').innerText = "";
        let totalAmount = currentBalance + amount;
        document.getElementById('current-balance').innerText = totalAmount;
        document.getElementById("amount").value = '';
    } else {
        alert("your pin is wrong");
    }
    document.getElementById("amount").value = 0;
    
})

const cashoutMoneyBtn = document.getElementById('cash-out');
cashoutMoneyBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const amount = parseInt(document.getElementById("cash-out-amount").value);
    console.log(amount);
    const pin = parseInt(document.getElementById('cash-out-pin').value);
    if(pin === 5) {
        const currentBalance = parseInt(document.getElementById('current-balance').innerText);
        document.getElementById('current-balance').innerText = "";
        let totalAmount = currentBalance - amount;
        document.getElementById('current-balance').innerText = totalAmount;
        document.getElementById("cash-out-amount").value = '';
    } else {
        alert("your pin is wrong");
    }
    document.getElementById("cash-out-amount").value = 0;
    
})

const addFunction = document.getElementById('add-functionality').innerHTML;
const cashoutFunction = document.getElementById('cash-out-functionality').innerHTML;
document.getElementById('cash-out-functionality').innerHTML = '';


document.getElementById('add-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('cash-out-functionality').innerHTML = '';
    document.getElementById('add-functionality').innerHTML = addFunction;
})

document.getElementById("cashout-btn").addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('add-functionality').innerHTML = '';
    document.getElementById('cash-out-functionality').innerHTML = cashoutFunction;
})