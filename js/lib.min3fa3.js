! function (e, t, n) {
	function i(e, t) {
		return typeof e === t
	}

	function r() {
		return "function" != typeof t.createElement ? t.createElement(arguments[0]) : p ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
	}

	function a() {
		var e = t.body;
		return e || (e = r(p ? "svg" : "body"), e.fake = !0), e
	}

	function s(e, n, i, s) {
		var o, l, u, c, p = "modernizr",
			h = r("div"),
			f = a();
		if (parseInt(i, 10))
			for (; i--;) u = r("div"), u.id = s ? s[i] : p + (i + 1), h.appendChild(u);
		return o = r("style"), o.type = "text/css", o.id = "s" + p, (f.fake ? f : h).appendChild(o), f.appendChild(h), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)), h.id = p, f.fake && (f.style.background = "", f.style.overflow = "hidden", c = d.style.overflow, d.style.overflow = "hidden", d.appendChild(f)), l = n(h, e), f.fake ? (f.parentNode.removeChild(f), d.style.overflow = c, d.offsetHeight) : h.parentNode.removeChild(h), !!l
	}
	var o = [],
		l = {
			_version: "3.5.0",
			_config: {
				classPrefix: "",
				enableClasses: !0,
				enableJSClass: !0,
				usePrefixes: !0
			},
			_q: [],
			on: function (e, t) {
				var n = this;
				setTimeout(function () {
					t(n[e])
				}, 0)
			},
			addTest: function (e, t, n) {
				o.push({
					name: e,
					fn: t,
					options: n
				})
			},
			addAsyncTest: function (e) {
				o.push({
					name: null,
					fn: e
				})
			}
		},
		u = function () {};
	u.prototype = l, (u = new u).addTest("history", function () {
		var t = navigator.userAgent;
		return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol) && (e.history && "pushState" in e.history)
	}), u.addTest("picture", "HTMLPictureElement" in e), u.addTest("promises", function () {
		return "Promise" in e && "resolve" in e.Promise && "reject" in e.Promise && "all" in e.Promise && "race" in e.Promise && function () {
			var t;
			return new e.Promise(function (e) {
				t = e
			}), "function" == typeof t
		}()
	});
	var c = [],
		d = t.documentElement,
		p = "svg" === d.nodeName.toLowerCase(),
		h = function () {
			var t = e.matchMedia || e.msMatchMedia;
			return t ? function (e) {
				var n = t(e);
				return n && n.matches || !1
			} : function (t) {
				var n = !1;
				return s("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
					n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
				}), n
			}
		}();
	l.mq = h, u.addTest("mediaqueries", h("only all")),
		function () {
			var e, t, n, r, a, s, l;
			for (var d in o)
				if (o.hasOwnProperty(d)) {
					if (e = [], (t = o[d]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
						for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
					for (r = i(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) s = e[a], 1 === (l = s.split(".")).length ? u[l[0]] = r : (!u[l[0]] || u[l[0]] instanceof Boolean || (u[l[0]] = new Boolean(u[l[0]])), u[l[0]][l[1]] = r), c.push((r ? "" : "no-") + l.join("-"))
				}
		}(), delete l.addTest, delete l.addAsyncTest;
	for (var f = 0; f < u._q.length; f++) u._q[f]();
	e.Modernizr = u
}(window, document),
function (e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
	"use strict";

	function n(e, t) {
		var n = (t = t || te).createElement("script");
		n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
	}

	function i(e) {
		var t = !!e && "length" in e && e.length,
			n = fe.type(e);
		return "function" !== n && !fe.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function r(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}

	function a(e, t, n) {
		return fe.isFunction(t) ? fe.grep(e, function (e, i) {
			return !!t.call(e, i, e) !== n
		}) : t.nodeType ? fe.grep(e, function (e) {
			return e === t !== n
		}) : "string" != typeof t ? fe.grep(e, function (e) {
			return se.call(t, e) > -1 !== n
		}) : Ce.test(t) ? fe.filter(t, e, n) : (t = fe.filter(t, e), fe.grep(e, function (e) {
			return se.call(t, e) > -1 !== n && 1 === e.nodeType
		}))
	}

	function s(e, t) {
		for (;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function o(e) {
		var t = {};
		return fe.each(e.match(Le) || [], function (e, n) {
			t[n] = !0
		}), t
	}

	function l(e) {
		return e
	}

	function u(e) {
		throw e
	}

	function c(e, t, n, i) {
		var r;
		try {
			e && fe.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && fe.isFunction(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
		} catch (e) {
			n.apply(void 0, [e])
		}
	}

	function d() {
		te.removeEventListener("DOMContentLoaded", d), e.removeEventListener("load", d), fe.ready()
	}

	function p() {
		this.expando = fe.expando + p.uid++
	}

	function h(e) {
		return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : $e.test(e) ? JSON.parse(e) : e)
	}

	function f(e, t, n) {
		var i;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(He, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
				try {
					n = h(n)
				} catch (e) {}
				Ne.set(e, t, n)
			} else n = void 0;
		return n
	}

	function v(e, t, n, i) {
		var r, a = 1,
			s = 20,
			o = i ? function () {
				return i.cur()
			} : function () {
				return fe.css(e, t, "")
			},
			l = o(),
			u = n && n[3] || (fe.cssNumber[t] ? "" : "px"),
			c = (fe.cssNumber[t] || "px" !== u && +l) && Fe.exec(fe.css(e, t));
		if (c && c[3] !== u) {
			u = u || c[3], n = n || [], c = +l || 1;
			do {
				a = a || ".5", c /= a, fe.style(e, t, c + u)
			} while (a !== (a = o() / l) && 1 !== a && --s)
		}
		return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
	}

	function m(e) {
		var t, n = e.ownerDocument,
			i = e.nodeName,
			r = Re[i];
		return r || (t = n.body.appendChild(n.createElement(i)), r = fe.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Re[i] = r, r)
	}

	function g(e, t) {
		for (var n, i, r = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (n = i.style.display, t ? ("none" === n && (r[a] = ze.get(i, "display") || null, r[a] || (i.style.display = "")), "" === i.style.display && Be(i) && (r[a] = m(i))) : "none" !== n && (r[a] = "none", ze.set(i, "display", n)));
		for (a = 0; a < s; a++) null != r[a] && (e[a].style.display = r[a]);
		return e
	}

	function y(e, t) {
		var n;
		return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && r(e, t) ? fe.merge([e], n) : n
	}

	function b(e, t) {
		for (var n = 0, i = e.length; n < i; n++) ze.set(e[n], "globalEval", !t || ze.get(t[n], "globalEval"))
	}

	function w(e, t, n, i, r) {
		for (var a, s, o, l, u, c, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
			if ((a = e[h]) || 0 === a)
				if ("object" === fe.type(a)) fe.merge(p, a.nodeType ? [a] : a);
				else if (Ge.test(a)) {
			for (s = s || d.appendChild(t.createElement("div")), o = (We.exec(a) || ["", ""])[1].toLowerCase(), l = Ye[o] || Ye._default, s.innerHTML = l[1] + fe.htmlPrefilter(a) + l[2], c = l[0]; c--;) s = s.lastChild;
			fe.merge(p, s.childNodes), (s = d.firstChild).textContent = ""
		} else p.push(t.createTextNode(a));
		for (d.textContent = "", h = 0; a = p[h++];)
			if (i && fe.inArray(a, i) > -1) r && r.push(a);
			else if (u = fe.contains(a.ownerDocument, a), s = y(d.appendChild(a), "script"), u && b(s), n)
			for (c = 0; a = s[c++];) Xe.test(a.type || "") && n.push(a);
		return d
	}

	function x() {
		return !0
	}

	function T() {
		return !1
	}

	function E() {
		try {
			return te.activeElement
		} catch (e) {}
	}

	function C(e, t, n, i, r, a) {
		var s, o;
		if ("object" == typeof t) {
			"string" != typeof n && (i = i || n, n = void 0);
			for (o in t) C(e, o, n, i, t[o], a);
			return e
		}
		if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = T;
		else if (!r) return e;
		return 1 === a && (s = r, r = function (e) {
			return fe().off(e), s.apply(this, arguments)
		}, r.guid = s.guid || (s.guid = fe.guid++)), e.each(function () {
			fe.event.add(this, t, r, i, n)
		})
	}

	function S(e, t) {
		return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr") ? fe(">tbody", e)[0] || e : e
	}

	function k(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function M(e) {
		var t = nt.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function I(e, t) {
		var n, i, r, a, s, o, l, u;
		if (1 === t.nodeType) {
			if (ze.hasData(e) && (a = ze.access(e), s = ze.set(t, a), u = a.events)) {
				delete s.handle, s.events = {};
				for (r in u)
					for (n = 0, i = u[r].length; n < i; n++) fe.event.add(t, r, u[r][n])
			}
			Ne.hasData(e) && (o = Ne.access(e), l = fe.extend({}, o), Ne.set(t, l))
		}
	}

	function L(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function P(e, t, i, r) {
		t = re.apply([], t);
		var a, s, o, l, u, c, d = 0,
			p = e.length,
			h = p - 1,
			f = t[0],
			v = fe.isFunction(f);
		if (v || p > 1 && "string" == typeof f && !pe.checkClone && tt.test(f)) return e.each(function (n) {
			var a = e.eq(n);
			v && (t[0] = f.call(this, n, a.html())), P(a, t, i, r)
		});
		if (p && (a = w(t, e[0].ownerDocument, !1, e, r), s = a.firstChild, 1 === a.childNodes.length && (a = s), s || r)) {
			for (l = (o = fe.map(y(a, "script"), k)).length; d < p; d++) u = a, d !== h && (u = fe.clone(u, !0, !0), l && fe.merge(o, y(u, "script"))), i.call(e[d], u, d);
			if (l)
				for (c = o[o.length - 1].ownerDocument, fe.map(o, M), d = 0; d < l; d++) u = o[d], Xe.test(u.type || "") && !ze.access(u, "globalEval") && fe.contains(c, u) && (u.src ? fe._evalUrl && fe._evalUrl(u.src) : n(u.textContent.replace(it, ""), c))
		}
		return e
	}

	function D(e, t, n) {
		for (var i, r = t ? fe.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || fe.cleanData(y(i)), i.parentNode && (n && fe.contains(i.ownerDocument, i) && b(y(i, "script")), i.parentNode.removeChild(i));
		return e
	}

	function O(e, t, n) {
		var i, r, a, s, o = e.style;
		return (n = n || st(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)), !pe.pixelMarginRight() && at.test(s) && rt.test(t) && (i = o.width, r = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = s, s = n.width, o.width = i, o.minWidth = r, o.maxWidth = a)), void 0 !== s ? s + "" : s
	}

	function A(e, t) {
		return {
			get: function () {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function z(e) {
		if (e in pt) return e;
		for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
			if ((e = dt[n] + t) in pt) return e
	}

	function N(e) {
		var t = fe.cssProps[e];
		return t || (t = fe.cssProps[e] = z(e) || e), t
	}

	function $(e, t, n) {
		var i = Fe.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}

	function H(e, t, n, i, r) {
		var a, s = 0;
		for (a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0; a < 4; a += 2) "margin" === n && (s += fe.css(e, n + qe[a], !0, r)), i ? ("content" === n && (s -= fe.css(e, "padding" + qe[a], !0, r)), "margin" !== n && (s -= fe.css(e, "border" + qe[a] + "Width", !0, r))) : (s += fe.css(e, "padding" + qe[a], !0, r), "padding" !== n && (s += fe.css(e, "border" + qe[a] + "Width", !0, r)));
		return s
	}

	function j(e, t, n) {
		var i, r = st(e),
			a = O(e, t, r),
			s = "border-box" === fe.css(e, "boxSizing", !1, r);
		return at.test(a) ? a : (i = s && (pe.boxSizingReliable() || a === e.style[t]), "auto" === a && (a = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = parseFloat(a) || 0) + H(e, t, n || (s ? "border" : "content"), i, r) + "px")
	}

	function F(e, t, n, i, r) {
		return new F.prototype.init(e, t, n, i, r)
	}

	function q() {
		ft && (!1 === te.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(q) : e.setTimeout(q, fe.fx.interval), fe.fx.tick())
	}

	function B() {
		return e.setTimeout(function () {
			ht = void 0
		}), ht = fe.now()
	}

	function V(e, t) {
		var n, i = 0,
			r = {
				height: e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) n = qe[i], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function R(e, t, n) {
		for (var i, r = (W.tweeners[t] || []).concat(W.tweeners["*"]), a = 0, s = r.length; a < s; a++)
			if (i = r[a].call(n, t, e)) return i
	}

	function _(e, t) {
		var n, i, r, a, s;
		for (n in e)
			if (i = fe.camelCase(n), r = t[i], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (s = fe.cssHooks[i]) && "expand" in s) {
				a = s.expand(a), delete e[i];
				for (n in a) n in e || (e[n] = a[n], t[n] = r)
			} else t[i] = r
	}

	function W(e, t, n) {
		var i, r, a = 0,
			s = W.prefilters.length,
			o = fe.Deferred().always(function () {
				delete l.elem
			}),
			l = function () {
				if (r) return !1;
				for (var t = ht || B(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), a = 0, s = u.tweens.length; a < s; a++) u.tweens[a].run(i);
				return o.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u]), !1)
			},
			u = o.promise({
				elem: e,
				props: fe.extend({}, t),
				opts: fe.extend(!0, {
					specialEasing: {},
					easing: fe.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: ht || B(),
				duration: n.duration,
				tweens: [],
				createTween: function (t, n) {
					var i = fe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(i), i
				},
				stop: function (t) {
					var n = 0,
						i = t ? u.tweens.length : 0;
					if (r) return this;
					for (r = !0; n < i; n++) u.tweens[n].run(1);
					return t ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t])) : o.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (_(c, u.opts.specialEasing); a < s; a++)
			if (i = W.prefilters[a].call(u, e, c, u.opts)) return fe.isFunction(i.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = fe.proxy(i.stop, i)), i;
		return fe.map(c, R, u), fe.isFunction(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), fe.fx.timer(fe.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u
	}

	function X(e) {
		return (e.match(Le) || []).join(" ")
	}

	function Y(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function G(e, t, n, i) {
		var r;
		if (Array.isArray(t)) fe.each(t, function (t, r) {
			n || kt.test(e) ? i(e, r) : G(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
		});
		else if (n || "object" !== fe.type(t)) i(e, t);
		else
			for (r in t) G(e + "[" + r + "]", t[r], n, i)
	}

	function U(e) {
		return function (t, n) {
			"string" != typeof t && (n = t, t = "*");
			var i, r = 0,
				a = t.toLowerCase().match(Le) || [];
			if (fe.isFunction(n))
				for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
		}
	}

	function Q(e, t, n, i) {
		function r(o) {
			var l;
			return a[o] = !0, fe.each(e[o] || [], function (e, o) {
				var u = o(t, n, i);
				return "string" != typeof u || s || a[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
			}), l
		}
		var a = {},
			s = e === jt;
		return r(t.dataTypes[0]) || !a["*"] && r("*")
	}

	function K(e, t) {
		var n, i, r = fe.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
		return i && fe.extend(!0, e, i), e
	}

	function J(e, t, n) {
		for (var i, r, a, s, o = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
		if (i)
			for (r in o)
				if (o[r] && o[r].test(i)) {
					l.unshift(r);
					break
				}
		if (l[0] in n) a = l[0];
		else {
			for (r in n) {
				if (!l[0] || e.converters[r + " " + l[0]]) {
					a = r;
					break
				}
				s || (s = r)
			}
			a = a || s
		}
		if (a) return a !== l[0] && l.unshift(a), n[a]
	}

	function Z(e, t, n, i) {
		var r, a, s, o, l, u = {},
			c = e.dataTypes.slice();
		if (c[1])
			for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
		for (a = c.shift(); a;)
			if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = c.shift())
				if ("*" === a) a = l;
				else if ("*" !== l && l !== a) {
			if (!(s = u[l + " " + a] || u["* " + a]))
				for (r in u)
					if ((o = r.split(" "))[1] === a && (s = u[l + " " + o[0]] || u["* " + o[0]])) {
						!0 === s ? s = u[r] : !0 !== u[r] && (a = o[0], c.unshift(o[1]));
						break
					}
			if (!0 !== s)
				if (s && e.throws) t = s(t);
				else try {
					t = s(t)
				} catch (e) {
					return {
						state: "parsererror",
						error: s ? e : "No conversion from " + l + " to " + a
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}
	var ee = [],
		te = e.document,
		ne = Object.getPrototypeOf,
		ie = ee.slice,
		re = ee.concat,
		ae = ee.push,
		se = ee.indexOf,
		oe = {},
		le = oe.toString,
		ue = oe.hasOwnProperty,
		ce = ue.toString,
		de = ce.call(Object),
		pe = {},
		he = "3.2.1",
		fe = function (e, t) {
			return new fe.fn.init(e, t)
		},
		ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		me = /^-ms-/,
		ge = /-([a-z])/g,
		ye = function (e, t) {
			return t.toUpperCase()
		};
	fe.fn = fe.prototype = {
		jquery: he,
		constructor: fe,
		length: 0,
		toArray: function () {
			return ie.call(this)
		},
		get: function (e) {
			return null == e ? ie.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function (e) {
			var t = fe.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function (e) {
			return fe.each(this, e)
		},
		map: function (e) {
			return this.pushStack(fe.map(this, function (t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function () {
			return this.pushStack(ie.apply(this, arguments))
		},
		first: function () {
			return this.eq(0)
		},
		last: function () {
			return this.eq(-1)
		},
		eq: function (e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function () {
			return this.prevObject || this.constructor()
		},
		push: ae,
		sort: ee.sort,
		splice: ee.splice
	}, fe.extend = fe.fn.extend = function () {
		var e, t, n, i, r, a, s = arguments[0] || {},
			o = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof s && (u = s, s = arguments[o] || {}, o++), "object" == typeof s || fe.isFunction(s) || (s = {}), o === l && (s = this, o--); o < l; o++)
			if (null != (e = arguments[o]))
				for (t in e) n = s[t], i = e[t], s !== i && (u && i && (fe.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, a = n && Array.isArray(n) ? n : []) : a = n && fe.isPlainObject(n) ? n : {}, s[t] = fe.extend(u, a, i)) : void 0 !== i && (s[t] = i));
		return s
	}, fe.extend({
		expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function (e) {
			throw new Error(e)
		},
		noop: function () {},
		isFunction: function (e) {
			return "function" === fe.type(e)
		},
		isWindow: function (e) {
			return null != e && e === e.window
		},
		isNumeric: function (e) {
			var t = fe.type(e);
			return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		},
		isPlainObject: function (e) {
			var t, n;
			return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && ("function" != typeof (n = ue.call(t, "constructor") && t.constructor) || ce.call(n) !== de))
		},
		isEmptyObject: function (e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function (e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? oe[le.call(e)] || "object" : typeof e
		},
		globalEval: function (e) {
			n(e)
		},
		camelCase: function (e) {
			return e.replace(me, "ms-").replace(ge, ye)
		},
		each: function (e, t) {
			var n, r = 0;
			if (i(e))
				for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
			else
				for (r in e)
					if (!1 === t.call(e[r], r, e[r])) break;
			return e
		},
		trim: function (e) {
			return null == e ? "" : (e + "").replace(ve, "")
		},
		makeArray: function (e, t) {
			var n = t || [];
			return null != e && (i(Object(e)) ? fe.merge(n, "string" == typeof e ? [e] : e) : ae.call(n, e)), n
		},
		inArray: function (e, t, n) {
			return null == t ? -1 : se.call(t, e, n)
		},
		merge: function (e, t) {
			for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
			return e.length = r, e
		},
		grep: function (e, t, n) {
			for (var i = [], r = 0, a = e.length, s = !n; r < a; r++) !t(e[r], r) !== s && i.push(e[r]);
			return i
		},
		map: function (e, t, n) {
			var r, a, s = 0,
				o = [];
			if (i(e))
				for (r = e.length; s < r; s++) null != (a = t(e[s], s, n)) && o.push(a);
			else
				for (s in e) null != (a = t(e[s], s, n)) && o.push(a);
			return re.apply([], o)
		},
		guid: 1,
		proxy: function (e, t) {
			var n, i, r;
			if ("string" == typeof t && (n = e[t], t = e, e = n), fe.isFunction(e)) return i = ie.call(arguments, 2), r = function () {
				return e.apply(t || this, i.concat(ie.call(arguments)))
			}, r.guid = e.guid = e.guid || fe.guid++, r
		},
		now: Date.now,
		support: pe
	}), "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ee[Symbol.iterator]), fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
		oe["[object " + t + "]"] = t.toLowerCase()
	});
	var be = function (e) {
		function t(e, t, n, i) {
			var r, a, s, o, l, c, p, h = t && t.ownerDocument,
				f = t ? t.nodeType : 9;
			if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
			if (!i && ((t ? t.ownerDocument || t : F) !== D && P(t), t = t || D, A)) {
				if (11 !== f && (l = ve.exec(e)))
					if (r = l[1]) {
						if (9 === f) {
							if (!(s = t.getElementById(r))) return n;
							if (s.id === r) return n.push(s), n
						} else if (h && (s = h.getElementById(r)) && H(t, s) && s.id === r) return n.push(s), n
					} else {
						if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
						if ((r = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return Q.apply(n, t.getElementsByClassName(r)), n
					}
				if (w.qsa && !_[e + " "] && (!z || !z.test(e))) {
					if (1 !== f) h = t, p = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((o = t.getAttribute("id")) ? o = o.replace(be, we) : t.setAttribute("id", o = j), a = (c = C(e)).length; a--;) c[a] = "#" + o + " " + d(c[a]);
						p = c.join(","), h = me.test(e) && u(t.parentNode) || t
					}
					if (p) try {
						return Q.apply(n, h.querySelectorAll(p)), n
					} catch (e) {} finally {
						o === j && t.removeAttribute("id")
					}
				}
			}
			return k(e.replace(ae, "$1"), t, n, i)
		}

		function n() {
			function e(n, i) {
				return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
			}
			var t = [];
			return e
		}

		function i(e) {
			return e[j] = !0, e
		}

		function r(e) {
			var t = D.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function a(e, t) {
			for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
		}

		function s(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}

		function o(e) {
			return function (t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function l(e) {
			return i(function (t) {
				return t = +t, i(function (n, i) {
					for (var r, a = e([], n.length, t), s = a.length; s--;) n[r = a[s]] && (n[r] = !(i[r] = n[r]))
				})
			})
		}

		function u(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}

		function c() {}

		function d(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}

		function p(e, t, n) {
			var i = t.dir,
				r = t.next,
				a = r || i,
				s = n && "parentNode" === a,
				o = B++;
			return t.first ? function (t, n, r) {
				for (; t = t[i];)
					if (1 === t.nodeType || s) return e(t, n, r);
				return !1
			} : function (t, n, l) {
				var u, c, d, p = [q, o];
				if (l) {
					for (; t = t[i];)
						if ((1 === t.nodeType || s) && e(t, n, l)) return !0
				} else
					for (; t = t[i];)
						if (1 === t.nodeType || s)
							if (d = t[j] || (t[j] = {}), c = d[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
							else {
								if ((u = c[a]) && u[0] === q && u[1] === o) return p[2] = u[2];
								if (c[a] = p, p[2] = e(t, n, l)) return !0
							} return !1
			}
		}

		function h(e) {
			return e.length > 1 ? function (t, n, i) {
				for (var r = e.length; r--;)
					if (!e[r](t, n, i)) return !1;
				return !0
			} : e[0]
		}

		function f(e, n, i) {
			for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
			return i
		}

		function v(e, t, n, i, r) {
			for (var a, s = [], o = 0, l = e.length, u = null != t; o < l; o++)(a = e[o]) && (n && !n(a, i, r) || (s.push(a), u && t.push(o)));
			return s
		}

		function m(e, t, n, r, a, s) {
			return r && !r[j] && (r = m(r)), a && !a[j] && (a = m(a, s)), i(function (i, s, o, l) {
				var u, c, d, p = [],
					h = [],
					m = s.length,
					g = i || f(t || "*", o.nodeType ? [o] : o, []),
					y = !e || !i && t ? g : v(g, p, e, o, l),
					b = n ? a || (i ? e : m || r) ? [] : s : y;
				if (n && n(y, b, o, l), r)
					for (u = v(b, h), r(u, [], o, l), c = u.length; c--;)(d = u[c]) && (b[h[c]] = !(y[h[c]] = d));
				if (i) {
					if (a || e) {
						if (a) {
							for (u = [], c = b.length; c--;)(d = b[c]) && u.push(y[c] = d);
							a(null, b = [], u, l)
						}
						for (c = b.length; c--;)(d = b[c]) && (u = a ? J(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d))
					}
				} else b = v(b === s ? b.splice(m, b.length) : b), a ? a(null, s, b, l) : Q.apply(s, b)
			})
		}

		function g(e) {
			for (var t, n, i, r = e.length, a = x.relative[e[0].type], s = a || x.relative[" "], o = a ? 1 : 0, l = p(function (e) {
					return e === t
				}, s, !0), u = p(function (e) {
					return J(t, e) > -1
				}, s, !0), c = [function (e, n, i) {
					var r = !a && (i || n !== M) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
					return t = null, r
				}]; o < r; o++)
				if (n = x.relative[e[o].type]) c = [p(h(c), n)];
				else {
					if ((n = x.filter[e[o].type].apply(null, e[o].matches))[j]) {
						for (i = ++o; i < r && !x.relative[e[i].type]; i++);
						return m(o > 1 && h(c), o > 1 && d(e.slice(0, o - 1).concat({
							value: " " === e[o - 2].type ? "*" : ""
						})).replace(ae, "$1"), n, o < i && g(e.slice(o, i)), i < r && g(e = e.slice(i)), i < r && d(e))
					}
					c.push(n)
				}
			return h(c)
		}

		function y(e, n) {
			var r = n.length > 0,
				a = e.length > 0,
				s = function (i, s, o, l, u) {
					var c, d, p, h = 0,
						f = "0",
						m = i && [],
						g = [],
						y = M,
						b = i || a && x.find.TAG("*", u),
						w = q += null == y ? 1 : Math.random() || .1,
						T = b.length;
					for (u && (M = s === D || s || u); f !== T && null != (c = b[f]); f++) {
						if (a && c) {
							for (d = 0, s || c.ownerDocument === D || (P(c), o = !A); p = e[d++];)
								if (p(c, s || D, o)) {
									l.push(c);
									break
								}
							u && (q = w)
						}
						r && ((c = !p && c) && h--, i && m.push(c))
					}
					if (h += f, r && f !== h) {
						for (d = 0; p = n[d++];) p(m, g, s, o);
						if (i) {
							if (h > 0)
								for (; f--;) m[f] || g[f] || (g[f] = G.call(l));
							g = v(g)
						}
						Q.apply(l, g), u && !i && g.length > 0 && h + n.length > 1 && t.uniqueSort(l)
					}
					return u && (q = w, M = y), m
				};
			return r ? i(s) : s
		}
		var b, w, x, T, E, C, S, k, M, I, L, P, D, O, A, z, N, $, H, j = "sizzle" + 1 * new Date,
			F = e.document,
			q = 0,
			B = 0,
			V = n(),
			R = n(),
			_ = n(),
			W = function (e, t) {
				return e === t && (L = !0), 0
			},
			X = {}.hasOwnProperty,
			Y = [],
			G = Y.pop,
			U = Y.push,
			Q = Y.push,
			K = Y.slice,
			J = function (e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1
			},
			Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ee = "[\\x20\\t\\r\\n\\f]",
			te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
			ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
			re = new RegExp(ee + "+", "g"),
			ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
			se = new RegExp("^" + ee + "*," + ee + "*"),
			oe = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
			le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
			ue = new RegExp(ie),
			ce = new RegExp("^" + te + "$"),
			de = {
				ID: new RegExp("^#(" + te + ")"),
				CLASS: new RegExp("^\\.(" + te + ")"),
				TAG: new RegExp("^(" + te + "|[*])"),
				ATTR: new RegExp("^" + ne),
				PSEUDO: new RegExp("^" + ie),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + Z + ")$", "i"),
				needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
			},
			pe = /^(?:input|select|textarea|button)$/i,
			he = /^h\d$/i,
			fe = /^[^{]+\{\s*\[native \w/,
			ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			me = /[+~]/,
			ge = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
			ye = function (e, t, n) {
				var i = "0x" + t - 65536;
				return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			we = function (e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			xe = function () {
				P()
			},
			Te = p(function (e) {
				return !0 === e.disabled && ("form" in e || "label" in e)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			Q.apply(Y = K.call(F.childNodes), F.childNodes), Y[F.childNodes.length].nodeType
		} catch (e) {
			Q = {
				apply: Y.length ? function (e, t) {
					U.apply(e, K.call(t))
				} : function (e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];);
					e.length = n - 1
				}
			}
		}
		w = t.support = {}, E = t.isXML = function (e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, P = t.setDocument = function (e) {
			var t, n, i = e ? e.ownerDocument || e : F;
			return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, O = D.documentElement, A = !E(D), F !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), w.attributes = r(function (e) {
				return e.className = "i", !e.getAttribute("className")
			}), w.getElementsByTagName = r(function (e) {
				return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
			}), w.getElementsByClassName = fe.test(D.getElementsByClassName), w.getById = r(function (e) {
				return O.appendChild(e).id = j, !D.getElementsByName || !D.getElementsByName(j).length
			}), w.getById ? (x.filter.ID = function (e) {
				var t = e.replace(ge, ye);
				return function (e) {
					return e.getAttribute("id") === t
				}
			}, x.find.ID = function (e, t) {
				if (void 0 !== t.getElementById && A) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (x.filter.ID = function (e) {
				var t = e.replace(ge, ye);
				return function (e) {
					var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, x.find.ID = function (e, t) {
				if (void 0 !== t.getElementById && A) {
					var n, i, r, a = t.getElementById(e);
					if (a) {
						if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
						for (r = t.getElementsByName(e), i = 0; a = r[i++];)
							if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
					}
					return []
				}
			}), x.find.TAG = w.getElementsByTagName ? function (e, t) {
				return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
			} : function (e, t) {
				var n, i = [],
					r = 0,
					a = t.getElementsByTagName(e);
				if ("*" === e) {
					for (; n = a[r++];) 1 === n.nodeType && i.push(n);
					return i
				}
				return a
			}, x.find.CLASS = w.getElementsByClassName && function (e, t) {
				if (void 0 !== t.getElementsByClassName && A) return t.getElementsByClassName(e)
			}, N = [], z = [], (w.qsa = fe.test(D.querySelectorAll)) && (r(function (e) {
				O.appendChild(e).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && z.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || z.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + j + "-]").length || z.push("~="), e.querySelectorAll(":checked").length || z.push(":checked"), e.querySelectorAll("a#" + j + "+*").length || z.push(".#.+[+~]")
			}), r(function (e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = D.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && z.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && z.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && z.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), z.push(",.*:")
			})), (w.matchesSelector = fe.test($ = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function (e) {
				w.disconnectedMatch = $.call(e, "*"), $.call(e, "[s!='']:x"), N.push("!=", ie)
			}), z = z.length && new RegExp(z.join("|")), N = N.length && new RegExp(N.join("|")), t = fe.test(O.compareDocumentPosition), H = t || fe.test(O.contains) ? function (e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					i = t && t.parentNode;
				return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
			} : function (e, t) {
				if (t)
					for (; t = t.parentNode;)
						if (t === e) return !0;
				return !1
			}, W = t ? function (e, t) {
				if (e === t) return L = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === F && H(F, e) ? -1 : t === D || t.ownerDocument === F && H(F, t) ? 1 : I ? J(I, e) - J(I, t) : 0 : 4 & n ? -1 : 1)
			} : function (e, t) {
				if (e === t) return L = !0, 0;
				var n, i = 0,
					r = e.parentNode,
					a = t.parentNode,
					o = [e],
					l = [t];
				if (!r || !a) return e === D ? -1 : t === D ? 1 : r ? -1 : a ? 1 : I ? J(I, e) - J(I, t) : 0;
				if (r === a) return s(e, t);
				for (n = e; n = n.parentNode;) o.unshift(n);
				for (n = t; n = n.parentNode;) l.unshift(n);
				for (; o[i] === l[i];) i++;
				return i ? s(o[i], l[i]) : o[i] === F ? -1 : l[i] === F ? 1 : 0
			}, D) : D
		}, t.matches = function (e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function (e, n) {
			if ((e.ownerDocument || e) !== D && P(e), n = n.replace(le, "='$1']"), w.matchesSelector && A && !_[n + " "] && (!N || !N.test(n)) && (!z || !z.test(n))) try {
				var i = $.call(e, n);
				if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
			} catch (e) {}
			return t(n, D, null, [e]).length > 0
		}, t.contains = function (e, t) {
			return (e.ownerDocument || e) !== D && P(e), H(e, t)
		}, t.attr = function (e, t) {
			(e.ownerDocument || e) !== D && P(e);
			var n = x.attrHandle[t.toLowerCase()],
				i = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
			return void 0 !== i ? i : w.attributes || !A ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}, t.escape = function (e) {
			return (e + "").replace(be, we)
		}, t.error = function (e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function (e) {
			var t, n = [],
				i = 0,
				r = 0;
			if (L = !w.detectDuplicates, I = !w.sortStable && e.slice(0), e.sort(W), L) {
				for (; t = e[r++];) t === e[r] && (i = n.push(r));
				for (; i--;) e.splice(n[i], 1)
			}
			return I = null, e
		}, T = t.getText = function (e) {
			var t, n = "",
				i = 0,
				r = e.nodeType;
			if (r) {
				if (1 === r || 9 === r || 11 === r) {
					if ("string" == typeof e.textContent) return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
				} else if (3 === r || 4 === r) return e.nodeValue
			} else
				for (; t = e[i++];) n += T(t);
			return n
		}, (x = t.selectors = {
			cacheLength: 50,
			createPseudo: i,
			match: de,
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
					return e[1] = e[1].replace(ge, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(ge, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function (e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function (e) {
					var t, n = !e[6] && e[2];
					return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function (e) {
					var t = e.replace(ge, ye).toLowerCase();
					return "*" === e ? function () {
						return !0
					} : function (e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function (e) {
					var t = V[e + " "];
					return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && V(e, function (e) {
						return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function (e, n, i) {
					return function (r) {
						var a = t.attr(r, e);
						return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
					}
				},
				CHILD: function (e, t, n, i, r) {
					var a = "nth" !== e.slice(0, 3),
						s = "last" !== e.slice(-4),
						o = "of-type" === t;
					return 1 === i && 0 === r ? function (e) {
						return !!e.parentNode
					} : function (t, n, l) {
						var u, c, d, p, h, f, v = a !== s ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							g = o && t.nodeName.toLowerCase(),
							y = !l && !o,
							b = !1;
						if (m) {
							if (a) {
								for (; v;) {
									for (p = t; p = p[v];)
										if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
									f = v = "only" === e && !f && "nextSibling"
								}
								return !0
							}
							if (f = [s ? m.firstChild : m.lastChild], s && y) {
								for (b = (h = (u = (c = (d = (p = m)[j] || (p[j] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === q && u[1]) && u[2], p = h && m.childNodes[h]; p = ++h && p && p[v] || (b = h = 0) || f.pop();)
									if (1 === p.nodeType && ++b && p === t) {
										c[e] = [q, h, b];
										break
									}
							} else if (y && (p = t, d = p[j] || (p[j] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], h = u[0] === q && u[1], b = h), !1 === b)
								for (;
									(p = ++h && p && p[v] || (b = h = 0) || f.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && (d = p[j] || (p[j] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [q, b]), p !== t)););
							return (b -= r) === i || b % i == 0 && b / i >= 0
						}
					}
				},
				PSEUDO: function (e, n) {
					var r, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return a[j] ? a(n) : a.length > 1 ? (r = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
						for (var i, r = a(e, n), s = r.length; s--;) i = J(e, r[s]), e[i] = !(t[i] = r[s])
					}) : function (e) {
						return a(e, 0, r)
					}) : a
				}
			},
			pseudos: {
				not: i(function (e) {
					var t = [],
						n = [],
						r = S(e.replace(ae, "$1"));
					return r[j] ? i(function (e, t, n, i) {
						for (var a, s = r(e, null, i, []), o = e.length; o--;)(a = s[o]) && (e[o] = !(t[o] = a))
					}) : function (e, i, a) {
						return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
					}
				}),
				has: i(function (e) {
					return function (n) {
						return t(e, n).length > 0
					}
				}),
				contains: i(function (e) {
					return e = e.replace(ge, ye),
						function (t) {
							return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
						}
				}),
				lang: i(function (e) {
					return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ge, ye).toLowerCase(),
						function (t) {
							var n;
							do {
								if (n = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
							} while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
				}),
				target: function (t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function (e) {
					return e === O
				},
				focus: function (e) {
					return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: o(!1),
				disabled: o(!0),
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
					return !x.pseudos.empty(e)
				},
				header: function (e) {
					return he.test(e.nodeName)
				},
				input: function (e) {
					return pe.test(e.nodeName)
				},
				button: function (e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function (e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: l(function () {
					return [0]
				}),
				last: l(function (e, t) {
					return [t - 1]
				}),
				eq: l(function (e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: l(function (e, t) {
					for (var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: l(function (e, t) {
					for (var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: l(function (e, t, n) {
					for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
					return e
				}),
				gt: l(function (e, t, n) {
					for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
					return e
				})
			}
		}).pseudos.nth = x.pseudos.eq;
		for (b in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) x.pseudos[b] = function (e) {
			return function (t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}(b);
		for (b in {
				submit: !0,
				reset: !0
			}) x.pseudos[b] = function (e) {
			return function (t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}(b);
		return c.prototype = x.filters = x.pseudos, x.setFilters = new c, C = t.tokenize = function (e, n) {
			var i, r, a, s, o, l, u, c = R[e + " "];
			if (c) return n ? 0 : c.slice(0);
			for (o = e, l = [], u = x.preFilter; o;) {
				i && !(r = se.exec(o)) || (r && (o = o.slice(r[0].length) || o), l.push(a = [])), i = !1, (r = oe.exec(o)) && (i = r.shift(), a.push({
					value: i,
					type: r[0].replace(ae, " ")
				}), o = o.slice(i.length));
				for (s in x.filter) !(r = de[s].exec(o)) || u[s] && !(r = u[s](r)) || (i = r.shift(), a.push({
					value: i,
					type: s,
					matches: r
				}), o = o.slice(i.length));
				if (!i) break
			}
			return n ? o.length : o ? t.error(e) : R(e, l).slice(0)
		}, S = t.compile = function (e, t) {
			var n, i = [],
				r = [],
				a = _[e + " "];
			if (!a) {
				for (t || (t = C(e)), n = t.length; n--;)(a = g(t[n]))[j] ? i.push(a) : r.push(a);
				(a = _(e, y(r, i))).selector = e
			}
			return a
		}, k = t.select = function (e, t, n, i) {
			var r, a, s, o, l, c = "function" == typeof e && e,
				p = !i && C(e = c.selector || e);
			if (n = n || [], 1 === p.length) {
				if ((a = p[0] = p[0].slice(0)).length > 2 && "ID" === (s = a[0]).type && 9 === t.nodeType && A && x.relative[a[1].type]) {
					if (!(t = (x.find.ID(s.matches[0].replace(ge, ye), t) || [])[0])) return n;
					c && (t = t.parentNode), e = e.slice(a.shift().value.length)
				}
				for (r = de.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !x.relative[o = s.type]);)
					if ((l = x.find[o]) && (i = l(s.matches[0].replace(ge, ye), me.test(a[0].type) && u(t.parentNode) || t))) {
						if (a.splice(r, 1), !(e = i.length && d(a))) return Q.apply(n, i), n;
						break
					}
			}
			return (c || S(e, p))(i, t, !A, n, !t || me.test(e) && u(t.parentNode) || t), n
		}, w.sortStable = j.split("").sort(W).join("") === j, w.detectDuplicates = !!L, P(), w.sortDetached = r(function (e) {
			return 1 & e.compareDocumentPosition(D.createElement("fieldset"))
		}), r(function (e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || a("type|href|height|width", function (e, t, n) {
			if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), w.attributes && r(function (e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || a("value", function (e, t, n) {
			if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), r(function (e) {
			return null == e.getAttribute("disabled")
		}) || a(Z, function (e, t, n) {
			var i;
			if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
		}), t
	}(e);
	fe.find = be, fe.expr = be.selectors, fe.expr[":"] = fe.expr.pseudos, fe.uniqueSort = fe.unique = be.uniqueSort, fe.text = be.getText, fe.isXMLDoc = be.isXML, fe.contains = be.contains, fe.escapeSelector = be.escape;
	var we = function (e, t, n) {
			for (var i = [], r = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (r && fe(e).is(n)) break;
					i.push(e)
				}
			return i
		},
		xe = function (e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		Te = fe.expr.match.needsContext,
		Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		Ce = /^.[^:#\[\.,]*$/;
	fe.filter = function (e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? fe.find.matchesSelector(i, e) ? [i] : [] : fe.find.matches(e, fe.grep(t, function (e) {
			return 1 === e.nodeType
		}))
	}, fe.fn.extend({
		find: function (e) {
			var t, n, i = this.length,
				r = this;
			if ("string" != typeof e) return this.pushStack(fe(e).filter(function () {
				for (t = 0; t < i; t++)
					if (fe.contains(r[t], this)) return !0
			}));
			for (n = this.pushStack([]), t = 0; t < i; t++) fe.find(e, r[t], n);
			return i > 1 ? fe.uniqueSort(n) : n
		},
		filter: function (e) {
			return this.pushStack(a(this, e || [], !1))
		},
		not: function (e) {
			return this.pushStack(a(this, e || [], !0))
		},
		is: function (e) {
			return !!a(this, "string" == typeof e && Te.test(e) ? fe(e) : e || [], !1).length
		}
	});
	var Se, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(fe.fn.init = function (e, t, n) {
		var i, r;
		if (!e) return this;
		if (n = n || Se, "string" == typeof e) {
			if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ke.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (i[1]) {
				if (t = t instanceof fe ? t[0] : t, fe.merge(this, fe.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ee.test(i[1]) && fe.isPlainObject(t))
					for (i in t) fe.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			return (r = te.getElementById(i[2])) && (this[0] = r, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : fe.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(fe) : fe.makeArray(e, this)
	}).prototype = fe.fn, Se = fe(te);
	var Me = /^(?:parents|prev(?:Until|All))/,
		Ie = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	fe.fn.extend({
		has: function (e) {
			var t = fe(e, this),
				n = t.length;
			return this.filter(function () {
				for (var e = 0; e < n; e++)
					if (fe.contains(this, t[e])) return !0
			})
		},
		closest: function (e, t) {
			var n, i = 0,
				r = this.length,
				a = [],
				s = "string" != typeof e && fe(e);
			if (!Te.test(e))
				for (; i < r; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
							a.push(n);
							break
						}
			return this.pushStack(a.length > 1 ? fe.uniqueSort(a) : a)
		},
		index: function (e) {
			return e ? "string" == typeof e ? se.call(fe(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function (e, t) {
			return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
		},
		addBack: function (e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), fe.each({
		parent: function (e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function (e) {
			return we(e, "parentNode")
		},
		parentsUntil: function (e, t, n) {
			return we(e, "parentNode", n)
		},
		next: function (e) {
			return s(e, "nextSibling")
		},
		prev: function (e) {
			return s(e, "previousSibling")
		},
		nextAll: function (e) {
			return we(e, "nextSibling")
		},
		prevAll: function (e) {
			return we(e, "previousSibling")
		},
		nextUntil: function (e, t, n) {
			return we(e, "nextSibling", n)
		},
		prevUntil: function (e, t, n) {
			return we(e, "previousSibling", n)
		},
		siblings: function (e) {
			return xe((e.parentNode || {}).firstChild, e)
		},
		children: function (e) {
			return xe(e.firstChild)
		},
		contents: function (e) {
			return r(e, "iframe") ? e.contentDocument : (r(e, "template") && (e = e.content || e), fe.merge([], e.childNodes))
		}
	}, function (e, t) {
		fe.fn[e] = function (n, i) {
			var r = fe.map(this, t, n);
			return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = fe.filter(i, r)), this.length > 1 && (Ie[e] || fe.uniqueSort(r), Me.test(e) && r.reverse()), this.pushStack(r)
		}
	});
	var Le = /[^\x20\t\r\n\f]+/g;
	fe.Callbacks = function (e) {
		e = "string" == typeof e ? o(e) : fe.extend({}, e);
		var t, n, i, r, a = [],
			s = [],
			l = -1,
			u = function () {
				for (r = r || e.once, i = t = !0; s.length; l = -1)
					for (n = s.shift(); ++l < a.length;) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && (l = a.length, n = !1);
				e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
			},
			c = {
				add: function () {
					return a && (n && !t && (l = a.length - 1, s.push(n)), function t(n) {
						fe.each(n, function (n, i) {
							fe.isFunction(i) ? e.unique && c.has(i) || a.push(i) : i && i.length && "string" !== fe.type(i) && t(i)
						})
					}(arguments), n && !t && u()), this
				},
				remove: function () {
					return fe.each(arguments, function (e, t) {
						for (var n;
							(n = fe.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= l && l--
					}), this
				},
				has: function (e) {
					return e ? fe.inArray(e, a) > -1 : a.length > 0
				},
				empty: function () {
					return a && (a = []), this
				},
				disable: function () {
					return r = s = [], a = n = "", this
				},
				disabled: function () {
					return !a
				},
				lock: function () {
					return r = s = [], n || t || (a = n = ""), this
				},
				locked: function () {
					return !!r
				},
				fireWith: function (e, n) {
					return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || u()), this
				},
				fire: function () {
					return c.fireWith(this, arguments), this
				},
				fired: function () {
					return !!i
				}
			};
		return c
	}, fe.extend({
		Deferred: function (t) {
			var n = [
					["notify", "progress", fe.Callbacks("memory"), fe.Callbacks("memory"), 2],
					["resolve", "done", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", fe.Callbacks("once memory"), fe.Callbacks("once memory"), 1, "rejected"]
				],
				i = "pending",
				r = {
					state: function () {
						return i
					},
					always: function () {
						return a.done(arguments).fail(arguments), this
					},
					catch: function (e) {
						return r.then(null, e)
					},
					pipe: function () {
						var e = arguments;
						return fe.Deferred(function (t) {
							fe.each(n, function (n, i) {
								var r = fe.isFunction(e[i[4]]) && e[i[4]];
								a[i[1]](function () {
									var e = r && r.apply(this, arguments);
									e && fe.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function (t, i, r) {
						function a(t, n, i, r) {
							return function () {
								var o = this,
									c = arguments,
									d = function () {
										var e, d;
										if (!(t < s)) {
											if ((e = i.apply(o, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
											d = e && ("object" == typeof e || "function" == typeof e) && e.then, fe.isFunction(d) ? r ? d.call(e, a(s, n, l, r), a(s, n, u, r)) : (s++, d.call(e, a(s, n, l, r), a(s, n, u, r), a(s, n, l, n.notifyWith))) : (i !== l && (o = void 0, c = [e]), (r || n.resolveWith)(o, c))
										}
									},
									p = r ? d : function () {
										try {
											d()
										} catch (e) {
											fe.Deferred.exceptionHook && fe.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= s && (i !== u && (o = void 0, c = [e]), n.rejectWith(o, c))
										}
									};
								t ? p() : (fe.Deferred.getStackHook && (p.stackTrace = fe.Deferred.getStackHook()), e.setTimeout(p))
							}
						}
						var s = 0;
						return fe.Deferred(function (e) {
							n[0][3].add(a(0, e, fe.isFunction(r) ? r : l, e.notifyWith)), n[1][3].add(a(0, e, fe.isFunction(t) ? t : l)), n[2][3].add(a(0, e, fe.isFunction(i) ? i : u))
						}).promise()
					},
					promise: function (e) {
						return null != e ? fe.extend(e, r) : r
					}
				},
				a = {};
			return fe.each(n, function (e, t) {
				var s = t[2],
					o = t[5];
				r[t[1]] = s.add, o && s.add(function () {
					i = o
				}, n[3 - e][2].disable, n[0][2].lock), s.add(t[3].fire), a[t[0]] = function () {
					return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
				}, a[t[0] + "With"] = s.fireWith
			}), r.promise(a), t && t.call(a, a), a
		},
		when: function (e) {
			var t = arguments.length,
				n = t,
				i = Array(n),
				r = ie.call(arguments),
				a = fe.Deferred(),
				s = function (e) {
					return function (n) {
						i[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : n, --t || a.resolveWith(i, r)
					}
				};
			if (t <= 1 && (c(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || fe.isFunction(r[n] && r[n].then))) return a.then();
			for (; n--;) c(r[n], s(n), a.reject);
			return a.promise()
		}
	});
	var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	fe.Deferred.exceptionHook = function (t, n) {
		e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, fe.readyException = function (t) {
		e.setTimeout(function () {
			throw t
		})
	};
	var De = fe.Deferred();
	fe.fn.ready = function (e) {
		return De.then(e).catch(function (e) {
			fe.readyException(e)
		}), this
	}, fe.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (e) {
			(!0 === e ? --fe.readyWait : fe.isReady) || (fe.isReady = !0, !0 !== e && --fe.readyWait > 0 || De.resolveWith(te, [fe]))
		}
	}), fe.ready.then = De.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(fe.ready) : (te.addEventListener("DOMContentLoaded", d), e.addEventListener("load", d));
	var Oe = function (e, t, n, i, r, a, s) {
			var o = 0,
				l = e.length,
				u = null == n;
			if ("object" === fe.type(n)) {
				r = !0;
				for (o in n) Oe(e, t, o, n[o], !0, a, s)
			} else if (void 0 !== i && (r = !0, fe.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
					return u.call(fe(e), n)
				})), t))
				for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
			return r ? e : u ? t.call(e) : l ? t(e[0], n) : a
		},
		Ae = function (e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
	p.uid = 1, p.prototype = {
		cache: function (e) {
			var t = e[this.expando];
			return t || (t = {}, Ae(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function (e, t, n) {
			var i, r = this.cache(e);
			if ("string" == typeof t) r[fe.camelCase(t)] = n;
			else
				for (i in t) r[fe.camelCase(i)] = t[i];
			return r
		},
		get: function (e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][fe.camelCase(t)]
		},
		access: function (e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function (e, t) {
			var n, i = e[this.expando];
			if (void 0 !== i) {
				if (void 0 !== t) {
					Array.isArray(t) ? t = t.map(fe.camelCase) : (t = fe.camelCase(t), t = t in i ? [t] : t.match(Le) || []), n = t.length;
					for (; n--;) delete i[t[n]]
				}(void 0 === t || fe.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function (e) {
			var t = e[this.expando];
			return void 0 !== t && !fe.isEmptyObject(t)
		}
	};
	var ze = new p,
		Ne = new p,
		$e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		He = /[A-Z]/g;
	fe.extend({
		hasData: function (e) {
			return Ne.hasData(e) || ze.hasData(e)
		},
		data: function (e, t, n) {
			return Ne.access(e, t, n)
		},
		removeData: function (e, t) {
			Ne.remove(e, t)
		},
		_data: function (e, t, n) {
			return ze.access(e, t, n)
		},
		_removeData: function (e, t) {
			ze.remove(e, t)
		}
	}), fe.fn.extend({
		data: function (e, t) {
			var n, i, r, a = this[0],
				s = a && a.attributes;
			if (void 0 === e) {
				if (this.length && (r = Ne.get(a), 1 === a.nodeType && !ze.get(a, "hasDataAttrs"))) {
					for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = fe.camelCase(i.slice(5)), f(a, i, r[i]));
					ze.set(a, "hasDataAttrs", !0)
				}
				return r
			}
			return "object" == typeof e ? this.each(function () {
				Ne.set(this, e)
			}) : Oe(this, function (t) {
				var n;
				if (a && void 0 === t) {
					if (void 0 !== (n = Ne.get(a, e))) return n;
					if (void 0 !== (n = f(a, e))) return n
				} else this.each(function () {
					Ne.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function (e) {
			return this.each(function () {
				Ne.remove(this, e)
			})
		}
	}), fe.extend({
		queue: function (e, t, n) {
			var i;
			if (e) return t = (t || "fx") + "queue", i = ze.get(e, t), n && (!i || Array.isArray(n) ? i = ze.access(e, t, fe.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function (e, t) {
			t = t || "fx";
			var n = fe.queue(e, t),
				i = n.length,
				r = n.shift(),
				a = fe._queueHooks(e, t);
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, function () {
				fe.dequeue(e, t)
			}, a)), !i && a && a.empty.fire()
		},
		_queueHooks: function (e, t) {
			var n = t + "queueHooks";
			return ze.get(e, n) || ze.access(e, n, {
				empty: fe.Callbacks("once memory").add(function () {
					ze.remove(e, [t + "queue", n])
				})
			})
		}
	}), fe.fn.extend({
		queue: function (e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function () {
				var n = fe.queue(this, e, t);
				fe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
			})
		},
		dequeue: function (e) {
			return this.each(function () {
				fe.dequeue(this, e)
			})
		},
		clearQueue: function (e) {
			return this.queue(e || "fx", [])
		},
		promise: function (e, t) {
			var n, i = 1,
				r = fe.Deferred(),
				a = this,
				s = this.length,
				o = function () {
					--i || r.resolveWith(a, [a])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = ze.get(a[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(o));
			return o(), r.promise(t)
		}
	});
	var je = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Fe = new RegExp("^(?:([+-])=|)(" + je + ")([a-z%]*)$", "i"),
		qe = ["Top", "Right", "Bottom", "Left"],
		Be = function (e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && fe.contains(e.ownerDocument, e) && "none" === fe.css(e, "display")
		},
		Ve = function (e, t, n, i) {
			var r, a, s = {};
			for (a in t) s[a] = e.style[a], e.style[a] = t[a];
			r = n.apply(e, i || []);
			for (a in t) e.style[a] = s[a];
			return r
		},
		Re = {};
	fe.fn.extend({
		show: function () {
			return g(this, !0)
		},
		hide: function () {
			return g(this)
		},
		toggle: function (e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
				Be(this) ? fe(this).show() : fe(this).hide()
			})
		}
	});
	var _e = /^(?:checkbox|radio)$/i,
		We = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		Xe = /^$|\/(?:java|ecma)script/i,
		Ye = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
	var Ge = /<|&#?\w+;/;
	! function () {
		var e = te.createDocumentFragment().appendChild(te.createElement("div")),
			t = te.createElement("input");
		t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), pe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
	}();
	var Ue = te.documentElement,
		Qe = /^key/,
		Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Je = /^([^.]*)(?:\.(.+)|)/;
	fe.event = {
		global: {},
		add: function (e, t, n, i, r) {
			var a, s, o, l, u, c, d, p, h, f, v, m = ze.get(e);
			if (m)
				for (n.handler && (a = n, n = a.handler, r = a.selector), r && fe.find.matchesSelector(Ue, r), n.guid || (n.guid = fe.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
						return void 0 !== fe && fe.event.triggered !== t.type ? fe.event.dispatch.apply(e, arguments) : void 0
					}), u = (t = (t || "").match(Le) || [""]).length; u--;) o = Je.exec(t[u]) || [], h = v = o[1], f = (o[2] || "").split(".").sort(), h && (d = fe.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = fe.event.special[h] || {}, c = fe.extend({
					type: h,
					origType: v,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && fe.expr.match.needsContext.test(r),
					namespace: f.join(".")
				}, a), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), fe.event.global[h] = !0)
		},
		remove: function (e, t, n, i, r) {
			var a, s, o, l, u, c, d, p, h, f, v, m = ze.hasData(e) && ze.get(e);
			if (m && (l = m.events)) {
				for (u = (t = (t || "").match(Le) || [""]).length; u--;)
					if (o = Je.exec(t[u]) || [], h = v = o[1], f = (o[2] || "").split(".").sort(), h) {
						for (d = fe.event.special[h] || {}, p = l[h = (i ? d.delegateType : d.bindType) || h] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;) c = p[a], !r && v !== c.origType || n && n.guid !== c.guid || o && !o.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(a, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
						s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || fe.removeEvent(e, h, m.handle), delete l[h])
					} else
						for (h in l) fe.event.remove(e, h + t[u], n, i, !0);
				fe.isEmptyObject(l) && ze.remove(e, "handle events")
			}
		},
		dispatch: function (e) {
			var t, n, i, r, a, s, o = fe.event.fix(e),
				l = new Array(arguments.length),
				u = (ze.get(this, "events") || {})[o.type] || [],
				c = fe.event.special[o.type] || {};
			for (l[0] = o, t = 1; t < arguments.length; t++) l[t] = arguments[t];
			if (o.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, o)) {
				for (s = fe.event.handlers.call(this, o, u), t = 0;
					(r = s[t++]) && !o.isPropagationStopped();)
					for (o.currentTarget = r.elem, n = 0;
						(a = r.handlers[n++]) && !o.isImmediatePropagationStopped();) o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (i = ((fe.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (o.result = i) && (o.preventDefault(), o.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, o), o.result
			}
		},
		handlers: function (e, t) {
			var n, i, r, a, s, o = [],
				l = t.delegateCount,
				u = e.target;
			if (l && u.nodeType && !("click" === e.type && e.button >= 1))
				for (; u !== this; u = u.parentNode || this)
					if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
						for (a = [], s = {}, n = 0; n < l; n++) i = t[n], r = i.selector + " ", void 0 === s[r] && (s[r] = i.needsContext ? fe(r, this).index(u) > -1 : fe.find(r, this, null, [u]).length), s[r] && a.push(i);
						a.length && o.push({
							elem: u,
							handlers: a
						})
					}
			return u = this, l < t.length && o.push({
				elem: u,
				handlers: t.slice(l)
			}), o
		},
		addProp: function (e, t) {
			Object.defineProperty(fe.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: fe.isFunction(t) ? function () {
					if (this.originalEvent) return t(this.originalEvent)
				} : function () {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function (t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function (e) {
			return e[fe.expando] ? e : new fe.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function () {
					if (this !== E() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === E() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function () {
					if ("checkbox" === this.type && this.click && r(this, "input")) return this.click(), !1
				},
				_default: function (e) {
					return r(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function (e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, fe.removeEvent = function (e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, fe.Event = function (e, t) {
		return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && fe.extend(this, t), this.timeStamp = e && e.timeStamp || fe.now(), void(this[fe.expando] = !0)) : new fe.Event(e, t)
	}, fe.Event.prototype = {
		constructor: fe.Event,
		isDefaultPrevented: T,
		isPropagationStopped: T,
		isImmediatePropagationStopped: T,
		isSimulated: !1,
		preventDefault: function () {
			var e = this.originalEvent;
			this.isDefaultPrevented = x, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function () {
			var e = this.originalEvent;
			this.isPropagationStopped = x, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = x, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, fe.each({
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
		char: !0,
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
		which: function (e) {
			var t = e.button;
			return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, fe.event.addProp), fe.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (e, t) {
		fe.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function (e) {
				var n, i = this,
					r = e.relatedTarget,
					a = e.handleObj;
				return r && (r === i || fe.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), fe.fn.extend({
		on: function (e, t, n, i) {
			return C(this, e, t, n, i)
		},
		one: function (e, t, n, i) {
			return C(this, e, t, n, i, 1)
		},
		off: function (e, t, n) {
			var i, r;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, fe(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (r in e) this.off(r, t, e[r]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = T), this.each(function () {
				fe.event.remove(this, e, n, t)
			})
		}
	});
	var Ze = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		et = /<script|<style|<link/i,
		tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		nt = /^true\/(.*)/,
		it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	fe.extend({
		htmlPrefilter: function (e) {
			return e.replace(Ze, "<$1></$2>")
		},
		clone: function (e, t, n) {
			var i, r, a, s, o = e.cloneNode(!0),
				l = fe.contains(e.ownerDocument, e);
			if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
				for (s = y(o), a = y(e), i = 0, r = a.length; i < r; i++) L(a[i], s[i]);
			if (t)
				if (n)
					for (a = a || y(e), s = s || y(o), i = 0, r = a.length; i < r; i++) I(a[i], s[i]);
				else I(e, o);
			return (s = y(o, "script")).length > 0 && b(s, !l && y(e, "script")), o
		},
		cleanData: function (e) {
			for (var t, n, i, r = fe.event.special, a = 0; void 0 !== (n = e[a]); a++)
				if (Ae(n)) {
					if (t = n[ze.expando]) {
						if (t.events)
							for (i in t.events) r[i] ? fe.event.remove(n, i) : fe.removeEvent(n, i, t.handle);
						n[ze.expando] = void 0
					}
					n[Ne.expando] && (n[Ne.expando] = void 0)
				}
		}
	}), fe.fn.extend({
		detach: function (e) {
			return D(this, e, !0)
		},
		remove: function (e) {
			return D(this, e)
		},
		text: function (e) {
			return Oe(this, function (e) {
				return void 0 === e ? fe.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function () {
			return P(this, arguments, function (e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || S(this, e).appendChild(e)
			})
		},
		prepend: function () {
			return P(this, arguments, function (e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = S(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function () {
			return P(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function () {
			return P(this, arguments, function (e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function () {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (fe.cleanData(y(e, !1)), e.textContent = "");
			return this
		},
		clone: function (e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function () {
				return fe.clone(this, e, t)
			})
		},
		html: function (e) {
			return Oe(this, function (e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !et.test(e) && !Ye[(We.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = fe.htmlPrefilter(e);
					try {
						for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (fe.cleanData(y(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function () {
			var e = [];
			return P(this, arguments, function (t) {
				var n = this.parentNode;
				fe.inArray(this, e) < 0 && (fe.cleanData(y(this)), n && n.replaceChild(t, this))
			}, e)
		}
	}), fe.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (e, t) {
		fe.fn[e] = function (e) {
			for (var n, i = [], r = fe(e), a = r.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), fe(r[s])[t](n), ae.apply(i, n.get());
			return this.pushStack(i)
		}
	});
	var rt = /^margin/,
		at = new RegExp("^(" + je + ")(?!px)[a-z%]+$", "i"),
		st = function (t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		};
	! function () {
		function t() {
			if (o) {
				o.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Ue.appendChild(s);
				var t = e.getComputedStyle(o);
				n = "1%" !== t.top, a = "2px" === t.marginLeft, i = "4px" === t.width, o.style.marginRight = "50%", r = "4px" === t.marginRight, Ue.removeChild(s), o = null
			}
		}
		var n, i, r, a, s = te.createElement("div"),
			o = te.createElement("div");
		o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === o.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(o), fe.extend(pe, {
			pixelPosition: function () {
				return t(), n
			},
			boxSizingReliable: function () {
				return t(), i
			},
			pixelMarginRight: function () {
				return t(), r
			},
			reliableMarginLeft: function () {
				return t(), a
			}
		}))
	}();
	var ot = /^(none|table(?!-c[ea]).+)/,
		lt = /^--/,
		ut = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ct = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		dt = ["Webkit", "Moz", "ms"],
		pt = te.createElement("div").style;
	fe.extend({
		cssHooks: {
			opacity: {
				get: function (e, t) {
					if (t) {
						var n = O(e, "opacity");
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
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function (e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r, a, s, o = fe.camelCase(t),
					l = lt.test(t),
					u = e.style;
				return l || (t = N(o)), s = fe.cssHooks[t] || fe.cssHooks[o], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : ("string" === (a = typeof n) && (r = Fe.exec(n)) && r[1] && (n = v(e, t, r), a = "number"), void(null != n && n === n && ("number" === a && (n += r && r[3] || (fe.cssNumber[o] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))))
			}
		},
		css: function (e, t, n, i) {
			var r, a, s, o = fe.camelCase(t);
			return lt.test(t) || (t = N(o)), (s = fe.cssHooks[t] || fe.cssHooks[o]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = O(e, t, i)), "normal" === r && t in ct && (r = ct[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
		}
	}), fe.each(["height", "width"], function (e, t) {
		fe.cssHooks[t] = {
			get: function (e, n, i) {
				if (n) return !ot.test(fe.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? j(e, t, i) : Ve(e, ut, function () {
					return j(e, t, i)
				})
			},
			set: function (e, n, i) {
				var r, a = i && st(e),
					s = i && H(e, t, i, "border-box" === fe.css(e, "boxSizing", !1, a), a);
				return s && (r = Fe.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = fe.css(e, t)), $(0, n, s)
			}
		}
	}), fe.cssHooks.marginLeft = A(pe.reliableMarginLeft, function (e, t) {
		if (t) return (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Ve(e, {
			marginLeft: 0
		}, function () {
			return e.getBoundingClientRect().left
		})) + "px"
	}), fe.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (e, t) {
		fe.cssHooks[e + t] = {
			expand: function (n) {
				for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + qe[i] + t] = a[i] || a[i - 2] || a[0];
				return r
			}
		}, rt.test(e) || (fe.cssHooks[e + t].set = $)
	}), fe.fn.extend({
		css: function (e, t) {
			return Oe(this, function (e, t, n) {
				var i, r, a = {},
					s = 0;
				if (Array.isArray(t)) {
					for (i = st(e), r = t.length; s < r; s++) a[t[s]] = fe.css(e, t[s], !1, i);
					return a
				}
				return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
			}, e, t, arguments.length > 1)
		}
	}), fe.Tween = F, F.prototype = {
		constructor: F,
		init: function (e, t, n, i, r, a) {
			this.elem = e, this.prop = n, this.easing = r || fe.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (fe.cssNumber[n] ? "" : "px")
		},
		cur: function () {
			var e = F.propHooks[this.prop];
			return e && e.get ? e.get(this) : F.propHooks._default.get(this)
		},
		run: function (e) {
			var t, n = F.propHooks[this.prop];
			return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
		}
	}, F.prototype.init.prototype = F.prototype, F.propHooks = {
		_default: {
			get: function (e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set: function (e) {
				fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
		set: function (e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, fe.easing = {
		linear: function (e) {
			return e
		},
		swing: function (e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, fe.fx = F.prototype.init, fe.fx.step = {};
	var ht, ft, vt = /^(?:toggle|show|hide)$/,
		mt = /queueHooks$/;
	fe.Animation = fe.extend(W, {
			tweeners: {
				"*": [function (e, t) {
					var n = this.createTween(e, t);
					return v(n.elem, e, Fe.exec(t), n), n
				}]
			},
			tweener: function (e, t) {
				fe.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Le);
				for (var n, i = 0, r = e.length; i < r; i++) n = e[i], W.tweeners[n] = W.tweeners[n] || [], W.tweeners[n].unshift(t)
			},
			prefilters: [function (e, t, n) {
				var i, r, a, s, o, l, u, c, d = "width" in t || "height" in t,
					p = this,
					h = {},
					f = e.style,
					v = e.nodeType && Be(e),
					m = ze.get(e, "fxshow");
				n.queue || (null == (s = fe._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function () {
					s.unqueued || o()
				}), s.unqueued++, p.always(function () {
					p.always(function () {
						s.unqueued--, fe.queue(e, "fx").length || s.empty.fire()
					})
				}));
				for (i in t)
					if (r = t[i], vt.test(r)) {
						if (delete t[i], a = a || "toggle" === r, r === (v ? "hide" : "show")) {
							if ("show" !== r || !m || void 0 === m[i]) continue;
							v = !0
						}
						h[i] = m && m[i] || fe.style(e, i)
					}
				if ((l = !fe.isEmptyObject(t)) || !fe.isEmptyObject(h)) {
					d && 1 === e.nodeType && (n.overflow = [f.overflow, f.overflowX, f.overflowY], null == (u = m && m.display) && (u = ze.get(e, "display")), "none" === (c = fe.css(e, "display")) && (u ? c = u : (g([e], !0), u = e.style.display || u, c = fe.css(e, "display"), g([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === fe.css(e, "float") && (l || (p.done(function () {
						f.display = u
					}), null == u && (c = f.display, u = "none" === c ? "" : c)), f.display = "inline-block")), n.overflow && (f.overflow = "hidden", p.always(function () {
						f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
					})), l = !1;
					for (i in h) l || (m ? "hidden" in m && (v = m.hidden) : m = ze.access(e, "fxshow", {
						display: u
					}), a && (m.hidden = !v), v && g([e], !0), p.done(function () {
						v || g([e]), ze.remove(e, "fxshow");
						for (i in h) fe.style(e, i, h[i])
					})), l = R(v ? m[i] : 0, i, p), i in m || (m[i] = l.start, v && (l.end = l.start, l.start = 0))
				}
			}],
			prefilter: function (e, t) {
				t ? W.prefilters.unshift(e) : W.prefilters.push(e)
			}
		}), fe.speed = function (e, t, n) {
			var i = e && "object" == typeof e ? fe.extend({}, e) : {
				complete: n || !n && t || fe.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !fe.isFunction(t) && t
			};
			return fe.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in fe.fx.speeds ? i.duration = fe.fx.speeds[i.duration] : i.duration = fe.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
				fe.isFunction(i.old) && i.old.call(this), i.queue && fe.dequeue(this, i.queue)
			}, i
		}, fe.fn.extend({
			fadeTo: function (e, t, n, i) {
				return this.filter(Be).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, i)
			},
			animate: function (e, t, n, i) {
				var r = fe.isEmptyObject(e),
					a = fe.speed(t, n, i),
					s = function () {
						var t = W(this, fe.extend({}, e), a);
						(r || ze.get(this, "finish")) && t.stop(!0)
					};
				return s.finish = s, r || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
			},
			stop: function (e, t, n) {
				var i = function (e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
					var t = !0,
						r = null != e && e + "queueHooks",
						a = fe.timers,
						s = ze.get(this);
					if (r) s[r] && s[r].stop && i(s[r]);
					else
						for (r in s) s[r] && s[r].stop && mt.test(r) && i(s[r]);
					for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
					!t && n || fe.dequeue(this, e)
				})
			},
			finish: function (e) {
				return !1 !== e && (e = e || "fx"), this.each(function () {
					var t, n = ze.get(this),
						i = n[e + "queue"],
						r = n[e + "queueHooks"],
						a = fe.timers,
						s = i ? i.length : 0;
					for (n.finish = !0, fe.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
					for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
					delete n.finish
				})
			}
		}), fe.each(["toggle", "show", "hide"], function (e, t) {
			var n = fe.fn[t];
			fe.fn[t] = function (e, i, r) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, i, r)
			}
		}), fe.each({
			slideDown: V("show"),
			slideUp: V("hide"),
			slideToggle: V("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function (e, t) {
			fe.fn[e] = function (e, n, i) {
				return this.animate(t, e, n, i)
			}
		}), fe.timers = [], fe.fx.tick = function () {
			var e, t = 0,
				n = fe.timers;
			for (ht = fe.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
			n.length || fe.fx.stop(), ht = void 0
		}, fe.fx.timer = function (e) {
			fe.timers.push(e), fe.fx.start()
		}, fe.fx.interval = 13, fe.fx.start = function () {
			ft || (ft = !0, q())
		}, fe.fx.stop = function () {
			ft = null
		}, fe.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, fe.fn.delay = function (t, n) {
			return t = fe.fx ? fe.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, i) {
				var r = e.setTimeout(n, t);
				i.stop = function () {
					e.clearTimeout(r)
				}
			})
		},
		function () {
			var e = te.createElement("input"),
				t = te.createElement("select").appendChild(te.createElement("option"));
			e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = t.selected, (e = te.createElement("input")).value = "t", e.type = "radio", pe.radioValue = "t" === e.value
		}();
	var gt, yt = fe.expr.attrHandle;
	fe.fn.extend({
		attr: function (e, t) {
			return Oe(this, fe.attr, e, t, arguments.length > 1)
		},
		removeAttr: function (e) {
			return this.each(function () {
				fe.removeAttr(this, e)
			})
		}
	}), fe.extend({
		attr: function (e, t, n) {
			var i, r, a = e.nodeType;
			if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? fe.prop(e, t, n) : (1 === a && fe.isXMLDoc(e) || (r = fe.attrHooks[t.toLowerCase()] || (fe.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void fe.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = fe.find.attr(e, t)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function (e, t) {
					if (!pe.radioValue && "radio" === t && r(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function (e, t) {
			var n, i = 0,
				r = t && t.match(Le);
			if (r && 1 === e.nodeType)
				for (; n = r[i++];) e.removeAttribute(n)
		}
	}), gt = {
		set: function (e, t, n) {
			return !1 === t ? fe.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, fe.each(fe.expr.match.bool.source.match(/\w+/g), function (e, t) {
		var n = yt[t] || fe.find.attr;
		yt[t] = function (e, t, i) {
			var r, a, s = t.toLowerCase();
			return i || (a = yt[s], yt[s] = r, r = null != n(e, t, i) ? s : null, yt[s] = a), r
		}
	});
	var bt = /^(?:input|select|textarea|button)$/i,
		wt = /^(?:a|area)$/i;
	fe.fn.extend({
		prop: function (e, t) {
			return Oe(this, fe.prop, e, t, arguments.length > 1)
		},
		removeProp: function (e) {
			return this.each(function () {
				delete this[fe.propFix[e] || e]
			})
		}
	}), fe.extend({
		prop: function (e, t, n) {
			var i, r, a = e.nodeType;
			if (3 !== a && 8 !== a && 2 !== a) return 1 === a && fe.isXMLDoc(e) || (t = fe.propFix[t] || t, r = fe.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function (e) {
					var t = fe.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), pe.optSelected || (fe.propHooks.selected = {
		get: function (e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function (e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		fe.propFix[this.toLowerCase()] = this
	}), fe.fn.extend({
		addClass: function (e) {
			var t, n, i, r, a, s, o, l = 0;
			if (fe.isFunction(e)) return this.each(function (t) {
				fe(this).addClass(e.call(this, t, Y(this)))
			});
			if ("string" == typeof e && e)
				for (t = e.match(Le) || []; n = this[l++];)
					if (r = Y(n), i = 1 === n.nodeType && " " + X(r) + " ") {
						for (s = 0; a = t[s++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
						r !== (o = X(i)) && n.setAttribute("class", o)
					}
			return this
		},
		removeClass: function (e) {
			var t, n, i, r, a, s, o, l = 0;
			if (fe.isFunction(e)) return this.each(function (t) {
				fe(this).removeClass(e.call(this, t, Y(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ("string" == typeof e && e)
				for (t = e.match(Le) || []; n = this[l++];)
					if (r = Y(n), i = 1 === n.nodeType && " " + X(r) + " ") {
						for (s = 0; a = t[s++];)
							for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
						r !== (o = X(i)) && n.setAttribute("class", o)
					}
			return this
		},
		toggleClass: function (e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function (n) {
				fe(this).toggleClass(e.call(this, n, Y(this), t), t)
			}) : this.each(function () {
				var t, i, r, a;
				if ("string" === n)
					for (i = 0, r = fe(this), a = e.match(Le) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
				else void 0 !== e && "boolean" !== n || ((t = Y(this)) && ze.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ze.get(this, "__className__") || ""))
			})
		},
		hasClass: function (e) {
			var t, n, i = 0;
			for (t = " " + e + " "; n = this[i++];)
				if (1 === n.nodeType && (" " + X(Y(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var xt = /\r/g;
	fe.fn.extend({
		val: function (e) {
			var t, n, i, r = this[0];
			return arguments.length ? (i = fe.isFunction(e), this.each(function (n) {
				var r;
				1 === this.nodeType && (null == (r = i ? e.call(this, n, fe(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = fe.map(r, function (e) {
					return null == e ? "" : e + ""
				})), (t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
			})) : r ? (t = fe.valHooks[r.type] || fe.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
		}
	}), fe.extend({
		valHooks: {
			option: {
				get: function (e) {
					var t = fe.find.attr(e, "value");
					return null != t ? t : X(fe.text(e))
				}
			},
			select: {
				get: function (e) {
					var t, n, i, a = e.options,
						s = e.selectedIndex,
						o = "select-one" === e.type,
						l = o ? null : [],
						u = o ? s + 1 : a.length;
					for (i = s < 0 ? u : o ? s : 0; i < u; i++)
						if (((n = a[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !r(n.parentNode, "optgroup"))) {
							if (t = fe(n).val(), o) return t;
							l.push(t)
						}
					return l
				},
				set: function (e, t) {
					for (var n, i, r = e.options, a = fe.makeArray(t), s = r.length; s--;) i = r[s], (i.selected = fe.inArray(fe.valHooks.option.get(i), a) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), a
				}
			}
		}
	}), fe.each(["radio", "checkbox"], function () {
		fe.valHooks[this] = {
			set: function (e, t) {
				if (Array.isArray(t)) return e.checked = fe.inArray(fe(e).val(), t) > -1
			}
		}, pe.checkOn || (fe.valHooks[this].get = function (e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Tt = /^(?:focusinfocus|focusoutblur)$/;
	fe.extend(fe.event, {
		trigger: function (t, n, i, r) {
			var a, s, o, l, u, c, d, p = [i || te],
				h = ue.call(t, "type") ? t.type : t,
				f = ue.call(t, "namespace") ? t.namespace.split(".") : [];
			if (s = o = i = i || te, 3 !== i.nodeType && 8 !== i.nodeType && !Tt.test(h + fe.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[fe.expando] ? t : new fe.Event(h, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : fe.makeArray(n, [t]), d = fe.event.special[h] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
				if (!r && !d.noBubble && !fe.isWindow(i)) {
					for (l = d.delegateType || h, Tt.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), o = s;
					o === (i.ownerDocument || te) && p.push(o.defaultView || o.parentWindow || e)
				}
				for (a = 0;
					(s = p[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l : d.bindType || h, (c = (ze.get(s, "events") || {})[t.type] && ze.get(s, "handle")) && c.apply(s, n), (c = u && s[u]) && c.apply && Ae(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
				return t.type = h, r || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Ae(i) || u && fe.isFunction(i[h]) && !fe.isWindow(i) && ((o = i[u]) && (i[u] = null), fe.event.triggered = h, i[h](), fe.event.triggered = void 0, o && (i[u] = o)), t.result
			}
		},
		simulate: function (e, t, n) {
			var i = fe.extend(new fe.Event, n, {
				type: e,
				isSimulated: !0
			});
			fe.event.trigger(i, null, t)
		}
	}), fe.fn.extend({
		trigger: function (e, t) {
			return this.each(function () {
				fe.event.trigger(e, t, this)
			})
		},
		triggerHandler: function (e, t) {
			var n = this[0];
			if (n) return fe.event.trigger(e, t, n, !0)
		}
	}), fe.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
		fe.fn[t] = function (e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), fe.fn.extend({
		hover: function (e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), pe.focusin = "onfocusin" in e, pe.focusin || fe.each({
		focus: "focusin",
		blur: "focusout"
	}, function (e, t) {
		var n = function (e) {
			fe.event.simulate(t, e.target, fe.event.fix(e))
		};
		fe.event.special[t] = {
			setup: function () {
				var i = this.ownerDocument || this,
					r = ze.access(i, t);
				r || i.addEventListener(e, n, !0), ze.access(i, t, (r || 0) + 1)
			},
			teardown: function () {
				var i = this.ownerDocument || this,
					r = ze.access(i, t) - 1;
				r ? ze.access(i, t, r) : (i.removeEventListener(e, n, !0), ze.remove(i, t))
			}
		}
	});
	var Et = e.location,
		Ct = fe.now(),
		St = /\?/;
	fe.parseXML = function (t) {
		var n;
		if (!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch (e) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t), n
	};
	var kt = /\[\]$/,
		Mt = /\r?\n/g,
		It = /^(?:submit|button|image|reset|file)$/i,
		Lt = /^(?:input|select|textarea|keygen)/i;
	fe.param = function (e, t) {
		var n, i = [],
			r = function (e, t) {
				var n = fe.isFunction(t) ? t() : t;
				i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(e) || e.jquery && !fe.isPlainObject(e)) fe.each(e, function () {
			r(this.name, this.value)
		});
		else
			for (n in e) G(n, e[n], t, r);
		return i.join("&")
	}, fe.fn.extend({
		serialize: function () {
			return fe.param(this.serializeArray())
		},
		serializeArray: function () {
			return this.map(function () {
				var e = fe.prop(this, "elements");
				return e ? fe.makeArray(e) : this
			}).filter(function () {
				var e = this.type;
				return this.name && !fe(this).is(":disabled") && Lt.test(this.nodeName) && !It.test(e) && (this.checked || !_e.test(e))
			}).map(function (e, t) {
				var n = fe(this).val();
				return null == n ? null : Array.isArray(n) ? fe.map(n, function (e) {
					return {
						name: t.name,
						value: e.replace(Mt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Mt, "\r\n")
				}
			}).get()
		}
	});
	var Pt = /%20/g,
		Dt = /#.*$/,
		Ot = /([?&])_=[^&]*/,
		At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		zt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Nt = /^(?:GET|HEAD)$/,
		$t = /^\/\//,
		Ht = {},
		jt = {},
		Ft = "*/".concat("*"),
		qt = te.createElement("a");
	qt.href = Et.href, fe.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Et.href,
			type: "GET",
			isLocal: zt.test(Et.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ft,
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
				"text xml": fe.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function (e, t) {
			return t ? K(K(e, fe.ajaxSettings), t) : K(fe.ajaxSettings, e)
		},
		ajaxPrefilter: U(Ht),
		ajaxTransport: U(jt),
		ajax: function (t, n) {
			function i(t, n, i, o) {
				var u, p, h, w, x, T = n;
				c || (c = !0, l && e.clearTimeout(l), r = void 0, s = o || "", E.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, i && (w = J(f, E, i)), w = Z(f, w, E, u), u ? (f.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (fe.lastModified[a] = x), (x = E.getResponseHeader("etag")) && (fe.etag[a] = x)), 204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = w.state, p = w.data, h = w.error, u = !h)) : (h = T, !t && T || (T = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (n || T) + "", u ? g.resolveWith(v, [p, T, E]) : g.rejectWith(v, [E, T, h]), E.statusCode(b), b = void 0, d && m.trigger(u ? "ajaxSuccess" : "ajaxError", [E, f, u ? p : h]), y.fireWith(v, [E, T]), d && (m.trigger("ajaxComplete", [E, f]), --fe.active || fe.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var r, a, s, o, l, u, c, d, p, h, f = fe.ajaxSetup({}, n),
				v = f.context || f,
				m = f.context && (v.nodeType || v.jquery) ? fe(v) : fe.event,
				g = fe.Deferred(),
				y = fe.Callbacks("once memory"),
				b = f.statusCode || {},
				w = {},
				x = {},
				T = "canceled",
				E = {
					readyState: 0,
					getResponseHeader: function (e) {
						var t;
						if (c) {
							if (!o)
								for (o = {}; t = At.exec(s);) o[t[1].toLowerCase()] = t[2];
							t = o[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function () {
						return c ? s : null
					},
					setRequestHeader: function (e, t) {
						return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
					},
					overrideMimeType: function (e) {
						return null == c && (f.mimeType = e), this
					},
					statusCode: function (e) {
						var t;
						if (e)
							if (c) E.always(e[E.status]);
							else
								for (t in e) b[t] = [b[t], e[t]];
						return this
					},
					abort: function (e) {
						var t = e || T;
						return r && r.abort(t), i(0, t), this
					}
				};
			if (g.promise(E), f.url = ((t || f.url || Et.href) + "").replace($t, Et.protocol + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(Le) || [""], null == f.crossDomain) {
				u = te.createElement("a");
				try {
					u.href = f.url, u.href = u.href, f.crossDomain = qt.protocol + "//" + qt.host != u.protocol + "//" + u.host
				} catch (e) {
					f.crossDomain = !0
				}
			}
			if (f.data && f.processData && "string" != typeof f.data && (f.data = fe.param(f.data, f.traditional)), Q(Ht, f, n, E), c) return E;
			(d = fe.event && f.global) && 0 == fe.active++ && fe.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Nt.test(f.type), a = f.url.replace(Dt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Pt, "+")) : (h = f.url.slice(a.length), f.data && (a += (St.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (a = a.replace(Ot, "$1"), h = (St.test(a) ? "&" : "?") + "_=" + Ct++ + h), f.url = a + h), f.ifModified && (fe.lastModified[a] && E.setRequestHeader("If-Modified-Since", fe.lastModified[a]), fe.etag[a] && E.setRequestHeader("If-None-Match", fe.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && E.setRequestHeader("Content-Type", f.contentType), E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]);
			for (p in f.headers) E.setRequestHeader(p, f.headers[p]);
			if (f.beforeSend && (!1 === f.beforeSend.call(v, E, f) || c)) return E.abort();
			if (T = "abort", y.add(f.complete), E.done(f.success), E.fail(f.error), r = Q(jt, f, n, E)) {
				if (E.readyState = 1, d && m.trigger("ajaxSend", [E, f]), c) return E;
				f.async && f.timeout > 0 && (l = e.setTimeout(function () {
					E.abort("timeout")
				}, f.timeout));
				try {
					c = !1, r.send(w, i)
				} catch (e) {
					if (c) throw e;
					i(-1, e)
				}
			} else i(-1, "No Transport");
			return E
		},
		getJSON: function (e, t, n) {
			return fe.get(e, t, n, "json")
		},
		getScript: function (e, t) {
			return fe.get(e, void 0, t, "script")
		}
	}), fe.each(["get", "post"], function (e, t) {
		fe[t] = function (e, n, i, r) {
			return fe.isFunction(n) && (r = r || i, i = n, n = void 0), fe.ajax(fe.extend({
				url: e,
				type: t,
				dataType: r,
				data: n,
				success: i
			}, fe.isPlainObject(e) && e))
		}
	}), fe._evalUrl = function (e) {
		return fe.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, fe.fn.extend({
		wrapAll: function (e) {
			var t;
			return this[0] && (fe.isFunction(e) && (e = e.call(this[0])), t = fe(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function (e) {
			return fe.isFunction(e) ? this.each(function (t) {
				fe(this).wrapInner(e.call(this, t))
			}) : this.each(function () {
				var t = fe(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function (e) {
			var t = fe.isFunction(e);
			return this.each(function (n) {
				fe(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function (e) {
			return this.parent(e).not("body").each(function () {
				fe(this).replaceWith(this.childNodes)
			}), this
		}
	}), fe.expr.pseudos.hidden = function (e) {
		return !fe.expr.pseudos.visible(e)
	}, fe.expr.pseudos.visible = function (e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, fe.ajaxSettings.xhr = function () {
		try {
			return new e.XMLHttpRequest
		} catch (e) {}
	};
	var Bt = {
			0: 200,
			1223: 204
		},
		Vt = fe.ajaxSettings.xhr();
	pe.cors = !!Vt && "withCredentials" in Vt, pe.ajax = Vt = !!Vt, fe.ajaxTransport(function (t) {
		var n, i;
		if (pe.cors || Vt && !t.crossDomain) return {
			send: function (r, a) {
				var s, o = t.xhr();
				if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for (s in t.xhrFields) o[s] = t.xhrFields[s];
				t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
				for (s in r) o.setRequestHeader(s, r[s]);
				n = function (e) {
					return function () {
						n && (n = i = o.onload = o.onerror = o.onabort = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Bt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
							binary: o.response
						} : {
							text: o.responseText
						}, o.getAllResponseHeaders()))
					}
				}, o.onload = n(), i = o.onerror = n("error"), void 0 !== o.onabort ? o.onabort = i : o.onreadystatechange = function () {
					4 === o.readyState && e.setTimeout(function () {
						n && i()
					})
				}, n = n("abort");
				try {
					o.send(t.hasContent && t.data || null)
				} catch (e) {
					if (n) throw e
				}
			},
			abort: function () {
				n && n()
			}
		}
	}), fe.ajaxPrefilter(function (e) {
		e.crossDomain && (e.contents.script = !1)
	}), fe.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function (e) {
				return fe.globalEval(e), e
			}
		}
	}), fe.ajaxPrefilter("script", function (e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), fe.ajaxTransport("script", function (e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function (i, r) {
					t = fe("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function (e) {
						t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
					}), te.head.appendChild(t[0])
				},
				abort: function () {
					n && n()
				}
			}
		}
	});
	var Rt = [],
		_t = /(=)\?(?=&|$)|\?\?/;
	fe.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var e = Rt.pop() || fe.expando + "_" + Ct++;
			return this[e] = !0, e
		}
	}), fe.ajaxPrefilter("json jsonp", function (t, n, i) {
		var r, a, s, o = !1 !== t.jsonp && (_t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && _t.test(t.data) && "data");
		if (o || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(_t, "$1" + r) : !1 !== t.jsonp && (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
			return s || fe.error(r + " was not called"), s[0]
		}, t.dataTypes[0] = "json", a = e[r], e[r] = function () {
			s = arguments
		}, i.always(function () {
			void 0 === a ? fe(e).removeProp(r) : e[r] = a, t[r] && (t.jsonpCallback = n.jsonpCallback, Rt.push(r)), s && fe.isFunction(a) && a(s[0]), s = a = void 0
		}), "script"
	}), pe.createHTMLDocument = function () {
		var e = te.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), fe.parseHTML = function (e, t, n) {
		if ("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var i, r, a;
		return t || (pe.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = te.location.href, t.head.appendChild(i)) : t = te), r = Ee.exec(e), a = !n && [], r ? [t.createElement(r[1])] : (r = w([e], t, a), a && a.length && fe(a).remove(), fe.merge([], r.childNodes))
	}, fe.fn.load = function (e, t, n) {
		var i, r, a, s = this,
			o = e.indexOf(" ");
		return o > -1 && (i = X(e.slice(o)), e = e.slice(0, o)), fe.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && fe.ajax({
			url: e,
			type: r || "GET",
			dataType: "html",
			data: t
		}).done(function (e) {
			a = arguments, s.html(i ? fe("<div>").append(fe.parseHTML(e)).find(i) : e)
		}).always(n && function (e, t) {
			s.each(function () {
				n.apply(this, a || [e.responseText, t, e])
			})
		}), this
	}, fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
		fe.fn[t] = function (e) {
			return this.on(t, e)
		}
	}), fe.expr.pseudos.animated = function (e) {
		return fe.grep(fe.timers, function (t) {
			return e === t.elem
		}).length
	}, fe.offset = {
		setOffset: function (e, t, n) {
			var i, r, a, s, o, l, u = fe.css(e, "position"),
				c = fe(e),
				d = {};
			"static" === u && (e.style.position = "relative"), o = c.offset(), a = fe.css(e, "top"), l = fe.css(e, "left"), ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1 ? (i = c.position(), s = i.top, r = i.left) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, o))), null != t.top && (d.top = t.top - o.top + s), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
		}
	}, fe.fn.extend({
		offset: function (e) {
			if (arguments.length) return void 0 === e ? this : this.each(function (t) {
				fe.offset.setOffset(this, e, t)
			});
			var t, n, i, r, a = this[0];
			return a ? a.getClientRects().length ? (i = a.getBoundingClientRect(), t = a.ownerDocument, n = t.documentElement, r = t.defaultView, {
				top: i.top + r.pageYOffset - n.clientTop,
				left: i.left + r.pageXOffset - n.clientLeft
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function () {
			if (this[0]) {
				var e, t, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === fe.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), r(e[0], "html") || (i = e.offset()), i = {
					top: i.top + fe.css(e[0], "borderTopWidth", !0),
					left: i.left + fe.css(e[0], "borderLeftWidth", !0)
				}), {
					top: t.top - i.top - fe.css(n, "marginTop", !0),
					left: t.left - i.left - fe.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (var e = this.offsetParent; e && "static" === fe.css(e, "position");) e = e.offsetParent;
				return e || Ue
			})
		}
	}), fe.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function (e, t) {
		var n = "pageYOffset" === t;
		fe.fn[e] = function (i) {
			return Oe(this, function (e, i, r) {
				var a;
				return fe.isWindow(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === r ? a ? a[t] : e[i] : void(a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r)
			}, e, i, arguments.length)
		}
	}), fe.each(["top", "left"], function (e, t) {
		fe.cssHooks[t] = A(pe.pixelPosition, function (e, n) {
			if (n) return n = O(e, t), at.test(n) ? fe(e).position()[t] + "px" : n
		})
	}), fe.each({
		Height: "height",
		Width: "width"
	}, function (e, t) {
		fe.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function (n, i) {
			fe.fn[i] = function (r, a) {
				var s = arguments.length && (n || "boolean" != typeof r),
					o = n || (!0 === r || !0 === a ? "margin" : "border");
				return Oe(this, function (t, n, r) {
					var a;
					return fe.isWindow(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === r ? fe.css(t, n, o) : fe.style(t, n, r, o)
				}, t, s ? r : void 0, s)
			}
		})
	}), fe.fn.extend({
		bind: function (e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function (e, t) {
			return this.off(e, null, t)
		},
		delegate: function (e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate: function (e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), fe.holdReady = function (e) {
		e ? fe.readyWait++ : fe.ready(!0)
	}, fe.isArray = Array.isArray, fe.parseJSON = JSON.parse, fe.nodeName = r, "function" == typeof define && define.amd && define("jquery", [], function () {
		return fe
	});
	var Wt = e.jQuery,
		Xt = e.$;
	return fe.noConflict = function (t) {
		return e.$ === fe && (e.$ = Xt), t && e.jQuery === fe && (e.jQuery = Wt), fe
	}, t || (e.jQuery = e.$ = fe), fe
}),
function (e) {
	e.easing.jswing = e.easing.swing, e.extend(e.easing, {
		def: "easeOutQuad",
		swing: function (t, n, i, r, a) {
			return e.easing[e.easing.def](t, n, i, r, a)
		},
		easeInQuad: function (e, t, n, i, r) {
			return i * (t /= r) * t + n
		},
		easeOutQuad: function (e, t, n, i, r) {
			return -i * (t /= r) * (t - 2) + n
		},
		easeInOutQuad: function (e, t, n, i, r) {
			return 1 > (t /= r / 2) ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
		},
		easeInCubic: function (e, t, n, i, r) {
			return i * (t /= r) * t * t + n
		},
		easeOutCubic: function (e, t, n, i, r) {
			return i * ((t = t / r - 1) * t * t + 1) + n
		},
		easeInOutCubic: function (e, t, n, i, r) {
			return 1 > (t /= r / 2) ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
		},
		easeInQuart: function (e, t, n, i, r) {
			return i * (t /= r) * t * t * t + n
		},
		easeOutQuart: function (e, t, n, i, r) {
			return -i * ((t = t / r - 1) * t * t * t - 1) + n
		},
		easeInOutQuart: function (e, t, n, i, r) {
			return 1 > (t /= r / 2) ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
		},
		easeInQuint: function (e, t, n, i, r) {
			return i * (t /= r) * t * t * t * t + n
		},
		easeOutQuint: function (e, t, n, i, r) {
			return i * ((t = t / r - 1) * t * t * t * t + 1) + n
		},
		easeInOutQuint: function (e, t, n, i, r) {
			return 1 > (t /= r / 2) ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
		},
		easeInSine: function (e, t, n, i, r) {
			return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
		},
		easeOutSine: function (e, t, n, i, r) {
			return i * Math.sin(t / r * (Math.PI / 2)) + n
		},
		easeInOutSine: function (e, t, n, i, r) {
			return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
		},
		easeInExpo: function (e, t, n, i, r) {
			return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
		},
		easeOutExpo: function (e, t, n, i, r) {
			return t == r ? n + i : i * (1 - Math.pow(2, -10 * t / r)) + n
		},
		easeInOutExpo: function (e, t, n, i, r) {
			return 0 == t ? n : t == r ? n + i : 1 > (t /= r / 2) ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (2 - Math.pow(2, -10 * --t)) + n
		},
		easeInCirc: function (e, t, n, i, r) {
			return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
		},
		easeOutCirc: function (e, t, n, i, r) {
			return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
		},
		easeInOutCirc: function (e, t, n, i, r) {
			return 1 > (t /= r / 2) ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
		},
		easeInElastic: function (e, t, n, i, r) {
			e = 1.70158;
			var a = 0,
				s = i;
			return 0 == t ? n : 1 == (t /= r) ? n + i : (a || (a = .3 * r), s < Math.abs(i) ? (s = i, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(i / s), -s * Math.pow(2, 10 * --t) * Math.sin(2 * (t * r - e) * Math.PI / a) + n)
		},
		easeOutElastic: function (e, t, n, i, r) {
			e = 1.70158;
			var a = 0,
				s = i;
			return 0 == t ? n : 1 == (t /= r) ? n + i : (a || (a = .3 * r), s < Math.abs(i) ? (s = i, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(i / s), s * Math.pow(2, -10 * t) * Math.sin(2 * (t * r - e) * Math.PI / a) + i + n)
		},
		easeInOutElastic: function (e, t, n, i, r) {
			e = 1.70158;
			var a = 0,
				s = i;
			return 0 == t ? n : 2 == (t /= r / 2) ? n + i : (a || (a = .3 * r * 1.5), s < Math.abs(i) ? (s = i, e = a / 4) : e = a / (2 * Math.PI) * Math.asin(i / s), 1 > t ? -.5 * s * Math.pow(2, 10 * --t) * Math.sin(2 * (t * r - e) * Math.PI / a) + n : s * Math.pow(2, -10 * --t) * Math.sin(2 * (t * r - e) * Math.PI / a) * .5 + i + n)
		},
		easeInBack: function (e, t, n, i, r, a) {
			return void 0 == a && (a = 1.70158), i * (t /= r) * t * ((a + 1) * t - a) + n
		},
		easeOutBack: function (e, t, n, i, r, a) {
			return void 0 == a && (a = 1.70158), i * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + n
		},
		easeInOutBack: function (e, t, n, i, r, a) {
			return void 0 == a && (a = 1.70158), 1 > (t /= r / 2) ? i / 2 * t * t * ((1 + (a *= 1.525)) * t - a) + n : i / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + n
		},
		easeInBounce: function (t, n, i, r, a) {
			return r - e.easing.easeOutBounce(t, a - n, 0, r, a) + i
		},
		easeOutBounce: function (e, t, n, i, r) {
			return (t /= r) < 1 / 2.75 ? 7.5625 * i * t * t + n : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
		},
		easeInOutBounce: function (t, n, i, r, a) {
			return n < a / 2 ? .5 * e.easing.easeInBounce(t, 2 * n, 0, r, a) + i : .5 * e.easing.easeOutBounce(t, 2 * n - a, 0, r, a) + .5 * r + i
		}
	})
}(jQuery),
function (e) {
	"use strict";
	e.html5Loader = function (t) {
		var n = {
				cancelLoading: !1,
				filesToLoad: null,
				debugMode: !1,
				stopExecution: !1,
				mediaBufferSizeToPreload: .2,
				forceMediaPreload: !0,
				onBeforeLoad: function () {},
				onComplete: function () {},
				onElementLoaded: function (e, t) {},
				onUpdate: function (e) {},
				onMediaError: function (e, t) {}
			},
			i = e.extend(n, t),
			r = i.filesToLoad,
			a = i.debugMode,
			s = i.mediaBufferSizeToPreload,
			o = i.forceMediaPreload,
			l = i.stopExecution,
			u = i.onBeforeLoad,
			c = i.onComplete,
			d = i.onElementLoaded,
			p = i.onUpdate,
			h = i.onMediaError,
			f = e("head"),
			v = 0,
			m = 0,
			g = 0,
			y = [],
			b = navigator.userAgent.match(/iPad|Android|(?=.*\bWindows\b)(?=.*\bARM\b)/i),
			w = function (e) {
				return !(!/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4)))
			}(navigator.userAgent || navigator.vendor || window.opera),
			x = {},
			T = function (e) {
				a && console && console.log(e)
			};
		x.video = function () {
			var e = document.createElement("video"),
				t = !1;
			try {
				e.canPlayType && ((t = {
					ogg: e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""),
					h264: e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""),
					webm: e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""),
					vp9: e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, "")
				}).mp4 = t.h264)
			} catch (e) {}
			return t
		}(), x.audio = function () {
			var e = document.createElement("audio"),
				t = !1;
			try {
				e.canPlayType && (t = {
					ogg: e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
					mp3: e.canPlayType("audio/mpeg;").replace(/^no$/, ""),
					opus: e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
					wav: e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
					m4a: (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, "")
				})
			} catch (e) {}
			return t
		}(), x.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
		var E = function (t) {
				var n = t.type.toLowerCase(),
					i = t.sources;
				return e.each(i, function (e) {
					if (x[n][e]) return t = t.sources[e], t.type = n.toUpperCase(), !1
				}), !!t.source && t
			},
			C = function () {
				if (!i.cancelLoading) {
					var e = 0;
					T("_bytesTotal = " + g), T("_bytesLoaded = " + m), e = Math.round(m / g * 100), T("Percentage: " + e + "%"), p(e), y[v].length || (y[++v] ? D() : c())
				}
			},
			S = function (e, t, n) {
				var i = n;
				"VIDEO" !== i.type && "AUDIO" !== i.type || (i = E(i)), i && (g += i.size, y[e].push(i))
			},
			k = function (e) {
				var t;
				T("json loaded"), e.files[0].length || (e.files = [e.files]);
				for (var n = 0, i = e.files.length; n < i; n++) {
					y.push([]);
					for (var r = 0, a = (t = e.files[n]).length; r < a; r++) S(n, 0, t[r])
				}
			},
			M = function (t) {
				if (!i.cancelLoading) {
					var n, r = new e.Deferred,
						a = t.size,
						s = e("<img>");
					return "[object Object]" === t.source.toString() ? t.source.svg && x.svg ? n = t.source.svg : t.source.fallback && (n = t.source.fallback) : n = t.source, s.on("load", function () {
						T("File Loaded:" + n), m += a, d(t, this), y[v].splice(0, 1), C(), r.resolve()
					}), s.on("error", function () {
						T("File load error : " + n), m += a, y[v].splice(0, 1), C(), r.resolve()
					}), s.attr("src", n), s = null, r.promise()
				}
			},
			I = function (t) {
				if (!i.cancelLoading) {
					var n = new e.Deferred,
						r = t.size,
						a = e("VIDEO" === t.type ? "<video>" : "<audio>"),
						l = function () {
							T("File Loaded:" + t.source), m += r, d(t, a[0]), y[v].splice(0, 1), a.off(), a = null, C(), n.resolve()
						};
					return w || b ? l() : (a.on("loadstart", function () {
						3 === this.networkState && (h(t, this), l())
					}), a.on("error stalled", function () {
						h(t, this), l()
					}), a.on("loadedmetadata", function () {
						a.on("progress", function () {
							var e = 0;
							T("loading in progress file:" + t.source), this.buffered.length > 0 && (e = r / this.duration * this.buffered.end(0), r -= e, m += e, C(), 1 / r * e > s && !o && l())
						})
					}), a.attr({
						preload: "auto",
						src: t.source,
						controls: "controls"
					}), o && a.on("canplaythrough", l)), n.promise()
				}
			},
			L = function (t) {
				if (!i.cancelLoading) {
					var n = new e.Deferred,
						r = t.size,
						a = {
							url: t.source,
							dataType: "script"
						};
					return (void 0 === t.stopExecution && l || !0 === t.stopExecution) && (a.converters = {
						"text script": function (e) {
							return e
						}
					}), e.ajax(a).done(function (e) {
						T("File Loaded:" + t.source), m += r, d(t, e), y[v].splice(0, 1), C(), n.resolve()
					}).fail(function (e, n, i) {
						T("\n File Failed: " + t.source + "\n Message:     " + i.message + "\n")
					}), n.promise()
				}
			},
			P = function (t, n) {
				if (!i.cancelLoading) {
					var r = new e.Deferred;
					return e.ajax({
						url: t.source,
						dataType: "text",
						success: function (e) {
							if (T("File Loaded:" + t.source), d(t, e), m += t.size, y[v].splice(0, 1), C(), n)
								if (document.createStyleSheet) try {
									document.createStyleSheet(t.source)
								} catch (e) {} else {
									var i;
									(i = document.createElement("link")).rel = "stylesheet", i.type = "text/css", i.media = "all", i.href = t.source, f[0].appendChild(i)
								}
							r.resolve(e)
						}
					}), r.promise()
				}
			},
			D = function () {
				var t = y[v].slice();
				e.each(t, function (e, t) {
					switch (T("preloading files"), T("file to preload:" + t.source), t.type) {
						case "IMAGE":
							M(t);
							break;
						case "VIDEO":
						case "AUDIO":
							I(t);
							break;
						case "SCRIPT":
							L(t);
							break;
						case "TEXT":
						case "CSS":
							P(t, /CSS/g.test(t.type));
							break;
						default:
							return !1
					}
				})
			};
		return this.init = function () {
			T("plugin initialized");
			var t = new e.Deferred,
				n = t.promise();
			u(), "object" == typeof r ? (e.proxy(k, this, r)(), t.resolve(r)) : (e.getJSON(r, t.resolve), t.pipe(e.proxy(k, this))), n.then(e.proxy(C, this)), n.then(e.proxy(D, this))
		}, this.cancel = function () {
			i.cancelLoading = !0
		}, this.init(), this
	}
}(jQuery),
function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, n) {
		return void 0 === n && (n = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(n), n
	} : e(jQuery)
}(function (e) {
	"use strict";
	var t = e(document),
		n = e(window),
		i = "selectric",
		r = ".sl",
		a = ["a", "e", "i", "o", "u", "n", "c", "y"],
		s = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g],
		o = function (t, n) {
			var i = this;
			i.element = t, i.$element = e(t), i.state = {
				multiple: !!i.$element.attr("multiple"),
				enabled: !1,
				opened: !1,
				currValue: -1,
				selectedIdx: -1,
				highlightedIdx: -1
			}, i.eventTriggers = {
				open: i.open,
				close: i.close,
				destroy: i.destroy,
				refresh: i.refresh,
				init: i.init
			}, i.init(n)
		};
	o.prototype = {
		utils: {
			isMobile: function () {
				return /android|ip(hone|od|ad)/i.test(navigator.userAgent)
			},
			escapeRegExp: function (e) {
				return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
			},
			replaceDiacritics: function (e) {
				for (var t = s.length; t--;) e = e.toLowerCase().replace(s[t], a[t]);
				return e
			},
			format: function (e) {
				var t = arguments;
				return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function (e, n, i) {
					return i && t[1] ? t[1][i] : t[n]
				})
			},
			nextEnabledItem: function (e, t) {
				for (; e[t = (t + 1) % e.length].disabled;);
				return t
			},
			previousEnabledItem: function (e, t) {
				for (; e[t = (t > 0 ? t : e.length) - 1].disabled;);
				return t
			},
			toDash: function (e) {
				return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
			},
			triggerCallback: function (t, n) {
				var r = n.element,
					a = n.options["on" + t],
					s = [r].concat([].slice.call(arguments).slice(1));
				e.isFunction(a) && a.apply(r, s), e(r).trigger(i + "-" + this.toDash(t), s)
			},
			arrayToClassname: function (t) {
				var n = e.grep(t, function (e) {
					return !!e
				});
				return e.trim(n.join(" "))
			}
		},
		init: function (t) {
			var n = this;
			if (n.options = e.extend(!0, {}, e.fn[i].defaults, n.options, t), n.utils.triggerCallback("BeforeInit", n), n.destroy(!0), n.options.disableOnMobile && n.utils.isMobile()) n.disableOnMobile = !0;
			else {
				n.classes = n.getClassNames();
				var r = e("<input/>", {
						class: n.classes.input,
						readonly: n.utils.isMobile()
					}),
					a = e("<div/>", {
						class: n.classes.items,
						tabindex: -1
					}),
					s = e("<div/>", {
						class: n.classes.scroll
					}),
					o = e("<div/>", {
						class: n.classes.prefix,
						html: n.options.arrowButtonMarkup
					}),
					l = e("<span/>", {
						class: "label"
					}),
					u = n.$element.wrap("<div/>").parent().append(o.prepend(l), a, r),
					c = e("<div/>", {
						class: n.classes.hideselect
					});
				n.elements = {
					input: r,
					items: a,
					itemsScroll: s,
					wrapper: o,
					label: l,
					outerWrapper: u
				}, n.options.nativeOnMobile && n.utils.isMobile() && (n.elements.input = void 0, c.addClass(n.classes.prefix + "-is-native"), n.$element.on("change", function () {
					n.refresh()
				})), n.$element.on(n.eventTriggers).wrap(c), n.originalTabindex = n.$element.prop("tabindex"), n.$element.prop("tabindex", !1), n.populate(), n.activate(), n.utils.triggerCallback("Init", n)
			}
		},
		activate: function () {
			var e = this,
				t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
				n = e.$element.width();
			t.removeClass(e.classes.tempshow), e.utils.triggerCallback("BeforeActivate", e), e.elements.outerWrapper.prop("class", e.utils.arrayToClassname([e.classes.wrapper, e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"), e.options.responsive ? e.classes.responsive : ""])), e.options.inheritOriginalWidth && n > 0 && e.elements.outerWrapper.width(n), e.unbindEvents(), e.$element.prop("disabled") ? (e.elements.outerWrapper.addClass(e.classes.disabled), e.elements.input && e.elements.input.prop("disabled", !0)) : (e.state.enabled = !0, e.elements.outerWrapper.removeClass(e.classes.disabled), e.$li = e.elements.items.removeAttr("style").find("li"), e.bindEvents()), e.utils.triggerCallback("Activate", e)
		},
		getClassNames: function () {
			var t = this,
				n = t.options.customClass,
				i = {};
			return e.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Scroll Group GroupLabel".split(" "), function (e, r) {
				var a = n.prefix + r;
				i[r.toLowerCase()] = n.camelCase ? a : t.utils.toDash(a)
			}), i.prefix = n.prefix, i
		},
		setLabel: function () {
			var t = this,
				n = t.options.labelBuilder;
			if (t.state.multiple) {
				var i = e.isArray(t.state.currValue) ? t.state.currValue : [t.state.currValue];
				i = 0 === i.length ? [0] : i;
				var r = e.map(i, function (n) {
					return e.grep(t.lookupItems, function (e) {
						return e.index === n
					})[0]
				});
				r = e.grep(r, function (t) {
					return r.length > 1 || 0 === r.length ? "" !== e.trim(t.value) : t
				}), r = e.map(r, function (i) {
					return e.isFunction(n) ? n(i) : t.utils.format(n, i)
				}), t.options.multiple.maxLabelEntries && (r.length >= t.options.multiple.maxLabelEntries + 1 ? (r = r.slice(0, t.options.multiple.maxLabelEntries)).push(e.isFunction(n) ? n({
					text: "..."
				}) : t.utils.format(n, {
					text: "..."
				})) : r.slice(r.length - 1)), t.elements.label.html(r.join(t.options.multiple.separator))
			} else {
				var a = t.lookupItems[t.state.currValue];
				t.elements.label.html(e.isFunction(n) ? n(a) : t.utils.format(n, a))
			}
		},
		populate: function () {
			var t = this,
				n = t.$element.children(),
				i = t.$element.find("option"),
				r = i.filter(":selected"),
				a = i.index(r),
				s = 0,
				o = t.state.multiple ? [] : 0;
			r.length > 1 && t.state.multiple && (a = [], r.each(function () {
				a.push(e(this).index())
			})), t.state.currValue = ~a ? a : o, t.state.selectedIdx = t.state.currValue, t.state.highlightedIdx = t.state.currValue, t.items = [], t.lookupItems = [], n.length && (n.each(function (n) {
				var i = e(this);
				if (i.is("optgroup")) {
					var r = {
						element: i,
						label: i.prop("label"),
						groupDisabled: i.prop("disabled"),
						items: []
					};
					i.children().each(function (n) {
						var i = e(this);
						r.items[n] = t.getItemData(s, i, r.groupDisabled), t.lookupItems[s] = r.items[n], s++
					}), t.items[n] = r
				} else t.items[n] = t.getItemData(s, i, i.prop("disabled")), t.lookupItems[s] = t.items[n], s++
			}), t.setLabel(), t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))))
		},
		getItemData: function (t, n, i) {
			var r = this;
			return {
				index: t,
				element: n,
				value: n.val(),
				className: n.prop("class"),
				text: n.html(),
				slug: e.trim(r.utils.replaceDiacritics(n.html())),
				selected: n.prop("selected"),
				disabled: i
			}
		},
		getItemsMarkup: function (t) {
			var n = this,
				i = "<ul>";
			return e.isFunction(n.options.listBuilder) && n.options.listBuilder && (t = n.options.listBuilder(t)), e.each(t, function (t, r) {
				void 0 !== r.label ? (i += n.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', n.utils.arrayToClassname([n.classes.group, r.groupDisabled ? "disabled" : "", r.element.prop("class")]), n.classes.grouplabel, r.element.prop("label")), e.each(r.items, function (e, t) {
					i += n.getItemMarkup(t.index, t)
				}), i += "</ul>") : i += n.getItemMarkup(r.index, r)
			}), i + "</ul>"
		},
		getItemMarkup: function (t, n) {
			var i = this,
				r = i.options.optionsItemBuilder,
				a = {
					value: n.value,
					text: n.text,
					slug: n.slug,
					index: n.index
				};
			return i.utils.format('<li data-index="{1}" class="{2}">{3}</li>', t, i.utils.arrayToClassname([n.className, t === i.items.length - 1 ? "last" : "", n.disabled ? "disabled" : "", n.selected ? "selected" : ""]), e.isFunction(r) ? i.utils.format(r(n), n) : i.utils.format(r, a))
		},
		unbindEvents: function () {
			var e = this;
			e.elements.wrapper.add(e.$element).add(e.elements.outerWrapper).add(e.elements.input).off(r)
		},
		bindEvents: function () {
			var t = this;
			t.elements.outerWrapper.on("mouseenter.sl mouseleave" + r, function (n) {
				e(this).toggleClass(t.classes.hover, "mouseenter" === n.type), t.options.openOnHover && (clearTimeout(t.closeTimer), "mouseleave" === n.type ? t.closeTimer = setTimeout(e.proxy(t.close, t), t.options.hoverIntentTimeout) : t.open())
			}), t.elements.wrapper.on("click" + r, function (e) {
				t.state.opened ? t.close() : t.open(e)
			}), t.options.nativeOnMobile && t.utils.isMobile() || (t.$element.on("focus" + r, function () {
				t.elements.input.focus()
			}), t.elements.input.prop({
				tabindex: t.originalTabindex,
				disabled: !1
			}).on("keydown" + r, e.proxy(t.handleKeys, t)).on("focusin" + r, function (e) {
				t.elements.outerWrapper.addClass(t.classes.focus), t.elements.input.one("blur", function () {
					t.elements.input.blur()
				}), t.options.openOnFocus && !t.state.opened && t.open(e)
			}).on("focusout" + r, function () {
				t.elements.outerWrapper.removeClass(t.classes.focus)
			}).on("input propertychange", function () {
				var n = t.elements.input.val(),
					i = new RegExp("^" + t.utils.escapeRegExp(n), "i");
				clearTimeout(t.resetStr), t.resetStr = setTimeout(function () {
					t.elements.input.val("")
				}, t.options.keySearchTimeout), n.length && e.each(t.items, function (e, n) {
					(!n.disabled && i.test(n.text) || i.test(n.slug)) && t.highlight(e)
				})
			})), t.$li.on({
				mousedown: function (e) {
					e.preventDefault(), e.stopPropagation()
				},
				click: function () {
					return t.select(e(this).data("index")), !1
				}
			})
		},
		handleKeys: function (t) {
			var n = this,
				i = t.keyCode || t.which,
				r = n.options.keys,
				a = e.inArray(i, r.previous) > -1,
				s = e.inArray(i, r.next) > -1,
				o = e.inArray(i, r.select) > -1,
				l = e.inArray(i, r.open) > -1,
				u = n.state.highlightedIdx,
				c = a && 0 === u || s && u + 1 === n.items.length,
				d = 0;
			if (13 !== i && 32 !== i || t.preventDefault(), a || s) {
				if (!n.options.allowWrap && c) return;
				a && (d = n.utils.previousEnabledItem(n.items, u)), s && (d = n.utils.nextEnabledItem(n.items, u)), n.highlight(d)
			}
			return o && n.state.opened ? (n.select(u), void(n.state.multiple && n.options.multiple.keepMenuOpen || n.close())) : void(l && !n.state.opened && n.open())
		},
		refresh: function () {
			var e = this;
			e.populate(), e.activate(), e.utils.triggerCallback("Refresh", e)
		},
		setOptionsDimensions: function () {
			var e = this,
				t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),
				n = e.options.maxHeight,
				i = e.elements.items.outerWidth(),
				r = e.elements.wrapper.outerWidth() - (i - e.elements.items.width());
			!e.options.expandToItemText || r > i ? e.finalWidth = r : (e.elements.items.css("overflow", "scroll"), e.elements.outerWrapper.width(9e4), e.finalWidth = e.elements.items.width(), e.elements.items.css("overflow", ""), e.elements.outerWrapper.width("")), e.elements.items.width(e.finalWidth).height() > n && e.elements.items.height(n), t.removeClass(e.classes.tempshow)
		},
		isInViewport: function () {
			var e = this,
				t = n.scrollTop(),
				i = n.height(),
				r = e.elements.outerWrapper.offset().top,
				a = r + e.elements.outerWrapper.outerHeight() + e.itemsHeight <= t + i,
				s = r - e.itemsHeight > t,
				o = !a && s;
			e.elements.outerWrapper.toggleClass(e.classes.above, o)
		},
		detectItemVisibility: function (t) {
			var n = this;
			n.state.multiple && (t = e.isArray(t) && 0 === t.length ? 0 : t, t = e.isArray(t) ? Math.min.apply(Math, t) : t);
			var i = n.$li.eq(t).outerHeight(),
				r = n.$li[t].offsetTop,
				a = n.elements.itemsScroll.scrollTop(),
				s = r + 2 * i;
			n.elements.itemsScroll.scrollTop(s > a + n.itemsHeight ? s - n.itemsHeight : r - i < a ? r - i : a)
		},
		open: function (n) {
			var a = this;
			return (!a.options.nativeOnMobile || !a.utils.isMobile()) && (a.utils.triggerCallback("BeforeOpen", a), n && (n.preventDefault(), n.stopPropagation()), void(a.state.enabled && (a.setOptionsDimensions(), e("." + a.classes.hideselect, "." + a.classes.open).children()[i]("close"), a.state.opened = !0, a.itemsHeight = a.elements.items.outerHeight(), a.itemsInnerHeight = a.elements.items.height(), a.elements.outerWrapper.addClass(a.classes.open), a.elements.input.val(""), n && "focusin" !== n.type && a.elements.input.focus(), setTimeout(function () {
				t.on("click" + r, e.proxy(a.close, a)).on("scroll" + r, e.proxy(a.isInViewport, a))
			}, 1), a.isInViewport(), a.options.preventWindowScroll && t.on("mousewheel.sl DOMMouseScroll" + r, "." + a.classes.scroll, function (t) {
				var n = t.originalEvent,
					i = e(this).scrollTop(),
					r = 0;
				"detail" in n && (r = -1 * n.detail), "wheelDelta" in n && (r = n.wheelDelta), "wheelDeltaY" in n && (r = n.wheelDeltaY), "deltaY" in n && (r = -1 * n.deltaY), (i === this.scrollHeight - a.itemsInnerHeight && r < 0 || 0 === i && r > 0) && t.preventDefault()
			}), a.detectItemVisibility(a.state.selectedIdx), a.highlight(a.state.multiple ? -1 : a.state.selectedIdx), a.utils.triggerCallback("Open", a))))
		},
		close: function () {
			var e = this;
			e.utils.triggerCallback("BeforeClose", e), t.off(r), e.elements.outerWrapper.removeClass(e.classes.open), e.state.opened = !1, e.utils.triggerCallback("Close", e)
		},
		change: function () {
			var t = this;
			t.utils.triggerCallback("BeforeChange", t), t.state.multiple ? (e.each(t.lookupItems, function (e) {
				t.lookupItems[e].selected = !1, t.$element.find("option").prop("selected", !1)
			}), e.each(t.state.selectedIdx, function (e, n) {
				t.lookupItems[n].selected = !0, t.$element.find("option").eq(n).prop("selected", !0)
			}), t.state.currValue = t.state.selectedIdx, t.setLabel(), t.utils.triggerCallback("Change", t)) : t.state.currValue !== t.state.selectedIdx && (t.$element.prop("selectedIndex", t.state.currValue = t.state.selectedIdx).data("value", t.lookupItems[t.state.selectedIdx].text), t.setLabel(), t.utils.triggerCallback("Change", t))
		},
		highlight: function (e) {
			var t = this,
				n = t.$li.filter("[data-index]").removeClass("highlighted");
			t.utils.triggerCallback("BeforeHighlight", t), void 0 === e || -1 === e || t.lookupItems[e].disabled || (n.eq(t.state.highlightedIdx = e).addClass("highlighted"), t.detectItemVisibility(e), t.utils.triggerCallback("Highlight", t))
		},
		select: function (t) {
			var n = this,
				i = n.$li.filter("[data-index]");
			if (n.utils.triggerCallback("BeforeSelect", n, t), void 0 !== t && -1 !== t && !n.lookupItems[t].disabled) {
				if (n.state.multiple) {
					n.state.selectedIdx = e.isArray(n.state.selectedIdx) ? n.state.selectedIdx : [n.state.selectedIdx];
					var r = e.inArray(t, n.state.selectedIdx); - 1 !== r ? n.state.selectedIdx.splice(r, 1) : n.state.selectedIdx.push(t), i.removeClass("selected").filter(function (t) {
						return -1 !== e.inArray(t, n.state.selectedIdx)
					}).addClass("selected")
				} else i.removeClass("selected").eq(n.state.selectedIdx = t).addClass("selected");
				n.state.multiple && n.options.multiple.keepMenuOpen || n.close(), n.change(), n.utils.triggerCallback("Select", n, t)
			}
		},
		destroy: function (e) {
			var t = this;
			t.state && t.state.enabled && (t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(), e || t.$element.removeData(i).removeData("value"), t.$element.prop("tabindex", t.originalTabindex).off(r).off(t.eventTriggers).unwrap().unwrap(), t.state.enabled = !1)
		}
	}, e.fn[i] = function (t) {
		return this.each(function () {
			var n = e.data(this, i);
			n && !n.disableOnMobile ? "string" == typeof t && n[t] ? n[t]() : n.init(t) : e.data(this, i, new o(this, t))
		})
	}, e.fn[i].defaults = {
		onChange: function (t) {
			e(t).change()
		},
		maxHeight: 300,
		keySearchTimeout: 500,
		arrowButtonMarkup: '<b class="button">&#x25be;</b>',
		disableOnMobile: !1,
		nativeOnMobile: !0,
		openOnFocus: !0,
		openOnHover: !1,
		hoverIntentTimeout: 500,
		expandToItemText: !1,
		responsive: !1,
		preventWindowScroll: !0,
		inheritOriginalWidth: !1,
		allowWrap: !0,
		optionsItemBuilder: "{text}",
		labelBuilder: "{text}",
		listBuilder: !1,
		keys: {
			previous: [37, 38],
			next: [39, 40],
			select: [9, 13, 27],
			open: [13, 32, 37, 38, 39, 40],
			close: [9, 27]
		},
		customClass: {
			prefix: i,
			camelCase: !1
		},
		multiple: {
			separator: ", ",
			keepMenuOpen: !0,
			maxLabelEntries: !1
		}
	}
}),
function (e, t, n, i) {
	"use strict";

	function r(e, t, n) {
		return setTimeout(c(e, n), t)
	}

	function a(e, t, n) {
		return !!Array.isArray(e) && (s(e, n[t], n), !0)
	}

	function s(e, t, n) {
		var r;
		if (e)
			if (e.forEach) e.forEach(t, n);
			else if (e.length !== i)
			for (r = 0; r < e.length;) t.call(n, e[r], r, e), r++;
		else
			for (r in e) e.hasOwnProperty(r) && t.call(n, e[r], r, e)
	}

	function o(e, t, n) {
		for (var r = Object.keys(t), a = 0; a < r.length;)(!n || n && e[r[a]] === i) && (e[r[a]] = t[r[a]]), a++;
		return e
	}

	function l(e, t) {
		return o(e, t, !0)
	}

	function u(e, t, n) {
		var i, r = t.prototype;
		(i = e.prototype = Object.create(r)).constructor = e, i._super = r, n && o(i, n)
	}

	function c(e, t) {
		return function () {
			return e.apply(t, arguments)
		}
	}

	function d(e, t) {
		return typeof e == ce ? e.apply(t ? t[0] || i : i, t) : e
	}

	function p(e, t) {
		return e === i ? t : e
	}

	function h(e, t, n) {
		s(g(t), function (t) {
			e.addEventListener(t, n, !1)
		})
	}

	function f(e, t, n) {
		s(g(t), function (t) {
			e.removeEventListener(t, n, !1)
		})
	}

	function v(e, t) {
		for (; e;) {
			if (e == t) return !0;
			e = e.parentNode
		}
		return !1
	}

	function m(e, t) {
		return e.indexOf(t) > -1
	}

	function g(e) {
		return e.trim().split(/\s+/g)
	}

	function y(e, t, n) {
		if (e.indexOf && !n) return e.indexOf(t);
		for (var i = 0; i < e.length;) {
			if (n && e[i][n] == t || !n && e[i] === t) return i;
			i++
		}
		return -1
	}

	function b(e) {
		return Array.prototype.slice.call(e, 0)
	}

	function w(e, t, n) {
		for (var i = [], r = [], a = 0; a < e.length;) {
			var s = t ? e[a][t] : e[a];
			y(r, s) < 0 && i.push(e[a]), r[a] = s, a++
		}
		return n && (i = t ? i.sort(function (e, n) {
			return e[t] > n[t]
		}) : i.sort()), i
	}

	function x(e, t) {
		for (var n, r, a = t[0].toUpperCase() + t.slice(1), s = 0; s < le.length;) {
			if (n = le[s], (r = n ? n + a : t) in e) return r;
			s++
		}
		return i
	}

	function T() {
		return fe++
	}

	function E(e) {
		var t = e.ownerDocument;
		return t.defaultView || t.parentWindow
	}

	function C(e, t) {
		var n = this;
		this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
			d(e.options.enable, [e]) && n.handler(t)
		}, this.init()
	}

	function S(e) {
		var t = e.options.inputClass;
		return new(t || (ge ? F : ye ? V : me ? _ : j))(e, k)
	}

	function k(e, t, n) {
		var i = n.pointers.length,
			r = n.changedPointers.length,
			a = t & Te && i - r == 0,
			s = t & (Ce | Se) && i - r == 0;
		n.isFirst = !!a, n.isFinal = !!s, a && (e.session = {}), n.eventType = t, M(e, n), e.emit("hammer.input", n), e.recognize(n), e.session.prevInput = n
	}

	function M(e, t) {
		var n = e.session,
			i = t.pointers,
			r = i.length;
		n.firstInput || (n.firstInput = P(t)), r > 1 && !n.firstMultiple ? n.firstMultiple = P(t) : 1 === r && (n.firstMultiple = !1);
		var a = n.firstInput,
			s = n.firstMultiple,
			o = s ? s.center : a.center,
			l = t.center = D(i);
		t.timeStamp = he(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = N(o, l), t.distance = z(o, l), I(n, t), t.offsetDirection = A(t.deltaX, t.deltaY), t.scale = s ? H(s.pointers, i) : 1, t.rotation = s ? $(s.pointers, i) : 0, L(n, t);
		var u = e.element;
		v(t.srcEvent.target, u) && (u = t.srcEvent.target), t.target = u
	}

	function I(e, t) {
		var n = t.center,
			i = e.offsetDelta || {},
			r = e.prevDelta || {},
			a = e.prevInput || {};
		(t.eventType === Te || a.eventType === Ce) && (r = e.prevDelta = {
			x: a.deltaX || 0,
			y: a.deltaY || 0
		}, i = e.offsetDelta = {
			x: n.x,
			y: n.y
		}), t.deltaX = r.x + (n.x - i.x), t.deltaY = r.y + (n.y - i.y)
	}

	function L(e, t) {
		var n, r, a, s, o = e.lastInterval || t,
			l = t.timeStamp - o.timeStamp;
		if (t.eventType != Se && (l > xe || o.velocity === i)) {
			var u = o.deltaX - t.deltaX,
				c = o.deltaY - t.deltaY,
				d = O(l, u, c);
			r = d.x, a = d.y, n = pe(d.x) > pe(d.y) ? d.x : d.y, s = A(u, c), e.lastInterval = t
		} else n = o.velocity, r = o.velocityX, a = o.velocityY, s = o.direction;
		t.velocity = n, t.velocityX = r, t.velocityY = a, t.direction = s
	}

	function P(e) {
		for (var t = [], n = 0; n < e.pointers.length;) t[n] = {
			clientX: de(e.pointers[n].clientX),
			clientY: de(e.pointers[n].clientY)
		}, n++;
		return {
			timeStamp: he(),
			pointers: t,
			center: D(t),
			deltaX: e.deltaX,
			deltaY: e.deltaY
		}
	}

	function D(e) {
		var t = e.length;
		if (1 === t) return {
			x: de(e[0].clientX),
			y: de(e[0].clientY)
		};
		for (var n = 0, i = 0, r = 0; t > r;) n += e[r].clientX, i += e[r].clientY, r++;
		return {
			x: de(n / t),
			y: de(i / t)
		}
	}

	function O(e, t, n) {
		return {
			x: t / e || 0,
			y: n / e || 0
		}
	}

	function A(e, t) {
		return e === t ? ke : pe(e) >= pe(t) ? e > 0 ? Me : Ie : t > 0 ? Le : Pe
	}

	function z(e, t, n) {
		n || (n = ze);
		var i = t[n[0]] - e[n[0]],
			r = t[n[1]] - e[n[1]];
		return Math.sqrt(i * i + r * r)
	}

	function N(e, t, n) {
		n || (n = ze);
		var i = t[n[0]] - e[n[0]],
			r = t[n[1]] - e[n[1]];
		return 180 * Math.atan2(r, i) / Math.PI
	}

	function $(e, t) {
		return N(t[1], t[0], Ne) - N(e[1], e[0], Ne)
	}

	function H(e, t) {
		return z(t[0], t[1], Ne) / z(e[0], e[1], Ne)
	}

	function j() {
		this.evEl = He, this.evWin = je, this.allow = !0, this.pressed = !1, C.apply(this, arguments)
	}

	function F() {
		this.evEl = Be, this.evWin = Ve, C.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
	}

	function q() {
		this.evTarget = _e, this.evWin = We, this.started = !1, C.apply(this, arguments)
	}

	function B(e, t) {
		var n = b(e.touches),
			i = b(e.changedTouches);
		return t & (Ce | Se) && (n = w(n.concat(i), "identifier", !0)), [n, i]
	}

	function V() {
		this.evTarget = Ye, this.targetIds = {}, C.apply(this, arguments)
	}

	function R(e, t) {
		var n = b(e.touches),
			i = this.targetIds;
		if (t & (Te | Ee) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
		var r, a, s = b(e.changedTouches),
			o = [],
			l = this.target;
		if (a = n.filter(function (e) {
				return v(e.target, l)
			}), t === Te)
			for (r = 0; r < a.length;) i[a[r].identifier] = !0, r++;
		for (r = 0; r < s.length;) i[s[r].identifier] && o.push(s[r]), t & (Ce | Se) && delete i[s[r].identifier], r++;
		return o.length ? [w(a.concat(o), "identifier", !0), o] : void 0
	}

	function _() {
		C.apply(this, arguments);
		var e = c(this.handler, this);
		this.touch = new V(this.manager, e), this.mouse = new j(this.manager, e)
	}

	function W(e, t) {
		this.manager = e, this.set(t)
	}

	function X(e) {
		if (m(e, Ze)) return Ze;
		var t = m(e, et),
			n = m(e, tt);
		return t && n ? et + " " + tt : t || n ? t ? et : tt : m(e, Je) ? Je : Ke
	}

	function Y(e) {
		this.id = T(), this.manager = null, this.options = l(e || {}, this.defaults), this.options.enable = p(this.options.enable, !0), this.state = nt, this.simultaneous = {}, this.requireFail = []
	}

	function G(e) {
		return e & ot ? "cancel" : e & at ? "end" : e & rt ? "move" : e & it ? "start" : ""
	}

	function U(e) {
		return e == Pe ? "down" : e == Le ? "up" : e == Me ? "left" : e == Ie ? "right" : ""
	}

	function Q(e, t) {
		var n = t.manager;
		return n ? n.get(e) : e
	}

	function K() {
		Y.apply(this, arguments)
	}

	function J() {
		K.apply(this, arguments), this.pX = null, this.pY = null
	}

	function Z() {
		K.apply(this, arguments)
	}

	function ee() {
		Y.apply(this, arguments), this._timer = null, this._input = null
	}

	function te() {
		K.apply(this, arguments)
	}

	function ne() {
		K.apply(this, arguments)
	}

	function ie() {
		Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
	}

	function re(e, t) {
		return t = t || {}, t.recognizers = p(t.recognizers, re.defaults.preset), new ae(e, t)
	}

	function ae(e, t) {
		t = t || {}, this.options = l(t, re.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = S(this), this.touchAction = new W(this, this.options.touchAction), se(this, !0), s(t.recognizers, function (e) {
			var t = this.add(new e[0](e[1]));
			e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
		}, this)
	}

	function se(e, t) {
		var n = e.element;
		s(e.options.cssProps, function (e, i) {
			n.style[x(n.style, i)] = t ? e : ""
		})
	}

	function oe(e, n) {
		var i = t.createEvent("Event");
		i.initEvent(e, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
	}
	var le = ["", "webkit", "moz", "MS", "ms", "o"],
		ue = t.createElement("div"),
		ce = "function",
		de = Math.round,
		pe = Math.abs,
		he = Date.now,
		fe = 1,
		ve = /mobile|tablet|ip(ad|hone|od)|android/i,
		me = "ontouchstart" in e,
		ge = x(e, "PointerEvent") !== i,
		ye = me && ve.test(navigator.userAgent),
		be = "touch",
		we = "mouse",
		xe = 25,
		Te = 1,
		Ee = 2,
		Ce = 4,
		Se = 8,
		ke = 1,
		Me = 2,
		Ie = 4,
		Le = 8,
		Pe = 16,
		De = Me | Ie,
		Oe = Le | Pe,
		Ae = De | Oe,
		ze = ["x", "y"],
		Ne = ["clientX", "clientY"];
	C.prototype = {
		handler: function () {},
		init: function () {
			this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(E(this.element), this.evWin, this.domHandler)
		},
		destroy: function () {
			this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(E(this.element), this.evWin, this.domHandler)
		}
	};
	var $e = {
			mousedown: Te,
			mousemove: Ee,
			mouseup: Ce
		},
		He = "mousedown",
		je = "mousemove mouseup";
	u(j, C, {
		handler: function (e) {
			var t = $e[e.type];
			t & Te && 0 === e.button && (this.pressed = !0), t & Ee && 1 !== e.which && (t = Ce), this.pressed && this.allow && (t & Ce && (this.pressed = !1), this.callback(this.manager, t, {
				pointers: [e],
				changedPointers: [e],
				pointerType: we,
				srcEvent: e
			}))
		}
	});
	var Fe = {
			pointerdown: Te,
			pointermove: Ee,
			pointerup: Ce,
			pointercancel: Se,
			pointerout: Se
		},
		qe = {
			2: be,
			3: "pen",
			4: we,
			5: "kinect"
		},
		Be = "pointerdown",
		Ve = "pointermove pointerup pointercancel";
	e.MSPointerEvent && (Be = "MSPointerDown", Ve = "MSPointerMove MSPointerUp MSPointerCancel"), u(F, C, {
		handler: function (e) {
			var t = this.store,
				n = !1,
				i = e.type.toLowerCase().replace("ms", ""),
				r = Fe[i],
				a = qe[e.pointerType] || e.pointerType,
				s = a == be,
				o = y(t, e.pointerId, "pointerId");
			r & Te && (0 === e.button || s) ? 0 > o && (t.push(e), o = t.length - 1) : r & (Ce | Se) && (n = !0), 0 > o || (t[o] = e, this.callback(this.manager, r, {
				pointers: t,
				changedPointers: [e],
				pointerType: a,
				srcEvent: e
			}), n && t.splice(o, 1))
		}
	});
	var Re = {
			touchstart: Te,
			touchmove: Ee,
			touchend: Ce,
			touchcancel: Se
		},
		_e = "touchstart",
		We = "touchstart touchmove touchend touchcancel";
	u(q, C, {
		handler: function (e) {
			var t = Re[e.type];
			if (t === Te && (this.started = !0), this.started) {
				var n = B.call(this, e, t);
				t & (Ce | Se) && n[0].length - n[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
					pointers: n[0],
					changedPointers: n[1],
					pointerType: be,
					srcEvent: e
				})
			}
		}
	});
	var Xe = {
			touchstart: Te,
			touchmove: Ee,
			touchend: Ce,
			touchcancel: Se
		},
		Ye = "touchstart touchmove touchend touchcancel";
	u(V, C, {
		handler: function (e) {
			var t = Xe[e.type],
				n = R.call(this, e, t);
			n && this.callback(this.manager, t, {
				pointers: n[0],
				changedPointers: n[1],
				pointerType: be,
				srcEvent: e
			})
		}
	}), u(_, C, {
		handler: function (e, t, n) {
			var i = n.pointerType == be,
				r = n.pointerType == we;
			if (i) this.mouse.allow = !1;
			else if (r && !this.mouse.allow) return;
			t & (Ce | Se) && (this.mouse.allow = !0), this.callback(e, t, n)
		},
		destroy: function () {
			this.touch.destroy(), this.mouse.destroy()
		}
	});
	var Ge = x(ue.style, "touchAction"),
		Ue = Ge !== i,
		Qe = "compute",
		Ke = "auto",
		Je = "manipulation",
		Ze = "none",
		et = "pan-x",
		tt = "pan-y";
	W.prototype = {
		set: function (e) {
			e == Qe && (e = this.compute()), Ue && (this.manager.element.style[Ge] = e), this.actions = e.toLowerCase().trim()
		},
		update: function () {
			this.set(this.manager.options.touchAction)
		},
		compute: function () {
			var e = [];
			return s(this.manager.recognizers, function (t) {
				d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
			}), X(e.join(" "))
		},
		preventDefaults: function (e) {
			if (!Ue) {
				var t = e.srcEvent,
					n = e.offsetDirection;
				if (this.manager.session.prevented) return void t.preventDefault();
				var i = this.actions,
					r = m(i, Ze),
					a = m(i, tt),
					s = m(i, et);
				return r || a && n & De || s && n & Oe ? this.preventSrc(t) : void 0
			}
		},
		preventSrc: function (e) {
			this.manager.session.prevented = !0, e.preventDefault()
		}
	};
	var nt = 1,
		it = 2,
		rt = 4,
		at = 8,
		st = at,
		ot = 16;
	Y.prototype = {
		defaults: {},
		set: function (e) {
			return o(this.options, e), this.manager && this.manager.touchAction.update(), this
		},
		recognizeWith: function (e) {
			if (a(e, "recognizeWith", this)) return this;
			var t = this.simultaneous;
			return e = Q(e, this), t[e.id] || (t[e.id] = e, e.recognizeWith(this)), this
		},
		dropRecognizeWith: function (e) {
			return a(e, "dropRecognizeWith", this) ? this : (e = Q(e, this), delete this.simultaneous[e.id], this)
		},
		requireFailure: function (e) {
			if (a(e, "requireFailure", this)) return this;
			var t = this.requireFail;
			return e = Q(e, this), -1 === y(t, e) && (t.push(e), e.requireFailure(this)), this
		},
		dropRequireFailure: function (e) {
			if (a(e, "dropRequireFailure", this)) return this;
			e = Q(e, this);
			var t = y(this.requireFail, e);
			return t > -1 && this.requireFail.splice(t, 1), this
		},
		hasRequireFailures: function () {
			return this.requireFail.length > 0
		},
		canRecognizeWith: function (e) {
			return !!this.simultaneous[e.id]
		},
		emit: function (e) {
			function t(t) {
				n.manager.emit(n.options.event + (t ? G(i) : ""), e)
			}
			var n = this,
				i = this.state;
			at > i && t(!0), t(), i >= at && t(!0)
		},
		tryEmit: function (e) {
			return this.canEmit() ? this.emit(e) : void(this.state = 32)
		},
		canEmit: function () {
			for (var e = 0; e < this.requireFail.length;) {
				if (!(this.requireFail[e].state & (32 | nt))) return !1;
				e++
			}
			return !0
		},
		recognize: function (e) {
			var t = o({}, e);
			return d(this.options.enable, [this, t]) ? (this.state & (st | ot | 32) && (this.state = nt), this.state = this.process(t), void(this.state & (it | rt | at | ot) && this.tryEmit(t))) : (this.reset(), void(this.state = 32))
		},
		process: function () {},
		getTouchAction: function () {},
		reset: function () {}
	}, u(K, Y, {
		defaults: {
			pointers: 1
		},
		attrTest: function (e) {
			var t = this.options.pointers;
			return 0 === t || e.pointers.length === t
		},
		process: function (e) {
			var t = this.state,
				n = e.eventType,
				i = t & (it | rt),
				r = this.attrTest(e);
			return i && (n & Se || !r) ? t | ot : i || r ? n & Ce ? t | at : t & it ? t | rt : it : 32
		}
	}), u(J, K, {
		defaults: {
			event: "pan",
			threshold: 10,
			pointers: 1,
			direction: Ae
		},
		getTouchAction: function () {
			var e = this.options.direction,
				t = [];
			return e & De && t.push(tt), e & Oe && t.push(et), t
		},
		directionTest: function (e) {
			var t = this.options,
				n = !0,
				i = e.distance,
				r = e.direction,
				a = e.deltaX,
				s = e.deltaY;
			return r & t.direction || (t.direction & De ? (r = 0 === a ? ke : 0 > a ? Me : Ie, n = a != this.pX, i = Math.abs(e.deltaX)) : (r = 0 === s ? ke : 0 > s ? Le : Pe, n = s != this.pY, i = Math.abs(e.deltaY))), e.direction = r, n && i > t.threshold && r & t.direction
		},
		attrTest: function (e) {
			return K.prototype.attrTest.call(this, e) && (this.state & it || !(this.state & it) && this.directionTest(e))
		},
		emit: function (e) {
			this.pX = e.deltaX, this.pY = e.deltaY;
			var t = U(e.direction);
			t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
		}
	}), u(Z, K, {
		defaults: {
			event: "pinch",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function () {
			return [Ze]
		},
		attrTest: function (e) {
			return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & it)
		},
		emit: function (e) {
			if (this._super.emit.call(this, e), 1 !== e.scale) {
				var t = e.scale < 1 ? "in" : "out";
				this.manager.emit(this.options.event + t, e)
			}
		}
	}), u(ee, Y, {
		defaults: {
			event: "press",
			pointers: 1,
			time: 500,
			threshold: 5
		},
		getTouchAction: function () {
			return [Ke]
		},
		process: function (e) {
			var t = this.options,
				n = e.pointers.length === t.pointers,
				i = e.distance < t.threshold,
				a = e.deltaTime > t.time;
			if (this._input = e, !i || !n || e.eventType & (Ce | Se) && !a) this.reset();
			else if (e.eventType & Te) this.reset(), this._timer = r(function () {
				this.state = st, this.tryEmit()
			}, t.time, this);
			else if (e.eventType & Ce) return st;
			return 32
		},
		reset: function () {
			clearTimeout(this._timer)
		},
		emit: function (e) {
			this.state === st && (e && e.eventType & Ce ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = he(), this.manager.emit(this.options.event, this._input)))
		}
	}), u(te, K, {
		defaults: {
			event: "rotate",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function () {
			return [Ze]
		},
		attrTest: function (e) {
			return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & it)
		}
	}), u(ne, K, {
		defaults: {
			event: "swipe",
			threshold: 10,
			velocity: .65,
			direction: De | Oe,
			pointers: 1
		},
		getTouchAction: function () {
			return J.prototype.getTouchAction.call(this)
		},
		attrTest: function (e) {
			var t, n = this.options.direction;
			return n & (De | Oe) ? t = e.velocity : n & De ? t = e.velocityX : n & Oe && (t = e.velocityY), this._super.attrTest.call(this, e) && n & e.direction && e.distance > this.options.threshold && pe(t) > this.options.velocity && e.eventType & Ce
		},
		emit: function (e) {
			var t = U(e.direction);
			t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
		}
	}), u(ie, Y, {
		defaults: {
			event: "tap",
			pointers: 1,
			taps: 1,
			interval: 300,
			time: 250,
			threshold: 2,
			posThreshold: 10
		},
		getTouchAction: function () {
			return [Je]
		},
		process: function (e) {
			var t = this.options,
				n = e.pointers.length === t.pointers,
				i = e.distance < t.threshold,
				a = e.deltaTime < t.time;
			if (this.reset(), e.eventType & Te && 0 === this.count) return this.failTimeout();
			if (i && a && n) {
				if (e.eventType != Ce) return this.failTimeout();
				var s = !this.pTime || e.timeStamp - this.pTime < t.interval,
					o = !this.pCenter || z(this.pCenter, e.center) < t.posThreshold;
				if (this.pTime = e.timeStamp, this.pCenter = e.center, o && s ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = r(function () {
					this.state = st, this.tryEmit()
				}, t.interval, this), it) : st
			}
			return 32
		},
		failTimeout: function () {
			return this._timer = r(function () {
				this.state = 32
			}, this.options.interval, this), 32
		},
		reset: function () {
			clearTimeout(this._timer)
		},
		emit: function () {
			this.state == st && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
		}
	}), re.VERSION = "2.0.4", re.defaults = {
		domEvents: !1,
		touchAction: Qe,
		enable: !0,
		inputTarget: null,
		inputClass: null,
		preset: [
			[te, {
				enable: !1
			}],
			[Z, {
					enable: !1
				},
				["rotate"]
			],
			[ne, {
				direction: De
			}],
			[J, {
					direction: De
				},
				["swipe"]
			],
			[ie],
			[ie, {
					event: "doubletap",
					taps: 2
				},
				["tap"]
			],
			[ee]
		],
		cssProps: {
			userSelect: "none",
			touchSelect: "none",
			touchCallout: "none",
			contentZooming: "none",
			userDrag: "none",
			tapHighlightColor: "rgba(0,0,0,0)"
		}
	};
	ae.prototype = {
		set: function (e) {
			return o(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
		},
		stop: function (e) {
			this.session.stopped = e ? 2 : 1
		},
		recognize: function (e) {
			var t = this.session;
			if (!t.stopped) {
				this.touchAction.preventDefaults(e);
				var n, i = this.recognizers,
					r = t.curRecognizer;
				(!r || r && r.state & st) && (r = t.curRecognizer = null);
				for (var a = 0; a < i.length;) n = i[a], 2 === t.stopped || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(e), !r && n.state & (it | rt | at) && (r = t.curRecognizer = n), a++
			}
		},
		get: function (e) {
			if (e instanceof Y) return e;
			for (var t = this.recognizers, n = 0; n < t.length; n++)
				if (t[n].options.event == e) return t[n];
			return null
		},
		add: function (e) {
			if (a(e, "add", this)) return this;
			var t = this.get(e.options.event);
			return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
		},
		remove: function (e) {
			if (a(e, "remove", this)) return this;
			var t = this.recognizers;
			return e = this.get(e), t.splice(y(t, e), 1), this.touchAction.update(), this
		},
		on: function (e, t) {
			var n = this.handlers;
			return s(g(e), function (e) {
				n[e] = n[e] || [], n[e].push(t)
			}), this
		},
		off: function (e, t) {
			var n = this.handlers;
			return s(g(e), function (e) {
				t ? n[e].splice(y(n[e], t), 1) : delete n[e]
			}), this
		},
		emit: function (e, t) {
			this.options.domEvents && oe(e, t);
			var n = this.handlers[e] && this.handlers[e].slice();
			if (n && n.length) {
				t.type = e, t.preventDefault = function () {
					t.srcEvent.preventDefault()
				};
				for (var i = 0; i < n.length;) n[i](t), i++
			}
		},
		destroy: function () {
			this.element && se(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
		}
	}, o(re, {
		INPUT_START: Te,
		INPUT_MOVE: Ee,
		INPUT_END: Ce,
		INPUT_CANCEL: Se,
		STATE_POSSIBLE: nt,
		STATE_BEGAN: it,
		STATE_CHANGED: rt,
		STATE_ENDED: at,
		STATE_RECOGNIZED: st,
		STATE_CANCELLED: ot,
		STATE_FAILED: 32,
		DIRECTION_NONE: ke,
		DIRECTION_LEFT: Me,
		DIRECTION_RIGHT: Ie,
		DIRECTION_UP: Le,
		DIRECTION_DOWN: Pe,
		DIRECTION_HORIZONTAL: De,
		DIRECTION_VERTICAL: Oe,
		DIRECTION_ALL: Ae,
		Manager: ae,
		Input: C,
		TouchAction: W,
		TouchInput: V,
		MouseInput: j,
		PointerEventInput: F,
		TouchMouseInput: _,
		SingleTouchInput: q,
		Recognizer: Y,
		AttrRecognizer: K,
		Tap: ie,
		Pan: J,
		Swipe: ne,
		Pinch: Z,
		Rotate: te,
		Press: ee,
		on: h,
		off: f,
		each: s,
		merge: l,
		extend: o,
		inherit: u,
		bindFn: c,
		prefixed: x
	}), typeof define == ce && define.amd ? define(function () {
		return re
	}) : "undefined" != typeof module && module.exports ? module.exports = re : e.Hammer = re
}(window, document);
var mediaQueriesHelper = function () {
	function e(e, t) {
		var n, i = e.cssRules ? e.cssRules : e.media,
			r = [],
			a = 0,
			s = i.length;
		for (a; a < s; a++) t(n = i[a]) && r.push(n);
		return r
	}

	function t(t) {
		return e(t, function (e) {
			return e.constructor === CSSMediaRule
		})
	}

	function n(e) {
		var t = window.location,
			n = document.createElement("a");
		return n.href = e, n.hostname === t.hostname && n.protocol === t.protocol
	}

	function i(e) {
		return e.ownerNode.constructor === HTMLStyleElement
	}

	function r(e) {
		return e.href && n(e.href)
	}

	function a() {
		var e, t = document.styleSheets,
			n = t.length,
			a = 0,
			s = [];
		for (a; a < n; a++)(r(e = t[a]) || i(e)) && s.push(e);
		return s
	}

	function s(e) {
		var n, i, r = document.documentElement,
			s = window.innerWidth - r.clientWidth,
			o = {
				adjusted: s > 0,
				fontSize: parseFloat(window.getComputedStyle(r).getPropertyValue("font-size")),
				width: s,
				adjustMediaQuery: function (e) {
					return mqGenie.adjusted ? e.replace(/\d+px/gi, function (e) {
						return parseInt(e, 10) + mqGenie.width + "px"
					}) : e
				}
			},
			l = a(),
			u = l.length,
			c = 0;
		for (c; c < u; c++) {
			i = (n = t(l[c])).length;
			for (var d = 0; d < i; d++) n[d].media.mediaText = n[d].media.mediaText.replace(/m(in|ax)-width:\s*(\d|\.)+(px|em)/gi, function (e) {
				if (e.match("px")) return e.replace(/\d+px/gi, function (e) {
					return parseInt(e, 10) - o.width + "px"
				})
			})
		}
	}
	return {
		init: function (e) {
			s()
		}
	}
}();
window.$clamp = function (e, t) {
		function n(e, t) {
			return u.getComputedStyle || (u.getComputedStyle = function (e, t) {
				return this.el = e, this.getPropertyValue = function (t) {
					var n = /(\-([a-z]){1})/g;
					return "float" == t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function (e, t, n) {
						return n.toUpperCase()
					})), e.currentStyle && e.currentStyle[t] ? e.currentStyle[t] : null
				}, this
			}), u.getComputedStyle(e, null).getPropertyValue(t)
		}

		function i(t) {
			t = t || e.clientHeight;
			var n = r(e);
			return Math.max(Math.floor(t / n), 0)
		}

		function r(e) {
			var t = n(e, "line-height");
			return "normal" == t && (t = 1.2 * parseInt(n(e, "font-size"))), parseInt(t)
		}

		function a(t) {
			return t.lastChild.children && 0 < t.lastChild.children.length ? a(Array.prototype.slice.call(t.children).pop()) : t.lastChild && t.lastChild.nodeValue && "" != t.lastChild.nodeValue && t.lastChild.nodeValue != c.truncationChar ? t.lastChild : (t.lastChild.parentNode.removeChild(t.lastChild), a(e))
		}

		function s(t, n) {
			if (n) {
				var i = t.nodeValue.replace(c.truncationChar, "");
				if (m || (b = 0 < y.length ? y.shift() : "", m = i.split(b)), 1 < m.length ? (g = m.pop(), o(t, m.join(b))) : m = null, l && (t.nodeValue = t.nodeValue.replace(c.truncationChar, ""), e.innerHTML = t.nodeValue + " " + l.innerHTML + c.truncationChar), m) {
					if (e.clientHeight <= n) {
						if (!(0 <= y.length && "" != b)) return e.innerHTML;
						o(t, m.join(b) + b + g), m = null
					}
				} else "" == b && (o(t, ""), t = a(e), y = c.splitOnChars.slice(0), b = y[0], g = m = null);
				if (!c.animate) return s(t, n);
				setTimeout(function () {
					s(t, n)
				}, !0 === c.animate ? 10 : c.animate)
			}
		}

		function o(e, t) {
			e.nodeValue = t + c.truncationChar
		}
		t = t || {};
		var l, u = window,
			c = {
				clamp: t.clamp || 2,
				useNativeClamp: void 0 === t.useNativeClamp || t.useNativeClamp,
				splitOnChars: t.splitOnChars || [".", "-", "–", "—", " "],
				animate: t.animate || !1,
				truncationChar: t.truncationChar || "…",
				truncationHTML: t.truncationHTML
			},
			d = e.style,
			p = e.innerHTML,
			h = void 0 !== e.style.webkitLineClamp,
			f = c.clamp,
			v = f.indexOf && (-1 < f.indexOf("px") || -1 < f.indexOf("em"));
		c.truncationHTML && (l = document.createElement("span"), l.innerHTML = c.truncationHTML);
		var m, g, y = c.splitOnChars.slice(0),
			b = y[0];
		"auto" == f ? f = i() : v && (f = i(parseInt(f)));
		var w;
		return h && c.useNativeClamp ? (d.overflow = "hidden", d.textOverflow = "ellipsis", d.webkitBoxOrient = "vertical", d.display = "-webkit-box", d.webkitLineClamp = f, v && (d.height = c.clamp + "px")) : (d = function (t) {
			return r(e) * t
		}(f)) <= e.clientHeight && (w = s(a(e), d)), {
			original: p,
			clamped: w
		}
	},
	function (e) {
		window.BNS = new function () {
			var e = {
				prevScroll: 0,
				prevPosition: "",
				prevOverflow: "",
				prevClasses: "",
				on: !1,
				classes: "start-overlay-transition"
			};
			return {
				set: function (t) {
					e.classes = t.classes
				},
				isOn: function () {
					return e.on
				},
				on: function (t) {
					void 0 === t && (t = ""), document.body.className = document.body.className + " " + e.classes + " " + t, bodyScrollLock.disableBodyScroll(document.querySelector("#nav"), {
						reserveScrollBarGap: !0
					})
				},
				off: function () {
					document.body.className = e.prevClasses, bodyScrollLock.enableBodyScroll(document.querySelector("#nav"), {
						reserveScrollBarGap: !0
					})
				}
			}
		}
	}();
var _extends = Object.assign || function (e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
		}
		return e
	},
	_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
		return typeof e
	} : function (e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	};
! function (e, t) {
	"object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t()
}(this, function () {
	"use strict";

	function e(e, t, n) {
		return !(r(e, t, n) || o(e, t, n) || s(e, t, n) || l(e, t, n))
	}

	function t(e, t, n) {
		!n && w(e) || (k(t.callback_enter, e), A.indexOf(e.tagName) > -1 && (O(e, t), v(e, t.class_loading)), S(e, t), b(e), k(t.callback_set, e))
	}
	var n = function () {
			return {
				elements_selector: "img",
				container: window,
				threshold: 300,
				throttle: 150,
				data_src: "src",
				data_srcset: "srcset",
				data_sizes: "sizes",
				class_loading: "loading",
				class_loaded: "loaded",
				class_error: "error",
				class_initial: "initial",
				skip_invisible: !0,
				callback_load: null,
				callback_error: null,
				callback_set: null,
				callback_processed: null,
				callback_enter: null,
				to_webp: !1
			}
		},
		i = function (e) {
			return e.getBoundingClientRect().top + window.pageYOffset - e.ownerDocument.documentElement.clientTop
		},
		r = function (e, t, n) {
			return (t === window ? window.innerHeight + window.pageYOffset : i(t) + t.offsetHeight) <= i(e) - n
		},
		a = function (e) {
			return e.getBoundingClientRect().left + window.pageXOffset - e.ownerDocument.documentElement.clientLeft
		},
		s = function (e, t, n) {
			var i = window.innerWidth;
			return (t === window ? i + window.pageXOffset : a(t) + i) <= a(e) - n
		},
		o = function (e, t, n) {
			return (t === window ? window.pageYOffset : i(t)) >= i(e) + n + e.offsetHeight
		},
		l = function (e, t, n) {
			return (t === window ? window.pageXOffset : a(t)) >= a(e) + n + e.offsetWidth
		},
		u = function (e, t) {
			var n, i = new e(t);
			try {
				n = new CustomEvent("LazyLoad::Initialized", {
					detail: {
						instance: i
					}
				})
			} catch (e) {
				(n = document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized", !1, !1, {
					instance: i
				})
			}
			window.dispatchEvent(n)
		},
		c = function (e, t) {
			return t ? e.replace(/\.(jpe?g|png)/gi, ".webp") : e
		},
		d = "undefined" != typeof window,
		p = d && !("onscroll" in window) || /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),
		h = d && "classList" in document.createElement("p"),
		f = d && function () {
			var e = document.createElement("canvas");
			return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
		}(),
		v = function (e, t) {
			h ? e.classList.add(t) : e.className += (e.className ? " " : "") + t
		},
		m = function (e, t) {
			h ? e.classList.remove(t) : e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
		},
		g = function (e, t) {
			return e.getAttribute("data-" + t)
		},
		y = function (e, t, n) {
			var i = "data-" + t;
			null !== n ? e.setAttribute(i, n) : e.removeAttribute(i)
		},
		b = function (e) {
			return y(e, "was-processed", "true")
		},
		w = function (e) {
			return "true" === g(e, "was-processed")
		},
		x = function (e, t, n, i) {
			for (var r, a = 0; r = e.children[a]; a += 1)
				if ("SOURCE" === r.tagName) {
					var s = g(r, n);
					T(r, t, s, i)
				}
		},
		T = function (e, t, n, i) {
			n && e.setAttribute(t, c(n, i))
		},
		E = function (e, t) {
			var n = f && t.to_webp,
				i = g(e, t.data_src);
			if (i) {
				var r = c(i, n);
				e.style.backgroundImage = 'url("' + r + '")'
			}
		},
		C = {
			IMG: function (e, t) {
				var n = f && t.to_webp,
					i = t.data_srcset,
					r = e.parentNode;
				r && "PICTURE" === r.tagName && x(r, "srcset", i, n);
				var a = g(e, t.data_sizes);
				T(e, "sizes", a);
				var s = g(e, i);
				T(e, "srcset", s, n);
				var o = g(e, t.data_src);
				T(e, "src", o, n)
			},
			IFRAME: function (e, t) {
				var n = g(e, t.data_src);
				T(e, "src", n)
			},
			VIDEO: function (e, t) {
				var n = t.data_src,
					i = g(e, n);
				x(e, "src", n), T(e, "src", i), e.load()
			}
		},
		S = function (e, t) {
			var n = e.tagName,
				i = C[n];
			i ? i(e, t) : E(e, t)
		},
		k = function (e, t) {
			e && e(t)
		},
		M = function (e, t, n) {
			e.addEventListener(t, n)
		},
		I = function (e, t, n) {
			e.removeEventListener(t, n)
		},
		L = function (e, t, n) {
			M(e, "load", t), M(e, "loadeddata", t), M(e, "error", n)
		},
		P = function (e, t, n) {
			I(e, "load", t), I(e, "loadeddata", t), I(e, "error", n)
		},
		D = function (e, t, n) {
			var i = t ? n.class_loaded : n.class_error,
				r = t ? n.callback_load : n.callback_error,
				a = e.target;
			m(a, n.class_loading), v(a, i), k(r, a)
		},
		O = function (e, t) {
			var n = function n(r) {
					D(r, !0, t), P(e, n, i)
				},
				i = function i(r) {
					D(r, !1, t), P(e, n, i)
				};
			L(e, n, i)
		},
		A = ["IMG", "IFRAME", "VIDEO"],
		z = function (e, t) {
			for (; t.length;) e.splice(t.pop(), 1)
		},
		N = function (e) {
			this._settings = _extends({}, n(), e), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._boundHandleScroll = this.handleScroll.bind(this), this._isFirstLoop = !0, window.addEventListener("resize", this._boundHandleScroll), this.update()
		};
	return N.prototype = {
		_loopThroughElements: function (t) {
			var n = this._settings,
				i = this._elements,
				r = i ? i.length : 0,
				a = void 0,
				s = [],
				o = this._isFirstLoop;
			if (o && (this._isFirstLoop = !1), 0 !== r) {
				for (a = 0; a < r; a++) {
					var l = i[a];
					n.skip_invisible && null === l.offsetParent || (p || t || e(l, n.container, n.threshold)) && (o && v(l, n.class_initial), this.load(l), s.push(a))
				}
				z(i, s)
			} else this._stopScrollHandler()
		},
		_purgeElements: function () {
			var e = this._elements,
				t = e.length,
				n = void 0,
				i = [];
			for (n = 0; n < t; n++) w(e[n]) && i.push(n);
			z(e, i)
		},
		_startScrollHandler: function () {
			this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll))
		},
		_stopScrollHandler: function () {
			this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll))
		},
		handleScroll: function () {
			var e = this._settings.throttle;
			if (0 !== e) {
				var t = Date.now(),
					n = e - (t - this._previousLoopTime);
				n <= 0 || n > e ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = t, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function () {
					this._previousLoopTime = Date.now(), this._loopTimeout = null, this._loopThroughElements()
				}.bind(this), n))
			} else this._loopThroughElements()
		},
		loadAll: function () {
			this._loopThroughElements(!0)
		},
		update: function () {
			this._elements = Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
		},
		destroy: function () {
			window.removeEventListener("resize", this._boundHandleScroll), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null
		},
		load: function (e, n) {
			t(e, this._settings, n)
		}
	}, d && function (e, t) {
		if (t)
			if (t.length)
				for (var n, i = 0; n = t[i]; i += 1) u(e, n);
			else u(e, t)
	}(N, window.lazyLoadOptions), N
}),
function (e, t) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, e.Swiper = t())
}(this, function () {
	"use strict";

	function e(e, t) {
		var n = [],
			i = 0;
		if (e && !t && e instanceof c) return e;
		if (e)
			if ("string" == typeof e) {
				var r, a, s = e.trim();
				if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
					var o = "div";
					for (0 === s.indexOf("<li") && (o = "ul"), 0 === s.indexOf("<tr") && (o = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (o = "tr"), 0 === s.indexOf("<tbody") && (o = "table"), 0 === s.indexOf("<option") && (o = "select"), (a = l.createElement(o)).innerHTML = s, i = 0; i < a.childNodes.length; i += 1) n.push(a.childNodes[i])
				} else
					for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || l).querySelectorAll(e.trim()) : [l.getElementById(e.trim().split("#")[1])], i = 0; i < r.length; i += 1) r[i] && n.push(r[i])
			} else if (e.nodeType || e === u || e === l) n.push(e);
		else if (e.length > 0 && e[0].nodeType)
			for (i = 0; i < e.length; i += 1) n.push(e[i]);
		return new c(n)
	}

	function t(e) {
		for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
		return t
	}

	function n(t) {
		var n = this,
			i = n.touchEventsData,
			r = n.params,
			a = n.touches;
		if (!n.animating || !r.preventInteractionOnTransition) {
			var s = t;
			if (s.originalEvent && (s = s.originalEvent), i.isTouchEvent = "touchstart" === s.type, (i.isTouchEvent || !("which" in s) || 3 !== s.which) && !(!i.isTouchEvent && "button" in s && s.button > 0 || i.isTouched && i.isMoved))
				if (r.noSwiping && e(s.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0]) n.allowClick = !0;
				else if (!r.swipeHandler || e(s).closest(r.swipeHandler)[0]) {
				a.currentX = "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX, a.currentY = "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY;
				var o = a.currentX,
					c = a.currentY,
					d = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
					h = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
				if (!d || !(o <= h || o >= u.screen.width - h)) {
					if (p.extend(i, {
							isTouched: !0,
							isMoved: !1,
							allowTouchCallbacks: !0,
							isScrolling: void 0,
							startMoving: void 0
						}), a.startX = o, a.startY = c, i.touchStartTime = p.now(), n.allowClick = !0, n.updateSize(), n.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== s.type) {
						var f = !0;
						e(s.target).is(i.formElements) && (f = !1), l.activeElement && e(l.activeElement).is(i.formElements) && l.activeElement !== s.target && l.activeElement.blur();
						var v = f && n.allowTouchMove && r.touchStartPreventDefault;
						(r.touchStartForcePreventDefault || v) && s.preventDefault()
					}
					n.emit("touchStart", s)
				}
			}
		}
	}

	function i(t) {
		var n = this,
			i = n.touchEventsData,
			r = n.params,
			a = n.touches,
			s = n.rtlTranslate,
			o = t;
		if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
			if (!i.isTouchEvent || "mousemove" !== o.type) {
				var u = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
					c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
				if (o.preventedByNestedSwiper) return a.startX = u, void(a.startY = c);
				if (!n.allowTouchMove) return n.allowClick = !1, void(i.isTouched && (p.extend(a, {
					startX: u,
					startY: c,
					currentX: u,
					currentY: c
				}), i.touchStartTime = p.now()));
				if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
					if (n.isVertical()) {
						if (c < a.startY && n.translate <= n.maxTranslate() || c > a.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
					} else if (u < a.startX && n.translate <= n.maxTranslate() || u > a.startX && n.translate >= n.minTranslate()) return;
				if (i.isTouchEvent && l.activeElement && o.target === l.activeElement && e(o.target).is(i.formElements)) return i.isMoved = !0, void(n.allowClick = !1);
				if (i.allowTouchCallbacks && n.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
					a.currentX = u, a.currentY = c;
					var d = a.currentX - a.startX,
						h = a.currentY - a.startY;
					if (!(n.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(h, 2)) < n.params.threshold)) {
						if (void 0 === i.isScrolling) {
							var f;
							n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : d * d + h * h >= 25 && (f = 180 * Math.atan2(Math.abs(h), Math.abs(d)) / Math.PI, i.isScrolling = n.isHorizontal() ? f > r.touchAngle : 90 - f > r.touchAngle)
						}
						if (i.isScrolling && n.emit("touchMoveOpposite", o), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
						else if (i.startMoving) {
							n.allowClick = !1, o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation(), i.isMoved || (r.loop && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", o)), n.emit("sliderMove", o), i.isMoved = !0;
							var v = n.isHorizontal() ? d : h;
							a.diff = v, v *= r.touchRatio, s && (v = -v), n.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
							var m = !0,
								g = r.resistanceRatio;
							if (r.touchReleaseOnEdges && (g = 0), v > 0 && i.currentTranslate > n.minTranslate() ? (m = !1, r.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + v, g))) : v < 0 && i.currentTranslate < n.maxTranslate() && (m = !1, r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - v, g))), m && (o.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.threshold > 0) {
								if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
								if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
							}
							r.followFinger && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), r.freeMode && (0 === i.velocities.length && i.velocities.push({
								position: a[n.isHorizontal() ? "startX" : "startY"],
								time: i.touchStartTime
							}), i.velocities.push({
								position: a[n.isHorizontal() ? "currentX" : "currentY"],
								time: p.now()
							})), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
						}
					}
				}
			}
		} else i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", o)
	}

	function r(e) {
		var t = this,
			n = t.touchEventsData,
			i = t.params,
			r = t.touches,
			a = t.rtlTranslate,
			s = t.$wrapperEl,
			o = t.slidesGrid,
			l = t.snapGrid,
			u = e;
		if (u.originalEvent && (u = u.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", u), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
		i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
		var c = p.now(),
			d = c - n.touchStartTime;
		if (t.allowClick && (t.updateClickedSlide(u), t.emit("tap", u), d < 300 && c - n.lastClickTime > 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), n.clickTimeout = p.nextTick(function () {
				t && !t.destroyed && t.emit("click", u)
			}, 300)), d < 300 && c - n.lastClickTime < 300 && (n.clickTimeout && clearTimeout(n.clickTimeout), t.emit("doubleTap", u))), n.lastClickTime = p.now(), p.nextTick(function () {
				t.destroyed || (t.allowClick = !0)
			}), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
		n.isTouched = !1, n.isMoved = !1, n.startMoving = !1;
		var h;
		if (h = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, i.freeMode) {
			if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
			if (h > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
			if (i.freeModeMomentum) {
				if (n.velocities.length > 1) {
					var f = n.velocities.pop(),
						v = n.velocities.pop(),
						m = f.position - v.position,
						g = f.time - v.time;
					t.velocity = m / g, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || p.now() - f.time > 300) && (t.velocity = 0)
				} else t.velocity = 0;
				t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
				var y = 1e3 * i.freeModeMomentumRatio,
					b = t.velocity * y,
					w = t.translate + b;
				a && (w = -w);
				var x, T, E = !1,
					C = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
				if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -C && (w = t.maxTranslate() - C), x = t.maxTranslate(), E = !0, n.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (T = !0);
				else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > C && (w = t.minTranslate() + C), x = t.minTranslate(), E = !0, n.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (T = !0);
				else if (i.freeModeSticky) {
					for (var S, k = 0; k < l.length; k += 1)
						if (l[k] > -w) {
							S = k;
							break
						}
					w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
				}
				if (T && t.once("transitionEnd", function () {
						t.loopFix()
					}), 0 !== t.velocity) y = a ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
				else if (i.freeModeSticky) return void t.slideToClosest();
				i.freeModeMomentumBounce && E ? (t.updateProgress(x), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function () {
					t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(x), s.transitionEnd(function () {
						t && !t.destroyed && t.transitionEnd()
					}))
				})) : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function () {
					t && !t.destroyed && t.transitionEnd()
				}))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
			} else if (i.freeModeSticky) return void t.slideToClosest();
			(!i.freeModeMomentum || d >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
		} else {
			for (var M = 0, I = t.slidesSizesGrid[0], L = 0; L < o.length; L += i.slidesPerGroup) void 0 !== o[L + i.slidesPerGroup] ? h >= o[L] && h < o[L + i.slidesPerGroup] && (M = L, I = o[L + i.slidesPerGroup] - o[L]) : h >= o[L] && (M = L, I = o[o.length - 1] - o[o.length - 2]);
			var P = (h - o[M]) / I;
			if (d > i.longSwipesMs) {
				if (!i.longSwipes) return void t.slideTo(t.activeIndex);
				"next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
			} else {
				if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
				"next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
			}
		}
	}

	function a() {
		var e = this,
			t = e.params,
			n = e.el;
		if (!n || 0 !== n.offsetWidth) {
			t.breakpoints && e.setBreakpoint();
			var i = e.allowSlideNext,
				r = e.allowSlidePrev,
				a = e.snapGrid;
			if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
				var s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
				e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
			} else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
			e.allowSlidePrev = r, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
		}
	}

	function s(e) {
		var t = this;
		t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
	}

	function o() {
		var e = "onwheel" in l;
		if (!e) {
			var t = l.createElement("div");
			t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
		}
		return !e && l.implementation && l.implementation.hasFeature && !0 !== l.implementation.hasFeature("", "") && (e = l.implementation.hasFeature("Events.wheel", "3.0")), e
	}
	var l = "undefined" == typeof document ? {
			body: {},
			addEventListener: function () {},
			removeEventListener: function () {},
			activeElement: {
				blur: function () {},
				nodeName: ""
			},
			querySelector: function () {
				return null
			},
			querySelectorAll: function () {
				return []
			},
			getElementById: function () {
				return null
			},
			createEvent: function () {
				return {
					initEvent: function () {}
				}
			},
			createElement: function () {
				return {
					children: [],
					childNodes: [],
					style: {},
					setAttribute: function () {},
					getElementsByTagName: function () {
						return []
					}
				}
			},
			location: {
				hash: ""
			}
		} : document,
		u = "undefined" == typeof window ? {
			document: l,
			navigator: {
				userAgent: ""
			},
			location: {},
			history: {},
			CustomEvent: function () {
				return this
			},
			addEventListener: function () {},
			removeEventListener: function () {},
			getComputedStyle: function () {
				return {
					getPropertyValue: function () {
						return ""
					}
				}
			},
			Image: function () {},
			Date: function () {},
			screen: {},
			setTimeout: function () {},
			clearTimeout: function () {}
		} : window,
		c = function (e) {
			for (var t = this, n = 0; n < e.length; n += 1) t[n] = e[n];
			return t.length = e.length, this
		};
	e.fn = c.prototype, e.Class = c, e.Dom7 = c;
	var d = {
		addClass: function (e) {
			if (void 0 === e) return this;
			for (var t = e.split(" "), n = 0; n < t.length; n += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[n]);
			return this
		},
		removeClass: function (e) {
			for (var t = e.split(" "), n = 0; n < t.length; n += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[n]);
			return this
		},
		hasClass: function (e) {
			return !!this[0] && this[0].classList.contains(e)
		},
		toggleClass: function (e) {
			for (var t = e.split(" "), n = 0; n < t.length; n += 1)
				for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[n]);
			return this
		},
		attr: function (e, t) {
			var n = arguments; {
				if (1 !== arguments.length || "string" != typeof e) {
					for (var i = 0; i < this.length; i += 1)
						if (2 === n.length) this[i].setAttribute(e, t);
						else
							for (var r in e) this[i][r] = e[r], this[i].setAttribute(r, e[r]);
					return this
				}
				if (this[0]) return this[0].getAttribute(e)
			}
		},
		removeAttr: function (e) {
			for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
			return this
		},
		data: function (e, t) {
			var n; {
				if (void 0 !== t) {
					for (var i = 0; i < this.length; i += 1)(n = this[i]).dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[e] = t;
					return this
				}
				if (n = this[0]) {
					if (n.dom7ElementDataStorage && e in n.dom7ElementDataStorage) return n.dom7ElementDataStorage[e];
					var r = n.getAttribute("data-" + e);
					if (r) return r;
					return
				}
			}
		},
		transform: function (e) {
			for (var t = 0; t < this.length; t += 1) {
				var n = this[t].style;
				n.webkitTransform = e, n.transform = e
			}
			return this
		},
		transition: function (e) {
			"string" != typeof e && (e += "ms");
			for (var t = 0; t < this.length; t += 1) {
				var n = this[t].style;
				n.webkitTransitionDuration = e, n.transitionDuration = e
			}
			return this
		},
		on: function () {
			function t(t) {
				var n = t.target;
				if (n) {
					var i = t.target.dom7EventData || [];
					if (i.indexOf(t) < 0 && i.unshift(t), e(n).is(o)) l.apply(n, i);
					else
						for (var r = e(n).parents(), a = 0; a < r.length; a += 1) e(r[a]).is(o) && l.apply(r[a], i)
				}
			}

			function n(e) {
				var t = e && e.target ? e.target.dom7EventData || [] : [];
				t.indexOf(e) < 0 && t.unshift(e), l.apply(this, t)
			}
			for (var i, r = [], a = arguments.length; a--;) r[a] = arguments[a];
			var s = r[0],
				o = r[1],
				l = r[2],
				u = r[3];
			"function" == typeof r[1] && (s = (i = r)[0], l = i[1], u = i[2], o = void 0), u || (u = !1);
			for (var c, d = s.split(" "), p = 0; p < this.length; p += 1) {
				var h = this[p];
				if (o)
					for (c = 0; c < d.length; c += 1) {
						var f = d[c];
						h.dom7LiveListeners || (h.dom7LiveListeners = {}), h.dom7LiveListeners[f] || (h.dom7LiveListeners[f] = []), h.dom7LiveListeners[f].push({
							listener: l,
							proxyListener: t
						}), h.addEventListener(f, t, u)
					} else
						for (c = 0; c < d.length; c += 1) {
							var v = d[c];
							h.dom7Listeners || (h.dom7Listeners = {}), h.dom7Listeners[v] || (h.dom7Listeners[v] = []), h.dom7Listeners[v].push({
								listener: l,
								proxyListener: n
							}), h.addEventListener(v, n, u)
						}
			}
			return this
		},
		off: function () {
			for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
			var i = t[0],
				r = t[1],
				a = t[2],
				s = t[3];
			"function" == typeof t[1] && (i = (e = t)[0], a = e[1], s = e[2], r = void 0), s || (s = !1);
			for (var o = i.split(" "), l = 0; l < o.length; l += 1)
				for (var u = o[l], c = 0; c < this.length; c += 1) {
					var d = this[c],
						p = void 0;
					if (!r && d.dom7Listeners ? p = d.dom7Listeners[u] : r && d.dom7LiveListeners && (p = d.dom7LiveListeners[u]), p && p.length)
						for (var h = p.length - 1; h >= 0; h -= 1) {
							var f = p[h];
							a && f.listener === a ? (d.removeEventListener(u, f.proxyListener, s), p.splice(h, 1)) : a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a ? (d.removeEventListener(u, f.proxyListener, s), p.splice(h, 1)) : a || (d.removeEventListener(u, f.proxyListener, s), p.splice(h, 1))
						}
				}
			return this
		},
		trigger: function () {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			for (var n = e[0].split(" "), i = e[1], r = 0; r < n.length; r += 1)
				for (var a = n[r], s = 0; s < this.length; s += 1) {
					var o = this[s],
						c = void 0;
					try {
						c = new u.CustomEvent(a, {
							detail: i,
							bubbles: !0,
							cancelable: !0
						})
					} catch (e) {
						(c = l.createEvent("Event")).initEvent(a, !0, !0), c.detail = i
					}
					o.dom7EventData = e.filter(function (e, t) {
						return t > 0
					}), o.dispatchEvent(c), o.dom7EventData = [], delete o.dom7EventData
				}
			return this
		},
		transitionEnd: function (e) {
			function t(a) {
				if (a.target === this)
					for (e.call(this, a), n = 0; n < i.length; n += 1) r.off(i[n], t)
			}
			var n, i = ["webkitTransitionEnd", "transitionend"],
				r = this;
			if (e)
				for (n = 0; n < i.length; n += 1) r.on(i[n], t);
			return this
		},
		outerWidth: function (e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
				}
				return this[0].offsetWidth
			}
			return null
		},
		outerHeight: function (e) {
			if (this.length > 0) {
				if (e) {
					var t = this.styles();
					return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
				}
				return this[0].offsetHeight
			}
			return null
		},
		offset: function () {
			if (this.length > 0) {
				var e = this[0],
					t = e.getBoundingClientRect(),
					n = l.body,
					i = e.clientTop || n.clientTop || 0,
					r = e.clientLeft || n.clientLeft || 0,
					a = e === u ? u.scrollY : e.scrollTop,
					s = e === u ? u.scrollX : e.scrollLeft;
				return {
					top: t.top + a - i,
					left: t.left + s - r
				}
			}
			return null
		},
		css: function (e, t) {
			var n;
			if (1 === arguments.length) {
				if ("string" != typeof e) {
					for (n = 0; n < this.length; n += 1)
						for (var i in e) this[n].style[i] = e[i];
					return this
				}
				if (this[0]) return u.getComputedStyle(this[0], null).getPropertyValue(e)
			}
			if (2 === arguments.length && "string" == typeof e) {
				for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
				return this
			}
			return this
		},
		each: function (e) {
			if (!e) return this;
			for (var t = 0; t < this.length; t += 1)
				if (!1 === e.call(this[t], t, this[t])) return this;
			return this
		},
		html: function (e) {
			if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
			for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
			return this
		},
		text: function (e) {
			if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
			for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
			return this
		},
		is: function (t) {
			var n, i, r = this[0];
			if (!r || void 0 === t) return !1;
			if ("string" == typeof t) {
				if (r.matches) return r.matches(t);
				if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
				if (r.msMatchesSelector) return r.msMatchesSelector(t);
				for (n = e(t), i = 0; i < n.length; i += 1)
					if (n[i] === r) return !0;
				return !1
			}
			if (t === l) return r === l;
			if (t === u) return r === u;
			if (t.nodeType || t instanceof c) {
				for (n = t.nodeType ? [t] : t, i = 0; i < n.length; i += 1)
					if (n[i] === r) return !0;
				return !1
			}
			return !1
		},
		index: function () {
			var e, t = this[0];
			if (t) {
				for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
				return e
			}
		},
		eq: function (e) {
			if (void 0 === e) return this;
			var t, n = this.length;
			return e > n - 1 ? new c([]) : e < 0 ? (t = n + e, new c(t < 0 ? [] : [this[t]])) : new c([this[e]])
		},
		append: function () {
			for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
			for (var n, i = 0; i < e.length; i += 1) {
				n = e[i];
				for (var r = 0; r < this.length; r += 1)
					if ("string" == typeof n) {
						var a = l.createElement("div");
						for (a.innerHTML = n; a.firstChild;) this[r].appendChild(a.firstChild)
					} else if (n instanceof c)
					for (var s = 0; s < n.length; s += 1) this[r].appendChild(n[s]);
				else this[r].appendChild(n)
			}
			return this
		},
		prepend: function (e) {
			var t, n;
			for (t = 0; t < this.length; t += 1)
				if ("string" == typeof e) {
					var i = l.createElement("div");
					for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(i.childNodes[n], this[t].childNodes[0])
				} else if (e instanceof c)
				for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]);
			else this[t].insertBefore(e, this[t].childNodes[0]);
			return this
		},
		next: function (t) {
			return new c(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
		},
		nextAll: function (t) {
			var n = [],
				i = this[0];
			if (!i) return new c([]);
			for (; i.nextElementSibling;) {
				var r = i.nextElementSibling;
				t ? e(r).is(t) && n.push(r) : n.push(r), i = r
			}
			return new c(n)
		},
		prev: function (t) {
			if (this.length > 0) {
				var n = this[0];
				return new c(t ? n.previousElementSibling && e(n.previousElementSibling).is(t) ? [n.previousElementSibling] : [] : n.previousElementSibling ? [n.previousElementSibling] : [])
			}
			return new c([])
		},
		prevAll: function (t) {
			var n = [],
				i = this[0];
			if (!i) return new c([]);
			for (; i.previousElementSibling;) {
				var r = i.previousElementSibling;
				t ? e(r).is(t) && n.push(r) : n.push(r), i = r
			}
			return new c(n)
		},
		parent: function (n) {
			for (var i = [], r = 0; r < this.length; r += 1) null !== this[r].parentNode && (n ? e(this[r].parentNode).is(n) && i.push(this[r].parentNode) : i.push(this[r].parentNode));
			return e(t(i))
		},
		parents: function (n) {
			for (var i = [], r = 0; r < this.length; r += 1)
				for (var a = this[r].parentNode; a;) n ? e(a).is(n) && i.push(a) : i.push(a), a = a.parentNode;
			return e(t(i))
		},
		closest: function (e) {
			var t = this;
			return void 0 === e ? new c([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
		},
		find: function (e) {
			for (var t = [], n = 0; n < this.length; n += 1)
				for (var i = this[n].querySelectorAll(e), r = 0; r < i.length; r += 1) t.push(i[r]);
			return new c(t)
		},
		children: function (n) {
			for (var i = [], r = 0; r < this.length; r += 1)
				for (var a = this[r].childNodes, s = 0; s < a.length; s += 1) n ? 1 === a[s].nodeType && e(a[s]).is(n) && i.push(a[s]) : 1 === a[s].nodeType && i.push(a[s]);
			return new c(t(i))
		},
		remove: function () {
			for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
			return this
		},
		add: function () {
			for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
			var i, r, a = this;
			for (i = 0; i < t.length; i += 1) {
				var s = e(t[i]);
				for (r = 0; r < s.length; r += 1) a[a.length] = s[r], a.length += 1
			}
			return a
		},
		styles: function () {
			return this[0] ? u.getComputedStyle(this[0], null) : {}
		}
	};
	Object.keys(d).forEach(function (t) {
		e.fn[t] = d[t]
	});
	var p = {
			deleteProps: function (e) {
				var t = e;
				Object.keys(t).forEach(function (e) {
					try {
						t[e] = null
					} catch (e) {}
					try {
						delete t[e]
					} catch (e) {}
				})
			},
			nextTick: function (e, t) {
				return void 0 === t && (t = 0), setTimeout(e, t)
			},
			now: function () {
				return Date.now()
			},
			getTranslate: function (e, t) {
				void 0 === t && (t = "x");
				var n, i, r, a = u.getComputedStyle(e, null);
				return u.WebKitCSSMatrix ? ((i = a.transform || a.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
					return e.replace(",", ".")
				}).join(", ")), r = new u.WebKitCSSMatrix("none" === i ? "" : i)) : n = (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = u.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = u.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
			},
			parseUrlQuery: function (e) {
				var t, n, i, r, a = {},
					s = e || u.location.href;
				if ("string" == typeof s && s.length)
					for (r = (n = (s = s.indexOf("?") > -1 ? s.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
							return "" !== e
						})).length, t = 0; t < r; t += 1) i = n[t].replace(/#\S+/g, "").split("="), a[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
				return a
			},
			isObject: function (e) {
				return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
			},
			extend: function () {
				for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
				for (var n = Object(e[0]), i = 1; i < e.length; i += 1) {
					var r = e[i];
					if (void 0 !== r && null !== r)
						for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
							var l = a[s],
								u = Object.getOwnPropertyDescriptor(r, l);
							void 0 !== u && u.enumerable && (p.isObject(n[l]) && p.isObject(r[l]) ? p.extend(n[l], r[l]) : !p.isObject(n[l]) && p.isObject(r[l]) ? (n[l] = {}, p.extend(n[l], r[l])) : n[l] = r[l])
						}
				}
				return n
			}
		},
		h = function () {
			var e = l.createElement("div");
			return {
				touch: u.Modernizr && !0 === u.Modernizr.touch || !!(u.navigator.maxTouchPoints > 0 || "ontouchstart" in u || u.DocumentTouch && l instanceof u.DocumentTouch),
				pointerEvents: !!(u.navigator.pointerEnabled || u.PointerEvent || "maxTouchPoints" in u.navigator && u.navigator.maxTouchPoints > 0),
				prefixedPointerEvents: !!u.navigator.msPointerEnabled,
				transition: function () {
					var t = e.style;
					return "transition" in t || "webkitTransition" in t || "MozTransition" in t
				}(),
				transforms3d: u.Modernizr && !0 === u.Modernizr.csstransforms3d || function () {
					var t = e.style;
					return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
				}(),
				flexbox: function () {
					for (var t = e.style, n = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < n.length; i += 1)
						if (n[i] in t) return !0;
					return !1
				}(),
				observer: "MutationObserver" in u || "WebkitMutationObserver" in u,
				passiveListener: function () {
					var e = !1;
					try {
						var t = Object.defineProperty({}, "passive", {
							get: function () {
								e = !0
							}
						});
						u.addEventListener("testPassiveListener", null, t)
					} catch (e) {}
					return e
				}(),
				gestures: "ongesturestart" in u
			}
		}(),
		f = function () {
			return {
				isIE: !!u.navigator.userAgent.match(/Trident/g) || !!u.navigator.userAgent.match(/MSIE/g),
				isEdge: !!u.navigator.userAgent.match(/Edge/g),
				isSafari: function () {
					var e = u.navigator.userAgent.toLowerCase();
					return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
				}(),
				isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(u.navigator.userAgent)
			}
		}(),
		v = function (e) {
			void 0 === e && (e = {});
			var t = this;
			t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
				t.on(e, t.params.on[e])
			})
		},
		m = {
			components: {
				configurable: !0
			}
		};
	v.prototype.on = function (e, t, n) {
		var i = this;
		if ("function" != typeof t) return i;
		var r = n ? "unshift" : "push";
		return e.split(" ").forEach(function (e) {
			i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
		}), i
	}, v.prototype.once = function (e, t, n) {
		function i() {
			for (var n = [], a = arguments.length; a--;) n[a] = arguments[a];
			t.apply(r, n), r.off(e, i), i.f7proxy && delete i.f7proxy
		}
		var r = this;
		return "function" != typeof t ? r : (i.f7proxy = t, r.on(e, i, n))
	}, v.prototype.off = function (e, t) {
		var n = this;
		return n.eventsListeners ? (e.split(" ").forEach(function (e) {
			void 0 === t ? n.eventsListeners[e] = [] : n.eventsListeners[e] && n.eventsListeners[e].length && n.eventsListeners[e].forEach(function (i, r) {
				(i === t || i.f7proxy && i.f7proxy === t) && n.eventsListeners[e].splice(r, 1)
			})
		}), n) : n
	}, v.prototype.emit = function () {
		for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
		var n = this;
		if (!n.eventsListeners) return n;
		var i, r, a;
		return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], r = e.slice(1, e.length), a = n) : (i = e[0].events, r = e[0].data, a = e[0].context || n), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
			if (n.eventsListeners && n.eventsListeners[e]) {
				var t = [];
				n.eventsListeners[e].forEach(function (e) {
					t.push(e)
				}), t.forEach(function (e) {
					e.apply(a, r)
				})
			}
		}), n
	}, v.prototype.useModulesParams = function (e) {
		var t = this;
		t.modules && Object.keys(t.modules).forEach(function (n) {
			var i = t.modules[n];
			i.params && p.extend(e, i.params)
		})
	}, v.prototype.useModules = function (e) {
		void 0 === e && (e = {});
		var t = this;
		t.modules && Object.keys(t.modules).forEach(function (n) {
			var i = t.modules[n],
				r = e[n] || {};
			i.instance && Object.keys(i.instance).forEach(function (e) {
				var n = i.instance[e];
				t[e] = "function" == typeof n ? n.bind(t) : n
			}), i.on && t.on && Object.keys(i.on).forEach(function (e) {
				t.on(e, i.on[e])
			}), i.create && i.create.bind(t)(r)
		})
	}, m.components.set = function (e) {
		var t = this;
		t.use && t.use(e)
	}, v.installModule = function (e) {
		for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
		var i = this;
		i.prototype.modules || (i.prototype.modules = {});
		var r = e.name || Object.keys(i.prototype.modules).length + "_" + p.now();
		return i.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
			i.prototype[t] = e.proto[t]
		}), e.static && Object.keys(e.static).forEach(function (t) {
			i[t] = e.static[t]
		}), e.install && e.install.apply(i, t), i
	}, v.use = function (e) {
		for (var t = [], n = arguments.length - 1; n-- > 0;) t[n] = arguments[n + 1];
		var i = this;
		return Array.isArray(e) ? (e.forEach(function (e) {
			return i.installModule(e)
		}), i) : i.installModule.apply(i, [e].concat(t))
	}, Object.defineProperties(v, m);
	var g = {
			updateSize: function () {
				var e, t, n = this,
					i = n.$el;
				e = void 0 !== n.params.width ? n.params.width : i[0].clientWidth, t = void 0 !== n.params.height ? n.params.height : i[0].clientHeight, 0 === e && n.isHorizontal() || 0 === t && n.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), p.extend(n, {
					width: e,
					height: t,
					size: n.isHorizontal() ? e : t
				}))
			},
			updateSlides: function () {
				var e = this,
					t = e.params,
					n = e.$wrapperEl,
					i = e.size,
					r = e.rtlTranslate,
					a = e.wrongRTL,
					s = e.virtual && t.virtual.enabled,
					o = s ? e.virtual.slides.length : e.slides.length,
					l = n.children("." + e.params.slideClass),
					c = s ? e.virtual.slides.length : l.length,
					d = [],
					f = [],
					v = [],
					m = t.slidesOffsetBefore;
				"function" == typeof m && (m = t.slidesOffsetBefore.call(e));
				var g = t.slidesOffsetAfter;
				"function" == typeof g && (g = t.slidesOffsetAfter.call(e));
				var y = e.snapGrid.length,
					b = e.snapGrid.length,
					w = t.spaceBetween,
					x = -m,
					T = 0,
					E = 0;
				if (void 0 !== i) {
					"string" == typeof w && w.indexOf("%") >= 0 && (w = parseFloat(w.replace("%", "")) / 100 * i), e.virtualSize = -w, r ? l.css({
						marginLeft: "",
						marginTop: ""
					}) : l.css({
						marginRight: "",
						marginBottom: ""
					});
					var C;
					t.slidesPerColumn > 1 && (C = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (C = Math.max(C, t.slidesPerView * t.slidesPerColumn)));
					for (var S, k = t.slidesPerColumn, M = C / k, I = Math.floor(c / t.slidesPerColumn), L = 0; L < c; L += 1) {
						S = 0;
						var P = l.eq(L);
						if (t.slidesPerColumn > 1) {
							var D = void 0,
								O = void 0,
								A = void 0;
							"column" === t.slidesPerColumnFill ? (A = L - (O = Math.floor(L / k)) * k, (O > I || O === I && A === k - 1) && (A += 1) >= k && (A = 0, O += 1), D = O + A * C / k, P.css({
								"-webkit-box-ordinal-group": D,
								"-moz-box-ordinal-group": D,
								"-ms-flex-order": D,
								"-webkit-order": D,
								order: D
							})) : O = L - (A = Math.floor(L / M)) * M, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", O).attr("data-swiper-row", A)
						}
						if ("none" !== P.css("display")) {
							if ("auto" === t.slidesPerView) {
								var z = u.getComputedStyle(P[0], null),
									N = P[0].style.transform,
									$ = P[0].style.webkitTransform;
								if (N && (P[0].style.transform = "none"), $ && (P[0].style.webkitTransform = "none"), t.roundLengths) S = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
								else if (e.isHorizontal()) {
									var H = parseFloat(z.getPropertyValue("width")),
										j = parseFloat(z.getPropertyValue("padding-left")),
										F = parseFloat(z.getPropertyValue("padding-right")),
										q = parseFloat(z.getPropertyValue("margin-left")),
										B = parseFloat(z.getPropertyValue("margin-right")),
										V = z.getPropertyValue("box-sizing");
									S = V && "border-box" === V ? H + q + B : H + j + F + q + B
								} else {
									var R = parseFloat(z.getPropertyValue("height")),
										_ = parseFloat(z.getPropertyValue("padding-top")),
										W = parseFloat(z.getPropertyValue("padding-bottom")),
										X = parseFloat(z.getPropertyValue("margin-top")),
										Y = parseFloat(z.getPropertyValue("margin-bottom")),
										G = z.getPropertyValue("box-sizing");
									S = G && "border-box" === G ? R + X + Y : R + _ + W + X + Y
								}
								N && (P[0].style.transform = N), $ && (P[0].style.webkitTransform = $), t.roundLengths && (S = Math.floor(S))
							} else S = (i - (t.slidesPerView - 1) * w) / t.slidesPerView, t.roundLengths && (S = Math.floor(S)), l[L] && (e.isHorizontal() ? l[L].style.width = S + "px" : l[L].style.height = S + "px");
							l[L] && (l[L].swiperSlideSize = S), v.push(S), t.centeredSlides ? (x = x + S / 2 + T / 2 + w, 0 === T && 0 !== L && (x = x - i / 2 - w), 0 === L && (x = x - i / 2 - w), Math.abs(x) < .001 && (x = 0), t.roundLengths && (x = Math.floor(x)), E % t.slidesPerGroup == 0 && d.push(x), f.push(x)) : (t.roundLengths && (x = Math.floor(x)), E % t.slidesPerGroup == 0 && d.push(x), f.push(x), x = x + S + w), e.virtualSize += S + w, T = S, E += 1
						}
					}
					e.virtualSize = Math.max(e.virtualSize, i) + g;
					var U;
					if (r && a && ("slide" === t.effect || "coverflow" === t.effect) && n.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}), h.flexbox && !t.setWrapperSize || (e.isHorizontal() ? n.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}) : n.css({
							height: e.virtualSize + t.spaceBetween + "px"
						})), t.slidesPerColumn > 1 && (e.virtualSize = (S + t.spaceBetween) * C, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? n.css({
							width: e.virtualSize + t.spaceBetween + "px"
						}) : n.css({
							height: e.virtualSize + t.spaceBetween + "px"
						}), t.centeredSlides)) {
						U = [];
						for (var Q = 0; Q < d.length; Q += 1) {
							var K = d[Q];
							t.roundLengths && (K = Math.floor(K)), d[Q] < e.virtualSize + d[0] && U.push(K)
						}
						d = U
					}
					if (!t.centeredSlides) {
						U = [];
						for (var J = 0; J < d.length; J += 1) {
							var Z = d[J];
							t.roundLengths && (Z = Math.floor(Z)), d[J] <= e.virtualSize - i && U.push(Z)
						}
						d = U, Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i)
					}
					if (0 === d.length && (d = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? l.css({
							marginLeft: w + "px"
						}) : l.css({
							marginRight: w + "px"
						}) : l.css({
							marginBottom: w + "px"
						})), t.centerInsufficientSlides) {
						var ee = 0;
						if (v.forEach(function (e) {
								ee += e + (t.spaceBetween ? t.spaceBetween : 0)
							}), (ee -= t.spaceBetween) < i) {
							var te = (i - ee) / 2;
							d.forEach(function (e, t) {
								d[t] = e - te
							}), f.forEach(function (e, t) {
								f[t] = e + te
							})
						}
					}
					p.extend(e, {
						slides: l,
						snapGrid: d,
						slidesGrid: f,
						slidesSizesGrid: v
					}), c !== o && e.emit("slidesLengthChange"), d.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
				}
			},
			updateAutoHeight: function (e) {
				var t, n = this,
					i = [],
					r = 0;
				if ("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && n.params.slidesPerView > 1)
					for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
						var a = n.activeIndex + t;
						if (a > n.slides.length) break;
						i.push(n.slides.eq(a)[0])
					} else i.push(n.slides.eq(n.activeIndex)[0]);
				for (t = 0; t < i.length; t += 1)
					if (void 0 !== i[t]) {
						var s = i[t].offsetHeight;
						r = s > r ? s : r
					}
				r && n.$wrapperEl.css("height", r + "px")
			},
			updateSlidesOffset: function () {
				for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop
			},
			updateSlidesProgress: function (t) {
				void 0 === t && (t = this && this.translate || 0);
				var n = this,
					i = n.params,
					r = n.slides,
					a = n.rtlTranslate;
				if (0 !== r.length) {
					void 0 === r[0].swiperSlideOffset && n.updateSlidesOffset();
					var s = -t;
					a && (s = t), r.removeClass(i.slideVisibleClass), n.visibleSlidesIndexes = [], n.visibleSlides = [];
					for (var o = 0; o < r.length; o += 1) {
						var l = r[o],
							u = (s + (i.centeredSlides ? n.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + i.spaceBetween);
						if (i.watchSlidesVisibility) {
							var c = -(s - l.swiperSlideOffset),
								d = c + n.slidesSizesGrid[o];
							(c >= 0 && c < n.size || d > 0 && d <= n.size || c <= 0 && d >= n.size) && (n.visibleSlides.push(l), n.visibleSlidesIndexes.push(o), r.eq(o).addClass(i.slideVisibleClass))
						}
						l.progress = a ? -u : u
					}
					n.visibleSlides = e(n.visibleSlides)
				}
			},
			updateProgress: function (e) {
				void 0 === e && (e = this && this.translate || 0);
				var t = this,
					n = t.params,
					i = t.maxTranslate() - t.minTranslate(),
					r = t.progress,
					a = t.isBeginning,
					s = t.isEnd,
					o = a,
					l = s;
				0 === i ? (r = 0, a = !0, s = !0) : (a = (r = (e - t.minTranslate()) / i) <= 0, s = r >= 1), p.extend(t, {
					progress: r,
					isBeginning: a,
					isEnd: s
				}), (n.watchSlidesProgress || n.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), s && !l && t.emit("reachEnd toEdge"), (o && !a || l && !s) && t.emit("fromEdge"), t.emit("progress", r)
			},
			updateSlidesClasses: function () {
				var e = this,
					t = e.slides,
					n = e.params,
					i = e.$wrapperEl,
					r = e.activeIndex,
					a = e.realIndex,
					s = e.virtual && n.virtual.enabled;
				t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass);
				var o;
				(o = s ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(n.slideActiveClass), n.loop && (o.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]').addClass(n.slideDuplicateActiveClass));
				var l = o.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
				n.loop && 0 === l.length && (l = t.eq(0)).addClass(n.slideNextClass);
				var u = o.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
				n.loop && 0 === u.length && (u = t.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicateNextClass), u.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass) : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + u.attr("data-swiper-slide-index") + '"]').addClass(n.slideDuplicatePrevClass))
			},
			updateActiveIndex: function (e) {
				var t, n = this,
					i = n.rtlTranslate ? n.translate : -n.translate,
					r = n.slidesGrid,
					a = n.snapGrid,
					s = n.params,
					o = n.activeIndex,
					l = n.realIndex,
					u = n.snapIndex,
					c = e;
				if (void 0 === c) {
					for (var d = 0; d < r.length; d += 1) void 0 !== r[d + 1] ? i >= r[d] && i < r[d + 1] - (r[d + 1] - r[d]) / 2 ? c = d : i >= r[d] && i < r[d + 1] && (c = d + 1) : i >= r[d] && (c = d);
					s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
				}
				if ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(c / s.slidesPerGroup)) >= a.length && (t = a.length - 1), c !== o) {
					var h = parseInt(n.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
					p.extend(n, {
						snapIndex: t,
						realIndex: h,
						previousIndex: o,
						activeIndex: c
					}), n.emit("activeIndexChange"), n.emit("snapIndexChange"), l !== h && n.emit("realIndexChange"), n.emit("slideChange")
				} else t !== u && (n.snapIndex = t, n.emit("snapIndexChange"))
			},
			updateClickedSlide: function (t) {
				var n = this,
					i = n.params,
					r = e(t.target).closest("." + i.slideClass)[0],
					a = !1;
				if (r)
					for (var s = 0; s < n.slides.length; s += 1) n.slides[s] === r && (a = !0);
				if (!r || !a) return n.clickedSlide = void 0, void(n.clickedIndex = void 0);
				n.clickedSlide = r, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(e(r).attr("data-swiper-slide-index"), 10) : n.clickedIndex = e(r).index(), i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
			}
		},
		y = {
			getTranslate: function (e) {
				void 0 === e && (e = this.isHorizontal() ? "x" : "y");
				var t = this,
					n = t.params,
					i = t.rtlTranslate,
					r = t.translate,
					a = t.$wrapperEl;
				if (n.virtualTranslate) return i ? -r : r;
				var s = p.getTranslate(a[0], e);
				return i && (s = -s), s || 0
			},
			setTranslate: function (e, t) {
				var n = this,
					i = n.rtlTranslate,
					r = n.params,
					a = n.$wrapperEl,
					s = n.progress,
					o = 0,
					l = 0;
				n.isHorizontal() ? o = i ? -e : e : l = e, r.roundLengths && (o = Math.floor(o), l = Math.floor(l)), r.virtualTranslate || (h.transforms3d ? a.transform("translate3d(" + o + "px, " + l + "px, 0px)") : a.transform("translate(" + o + "px, " + l + "px)")), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? o : l;
				var u = n.maxTranslate() - n.minTranslate();
				(0 === u ? 0 : (e - n.minTranslate()) / u) !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
			},
			minTranslate: function () {
				return -this.snapGrid[0]
			},
			maxTranslate: function () {
				return -this.snapGrid[this.snapGrid.length - 1]
			}
		},
		b = {
			setTransition: function (e, t) {
				var n = this;
				n.$wrapperEl.transition(e), n.emit("setTransition", e, t)
			},
			transitionStart: function (e, t) {
				void 0 === e && (e = !0);
				var n = this,
					i = n.activeIndex,
					r = n.params,
					a = n.previousIndex;
				r.autoHeight && n.updateAutoHeight();
				var s = t;
				if (s || (s = i > a ? "next" : i < a ? "prev" : "reset"), n.emit("transitionStart"), e && i !== a) {
					if ("reset" === s) return void n.emit("slideResetTransitionStart");
					n.emit("slideChangeTransitionStart"), "next" === s ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")
				}
			},
			transitionEnd: function (e, t) {
				void 0 === e && (e = !0);
				var n = this,
					i = n.activeIndex,
					r = n.previousIndex;
				n.animating = !1, n.setTransition(0);
				var a = t;
				if (a || (a = i > r ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r) {
					if ("reset" === a) return void n.emit("slideResetTransitionEnd");
					n.emit("slideChangeTransitionEnd"), "next" === a ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")
				}
			}
		},
		w = {
			slideTo: function (e, t, n, i) {
				void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
				var r = this,
					a = e;
				a < 0 && (a = 0);
				var s = r.params,
					o = r.snapGrid,
					l = r.slidesGrid,
					u = r.previousIndex,
					c = r.activeIndex,
					d = r.rtlTranslate;
				if (r.animating && s.preventInteractionOnTransition) return !1;
				var p = Math.floor(a / s.slidesPerGroup);
				p >= o.length && (p = o.length - 1), (c || s.initialSlide || 0) === (u || 0) && n && r.emit("beforeSlideChangeStart");
				var f = -o[p];
				if (r.updateProgress(f), s.normalizeSlideIndex)
					for (var v = 0; v < l.length; v += 1) - Math.floor(100 * f) >= Math.floor(100 * l[v]) && (a = v);
				if (r.initialized && a !== c) {
					if (!r.allowSlideNext && f < r.translate && f < r.minTranslate()) return !1;
					if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (c || 0) !== a) return !1
				}
				var m;
				return m = a > c ? "next" : a < c ? "prev" : "reset", d && -f === r.translate || !d && f === r.translate ? (r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(f), "reset" !== m && (r.transitionStart(n, m), r.transitionEnd(n, m)), !1) : (0 !== t && h.transition ? (r.setTransition(t), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
					r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, m))
				}), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))) : (r.setTransition(0), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, i), r.transitionStart(n, m), r.transitionEnd(n, m)), !0)
			},
			slideToLoop: function (e, t, n, i) {
				void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0);
				var r = this,
					a = e;
				return r.params.loop && (a += r.loopedSlides), r.slideTo(a, t, n, i)
			},
			slideNext: function (e, t, n) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this,
					r = i.params,
					a = i.animating;
				return r.loop ? !a && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)) : i.slideTo(i.activeIndex + r.slidesPerGroup, e, t, n)
			},
			slidePrev: function (e, t, n) {
				function i(e) {
					return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
				}
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var r = this,
					a = r.params,
					s = r.animating,
					o = r.snapGrid,
					l = r.slidesGrid,
					u = r.rtlTranslate;
				if (a.loop) {
					if (s) return !1;
					r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft
				}
				var c, d = i(u ? r.translate : -r.translate),
					p = o.map(function (e) {
						return i(e)
					}),
					h = (l.map(function (e) {
						return i(e)
					}), o[p.indexOf(d)], o[p.indexOf(d) - 1]);
				return void 0 !== h && (c = l.indexOf(h)) < 0 && (c = r.activeIndex - 1), r.slideTo(c, e, t, n)
			},
			slideReset: function (e, t, n) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this;
				return i.slideTo(i.activeIndex, e, t, n)
			},
			slideToClosest: function (e, t, n) {
				void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
				var i = this,
					r = i.activeIndex,
					a = Math.floor(r / i.params.slidesPerGroup);
				if (a < i.snapGrid.length - 1) {
					var s = i.rtlTranslate ? i.translate : -i.translate,
						o = i.snapGrid[a];
					s - o > (i.snapGrid[a + 1] - o) / 2 && (r = i.params.slidesPerGroup)
				}
				return i.slideTo(r, e, t, n)
			},
			slideToClickedSlide: function () {
				var t, n = this,
					i = n.params,
					r = n.$wrapperEl,
					a = "auto" === i.slidesPerView ? n.slidesPerViewDynamic() : i.slidesPerView,
					s = n.clickedIndex;
				if (i.loop) {
					if (n.animating) return;
					t = parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? s < n.loopedSlides - a / 2 || s > n.slides.length - n.loopedSlides + a / 2 ? (n.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), p.nextTick(function () {
						n.slideTo(s)
					})) : n.slideTo(s) : s > n.slides.length - a ? (n.loopFix(), s = r.children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), p.nextTick(function () {
						n.slideTo(s)
					})) : n.slideTo(s)
				} else n.slideTo(s)
			}
		},
		x = {
			loopCreate: function () {
				var t = this,
					n = t.params,
					i = t.$wrapperEl;
				i.children("." + n.slideClass + "." + n.slideDuplicateClass).remove();
				var r = i.children("." + n.slideClass);
				if (n.loopFillGroupWithBlank) {
					var a = n.slidesPerGroup - r.length % n.slidesPerGroup;
					if (a !== n.slidesPerGroup) {
						for (var s = 0; s < a; s += 1) {
							var o = e(l.createElement("div")).addClass(n.slideClass + " " + n.slideBlankClass);
							i.append(o)
						}
						r = i.children("." + n.slideClass)
					}
				}
				"auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), t.loopedSlides = parseInt(n.loopedSlides || n.slidesPerView, 10), t.loopedSlides += n.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
				var u = [],
					c = [];
				r.each(function (n, i) {
					var a = e(i);
					n < t.loopedSlides && c.push(i), n < r.length && n >= r.length - t.loopedSlides && u.push(i), a.attr("data-swiper-slide-index", n)
				});
				for (var d = 0; d < c.length; d += 1) i.append(e(c[d].cloneNode(!0)).addClass(n.slideDuplicateClass));
				for (var p = u.length - 1; p >= 0; p -= 1) i.prepend(e(u[p].cloneNode(!0)).addClass(n.slideDuplicateClass))
			},
			loopFix: function () {
				var e, t = this,
					n = t.params,
					i = t.activeIndex,
					r = t.slides,
					a = t.loopedSlides,
					s = t.allowSlidePrev,
					o = t.allowSlideNext,
					l = t.snapGrid,
					u = t.rtlTranslate;
				t.allowSlidePrev = !0, t.allowSlideNext = !0;
				var c = -l[i] - t.getTranslate();
				i < a ? (e = r.length - 3 * a + i, e += a, t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((u ? -t.translate : t.translate) - c)) : ("auto" === n.slidesPerView && i >= 2 * a || i >= r.length - a) && (e = -r.length + i + a, e += a, t.slideTo(e, 0, !1, !0) && 0 !== c && t.setTranslate((u ? -t.translate : t.translate) - c)), t.allowSlidePrev = s, t.allowSlideNext = o
			},
			loopDestroy: function () {
				var e = this,
					t = e.$wrapperEl,
					n = e.params,
					i = e.slides;
				t.children("." + n.slideClass + "." + n.slideDuplicateClass + ",." + n.slideClass + "." + n.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
			}
		},
		T = {
			setGrabCursor: function (e) {
				var t = this;
				if (!(h.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked)) {
					var n = t.el;
					n.style.cursor = "move", n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", n.style.cursor = e ? "-moz-grabbin" : "-moz-grab", n.style.cursor = e ? "grabbing" : "grab"
				}
			},
			unsetGrabCursor: function () {
				var e = this;
				h.touch || e.params.watchOverflow && e.isLocked || (e.el.style.cursor = "")
			}
		},
		E = {
			appendSlide: function (e) {
				var t = this,
					n = t.$wrapperEl,
					i = t.params;
				if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
					for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
				else n.append(e);
				i.loop && t.loopCreate(), i.observer && h.observer || t.update()
			},
			prependSlide: function (e) {
				var t = this,
					n = t.params,
					i = t.$wrapperEl,
					r = t.activeIndex;
				n.loop && t.loopDestroy();
				var a = r + 1;
				if ("object" == typeof e && "length" in e) {
					for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
					a = r + e.length
				} else i.prepend(e);
				n.loop && t.loopCreate(), n.observer && h.observer || t.update(), t.slideTo(a, 0, !1)
			},
			addSlide: function (e, t) {
				var n = this,
					i = n.$wrapperEl,
					r = n.params,
					a = n.activeIndex;
				r.loop && (a -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + r.slideClass));
				var s = n.slides.length;
				if (e <= 0) n.prependSlide(t);
				else if (e >= s) n.appendSlide(t);
				else {
					for (var o = a > e ? a + 1 : a, l = [], u = s - 1; u >= e; u -= 1) {
						var c = n.slides.eq(u);
						c.remove(), l.unshift(c)
					}
					if ("object" == typeof t && "length" in t) {
						for (var d = 0; d < t.length; d += 1) t[d] && i.append(t[d]);
						o = a > e ? a + t.length : a
					} else i.append(t);
					for (var p = 0; p < l.length; p += 1) i.append(l[p]);
					r.loop && n.loopCreate(), r.observer && h.observer || n.update(), r.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1)
				}
			},
			removeSlide: function (e) {
				var t = this,
					n = t.params,
					i = t.$wrapperEl,
					r = t.activeIndex;
				n.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
				var a, s = r;
				if ("object" == typeof e && "length" in e) {
					for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
					s = Math.max(s, 0)
				} else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), s = Math.max(s, 0);
				n.loop && t.loopCreate(), n.observer && h.observer || t.update(), n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
			},
			removeAllSlides: function () {
				for (var e = this, t = [], n = 0; n < e.slides.length; n += 1) t.push(n);
				e.removeSlide(t)
			}
		},
		C = function () {
			var e = u.navigator.userAgent,
				t = {
					ios: !1,
					android: !1,
					androidChrome: !1,
					desktop: !1,
					windows: !1,
					iphone: !1,
					ipod: !1,
					ipad: !1,
					cordova: u.cordova || u.phonegap,
					phonegap: u.cordova || u.phonegap
				},
				n = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
				i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
				r = e.match(/(iPad).*OS\s([\d_]+)/),
				a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
				s = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
			if (n && (t.os = "windows", t.osVersion = n[2], t.windows = !0), i && !n && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || s || a) && (t.os = "ios", t.ios = !0), s && !a && (t.osVersion = s[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (s || r || a) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
				var o = t.osVersion.split("."),
					c = l.querySelector('meta[name="viewport"]');
				t.minimalUi = !t.webView && (a || s) && (1 * o[0] == 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && c && c.getAttribute("content").indexOf("minimal-ui") >= 0
			}
			return t.pixelRatio = u.devicePixelRatio || 1, t
		}(),
		S = {
			init: !0,
			direction: "horizontal",
			touchEventsTarget: "container",
			initialSlide: 0,
			speed: 300,
			preventInteractionOnTransition: !1,
			edgeSwipeDetection: !1,
			edgeSwipeThreshold: 20,
			freeMode: !1,
			freeModeMomentum: !0,
			freeModeMomentumRatio: 1,
			freeModeMomentumBounce: !0,
			freeModeMomentumBounceRatio: 1,
			freeModeMomentumVelocityRatio: 1,
			freeModeSticky: !1,
			freeModeMinimumVelocity: .02,
			autoHeight: !1,
			setWrapperSize: !1,
			virtualTranslate: !1,
			effect: "slide",
			breakpoints: void 0,
			breakpointsInverse: !1,
			spaceBetween: 0,
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerColumnFill: "column",
			slidesPerGroup: 1,
			centeredSlides: !1,
			slidesOffsetBefore: 0,
			slidesOffsetAfter: 0,
			normalizeSlideIndex: !0,
			centerInsufficientSlides: !1,
			watchOverflow: !1,
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
			touchMoveStopPropagation: !0,
			touchStartPreventDefault: !0,
			touchStartForcePreventDefault: !1,
			touchReleaseOnEdges: !1,
			uniqueNavElements: !0,
			resistance: !0,
			resistanceRatio: .85,
			watchSlidesProgress: !1,
			watchSlidesVisibility: !1,
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
			allowSlidePrev: !0,
			allowSlideNext: !0,
			swipeHandler: null,
			noSwiping: !0,
			noSwipingClass: "swiper-no-swiping",
			noSwipingSelector: null,
			passiveListeners: !0,
			containerModifierClass: "swiper-container-",
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
			runCallbacksOnInit: !0
		},
		k = {
			update: g,
			translate: y,
			transition: b,
			slide: w,
			loop: x,
			grabCursor: T,
			manipulation: E,
			events: {
				attachEvents: function () {
					var e = this,
						t = e.params,
						o = e.touchEvents,
						u = e.el,
						c = e.wrapperEl;
					e.onTouchStart = n.bind(e), e.onTouchMove = i.bind(e), e.onTouchEnd = r.bind(e), e.onClick = s.bind(e);
					var d = "container" === t.touchEventsTarget ? u : c,
						p = !!t.nested;
					if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
						if (h.touch) {
							var f = !("touchstart" !== o.start || !h.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							d.addEventListener(o.start, e.onTouchStart, f), d.addEventListener(o.move, e.onTouchMove, h.passiveListener ? {
								passive: !1,
								capture: p
							} : p), d.addEventListener(o.end, e.onTouchEnd, f)
						}(t.simulateTouch && !C.ios && !C.android || t.simulateTouch && !h.touch && C.ios) && (d.addEventListener("mousedown", e.onTouchStart, !1), l.addEventListener("mousemove", e.onTouchMove, p), l.addEventListener("mouseup", e.onTouchEnd, !1))
					} else d.addEventListener(o.start, e.onTouchStart, !1), l.addEventListener(o.move, e.onTouchMove, p), l.addEventListener(o.end, e.onTouchEnd, !1);
					(t.preventClicks || t.preventClicksPropagation) && d.addEventListener("click", e.onClick, !0), e.on(C.ios || C.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", a, !0)
				},
				detachEvents: function () {
					var e = this,
						t = e.params,
						n = e.touchEvents,
						i = e.el,
						r = e.wrapperEl,
						s = "container" === t.touchEventsTarget ? i : r,
						o = !!t.nested;
					if (h.touch || !h.pointerEvents && !h.prefixedPointerEvents) {
						if (h.touch) {
							var u = !("onTouchStart" !== n.start || !h.passiveListener || !t.passiveListeners) && {
								passive: !0,
								capture: !1
							};
							s.removeEventListener(n.start, e.onTouchStart, u), s.removeEventListener(n.move, e.onTouchMove, o), s.removeEventListener(n.end, e.onTouchEnd, u)
						}(t.simulateTouch && !C.ios && !C.android || t.simulateTouch && !h.touch && C.ios) && (s.removeEventListener("mousedown", e.onTouchStart, !1), l.removeEventListener("mousemove", e.onTouchMove, o), l.removeEventListener("mouseup", e.onTouchEnd, !1))
					} else s.removeEventListener(n.start, e.onTouchStart, !1), l.removeEventListener(n.move, e.onTouchMove, o), l.removeEventListener(n.end, e.onTouchEnd, !1);
					(t.preventClicks || t.preventClicksPropagation) && s.removeEventListener("click", e.onClick, !0), e.off(C.ios || C.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", a)
				}
			},
			breakpoints: {
				setBreakpoint: function () {
					var e = this,
						t = e.activeIndex,
						n = e.initialized,
						i = e.loopedSlides;
					void 0 === i && (i = 0);
					var r = e.params,
						a = r.breakpoints;
					if (a && (!a || 0 !== Object.keys(a).length)) {
						var s = e.getBreakpoint(a);
						if (s && e.currentBreakpoint !== s) {
							var o = s in a ? a[s] : void 0;
							o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
								var t = o[e];
								void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
							});
							var l = o || e.originalParams,
								u = l.direction && l.direction !== r.direction,
								c = r.loop && (l.slidesPerView !== r.slidesPerView || u);
							u && n && e.changeDirection(), p.extend(e.params, l), p.extend(e, {
								allowTouchMove: e.params.allowTouchMove,
								allowSlideNext: e.params.allowSlideNext,
								allowSlidePrev: e.params.allowSlidePrev
							}), e.currentBreakpoint = s, c && n && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
						}
					}
				},
				getBreakpoint: function (e) {
					var t = this;
					if (e) {
						var n = !1,
							i = [];
						Object.keys(e).forEach(function (e) {
							i.push(e)
						}), i.sort(function (e, t) {
							return parseInt(e, 10) - parseInt(t, 10)
						});
						for (var r = 0; r < i.length; r += 1) {
							var a = i[r];
							t.params.breakpointsInverse ? a <= u.innerWidth && (n = a) : a >= u.innerWidth && !n && (n = a)
						}
						return n || "max"
					}
				}
			},
			checkOverflow: {
				checkOverflow: function () {
					var e = this,
						t = e.isLocked;
					e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
				}
			},
			classes: {
				addClasses: function () {
					var e = this,
						t = e.classNames,
						n = e.params,
						i = e.rtl,
						r = e.$el,
						a = [];
					a.push("initialized"), a.push(n.direction), n.freeMode && a.push("free-mode"), h.flexbox || a.push("no-flexbox"), n.autoHeight && a.push("autoheight"), i && a.push("rtl"), n.slidesPerColumn > 1 && a.push("multirow"), C.android && a.push("android"), C.ios && a.push("ios"), (f.isIE || f.isEdge) && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + n.direction), a.forEach(function (e) {
						t.push(n.containerModifierClass + e)
					}), r.addClass(t.join(" "))
				},
				removeClasses: function () {
					var e = this,
						t = e.$el,
						n = e.classNames;
					t.removeClass(n.join(" "))
				}
			},
			images: {
				loadImage: function (e, t, n, i, r, a) {
					function s() {
						a && a()
					}
					var o;
					e.complete && r ? s() : t ? ((o = new u.Image).onload = s, o.onerror = s, i && (o.sizes = i), n && (o.srcset = n), t && (o.src = t)) : s()
				},
				preloadImages: function () {
					var e = this;
					e.imagesToLoad = e.$el.find("img");
					for (var t = 0; t < e.imagesToLoad.length; t += 1) {
						var n = e.imagesToLoad[t];
						e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, function () {
							void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
						})
					}
				}
			}
		},
		M = {},
		I = function (t) {
			function n() {
				for (var i, r = [], a = arguments.length; a--;) r[a] = arguments[a];
				var s, o;
				1 === r.length && r[0].constructor && r[0].constructor === Object ? o = r[0] : (s = (i = r)[0], o = i[1]), o || (o = {}), o = p.extend({}, o), s && !o.el && (o.el = s), t.call(this, o), Object.keys(k).forEach(function (e) {
					Object.keys(k[e]).forEach(function (t) {
						n.prototype[t] || (n.prototype[t] = k[e][t])
					})
				});
				var l = this;
				void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (e) {
					var t = l.modules[e];
					if (t.params) {
						var n = Object.keys(t.params)[0],
							i = t.params[n];
						if ("object" != typeof i || null === i) return;
						if (!(n in o && "enabled" in i)) return;
						!0 === o[n] && (o[n] = {
							enabled: !0
						}), "object" != typeof o[n] || "enabled" in o[n] || (o[n].enabled = !0), o[n] || (o[n] = {
							enabled: !1
						})
					}
				});
				var u = p.extend({}, S);
				l.useModulesParams(u), l.params = p.extend({}, u, M, o), l.originalParams = p.extend({}, l.params), l.passedParams = p.extend({}, o), l.$ = e;
				var c = e(l.params.el);
				if (s = c[0]) {
					if (c.length > 1) {
						var d = [];
						return c.each(function (e, t) {
							var i = p.extend({}, o, {
								el: t
							});
							d.push(new n(i))
						}), d
					}
					s.swiper = l, c.data("swiper", l);
					var f = c.children("." + l.params.wrapperClass);
					return p.extend(l, {
						$el: c,
						el: s,
						$wrapperEl: f,
						wrapperEl: f[0],
						classNames: [],
						slides: e(),
						slidesGrid: [],
						snapGrid: [],
						slidesSizesGrid: [],
						isHorizontal: function () {
							return "horizontal" === l.params.direction
						},
						isVertical: function () {
							return "vertical" === l.params.direction
						},
						rtl: "rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction"),
						rtlTranslate: "horizontal" === l.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === c.css("direction")),
						wrongRTL: "-webkit-box" === f.css("display"),
						activeIndex: 0,
						realIndex: 0,
						isBeginning: !0,
						isEnd: !1,
						translate: 0,
						previousTranslate: 0,
						progress: 0,
						velocity: 0,
						animating: !1,
						allowSlideNext: l.params.allowSlideNext,
						allowSlidePrev: l.params.allowSlidePrev,
						touchEvents: function () {
							var e = ["touchstart", "touchmove", "touchend"],
								t = ["mousedown", "mousemove", "mouseup"];
							return h.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : h.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
								start: e[0],
								move: e[1],
								end: e[2]
							}, l.touchEventsDesktop = {
								start: t[0],
								move: t[1],
								end: t[2]
							}, h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop
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
							formElements: "input, select, option, textarea, button, video",
							lastClickTime: p.now(),
							clickTimeout: void 0,
							velocities: [],
							allowMomentumBounce: void 0,
							isTouchEvent: void 0,
							startMoving: void 0
						},
						allowClick: !0,
						allowTouchMove: l.params.allowTouchMove,
						touches: {
							startX: 0,
							startY: 0,
							currentX: 0,
							currentY: 0,
							diff: 0
						},
						imagesToLoad: [],
						imagesLoaded: 0
					}), l.useModules(), l.params.init && l.init(), l
				}
			}
			t && (n.__proto__ = t), n.prototype = Object.create(t && t.prototype), n.prototype.constructor = n;
			var i = {
				extendedDefaults: {
					configurable: !0
				},
				defaults: {
					configurable: !0
				},
				Class: {
					configurable: !0
				},
				$: {
					configurable: !0
				}
			};
			return n.prototype.slidesPerViewDynamic = function () {
				var e = this,
					t = e.params,
					n = e.slides,
					i = e.slidesGrid,
					r = e.size,
					a = e.activeIndex,
					s = 1;
				if (t.centeredSlides) {
					for (var o, l = n[a].swiperSlideSize, u = a + 1; u < n.length; u += 1) n[u] && !o && (s += 1, (l += n[u].swiperSlideSize) > r && (o = !0));
					for (var c = a - 1; c >= 0; c -= 1) n[c] && !o && (s += 1, (l += n[c].swiperSlideSize) > r && (o = !0))
				} else
					for (var d = a + 1; d < n.length; d += 1) i[d] - i[a] < r && (s += 1);
				return s
			}, n.prototype.update = function () {
				function e() {
					var e = t.rtlTranslate ? -1 * t.translate : t.translate,
						n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
					t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
				}
				var t = this;
				if (t && !t.destroyed) {
					var n = t.snapGrid,
						i = t.params;
					i.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
					t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), i.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update")
				}
			}, n.prototype.changeDirection = function (e, t) {
				void 0 === t && (t = !0);
				var n = this,
					i = n.params.direction;
				return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? n : ("vertical" === i && (n.$el.removeClass(n.params.containerModifierClass + "vertical wp8-vertical").addClass("" + n.params.containerModifierClass + e), (f.isIE || f.isEdge) && (h.pointerEvents || h.prefixedPointerEvents) && n.$el.addClass(n.params.containerModifierClass + "wp8-" + e)), "horizontal" === i && (n.$el.removeClass(n.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + n.params.containerModifierClass + e), (f.isIE || f.isEdge) && (h.pointerEvents || h.prefixedPointerEvents) && n.$el.addClass(n.params.containerModifierClass + "wp8-" + e)), n.params.direction = e, n.slides.each(function (t, n) {
					"vertical" === e ? n.style.width = "" : n.style.height = ""
				}), n.emit("changeDirection"), t && n.update(), n)
			}, n.prototype.init = function () {
				var e = this;
				e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
			}, n.prototype.destroy = function (e, t) {
				void 0 === e && (e = !0), void 0 === t && (t = !0);
				var n = this,
					i = n.params,
					r = n.$el,
					a = n.$wrapperEl,
					s = n.slides;
				return void 0 === n.params || n.destroyed ? null : (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), t && (n.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(function (e) {
					n.off(e)
				}), !1 !== e && (n.$el[0].swiper = null, n.$el.data("swiper", null), p.deleteProps(n)), n.destroyed = !0, null)
			}, n.extendDefaults = function (e) {
				p.extend(M, e)
			}, i.extendedDefaults.get = function () {
				return M
			}, i.defaults.get = function () {
				return S
			}, i.Class.get = function () {
				return t
			}, i.$.get = function () {
				return e
			}, Object.defineProperties(n, i), n
		}(v),
		L = {
			name: "device",
			proto: {
				device: C
			},
			static: {
				device: C
			}
		},
		P = {
			name: "support",
			proto: {
				support: h
			},
			static: {
				support: h
			}
		},
		D = {
			name: "browser",
			proto: {
				browser: f
			},
			static: {
				browser: f
			}
		},
		O = {
			name: "resize",
			create: function () {
				var e = this;
				p.extend(e, {
					resize: {
						resizeHandler: function () {
							e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
						},
						orientationChangeHandler: function () {
							e && !e.destroyed && e.initialized && e.emit("orientationchange")
						}
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					u.addEventListener("resize", e.resize.resizeHandler), u.addEventListener("orientationchange", e.resize.orientationChangeHandler)
				},
				destroy: function () {
					var e = this;
					u.removeEventListener("resize", e.resize.resizeHandler), u.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
				}
			}
		},
		A = {
			func: u.MutationObserver || u.WebkitMutationObserver,
			attach: function (e, t) {
				void 0 === t && (t = {});
				var n = this,
					i = new(0, A.func)(function (e) {
						if (1 !== e.length) {
							var t = function () {
								n.emit("observerUpdate", e[0])
							};
							u.requestAnimationFrame ? u.requestAnimationFrame(t) : u.setTimeout(t, 0)
						} else n.emit("observerUpdate", e[0])
					});
				i.observe(e, {
					attributes: void 0 === t.attributes || t.attributes,
					childList: void 0 === t.childList || t.childList,
					characterData: void 0 === t.characterData || t.characterData
				}), n.observer.observers.push(i)
			},
			init: function () {
				var e = this;
				if (h.observer && e.params.observer) {
					if (e.params.observeParents)
						for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
					e.observer.attach(e.$el[0], {
						childList: e.params.observeSlideChildren
					}), e.observer.attach(e.$wrapperEl[0], {
						attributes: !1
					})
				}
			},
			destroy: function () {
				var e = this;
				e.observer.observers.forEach(function (e) {
					e.disconnect()
				}), e.observer.observers = []
			}
		},
		z = {
			name: "observer",
			params: {
				observer: !1,
				observeParents: !1,
				observeSlideChildren: !1
			},
			create: function () {
				var e = this;
				p.extend(e, {
					observer: {
						init: A.init.bind(e),
						attach: A.attach.bind(e),
						destroy: A.destroy.bind(e),
						observers: []
					}
				})
			},
			on: {
				init: function () {
					this.observer.init()
				},
				destroy: function () {
					this.observer.destroy()
				}
			}
		},
		N = {
			update: function (e) {
				function t() {
					n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.lazy && n.params.lazy.enabled && n.lazy.load()
				}
				var n = this,
					i = n.params,
					r = i.slidesPerView,
					a = i.slidesPerGroup,
					s = i.centeredSlides,
					o = n.params.virtual,
					l = o.addSlidesBefore,
					u = o.addSlidesAfter,
					c = n.virtual,
					d = c.from,
					h = c.to,
					f = c.slides,
					v = c.slidesGrid,
					m = c.renderSlide,
					g = c.offset;
				n.updateActiveIndex();
				var y, b = n.activeIndex || 0;
				y = n.rtlTranslate ? "right" : n.isHorizontal() ? "left" : "top";
				var w, x;
				s ? (w = Math.floor(r / 2) + a + l, x = Math.floor(r / 2) + a + u) : (w = r + (a - 1) + l, x = a + u);
				var T = Math.max((b || 0) - x, 0),
					E = Math.min((b || 0) + w, f.length - 1),
					C = (n.slidesGrid[T] || 0) - (n.slidesGrid[0] || 0);
				if (p.extend(n.virtual, {
						from: T,
						to: E,
						offset: C,
						slidesGrid: n.slidesGrid
					}), d === T && h === E && !e) return n.slidesGrid !== v && C !== g && n.slides.css(y, C + "px"), void n.updateProgress();
				if (n.params.virtual.renderExternal) return n.params.virtual.renderExternal.call(n, {
					offset: C,
					from: T,
					to: E,
					slides: function () {
						for (var e = [], t = T; t <= E; t += 1) e.push(f[t]);
						return e
					}()
				}), void t();
				var S = [],
					k = [];
				if (e) n.$wrapperEl.find("." + n.params.slideClass).remove();
				else
					for (var M = d; M <= h; M += 1)(M < T || M > E) && n.$wrapperEl.find("." + n.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
				for (var I = 0; I < f.length; I += 1) I >= T && I <= E && (void 0 === h || e ? k.push(I) : (I > h && k.push(I), I < d && S.push(I)));
				k.forEach(function (e) {
					n.$wrapperEl.append(m(f[e], e))
				}), S.sort(function (e, t) {
					return t - e
				}).forEach(function (e) {
					n.$wrapperEl.prepend(m(f[e], e))
				}), n.$wrapperEl.children(".swiper-slide").css(y, C + "px"), t()
			},
			renderSlide: function (t, n) {
				var i = this,
					r = i.params.virtual;
				if (r.cache && i.virtual.cache[n]) return i.virtual.cache[n];
				var a = e(r.renderSlide ? r.renderSlide.call(i, t, n) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + n + '">' + t + "</div>");
				return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", n), r.cache && (i.virtual.cache[n] = a), a
			},
			appendSlide: function (e) {
				var t = this;
				if ("object" == typeof e && "length" in e)
					for (var n = 0; n < e.length; n += 1) e[n] && t.virtual.slides.push(e[n]);
				else t.virtual.slides.push(e);
				t.virtual.update(!0)
			},
			prependSlide: function (e) {
				var t = this,
					n = t.activeIndex,
					i = n + 1,
					r = 1;
				if (Array.isArray(e)) {
					for (var a = 0; a < e.length; a += 1) e[a] && t.virtual.slides.unshift(e[a]);
					i = n + e.length, r = e.length
				} else t.virtual.slides.unshift(e);
				if (t.params.virtual.cache) {
					var s = t.virtual.cache,
						o = {};
					Object.keys(s).forEach(function (e) {
						o[parseInt(e, 10) + r] = s[e]
					}), t.virtual.cache = o
				}
				t.virtual.update(!0), t.slideTo(i, 0)
			},
			removeSlide: function (e) {
				var t = this;
				if (void 0 !== e && null !== e) {
					var n = t.activeIndex;
					if (Array.isArray(e))
						for (var i = e.length - 1; i >= 0; i -= 1) t.virtual.slides.splice(e[i], 1), t.params.virtual.cache && delete t.virtual.cache[e[i]], e[i] < n && (n -= 1), n = Math.max(n, 0);
					else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < n && (n -= 1), n = Math.max(n, 0);
					t.virtual.update(!0), t.slideTo(n, 0)
				}
			},
			removeAllSlides: function () {
				var e = this;
				e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
			}
		},
		$ = {
			name: "virtual",
			params: {
				virtual: {
					enabled: !1,
					slides: [],
					cache: !0,
					renderSlide: null,
					renderExternal: null,
					addSlidesBefore: 0,
					addSlidesAfter: 0
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					virtual: {
						update: N.update.bind(e),
						appendSlide: N.appendSlide.bind(e),
						prependSlide: N.prependSlide.bind(e),
						removeSlide: N.removeSlide.bind(e),
						removeAllSlides: N.removeAllSlides.bind(e),
						renderSlide: N.renderSlide.bind(e),
						slides: e.params.virtual.slides,
						cache: {}
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if (e.params.virtual.enabled) {
						e.classNames.push(e.params.containerModifierClass + "virtual");
						var t = {
							watchSlidesProgress: !0
						};
						p.extend(e.params, t), p.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
					}
				},
				setTranslate: function () {
					var e = this;
					e.params.virtual.enabled && e.virtual.update()
				}
			}
		},
		H = {
			handle: function (e) {
				var t = this,
					n = t.rtlTranslate,
					i = e;
				i.originalEvent && (i = i.originalEvent);
				var r = i.keyCode || i.charCode;
				if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
				if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;
				if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || l.activeElement && l.activeElement.nodeName && ("input" === l.activeElement.nodeName.toLowerCase() || "textarea" === l.activeElement.nodeName.toLowerCase()))) {
					if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
						var a = !1;
						if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
						var s = u.innerWidth,
							o = u.innerHeight,
							c = t.$el.offset();
						n && (c.left -= t.$el[0].scrollLeft);
						for (var d = [
								[c.left, c.top],
								[c.left + t.width, c.top],
								[c.left, c.top + t.height],
								[c.left + t.width, c.top + t.height]
							], p = 0; p < d.length; p += 1) {
							var h = d[p];
							h[0] >= 0 && h[0] <= s && h[1] >= 0 && h[1] <= o && (a = !0)
						}
						if (!a) return
					}
					t.isHorizontal() ? (37 !== r && 39 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === r && !n || 37 === r && n) && t.slideNext(), (37 === r && !n || 39 === r && n) && t.slidePrev()) : (38 !== r && 40 !== r || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r)
				}
			},
			enable: function () {
				var t = this;
				t.keyboard.enabled || (e(l).on("keydown", t.keyboard.handle), t.keyboard.enabled = !0)
			},
			disable: function () {
				var t = this;
				t.keyboard.enabled && (e(l).off("keydown", t.keyboard.handle), t.keyboard.enabled = !1)
			}
		},
		j = {
			name: "keyboard",
			params: {
				keyboard: {
					enabled: !1,
					onlyInViewport: !0
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					keyboard: {
						enabled: !1,
						enable: H.enable.bind(e),
						disable: H.disable.bind(e),
						handle: H.handle.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.keyboard.enabled && e.keyboard.enable()
				},
				destroy: function () {
					var e = this;
					e.keyboard.enabled && e.keyboard.disable()
				}
			}
		},
		F = {
			lastScrollTime: p.now(),
			event: u.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : o() ? "wheel" : "mousewheel",
			normalize: function (e) {
				var t = 0,
					n = 0,
					i = 0,
					r = 0;
				return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
					spinX: t,
					spinY: n,
					pixelX: i,
					pixelY: r
				}
			},
			handleMouseEnter: function () {
				this.mouseEntered = !0
			},
			handleMouseLeave: function () {
				this.mouseEntered = !1
			},
			handle: function (e) {
				var t = e,
					n = this,
					i = n.params.mousewheel;
				if (!n.mouseEntered && !i.releaseOnEdges) return !0;
				t.originalEvent && (t = t.originalEvent);
				var r = 0,
					a = n.rtlTranslate ? -1 : 1,
					s = F.normalize(t);
				if (i.forceToAxis)
					if (n.isHorizontal()) {
						if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return !0;
						r = s.pixelX * a
					} else {
						if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return !0;
						r = s.pixelY
					}
				else r = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * a : -s.pixelY;
				if (0 === r) return !0;
				if (i.invert && (r = -r), n.params.freeMode) {
					n.params.loop && n.loopFix();
					var o = n.getTranslate() + r * i.sensitivity,
						l = n.isBeginning,
						c = n.isEnd;
					if (o >= n.minTranslate() && (o = n.minTranslate()), o <= n.maxTranslate() && (o = n.maxTranslate()), n.setTransition(0), n.setTranslate(o), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!l && n.isBeginning || !c && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = p.nextTick(function () {
							n.slideToClosest()
						}, 300)), n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), o === n.minTranslate() || o === n.maxTranslate()) return !0
				} else {
					if (p.now() - n.mousewheel.lastScrollTime > 60)
						if (r < 0)
							if (n.isEnd && !n.params.loop || n.animating) {
								if (i.releaseOnEdges) return !0
							} else n.slideNext(), n.emit("scroll", t);
					else if (n.isBeginning && !n.params.loop || n.animating) {
						if (i.releaseOnEdges) return !0
					} else n.slidePrev(), n.emit("scroll", t);
					n.mousewheel.lastScrollTime = (new u.Date).getTime()
				}
				return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
			},
			enable: function () {
				var t = this;
				if (!F.event) return !1;
				if (t.mousewheel.enabled) return !1;
				var n = t.$el;
				return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)), n.on("mouseenter", t.mousewheel.handleMouseEnter), n.on("mouseleave", t.mousewheel.handleMouseLeave), n.on(F.event, t.mousewheel.handle), t.mousewheel.enabled = !0, !0
			},
			disable: function () {
				var t = this;
				if (!F.event) return !1;
				if (!t.mousewheel.enabled) return !1;
				var n = t.$el;
				return "container" !== t.params.mousewheel.eventsTarged && (n = e(t.params.mousewheel.eventsTarged)), n.off(F.event, t.mousewheel.handle), t.mousewheel.enabled = !1, !0
			}
		},
		q = {
			update: function () {
				var e = this,
					t = e.params.navigation;
				if (!e.params.loop) {
					var n = e.navigation,
						i = n.$nextEl,
						r = n.$prevEl;
					r && r.length > 0 && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
				}
			},
			onPrevClick: function (e) {
				var t = this;
				e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
			},
			onNextClick: function (e) {
				var t = this;
				e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
			},
			init: function () {
				var t = this,
					n = t.params.navigation;
				if (n.nextEl || n.prevEl) {
					var i, r;
					n.nextEl && (i = e(n.nextEl), t.params.uniqueNavElements && "string" == typeof n.nextEl && i.length > 1 && 1 === t.$el.find(n.nextEl).length && (i = t.$el.find(n.nextEl))), n.prevEl && (r = e(n.prevEl), t.params.uniqueNavElements && "string" == typeof n.prevEl && r.length > 1 && 1 === t.$el.find(n.prevEl).length && (r = t.$el.find(n.prevEl))), i && i.length > 0 && i.on("click", t.navigation.onNextClick), r && r.length > 0 && r.on("click", t.navigation.onPrevClick), p.extend(t.navigation, {
						$nextEl: i,
						nextEl: i && i[0],
						$prevEl: r,
						prevEl: r && r[0]
					})
				}
			},
			destroy: function () {
				var e = this,
					t = e.navigation,
					n = t.$nextEl,
					i = t.$prevEl;
				n && n.length && (n.off("click", e.navigation.onNextClick), n.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
			}
		},
		B = {
			update: function () {
				var t = this,
					n = t.rtl,
					i = t.params.pagination;
				if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
					var r, a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
						s = t.pagination.$el,
						o = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
					if (t.params.loop ? ((r = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > a - 1 - 2 * t.loopedSlides && (r -= a - 2 * t.loopedSlides), r > o - 1 && (r -= o), r < 0 && "bullets" !== t.params.paginationType && (r = o + r)) : r = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
						var l, u, c, d = t.pagination.bullets;
						if (i.dynamicBullets && (t.pagination.bulletSize = d.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(t.isHorizontal() ? "width" : "height", t.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (t.pagination.dynamicBulletIndex += r - t.previousIndex, t.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? t.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : t.pagination.dynamicBulletIndex < 0 && (t.pagination.dynamicBulletIndex = 0)), l = r - t.pagination.dynamicBulletIndex, c = ((u = l + (Math.min(d.length, i.dynamicMainBullets) - 1)) + l) / 2), d.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev " + i.bulletActiveClass + "-main"), s.length > 1) d.each(function (t, n) {
							var a = e(n),
								s = a.index();
							s === r && a.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= l && s <= u && a.addClass(i.bulletActiveClass + "-main"), s === l && a.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), s === u && a.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
						});
						else if (d.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
							for (var p = d.eq(l), h = d.eq(u), f = l; f <= u; f += 1) d.eq(f).addClass(i.bulletActiveClass + "-main");
							p.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), h.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
						}
						if (i.dynamicBullets) {
							var v = Math.min(d.length, i.dynamicMainBullets + 4),
								m = (t.pagination.bulletSize * v - t.pagination.bulletSize) / 2 - c * t.pagination.bulletSize,
								g = n ? "right" : "left";
							d.css(t.isHorizontal() ? g : "top", m + "px")
						}
					}
					if ("fraction" === i.type && (s.find("." + i.currentClass).text(i.formatFractionCurrent(r + 1)), s.find("." + i.totalClass).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
						var y;
						y = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
						var b = (r + 1) / o,
							w = 1,
							x = 1;
						"horizontal" === y ? w = b : x = b, s.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + x + ")").transition(t.params.speed)
					}
					"custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(t, r + 1, o)), t.emit("paginationRender", t, s[0])) : t.emit("paginationUpdate", t, s[0]), s[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](i.lockClass)
				}
			},
			render: function () {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
						i = e.pagination.$el,
						r = "";
					if ("bullets" === t.type) {
						for (var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
						i.html(r), e.pagination.bullets = i.find("." + t.bulletClass)
					}
					"fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
				}
			},
			init: function () {
				var t = this,
					n = t.params.pagination;
				if (n.el) {
					var i = e(n.el);
					0 !== i.length && (t.params.uniqueNavElements && "string" == typeof n.el && i.length > 1 && 1 === t.$el.find(n.el).length && (i = t.$el.find(n.el)), "bullets" === n.type && n.clickable && i.addClass(n.clickableClass), i.addClass(n.modifierClass + n.type), "bullets" === n.type && n.dynamicBullets && (i.addClass("" + n.modifierClass + n.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)), "progressbar" === n.type && n.progressbarOpposite && i.addClass(n.progressbarOppositeClass), n.clickable && i.on("click", "." + n.bulletClass, function (n) {
						n.preventDefault();
						var i = e(this).index() * t.params.slidesPerGroup;
						t.params.loop && (i += t.loopedSlides), t.slideTo(i)
					}), p.extend(t.pagination, {
						$el: i,
						el: i[0]
					}))
				}
			},
			destroy: function () {
				var e = this,
					t = e.params.pagination;
				if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
					var n = e.pagination.$el;
					n.removeClass(t.hiddenClass), n.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && n.off("click", "." + t.bulletClass)
				}
			}
		},
		V = {
			setTranslate: function () {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						n = e.rtlTranslate,
						i = e.progress,
						r = t.dragSize,
						a = t.trackSize,
						s = t.$dragEl,
						o = t.$el,
						l = e.params.scrollbar,
						u = r,
						c = (a - r) * i;
					n ? (c = -c) > 0 ? (u = r - c, c = 0) : -c + r > a && (u = a + c) : c < 0 ? (u = r + c, c = 0) : c + r > a && (u = a - c), e.isHorizontal() ? (h.transforms3d ? s.transform("translate3d(" + c + "px, 0, 0)") : s.transform("translateX(" + c + "px)"), s[0].style.width = u + "px") : (h.transforms3d ? s.transform("translate3d(0px, " + c + "px, 0)") : s.transform("translateY(" + c + "px)"), s[0].style.height = u + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
						o[0].style.opacity = 0, o.transition(400)
					}, 1e3))
				}
			},
			setTransition: function (e) {
				var t = this;
				t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e)
			},
			updateSize: function () {
				var e = this;
				if (e.params.scrollbar.el && e.scrollbar.el) {
					var t = e.scrollbar,
						n = t.$dragEl,
						i = t.$el;
					n[0].style.width = "", n[0].style.height = "";
					var r, a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
						s = e.size / e.virtualSize,
						o = s * (a / e.size);
					r = "auto" === e.params.scrollbar.dragSize ? a * s : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? n[0].style.width = r + "px" : n[0].style.height = r + "px", i[0].style.display = s >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), p.extend(t, {
						trackSize: a,
						divider: s,
						moveDivider: o,
						dragSize: r
					}), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
				}
			},
			setDragPosition: function (e) {
				var t, n = this,
					i = n.scrollbar,
					r = n.rtlTranslate,
					a = i.$el,
					s = i.dragSize,
					o = i.trackSize;
				t = ((n.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - a.offset()[n.isHorizontal() ? "left" : "top"] - s / 2) / (o - s), t = Math.max(Math.min(t, 1), 0), r && (t = 1 - t);
				var l = n.minTranslate() + (n.maxTranslate() - n.minTranslate()) * t;
				n.updateProgress(l), n.setTranslate(l), n.updateActiveIndex(), n.updateSlidesClasses()
			},
			onDragStart: function (e) {
				var t = this,
					n = t.params.scrollbar,
					i = t.scrollbar,
					r = t.$wrapperEl,
					a = i.$el,
					s = i.$dragEl;
				t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), r.transition(100), s.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), n.hide && a.css("opacity", 1), t.emit("scrollbarDragStart", e)
			},
			onDragMove: function (e) {
				var t = this,
					n = t.scrollbar,
					i = t.$wrapperEl,
					r = n.$el,
					a = n.$dragEl;
				t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, n.setDragPosition(e), i.transition(0), r.transition(0), a.transition(0), t.emit("scrollbarDragMove", e))
			},
			onDragEnd: function (e) {
				var t = this,
					n = t.params.scrollbar,
					i = t.scrollbar.$el;
				t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = p.nextTick(function () {
					i.css("opacity", 0), i.transition(400)
				}, 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
			},
			enableDraggable: function () {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						n = e.touchEventsTouch,
						i = e.touchEventsDesktop,
						r = e.params,
						a = t.$el[0],
						s = !(!h.passiveListener || !r.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!h.passiveListener || !r.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					h.touch ? (a.addEventListener(n.start, e.scrollbar.onDragStart, s), a.addEventListener(n.move, e.scrollbar.onDragMove, s), a.addEventListener(n.end, e.scrollbar.onDragEnd, o)) : (a.addEventListener(i.start, e.scrollbar.onDragStart, s), l.addEventListener(i.move, e.scrollbar.onDragMove, s), l.addEventListener(i.end, e.scrollbar.onDragEnd, o))
				}
			},
			disableDraggable: function () {
				var e = this;
				if (e.params.scrollbar.el) {
					var t = e.scrollbar,
						n = e.touchEventsTouch,
						i = e.touchEventsDesktop,
						r = e.params,
						a = t.$el[0],
						s = !(!h.passiveListener || !r.passiveListeners) && {
							passive: !1,
							capture: !1
						},
						o = !(!h.passiveListener || !r.passiveListeners) && {
							passive: !0,
							capture: !1
						};
					h.touch ? (a.removeEventListener(n.start, e.scrollbar.onDragStart, s), a.removeEventListener(n.move, e.scrollbar.onDragMove, s), a.removeEventListener(n.end, e.scrollbar.onDragEnd, o)) : (a.removeEventListener(i.start, e.scrollbar.onDragStart, s), l.removeEventListener(i.move, e.scrollbar.onDragMove, s), l.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
				}
			},
			init: function () {
				var t = this;
				if (t.params.scrollbar.el) {
					var n = t.scrollbar,
						i = t.$el,
						r = t.params.scrollbar,
						a = e(r.el);
					t.params.uniqueNavElements && "string" == typeof r.el && a.length > 1 && 1 === i.find(r.el).length && (a = i.find(r.el));
					var s = a.find("." + t.params.scrollbar.dragClass);
					0 === s.length && (s = e('<div class="' + t.params.scrollbar.dragClass + '"></div>'), a.append(s)), p.extend(n, {
						$el: a,
						el: a[0],
						$dragEl: s,
						dragEl: s[0]
					}), r.draggable && n.enableDraggable()
				}
			},
			destroy: function () {
				this.scrollbar.disableDraggable()
			}
		},
		R = {
			setTransform: function (t, n) {
				var i = this,
					r = i.rtl,
					a = e(t),
					s = r ? -1 : 1,
					o = a.attr("data-swiper-parallax") || "0",
					l = a.attr("data-swiper-parallax-x"),
					u = a.attr("data-swiper-parallax-y"),
					c = a.attr("data-swiper-parallax-scale"),
					d = a.attr("data-swiper-parallax-opacity");
				if (l || u ? (l = l || "0", u = u || "0") : i.isHorizontal() ? (l = o, u = "0") : (u = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * n * s + "%" : l * n * s + "px", u = u.indexOf("%") >= 0 ? parseInt(u, 10) * n + "%" : u * n + "px", void 0 !== d && null !== d) {
					var p = d - (d - 1) * (1 - Math.abs(n));
					a[0].style.opacity = p
				}
				if (void 0 === c || null === c) a.transform("translate3d(" + l + ", " + u + ", 0px)");
				else {
					var h = c - (c - 1) * (1 - Math.abs(n));
					a.transform("translate3d(" + l + ", " + u + ", 0px) scale(" + h + ")")
				}
			},
			setTranslate: function () {
				var t = this,
					n = t.$el,
					i = t.slides,
					r = t.progress,
					a = t.snapGrid;
				n.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, n) {
					t.parallax.setTransform(n, r)
				}), i.each(function (n, i) {
					var s = i.progress;
					t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (s += Math.ceil(n / 2) - r * (a.length - 1)), s = Math.min(Math.max(s, -1), 1), e(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, n) {
						t.parallax.setTransform(n, s)
					})
				})
			},
			setTransition: function (t) {
				void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (n, i) {
					var r = e(i),
						a = parseInt(r.attr("data-swiper-parallax-duration"), 10) || t;
					0 === t && (a = 0), r.transition(a)
				})
			}
		},
		_ = {
			getDistanceBetweenTouches: function (e) {
				if (e.targetTouches.length < 2) return 1;
				var t = e.targetTouches[0].pageX,
					n = e.targetTouches[0].pageY,
					i = e.targetTouches[1].pageX,
					r = e.targetTouches[1].pageY;
				return Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - n, 2))
			},
			onGestureStart: function (t) {
				var n = this,
					i = n.params.zoom,
					r = n.zoom,
					a = r.gesture;
				if (r.fakeGestureTouched = !1, r.fakeGestureMoved = !1, !h.gestures) {
					if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
					r.fakeGestureTouched = !0, a.scaleStart = _.getDistanceBetweenTouches(t)
				}
				a.$slideEl && a.$slideEl.length || (a.$slideEl = e(t.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = n.slides.eq(n.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + i.containerClass), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), n.zoom.isScaling = !0) : a.$imageEl = void 0
			},
			onGestureChange: function (e) {
				var t = this,
					n = t.params.zoom,
					i = t.zoom,
					r = i.gesture;
				if (!h.gestures) {
					if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
					i.fakeGestureMoved = !0, r.scaleMove = _.getDistanceBetweenTouches(e)
				}
				r.$imageEl && 0 !== r.$imageEl.length && (h.gestures ? i.scale = e.scale * i.currentScale : i.scale = r.scaleMove / r.scaleStart * i.currentScale, i.scale > r.maxRatio && (i.scale = r.maxRatio - 1 + Math.pow(i.scale - r.maxRatio + 1, .5)), i.scale < n.minRatio && (i.scale = n.minRatio + 1 - Math.pow(n.minRatio - i.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
			},
			onGestureEnd: function (e) {
				var t = this,
					n = t.params.zoom,
					i = t.zoom,
					r = i.gesture;
				if (!h.gestures) {
					if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
					if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !C.android) return;
					i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
				}
				r.$imageEl && 0 !== r.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, r.maxRatio), n.minRatio), r.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (r.$slideEl = void 0))
			},
			onTouchStart: function (e) {
				var t = this.zoom,
					n = t.gesture,
					i = t.image;
				n.$imageEl && 0 !== n.$imageEl.length && (i.isTouched || (C.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
			},
			onTouchMove: function (e) {
				var t = this,
					n = t.zoom,
					i = n.gesture,
					r = n.image,
					a = n.velocity;
				if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, r.isTouched && i.$slideEl)) {
					r.isMoved || (r.width = i.$imageEl[0].offsetWidth, r.height = i.$imageEl[0].offsetHeight, r.startX = p.getTranslate(i.$imageWrapEl[0], "x") || 0, r.startY = p.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (r.startX = -r.startX, r.startY = -r.startY));
					var s = r.width * n.scale,
						o = r.height * n.scale;
					if (!(s < i.slideWidth && o < i.slideHeight)) {
						if (r.minX = Math.min(i.slideWidth / 2 - s / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - o / 2, 0), r.maxY = -r.minY, r.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, r.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !r.isMoved && !n.isScaling) {
							if (t.isHorizontal() && (Math.floor(r.minX) === Math.floor(r.startX) && r.touchesCurrent.x < r.touchesStart.x || Math.floor(r.maxX) === Math.floor(r.startX) && r.touchesCurrent.x > r.touchesStart.x)) return void(r.isTouched = !1);
							if (!t.isHorizontal() && (Math.floor(r.minY) === Math.floor(r.startY) && r.touchesCurrent.y < r.touchesStart.y || Math.floor(r.maxY) === Math.floor(r.startY) && r.touchesCurrent.y > r.touchesStart.y)) return void(r.isTouched = !1)
						}
						e.preventDefault(), e.stopPropagation(), r.isMoved = !0, r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX, r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY, r.currentX < r.minX && (r.currentX = r.minX + 1 - Math.pow(r.minX - r.currentX + 1, .8)), r.currentX > r.maxX && (r.currentX = r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, .8)), r.currentY < r.minY && (r.currentY = r.minY + 1 - Math.pow(r.minY - r.currentY + 1, .8)), r.currentY > r.maxY && (r.currentY = r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = r.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = r.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (r.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (r.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(r.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(r.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = r.touchesCurrent.x, a.prevPositionY = r.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
					}
				}
			},
			onTouchEnd: function () {
				var e = this.zoom,
					t = e.gesture,
					n = e.image,
					i = e.velocity;
				if (t.$imageEl && 0 !== t.$imageEl.length) {
					if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
					n.isTouched = !1, n.isMoved = !1;
					var r = 300,
						a = 300,
						s = i.x * r,
						o = n.currentX + s,
						l = i.y * a,
						u = n.currentY + l;
					0 !== i.x && (r = Math.abs((o - n.currentX) / i.x)), 0 !== i.y && (a = Math.abs((u - n.currentY) / i.y));
					var c = Math.max(r, a);
					n.currentX = o, n.currentY = u;
					var d = n.width * e.scale,
						p = n.height * e.scale;
					n.minX = Math.min(t.slideWidth / 2 - d / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - p / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(c).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
				}
			},
			onTransitionEnd: function () {
				var e = this,
					t = e.zoom,
					n = t.gesture;
				n.$slideEl && e.previousIndex !== e.activeIndex && (n.$imageEl.transform("translate3d(0,0,0) scale(1)"), n.$imageWrapEl.transform("translate3d(0,0,0)"), t.scale = 1, t.currentScale = 1, n.$slideEl = void 0, n.$imageEl = void 0, n.$imageWrapEl = void 0)
			},
			toggle: function (e) {
				var t = this.zoom;
				t.scale && 1 !== t.scale ? t.out() : t.in(e)
			},
			in: function (t) {
				var n = this,
					i = n.zoom,
					r = n.params.zoom,
					a = i.gesture,
					s = i.image;
				if (a.$slideEl || (a.$slideEl = n.clickedSlide ? e(n.clickedSlide) : n.slides.eq(n.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent("." + r.containerClass)), a.$imageEl && 0 !== a.$imageEl.length) {
					a.$slideEl.addClass("" + r.zoomedSlideClass);
					var o, l, u, c, d, p, h, f, v, m, g, y, b, w, x, T;
					void 0 === s.touchesStart.x && t ? (o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (o = s.touchesStart.x, l = s.touchesStart.y), i.scale = a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, i.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, t ? (x = a.$slideEl[0].offsetWidth, T = a.$slideEl[0].offsetHeight, u = a.$slideEl.offset().left + x / 2 - o, c = a.$slideEl.offset().top + T / 2 - l, h = a.$imageEl[0].offsetWidth, f = a.$imageEl[0].offsetHeight, v = h * i.scale, m = f * i.scale, b = -(g = Math.min(x / 2 - v / 2, 0)), w = -(y = Math.min(T / 2 - m / 2, 0)), d = u * i.scale, p = c * i.scale, d < g && (d = g), d > b && (d = b), p < y && (p = y), p > w && (p = w)) : (d = 0, p = 0), a.$imageWrapEl.transition(300).transform("translate3d(" + d + "px, " + p + "px,0)"), a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")")
				}
			},
			out: function () {
				var t = this,
					n = t.zoom,
					i = t.params.zoom,
					r = n.gesture;
				r.$slideEl || (r.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)), r.$imageEl && 0 !== r.$imageEl.length && (n.scale = 1, n.currentScale = 1, r.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), r.$slideEl.removeClass("" + i.zoomedSlideClass), r.$slideEl = void 0)
			},
			enable: function () {
				var e = this,
					t = e.zoom;
				if (!t.enabled) {
					t.enabled = !0;
					var n = !("touchstart" !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					h.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
				}
			},
			disable: function () {
				var e = this,
					t = e.zoom;
				if (t.enabled) {
					e.zoom.enabled = !1;
					var n = !("touchstart" !== e.touchEvents.start || !h.passiveListener || !e.params.passiveListeners) && {
						passive: !0,
						capture: !1
					};
					h.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, n)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, n), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, n), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, n)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
				}
			}
		},
		W = {
			loadInSlide: function (t, n) {
				void 0 === n && (n = !0);
				var i = this,
					r = i.params.lazy;
				if (void 0 !== t && 0 !== i.slides.length) {
					var a = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
						s = a.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
					!a.hasClass(r.elementClass) || a.hasClass(r.loadedClass) || a.hasClass(r.loadingClass) || (s = s.add(a[0])), 0 !== s.length && s.each(function (t, s) {
						var o = e(s);
						o.addClass(r.loadingClass);
						var l = o.attr("data-background"),
							u = o.attr("data-src"),
							c = o.attr("data-srcset"),
							d = o.attr("data-sizes");
						i.loadImage(o[0], u || l, c, d, !1, function () {
							if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
								if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), d && (o.attr("sizes", d), o.removeAttr("data-sizes")), u && (o.attr("src", u), o.removeAttr("data-src"))), o.addClass(r.loadedClass).removeClass(r.loadingClass), a.find("." + r.preloaderClass).remove(), i.params.loop && n) {
									var e = a.attr("data-swiper-slide-index");
									if (a.hasClass(i.params.slideDuplicateClass)) {
										var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
										i.lazy.loadInSlide(t.index(), !1)
									} else {
										var s = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
										i.lazy.loadInSlide(s.index(), !1)
									}
								}
								i.emit("lazyImageReady", a[0], o[0])
							}
						}), i.emit("lazyImageLoad", a[0], o[0])
					})
				}
			},
			load: function () {
				function t(e) {
					if (l) {
						if (r.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
					} else if (s[e]) return !0;
					return !1
				}

				function n(t) {
					return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
				}
				var i = this,
					r = i.$wrapperEl,
					a = i.params,
					s = i.slides,
					o = i.activeIndex,
					l = i.virtual && a.virtual.enabled,
					u = a.lazy,
					c = a.slidesPerView;
				if ("auto" === c && (c = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) r.children("." + a.slideVisibleClass).each(function (t, n) {
					var r = l ? e(n).attr("data-swiper-slide-index") : e(n).index();
					i.lazy.loadInSlide(r)
				});
				else if (c > 1)
					for (var d = o; d < o + c; d += 1) t(d) && i.lazy.loadInSlide(d);
				else i.lazy.loadInSlide(o);
				if (u.loadPrevNext)
					if (c > 1 || u.loadPrevNextAmount && u.loadPrevNextAmount > 1) {
						for (var p = u.loadPrevNextAmount, h = c, f = Math.min(o + h + Math.max(p, h), s.length), v = Math.max(o - Math.max(h, p), 0), m = o + c; m < f; m += 1) t(m) && i.lazy.loadInSlide(m);
						for (var g = v; g < o; g += 1) t(g) && i.lazy.loadInSlide(g)
					} else {
						var y = r.children("." + a.slideNextClass);
						y.length > 0 && i.lazy.loadInSlide(n(y));
						var b = r.children("." + a.slidePrevClass);
						b.length > 0 && i.lazy.loadInSlide(n(b))
					}
			}
		},
		X = {
			LinearSpline: function (e, t) {
				var n = function () {
					var e, t, n;
					return function (i, r) {
						for (t = -1, e = i.length; e - t > 1;) i[n = e + t >> 1] <= r ? t = n : e = n;
						return e
					}
				}();
				this.x = e, this.y = t, this.lastIndex = e.length - 1;
				var i, r;
				return this.interpolate = function (e) {
					return e ? (r = n(this.x, e), i = r - 1, (e - this.x[i]) * (this.y[r] - this.y[i]) / (this.x[r] - this.x[i]) + this.y[i]) : 0
				}, this
			},
			getInterpolateFunction: function (e) {
				var t = this;
				t.controller.spline || (t.controller.spline = t.params.loop ? new X.LinearSpline(t.slidesGrid, e.slidesGrid) : new X.LinearSpline(t.snapGrid, e.snapGrid))
			},
			setTranslate: function (e, t) {
				function n(e) {
					var t = a.rtlTranslate ? -a.translate : a.translate;
					"slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), r = -a.controller.spline.interpolate(-t)), r && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), r = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, a), e.updateActiveIndex(), e.updateSlidesClasses()
				}
				var i, r, a = this,
					s = a.controller.control;
				if (Array.isArray(s))
					for (var o = 0; o < s.length; o += 1) s[o] !== t && s[o] instanceof I && n(s[o]);
				else s instanceof I && t !== s && n(s)
			},
			setTransition: function (e, t) {
				function n(t) {
					t.setTransition(e, r), 0 !== e && (t.transitionStart(), t.params.autoHeight && p.nextTick(function () {
						t.updateAutoHeight()
					}), t.$wrapperEl.transitionEnd(function () {
						a && (t.params.loop && "slide" === r.params.controller.by && t.loopFix(), t.transitionEnd())
					}))
				}
				var i, r = this,
					a = r.controller.control;
				if (Array.isArray(a))
					for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof I && n(a[i]);
				else a instanceof I && t !== a && n(a)
			}
		},
		Y = {
			makeElFocusable: function (e) {
				return e.attr("tabIndex", "0"), e
			},
			addElRole: function (e, t) {
				return e.attr("role", t), e
			},
			addElLabel: function (e, t) {
				return e.attr("aria-label", t), e
			},
			disableEl: function (e) {
				return e.attr("aria-disabled", !0), e
			},
			enableEl: function (e) {
				return e.attr("aria-disabled", !1), e
			},
			onEnterKey: function (t) {
				var n = this,
					i = n.params.a11y;
				if (13 === t.keyCode) {
					var r = e(t.target);
					n.navigation && n.navigation.$nextEl && r.is(n.navigation.$nextEl) && (n.isEnd && !n.params.loop || n.slideNext(), n.isEnd ? n.a11y.notify(i.lastSlideMessage) : n.a11y.notify(i.nextSlideMessage)), n.navigation && n.navigation.$prevEl && r.is(n.navigation.$prevEl) && (n.isBeginning && !n.params.loop || n.slidePrev(), n.isBeginning ? n.a11y.notify(i.firstSlideMessage) : n.a11y.notify(i.prevSlideMessage)), n.pagination && r.is("." + n.params.pagination.bulletClass) && r[0].click()
				}
			},
			notify: function (e) {
				var t = this.a11y.liveRegion;
				0 !== t.length && (t.html(""), t.html(e))
			},
			updateNavigation: function () {
				var e = this;
				if (!e.params.loop) {
					var t = e.navigation,
						n = t.$nextEl,
						i = t.$prevEl;
					i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), n && n.length > 0 && (e.isEnd ? e.a11y.disableEl(n) : e.a11y.enableEl(n))
				}
			},
			updatePagination: function () {
				var t = this,
					n = t.params.a11y;
				t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (i, r) {
					var a = e(r);
					t.a11y.makeElFocusable(a), t.a11y.addElRole(a, "button"), t.a11y.addElLabel(a, n.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
				})
			},
			init: function () {
				var e = this;
				e.$el.append(e.a11y.liveRegion);
				var t, n, i = e.params.a11y;
				e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
			},
			destroy: function () {
				var e = this;
				e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
				var t, n;
				e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), n && n.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
			}
		},
		G = {
			init: function () {
				var e = this;
				if (e.params.history) {
					if (!u.history || !u.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
					var t = e.history;
					t.initialized = !0, t.paths = G.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || u.addEventListener("popstate", e.history.setHistoryPopState))
				}
			},
			destroy: function () {
				var e = this;
				e.params.history.replaceState || u.removeEventListener("popstate", e.history.setHistoryPopState)
			},
			setHistoryPopState: function () {
				var e = this;
				e.history.paths = G.getPathValues(), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1)
			},
			getPathValues: function () {
				var e = u.location.pathname.slice(1).split("/").filter(function (e) {
						return "" !== e
					}),
					t = e.length;
				return {
					key: e[t - 2],
					value: e[t - 1]
				}
			},
			setHistory: function (e, t) {
				var n = this;
				if (n.history.initialized && n.params.history.enabled) {
					var i = n.slides.eq(t),
						r = G.slugify(i.attr("data-history"));
					u.location.pathname.includes(e) || (r = e + "/" + r);
					var a = u.history.state;
					a && a.value === r || (n.params.history.replaceState ? u.history.replaceState({
						value: r
					}, null, r) : u.history.pushState({
						value: r
					}, null, r))
				}
			},
			slugify: function (e) {
				return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
			},
			scrollToSlide: function (e, t, n) {
				var i = this;
				if (t)
					for (var r = 0, a = i.slides.length; r < a; r += 1) {
						var s = i.slides.eq(r);
						if (G.slugify(s.attr("data-history")) === t && !s.hasClass(i.params.slideDuplicateClass)) {
							var o = s.index();
							i.slideTo(o, e, n)
						}
					} else i.slideTo(0, e, n)
			}
		},
		U = {
			onHashCange: function () {
				var e = this,
					t = l.location.hash.replace("#", "");
				if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
					var n = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
					if (void 0 === n) return;
					e.slideTo(n)
				}
			},
			setHash: function () {
				var e = this;
				if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
					if (e.params.hashNavigation.replaceState && u.history && u.history.replaceState) u.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
					else {
						var t = e.slides.eq(e.activeIndex),
							n = t.attr("data-hash") || t.attr("data-history");
						l.location.hash = n || ""
					}
			},
			init: function () {
				var t = this;
				if (!(!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled)) {
					t.hashNavigation.initialized = !0;
					var n = l.location.hash.replace("#", "");
					if (n)
						for (var i = 0, r = t.slides.length; i < r; i += 1) {
							var a = t.slides.eq(i);
							if ((a.attr("data-hash") || a.attr("data-history")) === n && !a.hasClass(t.params.slideDuplicateClass)) {
								var s = a.index();
								t.slideTo(s, 0, t.params.runCallbacksOnInit, !0)
							}
						}
					t.params.hashNavigation.watchState && e(u).on("hashchange", t.hashNavigation.onHashCange)
				}
			},
			destroy: function () {
				var t = this;
				t.params.hashNavigation.watchState && e(u).off("hashchange", t.hashNavigation.onHashCange)
			}
		},
		Q = {
			run: function () {
				var e = this,
					t = e.slides.eq(e.activeIndex),
					n = e.params.autoplay.delay;
				t.attr("data-swiper-autoplay") && (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = p.nextTick(function () {
					e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
				}, n)
			},
			start: function () {
				var e = this;
				return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
			},
			stop: function () {
				var e = this;
				return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
			},
			pause: function (e) {
				var t = this;
				t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
			}
		},
		K = {
			setTranslate: function () {
				for (var e = this, t = e.slides, n = 0; n < t.length; n += 1) {
					var i = e.slides.eq(n),
						r = -i[0].swiperSlideOffset;
					e.params.virtualTranslate || (r -= e.translate);
					var a = 0;
					e.isHorizontal() || (a = r, r = 0);
					var s = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
					i.css({
						opacity: s
					}).transform("translate3d(" + r + "px, " + a + "px, 0px)")
				}
			},
			setTransition: function (e) {
				var t = this,
					n = t.slides,
					i = t.$wrapperEl;
				if (n.transition(e), t.params.virtualTranslate && 0 !== e) {
					var r = !1;
					n.transitionEnd(function () {
						if (!r && t && !t.destroyed) {
							r = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) i.trigger(e[n])
						}
					})
				}
			}
		},
		J = {
			setTranslate: function () {
				var t, n = this,
					i = n.$el,
					r = n.$wrapperEl,
					a = n.slides,
					s = n.width,
					o = n.height,
					l = n.rtlTranslate,
					u = n.size,
					c = n.params.cubeEffect,
					d = n.isHorizontal(),
					p = n.virtual && n.params.virtual.enabled,
					h = 0;
				c.shadow && (d ? (0 === (t = r.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), r.append(t)), t.css({
					height: s + "px"
				})) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)));
				for (var v = 0; v < a.length; v += 1) {
					var m = a.eq(v),
						g = v;
					p && (g = parseInt(m.attr("data-swiper-slide-index"), 10));
					var y = 90 * g,
						b = Math.floor(y / 360);
					l && (y = -y, b = Math.floor(-y / 360));
					var w = Math.max(Math.min(m[0].progress, 1), -1),
						x = 0,
						T = 0,
						E = 0;
					g % 4 == 0 ? (x = 4 * -b * u, E = 0) : (g - 1) % 4 == 0 ? (x = 0, E = 4 * -b * u) : (g - 2) % 4 == 0 ? (x = u + 4 * b * u, E = u) : (g - 3) % 4 == 0 && (x = -u, E = 3 * u + 4 * u * b), l && (x = -x), d || (T = x, x = 0);
					var C = "rotateX(" + (d ? 0 : -y) + "deg) rotateY(" + (d ? y : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";
					if (w <= 1 && w > -1 && (h = 90 * g + 90 * w, l && (h = 90 * -g - 90 * w)), m.transform(C), c.slideShadows) {
						var S = d ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
							k = d ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
						0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), m.append(S)), 0 === k.length && (k = e('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), m.append(k)), S.length && (S[0].style.opacity = Math.max(-w, 0)), k.length && (k[0].style.opacity = Math.max(w, 0))
					}
				}
				if (r.css({
						"-webkit-transform-origin": "50% 50% -" + u / 2 + "px",
						"-moz-transform-origin": "50% 50% -" + u / 2 + "px",
						"-ms-transform-origin": "50% 50% -" + u / 2 + "px",
						"transform-origin": "50% 50% -" + u / 2 + "px"
					}), c.shadow)
					if (d) t.transform("translate3d(0px, " + (s / 2 + c.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + c.shadowScale + ")");
					else {
						var M = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
							I = 1.5 - (Math.sin(2 * M * Math.PI / 360) / 2 + Math.cos(2 * M * Math.PI / 360) / 2),
							L = c.shadowScale,
							P = c.shadowScale / I,
							D = c.shadowOffset;
						t.transform("scale3d(" + L + ", 1, " + P + ") translate3d(0px, " + (o / 2 + D) + "px, " + -o / 2 / P + "px) rotateX(-90deg)")
					}
				var O = f.isSafari || f.isUiWebView ? -u / 2 : 0;
				r.transform("translate3d(0px,0," + O + "px) rotateX(" + (n.isHorizontal() ? 0 : h) + "deg) rotateY(" + (n.isHorizontal() ? -h : 0) + "deg)")
			},
			setTransition: function (e) {
				var t = this,
					n = t.$el;
				t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && n.find(".swiper-cube-shadow").transition(e)
			}
		},
		Z = {
			setTranslate: function () {
				for (var t = this, n = t.slides, i = t.rtlTranslate, r = 0; r < n.length; r += 1) {
					var a = n.eq(r),
						s = a[0].progress;
					t.params.flipEffect.limitRotation && (s = Math.max(Math.min(a[0].progress, 1), -1));
					var o = -180 * s,
						l = 0,
						u = -a[0].swiperSlideOffset,
						c = 0;
					if (t.isHorizontal() ? i && (o = -o) : (c = u, u = 0, l = -o, o = 0), a[0].style.zIndex = -Math.abs(Math.round(s)) + n.length, t.params.flipEffect.slideShadows) {
						var d = t.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top"),
							p = t.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
						0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>'), a.append(d)), 0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>'), a.append(p)), d.length && (d[0].style.opacity = Math.max(-s, 0)), p.length && (p[0].style.opacity = Math.max(s, 0))
					}
					a.transform("translate3d(" + u + "px, " + c + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
				}
			},
			setTransition: function (e) {
				var t = this,
					n = t.slides,
					i = t.activeIndex,
					r = t.$wrapperEl;
				if (n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
					var a = !1;
					n.eq(i).transitionEnd(function () {
						if (!a && t && !t.destroyed) {
							a = !0, t.animating = !1;
							for (var e = ["webkitTransitionEnd", "transitionend"], n = 0; n < e.length; n += 1) r.trigger(e[n])
						}
					})
				}
			}
		},
		ee = {
			setTranslate: function () {
				for (var t = this, n = t.width, i = t.height, r = t.slides, a = t.$wrapperEl, s = t.slidesSizesGrid, o = t.params.coverflowEffect, l = t.isHorizontal(), u = t.translate, c = l ? n / 2 - u : i / 2 - u, d = l ? o.rotate : -o.rotate, p = o.depth, f = 0, v = r.length; f < v; f += 1) {
					var m = r.eq(f),
						g = s[f],
						y = (c - m[0].swiperSlideOffset - g / 2) / g * o.modifier,
						b = l ? d * y : 0,
						w = l ? 0 : d * y,
						x = -p * Math.abs(y),
						T = l ? 0 : o.stretch * y,
						E = l ? o.stretch * y : 0;
					Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(x) < .001 && (x = 0), Math.abs(b) < .001 && (b = 0), Math.abs(w) < .001 && (w = 0);
					var C = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
					if (m.transform(C), m[0].style.zIndex = 1 - Math.abs(Math.round(y)), o.slideShadows) {
						var S = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
							k = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
						0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(S)), 0 === k.length && (k = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append(k)), S.length && (S[0].style.opacity = y > 0 ? y : 0), k.length && (k[0].style.opacity = -y > 0 ? -y : 0)
					}
				}(h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = c + "px 50%")
			},
			setTransition: function (e) {
				this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
			}
		},
		te = {
			init: function () {
				var e = this,
					t = e.params.thumbs,
					n = e.constructor;
				t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, p.extend(e.thumbs.swiper.originalParams, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				}), p.extend(e.thumbs.swiper.params, {
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})) : p.isObject(t.swiper) && (e.thumbs.swiper = new n(p.extend({}, t.swiper, {
					watchSlidesVisibility: !0,
					watchSlidesProgress: !0,
					slideToClickedSlide: !1
				})), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
			},
			onThumbClick: function () {
				var t = this,
					n = t.thumbs.swiper;
				if (n) {
					var i = n.clickedIndex,
						r = n.clickedSlide;
					if (!(r && e(r).hasClass(t.params.thumbs.slideThumbActiveClass) || void 0 === i || null === i)) {
						var a;
						if (a = n.params.loop ? parseInt(e(n.clickedSlide).attr("data-swiper-slide-index"), 10) : i, t.params.loop) {
							var s = t.activeIndex;
							t.slides.eq(s).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, s = t.activeIndex);
							var o = t.slides.eq(s).prevAll('[data-swiper-slide-index="' + a + '"]').eq(0).index(),
								l = t.slides.eq(s).nextAll('[data-swiper-slide-index="' + a + '"]').eq(0).index();
							a = void 0 === o ? l : void 0 === l ? o : l - s < s - o ? l : o
						}
						t.slideTo(a)
					}
				}
			},
			update: function (e) {
				var t = this,
					n = t.thumbs.swiper;
				if (n) {
					var i = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView;
					if (t.realIndex !== n.realIndex) {
						var r, a = n.activeIndex;
						if (n.params.loop) {
							n.slides.eq(a).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, a = n.activeIndex);
							var s = n.slides.eq(a).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
								o = n.slides.eq(a).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
							r = void 0 === s ? o : void 0 === o ? s : o - a == a - s ? a : o - a < a - s ? o : s
						} else r = t.realIndex;
						n.visibleSlidesIndexes.indexOf(r) < 0 && (n.params.centeredSlides ? r = r > a ? r - Math.floor(i / 2) + 1 : r + Math.floor(i / 2) - 1 : r > a && (r = r - i + 1), n.slideTo(r, e ? 0 : void 0))
					}
					var l = 1,
						u = t.params.thumbs.slideThumbActiveClass;
					if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (l = t.params.slidesPerView), n.slides.removeClass(u), n.params.loop)
						for (var c = 0; c < l; c += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(u);
					else
						for (var d = 0; d < l; d += 1) n.slides.eq(t.realIndex + d).addClass(u)
				}
			}
		},
		ne = [L, P, D, O, z, $, j, {
			name: "mousewheel",
			params: {
				mousewheel: {
					enabled: !1,
					releaseOnEdges: !1,
					invert: !1,
					forceToAxis: !1,
					sensitivity: 1,
					eventsTarged: "container"
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					mousewheel: {
						enabled: !1,
						enable: F.enable.bind(e),
						disable: F.disable.bind(e),
						handle: F.handle.bind(e),
						handleMouseEnter: F.handleMouseEnter.bind(e),
						handleMouseLeave: F.handleMouseLeave.bind(e),
						lastScrollTime: p.now()
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.mousewheel.enabled && e.mousewheel.enable()
				},
				destroy: function () {
					var e = this;
					e.mousewheel.enabled && e.mousewheel.disable()
				}
			}
		}, {
			name: "navigation",
			params: {
				navigation: {
					nextEl: null,
					prevEl: null,
					hideOnClick: !1,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
					lockClass: "swiper-button-lock"
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					navigation: {
						init: q.init.bind(e),
						update: q.update.bind(e),
						destroy: q.destroy.bind(e),
						onNextClick: q.onNextClick.bind(e),
						onPrevClick: q.onPrevClick.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.navigation.init(), e.navigation.update()
				},
				toEdge: function () {
					this.navigation.update()
				},
				fromEdge: function () {
					this.navigation.update()
				},
				destroy: function () {
					this.navigation.destroy()
				},
				click: function (t) {
					var n = this,
						i = n.navigation,
						r = i.$nextEl,
						a = i.$prevEl;
					if (n.params.navigation.hideOnClick && !e(t.target).is(a) && !e(t.target).is(r)) {
						var s;
						r ? s = r.hasClass(n.params.navigation.hiddenClass) : a && (s = a.hasClass(n.params.navigation.hiddenClass)), !0 === s ? n.emit("navigationShow", n) : n.emit("navigationHide", n), r && r.toggleClass(n.params.navigation.hiddenClass), a && a.toggleClass(n.params.navigation.hiddenClass)
					}
				}
			}
		}, {
			name: "pagination",
			params: {
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
					formatFractionCurrent: function (e) {
						return e
					},
					formatFractionTotal: function (e) {
						return e
					},
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					modifierClass: "swiper-pagination-",
					currentClass: "swiper-pagination-current",
					totalClass: "swiper-pagination-total",
					hiddenClass: "swiper-pagination-hidden",
					progressbarFillClass: "swiper-pagination-progressbar-fill",
					progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
					clickableClass: "swiper-pagination-clickable",
					lockClass: "swiper-pagination-lock"
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					pagination: {
						init: B.init.bind(e),
						render: B.render.bind(e),
						update: B.update.bind(e),
						destroy: B.destroy.bind(e),
						dynamicBulletIndex: 0
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.pagination.init(), e.pagination.render(), e.pagination.update()
				},
				activeIndexChange: function () {
					var e = this;
					e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
				},
				snapIndexChange: function () {
					var e = this;
					e.params.loop || e.pagination.update()
				},
				slidesLengthChange: function () {
					var e = this;
					e.params.loop && (e.pagination.render(), e.pagination.update())
				},
				snapGridLengthChange: function () {
					var e = this;
					e.params.loop || (e.pagination.render(), e.pagination.update())
				},
				destroy: function () {
					this.pagination.destroy()
				},
				click: function (t) {
					var n = this;
					n.params.pagination.el && n.params.pagination.hideOnClick && n.pagination.$el.length > 0 && !e(t.target).hasClass(n.params.pagination.bulletClass) && (!0 === n.pagination.$el.hasClass(n.params.pagination.hiddenClass) ? n.emit("paginationShow", n) : n.emit("paginationHide", n), n.pagination.$el.toggleClass(n.params.pagination.hiddenClass))
				}
			}
		}, {
			name: "scrollbar",
			params: {
				scrollbar: {
					el: null,
					dragSize: "auto",
					hide: !1,
					draggable: !1,
					snapOnRelease: !0,
					lockClass: "swiper-scrollbar-lock",
					dragClass: "swiper-scrollbar-drag"
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					scrollbar: {
						init: V.init.bind(e),
						destroy: V.destroy.bind(e),
						updateSize: V.updateSize.bind(e),
						setTranslate: V.setTranslate.bind(e),
						setTransition: V.setTransition.bind(e),
						enableDraggable: V.enableDraggable.bind(e),
						disableDraggable: V.disableDraggable.bind(e),
						setDragPosition: V.setDragPosition.bind(e),
						onDragStart: V.onDragStart.bind(e),
						onDragMove: V.onDragMove.bind(e),
						onDragEnd: V.onDragEnd.bind(e),
						isTouched: !1,
						timeout: null,
						dragTimeout: null
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
				},
				update: function () {
					this.scrollbar.updateSize()
				},
				resize: function () {
					this.scrollbar.updateSize()
				},
				observerUpdate: function () {
					this.scrollbar.updateSize()
				},
				setTranslate: function () {
					this.scrollbar.setTranslate()
				},
				setTransition: function (e) {
					this.scrollbar.setTransition(e)
				},
				destroy: function () {
					this.scrollbar.destroy()
				}
			}
		}, {
			name: "parallax",
			params: {
				parallax: {
					enabled: !1
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					parallax: {
						setTransform: R.setTransform.bind(e),
						setTranslate: R.setTranslate.bind(e),
						setTransition: R.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
				},
				init: function () {
					var e = this;
					e.params.parallax.enabled && e.parallax.setTranslate()
				},
				setTranslate: function () {
					var e = this;
					e.params.parallax.enabled && e.parallax.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					t.params.parallax.enabled && t.parallax.setTransition(e)
				}
			}
		}, {
			name: "zoom",
			params: {
				zoom: {
					enabled: !1,
					maxRatio: 3,
					minRatio: 1,
					toggle: !0,
					containerClass: "swiper-zoom-container",
					zoomedSlideClass: "swiper-slide-zoomed"
				}
			},
			create: function () {
				var e = this,
					t = {
						enabled: !1,
						scale: 1,
						currentScale: 1,
						isScaling: !1,
						gesture: {
							$slideEl: void 0,
							slideWidth: void 0,
							slideHeight: void 0,
							$imageEl: void 0,
							$imageWrapEl: void 0,
							maxRatio: 3
						},
						image: {
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
						velocity: {
							x: void 0,
							y: void 0,
							prevPositionX: void 0,
							prevPositionY: void 0,
							prevTime: void 0
						}
					};
				"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (n) {
					t[n] = _[n].bind(e)
				}), p.extend(e, {
					zoom: t
				});
				var n = 1;
				Object.defineProperty(e.zoom, "scale", {
					get: function () {
						return n
					},
					set: function (t) {
						if (n !== t) {
							var i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
								r = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
							e.emit("zoomChange", t, i, r)
						}
						n = t
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.zoom.enabled && e.zoom.enable()
				},
				destroy: function () {
					this.zoom.disable()
				},
				touchStart: function (e) {
					var t = this;
					t.zoom.enabled && t.zoom.onTouchStart(e)
				},
				touchEnd: function (e) {
					var t = this;
					t.zoom.enabled && t.zoom.onTouchEnd(e)
				},
				doubleTap: function (e) {
					var t = this;
					t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
				},
				transitionEnd: function () {
					var e = this;
					e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
				}
			}
		}, {
			name: "lazy",
			params: {
				lazy: {
					enabled: !1,
					loadPrevNext: !1,
					loadPrevNextAmount: 1,
					loadOnTransitionStart: !1,
					elementClass: "swiper-lazy",
					loadingClass: "swiper-lazy-loading",
					loadedClass: "swiper-lazy-loaded",
					preloaderClass: "swiper-lazy-preloader"
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					lazy: {
						initialImageLoaded: !1,
						load: W.load.bind(e),
						loadInSlide: W.loadInSlide.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
				},
				init: function () {
					var e = this;
					e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
				},
				scroll: function () {
					var e = this;
					e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
				},
				resize: function () {
					var e = this;
					e.params.lazy.enabled && e.lazy.load()
				},
				scrollbarDragMove: function () {
					var e = this;
					e.params.lazy.enabled && e.lazy.load()
				},
				transitionStart: function () {
					var e = this;
					e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
				},
				transitionEnd: function () {
					var e = this;
					e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
				}
			}
		}, {
			name: "controller",
			params: {
				controller: {
					control: void 0,
					inverse: !1,
					by: "slide"
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					controller: {
						control: e.params.controller.control,
						getInterpolateFunction: X.getInterpolateFunction.bind(e),
						setTranslate: X.setTranslate.bind(e),
						setTransition: X.setTransition.bind(e)
					}
				})
			},
			on: {
				update: function () {
					var e = this;
					e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
				},
				resize: function () {
					var e = this;
					e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
				},
				observerUpdate: function () {
					var e = this;
					e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
				},
				setTranslate: function (e, t) {
					var n = this;
					n.controller.control && n.controller.setTranslate(e, t)
				},
				setTransition: function (e, t) {
					var n = this;
					n.controller.control && n.controller.setTransition(e, t)
				}
			}
		}, {
			name: "a11y",
			params: {
				a11y: {
					enabled: !0,
					notificationClass: "swiper-notification",
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}"
				}
			},
			create: function () {
				var t = this;
				p.extend(t, {
					a11y: {
						liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
					}
				}), Object.keys(Y).forEach(function (e) {
					t.a11y[e] = Y[e].bind(t)
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
				},
				toEdge: function () {
					var e = this;
					e.params.a11y.enabled && e.a11y.updateNavigation()
				},
				fromEdge: function () {
					var e = this;
					e.params.a11y.enabled && e.a11y.updateNavigation()
				},
				paginationUpdate: function () {
					var e = this;
					e.params.a11y.enabled && e.a11y.updatePagination()
				},
				destroy: function () {
					var e = this;
					e.params.a11y.enabled && e.a11y.destroy()
				}
			}
		}, {
			name: "history",
			params: {
				history: {
					enabled: !1,
					replaceState: !1,
					key: "slides"
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					history: {
						init: G.init.bind(e),
						setHistory: G.setHistory.bind(e),
						setHistoryPopState: G.setHistoryPopState.bind(e),
						scrollToSlide: G.scrollToSlide.bind(e),
						destroy: G.destroy.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.history.enabled && e.history.init()
				},
				destroy: function () {
					var e = this;
					e.params.history.enabled && e.history.destroy()
				},
				transitionEnd: function () {
					var e = this;
					e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
				}
			}
		}, {
			name: "hash-navigation",
			params: {
				hashNavigation: {
					enabled: !1,
					replaceState: !1,
					watchState: !1
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					hashNavigation: {
						initialized: !1,
						init: U.init.bind(e),
						destroy: U.destroy.bind(e),
						setHash: U.setHash.bind(e),
						onHashCange: U.onHashCange.bind(e)
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.hashNavigation.enabled && e.hashNavigation.init()
				},
				destroy: function () {
					var e = this;
					e.params.hashNavigation.enabled && e.hashNavigation.destroy()
				},
				transitionEnd: function () {
					var e = this;
					e.hashNavigation.initialized && e.hashNavigation.setHash()
				}
			}
		}, {
			name: "autoplay",
			params: {
				autoplay: {
					enabled: !1,
					delay: 3e3,
					waitForTransition: !0,
					disableOnInteraction: !0,
					stopOnLastSlide: !1,
					reverseDirection: !1
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					autoplay: {
						running: !1,
						paused: !1,
						run: Q.run.bind(e),
						start: Q.start.bind(e),
						stop: Q.stop.bind(e),
						pause: Q.pause.bind(e),
						onTransitionEnd: function (t) {
							e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
						}
					}
				})
			},
			on: {
				init: function () {
					var e = this;
					e.params.autoplay.enabled && e.autoplay.start()
				},
				beforeTransitionStart: function (e, t) {
					var n = this;
					n.autoplay.running && (t || !n.params.autoplay.disableOnInteraction ? n.autoplay.pause(e) : n.autoplay.stop())
				},
				sliderFirstMove: function () {
					var e = this;
					e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
				},
				destroy: function () {
					var e = this;
					e.autoplay.running && e.autoplay.stop()
				}
			}
		}, {
			name: "effect-fade",
			params: {
				fadeEffect: {
					crossFade: !1
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					fadeEffect: {
						setTranslate: K.setTranslate.bind(e),
						setTransition: K.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if ("fade" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "fade");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						p.extend(e.params, t), p.extend(e.originalParams, t)
					}
				},
				setTranslate: function () {
					var e = this;
					"fade" === e.params.effect && e.fadeEffect.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					"fade" === t.params.effect && t.fadeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-cube",
			params: {
				cubeEffect: {
					slideShadows: !0,
					shadow: !0,
					shadowOffset: 20,
					shadowScale: .94
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					cubeEffect: {
						setTranslate: J.setTranslate.bind(e),
						setTransition: J.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if ("cube" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							resistanceRatio: 0,
							spaceBetween: 0,
							centeredSlides: !1,
							virtualTranslate: !0
						};
						p.extend(e.params, t), p.extend(e.originalParams, t)
					}
				},
				setTranslate: function () {
					var e = this;
					"cube" === e.params.effect && e.cubeEffect.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					"cube" === t.params.effect && t.cubeEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-flip",
			params: {
				flipEffect: {
					slideShadows: !0,
					limitRotation: !0
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					flipEffect: {
						setTranslate: Z.setTranslate.bind(e),
						setTransition: Z.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					if ("flip" === e.params.effect) {
						e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
						var t = {
							slidesPerView: 1,
							slidesPerColumn: 1,
							slidesPerGroup: 1,
							watchSlidesProgress: !0,
							spaceBetween: 0,
							virtualTranslate: !0
						};
						p.extend(e.params, t), p.extend(e.originalParams, t)
					}
				},
				setTranslate: function () {
					var e = this;
					"flip" === e.params.effect && e.flipEffect.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					"flip" === t.params.effect && t.flipEffect.setTransition(e)
				}
			}
		}, {
			name: "effect-coverflow",
			params: {
				coverflowEffect: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: !0
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					coverflowEffect: {
						setTranslate: ee.setTranslate.bind(e),
						setTransition: ee.setTransition.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this;
					"coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
				},
				setTranslate: function () {
					var e = this;
					"coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
				},
				setTransition: function (e) {
					var t = this;
					"coverflow" === t.params.effect && t.coverflowEffect.setTransition(e)
				}
			}
		}, {
			name: "thumbs",
			params: {
				thumbs: {
					swiper: null,
					slideThumbActiveClass: "swiper-slide-thumb-active",
					thumbsContainerClass: "swiper-container-thumbs"
				}
			},
			create: function () {
				var e = this;
				p.extend(e, {
					thumbs: {
						swiper: null,
						init: te.init.bind(e),
						update: te.update.bind(e),
						onThumbClick: te.onThumbClick.bind(e)
					}
				})
			},
			on: {
				beforeInit: function () {
					var e = this,
						t = e.params.thumbs;
					t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
				},
				slideChange: function () {
					var e = this;
					e.thumbs.swiper && e.thumbs.update()
				},
				update: function () {
					var e = this;
					e.thumbs.swiper && e.thumbs.update()
				},
				resize: function () {
					var e = this;
					e.thumbs.swiper && e.thumbs.update()
				},
				observerUpdate: function () {
					var e = this;
					e.thumbs.swiper && e.thumbs.update()
				},
				setTransition: function (e) {
					var t = this.thumbs.swiper;
					t && t.setTransition(e)
				},
				beforeDestroy: function () {
					var e = this,
						t = e.thumbs.swiper;
					t && e.thumbs.swiperCreated && t && t.destroy()
				}
			}
		}];
	return void 0 === I.use && (I.use = I.Class.use, I.installModule = I.Class.installModule), I.use(ne), I
}),
function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("scrollMonitor", [], t) : "object" == typeof exports ? exports.scrollMonitor = t() : e.scrollMonitor = t()
}(this, function () {
	return function (e) {
		function t(i) {
			if (n[i]) return n[i].exports;
			var r = n[i] = {
				exports: {},
				id: i,
				loaded: !1
			};
			return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.p = "", t(0)
	}([function (e, t, n) {
		"use strict";
		var i = n(1).isInBrowser,
			r = new(n(2))(i ? document.body : null);
		r.setStateFromDOM(null), r.listenToDOM(), i && (window.scrollMonitor = r), e.exports = r
	}, function (e, t) {
		"use strict";
		t.VISIBILITYCHANGE = "visibilityChange", t.ENTERVIEWPORT = "enterViewport", t.FULLYENTERVIEWPORT = "fullyEnterViewport", t.EXITVIEWPORT = "exitViewport", t.PARTIALLYEXITVIEWPORT = "partiallyExitViewport", t.LOCATIONCHANGE = "locationChange", t.STATECHANGE = "stateChange", t.eventTypes = [t.VISIBILITYCHANGE, t.ENTERVIEWPORT, t.FULLYENTERVIEWPORT, t.EXITVIEWPORT, t.PARTIALLYEXITVIEWPORT, t.LOCATIONCHANGE, t.STATECHANGE], t.isOnServer = "undefined" == typeof window, t.isInBrowser = !t.isOnServer, t.defaultOffsets = {
			top: 0,
			bottom: 0
		}
	}, function (e, t, n) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function r(e) {
			return l ? 0 : e === document.body ? window.innerHeight || document.documentElement.clientHeight : e.clientHeight
		}

		function a(e) {
			return l ? 0 : e === document.body ? Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight) : e.scrollHeight
		}

		function s(e) {
			return l ? 0 : e === document.body ? window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop
		}
		var o = n(1),
			l = o.isOnServer,
			u = o.isInBrowser,
			c = o.eventTypes,
			d = n(3),
			p = !1;
		if (u) try {
			var h = Object.defineProperty({}, "passive", {
				get: function () {
					p = !0
				}
			});
			window.addEventListener("test", null, h)
		} catch (e) {}
		var f = !!p && {
				capture: !1,
				passive: !0
			},
			v = function () {
				function e(t, n) {
					function o() {
						if (u.viewportTop = s(t), u.viewportBottom = u.viewportTop + u.viewportHeight, u.documentHeight = a(t), u.documentHeight !== d) {
							for (p = u.watchers.length; p--;) u.watchers[p].recalculateLocation();
							d = u.documentHeight
						}
					}

					function l() {
						for (h = u.watchers.length; h--;) u.watchers[h].update();
						for (h = u.watchers.length; h--;) u.watchers[h].triggerCallbacks()
					}
					i(this, e);
					var u = this;
					this.item = t, this.watchers = [], this.viewportTop = null, this.viewportBottom = null, this.documentHeight = a(t), this.viewportHeight = r(t), this.DOMListener = function () {
						e.prototype.DOMListener.apply(u, arguments)
					}, this.eventTypes = c, n && (this.containerWatcher = n.create(t));
					var d, p, h;
					this.update = function () {
						o(), l()
					}, this.recalculateLocations = function () {
						this.documentHeight = 0, this.update()
					}
				}
				return e.prototype.listenToDOM = function () {
					u && (window.addEventListener ? (this.item === document.body ? window.addEventListener("scroll", this.DOMListener, f) : this.item.addEventListener("scroll", this.DOMListener, f), window.addEventListener("resize", this.DOMListener)) : (this.item === document.body ? window.attachEvent("onscroll", this.DOMListener) : this.item.attachEvent("onscroll", this.DOMListener), window.attachEvent("onresize", this.DOMListener)), this.destroy = function () {
						window.addEventListener ? (this.item === document.body ? (window.removeEventListener("scroll", this.DOMListener, f), this.containerWatcher.destroy()) : this.item.removeEventListener("scroll", this.DOMListener, f), window.removeEventListener("resize", this.DOMListener)) : (this.item === document.body ? (window.detachEvent("onscroll", this.DOMListener), this.containerWatcher.destroy()) : this.item.detachEvent("onscroll", this.DOMListener), window.detachEvent("onresize", this.DOMListener))
					})
				}, e.prototype.destroy = function () {}, e.prototype.DOMListener = function (e) {
					this.setStateFromDOM(e)
				}, e.prototype.setStateFromDOM = function (e) {
					var t = s(this.item),
						n = r(this.item),
						i = a(this.item);
					this.setState(t, n, i, e)
				}, e.prototype.setState = function (e, t, n, i) {
					var r = t !== this.viewportHeight || n !== this.contentHeight;
					if (this.latestEvent = i, this.viewportTop = e, this.viewportHeight = t, this.viewportBottom = e + t, this.contentHeight = n, r)
						for (var a = this.watchers.length; a--;) this.watchers[a].recalculateLocation();
					this.updateAndTriggerWatchers(i)
				}, e.prototype.updateAndTriggerWatchers = function (e) {
					for (var t = this.watchers.length; t--;) this.watchers[t].update();
					for (t = this.watchers.length; t--;) this.watchers[t].triggerCallbacks(e)
				}, e.prototype.createCustomContainer = function () {
					return new e
				}, e.prototype.createContainer = function (t) {
					"string" == typeof t ? t = document.querySelector(t) : t && t.length > 0 && (t = t[0]);
					var n = new e(t, this);
					return n.setStateFromDOM(), n.listenToDOM(), n
				}, e.prototype.create = function (e, t) {
					"string" == typeof e ? e = document.querySelector(e) : e && e.length > 0 && (e = e[0]);
					var n = new d(this, e, t);
					return this.watchers.push(n), n
				}, e.prototype.beget = function (e, t) {
					return this.create(e, t)
				}, e
			}();
		e.exports = v
	}, function (e, t, n) {
		"use strict";

		function i(e, t, n) {
			function i(e, t) {
				if (0 !== e.length)
					for (w = e.length; w--;)(x = e[w]).callback.call(r, t, r), x.isOne && e.splice(w, 1)
			}
			var r = this;
			this.watchItem = t, this.container = e, this.offsets = n ? n === +n ? {
				top: n,
				bottom: n
			} : {
				top: n.top || h.top,
				bottom: n.bottom || h.bottom
			} : h, this.callbacks = {};
			for (var f = 0, v = p.length; f < v; f++) r.callbacks[p[f]] = [];
			this.locked = !1;
			var m, g, y, b, w, x;
			this.triggerCallbacks = function (e) {
				switch (this.isInViewport && !m && i(this.callbacks[s], e), this.isFullyInViewport && !g && i(this.callbacks[o], e), this.isAboveViewport !== y && this.isBelowViewport !== b && (i(this.callbacks[a], e), g || this.isFullyInViewport || (i(this.callbacks[o], e), i(this.callbacks[u], e)), m || this.isInViewport || (i(this.callbacks[s], e), i(this.callbacks[l], e))), !this.isFullyInViewport && g && i(this.callbacks[u], e), !this.isInViewport && m && i(this.callbacks[l], e), this.isInViewport !== m && i(this.callbacks[a], e), !0) {
					case m !== this.isInViewport:
					case g !== this.isFullyInViewport:
					case y !== this.isAboveViewport:
					case b !== this.isBelowViewport:
						i(this.callbacks[d], e)
				}
				m = this.isInViewport, g = this.isFullyInViewport, y = this.isAboveViewport, b = this.isBelowViewport
			}, this.recalculateLocation = function () {
				if (!this.locked) {
					var e = this.top,
						t = this.bottom;
					if (this.watchItem.nodeName) {
						var n = this.watchItem.style.display;
						"none" === n && (this.watchItem.style.display = "");
						for (var r = 0, a = this.container; a.containerWatcher;) r += a.containerWatcher.top - a.containerWatcher.container.viewportTop, a = a.containerWatcher.container;
						var s = this.watchItem.getBoundingClientRect();
						this.top = s.top + this.container.viewportTop - r, this.bottom = s.bottom + this.container.viewportTop - r, "none" === n && (this.watchItem.style.display = n)
					} else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = this.container.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
					this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === e && void 0 === t || this.top === e && this.bottom === t || i(this.callbacks[c], null)
				}
			}, this.recalculateLocation(), this.update(), m = this.isInViewport, g = this.isFullyInViewport, y = this.isAboveViewport, b = this.isBelowViewport
		}
		var r = n(1),
			a = r.VISIBILITYCHANGE,
			s = r.ENTERVIEWPORT,
			o = r.FULLYENTERVIEWPORT,
			l = r.EXITVIEWPORT,
			u = r.PARTIALLYEXITVIEWPORT,
			c = r.LOCATIONCHANGE,
			d = r.STATECHANGE,
			p = r.eventTypes,
			h = r.defaultOffsets;
		i.prototype = {
			on: function (e, t, n) {
				switch (!0) {
					case e === a && !this.isInViewport && this.isAboveViewport:
					case e === s && this.isInViewport:
					case e === o && this.isFullyInViewport:
					case e === l && this.isAboveViewport && !this.isInViewport:
					case e === u && this.isInViewport && this.isAboveViewport:
						if (t.call(this, this.container.latestEvent, this), n) return
				}
				if (!this.callbacks[e]) throw new Error("Tried to add a scroll monitor listener of type " + e + ". Your options are: " + p.join(", "));
				this.callbacks[e].push({
					callback: t,
					isOne: n || !1
				})
			},
			off: function (e, t) {
				if (!this.callbacks[e]) throw new Error("Tried to remove a scroll monitor listener of type " + e + ". Your options are: " + p.join(", "));
				for (var n, i = 0; n = this.callbacks[e][i]; i++)
					if (n.callback === t) {
						this.callbacks[e].splice(i, 1);
						break
					}
			},
			one: function (e, t) {
				this.on(e, t, !0)
			},
			recalculateSize: function () {
				this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height
			},
			update: function () {
				this.isAboveViewport = this.top < this.container.viewportTop, this.isBelowViewport = this.bottom > this.container.viewportBottom, this.isInViewport = this.top < this.container.viewportBottom && this.bottom > this.container.viewportTop, this.isFullyInViewport = this.top >= this.container.viewportTop && this.bottom <= this.container.viewportBottom || this.isAboveViewport && this.isBelowViewport
			},
			destroy: function () {
				var e = this.container.watchers.indexOf(this),
					t = this;
				this.container.watchers.splice(e, 1);
				for (var n = 0, i = p.length; n < i; n++) t.callbacks[p[n]].length = 0
			},
			lock: function () {
				this.locked = !0
			},
			unlock: function () {
				this.locked = !1
			}
		};
		for (var f = 0, v = p.length; f < v; f++) {
			var m = p[f];
			i.prototype[m] = function (e) {
				return function (t, n) {
					this.on.call(this, e, t, n)
				}
			}(m)
		}
		e.exports = i
	}])
}),
function (e, t) {
	if ("function" == typeof define && define.amd) define(["exports"], t);
	else if ("undefined" != typeof exports) t(exports);
	else {
		var n = {
			exports: {}
		};
		t(n.exports), e.bodyScrollLock = n.exports
	}
}(this, function (e) {
	"use strict";

	function t(e) {
		if (Array.isArray(e)) {
			for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
			return n
		}
		return Array.from(e)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var n = !1;
	if ("undefined" != typeof window) {
		var i = {
			get passive() {
				n = !0
			}
		};
		window.addEventListener("testPassive", null, i), window.removeEventListener("testPassive", null, i)
	}
	var r = "undefined" != typeof window && window.navigator && window.navigator.platform && /iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(window.navigator.platform),
		a = null,
		s = [],
		o = !1,
		l = -1,
		u = void 0,
		c = void 0,
		d = void 0,
		p = !1,
		h = function (e) {
			var t = e || window.event;
			return t.preventDefault && t.preventDefault(), !1
		},
		f = function (e) {
			setTimeout(function () {
				if (d = document.documentElement.clientWidth, void 0 === c) {
					var t = !!e && !0 === e.reserveScrollBarGap,
						n = window.innerWidth - document.documentElement.clientWidth;
					t && n > 0 && (c = document.body.style.paddingRight, document.body.style.paddingRight = n + "px", $("#nav,header#header,#nav-overlay-content .content,.loader,.scroll-container .scroll-wrapper.on,section.case-study-next-project,.document-overlay,.loader-preloader,#nav footer").css("width", "calc(100% - " + n + "px)"), $("a.scroll-top").css("margin-right", n + "px"), -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome") && 0 == p && (mediaQueriesHelper.init(document.documentElement.clientWidth - d), p = !0))
				}
				void 0 === u && (u = document.body.style.overflow, document.body.style.overflow = "hidden")
			})
		},
		v = function () {
			setTimeout(function () {
				void 0 !== c && (document.body.style.paddingRight = c, $("#nav,header#header,#nav-overlay-content .content,.loader,.scroll-container .scroll-wrapper.on,section.case-study-next-project,.document-overlay,.loader-preloader,#nav footer").css("width", "100%"), $("a.scroll-top").css("margin-right", "auto"), c = void 0), void 0 !== u && (document.body.style.overflow = u, u = void 0)
			})
		},
		m = function (e) {
			return !!e && e.scrollHeight - e.scrollTop <= e.clientHeight
		},
		g = function (e, t) {
			var n = e.targetTouches[0].clientY - l;
			return t && 0 === t.scrollTop && n > 0 ? h(e) : m(t) && n < 0 ? h(e) : (e.stopPropagation(), !0)
		};
	e.disableBodyScroll = function (e, i) {
		r ? e && !s.includes(e) && (s = [].concat(t(s), [e]), e.ontouchstart = function (e) {
			1 === e.targetTouches.length && (l = e.targetTouches[0].clientY)
		}, e.ontouchmove = function (t) {
			1 === t.targetTouches.length && g(t, e)
		}, o || (document.addEventListener("touchmove", h, n ? {
			passive: !1
		} : void 0), o = !0)) : (f(i), a || (a = e))
	}, e.clearAllBodyScrollLocks = function () {
		r ? (s.forEach(function (e) {
			e.ontouchstart = null, e.ontouchmove = null
		}), o && (document.removeEventListener("touchmove", h, n ? {
			passive: !1
		} : void 0), o = !1), s = [], l = -1) : (v(), a = null)
	}, e.enableBodyScroll = function (e) {
		r ? (e.ontouchstart = null, e.ontouchmove = null, s = s.filter(function (t) {
			return t !== e
		}), o && 0 === s.length && (document.removeEventListener("touchmove", h, n ? {
			passive: !1
		} : void 0), o = !1)) : a === e && (v(), a = null)
	}
});