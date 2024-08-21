"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[413], {
    88353: function(e, s, l) {
        l.d(s, {
            Z: function() {
                return c
            }
        });
        var a = l(85893)
          , i = l(93967)
          , t = l.n(i)
          , n = l(85036);
        function c(e) {
            var s, l, i = e.outer, c = e.inner, r = e.style, o = void 0 === r ? "style-1" : r, d = e.movil, x = "style-2" === o ? 28e3 : void 0 !== d && d ? 15e3 : 25e3, m = (0,
            n.Z)().domain([0, i]).range([0, x]);
            return (0,
            a.jsxs)("div", {
                className: "relative",
                style: "style-2" === o ? {
                    width: "".concat(Math.sqrt(x), "px"),
                    height: "".concat(Math.sqrt(x), "px"),
                    borderRadius: "50%",
                    border: "1px solid black",
                    position: "relative",
                    backgroundColor: "#FFE0BB"
                } : {
                    width: "".concat(Math.sqrt(x), "px"),
                    height: "".concat(Math.sqrt(x), "px"),
                    borderRadius: "50%",
                    border: "1px solid white",
                    position: "relative"
                },
                children: [(0,
                a.jsx)("img", {
                    className: t()("absolute", "style-2" === o ? "top-1/2 left-[78px] h-28" : " -top-[5.5%] left-1/2"),
                    src: "style-2" === o ? "/images/outer-arrow-black.svg" : "/images/external-arrow.svg"
                }), (0,
                a.jsx)("img", {
                    className: t()("absolute", "style-2" === o ? "top-1/2 -left-1.5" : " top-[45%] left-1/2"),
                    src: "style-2" === o ? "/images/inner-arrow-black.svg" : "/images/external-arrow.svg"
                }), (0,
                a.jsx)("div", {
                    style: "style-2" === o ? {
                        width: "".concat(Math.sqrt(m(c)), "px"),
                        height: "".concat(Math.sqrt(m(c)), "px"),
                        borderRadius: "50%",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#5151F2"
                    } : {
                        width: "".concat(Math.sqrt(m(c)), "px"),
                        height: "".concat(Math.sqrt(m(c)), "px"),
                        borderRadius: "50%",
                        border: "1px solid white",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        backgroundColor: "#C2F284"
                    }
                })]
            })
        }
    },
    1505: function(e, s, l) {
        l.d(s, {
            Z: function() {
                return eu
            }
        });
        var a, i, t, n = l(26042), c = l(69396), r = l(85893), o = l(21365), d = l(33841), x = l(86770), m = l(44355), u = l(67294), g = l(53158), p = l(45697), v = l.n(p), h = l(68966), b = JSON.parse('[{"slug":"amenazadas"},{"slug":"amenazadas-global","tooltip":"UICN (Uni\xf3n Internacional para la Conservaci\xf3n de la Naturaleza)"},{"slug":"amenazadas-nacional","tooltip":"Ministerio de Ambiente y Desarrollo Sostenible, resoluci\xf3n 1912 de 2017"},{"slug":"cites","tooltip":"Convenci\xf3n sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres"},{"slug":"amenazadas-global-ex","tooltip":"Extinto"},{"slug":"amenazadas-global-ew","tooltip":"Extinto en estado silvestre"},{"slug":"amenazadas-global-cr","tooltip":"En peligro cr\xedtico"},{"slug":"amenazadas-global-en","tooltip":"En peligro"},{"slug":"amenazadas-global-vu","tooltip":"Vulnerable"},{"slug":"amenazadas-global-lr-cd","tooltip":"Menor riesgo / dependiente de medidas de conservaci\xf3n"},{"slug":"amenazadas-global-nt","tooltip":"Casi amenazado"},{"slug":"amenazadas-global-lr-nt","tooltip":"Casi amenazado"},{"slug":"amenazadas-global-lc","tooltip":"Preocupaci\xf3n menor"},{"slug":"amenazadas-global-lr-lc","tooltip":"Preocupaci\xf3n menor"},{"slug":"amenazadas-global-dd","tooltip":"Datos insuficientes"},{"slug":"amenazadas-global-ne","tooltip":"No evaluado"},{"slug":"cites-i"},{"slug":"cites-ii"},{"slug":"cites-iii"},{"slug":"cites-i-ii"},{"slug":"endemicas"},{"slug":"exoticas-invasoras"},{"slug":"migratorias","tooltip":"Tem\xe1tica aplicada solo a aves"},{"slug":"exoticas","tooltip":"Ex\xf3ticas GRIIS (Registro mundial de especies introducidas e invasoras)"},{"slug":"amenazadas-nacional-cr","tooltip":"En peligro cr\xedtico"},{"slug":"amenazadas-nacional-en","tooltip":"En peligro"},{"slug":"amenazadas-nacional-vu","tooltip":"Vulnerable"},{"slug":"invasoras","tooltip":"Invasoras (resoluci\xf3n 848 de 2008 del Ministerio de Ambiente y Desarrollo Sostenible)"},{"slug":"exotica-riesgo-invasion","tooltip":"Invasoras GRIIS (Registro mundial de especies introducidas e invasoras)"},{"slug":"erraticas","tooltip":"Aplica solo para aves."},{"slug":"residente","tooltip":"Aplica solo para aves."}]'), f = l(14924), j = l(99534), _ = l(90948), N = l(48999), w = l(23926), y = function(e) {
            var s = e.title
              , l = e.children
              , a = e.placement
              , i = (0,
            u.useState)(!1)
              , t = i[0]
              , o = i[1]
              , d = function() {
                o(!1)
            }
              , x = function() {
                o(!0)
            }
              , m = (0,
            _.ZP)(function(e) {
                var s = e.className
                  , l = (0,
                j.Z)(e, ["className"]);
                return (0,
                r.jsx)(g.Z, (0,
                c.Z)((0,
                n.Z)({}, l), {
                    classes: {
                        popper: s
                    }
                }))
            })(function(e) {
                var s = e.theme;
                return (0,
                f.Z)({}, "& .".concat(N.Z.tooltip), {
                    backgroundColor: s.palette.common.white,
                    color: "rgba(0, 0, 0, 0.87)",
                    boxShadow: s.shadows[1],
                    width: "500px"
                })
            });
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)(w.d, {
                    onClickAway: d,
                    children: (0,
                    r.jsx)("div", {
                        className: "inline-block",
                        children: (0,
                        r.jsx)(m, {
                            PopperProps: {
                                disablePortal: !0
                            },
                            onClose: d,
                            open: t,
                            disableFocusListener: !0,
                            disableHoverListener: !0,
                            disableTouchListener: !0,
                            title: s,
                            placement: a || "right-start",
                            classes: {
                                maxHeight: "650px",
                                maxWidth: "650px",
                                overflowY: "scroll",
                                backgroundColor: " #fff"
                            },
                            children: (0,
                            r.jsx)("button", {
                                className: "inline-block",
                                onClick: x,
                                children: l
                            })
                        })
                    })
                })
            })
        }, k = l(10797), C = l(93967), z = l.n(C), E = function(e) {
            var s = e.tabledata
              , l = (e.general,
            e.link)
              , a = e.overflow
              , i = null == s ? void 0 : s.reduce(function(e, s) {
                var l = s.label
                  , a = s.registros
                  , i = s.url_cbc
                  , t = s.url_gbif;
                return (0,
                k.Z)(e).concat([{
                    label: l,
                    registros: a,
                    cbc: i,
                    gbif: t
                }])
            }, []);
            return (null == i ? void 0 : i.length) !== 0 ? (0,
            r.jsxs)("div", {
                className: "flex flex-col gap-y-1.5 max-w-xl",
                children: [(0,
                r.jsx)("div", {
                    className: z()(void 0 !== a && a ? "" : "h-auto w-full"),
                    children: (0,
                    r.jsxs)("table", {
                        className: "bg-white border w-full",
                        children: [(0,
                        r.jsx)("thead", {
                            children: (0,
                            r.jsxs)("tr", {
                                className: "bg-dartmouth-green text-white",
                                children: [(0,
                                r.jsx)("th", {
                                    className: "font-inter text-xs ",
                                    children: "Nombre de la especie"
                                }), (0,
                                r.jsx)("th", {
                                    className: "font-inter text-xs ",
                                    children: "N\xfamero de observaciones"
                                }), (0,
                                r.jsx)("th", {
                                    className: "font-inter text-xs ",
                                    children: "Perfil Especies"
                                })]
                            })
                        }), (0,
                        r.jsx)("tbody", {
                            className: "text-black text-center",
                            children: null == i ? void 0 : i.slice(0, 10).map(function(e, s) {
                                var l = e.label
                                  , a = e.registros
                                  , i = e.cbc
                                  , t = e.gbif;
                                return (0,
                                r.jsxs)("tr", {
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "pl text-xs font-lato italic text-center",
                                        children: l
                                    }), (0,
                                    r.jsx)("td", {
                                        className: "pl text-xs flex gap-2 justify-center items-center h-full p-2",
                                        children: (0,
                                        h._H)(a)
                                    }), (0,
                                    r.jsxs)("td", {
                                        className: "space-x-2",
                                        children: ["" !== i && void 0 !== i && (0,
                                        r.jsx)("a", {
                                            href: i,
                                            target: "_blank",
                                            className: "font-inter underline text-azure text-xs",
                                            rel: "noreferrer",
                                            children: "CBC"
                                        }), "" !== t && void 0 !== t && (0,
                                        r.jsx)("a", {
                                            href: t,
                                            target: "_blank",
                                            className: "font-inter underline text-azure text-xs",
                                            rel: "noreferrer",
                                            children: "GBIF"
                                        })]
                                    })]
                                }, s)
                            })
                        })]
                    })
                }), l && (0,
                r.jsx)("a", {
                    target: "_blank",
                    href: "/explorador?" + l,
                    className: "font-bold flex justify-center",
                    rel: "noreferrer",
                    children: "Explora lista completa "
                })]
            }) : (0,
            r.jsx)("div", {})
        }, Z = l(45772), S = function(e) {
            var s = e.cat
              , l = e.label
              , a = e.region
              , i = e.regionparent
              , t = e.title
              , n = e.datatable
              , c = void 0 === n ? [] : n
              , o = e.especies
              , d = e.registros
              , x = e.parentEspecies
              , m = e.speciesEstimadasCol
              , u = e.bgColor
              , g = e.textColor
              , p = e.link
              , v = e.municipalityflag
              , b = e.colObservadas
              , f = e.especiesObservadas
              , j = l ? "observadas ".concat(l, " (").concat(t, ")") : "".concat(t, " observadas")
              , _ = (0,
            h.Kf)(+o, v ? +d : +x)
              , N = (0,
            h.Kf)(v ? +d : +x - +o, v ? +d : +x)
              , w = (0,
            h.Kf)(+o, +x)
              , k = (0,
            h.Kf)(+x, +x)
              , C = (0,
            h.Kf)(+x - +b, +m)
              , Z = (0,
            h.kC)(i);
            return (0,
            r.jsxs)("div", {
                children: [(0,
                r.jsx)("div", {
                    className: "font-bold font-inter text-lg ",
                    children: (0,
                    r.jsxs)("div", {
                        children: [(0,
                        r.jsxs)("p", {
                            children: [(0,
                            h._H)(o), " Especies ", j, (null == c ? void 0 : c.length) !== 0 && (0,
                            r.jsx)(y, {
                                placement: "left",
                                title: (0,
                                r.jsx)(E, {
                                    tabledata: c,
                                    link: p
                                }),
                                children: (0,
                                r.jsx)("img", {
                                    className: "inline-block pl-0.5",
                                    src: "/images/icons/icon-table.svg"
                                })
                            })]
                        }), "amenazadas" === (void 0 === s ? "" : s) && (0,
                        r.jsxs)("p", {
                            className: "inline-flex -mt-3 text-black-3 text-sm",
                            children: [x, " Especies estimadas  ", l, " (", t, ") ", "Colombia" !== a ? i || "Colombia" : ""]
                        })]
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "text-dartmouth-green font-inter",
                    children: [(0,
                    h._H)(d), " ", (0,
                    r.jsx)("span", {
                        className: "font-lato",
                        children: " Observaciones"
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "",
                    children: ["colombia" === a.toLowerCase() ? (0,
                    r.jsxs)("p", {
                        className: "font-bold text-sm",
                        children: [(0,
                        r.jsx)("span", {
                            children: "Especies observadas CO |"
                        }), " ", (0,
                        r.jsxs)("span", {
                            className: "text-black-3",
                            children: ["Especies estimadas CO (", x, ")"]
                        })]
                    }) : (0,
                    r.jsxs)("p", {
                        className: "font-bold text-sm",
                        children: [(0,
                        r.jsxs)("span", {
                            children: ["Especies observadas ", a, " |"]
                        }), " ", v && ["La Planada", "Pialap\xed Pueblo-Viejo"].includes(a) ? (0,
                        r.jsxs)("span", {
                            className: "text-black-3",
                            children: ["Especies totales observadas ", Z, " (", f, ")"]
                        }) : (0,
                        r.jsxs)("span", {
                            className: "text-black-3",
                            children: ["Especies observadas Colombia(", x, ") | Especies estimadas Colombia(", m, ") "]
                        })]
                    }), "Colombia" === a || v ? (0,
                    r.jsxs)("div", {
                        className: "flex",
                        children: [(0,
                        r.jsx)("div", {
                            className: z()(u, g, void 0 === _ ? "" : "px-1 min-w-[3.5%]", "text-xs h-4"),
                            style: {
                                width: _ || "0%"
                            },
                            children: o
                        }), ["La Planada", "Pialap\xed Pueblo-Viejo"].includes(a) ? (0,
                        r.jsx)("div", {
                            className: z()("bg-white-smoke", "text-xs pr-1 h-4 text-end"),
                            style: {
                                width: N || "100%"
                            },
                            children: f
                        }) : (0,
                        r.jsx)("div", {
                            className: z()("bg-white-smoke", "text-xs pr-1 h-4 text-end"),
                            style: {
                                width: N || "100%"
                            },
                            children: "NA" === x ? "" : x
                        })]
                    }) : (0,
                    r.jsxs)("div", {
                        className: "flex",
                        children: [(0,
                        r.jsx)("div", {
                            className: z()(u, g, "text-xs pl-px h-4 min-w-[3.5%]"),
                            style: {
                                width: w
                            },
                            children: o
                        }), (0,
                        r.jsx)("div", {
                            className: z()(u, "bg-opacity-30 text-end pr-1 text-xs  h-4"),
                            style: {
                                width: k
                            },
                            children: x
                        }), (0,
                        r.jsx)("div", {
                            className: z()("bg-white-smoke text-end", "text-xs pl-px h-4"),
                            style: {
                                width: C
                            },
                            children: m
                        })]
                    })]
                })]
            })
        }, I = function(e) {
            var s = e.selected
              , l = e.region
              , a = e.datatable
              , i = e.especies
              , t = e.parentEspecies
              , n = e.registros
              , c = e.link
              , o = e.municipalityflag
              , d = e.regionparent
              , x = e.especiesObservadas
              , m = (0,
            h.kC)(d);
            return (0,
            r.jsxs)("div", {
                className: "flex flex-col justify-between h-full min-h-[300px] max-h-[430px] ",
                children: [(0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsxs)("div", {
                        className: "text-6xl font-black font-inter",
                        children: [(0,
                        h._H)(i), (0,
                        r.jsx)("div", {
                            className: "border-t border-t-dartmouth-green w-1/2"
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "font-black font-inter text-lg",
                        children: ["Especies ", s, " observadas", a && (null == a ? void 0 : a.length) !== 0 && (0,
                        r.jsx)(y, {
                            placement: "left",
                            title: (0,
                            r.jsx)(E, {
                                tabledata: a,
                                link: c
                            }),
                            children: (0,
                            r.jsx)("img", {
                                className: "inline-block ",
                                src: "/images/icons/icon-table.svg"
                            })
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "flex text-sm gap-x-2 text-blue-green",
                        children: [(0,
                        r.jsx)("p", {
                            className: "inline-block font-inter",
                            children: (0,
                            r.jsx)("b", {
                                children: (0,
                                h._H)(n)
                            })
                        }), (0,
                        r.jsx)("p", {
                            className: "inline-block font-lato ",
                            children: "Observaciones"
                        })]
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "",
                    children: "colombia" === l.toLowerCase() ? (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsx)("span", {
                            className: "font-bold text-sm",
                            children: "Especies observadas CO | Especies estimadas CO"
                        }), (0,
                        r.jsxs)("div", {
                            className: "flex",
                            children: [(0,
                            r.jsx)("div", {
                                className: "bg-orange-en h-4 flex justify-end items-center text-sm",
                                style: {
                                    width: (0,
                                    h.Kf)(+i, +i + +t)
                                },
                                children: i
                            }), (0,
                            r.jsx)("div", {
                                className: "bg-white-smoke h-4 flex justify-end items-center text-sm",
                                style: {
                                    width: (0,
                                    h.Kf)(+t, +i + +t)
                                },
                                children: t
                            })]
                        })]
                    }) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [(0,
                        r.jsxs)("span", {
                            className: "font-bold text-sm",
                            children: ["Especies ", l, " | ", o ? "Especies ".concat(m) : "Especies Colombia"]
                        }), (0,
                        r.jsxs)("div", {
                            className: "flex",
                            children: [(0,
                            r.jsx)("div", {
                                className: "bg-sandstorm h-4 flex justify-end items-center text-sm",
                                style: {
                                    width: (0,
                                    h.Kf)(+i, +i + +t)
                                },
                                children: i
                            }), ["La Planada", "Pialap\xed Pueblo-Viejo"].includes(l) ? (0,
                            r.jsx)("div", {
                                className: "bg-white-smoke h-4 flex justify-end items-center text-sm",
                                style: {
                                    width: (0,
                                    h.Kf)(+x, +i + +x)
                                },
                                children: x
                            }) : (0,
                            r.jsx)("div", {
                                className: "bg-white-smoke h-4 flex justify-end items-center text-sm",
                                style: {
                                    width: (0,
                                    h.Kf)(+t, +i + +t)
                                },
                                children: t
                            })]
                        })]
                    })
                })]
            }, s)
        }, H = function(e) {
            var s = e.backgroundColor
              , l = e.label;
            return (0,
            r.jsxs)("div", {
                className: "flex flex-row gap-1 items-center",
                children: [(0,
                r.jsx)("div", {
                    className: "rounded-full w-3 h-3 ".concat(s)
                }), (0,
                r.jsx)("b", {
                    children: l
                })]
            })
        }, O = function(e) {
            var s = e.info
              , l = e.selected
              , a = e.updateBreadcrumb
              , i = e.region
              , t = e.municipalityflag
              , n = e.slugregion
              , c = e.parentlabel
              , o = e.especiesObservadas
              , d = function(e) {
                var s;
                return null === (s = b.filter(function(s) {
                    return s.slug === e
                })[0]) || void 0 === s ? void 0 : s.tooltip
            };
            if ("amenazadas" === l.toLowerCase())
                return (0,
                r.jsx)("div", {
                    className: "py-10 bg-white",
                    children: (0,
                    r.jsx)("div", {
                        className: "grid lg:grid-cols-2 gap-y-6 gap-x-36 w-10/12 mx-auto",
                        children: null == s ? void 0 : s.children.map(function(e, s) {
                            e.label;
                            var i = e.slug
                              , t = e.especies
                              , c = e.species_list
                              , o = e.registros
                              , x = e.cr
                              , m = e.en
                              , u = e.vu
                              , p = (0,
                            h.kC)(i.replace("amenazadas-", ""))
                              , v = (0,
                            h.SC)(x)
                              , b = (0,
                            h.SC)(m)
                              , f = (0,
                            h.SC)(u)
                              , j = v + b + f;
                            return (0,
                            r.jsxs)("div", {
                                className: "shadow-md flex flex-col justify-center gap-6 py-12 px-8",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-start justify-start",
                                    children: [(0,
                                    r.jsxs)("span", {
                                        children: ["Categor\xeda UICN ", p]
                                    }), (0,
                                    r.jsxs)("span", {
                                        className: "text-6xl font-black font-inter",
                                        children: [(0,
                                        h._H)(t), (0,
                                        r.jsx)("div", {
                                            className: "border-t border-t-dartmouth-green"
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "font-black font-inter text-lg",
                                        children: ["Especies  amenazadas", (null == c ? void 0 : c.length) !== 0 && (0,
                                        r.jsx)(y, {
                                            placement: "left",
                                            title: (0,
                                            r.jsx)(E, {
                                                tabledata: c,
                                                link: "region=".concat(n, "&tematica=").concat(i.replace("-", "_"))
                                            }),
                                            children: (0,
                                            r.jsx)("img", {
                                                className: "inline-block pl-2",
                                                src: "/images/icons/icon-table.svg"
                                            })
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col justify-center h-full w-full",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "font-lato flex justify-evenly gap-x-4",
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: "flex flex-col items-center",
                                            children: [(0,
                                            r.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [(0,
                                                r.jsx)(H, {
                                                    backgroundColor: "bg-red-cr",
                                                    label: "CR"
                                                }), (0,
                                                r.jsx)(g.Z, {
                                                    title: (0,
                                                    r.jsx)("b", {
                                                        children: d("amenazadas-global-cr")
                                                    }),
                                                    children: (0,
                                                    r.jsx)("img", {
                                                        src: "/images/icon-more.svg"
                                                    })
                                                })]
                                            }), (0,
                                            r.jsx)("span", {
                                                children: (0,
                                                h._H)(x)
                                            })]
                                        }), (0,
                                        r.jsxs)("div", {
                                            className: "flex flex-col items-center",
                                            children: [(0,
                                            r.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [(0,
                                                r.jsx)(H, {
                                                    backgroundColor: "bg-orange-en",
                                                    label: "EN"
                                                }), (0,
                                                r.jsx)(g.Z, {
                                                    title: (0,
                                                    r.jsx)("b", {
                                                        children: d("amenazadas-global-en")
                                                    }),
                                                    children: (0,
                                                    r.jsx)("img", {
                                                        src: "/images/icon-more.svg"
                                                    })
                                                })]
                                            }), (0,
                                            r.jsx)("span", {
                                                children: (0,
                                                h._H)(m)
                                            })]
                                        }), (0,
                                        r.jsxs)("div", {
                                            className: "flex flex-col items-center",
                                            children: [(0,
                                            r.jsxs)("div", {
                                                className: "flex items-start",
                                                children: [(0,
                                                r.jsx)(H, {
                                                    backgroundColor: "bg-yellow-vu",
                                                    label: "VU"
                                                }), (0,
                                                r.jsx)(g.Z, {
                                                    title: (0,
                                                    r.jsx)("b", {
                                                        children: d("amenazadas-global-vu")
                                                    }),
                                                    children: (0,
                                                    r.jsx)("img", {
                                                        src: "/images/icon-more.svg"
                                                    })
                                                })]
                                            }), (0,
                                            r.jsx)("span", {
                                                children: (0,
                                                h._H)(u)
                                            })]
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "bg-red-cr h-4 ",
                                            style: {
                                                width: (0,
                                                h.Kf)(v, j)
                                            }
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "bg-orange-en h-4 ",
                                            style: {
                                                width: (0,
                                                h.Kf)(b, j)
                                            }
                                        }), (0,
                                        r.jsx)("div", {
                                            className: "bg-yellow-vu h-4 ",
                                            style: {
                                                width: (0,
                                                h.Kf)(f, j)
                                            }
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex text-sm gap-x-2 text-blue-green pt-2.5",
                                        children: [(0,
                                        r.jsx)("p", {
                                            className: "inline-block ",
                                            children: (0,
                                            r.jsx)("b", {
                                                children: (0,
                                                h._H)(o)
                                            })
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "inline-block",
                                            children: "Observaciones"
                                        })]
                                    })]
                                }), (0,
                                r.jsx)("div", {
                                    className: "flex flex-col pt-5 gap-y-10",
                                    children: (0,
                                    r.jsxs)("button", {
                                        type: "button",
                                        className: "flex gap-3 justify-center items-center py-1 border border-black rounded-full w-1/2 lg:w-4/12 self-end",
                                        value: i,
                                        onClick: function(e) {
                                            return a(e, l)
                                        },
                                        children: ["Ver m\xe1s", (0,
                                        r.jsx)("img", {
                                            src: "/images/arrow-black.svg",
                                            alt: "arrow button"
                                        })]
                                    })
                                })]
                            }, s)
                        })
                    })
                });
            if ("cites" === l.toLowerCase()) {
                var x, m, u = (0,
                h.SC)(null == s ? void 0 : s.especies_cites_i), p = (0,
                h.SC)(null == s ? void 0 : s.especies_cites_ii), v = (0,
                h.SC)(null == s ? void 0 : s.especies_cites_iii), f = u + p + v;
                return (0,
                r.jsx)("div", {
                    className: "bg-white py-10",
                    children: (0,
                    r.jsxs)("div", {
                        className: "w-10/12 mx-auto flex flex-col lg:flex-row gap-y-6 justify-between",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "shadow-md lg:w-2/5 mx-auto flex flex-col justify-center gap-6 py-12 px-8",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "flex flex-col items-start justify-start",
                                children: [(0,
                                r.jsxs)("span", {
                                    className: "text-6xl font-black font-inter",
                                    children: [(0,
                                    h._H)(null == s ? void 0 : s.especies_cites_total), (0,
                                    r.jsx)("div", {
                                        className: "border-t border-t-dartmouth-green"
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "font-black font-inter text-lg",
                                    children: ["Especies ", l, " observadas", (null === (m = s.species_list) || void 0 === m ? void 0 : m.length) && (0,
                                    r.jsx)(y, {
                                        placement: "left",
                                        title: (0,
                                        r.jsx)(E, {
                                            tabledata: s.species_list,
                                            link: "region=".concat(n, "&tematica=").concat(null == s ? void 0 : s.slug)
                                        }),
                                        children: (0,
                                        r.jsx)("img", {
                                            className: "inline-block pl-2",
                                            src: "/images/icons/icon-table.svg"
                                        })
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex text-sm gap-x-2 text-blue-green",
                                    children: [(0,
                                    r.jsx)("p", {
                                        className: "inline-block ",
                                        children: (0,
                                        r.jsx)("b", {
                                            children: (0,
                                            h._H)(null == s ? void 0 : s.registros_cites_total)
                                        })
                                    }), (0,
                                    r.jsx)("p", {
                                        className: "inline-block",
                                        children: "Observaciones"
                                    })]
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex flex-col justify-center h-full w-full",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "font-lato flex justify-evenly gap-x-4",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col items-center",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "flex items-start",
                                            children: (0,
                                            r.jsx)(H, {
                                                backgroundColor: "bg-cerulean",
                                                label: "I"
                                            })
                                        }), (0,
                                        r.jsx)("span", {
                                            children: (0,
                                            h._H)(null == s ? void 0 : s.especies_cites_i)
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col items-center",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "flex items-start",
                                            children: (0,
                                            r.jsx)(H, {
                                                backgroundColor: "bg-sandstorm",
                                                label: "II"
                                            })
                                        }), (0,
                                        r.jsx)("span", {
                                            children: (0,
                                            h._H)(null == s ? void 0 : s.especies_cites_ii)
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col items-center",
                                        children: [(0,
                                        r.jsx)("div", {
                                            className: "flex items-start",
                                            children: (0,
                                            r.jsx)(H, {
                                                backgroundColor: "bg-greenish-cyan",
                                                label: "III"
                                            })
                                        }), (0,
                                        r.jsx)("span", {
                                            children: (0,
                                            h._H)(null == s ? void 0 : s.especies_cites_iii)
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "bg-cerulean h-4",
                                        style: {
                                            width: (0,
                                            h.Kf)(u, f)
                                        }
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "bg-sandstorm h-4",
                                        style: {
                                            width: (0,
                                            h.Kf)(p, f)
                                        }
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "bg-greenish-cyan h-4",
                                        style: {
                                            width: (0,
                                            h.Kf)(v, f)
                                        }
                                    })]
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "lg:w-[45%] flex flex-col justify-evenly gap-y-3 ",
                            children: [(0,
                            r.jsx)(S, {
                                bgColor: "bg-cerulean",
                                textColor: "text-white",
                                region: i,
                                title: "CITES I",
                                datatable: null == s ? void 0 : s.list_especies_cites_i,
                                especies: null == s ? void 0 : s.especies_cites_i,
                                parentEspecies: null == s ? void 0 : s.parent_especies_cites_i,
                                speciesEstimadasCol: null == s ? void 0 : s.cites_i_estimadas,
                                registros: null == s ? void 0 : s.registros_cites_i,
                                link: "region=".concat(n, "&tematica=").concat(null == s ? void 0 : s.slug, "_i"),
                                municipalityflag: t,
                                regionparent: c,
                                especiesObservadas: o
                            }), (0,
                            r.jsx)(S, {
                                bgColor: "bg-sandstorm",
                                textColor: "text-white",
                                region: i,
                                title: "CITES II",
                                datatable: null == s ? void 0 : s.list_especies_cites_ii,
                                especies: null == s ? void 0 : s.especies_cites_ii,
                                parentEspecies: null == s ? void 0 : s.parent_especies_cites_ii,
                                speciesEstimadasCol: null == s ? void 0 : s.cites_ii_estimadas,
                                registros: null == s ? void 0 : s.registros_cites_ii,
                                link: "region=".concat(n, "&tematica=").concat(null == s ? void 0 : s.slug, "_ii"),
                                municipalityflag: t,
                                regionparent: c,
                                especiesObservadas: o
                            }), (0,
                            r.jsx)(S, {
                                bgColor: "bg-greenish-cyan",
                                textColor: "text-white",
                                region: i,
                                title: "CITES III",
                                datatable: null == s ? void 0 : s.list_especies_cites_iii,
                                especies: null == s ? void 0 : s.especies_cites_iii,
                                parentEspecies: null == s ? void 0 : s.parent_especies_cites_iii,
                                speciesEstimadasCol: null == s ? void 0 : s.cites_iii_estimadas,
                                registros: null == s ? void 0 : s.registros_cites_iii,
                                link: "region=".concat(n, "&tematica=").concat(null == s ? void 0 : s.slug, "_iii"),
                                municipalityflag: t,
                                regionparent: c,
                                especiesObservadas: o
                            })]
                        })]
                    })
                })
            }
            if ("migratorias" === l.toLowerCase())
                return (0,
                r.jsx)("div", {
                    className: "bg-white py-10",
                    children: (0,
                    r.jsxs)("div", {
                        className: "w-10/12 mx-auto flex flex-col lg:flex-row gap-y-6 justify-between",
                        children: [(0,
                        r.jsx)("div", {
                            className: "lg:w-[45%] shadow-hard flex flex-col py-12 px-8",
                            children: (0,
                            r.jsx)(I, {
                                selected: l,
                                region: i,
                                especies: null == s ? void 0 : s.especies_migratorias,
                                parentEspecies: null == s ? void 0 : s.parent_especies_migratorias,
                                registros: null == s ? void 0 : s.registros_migratorias,
                                datatable: null == s ? void 0 : s.species_list,
                                link: "region=".concat(n, "&tematica=").concat(null == s ? void 0 : s.slug),
                                municipalityflag: t,
                                regionparent: c,
                                especiesObservadas: o
                            })
                        }), (0,
                        r.jsx)("div", {
                            className: "lg:w-2/5 flex items-center",
                            children: (0,
                            r.jsx)(Z.D, {
                                className: "rc-markdown font-lato",
                                children: null == s ? void 0 : s.texto
                            })
                        })]
                    })
                });
            if ("end\xe9micas" === l.toLowerCase())
                return (0,
                r.jsx)("div", {
                    className: "bg-white py-10",
                    children: (0,
                    r.jsxs)("div", {
                        className: "w-10/12 mx-auto flex flex-col gap-6 md:flex-row justify-between",
                        children: [(0,
                        r.jsx)("div", {
                            className: "lg:w-1/2 shadow-hard py-12 px-8 max-w-[450px]",
                            children: (0,
                            r.jsx)(I, {
                                selected: l,
                                region: i,
                                especies: null == s ? void 0 : s.especies_endemicas,
                                parentEspecies: null == s ? void 0 : s.parent_especies_endemicas,
                                registros: null == s ? void 0 : s.registros_endemicas,
                                datatable: null == s ? void 0 : s.species_list,
                                link: "region=".concat(n, "&tematica=").concat(null == s ? void 0 : s.slug),
                                municipalityflag: t,
                                regionparent: c,
                                especiesObservadas: o
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: "md:w-[45%] flex flex-col justify-evenly gap-y-3 mx-auto",
                            children: [(0,
                            r.jsx)(E, {
                                tabledata: null == s ? void 0 : s.species_list
                            }), (0,
                            r.jsx)("div", {
                                className: "flex flex-col pt-5 gap-y-10",
                                children: (0,
                                r.jsxs)("button", {
                                    type: "button",
                                    className: "flex gap-3 justify-center items-center py-1 border border-black rounded-full w-1/2 lg:w-[42%] self-end",
                                    children: [(0,
                                    r.jsx)("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "/explorador?region=".concat(n, "&tematica=").concat(null == s ? void 0 : s.slug),
                                        children: "Explora lista completa"
                                    }), (0,
                                    r.jsx)("img", {
                                        src: "/images/arrow-black.svg",
                                        alt: "arrow button"
                                    })]
                                })
                            })]
                        })]
                    })
                });
            if ("ex\xf3ticas" === l.toLowerCase())
                return (0,
                r.jsx)("div", {
                    className: "bg-white py-10",
                    children: (0,
                    r.jsxs)("div", {
                        className: "w-10/12 mx-auto flex flex-col lg:flex-row gap-y-6 justify-between",
                        children: [(0,
                        r.jsx)("div", {
                            className: "lg:w-2/5 shadow-hard py-12 px-8",
                            children: (0,
                            r.jsx)(I, {
                                selected: l,
                                region: i,
                                especies: null == s ? void 0 : s.especies_exoticas_total,
                                parentEspecies: null == s ? void 0 : s.parent_especies_exoticas_total,
                                registros: null == s ? void 0 : s.registros_exoticas_total,
                                datatable: null == s ? void 0 : s.list_especies_exoticas_total,
                                link: "region=".concat(n, "&tematica=list_especies_exoticas_total"),
                                municipalityflag: t,
                                regionparent: c,
                                especiesObservadas: o
                            })
                        }), (0,
                        r.jsxs)("div", {
                            className: "lg:w-[45%] flex flex-col justify-evenly gap-y-3 ",
                            children: [(0,
                            r.jsx)(S, {
                                bgColor: "bg-sandstorm",
                                region: i,
                                title: "Ex\xf3ticas",
                                datatable: null == s ? void 0 : s.list_especies_exoticas,
                                especies: null == s ? void 0 : s.especies_exoticas,
                                parentEspecies: null == s ? void 0 : s.parent_especies_exoticas,
                                registros: null == s ? void 0 : s.registros_exoticas,
                                speciesEstimadasCol: null == s ? void 0 : s.exoticas_estimadas,
                                link: "region=".concat(n, "&tematica=exoticas"),
                                municipalityflag: t,
                                regionparent: c,
                                especiesObservadas: o
                            }), (0,
                            r.jsx)(S, {
                                bgColor: "bg-sandstorm",
                                region: i,
                                title: "Ex\xf3ticas con potencial de invasi\xf3n",
                                datatable: null == s ? void 0 : s.list_especies_exoticas_riesgo_invasion,
                                especies: null == s ? void 0 : s.especies_exoticas_riesgo_invasion,
                                parentEspecies: null == s ? void 0 : s.parent_especies_exoticas_riesgo_invasion,
                                registros: null == s ? void 0 : s.registros_exoticas_riesgo_invasion,
                                speciesEstimadasCol: null == s ? void 0 : s.exoticas_riesgo_invasion_estimadas,
                                link: "region=".concat(n, "&tematica=exoticas-riesgo-invasion"),
                                municipalityflag: t,
                                regionparent: c,
                                especiesObservadas: o
                            }), (0,
                            r.jsx)(S, {
                                bgColor: "bg-sandstorm",
                                region: i,
                                title: "Invasoras",
                                datatable: null == s ? void 0 : s.list_especies_invasoras,
                                especies: null == s ? void 0 : s.especies_invasoras,
                                parentEspecies: null == s ? void 0 : s.parent_especies_invasoras,
                                registros: null == s ? void 0 : s.registros_invasoras,
                                speciesEstimadasCol: null == s ? void 0 : s.exoticas_invasoras_estimadas,
                                link: "region=".concat(n, "&tematica=invasoras"),
                                municipalityflag: t,
                                regionparent: c,
                                especiesObservadas: o
                            })]
                        })]
                    })
                });
            var j = (0,
            h.SC)(null == s ? void 0 : s.cr_registros)
              , _ = (0,
            h.SC)(null == s ? void 0 : s.en_registros)
              , N = (0,
            h.SC)(null == s ? void 0 : s.vu_registros)
              , w = j + _ + N;
            return (0,
            r.jsx)("div", {
                className: "bg-white py-10",
                children: (0,
                r.jsxs)("div", {
                    className: "w-10/12 mx-auto flex flex-col md:flex-row gap-6 justify-between",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "max-w-[45%] w-full shadow-md flex flex-col justify-center gap-6 py-12 px-8",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex flex-col items-start justify-start",
                            children: [(0,
                            r.jsxs)("span", {
                                children: ["Categor\xeda UICN ", (0,
                                h.kC)(null == s ? void 0 : s.slug.replace("amenazadas-", ""))]
                            }), (0,
                            r.jsxs)("span", {
                                className: "text-6xl font-black font-inter",
                                children: [(0,
                                h._H)(null == s ? void 0 : s.especies), (0,
                                r.jsx)("div", {
                                    className: "border-t border-t-dartmouth-green"
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "font-black font-inter text-lg",
                                children: ["Especies amenazadas", (null == s ? void 0 : null === (x = s.species_list) || void 0 === x ? void 0 : x.length) !== 0 && (0,
                                r.jsx)(y, {
                                    placement: "left",
                                    title: (0,
                                    r.jsx)(E, {
                                        tabledata: (null == s ? void 0 : s.slug) === "amenazadas-global" ? null == s ? void 0 : s.list_especies_amenazadas_global : null == s ? void 0 : s.list_especies_amenazadas_nacional,
                                        link: "region=".concat(n, "&tematica=").concat(null == s ? void 0 : s.slug)
                                    }),
                                    children: (0,
                                    r.jsx)("img", {
                                        className: "inline-block pl-2",
                                        src: "/images/icons/icon-table.svg"
                                    })
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "flex flex-col justify-center h-full w-full",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "font-lato flex justify-evenly gap-x-4",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex items-start",
                                        children: [(0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-red-cr",
                                            label: "CR"
                                        }), (0,
                                        r.jsx)(g.Z, {
                                            title: (0,
                                            r.jsx)("b", {
                                                children: d("amenazadas-global-cr")
                                            }),
                                            children: (0,
                                            r.jsx)("img", {
                                                src: "/images/icon-more.svg"
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == s ? void 0 : s.cr)
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex items-start",
                                        children: [(0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-orange-en",
                                            label: "EN"
                                        }), (0,
                                        r.jsx)(g.Z, {
                                            title: (0,
                                            r.jsx)("b", {
                                                children: d("amenazadas-global-en")
                                            }),
                                            children: (0,
                                            r.jsx)("img", {
                                                src: "/images/icon-more.svg"
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == s ? void 0 : s.en)
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex items-start",
                                        children: [(0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-yellow-vu",
                                            label: "VU"
                                        }), (0,
                                        r.jsx)(g.Z, {
                                            title: (0,
                                            r.jsx)("b", {
                                                children: d("amenazadas-global-vu")
                                            }),
                                            children: (0,
                                            r.jsx)("img", {
                                                src: "/images/icon-more.svg"
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == s ? void 0 : s.vu)
                                    })]
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "bg-red-cr h-4 ",
                                    style: {
                                        width: (0,
                                        h.Kf)(j, w)
                                    }
                                }), (0,
                                r.jsx)("div", {
                                    className: "bg-orange-en h-4 ",
                                    style: {
                                        width: (0,
                                        h.Kf)(_, w)
                                    }
                                }), (0,
                                r.jsx)("div", {
                                    className: "bg-yellow-vu h-4 ",
                                    style: {
                                        width: (0,
                                        h.Kf)(N, w)
                                    }
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex text-sm gap-x-2 text-blue-green pt-2.5",
                                children: [(0,
                                r.jsx)("p", {
                                    className: "inline-block ",
                                    children: (0,
                                    r.jsx)("b", {
                                        children: (0,
                                        h._H)(null == s ? void 0 : s.registros)
                                    })
                                }), (0,
                                r.jsx)("p", {
                                    className: "inline-block",
                                    children: "Observaciones"
                                })]
                            })]
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "md:w-[45%] flex flex-col justify-evenly gap-y-3 ",
                        children: [(0,
                        r.jsx)(S, {
                            cat: "amenazadas",
                            municipalityflag: t,
                            label: "en peligro cr\xedtico",
                            bgColor: "bg-red-cr",
                            region: i,
                            regionparent: c,
                            title: "CR",
                            datatable: (null == s ? void 0 : s.slug) === "amenazadas-global" ? null == s ? void 0 : s.list_especies_amenazadas_global_cr : null == s ? void 0 : s.list_especies_amenazadas_nacional_cr,
                            especies: null == s ? void 0 : s.cr,
                            parentEspecies: (null == s ? void 0 : s.estimadas_cr) || (null == s ? void 0 : s.parent_cr),
                            speciesEstimadasCol: (null == s ? void 0 : s.slug) === "amenazadas-global" ? null == s ? void 0 : s.cr_estimadas : null == s ? void 0 : s.parent_cr_estimadas,
                            registros: (null == s ? void 0 : s.cr_registros) || (null == s ? void 0 : s.parent_cr),
                            colObservadas: null == s ? void 0 : s.parent_cr,
                            especiesObservadas: o
                        }), (0,
                        r.jsx)(S, {
                            cat: "amenazadas",
                            municipalityflag: t,
                            label: "en peligro",
                            regionparent: c,
                            bgColor: "bg-orange-en",
                            region: i,
                            title: "EN",
                            datatable: (null == s ? void 0 : s.slug) === "amenazadas-global" ? null == s ? void 0 : s.list_especies_amenazadas_global_en : null == s ? void 0 : s.list_especies_amenazadas_nacional_en,
                            especies: null == s ? void 0 : s.en,
                            parentEspecies: (null == s ? void 0 : s.estimadas_en) || (null == s ? void 0 : s.parent_en),
                            speciesEstimadasCol: (null == s ? void 0 : s.slug) === "amenazadas-global" ? null == s ? void 0 : s.en_estimadas : null == s ? void 0 : s.parent_en_estimadas,
                            registros: (null == s ? void 0 : s.en_registros) || (null == s ? void 0 : s.parent_en),
                            colObservadas: null == s ? void 0 : s.parent_en,
                            especiesObservadas: o
                        }), (0,
                        r.jsx)(S, {
                            cat: "amenazadas",
                            municipalityflag: t,
                            label: "vulnerables",
                            regionparent: c,
                            bgColor: "bg-yellow-vu",
                            region: i,
                            title: "VU",
                            datatable: (null == s ? void 0 : s.slug) === "amenazadas-global" ? null == s ? void 0 : s.list_especies_amenazadas_global_vu : null == s ? void 0 : s.list_especies_amenazadas_nacional_vu,
                            especies: null == s ? void 0 : s.vu,
                            parentEspecies: (null == s ? void 0 : s.estimadas_vu) || (null == s ? void 0 : s.parent_vu),
                            speciesEstimadasCol: (null == s ? void 0 : s.slug) === "amenazadas-global" ? null == s ? void 0 : s.vu_estimadas : null == s ? void 0 : s.parent_vu_estimadas,
                            registros: (null == s ? void 0 : s.vu_registros) || (null == s ? void 0 : s.parent_vu),
                            colObservadas: null == s ? void 0 : s.parent_vu,
                            especiesObservadas: o
                        })]
                    })]
                })
            })
        };
        O.propTypes = {
            info: v().object,
            selected: v().string,
            updateBreadcrumb: v().func
        };
        var K = l(39234)
          , B = l(28017)
          , P = function(e) {
            var s = e.gallery;
            if (s)
                return (0,
                r.jsx)("div", {
                    className: "py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-screen-xl mx-auto w-10/12",
                    children: s.map(function(e, s) {
                        var l = e.text
                          , a = e.image
                          , i = e.id;
                        return (e.ref,
                        s >= 15) ? null : l ? (0,
                        r.jsx)("div", {
                            className: z()("flex bg-white-2 justify-center items-center min-h-[9rem] h-full"),
                            children: (0,
                            r.jsx)(Z.D, {
                                rehypePlugins: [K.Z],
                                className: "w-5/6 text-sm lg:text-base font-lato ",
                                children: l
                            })
                        }, s) : a ? (0,
                        r.jsxs)("div", {
                            className: "relative",
                            children: [(0,
                            r.jsx)("img", {
                                className: "min-h-[10rem] min-w-[10rem] w-full h-full ",
                                src: a
                            }), (0,
                            r.jsx)("div", {
                                className: "absolute bottom-1 right-1",
                                children: (0,
                                r.jsx)(B.Z, {
                                    src: "/images/camera-icon.svg",
                                    id: "g-" + +i,
                                    label: "gallery tooltip"
                                })
                            })]
                        }, s) : null
                    })
                })
        }
          , T = l(29009)
          , F = l(17260)
          , L = l(26050)
          , A = function(e) {
            var s = e.title
              , l = e.especies
              , a = e.registros
              , i = e.datatable
              , t = e.style
              , n = e.link;
            return 1 === t ? (0,
            r.jsxs)("div", {
                className: "space-y-2 shadow-md flex flex-col justify-start py-6 px-4",
                children: [(0,
                r.jsxs)("span", {
                    className: "font-inter font-black text-4xl ",
                    children: [(0,
                    h._H)(l), (0,
                    r.jsx)("div", {
                        className: "w-1/2 border-t border-t-[#262525]"
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "text-lg font-inter font-bold",
                    children: [s, i && (null == i ? void 0 : i.length) !== 0 && (0,
                    r.jsx)(y, {
                        title: (0,
                        r.jsx)(E, {
                            tabledata: i,
                            link: n
                        }),
                        children: (0,
                        r.jsx)("img", {
                            className: "inline-block pl-2",
                            src: "/images/icons/icon-table.svg"
                        })
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex text-sm gap-x-2 text-blue-green",
                    children: [(0,
                    r.jsx)("p", {
                        className: "inline-block ",
                        children: (0,
                        r.jsx)("b", {
                            children: (0,
                            h._H)(a)
                        })
                    }), (0,
                    r.jsx)("p", {
                        className: "inline-block",
                        children: "Observaciones"
                    })]
                })]
            }) : (0,
            r.jsxs)("div", {
                className: "flex px-1.5 py-0.5 gap-2 items-center shadow-default",
                children: [(0,
                r.jsxs)("div", {
                    className: "font-black font-inter",
                    children: [" ", (0,
                    h._H)(l)]
                }), (0,
                r.jsx)("div", {
                    className: "text-xs font-lato",
                    children: s
                })]
            })
        }
          , M = function(e) {
            var s = e.title
              , l = e.especies
              , a = e.registros
              , i = e.datatable
              , t = e.link;
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("span", {
                    className: "font-inter font-black text-4xl",
                    children: [(0,
                    h._H)(l), (0,
                    r.jsx)("div", {
                        className: "w-1/2 border-t border-t-[#262525]"
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "text-lg font-inter font-bold relative",
                    children: [s, i && (null == i ? void 0 : i.length) !== 0 && (0,
                    r.jsx)(y, {
                        placement: "left-start",
                        title: (0,
                        r.jsx)(E, {
                            tabledata: i,
                            link: t
                        }),
                        children: (0,
                        r.jsx)("img", {
                            className: "inline-block pl-2",
                            src: "/images/icons/icon-table.svg"
                        })
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex text-sm gap-x-2 text-blue-green",
                    children: [(0,
                    r.jsx)("p", {
                        className: "inline-block ",
                        children: (0,
                        r.jsx)("b", {
                            children: (0,
                            h._H)(a)
                        })
                    }), (0,
                    r.jsx)("p", {
                        className: "inline-block",
                        children: "Observaciones"
                    })]
                })]
            })
        }
          , V = l(88353)
          , R = function(e) {
            var s = e.slug
              , l = e.selected
              , a = e.info
              , i = e.region
              , t = e.observadasCol
              , n = e.municipalityflag
              , c = e.parentlabel;
            return (0,
            r.jsxs)("div", {
                className: "flex flex-col gap-4 space-y-3 lg:w-4/12 mx-auto py-8 px-3",
                children: [(0,
                r.jsxs)("div", {
                    className: "font-bold",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "text-6xl font-inter font-black ",
                        children: [(0,
                        r.jsx)("span", {
                            children: (0,
                            h._H)(null == a ? void 0 : a.especies_region_total)
                        }), (0,
                        r.jsx)("div", {
                            className: "border-b-2 border-dartmouth-green w-2/3 "
                        })]
                    }), (0,
                    r.jsx)("div", {
                        className: "flex gap-x-2 ",
                        children: (0,
                        r.jsxs)("div", {
                            className: "font-inter font-black text-lg",
                            children: ["Especies de ", l.toLowerCase(), (0,
                            r.jsx)(y, {
                                title: (0,
                                r.jsx)(E, {
                                    tabledata: null == a ? void 0 : a.species_list_top,
                                    general: !0,
                                    link: "region=".concat(s, "&grupo=").concat(null == a ? void 0 : a.slug.replace("-", "_"))
                                }),
                                children: (0,
                                r.jsx)("img", {
                                    className: "inline-block pl-2",
                                    src: "/images/icons/icon-table.svg"
                                })
                            })]
                        })
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "text-sm font-inter text-blue-green space-x-1 flex ",
                    children: [(0,
                    r.jsx)("p", {
                        className: "inline-block ",
                        children: (0,
                        r.jsx)("b", {
                            children: (0,
                            h._H)(null == a ? void 0 : a.registros_region_total)
                        })
                    }), (0,
                    r.jsx)("p", {
                        className: "inline-block",
                        children: "Observaciones"
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "relative pt-1.5",
                    children: [(0,
                    r.jsx)(V.Z, {
                        outer: (null == a ? void 0 : a.parent[0]) ? null == a ? void 0 : a.parent[0].especies_region_total : "colombia" === s ? t : null == a ? void 0 : a.especies_region_total,
                        inner: null == a ? void 0 : a.especies_region_total,
                        style: "style-2"
                    }), (0,
                    r.jsxs)("div", {
                        className: "absolute top-[200px] left-1/4 xl:left-[15%] flex flex-col",
                        children: [(0,
                        r.jsx)("span", {
                            className: "font-black text-lg",
                            children: (0,
                            h._H)(null == a ? void 0 : a.especies_region_total)
                        }), (0,
                        r.jsxs)("span", {
                            className: "text-sm",
                            children: [" Especies de ", l.toLowerCase(), " en ", i]
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "absolute -left-4 top-[260px] flex flex-col",
                        children: [(0,
                        r.jsx)("span", {
                            className: "font-black text-lg",
                            children: (0,
                            h._H)((null == a ? void 0 : a.parent[0]) ? null == a ? void 0 : a.parent[0].especies_region_total : "colombia" === s ? t : null == a ? void 0 : a.especies_region_total)
                        }), "colombia" === s ? (0,
                        r.jsx)("span", {
                            className: "text-sm",
                            children: " Especies observadas en Colombia"
                        }) : (0,
                        r.jsxs)("span", {
                            className: "text-sm",
                            children: [" Especies de ", l.toLowerCase(), " en ", n ? c : "Colombia"]
                        })]
                    })]
                })]
            })
        }
          , D = function(e) {
            var s = e.active
              , l = e.payload;
            if (s && l && l.length) {
                var a = l[0].payload.name;
                return (0,
                r.jsx)("div", {
                    className: "bg-white p-1.5",
                    children: (0,
                    r.jsx)("p", {
                        className: "text-dartmouth-green ",
                        children: "".concat(a, ": ").concat(l[0].value, " especies")
                    })
                })
            }
            return null
        }
          , U = function(e) {
            var s, l, a = e.selected, i = e.info, t = e.slug, c = function(e) {
                var s;
                return null === (s = b.filter(function(s) {
                    return s.slug === e
                })[0]) || void 0 === s ? void 0 : s.tooltip
            }, o = (null == i ? void 0 : null === (s = i.subgrupo_especies) || void 0 === s ? void 0 : s.reduce(function(e, s) {
                var l = s.label_grupo
                  , a = s.especies_region_total;
                return (0,
                k.Z)(e).concat([{
                    name: l,
                    especies: a
                }])
            }, [])) || [];
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsx)("div", {
                    className: "bg-white py-10 min-h-[600px]",
                    children: (0,
                    r.jsxs)("div", {
                        className: "w-11/12 gap-y-28 lg:w-11/12 flex flex-col lg:flex-row mx-auto justify-between",
                        children: [(0,
                        r.jsx)(R, (0,
                        n.Z)({}, e)), (0,
                        r.jsxs)("div", {
                            className: "flex flex-col justify-center relative",
                            children: [(null == o ? void 0 : o.length) !== 0 && (null == o ? void 0 : o.lenght) !== 1 && (0,
                            r.jsx)("div", {
                                className: z()("pt-12 md:pt-0"),
                                children: (0,
                                r.jsx)("div", {
                                    className: "h-72 w-72 lg:h-96 lg:w-10/12 max-w-4xl mx-auto pb-3 lg:pb-12",
                                    children: (0,
                                    r.jsx)(T.h, {
                                        children: (0,
                                        r.jsx)(F.W, {
                                            width: 400,
                                            height: 200,
                                            data: o,
                                            dataKey: "especies",
                                            ratio: 4 / 3,
                                            sx: {
                                                stroke: "#fff",
                                                fill: "#8884d8"
                                            },
                                            children: (0,
                                            r.jsx)(L.u, {
                                                content: (0,
                                                r.jsx)(D, {})
                                            })
                                        })
                                    })
                                })
                            }), (0,
                            r.jsxs)("div", {
                                className: z()("grid grid-cols-1 lg:grid-cols-3 gap-3 border-t border-t-dartmouth-green pt-2"),
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "space-y-2 shadow-md flex flex-col py-6 px-4",
                                    children: [(0,
                                    r.jsx)(M, {
                                        title: "Especies amenazadas nacional",
                                        especies: null == i ? void 0 : i.especies_amenazadas_nacional_total,
                                        registros: null == i ? void 0 : i.registros_amenazadas_nacional_total,
                                        datatable: null == i ? void 0 : i.species_list_tematica["amenazadas-nacional"],
                                        link: "region=".concat(t, "&grupo=").concat(null == i ? void 0 : i.slug, "&tematica=amenazadas_nacional")
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col justify-center h-full",
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: "font-lato flex justify-evenly gap-x-4",
                                            children: [(0,
                                            r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0,
                                                r.jsxs)("div", {
                                                    className: "flex items-start",
                                                    children: [(0,
                                                    r.jsx)(H, {
                                                        backgroundColor: "bg-red-cr",
                                                        label: "CR"
                                                    }), (0,
                                                    r.jsx)(g.Z, {
                                                        title: (0,
                                                        r.jsx)("b", {
                                                            children: c("amenazadas-nacional-cr")
                                                        }),
                                                        children: (0,
                                                        r.jsx)("img", {
                                                            src: "/images/icon-more.svg"
                                                        })
                                                    })]
                                                }), (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    h._H)(null == i ? void 0 : i.especies_amenazadas_nacional_cr)
                                                })]
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0,
                                                r.jsxs)("div", {
                                                    className: "flex items-start",
                                                    children: [(0,
                                                    r.jsx)(H, {
                                                        backgroundColor: "bg-orange-en",
                                                        label: "EN"
                                                    }), (0,
                                                    r.jsx)(g.Z, {
                                                        title: (0,
                                                        r.jsx)("b", {
                                                            children: c("amenazadas-nacional-en")
                                                        }),
                                                        children: (0,
                                                        r.jsx)("img", {
                                                            src: "/images/icon-more.svg"
                                                        })
                                                    })]
                                                }), (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    h._H)(null == i ? void 0 : i.especies_amenazadas_nacional_en)
                                                })]
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0,
                                                r.jsxs)("div", {
                                                    className: "flex items-start",
                                                    children: [(0,
                                                    r.jsx)(H, {
                                                        backgroundColor: "bg-yellow-vu",
                                                        label: "VU"
                                                    }), (0,
                                                    r.jsx)(g.Z, {
                                                        title: (0,
                                                        r.jsx)("b", {
                                                            children: c("amenazadas-nacional-vu")
                                                        }),
                                                        children: (0,
                                                        r.jsx)("img", {
                                                            src: "/images/icon-more.svg"
                                                        })
                                                    })]
                                                }), (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    h._H)(null == i ? void 0 : i.especies_amenazadas_nacional_vu)
                                                })]
                                            })]
                                        }), (0,
                                        r.jsxs)("div", {
                                            className: "flex w-full",
                                            children: [(0,
                                            r.jsx)("div", {
                                                className: "bg-red-cr h-4",
                                                style: {
                                                    width: (0,
                                                    h.Kf)(+(null == i ? void 0 : i.especies_amenazadas_nacional_cr), +(null == i ? void 0 : i.especies_amenazadas_nacional_cr) + +(null == i ? void 0 : i.especies_amenazadas_nacional_en) + +(null == i ? void 0 : i.especies_amenazadas_nacional_vu))
                                                }
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "bg-orange-en h-4",
                                                style: {
                                                    width: (0,
                                                    h.Kf)(+(null == i ? void 0 : i.especies_amenazadas_nacional_en), +(null == i ? void 0 : i.especies_amenazadas_nacional_cr) + +(null == i ? void 0 : i.especies_amenazadas_nacional_en) + +(null == i ? void 0 : i.especies_amenazadas_nacional_vu))
                                                }
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "bg-yellow-vu h-4",
                                                style: {
                                                    width: (0,
                                                    h.Kf)(+(null == i ? void 0 : i.especies_amenazadas_nacional_vu), +(null == i ? void 0 : i.especies_amenazadas_nacional_cr) + +(null == i ? void 0 : i.especies_amenazadas_nacional_en) + +(null == i ? void 0 : i.especies_amenazadas_nacional_vu))
                                                }
                                            })]
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "space-y-2 shadow-md flex flex-col py-6 px-4",
                                    children: [(0,
                                    r.jsx)(M, {
                                        title: "Especies amenazadas global",
                                        especies: null == i ? void 0 : i.especies_amenazadas_global_total,
                                        registros: null == i ? void 0 : i.registros_amenazadas_global_total,
                                        datatable: null == i ? void 0 : i.species_list_tematica["amenazadas-global"],
                                        link: "region=".concat(t, "&grupo=").concat(null == i ? void 0 : i.slug, "&tematica=amenazadas_global")
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col justify-center h-full",
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: "font-lato flex justify-evenly gap-x-4",
                                            children: [(0,
                                            r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0,
                                                r.jsxs)("div", {
                                                    className: "flex items-start",
                                                    children: [(0,
                                                    r.jsx)(H, {
                                                        backgroundColor: "bg-red-cr",
                                                        label: "CR"
                                                    }), (0,
                                                    r.jsx)(g.Z, {
                                                        title: (0,
                                                        r.jsx)("b", {
                                                            children: c("amenazadas-global-cr")
                                                        }),
                                                        children: (0,
                                                        r.jsx)("img", {
                                                            src: "/images/icon-more.svg"
                                                        })
                                                    })]
                                                }), (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    h._H)(null == i ? void 0 : i.especies_amenazadas_global_cr)
                                                })]
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0,
                                                r.jsxs)("div", {
                                                    className: "flex items-start",
                                                    children: [(0,
                                                    r.jsx)(H, {
                                                        backgroundColor: "bg-orange-en",
                                                        label: "EN"
                                                    }), (0,
                                                    r.jsx)(g.Z, {
                                                        title: (0,
                                                        r.jsx)("b", {
                                                            children: c("amenazadas-global-en")
                                                        }),
                                                        children: (0,
                                                        r.jsx)("img", {
                                                            src: "/images/icon-more.svg"
                                                        })
                                                    })]
                                                }), (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    h._H)(null == i ? void 0 : i.especies_amenazadas_global_en)
                                                })]
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0,
                                                r.jsxs)("div", {
                                                    className: "flex items-start",
                                                    children: [(0,
                                                    r.jsx)(H, {
                                                        backgroundColor: "bg-yellow-vu",
                                                        label: "VU"
                                                    }), (0,
                                                    r.jsx)(g.Z, {
                                                        title: (0,
                                                        r.jsx)("b", {
                                                            children: c("amenazadas-global-vu")
                                                        }),
                                                        children: (0,
                                                        r.jsx)("img", {
                                                            src: "/images/icon-more.svg"
                                                        })
                                                    })]
                                                }), (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    h._H)(null == i ? void 0 : i.especies_amenazadas_global_vu)
                                                })]
                                            })]
                                        }), (0,
                                        r.jsxs)("div", {
                                            className: "flex w-full",
                                            children: [(0,
                                            r.jsx)("div", {
                                                className: "bg-red-cr h-4",
                                                style: {
                                                    width: (0,
                                                    h.Kf)(+(null == i ? void 0 : i.especies_amenazadas_global_cr), +(null == i ? void 0 : i.especies_amenazadas_global_cr) + +(null == i ? void 0 : i.especies_amenazadas_global_en) + +(null == i ? void 0 : i.especies_amenazadas_global_vu))
                                                }
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "bg-orange-en h-4",
                                                style: {
                                                    width: (0,
                                                    h.Kf)(+(null == i ? void 0 : i.especies_amenazadas_global_en), +(null == i ? void 0 : i.especies_amenazadas_global_cr) + +(null == i ? void 0 : i.especies_amenazadas_global_en) + +(null == i ? void 0 : i.especies_amenazadas_global_vu))
                                                }
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "bg-yellow-vu h-4",
                                                style: {
                                                    width: (0,
                                                    h.Kf)(+(null == i ? void 0 : i.especies_amenazadas_global_vu), +(null == i ? void 0 : i.especies_amenazadas_global_cr) + +(null == i ? void 0 : i.especies_amenazadas_global_en) + +(null == i ? void 0 : i.especies_amenazadas_global_vu))
                                                }
                                            })]
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "space-y-2 shadow-md flex flex-col py-6 px-4",
                                    children: [(0,
                                    r.jsx)(M, {
                                        title: "Especies CITES",
                                        especies: null == i ? void 0 : i.especies_cites_total,
                                        registros: null == i ? void 0 : i.registros_cites_total,
                                        datatable: null == i ? void 0 : null === (l = i.species_list_tematica) || void 0 === l ? void 0 : l.cites,
                                        link: "region=".concat(t, "&grupo=").concat(null == i ? void 0 : i.slug, "&tematica=cites")
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col justify-end h-full",
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: "font-lato flex justify-evenly gap-x-4",
                                            children: [(0,
                                            r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: "flex items-start",
                                                    children: (0,
                                                    r.jsx)(H, {
                                                        backgroundColor: "bg-cerulean",
                                                        label: "I"
                                                    })
                                                }), (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    h._H)(null == i ? void 0 : i.especies_cites_i)
                                                })]
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: "flex items-start",
                                                    children: (0,
                                                    r.jsx)(H, {
                                                        backgroundColor: "bg-sandstorm",
                                                        label: "II"
                                                    })
                                                }), (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    h._H)(null == i ? void 0 : i.especies_cites_ii)
                                                })]
                                            }), (0,
                                            r.jsxs)("div", {
                                                className: "flex flex-col items-center",
                                                children: [(0,
                                                r.jsx)("div", {
                                                    className: "flex items-start",
                                                    children: (0,
                                                    r.jsx)(H, {
                                                        backgroundColor: "bg-greenish-cyan",
                                                        label: "III"
                                                    })
                                                }), (0,
                                                r.jsx)("span", {
                                                    children: (0,
                                                    h._H)(null == i ? void 0 : i.especies_cites_iii)
                                                })]
                                            })]
                                        }), (0,
                                        r.jsxs)("div", {
                                            className: "flex",
                                            children: [(0,
                                            r.jsx)("div", {
                                                className: "bg-cerulean h-4",
                                                style: {
                                                    width: (0,
                                                    h.Kf)(+(null == i ? void 0 : i.especies_cites_i), +(null == i ? void 0 : i.especies_cites_i) + +(null == i ? void 0 : i.especies_cites_ii) + +(null == i ? void 0 : i.especies_cites_iii))
                                                }
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "bg-sandstorm h-4",
                                                style: {
                                                    width: (0,
                                                    h.Kf)(+(null == i ? void 0 : i.especies_cites_ii), +(null == i ? void 0 : i.especies_cites_i) + +(null == i ? void 0 : i.especies_cites_ii) + +(null == i ? void 0 : i.especies_cites_iii))
                                                }
                                            }), (0,
                                            r.jsx)("div", {
                                                className: "bg-greenish-cyan h-4",
                                                style: {
                                                    width: (0,
                                                    h.Kf)(+(null == i ? void 0 : i.especies_cites_iii), +(null == i ? void 0 : i.especies_cites_i) + +(null == i ? void 0 : i.especies_cites_ii) + +(null == i ? void 0 : i.especies_cites_iii))
                                                }
                                            })]
                                        })]
                                    })]
                                }), (0,
                                r.jsx)(A, {
                                    style: 1,
                                    datatable: null == i ? void 0 : i.species_list_tematica.migratorias,
                                    title: "Especies migratorias",
                                    especies: null == i ? void 0 : i.especies_migratorias,
                                    registros: null == i ? void 0 : i.registros_migratorias,
                                    link: "region=".concat(t, "&grupo=").concat(null == i ? void 0 : i.slug, "&tematica=migratorias")
                                }), (0,
                                r.jsx)(A, {
                                    style: 1,
                                    datatable: null == i ? void 0 : i.species_list_tematica.endemicas,
                                    title: "Especies end\xe9micas",
                                    especies: null == i ? void 0 : i.especies_endemicas,
                                    registros: null == i ? void 0 : i.registros_endemicas,
                                    link: "region=".concat(t, "&grupo=").concat(null == i ? void 0 : i.slug, "&tematica=endemicas")
                                }), (0,
                                r.jsx)(A, {
                                    style: 1,
                                    title: "Especies ex\xf3ticas",
                                    especies: null == i ? void 0 : i.especies_exoticas_total,
                                    registros: null == i ? void 0 : i.registros_exoticas_total,
                                    datatable: null == i ? void 0 : i.species_list_tematica["exoticas-total"],
                                    link: "region=".concat(t, "&grupo=").concat(null == i ? void 0 : i.slug, "&tematica=exoticas_total")
                                })]
                            })]
                        })]
                    })
                }, a)
            })
        }
          , q = l(54574)
          , G = l(30680)
          , W = l(34501)
          , J = l(29695);
        function Q(e) {
            var s = e.child
              , l = s.children;
            return l && l.length ? (0,
            r.jsx)(J.W, {
                label: s.label,
                itemProps: {
                    "aria-label": s.slug
                },
                children: s.children.map(function(e, s) {
                    return (0,
                    r.jsx)(Q, {
                        child: e
                    }, s)
                })
            }) : (0,
            r.jsxs)(W.s, {
                value: s.label,
                "aria-label": s.slug,
                children: [" ", s.label, " "]
            })
        }
        l(16404);
        var Y = l(15729)
          , $ = (0,
        u.createContext)(null);
        function X(e) {
            var s = e.children
              , l = e.tree
              , a = e.search
              , i = e.initialSelected
              , t = e.initialSelectedValue
              , o = (0,
            j.Z)(e, ["children", "tree", "search", "initialSelected", "initialSelectedValue"])
              , d = (0,
            u.useState)([])
              , x = d[0]
              , m = d[1]
              , g = (0,
            u.useState)(void 0 === i ? "" : i)
              , p = g[0]
              , v = g[1]
              , b = (0,
            u.useState)(void 0 === t ? "" : t)
              , f = b[0]
              , _ = b[1]
              , N = function(e, s) {
                var l = e.target
                  , a = l.textContent
                  , i = l.value
                  , t = e.target.getAttribute("aria-label");
                p !== a && ("Ver m\xe1s" === a && (a = (0,
                h.p_)(i)),
                s !== x[0] && m([]),
                m(function(e) {
                    return (0,
                    k.Z)(e).concat([s, a || i]).reduce(function(e, s) {
                        return e.includes(s) || e.push(s),
                        e
                    }, [])
                }),
                v(a),
                _(t || i || a.normalize("NFC").toLowerCase().replace(/[\u0300-\u036f]/g, "")))
            }
              , w = function(e) {
                e.open && m(x.slice(0, 1))
            }
              , y = function(e) {
                var s = e.target.closest("button")
                  , l = s.textContent
                  , a = s.value
                  , i = e.target.getAttribute("aria-label");
                m([l]),
                v(l),
                _(i || a || l.normalize("NFC").toLowerCase().replace(/[\u0300-\u036f]/g, ""))
            };
            return (0,
            r.jsx)($.Provider, {
                value: {
                    selected: p,
                    setSelected: v,
                    selectedValue: f,
                    setSelectedValue: _,
                    breadcrumb: x,
                    setBreadcrumb: m,
                    updateBreadcrumb: N,
                    resetBreadcrumb: w,
                    firstPositionBC: y,
                    tree: l,
                    search: a
                },
                children: (0,
                r.jsx)("div", (0,
                c.Z)((0,
                n.Z)({}, o), {
                    children: s
                }))
            })
        }
        X.Title = function(e) {
            var s = e.children;
            return (0,
            r.jsx)(r.Fragment, {
                children: s
            })
        }
        ,
        a = function(e) {
            var s, l = e.className, a = (0,
            j.Z)(e, ["className"]), i = (0,
            u.useContext)($), t = i.tree, o = i.updateBreadcrumb, d = i.resetBreadcrumb, x = i.firstPositionBC, m = i.breadcrumb, g = (0,
            u.useRef)(null);
            return (0,
            r.jsx)("div", (0,
            c.Z)((0,
            n.Z)({
                className: z()(l)
            }, a), {
                children: (0,
                r.jsx)(Y.Z, {
                    slidestoshow: a.slidestoshow || 5,
                    responsive: !0,
                    children: null == t ? void 0 : null === (s = t.children) || void 0 === s ? void 0 : s.map(function(e, s) {
                        return (0,
                        r.jsx)("div", {
                            className: "px-2",
                            children: (0,
                            r.jsxs)("div", {
                                className: "bg-transparent shadow-3 h-24 w-auto flex",
                                ref: g,
                                children: [(0,
                                r.jsx)("button", {
                                    className: "w-full h-full py-4 px-2.5 ".concat(m[0] === e.label ? "bg-gradient-to-r from-lemon to-dartmouth-green" : "bg-white"),
                                    value: e.slug,
                                    onClick: x,
                                    children: (0,
                                    r.jsxs)("div", {
                                        className: "min-w-[80px]",
                                        children: [(0,
                                        r.jsx)("img", {
                                            className: "mx-auto h-4 w-9",
                                            src: m[0] === e.label ? (null == e ? void 0 : e.icon_white) ? "/" + (null == e ? void 0 : e.icon_white) : "/images/animales-cifras-icon-white.svg" : (null == e ? void 0 : e.icon_white) ? "/" + (null == e ? void 0 : e.icon_black) : "/images/animales-cifras-icon-black.svg"
                                        }), (0,
                                        r.jsx)("p", {
                                            className: "w-full font-bold font-lato break-words ".concat(m[0] === e.label ? "text-white" : "text-black-3"),
                                            children: e.label
                                        })]
                                    })
                                }), (0,
                                r.jsx)(q.v, {
                                    portal: !0,
                                    menuButton: (null == e ? void 0 : e.children) ? (0,
                                    r.jsx)(G.j, {
                                        className: "cursor-pointer bg-opacity-100 ",
                                        children: (0,
                                        r.jsx)("div", {
                                            className: z()("flex items-center px-2.5", m[0] !== e.label ? "border-l border-l-dartmouth-green h-3/4" : ""),
                                            children: (0,
                                            r.jsx)("img", {
                                                className: "h-4 w-6",
                                                src: "/images/green-arrow-down.svg",
                                                alt: "arrow down"
                                            })
                                        })
                                    }) : (0,
                                    r.jsx)("div", {}),
                                    onClick: function(s) {
                                        return o(s, e.label)
                                    },
                                    onMenuChange: d,
                                    children: (e.children || []).map(function(e, s) {
                                        return (0,
                                        r.jsx)(Q, {
                                            child: e
                                        }, s)
                                    })
                                })]
                            }, m[0])
                        }, s)
                    })
                })
            }))
        }
        ,
        X.Tree = a,
        i = function(e) {
            var s = e.className
              , l = (0,
            j.Z)(e, ["className"])
              , a = (0,
            u.useContext)($)
              , i = a.breadcrumb
              , t = a.updateBreadcrumb
              , o = a.resetBreadcrumb
              , d = a.parent;
            return (0,
            u.useEffect)(function() {}, [i]),
            (0,
            r.jsx)("div", (0,
            c.Z)((0,
            n.Z)({}, l), {
                className: s,
                children: (i || []).map(function(e, s) {
                    return (0,
                    r.jsxs)("div", {
                        className: "flex space-x-2 items-center",
                        children: [(0,
                        r.jsx)("button", {
                            value: e,
                            type: "button",
                            onClick: function(e) {
                                return t(e, d)
                            },
                            onChange: o,
                            "aria-label": e,
                            children: (0,
                            r.jsx)("p", {
                                className: "py-2 font-lato font-bold",
                                children: e
                            })
                        }), (0,
                        r.jsx)("img", {
                            src: "/images/arrow-black.svg",
                            alt: "arrow-breadcrumbs"
                        })]
                    }, s)
                })
            }))
        }
        ,
        X.Breadcrumb = i,
        t = function(e) {
            var s = e.children
              , l = e.className
              , a = (0,
            j.Z)(e, ["children", "className"])
              , i = (0,
            u.useContext)($)
              , t = i.selected
              , o = i.selectedValue
              , d = i.search
              , x = i.updateBreadcrumb
              , m = null == d ? void 0 : d.find(function(e) {
                return e.slug === o.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            });
            return (0,
            r.jsx)("div", (0,
            c.Z)((0,
            n.Z)({
                className: "".concat(l, " ").concat(t ? "block" : "hidden")
            }, a), {
                children: s(t, m, x)
            }))
        }
        ,
        X.Body = t;
        var ee = l(89157)
          , es = l(94379)
          , el = function(e) {
            var s = e.data
              , l = s.waffle ? s.waffle[0].especies_region_total : 100
              , a = Math.round((s.waffle ? s.waffle[1].especies_region_total : 5) / l * 100)
              , i = (0,
            u.useRef)(null);
            return (0,
            u.useEffect)(function() {
                if (i.current) {
                    var e = es.Ys(i.current);
                    e.selectAll(".block").remove();
                    var s = e.selectAll(".block").data(es.w6H(100)).enter().append("div").attr("class", "block").style("background-color", function(e) {
                        return e < a ? "#F26330" : "#5151F2"
                    }).style("width", "20px").style("height", "20px").style("margin", "2px").style("border-radius", "9999px");
                    return function() {
                        return s.remove()
                    }
                }
            }, [i]),
            (0,
            r.jsx)("div", {
                className: "mx-auto mt-24 w-11/12 flex justify-center items-center",
                children: (0,
                r.jsx)("figure", {
                    ref: i,
                    className: "flex flex-wrap-reverse w-[240px]"
                })
            })
        };
        function ea(e) {
            var s, l, a = e.data, i = e.region, t = a.n_muni_mas_endemicas, n = a.n_muni_mas_amenazadas_nacional, c = t ? (s = Math).max.apply(s, (0,
            k.Z)(t.map(function(e) {
                return e.n
            }))) : "En proceso...", o = n ? (l = Math).max.apply(l, (0,
            k.Z)(n.map(function(e) {
                return e.n
            }))) : "En proceso...", d = function(e, s) {
                var l = "endemicas" === e ? Math.round(s.n / c * 100) : Math.round(s.n / o * 100);
                return {
                    background: "endemicas" === e ? "#5151F2" : "#F26330",
                    width: "".concat(l, "px"),
                    height: "12px",
                    marginBottom: "5px",
                    rowGap: "0.25rem",
                    borderRadius: "9999px"
                }
            };
            return (0,
            r.jsx)(r.Fragment, {
                children: (0,
                r.jsxs)("div", {
                    className: "flex flex-col items-center gap-y-8 lg:flex-row lg:justify-center lg:gap-[235px]",
                    children: [(0,
                    r.jsxs)("table", {
                        children: [(0,
                        r.jsx)("thead", {
                            children: (0,
                            r.jsxs)("tr", {
                                className: "border-b border-black/50",
                                children: ["Colombia" === i ? (0,
                                r.jsx)("th", {
                                    className: "text-left",
                                    children: "Departamento"
                                }) : (0,
                                r.jsx)("th", {
                                    className: "text-left",
                                    children: "Municipio"
                                }), (0,
                                r.jsx)("th", {
                                    className: "text-left",
                                    children: "N\xfam. de especies end\xe9micas"
                                })]
                            })
                        }), t && Array.isArray(t) && t.length > 0 ? t.map(function(e) {
                            return (0,
                            r.jsx)("tbody", {
                                children: (0,
                                r.jsxs)("tr", {
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "w-2/4",
                                        children: e.label
                                    }), (0,
                                    r.jsxs)("td", {
                                        className: "flex flex-row items-center justify-start gap-x-3 w-3/4",
                                        children: [(0,
                                        r.jsx)("span", {
                                            style: d("endemicas", e)
                                        }, e.label), (0,
                                        r.jsx)("span", {
                                            children: e.n
                                        })]
                                    })]
                                })
                            }, e.label)
                        }) : (0,
                        r.jsx)("div", {
                            children: "En proceso..."
                        })]
                    }), (0,
                    r.jsxs)("table", {
                        children: [(0,
                        r.jsx)("thead", {
                            children: (0,
                            r.jsxs)("tr", {
                                className: "border-b border-black/50",
                                children: ["Colombia" === i ? (0,
                                r.jsx)("th", {
                                    className: "text-left",
                                    children: "Departamento"
                                }) : (0,
                                r.jsx)("th", {
                                    className: "text-left",
                                    children: "Municipio"
                                }), (0,
                                r.jsx)("th", {
                                    className: "text-left",
                                    children: "N\xfam. de especies amenazadas (nacional)"
                                })]
                            })
                        }), n && Array.isArray(n) && n.length > 0 ? n.map(function(e) {
                            return (0,
                            r.jsx)("tbody", {
                                children: (0,
                                r.jsxs)("tr", {
                                    children: [(0,
                                    r.jsx)("td", {
                                        className: "w-2/4",
                                        children: e.label
                                    }), (0,
                                    r.jsxs)("td", {
                                        className: "flex flex-row items-center justify-start gap-x-3 w-3/4",
                                        children: [(0,
                                        r.jsx)("span", {
                                            style: d("amenazadas", e)
                                        }, e.label), (0,
                                        r.jsx)("span", {
                                            children: e.n
                                        })]
                                    })]
                                })
                            }, e.label)
                        }) : (0,
                        r.jsx)("div", {
                            children: "En proceso..."
                        })]
                    })]
                })
            })
        }
        var ei = function(e) {
            var s = e.texts
              , l = s.split(": ")[0]
              , a = s.split(": ")[1].split(", ");
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(Z.D, {
                    className: "3xl:text-lg",
                    children: l + ":"
                }), (0,
                r.jsx)("ul", {
                    className: "pl-8",
                    children: a.map(function(e, s) {
                        var l = s === a.length - 1 ? e.replace(/\.$/, "") : e;
                        return (0,
                        r.jsx)("li", {
                            className: "list-disc",
                            children: (0,
                            r.jsx)(Z.D, {
                                className: "3xl:text-lg",
                                children: l
                            })
                        }, s)
                    })
                })]
            })
        }
          , et = function(e) {
            var s = e.data
              , l = e.region
              , a = e.municipalityflag
              , i = e.parentlabel
              , t = s.layout
              , n = s.title
              , c = s.description
              , o = s.texts
              , d = s.path;
            return "title/chart" === t ? (0,
            r.jsx)("div", {
                className: "px-5",
                children: (0,
                r.jsx)("div", {
                    children: (0,
                    r.jsxs)("div", {
                        className: "flex flex-col items-center lg:justify-between gap-y-3 lg:gap-y-6",
                        children: [(0,
                        r.jsx)("h2", {
                            className: "text-black-2 font-black text-center text-3xl 3xl:text-4xl",
                            children: n
                        }), (0,
                        r.jsx)("iframe", {
                            className: "w-11/12 mx-auto h-[350px]",
                            src: "/" + d,
                            alt: n
                        })]
                    })
                })
            }) : "title/(text|chart)" === t ? (0,
            r.jsx)("div", {
                className: "px-5",
                children: (0,
                r.jsx)("div", {
                    children: (0,
                    r.jsxs)("div", {
                        className: " flex flex-col items-center lg:flex-row justify-between lg:gap-x-12",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex flex-col justify-start items-start lg:w-6/12 max-w-[586px]",
                            children: [(0,
                            r.jsx)("h2", {
                                className: "text-black-2 font-black text-2xl 3xl:text-4xl",
                                children: n
                            }), (0,
                            r.jsx)("p", {
                                className: "text-lg 3xl:text-2xl mt-10",
                                children: c
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "lg:w-6/12 max-w-[438px] mt-7",
                            children: [a ? (0,
                            r.jsxs)("div", {
                                className: "text-center font-bold flex flex-col items-center",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "inline-flex gap-x-1.5 items-center",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "w-4 h-4 rounded-full bg-giants-orange"
                                    }), "Especies observadas en ", l]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "inline-flex gap-x-1.5 items-center",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "w-4 h-4 rounded-full bg-majorelle-blue"
                                    }), "Especies observadas en ", i]
                                })]
                            }) : (0,
                            r.jsxs)("div", {
                                className: "text-center font-bold flex flex-col items-center",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "inline-flex gap-x-1.5 items-center",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "w-4 h-4 rounded-full bg-giants-orange"
                                    }), "Especies observadas en ", l]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "inline-flex gap-x-1.5 items-center",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "w-4 h-4 rounded-full bg-majorelle-blue"
                                    }), "Especies observadas en Colombia"]
                                })]
                            }), (0,
                            r.jsx)(el, {
                                data: s
                            })]
                        })]
                    })
                })
            }) : "text-blocks" === t ? o.length >= 3 ? (0,
            r.jsx)("div", {
                className: "px-5",
                children: (0,
                r.jsxs)("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-12 gap-10",
                    children: [(0,
                    r.jsx)("div", {
                        className: "lg:col-start-1 lg:col-end-6 lg:row-start-1 lg:row-end-4",
                        children: (0,
                        r.jsx)("div", {
                            className: "bg-blue-green text-white min-h-full px-[71px] py-[145px]",
                            children: (0,
                            r.jsxs)("p", {
                                children: [(0,
                                r.jsx)("b", {
                                    children: "Charal\xe1"
                                }), ", patrimonio hist\xf3rico de Colombia y de su Biodiversidad, es el municipio de Santander donde se han observado el mayor n\xfamero de especies end\xe9micas de Colombia."]
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "hidden lg:block lg:col-start-6 lg:col-end-8 lg:row-start-1 lg:row-end-4",
                        children: (0,
                        r.jsx)("img", {
                            className: "w-full h-full object-cover object-center",
                            src: "/images/gallery-1.png",
                            alt: "gallery-1"
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:row-end-2",
                        children: (0,
                        r.jsx)("div", {
                            className: "bg-blue-green text-white pt-[37px] pb-[34px] px-[108px]",
                            children: (0,
                            r.jsxs)("p", {
                                children: ["El 11% de las especies \xfanicas del pa\xeds que ", (0,
                                r.jsx)("b", {
                                    children: "viven en Santander"
                                }), " corren el riesgo de desaparecer. Usted puede cuidarlas!"]
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "hidden lg:block lg:col-start-8 lg:col-end-13 lg:row-start-2 lg:row-end-4",
                        children: (0,
                        r.jsx)("img", {
                            className: "w-full h-full object-cover object-center",
                            src: "/images/gallery-2.png",
                            alt: "gallery-2"
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "hidden lg:block lg:lg:col-start-1 lg:col-end-8 lg:row-start-4 lg:row-end-5",
                        children: (0,
                        r.jsx)("img", {
                            className: "w-full h-full object-cover object-center",
                            src: "/images/gallery-3.png",
                            alt: "gallery-3"
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "lg:col-start-8 lg:col-end-13 lg:row-start-4 lg:row-end-5",
                        children: (0,
                        r.jsx)("div", {
                            className: "bg-blue-green text-white pt-[37px] pb-[34px] px-[108px]",
                            children: (0,
                            r.jsxs)("p", {
                                children: [(0,
                                r.jsx)("b", {
                                    children: "El roble colombiano"
                                }), ", \xe1rbol end\xe9mico de los Andes, es la planta con m\xe1s observaciones en el departamento."]
                            })
                        })
                    })]
                })
            }) : o.length >= 2 ? (0,
            r.jsxs)("div", {
                className: "px-5 py-16",
                children: [(0,
                r.jsxs)("div", {
                    className: "space-y-5 flex flex-col justify-center items-center",
                    children: [(0,
                    r.jsx)("img", {
                        className: "w-20 h-20",
                        src: "/images/quotes.png"
                    }), (0,
                    r.jsx)("h2", {
                        className: "text-3xl font-bold text-dartmouth-green",
                        children: "Destacados"
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "flex flex-row justify-center items-center gap-28 px-10",
                    children: [(0,
                    r.jsx)("div", {
                        className: "lg:col-start-1 lg:col-end-6",
                        children: (0,
                        r.jsx)("div", {
                            className: "h-full py-10 px-12",
                            children: (0,
                            r.jsx)(ei, {
                                texts: o[0]
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "border-r-2 border-b/40 h-44"
                    }), (0,
                    r.jsx)("div", {
                        className: "lg:col-start-8 lg:col-end-13",
                        children: (0,
                        r.jsx)("div", {
                            className: "h-full py-10 px-12",
                            children: (0,
                            r.jsx)(ei, {
                                texts: o[1]
                            })
                        })
                    })]
                })]
            }) : (0,
            r.jsxs)("div", {
                className: "px-5 py-16",
                children: [(0,
                r.jsxs)("div", {
                    className: "space-y-5 flex flex-col justify-center items-center",
                    children: [(0,
                    r.jsx)("img", {
                        className: "w-20 h-20",
                        src: "/images/quotes.png"
                    }), (0,
                    r.jsx)("h2", {
                        className: "text-3xl font-bold text-dartmouth-green",
                        children: "Destacados"
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "flex flex-col justify-center items-center",
                    children: (0,
                    r.jsx)("div", {
                        className: "h-full py-10 px-12",
                        children: (0,
                        r.jsx)(ei, {
                            texts: o[0]
                        })
                    })
                })]
            }) : "title/(chart|chart)" === t ? (0,
            r.jsx)("div", {
                className: "px-5",
                children: (0,
                r.jsxs)("div", {
                    children: [(0,
                    r.jsx)("h2", {
                        className: "text-black-2 font-black text-center text-2xl 3xl:text-4xl",
                        children: n
                    }), (0,
                    r.jsx)("div", {
                        className: "lg:py-14",
                        children: (0,
                        r.jsx)("div", {
                            className: "",
                            children: (0,
                            r.jsx)(ea, {
                                data: s,
                                region: l
                            })
                        })
                    })]
                })
            }) : void 0
        }
          , en = function(e) {
            var s, l, a = e.info, i = e.slugregion, t = e.selected, n = e.updateBreadcrumb, c = e.region;
            e.municipalityflag;
            var o = function(e) {
                var s;
                return null === (s = b.filter(function(s) {
                    return s.slug === e
                })[0]) || void 0 === s ? void 0 : s.tooltip
            };
            return "amenazadas" === t.toLowerCase() ? (0,
            r.jsx)("div", {
                className: "py-10 bg-white",
                children: (0,
                r.jsx)("div", {
                    className: "grid lg:grid-cols-2 gap-y-6 gap-x-36 w-10/12 mx-auto",
                    children: null == a ? void 0 : a.children.map(function(e, s) {
                        e.label;
                        var l = e.slug
                          , a = e.especies
                          , c = e.registros
                          , d = e.species_list
                          , x = e.cr
                          , m = e.en
                          , u = e.vu
                          , p = (0,
                        h.kC)(l.replace("amenazadas-", ""));
                        return (0,
                        r.jsxs)("div", {
                            className: "shadow-md flex flex-col justify-center gap-6 py-12 px-8",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "flex flex-col items-start justify-start",
                                children: [(0,
                                r.jsxs)("span", {
                                    children: ["Categor\xeda UICN ", p]
                                }), (0,
                                r.jsxs)("span", {
                                    className: "text-6xl font-black font-inter",
                                    children: [(0,
                                    h._H)(a), (0,
                                    r.jsx)("div", {
                                        className: "border-t border-t-dartmouth-green"
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "font-black font-inter text-lg",
                                    children: ["Especies amenazadas", (null == d ? void 0 : d.length) !== 0 && (0,
                                    r.jsx)(y, {
                                        placement: "left",
                                        title: (0,
                                        r.jsx)(E, {
                                            tabledata: d,
                                            link: "region=".concat(i, "&tematica=").concat(l.replace("-", "_"))
                                        }),
                                        children: (0,
                                        r.jsx)("img", {
                                            className: "inline-block pl-2",
                                            src: "/images/icons/icon-table.svg"
                                        })
                                    })]
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex flex-col justify-center h-full w-full",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "font-lato flex justify-evenly gap-x-4",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col items-center",
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: "flex items-start",
                                            children: [(0,
                                            r.jsx)(H, {
                                                backgroundColor: "bg-red-cr",
                                                label: "CR"
                                            }), (0,
                                            r.jsx)(g.Z, {
                                                title: (0,
                                                r.jsx)("b", {
                                                    children: o("amenazadas-global-cr")
                                                }),
                                                children: (0,
                                                r.jsx)("img", {
                                                    src: "/images/icon-more.svg"
                                                })
                                            })]
                                        }), (0,
                                        r.jsx)("span", {
                                            children: (0,
                                            h._H)(x)
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col items-center",
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: "flex items-start",
                                            children: [(0,
                                            r.jsx)(H, {
                                                backgroundColor: "bg-orange-en",
                                                label: "EN"
                                            }), (0,
                                            r.jsx)(g.Z, {
                                                title: (0,
                                                r.jsx)("b", {
                                                    children: o("amenazadas-global-en")
                                                }),
                                                children: (0,
                                                r.jsx)("img", {
                                                    src: "/images/icon-more.svg"
                                                })
                                            })]
                                        }), (0,
                                        r.jsx)("span", {
                                            children: (0,
                                            h._H)(m)
                                        })]
                                    }), (0,
                                    r.jsxs)("div", {
                                        className: "flex flex-col items-center",
                                        children: [(0,
                                        r.jsxs)("div", {
                                            className: "flex items-start",
                                            children: [(0,
                                            r.jsx)(H, {
                                                backgroundColor: "bg-yellow-vu",
                                                label: "VU"
                                            }), (0,
                                            r.jsx)(g.Z, {
                                                title: (0,
                                                r.jsx)("b", {
                                                    children: o("amenazadas-global-vu")
                                                }),
                                                children: (0,
                                                r.jsx)("img", {
                                                    src: "/images/icon-more.svg"
                                                })
                                            })]
                                        }), (0,
                                        r.jsx)("span", {
                                            children: (0,
                                            h._H)(u)
                                        })]
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "bg-red-cr h-4 ",
                                        style: {
                                            width: (0,
                                            h.Kf)(x, +x + +m + +u)
                                        }
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "bg-orange-en h-4 ",
                                        style: {
                                            width: (0,
                                            h.Kf)(m, +x + +m + +u)
                                        }
                                    }), (0,
                                    r.jsx)("div", {
                                        className: "bg-yellow-vu h-4 ",
                                        style: {
                                            width: (0,
                                            h.Kf)(u, +x + +m + +u)
                                        }
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex text-sm gap-x-2 text-blue-green pt-2.5",
                                    children: [(0,
                                    r.jsx)("p", {
                                        className: "inline-block ",
                                        children: (0,
                                        r.jsx)("b", {
                                            children: (0,
                                            h._H)(c)
                                        })
                                    }), (0,
                                    r.jsx)("p", {
                                        className: "inline-block",
                                        children: "Observaciones"
                                    })]
                                })]
                            }), (0,
                            r.jsx)("div", {
                                className: "flex flex-col pt-5 gap-y-10",
                                children: (0,
                                r.jsxs)("button", {
                                    type: "button",
                                    className: "flex gap-3 justify-center items-center py-1 border border-black rounded-full w-1/2 lg:w-4/12 self-end",
                                    value: l,
                                    onClick: function(e) {
                                        return n(e, t)
                                    },
                                    children: ["Ver m\xe1s", (0,
                                    r.jsx)("img", {
                                        src: "/images/arrow-black.svg",
                                        alt: "arrow button"
                                    })]
                                })
                            })]
                        }, s)
                    })
                })
            }) : "cites" === t.toLowerCase() ? (0,
            r.jsx)("div", {
                className: "bg-white py-10",
                children: (0,
                r.jsxs)("div", {
                    className: "w-10/12 mx-auto flex flex-col lg:flex-row gap-y-6 justify-between",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "shadow-md lg:w-2/5 mx-auto flex flex-col justify-center gap-6 py-12 px-8",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex flex-col items-start justify-start",
                            children: [(0,
                            r.jsxs)("span", {
                                className: "text-6xl font-black font-inter",
                                children: [(0,
                                h._H)(null == a ? void 0 : a.especies_cites_total), (0,
                                r.jsx)("div", {
                                    className: "border-t border-t-dartmouth-green"
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "font-black font-inter text-lg",
                                children: ["Especies ", t, " observadas", (null === (l = a.species_list) || void 0 === l ? void 0 : l.length) && (0,
                                r.jsx)(y, {
                                    placement: "left",
                                    title: (0,
                                    r.jsx)(E, {
                                        tabledata: a.species_list,
                                        link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug)
                                    }),
                                    children: (0,
                                    r.jsx)("img", {
                                        className: "inline-block pl-2",
                                        src: "/images/icons/icon-table.svg"
                                    })
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex text-sm gap-x-2 text-blue-green",
                                children: [(0,
                                r.jsx)("p", {
                                    className: "inline-block ",
                                    children: (0,
                                    r.jsx)("b", {
                                        children: (0,
                                        h._H)(null == a ? void 0 : a.registros_cites_total)
                                    })
                                }), (0,
                                r.jsx)("p", {
                                    className: "inline-block",
                                    children: "Observaciones"
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "flex flex-col justify-center h-full w-full",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "font-lato flex justify-evenly gap-x-4",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "flex items-start",
                                        children: (0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-cerulean",
                                            label: "I"
                                        })
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == a ? void 0 : a.especies_cites_i)
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "flex items-start",
                                        children: (0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-black",
                                            label: "I/II"
                                        })
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == a ? void 0 : a.especies_cites_i_ii)
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "flex items-start",
                                        children: (0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-sandstorm",
                                            label: "II"
                                        })
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == a ? void 0 : a.especies_cites_ii)
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsx)("div", {
                                        className: "flex items-start",
                                        children: (0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-greenish-cyan",
                                            label: "III"
                                        })
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == a ? void 0 : a.especies_cites_iii)
                                    })]
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "bg-cerulean h-4",
                                    style: {
                                        width: (0,
                                        h.Kf)(+(null == a ? void 0 : a.especies_cites_i), +(null == a ? void 0 : a.especies_cites_i) + +(null == a ? void 0 : a.especies_cites_ii) + +(null == a ? void 0 : a.especies_cites_i_ii) + +(null == a ? void 0 : a.especies_cites_iii))
                                    }
                                }), (0,
                                r.jsx)("div", {
                                    className: "bg-sandstorm h-4",
                                    style: {
                                        width: (0,
                                        h.Kf)(+(null == a ? void 0 : a.especies_cites_ii), +(null == a ? void 0 : a.especies_cites_i) + +(null == a ? void 0 : a.especies_cites_ii) + +(null == a ? void 0 : a.especies_cites_i_ii) + +(null == a ? void 0 : a.especies_cites_iii))
                                    }
                                }), (0,
                                r.jsx)("div", {
                                    className: "bg-black h-4",
                                    style: {
                                        width: (0,
                                        h.Kf)(+(null == a ? void 0 : a.especies_cites_i_ii), +(null == a ? void 0 : a.especies_cites_i) + +(null == a ? void 0 : a.especies_cites_ii) + +(null == a ? void 0 : a.especies_cites_i_ii) + +(null == a ? void 0 : a.especies_cites_iii))
                                    }
                                }), (0,
                                r.jsx)("div", {
                                    className: "bg-greenish-cyan h-4",
                                    style: {
                                        width: (0,
                                        h.Kf)(+(null == a ? void 0 : a.especies_cites_iii), +(null == a ? void 0 : a.especies_cites_i) + +(null == a ? void 0 : a.especies_cites_ii) + +(null == a ? void 0 : a.especies_cites_i_ii) + +(null == a ? void 0 : a.especies_cites_iii))
                                    }
                                })]
                            })]
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "lg:w-[45%] flex flex-col justify-evenly gap-y-3 ",
                        children: [(0,
                        r.jsx)(S, {
                            bgColor: "bg-cerulean",
                            textColor: "text-white",
                            region: c,
                            title: "CITES I",
                            datatable: null == a ? void 0 : a.list_especies_cites_i,
                            especies: null == a ? void 0 : a.especies_cites_i,
                            parentEspecies: null == a ? void 0 : a.cites_i_estimadas,
                            registros: null == a ? void 0 : a.registros_cites_i,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug, "_i")
                        }), (0,
                        r.jsx)(S, {
                            bgColor: "bg-black",
                            textColor: "text-white",
                            region: c,
                            title: "CITES I/II",
                            datatable: null == a ? void 0 : a.list_especies_cites_i_ii,
                            especies: null == a ? void 0 : a.especies_cites_i_ii,
                            parentEspecies: null == a ? void 0 : a.cites_i_ii_estimadas,
                            registros: null == a ? void 0 : a.registros_cites_i_ii,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug, "_i_ii")
                        }), (0,
                        r.jsx)(S, {
                            bgColor: "bg-sandstorm",
                            textColor: "text-white",
                            region: c,
                            title: "CITES II",
                            datatable: null == a ? void 0 : a.list_especies_cites_ii,
                            especies: null == a ? void 0 : a.especies_cites_ii,
                            parentEspecies: null == a ? void 0 : a.cites_ii_estimadas,
                            registros: null == a ? void 0 : a.registros_cites_ii,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug, "_ii")
                        }), (0,
                        r.jsx)(S, {
                            bgColor: "bg-greenish-cyan",
                            textColor: "text-white",
                            region: c,
                            title: "CITES III",
                            datatable: null == a ? void 0 : a.list_especies_cites_iii,
                            especies: null == a ? void 0 : a.especies_cites_iii,
                            parentEspecies: null == a ? void 0 : a.cites_iii_estimadas,
                            registros: null == a ? void 0 : a.registros_cites_iii,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug, "_iii")
                        })]
                    })]
                })
            }) : "migratorias" === t.toLowerCase() ? (0,
            r.jsx)("div", {
                className: "bg-white py-10",
                children: (0,
                r.jsxs)("div", {
                    className: "w-10/12 mx-auto flex flex-col lg:flex-row gap-y-6 justify-between",
                    children: [(0,
                    r.jsx)("div", {
                        className: "lg:w-[45%] shadow-hard flex flex-col py-12 px-8",
                        children: (0,
                        r.jsx)(I, {
                            selected: t,
                            region: c,
                            especies: null == a ? void 0 : a.especies_migratorias,
                            parentEspecies: null == a ? void 0 : a.migratorias_estimadas,
                            registros: null == a ? void 0 : a.registros_migratorias,
                            datatable: null == a ? void 0 : a.species_list,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug),
                            rel: "noopener noreferrer"
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "lg:w-2/5 flex items-center",
                        children: (0,
                        r.jsx)(Z.D, {
                            className: "rc-markdown",
                            children: null == a ? void 0 : a.texto
                        })
                    })]
                })
            }) : "end\xe9micas" === t.toLowerCase() ? (0,
            r.jsx)("div", {
                className: "bg-white py-10",
                children: (0,
                r.jsxs)("div", {
                    className: "w-10/12 mx-auto flex flex-col md:flex-row justify-between",
                    children: [(0,
                    r.jsx)("div", {
                        className: "lg:w-1/2 shadow-hard py-12 px-8 max-w-[450px]",
                        children: (0,
                        r.jsx)(I, {
                            selected: t,
                            region: c,
                            especies: null == a ? void 0 : a.especies_endemicas,
                            parentEspecies: null == a ? void 0 : a.endemcias_estimadas,
                            registros: null == a ? void 0 : a.registros_endemicas,
                            datatable: null == a ? void 0 : a.species_list,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug)
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "w-[45%] flex flex-col justify-evenly gap-y-3 ",
                        children: [(0,
                        r.jsx)(E, {
                            tabledata: null == a ? void 0 : a.species_list
                        }), (0,
                        r.jsx)("div", {
                            className: "flex flex-col pt-5 gap-y-10",
                            children: (0,
                            r.jsxs)("button", {
                                type: "button",
                                className: "flex gap-3 justify-center items-center py-1 border border-black rounded-full w-1/2 lg:w-[42%] self-end",
                                children: [(0,
                                r.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: "/explorador?region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug),
                                    children: "Explora lista completa"
                                }), (0,
                                r.jsx)("img", {
                                    src: "/images/arrow-black.svg",
                                    alt: "arrow button"
                                })]
                            })
                        })]
                    })]
                })
            }) : "ex\xf3ticas" === t.toLowerCase() ? (0,
            r.jsx)("div", {
                className: "bg-white py-10",
                children: (0,
                r.jsxs)("div", {
                    className: "w-10/12 mx-auto flex flex-col lg:flex-row gap-y-6 justify-between",
                    children: [(0,
                    r.jsx)("div", {
                        className: "lg:w-2/5 shadow-hard py-12 px-8",
                        children: (0,
                        r.jsx)(I, {
                            selected: t,
                            region: c,
                            especies: null == a ? void 0 : a.especies_exoticas_total,
                            parentEspecies: null == a ? void 0 : a.exoticas_total_estimadas,
                            registros: null == a ? void 0 : a.registros_exoticas_total,
                            datatable: null == a ? void 0 : a.list_especies_exoticas_total,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug)
                        })
                    }), (0,
                    r.jsxs)("div", {
                        className: "lg:w-[45%] flex flex-col justify-evenly gap-y-3 ",
                        children: [(0,
                        r.jsx)(S, {
                            bgColor: "bg-orange-en",
                            region: c,
                            title: "Ex\xf3ticas",
                            datatable: null == a ? void 0 : a.list_especies_exoticas,
                            especies: null == a ? void 0 : a.especies_exoticas,
                            parentEspecies: null == a ? void 0 : a.exoticas_estimadas,
                            registros: null == a ? void 0 : a.registros_exoticas,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug)
                        }), (0,
                        r.jsx)(S, {
                            bgColor: "bg-orange-en",
                            region: c,
                            title: "Ex\xf3ticas con potencial de invasi\xf3n",
                            datatable: null == a ? void 0 : a.list_especies_exoticas_riesgo_invasion,
                            especies: null == a ? void 0 : a.especies_exoticas_riesgo_invasion,
                            parentEspecies: null == a ? void 0 : a.exoticas_riesgo_invasion_estimadas,
                            registros: null == a ? void 0 : a.registros_exoticas_riesgo_invasion,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug)
                        }), (0,
                        r.jsx)(S, {
                            bgColor: "bg-orange-en",
                            region: c,
                            title: "Invasoras",
                            datatable: null == a ? void 0 : a.list_especies_invasoras,
                            especies: null == a ? void 0 : a.especies_invasoras,
                            parentEspecies: null == a ? void 0 : a.exoticas_invasoras_estimadas,
                            registros: null == a ? void 0 : a.registros_invasoras,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug)
                        })]
                    })]
                })
            }) : (0,
            r.jsx)("div", {
                className: "bg-white py-10",
                children: (0,
                r.jsxs)("div", {
                    className: "w-10/12 mx-auto flex justify-between",
                    children: [(0,
                    r.jsxs)("div", {
                        className: "max-w-[45%] w-full shadow-md flex flex-col justify-center gap-6 py-12 px-8",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "flex flex-col items-start justify-start",
                            children: [(0,
                            r.jsxs)("span", {
                                children: ["Categor\xeda UICN ", (0,
                                h.kC)(null == a ? void 0 : a.slug.replace("amenazadas-", ""))]
                            }), (0,
                            r.jsxs)("span", {
                                className: "text-6xl font-black font-inter",
                                children: [(0,
                                h._H)(null == a ? void 0 : a.especies), (0,
                                r.jsx)("div", {
                                    className: "border-t border-t-dartmouth-green"
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "font-black font-inter text-lg",
                                children: ["Especies amenazadas", (null == a ? void 0 : null === (s = a.species_list) || void 0 === s ? void 0 : s.length) !== 0 && (0,
                                r.jsx)(y, {
                                    placement: "left",
                                    title: (0,
                                    r.jsx)(E, {
                                        tabledata: (null == a ? void 0 : a.slug) === "amenazadas-global" ? null == a ? void 0 : a.list_especies_amenazadas_global : null == a ? void 0 : a.list_especies_amenazadas_nacional,
                                        link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug)
                                    }),
                                    children: (0,
                                    r.jsx)("img", {
                                        className: "inline-block pl-2",
                                        src: "/images/icons/icon-table.svg"
                                    })
                                })]
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "flex flex-col justify-center h-full w-full",
                            children: [(0,
                            r.jsxs)("div", {
                                className: "font-lato flex justify-evenly gap-x-4",
                                children: [(0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex items-start",
                                        children: [(0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-red-cr",
                                            label: "CR"
                                        }), (0,
                                        r.jsx)(g.Z, {
                                            title: (0,
                                            r.jsx)("b", {
                                                children: o("amenazadas-global-cr")
                                            }),
                                            children: (0,
                                            r.jsx)("img", {
                                                src: "/images/icon-more.svg"
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == a ? void 0 : a.cr)
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex items-start",
                                        children: [(0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-orange-en",
                                            label: "EN"
                                        }), (0,
                                        r.jsx)(g.Z, {
                                            title: (0,
                                            r.jsx)("b", {
                                                children: o("amenazadas-global-en")
                                            }),
                                            children: (0,
                                            r.jsx)("img", {
                                                src: "/images/icon-more.svg"
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == a ? void 0 : a.en)
                                    })]
                                }), (0,
                                r.jsxs)("div", {
                                    className: "flex flex-col items-center",
                                    children: [(0,
                                    r.jsxs)("div", {
                                        className: "flex items-start",
                                        children: [(0,
                                        r.jsx)(H, {
                                            backgroundColor: "bg-yellow-vu",
                                            label: "VU"
                                        }), (0,
                                        r.jsx)(g.Z, {
                                            title: (0,
                                            r.jsx)("b", {
                                                children: o("amenazadas-global-vu")
                                            }),
                                            children: (0,
                                            r.jsx)("img", {
                                                src: "/images/icon-more.svg"
                                            })
                                        })]
                                    }), (0,
                                    r.jsx)("span", {
                                        children: (0,
                                        h._H)(null == a ? void 0 : a.vu)
                                    })]
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "bg-red-cr h-4 ",
                                    style: {
                                        width: (0,
                                        h.Kf)(+(null == a ? void 0 : a.cr_registros), +(null == a ? void 0 : a.cr_registros) + +(null == a ? void 0 : a.en_registros) + +(null == a ? void 0 : a.vu_registros))
                                    }
                                }), (0,
                                r.jsx)("div", {
                                    className: "bg-orange-en h-4 ",
                                    style: {
                                        width: (0,
                                        h.Kf)(+(null == a ? void 0 : a.en_registros), +(null == a ? void 0 : a.cr_registros) + +(null == a ? void 0 : a.en_registros) + +(null == a ? void 0 : a.vu_registros))
                                    }
                                }), (0,
                                r.jsx)("div", {
                                    className: "bg-yellow-vu h-4 ",
                                    style: {
                                        width: (0,
                                        h.Kf)(+(null == a ? void 0 : a.vu_registros), +(null == a ? void 0 : a.cr_registros) + +(null == a ? void 0 : a.en_registros) + +(null == a ? void 0 : a.vu_registros))
                                    }
                                })]
                            }), (0,
                            r.jsxs)("div", {
                                className: "flex text-sm gap-x-2 text-blue-green pt-2.5",
                                children: [(0,
                                r.jsx)("p", {
                                    className: "inline-block ",
                                    children: (0,
                                    r.jsx)("b", {
                                        children: (0,
                                        h._H)(null == a ? void 0 : a.registros)
                                    })
                                }), (0,
                                r.jsx)("p", {
                                    className: "inline-block",
                                    children: "Observaciones"
                                })]
                            })]
                        })]
                    }), (0,
                    r.jsxs)("div", {
                        className: "w-[45%] flex flex-col justify-evenly gap-y-3 ",
                        children: [(0,
                        r.jsx)(S, {
                            cat: "amenazadas",
                            label: "en peligro cr\xedtico",
                            bgColor: "bg-red-cr",
                            region: c,
                            title: "CR",
                            datatable: (null == a ? void 0 : a.slug) === "amenazadas-global" ? null == a ? void 0 : a.list_especies_amenazadas_global_cr : null == a ? void 0 : a.list_especies_amenazadas_nacional_cr,
                            especies: null == a ? void 0 : a.cr,
                            parentEspecies: null == a ? void 0 : a.cr_estimadas,
                            registros: null == a ? void 0 : a.cr_registros,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug, "&grupo=tematica")
                        }), (0,
                        r.jsx)(S, {
                            cat: "amenazadas",
                            label: "en peligro",
                            bgColor: "bg-orange-en",
                            region: c,
                            title: "EN",
                            datatable: (null == a ? void 0 : a.slug) === "amenazadas-global" ? null == a ? void 0 : a.list_especies_amenazadas_global_en : null == a ? void 0 : a.list_especies_amenazadas_nacional_en,
                            especies: null == a ? void 0 : a.en,
                            parentEspecies: null == a ? void 0 : a.en_estimadas,
                            registros: null == a ? void 0 : a.en_registros,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug, "&grupo=tematica")
                        }), (0,
                        r.jsx)(S, {
                            cat: "amenazadas",
                            label: "vulnerables",
                            bgColor: "bg-yellow-vu",
                            region: c,
                            title: "VU",
                            datatable: (null == a ? void 0 : a.slug) === "amenazadas-global" ? null == a ? void 0 : a.list_especies_amenazadas_global_vu : null == a ? void 0 : a.list_especies_amenazadas_nacional_vu,
                            especies: null == a ? void 0 : a.vu,
                            parentEspecies: null == a ? void 0 : a.vu_estimadas,
                            registros: null == a ? void 0 : a.vu_registros,
                            link: "region=".concat(i, "&tematica=").concat(null == a ? void 0 : a.slug, "&grupo=tematica")
                        })]
                    })]
                })
            })
        };
        en.propTypes = {
            info: v().object,
            selected: v().string,
            updateBreadcrumb: v().func
        };
        var ec = l(44984)
          , er = l(11163)
          , eo = l(5152)
          , ed = l.n(eo)
          , ex = ed()(function() {
            return Promise.all([l.e(269), l.e(672), l.e(958)]).then(l.bind(l, 67623))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [67623]
                }
            },
            ssr: !1
        })
          , em = ed()(function() {
            return Promise.all([l.e(269), l.e(672), l.e(91)]).then(l.bind(l, 3711))
        }, {
            loadableGenerated: {
                webpack: function() {
                    return [3711]
                }
            },
            ssr: !1
        });
        function eu(e) {
            var s = e.data
              , l = e.slug
              , a = e.municipality
              , i = e.municipalityflag
              , t = void 0 !== i && i
              , g = e.isScale
              , p = void 0 !== g && g
              , v = e.map
              , h = s.general_info
              , b = s.grupos_biologicos
              , f = s.grupos_interes
              , j = s.nav_grupo_biologico
              , _ = s.nav_grupo_interes
              , N = s.nav_tematica
              , w = s.nav_territorio
              , y = s.tematica
              , k = s.patrocinador
              , C = s.publicadores
              , z = s.slides
              , E = s.territorio
              , Z = s.municipios_lista
              , S = s.departamentos_lista
              , I = s.gallery
              , H = "https://services.datasketch.co/org_sibhumboldt_sibdata_app/?region=".concat(l)
              , K = (0,
            u.useState)("")
              , B = K[0]
              , T = K[1]
              , F = (0,
            u.useState)("")
              , L = F[0]
              , A = F[1]
              , M = (0,
            u.useState)(!0)
              , V = M[0]
              , R = M[1]
              , D = (0,
            u.useState)(!1)
              , q = D[0]
              , G = D[1]
              , W = (0,
            u.useState)("species")
              , J = W[0]
              , Q = W[1]
              , $ = (0,
            er.useRouter)()
              , es = function() {
                localStorage.setItem("publishers", JSON.stringify(Array.isArray(C) ? C.map(function(e) {
                    return (0,
                    c.Z)((0,
                    n.Z)({}, e), {
                        region: l,
                        slug: e.slug_publicador.map(function(e) {
                            return (0,
                            c.Z)((0,
                            n.Z)({}, e), {
                                region: l,
                                slug: e.slug_publicador
                            })
                        })
                    })
                }) : C.publicadores_list)),
                "La Planada" === h.label ? $.push("/mas/publicadores?region=reserva-forestal-la-planada") : "Pialap\xed Pueblo-Viejo" === h.label ? $.push("/mas/publicadores?region=resguardo-indigena-pialapi-pueblo-viejo") : !0 === t ? $.push("/mas/publicadores?region=".concat(l, "&area=").concat(a)) : $.push("/mas/publicadores?region=".concat(l))
            }
              , el = function(e) {
                T(e.target.value)
            }
              , ea = function(e) {
                A(e.target.value)
            }
              , ei = function() {
                R(!0),
                G(!1),
                Q("species")
            }
              , eo = function() {
                R(!1),
                G(!0),
                Q("remarks")
            }
              , ed = function(e) {
                var s = "colombia" === l ? "/".concat(e) : "/".concat(l, "/").concat(e);
                window.open(s, "_blank", "noopener,noreferrer")
            };
            return (0,
            r.jsxs)(r.Fragment, {
                children: [0 !== I.length && (0,
                r.jsx)(P, {
                    gallery: I
                }), (0,
                r.jsx)("div", {
                    className: "bg-white-3 pt-3 my-3",
                    children: (0,
                    r.jsx)("div", {
                        className: "mx-auto w-10/12 max-w-screen-2xl",
                        children: (0,
                        r.jsx)(Y.Z, {
                            dots: !0,
                            infinite: !0,
                            slidestoshow: 1,
                            responsiveSlidesToShow: 1,
                            children: z.map(function(e, s) {
                                return (0,
                                r.jsx)(et, {
                                    data: e,
                                    region: h.label,
                                    municipalityflag: t,
                                    parentlabel: h.parent_label
                                }, s)
                            })
                        })
                    })
                }), 0 !== N.length && 0 !== y.length && (0,
                r.jsx)("div", {
                    className: "py-10 bg-white-2",
                    children: (0,
                    r.jsx)("div", {
                        className: "mx-auto w-10/12 max-w-screen-2xl",
                        children: (0,
                        r.jsxs)(X, {
                            tree: N,
                            search: y,
                            children: [(0,
                            r.jsxs)(X.Title, {
                                children: [(0,
                                r.jsxs)("p", {
                                    className: "3xl:text-lg",
                                    children: ["Conoce las cifras de ", h.label, " por"]
                                }), (0,
                                r.jsx)("h2", {
                                    className: "font-black font-inter text-3xl 3xl:text-4xl",
                                    children: "Tem\xe1ticas"
                                })]
                            }), (0,
                            r.jsx)(X.Tree, {
                                className: "relative mt-[45.52px]",
                                slidestoshow: 4
                            }), (0,
                            r.jsx)(X.Breadcrumb, {
                                className: "bg-white w-full flex items-center gap-x-2 mt-5 pl-5"
                            }), (0,
                            r.jsx)(X.Body, {
                                children: function(e, s, a) {
                                    return "colombia" === l ? (0,
                                    r.jsx)(en, {
                                        slugregion: l,
                                        info: s,
                                        selected: e,
                                        updateBreadcrumb: a,
                                        region: h.label
                                    }) : (0,
                                    r.jsx)(O, {
                                        slugregion: l,
                                        parentlabel: ["La Planada", "Pialap\xed Pueblo-Viejo"].includes(h.label) ? h.label : h.parent_label,
                                        info: s,
                                        selected: e,
                                        updateBreadcrumb: a,
                                        region: h.label,
                                        municipalityflag: t,
                                        especiesObservadas: h.especies_region_total
                                    })
                                }
                            })]
                        })
                    })
                }), (0,
                r.jsx)("div", {
                    className: "py-10 bg-white-2",
                    children: (0,
                    r.jsx)("div", {
                        className: "mx-auto w-10/12 max-w-screen-2xl",
                        children: (0,
                        r.jsxs)(X, {
                            tree: j,
                            search: b,
                            children: [(0,
                            r.jsxs)(X.Title, {
                                children: [(0,
                                r.jsxs)("p", {
                                    className: "3xl:text-lg",
                                    children: ["Conoce las cifras de ", h.label, " por"]
                                }), (0,
                                r.jsx)("h2", {
                                    className: "font-black font-inter text-3xl 3xl:text-4xl",
                                    children: "Grupos Biol\xf3gicos"
                                })]
                            }), (0,
                            r.jsx)(X.Tree, {
                                className: "relative mt-[45.52px]"
                            }), (0,
                            r.jsx)(X.Breadcrumb, {
                                className: "bg-white w-full flex items-center gap-x-2 mt-5 pl-5"
                            }), (0,
                            r.jsx)(X.Body, {
                                children: function(e, s) {
                                    return (0,
                                    r.jsx)(U, {
                                        slug: l,
                                        selected: e,
                                        info: s,
                                        parentlabel: h.parent_label,
                                        region: h.label,
                                        observadasCol: h.especies_region_total,
                                        municipalityflag: t
                                    })
                                }
                            })]
                        })
                    })
                }), 0 !== _.length && f && 0 !== f.length && (0,
                r.jsx)("div", {
                    className: "py-10 bg-white-2",
                    children: (0,
                    r.jsx)("div", {
                        className: "mx-auto w-10/12 max-w-screen-2xl",
                        children: (0,
                        r.jsxs)(X, {
                            tree: _,
                            search: f,
                            children: [(0,
                            r.jsxs)(X.Title, {
                                children: [(0,
                                r.jsxs)("p", {
                                    className: "3xl:text-lg",
                                    children: ["Conoce las cifras de ", h.label, " por"]
                                }), (0,
                                r.jsx)("h2", {
                                    className: "font-black font-inter text-3xl 3xl:text-4xl",
                                    children: "Grupos de inter\xe9s"
                                })]
                            }), (0,
                            r.jsx)(X.Tree, {
                                className: "relative mt-[45.52px]"
                            }), (0,
                            r.jsx)(X.Breadcrumb, {
                                className: "bg-white w-full flex items-center gap-x-2 mt-5 pl-5"
                            }), (0,
                            r.jsx)(X.Body, {
                                children: function(e, s) {
                                    return (0,
                                    r.jsx)(U, {
                                        slug: l,
                                        selected: e,
                                        info: s,
                                        parentlabel: h.parent_label,
                                        region: h.label,
                                        observadasCol: h.especies_region_total,
                                        municipalityflag: t
                                    })
                                }
                            })]
                        })
                    })
                }), 0 !== E.length && 0 !== w.length && (0,
                r.jsx)("div", {
                    className: "py-10 bg-white-2",
                    children: (0,
                    r.jsx)("div", {
                        className: "mx-auto w-10/12 max-w-screen-2xl",
                        children: (0,
                        r.jsxs)(X, {
                            tree: w,
                            search: E,
                            initialSelected: "Municipios",
                            initialSelectedValue: "municipios",
                            children: [(0,
                            r.jsxs)(X.Title, {
                                children: [(0,
                                r.jsxs)("p", {
                                    className: "3xl:text-lg",
                                    children: ["Conoce las cifras de ", h.label, " por"]
                                }), "Colombia" === h.label ? (0,
                                r.jsx)("h2", {
                                    className: "font-black font-inter text-3xl 3xl:text-4xl",
                                    children: "Departamentos"
                                }) : (0,
                                r.jsx)("h2", {
                                    className: "font-black font-inter text-3xl 3xl:text-4xl",
                                    children: "Municipios"
                                })]
                            }), (0,
                            r.jsx)(X.Breadcrumb, {
                                className: "bg-white w-full flex items-center gap-x-2 mt-5 pl-5"
                            }), (0,
                            r.jsx)(X.Body, {
                                children: function(e, s) {
                                    return (0,
                                    r.jsx)("div", {
                                        className: "bg-white pt-5",
                                        children: (0,
                                        r.jsxs)(r.Fragment, {
                                            children: [(0,
                                            r.jsx)("div", {
                                                className: "py-3 w-2/5 mx-auto",
                                                children: "Colombia" === h.label ? (0,
                                                r.jsxs)(o.Z, {
                                                    fullWidth: !0,
                                                    children: [(0,
                                                    r.jsx)(d.Z, {
                                                        id: "select-departamentos",
                                                        children: "Departamentos"
                                                    }), (0,
                                                    r.jsx)(x.Z, {
                                                        labelId: "select-departamentos",
                                                        id: "demo-select-departamentos",
                                                        label: null == s ? void 0 : s.label,
                                                        value: L,
                                                        onChange: ea,
                                                        children: null == S ? void 0 : S.map(function(e, s) {
                                                            return (0,
                                                            r.jsx)(m.Z, {
                                                                onClick: function() {
                                                                    return ed(e.slug)
                                                                },
                                                                children: e.label
                                                            }, s)
                                                        })
                                                    })]
                                                }) : (0,
                                                r.jsxs)(o.Z, {
                                                    fullWidth: !0,
                                                    children: [(0,
                                                    r.jsx)(d.Z, {
                                                        id: "select-municipios",
                                                        children: "Municipios"
                                                    }), (0,
                                                    r.jsx)(x.Z, {
                                                        labelId: "select-municipios",
                                                        id: "demo-select-municipios",
                                                        label: null == s ? void 0 : s.label,
                                                        value: B,
                                                        onChange: el,
                                                        children: null == Z ? void 0 : Z.map(function(e, s) {
                                                            return (0,
                                                            r.jsx)(m.Z, {
                                                                onClick: function() {
                                                                    return ed(e.slug)
                                                                },
                                                                children: e.label
                                                            }, s)
                                                        })
                                                    })]
                                                })
                                            }), (0,
                                            r.jsxs)("div", {
                                                children: ["Colombia" === h.label ? (0,
                                                r.jsxs)("div", {
                                                    className: "flex flex-row justify-center items-center gap-3",
                                                    children: [(0,
                                                    r.jsx)("button", {
                                                        className: "rounded-md py-2 px-4 ".concat("species" === J ? "bg-dartmouth-green text-white" : "text-black border border-black"),
                                                        onClick: ei,
                                                        children: "Especies por departamento"
                                                    }), (0,
                                                    r.jsx)("button", {
                                                        className: "rounded-md py-2 px-4 ".concat("remarks" === J ? "bg-dartmouth-green text-white" : "text-black border border-black"),
                                                        onClick: eo,
                                                        children: "Observaciones por departamento"
                                                    })]
                                                }) : (0,
                                                r.jsxs)("div", {
                                                    className: "flex flex-row justify-center items-center gap-3",
                                                    children: [(0,
                                                    r.jsx)("button", {
                                                        className: "rounded-md py-2 px-4 ".concat("species" === J ? "bg-dartmouth-green text-white" : "text-black border border-black"),
                                                        onClick: ei,
                                                        children: "Especies por municipio"
                                                    }), (0,
                                                    r.jsx)("button", {
                                                        className: "rounded-md py-2 px-4 ".concat("remarks" === J ? "bg-dartmouth-green text-white" : "text-black border border-black"),
                                                        onClick: eo,
                                                        children: "Observaciones por municipio"
                                                    })]
                                                }), V && E && (0,
                                                r.jsx)(r.Fragment, {
                                                    children: (0,
                                                    r.jsx)("div", {
                                                        className: "mt-3 h-[600px]",
                                                        children: (0,
                                                        r.jsx)(ex, {
                                                            data: v,
                                                            isScale: p
                                                        })
                                                    })
                                                }), q && E && (0,
                                                r.jsx)(r.Fragment, {
                                                    children: (0,
                                                    r.jsx)("div", {
                                                        className: "mt-3 h-[600px]",
                                                        children: (0,
                                                        r.jsx)(em, {
                                                            data: v,
                                                            isScale: p
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                }
                            })]
                        })
                    })
                }), (0,
                r.jsx)("div", {
                    className: "py-10 bg-white-smoke",
                    children: (0,
                    r.jsxs)("div", {
                        className: "mx-auto w-10/12 max-w-screen-2xl",
                        children: [(0,
                        r.jsxs)("div", {
                            className: "space-y-2.5",
                            children: [(0,
                            r.jsxs)("h2", {
                                className: "font-black font-inter text-3xl 3xl:text-4xl",
                                children: ["Publicadores de ", h.label]
                            }), (0,
                            r.jsx)("div", {
                                className: "h-0.5 bg-gradient-to-r from-dartmouth-green to-yellow-green"
                            })]
                        }), (0,
                        r.jsxs)("div", {
                            className: "py-4 space-y-5",
                            children: [(0,
                            r.jsx)(ec.Z, {
                                total: Array.isArray(C) ? C : C.publicadores_list,
                                data: Array.isArray(C) ? C : C.publicadores_tipo,
                                region: h
                            }), (0,
                            r.jsx)(Y.Z, {
                                slidesToScroll: 4,
                                slidestoshow: 4,
                                children: Array.isArray(C) ? C.map(function(e, s) {
                                    return (0,
                                    r.jsx)("div", {
                                        className: "px-2",
                                        children: (0,
                                        r.jsx)(ee.Z, {
                                            link: e.url_socio,
                                            truncate: !0,
                                            title: e.label,
                                            imagePath: e.url_logo || "/images/un-icon.png",
                                            totalEspecies: e.especies,
                                            observationsQuantity: e.registros,
                                            country: e.pais_publicacion
                                        })
                                    }, s)
                                }) : C.publicadores_list.map(function(e, s) {
                                    return (0,
                                    r.jsx)("div", {
                                        className: "px-2",
                                        children: (0,
                                        r.jsx)(ee.Z, {
                                            link: e.url_socio,
                                            truncate: !0,
                                            title: e.label,
                                            imagePath: e.url_logo || "/images/un-icon.png",
                                            totalEspecies: e.especies,
                                            observationsQuantity: e.registros,
                                            country: e.pais_publicacion
                                        })
                                    }, s)
                                })
                            })]
                        }), (0,
                        r.jsx)("div", {
                            className: "text-center",
                            children: (0,
                            r.jsx)("button", {
                                className: "inline-block border border-burnham rounded-full py-1.5 px-5 hover:shadow-default hover:text-blue-green hover:border-none",
                                onClick: function() {
                                    return es()
                                },
                                children: "Todos los publicadores"
                            })
                        })]
                    })
                }), (0,
                r.jsx)("div", {
                    className: "py-10 mx-auto w-10/12 max-w-screen-xl",
                    children: (0,
                    r.jsx)("div", {
                        className: "mx-auto max-w-md text-center",
                        children: (0,
                        r.jsxs)("div", {
                            className: "space-y-6",
                            children: [(0,
                            r.jsxs)("h2", {
                                className: "font-black font-lato text-3xl 3xl:text-4xl",
                                children: ["Explora ", h.label]
                            }), (0,
                            r.jsx)("p", {
                                className: "3xl:text-lg",
                                children: "Utiliza nuestro explorador para visualizar las tablas completas de informaci\xf3n y explorar con m\xfaltiples cruces y gr\xe1ficos la informaci\xf3n disponible para esta regi\xf3n."
                            }), (0,
                            r.jsxs)("details", {
                                children: [(0,
                                r.jsxs)("summary", {
                                    className: "mx-auto md:w-4/6 flex justify-center items-center gap-x-2 border border-black rounded-full py-2 cursor-pointer",
                                    children: [(0,
                                    r.jsx)("p", {
                                        children: "C\xf3mo funciona esta herramienta"
                                    }), (0,
                                    r.jsx)("img", {
                                        className: "rotate-90",
                                        src: "/images/arrow-black.svg",
                                        alt: "arrow app"
                                    })]
                                }), (0,
                                r.jsx)("div", {
                                    className: "mt-4",
                                    children: (0,
                                    r.jsx)("p", {
                                        className: "text-left",
                                        children: "En la barra de la izquierda puedes seleccionar diferentes valores para los datos, si los quieres ver por registros o especies o filtrarlos para cada una de las tem\xe1ticas de especies amenazadas, objeto de comercio, etc. En el panel de la derecha puedes ver los resultados como tablas o gr\xe1ficos dependiendo de las opciones que selecciones."
                                    })
                                })]
                            })]
                        })
                    })
                }), (0,
                r.jsx)("div", {
                    children: (0,
                    r.jsx)("iframe", {
                        src: H,
                        className: "h-screen w-full"
                    })
                }), 0 !== k.length && (0,
                r.jsx)("div", {
                    className: "py-10 bg-white",
                    children: (0,
                    r.jsx)("div", {
                        className: "mx-auto w-10/12 lg:w-9/12 max-w-screen-xl",
                        children: (0,
                        r.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8",
                            children: [(0,
                            r.jsx)("p", {
                                className: "font-bold text-lg 3xl:text-xl",
                                children: "Con el apoyo de"
                            }), k.map(function(e, s) {
                                return (0,
                                r.jsx)("a", {
                                    href: e.url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": e.titulo,
                                    children: e.imagen ? (0,
                                    r.jsx)("img", {
                                        className: "h-28 w-28 mx-auto",
                                        src: e.imagen,
                                        alt: e.titulo
                                    }) : (0,
                                    r.jsx)("div", {
                                        className: "font-bold",
                                        children: e.titulo
                                    })
                                }, s)
                            })]
                        })
                    })
                })]
            })
        }
    },
    15729: function(e, s, l) {
        l.d(s, {
            Z: function() {
                return o
            }
        });
        var a = l(26042)
          , i = l(69396)
          , t = l(85893)
          , n = l(46066);
        function c(e) {
            var s = e.className
              , l = e.style
              , n = e.onClick
              , c = e.imagePath;
            return (0,
            t.jsx)("button", {
                className: s,
                style: (0,
                i.Z)((0,
                a.Z)({}, l), {
                    left: "-50px",
                    width: "32px",
                    height: "30px"
                }),
                onClick: n,
                children: (0,
                t.jsx)("img", {
                    src: c
                })
            })
        }
        function r(e) {
            var s = e.className
              , l = e.style
              , n = e.onClick
              , c = e.imagePath;
            return (0,
            t.jsx)("button", {
                className: s || "",
                style: (0,
                i.Z)((0,
                a.Z)({}, l), {
                    right: "-50px",
                    width: "32px",
                    height: "30px"
                }),
                onClick: n,
                children: (0,
                t.jsx)("img", {
                    src: c
                })
            })
        }
        function o(e) {
            var s = e.children
              , l = e.dots
              , o = e.infinite
              , d = void 0 !== o && o
              , x = e.slidestoshow
              , m = e.slidesToScroll
              , u = e.responsiveSlidesToShow
              , g = {
                prevButton: "/images/arrow-left-carousel.svg",
                nextButton: "/images/arrow-right-carousel.svg"
            }
              , p = {
                dots: void 0 !== l && l,
                nextArrow: (0,
                t.jsx)(r, {
                    imagePath: g.nextButton
                }),
                prevArrow: (0,
                t.jsx)(c, {
                    imagePath: g.prevButton
                }),
                infinite: d,
                speed: 500,
                slidesToShow: void 0 === x ? 1 : x,
                slidesToScroll: void 0 === m ? 1 : m,
                initialSlide: 0,
                responsive: [{
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: d
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: u || 2,
                        slidesToScroll: 1,
                        initialSlide: 0,
                        infinite: d
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: u || 3,
                        slidesToScroll: 1,
                        infinite: d
                    }
                }]
            };
            return (0,
            t.jsx)(n.Z, (0,
            i.Z)((0,
            a.Z)({}, p), {
                children: s
            }))
        }
        l(98322),
        l(98745)
    },
    31047: function(e, s, l) {
        var a = l(85893)
          , i = l(68966)
          , t = l(45697)
          , n = l.n(t)
          , c = l(45772)
          , r = l(88353)
          , o = l(93967)
          , d = l.n(o)
          , x = l(28017)
          , m = l(67294);
        function u(e) {
            var s = e.slug
              , l = e.title
              , t = e.description
              , n = e.imageMap
              , o = e.especiesEstimadas
              , u = e.especiesObservadas
              , g = e.marine
              , p = void 0 !== g && g
              , v = e.municipality
              , h = e.referencia
              , b = e.photoLabel
              , f = (e.isScale,
            e.map,
            e.imageSmallDpto)
              , j = (0,
            m.useState)(1e3)
              , _ = j[0]
              , N = j[1];
            return (0,
            m.useEffect)(function() {
                return window.addEventListener("resize", function() {
                    N(window.innerWidth)
                }),
                function() {
                    window.removeEventListener("resize", function() {
                        N(window.innerWidth)
                    })
                }
            }, []),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: d()("bg-cover bg-center pt-8 lg:pt-14 pb-3.5 h-[550px] "),
                    style: {
                        backgroundImage: 'url("/images/banner-principales/santander.jpg")'
                    },
                    children: (0,
                    a.jsxs)("div", {
                        className: "w-full max-w-screen-2xl mx-auto",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "min-h-[210px] mt-4 lg:mt-5 flex md:justify-between items-center w-10/12 mx-auto",
                            children: [(0,
                            a.jsx)("div", {
                                className: d()("font-black lg:w-2/3 font-inter text-white text-6xl", (null == l ? void 0 : l.length) >= 17 ? "lg:text-[66px]" : "lg:text-7xl"),
                                children: l
                            }), ["colombia", "boyaca", "narino", "santander", "tolima"].includes(s) ? n && (0,
                            a.jsx)("div", {
                                className: "hidden md:flex justify-end ",
                                children: (0,
                                a.jsx)("img", {
                                    className: "h-40 min-w-[240px] md:w-4/5",
                                    src: "/" + n
                                })
                            }) : (0,
                            a.jsx)("div", {
                                className: "relative",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "flex flex-row mt-10 px-7",
                                    children: [(0,
                                    a.jsx)("div", {
                                        children: (0,
                                        a.jsx)("img", {
                                            className: "h-40 min-w-[240px] md:w-4/5",
                                            src: "/" + f
                                        })
                                    }), (0,
                                    a.jsx)("div", {
                                        className: "w-14 h-[123px]",
                                        children: (0,
                                        a.jsx)("img", {
                                            src: "/images/mapa-co.svg",
                                            alt: "mapa-co"
                                        })
                                    })]
                                })
                            })]
                        }), (0,
                        a.jsxs)("div", {
                            className: "flex flex-col md:flex-row max-h-48 justify-between gap-y-4 w-10/12 mx-auto -mt-9 md:-mt-0",
                            children: [void 0 !== v && v || "bogota-dc" === s || "san-andres-y-providencia" === s ? (0,
                            a.jsxs)("div", {
                                className: "text-yellow-green mx-auto flex flex-col justify-center gap-x-4",
                                children: [(0,
                                a.jsx)("span", {
                                    className: "text-lg lg:text-4xl font-black font-inter",
                                    children: (0,
                                    i._H)(u)
                                }), (0,
                                a.jsxs)("div", {
                                    children: [(0,
                                    a.jsx)("span", {
                                        className: "font-lato text-sm lg:text-lg",
                                        children: "Especies observadas"
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "flex gap-x-2 pt-1.5",
                                        children: [(0,
                                        a.jsx)("img", {
                                            className: "h-4 w-10",
                                            src: "/images/icons/icon-green-continentales.svg"
                                        }), p && (0,
                                        a.jsx)("img", {
                                            className: "h-4 w-10",
                                            src: "/images/icons/icon-green-marinas.svg"
                                        })]
                                    })]
                                })]
                            }) : (0,
                            a.jsxs)("div", {
                                className: "w-1/2 relative flex items-center",
                                children: [(0,
                                a.jsx)(r.Z, {
                                    inner: u,
                                    outer: o,
                                    movil: _ < 450
                                }), (0,
                                a.jsxs)("div", {
                                    className: d()(_ < 450 ? "left-[11.5rem]" : "left-[15rem]", "absolute w-full md:w-1/3 lg:w-full  text-white flex -space-y-1 flex-col -top-[9%]  lg:-top-[8%] left-[15rem] md:left-60"),
                                    children: [(0,
                                    a.jsx)("span", {
                                        className: "font-inter font-black lg:text-xl",
                                        children: (0,
                                        i._H)(o)
                                    }), (0,
                                    a.jsxs)("p", {
                                        className: "font-lato text-sm lg:text-base",
                                        children: ["Especies estimadas", h && (0,
                                        a.jsx)(x.Z, {
                                            classname: "inline-flex ml-0.5",
                                            place: "right",
                                            label: h,
                                            src: "/images/icons/icon-information.svg",
                                            id: "ref"
                                        })]
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: d()(_ < 450 ? "left-[11.5rem]" : "left-[15rem]", "absolute text-yellow-green flex flex-col -space-y-1 w-full md:w-1/3 lg:w-full top-[38%] md:top-[40%] lg:top-[35%]  md:left-60"),
                                    children: [(0,
                                    a.jsx)("span", {
                                        className: "text-lg lg:text-4xl font-black font-inter",
                                        children: (0,
                                        i._H)(u)
                                    }), (0,
                                    a.jsx)("span", {
                                        className: "font-lato text-sm lg:text-lg",
                                        children: "Especies observadas"
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "flex gap-x-2 pt-1.5",
                                        children: [(0,
                                        a.jsx)("img", {
                                            className: "h-4 w-10",
                                            src: "/images/icons/icon-green-continentales.svg"
                                        }), p && (0,
                                        a.jsx)("img", {
                                            className: "h-4 w-10",
                                            src: "/images/icons/icon-green-marinas.svg"
                                        })]
                                    })]
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "md:w-1/2 my-auto h-40 border-t-2 md:border-l-2 md:border-t-0 border-yellow-green border-dotted flex items-center py-2.5",
                                children: (0,
                                a.jsx)(c.D, {
                                    className: "text-white text-sm lg:text-base w-10/12 mx-auto",
                                    children: t
                                })
                            })]
                        })]
                    })
                }), b && (0,
                a.jsx)("div", {
                    className: "max-w-screen-xl w-9/12 mx-auto flex justify-end relative",
                    children: (0,
                    a.jsx)("div", {
                        className: "absolute -top-10 flex gap-2",
                        children: b && (0,
                        a.jsx)(x.Z, {
                            label: b,
                            src: "/images/camera-icon.svg",
                            id: "photo"
                        })
                    })
                })]
            })
        }
        u.propTypes = {
            title: n().string.isRequired,
            imageMap: n().string
        },
        s.Z = u
    }
}]);
