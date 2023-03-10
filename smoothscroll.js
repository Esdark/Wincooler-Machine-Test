// smooth scrooll

$(".sm-scroll").on("click", function () {
  if (
    location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") &&
    location.hostname === this.hostname
  ) {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top + 1,
        },
        1000,
        "easeInOutExpo"
      );
      return false;
    }
  }
});

// end of smooth scrool

/*! modernizr 3.0.0-alpha.3 (Custom Build) | MIT *
 * http://v3.modernizr.com/download/#-csscolumns-flexbox !*/
!(function (e, n, t) {
  function r(e, n) {
    return typeof e === n;
  }
  function o() {
    var e, n, t, o, i, s, l;
    for (var a in g) {
      if (
        ((e = []),
        (n = g[a]),
        n.name &&
          (e.push(n.name.toLowerCase()),
          n.options && n.options.aliases && n.options.aliases.length))
      )
        for (t = 0; t < n.options.aliases.length; t++)
          e.push(n.options.aliases[t].toLowerCase());
      for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++)
        (s = e[i]),
          (l = s.split(".")),
          1 === l.length
            ? (Modernizr[l[0]] = o)
            : (!Modernizr[l[0]] ||
                Modernizr[l[0]] instanceof Boolean ||
                (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])),
              (Modernizr[l[0]][l[1]] = o)),
          h.push((o ? "" : "no-") + l.join("-"));
    }
  }
  function i(e) {
    var n = _.className,
      t = Modernizr._config.classPrefix || "";
    if (Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
      n = n.replace(r, "$1" + t + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((n += " " + t + e.join(" " + t)), (_.className = n));
  }
  function s(e, n) {
    return !!~("" + e).indexOf(n);
  }
  function l(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, n, t) {
        return n + t.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function a(e, n) {
    return function () {
      return e.apply(n, arguments);
    };
  }
  function f(e, n, t) {
    var o;
    for (var i in e)
      if (e[i] in n)
        return t === !1
          ? e[i]
          : ((o = n[e[i]]), r(o, "function") ? a(o, t || n) : o);
    return !1;
  }
  function u(e) {
    return e
      .replace(/([A-Z])/g, function (e, n) {
        return "-" + n.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function d() {
    var e = n.body;
    return e || ((e = S("body")), (e.fake = !0)), e;
  }
  function c(e, n, t, r) {
    var o,
      i,
      s,
      l,
      a = "modernizr",
      f = S("div"),
      u = d();
    if (parseInt(t, 10))
      for (; t--; )
        (s = S("div")), (s.id = r ? r[t] : a + (t + 1)), f.appendChild(s);
    return (
      (o = ["&#173;", '<style id="s', a, '">', e, "</style>"].join("")),
      (f.id = a),
      ((u.fake ? u : f).innerHTML += o),
      u.appendChild(f),
      u.fake &&
        ((u.style.background = ""),
        (u.style.overflow = "hidden"),
        (l = _.style.overflow),
        (_.style.overflow = "hidden"),
        _.appendChild(u)),
      (i = n(f, e)),
      u.fake
        ? (u.parentNode.removeChild(u), (_.style.overflow = l), _.offsetHeight)
        : f.parentNode.removeChild(f),
      !!i
    );
  }
  function p(n, r) {
    var o = n.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--; ) if (e.CSS.supports(u(n[o]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--; ) i.push("(" + u(n[o]) + ":" + r + ")");
      return (
        (i = i.join(" or ")),
        c(
          "@supports (" + i + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == getComputedStyle(e, null).position;
          }
        )
      );
    }
    return t;
  }
  function m(e, n, o, i) {
    function a() {
      u && (delete z.style, delete z.modElem);
    }
    if (((i = r(i, "undefined") ? !1 : i), !r(o, "undefined"))) {
      var f = p(e, o);
      if (!r(f, "undefined")) return f;
    }
    var u, d, c, m, v;
    for (
      z.style ||
        ((u = !0), (z.modElem = S("modernizr")), (z.style = z.modElem.style)),
        c = e.length,
        d = 0;
      c > d;
      d++
    )
      if (
        ((m = e[d]),
        (v = z.style[m]),
        s(m, "-") && (m = l(m)),
        z.style[m] !== t)
      ) {
        if (i || r(o, "undefined")) return a(), "pfx" == n ? m : !0;
        try {
          z.style[m] = o;
        } catch (y) {}
        if (z.style[m] != v) return a(), "pfx" == n ? m : !0;
      }
    return a(), !1;
  }
  function v(e, n, t, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      l = (e + " " + w.join(s + " ") + s).split(" ");
    return r(n, "string") || r(n, "undefined")
      ? m(l, n, o, i)
      : ((l = (e + " " + x.join(s + " ") + s).split(" ")), f(l, n, t));
  }
  function y(e, n, r) {
    return v(e, t, t, n, r);
  }
  var h = [],
    g = [],
    C = {
      _version: "3.0.0-alpha.3",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, n) {
        var t = this;
        setTimeout(function () {
          n(t[e]);
        }, 0);
      },
      addTest: function (e, n, t) {
        g.push({ name: e, fn: n, options: t });
      },
      addAsyncTest: function (e) {
        g.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = C), (Modernizr = new Modernizr());
  var _ = n.documentElement,
    b = "Moz O ms Webkit",
    w = C._config.usePrefixes ? b.split(" ") : [];
  C._cssomPrefixes = w;
  var x = C._config.usePrefixes ? b.toLowerCase().split(" ") : [];
  C._domPrefixes = x;
  var S = function () {
      return "function" != typeof n.createElement
        ? n.createElement(arguments[0])
        : n.createElement.apply(n, arguments);
    },
    k = { elem: S("modernizr") };
  Modernizr._q.push(function () {
    delete k.elem;
  });
  var z = { style: k.elem.style };
  Modernizr._q.unshift(function () {
    delete z.style;
  }),
    (C.testAllProps = v),
    (C.testAllProps = y),
    (function () {
      Modernizr.addTest("csscolumns", function () {
        var e = !1,
          n = y("columnCount");
        try {
          (e = !!n) && (e = new Boolean(e));
        } catch (t) {}
        return e;
      });
      for (
        var e,
          n,
          t = [
            "Width",
            "Span",
            "Fill",
            "Gap",
            "Rule",
            "RuleColor",
            "RuleStyle",
            "RuleWidth",
            "BreakBefore",
            "BreakAfter",
            "BreakInside",
          ],
          r = 0;
        r < t.length;
        r++
      )
        (e = t[r].toLowerCase()),
          (n = y("column" + t[r])),
          ("breakbefore" === e || "breakafter" === e || "breakinside" == e) &&
            (n = n || y(t[r])),
          Modernizr.addTest("csscolumns." + e, n);
    })(),
    Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)),
    o(),
    i(h),
    delete C.addTest,
    delete C.addAsyncTest;
  for (var E = 0; E < Modernizr._q.length; E++) Modernizr._q[E]();
  e.Modernizr = Modernizr;
})(window, document);
