;(function(){
var g, ba = this;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ca(a) {
  return "string" == typeof a;
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
;var ga = Array.prototype, ia = ga.indexOf ? function(a, b, c) {
  return ga.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ca(a)) {
    return ca(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
var ja, ka, la, ma;
function na() {
  return ba.navigator ? ba.navigator.userAgent : null;
}
ma = la = ka = ja = !1;
var oa;
if (oa = na()) {
  var pa = ba.navigator;
  ja = 0 == oa.lastIndexOf("Opera", 0);
  ka = !ja && (-1 != oa.indexOf("MSIE") || -1 != oa.indexOf("Trident"));
  la = !ja && -1 != oa.indexOf("WebKit");
  ma = !ja && !la && !ka && "Gecko" == pa.product;
}
var qa = ja, ra = ka, sa = ma, ta = la;
function ua() {
  var a = ba.document;
  return a ? a.documentMode : void 0;
}
var va;
a: {
  var wa = "", xa;
  if (qa && ba.opera) {
    var ya = ba.opera.version, wa = "function" == typeof ya ? ya() : ya
  } else {
    if (sa ? xa = /rv\:([^\);]+)(\)|;)/ : ra ? xa = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : ta && (xa = /WebKit\/(\S+)/), xa) {
      var za = xa.exec(na()), wa = za ? za[1] : ""
    }
  }
  if (ra) {
    var Ba = ua();
    if (Ba > parseFloat(wa)) {
      va = String(Ba);
      break a;
    }
  }
  va = wa;
}
var Ca = {};
function Da(a) {
  var b;
  if (!(b = Ca[a])) {
    b = 0;
    for (var c = String(va).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), n = RegExp("(\\d*)(\\D*)", "g");
      do {
        var p = l.exec(h) || ["", "", ""], r = n.exec(k) || ["", "", ""];
        if (0 == p[0].length && 0 == r[0].length) {
          break;
        }
        b = fa(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || fa(0 == p[2].length, 0 == r[2].length) || fa(p[2], r[2]);
      } while (0 == b);
    }
    b = Ca[a] = 0 <= b;
  }
  return b;
}
var Ea = ba.document, Fa = Ea && ra ? ua() || ("CSS1Compat" == Ea.compatMode ? parseInt(va, 10) : 5) : void 0;
!sa && !ra || ra && ra && 9 <= Fa || sa && Da("1.9.1");
ra && Da("9");
function Ga(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function Ha(a) {
  var b = document;
  return ca(a) ? b.getElementById(a) : a;
}
function Ia() {
  var a = document;
  return a.querySelectorAll && a.querySelector ? a.querySelectorAll(".grid-cell") : Ja();
}
function Ja() {
  var a, b, c, d;
  a = document;
  if (a.querySelectorAll && a.querySelector) {
    return a.querySelectorAll(".grid-cell");
  }
  if (a.getElementsByClassName) {
    var e = a.getElementsByClassName("grid-cell");
    return e;
  }
  e = a.getElementsByTagName("*");
  d = {};
  for (b = c = 0;a = e[b];b++) {
    var f = a.className, h;
    if (h = "function" == typeof f.split) {
      h = 0 <= ia(f.split(/\s+/), "grid-cell");
    }
    h && (d[c++] = a);
  }
  d.length = c;
  return d;
}
;function Ka(a, b) {
  null != a && this.append.apply(this, arguments);
}
Ka.prototype.ra = "";
Ka.prototype.append = function(a, b, c) {
  this.ra += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.ra += arguments[d];
    }
  }
  return this;
};
Ka.prototype.toString = function() {
  return this.ra;
};
var La = null;
function Ma() {
  return new Na(null, 5, [Oa, !0, Pa, !0, Qa, !1, Ra, !1, Sa, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function Ta(a) {
  return null == a;
}
function Ua(a) {
  return q(a) ? !1 : !0;
}
function s(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null;
}
function Va(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = Va(b), c = q(q(c) ? c.wb : c) ? c.vb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Wa(a) {
  var b = a.vb;
  return q(b) ? b : "" + w.c(a);
}
function x(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var Xa = {}, Ya = {};
function y(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = y[m(null == a ? null : a)];
  if (!b && (b = y._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
function Za(a, b) {
  if (a ? a.B : a) {
    return a.B(a, b);
  }
  var c;
  c = Za[m(null == a ? null : a)];
  if (!c && (c = Za._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var $a = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.S : a) {
      return a.S(a, b, c);
    }
    var h;
    h = z[m(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw v("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.G : a) {
      return a.G(a, b);
    }
    var c;
    c = z[m(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
      throw v("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}(), ab = {};
function A(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a);
}
function C(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = C[m(null == a ? null : a)];
  if (!b && (b = C._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var bb = {}, E = function() {
  function a(a, b, c) {
    if (a ? a.N : a) {
      return a.N(a, b, c);
    }
    var h;
    h = E[m(null == a ? null : a)];
    if (!h && (h = E._, !h)) {
      throw v("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.M : a) {
      return a.M(a, b);
    }
    var c;
    c = E[m(null == a ? null : a)];
    if (!c && (c = E._, !c)) {
      throw v("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}();
function cb(a, b, c) {
  if (a ? a.sa : a) {
    return a.sa(a, b, c);
  }
  var d;
  d = cb[m(null == a ? null : a)];
  if (!d && (d = cb._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var db = {}, eb = {};
function fb(a) {
  if (a ? a.bb : a) {
    return a.bb();
  }
  var b;
  b = fb[m(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function gb(a) {
  if (a ? a.cb : a) {
    return a.cb();
  }
  var b;
  b = gb[m(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var hb = {};
function ib(a, b, c) {
  if (a ? a.Wa : a) {
    return a.Wa(a, b, c);
  }
  var d;
  d = ib[m(null == a ? null : a)];
  if (!d && (d = ib._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function jb(a) {
  if (a ? a.lb : a) {
    return a.state;
  }
  var b;
  b = jb[m(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw v("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var kb = {};
function lb(a) {
  if (a ? a.H : a) {
    return a.H(a);
  }
  var b;
  b = lb[m(null == a ? null : a)];
  if (!b && (b = lb._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
function mb(a, b) {
  if (a ? a.L : a) {
    return a.L(a, b);
  }
  var c;
  c = mb[m(null == a ? null : a)];
  if (!c && (c = mb._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var nb = {}, ob = function() {
  function a(a, b, c) {
    if (a ? a.K : a) {
      return a.K(a, b, c);
    }
    var h;
    h = ob[m(null == a ? null : a)];
    if (!h && (h = ob._, !h)) {
      throw v("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.J : a) {
      return a.J(a, b);
    }
    var c;
    c = ob[m(null == a ? null : a)];
    if (!c && (c = ob._, !c)) {
      throw v("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}();
function pb(a, b) {
  if (a ? a.t : a) {
    return a.t(a, b);
  }
  var c;
  c = pb[m(null == a ? null : a)];
  if (!c && (c = pb._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function qb(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = qb[m(null == a ? null : a)];
  if (!b && (b = qb._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var rb = {};
function sb(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = sb[m(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var tb = {};
function F(a, b) {
  if (a ? a.gb : a) {
    return a.gb(0, b);
  }
  var c;
  c = F[m(null == a ? null : a)];
  if (!c && (c = F._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var ub = {};
function vb(a, b, c) {
  if (a ? a.u : a) {
    return a.u(a, b, c);
  }
  var d;
  d = vb[m(null == a ? null : a)];
  if (!d && (d = vb._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function wb(a, b, c) {
  if (a ? a.fb : a) {
    return a.fb(0, b, c);
  }
  var d;
  d = wb[m(null == a ? null : a)];
  if (!d && (d = wb._, !d)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function xb(a) {
  if (a ? a.ta : a) {
    return a.ta(a);
  }
  var b;
  b = xb[m(null == a ? null : a)];
  if (!b && (b = xb._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function yb(a, b) {
  if (a ? a.Aa : a) {
    return a.Aa(a, b);
  }
  var c;
  c = yb[m(null == a ? null : a)];
  if (!c && (c = yb._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function zb(a) {
  if (a ? a.Ba : a) {
    return a.Ba(a);
  }
  var b;
  b = zb[m(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Ab(a, b, c) {
  if (a ? a.va : a) {
    return a.va(a, b, c);
  }
  var d;
  d = Ab[m(null == a ? null : a)];
  if (!d && (d = Ab._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Bb(a, b, c) {
  if (a ? a.eb : a) {
    return a.eb(0, b, c);
  }
  var d;
  d = Bb[m(null == a ? null : a)];
  if (!d && (d = Bb._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Cb(a) {
  if (a ? a.Za : a) {
    return a.Za();
  }
  var b;
  b = Cb[m(null == a ? null : a)];
  if (!b && (b = Cb._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Db(a) {
  if (a ? a.Ha : a) {
    return a.Ha(a);
  }
  var b;
  b = Db[m(null == a ? null : a)];
  if (!b && (b = Db._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Eb(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = Eb[m(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Fb(a) {
  if (a ? a.Ga : a) {
    return a.Ga(a);
  }
  var b;
  b = Fb[m(null == a ? null : a)];
  if (!b && (b = Fb._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Gb(a) {
  this.xb = a;
  this.o = 0;
  this.f = 1073741824;
}
Gb.prototype.gb = function(a, b) {
  return this.xb.append(b);
};
function G(a) {
  var b = new Ka;
  a.u(null, new Gb(b), Ma());
  return "" + w.c(b);
}
var Hb = "undefined" !== typeof Math.imul && 0 !== (Math.imul.a ? Math.imul.a(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function Ib(a) {
  a = Hb(a, 3432918353);
  return Hb(a << 15 | a >>> -15, 461845907);
}
function Jb(a, b) {
  var c = a ^ b;
  return Hb(c << 13 | c >>> -13, 5) + 3864292196;
}
function Lb(a, b) {
  var c = a ^ b, c = Hb(c ^ c >>> 16, 2246822507), c = Hb(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function Mb(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = Jb(c, Ib(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ Ib(a.charCodeAt(a.length - 1)) : b;
  return Lb(b, Hb(2, a.length));
}
var Nb = {}, Ob = 0;
function Pb(a) {
  255 < Ob && (Nb = {}, Ob = 0);
  var b = Nb[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = Hb(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
          b = void 0;
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Nb[a] = b;
    Ob += 1;
  }
  return a = b;
}
function Qb(a) {
  a && (a.f & 4194304 || a.Eb) ? a = a.w(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Pb(a), 0 !== a && (a = Ib(a), a = Jb(0, a), a = Lb(a, 4))) : a = null == a ? 0 : u ? qb(a) : null;
  return a;
}
function Rb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Sb(a, b) {
  if (q(Tb.a ? Tb.a(a, b) : Tb.call(null, a, b))) {
    return 0;
  }
  var c = Ua(a.R);
  if (q(c ? b.R : c)) {
    return-1;
  }
  if (q(a.R)) {
    if (Ua(b.R)) {
      return 1;
    }
    c = Ub.a ? Ub.a(a.R, b.R) : Ub.call(null, a.R, b.R);
    return 0 === c ? Ub.a ? Ub.a(a.name, b.name) : Ub.call(null, a.name, b.name) : c;
  }
  return Vb ? Ub.a ? Ub.a(a.name, b.name) : Ub.call(null, a.name, b.name) : null;
}
function Wb(a, b, c, d, e) {
  this.R = a;
  this.name = b;
  this.ga = c;
  this.ka = d;
  this.qa = e;
  this.f = 2154168321;
  this.o = 4096;
}
g = Wb.prototype;
g.u = function(a, b) {
  return F(b, this.ga);
};
g.w = function() {
  var a = this.ka;
  return null != a ? a : this.ka = a = Rb(Mb(this.name), Pb(this.R));
};
g.L = function(a, b) {
  return new Wb(this.R, this.name, this.ga, this.ka, b);
};
g.H = function() {
  return this.qa;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return E.d(c, this, null);
      case 3:
        return E.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return E.d(a, this, null);
};
g.a = function(a, b) {
  return E.d(a, this, b);
};
g.t = function(a, b) {
  return b instanceof Wb ? this.ga === b.ga : !1;
};
g.toString = function() {
  return this.ga;
};
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.Hb)) {
    return a.C(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Xb(a, 0);
  }
  if (s(rb, a)) {
    return sb(a);
  }
  if (u) {
    throw Error("" + w.c(a) + " is not ISeqable");
  }
  return null;
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.ua)) {
    return a.O(null);
  }
  a = H(a);
  return null == a ? null : A(a);
}
function K(a) {
  return null != a ? a && (a.f & 64 || a.ua) ? a.P(null) : (a = H(a)) ? C(a) : L : L;
}
function N(a) {
  return null == a ? null : a && (a.f & 128 || a.Gb) ? a.Z(null) : H(K(a));
}
var Tb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || pb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (N(e)) {
            a = d, d = I(e), e = N(e);
          } else {
            return b.a(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = K(a);
      return c(b, d, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.c = function() {
    return!0;
  };
  b.a = a;
  b.g = c.g;
  return b;
}();
function Yb(a, b) {
  var c = Ib(a), c = Jb(0, c);
  return Lb(c, b);
}
function Zb(a) {
  var b = 0, c = 1;
  for (a = H(a);;) {
    if (null != a) {
      b += 1, c = Hb(31, c) + Qb(I(a)) | 0, a = N(a);
    } else {
      return Yb(c, b);
    }
  }
}
function $b(a) {
  var b = 0, c = 0;
  for (a = H(a);;) {
    if (null != a) {
      b += 1, c = c + Qb(I(a)) | 0, a = N(a);
    } else {
      return Yb(c, b);
    }
  }
}
Ya["null"] = !0;
y["null"] = function() {
  return 0;
};
Date.prototype.t = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
pb.number = function(a, b) {
  return a === b;
};
kb["function"] = !0;
lb["function"] = function() {
  return null;
};
Xa["function"] = !0;
qb._ = function(a) {
  return a[da] || (a[da] = ++ea);
};
var ac = function() {
  function a(a, b, c, d) {
    for (var l = y(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = y(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = y(a);
    if (0 === c) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = z.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.j = a;
  return d;
}(), bc = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.d = b;
  d.j = a;
  return d;
}();
function cc(a) {
  return a ? a.f & 2 || a.kb ? !0 : a.f ? !1 : s(Ya, a) : s(Ya, a);
}
function dc(a) {
  return a ? a.f & 16 || a.$a ? !0 : a.f ? !1 : s($a, a) : s($a, a);
}
function Xb(a, b) {
  this.b = a;
  this.k = b;
  this.f = 166199550;
  this.o = 8192;
}
g = Xb.prototype;
g.toString = function() {
  return G(this);
};
g.G = function(a, b) {
  var c = b + this.k;
  return c < this.b.length ? this.b[c] : null;
};
g.S = function(a, b, c) {
  a = b + this.k;
  return a < this.b.length ? this.b[a] : c;
};
g.Z = function() {
  return this.k + 1 < this.b.length ? new Xb(this.b, this.k + 1) : null;
};
g.F = function() {
  return this.b.length - this.k;
};
g.w = function() {
  return Zb(this);
};
g.t = function(a, b) {
  return P.a ? P.a(this, b) : P.call(null, this, b);
};
g.J = function(a, b) {
  return bc.j(this.b, b, this.b[this.k], this.k + 1);
};
g.K = function(a, b, c) {
  return bc.j(this.b, b, c, this.k);
};
g.O = function() {
  return this.b[this.k];
};
g.P = function() {
  return this.k + 1 < this.b.length ? new Xb(this.b, this.k + 1) : L;
};
g.C = function() {
  return this;
};
g.B = function(a, b) {
  return Q.a ? Q.a(b, this) : Q.call(null, b, this);
};
var ec = function() {
  function a(a, b) {
    return b < a.length ? new Xb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), O = function() {
  function a(a, b) {
    return ec.a(a, b);
  }
  function b(a) {
    return ec.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
pb._ = function(a, b) {
  return a === b;
};
var fc = function() {
  function a(a, b) {
    return null != a ? Za(a, b) : Za(L, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.a(a, d), d = I(e), e = N(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = K(a);
      return c(b, d, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.a = a;
  b.g = c.g;
  return b;
}();
function S(a) {
  if (null != a) {
    if (a && (a.f & 2 || a.kb)) {
      a = a.F(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(Ya, a)) {
            a = y(a);
          } else {
            if (u) {
              a: {
                a = H(a);
                for (var b = 0;;) {
                  if (cc(a)) {
                    a = b + y(a);
                    break a;
                  }
                  a = N(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var gc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return H(a) ? I(a) : c;
      }
      if (dc(a)) {
        return z.d(a, b, c);
      }
      if (H(a)) {
        a = N(a), b -= 1;
      } else {
        return u ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (H(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if (dc(a)) {
        return z.a(a, b);
      }
      if (H(a)) {
        var c = N(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (u) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}(), hc = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.f & 16 || a.$a)) {
      return a.S(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (s($a, a)) {
      return z.a(a, b);
    }
    if (a ? a.f & 64 || a.ua || (a.f ? 0 : s(ab, a)) : s(ab, a)) {
      return gc.d(a, b, c);
    }
    if (u) {
      throw Error("nth not supported on this type " + w.c(Wa(Va(a))));
    }
    return null;
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.f & 16 || a.$a)) {
      return a.G(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s($a, a)) {
      return z.a(a, b);
    }
    if (a ? a.f & 64 || a.ua || (a.f ? 0 : s(ab, a)) : s(ab, a)) {
      return gc.a(a, b);
    }
    if (u) {
      throw Error("nth not supported on this type " + w.c(Wa(Va(a))));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}(), T = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.ab) ? a.N(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(bb, a) ? E.d(a, b, c) : u ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.ab) ? a.M(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(bb, a) ? E.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}(), jc = function() {
  function a(a, b, c) {
    return null != a ? cb(a, b, c) : ic.a ? ic.a([b], [c]) : ic.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = O(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.d(a, d, e), q(l)) {
          d = I(l), e = I(N(l)), l = N(N(l));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.h = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var l = I(a);
      a = K(a);
      return c(b, d, l, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.g(b, e, f, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 3;
  b.h = c.h;
  b.d = a;
  b.g = c.g;
  return b;
}();
function kc(a) {
  var b = "function" == m(a);
  return b ? b : a ? q(q(null) ? null : a.Bb) ? !0 : a.Lb ? !1 : s(Xa, a) : s(Xa, a);
}
function lc(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.nb || (a.f ? 0 : s(kb, a)) : s(kb, a) : b) ? lb(a) : null;
}
function mc(a) {
  return a ? a.f & 16777216 || a.Ib ? !0 : a.f ? !1 : s(tb, a) : s(tb, a);
}
function nc(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.Fb ? !0 : a.f ? !1 : s(db, a) : s(db, a);
}
function oc(a) {
  return a ? a.f & 16384 || a.Jb ? !0 : a.f ? !1 : s(hb, a) : s(hb, a);
}
function pc(a) {
  return a ? a.o & 512 || a.Cb ? !0 : !1 : !1;
}
function qc(a) {
  var b = [];
  Ga(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function rc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var sc = {};
function tc(a) {
  return null == a ? !1 : a ? a.f & 64 || a.ua ? !0 : a.f ? !1 : s(ab, a) : s(ab, a);
}
function uc(a) {
  return q(a) ? !0 : !1;
}
function vc(a, b) {
  return T.d(a, b, sc) === sc ? !1 : !0;
}
function Ub(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Va(a) === Va(b)) {
    return a && (a.o & 2048 || a.ya) ? a.za(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var wc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Ub(hc.a(a, h), hc.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = S(a), h = S(b);
    return f < h ? -1 : f > h ? 1 : u ? c.j(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.j = a;
  return c;
}(), U = function() {
  function a(a, b, c) {
    for (c = H(c);;) {
      if (c) {
        b = a.a ? a.a(b, I(c)) : a.call(null, b, I(c)), c = N(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = H(b);
    return c ? xc.d ? xc.d(a, I(c), N(c)) : xc.call(null, a, I(c), N(c)) : a.p ? a.p() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}(), xc = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.pb) ? c.K(null, a, b) : c instanceof Array ? bc.d(c, a, b) : "string" === typeof c ? bc.d(c, a, b) : s(nb, c) ? ob.d(c, a, b) : u ? U.d(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.pb) ? b.J(null, a) : b instanceof Array ? bc.a(b, a) : "string" === typeof b ? bc.a(b, a) : s(nb, b) ? ob.a(b, a) : u ? U.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}();
function yc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a);
}
function zc(a) {
  return yc((a - a % 2) / 2);
}
var Ac = function() {
  function a(a) {
    return a * c.p();
  }
  function b() {
    return Math.random.p ? Math.random.p() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.c = a;
  return c;
}();
function Bc(a) {
  return yc(Ac.c(a));
}
function Cc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new Ka(b.c(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.c(I(l))), l = N(l);
        } else {
          return e.toString();
        }
      }
    }
    a.m = 1;
    a.h = function(a) {
      var b = I(a);
      a = K(a);
      return c(b, a);
    };
    a.g = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, O(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.p = function() {
    return "";
  };
  b.c = a;
  b.g = c.g;
  return b;
}();
function P(a, b) {
  return uc(mc(b) ? function() {
    for (var c = H(a), d = H(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (Tb.a(I(c), I(d))) {
        c = N(c), d = N(d);
      } else {
        return u ? !1 : null;
      }
    }
  }() : null);
}
function Dc(a, b, c, d, e) {
  this.l = a;
  this.first = b;
  this.da = c;
  this.count = d;
  this.i = e;
  this.f = 65937646;
  this.o = 8192;
}
g = Dc.prototype;
g.toString = function() {
  return G(this);
};
g.H = function() {
  return this.l;
};
g.Z = function() {
  return 1 === this.count ? null : this.da;
};
g.F = function() {
  return this.count;
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return U.a(b, this);
};
g.K = function(a, b, c) {
  return U.d(b, c, this);
};
g.O = function() {
  return this.first;
};
g.P = function() {
  return 1 === this.count ? L : this.da;
};
g.C = function() {
  return this;
};
g.L = function(a, b) {
  return new Dc(b, this.first, this.da, this.count, this.i);
};
g.B = function(a, b) {
  return new Dc(this.l, b, this, this.count + 1, null);
};
function Ec(a) {
  this.l = a;
  this.f = 65937614;
  this.o = 8192;
}
g = Ec.prototype;
g.toString = function() {
  return G(this);
};
g.H = function() {
  return this.l;
};
g.Z = function() {
  return null;
};
g.F = function() {
  return 0;
};
g.w = function() {
  return 0;
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return U.a(b, this);
};
g.K = function(a, b, c) {
  return U.d(b, c, this);
};
g.O = function() {
  return null;
};
g.P = function() {
  return L;
};
g.C = function() {
  return null;
};
g.L = function(a, b) {
  return new Ec(b);
};
g.B = function(a, b) {
  return new Dc(this.l, b, null, 1, null);
};
var L = new Ec(null), Fc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Xb && 0 === a.k) {
      b = a.b;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.O(null)), a = a.Z(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = L;;) {
      if (0 < a) {
        var f = a - 1, e = e.B(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.m = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Gc(a, b, c, d) {
  this.l = a;
  this.first = b;
  this.da = c;
  this.i = d;
  this.f = 65929452;
  this.o = 8192;
}
g = Gc.prototype;
g.toString = function() {
  return G(this);
};
g.H = function() {
  return this.l;
};
g.Z = function() {
  return null == this.da ? null : H(this.da);
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return U.a(b, this);
};
g.K = function(a, b, c) {
  return U.d(b, c, this);
};
g.O = function() {
  return this.first;
};
g.P = function() {
  return null == this.da ? L : this.da;
};
g.C = function() {
  return this;
};
g.L = function(a, b) {
  return new Gc(b, this.first, this.da, this.i);
};
g.B = function(a, b) {
  return new Gc(null, b, this, this.i);
};
function Q(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.ua)) ? new Gc(null, a, b, null) : new Gc(null, a, H(b), null);
}
function V(a, b, c, d) {
  this.R = a;
  this.name = b;
  this.fa = c;
  this.ka = d;
  this.f = 2153775105;
  this.o = 4096;
}
g = V.prototype;
g.u = function(a, b) {
  return F(b, ":" + w.c(this.fa));
};
g.w = function() {
  var a = this.ka;
  return null != a ? a : this.ka = a = Rb(Mb(this.name), Pb(this.R)) + 2654435769;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return T.a(c, this);
      case 3:
        return T.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return T.a(a, this);
};
g.a = function(a, b) {
  return T.d(a, this, b);
};
g.t = function(a, b) {
  return b instanceof V ? this.fa === b.fa : !1;
};
g.toString = function() {
  return ":" + w.c(this.fa);
};
var Ic = function() {
  function a(a, b) {
    return new V(a, b, "" + w.c(q(a) ? "" + w.c(a) + "/" : null) + w.c(b), null);
  }
  function b(a) {
    if (a instanceof V) {
      return a;
    }
    if (a instanceof Wb) {
      var b;
      if (a && (a.o & 4096 || a.ob)) {
        b = a.R;
      } else {
        throw Error("Doesn't support namespace: " + w.c(a));
      }
      return new V(b, Hc.c ? Hc.c(a) : Hc.call(null, a), a.ga, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new V(b[0], b[1], a, null) : new V(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function W(a, b, c, d) {
  this.l = a;
  this.oa = b;
  this.q = c;
  this.i = d;
  this.o = 0;
  this.f = 32374988;
}
g = W.prototype;
g.toString = function() {
  return G(this);
};
function Jc(a) {
  null != a.oa && (a.q = a.oa.p ? a.oa.p() : a.oa.call(null), a.oa = null);
  return a.q;
}
g.H = function() {
  return this.l;
};
g.Z = function() {
  sb(this);
  return null == this.q ? null : N(this.q);
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return U.a(b, this);
};
g.K = function(a, b, c) {
  return U.d(b, c, this);
};
g.O = function() {
  sb(this);
  return null == this.q ? null : I(this.q);
};
g.P = function() {
  sb(this);
  return null != this.q ? K(this.q) : L;
};
g.C = function() {
  Jc(this);
  if (null == this.q) {
    return null;
  }
  for (var a = this.q;;) {
    if (a instanceof W) {
      a = Jc(a);
    } else {
      return this.q = a, H(this.q);
    }
  }
};
g.L = function(a, b) {
  return new W(b, this.oa, this.q, this.i);
};
g.B = function(a, b) {
  return Q(b, this);
};
function Kc(a, b) {
  this.Da = a;
  this.end = b;
  this.o = 0;
  this.f = 2;
}
Kc.prototype.F = function() {
  return this.end;
};
Kc.prototype.add = function(a) {
  this.Da[this.end] = a;
  return this.end += 1;
};
Kc.prototype.Y = function() {
  var a = new Lc(this.Da, 0, this.end);
  this.Da = null;
  return a;
};
function Lc(a, b, c) {
  this.b = a;
  this.r = b;
  this.end = c;
  this.o = 0;
  this.f = 524306;
}
g = Lc.prototype;
g.J = function(a, b) {
  return bc.j(this.b, b, this.b[this.r], this.r + 1);
};
g.K = function(a, b, c) {
  return bc.j(this.b, b, c, this.r);
};
g.Za = function() {
  if (this.r === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Lc(this.b, this.r + 1, this.end);
};
g.G = function(a, b) {
  return this.b[this.r + b];
};
g.S = function(a, b, c) {
  return 0 <= b && b < this.end - this.r ? this.b[this.r + b] : c;
};
g.F = function() {
  return this.end - this.r;
};
var Mc = function() {
  function a(a, b, c) {
    return new Lc(a, b, c);
  }
  function b(a, b) {
    return new Lc(a, b, a.length);
  }
  function c(a) {
    return new Lc(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.d = a;
  return d;
}();
function Nc(a, b, c, d) {
  this.Y = a;
  this.$ = b;
  this.l = c;
  this.i = d;
  this.f = 31850732;
  this.o = 1536;
}
g = Nc.prototype;
g.toString = function() {
  return G(this);
};
g.H = function() {
  return this.l;
};
g.Z = function() {
  if (1 < y(this.Y)) {
    return new Nc(Cb(this.Y), this.$, this.l, null);
  }
  var a = sb(this.$);
  return null == a ? null : a;
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.O = function() {
  return z.a(this.Y, 0);
};
g.P = function() {
  return 1 < y(this.Y) ? new Nc(Cb(this.Y), this.$, this.l, null) : null == this.$ ? L : this.$;
};
g.C = function() {
  return this;
};
g.Ha = function() {
  return this.Y;
};
g.Ia = function() {
  return null == this.$ ? L : this.$;
};
g.L = function(a, b) {
  return new Nc(this.Y, this.$, b, this.i);
};
g.B = function(a, b) {
  return Q(b, this);
};
g.Ga = function() {
  return null == this.$ ? null : this.$;
};
function Oc(a, b) {
  return 0 === y(a) ? b : new Nc(a, b, null, null);
}
function Qc(a) {
  for (var b = [];;) {
    if (H(a)) {
      b.push(I(a)), a = N(a);
    } else {
      return b;
    }
  }
}
function Rc(a, b) {
  if (cc(a)) {
    return S(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && H(c)) {
      c = N(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Tc = function Sc(b) {
  return null == b ? null : null == N(b) ? H(I(b)) : u ? Q(I(b), Sc(N(b))) : null;
}, Uc = function() {
  function a(a, b) {
    return new W(null, function() {
      var c = H(a);
      return c ? pc(c) ? Oc(Db(c), d.a(Eb(c), b)) : Q(I(c), d.a(K(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new W(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new W(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function r(a, b) {
        return new W(null, function() {
          var c = H(a);
          return c ? pc(c) ? Oc(Db(c), r(Eb(c), b)) : Q(I(c), r(K(c), b)) : q(b) ? r(I(b), N(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.m = 2;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = K(a);
      return b(c, d, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.g(d, h, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 2;
  d.h = e.h;
  d.p = c;
  d.c = b;
  d.a = a;
  d.g = e.g;
  return d;
}(), Vc = function() {
  function a(a, b, c, d) {
    return Q(a, Q(b, Q(c, d)));
  }
  function b(a, b, c) {
    return Q(a, Q(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, p) {
      var r = null;
      4 < arguments.length && (r = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, r);
    }
    function b(a, c, d, e, f) {
      return Q(a, Q(c, Q(d, Q(e, Tc(f)))));
    }
    a.m = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var p = I(a);
      a = K(a);
      return b(c, d, e, p, a);
    };
    a.g = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return H(c);
      case 2:
        return Q(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.g(c, f, h, k, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = 4;
  c.h = d.h;
  c.c = function(a) {
    return H(a);
  };
  c.a = function(a, b) {
    return Q(a, b);
  };
  c.d = b;
  c.j = a;
  c.g = d.g;
  return c;
}(), Wc = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var k = null;
      2 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = yb(a, c), q(d)) {
          c = I(d), d = N(d);
        } else {
          return a;
        }
      }
    }
    a.m = 2;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var h = I(a);
      a = K(a);
      return b(c, h, a);
    };
    a.g = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return yb(a, d);
      default:
        return b.g(a, d, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 2;
  a.h = b.h;
  a.a = function(a, b) {
    return yb(a, b);
  };
  a.g = b.g;
  return a;
}(), Xc = function() {
  var a = null, b = function() {
    function a(c, f, h, k) {
      var l = null;
      3 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = Ab(a, c, d), q(k)) {
          c = I(k), d = I(N(k)), k = N(N(k));
        } else {
          return a;
        }
      }
    }
    a.m = 3;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var h = I(a);
      a = N(a);
      var k = I(a);
      a = K(a);
      return b(c, h, k, a);
    };
    a.g = b;
    return a;
  }(), a = function(a, d, e, f) {
    switch(arguments.length) {
      case 3:
        return Ab(a, d, e);
      default:
        return b.g(a, d, e, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.m = 3;
  a.h = b.h;
  a.d = function(a, b, e) {
    return Ab(a, b, e);
  };
  a.g = b.g;
  return a;
}();
function Yc(a, b, c) {
  var d = H(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = A(d);
  var e = C(d);
  if (1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c);
  }
  var d = A(e), f = C(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = A(f), h = C(f);
  if (3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e);
  }
  var f = A(h), k = C(h);
  if (4 === b) {
    return a.j ? a.j(c, d, e, f) : a.j ? a.j(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = A(k), l = C(k);
  if (5 === b) {
    return a.A ? a.A(c, d, e, f, h) : a.A ? a.A(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = A(l), n = C(l);
  if (6 === b) {
    return a.ca ? a.ca(c, d, e, f, h, k) : a.ca ? a.ca(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = A(n), p = C(n);
  if (7 === b) {
    return a.la ? a.la(c, d, e, f, h, k, l) : a.la ? a.la(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var n = A(p), r = C(p);
  if (8 === b) {
    return a.Ua ? a.Ua(c, d, e, f, h, k, l, n) : a.Ua ? a.Ua(c, d, e, f, h, k, l, n) : a.call(null, c, d, e, f, h, k, l, n);
  }
  var p = A(r), t = C(r);
  if (9 === b) {
    return a.Va ? a.Va(c, d, e, f, h, k, l, n, p) : a.Va ? a.Va(c, d, e, f, h, k, l, n, p) : a.call(null, c, d, e, f, h, k, l, n, p);
  }
  var r = A(t), B = C(t);
  if (10 === b) {
    return a.Ja ? a.Ja(c, d, e, f, h, k, l, n, p, r) : a.Ja ? a.Ja(c, d, e, f, h, k, l, n, p, r) : a.call(null, c, d, e, f, h, k, l, n, p, r);
  }
  var t = A(B), D = C(B);
  if (11 === b) {
    return a.Ka ? a.Ka(c, d, e, f, h, k, l, n, p, r, t) : a.Ka ? a.Ka(c, d, e, f, h, k, l, n, p, r, t) : a.call(null, c, d, e, f, h, k, l, n, p, r, t);
  }
  var B = A(D), J = C(D);
  if (12 === b) {
    return a.La ? a.La(c, d, e, f, h, k, l, n, p, r, t, B) : a.La ? a.La(c, d, e, f, h, k, l, n, p, r, t, B) : a.call(null, c, d, e, f, h, k, l, n, p, r, t, B);
  }
  var D = A(J), M = C(J);
  if (13 === b) {
    return a.Ma ? a.Ma(c, d, e, f, h, k, l, n, p, r, t, B, D) : a.Ma ? a.Ma(c, d, e, f, h, k, l, n, p, r, t, B, D) : a.call(null, c, d, e, f, h, k, l, n, p, r, t, B, D);
  }
  var J = A(M), R = C(M);
  if (14 === b) {
    return a.Na ? a.Na(c, d, e, f, h, k, l, n, p, r, t, B, D, J) : a.Na ? a.Na(c, d, e, f, h, k, l, n, p, r, t, B, D, J) : a.call(null, c, d, e, f, h, k, l, n, p, r, t, B, D, J);
  }
  var M = A(R), aa = C(R);
  if (15 === b) {
    return a.Oa ? a.Oa(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M) : a.Oa ? a.Oa(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M) : a.call(null, c, d, e, f, h, k, l, n, p, r, t, B, D, J, M);
  }
  var R = A(aa), ha = C(aa);
  if (16 === b) {
    return a.Pa ? a.Pa(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R) : a.Pa ? a.Pa(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R) : a.call(null, c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R);
  }
  var aa = A(ha), Aa = C(ha);
  if (17 === b) {
    return a.Qa ? a.Qa(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa) : a.Qa ? a.Qa(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa) : a.call(null, c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa);
  }
  var ha = A(Aa), Kb = C(Aa);
  if (18 === b) {
    return a.Ra ? a.Ra(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa, ha) : a.Ra ? a.Ra(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa, ha) : a.call(null, c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa, ha);
  }
  Aa = A(Kb);
  Kb = C(Kb);
  if (19 === b) {
    return a.Sa ? a.Sa(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa, ha, Aa) : a.Sa ? a.Sa(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa, ha, Aa) : a.call(null, c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa, ha, Aa);
  }
  var Pc = A(Kb);
  C(Kb);
  if (20 === b) {
    return a.Ta ? a.Ta(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa, ha, Aa, Pc) : a.Ta ? a.Ta(c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa, ha, Aa, Pc) : a.call(null, c, d, e, f, h, k, l, n, p, r, t, B, D, J, M, R, aa, ha, Aa, Pc);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Zc = function() {
  function a(a, b, c, d, e) {
    b = Vc.j(b, c, d, e);
    c = a.m;
    return a.h ? (d = Rc(b, c + 1), d <= c ? Yc(a, d, b) : a.h(b)) : a.apply(a, Qc(b));
  }
  function b(a, b, c, d) {
    b = Vc.d(b, c, d);
    c = a.m;
    return a.h ? (d = Rc(b, c + 1), d <= c ? Yc(a, d, b) : a.h(b)) : a.apply(a, Qc(b));
  }
  function c(a, b, c) {
    b = Vc.a(b, c);
    c = a.m;
    if (a.h) {
      var d = Rc(b, c + 1);
      return d <= c ? Yc(a, d, b) : a.h(b);
    }
    return a.apply(a, Qc(b));
  }
  function d(a, b) {
    var c = a.m;
    if (a.h) {
      var d = Rc(b, c + 1);
      return d <= c ? Yc(a, d, b) : a.h(b);
    }
    return a.apply(a, Qc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, B) {
      var D = null;
      5 < arguments.length && (D = O(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, D);
    }
    function b(a, c, d, e, f, h) {
      c = Q(c, Q(d, Q(e, Q(f, Tc(h)))));
      d = a.m;
      return a.h ? (e = Rc(c, d + 1), e <= d ? Yc(a, e, c) : a.h(c)) : a.apply(a, Qc(c));
    }
    a.m = 5;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = N(a);
      var h = I(a);
      a = K(a);
      return b(c, d, e, f, h, a);
    };
    a.g = b;
    return a;
  }(), e = function(e, k, l, n, p, r) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return f.g(e, k, l, n, p, O(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.m = 5;
  e.h = f.h;
  e.a = d;
  e.d = c;
  e.j = b;
  e.A = a;
  e.g = f.g;
  return e;
}();
function $c(a, b) {
  for (;;) {
    if (null == H(b)) {
      return!0;
    }
    if (q(a.c ? a.c(I(b)) : a.call(null, I(b)))) {
      var c = a, d = N(b);
      a = c;
      b = d;
    } else {
      return u ? !1 : null;
    }
  }
}
function ad(a) {
  return a;
}
function bd(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return Ua(Zc.j(a, b, d, e));
      }
      b.m = 2;
      b.h = function(a) {
        var b = I(a);
        a = N(a);
        var d = I(a);
        a = K(a);
        return c(b, d, a);
      };
      b.g = c;
      return b;
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return Ua(a.p ? a.p() : a.call(null));
        case 1:
          var h = b;
          return Ua(a.c ? a.c(h) : a.call(null, h));
        case 2:
          var h = b, k = e;
          return Ua(a.a ? a.a(h, k) : a.call(null, h, k));
        default:
          return c.g(b, e, O(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.m = 2;
    b.h = c.h;
    return b;
  }();
}
var cd = function() {
  function a(a, b, c, e) {
    return new W(null, function() {
      var n = H(b), p = H(c), r = H(e);
      return n && p && r ? Q(a.d ? a.d(I(n), I(p), I(r)) : a.call(null, I(n), I(p), I(r)), d.j(a, K(n), K(p), K(r))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new W(null, function() {
      var e = H(b), n = H(c);
      return e && n ? Q(a.a ? a.a(I(e), I(n)) : a.call(null, I(e), I(n)), d.d(a, K(e), K(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new W(null, function() {
      var c = H(b);
      if (c) {
        if (pc(c)) {
          for (var e = Db(c), n = S(e), p = new Kc(Array(n), 0), r = 0;;) {
            if (r < n) {
              var t = a.c ? a.c(z.a(e, r)) : a.call(null, z.a(e, r));
              p.add(t);
              r += 1;
            } else {
              break;
            }
          }
          return Oc(p.Y(), d.a(a, Eb(c)));
        }
        return Q(a.c ? a.c(I(c)) : a.call(null, I(c)), d.a(a, K(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var t = null;
      4 < arguments.length && (t = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, t);
    }
    function b(a, c, e, f, h) {
      var t = function D(a) {
        return new W(null, function() {
          var b = d.a(H, a);
          return $c(ad, b) ? Q(d.a(I, b), D(d.a(K, b))) : null;
        }, null, null);
      };
      return d.a(function() {
        return function(b) {
          return Zc.a(a, b);
        };
      }(t), t(fc.g(h, f, O([e, c], 0))));
    }
    a.m = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = K(a);
      return b(c, d, e, f, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.g(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.h = e.h;
  d.a = c;
  d.d = b;
  d.j = a;
  d.g = e.g;
  return d;
}();
function dd(a) {
  return function c(a, e) {
    return new W(null, function() {
      var f = H(a);
      return f ? Q(I(f), c(K(f), e)) : H(e) ? c(I(e), K(e)) : null;
    }, null, null);
  }(null, a);
}
var ed = function() {
  function a(a, b) {
    return dd(cd.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return dd(Zc.j(cd, a, c, d));
    }
    a.m = 2;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = K(a);
      return b(c, d, a);
    };
    a.g = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.g(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 2;
  b.h = c.h;
  b.a = a;
  b.g = c.g;
  return b;
}(), gd = function fd(b, c) {
  return new W(null, function() {
    var d = H(c);
    if (d) {
      if (pc(d)) {
        for (var e = Db(d), f = S(e), h = new Kc(Array(f), 0), k = 0;;) {
          if (k < f) {
            if (q(b.c ? b.c(z.a(e, k)) : b.call(null, z.a(e, k)))) {
              var l = z.a(e, k);
              h.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Oc(h.Y(), fd(b, Eb(d)));
      }
      e = I(d);
      d = K(d);
      return q(b.c ? b.c(e) : b.call(null, e)) ? Q(e, fd(b, d)) : fd(b, d);
    }
    return null;
  }, null, null);
};
function hd(a) {
  return function c(a) {
    return new W(null, function() {
      return Q(a, q(mc.c ? mc.c(a) : mc.call(null, a)) ? ed.a(c, H.c ? H.c(a) : H.call(null, a)) : null);
    }, null, null);
  }(a);
}
function id(a) {
  return gd(function(a) {
    return!mc(a);
  }, K(hd(a)));
}
var jd = function() {
  function a(a, b, c) {
    var h = sc;
    for (b = H(b);;) {
      if (b) {
        var k = a;
        if (k ? k.f & 256 || k.ab || (k.f ? 0 : s(bb, k)) : s(bb, k)) {
          a = T.d(a, I(b), h);
          if (h === a) {
            return c;
          }
          b = N(b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.d(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}(), ld = function kd(b, c, d) {
  var e = hc.d(c, 0, null), f;
  a: {
    f = 1;
    for (c = H(c);;) {
      if (c && 0 < f) {
        f -= 1, c = N(c);
      } else {
        f = c;
        break a;
      }
    }
    f = void 0;
  }
  return f ? jc.d(b, e, kd(T.a(b, e), f, d)) : jc.d(b, e, d);
};
function md(a, b) {
  this.n = a;
  this.b = b;
}
function nd(a) {
  return new md(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function od(a) {
  a = a.e;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function pd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = nd(a);
    d.b[0] = c;
    c = d;
    b -= 5;
  }
}
var rd = function qd(b, c, d, e) {
  var f = new md(d.n, x(d.b)), h = b.e - 1 >>> c & 31;
  5 === c ? f.b[h] = e : (d = d.b[h], b = null != d ? qd(b, c - 5, d, e) : pd(null, c - 5, e), f.b[h] = b);
  return f;
};
function sd(a, b) {
  throw Error("No item " + w.c(a) + " in vector of length " + w.c(b));
}
function td(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.b[0];
    } else {
      return b.b;
    }
  }
}
function ud(a, b) {
  if (b >= od(a)) {
    return a.D;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.b[b >>> d & 31], d = e
    } else {
      return c.b;
    }
  }
}
function vd(a, b) {
  return 0 <= b && b < a.e ? ud(a, b) : sd(b, a.e);
}
var xd = function wd(b, c, d, e, f) {
  var h = new md(d.n, x(d.b));
  if (0 === c) {
    h.b[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = wd(b, c - 5, d.b[k], e, f);
    h.b[k] = b;
  }
  return h;
};
function X(a, b, c, d, e, f) {
  this.l = a;
  this.e = b;
  this.shift = c;
  this.root = d;
  this.D = e;
  this.i = f;
  this.f = 167668511;
  this.o = 8196;
}
g = X.prototype;
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return E.d(this, b, null);
};
g.N = function(a, b, c) {
  return "number" === typeof b ? z.d(this, b, c) : c;
};
g.G = function(a, b) {
  return vd(this, b)[b & 31];
};
g.S = function(a, b, c) {
  return 0 <= b && b < this.e ? ud(this, b)[b & 31] : c;
};
g.Wa = function(a, b, c) {
  if (0 <= b && b < this.e) {
    return od(this) <= b ? (a = x(this.D), a[b & 31] = c, new X(this.l, this.e, this.shift, this.root, a, null)) : new X(this.l, this.e, this.shift, xd(this, this.shift, this.root, b, c), this.D, null);
  }
  if (b === this.e) {
    return Za(this, c);
  }
  if (u) {
    throw Error("Index " + w.c(b) + " out of bounds  [0," + w.c(this.e) + "]");
  }
  return null;
};
g.H = function() {
  return this.l;
};
g.F = function() {
  return this.e;
};
g.bb = function() {
  return z.a(this, 0);
};
g.cb = function() {
  return z.a(this, 1);
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.ta = function() {
  return new yd(this.e, this.shift, zd.c ? zd.c(this.root) : zd.call(null, this.root), Ad.c ? Ad.c(this.D) : Ad.call(null, this.D));
};
g.J = function(a, b) {
  return ac.a(this, b);
};
g.K = function(a, b, c) {
  return ac.d(this, b, c);
};
g.sa = function(a, b, c) {
  if ("number" === typeof b) {
    return ib(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.C = function() {
  return 0 === this.e ? null : 32 >= this.e ? new Xb(this.D, 0) : u ? Y.j ? Y.j(this, td(this), 0, 0) : Y.call(null, this, td(this), 0, 0) : null;
};
g.L = function(a, b) {
  return new X(b, this.e, this.shift, this.root, this.D, this.i);
};
g.B = function(a, b) {
  if (32 > this.e - od(this)) {
    for (var c = this.D.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.D[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.l, this.e + 1, this.shift, this.root, d, null);
  }
  c = (d = this.e >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = nd(null), d.b[0] = this.root, e = pd(null, this.shift, new md(null, this.D)), d.b[1] = e) : d = rd(this, this.shift, this.root, new md(null, this.D));
  return new X(this.l, this.e + 1, c, d, [b], null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.S(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.G(null, a);
};
g.a = function(a, b) {
  return this.S(null, a, b);
};
var Z = new md(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Bd = new X(null, 0, 5, Z, [], 0);
function Cd(a, b) {
  var c = a.length, d = b ? a : x(a);
  if (32 > c) {
    return new X(null, c, 5, Z, d, null);
  }
  for (var e = 32, f = (new X(null, 32, 5, Z, d.slice(0, 32), null)).ta(null);;) {
    if (e < c) {
      var h = e + 1, f = Wc.a(f, d[e]), e = h
    } else {
      return zb(f);
    }
  }
}
function Dd(a) {
  return zb(xc.d(yb, xb(Bd), a));
}
var Ed = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof Xb && 0 === a.k ? Cd.a ? Cd.a(a.b, !0) : Cd.call(null, a.b, !0) : Dd(a);
  }
  a.m = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Fd(a, b, c, d, e, f) {
  this.s = a;
  this.U = b;
  this.k = c;
  this.r = d;
  this.l = e;
  this.i = f;
  this.f = 32243948;
  this.o = 1536;
}
g = Fd.prototype;
g.toString = function() {
  return G(this);
};
g.Z = function() {
  if (this.r + 1 < this.U.length) {
    var a = Y.j ? Y.j(this.s, this.U, this.k, this.r + 1) : Y.call(null, this.s, this.U, this.k, this.r + 1);
    return null == a ? null : a;
  }
  return Fb(this);
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return ac.a(Gd.d ? Gd.d(this.s, this.k + this.r, S(this.s)) : Gd.call(null, this.s, this.k + this.r, S(this.s)), b);
};
g.K = function(a, b, c) {
  return ac.d(Gd.d ? Gd.d(this.s, this.k + this.r, S(this.s)) : Gd.call(null, this.s, this.k + this.r, S(this.s)), b, c);
};
g.O = function() {
  return this.U[this.r];
};
g.P = function() {
  if (this.r + 1 < this.U.length) {
    var a = Y.j ? Y.j(this.s, this.U, this.k, this.r + 1) : Y.call(null, this.s, this.U, this.k, this.r + 1);
    return null == a ? L : a;
  }
  return Eb(this);
};
g.C = function() {
  return this;
};
g.Ha = function() {
  return Mc.a(this.U, this.r);
};
g.Ia = function() {
  var a = this.k + this.U.length;
  return a < y(this.s) ? Y.j ? Y.j(this.s, ud(this.s, a), a, 0) : Y.call(null, this.s, ud(this.s, a), a, 0) : L;
};
g.L = function(a, b) {
  return Y.A ? Y.A(this.s, this.U, this.k, this.r, b) : Y.call(null, this.s, this.U, this.k, this.r, b);
};
g.B = function(a, b) {
  return Q(b, this);
};
g.Ga = function() {
  var a = this.k + this.U.length;
  return a < y(this.s) ? Y.j ? Y.j(this.s, ud(this.s, a), a, 0) : Y.call(null, this.s, ud(this.s, a), a, 0) : null;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new Fd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Fd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Fd(a, vd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.j = b;
  d.A = a;
  return d;
}();
function Hd(a, b, c, d, e) {
  this.l = a;
  this.aa = b;
  this.start = c;
  this.end = d;
  this.i = e;
  this.f = 166617887;
  this.o = 8192;
}
g = Hd.prototype;
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return E.d(this, b, null);
};
g.N = function(a, b, c) {
  return "number" === typeof b ? z.d(this, b, c) : c;
};
g.G = function(a, b) {
  return 0 > b || this.end <= this.start + b ? sd(b, this.end - this.start) : z.a(this.aa, this.start + b);
};
g.S = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.d(this.aa, this.start + b, c);
};
g.Wa = function(a, b, c) {
  var d = this, e = d.start + b;
  return Id.A ? Id.A(d.l, jc.d(d.aa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Id.call(null, d.l, jc.d(d.aa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.H = function() {
  return this.l;
};
g.F = function() {
  return this.end - this.start;
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return ac.a(this, b);
};
g.K = function(a, b, c) {
  return ac.d(this, b, c);
};
g.sa = function(a, b, c) {
  if ("number" === typeof b) {
    return ib(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.C = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : Q(z.a(a.aa, e), new W(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
g.L = function(a, b) {
  return Id.A ? Id.A(b, this.aa, this.start, this.end, this.i) : Id.call(null, b, this.aa, this.start, this.end, this.i);
};
g.B = function(a, b) {
  return Id.A ? Id.A(this.l, ib(this.aa, this.end, b), this.start, this.end + 1, null) : Id.call(null, this.l, ib(this.aa, this.end, b), this.start, this.end + 1, null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.S(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.G(null, a);
};
g.a = function(a, b) {
  return this.S(null, a, b);
};
function Id(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Hd) {
      c = b.start + c, d = b.start + d, b = b.aa;
    } else {
      var f = S(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Hd(a, b, c, d, e);
    }
  }
}
var Gd = function() {
  function a(a, b, c) {
    return Id(null, a, b, c, null);
  }
  function b(a, b) {
    return c.d(a, b, S(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}();
function Jd(a, b) {
  return a === b.n ? b : new md(a, x(b.b));
}
function zd(a) {
  return new md({}, x(a.b));
}
function Ad(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  rc(a, 0, b, 0, a.length);
  return b;
}
var Ld = function Kd(b, c, d, e) {
  d = Jd(b.root.n, d);
  var f = b.e - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.b[f];
    b = null != h ? Kd(b, c - 5, h, e) : pd(b.root.n, c - 5, e);
  }
  d.b[f] = b;
  return d;
};
function yd(a, b, c, d) {
  this.e = a;
  this.shift = b;
  this.root = c;
  this.D = d;
  this.f = 275;
  this.o = 88;
}
g = yd.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.N(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.M(null, a);
};
g.a = function(a, b) {
  return this.N(null, a, b);
};
g.M = function(a, b) {
  return E.d(this, b, null);
};
g.N = function(a, b, c) {
  return "number" === typeof b ? z.d(this, b, c) : c;
};
g.G = function(a, b) {
  if (this.root.n) {
    return vd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.S = function(a, b, c) {
  return 0 <= b && b < this.e ? z.a(this, b) : c;
};
g.F = function() {
  if (this.root.n) {
    return this.e;
  }
  throw Error("count after persistent!");
};
g.eb = function(a, b, c) {
  var d = this;
  if (d.root.n) {
    if (0 <= b && b < d.e) {
      return od(this) <= b ? d.D[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = Jd(d.root.n, k);
          if (0 === a) {
            l.b[b & 31] = c;
          } else {
            var n = b >>> a & 31, p = f(a - 5, l.b[n]);
            l.b[n] = p;
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.e) {
      return yb(this, c);
    }
    if (u) {
      throw Error("Index " + w.c(b) + " out of bounds for TransientVector of length" + w.c(d.e));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.va = function(a, b, c) {
  if ("number" === typeof b) {
    return Bb(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.Aa = function(a, b) {
  if (this.root.n) {
    if (32 > this.e - od(this)) {
      this.D[this.e & 31] = b;
    } else {
      var c = new md(this.root.n, this.D), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.D = d;
      if (this.e >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = pd(this.root.n, this.shift, c);
        this.root = new md(this.root.n, d);
        this.shift = e;
      } else {
        this.root = Ld(this, this.shift, this.root, c);
      }
    }
    this.e += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Ba = function() {
  if (this.root.n) {
    this.root.n = null;
    var a = this.e - od(this), b = Array(a);
    rc(this.D, 0, b, 0, a);
    return new X(null, this.e, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Md() {
  this.o = 0;
  this.f = 2097152;
}
Md.prototype.t = function() {
  return!1;
};
var Nd = new Md;
function Od(a, b) {
  return uc(nc(b) ? S(a) === S(b) ? $c(ad, cd.a(function(a) {
    return Tb.a(T.d(b, I(a), Nd), I(N(a)));
  }, a)) : null : null);
}
function Pd(a, b) {
  var c = a.b;
  if (b instanceof V) {
    a: {
      for (var d = c.length, e = b.fa, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof V && e === h.fa) {
          c = f;
          break a;
        }
        if (u) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ca(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (u) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof Wb) {
        a: {
          d = c.length;
          e = b.ga;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof Wb && e === h.ga) {
              c = f;
              break a;
            }
            if (u) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (u) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (u) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (Tb.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (u) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Qd(a, b, c) {
  this.b = a;
  this.k = b;
  this.qa = c;
  this.o = 0;
  this.f = 32374990;
}
g = Qd.prototype;
g.toString = function() {
  return G(this);
};
g.H = function() {
  return this.qa;
};
g.Z = function() {
  return this.k < this.b.length - 2 ? new Qd(this.b, this.k + 2, this.qa) : null;
};
g.F = function() {
  return(this.b.length - this.k) / 2;
};
g.w = function() {
  return Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return U.a(b, this);
};
g.K = function(a, b, c) {
  return U.d(b, c, this);
};
g.O = function() {
  return new X(null, 2, 5, Z, [this.b[this.k], this.b[this.k + 1]], null);
};
g.P = function() {
  return this.k < this.b.length - 2 ? new Qd(this.b, this.k + 2, this.qa) : L;
};
g.C = function() {
  return this;
};
g.L = function(a, b) {
  return new Qd(this.b, this.k, b);
};
g.B = function(a, b) {
  return Q(b, this);
};
function Na(a, b, c, d) {
  this.l = a;
  this.e = b;
  this.b = c;
  this.i = d;
  this.f = 16647951;
  this.o = 8196;
}
g = Na.prototype;
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return E.d(this, b, null);
};
g.N = function(a, b, c) {
  a = Pd(this, b);
  return-1 === a ? c : this.b[a + 1];
};
g.H = function() {
  return this.l;
};
g.F = function() {
  return this.e;
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = $b(this);
};
g.t = function(a, b) {
  return Od(this, b);
};
g.ta = function() {
  return new Rd({}, this.b.length, x(this.b));
};
g.J = function(a, b) {
  return U.a(b, this);
};
g.K = function(a, b, c) {
  return U.d(b, c, this);
};
g.sa = function(a, b, c) {
  a = Pd(this, b);
  if (-1 === a) {
    if (this.e < Sd) {
      a = this.b;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Na(this.l, this.e + 1, e, null);
    }
    a = mb;
    d = cb;
    e = Td;
    null != e ? e && (e.o & 4 || e.Db) ? (e = xc.d(yb, xb(e), this), e = zb(e)) : e = xc.d(Za, e, this) : e = xc.d(fc, L, this);
    return a(d(e, b, c), this.l);
  }
  return c === this.b[a + 1] ? this : u ? (b = x(this.b), b[a + 1] = c, new Na(this.l, this.e, b, null)) : null;
};
g.C = function() {
  var a = this.b;
  return 0 <= a.length - 2 ? new Qd(a, 0, null) : null;
};
g.L = function(a, b) {
  return new Na(b, this.e, this.b, this.i);
};
g.B = function(a, b) {
  if (oc(b)) {
    return cb(this, z.a(b, 0), z.a(b, 1));
  }
  for (var c = this, d = H(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (oc(e)) {
      c = cb(c, z.a(e, 0), z.a(e, 1)), d = N(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.N(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.M(null, a);
};
g.a = function(a, b) {
  return this.N(null, a, b);
};
var Ud = new Na(null, 0, [], null), Sd = 8;
function Rd(a, b, c) {
  this.ma = a;
  this.ia = b;
  this.b = c;
  this.o = 56;
  this.f = 258;
}
g = Rd.prototype;
g.va = function(a, b, c) {
  if (q(this.ma)) {
    a = Pd(this, b);
    if (-1 === a) {
      return this.ia + 2 <= 2 * Sd ? (this.ia += 2, this.b.push(b), this.b.push(c), this) : Xc.d(Vd.a ? Vd.a(this.ia, this.b) : Vd.call(null, this.ia, this.b), b, c);
    }
    c !== this.b[a + 1] && (this.b[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.Aa = function(a, b) {
  if (q(this.ma)) {
    if (b ? b.f & 2048 || b.mb || (b.f ? 0 : s(eb, b)) : s(eb, b)) {
      return Ab(this, Wd.c ? Wd.c(b) : Wd.call(null, b), Xd.c ? Xd.c(b) : Xd.call(null, b));
    }
    for (var c = H(b), d = this;;) {
      var e = I(c);
      if (q(e)) {
        c = N(c), d = Ab(d, Wd.c ? Wd.c(e) : Wd.call(null, e), Xd.c ? Xd.c(e) : Xd.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Ba = function() {
  if (q(this.ma)) {
    return this.ma = !1, new Na(null, zc(this.ia), this.b, null);
  }
  throw Error("persistent! called twice");
};
g.M = function(a, b) {
  return E.d(this, b, null);
};
g.N = function(a, b, c) {
  if (q(this.ma)) {
    return a = Pd(this, b), -1 === a ? c : this.b[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.F = function() {
  if (q(this.ma)) {
    return zc(this.ia);
  }
  throw Error("count after persistent!");
};
function Vd(a, b) {
  for (var c = xb(Td), d = 0;;) {
    if (d < a) {
      c = Xc.d(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Yd() {
  this.ba = !1;
}
function Zd(a, b) {
  return a === b ? !0 : a === b || a instanceof V && b instanceof V && a.fa === b.fa ? !0 : u ? Tb.a(a, b) : null;
}
var $d = function() {
  function a(a, b, c, h, k) {
    a = x(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = x(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.A = a;
  return c;
}(), ae = function() {
  function a(a, b, c, h, k, l) {
    a = a.na(b);
    a.b[c] = h;
    a.b[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.na(b);
    a.b[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = b;
  c.ca = a;
  return c;
}();
function be(a, b, c) {
  this.n = a;
  this.v = b;
  this.b = c;
}
g = be.prototype;
g.na = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Cc(this.v), c = Array(0 > b ? 4 : 2 * (b + 1));
  rc(this.b, 0, c, 0, 2 * b);
  return new be(a, this.v, c);
};
g.wa = function() {
  return ce.c ? ce.c(this.b) : ce.call(null, this.b);
};
g.ha = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.v & e)) {
    return d;
  }
  var f = Cc(this.v & e - 1), e = this.b[2 * f], f = this.b[2 * f + 1];
  return null == e ? f.ha(a + 5, b, c, d) : Zd(c, e) ? f : u ? d : null;
};
g.W = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Cc(this.v & h - 1);
  if (0 === (this.v & h)) {
    var l = Cc(this.v);
    if (2 * l < this.b.length) {
      a = this.na(a);
      b = a.b;
      f.ba = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.v |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = de.W(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.v >>> d & 1) && (k[d] = null != this.b[e] ? de.W(a, b + 5, Qb(this.b[e]), this.b[e], this.b[e + 1], f) : this.b[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new ee(a, l + 1, k);
    }
    return u ? (b = Array(2 * (l + 4)), rc(this.b, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, rc(this.b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.ba = !0, a = this.na(a), a.b = b, a.v |= h, a) : null;
  }
  l = this.b[2 * k];
  h = this.b[2 * k + 1];
  return null == l ? (l = h.W(a, b + 5, c, d, e, f), l === h ? this : ae.j(this, a, 2 * k + 1, l)) : Zd(d, l) ? e === h ? this : ae.j(this, a, 2 * k + 1, e) : u ? (f.ba = !0, ae.ca(this, a, 2 * k, null, 2 * k + 1, fe.la ? fe.la(a, b + 5, l, h, c, d, e) : fe.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.V = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Cc(this.v & f - 1);
  if (0 === (this.v & f)) {
    var k = Cc(this.v);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = de.V(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.v >>> c & 1) && (h[c] = null != this.b[d] ? de.V(a + 5, Qb(this.b[d]), this.b[d], this.b[d + 1], e) : this.b[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new ee(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    rc(this.b, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    rc(this.b, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.ba = !0;
    return new be(null, this.v | f, a);
  }
  k = this.b[2 * h];
  f = this.b[2 * h + 1];
  return null == k ? (k = f.V(a + 5, b, c, d, e), k === f ? this : new be(null, this.v, $d.d(this.b, 2 * h + 1, k))) : Zd(c, k) ? d === f ? this : new be(null, this.v, $d.d(this.b, 2 * h + 1, d)) : u ? (e.ba = !0, new be(null, this.v, $d.A(this.b, 2 * h, null, 2 * h + 1, fe.ca ? fe.ca(a + 5, k, f, b, c, d) : fe.call(null, a + 5, k, f, b, c, d)))) : null;
};
var de = new be(null, 0, []);
function ee(a, b, c) {
  this.n = a;
  this.e = b;
  this.b = c;
}
g = ee.prototype;
g.na = function(a) {
  return a === this.n ? this : new ee(a, this.e, x(this.b));
};
g.wa = function() {
  return ge.c ? ge.c(this.b) : ge.call(null, this.b);
};
g.ha = function(a, b, c, d) {
  var e = this.b[b >>> a & 31];
  return null != e ? e.ha(a + 5, b, c, d) : d;
};
g.W = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.b[h];
  if (null == k) {
    return a = ae.j(this, a, h, de.W(a, b + 5, c, d, e, f)), a.e += 1, a;
  }
  b = k.W(a, b + 5, c, d, e, f);
  return b === k ? this : ae.j(this, a, h, b);
};
g.V = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.b[f];
  if (null == h) {
    return new ee(null, this.e + 1, $d.d(this.b, f, de.V(a + 5, b, c, d, e)));
  }
  a = h.V(a + 5, b, c, d, e);
  return a === h ? this : new ee(null, this.e, $d.d(this.b, f, a));
};
function he(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Zd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function ie(a, b, c, d) {
  this.n = a;
  this.ea = b;
  this.e = c;
  this.b = d;
}
g = ie.prototype;
g.na = function(a) {
  if (a === this.n) {
    return this;
  }
  var b = Array(2 * (this.e + 1));
  rc(this.b, 0, b, 0, 2 * this.e);
  return new ie(a, this.ea, this.e, b);
};
g.wa = function() {
  return ce.c ? ce.c(this.b) : ce.call(null, this.b);
};
g.ha = function(a, b, c, d) {
  a = he(this.b, this.e, c);
  return 0 > a ? d : Zd(c, this.b[a]) ? this.b[a + 1] : u ? d : null;
};
g.W = function(a, b, c, d, e, f) {
  if (c === this.ea) {
    b = he(this.b, this.e, d);
    if (-1 === b) {
      if (this.b.length > 2 * this.e) {
        return a = ae.ca(this, a, 2 * this.e, d, 2 * this.e + 1, e), f.ba = !0, a.e += 1, a;
      }
      c = this.b.length;
      b = Array(c + 2);
      rc(this.b, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.ba = !0;
      f = this.e + 1;
      a === this.n ? (this.b = b, this.e = f, a = this) : a = new ie(this.n, this.ea, f, b);
      return a;
    }
    return this.b[b + 1] === e ? this : ae.j(this, a, b + 1, e);
  }
  return(new be(a, 1 << (this.ea >>> b & 31), [null, this, null, null])).W(a, b, c, d, e, f);
};
g.V = function(a, b, c, d, e) {
  return b === this.ea ? (a = he(this.b, this.e, c), -1 === a ? (a = 2 * this.e, b = Array(a + 2), rc(this.b, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.ba = !0, new ie(null, this.ea, this.e + 1, b)) : Tb.a(this.b[a], d) ? this : new ie(null, this.ea, this.e, $d.d(this.b, a + 1, d))) : (new be(null, 1 << (this.ea >>> a & 31), [null, this])).V(a, b, c, d, e);
};
var fe = function() {
  function a(a, b, c, h, k, l, n) {
    var p = Qb(c);
    if (p === k) {
      return new ie(null, p, 2, [c, h, l, n]);
    }
    var r = new Yd;
    return de.W(a, b, p, c, h, r).W(a, b, k, l, n, r);
  }
  function b(a, b, c, h, k, l) {
    var n = Qb(b);
    if (n === h) {
      return new ie(null, n, 2, [b, c, k, l]);
    }
    var p = new Yd;
    return de.V(a, n, b, c, p).V(a, h, k, l, p);
  }
  var c = null, c = function(c, e, f, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ca = b;
  c.la = a;
  return c;
}();
function je(a, b, c, d, e) {
  this.l = a;
  this.X = b;
  this.k = c;
  this.q = d;
  this.i = e;
  this.o = 0;
  this.f = 32374860;
}
g = je.prototype;
g.toString = function() {
  return G(this);
};
g.H = function() {
  return this.l;
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return U.a(b, this);
};
g.K = function(a, b, c) {
  return U.d(b, c, this);
};
g.O = function() {
  return null == this.q ? new X(null, 2, 5, Z, [this.X[this.k], this.X[this.k + 1]], null) : I(this.q);
};
g.P = function() {
  return null == this.q ? ce.d ? ce.d(this.X, this.k + 2, null) : ce.call(null, this.X, this.k + 2, null) : ce.d ? ce.d(this.X, this.k, N(this.q)) : ce.call(null, this.X, this.k, N(this.q));
};
g.C = function() {
  return this;
};
g.L = function(a, b) {
  return new je(b, this.X, this.k, this.q, this.i);
};
g.B = function(a, b) {
  return Q(b, this);
};
var ce = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new je(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (q(h) && (h = h.wa(), q(h))) {
            return new je(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new je(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.d(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.d = a;
  return c;
}();
function ke(a, b, c, d, e) {
  this.l = a;
  this.X = b;
  this.k = c;
  this.q = d;
  this.i = e;
  this.o = 0;
  this.f = 32374860;
}
g = ke.prototype;
g.toString = function() {
  return G(this);
};
g.H = function() {
  return this.l;
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return U.a(b, this);
};
g.K = function(a, b, c) {
  return U.d(b, c, this);
};
g.O = function() {
  return I(this.q);
};
g.P = function() {
  return ge.j ? ge.j(null, this.X, this.k, N(this.q)) : ge.call(null, null, this.X, this.k, N(this.q));
};
g.C = function() {
  return this;
};
g.L = function(a, b) {
  return new ke(b, this.X, this.k, this.q, this.i);
};
g.B = function(a, b) {
  return Q(b, this);
};
var ge = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (q(k) && (k = k.wa(), q(k))) {
            return new ke(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new ke(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.j(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.j = a;
  return c;
}();
function le(a, b, c, d, e, f) {
  this.l = a;
  this.e = b;
  this.root = c;
  this.Q = d;
  this.T = e;
  this.i = f;
  this.f = 16123663;
  this.o = 8196;
}
g = le.prototype;
g.toString = function() {
  return G(this);
};
g.M = function(a, b) {
  return E.d(this, b, null);
};
g.N = function(a, b, c) {
  return null == b ? this.Q ? this.T : c : null == this.root ? c : u ? this.root.ha(0, Qb(b), b, c) : null;
};
g.H = function() {
  return this.l;
};
g.F = function() {
  return this.e;
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = $b(this);
};
g.t = function(a, b) {
  return Od(this, b);
};
g.ta = function() {
  return new me({}, this.root, this.e, this.Q, this.T);
};
g.sa = function(a, b, c) {
  if (null == b) {
    return this.Q && c === this.T ? this : new le(this.l, this.Q ? this.e : this.e + 1, this.root, !0, c, null);
  }
  a = new Yd;
  b = (null == this.root ? de : this.root).V(0, Qb(b), b, c, a);
  return b === this.root ? this : new le(this.l, a.ba ? this.e + 1 : this.e, b, this.Q, this.T, null);
};
g.C = function() {
  if (0 < this.e) {
    var a = null != this.root ? this.root.wa() : null;
    return this.Q ? Q(new X(null, 2, 5, Z, [null, this.T], null), a) : a;
  }
  return null;
};
g.L = function(a, b) {
  return new le(b, this.e, this.root, this.Q, this.T, this.i);
};
g.B = function(a, b) {
  if (oc(b)) {
    return cb(this, z.a(b, 0), z.a(b, 1));
  }
  for (var c = this, d = H(b);;) {
    if (null == d) {
      return c;
    }
    var e = I(d);
    if (oc(e)) {
      c = cb(c, z.a(e, 0), z.a(e, 1)), d = N(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.M(null, c);
      case 3:
        return this.N(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x(b)));
};
g.c = function(a) {
  return this.M(null, a);
};
g.a = function(a, b) {
  return this.N(null, a, b);
};
var Td = new le(null, 0, null, !1, null, 0);
function ic(a, b) {
  for (var c = a.length, d = 0, e = xb(Td);;) {
    if (d < c) {
      var f = d + 1, e = e.va(null, a[d], b[d]), d = f
    } else {
      return zb(e);
    }
  }
}
function me(a, b, c, d, e) {
  this.n = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.T = e;
  this.o = 56;
  this.f = 258;
}
g = me.prototype;
g.va = function(a, b, c) {
  return ne(this, b, c);
};
g.Aa = function(a, b) {
  var c;
  a: {
    if (this.n) {
      if (b ? b.f & 2048 || b.mb || (b.f ? 0 : s(eb, b)) : s(eb, b)) {
        c = ne(this, Wd.c ? Wd.c(b) : Wd.call(null, b), Xd.c ? Xd.c(b) : Xd.call(null, b));
        break a;
      }
      c = H(b);
      for (var d = this;;) {
        var e = I(c);
        if (q(e)) {
          c = N(c), d = ne(d, Wd.c ? Wd.c(e) : Wd.call(null, e), Xd.c ? Xd.c(e) : Xd.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
g.Ba = function() {
  var a;
  if (this.n) {
    this.n = null, a = new le(null, this.count, this.root, this.Q, this.T, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.M = function(a, b) {
  return null == b ? this.Q ? this.T : null : null == this.root ? null : this.root.ha(0, Qb(b), b);
};
g.N = function(a, b, c) {
  return null == b ? this.Q ? this.T : c : null == this.root ? c : this.root.ha(0, Qb(b), b, c);
};
g.F = function() {
  if (this.n) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function ne(a, b, c) {
  if (a.n) {
    if (null == b) {
      a.T !== c && (a.T = c), a.Q || (a.count += 1, a.Q = !0);
    } else {
      var d = new Yd;
      b = (null == a.root ? de : a.root).W(a.n, 0, Qb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.ba && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var oe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = H(a);
    for (var b = xb(Td);;) {
      if (a) {
        var e = N(N(a)), b = Xc.d(b, I(a), I(N(a)));
        a = e;
      } else {
        return zb(b);
      }
    }
  }
  a.m = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function Wd(a) {
  return fb(a);
}
function Xd(a) {
  return gb(a);
}
function Hc(a) {
  if (a && (a.o & 4096 || a.ob)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + w.c(a));
}
function pe(a, b, c, d, e) {
  this.l = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.i = e;
  this.f = 32375006;
  this.o = 8192;
}
g = pe.prototype;
g.toString = function() {
  return G(this);
};
g.G = function(a, b) {
  if (b < y(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.S = function(a, b, c) {
  return b < y(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.H = function() {
  return this.l;
};
g.Z = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new pe(this.l, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new pe(this.l, this.start + this.step, this.end, this.step, null) : null;
};
g.F = function() {
  return Ua(sb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
g.w = function() {
  var a = this.i;
  return null != a ? a : this.i = a = Zb(this);
};
g.t = function(a, b) {
  return P(this, b);
};
g.J = function(a, b) {
  return ac.a(this, b);
};
g.K = function(a, b, c) {
  return ac.d(this, b, c);
};
g.O = function() {
  return null == sb(this) ? null : this.start;
};
g.P = function() {
  return null != sb(this) ? new pe(this.l, this.start + this.step, this.end, this.step, null) : L;
};
g.C = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
g.L = function(a, b) {
  return new pe(b, this.start, this.end, this.step, this.i);
};
g.B = function(a, b) {
  return Q(b, this);
};
var qe = function() {
  function a(a, b, c) {
    return new pe(null, a, b, c, null);
  }
  function b(a, b) {
    return e.d(a, b, 1);
  }
  function c(a) {
    return e.d(0, a, 1);
  }
  function d() {
    return e.d(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, h);
      case 3:
        return a.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = d;
  e.c = c;
  e.a = b;
  e.d = a;
  return e;
}(), re = function() {
  function a(a, b) {
    for (;;) {
      if (H(b) && 0 < a) {
        var c = a - 1, h = N(b);
        a = c;
        b = h;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (H(a)) {
        a = N(a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), se = function() {
  function a(a, b) {
    re.a(a, b);
    return b;
  }
  function b(a) {
    re.c(a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function te(a, b, c, d, e, f, h) {
  var k = La;
  try {
    La = null == La ? null : La - 1;
    if (null != La && 0 > La) {
      return F(a, "#");
    }
    F(a, c);
    H(h) && (b.d ? b.d(I(h), a, f) : b.call(null, I(h), a, f));
    for (var l = N(h), n = Sa.c(f) - 1;;) {
      if (!l || null != n && 0 === n) {
        H(l) && 0 === n && (F(a, d), F(a, "..."));
        break;
      } else {
        F(a, d);
        b.d ? b.d(I(l), a, f) : b.call(null, I(l), a, f);
        var p = N(l);
        c = n - 1;
        l = p;
        n = c;
      }
    }
    return F(a, e);
  } finally {
    La = k;
  }
}
var ue = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = O(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = H(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.G(null, k);
        F(a, l);
        k += 1;
      } else {
        if (e = H(e)) {
          f = e, pc(f) ? (e = Db(f), h = Eb(f), f = e, l = S(e), e = h, h = l) : (l = I(f), F(a, l), e = N(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.m = 1;
  a.h = function(a) {
    var d = I(a);
    a = K(a);
    return b(d, a);
  };
  a.g = b;
  return a;
}(), ve = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function we(a) {
  return'"' + w.c(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return ve[a];
  })) + '"';
}
var $ = function xe(b, c, d) {
  if (null == b) {
    return F(c, "nil");
  }
  if (void 0 === b) {
    return F(c, "#\x3cundefined\x3e");
  }
  if (u) {
    q(function() {
      var c = T.a(d, Qa);
      return q(c) ? (c = b ? b.f & 131072 || b.nb ? !0 : b.f ? !1 : s(kb, b) : s(kb, b)) ? lc(b) : c : c;
    }()) && (F(c, "^"), xe(lc(b), c, d), F(c, " "));
    if (null == b) {
      return F(c, "nil");
    }
    if (b.wb) {
      return b.Kb(b, c, d);
    }
    if (b && (b.f & 2147483648 || b.I)) {
      return b.u(null, c, d);
    }
    if (Va(b) === Boolean || "number" === typeof b) {
      return F(c, "" + w.c(b));
    }
    if (null != b && b.constructor === Object) {
      return F(c, "#js "), ye.j ? ye.j(cd.a(function(c) {
        return new X(null, 2, 5, Z, [Ic.c(c), b[c]], null);
      }, qc(b)), xe, c, d) : ye.call(null, cd.a(function(c) {
        return new X(null, 2, 5, Z, [Ic.c(c), b[c]], null);
      }, qc(b)), xe, c, d);
    }
    if (b instanceof Array) {
      return te(c, xe, "#js [", " ", "]", d, b);
    }
    if (ca(b)) {
      return q(Pa.c(d)) ? F(c, we(b)) : F(c, b);
    }
    if (kc(b)) {
      return ue.g(c, O(["#\x3c", "" + w.c(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w.c(b);;) {
          if (S(d) < c) {
            d = "0" + w.c(d);
          } else {
            return d;
          }
        }
      };
      return ue.g(c, O(['#inst "', "" + w.c(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? ue.g(c, O(['#"', b.source, '"'], 0)) : (b ? b.f & 2147483648 || b.I || (b.f ? 0 : s(ub, b)) : s(ub, b)) ? vb(b, c, d) : u ? ue.g(c, O(["#\x3c", "" + w.c(b), "\x3e"], 0)) : null;
  }
  return null;
};
function ze(a, b) {
  var c = new Ka;
  a: {
    var d = new Gb(c);
    $(I(a), d, b);
    for (var e = H(N(a)), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.G(null, k);
        F(d, " ");
        $(l, d, b);
        k += 1;
      } else {
        if (e = H(e)) {
          f = e, pc(f) ? (e = Db(f), h = Eb(f), f = e, l = S(e), e = h, h = l) : (l = I(f), F(d, " "), $(l, d, b), e = N(f), f = null, h = 0), k = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var Ae = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Ma();
    return null == a || Ua(H(a)) ? "" : "" + w.c(ze(a, b));
  }
  a.m = 0;
  a.h = function(a) {
    a = H(a);
    return b(a);
  };
  a.g = b;
  return a;
}();
function ye(a, b, c, d) {
  return te(c, function(a, c, d) {
    b.d ? b.d(fb(a), c, d) : b.call(null, fb(a), c, d);
    F(c, " ");
    return b.d ? b.d(gb(a), c, d) : b.call(null, gb(a), c, d);
  }, "{", ", ", "}", d, H(a));
}
Xb.prototype.I = !0;
Xb.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
W.prototype.I = !0;
W.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
je.prototype.I = !0;
je.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
Qd.prototype.I = !0;
Qd.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
Fd.prototype.I = !0;
Fd.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
Gc.prototype.I = !0;
Gc.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
le.prototype.I = !0;
le.prototype.u = function(a, b, c) {
  return ye(this, $, b, c);
};
ke.prototype.I = !0;
ke.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
Hd.prototype.I = !0;
Hd.prototype.u = function(a, b, c) {
  return te(b, $, "[", " ", "]", c, this);
};
Nc.prototype.I = !0;
Nc.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
X.prototype.I = !0;
X.prototype.u = function(a, b, c) {
  return te(b, $, "[", " ", "]", c, this);
};
Ec.prototype.I = !0;
Ec.prototype.u = function(a, b) {
  return F(b, "()");
};
Na.prototype.I = !0;
Na.prototype.u = function(a, b, c) {
  return ye(this, $, b, c);
};
pe.prototype.I = !0;
pe.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
Dc.prototype.I = !0;
Dc.prototype.u = function(a, b, c) {
  return te(b, $, "(", " ", ")", c, this);
};
X.prototype.ya = !0;
X.prototype.za = function(a, b) {
  return wc.a(this, b);
};
Hd.prototype.ya = !0;
Hd.prototype.za = function(a, b) {
  return wc.a(this, b);
};
V.prototype.ya = !0;
V.prototype.za = function(a, b) {
  return Sb(this, b);
};
Wb.prototype.ya = !0;
Wb.prototype.za = function(a, b) {
  return Sb(this, b);
};
function Be(a, b) {
  if (a ? a.qb : a) {
    return a.qb(a, b);
  }
  var c;
  c = Be[m(null == a ? null : a)];
  if (!c && (c = Be._, !c)) {
    throw v("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Ce = function() {
  function a(a, b, c, d, e) {
    if (a ? a.ub : a) {
      return a.ub(a, b, c, d, e);
    }
    var p;
    p = Ce[m(null == a ? null : a)];
    if (!p && (p = Ce._, !p)) {
      throw v("ISwap.-swap!", a);
    }
    return p.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.tb : a) {
      return a.tb(a, b, c, d);
    }
    var e;
    e = Ce[m(null == a ? null : a)];
    if (!e && (e = Ce._, !e)) {
      throw v("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.sb : a) {
      return a.sb(a, b, c);
    }
    var d;
    d = Ce[m(null == a ? null : a)];
    if (!d && (d = Ce._, !d)) {
      throw v("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.rb : a) {
      return a.rb(a, b);
    }
    var c;
    c = Ce[m(null == a ? null : a)];
    if (!c && (c = Ce._, !c)) {
      throw v("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.d = c;
  e.j = b;
  e.A = a;
  return e;
}();
function De(a, b, c, d) {
  this.state = a;
  this.l = b;
  this.zb = c;
  this.jb = d;
  this.f = 2153938944;
  this.o = 16386;
}
g = De.prototype;
g.w = function() {
  return this[da] || (this[da] = ++ea);
};
g.fb = function(a, b, c) {
  a = H(this.jb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.G(null, f), k = hc.d(h, 0, null), h = hc.d(h, 1, null);
      h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = H(a)) {
        pc(a) ? (d = Db(a), a = Eb(a), k = d, e = S(d), d = k) : (d = I(a), k = hc.d(d, 0, null), h = hc.d(d, 1, null), h.j ? h.j(k, this, b, c) : h.call(null, k, this, b, c), a = N(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.u = function(a, b, c) {
  F(b, "#\x3cAtom: ");
  $(this.state, b, c);
  return F(b, "\x3e");
};
g.H = function() {
  return this.l;
};
g.lb = function() {
  return this.state;
};
g.t = function(a, b) {
  return this === b;
};
var Fe = function() {
  function a(a) {
    return new De(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = tc(c) ? Zc.a(oe, c) : c, e = T.a(d, Ee), d = T.a(d, Qa);
      return new De(a, d, e, null);
    }
    a.m = 1;
    a.h = function(a) {
      var c = I(a);
      a = K(a);
      return b(c, a);
    };
    a.g = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.g(b, O(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.m = 1;
  b.h = c.h;
  b.c = a;
  b.g = c.g;
  return b;
}();
function Ge(a, b) {
  if (a instanceof De) {
    var c = a.zb;
    if (null != c && !q(c.c ? c.c(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + w.c(Ae.g(O([Fc(new Wb(null, "validate", "validate", 1439230700, null), new Wb(null, "new-value", "new-value", -1567397401, null))], 0))));
    }
    c = a.state;
    a.state = b;
    null != a.jb && wb(a, c, b);
    return b;
  }
  return Be(a, b);
}
var He = function() {
  function a(a, b, c, d) {
    return a instanceof De ? Ge(a, b.d ? b.d(a.state, c, d) : b.call(null, a.state, c, d)) : Ce.j(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof De ? Ge(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : Ce.d(a, b, c);
  }
  function c(a, b) {
    return a instanceof De ? Ge(a, b.c ? b.c(a.state) : b.call(null, a.state)) : Ce.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, f, r) {
      var t = null;
      4 < arguments.length && (t = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, t);
    }
    function b(a, c, d, e, f) {
      return a instanceof De ? Ge(a, Zc.A(c, a.state, d, e, f)) : Ce.A(a, c, d, e, f);
    }
    a.m = 4;
    a.h = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var f = I(a);
      a = K(a);
      return b(c, d, e, f, a);
    };
    a.g = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.g(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.m = 4;
  d.h = e.h;
  d.a = c;
  d.d = b;
  d.j = a;
  d.g = e.g;
  return d;
}(), Ac = function() {
  function a(a) {
    return(Math.random.p ? Math.random.p() : Math.random.call(null)) * a;
  }
  function b() {
    return c.c(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.c = a;
  return c;
}(), Bc = function(a) {
  return Math.floor.c ? Math.floor.c((Math.random.p ? Math.random.p() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.p ? Math.random.p() : Math.random.call(null)) * a);
};
var Ie = new V(null, "y", "y"), Je = new V(null, "winning", "winning"), Ke = new V(null, "sign", "sign"), Qa = new V(null, "meta", "meta"), Ra = new V(null, "dup", "dup"), u = new V(null, "else", "else"), Ee = new V(null, "validator", "validator"), Vb = new V(null, "default", "default"), Le = new V(null, "grid", "grid"), Oa = new V(null, "flush-on-newline", "flush-on-newline"), Me = new V(null, "winning-sign", "winning-sign"), Pa = new V(null, "readably", "readably"), Sa = new V(null, "print-length", 
"print-length"), Ne = new V(null, "id", "id"), Oe = new V(null, "info", "info"), Pe = new V(null, "error", "error"), Qe = new V(null, "x", "x");
var Re = function() {
  function a(a, c) {
    return Dd(cd.a(function(a) {
      return new Na(null, 1, [Ne, a], null);
    }, qe.a(a, c)));
  }
  return new X(null, 3, 5, Z, [a(0, 3), a(3, 6), a(6, 9)], null);
}();
function Se(a) {
  var b = a / 3 | 0;
  return new Na(null, 2, [Qe, a - 3 * b, Ie, b], null);
}
function Te(a, b, c) {
  var d = hc.d(c, 0, null), e = hc.d(c, 1, null);
  return xc.d(function(a, b, c) {
    return function(a, d) {
      var e = new X(null, 2, 5, Z, [b, c], null), f = hc.d(e, 0, null), e = hc.d(e, 1, null), t = Se(d), B = tc(t) ? Zc.a(oe, t) : t, t = T.a(B, Ie), B = T.a(B, Qe);
      return ld(a, new X(null, 3, 5, Z, [t, B, f], null), e);
    };
  }(c, d, e), a, b);
}
function Ue(a, b) {
  var c = Se(b), d = tc(c) ? Zc.a(oe, c) : c, c = T.a(d, Ie), d = T.a(d, Qe);
  return jd.a(a, new X(null, 2, 5, Z, [c, d], null));
}
function Ve(a) {
  var b = Zc.d(cd, Ed, a), c = cd.a(function(b, c) {
    return function(f) {
      return cd.a(function() {
        return function(b) {
          return Ue(a, b);
        };
      }(b, c), f);
    };
  }(a, b), new X(null, 2, 5, Z, [new X(null, 3, 5, Z, [0, 4, 8], null), new X(null, 3, 5, Z, [2, 4, 6], null)], null));
  return Uc.g(a, b, O([c], 0));
}
function We(a) {
  var b = id(gd(function(a) {
    return function(b) {
      return a(b, "X") || a(b, "0");
    };
  }(function(a, b) {
    return $c(function(a) {
      return Tb.a(Ke.c(a), b);
    }, a);
  }), Ve(a))), c = cd.a(Ne, b);
  return new Na(null, 2, [Me, jd.a(I(b), new X(null, 1, 5, Z, [Ke], null)), Le, Te(a, c, new X(null, 2, 5, Z, [Je, !0], null))], null);
}
var Xe = function() {
  function a(a, b, c) {
    return Te(a, b, new X(null, 2, 5, Z, [Ke, c], null));
  }
  function b(a, b) {
    return c.d(Re, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}();
var Ye = !ra || ra && 9 <= Fa, Ze = ra && !Da("9");
!ta || Da("528");
sa && Da("1.9b") || ra && Da("8") || qa && Da("9.5") || ta && Da("528");
sa && !Da("8") || ra && Da("9");
function $e(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.ib = !1;
}
$e.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function af(a) {
  af[" "](a);
  return a;
}
af[" "] = function() {
};
function bf(a, b) {
  $e.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.hb = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (sa) {
        var e;
        a: {
          try {
            af(d.nodeName);
            e = !0;
            break a;
          } catch (f) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = ta || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = ta || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.hb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = $e.prototype;
  bf.yb = $e.prototype;
  bf.prototype = new a;
  bf.prototype.constructor = bf;
  bf.Ab = function(a, c, d) {
    return $e.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
})();
bf.prototype.preventDefault = function() {
  bf.yb.preventDefault.call(this);
  var a = this.hb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Ze) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var cf = "closure_listenable_" + (1E6 * Math.random() | 0);
function df(a) {
  try {
    return!(!a || !a[cf]);
  } catch (b) {
    return!1;
  }
}
var ef = 0;
function ff(a, b, c, d, e) {
  this.pa = a;
  this.Ca = null;
  this.src = b;
  this.type = c;
  this.Fa = !!d;
  this.Xa = e;
  this.key = ++ef;
  this.xa = this.Ea = !1;
}
function gf(a) {
  a.xa = !0;
  a.pa = null;
  a.Ca = null;
  a.src = null;
  a.Xa = null;
}
;function hf(a) {
  this.src = a;
  this.ja = {};
  this.Ya = 0;
}
hf.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.ja[f];
  a || (a = this.ja[f] = [], this.Ya++);
  var h;
  a: {
    for (h = 0;h < a.length;++h) {
      var k = a[h];
      if (!k.xa && k.pa == b && k.Fa == !!d && k.Xa == e) {
        break a;
      }
    }
    h = -1;
  }
  -1 < h ? (b = a[h], c || (b.Ea = !1)) : (b = new ff(b, this.src, f, !!d, e), b.Ea = c, a.push(b));
  return b;
};
var jf = "closure_lm_" + (1E6 * Math.random() | 0), kf = {}, lf = 0;
function mf(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var f = 0;f < b.length;f++) {
      mf(a, b[f], c, d, e);
    }
  } else {
    if (c = nf(c), df(a)) {
      a.Mb(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var f = !!d, h = of(a);
      h || (a[jf] = h = new hf(a));
      c = h.add(b, c, !1, d, e);
      c.Ca || (d = pf(), c.Ca = d, d.src = a, d.pa = c, a.addEventListener ? a.addEventListener(b, d, f) : a.attachEvent(b in kf ? kf[b] : kf[b] = "on" + b, d), lf++);
    }
  }
}
function pf() {
  var a = qf, b = Ye ? function(c) {
    return a.call(b.src, b.pa, c);
  } : function(c) {
    c = a.call(b.src, b.pa, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function rf(a, b, c, d) {
  var e = 1;
  if (a = of(a)) {
    if (b = a.ja[b]) {
      a = b.length;
      if (0 < a) {
        for (var f = Array(a), h = 0;h < a;h++) {
          f[h] = b[h];
        }
        b = f;
      } else {
        b = [];
      }
      for (a = 0;a < b.length;a++) {
        (f = b[a]) && f.Fa == c && !f.xa && (e &= !1 !== sf(f, d));
      }
    }
  }
  return Boolean(e);
}
function sf(a, b) {
  var c = a.pa, d = a.Xa || a.src;
  if (a.Ea && "number" != typeof a && a && !a.xa) {
    var e = a.src;
    if (df(e)) {
      e.Nb(a);
    } else {
      var f = a.type, h = a.Ca;
      e.removeEventListener ? e.removeEventListener(f, h, a.Fa) : e.detachEvent && e.detachEvent(f in kf ? kf[f] : kf[f] = "on" + f, h);
      lf--;
      if (f = of(e)) {
        var h = a.type, k;
        if (k = h in f.ja) {
          k = f.ja[h];
          var l = ia(k, a), n;
          (n = 0 <= l) && ga.splice.call(k, l, 1);
          k = n;
        }
        k && (gf(a), 0 == f.ja[h].length && (delete f.ja[h], f.Ya--));
        0 == f.Ya && (f.src = null, e[jf] = null);
      } else {
        gf(a);
      }
    }
  }
  return c.call(d, b);
}
function qf(a, b) {
  if (a.xa) {
    return!0;
  }
  if (!Ye) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = ba, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new bf(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var f = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (f = c.currentTarget;f;f = f.parentNode) {
        e.push(f);
      }
      for (var f = a.type, k = e.length - 1;!c.ib && 0 <= k;k--) {
        c.currentTarget = e[k], d &= rf(e[k], f, !0, c);
      }
      for (k = 0;!c.ib && k < e.length;k++) {
        c.currentTarget = e[k], d &= rf(e[k], f, !1, c);
      }
    }
    return d;
  }
  return sf(a, new bf(b, this));
}
function of(a) {
  a = a[jf];
  return a instanceof hf ? a : null;
}
var tf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function nf(a) {
  return "function" == m(a) ? a : a[tf] || (a[tf] = function(b) {
    return a.handleEvent(b);
  });
}
;var uf = Fe.c(Ud), vf = Fe.c(function(a) {
  return hc.a(a, Bc(S(a)));
}(new X(null, 2, 5, Z, ["0", "X"], null)));
function wf(a, b) {
  var c = Ha("message"), d = c.classList;
  c.innerHTML = b;
  d.toggle("error", Tb.a(Pe, a));
  return d.toggle("info", Tb.a(Oe, a));
}
function xf() {
  var a = jb(uf), b = tc(a) ? Zc.a(oe, a) : a, c = T.a(b, Le);
  se.c(cd.d(function() {
    return function(a, b) {
      a.innerHTML = Ke.a(b, "");
      a.setAttribute("data-index", Ne.c(b));
      return a.classList.toggle("winning", Je.c(b));
    };
  }(a, b, c), O.c(Ia()), id(c)));
}
function yf(a) {
  He.a(uf, function() {
    return We(a);
  });
  xf();
  return q(Me.c(jb(uf))) ? wf(Oe, "WELL DONE! YOU WON!") : wf(Oe, "");
}
function zf() {
  return He.a(vf, function() {
    return Tb.a(jb(vf), "X") ? "0" : "X";
  });
}
function Af() {
  return yf(Re);
}
function Bf(a) {
  if (q(Me.c(jb(uf)))) {
    return wf(Oe, "RESTART TO PLAY AGAIN!");
  }
  a = parseInt(a.target.getAttribute("data-index"));
  var b = jb(vf), c = Le.c(jb(uf)), c = bd(Ta).call(null, Ke.c(Ue(c, a))), c = q(c) ? c : bd(vc).call(null, Dd(qe.a(0, 9)), a);
  if (q(c)) {
    return wf(Pe, "BAD MOVE! TRY AGAIN!");
  }
  yf(Xe.d(Le.c(jb(uf)), new X(null, 1, 5, Z, [a], null), b));
  return zf();
}
Af();
mf(Ha("reset"), "click", Af);
for (var Cf = H(O.c(Ia())), Df = null, Ef = 0, Ff = 0;;) {
  if (Ff < Ef) {
    var Gf = Df.G(null, Ff);
    mf(Gf, "click", Bf);
    Ff += 1;
  } else {
    var Hf = H(Cf);
    if (Hf) {
      var If = Hf;
      if (pc(If)) {
        var Jf = Db(If), Kf = Eb(If), Lf = Jf, Mf = S(Jf), Cf = Kf, Df = Lf, Ef = Mf
      } else {
        var Nf = I(If);
        mf(Nf, "click", Bf);
        Cf = N(If);
        Df = null;
        Ef = 0;
      }
      Ff = 0;
    } else {
      break;
    }
  }
}
;
})();
