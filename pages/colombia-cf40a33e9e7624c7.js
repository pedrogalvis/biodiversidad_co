(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[110], {
    49704: function(e, t, o) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/colombia", function() {
            return o(1463)
        }
        ])
    },
    1463: function(e, t, o) {
        "use strict";
        o.r(t),
        o.d(t, {
            default: function() {
                return g
            }
        });
        var r = o(85893)
          , i = o(67294)
          , s = o(9008)
          , n = o.n(s)
          , a = o(31047)
          , p = o(37668)
          , l = o(5978)
          , c = o(1505);
        function g() {
            var e = l.general_info
              , t = (0,
            i.useContext)(p.AppContext)
              , o = t.setFooterBgColor
              , s = t.setBreadCrumb;
            (0,
            i.useEffect)(function() {
                return s([{
                    label: e.label
                }]),
                o("bg-footer-green"),
                function() {}
            }, []);
            var g, d = e.fecha_corte, m = new Date("1970-01-01"), u = new Date(m.getTime() + 864e5 * d).toLocaleDateString("es-co", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });
            return (0,
            r.jsxs)("div", {
                children: [(0,
                r.jsx)(n(), {
                    children: (0,
                    r.jsx)("title", {
                        children: "SiB Colombia | Biodiversidad en cifras"
                    })
                }), (0,
                r.jsx)(a.Z, {
                    slug: "colombia",
                    title: e.label,
                    description: "A " + u + e.main_text,
                    especiesEstimadas: e.especies_region_estimadas,
                    especiesObservadas: e.especies_region_total,
                    marine: e.marino,
                    imageMap: "images/colombia.svg",
                    referencia: e.referencia,
                    photoLabel: e.credito_foto
                }), (0,
                r.jsx)(c.Z, {
                    data: l,
                    slug: "colombia",
                    deparment: !0,
                    map: y
                })]
            })
        }
    }
}, function(e) {
    e.O(0, [443, 298, 582, 832, 42, 413, 978, 774, 888, 179], function() {
        return e(e.s = 49704)
    }),
    _N_E = e.O()
}
]);