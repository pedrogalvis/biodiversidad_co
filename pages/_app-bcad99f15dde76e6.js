(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    83454: function(e, t, r) {
        "use strict";
        var n, a;
        e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof (null == (a = r.g.process) ? void 0 : a.env) ? r.g.process : r(77663)
    },
    91118: function(e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return r(37668)
        }
        ])
    },
    71210: function(e, t) {
        "use strict";
        function r(e, t, r, n) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.getDomainLocale = r,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    48418: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(94941).Z;
        r(45753).default,
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var a = r(92648).Z
          , o = r(17273).Z
          , l = a(r(67294))
          , i = r(76273)
          , s = r(22725)
          , c = r(63462)
          , u = r(21018)
          , f = r(57190)
          , d = r(71210)
          , h = r(98684)
          , p = {};
        function g(e, t, r, n) {
            if (e && i.isLocalURL(t)) {
                Promise.resolve(e.prefetch(t, r, n)).catch(function(e) {});
                var a = n && void 0 !== n.locale ? n.locale : e && e.locale;
                p[t + "%" + r + (a ? "%" + a : "")] = !0
            }
        }
        var v = l.default.forwardRef(function(e, t) {
            var r, a, v = e.href, m = e.as, b = e.children, x = e.prefetch, j = e.passHref, y = e.replace, w = e.shallow, _ = e.scroll, P = e.locale, C = e.onClick, N = e.onMouseEnter, O = e.onTouchStart, E = e.legacyBehavior, M = void 0 === E ? !0 !== Boolean(!1) : E, k = o(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
            r = b,
            M && ("string" == typeof r || "number" == typeof r) && (r = l.default.createElement("a", null, r));
            var T = !1 !== x
              , L = l.default.useContext(c.RouterContext)
              , S = l.default.useContext(u.AppRouterContext);
            S && (L = S);
            var R = l.default.useMemo(function() {
                var e = n(i.resolveHref(L, v, !0), 2)
                  , t = e[0]
                  , r = e[1];
                return {
                    href: t,
                    as: m ? i.resolveHref(L, m) : r || t
                }
            }, [L, v, m])
              , A = R.href
              , I = R.as
              , V = l.default.useRef(A)
              , B = l.default.useRef(I);
            M && (a = l.default.Children.only(r));
            var Z = M ? a && "object" == typeof a && a.ref : t
              , D = n(f.useIntersection({
                rootMargin: "200px"
            }), 3)
              , G = D[0]
              , U = D[1]
              , H = D[2]
              , z = l.default.useCallback(function(e) {
                (B.current !== I || V.current !== A) && (H(),
                B.current = I,
                V.current = A),
                G(e),
                Z && ("function" == typeof Z ? Z(e) : "object" == typeof Z && (Z.current = e))
            }, [I, Z, A, H, G]);
            l.default.useEffect(function() {
                var e = U && T && i.isLocalURL(A)
                  , t = void 0 !== P ? P : L && L.locale
                  , r = p[A + "%" + I + (t ? "%" + t : "")];
                e && !r && g(L, A, I, {
                    locale: t
                })
            }, [I, A, U, P, T, L]);
            var X = {
                ref: z,
                onClick: function(e) {
                    M || "function" != typeof C || C(e),
                    M && a.props && "function" == typeof a.props.onClick && a.props.onClick(e),
                    e.defaultPrevented || function(e, t, r, n, a, o, s, c, u, f) {
                        if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(h = (d = e).currentTarget.target) || "_self" === h) && !d.metaKey && !d.ctrlKey && !d.shiftKey && !d.altKey && (!d.nativeEvent || 2 !== d.nativeEvent.which) && i.isLocalURL(r)) {
                            e.preventDefault();
                            var d, h, p = function() {
                                "beforePopState"in t ? t[a ? "replace" : "push"](r, n, {
                                    shallow: o,
                                    locale: c,
                                    scroll: s
                                }) : t[a ? "replace" : "push"](r, {
                                    forceOptimisticNavigation: !f
                                })
                            };
                            u ? l.default.startTransition(p) : p()
                        }
                    }(e, L, A, I, y, w, _, P, Boolean(S), T)
                },
                onMouseEnter: function(e) {
                    M || "function" != typeof N || N(e),
                    M && a.props && "function" == typeof a.props.onMouseEnter && a.props.onMouseEnter(e),
                    !(!T && S) && i.isLocalURL(A) && g(L, A, I, {
                        priority: !0
                    })
                },
                onTouchStart: function(e) {
                    M || "function" != typeof O || O(e),
                    M && a.props && "function" == typeof a.props.onTouchStart && a.props.onTouchStart(e),
                    !(!T && S) && i.isLocalURL(A) && g(L, A, I, {
                        priority: !0
                    })
                }
            };
            if (!M || j || "a" === a.type && !("href"in a.props)) {
                var q = void 0 !== P ? P : L && L.locale
                  , $ = L && L.isLocaleDomain && d.getDomainLocale(I, q, L.locales, L.domainLocales);
                X.href = $ || h.addBasePath(s.addLocale(I, q, L && L.defaultLocale))
            }
            return M ? l.default.cloneElement(a, X) : l.default.createElement("a", Object.assign({}, k, X), r)
        });
        t.default = v,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    57190: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(94941).Z;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            var t = e.rootRef
              , r = e.rootMargin
              , c = e.disabled || !l
              , u = n(a.useState(!1), 2)
              , f = u[0]
              , d = u[1]
              , h = n(a.useState(null), 2)
              , p = h[0]
              , g = h[1];
            return a.useEffect(function() {
                if (l) {
                    if (!c && !f && p && p.tagName) {
                        var e, n, a, u, h, g, v;
                        return n = function(e) {
                            return e && d(e)
                        }
                        ,
                        h = (u = function(e) {
                            var t, r = {
                                root: e.root || null,
                                margin: e.rootMargin || ""
                            }, n = s.find(function(e) {
                                return e.root === r.root && e.margin === r.margin
                            });
                            if (n && (t = i.get(n)))
                                return t;
                            var a = new Map;
                            return t = {
                                id: r,
                                observer: new IntersectionObserver(function(e) {
                                    e.forEach(function(e) {
                                        var t = a.get(e.target)
                                          , r = e.isIntersecting || e.intersectionRatio > 0;
                                        t && r && t(r)
                                    })
                                }
                                ,e),
                                elements: a
                            },
                            s.push(r),
                            i.set(r, t),
                            t
                        }(a = {
                            root: null == t ? void 0 : t.current,
                            rootMargin: r
                        })).id,
                        g = u.observer,
                        (v = u.elements).set(p, n),
                        g.observe(p),
                        function() {
                            if (v.delete(p),
                            g.unobserve(p),
                            0 === v.size) {
                                g.disconnect(),
                                i.delete(h);
                                var e = s.findIndex(function(e) {
                                    return e.root === h.root && e.margin === h.margin
                                });
                                e > -1 && s.splice(e, 1)
                            }
                        }
                    }
                } else if (!f) {
                    var m = o.requestIdleCallback(function() {
                        return d(!0)
                    });
                    return function() {
                        return o.cancelIdleCallback(m)
                    }
                }
            }, [p, c, r, t, f]),
            [g, f, a.useCallback(function() {
                d(!1)
            }, [])]
        }
        ;
        var a = r(67294)
          , o = r(9311)
          , l = "function" == typeof IntersectionObserver
          , i = new Map
          , s = [];
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    21018: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
        var n = (0,
        r(92648).Z)(r(67294))
          , a = n.default.createContext(null);
        t.AppRouterContext = a;
        var o = n.default.createContext(null);
        t.LayoutRouterContext = o;
        var l = n.default.createContext(null);
        t.GlobalLayoutRouterContext = l;
        var i = n.default.createContext(null);
        t.TemplateContext = i
    },
    37668: function(e, t, r) {
        "use strict";
        r.r(t),
        r.d(t, {
            AppContext: function() {
                return _
            },
            default: function() {
                return P
            }
        });
        var n = r(26042)
          , a = r(85893)
          , o = r(9008)
          , l = r.n(o)
          , i = r(44304)
          , s = r(67294)
          , c = r(93967)
          , u = r.n(c);
        function f() {
            var e = (0,
            s.useState)("bg-gradient-to-r from-lemon to-dartmouth-green");
            e[0],
            e[1];
            var t = (0,
            s.useContext)(_).footerBgColor;
            return (0,
            s.useEffect)(function() {}, [t]),
            (0,
            a.jsxs)("footer", {
                className: u()(t, "bg-cover bg-center h-auto pt-6 pb-4 space-y-6"),
                children: [(0,
                a.jsx)("div", {
                    className: "max-w-screen-xl px-20 mx-auto text-white ",
                    children: (0,
                    a.jsxs)("div", {
                        className: "flex flex-col gap-y-8 lg:flex-row justify-between",
                        children: [(0,
                        a.jsx)("a", {
                            href: "https://biodiversidad.co",
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0,
                            a.jsx)("img", {
                                className: "lg:h-[50%] lg:w-2/3",
                                src: "/images/sib-icon.svg",
                                alt: "icon sib "
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex flex-col gap-y-6 lg:flex-row gap-x-16",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "flex text-center lg:text-left flex-col gap-y-2.5 text-sm font-lato",
                                children: [(0,
                                a.jsx)("b", {
                                    children: " Acerca de"
                                }), (0,
                                a.jsx)("a", {
                                    target: "_blank",
                                    href: "/mas/acerca-de",
                                    rel: "noreferrer",
                                    children: "Esta versi\xf3n"
                                }), (0,
                                a.jsx)("a", {
                                    target: "_blank",
                                    href: "/mas/metodologia",
                                    rel: "noreferrer",
                                    children: "Metodolog\xeda"
                                }), (0,
                                a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://gitlab.com/sib-colombia/cifras-biodiversidad",
                                    rel: "noreferrer",
                                    children: "Datos"
                                }), (0,
                                a.jsx)("a", {
                                    target: "_blank",
                                    href: "/mas/acerca-de#como-citar",
                                    rel: "noreferrer",
                                    children: "C\xf3mo citar"
                                }), (0,
                                a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://github.com/datasketch/humboldt-biodiversidad-en-cifras/issues",
                                    rel: "noreferrer",
                                    children: "Reportar inconsistencias"
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "text-center lg:text-left flex flex-col gap-y-2.5 text-sm font-lato",
                                children: [(0,
                                a.jsx)("b", {
                                    children: "Enlaces"
                                }), (0,
                                a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://biodiversidad.co/",
                                    rel: "noreferrer",
                                    children: "SiB colombia"
                                }), (0,
                                a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://biodiversidad.co/terminos-y-condiciones/politica-de-uso",
                                    rel: "noreferrer",
                                    children: "T\xe9rminos y condiciones"
                                }), (0,
                                a.jsx)("a", {
                                    target: "_blank",
                                    href: "https://biodiversidad.co/boletin",
                                    rel: "noreferrer",
                                    children: "Suscribirse al bolet\xedn"
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "text-center lg:text-left flex flex-col gap-y-2.5 text-sm font-lato",
                                children: [(0,
                                a.jsx)("b", {
                                    children: "Contacto"
                                }), (0,
                                a.jsx)("a", {
                                    target: "_blank",
                                    href: "mailto:sib@humboldt.org.co",
                                    rel: "noreferrer",
                                    children: "sib@humboldt.org.co"
                                }), (0,
                                a.jsx)("span", {
                                    children: "PBX:(+601) 3202767"
                                }), (0,
                                a.jsx)("span", {
                                    children: "Calle 28A # 15-09"
                                }), (0,
                                a.jsx)("span", {
                                    children: "Bogot\xe1 D.C., Colombia"
                                }), (0,
                                a.jsxs)("div", {
                                    className: "flex gap-x-4 justify-center lg:justify-start items-center",
                                    children: [(0,
                                    a.jsx)("a", {
                                        target: "_blank",
                                        href: "https://twitter.com/sibcolombia",
                                        rel: "noreferrer",
                                        children: (0,
                                        a.jsx)("img", {
                                            src: "/images/icons/icon-tw.svg",
                                            className: "h-5 w-5"
                                        })
                                    }), (0,
                                    a.jsx)("a", {
                                        target: "_blank",
                                        href: "https://www.facebook.com/SibColombia",
                                        rel: "noreferrer",
                                        children: (0,
                                        a.jsx)("img", {
                                            src: "/images/icons/icon-fb.svg",
                                            className: "h-5 w-6"
                                        })
                                    }), (0,
                                    a.jsx)("a", {
                                        target: "_blank",
                                        href: "https://www.youtube.com/user/sibcolombia",
                                        rel: "noreferrer",
                                        children: (0,
                                        a.jsx)("img", {
                                            src: "/images/icons/icon-yt.svg",
                                            className: "h-5 w-5"
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), (0,
                a.jsxs)("div", {
                    className: "text-center w-6/12 lg:w-2/12 mx-auto",
                    children: [(0,
                    a.jsx)("div", {
                        className: "border-b border-b-white pb-2 "
                    }), (0,
                    a.jsx)("div", {
                        className: "py-2",
                        children: (0,
                        a.jsx)("img", {
                            className: "lg:h-4 mx-auto",
                            src: "/images/powered-by.svg",
                            alt: "icon powered by datasketch"
                        })
                    })]
                })]
            })
        }
        var d = r(69396)
          , h = r(41664)
          , p = r.n(h)
          , g = function(e) {
            return (0,
            a.jsxs)("svg", (0,
            d.Z)((0,
            n.Z)({
                xmlns: "http://www.w3.org/2000/svg",
                width: "15px",
                height: "14px",
                viewBox: "0 0 14.832 13.983"
            }, e), {
                children: [(0,
                a.jsx)("defs", {
                    children: (0,
                    a.jsx)("clipPath", {
                        id: "a",
                        children: (0,
                        a.jsx)("path", {
                            "data-name": "Rect\\xE1ngulo 3036",
                            fill: "none",
                            d: "M0 0h15v14H0z"
                        })
                    })
                }), (0,
                a.jsx)("g", {
                    "data-name": "Grupo 1599",
                    children: (0,
                    a.jsxs)("g", {
                        "data-name": "Grupo 1530",
                        clipPath: "url(#a)",
                        fill: "none",
                        stroke: "#fff",
                        children: [(0,
                        a.jsx)("path", {
                            "data-name": "Trazado 2697",
                            d: "m7.532.316 6.683 6.349-6.683 7.017"
                        }), (0,
                        a.jsx)("path", {
                            "data-name": "L\\xEDnea 37",
                            d: "M14.216 6.665H0"
                        })]
                    })
                })]
            }))
        };
        function v() {
            var e = (0,
            s.useContext)(_).breadCrumb;
            return (0,
            s.useEffect)(function() {
                return function() {}
            }, [e]),
            (0,
            a.jsx)("div", {
                className: "flex gap-x-2",
                children: e.map(function(t, r) {
                    return t.href ? (0,
                    a.jsxs)("div", {
                        className: "flex gap-x-2 items-center",
                        children: [(0,
                        a.jsx)(p(), {
                            href: t.href,
                            children: (0,
                            a.jsx)("a", {
                                className: "text-white font",
                                children: t.label
                            })
                        }), (0,
                        a.jsx)(g, {})]
                    }, t) : (0,
                    a.jsxs)("div", {
                        className: "flex gap-x-2 items-center",
                        children: [(0,
                        a.jsx)("span", {
                            className: "text-white font",
                            children: t.label
                        }), r === e.length - 1 ? "" : (0,
                        a.jsx)(g, {})]
                    }, r)
                })
            })
        }
        var m = r(99534)
          , b = (0,
        s.createContext)(null);
        function x(e) {
            var t = e.children
              , r = e.setRegions
              , o = (0,
            m.Z)(e, ["children", "setRegions"])
              , l = (0,
            s.useRef)(null)
              , i = (0,
            s.useState)(!1)
              , c = i[0]
              , u = i[1]
              , f = function(e) {
                e.target,
                u(function(e) {
                    return !e
                }),
                r([])
            };
            (0,
            s.useEffect)(function() {
                return document.addEventListener("click", h, !0),
                function() {
                    document.removeEventListener("click", h, !0)
                }
            }, [l]);
            var h = function(e) {
                var t = e.target;
                l.current && !l.current.contains(t) && u(!1)
            };
            return (0,
            a.jsx)(b.Provider, {
                value: {
                    open: c,
                    setOpen: u,
                    showMenu: f
                },
                children: (0,
                a.jsx)("div", (0,
                d.Z)((0,
                n.Z)({}, o), {
                    ref: l,
                    children: t
                }))
            })
        }
        x.Button = function(e) {
            var t = e.children
              , r = e.href
              , n = e.arrow
              , o = e.className
              , l = e.src
              , i = (0,
            s.useContext)(b)
              , c = i.showMenu
              , f = i.open;
            return !n && r ? (0,
            a.jsx)(p(), {
                href: r,
                children: (0,
                a.jsx)("a", {
                    className: u()(o || ""),
                    children: t
                })
            }) : (0,
            a.jsx)("button", {
                onClick: c,
                type: "button",
                value: "open",
                children: (0,
                a.jsxs)("div", {
                    className: u()(o, "flex gap-x-2 items-center"),
                    children: [t, l ? (0,
                    a.jsx)("img", {
                        className: u()(f ? "" : "rotate-180", "h-2.5"),
                        src: l,
                        alt: "arrow"
                    }) : (0,
                    a.jsx)("img", {
                        className: "h-2.5",
                        src: "/images/arrow-white.svg",
                        alt: "arrow"
                    })]
                })
            })
        }
        ,
        x.Items = function(e) {
            var t = e.children
              , r = (0,
            s.useContext)(b).open;
            return (0,
            a.jsx)("ul", {
                className: u()(r ? "block" : "hidden", e.className),
                children: t
            })
        }
        ,
        x.SubMenu = function(e) {
            var t = e.children;
            return (0,
            a.jsx)("div", {
                className: u()(e.className || ""),
                children: t
            })
        }
        ,
        x.Item = function(e) {
            var t = e.children
              , r = e.href
              , o = e.className
              , l = e.color;
            return r ? (0,
            a.jsx)(p(), {
                href: r,
                children: (0,
                a.jsxs)("a", {
                    className: u()(o, l ? "hover:text-".concat(l) : ""),
                    children: [" ", t, " "]
                })
            }) : (0,
            a.jsx)("li", (0,
            d.Z)((0,
            n.Z)({}, e), {
                className: u()(o, l ? "hover:text-".concat(l) : ""),
                children: t
            }))
        }
        ;
        var j = function(e) {
            var t = e.nav
              , r = e.menuIsActive
              , o = e.setMenuIsActive
              , l = (0,
            s.useRef)(null);
            (0,
            s.useEffect)(function() {
                return document.addEventListener("click", i, !0),
                function() {
                    document.removeEventListener("click", i, !0)
                }
            }, [l]);
            var i = function(e) {
                var t = e.target;
                l.current && !l.current.contains(t) && o(!1)
            };
            return (0,
            a.jsxs)("ul", {
                ref: l,
                className: "lg:hidden fixed w-3/4 md:w-1/2 top-0 h-full bg-white z-40 pt-14 px-8 space-y-6 duration-500 ease-in ".concat(r ? "right-0" : "-right-full"),
                children: [(0,
                a.jsx)("div", {
                    className: "border-b border-black",
                    children: (0,
                    a.jsx)("button", {
                        onClick: function() {
                            return o(!1)
                        },
                        type: "button",
                        className: "w-7 h-7 absolute right-8 top-4 cursor-pointer",
                        children: (0,
                        a.jsx)("img", {
                            src: "/images/icons/Icon X feather-menu.svg",
                            alt: "close icon"
                        })
                    })
                }), t.map(function(e, t) {
                    var r, o;
                    return (0,
                    a.jsxs)(x, {
                        children: [(0,
                        a.jsx)(x.Button, (0,
                        d.Z)((0,
                        n.Z)({
                            className: "font-lato text-sm md:text-md"
                        }, e), {
                            arrow: !!(null === (r = e.childs) || void 0 === r ? void 0 : r.length),
                            src: "/images/icons/icon-up-arrow.svg",
                            children: e.label
                        })), (0,
                        a.jsx)(x.Items, {
                            className: "pt-2 pl-4 space-y-2",
                            children: null === (o = e.childs) || void 0 === o ? void 0 : o.map(function(t, r) {
                                var n, o;
                                return (0,
                                a.jsxs)(x, {
                                    children: [(0,
                                    a.jsx)(x.Button, {
                                        className: "font-lato text-sm md:text-md",
                                        arrow: !!(null === (n = e.children) || void 0 === n ? void 0 : n.length),
                                        href: t.href,
                                        src: "/images/icons/icon-up-arrow.svg",
                                        children: t.label
                                    }), (0,
                                    a.jsx)(x.Items, {
                                        className: "flex flex-col",
                                        children: null === (o = t.children) || void 0 === o ? void 0 : o.map(function(t) {
                                            return (0,
                                            a.jsxs)(x.Item, {
                                                className: "text-black py-4.5 pl-2 hover:font-bold font-lato opacity-80 text-sm md:text-md w-full flex justify-between",
                                                color: e.color,
                                                href: t.href,
                                                children: [t.label, t.children && (0,
                                                a.jsx)("img", {
                                                    src: e.icon,
                                                    alt: "icon arrow"
                                                })]
                                            }, t.label)
                                        })
                                    })]
                                }, "SUB-" + r)
                            })
                        })]
                    }, t)
                })]
            })
        };
        function y() {
            var e = (0,
            s.useState)([])
              , t = e[0]
              , r = e[1]
              , o = (0,
            s.useState)(!1)
              , l = o[0]
              , i = o[1]
              , c = [{
                label: "Colombia",
                href: "/colombia"
            }, {
                color: "dartmouth-green",
                label: "Regiones",
                icon: "/images/arrow-green-icon.svg",
                href: "",
                childs: [{
                    label: "Departamentos",
                    children: [{
                        label: "Amazonas",
                        href: "/amazonas"
                    }, {
                        label: "Antioquia",
                        href: "/antioquia"
                    }, {
                        label: "Arauca",
                        href: "/arauca"
                    }, {
                        label: "Atl\xe1ntico",
                        href: "/atlantico"
                    }, {
                        label: "Bogot\xe1 D. C.",
                        href: "/bogota-dc"
                    }, {
                        label: "Bol\xedvar",
                        href: "/bolivar"
                    }, {
                        label: "Boyac\xe1",
                        href: "/boyaca"
                    }, {
                        label: "Caldas",
                        href: "/caldas"
                    }, {
                        label: "Caquet\xe1",
                        href: "/caqueta"
                    }, {
                        label: "Casanare",
                        href: "/casanare"
                    }, {
                        label: "Cauca",
                        href: "/cauca"
                    }, {
                        label: "Cesar",
                        href: "/cesar"
                    }, {
                        label: "Choc\xf3",
                        href: "/choco"
                    }, {
                        label: "C\xf3rdoba",
                        href: "/cordoba"
                    }, {
                        label: "Cundinamarca",
                        href: "/cundinamarca"
                    }, {
                        label: "Guain\xeda",
                        href: "/guainia"
                    }, {
                        label: "Guaviare",
                        href: "/guaviare"
                    }, {
                        label: "Huila",
                        href: "/huila"
                    }, {
                        label: "La Guajira",
                        href: "/la-guajira"
                    }, {
                        label: "Magdalena",
                        href: "/magdalena"
                    }, {
                        label: "Meta",
                        href: "/meta"
                    }, {
                        label: "Nari\xf1o",
                        href: "/narino"
                    }, {
                        label: "Norte de Santander",
                        href: "/norte-santander"
                    }, {
                        label: "Putumayo",
                        href: "/putumayo"
                    }, {
                        label: "Quind\xedo",
                        href: "/quindio"
                    }, {
                        label: "Risaralda",
                        href: "/risaralda"
                    }, {
                        label: "San Andr\xe9s y Providencia",
                        href: "/san-andres-y-providencia"
                    }, {
                        label: "Santander",
                        href: "/santander"
                    }, {
                        label: "Sucre",
                        href: "/sucre"
                    }, {
                        label: "Tolima",
                        href: "/tolima"
                    }, {
                        label: "Valle del Cauca",
                        href: "/valle-del-cauca"
                    }, {
                        label: "Vaup\xe9s",
                        href: "/vaupes"
                    }, {
                        label: "Vichada",
                        href: "/vichada"
                    }]
                }, {
                    label: "\xc1reas protegidas",
                    children: [{
                        label: "La Planada",
                        href: "/narino/reserva-forestal-la-planada"
                    }]
                }, {
                    label: "Territorios ind\xedgenas",
                    children: [{
                        label: "Pialap\xed Pueblo Viejo",
                        href: "/narino/resguardo-indigena-pialapi-pueblo-viejo"
                    }]
                }]
            }, {
                label: "Explorador",
                href: "/explorador"
            }, {
                color: "flame",
                label: "M\xe1s",
                href: "",
                childs: [{
                    label: "Acerca de",
                    href: "/mas/acerca-de"
                }, {
                    label: "Glosario",
                    href: "/mas/glosario"
                }, {
                    label: "Metodolog\xeda",
                    href: "/mas/metodologia"
                }, {
                    label: "Prensa",
                    href: "/mas/prensa"
                }, {
                    label: "Preguntas frecuentes",
                    href: "/mas/preguntas-frecuentes"
                }, {
                    label: "Publicadores",
                    href: "/mas/publicadores"
                }]
            }]
              , f = function(e) {
                if (!e) {
                    r([]);
                    return
                }
                r(e)
            };
            return (0,
            a.jsx)("header", {
                className: "absolute top-0 left-0 w-full z-40 py-2",
                children: (0,
                a.jsxs)("div", {
                    className: "mx-auto w-10/12 max-w-[1300px] ",
                    children: [(0,
                    a.jsx)("div", {
                        className: " border-b border-white pb-2",
                        children: (0,
                        a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [(0,
                            a.jsx)("div", {
                                children: (0,
                                a.jsx)(p(), {
                                    href: "/",
                                    children: (0,
                                    a.jsx)("a", {
                                        className: "flex items-center",
                                        children: (0,
                                        a.jsx)("img", {
                                            className: "min-h-[40px] min-w-[140px] w-1/2",
                                            src: "/images/logo-biodiversidadcifras.svg",
                                            alt: "Logo biodiversidadcifras"
                                        })
                                    })
                                })
                            }), (0,
                            a.jsxs)("nav", {
                                className: "lg:self-end",
                                children: [(0,
                                a.jsx)("ul", {
                                    className: "hidden relative lg:grid lg:grid-cols-4 text-white gap-x-6",
                                    children: c.map(function(e, o) {
                                        var l, i;
                                        return (0,
                                        a.jsxs)(x, {
                                            setRegions: r,
                                            children: [(0,
                                            a.jsx)(x.Button, (0,
                                            d.Z)((0,
                                            n.Z)({}, e), {
                                                arrow: !!(null === (l = e.childs) || void 0 === l ? void 0 : l.length),
                                                className: "font-lato text-sm",
                                                children: e.label
                                            })), (0,
                                            a.jsx)(x.Items, {
                                                className: "absolute top-[132%] bg-white w-40 flex flex-col gap-y-0.5 py-1.5 px-2.5",
                                                children: null === (i = e.childs) || void 0 === i ? void 0 : i.map(function(r, n) {
                                                    return (0,
                                                    a.jsxs)(a.Fragment, {
                                                        children: [(0,
                                                        a.jsx)("div", {
                                                            children: (0,
                                                            a.jsxs)(x.Item, {
                                                                className: "text-black py-1.5 hover:font-bold font-lato opacity-80 text-sm w-full flex justify-between",
                                                                onClick: function() {
                                                                    return f(r.children)
                                                                },
                                                                color: e.color,
                                                                href: r.href,
                                                                children: [r.label, r.children && (0,
                                                                a.jsx)("img", {
                                                                    src: e.icon,
                                                                    alt: "icon arrow"
                                                                })]
                                                            })
                                                        }, r.label), 0 !== t.length && 1 !== t.length && (0,
                                                        a.jsx)("div", {
                                                            className: u()("bg-white w-[741px] absolute top-0 px-7 py-5 grid grid-cols-4 gap-4 text-sm font-lato duration-400 ease-in -right-2/3"),
                                                            children: null == t ? void 0 : t.map(function(t, r) {
                                                                var n = t.label
                                                                  , o = t.href;
                                                                return (0,
                                                                a.jsx)("a", {
                                                                    href: o,
                                                                    className: "text-black hover:font-bold hover:text-".concat(e.color),
                                                                    children: n
                                                                }, r)
                                                            })
                                                        }), 1 === t.length && (0,
                                                        a.jsx)("div", {
                                                            className: u()("bg-white w-full h-full absolute top-0 left-full py-1.5 px-2 grid grid-cols-1 text-sm font-lato"),
                                                            children: null == t ? void 0 : t.map(function(t, r) {
                                                                var n = t.label
                                                                  , o = t.href;
                                                                return (0,
                                                                a.jsx)("a", {
                                                                    href: o,
                                                                    className: "text-black hover:font-bold hover:text-".concat(e.color),
                                                                    children: n
                                                                }, r)
                                                            })
                                                        })]
                                                    })
                                                })
                                            })]
                                        }, "nav-" + o)
                                    })
                                }), (0,
                                a.jsx)(j, {
                                    nav: c,
                                    setMenuIsActive: i,
                                    menuIsActive: l
                                })]
                            }), (0,
                            a.jsx)("button", {
                                onClick: function() {
                                    return i(!l)
                                },
                                type: "button",
                                className: "lg:hidden w-7 h-7 mt-2 cursor-pointer",
                                children: (0,
                                a.jsx)("img", {
                                    src: "/images/icons/Icon feather-menu.svg",
                                    alt: "hamburguer icon"
                                })
                            })]
                        })
                    }), (0,
                    a.jsx)("div", {
                        children: (0,
                        a.jsx)(v, {})
                    })]
                })
            })
        }
        function w(e) {
            var t = e.children;
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)(y, {}), (0,
                a.jsx)("main", {
                    children: t
                }), (0,
                a.jsx)(f, {})]
            })
        }
        r(40906);
        var _ = (0,
        s.createContext)()
          , P = function(e) {
            var t = e.Component
              , r = e.pageProps
              , o = (0,
            s.useState)("bg-footer-green")
              , c = o[0]
              , u = o[1]
              , f = (0,
            s.useState)([])
              , d = f[0]
              , h = f[1];
            return (0,
            a.jsxs)(_.Provider, {
                value: {
                    footerBgColor: c,
                    setFooterBgColor: u,
                    breadCrumb: d,
                    setBreadCrumb: h
                },
                children: [(0,
                a.jsx)(l(), {
                    children: (0,
                    a.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                }), (0,
                a.jsx)(i.Wi, {
                    trackPageViews: !0,
                    gaMeasurementId: "UA-120994855-7"
                }), (0,
                a.jsx)(w, {
                    children: (0,
                    a.jsx)(t, (0,
                    n.Z)({}, r))
                })]
            })
        }
    },
    40906: function() {},
    77663: function(e) {
        !function() {
            var t = {
                229: function(e) {
                    var t, r, n, a = e.exports = {};
                    function o() {
                        throw Error("setTimeout has not been defined")
                    }
                    function l() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function i(e) {
                        if (t === setTimeout)
                            return setTimeout(e, 0);
                        if ((t === o || !t) && setTimeout)
                            return t = setTimeout,
                            setTimeout(e, 0);
                        try {
                            return t(e, 0)
                        } catch (n) {
                            try {
                                return t.call(null, e, 0)
                            } catch (r) {
                                return t.call(this, e, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            t = "function" == typeof setTimeout ? setTimeout : o
                        } catch (e) {
                            t = o
                        }
                        try {
                            r = "function" == typeof clearTimeout ? clearTimeout : l
                        } catch (n) {
                            r = l
                        }
                    }();
                    var s = []
                      , c = !1
                      , u = -1;
                    function f() {
                        c && n && (c = !1,
                        n.length ? s = n.concat(s) : u = -1,
                        s.length && d())
                    }
                    function d() {
                        if (!c) {
                            var e = i(f);
                            c = !0;
                            for (var t = s.length; t; ) {
                                for (n = s,
                                s = []; ++u < t; )
                                    n && n[u].run();
                                u = -1,
                                t = s.length
                            }
                            n = null,
                            c = !1,
                            function(e) {
                                if (r === clearTimeout)
                                    return clearTimeout(e);
                                if ((r === l || !r) && clearTimeout)
                                    return r = clearTimeout,
                                    clearTimeout(e);
                                try {
                                    r(e)
                                } catch (n) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                        }
                    }
                    function h(e, t) {
                        this.fun = e,
                        this.array = t
                    }
                    function p() {}
                    a.nextTick = function(e) {
                        var t = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++)
                                t[r - 1] = arguments[r];
                        s.push(new h(e,t)),
                        1 !== s.length || c || i(d)
                    }
                    ,
                    h.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    a.title = "browser",
                    a.browser = !0,
                    a.env = {},
                    a.argv = [],
                    a.version = "",
                    a.versions = {},
                    a.on = p,
                    a.addListener = p,
                    a.once = p,
                    a.off = p,
                    a.removeListener = p,
                    a.removeAllListeners = p,
                    a.emit = p,
                    a.prependListener = p,
                    a.prependOnceListener = p,
                    a.listeners = function(e) {
                        return []
                    }
                    ,
                    a.binding = function(e) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    a.cwd = function() {
                        return "/"
                    }
                    ,
                    a.chdir = function(e) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    a.umask = function() {
                        return 0
                    }
                }
            }
              , r = {};
            function n(e) {
                var a = r[e];
                if (void 0 !== a)
                    return a.exports;
                var o = r[e] = {
                    exports: {}
                }
                  , l = !0;
                try {
                    t[e](o, o.exports, n),
                    l = !1
                } finally {
                    l && delete r[e]
                }
                return o.exports
            }
            n.ab = "//";
            var a = n(229);
            e.exports = a
        }()
    },
    9008: function(e, t, r) {
        e.exports = r(5443)
    },
    41664: function(e, t, r) {
        e.exports = r(48418)
    },
    11163: function(e, t, r) {
        e.exports = r(90387)
    },
    4298: function(e, t, r) {
        e.exports = r(20699)
    },
    51462: function(e, t, r) {
        "use strict";
        var n = r(83454);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.GoogleAnalytics = void 0;
        let a = r(97582)
          , o = a.__importDefault(r(67294))
          , l = a.__importDefault(r(4298))
          , i = r(88816);
        t.GoogleAnalytics = function({debugMode: e=!1, gaMeasurementId: t, gtagUrl: r="https://www.googletagmanager.com/gtag/js", strategy: a="afterInteractive", defaultConsent: s="granted", trackPageViews: c, nonce: u}) {
            var f;
            let d = null !== (f = n.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && void 0 !== f ? f : t;
            return ((0,
            i.usePageViews)({
                gaMeasurementId: d,
                ignoreHashChange: "object" == typeof c && (null == c ? void 0 : c.ignoreHashChange),
                disabled: !c
            }),
            d) ? o.default.createElement(o.default.Fragment, null, o.default.createElement(l.default, {
                src: `${r}?id=${d}`,
                strategy: a
            }), o.default.createElement(l.default, {
                id: "nextjs-google-analytics",
                nonce: u
            }, `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${"denied" === s && `gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });`}
            gtag('config', '${d}', {
              page_path: window.location.pathname,
              ${e ? `debug_mode: ${e},` : ""}
            });
          `)) : null
        }
    },
    87270: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.GoogleAnalytics = void 0;
        var n = r(51462);
        Object.defineProperty(t, "GoogleAnalytics", {
            enumerable: !0,
            get: function() {
                return n.GoogleAnalytics
            }
        })
    },
    88816: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.usePageViews = t.usePagesViews = void 0;
        var n = r(47015);
        Object.defineProperty(t, "usePagesViews", {
            enumerable: !0,
            get: function() {
                return n.usePagesViews
            }
        });
        var a = r(69412);
        Object.defineProperty(t, "usePageViews", {
            enumerable: !0,
            get: function() {
                return a.usePageViews
            }
        })
    },
    69412: function(e, t, r) {
        "use strict";
        var n = r(83454);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.usePageViews = void 0;
        let a = r(67294)
          , o = r(11163)
          , l = r(18396);
        t.usePageViews = function({gaMeasurementId: e, ignoreHashChange: t, disabled: r}={}) {
            (0,
            a.useEffect)(()=>{
                if (r)
                    return;
                let a = t=>{
                    var r;
                    let a = null !== (r = n.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && void 0 !== r ? r : e;
                    (0,
                    l.pageView)({
                        path: t.toString()
                    }, a)
                }
                ;
                return o.Router.events.on("routeChangeComplete", a),
                t || o.Router.events.on("hashChangeComplete", a),
                ()=>{
                    o.Router.events.off("routeChangeComplete", a),
                    t || o.Router.events.off("hashChangeComplete", a)
                }
            }
            , [o.Router.events, e, t])
        }
    },
    47015: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.usePagesViews = void 0;
        let n = r(69412);
        t.usePagesViews = function(e) {
            console.warn("Nextjs Google Analytics: The 'usePagesViews' hook is deprecated. Please use 'usePageViews' hook instead. https://github.com/MauricioRobayo/nextjs-google-analytics#readme"),
            (0,
            n.usePageViews)(e)
        }
    },
    44304: function(e, t, r) {
        "use strict";
        t.Wi = void 0;
        var n = r(87270);
        Object.defineProperty(t, "Wi", {
            enumerable: !0,
            get: function() {
                return n.GoogleAnalytics
            }
        }),
        r(88816),
        r(18396)
    },
    65146: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.consent = void 0,
        t.consent = function({arg: e, params: t}) {
            window.gtag && window.gtag("consent", e, t)
        }
    },
    99633: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.event = void 0;
        let n = r(97582);
        t.event = function(e, t={}) {
            var {category: r, label: a, value: o, nonInteraction: l, userId: i} = t
              , s = n.__rest(t, ["category", "label", "value", "nonInteraction", "userId"]);
            if (!window.gtag)
                return;
            let c = Object.assign({}, s);
            void 0 !== r && (c.event_category = r),
            void 0 !== a && (c.event_label = a),
            void 0 !== o && (c.value = o),
            void 0 !== l && (c.non_interaction = l),
            void 0 !== i && (c.user_id = i),
            window.gtag("event", e, c)
        }
    },
    18396: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.consent = t.event = t.pageView = void 0;
        var n = r(83371);
        Object.defineProperty(t, "pageView", {
            enumerable: !0,
            get: function() {
                return n.pageView
            }
        });
        var a = r(99633);
        Object.defineProperty(t, "event", {
            enumerable: !0,
            get: function() {
                return a.event
            }
        });
        var o = r(65146);
        Object.defineProperty(t, "consent", {
            enumerable: !0,
            get: function() {
                return o.consent
            }
        })
    },
    83371: function(e, t, r) {
        "use strict";
        var n = r(83454);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.pageView = void 0,
        t.pageView = function({title: e, location: t, path: r, sendPageView: a, userId: o}={}, l) {
            var i;
            let s = null !== (i = n.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && void 0 !== i ? i : l;
            if (!s || !window.gtag)
                return;
            let c = {};
            void 0 !== e && (c.page_title = e),
            void 0 !== t && (c.page_location = t),
            void 0 !== r && (c.page_path = r),
            void 0 !== a && (c.send_page_view = a),
            void 0 !== o && (c.user_id = o),
            window.gtag("config", s, c)
        }
    },
    93967: function(e, t) {
        var r;
        /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
        !function() {
            "use strict";
            var n = {}.hasOwnProperty;
            function a() {
                for (var e = "", t = 0; t < arguments.length; t++) {
                    var r = arguments[t];
                    r && (e = l(e, o(r)))
                }
                return e
            }
            function o(e) {
                if ("string" == typeof e || "number" == typeof e)
                    return e;
                if ("object" != typeof e)
                    return "";
                if (Array.isArray(e))
                    return a.apply(null, e);
                if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]"))
                    return e.toString();
                var t = "";
                for (var r in e)
                    n.call(e, r) && e[r] && (t = l(t, r));
                return t
            }
            function l(e, t) {
                return t ? e ? e + " " + t : e + t : e
            }
            e.exports ? (a.default = a,
            e.exports = a) : void 0 !== (r = (function() {
                return a
            }
            ).apply(t, [])) && (e.exports = r)
        }()
    },
    14924: function(e, t, r) {
        "use strict";
        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r,
            e
        }
        r.d(t, {
            Z: function() {
                return n
            }
        })
    },
    26042: function(e, t, r) {
        "use strict";
        r.d(t, {
            Z: function() {
                return a
            }
        });
        var n = r(14924);
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {}
                  , a = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))),
                a.forEach(function(t) {
                    (0,
                    n.Z)(e, t, r[t])
                })
            }
            return e
        }
    },
    69396: function(e, t, r) {
        "use strict";
        function n(e, t) {
            return t = null != t ? t : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            }
            )(Object(t)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
            }),
            e
        }
        r.d(t, {
            Z: function() {
                return n
            }
        })
    },
    99534: function(e, t, r) {
        "use strict";
        function n(e, t) {
            if (null == e)
                return {};
            var r, n, a = function(e, t) {
                if (null == e)
                    return {};
                var r, n, a = {}, o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                    r = o[n],
                    t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    r = o[n],
                    !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
            }
            return a
        }
        r.d(t, {
            Z: function() {
                return n
            }
        })
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], function() {
        return t(91118),
        t(90387)
    }),
    _N_E = e.O()
}
]);
