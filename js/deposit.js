//step-1 add event listener with the button
document.getElementById('btn-deposit').addEventListener('click',function(){
    //step-2 get deposit from the input field
    //don't forget to use .value
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString);

    //step-3 get current total deposit
    //for non input use innerText
    const depositTotal=document.getElementById('total-deposit');
    const previousDepositTotalAmountString=depositTotal.innerText;
    const previousDepositTotalAmount=parseFloat(previousDepositTotalAmountString);
    const currentTotalDeposit=newDepositAmount+previousDepositTotalAmount;
    depositTotal.innerText=currentTotalDeposit;

    //get total balance
    const totalBalance=document.getElementById('total-balance');
    const previousTotalBalanceString=totalBalance.innerText;
    const previousTotalBalance=parseFloat(previousTotalBalanceString);
    const currentTotalBalance=previousTotalBalance+newDepositAmount;
    totalBalance.innerText=currentTotalBalance;

    //clear input field

    depositField.value='';


})
