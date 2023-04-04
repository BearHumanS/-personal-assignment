const badges = document.querySelector(".badges")
const toTop = document.querySelector("#to-top")


window.addEventListener("scroll", _.throttle(function () {
    if (window.scrollY > 500) {
     
        gsap.to(badges, .6, {
            opacity: 0,
            display: "none"
        });
        gsap.to(toTop, 0.2, {
            x: 0
        });
    } else {
        gsap.to(badges, .6, {
            opacity: 1,
            display: "block"
        });
        gsap.to(toTop, 0.2, {
            x: 100
        });
    }
}, 300));

// _.throttle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션)

toTop.addEventListener("click", function () {
    gsap.to(window, 0.7, {
        scrollTo: 0
    });
});

const fade =document.querySelectorAll(".visual .fade-in");
fade.forEach(function (fade, index) {
    gsap.to(fade, 1, {
        delay: (index + 1) * 0.7,
        opacity: 1
    });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop: true
});

new Swiper('.promotion .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides:  true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

const promotion = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
    isHidePromotion = !isHidePromotion
    if(isHidePromotion) {
        promotion.classList.add("hide");
    } else {
        promotion.classList.remove("hide");
    }
})

function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObj(select, delay, size) {
    gsap.to(select, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
        } 
    );
}

floatingObj('.floating1', 1, 15);
floatingObj('.floating2', 0.5, 15);
floatingObj('.floating3', 1.5, 20);

const spyS = document.querySelectorAll("section.scroll-spy");

spyS.forEach(function (spy) {
    new ScrollMagic
        .Scene({
            triggerElement: spy,
            triggerHook: 0.8
        })
        .setClassToggle(spy, 'show')
        .addTo(new ScrollMagic.Controller());
});

new Swiper(".awards .swiper", {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});

