function getBudget() {
    const addBudget = document.getElementById("addBudget").value;
    document.getElementById("displayBudget").innerHTML = addBudget;
}

document.getElementById("setBudgetBtn").onclick = getBudget