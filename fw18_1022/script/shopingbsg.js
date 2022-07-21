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


var arr=[]
let my_shopingbag=document.getElementById("bogbody")
//if(arr.length===0){
//    my_shopingbag.innerHTML=`<div id="emptybag"> 
//    <div id="em_heading"><p>SHOPPING BAG</p> </div>
//    <div id="em_alert"><p>Your shopping bag is empty</p></div>
//    < id="em_pagedirectors">
//        <button><a href="">SHOP MENSWERE </a></button>
//        <button><a href="">SHOP WOMENSWEAR</a></button>
//        <button><a href="">SHOP EVERYTHING ELSE</a></button><///div>
//   </div>`
//}