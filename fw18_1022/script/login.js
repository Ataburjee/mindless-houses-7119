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

function loginuser(event){
   event.preventDefault()
   let arr=JSON.parse(localStorage.getItem("User"))||[]
   if(arr.length==0){
    window.location.href="/fw18_1022/signup.html"
   }
   else{
    let bag=false
    for(let i=0;i<arr.length;i++){
     if(arr[i].email===document.getElementById("loginemail").value){
         bag=true;
         break;
     }
    }
     if(bag){
         document.getElementById("loinus").style.display="none";
         document.getElementById("displaypass").style.display="block";
     }
     else{
     window.location.href="/fw18_1022/signup.html"
     }
   }
   
}










document.getElementById("loginpassword").addEventListener("click",function(){
    mainlogin()
})
function mainlogin(){
    
    let arr=JSON.parse(localStorage.getItem("User"))||[]
    let bag=false
    for(let i=0;i<arr.length;i++){
       if(arr[i].email===document.getElementById("loginemail").value && arr[i].password===document.getElementById("loginpass").value){
       bag=true;
       break;
       }
       
    }
   

   if(bag===true){
    alert("Login Sucssesfull...!")
    window.location.href="/index.html"
   }
   else{
    alert("Incorect Password")
   }
  
}

document.getElementById("not").addEventListener("click",function(){
   notemail()
})

function notemail(){

    window.location.href="/fw18_1022/signup.html"


}