(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[672], {
    65797: function(n, t, e) {
        "use strict";
        e.d(t, {
            v: function() {
                return u
            }
        });
        var r = e(67294)
          , u = function(n) {
            var t = (0,
            r.useState)([])
              , e = t[0]
              , u = t[1];
            (0,
            r.useEffect)(function() {
                var t, e, r, i = Math.ceil(n / 6), a = 1 === (e = i.toString().length) ? 1 : Math.pow(10, e - 1);
                u(o(9 === parseInt(i.toString()[0]) ? i + a : Math.ceil(i / a) * a, 6))
            }, [n]);
            var o = function(n, t) {
                for (var e = [], r = 1; r <= t; r++) {
                    var u = n * r;
                    e.push(u)
                }
                return e.reverse()
            };
            return e
        }
    },
    65729: function() {},
    1410: function(n, t, e) {
        "use strict";
        e.d(t, {
            Hb: function() {
                return u
            },
            UO: function() {
                return a
            },
            mE: function() {
                return c
            },
            sj: function() {
                return o
            }
        });
        var r = e(67294);
        function u(n) {
            return Object.freeze({
                __version: 1,
                map: n
            })
        }
        function o(n, t) {
            return Object.freeze({
                ...n,
                ...t
            })
        }
        let i = (0,
        r.createContext)(null)
          , a = i.Provider;
        function c() {
            let n = (0,
            r.useContext)(i);
            if (null == n)
                throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");
            return n
        }
    },
    28540: function(n, t, e) {
        "use strict";
        e.d(t, {
            Z: function() {
                return Z
            }
        });
        class r {
            constructor() {
                this._partials = new Float64Array(32),
                this._n = 0
            }
            add(n) {
                let t = this._partials
                  , e = 0;
                for (let r = 0; r < this._n && r < 32; r++) {
                    let u = t[r]
                      , o = n + u
                      , i = Math.abs(n) < Math.abs(u) ? n - (o - u) : u - (o - n);
                    i && (t[e++] = i),
                    n = o
                }
                return t[e] = n,
                this._n = e + 1,
                this
            }
            valueOf() {
                let n = this._partials, t = this._n, e, r, u, o = 0;
                if (t > 0) {
                    for (o = n[--t]; t > 0 && (o = (e = o) + (r = n[--t]),
                    !(u = r - (o - e))); )
                        ;
                    t > 0 && (u < 0 && n[t - 1] < 0 || u > 0 && n[t - 1] > 0) && (e = o + (r = 2 * u),
                    r == e - o && (o = e))
                }
                return o
            }
        }
        var u, o, i, a, c, l, f, s, p, v, h, d, y, g, E, m, S = Math.PI, w = S / 2, M = 180 / S, O = S / 180, b = Math.atan2, _ = Math.cos, C = Math.hypot, P = Math.sin, N = Math.sqrt;
        function R(n) {
            return n > 1 ? w : n < -1 ? -w : Math.asin(n)
        }
        function j(n, t) {
            n && k.hasOwnProperty(n.type) && k[n.type](n, t)
        }
        var L = {
            Feature: function(n, t) {
                j(n.geometry, t)
            },
            FeatureCollection: function(n, t) {
                for (var e = n.features, r = -1, u = e.length; ++r < u; )
                    j(e[r].geometry, t)
            }
        }
          , k = {
            Sphere: function(n, t) {
                t.sphere()
            },
            Point: function(n, t) {
                n = n.coordinates,
                t.point(n[0], n[1], n[2])
            },
            MultiPoint: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                    n = e[r],
                    t.point(n[0], n[1], n[2])
            },
            LineString: function(n, t) {
                H(n.coordinates, t, 0)
            },
            MultiLineString: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                    H(e[r], t, 0)
            },
            Polygon: function(n, t) {
                x(n.coordinates, t)
            },
            MultiPolygon: function(n, t) {
                for (var e = n.coordinates, r = -1, u = e.length; ++r < u; )
                    x(e[r], t)
            },
            GeometryCollection: function(n, t) {
                for (var e = n.geometries, r = -1, u = e.length; ++r < u; )
                    j(e[r], t)
            }
        };
        function H(n, t, e) {
            var r, u = -1, o = n.length - e;
            for (t.lineStart(); ++u < o; )
                r = n[u],
                t.point(r[0], r[1], r[2]);
            t.lineEnd()
        }
        function x(n, t) {
            var e = -1
              , r = n.length;
            for (t.polygonStart(); ++e < r; )
                H(n[e], t, 1);
            t.polygonEnd()
        }
        var I = {
            sphere: function() {},
            point: z,
            lineStart: U,
            lineEnd: A,
            polygonStart: function() {
                I.lineStart = B,
                I.lineEnd = J
            },
            polygonEnd: function() {
                I.lineStart = U,
                I.lineEnd = A
            }
        };
        function z(n, t) {
            n *= O;
            var e = _(t *= O);
            F(e * _(n), e * P(n), P(t))
        }
        function F(n, t, e) {
            ++u,
            i += (n - i) / u,
            a += (t - a) / u,
            c += (e - c) / u
        }
        function U() {
            I.point = G
        }
        function G(n, t) {
            n *= O;
            var e = _(t *= O);
            g = e * _(n),
            E = e * P(n),
            m = P(t),
            I.point = q,
            F(g, E, m)
        }
        function q(n, t) {
            n *= O;
            var e = _(t *= O)
              , r = e * _(n)
              , u = e * P(n)
              , i = P(t)
              , a = b(N((a = E * i - m * u) * a + (a = m * r - g * i) * a + (a = g * u - E * r) * a), g * r + E * u + m * i);
            o += a,
            l += a * (g + (g = r)),
            f += a * (E + (E = u)),
            s += a * (m + (m = i)),
            F(g, E, m)
        }
        function A() {
            I.point = z
        }
        function B() {
            I.point = Q
        }
        function J() {
            V(d, y),
            I.point = z
        }
        function Q(n, t) {
            d = n,
            y = t,
            n *= O,
            t *= O,
            I.point = V;
            var e = _(t);
            g = e * _(n),
            F(g, E = e * P(n), m = P(t))
        }
        function V(n, t) {
            n *= O;
            var e = _(t *= O)
              , r = e * _(n)
              , u = e * P(n)
              , i = P(t)
              , a = E * i - m * u
              , c = m * r - g * i
              , d = g * u - E * r
              , y = C(a, c, d)
              , S = R(y)
              , w = y && -S / y;
            p.add(w * a),
            v.add(w * c),
            h.add(w * d),
            o += S,
            l += S * (g + (g = r)),
            f += S * (E + (E = u)),
            s += S * (m + (m = i)),
            F(g, E, m)
        }
        function Z(n) {
            u = o = i = a = c = l = f = s = 0,
            p = new r,
            v = new r,
            h = new r,
            t = n,
            e = I,
            t && L.hasOwnProperty(t.type) ? L[t.type](t, e) : j(t, e);
            var t, e, d = +p, y = +v, g = +h, E = C(d, y, g);
            return E < 1e-12 && (d = l,
            y = f,
            g = s,
            o < 1e-6 && (d = i,
            y = a,
            g = c),
            (E = C(d, y, g)) < 1e-12) ? [NaN, NaN] : [b(y, d) * M, R(g / E) * M]
        }
    },
    4519: function(n, t, e) {
        "use strict";
        e.d(t, {
            Q: function() {
                return i
            }
        });
        var r = e(67294);
        e(73935);
        var u = e(1410)
          , o = e(45243);
        let i = function(n, t) {
            var e, o, i, a;
            let c = null == t ? function(t, e) {
                let u = (0,
                r.useRef)();
                return u.current || (u.current = n(t, e)),
                u
            }
            : function(e, u) {
                let o = (0,
                r.useRef)();
                o.current || (o.current = n(e, u));
                let i = (0,
                r.useRef)(e)
                  , {instance: a} = o.current;
                return (0,
                r.useEffect)(function() {
                    i.current !== e && (t(a, e, i.current),
                    i.current = e)
                }, [a, e, u]),
                o
            }
              , l = function(n) {
                var t, e;
                let o = (0,
                u.mE)()
                  , i = c(function(n, t) {
                    let e = n.pane ?? t.pane;
                    return e ? {
                        ...n,
                        pane: e
                    } : n
                }(n, o), o);
                return function(n, t) {
                    let e = (0,
                    r.useRef)();
                    (0,
                    r.useEffect)(function() {
                        return null != t && n.instance.on(t),
                        e.current = t,
                        function() {
                            null != e.current && n.instance.off(e.current),
                            e.current = null
                        }
                    }, [n, t])
                }(i.current, n.eventHandlers),
                t = i.current,
                (0,
                r.useEffect)(function() {
                    let n = o.layerContainer ?? o.map;
                    return n.addLayer(t.instance),
                    function() {
                        o.layerContainer?.removeLayer(t.instance),
                        o.map.removeLayer(t.instance)
                    }
                }, [o, t]),
                function(n, t) {
                    let e = (0,
                    r.useRef)();
                    (0,
                    r.useEffect)(function() {
                        if (t.pathOptions !== e.current) {
                            let r = t.pathOptions ?? {};
                            n.instance.setStyle(r),
                            e.current = r
                        }
                    }, [n, t])
                }(i.current, n),
                i
            };
            return (0,
            r.forwardRef)(function(n, t) {
                let {instance: e, context: o} = l(n).current;
                return (0,
                r.useImperativeHandle)(t, ()=>e),
                null == n.children ? null : r.createElement(u.UO, {
                    value: o
                }, n.children)
            })
        }(function({data: n, ...t}, e) {
            var r, i;
            let a = new o.GeoJSON(n,t);
            return i = (0,
            u.sj)(e, {
                overlayContainer: a
            }),
            Object.freeze({
                instance: a,
                context: i,
                container: void 0
            })
        }, function(n, t, e) {
            t.style !== e.style && (null == t.style ? n.resetStyle() : n.setStyle(t.style))
        })
    },
    5715: function(n, t, e) {
        "use strict";
        e.d(t, {
            h: function() {
                return a
            }
        });
        var r = e(1410)
          , u = e(45243)
          , o = e(67294);
        function i() {
            return (i = Object.assign || function(n) {
                for (var t = 1; t < arguments.length; t++) {
                    var e = arguments[t];
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            ).apply(this, arguments)
        }
        let a = (0,
        o.forwardRef)(function({bounds: n, boundsOptions: t, center: e, children: a, className: c, id: l, placeholder: f, style: s, whenReady: p, zoom: v, ...h}, d) {
            let[y] = (0,
            o.useState)({
                className: c,
                id: l,
                style: s
            })
              , [g,E] = (0,
            o.useState)(null);
            (0,
            o.useImperativeHandle)(d, ()=>g?.map ?? null, [g]);
            let m = (0,
            o.useCallback)(o=>{
                if (null !== o && null === g) {
                    let i = new u.Map(o,h);
                    null != e && null != v ? i.setView(e, v) : null != n && i.fitBounds(n, t),
                    null != p && i.whenReady(p),
                    E((0,
                    r.Hb)(i))
                }
            }
            , []);
            (0,
            o.useEffect)(()=>()=>{
                g?.map.remove()
            }
            , [g]);
            let S = g ? o.createElement(r.UO, {
                value: g
            }, a) : f ?? null;
            return o.createElement("div", i({}, y, {
                ref: m
            }), S)
        })
    }
}]);
    