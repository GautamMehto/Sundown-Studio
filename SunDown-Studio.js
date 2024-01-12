let workElements = document.querySelector("#work-elements")
let fixedImg = document.getElementById("fixed-image")
let element = document.querySelectorAll(".element")
let fixedVideo = document.getElementById("fixed-video")
let heading = document.querySelectorAll(".heading")
let text = document.querySelectorAll(".text")
let img = document.getElementsByClassName("right-img")
let page5 = document.getElementById("page5")
let mouse = document.getElementById("mouse")
let menubtn = document.querySelector(".menubtn")
let cancelbtn = document.querySelector("#cancel")
let wWidth = screen.width
let loaderList = ["ENVIRONMENT", "CONTENT", "EXPERIENCES"]
let counter = 0
workElements.addEventListener("mouseenter", () => {
    fixedImg.style.display = "block"
    console.log("enter");
})
workElements.addEventListener("mouseleave", () => {
    fixedImg.style.display = "none"
    console.log("leave");
})

element.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        let iAddress = e.getAttribute("data-img")
        let vAddress = e.getAttribute("data-vid")
        console.log(iAddress);
        console.log(vAddress);
        if (iAddress == null) {
            fixedVideo.src = vAddress
            fixedVideo.load()
            fixedVideo.style.display = "block"
        }
        else {
            fixedVideo.style.display = "none"
            fixedImg.style.backgroundImage = `url(${iAddress})`
        }
    })
});
menubtn.addEventListener("click", function () {
    gsap.to("#menuTab", {
        display: "block",
        top: "0%"
    })
})
cancelbtn.addEventListener("click", function () {
    gsap.to("#menuTab", {
        top: "-150%"
    })
})

let loaderTime = setInterval(() => {
    if (counter == 2) {
        gsap.to("#loader", {
            top: "-150%",
        })
        clearInterval(loaderTime)
    }
    else {
        console.log(loaderList[counter]);
        document.getElementById("loader-list").innerText = loaderList[counter]
        counter++
    }
}, 1000);

if (wWidth > 500) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,
    });
}
else {
    console.log("500-");
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        freeMode: true,
    });
}

heading[0].addEventListener("click", function () {
    heading[0].classList.add("active-heading")
    heading[1].classList.remove("active-heading")
    heading[2].classList.remove("active-heading")
    text[0].classList.add("activeTab")
    text[1].classList.remove("activeTab")
    text[2].classList.remove("activeTab")
    img[0].classList.add("active-img")
    img[1].classList.remove("active-img")
    img[2].classList.remove("active-img")
    gsap.from("img", {
        opacity: 0,
    })
    gsap.to("img", {
        opacity: 1,
    })
    gsap.from(".text", {
        opacity: 0,
    })
    gsap.to(".text", {
        opacity: 1,
    })
})
heading[1].addEventListener("click", function () {
    heading[0].classList.remove("active-heading")
    heading[1].classList.add("active-heading")
    heading[2].classList.remove("active-heading")
    text[0].classList.remove("activeTab")
    text[1].classList.add("activeTab")
    text[2].classList.remove("activeTab")
    img[0].classList.remove("active-img")
    img[1].classList.add("active-img")
    img[2].classList.remove("active-img")
    gsap.from("img", {
        opacity: 0,
    })
    gsap.to("img", {
        opacity: 1,
    })
    gsap.from(".text", {
        opacity: 0,
    })
    gsap.to(".text", {
        opacity: 1,
    })
})
heading[2].addEventListener("click", function () {
    heading[0].classList.remove("active-heading")
    heading[1].classList.remove("active-heading")
    heading[2].classList.add("active-heading")
    text[0].classList.remove("activeTab")
    text[1].classList.remove("activeTab")
    text[2].classList.add("activeTab")
    img[0].classList.remove("active-img")
    img[1].classList.remove("active-img")
    img[2].classList.add("active-img")
    gsap.from("img", {
        opacity: 0,
    })
    gsap.to("img", {
        opacity: 1,
    })
    gsap.from(".text", {
        opacity: 0,
    })
    gsap.to(".text", {
        opacity: 1,
    })
})

page5.addEventListener("mousemove", function (e) {
    gsap.to("#mouse", {
        display: "flex",
        top: e.clientY - 100,
        left: e.clientX,
        transform: "translate(-50%,-90%)"
    })
})
page5.addEventListener("mouseleave", function () {
    gsap.to("#mouse", {
        display: "none",
        scale: 0,
        opacity: 0
    })
})

var tl = gsap.timeline()

tl.from("nav img", {
    y: -100,
    delay: 3.5,
    stagger: .5,
    duration: .5,
})
tl.from("nav .btns", {
    backgroundColor: " black",
    color: "white",
    opacity: 1,
    y: -100,
    stagger: .3,
    duration: .5,
})
tl.from("#page1 #box #left", {
    opacity: 0,
    x: -100,
    duration: .5,
})
tl.from("#page1 #box #right", {
    opacity: 0,
    x: 100,
    duration: .5,
})
tl.from("#page1 video", {
    opacity: 0,
    scale: 0,
    duration: .5,
})
tl.from("#page1 #shape-box", {
    right:"-100%",
    duration: .5,
})

tl.from("#page3 #element1 h2", {
    opacity: 0,
    transform: "translateY(50vh)",
    scrollTrigger: {
        trigger: "#page3 #element1",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
    }
})
tl.from("#page3 #element2 h2", {
    opacity: 0,
    transform: "translateY(50vh)",
    scrollTrigger: {
        trigger: "#page3 #element2",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
    }
})
tl.from("#page3 #element3 h2", {
    opacity: 0,
    transform: "translateY(50vh)",
    scrollTrigger: {
        trigger: "#page3 #element3",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
    }
})
tl.from("#page3 #element4 h2", {
    opacity: 0,
    transform: "translateY(50vh)",
    scrollTrigger: {
        trigger: "#page3 #element4",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
    }
})
tl.from("#page3 #element5 h2", {
    opacity: 0,
    transform: "translateY(50vh)",
    scrollTrigger: {
        trigger: "#page3 #element5",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
    }
})
tl.from("#page3 #element6 h2", {
    opacity: 0,
    transform: "translateY(50vh)",
    scrollTrigger: {
        trigger: "#page3 #element6",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
    }
})
tl.from("#page3 #element7 h2", {
    opacity: 0,
    transform: "translateY(50vh)",
    scrollTrigger: {
        trigger: "#page3 #element7",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "bottom 90%",
        scrub: 2,
    }
})
tl.from("#page4 .right-img", {
    transform: "translateY(-15vh)",
    scrollTrigger: {
        trigger: "#page4 ",
        scroller: "body",
        // markers: true,
        start: "top 20%",
        end: "bottom 90%",
        scrub: 2,
    }
})
tl.from("#page5 h4", {
    transform: "translateX(-50vh)",
    scrollTrigger: {
        trigger: "#page5 h4 ",
        scroller: "body",
        // markers: true,
        start: "top 95%",
        end: "bottom 85%",
        scrub: 2,
    }
})
tl.from("#page5 .swiper", {
    opacity: 0,
    transform: "translateY(20vh)",
    scrollTrigger: {
        trigger: "#page5 .swiper",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "bottom 90%",
        scrub: 2,
    }
})
