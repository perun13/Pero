const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android()
            || isMobile.BlackBerry()
            || isMobile.iOS()
            || isMobile.Opera()
            || isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

const headerBurger = document.querySelector('.header_burger');
const navBurger = document.querySelector('.nav_burger');
if (headerBurger) {

    headerBurger.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        headerBurger.classList.toggle('_active');
        navBurger.classList.toggle('_active');
    });
};



new Swiper('.image-slider', {
    autoplay: {
        deley: 8000,
    },
    speed: 1000,


});
new Swiper('."box-1-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prefEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },


});
new Swiper('."box_5_swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prefEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },


});


