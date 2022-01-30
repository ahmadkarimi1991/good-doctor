//Start of Tawk.to Script
var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
(function() {
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/61e82011b84f7301d32bd9ed/1fppbqim8";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
})();
//End of Tawk.to Script

//Accordion
const accordionItem = document.querySelectorAll(".accordion-item");
const accordinHeading = document.querySelectorAll(".accordion-item-heading");
// const accordionContent = document.querySelectorAll(".accordion-item-content");
// for (let i = 0; i < accordinHeading.length; i++){
//     accordinHeading[i].addEventListener("click", function() {

//     });
// }
accordinHeading.forEach((accHead) => {
    accHead.addEventListener("click", function() {
        const itemClass = this.parentNode.className;
        accordionItem.forEach((accItem) => {
            accItem.className =
                "accordion-item block w-full mb-3 p-2 border border-gray-400 rounded close";
        });
        itemClass ==
            "accordion-item block w-full mb-3 p-2 border border-gray-400 rounded close" ?
            (this.parentNode.className =
                "accordion-item block w-full mb-3 p-2 border border-gray-400 rounded open") :
            (this.parentNode.className =
                "accordion-item block w-full mb-3 p-2 border border-gray-400 rounded close");
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

hamburIcon.addEventListener("click", () => {
    hamburMenu.className = "hamburger-menu absolute top-0 z-20 w-screen h-screen right-0";
    menu.className = "menu bg-white absolute w-5/6 h-full transition-all duration-1000 right-0";
});

close.addEventListener("click", () => {
    hamburMenu.className = "hamburger-menu absolute de-active top-0 z-20 w-screen h-screen delay-500";
    menu.className = "menu bg-white absolute de-active w-5/6 h-full transition-all duration-1000";
});

hamburLink.forEach(link => {
    link.addEventListener("click", () => {
        hamburMenu.className = "hamburger-menu absolute de-active top-0 z-20 w-screen h-screen delay-500";
        menu.className = "menu bg-white absolute de-active w-5/6 h-full transition-all duration-1000";

    })
});

//Sticky navbar
const nav = document.querySelector(".fixed-nav");
const navTop = nav.offsetTop;
const aboutUs = document.querySelector("#about-us");
const aboutUs1 = aboutUs.offsetTop;

function fixedNav() {
    if (window.scrollY >= navTop) {
        nav.classList.add("sticky-navbar");
    } else {
        nav.classList.remove("sticky-navbar");
    }

    if (window.scrollY === aboutUs1) {
        console.log(10);
        document.querySelector(".about-us-link").classList.add("text-black");
    }
}

window.addEventListener("scroll", fixedNav);