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


//day 3 updates:-
let creatacount=document.getElementById("create_account")
creatacount.addEventListener("click",function(event){
    creat_acount(event)
})



function  creat_acount(event){
event.preventDefault()
var arr=JSON.parse(localStorage.getItem("User"))||[]
let bag=true
for(let i=0;i<arr.length;i++){
    if(arr[i].email===document.getElementById("signupmail").value){
        bag=false;
        alert("User Alrady exist Please Login ..!")
       break;
    }
}

if(bag===true){
    let user={
        "email":document.getElementById("signupmail").value,
        "password":document.getElementById("signuppass").value,
    }
    arr.push(user)
    localStorage.setItem("User",JSON.stringify(arr))
    alert("Sign up Successful...")
    window.location.href="/fw18_1022/login.html" 
}






}