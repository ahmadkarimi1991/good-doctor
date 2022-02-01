//Start of Tawk.to Script
function tawkToe() {
    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
    (function() {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/61f8f8fe9bd1f31184da5825/1fqq8p9bc';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
    const reservation = document.querySelector(".reservation");

    reservation.addEventListener("click", () => {
        window.Tawk_API.maximize();
    });
}
//End of Tawk.to Script

//Accordion
const accordionItem = document.querySelectorAll(".accordion-item");
const accordinHeading = document.querySelectorAll(".accordion-item-heading");

accordinHeading.forEach((accHead) => {
    accHead.addEventListener("click", function() {
        const itemClass = this.parentNode.className;
        accordionItem.forEach((accItem) => {
            accItem.className =
                "accordion-item block w-full mb-3 py-2 px-4 border border-gray-300 rounded-2xl close";
        });
        itemClass ==
            "accordion-item block w-full mb-3 py-2 px-4 border border-gray-300 rounded-2xl close" ?
            (this.parentNode.className =
                "accordion-item block w-full mb-3 py-2 px-4 border border-gray-300 rounded-2xl open") :
            (this.parentNode.className =
                "accordion-item block w-full mb-3 py-2 px-4 border border-gray-300 rounded-2xl close");
    });
});

//Gallery
const expandImg = document.querySelector("#expanded-img");
const officeImg = document.querySelectorAll(".office-img");
for (let i = 1; i < officeImg.length; i++) {
    officeImg[i].classList.add("opacity-70");
}
officeImg.forEach((img) => {
    img.addEventListener("click", function() {
        officeImg.forEach((item) => {
            item.classList.add("opacity-70");
        });
        const src = `${img.getAttribute("src")}`;
        img.classList.remove("opacity-70");
        expandImg.setAttribute("src", src);
    });
});

//hamburger menu
const hamburIcon = document.querySelector(".hamburger-icon");
const hamburMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".menu");
const hamburLink = document.querySelectorAll(".hamburger-links a")
const close = document.querySelector(".close-menu");
const body = document.querySelector("body");

hamburIcon.addEventListener("click", () => {
    hamburMenu.className = "hamburger-menu absolute top-0 z-20 w-screen h-screen right-0";
    menu.className = "menu bg-white absolute w-5/6 h-full transition-all pt-6 duration-1000 right-0";
    body.classList.add("locked");
});

close.addEventListener("click", () => {
    hamburMenu.className = "hamburger-menu absolute de-active top-0 z-20 w-screen h-screen delay";
    menu.className = "menu bg-white absolute de-active w-5/6 h-full transition-all pt-6 duration-1000";
    body.classList.remove("locked");
});

hamburLink.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.remove("locked");
        hamburMenu.className = "hamburger-menu absolute de-active top-0 z-20 w-screen h-screen delay";
        menu.className = "menu bg-white absolute de-active w-5/6 h-full transition-all pt-6 duration-1000";
    });
});

//Sticky navbar
const nav = document.querySelector(".fixed-nav");
const navTop = nav.offsetTop;

function fixedNav() {
    if (window.scrollY >= navTop) {
        nav.classList.add("sticky-navbar");
    } else {
        nav.classList.remove("sticky-navbar");
    }
}



window.addEventListener("scroll", fixedNav);
window.addEventListener("DOMContentLoaded", tawkToe);