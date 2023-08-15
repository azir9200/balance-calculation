document.getElementById('btn-withdraw').addEventListener('click', function () {

  //step 1
  const withdrawField = document.getElementById('withdraw-field');
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  //step 3
  withdrawField.value = "";

  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousDepositTotal = parseInt(previousWithdrawTotalString);

  const newWithdrawTotal = previousDepositTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;

  //step 6 
  const balanceElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //step 7
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceElement.innerText = newBalanceTotal;



  console.log(nehdrawAmount);
})