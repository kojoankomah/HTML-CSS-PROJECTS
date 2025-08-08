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


// SCRIPT FOR TOGGLE FORM

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");

var Indicator = document.getElementById("indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";

}

function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";

}