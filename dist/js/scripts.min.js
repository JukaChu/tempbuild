var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}

allLozadImg();

//anim

//lang control

let langSpan = [...document.querySelectorAll('.lang > span')];

function langControl() {
    if (langSpan.length) {
        langSpan.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.lang').classList.toggle('open');
            })
        })
    }
}

langControl();


var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5})

        animStage.forEach((animate, k) => {
            observer.observe(animate);
        })

    }
}

scrollAnimationsStage();

// scroll animations
var anim = document.querySelectorAll('.anim')

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }


                    el.classList.add('done');
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();

//

//anim


//marquee
var marqueeContent = document.querySelector(".marquee-cont");

function marqqueFnc() {
    if (marqueeContent) {
        var root = document.documentElement;
        var marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");


        root.style.setProperty("--marquee-elements", marqueeContent.children.length);

        for (var i = 0; i < marqueeElementsDisplayed; i++) {
            marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
        }
    }
}

marqqueFnc();


//rating

function getRaty() {
    $('.rating-stars').each(function (index) {
        if ($(this).html() == '') {
            $(this).raty({
                readOnly: true,
                starHalf: './img/star-full.svg',
                starOn: './img/star-full.svg',
                starOff: './img/star-clear.svg',
                hints: ['a', null, '', null, '', null]
            });
        }
    });
}

getRaty();

//rating


let headerMenu = [...document.querySelectorAll('.header-menu > ul > li')];
let backDrop = document.querySelector('.backdrop');

function hoverHeaderMenu() {
    if (headerMenu.length) {
        headerMenu.forEach((btn) => {
            btn.addEventListener('mouseover', () => {
                backDrop.classList.add('active');
            });
            btn.addEventListener('mouseout', () => {
                backDrop.classList.remove('active');
            })
        })
    }
}

// hoverHeaderMenu();


//swipers
//structure
let structureSlider = [...document.querySelectorAll('.structure-slider')];

function startStructureSlider() {
    if (!structureSlider.length) {

    } else {
        let eff = 'fade';
        if (window.innerWidth > 1600) {
            eff = 'slide';
        }

        structureSlider.forEach((sld) => {
            let forPagin = [...sld.querySelectorAll('.for-pagin p')];
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            let pagin = sld.querySelector('.dots');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                effect: eff,
                speed: 700,
                centeredSlides: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                touchRatio: 1,
                touchAngle: 160,
                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                cssMode: false,

                autoplay: false,
                spaceBetween: 0,
                pagination: {
                    el: pagin,
                    type: 'bullets',
                    bulletActiveClass: 'active',
                    bulletClass: 'single-dot',
                    bulletElement: 'div',
                    clickable: true,
                    currentClass: 'current',
                    renderBullet: function (index) {
                        return '<div class="single-dot">' + (forPagin[index].innerHTML) + '</div>';
                    },

                },
                breakpoints: {

                    1600: {
                        slidesPerView: 'auto',
                    },

                    767: {
                        slidesPerView: 1,
                    }
                }


            });


        })

    }
}

startStructureSlider();
//structure

//news

let newsSlider = [...document.querySelectorAll('.news-slider')];

function startNewsSlider() {
    if (!newsSlider.length) {

    } else {


        newsSlider.forEach((sld) => {
            let sldCont = sld.querySelector('.swiper');
            let sldNext = sld.querySelector('.slider-btn--next');
            let sldPrev = sld.querySelector('.slider-btn--prev');
            // let pagin = sld.querySelector('.progress-bar');
            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 800,
                centeredSlides: false,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },

                touchRatio: 1,
                touchAngle: 160,
                followFinger: true,
                allowTouchMove: true,
                threshold: true,
                touchMoveStopPropagation: true,
                touchStartPreventDefault: true,
                touchStartForcePreventDefault: true,
                touchReleaseOnEdges: true,

                resistance: true,
                resistanceRatio: 0.3,
                mousewheel: true,

                autoplay: false,
                spaceBetween: 32,

                // pagination: {
                //     el: pagin,
                //     type: "progressbar",
                // },
                breakpoints: {
                    1050: {
                        slidesPerView: 'auto',
                        initialSlide: 3,
                        centeredSlides: true,
                    },
                    769: {
                        slidesPerView: 3,
                    },
                    550: {
                        slidesPerView: 2,
                    },

                }


            });


        })

    }
}

startNewsSlider();


//news


//swipers


//seo control

let seoBlock = [...document.querySelectorAll('.seo-block')];

function seoControl() {
    if (seoBlock.length) {
        seoBlock.forEach((cont) => {
            let btn = cont.querySelector('.control-seo');
            let txt = cont.querySelector('.seo-text');

            let opn = btn.dataset.open;
            let cls = btn.dataset.close;

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (txt.classList.contains('open')) {
                    txt.classList.remove('open');
                    btn.innerHTML = cls;

                } else {
                    txt.classList.add('open');
                    btn.innerHTML = opn;
                }
            })
        })
    }
}

seoControl();

//seo control


var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();


//modal windows

//modal window

let btnMod = [...document.querySelectorAll('.btn-mod')];
let modals = [...document.querySelectorAll('.modal-window')];
let closeModal = [...document.querySelectorAll('.modal-close')];
let clsSecModal = [...document.querySelectorAll('.modal-window .cls')];
let backplates = [...document.querySelectorAll('.backplate')];

function controlModal() {
    if (btnMod.length) {
        btnMod.forEach((btn) => {
            let data = btn.dataset.mod;

            btn.addEventListener('click', (e) => {

                e.preventDefault();
                e.stopPropagation();

                if (document.querySelector('.modal-window.visible')) {
                    document.querySelector('.modal-window.visible').classList.remove('visible');
                }
                modals.forEach((mod) => {
                    if (mod.dataset.modal === data) {
                        document.body.classList.add('no-scroll');

                        mod.classList.add('visible');
                        if (mod.querySelector('.main-title')) {
                            setTimeout(() => {
                                mod.querySelector('.main-title').classList.add('done');

                            }, 500);
                        }
                        if (mod.classList.contains('modal-window__video')) {
                            mod.querySelector('.vid-cont').classList.remove('hide');
                            mod.querySelector('.vid-cont video').pause();
                        }
                    }
                })
            })
        });


        closeModal.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');
                if ( btn.closest('.modal-window').classList.contains('modal-window__video')) {
                    btn.closest('.modal-window').querySelector('.vid-cont').classList.remove('hide');
                    btn.closest('.modal-window').querySelector('.vid-cont video').pause();
                }
            })
        });
        backplates.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-window').classList.remove('visible');
                document.body.classList.remove('no-scroll');

                if ( btn.closest('.modal-window').classList.contains('modal-window__video')) {
                    btn.closest('.modal-window').querySelector('.vid-cont').classList.remove('hide');
                    btn.closest('.modal-window').querySelector('.vid-cont video').pause();
                }
            })
        });
        if (clsSecModal.length) {
            clsSecModal.forEach((btn) => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    btn.closest('.modal-window').classList.remove('visible');
                    document.body.classList.remove('no-scroll');
                    if (btn.closest('.modal-window').classList.contains('video')) {
                        btn.closest('.modal-window').querySelector('.video-cont').classList.remove('playing');

                        btn.closest('.modal-window').querySelector('.video-cont').innerHTML = '';
                    }

                })
            });
        }
    }
}

controlModal();

//tabs

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {

            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    if (btn.closest('.tabs-owner').querySelector('.standard-tab')) {
                        btn.closest('.tabs-owner').querySelector('.standard-tab').classList.remove('active');
                    }
                    [...btn.closest('.tabs-owner').querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();

//tabs


//faq
let faqItems = [...document.querySelectorAll('.single-faq .faq-head')];

function controlFaq() {
    if (faqItems.length) {
        faqItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.single-faq').classList.toggle('open');
            })
        })
    }
}

controlFaq();


//video plays


$('.phone-number').mask('+38(999)-999-99-99');
//video plays


let moveOnMapCity = [...document.querySelectorAll('.contacts-maps__single')];
//map mag contacts-maps__single
let addressCoord = [];

function ifHaveDots(x = cordsSelected[1], y = cordsSelected[0], zoom = 10) {
    if (!moveOnMapCity.length) {

    } else {


        // console.log(addressCoord);
        createMapBuy(x, y, zoom);
    }
}

function createMapBuy(x, y, zoom) {
    function createNewMap() {
        let divMap = document.createElement('div');
        divMap.id = 'mapid';
        document.querySelector('.map-container').appendChild(divMap);
    }


    let mapDiv = document.querySelector('#mapid');

    if (!mapDiv) {
        createNewMap();
    } else {
        mapDiv.remove();
        createNewMap();
    }

    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
        }),

        latlng = L.latLng(49.43607191560438, 27.01095870600106);

    var map = L.map('mapid', {center: latlng, zoom: zoom, layers: [tiles]});


    var greenIcon = L.icon({
        iconUrl: './img/leaf-green2.svg',
        shadowUrl: './img/leaf-shadow.svg',

        iconSize: [101, 63], // size of the icon
        shadowSize: [0, 0], // size of the shadow
        iconAnchor: [50, 63], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var markers = L.markerClusterGroup();
    let markersPos = [];

    for (var i = 0; i < addressCoord.length; i++) {
        var a = addressCoord[i];
        var title = a[2];
        var marker = L.marker(new L.LatLng(a[0], a[1]), {title: title, icon: greenIcon});
        marker.bindPopup(title);
        markers.addLayer(marker);
        markersPos.push(marker);
    }

    map.addLayer(markers);
    map.once('focus', function () {
        map.scrollWheelZoom.enable();
    });
}


function ifMapConsist() {
    if (moveOnMapCity.length) {

        let zoom = 15;
        let x = Number(moveOnMapCity[0].dataset.locationX);
        let y = Number(moveOnMapCity[0].dataset.locationY);

        addressCoord.push([x, y]);

        createMapBuy(50.44541339388037, 30.613560600000003, zoom);
    }

}

ifMapConsist();
//map mag

let zero = '0';
let tls = [...document.querySelectorAll(".input-tel input")];

var maskOptions = {
    mask: `{+38}(000)000-00-00`,
};


tls.forEach((tl) => {
    var mask = IMask(tl, maskOptions);
});


//video control

let vidCont = [...document.querySelectorAll('.vid-cont')];

function videoControl() {
    if (vidCont.length) {
        vidCont.forEach((btn) => {
            let vid = btn.querySelector('video');
            let bt = btn.querySelector('.vid-play');

            bt.addEventListener('click', () => {
                btn.classList.add('hide');
                vid.play();
            })
        })
    }
}

videoControl();

//video control

//btn-go

let btnGo = [...document.querySelectorAll('.btn-go')];

function goBtnScroll() {
    if (btnGo.length) {
        btnGo.forEach((btn) => {
            let dat = btn.dataset.go;

                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    $([document.documentElement, document.body]).animate({
                        scrollTop: $(`.${dat}`).offset().top - 170
                    }, 600);

                });



        })
    }
}
goBtnScroll();
//btn-go


