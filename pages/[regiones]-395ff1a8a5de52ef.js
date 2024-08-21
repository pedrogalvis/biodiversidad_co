(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[736], {
    92148: function(e, a, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/[regiones]", function() {
            return n(36778)
        }
        ])
    },
    36778: function(e, a, n) {
        "use strict";
        n.r(a),
        n.d(a, {
            __N_SSG: function() {
                return l
            },
            default: function() {
                return f
            }
        });
        var s = n(85893)
          , t = n(9008)
          , i = n.n(t)
          , r = n(67294)
          , o = n(31047)
          , c = n(37668)
          , u = n(1505)
          , l = !0;
        function f(e) {
            var a = e.data
              , n = e.slug
              , t = e.map
              , l = a.general_info
              , f = (0,
            r.useContext)(c.AppContext)
              , p = f.setFooterBgColor
              , _ = f.setBreadCrumb;
            return (0,
            r.useEffect)(function() {
                return p("bg-footer-green"),
                _([{
                    label: l.label,
                    href: l.slug
                }]),
                function() {}
            }, [a]),
            (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)(i(), {
                    children: (0,
                    s.jsx)("title", {
                        children: "SiB Colombia | Biodiversidad en cifras"
                    })
                }), (0,
                s.jsx)(o.Z, {
                    slug: n,
                    title: l.label,
                    description: l.main_text,
                    imageMap: "mapas-svg-dep/mapa-".concat(n, ".svg"),
                    imageSmallDpto: "mapas-svg-dep/".concat(n, ".svg"),
                    especiesEstimadas: l.especies_region_estimadas,
                    especiesObservadas: l.especies_region_total,
                    marine: l.marino,
                    referencia: l.referencia,
                    photoLabel: l.credito_foto,
                    data: a,
                    isScale: !0,
                    map: t
                }), (0,
                s.jsx)(u.Z, {
                    data: a,
                    slug: n,
                    isScale: !0,
                    map: t
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [443, 298, 582, 832, 42, 413, 774, 888, 179], function() {
        return e(e.s = 92148)
    }),
    _N_E = e.O()
}
]);

