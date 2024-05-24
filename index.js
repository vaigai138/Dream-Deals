document.addEventListener("DOMContentLoaded", function() {
    var sidenavbar = document.querySelector(".side-navbar");

    sidenavbar.style.left="100%"

});

function shownav() {
    var sidenavbar = document.querySelector(".side-navbar");
    sidenavbar.style.left="60%"

}

function closenav() {
    var sidenavbar = document.querySelector(".side-navbar");
    sidenavbar.style.left="100%"


}



var submitbutton = document.querySelector(".submit-button")

function makealert()
{
    alert("Thanks for Contacting Us !")
}
