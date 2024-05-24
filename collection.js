document.addEventListener('DOMContentLoaded', function() {
    var productcontainer = document.getElementById("product");
    var search = document.getElementById("search-box");

    if (productcontainer && search) {
        var productlist = productcontainer.querySelectorAll(".product-box");

        search.addEventListener("keyup", function(event) {
            var enteredtext = event.target.value.trim().toUpperCase();

            for (var i = 0; i < productlist.length; i++) {
                var productname = productlist[i].querySelector("p").textContent.toUpperCase();
                if (productname.includes(enteredtext)) {
                    productlist[i].style.display = "";
                } else {
                    productlist[i].style.display = "none";
                }
            }
        });
    }
});
