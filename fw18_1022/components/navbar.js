function navbar(){
    return `<div id="inernav">
    <div id="pagelinks">
        <a href="">MENSWEAR</a>
        <a href="">WOMENSWEAR</a>
        <a href="">EVERYTHING ELSE</a>
        <a href="">SALE</a>
        <button class="serchbutton" id="bang">SEARCH</button>
         <!--search box-->
          <div id="mysearchbox" class="modal">
            <div id="sertop">
            <a href="">MENSWEAR</a>
            <a href="">WOMENSWEAR</a>
            <a href="">EVERYTHING ELSE</a>
          </div>

            <div id="serchmid"><input type="text" placeholder="Search">
                <button id="searchicon"><span class="material-symbols-outlined">
                    search
                    </span></button>
                <button id="colsebtn" >CLOSE</button>
            </div>

            <div id="searchbottom">
                <input type="checkbox"><p>SALE ONLY</p>
            </div>

          </div>
        </div>
     <div id="main_logo"><a href="">SSENSE</a></div>
    <div id="other_nav_vontent">
        <a href="">ENGLISH</a>
        <a href="">LOGIN</a>
        <a href="">WHISHLIST</a>
        <a href="">SHOPINGBAG</a>
    </div>
</div>`;
}
function fotter(){
    return `<div id="innerfotter">
    <div id="aboutcompny">
        <a  href="">COUNTRY/REGION: UNITED STATES</a>
        <a href="">NEWSLETTER SIGNUP</a>
        <a href="">CUSTOMER CARE</a>
        <a href="">LOCATION</a>
        <a href="">EDITORIAL ARCHIVE</a>
        <a href="">CAREERS</a>
        <a href="">AFFILIATES</a>
        <a href="">SITMAP</a>
        <div id="soical-media-icons"><i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-youtube"></i></div>
    </div>
    <div>
  
    </div>
    <div id="fotterbotom">
      <a href="">@ 2022 ssense.com</a>
      <a href="">Terms & Conditions </a>
      <a href="">Privacy Policy</a>
      <a href="">Cookies</a>
      <a href="">Accessibility</a>
    </div>`
}

export {navbar,fotter}