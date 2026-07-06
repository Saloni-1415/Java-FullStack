let expenses = [];

const incomeInput = document.getElementById("income");
const totalIncome = document.getElementById("totalIncome");
const totalExpense = document.getElementById("totalExpense");
const balance = document.getElementById("balance");
const nextMonthBalance = document.getElementById("nextMonthBalance");

const expenseForm = document.getElementById("expenseForm");
const expenseTableBody = document.getElementById("expenseTableBody");
const noExpenseMessage = document.getElementById("noExpenseMessage");

let income = 0;

incomeInput.addEventListener("input", function () {
    income = Number(incomeInput.value) || 0;

    totalIncome.textContent = `₹${income}`;

    updateSummary();
});

expenseForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("expenseName").value;
    const type = document.getElementById("expenseType").value;
    const amount = Number(document.getElementById("amount").value);
    const date = document.getElementById("date").value;

    const expense = {
        id: Date.now(),
        name,
        type,
        amount,
        date
    };

    expenses.push(expense);

    displayExpenses();
    updateSummary();
    updateCategorySummary();

    expenseForm.reset();
});

function displayExpenses() {

    expenseTableBody.innerHTML = "";

    if (expenses.length === 0) {
        noExpenseMessage.style.display = "block";
    } else {
        noExpenseMessage.style.display = "none";
    }

    expenses.forEach(expense => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${expense.name}</td>
            <td>${expense.type}</td>
            <td>₹${expense.amount}</td>
            <td>${expense.date}</td>
            <td>
                <button onclick="deleteExpense(${expense.id})">
                    Delete
                </button>
            </td>
        `;

        expenseTableBody.appendChild(row);
    });
}

function deleteExpense(id) {

    expenses = expenses.filter(expense => expense.id !== id);

    displayExpenses();
    updateSummary();
    updateCategorySummary();
}

function updateSummary() {

    const expenseTotal = expenses.reduce(
        (sum, expense) => sum + expense.amount,
        0
    );

    const remainingBalance = income - expenseTotal;

    totalExpense.textContent = `₹${expenseTotal}`;
    balance.textContent = `₹${remainingBalance}`;
    nextMonthBalance.textContent = `₹${remainingBalance}`;
}

function updateCategorySummary() {

    const categories = [
        "Food",
        "Travel",
        "Shopping",
        "Bills",
        "Entertainment",
        "Other"
    ];

    categories.forEach(category => {

        const categoryExpenses = expenses.filter(
            expense => expense.type === category
        );

        const amount = categoryExpenses.reduce(
            (sum, expense) => sum + expense.amount,
            0
        );

        const count = categoryExpenses.length;

        document.getElementById(
            `${category.toLowerCase()}Amount`
        ).textContent = amount;

        document.getElementById(
            `${category.toLowerCase()}Count`
        ).textContent = count;
    });
}

displayExpenses();
updateSummary();
updateCategorySummary();