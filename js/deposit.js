document.getElementById('btn-deposit').addEventListener('click', function () {
  //
  const depositfield = document.getElementById('deposit-field');
  const newDepositAmountString = depositfield.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //step 3
  depositfield.value = "";

  //step  4 
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);


  //step 5 
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  //step 6
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

  //step 7
  const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
  balanceTotalElement.innerText = newBalanceTotal;
})