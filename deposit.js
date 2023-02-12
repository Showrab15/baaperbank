// where we need to click event handler will use there

// step-1 add event listener to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function(){

// step-2: get the deposit amount  from the deposit input field
// for input filed use .value to the get the value from inside input filed
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value ;
const newDepositAmount =parseFloat(newDepositAmountString)


// step-7 for clear the deposit field
depositField.value = ' ';
// step for give a alert if user do to enter a number 
if(isNaN(newDepositAmount)){
    alert('please enter a amount with the number');
    return;
}

// step-3: get the current deposit  total
// for non-input(element other than input, textarea) we will use innerText to get value 
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositAmountString = depositTotalElement.innerText;
const previousDepositAmount = parseFloat(previousDepositAmountString)

// step-4 add numbers to set total deposit amount
const currentDepositTotal = previousDepositAmount + newDepositAmount;
// set the deposit total
depositTotalElement.innerText = currentDepositTotal;

// step-5: get balance current total
const balanceTotalElement = document.getElementById('total-balance');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString)


// // step-6: calculate current total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount

// // set the current total balance
balanceTotalElement.innerText = currentBalanceTotal;




})