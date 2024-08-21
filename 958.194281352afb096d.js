"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[958], {
    67623: function(e, t, r) {
        r.r(t);
        var a = r(10797)
          , o = r(85893)
          , s = r(28540)
          , i = r(5715)
          , n = r(4519);
        r(65729);
        var l = r(85036)
          , c = r(65797)
          , p = function(e) {
            var t, r, p = e.data, u = e.isScale, d = p.name.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, ""), m = p.features.map(function(e) {
                return e.properties.n_especies
            }), h = (t = Math).max.apply(t, (0,
            a.Z)(m)), f = (r = Math).min.apply(r, (0,
            a.Z)(m)), v = l.Z().domain([f, h]).range(["#B6ECBF", "#29567D"]), g = (0,
            c.v)(h), x = s.Z(p).map(function(e, t) {
                return 0 === t ? e - 180 : -1 * e
            }).reverse(), b = function(e, t) {
                var r = "<div class='popup'><div><strong>".concat(e.properties.n_especies, " especies</strong></div><div>").concat(e.properties.label, "</div><a href=").concat("colombia" === d ? "/".concat(e.properties.label.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").replace(/,/g, "").split(" ").join("-")) : "/".concat(d, "/").concat(e.properties.label.normalize("NFD").toLowerCase().replace(/[\u0300-\u036f]/g, "").split(" ").join("-")), ' target="_blank">Ver m\xe1s</a></div>');
                t.bindPopup(r),
                t.setStyle({
                    fillColor: e.properties.n_especies ? v(e.properties.n_especies) : "#F5F4F6",
                    fillOpacity: 6,
                    stroke: !1,
                    strokeOpacity: !0,
                    strokeWith: !0
                })
            };
            return (0,
            o.jsxs)(o.Fragment, {
                children: [(0,
                o.jsx)(i.h, {
                    center: x,
                    zoom: void 0 !== u && u ? 8 : 5,
                    scrollWheelZoom: !1,
                    style: {
                        height: 600,
                        background: "transparent",
                        position: "sticky"
                    },
                    attributionControl: !1,
                    children: (0,
                    o.jsx)(n.Q, {
                        data: p,
                        onEachFeature: b,
                        eventHandlers: {
                            mouseover: function(e) {
                                e.layer.openPopup()
                            }
                        }
                    })
                }), (0,
                o.jsxs)("div", {
                    className: "p-4 shadow-lg w-[140px] rounded-md bottom-52 left-[68rem] block relative bg-white",
                    children: [(0,
                    o.jsx)("span", {
                        className: "font-bold text-sm",
                        children: "Especies"
                    }), (0,
                    o.jsx)("div", {
                        className: "mt-4",
                        children: (0,
                        o.jsx)("ul", {
                            children: g.map(function(e, t) {
                                return (0,
                                o.jsx)("li", {
                                    style: {
                                        backgroundColor: v(e),
                                        width: "20px",
                                        height: "20px"
                                    },
                                    children: (0,
                                    o.jsx)("p", {
                                        className: "font-medium right-4 text-right ml-10",
                                        children: e
                                    })
                                }, t)
                            })
                        })
                    })]
                })]
            })
        };
        t.default = p
    }
}]);
