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



  updateSpanText("currentDeposit", depositNumber);
  
  updateSpanText("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";


});

// withdraw amount 
const withdrawBtn= document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
   const withdrawNumber=getInputNumber("withdrawAmount");
   updateSpanText("currentWithdraw", withdrawNumber);
   updateSpanText("currentBalance", -1* withdrawNumber);
   document.getElementById("withdrawAmount").value= "";


})
function getInputNumber(id){
   const amount=document.getElementById(id).value;
   const amountNumber=parseFloat(amount);
   return amountNumber; 
}


function updateSpanText (id, depositNumber){

   const current=document.getElementById(id).innerText; 
  const currentNumber=parseFloat(current);
  const totalAmount= depositNumber+currentNumber;
  document.getElementById(id).innerText=totalAmount;

}