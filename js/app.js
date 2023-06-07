
// Add budget in summary
const expDateInput = document.getElementById("expenseDate")
    const expTypeInput = document.getElementById("expenseType")
    const expDescInput = document.getElementById("descriptionForExpense")
    const expAmountInput = document.getElementById("expenseAmount");

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
    const expDate=expDateInput.value;
    const expType=expTypeInput.value;
    const expDesc=expDescInput.value;
    const expAmount=+expAmountInput.value;
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



