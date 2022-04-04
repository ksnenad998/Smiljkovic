/*********************************************************************************

	Note: This is plugins js. Common plugins include here.

**********************************************************************************/

/*===============================================================================
    [ INDEX ]
=================================================================================

	Avoid Console
	ScrollUp
	Fake Loader
	Fake Loader
	Mobile Menu
	Slick Slider
	jQuery Countdown
	Lightgallery jQuery Plugin
	Instafeed js
	Nice Select
	Twitter Fetcher
	Sticky Sidebar
	Parallax
	Match Height
	Datepicker

=================================================================================
    [ END INDEX ]
================================================================================*/

/*========== Avoid Console ==========*/
(function () {
    var method;
    var noop = function () {};
    var methods = [
        'assert',
        'clear',
        'count',
        'debug',
        'dir',
        'dirxml',
        'error',
        'exception',
        'group',
        'groupCollapsed',
        'groupEnd',
        'info',
        'log',
        'markTimeline',
        'profile',
        'profileEnd',
        'table',
        'time',
        'timeEnd',
        'timeline',
        'timelineEnd',
        'timeStamp',
        'trace',
        'warn',
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
})();

// Place any jQuery/helper plugins in here.

/*========== ScrollUp ==========*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!(function (l, o, e) {
    'use strict';
    (l.fn.scrollUp = function (o) {
        l.data(e.body, 'scrollUp') ||
            (l.data(e.body, 'scrollUp', !0), l.fn.scrollUp.init(o));
    }),
        (l.fn.scrollUp.init = function (r) {
            var s,
                t,
                c,
                i,
                n,
                a,
                d,
                p = (l.fn.scrollUp.settings = l.extend(
                    {},
                    l.fn.scrollUp.defaults,
                    r,
                )),
                f = !1;
            switch (
                ((d = p.scrollTrigger
                    ? l(p.scrollTrigger)
                    : l('<a/>', {id: p.scrollName, href: '#top'})),
                p.scrollTitle && d.attr('title', p.scrollTitle),
                d.appendTo('body'),
                p.scrollImg || p.scrollTrigger || d.html(p.scrollText),
                d.css({display: 'none', position: 'fixed', zIndex: p.zIndex}),
                p.activeOverlay &&
                    l('<div/>', {id: p.scrollName + '-active'})
                        .css({
                            position: 'absolute',
                            top: p.scrollDistance + 'px',
                            width: '100%',
                            borderTop: '1px dotted' + p.activeOverlay,
                            zIndex: p.zIndex,
                        })
                        .appendTo('body'),
                p.animation)
            ) {
                case 'fade':
                    (s = 'fadeIn'), (t = 'fadeOut'), (c = p.animationSpeed);
                    break;
                case 'slide':
                    (s = 'slideDown'), (t = 'slideUp'), (c = p.animationSpeed);
                    break;
                default:
                    (s = 'show'), (t = 'hide'), (c = 0);
            }
            (i =
                'top' === p.scrollFrom
                    ? p.scrollDistance
                    : l(e).height() - l(o).height() - p.scrollDistance),
                (n = l(o).scroll(function () {
                    l(o).scrollTop() > i
                        ? f || (d[s](c), (f = !0))
                        : f && (d[t](c), (f = !1));
                })),
                p.scrollTarget
                    ? 'number' == typeof p.scrollTarget
                        ? (a = p.scrollTarget)
                        : 'string' == typeof p.scrollTarget &&
                          (a = Math.floor(l(p.scrollTarget).offset().top))
                    : (a = 0),
                d.click(function (o) {
                    o.preventDefault(),
                        l('html, body').animate(
                            {scrollTop: a},
                            p.scrollSpeed,
                            p.easingType,
                        );
                });
        }),
        (l.fn.scrollUp.defaults = {
            scrollName: 'scrollUp',
            scrollDistance: 300,
            scrollFrom: 'top',
            scrollSpeed: 300,
            easingType: 'linear',
            animation: 'fade',
            animationSpeed: 200,
            scrollTrigger: !1,
            scrollTarget: !1,
            scrollText: 'Scroll to top',
            scrollTitle: !1,
            scrollImg: !1,
            activeOverlay: !1,
            zIndex: 2147483647,
        }),
        (l.fn.scrollUp.destroy = function (r) {
            l.removeData(e.body, 'scrollUp'),
                l('#' + l.fn.scrollUp.settings.scrollName).remove(),
                l('#' + l.fn.scrollUp.settings.scrollName + '-active').remove(),
                l.fn.jquery.split('.')[1] >= 7
                    ? l(o).off('scroll', r)
                    : l(o).unbind('scroll', r);
        }),
        (l.scrollUp = l.fn.scrollUp);
})(jQuery, window, document);

/*========== Fake Loader ==========*/
/*--------------------------------------------------------------------
 *JAVASCRIPT "FakeLoader.js"
 *Version:    1.1.0 - 2014
 *author:     João Pereira
 *website:    http://www.joaopereira.pt
 *Licensed MIT
-----------------------------------------------------------------------*/
!(function (i) {
    function s() {
        var s = i(window).width(),
            c = i(window).height(),
            d = i('.fl').outerWidth(),
            e = i('.fl').outerHeight();
        i('.fl').css({
            position: 'absolute',
            left: s / 2 - d / 2,
            top: c / 2 - e / 2,
        });
    }
    (i.fn.fakeLoader = function (c) {
        var d = i.extend(
                {
                    timeToHide: 1200,
                    pos: 'fixed',
                    top: '0px',
                    left: '0px',
                    width: '100%',
                    height: '100%',
                    zIndex: '999',
                    bgColor: '#2ecc71',
                    spinner: 'spinner7',
                    imagePath: '',
                },
                c,
            ),
            e =
                '<div class="fl spinner1"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
            l =
                '<div class="fl spinner2"><div class="spinner-container container1"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container2"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div><div class="spinner-container container3"><div class="circle1"></div><div class="circle2"></div><div class="circle3"></div><div class="circle4"></div></div></div>',
            n =
                '<div class="fl spinner3"><div class="dot1"></div><div class="dot2"></div></div>',
            v = '<div class="fl spinner4"></div>',
            a =
                '<div class="fl spinner5"><div class="cube1"></div><div class="cube2"></div></div>',
            r =
                '<div class="fl spinner6"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>',
            t =
                '<div class="fl spinner7"><div class="circ1"></div><div class="circ2"></div><div class="circ3"></div><div class="circ4"></div></div>',
            o = i(this),
            h = {
                position: d.pos,
                width: d.width,
                height: d.height,
                top: d.top,
                left: d.left,
            };
        return (
            o.css(h),
            o.each(function () {
                var i = d.spinner;
                switch (i) {
                    case 'spinner1':
                        o.html(e);
                        break;
                    case 'spinner2':
                        o.html(l);
                        break;
                    case 'spinner3':
                        o.html(n);
                        break;
                    case 'spinner4':
                        o.html(v);
                        break;
                    case 'spinner5':
                        o.html(a);
                        break;
                    case 'spinner6':
                        o.html(r);
                        break;
                    case 'spinner7':
                        o.html(t);
                        break;
                    default:
                        o.html(e);
                }
                '' != d.imagePath &&
                    o.html(
                        '<div class="fl"><img src="' + d.imagePath + '"></div>',
                    ),
                    s();
            }),
            setTimeout(function () {
                i(o).fadeOut();
            }, d.timeToHide),
            this.css({backgroundColor: d.bgColor, zIndex: d.zIndex})
        );
    }),
        i(window).on('load', function () {
            s(),
                i(window).resize(function () {
                    s();
                });
        });
})(jQuery);

/*========== Mobile Menu ==========*/
!(function (e) {
    'use strict';
    e.fn.meanmenu = function (n) {
        var a = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: 'body',
            meanMenuClose: 'X',
            meanMenuCloseSize: '18px',
            meanMenuOpen: ['<span />', '<span />', '<span />'],
            meanRevealPosition: '',
            meanRevealPositionDistance: '0',
            meanRevealColour: '',
            meanScreenWidth: '480',
            meanNavPush: '',
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: '+',
            meanContract: '-',
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: 'block',
            removeElements: '',
        };
        n = e.extend(a, n);
        var t = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function () {
            var e = n.meanMenuTarget,
                a = n.meanMenuContainer,
                r = n.meanMenuClose,
                i = n.meanMenuCloseSize,
                m = n.meanMenuOpen,
                s = n.meanRevealPosition,
                u = n.meanRevealPositionDistance,
                l = n.meanRevealColour,
                o = n.meanScreenWidth,
                c = n.meanNavPush,
                v = n.meanShowChildren,
                h = n.meanExpandableChildren,
                d = n.meanExpand,
                y = n.meanContract,
                j = n.meanRemoveAttrs,
                Q = n.onePage,
                f = n.meanDisplay,
                g = n.removeElements,
                p = !1;
            (navigator.userAgent.match(/iPhone/i) ||
                navigator.userAgent.match(/iPod/i) ||
                navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/Blackberry/i) ||
                navigator.userAgent.match(/Windows Phone/i)) &&
                (p = !0),
                (navigator.userAgent.match(/MSIE 8/i) ||
                    navigator.userAgent.match(/MSIE 7/i)) &&
                    jQuery('html').css('overflow-y', 'scroll');
            var C = '',
                w = function () {
                    if ('center' === s) {
                        var e =
                            (window.innerWidth ||
                                document.documentElement.clientWidth) /
                                2 -
                            22 +
                            'px';
                        (C = 'left:' + e + ';right:auto;'),
                            p
                                ? jQuery('.meanmenu-reveal').animate({left: e})
                                : jQuery('.meanmenu-reveal').css('left', e);
                    }
                },
                x = !1,
                A = !1;
            'right' === s && (C = 'right:' + u + ';left:auto;'),
                'left' === s && (C = 'left:' + u + ';right:auto;'),
                w();
            var E = '',
                M = function () {
                    jQuery('.mean-bar,.mean-push').remove(),
                        jQuery(a).removeClass('mean-container'),
                        jQuery(e).css('display', f),
                        (x = !1),
                        (A = !1),
                        jQuery(g).removeClass('mean-remove');
                },
                P = function () {
                    var n = 'background:' + l + ';color:' + l + ';' + C;
                    if (t <= o) {
                        jQuery(g).addClass('mean-remove'),
                            (A = !0),
                            jQuery(a).addClass('mean-container'),
                            jQuery('.mean-container').prepend(
                                '<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' +
                                    n +
                                    '">Show Navigation</a><nav class="mean-nav"></nav></div>',
                            );
                        var s = jQuery(e).html();
                        jQuery('.mean-nav').html(s),
                            j &&
                                jQuery(
                                    'nav.mean-nav ul, nav.mean-nav ul *',
                                ).each(function () {
                                    jQuery(this).is('.mean-remove')
                                        ? jQuery(this).attr(
                                              'class',
                                              'mean-remove',
                                          )
                                        : jQuery(this).removeAttr('class'),
                                        jQuery(this).removeAttr('id');
                                }),
                            jQuery(e).before('<div class="mean-push" />'),
                            jQuery('.mean-push').css('margin-top', c),
                            jQuery(e).hide(),
                            jQuery('.meanmenu-reveal').show(),
                            jQuery('.meanmenu-reveal').html(m),
                            (E = jQuery('.meanmenu-reveal')),
                            jQuery('.mean-nav ul').hide(),
                            v
                                ? h
                                    ? (jQuery('.mean-nav ul ul').each(
                                          function () {
                                              jQuery(this).children().length &&
                                                  jQuery(this, 'li:first')
                                                      .parent()
                                                      .append(
                                                          '<a class="mean-expand" href="#" style="font-size: ' +
                                                              i +
                                                              '">' +
                                                              d +
                                                              '</a>',
                                                      );
                                          },
                                      ),
                                      jQuery('.mean-expand').on(
                                          'click',
                                          function (e) {
                                              e.preventDefault(),
                                                  jQuery(this).hasClass(
                                                      'mean-clicked',
                                                  )
                                                      ? (jQuery(this).text(d),
                                                        jQuery(this)
                                                            .prev('ul')
                                                            .slideUp(
                                                                300,
                                                                function () {},
                                                            ))
                                                      : (jQuery(this).text(y),
                                                        jQuery(this)
                                                            .prev('ul')
                                                            .slideDown(
                                                                300,
                                                                function () {},
                                                            )),
                                                  jQuery(this).toggleClass(
                                                      'mean-clicked',
                                                  );
                                          },
                                      ))
                                    : jQuery('.mean-nav ul ul').show()
                                : jQuery('.mean-nav ul ul').hide(),
                            jQuery('.mean-nav ul li')
                                .last()
                                .addClass('mean-last'),
                            E.removeClass('meanclose'),
                            jQuery(E).click(function (e) {
                                e.preventDefault(),
                                    !1 === x
                                        ? (E.css('text-align', 'center'),
                                          E.css('text-indent', '0'),
                                          E.css('font-size', i),
                                          jQuery(
                                              '.mean-nav ul:first',
                                          ).slideDown(),
                                          (x = !0))
                                        : (jQuery(
                                              '.mean-nav ul:first',
                                          ).slideUp(),
                                          (x = !1)),
                                    E.toggleClass('meanclose'),
                                    jQuery(E).is('.meanmenu-reveal.meanclose')
                                        ? E.html(r)
                                        : E.html(m),
                                    jQuery(g).addClass('mean-remove');
                            }),
                            Q &&
                                jQuery('.mean-nav ul > li > a:first-child').on(
                                    'click',
                                    function () {
                                        jQuery('.mean-nav ul:first').slideUp(),
                                            (x = !1),
                                            jQuery(E)
                                                .toggleClass('meanclose')
                                                .html(m);
                                    },
                                );
                    } else M();
                };
            p ||
                jQuery(window).resize(function () {
                    (t =
                        window.innerWidth ||
                        document.documentElement.clientWidth),
                        M(),
                        t <= o ? (P(), w()) : M();
                }),
                jQuery(window).resize(function () {
                    (t =
                        window.innerWidth ||
                        document.documentElement.clientWidth),
                        p
                            ? (w(), t <= o ? !1 === A && P() : M())
                            : (M(), t <= o && (P(), w()));
                }),
                P();
        });
    };
})(jQuery);

/*========== Slick Slider ==========*/
!(function (i) {
    'use strict';
    'function' == typeof define && define.amd
        ? define(['jquery'], i)
        : 'undefined' != typeof exports
        ? (module.exports = i(require('jquery')))
        : i(jQuery);
})(function (i) {
    'use strict';
    var e = window.Slick || {};
    ((e = (function () {
        var e = 0;
        return function (t, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow:
                    '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow:
                    '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: 'slick-dots',
                draggable: !0,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = 'hidden'),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = 'visibilitychange'),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(t).data('slick') || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden
                    ? ((n.hidden = 'mozHidden'),
                      (n.visibilityChange = 'mozvisibilitychange'))
                    : void 0 !== document.webkitHidden &&
                      ((n.hidden = 'webkitHidden'),
                      (n.visibilityChange = 'webkitvisibilitychange')),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = e++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack
            .find('.slick-active')
            .attr({'aria-hidden': 'false'})
            .find('a, input, button, select')
            .attr({tabindex: '0'});
    }),
        (e.prototype.addSlide = e.prototype.slickAdd =
            function (e, t, o) {
                var s = this;
                if ('boolean' == typeof t) (o = t), (t = null);
                else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(),
                    'number' == typeof t
                        ? 0 === t && 0 === s.$slides.length
                            ? i(e).appendTo(s.$slideTrack)
                            : o
                            ? i(e).insertBefore(s.$slides.eq(t))
                            : i(e).insertAfter(s.$slides.eq(t))
                        : !0 === o
                        ? i(e).prependTo(s.$slideTrack)
                        : i(e).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (e, t) {
                        i(t).attr('data-slick-index', e);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({height: e}, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                        ? s.$slideTrack.animate(
                              {left: e},
                              s.options.speed,
                              s.options.easing,
                              t,
                          )
                        : s.$slideTrack.animate(
                              {top: e},
                              s.options.speed,
                              s.options.easing,
                              t,
                          )
                    : !1 === s.cssTransitions
                    ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                      i({animStart: s.currentLeft}).animate(
                          {animStart: e},
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)),
                                      !1 === s.options.vertical
                                          ? ((o[s.animType] =
                                                'translate(' + i + 'px, 0px)'),
                                            s.$slideTrack.css(o))
                                          : ((o[s.animType] =
                                                'translate(0px,' + i + 'px)'),
                                            s.$slideTrack.css(o));
                              },
                              complete: function () {
                                  t && t.call();
                              },
                          },
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      !1 === s.options.vertical
                          ? (o[s.animType] =
                                'translate3d(' + e + 'px, 0px, 0px)')
                          : (o[s.animType] =
                                'translate3d(0px,' + e + 'px, 0px)'),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function () {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t &&
                'object' == typeof t &&
                t.each(function () {
                    var t = i(this).slick('getSlick');
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade
                ? (t[e.transitionType] =
                      e.transformType +
                      ' ' +
                      e.options.speed +
                      'ms ' +
                      e.options.cssEase)
                : (t[e.transitionType] =
                      'opacity ' + e.options.speed + 'ms ' + e.options.cssEase),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                    (i.autoPlayTimer = setInterval(
                        i.autoPlayIterator,
                        i.options.autoplaySpeed,
                    ));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction &&
                    i.currentSlide + 1 === i.slideCount - 1
                        ? (i.direction = 0)
                        : 0 === i.direction &&
                          ((e = i.currentSlide - i.options.slidesToScroll),
                          i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass(
                    'slick-arrow',
                )),
                (e.$nextArrow = i(e.options.nextArrow).addClass('slick-arrow')),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow
                          .removeClass('slick-hidden')
                          .removeAttr('aria-hidden tabindex'),
                      e.$nextArrow
                          .removeClass('slick-hidden')
                          .removeAttr('aria-hidden tabindex'),
                      e.htmlExpr.test(e.options.prevArrow) &&
                          e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) &&
                          e.$nextArrow.appendTo(e.options.appendArrows),
                      !0 !== e.options.infinite &&
                          e.$prevArrow
                              .addClass('slick-disabled')
                              .attr('aria-disabled', 'true'))
                    : e.$prevArrow
                          .add(e.$nextArrow)
                          .addClass('slick-hidden')
                          .attr({'aria-disabled': 'true', tabindex: '-1'}));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (
                    o.$slider.addClass('slick-dotted'),
                        t = i('<ul />').addClass(o.options.dotsClass),
                        e = 0;
                    e <= o.getDotCount();
                    e += 1
                )
                    t.append(
                        i('<li />').append(
                            o.options.customPaging.call(this, o, e),
                        ),
                    );
                (o.$dots = t.appendTo(o.options.appendDots)),
                    o.$dots.find('li').first().addClass('slick-active');
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide')),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr('data-slick-index', e)
                        .data('originalStyling', i(t).attr('style') || '');
                }),
                e.$slider.addClass('slick-slider'),
                (e.$slideTrack =
                    0 === e.slideCount
                        ? i('<div class="slick-track"/>').appendTo(e.$slider)
                        : e.$slides
                              .wrapAll('<div class="slick-track"/>')
                              .parent()),
                (e.$list = e.$slideTrack
                    .wrap('<div class="slick-list"/>')
                    .parent()),
                e.$slideTrack.css('opacity', 0),
                (!0 !== e.options.centerMode &&
                    !0 !== e.options.swipeToSlide) ||
                    (e.options.slidesToScroll = 1),
                i('img[data-lazy]', e.$slider)
                    .not('[src]')
                    .addClass('slick-loading'),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    'number' == typeof e.currentSlide ? e.currentSlide : 0,
                ),
                !0 === e.options.draggable && e.$list.addClass('draggable');
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                (n = l.$slider.children()),
                l.options.rows > 1)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                        s = Math.ceil(n.length / r),
                        i = 0;
                    i < s;
                    i++
                ) {
                    var d = document.createElement('div');
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement('div');
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({
                            width: 100 / l.options.slidesPerRow + '%',
                            display: 'inline-block',
                        });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ('window' === r.respondTo
                    ? (n = a)
                    : 'slider' === r.respondTo
                    ? (n = d)
                    : 'min' === r.respondTo && (n = Math.min(a, d)),
                r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                        (!1 === r.originalSettings.mobileFirst
                            ? n < r.breakpoints[o] && (s = r.breakpoints[o])
                            : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          'unslick' === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s],
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          'unslick' === r.breakpointSettings[s]
                              ? r.unslick(s)
                              : ((r.options = i.extend(
                                    {},
                                    r.originalSettings,
                                    r.breakpointSettings[s],
                                )),
                                !0 === e &&
                                    (r.currentSlide = r.options.initialSlide),
                                r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint &&
                      ((r.activeBreakpoint = null),
                      (r.options = r.originalSettings),
                      !0 === e && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e),
                      (l = s)),
                    e || !1 === l || r.$slider.trigger('breakpoint', [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is('a') && e.preventDefault(),
                l.is('li') || (l = l.closest('li')),
                (n = r.slideCount % r.options.slidesToScroll != 0),
                (o = n
                    ? 0
                    : (r.slideCount - r.currentSlide) %
                      r.options.slidesToScroll),
                e.data.message)
            ) {
                case 'previous':
                    (s =
                        0 === o
                            ? r.options.slidesToScroll
                            : r.options.slidesToShow - o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case 'next':
                    (s = 0 === o ? r.options.slidesToScroll : o),
                        r.slideCount > r.options.slidesToShow &&
                            r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case 'index':
                    var d =
                        0 === e.data.index
                            ? 0
                            : e.data.index ||
                              l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger('focus');
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e, t;
            if (
                ((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])
            )
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i('li', e.$dots)
                    .off('click.slick', e.changeSlide)
                    .off('mouseenter.slick', i.proxy(e.interrupt, e, !0))
                    .off('mouseleave.slick', i.proxy(e.interrupt, e, !1)),
                !0 === e.options.accessibility &&
                    e.$dots.off('keydown.slick', e.keyHandler)),
                e.$slider.off('focus.slick blur.slick'),
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow &&
                        e.$prevArrow.off('click.slick', e.changeSlide),
                    e.$nextArrow &&
                        e.$nextArrow.off('click.slick', e.changeSlide),
                    !0 === e.options.accessibility &&
                        (e.$prevArrow &&
                            e.$prevArrow.off('keydown.slick', e.keyHandler),
                        e.$nextArrow &&
                            e.$nextArrow.off('keydown.slick', e.keyHandler))),
                e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
                e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
                e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
                e.$list.off(
                    'touchcancel.slick mouseleave.slick',
                    e.swipeHandler,
                ),
                e.$list.off('click.slick', e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                !0 === e.options.accessibility &&
                    e.$list.off('keydown.slick', e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .off('click.slick', e.selectHandler),
                i(window).off(
                    'orientationchange.slick.slick-' + e.instanceUid,
                    e.orientationChange,
                ),
                i(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
                i('[draggable!=true]', e.$slideTrack).off(
                    'dragstart',
                    e.preventDefault,
                ),
                i(window).off(
                    'load.slick.slick-' + e.instanceUid,
                    e.setPosition,
                );
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
                e.$list.off('mouseleave.slick', i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 1 &&
                ((i = e.$slides.children().children()).removeAttr('style'),
                e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            !1 === this.shouldClick &&
                (i.stopImmediatePropagation(),
                i.stopPropagation(),
                i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i('.slick-cloned', t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow
                        .removeClass('slick-disabled slick-arrow slick-hidden')
                        .removeAttr('aria-hidden aria-disabled tabindex')
                        .css('display', ''),
                    t.htmlExpr.test(t.options.prevArrow) &&
                        t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow
                        .removeClass('slick-disabled slick-arrow slick-hidden')
                        .removeAttr('aria-hidden aria-disabled tabindex')
                        .css('display', ''),
                    t.htmlExpr.test(t.options.nextArrow) &&
                        t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass(
                            'slick-slide slick-active slick-center slick-visible slick-current',
                        )
                        .removeAttr('aria-hidden')
                        .removeAttr('data-slick-index')
                        .each(function () {
                            i(this).attr(
                                'style',
                                i(this).data('originalStyling'),
                            );
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass('slick-slider'),
                t.$slider.removeClass('slick-initialized'),
                t.$slider.removeClass('slick-dotted'),
                (t.unslicked = !0),
                e || t.$slider.trigger('destroy', [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ''),
                !1 === e.options.fade
                    ? e.$slideTrack.css(t)
                    : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({zIndex: t.options.zIndex}),
                  t.$slides
                      .eq(i)
                      .animate(
                          {opacity: 1},
                          t.options.speed,
                          t.options.easing,
                          e,
                      ))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({opacity: 1, zIndex: t.options.zIndex}),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions
                ? e.$slides
                      .eq(i)
                      .animate(
                          {opacity: 0, zIndex: e.options.zIndex - 2},
                          e.options.speed,
                          e.options.easing,
                      )
                : (e.applyTransition(i),
                  e.$slides
                      .eq(i)
                      .css({opacity: 0, zIndex: e.options.zIndex - 2}));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter =
            function (i) {
                var e = this;
                null !== i &&
                    ((e.$slidesCache = e.$slides),
                    e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                    e.reinit());
            }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider
                .off('focus.slick blur.slick')
                .on('focus.slick blur.slick', '*', function (t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function () {
                        e.options.pauseOnFocus &&
                            ((e.focussed = o.is(':focus')), e.autoPlay());
                    }, 0);
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
            function () {
                return this.currentSlide;
            }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount; )
                        ++o,
                            (e = t + i.options.slidesToScroll),
                            (t +=
                                i.options.slidesToScroll <=
                                i.options.slidesToShow
                                    ? i.options.slidesToScroll
                                    : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount; )
                    ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow
                                ? i.options.slidesToScroll
                                : i.options.slidesToShow);
            else
                o =
                    1 +
                    Math.ceil(
                        (i.slideCount - i.options.slidesToShow) /
                            i.options.slidesToScroll,
                    );
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                !0 === n.options.infinite
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset =
                              n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          !0 === n.options.vertical &&
                              !0 === n.options.centerMode &&
                              (2 === n.options.slidesToShow
                                  ? (s = -1.5)
                                  : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll != 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.options.slidesToShow -
                                        (i - n.slideCount)) *
                                    t *
                                    -1))
                              : ((n.slideOffset =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    n.slideWidth *
                                    -1),
                                (r =
                                    (n.slideCount % n.options.slidesToScroll) *
                                    t *
                                    -1))))
                    : i + n.options.slidesToShow > n.slideCount &&
                      ((n.slideOffset =
                          (i + n.options.slidesToShow - n.slideCount) *
                          n.slideWidth),
                      (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                    ((n.slideOffset = 0), (r = 0)),
                !0 === n.options.centerMode &&
                n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset =
                          (n.slideWidth * Math.floor(n.options.slidesToShow)) /
                              2 -
                          (n.slideWidth * n.slideCount) / 2)
                    : !0 === n.options.centerMode && !0 === n.options.infinite
                    ? (n.slideOffset +=
                          n.slideWidth *
                              Math.floor(n.options.slidesToShow / 2) -
                          n.slideWidth)
                    : !0 === n.options.centerMode &&
                      ((n.slideOffset = 0),
                      (n.slideOffset +=
                          n.slideWidth *
                          Math.floor(n.options.slidesToShow / 2))),
                (e =
                    !1 === n.options.vertical
                        ? i * n.slideWidth * -1 + n.slideOffset
                        : i * t * -1 + r),
                !0 === n.options.variableWidth &&
                    ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite
                            ? n.$slideTrack.children('.slick-slide').eq(i)
                            : n.$slideTrack
                                  .children('.slick-slide')
                                  .eq(i + n.options.slidesToShow)),
                    (e =
                        !0 === n.options.rtl
                            ? o[0]
                                ? -1 *
                                  (n.$slideTrack.width() -
                                      o[0].offsetLeft -
                                      o.width())
                                : 0
                            : o[0]
                            ? -1 * o[0].offsetLeft
                            : 0),
                    !0 === n.options.centerMode &&
                        ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            !1 === n.options.infinite
                                ? n.$slideTrack.children('.slick-slide').eq(i)
                                : n.$slideTrack
                                      .children('.slick-slide')
                                      .eq(i + n.options.slidesToShow + 1)),
                        (e =
                            !0 === n.options.rtl
                                ? o[0]
                                    ? -1 *
                                      (n.$slideTrack.width() -
                                          o[0].offsetLeft -
                                          o.width())
                                    : 0
                                : o[0]
                                ? -1 * o[0].offsetLeft
                                : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption =
            function (i) {
                return this.options[i];
            }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (
                !1 === e.options.infinite
                    ? (i = e.slideCount)
                    : ((t = -1 * e.options.slidesToScroll),
                      (o = -1 * e.options.slidesToScroll),
                      (i = 2 * e.slideCount));
                t < i;

            )
                s.push(t),
                    (t = o + e.options.slidesToScroll),
                    (o +=
                        e.options.slidesToScroll <= e.options.slidesToShow
                            ? e.options.slidesToScroll
                            : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o = this;
            return (
                (t =
                    !0 === o.options.centerMode
                        ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
                        : 0),
                !0 === o.options.swipeToSlide
                    ? (o.$slideTrack.find('.slick-slide').each(function (s, n) {
                          if (
                              n.offsetLeft - t + i(n).outerWidth() / 2 >
                              -1 * o.swipeLeft
                          )
                              return (e = n), !1;
                      }),
                      Math.abs(
                          i(e).attr('data-slick-index') - o.currentSlide,
                      ) || 1)
                    : o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo =
            function (i, e) {
                this.changeSlide(
                    {data: {message: 'index', index: parseInt(i)}},
                    e,
                );
            }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass('slick-initialized') ||
                (i(t.$slider).addClass('slick-initialized'),
                t.buildRows(),
                t.buildOut(),
                t.setProps(),
                t.startLoad(),
                t.loadSlider(),
                t.initializeEvents(),
                t.updateArrows(),
                t.updateDots(),
                t.checkResponsive(!0),
                t.focusHandler()),
                e && t.$slider.trigger('init', [t]),
                !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find('.slick-cloned'))
                .attr({'aria-hidden': 'true', tabindex: '-1'})
                .find('a, input, button, select')
                .attr({tabindex: '-1'}),
                null !== e.$dots &&
                    (e.$slides
                        .not(e.$slideTrack.find('.slick-cloned'))
                        .each(function (t) {
                            var s = o.indexOf(t);
                            i(this).attr({
                                role: 'tabpanel',
                                id: 'slick-slide' + e.instanceUid + t,
                                tabindex: -1,
                            }),
                                -1 !== s &&
                                    i(this).attr({
                                        'aria-describedby':
                                            'slick-slide-control' +
                                            e.instanceUid +
                                            s,
                                    });
                        }),
                    e.$dots
                        .attr('role', 'tablist')
                        .find('li')
                        .each(function (s) {
                            var n = o[s];
                            i(this).attr({role: 'presentation'}),
                                i(this)
                                    .find('button')
                                    .first()
                                    .attr({
                                        role: 'tab',
                                        id:
                                            'slick-slide-control' +
                                            e.instanceUid +
                                            s,
                                        'aria-controls':
                                            'slick-slide' + e.instanceUid + n,
                                        'aria-label': s + 1 + ' of ' + t,
                                        'aria-selected': null,
                                        tabindex: '-1',
                                    });
                        })
                        .eq(e.currentSlide)
                        .find('button')
                        .attr({'aria-selected': 'true', tabindex: '0'})
                        .end());
            for (
                var s = e.currentSlide, n = s + e.options.slidesToShow;
                s < n;
                s++
            )
                e.$slides.eq(s).attr('tabindex', 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                    .off('click.slick')
                    .on('click.slick', {message: 'previous'}, i.changeSlide),
                i.$nextArrow
                    .off('click.slick')
                    .on('click.slick', {message: 'next'}, i.changeSlide),
                !0 === i.options.accessibility &&
                    (i.$prevArrow.on('keydown.slick', i.keyHandler),
                    i.$nextArrow.on('keydown.slick', i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots &&
                (i('li', e.$dots).on(
                    'click.slick',
                    {message: 'index'},
                    e.changeSlide,
                ),
                !0 === e.options.accessibility &&
                    e.$dots.on('keydown.slick', e.keyHandler)),
                !0 === e.options.dots &&
                    !0 === e.options.pauseOnDotsHover &&
                    i('li', e.$dots)
                        .on('mouseenter.slick', i.proxy(e.interrupt, e, !0))
                        .on('mouseleave.slick', i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover &&
                (e.$list.on('mouseenter.slick', i.proxy(e.interrupt, e, !0)),
                e.$list.on('mouseleave.slick', i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    'touchstart.slick mousedown.slick',
                    {action: 'start'},
                    e.swipeHandler,
                ),
                e.$list.on(
                    'touchmove.slick mousemove.slick',
                    {action: 'move'},
                    e.swipeHandler,
                ),
                e.$list.on(
                    'touchend.slick mouseup.slick',
                    {action: 'end'},
                    e.swipeHandler,
                ),
                e.$list.on(
                    'touchcancel.slick mouseleave.slick',
                    {action: 'end'},
                    e.swipeHandler,
                ),
                e.$list.on('click.slick', e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                !0 === e.options.accessibility &&
                    e.$list.on('keydown.slick', e.keyHandler),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on('click.slick', e.selectHandler),
                i(window).on(
                    'orientationchange.slick.slick-' + e.instanceUid,
                    i.proxy(e.orientationChange, e),
                ),
                i(window).on(
                    'resize.slick.slick-' + e.instanceUid,
                    i.proxy(e.resize, e),
                ),
                i('[draggable!=true]', e.$slideTrack).on(
                    'dragstart',
                    e.preventDefault,
                ),
                i(window).on(
                    'load.slick.slick-' + e.instanceUid,
                    e.setPosition,
                ),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
                (37 === i.keyCode && !0 === e.options.accessibility
                    ? e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? 'next' : 'previous',
                          },
                      })
                    : 39 === i.keyCode &&
                      !0 === e.options.accessibility &&
                      e.changeSlide({
                          data: {
                              message:
                                  !0 === e.options.rtl ? 'previous' : 'next',
                          },
                      }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i('img[data-lazy]', e).each(function () {
                    var e = i(this),
                        t = i(this).attr('data-lazy'),
                        o = i(this).attr('data-srcset'),
                        s =
                            i(this).attr('data-sizes') ||
                            n.$slider.attr('data-sizes'),
                        r = document.createElement('img');
                    (r.onload = function () {
                        e.animate({opacity: 0}, 100, function () {
                            o && (e.attr('srcset', o), s && e.attr('sizes', s)),
                                e
                                    .attr('src', t)
                                    .animate({opacity: 1}, 200, function () {
                                        e.removeAttr(
                                            'data-lazy data-srcset data-sizes',
                                        ).removeClass('slick-loading');
                                    }),
                                n.$slider.trigger('lazyLoaded', [n, e, t]);
                        });
                    }),
                        (r.onerror = function () {
                            e
                                .removeAttr('data-lazy')
                                .removeClass('slick-loading')
                                .addClass('slick-lazyload-error'),
                                n.$slider.trigger('lazyLoadError', [n, e, t]);
                        }),
                        (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? !0 === n.options.infinite
                        ? (s =
                              (o =
                                  n.currentSlide +
                                  (n.options.slidesToShow / 2 + 1)) +
                              n.options.slidesToShow +
                              2)
                        : ((o = Math.max(
                              0,
                              n.currentSlide - (n.options.slidesToShow / 2 + 1),
                          )),
                          (s =
                              n.options.slidesToShow / 2 +
                              1 +
                              2 +
                              n.currentSlide))
                    : ((o = n.options.infinite
                          ? n.options.slidesToShow + n.currentSlide
                          : n.currentSlide),
                      (s = Math.ceil(o + n.options.slidesToShow)),
                      !0 === n.options.fade &&
                          (o > 0 && o--, s <= n.slideCount && s++)),
                (t = n.$slider.find('.slick-slide').slice(o, s)),
                'anticipated' === n.options.lazyLoad)
            )
                for (
                    var r = o - 1,
                        l = s,
                        d = n.$slider.find('.slick-slide'),
                        a = 0;
                    a < n.options.slidesToScroll;
                    a++
                )
                    r < 0 && (r = n.slideCount - 1),
                        (t = (t = t.add(d.eq(r))).add(d.eq(l))),
                        r--,
                        l++;
            e(t),
                n.slideCount <= n.options.slidesToShow
                    ? e(n.$slider.find('.slick-slide'))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                    ? e(
                          n.$slider
                              .find('.slick-cloned')
                              .slice(0, n.options.slidesToShow),
                      )
                    : 0 === n.currentSlide &&
                      e(
                          n.$slider
                              .find('.slick-cloned')
                              .slice(-1 * n.options.slidesToShow),
                      );
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({opacity: 1}),
                i.$slider.removeClass('slick-loading'),
                i.initUI(),
                'progressive' === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext =
            function () {
                this.changeSlide({data: {message: 'next'}});
            }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause =
            function () {
                var i = this;
                i.autoPlayClear(), (i.paused = !0);
            }),
        (e.prototype.play = e.prototype.slickPlay =
            function () {
                var i = this;
                i.autoPlay(),
                    (i.options.autoplay = !0),
                    (i.paused = !1),
                    (i.focussed = !1),
                    (i.interrupted = !1);
            }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked ||
                (t.$slider.trigger('afterChange', [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                !0 === t.options.accessibility &&
                    (t.initADA(),
                    t.options.focusOnChange &&
                        i(t.$slides.get(t.currentSlide))
                            .attr('tabindex', 0)
                            .focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev =
            function () {
                this.changeSlide({data: {message: 'previous'}});
            }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i('img[data-lazy]', l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr('data-lazy')),
                  (s = t.attr('data-srcset')),
                  (n = t.attr('data-sizes') || l.$slider.attr('data-sizes')),
                  ((r = document.createElement('img')).onload = function () {
                      s && (t.attr('srcset', s), n && t.attr('sizes', n)),
                          t
                              .attr('src', o)
                              .removeAttr('data-lazy data-srcset data-sizes')
                              .removeClass('slick-loading'),
                          !0 === l.options.adaptiveHeight && l.setPosition(),
                          l.$slider.trigger('lazyLoaded', [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      e < 3
                          ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t
                                .removeAttr('data-lazy')
                                .removeClass('slick-loading')
                                .addClass('slick-lazyload-error'),
                            l.$slider.trigger('lazyLoadError', [l, t, o]),
                            l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger('allImagesLoaded', [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite &&
                    s.currentSlide > o &&
                    (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, {currentSlide: t}),
                s.init(),
                e || s.changeSlide({data: {message: 'index', index: t}}, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ('array' === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || 'window';
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; )
                            s.breakpoints[o] &&
                                s.breakpoints[o] === t &&
                                s.breakpoints.splice(o, 1),
                                o--;
                        s.breakpoints.push(t),
                            (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass('slick-slide')),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount &&
                    0 !== e.currentSlide &&
                    (e.currentSlide =
                        e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                !0 === e.options.focusOnSelect &&
                    i(e.$slideTrack)
                        .children()
                        .on('click.slick', e.selectHandler),
                e.setSlideClasses(
                    'number' == typeof e.currentSlide ? e.currentSlide : 0,
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger('reInit', [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                        e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove =
            function (i, e, t) {
                var o = this;
                if (
                    ((i =
                        'boolean' == typeof i
                            ? !0 === (e = i)
                                ? 0
                                : o.slideCount - 1
                            : !0 === e
                            ? --i
                            : i),
                    o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                )
                    return !1;
                o.unload(),
                    !0 === t
                        ? o.$slideTrack.children().remove()
                        : o.$slideTrack
                              .children(this.options.slide)
                              .eq(i)
                              .remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = 'left' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
                (t = 'top' == o.positionProp ? Math.ceil(i) + 'px' : '0px'),
                (s[o.positionProp] = i),
                !1 === o.transformsEnabled
                    ? o.$slideTrack.css(s)
                    : ((s = {}),
                      !1 === o.cssTransitions
                          ? ((s[o.animType] =
                                'translate(' + e + ', ' + t + ')'),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] =
                                'translate3d(' + e + ', ' + t + ', 0px)'),
                            o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            !1 === i.options.vertical
                ? !0 === i.options.centerMode &&
                  i.$list.css({padding: '0px ' + i.options.centerPadding})
                : (i.$list.height(
                      i.$slides.first().outerHeight(!0) *
                          i.options.slidesToShow,
                  ),
                  !0 === i.options.centerMode &&
                      i.$list.css({padding: i.options.centerPadding + ' 0px'})),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                !1 === i.options.vertical && !1 === i.options.variableWidth
                    ? ((i.slideWidth = Math.ceil(
                          i.listWidth / i.options.slidesToShow,
                      )),
                      i.$slideTrack.width(
                          Math.ceil(
                              i.slideWidth *
                                  i.$slideTrack.children('.slick-slide').length,
                          ),
                      ))
                    : !0 === i.options.variableWidth
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)),
                      i.$slideTrack.height(
                          Math.ceil(
                              i.$slides.first().outerHeight(!0) *
                                  i.$slideTrack.children('.slick-slide').length,
                          ),
                      ));
            var e =
                i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth &&
                i.$slideTrack.children('.slick-slide').width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    !0 === t.options.rtl
                        ? i(s).css({
                              position: 'relative',
                              right: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          })
                        : i(s).css({
                              position: 'relative',
                              left: e,
                              top: 0,
                              zIndex: t.options.zIndex - 2,
                              opacity: 0,
                          });
            }),
                t.$slides
                    .eq(t.currentSlide)
                    .css({zIndex: t.options.zIndex - 1, opacity: 1});
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css('height', e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption =
            function () {
                var e,
                    t,
                    o,
                    s,
                    n,
                    r = this,
                    l = !1;
                if (
                    ('object' === i.type(arguments[0])
                        ? ((o = arguments[0]),
                          (l = arguments[1]),
                          (n = 'multiple'))
                        : 'string' === i.type(arguments[0]) &&
                          ((o = arguments[0]),
                          (s = arguments[1]),
                          (l = arguments[2]),
                          'responsive' === arguments[0] &&
                          'array' === i.type(arguments[1])
                              ? (n = 'responsive')
                              : void 0 !== arguments[1] && (n = 'single')),
                    'single' === n)
                )
                    r.options[o] = s;
                else if ('multiple' === n)
                    i.each(o, function (i, e) {
                        r.options[i] = e;
                    });
                else if ('responsive' === n)
                    for (t in s)
                        if ('array' !== i.type(r.options.responsive))
                            r.options.responsive = [s[t]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0; )
                                r.options.responsive[e].breakpoint ===
                                    s[t].breakpoint &&
                                    r.options.responsive.splice(e, 1),
                                    e--;
                            r.options.responsive.push(s[t]);
                        }
                l && (r.unload(), r.reinit());
            }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(),
                i.setHeight(),
                !1 === i.options.fade
                    ? i.setCSS(i.getLeft(i.currentSlide))
                    : i.setFade(),
                i.$slider.trigger('setPosition', [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? 'top' : 'left'),
                'top' === i.positionProp
                    ? i.$slider.addClass('slick-vertical')
                    : i.$slider.removeClass('slick-vertical'),
                (void 0 === e.WebkitTransition &&
                    void 0 === e.MozTransition &&
                    void 0 === e.msTransition) ||
                    (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade &&
                    ('number' == typeof i.options.zIndex
                        ? i.options.zIndex < 3 && (i.options.zIndex = 3)
                        : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform &&
                    ((i.animType = 'OTransform'),
                    (i.transformType = '-o-transform'),
                    (i.transitionType = 'OTransition'),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.MozTransform &&
                    ((i.animType = 'MozTransform'),
                    (i.transformType = '-moz-transform'),
                    (i.transitionType = 'MozTransition'),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.MozPerspective &&
                        (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = 'webkitTransform'),
                    (i.transformType = '-webkit-transform'),
                    (i.transitionType = 'webkitTransition'),
                    void 0 === e.perspectiveProperty &&
                        void 0 === e.webkitPerspective &&
                        (i.animType = !1)),
                void 0 !== e.msTransform &&
                    ((i.animType = 'msTransform'),
                    (i.transformType = '-ms-transform'),
                    (i.transitionType = 'msTransition'),
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform &&
                    !1 !== i.animType &&
                    ((i.animType = 'transform'),
                    (i.transformType = 'transform'),
                    (i.transitionType = 'transition')),
                (i.transformsEnabled =
                    i.options.useTransform &&
                    null !== i.animType &&
                    !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                    .find('.slick-slide')
                    .removeClass('slick-active slick-center slick-current')
                    .attr('aria-hidden', 'true')),
                n.$slides.eq(i).addClass('slick-current'),
                !0 === n.options.centerMode)
            ) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    !0 === n.options.infinite &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass('slick-active')
                                  .attr('aria-hidden', 'false')
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass('slick-active')
                                  .attr('aria-hidden', 'false')),
                        0 === i
                            ? t
                                  .eq(t.length - 1 - n.options.slidesToShow)
                                  .addClass('slick-center')
                            : i === n.slideCount - 1 &&
                              t
                                  .eq(n.options.slidesToShow)
                                  .addClass('slick-center')),
                    n.$slides.eq(i).addClass('slick-center');
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass('slick-active')
                          .attr('aria-hidden', 'false')
                    : t.length <= n.options.slidesToShow
                    ? t.addClass('slick-active').attr('aria-hidden', 'false')
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o =
                          !0 === n.options.infinite
                              ? n.options.slidesToShow + i
                              : i),
                      n.options.slidesToShow == n.options.slidesToScroll &&
                      n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass('slick-active')
                                .attr('aria-hidden', 'false')
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass('slick-active')
                                .attr('aria-hidden', 'false'));
            ('ondemand' !== n.options.lazyLoad &&
                'anticipated' !== n.options.lazyLoad) ||
                n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if (
                (!0 === s.options.fade && (s.options.centerMode = !1),
                !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o =
                        !0 === s.options.centerMode
                            ? s.options.slidesToShow + 1
                            : s.options.slidesToShow,
                        e = s.slideCount;
                    e > s.slideCount - o;
                    e -= 1
                )
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr('id', '')
                            .attr('data-slick-index', t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass('slick-cloned');
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr('id', '')
                            .attr('data-slick-index', t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass('slick-cloned');
                s.$slideTrack
                    .find('.slick-cloned')
                    .find('[id]')
                    .each(function () {
                        i(this).attr('id', '');
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is('.slick-slide')
                    ? i(e.target)
                    : i(e.target).parents('.slick-slide'),
                s = parseInt(o.attr('data-slick-index'));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow
                    ? t.slideHandler(s, !1, !0)
                    : t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1),
                !(
                    (!0 === a.animating && !0 === a.options.waitForAnimate) ||
                    (!0 === a.options.fade && a.currentSlide === i)
                ))
            )
                if (
                    (!1 === e && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    !1 === a.options.infinite &&
                        !1 === a.options.centerMode &&
                        (i < 0 ||
                            i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else if (
                    !1 === a.options.infinite &&
                    !0 === a.options.centerMode &&
                    (i < 0 || i > a.slideCount - a.options.slidesToScroll)
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else {
                    if (
                        (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        (s =
                            o < 0
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? a.slideCount -
                                      (a.slideCount % a.options.slidesToScroll)
                                    : a.slideCount + o
                                : o >= a.slideCount
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? 0
                                    : o - a.slideCount
                                : o),
                        (a.animating = !0),
                        a.$slider.trigger('beforeChange', [
                            a,
                            a.currentSlide,
                            s,
                        ]),
                        (n = a.currentSlide),
                        (a.currentSlide = s),
                        a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor &&
                            (l = (l = a.getNavTarget()).slick('getSlick'))
                                .slideCount <= l.options.slidesToShow &&
                            l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(),
                        !0 === a.options.fade)
                    )
                        return (
                            !0 !== t
                                ? (a.fadeSlideOut(n),
                                  a.fadeSlide(s, function () {
                                      a.postSlide(s);
                                  }))
                                : a.postSlide(s),
                            void a.animateHeight()
                        );
                    !0 !== t
                        ? a.animateSlide(d, function () {
                              a.postSlide(s);
                          })
                        : a.postSlide(s);
                }
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()),
                !0 === i.options.dots &&
                    i.slideCount > i.options.slidesToShow &&
                    i.$dots.hide(),
                i.$slider.addClass('slick-loading');
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 &&
                    (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? !1 === s.options.rtl
                        ? 'left'
                        : 'right'
                    : o <= 360 && o >= 315
                    ? !1 === s.options.rtl
                        ? 'left'
                        : 'right'
                    : o >= 135 && o <= 225
                    ? !1 === s.options.rtl
                        ? 'right'
                        : 'left'
                    : !0 === s.options.verticalSwiping
                    ? o >= 35 && o <= 135
                        ? 'down'
                        : 'up'
                    : 'vertical'
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (!0 === o.touchObject.edgeHit &&
                    o.$slider.trigger('edge', [o, o.swipeDirection()]),
                o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case 'left':
                    case 'down':
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide + o.getSlideCount(),
                              )
                            : o.currentSlide + o.getSlideCount()),
                            (o.currentDirection = 0);
                        break;
                    case 'right':
                    case 'up':
                        (e = o.options.swipeToSlide
                            ? o.checkNavigable(
                                  o.currentSlide - o.getSlideCount(),
                              )
                            : o.currentSlide - o.getSlideCount()),
                            (o.currentDirection = 1);
                }
                'vertical' != t &&
                    (o.slideHandler(e),
                    (o.touchObject = {}),
                    o.$slider.trigger('swipe', [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                    (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (
                !(
                    !1 === e.options.swipe ||
                    ('ontouchend' in document && !1 === e.options.swipe) ||
                    (!1 === e.options.draggable &&
                        -1 !== i.type.indexOf('mouse'))
                )
            )
                switch (
                    ((e.touchObject.fingerCount =
                        i.originalEvent && void 0 !== i.originalEvent.touches
                            ? i.originalEvent.touches.length
                            : 1),
                    (e.touchObject.minSwipe =
                        e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                            e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case 'start':
                        e.swipeStart(i);
                        break;
                    case 'move':
                        e.swipeMove(i);
                        break;
                    case 'end':
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n =
                    void 0 !== i.originalEvent
                        ? i.originalEvent.touches
                        : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX =
                        void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY =
                        void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curX - l.touchObject.startX,
                                2,
                            ),
                        ),
                    )),
                    (r = Math.round(
                        Math.sqrt(
                            Math.pow(
                                l.touchObject.curY - l.touchObject.startY,
                                2,
                            ),
                        ),
                    )),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping &&
                              (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent &&
                              l.touchObject.swipeLength > 4 &&
                              ((l.swiping = !0), i.preventDefault()),
                          (s =
                              (!1 === l.options.rtl ? 1 : -1) *
                              (l.touchObject.curX > l.touchObject.startX
                                  ? 1
                                  : -1)),
                          !0 === l.options.verticalSwiping &&
                              (s =
                                  l.touchObject.curY > l.touchObject.startY
                                      ? 1
                                      : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          !1 === l.options.infinite &&
                              ((0 === l.currentSlide && 'right' === t) ||
                                  (l.currentSlide >= l.getDotCount() &&
                                      'left' === t)) &&
                              ((o =
                                  l.touchObject.swipeLength *
                                  l.options.edgeFriction),
                              (l.touchObject.edgeHit = !0)),
                          !1 === l.options.vertical
                              ? (l.swipeLeft = e + o * s)
                              : (l.swipeLeft =
                                    e +
                                    o * (l.$list.height() / l.listWidth) * s),
                          !0 === l.options.verticalSwiping &&
                              (l.swipeLeft = e + o * s),
                          !0 !== l.options.fade &&
                              !1 !== l.options.touchMove &&
                              (!0 === l.animating
                                  ? ((l.swipeLeft = null), !1)
                                  : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (
                ((t.interrupted = !0),
                1 !== t.touchObject.fingerCount ||
                    t.slideCount <= t.options.slidesToShow)
            )
                return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent &&
                void 0 !== i.originalEvent.touches &&
                (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX =
                    void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY =
                    void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
            function () {
                var i = this;
                null !== i.$slidesCache &&
                    (i.unload(),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slidesCache.appendTo(i.$slideTrack),
                    i.reinit());
            }),
        (e.prototype.unload = function () {
            var e = this;
            i('.slick-cloned', e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                    e.htmlExpr.test(e.options.prevArrow) &&
                    e.$prevArrow.remove(),
                e.$nextArrow &&
                    e.htmlExpr.test(e.options.nextArrow) &&
                    e.$nextArrow.remove(),
                e.$slides
                    .removeClass(
                        'slick-slide slick-active slick-visible slick-current',
                    )
                    .attr('aria-hidden', 'true')
                    .css('width', '');
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger('unslick', [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    !i.options.infinite &&
                    (i.$prevArrow
                        .removeClass('slick-disabled')
                        .attr('aria-disabled', 'false'),
                    i.$nextArrow
                        .removeClass('slick-disabled')
                        .attr('aria-disabled', 'false'),
                    0 === i.currentSlide
                        ? (i.$prevArrow
                              .addClass('slick-disabled')
                              .attr('aria-disabled', 'true'),
                          i.$nextArrow
                              .removeClass('slick-disabled')
                              .attr('aria-disabled', 'false'))
                        : i.currentSlide >=
                              i.slideCount - i.options.slidesToShow &&
                          !1 === i.options.centerMode
                        ? (i.$nextArrow
                              .addClass('slick-disabled')
                              .attr('aria-disabled', 'true'),
                          i.$prevArrow
                              .removeClass('slick-disabled')
                              .attr('aria-disabled', 'false'))
                        : i.currentSlide >= i.slideCount - 1 &&
                          !0 === i.options.centerMode &&
                          (i.$nextArrow
                              .addClass('slick-disabled')
                              .attr('aria-disabled', 'true'),
                          i.$prevArrow
                              .removeClass('slick-disabled')
                              .attr('aria-disabled', 'false')));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find('li').removeClass('slick-active').end(),
                i.$dots
                    .find('li')
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass('slick-active'));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay &&
                (document[i.hidden]
                    ? (i.interrupted = !0)
                    : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ('object' == typeof s || void 0 === s
                        ? (o[i].slick = new e(o[i], s))
                        : (t = o[i].slick[s].apply(o[i].slick, n)),
                    void 0 !== t)
                )
                    return t;
            return o;
        });
});

/*========== jQuery Countdown ==========*/
/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
    'use strict';
    'function' == typeof define && define.amd
        ? define(['jquery'], a)
        : a(jQuery);
})(function (a) {
    'use strict';
    function b(a) {
        if (a instanceof Date) return a;
        if (String(a).match(g))
            return (
                String(a).match(/^[0-9]*$/) && (a = Number(a)),
                String(a).match(/\-/) && (a = String(a).replace(/\-/g, '/')),
                new Date(a)
            );
        throw new Error("Couldn't cast `" + a + '` to a date object.');
    }
    function c(a) {
        var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
        return new RegExp(b);
    }
    function d(a) {
        return function (b) {
            var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (d)
                for (var f = 0, g = d.length; f < g; ++f) {
                    var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        j = c(h[0]),
                        k = h[1] || '',
                        l = h[3] || '',
                        m = null;
                    (h = h[2]),
                        i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))),
                        null !== m &&
                            ('!' === k && (m = e(l, m)),
                            '' === k && m < 10 && (m = '0' + m.toString()),
                            (b = b.replace(j, m.toString())));
                }
            return (b = b.replace(/%%/, '%'));
        };
    }
    function e(a, b) {
        var c = 's',
            d = '';
        return (
            a &&
                ((a = a.replace(/(:|;|\s)/gi, '').split(/\,/)),
                1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))),
            Math.abs(b) > 1 ? c : d
        );
    }
    var f = [],
        g = [],
        h = {precision: 100, elapse: !1, defer: !1};
    g.push(/^[0-9]*$/.source),
        g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
        g.push(
            /[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source,
        ),
        (g = new RegExp(g.join('|')));
    var i = {
            Y: 'years',
            m: 'months',
            n: 'daysToMonth',
            d: 'daysToWeek',
            w: 'weeks',
            W: 'weeksToMonth',
            H: 'hours',
            M: 'minutes',
            S: 'seconds',
            D: 'totalDays',
            I: 'totalHours',
            N: 'totalMinutes',
            T: 'totalSeconds',
        },
        j = function (b, c, d) {
            (this.el = b),
                (this.$el = a(b)),
                (this.interval = null),
                (this.offset = {}),
                (this.options = a.extend({}, h)),
                (this.instanceNumber = f.length),
                f.push(this),
                this.$el.data('countdown-instance', this.instanceNumber),
                d &&
                    ('function' == typeof d
                        ? (this.$el.on('update.countdown', d),
                          this.$el.on('stoped.countdown', d),
                          this.$el.on('finish.countdown', d))
                        : (this.options = a.extend({}, h, d))),
                this.setFinalDate(c),
                this.options.defer === !1 && this.start();
        };
    a.extend(j.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var a = this;
            this.update(),
                (this.interval = setInterval(function () {
                    a.update.call(a);
                }, this.options.precision));
        },
        stop: function () {
            clearInterval(this.interval),
                (this.interval = null),
                this.dispatchEvent('stoped');
        },
        toggle: function () {
            this.interval ? this.stop() : this.start();
        },
        pause: function () {
            this.stop();
        },
        resume: function () {
            this.start();
        },
        remove: function () {
            this.stop.call(this),
                (f[this.instanceNumber] = null),
                delete this.$el.data().countdownInstance;
        },
        setFinalDate: function (a) {
            this.finalDate = b(a);
        },
        update: function () {
            if (0 === this.$el.closest('html').length)
                return void this.remove();
            var b,
                c = void 0 !== a._data(this.el, 'events'),
                d = new Date();
            (b = this.finalDate.getTime() - d.getTime()),
                (b = Math.ceil(b / 1e3)),
                (b = !this.options.elapse && b < 0 ? 0 : Math.abs(b)),
                this.totalSecsLeft !== b &&
                    c &&
                    ((this.totalSecsLeft = b),
                    (this.elapsed = d >= this.finalDate),
                    (this.offset = {
                        seconds: this.totalSecsLeft % 60,
                        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToWeek:
                            Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                        daysToMonth: Math.floor(
                            (this.totalSecsLeft / 60 / 60 / 24) % 30.4368,
                        ),
                        weeks: Math.floor(
                            this.totalSecsLeft / 60 / 60 / 24 / 7,
                        ),
                        weeksToMonth:
                            Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) %
                            4,
                        months: Math.floor(
                            this.totalSecsLeft / 60 / 60 / 24 / 30.4368,
                        ),
                        years: Math.abs(
                            this.finalDate.getFullYear() - d.getFullYear(),
                        ),
                        totalDays: Math.floor(
                            this.totalSecsLeft / 60 / 60 / 24,
                        ),
                        totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                        totalMinutes: Math.floor(this.totalSecsLeft / 60),
                        totalSeconds: this.totalSecsLeft,
                    }),
                    this.options.elapse || 0 !== this.totalSecsLeft
                        ? this.dispatchEvent('update')
                        : (this.stop(), this.dispatchEvent('finish')));
        },
        dispatchEvent: function (b) {
            var c = a.Event(b + '.countdown');
            (c.finalDate = this.finalDate),
                (c.elapsed = this.elapsed),
                (c.offset = a.extend({}, this.offset)),
                (c.strftime = d(this.offset)),
                this.$el.trigger(c);
        },
    }),
        (a.fn.countdown = function () {
            var b = Array.prototype.slice.call(arguments, 0);
            return this.each(function () {
                var c = a(this).data('countdown-instance');
                if (void 0 !== c) {
                    var d = f[c],
                        e = b[0];
                    j.prototype.hasOwnProperty(e)
                        ? d[e].apply(d, b.slice(1))
                        : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)
                        ? (d.setFinalDate.call(d, e), d.start())
                        : a.error(
                              'Method %s does not exist on jQuery.countdown'.replace(
                                  /\%s/gi,
                                  e,
                              ),
                          );
                } else new j(this, b[0], b[1]);
            });
        });
});

/*========== Lightgallery jQuery Plugin ==========*/
/*! lightgallery - v1.6.10 - 2018-05-01
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2018 Sachin N; Licensed GPLv3 */
!(function (a, b) {
    'function' == typeof define && define.amd
        ? define(['jquery'], function (a) {
              return b(a);
          })
        : 'object' == typeof module && module.exports
        ? (module.exports = b(require('jquery')))
        : b(a.jQuery);
})(this, function (a) {
    !(function () {
        'use strict';
        function b(b, d) {
            if (
                ((this.el = b),
                (this.$el = a(b)),
                (this.s = a.extend({}, c, d)),
                this.s.dynamic &&
                    'undefined' !== this.s.dynamicEl &&
                    this.s.dynamicEl.constructor === Array &&
                    !this.s.dynamicEl.length)
            )
                throw 'When using dynamic mode, you must also define dynamicEl as an Array.';
            return (
                (this.modules = {}),
                (this.lGalleryOn = !1),
                (this.lgBusy = !1),
                (this.hideBartimeout = !1),
                (this.isTouch = 'ontouchstart' in document.documentElement),
                this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
                this.s.dynamic
                    ? (this.$items = this.s.dynamicEl)
                    : 'this' === this.s.selector
                    ? (this.$items = this.$el)
                    : '' !== this.s.selector
                    ? this.s.selectWithin
                        ? (this.$items = a(this.s.selectWithin).find(
                              this.s.selector,
                          ))
                        : (this.$items = this.$el.find(a(this.s.selector)))
                    : (this.$items = this.$el.children()),
                (this.$slide = ''),
                (this.$outer = ''),
                this.init(),
                this
            );
        }
        var c = {
            mode: 'lg-slide',
            cssEasing: 'ease',
            easing: 'linear',
            speed: 600,
            height: '100%',
            width: '100%',
            addClass: '',
            startClass: 'lg-start-zoom',
            backdropDuration: 150,
            hideBarsDelay: 6e3,
            useLeft: !1,
            closable: !0,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimatoin: !0,
            hideControlOnEnd: !1,
            mousewheel: !0,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: '.lg-sub-html',
            subHtmlSelectorRelative: !1,
            preload: 1,
            showAfterLoad: !0,
            selector: '',
            selectWithin: '',
            nextHtml: '',
            prevHtml: '',
            index: !1,
            iframeMaxWidth: '100%',
            download: !0,
            counter: !0,
            appendCounterTo: '.lg-toolbar',
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            galleryId: 1,
        };
        (b.prototype.init = function () {
            var b = this;
            b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
            var c = window.location.hash;
            c.indexOf('lg=' + this.s.galleryId) > 0 &&
                ((b.index = parseInt(c.split('&slide=')[1], 10)),
                a('body').addClass('lg-from-hash'),
                a('body').hasClass('lg-on') ||
                    (setTimeout(function () {
                        b.build(b.index);
                    }),
                    a('body').addClass('lg-on'))),
                b.s.dynamic
                    ? (b.$el.trigger('onBeforeOpen.lg'),
                      (b.index = b.s.index || 0),
                      a('body').hasClass('lg-on') ||
                          setTimeout(function () {
                              b.build(b.index), a('body').addClass('lg-on');
                          }))
                    : b.$items.on('click.lgcustom', function (c) {
                          try {
                              c.preventDefault(), c.preventDefault();
                          } catch (a) {
                              c.returnValue = !1;
                          }
                          b.$el.trigger('onBeforeOpen.lg'),
                              (b.index = b.s.index || b.$items.index(this)),
                              a('body').hasClass('lg-on') ||
                                  (b.build(b.index),
                                  a('body').addClass('lg-on'));
                      });
        }),
            (b.prototype.build = function (b) {
                var c = this;
                c.structure(),
                    a.each(a.fn.lightGallery.modules, function (b) {
                        c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
                    }),
                    c.slide(b, !1, !1, !1),
                    c.s.keyPress && c.keyPress(),
                    c.$items.length > 1
                        ? (c.arrow(),
                          setTimeout(function () {
                              c.enableDrag(), c.enableSwipe();
                          }, 50),
                          c.s.mousewheel && c.mousewheel())
                        : c.$slide.on('click.lg', function () {
                              c.$el.trigger('onSlideClick.lg');
                          }),
                    c.counter(),
                    c.closeGallery(),
                    c.$el.trigger('onAfterOpen.lg'),
                    c.$outer.on(
                        'mousemove.lg click.lg touchstart.lg',
                        function () {
                            c.$outer.removeClass('lg-hide-items'),
                                clearTimeout(c.hideBartimeout),
                                (c.hideBartimeout = setTimeout(function () {
                                    c.$outer.addClass('lg-hide-items');
                                }, c.s.hideBarsDelay));
                        },
                    ),
                    c.$outer.trigger('mousemove.lg');
            }),
            (b.prototype.structure = function () {
                var b,
                    c = '',
                    d = '',
                    e = 0,
                    f = '',
                    g = this;
                for (
                    a('body').append('<div class="lg-backdrop"></div>'),
                        a('.lg-backdrop').css(
                            'transition-duration',
                            this.s.backdropDuration + 'ms',
                        ),
                        e = 0;
                    e < this.$items.length;
                    e++
                )
                    c += '<div class="lg-item"></div>';
                if (
                    (this.s.controls &&
                        this.$items.length > 1 &&
                        (d =
                            '<div class="lg-actions"><button class="lg-prev lg-icon">' +
                            this.s.prevHtml +
                            '</button><button class="lg-next lg-icon">' +
                            this.s.nextHtml +
                            '</button></div>'),
                    '.lg-sub-html' === this.s.appendSubHtmlTo &&
                        (f = '<div class="lg-sub-html"></div>'),
                    (b =
                        '<div class="lg-outer ' +
                        this.s.addClass +
                        ' ' +
                        this.s.startClass +
                        '"><div class="lg" style="width:' +
                        this.s.width +
                        '; height:' +
                        this.s.height +
                        '"><div class="lg-inner">' +
                        c +
                        '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' +
                        d +
                        f +
                        '</div></div>'),
                    a('body').append(b),
                    (this.$outer = a('.lg-outer')),
                    (this.$slide = this.$outer.find('.lg-item')),
                    this.s.useLeft
                        ? (this.$outer.addClass('lg-use-left'),
                          (this.s.mode = 'lg-slide'))
                        : this.$outer.addClass('lg-use-css3'),
                    g.setTop(),
                    a(window).on('resize.lg orientationchange.lg', function () {
                        setTimeout(function () {
                            g.setTop();
                        }, 100);
                    }),
                    this.$slide.eq(this.index).addClass('lg-current'),
                    this.doCss()
                        ? this.$outer.addClass('lg-css3')
                        : (this.$outer.addClass('lg-css'), (this.s.speed = 0)),
                    this.$outer.addClass(this.s.mode),
                    this.s.enableDrag &&
                        this.$items.length > 1 &&
                        this.$outer.addClass('lg-grab'),
                    this.s.showAfterLoad &&
                        this.$outer.addClass('lg-show-after-load'),
                    this.doCss())
                ) {
                    var h = this.$outer.find('.lg-inner');
                    h.css('transition-timing-function', this.s.cssEasing),
                        h.css('transition-duration', this.s.speed + 'ms');
                }
                setTimeout(function () {
                    a('.lg-backdrop').addClass('in');
                }),
                    setTimeout(function () {
                        g.$outer.addClass('lg-visible');
                    }, this.s.backdropDuration),
                    this.s.download &&
                        this.$outer
                            .find('.lg-toolbar')
                            .append(
                                '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>',
                            ),
                    (this.prevScrollTop = a(window).scrollTop());
            }),
            (b.prototype.setTop = function () {
                if ('100%' !== this.s.height) {
                    var b = a(window).height(),
                        c = (b - parseInt(this.s.height, 10)) / 2,
                        d = this.$outer.find('.lg');
                    b >= parseInt(this.s.height, 10)
                        ? d.css('top', c + 'px')
                        : d.css('top', '0px');
                }
            }),
            (b.prototype.doCss = function () {
                return !!(function () {
                    var a = [
                            'transition',
                            'MozTransition',
                            'WebkitTransition',
                            'OTransition',
                            'msTransition',
                            'KhtmlTransition',
                        ],
                        b = document.documentElement,
                        c = 0;
                    for (c = 0; c < a.length; c++)
                        if (a[c] in b.style) return !0;
                })();
            }),
            (b.prototype.isVideo = function (a, b) {
                var c;
                if (
                    ((c = this.s.dynamic
                        ? this.s.dynamicEl[b].html
                        : this.$items.eq(b).attr('data-html')),
                    !a)
                )
                    return c
                        ? {html5: !0}
                        : (console.error(
                              'lightGallery :- data-src is not pvovided on slide item ' +
                                  (b + 1) +
                                  '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html',
                          ),
                          !1);
                var d = a.match(
                        /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i,
                    ),
                    e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                    f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                    g = a.match(
                        /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i,
                    );
                return d
                    ? {youtube: d}
                    : e
                    ? {vimeo: e}
                    : f
                    ? {dailymotion: f}
                    : g
                    ? {vk: g}
                    : void 0;
            }),
            (b.prototype.counter = function () {
                this.s.counter &&
                    a(this.s.appendCounterTo).append(
                        '<div id="lg-counter"><span id="lg-counter-current">' +
                            (parseInt(this.index, 10) + 1) +
                            '</span> / <span id="lg-counter-all">' +
                            this.$items.length +
                            '</span></div>',
                    );
            }),
            (b.prototype.addHtml = function (b) {
                var c,
                    d,
                    e = null;
                if (
                    (this.s.dynamic
                        ? this.s.dynamicEl[b].subHtmlUrl
                            ? (c = this.s.dynamicEl[b].subHtmlUrl)
                            : (e = this.s.dynamicEl[b].subHtml)
                        : ((d = this.$items.eq(b)),
                          d.attr('data-sub-html-url')
                              ? (c = d.attr('data-sub-html-url'))
                              : ((e = d.attr('data-sub-html')),
                                this.s.getCaptionFromTitleOrAlt &&
                                    !e &&
                                    (e =
                                        d.attr('title') ||
                                        d.find('img').first().attr('alt')))),
                    !c)
                )
                    if (void 0 !== e && null !== e) {
                        var f = e.substring(0, 1);
                        ('.' !== f && '#' !== f) ||
                            (e =
                                this.s.subHtmlSelectorRelative &&
                                !this.s.dynamic
                                    ? d.find(e).html()
                                    : a(e).html());
                    } else e = '';
                '.lg-sub-html' === this.s.appendSubHtmlTo
                    ? c
                        ? this.$outer.find(this.s.appendSubHtmlTo).load(c)
                        : this.$outer.find(this.s.appendSubHtmlTo).html(e)
                    : c
                    ? this.$slide.eq(b).load(c)
                    : this.$slide.eq(b).append(e),
                    void 0 !== e &&
                        null !== e &&
                        ('' === e
                            ? this.$outer
                                  .find(this.s.appendSubHtmlTo)
                                  .addClass('lg-empty-html')
                            : this.$outer
                                  .find(this.s.appendSubHtmlTo)
                                  .removeClass('lg-empty-html')),
                    this.$el.trigger('onAfterAppendSubHtml.lg', [b]);
            }),
            (b.prototype.preload = function (a) {
                var b = 1,
                    c = 1;
                for (
                    b = 1;
                    b <= this.s.preload && !(b >= this.$items.length - a);
                    b++
                )
                    this.loadContent(a + b, !1, 0);
                for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
                    this.loadContent(a - c, !1, 0);
            }),
            (b.prototype.loadContent = function (b, c, d) {
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = this,
                    l = !1,
                    m = function (b) {
                        for (var c = [], d = [], e = 0; e < b.length; e++) {
                            var g = b[e].split(' ');
                            '' === g[0] && g.splice(0, 1),
                                d.push(g[0]),
                                c.push(g[1]);
                        }
                        for (
                            var h = a(window).width(), i = 0;
                            i < c.length;
                            i++
                        )
                            if (parseInt(c[i], 10) > h) {
                                f = d[i];
                                break;
                            }
                    };
                if (k.s.dynamic) {
                    if (
                        (k.s.dynamicEl[b].poster &&
                            ((l = !0), (g = k.s.dynamicEl[b].poster)),
                        (j = k.s.dynamicEl[b].html),
                        (f = k.s.dynamicEl[b].src),
                        k.s.dynamicEl[b].responsive)
                    ) {
                        m(k.s.dynamicEl[b].responsive.split(','));
                    }
                    (h = k.s.dynamicEl[b].srcset), (i = k.s.dynamicEl[b].sizes);
                } else {
                    if (
                        (k.$items.eq(b).attr('data-poster') &&
                            ((l = !0),
                            (g = k.$items.eq(b).attr('data-poster'))),
                        (j = k.$items.eq(b).attr('data-html')),
                        (f =
                            k.$items.eq(b).attr('href') ||
                            k.$items.eq(b).attr('data-src')),
                        k.$items.eq(b).attr('data-responsive'))
                    ) {
                        m(k.$items.eq(b).attr('data-responsive').split(','));
                    }
                    (h = k.$items.eq(b).attr('data-srcset')),
                        (i = k.$items.eq(b).attr('data-sizes'));
                }
                var n = !1;
                k.s.dynamic
                    ? k.s.dynamicEl[b].iframe && (n = !0)
                    : 'true' === k.$items.eq(b).attr('data-iframe') && (n = !0);
                var o = k.isVideo(f, b);
                if (!k.$slide.eq(b).hasClass('lg-loaded')) {
                    if (n)
                        k.$slide
                            .eq(b)
                            .prepend(
                                '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                                    k.s.iframeMaxWidth +
                                    '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                                    f +
                                    '"  allowfullscreen="true"></iframe></div></div>',
                            );
                    else if (l) {
                        var p = '';
                        (p =
                            o && o.youtube
                                ? 'lg-has-youtube'
                                : o && o.vimeo
                                ? 'lg-has-vimeo'
                                : 'lg-has-html5'),
                            k.$slide
                                .eq(b)
                                .prepend(
                                    '<div class="lg-video-cont ' +
                                        p +
                                        ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                                        g +
                                        '" /></div></div>',
                                );
                    } else
                        o
                            ? (k.$slide
                                  .eq(b)
                                  .prepend(
                                      '<div class="lg-video-cont "><div class="lg-video"></div></div>',
                                  ),
                              k.$el.trigger('hasVideo.lg', [b, f, j]))
                            : k.$slide
                                  .eq(b)
                                  .prepend(
                                      '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                                          f +
                                          '" /></div>',
                                  );
                    if (
                        (k.$el.trigger('onAferAppendSlide.lg', [b]),
                        (e = k.$slide.eq(b).find('.lg-object')),
                        i && e.attr('sizes', i),
                        h)
                    ) {
                        e.attr('srcset', h);
                        try {
                            picturefill({elements: [e[0]]});
                        } catch (a) {
                            console.warn(
                                'lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.',
                            );
                        }
                    }
                    '.lg-sub-html' !== this.s.appendSubHtmlTo && k.addHtml(b),
                        k.$slide.eq(b).addClass('lg-loaded');
                }
                k.$slide
                    .eq(b)
                    .find('.lg-object')
                    .on('load.lg error.lg', function () {
                        var c = 0;
                        d && !a('body').hasClass('lg-from-hash') && (c = d),
                            setTimeout(function () {
                                k.$slide.eq(b).addClass('lg-complete'),
                                    k.$el.trigger('onSlideItemLoad.lg', [
                                        b,
                                        d || 0,
                                    ]);
                            }, c);
                    }),
                    o &&
                        o.html5 &&
                        !l &&
                        k.$slide.eq(b).addClass('lg-complete'),
                    !0 === c &&
                        (k.$slide.eq(b).hasClass('lg-complete')
                            ? k.preload(b)
                            : k.$slide
                                  .eq(b)
                                  .find('.lg-object')
                                  .on('load.lg error.lg', function () {
                                      k.preload(b);
                                  }));
            }),
            (b.prototype.slide = function (b, c, d, e) {
                var f = this.$outer.find('.lg-current').index(),
                    g = this;
                if (!g.lGalleryOn || f !== b) {
                    var h = this.$slide.length,
                        i = g.lGalleryOn ? this.s.speed : 0;
                    if (!g.lgBusy) {
                        if (this.s.download) {
                            var j;
                            (j = g.s.dynamic
                                ? !1 !== g.s.dynamicEl[b].downloadUrl &&
                                  (g.s.dynamicEl[b].downloadUrl ||
                                      g.s.dynamicEl[b].src)
                                : 'false' !==
                                      g.$items
                                          .eq(b)
                                          .attr('data-download-url') &&
                                  (g.$items.eq(b).attr('data-download-url') ||
                                      g.$items.eq(b).attr('href') ||
                                      g.$items.eq(b).attr('data-src'))),
                                j
                                    ? (a('#lg-download').attr('href', j),
                                      g.$outer.removeClass('lg-hide-download'))
                                    : g.$outer.addClass('lg-hide-download');
                        }
                        if (
                            (this.$el.trigger('onBeforeSlide.lg', [f, b, c, d]),
                            (g.lgBusy = !0),
                            clearTimeout(g.hideBartimeout),
                            '.lg-sub-html' === this.s.appendSubHtmlTo &&
                                setTimeout(function () {
                                    g.addHtml(b);
                                }, i),
                            this.arrowDisable(b),
                            e || (b < f ? (e = 'prev') : b > f && (e = 'next')),
                            c)
                        ) {
                            this.$slide.removeClass(
                                'lg-prev-slide lg-current lg-next-slide',
                            );
                            var k, l;
                            h > 2
                                ? ((k = b - 1),
                                  (l = b + 1),
                                  0 === b && f === h - 1
                                      ? ((l = 0), (k = h - 1))
                                      : b === h - 1 &&
                                        0 === f &&
                                        ((l = 0), (k = h - 1)))
                                : ((k = 0), (l = 1)),
                                'prev' === e
                                    ? g.$slide.eq(l).addClass('lg-next-slide')
                                    : g.$slide.eq(k).addClass('lg-prev-slide'),
                                g.$slide.eq(b).addClass('lg-current');
                        } else
                            g.$outer.addClass('lg-no-trans'),
                                this.$slide.removeClass(
                                    'lg-prev-slide lg-next-slide',
                                ),
                                'prev' === e
                                    ? (this.$slide
                                          .eq(b)
                                          .addClass('lg-prev-slide'),
                                      this.$slide
                                          .eq(f)
                                          .addClass('lg-next-slide'))
                                    : (this.$slide
                                          .eq(b)
                                          .addClass('lg-next-slide'),
                                      this.$slide
                                          .eq(f)
                                          .addClass('lg-prev-slide')),
                                setTimeout(function () {
                                    g.$slide.removeClass('lg-current'),
                                        g.$slide.eq(b).addClass('lg-current'),
                                        g.$outer.removeClass('lg-no-trans');
                                }, 50);
                        g.lGalleryOn
                            ? (setTimeout(function () {
                                  g.loadContent(b, !0, 0);
                              }, this.s.speed + 50),
                              setTimeout(function () {
                                  (g.lgBusy = !1),
                                      g.$el.trigger('onAfterSlide.lg', [
                                          f,
                                          b,
                                          c,
                                          d,
                                      ]);
                              }, this.s.speed))
                            : (g.loadContent(b, !0, g.s.backdropDuration),
                              (g.lgBusy = !1),
                              g.$el.trigger('onAfterSlide.lg', [f, b, c, d])),
                            (g.lGalleryOn = !0),
                            this.s.counter &&
                                a('#lg-counter-current').text(b + 1);
                    }
                    g.index = b;
                }
            }),
            (b.prototype.goToNextSlide = function (a) {
                var b = this,
                    c = b.s.loop;
                a && b.$slide.length < 3 && (c = !1),
                    b.lgBusy ||
                        (b.index + 1 < b.$slide.length
                            ? (b.index++,
                              b.$el.trigger('onBeforeNextSlide.lg', [b.index]),
                              b.slide(b.index, a, !1, 'next'))
                            : c
                            ? ((b.index = 0),
                              b.$el.trigger('onBeforeNextSlide.lg', [b.index]),
                              b.slide(b.index, a, !1, 'next'))
                            : b.s.slideEndAnimatoin &&
                              !a &&
                              (b.$outer.addClass('lg-right-end'),
                              setTimeout(function () {
                                  b.$outer.removeClass('lg-right-end');
                              }, 400)));
            }),
            (b.prototype.goToPrevSlide = function (a) {
                var b = this,
                    c = b.s.loop;
                a && b.$slide.length < 3 && (c = !1),
                    b.lgBusy ||
                        (b.index > 0
                            ? (b.index--,
                              b.$el.trigger('onBeforePrevSlide.lg', [
                                  b.index,
                                  a,
                              ]),
                              b.slide(b.index, a, !1, 'prev'))
                            : c
                            ? ((b.index = b.$items.length - 1),
                              b.$el.trigger('onBeforePrevSlide.lg', [
                                  b.index,
                                  a,
                              ]),
                              b.slide(b.index, a, !1, 'prev'))
                            : b.s.slideEndAnimatoin &&
                              !a &&
                              (b.$outer.addClass('lg-left-end'),
                              setTimeout(function () {
                                  b.$outer.removeClass('lg-left-end');
                              }, 400)));
            }),
            (b.prototype.keyPress = function () {
                var b = this;
                this.$items.length > 1 &&
                    a(window).on('keyup.lg', function (a) {
                        b.$items.length > 1 &&
                            (37 === a.keyCode &&
                                (a.preventDefault(), b.goToPrevSlide()),
                            39 === a.keyCode &&
                                (a.preventDefault(), b.goToNextSlide()));
                    }),
                    a(window).on('keydown.lg', function (a) {
                        !0 === b.s.escKey &&
                            27 === a.keyCode &&
                            (a.preventDefault(),
                            b.$outer.hasClass('lg-thumb-open')
                                ? b.$outer.removeClass('lg-thumb-open')
                                : b.destroy());
                    });
            }),
            (b.prototype.arrow = function () {
                var a = this;
                this.$outer.find('.lg-prev').on('click.lg', function () {
                    a.goToPrevSlide();
                }),
                    this.$outer.find('.lg-next').on('click.lg', function () {
                        a.goToNextSlide();
                    });
            }),
            (b.prototype.arrowDisable = function (a) {
                !this.s.loop &&
                    this.s.hideControlOnEnd &&
                    (a + 1 < this.$slide.length
                        ? this.$outer
                              .find('.lg-next')
                              .removeAttr('disabled')
                              .removeClass('disabled')
                        : this.$outer
                              .find('.lg-next')
                              .attr('disabled', 'disabled')
                              .addClass('disabled'),
                    a > 0
                        ? this.$outer
                              .find('.lg-prev')
                              .removeAttr('disabled')
                              .removeClass('disabled')
                        : this.$outer
                              .find('.lg-prev')
                              .attr('disabled', 'disabled')
                              .addClass('disabled'));
            }),
            (b.prototype.setTranslate = function (a, b, c) {
                this.s.useLeft
                    ? a.css('left', b)
                    : a.css({
                          transform:
                              'translate3d(' + b + 'px, ' + c + 'px, 0px)',
                      });
            }),
            (b.prototype.touchMove = function (b, c) {
                var d = c - b;
                Math.abs(d) > 15 &&
                    (this.$outer.addClass('lg-dragging'),
                    this.setTranslate(this.$slide.eq(this.index), d, 0),
                    this.setTranslate(
                        a('.lg-prev-slide'),
                        -this.$slide.eq(this.index).width() + d,
                        0,
                    ),
                    this.setTranslate(
                        a('.lg-next-slide'),
                        this.$slide.eq(this.index).width() + d,
                        0,
                    ));
            }),
            (b.prototype.touchEnd = function (a) {
                var b = this;
                'lg-slide' !== b.s.mode && b.$outer.addClass('lg-slide'),
                    this.$slide
                        .not('.lg-current, .lg-prev-slide, .lg-next-slide')
                        .css('opacity', '0'),
                    setTimeout(function () {
                        b.$outer.removeClass('lg-dragging'),
                            a < 0 && Math.abs(a) > b.s.swipeThreshold
                                ? b.goToNextSlide(!0)
                                : a > 0 && Math.abs(a) > b.s.swipeThreshold
                                ? b.goToPrevSlide(!0)
                                : Math.abs(a) < 5 &&
                                  b.$el.trigger('onSlideClick.lg'),
                            b.$slide.removeAttr('style');
                    }),
                    setTimeout(function () {
                        b.$outer.hasClass('lg-dragging') ||
                            'lg-slide' === b.s.mode ||
                            b.$outer.removeClass('lg-slide');
                    }, b.s.speed + 100);
            }),
            (b.prototype.enableSwipe = function () {
                var a = this,
                    b = 0,
                    c = 0,
                    d = !1;
                a.s.enableSwipe &&
                    a.doCss() &&
                    (a.$slide.on('touchstart.lg', function (c) {
                        a.$outer.hasClass('lg-zoomed') ||
                            a.lgBusy ||
                            (c.preventDefault(),
                            a.manageSwipeClass(),
                            (b = c.originalEvent.targetTouches[0].pageX));
                    }),
                    a.$slide.on('touchmove.lg', function (e) {
                        a.$outer.hasClass('lg-zoomed') ||
                            (e.preventDefault(),
                            (c = e.originalEvent.targetTouches[0].pageX),
                            a.touchMove(b, c),
                            (d = !0));
                    }),
                    a.$slide.on('touchend.lg', function () {
                        a.$outer.hasClass('lg-zoomed') ||
                            (d
                                ? ((d = !1), a.touchEnd(c - b))
                                : a.$el.trigger('onSlideClick.lg'));
                    }));
            }),
            (b.prototype.enableDrag = function () {
                var b = this,
                    c = 0,
                    d = 0,
                    e = !1,
                    f = !1;
                b.s.enableDrag &&
                    b.doCss() &&
                    (b.$slide.on('mousedown.lg', function (d) {
                        b.$outer.hasClass('lg-zoomed') ||
                            b.lgBusy ||
                            a(d.target).text().trim() ||
                            (d.preventDefault(),
                            b.manageSwipeClass(),
                            (c = d.pageX),
                            (e = !0),
                            (b.$outer.scrollLeft += 1),
                            (b.$outer.scrollLeft -= 1),
                            b.$outer
                                .removeClass('lg-grab')
                                .addClass('lg-grabbing'),
                            b.$el.trigger('onDragstart.lg'));
                    }),
                    a(window).on('mousemove.lg', function (a) {
                        e &&
                            ((f = !0),
                            (d = a.pageX),
                            b.touchMove(c, d),
                            b.$el.trigger('onDragmove.lg'));
                    }),
                    a(window).on('mouseup.lg', function (g) {
                        f
                            ? ((f = !1),
                              b.touchEnd(d - c),
                              b.$el.trigger('onDragend.lg'))
                            : (a(g.target).hasClass('lg-object') ||
                                  a(g.target).hasClass('lg-video-play')) &&
                              b.$el.trigger('onSlideClick.lg'),
                            e &&
                                ((e = !1),
                                b.$outer
                                    .removeClass('lg-grabbing')
                                    .addClass('lg-grab'));
                    }));
            }),
            (b.prototype.manageSwipeClass = function () {
                var a = this.index + 1,
                    b = this.index - 1;
                this.s.loop &&
                    this.$slide.length > 2 &&
                    (0 === this.index
                        ? (b = this.$slide.length - 1)
                        : this.index === this.$slide.length - 1 && (a = 0)),
                    this.$slide.removeClass('lg-next-slide lg-prev-slide'),
                    b > -1 && this.$slide.eq(b).addClass('lg-prev-slide'),
                    this.$slide.eq(a).addClass('lg-next-slide');
            }),
            (b.prototype.mousewheel = function () {
                var a = this;
                a.$outer.on('mousewheel.lg', function (b) {
                    b.deltaY &&
                        (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
                        b.preventDefault());
                });
            }),
            (b.prototype.closeGallery = function () {
                var b = this,
                    c = !1;
                this.$outer.find('.lg-close').on('click.lg', function () {
                    b.destroy();
                }),
                    b.s.closable &&
                        (b.$outer.on('mousedown.lg', function (b) {
                            c = !!(
                                a(b.target).is('.lg-outer') ||
                                a(b.target).is('.lg-item ') ||
                                a(b.target).is('.lg-img-wrap')
                            );
                        }),
                        b.$outer.on('mousemove.lg', function () {
                            c = !1;
                        }),
                        b.$outer.on('mouseup.lg', function (d) {
                            (a(d.target).is('.lg-outer') ||
                                a(d.target).is('.lg-item ') ||
                                (a(d.target).is('.lg-img-wrap') && c)) &&
                                (b.$outer.hasClass('lg-dragging') ||
                                    b.destroy());
                        }));
            }),
            (b.prototype.destroy = function (b) {
                var c = this;
                b ||
                    (c.$el.trigger('onBeforeClose.lg'),
                    a(window).scrollTop(c.prevScrollTop)),
                    b &&
                        (c.s.dynamic ||
                            this.$items.off('click.lg click.lgcustom'),
                        a.removeData(c.el, 'lightGallery')),
                    this.$el.off('.lg.tm'),
                    a.each(a.fn.lightGallery.modules, function (a) {
                        c.modules[a] && c.modules[a].destroy();
                    }),
                    (this.lGalleryOn = !1),
                    clearTimeout(c.hideBartimeout),
                    (this.hideBartimeout = !1),
                    a(window).off('.lg'),
                    a('body').removeClass('lg-on lg-from-hash'),
                    c.$outer && c.$outer.removeClass('lg-visible'),
                    a('.lg-backdrop').removeClass('in'),
                    setTimeout(function () {
                        c.$outer && c.$outer.remove(),
                            a('.lg-backdrop').remove(),
                            b || c.$el.trigger('onCloseAfter.lg');
                    }, c.s.backdropDuration + 50);
            }),
            (a.fn.lightGallery = function (c) {
                return this.each(function () {
                    if (a.data(this, 'lightGallery'))
                        try {
                            a(this).data('lightGallery').init();
                        } catch (a) {
                            console.error(
                                'lightGallery has not initiated properly',
                            );
                        }
                    else a.data(this, 'lightGallery', new b(this, c));
                });
            }),
            (a.fn.lightGallery.modules = {});
    })();
}),
    (function (a, b) {
        'function' == typeof define && define.amd
            ? define(['jquery'], function (a) {
                  return b(a);
              })
            : 'object' == typeof exports
            ? (module.exports = b(require('jquery')))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            'use strict';
            var b = {
                    autoplay: !1,
                    pause: 5e3,
                    progressBar: !0,
                    fourceAutoplay: !1,
                    autoplayControls: !0,
                    appendAutoplayControlsTo: '.lg-toolbar',
                },
                c = function (c) {
                    return (
                        (this.core = a(c).data('lightGallery')),
                        (this.$el = a(c)),
                        !(this.core.$items.length < 2) &&
                            ((this.core.s = a.extend({}, b, this.core.s)),
                            (this.interval = !1),
                            (this.fromAuto = !0),
                            (this.canceledOnTouch = !1),
                            (this.fourceAutoplayTemp =
                                this.core.s.fourceAutoplay),
                            this.core.doCss() || (this.core.s.progressBar = !1),
                            this.init(),
                            this)
                    );
                };
            (c.prototype.init = function () {
                var a = this;
                a.core.s.autoplayControls && a.controls(),
                    a.core.s.progressBar &&
                        a.core.$outer
                            .find('.lg')
                            .append(
                                '<div class="lg-progress-bar"><div class="lg-progress"></div></div>',
                            ),
                    a.progress(),
                    a.core.s.autoplay &&
                        a.$el.one('onSlideItemLoad.lg.tm', function () {
                            a.startlAuto();
                        }),
                    a.$el.on('onDragstart.lg.tm touchstart.lg.tm', function () {
                        a.interval &&
                            (a.cancelAuto(), (a.canceledOnTouch = !0));
                    }),
                    a.$el.on(
                        'onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm',
                        function () {
                            !a.interval &&
                                a.canceledOnTouch &&
                                (a.startlAuto(), (a.canceledOnTouch = !1));
                        },
                    );
            }),
                (c.prototype.progress = function () {
                    var a,
                        b,
                        c = this;
                    c.$el.on('onBeforeSlide.lg.tm', function () {
                        c.core.s.progressBar &&
                            c.fromAuto &&
                            ((a = c.core.$outer.find('.lg-progress-bar')),
                            (b = c.core.$outer.find('.lg-progress')),
                            c.interval &&
                                (b.removeAttr('style'),
                                a.removeClass('lg-start'),
                                setTimeout(function () {
                                    b.css(
                                        'transition',
                                        'width ' +
                                            (c.core.s.speed + c.core.s.pause) +
                                            'ms ease 0s',
                                    ),
                                        a.addClass('lg-start');
                                }, 20))),
                            c.fromAuto ||
                                c.core.s.fourceAutoplay ||
                                c.cancelAuto(),
                            (c.fromAuto = !1);
                    });
                }),
                (c.prototype.controls = function () {
                    var b = this;
                    a(this.core.s.appendAutoplayControlsTo).append(
                        '<span class="lg-autoplay-button lg-icon"></span>',
                    ),
                        b.core.$outer
                            .find('.lg-autoplay-button')
                            .on('click.lg', function () {
                                a(b.core.$outer).hasClass('lg-show-autoplay')
                                    ? (b.cancelAuto(),
                                      (b.core.s.fourceAutoplay = !1))
                                    : b.interval ||
                                      (b.startlAuto(),
                                      (b.core.s.fourceAutoplay =
                                          b.fourceAutoplayTemp));
                            });
                }),
                (c.prototype.startlAuto = function () {
                    var a = this;
                    a.core.$outer
                        .find('.lg-progress')
                        .css(
                            'transition',
                            'width ' +
                                (a.core.s.speed + a.core.s.pause) +
                                'ms ease 0s',
                        ),
                        a.core.$outer.addClass('lg-show-autoplay'),
                        a.core.$outer
                            .find('.lg-progress-bar')
                            .addClass('lg-start'),
                        (a.interval = setInterval(function () {
                            a.core.index + 1 < a.core.$items.length
                                ? a.core.index++
                                : (a.core.index = 0),
                                (a.fromAuto = !0),
                                a.core.slide(a.core.index, !1, !1, 'next');
                        }, a.core.s.speed + a.core.s.pause));
                }),
                (c.prototype.cancelAuto = function () {
                    clearInterval(this.interval),
                        (this.interval = !1),
                        this.core.$outer
                            .find('.lg-progress')
                            .removeAttr('style'),
                        this.core.$outer.removeClass('lg-show-autoplay'),
                        this.core.$outer
                            .find('.lg-progress-bar')
                            .removeClass('lg-start');
                }),
                (c.prototype.destroy = function () {
                    this.cancelAuto(),
                        this.core.$outer.find('.lg-progress-bar').remove();
                }),
                (a.fn.lightGallery.modules.autoplay = c);
        })();
    }),
    (function (a, b) {
        'function' == typeof define && define.amd
            ? define(['jquery'], function (a) {
                  return b(a);
              })
            : 'object' == typeof exports
            ? (module.exports = b(require('jquery')))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            'use strict';
            var b = {fullScreen: !0},
                c = function (c) {
                    return (
                        (this.core = a(c).data('lightGallery')),
                        (this.$el = a(c)),
                        (this.core.s = a.extend({}, b, this.core.s)),
                        this.init(),
                        this
                    );
                };
            (c.prototype.init = function () {
                var a = '';
                if (this.core.s.fullScreen) {
                    if (
                        !(
                            document.fullscreenEnabled ||
                            document.webkitFullscreenEnabled ||
                            document.mozFullScreenEnabled ||
                            document.msFullscreenEnabled
                        )
                    )
                        return;
                    (a = '<span class="lg-fullscreen lg-icon"></span>'),
                        this.core.$outer.find('.lg-toolbar').append(a),
                        this.fullScreen();
                }
            }),
                (c.prototype.requestFullscreen = function () {
                    var a = document.documentElement;
                    a.requestFullscreen
                        ? a.requestFullscreen()
                        : a.msRequestFullscreen
                        ? a.msRequestFullscreen()
                        : a.mozRequestFullScreen
                        ? a.mozRequestFullScreen()
                        : a.webkitRequestFullscreen &&
                          a.webkitRequestFullscreen();
                }),
                (c.prototype.exitFullscreen = function () {
                    document.exitFullscreen
                        ? document.exitFullscreen()
                        : document.msExitFullscreen
                        ? document.msExitFullscreen()
                        : document.mozCancelFullScreen
                        ? document.mozCancelFullScreen()
                        : document.webkitExitFullscreen &&
                          document.webkitExitFullscreen();
                }),
                (c.prototype.fullScreen = function () {
                    var b = this;
                    a(document).on(
                        'fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg',
                        function () {
                            b.core.$outer.toggleClass('lg-fullscreen-on');
                        },
                    ),
                        this.core.$outer
                            .find('.lg-fullscreen')
                            .on('click.lg', function () {
                                document.fullscreenElement ||
                                document.mozFullScreenElement ||
                                document.webkitFullscreenElement ||
                                document.msFullscreenElement
                                    ? b.exitFullscreen()
                                    : b.requestFullscreen();
                            });
                }),
                (c.prototype.destroy = function () {
                    this.exitFullscreen(),
                        a(document).off(
                            'fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg',
                        );
                }),
                (a.fn.lightGallery.modules.fullscreen = c);
        })();
    }),
    (function (a, b) {
        'function' == typeof define && define.amd
            ? define(['jquery'], function (a) {
                  return b(a);
              })
            : 'object' == typeof exports
            ? (module.exports = b(require('jquery')))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            'use strict';
            var b = {pager: !1},
                c = function (c) {
                    return (
                        (this.core = a(c).data('lightGallery')),
                        (this.$el = a(c)),
                        (this.core.s = a.extend({}, b, this.core.s)),
                        this.core.s.pager &&
                            this.core.$items.length > 1 &&
                            this.init(),
                        this
                    );
                };
            (c.prototype.init = function () {
                var b,
                    c,
                    d,
                    e = this,
                    f = '';
                if (
                    (e.core.$outer
                        .find('.lg')
                        .append('<div class="lg-pager-outer"></div>'),
                    e.core.s.dynamic)
                )
                    for (var g = 0; g < e.core.s.dynamicEl.length; g++)
                        f +=
                            '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                            e.core.s.dynamicEl[g].thumb +
                            '" /></div></span>';
                else
                    e.core.$items.each(function () {
                        e.core.s.exThumbImage
                            ? (f +=
                                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                                  a(this).attr(e.core.s.exThumbImage) +
                                  '" /></div></span>')
                            : (f +=
                                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                                  a(this).find('img').attr('src') +
                                  '" /></div></span>');
                    });
                (c = e.core.$outer.find('.lg-pager-outer')),
                    c.html(f),
                    (b = e.core.$outer.find('.lg-pager-cont')),
                    b.on('click.lg touchend.lg', function () {
                        var b = a(this);
                        (e.core.index = b.index()),
                            e.core.slide(e.core.index, !1, !0, !1);
                    }),
                    c.on('mouseover.lg', function () {
                        clearTimeout(d), c.addClass('lg-pager-hover');
                    }),
                    c.on('mouseout.lg', function () {
                        d = setTimeout(function () {
                            c.removeClass('lg-pager-hover');
                        });
                    }),
                    e.core.$el.on('onBeforeSlide.lg.tm', function (a, c, d) {
                        b.removeClass('lg-pager-active'),
                            b.eq(d).addClass('lg-pager-active');
                    });
            }),
                (c.prototype.destroy = function () {}),
                (a.fn.lightGallery.modules.pager = c);
        })();
    }),
    (function (a, b) {
        'function' == typeof define && define.amd
            ? define(['jquery'], function (a) {
                  return b(a);
              })
            : 'object' == typeof exports
            ? (module.exports = b(require('jquery')))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            'use strict';
            var b = {
                    thumbnail: !0,
                    animateThumb: !0,
                    currentPagerPosition: 'middle',
                    thumbWidth: 100,
                    thumbHeight: '80px',
                    thumbContHeight: 100,
                    thumbMargin: 5,
                    exThumbImage: !1,
                    showThumbByDefault: !0,
                    toogleThumb: !0,
                    pullCaptionUp: !0,
                    enableThumbDrag: !0,
                    enableThumbSwipe: !0,
                    swipeThreshold: 50,
                    loadYoutubeThumbnail: !0,
                    youtubeThumbSize: 1,
                    loadVimeoThumbnail: !0,
                    vimeoThumbSize: 'thumbnail_small',
                    loadDailymotionThumbnail: !0,
                },
                c = function (c) {
                    return (
                        (this.core = a(c).data('lightGallery')),
                        (this.core.s = a.extend({}, b, this.core.s)),
                        (this.$el = a(c)),
                        (this.$thumbOuter = null),
                        (this.thumbOuterWidth = 0),
                        (this.thumbTotalWidth =
                            this.core.$items.length *
                            (this.core.s.thumbWidth + this.core.s.thumbMargin)),
                        (this.thumbIndex = this.core.index),
                        this.core.s.animateThumb &&
                            (this.core.s.thumbHeight = '100%'),
                        (this.left = 0),
                        this.init(),
                        this
                    );
                };
            (c.prototype.init = function () {
                var a = this;
                this.core.s.thumbnail &&
                    this.core.$items.length > 1 &&
                    (this.core.s.showThumbByDefault &&
                        setTimeout(function () {
                            a.core.$outer.addClass('lg-thumb-open');
                        }, 700),
                    this.core.s.pullCaptionUp &&
                        this.core.$outer.addClass('lg-pull-caption-up'),
                    this.build(),
                    this.core.s.animateThumb && this.core.doCss()
                        ? (this.core.s.enableThumbDrag &&
                              this.enableThumbDrag(),
                          this.core.s.enableThumbSwipe &&
                              this.enableThumbSwipe(),
                          (this.thumbClickable = !1))
                        : (this.thumbClickable = !0),
                    this.toogle(),
                    this.thumbkeyPress());
            }),
                (c.prototype.build = function () {
                    function b(a, b, c) {
                        var g,
                            h = d.core.isVideo(a, c) || {},
                            i = '';
                        h.youtube || h.vimeo || h.dailymotion
                            ? h.youtube
                                ? (g = d.core.s.loadYoutubeThumbnail
                                      ? '//img.youtube.com/vi/' +
                                        h.youtube[1] +
                                        '/' +
                                        d.core.s.youtubeThumbSize +
                                        '.jpg'
                                      : b)
                                : h.vimeo
                                ? d.core.s.loadVimeoThumbnail
                                    ? ((g =
                                          '//i.vimeocdn.com/video/error_' +
                                          f +
                                          '.jpg'),
                                      (i = h.vimeo[1]))
                                    : (g = b)
                                : h.dailymotion &&
                                  (g = d.core.s.loadDailymotionThumbnail
                                      ? '//www.dailymotion.com/thumbnail/video/' +
                                        h.dailymotion[1]
                                      : b)
                            : (g = b),
                            (e +=
                                '<div data-vimeo-id="' +
                                i +
                                '" class="lg-thumb-item" style="width:' +
                                d.core.s.thumbWidth +
                                'px; height: ' +
                                d.core.s.thumbHeight +
                                '; margin-right: ' +
                                d.core.s.thumbMargin +
                                'px"><img src="' +
                                g +
                                '" /></div>'),
                            (i = '');
                    }
                    var c,
                        d = this,
                        e = '',
                        f = '',
                        g =
                            '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
                    switch (this.core.s.vimeoThumbSize) {
                        case 'thumbnail_large':
                            f = '640';
                            break;
                        case 'thumbnail_medium':
                            f = '200x150';
                            break;
                        case 'thumbnail_small':
                            f = '100x75';
                    }
                    if (
                        (d.core.$outer.addClass('lg-has-thumb'),
                        d.core.$outer.find('.lg').append(g),
                        (d.$thumbOuter = d.core.$outer.find('.lg-thumb-outer')),
                        (d.thumbOuterWidth = d.$thumbOuter.width()),
                        d.core.s.animateThumb &&
                            d.core.$outer
                                .find('.lg-thumb')
                                .css({
                                    width: d.thumbTotalWidth + 'px',
                                    position: 'relative',
                                }),
                        this.core.s.animateThumb &&
                            d.$thumbOuter.css(
                                'height',
                                d.core.s.thumbContHeight + 'px',
                            ),
                        d.core.s.dynamic)
                    )
                        for (var h = 0; h < d.core.s.dynamicEl.length; h++)
                            b(
                                d.core.s.dynamicEl[h].src,
                                d.core.s.dynamicEl[h].thumb,
                                h,
                            );
                    else
                        d.core.$items.each(function (c) {
                            d.core.s.exThumbImage
                                ? b(
                                      a(this).attr('href') ||
                                          a(this).attr('data-src'),
                                      a(this).attr(d.core.s.exThumbImage),
                                      c,
                                  )
                                : b(
                                      a(this).attr('href') ||
                                          a(this).attr('data-src'),
                                      a(this).find('img').attr('src'),
                                      c,
                                  );
                        });
                    d.core.$outer.find('.lg-thumb').html(e),
                        (c = d.core.$outer.find('.lg-thumb-item')),
                        c.each(function () {
                            var b = a(this),
                                c = b.attr('data-vimeo-id');
                            c &&
                                a.getJSON(
                                    '//www.vimeo.com/api/v2/video/' +
                                        c +
                                        '.json?callback=?',
                                    {format: 'json'},
                                    function (a) {
                                        b.find('img').attr(
                                            'src',
                                            a[0][d.core.s.vimeoThumbSize],
                                        );
                                    },
                                );
                        }),
                        c.eq(d.core.index).addClass('active'),
                        d.core.$el.on('onBeforeSlide.lg.tm', function () {
                            c.removeClass('active'),
                                c.eq(d.core.index).addClass('active');
                        }),
                        c.on('click.lg touchend.lg', function () {
                            var b = a(this);
                            setTimeout(function () {
                                ((d.thumbClickable && !d.core.lgBusy) ||
                                    !d.core.doCss()) &&
                                    ((d.core.index = b.index()),
                                    d.core.slide(d.core.index, !1, !0, !1));
                            }, 50);
                        }),
                        d.core.$el.on('onBeforeSlide.lg.tm', function () {
                            d.animateThumb(d.core.index);
                        }),
                        a(window).on(
                            'resize.lg.thumb orientationchange.lg.thumb',
                            function () {
                                setTimeout(function () {
                                    d.animateThumb(d.core.index),
                                        (d.thumbOuterWidth =
                                            d.$thumbOuter.width());
                                }, 200);
                            },
                        );
                }),
                (c.prototype.setTranslate = function (a) {
                    this.core.$outer
                        .find('.lg-thumb')
                        .css({
                            transform: 'translate3d(-' + a + 'px, 0px, 0px)',
                        });
                }),
                (c.prototype.animateThumb = function (a) {
                    var b = this.core.$outer.find('.lg-thumb');
                    if (this.core.s.animateThumb) {
                        var c;
                        switch (this.core.s.currentPagerPosition) {
                            case 'left':
                                c = 0;
                                break;
                            case 'middle':
                                c =
                                    this.thumbOuterWidth / 2 -
                                    this.core.s.thumbWidth / 2;
                                break;
                            case 'right':
                                c =
                                    this.thumbOuterWidth -
                                    this.core.s.thumbWidth;
                        }
                        (this.left =
                            (this.core.s.thumbWidth + this.core.s.thumbMargin) *
                                a -
                            1 -
                            c),
                            this.left >
                                this.thumbTotalWidth - this.thumbOuterWidth &&
                                (this.left =
                                    this.thumbTotalWidth -
                                    this.thumbOuterWidth),
                            this.left < 0 && (this.left = 0),
                            this.core.lGalleryOn
                                ? (b.hasClass('on') ||
                                      this.core.$outer
                                          .find('.lg-thumb')
                                          .css(
                                              'transition-duration',
                                              this.core.s.speed + 'ms',
                                          ),
                                  this.core.doCss() ||
                                      b.animate(
                                          {left: -this.left + 'px'},
                                          this.core.s.speed,
                                      ))
                                : this.core.doCss() ||
                                  b.css('left', -this.left + 'px'),
                            this.setTranslate(this.left);
                    }
                }),
                (c.prototype.enableThumbDrag = function () {
                    var b = this,
                        c = 0,
                        d = 0,
                        e = !1,
                        f = !1,
                        g = 0;
                    b.$thumbOuter.addClass('lg-grab'),
                        b.core.$outer
                            .find('.lg-thumb')
                            .on('mousedown.lg.thumb', function (a) {
                                b.thumbTotalWidth > b.thumbOuterWidth &&
                                    (a.preventDefault(),
                                    (c = a.pageX),
                                    (e = !0),
                                    (b.core.$outer.scrollLeft += 1),
                                    (b.core.$outer.scrollLeft -= 1),
                                    (b.thumbClickable = !1),
                                    b.$thumbOuter
                                        .removeClass('lg-grab')
                                        .addClass('lg-grabbing'));
                            }),
                        a(window).on('mousemove.lg.thumb', function (a) {
                            e &&
                                ((g = b.left),
                                (f = !0),
                                (d = a.pageX),
                                b.$thumbOuter.addClass('lg-dragging'),
                                (g -= d - c),
                                g > b.thumbTotalWidth - b.thumbOuterWidth &&
                                    (g = b.thumbTotalWidth - b.thumbOuterWidth),
                                g < 0 && (g = 0),
                                b.setTranslate(g));
                        }),
                        a(window).on('mouseup.lg.thumb', function () {
                            f
                                ? ((f = !1),
                                  b.$thumbOuter.removeClass('lg-dragging'),
                                  (b.left = g),
                                  Math.abs(d - c) < b.core.s.swipeThreshold &&
                                      (b.thumbClickable = !0))
                                : (b.thumbClickable = !0),
                                e &&
                                    ((e = !1),
                                    b.$thumbOuter
                                        .removeClass('lg-grabbing')
                                        .addClass('lg-grab'));
                        });
                }),
                (c.prototype.enableThumbSwipe = function () {
                    var a = this,
                        b = 0,
                        c = 0,
                        d = !1,
                        e = 0;
                    a.core.$outer
                        .find('.lg-thumb')
                        .on('touchstart.lg', function (c) {
                            a.thumbTotalWidth > a.thumbOuterWidth &&
                                (c.preventDefault(),
                                (b = c.originalEvent.targetTouches[0].pageX),
                                (a.thumbClickable = !1));
                        }),
                        a.core.$outer
                            .find('.lg-thumb')
                            .on('touchmove.lg', function (f) {
                                a.thumbTotalWidth > a.thumbOuterWidth &&
                                    (f.preventDefault(),
                                    (c =
                                        f.originalEvent.targetTouches[0].pageX),
                                    (d = !0),
                                    a.$thumbOuter.addClass('lg-dragging'),
                                    (e = a.left),
                                    (e -= c - b),
                                    e > a.thumbTotalWidth - a.thumbOuterWidth &&
                                        (e =
                                            a.thumbTotalWidth -
                                            a.thumbOuterWidth),
                                    e < 0 && (e = 0),
                                    a.setTranslate(e));
                            }),
                        a.core.$outer
                            .find('.lg-thumb')
                            .on('touchend.lg', function () {
                                a.thumbTotalWidth > a.thumbOuterWidth && d
                                    ? ((d = !1),
                                      a.$thumbOuter.removeClass('lg-dragging'),
                                      Math.abs(c - b) <
                                          a.core.s.swipeThreshold &&
                                          (a.thumbClickable = !0),
                                      (a.left = e))
                                    : (a.thumbClickable = !0);
                            });
                }),
                (c.prototype.toogle = function () {
                    var a = this;
                    a.core.s.toogleThumb &&
                        (a.core.$outer.addClass('lg-can-toggle'),
                        a.$thumbOuter.append(
                            '<span class="lg-toogle-thumb lg-icon"></span>',
                        ),
                        a.core.$outer
                            .find('.lg-toogle-thumb')
                            .on('click.lg', function () {
                                a.core.$outer.toggleClass('lg-thumb-open');
                            }));
                }),
                (c.prototype.thumbkeyPress = function () {
                    var b = this;
                    a(window).on('keydown.lg.thumb', function (a) {
                        38 === a.keyCode
                            ? (a.preventDefault(),
                              b.core.$outer.addClass('lg-thumb-open'))
                            : 40 === a.keyCode &&
                              (a.preventDefault(),
                              b.core.$outer.removeClass('lg-thumb-open'));
                    });
                }),
                (c.prototype.destroy = function () {
                    this.core.s.thumbnail &&
                        this.core.$items.length > 1 &&
                        (a(window).off(
                            'resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb',
                        ),
                        this.$thumbOuter.remove(),
                        this.core.$outer.removeClass('lg-has-thumb'));
                }),
                (a.fn.lightGallery.modules.Thumbnail = c);
        })();
    }),
    (function (a, b) {
        'function' == typeof define && define.amd
            ? define(['jquery'], function (a) {
                  return b(a);
              })
            : 'object' == typeof module && module.exports
            ? (module.exports = b(require('jquery')))
            : b(a.jQuery);
    })(this, function (a) {
        !(function () {
            'use strict';
            function b(a, b, c, d) {
                var e = this;
                if (
                    (e.core.$slide
                        .eq(b)
                        .find('.lg-video')
                        .append(e.loadVideo(c, 'lg-object', !0, b, d)),
                    d)
                )
                    if (e.core.s.videojs)
                        try {
                            videojs(
                                e.core.$slide.eq(b).find('.lg-html5').get(0),
                                e.core.s.videojsOptions,
                                function () {
                                    !e.videoLoaded &&
                                        e.core.s.autoplayFirstVideo &&
                                        this.play();
                                },
                            );
                        } catch (a) {
                            console.error(
                                'Make sure you have included videojs',
                            );
                        }
                    else
                        !e.videoLoaded &&
                            e.core.s.autoplayFirstVideo &&
                            e.core.$slide.eq(b).find('.lg-html5').get(0).play();
            }
            function c(a, b) {
                var c = this.core.$slide.eq(b).find('.lg-video-cont');
                c.hasClass('lg-has-iframe') ||
                    (c.css('max-width', this.core.s.videoMaxWidth),
                    (this.videoLoaded = !0));
            }
            function d(b, c, d) {
                var e = this,
                    f = e.core.$slide.eq(c),
                    g = f.find('.lg-youtube').get(0),
                    h = f.find('.lg-vimeo').get(0),
                    i = f.find('.lg-dailymotion').get(0),
                    j = f.find('.lg-vk').get(0),
                    k = f.find('.lg-html5').get(0);
                if (g)
                    g.contentWindow.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}',
                        '*',
                    );
                else if (h)
                    try {
                        $f(h).api('pause');
                    } catch (a) {
                        console.error(
                            'Make sure you have included froogaloop2 js',
                        );
                    }
                else if (i) i.contentWindow.postMessage('pause', '*');
                else if (k)
                    if (e.core.s.videojs)
                        try {
                            videojs(k).pause();
                        } catch (a) {
                            console.error(
                                'Make sure you have included videojs',
                            );
                        }
                    else k.pause();
                j &&
                    a(j).attr(
                        'src',
                        a(j).attr('src').replace('&autoplay', '&noplay'),
                    );
                var l;
                l = e.core.s.dynamic
                    ? e.core.s.dynamicEl[d].src
                    : e.core.$items.eq(d).attr('href') ||
                      e.core.$items.eq(d).attr('data-src');
                var m = e.core.isVideo(l, d) || {};
                (m.youtube || m.vimeo || m.dailymotion || m.vk) &&
                    e.core.$outer.addClass('lg-hide-download');
            }
            var e = {
                    videoMaxWidth: '855px',
                    autoplayFirstVideo: !0,
                    youtubePlayerParams: !1,
                    vimeoPlayerParams: !1,
                    dailymotionPlayerParams: !1,
                    vkPlayerParams: !1,
                    videojs: !1,
                    videojsOptions: {},
                },
                f = function (b) {
                    return (
                        (this.core = a(b).data('lightGallery')),
                        (this.$el = a(b)),
                        (this.core.s = a.extend({}, e, this.core.s)),
                        (this.videoLoaded = !1),
                        this.init(),
                        this
                    );
                };
            (f.prototype.init = function () {
                var e = this;
                e.core.$el.on('hasVideo.lg.tm', b.bind(this)),
                    e.core.$el.on('onAferAppendSlide.lg.tm', c.bind(this)),
                    e.core.doCss() &&
                    e.core.$items.length > 1 &&
                    (e.core.s.enableSwipe || e.core.s.enableDrag)
                        ? e.core.$el.on('onSlideClick.lg.tm', function () {
                              var a = e.core.$slide.eq(e.core.index);
                              e.loadVideoOnclick(a);
                          })
                        : e.core.$slide.on('click.lg', function () {
                              e.loadVideoOnclick(a(this));
                          }),
                    e.core.$el.on('onBeforeSlide.lg.tm', d.bind(this)),
                    e.core.$el.on('onAfterSlide.lg.tm', function (a, b) {
                        e.core.$slide.eq(b).removeClass('lg-video-playing');
                    }),
                    e.core.s.autoplayFirstVideo &&
                        e.core.$el.on(
                            'onAferAppendSlide.lg.tm',
                            function (a, b) {
                                if (!e.core.lGalleryOn) {
                                    var c = e.core.$slide.eq(b);
                                    setTimeout(function () {
                                        e.loadVideoOnclick(c);
                                    }, 100);
                                }
                            },
                        );
            }),
                (f.prototype.loadVideo = function (b, c, d, e, f) {
                    var g = '',
                        h = 1,
                        i = '',
                        j = this.core.isVideo(b, e) || {};
                    if (
                        (d &&
                            (h = this.videoLoaded
                                ? 0
                                : this.core.s.autoplayFirstVideo
                                ? 1
                                : 0),
                        j.youtube)
                    )
                        (i = '?wmode=opaque&autoplay=' + h + '&enablejsapi=1'),
                            this.core.s.youtubePlayerParams &&
                                (i =
                                    i +
                                    '&' +
                                    a.param(this.core.s.youtubePlayerParams)),
                            (g =
                                '<iframe class="lg-video-object lg-youtube ' +
                                c +
                                '" width="560" height="315" src="//www.youtube.com/embed/' +
                                j.youtube[1] +
                                i +
                                '" frameborder="0" allowfullscreen></iframe>');
                    else if (j.vimeo)
                        (i = '?autoplay=' + h + '&api=1'),
                            this.core.s.vimeoPlayerParams &&
                                (i =
                                    i +
                                    '&' +
                                    a.param(this.core.s.vimeoPlayerParams)),
                            (g =
                                '<iframe class="lg-video-object lg-vimeo ' +
                                c +
                                '" width="560" height="315"  src="//player.vimeo.com/video/' +
                                j.vimeo[1] +
                                i +
                                '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
                    else if (j.dailymotion)
                        (i =
                            '?wmode=opaque&autoplay=' + h + '&api=postMessage'),
                            this.core.s.dailymotionPlayerParams &&
                                (i =
                                    i +
                                    '&' +
                                    a.param(
                                        this.core.s.dailymotionPlayerParams,
                                    )),
                            (g =
                                '<iframe class="lg-video-object lg-dailymotion ' +
                                c +
                                '" width="560" height="315" src="//www.dailymotion.com/embed/video/' +
                                j.dailymotion[1] +
                                i +
                                '" frameborder="0" allowfullscreen></iframe>');
                    else if (j.html5) {
                        var k = f.substring(0, 1);
                        ('.' !== k && '#' !== k) || (f = a(f).html()), (g = f);
                    } else
                        j.vk &&
                            ((i = '&autoplay=' + h),
                            this.core.s.vkPlayerParams &&
                                (i =
                                    i +
                                    '&' +
                                    a.param(this.core.s.vkPlayerParams)),
                            (g =
                                '<iframe class="lg-video-object lg-vk ' +
                                c +
                                '" width="560" height="315" src="//vk.com/video_ext.php?' +
                                j.vk[1] +
                                i +
                                '" frameborder="0" allowfullscreen></iframe>'));
                    return g;
                }),
                (f.prototype.loadVideoOnclick = function (a) {
                    var b = this;
                    if (
                        a.find('.lg-object').hasClass('lg-has-poster') &&
                        a.find('.lg-object').is(':visible')
                    )
                        if (a.hasClass('lg-has-video')) {
                            var c = a.find('.lg-youtube').get(0),
                                d = a.find('.lg-vimeo').get(0),
                                e = a.find('.lg-dailymotion').get(0),
                                f = a.find('.lg-html5').get(0);
                            if (c)
                                c.contentWindow.postMessage(
                                    '{"event":"command","func":"playVideo","args":""}',
                                    '*',
                                );
                            else if (d)
                                try {
                                    $f(d).api('play');
                                } catch (a) {
                                    console.error(
                                        'Make sure you have included froogaloop2 js',
                                    );
                                }
                            else if (e)
                                e.contentWindow.postMessage('play', '*');
                            else if (f)
                                if (b.core.s.videojs)
                                    try {
                                        videojs(f).play();
                                    } catch (a) {
                                        console.error(
                                            'Make sure you have included videojs',
                                        );
                                    }
                                else f.play();
                            a.addClass('lg-video-playing');
                        } else {
                            a.addClass('lg-video-playing lg-has-video');
                            var g,
                                h,
                                i = function (c, d) {
                                    if (
                                        (a
                                            .find('.lg-video')
                                            .append(
                                                b.loadVideo(
                                                    c,
                                                    '',
                                                    !1,
                                                    b.core.index,
                                                    d,
                                                ),
                                            ),
                                        d)
                                    )
                                        if (b.core.s.videojs)
                                            try {
                                                videojs(
                                                    b.core.$slide
                                                        .eq(b.core.index)
                                                        .find('.lg-html5')
                                                        .get(0),
                                                    b.core.s.videojsOptions,
                                                    function () {
                                                        this.play();
                                                    },
                                                );
                                            } catch (a) {
                                                console.error(
                                                    'Make sure you have included videojs',
                                                );
                                            }
                                        else
                                            b.core.$slide
                                                .eq(b.core.index)
                                                .find('.lg-html5')
                                                .get(0)
                                                .play();
                                };
                            b.core.s.dynamic
                                ? ((g = b.core.s.dynamicEl[b.core.index].src),
                                  (h = b.core.s.dynamicEl[b.core.index].html),
                                  i(g, h))
                                : ((g =
                                      b.core.$items
                                          .eq(b.core.index)
                                          .attr('href') ||
                                      b.core.$items
                                          .eq(b.core.index)
                                          .attr('data-src')),
                                  (h = b.core.$items
                                      .eq(b.core.index)
                                      .attr('data-html')),
                                  i(g, h));
                            var j = a.find('.lg-object');
                            a.find('.lg-video').append(j),
                                a
                                    .find('.lg-video-object')
                                    .hasClass('lg-html5') ||
                                    (a.removeClass('lg-complete'),
                                    a
                                        .find('.lg-video-object')
                                        .on('load.lg error.lg', function () {
                                            a.addClass('lg-complete');
                                        }));
                        }
                }),
                (f.prototype.destroy = function () {
                    this.videoLoaded = !1;
                }),
                (a.fn.lightGallery.modules.video = f);
        })();
    }),
    (function (a, b) {
        'function' == typeof define && define.amd
            ? define(['jquery'], function (a) {
                  return b(a);
              })
            : 'object' == typeof exports
            ? (module.exports = b(require('jquery')))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            'use strict';
            var b = function () {
                    var a = !1,
                        b = navigator.userAgent.match(
                            /Chrom(e|ium)\/([0-9]+)\./,
                        );
                    return b && parseInt(b[2], 10) < 54 && (a = !0), a;
                },
                c = {
                    scale: 1,
                    zoom: !0,
                    actualSize: !0,
                    enableZoomAfter: 300,
                    useLeftForZoom: b(),
                },
                d = function (b) {
                    return (
                        (this.core = a(b).data('lightGallery')),
                        (this.core.s = a.extend({}, c, this.core.s)),
                        this.core.s.zoom &&
                            this.core.doCss() &&
                            (this.init(),
                            (this.zoomabletimeout = !1),
                            (this.pageX = a(window).width() / 2),
                            (this.pageY =
                                a(window).height() / 2 +
                                a(window).scrollTop())),
                        this
                    );
                };
            (d.prototype.init = function () {
                var b = this,
                    c =
                        '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
                b.core.s.actualSize &&
                    (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
                    b.core.s.useLeftForZoom
                        ? b.core.$outer.addClass('lg-use-left-for-zoom')
                        : b.core.$outer.addClass('lg-use-transition-for-zoom'),
                    this.core.$outer.find('.lg-toolbar').append(c),
                    b.core.$el.on(
                        'onSlideItemLoad.lg.tm.zoom',
                        function (c, d, e) {
                            var f = b.core.s.enableZoomAfter + e;
                            a('body').hasClass('lg-from-hash') && e
                                ? (f = 0)
                                : a('body').removeClass('lg-from-hash'),
                                (b.zoomabletimeout = setTimeout(function () {
                                    b.core.$slide.eq(d).addClass('lg-zoomable');
                                }, f + 30));
                        },
                    );
                var d = 1,
                    e = function (c) {
                        var d,
                            e,
                            f = b.core.$outer.find('.lg-current .lg-image'),
                            g = (a(window).width() - f.prop('offsetWidth')) / 2,
                            h =
                                (a(window).height() - f.prop('offsetHeight')) /
                                    2 +
                                a(window).scrollTop();
                        (d = b.pageX - g), (e = b.pageY - h);
                        var i = (c - 1) * d,
                            j = (c - 1) * e;
                        f
                            .css(
                                'transform',
                                'scale3d(' + c + ', ' + c + ', 1)',
                            )
                            .attr('data-scale', c),
                            b.core.s.useLeftForZoom
                                ? f
                                      .parent()
                                      .css({left: -i + 'px', top: -j + 'px'})
                                      .attr('data-x', i)
                                      .attr('data-y', j)
                                : f
                                      .parent()
                                      .css(
                                          'transform',
                                          'translate3d(-' +
                                              i +
                                              'px, -' +
                                              j +
                                              'px, 0)',
                                      )
                                      .attr('data-x', i)
                                      .attr('data-y', j);
                    },
                    f = function () {
                        d > 1
                            ? b.core.$outer.addClass('lg-zoomed')
                            : b.resetZoom(),
                            d < 1 && (d = 1),
                            e(d);
                    },
                    g = function (c, e, g, h) {
                        var i,
                            j = e.prop('offsetWidth');
                        i = b.core.s.dynamic
                            ? b.core.s.dynamicEl[g].width ||
                              e[0].naturalWidth ||
                              j
                            : b.core.$items.eq(g).attr('data-width') ||
                              e[0].naturalWidth ||
                              j;
                        var k;
                        b.core.$outer.hasClass('lg-zoomed')
                            ? (d = 1)
                            : i > j && ((k = i / j), (d = k || 2)),
                            h
                                ? ((b.pageX = a(window).width() / 2),
                                  (b.pageY =
                                      a(window).height() / 2 +
                                      a(window).scrollTop()))
                                : ((b.pageX =
                                      c.pageX ||
                                      c.originalEvent.targetTouches[0].pageX),
                                  (b.pageY =
                                      c.pageY ||
                                      c.originalEvent.targetTouches[0].pageY)),
                            f(),
                            setTimeout(function () {
                                b.core.$outer
                                    .removeClass('lg-grabbing')
                                    .addClass('lg-grab');
                            }, 10);
                    },
                    h = !1;
                b.core.$el.on('onAferAppendSlide.lg.tm.zoom', function (a, c) {
                    var d = b.core.$slide.eq(c).find('.lg-image');
                    d.on('dblclick', function (a) {
                        g(a, d, c);
                    }),
                        d.on('touchstart', function (a) {
                            h
                                ? (clearTimeout(h), (h = null), g(a, d, c))
                                : (h = setTimeout(function () {
                                      h = null;
                                  }, 300)),
                                a.preventDefault();
                        });
                }),
                    a(window).on(
                        'resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom',
                        function () {
                            (b.pageX = a(window).width() / 2),
                                (b.pageY =
                                    a(window).height() / 2 +
                                    a(window).scrollTop()),
                                e(d);
                        },
                    ),
                    a('#lg-zoom-out').on('click.lg', function () {
                        b.core.$outer.find('.lg-current .lg-image').length &&
                            ((d -= b.core.s.scale), f());
                    }),
                    a('#lg-zoom-in').on('click.lg', function () {
                        b.core.$outer.find('.lg-current .lg-image').length &&
                            ((d += b.core.s.scale), f());
                    }),
                    a('#lg-actual-size').on('click.lg', function (a) {
                        g(
                            a,
                            b.core.$slide.eq(b.core.index).find('.lg-image'),
                            b.core.index,
                            !0,
                        );
                    }),
                    b.core.$el.on('onBeforeSlide.lg.tm', function () {
                        (d = 1), b.resetZoom();
                    }),
                    b.zoomDrag(),
                    b.zoomSwipe();
            }),
                (d.prototype.resetZoom = function () {
                    this.core.$outer.removeClass('lg-zoomed'),
                        this.core.$slide
                            .find('.lg-img-wrap')
                            .removeAttr('style data-x data-y'),
                        this.core.$slide
                            .find('.lg-image')
                            .removeAttr('style data-scale'),
                        (this.pageX = a(window).width() / 2),
                        (this.pageY =
                            a(window).height() / 2 + a(window).scrollTop());
                }),
                (d.prototype.zoomSwipe = function () {
                    var a = this,
                        b = {},
                        c = {},
                        d = !1,
                        e = !1,
                        f = !1;
                    a.core.$slide.on('touchstart.lg', function (c) {
                        if (a.core.$outer.hasClass('lg-zoomed')) {
                            var d = a.core.$slide
                                .eq(a.core.index)
                                .find('.lg-object');
                            (f =
                                d.prop('offsetHeight') * d.attr('data-scale') >
                                a.core.$outer.find('.lg').height()),
                                (e =
                                    d.prop('offsetWidth') *
                                        d.attr('data-scale') >
                                    a.core.$outer.find('.lg').width()),
                                (e || f) &&
                                    (c.preventDefault(),
                                    (b = {
                                        x: c.originalEvent.targetTouches[0]
                                            .pageX,
                                        y: c.originalEvent.targetTouches[0]
                                            .pageY,
                                    }));
                        }
                    }),
                        a.core.$slide.on('touchmove.lg', function (g) {
                            if (a.core.$outer.hasClass('lg-zoomed')) {
                                var h,
                                    i,
                                    j = a.core.$slide
                                        .eq(a.core.index)
                                        .find('.lg-img-wrap');
                                g.preventDefault(),
                                    (d = !0),
                                    (c = {
                                        x: g.originalEvent.targetTouches[0]
                                            .pageX,
                                        y: g.originalEvent.targetTouches[0]
                                            .pageY,
                                    }),
                                    a.core.$outer.addClass('lg-zoom-dragging'),
                                    (i = f
                                        ? -Math.abs(j.attr('data-y')) +
                                          (c.y - b.y)
                                        : -Math.abs(j.attr('data-y'))),
                                    (h = e
                                        ? -Math.abs(j.attr('data-x')) +
                                          (c.x - b.x)
                                        : -Math.abs(j.attr('data-x'))),
                                    (Math.abs(c.x - b.x) > 15 ||
                                        Math.abs(c.y - b.y) > 15) &&
                                        (a.core.s.useLeftForZoom
                                            ? j.css({
                                                  left: h + 'px',
                                                  top: i + 'px',
                                              })
                                            : j.css(
                                                  'transform',
                                                  'translate3d(' +
                                                      h +
                                                      'px, ' +
                                                      i +
                                                      'px, 0)',
                                              ));
                            }
                        }),
                        a.core.$slide.on('touchend.lg', function () {
                            a.core.$outer.hasClass('lg-zoomed') &&
                                d &&
                                ((d = !1),
                                a.core.$outer.removeClass('lg-zoom-dragging'),
                                a.touchendZoom(b, c, e, f));
                        });
                }),
                (d.prototype.zoomDrag = function () {
                    var b = this,
                        c = {},
                        d = {},
                        e = !1,
                        f = !1,
                        g = !1,
                        h = !1;
                    b.core.$slide.on('mousedown.lg.zoom', function (d) {
                        var f = b.core.$slide
                            .eq(b.core.index)
                            .find('.lg-object');
                        (h =
                            f.prop('offsetHeight') * f.attr('data-scale') >
                            b.core.$outer.find('.lg').height()),
                            (g =
                                f.prop('offsetWidth') * f.attr('data-scale') >
                                b.core.$outer.find('.lg').width()),
                            b.core.$outer.hasClass('lg-zoomed') &&
                                a(d.target).hasClass('lg-object') &&
                                (g || h) &&
                                (d.preventDefault(),
                                (c = {x: d.pageX, y: d.pageY}),
                                (e = !0),
                                (b.core.$outer.scrollLeft += 1),
                                (b.core.$outer.scrollLeft -= 1),
                                b.core.$outer
                                    .removeClass('lg-grab')
                                    .addClass('lg-grabbing'));
                    }),
                        a(window).on('mousemove.lg.zoom', function (a) {
                            if (e) {
                                var i,
                                    j,
                                    k = b.core.$slide
                                        .eq(b.core.index)
                                        .find('.lg-img-wrap');
                                (f = !0),
                                    (d = {x: a.pageX, y: a.pageY}),
                                    b.core.$outer.addClass('lg-zoom-dragging'),
                                    (j = h
                                        ? -Math.abs(k.attr('data-y')) +
                                          (d.y - c.y)
                                        : -Math.abs(k.attr('data-y'))),
                                    (i = g
                                        ? -Math.abs(k.attr('data-x')) +
                                          (d.x - c.x)
                                        : -Math.abs(k.attr('data-x'))),
                                    b.core.s.useLeftForZoom
                                        ? k.css({left: i + 'px', top: j + 'px'})
                                        : k.css(
                                              'transform',
                                              'translate3d(' +
                                                  i +
                                                  'px, ' +
                                                  j +
                                                  'px, 0)',
                                          );
                            }
                        }),
                        a(window).on('mouseup.lg.zoom', function (a) {
                            e &&
                                ((e = !1),
                                b.core.$outer.removeClass('lg-zoom-dragging'),
                                !f ||
                                    (c.x === d.x && c.y === d.y) ||
                                    ((d = {x: a.pageX, y: a.pageY}),
                                    b.touchendZoom(c, d, g, h)),
                                (f = !1)),
                                b.core.$outer
                                    .removeClass('lg-grabbing')
                                    .addClass('lg-grab');
                        });
                }),
                (d.prototype.touchendZoom = function (a, b, c, d) {
                    var e = this,
                        f = e.core.$slide.eq(e.core.index).find('.lg-img-wrap'),
                        g = e.core.$slide.eq(e.core.index).find('.lg-object'),
                        h = -Math.abs(f.attr('data-x')) + (b.x - a.x),
                        i = -Math.abs(f.attr('data-y')) + (b.y - a.y),
                        j =
                            (e.core.$outer.find('.lg').height() -
                                g.prop('offsetHeight')) /
                            2,
                        k = Math.abs(
                            g.prop('offsetHeight') *
                                Math.abs(g.attr('data-scale')) -
                                e.core.$outer.find('.lg').height() +
                                j,
                        ),
                        l =
                            (e.core.$outer.find('.lg').width() -
                                g.prop('offsetWidth')) /
                            2,
                        m = Math.abs(
                            g.prop('offsetWidth') *
                                Math.abs(g.attr('data-scale')) -
                                e.core.$outer.find('.lg').width() +
                                l,
                        );
                    (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) &&
                        (d && (i <= -k ? (i = -k) : i >= -j && (i = -j)),
                        c && (h <= -m ? (h = -m) : h >= -l && (h = -l)),
                        d
                            ? f.attr('data-y', Math.abs(i))
                            : (i = -Math.abs(f.attr('data-y'))),
                        c
                            ? f.attr('data-x', Math.abs(h))
                            : (h = -Math.abs(f.attr('data-x'))),
                        e.core.s.useLeftForZoom
                            ? f.css({left: h + 'px', top: i + 'px'})
                            : f.css(
                                  'transform',
                                  'translate3d(' + h + 'px, ' + i + 'px, 0)',
                              ));
                }),
                (d.prototype.destroy = function () {
                    var b = this;
                    b.core.$el.off('.lg.zoom'),
                        a(window).off('.lg.zoom'),
                        b.core.$slide.off('.lg.zoom'),
                        b.core.$el.off('.lg.tm.zoom'),
                        b.resetZoom(),
                        clearTimeout(b.zoomabletimeout),
                        (b.zoomabletimeout = !1);
                }),
                (a.fn.lightGallery.modules.zoom = d);
        })();
    }),
    (function (a, b) {
        'function' == typeof define && define.amd
            ? define(['jquery'], function (a) {
                  return b(a);
              })
            : 'object' == typeof exports
            ? (module.exports = b(require('jquery')))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            'use strict';
            var b = {hash: !0},
                c = function (c) {
                    return (
                        (this.core = a(c).data('lightGallery')),
                        (this.core.s = a.extend({}, b, this.core.s)),
                        this.core.s.hash &&
                            ((this.oldHash = window.location.hash),
                            this.init()),
                        this
                    );
                };
            (c.prototype.init = function () {
                var b,
                    c = this;
                c.core.$el.on('onAfterSlide.lg.tm', function (a, b, d) {
                    history.replaceState
                        ? history.replaceState(
                              null,
                              null,
                              window.location.pathname +
                                  window.location.search +
                                  '#lg=' +
                                  c.core.s.galleryId +
                                  '&slide=' +
                                  d,
                          )
                        : (window.location.hash =
                              'lg=' + c.core.s.galleryId + '&slide=' + d);
                }),
                    a(window).on('hashchange.lg.hash', function () {
                        b = window.location.hash;
                        var a = parseInt(b.split('&slide=')[1], 10);
                        b.indexOf('lg=' + c.core.s.galleryId) > -1
                            ? c.core.slide(a, !1, !1)
                            : c.core.lGalleryOn && c.core.destroy();
                    });
            }),
                (c.prototype.destroy = function () {
                    this.core.s.hash &&
                        (this.oldHash &&
                        this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0
                            ? history.replaceState
                                ? history.replaceState(null, null, this.oldHash)
                                : (window.location.hash = this.oldHash)
                            : history.replaceState
                            ? history.replaceState(
                                  null,
                                  document.title,
                                  window.location.pathname +
                                      window.location.search,
                              )
                            : (window.location.hash = ''),
                        this.core.$el.off('.lg.hash'));
                }),
                (a.fn.lightGallery.modules.hash = c);
        })();
    }),
    (function (a, b) {
        'function' == typeof define && define.amd
            ? define(['jquery'], function (a) {
                  return b(a);
              })
            : 'object' == typeof exports
            ? (module.exports = b(require('jquery')))
            : b(jQuery);
    })(0, function (a) {
        !(function () {
            'use strict';
            var b = {
                    share: !0,
                    facebook: !0,
                    facebookDropdownText: 'Facebook',
                    twitter: !0,
                    twitterDropdownText: 'Twitter',
                    googlePlus: !0,
                    googlePlusDropdownText: 'GooglePlus',
                    pinterest: !0,
                    pinterestDropdownText: 'Pinterest',
                },
                c = function (c) {
                    return (
                        (this.core = a(c).data('lightGallery')),
                        (this.core.s = a.extend({}, b, this.core.s)),
                        this.core.s.share && this.init(),
                        this
                    );
                };
            (c.prototype.init = function () {
                var b = this,
                    c =
                        '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
                (c += b.core.s.facebook
                    ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                      this.core.s.facebookDropdownText +
                      '</span></a></li>'
                    : ''),
                    (c += b.core.s.twitter
                        ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                          this.core.s.twitterDropdownText +
                          '</span></a></li>'
                        : ''),
                    (c += b.core.s.googlePlus
                        ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                          this.core.s.googlePlusDropdownText +
                          '</span></a></li>'
                        : ''),
                    (c += b.core.s.pinterest
                        ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
                          this.core.s.pinterestDropdownText +
                          '</span></a></li>'
                        : ''),
                    (c += '</ul></span>'),
                    this.core.$outer.find('.lg-toolbar').append(c),
                    this.core.$outer
                        .find('.lg')
                        .append('<div id="lg-dropdown-overlay"></div>'),
                    a('#lg-share').on('click.lg', function () {
                        b.core.$outer.toggleClass('lg-dropdown-active');
                    }),
                    a('#lg-dropdown-overlay').on('click.lg', function () {
                        b.core.$outer.removeClass('lg-dropdown-active');
                    }),
                    b.core.$el.on('onAfterSlide.lg.tm', function (c, d, e) {
                        setTimeout(function () {
                            a('#lg-share-facebook').attr(
                                'href',
                                'https://www.facebook.com/sharer/sharer.php?u=' +
                                    encodeURIComponent(
                                        b.getSahreProps(
                                            e,
                                            'facebookShareUrl',
                                        ) || window.location.href,
                                    ),
                            ),
                                a('#lg-share-twitter').attr(
                                    'href',
                                    'https://twitter.com/intent/tweet?text=' +
                                        b.getSahreProps(e, 'tweetText') +
                                        '&url=' +
                                        encodeURIComponent(
                                            b.getSahreProps(
                                                e,
                                                'twitterShareUrl',
                                            ) || window.location.href,
                                        ),
                                ),
                                a('#lg-share-googleplus').attr(
                                    'href',
                                    'https://plus.google.com/share?url=' +
                                        encodeURIComponent(
                                            b.getSahreProps(
                                                e,
                                                'googleplusShareUrl',
                                            ) || window.location.href,
                                        ),
                                ),
                                a('#lg-share-pinterest').attr(
                                    'href',
                                    'http://www.pinterest.com/pin/create/button/?url=' +
                                        encodeURIComponent(
                                            b.getSahreProps(
                                                e,
                                                'pinterestShareUrl',
                                            ) || window.location.href,
                                        ) +
                                        '&media=' +
                                        encodeURIComponent(
                                            b.getSahreProps(e, 'src'),
                                        ) +
                                        '&description=' +
                                        b.getSahreProps(e, 'pinterestText'),
                                );
                        }, 100);
                    });
            }),
                (c.prototype.getSahreProps = function (a, b) {
                    var c = '';
                    if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b];
                    else {
                        var d = this.core.$items.eq(a).attr('href'),
                            e = this.core.$items.eq(a).data(b);
                        c = 'src' === b ? d || e : e;
                    }
                    return c;
                }),
                (c.prototype.destroy = function () {}),
                (a.fn.lightGallery.modules.share = c);
        })();
    });

/*========== Odometer ==========*/
/*! odometer 0.4.6 */
(function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G = [].slice;
    (q = '<span class="odometer-value"></span>'),
        (n =
            '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' +
            q +
            '</span></span>'),
        (d =
            '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' +
            n +
            '</span></span>'),
        (g = '<span class="odometer-formatting-mark"></span>'),
        (c = '(,ddd).dd'),
        (h = /^\(?([^)]*)\)?(?:(.)(d+))?$/),
        (i = 30),
        (f = 2e3),
        (a = 20),
        (j = 2),
        (e = 0.5),
        (k = 1e3 / i),
        (b = 1e3 / a),
        (o =
            'transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd'),
        (y = document.createElement('div').style),
        (p =
            null != y.transition ||
            null != y.webkitTransition ||
            null != y.mozTransition ||
            null != y.oTransition),
        (w =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame),
        (l =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver),
        (s = function (a) {
            var b;
            return (
                (b = document.createElement('div')),
                (b.innerHTML = a),
                b.children[0]
            );
        }),
        (v = function (a, b) {
            return (a.className = a.className.replace(
                new RegExp('(^| )' + b.split(' ').join('|') + '( |$)', 'gi'),
                ' ',
            ));
        }),
        (r = function (a, b) {
            return v(a, b), (a.className += ' ' + b);
        }),
        (z = function (a, b) {
            var c;
            return null != document.createEvent
                ? ((c = document.createEvent('HTMLEvents')),
                  c.initEvent(b, !0, !0),
                  a.dispatchEvent(c))
                : void 0;
        }),
        (u = function () {
            var a, b;
            return null !=
                (a =
                    null != (b = window.performance)
                        ? 'function' == typeof b.now
                            ? b.now()
                            : void 0
                        : void 0)
                ? a
                : +new Date();
        }),
        (x = function (a, b) {
            return (
                null == b && (b = 0),
                b
                    ? ((a *= Math.pow(10, b)),
                      (a += 0.5),
                      (a = Math.floor(a)),
                      (a /= Math.pow(10, b)))
                    : Math.round(a)
            );
        }),
        (A = function (a) {
            return 0 > a ? Math.ceil(a) : Math.floor(a);
        }),
        (t = function (a) {
            return a - x(a);
        }),
        (C = !1),
        (B = function () {
            var a, b, c, d, e;
            if (!C && null != window.jQuery) {
                for (
                    C = !0, d = ['html', 'text'], e = [], b = 0, c = d.length;
                    c > b;
                    b++
                )
                    (a = d[b]),
                        e.push(
                            (function (a) {
                                var b;
                                return (
                                    (b = window.jQuery.fn[a]),
                                    (window.jQuery.fn[a] = function (a) {
                                        var c;
                                        return null == a ||
                                            null ==
                                                (null != (c = this[0])
                                                    ? c.odometer
                                                    : void 0)
                                            ? b.apply(this, arguments)
                                            : this[0].odometer.update(a);
                                    })
                                );
                            })(a),
                        );
                return e;
            }
        })(),
        setTimeout(B, 0),
        (m = (function () {
            function a(b) {
                var c,
                    d,
                    e,
                    g,
                    h,
                    i,
                    l,
                    m,
                    n,
                    o,
                    p = this;
                if (
                    ((this.options = b),
                    (this.el = this.options.el),
                    null != this.el.odometer)
                )
                    return this.el.odometer;
                (this.el.odometer = this), (m = a.options);
                for (d in m)
                    (g = m[d]),
                        null == this.options[d] && (this.options[d] = g);
                null == (h = this.options).duration && (h.duration = f),
                    (this.MAX_VALUES = (this.options.duration / k / j) | 0),
                    this.resetFormat(),
                    (this.value = this.cleanValue(
                        null != (n = this.options.value) ? n : '',
                    )),
                    this.renderInside(),
                    this.render();
                try {
                    for (
                        o = ['innerHTML', 'innerText', 'textContent'],
                            i = 0,
                            l = o.length;
                        l > i;
                        i++
                    )
                        (e = o[i]),
                            null != this.el[e] &&
                                !(function (a) {
                                    return Object.defineProperty(p.el, a, {
                                        get: function () {
                                            var b;
                                            return 'innerHTML' === a
                                                ? p.inside.outerHTML
                                                : null !=
                                                  (b = p.inside.innerText)
                                                ? b
                                                : p.inside.textContent;
                                        },
                                        set: function (a) {
                                            return p.update(a);
                                        },
                                    });
                                })(e);
                } catch (q) {
                    (c = q), this.watchForMutations();
                }
            }
            return (
                (a.prototype.renderInside = function () {
                    return (
                        (this.inside = document.createElement('div')),
                        (this.inside.className = 'odometer-inside'),
                        (this.el.innerHTML = ''),
                        this.el.appendChild(this.inside)
                    );
                }),
                (a.prototype.watchForMutations = function () {
                    var a,
                        b = this;
                    if (null != l)
                        try {
                            return (
                                null == this.observer &&
                                    (this.observer = new l(function () {
                                        var a;
                                        return (
                                            (a = b.el.innerText),
                                            b.renderInside(),
                                            b.render(b.value),
                                            b.update(a)
                                        );
                                    })),
                                (this.watchMutations = !0),
                                this.startWatchingMutations()
                            );
                        } catch (c) {
                            a = c;
                        }
                }),
                (a.prototype.startWatchingMutations = function () {
                    return this.watchMutations
                        ? this.observer.observe(this.el, {childList: !0})
                        : void 0;
                }),
                (a.prototype.stopWatchingMutations = function () {
                    var a;
                    return null != (a = this.observer)
                        ? a.disconnect()
                        : void 0;
                }),
                (a.prototype.cleanValue = function (a) {
                    var b;
                    return (
                        'string' == typeof a &&
                            ((a = a.replace(
                                null != (b = this.format.radix) ? b : '.',
                                '<radix>',
                            )),
                            (a = a.replace(/[.,]/g, '')),
                            (a = a.replace('<radix>', '.')),
                            (a = parseFloat(a, 10) || 0)),
                        x(a, this.format.precision)
                    );
                }),
                (a.prototype.bindTransitionEnd = function () {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g = this;
                    if (!this.transitionEndBound) {
                        for (
                            this.transitionEndBound = !0,
                                b = !1,
                                e = o.split(' '),
                                f = [],
                                c = 0,
                                d = e.length;
                            d > c;
                            c++
                        )
                            (a = e[c]),
                                f.push(
                                    this.el.addEventListener(
                                        a,
                                        function () {
                                            return b
                                                ? !0
                                                : ((b = !0),
                                                  setTimeout(function () {
                                                      return (
                                                          g.render(),
                                                          (b = !1),
                                                          z(
                                                              g.el,
                                                              'odometerdone',
                                                          )
                                                      );
                                                  }, 0),
                                                  !0);
                                        },
                                        !1,
                                    ),
                                );
                        return f;
                    }
                }),
                (a.prototype.resetFormat = function () {
                    var a, b, d, e, f, g, i, j;
                    if (
                        ((a = null != (i = this.options.format) ? i : c),
                        a || (a = 'd'),
                        (d = h.exec(a)),
                        !d)
                    )
                        throw new Error('Odometer: Unparsable digit format');
                    return (
                        (j = d.slice(1, 4)),
                        (g = j[0]),
                        (f = j[1]),
                        (b = j[2]),
                        (e = (null != b ? b.length : void 0) || 0),
                        (this.format = {repeating: g, radix: f, precision: e})
                    );
                }),
                (a.prototype.render = function (a) {
                    var b, c, d, e, f, g, h, i, j, k, l, m;
                    for (
                        null == a && (a = this.value),
                            this.stopWatchingMutations(),
                            this.resetFormat(),
                            this.inside.innerHTML = '',
                            g = this.options.theme,
                            b = this.el.className.split(' '),
                            f = [],
                            i = 0,
                            k = b.length;
                        k > i;
                        i++
                    )
                        (c = b[i]),
                            c.length &&
                                ((e = /^odometer-theme-(.+)$/.exec(c))
                                    ? (g = e[1])
                                    : /^odometer(-|$)/.test(c) || f.push(c));
                    for (
                        f.push('odometer'),
                            p || f.push('odometer-no-transitions'),
                            f.push(
                                g
                                    ? 'odometer-theme-' + g
                                    : 'odometer-auto-theme',
                            ),
                            this.el.className = f.join(' '),
                            this.ribbons = {},
                            this.digits = [],
                            h = !this.format.precision || !t(a) || !1,
                            m = a.toString().split('').reverse(),
                            j = 0,
                            l = m.length;
                        l > j;
                        j++
                    )
                        (d = m[j]), '.' === d && (h = !0), this.addDigit(d, h);
                    return this.startWatchingMutations();
                }),
                (a.prototype.update = function (a) {
                    var b,
                        c = this;
                    return (
                        (a = this.cleanValue(a)),
                        (b = a - this.value)
                            ? (v(
                                  this.el,
                                  'odometer-animating-up odometer-animating-down odometer-animating',
                              ),
                              b > 0
                                  ? r(this.el, 'odometer-animating-up')
                                  : r(this.el, 'odometer-animating-down'),
                              this.stopWatchingMutations(),
                              this.animate(a),
                              this.startWatchingMutations(),
                              setTimeout(function () {
                                  return (
                                      c.el.offsetHeight,
                                      r(c.el, 'odometer-animating')
                                  );
                              }, 0),
                              (this.value = a))
                            : void 0
                    );
                }),
                (a.prototype.renderDigit = function () {
                    return s(d);
                }),
                (a.prototype.insertDigit = function (a, b) {
                    return null != b
                        ? this.inside.insertBefore(a, b)
                        : this.inside.children.length
                        ? this.inside.insertBefore(a, this.inside.children[0])
                        : this.inside.appendChild(a);
                }),
                (a.prototype.addSpacer = function (a, b, c) {
                    var d;
                    return (
                        (d = s(g)),
                        (d.innerHTML = a),
                        c && r(d, c),
                        this.insertDigit(d, b)
                    );
                }),
                (a.prototype.addDigit = function (a, b) {
                    var c, d, e, f;
                    if ((null == b && (b = !0), '-' === a))
                        return this.addSpacer(
                            a,
                            null,
                            'odometer-negation-mark',
                        );
                    if ('.' === a)
                        return this.addSpacer(
                            null != (f = this.format.radix) ? f : '.',
                            null,
                            'odometer-radix-mark',
                        );
                    if (b)
                        for (e = !1; ; ) {
                            if (!this.format.repeating.length) {
                                if (e)
                                    throw new Error(
                                        'Bad odometer format without digits',
                                    );
                                this.resetFormat(), (e = !0);
                            }
                            if (
                                ((c =
                                    this.format.repeating[
                                        this.format.repeating.length - 1
                                    ]),
                                (this.format.repeating =
                                    this.format.repeating.substring(
                                        0,
                                        this.format.repeating.length - 1,
                                    )),
                                'd' === c)
                            )
                                break;
                            this.addSpacer(c);
                        }
                    return (
                        (d = this.renderDigit()),
                        (d.querySelector('.odometer-value').innerHTML = a),
                        this.digits.push(d),
                        this.insertDigit(d)
                    );
                }),
                (a.prototype.animate = function (a) {
                    return p && 'count' !== this.options.animation
                        ? this.animateSlide(a)
                        : this.animateCount(a);
                }),
                (a.prototype.animateCount = function (a) {
                    var c,
                        d,
                        e,
                        f,
                        g,
                        h = this;
                    if ((d = +a - this.value))
                        return (
                            (f = e = u()),
                            (c = this.value),
                            (g = function () {
                                var i, j, k;
                                return u() - f > h.options.duration
                                    ? ((h.value = a),
                                      h.render(),
                                      void z(h.el, 'odometerdone'))
                                    : ((i = u() - e),
                                      i > b &&
                                          ((e = u()),
                                          (k = i / h.options.duration),
                                          (j = d * k),
                                          (c += j),
                                          h.render(Math.round(c))),
                                      null != w ? w(g) : setTimeout(g, b));
                            })()
                        );
                }),
                (a.prototype.getDigitCount = function () {
                    var a, b, c, d, e, f;
                    for (
                        d = 1 <= arguments.length ? G.call(arguments, 0) : [],
                            a = e = 0,
                            f = d.length;
                        f > e;
                        a = ++e
                    )
                        (c = d[a]), (d[a] = Math.abs(c));
                    return (
                        (b = Math.max.apply(Math, d)),
                        Math.ceil(Math.log(b + 1) / Math.log(10))
                    );
                }),
                (a.prototype.getFractionalDigitCount = function () {
                    var a, b, c, d, e, f, g;
                    for (
                        e = 1 <= arguments.length ? G.call(arguments, 0) : [],
                            b = /^\-?\d*\.(\d*?)0*$/,
                            a = f = 0,
                            g = e.length;
                        g > f;
                        a = ++f
                    )
                        (d = e[a]),
                            (e[a] = d.toString()),
                            (c = b.exec(e[a])),
                            (e[a] = null == c ? 0 : c[1].length);
                    return Math.max.apply(Math, e);
                }),
                (a.prototype.resetDigits = function () {
                    return (
                        (this.digits = []),
                        (this.ribbons = []),
                        (this.inside.innerHTML = ''),
                        this.resetFormat()
                    );
                }),
                (a.prototype.animateSlide = function (a) {
                    var b,
                        c,
                        d,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        s,
                        t,
                        u,
                        v,
                        w,
                        x,
                        y,
                        z,
                        B,
                        C,
                        D,
                        E;
                    if (
                        ((s = this.value),
                        (j = this.getFractionalDigitCount(s, a)),
                        j && ((a *= Math.pow(10, j)), (s *= Math.pow(10, j))),
                        (d = a - s))
                    ) {
                        for (
                            this.bindTransitionEnd(),
                                f = this.getDigitCount(s, a),
                                g = [],
                                b = 0,
                                m = v = 0;
                            f >= 0 ? f > v : v > f;
                            m = f >= 0 ? ++v : --v
                        ) {
                            if (
                                ((t = A(s / Math.pow(10, f - m - 1))),
                                (i = A(a / Math.pow(10, f - m - 1))),
                                (h = i - t),
                                Math.abs(h) > this.MAX_VALUES)
                            ) {
                                for (
                                    l = [],
                                        n =
                                            h /
                                            (this.MAX_VALUES +
                                                this.MAX_VALUES * b * e),
                                        c = t;
                                    (h > 0 && i > c) || (0 > h && c > i);

                                )
                                    l.push(Math.round(c)), (c += n);
                                l[l.length - 1] !== i && l.push(i), b++;
                            } else
                                l = function () {
                                    E = [];
                                    for (
                                        var a = t;
                                        i >= t ? i >= a : a >= i;
                                        i >= t ? a++ : a--
                                    )
                                        E.push(a);
                                    return E;
                                }.apply(this);
                            for (m = w = 0, y = l.length; y > w; m = ++w)
                                (k = l[m]), (l[m] = Math.abs(k % 10));
                            g.push(l);
                        }
                        for (
                            this.resetDigits(),
                                D = g.reverse(),
                                m = x = 0,
                                z = D.length;
                            z > x;
                            m = ++x
                        )
                            for (
                                l = D[m],
                                    this.digits[m] ||
                                        this.addDigit(' ', m >= j),
                                    null == (u = this.ribbons)[m] &&
                                        (u[m] = this.digits[m].querySelector(
                                            '.odometer-ribbon-inner',
                                        )),
                                    this.ribbons[m].innerHTML = '',
                                    0 > d && (l = l.reverse()),
                                    o = C = 0,
                                    B = l.length;
                                B > C;
                                o = ++C
                            )
                                (k = l[o]),
                                    (q = document.createElement('div')),
                                    (q.className = 'odometer-value'),
                                    (q.innerHTML = k),
                                    this.ribbons[m].appendChild(q),
                                    o === l.length - 1 &&
                                        r(q, 'odometer-last-value'),
                                    0 === o && r(q, 'odometer-first-value');
                        return (
                            0 > t && this.addDigit('-'),
                            (p = this.inside.querySelector(
                                '.odometer-radix-mark',
                            )),
                            null != p && p.parent.removeChild(p),
                            j
                                ? this.addSpacer(
                                      this.format.radix,
                                      this.digits[j - 1],
                                      'odometer-radix-mark',
                                  )
                                : void 0
                        );
                    }
                }),
                a
            );
        })()),
        (m.options = null != (E = window.odometerOptions) ? E : {}),
        setTimeout(function () {
            var a, b, c, d, e;
            if (window.odometerOptions) {
                (d = window.odometerOptions), (e = []);
                for (a in d)
                    (b = d[a]),
                        e.push(
                            null != (c = m.options)[a]
                                ? (c = m.options)[a]
                                : (c[a] = b),
                        );
                return e;
            }
        }, 0),
        (m.init = function () {
            var a, b, c, d, e, f;
            if (null != document.querySelectorAll) {
                for (
                    b = document.querySelectorAll(
                        m.options.selector || '.odometer',
                    ),
                        f = [],
                        c = 0,
                        d = b.length;
                    d > c;
                    c++
                )
                    (a = b[c]),
                        f.push(
                            (a.odometer = new m({
                                el: a,
                                value:
                                    null != (e = a.innerText)
                                        ? e
                                        : a.textContent,
                            })),
                        );
                return f;
            }
        }),
        null !=
            (null != (F = document.documentElement) ? F.doScroll : void 0) &&
        null != document.createEventObject
            ? ((D = document.onreadystatechange),
              (document.onreadystatechange = function () {
                  return (
                      'complete' === document.readyState &&
                          m.options.auto !== !1 &&
                          m.init(),
                      null != D ? D.apply(this, arguments) : void 0
                  );
              }))
            : document.addEventListener(
                  'DOMContentLoaded',
                  function () {
                      return m.options.auto !== !1 ? m.init() : void 0;
                  },
                  !1,
              ),
        'function' == typeof define && define.amd
            ? define(['jquery'], function () {
                  return m;
              })
            : typeof exports === !1
            ? (module.exports = m)
            : (window.Odometer = m);
}.call(this));

/*========== Instafeed js ==========*/
(function () {
    var e;
    (e = (function () {
        function e(e, t) {
            var n, r;
            this.options = {
                target: 'instafeed',
                get: 'popular',
                resolution: 'thumbnail',
                sortBy: 'none',
                links: !0,
                mock: !1,
                useHttp: !1,
            };
            if (typeof e == 'object')
                for (n in e) (r = e[n]), (this.options[n] = r);
            (this.context = t != null ? t : this),
                (this.unique = this._genKey());
        }
        return (
            (e.prototype.hasNext = function () {
                return (
                    typeof this.context.nextUrl == 'string' &&
                    this.context.nextUrl.length > 0
                );
            }),
            (e.prototype.next = function () {
                return this.hasNext() ? this.run(this.context.nextUrl) : !1;
            }),
            (e.prototype.run = function (t) {
                var n, r, i;
                if (
                    typeof this.options.clientId != 'string' &&
                    typeof this.options.accessToken != 'string'
                )
                    throw new Error('Missing clientId or accessToken.');
                if (
                    typeof this.options.accessToken != 'string' &&
                    typeof this.options.clientId != 'string'
                )
                    throw new Error('Missing clientId or accessToken.');
                return (
                    this.options.before != null &&
                        typeof this.options.before == 'function' &&
                        this.options.before.call(this),
                    typeof document != 'undefined' &&
                        document !== null &&
                        ((i = document.createElement('script')),
                        (i.id = 'instafeed-fetcher'),
                        (i.src = t || this._buildUrl()),
                        (n = document.getElementsByTagName('head')),
                        n[0].appendChild(i),
                        (r = 'instafeedCache' + this.unique),
                        (window[r] = new e(this.options, this)),
                        (window[r].unique = this.unique)),
                    !0
                );
            }),
            (e.prototype.parse = function (e) {
                var t,
                    n,
                    r,
                    i,
                    s,
                    o,
                    u,
                    a,
                    f,
                    l,
                    c,
                    h,
                    p,
                    d,
                    v,
                    m,
                    g,
                    y,
                    b,
                    w,
                    E,
                    S,
                    x,
                    T,
                    N,
                    C,
                    k,
                    L,
                    A,
                    O,
                    M,
                    _,
                    D;
                if (typeof e != 'object') {
                    if (
                        this.options.error != null &&
                        typeof this.options.error == 'function'
                    )
                        return (
                            this.options.error.call(this, 'Invalid JSON data'),
                            !1
                        );
                    throw new Error('Invalid JSON response');
                }
                if (e.meta.code !== 200) {
                    if (
                        this.options.error != null &&
                        typeof this.options.error == 'function'
                    )
                        return (
                            this.options.error.call(this, e.meta.error_message),
                            !1
                        );
                    throw new Error(
                        'Error from Instagram: ' + e.meta.error_message,
                    );
                }
                if (e.data.length === 0) {
                    if (
                        this.options.error != null &&
                        typeof this.options.error == 'function'
                    )
                        return (
                            this.options.error.call(
                                this,
                                'No images were returned from Instagram',
                            ),
                            !1
                        );
                    throw new Error('No images were returned from Instagram');
                }
                this.options.success != null &&
                    typeof this.options.success == 'function' &&
                    this.options.success.call(this, e),
                    (this.context.nextUrl = ''),
                    e.pagination != null &&
                        (this.context.nextUrl = e.pagination.next_url);
                if (this.options.sortBy !== 'none') {
                    this.options.sortBy === 'random'
                        ? (M = ['', 'random'])
                        : (M = this.options.sortBy.split('-')),
                        (O = M[0] === 'least' ? !0 : !1);
                    switch (M[1]) {
                        case 'random':
                            e.data.sort(function () {
                                return 0.5 - Math.random();
                            });
                            break;
                        case 'recent':
                            e.data = this._sortBy(e.data, 'created_time', O);
                            break;
                        case 'liked':
                            e.data = this._sortBy(e.data, 'likes.count', O);
                            break;
                        case 'commented':
                            e.data = this._sortBy(e.data, 'comments.count', O);
                            break;
                        default:
                            throw new Error(
                                "Invalid option for sortBy: '" +
                                    this.options.sortBy +
                                    "'.",
                            );
                    }
                }
                if (
                    typeof document != 'undefined' &&
                    document !== null &&
                    this.options.mock === !1
                ) {
                    (m = e.data),
                        (A = parseInt(this.options.limit, 10)),
                        this.options.limit != null &&
                            m.length > A &&
                            (m = m.slice(0, A)),
                        (u = document.createDocumentFragment()),
                        this.options.filter != null &&
                            typeof this.options.filter == 'function' &&
                            (m = this._filter(m, this.options.filter));
                    if (
                        this.options.template != null &&
                        typeof this.options.template == 'string'
                    ) {
                        (f = ''),
                            (d = ''),
                            (w = ''),
                            (D = document.createElement('div'));
                        for (c = 0, N = m.length; c < N; c++) {
                            (h = m[c]), (p = h.images[this.options.resolution]);
                            if (typeof p != 'object')
                                throw (
                                    ((o =
                                        'No image found for resolution: ' +
                                        this.options.resolution +
                                        '.'),
                                    new Error(o))
                                );
                            (E = p.width),
                                (y = p.height),
                                (b = 'square'),
                                E > y && (b = 'landscape'),
                                E < y && (b = 'portrait'),
                                (v = p.url),
                                (l =
                                    window.location.protocol.indexOf('http') >=
                                    0),
                                l &&
                                    !this.options.useHttp &&
                                    (v = v.replace(/https?:\/\//, '//')),
                                (d = this._makeTemplate(this.options.template, {
                                    model: h,
                                    id: h.id,
                                    link: h.link,
                                    type: h.type,
                                    image: v,
                                    width: E,
                                    height: y,
                                    orientation: b,
                                    caption: this._getObjectProperty(
                                        h,
                                        'caption.text',
                                    ),
                                    likes: h.likes.count,
                                    comments: h.comments.count,
                                    location: this._getObjectProperty(
                                        h,
                                        'location.name',
                                    ),
                                })),
                                (f += d);
                        }
                        (D.innerHTML = f),
                            (i = []),
                            (r = 0),
                            (n = D.childNodes.length);
                        while (r < n) i.push(D.childNodes[r]), (r += 1);
                        for (x = 0, C = i.length; x < C; x++)
                            (L = i[x]), u.appendChild(L);
                    } else
                        for (T = 0, k = m.length; T < k; T++) {
                            (h = m[T]),
                                (g = document.createElement('img')),
                                (p = h.images[this.options.resolution]);
                            if (typeof p != 'object')
                                throw (
                                    ((o =
                                        'No image found for resolution: ' +
                                        this.options.resolution +
                                        '.'),
                                    new Error(o))
                                );
                            (v = p.url),
                                (l =
                                    window.location.protocol.indexOf('http') >=
                                    0),
                                l &&
                                    !this.options.useHttp &&
                                    (v = v.replace(/https?:\/\//, '//')),
                                (g.src = v),
                                this.options.links === !0
                                    ? ((t = document.createElement('a')),
                                      (t.href = h.link),
                                      t.appendChild(g),
                                      u.appendChild(t))
                                    : u.appendChild(g);
                        }
                    (_ = this.options.target),
                        typeof _ == 'string' &&
                            (_ = document.getElementById(_));
                    if (_ == null)
                        throw (
                            ((o =
                                'No element with id="' +
                                this.options.target +
                                '" on page.'),
                            new Error(o))
                        );
                    _.appendChild(u),
                        (a = document.getElementsByTagName('head')[0]),
                        a.removeChild(
                            document.getElementById('instafeed-fetcher'),
                        ),
                        (S = 'instafeedCache' + this.unique),
                        (window[S] = void 0);
                    try {
                        delete window[S];
                    } catch (P) {
                        s = P;
                    }
                }
                return (
                    this.options.after != null &&
                        typeof this.options.after == 'function' &&
                        this.options.after.call(this),
                    !0
                );
            }),
            (e.prototype._buildUrl = function () {
                var e, t, n;
                e = 'https://api.instagram.com/v1';
                switch (this.options.get) {
                    case 'popular':
                        t = 'media/popular';
                        break;
                    case 'tagged':
                        if (!this.options.tagName)
                            throw new Error(
                                "No tag name specified. Use the 'tagName' option.",
                            );
                        t = 'tags/' + this.options.tagName + '/media/recent';
                        break;
                    case 'location':
                        if (!this.options.locationId)
                            throw new Error(
                                "No location specified. Use the 'locationId' option.",
                            );
                        t =
                            'locations/' +
                            this.options.locationId +
                            '/media/recent';
                        break;
                    case 'user':
                        if (!this.options.userId)
                            throw new Error(
                                "No user specified. Use the 'userId' option.",
                            );
                        t = 'users/' + this.options.userId + '/media/recent';
                        break;
                    default:
                        throw new Error(
                            "Invalid option for get: '" +
                                this.options.get +
                                "'.",
                        );
                }
                return (
                    (n = e + '/' + t),
                    this.options.accessToken != null
                        ? (n += '?access_token=' + this.options.accessToken)
                        : (n += '?client_id=' + this.options.clientId),
                    this.options.limit != null &&
                        (n += '&count=' + this.options.limit),
                    (n += '&callback=instafeedCache' + this.unique + '.parse'),
                    n
                );
            }),
            (e.prototype._genKey = function () {
                var e;
                return (
                    (e = function () {
                        return (((1 + Math.random()) * 65536) | 0)
                            .toString(16)
                            .substring(1);
                    }),
                    '' + e() + e() + e() + e()
                );
            }),
            (e.prototype._makeTemplate = function (e, t) {
                var n, r, i, s, o;
                (r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/), (n = e);
                while (r.test(n))
                    (s = n.match(r)[1]),
                        (o =
                            (i = this._getObjectProperty(t, s)) != null
                                ? i
                                : ''),
                        (n = n.replace(r, function () {
                            return '' + o;
                        }));
                return n;
            }),
            (e.prototype._getObjectProperty = function (e, t) {
                var n, r;
                (t = t.replace(/\[(\w+)\]/g, '.$1')), (r = t.split('.'));
                while (r.length) {
                    n = r.shift();
                    if (!(e != null && n in e)) return null;
                    e = e[n];
                }
                return e;
            }),
            (e.prototype._sortBy = function (e, t, n) {
                var r;
                return (
                    (r = function (e, r) {
                        var i, s;
                        return (
                            (i = this._getObjectProperty(e, t)),
                            (s = this._getObjectProperty(r, t)),
                            n ? (i > s ? 1 : -1) : i < s ? 1 : -1
                        );
                    }),
                    e.sort(r.bind(this)),
                    e
                );
            }),
            (e.prototype._filter = function (e, t) {
                var n, r, i, s, o;
                (n = []),
                    (r = function (e) {
                        if (t(e)) return n.push(e);
                    });
                for (i = 0, o = e.length; i < o; i++) (s = e[i]), r(s);
                return n;
            }),
            e
        );
    })()),
        (function (e, t) {
            return typeof define == 'function' && define.amd
                ? define([], t)
                : typeof module == 'object' && module.exports
                ? (module.exports = t())
                : (e.Instafeed = t());
        })(this, function () {
            return e;
        });
}.call(this));

/*========== Nice Select ==========*/
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!(function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(
                e('<div></div>')
                    .addClass('nice-select')
                    .addClass(t.attr('class') || '')
                    .addClass(t.attr('disabled') ? 'disabled' : '')
                    .attr('tabindex', t.attr('disabled') ? null : '0')
                    .html(
                        '<span class="current"></span><ul class="list"></ul>',
                    ),
            );
            var s = t.next(),
                n = t.find('option'),
                i = t.find('option:selected');
            s.find('.current').html(i.data('display') || i.text()),
                n.each(function (t) {
                    var n = e(this),
                        i = n.data('display');
                    s.find('ul').append(
                        e('<li></li>')
                            .attr('data-value', n.val())
                            .attr('data-display', i || null)
                            .addClass(
                                'option' +
                                    (n.is(':selected') ? ' selected' : '') +
                                    (n.is(':disabled') ? ' disabled' : ''),
                            )
                            .html(n.text()),
                    );
                });
        }
        if ('string' == typeof t)
            return (
                'update' == t
                    ? this.each(function () {
                          var t = e(this),
                              n = e(this).next('.nice-select'),
                              i = n.hasClass('open');
                          n.length &&
                              (n.remove(),
                              s(t),
                              i && t.next().trigger('click'));
                      })
                    : 'destroy' == t
                    ? (this.each(function () {
                          var t = e(this),
                              s = e(this).next('.nice-select');
                          s.length && (s.remove(), t.css('display', ''));
                      }),
                      0 == e('.nice-select').length &&
                          e(document).off('.nice_select'))
                    : console.log('Method "' + t + '" does not exist.'),
                this
            );
        this.hide(),
            this.each(function () {
                var t = e(this);
                t.next().hasClass('nice-select') || s(t);
            }),
            e(document).off('.nice_select'),
            e(document).on('click.nice_select', '.nice-select', function (t) {
                var s = e(this);
                e('.nice-select').not(s).removeClass('open'),
                    s.toggleClass('open'),
                    s.hasClass('open')
                        ? (s.find('.option'),
                          s.find('.focus').removeClass('focus'),
                          s.find('.selected').addClass('focus'))
                        : s.focus();
            }),
            e(document).on('click.nice_select', function (t) {
                0 === e(t.target).closest('.nice-select').length &&
                    e('.nice-select').removeClass('open').find('.option');
            }),
            e(document).on(
                'click.nice_select',
                '.nice-select .option:not(.disabled)',
                function (t) {
                    var s = e(this),
                        n = s.closest('.nice-select');
                    n.find('.selected').removeClass('selected'),
                        s.addClass('selected');
                    var i = s.data('display') || s.text();
                    n.find('.current').text(i),
                        n.prev('select').val(s.data('value')).trigger('change');
                },
            ),
            e(document).on('keydown.nice_select', '.nice-select', function (t) {
                var s = e(this),
                    n = e(s.find('.focus') || s.find('.list .option.selected'));
                if (32 == t.keyCode || 13 == t.keyCode)
                    return (
                        s.hasClass('open')
                            ? n.trigger('click')
                            : s.trigger('click'),
                        !1
                    );
                if (40 == t.keyCode) {
                    if (s.hasClass('open')) {
                        var i = n.nextAll('.option:not(.disabled)').first();
                        i.length > 0 &&
                            (s.find('.focus').removeClass('focus'),
                            i.addClass('focus'));
                    } else s.trigger('click');
                    return !1;
                }
                if (38 == t.keyCode) {
                    if (s.hasClass('open')) {
                        var l = n.prevAll('.option:not(.disabled)').first();
                        l.length > 0 &&
                            (s.find('.focus').removeClass('focus'),
                            l.addClass('focus'));
                    } else s.trigger('click');
                    return !1;
                }
                if (27 == t.keyCode) s.hasClass('open') && s.trigger('click');
                else if (9 == t.keyCode && s.hasClass('open')) return !1;
            });
        var n = document.createElement('a').style;
        return (
            (n.cssText = 'pointer-events:auto'),
            'auto' !== n.pointerEvents &&
                e('html').addClass('no-csspointerevents'),
            this
        );
    };
})(jQuery);

/*========== Twitter Fetcher ==========*/
/*********************************************************************
 *  #### Twitter Post Fetcher v18.0.2 ####
 *  Coded by Jason Mayes 2015. A present to all the developers out there.
 *  www.jasonmayes.com
 *  Please keep this disclaimer with my code if you use it. Thanks. :-)
 *  Got feedback or questions, ask here:
 *  http://www.jasonmayes.com/projects/twitterApi/
 *  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
 *  Updates will be posted to this site.
 *********************************************************************/
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        factory();
    }
})(this, function () {
    var domNode = '';
    var maxTweets = 20;
    var parseLinks = true;
    var queue = [];
    var inProgress = false;
    var printTime = true;
    var printUser = true;
    var formatterFunction = null;
    var supportsClassName = true;
    var showRts = true;
    var customCallbackFunction = null;
    var showInteractionLinks = true;
    var showImages = false;
    var useEmoji = false;
    var targetBlank = true;
    var lang = 'en';
    var permalinks = true;
    var dataOnly = false;
    var script = null;
    var scriptAdded = false;
    function handleTweets(tweets) {
        if (customCallbackFunction === null) {
            var x = tweets.length;
            var n = 0;
            var element = document.getElementById(domNode);
            var html = '<ul>';
            while (n < x) {
                html += '<li>' + tweets[n] + '</li>';
                n++;
            }
            html += '</ul>';
            element.innerHTML = html;
        } else {
            customCallbackFunction(tweets);
        }
    }
    function strip(data) {
        return data
            .replace(/<b[^>]*>(.*?)<\/b>/gi, function (a, s) {
                return s;
            })
            .replace(
                /class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,
                '',
            );
    }
    function targetLinksToNewWindow(el) {
        var links = el.getElementsByTagName('a');
        for (var i = links.length - 1; i >= 0; i--) {
            links[i].setAttribute('target', '_blank');
            links[i].setAttribute('rel', 'noopener');
        }
    }
    function getElementsByClassName(node, classname) {
        var a = [];
        var regex = new RegExp('(^| )' + classname + '( |$)');
        var elems = node.getElementsByTagName('*');
        for (var i = 0, j = elems.length; i < j; i++) {
            if (regex.test(elems[i].className)) {
                a.push(elems[i]);
            }
        }
        return a;
    }
    function extractImageUrl(image_data) {
        if (
            image_data !== undefined &&
            image_data.innerHTML.indexOf('data-image') >= 0
        ) {
            var data_src = image_data.innerHTML.match(
                /data-image=\"([A-z0-9]+:\/\/[A-z0-9]+\.[A-z0-9]+\.[A-z0-9]+\/[A-z0-9]+\/[A-z0-9\-]+)/i,
            )[1];
            return decodeURIComponent(data_src) + '.jpg';
        }
    }
    var twitterFetcher = {
        fetch: function (config) {
            if (config.maxTweets === undefined) {
                config.maxTweets = 20;
            }
            if (config.enableLinks === undefined) {
                config.enableLinks = true;
            }
            if (config.showUser === undefined) {
                config.showUser = true;
            }
            if (config.showTime === undefined) {
                config.showTime = true;
            }
            if (config.dateFunction === undefined) {
                config.dateFunction = 'default';
            }
            if (config.showRetweet === undefined) {
                config.showRetweet = true;
            }
            if (config.customCallback === undefined) {
                config.customCallback = null;
            }
            if (config.showInteraction === undefined) {
                config.showInteraction = true;
            }
            if (config.showImages === undefined) {
                config.showImages = false;
            }
            if (config.useEmoji === undefined) {
                config.useEmoji = false;
            }
            if (config.linksInNewWindow === undefined) {
                config.linksInNewWindow = true;
            }
            if (config.showPermalinks === undefined) {
                config.showPermalinks = true;
            }
            if (config.dataOnly === undefined) {
                config.dataOnly = false;
            }
            if (inProgress) {
                queue.push(config);
            } else {
                inProgress = true;
                domNode = config.domId;
                maxTweets = config.maxTweets;
                parseLinks = config.enableLinks;
                printUser = config.showUser;
                printTime = config.showTime;
                showRts = config.showRetweet;
                formatterFunction = config.dateFunction;
                customCallbackFunction = config.customCallback;
                showInteractionLinks = config.showInteraction;
                showImages = config.showImages;
                useEmoji = config.useEmoji;
                targetBlank = config.linksInNewWindow;
                permalinks = config.showPermalinks;
                dataOnly = config.dataOnly;
                var head = document.getElementsByTagName('head')[0];
                if (script !== null) {
                    head.removeChild(script);
                }
                script = document.createElement('script');
                script.type = 'text/javascript';
                if (config.list !== undefined) {
                    script.src =
                        'https://syndication.twitter.com/timeline/list?' +
                        'callback=__twttrf.callback&dnt=false&list_slug=' +
                        config.list.listSlug +
                        '&screen_name=' +
                        config.list.screenName +
                        '&suppress_response_codes=true&lang=' +
                        (config.lang || lang) +
                        '&rnd=' +
                        Math.random();
                } else if (config.profile !== undefined) {
                    script.src =
                        'https://syndication.twitter.com/timeline/profile?' +
                        'callback=__twttrf.callback&dnt=false' +
                        '&screen_name=' +
                        config.profile.screenName +
                        '&suppress_response_codes=true&lang=' +
                        (config.lang || lang) +
                        '&rnd=' +
                        Math.random();
                } else if (config.likes !== undefined) {
                    script.src =
                        'https://syndication.twitter.com/timeline/likes?' +
                        'callback=__twttrf.callback&dnt=false' +
                        '&screen_name=' +
                        config.likes.screenName +
                        '&suppress_response_codes=true&lang=' +
                        (config.lang || lang) +
                        '&rnd=' +
                        Math.random();
                } else {
                    script.src =
                        'https://cdn.syndication.twimg.com/widgets/timelines/' +
                        config.id +
                        '?&lang=' +
                        (config.lang || lang) +
                        '&callback=__twttrf.callback&' +
                        'suppress_response_codes=true&rnd=' +
                        Math.random();
                }
                head.appendChild(script);
            }
        },
        callback: function (data) {
            if (data === undefined || data.body === undefined) {
                inProgress = false;
                if (queue.length > 0) {
                    twitterFetcher.fetch(queue[0]);
                    queue.splice(0, 1);
                }
                return;
            }
            if (!useEmoji) {
                data.body = data.body.replace(
                    /(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,
                    '',
                );
            }
            if (!showImages) {
                data.body = data.body.replace(
                    /(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,
                    '',
                );
            }
            if (!printUser) {
                data.body = data.body.replace(
                    /(<img[^c]*class="Avatar"[^>]*>)/g,
                    '',
                );
            }
            var div = document.createElement('div');
            div.innerHTML = data.body;
            if (typeof div.getElementsByClassName === 'undefined') {
                supportsClassName = false;
            }
            function swapDataSrc(element) {
                var avatarImg = element.getElementsByTagName('img')[0];
                if (avatarImg) {
                    avatarImg.src = avatarImg.getAttribute('data-src-2x');
                } else {
                    var screenName = element
                        .getElementsByTagName('a')[0]
                        .getAttribute('href')
                        .split('twitter.com/')[1];
                    var img = document.createElement('img');
                    img.setAttribute(
                        'src',
                        'https://twitter.com/' +
                            screenName +
                            '/profile_image?size=bigger',
                    );
                    element.prepend(img);
                }
                return element;
            }
            var tweets = [];
            var authors = [];
            var times = [];
            var images = [];
            var rts = [];
            var tids = [];
            var permalinksURL = [];
            var x = 0;
            if (supportsClassName) {
                var tmp = div.getElementsByClassName('timeline-Tweet');
                while (x < tmp.length) {
                    if (
                        tmp[x].getElementsByClassName(
                            'timeline-Tweet-retweetCredit',
                        ).length > 0
                    ) {
                        rts.push(true);
                    } else {
                        rts.push(false);
                    }
                    if (!rts[x] || (rts[x] && showRts)) {
                        tweets.push(
                            tmp[x].getElementsByClassName(
                                'timeline-Tweet-text',
                            )[0],
                        );
                        tids.push(tmp[x].getAttribute('data-tweet-id'));
                        if (printUser) {
                            authors.push(
                                swapDataSrc(
                                    tmp[x].getElementsByClassName(
                                        'timeline-Tweet-author',
                                    )[0],
                                ),
                            );
                        }
                        times.push(
                            tmp[x].getElementsByClassName('dt-updated')[0],
                        );
                        permalinksURL.push(
                            tmp[x].getElementsByClassName(
                                'timeline-Tweet-timestamp',
                            )[0],
                        );
                        if (
                            tmp[x].getElementsByClassName(
                                'timeline-Tweet-media',
                            )[0] !== undefined
                        ) {
                            images.push(
                                tmp[x].getElementsByClassName(
                                    'timeline-Tweet-media',
                                )[0],
                            );
                        } else {
                            images.push(undefined);
                        }
                    }
                    x++;
                }
            } else {
                var tmp = getElementsByClassName(div, 'timeline-Tweet');
                while (x < tmp.length) {
                    if (
                        getElementsByClassName(
                            tmp[x],
                            'timeline-Tweet-retweetCredit',
                        ).length > 0
                    ) {
                        rts.push(true);
                    } else {
                        rts.push(false);
                    }
                    if (!rts[x] || (rts[x] && showRts)) {
                        tweets.push(
                            getElementsByClassName(
                                tmp[x],
                                'timeline-Tweet-text',
                            )[0],
                        );
                        tids.push(tmp[x].getAttribute('data-tweet-id'));
                        if (printUser) {
                            authors.push(
                                swapDataSrc(
                                    getElementsByClassName(
                                        tmp[x],
                                        'timeline-Tweet-author',
                                    )[0],
                                ),
                            );
                        }
                        times.push(
                            getElementsByClassName(tmp[x], 'dt-updated')[0],
                        );
                        permalinksURL.push(
                            getElementsByClassName(
                                tmp[x],
                                'timeline-Tweet-timestamp',
                            )[0],
                        );
                        if (
                            getElementsByClassName(
                                tmp[x],
                                'timeline-Tweet-media',
                            )[0] !== undefined
                        ) {
                            images.push(
                                getElementsByClassName(
                                    tmp[x],
                                    'timeline-Tweet-media',
                                )[0],
                            );
                        } else {
                            images.push(undefined);
                        }
                    }
                    x++;
                }
            }
            if (tweets.length > maxTweets) {
                tweets.splice(maxTweets, tweets.length - maxTweets);
                authors.splice(maxTweets, authors.length - maxTweets);
                times.splice(maxTweets, times.length - maxTweets);
                rts.splice(maxTweets, rts.length - maxTweets);
                images.splice(maxTweets, images.length - maxTweets);
                permalinksURL.splice(
                    maxTweets,
                    permalinksURL.length - maxTweets,
                );
            }
            var arrayTweets = [];
            var x = tweets.length;
            var n = 0;
            if (dataOnly) {
                while (n < x) {
                    arrayTweets.push({
                        tweet: tweets[n].innerHTML,
                        author: authors[n]
                            ? authors[n].innerHTML
                            : 'Unknown Author',
                        author_data: {
                            profile_url: authors[n]
                                ? authors[n].querySelector(
                                      '[data-scribe="element:user_link"]',
                                  ).href
                                : null,
                            profile_image: authors[n]
                                ? 'https://twitter.com/' +
                                  authors[n]
                                      .querySelector(
                                          '[data-scribe="element:screen_name"]',
                                      )
                                      .title.split('@')[1] +
                                  '/profile_image?size=bigger'
                                : null,
                            profile_image_2x: authors[n]
                                ? 'https://twitter.com/' +
                                  authors[n]
                                      .querySelector(
                                          '[data-scribe="element:screen_name"]',
                                      )
                                      .title.split('@')[1] +
                                  '/profile_image?size=original'
                                : null,
                            screen_name: authors[n]
                                ? authors[n].querySelector(
                                      '[data-scribe="element:screen_name"]',
                                  ).title
                                : null,
                            name: authors[n]
                                ? authors[n].querySelector(
                                      '[data-scribe="element:name"]',
                                  ).title
                                : null,
                        },
                        time: times[n].textContent,
                        timestamp: times[n]
                            .getAttribute('datetime')
                            .replace('+0000', 'Z')
                            .replace(/([\+\-])(\d\d)(\d\d)/, '$1$2:$3'),
                        image: extractImageUrl(images[n]),
                        rt: rts[n],
                        tid: tids[n],
                        permalinkURL:
                            permalinksURL[n] === undefined
                                ? ''
                                : permalinksURL[n].href,
                    });
                    n++;
                }
            } else {
                while (n < x) {
                    if (typeof formatterFunction !== 'string') {
                        var datetimeText = times[n].getAttribute('datetime');
                        var newDate = new Date(
                            times[n]
                                .getAttribute('datetime')
                                .replace(/-/g, '/')
                                .replace('T', ' ')
                                .split('+')[0],
                        );
                        var dateString = formatterFunction(
                            newDate,
                            datetimeText,
                        );
                        times[n].setAttribute('aria-label', dateString);
                        if (tweets[n].textContent) {
                            if (supportsClassName) {
                                times[n].textContent = dateString;
                            } else {
                                var h = document.createElement('p');
                                var t = document.createTextNode(dateString);
                                h.appendChild(t);
                                h.setAttribute('aria-label', dateString);
                                times[n] = h;
                            }
                        } else {
                            times[n].textContent = dateString;
                        }
                    }
                    var op = '';
                    if (parseLinks) {
                        if (targetBlank) {
                            targetLinksToNewWindow(tweets[n]);
                            if (printUser) {
                                targetLinksToNewWindow(authors[n]);
                            }
                        }
                        if (printUser) {
                            op +=
                                '<div class="user">' +
                                strip(authors[n].innerHTML) +
                                '</div>';
                        }
                        op +=
                            '<p class="tweet">' +
                            strip(tweets[n].innerHTML) +
                            '</p>';
                        if (printTime) {
                            if (permalinks) {
                                op +=
                                    '<p class="timePosted"><a href="' +
                                    permalinksURL[n] +
                                    '">' +
                                    times[n].getAttribute('aria-label') +
                                    '</a></p>';
                            } else {
                                op +=
                                    '<p class="timePosted">' +
                                    times[n].getAttribute('aria-label') +
                                    '</p>';
                            }
                        }
                    } else {
                        if (tweets[n].textContent) {
                            if (printUser) {
                                op +=
                                    '<p class="user">' +
                                    authors[n].textContent +
                                    '</p>';
                            }
                            op +=
                                '<p class="tweet">' +
                                tweets[n].textContent +
                                '</p>';
                            if (printTime) {
                                op +=
                                    '<p class="timePosted">' +
                                    times[n].textContent +
                                    '</p>';
                            }
                        } else {
                            if (printUser) {
                                op +=
                                    '<p class="user">' +
                                    authors[n].textContent +
                                    '</p>';
                            }
                            op +=
                                '<p class="tweet">' +
                                tweets[n].textContent +
                                '</p>';
                            if (printTime) {
                                op +=
                                    '<p class="timePosted">' +
                                    times[n].textContent +
                                    '</p>';
                            }
                        }
                    }
                    if (showInteractionLinks) {
                        op +=
                            '<p class="interact"><a href="https://twitter.com/intent/' +
                            'tweet?in_reply_to=' +
                            tids[n] +
                            '" class="twitter_reply_icon"' +
                            (targetBlank
                                ? ' target="_blank" rel="noopener">'
                                : '>') +
                            'Reply</a><a href="https://twitter.com/intent/retweet?' +
                            'tweet_id=' +
                            tids[n] +
                            '" class="twitter_retweet_icon"' +
                            (targetBlank
                                ? ' target="_blank" rel="noopener">'
                                : '>') +
                            'Retweet</a>' +
                            '<a href="https://twitter.com/intent/favorite?tweet_id=' +
                            tids[n] +
                            '" class="twitter_fav_icon"' +
                            (targetBlank
                                ? ' target="_blank" rel="noopener">'
                                : '>') +
                            'Favorite</a></p>';
                    }
                    if (
                        showImages &&
                        images[n] !== undefined &&
                        extractImageUrl(images[n]) !== undefined
                    ) {
                        op +=
                            '<div class="media">' +
                            '<img src="' +
                            extractImageUrl(images[n]) +
                            '" alt="Image from tweet" />' +
                            '</div>';
                    }
                    if (showImages) {
                        arrayTweets.push(op);
                    } else if (!showImages && tweets[n].textContent.length) {
                        arrayTweets.push(op);
                    }
                    n++;
                }
            }
            handleTweets(arrayTweets);
            inProgress = false;
            if (queue.length > 0) {
                twitterFetcher.fetch(queue[0]);
                queue.splice(0, 1);
            }
        },
    };
    window.__twttrf = twitterFetcher;
    window.twitterFetcher = twitterFetcher;
    return twitterFetcher;
});
(function (arr) {
    arr.forEach(function (item) {
        if (item.hasOwnProperty('prepend')) {
            return;
        }
        Object.defineProperty(item, 'prepend', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: function prepend() {
                var argArr = Array.prototype.slice.call(arguments),
                    docFrag = document.createDocumentFragment();
                argArr.forEach(function (argItem) {
                    var isNode = argItem instanceof Node;
                    docFrag.appendChild(
                        isNode
                            ? argItem
                            : document.createTextNode(String(argItem)),
                    );
                });
                this.insertBefore(docFrag, this.firstChild);
            },
        });
    });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

/*========== Sticky Sidebar ==========*/
!(function (i) {
    i.fn.theiaStickySidebar = function (t) {
        function e(t, e) {
            var a = o(t, e);
            a ||
                (console.log(
                    'TSS: Body width smaller than options.minWidth. Init is delayed.',
                ),
                i(document).on(
                    'scroll.' + t.namespace,
                    (function (t, e) {
                        return function (a) {
                            var n = o(t, e);
                            n && i(this).unbind(a);
                        };
                    })(t, e),
                ),
                i(window).on(
                    'resize.' + t.namespace,
                    (function (t, e) {
                        return function (a) {
                            var n = o(t, e);
                            n && i(this).unbind(a);
                        };
                    })(t, e),
                ));
        }
        function o(t, e) {
            return (
                t.initialized === !0 ||
                (!(i('body').width() < t.minWidth) && (a(t, e), !0))
            );
        }
        function a(t, e) {
            t.initialized = !0;
            var o = i('#theia-sticky-sidebar-stylesheet-' + t.namespace);
            0 === o.length &&
                i('head').append(
                    i(
                        '<style id="theia-sticky-sidebar-stylesheet-' +
                            t.namespace +
                            '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>',
                    ),
                ),
                e.each(function () {
                    function e() {
                        (a.fixedScrollTop = 0),
                            a.sidebar.css({'min-height': '1px'}),
                            a.stickySidebar.css({
                                position: 'static',
                                width: '',
                                transform: 'none',
                            });
                    }
                    function o(t) {
                        var e = t.height();
                        return (
                            t.children().each(function () {
                                e = Math.max(e, i(this).height());
                            }),
                            e
                        );
                    }
                    var a = {};
                    if (
                        ((a.sidebar = i(this)),
                        (a.options = t || {}),
                        (a.container = i(a.options.containerSelector)),
                        0 == a.container.length &&
                            (a.container = a.sidebar.parent()),
                        a.sidebar.parents().css('-webkit-transform', 'none'),
                        a.sidebar.css({
                            position: a.options.defaultPosition,
                            overflow: 'visible',
                            '-webkit-box-sizing': 'border-box',
                            '-moz-box-sizing': 'border-box',
                            'box-sizing': 'border-box',
                        }),
                        (a.stickySidebar = a.sidebar.find(
                            '.theiaStickySidebar',
                        )),
                        0 == a.stickySidebar.length)
                    ) {
                        var s =
                            /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                        a.sidebar
                            .find('script')
                            .filter(function (i, t) {
                                return 0 === t.type.length || t.type.match(s);
                            })
                            .remove(),
                            (a.stickySidebar = i('<div>')
                                .addClass('theiaStickySidebar')
                                .append(a.sidebar.children())),
                            a.sidebar.append(a.stickySidebar);
                    }
                    (a.marginBottom = parseInt(a.sidebar.css('margin-bottom'))),
                        (a.paddingTop = parseInt(a.sidebar.css('padding-top'))),
                        (a.paddingBottom = parseInt(
                            a.sidebar.css('padding-bottom'),
                        ));
                    var r = a.stickySidebar.offset().top,
                        d = a.stickySidebar.outerHeight();
                    a.stickySidebar.css('padding-top', 1),
                        a.stickySidebar.css('padding-bottom', 1),
                        (r -= a.stickySidebar.offset().top),
                        (d = a.stickySidebar.outerHeight() - d - r),
                        0 == r
                            ? (a.stickySidebar.css('padding-top', 0),
                              (a.stickySidebarPaddingTop = 0))
                            : (a.stickySidebarPaddingTop = 1),
                        0 == d
                            ? (a.stickySidebar.css('padding-bottom', 0),
                              (a.stickySidebarPaddingBottom = 0))
                            : (a.stickySidebarPaddingBottom = 1),
                        (a.previousScrollTop = null),
                        (a.fixedScrollTop = 0),
                        e(),
                        (a.onScroll = function (a) {
                            if (a.stickySidebar.is(':visible')) {
                                if (i('body').width() < a.options.minWidth)
                                    return void e();
                                if (a.options.disableOnResponsiveLayouts) {
                                    var s = a.sidebar.outerWidth(
                                        'none' == a.sidebar.css('float'),
                                    );
                                    if (s + 50 > a.container.width())
                                        return void e();
                                }
                                var r = i(document).scrollTop(),
                                    d = 'static';
                                if (
                                    r >=
                                    a.sidebar.offset().top +
                                        (a.paddingTop -
                                            a.options.additionalMarginTop)
                                ) {
                                    var c,
                                        p =
                                            a.paddingTop +
                                            t.additionalMarginTop,
                                        b =
                                            a.paddingBottom +
                                            a.marginBottom +
                                            t.additionalMarginBottom,
                                        l = a.sidebar.offset().top,
                                        f =
                                            a.sidebar.offset().top +
                                            o(a.container),
                                        h = 0 + t.additionalMarginTop,
                                        g =
                                            a.stickySidebar.outerHeight() +
                                                p +
                                                b <
                                            i(window).height();
                                    c = g
                                        ? h + a.stickySidebar.outerHeight()
                                        : i(window).height() -
                                          a.marginBottom -
                                          a.paddingBottom -
                                          t.additionalMarginBottom;
                                    var u = l - r + a.paddingTop,
                                        S =
                                            f -
                                            r -
                                            a.paddingBottom -
                                            a.marginBottom,
                                        y = a.stickySidebar.offset().top - r,
                                        m = a.previousScrollTop - r;
                                    'fixed' ==
                                        a.stickySidebar.css('position') &&
                                        'modern' == a.options.sidebarBehavior &&
                                        (y += m),
                                        'stick-to-top' ==
                                            a.options.sidebarBehavior &&
                                            (y = t.additionalMarginTop),
                                        'stick-to-bottom' ==
                                            a.options.sidebarBehavior &&
                                            (y =
                                                c -
                                                a.stickySidebar.outerHeight()),
                                        (y =
                                            m > 0
                                                ? Math.min(y, h)
                                                : Math.max(
                                                      y,
                                                      c -
                                                          a.stickySidebar.outerHeight(),
                                                  )),
                                        (y = Math.max(y, u)),
                                        (y = Math.min(
                                            y,
                                            S - a.stickySidebar.outerHeight(),
                                        ));
                                    var k =
                                        a.container.height() ==
                                        a.stickySidebar.outerHeight();
                                    d =
                                        (k || y != h) &&
                                        (k ||
                                            y !=
                                                c -
                                                    a.stickySidebar.outerHeight())
                                            ? r +
                                                  y -
                                                  a.sidebar.offset().top -
                                                  a.paddingTop <=
                                              t.additionalMarginTop
                                                ? 'static'
                                                : 'absolute'
                                            : 'fixed';
                                }
                                if ('fixed' == d) {
                                    var v = i(document).scrollLeft();
                                    a.stickySidebar.css({
                                        position: 'fixed',
                                        width: n(a.stickySidebar) + 'px',
                                        transform: 'translateY(' + y + 'px)',
                                        left:
                                            a.sidebar.offset().left +
                                            parseInt(
                                                a.sidebar.css('padding-left'),
                                            ) -
                                            v +
                                            'px',
                                        top: '0px',
                                    });
                                } else if ('absolute' == d) {
                                    var x = {};
                                    'absolute' !=
                                        a.stickySidebar.css('position') &&
                                        ((x.position = 'absolute'),
                                        (x.transform =
                                            'translateY(' +
                                            (r +
                                                y -
                                                a.sidebar.offset().top -
                                                a.stickySidebarPaddingTop -
                                                a.stickySidebarPaddingBottom) +
                                            'px)'),
                                        (x.top = '0px')),
                                        (x.width = n(a.stickySidebar) + 'px'),
                                        (x.left = ''),
                                        a.stickySidebar.css(x);
                                } else 'static' == d && e();
                                'static' != d &&
                                    1 == a.options.updateSidebarHeight &&
                                    a.sidebar.css({
                                        'min-height':
                                            a.stickySidebar.outerHeight() +
                                            a.stickySidebar.offset().top -
                                            a.sidebar.offset().top +
                                            a.paddingBottom,
                                    }),
                                    (a.previousScrollTop = r);
                            }
                        }),
                        a.onScroll(a),
                        i(document).on(
                            'scroll.' + a.options.namespace,
                            (function (i) {
                                return function () {
                                    i.onScroll(i);
                                };
                            })(a),
                        ),
                        i(window).on(
                            'resize.' + a.options.namespace,
                            (function (i) {
                                return function () {
                                    i.stickySidebar.css({position: 'static'}),
                                        i.onScroll(i);
                                };
                            })(a),
                        ),
                        'undefined' != typeof ResizeSensor &&
                            new ResizeSensor(
                                a.stickySidebar[0],
                                (function (i) {
                                    return function () {
                                        i.onScroll(i);
                                    };
                                })(a),
                            );
                });
        }
        function n(i) {
            var t;
            try {
                t = i[0].getBoundingClientRect().width;
            } catch (i) {}
            return 'undefined' == typeof t && (t = i.width()), t;
        }
        var s = {
            containerSelector: '',
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: 'modern',
            defaultPosition: 'relative',
            namespace: 'TSS',
        };
        return (
            (t = i.extend(s, t)),
            (t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0),
            (t.additionalMarginBottom =
                parseInt(t.additionalMarginBottom) || 0),
            e(t, this),
            this
        );
    };
})(jQuery);

/*========== Parallax ==========*/
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.3
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */ !(function (o) {
    var n = {};
    function i(e) {
        if (n[e]) return n[e].exports;
        var t = (n[e] = {i: e, l: !1, exports: {}});
        return o[e].call(t.exports, t, t.exports, i), (t.l = !0), t.exports;
    }
    (i.m = o),
        (i.c = n),
        (i.d = function (e, t, o) {
            i.o(e, t) ||
                Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: o,
                });
        }),
        (i.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return i.d(t, 'a', t), t;
        }),
        (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = ''),
        i((i.s = 11));
})([
    function (o, e, t) {
        'use strict';
        (function (e) {
            var t;
            (t =
                'undefined' != typeof window
                    ? window
                    : void 0 !== e
                    ? e
                    : 'undefined' != typeof self
                    ? self
                    : {}),
                (o.exports = t);
        }.call(e, t(2)));
    },
    function (e, t, o) {
        'use strict';
        e.exports = function (e) {
            'complete' === document.readyState ||
            'interactive' === document.readyState
                ? e.call()
                : document.attachEvent
                ? document.attachEvent('onreadystatechange', function () {
                      'interactive' === document.readyState && e.call();
                  })
                : document.addEventListener &&
                  document.addEventListener('DOMContentLoaded', e);
        };
    },
    function (e, t, o) {
        'use strict';
        var n,
            i =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      };
        n = (function () {
            return this;
        })();
        try {
            n = n || Function('return this')() || (0, eval)('this');
        } catch (e) {
            'object' ===
                ('undefined' == typeof window ? 'undefined' : i(window)) &&
                (n = window);
        }
        e.exports = n;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, o) {
        e.exports = o(12);
    },
    function (e, t, o) {
        'use strict';
        var n =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      },
            i = l(o(1)),
            a = o(0),
            r = l(o(13));
        function l(e) {
            return e && e.__esModule ? e : {default: e};
        }
        var s = a.window.jarallax;
        if (
            ((a.window.jarallax = r.default),
            (a.window.jarallax.noConflict = function () {
                return (a.window.jarallax = s), this;
            }),
            void 0 !== a.jQuery)
        ) {
            var c = function () {
                var e = arguments || [];
                Array.prototype.unshift.call(e, this);
                var t = r.default.apply(a.window, e);
                return 'object' !== (void 0 === t ? 'undefined' : n(t))
                    ? t
                    : this;
            };
            c.constructor = r.default.constructor;
            var u = a.jQuery.fn.jarallax;
            (a.jQuery.fn.jarallax = c),
                (a.jQuery.fn.jarallax.noConflict = function () {
                    return (a.jQuery.fn.jarallax = u), this;
                });
        }
        (0, i.default)(function () {
            (0, r.default)(document.querySelectorAll('[data-jarallax]'));
        });
    },
    function (e, $, j) {
        'use strict';
        (function (e) {
            Object.defineProperty($, '__esModule', {value: !0});
            var d = function (e, t) {
                    if (Array.isArray(e)) return e;
                    if (Symbol.iterator in Object(e))
                        return (function (e, t) {
                            var o = [],
                                n = !0,
                                i = !1,
                                a = void 0;
                            try {
                                for (
                                    var r, l = e[Symbol.iterator]();
                                    !(n = (r = l.next()).done) &&
                                    (o.push(r.value), !t || o.length !== t);
                                    n = !0
                                );
                            } catch (e) {
                                (i = !0), (a = e);
                            } finally {
                                try {
                                    !n && l.return && l.return();
                                } finally {
                                    if (i) throw a;
                                }
                            }
                            return o;
                        })(e, t);
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance',
                    );
                },
                t = (function () {
                    function n(e, t) {
                        for (var o = 0; o < t.length; o++) {
                            var n = t[o];
                            (n.enumerable = n.enumerable || !1),
                                (n.configurable = !0),
                                'value' in n && (n.writable = !0),
                                Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function (e, t, o) {
                        return t && n(e.prototype, t), o && n(e, o), e;
                    };
                })(),
                p =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          },
                o = a(j(1)),
                n = a(j(14)),
                i = j(0);
            function a(e) {
                return e && e.__esModule ? e : {default: e};
            }
            var r = (function () {
                    for (
                        var e = 'transform WebkitTransform MozTransform'.split(
                                ' ',
                            ),
                            t = document.createElement('div'),
                            o = 0;
                        o < e.length;
                        o++
                    )
                        if (t && void 0 !== t.style[e[o]]) return e[o];
                    return !1;
                })(),
                b = void 0,
                v = void 0,
                l = void 0,
                s = !1,
                c = !1;
            function u(e) {
                (b =
                    i.window.innerWidth ||
                    document.documentElement.clientWidth),
                    (v =
                        i.window.innerHeight ||
                        document.documentElement.clientHeight),
                    'object' !== (void 0 === e ? 'undefined' : p(e)) ||
                        ('load' !== e.type && 'dom-loaded' !== e.type) ||
                        (s = !0);
            }
            u(),
                i.window.addEventListener('resize', u),
                i.window.addEventListener('orientationchange', u),
                i.window.addEventListener('load', u),
                (0, o.default)(function () {
                    u({type: 'dom-loaded'});
                });
            var m = [],
                f = !1;
            function y() {
                if (m.length) {
                    l =
                        void 0 !== i.window.pageYOffset
                            ? i.window.pageYOffset
                            : (
                                  document.documentElement ||
                                  document.body.parentNode ||
                                  document.body
                              ).scrollTop;
                    var t = s || !f || f.width !== b || f.height !== v,
                        o = c || t || !f || f.y !== l;
                    (c = s = !1),
                        (t || o) &&
                            (m.forEach(function (e) {
                                t && e.onResize(), o && e.onScroll();
                            }),
                            (f = {width: b, height: v, y: l})),
                        (0, n.default)(y);
                }
            }
            var g =
                    !!e.ResizeObserver &&
                    new e.ResizeObserver(function (e) {
                        e &&
                            e.length &&
                            (0, n.default)(function () {
                                e.forEach(function (e) {
                                    e.target &&
                                        e.target.jarallax &&
                                        (s || e.target.jarallax.onResize(),
                                        (c = !0));
                                });
                            });
                    }),
                h = 0,
                x = (function () {
                    function u(e, t) {
                        !(function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function',
                                );
                        })(this, u);
                        var o = this;
                        (o.instanceID = h++),
                            (o.$item = e),
                            (o.defaults = {
                                type: 'scroll',
                                speed: 0.5,
                                imgSrc: null,
                                imgElement: '.jarallax-img',
                                imgSize: 'cover',
                                imgPosition: '50% 50%',
                                imgRepeat: 'no-repeat',
                                keepImg: !1,
                                elementInViewport: null,
                                zIndex: -100,
                                disableParallax: !1,
                                disableVideo: !1,
                                automaticResize: !0,
                                videoSrc: null,
                                videoStartTime: 0,
                                videoEndTime: 0,
                                videoVolume: 0,
                                videoPlayOnlyVisible: !0,
                                onScroll: null,
                                onInit: null,
                                onDestroy: null,
                                onCoverImage: null,
                            });
                        var n = o.$item.getAttribute('data-jarallax'),
                            i = JSON.parse(n || '{}');
                        n &&
                            console.warn(
                                'Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53',
                            );
                        var a = o.$item.dataset || {},
                            r = {};
                        if (
                            (Object.keys(a).forEach(function (e) {
                                var t =
                                    e.substr(0, 1).toLowerCase() + e.substr(1);
                                t && void 0 !== o.defaults[t] && (r[t] = a[e]);
                            }),
                            (o.options = o.extend({}, o.defaults, i, r, t)),
                            (o.pureOptions = o.extend({}, o.options)),
                            Object.keys(o.options).forEach(function (e) {
                                'true' === o.options[e]
                                    ? (o.options[e] = !0)
                                    : 'false' === o.options[e] &&
                                      (o.options[e] = !1);
                            }),
                            (o.options.speed = Math.min(
                                2,
                                Math.max(-1, parseFloat(o.options.speed)),
                            )),
                            (o.options.noAndroid || o.options.noIos) &&
                                (console.warn(
                                    'Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices',
                                ),
                                o.options.disableParallax ||
                                    (o.options.noIos && o.options.noAndroid
                                        ? (o.options.disableParallax =
                                              /iPad|iPhone|iPod|Android/)
                                        : o.options.noIos
                                        ? (o.options.disableParallax =
                                              /iPad|iPhone|iPod/)
                                        : o.options.noAndroid &&
                                          (o.options.disableParallax =
                                              /Android/))),
                            'string' == typeof o.options.disableParallax &&
                                (o.options.disableParallax = new RegExp(
                                    o.options.disableParallax,
                                )),
                            o.options.disableParallax instanceof RegExp)
                        ) {
                            var l = o.options.disableParallax;
                            o.options.disableParallax = function () {
                                return l.test(navigator.userAgent);
                            };
                        }
                        if (
                            ('function' != typeof o.options.disableParallax &&
                                (o.options.disableParallax = function () {
                                    return !1;
                                }),
                            'string' == typeof o.options.disableVideo &&
                                (o.options.disableVideo = new RegExp(
                                    o.options.disableVideo,
                                )),
                            o.options.disableVideo instanceof RegExp)
                        ) {
                            var s = o.options.disableVideo;
                            o.options.disableVideo = function () {
                                return s.test(navigator.userAgent);
                            };
                        }
                        'function' != typeof o.options.disableVideo &&
                            (o.options.disableVideo = function () {
                                return !1;
                            });
                        var c = o.options.elementInViewport;
                        c &&
                            'object' === (void 0 === c ? 'undefined' : p(c)) &&
                            void 0 !== c.length &&
                            (c = d(c, 1)[0]);
                        c instanceof Element || (c = null),
                            (o.options.elementInViewport = c),
                            (o.image = {
                                src: o.options.imgSrc || null,
                                $container: null,
                                useImgTag: !1,
                                position: /iPad|iPhone|iPod|Android/.test(
                                    navigator.userAgent,
                                )
                                    ? 'absolute'
                                    : 'fixed',
                            }),
                            o.initImg() && o.canInitParallax() && o.init();
                    }
                    return (
                        t(u, [
                            {
                                key: 'css',
                                value: function (t, o) {
                                    return 'string' == typeof o
                                        ? i.window
                                              .getComputedStyle(t)
                                              .getPropertyValue(o)
                                        : (o.transform &&
                                              r &&
                                              (o[r] = o.transform),
                                          Object.keys(o).forEach(function (e) {
                                              t.style[e] = o[e];
                                          }),
                                          t);
                                },
                            },
                            {
                                key: 'extend',
                                value: function (o) {
                                    var n = arguments;
                                    return (
                                        (o = o || {}),
                                        Object.keys(arguments).forEach(
                                            function (t) {
                                                n[t] &&
                                                    Object.keys(n[t]).forEach(
                                                        function (e) {
                                                            o[e] = n[t][e];
                                                        },
                                                    );
                                            },
                                        ),
                                        o
                                    );
                                },
                            },
                            {
                                key: 'getWindowData',
                                value: function () {
                                    return {width: b, height: v, y: l};
                                },
                            },
                            {
                                key: 'initImg',
                                value: function () {
                                    var e = this,
                                        t = e.options.imgElement;
                                    return (
                                        t &&
                                            'string' == typeof t &&
                                            (t = e.$item.querySelector(t)),
                                        t instanceof Element || (t = null),
                                        t &&
                                            (e.options.keepImg
                                                ? (e.image.$item = t.cloneNode(
                                                      !0,
                                                  ))
                                                : ((e.image.$item = t),
                                                  (e.image.$itemParent =
                                                      t.parentNode)),
                                            (e.image.useImgTag = !0)),
                                        !!e.image.$item ||
                                            (null === e.image.src &&
                                                (e.image.src = e
                                                    .css(
                                                        e.$item,
                                                        'background-image',
                                                    )
                                                    .replace(/^url\(['"]?/g, '')
                                                    .replace(/['"]?\)$/g, '')),
                                            !(
                                                !e.image.src ||
                                                'none' === e.image.src
                                            ))
                                    );
                                },
                            },
                            {
                                key: 'canInitParallax',
                                value: function () {
                                    return r && !this.options.disableParallax();
                                },
                            },
                            {
                                key: 'init',
                                value: function () {
                                    var e = this,
                                        t = {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            overflow: 'hidden',
                                            pointerEvents: 'none',
                                        },
                                        o = {};
                                    if (!e.options.keepImg) {
                                        var n = e.$item.getAttribute('style');
                                        if (
                                            (n &&
                                                e.$item.setAttribute(
                                                    'data-jarallax-original-styles',
                                                    n,
                                                ),
                                            e.image.useImgTag)
                                        ) {
                                            var i =
                                                e.image.$item.getAttribute(
                                                    'style',
                                                );
                                            i &&
                                                e.image.$item.setAttribute(
                                                    'data-jarallax-original-styles',
                                                    i,
                                                );
                                        }
                                    }
                                    if (
                                        ('static' ===
                                            e.css(e.$item, 'position') &&
                                            e.css(e.$item, {
                                                position: 'relative',
                                            }),
                                        'auto' === e.css(e.$item, 'z-index') &&
                                            e.css(e.$item, {zIndex: 0}),
                                        (e.image.$container =
                                            document.createElement('div')),
                                        e.css(e.image.$container, t),
                                        e.css(e.image.$container, {
                                            'z-index': e.options.zIndex,
                                        }),
                                        e.image.$container.setAttribute(
                                            'id',
                                            'jarallax-container-' +
                                                e.instanceID,
                                        ),
                                        e.$item.appendChild(e.image.$container),
                                        e.image.useImgTag
                                            ? (o = e.extend(
                                                  {
                                                      'object-fit':
                                                          e.options.imgSize,
                                                      'object-position':
                                                          e.options.imgPosition,
                                                      'font-family':
                                                          'object-fit: ' +
                                                          e.options.imgSize +
                                                          '; object-position: ' +
                                                          e.options
                                                              .imgPosition +
                                                          ';',
                                                      'max-width': 'none',
                                                  },
                                                  t,
                                                  o,
                                              ))
                                            : ((e.image.$item =
                                                  document.createElement(
                                                      'div',
                                                  )),
                                              e.image.src &&
                                                  (o = e.extend(
                                                      {
                                                          'background-position':
                                                              e.options
                                                                  .imgPosition,
                                                          'background-size':
                                                              e.options.imgSize,
                                                          'background-repeat':
                                                              e.options
                                                                  .imgRepeat,
                                                          'background-image':
                                                              'url("' +
                                                              e.image.src +
                                                              '")',
                                                      },
                                                      t,
                                                      o,
                                                  ))),
                                        ('opacity' !== e.options.type &&
                                            'scale' !== e.options.type &&
                                            'scale-opacity' !==
                                                e.options.type &&
                                            1 !== e.options.speed) ||
                                            (e.image.position = 'absolute'),
                                        'fixed' === e.image.position)
                                    )
                                        for (
                                            var a = 0, r = e.$item;
                                            null !== r &&
                                            r !== document &&
                                            0 === a;

                                        ) {
                                            var l =
                                                e.css(r, '-webkit-transform') ||
                                                e.css(r, '-moz-transform') ||
                                                e.css(r, 'transform');
                                            l &&
                                                'none' !== l &&
                                                ((a = 1),
                                                (e.image.position =
                                                    'absolute')),
                                                (r = r.parentNode);
                                        }
                                    (o.position = e.image.position),
                                        e.css(e.image.$item, o),
                                        e.image.$container.appendChild(
                                            e.image.$item,
                                        ),
                                        e.coverImage(),
                                        e.clipContainer(),
                                        e.onScroll(!0),
                                        e.options.automaticResize &&
                                            g &&
                                            g.observe(e.$item),
                                        e.options.onInit &&
                                            e.options.onInit.call(e),
                                        'none' !==
                                            e.css(
                                                e.$item,
                                                'background-image',
                                            ) &&
                                            e.css(e.$item, {
                                                'background-image': 'none',
                                            }),
                                        e.addToParallaxList();
                                },
                            },
                            {
                                key: 'addToParallaxList',
                                value: function () {
                                    m.push(this), 1 === m.length && y();
                                },
                            },
                            {
                                key: 'removeFromParallaxList',
                                value: function () {
                                    var o = this;
                                    m.forEach(function (e, t) {
                                        e.instanceID === o.instanceID &&
                                            m.splice(t, 1);
                                    });
                                },
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    var e = this;
                                    e.removeFromParallaxList();
                                    var t = e.$item.getAttribute(
                                        'data-jarallax-original-styles',
                                    );
                                    if (
                                        (e.$item.removeAttribute(
                                            'data-jarallax-original-styles',
                                        ),
                                        t
                                            ? e.$item.setAttribute('style', t)
                                            : e.$item.removeAttribute('style'),
                                        e.image.useImgTag)
                                    ) {
                                        var o = e.image.$item.getAttribute(
                                            'data-jarallax-original-styles',
                                        );
                                        e.image.$item.removeAttribute(
                                            'data-jarallax-original-styles',
                                        ),
                                            o
                                                ? e.image.$item.setAttribute(
                                                      'style',
                                                      t,
                                                  )
                                                : e.image.$item.removeAttribute(
                                                      'style',
                                                  ),
                                            e.image.$itemParent &&
                                                e.image.$itemParent.appendChild(
                                                    e.image.$item,
                                                );
                                    }
                                    e.$clipStyles &&
                                        e.$clipStyles.parentNode.removeChild(
                                            e.$clipStyles,
                                        ),
                                        e.image.$container &&
                                            e.image.$container.parentNode.removeChild(
                                                e.image.$container,
                                            ),
                                        e.options.onDestroy &&
                                            e.options.onDestroy.call(e),
                                        delete e.$item.jarallax;
                                },
                            },
                            {
                                key: 'clipContainer',
                                value: function () {
                                    if ('fixed' === this.image.position) {
                                        var e = this,
                                            t =
                                                e.image.$container.getBoundingClientRect(),
                                            o = t.width,
                                            n = t.height;
                                        if (!e.$clipStyles)
                                            (e.$clipStyles =
                                                document.createElement(
                                                    'style',
                                                )),
                                                e.$clipStyles.setAttribute(
                                                    'type',
                                                    'text/css',
                                                ),
                                                e.$clipStyles.setAttribute(
                                                    'id',
                                                    'jarallax-clip-' +
                                                        e.instanceID,
                                                ),
                                                (
                                                    document.head ||
                                                    document.getElementsByTagName(
                                                        'head',
                                                    )[0]
                                                ).appendChild(e.$clipStyles);
                                        var i =
                                            '#jarallax-container-' +
                                            e.instanceID +
                                            ' {\n           clip: rect(0 ' +
                                            o +
                                            'px ' +
                                            n +
                                            'px 0);\n           clip: rect(0, ' +
                                            o +
                                            'px, ' +
                                            n +
                                            'px, 0);\n        }';
                                        e.$clipStyles.styleSheet
                                            ? (e.$clipStyles.styleSheet.cssText =
                                                  i)
                                            : (e.$clipStyles.innerHTML = i);
                                    }
                                },
                            },
                            {
                                key: 'coverImage',
                                value: function () {
                                    var e = this,
                                        t =
                                            e.image.$container.getBoundingClientRect(),
                                        o = t.height,
                                        n = e.options.speed,
                                        i =
                                            'scroll' === e.options.type ||
                                            'scroll-opacity' === e.options.type,
                                        a = 0,
                                        r = o,
                                        l = 0;
                                    return (
                                        i &&
                                            ((a =
                                                n < 0
                                                    ? n * Math.max(o, v)
                                                    : n * (o + v)),
                                            1 < n
                                                ? (r = Math.abs(a - v))
                                                : n < 0
                                                ? (r = a / n + Math.abs(a))
                                                : (r +=
                                                      Math.abs(v - o) *
                                                      (1 - n)),
                                            (a /= 2)),
                                        (e.parallaxScrollDistance = a),
                                        (l = i ? (v - r) / 2 : (o - r) / 2),
                                        e.css(e.image.$item, {
                                            height: r + 'px',
                                            marginTop: l + 'px',
                                            left:
                                                'fixed' === e.image.position
                                                    ? t.left + 'px'
                                                    : '0',
                                            width: t.width + 'px',
                                        }),
                                        e.options.onCoverImage &&
                                            e.options.onCoverImage.call(e),
                                        {
                                            image: {height: r, marginTop: l},
                                            container: t,
                                        }
                                    );
                                },
                            },
                            {
                                key: 'isVisible',
                                value: function () {
                                    return this.isElementInViewport || !1;
                                },
                            },
                            {
                                key: 'onScroll',
                                value: function (e) {
                                    var t = this,
                                        o = t.$item.getBoundingClientRect(),
                                        n = o.top,
                                        i = o.height,
                                        a = {},
                                        r = o;
                                    if (
                                        (t.options.elementInViewport &&
                                            (r =
                                                t.options.elementInViewport.getBoundingClientRect()),
                                        (t.isElementInViewport =
                                            0 <= r.bottom &&
                                            0 <= r.right &&
                                            r.top <= v &&
                                            r.left <= b),
                                        e || t.isElementInViewport)
                                    ) {
                                        var l = Math.max(0, n),
                                            s = Math.max(0, i + n),
                                            c = Math.max(0, -n),
                                            u = Math.max(0, n + i - v),
                                            d = Math.max(0, i - (n + i - v)),
                                            p = Math.max(0, -n + v - i),
                                            m = 1 - (2 * (v - n)) / (v + i),
                                            f = 1;
                                        if (
                                            (i < v
                                                ? (f = 1 - (c || u) / i)
                                                : s <= v
                                                ? (f = s / v)
                                                : d <= v && (f = d / v),
                                            ('opacity' !== t.options.type &&
                                                'scale-opacity' !==
                                                    t.options.type &&
                                                'scroll-opacity' !==
                                                    t.options.type) ||
                                                ((a.transform =
                                                    'translate3d(0,0,0)'),
                                                (a.opacity = f)),
                                            'scale' === t.options.type ||
                                                'scale-opacity' ===
                                                    t.options.type)
                                        ) {
                                            var y = 1;
                                            t.options.speed < 0
                                                ? (y -= t.options.speed * f)
                                                : (y +=
                                                      t.options.speed *
                                                      (1 - f)),
                                                (a.transform =
                                                    'scale(' +
                                                    y +
                                                    ') translate3d(0,0,0)');
                                        }
                                        if (
                                            'scroll' === t.options.type ||
                                            'scroll-opacity' === t.options.type
                                        ) {
                                            var g =
                                                t.parallaxScrollDistance * m;
                                            'absolute' === t.image.position &&
                                                (g -= n),
                                                (a.transform =
                                                    'translate3d(0,' +
                                                    g +
                                                    'px,0)');
                                        }
                                        t.css(t.image.$item, a),
                                            t.options.onScroll &&
                                                t.options.onScroll.call(t, {
                                                    section: o,
                                                    beforeTop: l,
                                                    beforeTopEnd: s,
                                                    afterTop: c,
                                                    beforeBottom: u,
                                                    beforeBottomEnd: d,
                                                    afterBottom: p,
                                                    visiblePercent: f,
                                                    fromViewportCenter: m,
                                                });
                                    }
                                },
                            },
                            {
                                key: 'onResize',
                                value: function () {
                                    this.coverImage(), this.clipContainer();
                                },
                            },
                        ]),
                        u
                    );
                })(),
                w = function (e) {
                    ('object' ===
                    ('undefined' == typeof HTMLElement
                        ? 'undefined'
                        : p(HTMLElement))
                        ? e instanceof HTMLElement
                        : e &&
                          'object' === (void 0 === e ? 'undefined' : p(e)) &&
                          null !== e &&
                          1 === e.nodeType &&
                          'string' == typeof e.nodeName) && (e = [e]);
                    for (
                        var t = arguments[1],
                            o = Array.prototype.slice.call(arguments, 2),
                            n = e.length,
                            i = 0,
                            a = void 0;
                        i < n;
                        i++
                    )
                        if (
                            ('object' === (void 0 === t ? 'undefined' : p(t)) ||
                            void 0 === t
                                ? e[i].jarallax ||
                                  (e[i].jarallax = new x(e[i], t))
                                : e[i].jarallax &&
                                  (a = e[i].jarallax[t].apply(
                                      e[i].jarallax,
                                      o,
                                  )),
                            void 0 !== a)
                        )
                            return a;
                    return e;
                };
            (w.constructor = x), ($.default = w);
        }.call($, j(2)));
    },
    function (e, t, o) {
        'use strict';
        var n = o(0),
            i =
                n.requestAnimationFrame ||
                n.webkitRequestAnimationFrame ||
                n.mozRequestAnimationFrame ||
                function (e) {
                    var t = +new Date(),
                        o = Math.max(0, 16 - (t - a)),
                        n = setTimeout(e, o);
                    return (a = t), n;
                },
            a = +new Date();
        var r =
            n.cancelAnimationFrame ||
            n.webkitCancelAnimationFrame ||
            n.mozCancelAnimationFrame ||
            clearTimeout;
        Function.prototype.bind && ((i = i.bind(n)), (r = r.bind(n))),
            ((e.exports = i).cancel = r);
    },
]);
//# sourceMappingURL=jarallax.min.js.map

/*========== Match Height ==========*/
/**
 * jquery-match-height master by @liabru
 * http://brm.io/jquery-match-height/
 * License: MIT
 */
(function (t) {
    'use strict';
    'function' == typeof define && define.amd
        ? define(['jquery'], t)
        : 'undefined' != typeof module && module.exports
        ? (module.exports = t(require('jquery')))
        : t(jQuery);
})(function (t) {
    var e = -1,
        o = -1,
        a = function (t) {
            return parseFloat(t) || 0;
        },
        n = function (e) {
            var o = 1,
                n = t(e),
                i = null,
                r = [];
            return (
                n.each(function () {
                    var e = t(this),
                        n = e.offset().top - a(e.css('margin-top')),
                        s = r.length > 0 ? r[r.length - 1] : null;
                    null === s
                        ? r.push(e)
                        : Math.floor(Math.abs(i - n)) <= o
                        ? (r[r.length - 1] = s.add(e))
                        : r.push(e),
                        (i = n);
                }),
                r
            );
        },
        i = function (e) {
            var o = {byRow: !0, property: 'height', target: null, remove: !1};
            return 'object' == typeof e
                ? t.extend(o, e)
                : ('boolean' == typeof e
                      ? (o.byRow = e)
                      : 'remove' === e && (o.remove = !0),
                  o);
        },
        r = (t.fn.matchHeight = function (e) {
            var o = i(e);
            if (o.remove) {
                var a = this;
                return (
                    this.css(o.property, ''),
                    t.each(r._groups, function (t, e) {
                        e.elements = e.elements.not(a);
                    }),
                    this
                );
            }
            return this.length <= 1 && !o.target
                ? this
                : (r._groups.push({elements: this, options: o}),
                  r._apply(this, o),
                  this);
        });
    (r.version = 'master'),
        (r._groups = []),
        (r._throttle = 80),
        (r._maintainScroll = !1),
        (r._beforeUpdate = null),
        (r._afterUpdate = null),
        (r._rows = n),
        (r._parse = a),
        (r._parseOptions = i),
        (r._apply = function (e, o) {
            var s = i(o),
                h = t(e),
                l = [h],
                c = t(window).scrollTop(),
                p = t('html').outerHeight(!0),
                u = h.parents().filter(':hidden');
            return (
                u.each(function () {
                    var e = t(this);
                    e.data('style-cache', e.attr('style'));
                }),
                u.css('display', 'block'),
                s.byRow &&
                    !s.target &&
                    (h.each(function () {
                        var e = t(this),
                            o = e.css('display');
                        'inline-block' !== o &&
                            'flex' !== o &&
                            'inline-flex' !== o &&
                            (o = 'block'),
                            e.data('style-cache', e.attr('style')),
                            e.css({
                                display: o,
                                'padding-top': '0',
                                'padding-bottom': '0',
                                'margin-top': '0',
                                'margin-bottom': '0',
                                'border-top-width': '0',
                                'border-bottom-width': '0',
                                height: '100px',
                                overflow: 'hidden',
                            });
                    }),
                    (l = n(h)),
                    h.each(function () {
                        var e = t(this);
                        e.attr('style', e.data('style-cache') || '');
                    })),
                t.each(l, function (e, o) {
                    var n = t(o),
                        i = 0;
                    if (s.target) i = s.target.outerHeight(!1);
                    else {
                        if (s.byRow && n.length <= 1)
                            return void n.css(s.property, '');
                        n.each(function () {
                            var e = t(this),
                                o = e.attr('style'),
                                a = e.css('display');
                            'inline-block' !== a &&
                                'flex' !== a &&
                                'inline-flex' !== a &&
                                (a = 'block');
                            var n = {display: a};
                            (n[s.property] = ''),
                                e.css(n),
                                e.outerHeight(!1) > i &&
                                    (i = e.outerHeight(!1)),
                                o ? e.attr('style', o) : e.css('display', '');
                        });
                    }
                    n.each(function () {
                        var e = t(this),
                            o = 0;
                        (s.target && e.is(s.target)) ||
                            ('border-box' !== e.css('box-sizing') &&
                                ((o +=
                                    a(e.css('border-top-width')) +
                                    a(e.css('border-bottom-width'))),
                                (o +=
                                    a(e.css('padding-top')) +
                                    a(e.css('padding-bottom')))),
                            e.css(s.property, i - o + 'px'));
                    });
                }),
                u.each(function () {
                    var e = t(this);
                    e.attr('style', e.data('style-cache') || null);
                }),
                r._maintainScroll &&
                    t(window).scrollTop((c / p) * t('html').outerHeight(!0)),
                this
            );
        }),
        (r._applyDataApi = function () {
            var e = {};
            t('[data-match-height], [data-mh]').each(function () {
                var o = t(this),
                    a = o.attr('data-mh') || o.attr('data-match-height');
                a in e ? (e[a] = e[a].add(o)) : (e[a] = o);
            }),
                t.each(e, function () {
                    this.matchHeight(!0);
                });
        });
    var s = function (e) {
        r._beforeUpdate && r._beforeUpdate(e, r._groups),
            t.each(r._groups, function () {
                r._apply(this.elements, this.options);
            }),
            r._afterUpdate && r._afterUpdate(e, r._groups);
    };
    (r._update = function (a, n) {
        if (n && 'resize' === n.type) {
            var i = t(window).width();
            if (i === e) return;
            e = i;
        }
        a
            ? o === -1 &&
              (o = setTimeout(function () {
                  s(n), (o = -1);
              }, r._throttle))
            : s(n);
    }),
        t(r._applyDataApi);
    var h = t.fn.on ? 'on' : 'bind';
    t(window)[h]('load', function (t) {
        r._update(!1, t);
    }),
        t(window)[h]('resize orientationchange', function (t) {
            r._update(!0, t);
        });
});

/*========== Datepicker ==========*/
/**
 * jQuery DatePicker
 * @author biohzrdmx <github.com/biohzrdmx>
 * @version 1.0
 * @requires jQuery 1.8+
 * @license MIT
 */
!(function (e) {
    (e.datePicker = {
        strings: {
            monthsFull: [
                'January',
                'Febraury',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            monthsShort: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ],
            daysFull: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ],
            daysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
            messageLocked: 'The day you have just selected is not available',
        },
        defaults: {
            formatDate: function (a) {
                return (
                    e.datePicker.utils.pad(a.getDate(), 2) +
                    '/' +
                    e.datePicker.utils.pad(a.getMonth() + 1, 2) +
                    '/' +
                    a.getFullYear()
                );
            },
            parseDate: function (e) {
                var a = new Date(),
                    t = e.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                return (
                    t && 4 == t.length && (a = new Date(t[3], t[2] - 1, t[1])),
                    a
                );
            },
            selectDate: function (e) {
                return !0;
            },
            limitCenturies: !0,
            closeOnPick: !0,
        },
        utils: {
            firstDay: function (e, a) {
                return new Date(e, a, 1).getDay();
            },
            daysInMonth: function (e, a) {
                return new Date(e, ++a, 0).getDate();
            },
            buildDecadePicker: function (a, t) {
                e.datePicker;
                var r = e('<div class="decades"></div>'),
                    n = 100 * Math.floor(a / 100) - 10,
                    d = e.datePicker.defaults.limitCenturies,
                    s =
                        '<div class="row header"><a href="#" class="prev' +
                        (d && n < 1900 ? ' disabled' : '') +
                        '"><span class="arrow"></span></a><a href="#" class="century" data-century="' +
                        (n + 10) +
                        '">' +
                        (n + 1) +
                        '-' +
                        (n + 100) +
                        '</a><a href="#" class="next' +
                        (d && 1990 == n ? ' disabled' : '') +
                        '"><span class="arrow"></span></a></div>';
                r.append(s);
                for (var l = 0, c = '', i = 0, o = 0; o < 3; o++) {
                    for (
                        var u = e('<div class="row"></div>'), h = 0;
                        h < 4;
                        h++
                    )
                        if (
                            ((l = h + 4 * o),
                            (c =
                                0 == l
                                    ? ' grayed prev'
                                    : 11 == l
                                    ? ' grayed next'
                                    : ''),
                            (i = n + 10 * l),
                            d && (i < 1900 || i > 2090))
                        ) {
                            f = e(
                                '<a href="" class="cell large double decade blank">&nbsp;</a>',
                            );
                            u.append(f);
                        } else {
                            t >= i && t <= i + 9 && (c += ' selected');
                            var f = e(
                                '<a href="#" data-year="' +
                                    i +
                                    '" class="cell large double decade' +
                                    c +
                                    '"><span>' +
                                    i +
                                    '- ' +
                                    (i + 9) +
                                    '</span></a>',
                            );
                            u.append(f);
                        }
                    r.append(u);
                }
                return r;
            },
            buildYearPicker: function (a, t) {
                e.datePicker;
                var r = e('<div class="years"></div>'),
                    n = 10 * Math.floor(a / 10) - 1,
                    d = e.datePicker.defaults.limitCenturies,
                    s =
                        '<div class="row header"><a href="#" class="prev' +
                        (d && 1899 == n ? ' disabled' : '') +
                        '"><span class="arrow"></span></a><a href="#" class="decade" data-decade="' +
                        (n + 1) +
                        '">' +
                        (n + 1) +
                        '-' +
                        (n + 10) +
                        '</a><a href="#" class="next' +
                        (d && 2089 == n ? ' disabled' : '') +
                        '"><span class="arrow"></span></a></div>';
                r.append(s);
                for (var l = 0, c = '', i = 0, o = 0; o < 3; o++) {
                    for (
                        var u = e('<div class="row"></div>'), h = 0;
                        h < 4;
                        h++
                    )
                        if (
                            ((l = h + 4 * o),
                            (c =
                                0 == l
                                    ? ' grayed prev'
                                    : 11 == l
                                    ? ' grayed next'
                                    : ''),
                            (i = n + l),
                            d && (i < 1900 || i > 2099))
                        ) {
                            f = e(
                                '<a href="" class="cell large year blank">&nbsp;</a>',
                            );
                            u.append(f);
                        } else {
                            i == t && (c += ' selected');
                            var f = e(
                                '<a href="#" data-year="' +
                                    i +
                                    '" class="cell large year' +
                                    c +
                                    '">' +
                                    i +
                                    '</a>',
                            );
                            u.append(f);
                        }
                    r.append(u);
                }
                return r;
            },
            buildMonthPicker: function (a, t) {
                var r = e.datePicker,
                    n = e('<div class="months"></div>'),
                    d = e.datePicker.defaults.limitCenturies,
                    s =
                        '<div class="row header"><a href="#" class="prev' +
                        (d && 1900 == a ? ' disabled' : '') +
                        '"><span class="arrow"></span></a><a href="#" class="year" data-year="' +
                        a +
                        '">' +
                        a +
                        '</a><a href="#" class="next' +
                        (d && 2099 == a ? ' disabled' : '') +
                        '"><span class="arrow"></span></a></div>';
                n.append(s);
                for (var l = 0, c = '', i = 0; i < 3; i++) {
                    for (
                        var o = e('<div class="row"></div>'), u = 0;
                        u < 4;
                        u++
                    ) {
                        (c = ''), (l = u + 4 * i) == t && (c += ' selected');
                        var h = e(
                            '<a href="#" data-year="' +
                                a +
                                '" data-month="' +
                                l +
                                '" class="cell large month' +
                                c +
                                '">' +
                                r.strings.monthsShort[l] +
                                '</a>',
                        );
                        o.append(h);
                    }
                    n.append(o);
                }
                return n;
            },
            buildCalendar: function (a, t, r) {
                var n = e.datePicker,
                    d = e('<div class="calendar"></div>'),
                    s = new Date(),
                    a = a || s.getFullYear(),
                    t = t >= 0 ? t : s.getMonth(),
                    l = new Date(a, t, 1),
                    c = e.datePicker.defaults.limitCenturies;
                l.setDate(l.getDate() - 1);
                var i = l.getDate(),
                    o = this.daysInMonth(a, t),
                    u = this.firstDay(a, t),
                    h = 1 - u;
                0 == u && (h -= 7);
                var f =
                    '<div class="row header"><a href="#" class="prev' +
                    (c && 1900 == a && 0 == t ? ' disabled' : '') +
                    '"><span class="arrow"></span></a><a href="#" class="month" data-year="' +
                    a +
                    '" data-month="' +
                    t +
                    '">' +
                    n.strings.monthsFull[t] +
                    ' ' +
                    a +
                    '</a><a href="#" class="next' +
                    (c && 2099 == a && 11 == t ? ' disabled' : '') +
                    '"><span class="arrow"></span></a></div>';
                d.append(f);
                for (
                    var p = e('<div class="row days"></div>'), v = 0;
                    v < 7;
                    v++
                )
                    p.append(
                        '<div class="cell">' +
                            n.strings.daysShort[v] +
                            '</div>',
                    );
                d.append(p);
                for (v = 0; v < 6; v++) {
                    for (
                        var m = e('<div class="row week"></div>'), y = 0;
                        y < 7;
                        y++
                    ) {
                        var k = h <= 0 ? i + h : h > o ? h - o : h,
                            g =
                                h <= 0
                                    ? ' grayed prev'
                                    : h > o
                                    ? ' grayed next'
                                    : '';
                        c &&
                        ((1900 == a && 0 == t && h < 1) ||
                            (2099 == a && 11 == t && h > o))
                            ? (m.append(
                                  '<a href="#" class="cell day blank">&nbsp;</a>',
                              ),
                              h++)
                            : (h == s.getDate() &&
                                  t == s.getMonth() &&
                                  a == s.getFullYear() &&
                                  (g += ' today'),
                              h == r.getDate() &&
                                  t == r.getMonth() &&
                                  a == r.getFullYear() &&
                                  (g += ' selected'),
                              m.append(
                                  '<a href="#" class="cell day' +
                                      g +
                                      '">' +
                                      k +
                                      '</a>',
                              ),
                              h++);
                    }
                    d.append(m);
                }
                return d;
            },
            pad: function (e, a) {
                for (var t = e + ''; t.length < a; ) t = '0' + t;
                return t;
            },
        },
        show: function (a) {
            var t = e.extend(!0, {}, e.datePicker.defaults, a),
                r = null,
                n = new Date();
            t.element &&
                ('string' == typeof t.element && (t.element = e(t.element)),
                (n = t.parseDate(t.element.val())));
            var d = {
                    day: n.getDate(),
                    month: n.getMonth(),
                    year: n.getFullYear(),
                    decade: n.getFullYear(),
                },
                s = e.datePicker.utils.buildCalendar(d.year, d.month, n),
                l = e.datePicker.utils.buildMonthPicker(d.year, d.month),
                c = e.datePicker.utils.buildYearPicker(d.year, d.year),
                i = e.datePicker.utils.buildDecadePicker(d.year, d.year);
            if (
                ((r = e(
                    '<div class="datepicker"><span class="tip"></span></div>',
                )).append(s),
                r.append(l),
                r.append(c),
                r.append(i),
                e.datePicker.hide(!0),
                t.element)
            ) {
                var o = t.element.offset();
                r.css({
                    left: o.left + 'px',
                    top: o.top + t.element.outerHeight(!0) + 15 + 'px',
                });
            }
            r.hide(),
                e('body').append(r),
                r.fadeIn(150),
                r.on('click', '.calendar .day', function (a) {
                    a.preventDefault();
                    var r = e(this),
                        s = r.closest('.calendar');
                    if (!r.hasClass('blank')) {
                        s.find('.selected').removeClass('selected'),
                            r.addClass('selected'),
                            (d.day = parseInt(r.text()) || 1),
                            r.hasClass('grayed') &&
                                (r.hasClass('prev')
                                    ? ((d.year -= 0 == d.month ? 1 : 0),
                                      (d.month =
                                          d.month > 0 ? d.month - 1 : 11))
                                    : r.hasClass('next') &&
                                      ((d.year += 11 == d.month ? 1 : 0),
                                      (d.month =
                                          d.month < 11 ? d.month + 1 : 0)));
                        var l = new Date();
                        if (
                            (l.setFullYear(d.year, d.month, d.day),
                            t.selectDate(l))
                        ) {
                            n.setFullYear(d.year, d.month, d.day);
                            var c = t.formatDate(n);
                            e(t.element).val(c),
                                t.closeOnPick &&
                                    !r.hasClass('grayed') &&
                                    e.datePicker.hide();
                        }
                    }
                }),
                r.on('click', '.calendar .month', function (a) {
                    a.preventDefault();
                    var t = e(this).closest('.calendar'),
                        n = r.children('.months'),
                        s = e.datePicker.utils.buildMonthPicker(
                            d.year,
                            d.month,
                        );
                    n.replaceWith(s),
                        (n = s),
                        t.fadeOut(150, function () {
                            n.fadeIn(150);
                        });
                }),
                r.on('click', '.calendar .prev', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.closest('.calendar'),
                        s = r.find('.month'),
                        l = s.data('month'),
                        c = s.data('year');
                    t.hasClass('disabled') ||
                        ((l -= 1) < 0 && ((l = 11), c--),
                        (d.month = l),
                        (d.year = c),
                        (replacement = e.datePicker.utils.buildCalendar(
                            c,
                            l,
                            n,
                        )),
                        replacement.hide(),
                        r.after(replacement),
                        r.fadeOut(150, function () {
                            r.detach(), replacement.fadeIn(150);
                        }));
                }),
                r.on('click', '.calendar .next', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.closest('.calendar'),
                        s = r.find('.month'),
                        l = s.data('month'),
                        c = s.data('year');
                    t.hasClass('disabled') ||
                        ((l += 1) > 11 && ((l = 0), c++),
                        (d.month = l),
                        (d.year = c),
                        (replacement = e.datePicker.utils.buildCalendar(
                            c,
                            l,
                            n,
                        )),
                        replacement.hide(),
                        r.after(replacement),
                        r.fadeOut(150, function () {
                            r.detach(), replacement.fadeIn(150);
                        }));
                }),
                r.on('click', '.months .month', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        s = t.closest('.months'),
                        l = t.data('month'),
                        c = t.data('year'),
                        i = r.children('.calendar'),
                        o = null;
                    t.hasClass('blank') ||
                        (s.find('.selected').removeClass('selected'),
                        t.addClass('selected'),
                        (d.month = l),
                        (o = e.datePicker.utils.buildCalendar(c, l, n)).hide(),
                        i.replaceWith(o),
                        s.fadeOut(150, function () {
                            o.fadeIn(150);
                        }));
                }),
                r.on('click', '.months .prev', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.closest('.months'),
                        n = r.find('.year').data('year');
                    t.hasClass('disabled') ||
                        ((n -= 1),
                        (d.year = n),
                        (replacement = e.datePicker.utils.buildMonthPicker(
                            n,
                            d.month,
                        )),
                        replacement.hide(),
                        r.after(replacement),
                        r.fadeOut(150, function () {
                            r.detach(), replacement.fadeIn(150);
                        }));
                }),
                r.on('click', '.months .next', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.closest('.months'),
                        n = r.find('.year').data('year');
                    t.hasClass('disabled') ||
                        ((n += 1),
                        (d.year = n),
                        (replacement = e.datePicker.utils.buildMonthPicker(
                            n,
                            d.month,
                        )),
                        replacement.hide(),
                        r.after(replacement),
                        r.fadeOut(150, function () {
                            r.detach(), replacement.fadeIn(150);
                        }));
                }),
                r.on('click', '.months .year', function (a) {
                    a.preventDefault();
                    var t = e(this).closest('.months'),
                        n = r.children('.years'),
                        s = e.datePicker.utils.buildYearPicker(
                            d.decade,
                            d.year,
                        );
                    n.replaceWith(s),
                        (n = s),
                        t.fadeOut(150, function () {
                            n.fadeIn(150);
                        });
                }),
                r.on('click', '.years .year', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        n = t.closest('.years'),
                        s = t.data('year'),
                        l = r.children('.months'),
                        c = null;
                    t.hasClass('blank') ||
                        t.hasClass('next') ||
                        t.hasClass('prev') ||
                        (n.find('.selected').removeClass('selected'),
                        t.addClass('selected'),
                        (d.year = s),
                        (d.decade = s),
                        (c = e.datePicker.utils.buildMonthPicker(
                            s,
                            d.month,
                        )).hide(),
                        l.replaceWith(c),
                        n.fadeOut(150, function () {
                            c.fadeIn(150);
                        }));
                }),
                r.on('click', '.years .prev', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.closest('.years'),
                        n = r.find('.decade').data('decade');
                    t.hasClass('disabled') ||
                        ((n -= 10),
                        (d.decade = n),
                        (replacement = e.datePicker.utils.buildYearPicker(
                            n,
                            d.year,
                        )),
                        replacement.hide(),
                        r.after(replacement),
                        r.fadeOut(150, function () {
                            r.detach(), replacement.fadeIn(150);
                        }));
                }),
                r.on('click', '.years .next', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.closest('.years'),
                        n = r.find('.decade').data('decade');
                    t.hasClass('disabled') ||
                        ((n += 10),
                        (d.decade = n),
                        (replacement = e.datePicker.utils.buildYearPicker(
                            n,
                            d.year,
                        )),
                        replacement.hide(),
                        r.after(replacement),
                        r.fadeOut(150, function () {
                            r.detach(), replacement.fadeIn(150);
                        }));
                }),
                r.on('click', '.years .decade', function (a) {
                    a.preventDefault();
                    var t = e(this).closest('.years'),
                        n = r.children('.decades');
                    t.fadeOut(150, function () {
                        n.fadeIn(150);
                    });
                }),
                r.on('click', '.decades .decade', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        n = t.data('year'),
                        s = t.closest('.decades'),
                        l = r.children('.years'),
                        c = null;
                    t.hasClass('blank') ||
                        t.hasClass('next') ||
                        t.hasClass('prev') ||
                        (s.find('.selected').removeClass('selected'),
                        t.addClass('selected'),
                        (c = e.datePicker.utils.buildYearPicker(
                            n,
                            d.year,
                        )).hide(),
                        l.replaceWith(c),
                        s.fadeOut(150, function () {
                            c.fadeIn(150);
                        }));
                }),
                r.on('click', '.decades .prev', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.closest('.decades'),
                        n = r.find('.century').data('century');
                    t.hasClass('disabled') ||
                        ((n -= 100),
                        (replacement = e.datePicker.utils.buildDecadePicker(
                            n,
                            d.decade,
                        )),
                        replacement.hide(),
                        r.after(replacement),
                        r.fadeOut(150, function () {
                            r.detach(), replacement.fadeIn(150);
                        }));
                }),
                r.on('click', '.decades .next', function (a) {
                    a.preventDefault();
                    var t = e(this),
                        r = t.closest('.decades'),
                        n = r.find('.century').data('century');
                    t.hasClass('disabled') ||
                        ((n += 100),
                        (replacement = e.datePicker.utils.buildDecadePicker(
                            n,
                            d.decade,
                        )),
                        replacement.hide(),
                        r.after(replacement),
                        r.fadeOut(150, function () {
                            r.detach(), replacement.fadeIn(150);
                        }));
                }),
                r.on('click', '.decades .century', function (e) {
                    e.preventDefault();
                }),
                e(document).on('mouseup', function (a) {
                    r.is(a.target) ||
                        0 !== r.has(a.target).length ||
                        (e(document).off('mouseup'), e.datePicker.hide());
                });
        },
        hide: function (a) {
            var a = a || !1,
                t = e('.datepicker');
            a ? t.remove() : t.fadeOut(150, t.remove);
        },
    }),
        (e.fn.datePicker = function (a) {
            if (!this.length) return this;
            e.extend(!0, {}, e.datePicker.defaults, a);
            return (
                this.each(function () {
                    var a = e(this),
                        t = a.parent().find('[data-toggle=datepicker]'),
                        r = a.data('locked');
                    r = !!r && r.split(';');
                    var n = function (a) {
                        var t = !0,
                            n =
                                e.datePicker.utils.pad(a.getDate(), 2) +
                                '/' +
                                e.datePicker.utils.pad(a.getMonth() + 1, 2) +
                                '/' +
                                a.getFullYear();
                        if (r.length)
                            for (var d = 0; d < r.length; d++)
                                if (r[d] == n) {
                                    'function' == typeof e.alert
                                        ? (e.alert =
                                              e.datePicker.strings.messageLocked)
                                        : alert(
                                              e.datePicker.strings
                                                  .messageLocked,
                                          ),
                                        (t = !1);
                                    break;
                                }
                        return t;
                    };
                    t.length
                        ? t.on('click', function (t) {
                              t.preventDefault(),
                                  e('.datepicker:visible').length
                                      ? e.datePicker.hide()
                                      : e.datePicker.show({
                                            element: a,
                                            selectDate: n,
                                        });
                          })
                        : a.on('click', function () {
                              e.datePicker.show({element: a, selectDate: n});
                          });
                }),
                this
            );
        }),
        e('[data-select=datepicker]').each(function () {
            e(this).datePicker();
        });
})(jQuery);
