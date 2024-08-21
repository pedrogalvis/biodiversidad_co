(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[545], {
    57172: function(t, n, e) {
        var r;
        (r = function(t, n, e, r, o, i, u) {
            "use strict";
            function a(t) {
                return t && "object" == typeof t && "default"in t ? t : {
                    default: t
                }
            }
            var c = a(n)
              , l = a(e)
              , s = function(t) {
                if (t && t.__esModule)
                    return t;
                var n = Object.create(null);
                return t && Object.keys(t).forEach(function(e) {
                    if ("default" !== e) {
                        var r = Object.getOwnPropertyDescriptor(t, e);
                        Object.defineProperty(n, e, r.get ? r : {
                            enumerable: !0,
                            get: function() {
                                return t[e]
                            }
                        })
                    }
                }),
                n.default = t,
                Object.freeze(n)
            }(r);
            function f(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n && (r = r.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    })),
                    e.push.apply(e, r)
                }
                return e
            }
            function h(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var e = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? f(Object(e), !0).forEach(function(n) {
                        d(t, n, e[n])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : f(Object(e)).forEach(function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                    })
                }
                return t
            }
            function p(t) {
                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            function d(t, n, e) {
                return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e,
                t
            }
            function v() {
                return (v = Object.assign ? Object.assign.bind() : function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = arguments[n];
                        for (var r in e)
                            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                    }
                    return t
                }
                ).apply(this, arguments)
            }
            function g(t, n) {
                if (null == t)
                    return {};
                var e, r, o = function(t, n) {
                    if (null == t)
                        return {};
                    var e, r, o = {}, i = Object.keys(t);
                    for (r = 0; r < i.length; r++)
                        e = i[r],
                        n.indexOf(e) >= 0 || (o[e] = t[e]);
                    return o
                }(t, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++)
                        e = i[r],
                        n.indexOf(e) >= 0 || Object.prototype.propertyIsEnumerable.call(t, e) && (o[e] = t[e])
                }
                return o
            }
            function m(t, n) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, n) {
                    var e = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != e) {
                        var r, o, i = [], u = !0, a = !1;
                        try {
                            for (e = e.call(t); !(u = (r = e.next()).done) && (i.push(r.value),
                            !n || i.length !== n); u = !0)
                                ;
                        } catch (c) {
                            a = !0,
                            o = c
                        } finally {
                            try {
                                u || null == e.return || e.return()
                            } finally {
                                if (a)
                                    throw o
                            }
                        }
                        return i
                    }
                }(t, n) || function(t, n) {
                    if (t) {
                        if ("string" == typeof t)
                            return y(t, n);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        if ("Object" === e && t.constructor && (e = t.constructor.name),
                        "Map" === e || "Set" === e)
                            return Array.from(t);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))
                            return y(t, n)
                    }
                }(t, n) || function() {
                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function y(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, r = Array(n); e < n; e++)
                    r[e] = t[e];
                return r
            }
            var _ = ["width", "height", "projection", "projectionConfig"]
              , w = s.geoPath
              , b = g(s, ["geoPath"])
              , E = n.createContext()
              , x = function(t) {
                var e = t.width
                  , r = t.height
                  , o = t.projection
                  , i = t.projectionConfig
                  , u = g(t, _)
                  , a = m(i.center || [], 2)
                  , l = a[0]
                  , s = a[1]
                  , f = m(i.rotate || [], 3)
                  , h = f[0]
                  , p = f[1]
                  , d = f[2]
                  , y = m(i.parallels || [], 2)
                  , x = y[0]
                  , M = y[1]
                  , S = i.scale || null
                  , k = n.useMemo(function() {
                    return function(t) {
                        var n = t.projectionConfig
                          , e = void 0 === n ? {} : n
                          , r = t.projection
                          , o = void 0 === r ? "geoEqualEarth" : r
                          , i = t.width
                          , u = t.height;
                        if ("function" == typeof o)
                            return o;
                        var a = b[o]().translate([(void 0 === i ? 800 : i) / 2, (void 0 === u ? 600 : u) / 2]);
                        return [a.center ? "center" : null, a.rotate ? "rotate" : null, a.scale ? "scale" : null, a.parallels ? "parallels" : null].forEach(function(t) {
                            t && (a = a[t](e[t] || a[t]()))
                        }),
                        a
                    }({
                        projectionConfig: {
                            center: l || 0 === l || s || 0 === s ? [l, s] : null,
                            rotate: h || 0 === h || p || 0 === p ? [h, p, d] : null,
                            parallels: x || 0 === x || M || 0 === M ? [x, M] : null,
                            scale: S
                        },
                        projection: o,
                        width: e,
                        height: r
                    })
                }, [e, r, o, l, s, h, p, d, x, M, S])
                  , N = n.useCallback(k, [k])
                  , A = n.useMemo(function() {
                    return {
                        width: e,
                        height: r,
                        projection: N,
                        path: w().projection(N)
                    }
                }, [e, r, N]);
                return c.default.createElement(E.Provider, v({
                    value: A
                }, u))
            };
            x.propTypes = {
                width: l.default.number,
                height: l.default.number,
                projection: l.default.oneOfType([l.default.string, l.default.func]),
                projectionConfig: l.default.object
            };
            var M = ["width", "height", "projection", "projectionConfig", "className"]
              , S = n.forwardRef(function(t, n) {
                var e = t.width
                  , r = void 0 === e ? 800 : e
                  , o = t.height
                  , i = void 0 === o ? 600 : o
                  , u = t.projection
                  , a = t.projectionConfig
                  , l = t.className
                  , s = g(t, M);
                return c.default.createElement(x, {
                    width: r,
                    height: i,
                    projection: void 0 === u ? "geoEqualEarth" : u,
                    projectionConfig: void 0 === a ? {} : a
                }, c.default.createElement("svg", v({
                    ref: n,
                    viewBox: "0 0 ".concat(r, " ").concat(i),
                    className: "rsm-svg ".concat(void 0 === l ? "" : l)
                }, s)))
            });
            function k(t, n, e) {
                var r = (t * e.k - t) / 2
                  , o = (n * e.k - n) / 2;
                return [t / 2 - (r + e.x) / e.k, n / 2 - (o + e.y) / e.k]
            }
            function N(t, n) {
                if ("Topology" !== t.type)
                    return n ? n(t.features || t) : t.features || t;
                var e = o.feature(t, t.objects[Object.keys(t.objects)[0]]).features;
                return n ? n(e) : e
            }
            function A(t) {
                return "Topology" === t.type ? {
                    outline: o.mesh(t, t.objects[Object.keys(t.objects)[0]], function(t, n) {
                        return t === n
                    }),
                    borders: o.mesh(t, t.objects[Object.keys(t.objects)[0]], function(t, n) {
                        return t !== n
                    })
                } : null
            }
            function P(t) {
                var e = t.geography
                  , r = t.parseGeographies
                  , o = n.useContext(E).path
                  , i = m(n.useState({}), 2)
                  , u = i[0]
                  , a = i[1];
                n.useEffect(function() {
                    "undefined" !== ("undefined" == typeof window ? "undefined" : p(window)) && e && ("string" == typeof e ? fetch(e).then(function(t) {
                        if (!t.ok)
                            throw Error(t.statusText);
                        return t.json()
                    }).catch(function(t) {
                        console.log("There was a problem when fetching the data: ", t)
                    }).then(function(t) {
                        t && a({
                            geographies: N(t, r),
                            mesh: A(t)
                        })
                    }) : a({
                        geographies: N(e, r),
                        mesh: A(e)
                    }))
                }, [e, r]);
                var c = n.useMemo(function() {
                    var t, n, e, r, i, a = u.mesh || {}, c = (t = a.outline,
                    n = a.borders,
                    t && n ? {
                        outline: h(h({}, t), {}, {
                            rsmKey: "outline",
                            svgPath: o(t)
                        }),
                        borders: h(h({}, n), {}, {
                            rsmKey: "borders",
                            svgPath: o(n)
                        })
                    } : {});
                    return {
                        geographies: (r = u.geographies) ? r.map(function(t, n) {
                            return h(h({}, t), {}, {
                                rsmKey: "geo-".concat(n),
                                svgPath: o(t)
                            })
                        }) : [],
                        outline: c.outline,
                        borders: c.borders
                    }
                }, [u, o]);
                return {
                    geographies: c.geographies,
                    outline: c.outline,
                    borders: c.borders
                }
            }
            S.displayName = "ComposableMap",
            S.propTypes = {
                width: l.default.number,
                height: l.default.number,
                projection: l.default.oneOfType([l.default.string, l.default.func]),
                projectionConfig: l.default.object,
                className: l.default.string
            };
            var j = ["geography", "children", "parseGeographies", "className"]
              , z = n.forwardRef(function(t, e) {
                var r = t.geography
                  , o = t.children
                  , i = t.parseGeographies
                  , u = t.className
                  , a = g(t, j)
                  , l = n.useContext(E)
                  , s = l.path
                  , f = l.projection
                  , h = P({
                    geography: r,
                    parseGeographies: i
                })
                  , p = h.geographies
                  , d = h.outline
                  , m = h.borders;
                return c.default.createElement("g", v({
                    ref: e,
                    className: "rsm-geographies ".concat(void 0 === u ? "" : u)
                }, a), p && p.length > 0 && o({
                    geographies: p,
                    outline: d,
                    borders: m,
                    path: s,
                    projection: f
                }))
            });
            z.displayName = "Geographies",
            z.propTypes = {
                geography: l.default.oneOfType([l.default.string, l.default.object, l.default.array]),
                children: l.default.func,
                parseGeographies: l.default.func,
                className: l.default.string
            };
            var Z = ["geography", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"]
              , C = n.forwardRef(function(t, e) {
                var r = t.geography
                  , o = t.onMouseEnter
                  , i = t.onMouseLeave
                  , u = t.onMouseDown
                  , a = t.onMouseUp
                  , l = t.onFocus
                  , s = t.onBlur
                  , f = t.style
                  , h = t.className
                  , p = g(t, Z)
                  , d = m(n.useState(!1), 2)
                  , y = d[0]
                  , _ = d[1]
                  , w = m(n.useState(!1), 2)
                  , b = w[0]
                  , E = w[1];
                return c.default.createElement("path", v({
                    ref: e,
                    tabIndex: "0",
                    className: "rsm-geography ".concat(void 0 === h ? "" : h),
                    d: r.svgPath,
                    onMouseEnter: function(t) {
                        E(!0),
                        o && o(t)
                    },
                    onMouseLeave: function(t) {
                        E(!1),
                        y && _(!1),
                        i && i(t)
                    },
                    onFocus: function(t) {
                        E(!0),
                        l && l(t)
                    },
                    onBlur: function(t) {
                        E(!1),
                        y && _(!1),
                        s && s(t)
                    },
                    onMouseDown: function(t) {
                        _(!0),
                        u && u(t)
                    },
                    onMouseUp: function(t) {
                        _(!1),
                        a && a(t)
                    },
                    style: (void 0 === f ? {} : f)[y || b ? y ? "pressed" : "hover" : "default"]
                }, p))
            });
            C.displayName = "Geography",
            C.propTypes = {
                geography: l.default.object,
                onMouseEnter: l.default.func,
                onMouseLeave: l.default.func,
                onMouseDown: l.default.func,
                onMouseUp: l.default.func,
                onFocus: l.default.func,
                onBlur: l.default.func,
                style: l.default.object,
                className: l.default.string
            };
            var O = n.memo(C)
              , T = ["fill", "stroke", "step", "className"]
              , R = n.forwardRef(function(t, e) {
                var o = t.fill
                  , i = t.stroke
                  , u = t.step
                  , a = t.className
                  , l = g(t, T)
                  , s = n.useContext(E).path;
                return c.default.createElement("path", v({
                    ref: e,
                    d: s(r.geoGraticule().step(void 0 === u ? [10, 10] : u)()),
                    fill: void 0 === o ? "transparent" : o,
                    stroke: void 0 === i ? "currentcolor" : i,
                    className: "rsm-graticule ".concat(void 0 === a ? "" : a)
                }, l))
            });
            R.displayName = "Graticule",
            R.propTypes = {
                fill: l.default.string,
                stroke: l.default.string,
                step: l.default.array,
                className: l.default.string
            };
            var q = n.memo(R)
              , L = ["value"]
              , G = n.createContext()
              , D = {
                x: 0,
                y: 0,
                k: 1,
                transformString: "translate(0 0) scale(1)"
            }
              , X = function(t) {
                var n = t.value
                  , e = g(t, L);
                return c.default.createElement(G.Provider, v({
                    value: void 0 === n ? D : n
                }, e))
            };
            function Y(t) {
                var e = t.center
                  , r = t.filterZoomEvent
                  , o = t.onMoveStart
                  , a = t.onMoveEnd
                  , c = t.onMove
                  , l = t.translateExtent
                  , s = t.scaleExtent
                  , f = t.zoom
                  , h = void 0 === f ? 1 : f
                  , p = n.useContext(E)
                  , d = p.width
                  , v = p.height
                  , g = p.projection
                  , y = m(e, 2)
                  , _ = y[0]
                  , w = y[1]
                  , b = m(n.useState({
                    x: 0,
                    y: 0,
                    k: 1
                }), 2)
                  , x = b[0]
                  , M = b[1]
                  , S = n.useRef({
                    x: 0,
                    y: 0,
                    k: 1
                })
                  , N = n.useRef()
                  , A = n.useRef()
                  , P = n.useRef(!1)
                  , j = m(void 0 === l ? [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]] : l, 2)
                  , z = j[0]
                  , Z = j[1]
                  , C = m(z, 2)
                  , O = C[0]
                  , T = C[1]
                  , R = m(Z, 2)
                  , q = R[0]
                  , L = R[1]
                  , G = m(void 0 === s ? [1, 8] : s, 2)
                  , D = G[0]
                  , X = G[1];
                return n.useEffect(function() {
                    var t = u.select(N.current)
                      , n = i.zoom().filter(function(t) {
                        return r ? r(t) : !!t && !t.ctrlKey && !t.button
                    }).scaleExtent([D, X]).translateExtent([[O, T], [q, L]]).on("start", function(t) {
                        o && !P.current && o({
                            coordinates: g.invert(k(d, v, t.transform)),
                            zoom: t.transform.k
                        }, t)
                    }).on("zoom", function(t) {
                        if (!P.current) {
                            var n = t.transform
                              , e = t.sourceEvent;
                            M({
                                x: n.x,
                                y: n.y,
                                k: n.k,
                                dragging: e
                            }),
                            c && c({
                                x: n.x,
                                y: n.y,
                                zoom: n.k,
                                dragging: e
                            }, t)
                        }
                    }).on("end", function(t) {
                        if (P.current)
                            P.current = !1;
                        else {
                            var n = m(g.invert(k(d, v, t.transform)), 2)
                              , e = n[0]
                              , r = n[1];
                            S.current = {
                                x: e,
                                y: r,
                                k: t.transform.k
                            },
                            a && a({
                                coordinates: [e, r],
                                zoom: t.transform.k
                            }, t)
                        }
                    });
                    A.current = n,
                    t.call(n)
                }, [d, v, O, T, q, L, D, X, g, o, c, a, r]),
                n.useEffect(function() {
                    if (_ !== S.current.x || w !== S.current.y || h !== S.current.k) {
                        var t = g([_, w])
                          , n = t[0] * h
                          , e = t[1] * h
                          , r = u.select(N.current);
                        P.current = !0,
                        r.call(A.current.transform, i.zoomIdentity.translate(d / 2 - n, v / 2 - e).scale(h)),
                        M({
                            x: d / 2 - n,
                            y: v / 2 - e,
                            k: h
                        }),
                        S.current = {
                            x: _,
                            y: w,
                            k: h
                        }
                    }
                }, [_, w, h, d, v, g]),
                {
                    mapRef: N,
                    position: x,
                    transformString: "translate(".concat(x.x, " ").concat(x.y, ") scale(").concat(x.k, ")")
                }
            }
            X.propTypes = {
                x: l.default.number,
                y: l.default.number,
                k: l.default.number,
                transformString: l.default.string
            };
            var I = ["center", "zoom", "minZoom", "maxZoom", "translateExtent", "filterZoomEvent", "onMoveStart", "onMove", "onMoveEnd", "className"]
              , B = n.forwardRef(function(t, e) {
                var r = t.center
                  , o = t.zoom
                  , i = t.minZoom
                  , u = t.maxZoom
                  , a = t.translateExtent
                  , l = t.filterZoomEvent
                  , s = t.onMoveStart
                  , f = t.onMove
                  , h = t.onMoveEnd
                  , p = t.className
                  , d = g(t, I)
                  , m = n.useContext(E)
                  , y = m.width
                  , _ = m.height
                  , w = Y({
                    center: void 0 === r ? [0, 0] : r,
                    filterZoomEvent: l,
                    onMoveStart: s,
                    onMove: f,
                    onMoveEnd: h,
                    scaleExtent: [void 0 === i ? 1 : i, void 0 === u ? 8 : u],
                    translateExtent: a,
                    zoom: void 0 === o ? 1 : o
                })
                  , b = w.mapRef
                  , x = w.transformString
                  , M = w.position;
                return c.default.createElement(X, {
                    value: {
                        x: M.x,
                        y: M.y,
                        k: M.k,
                        transformString: x
                    }
                }, c.default.createElement("g", {
                    ref: b
                }, c.default.createElement("rect", {
                    width: y,
                    height: _,
                    fill: "transparent"
                }), c.default.createElement("g", v({
                    ref: e,
                    transform: x,
                    className: "rsm-zoomable-group ".concat(p)
                }, d))))
            });
            B.displayName = "ZoomableGroup",
            B.propTypes = {
                center: l.default.array,
                zoom: l.default.number,
                minZoom: l.default.number,
                maxZoom: l.default.number,
                translateExtent: l.default.arrayOf(l.default.array),
                onMoveStart: l.default.func,
                onMove: l.default.func,
                onMoveEnd: l.default.func,
                className: l.default.string
            };
            var F = ["id", "fill", "stroke", "strokeWidth", "className"]
              , U = n.forwardRef(function(t, e) {
                var r = t.id
                  , o = t.fill
                  , i = t.stroke
                  , u = t.strokeWidth
                  , a = t.className
                  , l = g(t, F)
                  , s = n.useContext(E).path
                  , f = n.useMemo(function() {
                    return s({
                        type: "Sphere"
                    })
                }, [s]);
                return c.default.createElement(n.Fragment, null, c.default.createElement("defs", null, c.default.createElement("clipPath", {
                    id: void 0 === r ? "rsm-sphere" : r
                }, c.default.createElement("path", {
                    d: f
                }))), c.default.createElement("path", v({
                    ref: e,
                    d: f,
                    fill: void 0 === o ? "transparent" : o,
                    stroke: void 0 === i ? "currentcolor" : i,
                    strokeWidth: void 0 === u ? .5 : u,
                    style: {
                        pointerEvents: "none"
                    },
                    className: "rsm-sphere ".concat(void 0 === a ? "" : a)
                }, l)))
            });
            U.displayName = "Sphere",
            U.propTypes = {
                id: l.default.string,
                fill: l.default.string,
                stroke: l.default.string,
                strokeWidth: l.default.number,
                className: l.default.string
            };
            var H = n.memo(U)
              , V = ["coordinates", "children", "onMouseEnter", "onMouseLeave", "onMouseDown", "onMouseUp", "onFocus", "onBlur", "style", "className"]
              , W = n.forwardRef(function(t, e) {
                var r = t.coordinates
                  , o = t.children
                  , i = t.onMouseEnter
                  , u = t.onMouseLeave
                  , a = t.onMouseDown
                  , l = t.onMouseUp
                  , s = t.onFocus
                  , f = t.onBlur
                  , h = t.style
                  , p = t.className
                  , d = g(t, V)
                  , y = n.useContext(E).projection
                  , _ = m(n.useState(!1), 2)
                  , w = _[0]
                  , b = _[1]
                  , x = m(n.useState(!1), 2)
                  , M = x[0]
                  , S = x[1]
                  , k = m(y(r), 2)
                  , N = k[0]
                  , A = k[1];
                return c.default.createElement("g", v({
                    ref: e,
                    transform: "translate(".concat(N, ", ").concat(A, ")"),
                    className: "rsm-marker ".concat(void 0 === p ? "" : p),
                    onMouseEnter: function(t) {
                        S(!0),
                        i && i(t)
                    },
                    onMouseLeave: function(t) {
                        S(!1),
                        w && b(!1),
                        u && u(t)
                    },
                    onFocus: function(t) {
                        S(!0),
                        s && s(t)
                    },
                    onBlur: function(t) {
                        S(!1),
                        w && b(!1),
                        f && f(t)
                    },
                    onMouseDown: function(t) {
                        b(!0),
                        a && a(t)
                    },
                    onMouseUp: function(t) {
                        b(!1),
                        l && l(t)
                    },
                    style: (void 0 === h ? {} : h)[w || M ? w ? "pressed" : "hover" : "default"]
                }, d), o)
            });
            W.displayName = "Marker",
            W.propTypes = {
                coordinates: l.default.array,
                children: l.default.oneOfType([l.default.node, l.default.arrayOf(l.default.node)]),
                onMouseEnter: l.default.func,
                onMouseLeave: l.default.func,
                onMouseDown: l.default.func,
                onMouseUp: l.default.func,
                onFocus: l.default.func,
                onBlur: l.default.func,
                style: l.default.object,
                className: l.default.string
            };
            var $ = ["from", "to", "coordinates", "stroke", "strokeWidth", "fill", "className"]
              , K = n.forwardRef(function(t, e) {
                var r = t.from
                  , o = t.to
                  , i = t.coordinates
                  , u = t.stroke
                  , a = t.strokeWidth
                  , l = t.fill
                  , s = t.className
                  , f = g(t, $)
                  , h = n.useContext(E).path;
                return c.default.createElement("path", v({
                    ref: e,
                    d: h({
                        type: "LineString",
                        coordinates: i || [void 0 === r ? [0, 0] : r, void 0 === o ? [0, 0] : o]
                    }),
                    className: "rsm-line ".concat(void 0 === s ? "" : s),
                    stroke: void 0 === u ? "currentcolor" : u,
                    strokeWidth: void 0 === a ? 3 : a,
                    fill: void 0 === l ? "transparent" : l
                }, f))
            });
            K.displayName = "Line",
            K.propTypes = {
                from: l.default.array,
                to: l.default.array,
                coordinates: l.default.array,
                stroke: l.default.string,
                strokeWidth: l.default.number,
                fill: l.default.string,
                className: l.default.string
            };
            var J = ["subject", "children", "connectorProps", "dx", "dy", "curve", "className"]
              , Q = n.forwardRef(function(t, e) {
                var r = t.subject
                  , o = t.children
                  , i = t.connectorProps
                  , u = t.dx
                  , a = void 0 === u ? 30 : u
                  , l = t.dy
                  , s = void 0 === l ? 30 : l
                  , f = t.curve
                  , h = t.className
                  , p = g(t, J)
                  , d = m((0,
                n.useContext(E).projection)(r), 2)
                  , y = d[0]
                  , _ = d[1]
                  , w = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30
                      , e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .5
                      , r = Array.isArray(e) ? e : [e, e]
                      , o = t / 2 * r[0]
                      , i = n / 2 * r[1];
                    return "M".concat(0, ",", 0, " Q", -t / 2 - o, ",").concat(-n / 2 + i, " ").concat(-t, ",").concat(-n)
                }(a, s, void 0 === f ? 0 : f);
                return c.default.createElement("g", v({
                    ref: e,
                    transform: "translate(".concat(y + a, ", ").concat(_ + s, ")"),
                    className: "rsm-annotation ".concat(void 0 === h ? "" : h)
                }, p), c.default.createElement("path", v({
                    d: w,
                    fill: "transparent",
                    stroke: "#000"
                }, i)), o)
            });
            Q.displayName = "Annotation",
            Q.propTypes = {
                subject: l.default.array,
                children: l.default.oneOfType([l.default.node, l.default.arrayOf(l.default.node)]),
                dx: l.default.number,
                dy: l.default.number,
                curve: l.default.number,
                connectorProps: l.default.object,
                className: l.default.string
            },
            t.Annotation = Q,
            t.ComposableMap = S,
            t.Geographies = z,
            t.Geography = O,
            t.Graticule = q,
            t.Line = K,
            t.MapContext = E,
            t.MapProvider = x,
            t.Marker = W,
            t.Sphere = H,
            t.ZoomPanContext = G,
            t.ZoomPanProvider = X,
            t.ZoomableGroup = B,
            t.useGeographies = P,
            t.useMapContext = function() {
                return n.useContext(E)
            }
            ,
            t.useZoomPan = Y,
            t.useZoomPanContext = function() {
                return n.useContext(G)
            }
            ,
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        )(n, e(67294), e(45697), e(18810), e(99936), e(41482), e(62698))
    },
    18810: function(t, n, e) {
        "use strict";
        e.r(n),
        e.d(n, {
            geoAlbers: function() {
                return eF
            },
            geoAlbersUsa: function() {
                return eU
            },
            geoArea: function() {
                return F
            },
            geoAzimuthalEqualArea: function() {
                return e$
            },
            geoAzimuthalEqualAreaRaw: function() {
                return eW
            },
            geoAzimuthalEquidistant: function() {
                return eJ
            },
            geoAzimuthalEquidistantRaw: function() {
                return eK
            },
            geoBounds: function() {
                return ts
            },
            geoCentroid: function() {
                return tE
            },
            geoCircle: function() {
                return tC
            },
            geoClipAntimeridian: function() {
                return tF
            },
            geoClipCircle: function() {
                return tU
            },
            geoClipExtent: function() {
                return tV
            },
            geoClipRectangle: function() {
                return tH
            },
            geoConicConformal: function() {
                return e6
            },
            geoConicConformalRaw: function() {
                return e5
            },
            geoConicEqualArea: function() {
                return eB
            },
            geoConicEqualAreaRaw: function() {
                return eI
            },
            geoConicEquidistant: function() {
                return e7
            },
            geoConicEquidistantRaw: function() {
                return e9
            },
            geoContains: function() {
                return nn
            },
            geoDistance: function() {
                return t2
            },
            geoEqualEarth: function() {
                return rn
            },
            geoEqualEarthRaw: function() {
                return rt
            },
            geoEquirectangular: function() {
                return e4
            },
            geoEquirectangularRaw: function() {
                return e3
            },
            geoGnomonic: function() {
                return rr
            },
            geoGnomonicRaw: function() {
                return re
            },
            geoGraticule: function() {
                return ni
            },
            geoGraticule10: function() {
                return nu
            },
            geoIdentity: function() {
                return ro
            },
            geoInterpolate: function() {
                return na
            },
            geoLength: function() {
                return tQ
            },
            geoMercator: function() {
                return e0
            },
            geoMercatorRaw: function() {
                return eQ
            },
            geoNaturalEarth1: function() {
                return ru
            },
            geoNaturalEarth1Raw: function() {
                return ri
            },
            geoOrthographic: function() {
                return rc
            },
            geoOrthographicRaw: function() {
                return ra
            },
            geoPath: function() {
                return eN
            },
            geoProjection: function() {
                return eD
            },
            geoProjectionMutator: function() {
                return eX
            },
            geoRotation: function() {
                return tj
            },
            geoStereographic: function() {
                return rs
            },
            geoStereographicRaw: function() {
                return rl
            },
            geoStream: function() {
                return Z
            },
            geoTransform: function() {
                return eA
            },
            geoTransverseMercator: function() {
                return rh
            },
            geoTransverseMercatorRaw: function() {
                return rf
            }
        });
        class r {
            constructor() {
                this._partials = new Float64Array(32),
                this._n = 0
            }
            add(t) {
                let n = this._partials
                  , e = 0;
                for (let r = 0; r < this._n && r < 32; r++) {
                    let o = n[r]
                      , i = t + o
                      , u = Math.abs(t) < Math.abs(o) ? t - (i - o) : o - (i - t);
                    u && (n[e++] = u),
                    t = i
                }
                return n[e] = t,
                this._n = e + 1,
                this
            }
            valueOf() {
                let t = this._partials, n = this._n, e, r, o, i = 0;
                if (n > 0) {
                    for (i = t[--n]; n > 0 && (i = (e = i) + (r = t[--n]),
                    !(o = r - (i - e))); )
                        ;
                    n > 0 && (o < 0 && t[n - 1] < 0 || o > 0 && t[n - 1] > 0) && (e = i + (r = 2 * o),
                    r == e - i && (i = e))
                }
                return i
            }
        }
        var o = Math.PI
          , i = o / 2
          , u = o / 4
          , a = 2 * o
          , c = 180 / o
          , l = o / 180
          , s = Math.abs
          , f = Math.atan
          , h = Math.atan2
          , p = Math.cos
          , d = Math.ceil
          , v = Math.exp
          , g = Math.hypot
          , m = Math.log
          , y = Math.pow
          , _ = Math.sin
          , w = Math.sign || function(t) {
            return t > 0 ? 1 : t < 0 ? -1 : 0
        }
          , b = Math.sqrt
          , E = Math.tan;
        function x(t) {
            return t > 1 ? 0 : t < -1 ? o : Math.acos(t)
        }
        function M(t) {
            return t > 1 ? i : t < -1 ? -i : Math.asin(t)
        }
        function S(t) {
            return (t = _(t / 2)) * t
        }
        function k() {}
        function N(t, n) {
            t && P.hasOwnProperty(t.type) && P[t.type](t, n)
        }
        var A = {
            Feature: function(t, n) {
                N(t.geometry, n)
            },
            FeatureCollection: function(t, n) {
                for (var e = t.features, r = -1, o = e.length; ++r < o; )
                    N(e[r].geometry, n)
            }
        }
          , P = {
            Sphere: function(t, n) {
                n.sphere()
            },
            Point: function(t, n) {
                t = t.coordinates,
                n.point(t[0], t[1], t[2])
            },
            MultiPoint: function(t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
                    t = e[r],
                    n.point(t[0], t[1], t[2])
            },
            LineString: function(t, n) {
                j(t.coordinates, n, 0)
            },
            MultiLineString: function(t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
                    j(e[r], n, 0)
            },
            Polygon: function(t, n) {
                z(t.coordinates, n)
            },
            MultiPolygon: function(t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
                    z(e[r], n)
            },
            GeometryCollection: function(t, n) {
                for (var e = t.geometries, r = -1, o = e.length; ++r < o; )
                    N(e[r], n)
            }
        };
        function j(t, n, e) {
            var r, o = -1, i = t.length - e;
            for (n.lineStart(); ++o < i; )
                r = t[o],
                n.point(r[0], r[1], r[2]);
            n.lineEnd()
        }
        function z(t, n) {
            var e = -1
              , r = t.length;
            for (n.polygonStart(); ++e < r; )
                j(t[e], n, 1);
            n.polygonEnd()
        }
        function Z(t, n) {
            t && A.hasOwnProperty(t.type) ? A[t.type](t, n) : N(t, n)
        }
        var C, O, T, R, q, L = new r, G = new r, D = {
            point: k,
            lineStart: k,
            lineEnd: k,
            polygonStart: function() {
                L = new r,
                D.lineStart = X,
                D.lineEnd = Y
            },
            polygonEnd: function() {
                var t = +L;
                G.add(t < 0 ? a + t : t),
                this.lineStart = this.lineEnd = this.point = k
            },
            sphere: function() {
                G.add(a)
            }
        };
        function X() {
            D.point = I
        }
        function Y() {
            B(C, O)
        }
        function I(t, n) {
            D.point = B,
            C = t,
            O = n,
            t *= l,
            n *= l,
            T = t,
            R = p(n = n / 2 + u),
            q = _(n)
        }
        function B(t, n) {
            t *= l,
            n *= l;
            var e = t - T
              , r = e >= 0 ? 1 : -1
              , o = r * e
              , i = p(n = n / 2 + u)
              , a = _(n)
              , c = q * a
              , s = R * i + c * p(o)
              , f = c * r * _(o);
            L.add(h(f, s)),
            T = t,
            R = i,
            q = a
        }
        function F(t) {
            return G = new r,
            Z(t, D),
            2 * G
        }
        function U(t) {
            return [h(t[1], t[0]), M(t[2])]
        }
        function H(t) {
            var n = t[0]
              , e = t[1]
              , r = p(e);
            return [r * p(n), r * _(n), _(e)]
        }
        function V(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }
        function W(t, n) {
            return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
        }
        function $(t, n) {
            t[0] += n[0],
            t[1] += n[1],
            t[2] += n[2]
        }
        function K(t, n) {
            return [t[0] * n, t[1] * n, t[2] * n]
        }
        function J(t) {
            var n = b(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= n,
            t[1] /= n,
            t[2] /= n
        }
        var Q = {
            point: tt,
            lineStart: te,
            lineEnd: tr,
            polygonStart: function() {
                Q.point = to,
                Q.lineStart = ti,
                Q.lineEnd = tu,
                ng = new r,
                D.polygonStart()
            },
            polygonEnd: function() {
                D.polygonEnd(),
                Q.point = tt,
                Q.lineStart = te,
                Q.lineEnd = tr,
                L < 0 ? (nc = -(ns = 180),
                nl = -(nf = 90)) : ng > 1e-6 ? nf = 90 : ng < -.000001 && (nl = -90),
                ny[0] = nc,
                ny[1] = ns
            },
            sphere: function() {
                nc = -(ns = 180),
                nl = -(nf = 90)
            }
        };
        function tt(t, n) {
            nm.push(ny = [nc = t, ns = t]),
            n < nl && (nl = n),
            n > nf && (nf = n)
        }
        function tn(t, n) {
            var e = H([t * l, n * l]);
            if (nv) {
                var r = W(nv, e)
                  , o = W([r[1], -r[0], 0], r);
                J(o);
                var i, u = t - nh, a = u > 0 ? 1 : -1, f = (o = U(o))[0] * c * a, h = s(u) > 180;
                h ^ (a * nh < f && f < a * t) ? (i = o[1] * c) > nf && (nf = i) : h ^ (a * nh < (f = (f + 360) % 360 - 180) && f < a * t) ? (i = -o[1] * c) < nl && (nl = i) : (n < nl && (nl = n),
                n > nf && (nf = n)),
                h ? t < nh ? ta(nc, t) > ta(nc, ns) && (ns = t) : ta(t, ns) > ta(nc, ns) && (nc = t) : ns >= nc ? (t < nc && (nc = t),
                t > ns && (ns = t)) : t > nh ? ta(nc, t) > ta(nc, ns) && (ns = t) : ta(t, ns) > ta(nc, ns) && (nc = t)
            } else
                nm.push(ny = [nc = t, ns = t]);
            n < nl && (nl = n),
            n > nf && (nf = n),
            nv = e,
            nh = t
        }
        function te() {
            Q.point = tn
        }
        function tr() {
            ny[0] = nc,
            ny[1] = ns,
            Q.point = tt,
            nv = null
        }
        function to(t, n) {
            if (nv) {
                var e = t - nh;
                ng.add(s(e) > 180 ? e + (e > 0 ? 360 : -360) : e)
            } else
                np = t,
                nd = n;
            D.point(t, n),
            tn(t, n)
        }
        function ti() {
            D.lineStart()
        }
        function tu() {
            to(np, nd),
            D.lineEnd(),
            s(ng) > 1e-6 && (nc = -(ns = 180)),
            ny[0] = nc,
            ny[1] = ns,
            nv = null
        }
        function ta(t, n) {
            return (n -= t) < 0 ? n + 360 : n
        }
        function tc(t, n) {
            return t[0] - n[0]
        }
        function tl(t, n) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        function ts(t) {
            var n, e, r, o, i, u, a;
            if (nf = ns = -(nc = nl = 1 / 0),
            nm = [],
            Z(t, Q),
            e = nm.length) {
                for (nm.sort(tc),
                n = 1,
                i = [r = nm[0]]; n < e; ++n)
                    tl(r, (o = nm[n])[0]) || tl(r, o[1]) ? (ta(r[0], o[1]) > ta(r[0], r[1]) && (r[1] = o[1]),
                    ta(o[0], r[1]) > ta(r[0], r[1]) && (r[0] = o[0])) : i.push(r = o);
                for (u = -1 / 0,
                e = i.length - 1,
                n = 0,
                r = i[e]; n <= e; r = o,
                ++n)
                    o = i[n],
                    (a = ta(r[1], o[0])) > u && (u = a,
                    nc = o[0],
                    ns = r[1])
            }
            return nm = ny = null,
            nc === 1 / 0 || nl === 1 / 0 ? [[NaN, NaN], [NaN, NaN]] : [[nc, nl], [ns, nf]]
        }
        var tf = {
            sphere: k,
            point: th,
            lineStart: td,
            lineEnd: tm,
            polygonStart: function() {
                tf.lineStart = ty,
                tf.lineEnd = t_
            },
            polygonEnd: function() {
                tf.lineStart = td,
                tf.lineEnd = tm
            }
        };
        function th(t, n) {
            t *= l;
            var e = p(n *= l);
            tp(e * p(t), e * _(t), _(n))
        }
        function tp(t, n, e) {
            ++n_,
            nb += (t - nb) / n_,
            nE += (n - nE) / n_,
            nx += (e - nx) / n_
        }
        function td() {
            tf.point = tv
        }
        function tv(t, n) {
            t *= l;
            var e = p(n *= l);
            nZ = e * p(t),
            nC = e * _(t),
            nO = _(n),
            tf.point = tg,
            tp(nZ, nC, nO)
        }
        function tg(t, n) {
            t *= l;
            var e = p(n *= l)
              , r = e * p(t)
              , o = e * _(t)
              , i = _(n)
              , u = h(b((u = nC * i - nO * o) * u + (u = nO * r - nZ * i) * u + (u = nZ * o - nC * r) * u), nZ * r + nC * o + nO * i);
            nw += u,
            nM += u * (nZ + (nZ = r)),
            nS += u * (nC + (nC = o)),
            nk += u * (nO + (nO = i)),
            tp(nZ, nC, nO)
        }
        function tm() {
            tf.point = th
        }
        function ty() {
            tf.point = tw
        }
        function t_() {
            tb(nj, nz),
            tf.point = th
        }
        function tw(t, n) {
            nj = t,
            nz = n,
            t *= l,
            n *= l,
            tf.point = tb;
            var e = p(n);
            nZ = e * p(t),
            nC = e * _(t),
            nO = _(n),
            tp(nZ, nC, nO)
        }
        function tb(t, n) {
            t *= l;
            var e = p(n *= l)
              , r = e * p(t)
              , o = e * _(t)
              , i = _(n)
              , u = nC * i - nO * o
              , a = nO * r - nZ * i
              , c = nZ * o - nC * r
              , s = g(u, a, c)
              , f = M(s)
              , h = s && -f / s;
            nN.add(h * u),
            nA.add(h * a),
            nP.add(h * c),
            nw += f,
            nM += f * (nZ + (nZ = r)),
            nS += f * (nC + (nC = o)),
            nk += f * (nO + (nO = i)),
            tp(nZ, nC, nO)
        }
        function tE(t) {
            n_ = nw = nb = nE = nx = nM = nS = nk = 0,
            nN = new r,
            nA = new r,
            nP = new r,
            Z(t, tf);
            var n = +nN
              , e = +nA
              , o = +nP
              , i = g(n, e, o);
            return i < 1e-12 && (n = nM,
            e = nS,
            o = nk,
            nw < 1e-6 && (n = nb,
            e = nE,
            o = nx),
            (i = g(n, e, o)) < 1e-12) ? [NaN, NaN] : [h(e, n) * c, M(o / i) * c]
        }
        function tx(t) {
            return function() {
                return t
            }
        }
        function tM(t, n) {
            function e(e, r) {
                return n((e = t(e, r))[0], e[1])
            }
            return t.invert && n.invert && (e.invert = function(e, r) {
                return (e = n.invert(e, r)) && t.invert(e[0], e[1])
            }
            ),
            e
        }
        function tS(t, n) {
            return [s(t) > o ? t + Math.round(-t / a) * a : t, n]
        }
        function tk(t, n, e) {
            return (t %= a) ? n || e ? tM(tA(t), tP(n, e)) : tA(t) : n || e ? tP(n, e) : tS
        }
        function tN(t) {
            return function(n, e) {
                return [(n += t) > o ? n - a : n < -o ? n + a : n, e]
            }
        }
        function tA(t) {
            var n = tN(t);
            return n.invert = tN(-t),
            n
        }
        function tP(t, n) {
            var e = p(t)
              , r = _(t)
              , o = p(n)
              , i = _(n);
            function u(t, n) {
                var u = p(n)
                  , a = p(t) * u
                  , c = _(t) * u
                  , l = _(n)
                  , s = l * e + a * r;
                return [h(c * o - s * i, a * e - l * r), M(s * o + c * i)]
            }
            return u.invert = function(t, n) {
                var u = p(n)
                  , a = p(t) * u
                  , c = _(t) * u
                  , l = _(n)
                  , s = l * o - c * i;
                return [h(c * o + l * i, a * e + s * r), M(s * e - a * r)]
            }
            ,
            u
        }
        function tj(t) {
            function n(n) {
                return n = t(n[0] * l, n[1] * l),
                n[0] *= c,
                n[1] *= c,
                n
            }
            return t = tk(t[0] * l, t[1] * l, t.length > 2 ? t[2] * l : 0),
            n.invert = function(n) {
                return n = t.invert(n[0] * l, n[1] * l),
                n[0] *= c,
                n[1] *= c,
                n
            }
            ,
            n
        }
        function tz(t, n, e, r, o, i) {
            if (e) {
                var u = p(n)
                  , c = _(n)
                  , l = r * e;
                null == o ? (o = n + r * a,
                i = n - l / 2) : (o = tZ(u, o),
                i = tZ(u, i),
                (r > 0 ? o < i : o > i) && (o += r * a));
                for (var s, f = o; r > 0 ? f > i : f < i; f -= l)
                    s = U([u, -c * p(f), -c * _(f)]),
                    t.point(s[0], s[1])
            }
        }
        function tZ(t, n) {
            n = H(n),
            n[0] -= t,
            J(n);
            var e = x(-n[1]);
            return ((0 > -n[2] ? -e : e) + a - 1e-6) % a
        }
        function tC() {
            var t, n, e = tx([0, 0]), r = tx(90), o = tx(6), i = {
                point: function(e, r) {
                    t.push(e = n(e, r)),
                    e[0] *= c,
                    e[1] *= c
                }
            };
            function u() {
                var u = e.apply(this, arguments)
                  , a = r.apply(this, arguments) * l
                  , c = o.apply(this, arguments) * l;
                return t = [],
                n = tk(-u[0] * l, -u[1] * l, 0).invert,
                tz(i, a, c, 1),
                u = {
                    type: "Polygon",
                    coordinates: [t]
                },
                t = n = null,
                u
            }
            return u.center = function(t) {
                return arguments.length ? (e = "function" == typeof t ? t : tx([+t[0], +t[1]]),
                u) : e
            }
            ,
            u.radius = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : tx(+t),
                u) : r
            }
            ,
            u.precision = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : tx(+t),
                u) : o
            }
            ,
            u
        }
        function tO() {
            var t, n = [];
            return {
                point: function(n, e, r) {
                    t.push([n, e, r])
                },
                lineStart: function() {
                    n.push(t = [])
                },
                lineEnd: k,
                rejoin: function() {
                    n.length > 1 && n.push(n.pop().concat(n.shift()))
                },
                result: function() {
                    var e = n;
                    return n = [],
                    t = null,
                    e
                }
            }
        }
        function tT(t, n) {
            return 1e-6 > s(t[0] - n[0]) && 1e-6 > s(t[1] - n[1])
        }
        function tR(t, n, e, r) {
            this.x = t,
            this.z = n,
            this.o = e,
            this.e = r,
            this.v = !1,
            this.n = this.p = null
        }
        function tq(t, n, e, r, o) {
            var i, u, a = [], c = [];
            if (t.forEach(function(t) {
                if (!((n = t.length - 1) <= 0)) {
                    var n, e, r = t[0], u = t[n];
                    if (tT(r, u)) {
                        if (!r[2] && !u[2]) {
                            for (o.lineStart(),
                            i = 0; i < n; ++i)
                                o.point((r = t[i])[0], r[1]);
                            o.lineEnd();
                            return
                        }
                        u[0] += 2e-6
                    }
                    a.push(e = new tR(r,t,null,!0)),
                    c.push(e.o = new tR(r,null,e,!1)),
                    a.push(e = new tR(u,t,null,!1)),
                    c.push(e.o = new tR(u,null,e,!0))
                }
            }),
            a.length) {
                for (c.sort(n),
                tL(a),
                tL(c),
                i = 0,
                u = c.length; i < u; ++i)
                    c[i].e = e = !e;
                for (var l, s, f = a[0]; ; ) {
                    for (var h = f, p = !0; h.v; )
                        if ((h = h.n) === f)
                            return;
                    l = h.z,
                    o.lineStart();
                    do {
                        if (h.v = h.o.v = !0,
                        h.e) {
                            if (p)
                                for (i = 0,
                                u = l.length; i < u; ++i)
                                    o.point((s = l[i])[0], s[1]);
                            else
                                r(h.x, h.n.x, 1, o);
                            h = h.n
                        } else {
                            if (p)
                                for (i = (l = h.p.z).length - 1; i >= 0; --i)
                                    o.point((s = l[i])[0], s[1]);
                            else
                                r(h.x, h.p.x, -1, o);
                            h = h.p
                        }
                        l = (h = h.o).z,
                        p = !p
                    } while (!h.v);
                    o.lineEnd()
                }
            }
        }
        function tL(t) {
            if (n = t.length) {
                for (var n, e, r = 0, o = t[0]; ++r < n; )
                    o.n = e = t[r],
                    e.p = o,
                    o = e;
                o.n = e = t[0],
                e.p = o
            }
        }
        function tG(t) {
            return s(t[0]) <= o ? t[0] : w(t[0]) * ((s(t[0]) + o) % a - o)
        }
        function tD(t, n) {
            var e = tG(n)
              , c = n[1]
              , l = _(c)
              , s = [_(e), -p(e), 0]
              , f = 0
              , d = 0
              , v = new r;
            1 === l ? c = i + 1e-6 : -1 === l && (c = -i - 1e-6);
            for (var g = 0, m = t.length; g < m; ++g)
                if (w = (y = t[g]).length)
                    for (var y, w, b = y[w - 1], E = tG(b), x = b[1] / 2 + u, S = _(x), k = p(x), N = 0; N < w; ++N,
                    E = P,
                    S = z,
                    k = Z,
                    b = A) {
                        var A = y[N]
                          , P = tG(A)
                          , j = A[1] / 2 + u
                          , z = _(j)
                          , Z = p(j)
                          , C = P - E
                          , O = C >= 0 ? 1 : -1
                          , T = O * C
                          , R = T > o
                          , q = S * z;
                        if (v.add(h(q * O * _(T), k * Z + q * p(T))),
                        f += R ? C + O * a : C,
                        R ^ E >= e ^ P >= e) {
                            var L = W(H(b), H(A));
                            J(L);
                            var G = W(s, L);
                            J(G);
                            var D = (R ^ C >= 0 ? -1 : 1) * M(G[2]);
                            (c > D || c === D && (L[0] || L[1])) && (d += R ^ C >= 0 ? 1 : -1)
                        }
                    }
            return (f < -.000001 || f < 1e-6 && v < -.000000000001) ^ 1 & d
        }
        function tX(t) {
            return Array.from(function*(t) {
                for (let n of t)
                    yield*n
            }(t))
        }
        function tY(t, n, e, r) {
            return function(o) {
                var i, u, a, c = n(o), l = tO(), s = n(l), f = !1, h = {
                    point: p,
                    lineStart: v,
                    lineEnd: g,
                    polygonStart: function() {
                        h.point = m,
                        h.lineStart = y,
                        h.lineEnd = _,
                        u = [],
                        i = []
                    },
                    polygonEnd: function() {
                        h.point = p,
                        h.lineStart = v,
                        h.lineEnd = g,
                        u = tX(u);
                        var t = tD(i, r);
                        u.length ? (f || (o.polygonStart(),
                        f = !0),
                        tq(u, tB, t, e, o)) : t && (f || (o.polygonStart(),
                        f = !0),
                        o.lineStart(),
                        e(null, null, 1, o),
                        o.lineEnd()),
                        f && (o.polygonEnd(),
                        f = !1),
                        u = i = null
                    },
                    sphere: function() {
                        o.polygonStart(),
                        o.lineStart(),
                        e(null, null, 1, o),
                        o.lineEnd(),
                        o.polygonEnd()
                    }
                };
                function p(n, e) {
                    t(n, e) && o.point(n, e)
                }
                function d(t, n) {
                    c.point(t, n)
                }
                function v() {
                    h.point = d,
                    c.lineStart()
                }
                function g() {
                    h.point = p,
                    c.lineEnd()
                }
                function m(t, n) {
                    a.push([t, n]),
                    s.point(t, n)
                }
                function y() {
                    s.lineStart(),
                    a = []
                }
                function _() {
                    m(a[0][0], a[0][1]),
                    s.lineEnd();
                    var t, n, e, r, c = s.clean(), h = l.result(), p = h.length;
                    if (a.pop(),
                    i.push(a),
                    a = null,
                    p) {
                        if (1 & c) {
                            if ((n = (e = h[0]).length - 1) > 0) {
                                for (f || (o.polygonStart(),
                                f = !0),
                                o.lineStart(),
                                t = 0; t < n; ++t)
                                    o.point((r = e[t])[0], r[1]);
                                o.lineEnd()
                            }
                            return
                        }
                        p > 1 && 2 & c && h.push(h.pop().concat(h.shift())),
                        u.push(h.filter(tI))
                    }
                }
                return h
            }
        }
        function tI(t) {
            return t.length > 1
        }
        function tB(t, n) {
            return ((t = t.x)[0] < 0 ? t[1] - i - 1e-6 : i - t[1]) - ((n = n.x)[0] < 0 ? n[1] - i - 1e-6 : i - n[1])
        }
        tS.invert = tS;
        var tF = tY(function() {
            return !0
        }, function(t) {
            var n, e = NaN, r = NaN, u = NaN;
            return {
                lineStart: function() {
                    t.lineStart(),
                    n = 1
                },
                point: function(a, c) {
                    var l, h, d, v, g, m, y, w = a > 0 ? o : -o, b = s(a - e);
                    1e-6 > s(b - o) ? (t.point(e, r = (r + c) / 2 > 0 ? i : -i),
                    t.point(u, r),
                    t.lineEnd(),
                    t.lineStart(),
                    t.point(w, r),
                    t.point(a, r),
                    n = 0) : u !== w && b >= o && (1e-6 > s(e - u) && (e -= 1e-6 * u),
                    1e-6 > s(a - w) && (a -= 1e-6 * w),
                    l = e,
                    h = r,
                    d = a,
                    v = c,
                    y = _(l - d),
                    r = s(y) > 1e-6 ? f((_(h) * (m = p(v)) * _(d) - _(v) * (g = p(h)) * _(l)) / (g * m * y)) : (h + v) / 2,
                    t.point(u, r),
                    t.lineEnd(),
                    t.lineStart(),
                    t.point(w, r),
                    n = 0),
                    t.point(e = a, r = c),
                    u = w
                },
                lineEnd: function() {
                    t.lineEnd(),
                    e = r = NaN
                },
                clean: function() {
                    return 2 - n
                }
            }
        }, function(t, n, e, r) {
            var u;
            if (null == t)
                u = e * i,
                r.point(-o, u),
                r.point(0, u),
                r.point(o, u),
                r.point(o, 0),
                r.point(o, -u),
                r.point(0, -u),
                r.point(-o, -u),
                r.point(-o, 0),
                r.point(-o, u);
            else if (s(t[0] - n[0]) > 1e-6) {
                var a = t[0] < n[0] ? o : -o;
                u = e * a / 2,
                r.point(-a, u),
                r.point(0, u),
                r.point(a, u)
            } else
                r.point(n[0], n[1])
        }, [-o, -i]);
        function tU(t) {
            var n = p(t)
              , e = 6 * l
              , r = n > 0
              , i = s(n) > 1e-6;
            function u(t, e) {
                return p(t) * p(e) > n
            }
            function a(t, e, r) {
                var i = H(t)
                  , u = H(e)
                  , a = [1, 0, 0]
                  , c = W(i, u)
                  , l = V(c, c)
                  , f = c[0]
                  , h = l - f * f;
                if (!h)
                    return !r && t;
                var p = W(a, c)
                  , d = K(a, n * l / h)
                  , v = K(c, -n * f / h);
                $(d, v);
                var g = V(d, p)
                  , m = V(p, p)
                  , y = g * g - m * (V(d, d) - 1);
                if (!(y < 0)) {
                    var _ = b(y)
                      , w = K(p, (-g - _) / m);
                    if ($(w, d),
                    w = U(w),
                    !r)
                        return w;
                    var E, x = t[0], M = e[0], S = t[1], k = e[1];
                    M < x && (E = x,
                    x = M,
                    M = E);
                    var N = M - x
                      , A = 1e-6 > s(N - o);
                    if (!A && k < S && (E = S,
                    S = k,
                    k = E),
                    A || N < 1e-6 ? A ? S + k > 0 ^ w[1] < (1e-6 > s(w[0] - x) ? S : k) : S <= w[1] && w[1] <= k : N > o ^ (x <= w[0] && w[0] <= M)) {
                        var P = K(p, (-g + _) / m);
                        return $(P, d),
                        [w, U(P)]
                    }
                }
            }
            function c(n, e) {
                var i = r ? t : o - t
                  , u = 0;
                return n < -i ? u |= 1 : n > i && (u |= 2),
                e < -i ? u |= 4 : e > i && (u |= 8),
                u
            }
            return tY(u, function(t) {
                var n, e, l, s, f;
                return {
                    lineStart: function() {
                        s = l = !1,
                        f = 1
                    },
                    point: function(h, p) {
                        var d, v, g = [h, p], m = u(h, p), y = r ? m ? 0 : c(h, p) : m ? c(h + (h < 0 ? o : -o), p) : 0;
                        !n && (s = l = m) && t.lineStart(),
                        m !== l && (!(v = a(n, g)) || tT(n, v) || tT(g, v)) && (g[2] = 1),
                        m !== l ? (f = 0,
                        m ? (t.lineStart(),
                        v = a(g, n),
                        t.point(v[0], v[1])) : (v = a(n, g),
                        t.point(v[0], v[1], 2),
                        t.lineEnd()),
                        n = v) : i && n && r ^ m && !(y & e) && (d = a(g, n, !0)) && (f = 0,
                        r ? (t.lineStart(),
                        t.point(d[0][0], d[0][1]),
                        t.point(d[1][0], d[1][1]),
                        t.lineEnd()) : (t.point(d[1][0], d[1][1]),
                        t.lineEnd(),
                        t.lineStart(),
                        t.point(d[0][0], d[0][1], 3))),
                        !m || n && tT(n, g) || t.point(g[0], g[1]),
                        n = g,
                        l = m,
                        e = y
                    },
                    lineEnd: function() {
                        l && t.lineEnd(),
                        n = null
                    },
                    clean: function() {
                        return f | (s && l) << 1
                    }
                }
            }, function(n, r, o, i) {
                tz(i, t, e, o, n, r)
            }, r ? [0, -t] : [-o, t - o])
        }
        function tH(t, n, e, r) {
            function o(o, i) {
                return t <= o && o <= e && n <= i && i <= r
            }
            function i(o, i, a, l) {
                var s = 0
                  , f = 0;
                if (null == o || (s = u(o, a)) !== (f = u(i, a)) || 0 > c(o, i) ^ a > 0)
                    do
                        l.point(0 === s || 3 === s ? t : e, s > 1 ? r : n);
                    while ((s = (s + a + 4) % 4) !== f);
                else
                    l.point(i[0], i[1])
            }
            function u(r, o) {
                return 1e-6 > s(r[0] - t) ? o > 0 ? 0 : 3 : 1e-6 > s(r[0] - e) ? o > 0 ? 2 : 1 : 1e-6 > s(r[1] - n) ? o > 0 ? 1 : 0 : o > 0 ? 3 : 2
            }
            function a(t, n) {
                return c(t.x, n.x)
            }
            function c(t, n) {
                var e = u(t, 1)
                  , r = u(n, 1);
                return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
            }
            return function(u) {
                var c, l, s, f, h, p, d, v, g, m, y, _ = u, w = tO(), b = {
                    point: E,
                    lineStart: function() {
                        b.point = x,
                        l && l.push(s = []),
                        m = !0,
                        g = !1,
                        d = v = NaN
                    },
                    lineEnd: function() {
                        c && (x(f, h),
                        p && g && w.rejoin(),
                        c.push(w.result())),
                        b.point = E,
                        g && _.lineEnd()
                    },
                    polygonStart: function() {
                        _ = w,
                        c = [],
                        l = [],
                        y = !0
                    },
                    polygonEnd: function() {
                        var n = function() {
                            for (var n = 0, e = 0, o = l.length; e < o; ++e)
                                for (var i, u, a = l[e], c = 1, s = a.length, f = a[0], h = f[0], p = f[1]; c < s; ++c)
                                    i = h,
                                    u = p,
                                    h = (f = a[c])[0],
                                    p = f[1],
                                    u <= r ? p > r && (h - i) * (r - u) > (p - u) * (t - i) && ++n : p <= r && (h - i) * (r - u) < (p - u) * (t - i) && --n;
                            return n
                        }()
                          , e = y && n
                          , o = (c = tX(c)).length;
                        (e || o) && (u.polygonStart(),
                        e && (u.lineStart(),
                        i(null, null, 1, u),
                        u.lineEnd()),
                        o && tq(c, a, n, i, u),
                        u.polygonEnd()),
                        _ = u,
                        c = l = s = null
                    }
                };
                function E(t, n) {
                    o(t, n) && _.point(t, n)
                }
                function x(i, u) {
                    var a = o(i, u);
                    if (l && s.push([i, u]),
                    m)
                        f = i,
                        h = u,
                        p = a,
                        m = !1,
                        a && (_.lineStart(),
                        _.point(i, u));
                    else if (a && g)
                        _.point(i, u);
                    else {
                        var c = [d = Math.max(-1e9, Math.min(1e9, d)), v = Math.max(-1e9, Math.min(1e9, v))]
                          , w = [i = Math.max(-1e9, Math.min(1e9, i)), u = Math.max(-1e9, Math.min(1e9, u))];
                        !function(t, n, e, r, o, i) {
                            var u, a = t[0], c = t[1], l = n[0], s = n[1], f = 0, h = 1, p = l - a, d = s - c;
                            if (u = e - a,
                            p || !(u > 0)) {
                                if (u /= p,
                                p < 0) {
                                    if (u < f)
                                        return;
                                    u < h && (h = u)
                                } else if (p > 0) {
                                    if (u > h)
                                        return;
                                    u > f && (f = u)
                                }
                                if (u = o - a,
                                p || !(u < 0)) {
                                    if (u /= p,
                                    p < 0) {
                                        if (u > h)
                                            return;
                                        u > f && (f = u)
                                    } else if (p > 0) {
                                        if (u < f)
                                            return;
                                        u < h && (h = u)
                                    }
                                    if (u = r - c,
                                    d || !(u > 0)) {
                                        if (u /= d,
                                        d < 0) {
                                            if (u < f)
                                                return;
                                            u < h && (h = u)
                                        } else if (d > 0) {
                                            if (u > h)
                                                return;
                                            u > f && (f = u)
                                        }
                                        if (u = i - c,
                                        d || !(u < 0)) {
                                            if (u /= d,
                                            d < 0) {
                                                if (u > h)
                                                    return;
                                                u > f && (f = u)
                                            } else if (d > 0) {
                                                if (u < f)
                                                    return;
                                                u < h && (h = u)
                                            }
                                            return f > 0 && (t[0] = a + f * p,
                                            t[1] = c + f * d),
                                            h < 1 && (n[0] = a + h * p,
                                            n[1] = c + h * d),
                                            !0
                                        }
                                    }
                                }
                            }
                        }(c, w, t, n, e, r) ? a && (_.lineStart(),
                        _.point(i, u),
                        y = !1) : (g || (_.lineStart(),
                        _.point(c[0], c[1])),
                        _.point(w[0], w[1]),
                        a || _.lineEnd(),
                        y = !1)
                    }
                    d = i,
                    v = u,
                    g = a
                }
                return b
            }
        }
        function tV() {
            var t, n, e, r = 0, o = 0, i = 960, u = 500;
            return e = {
                stream: function(e) {
                    return t && n === e ? t : t = tH(r, o, i, u)(n = e)
                },
                extent: function(a) {
                    return arguments.length ? (r = +a[0][0],
                    o = +a[0][1],
                    i = +a[1][0],
                    u = +a[1][1],
                    t = n = null,
                    e) : [[r, o], [i, u]]
                }
            }
        }
        var tW = {
            sphere: k,
            point: k,
            lineStart: function() {
                tW.point = tK,
                tW.lineEnd = t$
            },
            lineEnd: k,
            polygonStart: k,
            polygonEnd: k
        };
        function t$() {
            tW.point = tW.lineEnd = k
        }
        function tK(t, n) {
            t *= l,
            n *= l,
            nR = t,
            nq = _(n),
            nL = p(n),
            tW.point = tJ
        }
        function tJ(t, n) {
            t *= l;
            var e = _(n *= l)
              , r = p(n)
              , o = s(t - nR)
              , i = p(o)
              , u = _(o)
              , a = r * u
              , c = nL * e - nq * r * i
              , f = nq * e + nL * r * i;
            nT.add(h(b(a * a + c * c), f)),
            nR = t,
            nq = e,
            nL = r
        }
        function tQ(t) {
            return nT = new r,
            Z(t, tW),
            +nT
        }
        var t0 = [null, null]
          , t1 = {
            type: "LineString",
            coordinates: t0
        };
        function t2(t, n) {
            return t0[0] = t,
            t0[1] = n,
            tQ(t1)
        }
        var t5 = {
            Feature: function(t, n) {
                return t3(t.geometry, n)
            },
            FeatureCollection: function(t, n) {
                for (var e = t.features, r = -1, o = e.length; ++r < o; )
                    if (t3(e[r].geometry, n))
                        return !0;
                return !1
            }
        }
          , t6 = {
            Sphere: function() {
                return !0
            },
            Point: function(t, n) {
                return t4(t.coordinates, n)
            },
            MultiPoint: function(t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
                    if (t4(e[r], n))
                        return !0;
                return !1
            },
            LineString: function(t, n) {
                return t9(t.coordinates, n)
            },
            MultiLineString: function(t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
                    if (t9(e[r], n))
                        return !0;
                return !1
            },
            Polygon: function(t, n) {
                return t7(t.coordinates, n)
            },
            MultiPolygon: function(t, n) {
                for (var e = t.coordinates, r = -1, o = e.length; ++r < o; )
                    if (t7(e[r], n))
                        return !0;
                return !1
            },
            GeometryCollection: function(t, n) {
                for (var e = t.geometries, r = -1, o = e.length; ++r < o; )
                    if (t3(e[r], n))
                        return !0;
                return !1
            }
        };
        function t3(t, n) {
            return !!(t && t6.hasOwnProperty(t.type)) && t6[t.type](t, n)
        }
        function t4(t, n) {
            return 0 === t2(t, n)
        }
        function t9(t, n) {
            for (var e, r, o, i = 0, u = t.length; i < u; i++) {
                if (0 === (r = t2(t[i], n)) || i > 0 && (o = t2(t[i], t[i - 1])) > 0 && e <= o && r <= o && (e + r - o) * (1 - Math.pow((e - r) / o, 2)) < 1e-12 * o)
                    return !0;
                e = r
            }
            return !1
        }
        function t7(t, n) {
            return !!tD(t.map(t8), nt(n))
        }
        function t8(t) {
            return (t = t.map(nt)).pop(),
            t
        }
        function nt(t) {
            return [t[0] * l, t[1] * l]
        }
        function nn(t, n) {
            return (t && t5.hasOwnProperty(t.type) ? t5[t.type] : t3)(t, n)
        }
        function ne(t, n, e) {
            t = +t,
            n = +n,
            e = (o = arguments.length) < 2 ? (n = t,
            t = 0,
            1) : o < 3 ? 1 : +e;
            for (var r = -1, o = 0 | Math.max(0, Math.ceil((n - t) / e)), i = Array(o); ++r < o; )
                i[r] = t + r * e;
            return i
        }
        function nr(t, n, e) {
            var r = ne(t, n - 1e-6, e).concat(n);
            return function(t) {
                return r.map(function(n) {
                    return [t, n]
                })
            }
        }
        function no(t, n, e) {
            var r = ne(t, n - 1e-6, e).concat(n);
            return function(t) {
                return r.map(function(n) {
                    return [n, t]
                })
            }
        }
        function ni() {
            var t, n, e, r, o, i, u, a, c, l, f, h, p = 10, v = p, g = 90, m = 360, y = 2.5;
            function _() {
                return {
                    type: "MultiLineString",
                    coordinates: w()
                }
            }
            function w() {
                return ne(d(r / g) * g, e, g).map(f).concat(ne(d(a / m) * m, u, m).map(h)).concat(ne(d(n / p) * p, t, p).filter(function(t) {
                    return s(t % g) > 1e-6
                }).map(c)).concat(ne(d(i / v) * v, o, v).filter(function(t) {
                    return s(t % m) > 1e-6
                }).map(l))
            }
            return _.lines = function() {
                return w().map(function(t) {
                    return {
                        type: "LineString",
                        coordinates: t
                    }
                })
            }
            ,
            _.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [f(r).concat(h(u).slice(1), f(e).reverse().slice(1), h(a).reverse().slice(1))]
                }
            }
            ,
            _.extent = function(t) {
                return arguments.length ? _.extentMajor(t).extentMinor(t) : _.extentMinor()
            }
            ,
            _.extentMajor = function(t) {
                return arguments.length ? (r = +t[0][0],
                e = +t[1][0],
                a = +t[0][1],
                u = +t[1][1],
                r > e && (t = r,
                r = e,
                e = t),
                a > u && (t = a,
                a = u,
                u = t),
                _.precision(y)) : [[r, a], [e, u]]
            }
            ,
            _.extentMinor = function(e) {
                return arguments.length ? (n = +e[0][0],
                t = +e[1][0],
                i = +e[0][1],
                o = +e[1][1],
                n > t && (e = n,
                n = t,
                t = e),
                i > o && (e = i,
                i = o,
                o = e),
                _.precision(y)) : [[n, i], [t, o]]
            }
            ,
            _.step = function(t) {
                return arguments.length ? _.stepMajor(t).stepMinor(t) : _.stepMinor()
            }
            ,
            _.stepMajor = function(t) {
                return arguments.length ? (g = +t[0],
                m = +t[1],
                _) : [g, m]
            }
            ,
            _.stepMinor = function(t) {
                return arguments.length ? (p = +t[0],
                v = +t[1],
                _) : [p, v]
            }
            ,
            _.precision = function(s) {
                return arguments.length ? (y = +s,
                c = nr(i, o, 90),
                l = no(n, t, y),
                f = nr(a, u, 90),
                h = no(r, e, y),
                _) : y
            }
            ,
            _.extentMajor([[-180, -89.999999], [180, 89.999999]]).extentMinor([[-180, -80.000001], [180, 80.000001]])
        }
        function nu() {
            return ni()()
        }
        function na(t, n) {
            var e = t[0] * l
              , r = t[1] * l
              , o = n[0] * l
              , i = n[1] * l
              , u = p(r)
              , a = _(r)
              , s = p(i)
              , f = _(i)
              , d = u * p(e)
              , v = u * _(e)
              , g = s * p(o)
              , m = s * _(o)
              , y = 2 * M(b(S(i - r) + u * s * S(o - e)))
              , w = _(y)
              , E = y ? function(t) {
                var n = _(t *= y) / w
                  , e = _(y - t) / w
                  , r = e * d + n * g
                  , o = e * v + n * m;
                return [h(o, r) * c, h(e * a + n * f, b(r * r + o * o)) * c]
            }
            : function() {
                return [e * c, r * c]
            }
            ;
            return E.distance = y,
            E
        }
        var nc, nl, ns, nf, nh, np, nd, nv, ng, nm, ny, n_, nw, nb, nE, nx, nM, nS, nk, nN, nA, nP, nj, nz, nZ, nC, nO, nT, nR, nq, nL, nG, nD, nX, nY, nI = t=>t, nB = new r, nF = new r, nU = {
            point: k,
            lineStart: k,
            lineEnd: k,
            polygonStart: function() {
                nU.lineStart = nH,
                nU.lineEnd = n$
            },
            polygonEnd: function() {
                nU.lineStart = nU.lineEnd = nU.point = k,
                nB.add(s(nF)),
                nF = new r
            },
            result: function() {
                var t = nB / 2;
                return nB = new r,
                t
            }
        };
        function nH() {
            nU.point = nV
        }
        function nV(t, n) {
            nU.point = nW,
            nG = nX = t,
            nD = nY = n
        }
        function nW(t, n) {
            nF.add(nY * t - nX * n),
            nX = t,
            nY = n
        }
        function n$() {
            nW(nG, nD)
        }
        var nK, nJ, nQ, n0, n1 = 1 / 0, n2 = n1, n5 = -n1, n6 = n5, n3 = {
            point: function(t, n) {
                t < n1 && (n1 = t),
                t > n5 && (n5 = t),
                n < n2 && (n2 = n),
                n > n6 && (n6 = n)
            },
            lineStart: k,
            lineEnd: k,
            polygonStart: k,
            polygonEnd: k,
            result: function() {
                var t = [[n1, n2], [n5, n6]];
                return n5 = n6 = -(n2 = n1 = 1 / 0),
                t
            }
        }, n4 = 0, n9 = 0, n7 = 0, n8 = 0, et = 0, en = 0, ee = 0, er = 0, eo = 0, ei = {
            point: eu,
            lineStart: ea,
            lineEnd: es,
            polygonStart: function() {
                ei.lineStart = ef,
                ei.lineEnd = eh
            },
            polygonEnd: function() {
                ei.point = eu,
                ei.lineStart = ea,
                ei.lineEnd = es
            },
            result: function() {
                var t = eo ? [ee / eo, er / eo] : en ? [n8 / en, et / en] : n7 ? [n4 / n7, n9 / n7] : [NaN, NaN];
                return n4 = n9 = n7 = n8 = et = en = ee = er = eo = 0,
                t
            }
        };
        function eu(t, n) {
            n4 += t,
            n9 += n,
            ++n7
        }
        function ea() {
            ei.point = ec
        }
        function ec(t, n) {
            ei.point = el,
            eu(nQ = t, n0 = n)
        }
        function el(t, n) {
            var e = t - nQ
              , r = n - n0
              , o = b(e * e + r * r);
            n8 += o * (nQ + t) / 2,
            et += o * (n0 + n) / 2,
            en += o,
            eu(nQ = t, n0 = n)
        }
        function es() {
            ei.point = eu
        }
        function ef() {
            ei.point = ep
        }
        function eh() {
            ed(nK, nJ)
        }
        function ep(t, n) {
            ei.point = ed,
            eu(nK = nQ = t, nJ = n0 = n)
        }
        function ed(t, n) {
            var e = t - nQ
              , r = n - n0
              , o = b(e * e + r * r);
            n8 += o * (nQ + t) / 2,
            et += o * (n0 + n) / 2,
            en += o,
            ee += (o = n0 * t - nQ * n) * (nQ + t),
            er += o * (n0 + n),
            eo += 3 * o,
            eu(nQ = t, n0 = n)
        }
        function ev(t) {
            this._context = t
        }
        ev.prototype = {
            _radius: 4.5,
            pointRadius: function(t) {
                return this._radius = t,
                this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._context.closePath(),
                this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                case 0:
                    this._context.moveTo(t, n),
                    this._point = 1;
                    break;
                case 1:
                    this._context.lineTo(t, n);
                    break;
                default:
                    this._context.moveTo(t + this._radius, n),
                    this._context.arc(t, n, this._radius, 0, a)
                }
            },
            result: k
        };
        var eg, em, ey, e_, ew, eb = new r, eE = {
            point: k,
            lineStart: function() {
                eE.point = ex
            },
            lineEnd: function() {
                eg && eM(em, ey),
                eE.point = k
            },
            polygonStart: function() {
                eg = !0
            },
            polygonEnd: function() {
                eg = null
            },
            result: function() {
                var t = +eb;
                return eb = new r,
                t
            }
        };
        function ex(t, n) {
            eE.point = eM,
            em = e_ = t,
            ey = ew = n
        }
        function eM(t, n) {
            e_ -= t,
            ew -= n,
            eb.add(b(e_ * e_ + ew * ew)),
            e_ = t,
            ew = n
        }
        function eS() {
            this._string = []
        }
        function ek(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }
        function eN(t, n) {
            var e, r, o = 4.5;
            function i(t) {
                return t && ("function" == typeof o && r.pointRadius(+o.apply(this, arguments)),
                Z(t, e(r))),
                r.result()
            }
            return i.area = function(t) {
                return Z(t, e(nU)),
                nU.result()
            }
            ,
            i.measure = function(t) {
                return Z(t, e(eE)),
                eE.result()
            }
            ,
            i.bounds = function(t) {
                return Z(t, e(n3)),
                n3.result()
            }
            ,
            i.centroid = function(t) {
                return Z(t, e(ei)),
                ei.result()
            }
            ,
            i.projection = function(n) {
                return arguments.length ? (e = null == n ? (t = null,
                nI) : (t = n).stream,
                i) : t
            }
            ,
            i.context = function(t) {
                return arguments.length ? (r = null == t ? (n = null,
                new eS) : new ev(n = t),
                "function" != typeof o && r.pointRadius(o),
                i) : n
            }
            ,
            i.pointRadius = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : (r.pointRadius(+t),
                +t),
                i) : o
            }
            ,
            i.projection(t).context(n)
        }
        function eA(t) {
            return {
                stream: eP(t)
            }
        }
        function eP(t) {
            return function(n) {
                var e = new ej;
                for (var r in t)
                    e[r] = t[r];
                return e.stream = n,
                e
            }
        }
        function ej() {}
        function ez(t, n, e) {
            var r = t.clipExtent && t.clipExtent();
            return t.scale(150).translate([0, 0]),
            null != r && t.clipExtent(null),
            Z(e, t.stream(n3)),
            n(n3.result()),
            null != r && t.clipExtent(r),
            t
        }
        function eZ(t, n, e) {
            return ez(t, function(e) {
                var r = n[1][0] - n[0][0]
                  , o = n[1][1] - n[0][1]
                  , i = Math.min(r / (e[1][0] - e[0][0]), o / (e[1][1] - e[0][1]))
                  , u = +n[0][0] + (r - i * (e[1][0] + e[0][0])) / 2
                  , a = +n[0][1] + (o - i * (e[1][1] + e[0][1])) / 2;
                t.scale(150 * i).translate([u, a])
            }, e)
        }
        function eC(t, n, e) {
            return eZ(t, [[0, 0], n], e)
        }
        function eO(t, n, e) {
            return ez(t, function(e) {
                var r = +n
                  , o = r / (e[1][0] - e[0][0])
                  , i = (r - o * (e[1][0] + e[0][0])) / 2
                  , u = -o * e[0][1];
                t.scale(150 * o).translate([i, u])
            }, e)
        }
        function eT(t, n, e) {
            return ez(t, function(e) {
                var r = +n
                  , o = r / (e[1][1] - e[0][1])
                  , i = -o * e[0][0]
                  , u = (r - o * (e[1][1] + e[0][1])) / 2;
                t.scale(150 * o).translate([i, u])
            }, e)
        }
        eS.prototype = {
            _radius: 4.5,
            _circle: ek(4.5),
            pointRadius: function(t) {
                return (t = +t) !== this._radius && (this._radius = t,
                this._circle = null),
                this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._string.push("Z"),
                this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                case 0:
                    this._string.push("M", t, ",", n),
                    this._point = 1;
                    break;
                case 1:
                    this._string.push("L", t, ",", n);
                    break;
                default:
                    null == this._circle && (this._circle = ek(this._radius)),
                    this._string.push("M", t, ",", n, this._circle)
                }
            },
            result: function() {
                if (!this._string.length)
                    return null;
                var t = this._string.join("");
                return this._string = [],
                t
            }
        },
        ej.prototype = {
            constructor: ej,
            point: function(t, n) {
                this.stream.point(t, n)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        };
        var eR = p(30 * l);
        function eq(t, n) {
            var e;
            return +n ? function(t, n) {
                function e(r, o, i, u, a, c, l, f, p, d, v, g, m, y) {
                    var _ = l - r
                      , w = f - o
                      , E = _ * _ + w * w;
                    if (E > 4 * n && m--) {
                        var x = u + d
                          , S = a + v
                          , k = c + g
                          , N = b(x * x + S * S + k * k)
                          , A = M(k /= N)
                          , P = 1e-6 > s(s(k) - 1) || 1e-6 > s(i - p) ? (i + p) / 2 : h(S, x)
                          , j = t(P, A)
                          , z = j[0]
                          , Z = j[1]
                          , C = z - r
                          , O = Z - o
                          , T = w * C - _ * O;
                        (T * T / E > n || s((_ * C + w * O) / E - .5) > .3 || u * d + a * v + c * g < eR) && (e(r, o, i, u, a, c, z, Z, P, x /= N, S /= N, k, m, y),
                        y.point(z, Z),
                        e(z, Z, P, x, S, k, l, f, p, d, v, g, m, y))
                    }
                }
                return function(n) {
                    var r, o, i, u, a, c, l, s, f, h, p, d, v = {
                        point: g,
                        lineStart: m,
                        lineEnd: _,
                        polygonStart: function() {
                            n.polygonStart(),
                            v.lineStart = w
                        },
                        polygonEnd: function() {
                            n.polygonEnd(),
                            v.lineStart = m
                        }
                    };
                    function g(e, r) {
                        e = t(e, r),
                        n.point(e[0], e[1])
                    }
                    function m() {
                        s = NaN,
                        v.point = y,
                        n.lineStart()
                    }
                    function y(r, o) {
                        var i = H([r, o])
                          , u = t(r, o);
                        e(s, f, l, h, p, d, s = u[0], f = u[1], l = r, h = i[0], p = i[1], d = i[2], 16, n),
                        n.point(s, f)
                    }
                    function _() {
                        v.point = g,
                        n.lineEnd()
                    }
                    function w() {
                        m(),
                        v.point = b,
                        v.lineEnd = E
                    }
                    function b(t, n) {
                        y(r = t, n),
                        o = s,
                        i = f,
                        u = h,
                        a = p,
                        c = d,
                        v.point = y
                    }
                    function E() {
                        e(s, f, l, h, p, d, o, i, r, u, a, c, 16, n),
                        v.lineEnd = _,
                        _()
                    }
                    return v
                }
            }(t, n) : (e = t,
            eP({
                point: function(t, n) {
                    t = e(t, n),
                    this.stream.point(t[0], t[1])
                }
            }))
        }
        var eL = eP({
            point: function(t, n) {
                this.stream.point(t * l, n * l)
            }
        });
        function eG(t, n, e, r, o, i) {
            if (!i)
                return function(t, n, e, r, o) {
                    function i(i, u) {
                        return [n + t * (i *= r), e - t * (u *= o)]
                    }
                    return i.invert = function(i, u) {
                        return [(i - n) / t * r, (e - u) / t * o]
                    }
                    ,
                    i
                }(t, n, e, r, o);
            var u = p(i)
              , a = _(i)
              , c = u * t
              , l = a * t
              , s = u / t
              , f = a / t
              , h = (a * e - u * n) / t
              , d = (a * n + u * e) / t;
            function v(t, i) {
                return [c * (t *= r) - l * (i *= o) + n, e - l * t - c * i]
            }
            return v.invert = function(t, n) {
                return [r * (s * t - f * n + h), o * (d - f * t - s * n)]
            }
            ,
            v
        }
        function eD(t) {
            return eX(function() {
                return t
            })()
        }
        function eX(t) {
            var n, e, r, o, i, u, a, s, f, h, p = 150, d = 480, v = 250, g = 0, m = 0, y = 0, _ = 0, w = 0, E = 0, x = 1, M = 1, S = null, k = tF, N = null, A = nI, P = .5;
            function j(t) {
                return s(t[0] * l, t[1] * l)
            }
            function z(t) {
                return (t = s.invert(t[0], t[1])) && [t[0] * c, t[1] * c]
            }
            function Z() {
                var t = eG(p, 0, 0, x, M, E).apply(null, n(g, m))
                  , r = eG(p, d - t[0], v - t[1], x, M, E);
                return e = tk(y, _, w),
                a = tM(n, r),
                s = tM(e, a),
                u = eq(a, P),
                C()
            }
            function C() {
                return f = h = null,
                j
            }
            return j.stream = function(t) {
                var n;
                return f && h === t ? f : f = eL((n = e,
                eP({
                    point: function(t, e) {
                        var r = n(t, e);
                        return this.stream.point(r[0], r[1])
                    }
                }))(k(u(A(h = t)))))
            }
            ,
            j.preclip = function(t) {
                return arguments.length ? (k = t,
                S = void 0,
                C()) : k
            }
            ,
            j.postclip = function(t) {
                return arguments.length ? (A = t,
                N = r = o = i = null,
                C()) : A
            }
            ,
            j.clipAngle = function(t) {
                return arguments.length ? (k = +t ? tU(S = t * l) : (S = null,
                tF),
                C()) : S * c
            }
            ,
            j.clipExtent = function(t) {
                return arguments.length ? (A = null == t ? (N = r = o = i = null,
                nI) : tH(N = +t[0][0], r = +t[0][1], o = +t[1][0], i = +t[1][1]),
                C()) : null == N ? null : [[N, r], [o, i]]
            }
            ,
            j.scale = function(t) {
                return arguments.length ? (p = +t,
                Z()) : p
            }
            ,
            j.translate = function(t) {
                return arguments.length ? (d = +t[0],
                v = +t[1],
                Z()) : [d, v]
            }
            ,
            j.center = function(t) {
                return arguments.length ? (g = t[0] % 360 * l,
                m = t[1] % 360 * l,
                Z()) : [g * c, m * c]
            }
            ,
            j.rotate = function(t) {
                return arguments.length ? (y = t[0] % 360 * l,
                _ = t[1] % 360 * l,
                w = t.length > 2 ? t[2] % 360 * l : 0,
                Z()) : [y * c, _ * c, w * c]
            }
            ,
            j.angle = function(t) {
                return arguments.length ? (E = t % 360 * l,
                Z()) : E * c
            }
            ,
            j.reflectX = function(t) {
                return arguments.length ? (x = t ? -1 : 1,
                Z()) : x < 0
            }
            ,
            j.reflectY = function(t) {
                return arguments.length ? (M = t ? -1 : 1,
                Z()) : M < 0
            }
            ,
            j.precision = function(t) {
                return arguments.length ? (u = eq(a, P = t * t),
                C()) : b(P)
            }
            ,
            j.fitExtent = function(t, n) {
                return eZ(j, t, n)
            }
            ,
            j.fitSize = function(t, n) {
                return eC(j, t, n)
            }
            ,
            j.fitWidth = function(t, n) {
                return eO(j, t, n)
            }
            ,
            j.fitHeight = function(t, n) {
                return eT(j, t, n)
            }
            ,
            function() {
                return n = t.apply(this, arguments),
                j.invert = n.invert && z,
                Z()
            }
        }
        function eY(t) {
            var n = 0
              , e = o / 3
              , r = eX(t)
              , i = r(n, e);
            return i.parallels = function(t) {
                return arguments.length ? r(n = t[0] * l, e = t[1] * l) : [n * c, e * c]
            }
            ,
            i
        }
        function eI(t, n) {
            var e = _(t)
              , r = (e + _(n)) / 2;
            if (1e-6 > s(r))
                return function(t) {
                    var n = p(t);
                    function e(t, e) {
                        return [t * n, _(e) / n]
                    }
                    return e.invert = function(t, e) {
                        return [t / n, M(e * n)]
                    }
                    ,
                    e
                }(t);
            var i = 1 + e * (2 * r - e)
              , u = b(i) / r;
            function a(t, n) {
                var e = b(i - 2 * r * _(n)) / r;
                return [e * _(t *= r), u - e * p(t)]
            }
            return a.invert = function(t, n) {
                var e = u - n
                  , a = h(t, s(e)) * w(e);
                return e * r < 0 && (a -= o * w(t) * w(e)),
                [a / r, M((i - (t * t + e * e) * r * r) / (2 * r))]
            }
            ,
            a
        }
        function eB() {
            return eY(eI).scale(155.424).center([0, 33.6442])
        }
        function eF() {
            return eB().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
        }
        function eU() {
            var t, n, e, r, o, i, u = eF(), a = eB().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), c = eB().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), l = {
                point: function(t, n) {
                    i = [t, n]
                }
            };
            function s(t) {
                var n = t[0]
                  , u = t[1];
                return i = null,
                e.point(n, u),
                i || (r.point(n, u),
                i) || (o.point(n, u),
                i)
            }
            function f() {
                return t = n = null,
                s
            }
            return s.invert = function(t) {
                var n = u.scale()
                  , e = u.translate()
                  , r = (t[0] - e[0]) / n
                  , o = (t[1] - e[1]) / n;
                return (o >= .12 && o < .234 && r >= -.425 && r < -.214 ? a : o >= .166 && o < .234 && r >= -.214 && r < -.115 ? c : u).invert(t)
            }
            ,
            s.stream = function(e) {
                var r, o;
                return t && n === e ? t : (o = (r = [u.stream(n = e), a.stream(e), c.stream(e)]).length,
                t = {
                    point: function(t, n) {
                        for (var e = -1; ++e < o; )
                            r[e].point(t, n)
                    },
                    sphere: function() {
                        for (var t = -1; ++t < o; )
                            r[t].sphere()
                    },
                    lineStart: function() {
                        for (var t = -1; ++t < o; )
                            r[t].lineStart()
                    },
                    lineEnd: function() {
                        for (var t = -1; ++t < o; )
                            r[t].lineEnd()
                    },
                    polygonStart: function() {
                        for (var t = -1; ++t < o; )
                            r[t].polygonStart()
                    },
                    polygonEnd: function() {
                        for (var t = -1; ++t < o; )
                            r[t].polygonEnd()
                    }
                })
            }
            ,
            s.precision = function(t) {
                return arguments.length ? (u.precision(t),
                a.precision(t),
                c.precision(t),
                f()) : u.precision()
            }
            ,
            s.scale = function(t) {
                return arguments.length ? (u.scale(t),
                a.scale(.35 * t),
                c.scale(t),
                s.translate(u.translate())) : u.scale()
            }
            ,
            s.translate = function(t) {
                if (!arguments.length)
                    return u.translate();
                var n = u.scale()
                  , i = +t[0]
                  , s = +t[1];
                return e = u.translate(t).clipExtent([[i - .455 * n, s - .238 * n], [i + .455 * n, s + .238 * n]]).stream(l),
                r = a.translate([i - .307 * n, s + .201 * n]).clipExtent([[i - .425 * n + 1e-6, s + .12 * n + 1e-6], [i - .214 * n - 1e-6, s + .234 * n - 1e-6]]).stream(l),
                o = c.translate([i - .205 * n, s + .212 * n]).clipExtent([[i - .214 * n + 1e-6, s + .166 * n + 1e-6], [i - .115 * n - 1e-6, s + .234 * n - 1e-6]]).stream(l),
                f()
            }
            ,
            s.fitExtent = function(t, n) {
                return eZ(s, t, n)
            }
            ,
            s.fitSize = function(t, n) {
                return eC(s, t, n)
            }
            ,
            s.fitWidth = function(t, n) {
                return eO(s, t, n)
            }
            ,
            s.fitHeight = function(t, n) {
                return eT(s, t, n)
            }
            ,
            s.scale(1070)
        }
        function eH(t) {
            return function(n, e) {
                var r = p(n)
                  , o = p(e)
                  , i = t(r * o);
                return i === 1 / 0 ? [2, 0] : [i * o * _(n), i * _(e)]
            }
        }
        function eV(t) {
            return function(n, e) {
                var r = b(n * n + e * e)
                  , o = t(r)
                  , i = _(o)
                  , u = p(o);
                return [h(n * i, r * u), M(r && e * i / r)]
            }
        }
        var eW = eH(function(t) {
            return b(2 / (1 + t))
        });
        function e$() {
            return eD(eW).scale(124.75).clipAngle(179.999)
        }
        eW.invert = eV(function(t) {
            return 2 * M(t / 2)
        });
        var eK = eH(function(t) {
            return (t = x(t)) && t / _(t)
        });
        function eJ() {
            return eD(eK).scale(79.4188).clipAngle(179.999)
        }
        function eQ(t, n) {
            return [t, m(E((i + n) / 2))]
        }
        function e0() {
            return e1(eQ).scale(961 / a)
        }
        function e1(t) {
            var n, e, r, i = eD(t), u = i.center, a = i.scale, c = i.translate, l = i.clipExtent, s = null;
            function f() {
                var u = o * a()
                  , c = i(tj(i.rotate()).invert([0, 0]));
                return l(null == s ? [[c[0] - u, c[1] - u], [c[0] + u, c[1] + u]] : t === eQ ? [[Math.max(c[0] - u, s), n], [Math.min(c[0] + u, e), r]] : [[s, Math.max(c[1] - u, n)], [e, Math.min(c[1] + u, r)]])
            }
            return i.scale = function(t) {
                return arguments.length ? (a(t),
                f()) : a()
            }
            ,
            i.translate = function(t) {
                return arguments.length ? (c(t),
                f()) : c()
            }
            ,
            i.center = function(t) {
                return arguments.length ? (u(t),
                f()) : u()
            }
            ,
            i.clipExtent = function(t) {
                return arguments.length ? (null == t ? s = n = e = r = null : (s = +t[0][0],
                n = +t[0][1],
                e = +t[1][0],
                r = +t[1][1]),
                f()) : null == s ? null : [[s, n], [e, r]]
            }
            ,
            f()
        }
        function e2(t) {
            return E((i + t) / 2)
        }
        function e5(t, n) {
            var e = p(t)
              , r = t === n ? _(t) : m(e / p(n)) / m(e2(n) / e2(t))
              , u = e * y(e2(t), r) / r;
            if (!r)
                return eQ;
            function a(t, n) {
                u > 0 ? n < -i + 1e-6 && (n = -i + 1e-6) : n > i - 1e-6 && (n = i - 1e-6);
                var e = u / y(e2(n), r);
                return [e * _(r * t), u - e * p(r * t)]
            }
            return a.invert = function(t, n) {
                var e = u - n
                  , a = w(r) * b(t * t + e * e)
                  , c = h(t, s(e)) * w(e);
                return e * r < 0 && (c -= o * w(t) * w(e)),
                [c / r, 2 * f(y(u / a, 1 / r)) - i]
            }
            ,
            a
        }
        function e6() {
            return eY(e5).scale(109.5).parallels([30, 30])
        }
        function e3(t, n) {
            return [t, n]
        }
        function e4() {
            return eD(e3).scale(152.63)
        }
        function e9(t, n) {
            var e = p(t)
              , r = t === n ? _(t) : (e - p(n)) / (n - t)
              , i = e / r + t;
            if (1e-6 > s(r))
                return e3;
            function u(t, n) {
                var e = i - n
                  , o = r * t;
                return [e * _(o), i - e * p(o)]
            }
            return u.invert = function(t, n) {
                var e = i - n
                  , u = h(t, s(e)) * w(e);
                return e * r < 0 && (u -= o * w(t) * w(e)),
                [u / r, i - w(r) * b(t * t + e * e)]
            }
            ,
            u
        }
        function e7() {
            return eY(e9).scale(131.154).center([0, 13.9389])
        }
        eK.invert = eV(function(t) {
            return t
        }),
        eQ.invert = function(t, n) {
            return [t, 2 * f(v(n)) - i]
        }
        ,
        e3.invert = e3;
        var e8 = b(3) / 2;
        function rt(t, n) {
            var e = M(e8 * _(n))
              , r = e * e
              , o = r * r * r;
            return [t * p(e) / (e8 * (1.340264 + -.24331799999999998 * r + o * (.0062510000000000005 + .034164 * r))), e * (1.340264 + -.081106 * r + o * (893e-6 + .003796 * r))]
        }
        function rn() {
            return eD(rt).scale(177.158)
        }
        function re(t, n) {
            var e = p(n)
              , r = p(t) * e;
            return [e * _(t) / r, _(n) / r]
        }
        function rr() {
            return eD(re).scale(144.049).clipAngle(60)
        }
        function ro() {
            var t, n, e, r, o, i, u, a = 1, s = 0, f = 0, h = 1, d = 1, v = 0, g = null, m = 1, y = 1, w = eP({
                point: function(t, n) {
                    var e = x([t, n]);
                    this.stream.point(e[0], e[1])
                }
            }), b = nI;
            function E() {
                return m = a * h,
                y = a * d,
                i = u = null,
                x
            }
            function x(e) {
                var r = e[0] * m
                  , o = e[1] * y;
                if (v) {
                    var i = o * t - r * n;
                    r = r * t + o * n,
                    o = i
                }
                return [r + s, o + f]
            }
            return x.invert = function(e) {
                var r = e[0] - s
                  , o = e[1] - f;
                if (v) {
                    var i = o * t + r * n;
                    r = r * t - o * n,
                    o = i
                }
                return [r / m, o / y]
            }
            ,
            x.stream = function(t) {
                return i && u === t ? i : i = w(b(u = t))
            }
            ,
            x.postclip = function(t) {
                return arguments.length ? (b = t,
                g = e = r = o = null,
                E()) : b
            }
            ,
            x.clipExtent = function(t) {
                return arguments.length ? (b = null == t ? (g = e = r = o = null,
                nI) : tH(g = +t[0][0], e = +t[0][1], r = +t[1][0], o = +t[1][1]),
                E()) : null == g ? null : [[g, e], [r, o]]
            }
            ,
            x.scale = function(t) {
                return arguments.length ? (a = +t,
                E()) : a
            }
            ,
            x.translate = function(t) {
                return arguments.length ? (s = +t[0],
                f = +t[1],
                E()) : [s, f]
            }
            ,
            x.angle = function(e) {
                return arguments.length ? (n = _(v = e % 360 * l),
                t = p(v),
                E()) : v * c
            }
            ,
            x.reflectX = function(t) {
                return arguments.length ? (h = t ? -1 : 1,
                E()) : h < 0
            }
            ,
            x.reflectY = function(t) {
                return arguments.length ? (d = t ? -1 : 1,
                E()) : d < 0
            }
            ,
            x.fitExtent = function(t, n) {
                return eZ(x, t, n)
            }
            ,
            x.fitSize = function(t, n) {
                return eC(x, t, n)
            }
            ,
            x.fitWidth = function(t, n) {
                return eO(x, t, n)
            }
            ,
            x.fitHeight = function(t, n) {
                return eT(x, t, n)
            }
            ,
            x
        }
        function ri(t, n) {
            var e = n * n
              , r = e * e;
            return [t * (.8707 - .131979 * e + r * (-.013791 + r * (.003971 * e - .001529 * r))), n * (1.007226 + e * (.015085 + r * (-.044475 + .028874 * e - .005916 * r)))]
        }
        function ru() {
            return eD(ri).scale(175.295)
        }
        function ra(t, n) {
            return [p(n) * _(t), _(n)]
        }
        function rc() {
            return eD(ra).scale(249.5).clipAngle(90.000001)
        }
        function rl(t, n) {
            var e = p(n)
              , r = 1 + p(t) * e;
            return [e * _(t) / r, _(n) / r]
        }
        function rs() {
            return eD(rl).scale(250).clipAngle(142)
        }
        function rf(t, n) {
            return [m(E((i + n) / 2)), -t]
        }
        function rh() {
            var t = e1(rf)
              , n = t.center
              , e = t.rotate;
            return t.center = function(t) {
                return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]]
            }
            ,
            t.rotate = function(t) {
                return arguments.length ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90]
            }
            ,
            e([0, 0, 90]).scale(159.155)
        }
        rt.invert = function(t, n) {
            for (var e, r, o = n, i = o * o, u = i * i * i, a = 0; a < 12 && (r = o * (1.340264 + -.081106 * i + u * (893e-6 + .003796 * i)) - n,
            o -= e = r / (1.340264 + -.24331799999999998 * i + u * (.0062510000000000005 + .034164 * i)),
            u = (i = o * o) * i * i,
            !(1e-12 > s(e))); ++a)
                ;
            return [e8 * t * (1.340264 + -.24331799999999998 * i + u * (.0062510000000000005 + .034164 * i)) / p(o), M(_(o) / e8)]
        }
        ,
        re.invert = eV(f),
        ri.invert = function(t, n) {
            var e, r = n, o = 25;
            do {
                var i = r * r
                  , u = i * i;
                r -= e = (r * (1.007226 + i * (.015085 + u * (-.044475 + .028874 * i - .005916 * u))) - n) / (1.007226 + i * (.045255 + u * (-.311325 + .259866 * i - .005916 * 11 * u)))
            } while (s(e) > 1e-6 && --o > 0);
            return [t / (.8707 + (i = r * r) * (-.131979 + i * (-.013791 + i * i * i * (.003971 - .001529 * i)))), r]
        }
        ,
        ra.invert = eV(M),
        rl.invert = eV(function(t) {
            return 2 * f(t)
        }),
        rf.invert = function(t, n) {
            return [-n, 2 * f(v(t)) - i]
        }
    },
    10183: function(t, n, e) {
        "use strict";
        function r(t) {
            return "object" == typeof t && "length"in t ? t : Array.from(t)
        }
        e.d(n, {
            Z: function() {
                return r
            }
        })
    },
    41304: function(t, n, e) {
        "use strict";
        e.d(n, {
            Z: function() {
                return a
            }
        });
        var r = e(36743)
          , o = e(14949);
        function i(t) {
            return function() {
                var n = this.ownerDocument
                  , e = this.namespaceURI;
                return e === o.P && n.documentElement.namespaceURI === o.P ? n.createElement(t) : n.createElementNS(e, t)
            }
        }
        function u(t) {
            return function() {
                return this.ownerDocument.createElementNS(t.space, t.local)
            }
        }
        function a(t) {
            var n = (0,
            r.Z)(t);
            return (n.local ? u : i)(n)
        }
    },
    62698: function(t, n, e) {
        "use strict";
        e.r(n),
        e.d(n, {
            create: function() {
                return i
            },
            creator: function() {
                return r.Z
            },
            local: function() {
                return a
            },
            matcher: function() {
                return l.Z
            },
            namespace: function() {
                return s.Z
            },
            namespaces: function() {
                return f.Z
            },
            pointer: function() {
                return h.Z
            },
            pointers: function() {
                return d
            },
            select: function() {
                return o.Z
            },
            selectAll: function() {
                return m
            },
            selection: function() {
                return g.ZP
            },
            selector: function() {
                return y.Z
            },
            selectorAll: function() {
                return _.Z
            },
            style: function() {
                return w.S
            },
            window: function() {
                return b.Z
            }
        });
        var r = e(41304)
          , o = e(74797);
        function i(t) {
            return (0,
            o.Z)((0,
            r.Z)(t).call(document.documentElement))
        }
        var u = 0;
        function a() {
            return new c
        }
        function c() {
            this._ = "@" + (++u).toString(36)
        }
        c.prototype = a.prototype = {
            constructor: c,
            get: function(t) {
                for (var n = this._; !(n in t); )
                    if (!(t = t.parentNode))
                        return;
                return t[n]
            },
            set: function(t, n) {
                return t[this._] = n
            },
            remove: function(t) {
                return this._ in t && delete t[this._]
            },
            toString: function() {
                return this._
            }
        };
        var l = e(55491)
          , s = e(36743)
          , f = e(14949)
          , h = e(37652)
          , p = e(75113);
        function d(t, n) {
            return t.target && (t = (0,
            p.Z)(t),
            void 0 === n && (n = t.currentTarget),
            t = t.touches || [t]),
            Array.from(t, t=>(0,
            h.Z)(t, n))
        }
        var v = e(10183)
          , g = e(38687);
        function m(t) {
            return "string" == typeof t ? new g.Y1([document.querySelectorAll(t)],[document.documentElement]) : new g.Y1([null == t ? [] : (0,
            v.Z)(t)],g.Jz)
        }
        var y = e(77895)
          , _ = e(68578)
          , w = e(43959)
          , b = e(77894)
    },
    55491: function(t, n, e) {
        "use strict";
        function r(t) {
            return function() {
                return this.matches(t)
            }
        }
        function o(t) {
            return function(n) {
                return n.matches(t)
            }
        }
        e.d(n, {
            P: function() {
                return o
            },
            Z: function() {
                return r
            }
        })
    },
    36743: function(t, n, e) {
        "use strict";
        e.d(n, {
            Z: function() {
                return o
            }
        });
        var r = e(14949);
        function o(t) {
            var n = t += ""
              , e = n.indexOf(":");
            return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
            r.Z.hasOwnProperty(n) ? {
                space: r.Z[n],
                local: t
            } : t
        }
    },
    14949: function(t, n, e) {
        "use strict";
        e.d(n, {
            P: function() {
                return r
            }
        });
        var r = "http://www.w3.org/1999/xhtml";
        n.Z = {
            svg: "http://www.w3.org/2000/svg",
            xhtml: r,
            xlink: "http://www.w3.org/1999/xlink",
            xml: "http://www.w3.org/XML/1998/namespace",
            xmlns: "http://www.w3.org/2000/xmlns/"
        }
    },
    37652: function(t, n, e) {
        "use strict";
        e.d(n, {
            Z: function() {
                return o
            }
        });
        var r = e(75113);
        function o(t, n) {
            if (t = (0,
            r.Z)(t),
            void 0 === n && (n = t.currentTarget),
            n) {
                var e = n.ownerSVGElement || n;
                if (e.createSVGPoint) {
                    var o = e.createSVGPoint();
                    return o.x = t.clientX,
                    o.y = t.clientY,
                    [(o = o.matrixTransform(n.getScreenCTM().inverse())).x, o.y]
                }
                if (n.getBoundingClientRect) {
                    var i = n.getBoundingClientRect();
                    return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop]
                }
            }
            return [t.pageX, t.pageY]
        }
    },
    74797: function(t, n, e) {
        "use strict";
        e.d(n, {
            Z: function() {
                return o
            }
        });
        var r = e(38687);
        function o(t) {
            return "string" == typeof t ? new r.Y1([[document.querySelector(t)]],[document.documentElement]) : new r.Y1([[t]],r.Jz)
        }
    },
    38687: function(t, n, e) {
        "use strict";
        e.d(n, {
            Y1: function() {
                return te
            },
            ZP: function() {
                return to
            },
            Jz: function() {
                return tn
            }
        });
        var r = e(77895)
          , o = e(10183)
          , i = e(68578)
          , u = e(55491)
          , a = Array.prototype.find;
        function c() {
            return this.firstElementChild
        }
        var l = Array.prototype.filter;
        function s() {
            return this.children
        }
        function f(t) {
            return Array(t.length)
        }
        function h(t, n) {
            this.ownerDocument = t.ownerDocument,
            this.namespaceURI = t.namespaceURI,
            this._next = null,
            this._parent = t,
            this.__data__ = n
        }
        function p(t, n, e, r, o, i) {
            for (var u, a = 0, c = n.length, l = i.length; a < l; ++a)
                (u = n[a]) ? (u.__data__ = i[a],
                r[a] = u) : e[a] = new h(t,i[a]);
            for (; a < c; ++a)
                (u = n[a]) && (o[a] = u)
        }
        function d(t, n, e, r, o, i, u) {
            var a, c, l, s = new Map, f = n.length, p = i.length, d = Array(f);
            for (a = 0; a < f; ++a)
                (c = n[a]) && (d[a] = l = u.call(c, c.__data__, a, n) + "",
                s.has(l) ? o[a] = c : s.set(l, c));
            for (a = 0; a < p; ++a)
                l = u.call(t, i[a], a, i) + "",
                (c = s.get(l)) ? (r[a] = c,
                c.__data__ = i[a],
                s.delete(l)) : e[a] = new h(t,i[a]);
            for (a = 0; a < f; ++a)
                (c = n[a]) && s.get(d[a]) === c && (o[a] = c)
        }
        function v(t) {
            return t.__data__
        }
        function g(t, n) {
            return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
        }
        h.prototype = {
            constructor: h,
            appendChild: function(t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function(t, n) {
                return this._parent.insertBefore(t, n)
            },
            querySelector: function(t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function(t) {
                return this._parent.querySelectorAll(t)
            }
        };
        var m = e(36743);
        function y(t) {
            return function() {
                this.removeAttribute(t)
            }
        }
        function _(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function w(t, n) {
            return function() {
                this.setAttribute(t, n)
            }
        }
        function b(t, n) {
            return function() {
                this.setAttributeNS(t.space, t.local, n)
            }
        }
        function E(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
            }
        }
        function x(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
            }
        }
        var M = e(43959);
        function S(t) {
            return function() {
                delete this[t]
            }
        }
        function k(t, n) {
            return function() {
                this[t] = n
            }
        }
        function N(t, n) {
            return function() {
                var e = n.apply(this, arguments);
                null == e ? delete this[t] : this[t] = e
            }
        }
        function A(t) {
            return t.trim().split(/^|\s+/)
        }
        function P(t) {
            return t.classList || new j(t)
        }
        function j(t) {
            this._node = t,
            this._names = A(t.getAttribute("class") || "")
        }
        function z(t, n) {
            for (var e = P(t), r = -1, o = n.length; ++r < o; )
                e.add(n[r])
        }
        function Z(t, n) {
            for (var e = P(t), r = -1, o = n.length; ++r < o; )
                e.remove(n[r])
        }
        function C(t) {
            return function() {
                z(this, t)
            }
        }
        function O(t) {
            return function() {
                Z(this, t)
            }
        }
        function T(t, n) {
            return function() {
                (n.apply(this, arguments) ? z : Z)(this, t)
            }
        }
        function R() {
            this.textContent = ""
        }
        function q(t) {
            return function() {
                this.textContent = t
            }
        }
        function L(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.textContent = null == n ? "" : n
            }
        }
        function G() {
            this.innerHTML = ""
        }
        function D(t) {
            return function() {
                this.innerHTML = t
            }
        }
        function X(t) {
            return function() {
                var n = t.apply(this, arguments);
                this.innerHTML = null == n ? "" : n
            }
        }
        function Y() {
            this.nextSibling && this.parentNode.appendChild(this)
        }
        function I() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }
        j.prototype = {
            add: function(t) {
                0 > this._names.indexOf(t) && (this._names.push(t),
                this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function(t) {
                var n = this._names.indexOf(t);
                n >= 0 && (this._names.splice(n, 1),
                this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) {
                return this._names.indexOf(t) >= 0
            }
        };
        var B = e(41304);
        function F() {
            return null
        }
        function U() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }
        function H() {
            var t = this.cloneNode(!1)
              , n = this.parentNode;
            return n ? n.insertBefore(t, this.nextSibling) : t
        }
        function V() {
            var t = this.cloneNode(!0)
              , n = this.parentNode;
            return n ? n.insertBefore(t, this.nextSibling) : t
        }
        function W(t) {
            return function() {
                var n = this.__on;
                if (n) {
                    for (var e, r = 0, o = -1, i = n.length; r < i; ++r)
                        (e = n[r],
                        t.type && e.type !== t.type || e.name !== t.name) ? n[++o] = e : this.removeEventListener(e.type, e.listener, e.options);
                    ++o ? n.length = o : delete this.__on
                }
            }
        }
        function $(t, n, e) {
            return function() {
                var r, o, i = this.__on, u = function(t) {
                    n.call(this, t, this.__data__)
                };
                if (i) {
                    for (var a = 0, c = i.length; a < c; ++a)
                        if ((o = i[a]).type === t.type && o.name === t.name) {
                            this.removeEventListener(o.type, o.listener, o.options),
                            this.addEventListener(o.type, o.listener = u, o.options = e),
                            o.value = n;
                            return
                        }
                }
                this.addEventListener(t.type, u, e),
                o = {
                    type: t.type,
                    name: t.name,
                    value: n,
                    listener: u,
                    options: e
                },
                i ? i.push(o) : this.__on = [o]
            }
        }
        var K = e(77894);
        function J(t, n, e) {
            var r = (0,
            K.Z)(t)
              , o = r.CustomEvent;
            "function" == typeof o ? o = new o(n,e) : (o = r.document.createEvent("Event"),
            e ? (o.initEvent(n, e.bubbles, e.cancelable),
            o.detail = e.detail) : o.initEvent(n, !1, !1)),
            t.dispatchEvent(o)
        }
        function Q(t, n) {
            return function() {
                return J(this, t, n)
            }
        }
        function tt(t, n) {
            return function() {
                return J(this, t, n.apply(this, arguments))
            }
        }
        var tn = [null];
        function te(t, n) {
            this._groups = t,
            this._parents = n
        }
        function tr() {
            return new te([[document.documentElement]],tn)
        }
        te.prototype = tr.prototype = {
            constructor: te,
            select: function(t) {
                "function" != typeof t && (t = (0,
                r.Z)(t));
                for (var n = this._groups, e = n.length, o = Array(e), i = 0; i < e; ++i)
                    for (var u, a, c = n[i], l = c.length, s = o[i] = Array(l), f = 0; f < l; ++f)
                        (u = c[f]) && (a = t.call(u, u.__data__, f, c)) && ("__data__"in u && (a.__data__ = u.__data__),
                        s[f] = a);
                return new te(o,this._parents)
            },
            selectAll: function(t) {
                if ("function" == typeof t) {
                    var n;
                    n = t,
                    t = function() {
                        var t = n.apply(this, arguments);
                        return null == t ? [] : (0,
                        o.Z)(t)
                    }
                } else
                    t = (0,
                    i.Z)(t);
                for (var e = this._groups, r = e.length, u = [], a = [], c = 0; c < r; ++c)
                    for (var l, s = e[c], f = s.length, h = 0; h < f; ++h)
                        (l = s[h]) && (u.push(t.call(l, l.__data__, h, s)),
                        a.push(l));
                return new te(u,a)
            },
            selectChild: function(t) {
                var n;
                return this.select(null == t ? c : (n = "function" == typeof t ? t : (0,
                u.P)(t),
                function() {
                    return a.call(this.children, n)
                }
                ))
            },
            selectChildren: function(t) {
                var n;
                return this.selectAll(null == t ? s : (n = "function" == typeof t ? t : (0,
                u.P)(t),
                function() {
                    return l.call(this.children, n)
                }
                ))
            },
            filter: function(t) {
                "function" != typeof t && (t = (0,
                u.Z)(t));
                for (var n = this._groups, e = n.length, r = Array(e), o = 0; o < e; ++o)
                    for (var i, a = n[o], c = a.length, l = r[o] = [], s = 0; s < c; ++s)
                        (i = a[s]) && t.call(i, i.__data__, s, a) && l.push(i);
                return new te(r,this._parents)
            },
            data: function(t, n) {
                if (!arguments.length)
                    return Array.from(this, v);
                var e = n ? d : p
                  , r = this._parents
                  , i = this._groups;
                "function" != typeof t && (E = t,
                t = function() {
                    return E
                }
                );
                for (var u = i.length, a = Array(u), c = Array(u), l = Array(u), s = 0; s < u; ++s) {
                    var f = r[s]
                      , h = i[s]
                      , g = h.length
                      , m = (0,
                    o.Z)(t.call(f, f && f.__data__, s, r))
                      , y = m.length
                      , _ = c[s] = Array(y)
                      , w = a[s] = Array(y)
                      , b = l[s] = Array(g);
                    e(f, h, _, w, b, m, n);
                    for (var E, x, M, S = 0, k = 0; S < y; ++S)
                        if (x = _[S]) {
                            for (S >= k && (k = S + 1); !(M = w[k]) && ++k < y; )
                                ;
                            x._next = M || null
                        }
                }
                return (a = new te(a,r))._enter = c,
                a._exit = l,
                a
            },
            enter: function() {
                return new te(this._enter || this._groups.map(f),this._parents)
            },
            exit: function() {
                return new te(this._exit || this._groups.map(f),this._parents)
            },
            join: function(t, n, e) {
                var r = this.enter()
                  , o = this
                  , i = this.exit();
                return r = "function" == typeof t ? t(r) : r.append(t + ""),
                null != n && (o = n(o)),
                null == e ? i.remove() : e(i),
                r && o ? r.merge(o).order() : o
            },
            merge: function(t) {
                if (!(t instanceof te))
                    throw Error("invalid merge");
                for (var n = this._groups, e = t._groups, r = n.length, o = e.length, i = Math.min(r, o), u = Array(r), a = 0; a < i; ++a)
                    for (var c, l = n[a], s = e[a], f = l.length, h = u[a] = Array(f), p = 0; p < f; ++p)
                        (c = l[p] || s[p]) && (h[p] = c);
                for (; a < r; ++a)
                    u[a] = n[a];
                return new te(u,this._parents)
            },
            selection: function() {
                return this
            },
            order: function() {
                for (var t = this._groups, n = -1, e = t.length; ++n < e; )
                    for (var r, o = t[n], i = o.length - 1, u = o[i]; --i >= 0; )
                        (r = o[i]) && (u && 4 ^ r.compareDocumentPosition(u) && u.parentNode.insertBefore(r, u),
                        u = r);
                return this
            },
            sort: function(t) {
                function n(n, e) {
                    return n && e ? t(n.__data__, e.__data__) : !n - !e
                }
                t || (t = g);
                for (var e = this._groups, r = e.length, o = Array(r), i = 0; i < r; ++i) {
                    for (var u, a = e[i], c = a.length, l = o[i] = Array(c), s = 0; s < c; ++s)
                        (u = a[s]) && (l[s] = u);
                    l.sort(n)
                }
                return new te(o,this._parents).order()
            },
            call: function() {
                var t = arguments[0];
                return arguments[0] = this,
                t.apply(null, arguments),
                this
            },
            nodes: function() {
                return Array.from(this)
            },
            node: function() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r = t[n], o = 0, i = r.length; o < i; ++o) {
                        var u = r[o];
                        if (u)
                            return u
                    }
                return null
            },
            size: function() {
                let t = 0;
                for (let n of this)
                    ++t;
                return t
            },
            empty: function() {
                return !this.node()
            },
            each: function(t) {
                for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                    for (var o, i = n[e], u = 0, a = i.length; u < a; ++u)
                        (o = i[u]) && t.call(o, o.__data__, u, i);
                return this
            },
            attr: function(t, n) {
                var e = (0,
                m.Z)(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                }
                return this.each((null == n ? e.local ? _ : y : "function" == typeof n ? e.local ? x : E : e.local ? b : w)(e, n))
            },
            style: M.Z,
            property: function(t, n) {
                return arguments.length > 1 ? this.each((null == n ? S : "function" == typeof n ? N : k)(t, n)) : this.node()[t]
            },
            classed: function(t, n) {
                var e = A(t + "");
                if (arguments.length < 2) {
                    for (var r = P(this.node()), o = -1, i = e.length; ++o < i; )
                        if (!r.contains(e[o]))
                            return !1;
                    return !0
                }
                return this.each(("function" == typeof n ? T : n ? C : O)(e, n))
            },
            text: function(t) {
                return arguments.length ? this.each(null == t ? R : ("function" == typeof t ? L : q)(t)) : this.node().textContent
            },
            html: function(t) {
                return arguments.length ? this.each(null == t ? G : ("function" == typeof t ? X : D)(t)) : this.node().innerHTML
            },
            raise: function() {
                return this.each(Y)
            },
            lower: function() {
                return this.each(I)
            },
            append: function(t) {
                var n = "function" == typeof t ? t : (0,
                B.Z)(t);
                return this.select(function() {
                    return this.appendChild(n.apply(this, arguments))
                })
            },
            insert: function(t, n) {
                var e = "function" == typeof t ? t : (0,
                B.Z)(t)
                  , o = null == n ? F : "function" == typeof n ? n : (0,
                r.Z)(n);
                return this.select(function() {
                    return this.insertBefore(e.apply(this, arguments), o.apply(this, arguments) || null)
                })
            },
            remove: function() {
                return this.each(U)
            },
            clone: function(t) {
                return this.select(t ? V : H)
            },
            datum: function(t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            },
            on: function(t, n, e) {
                var r, o, i, u = (r = t + "").trim().split(/^|\s+/).map(function(t) {
                    var n = ""
                      , e = t.indexOf(".");
                    return e >= 0 && (n = t.slice(e + 1),
                    t = t.slice(0, e)),
                    {
                        type: t,
                        name: n
                    }
                }), a = u.length;
                if (arguments.length < 2) {
                    var c = this.node().__on;
                    if (c) {
                        for (var l, s = 0, f = c.length; s < f; ++s)
                            for (o = 0,
                            l = c[s]; o < a; ++o)
                                if ((i = u[o]).type === l.type && i.name === l.name)
                                    return l.value
                    }
                    return
                }
                for (o = 0,
                c = n ? $ : W; o < a; ++o)
                    this.each(c(u[o], n, e));
                return this
            },
            dispatch: function(t, n) {
                return this.each(("function" == typeof n ? tt : Q)(t, n))
            },
            [Symbol.iterator]: function*() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r, o = t[n], i = 0, u = o.length; i < u; ++i)
                        (r = o[i]) && (yield r)
            }
        };
        var to = tr
    },
    43959: function(t, n, e) {
        "use strict";
        e.d(n, {
            S: function() {
                return c
            },
            Z: function() {
                return a
            }
        });
        var r = e(77894);
        function o(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }
        function i(t, n, e) {
            return function() {
                this.style.setProperty(t, n, e)
            }
        }
        function u(t, n, e) {
            return function() {
                var r = n.apply(this, arguments);
                null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
            }
        }
        function a(t, n, e) {
            return arguments.length > 1 ? this.each((null == n ? o : "function" == typeof n ? u : i)(t, n, null == e ? "" : e)) : c(this.node(), t)
        }
        function c(t, n) {
            return t.style.getPropertyValue(n) || (0,
            r.Z)(t).getComputedStyle(t, null).getPropertyValue(n)
        }
    },
    77895: function(t, n, e) {
        "use strict";
        function r() {}
        function o(t) {
            return null == t ? r : function() {
                return this.querySelector(t)
            }
        }
        e.d(n, {
            Z: function() {
                return o
            }
        })
    },
    68578: function(t, n, e) {
        "use strict";
        function r() {
            return []
        }
        function o(t) {
            return null == t ? r : function() {
                return this.querySelectorAll(t)
            }
        }
        e.d(n, {
            Z: function() {
                return o
            }
        })
    },
    75113: function(t, n, e) {
        "use strict";
        function r(t) {
            let n;
            for (; n = t.sourceEvent; )
                t = n;
            return t
        }
        e.d(n, {
            Z: function() {
                return r
            }
        })
    },
    77894: function(t, n, e) {
        "use strict";
        function r(t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        }
        e.d(n, {
            Z: function() {
                return r
            }
        })
    },
    41482: function(t, n, e) {
        "use strict";
        e.r(n),
        e.d(n, {
            zoom: function() {
                return na
            },
            zoomIdentity: function() {
                return t9
            },
            zoomTransform: function() {
                return t7
            }
        });
        var r, o = {
            value() {}
        };
        function i() {
            for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t))
                    throw Error("illegal type: " + t);
                r[t] = []
            }
            return new u(r)
        }
        function u(t) {
            this._ = t
        }
        function a(t, n) {
            for (var e, r = 0, o = t.length; r < o; ++r)
                if ((e = t[r]).name === n)
                    return e.value
        }
        function c(t, n, e) {
            for (var r = 0, i = t.length; r < i; ++r)
                if (t[r].name === n) {
                    t[r] = o,
                    t = t.slice(0, r).concat(t.slice(r + 1));
                    break
                }
            return null != e && t.push({
                name: n,
                value: e
            }),
            t
        }
        u.prototype = i.prototype = {
            constructor: u,
            on: function(t, n) {
                var e, r, o, i = this._, u = (e = t + "").trim().split(/^|\s+/).map(function(t) {
                    var n = ""
                      , e = t.indexOf(".");
                    if (e >= 0 && (n = t.slice(e + 1),
                    t = t.slice(0, e)),
                    t && !i.hasOwnProperty(t))
                        throw Error("unknown type: " + t);
                    return {
                        type: t,
                        name: n
                    }
                }), l = -1, s = u.length;
                if (arguments.length < 2) {
                    for (; ++l < s; )
                        if ((o = (t = u[l]).type) && (o = a(i[o], t.name)))
                            return o;
                    return
                }
                if (null != n && "function" != typeof n)
                    throw Error("invalid callback: " + n);
                for (; ++l < s; )
                    if (o = (t = u[l]).type)
                        i[o] = c(i[o], t.name, n);
                    else if (null == n)
                        for (o in i)
                            i[o] = c(i[o], t.name, null);
                return this
            },
            copy: function() {
                var t = {}
                  , n = this._;
                for (var e in n)
                    t[e] = n[e].slice();
                return new u(t)
            },
            call: function(t, n) {
                if ((e = arguments.length - 2) > 0)
                    for (var e, r, o = Array(e), i = 0; i < e; ++i)
                        o[i] = arguments[i + 2];
                if (!this._.hasOwnProperty(t))
                    throw Error("unknown type: " + t);
                for (r = this._[t],
                i = 0,
                e = r.length; i < e; ++i)
                    r[i].value.apply(n, o)
            },
            apply: function(t, n, e) {
                if (!this._.hasOwnProperty(t))
                    throw Error("unknown type: " + t);
                for (var r = this._[t], o = 0, i = r.length; o < i; ++o)
                    r[o].value.apply(n, e)
            }
        };
        var l = e(74797);
        function s(t) {
            t.preventDefault(),
            t.stopImmediatePropagation()
        }
        function f(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }
        var h, p, d = function t(n, e, r) {
            function o(t, o) {
                var i, u, a = t[0], c = t[1], l = t[2], s = o[0], h = o[1], p = o[2], d = s - a, v = h - c, g = d * d + v * v;
                if (g < 1e-12)
                    u = Math.log(p / l) / n,
                    i = function(t) {
                        return [a + t * d, c + t * v, l * Math.exp(n * t * u)]
                    }
                    ;
                else {
                    var m = Math.sqrt(g)
                      , y = (p * p - l * l + r * g) / (2 * l * e * m)
                      , _ = (p * p - l * l - r * g) / (2 * p * e * m)
                      , w = Math.log(Math.sqrt(y * y + 1) - y);
                    u = (Math.log(Math.sqrt(_ * _ + 1) - _) - w) / n,
                    i = function(t) {
                        var r, o, i = t * u, s = f(w), h = l / (e * m) * (s * (((r = Math.exp(2 * (r = n * i + w))) - 1) / (r + 1)) - ((o = Math.exp(o = w)) - 1 / o) / 2);
                        return [a + h * d, c + h * v, l * s / f(n * i + w)]
                    }
                }
                return i.duration = 1e3 * u * n / Math.SQRT2,
                i
            }
            return o.rho = function(n) {
                var e = Math.max(.001, +n)
                  , r = e * e;
                return t(e, r, r * r)
            }
            ,
            o
        }(Math.SQRT2, 2, 4), v = e(37652), g = e(38687), m = 0, y = 0, _ = 0, w = 0, b = 0, E = 0, x = "object" == typeof performance && performance.now ? performance : Date, M = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
            setTimeout(t, 17)
        }
        ;
        function S() {
            return b || (M(k),
            b = x.now() + E)
        }
        function k() {
            b = 0
        }
        function N() {
            this._call = this._time = this._next = null
        }
        function A(t, n, e) {
            var r = new N;
            return r.restart(t, n, e),
            r
        }
        function P() {
            b = (w = x.now()) + E,
            m = y = 0;
            try {
                !function() {
                    S(),
                    ++m;
                    for (var t, n = h; n; )
                        (t = b - n._time) >= 0 && n._call.call(null, t),
                        n = n._next;
                    --m
                }()
            } finally {
                m = 0,
                function() {
                    for (var t, n, e = h, r = 1 / 0; e; )
                        e._call ? (r > e._time && (r = e._time),
                        t = e,
                        e = e._next) : (n = e._next,
                        e._next = null,
                        e = t ? t._next = n : h = n);
                    p = t,
                    z(r)
                }(),
                b = 0
            }
        }
        function j() {
            var t = x.now()
              , n = t - w;
            n > 1e3 && (E -= n,
            w = t)
        }
        function z(t) {
            !m && (y && (y = clearTimeout(y)),
            t - b > 24 ? (t < 1 / 0 && (y = setTimeout(P, t - x.now() - E)),
            _ && (_ = clearInterval(_))) : (_ || (w = x.now(),
            _ = setInterval(j, 1e3)),
            m = 1,
            M(P)))
        }
        function Z(t, n, e) {
            var r = new N;
            return n = null == n ? 0 : +n,
            r.restart(e=>{
                r.stop(),
                t(e + n)
            }
            , n, e),
            r
        }
        N.prototype = A.prototype = {
            constructor: N,
            restart: function(t, n, e) {
                if ("function" != typeof t)
                    throw TypeError("callback is not a function");
                e = (null == e ? S() : +e) + (null == n ? 0 : +n),
                this._next || p === this || (p ? p._next = this : h = this,
                p = this),
                this._call = t,
                this._time = e,
                z()
            },
            stop: function() {
                this._call && (this._call = null,
                this._time = 1 / 0,
                z())
            }
        };
        var C = i("start", "end", "cancel", "interrupt")
          , O = [];
        function T(t, n, e, r, o, i) {
            var u = t.__transition;
            if (u) {
                if (e in u)
                    return
            } else
                t.__transition = {};
            !function(t, n, e) {
                var r, o = t.__transition;
                function i(c) {
                    var l, s, f, h;
                    if (1 !== e.state)
                        return a();
                    for (l in o)
                        if ((h = o[l]).name === e.name) {
                            if (3 === h.state)
                                return Z(i);
                            4 === h.state ? (h.state = 6,
                            h.timer.stop(),
                            h.on.call("interrupt", t, t.__data__, h.index, h.group),
                            delete o[l]) : +l < n && (h.state = 6,
                            h.timer.stop(),
                            h.on.call("cancel", t, t.__data__, h.index, h.group),
                            delete o[l])
                        }
                    if (Z(function() {
                        3 === e.state && (e.state = 4,
                        e.timer.restart(u, e.delay, e.time),
                        u(c))
                    }),
                    e.state = 2,
                    e.on.call("start", t, t.__data__, e.index, e.group),
                    2 === e.state) {
                        for (l = 0,
                        e.state = 3,
                        r = Array(f = e.tween.length),
                        s = -1; l < f; ++l)
                            (h = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (r[++s] = h);
                        r.length = s + 1
                    }
                }
                function u(n) {
                    for (var o = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(a),
                    e.state = 5,
                    1), i = -1, u = r.length; ++i < u; )
                        r[i].call(t, o);
                    5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group),
                    a())
                }
                function a() {
                    for (var r in e.state = 6,
                    e.timer.stop(),
                    delete o[n],
                    o)
                        return;
                    delete t.__transition
                }
                o[n] = e,
                e.timer = A(function(t) {
                    e.state = 1,
                    e.timer.restart(i, e.delay, e.time),
                    e.delay <= t && i(t - e.delay)
                }, 0, e.time)
            }(t, e, {
                name: n,
                index: r,
                group: o,
                on: C,
                tween: O,
                time: i.time,
                delay: i.delay,
                duration: i.duration,
                ease: i.ease,
                timer: null,
                state: 0
            })
        }
        function R(t, n) {
            var e = L(t, n);
            if (e.state > 0)
                throw Error("too late; already scheduled");
            return e
        }
        function q(t, n) {
            var e = L(t, n);
            if (e.state > 3)
                throw Error("too late; already running");
            return e
        }
        function L(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n]))
                throw Error("transition not found");
            return e
        }
        function G(t, n) {
            var e, r, o, i = t.__transition, u = !0;
            if (i) {
                for (o in n = null == n ? null : n + "",
                i) {
                    if ((e = i[o]).name !== n) {
                        u = !1;
                        continue
                    }
                    r = e.state > 2 && e.state < 5,
                    e.state = 6,
                    e.timer.stop(),
                    e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group),
                    delete i[o]
                }
                u && delete t.__transition
            }
        }
        function D(t, n) {
            return t = +t,
            n = +n,
            function(e) {
                return t * (1 - e) + n * e
            }
        }
        var X = 180 / Math.PI
          , Y = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1
        };
        function I(t, n, e, r, o, i) {
            var u, a, c;
            return (u = Math.sqrt(t * t + n * n)) && (t /= u,
            n /= u),
            (c = t * e + n * r) && (e -= t * c,
            r -= n * c),
            (a = Math.sqrt(e * e + r * r)) && (e /= a,
            r /= a,
            c /= a),
            t * r < n * e && (t = -t,
            n = -n,
            c = -c,
            u = -u),
            {
                translateX: o,
                translateY: i,
                rotate: Math.atan2(n, t) * X,
                skewX: Math.atan(c) * X,
                scaleX: u,
                scaleY: a
            }
        }
        function B(t, n, e, r) {
            function o(t) {
                return t.length ? t.pop() + " " : ""
            }
            return function(i, u) {
                var a, c, l, s, f, h, p, d, v = [], g = [];
                return i = t(i),
                u = t(u),
                !function(t, r, o, i, u, a) {
                    if (t !== o || r !== i) {
                        var c = u.push("translate(", null, n, null, e);
                        a.push({
                            i: c - 4,
                            x: D(t, o)
                        }, {
                            i: c - 2,
                            x: D(r, i)
                        })
                    } else
                        (o || i) && u.push("translate(" + o + n + i + e)
                }(i.translateX, i.translateY, u.translateX, u.translateY, v, g),
                a = i.rotate,
                a !== (c = u.rotate) ? (a - c > 180 ? c += 360 : c - a > 180 && (a += 360),
                g.push({
                    i: v.push(o(v) + "rotate(", null, r) - 2,
                    x: D(a, c)
                })) : c && v.push(o(v) + "rotate(" + c + r),
                f = i.skewX,
                f !== (h = u.skewX) ? g.push({
                    i: v.push(o(v) + "skewX(", null, r) - 2,
                    x: D(f, h)
                }) : h && v.push(o(v) + "skewX(" + h + r),
                !function(t, n, e, r, i, u) {
                    if (t !== e || n !== r) {
                        var a = i.push(o(i) + "scale(", null, ",", null, ")");
                        u.push({
                            i: a - 4,
                            x: D(t, e)
                        }, {
                            i: a - 2,
                            x: D(n, r)
                        })
                    } else
                        (1 !== e || 1 !== r) && i.push(o(i) + "scale(" + e + "," + r + ")")
                }(i.scaleX, i.scaleY, u.scaleX, u.scaleY, v, g),
                i = u = null,
                function(t) {
                    for (var n, e = -1, r = g.length; ++e < r; )
                        v[(n = g[e]).i] = n.x(t);
                    return v.join("")
                }
            }
        }
        var F = B(function(t) {
            let n = new ("function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix)(t + "");
            return n.isIdentity ? Y : I(n.a, n.b, n.c, n.d, n.e, n.f)
        }, "px, ", "px)", "deg)")
          , U = B(function(t) {
            return null == t ? Y : (r || (r = document.createElementNS("http://www.w3.org/2000/svg", "g")),
            r.setAttribute("transform", t),
            t = r.transform.baseVal.consolidate()) ? I((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f) : Y
        }, ", ", ")", ")")
          , H = e(36743);
        function V(t, n) {
            var e, r;
            return function() {
                var o = q(this, t)
                  , i = o.tween;
                if (i !== e) {
                    r = e = i;
                    for (var u = 0, a = r.length; u < a; ++u)
                        if (r[u].name === n) {
                            (r = r.slice()).splice(u, 1);
                            break
                        }
                }
                o.tween = r
            }
        }
        function W(t, n, e) {
            var r, o;
            if ("function" != typeof e)
                throw Error();
            return function() {
                var i = q(this, t)
                  , u = i.tween;
                if (u !== r) {
                    o = (r = u).slice();
                    for (var a = {
                        name: n,
                        value: e
                    }, c = 0, l = o.length; c < l; ++c)
                        if (o[c].name === n) {
                            o[c] = a;
                            break
                        }
                    c === l && o.push(a)
                }
                i.tween = o
            }
        }
        function $(t, n, e) {
            var r = t._id;
            return t.each(function() {
                var t = q(this, r);
                (t.value || (t.value = {}))[n] = e.apply(this, arguments)
            }),
            function(t) {
                return L(t, r).value[n]
            }
        }
        function K(t, n, e) {
            t.prototype = n.prototype = e,
            e.constructor = t
        }
        function J(t, n) {
            var e = Object.create(t.prototype);
            for (var r in n)
                e[r] = n[r];
            return e
        }
        function Q() {}
        var tt = "\\s*([+-]?\\d+)\\s*"
          , tn = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*"
          , te = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*"
          , tr = /^#([0-9a-f]{3,8})$/
          , to = RegExp("^rgb\\(" + [tt, tt, tt] + "\\)$")
          , ti = RegExp("^rgb\\(" + [te, te, te] + "\\)$")
          , tu = RegExp("^rgba\\(" + [tt, tt, tt, tn] + "\\)$")
          , ta = RegExp("^rgba\\(" + [te, te, te, tn] + "\\)$")
          , tc = RegExp("^hsl\\(" + [tn, te, te] + "\\)$")
          , tl = RegExp("^hsla\\(" + [tn, te, te, tn] + "\\)$")
          , ts = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074
        };
        function tf() {
            return this.rgb().formatHex()
        }
        function th() {
            return this.rgb().formatRgb()
        }
        function tp(t) {
            var n, e;
            return t = (t + "").trim().toLowerCase(),
            (n = tr.exec(t)) ? (e = n[1].length,
            n = parseInt(n[1], 16),
            6 === e ? td(n) : 3 === e ? new tm(n >> 8 & 15 | n >> 4 & 240,n >> 4 & 15 | 240 & n,(15 & n) << 4 | 15 & n,1) : 8 === e ? tv(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (255 & n) / 255) : 4 === e ? tv(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, ((15 & n) << 4 | 15 & n) / 255) : null) : (n = to.exec(t)) ? new tm(n[1],n[2],n[3],1) : (n = ti.exec(t)) ? new tm(255 * n[1] / 100,255 * n[2] / 100,255 * n[3] / 100,1) : (n = tu.exec(t)) ? tv(n[1], n[2], n[3], n[4]) : (n = ta.exec(t)) ? tv(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = tc.exec(t)) ? tb(n[1], n[2] / 100, n[3] / 100, 1) : (n = tl.exec(t)) ? tb(n[1], n[2] / 100, n[3] / 100, n[4]) : ts.hasOwnProperty(t) ? td(ts[t]) : "transparent" === t ? new tm(NaN,NaN,NaN,0) : null
        }
        function td(t) {
            return new tm(t >> 16 & 255,t >> 8 & 255,255 & t,1)
        }
        function tv(t, n, e, r) {
            return r <= 0 && (t = n = e = NaN),
            new tm(t,n,e,r)
        }
        function tg(t, n, e, r) {
            var o;
            return 1 === arguments.length ? ((o = t)instanceof Q || (o = tp(o)),
            o) ? (o = o.rgb(),
            new tm(o.r,o.g,o.b,o.opacity)) : new tm : new tm(t,n,e,null == r ? 1 : r)
        }
        function tm(t, n, e, r) {
            this.r = +t,
            this.g = +n,
            this.b = +e,
            this.opacity = +r
        }
        function ty() {
            return "#" + tw(this.r) + tw(this.g) + tw(this.b)
        }
        function t_() {
            var t = this.opacity;
            return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
        }
        function tw(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }
        function tb(t, n, e, r) {
            return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN),
            new tx(t,n,e,r)
        }
        function tE(t) {
            if (t instanceof tx)
                return new tx(t.h,t.s,t.l,t.opacity);
            if (t instanceof Q || (t = tp(t)),
            !t)
                return new tx;
            if (t instanceof tx)
                return t;
            var n = (t = t.rgb()).r / 255
              , e = t.g / 255
              , r = t.b / 255
              , o = Math.min(n, e, r)
              , i = Math.max(n, e, r)
              , u = NaN
              , a = i - o
              , c = (i + o) / 2;
            return a ? (u = n === i ? (e - r) / a + (e < r) * 6 : e === i ? (r - n) / a + 2 : (n - e) / a + 4,
            a /= c < .5 ? i + o : 2 - i - o,
            u *= 60) : a = c > 0 && c < 1 ? 0 : u,
            new tx(u,a,c,t.opacity)
        }
        function tx(t, n, e, r) {
            this.h = +t,
            this.s = +n,
            this.l = +e,
            this.opacity = +r
        }
        function tM(t, n, e) {
            return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255
        }
        function tS(t, n, e, r, o) {
            var i = t * t
              , u = i * t;
            return ((1 - 3 * t + 3 * i - u) * n + (4 - 6 * i + 3 * u) * e + (1 + 3 * t + 3 * i - 3 * u) * r + u * o) / 6
        }
        K(Q, tp, {
            copy: function(t) {
                return Object.assign(new this.constructor, this, t)
            },
            displayable: function() {
                return this.rgb().displayable()
            },
            hex: tf,
            formatHex: tf,
            formatHsl: function() {
                return tE(this).formatHsl()
            },
            formatRgb: th,
            toString: th
        }),
        K(tm, tg, J(Q, {
            brighter: function(t) {
                return t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t),
                new tm(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t),
                new tm(this.r * t,this.g * t,this.b * t,this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: ty,
            formatHex: ty,
            formatRgb: t_,
            toString: t_
        })),
        K(tx, function(t, n, e, r) {
            return 1 === arguments.length ? tE(t) : new tx(t,n,e,null == r ? 1 : r)
        }, J(Q, {
            brighter: function(t) {
                return t = null == t ? 1.4285714285714286 : Math.pow(1.4285714285714286, t),
                new tx(this.h,this.s,this.l * t,this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t),
                new tx(this.h,this.s,this.l * t,this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + (this.h < 0) * 360
                  , n = isNaN(t) || isNaN(this.s) ? 0 : this.s
                  , e = this.l
                  , r = e + (e < .5 ? e : 1 - e) * n
                  , o = 2 * e - r;
                return new tm(tM(t >= 240 ? t - 240 : t + 120, o, r),tM(t, o, r),tM(t < 120 ? t + 240 : t - 120, o, r),this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            },
            formatHsl: function() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") + (this.h || 0) + ", " + 100 * (this.s || 0) + "%, " + 100 * (this.l || 0) + "%" + (1 === t ? ")" : ", " + t + ")")
            }
        }));
        var tk = t=>()=>t;
        function tN(t, n) {
            var e, r, o = n - t;
            return o ? function(n) {
                return t + n * o
            }
            : tk(isNaN(t) ? n : t)
        }
        var tA = function t(n) {
            var e, r = 1 == (e = +(e = n)) ? tN : function(t, n) {
                var r, o, i;
                return n - t ? (r = t,
                o = n,
                i = e,
                o = Math.pow(o, i) - (r = Math.pow(r, i)),
                i = 1 / i,
                function(t) {
                    return Math.pow(r + t * o, i)
                }
                ) : tk(isNaN(t) ? n : t)
            }
            ;
            function o(t, n) {
                var e = r((t = tg(t)).r, (n = tg(n)).r)
                  , o = r(t.g, n.g)
                  , i = r(t.b, n.b)
                  , u = tN(t.opacity, n.opacity);
                return function(n) {
                    return t.r = e(n),
                    t.g = o(n),
                    t.b = i(n),
                    t.opacity = u(n),
                    t + ""
                }
            }
            return o.gamma = t,
            o
        }(1);
        function tP(t) {
            return function(n) {
                var e, r, o = n.length, i = Array(o), u = Array(o), a = Array(o);
                for (e = 0; e < o; ++e)
                    r = tg(n[e]),
                    i[e] = r.r || 0,
                    u[e] = r.g || 0,
                    a[e] = r.b || 0;
                return i = t(i),
                u = t(u),
                a = t(a),
                r.opacity = 1,
                function(t) {
                    return r.r = i(t),
                    r.g = u(t),
                    r.b = a(t),
                    r + ""
                }
            }
        }
        tP(function(t) {
            var n = t.length - 1;
            return function(e) {
                var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1,
                n - 1) : Math.floor(e * n)
                  , o = t[r]
                  , i = t[r + 1]
                  , u = r > 0 ? t[r - 1] : 2 * o - i
                  , a = r < n - 1 ? t[r + 2] : 2 * i - o;
                return tS((e - r / n) * n, u, o, i, a)
            }
        }),
        tP(function(t) {
            var n = t.length;
            return function(e) {
                var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n)
                  , o = t[(r + n - 1) % n]
                  , i = t[r % n]
                  , u = t[(r + 1) % n]
                  , a = t[(r + 2) % n];
                return tS((e - r / n) * n, o, i, u, a)
            }
        });
        var tj = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g
          , tz = RegExp(tj.source, "g");
        function tZ(t, n) {
            var e, r, o, i, u, a = tj.lastIndex = tz.lastIndex = 0, c = -1, l = [], s = [];
            for (t += "",
            n += ""; (o = tj.exec(t)) && (i = tz.exec(n)); )
                (u = i.index) > a && (u = n.slice(a, u),
                l[c] ? l[c] += u : l[++c] = u),
                (o = o[0]) === (i = i[0]) ? l[c] ? l[c] += i : l[++c] = i : (l[++c] = null,
                s.push({
                    i: c,
                    x: D(o, i)
                })),
                a = tz.lastIndex;
            return a < n.length && (u = n.slice(a),
            l[c] ? l[c] += u : l[++c] = u),
            l.length < 2 ? s[0] ? (e = s[0].x,
            function(t) {
                return e(t) + ""
            }
            ) : (r = n,
            function() {
                return r
            }
            ) : (n = s.length,
            function(t) {
                for (var e, r = 0; r < n; ++r)
                    l[(e = s[r]).i] = e.x(t);
                return l.join("")
            }
            )
        }
        function tC(t, n) {
            var e;
            return ("number" == typeof n ? D : n instanceof tp ? tA : (e = tp(n)) ? (n = e,
            tA) : tZ)(t, n)
        }
        function tO(t) {
            return function() {
                this.removeAttribute(t)
            }
        }
        function tT(t) {
            return function() {
                this.removeAttributeNS(t.space, t.local)
            }
        }
        function tR(t, n, e) {
            var r, o, i = e + "";
            return function() {
                var u = this.getAttribute(t);
                return u === i ? null : u === r ? o : o = n(r = u, e)
            }
        }
        function tq(t, n, e) {
            var r, o, i = e + "";
            return function() {
                var u = this.getAttributeNS(t.space, t.local);
                return u === i ? null : u === r ? o : o = n(r = u, e)
            }
        }
        function tL(t, n, e) {
            var r, o, i;
            return function() {
                var u, a, c = e(this);
                return null == c ? void this.removeAttribute(t) : (u = this.getAttribute(t)) === (a = c + "") ? null : u === r && a === o ? i : (o = a,
                i = n(r = u, c))
            }
        }
        function tG(t, n, e) {
            var r, o, i;
            return function() {
                var u, a, c = e(this);
                return null == c ? void this.removeAttributeNS(t.space, t.local) : (u = this.getAttributeNS(t.space, t.local)) === (a = c + "") ? null : u === r && a === o ? i : (o = a,
                i = n(r = u, c))
            }
        }
        function tD(t, n) {
            var e, r;
            function o() {
                var o, i, u = n.apply(this, arguments);
                return u !== r && (e = (r = u) && (o = t,
                i = u,
                function(t) {
                    this.setAttributeNS(o.space, o.local, i.call(this, t))
                }
                )),
                e
            }
            return o._value = n,
            o
        }
        function tX(t, n) {
            var e, r;
            function o() {
                var o, i, u = n.apply(this, arguments);
                return u !== r && (e = (r = u) && (o = t,
                i = u,
                function(t) {
                    this.setAttribute(o, i.call(this, t))
                }
                )),
                e
            }
            return o._value = n,
            o
        }
        function tY(t, n) {
            return function() {
                R(this, t).delay = +n.apply(this, arguments)
            }
        }
        function tI(t, n) {
            return n = +n,
            function() {
                R(this, t).delay = n
            }
        }
        function tB(t, n) {
            return function() {
                q(this, t).duration = +n.apply(this, arguments)
            }
        }
        function tF(t, n) {
            return n = +n,
            function() {
                q(this, t).duration = n
            }
        }
        var tU = e(55491)
          , tH = e(77895)
          , tV = e(68578)
          , tW = g.ZP.prototype.constructor
          , t$ = e(43959);
        function tK(t) {
            return function() {
                this.style.removeProperty(t)
            }
        }
        var tJ = 0;
        function tQ(t, n, e, r) {
            this._groups = t,
            this._parents = n,
            this._name = e,
            this._id = r
        }
        function t0() {
            return ++tJ
        }
        var t1 = g.ZP.prototype;
        tQ.prototype = (function(t) {
            return (0,
            g.ZP)().transition(t)
        }
        ).prototype = {
            constructor: tQ,
            select: function(t) {
                var n = this._name
                  , e = this._id;
                "function" != typeof t && (t = (0,
                tH.Z)(t));
                for (var r = this._groups, o = r.length, i = Array(o), u = 0; u < o; ++u)
                    for (var a, c, l = r[u], s = l.length, f = i[u] = Array(s), h = 0; h < s; ++h)
                        (a = l[h]) && (c = t.call(a, a.__data__, h, l)) && ("__data__"in a && (c.__data__ = a.__data__),
                        f[h] = c,
                        T(f[h], n, e, h, f, L(a, e)));
                return new tQ(i,this._parents,n,e)
            },
            selectAll: function(t) {
                var n = this._name
                  , e = this._id;
                "function" != typeof t && (t = (0,
                tV.Z)(t));
                for (var r = this._groups, o = r.length, i = [], u = [], a = 0; a < o; ++a)
                    for (var c, l = r[a], s = l.length, f = 0; f < s; ++f)
                        if (c = l[f]) {
                            for (var h, p = t.call(c, c.__data__, f, l), d = L(c, e), v = 0, g = p.length; v < g; ++v)
                                (h = p[v]) && T(h, n, e, v, p, d);
                            i.push(p),
                            u.push(c)
                        }
                return new tQ(i,u,n,e)
            },
            filter: function(t) {
                "function" != typeof t && (t = (0,
                tU.Z)(t));
                for (var n = this._groups, e = n.length, r = Array(e), o = 0; o < e; ++o)
                    for (var i, u = n[o], a = u.length, c = r[o] = [], l = 0; l < a; ++l)
                        (i = u[l]) && t.call(i, i.__data__, l, u) && c.push(i);
                return new tQ(r,this._parents,this._name,this._id)
            },
            merge: function(t) {
                if (t._id !== this._id)
                    throw Error();
                for (var n = this._groups, e = t._groups, r = n.length, o = e.length, i = Math.min(r, o), u = Array(r), a = 0; a < i; ++a)
                    for (var c, l = n[a], s = e[a], f = l.length, h = u[a] = Array(f), p = 0; p < f; ++p)
                        (c = l[p] || s[p]) && (h[p] = c);
                for (; a < r; ++a)
                    u[a] = n[a];
                return new tQ(u,this._parents,this._name,this._id)
            },
            selection: function() {
                return new tW(this._groups,this._parents)
            },
            transition: function() {
                for (var t = this._name, n = this._id, e = t0(), r = this._groups, o = r.length, i = 0; i < o; ++i)
                    for (var u, a = r[i], c = a.length, l = 0; l < c; ++l)
                        if (u = a[l]) {
                            var s = L(u, n);
                            T(u, t, e, l, a, {
                                time: s.time + s.delay + s.duration,
                                delay: 0,
                                duration: s.duration,
                                ease: s.ease
                            })
                        }
                return new tQ(r,this._parents,t,e)
            },
            call: t1.call,
            nodes: t1.nodes,
            node: t1.node,
            size: t1.size,
            empty: t1.empty,
            each: t1.each,
            on: function(t, n) {
                var e, r, o, i, u, a, c, l = this._id;
                return arguments.length < 2 ? L(this.node(), l).on.on(t) : this.each((c = (t + "").trim().split(/^|\s+/).every(function(t) {
                    var n = t.indexOf(".");
                    return n >= 0 && (t = t.slice(0, n)),
                    !t || "start" === t
                }) ? R : q,
                function() {
                    var e = c(this, l)
                      , r = e.on;
                    r !== u && (a = (u = r).copy()).on(t, n),
                    e.on = a
                }
                ))
            },
            attr: function(t, n) {
                var e = (0,
                H.Z)(t)
                  , r = "transform" === e ? U : tC;
                return this.attrTween(t, "function" == typeof n ? (e.local ? tG : tL)(e, r, $(this, "attr." + t, n)) : null == n ? (e.local ? tT : tO)(e) : (e.local ? tq : tR)(e, r, n))
            },
            attrTween: function(t, n) {
                var e = "attr." + t;
                if (arguments.length < 2)
                    return (e = this.tween(e)) && e._value;
                if (null == n)
                    return this.tween(e, null);
                if ("function" != typeof n)
                    throw Error();
                var r = (0,
                H.Z)(t);
                return this.tween(e, (r.local ? tD : tX)(r, n))
            },
            style: function(t, n, e) {
                var r, o, i, u, a, c, l, s, f, h, p, d, v, g, m, y, _, w, b, E, x, M, S, k, N, A = "transform" == (t += "") ? F : tC;
                return null == n ? this.styleTween(t, function() {
                    var n = (0,
                    t$.S)(this, t)
                      , e = (this.style.removeProperty(t),
                    (0,
                    t$.S)(this, t));
                    return n === e ? null : n === i && e === u ? a : a = A(i = n, u = e)
                }).on("end.style." + t, tK(t)) : "function" == typeof n ? this.styleTween(t, (s = $(this, "style." + t, n),
                function() {
                    var n = (0,
                    t$.S)(this, t)
                      , e = s(this)
                      , r = e + "";
                    return null == e && (this.style.removeProperty(t),
                    r = e = (0,
                    t$.S)(this, t)),
                    n === r ? null : n === f && r === h ? p : (h = r,
                    p = A(f = n, e))
                }
                )).each((d = this._id,
                b = "end." + (w = "style." + t),
                function() {
                    var n = q(this, d)
                      , e = n.on
                      , r = null == n.value[w] ? _ || (_ = tK(t)) : void 0;
                    (e !== g || y !== r) && (m = (g = e).copy()).on(b, y = r),
                    n.on = m
                }
                )) : this.styleTween(t, (N = n + "",
                function() {
                    var e = (0,
                    t$.S)(this, t);
                    return e === N ? null : e === S ? k : k = A(S = e, n)
                }
                ), e).on("end.style." + t, null)
            },
            styleTween: function(t, n, e) {
                var r = "style." + (t += "");
                if (arguments.length < 2)
                    return (r = this.tween(r)) && r._value;
                if (null == n)
                    return this.tween(r, null);
                if ("function" != typeof n)
                    throw Error();
                return this.tween(r, function(t, n, e) {
                    var r, o;
                    function i() {
                        var i, u, a, c = n.apply(this, arguments);
                        return c !== o && (r = (o = c) && (i = t,
                        u = c,
                        a = e,
                        function(t) {
                            this.style.setProperty(i, u.call(this, t), a)
                        }
                        )),
                        r
                    }
                    return i._value = n,
                    i
                }(t, n, null == e ? "" : e))
            },
            text: function(t) {
                var n, e;
                return this.tween("text", "function" == typeof t ? (n = $(this, "text", t),
                function() {
                    var t = n(this);
                    this.textContent = null == t ? "" : t
                }
                ) : (e = null == t ? "" : t + "",
                function() {
                    this.textContent = e
                }
                ))
            },
            textTween: function(t) {
                var n = "text";
                if (arguments.length < 1)
                    return (n = this.tween(n)) && n._value;
                if (null == t)
                    return this.tween(n, null);
                if ("function" != typeof t)
                    throw Error();
                return this.tween(n, function(t) {
                    var n, e;
                    function r() {
                        var r, o = t.apply(this, arguments);
                        return o !== e && (n = (e = o) && (r = o,
                        function(t) {
                            this.textContent = r.call(this, t)
                        }
                        )),
                        n
                    }
                    return r._value = t,
                    r
                }(t))
            },
            remove: function() {
                var t;
                return this.on("end.remove", (t = this._id,
                function() {
                    var n = this.parentNode;
                    for (var e in this.__transition)
                        if (+e !== t)
                            return;
                    n && n.removeChild(this)
                }
                ))
            },
            tween: function(t, n) {
                var e = this._id;
                if (t += "",
                arguments.length < 2) {
                    for (var r, o = L(this.node(), e).tween, i = 0, u = o.length; i < u; ++i)
                        if ((r = o[i]).name === t)
                            return r.value;
                    return null
                }
                return this.each((null == n ? V : W)(e, t, n))
            },
            delay: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? tY : tI)(n, t)) : L(this.node(), n).delay
            },
            duration: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? tB : tF)(n, t)) : L(this.node(), n).duration
            },
            ease: function(t) {
                var n = this._id;
                return arguments.length ? this.each(function(t, n) {
                    if ("function" != typeof n)
                        throw Error();
                    return function() {
                        q(this, t).ease = n
                    }
                }(n, t)) : L(this.node(), n).ease
            },
            easeVarying: function(t) {
                var n, e;
                if ("function" != typeof t)
                    throw Error();
                return this.each((n = this._id,
                function() {
                    var e = t.apply(this, arguments);
                    if ("function" != typeof e)
                        throw Error();
                    q(this, n).ease = e
                }
                ))
            },
            end: function() {
                var t, n, e = this, r = e._id, o = e.size();
                return new Promise(function(i, u) {
                    var a = {
                        value: u
                    }
                      , c = {
                        value: function() {
                            0 == --o && i()
                        }
                    };
                    e.each(function() {
                        var e = q(this, r)
                          , o = e.on;
                        o !== t && ((n = (t = o).copy())._.cancel.push(a),
                        n._.interrupt.push(a),
                        n._.end.push(c)),
                        e.on = n
                    }),
                    0 === o && i()
                }
                )
            },
            [Symbol.iterator]: t1[Symbol.iterator]
        };
        var t2 = {
            time: null,
            delay: 0,
            duration: 250,
            ease: function(t) {
                return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
            }
        };
        function t5(t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]); )
                if (!(t = t.parentNode))
                    throw Error(`transition ${n} not found`);
            return e
        }
        g.ZP.prototype.interrupt = function(t) {
            return this.each(function() {
                G(this, t)
            })
        }
        ,
        g.ZP.prototype.transition = function(t) {
            var n, e;
            t instanceof tQ ? (n = t._id,
            t = t._name) : (n = t0(),
            (e = t2).time = S(),
            t = null == t ? null : t + "");
            for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
                for (var u, a = r[i], c = a.length, l = 0; l < c; ++l)
                    (u = a[l]) && T(u, t, n, l, a, e || t5(u, n));
            return new tQ(r,this._parents,t,n)
        }
        ;
        var t6 = t=>()=>t;
        function t3(t, {sourceEvent: n, target: e, transform: r, dispatch: o}) {
            Object.defineProperties(this, {
                type: {
                    value: t,
                    enumerable: !0,
                    configurable: !0
                },
                sourceEvent: {
                    value: n,
                    enumerable: !0,
                    configurable: !0
                },
                target: {
                    value: e,
                    enumerable: !0,
                    configurable: !0
                },
                transform: {
                    value: r,
                    enumerable: !0,
                    configurable: !0
                },
                _: {
                    value: o
                }
            })
        }
        function t4(t, n, e) {
            this.k = t,
            this.x = n,
            this.y = e
        }
        t4.prototype = {
            constructor: t4,
            scale: function(t) {
                return 1 === t ? this : new t4(this.k * t,this.x,this.y)
            },
            translate: function(t, n) {
                return 0 === t & 0 === n ? this : new t4(this.k,this.x + this.k * t,this.y + this.k * n)
            },
            apply: function(t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            },
            applyX: function(t) {
                return t * this.k + this.x
            },
            applyY: function(t) {
                return t * this.k + this.y
            },
            invert: function(t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            },
            invertX: function(t) {
                return (t - this.x) / this.k
            },
            invertY: function(t) {
                return (t - this.y) / this.k
            },
            rescaleX: function(t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            },
            rescaleY: function(t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            },
            toString: function() {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var t9 = new t4(1,0,0);
        function t7(t) {
            for (; !t.__zoom; )
                if (!(t = t.parentNode))
                    return t9;
            return t.__zoom
        }
        function t8(t) {
            t.stopImmediatePropagation()
        }
        function nt(t) {
            t.preventDefault(),
            t.stopImmediatePropagation()
        }
        function nn(t) {
            return (!t.ctrlKey || "wheel" === t.type) && !t.button
        }
        function ne() {
            var t = this;
            return t instanceof SVGElement ? (t = t.ownerSVGElement || t).hasAttribute("viewBox") ? [[(t = t.viewBox.baseVal).x, t.y], [t.x + t.width, t.y + t.height]] : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]] : [[0, 0], [t.clientWidth, t.clientHeight]]
        }
        function nr() {
            return this.__zoom || t9
        }
        function no(t) {
            return -t.deltaY * (1 === t.deltaMode ? .05 : t.deltaMode ? 1 : .002) * (t.ctrlKey ? 10 : 1)
        }
        function ni() {
            return navigator.maxTouchPoints || "ontouchstart"in this
        }
        function nu(t, n, e) {
            var r = t.invertX(n[0][0]) - e[0][0]
              , o = t.invertX(n[1][0]) - e[1][0]
              , i = t.invertY(n[0][1]) - e[0][1]
              , u = t.invertY(n[1][1]) - e[1][1];
            return t.translate(o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o), u > i ? (i + u) / 2 : Math.min(0, i) || Math.max(0, u))
        }
        function na() {
            var t, n, e, r = nn, o = ne, u = nu, a = no, c = ni, f = [0, 1 / 0], h = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], p = 250, g = d, m = i("start", "zoom", "end"), y = 0, _ = 10;
            function w(t) {
                t.property("__zoom", nr).on("wheel.zoom", N).on("mousedown.zoom", A).on("dblclick.zoom", P).filter(c).on("touchstart.zoom", j).on("touchmove.zoom", z).on("touchend.zoom touchcancel.zoom", Z).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }
            function b(t, n) {
                return (n = Math.max(f[0], Math.min(f[1], n))) === t.k ? t : new t4(n,t.x,t.y)
            }
            function E(t, n, e) {
                var r = n[0] - e[0] * t.k
                  , o = n[1] - e[1] * t.k;
                return r === t.x && o === t.y ? t : new t4(t.k,r,o)
            }
            function x(t) {
                return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
            }
            function M(t, n, e, r) {
                t.on("start.zoom", function() {
                    S(this, arguments).event(r).start()
                }).on("interrupt.zoom end.zoom", function() {
                    S(this, arguments).event(r).end()
                }).tween("zoom", function() {
                    var t = arguments
                      , i = S(this, t).event(r)
                      , u = o.apply(this, t)
                      , a = null == e ? x(u) : "function" == typeof e ? e.apply(this, t) : e
                      , c = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1])
                      , l = this.__zoom
                      , s = "function" == typeof n ? n.apply(this, t) : n
                      , f = g(l.invert(a).concat(c / l.k), s.invert(a).concat(c / s.k));
                    return function(t) {
                        if (1 === t)
                            t = s;
                        else {
                            var n = f(t)
                              , e = c / n[2];
                            t = new t4(e,a[0] - n[0] * e,a[1] - n[1] * e)
                        }
                        i.zoom(null, t)
                    }
                })
            }
            function S(t, n, e) {
                return !e && t.__zooming || new k(t,n)
            }
            function k(t, n) {
                this.that = t,
                this.args = n,
                this.active = 0,
                this.sourceEvent = null,
                this.extent = o.apply(t, n),
                this.taps = 0
            }
            function N(t, ...n) {
                if (r.apply(this, arguments)) {
                    var e = S(this, n).event(t)
                      , o = this.__zoom
                      , i = Math.max(f[0], Math.min(f[1], o.k * Math.pow(2, a.apply(this, arguments))))
                      , c = (0,
                    v.Z)(t);
                    if (e.wheel)
                        (e.mouse[0][0] !== c[0] || e.mouse[0][1] !== c[1]) && (e.mouse[1] = o.invert(e.mouse[0] = c)),
                        clearTimeout(e.wheel);
                    else {
                        if (o.k === i)
                            return;
                        e.mouse = [c, o.invert(c)],
                        G(this),
                        e.start()
                    }
                    nt(t),
                    e.wheel = setTimeout(function() {
                        e.wheel = null,
                        e.end()
                    }, 150),
                    e.zoom("mouse", u(E(b(o, i), e.mouse[0], e.mouse[1]), e.extent, h))
                }
            }
            function A(t, ...n) {
                if (!e && r.apply(this, arguments)) {
                    var o, i, a, c = S(this, n, !0).event(t), f = (0,
                    l.Z)(t.view).on("mousemove.zoom", function(t) {
                        if (nt(t),
                        !c.moved) {
                            var n = t.clientX - g
                              , e = t.clientY - m;
                            c.moved = n * n + e * e > y
                        }
                        c.event(t).zoom("mouse", u(E(c.that.__zoom, c.mouse[0] = (0,
                        v.Z)(t, d), c.mouse[1]), c.extent, h))
                    }, !0).on("mouseup.zoom", function(t) {
                        var n, e, r, o;
                        f.on("mousemove.zoom mouseup.zoom", null),
                        n = t.view,
                        e = c.moved,
                        r = n.document.documentElement,
                        o = (0,
                        l.Z)(n).on("dragstart.drag", null),
                        e && (o.on("click.drag", s, !0),
                        setTimeout(function() {
                            o.on("click.drag", null)
                        }, 0)),
                        "onselectstart"in r ? o.on("selectstart.drag", null) : (r.style.MozUserSelect = r.__noselect,
                        delete r.__noselect),
                        nt(t),
                        c.event(t).end()
                    }, !0), p = (0,
                    v.Z)(t, d), d = t.currentTarget, g = t.clientX, m = t.clientY;
                    i = (o = t.view).document.documentElement,
                    a = (0,
                    l.Z)(o).on("dragstart.drag", s, !0),
                    "onselectstart"in i ? a.on("selectstart.drag", s, !0) : (i.__noselect = i.style.MozUserSelect,
                    i.style.MozUserSelect = "none"),
                    t8(t),
                    c.mouse = [p, this.__zoom.invert(p)],
                    G(this),
                    c.start()
                }
            }
            function P(t, ...n) {
                if (r.apply(this, arguments)) {
                    var e = this.__zoom
                      , i = (0,
                    v.Z)(t.changedTouches ? t.changedTouches[0] : t, this)
                      , a = e.invert(i)
                      , c = e.k * (t.shiftKey ? .5 : 2)
                      , s = u(E(b(e, c), i, a), o.apply(this, n), h);
                    nt(t),
                    p > 0 ? (0,
                    l.Z)(this).transition().duration(p).call(M, s, i, t) : (0,
                    l.Z)(this).call(w.transform, s, i, t)
                }
            }
            function j(e, ...o) {
                if (r.apply(this, arguments)) {
                    var i, u, a, c, l = e.touches, s = l.length, f = S(this, o, e.changedTouches.length === s).event(e);
                    for (t8(e),
                    u = 0; u < s; ++u)
                        a = l[u],
                        c = [c = (0,
                        v.Z)(a, this), this.__zoom.invert(c), a.identifier],
                        f.touch0 ? f.touch1 || f.touch0[2] === c[2] || (f.touch1 = c,
                        f.taps = 0) : (f.touch0 = c,
                        i = !0,
                        f.taps = 1 + !!t);
                    t && (t = clearTimeout(t)),
                    i && (f.taps < 2 && (n = c[0],
                    t = setTimeout(function() {
                        t = null
                    }, 500)),
                    G(this),
                    f.start())
                }
            }
            function z(t, ...n) {
                if (this.__zooming) {
                    var e, r, o, i, a = S(this, n).event(t), c = t.changedTouches, l = c.length;
                    for (nt(t),
                    e = 0; e < l; ++e)
                        r = c[e],
                        o = (0,
                        v.Z)(r, this),
                        a.touch0 && a.touch0[2] === r.identifier ? a.touch0[0] = o : a.touch1 && a.touch1[2] === r.identifier && (a.touch1[0] = o);
                    if (r = a.that.__zoom,
                    a.touch1) {
                        var s = a.touch0[0]
                          , f = a.touch0[1]
                          , p = a.touch1[0]
                          , d = a.touch1[1]
                          , g = (g = p[0] - s[0]) * g + (g = p[1] - s[1]) * g
                          , m = (m = d[0] - f[0]) * m + (m = d[1] - f[1]) * m;
                        r = b(r, Math.sqrt(g / m)),
                        o = [(s[0] + p[0]) / 2, (s[1] + p[1]) / 2],
                        i = [(f[0] + d[0]) / 2, (f[1] + d[1]) / 2]
                    } else {
                        if (!a.touch0)
                            return;
                        o = a.touch0[0],
                        i = a.touch0[1]
                    }
                    a.zoom("touch", u(E(r, o, i), a.extent, h))
                }
            }
            function Z(t, ...r) {
                if (this.__zooming) {
                    var o, i, u = S(this, r).event(t), a = t.changedTouches, c = a.length;
                    for (t8(t),
                    e && clearTimeout(e),
                    e = setTimeout(function() {
                        e = null
                    }, 500),
                    o = 0; o < c; ++o)
                        i = a[o],
                        u.touch0 && u.touch0[2] === i.identifier ? delete u.touch0 : u.touch1 && u.touch1[2] === i.identifier && delete u.touch1;
                    if (u.touch1 && !u.touch0 && (u.touch0 = u.touch1,
                    delete u.touch1),
                    u.touch0)
                        u.touch0[1] = this.__zoom.invert(u.touch0[0]);
                    else if (u.end(),
                    2 === u.taps && (i = (0,
                    v.Z)(i, this),
                    Math.hypot(n[0] - i[0], n[1] - i[1]) < _)) {
                        var s = (0,
                        l.Z)(this).on("dblclick.zoom");
                        s && s.apply(this, arguments)
                    }
                }
            }
            return w.transform = function(t, n, e, r) {
                var o = t.selection ? t.selection() : t;
                o.property("__zoom", nr),
                t !== o ? M(t, n, e, r) : o.interrupt().each(function() {
                    S(this, arguments).event(r).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                })
            }
            ,
            w.scaleBy = function(t, n, e, r) {
                w.scaleTo(t, function() {
                    var t = this.__zoom.k
                      , e = "function" == typeof n ? n.apply(this, arguments) : n;
                    return t * e
                }, e, r)
            }
            ,
            w.scaleTo = function(t, n, e, r) {
                w.transform(t, function() {
                    var t = o.apply(this, arguments)
                      , r = this.__zoom
                      , i = null == e ? x(t) : "function" == typeof e ? e.apply(this, arguments) : e
                      , a = r.invert(i)
                      , c = "function" == typeof n ? n.apply(this, arguments) : n;
                    return u(E(b(r, c), i, a), t, h)
                }, e, r)
            }
            ,
            w.translateBy = function(t, n, e, r) {
                w.transform(t, function() {
                    return u(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), o.apply(this, arguments), h)
                }, null, r)
            }
            ,
            w.translateTo = function(t, n, e, r, i) {
                w.transform(t, function() {
                    var t = o.apply(this, arguments)
                      , i = this.__zoom
                      , a = null == r ? x(t) : "function" == typeof r ? r.apply(this, arguments) : r;
                    return u(t9.translate(a[0], a[1]).scale(i.k).translate("function" == typeof n ? -n.apply(this, arguments) : -n, "function" == typeof e ? -e.apply(this, arguments) : -e), t, h)
                }, r, i)
            }
            ,
            k.prototype = {
                event: function(t) {
                    return t && (this.sourceEvent = t),
                    this
                },
                start: function() {
                    return 1 == ++this.active && (this.that.__zooming = this,
                    this.emit("start")),
                    this
                },
                zoom: function(t, n) {
                    return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])),
                    this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])),
                    this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])),
                    this.that.__zoom = n,
                    this.emit("zoom"),
                    this
                },
                end: function() {
                    return 0 == --this.active && (delete this.that.__zooming,
                    this.emit("end")),
                    this
                },
                emit: function(t) {
                    var n = (0,
                    l.Z)(this.that).datum();
                    m.call(t, this.that, new t3(t,{
                        sourceEvent: this.sourceEvent,
                        target: w,
                        type: t,
                        transform: this.that.__zoom,
                        dispatch: m
                    }), n)
                }
            },
            w.wheelDelta = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t : t6(+t),
                w) : a
            }
            ,
            w.filter = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : t6(!!t),
                w) : r
            }
            ,
            w.touchable = function(t) {
                return arguments.length ? (c = "function" == typeof t ? t : t6(!!t),
                w) : c
            }
            ,
            w.extent = function(t) {
                return arguments.length ? (o = "function" == typeof t ? t : t6([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]),
                w) : o
            }
            ,
            w.scaleExtent = function(t) {
                return arguments.length ? (f[0] = +t[0],
                f[1] = +t[1],
                w) : [f[0], f[1]]
            }
            ,
            w.translateExtent = function(t) {
                return arguments.length ? (h[0][0] = +t[0][0],
                h[1][0] = +t[1][0],
                h[0][1] = +t[0][1],
                h[1][1] = +t[1][1],
                w) : [[h[0][0], h[0][1]], [h[1][0], h[1][1]]]
            }
            ,
            w.constrain = function(t) {
                return arguments.length ? (u = t,
                w) : u
            }
            ,
            w.duration = function(t) {
                return arguments.length ? (p = +t,
                w) : p
            }
            ,
            w.interpolate = function(t) {
                return arguments.length ? (g = t,
                w) : g
            }
            ,
            w.on = function() {
                var t = m.on.apply(m, arguments);
                return t === m ? w : t
            }
            ,
            w.clickDistance = function(t) {
                return arguments.length ? (y = (t = +t) * t,
                w) : Math.sqrt(y)
            }
            ,
            w.tapDistance = function(t) {
                return arguments.length ? (_ = +t,
                w) : _
            }
            ,
            w
        }
        t7.prototype = t4.prototype
    },
    59632: function(t) {
        var n = function(t) {
            var n = /[\\^$.*+?()[\]{}|]/g
              , e = RegExp(n.source);
            return t && e.test(t) ? t.replace(n, "\\$&") : t
        }
          , e = function(t) {
            return "string" == typeof t
        }
          , r = function(t) {
            var n = [];
            return t.forEach(function(t) {
                Array.isArray(t) ? n = n.concat(t) : n.push(t)
            }),
            n
        };
        t.exports = function(t, o, i) {
            return Array.isArray(t) || (t = [t]),
            r(t.map(function(t) {
                return e(t) ? function(t, r, o) {
                    var i = 0
                      , u = 0;
                    if ("" === t)
                        return t;
                    if (!t || !e(t))
                        throw TypeError("First argument to react-string-replace#replaceString must be a string");
                    var a, c = r;
                    !((a = c)instanceof RegExp) && (c = RegExp("(" + n(c) + ")", "gi"));
                    for (var l = t.split(c), s = 1, f = l.length; s < f; s += 2) {
                        if (void 0 === l[s] || void 0 === l[s - 1]) {
                            console.warn("reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working the way you expect.");
                            continue
                        }
                        u = l[s].length,
                        i += l[s - 1].length,
                        l[s] = o(l[s], s, i),
                        i += u
                    }
                    return l
                }(t, o, i) : t
            }))
        }
    },
    99936: function(t, n, e) {
        "use strict";
        function r(t) {
            return t
        }
        function o(t) {
            if (null == t)
                return r;
            var n, e, o = t.scale[0], i = t.scale[1], u = t.translate[0], a = t.translate[1];
            return function(t, r) {
                r || (n = e = 0);
                var c = 2
                  , l = t.length
                  , s = Array(l);
                for (s[0] = (n += t[0]) * o + u,
                s[1] = (e += t[1]) * i + a; c < l; )
                    s[c] = t[c],
                    ++c;
                return s
            }
        }
        function i(t) {
            var n, e = o(t.transform), r = 1 / 0, i = r, u = -r, a = -r;
            function c(t) {
                (t = e(t))[0] < r && (r = t[0]),
                t[0] > u && (u = t[0]),
                t[1] < i && (i = t[1]),
                t[1] > a && (a = t[1])
            }
            function l(t) {
                switch (t.type) {
                case "GeometryCollection":
                    t.geometries.forEach(l);
                    break;
                case "Point":
                    c(t.coordinates);
                    break;
                case "MultiPoint":
                    t.coordinates.forEach(c)
                }
            }
            for (n in t.arcs.forEach(function(t) {
                for (var n, o = -1, c = t.length; ++o < c; )
                    (n = e(t[o], o))[0] < r && (r = n[0]),
                    n[0] > u && (u = n[0]),
                    n[1] < i && (i = n[1]),
                    n[1] > a && (a = n[1])
            }),
            t.objects)
                l(t.objects[n]);
            return [r, i, u, a]
        }
        function u(t, n) {
            return "string" == typeof n && (n = t.objects[n]),
            "GeometryCollection" === n.type ? {
                type: "FeatureCollection",
                features: n.geometries.map(function(n) {
                    return a(t, n)
                })
            } : a(t, n)
        }
        function a(t, n) {
            var e = n.id
              , r = n.bbox
              , o = null == n.properties ? {} : n.properties
              , i = c(t, n);
            return null == e && null == r ? {
                type: "Feature",
                properties: o,
                geometry: i
            } : null == r ? {
                type: "Feature",
                id: e,
                properties: o,
                geometry: i
            } : {
                type: "Feature",
                id: e,
                bbox: r,
                properties: o,
                geometry: i
            }
        }
        function c(t, n) {
            var e = o(t.transform)
              , r = t.arcs;
            function i(t, n) {
                n.length && n.pop();
                for (var o = r[t < 0 ? ~t : t], i = 0, u = o.length; i < u; ++i)
                    n.push(e(o[i], i));
                t < 0 && function(t, n) {
                    for (var e, r = t.length, o = r - n; o < --r; )
                        e = t[o],
                        t[o++] = t[r],
                        t[r] = e
                }(n, u)
            }
            function u(t) {
                return e(t)
            }
            function a(t) {
                for (var n = [], e = 0, r = t.length; e < r; ++e)
                    i(t[e], n);
                return n.length < 2 && n.push(n[0]),
                n
            }
            function c(t) {
                for (var n = a(t); n.length < 4; )
                    n.push(n[0]);
                return n
            }
            function l(t) {
                return t.map(c)
            }
            return function t(n) {
                var e, r = n.type;
                switch (r) {
                case "GeometryCollection":
                    return {
                        type: r,
                        geometries: n.geometries.map(t)
                    };
                case "Point":
                    e = u(n.coordinates);
                    break;
                case "MultiPoint":
                    e = n.coordinates.map(u);
                    break;
                case "LineString":
                    e = a(n.arcs);
                    break;
                case "MultiLineString":
                    e = n.arcs.map(a);
                    break;
                case "Polygon":
                    e = l(n.arcs);
                    break;
                case "MultiPolygon":
                    e = n.arcs.map(l);
                    break;
                default:
                    return null
                }
                return {
                    type: r,
                    coordinates: e
                }
            }(n)
        }
        function l(t, n) {
            var e = {}
              , r = {}
              , o = {}
              , i = []
              , u = -1;
            function a(t, n) {
                for (var r in t) {
                    var o = t[r];
                    delete n[o.start],
                    delete o.start,
                    delete o.end,
                    o.forEach(function(t) {
                        e[t < 0 ? ~t : t] = 1
                    }),
                    i.push(o)
                }
            }
            return n.forEach(function(e, r) {
                var o, i = t.arcs[e < 0 ? ~e : e];
                !(i.length < 3) || i[1][0] || i[1][1] || (o = n[++u],
                n[u] = e,
                n[r] = o)
            }),
            n.forEach(function(n) {
                var e, i, u, a, c, l, s = (e = n,
                u = t.arcs[e < 0 ? ~e : e],
                a = u[0],
                t.transform ? (i = [0, 0],
                u.forEach(function(t) {
                    i[0] += t[0],
                    i[1] += t[1]
                })) : i = u[u.length - 1],
                e < 0 ? [i, a] : [a, i]), f = s[0], h = s[1];
                if (c = o[f]) {
                    if (delete o[c.end],
                    c.push(n),
                    c.end = h,
                    l = r[h]) {
                        delete r[l.start];
                        var p = l === c ? c : c.concat(l);
                        r[p.start = c.start] = o[p.end = l.end] = p
                    } else
                        r[c.start] = o[c.end] = c
                } else if (c = r[h]) {
                    if (delete r[c.start],
                    c.unshift(n),
                    c.start = f,
                    l = o[f]) {
                        delete o[l.end];
                        var d = l === c ? c : l.concat(c);
                        r[d.start = l.start] = o[d.end = c.end] = d
                    } else
                        r[c.start] = o[c.end] = c
                } else
                    r[(c = [n]).start = f] = o[c.end = h] = c
            }),
            a(o, r),
            a(r, o),
            n.forEach(function(t) {
                e[t < 0 ? ~t : t] || i.push([t])
            }),
            i
        }
        function s(t) {
            return c(t, f.apply(this, arguments))
        }
        function f(t, n, e) {
            var r, o, i;
            if (arguments.length > 1)
                r = function(t, n, e) {
                    var r, o = [], i = [];
                    function u(t) {
                        var n = t < 0 ? ~t : t;
                        (i[n] || (i[n] = [])).push({
                            i: t,
                            g: r
                        })
                    }
                    function a(t) {
                        t.forEach(u)
                    }
                    function c(t) {
                        t.forEach(a)
                    }
                    return !function t(n) {
                        switch (r = n,
                        n.type) {
                        case "GeometryCollection":
                            n.geometries.forEach(t);
                            break;
                        case "LineString":
                            a(n.arcs);
                            break;
                        case "MultiLineString":
                        case "Polygon":
                            c(n.arcs);
                            break;
                        case "MultiPolygon":
                            !function(t) {
                                t.forEach(c)
                            }(n.arcs)
                        }
                    }(n),
                    i.forEach(null == e ? function(t) {
                        o.push(t[0].i)
                    }
                    : function(t) {
                        e(t[0].g, t[t.length - 1].g) && o.push(t[0].i)
                    }
                    ),
                    o
                }(t, n, e);
            else
                for (o = 0,
                r = Array(i = t.arcs.length); o < i; ++o)
                    r[o] = o;
            return {
                type: "MultiLineString",
                arcs: l(t, r)
            }
        }
        function h(t) {
            return c(t, p.apply(this, arguments))
        }
        function p(t, n) {
            var e = {}
              , r = []
              , o = [];
            function i(t) {
                switch (t.type) {
                case "GeometryCollection":
                    t.geometries.forEach(i);
                    break;
                case "Polygon":
                    u(t.arcs);
                    break;
                case "MultiPolygon":
                    t.arcs.forEach(u)
                }
            }
            function u(t) {
                t.forEach(function(n) {
                    n.forEach(function(n) {
                        (e[n = n < 0 ? ~n : n] || (e[n] = [])).push(t)
                    })
                }),
                r.push(t)
            }
            function a(n) {
                return function(t) {
                    for (var n, e = -1, r = t.length, o = t[r - 1], i = 0; ++e < r; )
                        n = o,
                        o = t[e],
                        i += n[0] * o[1] - n[1] * o[0];
                    return Math.abs(i)
                }(c(t, {
                    type: "Polygon",
                    arcs: [n]
                }).coordinates[0])
            }
            return n.forEach(i),
            r.forEach(function(t) {
                if (!t._) {
                    var n = []
                      , r = [t];
                    for (t._ = 1,
                    o.push(n); t = r.pop(); )
                        n.push(t),
                        t.forEach(function(t) {
                            t.forEach(function(t) {
                                e[t < 0 ? ~t : t].forEach(function(t) {
                                    t._ || (t._ = 1,
                                    r.push(t))
                                })
                            })
                        })
                }
            }),
            r.forEach(function(t) {
                delete t._
            }),
            {
                type: "MultiPolygon",
                arcs: o.map(function(n) {
                    var r, o = [];
                    if (n.forEach(function(t) {
                        t.forEach(function(t) {
                            t.forEach(function(t) {
                                e[t < 0 ? ~t : t].length < 2 && o.push(t)
                            })
                        })
                    }),
                    (r = (o = l(t, o)).length) > 1)
                        for (var i, u, c = 1, s = a(o[0]); c < r; ++c)
                            (i = a(o[c])) > s && (u = o[0],
                            o[0] = o[c],
                            o[c] = u,
                            s = i);
                    return o
                }).filter(function(t) {
                    return t.length > 0
                })
            }
        }
        function d(t, n) {
            for (var e = 0, r = t.length; e < r; ) {
                var o = e + r >>> 1;
                t[o] < n ? e = o + 1 : r = o
            }
            return e
        }
        function v(t) {
            var n = {}
              , e = t.map(function() {
                return []
            });
            function r(t, e) {
                t.forEach(function(t) {
                    t < 0 && (t = ~t);
                    var r = n[t];
                    r ? r.push(e) : n[t] = [e]
                })
            }
            function o(t, n) {
                t.forEach(function(t) {
                    r(t, n)
                })
            }
            var i = {
                LineString: r,
                MultiLineString: o,
                Polygon: o,
                MultiPolygon: function(t, n) {
                    t.forEach(function(t) {
                        o(t, n)
                    })
                }
            };
            for (var u in t.forEach(function t(n, e) {
                "GeometryCollection" === n.type ? n.geometries.forEach(function(n) {
                    t(n, e)
                }) : n.type in i && i[n.type](n.arcs, e)
            }),
            n)
                for (var a = n[u], c = a.length, l = 0; l < c; ++l)
                    for (var s = l + 1; s < c; ++s) {
                        var f, h = a[l], p = a[s];
                        (f = e[h])[u = d(f, p)] !== p && f.splice(u, 0, p),
                        (f = e[p])[u = d(f, h)] !== h && f.splice(u, 0, h)
                    }
            return e
        }
        function g(t) {
            if (null == t)
                return r;
            var n, e, o = t.scale[0], i = t.scale[1], u = t.translate[0], a = t.translate[1];
            return function(t, r) {
                r || (n = e = 0);
                var c = 2
                  , l = t.length
                  , s = Array(l)
                  , f = Math.round((t[0] - u) / o)
                  , h = Math.round((t[1] - a) / i);
                for (s[0] = f - n,
                n = f,
                s[1] = h - e,
                e = h; c < l; )
                    s[c] = t[c],
                    ++c;
                return s
            }
        }
        function m(t, n) {
            if (t.transform)
                throw Error("already quantized");
            if (n && n.scale)
                c = t.bbox;
            else {
                if (!((e = Math.floor(n)) >= 2))
                    throw Error("n must be ≥2");
                var e, r = (c = t.bbox || i(t))[0], o = c[1], u = c[2], a = c[3];
                n = {
                    scale: [u - r ? (u - r) / (e - 1) : 1, a - o ? (a - o) / (e - 1) : 1],
                    translate: [r, o]
                }
            }
            var c, l, s = g(n), f = t.objects, h = {};
            function p(t) {
                return s(t)
            }
            function d(t) {
                var n;
                switch (t.type) {
                case "GeometryCollection":
                    n = {
                        type: "GeometryCollection",
                        geometries: t.geometries.map(d)
                    };
                    break;
                case "Point":
                    n = {
                        type: "Point",
                        coordinates: p(t.coordinates)
                    };
                    break;
                case "MultiPoint":
                    n = {
                        type: "MultiPoint",
                        coordinates: t.coordinates.map(p)
                    };
                    break;
                default:
                    return t
                }
                return null != t.id && (n.id = t.id),
                null != t.bbox && (n.bbox = t.bbox),
                null != t.properties && (n.properties = t.properties),
                n
            }
            for (l in f)
                h[l] = d(f[l]);
            return {
                type: "Topology",
                bbox: c,
                transform: n,
                objects: h,
                arcs: t.arcs.map(function(t) {
                    var n, e = 0, r = 1, o = t.length, i = Array(o);
                    for (i[0] = s(t[0], 0); ++e < o; )
                        ((n = s(t[e], e))[0] || n[1]) && (i[r++] = n);
                    return 1 === r && (i[r++] = [0, 0]),
                    i.length = r,
                    i
                })
            }
        }
        e.r(n),
        e.d(n, {
            bbox: function() {
                return i
            },
            feature: function() {
                return u
            },
            merge: function() {
                return h
            },
            mergeArcs: function() {
                return p
            },
            mesh: function() {
                return s
            },
            meshArcs: function() {
                return f
            },
            neighbors: function() {
                return v
            },
            quantize: function() {
                return m
            },
            transform: function() {
                return o
            },
            untransform: function() {
                return g
            }
        })
    }
}]);
