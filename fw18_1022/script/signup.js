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

var arr=JSON.parse(localStorage.getItem("User"))||null

function  creat_acount(event){
event.preventDefault()
let user={
    "email":document.getElementById("signupmail").value,
    "password":document.getElementById("signuppass").value,
}

localStorage.setItem("User",JSON.stringify(user))
window.location.href="/fw18_1022/login.html"
console.log(user)

}