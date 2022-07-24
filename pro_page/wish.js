




let arr=JSON.parse(localStorage.getItem("Wishlist"))



if(arr.length===0){
    document.getElementById("wmptywish").innerHTML=`<div id="wmhead"><p>Your wishlist is empty</p></div>
    <div id="wmpagedirect">
        <div><a href="/mensAll/mensA.html">SHOP MENSWERE</a></div>
        <div><a href="/productpages/womens.html">SHOP WOMENWERE</a></div>
        <div><a href="/productpages/accessories.html">SHOP EVERYTHING ELSE</a></div>
    </div>`
}
else{
    document.getElementById("wmptywish").innerHTML=` <div id="wishcontener"></div>`
    appendData(arr)
    function appendData(){

        let container=document.getElementById("wishcontener")
        arr.forEach((el,index)=>{
        let box=document.createElement("div")
        
        let img=document.createElement("img")
        img.src=el.image;
        let title=document.createElement("h5")
        title.innerText=el.name;
        let detail=document.createElement("p")
        detail.innerText=el.brand
        let price=document.createElement("p")
        price.innerText="$"+el.price
        let addtobag=document.createElement("button")
        addtobag.innerText="ADD TO BAG"
        addtobag.addEventListener("click",function(){
            adtobag(index)
        })
        addtobag.setAttribute("class","addtobagwish")
        let remove=document.createElement("button")
        remove.innerText="REMOVE"
        remove.addEventListener("click",function(){
            removeprod(index)
        })
        remove.setAttribute("class","removebtn")
        box.append(img,title,detail,price,addtobag,remove)
        container.append(box)
        
        })
        }


        
        
}


function  removeprod(index){
    let xy=JSON.parse(localStorage.getItem("Wishlist")) || [];

    let newData=xy.filter(function(ele,i){
        if(i===index)
        {
            let trash=JSON.parse(localStorage.getItem("trash")) || []
            trash.push(ele)
            localStorage.setItem("trash",JSON.stringify(trash))
        }
        else{
            return i!== index;
        }
        window.location.reload();
    });
    localStorage.setItem("Wishlist",JSON.stringify(newData));
    appendData();
}

let  adtobag=(el,index)=>{
    let bag= JSON.parse(localStorage.getItem("Atabur")) || []
    bag.push(el)
    localStorage.setItem("Atabur",JSON.stringify(bag))

alert("Added to ShopinBag")

}