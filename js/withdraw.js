//step-1
document.getElementById('btn-withdraw').addEventListener('click',function(){
 //step-2
 const withdrawField=document.getElementById('withdraw-field');
 const newWithdrawAmountString=withdrawField.value;
 const newWithdrawAmount=parseFloat(newWithdrawAmountString);
 
 //step-3
 const totalWithdraw=document.getElementById('total-withdraw');
 const totalWithdrawAmountString=totalWithdraw.innerText;
 const totalWithdrawAmount=parseFloat(totalWithdrawAmountString);
 const currentTotalWithdraw=totalWithdrawAmount+newWithdrawAmount;
 totalWithdraw.innerText=currentTotalWithdraw;


 //step-4

   const totalBalance=document.getElementById('total-balance');
    const previousTotalBalanceString=totalBalance.innerText;
    const previousTotalBalance=parseFloat(previousTotalBalanceString);
    const currentTotalBalance=previousTotalBalance-newWithdrawAmount;
    totalBalance.innerText=currentTotalBalance;
 //step-5
 withdrawField.value='';   
})