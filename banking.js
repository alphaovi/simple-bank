// deposit 

document.getElementById("deposit-button").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");

    const currentDepositAmountText = depositInput.value;
    const currentDepositAmount = parseFloat(currentDepositAmountText);
    
    const depositTotal = document.getElementById("deposit-total");

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText)

    const updateDepositAmount = previousDepositAmount + currentDepositAmount; 

    depositTotal.innerText = updateDepositAmount;

    // update Account Balance

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const updateBalanceTotal = previousBalanceTotal + currentDepositAmount;

    balanceTotal.innerText = updateBalanceTotal;    

    

    depositInput.value = '';

});

// deposit Withdraw

document.getElementById("withdraw-button").addEventListener("click",function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputText = withdrawInput.value;
    const currentWithdrawAmount = parseFloat(withdrawInputText); 
    
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);

    const updateWithdrawAmount = previousWithdrawAmount + currentWithdrawAmount;

    withdrawTotal.innerText = updateWithdrawAmount;

    // update balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);

    const updateBalanceAmount = previousBalanceAmount - currentWithdrawAmount;

    balanceTotal.innerText = updateBalanceAmount;

    withdrawInput.value = "" ;
})