// ====== Expense Tracker v2 ======

// Array to store expenses locally
let expenses = [];

// Select DOM elements
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const addBtn = document.getElementById('add-btn');
const loadBtn = document.getElementById('load-btn');
const expensesList = document.getElementById('expenses-list');
const totalEl = document.getElementById('total');

// Function to render expenses
function renderExpenses() {
  expensesList.innerHTML = ''; // Clear current list
  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.className = 'expense-item';
    li.innerHTML = `
      <span>${expense.name}: $${expense.amount}</span>
      <button onclick="deleteExpense(${index})">Delete</button>
    `;
    expensesList.appendChild(li);
  });

  calculateTotal();
}

// Function to calculate total
function calculateTotal() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalEl.textContent = `Total: $${total}`;
}

// Function to add expense
function addExpense() {
  const name = expenseNameInput.value.trim();
  const amount = parseFloat(expenseAmountInput.value.trim());

  if (!name || isNaN(amount)) {
    alert('Please enter a valid name and amount.');
    return;
  }

  expenses.push({ name, amount });
  expenseNameInput.value = '';
  expenseAmountInput.value = '';

  renderExpenses();
}

// Function to delete expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

// Function to load sample expenses (simulates fetch)
async function loadSampleExpenses() {
  try {
    const response = await fetch('sample-expenses.json'); // local JSON file
    const data = await response.json();

    // Add sample expenses to our array
    expenses = [...expenses, ...data];
    renderExpenses();
  } catch (error) {
    console.error('Error loading sample expenses:', error);
  }
}

// Event listeners
addBtn.addEventListener('click', addExpense);
loadBtn.addEventListener('click', loadSampleExpenses);