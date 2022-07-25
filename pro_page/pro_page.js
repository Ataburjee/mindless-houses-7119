function append(){

var data = JSON.parse(localStorage.getItem("pro_data"))
let arr=[];
arr.push(data)
// console.log(arr)



arr.forEach((el,index)=>{
    let img=document.createElement("img");
    img.src=el.image;
    document.querySelector("#pro_mid").append(img)
    
    let h3=document.createElement("h3");
    h3.innerText=el.name;
    document.querySelector("#pro_left h3").append(h3)
    
    let h4=document.createElement("h4");
    h4.innerText="Price $"+ " "+ el.price;
    document.querySelector("#pro_right h4").append(h4)
     
    let y=document.querySelector("#add_to_wishlist");
    y.addEventListener("click",function(){
        addwishlist(el,index)
    })
    let Z=document.querySelector("#add_to_bag");
    Z.addEventListener("click",function(){
        adtobag(el,index)
    })

})

}
append();


var present=false;
          

let addwishlist = (el) => {
    present=!present
    
   
    if(present)
    {
      console.log("add")
      addToWish(el);
    }
    else{
      console.log("delete")
      deleteProduct()
    }
    
}
let WISH=document.querySelector("#add_to_wishlist");


let addToWish=(el)=>{
    let y= JSON.parse(localStorage.getItem("Wishlist")) || []
    y.push(el)
    localStorage.setItem("Wishlist",JSON.stringify(y))
console.log(y)
alert("Added to Whishlist")

WISH.innerText = "IN WISHLIST"
WISH.style.backgroundColor = "green"
WISH.style.height = "37px"
WISH.style.padding = "15px"
}

let  adtobag=(el,index)=>{
    let bag= JSON.parse(localStorage.getItem("Atabur")) || []
    bag.push(el)
    localStorage.setItem("Atabur",JSON.stringify(bag))

alert("Added to ShopinBag")

}




let deleteProduct=()=>{
    let data = JSON.parse(localStorage.getItem("pro_data"))

    let Z= JSON.parse(localStorage.getItem("Atabur")) ||[];
    let newData=Z.filter(function(el,i){
       if(data.image!==el.image || data.name!==el.name || data.price!==el.price)
        {
            return el;
        }

    });
    localStorage.setItem("Atabur",JSON.stringify(newData));
   alert("Remove from whishlist")
   WISH.innerText = "ADD TO WISHLIST"
   WISH.style.backgroundColor = "white"
}

