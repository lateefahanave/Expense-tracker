//creating array to store all expenses
let expenses = [];

//grab the HTML elements to interact with them
const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

//adding the expense logic and btton fnction for when its clicked
addBtn.addEventListener("click", function() {
  const name = nameInput.value;
const amount = Number(amountInput.value);

if (name === "" || amount === 0) {
    alert("Please enter valid details");
    return;
}

const expense = {
    name: name,
    amount: amount
};

expenses.push(expense);

updateUI();

nameInput.value = "";
amountInput.value = "";  
});

//the ui update function
function updateUI() {

    expenseList.innerHTML = "";

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        const li = document.createElement("li");
        li.textContent = expenses[i].name + " - ₦" + expenses[i].amount;
        expenseList.appendChild(li);

        total += expenses[i].amount;
    }

    totalAmount.textContent = total;
}