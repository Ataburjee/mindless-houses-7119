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



var userarr=JSON.parse(localStorage.getItem("User"))||null;


if(!userarr){

    document.getElementById("bogbody").innerHTML=`<div id="emptybag"> 
    <div id="em_heading"><p>SHOPPING BAG</p> </div>
    <div id="em_alert"><p>Your shopping bag is empty</p></div>
    <div id="em_pagedirectors">
        <button><a href="">SHOP MENSWERE </a></button>
        <button><a href="">SHOP WOMENSWEAR</a></button>
       <button><a href="">SHOP EVERYTHING ELSE</a></button></div>
   </div>`
}




let arr=JSON.parse(localStorage.getItem("Atabur")) || [];



let my_shopingbag=document.getElementById("bogbody")
if(arr.length===0){
    my_shopingbag.innerHTML=`<div id="emptybag"> 
    <div id="em_heading"><p>SHOPPING BAG</p> </div>
    <div id="em_alert"><p>Your shopping bag is empty</p></div>
    <div id="em_pagedirectors">
        <button><a href="/mensAll/mensA.html">SHOP MENSWERE </a></button>
        <button><a href="/productpages/womens.html">SHOP WOMENSWEAR</a></button>
       <button><a href="/productpages/accessories.html">SHOP EVERYTHING ELSE</a></button></div>
   </div>`
}
else{
    my_shopingbag.innerHTML=`<div id="main_body_bag">
    <!---ALl Bag Items and there deatails with Total amount-->
    <div id="bagproducts_deatels">
       <div id="spbhead"><p class="h11">SHOPPING BAG</p></div>
    <div id="spbheadtitle">
        <div id="itme"><p class="h12">ITEM</p></div>
        <div id="total"><p class="h12">TOTAL</p></div>
    </div>
    <div id="container0">

    </div>
    <div id="totalOf_bag">
     <div id="tbsubh">
     <p class="to1">Total</p>
     <p class="to2">Shiping estimate</p>
     <p class="to3">Order Total</p>
     </div>
     <div id="tbsubh01">
        <p class="to11">Total</p>
     <p class="to22"> calculate at Checkout</p>
     <p class="to33">Order Total</p>
     </div>
    
    </div>
    <div id="popularItm">
        <div><p class="h11">ADD THESE POPULAR ITEMS</p>
        
        <div id="ppcontainer"></div></div>
    </div>
    </div>



    <!---Procide To Checkout button-->
    <div id="proiead_to_checkoutpage">
       <div id="ptcphead"><p class="h11">LOGGEND IN AS</p></div>
       <div id="ptcpemailadd">
        <p class="h11" id="user_bag_mail">apsundeharshal@gmail.com</p>
        <p class="h12">Not your account? <a class="h12" href="">Sign in as another user</a></p>
       </div>
       <button id="procied_to_checoutbtn"> PROCEED TO CHECKOUT</button>
    </div>
</div>`

let omm=document.getElementById("procied_to_checoutbtn")
omm.addEventListener("click",function(){
    protochekout()
})
function protochekout(){
    window.location.href="/fw18_1022/payment.html"
}




let containerbag=document.getElementById("container0")
let bag=["FR","TR","SM","FH"]
arr.forEach((el,index)=>{
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
 title.innerText=el.brand;
 let details=document.createElement("p")
 details.innerText=el.name
 let size=document.createElement('p')

 size.innerText="SIZE"+":"+" "+bag[Math.floor(Math.random()*bag.length)]
 let h4=document.createElement('h5')
h4.innerText="Move To Watchlist"


 descdiv1.append(title,details,size,h4)
 let descdic2=document.createElement("div")
let price=document.createElement("h2")
price.innerText="$"+el.price+" "+"USD"
let remove=document.createElement("h4")
remove.innerText="remove"
remove.addEventListener("click",function(){
    removeprod(index)
})
descdic2.append(price,remove)
 descdic2.setAttribute("id","descdiv2")

descdiv.append(descdiv1,descdic2)
 box.append(imgdiv,descdiv)
 containerbag.append(box)

})

function  removeprod(index){
    let xy=JSON.parse(localStorage.getItem("Atabur")) || [];

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
    localStorage.setItem("Atabur",JSON.stringify(newData));
    appendData();
}


let accData = [
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222483F001005_1/alaia-black-vivienne-bustier-belt.jpg",
        title: "ALAIA",
        detail: "Black Belt",
        price: "1106",
        prodID: 1
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451F015001_1/gucci-beige-raffia-effect-gg-bucket-hat.jpg",
        title: "GUCCI",
        detail: "Bucket Hat",
        price: "270",
        prodID: 2
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451F017000_1/gucci-green-mx-wide-brim-double-g-fedora.jpg",
        title: "GUCCI",
        detail: "Cowboy Hat",
        price: "500",
        prodID: 3
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222129F010001_1/acne-studios-purple-baby-necklace.jpg",
        title: "ACNE STUDIOS",
        detail: "Purple Necklace",
        price: "450",
        prodID: 4
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222967F016001_1/heron-preston-green-logo-cap.jpg",
        title: "HERON",
        detail: "Green Logo Cap",
        price: "270",
        prodID: 5
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222941F016000_1/pleats-please-issey-miyake-black-pleats-cap.jpg",
        title: "Mast & Harbour",
        detail: "Black Pleated Cap",
        price: "450",
        prodID: 6
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222188F023002_1/mm6-maison-margiela-white-grommet-mm6-choker.jpg",
        title: "GUCCI",
        detail: "White Choker",
        price: "150",
        prodID: 7
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222942F022014_1/sophie-buhai-gold-small-rope-hoop-earrings.jpg",
        title: "BLA BLA",
        detail: "Golden Hoop Earrings",
        price: "230",
        prodID: 8
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222942F024006_1/sophie-buhai-gold-consigliere-ring.jpg",
        title: "Bla Bla",
        detail: "Golden Ring",
        price: "400",
        prodID: 9
    },

    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222942F024008_1/sophie-buhai-silver-small-consigliere-ring.jpg",
        title: "BLA BLA",
        detail: "Silver Ring",
        price: "400",
        prodID: 11
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222942F022015_1/sophie-buhai-silver-small-rope-hoop-earrings.jpg",
        title: "BLA BLA",
        detail: "Silver Earrings",
        price: "230",
        prodID: 12
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221807F005012_1/valentino-garavani-tortoiseshell-round-glasses.jpg",
        title: "VALENTINO",
        detail: "Cateyes Sunglasses",
        price: "300",
        prodID: 13
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222677F005000_1/loewe-pink-and-white-paulas-ibiza-original-sunglasses.jpg",
        title: "VALENTINO",
        detail: "Framed Glasses",
        price: "500",
        prodID: 14
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222404F018005_1/versace-black-space-headband.jpg",
        title: "VERSACE",
        detail: "Dotted Headband",
        price: "100",
        prodID: 15
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222142F014001_1/zegna-navy-oasi-beanie.jpg",
        title: "ZENGA",
        detail: "Beanie Blue",
        price: "130",
        prodID: 16
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222142F014002_1/zegna-brown-oasi-beanie.jpg",
        title: "ZENGA",
        detail: "Beanie Brown",
        price: "130",
        prodID: 17
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221831F016001_1/stray-rats-pink-college-arch-cap.jpg",
        title: "ZENGA",
        detail: "College Cap Pink",
        price: "70",
        prodID: 18
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222338F023001_1/chloe-navy-jemma-necklace.jpg",
        title: "CHLOE",
        detail: "Necklace",
        price: "140",
        prodID: 19
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222190F023002_1/marc-jacobs-green-the-marbled-medallion-pendant-necklace.jpg",
        title: "JIMMY CHOO",
        detail: "Pendant Necklace",
        price: "200",
        prodID: 21
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222190F023002_1/marc-jacobs-green-the-marbled-medallion-pendant-necklace.jpg",
        title: "JIMMY CHOO",
        detail: "Pendant Necklace Floral",
        price: "300",
        prodID: 22
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221415F023009_1/amina-muaddi-green-lily-choker.jpg",
        title: "AMINA",
        detail: "Green Lilly Choker",
        price: "200",
        prodID: 23
    },

    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221415F023008_1/amina-muaddi-silver-lily-choker.jpg",
        title: "AMINA",
        detail: "Silver Choker",
        price: "180",
        prodID: 24
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222137F024000_1/alighieri-gold-the-stelle-ring.jpg",
        title: "ALIGHERI",
        detail: "Gold Ring",
        price: "500",
        prodID: 25
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222137F020000_1/alighieri-gold-the-starry-night-amulet-bracelet.jpg",
        title: "ALIGHERI",
        detail: "Golden Bracelet",
        price: "100",
        prodID: 26
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222404F022000_1/versace-gold-crystal-medusa-greca-earrings.jpg",
        title: "VERSACE",
        detail: "Golden Watch",
        price: "930",
        prodID: 27
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222404F022001_1/versace-gold-medusa-greca-hoops.jpg",
        title: "VERSACE",
        detail: "Medusa Hoops",
        price: "800",
        prodID: 28
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222404F022010_1/versace-gold-small-greca-hoops.jpg",
        title: "VERSACE",
        detail: "Golden Hoops",
        price: "995",
        prodID: 29
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451F038006_1/gucci-black-gg-marmont-coin-pouch.jpg",
        title: "GUCCI",
        detail: "Coin Pouch",
        price: "400",
        prodID: 31
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451F038007_1/gucci-red-gg-marmont-coin-pouch.jpg",
        title: "GUCCI",
        detail: "Coin Pouch",
        price: "400",
        prodID: 32
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222338F040005_1/chloe-burgundy-alphabet-wallet.jpg",
        title: "CHLOE",
        detail: "Alpha Wallet",
        price: "700",
        prodID: 33
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222338F040016_1/chloe-blue-linda-wallet.jpg",
        title: "CHLOE",
        detail: "Alpha Wallet",
        price: "665",
        prodID: 34
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222338F040024_1/chloe-black-long-malou-wallet.jpg",
        title: "CHLOE",
        detail: "Long MAlou Wallet",
        price: "230",
        prodID: 35
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222379F040012_1/marni-green-and-brown-leather-bifold-wallet.jpg",
        title: "MARNI",
        detail: "Olive Wallet",
        price: "400",
        prodID: 36
    },

    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222373F040005_1/see-by-chloe-beige-hana-compact-wallet.jpg",
        title: "MARNI",
        detail: "Peach Wallet",
        price: "100",
        prodID: 37
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222471F004003_1/stella-mccartney-black-oval-glasses.jpg",
        title: "ARMANI",
        detail: "Cateyes Sunglasses",
        price: "200",
        prodID: 38
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222471F005003_1/stella-mccartney-black-butterfly-sunglasses.jpg",
        title: "ARMANI",
        detail: "Cateyes Sunglasses",
        price: "230",
        prodID: 39
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222471F005021_1/stella-mccartney-black-square-cat-eye-sunglasses.jpg",
        title: "ARMANI",
        detail: "Black Eyes Glasses",
        price: "660",
        prodID: 41
    },
    {
        image: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/celia/celia300881c3c8/celia300881c3c8_1648489949874_2-0._SH20_QL90_UY365_.jpg",
        title: "Apiece Apart",
        detail: "Malibu Faux Wrap Midi Dress",
        price: "413.00",
        prodID: 64
    },
    {
        image: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/wayfa/wayfa2039113149/wayfa2039113149_q1_2-0._SH20_QL90_UY365_.jpg",
        title: "CELIAB",
        detail: "Aurie Dress",
        price: "371.00",
        prodID: 65
    },
    {
        image: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/wayfa/wayfa2050912424/wayfa2050912424_1649956616919_2-0._SH20_QL90_UY365_.jpg",
        title: "CULT GAIA",
        detail: "Bjorn Dress",
        price: "388.00",
        prodID: 66
    },
    {
        image: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/wayfa/wayfa205071d034/wayfa205071d034_1645565347341_2-0._SH20_QL90_UY365_.jpg",
        title: "byTiMo",
        detail: "Shoshanah Smocked Sundress",
        price: "1909",
        prodID: 67
    },
    {
        image: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/wayfa/wayfa2047412466/wayfa2047412466_1633121844836_2-0._SH20_QL90_UY365_.jpg",
        title: "XIRENA",
        detail: "Gaya Dress",
        price: "198.00",
        prodID: 68
    },
    {
        image: "https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/rhode/rhode303391d3cd/rhode303391d3cd_1651071952963_2-0._UX357_QL90_.jpg",
        title: "CELIAB",
        detail: "Aurie Dress",
        price: "283.00",
        prodID: 69
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222483F103001_1/alaia-brown-corset-one-piece-swimsuit.jpg",
        title: "GUCCI",
        detail: "Swim Suit",
        price: "320",
        prodID: 71,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221783F111013_1/courreges-black-criss-cross-bra.jpg",
        title: "VERSACE",
        detail: "Patta Dress",
        price: "700",
        prodID: 72,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221933F111000_1/tove-black-etta-camisole.jpg",
        title: "TOVE",
        detail: "Black Camisole",
        price: "700",
        prodID: 73,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222471F119001_1/stella-mccartney-black-platform-gaia-espadrilles.jpg",
        title: "ARMANI HEELS",
        detail: "Heels",
        price: "850",
        prodID: 74,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222003F128024_1/dolce-and-gabbana-white-portofino-sneakers.jpg",
        title: "DOLCE & GABANNA",
        detail: "Multi colored shoes",
        price: "307",
        prodID: 75,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222264F128026_1/golden-goose-white-super-star-sabot-sneakers.jpg",
        title: "Golder Goose",
        detail: "White Converse",
        price: "450",
        prodID: 76,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222264F127006_1/golden-goose-ssense-exclusive-black-and-gold-slide-sneakers.jpg",
        title: "Golden Goose",
        detail: "Converse Shoes",
        price: "776",
        prodID: 77,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222653F121011_1/versace-underwear-purple-medusa-slippers.jpg",
        title: "VERSACE",
        detail: "Purple Slipper",
        price: "270",
        prodID: 78,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222653F121010_1/versace-underwear-pink-medusa-slippers.jpg",
        title: "VERSACE",
        detail: "Pink SLippers",
        price: "300",
        prodID: 79,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222528F124007_1/jimmy-choo-tan-pine-flat-sandals.jpg",
        title: "JIMMY CHOO",
        detail: "Printed Shoes",
        price: "450",
        prodID: 81,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222259F048002_1/alexander-mcqueen-white-mini-jewelled-satchel.jpg",
        title: "EXCHANGE",
        detail: "Alexander Bag",
        price: "500",
        prodID: 82,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222259F048026_1/alexander-mcqueen-black-micro-jewelled-satchel.jpg",
        title: "ALEXANDER",
        detail: "McQueen",
        price: "300",
        prodID: 83,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222342F048025_1/balenciaga-brown-xs-le-cagole-shoulder-bag.jpg",
        title: "ARMANI",
        detail: "Sling Bag",
        price: "600",
        prodID: 84,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222129F049009_1/acne-studios-black-micro-leather-top-handle-bag.jpg",
        title: "ACNE STUDIOS",
        detail: "Brown Mini Knot Bag",
        price: "450",
        prodID: 85,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222129F049007_1/acne-studios-black-papery-nylon-tote.jpg",
        title: "ACNE STUDIOS",
        detail: "Black Tone",
        price: "290",
        prodID: 86,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222129F049003_1/acne-studios-white-shiny-tote.jpg",
        title: "ACNE STUDIOS",
        detail: "White Shiny Tone",
        price: "800",
        prodID: 87,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222187F110001_1/alexander-wang-white-cotton-t-shirt.jpg",
        title: "MAx",
        detail: "White Cotton tshirt",
        price: "835",
        prodID: 88,
    },
    {
        image: "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/222451F016003_1/gucci-beige-raffia-effect-gg-cap.jpg",
        title: "GUCCI",
        detail: "Beige Raffia Effect GG Cap",
        price: "565",
        prodID: 89,
    },
]


function getMultipleRandom(arr,num){
    const shuffled=[...arr].sort(()=>.5-Math.random())

    return shuffled.slice(0,num)
}

let popularprod=(getMultipleRandom(accData,7))
//console.log(popularprod)
let popubox=document.getElementById("ppcontainer")

popularprod.forEach((el)=>{
let box=document.createElement("div")

let img=document.createElement("img")
img.src=el.image;
let title=document.createElement("h3")
title.innerText=el.title;
let deatail=document.createElement("p")
deatail.innerText=el.detail;
let price=document.createElement("p")
price.innerText="$"+el.price;
let btn=document.createElement("h4")
btn.innerText="ADD TO BAG"
btn.addEventListener("click",function(){
    addtocart(el)
})
box.append(img,title,deatail,price,btn)
popubox.append(box)
})
function addtocart(el){
  arr.push(el)
  console.log(arr)
}
}

 

