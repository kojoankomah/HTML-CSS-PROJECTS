// SCRIPT FOR MENU ICON

var menuItems = document.getElementById("menuitems");

menuItems.style.maxHeight = "0px";

function menutoggle(){
    if(menuItems.style.maxHeight == "0px")
        {
            menuItems.style.maxHeight = "200px"
    }
    else
    {
        menuItems.style.maxHeight = "0px"
    }

}


// SCTIPT FOR PRODUCT GALLERY


var ProductImg = document.getElementById("productImg");
var SmallImg = document.getElementsByClassName("small-img");


for(let i=0; i < SmallImg.length; i ++)
{
    SmallImg[i].onclick = function(){
    ProductImg.src = SmallImg[i].src;
    };
}


function goToPage(){
    window.location.href = "product-detail.html"
}