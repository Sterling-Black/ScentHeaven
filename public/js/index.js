(function(e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function(e, t) {
        return new x.fn.init(e,t,r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function(e, t) {
        return t.toUpperCase()
    }, q = function(e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(),
        x.ready())
    }, _ = function() {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1),
        e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q),
        e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e),
                !i || !i[1] && n)
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n,
                    x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)),
                    k.test(i[1]) && x.isPlainObject(n))
                        for (i in n)
                            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = a.getElementById(i[2]),
                o && o.parentNode) {
                    if (o.id !== i[2])
                        return r.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = a,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector,
            this.context = e.context),
            x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    },
    x.fn.init.prototype = x.fn,
    x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[1] || {},
        l = 2),
        "object" == typeof s || x.isFunction(s) || (s = {}),
        u === l && (s = this,
        --l); u > l; l++)
            if (null != (o = arguments[l]))
                for (i in o)
                    e = s[i],
                    r = o[i],
                    s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1,
                    a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {},
                    s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }
    ,
    x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u),
            t && e.jQuery === x && (e.jQuery = l),
            x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body)
                    return setTimeout(x.ready);
                x.isReady = !0,
                e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]),
                x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))
                return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (r) {
                return !1
            }
            if (x.support.ownLast)
                for (n in e)
                    return v.call(e, n);
            for (n in e)
                ;
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || a;
            var r = k.exec(e)
              , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i),
            i && x(i).remove(),
            x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n),
            n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n),
            t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n)
                return null;
            try {
                e.DOMParser ? (i = new DOMParser,
                r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
                r.async = "false",
                r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n),
            r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
                } else
                    for (i in e)
                        if (r = t.apply(e[i], n),
                        r === !1)
                            break
            } else if (a) {
                for (; o > i; i++)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break
            } else
                for (i in e)
                    if (r = t.call(e[i], i, e[i]),
                    r === !1)
                        break;
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        }
        : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        }
        ,
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m)
                    return m.call(t, e, n);
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length
              , i = e.length
              , o = 0;
            if ("number" == typeof r)
                for (; r > o; o++)
                    e[i++] = n[o];
            else
                while (n[o] !== t)
                    e[i++] = n[o++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++)
                r = !!t(e[o], o),
                n !== r && i.push(e[o]);
            return i
        },
        map: function(e, t, n) {
            var r, i = 0, o = e.length, a = M(e), s = [];
            if (a)
                for (; o > i; i++)
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r);
            else
                for (i in e)
                    r = t(e[i], i, n),
                    null != r && (s[s.length] = r);
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n],
            n = e,
            e = o),
            x.isFunction(e) ? (r = g.call(arguments, 2),
            i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }
            ,
            i.guid = e.guid = e.guid || x.guid++,
            i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0
              , u = e.length
              , c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r)
                    x.access(e, n, l, r[l], !0, a, s)
            } else if (i !== t && (o = !0,
            x.isFunction(i) || (s = !0),
            c && (s ? (n.call(e, i),
            n = null) : (c = n,
            n = function(e, t, n) {
                return c.call(x(e), n)
            }
            )),
            n))
                for (; u > l; l++)
                    n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t)
                a[o] = e.style[o],
                e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = a[o];
            return i
        }
    }),
    x.ready.promise = function(t) {
        if (!n)
            if (n = x.Deferred(),
            "complete" === a.readyState)
                setTimeout(x.ready);
            else if (a.addEventListener)
                a.addEventListener("DOMContentLoaded", q, !1),
                e.addEventListener("load", q, !1);
            else {
                a.attachEvent("onreadystatechange", q),
                e.attachEvent("onload", q);
                var r = !1;
                try {
                    r = null == e.frameElement && a.documentElement
                } catch (i) {}
                r && r.doScroll && function o() {
                    if (!x.isReady) {
                        try {
                            r.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        _(),
                        x.ready()
                    }
                }()
            }
        return n.promise(t)
    }
    ,
    x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length
          , n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
    function(e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function(e, t) {
            return e === t ? (S = !0,
            0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function(e) {
            var t = 0
              , n = this.length;
            for (; n > t; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {
            ID: RegExp("^#(" + R + ")"),
            CLASS: RegExp("^\\.(" + R + ")"),
            TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + $),
            PSEUDO: RegExp("^" + I),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
            bool: RegExp("^(?:" + B + ")$", "i"),
            needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
        }, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes),
            H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {
                apply: H.length ? function(e, t) {
                    _.apply(e, O.call(t))
                }
                : function(e, t) {
                    var n = e.length
                      , r = 0;
                    while (e[n++] = t[r++])
                        ;
                    e.length = n - 1
                }
            }
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t),
            t = t || f,
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (l = t.nodeType) && 9 !== l)
                return [];
            if (h && !i) {
                if (o = Z.exec(e))
                    if (s = o[1]) {
                        if (9 === l) {
                            if (a = t.getElementById(s),
                            !a || !a.parentNode)
                                return n;
                            if (a.id === s)
                                return n.push(a),
                                n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)
                            return n.push(a),
                            n
                    } else {
                        if (o[2])
                            return M.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)
                            return M.apply(n, t.getElementsByClassName(s)),
                            n
                    }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b,
                    y = t,
                    x = 9 === l && e,
                    1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e),
                        (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m),
                        m = "[id='" + m + "'] ",
                        u = c.length;
                        while (u--)
                            c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t,
                        x = c.join(",")
                    }
                    if (x)
                        try {
                            return M.apply(n, y.querySelectorAll(x)),
                            n
                        } catch (T) {} finally {
                            d || t.removeAttribute("id")
                        }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }
        function st() {
            var e = [];
            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()],
                t[n] = r
            }
            return t
        }
        function lt(e) {
            return e[b] = !0,
            e
        }
        function ut(e) {
            var t = f.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ct(e, t) {
            var n = e.split("|")
              , r = e.length;
            while (r--)
                o.attrHandle[n[r]] = t
        }
        function pt(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function ft(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function dt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function ht(e) {
            return lt(function(t) {
                return t = +t,
                lt(function(n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        s = at.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        r = at.support = {},
        p = at.setDocument = function(e) {
            var n = e ? e.ownerDocument || e : w
              , i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n,
            d = n.documentElement,
            h = !s(n),
            i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                p()
            }),
            r.attributes = ut(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            r.getElementsByTagName = ut(function(e) {
                return e.appendChild(n.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            r.getElementsByClassName = ut(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            r.getById = ut(function(e) {
                return d.appendChild(e).id = b,
                !n.getElementsByName || !n.getElementsByName(b).length
            }),
            r.getById ? (o.find.ID = function(e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete o.find.ID,
            o.filter.ID = function(e) {
                var t = e.replace(rt, it);
                return function(e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            o.find.TAG = r.getElementsByTagName ? function(e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            o.find.CLASS = r.getElementsByClassName && function(e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }
            ,
            m = [],
            g = [],
            (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"),
                e.querySelectorAll(":checked").length || g.push(":checked")
            }),
            ut(function(e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                g.push(",.*:")
            })),
            (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                r.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                m.push("!=", I)
            }),
            g = g.length && RegExp(g.join("|")),
            m = m.length && RegExp(m.join("|")),
            v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            A = d.compareDocumentPosition ? function(e, t) {
                if (e === t)
                    return S = !0,
                    0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }
            : function(e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t)
                    return S = !0,
                    0;
                if (!o || !a)
                    return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a)
                    return pt(e, t);
                r = e;
                while (r = r.parentNode)
                    s.unshift(r);
                r = t;
                while (r = r.parentNode)
                    l.unshift(r);
                while (s[i] === l[i])
                    i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }
            ,
            n) : f
        }
        ,
        at.matches = function(e, t) {
            return at(e, null, null, t)
        }
        ,
        at.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== f && p(e),
            t = t.replace(Y, "='$1']"),
            !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))
                try {
                    var n = y.call(e, t);
                    if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (i) {}
            return at(t, f, null, [e]).length > 0
        }
        ,
        at.contains = function(e, t) {
            return (e.ownerDocument || e) !== f && p(e),
            v(e, t)
        }
        ,
        at.attr = function(e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()]
              , a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }
        ,
        at.error = function(e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        at.uniqueSort = function(e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates,
            c = !r.sortStable && e.slice(0),
            e.sort(A),
            S) {
                while (t = e[o++])
                    t === e[o] && (i = n.push(o));
                while (i--)
                    e.splice(n[i], 1)
            }
            return e
        }
        ,
        a = at.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += a(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r]; r++)
                    n += a(t);
            return n
        }
        ,
        o = at.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
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
                ATTR: function(e) {
                    return e[1] = e[1].replace(rt, it),
                    e[3] = (e[4] || e[5] || "").replace(rt, it),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, r = !e[5] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n),
                    e[2] = r.slice(0, n)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(rt, it).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = N[e + " "];
                    return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(r) {
                        var i = at.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "",
                        "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , a = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g])
                                        if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild],
                            a && v) {
                                c = m[b] || (m[b] = {}),
                                u = c[e] || [],
                                d = u[0] === T && u[1],
                                f = u[0] === T && u[2],
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if (1 === p.nodeType && ++f && p === t) {
                                        c[e] = [T, d, f];
                                        break
                                    }
                            } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)
                                f = u[1];
                            else
                                while (p = ++d && p && p[g] || (f = d = 0) || h.pop())
                                    if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]),
                                    p === t))
                                        break;
                            return f -= i,
                            f === r || 0 === f % r && f / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                    return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t],
                    o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                        var i, o = r(e, t), a = o.length;
                        while (a--)
                            i = F.call(e, o[a]),
                            e[i] = !(n[i] = o[a])
                    }) : function(e) {
                        return r(e, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = []
                      , n = []
                      , r = l(e.replace(z, "$1"));
                    return r[b] ? lt(function(e, t, n, i) {
                        var o, a = r(e, null, i, []), s = e.length;
                        while (s--)
                            (o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, i, o) {
                        return t[0] = e,
                        r(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return at(e, t).length > 0
                    }
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                    }
                }),
                lang: lt(function(e) {
                    return G.test(e || "") || at.error("unsupported lang: " + e),
                    e = e.replace(rt, it).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === d
                },
                focus: function(e) {
                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !o.pseudos.empty(e)
                },
                header: function(e) {
                    return tt.test(e.nodeName)
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: ht(function() {
                    return [0]
                }),
                last: ht(function(e, t) {
                    return [t - 1]
                }),
                eq: ht(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: ht(function(e, t) {
                    var n = 0;
                    for (; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: ht(function(e, t) {
                    var n = 1;
                    for (; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: ht(function(e, t, n) {
                    var r = 0 > n ? n + t : n;
                    for (; t > ++r; )
                        e.push(r);
                    return e
                })
            }
        },
        o.pseudos.nth = o.pseudos.eq;
        for (n in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            o.pseudos[n] = ft(n);
        for (n in {
            submit: !0,
            reset: !0
        })
            o.pseudos[n] = dt(n);
        function gt() {}
        gt.prototype = o.filters = o.pseudos,
        o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            s = e,
            l = [],
            u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                l.push(i = [])),
                n = !1,
                (r = U.exec(s)) && (n = r.shift(),
                i.push({
                    value: n,
                    type: r[0].replace(z, " ")
                }),
                s = s.slice(n.length));
                for (a in o.filter)
                    !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(),
                    i.push({
                        value: n,
                        type: a,
                        matches: r
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }
        function yt(e) {
            var t = 0
              , n = e.length
              , r = "";
            for (; n > t; t++)
                r += e[t].value;
            return r
        }
        function vt(e, t, n) {
            var r = t.dir
              , o = n && "parentNode" === r
              , a = C++;
            return t.first ? function(t, n, i) {
                while (t = t[r])
                    if (1 === t.nodeType || o)
                        return e(t, n, i)
            }
            : function(t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && e(t, n, s))
                            return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (c = t[b] || (t[b] = {}),
                            (u = c[r]) && u[0] === p) {
                                if ((l = u[1]) === !0 || l === i)
                                    return l === !0
                            } else if (u = c[r] = [p],
                            u[1] = e(t, n, s) || i,
                            u[1] === !0)
                                return !0
            }
        }
        function bt(e) {
            return e.length > 1 ? function(t, n, r) {
                var i = e.length;
                while (i--)
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o),
                u && t.push(s));
            return a
        }
        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)),
            i && !i[b] && (i = wt(i, o)),
            lt(function(o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l),
                r) {
                    u = xt(y, d),
                    r(u, [], s, l),
                    c = u.length;
                    while (c--)
                        (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [],
                            c = y.length;
                            while (c--)
                                (p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)
                            (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else
                    y = xt(y === a ? y.splice(h, y.length) : y),
                    i ? i(null, a, y, l) : M.apply(a, y)
            })
        }
        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function(e) {
                return e === t
            }, s, !0), p = vt(function(e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function(e, n, r) {
                return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }
            ];
            for (; i > l; l++)
                if (n = o.relative[e[l].type])
                    f = [vt(bt(f), n)];
                else {
                    if (n = o.filter[e[l].type].apply(null, e[l].matches),
                    n[b]) {
                        for (r = ++l; i > r; r++)
                            if (o.relative[e[r].type])
                                break;
                        return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                    }
                    f.push(n)
                }
            return bt(f)
        }
        function Ct(e, t) {
            var n = 0
              , r = t.length > 0
              , a = e.length > 0
              , s = function(s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l,
                i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++])
                            if (m(h, l, c)) {
                                p.push(h);
                                break
                            }
                        w && (T = k,
                        i = ++n)
                    }
                    r && ((h = !m && h) && v--,
                    s && x.push(h))
                }
                if (v += b,
                r && b !== v) {
                    g = 0;
                    while (m = t[g++])
                        m(x, y, l, c);
                    if (s) {
                        if (v > 0)
                            while (b--)
                                x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y),
                    w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k,
                u = C),
                x
            };
            return r ? lt(s) : s
        }
        l = at.compile = function(e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)),
                n = t.length;
                while (n--)
                    o = Tt(t[n]),
                    o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        }
        ;
        function Nt(e, t, n) {
            var r = 0
              , i = t.length;
            for (; i > r; r++)
                at(e, t[r], n);
            return n
        }
        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0),
                s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0],
                    !t)
                        return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a],
                    o.relative[c = u.type])
                        break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1),
                        e = i.length && yt(s),
                        !e)
                            return M.apply(n, i),
                            n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)),
            n
        }
        r.sortStable = b.split("").sort(A).join("") === b,
        r.detectDuplicates = S,
        p(),
        r.sortDetached = ut(function(e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }),
        ut(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function(e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }),
        r.attributes && ut(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ct("value", function(e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }),
        ut(function(e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function(e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }),
        x.find = at,
        x.expr = at.selectors,
        x.expr[":"] = x.expr.pseudos,
        x.unique = at.uniqueSort,
        x.text = at.getText,
        x.isXMLDoc = at.isXML,
        x.contains = at.contains
    }(e);
    var O = {};
    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function(t) {
            for (r = e.memory && t,
            i = !0,
            a = s || 0,
            s = 0,
            o = l.length,
            n = !0; l && o > a; a++)
                if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    r = !1;
                    break
                }
            n = !1,
            l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {
            add: function() {
                if (l) {
                    var t = l.length;
                    (function i(t) {
                        x.each(t, function(t, n) {
                            var r = x.type(n);
                            "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    }
                    )(arguments),
                    n ? o = l.length : r && (s = t,
                    c(r))
                }
                return this
            },
            remove: function() {
                return l && x.each(arguments, function(e, t) {
                    var r;
                    while ((r = x.inArray(t, l, r)) > -1)
                        l.splice(r, 1),
                        n && (o >= r && o--,
                        a >= r && a--)
                }),
                this
            },
            has: function(e) {
                return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                o = 0,
                this
            },
            disable: function() {
                return l = u = r = t,
                this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return u = t,
                r || p.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, t) {
                return !l || i && !u || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                n ? u.push(t) : c(t)),
                this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return p
    }
    ,
    x.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", x.Callbacks("once memory"), "resolved"], ["reject", "fail", x.Callbacks("once memory"), "rejected"], ["notify", "progress", x.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return x.Deferred(function(n) {
                        x.each(t, function(t, o) {
                            var a = o[0]
                              , s = x.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? x.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            x.each(t, function(e, o) {
                var a = o[2]
                  , s = o[3];
                r[o[1]] = a.add,
                s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = a.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function(e, t, n) {
                return function(r) {
                    t[e] = this,
                    n[e] = arguments.length > 1 ? g.call(arguments) : r,
                    n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                }
            }, s, l, u;
            if (r > 1)
                for (s = Array(r),
                l = Array(r),
                u = Array(r); r > t; t++)
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
            return i || o.resolveWith(u, n),
            o.promise()
        }
    }),
    x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"),
        d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        n = d.getElementsByTagName("*") || [],
        r = d.getElementsByTagName("a")[0],
        !r || !r.style || !n.length)
            return t;
        s = a.createElement("select"),
        u = s.appendChild(a.createElement("option")),
        o = d.getElementsByTagName("input")[0],
        r.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== d.className,
        t.leadingWhitespace = 3 === d.firstChild.nodeType,
        t.tbody = !d.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!d.getElementsByTagName("link").length,
        t.style = /top/.test(r.getAttribute("style")),
        t.hrefNormalized = "/a" === r.getAttribute("href"),
        t.opacity = /^0.5/.test(r.style.opacity),
        t.cssFloat = !!r.style.cssFloat,
        t.checkOn = !!o.value,
        t.optSelected = u.selected,
        t.enctype = !!a.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        o.checked = !0,
        t.noCloneChecked = o.cloneNode(!0).checked,
        s.disabled = !0,
        t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"),
        o.setAttribute("value", ""),
        t.input = "" === o.getAttribute("value"),
        o.value = "t",
        o.setAttribute("type", "radio"),
        t.radioValue = "t" === o.value,
        o.setAttribute("checked", "t"),
        o.setAttribute("name", "t"),
        l = a.createDocumentFragment(),
        l.appendChild(o),
        t.appendChecked = o.checked,
        t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }),
        d.cloneNode(!0).click());
        for (f in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            d.setAttribute(c = "on" + f, "t"),
            t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t))
            break;
        return t.ownLast = "0" !== f,
        x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"),
            n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
            l.appendChild(n).appendChild(d),
            d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            o = d.getElementsByTagName("td"),
            o[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            p = 0 === o[0].offsetHeight,
            o[0].style.display = "",
            o[1].style.display = "none",
            t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight,
            d.innerHTML = "",
            d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
            x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }),
            e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top,
            t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width,
            r = d.appendChild(a.createElement("div")),
            r.style.cssText = d.style.cssText = s,
            r.style.marginRight = r.style.width = "0",
            d.style.width = "1px",
            t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)),
            typeof d.style.zoom !== i && (d.innerHTML = "",
            d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1",
            t.inlineBlockNeedsLayout = 3 === d.offsetWidth,
            d.style.display = "block",
            d.innerHTML = "<div></div>",
            d.firstChild.style.width = "5px",
            t.shrinkWrapBlocks = 3 !== d.offsetWidth,
            t.inlineBlockNeedsLayout && (l.style.zoom = 1)),
            l.removeChild(n),
            n = d = o = r = null)
        }),
        n = s = l = u = r = o = null,
        t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
      , P = /([A-Z])/g;
    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)
                return c || (c = l ? e[s] = p.pop() || x.guid++ : s),
                u[c] || (u[c] = l ? {} : {
                    toJSON: x.noop
                }),
                ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)),
                a = u[c],
                i || (a.data || (a.data = {}),
                a = a.data),
                r !== t && (a[x.camelCase(n)] = r),
                "string" == typeof n ? (o = a[n],
                null == o && (o = a[x.camelCase(n)])) : o = a,
                o
        }
    }
    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    while (i--)
                        delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r))
                        return
                }
                (n || (delete a[s].data,
                I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando],
            !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                return !1;
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    x.fn.extend({
        data: function(e, n) {
            var r, i, o = null, a = 0, s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s),
                1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++)
                        i = r[a].name,
                        0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)),
                        $(s, i, o[i]));
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i),
            "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else
                r = t
        }
        return r
    }
    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue",
            i = x._data(e, n),
            r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)),
            i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = x._queueHooks(e, t)
              , a = function() {
                x.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, a, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"),
                    x._removeData(e, n)
                })
            })
        }
    }),
    x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e,
            e = "fx",
            r--),
            r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function() {
                --i || o.resolveWith(a, [a])
            };
            "string" != typeof e && (n = e,
            e = t),
            e = e || "fx";
            while (s--)
                r = x._data(a[s], e + "queueHooks"),
                r && r.empty && (i++,
                r.empty.add(l));
            return l(),
            o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).addClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++])
                            0 > r.indexOf(" " + i + " ") && (r += i + " ");
                        n.className = x.trim(r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).removeClass(e.call(this, t, this.className))
                });
            if (l)
                for (t = (e || "").match(T) || []; s > a; a++)
                    if (n = this[a],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++])
                            while (r.indexOf(" " + i + " ") >= 0)
                                r = r.replace(" " + i + " ", " ");
                        n.className = e ? x.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0, o = x(this), a = e.match(T) || [];
                    while (t = a[r++])
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                } else
                    (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            var t = " " + e + " "
              , n = 0
              , r = this.length;
            for (; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length)
                    return i = x.isFunction(e),
                    this.each(function(n) {
                        var o;
                        1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e,
                        null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()],
                        r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                    });
                if (o)
                    return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()],
                    r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value,
                    "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }),
    x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++)
                        if (n = r[l],
                        !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(),
                            o)
                                return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = x.makeArray(t), a = i.length;
                    while (a--)
                        r = i[a],
                        (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(),
                o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)),
                r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n),
                null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""),
                r) : (x.removeAttr(e, n),
                t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(T);
            if (o && 1 === e.nodeType)
                while (n = o[i++])
                    r = x.propFix[n] || n,
                    x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""),
                    e.removeAttribute(Q ? n : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return a = 1 !== s || !x.isXMLDoc(e),
                a && (n = x.propFix[n] || n,
                o = x.propHooks[n]),
                r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n]
              , a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o,
            a
        }
        : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n,
            t) : z && z.set(e, n, r)
        }
    }),
    Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)),
            i.value = n += "",
            "value" === r || n === e.getAttribute(r) ? n : t
        }
    },
    x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }
    ,
    x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    },
    x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    },
    x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"),
                r) : t
            }
        }
    })),
    x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }),
    x.support.enctype || (x.propFix.enctype = "encoding"),
    x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        },
        x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Z = /^(?:input|select|textarea)$/i
      , et = /^key/
      , tt = /^(?:mouse|contextmenu)|click/
      , nt = /^(?:focusinfocus|focusoutblur)$/
      , rt = /^([^.]*)(?:\.(.+)|)$/;
    function it() {
        return !0
    }
    function ot() {
        return !1
    }
    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r,
                r = c.handler,
                a = c.selector),
                r.guid || (r.guid = x.guid++),
                (l = v.events) || (l = v.events = {}),
                (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }
                ,
                f.elem = e),
                n = (n || "").match(T) || [""],
                u = n.length;
                while (u--)
                    s = rt.exec(n[u]) || [],
                    g = y = s[1],
                    m = (s[2] || "").split(".").sort(),
                    g && (p = x.event.special[g] || {},
                    g = (a ? p.delegateType : p.bindType) || g,
                    p = x.event.special[g] || {},
                    d = x.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && x.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c),
                    (h = l[g]) || (h = l[g] = [],
                    h.delegateCount = 0,
                    p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))),
                    p.add && (p.add.call(e, d),
                    d.handler.guid || (d.handler.guid = r.guid)),
                    a ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                    x.event.global[g] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""],
                u = t.length;
                while (u--)
                    if (s = rt.exec(t[u]) || [],
                    d = g = s[1],
                    h = (s[2] || "").split(".").sort(),
                    d) {
                        p = x.event.special[d] || {},
                        d = (r ? p.delegateType : p.bindType) || d,
                        f = c[d] || [],
                        s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = f.length;
                        while (o--)
                            a = f[o],
                            !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1),
                            a.selector && f.delegateCount--,
                            p.remove && p.remove.call(e, a));
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle),
                        delete c[d])
                    } else
                        for (d in c)
                            x.event.remove(e, d + t[u], n, r, !0);
                x.isEmptyObject(c) && (delete m.handle,
                x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a,
            3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."),
            g = m.shift(),
            m.sort()),
            l = 0 > g.indexOf(":") && "on" + g,
            n = n[x.expando] ? n : new x.Event(g,"object" == typeof n && n),
            n.isTrigger = o ? 2 : 3,
            n.namespace = m.join("."),
            n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            n.result = t,
            n.target || (n.target = i),
            r = null == r ? [n] : x.makeArray(r, [n]),
            p = x.event.special[g] || {},
            o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g,
                    nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)
                        h.push(u),
                        f = u;
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped())
                    n.type = d > 1 ? c : p.bindType || g,
                    s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"),
                    s && s.apply(u, r),
                    s = l && u[l],
                    s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
                if (n.type = g,
                !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l],
                    f && (i[l] = null),
                    x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t,
                    f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
            if (l[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u),
                n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem,
                    a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i,
                        e.data = i.data,
                        r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l),
                        r !== t && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [],
                        a = 0; l > a; a++)
                            i = n[a],
                            r = i.selector + " ",
                            o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length),
                            o[r] && o.push(i);
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }),
            s
        },
        fix: function(e) {
            if (e[x.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new x.Event(o),
            t = r.length;
            while (t--)
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || a),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button, l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a,
                o = i.documentElement,
                r = i.body,
                e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0),
                e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)),
                !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(),
                    !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e,
        n && x.extend(this, n),
        this.timeStamp = e && e.timeStamp || x.now(),
        this[x.expando] = !0,
        t) : new x.Event(e,n)
    }
    ,
    x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it,
            this.stopPropagation()
        }
    },
    x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target
                  , r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                x._data(r, "submitBubbles", !0))
            }),
            t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"),
            t)
        }
    }),
    x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                x.event.simulate("change", this, e, !0)
            })),
            !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }),
                x._data(t, "changeBubbles", !0))
            }),
            t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"),
            !Z.test(this.nodeName)
        }
    }),
    x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0
          , r = function(e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }),
    x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n,
                n = t);
                for (a in e)
                    this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n,
            r = n = t) : null == i && ("string" == typeof n ? (i = r,
            r = t) : (i = r,
            r = n,
            n = t)),
            i === !1)
                i = ot;
            else if (!i)
                return this;
            return 1 === o && (s = i,
            i = function(e) {
                return x().off(e),
                s.apply(this, arguments)
            }
            ,
            i.guid = s.guid || (s.guid = x.guid++)),
            this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n,
            n = t),
            r === !1 && (r = ot),
            this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/
      , lt = /^(?:parents|prev(?:Until|All))/
      , ut = x.expr.match.needsContext
      , ct = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    x.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (x.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                x.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? x.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        has: function(e) {
            var t, n = x(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (x.contains(this, n[t]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e)
              , r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function pt(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = x.filter(r, i)),
            this.length > 1 && (ct[e] || (i = x.unique(i)),
            lt.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    }),
    x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = []
              , o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))
                1 === o.nodeType && i.push(o),
                o = o[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    function ft(e, t, n) {
        if (x.isFunction(t))
            return x.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return x.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (st.test(t))
                return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }
    function dt(e) {
        var t = ht.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length)
                n.createElement(t.pop());
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , gt = / jQuery\d+="(?:null|\d+)"/g
      , mt = RegExp("<(?:" + ht + ")[\\s/>]", "i")
      , yt = /^\s+/
      , vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , bt = /<([\w:]+)/
      , xt = /<tbody/i
      , wt = /<|&#?\w+;/
      , Tt = /<(?:script|style|link)/i
      , Ct = /^(?:checkbox|radio)$/i
      , Nt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , kt = /^$|\/(?:java|ecma)script/i
      , Et = /^true\/(.*)/
      , St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , At = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , jt = dt(a)
      , Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option,
    At.tbody = At.tfoot = At.colgroup = At.caption = At.thead,
    At.th = At.td,
    x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this, i = 0;
            for (; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || x.cleanData(Ft(n)),
                n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild)
                    e.removeChild(e.firstChild);
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {}
                  , r = 0
                  , i = this.length;
                if (e === t)
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++)
                            n = this[r] || {},
                            1 === n.nodeType && (x.cleanData(Ft(n, !1)),
                            n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                return [e.nextSibling, e.parentNode]
            })
              , t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++]
                  , i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling),
                x(this).remove(),
                i.insertBefore(n, r))
            }, !0),
            t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = h.call(this, r, i.html())),
                    i.domManip(e, t, n)
                });
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this),
            r = l.firstChild,
            1 === l.childNodes.length && (l = r),
            r)) {
                for (a = x.map(Ft(l, "script"), Ht),
                o = a.length; c > u; u++)
                    i = l,
                    u !== f && (i = x.clone(i, !0, !0),
                    o && x.merge(a, Ft(i, "script"))),
                    t.call(this[u], i, u);
                if (o)
                    for (s = a[a.length - 1].ownerDocument,
                    x.map(a, qt),
                    u = 0; o > u; u++)
                        i = a[u],
                        kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
                l = r = null
            }
            return this
        }
    });
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }
    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle,
                a.events = {};
                for (n in s)
                    for (r = 0,
                    i = s[n].length; i > r; r++)
                        x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }
    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events)
                    x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text,
            qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)
                n = r === a ? this : this.clone(!0),
                x(o[r])[t](n),
                h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [],
            r = e.childNodes || e; null != (o = r[a]); a++)
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }
    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML,
            Dt.removeChild(o = Dt.firstChild)),
            !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))
                for (r = Ft(o),
                s = Ft(e),
                a = 0; null != (i = s[a]); ++a)
                    r[a] && Ot(i, r[a]);
            if (t)
                if (n)
                    for (s = s || Ft(e),
                    r = r || Ft(o),
                    a = 0; null != (i = s[a]); a++)
                        Mt(i, r[a]);
                else
                    Mt(e, o);
            return r = Ft(o, "script"),
            r.length > 0 && _t(r, !l && Ft(e, "script")),
            r = s = i = null,
            o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
            for (; p > h; h++)
                if (o = e[h],
                o || 0 === o)
                    if ("object" === x.type(o))
                        x.merge(d, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                        s = s || f.appendChild(t.createElement("div")),
                        l = (bt.exec(o) || ["", ""])[1].toLowerCase(),
                        c = At[l] || At._default,
                        s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2],
                        i = c[0];
                        while (i--)
                            s = s.lastChild;
                        if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])),
                        !x.support.tbody) {
                            o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild,
                            i = o && o.childNodes.length;
                            while (i--)
                                x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                        }
                        x.merge(d, s.childNodes),
                        s.textContent = "";
                        while (s.firstChild)
                            s.removeChild(s.firstChild);
                        s = f.lastChild
                    } else
                        d.push(t.createTextNode(o));
            s && f.removeChild(s),
            x.support.appendChecked || x.grep(Ft(d, "input"), Bt),
            h = 0;
            while (o = d[h++])
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o),
                s = Ft(f.appendChild(o), "script"),
                a && _t(s),
                n)) {
                    i = 0;
                    while (o = s[i++])
                        kt.test(o.type || "") && n.push(o)
                }
            return s = null,
            f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
            for (; null != (n = e[s]); s++)
                if ((t || x.acceptData(n)) && (o = n[l],
                a = o && u[o])) {
                    if (a.events)
                        for (r in a.events)
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
                    u[o] && (delete u[o],
                    c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null,
                    p.push(o))
                }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e))
                return this.each(function(t) {
                    x(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType)
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {
        BODY: "block"
    }, Qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Kt = {
        letterSpacing: 0,
        fontWeight: 400
    }, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];
    function tn(e, t) {
        if (t in e)
            return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1)
          , r = t
          , i = en.length;
        while (i--)
            if (t = en[i] + n,
            t in e)
                return t;
        return r
    }
    function nn(e, t) {
        return e = t || e,
        "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }
    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)
            r = e[a],
            r.style && (o[a] = x._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[a] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r),
            (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)
            r = e[a],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {}, s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e),
                    i = n.length; i > s; s++)
                        a[n[s]] = x.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }),
    x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n), u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)),
                s = x.cssHooks[n] || x.cssHooks[l],
                r === t)
                    return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
                if (a = typeof r,
                "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)),
                a = "number"),
                !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"),
                x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"),
                s && "set"in s && (r = s.set(e, r, i)) === t)))
                    try {
                        u[n] = r
                    } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)),
            s = x.cssHooks[n] || x.cssHooks[l],
            s && "get"in s && (a = s.get(e, !0, r)),
            a === t && (a = Wt(e, n, i)),
            "normal" === a && n in Kt && (a = Kt[n]),
            "" === r || r ? (o = parseFloat(a),
            r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }),
    e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)),
        Yt.test(l) && Ut.test(n) && (i = u.width,
        o = u.minWidth,
        a = u.maxWidth,
        u.minWidth = u.maxWidth = u.width = l,
        l = s.width,
        u.width = i,
        u.minWidth = o,
        u.maxWidth = a)),
        l
    }
    ) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }
    ,
    Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]),
        Yt.test(l) && !zt.test(n) && (i = u.left,
        o = e.runtimeStyle,
        a = o && o.left,
        a && (o.left = e.currentStyle.left),
        u.left = "fontSize" === n ? "1em" : l,
        l = u.pixelLeft + "px",
        u.left = i,
        a && (o.left = a)),
        "" === l ? "auto" : l
    }
    );
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0
          , a = 0;
        for (; 4 > o; o += 2)
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)),
            r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)),
            "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i),
            "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }
    function sn(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = Rt(e)
          , a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            Yt.test(i))
                return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }
    function ln(e) {
        var t = a
          , n = Gt[e];
        return n || (n = un(e, t),
        "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement),
        t = (Pt[0].contentWindow || Pt[0].contentDocument).document,
        t.write("<!doctype html><html><body>"),
        t.close(),
        n = un(e, t),
        Pt.detach()),
        Gt[e] = n),
        n
    }
    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body)
          , r = x.css(n[0], "display");
        return n.remove(),
        r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }),
    x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }),
        !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n),
                    Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }),
    x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }
    ,
    x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }
    ),
    x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0
                  , i = {}
                  , o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++)
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g
      , pn = /\[\]$/
      , fn = /\r?\n/g
      , dn = /^(?:submit|button|image|reset|file)$/i
      , hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }),
    x.param = function(e, n) {
        var r, i = [], o = function(e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t,
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional),
        x.isArray(e) || e.jquery && !x.isPlainObject(e))
            x.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (r in e)
                gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    }
    ;
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))
            x.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== x.type(t))
            r(e, t);
        else
            for (i in t)
                gn(e + "[" + i + "]", t[i], n, r)
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"),
        yn.href = "",
        yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))
                while (r = o[i++])
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function qn(e, n, r, i) {
        var o = {}
          , a = e === jn;
        function s(l) {
            var u;
            return o[l] = !0,
            x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c),
                s(c),
                !1)
            }),
            u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }
    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n)
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r),
        e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn)
            return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length),
        e = e.slice(0, l)),
        x.isFunction(n) ? (r = n,
        n = t) : n && "object" == typeof n && (a = "POST"),
        s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e,
            e = t),
            n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!c) {
                            c = {};
                            while (t = Tn.exec(a))
                                c[t[1].toLowerCase()] = t[2]
                        }
                        t = c[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = v[n] = v[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return b || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > b)
                            for (t in e)
                                m[t] = [m[t], e[t]];
                        else
                            C.always(e[C.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return u && u.abort(t),
                    k(0, t),
                    this
                }
            };
            if (h.promise(C).complete = g.add,
            C.success = C.done,
            C.error = C.fail,
            p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""],
            null == p.crossDomain && (r = En.exec(p.url.toLowerCase()),
            p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)),
            qn(An, p, n, C),
            2 === b)
                return C;
            l = p.global,
            l && 0 === x.active++ && x.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Nn.test(p.type),
            o = p.url,
            p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data,
            delete p.data),
            p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)),
            p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]),
            x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])),
            (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers)
                C.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))
                return C.abort();
            w = "abort";
            for (i in {
                success: 1,
                error: 1,
                complete: 1
            })
                C[i](p[i]);
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1,
                l && d.trigger("ajaxSend", [C, p]),
                p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1,
                    u.send(y, k)
                } catch (N) {
                    if (!(2 > b))
                        throw N;
                    k(-1, N)
                }
            } else
                k(-1, "No Transport");
            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2,
                s && clearTimeout(s),
                u = t,
                a = i || "",
                C.readyState = e > 0 ? 4 : 0,
                c = e >= 200 && 300 > e || 304 === e,
                r && (w = Mn(p, C, r)),
                w = On(p, w, C, c),
                c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"),
                T && (x.lastModified[o] = T),
                T = C.getResponseHeader("etag"),
                T && (x.etag[o] = T)),
                204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state,
                y = w.data,
                v = w.error,
                c = !v)) : (v = N,
                (e || !N) && (N = "error",
                0 > e && (e = 0))),
                C.status = e,
                C.statusText = (n || N) + "",
                c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]),
                C.statusCode(m),
                m = t,
                l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]),
                g.fireWith(f, [C, N]),
                l && (d.trigger("ajaxComplete", [C, p]),
                --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }),
    x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i,
            i = r,
            r = t),
            x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0])
            u.shift(),
            o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (s in l)
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
        if (u[0]in r)
            a = u[0];
        else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a),
        r[a]) : t
    }
    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (a in e.converters)
                u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (a = u[l + " " + o] || u["* " + o],
                    !a)
                        for (i in u)
                            if (s = i.split(" "),
                            s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (a !== !0)
                        if (a && e["throws"])
                            t = a(t);
                        else
                            try {
                                t = a(t)
                            } catch (p) {
                                return {
                                    state: "parsererror",
                                    error: a ? p : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e),
                e
            }
        }
    }),
    x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                        n.parentNode && n.parentNode.removeChild(n),
                        n = null,
                        t || i(200, "success"))
                    }
                    ,
                    r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = []
      , Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0,
            e
        }
    }),
    x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback,
        l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o),
        n.converters["script json"] = function() {
            return s || x.error(o + " was not called"),
            s[0]
        }
        ,
        n.dataTypes[0] = "json",
        a = e[o],
        e[o] = function() {
            s = arguments
        }
        ,
        i.always(function() {
            e[o] = a,
            n[o] && (n.jsonpCallback = r.jsonpCallback,
            Fn.push(o)),
            s && x.isFunction(a) && a(s[0]),
            s = a = t
        }),
        "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function() {
        var e;
        for (e in Pn)
            Pn[e](t, !0)
    }
    ;
    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    }
    : In,
    Rn = x.ajaxSettings.xhr(),
    x.support.cors = !!Rn && "withCredentials"in Rn,
    Rn = x.support.ajax = !!Rn,
    Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async),
                    n.xhrFields)
                        for (s in n.xhrFields)
                            l[s] = n.xhrFields[s];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)
                            l.setRequestHeader(s, i[s])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null),
                    r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t,
                                a && (l.onreadystatechange = x.noop,
                                $n && delete Pn[a]),
                                i)
                                    4 !== l.readyState && l.abort();
                                else {
                                    p = {},
                                    s = l.status,
                                    u = l.getAllResponseHeaders(),
                                    "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }
                    ,
                    n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn,
                    $n && (Pn || (Pn = {},
                    x(e).unload($n)),
                    Pn[a] = r),
                    l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = Yn.exec(t)
              , o = i && i[3] || (x.cssNumber[e] ? "" : "px")
              , a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e))
              , s = 1
              , l = 20;
            if (a && a[3] !== o) {
                o = o || a[3],
                i = i || [],
                a = +r || 1;
                do
                    s = s || ".5",
                    a /= s,
                    x.style(n.elem, e, a + o);
                while (s !== (s = n.cur() / r) && 1 !== s && --l)
            }
            return i && (a = n.start = +a || +r || 0,
            n.unit = o,
            n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    function Kn() {
        return setTimeout(function() {
            Xn = t
        }),
        Xn = x.now()
    }
    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i)
                return !1;
            var t = Xn || Kn()
              , n = Math.max(0, u.startTime + u.duration - t)
              , r = n / u.duration || 0
              , o = 1 - r
              , a = 0
              , l = u.tweens.length;
            for (; l > a; a++)
                u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]),
            1 > o && l ? n : (s.resolveWith(e, [u]),
            !1)
        }, u = s.promise({
            elem: e,
            props: x.extend({}, t),
            opts: x.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Xn || Kn(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    u.tweens[n].run(1);
                return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)
            if (r = Gn[o].call(u, e, c, u.opts))
                return r;
        return x.map(c, Zn, u),
        x.isFunction(u.opts.start) && u.opts.start.call(e, u),
        x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (r = x.camelCase(n),
            i = t[r],
            o = e[n],
            x.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            a = x.cssHooks[r],
            a && "expand"in a) {
                o = a.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; i > r; r++)
                n = e[r],
                Qn[n] = Qn[n] || [],
                Qn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        u.always(function() {
            u.always(function() {
                s.unqueued--,
                x.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
        "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden",
        x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            Vn.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (f ? "hide" : "show"))
                    continue;
                c[r] = d && d[r] || x.style(e, r)
            }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}),
            o && (d.hidden = !f),
            f ? x(e).show() : u.done(function() {
                x(e).hide()
            }),
            u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c)
                    x.style(e, t, c[t])
            });
            for (r in c)
                a = Zn(f ? d[r] : 0, r, u),
                r in d || (d[r] = a.start,
                f && (a.end = a.start,
                a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e,t,n,r,i)
    }
    x.Tween = rr,
    rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : rr.propHooks._default.set(this),
            this
        }
    },
    rr.prototype.init.prototype = rr.prototype,
    rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }),
    x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e)
              , o = x.speed(t, n, r)
              , a = function() {
                var t = er(this, x.extend({}, e), o);
                (i || x._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a,
            i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop,
                t(r)
            };
            return "string" != typeof e && (r = n,
            n = e,
            e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , n = null != e && e + "queueHooks"
                  , o = x.timers
                  , a = x._data(this);
                if (n)
                    a[n] && a[n].stop && i(a[n]);
                else
                    for (n in a)
                        a[n] && a[n].stop && Jn.test(n) && i(a[n]);
                for (n = o.length; n--; )
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r),
                    t = !1,
                    o.splice(n, 1));
                (t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
                for (n.finish = !0,
                x.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; a > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    });
    function ir(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = Zt[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            x.isFunction(r.old) && r.old.call(this),
            r.queue && x.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    x.timers = [],
    x.fx = rr.prototype.init,
    x.fx.tick = function() {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++)
            e = n[r],
            e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(),
        Xn = t
    }
    ,
    x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }
    ,
    x.fx.interval = 13,
    x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }
    ,
    x.fx.stop = function() {
        clearInterval(Un),
        Un = null
    }
    ,
    x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    x.fx.step = {},
    x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }
    ),
    x.fn.offset = function(e) {
        if (arguments.length)
            return e === t ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            });
        var n, r, o = {
            top: 0,
            left: 0
        }, a = this[0], s = a && a.ownerDocument;
        if (s)
            return n = s.documentElement,
            x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()),
            r = or(s),
            {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
    }
    ,
    x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
            l ? (c = i.position(),
            p = c.top,
            f = c.left) : (p = parseFloat(a) || 0,
            f = parseFloat(s) || 0),
            x.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (u.top = t.top - o.top + p),
            null != t.left && (u.left = t.left - o.left + f),
            "using"in t ? t.using.call(e, u) : i.css(u)
        }
    },
    x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                x.nodeName(e[0], "html") || (n = e.offset()),
                n.top += x.css(e[0], "borderTopWidth", !0),
                n.left += x.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))
                    e = e.offsetParent;
                return e || s
            })
        }
    }),
    x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o,
                t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i)
                  , s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement,
                    Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }),
    x.fn.size = function() {
        return this.length
    }
    ,
    x.fn.andSelf = x.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
}
)(window);
if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function($) {
    'use strict';
    function transitionEnd() {
        var el = document.createElement('bootstrap')
        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        }
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                }
            }
        }
        return false
    }
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false
        var $el = this
        $(this).one('bsTransitionEnd', function() {
            called = true
        })
        var callback = function() {
            if (!called)
                $($el).trigger($.support.transition.end)
        }
        setTimeout(callback, duration)
        return this
    }
    $(function() {
        $.support.transition = transitionEnd()
        if (!$.support.transition)
            return
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        }
    })
}(jQuery);
+function($) {
    'use strict';
    var dismiss = '[data-dismiss="alert"]'
    var Alert = function(el) {
        $(el).on('click', dismiss, this.close)
    }
    Alert.VERSION = '3.2.0'
    Alert.prototype.close = function(e) {
        var $this = $(this)
        var selector = $this.attr('data-target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        var $parent = $(selector)
        if (e)
            e.preventDefault()
        if (!$parent.length) {
            $parent = $this.hasClass('alert') ? $this : $this.parent()
        }
        $parent.trigger(e = $.Event('close.bs.alert'))
        if (e.isDefaultPrevented())
            return
        $parent.removeClass('in')
        function removeElement() {
            $parent.detach().trigger('closed.bs.alert').remove()
        }
        $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(150) : removeElement()
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.alert')
            if (!data)
                $this.data('bs.alert', (data = new Alert(this)))
            if (typeof option == 'string')
                data[option].call($this)
        })
    }
    var old = $.fn.alert
    $.fn.alert = Plugin
    $.fn.alert.Constructor = Alert
    $.fn.alert.noConflict = function() {
        $.fn.alert = old
        return this
    }
    $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
}(jQuery);
+function($) {
    'use strict';
    var Button = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Button.DEFAULTS, options)
        this.isLoading = false
    }
    Button.VERSION = '3.2.0'
    Button.DEFAULTS = {
        loadingText: 'loading...'
    }
    Button.prototype.setState = function(state) {
        var d = 'disabled'
        var $el = this.$element
        var val = $el.is('input') ? 'val' : 'html'
        var data = $el.data()
        state = state + 'Text'
        if (data.resetText == null)
            $el.data('resetText', $el[val]())
        $el[val](data[state] == null ? this.options[state] : data[state])
        setTimeout($.proxy(function() {
            if (state == 'loadingText') {
                this.isLoading = true
                $el.addClass(d).attr(d, d)
            } else if (this.isLoading) {
                this.isLoading = false
                $el.removeClass(d).removeAttr(d)
            }
        }, this), 0)
    }
    Button.prototype.toggle = function() {
        var changed = true
        var $parent = this.$element.closest('[data-toggle="buttons"]')
        if ($parent.length) {
            var $input = this.$element.find('input')
            if ($input.prop('type') == 'radio') {
                if ($input.prop('checked') && this.$element.hasClass('active'))
                    changed = false
                else
                    $parent.find('.active').removeClass('active')
            }
            if (changed)
                $input.prop('checked', !this.$element.hasClass('active')).trigger('change')
        }
        if (changed)
            this.$element.toggleClass('active')
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.button')
            var options = typeof option == 'object' && option
            if (!data)
                $this.data('bs.button', (data = new Button(this,options)))
            if (option == 'toggle')
                data.toggle()
            else if (option)
                data.setState(option)
        })
    }
    var old = $.fn.button
    $.fn.button = Plugin
    $.fn.button.Constructor = Button
    $.fn.button.noConflict = function() {
        $.fn.button = old
        return this
    }
    $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function(e) {
        var $btn = $(e.target)
        if (!$btn.hasClass('btn'))
            $btn = $btn.closest('.btn')
        Plugin.call($btn, 'toggle')
        e.preventDefault()
    })
}(jQuery);
+function($) {
    'use strict';
    var Carousel = function(element, options) {
        this.$element = $(element).on('keydown.bs.carousel', $.proxy(this.keydown, this))
        this.$indicators = this.$element.find('.carousel-indicators')
        this.options = options
        this.paused = this.sliding = this.interval = this.$active = this.$items = null
        this.options.pause == 'hover' && this.$element.on('mouseenter.bs.carousel', $.proxy(this.pause, this)).on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
    }
    Carousel.VERSION = '3.2.0'
    Carousel.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: true
    }
    Carousel.prototype.keydown = function(e) {
        switch (e.which) {
        case 37:
            this.prev();
            break
        case 39:
            this.next();
            break
        default:
            return
        }
        e.preventDefault()
    }
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false)
        this.interval && clearInterval(this.interval)
        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
        return this
    }
    Carousel.prototype.getItemIndex = function(item) {
        this.$items = item.parent().children('.item')
        return this.$items.index(item || this.$active)
    }
    Carousel.prototype.to = function(pos) {
        var that = this
        var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))
        if (pos > (this.$items.length - 1) || pos < 0)
            return
        if (this.sliding)
            return this.$element.one('slid.bs.carousel', function() {
                that.to(pos)
            })
        if (activeIndex == pos)
            return this.pause().cycle()
        return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }
    Carousel.prototype.pause = function(e) {
        e || (this.paused = true)
        if (this.$element.find('.next, .prev').length && $.support.transition) {
            this.$element.trigger($.support.transition.end)
            this.cycle(true)
        }
        this.interval = clearInterval(this.interval)
        return this
    }
    Carousel.prototype.next = function() {
        if (this.sliding)
            return
        return this.slide('next')
    }
    Carousel.prototype.prev = function() {
        if (this.sliding)
            return
        return this.slide('prev')
    }
    Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find('.item.active')
        var $next = next || $active[type]()
        var isCycling = this.interval
        var direction = type == 'next' ? 'left' : 'right'
        var fallback = type == 'next' ? 'first' : 'last'
        var that = this
        if (!$next.length) {
            if (!this.options.wrap)
                return
            $next = this.$element.find('.item')[fallback]()
        }
        if ($next.hasClass('active'))
            return (this.sliding = false)
        var relatedTarget = $next[0]
        var slideEvent = $.Event('slide.bs.carousel', {
            relatedTarget: relatedTarget,
            direction: direction
        })
        this.$element.trigger(slideEvent)
        if (slideEvent.isDefaultPrevented())
            return
        this.sliding = true
        isCycling && this.pause()
        if (this.$indicators.length) {
            this.$indicators.find('.active').removeClass('active')
            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
            $nextIndicator && $nextIndicator.addClass('active')
        }
        var slidEvent = $.Event('slid.bs.carousel', {
            relatedTarget: relatedTarget,
            direction: direction
        })
        if ($.support.transition && this.$element.hasClass('slide')) {
            $next.addClass(type)
            $next[0].offsetWidth
            $active.addClass(direction)
            $next.addClass(direction)
            $active.one('bsTransitionEnd', function() {
                $next.removeClass([type, direction].join(' ')).addClass('active')
                $active.removeClass(['active', direction].join(' '))
                that.sliding = false
                setTimeout(function() {
                    that.$element.trigger(slidEvent)
                }, 0)
            }).emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)
        } else {
            $active.removeClass('active')
            $next.addClass('active')
            this.sliding = false
            this.$element.trigger(slidEvent)
        }
        isCycling && this.cycle()
        return this
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.carousel')
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
            var action = typeof option == 'string' ? option : options.slide
            if (!data)
                $this.data('bs.carousel', (data = new Carousel(this,options)))
            if (typeof option == 'number')
                data.to(option)
            else if (action)
                data[action]()
            else if (options.interval)
                data.pause().cycle()
        })
    }
    var old = $.fn.carousel
    $.fn.carousel = Plugin
    $.fn.carousel.Constructor = Carousel
    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old
        return this
    }
    $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function(e) {
        var href
        var $this = $(this)
        var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''))
        if (!$target.hasClass('carousel'))
            return
        var options = $.extend({}, $target.data(), $this.data())
        var slideIndex = $this.attr('data-slide-to')
        if (slideIndex)
            options.interval = false
        Plugin.call($target, options)
        if (slideIndex) {
            $target.data('bs.carousel').to(slideIndex)
        }
        e.preventDefault()
    })
    $(window).on('load', function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this)
            Plugin.call($carousel, $carousel.data())
        })
    })
}(jQuery);
+function($) {
    'use strict';
    var Collapse = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.transitioning = null
        if (this.options.parent)
            this.$parent = $(this.options.parent)
        if (this.options.toggle)
            this.toggle()
    }
    Collapse.VERSION = '3.2.0'
    Collapse.DEFAULTS = {
        toggle: true
    }
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass('in'))
            return
        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented())
            return
        var actives = this.$parent && this.$parent.find('> .panel > .in')
        if (actives && actives.length) {
            var hasData = actives.data('bs.collapse')
            if (hasData && hasData.transitioning)
                return
            Plugin.call(actives, 'hide')
            hasData || actives.data('bs.collapse', null)
        }
        var dimension = this.dimension()
        this.$element.removeClass('collapse').addClass('collapsing')[dimension](0)
        this.transitioning = 1
        var complete = function() {
            this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('')
            this.transitioning = 0
            this.$element.trigger('shown.bs.collapse')
        }
        if (!$.support.transition)
            return complete.call(this)
        var scrollSize = $.camelCase(['scroll', dimension].join('-'))
        this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
    }
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass('in'))
            return
        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented())
            return
        var dimension = this.dimension()
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight
        this.$element.addClass('collapsing').removeClass('collapse').removeClass('in')
        this.transitioning = 1
        var complete = function() {
            this.transitioning = 0
            this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse')
        }
        if (!$.support.transition)
            return complete.call(this)
        this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(350)
    }
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data && options.toggle && option == 'show')
                option = !option
            if (!data)
                $this.data('bs.collapse', (data = new Collapse(this,options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    var old = $.fn.collapse
    $.fn.collapse = Plugin
    $.fn.collapse.Constructor = Collapse
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old
        return this
    }
    $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function(e) {
        var href
        var $this = $(this)
        var target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
        var $target = $(target)
        var data = $target.data('bs.collapse')
        var option = data ? 'toggle' : $this.data()
        var parent = $this.attr('data-parent')
        var $parent = parent && $(parent)
        if (!data || !data.transitioning) {
            if ($parent)
                $parent.find('[data-toggle="collapse"][data-parent="' + parent + '"]').not($this).addClass('collapsed')
            $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
        }
        Plugin.call($target, option)
    })
}(jQuery);
+function($) {
    'use strict';
    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle="dropdown"]'
    var Dropdown = function(element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }
    Dropdown.VERSION = '3.2.0'
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this)
        if ($this.is('.disabled, :disabled'))
            return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        clearMenus()
        if (!isActive) {
            if ('ontouchstart'in document.documentElement && !$parent.closest('.navbar-nav').length) {
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
            }
            var relatedTarget = {
                relatedTarget: this
            }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented())
                return
            $this.trigger('focus')
            $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget)
        }
        return false
    }
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27)/.test(e.keyCode))
            return
        var $this = $(this)
        e.preventDefault()
        e.stopPropagation()
        if ($this.is('.disabled, :disabled'))
            return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        if (!isActive || (isActive && e.keyCode == 27)) {
            if (e.which == 27)
                $parent.find(toggle).trigger('focus')
            return $this.trigger('click')
        }
        var desc = ' li:not(.divider):visible a'
        var $items = $parent.find('[role="menu"]' + desc + ', [role="listbox"]' + desc)
        if (!$items.length)
            return
        var index = $items.index($items.filter(':focus'))
        if (e.keyCode == 38 && index > 0)
            index--
        if (e.keyCode == 40 && index < $items.length - 1)
            index++
        if (!~index)
            index = 0
        $items.eq(index).trigger('focus')
    }
    function clearMenus(e) {
        if (e && e.which === 3)
            return
        $(backdrop).remove()
        $(toggle).each(function() {
            var $parent = getParent($(this))
            var relatedTarget = {
                relatedTarget: this
            }
            if (!$parent.hasClass('open'))
                return
            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented())
                return
            $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
        })
    }
    function getParent($this) {
        var selector = $this.attr('data-target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        var $parent = selector && $(selector)
        return $parent && $parent.length ? $parent : $this.parent()
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.dropdown')
            if (!data)
                $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string')
                data[option].call($this)
        })
    }
    var old = $.fn.dropdown
    $.fn.dropdown = Plugin
    $.fn.dropdown.Constructor = Dropdown
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old
        return this
    }
    $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
        e.stopPropagation()
    }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle + ', [role="menu"], [role="listbox"]', Dropdown.prototype.keydown)
}(jQuery);
+function($) {
    'use strict';
    var Modal = function(element, options) {
        this.options = options
        this.$body = $(document.body)
        this.$element = $(element)
        this.$backdrop = this.isShown = null
        this.scrollbarWidth = 0
        if (this.options.remote) {
            this.$element.find('.modal-content').load(this.options.remote, $.proxy(function() {
                this.$element.trigger('loaded.bs.modal')
            }, this))
        }
    }
    Modal.VERSION = '3.2.0'
    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }
    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget)
    }
    Modal.prototype.show = function(_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.modal', {
            relatedTarget: _relatedTarget
        })
        this.$element.trigger(e)
        if (this.isShown || e.isDefaultPrevented())
            return
        this.isShown = true
        this.checkScrollbar()
        this.$body.addClass('modal-open')
        this.setScrollbar()
        this.escape()
        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass('fade')
            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body)
            }
            that.$element.show().scrollTop(0)
            if (transition) {
                that.$element[0].offsetWidth
            }
            that.$element.addClass('in').attr('aria-hidden', false)
            that.enforceFocus()
            var e = $.Event('shown.bs.modal', {
                relatedTarget: _relatedTarget
            })
            transition ? that.$element.find('.modal-dialog').one('bsTransitionEnd', function() {
                that.$element.trigger('focus').trigger(e)
            }).emulateTransitionEnd(300) : that.$element.trigger('focus').trigger(e)
        })
    }
    Modal.prototype.hide = function(e) {
        if (e)
            e.preventDefault()
        e = $.Event('hide.bs.modal')
        this.$element.trigger(e)
        if (!this.isShown || e.isDefaultPrevented())
            return
        this.isShown = false
        this.$body.removeClass('modal-open')
        this.resetScrollbar()
        this.escape()
        $(document).off('focusin.bs.modal')
        this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal')
        $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
    }
    Modal.prototype.enforceFocus = function() {
        $(document).off('focusin.bs.modal').on('focusin.bs.modal', $.proxy(function(e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.trigger('focus')
            }
        }, this))
    }
    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keyup.dismiss.bs.modal', $.proxy(function(e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keyup.dismiss.bs.modal')
        }
    }
    Modal.prototype.hideModal = function() {
        var that = this
        this.$element.hide()
        this.backdrop(function() {
            that.$element.trigger('hidden.bs.modal')
        })
    }
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }
    Modal.prototype.backdrop = function(callback) {
        var that = this
        var animate = this.$element.hasClass('fade') ? 'fade' : ''
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate
            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(this.$body)
            this.$element.on('click.dismiss.bs.modal', $.proxy(function(e) {
                if (e.target !== e.currentTarget)
                    return
                this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
            }, this))
            if (doAnimate)
                this.$backdrop[0].offsetWidth
            this.$backdrop.addClass('in')
            if (!callback)
                return
            doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(150) : callback()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')
            var callbackRemove = function() {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(150) : callbackRemove()
        } else if (callback) {
            callback()
        }
    }
    Modal.prototype.checkScrollbar = function() {
        if (document.body.clientWidth >= window.innerWidth)
            return
        this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar()
    }
    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
        if (this.scrollbarWidth)
            this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
    }
    Modal.prototype.resetScrollbar = function() {
        this.$body.css('padding-right', '')
    }
    Modal.prototype.measureScrollbar = function() {
        var scrollDiv = document.createElement('div')
        scrollDiv.className = 'modal-scrollbar-measure'
        this.$body.append(scrollDiv)
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
        this.$body[0].removeChild(scrollDiv)
        return scrollbarWidth
    }
    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data)
                $this.data('bs.modal', (data = new Modal(this,options)))
            if (typeof option == 'string')
                data[option](_relatedTarget)
            else if (options.show)
                data.show(_relatedTarget)
        })
    }
    var old = $.fn.modal
    $.fn.modal = Plugin
    $.fn.modal.Constructor = Modal
    $.fn.modal.noConflict = function() {
        $.fn.modal = old
        return this
    }
    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')))
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data())
        if ($this.is('a'))
            e.preventDefault()
        $target.one('show.bs.modal', function(showEvent) {
            if (showEvent.isDefaultPrevented())
                return
            $target.one('hidden.bs.modal', function() {
                $this.is(':visible') && $this.trigger('focus')
            })
        })
        Plugin.call($target, option, this)
    })
}(jQuery);
+function($) {
    'use strict';
    var Tooltip = function(element, options) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null
        this.init('tooltip', element, options)
    }
    Tooltip.VERSION = '3.2.0'
    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: 'body',
            padding: 0
        }
    }
    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)
        this.$viewport = this.options.viewport && $(this.options.viewport.selector || this.options.viewport)
        var triggers = this.options.trigger.split(' ')
        for (var i = triggers.length; i--; ) {
            var trigger = triggers[i]
            if (trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        this.options.selector ? (this._options = $.extend({}, this.options, {
            trigger: 'manual',
            selector: ''
        })) : this.fixTitle()
    }
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS
    }
    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options)
        if (options.delay && typeof options.delay == 'number') {
            options.delay = {
                show: options.delay,
                hide: options.delay
            }
        }
        return options
    }
    Tooltip.prototype.getDelegateOptions = function() {
        var options = {}
        var defaults = this.getDefaults()
        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value)
                options[key] = value
        })
        return options
    }
    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type)
        if (!self) {
            self = new this.constructor(obj.currentTarget,this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }
        clearTimeout(self.timeout)
        self.hoverState = 'in'
        if (!self.options.delay || !self.options.delay.show)
            return self.show()
        self.timeout = setTimeout(function() {
            if (self.hoverState == 'in')
                self.show()
        }, self.options.delay.show)
    }
    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data('bs.' + this.type)
        if (!self) {
            self = new this.constructor(obj.currentTarget,this.getDelegateOptions())
            $(obj.currentTarget).data('bs.' + this.type, self)
        }
        clearTimeout(self.timeout)
        self.hoverState = 'out'
        if (!self.options.delay || !self.options.delay.hide)
            return self.hide()
        self.timeout = setTimeout(function() {
            if (self.hoverState == 'out')
                self.hide()
        }, self.options.delay.hide)
    }
    Tooltip.prototype.show = function() {
        var e = $.Event('show.bs.' + this.type)
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e)
            var inDom = $.contains(document.documentElement, this.$element[0])
            if (e.isDefaultPrevented() || !inDom)
                return
            var that = this
            var $tip = this.tip()
            var tipId = this.getUID(this.type)
            this.setContent()
            $tip.attr('id', tipId)
            this.$element.attr('aria-describedby', tipId)
            if (this.options.animation)
                $tip.addClass('fade')
            var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement
            var autoToken = /\s?auto?\s?/i
            var autoPlace = autoToken.test(placement)
            if (autoPlace)
                placement = placement.replace(autoToken, '') || 'top'
            $tip.detach().css({
                top: 0,
                left: 0,
                display: 'block'
            }).addClass(placement).data('bs.' + this.type, this)
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
            var pos = this.getPosition()
            var actualWidth = $tip[0].offsetWidth
            var actualHeight = $tip[0].offsetHeight
            if (autoPlace) {
                var orgPlacement = placement
                var $parent = this.$element.parent()
                var parentDim = this.getPosition($parent)
                placement = placement == 'bottom' && pos.top + pos.height + actualHeight - parentDim.scroll > parentDim.height ? 'top' : placement == 'top' && pos.top - parentDim.scroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < parentDim.left ? 'right' : placement
                $tip.removeClass(orgPlacement).addClass(placement)
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
            this.applyPlacement(calculatedOffset, placement)
            var complete = function() {
                that.$element.trigger('shown.bs.' + that.type)
                that.hoverState = null
            }
            $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(150) : complete()
        }
    }
    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip()
        var width = $tip[0].offsetWidth
        var height = $tip[0].offsetHeight
        var marginTop = parseInt($tip.css('margin-top'), 10)
        var marginLeft = parseInt($tip.css('margin-left'), 10)
        if (isNaN(marginTop))
            marginTop = 0
        if (isNaN(marginLeft))
            marginLeft = 0
        offset.top = offset.top + marginTop
        offset.left = offset.left + marginLeft
        $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                })
            }
        }, offset), 0)
        $tip.addClass('in')
        var actualWidth = $tip[0].offsetWidth
        var actualHeight = $tip[0].offsetHeight
        if (placement == 'top' && actualHeight != height) {
            offset.top = offset.top + height - actualHeight
        }
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
        if (delta.left)
            offset.left += delta.left
        else
            offset.top += delta.top
        var arrowDelta = delta.left ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
        var arrowPosition = delta.left ? 'left' : 'top'
        var arrowOffsetPosition = delta.left ? 'offsetWidth' : 'offsetHeight'
        $tip.offset(offset)
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], arrowPosition)
    }
    Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
        this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
    }
    Tooltip.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()
        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
    }
    Tooltip.prototype.hide = function() {
        var that = this
        var $tip = this.tip()
        var e = $.Event('hide.bs.' + this.type)
        this.$element.removeAttr('aria-describedby')
        function complete() {
            if (that.hoverState != 'in')
                $tip.detach()
            that.$element.trigger('hidden.bs.' + that.type)
        }
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
            return
        $tip.removeClass('in')
        $.support.transition && this.$tip.hasClass('fade') ? $tip.one('bsTransitionEnd', complete).emulateTransitionEnd(150) : complete()
        this.hoverState = null
        return this
    }
    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element
        if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
            $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
    }
    Tooltip.prototype.hasContent = function() {
        return this.getTitle()
    }
    Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element
        var el = $element[0]
        var isBody = el.tagName == 'BODY'
        return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : null, {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop(),
            width: isBody ? $(window).width() : $element.outerWidth(),
            height: isBody ? $(window).height() : $element.outerHeight()
        }, isBody ? {
            top: 0,
            left: 0
        } : $element.offset())
    }
    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == 'top' ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == 'left' ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        }
    }
    Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        }
        if (!this.$viewport)
            return delta
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
        var viewportDimensions = this.getPosition(this.$viewport)
        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
            if (topEdgeOffset < viewportDimensions.top) {
                delta.top = viewportDimensions.top - topEdgeOffset
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth
            if (leftEdgeOffset < viewportDimensions.left) {
                delta.left = viewportDimensions.left - leftEdgeOffset
            } else if (rightEdgeOffset > viewportDimensions.width) {
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
            }
        }
        return delta
    }
    Tooltip.prototype.getTitle = function() {
        var title
        var $e = this.$element
        var o = this.options
        title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)
        return title
    }
    Tooltip.prototype.getUID = function(prefix) {
        do
            prefix += ~~(Math.random() * 1000000)
        while (document.getElementById(prefix))return prefix
    }
    Tooltip.prototype.tip = function() {
        return (this.$tip = this.$tip || $(this.options.template))
    }
    Tooltip.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
    }
    Tooltip.prototype.validate = function() {
        if (!this.$element[0].parentNode) {
            this.hide()
            this.$element = null
            this.options = null
        }
    }
    Tooltip.prototype.enable = function() {
        this.enabled = true
    }
    Tooltip.prototype.disable = function() {
        this.enabled = false
    }
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    Tooltip.prototype.toggle = function(e) {
        var self = this
        if (e) {
            self = $(e.currentTarget).data('bs.' + this.type)
            if (!self) {
                self = new this.constructor(e.currentTarget,this.getDelegateOptions())
                $(e.currentTarget).data('bs.' + this.type, self)
            }
        }
        self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
    Tooltip.prototype.destroy = function() {
        clearTimeout(this.timeout)
        this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tooltip')
            var options = typeof option == 'object' && option
            if (!data && option == 'destroy')
                return
            if (!data)
                $this.data('bs.tooltip', (data = new Tooltip(this,options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    var old = $.fn.tooltip
    $.fn.tooltip = Plugin
    $.fn.tooltip.Constructor = Tooltip
    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old
        return this
    }
}(jQuery);
+function($) {
    'use strict';
    var Popover = function(element, options) {
        this.init('popover', element, options)
    }
    if (!$.fn.tooltip)
        throw new Error('Popover requires tooltip.js')
    Popover.VERSION = '3.2.0'
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    })
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
    Popover.prototype.constructor = Popover
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS
    }
    Popover.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()
        var content = this.getContent()
        $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
        $tip.find('.popover-content').empty()[this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'](content)
        $tip.removeClass('fade top bottom left right in')
        if (!$tip.find('.popover-title').html())
            $tip.find('.popover-title').hide()
    }
    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    Popover.prototype.getContent = function() {
        var $e = this.$element
        var o = this.options
        return $e.attr('data-content') || (typeof o.content == 'function' ? o.content.call($e[0]) : o.content)
    }
    Popover.prototype.arrow = function() {
        return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
    }
    Popover.prototype.tip = function() {
        if (!this.$tip)
            this.$tip = $(this.options.template)
        return this.$tip
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.popover')
            var options = typeof option == 'object' && option
            if (!data && option == 'destroy')
                return
            if (!data)
                $this.data('bs.popover', (data = new Popover(this,options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    var old = $.fn.popover
    $.fn.popover = Plugin
    $.fn.popover.Constructor = Popover
    $.fn.popover.noConflict = function() {
        $.fn.popover = old
        return this
    }
}(jQuery);
+function($) {
    'use strict';
    function ScrollSpy(element, options) {
        var process = $.proxy(this.process, this)
        this.$body = $('body')
        this.$scrollElement = $(element).is('body') ? $(window) : $(element)
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
        this.selector = (this.options.target || '') + ' .nav li > a'
        this.offsets = []
        this.targets = []
        this.activeTarget = null
        this.scrollHeight = 0
        this.$scrollElement.on('scroll.bs.scrollspy', process)
        this.refresh()
        this.process()
    }
    ScrollSpy.VERSION = '3.2.0'
    ScrollSpy.DEFAULTS = {
        offset: 10
    }
    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ScrollSpy.prototype.refresh = function() {
        var offsetMethod = 'offset'
        var offsetBase = 0
        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = 'position'
            offsetBase = this.$scrollElement.scrollTop()
        }
        this.offsets = []
        this.targets = []
        this.scrollHeight = this.getScrollHeight()
        var self = this
        this.$body.find(this.selector).map(function() {
            var $el = $(this)
            var href = $el.data('target') || $el.attr('href')
            var $href = /^#./.test(href) && $(href)
            return ($href && $href.length && $href.is(':visible') && [[$href[offsetMethod]().top + offsetBase, href]]) || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            self.offsets.push(this[0])
            self.targets.push(this[1])
        })
    }
    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.getScrollHeight()
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height()
        var offsets = this.offsets
        var targets = this.targets
        var activeTarget = this.activeTarget
        var i
        if (this.scrollHeight != scrollHeight) {
            this.refresh()
        }
        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
        }
        if (activeTarget && scrollTop <= offsets[0]) {
            return activeTarget != (i = targets[0]) && this.activate(i)
        }
        for (i = offsets.length; i--; ) {
            activeTarget != targets[i] && scrollTop >= offsets[i] && (!offsets[i + 1] || scrollTop <= offsets[i + 1]) && this.activate(targets[i])
        }
    }
    ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target
        $(this.selector).parentsUntil(this.options.target, '.active').removeClass('active')
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]'
        var active = $(selector).parents('li').addClass('active')
        if (active.parent('.dropdown-menu').length) {
            active = active.closest('li.dropdown').addClass('active')
        }
        active.trigger('activate.bs.scrollspy')
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.scrollspy')
            var options = typeof option == 'object' && option
            if (!data)
                $this.data('bs.scrollspy', (data = new ScrollSpy(this,options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    var old = $.fn.scrollspy
    $.fn.scrollspy = Plugin
    $.fn.scrollspy.Constructor = ScrollSpy
    $.fn.scrollspy.noConflict = function() {
        $.fn.scrollspy = old
        return this
    }
    $(window).on('load.bs.scrollspy.data-api', function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this)
            Plugin.call($spy, $spy.data())
        })
    })
}(jQuery);
+function($) {
    'use strict';
    var Tab = function(element) {
        this.element = $(element)
    }
    Tab.VERSION = '3.2.0'
    Tab.prototype.show = function() {
        var $this = this.element
        var $ul = $this.closest('ul:not(.dropdown-menu)')
        var selector = $this.data('target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        if ($this.parent('li').hasClass('active'))
            return
        var previous = $ul.find('.active:last a')[0]
        var e = $.Event('show.bs.tab', {
            relatedTarget: previous
        })
        $this.trigger(e)
        if (e.isDefaultPrevented())
            return
        var $target = $(selector)
        this.activate($this.closest('li'), $ul)
        this.activate($target, $target.parent(), function() {
            $this.trigger({
                type: 'shown.bs.tab',
                relatedTarget: previous
            })
        })
    }
    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find('> .active')
        var transition = callback && $.support.transition && $active.hasClass('fade')
        function next() {
            $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
            element.addClass('active')
            if (transition) {
                element[0].offsetWidth
                element.addClass('in')
            } else {
                element.removeClass('fade')
            }
            if (element.parent('.dropdown-menu')) {
                element.closest('li.dropdown').addClass('active')
            }
            callback && callback()
        }
        transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(150) : next()
        $active.removeClass('in')
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tab')
            if (!data)
                $this.data('bs.tab', (data = new Tab(this)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    var old = $.fn.tab
    $.fn.tab = Plugin
    $.fn.tab.Constructor = Tab
    $.fn.tab.noConflict = function() {
        $.fn.tab = old
        return this
    }
    $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function(e) {
        e.preventDefault()
        Plugin.call($(this), 'show')
    })
}(jQuery);
+function($) {
    'use strict';
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)
        this.$target = $(this.options.target).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))
        this.$element = $(element)
        this.affixed = this.unpin = this.pinnedOffset = null
        this.checkPosition()
    }
    Affix.VERSION = '3.2.0'
    Affix.RESET = 'affix affix-top affix-bottom'
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    }
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        return (this.pinnedOffset = position.top - scrollTop)
    }
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(':visible'))
            return
        var scrollHeight = $(document).height()
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom
        if (typeof offset != 'object')
            offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function')
            offsetTop = offset.top(this.$element)
        if (typeof offsetBottom == 'function')
            offsetBottom = offset.bottom(this.$element)
        var affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ? false : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' : offsetTop != null && (scrollTop <= offsetTop) ? 'top' : false
        if (this.affixed === affix)
            return
        if (this.unpin != null)
            this.$element.css('top', '')
        var affixType = 'affix' + (affix ? '-' + affix : '')
        var e = $.Event(affixType + '.bs.affix')
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
            return
        this.affixed = affix
        this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
        this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix', 'affixed')))
        if (affix == 'bottom') {
            this.$element.offset({
                top: scrollHeight - this.$element.height() - offsetBottom
            })
        }
    }
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option
            if (!data)
                $this.data('bs.affix', (data = new Affix(this,options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    var old = $.fn.affix
    $.fn.affix = Plugin
    $.fn.affix.Constructor = Affix
    $.fn.affix.noConflict = function() {
        $.fn.affix = old
        return this
    }
    $(window).on('load', function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this)
            var data = $spy.data()
            data.offset = data.offset || {}
            if (data.offsetBottom)
                data.offset.bottom = data.offsetBottom
            if (data.offsetTop)
                data.offset.top = data.offsetTop
            Plugin.call($spy, data)
        })
    })
}(jQuery);
(function($) {
    $.easyPieChart = function(el, options) {
        var addScaleLine, animateLine, drawLine, easeInOutQuad, rAF, renderBackground, renderScale, renderTrack, _this = this;
        this.el = el;
        this.$el = $(el);
        this.$el.data("easyPieChart", this);
        this.init = function() {
            var percent, scaleBy;
            _this.options = $.extend({}, $.easyPieChart.defaultOptions, options);
            percent = parseInt(_this.$el.data('percent'), 10);
            _this.percentage = 0;
            _this.canvas = $("<canvas width='" + _this.options.size + "' height='" + _this.options.size + "'></canvas>").get(0);
            _this.$el.append(_this.canvas);
            if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
                G_vmlCanvasManager.initElement(_this.canvas);
            }
            _this.ctx = _this.canvas.getContext('2d');
            if (window.devicePixelRatio > 1) {
                scaleBy = window.devicePixelRatio;
                $(_this.canvas).css({
                    width: _this.options.size,
                    height: _this.options.size
                });
                _this.canvas.width *= scaleBy;
                _this.canvas.height *= scaleBy;
                _this.ctx.scale(scaleBy, scaleBy);
            }
            _this.ctx.translate(_this.options.size / 2, _this.options.size / 2);
            _this.ctx.rotate(_this.options.rotate * Math.PI / 180);
            _this.$el.addClass('easyPieChart');
            _this.$el.css({
                width: _this.options.size,
                height: _this.options.size,
                lineHeight: "" + _this.options.size + "px"
            });
            _this.update(percent);
            return _this;
        }
        ;
        this.update = function(percent) {
            percent = parseFloat(percent) || 0;
            if (_this.options.animate === false) {
                drawLine(percent);
            } else {
                if (_this.options.delay) {
                    animateLine(_this.percentage, 0);
                    setTimeout(function() {
                        return animateLine(_this.percentage, percent);
                    }, _this.options.delay);
                } else {
                    animateLine(_this.percentage, percent);
                }
            }
            return _this;
        }
        ;
        renderScale = function() {
            var i, _i, _results;
            _this.ctx.fillStyle = _this.options.scaleColor;
            _this.ctx.lineWidth = 1;
            _results = [];
            for (i = _i = 0; _i <= 24; i = ++_i) {
                _results.push(addScaleLine(i));
            }
            return _results;
        }
        ;
        addScaleLine = function(i) {
            var offset;
            offset = i % 6 === 0 ? 0 : _this.options.size * 0.017;
            _this.ctx.save();
            _this.ctx.rotate(i * Math.PI / 12);
            _this.ctx.fillRect(_this.options.size / 2 - offset, 0, -_this.options.size * 0.05 + offset, 1);
            _this.ctx.restore();
        }
        ;
        renderTrack = function() {
            var offset;
            offset = _this.options.size / 2 - _this.options.lineWidth / 2;
            if (_this.options.scaleColor !== false) {
                offset -= _this.options.size * 0.08;
            }
            _this.ctx.beginPath();
            _this.ctx.arc(0, 0, offset, 0, Math.PI * 2, true);
            _this.ctx.closePath();
            _this.ctx.strokeStyle = _this.options.trackColor;
            _this.ctx.lineWidth = _this.options.lineWidth;
            _this.ctx.stroke();
        }
        ;
        renderBackground = function() {
            if (_this.options.scaleColor !== false) {
                renderScale();
            }
            if (_this.options.trackColor !== false) {
                renderTrack();
            }
        }
        ;
        drawLine = function(percent) {
            var offset;
            renderBackground();
            _this.ctx.strokeStyle = $.isFunction(_this.options.barColor) ? _this.options.barColor(percent) : _this.options.barColor;
            _this.ctx.lineCap = _this.options.lineCap;
            _this.ctx.lineWidth = _this.options.lineWidth;
            offset = _this.options.size / 2 - _this.options.lineWidth / 2;
            if (_this.options.scaleColor !== false) {
                offset -= _this.options.size * 0.08;
            }
            _this.ctx.save();
            _this.ctx.rotate(-Math.PI / 2);
            _this.ctx.beginPath();
            _this.ctx.arc(0, 0, offset, 0, Math.PI * 2 * percent / 100, false);
            _this.ctx.stroke();
            _this.ctx.restore();
        }
        ;
        rAF = (function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
            ;
        }
        )();
        animateLine = function(from, to) {
            var anim, startTime;
            _this.options.onStart.call(_this);
            _this.percentage = to;
            Date.now || (Date.now = function() {
                return +(new Date);
            }
            );
            startTime = Date.now();
            anim = function() {
                var currentValue, process;
                process = Math.min(Date.now() - startTime, _this.options.animate);
                _this.ctx.clearRect(-_this.options.size / 2, -_this.options.size / 2, _this.options.size, _this.options.size);
                renderBackground.call(_this);
                currentValue = [easeInOutQuad(process, from, to - from, _this.options.animate)];
                _this.options.onStep.call(_this, currentValue);
                drawLine.call(_this, currentValue);
                if (process >= _this.options.animate) {
                    return _this.options.onStop.call(_this, currentValue, to);
                } else {
                    return rAF(anim);
                }
            }
            ;
            rAF(anim);
        }
        ;
        easeInOutQuad = function(t, b, c, d) {
            var easeIn, easing;
            easeIn = function(t) {
                return Math.pow(t, 2);
            }
            ;
            easing = function(t) {
                if (t < 1) {
                    return easeIn(t);
                } else {
                    return 2 - easeIn((t / 2) * -2 + 2);
                }
            }
            ;
            t /= d / 2;
            return c / 2 * easing(t) + b;
        }
        ;
        return this.init();
    }
    ;
    $.easyPieChart.defaultOptions = {
        barColor: '#ef1e25',
        trackColor: '#f2f2f2',
        scaleColor: '#dfe0e0',
        lineCap: 'round',
        rotate: 0,
        size: 110,
        lineWidth: 3,
        animate: false,
        delay: false,
        onStart: $.noop,
        onStop: $.noop,
        onStep: $.noop
    };
    $.fn.easyPieChart = function(options) {
        return $.each(this, function(i, el) {
            var $el, instanceOptions;
            $el = $(el);
            if (!$el.data('easyPieChart')) {
                instanceOptions = $.extend({}, options, $el.data());
                return $el.data('easyPieChart', new $.easyPieChart(el,instanceOptions));
            }
        });
    }
    ;
    return void 0;
}
)(jQuery);
(function(a, b, c) {
    (function(a) {
        typeof define == "function" && define.amd ? define(["jquery"], a) : jQuery && !jQuery.fn.sparkline && a(jQuery)
    }
    )(function(d) {
        "use strict";
        var e = {}, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L = 0;
        f = function() {
            return {
                common: {
                    type: "line",
                    lineColor: "#00f",
                    fillColor: "#cdf",
                    defaultPixelsPerValue: 3,
                    width: "auto",
                    height: "auto",
                    composite: !1,
                    tagValuesAttribute: "values",
                    tagOptionsPrefix: "spark",
                    enableTagOptions: !1,
                    enableHighlight: !0,
                    highlightLighten: 1.4,
                    tooltipSkipNull: !0,
                    tooltipPrefix: "",
                    tooltipSuffix: "",
                    disableHiddenCheck: !1,
                    numberFormatter: !1,
                    numberDigitGroupCount: 3,
                    numberDigitGroupSep: ",",
                    numberDecimalMark: ".",
                    disableTooltips: !1,
                    disableInteraction: !1
                },
                line: {
                    spotColor: "#f80",
                    highlightSpotColor: "#5f5",
                    highlightLineColor: "#f22",
                    spotRadius: 1.5,
                    minSpotColor: "#f80",
                    maxSpotColor: "#f80",
                    lineWidth: 1,
                    normalRangeMin: c,
                    normalRangeMax: c,
                    normalRangeColor: "#ccc",
                    drawNormalOnTop: !1,
                    chartRangeMin: c,
                    chartRangeMax: c,
                    chartRangeMinX: c,
                    chartRangeMaxX: c,
                    tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                },
                bar: {
                    barColor: "#3366cc",
                    negBarColor: "#f44",
                    stackedBarColor: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                    zeroColor: c,
                    nullColor: c,
                    zeroAxis: !0,
                    barWidth: 4,
                    barSpacing: 1,
                    chartRangeMax: c,
                    chartRangeMin: c,
                    chartRangeClip: !1,
                    colorMap: c,
                    tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                },
                tristate: {
                    barWidth: 4,
                    barSpacing: 1,
                    posBarColor: "#6f6",
                    negBarColor: "#f44",
                    zeroBarColor: "#999",
                    colorMap: {},
                    tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                    tooltipValueLookups: {
                        map: {
                            "-1": "Loss",
                            0: "Draw",
                            1: "Win"
                        }
                    }
                },
                discrete: {
                    lineHeight: "auto",
                    thresholdColor: c,
                    thresholdValue: 0,
                    chartRangeMax: c,
                    chartRangeMin: c,
                    chartRangeClip: !1,
                    tooltipFormat: new h("{{prefix}}{{value}}{{suffix}}")
                },
                bullet: {
                    targetColor: "#f33",
                    targetWidth: 3,
                    performanceColor: "#33f",
                    rangeColors: ["#d3dafe", "#a8b6ff", "#7f94ff"],
                    base: c,
                    tooltipFormat: new h("{{fieldkey:fields}} - {{value}}"),
                    tooltipValueLookups: {
                        fields: {
                            r: "Range",
                            p: "Performance",
                            t: "Target"
                        }
                    }
                },
                pie: {
                    offset: 0,
                    sliceColors: ["#3366cc", "#dc3912", "#ff9900", "#109618", "#66aa00", "#dd4477", "#0099c6", "#990099"],
                    borderWidth: 0,
                    borderColor: "#000",
                    tooltipFormat: new h('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                },
                box: {
                    raw: !1,
                    boxLineColor: "#000",
                    boxFillColor: "#cdf",
                    whiskerColor: "#000",
                    outlierLineColor: "#333",
                    outlierFillColor: "#fff",
                    medianColor: "#f00",
                    showOutliers: !0,
                    outlierIQR: 1.5,
                    spotRadius: 1.5,
                    target: c,
                    targetColor: "#4a2",
                    chartRangeMax: c,
                    chartRangeMin: c,
                    tooltipFormat: new h("{{field:fields}}: {{value}}"),
                    tooltipFormatFieldlistKey: "field",
                    tooltipValueLookups: {
                        fields: {
                            lq: "Lower Quartile",
                            med: "Median",
                            uq: "Upper Quartile",
                            lo: "Left Outlier",
                            ro: "Right Outlier",
                            lw: "Left Whisker",
                            rw: "Right Whisker"
                        }
                    }
                }
            }
        }
        ,
        E = '.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',
        g = function() {
            var a, b;
            return a = function() {
                this.init.apply(this, arguments)
            }
            ,
            arguments.length > 1 ? (arguments[0] ? (a.prototype = d.extend(new arguments[0], arguments[arguments.length - 1]),
            a._super = arguments[0].prototype) : a.prototype = arguments[arguments.length - 1],
            arguments.length > 2 && (b = Array.prototype.slice.call(arguments, 1, -1),
            b.unshift(a.prototype),
            d.extend.apply(d, b))) : a.prototype = arguments[0],
            a.prototype.cls = a,
            a
        }
        ,
        d.SPFormatClass = h = g({
            fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
            precre: /(\w+)\.(\d+)/,
            init: function(a, b) {
                this.format = a,
                this.fclass = b
            },
            render: function(a, b, d) {
                var e = this, f = a, g, h, i, j, k;
                return this.format.replace(this.fre, function() {
                    var a;
                    return h = arguments[1],
                    i = arguments[3],
                    g = e.precre.exec(h),
                    g ? (k = g[2],
                    h = g[1]) : k = !1,
                    j = f[h],
                    j === c ? "" : i && b && b[i] ? (a = b[i],
                    a.get ? b[i].get(j) || j : b[i][j] || j) : (n(j) && (d.get("numberFormatter") ? j = d.get("numberFormatter")(j) : j = s(j, k, d.get("numberDigitGroupCount"), d.get("numberDigitGroupSep"), d.get("numberDecimalMark"))),
                    j)
                })
            }
        }),
        d.spformat = function(a, b) {
            return new h(a,b)
        }
        ,
        i = function(a, b, c) {
            return a < b ? b : a > c ? c : a
        }
        ,
        j = function(a, c) {
            var d;
            return c === 2 ? (d = b.floor(a.length / 2),
            a.length % 2 ? a[d] : (a[d - 1] + a[d]) / 2) : a.length % 2 ? (d = (a.length * c + c) / 4,
            d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1]) : (d = (a.length * c + 2) / 4,
            d % 1 ? (a[b.floor(d)] + a[b.floor(d) - 1]) / 2 : a[d - 1])
        }
        ,
        k = function(a) {
            var b;
            switch (a) {
            case "undefined":
                a = c;
                break;
            case "null":
                a = null;
                break;
            case "true":
                a = !0;
                break;
            case "false":
                a = !1;
                break;
            default:
                b = parseFloat(a),
                a == b && (a = b)
            }
            return a
        }
        ,
        l = function(a) {
            var b, c = [];
            for (b = a.length; b--; )
                c[b] = k(a[b]);
            return c
        }
        ,
        m = function(a, b) {
            var c, d, e = [];
            for (c = 0,
            d = a.length; c < d; c++)
                a[c] !== b && e.push(a[c]);
            return e
        }
        ,
        n = function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        }
        ,
        s = function(a, b, c, e, f) {
            var g, h;
            a = (b === !1 ? parseFloat(a).toString() : a.toFixed(b)).split(""),
            g = (g = d.inArray(".", a)) < 0 ? a.length : g,
            g < a.length && (a[g] = f);
            for (h = g - c; h > 0; h -= c)
                a.splice(h, 0, e);
            return a.join("")
        }
        ,
        o = function(a, b, c) {
            var d;
            for (d = b.length; d--; ) {
                if (c && b[d] === null)
                    continue;
                if (b[d] !== a)
                    return !1
            }
            return !0
        }
        ,
        p = function(a) {
            var b = 0, c;
            for (c = a.length; c--; )
                b += typeof a[c] == "number" ? a[c] : 0;
            return b
        }
        ,
        r = function(a) {
            return d.isArray(a) ? a : [a]
        }
        ,
        q = function(b) {
            var c;
            a.createStyleSheet ? a.createStyleSheet().cssText = b : (c = a.createElement("style"),
            c.type = "text/css",
            a.getElementsByTagName("head")[0].appendChild(c),
            c[typeof a.body.style.WebkitAppearance == "string" ? "innerText" : "innerHTML"] = b)
        }
        ,
        d.fn.simpledraw = function(b, e, f, g) {
            var h, i;
            if (f && (h = this.data("_jqs_vcanvas")))
                return h;
            if (d.fn.sparkline.canvas === !1)
                return !1;
            if (d.fn.sparkline.canvas === c) {
                var j = a.createElement("canvas");
                if (!j.getContext || !j.getContext("2d")) {
                    if (!a.namespaces || !!a.namespaces.v)
                        return d.fn.sparkline.canvas = !1,
                        !1;
                    a.namespaces.add("v", "urn:schemas-microsoft-com:vml", "#default#VML"),
                    d.fn.sparkline.canvas = function(a, b, c, d) {
                        return new J(a,b,c)
                    }
                } else
                    d.fn.sparkline.canvas = function(a, b, c, d) {
                        return new I(a,b,c,d)
                    }
            }
            return b === c && (b = d(this).innerWidth()),
            e === c && (e = d(this).innerHeight()),
            h = d.fn.sparkline.canvas(b, e, this, g),
            i = d(this).data("_jqs_mhandler"),
            i && i.registerCanvas(h),
            h
        }
        ,
        d.fn.cleardraw = function() {
            var a = this.data("_jqs_vcanvas");
            a && a.reset()
        }
        ,
        d.RangeMapClass = t = g({
            init: function(a) {
                var b, c, d = [];
                for (b in a)
                    a.hasOwnProperty(b) && typeof b == "string" && b.indexOf(":") > -1 && (c = b.split(":"),
                    c[0] = c[0].length === 0 ? -Infinity : parseFloat(c[0]),
                    c[1] = c[1].length === 0 ? Infinity : parseFloat(c[1]),
                    c[2] = a[b],
                    d.push(c));
                this.map = a,
                this.rangelist = d || !1
            },
            get: function(a) {
                var b = this.rangelist, d, e, f;
                if ((f = this.map[a]) !== c)
                    return f;
                if (b)
                    for (d = b.length; d--; ) {
                        e = b[d];
                        if (e[0] <= a && e[1] >= a)
                            return e[2]
                    }
                return c
            }
        }),
        d.range_map = function(a) {
            return new t(a)
        }
        ,
        u = g({
            init: function(a, b) {
                var c = d(a);
                this.$el = c,
                this.options = b,
                this.currentPageX = 0,
                this.currentPageY = 0,
                this.el = a,
                this.splist = [],
                this.tooltip = null,
                this.over = !1,
                this.displayTooltips = !b.get("disableTooltips"),
                this.highlightEnabled = !b.get("disableHighlight")
            },
            registerSparkline: function(a) {
                this.splist.push(a),
                this.over && this.updateDisplay()
            },
            registerCanvas: function(a) {
                var b = d(a.canvas);
                this.canvas = a,
                this.$canvas = b,
                b.mouseenter(d.proxy(this.mouseenter, this)),
                b.mouseleave(d.proxy(this.mouseleave, this)),
                b.click(d.proxy(this.mouseclick, this))
            },
            reset: function(a) {
                this.splist = [],
                this.tooltip && a && (this.tooltip.remove(),
                this.tooltip = c)
            },
            mouseclick: function(a) {
                var b = d.Event("sparklineClick");
                b.originalEvent = a,
                b.sparklines = this.splist,
                this.$el.trigger(b)
            },
            mouseenter: function(b) {
                d(a.body).unbind("mousemove.jqs"),
                d(a.body).bind("mousemove.jqs", d.proxy(this.mousemove, this)),
                this.over = !0,
                this.currentPageX = b.pageX,
                this.currentPageY = b.pageY,
                this.currentEl = b.target,
                !this.tooltip && this.displayTooltips && (this.tooltip = new v(this.options),
                this.tooltip.updatePosition(b.pageX, b.pageY)),
                this.updateDisplay()
            },
            mouseleave: function() {
                d(a.body).unbind("mousemove.jqs");
                var b = this.splist, c = b.length, e = !1, f, g;
                this.over = !1,
                this.currentEl = null,
                this.tooltip && (this.tooltip.remove(),
                this.tooltip = null);
                for (g = 0; g < c; g++)
                    f = b[g],
                    f.clearRegionHighlight() && (e = !0);
                e && this.canvas.render()
            },
            mousemove: function(a) {
                this.currentPageX = a.pageX,
                this.currentPageY = a.pageY,
                this.currentEl = a.target,
                this.tooltip && this.tooltip.updatePosition(a.pageX, a.pageY),
                this.updateDisplay()
            },
            updateDisplay: function() {
                var a = this.splist, b = a.length, c = !1, e = this.$canvas.offset(), f = this.currentPageX - e.left, g = this.currentPageY - e.top, h, i, j, k, l;
                if (!this.over)
                    return;
                for (j = 0; j < b; j++)
                    i = a[j],
                    k = i.setRegionHighlight(this.currentEl, f, g),
                    k && (c = !0);
                if (c) {
                    l = d.Event("sparklineRegionChange"),
                    l.sparklines = this.splist,
                    this.$el.trigger(l);
                    if (this.tooltip) {
                        h = "";
                        for (j = 0; j < b; j++)
                            i = a[j],
                            h += i.getCurrentRegionTooltip();
                        this.tooltip.setContent(h)
                    }
                    this.disableHighlight || this.canvas.render()
                }
                k === null && this.mouseleave()
            }
        }),
        v = g({
            sizeStyle: "position: static !important;display: block !important;visibility: hidden !important;float: left !important;",
            init: function(b) {
                var c = b.get("tooltipClassname", "jqstooltip"), e = this.sizeStyle, f;
                this.container = b.get("tooltipContainer") || a.body,
                this.tooltipOffsetX = b.get("tooltipOffsetX", 10),
                this.tooltipOffsetY = b.get("tooltipOffsetY", 12),
                d("#jqssizetip").remove(),
                d("#jqstooltip").remove(),
                this.sizetip = d("<div/>", {
                    id: "jqssizetip",
                    style: e,
                    "class": c
                }),
                this.tooltip = d("<div/>", {
                    id: "jqstooltip",
                    "class": c
                }).appendTo(this.container),
                f = this.tooltip.offset(),
                this.offsetLeft = f.left,
                this.offsetTop = f.top,
                this.hidden = !0,
                d(window).unbind("resize.jqs scroll.jqs"),
                d(window).bind("resize.jqs scroll.jqs", d.proxy(this.updateWindowDims, this)),
                this.updateWindowDims()
            },
            updateWindowDims: function() {
                this.scrollTop = d(window).scrollTop(),
                this.scrollLeft = d(window).scrollLeft(),
                this.scrollRight = this.scrollLeft + d(window).width(),
                this.updatePosition()
            },
            getSize: function(a) {
                this.sizetip.html(a).appendTo(this.container),
                this.width = this.sizetip.width() + 1,
                this.height = this.sizetip.height(),
                this.sizetip.remove()
            },
            setContent: function(a) {
                if (!a) {
                    this.tooltip.css("visibility", "hidden"),
                    this.hidden = !0;
                    return
                }
                this.getSize(a),
                this.tooltip.html(a).css({
                    width: this.width,
                    height: this.height,
                    visibility: "visible"
                }),
                this.hidden && (this.hidden = !1,
                this.updatePosition())
            },
            updatePosition: function(a, b) {
                if (a === c) {
                    if (this.mousex === c)
                        return;
                    a = this.mousex - this.offsetLeft,
                    b = this.mousey - this.offsetTop
                } else
                    this.mousex = a -= this.offsetLeft,
                    this.mousey = b -= this.offsetTop;
                if (!this.height || !this.width || this.hidden)
                    return;
                b -= this.height + this.tooltipOffsetY,
                a += this.tooltipOffsetX,
                b < this.scrollTop && (b = this.scrollTop),
                a < this.scrollLeft ? a = this.scrollLeft : a + this.width > this.scrollRight && (a = this.scrollRight - this.width),
                this.tooltip.css({
                    left: a,
                    top: b
                })
            },
            remove: function() {
                this.tooltip.remove(),
                this.sizetip.remove(),
                this.sizetip = this.tooltip = c,
                d(window).unbind("resize.jqs scroll.jqs")
            }
        }),
        F = function() {
            q(E)
        }
        ,
        d(F),
        K = [],
        d.fn.sparkline = function(b, e) {
            return this.each(function() {
                var f = new d.fn.sparkline.options(this,e), g = d(this), h, i;
                h = function() {
                    var e, h, i, j, k, l, m;
                    if (b === "html" || b === c) {
                        m = this.getAttribute(f.get("tagValuesAttribute"));
                        if (m === c || m === null)
                            m = g.html();
                        e = m.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, "").split(",")
                    } else
                        e = b;
                    h = f.get("width") === "auto" ? e.length * f.get("defaultPixelsPerValue") : f.get("width");
                    if (f.get("height") === "auto") {
                        if (!f.get("composite") || !d.data(this, "_jqs_vcanvas"))
                            j = a.createElement("span"),
                            j.innerHTML = "a",
                            g.html(j),
                            i = d(j).innerHeight() || d(j).height(),
                            d(j).remove(),
                            j = null
                    } else
                        i = f.get("height");
                    f.get("disableInteraction") ? k = !1 : (k = d.data(this, "_jqs_mhandler"),
                    k ? f.get("composite") || k.reset() : (k = new u(this,f),
                    d.data(this, "_jqs_mhandler", k)));
                    if (f.get("composite") && !d.data(this, "_jqs_vcanvas")) {
                        d.data(this, "_jqs_errnotify") || (alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),
                        d.data(this, "_jqs_errnotify", !0));
                        return
                    }
                    l = new (d.fn.sparkline[f.get("type")])(this,e,f,h,i),
                    l.render(),
                    k && k.registerSparkline(l)
                }
                ;
                if (d(this).html() && !f.get("disableHiddenCheck") && d(this).is(":hidden") || !d(this).parents("body").length) {
                    if (!f.get("composite") && d.data(this, "_jqs_pending"))
                        for (i = K.length; i; i--)
                            K[i - 1][0] == this && K.splice(i - 1, 1);
                    K.push([this, h]),
                    d.data(this, "_jqs_pending", !0)
                } else
                    h.call(this)
            })
        }
        ,
        d.fn.sparkline.defaults = f(),
        d.sparkline_display_visible = function() {
            var a, b, c, e = [];
            for (b = 0,
            c = K.length; b < c; b++)
                a = K[b][0],
                d(a).is(":visible") && !d(a).parents().is(":hidden") ? (K[b][1].call(a),
                d.data(K[b][0], "_jqs_pending", !1),
                e.push(b)) : !d(a).closest("html").length && !d.data(a, "_jqs_pending") && (d.data(K[b][0], "_jqs_pending", !1),
                e.push(b));
            for (b = e.length; b; b--)
                K.splice(e[b - 1], 1)
        }
        ,
        d.fn.sparkline.options = g({
            init: function(a, b) {
                var c, f, g, h;
                this.userOptions = b = b || {},
                this.tag = a,
                this.tagValCache = {},
                f = d.fn.sparkline.defaults,
                g = f.common,
                this.tagOptionsPrefix = b.enableTagOptions && (b.tagOptionsPrefix || g.tagOptionsPrefix),
                h = this.getTagSetting("type"),
                h === e ? c = f[b.type || g.type] : c = f[h],
                this.mergedOptions = d.extend({}, g, c, b)
            },
            getTagSetting: function(a) {
                var b = this.tagOptionsPrefix, d, f, g, h;
                if (b === !1 || b === c)
                    return e;
                if (this.tagValCache.hasOwnProperty(a))
                    d = this.tagValCache.key;
                else {
                    d = this.tag.getAttribute(b + a);
                    if (d === c || d === null)
                        d = e;
                    else if (d.substr(0, 1) === "[") {
                        d = d.substr(1, d.length - 2).split(",");
                        for (f = d.length; f--; )
                            d[f] = k(d[f].replace(/(^\s*)|(\s*$)/g, ""))
                    } else if (d.substr(0, 1) === "{") {
                        g = d.substr(1, d.length - 2).split(","),
                        d = {};
                        for (f = g.length; f--; )
                            h = g[f].split(":", 2),
                            d[h[0].replace(/(^\s*)|(\s*$)/g, "")] = k(h[1].replace(/(^\s*)|(\s*$)/g, ""))
                    } else
                        d = k(d);
                    this.tagValCache.key = d
                }
                return d
            },
            get: function(a, b) {
                var d = this.getTagSetting(a), f;
                return d !== e ? d : (f = this.mergedOptions[a]) === c ? b : f
            }
        }),
        d.fn.sparkline._base = g({
            disabled: !1,
            init: function(a, b, e, f, g) {
                this.el = a,
                this.$el = d(a),
                this.values = b,
                this.options = e,
                this.width = f,
                this.height = g,
                this.currentRegion = c
            },
            initTarget: function() {
                var a = !this.options.get("disableInteraction");
                (this.target = this.$el.simpledraw(this.width, this.height, this.options.get("composite"), a)) ? (this.canvasWidth = this.target.pixelWidth,
                this.canvasHeight = this.target.pixelHeight) : this.disabled = !0
            },
            render: function() {
                return this.disabled ? (this.el.innerHTML = "",
                !1) : !0
            },
            getRegion: function(a, b) {},
            setRegionHighlight: function(a, b, d) {
                var e = this.currentRegion, f = !this.options.get("disableHighlight"), g;
                return b > this.canvasWidth || d > this.canvasHeight || b < 0 || d < 0 ? null : (g = this.getRegion(a, b, d),
                e !== g ? (e !== c && f && this.removeHighlight(),
                this.currentRegion = g,
                g !== c && f && this.renderHighlight(),
                !0) : !1)
            },
            clearRegionHighlight: function() {
                return this.currentRegion !== c ? (this.removeHighlight(),
                this.currentRegion = c,
                !0) : !1
            },
            renderHighlight: function() {
                this.changeHighlight(!0)
            },
            removeHighlight: function() {
                this.changeHighlight(!1)
            },
            changeHighlight: function(a) {},
            getCurrentRegionTooltip: function() {
                var a = this.options, b = "", e = [], f, g, i, j, k, l, m, n, o, p, q, r, s, t;
                if (this.currentRegion === c)
                    return "";
                f = this.getCurrentRegionFields(),
                q = a.get("tooltipFormatter");
                if (q)
                    return q(this, a, f);
                a.get("tooltipChartTitle") && (b += '<div class="jqs jqstitle">' + a.get("tooltipChartTitle") + "</div>\n"),
                g = this.options.get("tooltipFormat");
                if (!g)
                    return "";
                d.isArray(g) || (g = [g]),
                d.isArray(f) || (f = [f]),
                m = this.options.get("tooltipFormatFieldlist"),
                n = this.options.get("tooltipFormatFieldlistKey");
                if (m && n) {
                    o = [];
                    for (l = f.length; l--; )
                        p = f[l][n],
                        (t = d.inArray(p, m)) != -1 && (o[t] = f[l]);
                    f = o
                }
                i = g.length,
                s = f.length;
                for (l = 0; l < i; l++) {
                    r = g[l],
                    typeof r == "string" && (r = new h(r)),
                    j = r.fclass || "jqsfield";
                    for (t = 0; t < s; t++)
                        if (!f[t].isNull || !a.get("tooltipSkipNull"))
                            d.extend(f[t], {
                                prefix: a.get("tooltipPrefix"),
                                suffix: a.get("tooltipSuffix")
                            }),
                            k = r.render(f[t], a.get("tooltipValueLookups"), a),
                            e.push('<div class="' + j + '">' + k + "</div>")
                }
                return e.length ? b + e.join("\n") : ""
            },
            getCurrentRegionFields: function() {},
            calcHighlightColor: function(a, c) {
                var d = c.get("highlightColor"), e = c.get("highlightLighten"), f, g, h, j;
                if (d)
                    return d;
                if (e) {
                    f = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);
                    if (f) {
                        h = [],
                        g = a.length === 4 ? 16 : 1;
                        for (j = 0; j < 3; j++)
                            h[j] = i(b.round(parseInt(f[j + 1], 16) * g * e), 0, 255);
                        return "rgb(" + h.join(",") + ")"
                    }
                }
                return a
            }
        }),
        w = {
            changeHighlight: function(a) {
                var b = this.currentRegion, c = this.target, e = this.regionShapes[b], f;
                e && (f = this.renderRegion(b, a),
                d.isArray(f) || d.isArray(e) ? (c.replaceWithShapes(e, f),
                this.regionShapes[b] = d.map(f, function(a) {
                    return a.id
                })) : (c.replaceWithShape(e, f),
                this.regionShapes[b] = f.id))
            },
            render: function() {
                var a = this.values, b = this.target, c = this.regionShapes, e, f, g, h;
                if (!this.cls._super.render.call(this))
                    return;
                for (g = a.length; g--; ) {
                    e = this.renderRegion(g);
                    if (e)
                        if (d.isArray(e)) {
                            f = [];
                            for (h = e.length; h--; )
                                e[h].append(),
                                f.push(e[h].id);
                            c[g] = f
                        } else
                            e.append(),
                            c[g] = e.id;
                    else
                        c[g] = null
                }
                b.render()
            }
        },
        d.fn.sparkline.line = x = g(d.fn.sparkline._base, {
            type: "line",
            init: function(a, b, c, d, e) {
                x._super.init.call(this, a, b, c, d, e),
                this.vertices = [],
                this.regionMap = [],
                this.xvalues = [],
                this.yvalues = [],
                this.yminmax = [],
                this.hightlightSpotId = null,
                this.lastShapeId = null,
                this.initTarget()
            },
            getRegion: function(a, b, d) {
                var e, f = this.regionMap;
                for (e = f.length; e--; )
                    if (f[e] !== null && b >= f[e][0] && b <= f[e][1])
                        return f[e][2];
                return c
            },
            getCurrentRegionFields: function() {
                var a = this.currentRegion;
                return {
                    isNull: this.yvalues[a] === null,
                    x: this.xvalues[a],
                    y: this.yvalues[a],
                    color: this.options.get("lineColor"),
                    fillColor: this.options.get("fillColor"),
                    offset: a
                }
            },
            renderHighlight: function() {
                var a = this.currentRegion, b = this.target, d = this.vertices[a], e = this.options, f = e.get("spotRadius"), g = e.get("highlightSpotColor"), h = e.get("highlightLineColor"), i, j;
                if (!d)
                    return;
                f && g && (i = b.drawCircle(d[0], d[1], f, c, g),
                this.highlightSpotId = i.id,
                b.insertAfterShape(this.lastShapeId, i)),
                h && (j = b.drawLine(d[0], this.canvasTop, d[0], this.canvasTop + this.canvasHeight, h),
                this.highlightLineId = j.id,
                b.insertAfterShape(this.lastShapeId, j))
            },
            removeHighlight: function() {
                var a = this.target;
                this.highlightSpotId && (a.removeShapeId(this.highlightSpotId),
                this.highlightSpotId = null),
                this.highlightLineId && (a.removeShapeId(this.highlightLineId),
                this.highlightLineId = null)
            },
            scanValues: function() {
                var a = this.values, c = a.length, d = this.xvalues, e = this.yvalues, f = this.yminmax, g, h, i, j, k;
                for (g = 0; g < c; g++)
                    h = a[g],
                    i = typeof a[g] == "string",
                    j = typeof a[g] == "object" && a[g]instanceof Array,
                    k = i && a[g].split(":"),
                    i && k.length === 2 ? (d.push(Number(k[0])),
                    e.push(Number(k[1])),
                    f.push(Number(k[1]))) : j ? (d.push(h[0]),
                    e.push(h[1]),
                    f.push(h[1])) : (d.push(g),
                    a[g] === null || a[g] === "null" ? e.push(null) : (e.push(Number(h)),
                    f.push(Number(h))));
                this.options.get("xvalues") && (d = this.options.get("xvalues")),
                this.maxy = this.maxyorg = b.max.apply(b, f),
                this.miny = this.minyorg = b.min.apply(b, f),
                this.maxx = b.max.apply(b, d),
                this.minx = b.min.apply(b, d),
                this.xvalues = d,
                this.yvalues = e,
                this.yminmax = f
            },
            processRangeOptions: function() {
                var a = this.options
                  , b = a.get("normalRangeMin")
                  , d = a.get("normalRangeMax");
                b !== c && (b < this.miny && (this.miny = b),
                d > this.maxy && (this.maxy = d)),
                a.get("chartRangeMin") !== c && (a.get("chartRangeClip") || a.get("chartRangeMin") < this.miny) && (this.miny = a.get("chartRangeMin")),
                a.get("chartRangeMax") !== c && (a.get("chartRangeClip") || a.get("chartRangeMax") > this.maxy) && (this.maxy = a.get("chartRangeMax")),
                a.get("chartRangeMinX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMinX") < this.minx) && (this.minx = a.get("chartRangeMinX")),
                a.get("chartRangeMaxX") !== c && (a.get("chartRangeClipX") || a.get("chartRangeMaxX") > this.maxx) && (this.maxx = a.get("chartRangeMaxX"))
            },
            drawNormalRange: function(a, d, e, f, g) {
                var h = this.options.get("normalRangeMin")
                  , i = this.options.get("normalRangeMax")
                  , j = d + b.round(e - e * ((i - this.miny) / g))
                  , k = b.round(e * (i - h) / g);
                this.target.drawRect(a, j, f, k, c, this.options.get("normalRangeColor")).append()
            },
            render: function() {
                var a = this.options, e = this.target, f = this.canvasWidth, g = this.canvasHeight, h = this.vertices, i = a.get("spotRadius"), j = this.regionMap, k, l, m, n, o, p, q, r, s, u, v, w, y, z, A, B, C, D, E, F, G, H, I, J, K;
                if (!x._super.render.call(this))
                    return;
                this.scanValues(),
                this.processRangeOptions(),
                I = this.xvalues,
                J = this.yvalues;
                if (!this.yminmax.length || this.yvalues.length < 2)
                    return;
                n = o = 0,
                k = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx,
                l = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny,
                m = this.yvalues.length - 1,
                i && (f < i * 4 || g < i * 4) && (i = 0);
                if (i) {
                    G = a.get("highlightSpotColor") && !a.get("disableInteraction");
                    if (G || a.get("minSpotColor") || a.get("spotColor") && J[m] === this.miny)
                        g -= b.ceil(i);
                    if (G || a.get("maxSpotColor") || a.get("spotColor") && J[m] === this.maxy)
                        g -= b.ceil(i),
                        n += b.ceil(i);
                    if (G || (a.get("minSpotColor") || a.get("maxSpotColor")) && (J[0] === this.miny || J[0] === this.maxy))
                        o += b.ceil(i),
                        f -= b.ceil(i);
                    if (G || a.get("spotColor") || a.get("minSpotColor") || a.get("maxSpotColor") && (J[m] === this.miny || J[m] === this.maxy))
                        f -= b.ceil(i)
                }
                g--,
                a.get("normalRangeMin") !== c && !a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l),
                q = [],
                r = [q],
                z = A = null,
                B = J.length;
                for (K = 0; K < B; K++)
                    s = I[K],
                    v = I[K + 1],
                    u = J[K],
                    w = o + b.round((s - this.minx) * (f / k)),
                    y = K < B - 1 ? o + b.round((v - this.minx) * (f / k)) : f,
                    A = w + (y - w) / 2,
                    j[K] = [z || 0, A, K],
                    z = A,
                    u === null ? K && (J[K - 1] !== null && (q = [],
                    r.push(q)),
                    h.push(null)) : (u < this.miny && (u = this.miny),
                    u > this.maxy && (u = this.maxy),
                    q.length || q.push([w, n + g]),
                    p = [w, n + b.round(g - g * ((u - this.miny) / l))],
                    q.push(p),
                    h.push(p));
                C = [],
                D = [],
                E = r.length;
                for (K = 0; K < E; K++)
                    q = r[K],
                    q.length && (a.get("fillColor") && (q.push([q[q.length - 1][0], n + g]),
                    D.push(q.slice(0)),
                    q.pop()),
                    q.length > 2 && (q[0] = [q[0][0], q[1][1]]),
                    C.push(q));
                E = D.length;
                for (K = 0; K < E; K++)
                    e.drawShape(D[K], a.get("fillColor"), a.get("fillColor")).append();
                a.get("normalRangeMin") !== c && a.get("drawNormalOnTop") && this.drawNormalRange(o, n, g, f, l),
                E = C.length;
                for (K = 0; K < E; K++)
                    e.drawShape(C[K], a.get("lineColor"), c, a.get("lineWidth")).append();
                if (i && a.get("valueSpots")) {
                    F = a.get("valueSpots"),
                    F.get === c && (F = new t(F));
                    for (K = 0; K < B; K++)
                        H = F.get(J[K]),
                        H && e.drawCircle(o + b.round((I[K] - this.minx) * (f / k)), n + b.round(g - g * ((J[K] - this.miny) / l)), i, c, H).append()
                }
                i && a.get("spotColor") && J[m] !== null && e.drawCircle(o + b.round((I[I.length - 1] - this.minx) * (f / k)), n + b.round(g - g * ((J[m] - this.miny) / l)), i, c, a.get("spotColor")).append(),
                this.maxy !== this.minyorg && (i && a.get("minSpotColor") && (s = I[d.inArray(this.minyorg, J)],
                e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.minyorg - this.miny) / l)), i, c, a.get("minSpotColor")).append()),
                i && a.get("maxSpotColor") && (s = I[d.inArray(this.maxyorg, J)],
                e.drawCircle(o + b.round((s - this.minx) * (f / k)), n + b.round(g - g * ((this.maxyorg - this.miny) / l)), i, c, a.get("maxSpotColor")).append())),
                this.lastShapeId = e.getLastShapeId(),
                this.canvasTop = n,
                e.render()
            }
        }),
        d.fn.sparkline.bar = y = g(d.fn.sparkline._base, w, {
            type: "bar",
            init: function(a, e, f, g, h) {
                var j = parseInt(f.get("barWidth"), 10), n = parseInt(f.get("barSpacing"), 10), o = f.get("chartRangeMin"), p = f.get("chartRangeMax"), q = f.get("chartRangeClip"), r = Infinity, s = -Infinity, u, v, w, x, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R;
                y._super.init.call(this, a, e, f, g, h);
                for (A = 0,
                B = e.length; A < B; A++) {
                    O = e[A],
                    u = typeof O == "string" && O.indexOf(":") > -1;
                    if (u || d.isArray(O))
                        J = !0,
                        u && (O = e[A] = l(O.split(":"))),
                        O = m(O, null),
                        v = b.min.apply(b, O),
                        w = b.max.apply(b, O),
                        v < r && (r = v),
                        w > s && (s = w)
                }
                this.stacked = J,
                this.regionShapes = {},
                this.barWidth = j,
                this.barSpacing = n,
                this.totalBarWidth = j + n,
                this.width = g = e.length * j + (e.length - 1) * n,
                this.initTarget(),
                q && (H = o === c ? -Infinity : o,
                I = p === c ? Infinity : p),
                z = [],
                x = J ? [] : z;
                var S = []
                  , T = [];
                for (A = 0,
                B = e.length; A < B; A++)
                    if (J) {
                        K = e[A],
                        e[A] = N = [],
                        S[A] = 0,
                        x[A] = T[A] = 0;
                        for (L = 0,
                        M = K.length; L < M; L++)
                            O = N[L] = q ? i(K[L], H, I) : K[L],
                            O !== null && (O > 0 && (S[A] += O),
                            r < 0 && s > 0 ? O < 0 ? T[A] += b.abs(O) : x[A] += O : x[A] += b.abs(O - (O < 0 ? s : r)),
                            z.push(O))
                    } else
                        O = q ? i(e[A], H, I) : e[A],
                        O = e[A] = k(O),
                        O !== null && z.push(O);
                this.max = G = b.max.apply(b, z),
                this.min = F = b.min.apply(b, z),
                this.stackMax = s = J ? b.max.apply(b, S) : G,
                this.stackMin = r = J ? b.min.apply(b, z) : F,
                f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < F) && (F = f.get("chartRangeMin")),
                f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > G) && (G = f.get("chartRangeMax")),
                this.zeroAxis = D = f.get("zeroAxis", !0),
                F <= 0 && G >= 0 && D ? E = 0 : D == 0 ? E = F : F > 0 ? E = F : E = G,
                this.xaxisOffset = E,
                C = J ? b.max.apply(b, x) + b.max.apply(b, T) : G - F,
                this.canvasHeightEf = D && F < 0 ? this.canvasHeight - 2 : this.canvasHeight - 1,
                F < E ? (Q = J && G >= 0 ? s : G,
                P = (Q - E) / C * this.canvasHeight,
                P !== b.ceil(P) && (this.canvasHeightEf -= 2,
                P = b.ceil(P))) : P = this.canvasHeight,
                this.yoffset = P,
                d.isArray(f.get("colorMap")) ? (this.colorMapByIndex = f.get("colorMap"),
                this.colorMapByValue = null) : (this.colorMapByIndex = null,
                this.colorMapByValue = f.get("colorMap"),
                this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))),
                this.range = C
            },
            getRegion: function(a, d, e) {
                var f = b.floor(d / this.totalBarWidth);
                return f < 0 || f >= this.values.length ? c : f
            },
            getCurrentRegionFields: function() {
                var a = this.currentRegion, b = r(this.values[a]), c = [], d, e;
                for (e = b.length; e--; )
                    d = b[e],
                    c.push({
                        isNull: d === null,
                        value: d,
                        color: this.calcColor(e, d, a),
                        offset: a
                    });
                return c
            },
            calcColor: function(a, b, e) {
                var f = this.colorMapByIndex, g = this.colorMapByValue, h = this.options, i, j;
                return this.stacked ? i = h.get("stackedBarColor") : i = b < 0 ? h.get("negBarColor") : h.get("barColor"),
                b === 0 && h.get("zeroColor") !== c && (i = h.get("zeroColor")),
                g && (j = g.get(b)) ? i = j : f && f.length > e && (i = f[e]),
                d.isArray(i) ? i[a % i.length] : i
            },
            renderRegion: function(a, e) {
                var f = this.values[a], g = this.options, h = this.xaxisOffset, i = [], j = this.range, k = this.stacked, l = this.target, m = a * this.totalBarWidth, n = this.canvasHeightEf, p = this.yoffset, q, r, s, t, u, v, w, x, y, z;
                f = d.isArray(f) ? f : [f],
                w = f.length,
                x = f[0],
                t = o(null, f),
                z = o(h, f, !0);
                if (t)
                    return g.get("nullColor") ? (s = e ? g.get("nullColor") : this.calcHighlightColor(g.get("nullColor"), g),
                    q = p > 0 ? p - 1 : p,
                    l.drawRect(m, q, this.barWidth - 1, 0, s, s)) : c;
                u = p;
                for (v = 0; v < w; v++) {
                    x = f[v];
                    if (k && x === h) {
                        if (!z || y)
                            continue;
                        y = !0
                    }
                    j > 0 ? r = b.floor(n * (b.abs(x - h) / j)) + 1 : r = 1,
                    x < h || x === h && p === 0 ? (q = u,
                    u += r) : (q = p - r,
                    p -= r),
                    s = this.calcColor(v, x, a),
                    e && (s = this.calcHighlightColor(s, g)),
                    i.push(l.drawRect(m, q, this.barWidth - 1, r - 1, s, s))
                }
                return i.length === 1 ? i[0] : i
            }
        }),
        d.fn.sparkline.tristate = z = g(d.fn.sparkline._base, w, {
            type: "tristate",
            init: function(a, b, e, f, g) {
                var h = parseInt(e.get("barWidth"), 10)
                  , i = parseInt(e.get("barSpacing"), 10);
                z._super.init.call(this, a, b, e, f, g),
                this.regionShapes = {},
                this.barWidth = h,
                this.barSpacing = i,
                this.totalBarWidth = h + i,
                this.values = d.map(b, Number),
                this.width = f = b.length * h + (b.length - 1) * i,
                d.isArray(e.get("colorMap")) ? (this.colorMapByIndex = e.get("colorMap"),
                this.colorMapByValue = null) : (this.colorMapByIndex = null,
                this.colorMapByValue = e.get("colorMap"),
                this.colorMapByValue && this.colorMapByValue.get === c && (this.colorMapByValue = new t(this.colorMapByValue))),
                this.initTarget()
            },
            getRegion: function(a, c, d) {
                return b.floor(c / this.totalBarWidth)
            },
            getCurrentRegionFields: function() {
                var a = this.currentRegion;
                return {
                    isNull: this.values[a] === c,
                    value: this.values[a],
                    color: this.calcColor(this.values[a], a),
                    offset: a
                }
            },
            calcColor: function(a, b) {
                var c = this.values, d = this.options, e = this.colorMapByIndex, f = this.colorMapByValue, g, h;
                return f && (h = f.get(a)) ? g = h : e && e.length > b ? g = e[b] : c[b] < 0 ? g = d.get("negBarColor") : c[b] > 0 ? g = d.get("posBarColor") : g = d.get("zeroBarColor"),
                g
            },
            renderRegion: function(a, c) {
                var d = this.values, e = this.options, f = this.target, g, h, i, j, k, l;
                g = f.pixelHeight,
                i = b.round(g / 2),
                j = a * this.totalBarWidth,
                d[a] < 0 ? (k = i,
                h = i - 1) : d[a] > 0 ? (k = 0,
                h = i - 1) : (k = i - 1,
                h = 2),
                l = this.calcColor(d[a], a);
                if (l === null)
                    return;
                return c && (l = this.calcHighlightColor(l, e)),
                f.drawRect(j, k, this.barWidth - 1, h - 1, l, l)
            }
        }),
        d.fn.sparkline.discrete = A = g(d.fn.sparkline._base, w, {
            type: "discrete",
            init: function(a, e, f, g, h) {
                A._super.init.call(this, a, e, f, g, h),
                this.regionShapes = {},
                this.values = e = d.map(e, Number),
                this.min = b.min.apply(b, e),
                this.max = b.max.apply(b, e),
                this.range = this.max - this.min,
                this.width = g = f.get("width") === "auto" ? e.length * 2 : this.width,
                this.interval = b.floor(g / e.length),
                this.itemWidth = g / e.length,
                f.get("chartRangeMin") !== c && (f.get("chartRangeClip") || f.get("chartRangeMin") < this.min) && (this.min = f.get("chartRangeMin")),
                f.get("chartRangeMax") !== c && (f.get("chartRangeClip") || f.get("chartRangeMax") > this.max) && (this.max = f.get("chartRangeMax")),
                this.initTarget(),
                this.target && (this.lineHeight = f.get("lineHeight") === "auto" ? b.round(this.canvasHeight * .3) : f.get("lineHeight"))
            },
            getRegion: function(a, c, d) {
                return b.floor(c / this.itemWidth)
            },
            getCurrentRegionFields: function() {
                var a = this.currentRegion;
                return {
                    isNull: this.values[a] === c,
                    value: this.values[a],
                    offset: a
                }
            },
            renderRegion: function(a, c) {
                var d = this.values, e = this.options, f = this.min, g = this.max, h = this.range, j = this.interval, k = this.target, l = this.canvasHeight, m = this.lineHeight, n = l - m, o, p, q, r;
                return p = i(d[a], f, g),
                r = a * j,
                o = b.round(n - n * ((p - f) / h)),
                q = e.get("thresholdColor") && p < e.get("thresholdValue") ? e.get("thresholdColor") : e.get("lineColor"),
                c && (q = this.calcHighlightColor(q, e)),
                k.drawLine(r, o, r, o + m, q)
            }
        }),
        d.fn.sparkline.bullet = B = g(d.fn.sparkline._base, {
            type: "bullet",
            init: function(a, d, e, f, g) {
                var h, i, j;
                B._super.init.call(this, a, d, e, f, g),
                this.values = d = l(d),
                j = d.slice(),
                j[0] = j[0] === null ? j[2] : j[0],
                j[1] = d[1] === null ? j[2] : j[1],
                h = b.min.apply(b, d),
                i = b.max.apply(b, d),
                e.get("base") === c ? h = h < 0 ? h : 0 : h = e.get("base"),
                this.min = h,
                this.max = i,
                this.range = i - h,
                this.shapes = {},
                this.valueShapes = {},
                this.regiondata = {},
                this.width = f = e.get("width") === "auto" ? "4.0em" : f,
                this.target = this.$el.simpledraw(f, g, e.get("composite")),
                d.length || (this.disabled = !0),
                this.initTarget()
            },
            getRegion: function(a, b, d) {
                var e = this.target.getShapeAt(a, b, d);
                return e !== c && this.shapes[e] !== c ? this.shapes[e] : c
            },
            getCurrentRegionFields: function() {
                var a = this.currentRegion;
                return {
                    fieldkey: a.substr(0, 1),
                    value: this.values[a.substr(1)],
                    region: a
                }
            },
            changeHighlight: function(a) {
                var b = this.currentRegion, c = this.valueShapes[b], d;
                delete this.shapes[c];
                switch (b.substr(0, 1)) {
                case "r":
                    d = this.renderRange(b.substr(1), a);
                    break;
                case "p":
                    d = this.renderPerformance(a);
                    break;
                case "t":
                    d = this.renderTarget(a)
                }
                this.valueShapes[b] = d.id,
                this.shapes[d.id] = b,
                this.target.replaceWithShape(c, d)
            },
            renderRange: function(a, c) {
                var d = this.values[a]
                  , e = b.round(this.canvasWidth * ((d - this.min) / this.range))
                  , f = this.options.get("rangeColors")[a - 2];
                return c && (f = this.calcHighlightColor(f, this.options)),
                this.target.drawRect(0, 0, e - 1, this.canvasHeight - 1, f, f)
            },
            renderPerformance: function(a) {
                var c = this.values[1]
                  , d = b.round(this.canvasWidth * ((c - this.min) / this.range))
                  , e = this.options.get("performanceColor");
                return a && (e = this.calcHighlightColor(e, this.options)),
                this.target.drawRect(0, b.round(this.canvasHeight * .3), d - 1, b.round(this.canvasHeight * .4) - 1, e, e)
            },
            renderTarget: function(a) {
                var c = this.values[0]
                  , d = b.round(this.canvasWidth * ((c - this.min) / this.range) - this.options.get("targetWidth") / 2)
                  , e = b.round(this.canvasHeight * .1)
                  , f = this.canvasHeight - e * 2
                  , g = this.options.get("targetColor");
                return a && (g = this.calcHighlightColor(g, this.options)),
                this.target.drawRect(d, e, this.options.get("targetWidth") - 1, f - 1, g, g)
            },
            render: function() {
                var a = this.values.length, b = this.target, c, d;
                if (!B._super.render.call(this))
                    return;
                for (c = 2; c < a; c++)
                    d = this.renderRange(c).append(),
                    this.shapes[d.id] = "r" + c,
                    this.valueShapes["r" + c] = d.id;
                this.values[1] !== null && (d = this.renderPerformance().append(),
                this.shapes[d.id] = "p1",
                this.valueShapes.p1 = d.id),
                this.values[0] !== null && (d = this.renderTarget().append(),
                this.shapes[d.id] = "t0",
                this.valueShapes.t0 = d.id),
                b.render()
            }
        }),
        d.fn.sparkline.pie = C = g(d.fn.sparkline._base, {
            type: "pie",
            init: function(a, c, e, f, g) {
                var h = 0, i;
                C._super.init.call(this, a, c, e, f, g),
                this.shapes = {},
                this.valueShapes = {},
                this.values = c = d.map(c, Number),
                e.get("width") === "auto" && (this.width = this.height);
                if (c.length > 0)
                    for (i = c.length; i--; )
                        h += c[i];
                this.total = h,
                this.initTarget(),
                this.radius = b.floor(b.min(this.canvasWidth, this.canvasHeight) / 2)
            },
            getRegion: function(a, b, d) {
                var e = this.target.getShapeAt(a, b, d);
                return e !== c && this.shapes[e] !== c ? this.shapes[e] : c
            },
            getCurrentRegionFields: function() {
                var a = this.currentRegion;
                return {
                    isNull: this.values[a] === c,
                    value: this.values[a],
                    percent: this.values[a] / this.total * 100,
                    color: this.options.get("sliceColors")[a % this.options.get("sliceColors").length],
                    offset: a
                }
            },
            changeHighlight: function(a) {
                var b = this.currentRegion
                  , c = this.renderSlice(b, a)
                  , d = this.valueShapes[b];
                delete this.shapes[d],
                this.target.replaceWithShape(d, c),
                this.valueShapes[b] = c.id,
                this.shapes[c.id] = b
            },
            renderSlice: function(a, d) {
                var e = this.target, f = this.options, g = this.radius, h = f.get("borderWidth"), i = f.get("offset"), j = 2 * b.PI, k = this.values, l = this.total, m = i ? 2 * b.PI * (i / 360) : 0, n, o, p, q, r;
                q = k.length;
                for (p = 0; p < q; p++) {
                    n = m,
                    o = m,
                    l > 0 && (o = m + j * (k[p] / l));
                    if (a === p)
                        return r = f.get("sliceColors")[p % f.get("sliceColors").length],
                        d && (r = this.calcHighlightColor(r, f)),
                        e.drawPieSlice(g, g, g - h, n, o, c, r);
                    m = o
                }
            },
            render: function() {
                var a = this.target, d = this.values, e = this.options, f = this.radius, g = e.get("borderWidth"), h, i;
                if (!C._super.render.call(this))
                    return;
                g && a.drawCircle(f, f, b.floor(f - g / 2), e.get("borderColor"), c, g).append();
                for (i = d.length; i--; )
                    d[i] && (h = this.renderSlice(i).append(),
                    this.valueShapes[i] = h.id,
                    this.shapes[h.id] = i);
                a.render()
            }
        }),
        d.fn.sparkline.box = D = g(d.fn.sparkline._base, {
            type: "box",
            init: function(a, b, c, e, f) {
                D._super.init.call(this, a, b, c, e, f),
                this.values = d.map(b, Number),
                this.width = c.get("width") === "auto" ? "4.0em" : e,
                this.initTarget(),
                this.values.length || (this.disabled = 1)
            },
            getRegion: function() {
                return 1
            },
            getCurrentRegionFields: function() {
                var a = [{
                    field: "lq",
                    value: this.quartiles[0]
                }, {
                    field: "med",
                    value: this.quartiles[1]
                }, {
                    field: "uq",
                    value: this.quartiles[2]
                }];
                return this.loutlier !== c && a.push({
                    field: "lo",
                    value: this.loutlier
                }),
                this.routlier !== c && a.push({
                    field: "ro",
                    value: this.routlier
                }),
                this.lwhisker !== c && a.push({
                    field: "lw",
                    value: this.lwhisker
                }),
                this.rwhisker !== c && a.push({
                    field: "rw",
                    value: this.rwhisker
                }),
                a
            },
            render: function() {
                var a = this.target, d = this.values, e = d.length, f = this.options, g = this.canvasWidth, h = this.canvasHeight, i = f.get("chartRangeMin") === c ? b.min.apply(b, d) : f.get("chartRangeMin"), k = f.get("chartRangeMax") === c ? b.max.apply(b, d) : f.get("chartRangeMax"), l = 0, m, n, o, p, q, r, s, t, u, v, w;
                if (!D._super.render.call(this))
                    return;
                if (f.get("raw"))
                    f.get("showOutliers") && d.length > 5 ? (n = d[0],
                    m = d[1],
                    p = d[2],
                    q = d[3],
                    r = d[4],
                    s = d[5],
                    t = d[6]) : (m = d[0],
                    p = d[1],
                    q = d[2],
                    r = d[3],
                    s = d[4]);
                else {
                    d.sort(function(a, b) {
                        return a - b
                    }),
                    p = j(d, 1),
                    q = j(d, 2),
                    r = j(d, 3),
                    o = r - p;
                    if (f.get("showOutliers")) {
                        m = s = c;
                        for (u = 0; u < e; u++)
                            m === c && d[u] > p - o * f.get("outlierIQR") && (m = d[u]),
                            d[u] < r + o * f.get("outlierIQR") && (s = d[u]);
                        n = d[0],
                        t = d[e - 1]
                    } else
                        m = d[0],
                        s = d[e - 1]
                }
                this.quartiles = [p, q, r],
                this.lwhisker = m,
                this.rwhisker = s,
                this.loutlier = n,
                this.routlier = t,
                w = g / (k - i + 1),
                f.get("showOutliers") && (l = b.ceil(f.get("spotRadius")),
                g -= 2 * b.ceil(f.get("spotRadius")),
                w = g / (k - i + 1),
                n < m && a.drawCircle((n - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append(),
                t > s && a.drawCircle((t - i) * w + l, h / 2, f.get("spotRadius"), f.get("outlierLineColor"), f.get("outlierFillColor")).append()),
                a.drawRect(b.round((p - i) * w + l), b.round(h * .1), b.round((r - p) * w), b.round(h * .8), f.get("boxLineColor"), f.get("boxFillColor")).append(),
                a.drawLine(b.round((m - i) * w + l), b.round(h / 2), b.round((p - i) * w + l), b.round(h / 2), f.get("lineColor")).append(),
                a.drawLine(b.round((m - i) * w + l), b.round(h / 4), b.round((m - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(),
                a.drawLine(b.round((s - i) * w + l), b.round(h / 2), b.round((r - i) * w + l), b.round(h / 2), f.get("lineColor")).append(),
                a.drawLine(b.round((s - i) * w + l), b.round(h / 4), b.round((s - i) * w + l), b.round(h - h / 4), f.get("whiskerColor")).append(),
                a.drawLine(b.round((q - i) * w + l), b.round(h * .1), b.round((q - i) * w + l), b.round(h * .9), f.get("medianColor")).append(),
                f.get("target") && (v = b.ceil(f.get("spotRadius")),
                a.drawLine(b.round((f.get("target") - i) * w + l), b.round(h / 2 - v), b.round((f.get("target") - i) * w + l), b.round(h / 2 + v), f.get("targetColor")).append(),
                a.drawLine(b.round((f.get("target") - i) * w + l - v), b.round(h / 2), b.round((f.get("target") - i) * w + l + v), b.round(h / 2), f.get("targetColor")).append()),
                a.render()
            }
        }),
        G = g({
            init: function(a, b, c, d) {
                this.target = a,
                this.id = b,
                this.type = c,
                this.args = d
            },
            append: function() {
                return this.target.appendShape(this),
                this
            }
        }),
        H = g({
            _pxregex: /(\d+)(px)?\s*$/i,
            init: function(a, b, c) {
                if (!a)
                    return;
                this.width = a,
                this.height = b,
                this.target = c,
                this.lastShapeId = null,
                c[0] && (c = c[0]),
                d.data(c, "_jqs_vcanvas", this)
            },
            drawLine: function(a, b, c, d, e, f) {
                return this.drawShape([[a, b], [c, d]], e, f)
            },
            drawShape: function(a, b, c, d) {
                return this._genShape("Shape", [a, b, c, d])
            },
            drawCircle: function(a, b, c, d, e, f) {
                return this._genShape("Circle", [a, b, c, d, e, f])
            },
            drawPieSlice: function(a, b, c, d, e, f, g) {
                return this._genShape("PieSlice", [a, b, c, d, e, f, g])
            },
            drawRect: function(a, b, c, d, e, f) {
                return this._genShape("Rect", [a, b, c, d, e, f])
            },
            getElement: function() {
                return this.canvas
            },
            getLastShapeId: function() {
                return this.lastShapeId
            },
            reset: function() {
                alert("reset not implemented")
            },
            _insert: function(a, b) {
                d(b).html(a)
            },
            _calculatePixelDims: function(a, b, c) {
                var e;
                e = this._pxregex.exec(b),
                e ? this.pixelHeight = e[1] : this.pixelHeight = d(c).height(),
                e = this._pxregex.exec(a),
                e ? this.pixelWidth = e[1] : this.pixelWidth = d(c).width()
            },
            _genShape: function(a, b) {
                var c = L++;
                return b.unshift(c),
                new G(this,c,a,b)
            },
            appendShape: function(a) {
                alert("appendShape not implemented")
            },
            replaceWithShape: function(a, b) {
                alert("replaceWithShape not implemented")
            },
            insertAfterShape: function(a, b) {
                alert("insertAfterShape not implemented")
            },
            removeShapeId: function(a) {
                alert("removeShapeId not implemented")
            },
            getShapeAt: function(a, b, c) {
                alert("getShapeAt not implemented")
            },
            render: function() {
                alert("render not implemented")
            }
        }),
        I = g(H, {
            init: function(b, e, f, g) {
                I._super.init.call(this, b, e, f),
                this.canvas = a.createElement("canvas"),
                f[0] && (f = f[0]),
                d.data(f, "_jqs_vcanvas", this),
                d(this.canvas).css({
                    display: "inline-block",
                    width: b,
                    height: e,
                    verticalAlign: "top"
                }),
                this._insert(this.canvas, f),
                this._calculatePixelDims(b, e, this.canvas),
                this.canvas.width = this.pixelWidth,
                this.canvas.height = this.pixelHeight,
                this.interact = g,
                this.shapes = {},
                this.shapeseq = [],
                this.currentTargetShapeId = c,
                d(this.canvas).css({
                    width: this.pixelWidth,
                    height: this.pixelHeight
                })
            },
            _getContext: function(a, b, d) {
                var e = this.canvas.getContext("2d");
                return a !== c && (e.strokeStyle = a),
                e.lineWidth = d === c ? 1 : d,
                b !== c && (e.fillStyle = b),
                e
            },
            reset: function() {
                var a = this._getContext();
                a.clearRect(0, 0, this.pixelWidth, this.pixelHeight),
                this.shapes = {},
                this.shapeseq = [],
                this.currentTargetShapeId = c
            },
            _drawShape: function(a, b, d, e, f) {
                var g = this._getContext(d, e, f), h, i;
                g.beginPath(),
                g.moveTo(b[0][0] + .5, b[0][1] + .5);
                for (h = 1,
                i = b.length; h < i; h++)
                    g.lineTo(b[h][0] + .5, b[h][1] + .5);
                d !== c && g.stroke(),
                e !== c && g.fill(),
                this.targetX !== c && this.targetY !== c && g.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a)
            },
            _drawCircle: function(a, d, e, f, g, h, i) {
                var j = this._getContext(g, h, i);
                j.beginPath(),
                j.arc(d, e, f, 0, 2 * b.PI, !1),
                this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a),
                g !== c && j.stroke(),
                h !== c && j.fill()
            },
            _drawPieSlice: function(a, b, d, e, f, g, h, i) {
                var j = this._getContext(h, i);
                j.beginPath(),
                j.moveTo(b, d),
                j.arc(b, d, e, f, g, !1),
                j.lineTo(b, d),
                j.closePath(),
                h !== c && j.stroke(),
                i && j.fill(),
                this.targetX !== c && this.targetY !== c && j.isPointInPath(this.targetX, this.targetY) && (this.currentTargetShapeId = a)
            },
            _drawRect: function(a, b, c, d, e, f, g) {
                return this._drawShape(a, [[b, c], [b + d, c], [b + d, c + e], [b, c + e], [b, c]], f, g)
            },
            appendShape: function(a) {
                return this.shapes[a.id] = a,
                this.shapeseq.push(a.id),
                this.lastShapeId = a.id,
                a.id
            },
            replaceWithShape: function(a, b) {
                var c = this.shapeseq, d;
                this.shapes[b.id] = b;
                for (d = c.length; d--; )
                    c[d] == a && (c[d] = b.id);
                delete this.shapes[a]
            },
            replaceWithShapes: function(a, b) {
                var c = this.shapeseq, d = {}, e, f, g;
                for (f = a.length; f--; )
                    d[a[f]] = !0;
                for (f = c.length; f--; )
                    e = c[f],
                    d[e] && (c.splice(f, 1),
                    delete this.shapes[e],
                    g = f);
                for (f = b.length; f--; )
                    c.splice(g, 0, b[f].id),
                    this.shapes[b[f].id] = b[f]
            },
            insertAfterShape: function(a, b) {
                var c = this.shapeseq, d;
                for (d = c.length; d--; )
                    if (c[d] === a) {
                        c.splice(d + 1, 0, b.id),
                        this.shapes[b.id] = b;
                        return
                    }
            },
            removeShapeId: function(a) {
                var b = this.shapeseq, c;
                for (c = b.length; c--; )
                    if (b[c] === a) {
                        b.splice(c, 1);
                        break
                    }
                delete this.shapes[a]
            },
            getShapeAt: function(a, b, c) {
                return this.targetX = b,
                this.targetY = c,
                this.render(),
                this.currentTargetShapeId
            },
            render: function() {
                var a = this.shapeseq, b = this.shapes, c = a.length, d = this._getContext(), e, f, g;
                d.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
                for (g = 0; g < c; g++)
                    e = a[g],
                    f = b[e],
                    this["_draw" + f.type].apply(this, f.args);
                this.interact || (this.shapes = {},
                this.shapeseq = [])
            }
        }),
        J = g(H, {
            init: function(b, c, e) {
                var f;
                J._super.init.call(this, b, c, e),
                e[0] && (e = e[0]),
                d.data(e, "_jqs_vcanvas", this),
                this.canvas = a.createElement("span"),
                d(this.canvas).css({
                    display: "inline-block",
                    position: "relative",
                    overflow: "hidden",
                    width: b,
                    height: c,
                    margin: "0px",
                    padding: "0px",
                    verticalAlign: "top"
                }),
                this._insert(this.canvas, e),
                this._calculatePixelDims(b, c, this.canvas),
                this.canvas.width = this.pixelWidth,
                this.canvas.height = this.pixelHeight,
                f = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '"' + ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + "px;height=" + this.pixelHeight + 'px;"></v:group>',
                this.canvas.insertAdjacentHTML("beforeEnd", f),
                this.group = d(this.canvas).children()[0],
                this.rendered = !1,
                this.prerender = ""
            },
            _drawShape: function(a, b, d, e, f) {
                var g = [], h, i, j, k, l, m, n;
                for (n = 0,
                m = b.length; n < m; n++)
                    g[n] = "" + b[n][0] + "," + b[n][1];
                return h = g.splice(0, 1),
                f = f === c ? 1 : f,
                i = d === c ? ' stroked="false" ' : ' strokeWeight="' + f + 'px" strokeColor="' + d + '" ',
                j = e === c ? ' filled="false"' : ' fillColor="' + e + '" filled="true" ',
                k = g[0] === g[g.length - 1] ? "x " : "",
                l = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + h + " l " + g.join(", ") + " " + k + 'e">' + " </v:shape>",
                l
            },
            _drawCircle: function(a, b, d, e, f, g, h) {
                var i, j, k;
                return b -= e,
                d -= e,
                i = f === c ? ' stroked="false" ' : ' strokeWeight="' + h + 'px" strokeColor="' + f + '" ',
                j = g === c ? ' filled="false"' : ' fillColor="' + g + '" filled="true" ',
                k = '<v:oval  id="jqsshape' + a + '" ' + i + j + ' style="position:absolute;top:' + d + "px; left:" + b + "px; width:" + e * 2 + "px; height:" + e * 2 + 'px"></v:oval>',
                k
            },
            _drawPieSlice: function(a, d, e, f, g, h, i, j) {
                var k, l, m, n, o, p, q, r;
                if (g === h)
                    return "";
                h - g === 2 * b.PI && (g = 0,
                h = 2 * b.PI),
                l = d + b.round(b.cos(g) * f),
                m = e + b.round(b.sin(g) * f),
                n = d + b.round(b.cos(h) * f),
                o = e + b.round(b.sin(h) * f);
                if (l === n && m === o) {
                    if (h - g < b.PI)
                        return "";
                    l = n = d + f,
                    m = o = e
                }
                return l === n && m === o && h - g < b.PI ? "" : (k = [d - f, e - f, d + f, e + f, l, m, n, o],
                p = i === c ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + i + '" ',
                q = j === c ? ' filled="false"' : ' fillColor="' + j + '" filled="true" ',
                r = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + " " + this.pixelHeight + '" ' + ' id="jqsshape' + a + '" ' + p + q + ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + "px;width:" + this.pixelWidth + 'px;padding:0px;margin:0px;" ' + ' path="m ' + d + "," + e + " wa " + k.join(", ") + ' x e">' + " </v:shape>",
                r)
            },
            _drawRect: function(a, b, c, d, e, f, g) {
                return this._drawShape(a, [[b, c], [b, c + e], [b + d, c + e], [b + d, c], [b, c]], f, g)
            },
            reset: function() {
                this.group.innerHTML = ""
            },
            appendShape: function(a) {
                var b = this["_draw" + a.type].apply(this, a.args);
                return this.rendered ? this.group.insertAdjacentHTML("beforeEnd", b) : this.prerender += b,
                this.lastShapeId = a.id,
                a.id
            },
            replaceWithShape: function(a, b) {
                var c = d("#jqsshape" + a)
                  , e = this["_draw" + b.type].apply(this, b.args);
                c[0].outerHTML = e
            },
            replaceWithShapes: function(a, b) {
                var c = d("#jqsshape" + a[0]), e = "", f = b.length, g;
                for (g = 0; g < f; g++)
                    e += this["_draw" + b[g].type].apply(this, b[g].args);
                c[0].outerHTML = e;
                for (g = 1; g < a.length; g++)
                    d("#jqsshape" + a[g]).remove()
            },
            insertAfterShape: function(a, b) {
                var c = d("#jqsshape" + a)
                  , e = this["_draw" + b.type].apply(this, b.args);
                c[0].insertAdjacentHTML("afterEnd", e)
            },
            removeShapeId: function(a) {
                var b = d("#jqsshape" + a);
                this.group.removeChild(b[0])
            },
            getShapeAt: function(a, b, c) {
                var d = a.id.substr(8);
                return d
            },
            render: function() {
                this.rendered || (this.group.innerHTML = this.prerender,
                this.rendered = !0)
            }
        })
    })
}
)(document, Math);
;(function(h, j, e) {
    var a = "placeholder"in j.createElement("input");
    var f = "placeholder"in j.createElement("textarea");
    var k = e.fn;
    var d = e.valHooks;
    var b = e.propHooks;
    var m;
    var l;
    if (a && f) {
        l = k.placeholder = function() {
            return this
        }
        ;
        l.input = l.textarea = true
    } else {
        l = k.placeholder = function() {
            var n = this;
            n.filter((a ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": c,
                "blur.placeholder": g
            }).data("placeholder-enabled", true).trigger("blur.placeholder");
            return n
        }
        ;
        l.input = a;
        l.textarea = f;
        m = {
            get: function(o) {
                var n = e(o);
                var p = n.data("placeholder-password");
                if (p) {
                    return p[0].value
                }
                return n.data("placeholder-enabled") && n.hasClass("placeholder") ? "" : o.value
            },
            set: function(o, q) {
                var n = e(o);
                var p = n.data("placeholder-password");
                if (p) {
                    return p[0].value = q
                }
                if (!n.data("placeholder-enabled")) {
                    return o.value = q
                }
                if (q == "") {
                    o.value = q;
                    if (o != j.activeElement) {
                        g.call(o)
                    }
                } else {
                    if (n.hasClass("placeholder")) {
                        c.call(o, true, q) || (o.value = q)
                    } else {
                        o.value = q
                    }
                }
                return n
            }
        };
        if (!a) {
            d.input = m;
            b.value = m
        }
        if (!f) {
            d.textarea = m;
            b.value = m
        }
        e(function() {
            e(j).delegate("form", "submit.placeholder", function() {
                var n = e(".placeholder", this).each(c);
                setTimeout(function() {
                    n.each(g)
                }, 10)
            })
        });
        e(h).bind("beforeunload.placeholder", function() {
            e(".placeholder").each(function() {
                this.value = ""
            })
        })
    }
    function i(o) {
        var n = {};
        var p = /^jQuery\d+$/;
        e.each(o.attributes, function(r, q) {
            if (q.specified && !p.test(q.name)) {
                n[q.name] = q.value
            }
        });
        return n
    }
    function c(o, p) {
        var n = this;
        var q = e(n);
        if (n.value == q.attr("placeholder") && q.hasClass("placeholder")) {
            if (q.data("placeholder-password")) {
                q = q.hide().next().show().attr("id", q.removeAttr("id").data("placeholder-id"));
                if (o === true) {
                    return q[0].value = p
                }
                q.focus()
            } else {
                n.value = "";
                q.removeClass("placeholder");
                n == j.activeElement && n.select()
            }
        }
    }
    function g() {
        var r;
        var n = this;
        var q = e(n);
        var p = this.id;
        if (n.value == "") {
            if (n.type == "password") {
                if (!q.data("placeholder-textinput")) {
                    try {
                        r = q.clone().attr({
                            type: "text"
                        })
                    } catch (o) {
                        r = e("<input>").attr(e.extend(i(this), {
                            type: "text"
                        }))
                    }
                    r.removeAttr("name").data({
                        "placeholder-password": q,
                        "placeholder-id": p
                    }).bind("focus.placeholder", c);
                    q.data({
                        "placeholder-textinput": r,
                        "placeholder-id": p
                    }).before(r)
                }
                q = q.removeAttr("id").hide().prev().attr("id", p).show()
            }
            q.addClass("placeholder");
            q[0].value = q.attr("placeholder")
        } else {
            q.removeClass("placeholder")
        }
    }
}(this, document, jQuery));
;window.Modernizr = function(a, b, c) {
    function w(a) {
        j.cssText = a
    }
    function x(a, b) {
        return w(m.join(a + ";") + (b || ""))
    }
    function y(a, b) {
        return typeof a === b
    }
    function z(a, b) {
        return !!~("" + a).indexOf(b)
    }
    function A(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)
                return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }
    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = {}, o = {}, p = {}, q = [], r = q.slice, s, t = function(a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))
            while (d--)
                j = b.createElement("div"),
                j.id = e ? e[d] : h + (d + 1),
                l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""),
        l.id = h,
        (m ? l : n).innerHTML += f,
        n.appendChild(l),
        m || (n.style.background = "",
        n.style.overflow = "hidden",
        k = g.style.overflow,
        g.style.overflow = "hidden",
        g.appendChild(n)),
        i = c(l, a),
        m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n),
        g.style.overflow = k),
        !!i
    }, u = {}.hasOwnProperty, v;
    !y(u, "undefined") && !y(u.call, "undefined") ? v = function(a, b) {
        return u.call(a, b)
    }
    : v = function(a, b) {
        return b in a && y(a.constructor.prototype[b], "undefined")
    }
    ,
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function")
            throw new TypeError;
        var d = r.call(arguments, 1)
          , e = function() {
            if (this instanceof e) {
                var a = function() {};
                a.prototype = c.prototype;
                var f = new a
                  , g = c.apply(f, d.concat(r.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(r.call(arguments)))
        };
        return e
    }
    ),
    n.touch = function() {
        var c;
        return "ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : t(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }),
        c
    }
    ;
    for (var B in n)
        v(n, B) && (s = B.toLowerCase(),
        e[s] = n[B](),
        q.push((e[s] ? "" : "no-") + s));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a)
                v(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c)
                return e;
            b = typeof b == "function" ? b() : b,
            typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a),
            e[a] = b
        }
        return e
    }
    ,
    w(""),
    i = k = null,
    e._version = d,
    e._prefixes = m,
    e.testStyles = t,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + q.join(" ") : ""),
    e
}(this, this.document);
Modernizr.addTest('android', function() {
    return !!navigator.userAgent.match(/Android/i)
});
Modernizr.addTest('chrome', function() {
    return !!navigator.userAgent.match(/Chrome/i)
});
Modernizr.addTest('firefox', function() {
    return !!navigator.userAgent.match(/Firefox/i)
});
Modernizr.addTest('iemobile', function() {
    return !!navigator.userAgent.match(/IEMobile/i)
});
Modernizr.addTest('ie', function() {
    return !!navigator.userAgent.match(/MSIE/i)
});
Modernizr.addTest('ie10', function() {
    return !!navigator.userAgent.match(/MSIE 10/i)
});
Modernizr.addTest('ie11', function() {
    return !!navigator.userAgent.match(/Trident.*rv:11\./)
});
Modernizr.addTest('ios', function() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
});
Modernizr.addTest('ios7 ipad', function() {
    return !!navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i)
});
(function(a, b) {
    "use strict";
    var c = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT"in Element
      , d = function() {
        for (var a, c, d = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"]], e = 0, f = d.length, g = {}; f > e; e++)
            if (a = d[e],
            a && a[1]in b) {
                for (e = 0,
                c = a.length; c > e; e++)
                    g[d[0][e]] = a[e];
                return g
            }
        return !1
    }()
      , e = {
        request: function(a) {
            var e = d.requestFullscreen;
            a = a || b.documentElement,
            /5\.1[\.\d]* Safari/.test(navigator.userAgent) ? a[e]() : a[e](c && Element.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            b[d.exitFullscreen]()
        },
        toggle: function(a) {
            this.isFullscreen ? this.exit() : this.request(a)
        },
        onchange: function() {},
        onerror: function() {},
        raw: d
    };
    return d ? (Object.defineProperties(e, {
        isFullscreen: {
            get: function() {
                return !!b[d.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return b[d.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!b[d.fullscreenEnabled]
            }
        }
    }),
    b.addEventListener(d.fullscreenchange, function(a) {
        e.onchange.call(e, a)
    }),
    b.addEventListener(d.fullscreenerror, function(a) {
        e.onerror.call(e, a)
    }),
    a.screenfull = e,
    void 0) : a.screenfull = !1
}
)(window, document);
!function($) {
    "use strict";
    var Shift = function(element) {
        this.$element = $(element)
        this.$prev = this.$element.prev()
        !this.$prev.length && (this.$parent = this.$element.parent())
    }
    Shift.prototype = {
        constructor: Shift,
        init: function() {
            var $el = this.$element
              , method = $el.data()['toggle'].split(':')[1]
              , $target = $el.data('target')
            $el.hasClass('in') || $el[method]($target).addClass('in')
        },
        reset: function() {
            this.$parent && this.$parent['prepend'](this.$element)
            !this.$parent && this.$element['insertAfter'](this.$prev)
            this.$element.removeClass('in')
        }
    }
    $.fn.shift = function(option) {
        return this.each(function() {
            var $this = $(this)
              , data = $this.data('shift')
            if (!data)
                $this.data('shift', (data = new Shift(this)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.shift.Constructor = Shift
}(window.jQuery);
Date.now = Date.now || function() {
    return +new Date;
}
;
!function($) {
    $(function() {
        $(document).on('click', "[data-toggle=fullscreen]", function(e) {
            if (screenfull.enabled) {
                screenfull.request();
            }
        });
        $('input[placeholder], textarea[placeholder]').placeholder();
        $("[data-toggle=popover]").popover();
        $(document).on('click', '.popover-title .close', function(e) {
            var $target = $(e.target)
              , $popover = $target.closest('.popover').prev();
            $popover && $popover.popover('hide');
        });
        $('[data-toggle="ajaxModal"]').on('click', function(e) {
            $('#ajaxModal').remove();
            e.preventDefault();
            var $this = $(this)
              , $remote = $this.data('remote') || $this.attr('href')
              , $modal = $('<div class="modal" id="ajaxModal"><div class="modal-body"></div></div>');
            $('body').append($modal);
            $modal.modal();
            $modal.load($remote);
        });
        $.fn.dropdown.Constructor.prototype.change = function(e) {
            e.preventDefault();
            var $item = $(e.target), $select, $checked = false, $menu, $label;
            !$item.is('a') && ($item = $item.closest('a'));
            $menu = $item.closest('.dropdown-menu');
            $label = $menu.parent().find('.dropdown-label');
            $labelHolder = $label.text();
            $select = $item.find('input');
            $checked = $select.is(':checked');
            if ($select.is(':disabled'))
                return;
            if ($select.attr('type') == 'radio' && $checked)
                return;
            if ($select.attr('type') == 'radio')
                $menu.find('li').removeClass('active');
            $item.parent().removeClass('active');
            !$checked && $item.parent().addClass('active');
            $select.prop("checked", !$select.prop("checked"));
            $items = $menu.find('li > a > input:checked');
            if ($items.length) {
                $text = [];
                $items.each(function() {
                    var $str = $(this).parent().text();
                    $str && $text.push($.trim($str));
                });
                $text = $text.length < 4 ? $text.join(', ') : $text.length + ' selected';
                $label.html($text);
            } else {
                $label.html($label.data('placeholder'));
            }
        }
        $(document).on('click.dropdown-menu', '.dropdown-select > li > a', $.fn.dropdown.Constructor.prototype.change);
        $("[data-toggle=tooltip]").tooltip();
        $(document).on('click', '[data-toggle^="class"]', function(e) {
            e && e.preventDefault();
            var $this = $(e.target), $class, $target, $tmp, $classes, $targets;
            !$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));
            $class = $this.data()['toggle'];
            $target = $this.data('target') || $this.attr('href');
            $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));
            $target && ($targets = $target.split(','));
            $targets && $targets.length && $.each($targets, function(index, value) {
                ($targets[index] != '#') && $($targets[index]).toggleClass($classes[index]);
            });
            $this.toggleClass('active');
        });
        $(document).on('click', '.panel-toggle', function(e) {
            e && e.preventDefault();
            var $this = $(e.target), $class = 'collapse', $target;
            if (!$this.is('a'))
                $this = $this.closest('a');
            $target = $this.closest('.panel');
            $target.find('.panel-body').toggleClass($class);
            $this.toggleClass('active');
        });
        $('.carousel.auto').carousel();
        $(document).on('click.button.data-api', '[data-loading-text]', function(e) {
            var $this = $(e.target);
            $this.is('i') && ($this = $this.parent());
            $this.button('loading');
        });
        var scrollToTop = function() {
            !location.hash && setTimeout(function() {
                if (!pageYOffset)
                    window.scrollTo(0, 0);
            }, 1000);
        };
        var $window = $(window);
        var mobile = function(option) {
            if (option == 'reset') {
                $('[data-toggle^="shift"]').shift('reset');
                return true;
            }
            scrollToTop();
            $('[data-toggle^="shift"]').shift('init');
            return true;
        };
        $window.width() < 768 && mobile();
        var $resize, $width = $window.width();
        $window.resize(function() {
            if ($width !== $window.width()) {
                clearTimeout($resize);
                $resize = setTimeout(function() {
                    $window.width() < 767 && mobile();
                    $window.width() >= 768 && mobile('reset') && fixVbox();
                    $width = $window.width();
                }, 500);
            }
        });
        var fixVbox = function() {
            $('.vbox > footer').prev('section').addClass('w-f');
            $('.ie11 .vbox').each(function() {
                $(this).height($(this).parent().height());
            });
        }
        fixVbox();
        $(document).on('click', '[data-ride^="collapse"] a', function(e) {
            var $this = $(e.target), $active;
            $this.is('a') || ($this = $this.closest('a'));
            if ($('.nav-vertical').length) {
                return;
            }
            $active = $this.parent().siblings(".active");
            $active && $active.find('> a').toggleClass('active') && $active.toggleClass('active').find('> ul:visible').slideUp(200);
            ($this.hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);
            $this.toggleClass('active').parent().toggleClass('active');
            $this.next().is('ul') && e.preventDefault();
        });
    });
}(window.jQuery);
!function($) {
    $(function() {
        var isRgbaSupport = function() {
            var value = 'rgba(1,1,1,0.5)'
              , el = document.createElement('p')
              , result = false;
            try {
                el.style.color = value;
                result = /^rgba/.test(el.style.color);
            } catch (e) {}
            el = null;
            return result;
        };
        var toRgba = function(str, alpha) {
            var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
            var matches = patt.exec(str);
            return "rgba(" + parseInt(matches[1], 16) + "," + parseInt(matches[2], 16) + "," + parseInt(matches[3], 16) + "," + alpha + ")";
        };
        var generateSparkline = function($re) {
            $(".sparkline").each(function() {
                var $data = $(this).data();
                if ($re && !$data.resize)
                    return;
                if ($data.type == 'bar') {
                    !$data.barColor && ($data.barColor = "#3fcf7f");
                    !$data.barSpacing && ($data.barSpacing = 2);
                    $(this).next('.axis').find('li').css('width', $data.barWidth + 'px').css('margin-right', $data.barSpacing + 'px');
                }
                ;($data.type == 'pie') && $data.sliceColors && ($data.sliceColors = eval($data.sliceColors));
                ($data.type == 'bar') && $data.stackedBarColor && ($data.stackedBarColor = eval($data.stackedBarColor));
                $data.fillColor && ($data.fillColor.indexOf("#") !== -1) && isRgbaSupport() && ($data.fillColor = toRgba($data.fillColor, 0.5));
                $data.valueSpots = {
                    '0:': $data.spotColor
                };
                $data.minSpotColor = false;
                $(this).sparkline($data.data || "html", $data);
                if ($(this).data("compositeData")) {
                    var $cdata = {};
                    $cdata = $(this).data("compositeConfig");
                    $cdata.composite = true;
                    $cdata.valueSpots = {
                        '0:': $cdata.spotColor
                    };
                    $cdata.fillColor && ($cdata.fillColor.indexOf("#") !== -1) && isRgbaSupport() && ($cdata.fillColor = toRgba($cdata.fillColor, 0.5));
                    $(this).sparkline($(this).data("compositeData"), $cdata);
                }
                ;if ($data.type == 'line') {
                    $(this).next('.axis').addClass('axis-full');
                }
                ;
            });
        };
        var sparkResize;
        $(window).resize(function(e) {
            clearTimeout(sparkResize);
            sparkResize = setTimeout(function() {
                generateSparkline(true)
            }, 500);
        });
        generateSparkline(false);
        var updatePie = function($that) {
            var $this = $that
              , $newValue = Math.round(100 * Math.random());
            $this.data('easyPieChart').update($newValue);
        };
        $('.easypiechart').each(function() {
            var $barColor = $(this).data("barColor") || function($percent) {
                $percent /= 100;
                return "rgb(" + Math.round(255 * (1 - $percent)) + ", " + Math.round(255 * $percent) + ", 125)";
            }
              , $trackColor = $(this).data("trackColor") || "#c8d2db"
              , $scaleColor = $(this).data("scaleColor")
              , $lineWidth = $(this).data("lineWidth") || 12
              , $size = $(this).data("size") || 130
              , $animate = $(this).data("animate") || 1000;
            $(this).easyPieChart({
                barColor: $barColor,
                trackColor: $trackColor,
                scaleColor: $scaleColor,
                lineCap: 'butt',
                lineWidth: $lineWidth,
                size: $size,
                animate: $animate,
                onStop: function() {
                    var $this = this.$el;
                    $this.data("loop") && setTimeout(function() {
                        $this.data("loop") && updatePie($this)
                    }, 2000);
                },
                onStep: function(value) {
                    this.$el.find('span').text(parseInt(value));
                }
            });
        });
        $(document).on('click', '[data-toggle^="class:pie"]', function(e) {
            e && e.preventDefault();
            var $btn = $(e.target), $loop = $('[data-loop]').data('loop'), $target;
            !$btn.data('toggle') && ($btn = $btn.closest('[data-toggle^="class"]'));
            $target = $btn.data('target');
            !$target && ($target = $btn.closest('[data-loop]'));
            $target.data('loop', !$loop);
            !$loop && updatePie($('[data-loop]'));
        });
        $(".combodate").each(function() {
            $(this).combodate();
            $(this).next('.combodate').find('select').addClass('form-control');
        });
        $(".datepicker-input").each(function() {
            $(this).datepicker();
        });
        $('.dropfile').each(function() {
            var $dropbox = $(this);
            if (typeof window.FileReader === 'undefined') {
                $('small', this).html('File API & FileReader API not supported').addClass('text-danger');
                return;
            }
            this.ondragover = function() {
                $dropbox.addClass('hover');
                return false;
            }
            ;
            this.ondragend = function() {
                $dropbox.removeClass('hover');
                return false;
            }
            ;
            this.ondrop = function(e) {
                e.preventDefault();
                $dropbox.removeClass('hover').html('');
                var file = e.dataTransfer.files[0]
                  , reader = new FileReader();
                reader.onload = function(event) {
                    $dropbox.append($('<img>').attr('src', event.target.result));
                }
                ;
                reader.readAsDataURL(file);
                return false;
            }
            ;
        });
        var addPill = function($input) {
            var $text = $input.val(), $pills = $input.closest('.pillbox'), $repeat = false, $repeatPill;
            if ($text == "")
                return;
            $("li", $pills).text(function(i, v) {
                if (v == $text) {
                    $repeatPill = $(this);
                    $repeat = true;
                }
            });
            if ($repeat) {
                $repeatPill.fadeOut().fadeIn();
                return;
            }
            ;$item = $('<li class="label bg-dark">' + $text + '</li> ');
            $item.insertBefore($input);
            $input.val('');
            $pills.trigger('change', $item);
        };
        $('.pillbox input').on('blur', function() {
            addPill($(this));
        });
        $('.pillbox input').on('keypress', function(e) {
            if (e.which == 13) {
                e.preventDefault();
                addPill($(this));
            }
        });
        $('.slider').each(function() {
            $(this).slider();
        });
        $(document).on('change', '.wizard', function(e, data) {
            if (data.direction !== 'next')
                return;
            var item = $(this).wizard('selectedItem');
            var $step = $(this).find('.step-pane:eq(' + (item.step - 1) + ')');
            var validated = true;
            $('[data-required="true"]', $step).each(function() {
                return (validated = $(this).parsley('validate'));
            });
            if (!validated)
                return e.preventDefault();
        });
        if ($.fn.sortable) {
            $('.sortable').sortable();
        }
        $('.no-touch .slim-scroll').each(function() {
            var $self = $(this), $data = $self.data(), $slimResize;
            // $self.slimScroll($data);
            $(window).resize(function(e) {
                clearTimeout($slimResize);
                $slimResize = setTimeout(function() {
                    // $self.slimScroll($data);
                }, 500);
            });
        });
        if ($.support.pjax) {
            $(document).on('click', 'a[data-pjax]', function(event) {
                event.preventDefault();
                var container = $($(this).data('target'));
                $.pjax.click(event, {
                    container: container
                });
            })
        }
        ;$('.portlet').each(function() {
            $(".portlet").sortable({
                connectWith: '.portlet',
                iframeFix: false,
                items: '.portlet-item',
                opacity: 0.8,
                helper: 'original',
                revert: true,
                forceHelperSize: true,
                placeholder: 'sortable-box-placeholder round-all',
                forcePlaceholderSize: true,
                tolerance: 'pointer'
            });
        });
    });
}(window.jQuery);
$(document).ready(function() {
    $('#docs pre code').each(function() {
        var $this = $(this);
        var t = $this.html();
        $this.html(t.replace(/</g, '&lt;').replace(/>/g, '&gt;'));
    });
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    ;$(document).on('click', '.the-icons a', function(e) {
        e && e.preventDefault();
    });
    $(document).on('change', 'table thead [type="checkbox"]', function(e) {
        e && e.preventDefault();
        var $table = $(e.target).closest('table')
          , $checked = $(e.target).is(':checked');
        $('tbody [type="checkbox"]', $table).prop('checked', $checked);
    });
    $(document).on('click', '[data-toggle^="progress"]', function(e) {
        e && e.preventDefault();
        $el = $(e.target);
        $target = $($el.data('target'));
        $('.progress', $target).each(function() {
            var $max = 50, $data, $ps = $('.progress-bar', this).last();
            ($(this).hasClass('progress-xs') || $(this).hasClass('progress-sm')) && ($max = 100);
            $data = Math.floor(Math.random() * $max) + '%';
            $ps.css('width', $data).attr('data-original-title', $data);
        });
    });
    function addNotification($notes) {
        var $el = $('.nav-msg')
          , $n = $('.count-n:first', $el)
          , $item = $('.list-group-item:first', $el).clone()
          , $v = parseInt($n.text());
        $('.count-n', $el).fadeOut().fadeIn().text($v + 1);
        $item.attr('href', $notes.link);
        $item.find('.pull-left').html($notes.icon);
        $item.find('.media-body').html($notes.title);
        $item.hide().prependTo($el.find('.list-group')).slideDown().css('display', 'block');
    }
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var addDragEvent = function($this) {
        var eventObject = {
            title: $.trim($this.text()),
            className: $this.attr('class').replace('label', '')
        };
        $this.data('eventObject', eventObject);
        $this.draggable({
            zIndex: 999,
            revert: true,
            revertDuration: 0
        });
    };
    $('.calendar').each(function() {
        $(this).fullCalendar({
            header: {
                left: 'prev,next',
                center: 'title',
                right: 'today,month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true,
            drop: function(date, allDay) {
                var originalEventObject = $(this).data('eventObject');
                var copiedEventObject = $.extend({}, originalEventObject);
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
                if ($('#drop-remove').is(':checked')) {
                    $(this).remove();
                }
            },
            events: [{
                title: 'All Day Event',
                start: new Date(y,m,1)
            }, {
                title: 'Long Event',
                start: new Date(y,m,d - 5),
                end: new Date(y,m,d - 2),
                className: 'bg-primary'
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y,m,d - 3,16,0),
                allDay: false
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y,m,d + 4,16,0),
                allDay: false
            }, {
                title: 'Meeting',
                start: new Date(y,m,d,10,30),
                allDay: false
            }, {
                title: 'Lunch',
                start: new Date(y,m,d,12,0),
                end: new Date(y,m,d,14,0),
                allDay: false
            }, {
                title: 'Birthday Party',
                start: new Date(y,m,d + 1,19,0),
                end: new Date(y,m,d + 1,22,30),
                allDay: false
            }, {
                title: 'Click for Google',
                start: new Date(y,m,28),
                end: new Date(y,m,29),
                url: 'http://google.com/'
            }]
        });
    });
    $('#myEvents').on('change', function(e, item) {
        addDragEvent($(item));
    });
    $('#myEvents li').each(function() {
        addDragEvent($(this));
    });
    var DataGridDataSource = function(options) {
        this._formatter = options.formatter;
        this._columns = options.columns;
        this._delay = options.delay;
    };
    DataGridDataSource.prototype = {
        columns: function() {
            return this._columns;
        },
        data: function(options, callback) {
            var url = 'js/data/datagrid.json';
            var self = this;
            setTimeout(function() {
                var data = $.extend(true, [], self._data);
                $.ajax(url, {
                    dataType: 'json',
                    async: false,
                    type: 'GET'
                }).done(function(response) {
                    data = response.geonames;
                    if (options.search) {
                        data = _.filter(data, function(item) {
                            var match = false;
                            _.each(item, function(prop) {
                                if (_.isString(prop) || _.isFinite(prop)) {
                                    if (prop.toString().toLowerCase().indexOf(options.search.toLowerCase()) !== -1)
                                        match = true;
                                }
                            });
                            return match;
                        });
                    }
                    if (options.filter) {
                        data = _.filter(data, function(item) {
                            switch (options.filter.value) {
                            case 'lt5m':
                                if (item.population < 5000000)
                                    return true;
                                break;
                            case 'gte5m':
                                if (item.population >= 5000000)
                                    return true;
                                break;
                            default:
                                return true;
                                break;
                            }
                        });
                    }
                    var count = data.length;
                    if (options.sortProperty) {
                        data = _.sortBy(data, options.sortProperty);
                        if (options.sortDirection === 'desc')
                            data.reverse();
                    }
                    var startIndex = options.pageIndex * options.pageSize;
                    var endIndex = startIndex + options.pageSize;
                    var end = (endIndex > count) ? count : endIndex;
                    var pages = Math.ceil(count / options.pageSize);
                    var page = options.pageIndex + 1;
                    var start = startIndex + 1;
                    data = data.slice(startIndex, endIndex);
                    if (self._formatter)
                        self._formatter(data);
                    callback({
                        data: data,
                        start: start,
                        end: end,
                        count: count,
                        pages: pages,
                        page: page
                    });
                }).fail(function(e) {});
            }, self._delay);
        }
    };
    $('#MyStretchGrid').each(function() {
        $(this).datagrid({
            dataSource: new DataGridDataSource({
                columns: [{
                    property: 'toponymName',
                    label: 'Name',
                    sortable: true
                }, {
                    property: 'countrycode',
                    label: 'Country',
                    sortable: true
                }, {
                    property: 'population',
                    label: 'Population',
                    sortable: true
                }, {
                    property: 'fcodeName',
                    label: 'Type',
                    sortable: true
                }, {
                    property: 'geonameId',
                    label: 'Edit',
                    sortable: true
                }],
                formatter: function(items) {
                    $.each(items, function(index, item) {
                        item.geonameId = '<a href="#edit?geonameid=' + item.geonameId + '"><i class="icon-pencil"></i></a>';
                    });
                }
            })
        });
    });
    $('[data-ride="datatables"]').each(function() {
        var oTable = $(this).dataTable({
            "bProcessing": true,
            "sAjaxSource": "js/data/datatable.json",
            "sDom": "<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",
            "sPaginationType": "full_numbers",
            "aoColumns": [{
                "mData": "engine"
            }, {
                "mData": "browser"
            }, {
                "mData": "platform"
            }, {
                "mData": "version"
            }, {
                "mData": "grade"
            }]
        });
    });
    if ($.fn.select2) {
        $("#select2-option").select2();
        $("#select2-tags").select2({
            tags: ["red", "green", "blue"],
            tokenSeparators: [",", " "]
        });
    }
    $('a[href="#morris"]').on('shown.bs.tab', function() {
        if ($('.graph').children().length > 0)
            return;
        buildMorris(false);
        var morrisResize;
        $(window).resize(function(e) {
            clearTimeout(morrisResize);
            morrisResize = setTimeout(function() {
                buildMorris(true)
            }, 500);
        });
    });
    var buildMorris = function($re) {
        if ($re) {
            $('.graph').html('');
        }
        var tax_data = [{
            "period": "2011 Q3",
            "licensed": 3407,
            "sorned": 660
        }, {
            "period": "2011 Q2",
            "licensed": 3351,
            "sorned": 629
        }, {
            "period": "2011 Q1",
            "licensed": 3269,
            "sorned": 618
        }, {
            "period": "2010 Q4",
            "licensed": 3246,
            "sorned": 661
        }, {
            "period": "2009 Q4",
            "licensed": 3171,
            "sorned": 676
        }, {
            "period": "2008 Q4",
            "licensed": 3155,
            "sorned": 681
        }, {
            "period": "2007 Q4",
            "licensed": 3226,
            "sorned": 620
        }, {
            "period": "2006 Q4",
            "licensed": 3245,
            "sorned": null
        }, {
            "period": "2005 Q4",
            "licensed": 3289,
            "sorned": null
        }];
        Morris.Line({
            element: 'hero-graph',
            data: tax_data,
            xkey: 'period',
            ykeys: ['licensed', 'sorned'],
            labels: ['Licensed', 'Off the road'],
            lineColors: ['#59dbbf', '#aeb6cb']
        });
        Morris.Donut({
            element: 'hero-donut',
            data: [{
                label: 'Jam',
                value: 25
            }, {
                label: 'Frosted',
                value: 40
            }, {
                label: 'Custard',
                value: 25
            }, {
                label: 'Sugar',
                value: 10
            }],
            colors: ['#afcf6f'],
            formatter: function(y) {
                return y + "%"
            }
        });
        buildArea();
        Morris.Bar({
            element: 'hero-bar',
            data: [{
                device: 'iPhone',
                geekbench: 136
            }, {
                device: 'iPhone 3G',
                geekbench: 137
            }, {
                device: 'iPhone 3GS',
                geekbench: 275
            }, {
                device: 'iPhone 4',
                geekbench: 380
            }, {
                device: 'iPhone 4S',
                geekbench: 655
            }, {
                device: 'iPhone 5',
                geekbench: 1571
            }],
            xkey: 'device',
            ykeys: ['geekbench'],
            labels: ['Geekbench'],
            barRatio: 0.4,
            xLabelAngle: 35,
            hideHover: 'auto',
            barColors: ['#aeb6cb']
        });
    };
    var buildArea = function() {
        Morris.Area({
            element: 'hero-area',
            data: [{
                period: '2010 Q1',
                iphone: 2666,
                ipad: null,
                itouch: 2647
            }, {
                period: '2010 Q2',
                iphone: 2778,
                ipad: 2294,
                itouch: 2441
            }, {
                period: '2010 Q3',
                iphone: 4912,
                ipad: 1969,
                itouch: 2501
            }, {
                period: '2010 Q4',
                iphone: 3767,
                ipad: 3597,
                itouch: 5689
            }, {
                period: '2011 Q1',
                iphone: 6810,
                ipad: 1914,
                itouch: 2293
            }, {
                period: '2011 Q2',
                iphone: 5670,
                ipad: 4293,
                itouch: 1881
            }, {
                period: '2011 Q3',
                iphone: 4820,
                ipad: 3795,
                itouch: 1588
            }, {
                period: '2011 Q4',
                iphone: 15073,
                ipad: 5967,
                itouch: 5175
            }, {
                period: '2012 Q1',
                iphone: 10687,
                ipad: 4460,
                itouch: 2028
            }, {
                period: '2012 Q2',
                iphone: 8432,
                ipad: 5713,
                itouch: 1791
            }],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            hideHover: 'auto',
            lineWidth: 2,
            pointSize: 4,
            lineColors: ['#59dbbf', '#aeb6cb', '#5dcff3'],
            fillOpacity: 0.5,
            smooth: true,
        });
    };
    $('#tab1 #hero-area').each(function() {
        buildArea();
        var morrisResizes;
        $(window).resize(function(e) {
            clearTimeout(morrisResizes);
            morrisResizes = setTimeout(function() {
                $('.graph').html('');
                buildArea();
            }, 500);
        });
    });
});
