"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[42], {
    44984: function(e, a, t) {
        t.d(a, {
            Z: function() {
                return f
            }
        });
        var s = t(85893)
          , l = t(29009)
          , i = t(81742)
          , n = t(34816)
          , c = t(43815)
          , o = t(26050)
          , r = t(33558)
          , d = t(68966);
        function f(e) {
            var a = e.total
              , t = e.data
              , f = (e.region,
            e.router)
              , x = a.length
              , u = t.find(function(e) {
                return "Internacional" === e.tipo_organizacion
            })
              , p = u ? u.n_tipo : 0
              , h = t.reduce(function(e, a) {
                return "Internacional" !== a.tipo_organizacion ? e + a.n_tipo : e
            }, 0)
              , m = t.map(function(e) {
                return {
                    name: e.tipo_organizacion,
                    value: 100 * e.pct_tipo,
                    label: e.n_tipo
                }
            })
              , b = t.map(function(e) {
                return {
                    name: e.tipo_organizacion,
                    value: 100 * e.pct_tipo_obs,
                    label: e.n_tipo_obs
                }
            })
              , g = ["#5151F2", "#00AFFF", "#4AD3AC", "#F26330", "#FFD150", "#FFE0BB", "#163875", "#161B33"]
              , w = {
                top: "50%",
                right: 0,
                transform: "translate(0, -50%)",
                lineHeight: "20px",
                fontSize: "15px",
                paddingLeft: "15px"
            }
              , j = function(e) {
                var a = e.payload;
                return (0,
                s.jsx)("ul", {
                    children: a.map(function(e, a) {
                        return (0,
                        s.jsxs)("li", {
                            className: "flex items-center gap-1",
                            children: [(0,
                            s.jsx)("span", {
                                style: {
                                    color: e.color,
                                    fontSize: "22px"
                                },
                                children: "●"
                            }), e.value]
                        }, "item-".concat(a))
                    })
                })
            }
              , v = function(e) {
                var a = e.active
                  , t = e.payload;
                if (a && t && t.length) {
                    var l = t[0].payload.name
                      , i = t[0].payload.label;
                    return (0,
                    s.jsxs)("div", {
                        className: "bg-white p-1.5 rounded shadow-lg w-3/3",
                        children: [(0,
                        s.jsxs)("p", {
                            className: "label text-xs font-semibold italic",
                            children: ["Tipo de organizaci\xf3n: ", (0,
                            s.jsx)("span", {
                                className: "text-xs font-normal not-italic",
                                children: "".concat(l)
                            })]
                        }), (0,
                        s.jsxs)("p", {
                            className: "text-xs font-semibold italic",
                            children: ["Cantidad de publicadores: ", (0,
                            s.jsx)("span", {
                                className: "text-xs font-normal not-italic",
                                children: "".concat((0,
                                d._H)(i), " (").concat(t[0].value.toFixed(0), "%)")
                            })]
                        })]
                    })
                }
                return null
            }
              , N = function(e) {
                var a = e.active
                  , t = e.payload;
                if (a && t && t.length) {
                    var l = t[0].payload.name
                      , i = t[0].payload.label;
                    return (0,
                    s.jsxs)("div", {
                        className: "bg-white p-1.5 rounded shadow-lg w-2/3",
                        children: [(0,
                        s.jsxs)("p", {
                            className: "text-xs font-semibold italic",
                            children: ["Tipo de organizaci\xf3n: ", (0,
                            s.jsx)("span", {
                                className: "text-xs font-normal not-italic",
                                children: "".concat(l)
                            })]
                        }), (0,
                        s.jsxs)("p", {
                            className: "text-xs font-semibold italic",
                            children: ["Cantidad de observaciones: ", (0,
                            s.jsx)("span", {
                                className: "text-xs font-normal not-italic",
                                children: "".concat((0,
                                d._H)(i), " (").concat(t[0].value.toFixed(0), "%)")
                            })]
                        })]
                    })
                }
                return null
            };
            return (0,
            s.jsxs)("div", {
                className: "".concat("/mas/publicadores" === f ? "flex flex-row gap-3 mt-10" : "flex flex-row gap-5", " "),
                children: [(0,
                s.jsxs)("div", {
                    className: "".concat("/mas/publicadores" === f ? "bg-white flex flex-col text-black-2 p-2 shadow-default hover:shadow-select w-[280px]" : "bg-white flex flex-col text-black-2 py-6 px-7 shadow-default hover:shadow-select w-[500px]", " "),
                    children: [(0,
                    s.jsx)("h2", {
                        className: "text-xl font-bold",
                        children: "Total de publicadores"
                    }), (0,
                    s.jsx)("div", {
                        className: "w-full mt-4 flex flex-col justify-center items-center",
                        children: (0,
                        s.jsxs)("div", {
                            className: "w-full flex flex-col justify-center items-center h-full space-y-5",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "pt-2 w-full bg-gray-2 flex flex-col justify-center items-center",
                                children: [(0,
                                s.jsx)("p", {
                                    className: "text-black font-black text-3xl",
                                    children: h
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-black text-xl",
                                    children: "Nacionales"
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "pt-2 flex flex-col justify-center items-center",
                                children: [(0,
                                s.jsx)("p", {
                                    className: "font-black text-3xl",
                                    children: p
                                }), (0,
                                s.jsx)("p", {
                                    className: "text-xl",
                                    children: "Internacionales"
                                })]
                            }), (0,
                            s.jsx)("div", {
                                className: "w-full bg-gray-2 px-3 flex justify-end items-center",
                                children: (0,
                                s.jsxs)("h3", {
                                    className: "text-lg italic",
                                    children: ["Total: ", x]
                                })
                            })]
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "".concat("/mas/publicadores" === f ? "bg-white flex flex-col text-black-2 p-2 shadow-default hover:shadow-select w-[521px]" : "bg-white flex flex-col justify-between text-black-2 py-3 px-4 gap-y-2 shadow-default hover:shadow-select w-[521px]", " "),
                    children: [(0,
                    s.jsx)("h2", {
                        className: "text-xl font-bold",
                        children: "Publicadores por tipo de organizaci\xf3n"
                    }), (0,
                    s.jsx)(l.h, {
                        width: "100%",
                        height: "100%",
                        className: "mt-6",
                        children: (0,
                        s.jsxs)(i.u, {
                            width: 200,
                            height: 200,
                            className: "left-0",
                            children: [(0,
                            s.jsx)(n.b, {
                                data: m,
                                cx: "50%",
                                cy: "50%",
                                labelLine: !1,
                                outerRadius: 70,
                                fill: "#8884d8",
                                dataKey: "value",
                                className: "text-xs",
                                children: m.map(function(e, a) {
                                    return (0,
                                    s.jsx)(c.b, {
                                        fill: g[a % g.length]
                                    }, "cell-".concat(a))
                                })
                            }), (0,
                            s.jsx)(o.u, {
                                content: (0,
                                s.jsx)(v, {})
                            }), (0,
                            s.jsx)(r.D, {
                                iconSize: 9,
                                layout: "vertical",
                                verticalAlign: "middle",
                                wrapperStyle: w,
                                align: "right",
                                iconType: "circle",
                                content: j
                            })]
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "".concat("/mas/publicadores" === f ? "bg-white flex flex-col text-black-2 p-2 shadow-default hover:shadow-select w-[521px]" : "bg-white flex flex-col justify-between text-black-2 py-3 px-4 gap-y-2 shadow-default hover:shadow-select w-[521px]", " "),
                    children: [(0,
                    s.jsx)("h2", {
                        className: "text-xl font-bold",
                        children: "Observaciones aportadas por tipo de organizaci\xf3n"
                    }), (0,
                    s.jsx)(l.h, {
                        width: "100%",
                        height: "100%",
                        className: "",
                        children: (0,
                        s.jsxs)(i.u, {
                            width: 200,
                            height: 300,
                            className: "left-0",
                            children: [(0,
                            s.jsx)(n.b, {
                                data: b,
                                cx: "50%",
                                cy: "50%",
                                labelLine: !1,
                                outerRadius: 70,
                                fill: "#8884d8",
                                dataKey: "value",
                                className: "text-xs",
                                children: b.map(function(e, a) {
                                    return (0,
                                    s.jsx)(c.b, {
                                        fill: g[a % g.length]
                                    }, "cell-".concat(a))
                                })
                            }), (0,
                            s.jsx)(o.u, {
                                content: (0,
                                s.jsx)(N, {})
                            }), (0,
                            s.jsx)(r.D, {
                                iconSize: 10,
                                layout: "vertical",
                                verticalAlign: "middle",
                                wrapperStyle: w,
                                align: "right",
                                iconType: "circle",
                                content: j
                            })]
                        })
                    })]
                })]
            })
        }
    },
    28017: function(e, a, t) {
        var s = t(85893)
          , l = t(93967)
          , i = t.n(l)
          , n = t(38735)
          , c = t(45772)
          , o = function(e) {
            var a = e.label
              , t = e.src
              , l = e.id
              , o = e.classname;
            return e.place,
            (0,
            s.jsxs)("div", {
                className: i()("bg-opacity-30 bg-white rounded-full p-1  max", o),
                children: [(0,
                s.jsx)("a", {
                    "data-for": l,
                    "data-tip": !0,
                    "data-event": "mouseenter",
                    children: (0,
                    s.jsx)("img", {
                        className: "w-4 h-4",
                        src: t,
                        alt: "icon info"
                    })
                }), (0,
                s.jsx)(n.Z, {
                    id: l,
                    eventOff: "mouseleave",
                    arrowColor: "transparent",
                    arrowSize: 0,
                    backgroundColor: "#fff",
                    textColor: "#000",
                    className: "tooltip",
                    clickable: !0,
                    children: (0,
                    s.jsx)(c.D, {
                        linkTarget: "_blank",
                        className: "rc-markdown ",
                        children: a
                    })
                })]
            })
        };
        a.Z = o
    },
    89157: function(e, a, t) {
        t.d(a, {
            Z: function() {
                return c
            }
        });
        var s = t(85893)
          , l = t(93967)
          , i = t.n(l)
          , n = t(68966);
        function c(e) {
            var a = e.truncate
              , t = e.country
              , l = e.title
              , c = e.observationsQuantity
              , o = e.totalEspecies
              , r = e.imagePath
              , d = e.link;
            return (0,
            s.jsxs)("div", {
                className: "bg-white flex flex-col justify-between text-black-2 py-3 px-4 w-auto gap-y-2 shadow-default hover:shadow-select",
                children: [(0,
                s.jsxs)("div", {
                    className: "flex items-end justify-between",
                    children: [(0,
                    s.jsxs)("p", {
                        className: "text-sm italic",
                        children: ["Pa\xeds de publicaci\xf3n: ", t]
                    }), (0,
                    s.jsx)("img", {
                        className: "w-14 h-14 break-words",
                        src: r,
                        alt: "".concat(l, " image")
                    })]
                }), (0,
                s.jsx)("div", {
                    title: l,
                    className: i()("font-lato  font-bold text-[15px] 3xl:text-lg w-auto mt-1", void 0 !== a && a && "truncate"),
                    children: (0,
                    s.jsx)("a", {
                        href: d || "#",
                        target: "_blank",
                        rel: "noreferrer",
                        children: l
                    })
                }), (0,
                s.jsx)("div", {
                    className: "flex flex-col w-auto justify-between gap-y-2",
                    children: (0,
                    s.jsx)("table", {
                        className: "w-full ",
                        children: (0,
                        s.jsxs)("tbody", {
                            children: [(0,
                            s.jsxs)("tr", {
                                className: "text-sm",
                                children: [(0,
                                s.jsx)("th", {
                                    className: "text-left bg-gray-2",
                                    children: "Observaciones"
                                }), (0,
                                s.jsx)("th", {
                                    className: "pl-3 border-l border-l-black bg-gray-2",
                                    children: (0,
                                    s.jsx)("b", {
                                        children: (0,
                                        n._H)(c)
                                    })
                                })]
                            }), (0,
                            s.jsxs)("tr", {
                                className: "text-sm",
                                children: [(0,
                                s.jsx)("th", {
                                    className: "text-left",
                                    children: "Especies"
                                }), (0,
                                s.jsx)("th", {
                                    className: "pl-3 border-l border-l-black",
                                    children: (0,
                                    s.jsx)("b", {
                                        children: (0,
                                        n._H)(o)
                                    })
                                })]
                            })]
                        })
                    })
                })]
            })
        }
    },
    68966: function(e, a, t) {
        t.d(a, {
            GH: function() {
                return n
            },
            Kf: function() {
                return c
            },
            SC: function() {
                return r
            },
            _H: function() {
                return s
            },
            kC: function() {
                return d
            },
            lo: function() {
                return f
            },
            p_: function() {
                return l
            },
            t8: function() {
                return x
            },
            tQ: function() {
                return o
            },
            w6: function() {
                return i
            }
        });
        var s = function(e) {
            return Number.isNaN(+e) ? "-" : new Intl.NumberFormat("es-CO").format(e)
        }
          , l = function(e) {
            return (e.charAt(0).toUpperCase() + e.slice(1)).replace("-", " ")
        }
          , i = function(e, a) {
            return Array.from({
                length: a - e + 1
            }, function(a, t) {
                return t + e
            })
        }
          , n = function(e) {
            var a = e % 10
              , t = e % 100;
            return 1 === a && 11 !== t ? "er" : 2 === a && 12 !== t ? "do" : 3 === a && 13 !== t ? "er" : "to"
        }
          , c = function(e, a) {
            if (!isNaN(e)) {
                var t = (e / a * 100).toFixed(1);
                return "NaN" !== t ? t + "%" : null
            }
        }
          , o = function(e) {
            switch (e) {
            case 1:
                return "#ff2c00";
            case 2:
                return "#ff540f";
            case 3:
                return "#ff6f1f";
            case 4:
                return "#ff852f";
            case 5:
                return "#ff9a40";
            case 6:
                return "#ffad52";
            case 7:
                return "#ffbe67";
            case 8:
                return "#ffcf80";
            case 9:
                return "#ffdf9f";
            case 10:
                return "#ffeec9";
            default:
                return "#515B6A"
            }
        }
          , r = function(e) {
            return "string" == typeof e && "NA" === e ? 0 : +e
        }
          , d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
          , f = [{
            ref_id: "10",
            label: "peces dulceacu\xedcolas"
        }, {
            ref_id: "13",
            label: "mariposas"
        }, {
            ref_id: "41",
            label: "orqu\xeddeas"
        }, {
            ref_id: "42",
            label: "aves"
        }, {
            ref_id: "51",
            label: "plantas"
        }, {
            ref_id: "52",
            label: "anfibios"
        }, {
            ref_id: "53",
            label: "reptiles"
        }, {
            ref_id: "58",
            label: "murci\xe9lagos"
        }, {
            ref_id: "54",
            label: "palmas"
        }, {
            ref_id: "55",
            label: "mam\xedferos"
        }]
          , x = "|                 **Tem\xe1tica**                |                                                                                                                                                                                                                                                                                                                                                                                                                                             **Fuentes**                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                         **Observaci\xf3n**                                                                        |\n|:-------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------------------------------------------------------------------------:|\n| End\xe9micas                                   | -[Lista de especies de peces de agua dulce de Colombia](https://doi.org/10.15472/numrso)  -[Lista de referencia de especies de aves de Colombia](https://doi.org/10.15472/qhsz0p)  -[Lista de mam\xedferos de Colombia](https://doi.org/10.15472/kl1whs)  -[Mariposas de Colombia Lista de chequeo](https://www.butterflycatalogs.com/uploads/1/0/3/2/103240120/checklist_colombia_version1_jun21_2021.pdf)  -[Lista de los Anfibios de Colombia: Referencia en linea](https://www.batrachia.com/) -[Cat\xe1logo de plantas y l\xedquenes de Colombia](https://doi.org/10.15472/7avdhn)  -[Listas de especies de Cole\xf3pteros de Colombia](https://www.gbif.org/dataset/search?publishing_org=2c39be5c-c11e-46d0-bcb4-552f2072d19f)                                                                                                                                                                                | Se sumaron las 7444 de las listas de referencia m\xe1s el n\xfamero de especies encontrados en las listas de referencias m\xe1s la bibliograf\xeda de mariposas y anfibios |\n| Especies amenazadas UICN nacional           | [Lista de especies amenazadas de Colombia](https://doi.org/10.15472/5an5tz)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                |\n| Especies CITES                              | [Especies objeto de Comercio](http://checklist.cites.org)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                |\n| Especies amenazadas UICN global             | [Lista Roja de Especies Amenazadas de la IUCN](https://www.iucnredlist.org/)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Para las amenazadas global solo se suman las 3 categor\xedas de amenaza (CR, EN, VU).                                                                             |\n| Especies ex\xf3ticas                           | [Lista de Especies Ex\xf3ticas de Colombia](https://doi.org/10.15468/yznr8v)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Se excluyen 13 especies Criptog\xe9nica                                                                                                                           |\n| Especies invasoras                          | [Lista de especies ex\xf3ticas invasoras de ccolombia seg\xfan la resoluci\xf3n 0207 de 2010](https://www.minambiente.gov.co/wp-content/uploads/2021/10/Resolucio%CC%81n-0207-de-2010.pdf)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |                                                                                                                                                                |\n| Especies ex\xf3ticas con potencial de invasi\xf3n | -[Lista de Especies Ex\xf3ticas de Colombia](https://doi.org/10.15468/yznr8v)  -[Informaci\xf3n ecol\xf3gica e invasividad de especies ex\xf3ticas prioritarias de flora y fauna de Colombia](http://i2d.humboldt.org.co/ceiba/resource.do?r=lista_colombia_exoticas_2020) -[Fauna ex\xf3tica en el territorio continental e insular colombiano](http://i2d.humboldt.org.co/ceiba/resource.do?r=fauna-invasora_is_2014) -[Especies de plantas invasoras en el territorio continental e insular colombiano](http://i2d.humboldt.org.co/ceiba/resource.do?r=fichas_colombia_flora_invasora) -[Lista de especies de plantas ex\xf3ticas y trasplantadas de Colombia](http://i2d.humboldt.org.co/ceiba/resource.do?r=ls_colombia_plantaeexoticas_2021) -[Registros biol\xf3gicos de plantas ex\xf3ticas con alto potencial de invasi\xf3n en Colombia](http://i2d.humboldt.org.co/ceiba/resource.do?r=rrbb_colombia_flora_invasora) |                                                                                                                                                                |"
    }
}]);
