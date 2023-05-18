/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function (e) {
            return t.flat.call(e)
        } : function (e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function (e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0",
        S = function (e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function () {
            return s.call(this)
        },
        get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function (e) {
            return S.each(this, e)
        },
        map: function (n) {
            return this.pushStack(S.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function () {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        even: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function () {
            return this.pushStack(S.grep(this, function (e, t) {
                return t % 2
            }))
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        },
        noop: function () {},
        isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function (e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function (e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function (e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function (e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function (e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function () {
                T()
            },
            ae = be(function (e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function (e, t) {
                    L.apply(e, O.call(t))
                } : function (e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    } if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function (o) {
                return o = +o, le(function (e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function (e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function (e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function (e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function (e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function (e) {
                    var t = e.replace(te, ne);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function (e) {
                    var n = e.replace(te, ne);
                    return function (e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function (e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function (e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function (e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function (e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function (e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function (e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function (e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function (e) {
                return (e + "").replace(re, ie)
            }, se.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (n, r, i) {
                        return function (e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function (h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function (e) {
                            return !!e.parentNode
                        } : function (e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function (e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function (e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function (e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function (e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function (e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function (t) {
                        return function (e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function (t) {
                        return t = t.replace(te, ne),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function (n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function (e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function (e) {
                        return e === a
                    },
                    focus: function (e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function (e) {
                        return J.test(e.nodeName)
                    },
                    input: function (e) {
                        return Q.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function () {
                        return [0]
                    }),
                    last: ve(function (e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function (e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function (e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function (e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
                    return e === i
                }, a, !0), l = be(function (e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function (e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                } return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function (e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function (e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                } i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                } return r
        },
        T = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function (e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function (e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function () {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function (e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function (e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function (e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return h(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function (e) {
            return O(e, "nextSibling")
        },
        prev: function (e) {
            return O(e, "previousSibling")
        },
        nextAll: function (e) {
            return h(e, "nextSibling")
        },
        prevAll: function (e) {
            return h(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function (e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return T(e.firstChild)
        },
        contents: function (e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function (r, i) {
        S.fn[r] = function (e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function (r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function () {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function () {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function (e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function () {
                    return S.each(arguments, function (e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return a = u = [], s = t = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function () {
                    return !!a
                },
                fireWith: function (e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function () {
                    return f.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]],
                i = "pending",
                a = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function (e) {
                        return a.then(null, e)
                    },
                    pipe: function () {
                        var i = arguments;
                        return S.Deferred(function (r) {
                            S.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this,
                                    r = arguments,
                                    e = function () {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function () {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function (e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function (e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function (t) {
                    return function (e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function (e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function (e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function (e, t) {
            Q.remove(e, t)
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function (e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                Q.set(this, n)
            }) : $(this, function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function (e) {
            return this.each(function () {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function () {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                S.dequeue(this, e)
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function (e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function (e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function () {
                return r.cur()
            } : function () {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function () {
            return le(this, !0)
        },
        hide: function () {
            return le(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function () {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function () {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function (e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function (t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                },
                _default: function (e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function (e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        S.event.special[e] = {
            setup: function () {
                return Se(this, e, Ce), !1
            },
            trigger: function () {
                return Se(this, e), !0
            },
            _default: function () {
                return !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function (e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function (e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function (e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function () {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function (e) {
            return e
        },
        clone: function (e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function (e) {
            return Oe(this, e, !0)
        },
        remove: function (e) {
            return Oe(this, e)
        },
        text: function (e) {
            return $(this, function (e) {
                return void 0 === e ? S.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function () {
            return He(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function () {
            return He(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return He(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return S.clone(this, e, t)
            })
        },
        html: function (e) {
            return $(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var n = [];
            return He(this, arguments, function (e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, a) {
        S.fn[e] = function (e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function (e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Me = function (e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function () {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function () {
                return e(), r
            },
            pixelBoxStyles: function () {
                return e(), o
            },
            pixelPosition: function () {
                return e(), n
            },
            reliableMarginLeft: function () {
                return e(), s
            },
            scrollboxSize: function () {
                return e(), i
            },
            reliableTrDimensions: function () {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function (e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
            while (n--)
                if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function (e, u) {
        S.cssHooks[u] = {
            get: function (e, t, n) {
                if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function () {
                    return Je(e, u, n)
                })
            },
            set: function (e, t, n) {
                var r, i = Re(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (i, o) {
        S.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }), S.fn.extend({
        css: function (e, t) {
            return $(this, function (e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function (e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
    }

    function at() {
        return C.setTimeout(function () {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function () {
                delete u.elem
            }),
            u = function () {
                if (a) return !1;
                for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function (e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function (e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function () {
                    p.always(function () {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                } if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function () {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function () {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function (e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function () {
                    var e = lt(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function () {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function (e, r) {
        var i = S.fn[r];
        S.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, r) {
        S.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function () {
        var e, t = 0,
            n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function (e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function () {
        et || (et = !0, ot())
    }, S.fx.stop = function () {
        et = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function (r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function (e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function (e) {
            return this.each(function () {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function (e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = {
        set: function (e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function (e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    } return this
        },
        removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                S(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    } return this
        },
        toggleClass: function (i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = vt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        } return s
                },
                set: function (e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function () {
        S.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function (e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function (e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function (n, r) {
        var i = function (e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function () {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location,
        wt = {
            guid: Date.now()
        },
        Tt = /\?/;
    S.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function (e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function (e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function (e, t) {
        var n, r = [],
            i = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function () {
            i(this.name, this.value)
        });
        else
            for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function () {
            return S.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");

    function It(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function () {
                        return h ? p : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            } if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function () {}), s = function (e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function (e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function (e, i) {
        S[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function (e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function () {}
            },
            dataFilter: function (e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function (e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function (i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function () {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function (n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function (e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function (e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function () {
                i && i()
            }
        }
    });
    var _t, zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function (e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function (t) {
        return S.grep(S.timers, function (e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
            return $(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function (e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function (a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function (r, o) {
            S.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        S.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        S.fn[n] = function (e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function (e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function (e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function (e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return S
    });
    var Vt = C.jQuery,
        Gt = C.$;
    return S.noConflict = function (e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});

/*! UIkit 3.9.2 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("uikit", e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).UIkit = e()
}(this, function () {
    "use strict";
    var t = Object.prototype,
        n = t.hasOwnProperty;

    function c(t, e) {
        return n.call(t, e)
    }
    var e = /\B([A-Z])/g,
        d = rt(function (t) {
            return t.replace(e, "-$1").toLowerCase()
        }),
        i = /-(\w)/g,
        f = rt(function (t) {
            return t.replace(i, r)
        }),
        p = rt(function (t) {
            return t.length ? r(0, t.charAt(0)) + t.slice(1) : ""
        });

    function r(t, e) {
        return e ? e.toUpperCase() : ""
    }
    var o = String.prototype,
        s = o.startsWith || function (t) {
            return 0 === this.lastIndexOf(t, 0)
        };

    function g(t, e) {
        return s.call(t, e)
    }
    var a = o.endsWith || function (t) {
        return this.substr(-t.length) === t
    };

    function u(t, e) {
        return a.call(t, e)
    }
    var h = Array.prototype,
        l = function (t, e) {
            return !!~this.indexOf(t, e)
        },
        m = o.includes || l,
        v = h.includes || l;

    function w(t, e) {
        return t && (N(t) ? m : v).call(t, e)
    }
    var b = h.findIndex || function (t) {
        for (var e = arguments, n = 0; n < this.length; n++)
            if (t.call(e[1], this[n], n, this)) return n;
        return -1
    };

    function x(t, e) {
        return b.call(t, e)
    }
    var y = Array.isArray;

    function k(t) {
        return "function" == typeof t
    }

    function $(t) {
        return null !== t && "object" == typeof t
    }
    var S = t.toString;

    function I(t) {
        return "[object Object]" === S.call(t)
    }

    function E(t) {
        return $(t) && t === t.window
    }

    function T(t) {
        return 9 === A(t)
    }

    function C(t) {
        return 1 <= A(t)
    }

    function _(t) {
        return 1 === A(t)
    }

    function A(t) {
        return !E(t) && $(t) && t.nodeType
    }

    function M(t) {
        return "boolean" == typeof t
    }

    function N(t) {
        return "string" == typeof t
    }

    function z(t) {
        return "number" == typeof t
    }

    function D(t) {
        return z(t) || N(t) && !isNaN(t - parseFloat(t))
    }

    function B(t) {
        return !(y(t) ? t.length : $(t) && Object.keys(t).length)
    }

    function O(t) {
        return void 0 === t
    }

    function P(t) {
        return M(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
    }

    function H(t) {
        t = Number(t);
        return !isNaN(t) && t
    }

    function L(t) {
        return parseFloat(t) || 0
    }
    var F = Array.from || function (t) {
        return h.slice.call(t)
    };

    function j(t) {
        return W(t)[0]
    }

    function W(t) {
        return t && (C(t) ? [t] : F(t).filter(C)) || []
    }

    function V(t) {
        return E(t) ? t : (t = j(t)) ? (T(t) ? t : t.ownerDocument).defaultView : window
    }

    function R(t) {
        return t ? u(t, "ms") ? L(t) : 1e3 * L(t) : 0
    }

    function q(t, n) {
        return t === n || $(t) && $(n) && Object.keys(t).length === Object.keys(n).length && X(t, function (t, e) {
            return t === n[e]
        })
    }

    function U(t, e, n) {
        return t.replace(new RegExp(e + "|" + n, "g"), function (t) {
            return t === e ? n : e
        })
    }
    var Y = Object.assign || function (t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        t = Object(t);
        for (var i = 0; i < e.length; i++) {
            var r = e[i];
            if (null !== r)
                for (var o in r) c(r, o) && (t[o] = r[o])
        }
        return t
    };

    function G(t) {
        return t[t.length - 1]
    }

    function X(t, e) {
        for (var n in t)
            if (!1 === e(t[n], n)) return !1;
        return !0
    }

    function K(t, n) {
        return t.slice().sort(function (t, e) {
            t = t[n], e = e[n];
            return (e = void 0 === e ? 0 : e) < (t = void 0 === t ? 0 : t) ? 1 : t < e ? -1 : 0
        })
    }

    function J(t, e) {
        var n = new Set;
        return t.filter(function (t) {
            t = t[e];
            return !n.has(t) && (n.add(t) || !0)
        })
    }

    function Z(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 1), Math.min(Math.max(H(t) || 0, e), n)
    }

    function Q() {}

    function tt() {
        for (var i = [], t = arguments.length; t--;) i[t] = arguments[t];
        return [["bottom", "top"], ["right", "left"]].every(function (t) {
            var e = t[0],
                n = t[1];
            return 0 < Math.min.apply(Math, i.map(function (t) {
                return t[e]
            })) - Math.max.apply(Math, i.map(function (t) {
                return t[n]
            }))
        })
    }

    function et(t, e) {
        return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
    }
    var nt = {
        ratio: function (t, e, n) {
            var i = "width" === e ? "height" : "width",
                r = {};
            return r[i] = t[e] ? Math.round(n * t[i] / t[e]) : t[i], r[e] = n, r
        },
        contain: function (n, i) {
            var r = this;
            return X(n = Y({}, n), function (t, e) {
                return n = n[e] > i[e] ? r.ratio(n, e, i[e]) : n
            }), n
        },
        cover: function (n, i) {
            var r = this;
            return X(n = this.contain(n, i), function (t, e) {
                return n = n[e] < i[e] ? r.ratio(n, e, i[e]) : n
            }), n
        }
    };

    function it(t, e, n, i) {
        void 0 === n && (n = 0), void 0 === i && (i = !1);
        var r = (e = W(e)).length;
        return t = D(t) ? H(t) : "next" === t ? n + 1 : "previous" === t ? n - 1 : e.indexOf(j(t)), i ? Z(t, 0, r - 1) : (t %= r) < 0 ? t + r : t
    }

    function rt(e) {
        var n = Object.create(null);
        return function (t) {
            return n[t] || (n[t] = e(t))
        }
    }

    function ot(t, e, n) {
        if ($(e))
            for (var i in e) ot(t, i, e[i]);
        else {
            if (O(n)) return (t = j(t)) && t.getAttribute(e);
            W(t).forEach(function (t) {
                null === (n = k(n) ? n.call(t, ot(t, e)) : n) ? at(t, e) : t.setAttribute(e, n)
            })
        }
    }

    function st(t, e) {
        return W(t).some(function (t) {
            return t.hasAttribute(e)
        })
    }

    function at(t, e) {
        t = W(t), e.split(" ").forEach(function (e) {
            return t.forEach(function (t) {
                return t.hasAttribute(e) && t.removeAttribute(e)
            })
        })
    }

    function ut(t, e) {
        for (var n = 0, i = [e, "data-" + e]; n < i.length; n++)
            if (st(t, i[n])) return ot(t, i[n])
    }
    var ct = "undefined" != typeof window,
        ht = ct && /msie|trident/i.test(window.navigator.userAgent),
        lt = ct && "rtl" === ot(document.documentElement, "dir"),
        dt = ct && "ontouchstart" in window,
        ft = ct && window.PointerEvent,
        pt = ct && (dt || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints),
        mt = ft ? "pointerdown" : dt ? "touchstart" : "mousedown",
        gt = ft ? "pointermove" : dt ? "touchmove" : "mousemove",
        vt = ft ? "pointerup" : dt ? "touchend" : "mouseup",
        wt = ft ? "pointerenter" : dt ? "" : "mouseenter",
        bt = ft ? "pointerleave" : dt ? "" : "mouseleave",
        xt = ft ? "pointercancel" : "touchcancel",
        yt = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            menuitem: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        };

    function kt(t) {
        return W(t).some(function (t) {
            return yt[t.tagName.toLowerCase()]
        })
    }

    function $t(t) {
        return W(t).some(function (t) {
            return t.offsetWidth || t.offsetHeight || t.getClientRects().length
        })
    }
    var St = "input,select,textarea,button";

    function It(t) {
        return W(t).some(function (t) {
            return Nt(t, St)
        })
    }
    var Et = St + ",a[href],[tabindex]";

    function Tt(t) {
        return Nt(t, Et)
    }

    function Ct(t) {
        return (t = j(t)) && _(t.parentNode) && t.parentNode
    }

    function _t(t, e) {
        return W(t).filter(function (t) {
            return Nt(t, e)
        })
    }
    var At = ct ? Element.prototype : {},
        Mt = At.matches || At.webkitMatchesSelector || At.msMatchesSelector || Q;

    function Nt(t, e) {
        return W(t).some(function (t) {
            return Mt.call(t, e)
        })
    }
    var zt = At.closest || function (t) {
        var e = this;
        do {
            if (Nt(e, t)) return e
        } while (e = Ct(e))
    };

    function Dt(t, e) {
        return g(e, ">") && (e = e.slice(1)), _(t) ? zt.call(t, e) : W(t).map(function (t) {
            return Dt(t, e)
        }).filter(Boolean)
    }

    function Bt(t, e) {
        return N(e) ? Nt(t, e) || !!Dt(t, e) : t === e || (T(e) ? e.documentElement : j(e)).contains(j(t))
    }

    function Ot(t, e) {
        for (var n = []; t = Ct(t);) e && !Nt(t, e) || n.push(t);
        return n
    }

    function Pt(t, e) {
        t = (t = j(t)) ? W(t.children) : [];
        return e ? _t(t, e) : t
    }

    function Ht(t, e) {
        return e ? W(t).indexOf(j(e)) : Pt(Ct(t)).indexOf(t)
    }

    function Lt(t, e) {
        return Wt(t, jt(t, e))
    }

    function Ft(t, e) {
        return Vt(t, jt(t, e))
    }

    function jt(t, e) {
        return void 0 === e && (e = document), N(t) && Yt(t) || T(e) ? e : e.ownerDocument
    }

    function Wt(t, e) {
        return j(Rt(t, e, "querySelector"))
    }

    function Vt(t, e) {
        return W(Rt(t, e, "querySelectorAll"))
    }

    function Rt(t, r, e) {
        if (void 0 === r && (r = document), !t || !N(t)) return t;
        t = t.replace(Ut, "$1 *"), Yt(t) && (t = Xt(t).map(function (t) {
            var e, n, i = r;
            return "!" === t[0] && (n = t.substr(1).trim().split(" "), i = Dt(Ct(r), n[0]), t = n.slice(1).join(" ").trim()), "-" === t[0] && (e = t.substr(1).trim().split(" "), i = Nt(n = (i || r).previousElementSibling, t.substr(1)) ? n : null, t = e.slice(1).join(" ")), i ? function (t) {
                var e = [];
                for (; t.parentNode;) {
                    if (t.id) {
                        e.unshift("#" + Jt(t.id));
                        break
                    }
                    var n = t.tagName;
                    "HTML" !== n && (n += ":nth-child(" + (Ht(t) + 1) + ")"), e.unshift(n), t = t.parentNode
                }
                return e.join(" > ")
            }(i) + " " + t : null
        }).filter(Boolean).join(","), r = document);
        try {
            return r[e](t)
        } catch (t) {
            return null
        }
    }
    var qt = /(^|[^\\],)\s*[!>+~-]/,
        Ut = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
        Yt = rt(function (t) {
            return t.match(qt)
        }),
        Gt = /.*?[^\\](?:,|$)/g,
        Xt = rt(function (t) {
            return t.match(Gt).map(function (t) {
                return t.replace(/,$/, "").trim()
            })
        });
    var Kt = ct && window.CSS && CSS.escape || function (t) {
        return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
            return "\\" + t
        })
    };

    function Jt(t) {
        return N(t) ? Kt.call(null, t) : ""
    }

    function Zt() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var n, i, r = ie(t),
            o = r[0],
            s = r[1],
            a = r[2],
            u = r[3],
            c = r[4],
            o = ae(o);
        return 1 < u.length && (n = u, u = function (t) {
                return y(t.detail) ? n.apply(void 0, [t].concat(t.detail)) : n(t)
            }), c && c.self && (i = u, u = function (t) {
                if (t.target === t.currentTarget || t.target === t.current) return i.call(null, t)
            }), a && (u = function (n, i) {
                var r = this;
                return function (e) {
                    var t = ">" === n[0] ? Vt(n, e.currentTarget).reverse().filter(function (t) {
                        return Bt(e.target, t)
                    })[0] : Dt(e.target, n);
                    t && (e.current = t, i.call(r, e))
                }
            }(a, u)), c = re(c), s.split(" ").forEach(function (e) {
                return o.forEach(function (t) {
                    return t.addEventListener(e, u, c)
                })
            }),
            function () {
                return Qt(o, s, u, c)
            }
    }

    function Qt(t, e, n, i) {
        i = re(i = void 0 === i ? !1 : i), t = ae(t), e.split(" ").forEach(function (e) {
            return t.forEach(function (t) {
                return t.removeEventListener(e, n, i)
            })
        })
    }

    function te() {
        for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
        var n = ie(t),
            i = n[0],
            r = n[1],
            o = n[2],
            s = n[3],
            a = n[4],
            u = n[5],
            c = Zt(i, r, o, function (t) {
                var e = !u || u(t);
                e && (c(), s(t, e))
            }, a);
        return c
    }

    function ee(t, n, i) {
        return ae(t).reduce(function (t, e) {
            return t && e.dispatchEvent(ne(n, !0, !0, i))
        }, !0)
    }

    function ne(t, e, n, i) {
        var r;
        return void 0 === e && (e = !0), void 0 === n && (n = !1), N(t) && ((r = document.createEvent("CustomEvent")).initCustomEvent(t, e, n, i), t = r), t
    }

    function ie(t) {
        return k(t[2]) && t.splice(2, 0, !1), t
    }

    function re(t) {
        return t && ht && !M(t) ? !!t.capture : t
    }

    function oe(t) {
        return t && "addEventListener" in t
    }

    function se(t) {
        return oe(t) ? t : j(t)
    }

    function ae(t) {
        return y(t) ? t.map(se).filter(Boolean) : N(t) ? Vt(t) : oe(t) ? [t] : W(t)
    }

    function ue(t) {
        return "touch" === t.pointerType || !!t.touches
    }

    function ce(t) {
        var e = t.touches,
            n = t.changedTouches,
            t = e && e[0] || n && n[0] || t;
        return {
            x: t.clientX,
            y: t.clientY
        }
    }

    function he() {
        var n = this;
        this.promise = new le(function (t, e) {
            n.reject = e, n.resolve = t
        })
    }
    var le = ct && window.Promise || pe,
        de = 2,
        fe = ct && window.setImmediate || setTimeout;

    function pe(t) {
        this.state = de, this.value = void 0, this.deferred = [];
        var e = this;
        try {
            t(function (t) {
                e.resolve(t)
            }, function (t) {
                e.reject(t)
            })
        } catch (t) {
            e.reject(t)
        }
    }
    pe.reject = function (n) {
        return new pe(function (t, e) {
            e(n)
        })
    }, pe.resolve = function (n) {
        return new pe(function (t, e) {
            t(n)
        })
    }, pe.all = function (o) {
        return new pe(function (n, t) {
            var i = [],
                r = 0;
            0 === o.length && n(i);
            for (var e = 0; e < o.length; e += 1) pe.resolve(o[e]).then(function (e) {
                return function (t) {
                    i[e] = t, (r += 1) === o.length && n(i)
                }
            }(e), t)
        })
    }, pe.race = function (i) {
        return new pe(function (t, e) {
            for (var n = 0; n < i.length; n += 1) pe.resolve(i[n]).then(t, e)
        })
    };
    var me = pe.prototype;

    function ge(t, e) {
        var n = Y({
            data: null,
            method: "GET",
            headers: {},
            xhr: new XMLHttpRequest,
            beforeSend: Q,
            responseType: ""
        }, e);
        return le.resolve().then(function () {
            return n.beforeSend(n)
        }).then(function () {
            return o = t, s = n, new le(function (t, e) {
                var n, i, r = s.xhr;
                for (n in s)
                    if (n in r) try {
                        r[n] = s[n]
                    } catch (t) {}
                for (i in r.open(s.method.toUpperCase(), o), s.headers) r.setRequestHeader(i, s.headers[i]);
                Zt(r, "load", function () {
                    0 === r.status || 200 <= r.status && r.status < 300 || 304 === r.status ? ("json" === s.responseType && N(r.response) && (r = Y(function (t) {
                        var e, n = {};
                        for (e in t) n[e] = t[e];
                        return n
                    }(r), {
                        response: JSON.parse(r.response)
                    })), t(r)) : e(Y(Error(r.statusText), {
                        xhr: r,
                        status: r.status
                    }))
                }), Zt(r, "error", function () {
                    return e(Y(Error("Network Error"), {
                        xhr: r
                    }))
                }), Zt(r, "timeout", function () {
                    return e(Y(Error("Network Timeout"), {
                        xhr: r
                    }))
                }), r.send(s.data)
            });
            var o, s
        })
    }

    function ve(i, r, o) {
        return new le(function (t, e) {
            var n = new Image;
            n.onerror = function (t) {
                return e(t)
            }, n.onload = function () {
                return t(n)
            }, o && (n.sizes = o), r && (n.srcset = r), n.src = i
        })
    }

    function we(t) {
        return (t = Ne(t)).innerHTML = "", t
    }

    function be(t, e) {
        return t = Ne(t), O(e) ? t.innerHTML : xe(t.hasChildNodes() ? we(t) : t, e)
    }

    function xe(e, t) {
        return e = Ne(e), $e(t, function (t) {
            return e.appendChild(t)
        })
    }

    function ye(e, t) {
        return e = Ne(e), $e(t, function (t) {
            return e.parentNode.insertBefore(t, e)
        })
    }

    function ke(e, t) {
        return e = Ne(e), $e(t, function (t) {
            return e.nextSibling ? ye(e.nextSibling, t) : xe(e.parentNode, t)
        })
    }

    function $e(t, e) {
        return (t = N(t) ? Ae(t) : t) ? "length" in t ? W(t).map(e) : e(t) : null
    }

    function Se(t) {
        W(t).forEach(function (t) {
            return t.parentNode && t.parentNode.removeChild(t)
        })
    }

    function Ie(t, e) {
        for (e = j(ye(t, e)); e.firstChild;) e = e.firstChild;
        return xe(e, t), e
    }

    function Ee(t, e) {
        return W(W(t).map(function (t) {
            return t.hasChildNodes ? Ie(W(t.childNodes), e) : xe(t, e)
        }))
    }

    function Te(t) {
        W(t).map(Ct).filter(function (t, e, n) {
            return n.indexOf(t) === e
        }).forEach(function (t) {
            ye(t, t.childNodes), Se(t)
        })
    }
    me.resolve = function (t) {
        var e = this;
        if (e.state === de) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            var n = !1;
            try {
                var i = t && t.then;
                if (null !== t && $(t) && k(i)) return void i.call(t, function (t) {
                    n || e.resolve(t), n = !0
                }, function (t) {
                    n || e.reject(t), n = !0
                })
            } catch (t) {
                return void(n || e.reject(t))
            }
            e.state = 0, e.value = t, e.notify()
        }
    }, me.reject = function (t) {
        var e = this;
        if (e.state === de) {
            if (t === e) throw new TypeError("Promise settled with itself.");
            e.state = 1, e.value = t, e.notify()
        }
    }, me.notify = function () {
        var r = this;
        fe(function () {
            if (r.state !== de)
                for (; r.deferred.length;) {
                    var e = r.deferred.shift(),
                        t = e[0],
                        n = e[1],
                        i = e[2],
                        e = e[3];
                    try {
                        0 === r.state ? k(t) ? i(t.call(void 0, r.value)) : i(r.value) : 1 === r.state && (k(n) ? i(n.call(void 0, r.value)) : e(r.value))
                    } catch (t) {
                        e(t)
                    }
                }
        })
    }, me.then = function (n, i) {
        var r = this;
        return new pe(function (t, e) {
            r.deferred.push([n, i, t, e]), r.notify()
        })
    }, me.catch = function (t) {
        return this.then(void 0, t)
    };
    var Ce = /^\s*<(\w+|!)[^>]*>/,
        _e = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function Ae(t) {
        var e = _e.exec(t);
        if (e) return document.createElement(e[1]);
        e = document.createElement("div");
        return Ce.test(t) ? e.insertAdjacentHTML("beforeend", t.trim()) : e.textContent = t, 1 < e.childNodes.length ? W(e.childNodes) : e.firstChild
    }

    function Me(t, e) {
        if (_(t))
            for (e(t), t = t.firstElementChild; t;) {
                var n = t.nextElementSibling;
                Me(t, e), t = n
            }
    }

    function Ne(t, e) {
        return De(t) ? j(Ae(t)) : Wt(t, e)
    }

    function ze(t, e) {
        return De(t) ? W(Ae(t)) : Vt(t, e)
    }

    function De(t) {
        return N(t) && ("<" === t[0] || t.match(/^\s*</))
    }

    function Be(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        je(t, e, "add")
    }

    function Oe(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        je(t, e, "remove")
    }

    function Pe(t, e) {
        ot(t, "class", function (t) {
            return (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "")
        })
    }

    function He(t) {
        for (var e = [], n = arguments.length - 1; 0 < n--;) e[n] = arguments[n + 1];
        e[0] && Oe(t, e[0]), e[1] && Be(t, e[1])
    }

    function Le(t, e) {
        e = We(e)[0];
        for (var n = W(t), i = 0; i < n.length; i++)
            if (e && n[i].classList.contains(e)) return !0;
        return !1
    }

    function Fe(t, e, n) {
        e = We(e);
        for (var i = W(t), r = 0; r < i.length; r++)
            for (var o = i[r].classList, s = 0; s < e.length; s++) O(n) ? o.toggle(e[s]) : Ve.Force ? o.toggle(e[s], !!n) : o[n ? "add" : "remove"](e[s])
    }

    function je(t, n, i) {
        var r;
        n = n.reduce(function (t, e) {
            return t.concat(We(e))
        }, []);
        for (var o = W(t), e = 0; e < o.length; e++) ! function (e) {
            Ve.Multiple ? (r = o[e].classList)[i].apply(r, n) : n.forEach(function (t) {
                return o[e].classList[i](t)
            })
        }(e)
    }

    function We(t) {
        return String(t).split(/\s|,/).filter(Boolean)
    }
    var Ve = {
            get Multiple() {
                return this.get("Multiple")
            },
            get Force() {
                return this.get("Force")
            },
            get: function (t) {
                var e = document.createElement("_").classList;
                return e.add("a", "b"), e.toggle("c", !1), (Ve = {
                    Multiple: e.contains("b"),
                    Force: !e.contains("c")
                })[t]
            }
        },
        Re = {
            "animation-iteration-count": !0,
            "column-count": !0,
            "fill-opacity": !0,
            "flex-grow": !0,
            "flex-shrink": !0,
            "font-weight": !0,
            "line-height": !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            "stroke-dasharray": !0,
            "stroke-dashoffset": !0,
            widows: !0,
            "z-index": !0,
            zoom: !0
        };

    function qe(t, e, r, o) {
        return void 0 === o && (o = ""), W(t).map(function (n) {
            if (N(e)) {
                if (e = Je(e), O(r)) return Ye(n, e);
                r || z(r) ? n.style.setProperty(e, D(r) && !Re[e] ? r + "px" : r, o) : n.style.removeProperty(e)
            } else {
                if (y(e)) {
                    var i = Ue(n);
                    return e.reduce(function (t, e) {
                        return t[e] = i[Je(e)], t
                    }, {})
                }
                $(e) && (o = r, X(e, function (t, e) {
                    return qe(n, e, t, o)
                }))
            }
            return n
        })[0]
    }

    function Ue(t, e) {
        return V(t).getComputedStyle(t, e)
    }

    function Ye(t, e, n) {
        return Ue(t, n)[e]
    }
    var Ge = rt(function (t) {
            var e = xe(document.documentElement, Ae("<div>"));
            Be(e, "uk-" + t);
            t = Ye(e, "content", ":before");
            return Se(e), t
        }),
        Xe = /^\s*(["'])?(.*?)\1\s*$/;

    function Ke(t) {
        return (ht ? Ge(t) : Ue(document.documentElement).getPropertyValue("--uk-" + t)).replace(Xe, "$2")
    }
    var Je = rt(function (t) {
            t = d(t);
            var e = document.documentElement.style;
            if (t in e) return t;
            var n, i = Ze.length;
            for (; i--;)
                if ((n = "-" + Ze[i] + "-" + t) in e) return n
        }),
        Ze = ["webkit", "moz", "ms"];

    function Qe(t, s, a, u) {
        return void 0 === a && (a = 400), void 0 === u && (u = "linear"), le.all(W(t).map(function (o) {
            return new le(function (e, n) {
                for (var t in s) {
                    var i = qe(o, t);
                    "" === i && qe(o, t, i)
                }
                var r = setTimeout(function () {
                    return ee(o, "transitionend")
                }, a);
                te(o, "transitionend transitioncanceled", function (t) {
                    t = t.type;
                    clearTimeout(r), Oe(o, "uk-transition"), qe(o, {
                        transitionProperty: "",
                        transitionDuration: "",
                        transitionTimingFunction: ""
                    }), "transitioncanceled" === t ? n() : e(o)
                }, {
                    self: !0
                }), Be(o, "uk-transition"), qe(o, Y({
                    transitionProperty: Object.keys(s).map(Je).join(","),
                    transitionDuration: a + "ms",
                    transitionTimingFunction: u
                }, s))
            })
        }))
    }
    var tn = {
            start: Qe,
            stop: function (t) {
                return ee(t, "transitionend"), le.resolve()
            },
            cancel: function (t) {
                ee(t, "transitioncanceled")
            },
            inProgress: function (t) {
                return Le(t, "uk-transition")
            }
        },
        en = "uk-animation-";

    function nn(t, o, s, a, u) {
        return void 0 === s && (s = 200), le.all(W(t).map(function (r) {
            return new le(function (e, n) {
                ee(r, "animationcanceled");
                var i = setTimeout(function () {
                    return ee(r, "animationend")
                }, s);
                te(r, "animationend animationcanceled", function (t) {
                    t = t.type;
                    clearTimeout(i), "animationcanceled" === t ? n() : e(r), qe(r, "animationDuration", ""), Pe(r, en + "\\S*")
                }, {
                    self: !0
                }), qe(r, "animationDuration", s + "ms"), Be(r, o, en + (u ? "leave" : "enter")), g(o, en) && (a && Be(r, "uk-transform-origin-" + a), u && Be(r, en + "reverse"))
            })
        }))
    }
    var rn = new RegExp(en + "(enter|leave)"),
        on = {
            in: nn,
            out: function (t, e, n, i) {
                return nn(t, e, n, i, !0)
            },
            inProgress: function (t) {
                return rn.test(ot(t, "class"))
            },
            cancel: function (t) {
                ee(t, "animationcanceled")
            }
        },
        sn = {
            width: ["left", "right"],
            height: ["top", "bottom"]
        };

    function an(t) {
        t = _(t) ? j(t).getBoundingClientRect() : {
            height: ln(t),
            width: dn(t),
            top: 0,
            left: 0
        };
        return {
            height: t.height,
            width: t.width,
            top: t.top,
            left: t.left,
            bottom: t.top + t.height,
            right: t.left + t.width
        }
    }

    function un(n, i) {
        var t, r = an(n),
            e = V(n),
            o = {
                height: e.pageYOffset,
                width: e.pageXOffset
            };
        for (t in sn)
            for (var s in sn[t]) r[sn[t][s]] += o[t];
        if (!i) return r;
        var a = qe(n, "position");
        X(qe(n, ["left", "top"]), function (t, e) {
            return qe(n, e, i[e] - r[e] + L("absolute" === a && "auto" === t ? cn(n)[e] : t))
        })
    }

    function cn(t) {
        for (var e = un(t), n = e.top, i = e.left, r = j(t), e = r.ownerDocument, o = e.body, s = e.documentElement, a = r.offsetParent || s; a && (a === o || a === s) && "static" === qe(a, "position");) a = a.parentNode;
        return _(a) && (n -= (r = un(a)).top + L(qe(a, "borderTopWidth")), i -= r.left + L(qe(a, "borderLeftWidth"))), {
            top: n - L(qe(t, "marginTop")),
            left: i - L(qe(t, "marginLeft"))
        }
    }

    function hn(t) {
        var e = [0, 0];
        t = j(t);
        do {
            if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === qe(t, "position")) {
                var n = V(t);
                return e[0] += n.pageYOffset, e[1] += n.pageXOffset, e
            }
        } while (t = t.offsetParent);
        return e
    }
    var ln = fn("height"),
        dn = fn("width");

    function fn(i) {
        var r = p(i);
        return function (t, e) {
            if (O(e)) {
                if (E(t)) return t["inner" + r];
                if (T(t)) {
                    var n = t.documentElement;
                    return Math.max(n["offset" + r], n["scroll" + r])
                }
                return (e = "auto" === (e = qe(t = j(t), i)) ? t["offset" + r] : L(e) || 0) - pn(t, i)
            }
            return qe(t, i, e || 0 === e ? +e + pn(t, i) + "px" : "")
        }
    }

    function pn(n, t, e) {
        return void 0 === e && (e = "border-box"), qe(n, "boxSizing") === e ? sn[t].map(p).reduce(function (t, e) {
            return t + L(qe(n, "padding" + e)) + L(qe(n, "border" + e + "Width"))
        }, 0) : 0
    }

    function mn(t) {
        for (var e in sn)
            for (var n in sn[e])
                if (sn[e][n] === t) return sn[e][1 - n];
        return t
    }

    function gn(t, e, n) {
        return void 0 === e && (e = "width"), void 0 === n && (n = window), D(t) ? +t : u(t, "vh") ? vn(ln(V(n)), t) : u(t, "vw") ? vn(dn(V(n)), t) : u(t, "%") ? vn(an(n)[e], t) : L(t)
    }

    function vn(t, e) {
        return t * L(e) / 100
    }
    var wn = {
        reads: [],
        writes: [],
        read: function (t) {
            return this.reads.push(t), yn(), t
        },
        write: function (t) {
            return this.writes.push(t), yn(), t
        },
        clear: function (t) {
            $n(this.reads, t), $n(this.writes, t)
        },
        flush: bn
    };

    function bn(t) {
        void 0 === t && (t = 1), kn(wn.reads), kn(wn.writes.splice(0)), wn.scheduled = !1, (wn.reads.length || wn.writes.length) && yn(t + 1)
    }
    var xn = 4;

    function yn(t) {
        wn.scheduled || (wn.scheduled = !0, t && t < xn ? le.resolve().then(function () {
            return bn(t)
        }) : requestAnimationFrame(function () {
            return bn()
        }))
    }

    function kn(t) {
        for (var e; e = t.shift();) try {
            e()
        } catch (t) {
            console.error(t)
        }
    }

    function $n(t, e) {
        e = t.indexOf(e);
        return ~e && t.splice(e, 1)
    }

    function Sn() {}
    Sn.prototype = {
        positions: [],
        init: function () {
            var e, t = this;
            this.positions = [], this.unbind = Zt(document, "mousemove", function (t) {
                return e = ce(t)
            }), this.interval = setInterval(function () {
                e && (t.positions.push(e), 5 < t.positions.length && t.positions.shift())
            }, 50)
        },
        cancel: function () {
            this.unbind && this.unbind(), this.interval && clearInterval(this.interval)
        },
        movesTo: function (t) {
            if (this.positions.length < 2) return !1;
            var e = t.getBoundingClientRect(),
                n = e.left,
                i = e.right,
                r = e.top,
                o = e.bottom,
                s = this.positions[0],
                t = G(this.positions),
                a = [s, t];
            return !et(t, e) && [[{
                x: n,
                y: r
            }, {
                x: i,
                y: o
            }], [{
                x: n,
                y: o
            }, {
                x: i,
                y: r
            }]].some(function (t) {
                t = function (t, e) {
                    var n = t[0],
                        i = n.x,
                        r = n.y,
                        o = t[1],
                        s = o.x,
                        a = o.y,
                        u = e[0],
                        n = u.x,
                        t = u.y,
                        o = e[1],
                        u = o.x,
                        e = o.y,
                        o = (e - t) * (s - i) - (u - n) * (a - r);
                    if (0 == o) return !1;
                    o = ((u - n) * (r - t) - (e - t) * (i - n)) / o;
                    if (o < 0) return !1;
                    return {
                        x: i + o * (s - i),
                        y: r + o * (a - r)
                    }
                }(a, t);
                return t && et(t, e)
            })
        }
    };
    var In = {};

    function En(t, e, n) {
        return In.computed(k(t) ? t.call(n, n) : t, k(e) ? e.call(n, n) : e)
    }

    function Tn(t, e) {
        return t = t && !y(t) ? [t] : t, e ? t ? t.concat(e) : y(e) ? e : [e] : t
    }

    function Cn(t, e) {
        return O(e) ? t : e
    }

    function _n(e, n, i) {
        var t, r, o = {};
        if ((n = k(n) ? n.options : n).extends && (e = _n(e, n.extends, i)), n.mixins)
            for (var s = 0, a = n.mixins.length; s < a; s++) e = _n(e, n.mixins[s], i);
        for (t in e) u(t);
        for (r in n) c(e, r) || u(r);

        function u(t) {
            o[t] = (In[t] || Cn)(e[t], n[t], i)
        }
        return o
    }

    function An(t, e) {
        var n;
        void 0 === e && (e = []);
        try {
            return t ? g(t, "{") ? JSON.parse(t) : e.length && !w(t, ":") ? ((n = {})[e[0]] = t, n) : t.split(";").reduce(function (t, e) {
                var n = e.split(/:(.*)/),
                    e = n[0],
                    n = n[1];
                return e && !O(n) && (t[e.trim()] = n.trim()), t
            }, {}) : {}
        } catch (t) {
            return {}
        }
    }

    function Mn(t) {
        if (On(t) && Ln(t, {
                func: "playVideo",
                method: "play"
            }), Bn(t)) try {
            t.play().catch(Q)
        } catch (t) {}
    }

    function Nn(t) {
        On(t) && Ln(t, {
            func: "pauseVideo",
            method: "pause"
        }), Bn(t) && t.pause()
    }

    function zn(t) {
        On(t) && Ln(t, {
            func: "mute",
            method: "setVolume",
            value: 0
        }), Bn(t) && (t.muted = !0)
    }

    function Dn(t) {
        return Bn(t) || On(t)
    }

    function Bn(t) {
        return t && "VIDEO" === t.tagName
    }

    function On(t) {
        return t && "IFRAME" === t.tagName && (Pn(t) || Hn(t))
    }

    function Pn(t) {
        return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
    }

    function Hn(t) {
        return !!t.src.match(/vimeo\.com\/video\/.*/)
    }

    function Ln(t, e) {
        ! function (e) {
            if (e[jn]) return e[jn];
            var n, i = Pn(e),
                r = Hn(e),
                o = ++Wn;
            return e[jn] = new le(function (t) {
                i && te(e, "load", function () {
                    function t() {
                        return Fn(e, {
                            event: "listening",
                            id: o
                        })
                    }
                    n = setInterval(t, 100), t()
                }), te(window, "message", t, !1, function (t) {
                    t = t.data;
                    try {
                        return (t = JSON.parse(t)) && (i && t.id === o && "onReady" === t.event || r && Number(t.player_id) === o)
                    } catch (t) {}
                }), e.src = "" + e.src + (w(e.src, "?") ? "&" : "?") + (i ? "enablejsapi=1" : "api=1&player_id=" + o)
            }).then(function () {
                return clearInterval(n)
            })
        }(t).then(function () {
            return Fn(t, e)
        })
    }

    function Fn(t, e) {
        try {
            t.contentWindow.postMessage(JSON.stringify(Y({
                event: "command"
            }, e)), "*")
        } catch (t) {}
    }
    In.events = In.created = In.beforeConnect = In.connected = In.beforeDisconnect = In.disconnected = In.destroy = Tn, In.args = function (t, e) {
        return !1 !== e && Tn(e || t)
    }, In.update = function (t, e) {
        return K(Tn(t, k(e) ? {
            read: e
        } : e), "order")
    }, In.props = function (t, e) {
        return y(e) && (e = e.reduce(function (t, e) {
            return t[e] = String, t
        }, {})), In.methods(t, e)
    }, In.computed = In.methods = function (t, e) {
        return e ? t ? Y({}, t, e) : e : t
    }, In.data = function (e, n, t) {
        return t ? En(e, n, t) : n ? e ? function (t) {
            return En(e, n, t)
        } : n : e
    };
    var jn = "_ukPlayer",
        Wn = 0;

    function Vn(t, r, o) {
        return void 0 === r && (r = 0), void 0 === o && (o = 0), !!$t(t) && tt.apply(void 0, Yn(t).map(function (t) {
            var e = un(Gn(t)),
                n = e.top,
                i = e.left,
                t = e.bottom,
                e = e.right;
            return {
                top: n - r,
                left: i - o,
                bottom: t + r,
                right: e + o
            }
        }).concat(un(t)))
    }

    function Rn(t, e) {
        (t = (E(t) || T(t) ? Kn : j)(t)).scrollTop = e
    }

    function qn(a, t) {
        var c = (t = void 0 === t ? {} : t).offset;
        void 0 === c && (c = 0);
        var h = $t(a) ? Yn(a) : [];
        return h.reduce(function (t, e, n) {
            var i = e.scrollTop,
                r = e.scrollHeight,
                o = e.offsetHeight,
                s = r - Xn(e),
                r = un(h[n - 1] || a),
                n = r.height,
                r = r.top,
                u = Math.ceil(r - un(Gn(e)).top - c + i);
            return 0 < c && o < n + c ? u += c : c = 0, s < u ? (c -= u - s, u = s) : u < 0 && (c -= u, u = 0),
                function () {
                    return s = e, a = u - i, new le(function (n) {
                        var t, i = s.scrollTop,
                            r = (t = Math.abs(a), 40 * Math.pow(t, .375)),
                            o = Date.now();
                        ! function t() {
                            var e, e = (e = Z((Date.now() - o) / r), .5 * (1 - Math.cos(Math.PI * e)));
                            Rn(s, i + a * e), 1 != e ? requestAnimationFrame(t) : n()
                        }()
                    }).then(t);
                    var s, a
                }
        }, function () {
            return le.resolve()
        })()
    }

    function Un(t, e) {
        if (void 0 === e && (e = 0), !$t(t)) return 0;
        var n = Yn(t, /auto|scroll/, !0)[0],
            i = n.scrollHeight,
            r = n.scrollTop,
            o = Xn(n),
            s = hn(t)[0] - r - hn(n)[0],
            n = Math.min(o, s + r);
        return Z(-1 * (s - n) / Math.min(t.offsetHeight + e + n, i - (s + r), i - o))
    }

    function Yn(t, e, n) {
        void 0 === e && (e = /auto|scroll|hidden/), void 0 === n && (n = !1);
        var i = Kn(t),
            r = Ot(t).reverse(),
            t = x(r = r.slice(r.indexOf(i) + 1), function (t) {
                return "fixed" === qe(t, "position")
            });
        return ~t && (r = r.slice(t)), [i].concat(r.filter(function (t) {
            return e.test(qe(t, "overflow")) && (!n || t.scrollHeight > Xn(t))
        })).reverse()
    }

    function Gn(t) {
        return t === Kn(t) ? window : t
    }

    function Xn(t) {
        return (t === Kn(t) ? document.documentElement : t).clientHeight
    }

    function Kn(t) {
        t = V(t).document;
        return t.scrollingElement || t.documentElement
    }
    var Jn = {
        width: ["x", "left", "right"],
        height: ["y", "top", "bottom"]
    };

    function Zn(t, e, h, l, d, n, i, r) {
        h = ti(h), l = ti(l);
        var f = {
            element: h,
            target: l
        };
        if (!t || !e) return f;
        var o, p = un(t),
            m = un(e),
            g = m;
        return Qn(g, h, p, -1), Qn(g, l, m, 1), d = ei(d, p.width, p.height), n = ei(n, m.width, m.height), d.x += n.x, d.y += n.y, g.left += d.x, g.top += d.y, i && (o = Yn(t).map(Gn), r && !w(o, r) && o.unshift(r), o = o.map(function (t) {
            return un(t)
        }), X(Jn, function (t, s) {
            var a = t[0],
                u = t[1],
                c = t[2];
            !0 !== i && !w(i, a) || o.some(function (n) {
                var t = h[a] === u ? -p[s] : h[a] === c ? p[s] : 0,
                    e = l[a] === u ? m[s] : l[a] === c ? -m[s] : 0;
                if (g[u] < n[u] || g[u] + p[s] > n[c]) {
                    var i = p[s] / 2,
                        r = "center" === l[a] ? -m[s] / 2 : 0;
                    return "center" === h[a] && (o(i, r) || o(-i, -r)) || o(t, e)
                }

                function o(e, t) {
                    t = L((g[u] + e + t - 2 * d[a]).toFixed(4));
                    if (t >= n[u] && t + p[s] <= n[c]) return g[u] = t, ["element", "target"].forEach(function (t) {
                        f[t][a] = e ? f[t][a] === Jn[s][1] ? Jn[s][2] : Jn[s][1] : f[t][a]
                    }), !0
                }
            })
        })), un(t, g), f
    }

    function Qn(r, o, s, a) {
        X(Jn, function (t, e) {
            var n = t[0],
                i = t[1],
                t = t[2];
            o[n] === t ? r[i] += s[e] * a : "center" === o[n] && (r[i] += s[e] * a / 2)
        })
    }

    function ti(t) {
        var e = /left|center|right/,
            n = /top|center|bottom/;
        return 1 === (t = (t || "").split(" ")).length && (t = e.test(t[0]) ? t.concat("center") : n.test(t[0]) ? ["center"].concat(t) : ["center", "center"]), {
            x: e.test(t[0]) ? t[0] : "center",
            y: n.test(t[1]) ? t[1] : "center"
        }
    }

    function ei(t, e, n) {
        var i = (t || "").split(" "),
            t = i[0],
            i = i[1];
        return {
            x: t ? L(t) * (u(t, "%") ? e / 100 : 1) : 0,
            y: i ? L(i) * (u(i, "%") ? n / 100 : 1) : 0
        }
    }
    var ni = Object.freeze({
        __proto__: null,
        ajax: ge,
        getImage: ve,
        transition: Qe,
        Transition: tn,
        animate: nn,
        Animation: on,
        attr: ot,
        hasAttr: st,
        removeAttr: at,
        data: ut,
        addClass: Be,
        removeClass: Oe,
        removeClasses: Pe,
        replaceClass: He,
        hasClass: Le,
        toggleClass: Fe,
        dimensions: an,
        offset: un,
        position: cn,
        offsetPosition: hn,
        height: ln,
        width: dn,
        boxModelAdjust: pn,
        flipPosition: mn,
        toPx: gn,
        ready: function (t) {
            var e;
            "loading" === document.readyState ? e = Zt(document, "DOMContentLoaded", function () {
                e(), t()
            }) : t()
        },
        empty: we,
        html: be,
        prepend: function (e, t) {
            return (e = Ne(e)).hasChildNodes() ? $e(t, function (t) {
                return e.insertBefore(t, e.firstChild)
            }) : xe(e, t)
        },
        append: xe,
        before: ye,
        after: ke,
        remove: Se,
        wrapAll: Ie,
        wrapInner: Ee,
        unwrap: Te,
        fragment: Ae,
        apply: Me,
        $: Ne,
        $$: ze,
        inBrowser: ct,
        isIE: ht,
        isRtl: lt,
        hasTouch: pt,
        pointerDown: mt,
        pointerMove: gt,
        pointerUp: vt,
        pointerEnter: wt,
        pointerLeave: bt,
        pointerCancel: xt,
        on: Zt,
        off: Qt,
        once: te,
        trigger: ee,
        createEvent: ne,
        toEventTargets: ae,
        isTouch: ue,
        getEventPos: ce,
        fastdom: wn,
        isVoidElement: kt,
        isVisible: $t,
        selInput: St,
        isInput: It,
        selFocusable: Et,
        isFocusable: Tt,
        parent: Ct,
        filter: _t,
        matches: Nt,
        closest: Dt,
        within: Bt,
        parents: Ot,
        children: Pt,
        index: Ht,
        hasOwn: c,
        hyphenate: d,
        camelize: f,
        ucfirst: p,
        startsWith: g,
        endsWith: u,
        includes: w,
        findIndex: x,
        isArray: y,
        isFunction: k,
        isObject: $,
        isPlainObject: I,
        isWindow: E,
        isDocument: T,
        isNode: C,
        isElement: _,
        isBoolean: M,
        isString: N,
        isNumber: z,
        isNumeric: D,
        isEmpty: B,
        isUndefined: O,
        toBoolean: P,
        toNumber: H,
        toFloat: L,
        toArray: F,
        toNode: j,
        toNodes: W,
        toWindow: V,
        toMs: R,
        isEqual: q,
        swap: U,
        assign: Y,
        last: G,
        each: X,
        sortBy: K,
        uniqueBy: J,
        clamp: Z,
        noop: Q,
        intersectRect: tt,
        pointInRect: et,
        Dimensions: nt,
        getIndex: it,
        memoize: rt,
        MouseTracker: Sn,
        mergeOptions: _n,
        parseOptions: An,
        play: Mn,
        pause: Nn,
        mute: zn,
        isVideo: Dn,
        positionAt: Zn,
        Promise: le,
        Deferred: he,
        query: Lt,
        queryAll: Ft,
        find: Wt,
        findAll: Vt,
        escape: Jt,
        css: qe,
        getCssVar: Ke,
        propName: Je,
        isInView: Vn,
        scrollTop: Rn,
        scrollIntoView: qn,
        scrolledOver: Un,
        scrollParents: Yn,
        getViewport: Gn,
        getViewportClientHeight: Xn
    });

    function ii(t) {
        this._init(t)
    }
    var ri, oi, si, ai, ui, ci, hi, li, di, fi = rt(function (t) {
        return !(!g(t, "uk-") && !g(t, "data-uk-")) && f(t.replace("data-uk-", "").replace("uk-", ""))
    });

    function pi(t, e) {
        if (t)
            for (var n in t) t[n]._connected && t[n]._callUpdate(e)
    }

    function mi(t, e) {
        var n = {},
            i = t.args;
        void 0 === i && (i = []);
        var r, o = t.props,
            s = t.el;
        if (!(o = void 0 === o ? {} : o)) return n;
        for (r in o) {
            var a = d(r),
                u = ut(s, a);
            O(u) || (u = o[r] === Boolean && "" === u || vi(o[r], u), ("target" !== a || u && !g(u, "_")) && (n[r] = u))
        }
        var c, h = An(ut(s, e), i);
        for (c in h) {
            var l = f(c);
            void 0 !== o[l] && (n[l] = vi(o[l], h[c]))
        }
        return n
    }

    function gi(e, n, i) {
        var t = (n = !I(n) ? {
                name: i,
                handler: n
            } : n).name,
            r = n.el,
            o = n.handler,
            s = n.capture,
            a = n.passive,
            u = n.delegate,
            c = n.filter,
            h = n.self,
            r = k(r) ? r.call(e) : r || e.$el;
        y(r) ? r.forEach(function (t) {
            return gi(e, Y({}, n, {
                el: t
            }), i)
        }) : !r || c && !c.call(e) || e._events.push(Zt(r, t, u ? N(u) ? u : u.call(e) : null, N(o) ? e[o] : o.bind(e), {
            passive: a,
            capture: s,
            self: h
        }))
    }

    function vi(t, e) {
        return t === Boolean ? P(e) : t === Number ? H(e) : "list" === t ? y(n = e) ? n : N(n) ? n.split(/,(?![^(]*\))/).map(function (t) {
            return D(t) ? H(t) : P(t.trim())
        }) : [n] : t ? t(e) : e;
        var n
    }
    ii.util = ni, ii.data = "__uikit__", ii.prefix = "uk-", ii.options = {}, ii.version = "3.9.2", si = (ri = ii).data, ri.use = function (t) {
            if (!t.installed) return t.call(null, this), t.installed = !0, this
        }, ri.mixin = function (t, e) {
            (e = (N(e) ? ri.component(e) : e) || this).options = _n(e.options, t)
        }, ri.extend = function (t) {
            t = t || {};

            function e(t) {
                this._init(t)
            }
            return ((e.prototype = Object.create(this.prototype)).constructor = e).options = _n(this.options, t), e.super = this, e.extend = this.extend, e
        }, ri.update = function (t, e) {
            Ot(t = t ? j(t) : document.body).reverse().forEach(function (t) {
                return pi(t[si], e)
            }), Me(t, function (t) {
                return pi(t[si], e)
            })
        }, Object.defineProperty(ri, "container", {
            get: function () {
                return oi || document.body
            },
            set: function (t) {
                oi = Ne(t)
            }
        }), (ai = ii).prototype._callHook = function (t) {
            var e = this,
                t = this.$options[t];
            t && t.forEach(function (t) {
                return t.call(e)
            })
        }, ai.prototype._callConnected = function () {
            this._connected || (this._data = {}, this._computeds = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObservers(), this._callHook("connected"), this._callUpdate())
        }, ai.prototype._callDisconnected = function () {
            this._connected && (this._callHook("beforeDisconnect"), this._disconnectObservers(), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1, delete this._watch)
        }, ai.prototype._callUpdate = function (t) {
            var e = this;
            void 0 === t && (t = "update"), this._connected && ("update" !== t && "resize" !== t || this._callWatches(), this.$options.update && (this._updates || (this._updates = new Set, wn.read(function () {
                e._connected && ! function (i) {
                    for (var r = this, o = this.$options.update, t = 0; t < o.length; t++) ! function (t) {
                        var e = o[t],
                            t = e.read,
                            n = e.write,
                            e = e.events;
                        (i.has("update") || e && e.some(function (t) {
                            return i.has(t)
                        })) && (e = void 0, t && (e = t.call(r, r._data, i)) && I(e) && Y(r._data, e), n && !1 !== e && wn.write(function () {
                            return n.call(r, r._data, i)
                        }))
                    }(t)
                }.call(e, e._updates), delete e._updates
            })), this._updates.add(t.type || t)))
        }, ai.prototype._callWatches = function () {
            var t, e = this;
            this._watch || (t = !c(this, "_watch"), this._watch = wn.read(function () {
                e._connected && ! function (t) {
                    var e, n = this.$options.computed,
                        i = this._computeds;
                    for (e in n) {
                        var r = c(i, e),
                            o = i[e];
                        delete i[e];
                        var s = n[e],
                            a = s.watch,
                            s = s.immediate;
                        a && (t && s || r && !q(o, this[e])) && a.call(this, this[e], o)
                    }
                }.call(e, t), e._watch = null
            }))
        }, ci = 0, (ui = ii).prototype._init = function (t) {
            (t = t || {}).data = function (t, e) {
                var n = t.data,
                    i = e.args,
                    r = e.props;
                void 0 === r && (r = {});
                if (n = y(n) ? B(i) ? void 0 : n.slice(0, i.length).reduce(function (t, e, n) {
                        return I(e) ? Y(t, e) : t[i[n]] = e, t
                    }, {}) : n)
                    for (var o in n) O(n[o]) ? delete n[o] : n[o] = r[o] ? vi(r[o], n[o]) : n[o];
                return n
            }(t, this.constructor.options), this.$options = _n(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._uid = ci++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el)
        }, ui.prototype._initData = function () {
            var t, e = this.$options.data;
            for (t in e = void 0 === e ? {} : e) this.$props[t] = this[t] = e[t]
        }, ui.prototype._initMethods = function () {
            var t = this.$options.methods;
            if (t)
                for (var e in t) this[e] = t[e].bind(this)
        }, ui.prototype._initComputeds = function () {
            var t = this.$options.computed;
            if (this._computeds = {}, t)
                for (var e in t) ! function (i, r, o) {
                    Object.defineProperty(i, r, {
                        enumerable: !0,
                        get: function () {
                            var t = i._computeds,
                                e = i.$props,
                                n = i.$el;
                            return c(t, r) || (t[r] = (o.get || o).call(i, e, n)), t[r]
                        },
                        set: function (t) {
                            var e = i._computeds;
                            e[r] = o.set ? o.set.call(i, t) : t, O(e[r]) && delete e[r]
                        }
                    })
                }(this, e, t[e])
        }, ui.prototype._initProps = function (t) {
            for (var e in t = t || mi(this.$options, this.$name)) O(t[e]) || (this.$props[e] = t[e]);
            var n = [this.$options.computed, this.$options.methods];
            for (e in this.$props) e in t && function (t, e) {
                return t.every(function (t) {
                    return !t || !c(t, e)
                })
            }(n, e) && (this[e] = this.$props[e])
        }, ui.prototype._initEvents = function () {
            var n = this;
            this._events = [];
            var t = this.$options.events;
            t && t.forEach(function (t) {
                if (c(t, "handler")) gi(n, t);
                else
                    for (var e in t) gi(n, t[e], e)
            })
        }, ui.prototype._unbindEvents = function () {
            this._events.forEach(function (t) {
                return t()
            }), delete this._events
        }, ui.prototype._initObservers = function () {
            var t, e, n;
            this._observers = [(e = (t = this).$options.el, (n = new MutationObserver(function () {
                return t.$emit()
            })).observe(e, {
                childList: !0,
                subtree: !0
            }), n), function (e) {
                var i = e.$name,
                    r = e.$options,
                    o = e.$props,
                    t = r.attrs,
                    n = r.props,
                    s = r.el;
                if (n && !1 !== t) {
                    var a = y(t) ? t : Object.keys(n),
                        t = a.map(function (t) {
                            return d(t)
                        }).concat(i),
                        n = new MutationObserver(function (t) {
                            var n = mi(r, i);
                            t.some(function (t) {
                                var e = t.attributeName,
                                    t = e.replace("data-", "");
                                return (t === i ? a : [f(t), f(e)]).some(function (t) {
                                    return !O(n[t]) && n[t] !== o[t]
                                })
                            }) && e.$reset()
                        });
                    return n.observe(s, {
                        attributes: !0,
                        attributeFilter: t.concat(t.map(function (t) {
                            return "data-" + t
                        }))
                    }), n
                }
            }(this)]
        }, ui.prototype._disconnectObservers = function () {
            this._observers.forEach(function (t) {
                return t && t.disconnect()
            })
        }, li = (hi = ii).data, di = {}, hi.component = function (s, t) {
            var e = d(s);
            if (s = f(e), !t) return I(di[s]) && (di[s] = hi.extend(di[s])), di[s];
            hi[s] = function (t, n) {
                for (var e = arguments.length, i = Array(e); e--;) i[e] = arguments[e];
                var r = hi.component(s);
                return r.options.functional ? new r({
                    data: I(t) ? t : [].concat(i)
                }) : t ? ze(t).map(o)[0] : o(t);

                function o(t) {
                    var e = hi.getComponent(t, s);
                    if (e) {
                        if (!n) return e;
                        e.$destroy()
                    }
                    return new r({
                        el: t,
                        data: n
                    })
                }
            };
            var n = I(t) ? Y({}, t) : t.options;
            return n.name = s, n.install && n.install(hi, n, s), hi._initialized && !n.functional && wn.read(function () {
                return hi[s]("[uk-" + e + "],[data-uk-" + e + "]")
            }), di[s] = I(t) ? n : t
        }, hi.getComponents = function (t) {
            return t && t[li] || {}
        }, hi.getComponent = function (t, e) {
            return hi.getComponents(t)[e]
        }, hi.connect = function (t) {
            if (t[li])
                for (var e in t[li]) t[li][e]._callConnected();
            for (var n = 0; n < t.attributes.length; n++) {
                var i = fi(t.attributes[n].name);
                i && i in di && hi[i](t)
            }
        }, hi.disconnect = function (t) {
            for (var e in t[li]) t[li][e]._callDisconnected()
        },
        function (i) {
            var r = i.data;
            i.prototype.$create = function (t, e, n) {
                return i[t](e, n)
            }, i.prototype.$mount = function (t) {
                var e = this.$options.name;
                t[r] || (t[r] = {}), t[r][e] || ((t[r][e] = this).$el = this.$options.el = this.$options.el || t, Bt(t, document) && this._callConnected())
            }, i.prototype.$reset = function () {
                this._callDisconnected(), this._callConnected()
            }, i.prototype.$destroy = function (t) {
                void 0 === t && (t = !1);
                var e = this.$options,
                    n = e.el,
                    e = e.name;
                n && this._callDisconnected(), this._callHook("destroy"), n && n[r] && (delete n[r][e], B(n[r]) || delete n[r], t && Se(this.$el))
            }, i.prototype.$emit = function (t) {
                this._callUpdate(t)
            }, i.prototype.$update = function (t, e) {
                void 0 === t && (t = this.$el), i.update(t, e)
            }, i.prototype.$getComponent = i.getComponent;
            var t = rt(function (t) {
                return i.prefix + d(t)
            });
            Object.defineProperties(i.prototype, {
                $container: Object.getOwnPropertyDescriptor(i, "container"),
                $name: {
                    get: function () {
                        return t(this.$options.name)
                    }
                }
            })
        }(ii);
    var wi = {
            connected: function () {
                Le(this.$el, this.$name) || Be(this.$el, this.$name)
            }
        },
        bi = {
            props: {
                cls: Boolean,
                animation: "list",
                duration: Number,
                origin: String,
                transition: String
            },
            data: {
                cls: !1,
                animation: [!1],
                duration: 200,
                origin: !1,
                transition: "linear",
                clsEnter: "uk-togglabe-enter",
                clsLeave: "uk-togglabe-leave",
                initProps: {
                    overflow: "",
                    height: "",
                    paddingTop: "",
                    paddingBottom: "",
                    marginTop: "",
                    marginBottom: ""
                },
                hideProps: {
                    overflow: "hidden",
                    height: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    marginTop: 0,
                    marginBottom: 0
                }
            },
            computed: {
                hasAnimation: function (t) {
                    return !!t.animation[0]
                },
                hasTransition: function (t) {
                    t = t.animation;
                    return this.hasAnimation && !0 === t[0]
                }
            },
            methods: {
                toggleElement: function (e, s, a) {
                    var u = this;
                    return new le(function (t) {
                        return le.all(W(e).map(function (t) {
                            var e = M(s) ? s : !u.isToggled(t);
                            if (!ee(t, "before" + (e ? "show" : "hide"), [u])) return le.reject();
                            var o, n = (k(a) ? a : !1 !== a && u.hasAnimation ? u.hasTransition ? xi(u) : (o = u, function (t, e) {
                                    on.cancel(t);
                                    var n = o.animation,
                                        i = o.duration,
                                        r = o._toggle;
                                    return e ? (r(t, !0), on.in(t, n[0], i, o.origin)) : on.out(t, n[1] || n[0], i, o.origin).then(function () {
                                        return r(t, !1)
                                    })
                                }) : u._toggle)(t, e),
                                i = e ? u.clsEnter : u.clsLeave;
                            Be(t, i), ee(t, e ? "show" : "hide", [u]);

                            function r() {
                                Oe(t, i), ee(t, e ? "shown" : "hidden", [u]), u.$update(t)
                            }
                            return n ? n.then(r, function () {
                                return Oe(t, i), le.reject()
                            }) : r()
                        })).then(t, Q)
                    })
                },
                isToggled: function (t) {
                    return !!Le(t = W(t = void 0 === t ? this.$el : t)[0], this.clsEnter) || !Le(t, this.clsLeave) && (this.cls ? Le(t, this.cls.split(" ")[0]) : $t(t))
                },
                _toggle: function (t, e) {
                    var n;
                    t && (e = Boolean(e), this.cls ? (n = w(this.cls, " ") || e !== Le(t, this.cls)) && Fe(t, this.cls, w(this.cls, " ") ? void 0 : e) : (n = e === t.hidden) && (t.hidden = !e), ze("[autofocus]", t).some(function (t) {
                        return $t(t) ? t.focus() || !0 : t.blur()
                    }), n && (ee(t, "toggled", [e, this]), this.$update(t)))
                }
            }
        };

    function xi(t) {
        var o = t.isToggled,
            s = t.duration,
            a = t.initProps,
            u = t.hideProps,
            c = t.transition,
            h = t._toggle;
        return function (t, e) {
            var n = tn.inProgress(t),
                i = t.hasChildNodes ? L(qe(t.firstElementChild, "marginTop")) + L(qe(t.lastElementChild, "marginBottom")) : 0,
                r = $t(t) ? ln(t) + (n ? 0 : i) : 0;
            tn.cancel(t), o(t) || h(t, !0), ln(t, ""), wn.flush();
            i = ln(t) + (n ? 0 : i);
            return ln(t, r), (e ? tn.start(t, Y({}, a, {
                overflow: "hidden",
                height: i
            }), Math.round(s * (1 - r / i)), c) : tn.start(t, u, Math.round(s * (r / i)), c).then(function () {
                return h(t, !1)
            })).then(function () {
                return qe(t, a)
            })
        }
    }
    var yi = {
        mixins: [wi, bi],
        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String,
            offset: Number
        },
        data: {
            targets: "> *",
            active: !1,
            animation: [!0],
            collapsible: !0,
            multiple: !1,
            clsOpen: "uk-open",
            toggle: "> .uk-accordion-title",
            content: "> .uk-accordion-content",
            transition: "ease",
            offset: 0
        },
        computed: {
            items: {
                get: function (t, e) {
                    return ze(t.targets, e)
                },
                watch: function (t, e) {
                    var n = this;
                    t.forEach(function (t) {
                        return ki(Ne(n.content, t), !Le(t, n.clsOpen))
                    }), e || Le(t, this.clsOpen) || (t = !1 !== this.active && t[Number(this.active)] || !this.collapsible && t[0]) && this.toggle(t, !1)
                },
                immediate: !0
            },
            toggles: function (t) {
                var e = t.toggle;
                return this.items.map(function (t) {
                    return Ne(e, t)
                })
            }
        },
        events: [{
            name: "click",
            delegate: function () {
                return this.targets + " " + this.$props.toggle
            },
            handler: function (t) {
                t.preventDefault(), this.toggle(Ht(this.toggles, t.current))
            }
        }],
        methods: {
            toggle: function (t, r) {
                var o = this,
                    e = [this.items[it(t, this.items)]],
                    t = _t(this.items, "." + this.clsOpen);
                this.multiple || w(t, e[0]) || (e = e.concat(t)), !this.collapsible && t.length < 2 && !_t(e, ":not(." + this.clsOpen + ")").length || e.forEach(function (t) {
                    return o.toggleElement(t, !Le(t, o.clsOpen), function (e, n) {
                        Fe(e, o.clsOpen, n), ot(Ne(o.$props.toggle, e), "aria-expanded", n);
                        var i = Ne((e._wrapper ? "> * " : "") + o.content, e);
                        if (!1 !== r && o.hasTransition) return e._wrapper || (e._wrapper = Ie(i, "<div" + (n ? " hidden" : "") + ">")), ki(i, !1), xi(o)(e._wrapper, n).then(function () {
                            var t;
                            ki(i, !n), delete e._wrapper, Te(i), n && (Vn(t = Ne(o.$props.toggle, e)) || qn(t, {
                                offset: o.offset
                            }))
                        });
                        ki(i, !n)
                    })
                })
            }
        }
    };

    function ki(t, e) {
        t && (t.hidden = e)
    }
    var $i = {
            mixins: [wi, bi],
            args: "animation",
            props: {
                close: String
            },
            data: {
                animation: [!0],
                selClose: ".uk-alert-close",
                duration: 150,
                hideProps: Y({
                    opacity: 0
                }, bi.data.hideProps)
            },
            events: [{
                name: "click",
                delegate: function () {
                    return this.selClose
                },
                handler: function (t) {
                    t.preventDefault(), this.close()
                }
            }],
            methods: {
                close: function () {
                    var t = this;
                    this.toggleElement(this.$el).then(function () {
                        return t.$destroy(!0)
                    })
                }
            }
        },
        Si = {
            args: "autoplay",
            props: {
                automute: Boolean,
                autoplay: Boolean
            },
            data: {
                automute: !1,
                autoplay: !0
            },
            computed: {
                inView: function (t) {
                    return "inview" === t.autoplay
                }
            },
            connected: function () {
                this.inView && !st(this.$el, "preload") && (this.$el.preload = "none"), this.automute && zn(this.$el)
            },
            update: {
                read: function () {
                    return !!Dn(this.$el) && {
                        visible: $t(this.$el) && "hidden" !== qe(this.$el, "visibility"),
                        inView: this.inView && Vn(this.$el)
                    }
                },
                write: function (t) {
                    var e = t.visible,
                        t = t.inView;
                    !e || this.inView && !t ? Nn(this.$el) : (!0 === this.autoplay || this.inView && t) && Mn(this.$el)
                },
                events: ["resize", "scroll"]
            }
        },
        Ii = {
            mixins: [wi, Si],
            props: {
                width: Number,
                height: Number
            },
            data: {
                automute: !0
            },
            update: {
                read: function () {
                    var t = this.$el,
                        e = function (t) {
                            for (; t = Ct(t);)
                                if ("static" !== qe(t, "position")) return t
                        }(t) || Ct(t),
                        n = e.offsetHeight,
                        e = e.offsetWidth,
                        n = nt.cover({
                            width: this.width || t.naturalWidth || t.videoWidth || t.clientWidth,
                            height: this.height || t.naturalHeight || t.videoHeight || t.clientHeight
                        }, {
                            width: e + (e % 2 ? 1 : 0),
                            height: n + (n % 2 ? 1 : 0)
                        });
                    return !(!n.width || !n.height) && n
                },
                write: function (t) {
                    var e = t.height,
                        t = t.width;
                    qe(this.$el, {
                        height: e,
                        width: t
                    })
                },
                events: ["resize"]
            }
        };
    var Ei, Ti = {
            props: {
                container: Boolean
            },
            data: {
                container: !0
            },
            computed: {
                container: function (t) {
                    t = t.container;
                    return !0 === t && this.$container || t && Ne(t)
                }
            }
        },
        Ci = {
            props: {
                pos: String,
                offset: null,
                flip: Boolean,
                clsPos: String
            },
            data: {
                pos: "bottom-" + (lt ? "right" : "left"),
                flip: !0,
                offset: !1,
                clsPos: ""
            },
            computed: {
                pos: function (t) {
                    t = t.pos;
                    return (t + (w(t, "-") ? "" : "-center")).split("-")
                },
                dir: function () {
                    return this.pos[0]
                },
                align: function () {
                    return this.pos[1]
                }
            },
            methods: {
                positionAt: function (t, e, n) {
                    Pe(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
                    var i, r = this.offset,
                        o = this.getAxis();
                    D(r) || (r = (i = Ne(r)) ? un(i)["x" === o ? "left" : "top"] - un(e)["x" === o ? "right" : "bottom"] : 0);
                    r = Zn(t, e, "x" === o ? mn(this.dir) + " " + this.align : this.align + " " + mn(this.dir), "x" === o ? this.dir + " " + this.align : this.align + " " + this.dir, "x" === o ? "" + ("left" === this.dir ? -r : r) : " " + ("top" === this.dir ? -r : r), null, this.flip, n).target, n = r.x, r = r.y;
                    this.dir = "x" === o ? n : r, this.align = "x" === o ? r : n, Fe(t, this.clsPos + "-" + this.dir + "-" + this.align, !1 === this.offset)
                },
                getAxis: function () {
                    return "top" === this.dir || "bottom" === this.dir ? "y" : "x"
                }
            }
        },
        _i = {
            mixins: [Ti, Ci, bi],
            args: "pos",
            props: {
                mode: "list",
                toggle: Boolean,
                boundary: Boolean,
                boundaryAlign: Boolean,
                delayShow: Number,
                delayHide: Number,
                clsDrop: String
            },
            data: {
                mode: ["click", "hover"],
                toggle: "- *",
                boundary: !0,
                boundaryAlign: !1,
                delayShow: 0,
                delayHide: 800,
                clsDrop: !1,
                animation: ["uk-animation-fade"],
                cls: "uk-open",
                container: !1
            },
            computed: {
                boundary: function (t, e) {
                    t = t.boundary;
                    return !0 === t ? window : Lt(t, e)
                },
                clsDrop: function (t) {
                    return t.clsDrop || "uk-" + this.$options.name
                },
                clsPos: function () {
                    return this.clsDrop
                }
            },
            created: function () {
                this.tracker = new Sn
            },
            connected: function () {
                Be(this.$el, this.clsDrop), this.toggle && !this.target && (this.target = this.$create("toggle", Lt(this.toggle, this.$el), {
                    target: this.$el,
                    mode: this.mode
                }))
            },
            disconnected: function () {
                this.isActive() && (Ei = null)
            },
            events: [{
                name: "click",
                delegate: function () {
                    return "." + this.clsDrop + "-close"
                },
                handler: function (t) {
                    t.preventDefault(), this.hide(!1)
                }
            }, {
                name: "click",
                delegate: function () {
                    return 'a[href^="#"]'
                },
                handler: function (t) {
                    var e = t.defaultPrevented,
                        t = t.current.hash;
                    e || !t || Bt(t, this.$el) || this.hide(!1)
                }
            }, {
                name: "beforescroll",
                handler: function () {
                    this.hide(!1)
                }
            }, {
                name: "toggle",
                self: !0,
                handler: function (t, e) {
                    t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(e.$el, !1)
                }
            }, {
                name: "toggleshow",
                self: !0,
                handler: function (t, e) {
                    t.preventDefault(), this.show(e.$el)
                }
            }, {
                name: "togglehide",
                self: !0,
                handler: function (t) {
                    t.preventDefault(), Nt(this.$el, ":focus,:hover") || this.hide()
                }
            }, {
                name: wt + " focusin",
                filter: function () {
                    return w(this.mode, "hover")
                },
                handler: function (t) {
                    ue(t) || this.clearTimers()
                }
            }, {
                name: bt + " focusout",
                filter: function () {
                    return w(this.mode, "hover")
                },
                handler: function (t) {
                    !ue(t) && t.relatedTarget && this.hide()
                }
            }, {
                name: "toggled",
                self: !0,
                handler: function (t, e) {
                    e && (this.clearTimers(), this.position())
                }
            }, {
                name: "show",
                self: !0,
                handler: function () {
                    var r = this;
                    (Ei = this).tracker.init(), te(this.$el, "hide", Zt(document, mt, function (t) {
                        var i = t.target;
                        return !Bt(i, r.$el) && te(document, vt + " " + xt + " scroll", function (t) {
                            var e = t.defaultPrevented,
                                n = t.type,
                                t = t.target;
                            e || n !== vt || i !== t || r.target && Bt(i, r.target) || r.hide(!1)
                        }, !0)
                    }), {
                        self: !0
                    }), te(this.$el, "hide", Zt(document, "keydown", function (t) {
                        27 === t.keyCode && r.hide(!1)
                    }), {
                        self: !0
                    })
                }
            }, {
                name: "beforehide",
                self: !0,
                handler: function () {
                    this.clearTimers()
                }
            }, {
                name: "hide",
                handler: function (t) {
                    t = t.target;
                    this.$el === t ? (Ei = this.isActive() ? null : Ei, this.tracker.cancel()) : Ei = null === Ei && Bt(t, this.$el) && this.isToggled() ? this : Ei
                }
            }],
            update: {
                write: function () {
                    this.isToggled() && !Le(this.$el, this.clsEnter) && this.position()
                },
                events: ["resize"]
            },
            methods: {
                show: function (t, e) {
                    var n, i = this;
                    if (void 0 === t && (t = this.target), void 0 === e && (e = !0), this.isToggled() && t && this.target && t !== this.target && this.hide(!1), this.target = t, this.clearTimers(), !this.isActive()) {
                        if (Ei) {
                            if (e && Ei.isDelaying) return void(this.showTimer = setTimeout(this.show, 10));
                            for (; Ei && n !== Ei && !Bt(this.$el, Ei.$el);)(n = Ei).hide(!1)
                        }
                        this.container && Ct(this.$el) !== this.container && xe(this.container, this.$el), this.showTimer = setTimeout(function () {
                            return i.toggleElement(i.$el, !0)
                        }, e && this.delayShow || 0)
                    }
                },
                hide: function (t) {
                    var e = this;
                    void 0 === t && (t = !0);

                    function n() {
                        return e.toggleElement(e.$el, !1, !1)
                    }
                    var i, r;
                    this.clearTimers(), this.isDelaying = (i = this.$el, r = [], Me(i, function (t) {
                        return "static" !== qe(t, "position") && r.push(t)
                    }), r.some(function (t) {
                        return e.tracker.movesTo(t)
                    })), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(n, this.delayHide) : n()
                },
                clearTimers: function () {
                    clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
                },
                isActive: function () {
                    return Ei === this
                },
                position: function () {
                    Oe(this.$el, this.clsDrop + "-stack"), Fe(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                    var t, e = un(this.boundary),
                        n = this.boundaryAlign ? e : un(this.target);
                    "justify" === this.align ? (t = "y" === this.getAxis() ? "width" : "height", qe(this.$el, t, n[t])) : this.boundary && this.$el.offsetWidth > Math.max(e.right - n.left, n.right - e.left) && Be(this.$el, this.clsDrop + "-stack"), this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.target, this.boundary)
                }
            }
        };
    var Ai = {
            mixins: [wi],
            args: "target",
            props: {
                target: Boolean
            },
            data: {
                target: !1
            },
            computed: {
                input: function (t, e) {
                    return Ne(St, e)
                },
                state: function () {
                    return this.input.nextElementSibling
                },
                target: function (t, e) {
                    t = t.target;
                    return t && (!0 === t && Ct(this.input) === e && this.input.nextElementSibling || Lt(t, e))
                }
            },
            update: function () {
                var t, e, n = this.target,
                    i = this.input;
                !n || n[e = It(n) ? "value" : "textContent"] !== (i = i.files && i.files[0] ? i.files[0].name : Nt(i, "select") && (t = ze("option", i).filter(function (t) {
                    return t.selected
                })[0]) ? t.textContent : i.value) && (n[e] = i)
            },
            events: [{
                name: "change",
                handler: function () {
                    this.$update()
                }
            }, {
                name: "reset",
                el: function () {
                    return Dt(this.$el, "form")
                },
                handler: function () {
                    this.$update()
                }
            }]
        },
        Mi = {
            update: {
                read: function (t) {
                    var e = Vn(this.$el);
                    if (!e || t.isInView === e) return !1;
                    t.isInView = e
                },
                write: function () {
                    this.$el.src = "" + this.$el.src
                },
                events: ["scroll", "resize"]
            }
        },
        Ni = {
            props: {
                margin: String,
                firstColumn: Boolean
            },
            data: {
                margin: "uk-margin-small-top",
                firstColumn: "uk-first-column"
            },
            update: {
                read: function () {
                    var t = zi(this.$el.children);
                    return {
                        rows: t,
                        columns: function (t) {
                            for (var e = [], n = 0; n < t.length; n++)
                                for (var i = Di(t[n], "left", "right"), r = 0; r < i.length; r++) e[r] = e[r] ? e[r].concat(i[r]) : i[r];
                            return lt ? e.reverse() : e
                        }(t)
                    }
                },
                write: function (t) {
                    for (var e = t.columns, n = t.rows, i = 0; i < n.length; i++)
                        for (var r = 0; r < n[i].length; r++) Fe(n[i][r], this.margin, 0 !== i), Fe(n[i][r], this.firstColumn, !!~e[0].indexOf(n[i][r]))
                },
                events: ["resize"]
            }
        };

    function zi(t) {
        return Di(t, "top", "bottom")
    }

    function Di(t, e, n) {
        for (var i = [[]], r = 0; r < t.length; r++) {
            var o = t[r];
            if ($t(o))
                for (var s = Bi(o), a = i.length - 1; 0 <= a; a--) {
                    var u = i[a];
                    if (!u[0]) {
                        u.push(o);
                        break
                    }
                    var c = void 0,
                        c = u[0].offsetParent === o.offsetParent ? Bi(u[0]) : (s = Bi(o, !0), Bi(u[0], !0));
                    if (s[e] >= c[n] - 1 && s[e] !== c[e]) {
                        i.push([o]);
                        break
                    }
                    if (s[n] - 1 > c[e] || s[e] === c[e]) {
                        u.push(o);
                        break
                    }
                    if (0 === a) {
                        i.unshift([o]);
                        break
                    }
                }
        }
        return i
    }

    function Bi(t, e) {
        var n = t.offsetTop,
            i = t.offsetLeft,
            r = t.offsetHeight,
            o = t.offsetWidth;
        return (e = void 0 === e ? !1 : e) && (n = (t = hn(t))[0], i = t[1]), {
            top: n,
            left: i,
            bottom: n + r,
            right: i + o
        }
    }
    var Oi = {
        extends: Ni,
        mixins: [wi],
        name: "grid",
        props: {
            masonry: Boolean,
            parallax: Number
        },
        data: {
            margin: "uk-grid-margin",
            clsStack: "uk-grid-stack",
            masonry: !1,
            parallax: 0
        },
        connected: function () {
            this.masonry && Be(this.$el, "uk-flex-top uk-flex-wrap-top")
        },
        update: [{
            write: function (t) {
                t = t.columns;
                Fe(this.$el, this.clsStack, t.length < 2)
            },
            events: ["resize"]
        }, {
            read: function (t) {
                var e = t.columns,
                    n = t.rows;
                if (!e.length || !this.masonry && !this.parallax || Pi(this.$el)) return t.translates = !1;
                var i, r, o = !1,
                    s = Pt(this.$el),
                    a = e.map(function (t) {
                        return t.reduce(function (t, e) {
                            return t + e.offsetHeight
                        }, 0)
                    }),
                    u = (t = s, i = this.margin, L((s = t.filter(function (t) {
                        return Le(t, i)
                    })[0]) ? qe(s, "marginTop") : qe(t[0], "paddingLeft")) * (n.length - 1)),
                    c = Math.max.apply(Math, a) + u;
                this.masonry && (e = e.map(function (t) {
                    return K(t, "offsetTop")
                }), t = e, r = n.map(function (t) {
                    return Math.max.apply(Math, t.map(function (t) {
                        return t.offsetHeight
                    }))
                }), o = t.map(function (n) {
                    var i = 0;
                    return n.map(function (t, e) {
                        return i += e ? r[e - 1] - n[e - 1].offsetHeight : 0
                    })
                }));
                var h = Math.abs(this.parallax);
                return {
                    padding: h = h && a.reduce(function (t, e, n) {
                        return Math.max(t, e + u + (n % 2 ? h : h / 8) - c)
                    }, 0),
                    columns: e,
                    translates: o,
                    height: o ? c : ""
                }
            },
            write: function (t) {
                var e = t.height,
                    t = t.padding;
                qe(this.$el, "paddingBottom", t || ""), !1 !== e && qe(this.$el, "height", e)
            },
            events: ["resize"]
        }, {
            read: function (t) {
                t = t.height;
                return !Pi(this.$el) && {
                    scrolled: !!this.parallax && Un(this.$el, t ? t - ln(this.$el) : 0) * Math.abs(this.parallax)
                }
            },
            write: function (t) {
                var e = t.columns,
                    i = t.scrolled,
                    r = t.translates;
                !1 === i && !r || e.forEach(function (t, n) {
                    return t.forEach(function (t, e) {
                        return qe(t, "transform", i || r ? "translateY(" + ((r && -r[n][e]) + (i ? n % 2 ? i : i / 8 : 0)) + "px)" : "")
                    })
                })
            },
            events: ["scroll", "resize"]
        }]
    };

    function Pi(t) {
        return Pt(t).some(function (t) {
            return "absolute" === qe(t, "position")
        })
    }
    var Hi = ht ? {
            props: {
                selMinHeight: String
            },
            data: {
                selMinHeight: !1,
                forceHeight: !1
            },
            computed: {
                elements: function (t, e) {
                    t = t.selMinHeight;
                    return t ? ze(t, e) : [e]
                }
            },
            update: [{
                read: function () {
                    qe(this.elements, "height", "")
                },
                order: -5,
                events: ["resize"]
            }, {
                write: function () {
                    var n = this;
                    this.elements.forEach(function (t) {
                        var e = L(qe(t, "minHeight"));
                        e && (n.forceHeight || Math.round(e + pn(t, "height", "content-box")) >= t.offsetHeight) && qe(t, "height", e)
                    })
                },
                order: 5,
                events: ["resize"]
            }]
        } : {},
        Li = {
            mixins: [Hi],
            args: "target",
            props: {
                target: String,
                row: Boolean
            },
            data: {
                target: "> *",
                row: !0,
                forceHeight: !0
            },
            computed: {
                elements: function (t, e) {
                    return ze(t.target, e)
                }
            },
            update: {
                read: function () {
                    return {
                        rows: (this.row ? zi(this.elements) : [this.elements]).map(Fi)
                    }
                },
                write: function (t) {
                    t.rows.forEach(function (t) {
                        var n = t.heights;
                        return t.elements.forEach(function (t, e) {
                            return qe(t, "minHeight", n[e])
                        })
                    })
                },
                events: ["resize"]
            }
        };

    function Fi(t) {
        if (t.length < 2) return {
            heights: [""],
            elements: t
        };
        var n = t.map(ji),
            i = Math.max.apply(Math, n),
            e = t.some(function (t) {
                return t.style.minHeight
            }),
            r = t.some(function (t, e) {
                return !t.style.minHeight && n[e] < i
            });
        return e && r && (qe(t, "minHeight", ""), n = t.map(ji), i = Math.max.apply(Math, n)), {
            heights: n = t.map(function (t, e) {
                return n[e] === i && L(t.style.minHeight).toFixed(2) !== i.toFixed(2) ? "" : i
            }),
            elements: t
        }
    }

    function ji(t) {
        var e = !1;
        $t(t) || (e = t.style.display, qe(t, "display", "block", "important"));
        var n = an(t).height - pn(t, "height", "content-box");
        return !1 !== e && qe(t, "display", e), n
    }
    var Wi = {
            mixins: [Hi],
            props: {
                expand: Boolean,
                offsetTop: Boolean,
                offsetBottom: Boolean,
                minHeight: Number
            },
            data: {
                expand: !1,
                offsetTop: !1,
                offsetBottom: !1,
                minHeight: 0
            },
            update: {
                read: function (t) {
                    var e = t.minHeight;
                    if (!$t(this.$el)) return !1;
                    var n = "",
                        i = pn(this.$el, "height", "content-box");
                    return this.expand ? n = ln(window) - (an(document.documentElement).height - an(this.$el).height) - i || "" : (n = "calc(100vh", this.offsetTop && (n += 0 < (t = un(this.$el).top) && t < ln(window) / 2 ? " - " + t + "px" : ""), !0 === this.offsetBottom ? n += " - " + an(this.$el.nextElementSibling).height + "px" : D(this.offsetBottom) ? n += " - " + this.offsetBottom + "vh" : this.offsetBottom && u(this.offsetBottom, "px") ? n += " - " + L(this.offsetBottom) + "px" : N(this.offsetBottom) && (n += " - " + an(Lt(this.offsetBottom, this.$el)).height + "px"), n += (i ? " - " + i + "px" : "") + ")"), {
                        minHeight: n,
                        prev: e
                    }
                },
                write: function (t) {
                    var e = t.minHeight,
                        t = t.prev;
                    qe(this.$el, {
                        minHeight: e
                    }), e !== t && this.$update(this.$el, "resize"), this.minHeight && L(qe(this.$el, "minHeight")) < this.minHeight && qe(this.$el, "minHeight", this.minHeight)
                },
                events: ["resize"]
            }
        },
        Vi = {
            args: "src",
            props: {
                id: Boolean,
                icon: String,
                src: String,
                style: String,
                width: Number,
                height: Number,
                ratio: Number,
                class: String,
                strokeAnimation: Boolean,
                focusable: Boolean,
                attributes: "list"
            },
            data: {
                ratio: 1,
                include: ["style", "class", "focusable"],
                class: "",
                strokeAnimation: !1
            },
            beforeConnect: function () {
                this.class += " uk-svg"
            },
            connected: function () {
                var t, n = this;
                !this.icon && w(this.src, "#") && (t = this.src.split("#"), this.src = t[0], this.icon = t[1]), this.svg = this.getSvg().then(function (t) {
                    if (n._connected) {
                        var e = function (t, e) {
                            if (kt(e) || "CANVAS" === e.tagName) {
                                e.hidden = !0;
                                var n = e.nextElementSibling;
                                return Gi(t, n) ? n : ke(e, t)
                            }
                            n = e.lastElementChild;
                            return Gi(t, n) ? n : xe(e, t)
                        }(t, n.$el);
                        return n.svgEl && e !== n.svgEl && Se(n.svgEl), n.applyAttributes(e, t), n.$emit(), n.svgEl = e
                    }
                }, Q)
            },
            disconnected: function () {
                var e = this;
                this.svg.then(function (t) {
                    e._connected || (kt(e.$el) && (e.$el.hidden = !1), Se(t), e.svgEl = null)
                }), this.svg = null
            },
            update: {
                read: function () {
                    return !!(this.strokeAnimation && this.svgEl && $t(this.svgEl))
                },
                write: function () {
                    var t, e;
                    t = this.svgEl, (e = Yi(t)) && t.style.setProperty("--uk-animation-stroke", e)
                },
                type: ["resize"]
            },
            methods: {
                getSvg: function () {
                    var e = this;
                    return Ri(this.src).then(function (t) {
                        return function (t, e) {
                            e && w(t, "<symbol") && (t = function (t, e) {
                                if (!Ui[t]) {
                                    var n;
                                    for (Ui[t] = {}, qi.lastIndex = 0; n = qi.exec(t);) Ui[t][n[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + n[1] + "svg>"
                                }
                                return Ui[t][e]
                            }(t, e) || t);
                            return (t = Ne(t.substr(t.indexOf("<svg")))) && t.hasChildNodes() && t
                        }(t, e.icon) || le.reject("SVG not found.")
                    })
                },
                applyAttributes: function (n, e) {
                    var t, i, r = this;
                    for (t in this.$options.props) w(this.include, t) && t in this && ot(n, t, this[t]);
                    for (i in this.attributes) {
                        var o = this.attributes[i].split(":", 2),
                            s = o[0],
                            o = o[1];
                        ot(n, s, o)
                    }
                    this.id || at(n, "id");
                    var a = ["width", "height"],
                        u = a.map(function (t) {
                            return r[t]
                        });
                    u.some(function (t) {
                        return t
                    }) || (u = a.map(function (t) {
                        return ot(e, t)
                    }));
                    var c = ot(e, "viewBox");
                    (u = c && !u.some(function (t) {
                        return t
                    }) ? c.split(" ").slice(2) : u).forEach(function (t, e) {
                        return ot(n, a[e], L(t) * r.ratio || null)
                    })
                }
            }
        },
        Ri = rt(function (n) {
            return new le(function (e, t) {
                n ? g(n, "data:") ? e(decodeURIComponent(n.split(",")[1])) : ge(n).then(function (t) {
                    return e(t.response)
                }, function () {
                    return t("SVG not found.")
                }) : t()
            })
        });
    var qi = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
        Ui = {};

    function Yi(t) {
        return Math.ceil(Math.max.apply(Math, [0].concat(ze("[stroke]", t).map(function (t) {
            try {
                return t.getTotalLength()
            } catch (t) {
                return 0
            }
        }))))
    }

    function Gi(t, e) {
        return Xi(t) && Xi(e) && Ki(t) === Ki(e)
    }

    function Xi(t) {
        return t && "svg" === t.tagName
    }

    function Ki(t) {
        return (t.innerHTML || (new XMLSerializer).serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g, "$1")).replace(/\s/g, "")
    }
    var Ji = {
            spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
            totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
            marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
            "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
            "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
            "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
            "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
            "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
            "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
            "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
            "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
            "slidenav-next": '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
            "slidenav-next-large": '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
            "slidenav-previous": '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
            "slidenav-previous-large": '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
        },
        Zi = {
            install: function (r) {
                r.icon.add = function (t, e) {
                    var n, i = N(t) ? ((n = {})[t] = e, n) : t;
                    X(i, function (t, e) {
                        Ji[e] = t, delete rr[e]
                    }), r._initialized && Me(document.body, function (t) {
                        return X(r.getComponents(t), function (t) {
                            t.$options.isIcon && t.icon in i && t.$reset()
                        })
                    })
                }
            },
            extends: Vi,
            args: "icon",
            props: ["icon"],
            data: {
                include: ["focusable"]
            },
            isIcon: !0,
            beforeConnect: function () {
                Be(this.$el, "uk-icon")
            },
            methods: {
                getSvg: function () {
                    var t = function (t) {
                        if (!Ji[t]) return null;
                        rr[t] || (rr[t] = Ne((Ji[function (t) {
                            return lt ? U(U(t, "left", "right"), "previous", "next") : t
                        }(t)] || Ji[t]).trim()));
                        return rr[t].cloneNode(!0)
                    }(this.icon);
                    return t ? le.resolve(t) : le.reject("Icon not found.")
                }
            }
        },
        Qi = {
            args: !1,
            extends: Zi,
            data: function (t) {
                return {
                    icon: d(t.constructor.options.name)
                }
            },
            beforeConnect: function () {
                Be(this.$el, this.$name)
            }
        },
        tr = {
            extends: Qi,
            beforeConnect: function () {
                Be(this.$el, "uk-slidenav")
            },
            computed: {
                icon: function (t, e) {
                    t = t.icon;
                    return Le(e, "uk-slidenav-large") ? t + "-large" : t
                }
            }
        },
        er = {
            extends: Qi,
            computed: {
                icon: function (t, e) {
                    t = t.icon;
                    return Le(e, "uk-search-icon") && Ot(e, ".uk-search-large").length ? "search-large" : Ot(e, ".uk-search-navbar").length ? "search-navbar" : t
                }
            }
        },
        nr = {
            extends: Qi,
            computed: {
                icon: function () {
                    return "close-" + (Le(this.$el, "uk-close-large") ? "large" : "icon")
                }
            }
        },
        ir = {
            extends: Qi,
            connected: function () {
                var e = this;
                this.svg.then(function (t) {
                    return t && 1 !== e.ratio && qe(Ne("circle", t), "strokeWidth", 1 / e.ratio)
                })
            }
        },
        rr = {};
    var or = {
        args: "dataSrc",
        props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String
        },
        data: {
            dataSrc: "",
            dataSrcset: !1,
            sizes: !1,
            width: !1,
            height: !1,
            offsetTop: "50vh",
            offsetLeft: "50vw",
            target: !1
        },
        computed: {
            cacheKey: function (t) {
                t = t.dataSrc;
                return this.$name + "." + t
            },
            width: function (t) {
                var e = t.width,
                    t = t.dataWidth;
                return e || t
            },
            height: function (t) {
                var e = t.height,
                    t = t.dataHeight;
                return e || t
            },
            sizes: function (t) {
                var e = t.sizes,
                    t = t.dataSizes;
                return e || t
            },
            isImg: function (t, e) {
                return dr(e)
            },
            target: {
                get: function (t) {
                    t = t.target;
                    return [this.$el].concat(Ft(t, this.$el))
                },
                watch: function () {
                    this.observe()
                }
            },
            offsetTop: function (t) {
                return gn(t.offsetTop, "height")
            },
            offsetLeft: function (t) {
                return gn(t.offsetLeft, "width")
            }
        },
        connected: function () {
            window.IntersectionObserver ? (pr[this.cacheKey] ? sr(this.$el, pr[this.cacheKey], this.dataSrcset, this.sizes) : this.isImg && this.width && this.height && sr(this.$el, function (t, e, n) {
                n && (n = nt.ratio({
                    width: t,
                    height: e
                }, "width", gn(ur(n))), t = n.width, e = n.height);
                return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"></svg>'
            }(this.width, this.height, this.sizes)), this.observer = new IntersectionObserver(this.load, {
                rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
            }), requestAnimationFrame(this.observe)) : sr(this.$el, this.dataSrc, this.dataSrcset, this.sizes)
        },
        disconnected: function () {
            this.observer && this.observer.disconnect()
        },
        update: {
            read: function (t) {
                var e = this,
                    t = t.image;
                return !!this.observer && (t || "complete" !== document.readyState || this.load(this.observer.takeRecords()), !this.isImg && void(t && t.then(function (t) {
                    return t && "" !== t.currentSrc && sr(e.$el, fr(t))
                })))
            },
            write: function (t) {
                var e, n, i;
                this.dataSrcset && 1 !== window.devicePixelRatio && (!(n = qe(this.$el, "backgroundSize")).match(/^(auto\s?)+$/) && L(n) !== t.bgSize || (t.bgSize = (e = this.dataSrcset, n = this.sizes, i = gn(ur(n)), (e = (e.match(lr) || []).map(L).sort(function (t, e) {
                    return t - e
                })).filter(function (t) {
                    return i <= t
                })[0] || e.pop() || ""), qe(this.$el, "backgroundSize", t.bgSize + "px")))
            },
            events: ["resize"]
        },
        methods: {
            load: function (t) {
                var e = this;
                t.some(function (t) {
                    return O(t.isIntersecting) || t.isIntersecting
                }) && (this._data.image = ve(this.dataSrc, this.dataSrcset, this.sizes).then(function (t) {
                    return sr(e.$el, fr(t), t.srcset, t.sizes), pr[e.cacheKey] = fr(t), t
                }, function (t) {
                    return ee(e.$el, new t.constructor(t.type, t))
                }), this.observer.disconnect())
            },
            observe: function () {
                var e = this;
                this._connected && !this._data.image && this.target.forEach(function (t) {
                    return e.observer.observe(t)
                })
            }
        }
    };

    function sr(n, t, e, i) {
        var r;
        dr(n) ? ((r = function (t, e) {
            return e && e !== n[t] && (n[t] = e)
        })("sizes", i), r("srcset", e), r("src", t)) : t && !w(n.style.backgroundImage, t) && (qe(n, "backgroundImage", "url(" + Jt(t) + ")"), ee(n, ne("load", !1)))
    }
    var ar = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

    function ur(t) {
        var e, n;
        for (ar.lastIndex = 0; e = ar.exec(t);)
            if (!e[1] || window.matchMedia(e[1]).matches) {
                e = g(n = e[2], "calc") ? n.slice(5, -1).replace(cr, function (t) {
                    return gn(t)
                }).replace(/ /g, "").match(hr).reduce(function (t, e) {
                    return t + +e
                }, 0) : n;
                break
            } return e || "100vw"
    }
    var cr = /\d+(?:\w+|%)/g,
        hr = /[+-]?(\d+)/g;
    var lr = /\s+\d+w\s*(?:,|$)/g;

    function dr(t) {
        return "IMG" === t.tagName
    }

    function fr(t) {
        return t.currentSrc || t.src
    }
    var pr, mr = "__test__";
    try {
        (pr = window.sessionStorage || {})[mr] = 1, delete pr[mr]
    } catch (t) {
        pr = {}
    }
    var gr = {
        props: {
            media: Boolean
        },
        data: {
            media: !1
        },
        computed: {
            matchMedia: function () {
                var t = function (t) {
                    if (N(t))
                        if ("@" === t[0]) t = L(Ke("breakpoint-" + t.substr(1)));
                        else if (isNaN(t)) return t;
                    return !(!t || isNaN(t)) && "(min-width: " + t + "px)"
                }(this.media);
                return !t || window.matchMedia(t).matches
            }
        }
    };
    var vr = {
            mixins: [wi, gr],
            props: {
                fill: String
            },
            data: {
                fill: "",
                clsWrapper: "uk-leader-fill",
                clsHide: "uk-leader-hide",
                attrFill: "data-fill"
            },
            computed: {
                fill: function (t) {
                    return t.fill || Ke("leader-fill-content")
                }
            },
            connected: function () {
                var t = Ee(this.$el, '<span class="' + this.clsWrapper + '">');
                this.wrapper = t[0]
            },
            disconnected: function () {
                Te(this.wrapper.childNodes)
            },
            update: {
                read: function (t) {
                    var e, n = t.changed,
                        t = e = t.width;
                    return {
                        width: e = Math.floor(this.$el.offsetWidth / 2),
                        fill: this.fill,
                        changed: n || t !== e,
                        hide: !this.matchMedia
                    }
                },
                write: function (t) {
                    Fe(this.wrapper, this.clsHide, t.hide), t.changed && (t.changed = !1, ot(this.wrapper, this.attrFill, new Array(t.width).join(t.fill)))
                },
                events: ["resize"]
            }
        },
        wr = [],
        br = {
            mixins: [wi, Ti, bi],
            props: {
                selPanel: String,
                selClose: String,
                escClose: Boolean,
                bgClose: Boolean,
                stack: Boolean
            },
            data: {
                cls: "uk-open",
                escClose: !0,
                bgClose: !0,
                overlay: !0,
                stack: !1
            },
            computed: {
                panel: function (t, e) {
                    return Ne(t.selPanel, e)
                },
                transitionElement: function () {
                    return this.panel
                },
                bgClose: function (t) {
                    return t.bgClose && this.panel
                }
            },
            beforeDisconnect: function () {
                w(wr, this) && this.toggleElement(this.$el, !1, !1)
            },
            events: [{
                name: "click",
                delegate: function () {
                    return this.selClose
                },
                handler: function (t) {
                    t.preventDefault(), this.hide()
                }
            }, {
                name: "toggle",
                self: !0,
                handler: function (t, e) {
                    t.defaultPrevented || (t.preventDefault(), this.isToggled() === w(wr, this) && this.toggle())
                }
            }, {
                name: "beforeshow",
                self: !0,
                handler: function (t) {
                    if (w(wr, this)) return !1;
                    !this.stack && wr.length ? (le.all(wr.map(function (t) {
                        return t.hide()
                    })).then(this.show), t.preventDefault()) : wr.push(this)
                }
            }, {
                name: "show",
                self: !0,
                handler: function () {
                    var r = this,
                        t = document.documentElement;
                    dn(window) > t.clientWidth && this.overlay && qe(document.body, "overflowY", "scroll"), this.stack && qe(this.$el, "zIndex", L(qe(this.$el, "zIndex")) + wr.length), Be(t, this.clsPage), this.bgClose && te(this.$el, "hide", Zt(document, mt, function (t) {
                        var i = t.target;
                        G(wr) !== r || r.overlay && !Bt(i, r.$el) || Bt(i, r.panel) || te(document, vt + " " + xt + " scroll", function (t) {
                            var e = t.defaultPrevented,
                                n = t.type,
                                t = t.target;
                            e || n !== vt || i !== t || r.hide()
                        }, !0)
                    }), {
                        self: !0
                    }), this.escClose && te(this.$el, "hide", Zt(document, "keydown", function (t) {
                        27 === t.keyCode && G(wr) === r && r.hide()
                    }), {
                        self: !0
                    })
                }
            }, {
                name: "shown",
                self: !0,
                handler: function () {
                    Tt(this.$el) || ot(this.$el, "tabindex", "-1"), Ne(":focus", this.$el) || this.$el.focus()
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function () {
                    var e = this;
                    w(wr, this) && wr.splice(wr.indexOf(this), 1), wr.length || qe(document.body, "overflowY", ""), qe(this.$el, "zIndex", ""), wr.some(function (t) {
                        return t.clsPage === e.clsPage
                    }) || Oe(document.documentElement, this.clsPage)
                }
            }],
            methods: {
                toggle: function () {
                    return this.isToggled() ? this.hide() : this.show()
                },
                show: function () {
                    var e = this;
                    return this.container && Ct(this.$el) !== this.container ? (xe(this.container, this.$el), new le(function (t) {
                        return requestAnimationFrame(function () {
                            return e.show().then(t)
                        })
                    })) : this.toggleElement(this.$el, !0, xr(this))
                },
                hide: function () {
                    return this.toggleElement(this.$el, !1, xr(this))
                }
            }
        };

    function xr(t) {
        var s = t.transitionElement,
            a = t._toggle;
        return function (r, o) {
            return new le(function (n, i) {
                return te(r, "show hide", function () {
                    r._reject && r._reject(), r._reject = i, a(r, o);
                    var t = te(s, "transitionstart", function () {
                            te(s, "transitionend transitioncancel", n, {
                                self: !0
                            }), clearTimeout(e)
                        }, {
                            self: !0
                        }),
                        e = setTimeout(function () {
                            t(), n()
                        }, R(qe(s, "transitionDuration")))
                })
            }).then(function () {
                return delete r._reject
            })
        }
    }
    var yr = {
        install: function (t) {
            var a = t.modal;

            function i(t, e, n, i) {
                e = Y({
                    bgClose: !1,
                    escClose: !0,
                    labels: a.labels
                }, e);
                var r = a.dialog(t(e), e),
                    o = new he,
                    s = !1;
                return Zt(r.$el, "submit", "form", function (t) {
                    t.preventDefault(), o.resolve(i && i(r)), s = !0, r.hide()
                }), Zt(r.$el, "hide", function () {
                    return !s && n(o)
                }), o.promise.dialog = r, o.promise
            }
            a.dialog = function (t, e) {
                var n = a('<div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div>", e);
                return n.show(), Zt(n.$el, "hidden", function () {
                    return le.resolve().then(function () {
                        return n.$destroy(!0)
                    })
                }, {
                    self: !0
                }), n
            }, a.alert = function (e, t) {
                return i(function (t) {
                    t = t.labels;
                    return '<div class="uk-modal-body">' + (N(e) ? e : be(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + t.ok + "</button> </div>"
                }, t, function (t) {
                    return t.resolve()
                })
            }, a.confirm = function (e, t) {
                return i(function (t) {
                    t = t.labels;
                    return '<form> <div class="uk-modal-body">' + (N(e) ? e : be(e)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + t.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + t.ok + "</button> </div> </form>"
                }, t, function (t) {
                    return t.reject()
                })
            }, a.prompt = function (e, n, t) {
                return i(function (t) {
                    t = t.labels;
                    return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + (N(e) ? e : be(e)) + '</label> <input class="uk-input" value="' + (n || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + t.cancel + '</button> <button class="uk-button uk-button-primary">' + t.ok + "</button> </div> </form>"
                }, t, function (t) {
                    return t.resolve(null)
                }, function (t) {
                    return Ne("input", t.$el).value
                })
            }, a.labels = {
                ok: "Ok",
                cancel: "Cancel"
            }
        },
        mixins: [br],
        data: {
            clsPage: "uk-modal-page",
            selPanel: ".uk-modal-dialog",
            selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
        },
        events: [{
            name: "show",
            self: !0,
            handler: function () {
                Le(this.panel, "uk-margin-auto-vertical") ? Be(this.$el, "uk-flex") : qe(this.$el, "display", "block"), ln(this.$el)
            }
        }, {
            name: "hidden",
            self: !0,
            handler: function () {
                qe(this.$el, "display", ""), Oe(this.$el, "uk-flex")
            }
        }]
    };
    o = ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle", l = {
        mixins: [wi, Ti, Hi],
        props: {
            dropdown: String,
            mode: "list",
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: Boolean,
            duration: Number
        },
        data: {
            dropdown: o,
            align: lt ? "right" : "left",
            clsDrop: "uk-navbar-dropdown",
            mode: void 0,
            offset: void 0,
            delayShow: void 0,
            delayHide: void 0,
            boundaryAlign: void 0,
            flip: "x",
            boundary: !0,
            dropbar: !1,
            dropbarMode: "slide",
            dropbarAnchor: !1,
            duration: 200,
            forceHeight: !0,
            selMinHeight: o,
            container: !1
        },
        computed: {
            boundary: function (t, e) {
                var n = t.boundary,
                    t = t.boundaryAlign;
                return !0 === n || t ? e : n
            },
            dropbarAnchor: function (t, e) {
                return Lt(t.dropbarAnchor, e)
            },
            pos: function (t) {
                return "bottom-" + t.align
            },
            dropbar: {
                get: function (t) {
                    t = t.dropbar;
                    return t ? (t = this._dropbar || Lt(t, this.$el) || Ne("+ .uk-navbar-dropbar", this.$el)) || (this._dropbar = Ne("<div></div>")) : null
                },
                watch: function (t) {
                    Be(t, "uk-navbar-dropbar")
                },
                immediate: !0
            },
            dropContainer: function (t, e) {
                return this.container || e
            },
            dropdowns: {
                get: function (t, e) {
                    var n = this,
                        t = t.clsDrop,
                        i = ze("." + t, e);
                    return this.dropContainer !== e && ze("." + t, this.dropContainer).forEach(function (t) {
                        var e = n.getDropdown(t);
                        !w(i, t) && e && e.target && Bt(e.target, n.$el) && i.push(t)
                    }), i
                },
                watch: function (t) {
                    var e = this;
                    this.$create("drop", t.filter(function (t) {
                        return !e.getDropdown(t)
                    }), Y({}, this.$props, {
                        boundary: this.boundary,
                        pos: this.pos,
                        offset: this.dropbar || this.offset
                    }))
                },
                immediate: !0
            },
            toggles: function (t, e) {
                return ze(t.dropdown, e)
            }
        },
        disconnected: function () {
            this.dropbar && Se(this.dropbar), delete this._dropbar
        },
        events: [{
            name: "mouseover focusin",
            delegate: function () {
                return this.dropdown
            },
            handler: function (t) {
                var e = t.current,
                    t = this.getActive();
                t && w(t.mode, "hover") && t.target && !Bt(t.target, e) && !t.tracker.movesTo(t.$el) && t.hide(!1)
            }
        }, {
            name: "keydown",
            delegate: function () {
                return this.dropdown
            },
            handler: function (t) {
                var e = t.current,
                    n = t.keyCode,
                    i = this.getActive();
                n === Sr.DOWN && st(e, "aria-expanded") && (t.preventDefault(), i && i.target === e ? $r(i.$el) : (e.click(), te(this.dropContainer, "show", function (t) {
                    return $r(t.target)
                }))), kr(t, this.toggles, i)
            }
        }, {
            name: "keydown",
            el: function () {
                return this.dropContainer
            },
            delegate: function () {
                return "." + this.clsDrop
            },
            handler: function (t) {
                var e, n, i = t.current,
                    r = t.keyCode;
                w(this.dropdowns, i) && (e = this.getActive(), i = x(n = ze(Et, i), function (t) {
                    return Nt(t, ":focus")
                }), r === Sr.UP && (t.preventDefault(), 0 < i && n[i - 1].focus()), r === Sr.DOWN && (t.preventDefault(), i < n.length - 1 && n[i + 1].focus()), r === Sr.ESC && e && e.target && e.target.focus(), kr(t, this.toggles, e))
            }
        }, {
            name: "mouseleave",
            el: function () {
                return this.dropbar
            },
            filter: function () {
                return this.dropbar
            },
            handler: function () {
                var t = this.getActive();
                t && w(t.mode, "hover") && !this.dropdowns.some(function (t) {
                    return Nt(t, ":hover")
                }) && t.hide()
            }
        }, {
            name: "beforeshow",
            el: function () {
                return this.dropContainer
            },
            filter: function () {
                return this.dropbar
            },
            handler: function () {
                Ct(this.dropbar) || ke(this.dropbarAnchor || this.$el, this.dropbar)
            }
        }, {
            name: "show",
            el: function () {
                return this.dropContainer
            },
            filter: function () {
                return this.dropbar
            },
            handler: function (t, e) {
                var n = e.$el,
                    e = e.dir;
                Le(n, this.clsDrop) && ("slide" === this.dropbarMode && Be(this.dropbar, "uk-navbar-dropbar-slide"), this.clsDrop && Be(n, this.clsDrop + "-dropbar"), "bottom" === e && this.transitionTo(n.offsetHeight + L(qe(n, "marginTop")) + L(qe(n, "marginBottom")), n))
            }
        }, {
            name: "beforehide",
            el: function () {
                return this.dropContainer
            },
            filter: function () {
                return this.dropbar
            },
            handler: function (t, e) {
                var n = e.$el,
                    e = this.getActive();
                Nt(this.dropbar, ":hover") && e && e.$el === n && t.preventDefault()
            }
        }, {
            name: "hide",
            el: function () {
                return this.dropContainer
            },
            filter: function () {
                return this.dropbar
            },
            handler: function (t, e) {
                var n = e.$el;
                Le(n, this.clsDrop) && ((e = this.getActive()) && e.$el !== n || this.transitionTo(0))
            }
        }],
        methods: {
            getActive: function () {
                return Ei && Bt(Ei.target, this.$el) && Ei
            },
            transitionTo: function (t, e) {
                var n = this,
                    i = this.dropbar,
                    r = $t(i) ? ln(i) : 0;
                return qe(e = r < t && e, "clip", "rect(0," + e.offsetWidth + "px," + r + "px,0)"), ln(i, r), tn.cancel([e, i]), le.all([tn.start(i, {
                    height: t
                }, this.duration), tn.start(e, {
                    clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
                }, this.duration)]).catch(Q).then(function () {
                    qe(e, {
                        clip: ""
                    }), n.$update(i)
                })
            },
            getDropdown: function (t) {
                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
            }
        }
    };

    function kr(t, e, n) {
        var i = t.current,
            r = t.keyCode,
            t = n && n.target || i,
            i = e.indexOf(t);
        r === Sr.LEFT && 0 < i && (n && n.hide(!1), e[i - 1].focus()), r === Sr.RIGHT && i < e.length - 1 && (n && n.hide(!1), e[i + 1].focus()), r === Sr.TAB && (t.focus(), n && n.hide(!1))
    }

    function $r(t) {
        Ne(":focus", t) || (t = Ne(Et, t)) && t.focus()
    }
    var Sr = {
            TAB: 9,
            ESC: 27,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40
        },
        t = {
            mixins: [br],
            args: "mode",
            props: {
                mode: String,
                flip: Boolean,
                overlay: Boolean
            },
            data: {
                mode: "slide",
                flip: !1,
                overlay: !1,
                clsPage: "uk-offcanvas-page",
                clsContainer: "uk-offcanvas-container",
                selPanel: ".uk-offcanvas-bar",
                clsFlip: "uk-offcanvas-flip",
                clsContainerAnimation: "uk-offcanvas-container-animation",
                clsSidebarAnimation: "uk-offcanvas-bar-animation",
                clsMode: "uk-offcanvas",
                clsOverlay: "uk-offcanvas-overlay",
                selClose: ".uk-offcanvas-close",
                container: !1
            },
            computed: {
                clsFlip: function (t) {
                    var e = t.flip,
                        t = t.clsFlip;
                    return e ? t : ""
                },
                clsOverlay: function (t) {
                    var e = t.overlay,
                        t = t.clsOverlay;
                    return e ? t : ""
                },
                clsMode: function (t) {
                    var e = t.mode;
                    return t.clsMode + "-" + e
                },
                clsSidebarAnimation: function (t) {
                    var e = t.mode,
                        t = t.clsSidebarAnimation;
                    return "none" === e || "reveal" === e ? "" : t
                },
                clsContainerAnimation: function (t) {
                    var e = t.mode,
                        t = t.clsContainerAnimation;
                    return "push" !== e && "reveal" !== e ? "" : t
                },
                transitionElement: function (t) {
                    return "reveal" === t.mode ? Ct(this.panel) : this.panel
                }
            },
            update: {
                read: function () {
                    this.isToggled() && !$t(this.$el) && this.hide()
                },
                events: ["resize"]
            },
            events: [{
                name: "click",
                delegate: function () {
                    return 'a[href^="#"]'
                },
                handler: function (t) {
                    var e = t.current.hash;
                    !t.defaultPrevented && e && Ne(e, document.body) && this.hide()
                }
            }, {
                name: "touchstart",
                passive: !0,
                el: function () {
                    return this.panel
                },
                handler: function (t) {
                    t = t.targetTouches;
                    1 === t.length && (this.clientY = t[0].clientY)
                }
            }, {
                name: "touchmove",
                self: !0,
                passive: !1,
                filter: function () {
                    return this.overlay
                },
                handler: function (t) {
                    t.cancelable && t.preventDefault()
                }
            }, {
                name: "touchmove",
                passive: !1,
                el: function () {
                    return this.panel
                },
                handler: function (t) {
                    var e, n, i, r;
                    1 === t.targetTouches.length && (e = t.targetTouches[0].clientY - this.clientY, n = (r = this.panel).scrollTop, ((i = r.scrollHeight) <= (r = r.clientHeight) || 0 === n && 0 < e || i - n <= r && e < 0) && t.cancelable && t.preventDefault())
                }
            }, {
                name: "show",
                self: !0,
                handler: function () {
                    "reveal" !== this.mode || Le(Ct(this.panel), this.clsMode) || (Ie(this.panel, "<div>"), Be(Ct(this.panel), this.clsMode)), qe(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), Be(document.body, this.clsContainer, this.clsFlip), qe(document.body, "touch-action", "pan-y pinch-zoom"), qe(this.$el, "display", "block"), Be(this.$el, this.clsOverlay), Be(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), ln(document.body), Be(document.body, this.clsContainerAnimation), this.clsContainerAnimation && (Ir().content += ",user-scalable=0")
                }
            }, {
                name: "hide",
                self: !0,
                handler: function () {
                    Oe(document.body, this.clsContainerAnimation), qe(document.body, "touch-action", "")
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function () {
                    var t;
                    this.clsContainerAnimation && ((t = Ir()).content = t.content.replace(/,user-scalable=0$/, "")), "reveal" === this.mode && Te(this.panel), Oe(this.panel, this.clsSidebarAnimation, this.clsMode), Oe(this.$el, this.clsOverlay), qe(this.$el, "display", ""), Oe(document.body, this.clsContainer, this.clsFlip), qe(document.documentElement, "overflowY", "")
                }
            }, {
                name: "swipeLeft swipeRight",
                handler: function (t) {
                    this.isToggled() && u(t.type, "Left") ^ this.flip && this.hide()
                }
            }]
        };

    function Ir() {
        return Ne('meta[name="viewport"]', document.head) || xe(document.head, '<meta name="viewport">')
    }
    var dt = {
            mixins: [wi],
            props: {
                selContainer: String,
                selContent: String,
                minHeight: Number
            },
            data: {
                selContainer: ".uk-modal",
                selContent: ".uk-modal-dialog",
                minHeight: 150
            },
            computed: {
                container: function (t, e) {
                    return Dt(e, t.selContainer)
                },
                content: function (t, e) {
                    return Dt(e, t.selContent)
                }
            },
            connected: function () {
                qe(this.$el, "minHeight", this.minHeight)
            },
            update: {
                read: function () {
                    return !!(this.content && this.container && $t(this.$el)) && {
                        current: L(qe(this.$el, "maxHeight")),
                        max: Math.max(this.minHeight, ln(this.container) - (an(this.content).height - ln(this.$el)))
                    }
                },
                write: function (t) {
                    var e = t.current,
                        t = t.max;
                    qe(this.$el, "maxHeight", t), Math.round(e) !== Math.round(t) && ee(this.$el, "resize")
                },
                events: ["resize"]
            }
        },
        ft = {
            props: {
                offset: Number
            },
            data: {
                offset: 0
            },
            methods: {
                scrollTo: function (t) {
                    var e = this;
                    t = t && Ne(t) || document.body, ee(this.$el, "beforescroll", [this, t]) && qn(t, {
                        offset: this.offset
                    }).then(function () {
                        return ee(e.$el, "scrolled", [e, t])
                    })
                }
            },
            events: {
                click: function (t) {
                    t.defaultPrevented || (t.preventDefault(), this.scrollTo("#" + Jt(decodeURIComponent((this.$el.hash || "").substr(1)))))
                }
            }
        },
        Er = "_ukScrollspy",
        At = {
            args: "cls",
            props: {
                cls: String,
                target: String,
                hidden: Boolean,
                offsetTop: Number,
                offsetLeft: Number,
                repeat: Boolean,
                delay: Number
            },
            data: function () {
                return {
                    cls: !1,
                    target: !1,
                    hidden: !0,
                    offsetTop: 0,
                    offsetLeft: 0,
                    repeat: !1,
                    delay: 0,
                    inViewClass: "uk-scrollspy-inview"
                }
            },
            computed: {
                elements: {
                    get: function (t, e) {
                        t = t.target;
                        return t ? ze(t, e) : [e]
                    },
                    watch: function (t) {
                        this.hidden && qe(_t(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden")
                    },
                    immediate: !0
                }
            },
            disconnected: function () {
                var e = this;
                this.elements.forEach(function (t) {
                    Oe(t, e.inViewClass, t[Er] ? t[Er].cls : ""), delete t[Er]
                })
            },
            update: [{
                read: function (t) {
                    var e = this;
                    if (!t.update) return le.resolve().then(function () {
                        e.$emit(), t.update = !0
                    }), !1;
                    this.elements.forEach(function (t) {
                        t[Er] || (t[Er] = {
                            cls: ut(t, "uk-scrollspy-class") || e.cls
                        }), t[Er].show = Vn(t, e.offsetTop, e.offsetLeft)
                    })
                },
                write: function (n) {
                    var i = this;
                    this.elements.forEach(function (t) {
                        var e = t[Er];
                        !e.show || e.inview || e.queued ? !e.show && e.inview && !e.queued && i.repeat && i.toggle(t, !1) : (e.queued = !0, n.promise = (n.promise || le.resolve()).then(function () {
                            return new le(function (t) {
                                return setTimeout(t, i.delay)
                            })
                        }).then(function () {
                            i.toggle(t, !0), setTimeout(function () {
                                e.queued = !1, i.$emit()
                            }, 300)
                        }))
                    })
                },
                events: ["scroll", "resize"]
            }],
            methods: {
                toggle: function (t, e) {
                    var n = t[Er];
                    n.off && n.off(), qe(t, "visibility", !e && this.hidden ? "hidden" : ""), Fe(t, this.inViewClass, e), Fe(t, n.cls), /\buk-animation-/.test(n.cls) && (n.off = te(t, "animationcancel animationend", function () {
                        return Pe(t, "uk-animation-[\\w-]+")
                    })), ee(t, e ? "inview" : "outview"), n.inview = e, this.$update(t)
                }
            }
        },
        me = {
            props: {
                cls: String,
                closest: String,
                scroll: Boolean,
                overflow: Boolean,
                offset: Number
            },
            data: {
                cls: "uk-active",
                closest: !1,
                scroll: !1,
                overflow: !0,
                offset: 0
            },
            computed: {
                links: {
                    get: function (t, e) {
                        return ze('a[href^="#"]', e).filter(function (t) {
                            return t.hash
                        })
                    },
                    watch: function (t) {
                        this.scroll && this.$create("scroll", t, {
                            offset: this.offset || 0
                        })
                    },
                    immediate: !0
                },
                targets: function () {
                    return ze(this.links.map(function (t) {
                        return Jt(t.hash).substr(1)
                    }).join(","))
                },
                elements: function (t) {
                    t = t.closest;
                    return Dt(this.links, t || "*")
                }
            },
            update: [{
                read: function () {
                    var n = this,
                        t = this.targets.length;
                    if (!t || !$t(this.$el)) return !1;
                    var i = Yn(this.targets, /auto|scroll/, !0)[0],
                        e = i.scrollTop,
                        r = i.scrollHeight - Xn(i),
                        o = !1;
                    return e === r ? o = t - 1 : (this.targets.every(function (t, e) {
                        if (un(t).top - un(Gn(i)).top - n.offset <= 0) return o = e, !0
                    }), !1 === o && this.overflow && (o = 0)), {
                        active: o
                    }
                },
                write: function (t) {
                    var e = t.active,
                        t = !1 !== e && !Le(this.elements[e], this.cls);
                    this.links.forEach(function (t) {
                        return t.blur()
                    }), Oe(this.elements, this.cls), Be(this.elements[e], this.cls), t && ee(this.$el, "active", [e, this.elements[e]])
                },
                events: ["scroll", "resize"]
            }]
        },
        ni = {
            mixins: [wi, gr],
            props: {
                top: null,
                bottom: Boolean,
                offset: String,
                animation: String,
                clsActive: String,
                clsInactive: String,
                clsFixed: String,
                clsBelow: String,
                selTarget: String,
                widthElement: Boolean,
                showOnUp: Boolean,
                targetOffset: Number
            },
            data: {
                top: 0,
                bottom: !1,
                offset: 0,
                animation: "",
                clsActive: "uk-active",
                clsInactive: "",
                clsFixed: "uk-sticky-fixed",
                clsBelow: "uk-sticky-below",
                selTarget: "",
                widthElement: !1,
                showOnUp: !1,
                targetOffset: !1
            },
            computed: {
                offset: function (t) {
                    return gn(t.offset)
                },
                selTarget: function (t, e) {
                    t = t.selTarget;
                    return t && Ne(t, e) || e
                },
                widthElement: function (t, e) {
                    return Lt(t.widthElement, e) || this.placeholder
                },
                isActive: {
                    get: function () {
                        return Le(this.selTarget, this.clsActive)
                    },
                    set: function (t) {
                        t && !this.isActive ? (He(this.selTarget, this.clsInactive, this.clsActive), ee(this.$el, "active")) : t || Le(this.selTarget, this.clsInactive) || (He(this.selTarget, this.clsActive, this.clsInactive), ee(this.$el, "inactive"))
                    }
                }
            },
            connected: function () {
                this.placeholder = Ne("+ .uk-sticky-placeholder", this.$el) || Ne('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.isActive = !1
            },
            disconnected: function () {
                this.isFixed && (this.hide(), Oe(this.selTarget, this.clsInactive)), Se(this.placeholder), this.placeholder = null, this.widthElement = null
            },
            events: [{
                name: "load hashchange popstate",
                el: function () {
                    return window
                },
                handler: function () {
                    var i, r = this;
                    !1 !== this.targetOffset && location.hash && 0 < window.pageYOffset && ((i = Ne(location.hash)) && wn.read(function () {
                        var t = un(i).top,
                            e = un(r.$el).top,
                            n = r.$el.offsetHeight;
                        r.isFixed && t <= e + n && e <= t + i.offsetHeight && Rn(window, t - n - (D(r.targetOffset) ? r.targetOffset : 0) - r.offset)
                    }))
                }
            }],
            update: [{
                read: function (t, e) {
                    t = t.height;
                    if (this.inactive = !this.matchMedia || !$t(this.$el), this.inactive) return !1;
                    this.isActive && e.has("resize") && (this.hide(), t = this.$el.offsetHeight, this.show()), t = this.isActive ? t : this.$el.offsetHeight, this.topOffset = un(this.isFixed ? this.placeholder : this.$el).top, this.bottomOffset = this.topOffset + t, this.offsetParentTop = un(this.$el.offsetParent).top;
                    e = Tr("bottom", this);
                    return this.top = Math.max(L(Tr("top", this)), this.topOffset) - this.offset, this.bottom = e && e - this.$el.offsetHeight, this.width = an($t(this.widthElement) ? this.widthElement : this.$el).width, {
                        height: t,
                        top: hn(this.placeholder)[0],
                        margins: qe(this.$el, ["marginTop", "marginBottom", "marginLeft", "marginRight"])
                    }
                },
                write: function (t) {
                    var e = t.height,
                        n = t.margins,
                        t = this.placeholder;
                    qe(t, Y({
                        height: e
                    }, n)), Bt(t, document) || (ke(this.$el, t), t.hidden = !0), this.isActive = !!this.isActive
                },
                events: ["resize"]
            }, {
                read: function (t) {
                    t = t.scroll;
                    return void 0 === t && (t = 0), this.scroll = window.pageYOffset, {
                        dir: t <= this.scroll ? "down" : "up",
                        scroll: this.scroll
                    }
                },
                write: function (t, e) {
                    var n = this,
                        i = Date.now(),
                        r = e.has("scroll"),
                        o = t.initTimestamp;
                    void 0 === o && (o = 0);
                    var s = t.dir,
                        a = t.lastDir,
                        u = t.lastScroll,
                        c = t.scroll,
                        e = t.top;
                    (t.lastScroll = c) < 0 || c === u && r || this.showOnUp && !r && !this.isFixed || ((300 < i - o || s !== a) && (t.initScroll = c, t.initTimestamp = i), t.lastDir = s, this.showOnUp && !this.isFixed && Math.abs(t.initScroll - c) <= 30 && Math.abs(u - c) <= 10 || (this.inactive || c < this.top || this.showOnUp && (c <= this.top || "down" === s && r || "up" === s && !this.isFixed && c <= this.bottomOffset) ? this.isFixed ? (this.isFixed = !1, this.animation && c > this.topOffset ? (on.cancel(this.$el), on.out(this.$el, this.animation).then(function () {
                        return n.hide()
                    }, Q)) : this.hide()) : on.inProgress(this.$el) && c < e && (on.cancel(this.$el), this.hide()) : this.isFixed ? this.update() : this.animation ? (on.cancel(this.$el), this.show(), on.in(this.$el, this.animation).catch(Q)) : this.show()))
                },
                events: ["resize", "scroll"]
            }],
            methods: {
                show: function () {
                    this.isFixed = !0, this.update(), this.placeholder.hidden = !1
                },
                hide: function () {
                    this.isActive = !1, Oe(this.$el, this.clsFixed, this.clsBelow), qe(this.$el, {
                        position: "",
                        top: "",
                        width: ""
                    }), this.placeholder.hidden = !0
                },
                update: function () {
                    var t = 0 !== this.top || this.scroll > this.top,
                        e = Math.max(0, this.offset),
                        n = "fixed";
                    D(this.bottom) && this.scroll > this.bottom - this.offset && (e = this.bottom - this.offsetParentTop, n = "absolute"), qe(this.$el, {
                        position: n,
                        top: e + "px",
                        width: this.width
                    }), this.isActive = t, Fe(this.$el, this.clsBelow, this.scroll > this.bottomOffset), Be(this.$el, this.clsFixed)
                }
            }
        };

    function Tr(t, e) {
        var n = e.$props,
            i = e.$el,
            e = e[t + "Offset"],
            t = n[t];
        if (t) return N(t) && t.match(/^-?\d/) ? e + gn(t) : un(!0 === t ? Ct(i) : Lt(t, i)).bottom
    }
    var Cr, _r, Ar, mr = {
            mixins: [bi],
            args: "connect",
            props: {
                connect: String,
                toggle: String,
                itemNav: String,
                active: Number,
                swiping: Boolean
            },
            data: {
                connect: "~.uk-switcher",
                toggle: "> * > :first-child",
                itemNav: !1,
                active: 0,
                swiping: !0,
                cls: "uk-active",
                attrItem: "uk-switcher-item"
            },
            computed: {
                connects: {
                    get: function (t, e) {
                        return Ft(t.connect, e)
                    },
                    watch: function (t) {
                        var n = this;
                        this.swiping && qe(t, "touch-action", "pan-y pinch-zoom");
                        var i = this.index();
                        this.connects.forEach(function (t) {
                            return Pt(t).forEach(function (t, e) {
                                return Fe(t, n.cls, e === i)
                            })
                        })
                    },
                    immediate: !0
                },
                toggles: {
                    get: function (t, e) {
                        return ze(t.toggle, e).filter(function (t) {
                            return !Nt(t, ".uk-disabled *, .uk-disabled, [disabled]")
                        })
                    },
                    watch: function (t) {
                        var e = this.index();
                        this.show(~e ? e : t[this.active] || t[0])
                    },
                    immediate: !0
                },
                children: function () {
                    var t = this;
                    return Pt(this.$el).filter(function (e) {
                        return t.toggles.some(function (t) {
                            return Bt(t, e)
                        })
                    })
                }
            },
            events: [{
                name: "click",
                delegate: function () {
                    return this.toggle
                },
                handler: function (t) {
                    t.preventDefault(), this.show(t.current)
                }
            }, {
                name: "click",
                el: function () {
                    return this.connects.concat(this.itemNav ? Ft(this.itemNav, this.$el) : [])
                },
                delegate: function () {
                    return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                },
                handler: function (t) {
                    t.preventDefault(), this.show(ut(t.current, this.attrItem))
                }
            }, {
                name: "swipeRight swipeLeft",
                filter: function () {
                    return this.swiping
                },
                el: function () {
                    return this.connects
                },
                handler: function (t) {
                    t = t.type;
                    this.show(u(t, "Left") ? "next" : "previous")
                }
            }],
            methods: {
                index: function () {
                    var e = this;
                    return x(this.children, function (t) {
                        return Le(t, e.cls)
                    })
                },
                show: function (t) {
                    var n = this,
                        i = this.index(),
                        r = it(this.children[it(t, this.toggles, i)], Pt(this.$el));
                    i !== r && (this.children.forEach(function (t, e) {
                        Fe(t, n.cls, r === e), ot(n.toggles[e], "aria-expanded", r === e)
                    }), this.connects.forEach(function (t) {
                        var e = t.children;
                        return n.toggleElement(W(e).filter(function (t) {
                            return Le(t, n.cls)
                        }), !1, 0 <= i).then(function () {
                            return n.toggleElement(e[r], !0, 0 <= i)
                        })
                    }))
                }
            }
        },
        Hi = {
            mixins: [wi],
            extends: mr,
            props: {
                media: Boolean
            },
            data: {
                media: 960,
                attrItem: "uk-tab-item"
            },
            connected: function () {
                var t = Le(this.$el, "uk-tab-left") ? "uk-tab-left" : !!Le(this.$el, "uk-tab-right") && "uk-tab-right";
                t && this.$create("toggle", this.$el, {
                    cls: t,
                    mode: "media",
                    media: this.media
                })
            }
        },
        o = {
            mixins: [gr, bi],
            args: "target",
            props: {
                href: String,
                target: null,
                mode: "list",
                queued: Boolean
            },
            data: {
                href: !1,
                target: !1,
                mode: "click",
                queued: !0
            },
            connected: function () {
                w(this.mode, "media") || Tt(this.$el) || ot(this.$el, "tabindex", "0")
            },
            computed: {
                target: {
                    get: function (t, e) {
                        var n = t.href;
                        return (t = Ft((t = t.target) || n, e)).length && t || [e]
                    },
                    watch: function () {
                        this.updateAria()
                    },
                    immediate: !0
                }
            },
            events: [{
                name: mt,
                filter: function () {
                    return w(this.mode, "hover")
                },
                handler: function (t) {
                    var e = this;
                    ue(t) && !this._showState && (ee(this.$el, "focus"), te(document, mt, function () {
                        return ee(e.$el, "blur")
                    }, !0, function (t) {
                        return !Bt(t.target, e.$el)
                    }), w(this.mode, "click") && (this._preventClick = !0))
                }
            }, {
                name: wt + " " + bt + " focus blur",
                filter: function () {
                    return w(this.mode, "hover")
                },
                handler: function (t) {
                    var e, n;
                    ue(t) || (e = w([wt, "focus"], t.type), n = ot(this.$el, "aria-expanded"), !e && (t.type === bt && Nt(this.$el, ":focus") || "blur" === t.type && Nt(this.$el, ":hover")) || (this._showState && e === (n !== this._showState) ? e || (this._showState = null) : (this._showState = e ? n : null, this.toggle("toggle" + (e ? "show" : "hide")))))
                }
            }, {
                name: "keydown",
                filter: function () {
                    return w(this.mode, "click")
                },
                handler: function (t) {
                    32 === t.keyCode && (t.preventDefault(), this.$el.click())
                }
            }, {
                name: "click",
                filter: function () {
                    return w(this.mode, "click")
                },
                handler: function (t) {
                    if (this._preventClick) return this._preventClick = null;
                    var e;
                    (Dt(t.target, 'a[href="#"], a[href=""]') || (e = Dt(t.target, "a[href]")) && ("true" !== ot(this.$el, "aria-expanded") || e.hash && Nt(this.target, e.hash))) && t.preventDefault(), this.toggle()
                }
            }, {
                name: "toggled",
                self: !0,
                el: function () {
                    return this.target
                },
                handler: function (t, e) {
                    t.target === this.target[0] && this.updateAria(e)
                }
            }],
            update: {
                read: function () {
                    return !(!w(this.mode, "media") || !this.media) && {
                        match: this.matchMedia
                    }
                },
                write: function (t) {
                    var e = t.match,
                        t = this.isToggled(this.target);
                    (e ? !t : t) && this.toggle()
                },
                events: ["resize"]
            },
            methods: {
                toggle: function (t) {
                    var n = this;
                    if (ee(this.target, t || "toggle", [this])) {
                        if (!this.queued) return this.toggleElement(this.target);
                        var e, i = this.target.filter(function (t) {
                            return Le(t, n.clsLeave)
                        });
                        i.length ? this.target.forEach(function (t) {
                            var e = w(i, t);
                            n.toggleElement(t, e, e)
                        }) : (e = this.target.filter(this.isToggled), this.toggleElement(e, !1).then(function () {
                            return n.toggleElement(n.target.filter(function (t) {
                                return !w(e, t)
                            }), !0)
                        }))
                    }
                },
                updateAria: function (t) {
                    w(this.mode, "media") || ot(this.$el, "aria-expanded", M(t) ? t : this.isToggled(this.target))
                }
            }
        };

    function Mr(t) {
        for (var e = t.addedNodes, n = t.removedNodes, i = 0; i < e.length; i++) Me(e[i], _r);
        for (var r = 0; r < n.length; r++) Me(n[r], Ar)
    }

    function Nr(t) {
        var e = t.target,
            n = t.attributeName,
            t = fi(n);
        t && t in Cr && (st(e, n) ? Cr[t](e) : (t = Cr.getComponent(e, t)) && t.$destroy())
    }
    X(Object.freeze({
        __proto__: null,
        Accordion: yi,
        Alert: $i,
        Cover: Ii,
        Drop: _i,
        Dropdown: _i,
        FormCustom: Ai,
        Gif: Mi,
        Grid: Oi,
        HeightMatch: Li,
        HeightViewport: Wi,
        Icon: Zi,
        Img: or,
        Leader: vr,
        Margin: Ni,
        Modal: yr,
        Nav: {
            extends: yi,
            data: {
                targets: "> .uk-parent",
                toggle: "> a",
                content: "> ul"
            }
        },
        Navbar: l,
        Offcanvas: t,
        OverflowAuto: dt,
        Responsive: {
            props: ["width", "height"],
            connected: function () {
                Be(this.$el, "uk-responsive-width")
            },
            update: {
                read: function () {
                    return !!($t(this.$el) && this.width && this.height) && {
                        width: dn(Ct(this.$el)),
                        height: this.height
                    }
                },
                write: function (t) {
                    ln(this.$el, nt.contain({
                        height: this.height,
                        width: this.width
                    }, t).height)
                },
                events: ["resize"]
            }
        },
        Scroll: ft,
        Scrollspy: At,
        ScrollspyNav: me,
        Sticky: ni,
        Svg: Vi,
        Switcher: mr,
        Tab: Hi,
        Toggle: o,
        Video: Si,
        Close: nr,
        Spinner: ir,
        SlidenavNext: tr,
        SlidenavPrevious: tr,
        SearchIcon: er,
        Marker: Qi,
        NavbarToggleIcon: Qi,
        OverlayIcon: Qi,
        PaginationNext: Qi,
        PaginationPrevious: Qi,
        Totop: Qi
    }), function (t, e) {
        return ii.component(e, t)
    }), ii.use(function (e) {
        var t, n, i, r;
        ct && (n = function () {
            t || (t = !0, wn.write(function () {
                return t = !1
            }), e.update(null, "resize"))
        }, Zt(window, "load resize", n), Zt(document, "loadedmetadata load", n, !0), "ResizeObserver" in window && new ResizeObserver(n).observe(document.documentElement), Zt(window, "scroll", function (t) {
            i || (i = !0, wn.write(function () {
                return i = !1
            }), e.update(null, t.type))
        }, {
            passive: !0,
            capture: !0
        }), r = 0, Zt(document, "animationstart", function (t) {
            t = t.target;
            (qe(t, "animationName") || "").match(/^uk-.*(left|right)/) && (r++, qe(document.documentElement, "overflowX", "hidden"), setTimeout(function () {
                --r || qe(document.documentElement, "overflowX", "")
            }, R(qe(t, "animationDuration")) + 100))
        }, !0), Zt(document, mt, function (t) {
            var s, a;
            ue(t) && (s = ce(t), a = "tagName" in t.target ? t.target : Ct(t.target), te(document, vt + " " + xt + " scroll", function (t) {
                var e = ce(t),
                    r = e.x,
                    o = e.y;
                ("scroll" !== t.type && a && r && 100 < Math.abs(s.x - r) || o && 100 < Math.abs(s.y - o)) && setTimeout(function () {
                    var t, e, n, i;
                    ee(a, "swipe"), ee(a, "swipe" + (t = s.x, e = s.y, n = r, i = o, Math.abs(t - n) >= Math.abs(e - i) ? 0 < t - n ? "Left" : "Right" : 0 < e - i ? "Up" : "Down"))
                })
            }))
        }, {
            passive: !0
        }))
    }), _r = (Cr = ii).connect, Ar = Cr.disconnect, ct && window.MutationObserver && wn.read(function () {
        document.body && Me(document.body, _r), new MutationObserver(function (t) {
            return t.forEach(Mr)
        }).observe(document, {
            childList: !0,
            subtree: !0
        }), new MutationObserver(function (t) {
            return t.forEach(Nr)
        }).observe(document, {
            attributes: !0,
            subtree: !0
        }), Cr._initialized = !0
    });
    mr = {
        mixins: [wi],
        props: {
            date: String,
            clsWrapper: String
        },
        data: {
            date: "",
            clsWrapper: ".uk-countdown-%unit%"
        },
        computed: {
            date: function (t) {
                t = t.date;
                return Date.parse(t)
            },
            days: function (t, e) {
                return Ne(t.clsWrapper.replace("%unit%", "days"), e)
            },
            hours: function (t, e) {
                return Ne(t.clsWrapper.replace("%unit%", "hours"), e)
            },
            minutes: function (t, e) {
                return Ne(t.clsWrapper.replace("%unit%", "minutes"), e)
            },
            seconds: function (t, e) {
                return Ne(t.clsWrapper.replace("%unit%", "seconds"), e)
            },
            units: function () {
                var e = this;
                return ["days", "hours", "minutes", "seconds"].filter(function (t) {
                    return e[t]
                })
            }
        },
        connected: function () {
            this.start()
        },
        disconnected: function () {
            var e = this;
            this.stop(), this.units.forEach(function (t) {
                return we(e[t])
            })
        },
        events: [{
            name: "visibilitychange",
            el: function () {
                return document
            },
            handler: function () {
                document.hidden ? this.stop() : this.start()
            }
        }],
        update: {
            write: function () {
                var i = this,
                    r = function (t) {
                        t -= Date.now();
                        return {
                            total: t,
                            seconds: t / 1e3 % 60,
                            minutes: t / 1e3 / 60 % 60,
                            hours: t / 1e3 / 60 / 60 % 24,
                            days: t / 1e3 / 60 / 60 / 24
                        }
                    }(this.date);
                r.total <= 0 && (this.stop(), r.days = r.hours = r.minutes = r.seconds = 0), this.units.forEach(function (t) {
                    var e = (e = String(Math.floor(r[t]))).length < 2 ? "0" + e : e,
                        n = i[t];
                    n.textContent !== e && ((e = e.split("")).length !== n.children.length && be(n, e.map(function () {
                        return "<span></span>"
                    }).join("")), e.forEach(function (t, e) {
                        return n.children[e].textContent = t
                    }))
                })
            }
        },
        methods: {
            start: function () {
                this.stop(), this.date && this.units.length && (this.$update(), this.timer = setInterval(this.$update, 1e3))
            },
            stop: function () {
                this.timer && (clearInterval(this.timer), this.timer = null)
            }
        }
    };
    var zr = "uk-transition-leave",
        Dr = "uk-transition-enter";

    function Br(t, s, a, u) {
        void 0 === u && (u = 0);
        var c = Or(s, !0),
            h = {
                opacity: 1
            },
            l = {
                opacity: 0
            },
            e = function (t) {
                return function () {
                    return c === Or(s) ? t() : le.reject()
                }
            },
            n = e(function () {
                return Be(s, zr), le.all(Hr(s).map(function (e, n) {
                    return new le(function (t) {
                        return setTimeout(function () {
                            return tn.start(e, l, a / 2, "ease").then(t)
                        }, n * u)
                    })
                })).then(function () {
                    return Oe(s, zr)
                })
            }),
            e = e(function () {
                var o = ln(s);
                return Be(s, Dr), t(), qe(Pt(s), {
                    opacity: 0
                }), new le(function (r) {
                    return requestAnimationFrame(function () {
                        var t = Pt(s),
                            e = ln(s);
                        qe(s, "alignContent", "flex-start"), ln(s, o);
                        var n = Hr(s);
                        qe(t, l);
                        var i = n.map(function (e, n) {
                            return new le(function (t) {
                                return setTimeout(function () {
                                    return tn.start(e, h, a / 2, "ease").then(t)
                                }, n * u)
                            })
                        });
                        o !== e && i.push(tn.start(s, {
                            height: e
                        }, a / 2 + n.length * u, "ease")), le.all(i).then(function () {
                            Oe(s, Dr), c === Or(s) && (qe(s, {
                                height: "",
                                alignContent: ""
                            }), qe(t, {
                                opacity: ""
                            }), delete s.dataset.transition), r()
                        })
                    })
                })
            });
        return (Le(s, zr) ? Pr(s) : Le(s, Dr) ? Pr(s).then(n) : n()).then(e)
    }

    function Or(t, e) {
        return e && (t.dataset.transition = 1 + Or(t)), H(t.dataset.transition) || 0
    }

    function Pr(t) {
        return le.all(Pt(t).filter(tn.inProgress).map(function (e) {
            return new le(function (t) {
                return te(e, "transitionend transitioncanceled", t)
            })
        }))
    }

    function Hr(t) {
        return zi(Pt(t)).reduce(function (t, e) {
            return t.concat(K(e.filter(function (t) {
                return Vn(t)
            }), "offsetLeft"))
        }, [])
    }

    function Lr(t, d, f) {
        return new le(function (l) {
            return requestAnimationFrame(function () {
                var u = Pt(d),
                    c = u.map(function (t) {
                        return Fr(t, !0)
                    }),
                    h = qe(d, ["height", "padding"]);
                tn.cancel(d), u.forEach(tn.cancel), jr(d), t(), u = u.concat(Pt(d).filter(function (t) {
                    return !w(u, t)
                })), le.resolve().then(function () {
                    wn.flush();
                    var n, i, r, t, e, o = qe(d, ["height", "padding"]),
                        e = (n = d, r = c, t = (i = u).map(function (t, e) {
                            return !!(Ct(t) && e in r) && (r[e] ? $t(t) ? Wr(t) : {
                                opacity: 0
                            } : {
                                opacity: $t(t) ? 1 : 0
                            })
                        }), e = t.map(function (t, e) {
                            e = Ct(i[e]) === n && (r[e] || Fr(i[e]));
                            return !!e && (t ? "opacity" in t || (e.opacity % 1 ? t.opacity = 1 : delete e.opacity) : delete e.opacity, e)
                        }), [t, e]),
                        s = e[0],
                        a = e[1];
                    u.forEach(function (t, e) {
                        return a[e] && qe(t, a[e])
                    }), qe(d, Y({
                        display: "block"
                    }, h)), requestAnimationFrame(function () {
                        var t = u.map(function (t, e) {
                            return Ct(t) === d && tn.start(t, s[e], f, "ease")
                        }).concat(tn.start(d, o, f, "ease"));
                        le.all(t).then(function () {
                            u.forEach(function (t, e) {
                                return Ct(t) === d && qe(t, "display", 0 === s[e].opacity ? "none" : "")
                            }), jr(d)
                        }, Q).then(l)
                    })
                })
            })
        })
    }

    function Fr(t, e) {
        var n = qe(t, "zIndex");
        return !!$t(t) && Y({
            display: "",
            opacity: e ? qe(t, "opacity") : "0",
            pointerEvents: "none",
            position: "absolute",
            zIndex: "auto" === n ? Ht(t) : n
        }, Wr(t))
    }

    function jr(t) {
        qe(t.children, {
            height: "",
            left: "",
            opacity: "",
            pointerEvents: "",
            position: "",
            top: "",
            marginTop: "",
            marginLeft: "",
            transform: "",
            width: "",
            zIndex: ""
        }), qe(t, {
            height: "",
            display: "",
            padding: ""
        })
    }

    function Wr(t) {
        var e = un(t),
            n = e.height,
            i = e.width,
            r = cn(t),
            e = r.top,
            r = r.left,
            t = qe(t, ["marginTop", "marginLeft"]);
        return {
            top: e,
            left: r,
            height: n,
            width: i,
            marginLeft: t.marginLeft,
            marginTop: t.marginTop,
            transform: ""
        }
    }
    Hi = {
        props: {
            duration: Number,
            animation: Boolean
        },
        data: {
            duration: 150,
            animation: "slide"
        },
        methods: {
            animate: function (t, e) {
                var n = this;
                void 0 === e && (e = this.$el);
                var i = this.animation;
                return ("fade" === i ? Br : "delayed-fade" === i ? function () {
                    for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
                    return Br.apply(void 0, t.concat([40]))
                } : i ? Lr : function () {
                    return t(), le.resolve()
                })(t, e, this.duration).then(function () {
                    return n.$update(e, "resize")
                }, Q)
            }
        }
    }, o = {
        mixins: [Hi],
        args: "target",
        props: {
            target: Boolean,
            selActive: Boolean
        },
        data: {
            target: null,
            selActive: !1,
            attrItem: "uk-filter-control",
            cls: "uk-active",
            duration: 250
        },
        computed: {
            toggles: {
                get: function (t, e) {
                    t = t.attrItem;
                    return ze("[" + t + "],[data-" + t + "]", e)
                },
                watch: function () {
                    var e, n = this;
                    this.updateState(), !1 !== this.selActive && (e = ze(this.selActive, this.$el), this.toggles.forEach(function (t) {
                        return Fe(t, n.cls, w(e, t))
                    }))
                },
                immediate: !0
            },
            children: {
                get: function (t, e) {
                    return ze(t.target + " > *", e)
                },
                watch: function (t, e) {
                    var n;
                    e && (n = e, (t = t).length !== n.length || !t.every(function (t) {
                        return ~n.indexOf(t)
                    })) && this.updateState()
                },
                immediate: !0
            }
        },
        events: [{
            name: "click",
            delegate: function () {
                return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
            },
            handler: function (t) {
                t.preventDefault(), this.apply(t.current)
            }
        }],
        methods: {
            apply: function (t) {
                var e, n, i = this.getState(),
                    t = Rr(t, this.attrItem, this.getState());
                e = i, n = t, ["filter", "sort"].every(function (t) {
                    return q(e[t], n[t])
                }) || this.setState(t)
            },
            getState: function () {
                var n = this;
                return this.toggles.filter(function (t) {
                    return Le(t, n.cls)
                }).reduce(function (t, e) {
                    return Rr(e, n.attrItem, t)
                }, {
                    filter: {
                        "": ""
                    },
                    sort: []
                })
            },
            setState: function (n, i) {
                var r = this;
                void 0 === i && (i = !0), n = Y({
                    filter: {
                        "": ""
                    },
                    sort: []
                }, n), ee(this.$el, "beforeFilter", [this, n]), this.toggles.forEach(function (t) {
                    return Fe(t, r.cls, !! function (t, e, n) {
                        var i = n.filter;
                        void 0 === i && (i = {
                            "": ""
                        });
                        var r = n.sort,
                            o = r[0],
                            s = r[1],
                            n = Vr(t, e),
                            r = n.filter;
                        void 0 === r && (r = "");
                        t = n.group;
                        void 0 === t && (t = "");
                        e = n.sort, n = n.order;
                        void 0 === n && (n = "asc");
                        return O(e) ? t in i && r === i[t] || !r && t && !(t in i) && !i[""] : o === e && s === n
                    }(t, r.attrItem, n))
                }), le.all(ze(this.target, this.$el).map(function (t) {
                    function e() {
                        ! function (t, e, n) {
                            var i = function (t) {
                                var t = t.filter,
                                    e = "";
                                return X(t, function (t) {
                                    return e += t || ""
                                }), e
                            }(t);
                            n.forEach(function (t) {
                                return qe(t, "display", i && !Nt(t, i) ? "none" : "")
                            });
                            var r = t.sort,
                                t = r[0],
                                r = r[1];
                            t && (q(r = function (t, n, i) {
                                return Y([], t).sort(function (t, e) {
                                    return ut(t, n).localeCompare(ut(e, n), void 0, {
                                        numeric: !0
                                    }) * ("asc" === i || -1)
                                })
                            }(n, t, r), n) || xe(e, r))
                        }(n, t, Pt(t)), r.$update(r.$el)
                    }
                    return i ? r.animate(e, t) : e()
                })).then(function () {
                    return ee(r.$el, "afterFilter", [r])
                })
            },
            updateState: function () {
                var t = this;
                wn.write(function () {
                    return t.setState(t.getState(), !1)
                })
            }
        }
    };

    function Vr(t, e) {
        return An(ut(t, e), ["filter"])
    }

    function Rr(t, e, n) {
        var i = Vr(t, e),
            r = i.filter,
            t = i.group,
            e = i.sort,
            i = i.order;
        return void 0 === i && (i = "asc"), (r || O(e)) && (t ? r ? (delete n.filter[""], n.filter[t] = r) : (delete n.filter[t], (B(n.filter) || "" in n.filter) && (n.filter = {
            "": r || ""
        })) : n.filter = {
            "": r || ""
        }), O(e) || (n.sort = [e, i]), n
    }
    Si = {
        slide: {
            show: function (t) {
                return [{
                    transform: Ur(-100 * t)
                }, {
                    transform: Ur()
                }]
            },
            percent: qr,
            translate: function (t, e) {
                return [{
                    transform: Ur(-100 * e * t)
                }, {
                    transform: Ur(100 * e * (1 - t))
                }]
            }
        }
    };

    function qr(t) {
        return Math.abs(qe(t, "transform").split(",")[4] / t.offsetWidth) || 0
    }

    function Ur(t, e) {
        return void 0 === t && (t = 0), void 0 === e && (e = "%"), t += t ? e : "", ht ? "translateX(" + t + ")" : "translate3d(" + t + ", 0, 0)"
    }

    function Yr(t) {
        return "scale3d(" + t + ", " + t + ", 1)"
    }
    var Gr = Y({}, Si, {
        fade: {
            show: function () {
                return [{
                    opacity: 0
                }, {
                    opacity: 1
                }]
            },
            percent: function (t) {
                return 1 - qe(t, "opacity")
            },
            translate: function (t) {
                return [{
                    opacity: 1 - t
                }, {
                    opacity: t
                }]
            }
        },
        scale: {
            show: function () {
                return [{
                    opacity: 0,
                    transform: Yr(.8)
                }, {
                    opacity: 1,
                    transform: Yr(1)
                }]
            },
            percent: function (t) {
                return 1 - qe(t, "opacity")
            },
            translate: function (t) {
                return [{
                    opacity: 1 - t,
                    transform: Yr(1 - .2 * t)
                }, {
                    opacity: t,
                    transform: Yr(.8 + .2 * t)
                }]
            }
        }
    });

    function Xr(t, e, n) {
        ee(t, ne(e, !1, !1, n))
    }
    nr = {
        mixins: [{
            props: {
                autoplay: Boolean,
                autoplayInterval: Number,
                pauseOnHover: Boolean
            },
            data: {
                autoplay: !1,
                autoplayInterval: 7e3,
                pauseOnHover: !0
            },
            connected: function () {
                this.autoplay && this.startAutoplay()
            },
            disconnected: function () {
                this.stopAutoplay()
            },
            update: function () {
                ot(this.slides, "tabindex", "-1")
            },
            events: [{
                name: "visibilitychange",
                el: function () {
                    return document
                },
                filter: function () {
                    return this.autoplay
                },
                handler: function () {
                    document.hidden ? this.stopAutoplay() : this.startAutoplay()
                }
            }],
            methods: {
                startAutoplay: function () {
                    var t = this;
                    this.stopAutoplay(), this.interval = setInterval(function () {
                        return (!t.draggable || !Ne(":focus", t.$el)) && (!t.pauseOnHover || !Nt(t.$el, ":hover")) && !t.stack.length && t.show("next")
                    }, this.autoplayInterval)
                },
                stopAutoplay: function () {
                    this.interval && clearInterval(this.interval)
                }
            }
        }, {
            props: {
                draggable: Boolean
            },
            data: {
                draggable: !0,
                threshold: 10
            },
            created: function () {
                var i = this;
                ["start", "move", "end"].forEach(function (t) {
                    var n = i[t];
                    i[t] = function (t) {
                        var e = ce(t).x * (lt ? -1 : 1);
                        i.prevPos = e !== i.pos ? i.pos : i.prevPos, i.pos = e, n(t)
                    }
                })
            },
            events: [{
                name: mt,
                delegate: function () {
                    return this.selSlides
                },
                handler: function (t) {
                    var e;
                    !this.draggable || !ue(t) && (!(e = t.target).children.length && e.childNodes.length) || Dt(t.target, St) || 0 < t.button || this.length < 2 || this.start(t)
                }
            }, {
                name: "dragstart",
                handler: function (t) {
                    t.preventDefault()
                }
            }],
            methods: {
                start: function () {
                    this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, Zt(document, gt, this.move, {
                        passive: !1
                    }), Zt(document, vt + " " + xt + " input", this.end, !0), qe(this.list, "userSelect", "none")
                },
                move: function (t) {
                    var e = this,
                        n = this.pos - this.drag;
                    if (!(0 == n || this.prevPos === this.pos || !this.dragging && Math.abs(n) < this.threshold)) {
                        qe(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = n < 0 ? 1 : -1;
                        for (var i = this.slides, r = this.prevIndex, o = Math.abs(n), s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth; s !== r && a < o;) this.drag -= a * this.dir, r = s, o -= a, s = this.getIndex(r + this.dir, r), a = this._getDistance(r, s) || i[r].offsetWidth;
                        this.percent = o / a;
                        var u, c = i[r],
                            t = i[s],
                            n = this.index !== s,
                            h = r === s;
                        [this.index, this.prevIndex].filter(function (t) {
                            return !w([s, r], t)
                        }).forEach(function (t) {
                            ee(i[t], "itemhidden", [e]), h && (u = !0, e.prevIndex = r)
                        }), (this.index === r && this.prevIndex !== r || u) && ee(i[this.index], "itemshown", [this]), n && (this.prevIndex = r, this.index = s, h || ee(c, "beforeitemhide", [this]), ee(t, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), c, !h && t), n && (h || ee(c, "itemhide", [this]), ee(t, "itemshow", [this]))
                    }
                },
                end: function () {
                    var t;
                    Qt(document, gt, this.move, {
                        passive: !1
                    }), Qt(document, vt + " " + xt + " input", this.end, !0), this.dragging && (this.dragging = null, this.index === this.prevIndex ? (this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null) : (t = (lt ? this.dir * (lt ? 1 : -1) : this.dir) < 0 == this.prevPos > this.pos, this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(0 < this.dir && !t || this.dir < 0 && t ? "next" : "previous", !0))), qe(this.list, {
                        userSelect: "",
                        pointerEvents: ""
                    }), this.drag = this.percent = null
                }
            }
        }, {
            data: {
                selNav: !1
            },
            computed: {
                nav: function (t, e) {
                    return Ne(t.selNav, e)
                },
                selNavItem: function (t) {
                    t = t.attrItem;
                    return "[" + t + "],[data-" + t + "]"
                },
                navItems: function (t, e) {
                    return ze(this.selNavItem, e)
                }
            },
            update: {
                write: function () {
                    var n = this;
                    this.nav && this.length !== this.nav.children.length && be(this.nav, this.slides.map(function (t, e) {
                        return "<li " + n.attrItem + '="' + e + '"><a href></a></li>'
                    }).join("")), this.navItems.concat(this.nav).forEach(function (t) {
                        return t && (t.hidden = !n.maxIndex)
                    }), this.updateNav()
                },
                events: ["resize"]
            },
            events: [{
                name: "click",
                delegate: function () {
                    return this.selNavItem
                },
                handler: function (t) {
                    t.preventDefault(), this.show(ut(t.current, this.attrItem))
                }
            }, {
                name: "itemshow",
                handler: "updateNav"
            }],
            methods: {
                updateNav: function () {
                    var n = this,
                        i = this.getValidIndex();
                    this.navItems.forEach(function (t) {
                        var e = ut(t, n.attrItem);
                        Fe(t, n.clsActive, H(e) === i), Fe(t, "uk-invisible", n.finite && ("previous" === e && 0 === i || "next" === e && i >= n.maxIndex))
                    })
                }
            }
        }],
        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number,
            selSlides: String
        },
        data: function () {
            return {
                easing: "ease",
                finite: !1,
                velocity: 1,
                index: 0,
                prevIndex: -1,
                stack: [],
                percent: 0,
                clsActive: "uk-active",
                clsActivated: !1,
                Transitioner: !1,
                transitionOptions: {}
            }
        },
        connected: function () {
            this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = []
        },
        disconnected: function () {
            Oe(this.slides, this.clsActive)
        },
        computed: {
            duration: function (t, e) {
                t = t.velocity;
                return Kr(e.offsetWidth / t)
            },
            list: function (t, e) {
                return Ne(t.selList, e)
            },
            maxIndex: function () {
                return this.length - 1
            },
            selSlides: function (t) {
                return t.selList + " " + (t.selSlides || "> *")
            },
            slides: {
                get: function () {
                    return ze(this.selSlides, this.$el)
                },
                watch: function () {
                    this.$reset()
                }
            },
            length: function () {
                return this.slides.length
            }
        },
        events: {
            itemshown: function () {
                this.$update(this.list)
            }
        },
        methods: {
            show: function (t, e) {
                var n = this;
                if (void 0 === e && (e = !1), !this.dragging && this.length) {
                    var i = this.stack,
                        r = e ? 0 : i.length,
                        o = function () {
                            i.splice(r, 1), i.length && n.show(i.shift(), !0)
                        };
                    if (i[e ? "unshift" : "push"](t), !e && 1 < i.length) 2 === i.length && this._transitioner.forward(Math.min(this.duration, 200));
                    else {
                        var s, a = this.getIndex(this.index),
                            u = Le(this.slides, this.clsActive) && this.slides[a],
                            c = this.getIndex(t, this.index),
                            h = this.slides[c];
                        if (u !== h) {
                            if (this.dir = (s = a, "next" !== (t = t) && ("previous" === t || t < s) ? -1 : 1), this.prevIndex = a, this.index = c, u && !ee(u, "beforeitemhide", [this]) || !ee(h, "beforeitemshow", [this, u])) return this.index = this.prevIndex, void o();
                            e = this._show(u, h, e).then(function () {
                                return u && ee(u, "itemhidden", [n]), ee(h, "itemshown", [n]), new le(function (t) {
                                    wn.write(function () {
                                        i.shift(), i.length ? n.show(i.shift(), !0) : n._transitioner = null, t()
                                    })
                                })
                            });
                            return u && ee(u, "itemhide", [this]), ee(h, "itemshow", [this]), e
                        }
                        o()
                    }
                }
            },
            getIndex: function (t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.index), Z(it(t, this.slides, e, this.finite), 0, this.maxIndex)
            },
            getValidIndex: function (t, e) {
                return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e)
            },
            _show: function (t, e, n) {
                if (this._transitioner = this._getTransitioner(t, e, this.dir, Y({
                        easing: n ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing
                    }, this.transitionOptions)), !n && !t) return this._translate(1), le.resolve();
                t = this.stack.length;
                return this._transitioner[1 < t ? "forward" : "show"](1 < t ? Math.min(this.duration, 75 + 75 / (t - 1)) : this.duration, this.percent)
            },
            _getDistance: function (t, e) {
                return this._getTransitioner(t, t !== e && e).getDistance()
            },
            _translate: function (t, e, n) {
                void 0 === e && (e = this.prevIndex), void 0 === n && (n = this.index);
                n = this._getTransitioner(e !== n && e, n);
                return n.translate(t), n
            },
            _getTransitioner: function (t, e, n, i) {
                return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === n && (n = this.dir || 1), void 0 === i && (i = this.transitionOptions), new this.Transitioner(z(t) ? this.slides[t] : t, z(e) ? this.slides[e] : e, n * (lt ? -1 : 1), i)
            }
        }
    };

    function Kr(t) {
        return .5 * t + 300
    }
    var ir = {
            mixins: [nr],
            props: {
                animation: String
            },
            data: {
                animation: "slide",
                clsActivated: "uk-transition-active",
                Animations: Si,
                Transitioner: function (r, o, s, t) {
                    var e = t.animation,
                        a = t.easing,
                        n = e.percent,
                        i = e.translate,
                        u = (e = void 0 === (e = e.show) ? Q : e)(s),
                        c = new he;
                    return {
                        dir: s,
                        show: function (t, e, n) {
                            var i = this;
                            void 0 === e && (e = 0);
                            n = n ? "linear" : a;
                            return t -= Math.round(t * Z(e, -1, 1)), this.translate(e), Xr(o, "itemin", {
                                percent: e,
                                duration: t,
                                timing: n,
                                dir: s
                            }), Xr(r, "itemout", {
                                percent: 1 - e,
                                duration: t,
                                timing: n,
                                dir: s
                            }), le.all([tn.start(o, u[1], t, n), tn.start(r, u[0], t, n)]).then(function () {
                                i.reset(), c.resolve()
                            }, Q), c.promise
                        },
                        cancel: function () {
                            tn.cancel([o, r])
                        },
                        reset: function () {
                            for (var t in u[0]) qe([o, r], t, "")
                        },
                        forward: function (t, e) {
                            return void 0 === e && (e = this.percent()), tn.cancel([o, r]), this.show(t, e, !0)
                        },
                        translate: function (t) {
                            this.reset();
                            var e = i(t, s);
                            qe(o, e[1]), qe(r, e[0]), Xr(o, "itemtranslatein", {
                                percent: t,
                                dir: s
                            }), Xr(r, "itemtranslateout", {
                                percent: 1 - t,
                                dir: s
                            })
                        },
                        percent: function () {
                            return n(r || o, o, s)
                        },
                        getDistance: function () {
                            return r && r.offsetWidth
                        }
                    }
                }
            },
            computed: {
                animation: function (t) {
                    var e = t.animation,
                        t = t.Animations;
                    return Y(t[e] || t.slide, {
                        name: e
                    })
                },
                transitionOptions: function () {
                    return {
                        animation: this.animation
                    }
                }
            },
            events: {
                "itemshow itemhide itemshown itemhidden": function (t) {
                    t = t.target;
                    this.$update(t)
                },
                beforeitemshow: function (t) {
                    Be(t.target, this.clsActive)
                },
                itemshown: function (t) {
                    Be(t.target, this.clsActivated)
                },
                itemhidden: function (t) {
                    Oe(t.target, this.clsActive, this.clsActivated)
                }
            }
        },
        Jr = {
            mixins: [Ti, br, bi, ir],
            functional: !0,
            props: {
                delayControls: Number,
                preload: Number,
                videoAutoplay: Boolean,
                template: String
            },
            data: function () {
                return {
                    preload: 1,
                    videoAutoplay: !1,
                    delayControls: 3e3,
                    items: [],
                    cls: "uk-open",
                    clsPage: "uk-lightbox-page",
                    selList: ".uk-lightbox-items",
                    attrItem: "uk-lightbox-item",
                    selClose: ".uk-close-large",
                    selCaption: ".uk-lightbox-caption",
                    pauseOnHover: !1,
                    velocity: 2,
                    Animations: Gr,
                    template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
                }
            },
            created: function () {
                var t = Ne(this.template),
                    e = Ne(this.selList, t);
                this.items.forEach(function () {
                    return xe(e, "<li>")
                }), this.$mount(xe(this.container, t))
            },
            computed: {
                caption: function (t, e) {
                    return Ne(t.selCaption, e)
                }
            },
            events: [{
                name: gt + " " + mt + " keydown",
                handler: "showControls"
            }, {
                name: "click",
                self: !0,
                delegate: function () {
                    return this.selSlides
                },
                handler: function (t) {
                    t.defaultPrevented || this.hide()
                }
            }, {
                name: "shown",
                self: !0,
                handler: function () {
                    this.showControls()
                }
            }, {
                name: "hide",
                self: !0,
                handler: function () {
                    this.hideControls(), Oe(this.slides, this.clsActive), tn.stop(this.slides)
                }
            }, {
                name: "hidden",
                self: !0,
                handler: function () {
                    this.$destroy(!0)
                }
            }, {
                name: "keyup",
                el: function () {
                    return document
                },
                handler: function (t) {
                    if (this.isToggled(this.$el) && this.draggable) switch (t.keyCode) {
                        case 37:
                            this.show("previous");
                            break;
                        case 39:
                            this.show("next")
                    }
                }
            }, {
                name: "beforeitemshow",
                handler: function (t) {
                    this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Gr.scale, Oe(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                }
            }, {
                name: "itemshow",
                handler: function () {
                    be(this.caption, this.getItem().caption || "");
                    for (var t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t)
                }
            }, {
                name: "itemshown",
                handler: function () {
                    this.draggable = this.$props.draggable
                }
            }, {
                name: "itemload",
                handler: function (t, n) {
                    var i = this,
                        r = n.source,
                        e = n.type,
                        o = n.alt;
                    void 0 === o && (o = "");
                    var s, a, u, c = n.poster,
                        h = n.attrs;
                    void 0 === h && (h = {}), this.setItem(n, "<span uk-spinner></span>"), r && (a = {
                        frameborder: "0",
                        allow: "autoplay",
                        allowfullscreen: "",
                        style: "max-width: 100%; box-sizing: border-box;",
                        "uk-responsive": "",
                        "uk-video": "" + this.videoAutoplay
                    }, "image" === e || r.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i) ? ve(r, h.srcset, h.size).then(function (t) {
                        var e = t.width,
                            t = t.height;
                        return i.setItem(n, Zr("img", Y({
                            src: r,
                            width: e,
                            height: t,
                            alt: o
                        }, h)))
                    }, function () {
                        return i.setError(n)
                    }) : "video" === e || r.match(/\.(mp4|webm|ogv)($|\?)/i) ? (Zt(u = Zr("video", Y({
                        src: r,
                        poster: c,
                        controls: "",
                        playsinline: "",
                        "uk-video": "" + this.videoAutoplay
                    }, h)), "loadedmetadata", function () {
                        ot(u, {
                            width: u.videoWidth,
                            height: u.videoHeight
                        }), i.setItem(n, u)
                    }), Zt(u, "error", function () {
                        return i.setError(n)
                    })) : "iframe" === e || r.match(/\.(html|php)($|\?)/i) ? this.setItem(n, Zr("iframe", Y({
                        src: r,
                        frameborder: "0",
                        allowfullscreen: "",
                        class: "uk-lightbox-iframe"
                    }, h))) : (s = r.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) ? this.setItem(n, Zr("iframe", Y({
                        src: "https://www.youtube" + (s[1] || "") + ".com/embed/" + s[2] + (s[3] ? "?" + s[3] : ""),
                        width: 1920,
                        height: 1080
                    }, a, h))) : (s = r.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) && ge("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(r), {
                        responseType: "json",
                        withCredentials: !1
                    }).then(function (t) {
                        var e = t.response,
                            t = e.height,
                            e = e.width;
                        return i.setItem(n, Zr("iframe", Y({
                            src: "https://player.vimeo.com/video/" + s[1] + (s[2] ? "?" + s[2] : ""),
                            width: e,
                            height: t
                        }, a, h)))
                    }, function () {
                        return i.setError(n)
                    }))
                }
            }],
            methods: {
                loadItem: function (t) {
                    void 0 === t && (t = this.index);
                    t = this.getItem(t);
                    this.getSlide(t).childElementCount || ee(this.$el, "itemload", [t])
                },
                getItem: function (t) {
                    return void 0 === t && (t = this.index), this.items[it(t, this.slides)]
                },
                setItem: function (t, e) {
                    ee(this.$el, "itemloaded", [this, be(this.getSlide(t), e)])
                },
                getSlide: function (t) {
                    return this.slides[this.items.indexOf(t)]
                },
                setError: function (t) {
                    this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                },
                showControls: function () {
                    clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), Be(this.$el, "uk-active", "uk-transition-active")
                },
                hideControls: function () {
                    Oe(this.$el, "uk-active", "uk-transition-active")
                }
            }
        };

    function Zr(t, e) {
        t = Ae("<" + t + ">");
        return ot(t, e), t
    }
    tr = {
        install: function (t, e) {
            t.lightboxPanel || t.component("lightboxPanel", Jr);
            Y(e.props, t.component("lightboxPanel").options.props)
        },
        props: {
            toggle: String
        },
        data: {
            toggle: "a"
        },
        computed: {
            toggles: {
                get: function (t, e) {
                    return ze(t.toggle, e)
                },
                watch: function () {
                    this.hide()
                }
            }
        },
        disconnected: function () {
            this.hide()
        },
        events: [{
            name: "click",
            delegate: function () {
                return this.toggle + ":not(.uk-disabled)"
            },
            handler: function (t) {
                t.preventDefault(), this.show(t.current)
            }
        }],
        methods: {
            show: function (t) {
                var e, n = this,
                    i = J(this.toggles.map(Qr), "source");
                return _(t) && (e = Qr(t).source, t = x(i, function (t) {
                    t = t.source;
                    return e === t
                })), this.panel = this.panel || this.$create("lightboxPanel", Y({}, this.$props, {
                    items: i
                })), Zt(this.panel.$el, "hidden", function () {
                    return n.panel = !1
                }), this.panel.show(t)
            },
            hide: function () {
                return this.panel && this.panel.hide()
            }
        }
    };

    function Qr(e) {
        var n = {};
        return ["href", "caption", "type", "poster", "alt", "attrs"].forEach(function (t) {
            n["href" === t ? "source" : t] = ut(e, t)
        }), n.attrs = An(n.attrs), n
    }
    Qi = {
        mixins: [Ti],
        functional: !0,
        args: ["message", "status"],
        data: {
            message: "",
            status: "",
            timeout: 5e3,
            group: null,
            pos: "top-center",
            clsContainer: "uk-notification",
            clsClose: "uk-notification-close",
            clsMsg: "uk-notification-message"
        },
        install: function (i) {
            i.notification.closeAll = function (e, n) {
                Me(document.body, function (t) {
                    t = i.getComponent(t, "notification");
                    !t || e && e !== t.group || t.close(n)
                })
            }
        },
        computed: {
            marginProp: function (t) {
                return "margin" + (g(t.pos, "top") ? "Top" : "Bottom")
            },
            startProps: function () {
                var t = {
                    opacity: 0
                };
                return t[this.marginProp] = -this.$el.offsetHeight, t
            }
        },
        created: function () {
            var t = Ne("." + this.clsContainer + "-" + this.pos, this.container) || xe(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
            this.$mount(xe(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
        },
        connected: function () {
            var t, e = this,
                n = L(qe(this.$el, this.marginProp));
            tn.start(qe(this.$el, this.startProps), ((t = {
                opacity: 1
            })[this.marginProp] = n, t)).then(function () {
                e.timeout && (e.timer = setTimeout(e.close, e.timeout))
            })
        },
        events: ((er = {
            click: function (t) {
                Dt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close()
            }
        })[wt] = function () {
            this.timer && clearTimeout(this.timer)
        }, er[bt] = function () {
            this.timeout && (this.timer = setTimeout(this.close, this.timeout))
        }, er),
        methods: {
            close: function (t) {
                function e(t) {
                    var e = Ct(t);
                    ee(t, "close", [n]), Se(t), e && !e.hasChildNodes() && Se(e)
                }
                var n = this;
                this.timer && clearTimeout(this.timer), t ? e(this.$el) : tn.start(this.$el, this.startProps).then(e)
            }
        }
    };
    var to = ["x", "y", "bgx", "bgy", "rotate", "scale", "color", "backgroundColor", "borderColor", "opacity", "blur", "hue", "grayscale", "invert", "saturate", "sepia", "fopacity", "stroke"],
        br = {
            mixins: [gr],
            props: to.reduce(function (t, e) {
                return t[e] = "list", t
            }, {}),
            data: to.reduce(function (t, e) {
                return t[e] = void 0, t
            }, {}),
            computed: {
                props: function (f, p) {
                    var m = this;
                    return to.reduce(function (t, e) {
                        if (O(f[e])) return t;
                        var n, i, r = e.match(/color/i),
                            o = r || "opacity" === e,
                            s = f[e].slice();
                        o && qe(p, e, ""), s.length < 2 && s.unshift(("scale" === e ? 1 : o ? qe(p, e) : 0) || 0);
                        var a, u, c, h, l, o = s.reduce(function (t, e) {
                            return N(e) && e.replace(/-|\d/g, "").trim() || t
                        }, "");
                        if (r ? (r = p.style.color, s = s.map(function (t) {
                                return qe(qe(p, "color", t), "color").split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(L)
                            }), p.style.color = r) : g(e, "bg") ? (a = "bgy" === e ? "height" : "width", s = s.map(function (t) {
                                return gn(t, a, m.$el)
                            }), qe(p, "background-position-" + e[2], ""), i = qe(p, "backgroundPosition").split(" ")["x" === e[2] ? 0 : 1], n = m.covers ? (u = Math.min.apply(Math, s), c = Math.max.apply(Math, s), h = s.indexOf(u) < s.indexOf(c), l = c - u, s = s.map(function (t) {
                                return t - (h ? u : c)
                            }), (h ? -l : 0) + "px") : i) : s = s.map(L), "stroke" === e) {
                            if (!s.some(function (t) {
                                    return t
                                })) return t;
                            var d = Yi(m.$el);
                            qe(p, "strokeDasharray", d), s = (s = "%" === o ? s.map(function (t) {
                                return t * d / 100
                            }) : s).reverse(), e = "strokeDashoffset"
                        }
                        return t[e] = {
                            steps: s,
                            unit: o,
                            pos: n,
                            bgPos: i,
                            diff: l
                        }, t
                    }, {})
                },
                bgProps: function () {
                    var e = this;
                    return ["bgx", "bgy"].filter(function (t) {
                        return t in e.props
                    })
                },
                covers: function (t, e) {
                    return i = (n = e).style.backgroundSize, e = "cover" === qe(qe(n, "backgroundSize", ""), "backgroundSize"), n.style.backgroundSize = i, e;
                    var n, i
                }
            },
            disconnected: function () {
                delete this._image
            },
            update: {
                read: function (t) {
                    var e, n, a, u, c, h = this;
                    this.matchMedia && (t.image || !this.covers || !this.bgProps.length || (e = qe(this.$el, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1")) && ((n = new Image).src = e, (t.image = n).naturalWidth || (n.onload = function () {
                        return h.$update()
                    })), (n = t.image) && n.naturalWidth && (a = {
                        width: this.$el.offsetWidth,
                        height: this.$el.offsetHeight
                    }, u = {
                        width: n.naturalWidth,
                        height: n.naturalHeight
                    }, c = nt.cover(u, a), this.bgProps.forEach(function (t) {
                        var e, n = h.props[t],
                            i = n.diff,
                            r = n.bgPos,
                            o = n.steps,
                            n = "bgy" === t ? "height" : "width",
                            s = c[n] - a[n];
                        s < i ? a[n] = c[n] + i - s : i < s && ((e = a[n] / gn(r, n, h.$el)) && (h.props[t].steps = o.map(function (t) {
                            return t - (s - i) / e
                        }))), c = nt.cover(u, a)
                    }), t.dim = c))
                },
                write: function (t) {
                    t = t.dim;
                    this.matchMedia ? t && qe(this.$el, {
                        backgroundSize: t.width + "px " + t.height + "px",
                        backgroundRepeat: "no-repeat"
                    }) : qe(this.$el, {
                        backgroundSize: "",
                        backgroundRepeat: ""
                    })
                },
                events: ["resize"]
            },
            methods: {
                reset: function () {
                    var n = this;
                    X(this.getCss(0), function (t, e) {
                        return qe(n.$el, e, "")
                    })
                },
                getCss: function (l) {
                    var d = this.props;
                    return Object.keys(d).reduce(function (t, e) {
                        var n = d[e],
                            i = n.steps,
                            r = n.unit,
                            o = n.pos,
                            s = function (t, e, n) {
                                void 0 === n && (n = 2);
                                var i = eo(t, e),
                                    t = i[0],
                                    e = i[1],
                                    i = i[2];
                                return (z(t) ? t + Math.abs(t - e) * i * (t < e ? 1 : -1) : +e).toFixed(n)
                            }(i, l);
                        switch (e) {
                            case "x":
                            case "y":
                                r = r || "px", t.transform += " translate" + p(e) + "(" + L(s).toFixed("px" === r ? 0 : 2) + r + ")";
                                break;
                            case "rotate":
                                t.transform += " rotate(" + (s + (r = r || "deg")) + ")";
                                break;
                            case "scale":
                                t.transform += " scale(" + s + ")";
                                break;
                            case "bgy":
                            case "bgx":
                                t["background-position-" + e[2]] = "calc(" + o + " + " + s + "px)";
                                break;
                            case "color":
                            case "backgroundColor":
                            case "borderColor":
                                var a = eo(i, l),
                                    u = a[0],
                                    c = a[1],
                                    h = a[2];
                                t[e] = "rgba(" + u.map(function (t, e) {
                                    return t += h * (c[e] - t), 3 === e ? L(t) : parseInt(t, 10)
                                }).join(",") + ")";
                                break;
                            case "blur":
                                t.filter += " blur(" + (s + (r = r || "px")) + ")";
                                break;
                            case "hue":
                                t.filter += " hue-rotate(" + (s + (r = r || "deg")) + ")";
                                break;
                            case "fopacity":
                                t.filter += " opacity(" + (s + (r = r || "%")) + ")";
                                break;
                            case "grayscale":
                            case "invert":
                            case "saturate":
                            case "sepia":
                                t.filter += " " + e + "(" + (s + (r = r || "%")) + ")";
                                break;
                            default:
                                t[e] = s
                        }
                        return t
                    }, {
                        transform: "",
                        filter: ""
                    })
                }
            }
        };

    function eo(t, e) {
        var n = t.length - 1,
            i = Math.min(Math.floor(n * e), n - 1),
            i = t.slice(i, i + 2);
        return i.push(1 === e ? 1 : e % (1 / n) * n), i
    }
    er = {
        mixins: [br],
        props: {
            target: String,
            viewport: Number,
            easing: Number
        },
        data: {
            target: !1,
            viewport: 1,
            easing: 1
        },
        computed: {
            target: function (t, e) {
                t = t.target;
                return function t(e) {
                    return e ? "offsetTop" in e ? e : t(Ct(e)) : document.body
                }(t && Lt(t, e) || e)
            }
        },
        update: {
            read: function (t, e) {
                var n = t.percent;
                if (e.has("scroll") || (n = !1), this.matchMedia) {
                    var i = n;
                    return t = Un(this.target) / (this.viewport || 1), e = this.easing, {
                        percent: n = Z(t * (1 - (e - e * t))),
                        style: i !== n && this.getCss(n)
                    }
                }
            },
            write: function (t) {
                t = t.style;
                this.matchMedia ? t && qe(this.$el, t) : this.reset()
            },
            events: ["scroll", "resize"]
        }
    };
    gr = {
        update: {
            write: function () {
                var t;
                this.stack.length || this.dragging || (t = this.getValidIndex(this.index), ~this.prevIndex && this.index === t || this.show(t))
            },
            events: ["resize"]
        }
    };

    function no(t, e, n) {
        var i = oo(t, e);
        return n ? i - (t = t, an(e).width / 2 - an(t).width / 2) : Math.min(i, io(e))
    }

    function io(t) {
        return Math.max(0, ro(t) - an(t).width)
    }

    function ro(t) {
        return Pt(t).reduce(function (t, e) {
            return an(e).width + t
        }, 0)
    }

    function oo(t, e) {
        return t && (cn(t).left + (lt ? an(t).width - an(e).width : 0)) * (lt ? -1 : 1) || 0
    }

    function so(n, i) {
        --i;
        var r = an(n).width,
            o = i + r + 2;
        return Pt(n).filter(function (t) {
            var e = oo(t, n),
                t = e + Math.min(an(t).width, r);
            return i <= e && t <= o
        })
    }

    function ao(t, e, n) {
        ee(t, ne(e, !1, !1, n))
    }
    nr = {
        mixins: [wi, nr, gr],
        props: {
            center: Boolean,
            sets: Boolean
        },
        data: {
            center: !1,
            sets: !1,
            attrItem: "uk-slider-item",
            selList: ".uk-slider-items",
            selNav: ".uk-slider-nav",
            clsContainer: "uk-slider-container",
            Transitioner: function (u, c, h, t) {
                var i = t.center,
                    r = t.easing,
                    l = t.list,
                    o = new he,
                    e = u ? no(u, l, i) : no(c, l, i) + an(c).width * h,
                    d = c ? no(c, l, i) : e + an(u).width * h * (lt ? -1 : 1);
                return {
                    dir: h,
                    show: function (t, e, n) {
                        void 0 === e && (e = 0);
                        n = n ? "linear" : r;
                        return t -= Math.round(t * Z(e, -1, 1)), this.translate(e), e = u ? e : Z(e, 0, 1), ao(this.getItemIn(), "itemin", {
                            percent: e,
                            duration: t,
                            timing: n,
                            dir: h
                        }), u && ao(this.getItemIn(!0), "itemout", {
                            percent: 1 - e,
                            duration: t,
                            timing: n,
                            dir: h
                        }), tn.start(l, {
                            transform: Ur(-d * (lt ? -1 : 1), "px")
                        }, t, n).then(o.resolve, Q), o.promise
                    },
                    cancel: function () {
                        tn.cancel(l)
                    },
                    reset: function () {
                        qe(l, "transform", "")
                    },
                    forward: function (t, e) {
                        return void 0 === e && (e = this.percent()), tn.cancel(l), this.show(t, e, !0)
                    },
                    translate: function (r) {
                        var t = this.getDistance() * h * (lt ? -1 : 1);
                        qe(l, "transform", Ur(Z(t - t * r - d, -ro(l), an(l).width) * (lt ? -1 : 1), "px"));
                        var o = this.getActives(),
                            s = this.getItemIn(),
                            a = this.getItemIn(!0);
                        r = u ? Z(r, -1, 1) : 0, Pt(l).forEach(function (t) {
                            var e = w(o, t),
                                n = t === s,
                                i = t === a;
                            ao(t, "itemtranslate" + (n || !i && (e || h * (lt ? -1 : 1) == -1 ^ oo(t, l) > oo(u || c)) ? "in" : "out"), {
                                dir: h,
                                percent: i ? 1 - r : n ? r : e ? 1 : 0
                            })
                        })
                    },
                    percent: function () {
                        return Math.abs((qe(l, "transform").split(",")[4] * (lt ? -1 : 1) + e) / (d - e))
                    },
                    getDistance: function () {
                        return Math.abs(d - e)
                    },
                    getItemIn: function (t) {
                        void 0 === t && (t = !1);
                        var e = this.getActives(),
                            n = so(l, no(c || u, l, i));
                        return t && (t = e, e = n, n = t), n[x(n, function (t) {
                            return !w(e, t)
                        })]
                    },
                    getActives: function () {
                        return so(l, no(u || c, l, i))
                    }
                }
            }
        },
        computed: {
            avgWidth: function () {
                return ro(this.list) / this.length
            },
            finite: function (t) {
                return t.finite || Math.ceil(ro(this.list)) < an(this.list).width + (t = this.list, Math.max.apply(Math, [0].concat(Pt(t).map(function (t) {
                    return an(t).width
                })))) + this.center
            },
            maxIndex: function () {
                if (!this.finite || this.center && !this.sets) return this.length - 1;
                if (this.center) return G(this.sets);
                var e = 0,
                    n = io(this.list),
                    t = x(this.slides, function (t) {
                        return n <= e || void(e += an(t).width)
                    });
                return ~t ? t : this.length - 1
            },
            sets: function (t) {
                var r = this;
                if (t = t.sets) {
                    var o = an(this.list).width / (this.center ? 2 : 1),
                        s = 0,
                        a = o,
                        u = 0;
                    return !B(t = K(this.slides, "offsetLeft").reduce(function (t, e, n) {
                        var i = an(e).width;
                        return s < u + i && (w(t, n = !r.center && n > r.maxIndex ? r.maxIndex : n) || (e = r.slides[n + 1], r.center && e && i < a - an(e).width / 2 ? a -= i : (a = o, t.push(n), s = u + o + (r.center ? i / 2 : 0)))), u += i, t
                    }, [])) && t
                }
            },
            transitionOptions: function () {
                return {
                    center: this.center,
                    list: this.list
                }
            }
        },
        connected: function () {
            Fe(this.$el, this.clsContainer, !Ne("." + this.clsContainer, this.$el))
        },
        update: {
            write: function () {
                var n = this;
                this.navItems.forEach(function (t) {
                    var e = H(ut(t, n.attrItem));
                    !1 !== e && (t.hidden = !n.maxIndex || e > n.maxIndex || n.sets && !w(n.sets, e))
                }), !this.length || this.dragging || this.stack.length || (this.reorder(), this._translate(1));
                var e = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (t) {
                    return Fe(t, n.clsActive, w(e, t))
                }), !this.clsActivated || this.sets && !w(this.sets, L(this.index)) || this.slides.forEach(function (t) {
                    return Fe(t, n.clsActivated || "", w(e, t))
                })
            },
            events: ["resize"]
        },
        events: {
            beforeitemshow: function (t) {
                !this.dragging && this.sets && this.stack.length < 2 && !w(this.sets, this.index) && (this.index = this.getValidIndex());
                var e = Math.abs(this.index - this.prevIndex + (0 < this.dir && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                if (!this.dragging && 1 < e) {
                    for (var n = 0; n < e; n++) this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
                    t.preventDefault()
                } else {
                    t = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                    this.duration = Kr(this.avgWidth / this.velocity) * (an(this.slides[t]).width / this.avgWidth), this.reorder()
                }
            },
            itemshow: function () {
                ~this.prevIndex && Be(this._getTransitioner().getItemIn(), this.clsActive)
            }
        },
        methods: {
            reorder: function () {
                var n = this;
                if (this.finite) qe(this.slides, "order", "");
                else {
                    var i = 0 < this.dir && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                    if (this.slides.forEach(function (t, e) {
                            return qe(t, "order", 0 < n.dir && e < i ? 1 : n.dir < 0 && e >= n.index ? -1 : "")
                        }), this.center)
                        for (var t = this.slides[i], e = an(this.list).width / 2 - an(t).width / 2, r = 0; 0 < e;) {
                            var o = this.getIndex(--r + i, i),
                                s = this.slides[o];
                            qe(s, "order", i < o ? -2 : -1), e -= an(s).width
                        }
                }
            },
            getValidIndex: function (t, e) {
                if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                var n;
                do {
                    if (w(this.sets, t)) return t
                } while (n = t, (t = this.getIndex(t + this.dir, e)) !== n);
                return t
            }
        }
    };
    br = {
        mixins: [br],
        data: {
            selItem: "!li"
        },
        computed: {
            item: function (t, e) {
                return Lt(t.selItem, e)
            }
        },
        events: [{
            name: "itemin itemout",
            self: !0,
            el: function () {
                return this.item
            },
            handler: function (t) {
                var n = this,
                    i = t.type,
                    t = t.detail,
                    r = t.percent,
                    o = t.duration,
                    s = t.timing,
                    a = t.dir;
                wn.read(function () {
                    var t = n.getCss(co(i, a, r)),
                        e = n.getCss(uo(i) ? .5 : 0 < a ? 1 : 0);
                    wn.write(function () {
                        qe(n.$el, t), tn.start(n.$el, e, o, s).catch(Q)
                    })
                })
            }
        }, {
            name: "transitioncanceled transitionend",
            self: !0,
            el: function () {
                return this.item
            },
            handler: function () {
                tn.cancel(this.$el)
            }
        }, {
            name: "itemtranslatein itemtranslateout",
            self: !0,
            el: function () {
                return this.item
            },
            handler: function (t) {
                var e = this,
                    n = t.type,
                    t = t.detail,
                    i = t.percent,
                    r = t.dir;
                wn.read(function () {
                    var t = e.getCss(co(n, r, i));
                    wn.write(function () {
                        return qe(e.$el, t)
                    })
                })
            }
        }]
    };

    function uo(t) {
        return u(t, "in")
    }

    function co(t, e, n) {
        return n /= 2, uo(t) ? e < 0 ? 1 - n : n : e < 0 ? n : 1 - n
    }
    var ho, Si = Y({}, Si, {
            fade: {
                show: function () {
                    return [{
                        opacity: 0,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent: function (t) {
                    return 1 - qe(t, "opacity")
                },
                translate: function (t) {
                    return [{
                        opacity: 1 - t,
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            scale: {
                show: function () {
                    return [{
                        opacity: 0,
                        transform: Yr(1.5),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                },
                percent: function (t) {
                    return 1 - qe(t, "opacity")
                },
                translate: function (t) {
                    return [{
                        opacity: 1 - t,
                        transform: Yr(1 + .5 * t),
                        zIndex: 0
                    }, {
                        zIndex: -1
                    }]
                }
            },
            pull: {
                show: function (t) {
                    return t < 0 ? [{
                        transform: Ur(30),
                        zIndex: -1
                    }, {
                        transform: Ur(),
                        zIndex: 0
                    }] : [{
                        transform: Ur(-100),
                        zIndex: 0
                    }, {
                        transform: Ur(),
                        zIndex: -1
                    }]
                },
                percent: function (t, e, n) {
                    return n < 0 ? 1 - qr(e) : qr(t)
                },
                translate: function (t, e) {
                    return e < 0 ? [{
                        transform: Ur(30 * t),
                        zIndex: -1
                    }, {
                        transform: Ur(-100 * (1 - t)),
                        zIndex: 0
                    }] : [{
                        transform: Ur(100 * -t),
                        zIndex: 0
                    }, {
                        transform: Ur(30 * (1 - t)),
                        zIndex: -1
                    }]
                }
            },
            push: {
                show: function (t) {
                    return t < 0 ? [{
                        transform: Ur(100),
                        zIndex: 0
                    }, {
                        transform: Ur(),
                        zIndex: -1
                    }] : [{
                        transform: Ur(-30),
                        zIndex: -1
                    }, {
                        transform: Ur(),
                        zIndex: 0
                    }]
                },
                percent: function (t, e, n) {
                    return 0 < n ? 1 - qr(e) : qr(t)
                },
                translate: function (t, e) {
                    return e < 0 ? [{
                        transform: Ur(100 * t),
                        zIndex: 0
                    }, {
                        transform: Ur(-30 * (1 - t)),
                        zIndex: -1
                    }] : [{
                        transform: Ur(-30 * t),
                        zIndex: -1
                    }, {
                        transform: Ur(100 * (1 - t)),
                        zIndex: 0
                    }]
                }
            }
        }),
        Si = {
            mixins: [wi, ir, gr],
            props: {
                ratio: String,
                minHeight: Number,
                maxHeight: Number
            },
            data: {
                ratio: "16:9",
                minHeight: !1,
                maxHeight: !1,
                selList: ".uk-slideshow-items",
                attrItem: "uk-slideshow-item",
                selNav: ".uk-slideshow-nav",
                Animations: Si
            },
            update: {
                read: function () {
                    var t = this.ratio.split(":").map(Number),
                        e = t[0],
                        t = (t = t[1]) * this.list.offsetWidth / e || 0;
                    return this.minHeight && (t = Math.max(this.minHeight, t)), {
                        height: (t = this.maxHeight ? Math.min(this.maxHeight, t) : t) - pn(this.list, "height", "content-box")
                    }
                },
                write: function (t) {
                    t = t.height;
                    0 < t && qe(this.list, "minHeight", t)
                },
                events: ["resize"]
            }
        },
        Hi = {
            mixins: [wi, Hi],
            props: {
                group: String,
                threshold: Number,
                clsItem: String,
                clsPlaceholder: String,
                clsDrag: String,
                clsDragState: String,
                clsBase: String,
                clsNoDrag: String,
                clsEmpty: String,
                clsCustom: String,
                handle: String
            },
            data: {
                group: !1,
                threshold: 5,
                clsItem: "uk-sortable-item",
                clsPlaceholder: "uk-sortable-placeholder",
                clsDrag: "uk-sortable-drag",
                clsDragState: "uk-drag",
                clsBase: "uk-sortable",
                clsNoDrag: "uk-sortable-nodrag",
                clsEmpty: "uk-sortable-empty",
                clsCustom: "",
                handle: !1,
                pos: {}
            },
            created: function () {
                var n = this;
                ["init", "start", "move", "end"].forEach(function (t) {
                    var e = n[t];
                    n[t] = function (t) {
                        Y(n.pos, ce(t)), e(t)
                    }
                })
            },
            events: {
                name: mt,
                passive: !1,
                handler: "init"
            },
            computed: {
                target: function () {
                    return (this.$el.tBodies || [this.$el])[0]
                },
                items: function () {
                    return Pt(this.target)
                },
                isEmpty: {
                    get: function () {
                        return B(this.items)
                    },
                    watch: function (t) {
                        Fe(this.target, this.clsEmpty, t)
                    },
                    immediate: !0
                },
                handles: {
                    get: function (t, e) {
                        t = t.handle;
                        return t ? ze(t, e) : this.items
                    },
                    watch: function (t, e) {
                        qe(e, {
                            touchAction: "",
                            userSelect: ""
                        }), qe(t, {
                            touchAction: pt ? "none" : "",
                            userSelect: "none"
                        })
                    },
                    immediate: !0
                }
            },
            update: {
                write: function (t) {
                    var e, n, i, r, o, s, a;
                    this.drag && Ct(this.placeholder) && (e = (n = this.pos).x, a = n.y, s = (i = this.origin).offsetTop, r = i.offsetLeft, n = this.placeholder, qe(this.drag, {
                        top: a - s,
                        left: e - r
                    }), (i = this.getSortable(document.elementFromPoint(e, a))) && ((s = i.items).some(tn.inProgress) || (o = {
                        x: e,
                        y: a
                    }, r = s[x(s, function (t) {
                        return et(o, t.getBoundingClientRect())
                    })], (!s.length || r && r !== n) && (s = this.getSortable(n), !1 !== (a = function (t, e, n, i, r, o) {
                        if (Pt(t).length) {
                            var s = e.getBoundingClientRect();
                            if (!o) return function (t, e) {
                                var n = 1 === Pt(t).length;
                                n && xe(t, e);
                                var i = Pt(t),
                                    t = i.some(function (t, e) {
                                        var n = t.getBoundingClientRect();
                                        return i.slice(e + 1).some(function (t) {
                                            t = t.getBoundingClientRect();
                                            return !lo([n.left, n.right], [t.left, t.right])
                                        })
                                    });
                                n && Se(e);
                                return t
                            }(t, n) || r < s.top + s.height / 2 ? e : e.nextElementSibling;
                            o = n.getBoundingClientRect(), t = lo([s.top, s.bottom], [o.top, o.bottom]), n = t ? i : r, i = t ? "width" : "height", r = t ? "left" : "top", t = t ? "right" : "bottom", i = o[i] < s[i] ? s[i] - o[i] : 0;
                            return o[r] < s[r] ? !(i && n < s[r] + i) && e.nextElementSibling : !(i && n > s[t] - i) && e
                        }
                    }(i.target, r, n, e, a, i === s && t.moved !== r)) && (a && n === a || (i !== s ? (s.remove(n), t.moved = r) : delete t.moved, i.insert(n, a), this.touched.add(i)))))))
                },
                events: ["move"]
            },
            methods: {
                init: function (t) {
                    var e = t.target,
                        n = t.button,
                        i = t.defaultPrevented,
                        r = this.items.filter(function (t) {
                            return Bt(e, t)
                        })[0];
                    !r || i || 0 < n || It(e) || Bt(e, "." + this.clsNoDrag) || this.handle && !Bt(e, this.handle) || (t.preventDefault(), this.touched = new Set([this]), this.placeholder = r, this.origin = Y({
                        target: e,
                        index: Ht(r)
                    }, this.pos), Zt(document, gt, this.move), Zt(document, vt, this.end), this.threshold || this.start(t))
                },
                start: function (t) {
                    this.drag = function (t, e) {
                        t = xe(t, e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2"));
                        return qe(t, "margin", "0", "important"), qe(t, Y({
                            boxSizing: "border-box",
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        }, qe(e, ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom"]))), ln(t.firstElementChild, ln(e.firstElementChild)), t
                    }(this.$container, this.placeholder);
                    var e, n, i = this.placeholder.getBoundingClientRect(),
                        r = i.left,
                        i = i.top;
                    Y(this.origin, {
                        offsetLeft: this.pos.x - r,
                        offsetTop: this.pos.y - i
                    }), Be(this.drag, this.clsDrag, this.clsCustom), Be(this.placeholder, this.clsPlaceholder), Be(this.items, this.clsItem), Be(document.documentElement, this.clsDragState), ee(this.$el, "start", [this, this.placeholder]), e = this.pos, n = Date.now(), ho = setInterval(function () {
                        var t = e.x,
                            s = e.y;
                        s += window.pageYOffset;
                        var a = .3 * (Date.now() - n);
                        n = Date.now(), Yn(document.elementFromPoint(t, e.y)).reverse().some(function (t) {
                            var e = t.scrollTop,
                                n = t.scrollHeight,
                                i = un(Gn(t)),
                                r = i.top,
                                o = i.bottom,
                                i = i.height;
                            if (r < s && s < r + 35) e -= a;
                            else {
                                if (!(s < o && o - 35 < s)) return;
                                e += a
                            }
                            if (0 < e && e < n - i) return Rn(t, e), !0
                        })
                    }, 15), this.move(t)
                },
                move: function (t) {
                    this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                },
                end: function () {
                    var t, i = this;
                    Qt(document, gt, this.move), Qt(document, vt, this.end), Qt(window, "scroll", this.scroll), this.drag && (clearInterval(ho), t = this.getSortable(this.placeholder), this === t ? this.origin.index !== Ht(this.placeholder) && ee(this.$el, "moved", [this, this.placeholder]) : (ee(t.$el, "added", [t, this.placeholder]), ee(this.$el, "removed", [this, this.placeholder])), ee(this.$el, "stop", [this, this.placeholder]), Se(this.drag), this.drag = null, this.touched.forEach(function (t) {
                        var e = t.clsPlaceholder,
                            n = t.clsItem;
                        return i.touched.forEach(function (t) {
                            return Oe(t.items, e, n)
                        })
                    }), this.touched = null, Oe(document.documentElement, this.clsDragState))
                },
                insert: function (t, e) {
                    var n = this;
                    Be(this.items, this.clsItem);
                    this.animate(function () {
                        return e ? ye(e, t) : xe(n.target, t)
                    })
                },
                remove: function (t) {
                    Bt(t, this.target) && this.animate(function () {
                        return Se(t)
                    })
                },
                getSortable: function (t) {
                    do {
                        var e = this.$getComponent(t, "sortable");
                        if (e && (e === this || !1 !== this.group && e.group === this.group)) return e
                    } while (t = Ct(t))
                }
            }
        };

    function lo(t, e) {
        return t[1] > e[0] && e[1] > t[0]
    }
    Ci = {
        mixins: [Ti, bi, Ci],
        args: "title",
        props: {
            delay: Number,
            title: String
        },
        data: {
            pos: "top",
            title: "",
            delay: 0,
            animation: ["uk-animation-scale-up"],
            duration: 100,
            cls: "uk-active",
            clsPos: "uk-tooltip"
        },
        beforeConnect: function () {
            var t;
            this._hasTitle = st(this.$el, "title"), ot(this.$el, "title", ""), this.updateAria(!1), Tt(t = this.$el) || ot(t, "tabindex", "0")
        },
        disconnected: function () {
            this.hide(), ot(this.$el, "title", this._hasTitle ? this.title : null)
        },
        methods: {
            show: function () {
                var e = this;
                !this.isToggled(this.tooltip || null) && this.title && (this._unbind = te(document, "show keydown " + mt, this.hide, !1, function (t) {
                    return t.type === mt && !Bt(t.target, e.$el) || "keydown" === t.type && 27 === t.keyCode || "show" === t.type && t.detail[0] !== e && t.detail[0].$name === e.$name
                }), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay))
            },
            hide: function () {
                var t = this;
                Nt(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && this.toggleElement(this.tooltip, !1, !1).then(function () {
                    t.tooltip = Se(t.tooltip), t._unbind()
                }))
            },
            _show: function () {
                var n = this;
                this.tooltip = xe(this.container, '<div class="' + this.clsPos + '"> <div class="' + this.clsPos + '-inner">' + this.title + "</div> </div>"), Zt(this.tooltip, "toggled", function (t, e) {
                    n.updateAria(e), e && (n.positionAt(n.tooltip, n.$el), n.origin = "y" === n.getAxis() ? mn(n.dir) + "-" + n.align : n.align + "-" + mn(n.dir))
                }), this.toggleElement(this.tooltip, !0)
            },
            updateAria: function (t) {
                ot(this.$el, "aria-expanded", t)
            }
        },
        events: ((bi = {
            focus: "show",
            blur: "hide"
        })[wt + " " + bt] = function (t) {
            ue(t) || this[t.type === wt ? "show" : "hide"]()
        }, bi[mt] = function (t) {
            ue(t) && this.show()
        }, bi)
    };
    bi = {
        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },
        data: {
            allow: !1,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            msgInvalidMime: "Invalid File Type: %s",
            msgInvalidName: "Invalid File Name: %s",
            msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: Q,
            beforeAll: Q,
            beforeSend: Q,
            complete: Q,
            completeAll: Q,
            error: Q,
            fail: Q,
            load: Q,
            loadEnd: Q,
            loadStart: Q,
            progress: Q
        },
        events: {
            change: function (t) {
                Nt(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
            },
            drop: function (t) {
                po(t);
                t = t.dataTransfer;
                t && t.files && (Oe(this.$el, this.clsDragover), this.upload(t.files))
            },
            dragenter: function (t) {
                po(t)
            },
            dragover: function (t) {
                po(t), Be(this.$el, this.clsDragover)
            },
            dragleave: function (t) {
                po(t), Oe(this.$el, this.clsDragover)
            }
        },
        methods: {
            upload: function (t) {
                var i = this;
                if (t.length) {
                    ee(this.$el, "upload", [t]);
                    for (var e = 0; e < t.length; e++) {
                        if (this.maxSize && 1e3 * this.maxSize < t[e].size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                        if (this.allow && !fo(this.allow, t[e].name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
                        if (this.mime && !fo(this.mime, t[e].type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime))
                    }
                    this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                    var r = function (t, e) {
                            for (var n = [], i = 0; i < t.length; i += e) {
                                for (var r = [], o = 0; o < e; o++) r.push(t[i + o]);
                                n.push(r)
                            }
                            return n
                        }(t, this.concurrent),
                        o = function (t) {
                            var e, n = new FormData;
                            for (e in t.forEach(function (t) {
                                    return n.append(i.name, t)
                                }), i.params) n.append(e, i.params[e]);
                            ge(i.url, {
                                data: n,
                                method: i.method,
                                responseType: i.type,
                                beforeSend: function (t) {
                                    var e = t.xhr;
                                    return e.upload && Zt(e.upload, "progress", i.progress), ["loadStart", "load", "loadEnd", "abort"].forEach(function (t) {
                                        return Zt(e, t.toLowerCase(), i[t])
                                    }), i.beforeSend(t)
                                }
                            }).then(function (t) {
                                i.complete(t), r.length ? o(r.shift()) : i.completeAll(t)
                            }, function (t) {
                                return i.error(t)
                            })
                        };
                    o(r.shift())
                }
            }
        }
    };

    function fo(t, e) {
        return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
    }

    function po(t) {
        t.preventDefault(), t.stopPropagation()
    }
    return X(Object.freeze({
        __proto__: null,
        Countdown: mr,
        Filter: o,
        Lightbox: tr,
        LightboxPanel: Jr,
        Notification: Qi,
        Parallax: er,
        Slider: nr,
        SliderParallax: br,
        Slideshow: Si,
        SlideshowParallax: br,
        Sortable: Hi,
        Tooltip: Ci,
        Upload: bi
    }), function (t, e) {
        return ii.component(e, t)
    }), ii
});

/*! UIkit 3.9.2 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

! function (t, i) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define("uikiticons", i) : (t = "undefined" != typeof globalThis ? globalThis : t || self).UIkitIcons = i()
}(this, function () {
    "use strict";

    function i(t) {
        i.installed || t.icon.add({
            "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',
            album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
            "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
            "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
            "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
            "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
            bag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M7.5,7.5V4A2.48,2.48,0,0,1,10,1.5,2.54,2.54,0,0,1,12.5,4V7.5"/><polygon fill="none" stroke="#000" points="16.5 7.5 3.5 7.5 2.5 18.5 17.5 18.5 16.5 7.5"/></svg>',
            ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
            behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
            bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
            bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
            bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
            bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
            calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
            camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
            cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
            check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
            "chevron-double-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
            "chevron-double-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
            "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
            "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
            "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
            "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
            clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
            "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
            code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
            cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
            comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
            commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
            comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
            copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
            "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
            database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
            desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
            discord: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M16.074,4.361a14.243,14.243,0,0,0-3.61-1.134,10.61,10.61,0,0,0-.463.96,13.219,13.219,0,0,0-4,0,10.138,10.138,0,0,0-.468-.96A14.206,14.206,0,0,0,3.919,4.364,15.146,15.146,0,0,0,1.324,14.5a14.435,14.435,0,0,0,4.428,2.269A10.982,10.982,0,0,0,6.7,15.21a9.294,9.294,0,0,1-1.494-.727c.125-.093.248-.19.366-.289a10.212,10.212,0,0,0,8.854,0c.119.1.242.2.366.289a9.274,9.274,0,0,1-1.5.728,10.8,10.8,0,0,0,.948,1.562,14.419,14.419,0,0,0,4.431-2.27A15.128,15.128,0,0,0,16.074,4.361Zm-8.981,8.1a1.7,1.7,0,0,1-1.573-1.79A1.689,1.689,0,0,1,7.093,8.881a1.679,1.679,0,0,1,1.573,1.791A1.687,1.687,0,0,1,7.093,12.462Zm5.814,0a1.7,1.7,0,0,1-1.573-1.79,1.689,1.689,0,0,1,1.573-1.791,1.679,1.679,0,0,1,1.573,1.791A1.688,1.688,0,0,1,12.907,12.462Z"/></svg>',
            download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
            dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
            etsy: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
            expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
            facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
            "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
            "file-pdf": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
            "file-text": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
            file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
            flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
            folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
            forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
            foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
            future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
            "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
            "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
            "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
            github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
            gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
            google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
            grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
            happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
            hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
            heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
            history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
            home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
            image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
            info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
            italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
            joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
            laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
            lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',
            link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
            linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
            list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
            location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
            lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
            mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
            menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
            microphone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
            "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',
            "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
            more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
            move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
            nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
            pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
            "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',
            pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
            "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
            phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
            pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
            "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
            play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
            "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
            plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
            print: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
            pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
            push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
            question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
            "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
            receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
            reddit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
            refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
            reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
            rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
            search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
            server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
            settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
            shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
            "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
            "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
            social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
            soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
            star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
            strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
            table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
            "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
            tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
            tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
            thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
            tiktok: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"/></svg>',
            trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
            "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',
            "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',
            "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',
            "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',
            tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
            tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
            tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
            twitch: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z"/><rect x="12.98" y="4.55" width="1.29" height="3.88"/><rect x="9.43" y="4.55" width="1.29" height="3.88"/></svg>',
            twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
            uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
            unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
            upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
            user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
            users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
            "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',
            vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
            warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
            whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
            wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
            world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
            xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
            yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
            youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>'
        })
    }
    return "undefined" != typeof window && window.UIkit && window.UIkit.use(i), i
});

/**
 * Swiper 7.2.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 27, 2021
 */

! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, (function () {
    "use strict";

    function e(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function t(s = {}, a = {}) {
        Object.keys(a).forEach((i => {
            void 0 === s[i] ? s[i] = a[i] : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i])
        }))
    }
    const s = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function a() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, s), e
    }
    const i = {
        document: s,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function r() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, i), e
    }
    class n extends Array {
        constructor(e) {
            super(...e || []),
                function (e) {
                    const t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t,
                        set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this)
        }
    }

    function l(e = []) {
        const t = [];
        return e.forEach((e => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e)
        })), t
    }

    function o(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function d(e, t) {
        const s = r(),
            i = a();
        let l = [];
        if (!t && e instanceof n) return e;
        if (!e) return new n(l);
        if ("string" == typeof e) {
            const s = e.trim();
            if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                let e = "div";
                0 === s.indexOf("<li") && (e = "ul"), 0 === s.indexOf("<tr") && (e = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (e = "tr"), 0 === s.indexOf("<tbody") && (e = "table"), 0 === s.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s;
                for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e])
            } else l = function (e, t) {
                if ("string" != typeof e) return [e];
                const s = [],
                    a = t.querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) s.push(a[e]);
                return s
            }(e.trim(), t || i)
        } else if (e.nodeType || e === s || e === i) l.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof n) return e;
            l = e
        }
        return new n(function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
            return t
        }(l))
    }
    d.fn = n.prototype;
    const c = {
        addClass: function (...e) {
            const t = l(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.add(...t)
            })), this
        },
        removeClass: function (...e) {
            const t = l(e.map((e => e.split(" "))));
            return this.forEach((e => {
                e.classList.remove(...t)
            })), this
        },
        hasClass: function (...e) {
            const t = l(e.map((e => e.split(" "))));
            return o(this, (e => t.filter((t => e.classList.contains(t))).length > 0)).length > 0
        },
        toggleClass: function (...e) {
            const t = l(e.map((e => e.split(" "))));
            this.forEach((e => {
                t.forEach((t => {
                    e.classList.toggle(t)
                }))
            }))
        },
        attr: function (e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length) this[s].setAttribute(e, t);
                else
                    for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function (e) {
            for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this
        },
        on: function (...e) {
            let [t, s, a, i] = e;

            function r(e) {
                const t = e.target;
                if (!t) return;
                const i = e.target.dom7EventData || [];
                if (i.indexOf(e) < 0 && i.unshift(e), d(t).is(s)) a.apply(t, i);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(s) && a.apply(e[t], i)
                }
            }

            function n(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
            }
            "function" == typeof e[1] && ([t, a, i] = e, s = void 0), i || (i = !1);
            const l = t.split(" ");
            let o;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (s)
                    for (o = 0; o < l.length; o += 1) {
                        const e = l[o];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: a,
                            proxyListener: r
                        }), t.addEventListener(e, r, i)
                    } else
                        for (o = 0; o < l.length; o += 1) {
                            const e = l[o];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: a,
                                proxyListener: n
                            }), t.addEventListener(e, n, i)
                        }
            }
            return this
        },
        off: function (...e) {
            let [t, s, a, i] = e;
            "function" == typeof e[1] && ([t, a, i] = e, s = void 0), i || (i = !1);
            const r = t.split(" ");
            for (let e = 0; e < r.length; e += 1) {
                const t = r[e];
                for (let e = 0; e < this.length; e += 1) {
                    const r = this[e];
                    let n;
                    if (!s && r.dom7Listeners ? n = r.dom7Listeners[t] : s && r.dom7LiveListeners && (n = r.dom7LiveListeners[t]), n && n.length)
                        for (let e = n.length - 1; e >= 0; e -= 1) {
                            const s = n[e];
                            a && s.listener === a || a && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === a ? (r.removeEventListener(t, s.proxyListener, i), n.splice(e, 1)) : a || (r.removeEventListener(t, s.proxyListener, i), n.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function (...e) {
            const t = r(),
                s = e[0].split(" "),
                a = e[1];
            for (let i = 0; i < s.length; i += 1) {
                const r = s[i];
                for (let s = 0; s < this.length; s += 1) {
                    const i = this[s];
                    if (t.CustomEvent) {
                        const s = new t.CustomEvent(r, {
                            detail: a,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = e.filter(((e, t) => t > 0)), i.dispatchEvent(s), i.dom7EventData = [], delete i.dom7EventData
                    }
                }
            }
            return this
        },
        transitionEnd: function (e) {
            const t = this;
            return e && t.on("transitionend", (function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s))
            })), this
        },
        outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function () {
            const e = r();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function () {
            if (this.length > 0) {
                const e = r(),
                    t = a(),
                    s = this[0],
                    i = s.getBoundingClientRect(),
                    n = t.body,
                    l = s.clientTop || n.clientTop || 0,
                    o = s.clientLeft || n.clientLeft || 0,
                    d = s === e ? e.scrollY : s.scrollTop,
                    c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                }
            }
            return null
        },
        css: function (e, t) {
            const s = r();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (const t in e) this[a].style[t] = e[t];
                    return this
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function (e) {
            return e ? (this.forEach(((t, s) => {
                e.apply(t, [t, s])
            })), this) : this
        },
        html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function (e) {
            const t = r(),
                s = a(),
                i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (l = d(e), o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n) {
                for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
                    if (l[o] === i) return !0;
                return !1
            }
            return !1
        },
        index: function () {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d([]);
            if (e < 0) {
                const s = t + e;
                return d(s < 0 ? [] : [this[s]])
            }
            return d([this[e]])
        },
        append: function (...e) {
            let t;
            const s = a();
            for (let a = 0; a < e.length; a += 1) {
                t = e[a];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const a = s.createElement("div");
                        for (a.innerHTML = t; a.firstChild;) this[e].appendChild(a.firstChild)
                    } else if (t instanceof n)
                    for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                else this[e].appendChild(t)
            }
            return this
        },
        prepend: function (e) {
            const t = a();
            let s, i;
            for (s = 0; s < this.length; s += 1)
                if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0])
                } else if (e instanceof n)
                for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
            return this
        },
        next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
        },
        nextAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.nextElementSibling;) {
                const a = s.nextElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        prev: function (e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
            }
            return d([])
        },
        prevAll: function (e) {
            const t = [];
            let s = this[0];
            if (!s) return d([]);
            for (; s.previousElementSibling;) {
                const a = s.previousElementSibling;
                e ? d(a).is(e) && t.push(a) : t.push(a), s = a
            }
            return d(t)
        },
        parent: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d(t)
        },
        parents: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let a = this[s].parentNode;
                for (; a;) e ? d(a).is(e) && t.push(a) : t.push(a), a = a.parentNode
            }
            return d(t)
        },
        closest: function (e) {
            let t = this;
            return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].querySelectorAll(e);
                for (let e = 0; e < a.length; e += 1) t.push(a[e])
            }
            return d(t)
        },
        children: function (e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const a = this[s].children;
                for (let s = 0; s < a.length; s += 1) e && !d(a[s]).is(e) || t.push(a[s])
            }
            return d(t)
        },
        filter: function (e) {
            return d(o(this, e))
        },
        remove: function () {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function p(e, t = 0) {
        return setTimeout(e, t)
    }

    function u() {
        return Date.now()
    }

    function h(e, t = "x") {
        const s = r();
        let a, i, n;
        const l = function (e) {
            const t = r();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
        }(e);
        return s.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), n = new s.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
    }

    function m(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function f(...e) {
        const t = Object(e[0]),
            s = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < e.length; i += 1) {
            const r = e[i];
            if (null != r && (a = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? a instanceof HTMLElement : a && (1 === a.nodeType || 11 === a.nodeType)))) {
                const e = Object.keys(Object(r)).filter((e => s.indexOf(e) < 0));
                for (let s = 0, a = e.length; s < a; s += 1) {
                    const a = e[s],
                        i = Object.getOwnPropertyDescriptor(r, a);
                    void 0 !== i && i.enumerable && (m(t[a]) && m(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a]) : !m(t[a]) && m(r[a]) ? (t[a] = {}, r[a].__swiper__ ? t[a] = r[a] : f(t[a], r[a])) : t[a] = r[a])
                }
            }
        }
        var a;
        return t
    }

    function g(e, t, s) {
        e.style.setProperty(t, s)
    }

    function v({
        swiper: e,
        targetPosition: t,
        side: s
    }) {
        const a = r(),
            i = -e.translate;
        let n, l = null;
        const o = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(e.cssModeFrameID);
        const d = t > i ? "next" : "prev",
            c = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
            p = () => {
                n = (new Date).getTime(), null === l && (l = n);
                const r = Math.max(Math.min((n - l) / o, 1), 0),
                    d = .5 - Math.cos(r * Math.PI) / 2;
                let u = i + d * (t - i);
                if (c(u, t) && (u = t), e.wrapperEl.scrollTo({
                        [s]: u
                    }), c(u, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                    e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                        [s]: u
                    })
                })), void a.cancelAnimationFrame(e.cssModeFrameID);
                e.cssModeFrameID = a.requestAnimationFrame(p)
            };
        p()
    }
    let w, b, x;

    function y() {
        return w || (w = function () {
            const e = r(),
                t = a();
            return {
                smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                passiveListener: function () {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get() {
                                t = !0
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s)
                    } catch (e) {}
                    return t
                }(),
                gestures: "ongesturestart" in e
            }
        }()), w
    }

    function E(e = {}) {
        return b || (b = function ({
            userAgent: e
        } = {}) {
            const t = y(),
                s = r(),
                a = s.navigator.platform,
                i = e || s.navigator.userAgent,
                n = {
                    ios: !1,
                    android: !1
                },
                l = s.screen.width,
                o = s.screen.height,
                d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = i.match(/(iPad).*OS\s([\d_]+)/);
            const p = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === a;
            let m = "MacIntel" === a;
            return !c && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${o}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), d && !h && (n.os = "android", n.android = !0), (c || u || p) && (n.os = "ios", n.ios = !0), n
        }(e)), b
    }

    function T() {
        return x || (x = function () {
            const e = r();
            return {
                isSafari: function () {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            }
        }()), x
    }
    Object.keys(c).forEach((e => {
        Object.defineProperty(d.fn, e, {
            value: c[e],
            writable: !0
        })
    }));
    var C = {
        on(e, t, s) {
            const a = this;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e.split(" ").forEach((e => {
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t)
            })), a
        },
        once(e, t, s) {
            const a = this;
            if ("function" != typeof t) return a;

            function i(...s) {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(a, s)
            }
            return i.__emitterProxy = t, a.on(e, i, s)
        },
        onAny(e, t) {
            const s = this;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
        },
        offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
        },
        off(e, t) {
            const s = this;
            return s.eventsListeners ? (e.split(" ").forEach((e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((a, i) => {
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                }))
            })), s) : s
        },
        emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let s, a, i;
            "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], a = e.slice(1, e.length), i = t) : (s = e[0].events, a = e[0].data, i = e[0].context || t), a.unshift(i);
            return (Array.isArray(s) ? s : s.split(" ")).forEach((e => {
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                    t.apply(i, [e, ...a])
                })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                    e.apply(i, a)
                }))
            })), t
        }
    };

    function $({
        swiper: e,
        runCallbacks: t,
        direction: s,
        step: a
    }) {
        const {
            activeIndex: i,
            previousIndex: r
        } = e;
        let n = s;
        if (n || (n = i > r ? "next" : i < r ? "prev" : "reset"), e.emit(`transition${a}`), t && i !== r) {
            if ("reset" === n) return void e.emit(`slideResetTransition${a}`);
            e.emit(`slideChangeTransition${a}`), "next" === n ? e.emit(`slideNextTransition${a}`) : e.emit(`slidePrevTransition${a}`)
        }
    }

    function S(e) {
        const t = this,
            s = a(),
            i = r(),
            n = t.touchEventsData,
            {
                params: l,
                touches: o,
                enabled: c
            } = t;
        if (!c) return;
        if (t.animating && l.preventInteractionOnTransition) return;
        !t.animating && l.cssMode && l.loop && t.loopFix();
        let p = e;
        p.originalEvent && (p = p.originalEvent);
        let h = d(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e.path && e.path[0] && (h = d(e.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
            f = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (f ? function (e, t = this) {
                return function t(s) {
                    return s && s !== a() && s !== r() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null
                }(t)
            }(m, p.target) : h.closest(m)[0])) return void(t.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const g = o.currentX,
            v = o.currentY,
            w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w) return;
            e.preventDefault()
        }
        if (Object.assign(n, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }), o.startX = g, o.startY = v, n.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1), s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
            const a = e && t.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault()
        }
        t.emit("touchStart", p)
    }

    function M(e) {
        const t = a(),
            s = this,
            i = s.touchEventsData,
            {
                params: r,
                touches: n,
                rtlTranslate: l,
                enabled: o
            } = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
            h = "touchmove" === c.type ? p.pageX : c.pageX,
            m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void(n.startY = m);
        if (!s.allowTouchMove) return s.allowClick = !1, void(i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return i.isMoved = !0, void(s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX,
            g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle)
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0,
            b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
    }

    function P(e) {
        const t = this,
            s = t.touchEventsData,
            {
                params: a,
                touches: i,
                rtlTranslate: r,
                slidesGrid: n,
                enabled: l
            } = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u(),
            c = d - s.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(o), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o)), s.lastClickTime = u(), p((() => {
                t.destroyed || (t.allowClick = !0)
            })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0,
            f = t.slidesSizesGrid[0];
        for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
            const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && (m = e, f = n[e + t] - n[e]) : h >= n[e] && (m = e, f = n[n.length - 1] - n[n.length - 2])
        }
        const g = (h - n[m]) / f,
            v = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (g >= a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m)), "prev" === t.swipeDirection && (g > 1 - a.longSwipesRatio ? t.slideTo(m + v) : t.slideTo(m))
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + v) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(m + v), "prev" === t.swipeDirection && t.slideTo(m))
        }
    }

    function k() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: a,
            allowSlidePrev: i,
            snapGrid: r
        } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }

    function z(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
    }

    function O() {
        const e = this,
            {
                wrapperEl: t,
                rtlTranslate: s,
                enabled: a
            } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
    }
    let I = !1;

    function L() {}
    const A = (e, t) => {
        const s = a(),
            {
                params: i,
                touchEvents: r,
                el: n,
                wrapperEl: l,
                device: o,
                support: d
            } = e,
            c = !!i.nested,
            p = "on" === t ? "addEventListener" : "removeEventListener",
            u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t)
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0) : e[u]("observerUpdate", k, !0)
    };
    const D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var G = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function N(e, t) {
        return function (s = {}) {
            const a = Object.keys(s)[0],
                i = s[a];
            "object" == typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), f(t, s)) : f(t, s)) : f(t, s)
        }
    }
    const B = {
            eventsEmitter: C,
            update: {
                updateSize: function () {
                    const e = this;
                    let t, s;
                    const a = e.$el;
                    t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function () {
                    const e = this;

                    function t(t) {
                        return e.isHorizontal() ? t : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        } [t]
                    }

                    function s(e, s) {
                        return parseFloat(e.getPropertyValue(t(s)) || 0)
                    }
                    const a = e.params,
                        {
                            $wrapperEl: i,
                            size: r,
                            rtlTranslate: n,
                            wrongRTL: l
                        } = e,
                        o = e.virtual && a.virtual.enabled,
                        d = o ? e.virtual.slides.length : e.slides.length,
                        c = i.children(`.${e.params.slideClass}`),
                        p = o ? e.virtual.slides.length : c.length;
                    let u = [];
                    const h = [],
                        m = [];
                    let f = a.slidesOffsetBefore;
                    "function" == typeof f && (f = a.slidesOffsetBefore.call(e));
                    let v = a.slidesOffsetAfter;
                    "function" == typeof v && (v = a.slidesOffsetAfter.call(e));
                    const w = e.snapGrid.length,
                        b = e.slidesGrid.length;
                    let x = a.spaceBetween,
                        y = -f,
                        E = 0,
                        T = 0;
                    if (void 0 === r) return;
                    "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e.virtualSize = -x, n ? c.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }), a.centeredSlides && a.cssMode && (g(e.wrapperEl, "--swiper-centered-offset-before", ""), g(e.wrapperEl, "--swiper-centered-offset-after", ""));
                    const C = a.grid && a.grid.rows > 1 && e.grid;
                    let $;
                    C && e.grid.initSlides(p);
                    const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e => void 0 !== a.breakpoints[e].slidesPerView)).length > 0;
                    for (let i = 0; i < p; i += 1) {
                        $ = 0;
                        const n = c.eq(i);
                        if (C && e.grid.updateSlide(i, n, p, t), "none" !== n.css("display")) {
                            if ("auto" === a.slidesPerView) {
                                S && (c[i].style[t("width")] = "");
                                const r = getComputedStyle(n[0]),
                                    l = n[0].style.transform,
                                    o = n[0].style.webkitTransform;
                                if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                                else {
                                    const e = s(r, "width"),
                                        t = s(r, "padding-left"),
                                        a = s(r, "padding-right"),
                                        i = s(r, "margin-left"),
                                        l = s(r, "margin-right"),
                                        o = r.getPropertyValue("box-sizing");
                                    if (o && "border-box" === o) $ = e + i + l;
                                    else {
                                        const {
                                            clientWidth: s,
                                            offsetWidth: r
                                        } = n[0];
                                        $ = e + t + a + i + l + (r - s)
                                    }
                                }
                                l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($))
                            } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t("width")] = `${$}px`);
                            c[i] && (c[i].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i && (y = y - r / 2 - x), 0 === i && (y = y - r / 2 - x), Math.abs(y) < .001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e.virtualSize += $ + x, E = $, T += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, r) + v, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                            width: `${e.virtualSize+a.spaceBetween}px`
                        }), a.setWrapperSize && i.css({
                            [t("width")]: `${e.virtualSize+a.spaceBetween}px`
                        }), C && e.grid.updateWrapperSize($, u, t), !a.centeredSlides) {
                        const t = [];
                        for (let s = 0; s < u.length; s += 1) {
                            let i = u[s];
                            a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i)
                        }
                        u = t, Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r)
                    }
                    if (0 === u.length && (u = [0]), 0 !== a.spaceBetween) {
                        const s = e.isHorizontal() && n ? "marginLeft" : t("marginRight");
                        c.filter(((e, t) => !a.cssMode || t !== c.length - 1)).css({
                            [s]: `${x}px`
                        })
                    }
                    if (a.centeredSlides && a.centeredSlidesBounds) {
                        let e = 0;
                        m.forEach((t => {
                            e += t + (a.spaceBetween ? a.spaceBetween : 0)
                        })), e -= a.spaceBetween;
                        const t = e - r;
                        u = u.map((e => e < 0 ? -f : e > t ? t + v : e))
                    }
                    if (a.centerInsufficientSlides) {
                        let e = 0;
                        if (m.forEach((t => {
                                e += t + (a.spaceBetween ? a.spaceBetween : 0)
                            })), e -= a.spaceBetween, e < r) {
                            const t = (r - e) / 2;
                            u.forEach(((e, s) => {
                                u[s] = e - t
                            })), h.forEach(((e, s) => {
                                h[s] = e + t
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: c,
                            snapGrid: u,
                            slidesGrid: h,
                            slidesSizesGrid: m
                        }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                        g(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), g(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    p !== d && e.emit("slidesLengthChange"), u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== b && e.emit("slidesGridLengthChange"), a.watchSlidesProgress && e.updateSlidesOffset()
                },
                updateAutoHeight: function (e) {
                    const t = this,
                        s = [],
                        a = t.virtual && t.params.virtual.enabled;
                    let i, r = 0;
                    "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const n = e => a ? t.slides.filter((t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e))[0] : t.slides.eq(e)[0];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides) t.visibleSlides.each((e => {
                            s.push(e)
                        }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length && !a) break;
                                s.push(n(e))
                            } else s.push(n(t.activeIndex));
                    for (i = 0; i < s.length; i += 1)
                        if (void 0 !== s[i]) {
                            const e = s[i].offsetHeight;
                            r = e > r ? e : r
                        } r && t.$wrapperEl.css("height", `${r}px`)
                },
                updateSlidesOffset: function () {
                    const e = this,
                        t = e.slides;
                    for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
                },
                updateSlidesProgress: function (e = this && this.translate || 0) {
                    const t = this,
                        s = t.params,
                        {
                            slides: a,
                            rtlTranslate: i,
                            snapGrid: r
                        } = t;
                    if (0 === a.length) return;
                    void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
                    let n = -e;
                    i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    for (let e = 0; e < a.length; e += 1) {
                        const l = a[e];
                        let o = l.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                        const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                            c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
                            p = -(n - o),
                            u = p + t.slidesSizesGrid[e];
                        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c
                    }
                    t.visibleSlides = d(t.visibleSlides)
                },
                updateProgress: function (e) {
                    const t = this;
                    if (void 0 === e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        a = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: i,
                        isBeginning: r,
                        isEnd: n
                    } = t;
                    const l = r,
                        o = n;
                    0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                        progress: i,
                        isBeginning: r,
                        isEnd: n
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i)
                },
                updateSlidesClasses: function () {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            $wrapperEl: a,
                            activeIndex: i,
                            realIndex: r
                        } = e,
                        n = e.virtual && s.virtual.enabled;
                    let l;
                    t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
                    let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
                    s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
                    let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
                    s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function (e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            slidesGrid: a,
                            snapGrid: i,
                            params: r,
                            activeIndex: n,
                            realIndex: l,
                            snapIndex: o
                        } = t;
                    let d, c = e;
                    if (void 0 === c) {
                        for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                    }
                    if (i.indexOf(s) >= 0) d = i.indexOf(s);
                    else {
                        const e = Math.min(r.slidesPerGroupSkip, c);
                        d = e + Math.floor((c - e) / r.slidesPerGroup)
                    }
                    if (d >= i.length && (d = i.length - 1), c === n) return void(d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
                    const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    Object.assign(t, {
                        snapIndex: d,
                        realIndex: p,
                        previousIndex: n,
                        activeIndex: c
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                },
                updateClickedSlide: function (e) {
                    const t = this,
                        s = t.params,
                        a = d(e.target).closest(`.${s.slideClass}`)[0];
                    let i, r = !1;
                    if (a)
                        for (let e = 0; e < t.slides.length; e += 1)
                            if (t.slides[e] === a) {
                                r = !0, i = e;
                                break
                            } if (!a || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function (e = (this.isHorizontal() ? "x" : "y")) {
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: a,
                        $wrapperEl: i
                    } = this;
                    if (t.virtualTranslate) return s ? -a : a;
                    if (t.cssMode) return a;
                    let r = h(i[0], e);
                    return s && (r = -r), r || 0
                },
                setTranslate: function (e, t) {
                    const s = this,
                        {
                            rtlTranslate: a,
                            params: i,
                            $wrapperEl: r,
                            wrapperEl: n,
                            progress: l
                        } = s;
                    let o, d = 0,
                        c = 0;
                    s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
                    const p = s.maxTranslate() - s.minTranslate();
                    o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function () {
                    return -this.snapGrid[0]
                },
                maxTranslate: function () {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function (e = 0, t = this.params.speed, s = !0, a = !0, i) {
                    const r = this,
                        {
                            params: n,
                            wrapperEl: l
                        } = r;
                    if (r.animating && n.preventInteractionOnTransition) return !1;
                    const o = r.minTranslate(),
                        d = r.maxTranslate();
                    let c;
                    if (c = a && e > o ? o : a && e < d ? d : e, r.updateProgress(c), n.cssMode) {
                        const e = r.isHorizontal();
                        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                        else {
                            if (!r.support.smoothScroll) return v({
                                swiper: r,
                                targetPosition: -c,
                                side: e ? "left" : "top"
                            }), !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -c,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function (e, t) {
                    const s = this;
                    s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t)
                },
                transitionStart: function (e = !0, t) {
                    const s = this,
                        {
                            params: a
                        } = s;
                    a.cssMode || (a.autoHeight && s.updateAutoHeight(), $({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function (e = !0, t) {
                    const s = this,
                        {
                            params: a
                        } = s;
                    s.animating = !1, a.cssMode || (s.setTransition(0), $({
                        swiper: s,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function (e = 0, t = this.params.speed, s = !0, a, i) {
                    if ("number" != typeof e && "string" != typeof e) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        const t = parseInt(e, 10);
                        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = t
                    }
                    const r = this;
                    let n = e;
                    n < 0 && (n = 0);
                    const {
                        params: l,
                        snapGrid: o,
                        slidesGrid: d,
                        previousIndex: c,
                        activeIndex: p,
                        rtlTranslate: u,
                        wrapperEl: h,
                        enabled: m
                    } = r;
                    if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
                    const f = Math.min(r.params.slidesPerGroupSkip, n);
                    let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
                    g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
                    const w = -o[g];
                    if (r.updateProgress(w), l.normalizeSlideIndex)
                        for (let e = 0; e < d.length; e += 1) {
                            const t = -Math.floor(100 * w),
                                s = Math.floor(100 * d[e]),
                                a = Math.floor(100 * d[e + 1]);
                            void 0 !== d[e + 1] ? t >= s && t < a - (a - s) / 2 ? n = e : t >= s && t < a && (n = e + 1) : t >= s && (n = e)
                        }
                    if (r.initialized && n !== p) {
                        if (!r.allowSlideNext && w < r.translate && w < r.minTranslate()) return !1;
                        if (!r.allowSlidePrev && w > r.translate && w > r.maxTranslate() && (p || 0) !== n) return !1
                    }
                    let b;
                    if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -w === r.translate || !u && w === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(w), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
                    if (l.cssMode) {
                        const e = r.isHorizontal(),
                            s = u ? w : -w;
                        if (0 === t) {
                            const t = r.virtual && r.params.virtual.enabled;
                            t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame((() => {
                                r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                            }))
                        } else {
                            if (!r.support.smoothScroll) return v({
                                swiper: r,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.transitionEnd(s, b)) : (r.setTransition(t), r.setTranslate(w), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function (e = 0, t = this.params.speed, s = !0, a) {
                    const i = this;
                    let r = e;
                    return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a)
                },
                slideNext: function (e = this.params.speed, t = !0, s) {
                    const a = this,
                        {
                            animating: i,
                            enabled: r,
                            params: n
                        } = a;
                    if (!r) return a;
                    let l = n.slidesPerGroup;
                    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
                    const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                    if (n.loop) {
                        if (i && n.loopPreventsSlide) return !1;
                        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                    }
                    return a.slideTo(a.activeIndex + o, e, t, s)
                },
                slidePrev: function (e = this.params.speed, t = !0, s) {
                    const a = this,
                        {
                            params: i,
                            animating: r,
                            snapGrid: n,
                            slidesGrid: l,
                            rtlTranslate: o,
                            enabled: d
                        } = a;
                    if (!d) return a;
                    if (i.loop) {
                        if (r && i.loopPreventsSlide) return !1;
                        a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft
                    }

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const p = c(o ? a.translate : -a.translate),
                        u = n.map((e => c(e)));
                    let h = n[u.indexOf(p) - 1];
                    if (void 0 === h && i.cssMode) {
                        let e;
                        n.forEach(((t, s) => {
                            p >= t && (e = s)
                        })), void 0 !== e && (h = n[e > 0 ? e - 1 : e])
                    }
                    let m = 0;
                    return void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), a.slideTo(m, e, t, s)
                },
                slideReset: function (e = this.params.speed, t = !0, s) {
                    return this.slideTo(this.activeIndex, e, t, s)
                },
                slideToClosest: function (e = this.params.speed, t = !0, s, a = .5) {
                    const i = this;
                    let r = i.activeIndex;
                    const n = Math.min(i.params.slidesPerGroupSkip, r),
                        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
                        o = i.rtlTranslate ? i.translate : -i.translate;
                    if (o >= i.snapGrid[l]) {
                        const e = i.snapGrid[l];
                        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup)
                    } else {
                        const e = i.snapGrid[l - 1];
                        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup)
                    }
                    return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s)
                },
                slideToClickedSlide: function () {
                    const e = this,
                        {
                            params: t,
                            $wrapperEl: s
                        } = e,
                        a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i, r = e.clickedIndex;
                    if (t.loop) {
                        if (e.animating) return;
                        i = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                            e.slideTo(r)
                        }))) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p((() => {
                            e.slideTo(r)
                        }))) : e.slideTo(r)
                    } else e.slideTo(r)
                }
            },
            loop: {
                loopCreate: function () {
                    const e = this,
                        t = a(),
                        {
                            params: s,
                            $wrapperEl: i
                        } = e,
                        r = d(i.children()[0].parentNode);
                    r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
                    let n = r.children(`.${s.slideClass}`);
                    if (s.loopFillGroupWithBlank) {
                        const e = s.slidesPerGroup - n.length % s.slidesPerGroup;
                        if (e !== s.slidesPerGroup) {
                            for (let a = 0; a < e; a += 1) {
                                const e = d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);
                                r.append(e)
                            }
                            n = r.children(`.${s.slideClass}`)
                        }
                    }
                    "auto" !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10)), e.loopedSlides += s.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
                    const l = [],
                        o = [];
                    n.each(((t, s) => {
                        const a = d(t);
                        s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s)
                    }));
                    for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
                    for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
                },
                loopFix: function () {
                    const e = this;
                    e.emit("beforeLoopFix");
                    const {
                        activeIndex: t,
                        slides: s,
                        loopedSlides: a,
                        allowSlidePrev: i,
                        allowSlideNext: r,
                        snapGrid: n,
                        rtlTranslate: l
                    } = e;
                    let o;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    const d = -n[t] - e.getTranslate();
                    if (t < a) {
                        o = s.length - 3 * a + t, o += a;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    } else if (t >= s.length - a) {
                        o = -s.length + t + a, o += a;
                        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix")
                },
                loopDestroy: function () {
                    const {
                        $wrapperEl: e,
                        params: t,
                        slides: s
                    } = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function (e) {
                    const t = this;
                    if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    s.style.cursor = "move", s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", s.style.cursor = e ? "-moz-grabbin" : "-moz-grab", s.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function () {
                    const e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: {
                attachEvents: function () {
                    const e = this,
                        t = a(),
                        {
                            params: s,
                            support: i
                        } = e;
                    e.onTouchStart = S.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = P.bind(e), s.cssMode && (e.onScroll = O.bind(e)), e.onClick = z.bind(e), i.touch && !I && (t.addEventListener("touchstart", L), I = !0), A(e, "on")
                },
                detachEvents: function () {
                    A(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: a = 0,
                            params: i,
                            $el: r
                        } = e,
                        n = i.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length) return;
                    const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!l || e.currentBreakpoint === l) return;
                    const o = (l in n ? n[l] : void 0) || e.originalParams,
                        d = D(e, i),
                        c = D(e, o),
                        p = i.enabled;
                    d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
                    const u = o.direction && o.direction !== i.direction,
                        h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                    u && s && e.changeDirection(), f(e.params, o);
                    const m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                },
                getBreakpoint: function (e, t = "window", s) {
                    if (!e || "container" === t && !s) return;
                    let a = !1;
                    const i = r(),
                        n = "window" === t ? i.innerHeight : s.clientHeight,
                        l = Object.keys(e).map((e => {
                            if ("string" == typeof e && 0 === e.indexOf("@")) {
                                const t = parseFloat(e.substr(1));
                                return {
                                    value: n * t,
                                    point: e
                                }
                            }
                            return {
                                value: e,
                                point: e
                            }
                        }));
                    l.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                    for (let e = 0; e < l.length; e += 1) {
                        const {
                            point: r,
                            value: n
                        } = l[e];
                        "window" === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r)
                    }
                    return a || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    const e = this,
                        {
                            isLocked: t,
                            params: s
                        } = e,
                        {
                            slidesOffsetBefore: a
                        } = s;
                    if (a) {
                        const t = e.slides.length - 1,
                            s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                        e.isLocked = e.size > s
                    } else e.isLocked = 1 === e.snapGrid.length;
                    !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function () {
                    const e = this,
                        {
                            classNames: t,
                            params: s,
                            rtl: a,
                            $el: i,
                            device: r,
                            support: n
                        } = e,
                        l = function (e, t) {
                            const s = [];
                            return e.forEach((e => {
                                "object" == typeof e ? Object.keys(e).forEach((a => {
                                    e[a] && s.push(t + a)
                                })) : "string" == typeof e && s.push(t + e)
                            })), s
                        }(["initialized", s.direction, {
                            "pointer-events": !n.touch
                        }, {
                            "free-mode": e.params.freeMode && s.freeMode.enabled
                        }, {
                            autoheight: s.autoHeight
                        }, {
                            rtl: a
                        }, {
                            grid: s.grid && s.grid.rows > 1
                        }, {
                            "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                        }, {
                            android: r.android
                        }, {
                            ios: r.ios
                        }, {
                            "css-mode": s.cssMode
                        }, {
                            centered: s.cssMode && s.centeredSlides
                        }], s.containerModifierClass);
                    t.push(...l), i.addClass([...t].join(" ")), e.emitContainerClasses()
                },
                removeClasses: function () {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function (e, t, s, a, i, n) {
                    const l = r();
                    let o;

                    function c() {
                        n && n()
                    }
                    d(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c()
                },
                preloadImages: function () {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const a = e.imagesToLoad[s];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        X = {};
    class H {
        constructor(...e) {
            let t, s;
            if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? s = e[0] : [t, s] = e, s || (s = {}), s = f({}, s), t && !s.el && (s.el = t), s.el && d(s.el).length > 1) {
                const e = [];
                return d(s.el).each((t => {
                    const a = f({}, s, {
                        el: t
                    });
                    e.push(new H(a))
                })), e
            }
            const a = this;
            a.__swiper__ = !0, a.support = y(), a.device = E({
                userAgent: s.userAgent
            }), a.browser = T(), a.eventsListeners = {}, a.eventsAnyListeners = [], a.modules = [...a.__modules__], s.modules && Array.isArray(s.modules) && a.modules.push(...s.modules);
            const i = {};
            a.modules.forEach((e => {
                e({
                    swiper: a,
                    extendParams: N(s, i),
                    on: a.on.bind(a),
                    once: a.once.bind(a),
                    off: a.off.bind(a),
                    emit: a.emit.bind(a)
                })
            }));
            const r = f({}, G, i);
            return a.params = f({}, r, X, s), a.originalParams = f({}, a.params), a.passedParams = f({}, s), a.params && a.params.on && Object.keys(a.params.on).forEach((e => {
                a.on(e, a.params.on[e])
            })), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = d, Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === a.params.direction,
                isVertical: () => "vertical" === a.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEvents: function () {
                    const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        t = ["pointerdown", "pointermove", "pointerup"];
                    return a.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, a.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: u(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), a.emit("_swiper"), a.params.init && a.init(), a
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(),
                i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            const t = this;
            return e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s => {
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a)
            })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e = "current", t = !1) {
            const {
                params: s,
                slides: a,
                slidesGrid: i,
                slidesSizesGrid: r,
                size: n,
                activeIndex: l
            } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for (let s = l + 1; s < a.length; s += 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0))
            } else if ("current" === e)
                for (let e = l + 1; e < a.length; e += 1) {
                    (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1)
                } else
                    for (let e = l - 1; e >= 0; e -= 1) {
                        i[l] - i[e] < n && (o += 1)
                    }
            return o
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let i;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t = !0) {
            const s = this,
                a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            })), s.emit("changeDirection"), t && s.update()), s
        }
        mount(e) {
            const t = this;
            if (t.mounted) return !0;
            const s = d(e || t.params.el);
            if (!(e = s[0])) return !1;
            e.swiper = t;
            const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
            let r = (() => {
                if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                    const t = d(e.shadowRoot.querySelector(i()));
                    return t.children = e => s.children(e), t
                }
                return s.children(i())
            })();
            if (0 === r.length && t.params.createElements) {
                const e = a().createElement("div");
                r = d(e), e.className = t.params.wrapperClass, s.append(e), s.children(`.${t.params.slideClass}`).each((e => {
                    r.append(e)
                }))
            }
            return Object.assign(t, {
                $el: s,
                el: e,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
        }
        destroy(e = !0, t = !0) {
            const s = this,
                {
                    params: a,
                    $el: i,
                    $wrapperEl: r,
                    slides: n
                } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                s.off(e)
            })), !1 !== e && (s.$el[0].swiper = null, function (e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                }))
            }(s)), s.destroyed = !0), null
        }
        static extendDefaults(e) {
            f(X, e)
        }
        static get extendedDefaults() {
            return X
        }
        static get defaults() {
            return G
        }
        static installModule(e) {
            H.prototype.__modules__ || (H.prototype.__modules__ = []);
            const t = H.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? (e.forEach((e => H.installModule(e))), H) : (H.installModule(e), H)
        }
    }

    function Y(e, t, s, i) {
        const r = a();
        return e.params.createElements && Object.keys(i).forEach((a => {
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n
            }
        })), s
    }

    function W(e = "") {
        return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
    }

    function R(e) {
        const t = this,
            {
                $wrapperEl: s,
                params: a
            } = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
            for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
        else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update()
    }

    function j(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
            r = i + e.length
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1)
    }

    function _(e, t) {
        const s = this,
            {
                $wrapperEl: a,
                params: i,
                activeIndex: r
            } = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for (let t = l - 1; t >= e; t -= 1) {
            const e = s.slides.eq(t);
            e.remove(), d.unshift(e)
        }
        if ("object" == typeof t && "length" in t) {
            for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
            o = n > e ? n + t.length : n
        } else a.append(t);
        for (let e = 0; e < d.length; e += 1) a.append(d[e]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1)
    }

    function V(e) {
        const t = this,
            {
                params: s,
                $wrapperEl: a,
                activeIndex: i
            } = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for (let s = 0; s < e.length; s += 1) n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0)
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1)
    }

    function q() {
        const e = this,
            t = [];
        for (let s = 0; s < e.slides.length; s += 1) t.push(s);
        e.removeSlide(t)
    }

    function F(e) {
        const {
            effect: t,
            swiper: s,
            on: a,
            setTranslate: i,
            setTransition: r,
            overwriteParams: n,
            perspective: l
        } = e;
        a("beforeInit", (() => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e)
        })), a("setTranslate", (() => {
            s.params.effect === t && i()
        })), a("setTransition", ((e, a) => {
            s.params.effect === t && r(a)
        }))
    }

    function U(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t
    }

    function K({
        swiper: e,
        duration: t,
        transformEl: s,
        allSlides: a
    }) {
        const {
            slides: i,
            activeIndex: r,
            $wrapperEl: n
        } = e;
        if (e.params.virtualTranslate && 0 !== t) {
            let t, l = !1;
            t = a ? s ? i.find(s) : i : s ? i.eq(r).find(s) : i.eq(r), t.transitionEnd((() => {
                if (l) return;
                if (!e || e.destroyed) return;
                l = !0, e.animating = !1;
                const t = ["webkitTransitionEnd", "transitionend"];
                for (let e = 0; e < t.length; e += 1) n.trigger(t[e])
            }))
        }
    }

    function Z(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""),
            i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`), i.append(r)), r
    }
    Object.keys(B).forEach((e => {
        Object.keys(B[e]).forEach((t => {
            H.prototype[t] = B[e][t]
        }))
    })), H.use([function ({
        swiper: e,
        on: t,
        emit: s
    }) {
        const a = r();
        let i = null;
        const n = () => {
                e && !e.destroyed && e.initialized && (s("beforeResize"), s("resize"))
            },
            l = () => {
                e && !e.destroyed && e.initialized && s("orientationchange")
            };
        t("init", (() => {
            e.params.resizeObserver && void 0 !== a.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                const {
                    width: s,
                    height: a
                } = e;
                let i = s,
                    r = a;
                t.forEach((({
                    contentBoxSize: t,
                    contentRect: s,
                    target: a
                }) => {
                    a && a !== e.el || (i = s ? s.width : (t[0] || t).inlineSize, r = s ? s.height : (t[0] || t).blockSize)
                })), i === s && r === a || n()
            })), i.observe(e.el)) : (a.addEventListener("resize", n), a.addEventListener("orientationchange", l))
        })), t("destroy", (() => {
            i && i.unobserve && e.el && (i.unobserve(e.el), i = null), a.removeEventListener("resize", n), a.removeEventListener("orientationchange", l)
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        const i = [],
            n = r(),
            l = (e, t = {}) => {
                const s = new(n.MutationObserver || n.WebkitMutationObserver)((e => {
                    if (1 === e.length) return void a("observerUpdate", e[0]);
                    const t = function () {
                        a("observerUpdate", e[0])
                    };
                    n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                }));
                s.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.push(s)
            };
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), s("init", (() => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) l(t[e])
                }
                l(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), l(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        })), s("destroy", (() => {
            i.forEach((e => {
                e.disconnect()
            })), i.splice(0, i.length)
        }))
    }]);
    const J = [function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        let a;

        function i(t, s) {
            const a = e.params.virtual;
            if (a.cache && e.virtual.cache[s]) return e.virtual.cache[s];
            const i = a.renderSlide ? d(a.renderSlide.call(e, t, s)) : d(`<div class="${e.params.slideClass}" data-swiper-slide-index="${s}">${t}</div>`);
            return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", s), a.cache && (e.virtual.cache[s] = i), i
        }

        function r(t) {
            const {
                slidesPerView: s,
                slidesPerGroup: a,
                centeredSlides: r
            } = e.params, {
                addSlidesBefore: n,
                addSlidesAfter: l
            } = e.params.virtual, {
                from: o,
                to: d,
                slides: c,
                slidesGrid: p,
                offset: u
            } = e.virtual;
            e.params.cssMode || e.updateActiveIndex();
            const h = e.activeIndex || 0;
            let m, f, g;
            m = e.rtlTranslate ? "right" : e.isHorizontal() ? "left" : "top", r ? (f = Math.floor(s / 2) + a + l, g = Math.floor(s / 2) + a + n) : (f = s + (a - 1) + l, g = a + n);
            const v = Math.max((h || 0) - g, 0),
                w = Math.min((h || 0) + f, c.length - 1),
                b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);

            function x() {
                e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load()
            }
            if (Object.assign(e.virtual, {
                    from: v,
                    to: w,
                    offset: b,
                    slidesGrid: e.slidesGrid
                }), o === v && d === w && !t) return e.slidesGrid !== p && b !== u && e.slides.css(m, `${b}px`), void e.updateProgress();
            if (e.params.virtual.renderExternal) return e.params.virtual.renderExternal.call(e, {
                offset: b,
                from: v,
                to: w,
                slides: function () {
                    const e = [];
                    for (let t = v; t <= w; t += 1) e.push(c[t]);
                    return e
                }()
            }), void(e.params.virtual.renderExternalUpdate && x());
            const y = [],
                E = [];
            if (t) e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
            else
                for (let t = o; t <= d; t += 1)(t < v || t > w) && e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`).remove();
            for (let e = 0; e < c.length; e += 1) e >= v && e <= w && (void 0 === d || t ? E.push(e) : (e > d && E.push(e), e < o && y.push(e)));
            E.forEach((t => {
                e.$wrapperEl.append(i(c[t], t))
            })), y.sort(((e, t) => t - e)).forEach((t => {
                e.$wrapperEl.prepend(i(c[t], t))
            })), e.$wrapperEl.children(".swiper-slide").css(m, `${b}px`), x()
        }
        t({
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: !0,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        }), e.virtual = {
            cache: {},
            from: void 0,
            to: void 0,
            slides: [],
            offset: 0,
            slidesGrid: []
        }, s("beforeInit", (() => {
            e.params.virtual.enabled && (e.virtual.slides = e.params.virtual.slides, e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, e.params.initialSlide || r())
        })), s("setTranslate", (() => {
            e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(a), a = setTimeout((() => {
                r()
            }), 100)) : r())
        })), s("init update resize", (() => {
            e.params.virtual.enabled && e.params.cssMode && g(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`)
        })), Object.assign(e.virtual, {
            appendSlide: function (t) {
                if ("object" == typeof t && "length" in t)
                    for (let s = 0; s < t.length; s += 1) t[s] && e.virtual.slides.push(t[s]);
                else e.virtual.slides.push(t);
                r(!0)
            },
            prependSlide: function (t) {
                const s = e.activeIndex;
                let a = s + 1,
                    i = 1;
                if (Array.isArray(t)) {
                    for (let s = 0; s < t.length; s += 1) t[s] && e.virtual.slides.unshift(t[s]);
                    a = s + t.length, i = t.length
                } else e.virtual.slides.unshift(t);
                if (e.params.virtual.cache) {
                    const t = e.virtual.cache,
                        s = {};
                    Object.keys(t).forEach((e => {
                        const a = t[e],
                            r = a.attr("data-swiper-slide-index");
                        r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), s[parseInt(e, 10) + i] = a
                    })), e.virtual.cache = s
                }
                r(!0), e.slideTo(a, 0)
            },
            removeSlide: function (t) {
                if (null == t) return;
                let s = e.activeIndex;
                if (Array.isArray(t))
                    for (let a = t.length - 1; a >= 0; a -= 1) e.virtual.slides.splice(t[a], 1), e.params.virtual.cache && delete e.virtual.cache[t[a]], t[a] < s && (s -= 1), s = Math.max(s, 0);
                else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < s && (s -= 1), s = Math.max(s, 0);
                r(!0), e.slideTo(s, 0)
            },
            removeAllSlides: function () {
                e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), r(!0), e.slideTo(0, 0)
            },
            update: r
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: i
    }) {
        const n = a(),
            l = r();

        function o(t) {
            if (!e.enabled) return;
            const {
                rtlTranslate: s
            } = e;
            let a = t;
            a.originalEvent && (a = a.originalEvent);
            const r = a.keyCode || a.charCode,
                o = e.params.keyboard.pageUpDown,
                d = o && 33 === r,
                c = o && 34 === r,
                p = 37 === r,
                u = 39 === r,
                h = 38 === r,
                m = 40 === r;
            if (!e.allowSlideNext && (e.isHorizontal() && u || e.isVertical() && m || c)) return !1;
            if (!e.allowSlidePrev && (e.isHorizontal() && p || e.isVertical() && h || d)) return !1;
            if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
                if (e.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                    let t = !1;
                    if (e.$el.parents(`.${e.params.slideClass}`).length > 0 && 0 === e.$el.parents(`.${e.params.slideActiveClass}`).length) return;
                    const a = e.$el,
                        i = a[0].clientWidth,
                        r = a[0].clientHeight,
                        n = l.innerWidth,
                        o = l.innerHeight,
                        d = e.$el.offset();
                    s && (d.left -= e.$el[0].scrollLeft);
                    const c = [[d.left, d.top], [d.left + i, d.top], [d.left, d.top + r], [d.left + i, d.top + r]];
                    for (let e = 0; e < c.length; e += 1) {
                        const s = c[e];
                        if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= o) {
                            if (0 === s[0] && 0 === s[1]) continue;
                            t = !0
                        }
                    }
                    if (!t) return
                }
                e.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && e.slideNext(), ((d || p) && !s || (c || u) && s) && e.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && e.slideNext(), (d || h) && e.slidePrev()), i("keyPress", r)
            }
        }

        function c() {
            e.keyboard.enabled || (d(n).on("keydown", o), e.keyboard.enabled = !0)
        }

        function p() {
            e.keyboard.enabled && (d(n).off("keydown", o), e.keyboard.enabled = !1)
        }
        e.keyboard = {
            enabled: !1
        }, t({
            keyboard: {
                enabled: !1,
                onlyInViewport: !0,
                pageUpDown: !0
            }
        }), s("init", (() => {
            e.params.keyboard.enabled && c()
        })), s("destroy", (() => {
            e.keyboard.enabled && p()
        })), Object.assign(e.keyboard, {
            enable: c,
            disable: p
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        const i = r();
        let n;
        t({
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarget: "container",
                thresholdDelta: null,
                thresholdTime: null
            }
        }), e.mousewheel = {
            enabled: !1
        };
        let l, o = u();
        const c = [];

        function h() {
            e.enabled && (e.mouseEntered = !0)
        }

        function m() {
            e.enabled && (e.mouseEntered = !1)
        }

        function f(t) {
            return !(e.params.mousewheel.thresholdDelta && t.delta < e.params.mousewheel.thresholdDelta) && (!(e.params.mousewheel.thresholdTime && u() - o < e.params.mousewheel.thresholdTime) && (t.delta >= 6 && u() - o < 60 || (t.direction < 0 ? e.isEnd && !e.params.loop || e.animating || (e.slideNext(), a("scroll", t.raw)) : e.isBeginning && !e.params.loop || e.animating || (e.slidePrev(), a("scroll", t.raw)), o = (new i.Date).getTime(), !1)))
        }

        function g(t) {
            let s = t,
                i = !0;
            if (!e.enabled) return;
            const r = e.params.mousewheel;
            e.params.cssMode && s.preventDefault();
            let o = e.$el;
            if ("container" !== e.params.mousewheel.eventsTarget && (o = d(e.params.mousewheel.eventsTarget)), !e.mouseEntered && !o[0].contains(s.target) && !r.releaseOnEdges) return !0;
            s.originalEvent && (s = s.originalEvent);
            let h = 0;
            const m = e.rtlTranslate ? -1 : 1,
                g = function (e) {
                    let t = 0,
                        s = 0,
                        a = 0,
                        i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    }
                }(s);
            if (r.forceToAxis)
                if (e.isHorizontal()) {
                    if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY))) return !0;
                    h = -g.pixelX * m
                } else {
                    if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX))) return !0;
                    h = -g.pixelY
                }
            else h = Math.abs(g.pixelX) > Math.abs(g.pixelY) ? -g.pixelX * m : -g.pixelY;
            if (0 === h) return !0;
            r.invert && (h = -h);
            let v = e.getTranslate() + h * r.sensitivity;
            if (v >= e.minTranslate() && (v = e.minTranslate()), v <= e.maxTranslate() && (v = e.maxTranslate()), i = !!e.params.loop || !(v === e.minTranslate() || v === e.maxTranslate()), i && e.params.nested && s.stopPropagation(), e.params.freeMode && e.params.freeMode.enabled) {
                const t = {
                        time: u(),
                        delta: Math.abs(h),
                        direction: Math.sign(h)
                    },
                    i = l && t.time < l.time + 500 && t.delta <= l.delta && t.direction === l.direction;
                if (!i) {
                    l = void 0, e.params.loop && e.loopFix();
                    let o = e.getTranslate() + h * r.sensitivity;
                    const d = e.isBeginning,
                        u = e.isEnd;
                    if (o >= e.minTranslate() && (o = e.minTranslate()), o <= e.maxTranslate() && (o = e.maxTranslate()), e.setTransition(0), e.setTranslate(o), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!d && e.isBeginning || !u && e.isEnd) && e.updateSlidesClasses(), e.params.freeMode.sticky) {
                        clearTimeout(n), n = void 0, c.length >= 15 && c.shift();
                        const s = c.length ? c[c.length - 1] : void 0,
                            a = c[0];
                        if (c.push(t), s && (t.delta > s.delta || t.direction !== s.direction)) c.splice(0);
                        else if (c.length >= 15 && t.time - a.time < 500 && a.delta - t.delta >= 1 && t.delta <= 6) {
                            const s = h > 0 ? .8 : .2;
                            l = t, c.splice(0), n = p((() => {
                                e.slideToClosest(e.params.speed, !0, void 0, s)
                            }), 0)
                        }
                        n || (n = p((() => {
                            l = t, c.splice(0), e.slideToClosest(e.params.speed, !0, void 0, .5)
                        }), 500))
                    }
                    if (i || a("scroll", s), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), o === e.minTranslate() || o === e.maxTranslate()) return !0
                }
            } else {
                const s = {
                    time: u(),
                    delta: Math.abs(h),
                    direction: Math.sign(h),
                    raw: t
                };
                c.length >= 2 && c.shift();
                const a = c.length ? c[c.length - 1] : void 0;
                if (c.push(s), a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && f(s) : f(s), function (t) {
                        const s = e.params.mousewheel;
                        if (t.direction < 0) {
                            if (e.isEnd && !e.params.loop && s.releaseOnEdges) return !0
                        } else if (e.isBeginning && !e.params.loop && s.releaseOnEdges) return !0;
                        return !1
                    }(s)) return !0
            }
            return s.preventDefault ? s.preventDefault() : s.returnValue = !1, !1
        }

        function v(t) {
            let s = e.$el;
            "container" !== e.params.mousewheel.eventsTarget && (s = d(e.params.mousewheel.eventsTarget)), s[t]("mouseenter", h), s[t]("mouseleave", m), s[t]("wheel", g)
        }

        function w() {
            return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : !e.mousewheel.enabled && (v("on"), e.mousewheel.enabled = !0, !0)
        }

        function b() {
            return e.params.cssMode ? (e.wrapperEl.addEventListener(event, g), !0) : !!e.mousewheel.enabled && (v("off"), e.mousewheel.enabled = !1, !0)
        }
        s("init", (() => {
            !e.params.mousewheel.enabled && e.params.cssMode && b(), e.params.mousewheel.enabled && w()
        })), s("destroy", (() => {
            e.params.cssMode && w(), e.mousewheel.enabled && b()
        })), Object.assign(e.mousewheel, {
            enable: w,
            disable: b
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        function i(t) {
            let s;
            return t && (s = d(t), e.params.uniqueNavElements && "string" == typeof t && s.length > 1 && 1 === e.$el.find(t).length && (s = e.$el.find(t))), s
        }

        function r(t, s) {
            const a = e.params.navigation;
            t && t.length > 0 && (t[s ? "addClass" : "removeClass"](a.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](a.lockClass))
        }

        function n() {
            if (e.params.loop) return;
            const {
                $nextEl: t,
                $prevEl: s
            } = e.navigation;
            r(s, e.isBeginning), r(t, e.isEnd)
        }

        function l(t) {
            t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev()
        }

        function o(t) {
            t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext()
        }

        function c() {
            const t = e.params.navigation;
            if (e.params.navigation = Y(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !t.nextEl && !t.prevEl) return;
            const s = i(t.nextEl),
                a = i(t.prevEl);
            s && s.length > 0 && s.on("click", o), a && a.length > 0 && a.on("click", l), Object.assign(e.navigation, {
                $nextEl: s,
                nextEl: s && s[0],
                $prevEl: a,
                prevEl: a && a[0]
            }), e.enabled || (s && s.addClass(t.lockClass), a && a.addClass(t.lockClass))
        }

        function p() {
            const {
                $nextEl: t,
                $prevEl: s
            } = e.navigation;
            t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", l), s.removeClass(e.params.navigation.disabledClass))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        }), e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null
        }, s("init", (() => {
            c(), n()
        })), s("toEdge fromEdge lock unlock", (() => {
            n()
        })), s("destroy", (() => {
            p()
        })), s("enable disable", (() => {
            const {
                $nextEl: t,
                $prevEl: s
            } = e.navigation;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), s && s[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
        })), s("click", ((t, s) => {
            const {
                $nextEl: i,
                $prevEl: r
            } = e.navigation, n = s.target;
            if (e.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(i)) {
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                let t;
                i ? t = i.hasClass(e.params.navigation.hiddenClass) : r && (t = r.hasClass(e.params.navigation.hiddenClass)), a(!0 === t ? "navigationShow" : "navigationHide"), i && i.toggleClass(e.params.navigation.hiddenClass), r && r.toggleClass(e.params.navigation.hiddenClass)
            }
        })), Object.assign(e.navigation, {
            update: n,
            init: c,
            destroy: p
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        const i = "swiper-pagination";
        let r;
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${i}-bullet`,
                bulletActiveClass: `${i}-bullet-active`,
                modifierClass: `${i}-`,
                currentClass: `${i}-current`,
                totalClass: `${i}-total`,
                hiddenClass: `${i}-hidden`,
                progressbarFillClass: `${i}-progressbar-fill`,
                progressbarOppositeClass: `${i}-progressbar-opposite`,
                clickableClass: `${i}-clickable`,
                lockClass: `${i}-lock`,
                horizontalClass: `${i}-horizontal`,
                verticalClass: `${i}-vertical`
            }
        }), e.pagination = {
            el: null,
            $el: null,
            bullets: []
        };
        let n = 0;

        function l() {
            return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
        }

        function o(t, s) {
            const {
                bulletActiveClass: a
            } = e.params.pagination;
            t[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)
        }

        function c() {
            const t = e.rtl,
                s = e.params.pagination;
            if (l()) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                c = e.pagination.$el;
            let p;
            const u = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (p = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), p > i - 1 - 2 * e.loopedSlides && (p -= i - 2 * e.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== e.params.paginationType && (p = u + p)) : p = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const a = e.pagination.bullets;
                let i, l, u;
                if (s.dynamicBullets && (r = a.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(e.isHorizontal() ? "width" : "height", r * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (n += p - e.previousIndex, n > s.dynamicMainBullets - 1 ? n = s.dynamicMainBullets - 1 : n < 0 && (n = 0)), i = p - n, l = i + (Math.min(a.length, s.dynamicMainBullets) - 1), u = (l + i) / 2), a.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e => `${s.bulletActiveClass}${e}`)).join(" ")), c.length > 1) a.each((e => {
                    const t = d(e),
                        a = t.index();
                    a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= l && t.addClass(`${s.bulletActiveClass}-main`), a === i && o(t, "prev"), a === l && o(t, "next"))
                }));
                else {
                    const t = a.eq(p),
                        r = t.index();
                    if (t.addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const t = a.eq(i),
                            n = a.eq(l);
                        for (let e = i; e <= l; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        if (e.params.loop)
                            if (r >= a.length - s.dynamicMainBullets) {
                                for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                                a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`)
                            } else o(t, "prev"), o(n, "next");
                        else o(t, "prev"), o(n, "next")
                    }
                }
                if (s.dynamicBullets) {
                    const i = Math.min(a.length, s.dynamicMainBullets + 4),
                        n = (r * i - r) / 2 - u * r,
                        l = t ? "right" : "left";
                    a.css(e.isHorizontal() ? l : "top", `${n}px`)
                }
            }
            if ("fraction" === s.type && (c.find(W(s.currentClass)).text(s.formatFractionCurrent(p + 1)), c.find(W(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                let t;
                t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const a = (p + 1) / u;
                let i = 1,
                    r = 1;
                "horizontal" === t ? i = a : r = a, c.find(W(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`).transition(e.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (c.html(s.renderCustom(e, p + 1, u)), a("paginationRender", c[0])) : a("paginationUpdate", c[0]), e.params.watchOverflow && e.enabled && c[e.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }

        function p() {
            const t = e.params.pagination;
            if (l()) return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                i = e.pagination.$el;
            let r = "";
            if ("bullets" === t.type) {
                let a = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && a > s && (a = s);
                for (let s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                i.html(r), e.pagination.bullets = i.find(W(t.bulletClass))
            }
            "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(r)), "custom" !== t.type && a("paginationRender", e.pagination.$el[0])
        }

        function u() {
            e.params.pagination = Y(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            const t = e.params.pagination;
            if (!t.el) return;
            let s = d(t.el);
            0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && (s = e.$el.find(t.el), s.length > 1 && (s = s.filter((t => d(t).parents(".swiper")[0] === e.el)))), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), s.addClass(t.modifierClass + e.params.direction), "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), n = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", W(t.bulletClass), (function (t) {
                t.preventDefault();
                let s = d(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides), e.slideTo(s)
            })), Object.assign(e.pagination, {
                $el: s,
                el: s[0]
            }), e.enabled || s.addClass(t.lockClass))
        }

        function h() {
            const t = e.params.pagination;
            if (l()) return;
            const s = e.pagination.$el;
            s.removeClass(t.hiddenClass), s.removeClass(t.modifierClass + t.type), s.removeClass(t.modifierClass + e.params.direction), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && s.off("click", W(t.bulletClass))
        }
        s("init", (() => {
            u(), p(), c()
        })), s("activeIndexChange", (() => {
            (e.params.loop || void 0 === e.snapIndex) && c()
        })), s("snapIndexChange", (() => {
            e.params.loop || c()
        })), s("slidesLengthChange", (() => {
            e.params.loop && (p(), c())
        })), s("snapGridLengthChange", (() => {
            e.params.loop || (p(), c())
        })), s("destroy", (() => {
            h()
        })), s("enable disable", (() => {
            const {
                $el: t
            } = e.pagination;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
        })), s("lock unlock", (() => {
            c()
        })), s("click", ((t, s) => {
            const i = s.target,
                {
                    $el: r
                } = e.pagination;
            if (e.params.pagination.el && e.params.pagination.hideOnClick && r.length > 0 && !d(i).hasClass(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && i === e.navigation.nextEl || e.navigation.prevEl && i === e.navigation.prevEl)) return;
                const t = r.hasClass(e.params.pagination.hiddenClass);
                a(!0 === t ? "paginationShow" : "paginationHide"), r.toggleClass(e.params.pagination.hiddenClass)
            }
        })), Object.assign(e.pagination, {
            render: p,
            update: c,
            init: u,
            destroy: h
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: i
    }) {
        const r = a();
        let n, l, o, c, u = !1,
            h = null,
            m = null;

        function f() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t,
                rtlTranslate: s,
                progress: a
            } = e, {
                $dragEl: i,
                $el: r
            } = t, n = e.params.scrollbar;
            let d = l,
                c = (o - l) * a;
            s ? (c = -c, c > 0 ? (d = l - c, c = 0) : -c + l > o && (d = o + c)) : c < 0 ? (d = l + c, c = 0) : c + l > o && (d = o - c), e.isHorizontal() ? (i.transform(`translate3d(${c}px, 0, 0)`), i[0].style.width = `${d}px`) : (i.transform(`translate3d(0px, ${c}px, 0)`), i[0].style.height = `${d}px`), n.hide && (clearTimeout(h), r[0].style.opacity = 1, h = setTimeout((() => {
                r[0].style.opacity = 0, r.transition(400)
            }), 1e3))
        }

        function g() {
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t
            } = e, {
                $dragEl: s,
                $el: a
            } = t;
            s[0].style.width = "", s[0].style.height = "", o = e.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, c = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), l = "auto" === e.params.scrollbar.dragSize ? o * c : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = `${l}px` : s[0].style.height = `${l}px`, a[0].style.display = c >= 1 ? "none" : "", e.params.scrollbar.hide && (a[0].style.opacity = 0), e.params.watchOverflow && e.enabled && t.$el[e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        }

        function v(t) {
            return e.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientX : t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].clientY : t.clientY
        }

        function w(t) {
            const {
                scrollbar: s,
                rtlTranslate: a
            } = e, {
                $el: i
            } = s;
            let r;
            r = (v(t) - i.offset()[e.isHorizontal() ? "left" : "top"] - (null !== n ? n : l / 2)) / (o - l), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
            const d = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
            e.updateProgress(d), e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses()
        }

        function b(t) {
            const s = e.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: r
                } = e,
                {
                    $el: l,
                    $dragEl: o
                } = a;
            u = !0, n = t.target === o[0] || t.target === o ? v(t) - t.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, t.preventDefault(), t.stopPropagation(), r.transition(100), o.transition(100), w(t), clearTimeout(m), l.transition(0), s.hide && l.css("opacity", 1), e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"), i("scrollbarDragStart", t)
        }

        function x(t) {
            const {
                scrollbar: s,
                $wrapperEl: a
            } = e, {
                $el: r,
                $dragEl: n
            } = s;
            u && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, w(t), a.transition(0), r.transition(0), n.transition(0), i("scrollbarDragMove", t))
        }

        function y(t) {
            const s = e.params.scrollbar,
                {
                    scrollbar: a,
                    $wrapperEl: r
                } = e,
                {
                    $el: n
                } = a;
            u && (u = !1, e.params.cssMode && (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), s.hide && (clearTimeout(m), m = p((() => {
                n.css("opacity", 0), n.transition(400)
            }), 1e3)), i("scrollbarDragEnd", t), s.snapOnRelease && e.slideToClosest())
        }

        function E(t) {
            const {
                scrollbar: s,
                touchEventsTouch: a,
                touchEventsDesktop: i,
                params: n,
                support: l
            } = e, o = s.$el[0], d = !(!l.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1
            }, c = !(!l.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            if (!o) return;
            const p = "on" === t ? "addEventListener" : "removeEventListener";
            l.touch ? (o[p](a.start, b, d), o[p](a.move, x, d), o[p](a.end, y, c)) : (o[p](i.start, b, d), r[p](i.move, x, d), r[p](i.end, y, c))
        }

        function T() {
            const {
                scrollbar: t,
                $el: s
            } = e;
            e.params.scrollbar = Y(e, e.originalParams.scrollbar, e.params.scrollbar, {
                el: "swiper-scrollbar"
            });
            const a = e.params.scrollbar;
            if (!a.el) return;
            let i = d(a.el);
            e.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
            let r = i.find(`.${e.params.scrollbar.dragClass}`);
            0 === r.length && (r = d(`<div class="${e.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(t, {
                $el: i,
                el: i[0],
                $dragEl: r,
                dragEl: r[0]
            }), a.draggable && e.params.scrollbar.el && E("on"), i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        }

        function C() {
            e.params.scrollbar.el && E("off")
        }
        t({
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        }), e.scrollbar = {
            el: null,
            dragEl: null,
            $el: null,
            $dragEl: null
        }, s("init", (() => {
            T(), g(), f()
        })), s("update resize observerUpdate lock unlock", (() => {
            g()
        })), s("setTranslate", (() => {
            f()
        })), s("setTransition", ((t, s) => {
            ! function (t) {
                e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
            }(s)
        })), s("enable disable", (() => {
            const {
                $el: t
            } = e.scrollbar;
            t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
        })), s("destroy", (() => {
            C()
        })), Object.assign(e.scrollbar, {
            updateSize: g,
            setTranslate: f,
            init: T,
            destroy: C
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            parallax: {
                enabled: !1
            }
        });
        const a = (t, s) => {
                const {
                    rtl: a
                } = e, i = d(t), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
                let l = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y");
                const c = i.attr("data-swiper-parallax-scale"),
                    p = i.attr("data-swiper-parallax-opacity");
                if (l || o ? (l = l || "0", o = o || "0") : e.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                    const e = p - (p - 1) * (1 - Math.abs(s));
                    i[0].style.opacity = e
                }
                if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
                else {
                    const e = c - (c - 1) * (1 - Math.abs(s));
                    i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)
                }
            },
            i = () => {
                const {
                    $el: t,
                    slides: s,
                    progress: i,
                    snapGrid: r
                } = e;
                t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    a(e, i)
                })), s.each(((t, s) => {
                    let n = t.progress;
                    e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(s / 2) - i * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                        a(e, n)
                    }))
                }))
            };
        s("beforeInit", (() => {
            e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
        })), s("init", (() => {
            e.params.parallax.enabled && i()
        })), s("setTranslate", (() => {
            e.params.parallax.enabled && i()
        })), s("setTransition", ((t, s) => {
            e.params.parallax.enabled && ((t = e.params.speed) => {
                const {
                    $el: s
                } = e;
                s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e => {
                    const s = d(e);
                    let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (a = 0), s.transition(a)
                }))
            })(s)
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        const i = r();
        t({
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        }), e.zoom = {
            enabled: !1
        };
        let n, l, o, c = 1,
            p = !1;
        const u = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            },
            m = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            },
            f = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
        let g = 1;

        function v(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX,
                s = e.targetTouches[0].pageY,
                a = e.targetTouches[1].pageX,
                i = e.targetTouches[1].pageY;
            return Math.sqrt((a - t) ** 2 + (i - s) ** 2)
        }

        function w(t) {
            const s = e.support,
                a = e.params.zoom;
            if (l = !1, o = !1, !s.gestures) {
                if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                l = !0, u.scaleStart = v(t)
            }
            u.$slideEl && u.$slideEl.length || (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`), 0 === u.$slideEl.length && (u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`), u.maxRatio = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== u.$imageWrapEl.length) ? (u.$imageEl && u.$imageEl.transition(0), p = !0) : u.$imageEl = void 0
        }

        function b(t) {
            const s = e.support,
                a = e.params.zoom,
                i = e.zoom;
            if (!s.gestures) {
                if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
                o = !0, u.scaleMove = v(t)
            }
            u.$imageEl && 0 !== u.$imageEl.length ? (s.gestures ? i.scale = t.scale * c : i.scale = u.scaleMove / u.scaleStart * c, i.scale > u.maxRatio && (i.scale = u.maxRatio - 1 + (i.scale - u.maxRatio + 1) ** .5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** .5), u.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === t.type && w(t)
        }

        function x(t) {
            const s = e.device,
                a = e.support,
                i = e.params.zoom,
                r = e.zoom;
            if (!a.gestures) {
                if (!l || !o) return;
                if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !s.android) return;
                l = !1, o = !1
            }
            u.$imageEl && 0 !== u.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, u.maxRatio), i.minRatio), u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), c = r.scale, p = !1, 1 === r.scale && (u.$slideEl = void 0))
        }

        function y(t) {
            const s = e.zoom;
            if (!u.$imageEl || 0 === u.$imageEl.length) return;
            if (e.allowClick = !1, !m.isTouched || !u.$slideEl) return;
            m.isMoved || (m.width = u.$imageEl[0].offsetWidth, m.height = u.$imageEl[0].offsetHeight, m.startX = h(u.$imageWrapEl[0], "x") || 0, m.startY = h(u.$imageWrapEl[0], "y") || 0, u.slideWidth = u.$slideEl[0].offsetWidth, u.slideHeight = u.$slideEl[0].offsetHeight, u.$imageWrapEl.transition(0));
            const a = m.width * s.scale,
                i = m.height * s.scale;
            if (!(a < u.slideWidth && i < u.slideHeight)) {
                if (m.minX = Math.min(u.slideWidth / 2 - a / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - i / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !m.isMoved && !p) {
                    if (e.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x)) return void(m.isTouched = !1);
                    if (!e.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y)) return void(m.isTouched = !1)
                }
                t.cancelable && t.preventDefault(), t.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8), f.prevPositionX || (f.prevPositionX = m.touchesCurrent.x), f.prevPositionY || (f.prevPositionY = m.touchesCurrent.y), f.prevTime || (f.prevTime = Date.now()), f.x = (m.touchesCurrent.x - f.prevPositionX) / (Date.now() - f.prevTime) / 2, f.y = (m.touchesCurrent.y - f.prevPositionY) / (Date.now() - f.prevTime) / 2, Math.abs(m.touchesCurrent.x - f.prevPositionX) < 2 && (f.x = 0), Math.abs(m.touchesCurrent.y - f.prevPositionY) < 2 && (f.y = 0), f.prevPositionX = m.touchesCurrent.x, f.prevPositionY = m.touchesCurrent.y, f.prevTime = Date.now(), u.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }
        }

        function E() {
            const t = e.zoom;
            u.$slideEl && e.previousIndex !== e.activeIndex && (u.$imageEl && u.$imageEl.transform("translate3d(0,0,0) scale(1)"), u.$imageWrapEl && u.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, c = 1, u.$slideEl = void 0, u.$imageEl = void 0, u.$imageWrapEl = void 0)
        }

        function T(t) {
            const s = e.zoom,
                a = e.params.zoom;
            if (u.$slideEl || (t && t.target && (u.$slideEl = d(t.target).closest(`.${e.params.slideClass}`)), u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : u.$slideEl = e.slides.eq(e.activeIndex)), u.$imageEl = u.$slideEl.find(`.${a.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u.$imageWrapEl = u.$imageEl.parent(`.${a.containerClass}`)), !u.$imageEl || 0 === u.$imageEl.length || !u.$imageWrapEl || 0 === u.$imageWrapEl.length) return;
            let r, n, l, o, p, h, f, g, v, w, b, x, y, E, T, C, $, S;
            e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), u.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === m.touchesStart.x && t ? (r = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (r = m.touchesStart.x, n = m.touchesStart.y), s.scale = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, c = u.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, t ? ($ = u.$slideEl[0].offsetWidth, S = u.$slideEl[0].offsetHeight, l = u.$slideEl.offset().left + i.scrollX, o = u.$slideEl.offset().top + i.scrollY, p = l + $ / 2 - r, h = o + S / 2 - n, v = u.$imageEl[0].offsetWidth, w = u.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, f = p * s.scale, g = h * s.scale, f < y && (f = y), f > T && (f = T), g < E && (g = E), g > C && (g = C)) : (f = 0, g = 0), u.$imageWrapEl.transition(300).transform(`translate3d(${f}px, ${g}px,0)`), u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)
        }

        function C() {
            const t = e.zoom,
                s = e.params.zoom;
            u.$slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.$slideEl = e.$wrapperEl.children(`.${e.params.slideActiveClass}`) : u.$slideEl = e.slides.eq(e.activeIndex), u.$imageEl = u.$slideEl.find(`.${s.containerClass}`).eq(0).find("img, svg, canvas, picture, .swiper-zoom-target"), u.$imageWrapEl = u.$imageEl.parent(`.${s.containerClass}`)), u.$imageEl && 0 !== u.$imageEl.length && u.$imageWrapEl && 0 !== u.$imageWrapEl.length && (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), t.scale = 1, c = 1, u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), u.$slideEl.removeClass(`${s.zoomedSlideClass}`), u.$slideEl = void 0)
        }

        function $(t) {
            const s = e.zoom;
            s.scale && 1 !== s.scale ? C() : T(t)
        }

        function S() {
            const t = e.support;
            return {
                passiveListener: !("touchstart" !== e.touchEvents.start || !t.passiveListener || !e.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                },
                activeListenerWithCapture: !t.passiveListener || {
                    passive: !1,
                    capture: !0
                }
            }
        }

        function M() {
            return `.${e.params.slideClass}`
        }

        function P(t) {
            const {
                passiveListener: s
            } = S(), a = M();
            e.$wrapperEl[t]("gesturestart", a, w, s), e.$wrapperEl[t]("gesturechange", a, b, s), e.$wrapperEl[t]("gestureend", a, x, s)
        }

        function k() {
            n || (n = !0, P("on"))
        }

        function z() {
            n && (n = !1, P("off"))
        }

        function O() {
            const t = e.zoom;
            if (t.enabled) return;
            t.enabled = !0;
            const s = e.support,
                {
                    passiveListener: a,
                    activeListenerWithCapture: i
                } = S(),
                r = M();
            s.gestures ? (e.$wrapperEl.on(e.touchEvents.start, k, a), e.$wrapperEl.on(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, r, w, a), e.$wrapperEl.on(e.touchEvents.move, r, b, i), e.$wrapperEl.on(e.touchEvents.end, r, x, a), e.touchEvents.cancel && e.$wrapperEl.on(e.touchEvents.cancel, r, x, a)), e.$wrapperEl.on(e.touchEvents.move, `.${e.params.zoom.containerClass}`, y, i)
        }

        function I() {
            const t = e.zoom;
            if (!t.enabled) return;
            const s = e.support;
            t.enabled = !1;
            const {
                passiveListener: a,
                activeListenerWithCapture: i
            } = S(), r = M();
            s.gestures ? (e.$wrapperEl.off(e.touchEvents.start, k, a), e.$wrapperEl.off(e.touchEvents.end, z, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, r, w, a), e.$wrapperEl.off(e.touchEvents.move, r, b, i), e.$wrapperEl.off(e.touchEvents.end, r, x, a), e.touchEvents.cancel && e.$wrapperEl.off(e.touchEvents.cancel, r, x, a)), e.$wrapperEl.off(e.touchEvents.move, `.${e.params.zoom.containerClass}`, y, i)
        }
        Object.defineProperty(e.zoom, "scale", {
            get: () => g,
            set(e) {
                if (g !== e) {
                    const t = u.$imageEl ? u.$imageEl[0] : void 0,
                        s = u.$slideEl ? u.$slideEl[0] : void 0;
                    a("zoomChange", e, t, s)
                }
                g = e
            }
        }), s("init", (() => {
            e.params.zoom.enabled && O()
        })), s("destroy", (() => {
            I()
        })), s("touchStart", ((t, s) => {
            e.zoom.enabled && function (t) {
                const s = e.device;
                u.$imageEl && 0 !== u.$imageEl.length && (m.isTouched || (s.android && t.cancelable && t.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, m.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
            }(s)
        })), s("touchEnd", ((t, s) => {
            e.zoom.enabled && function () {
                const t = e.zoom;
                if (!u.$imageEl || 0 === u.$imageEl.length) return;
                if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void(m.isMoved = !1);
                m.isTouched = !1, m.isMoved = !1;
                let s = 300,
                    a = 300;
                const i = f.x * s,
                    r = m.currentX + i,
                    n = f.y * a,
                    l = m.currentY + n;
                0 !== f.x && (s = Math.abs((r - m.currentX) / f.x)), 0 !== f.y && (a = Math.abs((l - m.currentY) / f.y));
                const o = Math.max(s, a);
                m.currentX = r, m.currentY = l;
                const d = m.width * t.scale,
                    c = m.height * t.scale;
                m.minX = Math.min(u.slideWidth / 2 - d / 2, 0), m.maxX = -m.minX, m.minY = Math.min(u.slideHeight / 2 - c / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), u.$imageWrapEl.transition(o).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
            }()
        })), s("doubleTap", ((t, s) => {
            !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && $(s)
        })), s("transitionEnd", (() => {
            e.zoom.enabled && e.params.zoom.enabled && E()
        })), s("slideChange", (() => {
            e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && E()
        })), Object.assign(e.zoom, {
            enable: O,
            disable: I,
            in: T,
            out: C,
            toggle: $
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: a
    }) {
        t({
            lazy: {
                checkInView: !1,
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                scrollingElement: "",
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        }), e.lazy = {};
        let i = !1,
            n = !1;

        function l(t, s = !0) {
            const i = e.params.lazy;
            if (void 0 === t) return;
            if (0 === e.slides.length) return;
            const r = e.virtual && e.params.virtual.enabled ? e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${t}"]`) : e.slides.eq(t),
                n = r.find(`.${i.elementClass}:not(.${i.loadedClass}):not(.${i.loadingClass})`);
            !r.hasClass(i.elementClass) || r.hasClass(i.loadedClass) || r.hasClass(i.loadingClass) || n.push(r[0]), 0 !== n.length && n.each((t => {
                const n = d(t);
                n.addClass(i.loadingClass);
                const o = n.attr("data-background"),
                    c = n.attr("data-src"),
                    p = n.attr("data-srcset"),
                    u = n.attr("data-sizes"),
                    h = n.parent("picture");
                e.loadImage(n[0], c || o, p, u, !1, (() => {
                    if (null != e && e && (!e || e.params) && !e.destroyed) {
                        if (o ? (n.css("background-image", `url("${o}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e => {
                                const t = d(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                            })), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(i.loadedClass).removeClass(i.loadingClass), r.find(`.${i.preloaderClass}`).remove(), e.params.loop && s) {
                            const t = r.attr("data-swiper-slide-index");
                            if (r.hasClass(e.params.slideDuplicateClass)) {
                                l(e.$wrapperEl.children(`[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`).index(), !1)
                            } else {
                                l(e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`).index(), !1)
                            }
                        }
                        a("lazyImageReady", r[0], n[0]), e.params.autoHeight && e.updateAutoHeight()
                    }
                })), a("lazyImageLoad", r[0], n[0])
            }))
        }

        function o() {
            const {
                $wrapperEl: t,
                params: s,
                slides: a,
                activeIndex: i
            } = e, r = e.virtual && s.virtual.enabled, o = s.lazy;
            let c = s.slidesPerView;

            function p(e) {
                if (r) {
                    if (t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                } else if (a[e]) return !0;
                return !1
            }

            function u(e) {
                return r ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === c && (c = 0), n || (n = !0), e.params.watchSlidesProgress) t.children(`.${s.slideVisibleClass}`).each((e => {
                l(r ? d(e).attr("data-swiper-slide-index") : d(e).index())
            }));
            else if (c > 1)
                for (let e = i; e < i + c; e += 1) p(e) && l(e);
            else l(i);
            if (o.loadPrevNext)
                if (c > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
                    const e = o.loadPrevNextAmount,
                        t = c,
                        s = Math.min(i + t + Math.max(e, t), a.length),
                        r = Math.max(i - Math.max(t, e), 0);
                    for (let e = i + c; e < s; e += 1) p(e) && l(e);
                    for (let e = r; e < i; e += 1) p(e) && l(e)
                } else {
                    const e = t.children(`.${s.slideNextClass}`);
                    e.length > 0 && l(u(e));
                    const a = t.children(`.${s.slidePrevClass}`);
                    a.length > 0 && l(u(a))
                }
        }

        function c() {
            const t = r();
            if (!e || e.destroyed) return;
            const s = e.params.lazy.scrollingElement ? d(e.params.lazy.scrollingElement) : d(t),
                a = s[0] === t,
                n = a ? t.innerWidth : s[0].offsetWidth,
                l = a ? t.innerHeight : s[0].offsetHeight,
                p = e.$el.offset(),
                {
                    rtlTranslate: u
                } = e;
            let h = !1;
            u && (p.left -= e.$el[0].scrollLeft);
            const m = [[p.left, p.top], [p.left + e.width, p.top], [p.left, p.top + e.height], [p.left + e.width, p.top + e.height]];
            for (let e = 0; e < m.length; e += 1) {
                const t = m[e];
                if (t[0] >= 0 && t[0] <= n && t[1] >= 0 && t[1] <= l) {
                    if (0 === t[0] && 0 === t[1]) continue;
                    h = !0
                }
            }
            const f = !("touchstart" !== e.touchEvents.start || !e.support.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            h ? (o(), s.off("scroll", c, f)) : i || (i = !0, s.on("scroll", c, f))
        }
        s("beforeInit", (() => {
            e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
        })), s("init", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o())
        })), s("scroll", (() => {
            e.params.freeMode && e.params.freeMode.enabled && !e.params.freeMode.sticky && o()
        })), s("scrollbarDragMove resize _freeModeNoMomentumRelease", (() => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : o())
        })), s("transitionStart", (() => {
            e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !n) && (e.params.lazy.checkInView ? c() : o())
        })), s("transitionEnd", (() => {
            e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && (e.params.lazy.checkInView ? c() : o())
        })), s("slideChange", (() => {
            const {
                lazy: t,
                cssMode: s,
                watchSlidesProgress: a,
                touchReleaseOnEdges: i,
                resistanceRatio: r
            } = e.params;
            t.enabled && (s || a && (i || 0 === r)) && o()
        })), Object.assign(e.lazy, {
            load: o,
            loadInSlide: l
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        function a(e, t) {
            const s = function () {
                let e, t, s;
                return (a, i) => {
                    for (t = -1, e = a.length; e - t > 1;) s = e + t >> 1, a[s] <= i ? t = s : e = s;
                    return e
                }
            }();
            let a, i;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (i = s(this.x, e), a = i - 1, (e - this.x[a]) * (this.y[i] - this.y[a]) / (this.x[i] - this.x[a]) + this.y[a]) : 0
            }, this
        }

        function i() {
            e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
        }
        t({
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        }), e.controller = {
            control: void 0
        }, s("beforeInit", (() => {
            e.controller.control = e.params.controller.control
        })), s("update", (() => {
            i()
        })), s("resize", (() => {
            i()
        })), s("observerUpdate", (() => {
            i()
        })), s("setTranslate", ((t, s, a) => {
            e.controller.control && e.controller.setTranslate(s, a)
        })), s("setTransition", ((t, s, a) => {
            e.controller.control && e.controller.setTransition(s, a)
        })), Object.assign(e.controller, {
            setTranslate: function (t, s) {
                const i = e.controller.control;
                let r, n;
                const l = e.constructor;

                function o(t) {
                    const s = e.rtlTranslate ? -e.translate : e.translate;
                    "slide" === e.params.controller.by && (! function (t) {
                        e.controller.spline || (e.controller.spline = e.params.loop ? new a(e.slidesGrid, t.slidesGrid) : new a(e.snapGrid, t.snapGrid))
                    }(t), n = -e.controller.spline.interpolate(-s)), n && "container" !== e.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (e.maxTranslate() - e.minTranslate()), n = (s - e.minTranslate()) * r + t.minTranslate()), e.params.controller.inverse && (n = t.maxTranslate() - n), t.updateProgress(n), t.setTranslate(n, e), t.updateActiveIndex(), t.updateSlidesClasses()
                }
                if (Array.isArray(i))
                    for (let e = 0; e < i.length; e += 1) i[e] !== s && i[e] instanceof l && o(i[e]);
                else i instanceof l && s !== i && o(i)
            },
            setTransition: function (t, s) {
                const a = e.constructor,
                    i = e.controller.control;
                let r;

                function n(s) {
                    s.setTransition(t, e), 0 !== t && (s.transitionStart(), s.params.autoHeight && p((() => {
                        s.updateAutoHeight()
                    })), s.$wrapperEl.transitionEnd((() => {
                        i && (s.params.loop && "slide" === e.params.controller.by && s.loopFix(), s.transitionEnd())
                    })))
                }
                if (Array.isArray(i))
                    for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
                else i instanceof a && s !== i && n(i)
            }
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                slideLabelMessage: "{{index}} / {{slidesLength}}",
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                itemRoleDescriptionMessage: null,
                slideRole: "group"
            }
        });
        let a = null;

        function i(e) {
            const t = a;
            0 !== t.length && (t.html(""), t.html(e))
        }

        function r(e) {
            e.attr("tabIndex", "0")
        }

        function n(e) {
            e.attr("tabIndex", "-1")
        }

        function l(e, t) {
            e.attr("role", t)
        }

        function o(e, t) {
            e.attr("aria-roledescription", t)
        }

        function c(e, t) {
            e.attr("aria-label", t)
        }

        function p(e) {
            e.attr("aria-disabled", !0)
        }

        function u(e) {
            e.attr("aria-disabled", !1)
        }

        function h(t) {
            if (13 !== t.keyCode && 32 !== t.keyCode) return;
            const s = e.params.a11y,
                a = d(t.target);
            e.navigation && e.navigation.$nextEl && a.is(e.navigation.$nextEl) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? i(s.lastSlideMessage) : i(s.nextSlideMessage)), e.navigation && e.navigation.$prevEl && a.is(e.navigation.$prevEl) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? i(s.firstSlideMessage) : i(s.prevSlideMessage)), e.pagination && a.is(W(e.params.pagination.bulletClass)) && a[0].click()
        }

        function m() {
            if (e.params.loop || !e.navigation) return;
            const {
                $nextEl: t,
                $prevEl: s
            } = e.navigation;
            s && s.length > 0 && (e.isBeginning ? (p(s), n(s)) : (u(s), r(s))), t && t.length > 0 && (e.isEnd ? (p(t), n(t)) : (u(t), r(t)))
        }

        function f() {
            return e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length
        }
        const g = (e, t, s) => {
            r(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", h)), c(e, s),
                function (e, t) {
                    e.attr("aria-controls", t)
                }(e, t)
        };

        function v() {
            const t = e.params.a11y;
            e.$el.append(a);
            const s = e.$el;
            t.containerRoleDescriptionMessage && o(s, t.containerRoleDescriptionMessage), t.containerMessage && c(s, t.containerMessage);
            const i = e.$wrapperEl,
                r = i.attr("id") || `swiper-wrapper-${function(e=16){return"x".repeat(e).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}(16)}`,
                n = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
            var p;
            p = r, i.attr("id", p),
                function (e, t) {
                    e.attr("aria-live", t)
                }(i, n), t.itemRoleDescriptionMessage && o(d(e.slides), t.itemRoleDescriptionMessage), l(d(e.slides), t.slideRole);
            const u = e.params.loop ? e.slides.filter((t => !t.classList.contains(e.params.slideDuplicateClass))).length : e.slides.length;
            let m, v;
            e.slides.each(((s, a) => {
                const i = d(s),
                    r = e.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
                c(i, t.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, u))
            })), e.navigation && e.navigation.$nextEl && (m = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (v = e.navigation.$prevEl), m && m.length && g(m, r, t.nextSlideMessage), v && v.length && g(v, r, t.prevSlideMessage), f() && e.pagination.$el.on("keydown", W(e.params.pagination.bulletClass), h)
        }
        s("beforeInit", (() => {
            a = d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
        })), s("afterInit", (() => {
            e.params.a11y.enabled && (v(), m())
        })), s("toEdge", (() => {
            e.params.a11y.enabled && m()
        })), s("fromEdge", (() => {
            e.params.a11y.enabled && m()
        })), s("paginationUpdate", (() => {
            e.params.a11y.enabled && function () {
                const t = e.params.a11y;
                f() && e.pagination.bullets.each((s => {
                    const a = d(s);
                    r(a), e.params.pagination.renderBullet || (l(a, "button"), c(a, t.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))
                }))
            }()
        })), s("destroy", (() => {
            e.params.a11y.enabled && function () {
                let t, s;
                a && a.length > 0 && a.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", h), s && s.off("keydown", h), f() && e.pagination.$el.off("keydown", W(e.params.pagination.bulletClass), h)
            }()
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            history: {
                enabled: !1,
                root: "",
                replaceState: !1,
                key: "slides"
            }
        });
        let a = !1,
            i = {};
        const n = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
            l = e => {
                const t = r();
                let s;
                s = e ? new URL(e) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e => "" !== e)),
                    i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                }
            },
            o = (t, s) => {
                const i = r();
                if (!a || !e.params.history.enabled) return;
                let l;
                l = e.params.url ? new URL(e.params.url) : i.location;
                const o = e.slides.eq(s);
                let d = n(o.attr("data-history"));
                if (e.params.history.root.length > 0) {
                    let s = e.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${t}/${d}`
                } else l.pathname.includes(t) || (d = `${t}/${d}`);
                const c = i.history.state;
                c && c.value === d || (e.params.history.replaceState ? i.history.replaceState({
                    value: d
                }, null, d) : i.history.pushState({
                    value: d
                }, null, d))
            },
            d = (t, s, a) => {
                if (s)
                    for (let i = 0, r = e.slides.length; i < r; i += 1) {
                        const r = e.slides.eq(i);
                        if (n(r.attr("data-history")) === s && !r.hasClass(e.params.slideDuplicateClass)) {
                            const s = r.index();
                            e.slideTo(s, t, a)
                        }
                    } else e.slideTo(0, t, a)
            },
            c = () => {
                i = l(e.params.url), d(e.params.speed, e.paths.value, !1)
            };
        s("init", (() => {
            e.params.history.enabled && (() => {
                const t = r();
                if (e.params.history) {
                    if (!t.history || !t.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    a = !0, i = l(e.params.url), (i.key || i.value) && (d(0, i.value, e.params.runCallbacksOnInit), e.params.history.replaceState || t.addEventListener("popstate", c))
                }
            })()
        })), s("destroy", (() => {
            e.params.history.enabled && (() => {
                const t = r();
                e.params.history.replaceState || t.removeEventListener("popstate", c)
            })()
        })), s("transitionEnd _freeModeNoMomentumRelease", (() => {
            a && o(e.params.history.key, e.activeIndex)
        })), s("slideChange", (() => {
            a && e.params.cssMode && o(e.params.history.key, e.activeIndex)
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        emit: s,
        on: i
    }) {
        let n = !1;
        const l = a(),
            o = r();
        t({
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        });
        const c = () => {
                s("hashChange");
                const t = l.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    const s = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                    if (void 0 === s) return;
                    e.slideTo(s)
                }
            },
            p = () => {
                if (n && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, `#${e.slides.eq(e.activeIndex).attr("data-hash")}` || ""), s("hashSet");
                    else {
                        const t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        l.location.hash = a || "", s("hashSet")
                    }
            };
        i("init", (() => {
            e.params.hashNavigation.enabled && (() => {
                if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
                n = !0;
                const t = l.location.hash.replace("#", "");
                if (t) {
                    const s = 0;
                    for (let a = 0, i = e.slides.length; a < i; a += 1) {
                        const i = e.slides.eq(a);
                        if ((i.attr("data-hash") || i.attr("data-history")) === t && !i.hasClass(e.params.slideDuplicateClass)) {
                            const t = i.index();
                            e.slideTo(t, s, e.params.runCallbacksOnInit, !0)
                        }
                    }
                }
                e.params.hashNavigation.watchState && d(o).on("hashchange", c)
            })()
        })), i("destroy", (() => {
            e.params.hashNavigation.enabled && e.params.hashNavigation.watchState && d(o).off("hashchange", c)
        })), i("transitionEnd _freeModeNoMomentumRelease", (() => {
            n && p()
        })), i("slideChange", (() => {
            n && e.params.cssMode && p()
        }))
    }, function ({
        swiper: e,
        extendParams: t,
        on: s,
        emit: i
    }) {
        let r;

        function n() {
            const t = e.slides.eq(e.activeIndex);
            let s = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = p((() => {
                let t;
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), i("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), i("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), i("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? o() : (t = e.slideTo(0, e.params.speed, !0, !0), i("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), i("autoplay")), (e.params.cssMode && e.autoplay.running || !1 === t) && n()
            }), s)
        }

        function l() {
            return void 0 === r && (!e.autoplay.running && (e.autoplay.running = !0, i("autoplayStart"), n(), !0))
        }

        function o() {
            return !!e.autoplay.running && (void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, i("autoplayStop"), !0))
        }

        function d(t) {
            e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].addEventListener(t, u)
            })) : (e.autoplay.paused = !1, n())))
        }

        function c() {
            const t = a();
            "hidden" === t.visibilityState && e.autoplay.running && d(), "visible" === t.visibilityState && e.autoplay.paused && (n(), e.autoplay.paused = !1)
        }

        function u(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, u)
            })), e.autoplay.paused = !1, e.autoplay.running ? n() : o())
        }

        function h() {
            e.params.autoplay.disableOnInteraction ? o() : d(), ["transitionend", "webkitTransitionEnd"].forEach((t => {
                e.$wrapperEl[0].removeEventListener(t, u)
            }))
        }

        function m() {
            e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, n())
        }
        e.autoplay = {
            running: !1,
            paused: !1
        }, t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        }), s("init", (() => {
            if (e.params.autoplay.enabled) {
                l();
                a().addEventListener("visibilitychange", c), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", h), e.$el.on("mouseleave", m))
            }
        })), s("beforeTransitionStart", ((t, s, a) => {
            e.autoplay.running && (a || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(s) : o())
        })), s("sliderFirstMove", (() => {
            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? o() : d())
        })), s("touchEnd", (() => {
            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && n()
        })), s("destroy", (() => {
            e.$el.off("mouseenter", h), e.$el.off("mouseleave", m), e.autoplay.running && o();
            a().removeEventListener("visibilitychange", c)
        })), Object.assign(e.autoplay, {
            pause: d,
            run: n,
            start: l,
            stop: o
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: !0,
                autoScrollOffset: 0,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-thumbs"
            }
        });
        let a = !1,
            i = !1;

        function r() {
            const t = e.thumbs.swiper;
            if (!t) return;
            const s = t.clickedIndex,
                a = t.clickedSlide;
            if (a && d(a).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
            if (null == s) return;
            let i;
            if (i = t.params.loop ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                const s = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
                    a = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                i = void 0 === s ? a : void 0 === a ? s : a - t < t - s ? a : s
            }
            e.slideTo(i)
        }

        function n() {
            const {
                thumbs: t
            } = e.params;
            if (a) return !1;
            a = !0;
            const s = e.constructor;
            if (t.swiper instanceof s) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            });
            else if (m(t.swiper)) {
                const a = Object.assign({}, t.swiper);
                Object.assign(a, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), e.thumbs.swiper = new s(a), i = !0
            }
            return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", r), !0
        }

        function l(t) {
            const s = e.thumbs.swiper;
            if (!s) return;
            const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView,
                i = e.params.thumbs.autoScrollOffset,
                r = i && !s.params.loop;
            if (e.realIndex !== s.realIndex || r) {
                let n, l, o = s.activeIndex;
                if (s.params.loop) {
                    s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                    const t = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
                        a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                    n = void 0 === t ? a : void 0 === a ? t : a - o == o - t ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - t ? a : t, l = e.activeIndex > e.previousIndex ? "next" : "prev"
                } else n = e.realIndex, l = n > e.previousIndex ? "next" : "prev";
                r && (n += "next" === l ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup, s.slideTo(n, t ? 0 : void 0))
            }
            let n = 1;
            const l = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (n = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled)
                for (let t = 0; t < n; t += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(l);
            else
                for (let t = 0; t < n; t += 1) s.slides.eq(e.realIndex + t).addClass(l)
        }
        e.thumbs = {
            swiper: null
        }, s("beforeInit", (() => {
            const {
                thumbs: t
            } = e.params;
            t && t.swiper && (n(), l(!0))
        })), s("slideChange update resize observerUpdate", (() => {
            e.thumbs.swiper && l()
        })), s("setTransition", ((t, s) => {
            const a = e.thumbs.swiper;
            a && a.setTransition(s)
        })), s("beforeDestroy", (() => {
            const t = e.thumbs.swiper;
            t && i && t && t.destroy()
        })), Object.assign(e.thumbs, {
            init: n,
            update: l
        })
    }, function ({
        swiper: e,
        extendParams: t,
        emit: s,
        once: a
    }) {
        t({
            freeMode: {
                enabled: !1,
                momentum: !0,
                momentumRatio: 1,
                momentumBounce: !0,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: !1,
                minimumVelocity: .02
            }
        }), Object.assign(e, {
            freeMode: {
                onTouchMove: function () {
                    const {
                        touchEventsData: t,
                        touches: s
                    } = e;
                    0 === t.velocities.length && t.velocities.push({
                        position: s[e.isHorizontal() ? "startX" : "startY"],
                        time: t.touchStartTime
                    }), t.velocities.push({
                        position: s[e.isHorizontal() ? "currentX" : "currentY"],
                        time: u()
                    })
                },
                onTouchEnd: function ({
                    currentPos: t
                }) {
                    const {
                        params: i,
                        $wrapperEl: r,
                        rtlTranslate: n,
                        snapGrid: l,
                        touchEventsData: o
                    } = e, d = u() - o.touchStartTime;
                    if (t < -e.minTranslate()) e.slideTo(e.activeIndex);
                    else if (t > -e.maxTranslate()) e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
                    else {
                        if (i.freeMode.momentum) {
                            if (o.velocities.length > 1) {
                                const t = o.velocities.pop(),
                                    s = o.velocities.pop(),
                                    a = t.position - s.position,
                                    r = t.time - s.time;
                                e.velocity = a / r, e.velocity /= 2, Math.abs(e.velocity) < i.freeMode.minimumVelocity && (e.velocity = 0), (r > 150 || u() - t.time > 300) && (e.velocity = 0)
                            } else e.velocity = 0;
                            e.velocity *= i.freeMode.momentumVelocityRatio, o.velocities.length = 0;
                            let t = 1e3 * i.freeMode.momentumRatio;
                            const d = e.velocity * t;
                            let c = e.translate + d;
                            n && (c = -c);
                            let p, h = !1;
                            const m = 20 * Math.abs(e.velocity) * i.freeMode.momentumBounceRatio;
                            let f;
                            if (c < e.maxTranslate()) i.freeMode.momentumBounce ? (c + e.maxTranslate() < -m && (c = e.maxTranslate() - m), p = e.maxTranslate(), h = !0, o.allowMomentumBounce = !0) : c = e.maxTranslate(), i.loop && i.centeredSlides && (f = !0);
                            else if (c > e.minTranslate()) i.freeMode.momentumBounce ? (c - e.minTranslate() > m && (c = e.minTranslate() + m), p = e.minTranslate(), h = !0, o.allowMomentumBounce = !0) : c = e.minTranslate(), i.loop && i.centeredSlides && (f = !0);
                            else if (i.freeMode.sticky) {
                                let t;
                                for (let e = 0; e < l.length; e += 1)
                                    if (l[e] > -c) {
                                        t = e;
                                        break
                                    } c = Math.abs(l[t] - c) < Math.abs(l[t - 1] - c) || "next" === e.swipeDirection ? l[t] : l[t - 1], c = -c
                            }
                            if (f && a("transitionEnd", (() => {
                                    e.loopFix()
                                })), 0 !== e.velocity) {
                                if (t = n ? Math.abs((-c - e.translate) / e.velocity) : Math.abs((c - e.translate) / e.velocity), i.freeMode.sticky) {
                                    const s = Math.abs((n ? -c : c) - e.translate),
                                        a = e.slidesSizesGrid[e.activeIndex];
                                    t = s < a ? i.speed : s < 2 * a ? 1.5 * i.speed : 2.5 * i.speed
                                }
                            } else if (i.freeMode.sticky) return void e.slideToClosest();
                            i.freeMode.momentumBounce && h ? (e.updateProgress(p), e.setTransition(t), e.setTranslate(c), e.transitionStart(!0, e.swipeDirection), e.animating = !0, r.transitionEnd((() => {
                                e && !e.destroyed && o.allowMomentumBounce && (s("momentumBounce"), e.setTransition(i.speed), setTimeout((() => {
                                    e.setTranslate(p), r.transitionEnd((() => {
                                        e && !e.destroyed && e.transitionEnd()
                                    }))
                                }), 0))
                            }))) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(c), e.setTransition(t), e.setTranslate(c), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, r.transitionEnd((() => {
                                e && !e.destroyed && e.transitionEnd()
                            })))) : e.updateProgress(c), e.updateActiveIndex(), e.updateSlidesClasses()
                        } else {
                            if (i.freeMode.sticky) return void e.slideToClosest();
                            i.freeMode && s("_freeModeNoMomentumRelease")
                        }(!i.freeMode.momentum || d >= i.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                    }
                }
            }
        })
    }, function ({
        swiper: e,
        extendParams: t
    }) {
        let s, a, i;
        t({
            grid: {
                rows: 1,
                fill: "column"
            }
        }), e.grid = {
            initSlides: t => {
                const {
                    slidesPerView: r
                } = e.params, {
                    rows: n,
                    fill: l
                } = e.params.grid;
                a = s / n, i = Math.floor(t / n), s = Math.floor(t / n) === t / n ? t : Math.ceil(t / n) * n, "auto" !== r && "row" === l && (s = Math.max(s, r * n))
            },
            updateSlide: (t, r, n, l) => {
                const {
                    slidesPerGroup: o,
                    spaceBetween: d
                } = e.params, {
                    rows: c,
                    fill: p
                } = e.params.grid;
                let u, h, m;
                if ("row" === p && o > 1) {
                    const e = Math.floor(t / (o * c)),
                        a = t - c * o * e,
                        i = 0 === e ? o : Math.min(Math.ceil((n - e * c * o) / c), o);
                    m = Math.floor(a / i), h = a - m * i + e * o, u = h + m * s / c, r.css({
                        "-webkit-order": u,
                        order: u
                    })
                } else "column" === p ? (h = Math.floor(t / c), m = t - h * c, (h > i || h === i && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(t / a), h = t - m * a);
                r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "")
            },
            updateWrapperSize: (t, a, i) => {
                const {
                    spaceBetween: r,
                    centeredSlides: n,
                    roundLengths: l
                } = e.params, {
                    rows: o
                } = e.params.grid;
                if (e.virtualSize = (t + r) * s, e.virtualSize = Math.ceil(e.virtualSize / o) - r, e.$wrapperEl.css({
                        [i("width")]: `${e.virtualSize+r}px`
                    }), n) {
                    a.splice(0, a.length);
                    const t = [];
                    for (let s = 0; s < a.length; s += 1) {
                        let i = a[s];
                        l && (i = Math.floor(i)), a[s] < e.virtualSize + a[0] && t.push(i)
                    }
                    a.push(...t)
                }
            }
        }
    }, function ({
        swiper: e
    }) {
        Object.assign(e, {
            appendSlide: R.bind(e),
            prependSlide: j.bind(e),
            addSlide: _.bind(e),
            removeSlide: V.bind(e),
            removeAllSlides: q.bind(e)
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            fadeEffect: {
                crossFade: !1,
                transformEl: null
            }
        }), F({
            effect: "fade",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {
                    slides: t
                } = e, s = e.params.fadeEffect;
                for (let a = 0; a < t.length; a += 1) {
                    const t = e.slides.eq(a);
                    let i = -t[0].swiperSlideOffset;
                    e.params.virtualTranslate || (i -= e.translate);
                    let r = 0;
                    e.isHorizontal() || (r = i, i = 0);
                    const n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                    U(s, t).css({
                        opacity: n
                    }).transform(`translate3d(${i}px, ${r}px, 0px)`)
                }
            },
            setTransition: t => {
                const {
                    transformEl: s
                } = e.params.fadeEffect;
                (s ? e.slides.find(s) : e.slides).transition(t), K({
                    swiper: e,
                    duration: t,
                    transformEl: s,
                    allSlides: !0
                })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        }), F({
            effect: "cube",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {
                    $el: t,
                    $wrapperEl: s,
                    slides: a,
                    width: i,
                    height: r,
                    rtlTranslate: n,
                    size: l,
                    browser: o
                } = e, c = e.params.cubeEffect, p = e.isHorizontal(), u = e.virtual && e.params.virtual.enabled;
                let h, m = 0;
                c.shadow && (p ? (h = s.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), s.append(h)), h.css({
                    height: `${i}px`
                })) : (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), t.append(h))));
                for (let e = 0; e < a.length; e += 1) {
                    const t = a.eq(e);
                    let s = e;
                    u && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                    let i = 90 * s,
                        r = Math.floor(i / 360);
                    n && (i = -i, r = Math.floor(-i / 360));
                    const o = Math.max(Math.min(t[0].progress, 1), -1);
                    let h = 0,
                        f = 0,
                        g = 0;
                    s % 4 == 0 ? (h = 4 * -r * l, g = 0) : (s - 1) % 4 == 0 ? (h = 0, g = 4 * -r * l) : (s - 2) % 4 == 0 ? (h = l + 4 * r * l, g = l) : (s - 3) % 4 == 0 && (h = -l, g = 3 * l + 4 * l * r), n && (h = -h), p || (f = h, h = 0);
                    const v = `rotateX(${p?0:-i}deg) rotateY(${p?i:0}deg) translate3d(${h}px, ${f}px, ${g}px)`;
                    if (o <= 1 && o > -1 && (m = 90 * s + 90 * o, n && (m = 90 * -s - 90 * o)), t.transform(v), c.slideShadows) {
                        let e = p ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = p ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = d(`<div class="swiper-slide-shadow-${p?"left":"top"}"></div>`), t.append(e)), 0 === s.length && (s = d(`<div class="swiper-slide-shadow-${p?"right":"bottom"}"></div>`), t.append(s)), e.length && (e[0].style.opacity = Math.max(-o, 0)), s.length && (s[0].style.opacity = Math.max(o, 0))
                    }
                }
                if (s.css({
                        "-webkit-transform-origin": `50% 50% -${l/2}px`,
                        "transform-origin": `50% 50% -${l/2}px`
                    }), c.shadow)
                    if (p) h.transform(`translate3d(0px, ${i/2+c.shadowOffset}px, ${-i/2}px) rotateX(90deg) rotateZ(0deg) scale(${c.shadowScale})`);
                    else {
                        const e = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                            t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                            s = c.shadowScale,
                            a = c.shadowScale / t,
                            i = c.shadowOffset;
                        h.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${r/2+i}px, ${-r/2/a}px) rotateX(-90deg)`)
                    } const f = o.isSafari || o.isWebView ? -l / 2 : 0;
                s.transform(`translate3d(0px,0,${f}px) rotateX(${e.isHorizontal()?0:m}deg) rotateY(${e.isHorizontal()?-m:0}deg)`)
            },
            setTransition: t => {
                const {
                    $el: s,
                    slides: a
                } = e;
                a.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && s.find(".swiper-cube-shadow").transition(t)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0,
                transformEl: null
            }
        }), F({
            effect: "flip",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {
                    slides: t,
                    rtlTranslate: s
                } = e, a = e.params.flipEffect;
                for (let i = 0; i < t.length; i += 1) {
                    const r = t.eq(i);
                    let n = r[0].progress;
                    e.params.flipEffect.limitRotation && (n = Math.max(Math.min(r[0].progress, 1), -1));
                    const l = r[0].swiperSlideOffset;
                    let o = -180 * n,
                        d = 0,
                        c = e.params.cssMode ? -l - e.translate : -l,
                        p = 0;
                    if (e.isHorizontal() ? s && (o = -o) : (p = c, c = 0, d = -o, o = 0), r[0].style.zIndex = -Math.abs(Math.round(n)) + t.length, a.slideShadows) {
                        let t = e.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top"),
                            s = e.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                        0 === t.length && (t = Z(a, r, e.isHorizontal() ? "left" : "top")), 0 === s.length && (s = Z(a, r, e.isHorizontal() ? "right" : "bottom")), t.length && (t[0].style.opacity = Math.max(-n, 0)), s.length && (s[0].style.opacity = Math.max(n, 0))
                    }
                    const u = `translate3d(${c}px, ${p}px, 0px) rotateX(${d}deg) rotateY(${o}deg)`;
                    U(a, r).transform(u)
                }
            },
            setTransition: t => {
                const {
                    transformEl: s
                } = e.params.flipEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), K({
                    swiper: e,
                    duration: t,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: !0,
                transformEl: null
            }
        }), F({
            effect: "coverflow",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {
                    width: t,
                    height: s,
                    slides: a,
                    slidesSizesGrid: i
                } = e, r = e.params.coverflowEffect, n = e.isHorizontal(), l = e.translate, o = n ? t / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                for (let e = 0, t = a.length; e < t; e += 1) {
                    const t = a.eq(e),
                        s = i[e],
                        l = (o - t[0].swiperSlideOffset - s / 2) / s * r.modifier;
                    let p = n ? d * l : 0,
                        u = n ? 0 : d * l,
                        h = -c * Math.abs(l),
                        m = r.stretch;
                    "string" == typeof m && -1 !== m.indexOf("%") && (m = parseFloat(r.stretch) / 100 * s);
                    let f = n ? 0 : m * l,
                        g = n ? m * l : 0,
                        v = 1 - (1 - r.scale) * Math.abs(l);
                    Math.abs(g) < .001 && (g = 0), Math.abs(f) < .001 && (f = 0), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0), Math.abs(u) < .001 && (u = 0), Math.abs(v) < .001 && (v = 0);
                    const w = `translate3d(${g}px,${f}px,${h}px)  rotateX(${u}deg) rotateY(${p}deg) scale(${v})`;
                    if (U(r, t).transform(w), t[0].style.zIndex = 1 - Math.abs(Math.round(l)), r.slideShadows) {
                        let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                            s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                        0 === e.length && (e = Z(r, t, n ? "left" : "top")), 0 === s.length && (s = Z(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = l > 0 ? l : 0), s.length && (s[0].style.opacity = -l > 0 ? -l : 0)
                    }
                }
            },
            setTransition: t => {
                const {
                    transformEl: s
                } = e.params.coverflowEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            creativeEffect: {
                transformEl: null,
                limitProgress: 1,
                shadowPerProgress: !1,
                progressMultiplier: 1,
                perspective: !0,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const a = e => "string" == typeof e ? e : `${e}px`;
        F({
            effect: "creative",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {
                    slides: t,
                    $wrapperEl: s,
                    slidesSizesGrid: i
                } = e, r = e.params.creativeEffect, {
                    progressMultiplier: n
                } = r, l = e.params.centeredSlides;
                if (l) {
                    const t = i[0] / 2 - e.params.slidesOffsetBefore || 0;
                    s.transform(`translateX(calc(50% - ${t}px))`)
                }
                for (let s = 0; s < t.length; s += 1) {
                    const i = t.eq(s),
                        o = i[0].progress,
                        d = Math.min(Math.max(i[0].progress, -r.limitProgress), r.limitProgress);
                    let c = d;
                    l || (c = Math.min(Math.max(i[0].originalProgress, -r.limitProgress), r.limitProgress));
                    const p = i[0].swiperSlideOffset,
                        u = [e.params.cssMode ? -p - e.translate : -p, 0, 0],
                        h = [0, 0, 0];
                    let m = !1;
                    e.isHorizontal() || (u[1] = u[0], u[0] = 0);
                    let f = {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        scale: 1,
                        opacity: 1
                    };
                    d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach(((e, t) => {
                        u[t] = `calc(${e}px + (${a(f.translate[t])} * ${Math.abs(d*n)}))`
                    })), h.forEach(((e, t) => {
                        h[t] = f.rotate[t] * Math.abs(d * n)
                    })), i[0].style.zIndex = -Math.abs(Math.round(o)) + t.length;
                    const g = u.join(", "),
                        v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                        w = c < 0 ? `scale(${1+(1-f.scale)*c*n})` : `scale(${1-(1-f.scale)*c*n})`,
                        b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
                        x = `translate3d(${g}) ${v} ${w}`;
                    if (m && f.shadow || !m) {
                        let e = i.children(".swiper-slide-shadow");
                        if (0 === e.length && f.shadow && (e = Z(r, i)), e.length) {
                            const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                            e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1)
                        }
                    }
                    const y = U(r, i);
                    y.transform(x).css({
                        opacity: b
                    }), f.origin && y.css("transform-origin", f.origin)
                }
            },
            setTransition: t => {
                const {
                    transformEl: s
                } = e.params.creativeEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
                    swiper: e,
                    duration: t,
                    transformEl: s,
                    allSlides: !0
                })
            },
            perspective: () => e.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }, function ({
        swiper: e,
        extendParams: t,
        on: s
    }) {
        t({
            cardsEffect: {
                slideShadows: !0,
                transformEl: null
            }
        }), F({
            effect: "cards",
            swiper: e,
            on: s,
            setTranslate: () => {
                const {
                    slides: t,
                    activeIndex: s
                } = e, a = e.params.cardsEffect, {
                    startTranslate: i,
                    isTouched: r
                } = e.touchEventsData, n = e.translate;
                for (let l = 0; l < t.length; l += 1) {
                    const o = t.eq(l),
                        d = o[0].progress,
                        c = Math.min(Math.max(d, -4), 4);
                    let p = o[0].swiperSlideOffset;
                    e.params.centeredSlides && !e.params.cssMode && e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (p -= t[0].swiperSlideOffset);
                    let u = e.params.cssMode ? -p - e.translate : -p,
                        h = 0;
                    const m = -100 * Math.abs(c);
                    let f = 1,
                        g = -2 * c,
                        v = 8 - .75 * Math.abs(c);
                    const w = (l === s || l === s - 1) && c > 0 && c < 1 && (r || e.params.cssMode) && n < i,
                        b = (l === s || l === s + 1) && c < 0 && c > -1 && (r || e.params.cssMode) && n > i;
                    if (w || b) {
                        const e = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                        g += -28 * c * e, f += -.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%"
                    }
                    if (u = c < 0 ? `calc(${u}px + (${v*Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v*Math.abs(c)}%))` : `${u}px`, !e.isHorizontal()) {
                        const e = h;
                        h = u, u = e
                    }
                    const x = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${g}deg)\n        scale(${c<0?""+(1+(1-f)*c):""+(1-(1-f)*c)})\n      `;
                    if (a.slideShadows) {
                        let e = o.find(".swiper-slide-shadow");
                        0 === e.length && (e = Z(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                    }
                    o[0].style.zIndex = -Math.abs(Math.round(d)) + t.length;
                    U(a, o).transform(x)
                }
            },
            setTransition: t => {
                const {
                    transformEl: s
                } = e.params.cardsEffect;
                (s ? e.slides.find(s) : e.slides).transition(t).find(".swiper-slide-shadow").transition(t), K({
                    swiper: e,
                    duration: t,
                    transformEl: s
                })
            },
            perspective: () => !0,
            overwriteParams: () => ({
                watchSlidesProgress: !0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }];
    return H.use(J), H
}));
//# sourceMappingURL=swiper-bundle.min.js.map
/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
! function (e) {
    e.fn.niceSelect = function (t) {
        function s(t) {
            t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var s = t.next(),
                n = t.find("option"),
                i = t.find("option:selected");
            s.find(".current").html(i.data("display") || i.text()), n.each(function (t) {
                var n = e(this),
                    i = n.data("display");
                s.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", i || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
            })
        }
        if ("string" == typeof t) return "update" == t ? this.each(function () {
            var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
            n.length && (n.remove(), s(t), i && t.next().trigger("click"))
        }) : "destroy" == t ? (this.each(function () {
            var t = e(this),
                s = e(this).next(".nice-select");
            s.length && (s.remove(), t.css("display", ""))
        }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
        this.hide(), this.each(function () {
            var t = e(this);
            t.next().hasClass("nice-select") || s(t)
        }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
            var s = e(this);
            e(".nice-select").not(s).removeClass("open"), s.toggleClass("open"), s.hasClass("open") ? (s.find(".option"), s.find(".focus").removeClass("focus"), s.find(".selected").addClass("focus")) : s.focus()
        }), e(document).on("click.nice_select", function (t) {
            0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
        }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
            var s = e(this),
                n = s.closest(".nice-select");
            n.find(".selected").removeClass("selected"), s.addClass("selected");
            var i = s.data("display") || s.text();
            n.find(".current").text(i), n.prev("select").val(s.data("value")).trigger("change")
        }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
            var s = e(this),
                n = e(s.find(".focus") || s.find(".list .option.selected"));
            if (32 == t.keyCode || 13 == t.keyCode) return s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1;
            if (40 == t.keyCode) {
                if (s.hasClass("open")) {
                    var i = n.nextAll(".option:not(.disabled)").first();
                    i.length > 0 && (s.find(".focus").removeClass("focus"), i.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (38 == t.keyCode) {
                if (s.hasClass("open")) {
                    var l = n.prevAll(".option:not(.disabled)").first();
                    l.length > 0 && (s.find(".focus").removeClass("focus"), l.addClass("focus"))
                } else s.trigger("click");
                return !1
            }
            if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
            else if (9 == t.keyCode && s.hasClass("open")) return !1
        });
        var n = document.createElement("a").style;
        return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
    }
}(jQuery);
// Dynamic Adapt v.1
// HTML data-da="where(uniq class name),when(breakpoint),position(digi)"
// e.x. data-da=".item,992,2"
// Andrikanych Yevhen 2020
// https://www.youtube.com/c/freelancerlifestyle

"use strict";

function DynamicAdapt(type) {
    this.type = type;
}

DynamicAdapt.prototype.init = function () {
    const _this = this;
    // массив объектов
    this.оbjects = [];
    this.daClassname = "_dynamic_adapt_";
    // массив DOM-элементов
    this.nodes = document.querySelectorAll("[data-da]");

    // наполнение оbjects объктами
    for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        const data = node.dataset.da.trim();
        const dataArray = data.split(",");
        const оbject = {};
        оbject.element = node;
        оbject.parent = node.parentNode;
        оbject.destination = document.querySelector(dataArray[0].trim());
        оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
        оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
        оbject.index = this.indexInParent(оbject.parent, оbject.element);
        this.оbjects.push(оbject);
    }

    this.arraySort(this.оbjects);

    // массив уникальных медиа-запросов
    this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
        return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
    }, this);
    this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
        return Array.prototype.indexOf.call(self, item) === index;
    });

    // навешивание слушателя на медиа-запрос
    // и вызов обработчика при первом запуске
    for (let i = 0; i < this.mediaQueries.length; i++) {
        const media = this.mediaQueries[i];
        const mediaSplit = String.prototype.split.call(media, ',');
        const matchMedia = window.matchMedia(mediaSplit[0]);
        const mediaBreakpoint = mediaSplit[1];

        // массив объектов с подходящим брейкпоинтом
        const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
            return item.breakpoint === mediaBreakpoint;
        });
        matchMedia.addListener(function () {
            _this.mediaHandler(matchMedia, оbjectsFilter);
        });
        this.mediaHandler(matchMedia, оbjectsFilter);
    }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
    if (matchMedia.matches) {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.moveTo(оbject.place, оbject.element, оbject.destination);
        }
    } else {
        for (let i = 0; i < оbjects.length; i++) {
            const оbject = оbjects[i];
            if (оbject.element.classList.contains(this.daClassname)) {
                this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        }
    }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
    element.classList.add(this.daClassname);
    if (place === 'last' || place >= destination.children.length) {
        destination.insertAdjacentElement('beforeend', element);
        return;
    }
    if (place === 'first') {
        destination.insertAdjacentElement('afterbegin', element);
        return;
    }
    destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
    element.classList.remove(this.daClassname);
    if (parent.children[index] !== undefined) {
        parent.children[index].insertAdjacentElement('beforebegin', element);
    } else {
        parent.insertAdjacentElement('beforeend', element);
    }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
    const array = Array.prototype.slice.call(parent.children);
    return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
    if (this.type === "min") {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return -1;
                }

                if (a.place === "last" || b.place === "first") {
                    return 1;
                }

                return a.place - b.place;
            }

            return a.breakpoint - b.breakpoint;
        });
    } else {
        Array.prototype.sort.call(arr, function (a, b) {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) {
                    return 0;
                }

                if (a.place === "first" || b.place === "last") {
                    return 1;
                }

                if (a.place === "last" || b.place === "first") {
                    return -1;
                }

                return b.place - a.place;
            }

            return b.breakpoint - a.breakpoint;
        });
        return;
    }
};

const da = new DynamicAdapt("max");
da.init();
