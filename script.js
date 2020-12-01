const loginBtn=document.getElementById("btnId");
loginBtn.addEventListener("click", function(){
   const loginArea=document.getElementById('loginArea')
   loginArea.style.display="none";
   const page2=document.getElementById('secondPage')
   page2.style.display="block";
});
