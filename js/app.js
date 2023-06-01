function getBudget() {
    const addBudget = document.getElementById("addBudget").value;
    document.getElementById("displayBudget").innerHTML = addBudget;
}

document.getElementById("setBudgetBtn").onclick = getBudget


function getExpense() {
    const addExpense = document.getElementById("expenseAmount").value;
    document.getElementById("totalExpense").innerHTML = getExpense;
}

document.getElementById("addExpenseBtn").onclick = getExpense