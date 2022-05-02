!(function () {
    "use strict";
    function e() {
        p.hasClass("show") && p.modal("hide");
    }
    var t,
        o = !!window.MSInputMethodContext && !!document.documentMode,
        n = 992,
        a = $(window),
        i = $("html"),
        s = $("body"),
        l = $(".page-header"),
        r = $(".js-header-top"),
        c = $(".page-main"),
        d = $(".page-content"),
        u = $(".page-footer"),
        p = $("#sidebarFilter"),
        h = $(".js-sticky-top"),
        f = $(".js-scroll-up"),
        m = $(".js-intro-content");
    (window.isMobile = !1), /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (window.isMobile = !0), o && i.addClass("ie11"), window.isMobile && i.addClass("mobile"), objectFitImages();
    new jarallax(document.querySelectorAll(".jarallax")), new jarallax(document.querySelectorAll(".jarallax-keep-img"), { keepImg: !0 });
    $(".js-tooltip-call").tooltip(), $('[data-toggle="popover"]').popover(), $(".js-scrollbar").mCustomScrollbar({ scrollInertia: 200, scrollButtons: { enable: !0 } });
    var g = (function (e) {
        return {
            init: function () {
                s.removeClass("load"), this.siteMenu(), this.btnLoader(), this.progressBars(), this.dropdownOffset(), this.buttonScrolls();
            },
            scroll: function () {
                this.scrollIntro(), this.scrollAnim();
                var e = d.offset().top - l.height(),
                    t = s.height() - a.height() - u.height();
                a.scrollTop() > l.height() ? r.addClass("fixed-top-active") : r.removeClass("fixed-top-active"), a.scrollTop() > e ? f.fadeIn() : f.fadeOut(), a.scrollTop() > t ? f.addClass("bottom") : f.removeClass("bottom");
            },
            resize: function () {
                this.scrollPanels(), this.resizeIntro(), this.dropdownOffset(), o || this.stickyFooter();
            },
            resizeIntro: function () {
                m.css({ minHeight: "calc(100vh - " + l.height() + "px)" });
            },
            scrollIntro: function () {
                var e = $(".js-intro-bg"),
                    t = $(".intro").height(),
                    o = t + l.height();
                o > a.scrollTop() ? e.addClass("sticky") : e.removeClass("sticky");
            },
            stickyFooter: function () {
                c.css({ marginBottom: u.height() + "px" }), u.addClass("sticky");
            },
            scrollAnim: function () {
                var e = a.scrollTop();
                $(".prlx-scroll").each(function () {
                    var t = $(this),
                        o = t.offset().top,
                        n = t.height(),
                        a = -((1 - (o - e) / n) / 2) + 0.4;
                    a > 1 ? (a = 1) : a < 0 && (a = 0), t.css({ opacity: a });
                });
            },
            scrollPanels: function () {
                var e = r.height(),
                    t = [],
                    n = 0;
                $(".js-top-panel").each(function (e, o) {
                    (t[e] = $(this).height()), (n += t[e]);
                }),
                    r.waypoint({
                        handler: function (t) {
                            r.addClass("fixed-top"), r.parent().css("height", e);
                        },
                        offset: 0,
                    }),
                    h.length && !o && h.stick_in_parent({ offset_top: n + 10 });
            },
            btnLoader: function () {
                var e = $(".btn-load"),
                    t = '<i class="spinner"></i>',
                    o = '<i class="fa fa-check"></i>';
                e.on("click", function () {
                    var e = $(this);
                    e.addClass("loading").html(t),
                        setTimeout(function () {
                            e.removeClass("loading").addClass("complete").html(o);
                        }, 1500);
                });
            },
            progressBars: function () {
                $(".js-point-progress").each(function () {
                    var e = $(this);
                    e.waypoint(
                        function (t) {
                            "down" === t &&
                                e.find(".progress-bar").css("width", function () {
                                    return $(this).attr("aria-valuenow") + "%";
                                });
                        },
                        { offset: a.height() / 3 }
                    );
                });
            },
            siteMenu: function () {
                var e = $("#navPanel"),
                    t = $("#navMenu"),
                    o = '<div class="modal-backdrop show"></div>',
                    n = $(".btn-toggle-nav");
                e
                    .on("show.bs.collapse", function () {
                        s.addClass("modal-open menu-open").append(o), e.css("transition", "transform 300ms ease-in-out 150ms"), n.css("transition", "transform 300ms ease-in-out 150ms");
                    })
                    .on("hide.bs.collapse", function () {
                        s.removeClass("menu-open"),
                            $(".modal-backdrop").animate({ opacity: 0 }, 300, function () {
                                $(this).remove(), s.removeClass("modal-open");
                            });
                    })
                    .on("hidden.bs.collapse", function () {
                        e.css("transition", "transform 0s 0s"), n.css("transition", "transform 0s 0s");
                    }),
                    s.on("click", ".modal-backdrop", function () {
                        e.collapse("hide"),
                            s.removeClass("menu-open"),
                            $(this).animate({ opacity: 0 }, 300, function () {
                                $(this).remove(), s.removeClass("modal-open");
                            });
                    }),
                    t.on("click", "a", function (e) {
                        var t = $(this);
                        "#" === t.attr("href") && (e.preventDefault(), t.next().slideToggle(300).parent().toggleClass("show").siblings().removeClass("show").children(".dropdown-menu").slideUp(300));
                    });
            },
            dropdownOffset: function () {
                $(".dropdown-menu .dropdown-menu").each(function () {
                    var e = $(this),
                        t = e.width(),
                        o = e.offset().left;
                    a.width() > 767 && (a.width() < t + o ? e.css({ left: "-100%" }) : o < t && e.css({ left: "100%" }));
                });
            },
            buttonScrolls: function () {
                $(".js-intro-btn-jump").on("click", function (e) {
                    var t = m.find(".intro__search").innerHeight(),
                        o = m.offset().top;
                    $("html, body").animate({ scrollTop: o - (a.height() - t) / 2 }, 500);
                }),
                    f.on("click", function (e) {
                        e.preventDefault(), $(this).hasClass("bottom") ? $("html, body").animate({ scrollTop: 0 }, 1e3, "swing") : $("html, body").animate({ scrollTop: s.height() }, 1e3, "swing");
                    }),
                    $(".js-nav-scroll").on("click", "a", function (t) {
                        t.preventDefault();
                        var o = this.hash,
                            n = $(o);
                        $("html, body").animate({ scrollTop: n.offset().top - (r.height() + 10) }, 600, "swing"), (e.location.hash = o);
                    });
            },
        };
    })(window);
    $(window).on("resize", function () {
        g.resize(),
            clearTimeout(t),
            (t = setTimeout(function () {
                $(window).width() > n && e();
            }, 200));
    }),
        $(window).on("scroll", function () {
            g.scroll();
        }),
        $(document).ready(function () {
            function e(e) {
                var t = e.find(".js-help-block"),
                    o = '<div class="alert alert-danger js-help-block collapse"></div>',
                    n = e.find(".has-error").eq(0).find(".help-block").text();
                n.length ? t.text(n).collapse("show") : t.collapse("hide"), e.find($(".js-help-block")).length < 1 && e.prepend(o);
            }
            g.init(),
                g.resize(),
                $("#modalMap").on("show.bs.modal", function (e) {
                    var t = $(e.relatedTarget),
                        o = t.data("title"),
                        n = $(this);
                    n.find(".modal-title .title").text(o);
                }),
                $("#zip").mask("00000-000"),
                $("#card_number").mask("0000-0000-0000-0000"),
                $("#card_date").mask("0000/00"),
                $("#card_cv2").mask("000"),
                $("#phone").mask("(000) 000-0000"),
                ($.fn.validator.Constructor.FOCUS_OFFSET = r.height() + 10),
                $(".js-form-booking-example")
                    .validator()
                    .on("submit", function (e) {
                        e.isDefaultPrevented() || (e.preventDefault(), (window.location = $(this).data("next")));
                    }),
                $(".js-form-booking").on("submit", function (e) {
                    e.preventDefault(), (window.location = $(this).data("next"));
                }),
                $(".select2").on("select2:open", function (e) {
                    var t = $(".select2-results__options");
                    t.mCustomScrollbar("destroy"),
                        $(".select2-search input").prop("focus", !1),
                        setTimeout(function () {
                            t.mCustomScrollbar({ scrollInertia: 200, scrollButtons: { enable: !0 } });
                        }, 0);
                }),
                $(".js-form-select").each(function () {
                    $(this).select2({ width: "100%", minimumResultsForSearch: 1 / 0 });
                });
            var t = $("#navbarSearch"),
                o = t.find(".form-control");
            t.on("shown.bs.collapse", function () {
                o.focus();
            }),
                t.on("hidden.bs.collapse", function () {
                    o.blur();
                });
            var n = $("#modalAccount");
            n.on("hide.bs.modal", function () {
                var e = $(this);
                e.find(".form-group").removeClass("has-error"), e.find(".js-help-block").remove();
            });
            var a = $(".js-account-form");
            a.validator().on("submit", function (e) {
                e.isDefaultPrevented() || (e.preventDefault(), (window.location = "index-account.html"));
            }),
                a.find(".form-control").on("focus change", function () {
                    e($(this).closest("form"));
                }),
                a.on("submit", function () {
                    e($(this));
                }),
                $(".js-toggle-account").on("click", function (e) {
                    e.preventDefault();
                    var t = $(this).data("account");
                    switch (t) {
                        case "login":
                            $('a[href="#accountLogin"]').tab("show");
                            break;
                        case "regist":
                            $('a[href="#accountRegist"]').tab("show");
                            break;
                        case "forgot":
                            $('a[href="#accountForgot"]').tab("show");
                    }
                });
            var i = $(".js-rating-filter"),
                s = $(".js-rating-filter").data("current-rating"),
                l = i.parent().find(".amount .val"),
                c = i.parent().find(".clear-rating");
            $(".js-rating-stat").barrating({ theme: "fontawesome-stars-o", readonly: !0 }),
                $(".js-rating").barrating({ theme: "fontawesome-stars-o" }),
                l.html(s),
                c.on("click", function (e) {
                    e.preventDefault(), i.barrating("clear");
                }),
                i.barrating({
                    theme: "fontawesome-stars-o",
                    showSelectedRating: !1,
                    initialRating: s,
                    onSelect: function (e, t) {
                        e === !1 ? i.barrating("clear") : l.html(e + " of more");
                    },
                    onClear: function (e, t) {},
                });
            var d =
                (new Swiper(".js-intro-slider-bg", { effect: "fade", loop: !0, speed: 1500, simulateTouch: !1, allowSwipeToNext: !1, allowSwipeToPrev: !1, autoplay: { delay: 8e3 } }),
                new Swiper(".js-intro-slider-desc", { effect: "fade", loop: !0, speed: 1500, simulateTouch: !1, allowSwipeToNext: !1, allowSwipeToPrev: !1, autoplay: { delay: 8e3 } }),
                $(".js-intro-hotels"));
            new Swiper(d, {
                loop: !0,
                spaceBetween: 25,
                slidesPerView: 5,
                slidesPerGroup: 5,
                clickable: !1,
                speed: 1200,
                navigation: { nextEl: d.next().find(".js-next"), prevEl: d.next().find(".js-prev") },
                breakpoints: {
                    1600: { slidesPerView: 4, slidesPerGroup: 4 },
                    1200: { spaceBetween: 20, slidesPerView: 3, slidesPerGroup: 3 },
                    992: { spaceBetween: 15, slidesPerView: 2, slidesPerGroup: 2 },
                    567: { slidesPerView: 1, slidesPerGroup: 1 },
                },
            });
            $(".js-input-date").on("input blur", function () {
                var e = $(this);
                e.next("label").text(e.val());
            }),
                $(".js-input-date").each(function () {
                    var e = $(this);
                    setTimeout(function () {
                        e.next("label").text(e.val());
                    }, 100);
                }),
                $(".js-select-locality").each(function () {
                    var e = $(this),
                        t = e.parent();
                    e.select2({
                        width: "100%",
                        allowClear: !0,
                        placeholder: function () {
                            return $(this).data("placeholder");
                        },
                        dropdownParent: t,
                    });
                });
            var u = $(".js-qty");
            u.spinner({ min: 0 }),
                $("#hotelDate1").flatpickr({ dateFormat: "d-M", plugins: [new rangePlugin({ input: "#hotelDateTo1" })], disableMobile: !0, defaultDate: ["2022-05-02", "2022-05-02"] }),
                $("#hotelDate2").flatpickr({ dateFormat: "d-M", plugins: [new rangePlugin({ input: "#hotelDateTo2" })], disableMobile: !0, defaultDate: ["2022-05-02", "2022-05-02"] }),
                $("#flyingDate1").flatpickr({ dateFormat: "Y-m-d", plugins: [new rangePlugin({ input: "#flyingDateTo1" })], disableMobile: !0, defaultDate: ["2022-05-02", "2022-05-02"] }),
                $("#flyingDate2").flatpickr({ dateFormat: "Y-m-d", plugins: [new rangePlugin({ input: "#flyingDateTo2" })], disableMobile: !0, defaultDate: ["2022-05-02", "2022-05-02"] }),
                $("#flyingDate3").flatpickr({ dateFormat: "Y-m-d", defaultDate: ["2022-04-20"], disableMobile: !0 }),
                $(".js-show-more").on("click", function (e) {
                    e.preventDefault();
                    var t = $(this);
                    t.toggleClass("active").prev().collapse("toggle"), t.hasClass("active") ? t.text("Show less") : t.text("Show more");
                }),
                $(".js-hotel-show-more").on("click", function (e) {
                    var t = $(this);
                    t.toggleClass("active"), t.closest(".hotel-package").find(".js-addition").collapse("toggle"), t.hasClass("active") ? t.text("More info -") : t.text("More info +");
                }),
                p
                    .modal({ show: !1, backdrop: !1 })
                    .on("show.bs.modal", function (e) {
                        $(".page-content").addClass("modal-open");
                    })
                    .on("hidden.bs.modal", function (e) {
                        $(".page-content").removeClass("modal-open");
                    });
            var h = document.getElementById("userRatingChange"),
                f = document.getElementById("userRatingMin");
            h &&
                (noUiSlider.create(h, { start: 6, connect: [!0, !1], range: { min: 0, max: 10 }, format: wNumb({ decimals: 0 }) }),
                h.noUiSlider.on("update", function (e, t) {
                    f.innerHTML = e[t];
                })),
                $(".js-sorting").on("click", "a", function (e) {
                    e.preventDefault();
                    var t = $(this);
                    t.addClass("active").toggleClass("asceding").siblings().removeClass("active asceding asc desc"), t.hasClass("asceding") ? t.addClass("asc").removeClass("desc") : t.removeClass("asc").addClass("desc");
                }),
                $(".js-toggle-grid").on("click", function (e) {
                    e.preventDefault();
                    var t = $(this),
                        o = t.data("cols"),
                        n = $(".js-grid-item"),
                        a = n.parent().parent();
                    t.addClass("active").siblings().removeClass("active"),
                        n.parent().attr("class", o),
                        "grid" === t.data("grid") ? (a.removeClass("row-list"), n.removeClass("product--list")) : (a.addClass("row-list"), n.addClass("product--list"));
                }),
                $(".js-banner-slider").each(function () {
                    new Swiper(this, { effect: "fade", loop: !0, speed: 1e3, simulateTouch: !1, allowSwipeToNext: !1, allowSwipeToPrev: !1, autoplay: { delay: 3e3 } });
                }),
                $("#hotelInDate").flatpickr({ dateFormat: "l, M d, Y", plugins: [new rangePlugin({ input: "#hotelOutDate" })], defaultDate: [new Date(), new Date()] }),
                $("#statusDateFrom").flatpickr({ dateFormat: "D, M d Y", plugins: [new rangePlugin({ input: "#statusDateTo" })], defaultDate: [new Date(), new Date()] }),
                $("#searchFlightDate").flatpickr({ dateFormat: "l, M d, Y", defaultDate: [new Date()] });
            var m = $(".js-grid-masonry"),
                w = m.find(".grid-item");
            w.hide(),
                m.imagesLoaded(function () {
                    w.fadeIn(), m.masonry({ columnWidth: ".grid-sizer", itemSelector: ".grid-item", percentPosition: !0 });
                    var e = m.isotope({ itemSelector: ".grid-item", resizable: !1, percentPosition: !0, masonry: { columnWidth: ".grid-sizer" }, hiddenStyle: { opacity: 0 }, visibleStyle: { opacity: 1 } });
                    $(".js-grid-filter").on("click", "a", function (t) {
                        t.preventDefault();
                        var o = $(this);
                        w.hasClass("grid-item--hide") && w.removeClass("grid-item--hide"), o.parent().siblings().children().removeClass("active"), o.addClass("active"), e.isotope({ filter: o.attr("data-filter") });
                    });
                });
            var v,
                b,
                C,
                k = $(".js-hotel-carousel"),
                j = $(".js-gallery-modal-thumbs");
            k.length &&
                ((v = new Swiper(k, { spaceBetween: 10, effect: "fade", navigation: { nextEl: ".js-next", prevEl: ".js-prev" } })),
                (b = new Swiper(".js-hotel-carousel-thumbs", { spaceBetween: 5, centeredSlides: !0, slidesPerView: "auto", touchRatio: 0.2, slideToClickedSlide: !0 })),
                (v.controller.control = b),
                (b.controller.control = v),
                $('a[aria-controls="hotel"]').on("shown.bs.tab", function (e) {
                    v.update(), b.update();
                }),
                (C = new Swiper(j, { spaceBetween: 10, touchRatio: 0.2, centeredSlides: !0, slidesPerView: "auto", slideToClickedSlide: !0, freeMode: !0, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } })));
            var y = $(".js-gallery-link");
            y.on("click", function (e) {
                e.preventDefault();
                var t = $(".js-gallery-modal-panel");
                blueimp.Gallery(y, {
                    index: y.index(this),
                    event: e,
                    indicatorContainer: ".indicator",
                    fullscreen: !0,
                    hidePageScrollbars: !0,
                    disableScroll: !0,
                    startSlideshow: !0,
                    slideshowInterval: 6e3,
                    onopen: function () {
                        t.css({ opacity: 1, transition: "300ms linear 300ms" }),
                            setTimeout(function () {
                                j.find("li").addClass("swiper-slide"), C.update();
                            }, 100);
                    },
                    onslide: function (e, t) {
                        var o = this.list[e].getAttribute("data-description"),
                            n = this.container.find(".description"),
                            a = this.getIndex() + 1 + "/" + this.getNumber() + ": ";
                        n.empty(), o && n[0].appendChild(document.createTextNode(a + o)), C.slideTo(e);
                    },
                    onclose: function () {
                        t.css({ opacity: 0, transition: "300ms ease" });
                    },
                });
            }),
                $("#galleryThumbs").on("shown.bs.collapse", function () {
                    C.update(), j.css({ opacity: 1, transition: "300ms linear" });
                }),
                $("#galleryThumbs").on("hidden.bs.collapse", function () {
                    j.css({ opacity: 0 });
                });
        });





        // Api


        function getCountryTo(way){
            fetch('https://ticketbook.azurewebsites.net/api/FromCountries').then(function(response) {
            return response.json();
            }).then(function(data) {
                for(let i = 0; i < data.length; i++){
                    let fromState = ''
                    fromState = data[i].countryName + " " + data[i].name;
                    way.innerHTML += `<option data-id=${data[i].id} id="toCountry">${fromState}</option>`;
                }
                
            }).catch(function() {
                console.log("Error!!");
            });
        }

        function getCountryFrom(way){
            fetch('https://ticketbook.azurewebsites.net/api/DestinationCountries').then(function(response) {
            return response.json();
            }).then(function(data) {
                for(let i = 0; i < data.length; i++){
                    let fromState = ''
                    fromState = data[i].countryName + ' ' + data[i].name;
                    way.innerHTML += `<option data-id=${data[i].id} id="toCountry">${fromState}</option>`;
                }
                
            }).catch(function() {
                console.log("Error!!");
            });
        }



        let flightRoundedBtn = document.querySelector('#flightRoundedBtn')
        let flightOneWayBtn = document.querySelector('#flightOneWayBtn')

        let flyingToListRounded = document.querySelector('#toRounded')
        let flyingFromListRounded = document.querySelector('#fromRounded')

        let toOneWay = document.querySelector("#toOneWay")
        let fromOneWay = document.querySelector("#fromOneWay")

        let flightStatus1 = document.querySelector('#flightStatus2')
        let flightStatus2 = document.querySelector('#flightStatus1')


        let adultsCount = document.querySelector("#adultsCount").value
        let childrenCount = document.querySelector("#childrenCount").value


        fromOneWay.addEventListener('change', (e)=>{
            fromOneWay = document.querySelector("#fromOneWay")
            fromOneWay = fromOneWay.options[fromOneWay.selectedIndex].getAttribute('data-id')
        })

        toOneWay.addEventListener('change', (e)=>{
            toOneWay = document.querySelector("#toOneWay")
            toOneWay = toOneWay.options[toOneWay.selectedIndex].getAttribute('data-id')
        })

        flightOneWayBtn.addEventListener('click', (e)=>{
            e.preventDefault();    

            flightStatus1 = document.querySelector('#flightStatus2')


            flightStatus1 = flightStatus1.options[flightStatus1.selectedIndex].getAttribute('value')

            
            let flyingDate = document.querySelector("#flyingDate3")

            

            console.log({'fromStateId': parseInt(flyingFromListRounded), 'destStateId': parseInt(flyingToListRounded), 'departureDate': flyingDate.value, 'class': parseInt(flightStatus1), 'adultCount': parseInt(adultsCount), 'childCount': parseInt(childrenCount)})

            fetch("https://ticketbook.azurewebsites.net/api/Flights",
            {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "POST",
                
                body: JSON.stringify({'fromStateId': parseInt(flyingFromListRounded), 'destStateId': parseInt(flyingToListRounded), 'departureDate': flyingDate.value, 'class': parseInt(flightStatus1), 'adultCount': parseInt(adultsCount), 'childCount': parseInt(childrenCount)})
            })
            .then(function(res){ console.log(res) })
            .catch(function(res){ console.log(res) })

            (window.location = "flights.html")
        })

        let loginBtn = document.querySelector('#loginBtn')
        let registerBtn = document.querySelector('#registerBtn')


        flightStatus1.addEventListener('change', (e)=>{
            flightStatus1 = document.querySelector('#flightStatus2')

            flightStatus1 = flightStatus1.options[flightStatus1.selectedIndex].getAttribute('value');
        })


        flightStatus2.addEventListener('change', (e)=>{
            flightStatus2 = document.querySelector('#flightStatus1')
            flightStatus2 = flightStatus2.options[flightStatus2.selectedIndex].getAttribute('value');

        })

        let roundedResultArray = []

        flightRoundedBtn.addEventListener('click', (e)=>{
            e.preventDefault();

            flightStatus2 = flightStatus2.options[flightStatus2.selectedIndex].getAttribute('value');

            flyingToListRounded = document.querySelector('#toRounded')
            flyingFromListRounded = document.querySelector('#fromRounded')


            flyingFromListRounded = flyingFromListRounded.options[flyingFromListRounded.selectedIndex].getAttribute('data-id');
            flyingToListRounded = flyingToListRounded.options[flyingToListRounded.selectedIndex].getAttribute('data-id');
            // console.log({'fromStateId': flyingFromListRounded, 'destStateId': flyingToListRounded, 'departureDate': document.getElementsByName("departing")[0].value, 'returnDate': document.getElementsByName("returning")[0].value, 'class': flightStatus2, 'adultCount': adultsCount, 'childCount': childrenCount})

            fetch("https://ticketbook.azurewebsites.net/api/Flights",
            {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "POST",
                
                body: JSON.stringify({'fromStateId': parseInt(flyingFromListRounded), 'destStateId': parseInt(flyingToListRounded), 'departureDate': document.getElementsByName("departing")[0].value, 'returnDate': document.getElementsByName("returning")[0].value, 'class': parseInt(flightStatus2), 'adultCount': parseInt(adultsCount), 'childCount': parseInt(childrenCount)})
            })
            .then(function(res){console.log(res)})
            // .then(function (response) { console.log(response)  })
            .catch(function(res){ console.log(res) })


            console.log(roundedResultArray)

            // setTimeout(function(){
            //     (window.location = "flights.html")
            // }, 10000)



        })



        let email = document.getElementsByName('user_email');
        let password = document.getElementsByName('user_pass')


        loginBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            console.log(email[0].value, password[0].value)
            fetch("https://ticketbook.azurewebsites.net/account/login",
                {
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "email": email[0].valaue,
                        "password": password[0].value
                      })
                })
                .then(function(res){ console.log(res) })
                .catch(function(res){ console.log(res) })
        
                        
        })


        registerBtn.addEventListener('click',(e)=>{
            e.preventDefault();

            let firstName = document.getElementsByName('user_name');
            let lastName = document.getElementsByName('user_last_name');

            fetch("https://ticketbook.azurewebsites.net/account/register",
                {
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "firstName": firstName[0].value,
                        "lastName": lastName[0].value,
                        "email": email[1].value,
                        "password": password[1].value
                      })
                })
                .then(function(res){ console.log(res) })
                .catch(function(res){ console.log(res) })                            
        })


        getCountryTo(flyingFromListRounded);
        getCountryFrom(flyingToListRounded);

        getCountryTo(toOneWay);
        getCountryFrom(fromOneWay);

})();



