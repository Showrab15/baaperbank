// step-1: add event handler with the withdraw button

document.getElementById('btn-withdraw').addEventListener('click', function(){

// step-2: get the withdraw amount  from the withdraw input field
// 2.5 also remember to convert the input filed text string to a number by using parseFloat

const withdrawField  = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);



// step-7 for clear the deposit field
withdrawField.value = ' ';

// step for give a alert if user do to enter a number 

if(isNaN(newWithdrawAmount)){
    alert('please enter a amount with the number');
    return;
}

// step-3: get the previous total
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);




// step-5: get the previous balance total
const balanceTotalElement = document.getElementById('total-balance');
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


if(newWithdrawAmount > previousBalanceTotal){
    alert('Baaap er bank e eto taka nai');
    return;
}


// step-4:calculate total withdraw amount
const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

// step-4.5: set the total withdraw total amount 
withdrawTotalElement.innerText = currentWithdrawTotal;

// step-6: calculate new balance total
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

// step-6.5: set the new balance  total amount 
balanceTotalElement.innerText = newBalanceTotal;

})