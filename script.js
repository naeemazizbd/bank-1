//login button js code -1 

const loginBtn=document.getElementById("btnId");
loginBtn.addEventListener("click", function(){
   const loginArea=document.getElementById('loginArea')
   loginArea.style.display="none";
   const page2=document.getElementById('secondPage')
   page2.style.display="block";
});

// second page code 
const depositBtn=document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
   const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
//    const currentDeposit = document.getElementById("currentDeposit").innerText;
//    const currentDepositNumber=parseFloat(currentDeposit);
//   const totalDeposit = depositNumber + currentDepositNumber;
  
//   document.getElementById("currentDeposit").innerText = totalDeposit;

  updateSpanText("currentDeposit", depositNumber);
  
  updateSpanText("currentBalance", depositNumber);


  document.getElementById("depositAmount").value = "";


})

// withdraw amount 
const withdrawBtn=document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
   const withdrawAmount = document.getElementById("withdrawAmount").value;
    const withdrawNumber = parseFloat(withdrawAmount);
    const withDrawNumber=getInputNumber("withdrawAmount");



})

function getInputNumber()
{
   const withdrawAmount = document.getElementById("id").value;
   const withdrawNumber = parseFloat(withdrawAmount);
   return withdrawNumber;

}
function updateSpanText (id, depositNumber){

   const current=document.getElementById(id).innerText; 
  const currentNumber=parseFloat(current);
  const totalAmount= depositNumber+currentNumber;
  document.getElementById(id).innerText=totalAmount;

}