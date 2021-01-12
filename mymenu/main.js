let menuStatus = false;

let toggleMenu = function() {
    let getMenu = document.querySelector(".menu");
    let getList = document.querySelector(".menu ul");
    let getNavBtn = document.querySelector(".nav-btn");

    if (menuStatus == false) {
        getMenu.style.height = "100vh";
        getList.style.visibility = "visible"
        getList.style.opacity = "1";
        getNavBtn.style.backgroundImage = ("url('img/x2.png')");
        menuStatus = true;
    }

    else if (menuStatus == true) {
        getMenu.style.height = "0";
        getList.style.opacity = "0";
        getList.style.visibility = "hidden"
        getNavBtn.style.backgroundImage = ("url('img/menu-2.png')");
        menuStatus = false;
    }
}