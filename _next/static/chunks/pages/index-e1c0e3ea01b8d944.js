(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(a, b, c) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return c(6100)
            }])
        },
        1210: function(a, b) {
            "use strict";

            function c(a, b, c, d) {
                return !1
            }
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.getDomainLocale = c, ("function" == typeof b.default || "object" == typeof b.default && null !== b.default) && void 0 === b.default.__esModule && (Object.defineProperty(b.default, "__esModule", {
                value: !0
            }), Object.assign(b.default, b), a.exports = b.default)
        },
        8418: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            });
            var d = c(4941).Z;
            c(5753).default, Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.default = void 0;
            var e = c(2648).Z,
                f = c(7273).Z,
                g = e(c(7294)),
                h = c(6273),
                i = c(2725),
                j = c(3462),
                k = c(6238),
                l = c(7190),
                m = c(1210),
                n = c(8684),
                o = void 0 !== g.default.useTransition,
                p = {};

            function q(a, b, c, d) {
                if (a && h.isLocalURL(b)) {
                    a.prefetch(b, c, d).catch(function(a) {});
                    var e = d && void 0 !== d.locale ? d.locale : a && a.locale;
                    p[b + "%" + c + (e ? "%" + e : "")] = !0
                }
            }
            var r = g.default.forwardRef(function(a, b) {
                var c, e, r = '#',
                    s = a.as,
                    t = a.children,
                    u = a.prefetch,
                    v = a.passHref,
                    w = a.replace,
                    x = a.soft,
                    y = a.shallow,
                    z = a.scroll,
                    A = a.locale,
                    B = a.onClick,
                    C = a.onMouseEnter,
                    D = a.onTouchStart,
                    E = a.legacyBehavior,
                    F = void 0 === E ? !0 !== Boolean(!1) : E,
                    G = f(a, ["href", "as", "children", "prefetch", "passHref", "replace", "soft", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                c = t, F && ("string" == typeof c || "number" == typeof c) && (c = g.default.createElement("a", null, c));
                var H = !1 !== u,
                    I = d(o ? g.default.useTransition() : [], 2),
                    J = I[1],
                    K = g.default.useContext(j.RouterContext),
                    L = g.default.useContext(k.AppRouterContext);
                L && (K = L);
                var M = g.default.useMemo(function() {
                        var a = d(h.resolveHref(K, r, !0), 2),
                            b = a[0],
                            c = a[1];
                        return {
                            href: '#',
                            as: s ? h.resolveHref(K, s) : c || b
                        }
                    }, [K, r, s]),
                    N = M.href,
                    O = M.as,
                    P = g.default.useRef(N),
                    Q = g.default.useRef(O);
                F && (e = g.default.Children.only(c));
                var R = F ? e && "object" == typeof e && e.ref : b,
                    S = d(l.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    T = S[0],
                    U = S[1],
                    V = S[2],
                    W = g.default.useCallback(function(a) {
                        (Q.current !== O || P.current !== N) && (V(), Q.current = O, P.current = N), T(a), R && ("function" == typeof R ? R(a) : "object" == typeof R && (R.current = a))
                    }, [O, R, N, V, T]);
                g.default.useEffect(function() {
                    var a = U && H && h.isLocalURL(N),
                        b = void 0 !== A ? A : K && K.locale,
                        c = p[N + "%" + O + (b ? "%" + b : "")];
                    a && !c && q(K, N, O, {
                        locale: b
                    })
                }, [O, N, U, A, H, K]);
                var X = {
                    ref: W,
                    onClick: function(a) {
                        F || "function" != typeof B || B(a), F && e.props && "function" == typeof e.props.onClick && e.props.onClick(a), a.defaultPrevented || function(a, b, c, d, e, f, g, i, j, k) {
                            if ("A" !== a.currentTarget.nodeName.toUpperCase() || (!(m = (l = a).currentTarget.target) || "_self" === m) && !l.metaKey && !l.ctrlKey && !l.shiftKey && !l.altKey && (!l.nativeEvent || 2 !== l.nativeEvent.which) && h.isLocalURL(c)) {
                                a.preventDefault();
                                var l, m, n = function() {
                                    "softPush" in b && "softReplace" in b ? b[f ? e ? "softReplace" : "softPush" : e ? "replace" : "push"](c) : b[e ? "replace" : "push"](c, d, {
                                        shallow: g,
                                        locale: j,
                                        scroll: i
                                    })
                                };
                                k ? k(n) : n()
                            }
                        }(a, K, N, O, w, x, y, z, A, L ? J : void 0)
                    },
                    onMouseEnter: function(a) {
                        F || "function" != typeof C || C(a), F && e.props && "function" == typeof e.props.onMouseEnter && e.props.onMouseEnter(a), h.isLocalURL(N) && q(K, N, O, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(a) {
                        F || "function" != typeof D || D(a), F && e.props && "function" == typeof e.props.onTouchStart && e.props.onTouchStart(a), h.isLocalURL(N) && q(K, N, O, {
                            priority: !0
                        })
                    }
                };
                if (!F || v || "a" === e.type && !("href" in e.props)) {
                    var Y = void 0 !== A ? A : K && K.locale,
                        Z = K && K.isLocaleDomain && m.getDomainLocale(O, Y, K.locales, K.domainLocales);
                    X.href = '#'
                }
                return F ? g.default.cloneElement(e, X) : g.default.createElement("a", Object.assign({}, G, X), c)
            });
            b.default = r, ("function" == typeof b.default || "object" == typeof b.default && null !== b.default) && void 0 === b.default.__esModule && (Object.defineProperty(b.default, "__esModule", {
                value: !0
            }), Object.assign(b.default, b), a.exports = b.default)
        },
        6238: function(a, b, c) {
            "use strict";
            Object.defineProperty(b, "__esModule", {
                value: !0
            }), b.GlobalLayoutRouterContext = b.LayoutRouterContext = b.AppRouterContext = void 0;
            var d = (0, c(2648).Z)(c(7294)),
                e = d.default.createContext(null);
            b.AppRouterContext = e;
            var f = d.default.createContext(null);
            b.LayoutRouterContext = f;
            var g = d.default.createContext(null);
            b.GlobalLayoutRouterContext = g
        },
        6100: function(a, b, c) {
            "use strict";
            c.r(b), c.d(b, {
                default: function() {
                    return I
                }
            });
            var d = c(5893),
                e = c(5192),
                f = c(8197),
                g = c(3788),
                h = c(6875),
                i = c(1799),
                j = c(536),
                k = c.n(j),
                l = c(5675),
                m = c.n(l),
                n = c(1664),
                o = c.n(n),
                p = c(7294),
                q = c(9694),
                r = c(286),
                s = c(7815),
                t = function(a) {
                    var b = a.size;
                    return "aptos" === (0, q.iE)().current ? (0, d.jsx)(r.Nm, {
                        size: b
                    }) : (0, d.jsx)(r.FO, {
                        size: b
                    })
                },
                u = function(a) {
                    var b = a.width,
                        c = a.height,
                        e = a.style,
                        f = (0, q.iE)().current,
                        g = "aptos" === f ? 2591 : 2560,
                        h = b < g ? g : b,
                        j = h / g * 5311;
                    return "aptos" === f ? (0, d.jsx)("div", {
                        style: (0, i.Z)({
                            width: b,
                            height: c,
                            background: "#f9f9f9",
                            overflow: "hidden"
                        }, null != e ? e : {}),
                        children: (0, d.jsxs)("svg", {
                            width: h,
                            height: j,
                            viewBox: "0 0 2591 5311",
                            fill: "none",
                            style: {
                                filter: "blur(200px)"
                            },
                            children: [(0, d.jsxs)("g", {
                                filter: "url(#filter0_b_1318_1841)",
                                children: [(0, d.jsx)("path", {
                                    d: "M1357 821L529.5 1148.5L1469 1895.5L1357 821Z",
                                    fill: "#A7F12E",
                                    fillOpacity: "0.15"
                                }), (0, d.jsx)("path", {
                                    d: "M28 2041L1745 2063.5L1219.29 2785L28 2041Z",
                                    fill: "#45A9B7",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M0 2652L1717 2674.5L1191.29 3396L0 2652Z",
                                    fill: "#45B7A9",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1758 145.5L1096.5 174.5L1048 1152L1758 145.5Z",
                                    fill: "#44EAAE",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1716.5 625.5L122 276L178.5 1231.5L1716.5 625.5Z",
                                    fill: "#33DF2F",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1553 4089L1370 3676L892 4089H1553Z",
                                    fill: "#2FDADF",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M397 2628L55 1582L1120 1598L397 2628Z",
                                    fill: "#02B634",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M370 4261L28 3215L1093 3231L370 4261Z",
                                    fill: "#BEF34C",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1061 5206.5L199.5 4774L1729 4274.5L1061 5206.5Z",
                                    fill: "#7CD4DA",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1615.5 3976L1729 2528.5L2590.5 1895L1615.5 3976Z",
                                    fill: "#A0DA7C",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1469 2446L1582.5 998.5L2572.5 2065.5L1469 2446Z",
                                    fill: "#49A25C",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1758 1357.5L2424 2.5L2576 1543L1758 1357.5Z",
                                    fill: "#49A29C",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1065.5 5049L1606 3608L2565 5281.5L1065.5 5049Z",
                                    fill: "#97DC8B",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M370 4028L910.5 2587L1548 4491L370 4028Z",
                                    fill: "#8BDCB5",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1223 1540L1763.5 99L2401 2003L1223 1540Z",
                                    fill: "#8BDCB5",
                                    fillOpacity: "0.1"
                                })]
                            }), (0, d.jsx)("defs", {
                                children: (0, d.jsxs)("filter", {
                                    id: "filter0_b_1318_1841",
                                    x: "-4",
                                    y: "-4",
                                    width: "2598.5",
                                    height: "5319",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [(0, d.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix"
                                    }), (0, d.jsx)("feGaussianBlur", {
                                        in: "BackgroundImageFix",
                                        stdDeviation: "2"
                                    }), (0, d.jsx)("feComposite", {
                                        in2: "SourceAlpha",
                                        operator: "in",
                                        result: "effect1_backgroundBlur_1318_1841"
                                    }), (0, d.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "effect1_backgroundBlur_1318_1841",
                                        result: "shape"
                                    })]
                                })
                            })]
                        })
                    }) : (0, d.jsx)("div", {
                        style: (0, i.Z)({
                            width: b,
                            height: c,
                            background: "#f9f9f9",
                            overflow: "hidden"
                        }, null != e ? e : {}),
                        children: (0, d.jsxs)("svg", {
                            width: h,
                            height: j,
                            viewBox: "0 0 2560 5311",
                            fill: "none",
                            style: {
                                filter: "blur(200px)"
                            },
                            children: [(0, d.jsxs)("g", {
                                clipPath: "url(#clip0_1224_1842)",
                                filter: "url(#filter0_b_1224_1842)",
                                children: [(0, d.jsx)("path", {
                                    d: "M1329 821L501.5 1148.5L1441 1895.5L1329 821Z",
                                    fill: "#2E98F1",
                                    fillOpacity: "0.15"
                                }), (0, d.jsx)("path", {
                                    d: "M2168.5 3024L1341 3351.5L2280.5 4098.5L2168.5 3024Z",
                                    fill: "#9BF12E",
                                    fillOpacity: "0.15"
                                }), (0, d.jsx)("path", {
                                    d: "M2352.5 821L1525 1148.5L2464.5 1895.5L2352.5 821Z",
                                    fill: "#2E98F1",
                                    fillOpacity: "0.15"
                                }), (0, d.jsx)("path", {
                                    d: "M2448.5 2091L1174.5 3224.5L1744 3494L2448.5 2091Z",
                                    fill: "#11AA7C",
                                    fillOpacity: "0.15"
                                }), (0, d.jsx)("path", {
                                    d: "M2448 3908L1174 5041.5L1743.5 5311L2448 3908Z",
                                    fill: "#11AA7C",
                                    fillOpacity: "0.15"
                                }), (0, d.jsx)("path", {
                                    d: "M0 2041L1717 2063.5L1191.29 2785L0 2041Z",
                                    fill: "#4572B7",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M-28 2652L1689 2674.5L1163.29 3396L-28 2652Z",
                                    fill: "#4572B7",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1174 145L2563.5 -3L2365.29 889L1174 145Z",
                                    fill: "#4572B7",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1730 145.5L1068.5 174.5L1020 1152L1730 145.5Z",
                                    fill: "#44EA69",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1688.5 625.5L94 276L150.5 1231.5L1688.5 625.5Z",
                                    fill: "#2FDADF",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1525 4089L1342 3676L864 4089H1525Z",
                                    fill: "#2FDADF",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M369 2628L27 1582L1092 1598L369 2628Z",
                                    fill: "#4CF399",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M342 4261L0 3215L1065 3231L342 4261Z",
                                    fill: "#4CF399",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M272 5786L171.5 4774L1701 4274.5L272 5786Z",
                                    fill: "#A57CDA",
                                    fillOpacity: "0.1"
                                }), (0, d.jsx)("path", {
                                    d: "M1441.5 4920L1341 3908L2848.5 5030.5L1441.5 4920Z",
                                    fill: "#A57CDA",
                                    fillOpacity: "0.1"
                                })]
                            }), (0, d.jsxs)("defs", {
                                children: [(0, d.jsxs)("filter", {
                                    id: "filter0_b_1224_1842",
                                    x: "-4",
                                    y: "-4",
                                    width: "2568",
                                    height: "5319",
                                    filterUnits: "userSpaceOnUse",
                                    colorInterpolationFilters: "sRGB",
                                    children: [(0, d.jsx)("feFlood", {
                                        floodOpacity: "0",
                                        result: "BackgroundImageFix"
                                    }), (0, d.jsx)("feGaussianBlur", {
                                        in: "BackgroundImageFix",
                                        stdDeviation: "2"
                                    }), (0, d.jsx)("feComposite", {
                                        in2: "SourceAlpha",
                                        operator: "in",
                                        result: "effect1_backgroundBlur_1224_1842"
                                    }), (0, d.jsx)("feBlend", {
                                        mode: "normal",
                                        in: "SourceGraphic",
                                        in2: "effect1_backgroundBlur_1224_1842",
                                        result: "shape"
                                    })]
                                }), (0, d.jsx)("clipPath", {
                                    id: "clip0_1224_1842",
                                    children: (0, d.jsx)("rect", {
                                        width: "2560",
                                        height: "5311",
                                        fill: "white"
                                    })
                                })]
                            })]
                        })
                    })
                },
                v = function() {
                    var a = (0, q.iE)().current;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(k(), {
                            id: "7682d08848e75f59",
                            children: ".intro-header-frame.jsx-7682d08848e75f59{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:4px 0px;gap:8px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;font-style:normal;font-weight:600;font-size:24px;line-height:36px;color:#343434}"
                        }), (0, d.jsxs)("div", {
                            style: {
                                cursor: "default"
                            },
                            className: "jsx-7682d08848e75f59 intro-header-frame",
                            children: [(0, d.jsx)(t, {
                                size: 45
                            }), (0, d.jsx)("span", {
                                className: "jsx-7682d08848e75f59",
                                children: "aptos" == a ? "Aptoswap" : "Suiswap"
                            })]
                        })]
                    })
                },
                w = function(a) {
                    var b = a.onClickEnterApp,
                        c = (0, q.iE)().current,
                        e = (0, q.Yb)(),
                        f = e.twitter,
                        g = e.discord;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(k(), {
                            id: "161f232f5692080d",
                            children: '.intro-main-title-frame.jsx-161f232f5692080d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:28.5px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-main-title-text-frame.jsx-161f232f5692080d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:9px;max-width:583px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-main-title-text-frame-1.jsx-161f232f5692080d{font-style:normal;font-weight:700;font-size:48px;line-height:72px;text-align:center;color:#343434}.intro-main-title-text-frame-2.jsx-161f232f5692080d{font-family:"Poppins";font-style:normal;font-weight:500;font-size:18px;line-height:27px;text-align:center;color:#9da3ae}.intro-enter-app-frame.jsx-161f232f5692080d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:18px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-enter-app-button.jsx-161f232f5692080d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:2px;width:118px;height:38px;background:-webkit-linear-gradient(227.05deg,rgba(46,136,241,.85)15.11%,rgba(46,241,218,.85)88.89%);background:-moz-linear-gradient(227.05deg,rgba(46,136,241,.85)15.11%,rgba(46,241,218,.85)88.89%);background:-o-linear-gradient(227.05deg,rgba(46,136,241,.85)15.11%,rgba(46,241,218,.85)88.89%);background:linear-gradient(222.95deg,rgba(46,136,241,.85)15.11%,rgba(46,241,218,.85)88.89%);-webkit-box-shadow:-8px 9px 15px rgba(169,169,169,.25),0px 4px 15px rgba(46,229,241,.75);-moz-box-shadow:-8px 9px 15px rgba(169,169,169,.25),0px 4px 15px rgba(46,229,241,.75);box-shadow:-8px 9px 15px rgba(169,169,169,.25),0px 4px 15px rgba(46,229,241,.75);-webkit-border-radius:12px;-moz-border-radius:12px;border-radius:12px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;font-style:normal;font-weight:700;font-size:16px;line-height:24px;color:#fff;cursor:pointer;-webkit-transition:-webkit-transform.2s ease-out,border-radius.2s ease-out;-moz-transition:-moz-transform.2s ease-out,border-radius.2s ease-out;-o-transition:-o-transform.2s ease-out,border-radius.2s ease-out;transition:-webkit-transform.2s ease-out,border-radius.2s ease-out;transition:-moz-transform.2s ease-out,border-radius.2s ease-out;transition:-o-transform.2s ease-out,border-radius.2s ease-out;transition:transform.2s ease-out,border-radius.2s ease-out}.intro-enter-app-social-frame.jsx-161f232f5692080d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px 0px 0px 0px;gap:6px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-enter-app-button-suiswap.jsx-161f232f5692080d{background:-webkit-linear-gradient(227.05deg,rgba(46,136,241,.85)15.11%,rgba(46,241,218,.85)88.89%);background:-moz-linear-gradient(227.05deg,rgba(46,136,241,.85)15.11%,rgba(46,241,218,.85)88.89%);background:-o-linear-gradient(227.05deg,rgba(46,136,241,.85)15.11%,rgba(46,241,218,.85)88.89%);background:linear-gradient(222.95deg,rgba(46,136,241,.85)15.11%,rgba(46,241,218,.85)88.89%);-webkit-box-shadow:-8px 9px 15px rgba(169,169,169,.25),0px 4px 15px rgba(46,229,241,.75);-moz-box-shadow:-8px 9px 15px rgba(169,169,169,.25),0px 4px 15px rgba(46,229,241,.75);box-shadow:-8px 9px 15px rgba(169,169,169,.25),0px 4px 15px rgba(46,229,241,.75)}.intro-enter-app-button-aptoswap.jsx-161f232f5692080d{background:-webkit-linear-gradient(227.05deg,rgba(35,204,62,.85)15.11%,rgba(46,241,218,.85)88.89%);background:-moz-linear-gradient(227.05deg,rgba(35,204,62,.85)15.11%,rgba(46,241,218,.85)88.89%);background:-o-linear-gradient(227.05deg,rgba(35,204,62,.85)15.11%,rgba(46,241,218,.85)88.89%);background:linear-gradient(222.95deg,rgba(35,204,62,.85)15.11%,rgba(46,241,218,.85)88.89%);-webkit-box-shadow:-8px 9px 15px rgba(169,169,169,.25),0px 4px 15px rgba(98,238,171,.75);-moz-box-shadow:-8px 9px 15px rgba(169,169,169,.25),0px 4px 15px rgba(98,238,171,.75);box-shadow:-8px 9px 15px rgba(169,169,169,.25),0px 4px 15px rgba(98,238,171,.75)}.intro-enter-app-button.jsx-161f232f5692080d:hover{-webkit-transform:scale(1.02,1.02);-moz-transform:scale(1.02,1.02);-ms-transform:scale(1.02,1.02);-o-transform:scale(1.02,1.02);transform:scale(1.02,1.02);-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px}'
                        }), (0, d.jsxs)("div", {
                            className: "jsx-161f232f5692080d intro-main-title-frame",
                            children: [(0, d.jsxs)("div", {
                                className: "jsx-161f232f5692080d intro-main-title-text-frame",
                                children: [(0, d.jsx)("span", {
                                    className: "jsx-161f232f5692080d intro-main-title-text-frame-1",
                                    children: "aptos" == c ? "Unified Trade Infrastructure for Aptos" : "Unified Trade Infrastructure for SUI"
                                }), (0, d.jsx)("span", {
                                    className: "jsx-161f232f5692080d intro-main-title-text-frame-2",
                                    children: "aptos" == c ? "Trade elegantly, deposit with best rewards and experience the speed and security powered by APTOS" : "Trade elegantly, deposit with best rewards and experience the speed and security powered by SUI"
                                })]
                            }), (0, d.jsxs)("div", {
                                className: "jsx-161f232f5692080d intro-enter-app-frame",
                                children: [(0, d.jsx)("a", {
                                    className: "jsx-161f232f5692080d " + (("aptos" === c ? "intro-enter-app-button intro-enter-app-button-aptoswap" : "intro-enter-app-button intro-enter-app-button-suiswap") || "") + ' connectButton',
                                    children: "Enter App",
                                    id: 'messageButton',
                                }), (0, d.jsxs)("div", {
                                    className: "jsx-161f232f5692080d intro-enter-app-social-frame",
                                    children: [void 0 !== g ? (0, d.jsx)("a", {
                                        href: '#',
                                        target: "_blank",
                                        rel: "noreferrer",
                                        style: {
                                            filter: "drop-shadow(0px 2px 4px #5865f2)",
                                            borderRadius: 12,
                                            overflow: "hidden"
                                        },
                                        className: "jsx-161f232f5692080d anim-hover-transition-bigger-105",
                                        children: (0, d.jsx)(m(), {
                                            alt: "href-icon-discord",
                                            src: "./images/social/icon-discord.svg",
                                            width: 24,
                                            height: 24
                                        })
                                    }) : (0, d.jsx)(d.Fragment, {}), void 0 !== f ? (0, d.jsx)("a", {
                                        href: "#",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        style: {
                                            filter: "drop-shadow(0px 2px 4px #1d9bf0)",
                                            borderRadius: 12,
                                            overflow: "hidden"
                                        },
                                        className: "jsx-161f232f5692080d anim-hover-transition-bigger-105",
                                        children: (0, d.jsx)(m(), {
                                            alt: "href-icon-twitter",
                                            src: "./images/social/icon-twitter.svg",
                                            width: 24,
                                            height: 24
                                        })
                                    }) : (0, d.jsx)(d.Fragment, {})]
                                })]
                            })]
                        })]
                    })
                },
                x = function(a) {
                    var b = a.parentWidth,
                        c = (0, p.useState)(!1),
                        e = c[0],
                        f = c[1],
                        g = 675 < b ? 675 : b;
                    return (0, d.jsx)("div", {
                        className: "anim-hover-transition-bigger-102",
                        children: (0, d.jsx)(m(), {
                            src: "./images/misc/intro-content-detail-demo-img.png",
                            alt: "demo",
                            width: e ? g : 0,
                            height: e ? g / 675 * 768.5 : 0,
                            onLoadingComplete: function() {
                                f(!0)
                            }
                        })
                    })
                },
                y = function(a) {
                    var b = a.width,
                        c = a.textFrameWidthRatio,
                        e = a.imageApsectRatio,
                        f = a.title,
                        g = a.text,
                        h = a.imageSrc,
                        i = a.titleImageSrc,
                        j = a.align,
                        l = (0, p.useState)(!1),
                        n = l[0],
                        o = l[1],
                        q = (0, p.useState)(!1),
                        r = q[0],
                        s = q[1],
                        t = n ? j : "only-text",
                        u = "only-text" === t ? b : c * b,
                        v = b - u,
                        w = (0, d.jsxs)(d.Fragment, {
                            children: [(0, d.jsx)(k(), {
                                id: "e2c2f06da8c71147",
                                children: ".intro-content-detail-card-text-frame.jsx-e2c2f06da8c71147{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0px;gap:5px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-content-detail-card-text-frame-center.jsx-e2c2f06da8c71147{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0px;gap:5px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.intro-content-detail-card-text-emoji-frame.jsx-e2c2f06da8c71147{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-content-detail-card-text-title-frame.jsx-e2c2f06da8c71147{font-style:normal;font-weight:700;font-size:36px;color:#343434;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-content-detail-card-text-detail-frame.jsx-e2c2f06da8c71147{font-style:normal;font-weight:500;font-size:18px;color:#9da3ae;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-content-detail-card-image-frame.jsx-e2c2f06da8c71147{-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}"
                            }), (0, d.jsxs)("div", {
                                style: "only-text" == t ? {
                                    width: b
                                } : {
                                    order: "left" === t ? 0 : 1,
                                    width: u
                                },
                                className: "jsx-e2c2f06da8c71147 " + (("only-text" == t ? "intro-content-detail-card-text-frame-center" : "intro-content-detail-card-text-frame") || ""),
                                children: [(0, d.jsx)("div", {
                                    style: {
                                        alignItems: "only-text" === t ? "center" : void 0
                                    },
                                    className: "jsx-e2c2f06da8c71147 intro-content-detail-card-text-emoji-frame",
                                    children: (0, d.jsx)(m(), {
                                        src: i,
                                        width: r ? 83 : 0,
                                        height: r ? 83 : 0,
                                        alt: "",
                                        onLoadingComplete: function() {
                                            s(!0)
                                        }
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "jsx-e2c2f06da8c71147 intro-content-detail-card-text-title-frame",
                                    children: (0, d.jsx)("span", {
                                        style: {
                                            textAlign: "center"
                                        },
                                        className: "jsx-e2c2f06da8c71147",
                                        children: f
                                    })
                                }), (0, d.jsx)("div", {
                                    className: "jsx-e2c2f06da8c71147 intro-content-detail-card-text-detail-frame",
                                    children: (0, d.jsx)("span", {
                                        style: {
                                            textAlign: "center"
                                        },
                                        className: "jsx-e2c2f06da8c71147",
                                        children: g
                                    })
                                })]
                            })]
                        }),
                        x = (0, d.jsx)("div", {
                            className: "anim-hover-transition-bigger-102",
                            children: (0, d.jsx)(m(), {
                                src: h,
                                alt: "",
                                width: v,
                                height: v / e,
                                style: {
                                    order: "left" === t ? 1 : 0
                                },
                                onLoadingComplete: function() {
                                    o(!0)
                                }
                            })
                        });
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(k(), {
                            id: "85d51482aa1bbf5f",
                            children: ".intro-content-detail-card-frame.jsx-85d51482aa1bbf5f{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:41.25px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}"
                        }), (0, d.jsxs)("div", {
                            style: {
                                width: b
                            },
                            className: "jsx-85d51482aa1bbf5f intro-content-detail-card-frame",
                            children: [w, x]
                        })]
                    })
                },
                z = function(a) {
                    var b = a.width,
                        c = (0, q.Yb)(),
                        e = c.twitter,
                        f = c.discord,
                        g = c.documentation;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(k(), {
                            id: "d9b4bad5924ca6bc",
                            children: ".intro-content-detail-explore-more-frame.jsx-d9b4bad5924ca6bc{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:25px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-content-detail-explore-more-frame-title.jsx-d9b4bad5924ca6bc{font-style:normal;font-weight:700;font-size:36px;line-height:54px;text-align:center;color:#343434;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-content-detail-explore-more-frame-link-group.jsx-d9b4bad5924ca6bc{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:31px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-content-detail-explore-more-frame-link-group-card.jsx-d9b4bad5924ca6bc{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:10px;width:108px;height:124px;background:rgba(255,255,255,.2);-webkit-box-shadow:-21px 24px 11px rgba(204,201,201,.25);-moz-box-shadow:-21px 24px 11px rgba(204,201,201,.25);box-shadow:-21px 24px 11px rgba(204,201,201,.25);-webkit-border-radius:22px;-moz-border-radius:22px;border-radius:22px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;font-style:normal;font-weight:700;font-size:18px;line-height:27px;text-align:center;color:#343434;-webkit-transition:-webkit-transform.3s ease-out,box-shadow.3s ease-out;-moz-transition:-moz-transform.3s ease-out,box-shadow.3s ease-out;-o-transition:-o-transform.3s ease-out,box-shadow.3s ease-out;transition:-webkit-transform.3s ease-out,box-shadow.3s ease-out;transition:-moz-transform.3s ease-out,box-shadow.3s ease-out;transition:-o-transform.3s ease-out,box-shadow.3s ease-out;transition:transform.3s ease-out,box-shadow.3s ease-out}.intro-content-detail-explore-more-frame-link-group-card.jsx-d9b4bad5924ca6bc:hover{-webkit-transform:translate(7px,-15px)scale(1.02,1.02);-moz-transform:translate(7px,-15px)scale(1.02,1.02);-ms-transform:translate(7px,-15px)scale(1.02,1.02);-o-transform:translate(7px,-15px)scale(1.02,1.02);transform:translate(7px,-15px)scale(1.02,1.02);-webkit-box-shadow:-31px 34px 11px rgba(204,201,201,.1);-moz-box-shadow:-31px 34px 11px rgba(204,201,201,.1);box-shadow:-31px 34px 11px rgba(204,201,201,.1)}"
                        }), (0, d.jsxs)("div", {
                            style: {
                                width: b
                            },
                            className: "jsx-d9b4bad5924ca6bc intro-content-detail-explore-more-frame",
                            children: [(0, d.jsx)("span", {
                                className: "jsx-d9b4bad5924ca6bc intro-content-detail-explore-more-frame-title",
                                children: "Explore More"
                            }), (0, d.jsxs)("div", {
                                style: {
                                    flexDirection: b < 600 ? "column" : "row"
                                },
                                className: "jsx-d9b4bad5924ca6bc intro-content-detail-explore-more-frame-link-group",
                                children: [(0, d.jsx)(o(), {
                                    href: '#',
                                    passHref: !0,
                                    legacyBehavior: !0,
                                    children: (0, d.jsxs)("a", {
                                        target: "_blank",
                                        className: "jsx-d9b4bad5924ca6bc intro-content-detail-explore-more-frame-link-group-card",
                                        children: [(0, d.jsx)(m(), {
                                            src: "./images/misc/intro-discord-icon.svg",
                                            width: 47.28,
                                            height: 37,
                                            alt: ""
                                        }), (0, d.jsx)("span", {
                                            className: "jsx-d9b4bad5924ca6bc",
                                            children: "Discord"
                                        })]
                                    })
                                }), (0, d.jsx)(o(), {
                                    href: '#',
                                    passHref: !0,
                                    legacyBehavior: !0,
                                    children: (0, d.jsxs)("a", {
                                        target: "_blank",
                                        className: "jsx-d9b4bad5924ca6bc intro-content-detail-explore-more-frame-link-group-card",
                                        children: [(0, d.jsx)(m(), {
                                            src: "./images/misc/intro-twitter-icon.svg",
                                            width: 50,
                                            height: 40.7,
                                            alt: ""
                                        }), (0, d.jsx)("span", {
                                            className: "jsx-d9b4bad5924ca6bc",
                                            children: "Twitter"
                                        })]
                                    })
                                }), void 0 !== g ? (0, d.jsx)(o(), {
                                    href: '#',
                                    passHref: !0,
                                    legacyBehavior: !0,
                                    children: (0, d.jsxs)("a", {
                                        target: "_blank",
                                        className: "jsx-d9b4bad5924ca6bc intro-content-detail-explore-more-frame-link-group-card",
                                        children: [(0, d.jsx)(m(), {
                                            src: "./misc/face-with-monocle_1f9d0_shrinked.gif",
                                            width: 40,
                                            height: 41.95,
                                            alt: ""
                                        }), (0, d.jsx)("span", {
                                            className: "jsx-d9b4bad5924ca6bc",
                                            children: "Docs"
                                        })]
                                    })
                                }) : (0, d.jsx)(d.Fragment, {})]
                            })]
                        })]
                    })
                },
                A = function() {
                    var a, b = (null !== (a = (0, s.o)().window.width) && void 0 !== a ? a : 0) - 20,
                        c = Math.min(b, 825),
                        e = c < 550,
                        f = (0, q.iE)().current;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(k(), {
                            id: "e7e8fdc6aef08324",
                            children: ".intro-content-detail-frame.jsx-e7e8fdc6aef08324{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:67.5px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-content-detail-inner-frame.jsx-e7e8fdc6aef08324{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:46.5px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-ordinal-group:1;-webkit-order:0;-moz-box-ordinal-group:1;-ms-flex-order:0;order:0;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}"
                        }), (0, d.jsx)("div", {
                            className: "jsx-e7e8fdc6aef08324 intro-content-detail-frame",
                            children: (0, d.jsxs)("div", {
                                className: "jsx-e7e8fdc6aef08324 intro-content-detail-inner-frame",
                                children: [(0, d.jsx)(x, {
                                    parentWidth: b
                                }), (0, d.jsx)(y, {
                                    width: c,
                                    title: "Trade with Simple One Click",
                                    text: "Multiple assets, slippage control, we are making a DEX for everyone to use",
                                    imageSrc: "./images/misc/confirm-swap-frame.png",
                                    titleImageSrc: "./images/misc/partying-face_1f973_shrinked.gif",
                                    align: e ? "only-text" : "left",
                                    textFrameWidthRatio: 400 / 825,
                                    imageApsectRatio: 848 / 850
                                }), (0, d.jsx)(y, {
                                    width: c,
                                    title: "aptos" === f ? "Best Mining Reward in Aptos" : "Best Mining Reward in SUI",
                                    text: "We provide the max liquidity reward with additional incentive boost back to the liquidity and token holders",
                                    imageSrc: "./images/misc/image-intro-mining-reward.png",
                                    titleImageSrc: "./images/misc/money-mouth-face_1f911_shrinked.gif",
                                    align: e ? "only-text" : "right",
                                    textFrameWidthRatio: 400 / 825,
                                    imageApsectRatio: 784 / 900
                                }), (0, d.jsx)(y, {
                                    width: c,
                                    title: "Trust by Ecosystems",
                                    text: "We are making connections with wallets, aggregators and other protocols to make the ecosystem better",
                                    imageSrc: "aptos" === f ? "./images/misc/image-intro-trust-by-ecosystem-aptos.png" : "./images/misc/image-intro-trust-by-ecosystem-sui.png",
                                    titleImageSrc: "./images/misc/heart-hands_1faf6_shrinked.gif",
                                    align: e ? "only-text" : "left",
                                    textFrameWidthRatio: .5,
                                    imageApsectRatio: 825 / 638
                                }), (0, d.jsx)(z, {
                                    width: b
                                })]
                            })
                        })]
                    })
                },
                B = function(a) {
                    var b = a.onClickEnterApp;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(k(), {
                            id: "892c65ea815889bd",
                            children: ".intro-content-frame.jsx-892c65ea815889bd{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:31.5px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}"
                        }), (0, d.jsxs)("div", {
                            className: "jsx-892c65ea815889bd intro-content-frame",
                            children: [(0, d.jsx)(w, {
                                onClickEnterApp: b
                            }), (0, d.jsx)(A, {})]
                        })]
                    })
                },
                C = function() {
                    var a, b = (null !== (a = (0, s.o)().window.width) && void 0 !== a ? a : 0) - 20;
                    b > 1100 && (b = 1100);
                    var c = b < 620,
                        e = (0, q.Yb)(),
                        f = e.twitter,
                        g = e.discord,
                        h = e.sdk,
                        i = e.documentation,
                        j = e.email,
                        l = (0, q.iE)().current;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(k(), {
                            id: "f31de3ae3f0584b7",
                            children: ".intro-footer-frame.jsx-f31de3ae3f0584b7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:40px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-footer-split-line.jsx-f31de3ae3f0584b7{height:2px;background:#fff;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-footer-content-frame.jsx-f31de3ae3f0584b7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-footer-content-frame-vertical.jsx-f31de3ae3f0584b7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:15px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-footer-content-frame-left.jsx-f31de3ae3f0584b7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:4px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;font-style:normal;font-weight:600;font-size:28px;line-height:48px;color:#343434}.intro-footer-content-frame-right.jsx-f31de3ae3f0584b7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0px;gap:40px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-footer-content-frame-right-column.jsx-f31de3ae3f0584b7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-moz-box-align:start;-ms-flex-align:start;align-items:flex-start;padding:0px;gap:8px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}.intro-footer-content-frame-right-title.jsx-f31de3ae3f0584b7{font-style:normal;font-weight:600;font-size:18px;color:#343434;cursor:default}.intro-footer-content-frame-right-line.jsx-f31de3ae3f0584b7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:11px;-moz-border-radius:11px;border-radius:11px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0;font-style:normal;font-weight:400;font-size:16px;color:#9da3ae;-webkit-transition:padding.3s ease-out,background-color.3s ease-out;-moz-transition:padding.3s ease-out,background-color.3s ease-out;-o-transition:padding.3s ease-out,background-color.3s ease-out;transition:padding.3s ease-out,background-color.3s ease-out}.intro-footer-content-frame-right-line.jsx-f31de3ae3f0584b7:hover{padding:4px 8px;background-color:rgba(255,255,255,.5)}"
                        }), (0, d.jsxs)("div", {
                            className: "jsx-f31de3ae3f0584b7 intro-footer-frame",
                            children: [(0, d.jsx)("div", {
                                className: "jsx-f31de3ae3f0584b7 intro-footer-split-line"
                            }), (0, d.jsxs)("div", {
                                style: {
                                    width: b
                                },
                                className: "jsx-f31de3ae3f0584b7 " + ((c ? "intro-footer-content-frame-vertical" : "intro-footer-content-frame") || ""),
                                children: [(0, d.jsxs)("div", {
                                    className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-left",
                                    children: [(0, d.jsx)(t, {
                                        size: 40
                                    }), (0, d.jsx)("span", {
                                        className: "jsx-f31de3ae3f0584b7",
                                        children: "aptos" === l ? "Aptoswap" : "Suiswap"
                                    })]
                                }), (0, d.jsxs)("div", {
                                    className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right",
                                    children: [(0, d.jsxs)("div", {
                                        className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right-column",
                                        children: [(0, d.jsx)("span", {
                                            className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right-title",
                                            children: "About"
                                        }), (0, d.jsx)(o(), {
                                            href: '#',
                                            passHref: !0,
                                            legacyBehavior: !0,
                                            children: (0, d.jsx)("a", {
                                                target: "_blank",
                                                className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right-line",
                                                children: (0, d.jsx)("span", {
                                                    className: "jsx-f31de3ae3f0584b7",
                                                    children: "Twitter"
                                                })
                                            })
                                        }), (0, d.jsx)(o(), {
                                            href: '#',
                                            passHref: !0,
                                            legacyBehavior: !0,
                                            children: (0, d.jsx)("a", {
                                                target: "_blank",
                                                className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right-line",
                                                children: (0, d.jsx)("span", {
                                                    className: "jsx-f31de3ae3f0584b7",
                                                    children: "Discord"
                                                })
                                            })
                                        }), (0, d.jsx)(o(), {
                                            href: '#',
                                            passHref: !0,
                                            legacyBehavior: !0,
                                            children: (0, d.jsx)("a", {
                                                target: "_blank",
                                                className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right-line",
                                                children: (0, d.jsx)("span", {
                                                    className: "jsx-f31de3ae3f0584b7",
                                                    children: "SDK"
                                                })
                                            })
                                        }), (0, d.jsx)(o(), {
                                            href: '#',
                                            passHref: !0,
                                            legacyBehavior: !0,
                                            children: (0, d.jsx)("a", {
                                                target: "_blank",
                                                className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right-line",
                                                children: (0, d.jsx)("span", {
                                                    className: "jsx-f31de3ae3f0584b7",
                                                    children: "Documentation"
                                                })
                                            })
                                        })]
                                    }), (0, d.jsxs)("div", {
                                        className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right-column",
                                        children: [(0, d.jsx)("span", {
                                            className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right-title",
                                            children: "Get in Touch"
                                        }), (0, d.jsx)(o(), {
                                            href: '#',
                                            passHref: !0,
                                            legacyBehavior: !0,
                                            children: (0, d.jsx)("a", {
                                                target: "_blank",
                                                className: "jsx-f31de3ae3f0584b7 intro-footer-content-frame-right-line",
                                                children: "Contact Us"
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                D = function(a) {
                    var b, c = a.onClickEnterApp,
                        e = null !== (b = (0, s.o)().window.width) && void 0 !== b ? b : 0;
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(k(), {
                            id: "f4b186b600d1e67b",
                            children: ".intro-main-frame.jsx-f4b186b600d1e67b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:108px;position:absolute;left:0px;top:43px}.intro-main-frame-inner.jsx-f4b186b600d1e67b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;gap:31px;max-width:825px;-webkit-box-flex:0;-webkit-flex:none;-moz-box-flex:0;-ms-flex:none;flex:none;-webkit-box-flex:0;-webkit-flex-grow:0;-moz-box-flex:0;-ms-flex-positive:0;flex-grow:0}"
                        }), (0, d.jsxs)("div", {
                            style: {
                                width: e,
                                overflow: "hidden"
                            },
                            className: "jsx-f4b186b600d1e67b intro-main-frame",
                            children: [(0, d.jsxs)("div", {
                                className: "jsx-f4b186b600d1e67b intro-main-frame-inner",
                                children: [(0, d.jsx)(v, {}), (0, d.jsx)(B, {
                                    onClickEnterApp: c
                                })]
                            }), (0, d.jsx)(C, {})]
                        })]
                    })
                },
                E = function(a) {
                    var b, c = a.onClickEnterApp,
                        e = null !== (b = (0, s.o)().window.width) && void 0 !== b ? b : 0;
                    return (0, p.useEffect)(function() {
                        var a = window.document.body.style.overflowX;
                        return window.document.body.style.overflowX = "hidden",
                            function() {
                                window.document.body.style.overflowX = a
                            }
                    }, []), (0, d.jsxs)("div", {
                        children: [(0, d.jsx)(u, {
                            width: e,
                            height: 3258
                        }), (0, d.jsx)(D, {
                            onClickEnterApp: c
                        })]
                    })
                },
                F = c(1163),
                G = function() {
                    var a = (0, F.useRouter)(),
                        b = (0, p.useCallback)(function() {
                            a.push({
                                pathname: "/app"
                            })
                        }, [a]);
                    return (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(E, {
                            onClickEnterApp: b
                        })
                    })
                },
                H = function() {
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(e.UJ, {}), (0, d.jsx)(s.K, {
                            children: (0, d.jsx)(f.t, {
                                children: (0, d.jsxs)(g.z, {
                                    children: [(0, d.jsx)(G, {}), (0, d.jsx)(h.tP, {})]
                                })
                            })
                        })]
                    })
                },
                I = H
        },
        1664: function(a, b, c) {
            a.exports = c(8418)
        },
        1163: function(a, b, c) {
            a.exports = c(387)
        }
    },
    function(a) {
        a.O(0, [219, 524, 795, 292, 934, 192, 926, 774, 888, 179], function() {
            var b;
            return a(a.s = 8312)
        }), _N_E = a.O()
    }
])