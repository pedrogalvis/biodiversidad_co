(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[443], {
    94470: function(e) {
        "use strict";
        var t = Object.prototype.hasOwnProperty
          , n = Object.prototype.toString
          , r = Object.defineProperty
          , o = Object.getOwnPropertyDescriptor
          , i = function(e) {
            return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === n.call(e)
        }
          , l = function(e) {
            if (!e || "[object Object]" !== n.call(e))
                return !1;
            var r, o = t.call(e, "constructor"), i = e.constructor && e.constructor.prototype && t.call(e.constructor.prototype, "isPrototypeOf");
            if (e.constructor && !o && !i)
                return !1;
            for (r in e)
                ;
            return void 0 === r || t.call(e, r)
        }
          , a = function(e, t) {
            r && "__proto__" === t.name ? r(e, t.name, {
                enumerable: !0,
                configurable: !0,
                value: t.newValue,
                writable: !0
            }) : e[t.name] = t.newValue
        }
          , u = function(e, n) {
            if ("__proto__" === n) {
                if (!t.call(e, n))
                    return;
                if (o)
                    return o(e, n).value
            }
            return e[n]
        };
        e.exports = function e() {
            var t, n, r, o, s, c, f = arguments[0], p = 1, d = arguments.length, h = !1;
            for ("boolean" == typeof f && (h = f,
            f = arguments[1] || {},
            p = 2),
            (null == f || "object" != typeof f && "function" != typeof f) && (f = {}); p < d; ++p)
                if (t = arguments[p],
                null != t)
                    for (n in t)
                        r = u(f, n),
                        f !== (o = u(t, n)) && (h && o && (l(o) || (s = i(o))) ? (s ? (s = !1,
                        c = r && i(r) ? r : []) : c = r && l(r) ? r : {},
                        a(f, {
                            name: n,
                            newValue: e(h, c, o)
                        })) : void 0 !== o && a(f, {
                            name: n,
                            newValue: o
                        }));
            return f
        }
    },
    18139: function(e) {
        var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g
          , n = /\n/g
          , r = /^\s*/
          , o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/
          , i = /^:\s*/
          , l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/
          , a = /^[;\s]*/
          , u = /^\s+|\s+$/g;
        function s(e) {
            return e ? e.replace(u, "") : ""
        }
        e.exports = function(e, u) {
            if ("string" != typeof e)
                throw TypeError("First argument must be a string");
            if (!e)
                return [];
            u = u || {};
            var c = 1
              , f = 1;
            function p(e) {
                var t = e.match(n);
                t && (c += t.length);
                var r = e.lastIndexOf("\n");
                f = ~r ? e.length - r : f + e.length
            }
            function d() {
                var e = {
                    line: c,
                    column: f
                };
                return function(t) {
                    return t.position = new h(e),
                    b(),
                    t
                }
            }
            function h(e) {
                this.start = e,
                this.end = {
                    line: c,
                    column: f
                },
                this.source = u.source
            }
            h.prototype.content = e;
            var m = [];
            function g(t) {
                var n = Error(u.source + ":" + c + ":" + f + ": " + t);
                if (n.reason = t,
                n.filename = u.source,
                n.line = c,
                n.column = f,
                n.source = e,
                u.silent)
                    m.push(n);
                else
                    throw n
            }
            function y(t) {
                var n = t.exec(e);
                if (n) {
                    var r = n[0];
                    return p(r),
                    e = e.slice(r.length),
                    n
                }
            }
            function b() {
                y(r)
            }
            function v(e) {
                var t;
                for (e = e || []; t = x(); )
                    !1 !== t && e.push(t);
                return e
            }
            function x() {
                var t = d();
                if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
                    for (var n = 2; "" != e.charAt(n) && ("*" != e.charAt(n) || "/" != e.charAt(n + 1)); )
                        ++n;
                    if (n += 2,
                    "" === e.charAt(n - 1))
                        return g("End of comment missing");
                    var r = e.slice(2, n - 2);
                    return f += 2,
                    p(r),
                    e = e.slice(n),
                    f += 2,
                    t({
                        type: "comment",
                        comment: r
                    })
                }
            }
            function k() {
                var e = d()
                  , n = y(o);
                if (n) {
                    if (x(),
                    !y(i))
                        return g("property missing ':'");
                    var r = y(l)
                      , u = e({
                        type: "declaration",
                        property: s(n[0].replace(t, "")),
                        value: r ? s(r[0].replace(t, "")) : ""
                    });
                    return y(a),
                    u
                }
            }
            return b(),
            function() {
                var e, t = [];
                for (v(t); e = k(); )
                    !1 !== e && (t.push(e),
                    v(t));
                return t
            }()
        }
    },
    48738: function(e) {
        /*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
        e.exports = function(e) {
            return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
    },
    92703: function(e, t, n) {
        "use strict";
        var r = n(50414);
        function o() {}
        function i() {}
        i.resetWarningCache = o,
        e.exports = function() {
            function e(e, t, n, o, i, l) {
                if (l !== r) {
                    var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw a.name = "Invariant Violation",
                    a
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: o
            };
            return n.PropTypes = n,
            n
        }
    },
    45697: function(e, t, n) {
        e.exports = n(92703)()
    },
    50414: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    69921: function(e, t) {
        "use strict";
        /**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var n, r = Symbol.for("react.element"), o = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen");
        function y(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                case r:
                    switch (e = e.type) {
                    case i:
                    case a:
                    case l:
                    case p:
                    case d:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case c:
                        case s:
                        case f:
                        case m:
                        case h:
                        case u:
                            return e;
                        default:
                            return t
                        }
                    }
                case o:
                    return t
                }
            }
        }
        n = Symbol.for("react.module.reference"),
        t.ContextConsumer = s,
        t.ContextProvider = u,
        t.Element = r,
        t.ForwardRef = f,
        t.Fragment = i,
        t.Lazy = m,
        t.Memo = h,
        t.Portal = o,
        t.Profiler = a,
        t.StrictMode = l,
        t.Suspense = p,
        t.SuspenseList = d,
        t.isAsyncMode = function() {
            return !1
        }
        ,
        t.isConcurrentMode = function() {
            return !1
        }
        ,
        t.isContextConsumer = function(e) {
            return y(e) === s
        }
        ,
        t.isContextProvider = function(e) {
            return y(e) === u
        }
        ,
        t.isElement = function(e) {
            return "object" == typeof e && null !== e && e.$$typeof === r
        }
        ,
        t.isForwardRef = function(e) {
            return y(e) === f
        }
        ,
        t.isFragment = function(e) {
            return y(e) === i
        }
        ,
        t.isLazy = function(e) {
            return y(e) === m
        }
        ,
        t.isMemo = function(e) {
            return y(e) === h
        }
        ,
        t.isPortal = function(e) {
            return y(e) === o
        }
        ,
        t.isProfiler = function(e) {
            return y(e) === a
        }
        ,
        t.isStrictMode = function(e) {
            return y(e) === l
        }
        ,
        t.isSuspense = function(e) {
            return y(e) === p
        }
        ,
        t.isSuspenseList = function(e) {
            return y(e) === d
        }
        ,
        t.isValidElementType = function(e) {
            return "string" == typeof e || "function" == typeof e || e === i || e === a || e === l || e === p || e === d || e === g || "object" == typeof e && null !== e && (e.$$typeof === m || e.$$typeof === h || e.$$typeof === u || e.$$typeof === s || e.$$typeof === f || e.$$typeof === n || void 0 !== e.getModuleId)
        }
        ,
        t.typeOf = y
    },
    59864: function(e, t, n) {
        "use strict";
        e.exports = n(69921)
    },
    38735: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return rp
            }
        });
        var r, o, i, l, a, u, s, c, f = n(67294), p = n(45697), d = n.n(p), h = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto), m = new Uint8Array(16);
        function g() {
            if (!h)
                throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return h(m)
        }
        for (var y = [], b = 0; b < 256; ++b)
            y[b] = (b + 256).toString(16).substr(1);
        var v = function(e, t) {
            var n = t || 0;
            return [y[e[n++]], y[e[n++]], y[e[n++]], y[e[n++]], "-", y[e[n++]], y[e[n++]], "-", y[e[n++]], y[e[n++]], "-", y[e[n++]], y[e[n++]], "-", y[e[n++]], y[e[n++]], y[e[n++]], y[e[n++]], y[e[n++]], y[e[n++]]].join("")
        }
          , x = function(e, t, n) {
            var r = t && n || 0;
            "string" == typeof e && (t = "binary" === e ? Array(16) : null,
            e = null);
            var o = (e = e || {}).random || (e.rng || g)();
            if (o[6] = 15 & o[6] | 64,
            o[8] = 63 & o[8] | 128,
            t)
                for (var i = 0; i < 16; ++i)
                    t[r + i] = o[i];
            return t || v(o)
        };
        function k(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? k(Object(n), !0).forEach(function(t) {
                    E(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function E(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function C() {
            return (C = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function T(e) {
            return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function A(e, t) {
            return (A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function O(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var L = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {}
          , P = function(e) {
            return e && e.Math == Math && e
        }
          , F = P("object" == typeof globalThis && globalThis) || P("object" == typeof window && window) || P("object" == typeof self && self) || P("object" == typeof L && L) || function() {
            return this
        }() || Function("return this")()
          , D = {}
          , I = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
          , z = !I(function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })
          , R = !I(function() {
            var e = (function() {}
            ).bind();
            return "function" != typeof e || e.hasOwnProperty("prototype")
        })
          , j = Function.prototype.call
          , _ = R ? j.bind(j) : function() {
            return j.apply(j, arguments)
        }
          , M = {}
          , B = {}.propertyIsEnumerable
          , H = Object.getOwnPropertyDescriptor
          , N = H && !B.call({
            1: 2
        }, 1);
        M.f = N ? function(e) {
            var t = H(this, e);
            return !!t && t.enumerable
        }
        : B;
        var U = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
          , V = Function.prototype
          , W = V.call
          , q = R && V.bind.bind(W, W)
          , $ = function(e) {
            return R ? q(e) : function() {
                return W.apply(e, arguments)
            }
        }
          , Y = $({}.toString)
          , X = $("".slice)
          , G = function(e) {
            return X(Y(e), 8, -1)
        }
          , Q = function(e) {
            if ("Function" === G(e))
                return $(e)
        }
          , K = Object
          , Z = Q("".split)
          , J = I(function() {
            return !K("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return "String" == G(e) ? Z(e, "") : K(e)
        }
        : K
          , ee = function(e) {
            return null == e
        }
          , et = TypeError
          , en = function(e) {
            if (ee(e))
                throw et("Can't call method on " + e);
            return e
        }
          , er = function(e) {
            return J(en(e))
        }
          , eo = "object" == typeof document && document.all
          , ei = {
            all: eo,
            IS_HTMLDDA: void 0 === eo && void 0 !== eo
        }
          , el = ei.all
          , ea = ei.IS_HTMLDDA ? function(e) {
            return "function" == typeof e || e === el
        }
        : function(e) {
            return "function" == typeof e
        }
          , eu = ei.all
          , es = ei.IS_HTMLDDA ? function(e) {
            return "object" == typeof e ? null !== e : ea(e) || e === eu
        }
        : function(e) {
            return "object" == typeof e ? null !== e : ea(e)
        }
          , ec = function(e, t) {
            var n;
            return arguments.length < 2 ? ea(n = F[e]) ? n : void 0 : F[e] && F[e][t]
        }
          , ef = Q({}.isPrototypeOf)
          , ep = ec("navigator", "userAgent") || ""
          , ed = F.process
          , eh = F.Deno
          , em = ed && ed.versions || eh && eh.version
          , eg = em && em.v8;
        eg && (o = (r = eg.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
        !o && ep && (!(r = ep.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = ep.match(/Chrome\/(\d+)/)) && (o = +r[1]);
        var ey = o
          , eb = !!Object.getOwnPropertySymbols && !I(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && ey && ey < 41
        })
          , ev = eb && !Symbol.sham && "symbol" == typeof Symbol.iterator
          , ex = Object
          , ek = ev ? function(e) {
            return "symbol" == typeof e
        }
        : function(e) {
            var t = ec("Symbol");
            return ea(t) && ef(t.prototype, ex(e))
        }
          , ew = String
          , eS = function(e) {
            try {
                return ew(e)
            } catch (t) {
                return "Object"
            }
        }
          , eE = TypeError
          , eC = function(e) {
            if (ea(e))
                return e;
            throw eE(eS(e) + " is not a function")
        }
          , eT = function(e, t) {
            var n = e[t];
            return ee(n) ? void 0 : eC(n)
        }
          , eA = TypeError
          , eO = function(e, t) {
            var n, r;
            if ("string" === t && ea(n = e.toString) && !es(r = _(n, e)) || ea(n = e.valueOf) && !es(r = _(n, e)) || "string" !== t && ea(n = e.toString) && !es(r = _(n, e)))
                return r;
            throw eA("Can't convert object to primitive value")
        }
          , eL = {
            exports: {}
        }
          , eP = F
          , eF = Object.defineProperty
          , eD = function(e, t) {
            try {
                eF(eP, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch (n) {
                eP[e] = t
            }
            return t
        }
          , eI = "__core-js_shared__"
          , ez = F[eI] || eD(eI, {})
          , eR = ez;
        (eL.exports = function(e, t) {
            return eR[e] || (eR[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.25.5",
            mode: "global",
            copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",
            source: "https://github.com/zloirock/core-js"
        });
        var ej, e_ = Object, eM = function(e) {
            return e_(en(e))
        }, eB = Q({}.hasOwnProperty), eH = Object.hasOwn || function(e, t) {
            return eB(eM(e), t)
        }
        , eN = 0, eU = Math.random(), eV = Q(1..toString), eW = function(e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + eV(++eN + eU, 36)
        }, eq = (0,
        eL.exports)("wks"), e$ = F.Symbol, eY = e$ && e$.for, eX = ev ? e$ : e$ && e$.withoutSetter || eW, eG = function(e) {
            if (!eH(eq, e) || !(eb || "string" == typeof eq[e])) {
                var t = "Symbol." + e;
                eb && eH(e$, e) ? eq[e] = e$[e] : ev && eY ? eq[e] = eY(t) : eq[e] = eX(t)
            }
            return eq[e]
        }, eQ = TypeError, eK = eG("toPrimitive"), eZ = function(e, t) {
            if (!es(e) || ek(e))
                return e;
            var n, r = eT(e, eK);
            if (r) {
                if (void 0 === t && (t = "default"),
                n = _(r, e, t),
                !es(n) || ek(n))
                    return n;
                throw eQ("Can't convert object to primitive value")
            }
            return void 0 === t && (t = "number"),
            eO(e, t)
        }, eJ = function(e) {
            var t = eZ(e, "string");
            return ek(t) ? t : t + ""
        }, e0 = F.document, e1 = es(e0) && es(e0.createElement), e2 = function(e) {
            return e1 ? e0.createElement(e) : {}
        }, e4 = !z && !I(function() {
            return 7 != Object.defineProperty(e2("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }), e3 = Object.getOwnPropertyDescriptor;
        D.f = z ? e3 : function(e, t) {
            if (e = er(e),
            t = eJ(t),
            e4)
                try {
                    return e3(e, t)
                } catch (n) {}
            if (eH(e, t))
                return U(!_(M.f, e, t), e[t])
        }
        ;
        var e6 = {}
          , e5 = z && I(function() {
            return 42 != Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype
        })
          , e9 = String
          , e7 = TypeError
          , e8 = function(e) {
            if (es(e))
                return e;
            throw e7(e9(e) + " is not an object")
        }
          , te = TypeError
          , tt = Object.defineProperty
          , tn = Object.getOwnPropertyDescriptor
          , tr = "enumerable"
          , to = "configurable"
          , ti = "writable";
        e6.f = z ? e5 ? function(e, t, n) {
            if (e8(e),
            t = eJ(t),
            e8(n),
            "function" == typeof e && "prototype" === t && "value"in n && ti in n && !n[ti]) {
                var r = tn(e, t);
                r && r[ti] && (e[t] = n.value,
                n = {
                    configurable: to in n ? n[to] : r[to],
                    enumerable: tr in n ? n[tr] : r[tr],
                    writable: !1
                })
            }
            return tt(e, t, n)
        }
        : tt : function(e, t, n) {
            if (e8(e),
            t = eJ(t),
            e8(n),
            e4)
                try {
                    return tt(e, t, n)
                } catch (r) {}
            if ("get"in n || "set"in n)
                throw te("Accessors not supported");
            return "value"in n && (e[t] = n.value),
            e
        }
        ;
        var tl, ta = z ? function(e, t, n) {
            return e6.f(e, t, U(1, n))
        }
        : function(e, t, n) {
            return e[t] = n,
            e
        }
        , tu = {
            exports: {}
        }, ts = Function.prototype, tc = z && Object.getOwnPropertyDescriptor, tf = eH(ts, "name") && (!z || z && tc(ts, "name").configurable), tp = ez, td = Q(Function.toString);
        ea(tp.inspectSource) || (tp.inspectSource = function(e) {
            return td(e)
        }
        );
        var th, tm = tp.inspectSource, tg = F.WeakMap, ty = ea(tg) && /native code/.test(String(tg)), tb = (0,
        eL.exports)("keys"), tv = function(e) {
            return tb[e] || (tb[e] = eW(e))
        }, tx = {}, tk = ez, tw = tx, tS = "Object already initialized", tE = F.TypeError, tC = F.WeakMap, tT = function(e) {
            return a(e) ? l(e) : i(e, {})
        }, tA = function(e) {
            return function(t) {
                var n;
                if (!es(t) || (n = l(t)).type !== e)
                    throw tE("Incompatible receiver, " + e + " required");
                return n
            }
        };
        if (ty || tk.state) {
            var tO = tk.state || (tk.state = new tC);
            tO.get = tO.get,
            tO.has = tO.has,
            tO.set = tO.set,
            i = function(e, t) {
                if (tO.has(e))
                    throw tE(tS);
                return t.facade = e,
                tO.set(e, t),
                t
            }
            ,
            l = function(e) {
                return tO.get(e) || {}
            }
            ,
            a = function(e) {
                return tO.has(e)
            }
        } else {
            var tL = tv("state");
            tw[tL] = !0,
            i = function(e, t) {
                if (eH(e, tL))
                    throw tE(tS);
                return t.facade = e,
                ta(e, tL, t),
                t
            }
            ,
            l = function(e) {
                return eH(e, tL) ? e[tL] : {}
            }
            ,
            a = function(e) {
                return eH(e, tL)
            }
        }
        var tP = {
            set: i,
            get: l,
            has: a,
            enforce: tT,
            getterFor: tA
        }
          , tF = tP.enforce
          , tD = tP.get
          , tI = Object.defineProperty
          , tz = z && !I(function() {
            return 8 !== tI(function() {}, "length", {
                value: 8
            }).length
        })
          , tR = String(String).split("String")
          , tj = tu.exports = function(e, t, n) {
            "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            n && n.getter && (t = "get " + t),
            n && n.setter && (t = "set " + t),
            (!eH(e, "name") || tf && e.name !== t) && (z ? tI(e, "name", {
                value: t,
                configurable: !0
            }) : e.name = t),
            tz && n && eH(n, "arity") && e.length !== n.arity && tI(e, "length", {
                value: n.arity
            });
            try {
                n && eH(n, "constructor") && n.constructor ? z && tI(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch (r) {}
            var o = tF(e);
            return eH(o, "source") || (o.source = tR.join("string" == typeof t ? t : "")),
            e
        }
        ;
        Function.prototype.toString = tj(function() {
            return ea(this) && tD(this).source || tm(this)
        }, "toString");
        var t_, tM = tu.exports, tB = function(e, t, n, r) {
            r || (r = {});
            var o = r.enumerable
              , i = void 0 !== r.name ? r.name : t;
            if (ea(n) && tM(n, i, r),
            r.global)
                o ? e[t] = n : eD(t, n);
            else {
                try {
                    r.unsafe ? e[t] && (o = !0) : delete e[t]
                } catch (l) {}
                o ? e[t] = n : e6.f(e, t, {
                    value: n,
                    enumerable: !1,
                    configurable: !r.nonConfigurable,
                    writable: !r.nonWritable
                })
            }
            return e
        }, tH = {}, tN = Math.ceil, tU = Math.floor, tV = Math.trunc || function(e) {
            var t = +e;
            return (t > 0 ? tU : tN)(t)
        }
        , tW = function(e) {
            var t = +e;
            return t != t || 0 === t ? 0 : tV(t)
        }, tq = Math.max, t$ = Math.min, tY = function(e, t) {
            var n = tW(e);
            return n < 0 ? tq(n + t, 0) : t$(n, t)
        }, tX = Math.min, tG = function(e) {
            var t;
            return t = e.length,
            t > 0 ? tX(tW(t), 9007199254740991) : 0
        }, tQ = function(e) {
            return function(t, n, r) {
                var o, i = er(t), l = tG(i), a = tY(r, l);
                if (e && n != n) {
                    for (; l > a; )
                        if ((o = i[a++]) != o)
                            return !0
                } else
                    for (; l > a; a++)
                        if ((e || a in i) && i[a] === n)
                            return e || a || 0;
                return !e && -1
            }
        }, tK = {
            includes: tQ(!0),
            indexOf: tQ(!1)
        }.indexOf, tZ = Q([].push), tJ = function(e, t) {
            var n, r = er(e), o = 0, i = [];
            for (n in r)
                !eH(tx, n) && eH(r, n) && tZ(i, n);
            for (; t.length > o; )
                eH(r, n = t[o++]) && (~tK(i, n) || tZ(i, n));
            return i
        }, t0 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], t1 = t0.concat("length", "prototype");
        tH.f = Object.getOwnPropertyNames || function(e) {
            return tJ(e, t1)
        }
        ;
        var t2 = {};
        t2.f = Object.getOwnPropertySymbols;
        var t4 = Q([].concat)
          , t3 = ec("Reflect", "ownKeys") || function(e) {
            var t = tH.f(e8(e))
              , n = t2.f;
            return n ? t4(t, n(e)) : t
        }
          , t6 = function(e, t, n) {
            for (var r = t3(t), o = e6.f, i = D.f, l = 0; l < r.length; l++) {
                var a = r[l];
                eH(e, a) || n && eH(n, a) || o(e, a, i(t, a))
            }
        }
          , t5 = /#|\.prototype\./
          , t9 = function(e, t) {
            var n = t8[t7(e)];
            return n == nt || n != ne && (ea(t) ? I(t) : !!t)
        }
          , t7 = t9.normalize = function(e) {
            return String(e).replace(t5, ".").toLowerCase()
        }
          , t8 = t9.data = {}
          , ne = t9.NATIVE = "N"
          , nt = t9.POLYFILL = "P"
          , nn = D.f
          , nr = Q(Q.bind)
          , no = Array.isArray || function(e) {
            return "Array" == G(e)
        }
          , ni = eG("toStringTag")
          , nl = {};
        nl[ni] = "z";
        var na = "[object z]" === String(nl)
          , nu = eG("toStringTag")
          , ns = Object
          , nc = "Arguments" == G(function() {
            return arguments
        }())
          , nf = function(e, t) {
            try {
                return e[t]
            } catch (n) {}
        }
          , np = na ? G : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = nf(t = ns(e), nu)) ? n : nc ? G(t) : "Object" == (r = G(t)) && ea(t.callee) ? "Arguments" : r
        }
          , nd = function() {}
          , nh = []
          , nm = ec("Reflect", "construct")
          , ng = /^\s*(?:class|function)\b/
          , ny = Q(ng.exec)
          , nb = !ng.exec(nd)
          , nv = function(e) {
            if (!ea(e))
                return !1;
            try {
                return nm(nd, nh, e),
                !0
            } catch (t) {
                return !1
            }
        }
          , nx = function(e) {
            if (!ea(e))
                return !1;
            switch (np(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
            }
            try {
                return nb || !!ny(ng, tm(e))
            } catch (t) {
                return !0
            }
        };
        nx.sham = !0;
        var nk = !nm || I(function() {
            var e;
            return nv(nv.call) || !nv(Object) || !nv(function() {
                e = !0
            }) || e
        }) ? nx : nv
          , nw = eG("species")
          , nS = Array
          , nE = function(e) {
            var t;
            return no(e) && (nk(t = e.constructor) && (t === nS || no(t.prototype)) ? t = void 0 : es(t) && null === (t = t[nw]) && (t = void 0)),
            void 0 === t ? nS : t
        }
          , nC = function(e, t) {
            return new (nE(e))(0 === t ? 0 : t)
        }
          , nT = Q([].push)
          , nA = function(e) {
            var t = 1 == e
              , n = 2 == e
              , r = 3 == e
              , o = 4 == e
              , i = 6 == e
              , l = 7 == e
              , a = 5 == e || i;
            return function(u, s, c, f) {
                for (var p, d, h, m, g = eM(u), y = J(g), b = (p = s,
                d = c,
                eC(p),
                void 0 === d ? p : R ? nr(p, d) : function() {
                    return p.apply(d, arguments)
                }
                ), v = tG(y), x = 0, k = f || nC, w = t ? k(u, v) : n || l ? k(u, 0) : void 0; v > x; x++)
                    if ((a || x in y) && (m = b(h = y[x], x, g),
                    e)) {
                        if (t)
                            w[x] = m;
                        else if (m)
                            switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return h;
                            case 6:
                                return x;
                            case 2:
                                nT(w, h)
                            }
                        else
                            switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                nT(w, h)
                            }
                    }
                return i ? -1 : r || o ? o : w
            }
        }
          , nO = {
            forEach: nA(0),
            map: nA(1),
            filter: nA(2),
            some: nA(3),
            every: nA(4),
            find: nA(5),
            findIndex: nA(6),
            filterReject: nA(7)
        }
          , nL = {}
          , nP = Object.keys || function(e) {
            return tJ(e, t0)
        }
        ;
        nL.f = z && !e5 ? Object.defineProperties : function(e, t) {
            e8(e);
            for (var n, r = er(t), o = nP(t), i = o.length, l = 0; i > l; )
                e6.f(e, n = o[l++], r[n]);
            return e
        }
        ;
        var nF = ec("document", "documentElement")
          , nD = tx
          , nI = "prototype"
          , nz = "script"
          , nR = tv("IE_PROTO")
          , nj = function() {}
          , n_ = function(e) {
            return "<" + nz + ">" + e + "</" + nz + ">"
        }
          , nM = function(e) {
            e.write(n_("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }
          , nB = function() {
            var e, t = e2("iframe");
            return t.style.display = "none",
            nF.appendChild(t),
            t.src = String("java" + nz + ":"),
            (e = t.contentWindow.document).open(),
            e.write(n_("document.F=Object")),
            e.close(),
            e.F
        }
          , nH = function() {
            try {
                u = new ActiveXObject("htmlfile")
            } catch (e) {}
            nH = "undefined" != typeof document ? document.domain && u ? nM(u) : nB() : nM(u);
            for (var t = t0.length; t--; )
                delete nH[nI][t0[t]];
            return nH()
        };
        nD[nR] = !0;
        var nN = Object.create || function(e, t) {
            var n;
            return null !== e ? (nj[nI] = e8(e),
            n = new nj,
            nj[nI] = null,
            n[nR] = e) : n = nH(),
            void 0 === t ? n : nL.f(n, t)
        }
          , nU = e6.f
          , nV = eG("unscopables")
          , nW = Array.prototype;
        void 0 == nW[nV] && nU(nW, nV, {
            configurable: !0,
            value: nN(null)
        });
        var nq, n$ = nO.find, nY = "find", nX = !0;
        nY in [] && [, ][nY](function() {
            nX = !1
        }),
        function(e, t) {
            var n, r, o, i, l, a, u = e.target, s = e.global, c = e.stat;
            if (r = s ? F : c ? F[u] || eD(u, {}) : (F[u] || {}).prototype)
                for (o in t) {
                    if (l = t[o],
                    i = e.dontCallGetSet ? (a = nn(r, o)) && a.value : r[o],
                    !t9(s ? o : u + (c ? "." : "#") + o, e.forced) && void 0 !== i) {
                        if (typeof l == typeof i)
                            continue;
                        t6(l, i)
                    }
                    (e.sham || i && i.sham) && ta(l, "sham", !0),
                    tB(r, o, l, e)
                }
        }({
            target: "Array",
            proto: !0,
            forced: nX
        }, {
            find: function(e) {
                return n$(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        nq = nY,
        nW[nV][nq] = !0;
        var nG = {
            GLOBAL: {
                HIDE: "__react_tooltip_hide_event",
                REBUILD: "__react_tooltip_rebuild_event",
                SHOW: "__react_tooltip_show_event"
            }
        }
          , nQ = function(e, t) {
            var n;
            "function" == typeof window.CustomEvent ? n = new window.CustomEvent(e,{
                detail: t
            }) : (n = document.createEvent("Event")).initEvent(e, !1, !0, t),
            window.dispatchEvent(n)
        }
          , nK = function(e, t) {
            var n = this.state.show
              , r = this.props.id
              , o = this.isCapture(t.currentTarget)
              , i = t.currentTarget.getAttribute("currentItem");
            o || t.stopPropagation(),
            n && "true" === i ? e || this.hideTooltip(t) : (t.currentTarget.setAttribute("currentItem", "true"),
            nZ(t.currentTarget, this.getTargetArray(r)),
            this.showTooltip(t))
        }
          , nZ = function(e, t) {
            for (var n = 0; n < t.length; n++)
                e !== t[n] ? t[n].setAttribute("currentItem", "false") : t[n].setAttribute("currentItem", "true")
        }
          , nJ = {
            id: "9b69f92e-d3fe-498b-b1b4-c5e63a51b0cf",
            set: function(e, t, n) {
                this.id in e ? e[this.id][t] = n : Object.defineProperty(e, this.id, {
                    configurable: !0,
                    value: E({}, t, n)
                })
            },
            get: function(e, t) {
                var n = e[this.id];
                if (void 0 !== n)
                    return n[t]
            }
        }
          , n0 = function(e) {
            var t = {};
            for (var n in e)
                "function" == typeof e[n] ? t[n] = e[n].bind(e) : t[n] = e[n];
            return t
        }
          , n1 = function(e, t, n) {
            for (var r, o, i = t.respectEffect, l = t.customEvent, a = this.props.id, u = null, s = n.target; null === u && null !== s; )
                o = s,
                u = s.getAttribute("data-tip") || null,
                r = s.getAttribute("data-for") || null,
                s = s.parentElement;
            if (s = o || n.target,
            (!this.isCustomEvent(s) || void 0 !== l && l) && null != u && (!(void 0 !== i && i) || "float" === this.getEffect(s)) && (null == a && null == r || r === a)) {
                var c = n0(n);
                c.currentTarget = s,
                e(c)
            }
        }
          , n2 = function(e, t) {
            var n = {};
            return e.forEach(function(e) {
                var r = e.getAttribute(t);
                r && r.split(" ").forEach(function(e) {
                    return n[e] = !0
                })
            }),
            n
        }
          , n4 = function() {
            return document.getElementsByTagName("body")[0]
        };
        function n3(e, t, n, r, o, i, l) {
            var a, u = n6(n), s = u.width, c = u.height, f = n6(t), p = f.width, d = f.height, h = n5(e, t, i), m = h.mouseX, g = h.mouseY, y = n9(i, p, d, s, c), b = n7(l), v = b.extraOffsetX, x = b.extraOffsetY, k = window.innerWidth, w = window.innerHeight, S = n8(n), E = S.parentTop, C = S.parentLeft, T = function(e) {
                return m + y[e].l + v
            }, A = function(e) {
                return g + y[e].t + x
            }, L = function(e) {
                var t, n, r, o, i, l;
                return 0 > T(e) || (i = e,
                m + y[i].r + v > k) || 0 > A(e) || (l = e,
                g + y[l].b + x > w)
            }, P = function(e) {
                return !L(e)
            }, F = {
                top: P("top"),
                bottom: P("bottom"),
                left: P("left"),
                right: P("right")
            }, D = function() {
                var e, t = function(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                            if (e) {
                                if ("string" == typeof e)
                                    return O(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name),
                                "Map" === n || "Set" === n)
                                    return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                    return O(e, t)
                            }
                        }(e))) {
                            n && (e = n);
                            var r = 0
                              , o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: o
                            }
                        }
                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, l = !0, a = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return l = e.done,
                            e
                        },
                        e: function(e) {
                            a = !0,
                            i = e
                        },
                        f: function() {
                            try {
                                l || null == n.return || n.return()
                            } finally {
                                if (a)
                                    throw i
                            }
                        }
                    }
                }(o.split(",").concat(r, ["top", "bottom", "left", "right"]));
                try {
                    for (t.s(); !(e = t.n()).done; ) {
                        var n = e.value;
                        if (F[n])
                            return n
                    }
                } catch (i) {
                    t.e(i)
                } finally {
                    t.f()
                }
                return r
            }(), I = !1;
            return (D && D !== r && (I = !0,
            a = D),
            I) ? {
                isNewState: !0,
                newState: {
                    place: a
                }
            } : {
                isNewState: !1,
                position: {
                    left: parseInt(T(r) - C, 10),
                    top: parseInt(A(r) - E, 10)
                }
            }
        }
        var n6 = function(e) {
            var t = e.getBoundingClientRect()
              , n = t.height
              , r = t.width;
            return {
                height: parseInt(n, 10),
                width: parseInt(r, 10)
            }
        }
          , n5 = function(e, t, n) {
            var r = t.getBoundingClientRect()
              , o = r.top
              , i = r.left
              , l = n6(t)
              , a = l.width
              , u = l.height;
            return "float" === n ? {
                mouseX: e.clientX,
                mouseY: e.clientY
            } : {
                mouseX: i + a / 2,
                mouseY: o + u / 2
            }
        }
          , n9 = function(e, t, n, r, o) {
            var i, l, a, u;
            return "float" === e ? (i = {
                l: -(r / 2),
                r: r / 2,
                t: -(o + 3 + 2),
                b: -3
            },
            a = {
                l: -(r / 2),
                r: r / 2,
                t: 15,
                b: o + 3 + 2 + 12
            },
            u = {
                l: -(r + 3 + 2),
                r: -3,
                t: -(o / 2),
                b: o / 2
            },
            l = {
                l: 3,
                r: r + 3 + 2,
                t: -(o / 2),
                b: o / 2
            }) : "solid" === e && (i = {
                l: -(r / 2),
                r: r / 2,
                t: -(n / 2 + o + 2),
                b: -(n / 2)
            },
            a = {
                l: -(r / 2),
                r: r / 2,
                t: n / 2,
                b: n / 2 + o + 2
            },
            u = {
                l: -(r + t / 2 + 2),
                r: -(t / 2),
                t: -(o / 2),
                b: o / 2
            },
            l = {
                l: t / 2,
                r: r + t / 2 + 2,
                t: -(o / 2),
                b: o / 2
            }),
            {
                top: i,
                bottom: a,
                left: u,
                right: l
            }
        }
          , n7 = function(e) {
            var t = 0
              , n = 0;
            for (var r in "[object String]" === Object.prototype.toString.apply(e) && (e = JSON.parse(e.toString().replace(/'/g, '"'))),
            e)
                "top" === r ? n -= parseInt(e[r], 10) : "bottom" === r ? n += parseInt(e[r], 10) : "left" === r ? t -= parseInt(e[r], 10) : "right" === r && (t += parseInt(e[r], 10));
            return {
                extraOffsetX: t,
                extraOffsetY: n
            }
        }
          , n8 = function(e) {
            for (var t = e; t; ) {
                var n = window.getComputedStyle(t);
                if ("none" !== n.getPropertyValue("transform") || "transform" === n.getPropertyValue("will-change"))
                    break;
                t = t.parentElement
            }
            var r = t && t.getBoundingClientRect().top || 0
              , o = t && t.getBoundingClientRect().left || 0;
            return {
                parentTop: r,
                parentLeft: o
            }
        };
        function re(e, t, n, r) {
            if (t)
                return t;
            if (null != n)
                return n;
            if (null === n)
                return null;
            var o = /<br\s*\/?>/;
            return r && "false" !== r && o.test(e) ? e.split(o).map(function(e, t) {
                return f.createElement("span", {
                    key: t,
                    className: "multi-line"
                }, e)
            }) : e
        }
        function rt(e) {
            var t = {};
            return Object.keys(e).filter(function(e) {
                return /(^aria-\w+$|^role$)/.test(e)
            }).forEach(function(n) {
                t[n] = e[n]
            }),
            t
        }
        function rn(e) {
            var t = e.length;
            return e.hasOwnProperty ? Array.prototype.slice.call(e) : Array(t).fill().map(function(t) {
                return e[t]
            })
        }
        var rr, ro, ri, rl, ra, ru, rs, rc = {
            dark: {
                text: "#fff",
                background: "#222",
                border: "transparent",
                arrow: "#222"
            },
            success: {
                text: "#fff",
                background: "#8DC572",
                border: "transparent",
                arrow: "#8DC572"
            },
            warning: {
                text: "#fff",
                background: "#F0AD4E",
                border: "transparent",
                arrow: "#F0AD4E"
            },
            error: {
                text: "#fff",
                background: "#BE6464",
                border: "transparent",
                arrow: "#BE6464"
            },
            info: {
                text: "#fff",
                background: "#337AB7",
                border: "transparent",
                arrow: "#337AB7"
            },
            light: {
                text: "#222",
                background: "#fff",
                border: "transparent",
                arrow: "#fff"
            }
        }, rf = {
            tooltip: 3,
            arrow: 0
        }, rp = (c = function(e) {
            (function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && A(e, t)
            }
            )(a, e);
            var t, n, r, o, i, l = (n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }(),
            function() {
                var e, t = T(a);
                if (n) {
                    var r = T(this).constructor;
                    e = Reflect.construct(t, arguments, r)
                } else
                    e = t.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" == typeof t || "function" == typeof t))
                        return t;
                    if (void 0 !== t)
                        throw TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e)
                            throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, e)
            }
            );
            function a(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function")
                }(this, a),
                (t = l.call(this, e)).state = {
                    uuid: e.uuid || "t" + x(),
                    place: e.place || "top",
                    desiredPlace: e.place || "top",
                    type: e.type || "dark",
                    effect: e.effect || "float",
                    show: !1,
                    border: !1,
                    borderClass: "border",
                    customColors: {},
                    customRadius: {},
                    offset: {},
                    padding: e.padding,
                    extraClass: "",
                    html: !1,
                    delayHide: 0,
                    delayShow: 0,
                    event: e.event || null,
                    eventOff: e.eventOff || null,
                    currentEvent: null,
                    currentTarget: null,
                    ariaProps: rt(e),
                    isEmptyTip: !1,
                    disable: !1,
                    possibleCustomEvents: e.possibleCustomEvents || "",
                    possibleCustomEventsOff: e.possibleCustomEventsOff || "",
                    originTooltip: null,
                    isMultiline: !1
                },
                t.bind(["showTooltip", "updateTooltip", "hideTooltip", "hideTooltipOnScroll", "getTooltipContent", "globalRebuild", "globalShow", "globalHide", "onWindowResize", "mouseOnToolTip"]),
                t.mount = !0,
                t.delayShowLoop = null,
                t.delayHideLoop = null,
                t.delayReshow = null,
                t.intervalUpdateContent = null,
                t
            }
            return o = [{
                key: "bind",
                value: function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        t[e] = t[e].bind(t)
                    })
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this.props;
                    e.insecure;
                    var t = e.resizeHide
                      , n = e.disableInternalStyle;
                    this.mount = !0,
                    this.bindListener(),
                    this.bindWindowEvents(t),
                    n || this.injectStyles()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.mount = !1,
                    this.clearTimer(),
                    this.unbindListener(),
                    this.removeScrollListener(this.state.currentTarget),
                    this.unbindWindowEvents()
                }
            }, {
                key: "injectStyles",
                value: function() {
                    var e, t = this.tooltipRef;
                    if (t) {
                        for (var n = t.parentNode; n.parentNode; )
                            n = n.parentNode;
                        switch (n.constructor.name) {
                        case "Document":
                        case "HTMLDocument":
                        case void 0:
                            e = n.head;
                            break;
                        default:
                            e = n
                        }
                        if (!e.querySelector("style[data-react-tooltip]")) {
                            var r = document.createElement("style");
                            r.textContent = '.__react_component_tooltip {\n  border-radius: 3px;\n  display: inline-block;\n  font-size: 13px;\n  left: -999em;\n  opacity: 0;\n  position: fixed;\n  pointer-events: none;\n  transition: opacity 0.3s ease-out;\n  top: -999em;\n  visibility: hidden;\n  z-index: 999;\n}\n.__react_component_tooltip.allow_hover, .__react_component_tooltip.allow_click {\n  pointer-events: auto;\n}\n.__react_component_tooltip::before, .__react_component_tooltip::after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n}\n.__react_component_tooltip.show {\n  opacity: 0.9;\n  margin-top: 0;\n  margin-left: 0;\n  visibility: visible;\n}\n.__react_component_tooltip.place-top::before {\n  bottom: 0;\n  left: 50%;\n  margin-left: -11px;\n}\n.__react_component_tooltip.place-bottom::before {\n  top: 0;\n  left: 50%;\n  margin-left: -11px;\n}\n.__react_component_tooltip.place-left::before {\n  right: 0;\n  top: 50%;\n  margin-top: -9px;\n}\n.__react_component_tooltip.place-right::before {\n  left: 0;\n  top: 50%;\n  margin-top: -9px;\n}\n.__react_component_tooltip .multi-line {\n  display: block;\n  padding: 2px 0;\n  text-align: center;\n}',
                            r.setAttribute("data-react-tooltip", "true"),
                            e.appendChild(r)
                        }
                    }
                }
            }, {
                key: "mouseOnToolTip",
                value: function() {
                    return !!this.state.show && !!this.tooltipRef && (this.tooltipRef.matches || (this.tooltipRef.msMatchesSelector ? this.tooltipRef.matches = this.tooltipRef.msMatchesSelector : this.tooltipRef.matches = this.tooltipRef.mozMatchesSelector),
                    this.tooltipRef.matches(":hover"))
                }
            }, {
                key: "getTargetArray",
                value: function(e) {
                    var t, n = [];
                    if (e) {
                        var r = e.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
                        t = '[data-tip][data-for="'.concat(r, '"]')
                    } else
                        t = "[data-tip]:not([data-for])";
                    return rn(document.getElementsByTagName("*")).filter(function(e) {
                        return e.shadowRoot
                    }).forEach(function(e) {
                        n = n.concat(rn(e.shadowRoot.querySelectorAll(t)))
                    }),
                    n.concat(rn(document.querySelectorAll(t)))
                }
            }, {
                key: "bindListener",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.id
                      , r = t.globalEventOff
                      , o = t.isCapture
                      , i = this.getTargetArray(n);
                    i.forEach(function(t) {
                        null === t.getAttribute("currentItem") && t.setAttribute("currentItem", "false"),
                        e.unbindBasicListener(t),
                        e.isCustomEvent(t) && e.customUnbindListener(t)
                    }),
                    this.isBodyMode() ? this.bindBodyListener(i) : i.forEach(function(t) {
                        var n = e.isCapture(t)
                          , r = e.getEffect(t);
                        if (e.isCustomEvent(t)) {
                            e.customBindListener(t);
                            return
                        }
                        t.addEventListener("mouseenter", e.showTooltip, n),
                        t.addEventListener("focus", e.showTooltip, n),
                        "float" === r && t.addEventListener("mousemove", e.updateTooltip, n),
                        t.addEventListener("mouseleave", e.hideTooltip, n),
                        t.addEventListener("blur", e.hideTooltip, n)
                    }),
                    r && (window.removeEventListener(r, this.hideTooltip),
                    window.addEventListener(r, this.hideTooltip, o)),
                    this.bindRemovalTracker()
                }
            }, {
                key: "unbindListener",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.id
                      , r = t.globalEventOff;
                    this.isBodyMode() ? this.unbindBodyListener() : this.getTargetArray(n).forEach(function(t) {
                        e.unbindBasicListener(t),
                        e.isCustomEvent(t) && e.customUnbindListener(t)
                    }),
                    r && window.removeEventListener(r, this.hideTooltip),
                    this.unbindRemovalTracker()
                }
            }, {
                key: "unbindBasicListener",
                value: function(e) {
                    var t = this.isCapture(e);
                    e.removeEventListener("mouseenter", this.showTooltip, t),
                    e.removeEventListener("mousemove", this.updateTooltip, t),
                    e.removeEventListener("mouseleave", this.hideTooltip, t)
                }
            }, {
                key: "getTooltipContent",
                value: function() {
                    var e, t = this.props, n = t.getContent, r = t.children;
                    return n && (e = Array.isArray(n) ? n[0] && n[0](this.state.originTooltip) : n(this.state.originTooltip)),
                    re(this.state.originTooltip, r, e, this.state.isMultiline)
                }
            }, {
                key: "isEmptyTip",
                value: function(e) {
                    return "string" == typeof e && "" === e || null === e
                }
            }, {
                key: "showTooltip",
                value: function(e, t) {
                    if (this.tooltipRef) {
                        if (!t || this.getTargetArray(this.props.id).some(function(t) {
                            return t === e.currentTarget
                        })) {
                            var n = this.props
                              , r = n.multiline
                              , o = n.getContent
                              , i = e.currentTarget.getAttribute("data-tip")
                              , l = e.currentTarget.getAttribute("data-multiline") || r || !1
                              , a = e instanceof window.FocusEvent || t
                              , u = !0;
                            e.currentTarget.getAttribute("data-scroll-hide") ? u = "true" === e.currentTarget.getAttribute("data-scroll-hide") : null != this.props.scrollHide && (u = this.props.scrollHide),
                            e && e.currentTarget && e.currentTarget.setAttribute && e.currentTarget.setAttribute("aria-describedby", this.props.id || this.state.uuid);
                            var s = e.currentTarget.getAttribute("data-place") || this.props.place || "top"
                              , c = a && "solid" || this.getEffect(e.currentTarget)
                              , f = e.currentTarget.getAttribute("data-offset") || this.props.offset || {}
                              , p = n3(e, e.currentTarget, this.tooltipRef, s.split(",")[0], s, c, f);
                            p.position && this.props.overridePosition && (p.position = this.props.overridePosition(p.position, e, e.currentTarget, this.tooltipRef, s, s, c, f));
                            var d = p.isNewState ? p.newState.place : s.split(",")[0];
                            this.clearTimer();
                            var h = e.currentTarget
                              , m = this.state.show ? h.getAttribute("data-delay-update") || this.props.delayUpdate : 0
                              , g = this
                              , y = function() {
                                g.setState({
                                    originTooltip: i,
                                    isMultiline: l,
                                    desiredPlace: s,
                                    place: d,
                                    type: h.getAttribute("data-type") || g.props.type || "dark",
                                    customColors: {
                                        text: h.getAttribute("data-text-color") || g.props.textColor || null,
                                        background: h.getAttribute("data-background-color") || g.props.backgroundColor || null,
                                        border: h.getAttribute("data-border-color") || g.props.borderColor || null,
                                        arrow: h.getAttribute("data-arrow-color") || g.props.arrowColor || null
                                    },
                                    customRadius: {
                                        tooltip: h.getAttribute("data-tooltip-radius") || g.props.tooltipRadius || "3",
                                        arrow: h.getAttribute("data-arrow-radius") || g.props.arrowRadius || "0"
                                    },
                                    effect: c,
                                    offset: f,
                                    padding: h.getAttribute("data-padding") || g.props.padding,
                                    html: (h.getAttribute("data-html") ? "true" === h.getAttribute("data-html") : g.props.html) || !1,
                                    delayShow: h.getAttribute("data-delay-show") || g.props.delayShow || 0,
                                    delayHide: h.getAttribute("data-delay-hide") || g.props.delayHide || 0,
                                    delayUpdate: h.getAttribute("data-delay-update") || g.props.delayUpdate || 0,
                                    border: (h.getAttribute("data-border") ? "true" === h.getAttribute("data-border") : g.props.border) || !1,
                                    borderClass: h.getAttribute("data-border-class") || g.props.borderClass || "border",
                                    extraClass: h.getAttribute("data-class") || g.props.class || g.props.className || "",
                                    disable: (h.getAttribute("data-tip-disable") ? "true" === h.getAttribute("data-tip-disable") : g.props.disable) || !1,
                                    currentTarget: h
                                }, function() {
                                    u && g.addScrollListener(g.state.currentTarget),
                                    g.updateTooltip(e),
                                    o && Array.isArray(o) && (g.intervalUpdateContent = setInterval(function() {
                                        if (g.mount) {
                                            var e = re(i, "", g.props.getContent[0](), l)
                                              , t = g.isEmptyTip(e);
                                            g.setState({
                                                isEmptyTip: t
                                            }),
                                            g.updatePosition()
                                        }
                                    }, o[1]))
                                })
                            };
                            m ? this.delayReshow = setTimeout(y, m) : y()
                        }
                    }
                }
            }, {
                key: "updateTooltip",
                value: function(e) {
                    var t = this
                      , n = this.state
                      , r = n.delayShow
                      , o = n.disable
                      , i = this.props
                      , l = i.afterShow
                      , a = i.disable
                      , u = this.getTooltipContent()
                      , s = e.currentTarget || e.target;
                    if (!(this.mouseOnToolTip() || this.isEmptyTip(u) || o || a)) {
                        var c = this.state.show ? 0 : parseInt(r, 10)
                          , f = function() {
                            if (Array.isArray(u) && u.length > 0 || u) {
                                var n = !t.state.show;
                                t.setState({
                                    currentEvent: e,
                                    currentTarget: s,
                                    show: !0
                                }, function() {
                                    t.updatePosition(function() {
                                        n && l && l(e)
                                    })
                                })
                            }
                        };
                        this.delayShowLoop && clearTimeout(this.delayShowLoop),
                        c ? this.delayShowLoop = setTimeout(f, c) : (this.delayShowLoop = null,
                        f())
                    }
                }
            }, {
                key: "listenForTooltipExit",
                value: function() {
                    this.state.show && this.tooltipRef && this.tooltipRef.addEventListener("mouseleave", this.hideTooltip)
                }
            }, {
                key: "removeListenerForTooltipExit",
                value: function() {
                    this.state.show && this.tooltipRef && this.tooltipRef.removeEventListener("mouseleave", this.hideTooltip)
                }
            }, {
                key: "hideTooltip",
                value: function(e, t) {
                    var n = this
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        isScroll: !1
                    }
                      , o = this.state.disable
                      , i = r.isScroll ? 0 : this.state.delayHide
                      , l = this.props
                      , a = l.afterHide
                      , u = l.disable
                      , s = this.getTooltipContent();
                    if (this.mount && !this.isEmptyTip(s) && !o && !u) {
                        if (t && (!this.getTargetArray(this.props.id).some(function(t) {
                            return t === e.currentTarget
                        }) || !this.state.show))
                            return;
                        e && e.currentTarget && e.currentTarget.removeAttribute && e.currentTarget.removeAttribute("aria-describedby");
                        var c = function() {
                            var t = n.state.show;
                            if (n.mouseOnToolTip()) {
                                n.listenForTooltipExit();
                                return
                            }
                            n.removeListenerForTooltipExit(),
                            n.setState({
                                show: !1
                            }, function() {
                                n.removeScrollListener(n.state.currentTarget),
                                t && a && a(e)
                            })
                        };
                        this.clearTimer(),
                        i ? this.delayHideLoop = setTimeout(c, parseInt(i, 10)) : c()
                    }
                }
            }, {
                key: "hideTooltipOnScroll",
                value: function(e, t) {
                    this.hideTooltip(e, t, {
                        isScroll: !0
                    })
                }
            }, {
                key: "addScrollListener",
                value: function(e) {
                    var t = this.isCapture(e);
                    window.addEventListener("scroll", this.hideTooltipOnScroll, t)
                }
            }, {
                key: "removeScrollListener",
                value: function(e) {
                    var t = this.isCapture(e);
                    window.removeEventListener("scroll", this.hideTooltipOnScroll, t)
                }
            }, {
                key: "updatePosition",
                value: function(e) {
                    var t = this
                      , n = this.state
                      , r = n.currentEvent
                      , o = n.currentTarget
                      , i = n.place
                      , l = n.desiredPlace
                      , a = n.effect
                      , u = n.offset
                      , s = this.tooltipRef
                      , c = n3(r, o, s, i, l, a, u);
                    if (c.position && this.props.overridePosition && (c.position = this.props.overridePosition(c.position, r, o, s, i, l, a, u)),
                    c.isNewState)
                        return this.setState(c.newState, function() {
                            t.updatePosition(e)
                        });
                    e && "function" == typeof e && e(),
                    s.style.left = c.position.left + "px",
                    s.style.top = c.position.top + "px"
                }
            }, {
                key: "clearTimer",
                value: function() {
                    this.delayShowLoop && (clearTimeout(this.delayShowLoop),
                    this.delayShowLoop = null),
                    this.delayHideLoop && (clearTimeout(this.delayHideLoop),
                    this.delayHideLoop = null),
                    this.delayReshow && (clearTimeout(this.delayReshow),
                    this.delayReshow = null),
                    this.intervalUpdateContent && (clearInterval(this.intervalUpdateContent),
                    this.intervalUpdateContent = null)
                }
            }, {
                key: "hasCustomColors",
                value: function() {
                    var e = this;
                    return Boolean(Object.keys(this.state.customColors).find(function(t) {
                        return "border" !== t && e.state.customColors[t]
                    }) || this.state.border && this.state.customColors.border)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n, r, o, i, l = this, u = this.state, s = u.extraClass, c = u.html, p = u.ariaProps, d = u.disable, h = u.uuid, m = this.getTooltipContent(), g = this.isEmptyTip(m), y = this.props.disableInternalStyle ? "" : (e = this.state.uuid,
                    t = this.state.customColors,
                    n = this.state.type,
                    r = this.state.border,
                    o = this.state.padding,
                    i = this.state.customRadius,
                    function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "8px 21px"
                          , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : rf
                          , o = t.text
                          , i = t.background
                          , l = t.border
                          , a = t.arrow
                          , u = r.arrow
                          , s = r.tooltip;
                        return "\n  	.".concat(e, " {\n	    color: ").concat(o, ";\n	    background: ").concat(i, ";\n	    border: 1px solid ").concat(l, ";\n	    border-radius: ").concat(s, "px;\n	    padding: ").concat(n, ";\n  	}\n\n  	.").concat(e, ".place-top {\n        margin-top: -10px;\n    }\n    .").concat(e, '.place-top::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: 2;\n        width: 20px;\n        height: 12px;\n    }\n    .').concat(e, '.place-top::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ').concat(u, "px;\n        border: 1px solid ").concat(l, ";\n        background-color: ").concat(a, ";\n        z-index: -2;\n        bottom: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(135deg);\n    }\n\n    .").concat(e, ".place-bottom {\n        margin-top: 10px;\n    }\n    .").concat(e, '.place-bottom::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 18px;\n        height: 10px;\n    }\n    .').concat(e, '.place-bottom::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ').concat(u, "px;\n        border: 1px solid ").concat(l, ";\n        background-color: ").concat(a, ";\n        z-index: -2;\n        top: -6px;\n        left: 50%;\n        margin-left: -6px;\n        transform: rotate(45deg);\n    }\n\n    .").concat(e, ".place-left {\n        margin-left: -10px;\n    }\n    .").concat(e, '.place-left::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .').concat(e, '.place-left::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ').concat(u, "px;\n        border: 1px solid ").concat(l, ";\n        background-color: ").concat(a, ";\n        z-index: -2;\n        right: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(45deg);\n    }\n\n    .").concat(e, ".place-right {\n        margin-left: 10px;\n    }\n    .").concat(e, '.place-right::before {\n        content: "";\n        background-color: inherit;\n        position: absolute;\n        z-index: -1;\n        width: 10px;\n        height: 18px;\n    }\n    .').concat(e, '.place-right::after {\n        content: "";\n        position: absolute;\n        width: 10px;\n        height: 10px;\n        border-top-right-radius: ').concat(u, "px;\n        border: 1px solid ").concat(l, ";\n        background-color: ").concat(a, ";\n        z-index: -2;\n        left: -6px;\n        top: 50%;\n        margin-top: -6px;\n        transform: rotate(-135deg);\n    }\n  ")
                    }(e, function(e, t, n) {
                        var r, o = e.text, i = e.background, l = e.border, a = e.arrow ? e.arrow : e.background, u = rc[t] ? w({}, rc[t]) : void 0;
                        return o && (u.text = o),
                        i && (u.background = i),
                        n && (l ? u.border = l : u.border = "light" === t ? "black" : "white"),
                        a && (u.arrow = a),
                        u
                    }(t, n, r), o, i)), b = "__react_component_tooltip" + " ".concat(this.state.uuid) + (!this.state.show || d || g ? "" : " show") + (this.state.border ? " " + this.state.borderClass : "") + " place-".concat(this.state.place) + " type-".concat(this.hasCustomColors() ? "custom" : this.state.type) + (this.props.delayUpdate ? " allow_hover" : "") + (this.props.clickable ? " allow_click" : ""), v = this.props.wrapper;
                    0 > a.supportedWrappers.indexOf(v) && (v = a.defaultProps.wrapper);
                    var x = [b, s].filter(Boolean).join(" ");
                    if (!c)
                        return f.createElement(v, C({
                            className: "".concat(x),
                            id: this.props.id || h
                        }, p, {
                            ref: function(e) {
                                return l.tooltipRef = e
                            },
                            "data-id": "tooltip"
                        }), y && f.createElement("style", {
                            dangerouslySetInnerHTML: {
                                __html: y
                            },
                            "aria-hidden": "true"
                        }), m);
                    var k = "".concat(m).concat(y ? '\n<style aria-hidden="true">'.concat(y, "</style>") : "");
                    return f.createElement(v, C({
                        className: "".concat(x),
                        id: this.props.id || h,
                        ref: function(e) {
                            return l.tooltipRef = e
                        }
                    }, p, {
                        "data-id": "tooltip",
                        dangerouslySetInnerHTML: {
                            __html: k
                        }
                    }))
                }
            }],
            i = [{
                key: "propTypes",
                get: function() {
                    return {
                        uuid: d().string,
                        children: d().any,
                        place: d().string,
                        type: d().string,
                        effect: d().string,
                        offset: d().object,
                        padding: d().string,
                        multiline: d().bool,
                        border: d().bool,
                        borderClass: d().string,
                        textColor: d().string,
                        backgroundColor: d().string,
                        borderColor: d().string,
                        arrowColor: d().string,
                        arrowRadius: d().string,
                        tooltipRadius: d().string,
                        insecure: d().bool,
                        class: d().string,
                        className: d().string,
                        id: d().string,
                        html: d().bool,
                        delayHide: d().number,
                        delayUpdate: d().number,
                        delayShow: d().number,
                        event: d().string,
                        eventOff: d().string,
                        isCapture: d().bool,
                        globalEventOff: d().string,
                        getContent: d().any,
                        afterShow: d().func,
                        afterHide: d().func,
                        overridePosition: d().func,
                        disable: d().bool,
                        scrollHide: d().bool,
                        resizeHide: d().bool,
                        wrapper: d().string,
                        bodyMode: d().bool,
                        possibleCustomEvents: d().string,
                        possibleCustomEventsOff: d().string,
                        clickable: d().bool,
                        disableInternalStyle: d().bool
                    }
                }
            }, {
                key: "getDerivedStateFromProps",
                value: function(e, t) {
                    var n = t.ariaProps
                      , r = rt(e);
                    return Object.keys(r).some(function(e) {
                        return r[e] !== n[e]
                    }) ? w(w({}, t), {}, {
                        ariaProps: r
                    }) : null
                }
            }],
            o && S(a.prototype, o),
            i && S(a, i),
            Object.defineProperty(a, "prototype", {
                writable: !1
            }),
            a
        }(f.Component),
        E(c, "defaultProps", {
            insecure: !0,
            resizeHide: !0,
            wrapper: "div",
            clickable: !1
        }),
        E(c, "supportedWrappers", ["div", "span"]),
        E(c, "displayName", "ReactTooltip"),
        (rr = s = c).prototype.bindRemovalTracker = function() {
            var e = this
              , t = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            if (null != t) {
                var n = new t(function(t) {
                    for (var n = 0; n < t.length; n++)
                        for (var r = t[n], o = 0; o < r.removedNodes.length; o++)
                            if (r.removedNodes[o] === e.state.currentTarget) {
                                e.hideTooltip();
                                return
                            }
                }
                );
                n.observe(window.document, {
                    childList: !0,
                    subtree: !0
                }),
                this.removalTracker = n
            }
        }
        ,
        rr.prototype.unbindRemovalTracker = function() {
            this.removalTracker && (this.removalTracker.disconnect(),
            this.removalTracker = null)
        }
        ,
        (ro = s).prototype.isBodyMode = function() {
            return !!this.props.bodyMode
        }
        ,
        ro.prototype.bindBodyListener = function(e) {
            var t = this
              , n = this.state
              , r = n.event
              , o = n.eventOff
              , i = n.possibleCustomEvents
              , l = n.possibleCustomEventsOff
              , a = n4()
              , u = n2(e, "data-event")
              , s = n2(e, "data-event-off");
            null != r && (u[r] = !0),
            null != o && (s[o] = !0),
            i.split(" ").forEach(function(e) {
                return u[e] = !0
            }),
            l.split(" ").forEach(function(e) {
                return s[e] = !0
            }),
            this.unbindBodyListener(a);
            var c = this.bodyModeListeners = {};
            for (var f in null == r && (c.mouseover = n1.bind(this, this.showTooltip, {}),
            c.mousemove = n1.bind(this, this.updateTooltip, {
                respectEffect: !0
            }),
            c.mouseout = n1.bind(this, this.hideTooltip, {})),
            u)
                c[f] = n1.bind(this, function(e) {
                    var n = e.currentTarget.getAttribute("data-event-off") || o;
                    nK.call(t, n, e)
                }, {
                    customEvent: !0
                });
            for (var p in s)
                c[p] = n1.bind(this, this.hideTooltip, {
                    customEvent: !0
                });
            for (var d in c)
                a.addEventListener(d, c[d])
        }
        ,
        ro.prototype.unbindBodyListener = function(e) {
            e = e || n4();
            var t = this.bodyModeListeners;
            for (var n in t)
                e.removeEventListener(n, t[n])
        }
        ,
        (ri = s).prototype.getEffect = function(e) {
            return e.getAttribute("data-effect") || this.props.effect || "float"
        }
        ,
        (rl = s).prototype.isCapture = function(e) {
            return e && "true" === e.getAttribute("data-iscapture") || this.props.isCapture || !1
        }
        ,
        (ra = s).prototype.isCustomEvent = function(e) {
            return this.state.event || !!e.getAttribute("data-event")
        }
        ,
        ra.prototype.customBindListener = function(e) {
            var t = this
              , n = this.state
              , r = n.event
              , o = n.eventOff
              , i = e.getAttribute("data-event") || r
              , l = e.getAttribute("data-event-off") || o;
            i.split(" ").forEach(function(n) {
                e.removeEventListener(n, nJ.get(e, n));
                var r = nK.bind(t, l);
                nJ.set(e, n, r),
                e.addEventListener(n, r, !1)
            }),
            l && l.split(" ").forEach(function(n) {
                e.removeEventListener(n, t.hideTooltip),
                e.addEventListener(n, t.hideTooltip, !1)
            })
        }
        ,
        ra.prototype.customUnbindListener = function(e) {
            var t = this.state
              , n = t.event
              , r = t.eventOff
              , o = n || e.getAttribute("data-event")
              , i = r || e.getAttribute("data-event-off");
            e.removeEventListener(o, nJ.get(e, n)),
            i && e.removeEventListener(i, this.hideTooltip)
        }
        ,
        (ru = s).prototype.bindWindowEvents = function(e) {
            window.removeEventListener(nG.GLOBAL.HIDE, this.globalHide),
            window.addEventListener(nG.GLOBAL.HIDE, this.globalHide, !1),
            window.removeEventListener(nG.GLOBAL.REBUILD, this.globalRebuild),
            window.addEventListener(nG.GLOBAL.REBUILD, this.globalRebuild, !1),
            window.removeEventListener(nG.GLOBAL.SHOW, this.globalShow),
            window.addEventListener(nG.GLOBAL.SHOW, this.globalShow, !1),
            e && (window.removeEventListener("resize", this.onWindowResize),
            window.addEventListener("resize", this.onWindowResize, !1))
        }
        ,
        ru.prototype.unbindWindowEvents = function() {
            window.removeEventListener(nG.GLOBAL.HIDE, this.globalHide),
            window.removeEventListener(nG.GLOBAL.REBUILD, this.globalRebuild),
            window.removeEventListener(nG.GLOBAL.SHOW, this.globalShow),
            window.removeEventListener("resize", this.onWindowResize)
        }
        ,
        ru.prototype.onWindowResize = function() {
            this.mount && this.hideTooltip()
        }
        ,
        (rs = s).hide = function(e) {
            nQ(nG.GLOBAL.HIDE, {
                target: e
            })
        }
        ,
        rs.rebuild = function() {
            nQ(nG.GLOBAL.REBUILD)
        }
        ,
        rs.show = function(e) {
            nQ(nG.GLOBAL.SHOW, {
                target: e
            })
        }
        ,
        rs.prototype.globalRebuild = function() {
            this.mount && (this.unbindListener(),
            this.bindListener())
        }
        ,
        rs.prototype.globalShow = function(e) {
            if (this.mount) {
                var t = !!e && !!e.detail && !!e.detail.target;
                this.showTooltip({
                    currentTarget: t && e.detail.target
                }, !0)
            }
        }
        ,
        rs.prototype.globalHide = function(e) {
            if (this.mount) {
                var t = !!e && !!e.detail && !!e.detail.target;
                this.hideTooltip({
                    currentTarget: t && e.detail.target
                }, t)
            }
        }
        ,
        s)
    },
    57848: function(e, t, n) {
        var r = n(18139);
        function o(e, t) {
            var n, o, i, l = null;
            if (!e || "string" != typeof e)
                return l;
            for (var a = r(e), u = "function" == typeof t, s = 0, c = a.length; s < c; s++)
                o = (n = a[s]).property,
                i = n.value,
                u ? t(o, i, n) : i && (l || (l = {}),
                l[o] = i);
            return l
        }
        e.exports = o,
        e.exports.default = o
    },
    25668: function(e, t, n) {
        "use strict";
        function r(e) {
            let t = []
              , n = String(e || "")
              , r = n.indexOf(",")
              , o = 0
              , i = !1;
            for (; !i; ) {
                -1 === r && (r = n.length,
                i = !0);
                let l = n.slice(o, r).trim();
                (l || !i) && t.push(l),
                o = r + 1,
                r = n.indexOf(",", o)
            }
            return t
        }
        function o(e, t) {
            let n = t || {}
              , r = "" === e[e.length - 1] ? [...e, ""] : e;
            return r.join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " ")).trim()
        }
        n.d(t, {
            P: function() {
                return o
            },
            Q: function() {
                return r
            }
        })
    },
    44301: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return o
            }
        });
        let r = document.createElement("i");
        function o(e) {
            let t = "&" + e + ";";
            r.innerHTML = t;
            let n = r.textContent;
            return (59 !== n.charCodeAt(n.length - 1) || "semi" === e) && n !== t && n
        }
    },
    23402: function(e, t, n) {
        "use strict";
        n.d(t, {
            w: function() {
                return i
            }
        });
        var r = n(42761)
          , o = n(75364);
        let i = {
            tokenize: function(e, t, n) {
                return function(t) {
                    return (0,
                    o.xz)(t) ? (0,
                    r.f)(e, i, "linePrefix")(t) : i(t)
                }
                ;
                function i(e) {
                    return null === e || (0,
                    o.Ch)(e) ? t(e) : n(e)
                }
            },
            partial: !0
        }
    },
    42761: function(e, t, n) {
        "use strict";
        n.d(t, {
            f: function() {
                return o
            }
        });
        var r = n(75364);
        function o(e, t, n, o) {
            let i = o ? o - 1 : Number.POSITIVE_INFINITY
              , l = 0;
            return function(o) {
                return (0,
                r.xz)(o) ? (e.enter(n),
                function o(a) {
                    return (0,
                    r.xz)(a) && l++ < i ? (e.consume(a),
                    o) : (e.exit(n),
                    t(a))
                }(o)) : t(o)
            }
        }
    },
    75364: function(e, t, n) {
        "use strict";
        n.d(t, {
            jv: function() {
                return r
            },
            H$: function() {
                return o
            },
            n9: function() {
                return i
            },
            Av: function() {
                return l
            },
            pY: function() {
                return a
            },
            AF: function() {
                return u
            },
            sR: function() {
                return s
            },
            Ch: function() {
                return c
            },
            z3: function() {
                return f
            },
            xz: function() {
                return p
            },
            Xh: function() {
                return d
            },
            B8: function() {
                return h
            }
        });
        let r = m(/[A-Za-z]/)
          , o = m(/[\dA-Za-z]/)
          , i = m(/[#-'*+\--9=?A-Z^-~]/);
        function l(e) {
            return null !== e && (e < 32 || 127 === e)
        }
        let a = m(/\d/)
          , u = m(/[\dA-Fa-f]/)
          , s = m(/[!-/:-@[-`{-~]/);
        function c(e) {
            return null !== e && e < -2
        }
        function f(e) {
            return null !== e && (e < 0 || 32 === e)
        }
        function p(e) {
            return -2 === e || -1 === e || 32 === e
        }
        let d = m(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/)
          , h = m(/\s/);
        function m(e) {
            return function(t) {
                return null !== t && e.test(String.fromCharCode(t))
            }
        }
    },
    21905: function(e, t, n) {
        "use strict";
        function r(e, t, n, r) {
            let o = e.length, i = 0, l;
            if (t = t < 0 ? -t > o ? 0 : o + t : t > o ? o : t,
            n = n > 0 ? n : 0,
            r.length < 1e4)
                (l = Array.from(r)).unshift(t, n),
                e.splice(...l);
            else
                for (n && e.splice(t, n); i < r.length; )
                    (l = r.slice(i, i + 1e4)).unshift(t, 0),
                    e.splice(...l),
                    i += 1e4,
                    t += 1e4
        }
        function o(e, t) {
            return e.length > 0 ? (r(e, e.length, 0, t),
            e) : t
        }
        n.d(t, {
            V: function() {
                return o
            },
            d: function() {
                return r
            }
        })
    },
    62987: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return o
            }
        });
        var r = n(75364);
        function o(e) {
            return null === e || (0,
            r.z3)(e) || (0,
            r.B8)(e) ? 1 : (0,
            r.Xh)(e) ? 2 : void 0
        }
    },
    4663: function(e, t, n) {
        "use strict";
        n.d(t, {
            W: function() {
                return i
            }
        });
        var r = n(21905);
        let o = {}.hasOwnProperty;
        function i(e) {
            let t = {}
              , n = -1;
            for (; ++n < e.length; )
                l(t, e[n]);
            return t
        }
        function l(e, t) {
            let n;
            for (n in t) {
                let r = o.call(e, n) ? e[n] : void 0, i = r || (e[n] = {}), l = t[n], u;
                if (l)
                    for (u in l) {
                        o.call(i, u) || (i[u] = []);
                        let s = l[u];
                        a(i[u], Array.isArray(s) ? s : s ? [s] : [])
                    }
            }
        }
        function a(e, t) {
            let n = -1
              , o = [];
            for (; ++n < t.length; )
                ("after" === t[n].add ? e : o).push(t[n]);
            (0,
            r.d)(e, 0, 0, o)
        }
    },
    80889: function(e, t, n) {
        "use strict";
        function r(e, t) {
            let n = Number.parseInt(e, t);
            return n < 9 || 11 === n || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (65535 & n) == 65535 || (65535 & n) == 65534 || n > 1114111 ? "�" : String.fromCharCode(n)
        }
        n.d(t, {
            o: function() {
                return r
            }
        })
    },
    47881: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return l
            }
        });
        var r = n(44301)
          , o = n(80889);
        let i = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
        function l(e) {
            return e.replace(i, a)
        }
        function a(e, t, n) {
            if (t)
                return t;
            let i = n.charCodeAt(0);
            if (35 === i) {
                let l = n.charCodeAt(1)
                  , a = 120 === l || 88 === l;
                return (0,
                o.o)(n.slice(a ? 2 : 1), a ? 16 : 10)
            }
            return (0,
            r.T)(n) || e
        }
    },
    11098: function(e, t, n) {
        "use strict";
        function r(e) {
            return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase()
        }
        n.d(t, {
            d: function() {
                return r
            }
        })
    },
    63233: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            let r = []
              , o = -1;
            for (; ++o < e.length; ) {
                let i = e[o].resolveAll;
                i && !r.includes(i) && (t = i(t, n),
                r.push(i))
            }
            return t
        }
        n.d(t, {
            C: function() {
                return r
            }
        })
    },
    91634: function(e, t, n) {
        "use strict";
        n.d(t, {
            dy: function() {
                return b
            },
            YP: function() {
                return v
            }
        });
        class r {
            constructor(e, t, n) {
                this.property = e,
                this.normal = t,
                n && (this.space = n)
            }
        }
        function o(e, t) {
            let n = {}
              , o = {}
              , i = -1;
            for (; ++i < e.length; )
                Object.assign(n, e[i].property),
                Object.assign(o, e[i].normal);
            return new r(n,o,t)
        }
        r.prototype.property = {},
        r.prototype.normal = {},
        r.prototype.space = null;
        var i = n(93859)
          , l = n(75729);
        let a = {}.hasOwnProperty;
        function u(e) {
            let t = {}, n = {}, o;
            for (o in e.properties)
                if (a.call(e.properties, o)) {
                    let u = e.properties[o]
                      , s = new l.I(o,e.transform(e.attributes || {}, o),u,e.space);
                    e.mustUseProperty && e.mustUseProperty.includes(o) && (s.mustUseProperty = !0),
                    t[o] = s,
                    n[(0,
                    i.F)(o)] = o,
                    n[(0,
                    i.F)(s.attribute)] = o
                }
            return new r(t,n,e.space)
        }
        let s = u({
            space: "xlink",
            transform: (e,t)=>"xlink:" + t.slice(5).toLowerCase(),
            properties: {
                xLinkActuate: null,
                xLinkArcRole: null,
                xLinkHref: null,
                xLinkRole: null,
                xLinkShow: null,
                xLinkTitle: null,
                xLinkType: null
            }
        })
          , c = u({
            space: "xml",
            transform: (e,t)=>"xml:" + t.slice(3).toLowerCase(),
            properties: {
                xmlLang: null,
                xmlBase: null,
                xmlSpace: null
            }
        });
        function f(e, t) {
            return t in e ? e[t] : t
        }
        function p(e, t) {
            return f(e, t.toLowerCase())
        }
        let d = u({
            space: "xmlns",
            attributes: {
                xmlnsxlink: "xmlns:xlink"
            },
            transform: p,
            properties: {
                xmlns: null,
                xmlnsXLink: null
            }
        });
        var h = n(47312);
        let m = u({
            transform: (e,t)=>"role" === t ? t : "aria-" + t.slice(4).toLowerCase(),
            properties: {
                ariaActiveDescendant: null,
                ariaAtomic: h.booleanish,
                ariaAutoComplete: null,
                ariaBusy: h.booleanish,
                ariaChecked: h.booleanish,
                ariaColCount: h.number,
                ariaColIndex: h.number,
                ariaColSpan: h.number,
                ariaControls: h.spaceSeparated,
                ariaCurrent: null,
                ariaDescribedBy: h.spaceSeparated,
                ariaDetails: null,
                ariaDisabled: h.booleanish,
                ariaDropEffect: h.spaceSeparated,
                ariaErrorMessage: null,
                ariaExpanded: h.booleanish,
                ariaFlowTo: h.spaceSeparated,
                ariaGrabbed: h.booleanish,
                ariaHasPopup: null,
                ariaHidden: h.booleanish,
                ariaInvalid: null,
                ariaKeyShortcuts: null,
                ariaLabel: null,
                ariaLabelledBy: h.spaceSeparated,
                ariaLevel: h.number,
                ariaLive: null,
                ariaModal: h.booleanish,
                ariaMultiLine: h.booleanish,
                ariaMultiSelectable: h.booleanish,
                ariaOrientation: null,
                ariaOwns: h.spaceSeparated,
                ariaPlaceholder: null,
                ariaPosInSet: h.number,
                ariaPressed: h.booleanish,
                ariaReadOnly: h.booleanish,
                ariaRelevant: null,
                ariaRequired: h.booleanish,
                ariaRoleDescription: h.spaceSeparated,
                ariaRowCount: h.number,
                ariaRowIndex: h.number,
                ariaRowSpan: h.number,
                ariaSelected: h.booleanish,
                ariaSetSize: h.number,
                ariaSort: null,
                ariaValueMax: h.number,
                ariaValueMin: h.number,
                ariaValueNow: h.number,
                ariaValueText: null,
                role: null
            }
        })
          , g = u({
            space: "html",
            attributes: {
                acceptcharset: "accept-charset",
                classname: "class",
                htmlfor: "for",
                httpequiv: "http-equiv"
            },
            transform: p,
            mustUseProperty: ["checked", "multiple", "muted", "selected"],
            properties: {
                abbr: null,
                accept: h.commaSeparated,
                acceptCharset: h.spaceSeparated,
                accessKey: h.spaceSeparated,
                action: null,
                allow: null,
                allowFullScreen: h.boolean,
                allowPaymentRequest: h.boolean,
                allowUserMedia: h.boolean,
                alt: null,
                as: null,
                async: h.boolean,
                autoCapitalize: null,
                autoComplete: h.spaceSeparated,
                autoFocus: h.boolean,
                autoPlay: h.boolean,
                blocking: h.spaceSeparated,
                capture: null,
                charSet: null,
                checked: h.boolean,
                cite: null,
                className: h.spaceSeparated,
                cols: h.number,
                colSpan: null,
                content: null,
                contentEditable: h.booleanish,
                controls: h.boolean,
                controlsList: h.spaceSeparated,
                coords: h.number | h.commaSeparated,
                crossOrigin: null,
                data: null,
                dateTime: null,
                decoding: null,
                default: h.boolean,
                defer: h.boolean,
                dir: null,
                dirName: null,
                disabled: h.boolean,
                download: h.overloadedBoolean,
                draggable: h.booleanish,
                encType: null,
                enterKeyHint: null,
                fetchPriority: null,
                form: null,
                formAction: null,
                formEncType: null,
                formMethod: null,
                formNoValidate: h.boolean,
                formTarget: null,
                headers: h.spaceSeparated,
                height: h.number,
                hidden: h.boolean,
                high: h.number,
                href: null,
                hrefLang: null,
                htmlFor: h.spaceSeparated,
                httpEquiv: h.spaceSeparated,
                id: null,
                imageSizes: null,
                imageSrcSet: null,
                inert: h.boolean,
                inputMode: null,
                integrity: null,
                is: null,
                isMap: h.boolean,
                itemId: null,
                itemProp: h.spaceSeparated,
                itemRef: h.spaceSeparated,
                itemScope: h.boolean,
                itemType: h.spaceSeparated,
                kind: null,
                label: null,
                lang: null,
                language: null,
                list: null,
                loading: null,
                loop: h.boolean,
                low: h.number,
                manifest: null,
                max: null,
                maxLength: h.number,
                media: null,
                method: null,
                min: null,
                minLength: h.number,
                multiple: h.boolean,
                muted: h.boolean,
                name: null,
                nonce: null,
                noModule: h.boolean,
                noValidate: h.boolean,
                onAbort: null,
                onAfterPrint: null,
                onAuxClick: null,
                onBeforeMatch: null,
                onBeforePrint: null,
                onBeforeToggle: null,
                onBeforeUnload: null,
                onBlur: null,
                onCancel: null,
                onCanPlay: null,
                onCanPlayThrough: null,
                onChange: null,
                onClick: null,
                onClose: null,
                onContextLost: null,
                onContextMenu: null,
                onContextRestored: null,
                onCopy: null,
                onCueChange: null,
                onCut: null,
                onDblClick: null,
                onDrag: null,
                onDragEnd: null,
                onDragEnter: null,
                onDragExit: null,
                onDragLeave: null,
                onDragOver: null,
                onDragStart: null,
                onDrop: null,
                onDurationChange: null,
                onEmptied: null,
                onEnded: null,
                onError: null,
                onFocus: null,
                onFormData: null,
                onHashChange: null,
                onInput: null,
                onInvalid: null,
                onKeyDown: null,
                onKeyPress: null,
                onKeyUp: null,
                onLanguageChange: null,
                onLoad: null,
                onLoadedData: null,
                onLoadedMetadata: null,
                onLoadEnd: null,
                onLoadStart: null,
                onMessage: null,
                onMessageError: null,
                onMouseDown: null,
                onMouseEnter: null,
                onMouseLeave: null,
                onMouseMove: null,
                onMouseOut: null,
                onMouseOver: null,
                onMouseUp: null,
                onOffline: null,
                onOnline: null,
                onPageHide: null,
                onPageShow: null,
                onPaste: null,
                onPause: null,
                onPlay: null,
                onPlaying: null,
                onPopState: null,
                onProgress: null,
                onRateChange: null,
                onRejectionHandled: null,
                onReset: null,
                onResize: null,
                onScroll: null,
                onScrollEnd: null,
                onSecurityPolicyViolation: null,
                onSeeked: null,
                onSeeking: null,
                onSelect: null,
                onSlotChange: null,
                onStalled: null,
                onStorage: null,
                onSubmit: null,
                onSuspend: null,
                onTimeUpdate: null,
                onToggle: null,
                onUnhandledRejection: null,
                onUnload: null,
                onVolumeChange: null,
                onWaiting: null,
                onWheel: null,
                open: h.boolean,
                optimum: h.number,
                pattern: null,
                ping: h.spaceSeparated,
                placeholder: null,
                playsInline: h.boolean,
                popover: null,
                popoverTarget: null,
                popoverTargetAction: null,
                poster: null,
                preload: null,
                readOnly: h.boolean,
                referrerPolicy: null,
                rel: h.spaceSeparated,
                required: h.boolean,
                reversed: h.boolean,
                rows: h.number,
                rowSpan: h.number,
                sandbox: h.spaceSeparated,
                scope: null,
                scoped: h.boolean,
                seamless: h.boolean,
                selected: h.boolean,
                shadowRootClonable: h.boolean,
                shadowRootDelegatesFocus: h.boolean,
                shadowRootMode: null,
                shape: null,
                size: h.number,
                sizes: null,
                slot: null,
                span: h.number,
                spellCheck: h.booleanish,
                src: null,
                srcDoc: null,
                srcLang: null,
                srcSet: null,
                start: h.number,
                step: null,
                style: null,
                tabIndex: h.number,
                target: null,
                title: null,
                translate: null,
                type: null,
                typeMustMatch: h.boolean,
                useMap: null,
                value: h.booleanish,
                width: h.number,
                wrap: null,
                writingSuggestions: null,
                align: null,
                aLink: null,
                archive: h.spaceSeparated,
                axis: null,
                background: null,
                bgColor: null,
                border: h.number,
                borderColor: null,
                bottomMargin: h.number,
                cellPadding: null,
                cellSpacing: null,
                char: null,
                charOff: null,
                classId: null,
                clear: null,
                code: null,
                codeBase: null,
                codeType: null,
                color: null,
                compact: h.boolean,
                declare: h.boolean,
                event: null,
                face: null,
                frame: null,
                frameBorder: null,
                hSpace: h.number,
                leftMargin: h.number,
                link: null,
                longDesc: null,
                lowSrc: null,
                marginHeight: h.number,
                marginWidth: h.number,
                noResize: h.boolean,
                noHref: h.boolean,
                noShade: h.boolean,
                noWrap: h.boolean,
                object: null,
                profile: null,
                prompt: null,
                rev: null,
                rightMargin: h.number,
                rules: null,
                scheme: null,
                scrolling: h.booleanish,
                standby: null,
                summary: null,
                text: null,
                topMargin: h.number,
                valueType: null,
                version: null,
                vAlign: null,
                vLink: null,
                vSpace: h.number,
                allowTransparency: null,
                autoCorrect: null,
                autoSave: null,
                disablePictureInPicture: h.boolean,
                disableRemotePlayback: h.boolean,
                prefix: null,
                property: null,
                results: h.number,
                security: null,
                unselectable: null
            }
        })
          , y = u({
            space: "svg",
            attributes: {
                accentHeight: "accent-height",
                alignmentBaseline: "alignment-baseline",
                arabicForm: "arabic-form",
                baselineShift: "baseline-shift",
                capHeight: "cap-height",
                className: "class",
                clipPath: "clip-path",
                clipRule: "clip-rule",
                colorInterpolation: "color-interpolation",
                colorInterpolationFilters: "color-interpolation-filters",
                colorProfile: "color-profile",
                colorRendering: "color-rendering",
                crossOrigin: "crossorigin",
                dataType: "datatype",
                dominantBaseline: "dominant-baseline",
                enableBackground: "enable-background",
                fillOpacity: "fill-opacity",
                fillRule: "fill-rule",
                floodColor: "flood-color",
                floodOpacity: "flood-opacity",
                fontFamily: "font-family",
                fontSize: "font-size",
                fontSizeAdjust: "font-size-adjust",
                fontStretch: "font-stretch",
                fontStyle: "font-style",
                fontVariant: "font-variant",
                fontWeight: "font-weight",
                glyphName: "glyph-name",
                glyphOrientationHorizontal: "glyph-orientation-horizontal",
                glyphOrientationVertical: "glyph-orientation-vertical",
                hrefLang: "hreflang",
                horizAdvX: "horiz-adv-x",
                horizOriginX: "horiz-origin-x",
                horizOriginY: "horiz-origin-y",
                imageRendering: "image-rendering",
                letterSpacing: "letter-spacing",
                lightingColor: "lighting-color",
                markerEnd: "marker-end",
                markerMid: "marker-mid",
                markerStart: "marker-start",
                navDown: "nav-down",
                navDownLeft: "nav-down-left",
                navDownRight: "nav-down-right",
                navLeft: "nav-left",
                navNext: "nav-next",
                navPrev: "nav-prev",
                navRight: "nav-right",
                navUp: "nav-up",
                navUpLeft: "nav-up-left",
                navUpRight: "nav-up-right",
                onAbort: "onabort",
                onActivate: "onactivate",
                onAfterPrint: "onafterprint",
                onBeforePrint: "onbeforeprint",
                onBegin: "onbegin",
                onCancel: "oncancel",
                onCanPlay: "oncanplay",
                onCanPlayThrough: "oncanplaythrough",
                onChange: "onchange",
                onClick: "onclick",
                onClose: "onclose",
                onCopy: "oncopy",
                onCueChange: "oncuechange",
                onCut: "oncut",
                onDblClick: "ondblclick",
                onDrag: "ondrag",
                onDragEnd: "ondragend",
                onDragEnter: "ondragenter",
                onDragExit: "ondragexit",
                onDragLeave: "ondragleave",
                onDragOver: "ondragover",
                onDragStart: "ondragstart",
                onDrop: "ondrop",
                onDurationChange: "ondurationchange",
                onEmptied: "onemptied",
                onEnd: "onend",
                onEnded: "onended",
                onError: "onerror",
                onFocus: "onfocus",
                onFocusIn: "onfocusin",
                onFocusOut: "onfocusout",
                onHashChange: "onhashchange",
                onInput: "oninput",
                onInvalid: "oninvalid",
                onKeyDown: "onkeydown",
                onKeyPress: "onkeypress",
                onKeyUp: "onkeyup",
                onLoad: "onload",
                onLoadedData: "onloadeddata",
                onLoadedMetadata: "onloadedmetadata",
                onLoadStart: "onloadstart",
                onMessage: "onmessage",
                onMouseDown: "onmousedown",
                onMouseEnter: "onmouseenter",
                onMouseLeave: "onmouseleave",
                onMouseMove: "onmousemove",
                onMouseOut: "onmouseout",
                onMouseOver: "onmouseover",
                onMouseUp: "onmouseup",
                onMouseWheel: "onmousewheel",
                onOffline: "onoffline",
                onOnline: "ononline",
                onPageHide: "onpagehide",
                onPageShow: "onpageshow",
                onPaste: "onpaste",
                onPause: "onpause",
                onPlay: "onplay",
                onPlaying: "onplaying",
                onPopState: "onpopstate",
                onProgress: "onprogress",
                onRateChange: "onratechange",
                onRepeat: "onrepeat",
                onReset: "onreset",
                onResize: "onresize",
                onScroll: "onscroll",
                onSeeked: "onseeked",
                onSeeking: "onseeking",
                onSelect: "onselect",
                onShow: "onshow",
                onStalled: "onstalled",
                onStorage: "onstorage",
                onSubmit: "onsubmit",
                onSuspend: "onsuspend",
                onTimeUpdate: "ontimeupdate",
                onToggle: "ontoggle",
                onUnload: "onunload",
                onVolumeChange: "onvolumechange",
                onWaiting: "onwaiting",
                onZoom: "onzoom",
                overlinePosition: "overline-position",
                overlineThickness: "overline-thickness",
                paintOrder: "paint-order",
                panose1: "panose-1",
                pointerEvents: "pointer-events",
                referrerPolicy: "referrerpolicy",
                renderingIntent: "rendering-intent",
                shapeRendering: "shape-rendering",
                stopColor: "stop-color",
                stopOpacity: "stop-opacity",
                strikethroughPosition: "strikethrough-position",
                strikethroughThickness: "strikethrough-thickness",
                strokeDashArray: "stroke-dasharray",
                strokeDashOffset: "stroke-dashoffset",
                strokeLineCap: "stroke-linecap",
                strokeLineJoin: "stroke-linejoin",
                strokeMiterLimit: "stroke-miterlimit",
                strokeOpacity: "stroke-opacity",
                strokeWidth: "stroke-width",
                tabIndex: "tabindex",
                textAnchor: "text-anchor",
                textDecoration: "text-decoration",
                textRendering: "text-rendering",
                transformOrigin: "transform-origin",
                typeOf: "typeof",
                underlinePosition: "underline-position",
                underlineThickness: "underline-thickness",
                unicodeBidi: "unicode-bidi",
                unicodeRange: "unicode-range",
                unitsPerEm: "units-per-em",
                vAlphabetic: "v-alphabetic",
                vHanging: "v-hanging",
                vIdeographic: "v-ideographic",
                vMathematical: "v-mathematical",
                vectorEffect: "vector-effect",
                vertAdvY: "vert-adv-y",
                vertOriginX: "vert-origin-x",
                vertOriginY: "vert-origin-y",
                wordSpacing: "word-spacing",
                writingMode: "writing-mode",
                xHeight: "x-height",
                playbackOrder: "playbackorder",
                timelineBegin: "timelinebegin"
            },
            transform: f,
            properties: {
                about: h.commaOrSpaceSeparated,
                accentHeight: h.number,
                accumulate: null,
                additive: null,
                alignmentBaseline: null,
                alphabetic: h.number,
                amplitude: h.number,
                arabicForm: null,
                ascent: h.number,
                attributeName: null,
                attributeType: null,
                azimuth: h.number,
                bandwidth: null,
                baselineShift: null,
                baseFrequency: null,
                baseProfile: null,
                bbox: null,
                begin: null,
                bias: h.number,
                by: null,
                calcMode: null,
                capHeight: h.number,
                className: h.spaceSeparated,
                clip: null,
                clipPath: null,
                clipPathUnits: null,
                clipRule: null,
                color: null,
                colorInterpolation: null,
                colorInterpolationFilters: null,
                colorProfile: null,
                colorRendering: null,
                content: null,
                contentScriptType: null,
                contentStyleType: null,
                crossOrigin: null,
                cursor: null,
                cx: null,
                cy: null,
                d: null,
                dataType: null,
                defaultAction: null,
                descent: h.number,
                diffuseConstant: h.number,
                direction: null,
                display: null,
                dur: null,
                divisor: h.number,
                dominantBaseline: null,
                download: h.boolean,
                dx: null,
                dy: null,
                edgeMode: null,
                editable: null,
                elevation: h.number,
                enableBackground: null,
                end: null,
                event: null,
                exponent: h.number,
                externalResourcesRequired: null,
                fill: null,
                fillOpacity: h.number,
                fillRule: null,
                filter: null,
                filterRes: null,
                filterUnits: null,
                floodColor: null,
                floodOpacity: null,
                focusable: null,
                focusHighlight: null,
                fontFamily: null,
                fontSize: null,
                fontSizeAdjust: null,
                fontStretch: null,
                fontStyle: null,
                fontVariant: null,
                fontWeight: null,
                format: null,
                fr: null,
                from: null,
                fx: null,
                fy: null,
                g1: h.commaSeparated,
                g2: h.commaSeparated,
                glyphName: h.commaSeparated,
                glyphOrientationHorizontal: null,
                glyphOrientationVertical: null,
                glyphRef: null,
                gradientTransform: null,
                gradientUnits: null,
                handler: null,
                hanging: h.number,
                hatchContentUnits: null,
                hatchUnits: null,
                height: null,
                href: null,
                hrefLang: null,
                horizAdvX: h.number,
                horizOriginX: h.number,
                horizOriginY: h.number,
                id: null,
                ideographic: h.number,
                imageRendering: null,
                initialVisibility: null,
                in: null,
                in2: null,
                intercept: h.number,
                k: h.number,
                k1: h.number,
                k2: h.number,
                k3: h.number,
                k4: h.number,
                kernelMatrix: h.commaOrSpaceSeparated,
                kernelUnitLength: null,
                keyPoints: null,
                keySplines: null,
                keyTimes: null,
                kerning: null,
                lang: null,
                lengthAdjust: null,
                letterSpacing: null,
                lightingColor: null,
                limitingConeAngle: h.number,
                local: null,
                markerEnd: null,
                markerMid: null,
                markerStart: null,
                markerHeight: null,
                markerUnits: null,
                markerWidth: null,
                mask: null,
                maskContentUnits: null,
                maskUnits: null,
                mathematical: null,
                max: null,
                media: null,
                mediaCharacterEncoding: null,
                mediaContentEncodings: null,
                mediaSize: h.number,
                mediaTime: null,
                method: null,
                min: null,
                mode: null,
                name: null,
                navDown: null,
                navDownLeft: null,
                navDownRight: null,
                navLeft: null,
                navNext: null,
                navPrev: null,
                navRight: null,
                navUp: null,
                navUpLeft: null,
                navUpRight: null,
                numOctaves: null,
                observer: null,
                offset: null,
                onAbort: null,
                onActivate: null,
                onAfterPrint: null,
                onBeforePrint: null,
                onBegin: null,
                onCancel: null,
                onCanPlay: null,
                onCanPlayThrough: null,
                onChange: null,
                onClick: null,
                onClose: null,
                onCopy: null,
                onCueChange: null,
                onCut: null,
                onDblClick: null,
                onDrag: null,
                onDragEnd: null,
                onDragEnter: null,
                onDragExit: null,
                onDragLeave: null,
                onDragOver: null,
                onDragStart: null,
                onDrop: null,
                onDurationChange: null,
                onEmptied: null,
                onEnd: null,
                onEnded: null,
                onError: null,
                onFocus: null,
                onFocusIn: null,
                onFocusOut: null,
                onHashChange: null,
                onInput: null,
                onInvalid: null,
                onKeyDown: null,
                onKeyPress: null,
                onKeyUp: null,
                onLoad: null,
                onLoadedData: null,
                onLoadedMetadata: null,
                onLoadStart: null,
                onMessage: null,
                onMouseDown: null,
                onMouseEnter: null,
                onMouseLeave: null,
                onMouseMove: null,
                onMouseOut: null,
                onMouseOver: null,
                onMouseUp: null,
                onMouseWheel: null,
                onOffline: null,
                onOnline: null,
                onPageHide: null,
                onPageShow: null,
                onPaste: null,
                onPause: null,
                onPlay: null,
                onPlaying: null,
                onPopState: null,
                onProgress: null,
                onRateChange: null,
                onRepeat: null,
                onReset: null,
                onResize: null,
                onScroll: null,
                onSeeked: null,
                onSeeking: null,
                onSelect: null,
                onShow: null,
                onStalled: null,
                onStorage: null,
                onSubmit: null,
                onSuspend: null,
                onTimeUpdate: null,
                onToggle: null,
                onUnload: null,
                onVolumeChange: null,
                onWaiting: null,
                onZoom: null,
                opacity: null,
                operator: null,
                order: null,
                orient: null,
                orientation: null,
                origin: null,
                overflow: null,
                overlay: null,
                overlinePosition: h.number,
                overlineThickness: h.number,
                paintOrder: null,
                panose1: null,
                path: null,
                pathLength: h.number,
                patternContentUnits: null,
                patternTransform: null,
                patternUnits: null,
                phase: null,
                ping: h.spaceSeparated,
                pitch: null,
                playbackOrder: null,
                pointerEvents: null,
                points: null,
                pointsAtX: h.number,
                pointsAtY: h.number,
                pointsAtZ: h.number,
                preserveAlpha: null,
                preserveAspectRatio: null,
                primitiveUnits: null,
                propagate: null,
                property: h.commaOrSpaceSeparated,
                r: null,
                radius: null,
                referrerPolicy: null,
                refX: null,
                refY: null,
                rel: h.commaOrSpaceSeparated,
                rev: h.commaOrSpaceSeparated,
                renderingIntent: null,
                repeatCount: null,
                repeatDur: null,
                requiredExtensions: h.commaOrSpaceSeparated,
                requiredFeatures: h.commaOrSpaceSeparated,
                requiredFonts: h.commaOrSpaceSeparated,
                requiredFormats: h.commaOrSpaceSeparated,
                resource: null,
                restart: null,
                result: null,
                rotate: null,
                rx: null,
                ry: null,
                scale: null,
                seed: null,
                shapeRendering: null,
                side: null,
                slope: null,
                snapshotTime: null,
                specularConstant: h.number,
                specularExponent: h.number,
                spreadMethod: null,
                spacing: null,
                startOffset: null,
                stdDeviation: null,
                stemh: null,
                stemv: null,
                stitchTiles: null,
                stopColor: null,
                stopOpacity: null,
                strikethroughPosition: h.number,
                strikethroughThickness: h.number,
                string: null,
                stroke: null,
                strokeDashArray: h.commaOrSpaceSeparated,
                strokeDashOffset: null,
                strokeLineCap: null,
                strokeLineJoin: null,
                strokeMiterLimit: h.number,
                strokeOpacity: h.number,
                strokeWidth: null,
                style: null,
                surfaceScale: h.number,
                syncBehavior: null,
                syncBehaviorDefault: null,
                syncMaster: null,
                syncTolerance: null,
                syncToleranceDefault: null,
                systemLanguage: h.commaOrSpaceSeparated,
                tabIndex: h.number,
                tableValues: null,
                target: null,
                targetX: h.number,
                targetY: h.number,
                textAnchor: null,
                textDecoration: null,
                textRendering: null,
                textLength: null,
                timelineBegin: null,
                title: null,
                transformBehavior: null,
                type: null,
                typeOf: h.commaOrSpaceSeparated,
                to: null,
                transform: null,
                transformOrigin: null,
                u1: null,
                u2: null,
                underlinePosition: h.number,
                underlineThickness: h.number,
                unicode: null,
                unicodeBidi: null,
                unicodeRange: null,
                unitsPerEm: h.number,
                values: null,
                vAlphabetic: h.number,
                vMathematical: h.number,
                vectorEffect: null,
                vHanging: h.number,
                vIdeographic: h.number,
                version: null,
                vertAdvY: h.number,
                vertOriginX: h.number,
                vertOriginY: h.number,
                viewBox: null,
                viewTarget: null,
                visibility: null,
                width: null,
                widths: null,
                wordSpacing: null,
                writingMode: null,
                x: null,
                x1: null,
                x2: null,
                xChannelSelector: null,
                xHeight: h.number,
                y: null,
                y1: null,
                y2: null,
                yChannelSelector: null,
                z: null,
                zoomAndPan: null
            }
        })
          , b = o([c, s, d, m, g], "html")
          , v = o([c, s, d, m, y], "svg")
    },
    26103: function(e, t, n) {
        "use strict";
        n.d(t, {
            s: function() {
                return s
            }
        });
        var r = n(93859)
          , o = n(75729)
          , i = n(49255);
        let l = /^data[-\w.:]+$/i
          , a = /-[a-z]/g
          , u = /[A-Z]/g;
        function s(e, t) {
            let n = (0,
            r.F)(t)
              , s = t
              , p = i.k;
            if (n in e.normal)
                return e.property[e.normal[n]];
            if (n.length > 4 && "data" === n.slice(0, 4) && l.test(t)) {
                if ("-" === t.charAt(4)) {
                    let d = t.slice(5).replace(a, f);
                    s = "data" + d.charAt(0).toUpperCase() + d.slice(1)
                } else {
                    let h = t.slice(4);
                    if (!a.test(h)) {
                        let m = h.replace(u, c);
                        "-" !== m.charAt(0) && (m = "-" + m),
                        t = "data" + m
                    }
                }
                p = o.I
            }
            return new p(s,t)
        }
        function c(e) {
            return "-" + e.toLowerCase()
        }
        function f(e) {
            return e.charAt(1).toUpperCase()
        }
    },
    93859: function(e, t, n) {
        "use strict";
        function r(e) {
            return e.toLowerCase()
        }
        n.d(t, {
            F: function() {
                return r
            }
        })
    },
    75729: function(e, t, n) {
        "use strict";
        n.d(t, {
            I: function() {
                return l
            }
        });
        var r = n(49255)
          , o = n(47312);
        let i = Object.keys(o);
        class l extends r.k {
            constructor(e, t, n, r) {
                let l = -1;
                if (super(e, t),
                a(this, "space", r),
                "number" == typeof n)
                    for (; ++l < i.length; ) {
                        let u = i[l];
                        a(this, i[l], (n & o[u]) === o[u])
                    }
            }
        }
        function a(e, t, n) {
            n && (e[t] = n)
        }
        l.prototype.defined = !0
    },
    49255: function(e, t, n) {
        "use strict";
        n.d(t, {
            k: function() {
                return r
            }
        });
        class r {
            constructor(e, t) {
                this.property = e,
                this.attribute = t
            }
        }
        r.prototype.space = null,
        r.prototype.boolean = !1,
        r.prototype.booleanish = !1,
        r.prototype.overloadedBoolean = !1,
        r.prototype.number = !1,
        r.prototype.commaSeparated = !1,
        r.prototype.spaceSeparated = !1,
        r.prototype.commaOrSpaceSeparated = !1,
        r.prototype.mustUseProperty = !1,
        r.prototype.defined = !1
    },
    47312: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            boolean: function() {
                return o
            },
            booleanish: function() {
                return i
            },
            commaOrSpaceSeparated: function() {
                return c
            },
            commaSeparated: function() {
                return s
            },
            number: function() {
                return a
            },
            overloadedBoolean: function() {
                return l
            },
            spaceSeparated: function() {
                return u
            }
        });
        let r = 0
          , o = f()
          , i = f()
          , l = f()
          , a = f()
          , u = f()
          , s = f()
          , c = f();
        function f() {
            return 2 ** ++r
        }
    },
    45772: function(e, t, n) {
        "use strict";
        n.d(t, {
            D: function() {
                return tO
            }
        });
        var r = {};
        n.r(r),
        n.d(r, {
            attentionMarkers: function() {
                return eN
            },
            contentInitial: function() {
                return eR
            },
            disable: function() {
                return eU
            },
            document: function() {
                return ez
            },
            flow: function() {
                return e_
            },
            flowInitial: function() {
                return ej
            },
            insideSpan: function() {
                return eH
            },
            string: function() {
                return eM
            },
            text: function() {
                return eB
            }
        });
        var o = n(67294)
          , i = n(48738);
        function l(e) {
            return e && "object" == typeof e ? "position"in e || "type"in e ? u(e.position) : "start"in e || "end"in e ? u(e) : "line"in e || "column"in e ? a(e) : "" : ""
        }
        function a(e) {
            return s(e && e.line) + ":" + s(e && e.column)
        }
        function u(e) {
            return a(e && e.start) + "-" + a(e && e.end)
        }
        function s(e) {
            return e && "number" == typeof e ? e : 1
        }
        class c extends Error {
            constructor(e, t, n) {
                let r = [null, null]
                  , o = {
                    start: {
                        line: null,
                        column: null
                    },
                    end: {
                        line: null,
                        column: null
                    }
                };
                if (super(),
                "string" == typeof t && (n = t,
                t = void 0),
                "string" == typeof n) {
                    let i = n.indexOf(":");
                    -1 === i ? r[1] = n : (r[0] = n.slice(0, i),
                    r[1] = n.slice(i + 1))
                }
                t && ("type"in t || "position"in t ? t.position && (o = t.position) : "start"in t || "end"in t ? o = t : ("line"in t || "column"in t) && (o.start = t)),
                this.name = l(t) || "1:1",
                this.message = "object" == typeof e ? e.message : e,
                this.stack = "",
                "object" == typeof e && e.stack && (this.stack = e.stack),
                this.reason = this.message,
                this.fatal,
                this.line = o.start.line,
                this.column = o.start.column,
                this.position = o,
                this.source = r[0],
                this.ruleId = r[1],
                this.file,
                this.actual,
                this.expected,
                this.url,
                this.note
            }
        }
        c.prototype.file = "",
        c.prototype.name = "",
        c.prototype.reason = "",
        c.prototype.message = "",
        c.prototype.stack = "",
        c.prototype.fatal = null,
        c.prototype.column = null,
        c.prototype.line = null,
        c.prototype.source = null,
        c.prototype.ruleId = null,
        c.prototype.position = null;
        let f = {
            basename: function(e, t) {
                if (void 0 !== t && "string" != typeof t)
                    throw TypeError('"ext" argument must be a string');
                p(e);
                let n = 0, r = -1, o = e.length, i;
                if (void 0 === t || 0 === t.length || t.length > e.length) {
                    for (; o--; )
                        if (47 === e.charCodeAt(o)) {
                            if (i) {
                                n = o + 1;
                                break
                            }
                        } else
                            r < 0 && (i = !0,
                            r = o + 1);
                    return r < 0 ? "" : e.slice(n, r)
                }
                if (t === e)
                    return "";
                let l = -1
                  , a = t.length - 1;
                for (; o--; )
                    if (47 === e.charCodeAt(o)) {
                        if (i) {
                            n = o + 1;
                            break
                        }
                    } else
                        l < 0 && (i = !0,
                        l = o + 1),
                        a > -1 && (e.charCodeAt(o) === t.charCodeAt(a--) ? a < 0 && (r = o) : (a = -1,
                        r = l));
                return n === r ? r = l : r < 0 && (r = e.length),
                e.slice(n, r)
            },
            dirname: function(e) {
                if (p(e),
                0 === e.length)
                    return ".";
                let t = -1, n = e.length, r;
                for (; --n; )
                    if (47 === e.charCodeAt(n)) {
                        if (r) {
                            t = n;
                            break
                        }
                    } else
                        r || (r = !0);
                return t < 0 ? 47 === e.charCodeAt(0) ? "/" : "." : 1 === t && 47 === e.charCodeAt(0) ? "//" : e.slice(0, t)
            },
            extname: function(e) {
                p(e);
                let t = e.length, n = -1, r = 0, o = -1, i = 0, l;
                for (; t--; ) {
                    let a = e.charCodeAt(t);
                    if (47 === a) {
                        if (l) {
                            r = t + 1;
                            break
                        }
                        continue
                    }
                    n < 0 && (l = !0,
                    n = t + 1),
                    46 === a ? o < 0 ? o = t : 1 !== i && (i = 1) : o > -1 && (i = -1)
                }
                return o < 0 || n < 0 || 0 === i || 1 === i && o === n - 1 && o === r + 1 ? "" : e.slice(o, n)
            },
            join: function(...e) {
                let t = -1, n;
                for (; ++t < e.length; )
                    p(e[t]),
                    e[t] && (n = void 0 === n ? e[t] : n + "/" + e[t]);
                return void 0 === n ? "." : function(e) {
                    p(e);
                    let t = 47 === e.charCodeAt(0)
                      , n = function e(t, n) {
                        let r = "", o = 0, i = -1, l = 0, a = -1, u, s;
                        for (; ++a <= t.length; ) {
                            if (a < t.length)
                                u = t.charCodeAt(a);
                            else if (47 === u)
                                break;
                            else
                                u = 47;
                            if (47 === u) {
                                if (i === a - 1 || 1 === l)
                                    ;
                                else if (i !== a - 1 && 2 === l) {
                                    if (r.length < 2 || 2 !== o || 46 !== r.charCodeAt(r.length - 1) || 46 !== r.charCodeAt(r.length - 2)) {
                                        if (r.length > 2) {
                                            if ((s = r.lastIndexOf("/")) !== r.length - 1) {
                                                s < 0 ? (r = "",
                                                o = 0) : o = (r = r.slice(0, s)).length - 1 - r.lastIndexOf("/"),
                                                i = a,
                                                l = 0;
                                                continue
                                            }
                                        } else if (r.length > 0) {
                                            r = "",
                                            o = 0,
                                            i = a,
                                            l = 0;
                                            continue
                                        }
                                    }
                                    n && (r = r.length > 0 ? r + "/.." : "..",
                                    o = 2)
                                } else
                                    r.length > 0 ? r += "/" + t.slice(i + 1, a) : r = t.slice(i + 1, a),
                                    o = a - i - 1;
                                i = a,
                                l = 0
                            } else
                                46 === u && l > -1 ? l++ : l = -1
                        }
                        return r
                    }(e, !t);
                    return 0 !== n.length || t || (n = "."),
                    n.length > 0 && 47 === e.charCodeAt(e.length - 1) && (n += "/"),
                    t ? "/" + n : n
                }(n)
            },
            sep: "/"
        };
        function p(e) {
            if ("string" != typeof e)
                throw TypeError("Path must be a string. Received " + JSON.stringify(e))
        }
        let d = {
            cwd: function() {
                return "/"
            }
        };
        function h(e) {
            return null !== e && "object" == typeof e && e.href && e.origin
        }
        let m = ["history", "path", "basename", "stem", "extname", "dirname"];
        class g {
            constructor(e) {
                var t;
                let n;
                n = e ? "string" == typeof e || (t = e,
                i(t)) ? {
                    value: e
                } : h(e) ? {
                    path: e
                } : e : {},
                this.data = {},
                this.messages = [],
                this.history = [],
                this.cwd = d.cwd(),
                this.value,
                this.stored,
                this.result,
                this.map;
                let r = -1;
                for (; ++r < m.length; ) {
                    let o = m[r];
                    o in n && void 0 !== n[o] && null !== n[o] && (this[o] = "history" === o ? [...n[o]] : n[o])
                }
                let l;
                for (l in n)
                    m.includes(l) || (this[l] = n[l])
            }
            get path() {
                return this.history[this.history.length - 1]
            }
            set path(e) {
                h(e) && (e = function(e) {
                    if ("string" == typeof e)
                        e = new URL(e);
                    else if (!h(e)) {
                        let t = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
                        throw t.code = "ERR_INVALID_ARG_TYPE",
                        t
                    }
                    if ("file:" !== e.protocol) {
                        let n = TypeError("The URL must be of scheme file");
                        throw n.code = "ERR_INVALID_URL_SCHEME",
                        n
                    }
                    return function(e) {
                        if ("" !== e.hostname) {
                            let t = TypeError('File URL host must be "localhost" or empty on darwin');
                            throw t.code = "ERR_INVALID_FILE_URL_HOST",
                            t
                        }
                        let n = e.pathname
                          , r = -1;
                        for (; ++r < n.length; )
                            if (37 === n.charCodeAt(r) && 50 === n.charCodeAt(r + 1)) {
                                let o = n.charCodeAt(r + 2);
                                if (70 === o || 102 === o) {
                                    let i = TypeError("File URL path must not include encoded / characters");
                                    throw i.code = "ERR_INVALID_FILE_URL_PATH",
                                    i
                                }
                            }
                        return decodeURIComponent(n)
                    }(e)
                }(e)),
                b(e, "path"),
                this.path !== e && this.history.push(e)
            }
            get dirname() {
                return "string" == typeof this.path ? f.dirname(this.path) : void 0
            }
            set dirname(e) {
                v(this.basename, "dirname"),
                this.path = f.join(e || "", this.basename)
            }
            get basename() {
                return "string" == typeof this.path ? f.basename(this.path) : void 0
            }
            set basename(e) {
                b(e, "basename"),
                y(e, "basename"),
                this.path = f.join(this.dirname || "", e)
            }
            get extname() {
                return "string" == typeof this.path ? f.extname(this.path) : void 0
            }
            set extname(e) {
                if (y(e, "extname"),
                v(this.dirname, "extname"),
                e) {
                    if (46 !== e.charCodeAt(0))
                        throw Error("`extname` must start with `.`");
                    if (e.includes(".", 1))
                        throw Error("`extname` cannot contain multiple dots")
                }
                this.path = f.join(this.dirname, this.stem + (e || ""))
            }
            get stem() {
                return "string" == typeof this.path ? f.basename(this.path, this.extname) : void 0
            }
            set stem(e) {
                b(e, "stem"),
                y(e, "stem"),
                this.path = f.join(this.dirname || "", e + (this.extname || ""))
            }
            toString(e) {
                return (this.value || "").toString(e || void 0)
            }
            message(e, t, n) {
                let r = new c(e,t,n);
                return this.path && (r.name = this.path + ":" + r.name,
                r.file = this.path),
                r.fatal = !1,
                this.messages.push(r),
                r
            }
            info(e, t, n) {
                let r = this.message(e, t, n);
                return r.fatal = null,
                r
            }
            fail(e, t, n) {
                let r = this.message(e, t, n);
                throw r.fatal = !0,
                r
            }
        }
        function y(e, t) {
            if (e && e.includes(f.sep))
                throw Error("`" + t + "` cannot be a path: did not expect `" + f.sep + "`")
        }
        function b(e, t) {
            if (!e)
                throw Error("`" + t + "` cannot be empty")
        }
        function v(e, t) {
            if (!e)
                throw Error("Setting `" + t + "` requires `path` to be set too")
        }
        function x(e) {
            if (e)
                throw e
        }
        var k = n(94470);
        function w(e) {
            if ("object" != typeof e || null === e)
                return !1;
            let t = Object.getPrototypeOf(e);
            return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
        }
        let S = (function e() {
            let t = function() {
                let e = []
                  , t = {
                    run: function(...t) {
                        let n = -1
                          , r = t.pop();
                        if ("function" != typeof r)
                            throw TypeError("Expected function as last argument, not " + r);
                        !function o(i, ...l) {
                            let a = e[++n]
                              , u = -1;
                            if (i) {
                                r(i);
                                return
                            }
                            for (; ++u < t.length; )
                                (null === l[u] || void 0 === l[u]) && (l[u] = t[u]);
                            t = l,
                            a ? (function(e, t) {
                                let n;
                                return function(...t) {
                                    let i = e.length > t.length, l;
                                    i && t.push(r);
                                    try {
                                        l = e.apply(this, t)
                                    } catch (a) {
                                        if (i && n)
                                            throw a;
                                        return r(a)
                                    }
                                    i || (l && l.then && "function" == typeof l.then ? l.then(o, r) : l instanceof Error ? r(l) : o(l))
                                }
                                ;
                                function r(e, ...r) {
                                    n || (n = !0,
                                    t(e, ...r))
                                }
                                function o(e) {
                                    r(null, e)
                                }
                            }
                            )(a, o)(...l) : r(null, ...l)
                        }(null, ...t)
                    },
                    use: function(n) {
                        if ("function" != typeof n)
                            throw TypeError("Expected `middelware` to be a function, not " + n);
                        return e.push(n),
                        t
                    }
                };
                return t
            }(), n = [], r = {}, o, l = -1;
            return a.data = function(e, t) {
                return "string" == typeof e ? 2 === arguments.length ? (O("data", o),
                r[e] = t,
                a) : E.call(r, e) && r[e] || null : e ? (O("data", o),
                r = e,
                a) : r
            }
            ,
            a.Parser = void 0,
            a.Compiler = void 0,
            a.freeze = function() {
                if (o)
                    return a;
                for (; ++l < n.length; ) {
                    let[e,...r] = n[l];
                    if (!1 === r[0])
                        continue;
                    !0 === r[0] && (r[0] = void 0);
                    let i = e.call(a, ...r);
                    "function" == typeof i && t.use(i)
                }
                return o = !0,
                l = Number.POSITIVE_INFINITY,
                a
            }
            ,
            a.attachers = n,
            a.use = function(e, ...t) {
                let i;
                if (O("use", o),
                null == e)
                    ;
                else if ("function" == typeof e)
                    c(e, ...t);
                else if ("object" == typeof e)
                    Array.isArray(e) ? s(e) : u(e);
                else
                    throw TypeError("Expected usable value, not `" + e + "`");
                return i && (r.settings = Object.assign(r.settings || {}, i)),
                a;
                function l(e) {
                    if ("function" == typeof e)
                        c(e);
                    else if ("object" == typeof e) {
                        if (Array.isArray(e)) {
                            let[t,...n] = e;
                            c(t, ...n)
                        } else
                            u(e)
                    } else
                        throw TypeError("Expected usable value, not `" + e + "`")
                }
                function u(e) {
                    s(e.plugins),
                    e.settings && (i = Object.assign(i || {}, e.settings))
                }
                function s(e) {
                    let t = -1;
                    if (null == e)
                        ;
                    else if (Array.isArray(e))
                        for (; ++t < e.length; ) {
                            let n = e[t];
                            l(n)
                        }
                    else
                        throw TypeError("Expected a list of plugins, not `" + e + "`")
                }
                function c(e, t) {
                    let r = -1, o;
                    for (; ++r < n.length; )
                        if (n[r][0] === e) {
                            o = n[r];
                            break
                        }
                    o ? (w(o[1]) && w(t) && (t = k(!0, o[1], t)),
                    o[1] = t) : n.push([...arguments])
                }
            }
            ,
            a.parse = function(e) {
                a.freeze();
                let t = F(e)
                  , n = a.Parser;
                return (T("parse", n),
                C(n, "parse")) ? new n(String(t),t).parse() : n(String(t), t)
            }
            ,
            a.stringify = function(e, t) {
                a.freeze();
                let n = F(t)
                  , r = a.Compiler;
                return (A("stringify", r),
                L(e),
                C(r, "compile")) ? new r(e,n).compile() : r(e, n)
            }
            ,
            a.run = function(e, n, r) {
                if (L(e),
                a.freeze(),
                r || "function" != typeof n || (r = n,
                n = void 0),
                !r)
                    return new Promise(o);
                function o(o, i) {
                    t.run(e, F(n), function(t, n, l) {
                        n = n || e,
                        t ? i(t) : o ? o(n) : r(null, n, l)
                    })
                }
                o(null, r)
            }
            ,
            a.runSync = function(e, t) {
                let n, r;
                return a.run(e, t, function(e, t) {
                    x(e),
                    n = t,
                    r = !0
                }),
                P("runSync", "run", r),
                n
            }
            ,
            a.process = function(e, t) {
                if (a.freeze(),
                T("process", a.Parser),
                A("process", a.Compiler),
                !t)
                    return new Promise(n);
                function n(n, r) {
                    let o = F(e);
                    function l(e, o) {
                        e || !o ? r(e) : n ? n(o) : t(null, o)
                    }
                    a.run(a.parse(o), o, (e,t,n)=>{
                        if (!e && t && n) {
                            var r;
                            let o = a.stringify(t, n);
                            null == o || ((r = o,
                            "string" == typeof r || i(r)) ? n.value = o : n.result = o),
                            l(e, n)
                        } else
                            l(e)
                    }
                    )
                }
                n(null, t)
            }
            ,
            a.processSync = function(e) {
                let t;
                a.freeze(),
                T("processSync", a.Parser),
                A("processSync", a.Compiler);
                let n = F(e);
                return a.process(n, function(e) {
                    t = !0,
                    x(e)
                }),
                P("processSync", "process", t),
                n
            }
            ,
            a;
            function a() {
                let t = e()
                  , o = -1;
                for (; ++o < n.length; )
                    t.use(...n[o]);
                return t.data(k(!0, {}, r)),
                t
            }
        }
        )().freeze()
          , E = {}.hasOwnProperty;
        function C(e, t) {
            return "function" == typeof e && e.prototype && (function(e) {
                let t;
                for (t in e)
                    if (E.call(e, t))
                        return !0;
                return !1
            }(e.prototype) || t in e.prototype)
        }
        function T(e, t) {
            if ("function" != typeof t)
                throw TypeError("Cannot `" + e + "` without `Parser`")
        }
        function A(e, t) {
            if ("function" != typeof t)
                throw TypeError("Cannot `" + e + "` without `Compiler`")
        }
        function O(e, t) {
            if (t)
                throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
        }
        function L(e) {
            if (!w(e) || "string" != typeof e.type)
                throw TypeError("Expected node, got `" + e + "`")
        }
        function P(e, t, n) {
            if (!n)
                throw Error("`" + e + "` finished async. Use `" + t + "` instead")
        }
        function F(e) {
            var t;
            return (t = e,
            Boolean(t && "object" == typeof t && "message"in t && "messages"in t)) ? e : new g(e)
        }
        let D = {};
        function I(e, t, n) {
            var r;
            if (r = e,
            Boolean(r && "object" == typeof r)) {
                if ("value"in e)
                    return "html" !== e.type || n ? e.value : "";
                if (t && "alt"in e && e.alt)
                    return e.alt;
                if ("children"in e)
                    return z(e.children, t, n)
            }
            return Array.isArray(e) ? z(e, t, n) : ""
        }
        function z(e, t, n) {
            let r = []
              , o = -1;
            for (; ++o < e.length; )
                r[o] = I(e[o], t, n);
            return r.join("")
        }
        var R = n(4663)
          , j = n(42761)
          , _ = n(75364);
        let M = {
            tokenize: function(e) {
                let t = e.attempt(this.parser.constructs.contentInitial, function(n) {
                    if (null === n) {
                        e.consume(n);
                        return
                    }
                    return e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    (0,
                    j.f)(e, t, "linePrefix")
                }, function(t) {
                    return e.enter("paragraph"),
                    function t(r) {
                        let o = e.enter("chunkText", {
                            contentType: "text",
                            previous: n
                        });
                        return n && (n.next = o),
                        n = o,
                        function n(r) {
                            if (null === r) {
                                e.exit("chunkText"),
                                e.exit("paragraph"),
                                e.consume(r);
                                return
                            }
                            return (0,
                            _.Ch)(r) ? (e.consume(r),
                            e.exit("chunkText"),
                            t) : (e.consume(r),
                            n)
                        }(r)
                    }(t)
                }), n;
                return t
            }
        };
        var B = n(21905);
        let H = {
            tokenize: function(e) {
                let t = this, n = [], r = 0, o, i, l;
                return a;
                function a(o) {
                    if (r < n.length) {
                        let i = n[r];
                        return t.containerState = i[1],
                        e.attempt(i[0].continuation, u, s)(o)
                    }
                    return s(o)
                }
                function u(e) {
                    if (r++,
                    t.containerState._closeFlow) {
                        t.containerState._closeFlow = void 0,
                        o && y();
                        let n = t.events.length, i = n, l;
                        for (; i--; )
                            if ("exit" === t.events[i][0] && "chunkFlow" === t.events[i][1].type) {
                                l = t.events[i][1].end;
                                break
                            }
                        g(r);
                        let u = n;
                        for (; u < t.events.length; )
                            t.events[u][1].end = Object.assign({}, l),
                            u++;
                        return (0,
                        B.d)(t.events, i + 1, 0, t.events.slice(n)),
                        t.events.length = u,
                        s(e)
                    }
                    return a(e)
                }
                function s(i) {
                    if (r === n.length) {
                        if (!o)
                            return p(i);
                        if (o.currentConstruct && o.currentConstruct.concrete)
                            return h(i);
                        t.interrupt = Boolean(o.currentConstruct && !o._gfmTableDynamicInterruptHack)
                    }
                    return t.containerState = {},
                    e.check(N, c, f)(i)
                }
                function c(e) {
                    return o && y(),
                    g(r),
                    p(e)
                }
                function f(e) {
                    return t.parser.lazy[t.now().line] = r !== n.length,
                    l = t.now().offset,
                    h(e)
                }
                function p(n) {
                    return t.containerState = {},
                    e.attempt(N, d, h)(n)
                }
                function d(e) {
                    return r++,
                    n.push([t.currentConstruct, t.containerState]),
                    p(e)
                }
                function h(n) {
                    if (null === n) {
                        o && y(),
                        g(0),
                        e.consume(n);
                        return
                    }
                    return o = o || t.parser.flow(t.now()),
                    e.enter("chunkFlow", {
                        contentType: "flow",
                        previous: i,
                        _tokenizer: o
                    }),
                    function n(o) {
                        if (null === o) {
                            m(e.exit("chunkFlow"), !0),
                            g(0),
                            e.consume(o);
                            return
                        }
                        return (0,
                        _.Ch)(o) ? (e.consume(o),
                        m(e.exit("chunkFlow")),
                        r = 0,
                        t.interrupt = void 0,
                        a) : (e.consume(o),
                        n)
                    }(n)
                }
                function m(e, n) {
                    let a = t.sliceStream(e);
                    if (n && a.push(null),
                    e.previous = i,
                    i && (i.next = e),
                    i = e,
                    o.defineSkip(e.start),
                    o.write(a),
                    t.parser.lazy[e.start.line]) {
                        let u = o.events.length;
                        for (; u--; )
                            if (o.events[u][1].start.offset < l && (!o.events[u][1].end || o.events[u][1].end.offset > l))
                                return;
                        let s = t.events.length, c = s, f, p;
                        for (; c--; )
                            if ("exit" === t.events[c][0] && "chunkFlow" === t.events[c][1].type) {
                                if (f) {
                                    p = t.events[c][1].end;
                                    break
                                }
                                f = !0
                            }
                        for (g(r),
                        u = s; u < t.events.length; )
                            t.events[u][1].end = Object.assign({}, p),
                            u++;
                        (0,
                        B.d)(t.events, c + 1, 0, t.events.slice(s)),
                        t.events.length = u
                    }
                }
                function g(r) {
                    let o = n.length;
                    for (; o-- > r; ) {
                        let i = n[o];
                        t.containerState = i[1],
                        i[0].exit.call(t, e)
                    }
                    n.length = r
                }
                function y() {
                    o.write([null]),
                    i = void 0,
                    o = void 0,
                    t.containerState._closeFlow = void 0
                }
            }
        }
          , N = {
            tokenize: function(e, t, n) {
                return (0,
                j.f)(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)
            }
        };
        var U = n(23402);
        function V(e) {
            let t = {}, n = -1, r, o, i, l, a, u, s;
            for (; ++n < e.length; ) {
                for (; (n in t); )
                    n = t[n];
                if (r = e[n],
                n && "chunkFlow" === r[1].type && "listItemPrefix" === e[n - 1][1].type && ((i = 0) < (u = r[1]._tokenizer.events).length && "lineEndingBlank" === u[i][1].type && (i += 2),
                i < u.length && "content" === u[i][1].type))
                    for (; ++i < u.length && "content" !== u[i][1].type; )
                        "chunkText" === u[i][1].type && (u[i][1]._isInFirstContentOfListItem = !0,
                        i++);
                if ("enter" === r[0])
                    r[1].contentType && (Object.assign(t, W(e, n)),
                    n = t[n],
                    s = !0);
                else if (r[1]._container) {
                    for (i = n,
                    o = void 0; i--; )
                        if ("lineEnding" === (l = e[i])[1].type || "lineEndingBlank" === l[1].type)
                            "enter" === l[0] && (o && (e[o][1].type = "lineEndingBlank"),
                            l[1].type = "lineEnding",
                            o = i);
                        else
                            break;
                    o && (r[1].end = Object.assign({}, e[o][1].start),
                    (a = e.slice(o, n)).unshift(r),
                    (0,
                    B.d)(e, o, n - o + 1, a))
                }
            }
            return !s
        }
        function W(e, t) {
            let n = e[t][1], r = e[t][2], o = t - 1, i = [], l = n._tokenizer || r.parser[n.contentType](n.start), a = l.events, u = [], s = {}, c, f, p = -1, d = n, h = 0, m = 0, g = [m];
            for (; d; ) {
                for (; e[++o][1] !== d; )
                    ;
                i.push(o),
                !d._tokenizer && (c = r.sliceStream(d),
                d.next || c.push(null),
                f && l.defineSkip(d.start),
                d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0),
                l.write(c),
                d._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)),
                f = d,
                d = d.next
            }
            for (d = n; ++p < a.length; )
                "exit" === a[p][0] && "enter" === a[p - 1][0] && a[p][1].type === a[p - 1][1].type && a[p][1].start.line !== a[p][1].end.line && (m = p + 1,
                g.push(m),
                d._tokenizer = void 0,
                d.previous = void 0,
                d = d.next);
            for (l.events = [],
            d ? (d._tokenizer = void 0,
            d.previous = void 0) : g.pop(),
            p = g.length; p--; ) {
                let y = a.slice(g[p], g[p + 1])
                  , b = i.pop();
                u.unshift([b, b + y.length - 1]),
                (0,
                B.d)(e, b, 2, y)
            }
            for (p = -1; ++p < u.length; )
                s[h + u[p][0]] = h + u[p][1],
                h += u[p][1] - u[p][0] - 1;
            return s
        }
        let q = {
            tokenize: function(e, t) {
                let n;
                return function(t) {
                    return e.enter("content"),
                    n = e.enter("chunkContent", {
                        contentType: "content"
                    }),
                    r(t)
                }
                ;
                function r(t) {
                    return null === t ? o(t) : (0,
                    _.Ch)(t) ? e.check($, i, o)(t) : (e.consume(t),
                    r)
                }
                function o(n) {
                    return e.exit("chunkContent"),
                    e.exit("content"),
                    t(n)
                }
                function i(t) {
                    return e.consume(t),
                    e.exit("chunkContent"),
                    n.next = e.enter("chunkContent", {
                        contentType: "content",
                        previous: n
                    }),
                    n = n.next,
                    r
                }
            },
            resolve: function(e) {
                return V(e),
                e
            }
        }
          , $ = {
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return e.exit("chunkContent"),
                    e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    (0,
                    j.f)(e, o, "linePrefix")
                }
                ;
                function o(o) {
                    if (null === o || (0,
                    _.Ch)(o))
                        return n(o);
                    let i = r.events[r.events.length - 1];
                    return !r.parser.constructs.disable.null.includes("codeIndented") && i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? t(o) : e.interrupt(r.parser.constructs.flow, n, t)(o)
                }
            },
            partial: !0
        }
          , Y = {
            tokenize: function(e) {
                let t = this
                  , n = e.attempt(U.w, function(r) {
                    if (null === r) {
                        e.consume(r);
                        return
                    }
                    return e.enter("lineEndingBlank"),
                    e.consume(r),
                    e.exit("lineEndingBlank"),
                    t.currentConstruct = void 0,
                    n
                }, e.attempt(this.parser.constructs.flowInitial, r, (0,
                j.f)(e, e.attempt(this.parser.constructs.flow, r, e.attempt(q, r)), "linePrefix")));
                return n;
                function r(r) {
                    if (null === r) {
                        e.consume(r);
                        return
                    }
                    return e.enter("lineEnding"),
                    e.consume(r),
                    e.exit("lineEnding"),
                    t.currentConstruct = void 0,
                    n
                }
            }
        }
          , X = {
            resolveAll: Z()
        }
          , G = K("string")
          , Q = K("text");
        function K(e) {
            return {
                tokenize: function(t) {
                    let n = this
                      , r = this.parser.constructs[e]
                      , o = t.attempt(r, i, l);
                    return i;
                    function i(e) {
                        return u(e) ? o(e) : l(e)
                    }
                    function l(e) {
                        if (null === e) {
                            t.consume(e);
                            return
                        }
                        return t.enter("data"),
                        t.consume(e),
                        a
                    }
                    function a(e) {
                        return u(e) ? (t.exit("data"),
                        o(e)) : (t.consume(e),
                        a)
                    }
                    function u(e) {
                        if (null === e)
                            return !0;
                        let t = r[e]
                          , o = -1;
                        if (t)
                            for (; ++o < t.length; ) {
                                let i = t[o];
                                if (!i.previous || i.previous.call(n, n.previous))
                                    return !0
                            }
                        return !1
                    }
                },
                resolveAll: Z("text" === e ? J : void 0)
            }
        }
        function Z(e) {
            return function(t, n) {
                let r = -1, o;
                for (; ++r <= t.length; )
                    void 0 === o ? t[r] && "data" === t[r][1].type && (o = r,
                    r++) : t[r] && "data" === t[r][1].type || (r !== o + 2 && (t[o][1].end = t[r - 1][1].end,
                    t.splice(o + 2, r - o - 2),
                    r = o + 2),
                    o = void 0);
                return e ? e(t, n) : t
            }
        }
        function J(e, t) {
            let n = 0;
            for (; ++n <= e.length; )
                if ((n === e.length || "lineEnding" === e[n][1].type) && "data" === e[n - 1][1].type) {
                    let r = e[n - 1][1], o = t.sliceStream(r), i = o.length, l = -1, a = 0, u;
                    for (; i--; ) {
                        let s = o[i];
                        if ("string" == typeof s) {
                            for (l = s.length; 32 === s.charCodeAt(l - 1); )
                                a++,
                                l--;
                            if (l)
                                break;
                            l = -1
                        } else if (-2 === s)
                            u = !0,
                            a++;
                        else if (-1 === s)
                            ;
                        else {
                            i++;
                            break
                        }
                    }
                    if (a) {
                        let c = {
                            type: n === e.length || u || a < 2 ? "lineSuffix" : "hardBreakTrailing",
                            start: {
                                line: r.end.line,
                                column: r.end.column - a,
                                offset: r.end.offset - a,
                                _index: r.start._index + i,
                                _bufferIndex: i ? l : r.start._bufferIndex + l
                            },
                            end: Object.assign({}, r.end)
                        };
                        r.end = Object.assign({}, c.start),
                        r.start.offset === r.end.offset ? Object.assign(r, c) : (e.splice(n, 0, ["enter", c, t], ["exit", c, t]),
                        n += 2)
                    }
                    n++
                }
            return e
        }
        var ee = n(63233);
        let et = {
            name: "thematicBreak",
            tokenize: function(e, t, n) {
                let r = 0, o;
                return function(i) {
                    var l;
                    return e.enter("thematicBreak"),
                    o = l = i,
                    function i(l) {
                        return l === o ? (e.enter("thematicBreakSequence"),
                        function t(n) {
                            return n === o ? (e.consume(n),
                            r++,
                            t) : (e.exit("thematicBreakSequence"),
                            (0,
                            _.xz)(n) ? (0,
                            j.f)(e, i, "whitespace")(n) : i(n))
                        }(l)) : r >= 3 && (null === l || (0,
                        _.Ch)(l)) ? (e.exit("thematicBreak"),
                        t(l)) : n(l)
                    }(l)
                }
            }
        }
          , en = {
            name: "list",
            tokenize: function(e, t, n) {
                let r = this
                  , o = r.events[r.events.length - 1]
                  , i = o && "linePrefix" === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0
                  , l = 0;
                return function(t) {
                    let o = r.containerState.type || (42 === t || 43 === t || 45 === t ? "listUnordered" : "listOrdered");
                    if ("listUnordered" === o ? !r.containerState.marker || t === r.containerState.marker : (0,
                    _.pY)(t)) {
                        if (r.containerState.type || (r.containerState.type = o,
                        e.enter(o, {
                            _container: !0
                        })),
                        "listUnordered" === o)
                            return e.enter("listItemPrefix"),
                            42 === t || 45 === t ? e.check(et, n, a)(t) : a(t);
                        if (!r.interrupt || 49 === t)
                            return e.enter("listItemPrefix"),
                            e.enter("listItemValue"),
                            function t(o) {
                                return (0,
                                _.pY)(o) && ++l < 10 ? (e.consume(o),
                                t) : (!r.interrupt || l < 2) && (r.containerState.marker ? o === r.containerState.marker : 41 === o || 46 === o) ? (e.exit("listItemValue"),
                                a(o)) : n(o)
                            }(t)
                    }
                    return n(t)
                }
                ;
                function a(t) {
                    return e.enter("listItemMarker"),
                    e.consume(t),
                    e.exit("listItemMarker"),
                    r.containerState.marker = r.containerState.marker || t,
                    e.check(U.w, r.interrupt ? n : u, e.attempt(er, c, s))
                }
                function u(e) {
                    return r.containerState.initialBlankLine = !0,
                    i++,
                    c(e)
                }
                function s(t) {
                    return (0,
                    _.xz)(t) ? (e.enter("listItemPrefixWhitespace"),
                    e.consume(t),
                    e.exit("listItemPrefixWhitespace"),
                    c) : n(t)
                }
                function c(n) {
                    return r.containerState.size = i + r.sliceSerialize(e.exit("listItemPrefix"), !0).length,
                    t(n)
                }
            },
            continuation: {
                tokenize: function(e, t, n) {
                    let r = this;
                    return r.containerState._closeFlow = void 0,
                    e.check(U.w, function(n) {
                        return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine,
                        (0,
                        j.f)(e, t, "listItemIndent", r.containerState.size + 1)(n)
                    }, function(n) {
                        return r.containerState.furtherBlankLines || !(0,
                        _.xz)(n) ? (r.containerState.furtherBlankLines = void 0,
                        r.containerState.initialBlankLine = void 0,
                        o(n)) : (r.containerState.furtherBlankLines = void 0,
                        r.containerState.initialBlankLine = void 0,
                        e.attempt(eo, t, o)(n))
                    });
                    function o(o) {
                        return r.containerState._closeFlow = !0,
                        r.interrupt = void 0,
                        (0,
                        j.f)(e, e.attempt(en, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o)
                    }
                }
            },
            exit: function(e) {
                e.exit(this.containerState.type)
            }
        }
          , er = {
            tokenize: function(e, t, n) {
                let r = this;
                return (0,
                j.f)(e, function(e) {
                    let o = r.events[r.events.length - 1];
                    return !(0,
                    _.xz)(e) && o && "listItemPrefixWhitespace" === o[1].type ? t(e) : n(e)
                }, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5)
            },
            partial: !0
        }
          , eo = {
            tokenize: function(e, t, n) {
                let r = this;
                return (0,
                j.f)(e, function(e) {
                    let o = r.events[r.events.length - 1];
                    return o && "listItemIndent" === o[1].type && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? t(e) : n(e)
                }, "listItemIndent", r.containerState.size + 1)
            },
            partial: !0
        }
          , ei = {
            name: "blockQuote",
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    if (62 === t) {
                        let i = r.containerState;
                        return i.open || (e.enter("blockQuote", {
                            _container: !0
                        }),
                        i.open = !0),
                        e.enter("blockQuotePrefix"),
                        e.enter("blockQuoteMarker"),
                        e.consume(t),
                        e.exit("blockQuoteMarker"),
                        o
                    }
                    return n(t)
                }
                ;
                function o(n) {
                    return (0,
                    _.xz)(n) ? (e.enter("blockQuotePrefixWhitespace"),
                    e.consume(n),
                    e.exit("blockQuotePrefixWhitespace"),
                    e.exit("blockQuotePrefix"),
                    t) : (e.exit("blockQuotePrefix"),
                    t(n))
                }
            },
            continuation: {
                tokenize: function(e, t, n) {
                    let r = this;
                    return function(t) {
                        return (0,
                        _.xz)(t) ? (0,
                        j.f)(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : o(t)
                    }
                    ;
                    function o(r) {
                        return e.attempt(ei, t, n)(r)
                    }
                }
            },
            exit: function(e) {
                e.exit("blockQuote")
            }
        };
        function el(e, t, n, r, o, i, l, a, u) {
            let s = u || Number.POSITIVE_INFINITY
              , c = 0;
            return function(t) {
                return 60 === t ? (e.enter(r),
                e.enter(o),
                e.enter(i),
                e.consume(t),
                e.exit(i),
                f) : null === t || 32 === t || 41 === t || (0,
                _.Av)(t) ? n(t) : (e.enter(r),
                e.enter(l),
                e.enter(a),
                e.enter("chunkString", {
                    contentType: "string"
                }),
                h(t))
            }
            ;
            function f(n) {
                return 62 === n ? (e.enter(i),
                e.consume(n),
                e.exit(i),
                e.exit(o),
                e.exit(r),
                t) : (e.enter(a),
                e.enter("chunkString", {
                    contentType: "string"
                }),
                p(n))
            }
            function p(t) {
                return 62 === t ? (e.exit("chunkString"),
                e.exit(a),
                f(t)) : null === t || 60 === t || (0,
                _.Ch)(t) ? n(t) : (e.consume(t),
                92 === t ? d : p)
            }
            function d(t) {
                return 60 === t || 62 === t || 92 === t ? (e.consume(t),
                p) : p(t)
            }
            function h(o) {
                return !c && (null === o || 41 === o || (0,
                _.z3)(o)) ? (e.exit("chunkString"),
                e.exit(a),
                e.exit(l),
                e.exit(r),
                t(o)) : c < s && 40 === o ? (e.consume(o),
                c++,
                h) : 41 === o ? (e.consume(o),
                c--,
                h) : null === o || 32 === o || 40 === o || (0,
                _.Av)(o) ? n(o) : (e.consume(o),
                92 === o ? m : h)
            }
            function m(t) {
                return 40 === t || 41 === t || 92 === t ? (e.consume(t),
                h) : h(t)
            }
        }
        function ea(e, t, n, r, o, i) {
            let l = this, a = 0, u;
            return function(t) {
                return e.enter(r),
                e.enter(o),
                e.consume(t),
                e.exit(o),
                e.enter(i),
                s
            }
            ;
            function s(f) {
                return a > 999 || null === f || 91 === f || 93 === f && !u || 94 === f && !a && "_hiddenFootnoteSupport"in l.parser.constructs ? n(f) : 93 === f ? (e.exit(i),
                e.enter(o),
                e.consume(f),
                e.exit(o),
                e.exit(r),
                t) : (0,
                _.Ch)(f) ? (e.enter("lineEnding"),
                e.consume(f),
                e.exit("lineEnding"),
                s) : (e.enter("chunkString", {
                    contentType: "string"
                }),
                c(f))
            }
            function c(t) {
                return null === t || 91 === t || 93 === t || (0,
                _.Ch)(t) || a++ > 999 ? (e.exit("chunkString"),
                s(t)) : (e.consume(t),
                u || (u = !(0,
                _.xz)(t)),
                92 === t ? f : c)
            }
            function f(t) {
                return 91 === t || 92 === t || 93 === t ? (e.consume(t),
                a++,
                c) : c(t)
            }
        }
        function eu(e, t, n, r, o, i) {
            let l;
            return function(t) {
                return 34 === t || 39 === t || 40 === t ? (e.enter(r),
                e.enter(o),
                e.consume(t),
                e.exit(o),
                l = 40 === t ? 41 : t,
                a) : n(t)
            }
            ;
            function a(n) {
                return n === l ? (e.enter(o),
                e.consume(n),
                e.exit(o),
                e.exit(r),
                t) : (e.enter(i),
                u(n))
            }
            function u(t) {
                return t === l ? (e.exit(i),
                a(l)) : null === t ? n(t) : (0,
                _.Ch)(t) ? (e.enter("lineEnding"),
                e.consume(t),
                e.exit("lineEnding"),
                (0,
                j.f)(e, u, "linePrefix")) : (e.enter("chunkString", {
                    contentType: "string"
                }),
                s(t))
            }
            function s(t) {
                return t === l || null === t || (0,
                _.Ch)(t) ? (e.exit("chunkString"),
                u(t)) : (e.consume(t),
                92 === t ? c : s)
            }
            function c(t) {
                return t === l || 92 === t ? (e.consume(t),
                s) : s(t)
            }
        }
        function es(e, t) {
            let n;
            return r;
            function r(o) {
                return (0,
                _.Ch)(o) ? (e.enter("lineEnding"),
                e.consume(o),
                e.exit("lineEnding"),
                n = !0,
                r) : (0,
                _.xz)(o) ? (0,
                j.f)(e, r, n ? "linePrefix" : "lineSuffix")(o) : t(o)
            }
        }
        var ec = n(11098);
        let ef = {
            tokenize: function(e, t, n) {
                return function(t) {
                    return (0,
                    _.z3)(t) ? es(e, r)(t) : n(t)
                }
                ;
                function r(t) {
                    return eu(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t)
                }
                function o(t) {
                    return (0,
                    _.xz)(t) ? (0,
                    j.f)(e, i, "whitespace")(t) : i(t)
                }
                function i(e) {
                    return null === e || (0,
                    _.Ch)(e) ? t(e) : n(e)
                }
            },
            partial: !0
        }
          , ep = {
            name: "codeIndented",
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return e.enter("codeIndented"),
                    (0,
                    j.f)(e, o, "linePrefix", 5)(t)
                }
                ;
                function o(t) {
                    let o = r.events[r.events.length - 1];
                    return o && "linePrefix" === o[1].type && o[2].sliceSerialize(o[1], !0).length >= 4 ? function t(n) {
                        return null === n ? i(n) : (0,
                        _.Ch)(n) ? e.attempt(ed, t, i)(n) : (e.enter("codeFlowValue"),
                        function n(r) {
                            return null === r || (0,
                            _.Ch)(r) ? (e.exit("codeFlowValue"),
                            t(r)) : (e.consume(r),
                            n)
                        }(n))
                    }(t) : n(t)
                }
                function i(n) {
                    return e.exit("codeIndented"),
                    t(n)
                }
            }
        }
          , ed = {
            tokenize: function(e, t, n) {
                let r = this;
                return o;
                function o(t) {
                    return r.parser.lazy[r.now().line] ? n(t) : (0,
                    _.Ch)(t) ? (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    o) : (0,
                    j.f)(e, i, "linePrefix", 5)(t)
                }
                function i(e) {
                    let i = r.events[r.events.length - 1];
                    return i && "linePrefix" === i[1].type && i[2].sliceSerialize(i[1], !0).length >= 4 ? t(e) : (0,
                    _.Ch)(e) ? o(e) : n(e)
                }
            },
            partial: !0
        }
          , eh = {
            name: "setextUnderline",
            tokenize: function(e, t, n) {
                let r = this, o;
                return function(t) {
                    var l;
                    let a = r.events.length, u;
                    for (; a--; )
                        if ("lineEnding" !== r.events[a][1].type && "linePrefix" !== r.events[a][1].type && "content" !== r.events[a][1].type) {
                            u = "paragraph" === r.events[a][1].type;
                            break
                        }
                    return !r.parser.lazy[r.now().line] && (r.interrupt || u) ? (e.enter("setextHeadingLine"),
                    o = t,
                    l = t,
                    e.enter("setextHeadingLineSequence"),
                    function t(n) {
                        return n === o ? (e.consume(n),
                        t) : (e.exit("setextHeadingLineSequence"),
                        (0,
                        _.xz)(n) ? (0,
                        j.f)(e, i, "lineSuffix")(n) : i(n))
                    }(l)) : n(t)
                }
                ;
                function i(r) {
                    return null === r || (0,
                    _.Ch)(r) ? (e.exit("setextHeadingLine"),
                    t(r)) : n(r)
                }
            },
            resolveTo: function(e, t) {
                let n = e.length, r, o, i;
                for (; n--; )
                    if ("enter" === e[n][0]) {
                        if ("content" === e[n][1].type) {
                            r = n;
                            break
                        }
                        "paragraph" === e[n][1].type && (o = n)
                    } else
                        "content" === e[n][1].type && e.splice(n, 1),
                        i || "definition" !== e[n][1].type || (i = n);
                let l = {
                    type: "setextHeading",
                    start: Object.assign({}, e[o][1].start),
                    end: Object.assign({}, e[e.length - 1][1].end)
                };
                return e[o][1].type = "setextHeadingText",
                i ? (e.splice(o, 0, ["enter", l, t]),
                e.splice(i + 1, 0, ["exit", e[r][1], t]),
                e[r][1].end = Object.assign({}, e[i][1].end)) : e[r][1] = l,
                e.push(["exit", l, t]),
                e
            }
        }
          , em = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "search", "section", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"]
          , eg = ["pre", "script", "style", "textarea"]
          , ey = {
            tokenize: function(e, t, n) {
                return function(r) {
                    return e.enter("lineEnding"),
                    e.consume(r),
                    e.exit("lineEnding"),
                    e.attempt(U.w, t, n)
                }
            },
            partial: !0
        }
          , eb = {
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return (0,
                    _.Ch)(t) ? (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    o) : n(t)
                }
                ;
                function o(e) {
                    return r.parser.lazy[r.now().line] ? n(e) : t(e)
                }
            },
            partial: !0
        }
          , ev = {
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return null === t ? n(t) : (e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    o)
                }
                ;
                function o(e) {
                    return r.parser.lazy[r.now().line] ? n(e) : t(e)
                }
            },
            partial: !0
        }
          , ex = {
            name: "codeFenced",
            tokenize: function(e, t, n) {
                let r = this, o = {
                    tokenize: function(e, t, n) {
                        let o = 0;
                        return function(t) {
                            return e.enter("lineEnding"),
                            e.consume(t),
                            e.exit("lineEnding"),
                            i
                        }
                        ;
                        function i(t) {
                            return e.enter("codeFencedFence"),
                            (0,
                            _.xz)(t) ? (0,
                            j.f)(e, u, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : u(t)
                        }
                        function u(t) {
                            return t === a ? (e.enter("codeFencedFenceSequence"),
                            function t(r) {
                                return r === a ? (o++,
                                e.consume(r),
                                t) : o >= l ? (e.exit("codeFencedFenceSequence"),
                                (0,
                                _.xz)(r) ? (0,
                                j.f)(e, s, "whitespace")(r) : s(r)) : n(r)
                            }(t)) : n(t)
                        }
                        function s(r) {
                            return null === r || (0,
                            _.Ch)(r) ? (e.exit("codeFencedFence"),
                            t(r)) : n(r)
                        }
                    },
                    partial: !0
                }, i = 0, l = 0, a;
                return u;
                function u(e) {
                    return s(e)
                }
                function s(t) {
                    let o = r.events[r.events.length - 1];
                    return i = o && "linePrefix" === o[1].type ? o[2].sliceSerialize(o[1], !0).length : 0,
                    a = t,
                    e.enter("codeFenced"),
                    e.enter("codeFencedFence"),
                    e.enter("codeFencedFenceSequence"),
                    function t(r) {
                        return r === a ? (l++,
                        e.consume(r),
                        t) : l < 3 ? n(r) : (e.exit("codeFencedFenceSequence"),
                        (0,
                        _.xz)(r) ? (0,
                        j.f)(e, c, "whitespace")(r) : c(r))
                    }(t)
                }
                function c(o) {
                    return null === o || (0,
                    _.Ch)(o) ? (e.exit("codeFencedFence"),
                    r.interrupt ? t(o) : e.check(ev, p, g)(o)) : (e.enter("codeFencedFenceInfo"),
                    e.enter("chunkString", {
                        contentType: "string"
                    }),
                    function t(r) {
                        return null === r || (0,
                        _.Ch)(r) ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        c(r)) : (0,
                        _.xz)(r) ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceInfo"),
                        (0,
                        j.f)(e, f, "whitespace")(r)) : 96 === r && r === a ? n(r) : (e.consume(r),
                        t)
                    }(o))
                }
                function f(t) {
                    return null === t || (0,
                    _.Ch)(t) ? c(t) : (e.enter("codeFencedFenceMeta"),
                    e.enter("chunkString", {
                        contentType: "string"
                    }),
                    function t(r) {
                        return null === r || (0,
                        _.Ch)(r) ? (e.exit("chunkString"),
                        e.exit("codeFencedFenceMeta"),
                        c(r)) : 96 === r && r === a ? n(r) : (e.consume(r),
                        t)
                    }(t))
                }
                function p(t) {
                    return e.attempt(o, g, d)(t)
                }
                function d(t) {
                    return e.enter("lineEnding"),
                    e.consume(t),
                    e.exit("lineEnding"),
                    h
                }
                function h(t) {
                    return i > 0 && (0,
                    _.xz)(t) ? (0,
                    j.f)(e, m, "linePrefix", i + 1)(t) : m(t)
                }
                function m(t) {
                    return null === t || (0,
                    _.Ch)(t) ? e.check(ev, p, g)(t) : (e.enter("codeFlowValue"),
                    function t(n) {
                        return null === n || (0,
                        _.Ch)(n) ? (e.exit("codeFlowValue"),
                        m(n)) : (e.consume(n),
                        t)
                    }(t))
                }
                function g(n) {
                    return e.exit("codeFenced"),
                    t(n)
                }
            },
            concrete: !0
        };
        var ek = n(44301);
        let ew = {
            name: "characterReference",
            tokenize: function(e, t, n) {
                let r = this, o = 0, i, l;
                return function(t) {
                    return e.enter("characterReference"),
                    e.enter("characterReferenceMarker"),
                    e.consume(t),
                    e.exit("characterReferenceMarker"),
                    a
                }
                ;
                function a(t) {
                    return 35 === t ? (e.enter("characterReferenceMarkerNumeric"),
                    e.consume(t),
                    e.exit("characterReferenceMarkerNumeric"),
                    u) : (e.enter("characterReferenceValue"),
                    i = 31,
                    l = _.H$,
                    s(t))
                }
                function u(t) {
                    return 88 === t || 120 === t ? (e.enter("characterReferenceMarkerHexadecimal"),
                    e.consume(t),
                    e.exit("characterReferenceMarkerHexadecimal"),
                    e.enter("characterReferenceValue"),
                    i = 6,
                    l = _.AF,
                    s) : (e.enter("characterReferenceValue"),
                    i = 7,
                    l = _.pY,
                    s(t))
                }
                function s(a) {
                    if (59 === a && o) {
                        let u = e.exit("characterReferenceValue");
                        return l !== _.H$ || (0,
                        ek.T)(r.sliceSerialize(u)) ? (e.enter("characterReferenceMarker"),
                        e.consume(a),
                        e.exit("characterReferenceMarker"),
                        e.exit("characterReference"),
                        t) : n(a)
                    }
                    return l(a) && o++ < i ? (e.consume(a),
                    s) : n(a)
                }
            }
        }
          , eS = {
            name: "characterEscape",
            tokenize: function(e, t, n) {
                return function(t) {
                    return e.enter("characterEscape"),
                    e.enter("escapeMarker"),
                    e.consume(t),
                    e.exit("escapeMarker"),
                    r
                }
                ;
                function r(r) {
                    return (0,
                    _.sR)(r) ? (e.enter("characterEscapeValue"),
                    e.consume(r),
                    e.exit("characterEscapeValue"),
                    e.exit("characterEscape"),
                    t) : n(r)
                }
            }
        }
          , eE = {
            name: "lineEnding",
            tokenize: function(e, t) {
                return function(n) {
                    return e.enter("lineEnding"),
                    e.consume(n),
                    e.exit("lineEnding"),
                    (0,
                    j.f)(e, t, "linePrefix")
                }
            }
        }
          , eC = {
            name: "labelEnd",
            tokenize: function(e, t, n) {
                let r = this, o = r.events.length, i, l;
                for (; o--; )
                    if (("labelImage" === r.events[o][1].type || "labelLink" === r.events[o][1].type) && !r.events[o][1]._balanced) {
                        i = r.events[o][1];
                        break
                    }
                return function(t) {
                    return i ? i._inactive ? c(t) : (l = r.parser.defined.includes((0,
                    ec.d)(r.sliceSerialize({
                        start: i.end,
                        end: r.now()
                    }))),
                    e.enter("labelEnd"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelEnd"),
                    a) : n(t)
                }
                ;
                function a(t) {
                    return 40 === t ? e.attempt(eT, s, l ? s : c)(t) : 91 === t ? e.attempt(eA, s, l ? u : c)(t) : l ? s(t) : c(t)
                }
                function u(t) {
                    return e.attempt(eO, s, c)(t)
                }
                function s(e) {
                    return t(e)
                }
                function c(e) {
                    return i._balanced = !0,
                    n(e)
                }
            },
            resolveTo: function(e, t) {
                let n = e.length, r = 0, o, i, l, a;
                for (; n--; )
                    if (o = e[n][1],
                    i) {
                        if ("link" === o.type || "labelLink" === o.type && o._inactive)
                            break;
                        "enter" === e[n][0] && "labelLink" === o.type && (o._inactive = !0)
                    } else if (l) {
                        if ("enter" === e[n][0] && ("labelImage" === o.type || "labelLink" === o.type) && !o._balanced && (i = n,
                        "labelLink" !== o.type)) {
                            r = 2;
                            break
                        }
                    } else
                        "labelEnd" === o.type && (l = n);
                let u = {
                    type: "labelLink" === e[i][1].type ? "link" : "image",
                    start: Object.assign({}, e[i][1].start),
                    end: Object.assign({}, e[e.length - 1][1].end)
                }
                  , s = {
                    type: "label",
                    start: Object.assign({}, e[i][1].start),
                    end: Object.assign({}, e[l][1].end)
                }
                  , c = {
                    type: "labelText",
                    start: Object.assign({}, e[i + r + 2][1].end),
                    end: Object.assign({}, e[l - 2][1].start)
                };
                return a = [["enter", u, t], ["enter", s, t]],
                a = (0,
                B.V)(a, e.slice(i + 1, i + r + 3)),
                a = (0,
                B.V)(a, [["enter", c, t]]),
                a = (0,
                B.V)(a, (0,
                ee.C)(t.parser.constructs.insideSpan.null, e.slice(i + r + 4, l - 3), t)),
                a = (0,
                B.V)(a, [["exit", c, t], e[l - 2], e[l - 1], ["exit", s, t]]),
                a = (0,
                B.V)(a, e.slice(l + 1)),
                a = (0,
                B.V)(a, [["exit", u, t]]),
                (0,
                B.d)(e, i, e.length, a),
                e
            },
            resolveAll: function(e) {
                let t = -1;
                for (; ++t < e.length; ) {
                    let n = e[t][1];
                    ("labelImage" === n.type || "labelLink" === n.type || "labelEnd" === n.type) && (e.splice(t + 1, "labelImage" === n.type ? 4 : 2),
                    n.type = "data",
                    t++)
                }
                return e
            }
        }
          , eT = {
            tokenize: function(e, t, n) {
                return function(t) {
                    return e.enter("resource"),
                    e.enter("resourceMarker"),
                    e.consume(t),
                    e.exit("resourceMarker"),
                    r
                }
                ;
                function r(t) {
                    return (0,
                    _.z3)(t) ? es(e, o)(t) : o(t)
                }
                function o(t) {
                    return 41 === t ? s(t) : el(e, i, l, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t)
                }
                function i(t) {
                    return (0,
                    _.z3)(t) ? es(e, a)(t) : s(t)
                }
                function l(e) {
                    return n(e)
                }
                function a(t) {
                    return 34 === t || 39 === t || 40 === t ? eu(e, u, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : s(t)
                }
                function u(t) {
                    return (0,
                    _.z3)(t) ? es(e, s)(t) : s(t)
                }
                function s(r) {
                    return 41 === r ? (e.enter("resourceMarker"),
                    e.consume(r),
                    e.exit("resourceMarker"),
                    e.exit("resource"),
                    t) : n(r)
                }
            }
        }
          , eA = {
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return ea.call(r, e, o, i, "reference", "referenceMarker", "referenceString")(t)
                }
                ;
                function o(e) {
                    return r.parser.defined.includes((0,
                    ec.d)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e)
                }
                function i(e) {
                    return n(e)
                }
            }
        }
          , eO = {
            tokenize: function(e, t, n) {
                return function(t) {
                    return e.enter("reference"),
                    e.enter("referenceMarker"),
                    e.consume(t),
                    e.exit("referenceMarker"),
                    r
                }
                ;
                function r(r) {
                    return 93 === r ? (e.enter("referenceMarker"),
                    e.consume(r),
                    e.exit("referenceMarker"),
                    e.exit("reference"),
                    t) : n(r)
                }
            }
        }
          , eL = {
            name: "labelStartImage",
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return e.enter("labelImage"),
                    e.enter("labelImageMarker"),
                    e.consume(t),
                    e.exit("labelImageMarker"),
                    o
                }
                ;
                function o(t) {
                    return 91 === t ? (e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelImage"),
                    i) : n(t)
                }
                function i(e) {
                    return 94 === e && "_hiddenFootnoteSupport"in r.parser.constructs ? n(e) : t(e)
                }
            },
            resolveAll: eC.resolveAll
        };
        var eP = n(62987);
        let eF = {
            name: "attention",
            tokenize: function(e, t) {
                let n = this.parser.constructs.attentionMarkers.null, r = this.previous, o = (0,
                eP.r)(r), i;
                return function(l) {
                    return i = l,
                    e.enter("attentionSequence"),
                    function l(a) {
                        if (a === i)
                            return e.consume(a),
                            l;
                        let u = e.exit("attentionSequence")
                          , s = (0,
                        eP.r)(a)
                          , c = !s || 2 === s && o || n.includes(a)
                          , f = !o || 2 === o && s || n.includes(r);
                        return u._open = Boolean(42 === i ? c : c && (o || !f)),
                        u._close = Boolean(42 === i ? f : f && (s || !c)),
                        t(a)
                    }(l)
                }
            },
            resolveAll: function(e, t) {
                let n = -1, r, o, i, l, a, u, s, c;
                for (; ++n < e.length; )
                    if ("enter" === e[n][0] && "attentionSequence" === e[n][1].type && e[n][1]._close) {
                        for (r = n; r--; )
                            if ("exit" === e[r][0] && "attentionSequence" === e[r][1].type && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
                                if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
                                    continue;
                                u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
                                let f = Object.assign({}, e[r][1].end)
                                  , p = Object.assign({}, e[n][1].start);
                                eD(f, -u),
                                eD(p, u),
                                l = {
                                    type: u > 1 ? "strongSequence" : "emphasisSequence",
                                    start: f,
                                    end: Object.assign({}, e[r][1].end)
                                },
                                a = {
                                    type: u > 1 ? "strongSequence" : "emphasisSequence",
                                    start: Object.assign({}, e[n][1].start),
                                    end: p
                                },
                                i = {
                                    type: u > 1 ? "strongText" : "emphasisText",
                                    start: Object.assign({}, e[r][1].end),
                                    end: Object.assign({}, e[n][1].start)
                                },
                                o = {
                                    type: u > 1 ? "strong" : "emphasis",
                                    start: Object.assign({}, l.start),
                                    end: Object.assign({}, a.end)
                                },
                                e[r][1].end = Object.assign({}, l.start),
                                e[n][1].start = Object.assign({}, a.end),
                                s = [],
                                e[r][1].end.offset - e[r][1].start.offset && (s = (0,
                                B.V)(s, [["enter", e[r][1], t], ["exit", e[r][1], t]])),
                                s = (0,
                                B.V)(s, [["enter", o, t], ["enter", l, t], ["exit", l, t], ["enter", i, t]]),
                                s = (0,
                                B.V)(s, (0,
                                ee.C)(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)),
                                s = (0,
                                B.V)(s, [["exit", i, t], ["enter", a, t], ["exit", a, t], ["exit", o, t]]),
                                e[n][1].end.offset - e[n][1].start.offset ? (c = 2,
                                s = (0,
                                B.V)(s, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0,
                                (0,
                                B.d)(e, r - 1, n - r + 3, s),
                                n = r + s.length - c - 2;
                                break
                            }
                    }
                for (n = -1; ++n < e.length; )
                    "attentionSequence" === e[n][1].type && (e[n][1].type = "data");
                return e
            }
        };
        function eD(e, t) {
            e.column += t,
            e.offset += t,
            e._bufferIndex += t
        }
        let eI = {
            name: "labelStartLink",
            tokenize: function(e, t, n) {
                let r = this;
                return function(t) {
                    return e.enter("labelLink"),
                    e.enter("labelMarker"),
                    e.consume(t),
                    e.exit("labelMarker"),
                    e.exit("labelLink"),
                    o
                }
                ;
                function o(e) {
                    return 94 === e && "_hiddenFootnoteSupport"in r.parser.constructs ? n(e) : t(e)
                }
            },
            resolveAll: eC.resolveAll
        }
          , ez = {
            42: en,
            43: en,
            45: en,
            48: en,
            49: en,
            50: en,
            51: en,
            52: en,
            53: en,
            54: en,
            55: en,
            56: en,
            57: en,
            62: ei
        }
          , eR = {
            91: {
                name: "definition",
                tokenize: function(e, t, n) {
                    let r = this, o;
                    return function(t) {
                        var o;
                        return e.enter("definition"),
                        o = t,
                        ea.call(r, e, i, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(o)
                    }
                    ;
                    function i(t) {
                        return (o = (0,
                        ec.d)(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)),
                        58 === t) ? (e.enter("definitionMarker"),
                        e.consume(t),
                        e.exit("definitionMarker"),
                        l) : n(t)
                    }
                    function l(t) {
                        return (0,
                        _.z3)(t) ? es(e, a)(t) : a(t)
                    }
                    function a(t) {
                        return el(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t)
                    }
                    function u(t) {
                        return e.attempt(ef, s, s)(t)
                    }
                    function s(t) {
                        return (0,
                        _.xz)(t) ? (0,
                        j.f)(e, c, "whitespace")(t) : c(t)
                    }
                    function c(i) {
                        return null === i || (0,
                        _.Ch)(i) ? (e.exit("definition"),
                        r.parser.defined.push(o),
                        t(i)) : n(i)
                    }
                }
            }
        }
          , ej = {
            [-2]: ep,
            [-1]: ep,
            32: ep
        }
          , e_ = {
            35: {
                name: "headingAtx",
                tokenize: function(e, t, n) {
                    let r = 0;
                    return function(o) {
                        var i;
                        return e.enter("atxHeading"),
                        i = o,
                        e.enter("atxHeadingSequence"),
                        function o(i) {
                            return 35 === i && r++ < 6 ? (e.consume(i),
                            o) : null === i || (0,
                            _.z3)(i) ? (e.exit("atxHeadingSequence"),
                            function n(r) {
                                return 35 === r ? (e.enter("atxHeadingSequence"),
                                function t(r) {
                                    return 35 === r ? (e.consume(r),
                                    t) : (e.exit("atxHeadingSequence"),
                                    n(r))
                                }(r)) : null === r || (0,
                                _.Ch)(r) ? (e.exit("atxHeading"),
                                t(r)) : (0,
                                _.xz)(r) ? (0,
                                j.f)(e, n, "whitespace")(r) : (e.enter("atxHeadingText"),
                                function t(r) {
                                    return null === r || 35 === r || (0,
                                    _.z3)(r) ? (e.exit("atxHeadingText"),
                                    n(r)) : (e.consume(r),
                                    t)
                                }(r))
                            }(i)) : n(i)
                        }(i)
                    }
                },
                resolve: function(e, t) {
                    let n = e.length - 2, r = 3, o, i;
                    return "whitespace" === e[r][1].type && (r += 2),
                    n - 2 > r && "whitespace" === e[n][1].type && (n -= 2),
                    "atxHeadingSequence" === e[n][1].type && (r === n - 1 || n - 4 > r && "whitespace" === e[n - 2][1].type) && (n -= r + 1 === n ? 2 : 4),
                    n > r && (o = {
                        type: "atxHeadingText",
                        start: e[r][1].start,
                        end: e[n][1].end
                    },
                    i = {
                        type: "chunkText",
                        start: e[r][1].start,
                        end: e[n][1].end,
                        contentType: "text"
                    },
                    (0,
                    B.d)(e, r, n - r + 1, [["enter", o, t], ["enter", i, t], ["exit", i, t], ["exit", o, t]])),
                    e
                }
            },
            42: et,
            45: [eh, et],
            60: {
                name: "htmlFlow",
                tokenize: function(e, t, n) {
                    let r = this, o, i, l, a, u;
                    return s;
                    function s(e) {
                        return c(e)
                    }
                    function c(t) {
                        return e.enter("htmlFlow"),
                        e.enter("htmlFlowData"),
                        e.consume(t),
                        f
                    }
                    function f(a) {
                        return 33 === a ? (e.consume(a),
                        p) : 47 === a ? (e.consume(a),
                        i = !0,
                        m) : 63 === a ? (e.consume(a),
                        o = 3,
                        r.interrupt ? t : z) : (0,
                        _.jv)(a) ? (e.consume(a),
                        l = String.fromCharCode(a),
                        g) : n(a)
                    }
                    function p(i) {
                        return 45 === i ? (e.consume(i),
                        o = 2,
                        d) : 91 === i ? (e.consume(i),
                        o = 5,
                        a = 0,
                        h) : (0,
                        _.jv)(i) ? (e.consume(i),
                        o = 4,
                        r.interrupt ? t : z) : n(i)
                    }
                    function d(o) {
                        return 45 === o ? (e.consume(o),
                        r.interrupt ? t : z) : n(o)
                    }
                    function h(o) {
                        let i = "CDATA[";
                        return o === i.charCodeAt(a++) ? (e.consume(o),
                        a === i.length) ? r.interrupt ? t : T : h : n(o)
                    }
                    function m(t) {
                        return (0,
                        _.jv)(t) ? (e.consume(t),
                        l = String.fromCharCode(t),
                        g) : n(t)
                    }
                    function g(a) {
                        if (null === a || 47 === a || 62 === a || (0,
                        _.z3)(a)) {
                            let u = 47 === a
                              , s = l.toLowerCase();
                            return !u && !i && eg.includes(s) ? (o = 1,
                            r.interrupt ? t(a) : T(a)) : em.includes(l.toLowerCase()) ? (o = 6,
                            u) ? (e.consume(a),
                            y) : r.interrupt ? t(a) : T(a) : (o = 7,
                            r.interrupt && !r.parser.lazy[r.now().line] ? n(a) : i ? function t(n) {
                                return (0,
                                _.xz)(n) ? (e.consume(n),
                                t) : E(n)
                            }(a) : b(a))
                        }
                        return 45 === a || (0,
                        _.H$)(a) ? (e.consume(a),
                        l += String.fromCharCode(a),
                        g) : n(a)
                    }
                    function y(o) {
                        return 62 === o ? (e.consume(o),
                        r.interrupt ? t : T) : n(o)
                    }
                    function b(t) {
                        return 47 === t ? (e.consume(t),
                        E) : 58 === t || 95 === t || (0,
                        _.jv)(t) ? (e.consume(t),
                        v) : (0,
                        _.xz)(t) ? (e.consume(t),
                        b) : E(t)
                    }
                    function v(t) {
                        return 45 === t || 46 === t || 58 === t || 95 === t || (0,
                        _.H$)(t) ? (e.consume(t),
                        v) : x(t)
                    }
                    function x(t) {
                        return 61 === t ? (e.consume(t),
                        k) : (0,
                        _.xz)(t) ? (e.consume(t),
                        x) : b(t)
                    }
                    function k(t) {
                        return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t),
                        u = t,
                        w) : (0,
                        _.xz)(t) ? (e.consume(t),
                        k) : function t(n) {
                            return null === n || 34 === n || 39 === n || 47 === n || 60 === n || 61 === n || 62 === n || 96 === n || (0,
                            _.z3)(n) ? x(n) : (e.consume(n),
                            t)
                        }(t)
                    }
                    function w(t) {
                        return t === u ? (e.consume(t),
                        u = null,
                        S) : null === t || (0,
                        _.Ch)(t) ? n(t) : (e.consume(t),
                        w)
                    }
                    function S(e) {
                        return 47 === e || 62 === e || (0,
                        _.xz)(e) ? b(e) : n(e)
                    }
                    function E(t) {
                        return 62 === t ? (e.consume(t),
                        C) : n(t)
                    }
                    function C(t) {
                        return null === t || (0,
                        _.Ch)(t) ? T(t) : (0,
                        _.xz)(t) ? (e.consume(t),
                        C) : n(t)
                    }
                    function T(t) {
                        return 45 === t && 2 === o ? (e.consume(t),
                        P) : 60 === t && 1 === o ? (e.consume(t),
                        F) : 62 === t && 4 === o ? (e.consume(t),
                        R) : 63 === t && 3 === o ? (e.consume(t),
                        z) : 93 === t && 5 === o ? (e.consume(t),
                        I) : (0,
                        _.Ch)(t) && (6 === o || 7 === o) ? (e.exit("htmlFlowData"),
                        e.check(ey, j, A)(t)) : null === t || (0,
                        _.Ch)(t) ? (e.exit("htmlFlowData"),
                        A(t)) : (e.consume(t),
                        T)
                    }
                    function A(t) {
                        return e.check(eb, O, j)(t)
                    }
                    function O(t) {
                        return e.enter("lineEnding"),
                        e.consume(t),
                        e.exit("lineEnding"),
                        L
                    }
                    function L(t) {
                        return null === t || (0,
                        _.Ch)(t) ? A(t) : (e.enter("htmlFlowData"),
                        T(t))
                    }
                    function P(t) {
                        return 45 === t ? (e.consume(t),
                        z) : T(t)
                    }
                    function F(t) {
                        return 47 === t ? (e.consume(t),
                        l = "",
                        D) : T(t)
                    }
                    function D(t) {
                        if (62 === t) {
                            let n = l.toLowerCase();
                            return eg.includes(n) ? (e.consume(t),
                            R) : T(t)
                        }
                        return (0,
                        _.jv)(t) && l.length < 8 ? (e.consume(t),
                        l += String.fromCharCode(t),
                        D) : T(t)
                    }
                    function I(t) {
                        return 93 === t ? (e.consume(t),
                        z) : T(t)
                    }
                    function z(t) {
                        return 62 === t ? (e.consume(t),
                        R) : 45 === t && 2 === o ? (e.consume(t),
                        z) : T(t)
                    }
                    function R(t) {
                        return null === t || (0,
                        _.Ch)(t) ? (e.exit("htmlFlowData"),
                        j(t)) : (e.consume(t),
                        R)
                    }
                    function j(n) {
                        return e.exit("htmlFlow"),
                        t(n)
                    }
                },
                resolveTo: function(e) {
                    let t = e.length;
                    for (; t-- && ("enter" !== e[t][0] || "htmlFlow" !== e[t][1].type); )
                        ;
                    return t > 1 && "linePrefix" === e[t - 2][1].type && (e[t][1].start = e[t - 2][1].start,
                    e[t + 1][1].start = e[t - 2][1].start,
                    e.splice(t - 2, 2)),
                    e
                },
                concrete: !0
            },
            61: eh,
            95: et,
            96: ex,
            126: ex
        }
          , eM = {
            38: ew,
            92: eS
        }
          , eB = {
            [-5]: eE,
            [-4]: eE,
            [-3]: eE,
            33: eL,
            38: ew,
            42: eF,
            60: [{
                name: "autolink",
                tokenize: function(e, t, n) {
                    let r = 0;
                    return function(t) {
                        return e.enter("autolink"),
                        e.enter("autolinkMarker"),
                        e.consume(t),
                        e.exit("autolinkMarker"),
                        e.enter("autolinkProtocol"),
                        o
                    }
                    ;
                    function o(t) {
                        return (0,
                        _.jv)(t) ? (e.consume(t),
                        i) : a(t)
                    }
                    function i(t) {
                        return 43 === t || 45 === t || 46 === t || (0,
                        _.H$)(t) ? (r = 1,
                        function t(n) {
                            return 58 === n ? (e.consume(n),
                            r = 0,
                            l) : (43 === n || 45 === n || 46 === n || (0,
                            _.H$)(n)) && r++ < 32 ? (e.consume(n),
                            t) : (r = 0,
                            a(n))
                        }(t)) : a(t)
                    }
                    function l(r) {
                        return 62 === r ? (e.exit("autolinkProtocol"),
                        e.enter("autolinkMarker"),
                        e.consume(r),
                        e.exit("autolinkMarker"),
                        e.exit("autolink"),
                        t) : null === r || 32 === r || 60 === r || (0,
                        _.Av)(r) ? n(r) : (e.consume(r),
                        l)
                    }
                    function a(t) {
                        return 64 === t ? (e.consume(t),
                        u) : (0,
                        _.n9)(t) ? (e.consume(t),
                        a) : n(t)
                    }
                    function u(o) {
                        return (0,
                        _.H$)(o) ? function o(i) {
                            return 46 === i ? (e.consume(i),
                            r = 0,
                            u) : 62 === i ? (e.exit("autolinkProtocol").type = "autolinkEmail",
                            e.enter("autolinkMarker"),
                            e.consume(i),
                            e.exit("autolinkMarker"),
                            e.exit("autolink"),
                            t) : function t(i) {
                                return (45 === i || (0,
                                _.H$)(i)) && r++ < 63 ? (e.consume(i),
                                45 === i ? t : o) : n(i)
                            }(i)
                        }(o) : n(o)
                    }
                }
            }, {
                name: "htmlText",
                tokenize: function(e, t, n) {
                    let r = this, o, i, l;
                    return function(t) {
                        return e.enter("htmlText"),
                        e.enter("htmlTextData"),
                        e.consume(t),
                        a
                    }
                    ;
                    function a(t) {
                        return 33 === t ? (e.consume(t),
                        u) : 47 === t ? (e.consume(t),
                        x) : 63 === t ? (e.consume(t),
                        b) : (0,
                        _.jv)(t) ? (e.consume(t),
                        w) : n(t)
                    }
                    function u(t) {
                        return 45 === t ? (e.consume(t),
                        s) : 91 === t ? (e.consume(t),
                        i = 0,
                        d) : (0,
                        _.jv)(t) ? (e.consume(t),
                        y) : n(t)
                    }
                    function s(t) {
                        return 45 === t ? (e.consume(t),
                        p) : n(t)
                    }
                    function c(t) {
                        return null === t ? n(t) : 45 === t ? (e.consume(t),
                        f) : (0,
                        _.Ch)(t) ? (l = c,
                        P(t)) : (e.consume(t),
                        c)
                    }
                    function f(t) {
                        return 45 === t ? (e.consume(t),
                        p) : c(t)
                    }
                    function p(e) {
                        return 62 === e ? L(e) : 45 === e ? f(e) : c(e)
                    }
                    function d(t) {
                        let r = "CDATA[";
                        return t === r.charCodeAt(i++) ? (e.consume(t),
                        i === r.length ? h : d) : n(t)
                    }
                    function h(t) {
                        return null === t ? n(t) : 93 === t ? (e.consume(t),
                        m) : (0,
                        _.Ch)(t) ? (l = h,
                        P(t)) : (e.consume(t),
                        h)
                    }
                    function m(t) {
                        return 93 === t ? (e.consume(t),
                        g) : h(t)
                    }
                    function g(t) {
                        return 62 === t ? L(t) : 93 === t ? (e.consume(t),
                        g) : h(t)
                    }
                    function y(t) {
                        return null === t || 62 === t ? L(t) : (0,
                        _.Ch)(t) ? (l = y,
                        P(t)) : (e.consume(t),
                        y)
                    }
                    function b(t) {
                        return null === t ? n(t) : 63 === t ? (e.consume(t),
                        v) : (0,
                        _.Ch)(t) ? (l = b,
                        P(t)) : (e.consume(t),
                        b)
                    }
                    function v(e) {
                        return 62 === e ? L(e) : b(e)
                    }
                    function x(t) {
                        return (0,
                        _.jv)(t) ? (e.consume(t),
                        k) : n(t)
                    }
                    function k(t) {
                        return 45 === t || (0,
                        _.H$)(t) ? (e.consume(t),
                        k) : function t(n) {
                            return (0,
                            _.Ch)(n) ? (l = t,
                            P(n)) : (0,
                            _.xz)(n) ? (e.consume(n),
                            t) : L(n)
                        }(t)
                    }
                    function w(t) {
                        return 45 === t || (0,
                        _.H$)(t) ? (e.consume(t),
                        w) : 47 === t || 62 === t || (0,
                        _.z3)(t) ? S(t) : n(t)
                    }
                    function S(t) {
                        return 47 === t ? (e.consume(t),
                        L) : 58 === t || 95 === t || (0,
                        _.jv)(t) ? (e.consume(t),
                        E) : (0,
                        _.Ch)(t) ? (l = S,
                        P(t)) : (0,
                        _.xz)(t) ? (e.consume(t),
                        S) : L(t)
                    }
                    function E(t) {
                        return 45 === t || 46 === t || 58 === t || 95 === t || (0,
                        _.H$)(t) ? (e.consume(t),
                        E) : function t(n) {
                            return 61 === n ? (e.consume(n),
                            C) : (0,
                            _.Ch)(n) ? (l = t,
                            P(n)) : (0,
                            _.xz)(n) ? (e.consume(n),
                            t) : S(n)
                        }(t)
                    }
                    function C(t) {
                        return null === t || 60 === t || 61 === t || 62 === t || 96 === t ? n(t) : 34 === t || 39 === t ? (e.consume(t),
                        o = t,
                        T) : (0,
                        _.Ch)(t) ? (l = C,
                        P(t)) : (0,
                        _.xz)(t) ? (e.consume(t),
                        C) : (e.consume(t),
                        A)
                    }
                    function T(t) {
                        return t === o ? (e.consume(t),
                        o = void 0,
                        O) : null === t ? n(t) : (0,
                        _.Ch)(t) ? (l = T,
                        P(t)) : (e.consume(t),
                        T)
                    }
                    function A(t) {
                        return null === t || 34 === t || 39 === t || 60 === t || 61 === t || 96 === t ? n(t) : 47 === t || 62 === t || (0,
                        _.z3)(t) ? S(t) : (e.consume(t),
                        A)
                    }
                    function O(e) {
                        return 47 === e || 62 === e || (0,
                        _.z3)(e) ? S(e) : n(e)
                    }
                    function L(r) {
                        return 62 === r ? (e.consume(r),
                        e.exit("htmlTextData"),
                        e.exit("htmlText"),
                        t) : n(r)
                    }
                    function P(t) {
                        return e.exit("htmlTextData"),
                        e.enter("lineEnding"),
                        e.consume(t),
                        e.exit("lineEnding"),
                        F
                    }
                    function F(t) {
                        return (0,
                        _.xz)(t) ? (0,
                        j.f)(e, D, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : D(t)
                    }
                    function D(t) {
                        return e.enter("htmlTextData"),
                        l(t)
                    }
                }
            }],
            91: eI,
            92: [{
                name: "hardBreakEscape",
                tokenize: function(e, t, n) {
                    return function(t) {
                        return e.enter("hardBreakEscape"),
                        e.consume(t),
                        r
                    }
                    ;
                    function r(r) {
                        return (0,
                        _.Ch)(r) ? (e.exit("hardBreakEscape"),
                        t(r)) : n(r)
                    }
                }
            }, eS],
            93: eC,
            95: eF,
            96: {
                name: "codeText",
                tokenize: function(e, t, n) {
                    let r = 0, o, i;
                    return function(t) {
                        return e.enter("codeText"),
                        e.enter("codeTextSequence"),
                        function t(n) {
                            return 96 === n ? (e.consume(n),
                            r++,
                            t) : (e.exit("codeTextSequence"),
                            l(n))
                        }(t)
                    }
                    ;
                    function l(u) {
                        return null === u ? n(u) : 32 === u ? (e.enter("space"),
                        e.consume(u),
                        e.exit("space"),
                        l) : 96 === u ? (i = e.enter("codeTextSequence"),
                        o = 0,
                        function n(l) {
                            return 96 === l ? (e.consume(l),
                            o++,
                            n) : o === r ? (e.exit("codeTextSequence"),
                            e.exit("codeText"),
                            t(l)) : (i.type = "codeTextData",
                            a(l))
                        }(u)) : (0,
                        _.Ch)(u) ? (e.enter("lineEnding"),
                        e.consume(u),
                        e.exit("lineEnding"),
                        l) : (e.enter("codeTextData"),
                        a(u))
                    }
                    function a(t) {
                        return null === t || 32 === t || 96 === t || (0,
                        _.Ch)(t) ? (e.exit("codeTextData"),
                        l(t)) : (e.consume(t),
                        a)
                    }
                },
                resolve: function(e) {
                    let t = e.length - 4, n = 3, r, o;
                    if (("lineEnding" === e[n][1].type || "space" === e[n][1].type) && ("lineEnding" === e[t][1].type || "space" === e[t][1].type)) {
                        for (r = n; ++r < t; )
                            if ("codeTextData" === e[r][1].type) {
                                e[n][1].type = "codeTextPadding",
                                e[t][1].type = "codeTextPadding",
                                n += 2,
                                t -= 2;
                                break
                            }
                    }
                    for (r = n - 1,
                    t++; ++r <= t; )
                        void 0 === o ? r !== t && "lineEnding" !== e[r][1].type && (o = r) : (r === t || "lineEnding" === e[r][1].type) && (e[o][1].type = "codeTextData",
                        r !== o + 2 && (e[o][1].end = e[r - 1][1].end,
                        e.splice(o + 2, r - o - 2),
                        t -= r - o - 2,
                        r = o + 2),
                        o = void 0);
                    return e
                },
                previous: function(e) {
                    return 96 !== e || "characterEscape" === this.events[this.events.length - 1][1].type
                }
            }
        }
          , eH = {
            null: [eF, X]
        }
          , eN = {
            null: [42, 95]
        }
          , eU = {
            null: []
        }
          , eV = /[\0\t\n\r]/g;
        var eW = n(80889)
          , eq = n(47881);
        let e$ = {}.hasOwnProperty
          , eY = function(e, t, n) {
            "string" != typeof t && (n = t,
            t = void 0);
            let o, i, a, u;
            return (function(e) {
                let t = {
                    transforms: [],
                    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
                    enter: {
                        autolink: a(k),
                        autolinkProtocol: d,
                        autolinkEmail: d,
                        atxHeading: a(b),
                        blockQuote: a(function() {
                            return {
                                type: "blockquote",
                                children: []
                            }
                        }),
                        characterEscape: d,
                        characterReference: d,
                        codeFenced: a(y),
                        codeFencedFenceInfo: u,
                        codeFencedFenceMeta: u,
                        codeIndented: a(y, u),
                        codeText: a(function() {
                            return {
                                type: "inlineCode",
                                value: ""
                            }
                        }, u),
                        codeTextData: d,
                        data: d,
                        codeFlowValue: d,
                        definition: a(function() {
                            return {
                                type: "definition",
                                identifier: "",
                                label: null,
                                title: null,
                                url: ""
                            }
                        }),
                        definitionDestinationString: u,
                        definitionLabelString: u,
                        definitionTitleString: u,
                        emphasis: a(function() {
                            return {
                                type: "emphasis",
                                children: []
                            }
                        }),
                        hardBreakEscape: a(v),
                        hardBreakTrailing: a(v),
                        htmlFlow: a(x, u),
                        htmlFlowData: d,
                        htmlText: a(x, u),
                        htmlTextData: d,
                        image: a(function() {
                            return {
                                type: "image",
                                title: null,
                                url: "",
                                alt: null
                            }
                        }),
                        label: u,
                        link: a(k),
                        listItem: a(function(e) {
                            return {
                                type: "listItem",
                                spread: e._spread,
                                checked: null,
                                children: []
                            }
                        }),
                        listItemValue: function(e) {
                            var t, r;
                            if (n.expectingFirstListItemValue) {
                                let o = this.stack[this.stack.length - 2];
                                o.start = Number.parseInt(this.sliceSerialize(e), 10),
                                n[r = "expectingFirstListItemValue"] = void 0
                            }
                        },
                        listOrdered: a(w, function() {
                            var e, t;
                            n.expectingFirstListItemValue = !0
                        }),
                        listUnordered: a(w),
                        paragraph: a(function() {
                            return {
                                type: "paragraph",
                                children: []
                            }
                        }),
                        reference: function() {
                            var e, t;
                            n.referenceType = "collapsed"
                        },
                        referenceString: u,
                        resourceDestinationString: u,
                        resourceTitleString: u,
                        setextHeading: a(b),
                        strong: a(function() {
                            return {
                                type: "strong",
                                children: []
                            }
                        }),
                        thematicBreak: a(function() {
                            return {
                                type: "thematicBreak"
                            }
                        })
                    },
                    exit: {
                        atxHeading: c(),
                        atxHeadingSequence: function(e) {
                            let t = this.stack[this.stack.length - 1];
                            if (!t.depth) {
                                let n = this.sliceSerialize(e).length;
                                t.depth = n
                            }
                        },
                        autolink: c(),
                        autolinkEmail: function(e) {
                            h.call(this, e);
                            let t = this.stack[this.stack.length - 1];
                            t.url = "mailto:" + this.sliceSerialize(e)
                        },
                        autolinkProtocol: function(e) {
                            h.call(this, e);
                            let t = this.stack[this.stack.length - 1];
                            t.url = this.sliceSerialize(e)
                        },
                        blockQuote: c(),
                        characterEscapeValue: h,
                        characterReferenceMarkerHexadecimal: g,
                        characterReferenceMarkerNumeric: g,
                        characterReferenceValue: function(e) {
                            var t, r;
                            let o = this.sliceSerialize(e), i = n.characterReferenceType, l;
                            if (i)
                                l = (0,
                                eW.o)(o, "characterReferenceMarkerNumeric" === i ? 10 : 16),
                                n[r = "characterReferenceType"] = void 0;
                            else {
                                let a = (0,
                                ek.T)(o);
                                l = a
                            }
                            let u = this.stack.pop();
                            u.value += l,
                            u.position.end = eX(e.end)
                        },
                        codeFenced: c(function() {
                            var e;
                            let t = this.resume()
                              , r = this.stack[this.stack.length - 1];
                            r.value = t.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""),
                            n.flowCodeInside = void 0
                        }),
                        codeFencedFence: function() {
                            var e, t, r;
                            !n.flowCodeInside && (this.buffer(),
                            r = !0,
                            n[t = "flowCodeInside"] = r)
                        },
                        codeFencedFenceInfo: function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.lang = e
                        },
                        codeFencedFenceMeta: function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.meta = e
                        },
                        codeFlowValue: h,
                        codeIndented: c(function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.value = e.replace(/(\r?\n|\r)$/g, "")
                        }),
                        codeText: c(function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.value = e
                        }),
                        codeTextData: h,
                        data: h,
                        definition: c(),
                        definitionDestinationString: function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.url = e
                        },
                        definitionLabelString: function(e) {
                            let t = this.resume()
                              , n = this.stack[this.stack.length - 1];
                            n.label = t,
                            n.identifier = (0,
                            ec.d)(this.sliceSerialize(e)).toLowerCase()
                        },
                        definitionTitleString: function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.title = e
                        },
                        emphasis: c(),
                        hardBreakEscape: c(m),
                        hardBreakTrailing: c(m),
                        htmlFlow: c(function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.value = e
                        }),
                        htmlFlowData: h,
                        htmlText: c(function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.value = e
                        }),
                        htmlTextData: h,
                        image: c(function() {
                            var e, t, r;
                            let o = this.stack[this.stack.length - 1];
                            if (n.inReference) {
                                let i = n[t = "referenceType"] || "shortcut";
                                o.type += "Reference",
                                o.referenceType = i,
                                delete o.url,
                                delete o.title
                            } else
                                delete o.identifier,
                                delete o.label;
                            n.referenceType = void 0
                        }),
                        label: function() {
                            var e, t;
                            let r = this.stack[this.stack.length - 1]
                              , o = this.resume()
                              , i = this.stack[this.stack.length - 1];
                            if (n.inReference = !0,
                            "link" === i.type) {
                                let l = r.children;
                                i.children = l
                            } else
                                i.alt = o
                        },
                        labelText: function(e) {
                            let t = this.sliceSerialize(e)
                              , n = this.stack[this.stack.length - 2];
                            n.label = (0,
                            eq.v)(t),
                            n.identifier = (0,
                            ec.d)(t).toLowerCase()
                        },
                        lineEnding: function(e) {
                            var r, o, i;
                            let l = this.stack[this.stack.length - 1];
                            if (n.atHardBreak) {
                                let a = l.children[l.children.length - 1];
                                a.position.end = eX(e.end),
                                n[o = "atHardBreak"] = void 0;
                                return
                            }
                            !n.setextHeadingSlurpLineEnding && t.canContainEols.includes(l.type) && (d.call(this, e),
                            h.call(this, e))
                        },
                        link: c(function() {
                            var e, t, r;
                            let o = this.stack[this.stack.length - 1];
                            if (n.inReference) {
                                let i = n[t = "referenceType"] || "shortcut";
                                o.type += "Reference",
                                o.referenceType = i,
                                delete o.url,
                                delete o.title
                            } else
                                delete o.identifier,
                                delete o.label;
                            n.referenceType = void 0
                        }),
                        listItem: c(),
                        listOrdered: c(),
                        listUnordered: c(),
                        paragraph: c(),
                        referenceString: function(e) {
                            var t, r;
                            let o = this.resume()
                              , i = this.stack[this.stack.length - 1];
                            i.label = o,
                            i.identifier = (0,
                            ec.d)(this.sliceSerialize(e)).toLowerCase(),
                            n.referenceType = "full"
                        },
                        resourceDestinationString: function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.url = e
                        },
                        resourceTitleString: function() {
                            let e = this.resume()
                              , t = this.stack[this.stack.length - 1];
                            t.title = e
                        },
                        resource: function() {
                            var e;
                            n.inReference = void 0
                        },
                        setextHeading: c(function() {
                            var e;
                            n.setextHeadingSlurpLineEnding = void 0
                        }),
                        setextHeadingLineSequence: function(e) {
                            let t = this.stack[this.stack.length - 1];
                            t.depth = 61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
                        },
                        setextHeadingText: function() {
                            var e, t;
                            n.setextHeadingSlurpLineEnding = !0
                        },
                        strong: c(),
                        thematicBreak: c()
                    }
                };
                !function e(t, n) {
                    let r = -1;
                    for (; ++r < n.length; ) {
                        let o = n[r];
                        Array.isArray(o) ? e(t, o) : eG(t, o)
                    }
                }(t, (e || {}).mdastExtensions || []);
                let n = {};
                return function(e) {
                    let n = {
                        type: "root",
                        children: []
                    }
                      , l = {
                        stack: [n],
                        tokenStack: [],
                        config: t,
                        enter: s,
                        exit: f,
                        buffer: u,
                        resume: p,
                        setData: o,
                        getData: i
                    }
                      , a = []
                      , c = -1;
                    for (; ++c < e.length; )
                        if ("listOrdered" === e[c][1].type || "listUnordered" === e[c][1].type) {
                            if ("enter" === e[c][0])
                                a.push(c);
                            else {
                                let d = a.pop();
                                c = r(e, d, c)
                            }
                        }
                    for (c = -1; ++c < e.length; ) {
                        let h = t[e[c][0]];
                        e$.call(h, e[c][1].type) && h[e[c][1].type].call(Object.assign({
                            sliceSerialize: e[c][2].sliceSerialize
                        }, l), e[c][1])
                    }
                    if (l.tokenStack.length > 0) {
                        let m = l.tokenStack[l.tokenStack.length - 1]
                          , g = m[1] || eQ;
                        g.call(l, void 0, m[0])
                    }
                    for (n.position = {
                        start: eX(e.length > 0 ? e[0][1].start : {
                            line: 1,
                            column: 1,
                            offset: 0
                        }),
                        end: eX(e.length > 0 ? e[e.length - 2][1].end : {
                            line: 1,
                            column: 1,
                            offset: 0
                        })
                    },
                    c = -1; ++c < t.transforms.length; )
                        n = t.transforms[c](n) || n;
                    return n
                }
                ;
                function r(e, t, n) {
                    let r = t - 1, o = -1, i = !1, l, a, u, s;
                    for (; ++r <= n; ) {
                        let c = e[r];
                        if ("listUnordered" === c[1].type || "listOrdered" === c[1].type || "blockQuote" === c[1].type ? ("enter" === c[0] ? o++ : o--,
                        s = void 0) : "lineEndingBlank" === c[1].type ? "enter" === c[0] && (!l || s || o || u || (u = r),
                        s = void 0) : "linePrefix" === c[1].type || "listItemValue" === c[1].type || "listItemMarker" === c[1].type || "listItemPrefix" === c[1].type || "listItemPrefixWhitespace" === c[1].type || (s = void 0),
                        !o && "enter" === c[0] && "listItemPrefix" === c[1].type || -1 === o && "exit" === c[0] && ("listUnordered" === c[1].type || "listOrdered" === c[1].type)) {
                            if (l) {
                                let f = r;
                                for (a = void 0; f--; ) {
                                    let p = e[f];
                                    if ("lineEnding" === p[1].type || "lineEndingBlank" === p[1].type) {
                                        if ("exit" === p[0])
                                            continue;
                                        a && (e[a][1].type = "lineEndingBlank",
                                        i = !0),
                                        p[1].type = "lineEnding",
                                        a = f
                                    } else if ("linePrefix" === p[1].type || "blockQuotePrefix" === p[1].type || "blockQuotePrefixWhitespace" === p[1].type || "blockQuoteMarker" === p[1].type || "listItemIndent" === p[1].type)
                                        ;
                                    else
                                        break
                                }
                                u && (!a || u < a) && (l._spread = !0),
                                l.end = Object.assign({}, a ? e[a][1].start : c[1].end),
                                e.splice(a || r, 0, ["exit", l, c[2]]),
                                r++,
                                n++
                            }
                            "listItemPrefix" === c[1].type && (l = {
                                type: "listItem",
                                _spread: !1,
                                start: Object.assign({}, c[1].start),
                                end: void 0
                            },
                            e.splice(r, 0, ["enter", l, c[2]]),
                            r++,
                            n++,
                            u = void 0,
                            s = !0)
                        }
                    }
                    return e[t][1]._spread = i,
                    n
                }
                function o(e, t) {
                    n[e] = t
                }
                function i(e) {
                    return n[e]
                }
                function a(e, t) {
                    return function(n) {
                        s.call(this, e(n), n),
                        t && t.call(this, n)
                    }
                }
                function u() {
                    this.stack.push({
                        type: "fragment",
                        children: []
                    })
                }
                function s(e, t, n) {
                    let r = this.stack[this.stack.length - 1];
                    return r.children.push(e),
                    this.stack.push(e),
                    this.tokenStack.push([t, n]),
                    e.position = {
                        start: eX(t.start)
                    },
                    e
                }
                function c(e) {
                    return function(t) {
                        e && e.call(this, t),
                        f.call(this, t)
                    }
                }
                function f(e, t) {
                    let n = this.stack.pop()
                      , r = this.tokenStack.pop();
                    if (r) {
                        if (r[0].type !== e.type) {
                            if (t)
                                t.call(this, e, r[0]);
                            else {
                                let o = r[1] || eQ;
                                o.call(this, e, r[0])
                            }
                        }
                    } else
                        throw Error("Cannot close `" + e.type + "` (" + l({
                            start: e.start,
                            end: e.end
                        }) + "): it’s not open");
                    return n.position.end = eX(e.end),
                    n
                }
                function p() {
                    return function(e, t) {
                        let n = "boolean" != typeof D.includeImageAlt || D.includeImageAlt
                          , r = "boolean" != typeof D.includeHtml || D.includeHtml;
                        return I(e, n, r)
                    }(this.stack.pop())
                }
                function d(e) {
                    let t = this.stack[this.stack.length - 1]
                      , n = t.children[t.children.length - 1];
                    n && "text" === n.type || ((n = {
                        type: "text",
                        value: ""
                    }).position = {
                        start: eX(e.start)
                    },
                    t.children.push(n)),
                    this.stack.push(n)
                }
                function h(e) {
                    let t = this.stack.pop();
                    t.value += this.sliceSerialize(e),
                    t.position.end = eX(e.end)
                }
                function m() {
                    var e, t;
                    n.atHardBreak = !0
                }
                function g(e) {
                    var t, r;
                    r = e.type,
                    n.characterReferenceType = r
                }
                function y() {
                    return {
                        type: "code",
                        lang: null,
                        meta: null,
                        value: ""
                    }
                }
                function b() {
                    return {
                        type: "heading",
                        depth: void 0,
                        children: []
                    }
                }
                function v() {
                    return {
                        type: "break"
                    }
                }
                function x() {
                    return {
                        type: "html",
                        value: ""
                    }
                }
                function k() {
                    return {
                        type: "link",
                        title: null,
                        url: "",
                        children: []
                    }
                }
                function w(e) {
                    return {
                        type: "list",
                        ordered: "listOrdered" === e.type,
                        start: null,
                        spread: e._spread,
                        children: []
                    }
                }
            }
            )(n)(function(e) {
                for (; !V(e); )
                    ;
                return e
            }((function(e) {
                let t = (0,
                R.W)([r, ...(e || {}).extensions || []])
                  , n = {
                    defined: [],
                    lazy: {},
                    constructs: t,
                    content: o(M),
                    document: o(H),
                    flow: o(Y),
                    string: o(G),
                    text: o(Q)
                };
                return n;
                function o(e) {
                    return function(t) {
                        return function(e, t, n) {
                            let r = Object.assign(n ? Object.assign({}, n) : {
                                line: 1,
                                column: 1,
                                offset: 0
                            }, {
                                _index: 0,
                                _bufferIndex: -1
                            })
                              , o = {}
                              , i = []
                              , l = []
                              , a = []
                              , u = {
                                consume: function(e) {
                                    (0,
                                    _.Ch)(e) ? (r.line++,
                                    r.column = 1,
                                    r.offset += -3 === e ? 2 : 1,
                                    y()) : -1 !== e && (r.column++,
                                    r.offset++),
                                    r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++,
                                    r._bufferIndex === l[r._index].length && (r._bufferIndex = -1,
                                    r._index++)),
                                    s.previous = e
                                },
                                enter: function(e, t) {
                                    let n = t || {};
                                    return n.type = e,
                                    n.start = p(),
                                    s.events.push(["enter", n, s]),
                                    a.push(n),
                                    n
                                },
                                exit: function(e) {
                                    let t = a.pop();
                                    return t.end = p(),
                                    s.events.push(["exit", t, s]),
                                    t
                                },
                                attempt: m(function(e, t) {
                                    g(e, t.from)
                                }),
                                check: m(h),
                                interrupt: m(h, {
                                    interrupt: !0
                                })
                            }
                              , s = {
                                previous: null,
                                code: null,
                                containerState: {},
                                events: [],
                                parser: e,
                                sliceStream: f,
                                sliceSerialize: function(e, t) {
                                    return function(e, t) {
                                        let n = -1, r = [], o;
                                        for (; ++n < e.length; ) {
                                            let i = e[n], l;
                                            if ("string" == typeof i)
                                                l = i;
                                            else
                                                switch (i) {
                                                case -5:
                                                    l = "\r";
                                                    break;
                                                case -4:
                                                    l = "\n";
                                                    break;
                                                case -3:
                                                    l = "\r\n";
                                                    break;
                                                case -2:
                                                    l = t ? " " : "	";
                                                    break;
                                                case -1:
                                                    if (!t && o)
                                                        continue;
                                                    l = " ";
                                                    break;
                                                default:
                                                    l = String.fromCharCode(i)
                                                }
                                            o = -2 === i,
                                            r.push(l)
                                        }
                                        return r.join("")
                                    }(f(e), t)
                                },
                                now: p,
                                defineSkip: function(e) {
                                    o[e.line] = e.column,
                                    y()
                                },
                                write: function(e) {
                                    return (l = (0,
                                    B.V)(l, e),
                                    function() {
                                        let e;
                                        for (; r._index < l.length; ) {
                                            let t = l[r._index];
                                            if ("string" == typeof t)
                                                for (e = r._index,
                                                r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length; )
                                                    d(t.charCodeAt(r._bufferIndex));
                                            else
                                                d(t)
                                        }
                                    }(),
                                    null !== l[l.length - 1]) ? [] : (g(t, 0),
                                    s.events = (0,
                                    ee.C)(i, s.events, s),
                                    s.events)
                                }
                            }
                              , c = t.tokenize.call(s, u);
                            return t.resolveAll && i.push(t),
                            s;
                            function f(e) {
                                return function(e, t) {
                                    let n = t.start._index, r = t.start._bufferIndex, o = t.end._index, i = t.end._bufferIndex, l;
                                    if (n === o)
                                        l = [e[n].slice(r, i)];
                                    else {
                                        if (l = e.slice(n, o),
                                        r > -1) {
                                            let a = l[0];
                                            "string" == typeof a ? l[0] = a.slice(r) : l.shift()
                                        }
                                        i > 0 && l.push(e[o].slice(0, i))
                                    }
                                    return l
                                }(l, e)
                            }
                            function p() {
                                let {line: e, column: t, offset: n, _index: o, _bufferIndex: i} = r;
                                return {
                                    line: e,
                                    column: t,
                                    offset: n,
                                    _index: o,
                                    _bufferIndex: i
                                }
                            }
                            function d(e) {
                                c = c(e)
                            }
                            function h(e, t) {
                                t.restore()
                            }
                            function m(e, t) {
                                return function(n, o, i) {
                                    var l;
                                    let c, f, d, h;
                                    return Array.isArray(n) ? m(n) : "tokenize"in n ? m([n]) : (l = n,
                                    function(e) {
                                        let t = null !== e && l[e]
                                          , n = null !== e && l.null
                                          , r = [...Array.isArray(t) ? t : t ? [t] : [], ...Array.isArray(n) ? n : n ? [n] : []];
                                        return m(r)(e)
                                    }
                                    );
                                    function m(e) {
                                        return (c = e,
                                        f = 0,
                                        0 === e.length) ? i : g(e[f])
                                    }
                                    function g(e) {
                                        return function(n) {
                                            return (h = function() {
                                                let e = p()
                                                  , t = s.previous
                                                  , n = s.currentConstruct
                                                  , o = s.events.length
                                                  , i = Array.from(a);
                                                return {
                                                    restore: function() {
                                                        r = e,
                                                        s.previous = t,
                                                        s.currentConstruct = n,
                                                        s.events.length = o,
                                                        a = i,
                                                        y()
                                                    },
                                                    from: o
                                                }
                                            }(),
                                            d = e,
                                            e.partial || (s.currentConstruct = e),
                                            e.name && s.parser.constructs.disable.null.includes(e.name)) ? v(n) : e.tokenize.call(t ? Object.assign(Object.create(s), t) : s, u, b, v)(n)
                                        }
                                    }
                                    function b(t) {
                                        return e(d, h),
                                        o
                                    }
                                    function v(e) {
                                        return (h.restore(),
                                        ++f < c.length) ? g(c[f]) : i
                                    }
                                }
                            }
                            function g(e, t) {
                                e.resolveAll && !i.includes(e) && i.push(e),
                                e.resolve && (0,
                                B.d)(s.events, t, s.events.length - t, e.resolve(s.events.slice(t), s)),
                                e.resolveTo && (s.events = e.resolveTo(s.events, s))
                            }
                            function y() {
                                r.line in o && r.column < 2 && (r.column = o[r.line],
                                r.offset += o[r.line] - 1)
                            }
                        }(n, e, t)
                    }
                }
            }
            )(n).document().write((o = 1,
            i = "",
            a = !0,
            function(e, t, n) {
                let r = [], l, s, c, f, p;
                for (e = i + e.toString(t),
                c = 0,
                i = "",
                a && (65279 === e.charCodeAt(0) && c++,
                a = void 0); c < e.length; ) {
                    if (eV.lastIndex = c,
                    f = (l = eV.exec(e)) && void 0 !== l.index ? l.index : e.length,
                    p = e.charCodeAt(f),
                    !l) {
                        i = e.slice(c);
                        break
                    }
                    if (10 === p && c === f && u)
                        r.push(-3),
                        u = void 0;
                    else
                        switch (u && (r.push(-5),
                        u = void 0),
                        c < f && (r.push(e.slice(c, f)),
                        o += f - c),
                        p) {
                        case 0:
                            r.push(65533),
                            o++;
                            break;
                        case 9:
                            for (s = 4 * Math.ceil(o / 4),
                            r.push(-2); o++ < s; )
                                r.push(-1);
                            break;
                        case 10:
                            r.push(-4),
                            o = 1;
                            break;
                        default:
                            u = !0,
                            o = 1
                        }
                    c = f + 1
                }
                return n && (u && r.push(-5),
                i && r.push(i),
                r.push(null)),
                r
            }
            )(e, t, !0))))
        };
        function eX(e) {
            return {
                line: e.line,
                column: e.column,
                offset: e.offset
            }
        }
        function eG(e, t) {
            let n;
            for (n in t)
                if (e$.call(t, n)) {
                    if ("canContainEols" === n) {
                        let r = t[n];
                        r && e[n].push(...r)
                    } else if ("transforms" === n) {
                        let o = t[n];
                        o && e[n].push(...o)
                    } else if ("enter" === n || "exit" === n) {
                        let i = t[n];
                        i && Object.assign(e[n], i)
                    }
                }
        }
        function eQ(e, t) {
            if (e)
                throw Error("Cannot close `" + e.type + "` (" + l({
                    start: e.start,
                    end: e.end
                }) + "): a different token (`" + t.type + "`, " + l({
                    start: t.start,
                    end: t.end
                }) + ") is open");
            throw Error("Cannot close document, a token (`" + t.type + "`, " + l({
                start: t.start,
                end: t.end
            }) + ") is still open")
        }
        function eK(e) {
            let t = t=>{
                let n = this.data("settings");
                return eY(t, Object.assign({}, n, e, {
                    extensions: this.data("micromarkExtensions") || [],
                    mdastExtensions: this.data("fromMarkdownExtensions") || []
                }))
            }
            ;
            Object.assign(this, {
                Parser: t
            })
        }
        function eZ(e) {
            let t = []
              , n = -1
              , r = 0
              , o = 0;
            for (; ++n < e.length; ) {
                let i = e.charCodeAt(n)
                  , l = "";
                if (37 === i && (0,
                _.H$)(e.charCodeAt(n + 1)) && (0,
                _.H$)(e.charCodeAt(n + 2)))
                    o = 2;
                else if (i < 128)
                    /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) || (l = String.fromCharCode(i));
                else if (i > 55295 && i < 57344) {
                    let a = e.charCodeAt(n + 1);
                    i < 56320 && a > 56319 && a < 57344 ? (l = String.fromCharCode(i, a),
                    o = 1) : l = "�"
                } else
                    l = String.fromCharCode(i);
                l && (t.push(e.slice(r, n), encodeURIComponent(l)),
                r = n + o + 1,
                l = ""),
                o && (n += o,
                o = 0)
            }
            return t.join("") + e.slice(r)
        }
        var eJ = n(21623)
          , e0 = n(3980);
        let e1 = {}.hasOwnProperty;
        function e2(e) {
            return String(e || "").toUpperCase()
        }
        function e4(e, t) {
            let n = String(t.identifier).toUpperCase(), r = eZ(n.toLowerCase()), o = e.footnoteOrder.indexOf(n), i;
            -1 === o ? (e.footnoteOrder.push(n),
            e.footnoteCounts[n] = 1,
            i = e.footnoteOrder.length) : (e.footnoteCounts[n]++,
            i = o + 1);
            let l = e.footnoteCounts[n]
              , a = {
                type: "element",
                tagName: "a",
                properties: {
                    href: "#" + e.clobberPrefix + "fn-" + r,
                    id: e.clobberPrefix + "fnref-" + r + (l > 1 ? "-" + l : ""),
                    dataFootnoteRef: !0,
                    ariaDescribedBy: ["footnote-label"]
                },
                children: [{
                    type: "text",
                    value: String(i)
                }]
            };
            e.patch(t, a);
            let u = {
                type: "element",
                tagName: "sup",
                properties: {},
                children: [a]
            };
            return e.patch(t, u),
            e.applyData(t, u)
        }
        function e3(e, t) {
            let n = t.referenceType
              , r = "]";
            if ("collapsed" === n ? r += "[]" : "full" === n && (r += "[" + (t.label || t.identifier) + "]"),
            "imageReference" === t.type)
                return {
                    type: "text",
                    value: "![" + t.alt + r
                };
            let o = e.all(t)
              , i = o[0];
            i && "text" === i.type ? i.value = "[" + i.value : o.unshift({
                type: "text",
                value: "["
            });
            let l = o[o.length - 1];
            return l && "text" === l.type ? l.value += r : o.push({
                type: "text",
                value: r
            }),
            o
        }
        function e6(e) {
            let t = e.spread;
            return null == t ? e.children.length > 1 : t
        }
        function e5(e, t, n) {
            let r = 0
              , o = e.length;
            if (t) {
                let i = e.codePointAt(r);
                for (; 9 === i || 32 === i; )
                    r++,
                    i = e.codePointAt(r)
            }
            if (n) {
                let l = e.codePointAt(o - 1);
                for (; 9 === l || 32 === l; )
                    o--,
                    l = e.codePointAt(o - 1)
            }
            return o > r ? e.slice(r, o) : ""
        }
        let e9 = {
            blockquote: function(e, t) {
                let n = {
                    type: "element",
                    tagName: "blockquote",
                    properties: {},
                    children: e.wrap(e.all(t), !0)
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            break: function(e, t) {
                let n = {
                    type: "element",
                    tagName: "br",
                    properties: {},
                    children: []
                };
                return e.patch(t, n),
                [e.applyData(t, n), {
                    type: "text",
                    value: "\n"
                }]
            },
            code: function(e, t) {
                let n = t.value ? t.value + "\n" : ""
                  , r = t.lang ? t.lang.match(/^[^ \t]+(?=[ \t]|$)/) : null
                  , o = {};
                r && (o.className = ["language-" + r]);
                let i = {
                    type: "element",
                    tagName: "code",
                    properties: o,
                    children: [{
                        type: "text",
                        value: n
                    }]
                };
                return t.meta && (i.data = {
                    meta: t.meta
                }),
                e.patch(t, i),
                i = {
                    type: "element",
                    tagName: "pre",
                    properties: {},
                    children: [i = e.applyData(t, i)]
                },
                e.patch(t, i),
                i
            },
            delete: function(e, t) {
                let n = {
                    type: "element",
                    tagName: "del",
                    properties: {},
                    children: e.all(t)
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            emphasis: function(e, t) {
                let n = {
                    type: "element",
                    tagName: "em",
                    properties: {},
                    children: e.all(t)
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            footnoteReference: e4,
            footnote: function(e, t) {
                let n = e.footnoteById
                  , r = 1;
                for (; (r in n); )
                    r++;
                let o = String(r);
                return n[o] = {
                    type: "footnoteDefinition",
                    identifier: o,
                    children: [{
                        type: "paragraph",
                        children: t.children
                    }],
                    position: t.position
                },
                e4(e, {
                    type: "footnoteReference",
                    identifier: o,
                    position: t.position
                })
            },
            heading: function(e, t) {
                let n = {
                    type: "element",
                    tagName: "h" + t.depth,
                    properties: {},
                    children: e.all(t)
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            html: function(e, t) {
                if (e.dangerous) {
                    let n = {
                        type: "raw",
                        value: t.value
                    };
                    return e.patch(t, n),
                    e.applyData(t, n)
                }
                return null
            },
            imageReference: function(e, t) {
                let n = e.definition(t.identifier);
                if (!n)
                    return e3(e, t);
                let r = {
                    src: eZ(n.url || ""),
                    alt: t.alt
                };
                null !== n.title && void 0 !== n.title && (r.title = n.title);
                let o = {
                    type: "element",
                    tagName: "img",
                    properties: r,
                    children: []
                };
                return e.patch(t, o),
                e.applyData(t, o)
            },
            image: function(e, t) {
                let n = {
                    src: eZ(t.url)
                };
                null !== t.alt && void 0 !== t.alt && (n.alt = t.alt),
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                let r = {
                    type: "element",
                    tagName: "img",
                    properties: n,
                    children: []
                };
                return e.patch(t, r),
                e.applyData(t, r)
            },
            inlineCode: function(e, t) {
                let n = {
                    type: "text",
                    value: t.value.replace(/\r?\n|\r/g, " ")
                };
                e.patch(t, n);
                let r = {
                    type: "element",
                    tagName: "code",
                    properties: {},
                    children: [n]
                };
                return e.patch(t, r),
                e.applyData(t, r)
            },
            linkReference: function(e, t) {
                let n = e.definition(t.identifier);
                if (!n)
                    return e3(e, t);
                let r = {
                    href: eZ(n.url || "")
                };
                null !== n.title && void 0 !== n.title && (r.title = n.title);
                let o = {
                    type: "element",
                    tagName: "a",
                    properties: r,
                    children: e.all(t)
                };
                return e.patch(t, o),
                e.applyData(t, o)
            },
            link: function(e, t) {
                let n = {
                    href: eZ(t.url)
                };
                null !== t.title && void 0 !== t.title && (n.title = t.title);
                let r = {
                    type: "element",
                    tagName: "a",
                    properties: n,
                    children: e.all(t)
                };
                return e.patch(t, r),
                e.applyData(t, r)
            },
            listItem: function(e, t, n) {
                let r = e.all(t)
                  , o = n ? function(e) {
                    let t = !1;
                    if ("list" === e.type) {
                        t = e.spread || !1;
                        let n = e.children
                          , r = -1;
                        for (; !t && ++r < n.length; )
                            t = e6(n[r])
                    }
                    return t
                }(n) : e6(t)
                  , i = {}
                  , l = [];
                if ("boolean" == typeof t.checked) {
                    let a = r[0], u;
                    a && "element" === a.type && "p" === a.tagName ? u = a : (u = {
                        type: "element",
                        tagName: "p",
                        properties: {},
                        children: []
                    },
                    r.unshift(u)),
                    u.children.length > 0 && u.children.unshift({
                        type: "text",
                        value: " "
                    }),
                    u.children.unshift({
                        type: "element",
                        tagName: "input",
                        properties: {
                            type: "checkbox",
                            checked: t.checked,
                            disabled: !0
                        },
                        children: []
                    }),
                    i.className = ["task-list-item"]
                }
                let s = -1;
                for (; ++s < r.length; ) {
                    let c = r[s];
                    (o || 0 !== s || "element" !== c.type || "p" !== c.tagName) && l.push({
                        type: "text",
                        value: "\n"
                    }),
                    "element" !== c.type || "p" !== c.tagName || o ? l.push(c) : l.push(...c.children)
                }
                let f = r[r.length - 1];
                f && (o || "element" !== f.type || "p" !== f.tagName) && l.push({
                    type: "text",
                    value: "\n"
                });
                let p = {
                    type: "element",
                    tagName: "li",
                    properties: i,
                    children: l
                };
                return e.patch(t, p),
                e.applyData(t, p)
            },
            list: function(e, t) {
                let n = {}
                  , r = e.all(t)
                  , o = -1;
                for ("number" == typeof t.start && 1 !== t.start && (n.start = t.start); ++o < r.length; ) {
                    let i = r[o];
                    if ("element" === i.type && "li" === i.tagName && i.properties && Array.isArray(i.properties.className) && i.properties.className.includes("task-list-item")) {
                        n.className = ["contains-task-list"];
                        break
                    }
                }
                let l = {
                    type: "element",
                    tagName: t.ordered ? "ol" : "ul",
                    properties: n,
                    children: e.wrap(r, !0)
                };
                return e.patch(t, l),
                e.applyData(t, l)
            },
            paragraph: function(e, t) {
                let n = {
                    type: "element",
                    tagName: "p",
                    properties: {},
                    children: e.all(t)
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            root: function(e, t) {
                let n = {
                    type: "root",
                    children: e.wrap(e.all(t))
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            strong: function(e, t) {
                let n = {
                    type: "element",
                    tagName: "strong",
                    properties: {},
                    children: e.all(t)
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            table: function(e, t) {
                let n = e.all(t)
                  , r = n.shift()
                  , o = [];
                if (r) {
                    let i = {
                        type: "element",
                        tagName: "thead",
                        properties: {},
                        children: e.wrap([r], !0)
                    };
                    e.patch(t.children[0], i),
                    o.push(i)
                }
                if (n.length > 0) {
                    let l = {
                        type: "element",
                        tagName: "tbody",
                        properties: {},
                        children: e.wrap(n, !0)
                    }
                      , a = (0,
                    e0.Pk)(t.children[1])
                      , u = (0,
                    e0.rb)(t.children[t.children.length - 1]);
                    a.line && u.line && (l.position = {
                        start: a,
                        end: u
                    }),
                    o.push(l)
                }
                let s = {
                    type: "element",
                    tagName: "table",
                    properties: {},
                    children: e.wrap(o, !0)
                };
                return e.patch(t, s),
                e.applyData(t, s)
            },
            tableCell: function(e, t) {
                let n = {
                    type: "element",
                    tagName: "td",
                    properties: {},
                    children: e.all(t)
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            tableRow: function(e, t, n) {
                let r = n ? n.children : void 0
                  , o = r ? r.indexOf(t) : 1
                  , i = 0 === o ? "th" : "td"
                  , l = n && "table" === n.type ? n.align : void 0
                  , a = l ? l.length : t.children.length
                  , u = -1
                  , s = [];
                for (; ++u < a; ) {
                    let c = t.children[u]
                      , f = {}
                      , p = l ? l[u] : void 0;
                    p && (f.align = p);
                    let d = {
                        type: "element",
                        tagName: i,
                        properties: f,
                        children: []
                    };
                    c && (d.children = e.all(c),
                    e.patch(c, d),
                    d = e.applyData(t, d)),
                    s.push(d)
                }
                let h = {
                    type: "element",
                    tagName: "tr",
                    properties: {},
                    children: e.wrap(s, !0)
                };
                return e.patch(t, h),
                e.applyData(t, h)
            },
            text: function(e, t) {
                let n = {
                    type: "text",
                    value: function(e) {
                        let t = String(e)
                          , n = /\r?\n|\r/g
                          , r = n.exec(t)
                          , o = 0
                          , i = [];
                        for (; r; )
                            i.push(e5(t.slice(o, r.index), o > 0, !0), r[0]),
                            o = r.index + r[0].length,
                            r = n.exec(t);
                        return i.push(e5(t.slice(o), o > 0, !1)),
                        i.join("")
                    }(String(t.value))
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            thematicBreak: function(e, t) {
                let n = {
                    type: "element",
                    tagName: "hr",
                    properties: {},
                    children: []
                };
                return e.patch(t, n),
                e.applyData(t, n)
            },
            toml: e7,
            yaml: e7,
            definition: e7,
            footnoteDefinition: e7
        };
        function e7() {
            return null
        }
        let e8 = {}.hasOwnProperty;
        function te(e, t) {
            e.position && (t.position = (0,
            e0.FK)(e))
        }
        function tt(e, t) {
            let n = t;
            if (e && e.data) {
                let r = e.data.hName
                  , o = e.data.hChildren
                  , i = e.data.hProperties;
                "string" == typeof r && ("element" === n.type ? n.tagName = r : n = {
                    type: "element",
                    tagName: r,
                    properties: {},
                    children: []
                }),
                "element" === n.type && i && (n.properties = {
                    ...n.properties,
                    ...i
                }),
                "children"in n && n.children && null != o && (n.children = o)
            }
            return n
        }
        function tn(e, t, n) {
            let r = t && t.type;
            if (!r)
                throw Error("Expected node, got `" + t + "`");
            return e8.call(e.handlers, r) ? e.handlers[r](e, t, n) : e.passThrough && e.passThrough.includes(r) ? "children"in t ? {
                ...t,
                children: tr(e, t)
            } : t : e.unknownHandler ? e.unknownHandler(e, t, n) : function(e, t) {
                let n = t.data || {}
                  , r = "value"in t && !(e8.call(n, "hProperties") || e8.call(n, "hChildren")) ? {
                    type: "text",
                    value: t.value
                } : {
                    type: "element",
                    tagName: "div",
                    properties: {},
                    children: tr(e, t)
                };
                return e.patch(t, r),
                e.applyData(t, r)
            }(e, t)
        }
        function tr(e, t) {
            let n = [];
            if ("children"in t) {
                let r = t.children
                  , o = -1;
                for (; ++o < r.length; ) {
                    let i = tn(e, r[o], t);
                    if (i) {
                        if (o && "break" === r[o - 1].type && (Array.isArray(i) || "text" !== i.type || (i.value = i.value.replace(/^\s+/, "")),
                        !Array.isArray(i) && "element" === i.type)) {
                            let l = i.children[0];
                            l && "text" === l.type && (l.value = l.value.replace(/^\s+/, ""))
                        }
                        Array.isArray(i) ? n.push(...i) : n.push(i)
                    }
                }
            }
            return n
        }
        function to(e, t) {
            let n = []
              , r = -1;
            for (t && n.push({
                type: "text",
                value: "\n"
            }); ++r < e.length; )
                r && n.push({
                    type: "text",
                    value: "\n"
                }),
                n.push(e[r]);
            return t && e.length > 0 && n.push({
                type: "text",
                value: "\n"
            }),
            n
        }
        function ti(e, t) {
            let n = function(e, t) {
                let n = t || {}
                  , r = n.allowDangerousHtml || !1
                  , o = {};
                return l.dangerous = r,
                l.clobberPrefix = void 0 === n.clobberPrefix || null === n.clobberPrefix ? "user-content-" : n.clobberPrefix,
                l.footnoteLabel = n.footnoteLabel || "Footnotes",
                l.footnoteLabelTagName = n.footnoteLabelTagName || "h2",
                l.footnoteLabelProperties = n.footnoteLabelProperties || {
                    className: ["sr-only"]
                },
                l.footnoteBackLabel = n.footnoteBackLabel || "Back to content",
                l.unknownHandler = n.unknownHandler,
                l.passThrough = n.passThrough,
                l.handlers = {
                    ...e9,
                    ...n.handlers
                },
                l.definition = function(e) {
                    let t = Object.create(null);
                    if (!e || !e.type)
                        throw Error("mdast-util-definitions expected node");
                    return (0,
                    eJ.Vn)(e, "definition", e=>{
                        let n = e2(e.identifier);
                        n && !e1.call(t, n) && (t[n] = e)
                    }
                    ),
                    function(e) {
                        let n = e2(e);
                        return n && e1.call(t, n) ? t[n] : null
                    }
                }(e),
                l.footnoteById = o,
                l.footnoteOrder = [],
                l.footnoteCounts = {},
                l.patch = te,
                l.applyData = tt,
                l.one = function(e, t) {
                    return tn(l, e, t)
                }
                ,
                l.all = function(e) {
                    return tr(l, e)
                }
                ,
                l.wrap = to,
                l.augment = i,
                (0,
                eJ.Vn)(e, "footnoteDefinition", e=>{
                    let t = String(e.identifier).toUpperCase();
                    e8.call(o, t) || (o[t] = e)
                }
                ),
                l;
                function i(e, t) {
                    if (e && "data"in e && e.data) {
                        let n = e.data;
                        n.hName && ("element" !== t.type && (t = {
                            type: "element",
                            tagName: "",
                            properties: {},
                            children: []
                        }),
                        t.tagName = n.hName),
                        "element" === t.type && n.hProperties && (t.properties = {
                            ...t.properties,
                            ...n.hProperties
                        }),
                        "children"in t && t.children && n.hChildren && (t.children = n.hChildren)
                    }
                    if (e) {
                        var r;
                        let o = "type"in e ? e : {
                            position: e
                        };
                        o && o.position && o.position.start && o.position.start.line && o.position.start.column && o.position.end && o.position.end.line && o.position.end.column && (t.position = {
                            start: (0,
                            e0.Pk)(o),
                            end: (0,
                            e0.rb)(o)
                        })
                    }
                    return t
                }
                function l(e, t, n, r) {
                    return Array.isArray(n) && (r = n,
                    n = {}),
                    i(e, {
                        type: "element",
                        tagName: t,
                        properties: n || {},
                        children: r || []
                    })
                }
            }(e, t)
              , r = n.one(e, null)
              , o = function(e) {
                let t = []
                  , n = -1;
                for (; ++n < e.footnoteOrder.length; ) {
                    let r = e.footnoteById[e.footnoteOrder[n]];
                    if (!r)
                        continue;
                    let o = e.all(r)
                      , i = String(r.identifier).toUpperCase()
                      , l = eZ(i.toLowerCase())
                      , a = 0
                      , u = [];
                    for (; ++a <= e.footnoteCounts[i]; ) {
                        let s = {
                            type: "element",
                            tagName: "a",
                            properties: {
                                href: "#" + e.clobberPrefix + "fnref-" + l + (a > 1 ? "-" + a : ""),
                                dataFootnoteBackref: !0,
                                className: ["data-footnote-backref"],
                                ariaLabel: e.footnoteBackLabel
                            },
                            children: [{
                                type: "text",
                                value: "↩"
                            }]
                        };
                        a > 1 && s.children.push({
                            type: "element",
                            tagName: "sup",
                            children: [{
                                type: "text",
                                value: String(a)
                            }]
                        }),
                        u.length > 0 && u.push({
                            type: "text",
                            value: " "
                        }),
                        u.push(s)
                    }
                    let c = o[o.length - 1];
                    if (c && "element" === c.type && "p" === c.tagName) {
                        let f = c.children[c.children.length - 1];
                        f && "text" === f.type ? f.value += " " : c.children.push({
                            type: "text",
                            value: " "
                        }),
                        c.children.push(...u)
                    } else
                        o.push(...u);
                    let p = {
                        type: "element",
                        tagName: "li",
                        properties: {
                            id: e.clobberPrefix + "fn-" + l
                        },
                        children: e.wrap(o, !0)
                    };
                    e.patch(r, p),
                    t.push(p)
                }
                if (0 !== t.length)
                    return {
                        type: "element",
                        tagName: "section",
                        properties: {
                            dataFootnotes: !0,
                            className: ["footnotes"]
                        },
                        children: [{
                            type: "element",
                            tagName: e.footnoteLabelTagName,
                            properties: {
                                ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                                id: "footnote-label"
                            },
                            children: [{
                                type: "text",
                                value: e.footnoteLabel
                            }]
                        }, {
                            type: "text",
                            value: "\n"
                        }, {
                            type: "element",
                            tagName: "ol",
                            properties: {},
                            children: e.wrap(t, !0)
                        }, {
                            type: "text",
                            value: "\n"
                        }]
                    }
            }(n);
            return o && r.children.push({
                type: "text",
                value: "\n"
            }, o),
            Array.isArray(r) ? {
                type: "root",
                children: r
            } : r
        }
        let tl = function(e, t) {
            var n, r, o;
            return e && "run"in e ? (n = e,
            r = t,
            (e,t,o)=>{
                n.run(ti(e, r), t, e=>{
                    o(e)
                }
                )
            }
            ) : (o = e || t,
            e=>ti(e, o))
        };
        var ta = n(45697)
          , tu = n(91634);
        function ts(e) {
            if (e.allowedElements && e.disallowedElements)
                throw TypeError("Only one of `allowedElements` and `disallowedElements` should be defined");
            if (e.allowedElements || e.disallowedElements || e.allowElement)
                return t=>{
                    (0,
                    eJ.Vn)(t, "element", (t,n,r)=>{
                        let o;
                        if (e.allowedElements ? o = !e.allowedElements.includes(t.tagName) : e.disallowedElements && (o = e.disallowedElements.includes(t.tagName)),
                        !o && e.allowElement && "number" == typeof n && (o = !e.allowElement(t, n, r)),
                        o && "number" == typeof n)
                            return e.unwrapDisallowed && t.children ? r.children.splice(n, 1, ...t.children) : r.children.splice(n, 1),
                            n
                    }
                    )
                }
        }
        var tc = n(59864);
        function tf(e) {
            let t = e && "object" == typeof e && "text" === e.type ? e.value || "" : e;
            return "string" == typeof t && "" === t.replace(/[ \t\n\f\r]/g, "")
        }
        var tp = n(26103);
        let td = {
            classId: "classID",
            dataType: "datatype",
            itemId: "itemID",
            strokeDashArray: "strokeDasharray",
            strokeDashOffset: "strokeDashoffset",
            strokeLineCap: "strokeLinecap",
            strokeLineJoin: "strokeLinejoin",
            strokeMiterLimit: "strokeMiterlimit",
            typeOf: "typeof",
            xLinkActuate: "xlinkActuate",
            xLinkArcRole: "xlinkArcrole",
            xLinkHref: "xlinkHref",
            xLinkRole: "xlinkRole",
            xLinkShow: "xlinkShow",
            xLinkTitle: "xlinkTitle",
            xLinkType: "xlinkType",
            xmlnsXLink: "xmlnsXlink"
        };
        var th = n(50342)
          , tm = n(25668)
          , tg = n(57848);
        let ty = ["http", "https", "mailto", "tel"];
        function tb(e) {
            let t = (e || "").trim()
              , n = t.charAt(0);
            if ("#" === n || "/" === n)
                return t;
            let r = t.indexOf(":");
            if (-1 === r)
                return t;
            let o = -1;
            for (; ++o < ty.length; ) {
                let i = ty[o];
                if (r === i.length && t.slice(0, i.length).toLowerCase() === i)
                    return t
            }
            return -1 !== (o = t.indexOf("?")) && r > o || -1 !== (o = t.indexOf("#")) && r > o ? t : "javascript:void(0)"
        }
        let tv = {}.hasOwnProperty
          , tx = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
        function tk(e, t) {
            let n = [], r = -1, o;
            for (; ++r < t.children.length; )
                "element" === (o = t.children[r]).type ? n.push(tw(e, o, r, t)) : "text" === o.type ? "element" === t.type && tx.has(t.tagName) && tf(o) || n.push(o.value) : "raw" !== o.type || e.options.skipHtml || n.push(o.value);
            return n
        }
        function tw(e, t, n, r) {
            var i;
            let l = e.options, a = void 0 === l.transformLinkUri ? tb : l.transformLinkUri, u = e.schema, s = t.tagName, c = {}, f = u, p;
            if ("html" === u.space && "svg" === s && (f = tu.YP,
            e.schema = f),
            t.properties)
                for (p in t.properties)
                    tv.call(t.properties, p) && tE(c, p, t.properties[p], e);
            ("ol" === s || "ul" === s) && e.listDepth++;
            let d = tk(e, t);
            ("ol" === s || "ul" === s) && e.listDepth--,
            e.schema = u;
            let h = t.position || {
                start: {
                    line: null,
                    column: null,
                    offset: null
                },
                end: {
                    line: null,
                    column: null,
                    offset: null
                }
            }
              , m = l.components && tv.call(l.components, s) ? l.components[s] : s
              , g = "string" == typeof m || m === o.Fragment;
            if (!tc.isValidElementType(m))
                throw TypeError(`Component for name \`${s}\` not defined or is not renderable`);
            if (c.key = n,
            "a" === s && l.linkTarget && (c.target = "function" == typeof l.linkTarget ? l.linkTarget(String(c.href || ""), t.children, "string" == typeof c.title ? c.title : null) : l.linkTarget),
            "a" === s && a && (c.href = a(String(c.href || ""), t.children, "string" == typeof c.title ? c.title : null)),
            g || "code" !== s || "element" !== r.type || "pre" === r.tagName || (c.inline = !0),
            g || "h1" !== s && "h2" !== s && "h3" !== s && "h4" !== s && "h5" !== s && "h6" !== s || (c.level = Number.parseInt(s.charAt(1), 10)),
            "img" === s && l.transformImageUri && (c.src = l.transformImageUri(String(c.src || ""), String(c.alt || ""), "string" == typeof c.title ? c.title : null)),
            !g && "li" === s && "element" === r.type) {
                let y = function(e) {
                    let t = -1;
                    for (; ++t < e.children.length; ) {
                        let n = e.children[t];
                        if ("element" === n.type && "input" === n.tagName)
                            return n
                    }
                    return null
                }(t);
                c.checked = y && y.properties ? Boolean(y.properties.checked) : null,
                c.index = tS(r, t),
                c.ordered = "ol" === r.tagName
            }
            return g || "ol" !== s && "ul" !== s || (c.ordered = "ol" === s,
            c.depth = e.listDepth),
            "td" !== s && "th" !== s || (c.align && (c.style || (c.style = {}),
            c.style.textAlign = c.align,
            delete c.align),
            g || (c.isHeader = "th" === s)),
            g || "tr" !== s || "element" !== r.type || (c.isHeader = Boolean("thead" === r.tagName)),
            l.sourcePos && (c["data-sourcepos"] = (i = h,
            [i.start.line, ":", i.start.column, "-", i.end.line, ":", i.end.column].map(String).join(""))),
            !g && l.rawSourcePos && (c.sourcePosition = t.position),
            !g && l.includeElementIndex && (c.index = tS(r, t),
            c.siblingCount = tS(r)),
            g || (c.node = t),
            d.length > 0 ? o.createElement(m, c, d) : o.createElement(m, c)
        }
        function tS(e, t) {
            let n = -1
              , r = 0;
            for (; ++n < e.children.length && e.children[n] !== t; )
                "element" === e.children[n].type && r++;
            return r
        }
        function tE(e, t, n, r) {
            let o = (0,
            tp.s)(r.schema, t)
              , i = n;
            null != i && i == i && (Array.isArray(i) && (i = o.commaSeparated ? (0,
            tm.P)(i) : (0,
            th.P)(i)),
            "style" === o.property && "string" == typeof i && (i = function(e) {
                let t = {};
                try {
                    tg(e, function(e, n) {
                        let r = "-ms-" === e.slice(0, 4) ? `ms-${e.slice(4)}` : e;
                        t[r.replace(/-([a-z])/g, tC)] = n
                    })
                } catch {}
                return t
            }(i)),
            o.space && o.property ? e[tv.call(td, o.property) ? td[o.property] : o.property] = i : o.attribute && (e[o.attribute] = i))
        }
        function tC(e, t) {
            return t.toUpperCase()
        }
        let tT = {}.hasOwnProperty
          , tA = {
            plugins: {
                to: "remarkPlugins",
                id: "change-plugins-to-remarkplugins"
            },
            renderers: {
                to: "components",
                id: "change-renderers-to-components"
            },
            astPlugins: {
                id: "remove-buggy-html-in-markdown-parser"
            },
            allowDangerousHtml: {
                id: "remove-buggy-html-in-markdown-parser"
            },
            escapeHtml: {
                id: "remove-buggy-html-in-markdown-parser"
            },
            source: {
                to: "children",
                id: "change-source-to-children"
            },
            allowNode: {
                to: "allowElement",
                id: "replace-allownode-allowedtypes-and-disallowedtypes"
            },
            allowedTypes: {
                to: "allowedElements",
                id: "replace-allownode-allowedtypes-and-disallowedtypes"
            },
            disallowedTypes: {
                to: "disallowedElements",
                id: "replace-allownode-allowedtypes-and-disallowedtypes"
            },
            includeNodeIndex: {
                to: "includeElementIndex",
                id: "change-includenodeindex-to-includeelementindex"
            }
        };
        function tO(e) {
            for (let t in tA)
                if (tT.call(tA, t) && tT.call(e, t)) {
                    let n = tA[t];
                    console.warn(`[react-markdown] Warning: please ${n.to ? `use \`${n.to}\` instead of` : "remove"} \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${n.id}> for more info)`),
                    delete tA[t]
                }
            let r = S().use(eK).use(e.remarkPlugins || []).use(tl, {
                ...e.remarkRehypeOptions,
                allowDangerousHtml: !0
            }).use(e.rehypePlugins || []).use(ts, e)
              , i = new g;
            "string" == typeof e.children ? i.value = e.children : void 0 !== e.children && null !== e.children && console.warn(`[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`);
            let l = r.runSync(r.parse(i), i);
            if ("root" !== l.type)
                throw TypeError("Expected a `root` node");
            let a = o.createElement(o.Fragment, {}, tk({
                options: e,
                schema: tu.dy,
                listDepth: 0
            }, l));
            return e.className && (a = o.createElement("div", {
                className: e.className
            }, a)),
            a
        }
        tO.propTypes = {
            children: ta.string,
            className: ta.string,
            allowElement: ta.func,
            allowedElements: ta.arrayOf(ta.string),
            disallowedElements: ta.arrayOf(ta.string),
            unwrapDisallowed: ta.bool,
            remarkPlugins: ta.arrayOf(ta.oneOfType([ta.object, ta.func, ta.arrayOf(ta.oneOfType([ta.bool, ta.string, ta.object, ta.func, ta.arrayOf(ta.any)]))])),
            rehypePlugins: ta.arrayOf(ta.oneOfType([ta.object, ta.func, ta.arrayOf(ta.oneOfType([ta.bool, ta.string, ta.object, ta.func, ta.arrayOf(ta.any)]))])),
            sourcePos: ta.bool,
            rawSourcePos: ta.bool,
            skipHtml: ta.bool,
            includeElementIndex: ta.bool,
            transformLinkUri: ta.oneOfType([ta.func, ta.bool]),
            linkTarget: ta.oneOfType([ta.func, ta.string]),
            transformImageUri: ta.func,
            components: ta.object
        }
    },
    50342: function(e, t, n) {
        "use strict";
        function r(e) {
            let t = String(e || "").trim();
            return t ? t.split(/[ \t\n\r\f]+/g) : []
        }
        function o(e) {
            return e.join(" ").trim()
        }
        n.d(t, {
            P: function() {
                return o
            },
            Q: function() {
                return r
            }
        })
    },
    96093: function(e, t, n) {
        "use strict";
        n.d(t, {
            O: function() {
                return r
            }
        });
        let r = function(e) {
            var t, n;
            if (null == e)
                return i;
            if ("string" == typeof e) {
                return t = e,
                o(function(e) {
                    return e && e.type === t
                })
            }
            if ("object" == typeof e) {
                return Array.isArray(e) ? function(e) {
                    let t = []
                      , n = -1;
                    for (; ++n < e.length; )
                        t[n] = r(e[n]);
                    return o(function(...e) {
                        let n = -1;
                        for (; ++n < t.length; )
                            if (t[n].call(this, ...e))
                                return !0;
                        return !1
                    })
                }(e) : (n = e,
                o(function(e) {
                    let t;
                    for (t in n)
                        if (e[t] !== n[t])
                            return !1;
                    return !0
                }))
            }
            if ("function" == typeof e)
                return o(e);
            throw Error("Expected function, string, or object as test")
        };
        function o(e) {
            return function(t, ...n) {
                return Boolean(t && "object" == typeof t && "type"in t && Boolean(e.call(this, t, ...n)))
            }
        }
        function i() {
            return !0
        }
    },
    3980: function(e, t, n) {
        "use strict";
        n.d(t, {
            FK: function() {
                return i
            },
            Pk: function() {
                return r
            },
            rb: function() {
                return o
            }
        });
        let r = l("start")
          , o = l("end");
        function i(e) {
            return {
                start: r(e),
                end: o(e)
            }
        }
        function l(e) {
            return function(t) {
                let n = t && t.position && t.position[e] || {};
                return {
                    line: n.line || null,
                    column: n.column || null,
                    offset: n.offset > -1 ? n.offset : null
                }
            }
        }
    },
    20557: function(e, t, n) {
        "use strict";
        n.d(t, {
            S4: function() {
                return o
            }
        });
        var r = n(96093);
        let o = function(e, t, n, o) {
            "function" == typeof t && "function" != typeof n && (o = n,
            n = t,
            t = null);
            let i = (0,
            r.O)(t)
              , l = o ? -1 : 1;
            (function e(r, a, u) {
                let s = r && "object" == typeof r ? r : {};
                if ("string" == typeof s.type) {
                    var c;
                    let f = "string" == typeof s.tagName ? s.tagName : "string" == typeof s.name ? s.name : void 0;
                    Object.defineProperty(p, "name", {
                        value: "node (" + (c = r.type + (f ? "<" + f + ">" : "")) + ")"
                    })
                }
                return p;
                function p() {
                    var s;
                    let c = [], f, p, d;
                    if ((!t || i(r, a, u[u.length - 1] || null)) && !1 === (s = n(r, u),
                    c = Array.isArray(s) ? s : "number" == typeof s ? [!0, s] : [s])[0])
                        return c;
                    if (r.children && "skip" !== c[0])
                        for (p = (o ? r.children.length : -1) + l,
                        d = u.concat(r); p > -1 && p < r.children.length; ) {
                            if (!1 === (f = e(r.children[p], p, d)())[0])
                                return f;
                            p = "number" == typeof f[1] ? f[1] : p + l
                        }
                    return c
                }
            }
            )(e, void 0, [])()
        }
    },
    21623: function(e, t, n) {
        "use strict";
        n.d(t, {
            Vn: function() {
                return o
            }
        });
        var r = n(20557);
        let o = function(e, t, n, o) {
            "function" == typeof t && "function" != typeof n && (o = n,
            n = t,
            t = null),
            (0,
            r.S4)(e, t, function(e, t) {
                let r = t[t.length - 1];
                return n(e, r ? r.children.indexOf(e) : null, r)
            }, o)
        }
    }
}]);
