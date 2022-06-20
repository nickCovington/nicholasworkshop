const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const dummyTransactions = [
//     {id: 1, text: 'Corn', amount: -35},
//     {id: 2, text: 'Farmers Mkt', amount: 400},
//     {id: 3, text: 'Soybeans', amount: -70},
//     {id: 4, text: 'Spinach', amount: -84}
// ];

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

function addTransaction(e){
    e.preventDefault();

    if(text.value.trim() === '' || amount.value.trim() === ''){
        alert('Please enter Text & Amount');
    }else{
        const transaction = {
            id: generateRandomID(),
            text: text.value,
            amount: +amount.value
        };

        transactions.push(transaction);

        addTransactionDOM(transaction);

        updateValues();

        updateLocalStorage();

        text.value = '';
        amount.value = '';
    }
}

function generateRandomID(){
    return Math.floor(Math.random() * 1000000);
}

function addTransactionDOM(transaction){
    // get sign - or +
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // add class based on pos or neg
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
        <span> <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</btn>
    `;

    list.appendChild(item);
}

// update balance, income & expenses
function updateValues(){
    // create an array of just the amounts within expense tracker
    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts  
                .filter(item => item > 0)
                .reduce((acc, item) => (acc += item), 0)
                .toFixed(2);

    const expense = (
                amounts
                .filter(item => item < 0)
                .reduce((acc, item) => (acc += item), 0) * -1)
                .toFixed(2);

    balance.innerText = `${total}`;
    money_plus.innerText = `$${income}`;
    money_minus.innerText = `$${expense}`;
}

function removeTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !== id);

    updateLocalStorage();

    init();
}

function updateLocalStorage(){
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// init app
function init(){
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
    updateValues();
}

init();

form.addEventListener('submit', addTransaction);