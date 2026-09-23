const menuButton = document.querySelector(".menu-toggle");

const navigation = document.querySelector(".nav-links");


if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("open");

    });

}