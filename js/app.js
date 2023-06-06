
// Add budget in summary

function calcBalance() {
    const currentBudget = parseInt(document.getElementById("displayBudget").innerText);
    const currentExpense = parseInt(document.getElementById("totalExpense").innerText);
    const currentBalance = document.getElementById("balanceAmount")

    currentBalance.innerText = currentBudget - currentExpense
}
function getBudget() {
    const addBudget = document.getElementById("addBudget").value;
    document.getElementById("displayBudget").innerHTML = addBudget;
    calcBalance()
}

document.getElementById("setBudgetBtn").onclick = getBudget






// Add new expense + record previous + add expense in entryTable


let arrOfTableEntries = []

function getExpense() {
    const expDate = document.getElementById("expenseDate").value
    const expType = document.getElementById("expenseType").value
    const expDesc = document.getElementById("descriptionForExpense").value
    const expAmount = +document.getElementById("expenseAmount").value
    const expenseBox = document.getElementById("totalExpense")
    const expTableEntries = document.getElementById("expTableEntries")

    expenseBox.innerText = +expenseBox.innerText + expAmount

    arrOfTableEntries.push({
        expDate,
        expType,
        expDesc,
        expAmount
    })


    expTableEntries.innerHTML += `

    <tr>
    <td>${expDate}</td>
    <td>${expType}</td>
    <td>${expDesc}</td>
    <td>${expAmount}</td>


    <td><button id="deleteEntryBtn">Delete</button></td>

    </tr>
    
    `
    calcBalance()
}

document.getElementById("addExpenseBtn").onclick = getExpense



