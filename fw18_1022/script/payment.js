let arr=JSON.parse(localStorage.getItem("Atabur")) || [];

let totalitem=document.getElementById("totalitems")
totalitem.innerText="ORDER SUMMARY"+"-"+"("+arr.length+")"+" "+"ITEM"

let sum=0
for(let i=0;i<arr.length;i++){
sum+=(+arr[i].price)
}
document.getElementById("tt2").innerText="$"+sum
document.getElementById("mttotalamut").innerText="$"+(sum+((sum/100)*18))



let containerbag=document.getElementById("productcontainer")
let bag=["FR","TR","SM","FH"]
arr.forEach((el)=>{
 let box=document.createElement("div")
 box.setAttribute("id","bagbox")

 let imgdiv=document.createElement("div")
  imgdiv.setAttribute("id","imgdiv")
 let image=document.createElement("img")
 image.src=el.image
 imgdiv.append(image)


 let descdiv=document.createElement("div")
 descdiv.setAttribute("id","descdiv")

 let descdiv1=document.createElement("div")
 descdiv1.setAttribute("id","descdiv1")
 let title=document.createElement("h2")
 title.innerText=el.title;
 let details=document.createElement("p")
 details.innerText=el.detail
 let size=document.createElement('p')

 size.innerText="SIZE"+":"+" "+bag[Math.floor(Math.random()*bag.length)]



 descdiv1.append(title,details,size)
 let descdic2=document.createElement("div")
let price=document.createElement("h2")
price.innerText="$"+el.price+" "+"USD"

descdic2.append(price)
 descdic2.setAttribute("id","descdiv2")

descdiv.append(descdiv1,descdic2)
 box.append(imgdiv,descdiv)
 containerbag.append(box)

})
document.getElementById("paceorder").addEventListener("click",function(){
    myfun()
})


let myfun=()=>{
    alert("Your Order is sucsessfully complited  ")
    window.location="/index.html"
}