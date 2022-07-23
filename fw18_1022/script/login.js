import {navbar,fotter} from "/fw18_1022/components/navbar.js" 
document.getElementById("navbar").innerHTML=navbar()
document.getElementById("fotter").innerHTML=fotter()

let serachbtn=document.getElementById("bang")
serachbtn.addEventListener("click",function(){
    openserchbox()
})

let closebtn=document.getElementById("colsebtn")
closebtn.addEventListener("click",function(){
    closebox()
})

function openserchbox(){
    let mysearchbox=document.getElementById("mysearchbox")
    mysearchbox.style.display="block"
}

function closebox(){
    let mysearchbox=document.getElementById("mysearchbox")
    mysearchbox.style.display="none"
}


//Day 3 




let user=document.getElementById("loinus")
user.addEventListener("click",function(event){
    loginuser(event)
})
var arr=JSON.parse(localStorage.getItem("User"))
function loginuser(event){
    event.preventDefault()

   
   var emailid=document.getElementById("loginemail").value;
   if(arr.email!==emailid){
    window.location="/fw18_1022/signup.html"
   }
  else{
    document.getElementById("loinus").style.display="none";
    document.getElementById("displaypass").style.display="block";
    
  }
}




document.getElementById("loginpassword").addEventListener("click",function(){
    mainlogin()
})
function mainlogin(){
  
   if(arr.password!==document.getElementById('loginpass').value){
      alert("Incorect Password")
   }
   else{
    alert("Login Sucssesfull...!")
    window.location.href="/index.html"
   } 
}