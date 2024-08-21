(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[769], {
    91032: function(e, s, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/explorador", function() {
            return a(86831)
        }
        ])
    },
    28017: function(e, s, a) {
        "use strict";
        var r = a(85893)
          , t = a(93967)
          , n = a.n(t)
          , i = a(38735)
          , c = a(45772)
          , o = function(e) {
            var s = e.label
              , a = e.src
              , t = e.id
              , o = e.classname;
            return e.place,
            (0,
            r.jsxs)("div", {
                className: n()("bg-opacity-30 bg-white rounded-full p-1  max", o),
                children: [(0,
                r.jsx)("a", {
                    "data-for": t,
                    "data-tip": !0,
                    "data-event": "mouseenter",
                    children: (0,
                    r.jsx)("img", {
                        className: "w-4 h-4",
                        src: a,
                        alt: "icon info"
                    })
                }), (0,
                r.jsx)(i.Z, {
                    id: t,
                    eventOff: "mouseleave",
                    arrowColor: "transparent",
                    arrowSize: 0,
                    backgroundColor: "#fff",
                    textColor: "#000",
                    className: "tooltip",
                    clickable: !0,
                    children: (0,
                    r.jsx)(c.D, {
                        linkTarget: "_blank",
                        className: "rc-markdown ",
                        children: s
                    })
                })]
            })
        };
        s.Z = o
    },
    90059: function(e, s, a) {
        "use strict";
        var r = a(85893)
          , t = a(93967)
          , n = a.n(t)
          , i = a(45697)
          , c = a.n(i)
          , o = a(28017)
          , l = function(e) {
            var s = e.slug
              , a = e.title
              , t = e.description
              , i = e.content;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)("div", {
                    className: n()(s ? "bg-banner-".concat(s) : "bg-banner-mas", "bg-cover bg-center h-80 pt-20 lg:pt-20 flex items-center text-white"),
                    children: (0,
                    r.jsxs)("div", {
                        className: "w-4/5 lg:w-2/5 mx-auto text-center space-y-2",
                        children: [(0,
                        r.jsx)("span", {
                            className: "text-4xl lg:text-5xl font-black font-inter",
                            children: a
                        }), void 0 !== i && i && (0,
                        r.jsxs)(r.Fragment, {
                            children: [(0,
                            r.jsx)("div", {
                                className: "border-b-[1px] border-b-white w-4/5 lg:w-2/3 mx-auto"
                            }), (0,
                            r.jsx)("p", {
                                className: "font-lato text-sm",
                                children: t
                            })]
                        })]
                    })
                }), (0,
                r.jsx)("div", {
                    className: "-mt-12 max-w-screen-xl w-9/12 mx-auto flex justify-end",
                    children: (0,
                    r.jsx)(o.Z, {
                        id: "tt-more",
                        src: "/images/camera-icon.svg",
                        label: "More Tooltip"
                    })
                })]
            })
        };
        l.propTypes = {
            title: c().string.isRequired,
            description: c().string,
            content: c().bool,
            background: c().string
        },
        s.Z = l
    },
    86831: function(e, s, a) {
        "use strict";
        a.r(s);
        var r = a(85893)
          , t = a(67294)
          , n = a(90059)
          , i = a(37668)
          , c = a(11163)
          , o = a(80129)
          , l = a.n(o);
        s.default = function() {
            var e = (0,
            c.useRouter)()
              , s = (0,
            t.useState)("")
              , a = s[0]
              , o = s[1]
              , d = (0,
            t.useState)(!0)
              , x = d[0]
              , u = d[1]
              , m = (0,
            t.useContext)(i.AppContext)
              , p = m.setFooterBgColor
              , f = m.setBreadCrumb
              , b = a ? "https://services.datasketch.co/org_sibhumboldt_sibdata_app/?region=".concat(a) : "https://services.datasketch.co/org_sibhumboldt_sibdata_app"
              , g = function() {
                u(!x)
            };
            return (0,
            t.useEffect)(function() {
                p("bg-footer-orange"),
                f([{
                    label: "Explorador"
                }])
            }, []),
            (0,
            t.useEffect)(function() {
                if (e.isReady) {
                    var s = e.query;
                    o(l().stringify(s))
                }
            }, [e.isReady]),
            (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(n.Z, {
                    title: "Explorador",
                    content: !0,
                    description: "Realiza m\xfaltiples cruces de informaci\xf3n y genera gr\xe1ficos para visualizar y analizar el comportamiento de los datos sobre biodiversidad seg\xfan tu inter\xe9s"
                }), (0,
                r.jsxs)("div", {
                    className: "max-w-screen-2xl mx-auto px-6",
                    children: [(0,
                    r.jsx)("div", {
                        className: "pt-8",
                        children: (0,
                        r.jsxs)("p", {
                            className: "flex items-center justify-end space-x-4 text-sm",
                            children: [(0,
                            r.jsx)("span", {
                                className: "bg-blueberry text-white px-3 py-2 rounded-full text-xs font-bold tracking-wider uppercase",
                                children: "Versi\xf3n Beta"
                            }), (0,
                            r.jsx)("a", {
                                href: "https://forms.gle/Wb45MnSCgN6YVsdc6",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "underline",
                                children: "Ay\xfadanos a mejorar la aplicaci\xf3n"
                            })]
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "pt-8 mx-auto",
                        children: [(0,
                        r.jsxs)("div", {
                            onClick: g,
                            className: "flex items-center justify-center mx-auto gap-x-4 border border-black px-3 py-2 rounded-full cursor-pointer w-2/3 md:w-2/5 lg:w-1/4",
                            children: [(0,
                            r.jsx)("p", {
                                children: "C\xf3mo funciona esta herramienta"
                            }), (0,
                            r.jsx)("img", {
                                className: "h-3 w-3 ".concat(x ? "rotate-90" : "-rotate-90", " "),
                                src: "/images/arrow-black.svg",
                                alt: "arrow app"
                            })]
                        }), x && (0,
                        r.jsx)("div", {
                            className: "mt-4 mx-auto max-w-5xl",
                            children: (0,
                            r.jsx)("p", {
                                className: "text-left",
                                children: "En la barra de la izquierda puedes seleccionar diferentes valores para los datos, si los quieres ver por registros o especies o filtrarlos para cada una de las tem\xe1ticas de especies amenazadas, objeto de comercio, etc. En el panel de la derecha puedes ver los resultados como tablas o gr\xe1ficos dependiendo de las opciones que selecciones."
                            })
                        })]
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "py-12",
                    children: (0,
                    r.jsx)("iframe", {
                        className: "h-screen w-full",
                        src: b
                    })
                })]
            })
        }
    },
    24654: function() {}
}, function(e) {
    e.O(0, [443, 129, 774, 888, 179], function() {
        return e(e.s = 91032)
    }),
    _N_E = e.O()
}
]);
