function id(C, e) {
  for (var t = 0; t < e.length; t++) {
    const n = e[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const r in n)
        if (r !== "default" && !(r in C)) {
          const o = Object.getOwnPropertyDescriptor(n, r);
          o &&
            Object.defineProperty(
              C,
              r,
              o.get ? o : { enumerable: !0, get: () => n[r] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(C, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = t(r);
    fetch(r.href, o);
  }
})();
var I0 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function nt(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default")
    ? C.default
    : C;
}
function w2(C) {
  if (C.__esModule) return C;
  var e = C.default;
  if (typeof e == "function") {
    var t = function n() {
      return this instanceof n
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, "__esModule", { value: !0 }),
    Object.keys(C).forEach(function (n) {
      var r = Object.getOwnPropertyDescriptor(C, n);
      Object.defineProperty(
        t,
        n,
        r.get
          ? r
          : {
              enumerable: !0,
              get: function () {
                return C[n];
              },
            }
      );
    }),
    t
  );
}
var ds = { exports: {} },
  x9 = {},
  fs = { exports: {} },
  q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var h0 = Symbol.for("react.element"),
  sd = Symbol.for("react.portal"),
  ad = Symbol.for("react.fragment"),
  ld = Symbol.for("react.strict_mode"),
  ud = Symbol.for("react.profiler"),
  cd = Symbol.for("react.provider"),
  dd = Symbol.for("react.context"),
  fd = Symbol.for("react.forward_ref"),
  pd = Symbol.for("react.suspense"),
  hd = Symbol.for("react.memo"),
  md = Symbol.for("react.lazy"),
  er = Symbol.iterator;
function gd(C) {
  return C === null || typeof C != "object"
    ? null
    : ((C = (er && C[er]) || C["@@iterator"]),
      typeof C == "function" ? C : null);
}
var ps = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  hs = Object.assign,
  ms = {};
function G8(C, e, t) {
  (this.props = C),
    (this.context = e),
    (this.refs = ms),
    (this.updater = t || ps);
}
G8.prototype.isReactComponent = {};
G8.prototype.setState = function (C, e) {
  if (typeof C != "object" && typeof C != "function" && C != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, C, e, "setState");
};
G8.prototype.forceUpdate = function (C) {
  this.updater.enqueueForceUpdate(this, C, "forceUpdate");
};
function gs() {}
gs.prototype = G8.prototype;
function rt(C, e, t) {
  (this.props = C),
    (this.context = e),
    (this.refs = ms),
    (this.updater = t || ps);
}
var ot = (rt.prototype = new gs());
ot.constructor = rt;
hs(ot, G8.prototype);
ot.isPureReactComponent = !0;
var tr = Array.isArray,
  vs = Object.prototype.hasOwnProperty,
  it = { current: null },
  ys = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ss(C, e, t) {
  var n,
    r = {},
    o = null,
    i = null;
  if (e != null)
    for (n in (e.ref !== void 0 && (i = e.ref),
    e.key !== void 0 && (o = "" + e.key),
    e))
      vs.call(e, n) && !ys.hasOwnProperty(n) && (r[n] = e[n]);
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    for (var a = Array(s), l = 0; l < s; l++) a[l] = arguments[l + 2];
    r.children = a;
  }
  if (C && C.defaultProps)
    for (n in ((s = C.defaultProps), s)) r[n] === void 0 && (r[n] = s[n]);
  return {
    $$typeof: h0,
    type: C,
    key: o,
    ref: i,
    props: r,
    _owner: it.current,
  };
}
function vd(C, e) {
  return {
    $$typeof: h0,
    type: C.type,
    key: e,
    ref: C.ref,
    props: C.props,
    _owner: C._owner,
  };
}
function st(C) {
  return typeof C == "object" && C !== null && C.$$typeof === h0;
}
function yd(C) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    C.replace(/[=:]/g, function (t) {
      return e[t];
    })
  );
}
var nr = /\/+/g;
function B7(C, e) {
  return typeof C == "object" && C !== null && C.key != null
    ? yd("" + C.key)
    : e.toString(36);
}
function l6(C, e, t, n, r) {
  var o = typeof C;
  (o === "undefined" || o === "boolean") && (C = null);
  var i = !1;
  if (C === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (C.$$typeof) {
          case h0:
          case sd:
            i = !0;
        }
    }
  if (i)
    return (
      (i = C),
      (r = r(i)),
      (C = n === "" ? "." + B7(i, 0) : n),
      tr(r)
        ? ((t = ""),
          C != null && (t = C.replace(nr, "$&/") + "/"),
          l6(r, e, t, "", function (l) {
            return l;
          }))
        : r != null &&
          (st(r) &&
            (r = vd(
              r,
              t +
                (!r.key || (i && i.key === r.key)
                  ? ""
                  : ("" + r.key).replace(nr, "$&/") + "/") +
                C
            )),
          e.push(r)),
      1
    );
  if (((i = 0), (n = n === "" ? "." : n + ":"), tr(C)))
    for (var s = 0; s < C.length; s++) {
      o = C[s];
      var a = n + B7(o, s);
      i += l6(o, e, t, a, r);
    }
  else if (((a = gd(C)), typeof a == "function"))
    for (C = a.call(C), s = 0; !(o = C.next()).done; )
      (o = o.value), (a = n + B7(o, s++)), (i += l6(o, e, t, a, r));
  else if (o === "object")
    throw (
      ((e = String(C)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(C).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function R0(C, e, t) {
  if (C == null) return C;
  var n = [],
    r = 0;
  return (
    l6(C, n, "", "", function (o) {
      return e.call(t, o, r++);
    }),
    n
  );
}
function Sd(C) {
  if (C._status === -1) {
    var e = C._result;
    (e = e()),
      e.then(
        function (t) {
          (C._status === 0 || C._status === -1) &&
            ((C._status = 1), (C._result = t));
        },
        function (t) {
          (C._status === 0 || C._status === -1) &&
            ((C._status = 2), (C._result = t));
        }
      ),
      C._status === -1 && ((C._status = 0), (C._result = e));
  }
  if (C._status === 1) return C._result.default;
  throw C._result;
}
var n3 = { current: null },
  u6 = { transition: null },
  xd = {
    ReactCurrentDispatcher: n3,
    ReactCurrentBatchConfig: u6,
    ReactCurrentOwner: it,
  };
q.Children = {
  map: R0,
  forEach: function (C, e, t) {
    R0(
      C,
      function () {
        e.apply(this, arguments);
      },
      t
    );
  },
  count: function (C) {
    var e = 0;
    return (
      R0(C, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (C) {
    return (
      R0(C, function (e) {
        return e;
      }) || []
    );
  },
  only: function (C) {
    if (!st(C))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return C;
  },
};
q.Component = G8;
q.Fragment = ad;
q.Profiler = ud;
q.PureComponent = rt;
q.StrictMode = ld;
q.Suspense = pd;
q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xd;
q.cloneElement = function (C, e, t) {
  if (C == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        C +
        "."
    );
  var n = hs({}, C.props),
    r = C.key,
    o = C.ref,
    i = C._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((o = e.ref), (i = it.current)),
      e.key !== void 0 && (r = "" + e.key),
      C.type && C.type.defaultProps)
    )
      var s = C.type.defaultProps;
    for (a in e)
      vs.call(e, a) &&
        !ys.hasOwnProperty(a) &&
        (n[a] = e[a] === void 0 && s !== void 0 ? s[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) n.children = t;
  else if (1 < a) {
    s = Array(a);
    for (var l = 0; l < a; l++) s[l] = arguments[l + 2];
    n.children = s;
  }
  return { $$typeof: h0, type: C.type, key: r, ref: o, props: n, _owner: i };
};
q.createContext = function (C) {
  return (
    (C = {
      $$typeof: dd,
      _currentValue: C,
      _currentValue2: C,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (C.Provider = { $$typeof: cd, _context: C }),
    (C.Consumer = C)
  );
};
q.createElement = Ss;
q.createFactory = function (C) {
  var e = Ss.bind(null, C);
  return (e.type = C), e;
};
q.createRef = function () {
  return { current: null };
};
q.forwardRef = function (C) {
  return { $$typeof: fd, render: C };
};
q.isValidElement = st;
q.lazy = function (C) {
  return { $$typeof: md, _payload: { _status: -1, _result: C }, _init: Sd };
};
q.memo = function (C, e) {
  return { $$typeof: hd, type: C, compare: e === void 0 ? null : e };
};
q.startTransition = function (C) {
  var e = u6.transition;
  u6.transition = {};
  try {
    C();
  } finally {
    u6.transition = e;
  }
};
q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
q.useCallback = function (C, e) {
  return n3.current.useCallback(C, e);
};
q.useContext = function (C) {
  return n3.current.useContext(C);
};
q.useDebugValue = function () {};
q.useDeferredValue = function (C) {
  return n3.current.useDeferredValue(C);
};
q.useEffect = function (C, e) {
  return n3.current.useEffect(C, e);
};
q.useId = function () {
  return n3.current.useId();
};
q.useImperativeHandle = function (C, e, t) {
  return n3.current.useImperativeHandle(C, e, t);
};
q.useInsertionEffect = function (C, e) {
  return n3.current.useInsertionEffect(C, e);
};
q.useLayoutEffect = function (C, e) {
  return n3.current.useLayoutEffect(C, e);
};
q.useMemo = function (C, e) {
  return n3.current.useMemo(C, e);
};
q.useReducer = function (C, e, t) {
  return n3.current.useReducer(C, e, t);
};
q.useRef = function (C) {
  return n3.current.useRef(C);
};
q.useState = function (C) {
  return n3.current.useState(C);
};
q.useSyncExternalStore = function (C, e, t) {
  return n3.current.useSyncExternalStore(C, e, t);
};
q.useTransition = function () {
  return n3.current.useTransition();
};
q.version = "18.2.0";
fs.exports = q;
var L = fs.exports;
const p2 = nt(L),
  _C = id({ __proto__: null, default: p2 }, [L]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad = L,
  Ed = Symbol.for("react.element"),
  wd = Symbol.for("react.fragment"),
  Ld = Object.prototype.hasOwnProperty,
  bd = Ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Td = { key: !0, ref: !0, __self: !0, __source: !0 };
function xs(C, e, t) {
  var n,
    r = {},
    o = null,
    i = null;
  t !== void 0 && (o = "" + t),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (i = e.ref);
  for (n in e) Ld.call(e, n) && !Td.hasOwnProperty(n) && (r[n] = e[n]);
  if (C && C.defaultProps)
    for (n in ((e = C.defaultProps), e)) r[n] === void 0 && (r[n] = e[n]);
  return {
    $$typeof: Ed,
    type: C,
    key: o,
    ref: i,
    props: r,
    _owner: bd.current,
  };
}
x9.Fragment = wd;
x9.jsx = xs;
x9.jsxs = xs;
ds.exports = x9;
var u = ds.exports,
  OC = {},
  As = { exports: {} },
  T3 = {},
  Es = { exports: {} },
  ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (C) {
  function e(k, N) {
    var F = k.length;
    k.push(N);
    C: for (; 0 < F; ) {
      var Z = (F - 1) >>> 1,
        Q = k[Z];
      if (0 < r(Q, N)) (k[Z] = N), (k[F] = Q), (F = Z);
      else break C;
    }
  }
  function t(k) {
    return k.length === 0 ? null : k[0];
  }
  function n(k) {
    if (k.length === 0) return null;
    var N = k[0],
      F = k.pop();
    if (F !== N) {
      k[0] = F;
      C: for (var Z = 0, Q = k.length, h1 = Q >>> 1; Z < h1; ) {
        var J = 2 * (Z + 1) - 1,
          C1 = k[J],
          U = J + 1,
          n1 = k[U];
        if (0 > r(C1, F))
          U < Q && 0 > r(n1, C1)
            ? ((k[Z] = n1), (k[U] = F), (Z = U))
            : ((k[Z] = C1), (k[J] = F), (Z = J));
        else if (U < Q && 0 > r(n1, F)) (k[Z] = n1), (k[U] = F), (Z = U);
        else break C;
      }
    }
    return N;
  }
  function r(k, N) {
    var F = k.sortIndex - N.sortIndex;
    return F !== 0 ? F : k.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    C.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      s = i.now();
    C.unstable_now = function () {
      return i.now() - s;
    };
  }
  var a = [],
    l = [],
    c = 1,
    f = null,
    d = 3,
    S = !1,
    v = !1,
    g = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(k) {
    for (var N = t(l); N !== null; ) {
      if (N.callback === null) n(l);
      else if (N.startTime <= k)
        n(l), (N.sortIndex = N.expirationTime), e(a, N);
      else break;
      N = t(l);
    }
  }
  function y(k) {
    if (((g = !1), m(k), !v))
      if (t(a) !== null) (v = !0), H(x);
      else {
        var N = t(l);
        N !== null && D(y, N.startTime - k);
      }
  }
  function x(k, N) {
    (v = !1), g && ((g = !1), h(_), (_ = -1)), (S = !0);
    var F = d;
    try {
      for (
        m(N), f = t(a);
        f !== null && (!(f.expirationTime > N) || (k && !O()));

      ) {
        var Z = f.callback;
        if (typeof Z == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var Q = Z(f.expirationTime <= N);
          (N = C.unstable_now()),
            typeof Q == "function" ? (f.callback = Q) : f === t(a) && n(a),
            m(N);
        } else n(a);
        f = t(a);
      }
      if (f !== null) var h1 = !0;
      else {
        var J = t(l);
        J !== null && D(y, J.startTime - N), (h1 = !1);
      }
      return h1;
    } finally {
      (f = null), (d = F), (S = !1);
    }
  }
  var E = !1,
    A = null,
    _ = -1,
    T = 5,
    b = -1;
  function O() {
    return !(C.unstable_now() - b < T);
  }
  function M() {
    if (A !== null) {
      var k = C.unstable_now();
      b = k;
      var N = !0;
      try {
        N = A(!0, k);
      } finally {
        N ? I() : ((E = !1), (A = null));
      }
    } else E = !1;
  }
  var I;
  if (typeof p == "function")
    I = function () {
      p(M);
    };
  else if (typeof MessageChannel < "u") {
    var R = new MessageChannel(),
      B = R.port2;
    (R.port1.onmessage = M),
      (I = function () {
        B.postMessage(null);
      });
  } else
    I = function () {
      w(M, 0);
    };
  function H(k) {
    (A = k), E || ((E = !0), I());
  }
  function D(k, N) {
    _ = w(function () {
      k(C.unstable_now());
    }, N);
  }
  (C.unstable_IdlePriority = 5),
    (C.unstable_ImmediatePriority = 1),
    (C.unstable_LowPriority = 4),
    (C.unstable_NormalPriority = 3),
    (C.unstable_Profiling = null),
    (C.unstable_UserBlockingPriority = 2),
    (C.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (C.unstable_continueExecution = function () {
      v || S || ((v = !0), H(x));
    }),
    (C.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (T = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (C.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (C.unstable_getFirstCallbackNode = function () {
      return t(a);
    }),
    (C.unstable_next = function (k) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var N = 3;
          break;
        default:
          N = d;
      }
      var F = d;
      d = N;
      try {
        return k();
      } finally {
        d = F;
      }
    }),
    (C.unstable_pauseExecution = function () {}),
    (C.unstable_requestPaint = function () {}),
    (C.unstable_runWithPriority = function (k, N) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var F = d;
      d = k;
      try {
        return N();
      } finally {
        d = F;
      }
    }),
    (C.unstable_scheduleCallback = function (k, N, F) {
      var Z = C.unstable_now();
      switch (
        (typeof F == "object" && F !== null
          ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? Z + F : Z))
          : (F = Z),
        k)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = F + Q),
        (k = {
          id: c++,
          callback: N,
          priorityLevel: k,
          startTime: F,
          expirationTime: Q,
          sortIndex: -1,
        }),
        F > Z
          ? ((k.sortIndex = F),
            e(l, k),
            t(a) === null &&
              k === t(l) &&
              (g ? (h(_), (_ = -1)) : (g = !0), D(y, F - Z)))
          : ((k.sortIndex = Q), e(a, k), v || S || ((v = !0), H(x))),
        k
      );
    }),
    (C.unstable_shouldYield = O),
    (C.unstable_wrapCallback = function (k) {
      var N = d;
      return function () {
        var F = d;
        d = N;
        try {
          return k.apply(this, arguments);
        } finally {
          d = F;
        }
      };
    });
})(ws);
Es.exports = ws;
var Pd = Es.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ls = L,
  L3 = Pd;
function j(C) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + C, t = 1;
    t < arguments.length;
    t++
  )
    e += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    C +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var bs = new Set(),
  B4 = {};
function B5(C, e) {
  b8(C, e), b8(C + "Capture", e);
}
function b8(C, e) {
  for (B4[C] = e, C = 0; C < e.length; C++) bs.add(e[C]);
}
var R2 = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  MC = Object.prototype.hasOwnProperty,
  kd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  rr = {},
  or = {};
function _d(C) {
  return MC.call(or, C)
    ? !0
    : MC.call(rr, C)
    ? !1
    : kd.test(C)
    ? (or[C] = !0)
    : ((rr[C] = !0), !1);
}
function Od(C, e, t, n) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((C = C.toLowerCase().slice(0, 5)), C !== "data-" && C !== "aria-");
    default:
      return !1;
  }
}
function Md(C, e, t, n) {
  if (e === null || typeof e > "u" || Od(C, e, t, n)) return !0;
  if (n) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function r3(C, e, t, n, r, o, i) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = n),
    (this.attributeNamespace = r),
    (this.mustUseProperty = t),
    (this.propertyName = C),
    (this.type = e),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Z1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (C) {
    Z1[C] = new r3(C, 0, !1, C, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (C) {
  var e = C[0];
  Z1[e] = new r3(e, 1, !1, C[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (C) {
  Z1[C] = new r3(C, 2, !1, C.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (C) {
  Z1[C] = new r3(C, 2, !1, C, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (C) {
    Z1[C] = new r3(C, 3, !1, C.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (C) {
  Z1[C] = new r3(C, 3, !0, C, null, !1, !1);
});
["capture", "download"].forEach(function (C) {
  Z1[C] = new r3(C, 4, !1, C, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (C) {
  Z1[C] = new r3(C, 6, !1, C, null, !1, !1);
});
["rowSpan", "start"].forEach(function (C) {
  Z1[C] = new r3(C, 5, !1, C.toLowerCase(), null, !1, !1);
});
var at = /[\-:]([a-z])/g;
function lt(C) {
  return C[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (C) {
    var e = C.replace(at, lt);
    Z1[e] = new r3(e, 1, !1, C, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (C) {
    var e = C.replace(at, lt);
    Z1[e] = new r3(e, 1, !1, C, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (C) {
  var e = C.replace(at, lt);
  Z1[e] = new r3(e, 1, !1, C, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (C) {
  Z1[C] = new r3(C, 1, !1, C.toLowerCase(), null, !1, !1);
});
Z1.xlinkHref = new r3(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (C) {
  Z1[C] = new r3(C, 1, !1, C.toLowerCase(), null, !0, !0);
});
function ut(C, e, t, n) {
  var r = Z1.hasOwnProperty(e) ? Z1[e] : null;
  (r !== null
    ? r.type !== 0
    : n ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (Md(e, t, r, n) && (t = null),
    n || r === null
      ? _d(e) && (t === null ? C.removeAttribute(e) : C.setAttribute(e, "" + t))
      : r.mustUseProperty
      ? (C[r.propertyName] = t === null ? (r.type === 3 ? !1 : "") : t)
      : ((e = r.attributeName),
        (n = r.attributeNamespace),
        t === null
          ? C.removeAttribute(e)
          : ((r = r.type),
            (t = r === 3 || (r === 4 && t === !0) ? "" : "" + t),
            n ? C.setAttributeNS(n, e, t) : C.setAttribute(e, t))));
}
var z2 = Ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  N0 = Symbol.for("react.element"),
  e8 = Symbol.for("react.portal"),
  t8 = Symbol.for("react.fragment"),
  ct = Symbol.for("react.strict_mode"),
  IC = Symbol.for("react.profiler"),
  Ts = Symbol.for("react.provider"),
  Ps = Symbol.for("react.context"),
  dt = Symbol.for("react.forward_ref"),
  RC = Symbol.for("react.suspense"),
  NC = Symbol.for("react.suspense_list"),
  ft = Symbol.for("react.memo"),
  Z2 = Symbol.for("react.lazy"),
  ks = Symbol.for("react.offscreen"),
  ir = Symbol.iterator;
function o4(C) {
  return C === null || typeof C != "object"
    ? null
    : ((C = (ir && C[ir]) || C["@@iterator"]),
      typeof C == "function" ? C : null);
}
var b1 = Object.assign,
  z7;
function S4(C) {
  if (z7 === void 0)
    try {
      throw Error();
    } catch (t) {
      var e = t.stack.trim().match(/\n( *(at )?)/);
      z7 = (e && e[1]) || "";
    }
  return (
    `
` +
    z7 +
    C
  );
}
var F7 = !1;
function V7(C, e) {
  if (!C || F7) return "";
  F7 = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (l) {
          var n = l;
        }
        Reflect.construct(C, [], e);
      } else {
        try {
          e.call();
        } catch (l) {
          n = l;
        }
        C.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l) {
        n = l;
      }
      C();
    }
  } catch (l) {
    if (l && n && typeof l.stack == "string") {
      for (
        var r = l.stack.split(`
`),
          o = n.stack.split(`
`),
          i = r.length - 1,
          s = o.length - 1;
        1 <= i && 0 <= s && r[i] !== o[s];

      )
        s--;
      for (; 1 <= i && 0 <= s; i--, s--)
        if (r[i] !== o[s]) {
          if (i !== 1 || s !== 1)
            do
              if ((i--, s--, 0 > s || r[i] !== o[s])) {
                var a =
                  `
` + r[i].replace(" at new ", " at ");
                return (
                  C.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", C.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= s);
          break;
        }
    }
  } finally {
    (F7 = !1), (Error.prepareStackTrace = t);
  }
  return (C = C ? C.displayName || C.name : "") ? S4(C) : "";
}
function Id(C) {
  switch (C.tag) {
    case 5:
      return S4(C.type);
    case 16:
      return S4("Lazy");
    case 13:
      return S4("Suspense");
    case 19:
      return S4("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (C = V7(C.type, !1)), C;
    case 11:
      return (C = V7(C.type.render, !1)), C;
    case 1:
      return (C = V7(C.type, !0)), C;
    default:
      return "";
  }
}
function HC(C) {
  if (C == null) return null;
  if (typeof C == "function") return C.displayName || C.name || null;
  if (typeof C == "string") return C;
  switch (C) {
    case t8:
      return "Fragment";
    case e8:
      return "Portal";
    case IC:
      return "Profiler";
    case ct:
      return "StrictMode";
    case RC:
      return "Suspense";
    case NC:
      return "SuspenseList";
  }
  if (typeof C == "object")
    switch (C.$$typeof) {
      case Ps:
        return (C.displayName || "Context") + ".Consumer";
      case Ts:
        return (C._context.displayName || "Context") + ".Provider";
      case dt:
        var e = C.render;
        return (
          (C = C.displayName),
          C ||
            ((C = e.displayName || e.name || ""),
            (C = C !== "" ? "ForwardRef(" + C + ")" : "ForwardRef")),
          C
        );
      case ft:
        return (
          (e = C.displayName || null), e !== null ? e : HC(C.type) || "Memo"
        );
      case Z2:
        (e = C._payload), (C = C._init);
        try {
          return HC(C(e));
        } catch {}
    }
  return null;
}
function Rd(C) {
  var e = C.type;
  switch (C.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (C = e.render),
        (C = C.displayName || C.name || ""),
        e.displayName || (C !== "" ? "ForwardRef(" + C + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return HC(e);
    case 8:
      return e === ct ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function l5(C) {
  switch (typeof C) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return C;
    case "object":
      return C;
    default:
      return "";
  }
}
function _s(C) {
  var e = C.type;
  return (
    (C = C.nodeName) &&
    C.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function Nd(C) {
  var e = _s(C) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(C.constructor.prototype, e),
    n = "" + C[e];
  if (
    !C.hasOwnProperty(e) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var r = t.get,
      o = t.set;
    return (
      Object.defineProperty(C, e, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (i) {
          (n = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(C, e, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (i) {
          n = "" + i;
        },
        stopTracking: function () {
          (C._valueTracker = null), delete C[e];
        },
      }
    );
  }
}
function H0(C) {
  C._valueTracker || (C._valueTracker = Nd(C));
}
function Os(C) {
  if (!C) return !1;
  var e = C._valueTracker;
  if (!e) return !0;
  var t = e.getValue(),
    n = "";
  return (
    C && (n = _s(C) ? (C.checked ? "true" : "false") : C.value),
    (C = n),
    C !== t ? (e.setValue(C), !0) : !1
  );
}
function _6(C) {
  if (((C = C || (typeof document < "u" ? document : void 0)), typeof C > "u"))
    return null;
  try {
    return C.activeElement || C.body;
  } catch {
    return C.body;
  }
}
function jC(C, e) {
  var t = e.checked;
  return b1({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? C._wrapperState.initialChecked,
  });
}
function sr(C, e) {
  var t = e.defaultValue == null ? "" : e.defaultValue,
    n = e.checked != null ? e.checked : e.defaultChecked;
  (t = l5(e.value != null ? e.value : t)),
    (C._wrapperState = {
      initialChecked: n,
      initialValue: t,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function Ms(C, e) {
  (e = e.checked), e != null && ut(C, "checked", e, !1);
}
function DC(C, e) {
  Ms(C, e);
  var t = l5(e.value),
    n = e.type;
  if (t != null)
    n === "number"
      ? ((t === 0 && C.value === "") || C.value != t) && (C.value = "" + t)
      : C.value !== "" + t && (C.value = "" + t);
  else if (n === "submit" || n === "reset") {
    C.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? BC(C, e.type, t)
    : e.hasOwnProperty("defaultValue") && BC(C, e.type, l5(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (C.defaultChecked = !!e.defaultChecked);
}
function ar(C, e, t) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + C._wrapperState.initialValue),
      t || e === C.value || (C.value = e),
      (C.defaultValue = e);
  }
  (t = C.name),
    t !== "" && (C.name = ""),
    (C.defaultChecked = !!C._wrapperState.initialChecked),
    t !== "" && (C.name = t);
}
function BC(C, e, t) {
  (e !== "number" || _6(C.ownerDocument) !== C) &&
    (t == null
      ? (C.defaultValue = "" + C._wrapperState.initialValue)
      : C.defaultValue !== "" + t && (C.defaultValue = "" + t));
}
var x4 = Array.isArray;
function h8(C, e, t, n) {
  if (((C = C.options), e)) {
    e = {};
    for (var r = 0; r < t.length; r++) e["$" + t[r]] = !0;
    for (t = 0; t < C.length; t++)
      (r = e.hasOwnProperty("$" + C[t].value)),
        C[t].selected !== r && (C[t].selected = r),
        r && n && (C[t].defaultSelected = !0);
  } else {
    for (t = "" + l5(t), e = null, r = 0; r < C.length; r++) {
      if (C[r].value === t) {
        (C[r].selected = !0), n && (C[r].defaultSelected = !0);
        return;
      }
      e !== null || C[r].disabled || (e = C[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function zC(C, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(j(91));
  return b1({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + C._wrapperState.initialValue,
  });
}
function lr(C, e) {
  var t = e.value;
  if (t == null) {
    if (((t = e.children), (e = e.defaultValue), t != null)) {
      if (e != null) throw Error(j(92));
      if (x4(t)) {
        if (1 < t.length) throw Error(j(93));
        t = t[0];
      }
      e = t;
    }
    e == null && (e = ""), (t = e);
  }
  C._wrapperState = { initialValue: l5(t) };
}
function Is(C, e) {
  var t = l5(e.value),
    n = l5(e.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== C.value && (C.value = t),
    e.defaultValue == null && C.defaultValue !== t && (C.defaultValue = t)),
    n != null && (C.defaultValue = "" + n);
}
function ur(C) {
  var e = C.textContent;
  e === C._wrapperState.initialValue && e !== "" && e !== null && (C.value = e);
}
function Rs(C) {
  switch (C) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function FC(C, e) {
  return C == null || C === "http://www.w3.org/1999/xhtml"
    ? Rs(e)
    : C === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : C;
}
var j0,
  Ns = (function (C) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, t, n, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return C(e, t, n, r);
          });
        }
      : C;
  })(function (C, e) {
    if (C.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in C)
      C.innerHTML = e;
    else {
      for (
        j0 = j0 || document.createElement("div"),
          j0.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = j0.firstChild;
        C.firstChild;

      )
        C.removeChild(C.firstChild);
      for (; e.firstChild; ) C.appendChild(e.firstChild);
    }
  });
function z4(C, e) {
  if (e) {
    var t = C.firstChild;
    if (t && t === C.lastChild && t.nodeType === 3) {
      t.nodeValue = e;
      return;
    }
  }
  C.textContent = e;
}
var L4 = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Hd = ["Webkit", "ms", "Moz", "O"];
Object.keys(L4).forEach(function (C) {
  Hd.forEach(function (e) {
    (e = e + C.charAt(0).toUpperCase() + C.substring(1)), (L4[e] = L4[C]);
  });
});
function Hs(C, e, t) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : t || typeof e != "number" || e === 0 || (L4.hasOwnProperty(C) && L4[C])
    ? ("" + e).trim()
    : e + "px";
}
function js(C, e) {
  C = C.style;
  for (var t in e)
    if (e.hasOwnProperty(t)) {
      var n = t.indexOf("--") === 0,
        r = Hs(t, e[t], n);
      t === "float" && (t = "cssFloat"), n ? C.setProperty(t, r) : (C[t] = r);
    }
}
var jd = b1(
  { menuitem: !0 },
  {
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
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function VC(C, e) {
  if (e) {
    if (jd[C] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(j(137, C));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(j(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(j(62));
  }
}
function UC(C, e) {
  if (C.indexOf("-") === -1) return typeof e.is == "string";
  switch (C) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var $C = null;
function pt(C) {
  return (
    (C = C.target || C.srcElement || window),
    C.correspondingUseElement && (C = C.correspondingUseElement),
    C.nodeType === 3 ? C.parentNode : C
  );
}
var ZC = null,
  m8 = null,
  g8 = null;
function cr(C) {
  if ((C = v0(C))) {
    if (typeof ZC != "function") throw Error(j(280));
    var e = C.stateNode;
    e && ((e = b9(e)), ZC(C.stateNode, C.type, e));
  }
}
function Ds(C) {
  m8 ? (g8 ? g8.push(C) : (g8 = [C])) : (m8 = C);
}
function Bs() {
  if (m8) {
    var C = m8,
      e = g8;
    if (((g8 = m8 = null), cr(C), e)) for (C = 0; C < e.length; C++) cr(e[C]);
  }
}
function zs(C, e) {
  return C(e);
}
function Fs() {}
var U7 = !1;
function Vs(C, e, t) {
  if (U7) return C(e, t);
  U7 = !0;
  try {
    return zs(C, e, t);
  } finally {
    (U7 = !1), (m8 !== null || g8 !== null) && (Fs(), Bs());
  }
}
function F4(C, e) {
  var t = C.stateNode;
  if (t === null) return null;
  var n = b9(t);
  if (n === null) return null;
  t = n[e];
  C: switch (e) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (n = !n.disabled) ||
        ((C = C.type),
        (n = !(
          C === "button" ||
          C === "input" ||
          C === "select" ||
          C === "textarea"
        ))),
        (C = !n);
      break C;
    default:
      C = !1;
  }
  if (C) return null;
  if (t && typeof t != "function") throw Error(j(231, e, typeof t));
  return t;
}
var WC = !1;
if (R2)
  try {
    var i4 = {};
    Object.defineProperty(i4, "passive", {
      get: function () {
        WC = !0;
      },
    }),
      window.addEventListener("test", i4, i4),
      window.removeEventListener("test", i4, i4);
  } catch {
    WC = !1;
  }
function Dd(C, e, t, n, r, o, i, s, a) {
  var l = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(t, l);
  } catch (c) {
    this.onError(c);
  }
}
var b4 = !1,
  O6 = null,
  M6 = !1,
  KC = null,
  Bd = {
    onError: function (C) {
      (b4 = !0), (O6 = C);
    },
  };
function zd(C, e, t, n, r, o, i, s, a) {
  (b4 = !1), (O6 = null), Dd.apply(Bd, arguments);
}
function Fd(C, e, t, n, r, o, i, s, a) {
  if ((zd.apply(this, arguments), b4)) {
    if (b4) {
      var l = O6;
      (b4 = !1), (O6 = null);
    } else throw Error(j(198));
    M6 || ((M6 = !0), (KC = l));
  }
}
function z5(C) {
  var e = C,
    t = C;
  if (C.alternate) for (; e.return; ) e = e.return;
  else {
    C = e;
    do (e = C), e.flags & 4098 && (t = e.return), (C = e.return);
    while (C);
  }
  return e.tag === 3 ? t : null;
}
function Us(C) {
  if (C.tag === 13) {
    var e = C.memoizedState;
    if (
      (e === null && ((C = C.alternate), C !== null && (e = C.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function dr(C) {
  if (z5(C) !== C) throw Error(j(188));
}
function Vd(C) {
  var e = C.alternate;
  if (!e) {
    if (((e = z5(C)), e === null)) throw Error(j(188));
    return e !== C ? null : C;
  }
  for (var t = C, n = e; ; ) {
    var r = t.return;
    if (r === null) break;
    var o = r.alternate;
    if (o === null) {
      if (((n = r.return), n !== null)) {
        t = n;
        continue;
      }
      break;
    }
    if (r.child === o.child) {
      for (o = r.child; o; ) {
        if (o === t) return dr(r), C;
        if (o === n) return dr(r), e;
        o = o.sibling;
      }
      throw Error(j(188));
    }
    if (t.return !== n.return) (t = r), (n = o);
    else {
      for (var i = !1, s = r.child; s; ) {
        if (s === t) {
          (i = !0), (t = r), (n = o);
          break;
        }
        if (s === n) {
          (i = !0), (n = r), (t = o);
          break;
        }
        s = s.sibling;
      }
      if (!i) {
        for (s = o.child; s; ) {
          if (s === t) {
            (i = !0), (t = o), (n = r);
            break;
          }
          if (s === n) {
            (i = !0), (n = o), (t = r);
            break;
          }
          s = s.sibling;
        }
        if (!i) throw Error(j(189));
      }
    }
    if (t.alternate !== n) throw Error(j(190));
  }
  if (t.tag !== 3) throw Error(j(188));
  return t.stateNode.current === t ? C : e;
}
function $s(C) {
  return (C = Vd(C)), C !== null ? Zs(C) : null;
}
function Zs(C) {
  if (C.tag === 5 || C.tag === 6) return C;
  for (C = C.child; C !== null; ) {
    var e = Zs(C);
    if (e !== null) return e;
    C = C.sibling;
  }
  return null;
}
var Ws = L3.unstable_scheduleCallback,
  fr = L3.unstable_cancelCallback,
  Ud = L3.unstable_shouldYield,
  $d = L3.unstable_requestPaint,
  _1 = L3.unstable_now,
  Zd = L3.unstable_getCurrentPriorityLevel,
  ht = L3.unstable_ImmediatePriority,
  Ks = L3.unstable_UserBlockingPriority,
  I6 = L3.unstable_NormalPriority,
  Wd = L3.unstable_LowPriority,
  Gs = L3.unstable_IdlePriority,
  A9 = null,
  g2 = null;
function Kd(C) {
  if (g2 && typeof g2.onCommitFiberRoot == "function")
    try {
      g2.onCommitFiberRoot(A9, C, void 0, (C.current.flags & 128) === 128);
    } catch {}
}
var o2 = Math.clz32 ? Math.clz32 : Yd,
  Gd = Math.log,
  Qd = Math.LN2;
function Yd(C) {
  return (C >>>= 0), C === 0 ? 32 : (31 - ((Gd(C) / Qd) | 0)) | 0;
}
var D0 = 64,
  B0 = 4194304;
function A4(C) {
  switch (C & -C) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return C & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return C & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return C;
  }
}
function R6(C, e) {
  var t = C.pendingLanes;
  if (t === 0) return 0;
  var n = 0,
    r = C.suspendedLanes,
    o = C.pingedLanes,
    i = t & 268435455;
  if (i !== 0) {
    var s = i & ~r;
    s !== 0 ? (n = A4(s)) : ((o &= i), o !== 0 && (n = A4(o)));
  } else (i = t & ~r), i !== 0 ? (n = A4(i)) : o !== 0 && (n = A4(o));
  if (n === 0) return 0;
  if (
    e !== 0 &&
    e !== n &&
    !(e & r) &&
    ((r = n & -n), (o = e & -e), r >= o || (r === 16 && (o & 4194240) !== 0))
  )
    return e;
  if ((n & 4 && (n |= t & 16), (e = C.entangledLanes), e !== 0))
    for (C = C.entanglements, e &= n; 0 < e; )
      (t = 31 - o2(e)), (r = 1 << t), (n |= C[t]), (e &= ~r);
  return n;
}
function Xd(C, e) {
  switch (C) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qd(C, e) {
  for (
    var t = C.suspendedLanes,
      n = C.pingedLanes,
      r = C.expirationTimes,
      o = C.pendingLanes;
    0 < o;

  ) {
    var i = 31 - o2(o),
      s = 1 << i,
      a = r[i];
    a === -1
      ? (!(s & t) || s & n) && (r[i] = Xd(s, e))
      : a <= e && (C.expiredLanes |= s),
      (o &= ~s);
  }
}
function GC(C) {
  return (
    (C = C.pendingLanes & -1073741825),
    C !== 0 ? C : C & 1073741824 ? 1073741824 : 0
  );
}
function Qs() {
  var C = D0;
  return (D0 <<= 1), !(D0 & 4194240) && (D0 = 64), C;
}
function $7(C) {
  for (var e = [], t = 0; 31 > t; t++) e.push(C);
  return e;
}
function m0(C, e, t) {
  (C.pendingLanes |= e),
    e !== 536870912 && ((C.suspendedLanes = 0), (C.pingedLanes = 0)),
    (C = C.eventTimes),
    (e = 31 - o2(e)),
    (C[e] = t);
}
function Jd(C, e) {
  var t = C.pendingLanes & ~e;
  (C.pendingLanes = e),
    (C.suspendedLanes = 0),
    (C.pingedLanes = 0),
    (C.expiredLanes &= e),
    (C.mutableReadLanes &= e),
    (C.entangledLanes &= e),
    (e = C.entanglements);
  var n = C.eventTimes;
  for (C = C.expirationTimes; 0 < t; ) {
    var r = 31 - o2(t),
      o = 1 << r;
    (e[r] = 0), (n[r] = -1), (C[r] = -1), (t &= ~o);
  }
}
function mt(C, e) {
  var t = (C.entangledLanes |= e);
  for (C = C.entanglements; t; ) {
    var n = 31 - o2(t),
      r = 1 << n;
    (r & e) | (C[n] & e) && (C[n] |= e), (t &= ~r);
  }
}
var l1 = 0;
function Ys(C) {
  return (C &= -C), 1 < C ? (4 < C ? (C & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Xs,
  gt,
  qs,
  Js,
  Ca,
  QC = !1,
  z0 = [],
  e5 = null,
  t5 = null,
  n5 = null,
  V4 = new Map(),
  U4 = new Map(),
  G2 = [],
  Cf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pr(C, e) {
  switch (C) {
    case "focusin":
    case "focusout":
      e5 = null;
      break;
    case "dragenter":
    case "dragleave":
      t5 = null;
      break;
    case "mouseover":
    case "mouseout":
      n5 = null;
      break;
    case "pointerover":
    case "pointerout":
      V4.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      U4.delete(e.pointerId);
  }
}
function s4(C, e, t, n, r, o) {
  return C === null || C.nativeEvent !== o
    ? ((C = {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [r],
      }),
      e !== null && ((e = v0(e)), e !== null && gt(e)),
      C)
    : ((C.eventSystemFlags |= n),
      (e = C.targetContainers),
      r !== null && e.indexOf(r) === -1 && e.push(r),
      C);
}
function ef(C, e, t, n, r) {
  switch (e) {
    case "focusin":
      return (e5 = s4(e5, C, e, t, n, r)), !0;
    case "dragenter":
      return (t5 = s4(t5, C, e, t, n, r)), !0;
    case "mouseover":
      return (n5 = s4(n5, C, e, t, n, r)), !0;
    case "pointerover":
      var o = r.pointerId;
      return V4.set(o, s4(V4.get(o) || null, C, e, t, n, r)), !0;
    case "gotpointercapture":
      return (
        (o = r.pointerId), U4.set(o, s4(U4.get(o) || null, C, e, t, n, r)), !0
      );
  }
  return !1;
}
function ea(C) {
  var e = w5(C.target);
  if (e !== null) {
    var t = z5(e);
    if (t !== null) {
      if (((e = t.tag), e === 13)) {
        if (((e = Us(t)), e !== null)) {
          (C.blockedOn = e),
            Ca(C.priority, function () {
              qs(t);
            });
          return;
        }
      } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        C.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  C.blockedOn = null;
}
function c6(C) {
  if (C.blockedOn !== null) return !1;
  for (var e = C.targetContainers; 0 < e.length; ) {
    var t = YC(C.domEventName, C.eventSystemFlags, e[0], C.nativeEvent);
    if (t === null) {
      t = C.nativeEvent;
      var n = new t.constructor(t.type, t);
      ($C = n), t.target.dispatchEvent(n), ($C = null);
    } else return (e = v0(t)), e !== null && gt(e), (C.blockedOn = t), !1;
    e.shift();
  }
  return !0;
}
function hr(C, e, t) {
  c6(C) && t.delete(e);
}
function tf() {
  (QC = !1),
    e5 !== null && c6(e5) && (e5 = null),
    t5 !== null && c6(t5) && (t5 = null),
    n5 !== null && c6(n5) && (n5 = null),
    V4.forEach(hr),
    U4.forEach(hr);
}
function a4(C, e) {
  C.blockedOn === e &&
    ((C.blockedOn = null),
    QC ||
      ((QC = !0),
      L3.unstable_scheduleCallback(L3.unstable_NormalPriority, tf)));
}
function $4(C) {
  function e(r) {
    return a4(r, C);
  }
  if (0 < z0.length) {
    a4(z0[0], C);
    for (var t = 1; t < z0.length; t++) {
      var n = z0[t];
      n.blockedOn === C && (n.blockedOn = null);
    }
  }
  for (
    e5 !== null && a4(e5, C),
      t5 !== null && a4(t5, C),
      n5 !== null && a4(n5, C),
      V4.forEach(e),
      U4.forEach(e),
      t = 0;
    t < G2.length;
    t++
  )
    (n = G2[t]), n.blockedOn === C && (n.blockedOn = null);
  for (; 0 < G2.length && ((t = G2[0]), t.blockedOn === null); )
    ea(t), t.blockedOn === null && G2.shift();
}
var v8 = z2.ReactCurrentBatchConfig,
  N6 = !0;
function nf(C, e, t, n) {
  var r = l1,
    o = v8.transition;
  v8.transition = null;
  try {
    (l1 = 1), vt(C, e, t, n);
  } finally {
    (l1 = r), (v8.transition = o);
  }
}
function rf(C, e, t, n) {
  var r = l1,
    o = v8.transition;
  v8.transition = null;
  try {
    (l1 = 4), vt(C, e, t, n);
  } finally {
    (l1 = r), (v8.transition = o);
  }
}
function vt(C, e, t, n) {
  if (N6) {
    var r = YC(C, e, t, n);
    if (r === null) CC(C, e, n, H6, t), pr(C, n);
    else if (ef(r, C, e, t, n)) n.stopPropagation();
    else if ((pr(C, n), e & 4 && -1 < Cf.indexOf(C))) {
      for (; r !== null; ) {
        var o = v0(r);
        if (
          (o !== null && Xs(o),
          (o = YC(C, e, t, n)),
          o === null && CC(C, e, n, H6, t),
          o === r)
        )
          break;
        r = o;
      }
      r !== null && n.stopPropagation();
    } else CC(C, e, n, null, t);
  }
}
var H6 = null;
function YC(C, e, t, n) {
  if (((H6 = null), (C = pt(n)), (C = w5(C)), C !== null))
    if (((e = z5(C)), e === null)) C = null;
    else if (((t = e.tag), t === 13)) {
      if (((C = Us(e)), C !== null)) return C;
      C = null;
    } else if (t === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      C = null;
    } else e !== C && (C = null);
  return (H6 = C), null;
}
function ta(C) {
  switch (C) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zd()) {
        case ht:
          return 1;
        case Ks:
          return 4;
        case I6:
        case Wd:
          return 16;
        case Gs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var X2 = null,
  yt = null,
  d6 = null;
function na() {
  if (d6) return d6;
  var C,
    e = yt,
    t = e.length,
    n,
    r = "value" in X2 ? X2.value : X2.textContent,
    o = r.length;
  for (C = 0; C < t && e[C] === r[C]; C++);
  var i = t - C;
  for (n = 1; n <= i && e[t - n] === r[o - n]; n++);
  return (d6 = r.slice(C, 1 < n ? 1 - n : void 0));
}
function f6(C) {
  var e = C.keyCode;
  return (
    "charCode" in C
      ? ((C = C.charCode), C === 0 && e === 13 && (C = 13))
      : (C = e),
    C === 10 && (C = 13),
    32 <= C || C === 13 ? C : 0
  );
}
function F0() {
  return !0;
}
function mr() {
  return !1;
}
function P3(C) {
  function e(t, n, r, o, i) {
    (this._reactName = t),
      (this._targetInst = r),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var s in C)
      C.hasOwnProperty(s) && ((t = C[s]), (this[s] = t ? t(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? F0
        : mr),
      (this.isPropagationStopped = mr),
      this
    );
  }
  return (
    b1(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = F0));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = F0));
      },
      persist: function () {},
      isPersistent: F0,
    }),
    e
  );
}
var Q8 = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (C) {
      return C.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  St = P3(Q8),
  g0 = b1({}, Q8, { view: 0, detail: 0 }),
  of = P3(g0),
  Z7,
  W7,
  l4,
  E9 = b1({}, g0, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xt,
    button: 0,
    buttons: 0,
    relatedTarget: function (C) {
      return C.relatedTarget === void 0
        ? C.fromElement === C.srcElement
          ? C.toElement
          : C.fromElement
        : C.relatedTarget;
    },
    movementX: function (C) {
      return "movementX" in C
        ? C.movementX
        : (C !== l4 &&
            (l4 && C.type === "mousemove"
              ? ((Z7 = C.screenX - l4.screenX), (W7 = C.screenY - l4.screenY))
              : (W7 = Z7 = 0),
            (l4 = C)),
          Z7);
    },
    movementY: function (C) {
      return "movementY" in C ? C.movementY : W7;
    },
  }),
  gr = P3(E9),
  sf = b1({}, E9, { dataTransfer: 0 }),
  af = P3(sf),
  lf = b1({}, g0, { relatedTarget: 0 }),
  K7 = P3(lf),
  uf = b1({}, Q8, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cf = P3(uf),
  df = b1({}, Q8, {
    clipboardData: function (C) {
      return "clipboardData" in C ? C.clipboardData : window.clipboardData;
    },
  }),
  ff = P3(df),
  pf = b1({}, Q8, { data: 0 }),
  vr = P3(pf),
  hf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  gf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vf(C) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(C) : (C = gf[C]) ? !!e[C] : !1;
}
function xt() {
  return vf;
}
var yf = b1({}, g0, {
    key: function (C) {
      if (C.key) {
        var e = hf[C.key] || C.key;
        if (e !== "Unidentified") return e;
      }
      return C.type === "keypress"
        ? ((C = f6(C)), C === 13 ? "Enter" : String.fromCharCode(C))
        : C.type === "keydown" || C.type === "keyup"
        ? mf[C.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xt,
    charCode: function (C) {
      return C.type === "keypress" ? f6(C) : 0;
    },
    keyCode: function (C) {
      return C.type === "keydown" || C.type === "keyup" ? C.keyCode : 0;
    },
    which: function (C) {
      return C.type === "keypress"
        ? f6(C)
        : C.type === "keydown" || C.type === "keyup"
        ? C.keyCode
        : 0;
    },
  }),
  Sf = P3(yf),
  xf = b1({}, E9, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  yr = P3(xf),
  Af = b1({}, g0, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xt,
  }),
  Ef = P3(Af),
  wf = b1({}, Q8, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lf = P3(wf),
  bf = b1({}, E9, {
    deltaX: function (C) {
      return "deltaX" in C ? C.deltaX : "wheelDeltaX" in C ? -C.wheelDeltaX : 0;
    },
    deltaY: function (C) {
      return "deltaY" in C
        ? C.deltaY
        : "wheelDeltaY" in C
        ? -C.wheelDeltaY
        : "wheelDelta" in C
        ? -C.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Tf = P3(bf),
  Pf = [9, 13, 27, 32],
  At = R2 && "CompositionEvent" in window,
  T4 = null;
R2 && "documentMode" in document && (T4 = document.documentMode);
var kf = R2 && "TextEvent" in window && !T4,
  ra = R2 && (!At || (T4 && 8 < T4 && 11 >= T4)),
  Sr = " ",
  xr = !1;
function oa(C, e) {
  switch (C) {
    case "keyup":
      return Pf.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ia(C) {
  return (C = C.detail), typeof C == "object" && "data" in C ? C.data : null;
}
var n8 = !1;
function _f(C, e) {
  switch (C) {
    case "compositionend":
      return ia(e);
    case "keypress":
      return e.which !== 32 ? null : ((xr = !0), Sr);
    case "textInput":
      return (C = e.data), C === Sr && xr ? null : C;
    default:
      return null;
  }
}
function Of(C, e) {
  if (n8)
    return C === "compositionend" || (!At && oa(C, e))
      ? ((C = na()), (d6 = yt = X2 = null), (n8 = !1), C)
      : null;
  switch (C) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return ra && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var Mf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ar(C) {
  var e = C && C.nodeName && C.nodeName.toLowerCase();
  return e === "input" ? !!Mf[C.type] : e === "textarea";
}
function sa(C, e, t, n) {
  Ds(n),
    (e = j6(e, "onChange")),
    0 < e.length &&
      ((t = new St("onChange", "change", null, t, n)),
      C.push({ event: t, listeners: e }));
}
var P4 = null,
  Z4 = null;
function If(C) {
  va(C, 0);
}
function w9(C) {
  var e = i8(C);
  if (Os(e)) return C;
}
function Rf(C, e) {
  if (C === "change") return e;
}
var aa = !1;
if (R2) {
  var G7;
  if (R2) {
    var Q7 = "oninput" in document;
    if (!Q7) {
      var Er = document.createElement("div");
      Er.setAttribute("oninput", "return;"),
        (Q7 = typeof Er.oninput == "function");
    }
    G7 = Q7;
  } else G7 = !1;
  aa = G7 && (!document.documentMode || 9 < document.documentMode);
}
function wr() {
  P4 && (P4.detachEvent("onpropertychange", la), (Z4 = P4 = null));
}
function la(C) {
  if (C.propertyName === "value" && w9(Z4)) {
    var e = [];
    sa(e, Z4, C, pt(C)), Vs(If, e);
  }
}
function Nf(C, e, t) {
  C === "focusin"
    ? (wr(), (P4 = e), (Z4 = t), P4.attachEvent("onpropertychange", la))
    : C === "focusout" && wr();
}
function Hf(C) {
  if (C === "selectionchange" || C === "keyup" || C === "keydown")
    return w9(Z4);
}
function jf(C, e) {
  if (C === "click") return w9(e);
}
function Df(C, e) {
  if (C === "input" || C === "change") return w9(e);
}
function Bf(C, e) {
  return (C === e && (C !== 0 || 1 / C === 1 / e)) || (C !== C && e !== e);
}
var s2 = typeof Object.is == "function" ? Object.is : Bf;
function W4(C, e) {
  if (s2(C, e)) return !0;
  if (typeof C != "object" || C === null || typeof e != "object" || e === null)
    return !1;
  var t = Object.keys(C),
    n = Object.keys(e);
  if (t.length !== n.length) return !1;
  for (n = 0; n < t.length; n++) {
    var r = t[n];
    if (!MC.call(e, r) || !s2(C[r], e[r])) return !1;
  }
  return !0;
}
function Lr(C) {
  for (; C && C.firstChild; ) C = C.firstChild;
  return C;
}
function br(C, e) {
  var t = Lr(C);
  C = 0;
  for (var n; t; ) {
    if (t.nodeType === 3) {
      if (((n = C + t.textContent.length), C <= e && n >= e))
        return { node: t, offset: e - C };
      C = n;
    }
    C: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break C;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = Lr(t);
  }
}
function ua(C, e) {
  return C && e
    ? C === e
      ? !0
      : C && C.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? ua(C, e.parentNode)
      : "contains" in C
      ? C.contains(e)
      : C.compareDocumentPosition
      ? !!(C.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function ca() {
  for (var C = window, e = _6(); e instanceof C.HTMLIFrameElement; ) {
    try {
      var t = typeof e.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) C = e.contentWindow;
    else break;
    e = _6(C.document);
  }
  return e;
}
function Et(C) {
  var e = C && C.nodeName && C.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (C.type === "text" ||
        C.type === "search" ||
        C.type === "tel" ||
        C.type === "url" ||
        C.type === "password")) ||
      e === "textarea" ||
      C.contentEditable === "true")
  );
}
function zf(C) {
  var e = ca(),
    t = C.focusedElem,
    n = C.selectionRange;
  if (
    e !== t &&
    t &&
    t.ownerDocument &&
    ua(t.ownerDocument.documentElement, t)
  ) {
    if (n !== null && Et(t)) {
      if (
        ((e = n.start),
        (C = n.end),
        C === void 0 && (C = e),
        "selectionStart" in t)
      )
        (t.selectionStart = e), (t.selectionEnd = Math.min(C, t.value.length));
      else if (
        ((C = ((e = t.ownerDocument || document) && e.defaultView) || window),
        C.getSelection)
      ) {
        C = C.getSelection();
        var r = t.textContent.length,
          o = Math.min(n.start, r);
        (n = n.end === void 0 ? o : Math.min(n.end, r)),
          !C.extend && o > n && ((r = n), (n = o), (o = r)),
          (r = br(t, o));
        var i = br(t, n);
        r &&
          i &&
          (C.rangeCount !== 1 ||
            C.anchorNode !== r.node ||
            C.anchorOffset !== r.offset ||
            C.focusNode !== i.node ||
            C.focusOffset !== i.offset) &&
          ((e = e.createRange()),
          e.setStart(r.node, r.offset),
          C.removeAllRanges(),
          o > n
            ? (C.addRange(e), C.extend(i.node, i.offset))
            : (e.setEnd(i.node, i.offset), C.addRange(e)));
      }
    }
    for (e = [], C = t; (C = C.parentNode); )
      C.nodeType === 1 &&
        e.push({ element: C, left: C.scrollLeft, top: C.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
      (C = e[t]),
        (C.element.scrollLeft = C.left),
        (C.element.scrollTop = C.top);
  }
}
var Ff = R2 && "documentMode" in document && 11 >= document.documentMode,
  r8 = null,
  XC = null,
  k4 = null,
  qC = !1;
function Tr(C, e, t) {
  var n = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  qC ||
    r8 == null ||
    r8 !== _6(n) ||
    ((n = r8),
    "selectionStart" in n && Et(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (k4 && W4(k4, n)) ||
      ((k4 = n),
      (n = j6(XC, "onSelect")),
      0 < n.length &&
        ((e = new St("onSelect", "select", null, e, t)),
        C.push({ event: e, listeners: n }),
        (e.target = r8))));
}
function V0(C, e) {
  var t = {};
  return (
    (t[C.toLowerCase()] = e.toLowerCase()),
    (t["Webkit" + C] = "webkit" + e),
    (t["Moz" + C] = "moz" + e),
    t
  );
}
var o8 = {
    animationend: V0("Animation", "AnimationEnd"),
    animationiteration: V0("Animation", "AnimationIteration"),
    animationstart: V0("Animation", "AnimationStart"),
    transitionend: V0("Transition", "TransitionEnd"),
  },
  Y7 = {},
  da = {};
R2 &&
  ((da = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete o8.animationend.animation,
    delete o8.animationiteration.animation,
    delete o8.animationstart.animation),
  "TransitionEvent" in window || delete o8.transitionend.transition);
function L9(C) {
  if (Y7[C]) return Y7[C];
  if (!o8[C]) return C;
  var e = o8[C],
    t;
  for (t in e) if (e.hasOwnProperty(t) && t in da) return (Y7[C] = e[t]);
  return C;
}
var fa = L9("animationend"),
  pa = L9("animationiteration"),
  ha = L9("animationstart"),
  ma = L9("transitionend"),
  ga = new Map(),
  Pr =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function d5(C, e) {
  ga.set(C, e), B5(e, [C]);
}
for (var X7 = 0; X7 < Pr.length; X7++) {
  var q7 = Pr[X7],
    Vf = q7.toLowerCase(),
    Uf = q7[0].toUpperCase() + q7.slice(1);
  d5(Vf, "on" + Uf);
}
d5(fa, "onAnimationEnd");
d5(pa, "onAnimationIteration");
d5(ha, "onAnimationStart");
d5("dblclick", "onDoubleClick");
d5("focusin", "onFocus");
d5("focusout", "onBlur");
d5(ma, "onTransitionEnd");
b8("onMouseEnter", ["mouseout", "mouseover"]);
b8("onMouseLeave", ["mouseout", "mouseover"]);
b8("onPointerEnter", ["pointerout", "pointerover"]);
b8("onPointerLeave", ["pointerout", "pointerover"]);
B5(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
B5(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
B5("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
B5(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
B5(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
B5(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var E4 =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(E4));
function kr(C, e, t) {
  var n = C.type || "unknown-event";
  (C.currentTarget = t), Fd(n, e, void 0, C), (C.currentTarget = null);
}
function va(C, e) {
  e = (e & 4) !== 0;
  for (var t = 0; t < C.length; t++) {
    var n = C[t],
      r = n.event;
    n = n.listeners;
    C: {
      var o = void 0;
      if (e)
        for (var i = n.length - 1; 0 <= i; i--) {
          var s = n[i],
            a = s.instance,
            l = s.currentTarget;
          if (((s = s.listener), a !== o && r.isPropagationStopped())) break C;
          kr(r, s, l), (o = a);
        }
      else
        for (i = 0; i < n.length; i++) {
          if (
            ((s = n[i]),
            (a = s.instance),
            (l = s.currentTarget),
            (s = s.listener),
            a !== o && r.isPropagationStopped())
          )
            break C;
          kr(r, s, l), (o = a);
        }
    }
  }
  if (M6) throw ((C = KC), (M6 = !1), (KC = null), C);
}
function g1(C, e) {
  var t = e[ne];
  t === void 0 && (t = e[ne] = new Set());
  var n = C + "__bubble";
  t.has(n) || (ya(e, C, 2, !1), t.add(n));
}
function J7(C, e, t) {
  var n = 0;
  e && (n |= 4), ya(t, C, n, e);
}
var U0 = "_reactListening" + Math.random().toString(36).slice(2);
function K4(C) {
  if (!C[U0]) {
    (C[U0] = !0),
      bs.forEach(function (t) {
        t !== "selectionchange" && ($f.has(t) || J7(t, !1, C), J7(t, !0, C));
      });
    var e = C.nodeType === 9 ? C : C.ownerDocument;
    e === null || e[U0] || ((e[U0] = !0), J7("selectionchange", !1, e));
  }
}
function ya(C, e, t, n) {
  switch (ta(e)) {
    case 1:
      var r = nf;
      break;
    case 4:
      r = rf;
      break;
    default:
      r = vt;
  }
  (t = r.bind(null, e, t, C)),
    (r = void 0),
    !WC ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (r = !0),
    n
      ? r !== void 0
        ? C.addEventListener(e, t, { capture: !0, passive: r })
        : C.addEventListener(e, t, !0)
      : r !== void 0
      ? C.addEventListener(e, t, { passive: r })
      : C.addEventListener(e, t, !1);
}
function CC(C, e, t, n, r) {
  var o = n;
  if (!(e & 1) && !(e & 2) && n !== null)
    C: for (;;) {
      if (n === null) return;
      var i = n.tag;
      if (i === 3 || i === 4) {
        var s = n.stateNode.containerInfo;
        if (s === r || (s.nodeType === 8 && s.parentNode === r)) break;
        if (i === 4)
          for (i = n.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === r || (a.nodeType === 8 && a.parentNode === r))
            )
              return;
            i = i.return;
          }
        for (; s !== null; ) {
          if (((i = w5(s)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            n = o = i;
            continue C;
          }
          s = s.parentNode;
        }
      }
      n = n.return;
    }
  Vs(function () {
    var l = o,
      c = pt(t),
      f = [];
    C: {
      var d = ga.get(C);
      if (d !== void 0) {
        var S = St,
          v = C;
        switch (C) {
          case "keypress":
            if (f6(t) === 0) break C;
          case "keydown":
          case "keyup":
            S = Sf;
            break;
          case "focusin":
            (v = "focus"), (S = K7);
            break;
          case "focusout":
            (v = "blur"), (S = K7);
            break;
          case "beforeblur":
          case "afterblur":
            S = K7;
            break;
          case "click":
            if (t.button === 2) break C;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = gr;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = af;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Ef;
            break;
          case fa:
          case pa:
          case ha:
            S = cf;
            break;
          case ma:
            S = Lf;
            break;
          case "scroll":
            S = of;
            break;
          case "wheel":
            S = Tf;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = yr;
        }
        var g = (e & 4) !== 0,
          w = !g && C === "scroll",
          h = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var p = l, m; p !== null; ) {
          m = p;
          var y = m.stateNode;
          if (
            (m.tag === 5 &&
              y !== null &&
              ((m = y),
              h !== null && ((y = F4(p, h)), y != null && g.push(G4(p, y, m)))),
            w)
          )
            break;
          p = p.return;
        }
        0 < g.length &&
          ((d = new S(d, v, null, t, c)), f.push({ event: d, listeners: g }));
      }
    }
    if (!(e & 7)) {
      C: {
        if (
          ((d = C === "mouseover" || C === "pointerover"),
          (S = C === "mouseout" || C === "pointerout"),
          d &&
            t !== $C &&
            (v = t.relatedTarget || t.fromElement) &&
            (w5(v) || v[N2]))
        )
          break C;
        if (
          (S || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          S
            ? ((v = t.relatedTarget || t.toElement),
              (S = l),
              (v = v ? w5(v) : null),
              v !== null &&
                ((w = z5(v)), v !== w || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((S = null), (v = l)),
          S !== v)
        ) {
          if (
            ((g = gr),
            (y = "onMouseLeave"),
            (h = "onMouseEnter"),
            (p = "mouse"),
            (C === "pointerout" || C === "pointerover") &&
              ((g = yr),
              (y = "onPointerLeave"),
              (h = "onPointerEnter"),
              (p = "pointer")),
            (w = S == null ? d : i8(S)),
            (m = v == null ? d : i8(v)),
            (d = new g(y, p + "leave", S, t, c)),
            (d.target = w),
            (d.relatedTarget = m),
            (y = null),
            w5(c) === l &&
              ((g = new g(h, p + "enter", v, t, c)),
              (g.target = m),
              (g.relatedTarget = w),
              (y = g)),
            (w = y),
            S && v)
          )
            e: {
              for (g = S, h = v, p = 0, m = g; m; m = $5(m)) p++;
              for (m = 0, y = h; y; y = $5(y)) m++;
              for (; 0 < p - m; ) (g = $5(g)), p--;
              for (; 0 < m - p; ) (h = $5(h)), m--;
              for (; p--; ) {
                if (g === h || (h !== null && g === h.alternate)) break e;
                (g = $5(g)), (h = $5(h));
              }
              g = null;
            }
          else g = null;
          S !== null && _r(f, d, S, g, !1),
            v !== null && w !== null && _r(f, w, v, g, !0);
        }
      }
      C: {
        if (
          ((d = l ? i8(l) : window),
          (S = d.nodeName && d.nodeName.toLowerCase()),
          S === "select" || (S === "input" && d.type === "file"))
        )
          var x = Rf;
        else if (Ar(d))
          if (aa) x = Df;
          else {
            x = Hf;
            var E = Nf;
          }
        else
          (S = d.nodeName) &&
            S.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (x = jf);
        if (x && (x = x(C, l))) {
          sa(f, x, t, c);
          break C;
        }
        E && E(C, d, l),
          C === "focusout" &&
            (E = d._wrapperState) &&
            E.controlled &&
            d.type === "number" &&
            BC(d, "number", d.value);
      }
      switch (((E = l ? i8(l) : window), C)) {
        case "focusin":
          (Ar(E) || E.contentEditable === "true") &&
            ((r8 = E), (XC = l), (k4 = null));
          break;
        case "focusout":
          k4 = XC = r8 = null;
          break;
        case "mousedown":
          qC = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (qC = !1), Tr(f, t, c);
          break;
        case "selectionchange":
          if (Ff) break;
        case "keydown":
        case "keyup":
          Tr(f, t, c);
      }
      var A;
      if (At)
        C: {
          switch (C) {
            case "compositionstart":
              var _ = "onCompositionStart";
              break C;
            case "compositionend":
              _ = "onCompositionEnd";
              break C;
            case "compositionupdate":
              _ = "onCompositionUpdate";
              break C;
          }
          _ = void 0;
        }
      else
        n8
          ? oa(C, t) && (_ = "onCompositionEnd")
          : C === "keydown" && t.keyCode === 229 && (_ = "onCompositionStart");
      _ &&
        (ra &&
          t.locale !== "ko" &&
          (n8 || _ !== "onCompositionStart"
            ? _ === "onCompositionEnd" && n8 && (A = na())
            : ((X2 = c),
              (yt = "value" in X2 ? X2.value : X2.textContent),
              (n8 = !0))),
        (E = j6(l, _)),
        0 < E.length &&
          ((_ = new vr(_, C, null, t, c)),
          f.push({ event: _, listeners: E }),
          A ? (_.data = A) : ((A = ia(t)), A !== null && (_.data = A)))),
        (A = kf ? _f(C, t) : Of(C, t)) &&
          ((l = j6(l, "onBeforeInput")),
          0 < l.length &&
            ((c = new vr("onBeforeInput", "beforeinput", null, t, c)),
            f.push({ event: c, listeners: l }),
            (c.data = A)));
    }
    va(f, e);
  });
}
function G4(C, e, t) {
  return { instance: C, listener: e, currentTarget: t };
}
function j6(C, e) {
  for (var t = e + "Capture", n = []; C !== null; ) {
    var r = C,
      o = r.stateNode;
    r.tag === 5 &&
      o !== null &&
      ((r = o),
      (o = F4(C, t)),
      o != null && n.unshift(G4(C, o, r)),
      (o = F4(C, e)),
      o != null && n.push(G4(C, o, r))),
      (C = C.return);
  }
  return n;
}
function $5(C) {
  if (C === null) return null;
  do C = C.return;
  while (C && C.tag !== 5);
  return C || null;
}
function _r(C, e, t, n, r) {
  for (var o = e._reactName, i = []; t !== null && t !== n; ) {
    var s = t,
      a = s.alternate,
      l = s.stateNode;
    if (a !== null && a === n) break;
    s.tag === 5 &&
      l !== null &&
      ((s = l),
      r
        ? ((a = F4(t, o)), a != null && i.unshift(G4(t, a, s)))
        : r || ((a = F4(t, o)), a != null && i.push(G4(t, a, s)))),
      (t = t.return);
  }
  i.length !== 0 && C.push({ event: e, listeners: i });
}
var Zf = /\r\n?/g,
  Wf = /\u0000|\uFFFD/g;
function Or(C) {
  return (typeof C == "string" ? C : "" + C)
    .replace(
      Zf,
      `
`
    )
    .replace(Wf, "");
}
function $0(C, e, t) {
  if (((e = Or(e)), Or(C) !== e && t)) throw Error(j(425));
}
function D6() {}
var JC = null,
  Ce = null;
function ee(C, e) {
  return (
    C === "textarea" ||
    C === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var te = typeof setTimeout == "function" ? setTimeout : void 0,
  Kf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Mr = typeof Promise == "function" ? Promise : void 0,
  Gf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Mr < "u"
      ? function (C) {
          return Mr.resolve(null).then(C).catch(Qf);
        }
      : te;
function Qf(C) {
  setTimeout(function () {
    throw C;
  });
}
function eC(C, e) {
  var t = e,
    n = 0;
  do {
    var r = t.nextSibling;
    if ((C.removeChild(t), r && r.nodeType === 8))
      if (((t = r.data), t === "/$")) {
        if (n === 0) {
          C.removeChild(r), $4(e);
          return;
        }
        n--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || n++;
    t = r;
  } while (t);
  $4(e);
}
function r5(C) {
  for (; C != null; C = C.nextSibling) {
    var e = C.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = C.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return C;
}
function Ir(C) {
  C = C.previousSibling;
  for (var e = 0; C; ) {
    if (C.nodeType === 8) {
      var t = C.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (e === 0) return C;
        e--;
      } else t === "/$" && e++;
    }
    C = C.previousSibling;
  }
  return null;
}
var Y8 = Math.random().toString(36).slice(2),
  f2 = "__reactFiber$" + Y8,
  Q4 = "__reactProps$" + Y8,
  N2 = "__reactContainer$" + Y8,
  ne = "__reactEvents$" + Y8,
  Yf = "__reactListeners$" + Y8,
  Xf = "__reactHandles$" + Y8;
function w5(C) {
  var e = C[f2];
  if (e) return e;
  for (var t = C.parentNode; t; ) {
    if ((e = t[N2] || t[f2])) {
      if (
        ((t = e.alternate),
        e.child !== null || (t !== null && t.child !== null))
      )
        for (C = Ir(C); C !== null; ) {
          if ((t = C[f2])) return t;
          C = Ir(C);
        }
      return e;
    }
    (C = t), (t = C.parentNode);
  }
  return null;
}
function v0(C) {
  return (
    (C = C[f2] || C[N2]),
    !C || (C.tag !== 5 && C.tag !== 6 && C.tag !== 13 && C.tag !== 3) ? null : C
  );
}
function i8(C) {
  if (C.tag === 5 || C.tag === 6) return C.stateNode;
  throw Error(j(33));
}
function b9(C) {
  return C[Q4] || null;
}
var re = [],
  s8 = -1;
function f5(C) {
  return { current: C };
}
function v1(C) {
  0 > s8 || ((C.current = re[s8]), (re[s8] = null), s8--);
}
function m1(C, e) {
  s8++, (re[s8] = C.current), (C.current = e);
}
var u5 = {},
  X1 = f5(u5),
  a3 = f5(!1),
  M5 = u5;
function T8(C, e) {
  var t = C.type.contextTypes;
  if (!t) return u5;
  var n = C.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e)
    return n.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    o;
  for (o in t) r[o] = e[o];
  return (
    n &&
      ((C = C.stateNode),
      (C.__reactInternalMemoizedUnmaskedChildContext = e),
      (C.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function l3(C) {
  return (C = C.childContextTypes), C != null;
}
function B6() {
  v1(a3), v1(X1);
}
function Rr(C, e, t) {
  if (X1.current !== u5) throw Error(j(168));
  m1(X1, e), m1(a3, t);
}
function Sa(C, e, t) {
  var n = C.stateNode;
  if (((e = e.childContextTypes), typeof n.getChildContext != "function"))
    return t;
  n = n.getChildContext();
  for (var r in n) if (!(r in e)) throw Error(j(108, Rd(C) || "Unknown", r));
  return b1({}, t, n);
}
function z6(C) {
  return (
    (C =
      ((C = C.stateNode) && C.__reactInternalMemoizedMergedChildContext) || u5),
    (M5 = X1.current),
    m1(X1, C),
    m1(a3, a3.current),
    !0
  );
}
function Nr(C, e, t) {
  var n = C.stateNode;
  if (!n) throw Error(j(169));
  t
    ? ((C = Sa(C, e, M5)),
      (n.__reactInternalMemoizedMergedChildContext = C),
      v1(a3),
      v1(X1),
      m1(X1, C))
    : v1(a3),
    m1(a3, t);
}
var _2 = null,
  T9 = !1,
  tC = !1;
function xa(C) {
  _2 === null ? (_2 = [C]) : _2.push(C);
}
function qf(C) {
  (T9 = !0), xa(C);
}
function p5() {
  if (!tC && _2 !== null) {
    tC = !0;
    var C = 0,
      e = l1;
    try {
      var t = _2;
      for (l1 = 1; C < t.length; C++) {
        var n = t[C];
        do n = n(!0);
        while (n !== null);
      }
      (_2 = null), (T9 = !1);
    } catch (r) {
      throw (_2 !== null && (_2 = _2.slice(C + 1)), Ws(ht, p5), r);
    } finally {
      (l1 = e), (tC = !1);
    }
  }
  return null;
}
var a8 = [],
  l8 = 0,
  F6 = null,
  V6 = 0,
  H3 = [],
  j3 = 0,
  I5 = null,
  O2 = 1,
  M2 = "";
function S5(C, e) {
  (a8[l8++] = V6), (a8[l8++] = F6), (F6 = C), (V6 = e);
}
function Aa(C, e, t) {
  (H3[j3++] = O2), (H3[j3++] = M2), (H3[j3++] = I5), (I5 = C);
  var n = O2;
  C = M2;
  var r = 32 - o2(n) - 1;
  (n &= ~(1 << r)), (t += 1);
  var o = 32 - o2(e) + r;
  if (30 < o) {
    var i = r - (r % 5);
    (o = (n & ((1 << i) - 1)).toString(32)),
      (n >>= i),
      (r -= i),
      (O2 = (1 << (32 - o2(e) + r)) | (t << r) | n),
      (M2 = o + C);
  } else (O2 = (1 << o) | (t << r) | n), (M2 = C);
}
function wt(C) {
  C.return !== null && (S5(C, 1), Aa(C, 1, 0));
}
function Lt(C) {
  for (; C === F6; )
    (F6 = a8[--l8]), (a8[l8] = null), (V6 = a8[--l8]), (a8[l8] = null);
  for (; C === I5; )
    (I5 = H3[--j3]),
      (H3[j3] = null),
      (M2 = H3[--j3]),
      (H3[j3] = null),
      (O2 = H3[--j3]),
      (H3[j3] = null);
}
var E3 = null,
  A3 = null,
  A1 = !1,
  r2 = null;
function Ea(C, e) {
  var t = B3(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = e),
    (t.return = C),
    (e = C.deletions),
    e === null ? ((C.deletions = [t]), (C.flags |= 16)) : e.push(t);
}
function Hr(C, e) {
  switch (C.tag) {
    case 5:
      var t = C.type;
      return (
        (e =
          e.nodeType !== 1 || t.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((C.stateNode = e), (E3 = C), (A3 = r5(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = C.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((C.stateNode = e), (E3 = C), (A3 = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((t = I5 !== null ? { id: O2, overflow: M2 } : null),
            (C.memoizedState = {
              dehydrated: e,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = B3(18, null, null, 0)),
            (t.stateNode = e),
            (t.return = C),
            (C.child = t),
            (E3 = C),
            (A3 = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function oe(C) {
  return (C.mode & 1) !== 0 && (C.flags & 128) === 0;
}
function ie(C) {
  if (A1) {
    var e = A3;
    if (e) {
      var t = e;
      if (!Hr(C, e)) {
        if (oe(C)) throw Error(j(418));
        e = r5(t.nextSibling);
        var n = E3;
        e && Hr(C, e)
          ? Ea(n, t)
          : ((C.flags = (C.flags & -4097) | 2), (A1 = !1), (E3 = C));
      }
    } else {
      if (oe(C)) throw Error(j(418));
      (C.flags = (C.flags & -4097) | 2), (A1 = !1), (E3 = C);
    }
  }
}
function jr(C) {
  for (C = C.return; C !== null && C.tag !== 5 && C.tag !== 3 && C.tag !== 13; )
    C = C.return;
  E3 = C;
}
function Z0(C) {
  if (C !== E3) return !1;
  if (!A1) return jr(C), (A1 = !0), !1;
  var e;
  if (
    ((e = C.tag !== 3) &&
      !(e = C.tag !== 5) &&
      ((e = C.type),
      (e = e !== "head" && e !== "body" && !ee(C.type, C.memoizedProps))),
    e && (e = A3))
  ) {
    if (oe(C)) throw (wa(), Error(j(418)));
    for (; e; ) Ea(C, e), (e = r5(e.nextSibling));
  }
  if ((jr(C), C.tag === 13)) {
    if (((C = C.memoizedState), (C = C !== null ? C.dehydrated : null), !C))
      throw Error(j(317));
    C: {
      for (C = C.nextSibling, e = 0; C; ) {
        if (C.nodeType === 8) {
          var t = C.data;
          if (t === "/$") {
            if (e === 0) {
              A3 = r5(C.nextSibling);
              break C;
            }
            e--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || e++;
        }
        C = C.nextSibling;
      }
      A3 = null;
    }
  } else A3 = E3 ? r5(C.stateNode.nextSibling) : null;
  return !0;
}
function wa() {
  for (var C = A3; C; ) C = r5(C.nextSibling);
}
function P8() {
  (A3 = E3 = null), (A1 = !1);
}
function bt(C) {
  r2 === null ? (r2 = [C]) : r2.push(C);
}
var Jf = z2.ReactCurrentBatchConfig;
function t2(C, e) {
  if (C && C.defaultProps) {
    (e = b1({}, e)), (C = C.defaultProps);
    for (var t in C) e[t] === void 0 && (e[t] = C[t]);
    return e;
  }
  return e;
}
var U6 = f5(null),
  $6 = null,
  u8 = null,
  Tt = null;
function Pt() {
  Tt = u8 = $6 = null;
}
function kt(C) {
  var e = U6.current;
  v1(U6), (C._currentValue = e);
}
function se(C, e, t) {
  for (; C !== null; ) {
    var n = C.alternate;
    if (
      ((C.childLanes & e) !== e
        ? ((C.childLanes |= e), n !== null && (n.childLanes |= e))
        : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
      C === t)
    )
      break;
    C = C.return;
  }
}
function y8(C, e) {
  ($6 = C),
    (Tt = u8 = null),
    (C = C.dependencies),
    C !== null &&
      C.firstContext !== null &&
      (C.lanes & e && (s3 = !0), (C.firstContext = null));
}
function V3(C) {
  var e = C._currentValue;
  if (Tt !== C)
    if (((C = { context: C, memoizedValue: e, next: null }), u8 === null)) {
      if ($6 === null) throw Error(j(308));
      (u8 = C), ($6.dependencies = { lanes: 0, firstContext: C });
    } else u8 = u8.next = C;
  return e;
}
var L5 = null;
function _t(C) {
  L5 === null ? (L5 = [C]) : L5.push(C);
}
function La(C, e, t, n) {
  var r = e.interleaved;
  return (
    r === null ? ((t.next = t), _t(e)) : ((t.next = r.next), (r.next = t)),
    (e.interleaved = t),
    H2(C, n)
  );
}
function H2(C, e) {
  C.lanes |= e;
  var t = C.alternate;
  for (t !== null && (t.lanes |= e), t = C, C = C.return; C !== null; )
    (C.childLanes |= e),
      (t = C.alternate),
      t !== null && (t.childLanes |= e),
      (t = C),
      (C = C.return);
  return t.tag === 3 ? t.stateNode : null;
}
var W2 = !1;
function Ot(C) {
  C.updateQueue = {
    baseState: C.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ba(C, e) {
  (C = C.updateQueue),
    e.updateQueue === C &&
      (e.updateQueue = {
        baseState: C.baseState,
        firstBaseUpdate: C.firstBaseUpdate,
        lastBaseUpdate: C.lastBaseUpdate,
        shared: C.shared,
        effects: C.effects,
      });
}
function I2(C, e) {
  return {
    eventTime: C,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function o5(C, e, t) {
  var n = C.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), t1 & 2)) {
    var r = n.pending;
    return (
      r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
      (n.pending = e),
      H2(C, t)
    );
  }
  return (
    (r = n.interleaved),
    r === null ? ((e.next = e), _t(n)) : ((e.next = r.next), (r.next = e)),
    (n.interleaved = e),
    H2(C, t)
  );
}
function p6(C, e, t) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (t & 4194240) !== 0))
  ) {
    var n = e.lanes;
    (n &= C.pendingLanes), (t |= n), (e.lanes = t), mt(C, t);
  }
}
function Dr(C, e) {
  var t = C.updateQueue,
    n = C.alternate;
  if (n !== null && ((n = n.updateQueue), t === n)) {
    var r = null,
      o = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var i = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        o === null ? (r = o = i) : (o = o.next = i), (t = t.next);
      } while (t !== null);
      o === null ? (r = o = e) : (o = o.next = e);
    } else r = o = e;
    (t = {
      baseState: n.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (C.updateQueue = t);
    return;
  }
  (C = t.lastBaseUpdate),
    C === null ? (t.firstBaseUpdate = e) : (C.next = e),
    (t.lastBaseUpdate = e);
}
function Z6(C, e, t, n) {
  var r = C.updateQueue;
  W2 = !1;
  var o = r.firstBaseUpdate,
    i = r.lastBaseUpdate,
    s = r.shared.pending;
  if (s !== null) {
    r.shared.pending = null;
    var a = s,
      l = a.next;
    (a.next = null), i === null ? (o = l) : (i.next = l), (i = a);
    var c = C.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== i &&
        (s === null ? (c.firstBaseUpdate = l) : (s.next = l),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = r.baseState;
    (i = 0), (c = l = a = null), (s = o);
    do {
      var d = s.lane,
        S = s.eventTime;
      if ((n & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: S,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        C: {
          var v = C,
            g = s;
          switch (((d = e), (S = t), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == "function")) {
                f = v.call(S, f, d);
                break C;
              }
              f = v;
              break C;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (d = typeof v == "function" ? v.call(S, f, d) : v),
                d == null)
              )
                break C;
              f = b1({}, f, d);
              break C;
            case 2:
              W2 = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((C.flags |= 64),
          (d = r.effects),
          d === null ? (r.effects = [s]) : d.push(s));
      } else
        (S = {
          eventTime: S,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((l = c = S), (a = f)) : (c = c.next = S),
          (i |= d);
      if (((s = s.next), s === null)) {
        if (((s = r.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (r.lastBaseUpdate = d),
          (r.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (a = f),
      (r.baseState = a),
      (r.firstBaseUpdate = l),
      (r.lastBaseUpdate = c),
      (e = r.shared.interleaved),
      e !== null)
    ) {
      r = e;
      do (i |= r.lane), (r = r.next);
      while (r !== e);
    } else o === null && (r.shared.lanes = 0);
    (N5 |= i), (C.lanes = i), (C.memoizedState = f);
  }
}
function Br(C, e, t) {
  if (((C = e.effects), (e.effects = null), C !== null))
    for (e = 0; e < C.length; e++) {
      var n = C[e],
        r = n.callback;
      if (r !== null) {
        if (((n.callback = null), (n = t), typeof r != "function"))
          throw Error(j(191, r));
        r.call(n);
      }
    }
}
var Ta = new Ls.Component().refs;
function ae(C, e, t, n) {
  (e = C.memoizedState),
    (t = t(n, e)),
    (t = t == null ? e : b1({}, e, t)),
    (C.memoizedState = t),
    C.lanes === 0 && (C.updateQueue.baseState = t);
}
var P9 = {
  isMounted: function (C) {
    return (C = C._reactInternals) ? z5(C) === C : !1;
  },
  enqueueSetState: function (C, e, t) {
    C = C._reactInternals;
    var n = t3(),
      r = s5(C),
      o = I2(n, r);
    (o.payload = e),
      t != null && (o.callback = t),
      (e = o5(C, o, r)),
      e !== null && (i2(e, C, r, n), p6(e, C, r));
  },
  enqueueReplaceState: function (C, e, t) {
    C = C._reactInternals;
    var n = t3(),
      r = s5(C),
      o = I2(n, r);
    (o.tag = 1),
      (o.payload = e),
      t != null && (o.callback = t),
      (e = o5(C, o, r)),
      e !== null && (i2(e, C, r, n), p6(e, C, r));
  },
  enqueueForceUpdate: function (C, e) {
    C = C._reactInternals;
    var t = t3(),
      n = s5(C),
      r = I2(t, n);
    (r.tag = 2),
      e != null && (r.callback = e),
      (e = o5(C, r, n)),
      e !== null && (i2(e, C, n, t), p6(e, C, n));
  },
};
function zr(C, e, t, n, r, o, i) {
  return (
    (C = C.stateNode),
    typeof C.shouldComponentUpdate == "function"
      ? C.shouldComponentUpdate(n, o, i)
      : e.prototype && e.prototype.isPureReactComponent
      ? !W4(t, n) || !W4(r, o)
      : !0
  );
}
function Pa(C, e, t) {
  var n = !1,
    r = u5,
    o = e.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = V3(o))
      : ((r = l3(e) ? M5 : X1.current),
        (n = e.contextTypes),
        (o = (n = n != null) ? T8(C, r) : u5)),
    (e = new e(t, o)),
    (C.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = P9),
    (C.stateNode = e),
    (e._reactInternals = C),
    n &&
      ((C = C.stateNode),
      (C.__reactInternalMemoizedUnmaskedChildContext = r),
      (C.__reactInternalMemoizedMaskedChildContext = o)),
    e
  );
}
function Fr(C, e, t, n) {
  (C = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(t, n),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(t, n),
    e.state !== C && P9.enqueueReplaceState(e, e.state, null);
}
function le(C, e, t, n) {
  var r = C.stateNode;
  (r.props = t), (r.state = C.memoizedState), (r.refs = Ta), Ot(C);
  var o = e.contextType;
  typeof o == "object" && o !== null
    ? (r.context = V3(o))
    : ((o = l3(e) ? M5 : X1.current), (r.context = T8(C, o))),
    (r.state = C.memoizedState),
    (o = e.getDerivedStateFromProps),
    typeof o == "function" && (ae(C, e, o, t), (r.state = C.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof r.getSnapshotBeforeUpdate == "function" ||
      (typeof r.UNSAFE_componentWillMount != "function" &&
        typeof r.componentWillMount != "function") ||
      ((e = r.state),
      typeof r.componentWillMount == "function" && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == "function" &&
        r.UNSAFE_componentWillMount(),
      e !== r.state && P9.enqueueReplaceState(r, r.state, null),
      Z6(C, t, r, n),
      (r.state = C.memoizedState)),
    typeof r.componentDidMount == "function" && (C.flags |= 4194308);
}
function u4(C, e, t) {
  if (
    ((C = t.ref), C !== null && typeof C != "function" && typeof C != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(j(309));
        var n = t.stateNode;
      }
      if (!n) throw Error(j(147, C));
      var r = n,
        o = "" + C;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === o
        ? e.ref
        : ((e = function (i) {
            var s = r.refs;
            s === Ta && (s = r.refs = {}),
              i === null ? delete s[o] : (s[o] = i);
          }),
          (e._stringRef = o),
          e);
    }
    if (typeof C != "string") throw Error(j(284));
    if (!t._owner) throw Error(j(290, C));
  }
  return C;
}
function W0(C, e) {
  throw (
    ((C = Object.prototype.toString.call(e)),
    Error(
      j(
        31,
        C === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : C
      )
    ))
  );
}
function Vr(C) {
  var e = C._init;
  return e(C._payload);
}
function ka(C) {
  function e(h, p) {
    if (C) {
      var m = h.deletions;
      m === null ? ((h.deletions = [p]), (h.flags |= 16)) : m.push(p);
    }
  }
  function t(h, p) {
    if (!C) return null;
    for (; p !== null; ) e(h, p), (p = p.sibling);
    return null;
  }
  function n(h, p) {
    for (h = new Map(); p !== null; )
      p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function r(h, p) {
    return (h = a5(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, p, m) {
    return (
      (h.index = m),
      C
        ? ((m = h.alternate),
          m !== null
            ? ((m = m.index), m < p ? ((h.flags |= 2), p) : m)
            : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function i(h) {
    return C && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, p, m, y) {
    return p === null || p.tag !== 6
      ? ((p = lC(m, h.mode, y)), (p.return = h), p)
      : ((p = r(p, m)), (p.return = h), p);
  }
  function a(h, p, m, y) {
    var x = m.type;
    return x === t8
      ? c(h, p, m.props.children, y, m.key)
      : p !== null &&
        (p.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === Z2 &&
            Vr(x) === p.type))
      ? ((y = r(p, m.props)), (y.ref = u4(h, p, m)), (y.return = h), y)
      : ((y = S6(m.type, m.key, m.props, null, h.mode, y)),
        (y.ref = u4(h, p, m)),
        (y.return = h),
        y);
  }
  function l(h, p, m, y) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== m.containerInfo ||
      p.stateNode.implementation !== m.implementation
      ? ((p = uC(m, h.mode, y)), (p.return = h), p)
      : ((p = r(p, m.children || [])), (p.return = h), p);
  }
  function c(h, p, m, y, x) {
    return p === null || p.tag !== 7
      ? ((p = _5(m, h.mode, y, x)), (p.return = h), p)
      : ((p = r(p, m)), (p.return = h), p);
  }
  function f(h, p, m) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = lC("" + p, h.mode, m)), (p.return = h), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case N0:
          return (
            (m = S6(p.type, p.key, p.props, null, h.mode, m)),
            (m.ref = u4(h, null, p)),
            (m.return = h),
            m
          );
        case e8:
          return (p = uC(p, h.mode, m)), (p.return = h), p;
        case Z2:
          var y = p._init;
          return f(h, y(p._payload), m);
      }
      if (x4(p) || o4(p))
        return (p = _5(p, h.mode, m, null)), (p.return = h), p;
      W0(h, p);
    }
    return null;
  }
  function d(h, p, m, y) {
    var x = p !== null ? p.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return x !== null ? null : s(h, p, "" + m, y);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case N0:
          return m.key === x ? a(h, p, m, y) : null;
        case e8:
          return m.key === x ? l(h, p, m, y) : null;
        case Z2:
          return (x = m._init), d(h, p, x(m._payload), y);
      }
      if (x4(m) || o4(m)) return x !== null ? null : c(h, p, m, y, null);
      W0(h, m);
    }
    return null;
  }
  function S(h, p, m, y, x) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (h = h.get(m) || null), s(p, h, "" + y, x);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case N0:
          return (h = h.get(y.key === null ? m : y.key) || null), a(p, h, y, x);
        case e8:
          return (h = h.get(y.key === null ? m : y.key) || null), l(p, h, y, x);
        case Z2:
          var E = y._init;
          return S(h, p, m, E(y._payload), x);
      }
      if (x4(y) || o4(y)) return (h = h.get(m) || null), c(p, h, y, x, null);
      W0(p, y);
    }
    return null;
  }
  function v(h, p, m, y) {
    for (
      var x = null, E = null, A = p, _ = (p = 0), T = null;
      A !== null && _ < m.length;
      _++
    ) {
      A.index > _ ? ((T = A), (A = null)) : (T = A.sibling);
      var b = d(h, A, m[_], y);
      if (b === null) {
        A === null && (A = T);
        break;
      }
      C && A && b.alternate === null && e(h, A),
        (p = o(b, p, _)),
        E === null ? (x = b) : (E.sibling = b),
        (E = b),
        (A = T);
    }
    if (_ === m.length) return t(h, A), A1 && S5(h, _), x;
    if (A === null) {
      for (; _ < m.length; _++)
        (A = f(h, m[_], y)),
          A !== null &&
            ((p = o(A, p, _)), E === null ? (x = A) : (E.sibling = A), (E = A));
      return A1 && S5(h, _), x;
    }
    for (A = n(h, A); _ < m.length; _++)
      (T = S(A, h, _, m[_], y)),
        T !== null &&
          (C && T.alternate !== null && A.delete(T.key === null ? _ : T.key),
          (p = o(T, p, _)),
          E === null ? (x = T) : (E.sibling = T),
          (E = T));
    return (
      C &&
        A.forEach(function (O) {
          return e(h, O);
        }),
      A1 && S5(h, _),
      x
    );
  }
  function g(h, p, m, y) {
    var x = o4(m);
    if (typeof x != "function") throw Error(j(150));
    if (((m = x.call(m)), m == null)) throw Error(j(151));
    for (
      var E = (x = null), A = p, _ = (p = 0), T = null, b = m.next();
      A !== null && !b.done;
      _++, b = m.next()
    ) {
      A.index > _ ? ((T = A), (A = null)) : (T = A.sibling);
      var O = d(h, A, b.value, y);
      if (O === null) {
        A === null && (A = T);
        break;
      }
      C && A && O.alternate === null && e(h, A),
        (p = o(O, p, _)),
        E === null ? (x = O) : (E.sibling = O),
        (E = O),
        (A = T);
    }
    if (b.done) return t(h, A), A1 && S5(h, _), x;
    if (A === null) {
      for (; !b.done; _++, b = m.next())
        (b = f(h, b.value, y)),
          b !== null &&
            ((p = o(b, p, _)), E === null ? (x = b) : (E.sibling = b), (E = b));
      return A1 && S5(h, _), x;
    }
    for (A = n(h, A); !b.done; _++, b = m.next())
      (b = S(A, h, _, b.value, y)),
        b !== null &&
          (C && b.alternate !== null && A.delete(b.key === null ? _ : b.key),
          (p = o(b, p, _)),
          E === null ? (x = b) : (E.sibling = b),
          (E = b));
    return (
      C &&
        A.forEach(function (M) {
          return e(h, M);
        }),
      A1 && S5(h, _),
      x
    );
  }
  function w(h, p, m, y) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === t8 &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case N0:
          C: {
            for (var x = m.key, E = p; E !== null; ) {
              if (E.key === x) {
                if (((x = m.type), x === t8)) {
                  if (E.tag === 7) {
                    t(h, E.sibling),
                      (p = r(E, m.props.children)),
                      (p.return = h),
                      (h = p);
                    break C;
                  }
                } else if (
                  E.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === Z2 &&
                    Vr(x) === E.type)
                ) {
                  t(h, E.sibling),
                    (p = r(E, m.props)),
                    (p.ref = u4(h, E, m)),
                    (p.return = h),
                    (h = p);
                  break C;
                }
                t(h, E);
                break;
              } else e(h, E);
              E = E.sibling;
            }
            m.type === t8
              ? ((p = _5(m.props.children, h.mode, y, m.key)),
                (p.return = h),
                (h = p))
              : ((y = S6(m.type, m.key, m.props, null, h.mode, y)),
                (y.ref = u4(h, p, m)),
                (y.return = h),
                (h = y));
          }
          return i(h);
        case e8:
          C: {
            for (E = m.key; p !== null; ) {
              if (p.key === E)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === m.containerInfo &&
                  p.stateNode.implementation === m.implementation
                ) {
                  t(h, p.sibling),
                    (p = r(p, m.children || [])),
                    (p.return = h),
                    (h = p);
                  break C;
                } else {
                  t(h, p);
                  break;
                }
              else e(h, p);
              p = p.sibling;
            }
            (p = uC(m, h.mode, y)), (p.return = h), (h = p);
          }
          return i(h);
        case Z2:
          return (E = m._init), w(h, p, E(m._payload), y);
      }
      if (x4(m)) return v(h, p, m, y);
      if (o4(m)) return g(h, p, m, y);
      W0(h, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        p !== null && p.tag === 6
          ? (t(h, p.sibling), (p = r(p, m)), (p.return = h), (h = p))
          : (t(h, p), (p = lC(m, h.mode, y)), (p.return = h), (h = p)),
        i(h))
      : t(h, p);
  }
  return w;
}
var k8 = ka(!0),
  _a = ka(!1),
  y0 = {},
  v2 = f5(y0),
  Y4 = f5(y0),
  X4 = f5(y0);
function b5(C) {
  if (C === y0) throw Error(j(174));
  return C;
}
function Mt(C, e) {
  switch ((m1(X4, e), m1(Y4, C), m1(v2, y0), (C = e.nodeType), C)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : FC(null, "");
      break;
    default:
      (C = C === 8 ? e.parentNode : e),
        (e = C.namespaceURI || null),
        (C = C.tagName),
        (e = FC(e, C));
  }
  v1(v2), m1(v2, e);
}
function _8() {
  v1(v2), v1(Y4), v1(X4);
}
function Oa(C) {
  b5(X4.current);
  var e = b5(v2.current),
    t = FC(e, C.type);
  e !== t && (m1(Y4, C), m1(v2, t));
}
function It(C) {
  Y4.current === C && (v1(v2), v1(Y4));
}
var w1 = f5(0);
function W6(C) {
  for (var e = C; e !== null; ) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === C) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === C) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var nC = [];
function Rt() {
  for (var C = 0; C < nC.length; C++)
    nC[C]._workInProgressVersionPrimary = null;
  nC.length = 0;
}
var h6 = z2.ReactCurrentDispatcher,
  rC = z2.ReactCurrentBatchConfig,
  R5 = 0,
  L1 = null,
  N1 = null,
  j1 = null,
  K6 = !1,
  _4 = !1,
  q4 = 0,
  Cp = 0;
function K1() {
  throw Error(j(321));
}
function Nt(C, e) {
  if (e === null) return !1;
  for (var t = 0; t < e.length && t < C.length; t++)
    if (!s2(C[t], e[t])) return !1;
  return !0;
}
function Ht(C, e, t, n, r, o) {
  if (
    ((R5 = o),
    (L1 = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (h6.current = C === null || C.memoizedState === null ? rp : op),
    (C = t(n, r)),
    _4)
  ) {
    o = 0;
    do {
      if (((_4 = !1), (q4 = 0), 25 <= o)) throw Error(j(301));
      (o += 1),
        (j1 = N1 = null),
        (e.updateQueue = null),
        (h6.current = ip),
        (C = t(n, r));
    } while (_4);
  }
  if (
    ((h6.current = G6),
    (e = N1 !== null && N1.next !== null),
    (R5 = 0),
    (j1 = N1 = L1 = null),
    (K6 = !1),
    e)
  )
    throw Error(j(300));
  return C;
}
function jt() {
  var C = q4 !== 0;
  return (q4 = 0), C;
}
function u2() {
  var C = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return j1 === null ? (L1.memoizedState = j1 = C) : (j1 = j1.next = C), j1;
}
function U3() {
  if (N1 === null) {
    var C = L1.alternate;
    C = C !== null ? C.memoizedState : null;
  } else C = N1.next;
  var e = j1 === null ? L1.memoizedState : j1.next;
  if (e !== null) (j1 = e), (N1 = C);
  else {
    if (C === null) throw Error(j(310));
    (N1 = C),
      (C = {
        memoizedState: N1.memoizedState,
        baseState: N1.baseState,
        baseQueue: N1.baseQueue,
        queue: N1.queue,
        next: null,
      }),
      j1 === null ? (L1.memoizedState = j1 = C) : (j1 = j1.next = C);
  }
  return j1;
}
function J4(C, e) {
  return typeof e == "function" ? e(C) : e;
}
function oC(C) {
  var e = U3(),
    t = e.queue;
  if (t === null) throw Error(j(311));
  t.lastRenderedReducer = C;
  var n = N1,
    r = n.baseQueue,
    o = t.pending;
  if (o !== null) {
    if (r !== null) {
      var i = r.next;
      (r.next = o.next), (o.next = i);
    }
    (n.baseQueue = r = o), (t.pending = null);
  }
  if (r !== null) {
    (o = r.next), (n = n.baseState);
    var s = (i = null),
      a = null,
      l = o;
    do {
      var c = l.lane;
      if ((R5 & c) === c)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: l.action,
              hasEagerState: l.hasEagerState,
              eagerState: l.eagerState,
              next: null,
            }),
          (n = l.hasEagerState ? l.eagerState : C(n, l.action));
      else {
        var f = {
          lane: c,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null,
        };
        a === null ? ((s = a = f), (i = n)) : (a = a.next = f),
          (L1.lanes |= c),
          (N5 |= c);
      }
      l = l.next;
    } while (l !== null && l !== o);
    a === null ? (i = n) : (a.next = s),
      s2(n, e.memoizedState) || (s3 = !0),
      (e.memoizedState = n),
      (e.baseState = i),
      (e.baseQueue = a),
      (t.lastRenderedState = n);
  }
  if (((C = t.interleaved), C !== null)) {
    r = C;
    do (o = r.lane), (L1.lanes |= o), (N5 |= o), (r = r.next);
    while (r !== C);
  } else r === null && (t.lanes = 0);
  return [e.memoizedState, t.dispatch];
}
function iC(C) {
  var e = U3(),
    t = e.queue;
  if (t === null) throw Error(j(311));
  t.lastRenderedReducer = C;
  var n = t.dispatch,
    r = t.pending,
    o = e.memoizedState;
  if (r !== null) {
    t.pending = null;
    var i = (r = r.next);
    do (o = C(o, i.action)), (i = i.next);
    while (i !== r);
    s2(o, e.memoizedState) || (s3 = !0),
      (e.memoizedState = o),
      e.baseQueue === null && (e.baseState = o),
      (t.lastRenderedState = o);
  }
  return [o, n];
}
function Ma() {}
function Ia(C, e) {
  var t = L1,
    n = U3(),
    r = e(),
    o = !s2(n.memoizedState, r);
  if (
    (o && ((n.memoizedState = r), (s3 = !0)),
    (n = n.queue),
    Dt(Ha.bind(null, t, n, C), [C]),
    n.getSnapshot !== e || o || (j1 !== null && j1.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      C0(9, Na.bind(null, t, n, r, e), void 0, null),
      D1 === null)
    )
      throw Error(j(349));
    R5 & 30 || Ra(t, e, r);
  }
  return r;
}
function Ra(C, e, t) {
  (C.flags |= 16384),
    (C = { getSnapshot: e, value: t }),
    (e = L1.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (L1.updateQueue = e),
        (e.stores = [C]))
      : ((t = e.stores), t === null ? (e.stores = [C]) : t.push(C));
}
function Na(C, e, t, n) {
  (e.value = t), (e.getSnapshot = n), ja(e) && Da(C);
}
function Ha(C, e, t) {
  return t(function () {
    ja(e) && Da(C);
  });
}
function ja(C) {
  var e = C.getSnapshot;
  C = C.value;
  try {
    var t = e();
    return !s2(C, t);
  } catch {
    return !0;
  }
}
function Da(C) {
  var e = H2(C, 1);
  e !== null && i2(e, C, 1, -1);
}
function Ur(C) {
  var e = u2();
  return (
    typeof C == "function" && (C = C()),
    (e.memoizedState = e.baseState = C),
    (C = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: J4,
      lastRenderedState: C,
    }),
    (e.queue = C),
    (C = C.dispatch = np.bind(null, L1, C)),
    [e.memoizedState, C]
  );
}
function C0(C, e, t, n) {
  return (
    (C = { tag: C, create: e, destroy: t, deps: n, next: null }),
    (e = L1.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (L1.updateQueue = e),
        (e.lastEffect = C.next = C))
      : ((t = e.lastEffect),
        t === null
          ? (e.lastEffect = C.next = C)
          : ((n = t.next), (t.next = C), (C.next = n), (e.lastEffect = C))),
    C
  );
}
function Ba() {
  return U3().memoizedState;
}
function m6(C, e, t, n) {
  var r = u2();
  (L1.flags |= C),
    (r.memoizedState = C0(1 | e, t, void 0, n === void 0 ? null : n));
}
function k9(C, e, t, n) {
  var r = U3();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (N1 !== null) {
    var i = N1.memoizedState;
    if (((o = i.destroy), n !== null && Nt(n, i.deps))) {
      r.memoizedState = C0(e, t, o, n);
      return;
    }
  }
  (L1.flags |= C), (r.memoizedState = C0(1 | e, t, o, n));
}
function $r(C, e) {
  return m6(8390656, 8, C, e);
}
function Dt(C, e) {
  return k9(2048, 8, C, e);
}
function za(C, e) {
  return k9(4, 2, C, e);
}
function Fa(C, e) {
  return k9(4, 4, C, e);
}
function Va(C, e) {
  if (typeof e == "function")
    return (
      (C = C()),
      e(C),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (C = C()),
      (e.current = C),
      function () {
        e.current = null;
      }
    );
}
function Ua(C, e, t) {
  return (
    (t = t != null ? t.concat([C]) : null), k9(4, 4, Va.bind(null, e, C), t)
  );
}
function Bt() {}
function $a(C, e) {
  var t = U3();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && Nt(e, n[1])
    ? n[0]
    : ((t.memoizedState = [C, e]), C);
}
function Za(C, e) {
  var t = U3();
  e = e === void 0 ? null : e;
  var n = t.memoizedState;
  return n !== null && e !== null && Nt(e, n[1])
    ? n[0]
    : ((C = C()), (t.memoizedState = [C, e]), C);
}
function Wa(C, e, t) {
  return R5 & 21
    ? (s2(t, e) || ((t = Qs()), (L1.lanes |= t), (N5 |= t), (C.baseState = !0)),
      e)
    : (C.baseState && ((C.baseState = !1), (s3 = !0)), (C.memoizedState = t));
}
function ep(C, e) {
  var t = l1;
  (l1 = t !== 0 && 4 > t ? t : 4), C(!0);
  var n = rC.transition;
  rC.transition = {};
  try {
    C(!1), e();
  } finally {
    (l1 = t), (rC.transition = n);
  }
}
function Ka() {
  return U3().memoizedState;
}
function tp(C, e, t) {
  var n = s5(C);
  if (
    ((t = {
      lane: n,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ga(C))
  )
    Qa(e, t);
  else if (((t = La(C, e, t, n)), t !== null)) {
    var r = t3();
    i2(t, C, n, r), Ya(t, e, n);
  }
}
function np(C, e, t) {
  var n = s5(C),
    r = { lane: n, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Ga(C)) Qa(e, r);
  else {
    var o = C.alternate;
    if (
      C.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = e.lastRenderedReducer), o !== null)
    )
      try {
        var i = e.lastRenderedState,
          s = o(i, t);
        if (((r.hasEagerState = !0), (r.eagerState = s), s2(s, i))) {
          var a = e.interleaved;
          a === null
            ? ((r.next = r), _t(e))
            : ((r.next = a.next), (a.next = r)),
            (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (t = La(C, e, r, n)),
      t !== null && ((r = t3()), i2(t, C, n, r), Ya(t, e, n));
  }
}
function Ga(C) {
  var e = C.alternate;
  return C === L1 || (e !== null && e === L1);
}
function Qa(C, e) {
  _4 = K6 = !0;
  var t = C.pending;
  t === null ? (e.next = e) : ((e.next = t.next), (t.next = e)),
    (C.pending = e);
}
function Ya(C, e, t) {
  if (t & 4194240) {
    var n = e.lanes;
    (n &= C.pendingLanes), (t |= n), (e.lanes = t), mt(C, t);
  }
}
var G6 = {
    readContext: V3,
    useCallback: K1,
    useContext: K1,
    useEffect: K1,
    useImperativeHandle: K1,
    useInsertionEffect: K1,
    useLayoutEffect: K1,
    useMemo: K1,
    useReducer: K1,
    useRef: K1,
    useState: K1,
    useDebugValue: K1,
    useDeferredValue: K1,
    useTransition: K1,
    useMutableSource: K1,
    useSyncExternalStore: K1,
    useId: K1,
    unstable_isNewReconciler: !1,
  },
  rp = {
    readContext: V3,
    useCallback: function (C, e) {
      return (u2().memoizedState = [C, e === void 0 ? null : e]), C;
    },
    useContext: V3,
    useEffect: $r,
    useImperativeHandle: function (C, e, t) {
      return (
        (t = t != null ? t.concat([C]) : null),
        m6(4194308, 4, Va.bind(null, e, C), t)
      );
    },
    useLayoutEffect: function (C, e) {
      return m6(4194308, 4, C, e);
    },
    useInsertionEffect: function (C, e) {
      return m6(4, 2, C, e);
    },
    useMemo: function (C, e) {
      var t = u2();
      return (
        (e = e === void 0 ? null : e), (C = C()), (t.memoizedState = [C, e]), C
      );
    },
    useReducer: function (C, e, t) {
      var n = u2();
      return (
        (e = t !== void 0 ? t(e) : e),
        (n.memoizedState = n.baseState = e),
        (C = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: C,
          lastRenderedState: e,
        }),
        (n.queue = C),
        (C = C.dispatch = tp.bind(null, L1, C)),
        [n.memoizedState, C]
      );
    },
    useRef: function (C) {
      var e = u2();
      return (C = { current: C }), (e.memoizedState = C);
    },
    useState: Ur,
    useDebugValue: Bt,
    useDeferredValue: function (C) {
      return (u2().memoizedState = C);
    },
    useTransition: function () {
      var C = Ur(!1),
        e = C[0];
      return (C = ep.bind(null, C[1])), (u2().memoizedState = C), [e, C];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (C, e, t) {
      var n = L1,
        r = u2();
      if (A1) {
        if (t === void 0) throw Error(j(407));
        t = t();
      } else {
        if (((t = e()), D1 === null)) throw Error(j(349));
        R5 & 30 || Ra(n, e, t);
      }
      r.memoizedState = t;
      var o = { value: t, getSnapshot: e };
      return (
        (r.queue = o),
        $r(Ha.bind(null, n, o, C), [C]),
        (n.flags |= 2048),
        C0(9, Na.bind(null, n, o, t, e), void 0, null),
        t
      );
    },
    useId: function () {
      var C = u2(),
        e = D1.identifierPrefix;
      if (A1) {
        var t = M2,
          n = O2;
        (t = (n & ~(1 << (32 - o2(n) - 1))).toString(32) + t),
          (e = ":" + e + "R" + t),
          (t = q4++),
          0 < t && (e += "H" + t.toString(32)),
          (e += ":");
      } else (t = Cp++), (e = ":" + e + "r" + t.toString(32) + ":");
      return (C.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  op = {
    readContext: V3,
    useCallback: $a,
    useContext: V3,
    useEffect: Dt,
    useImperativeHandle: Ua,
    useInsertionEffect: za,
    useLayoutEffect: Fa,
    useMemo: Za,
    useReducer: oC,
    useRef: Ba,
    useState: function () {
      return oC(J4);
    },
    useDebugValue: Bt,
    useDeferredValue: function (C) {
      var e = U3();
      return Wa(e, N1.memoizedState, C);
    },
    useTransition: function () {
      var C = oC(J4)[0],
        e = U3().memoizedState;
      return [C, e];
    },
    useMutableSource: Ma,
    useSyncExternalStore: Ia,
    useId: Ka,
    unstable_isNewReconciler: !1,
  },
  ip = {
    readContext: V3,
    useCallback: $a,
    useContext: V3,
    useEffect: Dt,
    useImperativeHandle: Ua,
    useInsertionEffect: za,
    useLayoutEffect: Fa,
    useMemo: Za,
    useReducer: iC,
    useRef: Ba,
    useState: function () {
      return iC(J4);
    },
    useDebugValue: Bt,
    useDeferredValue: function (C) {
      var e = U3();
      return N1 === null ? (e.memoizedState = C) : Wa(e, N1.memoizedState, C);
    },
    useTransition: function () {
      var C = iC(J4)[0],
        e = U3().memoizedState;
      return [C, e];
    },
    useMutableSource: Ma,
    useSyncExternalStore: Ia,
    useId: Ka,
    unstable_isNewReconciler: !1,
  };
function O8(C, e) {
  try {
    var t = "",
      n = e;
    do (t += Id(n)), (n = n.return);
    while (n);
    var r = t;
  } catch (o) {
    r =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: C, source: e, stack: r, digest: null };
}
function sC(C, e, t) {
  return { value: C, source: null, stack: null, digest: e ?? null };
}
function ue(C, e) {
  try {
    console.error(e.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var sp = typeof WeakMap == "function" ? WeakMap : Map;
function Xa(C, e, t) {
  (t = I2(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var n = e.value;
  return (
    (t.callback = function () {
      Y6 || ((Y6 = !0), (Se = n)), ue(C, e);
    }),
    t
  );
}
function qa(C, e, t) {
  (t = I2(-1, t)), (t.tag = 3);
  var n = C.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var r = e.value;
    (t.payload = function () {
      return n(r);
    }),
      (t.callback = function () {
        ue(C, e);
      });
  }
  var o = C.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (t.callback = function () {
        ue(C, e),
          typeof n != "function" &&
            (i5 === null ? (i5 = new Set([this])) : i5.add(this));
        var i = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    t
  );
}
function Zr(C, e, t) {
  var n = C.pingCache;
  if (n === null) {
    n = C.pingCache = new sp();
    var r = new Set();
    n.set(e, r);
  } else (r = n.get(e)), r === void 0 && ((r = new Set()), n.set(e, r));
  r.has(t) || (r.add(t), (C = xp.bind(null, C, e, t)), e.then(C, C));
}
function Wr(C) {
  do {
    var e;
    if (
      ((e = C.tag === 13) &&
        ((e = C.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return C;
    C = C.return;
  } while (C !== null);
  return null;
}
function Kr(C, e, t, n, r) {
  return C.mode & 1
    ? ((C.flags |= 65536), (C.lanes = r), C)
    : (C === e
        ? (C.flags |= 65536)
        : ((C.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((e = I2(-1, 1)), (e.tag = 2), o5(t, e, 1))),
          (t.lanes |= 1)),
      C);
}
var ap = z2.ReactCurrentOwner,
  s3 = !1;
function C3(C, e, t, n) {
  e.child = C === null ? _a(e, null, t, n) : k8(e, C.child, t, n);
}
function Gr(C, e, t, n, r) {
  t = t.render;
  var o = e.ref;
  return (
    y8(e, r),
    (n = Ht(C, e, t, n, o, r)),
    (t = jt()),
    C !== null && !s3
      ? ((e.updateQueue = C.updateQueue),
        (e.flags &= -2053),
        (C.lanes &= ~r),
        j2(C, e, r))
      : (A1 && t && wt(e), (e.flags |= 1), C3(C, e, n, r), e.child)
  );
}
function Qr(C, e, t, n, r) {
  if (C === null) {
    var o = t.type;
    return typeof o == "function" &&
      !Kt(o) &&
      o.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((e.tag = 15), (e.type = o), Ja(C, e, o, n, r))
      : ((C = S6(t.type, null, n, e, e.mode, r)),
        (C.ref = e.ref),
        (C.return = e),
        (e.child = C));
  }
  if (((o = C.child), !(C.lanes & r))) {
    var i = o.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : W4), t(i, n) && C.ref === e.ref)
    )
      return j2(C, e, r);
  }
  return (
    (e.flags |= 1),
    (C = a5(o, n)),
    (C.ref = e.ref),
    (C.return = e),
    (e.child = C)
  );
}
function Ja(C, e, t, n, r) {
  if (C !== null) {
    var o = C.memoizedProps;
    if (W4(o, n) && C.ref === e.ref)
      if (((s3 = !1), (e.pendingProps = n = o), (C.lanes & r) !== 0))
        C.flags & 131072 && (s3 = !0);
      else return (e.lanes = C.lanes), j2(C, e, r);
  }
  return ce(C, e, t, n, r);
}
function Cl(C, e, t) {
  var n = e.pendingProps,
    r = n.children,
    o = C !== null ? C.memoizedState : null;
  if (n.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        m1(d8, S3),
        (S3 |= t);
    else {
      if (!(t & 1073741824))
        return (
          (C = o !== null ? o.baseLanes | t : t),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: C,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          m1(d8, S3),
          (S3 |= C),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : t),
        m1(d8, S3),
        (S3 |= n);
    }
  else
    o !== null ? ((n = o.baseLanes | t), (e.memoizedState = null)) : (n = t),
      m1(d8, S3),
      (S3 |= n);
  return C3(C, e, r, t), e.child;
}
function el(C, e) {
  var t = e.ref;
  ((C === null && t !== null) || (C !== null && C.ref !== t)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function ce(C, e, t, n, r) {
  var o = l3(t) ? M5 : X1.current;
  return (
    (o = T8(e, o)),
    y8(e, r),
    (t = Ht(C, e, t, n, o, r)),
    (n = jt()),
    C !== null && !s3
      ? ((e.updateQueue = C.updateQueue),
        (e.flags &= -2053),
        (C.lanes &= ~r),
        j2(C, e, r))
      : (A1 && n && wt(e), (e.flags |= 1), C3(C, e, t, r), e.child)
  );
}
function Yr(C, e, t, n, r) {
  if (l3(t)) {
    var o = !0;
    z6(e);
  } else o = !1;
  if ((y8(e, r), e.stateNode === null))
    g6(C, e), Pa(e, t, n), le(e, t, n, r), (n = !0);
  else if (C === null) {
    var i = e.stateNode,
      s = e.memoizedProps;
    i.props = s;
    var a = i.context,
      l = t.contextType;
    typeof l == "object" && l !== null
      ? (l = V3(l))
      : ((l = l3(t) ? M5 : X1.current), (l = T8(e, l)));
    var c = t.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== n || a !== l) && Fr(e, i, n, l)),
      (W2 = !1);
    var d = e.memoizedState;
    (i.state = d),
      Z6(e, n, i, r),
      (a = e.memoizedState),
      s !== n || d !== a || a3.current || W2
        ? (typeof c == "function" && (ae(e, t, c, n), (a = e.memoizedState)),
          (s = W2 || zr(e, t, s, n, d, a, l))
            ? (f ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = n),
              (e.memoizedState = a)),
          (i.props = n),
          (i.state = a),
          (i.context = l),
          (n = s))
        : (typeof i.componentDidMount == "function" && (e.flags |= 4194308),
          (n = !1));
  } else {
    (i = e.stateNode),
      ba(C, e),
      (s = e.memoizedProps),
      (l = e.type === e.elementType ? s : t2(e.type, s)),
      (i.props = l),
      (f = e.pendingProps),
      (d = i.context),
      (a = t.contextType),
      typeof a == "object" && a !== null
        ? (a = V3(a))
        : ((a = l3(t) ? M5 : X1.current), (a = T8(e, a)));
    var S = t.getDerivedStateFromProps;
    (c =
      typeof S == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((s !== f || d !== a) && Fr(e, i, n, a)),
      (W2 = !1),
      (d = e.memoizedState),
      (i.state = d),
      Z6(e, n, i, r);
    var v = e.memoizedState;
    s !== f || d !== v || a3.current || W2
      ? (typeof S == "function" && (ae(e, t, S, n), (v = e.memoizedState)),
        (l = W2 || zr(e, t, l, n, d, v, a) || !1)
          ? (c ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(n, v, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(n, v, a)),
            typeof i.componentDidUpdate == "function" && (e.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (s === C.memoizedProps && d === C.memoizedState) ||
              (e.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (s === C.memoizedProps && d === C.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = n),
            (e.memoizedState = v)),
        (i.props = n),
        (i.state = v),
        (i.context = a),
        (n = l))
      : (typeof i.componentDidUpdate != "function" ||
          (s === C.memoizedProps && d === C.memoizedState) ||
          (e.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (s === C.memoizedProps && d === C.memoizedState) ||
          (e.flags |= 1024),
        (n = !1));
  }
  return de(C, e, t, n, o, r);
}
function de(C, e, t, n, r, o) {
  el(C, e);
  var i = (e.flags & 128) !== 0;
  if (!n && !i) return r && Nr(e, t, !1), j2(C, e, o);
  (n = e.stateNode), (ap.current = e);
  var s =
    i && typeof t.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (e.flags |= 1),
    C !== null && i
      ? ((e.child = k8(e, C.child, null, o)), (e.child = k8(e, null, s, o)))
      : C3(C, e, s, o),
    (e.memoizedState = n.state),
    r && Nr(e, t, !0),
    e.child
  );
}
function tl(C) {
  var e = C.stateNode;
  e.pendingContext
    ? Rr(C, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Rr(C, e.context, !1),
    Mt(C, e.containerInfo);
}
function Xr(C, e, t, n, r) {
  return P8(), bt(r), (e.flags |= 256), C3(C, e, t, n), e.child;
}
var fe = { dehydrated: null, treeContext: null, retryLane: 0 };
function pe(C) {
  return { baseLanes: C, cachePool: null, transitions: null };
}
function nl(C, e, t) {
  var n = e.pendingProps,
    r = w1.current,
    o = !1,
    i = (e.flags & 128) !== 0,
    s;
  if (
    ((s = i) ||
      (s = C !== null && C.memoizedState === null ? !1 : (r & 2) !== 0),
    s
      ? ((o = !0), (e.flags &= -129))
      : (C === null || C.memoizedState !== null) && (r |= 1),
    m1(w1, r & 1),
    C === null)
  )
    return (
      ie(e),
      (C = e.memoizedState),
      C !== null && ((C = C.dehydrated), C !== null)
        ? (e.mode & 1
            ? C.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((i = n.children),
          (C = n.fallback),
          o
            ? ((n = e.mode),
              (o = e.child),
              (i = { mode: "hidden", children: i }),
              !(n & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = M9(i, n, 0, null)),
              (C = _5(C, n, t, null)),
              (o.return = e),
              (C.return = e),
              (o.sibling = C),
              (e.child = o),
              (e.child.memoizedState = pe(t)),
              (e.memoizedState = fe),
              C)
            : zt(e, i))
    );
  if (((r = C.memoizedState), r !== null && ((s = r.dehydrated), s !== null)))
    return lp(C, e, i, n, s, r, t);
  if (o) {
    (o = n.fallback), (i = e.mode), (r = C.child), (s = r.sibling);
    var a = { mode: "hidden", children: n.children };
    return (
      !(i & 1) && e.child !== r
        ? ((n = e.child),
          (n.childLanes = 0),
          (n.pendingProps = a),
          (e.deletions = null))
        : ((n = a5(r, a)), (n.subtreeFlags = r.subtreeFlags & 14680064)),
      s !== null ? (o = a5(s, o)) : ((o = _5(o, i, t, null)), (o.flags |= 2)),
      (o.return = e),
      (n.return = e),
      (n.sibling = o),
      (e.child = n),
      (n = o),
      (o = e.child),
      (i = C.child.memoizedState),
      (i =
        i === null
          ? pe(t)
          : {
              baseLanes: i.baseLanes | t,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = C.childLanes & ~t),
      (e.memoizedState = fe),
      n
    );
  }
  return (
    (o = C.child),
    (C = o.sibling),
    (n = a5(o, { mode: "visible", children: n.children })),
    !(e.mode & 1) && (n.lanes = t),
    (n.return = e),
    (n.sibling = null),
    C !== null &&
      ((t = e.deletions),
      t === null ? ((e.deletions = [C]), (e.flags |= 16)) : t.push(C)),
    (e.child = n),
    (e.memoizedState = null),
    n
  );
}
function zt(C, e) {
  return (
    (e = M9({ mode: "visible", children: e }, C.mode, 0, null)),
    (e.return = C),
    (C.child = e)
  );
}
function K0(C, e, t, n) {
  return (
    n !== null && bt(n),
    k8(e, C.child, null, t),
    (C = zt(e, e.pendingProps.children)),
    (C.flags |= 2),
    (e.memoizedState = null),
    C
  );
}
function lp(C, e, t, n, r, o, i) {
  if (t)
    return e.flags & 256
      ? ((e.flags &= -257), (n = sC(Error(j(422)))), K0(C, e, i, n))
      : e.memoizedState !== null
      ? ((e.child = C.child), (e.flags |= 128), null)
      : ((o = n.fallback),
        (r = e.mode),
        (n = M9({ mode: "visible", children: n.children }, r, 0, null)),
        (o = _5(o, r, i, null)),
        (o.flags |= 2),
        (n.return = e),
        (o.return = e),
        (n.sibling = o),
        (e.child = n),
        e.mode & 1 && k8(e, C.child, null, i),
        (e.child.memoizedState = pe(i)),
        (e.memoizedState = fe),
        o);
  if (!(e.mode & 1)) return K0(C, e, i, null);
  if (r.data === "$!") {
    if (((n = r.nextSibling && r.nextSibling.dataset), n)) var s = n.dgst;
    return (n = s), (o = Error(j(419))), (n = sC(o, n)), K0(C, e, i, n);
  }
  if (((s = (i & C.childLanes) !== 0), s3 || s)) {
    if (((n = D1), n !== null)) {
      switch (i & -i) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (n.suspendedLanes | i) ? 0 : r),
        r !== 0 &&
          r !== o.retryLane &&
          ((o.retryLane = r), H2(C, r), i2(n, C, r, -1));
    }
    return Wt(), (n = sC(Error(j(421)))), K0(C, e, i, n);
  }
  return r.data === "$?"
    ? ((e.flags |= 128),
      (e.child = C.child),
      (e = Ap.bind(null, C)),
      (r._reactRetry = e),
      null)
    : ((C = o.treeContext),
      (A3 = r5(r.nextSibling)),
      (E3 = e),
      (A1 = !0),
      (r2 = null),
      C !== null &&
        ((H3[j3++] = O2),
        (H3[j3++] = M2),
        (H3[j3++] = I5),
        (O2 = C.id),
        (M2 = C.overflow),
        (I5 = e)),
      (e = zt(e, n.children)),
      (e.flags |= 4096),
      e);
}
function qr(C, e, t) {
  C.lanes |= e;
  var n = C.alternate;
  n !== null && (n.lanes |= e), se(C.return, e, t);
}
function aC(C, e, t, n, r) {
  var o = C.memoizedState;
  o === null
    ? (C.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: t,
        tailMode: r,
      })
    : ((o.isBackwards = e),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = n),
      (o.tail = t),
      (o.tailMode = r));
}
function rl(C, e, t) {
  var n = e.pendingProps,
    r = n.revealOrder,
    o = n.tail;
  if ((C3(C, e, n.children, t), (n = w1.current), n & 2))
    (n = (n & 1) | 2), (e.flags |= 128);
  else {
    if (C !== null && C.flags & 128)
      C: for (C = e.child; C !== null; ) {
        if (C.tag === 13) C.memoizedState !== null && qr(C, t, e);
        else if (C.tag === 19) qr(C, t, e);
        else if (C.child !== null) {
          (C.child.return = C), (C = C.child);
          continue;
        }
        if (C === e) break C;
        for (; C.sibling === null; ) {
          if (C.return === null || C.return === e) break C;
          C = C.return;
        }
        (C.sibling.return = C.return), (C = C.sibling);
      }
    n &= 1;
  }
  if ((m1(w1, n), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (r) {
      case "forwards":
        for (t = e.child, r = null; t !== null; )
          (C = t.alternate),
            C !== null && W6(C) === null && (r = t),
            (t = t.sibling);
        (t = r),
          t === null
            ? ((r = e.child), (e.child = null))
            : ((r = t.sibling), (t.sibling = null)),
          aC(e, !1, r, t, o);
        break;
      case "backwards":
        for (t = null, r = e.child, e.child = null; r !== null; ) {
          if (((C = r.alternate), C !== null && W6(C) === null)) {
            e.child = r;
            break;
          }
          (C = r.sibling), (r.sibling = t), (t = r), (r = C);
        }
        aC(e, !0, t, null, o);
        break;
      case "together":
        aC(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function g6(C, e) {
  !(e.mode & 1) &&
    C !== null &&
    ((C.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function j2(C, e, t) {
  if (
    (C !== null && (e.dependencies = C.dependencies),
    (N5 |= e.lanes),
    !(t & e.childLanes))
  )
    return null;
  if (C !== null && e.child !== C.child) throw Error(j(153));
  if (e.child !== null) {
    for (
      C = e.child, t = a5(C, C.pendingProps), e.child = t, t.return = e;
      C.sibling !== null;

    )
      (C = C.sibling), (t = t.sibling = a5(C, C.pendingProps)), (t.return = e);
    t.sibling = null;
  }
  return e.child;
}
function up(C, e, t) {
  switch (e.tag) {
    case 3:
      tl(e), P8();
      break;
    case 5:
      Oa(e);
      break;
    case 1:
      l3(e.type) && z6(e);
      break;
    case 4:
      Mt(e, e.stateNode.containerInfo);
      break;
    case 10:
      var n = e.type._context,
        r = e.memoizedProps.value;
      m1(U6, n._currentValue), (n._currentValue = r);
      break;
    case 13:
      if (((n = e.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (m1(w1, w1.current & 1), (e.flags |= 128), null)
          : t & e.child.childLanes
          ? nl(C, e, t)
          : (m1(w1, w1.current & 1),
            (C = j2(C, e, t)),
            C !== null ? C.sibling : null);
      m1(w1, w1.current & 1);
      break;
    case 19:
      if (((n = (t & e.childLanes) !== 0), C.flags & 128)) {
        if (n) return rl(C, e, t);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null &&
          ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        m1(w1, w1.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Cl(C, e, t);
  }
  return j2(C, e, t);
}
var ol, he, il, sl;
ol = function (C, e) {
  for (var t = e.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) C.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
he = function () {};
il = function (C, e, t, n) {
  var r = C.memoizedProps;
  if (r !== n) {
    (C = e.stateNode), b5(v2.current);
    var o = null;
    switch (t) {
      case "input":
        (r = jC(C, r)), (n = jC(C, n)), (o = []);
        break;
      case "select":
        (r = b1({}, r, { value: void 0 })),
          (n = b1({}, n, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (r = zC(C, r)), (n = zC(C, n)), (o = []);
        break;
      default:
        typeof r.onClick != "function" &&
          typeof n.onClick == "function" &&
          (C.onclick = D6);
    }
    VC(t, n);
    var i;
    t = null;
    for (l in r)
      if (!n.hasOwnProperty(l) && r.hasOwnProperty(l) && r[l] != null)
        if (l === "style") {
          var s = r[l];
          for (i in s) s.hasOwnProperty(i) && (t || (t = {}), (t[i] = ""));
        } else
          l !== "dangerouslySetInnerHTML" &&
            l !== "children" &&
            l !== "suppressContentEditableWarning" &&
            l !== "suppressHydrationWarning" &&
            l !== "autoFocus" &&
            (B4.hasOwnProperty(l)
              ? o || (o = [])
              : (o = o || []).push(l, null));
    for (l in n) {
      var a = n[l];
      if (
        ((s = r != null ? r[l] : void 0),
        n.hasOwnProperty(l) && a !== s && (a != null || s != null))
      )
        if (l === "style")
          if (s) {
            for (i in s)
              !s.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (t || (t = {}), (t[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                s[i] !== a[i] &&
                (t || (t = {}), (t[i] = a[i]));
          } else t || (o || (o = []), o.push(l, t)), (t = a);
        else
          l === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(l, a))
            : l === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(l, "" + a)
            : l !== "suppressContentEditableWarning" &&
              l !== "suppressHydrationWarning" &&
              (B4.hasOwnProperty(l)
                ? (a != null && l === "onScroll" && g1("scroll", C),
                  o || s === a || (o = []))
                : (o = o || []).push(l, a));
    }
    t && (o = o || []).push("style", t);
    var l = o;
    (e.updateQueue = l) && (e.flags |= 4);
  }
};
sl = function (C, e, t, n) {
  t !== n && (e.flags |= 4);
};
function c4(C, e) {
  if (!A1)
    switch (C.tailMode) {
      case "hidden":
        e = C.tail;
        for (var t = null; e !== null; )
          e.alternate !== null && (t = e), (e = e.sibling);
        t === null ? (C.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = C.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null
          ? e || C.tail === null
            ? (C.tail = null)
            : (C.tail.sibling = null)
          : (n.sibling = null);
    }
}
function G1(C) {
  var e = C.alternate !== null && C.alternate.child === C.child,
    t = 0,
    n = 0;
  if (e)
    for (var r = C.child; r !== null; )
      (t |= r.lanes | r.childLanes),
        (n |= r.subtreeFlags & 14680064),
        (n |= r.flags & 14680064),
        (r.return = C),
        (r = r.sibling);
  else
    for (r = C.child; r !== null; )
      (t |= r.lanes | r.childLanes),
        (n |= r.subtreeFlags),
        (n |= r.flags),
        (r.return = C),
        (r = r.sibling);
  return (C.subtreeFlags |= n), (C.childLanes = t), e;
}
function cp(C, e, t) {
  var n = e.pendingProps;
  switch ((Lt(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return G1(e), null;
    case 1:
      return l3(e.type) && B6(), G1(e), null;
    case 3:
      return (
        (n = e.stateNode),
        _8(),
        v1(a3),
        v1(X1),
        Rt(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (C === null || C.child === null) &&
          (Z0(e)
            ? (e.flags |= 4)
            : C === null ||
              (C.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), r2 !== null && (Ee(r2), (r2 = null)))),
        he(C, e),
        G1(e),
        null
      );
    case 5:
      It(e);
      var r = b5(X4.current);
      if (((t = e.type), C !== null && e.stateNode != null))
        il(C, e, t, n, r),
          C.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!n) {
          if (e.stateNode === null) throw Error(j(166));
          return G1(e), null;
        }
        if (((C = b5(v2.current)), Z0(e))) {
          (n = e.stateNode), (t = e.type);
          var o = e.memoizedProps;
          switch (((n[f2] = e), (n[Q4] = o), (C = (e.mode & 1) !== 0), t)) {
            case "dialog":
              g1("cancel", n), g1("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              g1("load", n);
              break;
            case "video":
            case "audio":
              for (r = 0; r < E4.length; r++) g1(E4[r], n);
              break;
            case "source":
              g1("error", n);
              break;
            case "img":
            case "image":
            case "link":
              g1("error", n), g1("load", n);
              break;
            case "details":
              g1("toggle", n);
              break;
            case "input":
              sr(n, o), g1("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                g1("invalid", n);
              break;
            case "textarea":
              lr(n, o), g1("invalid", n);
          }
          VC(t, o), (r = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var s = o[i];
              i === "children"
                ? typeof s == "string"
                  ? n.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      $0(n.textContent, s, C),
                    (r = ["children", s]))
                  : typeof s == "number" &&
                    n.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      $0(n.textContent, s, C),
                    (r = ["children", "" + s]))
                : B4.hasOwnProperty(i) &&
                  s != null &&
                  i === "onScroll" &&
                  g1("scroll", n);
            }
          switch (t) {
            case "input":
              H0(n), ar(n, o, !0);
              break;
            case "textarea":
              H0(n), ur(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = D6);
          }
          (n = r), (e.updateQueue = n), n !== null && (e.flags |= 4);
        } else {
          (i = r.nodeType === 9 ? r : r.ownerDocument),
            C === "http://www.w3.org/1999/xhtml" && (C = Rs(t)),
            C === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((C = i.createElement("div")),
                  (C.innerHTML = "<script></script>"),
                  (C = C.removeChild(C.firstChild)))
                : typeof n.is == "string"
                ? (C = i.createElement(t, { is: n.is }))
                : ((C = i.createElement(t)),
                  t === "select" &&
                    ((i = C),
                    n.multiple
                      ? (i.multiple = !0)
                      : n.size && (i.size = n.size)))
              : (C = i.createElementNS(C, t)),
            (C[f2] = e),
            (C[Q4] = n),
            ol(C, e, !1, !1),
            (e.stateNode = C);
          C: {
            switch (((i = UC(t, n)), t)) {
              case "dialog":
                g1("cancel", C), g1("close", C), (r = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                g1("load", C), (r = n);
                break;
              case "video":
              case "audio":
                for (r = 0; r < E4.length; r++) g1(E4[r], C);
                r = n;
                break;
              case "source":
                g1("error", C), (r = n);
                break;
              case "img":
              case "image":
              case "link":
                g1("error", C), g1("load", C), (r = n);
                break;
              case "details":
                g1("toggle", C), (r = n);
                break;
              case "input":
                sr(C, n), (r = jC(C, n)), g1("invalid", C);
                break;
              case "option":
                r = n;
                break;
              case "select":
                (C._wrapperState = { wasMultiple: !!n.multiple }),
                  (r = b1({}, n, { value: void 0 })),
                  g1("invalid", C);
                break;
              case "textarea":
                lr(C, n), (r = zC(C, n)), g1("invalid", C);
                break;
              default:
                r = n;
            }
            VC(t, r), (s = r);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? js(C, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Ns(C, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (t !== "textarea" || a !== "") && z4(C, a)
                    : typeof a == "number" && z4(C, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (B4.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && g1("scroll", C)
                      : a != null && ut(C, o, a, i));
              }
            switch (t) {
              case "input":
                H0(C), ar(C, n, !1);
                break;
              case "textarea":
                H0(C), ur(C);
                break;
              case "option":
                n.value != null && C.setAttribute("value", "" + l5(n.value));
                break;
              case "select":
                (C.multiple = !!n.multiple),
                  (o = n.value),
                  o != null
                    ? h8(C, !!n.multiple, o, !1)
                    : n.defaultValue != null &&
                      h8(C, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof r.onClick == "function" && (C.onclick = D6);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break C;
              case "img":
                n = !0;
                break C;
              default:
                n = !1;
            }
          }
          n && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return G1(e), null;
    case 6:
      if (C && e.stateNode != null) sl(C, e, C.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null) throw Error(j(166));
        if (((t = b5(X4.current)), b5(v2.current), Z0(e))) {
          if (
            ((n = e.stateNode),
            (t = e.memoizedProps),
            (n[f2] = e),
            (o = n.nodeValue !== t) && ((C = E3), C !== null))
          )
            switch (C.tag) {
              case 3:
                $0(n.nodeValue, t, (C.mode & 1) !== 0);
                break;
              case 5:
                C.memoizedProps.suppressHydrationWarning !== !0 &&
                  $0(n.nodeValue, t, (C.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          (n = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(n)),
            (n[f2] = e),
            (e.stateNode = n);
      }
      return G1(e), null;
    case 13:
      if (
        (v1(w1),
        (n = e.memoizedState),
        C === null ||
          (C.memoizedState !== null && C.memoizedState.dehydrated !== null))
      ) {
        if (A1 && A3 !== null && e.mode & 1 && !(e.flags & 128))
          wa(), P8(), (e.flags |= 98560), (o = !1);
        else if (((o = Z0(e)), n !== null && n.dehydrated !== null)) {
          if (C === null) {
            if (!o) throw Error(j(318));
            if (
              ((o = e.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(j(317));
            o[f2] = e;
          } else
            P8(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          G1(e), (o = !1);
        } else r2 !== null && (Ee(r2), (r2 = null)), (o = !0);
        if (!o) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = t), e)
        : ((n = n !== null),
          n !== (C !== null && C.memoizedState !== null) &&
            n &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (C === null || w1.current & 1 ? H1 === 0 && (H1 = 3) : Wt())),
          e.updateQueue !== null && (e.flags |= 4),
          G1(e),
          null);
    case 4:
      return (
        _8(), he(C, e), C === null && K4(e.stateNode.containerInfo), G1(e), null
      );
    case 10:
      return kt(e.type._context), G1(e), null;
    case 17:
      return l3(e.type) && B6(), G1(e), null;
    case 19:
      if ((v1(w1), (o = e.memoizedState), o === null)) return G1(e), null;
      if (((n = (e.flags & 128) !== 0), (i = o.rendering), i === null))
        if (n) c4(o, !1);
        else {
          if (H1 !== 0 || (C !== null && C.flags & 128))
            for (C = e.child; C !== null; ) {
              if (((i = W6(C)), i !== null)) {
                for (
                  e.flags |= 128,
                    c4(o, !1),
                    n = i.updateQueue,
                    n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    n = t,
                    t = e.child;
                  t !== null;

                )
                  (o = t),
                    (C = n),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = C),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (C = i.dependencies),
                        (o.dependencies =
                          C === null
                            ? null
                            : {
                                lanes: C.lanes,
                                firstContext: C.firstContext,
                              })),
                    (t = t.sibling);
                return m1(w1, (w1.current & 1) | 2), e.child;
              }
              C = C.sibling;
            }
          o.tail !== null &&
            _1() > M8 &&
            ((e.flags |= 128), (n = !0), c4(o, !1), (e.lanes = 4194304));
        }
      else {
        if (!n)
          if (((C = W6(i)), C !== null)) {
            if (
              ((e.flags |= 128),
              (n = !0),
              (t = C.updateQueue),
              t !== null && ((e.updateQueue = t), (e.flags |= 4)),
              c4(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !A1)
            )
              return G1(e), null;
          } else
            2 * _1() - o.renderingStartTime > M8 &&
              t !== 1073741824 &&
              ((e.flags |= 128), (n = !0), c4(o, !1), (e.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = e.child), (e.child = i))
          : ((t = o.last),
            t !== null ? (t.sibling = i) : (e.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((e = o.tail),
          (o.rendering = e),
          (o.tail = e.sibling),
          (o.renderingStartTime = _1()),
          (e.sibling = null),
          (t = w1.current),
          m1(w1, n ? (t & 1) | 2 : t & 1),
          e)
        : (G1(e), null);
    case 22:
    case 23:
      return (
        Zt(),
        (n = e.memoizedState !== null),
        C !== null && (C.memoizedState !== null) !== n && (e.flags |= 8192),
        n && e.mode & 1
          ? S3 & 1073741824 && (G1(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : G1(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, e.tag));
}
function dp(C, e) {
  switch ((Lt(e), e.tag)) {
    case 1:
      return (
        l3(e.type) && B6(),
        (C = e.flags),
        C & 65536 ? ((e.flags = (C & -65537) | 128), e) : null
      );
    case 3:
      return (
        _8(),
        v1(a3),
        v1(X1),
        Rt(),
        (C = e.flags),
        C & 65536 && !(C & 128) ? ((e.flags = (C & -65537) | 128), e) : null
      );
    case 5:
      return It(e), null;
    case 13:
      if (
        (v1(w1), (C = e.memoizedState), C !== null && C.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(j(340));
        P8();
      }
      return (
        (C = e.flags), C & 65536 ? ((e.flags = (C & -65537) | 128), e) : null
      );
    case 19:
      return v1(w1), null;
    case 4:
      return _8(), null;
    case 10:
      return kt(e.type._context), null;
    case 22:
    case 23:
      return Zt(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var G0 = !1,
  Y1 = !1,
  fp = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function c8(C, e) {
  var t = C.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (n) {
        k1(C, e, n);
      }
    else t.current = null;
}
function me(C, e, t) {
  try {
    t();
  } catch (n) {
    k1(C, e, n);
  }
}
var Jr = !1;
function pp(C, e) {
  if (((JC = N6), (C = ca()), Et(C))) {
    if ("selectionStart" in C)
      var t = { start: C.selectionStart, end: C.selectionEnd };
    else
      C: {
        t = ((t = C.ownerDocument) && t.defaultView) || window;
        var n = t.getSelection && t.getSelection();
        if (n && n.rangeCount !== 0) {
          t = n.anchorNode;
          var r = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break C;
          }
          var i = 0,
            s = -1,
            a = -1,
            l = 0,
            c = 0,
            f = C,
            d = null;
          e: for (;;) {
            for (
              var S;
              f !== t || (r !== 0 && f.nodeType !== 3) || (s = i + r),
                f !== o || (n !== 0 && f.nodeType !== 3) || (a = i + n),
                f.nodeType === 3 && (i += f.nodeValue.length),
                (S = f.firstChild) !== null;

            )
              (d = f), (f = S);
            for (;;) {
              if (f === C) break e;
              if (
                (d === t && ++l === r && (s = i),
                d === o && ++c === n && (a = i),
                (S = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = S;
          }
          t = s === -1 || a === -1 ? null : { start: s, end: a };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (Ce = { focusedElem: C, selectionRange: t }, N6 = !1, V = e; V !== null; )
    if (((e = V), (C = e.child), (e.subtreeFlags & 1028) !== 0 && C !== null))
      (C.return = e), (V = C);
    else
      for (; V !== null; ) {
        e = V;
        try {
          var v = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    w = v.memoizedState,
                    h = e.stateNode,
                    p = h.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? g : t2(e.type, g),
                      w
                    );
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var m = e.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (y) {
          k1(e, e.return, y);
        }
        if (((C = e.sibling), C !== null)) {
          (C.return = e.return), (V = C);
          break;
        }
        V = e.return;
      }
  return (v = Jr), (Jr = !1), v;
}
function O4(C, e, t) {
  var n = e.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var r = (n = n.next);
    do {
      if ((r.tag & C) === C) {
        var o = r.destroy;
        (r.destroy = void 0), o !== void 0 && me(e, t, o);
      }
      r = r.next;
    } while (r !== n);
  }
}
function _9(C, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var t = (e = e.next);
    do {
      if ((t.tag & C) === C) {
        var n = t.create;
        t.destroy = n();
      }
      t = t.next;
    } while (t !== e);
  }
}
function ge(C) {
  var e = C.ref;
  if (e !== null) {
    var t = C.stateNode;
    switch (C.tag) {
      case 5:
        C = t;
        break;
      default:
        C = t;
    }
    typeof e == "function" ? e(C) : (e.current = C);
  }
}
function al(C) {
  var e = C.alternate;
  e !== null && ((C.alternate = null), al(e)),
    (C.child = null),
    (C.deletions = null),
    (C.sibling = null),
    C.tag === 5 &&
      ((e = C.stateNode),
      e !== null &&
        (delete e[f2], delete e[Q4], delete e[ne], delete e[Yf], delete e[Xf])),
    (C.stateNode = null),
    (C.return = null),
    (C.dependencies = null),
    (C.memoizedProps = null),
    (C.memoizedState = null),
    (C.pendingProps = null),
    (C.stateNode = null),
    (C.updateQueue = null);
}
function ll(C) {
  return C.tag === 5 || C.tag === 3 || C.tag === 4;
}
function Co(C) {
  C: for (;;) {
    for (; C.sibling === null; ) {
      if (C.return === null || ll(C.return)) return null;
      C = C.return;
    }
    for (
      C.sibling.return = C.return, C = C.sibling;
      C.tag !== 5 && C.tag !== 6 && C.tag !== 18;

    ) {
      if (C.flags & 2 || C.child === null || C.tag === 4) continue C;
      (C.child.return = C), (C = C.child);
    }
    if (!(C.flags & 2)) return C.stateNode;
  }
}
function ve(C, e, t) {
  var n = C.tag;
  if (n === 5 || n === 6)
    (C = C.stateNode),
      e
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(C, e)
          : t.insertBefore(C, e)
        : (t.nodeType === 8
            ? ((e = t.parentNode), e.insertBefore(C, t))
            : ((e = t), e.appendChild(C)),
          (t = t._reactRootContainer),
          t != null || e.onclick !== null || (e.onclick = D6));
  else if (n !== 4 && ((C = C.child), C !== null))
    for (ve(C, e, t), C = C.sibling; C !== null; ) ve(C, e, t), (C = C.sibling);
}
function ye(C, e, t) {
  var n = C.tag;
  if (n === 5 || n === 6)
    (C = C.stateNode), e ? t.insertBefore(C, e) : t.appendChild(C);
  else if (n !== 4 && ((C = C.child), C !== null))
    for (ye(C, e, t), C = C.sibling; C !== null; ) ye(C, e, t), (C = C.sibling);
}
var V1 = null,
  n2 = !1;
function $2(C, e, t) {
  for (t = t.child; t !== null; ) ul(C, e, t), (t = t.sibling);
}
function ul(C, e, t) {
  if (g2 && typeof g2.onCommitFiberUnmount == "function")
    try {
      g2.onCommitFiberUnmount(A9, t);
    } catch {}
  switch (t.tag) {
    case 5:
      Y1 || c8(t, e);
    case 6:
      var n = V1,
        r = n2;
      (V1 = null),
        $2(C, e, t),
        (V1 = n),
        (n2 = r),
        V1 !== null &&
          (n2
            ? ((C = V1),
              (t = t.stateNode),
              C.nodeType === 8 ? C.parentNode.removeChild(t) : C.removeChild(t))
            : V1.removeChild(t.stateNode));
      break;
    case 18:
      V1 !== null &&
        (n2
          ? ((C = V1),
            (t = t.stateNode),
            C.nodeType === 8
              ? eC(C.parentNode, t)
              : C.nodeType === 1 && eC(C, t),
            $4(C))
          : eC(V1, t.stateNode));
      break;
    case 4:
      (n = V1),
        (r = n2),
        (V1 = t.stateNode.containerInfo),
        (n2 = !0),
        $2(C, e, t),
        (V1 = n),
        (n2 = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Y1 &&
        ((n = t.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        r = n = n.next;
        do {
          var o = r,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && me(t, e, i),
            (r = r.next);
        } while (r !== n);
      }
      $2(C, e, t);
      break;
    case 1:
      if (
        !Y1 &&
        (c8(t, e),
        (n = t.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = t.memoizedProps),
            (n.state = t.memoizedState),
            n.componentWillUnmount();
        } catch (s) {
          k1(t, e, s);
        }
      $2(C, e, t);
      break;
    case 21:
      $2(C, e, t);
      break;
    case 22:
      t.mode & 1
        ? ((Y1 = (n = Y1) || t.memoizedState !== null), $2(C, e, t), (Y1 = n))
        : $2(C, e, t);
      break;
    default:
      $2(C, e, t);
  }
}
function eo(C) {
  var e = C.updateQueue;
  if (e !== null) {
    C.updateQueue = null;
    var t = C.stateNode;
    t === null && (t = C.stateNode = new fp()),
      e.forEach(function (n) {
        var r = Ep.bind(null, C, n);
        t.has(n) || (t.add(n), n.then(r, r));
      });
  }
}
function e2(C, e) {
  var t = e.deletions;
  if (t !== null)
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      try {
        var o = C,
          i = e,
          s = i;
        C: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (V1 = s.stateNode), (n2 = !1);
              break C;
            case 3:
              (V1 = s.stateNode.containerInfo), (n2 = !0);
              break C;
            case 4:
              (V1 = s.stateNode.containerInfo), (n2 = !0);
              break C;
          }
          s = s.return;
        }
        if (V1 === null) throw Error(j(160));
        ul(o, i, r), (V1 = null), (n2 = !1);
        var a = r.alternate;
        a !== null && (a.return = null), (r.return = null);
      } catch (l) {
        k1(r, e, l);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) cl(e, C), (e = e.sibling);
}
function cl(C, e) {
  var t = C.alternate,
    n = C.flags;
  switch (C.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((e2(e, C), l2(C), n & 4)) {
        try {
          O4(3, C, C.return), _9(3, C);
        } catch (g) {
          k1(C, C.return, g);
        }
        try {
          O4(5, C, C.return);
        } catch (g) {
          k1(C, C.return, g);
        }
      }
      break;
    case 1:
      e2(e, C), l2(C), n & 512 && t !== null && c8(t, t.return);
      break;
    case 5:
      if (
        (e2(e, C),
        l2(C),
        n & 512 && t !== null && c8(t, t.return),
        C.flags & 32)
      ) {
        var r = C.stateNode;
        try {
          z4(r, "");
        } catch (g) {
          k1(C, C.return, g);
        }
      }
      if (n & 4 && ((r = C.stateNode), r != null)) {
        var o = C.memoizedProps,
          i = t !== null ? t.memoizedProps : o,
          s = C.type,
          a = C.updateQueue;
        if (((C.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Ms(r, o),
              UC(s, i);
            var l = UC(s, o);
            for (i = 0; i < a.length; i += 2) {
              var c = a[i],
                f = a[i + 1];
              c === "style"
                ? js(r, f)
                : c === "dangerouslySetInnerHTML"
                ? Ns(r, f)
                : c === "children"
                ? z4(r, f)
                : ut(r, c, f, l);
            }
            switch (s) {
              case "input":
                DC(r, o);
                break;
              case "textarea":
                Is(r, o);
                break;
              case "select":
                var d = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? h8(r, !!o.multiple, S, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? h8(r, !!o.multiple, o.defaultValue, !0)
                      : h8(r, !!o.multiple, o.multiple ? [] : "", !1));
            }
            r[Q4] = o;
          } catch (g) {
            k1(C, C.return, g);
          }
      }
      break;
    case 6:
      if ((e2(e, C), l2(C), n & 4)) {
        if (C.stateNode === null) throw Error(j(162));
        (r = C.stateNode), (o = C.memoizedProps);
        try {
          r.nodeValue = o;
        } catch (g) {
          k1(C, C.return, g);
        }
      }
      break;
    case 3:
      if (
        (e2(e, C), l2(C), n & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          $4(e.containerInfo);
        } catch (g) {
          k1(C, C.return, g);
        }
      break;
    case 4:
      e2(e, C), l2(C);
      break;
    case 13:
      e2(e, C),
        l2(C),
        (r = C.child),
        r.flags & 8192 &&
          ((o = r.memoizedState !== null),
          (r.stateNode.isHidden = o),
          !o ||
            (r.alternate !== null && r.alternate.memoizedState !== null) ||
            (Ut = _1())),
        n & 4 && eo(C);
      break;
    case 22:
      if (
        ((c = t !== null && t.memoizedState !== null),
        C.mode & 1 ? ((Y1 = (l = Y1) || c), e2(e, C), (Y1 = l)) : e2(e, C),
        l2(C),
        n & 8192)
      ) {
        if (
          ((l = C.memoizedState !== null),
          (C.stateNode.isHidden = l) && !c && C.mode & 1)
        )
          for (V = C, c = C.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (S = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  O4(4, d, d.return);
                  break;
                case 1:
                  c8(d, d.return);
                  var v = d.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (n = d), (t = d.return);
                    try {
                      (e = n),
                        (v.props = e.memoizedProps),
                        (v.state = e.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      k1(n, t, g);
                    }
                  }
                  break;
                case 5:
                  c8(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    no(f);
                    continue;
                  }
              }
              S !== null ? ((S.return = d), (V = S)) : no(f);
            }
            c = c.sibling;
          }
        C: for (c = null, f = C; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (r = f.stateNode),
                  l
                    ? ((o = r.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Hs("display", i)));
              } catch (g) {
                k1(C, C.return, g);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = l ? "" : f.memoizedProps;
              } catch (g) {
                k1(C, C.return, g);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === C) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === C) break C;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === C) break C;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      e2(e, C), l2(C), n & 4 && eo(C);
      break;
    case 21:
      break;
    default:
      e2(e, C), l2(C);
  }
}
function l2(C) {
  var e = C.flags;
  if (e & 2) {
    try {
      C: {
        for (var t = C.return; t !== null; ) {
          if (ll(t)) {
            var n = t;
            break C;
          }
          t = t.return;
        }
        throw Error(j(160));
      }
      switch (n.tag) {
        case 5:
          var r = n.stateNode;
          n.flags & 32 && (z4(r, ""), (n.flags &= -33));
          var o = Co(C);
          ye(C, o, r);
          break;
        case 3:
        case 4:
          var i = n.stateNode.containerInfo,
            s = Co(C);
          ve(C, s, i);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      k1(C, C.return, a);
    }
    C.flags &= -3;
  }
  e & 4096 && (C.flags &= -4097);
}
function hp(C, e, t) {
  (V = C), dl(C);
}
function dl(C, e, t) {
  for (var n = (C.mode & 1) !== 0; V !== null; ) {
    var r = V,
      o = r.child;
    if (r.tag === 22 && n) {
      var i = r.memoizedState !== null || G0;
      if (!i) {
        var s = r.alternate,
          a = (s !== null && s.memoizedState !== null) || Y1;
        s = G0;
        var l = Y1;
        if (((G0 = i), (Y1 = a) && !l))
          for (V = r; V !== null; )
            (i = V),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ro(r)
                : a !== null
                ? ((a.return = i), (V = a))
                : ro(r);
        for (; o !== null; ) (V = o), dl(o), (o = o.sibling);
        (V = r), (G0 = s), (Y1 = l);
      }
      to(C);
    } else
      r.subtreeFlags & 8772 && o !== null ? ((o.return = r), (V = o)) : to(C);
  }
}
function to(C) {
  for (; V !== null; ) {
    var e = V;
    if (e.flags & 8772) {
      var t = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              Y1 || _9(5, e);
              break;
            case 1:
              var n = e.stateNode;
              if (e.flags & 4 && !Y1)
                if (t === null) n.componentDidMount();
                else {
                  var r =
                    e.elementType === e.type
                      ? t.memoizedProps
                      : t2(e.type, t.memoizedProps);
                  n.componentDidUpdate(
                    r,
                    t.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = e.updateQueue;
              o !== null && Br(e, o, n);
              break;
            case 3:
              var i = e.updateQueue;
              if (i !== null) {
                if (((t = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      t = e.child.stateNode;
                      break;
                    case 1:
                      t = e.child.stateNode;
                  }
                Br(e, i, t);
              }
              break;
            case 5:
              var s = e.stateNode;
              if (t === null && e.flags & 4) {
                t = s;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && t.focus();
                    break;
                  case "img":
                    a.src && (t.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var l = e.alternate;
                if (l !== null) {
                  var c = l.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && $4(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        Y1 || (e.flags & 512 && ge(e));
      } catch (d) {
        k1(e, e.return, d);
      }
    }
    if (e === C) {
      V = null;
      break;
    }
    if (((t = e.sibling), t !== null)) {
      (t.return = e.return), (V = t);
      break;
    }
    V = e.return;
  }
}
function no(C) {
  for (; V !== null; ) {
    var e = V;
    if (e === C) {
      V = null;
      break;
    }
    var t = e.sibling;
    if (t !== null) {
      (t.return = e.return), (V = t);
      break;
    }
    V = e.return;
  }
}
function ro(C) {
  for (; V !== null; ) {
    var e = V;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var t = e.return;
          try {
            _9(4, e);
          } catch (a) {
            k1(e, t, a);
          }
          break;
        case 1:
          var n = e.stateNode;
          if (typeof n.componentDidMount == "function") {
            var r = e.return;
            try {
              n.componentDidMount();
            } catch (a) {
              k1(e, r, a);
            }
          }
          var o = e.return;
          try {
            ge(e);
          } catch (a) {
            k1(e, o, a);
          }
          break;
        case 5:
          var i = e.return;
          try {
            ge(e);
          } catch (a) {
            k1(e, i, a);
          }
      }
    } catch (a) {
      k1(e, e.return, a);
    }
    if (e === C) {
      V = null;
      break;
    }
    var s = e.sibling;
    if (s !== null) {
      (s.return = e.return), (V = s);
      break;
    }
    V = e.return;
  }
}
var mp = Math.ceil,
  Q6 = z2.ReactCurrentDispatcher,
  Ft = z2.ReactCurrentOwner,
  z3 = z2.ReactCurrentBatchConfig,
  t1 = 0,
  D1 = null,
  R1 = null,
  $1 = 0,
  S3 = 0,
  d8 = f5(0),
  H1 = 0,
  e0 = null,
  N5 = 0,
  O9 = 0,
  Vt = 0,
  M4 = null,
  i3 = null,
  Ut = 0,
  M8 = 1 / 0,
  k2 = null,
  Y6 = !1,
  Se = null,
  i5 = null,
  Q0 = !1,
  q2 = null,
  X6 = 0,
  I4 = 0,
  xe = null,
  v6 = -1,
  y6 = 0;
function t3() {
  return t1 & 6 ? _1() : v6 !== -1 ? v6 : (v6 = _1());
}
function s5(C) {
  return C.mode & 1
    ? t1 & 2 && $1 !== 0
      ? $1 & -$1
      : Jf.transition !== null
      ? (y6 === 0 && (y6 = Qs()), y6)
      : ((C = l1),
        C !== 0 || ((C = window.event), (C = C === void 0 ? 16 : ta(C.type))),
        C)
    : 1;
}
function i2(C, e, t, n) {
  if (50 < I4) throw ((I4 = 0), (xe = null), Error(j(185)));
  m0(C, t, n),
    (!(t1 & 2) || C !== D1) &&
      (C === D1 && (!(t1 & 2) && (O9 |= t), H1 === 4 && Q2(C, $1)),
      u3(C, n),
      t === 1 && t1 === 0 && !(e.mode & 1) && ((M8 = _1() + 500), T9 && p5()));
}
function u3(C, e) {
  var t = C.callbackNode;
  qd(C, e);
  var n = R6(C, C === D1 ? $1 : 0);
  if (n === 0)
    t !== null && fr(t), (C.callbackNode = null), (C.callbackPriority = 0);
  else if (((e = n & -n), C.callbackPriority !== e)) {
    if ((t != null && fr(t), e === 1))
      C.tag === 0 ? qf(oo.bind(null, C)) : xa(oo.bind(null, C)),
        Gf(function () {
          !(t1 & 6) && p5();
        }),
        (t = null);
    else {
      switch (Ys(n)) {
        case 1:
          t = ht;
          break;
        case 4:
          t = Ks;
          break;
        case 16:
          t = I6;
          break;
        case 536870912:
          t = Gs;
          break;
        default:
          t = I6;
      }
      t = Sl(t, fl.bind(null, C));
    }
    (C.callbackPriority = e), (C.callbackNode = t);
  }
}
function fl(C, e) {
  if (((v6 = -1), (y6 = 0), t1 & 6)) throw Error(j(327));
  var t = C.callbackNode;
  if (S8() && C.callbackNode !== t) return null;
  var n = R6(C, C === D1 ? $1 : 0);
  if (n === 0) return null;
  if (n & 30 || n & C.expiredLanes || e) e = q6(C, n);
  else {
    e = n;
    var r = t1;
    t1 |= 2;
    var o = hl();
    (D1 !== C || $1 !== e) && ((k2 = null), (M8 = _1() + 500), k5(C, e));
    do
      try {
        yp();
        break;
      } catch (s) {
        pl(C, s);
      }
    while (!0);
    Pt(),
      (Q6.current = o),
      (t1 = r),
      R1 !== null ? (e = 0) : ((D1 = null), ($1 = 0), (e = H1));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((r = GC(C)), r !== 0 && ((n = r), (e = Ae(C, r)))), e === 1)
    )
      throw ((t = e0), k5(C, 0), Q2(C, n), u3(C, _1()), t);
    if (e === 6) Q2(C, n);
    else {
      if (
        ((r = C.current.alternate),
        !(n & 30) &&
          !gp(r) &&
          ((e = q6(C, n)),
          e === 2 && ((o = GC(C)), o !== 0 && ((n = o), (e = Ae(C, o)))),
          e === 1))
      )
        throw ((t = e0), k5(C, 0), Q2(C, n), u3(C, _1()), t);
      switch (((C.finishedWork = r), (C.finishedLanes = n), e)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          x5(C, i3, k2);
          break;
        case 3:
          if (
            (Q2(C, n), (n & 130023424) === n && ((e = Ut + 500 - _1()), 10 < e))
          ) {
            if (R6(C, 0) !== 0) break;
            if (((r = C.suspendedLanes), (r & n) !== n)) {
              t3(), (C.pingedLanes |= C.suspendedLanes & r);
              break;
            }
            C.timeoutHandle = te(x5.bind(null, C, i3, k2), e);
            break;
          }
          x5(C, i3, k2);
          break;
        case 4:
          if ((Q2(C, n), (n & 4194240) === n)) break;
          for (e = C.eventTimes, r = -1; 0 < n; ) {
            var i = 31 - o2(n);
            (o = 1 << i), (i = e[i]), i > r && (r = i), (n &= ~o);
          }
          if (
            ((n = r),
            (n = _1() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * mp(n / 1960)) - n),
            10 < n)
          ) {
            C.timeoutHandle = te(x5.bind(null, C, i3, k2), n);
            break;
          }
          x5(C, i3, k2);
          break;
        case 5:
          x5(C, i3, k2);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return u3(C, _1()), C.callbackNode === t ? fl.bind(null, C) : null;
}
function Ae(C, e) {
  var t = M4;
  return (
    C.current.memoizedState.isDehydrated && (k5(C, e).flags |= 256),
    (C = q6(C, e)),
    C !== 2 && ((e = i3), (i3 = t), e !== null && Ee(e)),
    C
  );
}
function Ee(C) {
  i3 === null ? (i3 = C) : i3.push.apply(i3, C);
}
function gp(C) {
  for (var e = C; ; ) {
    if (e.flags & 16384) {
      var t = e.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            o = r.getSnapshot;
          r = r.value;
          try {
            if (!s2(o(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = e.child), e.subtreeFlags & 16384 && t !== null))
      (t.return = e), (e = t);
    else {
      if (e === C) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === C) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function Q2(C, e) {
  for (
    e &= ~Vt,
      e &= ~O9,
      C.suspendedLanes |= e,
      C.pingedLanes &= ~e,
      C = C.expirationTimes;
    0 < e;

  ) {
    var t = 31 - o2(e),
      n = 1 << t;
    (C[t] = -1), (e &= ~n);
  }
}
function oo(C) {
  if (t1 & 6) throw Error(j(327));
  S8();
  var e = R6(C, 0);
  if (!(e & 1)) return u3(C, _1()), null;
  var t = q6(C, e);
  if (C.tag !== 0 && t === 2) {
    var n = GC(C);
    n !== 0 && ((e = n), (t = Ae(C, n)));
  }
  if (t === 1) throw ((t = e0), k5(C, 0), Q2(C, e), u3(C, _1()), t);
  if (t === 6) throw Error(j(345));
  return (
    (C.finishedWork = C.current.alternate),
    (C.finishedLanes = e),
    x5(C, i3, k2),
    u3(C, _1()),
    null
  );
}
function $t(C, e) {
  var t = t1;
  t1 |= 1;
  try {
    return C(e);
  } finally {
    (t1 = t), t1 === 0 && ((M8 = _1() + 500), T9 && p5());
  }
}
function H5(C) {
  q2 !== null && q2.tag === 0 && !(t1 & 6) && S8();
  var e = t1;
  t1 |= 1;
  var t = z3.transition,
    n = l1;
  try {
    if (((z3.transition = null), (l1 = 1), C)) return C();
  } finally {
    (l1 = n), (z3.transition = t), (t1 = e), !(t1 & 6) && p5();
  }
}
function Zt() {
  (S3 = d8.current), v1(d8);
}
function k5(C, e) {
  (C.finishedWork = null), (C.finishedLanes = 0);
  var t = C.timeoutHandle;
  if ((t !== -1 && ((C.timeoutHandle = -1), Kf(t)), R1 !== null))
    for (t = R1.return; t !== null; ) {
      var n = t;
      switch ((Lt(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && B6();
          break;
        case 3:
          _8(), v1(a3), v1(X1), Rt();
          break;
        case 5:
          It(n);
          break;
        case 4:
          _8();
          break;
        case 13:
          v1(w1);
          break;
        case 19:
          v1(w1);
          break;
        case 10:
          kt(n.type._context);
          break;
        case 22:
        case 23:
          Zt();
      }
      t = t.return;
    }
  if (
    ((D1 = C),
    (R1 = C = a5(C.current, null)),
    ($1 = S3 = e),
    (H1 = 0),
    (e0 = null),
    (Vt = O9 = N5 = 0),
    (i3 = M4 = null),
    L5 !== null)
  ) {
    for (e = 0; e < L5.length; e++)
      if (((t = L5[e]), (n = t.interleaved), n !== null)) {
        t.interleaved = null;
        var r = n.next,
          o = t.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = r), (n.next = i);
        }
        t.pending = n;
      }
    L5 = null;
  }
  return C;
}
function pl(C, e) {
  do {
    var t = R1;
    try {
      if ((Pt(), (h6.current = G6), K6)) {
        for (var n = L1.memoizedState; n !== null; ) {
          var r = n.queue;
          r !== null && (r.pending = null), (n = n.next);
        }
        K6 = !1;
      }
      if (
        ((R5 = 0),
        (j1 = N1 = L1 = null),
        (_4 = !1),
        (q4 = 0),
        (Ft.current = null),
        t === null || t.return === null)
      ) {
        (H1 = 1), (e0 = e), (R1 = null);
        break;
      }
      C: {
        var o = C,
          i = t.return,
          s = t,
          a = e;
        if (
          ((e = $1),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var l = a,
            c = s,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var S = Wr(i);
          if (S !== null) {
            (S.flags &= -257),
              Kr(S, i, s, o, e),
              S.mode & 1 && Zr(o, l, e),
              (e = S),
              (a = l);
            var v = e.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(a), (e.updateQueue = g);
            } else v.add(a);
            break C;
          } else {
            if (!(e & 1)) {
              Zr(o, l, e), Wt();
              break C;
            }
            a = Error(j(426));
          }
        } else if (A1 && s.mode & 1) {
          var w = Wr(i);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Kr(w, i, s, o, e),
              bt(O8(a, s));
            break C;
          }
        }
        (o = a = O8(a, s)),
          H1 !== 4 && (H1 = 2),
          M4 === null ? (M4 = [o]) : M4.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (e &= -e), (o.lanes |= e);
              var h = Xa(o, a, e);
              Dr(o, h);
              break C;
            case 1:
              s = a;
              var p = o.type,
                m = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (i5 === null || !i5.has(m))))
              ) {
                (o.flags |= 65536), (e &= -e), (o.lanes |= e);
                var y = qa(o, s, e);
                Dr(o, y);
                break C;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      gl(t);
    } catch (x) {
      (e = x), R1 === t && t !== null && (R1 = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function hl() {
  var C = Q6.current;
  return (Q6.current = G6), C === null ? G6 : C;
}
function Wt() {
  (H1 === 0 || H1 === 3 || H1 === 2) && (H1 = 4),
    D1 === null || (!(N5 & 268435455) && !(O9 & 268435455)) || Q2(D1, $1);
}
function q6(C, e) {
  var t = t1;
  t1 |= 2;
  var n = hl();
  (D1 !== C || $1 !== e) && ((k2 = null), k5(C, e));
  do
    try {
      vp();
      break;
    } catch (r) {
      pl(C, r);
    }
  while (!0);
  if ((Pt(), (t1 = t), (Q6.current = n), R1 !== null)) throw Error(j(261));
  return (D1 = null), ($1 = 0), H1;
}
function vp() {
  for (; R1 !== null; ) ml(R1);
}
function yp() {
  for (; R1 !== null && !Ud(); ) ml(R1);
}
function ml(C) {
  var e = yl(C.alternate, C, S3);
  (C.memoizedProps = C.pendingProps),
    e === null ? gl(C) : (R1 = e),
    (Ft.current = null);
}
function gl(C) {
  var e = C;
  do {
    var t = e.alternate;
    if (((C = e.return), e.flags & 32768)) {
      if (((t = dp(t, e)), t !== null)) {
        (t.flags &= 32767), (R1 = t);
        return;
      }
      if (C !== null)
        (C.flags |= 32768), (C.subtreeFlags = 0), (C.deletions = null);
      else {
        (H1 = 6), (R1 = null);
        return;
      }
    } else if (((t = cp(t, e, S3)), t !== null)) {
      R1 = t;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      R1 = e;
      return;
    }
    R1 = e = C;
  } while (e !== null);
  H1 === 0 && (H1 = 5);
}
function x5(C, e, t) {
  var n = l1,
    r = z3.transition;
  try {
    (z3.transition = null), (l1 = 1), Sp(C, e, t, n);
  } finally {
    (z3.transition = r), (l1 = n);
  }
  return null;
}
function Sp(C, e, t, n) {
  do S8();
  while (q2 !== null);
  if (t1 & 6) throw Error(j(327));
  t = C.finishedWork;
  var r = C.finishedLanes;
  if (t === null) return null;
  if (((C.finishedWork = null), (C.finishedLanes = 0), t === C.current))
    throw Error(j(177));
  (C.callbackNode = null), (C.callbackPriority = 0);
  var o = t.lanes | t.childLanes;
  if (
    (Jd(C, o),
    C === D1 && ((R1 = D1 = null), ($1 = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      Q0 ||
      ((Q0 = !0),
      Sl(I6, function () {
        return S8(), null;
      })),
    (o = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || o)
  ) {
    (o = z3.transition), (z3.transition = null);
    var i = l1;
    l1 = 1;
    var s = t1;
    (t1 |= 4),
      (Ft.current = null),
      pp(C, t),
      cl(t, C),
      zf(Ce),
      (N6 = !!JC),
      (Ce = JC = null),
      (C.current = t),
      hp(t),
      $d(),
      (t1 = s),
      (l1 = i),
      (z3.transition = o);
  } else C.current = t;
  if (
    (Q0 && ((Q0 = !1), (q2 = C), (X6 = r)),
    (o = C.pendingLanes),
    o === 0 && (i5 = null),
    Kd(t.stateNode),
    u3(C, _1()),
    e !== null)
  )
    for (n = C.onRecoverableError, t = 0; t < e.length; t++)
      (r = e[t]), n(r.value, { componentStack: r.stack, digest: r.digest });
  if (Y6) throw ((Y6 = !1), (C = Se), (Se = null), C);
  return (
    X6 & 1 && C.tag !== 0 && S8(),
    (o = C.pendingLanes),
    o & 1 ? (C === xe ? I4++ : ((I4 = 0), (xe = C))) : (I4 = 0),
    p5(),
    null
  );
}
function S8() {
  if (q2 !== null) {
    var C = Ys(X6),
      e = z3.transition,
      t = l1;
    try {
      if (((z3.transition = null), (l1 = 16 > C ? 16 : C), q2 === null))
        var n = !1;
      else {
        if (((C = q2), (q2 = null), (X6 = 0), t1 & 6)) throw Error(j(331));
        var r = t1;
        for (t1 |= 4, V = C.current; V !== null; ) {
          var o = V,
            i = o.child;
          if (V.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var l = s[a];
                for (V = l; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      O4(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        S = c.return;
                      if ((al(c), c === l)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = S), (V = d);
                        break;
                      }
                      V = S;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var w = g.sibling;
                    (g.sibling = null), (g = w);
                  } while (g !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (V = i);
          else
            C: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    O4(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (V = h);
                break C;
              }
              V = o.return;
            }
        }
        var p = C.current;
        for (V = p; V !== null; ) {
          i = V;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (V = m);
          else
            C: for (i = p; V !== null; ) {
              if (((s = V), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _9(9, s);
                  }
                } catch (x) {
                  k1(s, s.return, x);
                }
              if (s === i) {
                V = null;
                break C;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (V = y);
                break C;
              }
              V = s.return;
            }
        }
        if (
          ((t1 = r), p5(), g2 && typeof g2.onPostCommitFiberRoot == "function")
        )
          try {
            g2.onPostCommitFiberRoot(A9, C);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (l1 = t), (z3.transition = e);
    }
  }
  return !1;
}
function io(C, e, t) {
  (e = O8(t, e)),
    (e = Xa(C, e, 1)),
    (C = o5(C, e, 1)),
    (e = t3()),
    C !== null && (m0(C, 1, e), u3(C, e));
}
function k1(C, e, t) {
  if (C.tag === 3) io(C, C, t);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        io(e, C, t);
        break;
      } else if (e.tag === 1) {
        var n = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (i5 === null || !i5.has(n)))
        ) {
          (C = O8(t, C)),
            (C = qa(e, C, 1)),
            (e = o5(e, C, 1)),
            (C = t3()),
            e !== null && (m0(e, 1, C), u3(e, C));
          break;
        }
      }
      e = e.return;
    }
}
function xp(C, e, t) {
  var n = C.pingCache;
  n !== null && n.delete(e),
    (e = t3()),
    (C.pingedLanes |= C.suspendedLanes & t),
    D1 === C &&
      ($1 & t) === t &&
      (H1 === 4 || (H1 === 3 && ($1 & 130023424) === $1 && 500 > _1() - Ut)
        ? k5(C, 0)
        : (Vt |= t)),
    u3(C, e);
}
function vl(C, e) {
  e === 0 &&
    (C.mode & 1
      ? ((e = B0), (B0 <<= 1), !(B0 & 130023424) && (B0 = 4194304))
      : (e = 1));
  var t = t3();
  (C = H2(C, e)), C !== null && (m0(C, e, t), u3(C, t));
}
function Ap(C) {
  var e = C.memoizedState,
    t = 0;
  e !== null && (t = e.retryLane), vl(C, t);
}
function Ep(C, e) {
  var t = 0;
  switch (C.tag) {
    case 13:
      var n = C.stateNode,
        r = C.memoizedState;
      r !== null && (t = r.retryLane);
      break;
    case 19:
      n = C.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  n !== null && n.delete(e), vl(C, t);
}
var yl;
yl = function (C, e, t) {
  if (C !== null)
    if (C.memoizedProps !== e.pendingProps || a3.current) s3 = !0;
    else {
      if (!(C.lanes & t) && !(e.flags & 128)) return (s3 = !1), up(C, e, t);
      s3 = !!(C.flags & 131072);
    }
  else (s3 = !1), A1 && e.flags & 1048576 && Aa(e, V6, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var n = e.type;
      g6(C, e), (C = e.pendingProps);
      var r = T8(e, X1.current);
      y8(e, t), (r = Ht(null, e, n, C, r, t));
      var o = jt();
      return (
        (e.flags |= 1),
        typeof r == "object" &&
        r !== null &&
        typeof r.render == "function" &&
        r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            l3(n) ? ((o = !0), z6(e)) : (o = !1),
            (e.memoizedState =
              r.state !== null && r.state !== void 0 ? r.state : null),
            Ot(e),
            (r.updater = P9),
            (e.stateNode = r),
            (r._reactInternals = e),
            le(e, n, C, t),
            (e = de(null, e, n, !0, o, t)))
          : ((e.tag = 0), A1 && o && wt(e), C3(null, e, r, t), (e = e.child)),
        e
      );
    case 16:
      n = e.elementType;
      C: {
        switch (
          (g6(C, e),
          (C = e.pendingProps),
          (r = n._init),
          (n = r(n._payload)),
          (e.type = n),
          (r = e.tag = Lp(n)),
          (C = t2(n, C)),
          r)
        ) {
          case 0:
            e = ce(null, e, n, C, t);
            break C;
          case 1:
            e = Yr(null, e, n, C, t);
            break C;
          case 11:
            e = Gr(null, e, n, C, t);
            break C;
          case 14:
            e = Qr(null, e, n, t2(n.type, C), t);
            break C;
        }
        throw Error(j(306, n, ""));
      }
      return e;
    case 0:
      return (
        (n = e.type),
        (r = e.pendingProps),
        (r = e.elementType === n ? r : t2(n, r)),
        ce(C, e, n, r, t)
      );
    case 1:
      return (
        (n = e.type),
        (r = e.pendingProps),
        (r = e.elementType === n ? r : t2(n, r)),
        Yr(C, e, n, r, t)
      );
    case 3:
      C: {
        if ((tl(e), C === null)) throw Error(j(387));
        (n = e.pendingProps),
          (o = e.memoizedState),
          (r = o.element),
          ba(C, e),
          Z6(e, n, null, t);
        var i = e.memoizedState;
        if (((n = i.element), o.isDehydrated))
          if (
            ((o = {
              element: n,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (e.updateQueue.baseState = o),
            (e.memoizedState = o),
            e.flags & 256)
          ) {
            (r = O8(Error(j(423)), e)), (e = Xr(C, e, n, t, r));
            break C;
          } else if (n !== r) {
            (r = O8(Error(j(424)), e)), (e = Xr(C, e, n, t, r));
            break C;
          } else
            for (
              A3 = r5(e.stateNode.containerInfo.firstChild),
                E3 = e,
                A1 = !0,
                r2 = null,
                t = _a(e, null, n, t),
                e.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((P8(), n === r)) {
            e = j2(C, e, t);
            break C;
          }
          C3(C, e, n, t);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        Oa(e),
        C === null && ie(e),
        (n = e.type),
        (r = e.pendingProps),
        (o = C !== null ? C.memoizedProps : null),
        (i = r.children),
        ee(n, r) ? (i = null) : o !== null && ee(n, o) && (e.flags |= 32),
        el(C, e),
        C3(C, e, i, t),
        e.child
      );
    case 6:
      return C === null && ie(e), null;
    case 13:
      return nl(C, e, t);
    case 4:
      return (
        Mt(e, e.stateNode.containerInfo),
        (n = e.pendingProps),
        C === null ? (e.child = k8(e, null, n, t)) : C3(C, e, n, t),
        e.child
      );
    case 11:
      return (
        (n = e.type),
        (r = e.pendingProps),
        (r = e.elementType === n ? r : t2(n, r)),
        Gr(C, e, n, r, t)
      );
    case 7:
      return C3(C, e, e.pendingProps, t), e.child;
    case 8:
      return C3(C, e, e.pendingProps.children, t), e.child;
    case 12:
      return C3(C, e, e.pendingProps.children, t), e.child;
    case 10:
      C: {
        if (
          ((n = e.type._context),
          (r = e.pendingProps),
          (o = e.memoizedProps),
          (i = r.value),
          m1(U6, n._currentValue),
          (n._currentValue = i),
          o !== null)
        )
          if (s2(o.value, i)) {
            if (o.children === r.children && !a3.current) {
              e = j2(C, e, t);
              break C;
            }
          } else
            for (o = e.child, o !== null && (o.return = e); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                i = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === n) {
                    if (o.tag === 1) {
                      (a = I2(-1, t & -t)), (a.tag = 2);
                      var l = o.updateQueue;
                      if (l !== null) {
                        l = l.shared;
                        var c = l.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (l.pending = a);
                      }
                    }
                    (o.lanes |= t),
                      (a = o.alternate),
                      a !== null && (a.lanes |= t),
                      se(o.return, t, e),
                      (s.lanes |= t);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === e.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(j(341));
                (i.lanes |= t),
                  (s = i.alternate),
                  s !== null && (s.lanes |= t),
                  se(i, t, e),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === e) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        C3(C, e, r.children, t), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (n = e.pendingProps.children),
        y8(e, t),
        (r = V3(r)),
        (n = n(r)),
        (e.flags |= 1),
        C3(C, e, n, t),
        e.child
      );
    case 14:
      return (
        (n = e.type),
        (r = t2(n, e.pendingProps)),
        (r = t2(n.type, r)),
        Qr(C, e, n, r, t)
      );
    case 15:
      return Ja(C, e, e.type, e.pendingProps, t);
    case 17:
      return (
        (n = e.type),
        (r = e.pendingProps),
        (r = e.elementType === n ? r : t2(n, r)),
        g6(C, e),
        (e.tag = 1),
        l3(n) ? ((C = !0), z6(e)) : (C = !1),
        y8(e, t),
        Pa(e, n, r),
        le(e, n, r, t),
        de(null, e, n, !0, C, t)
      );
    case 19:
      return rl(C, e, t);
    case 22:
      return Cl(C, e, t);
  }
  throw Error(j(156, e.tag));
};
function Sl(C, e) {
  return Ws(C, e);
}
function wp(C, e, t, n) {
  (this.tag = C),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function B3(C, e, t, n) {
  return new wp(C, e, t, n);
}
function Kt(C) {
  return (C = C.prototype), !(!C || !C.isReactComponent);
}
function Lp(C) {
  if (typeof C == "function") return Kt(C) ? 1 : 0;
  if (C != null) {
    if (((C = C.$$typeof), C === dt)) return 11;
    if (C === ft) return 14;
  }
  return 2;
}
function a5(C, e) {
  var t = C.alternate;
  return (
    t === null
      ? ((t = B3(C.tag, e, C.key, C.mode)),
        (t.elementType = C.elementType),
        (t.type = C.type),
        (t.stateNode = C.stateNode),
        (t.alternate = C),
        (C.alternate = t))
      : ((t.pendingProps = e),
        (t.type = C.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = C.flags & 14680064),
    (t.childLanes = C.childLanes),
    (t.lanes = C.lanes),
    (t.child = C.child),
    (t.memoizedProps = C.memoizedProps),
    (t.memoizedState = C.memoizedState),
    (t.updateQueue = C.updateQueue),
    (e = C.dependencies),
    (t.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (t.sibling = C.sibling),
    (t.index = C.index),
    (t.ref = C.ref),
    t
  );
}
function S6(C, e, t, n, r, o) {
  var i = 2;
  if (((n = C), typeof C == "function")) Kt(C) && (i = 1);
  else if (typeof C == "string") i = 5;
  else
    C: switch (C) {
      case t8:
        return _5(t.children, r, o, e);
      case ct:
        (i = 8), (r |= 8);
        break;
      case IC:
        return (
          (C = B3(12, t, e, r | 2)), (C.elementType = IC), (C.lanes = o), C
        );
      case RC:
        return (C = B3(13, t, e, r)), (C.elementType = RC), (C.lanes = o), C;
      case NC:
        return (C = B3(19, t, e, r)), (C.elementType = NC), (C.lanes = o), C;
      case ks:
        return M9(t, r, o, e);
      default:
        if (typeof C == "object" && C !== null)
          switch (C.$$typeof) {
            case Ts:
              i = 10;
              break C;
            case Ps:
              i = 9;
              break C;
            case dt:
              i = 11;
              break C;
            case ft:
              i = 14;
              break C;
            case Z2:
              (i = 16), (n = null);
              break C;
          }
        throw Error(j(130, C == null ? C : typeof C, ""));
    }
  return (
    (e = B3(i, t, e, r)), (e.elementType = C), (e.type = n), (e.lanes = o), e
  );
}
function _5(C, e, t, n) {
  return (C = B3(7, C, n, e)), (C.lanes = t), C;
}
function M9(C, e, t, n) {
  return (
    (C = B3(22, C, n, e)),
    (C.elementType = ks),
    (C.lanes = t),
    (C.stateNode = { isHidden: !1 }),
    C
  );
}
function lC(C, e, t) {
  return (C = B3(6, C, null, e)), (C.lanes = t), C;
}
function uC(C, e, t) {
  return (
    (e = B3(4, C.children !== null ? C.children : [], C.key, e)),
    (e.lanes = t),
    (e.stateNode = {
      containerInfo: C.containerInfo,
      pendingChildren: null,
      implementation: C.implementation,
    }),
    e
  );
}
function bp(C, e, t, n, r) {
  (this.tag = e),
    (this.containerInfo = C),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $7(0)),
    (this.expirationTimes = $7(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $7(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function Gt(C, e, t, n, r, o, i, s, a) {
  return (
    (C = new bp(C, e, t, s, a)),
    e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
    (o = B3(3, null, null, e)),
    (C.current = o),
    (o.stateNode = C),
    (o.memoizedState = {
      element: n,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ot(o),
    C
  );
}
function Tp(C, e, t) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: e8,
    key: n == null ? null : "" + n,
    children: C,
    containerInfo: e,
    implementation: t,
  };
}
function xl(C) {
  if (!C) return u5;
  C = C._reactInternals;
  C: {
    if (z5(C) !== C || C.tag !== 1) throw Error(j(170));
    var e = C;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break C;
        case 1:
          if (l3(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break C;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(j(171));
  }
  if (C.tag === 1) {
    var t = C.type;
    if (l3(t)) return Sa(C, t, e);
  }
  return e;
}
function Al(C, e, t, n, r, o, i, s, a) {
  return (
    (C = Gt(t, n, !0, C, r, o, i, s, a)),
    (C.context = xl(null)),
    (t = C.current),
    (n = t3()),
    (r = s5(t)),
    (o = I2(n, r)),
    (o.callback = e ?? null),
    o5(t, o, r),
    (C.current.lanes = r),
    m0(C, r, n),
    u3(C, n),
    C
  );
}
function I9(C, e, t, n) {
  var r = e.current,
    o = t3(),
    i = s5(r);
  return (
    (t = xl(t)),
    e.context === null ? (e.context = t) : (e.pendingContext = t),
    (e = I2(o, i)),
    (e.payload = { element: C }),
    (n = n === void 0 ? null : n),
    n !== null && (e.callback = n),
    (C = o5(r, e, i)),
    C !== null && (i2(C, r, i, o), p6(C, r, i)),
    i
  );
}
function J6(C) {
  if (((C = C.current), !C.child)) return null;
  switch (C.child.tag) {
    case 5:
      return C.child.stateNode;
    default:
      return C.child.stateNode;
  }
}
function so(C, e) {
  if (((C = C.memoizedState), C !== null && C.dehydrated !== null)) {
    var t = C.retryLane;
    C.retryLane = t !== 0 && t < e ? t : e;
  }
}
function Qt(C, e) {
  so(C, e), (C = C.alternate) && so(C, e);
}
function Pp() {
  return null;
}
var El =
  typeof reportError == "function"
    ? reportError
    : function (C) {
        console.error(C);
      };
function Yt(C) {
  this._internalRoot = C;
}
R9.prototype.render = Yt.prototype.render = function (C) {
  var e = this._internalRoot;
  if (e === null) throw Error(j(409));
  I9(C, e, null, null);
};
R9.prototype.unmount = Yt.prototype.unmount = function () {
  var C = this._internalRoot;
  if (C !== null) {
    this._internalRoot = null;
    var e = C.containerInfo;
    H5(function () {
      I9(null, C, null, null);
    }),
      (e[N2] = null);
  }
};
function R9(C) {
  this._internalRoot = C;
}
R9.prototype.unstable_scheduleHydration = function (C) {
  if (C) {
    var e = Js();
    C = { blockedOn: null, target: C, priority: e };
    for (var t = 0; t < G2.length && e !== 0 && e < G2[t].priority; t++);
    G2.splice(t, 0, C), t === 0 && ea(C);
  }
};
function Xt(C) {
  return !(!C || (C.nodeType !== 1 && C.nodeType !== 9 && C.nodeType !== 11));
}
function N9(C) {
  return !(
    !C ||
    (C.nodeType !== 1 &&
      C.nodeType !== 9 &&
      C.nodeType !== 11 &&
      (C.nodeType !== 8 || C.nodeValue !== " react-mount-point-unstable "))
  );
}
function ao() {}
function kp(C, e, t, n, r) {
  if (r) {
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var l = J6(i);
        o.call(l);
      };
    }
    var i = Al(e, n, C, 0, null, !1, !1, "", ao);
    return (
      (C._reactRootContainer = i),
      (C[N2] = i.current),
      K4(C.nodeType === 8 ? C.parentNode : C),
      H5(),
      i
    );
  }
  for (; (r = C.lastChild); ) C.removeChild(r);
  if (typeof n == "function") {
    var s = n;
    n = function () {
      var l = J6(a);
      s.call(l);
    };
  }
  var a = Gt(C, 0, !1, null, null, !1, !1, "", ao);
  return (
    (C._reactRootContainer = a),
    (C[N2] = a.current),
    K4(C.nodeType === 8 ? C.parentNode : C),
    H5(function () {
      I9(e, a, t, n);
    }),
    a
  );
}
function H9(C, e, t, n, r) {
  var o = t._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var a = J6(i);
        s.call(a);
      };
    }
    I9(e, i, C, r);
  } else i = kp(t, e, C, r, n);
  return J6(i);
}
Xs = function (C) {
  switch (C.tag) {
    case 3:
      var e = C.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var t = A4(e.pendingLanes);
        t !== 0 &&
          (mt(e, t | 1), u3(e, _1()), !(t1 & 6) && ((M8 = _1() + 500), p5()));
      }
      break;
    case 13:
      H5(function () {
        var n = H2(C, 1);
        if (n !== null) {
          var r = t3();
          i2(n, C, 1, r);
        }
      }),
        Qt(C, 1);
  }
};
gt = function (C) {
  if (C.tag === 13) {
    var e = H2(C, 134217728);
    if (e !== null) {
      var t = t3();
      i2(e, C, 134217728, t);
    }
    Qt(C, 134217728);
  }
};
qs = function (C) {
  if (C.tag === 13) {
    var e = s5(C),
      t = H2(C, e);
    if (t !== null) {
      var n = t3();
      i2(t, C, e, n);
    }
    Qt(C, e);
  }
};
Js = function () {
  return l1;
};
Ca = function (C, e) {
  var t = l1;
  try {
    return (l1 = C), e();
  } finally {
    l1 = t;
  }
};
ZC = function (C, e, t) {
  switch (e) {
    case "input":
      if ((DC(C, t), (e = t.name), t.type === "radio" && e != null)) {
        for (t = C; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < t.length;
          e++
        ) {
          var n = t[e];
          if (n !== C && n.form === C.form) {
            var r = b9(n);
            if (!r) throw Error(j(90));
            Os(n), DC(n, r);
          }
        }
      }
      break;
    case "textarea":
      Is(C, t);
      break;
    case "select":
      (e = t.value), e != null && h8(C, !!t.multiple, e, !1);
  }
};
zs = $t;
Fs = H5;
var _p = { usingClientEntryPoint: !1, Events: [v0, i8, b9, Ds, Bs, $t] },
  d4 = {
    findFiberByHostInstance: w5,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Op = {
    bundleType: d4.bundleType,
    version: d4.version,
    rendererPackageName: d4.rendererPackageName,
    rendererConfig: d4.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: z2.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (C) {
      return (C = $s(C)), C === null ? null : C.stateNode;
    },
    findFiberByHostInstance: d4.findFiberByHostInstance || Pp,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Y0 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Y0.isDisabled && Y0.supportsFiber)
    try {
      (A9 = Y0.inject(Op)), (g2 = Y0);
    } catch {}
}
T3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _p;
T3.createPortal = function (C, e) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Xt(e)) throw Error(j(200));
  return Tp(C, e, null, t);
};
T3.createRoot = function (C, e) {
  if (!Xt(C)) throw Error(j(299));
  var t = !1,
    n = "",
    r = El;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (t = !0),
      e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = Gt(C, 1, !1, null, null, t, !1, n, r)),
    (C[N2] = e.current),
    K4(C.nodeType === 8 ? C.parentNode : C),
    new Yt(e)
  );
};
T3.findDOMNode = function (C) {
  if (C == null) return null;
  if (C.nodeType === 1) return C;
  var e = C._reactInternals;
  if (e === void 0)
    throw typeof C.render == "function"
      ? Error(j(188))
      : ((C = Object.keys(C).join(",")), Error(j(268, C)));
  return (C = $s(e)), (C = C === null ? null : C.stateNode), C;
};
T3.flushSync = function (C) {
  return H5(C);
};
T3.hydrate = function (C, e, t) {
  if (!N9(e)) throw Error(j(200));
  return H9(null, C, e, !0, t);
};
T3.hydrateRoot = function (C, e, t) {
  if (!Xt(C)) throw Error(j(405));
  var n = (t != null && t.hydratedSources) || null,
    r = !1,
    o = "",
    i = El;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (r = !0),
      t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (e = Al(e, null, C, 1, t ?? null, r, !1, o, i)),
    (C[N2] = e.current),
    K4(C),
    n)
  )
    for (C = 0; C < n.length; C++)
      (t = n[C]),
        (r = t._getVersion),
        (r = r(t._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [t, r])
          : e.mutableSourceEagerHydrationData.push(t, r);
  return new R9(e);
};
T3.render = function (C, e, t) {
  if (!N9(e)) throw Error(j(200));
  return H9(null, C, e, !1, t);
};
T3.unmountComponentAtNode = function (C) {
  if (!N9(C)) throw Error(j(40));
  return C._reactRootContainer
    ? (H5(function () {
        H9(null, null, C, !1, function () {
          (C._reactRootContainer = null), (C[N2] = null);
        });
      }),
      !0)
    : !1;
};
T3.unstable_batchedUpdates = $t;
T3.unstable_renderSubtreeIntoContainer = function (C, e, t, n) {
  if (!N9(t)) throw Error(j(200));
  if (C == null || C._reactInternals === void 0) throw Error(j(38));
  return H9(C, e, t, !1, n);
};
T3.version = "18.2.0-next-9e3b772b8-20220608";
function wl() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wl);
    } catch (C) {
      console.error(C);
    }
}
wl(), (As.exports = T3);
var qt = As.exports;
const X0 = nt(qt);
var lo = qt;
(OC.createRoot = lo.createRoot), (OC.hydrateRoot = lo.hydrateRoot);
const t0 = { black: "#000", white: "#fff" },
  Z5 = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  W5 = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  K5 = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  G5 = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  Q5 = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  f4 = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  Mp = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  };
function I8(C) {
  let e = "https://mui.com/production-error/?code=" + C;
  for (let t = 1; t < arguments.length; t += 1)
    e += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + C + "; visit " + e + " for the full message.";
}
const Ip = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: I8 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  n0 = "$$material";
function P() {
  return (
    (P = Object.assign
      ? Object.assign.bind()
      : function (C) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n]);
          }
          return C;
        }),
    P.apply(this, arguments)
  );
}
const Rp = Object.freeze(
  Object.defineProperty({ __proto__: null, default: P }, Symbol.toStringTag, {
    value: "Module",
  })
);
function X(C, e) {
  if (C == null) return {};
  var t = {},
    n = Object.keys(C),
    r,
    o;
  for (o = 0; o < n.length; o++)
    (r = n[o]), !(e.indexOf(r) >= 0) && (t[r] = C[r]);
  return t;
}
function Ll(C) {
  var e = Object.create(null);
  return function (t) {
    return e[t] === void 0 && (e[t] = C(t)), e[t];
  };
}
var Np =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Hp = Ll(function (C) {
    return (
      Np.test(C) ||
      (C.charCodeAt(0) === 111 &&
        C.charCodeAt(1) === 110 &&
        C.charCodeAt(2) < 91)
    );
  });
function jp(C) {
  if (C.sheet) return C.sheet;
  for (var e = 0; e < document.styleSheets.length; e++)
    if (document.styleSheets[e].ownerNode === C) return document.styleSheets[e];
}
function Dp(C) {
  var e = document.createElement("style");
  return (
    e.setAttribute("data-emotion", C.key),
    C.nonce !== void 0 && e.setAttribute("nonce", C.nonce),
    e.appendChild(document.createTextNode("")),
    e.setAttribute("data-s", ""),
    e
  );
}
var Bp = (function () {
    function C(t) {
      var n = this;
      (this._insertTag = function (r) {
        var o;
        n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
            ? (o = n.container.firstChild)
            : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(r, o),
          n.tags.push(r);
      }),
        (this.isSpeedy = t.speedy === void 0 ? !0 : t.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = t.nonce),
        (this.key = t.key),
        (this.container = t.container),
        (this.prepend = t.prepend),
        (this.insertionPoint = t.insertionPoint),
        (this.before = null);
    }
    var e = C.prototype;
    return (
      (e.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (e.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Dp(this));
        var r = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = jp(r);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else r.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (e.flush = function () {
        this.tags.forEach(function (n) {
          return n.parentNode && n.parentNode.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      C
    );
  })(),
  Q1 = "-ms-",
  C9 = "-moz-",
  o1 = "-webkit-",
  bl = "comm",
  Jt = "rule",
  Cn = "decl",
  zp = "@import",
  Tl = "@keyframes",
  Fp = "@layer",
  Vp = Math.abs,
  j9 = String.fromCharCode,
  Up = Object.assign;
function $p(C, e) {
  return U1(C, 0) ^ 45
    ? (((((((e << 2) ^ U1(C, 0)) << 2) ^ U1(C, 1)) << 2) ^ U1(C, 2)) << 2) ^
        U1(C, 3)
    : 0;
}
function Pl(C) {
  return C.trim();
}
function Zp(C, e) {
  return (C = e.exec(C)) ? C[0] : C;
}
function i1(C, e, t) {
  return C.replace(e, t);
}
function we(C, e) {
  return C.indexOf(e);
}
function U1(C, e) {
  return C.charCodeAt(e) | 0;
}
function r0(C, e, t) {
  return C.slice(e, t);
}
function c2(C) {
  return C.length;
}
function en(C) {
  return C.length;
}
function q0(C, e) {
  return e.push(C), C;
}
function Wp(C, e) {
  return C.map(e).join("");
}
var D9 = 1,
  R8 = 1,
  kl = 0,
  f3 = 0,
  I1 = 0,
  X8 = "";
function B9(C, e, t, n, r, o, i) {
  return {
    value: C,
    root: e,
    parent: t,
    type: n,
    props: r,
    children: o,
    line: D9,
    column: R8,
    length: i,
    return: "",
  };
}
function p4(C, e) {
  return Up(B9("", null, null, "", null, null, 0), C, { length: -C.length }, e);
}
function Kp() {
  return I1;
}
function Gp() {
  return (
    (I1 = f3 > 0 ? U1(X8, --f3) : 0), R8--, I1 === 10 && ((R8 = 1), D9--), I1
  );
}
function w3() {
  return (
    (I1 = f3 < kl ? U1(X8, f3++) : 0), R8++, I1 === 10 && ((R8 = 1), D9++), I1
  );
}
function y2() {
  return U1(X8, f3);
}
function x6() {
  return f3;
}
function S0(C, e) {
  return r0(X8, C, e);
}
function o0(C) {
  switch (C) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function _l(C) {
  return (D9 = R8 = 1), (kl = c2((X8 = C))), (f3 = 0), [];
}
function Ol(C) {
  return (X8 = ""), C;
}
function A6(C) {
  return Pl(S0(f3 - 1, Le(C === 91 ? C + 2 : C === 40 ? C + 1 : C)));
}
function Qp(C) {
  for (; (I1 = y2()) && I1 < 33; ) w3();
  return o0(C) > 2 || o0(I1) > 3 ? "" : " ";
}
function Yp(C, e) {
  for (
    ;
    --e &&
    w3() &&
    !(I1 < 48 || I1 > 102 || (I1 > 57 && I1 < 65) || (I1 > 70 && I1 < 97));

  );
  return S0(C, x6() + (e < 6 && y2() == 32 && w3() == 32));
}
function Le(C) {
  for (; w3(); )
    switch (I1) {
      case C:
        return f3;
      case 34:
      case 39:
        C !== 34 && C !== 39 && Le(I1);
        break;
      case 40:
        C === 41 && Le(C);
        break;
      case 92:
        w3();
        break;
    }
  return f3;
}
function Xp(C, e) {
  for (; w3() && C + I1 !== 57; ) if (C + I1 === 84 && y2() === 47) break;
  return "/*" + S0(e, f3 - 1) + "*" + j9(C === 47 ? C : w3());
}
function qp(C) {
  for (; !o0(y2()); ) w3();
  return S0(C, f3);
}
function Jp(C) {
  return Ol(E6("", null, null, null, [""], (C = _l(C)), 0, [0], C));
}
function E6(C, e, t, n, r, o, i, s, a) {
  for (
    var l = 0,
      c = 0,
      f = i,
      d = 0,
      S = 0,
      v = 0,
      g = 1,
      w = 1,
      h = 1,
      p = 0,
      m = "",
      y = r,
      x = o,
      E = n,
      A = m;
    w;

  )
    switch (((v = p), (p = w3()))) {
      case 40:
        if (v != 108 && U1(A, f - 1) == 58) {
          we((A += i1(A6(p), "&", "&\f")), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += A6(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += Qp(v);
        break;
      case 92:
        A += Yp(x6() - 1, 7);
        continue;
      case 47:
        switch (y2()) {
          case 42:
          case 47:
            q0(Ch(Xp(w3(), x6()), e, t), a);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * g:
        s[l++] = c2(A) * h;
      case 125 * g:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            w = 0;
          case 59 + c:
            h == -1 && (A = i1(A, /\f/g, "")),
              S > 0 &&
                c2(A) - f &&
                q0(
                  S > 32
                    ? co(A + ";", n, t, f - 1)
                    : co(i1(A, " ", "") + ";", n, t, f - 2),
                  a
                );
            break;
          case 59:
            A += ";";
          default:
            if (
              (q0((E = uo(A, e, t, l, c, r, s, m, (y = []), (x = []), f)), o),
              p === 123)
            )
              if (c === 0) E6(A, e, E, E, y, o, f, s, x);
              else
                switch (d === 99 && U1(A, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    E6(
                      C,
                      E,
                      E,
                      n && q0(uo(C, E, E, 0, 0, r, s, m, r, (y = []), f), x),
                      r,
                      x,
                      f,
                      s,
                      n ? y : x
                    );
                    break;
                  default:
                    E6(A, E, E, E, [""], x, 0, s, x);
                }
        }
        (l = c = S = 0), (g = h = 1), (m = A = ""), (f = i);
        break;
      case 58:
        (f = 1 + c2(A)), (S = v);
      default:
        if (g < 1) {
          if (p == 123) --g;
          else if (p == 125 && g++ == 0 && Gp() == 125) continue;
        }
        switch (((A += j9(p)), p * g)) {
          case 38:
            h = c > 0 ? 1 : ((A += "\f"), -1);
            break;
          case 44:
            (s[l++] = (c2(A) - 1) * h), (h = 1);
            break;
          case 64:
            y2() === 45 && (A += A6(w3())),
              (d = y2()),
              (c = f = c2((m = A += qp(x6())))),
              p++;
            break;
          case 45:
            v === 45 && c2(A) == 2 && (g = 0);
        }
    }
  return o;
}
function uo(C, e, t, n, r, o, i, s, a, l, c) {
  for (
    var f = r - 1, d = r === 0 ? o : [""], S = en(d), v = 0, g = 0, w = 0;
    v < n;
    ++v
  )
    for (var h = 0, p = r0(C, f + 1, (f = Vp((g = i[v])))), m = C; h < S; ++h)
      (m = Pl(g > 0 ? d[h] + " " + p : i1(p, /&\f/g, d[h]))) && (a[w++] = m);
  return B9(C, e, t, r === 0 ? Jt : s, a, l, c);
}
function Ch(C, e, t) {
  return B9(C, e, t, bl, j9(Kp()), r0(C, 2, -2), 0);
}
function co(C, e, t, n) {
  return B9(C, e, t, Cn, r0(C, 0, n), r0(C, n + 1, -1), n);
}
function x8(C, e) {
  for (var t = "", n = en(C), r = 0; r < n; r++) t += e(C[r], r, C, e) || "";
  return t;
}
function eh(C, e, t, n) {
  switch (C.type) {
    case Fp:
      if (C.children.length) break;
    case zp:
    case Cn:
      return (C.return = C.return || C.value);
    case bl:
      return "";
    case Tl:
      return (C.return = C.value + "{" + x8(C.children, n) + "}");
    case Jt:
      C.value = C.props.join(",");
  }
  return c2((t = x8(C.children, n)))
    ? (C.return = C.value + "{" + t + "}")
    : "";
}
function th(C) {
  var e = en(C);
  return function (t, n, r, o) {
    for (var i = "", s = 0; s < e; s++) i += C[s](t, n, r, o) || "";
    return i;
  };
}
function nh(C) {
  return function (e) {
    e.root || ((e = e.return) && C(e));
  };
}
var rh = function (e, t, n) {
    for (
      var r = 0, o = 0;
      (r = o), (o = y2()), r === 38 && o === 12 && (t[n] = 1), !o0(o);

    )
      w3();
    return S0(e, f3);
  },
  oh = function (e, t) {
    var n = -1,
      r = 44;
    do
      switch (o0(r)) {
        case 0:
          r === 38 && y2() === 12 && (t[n] = 1), (e[n] += rh(f3 - 1, t, n));
          break;
        case 2:
          e[n] += A6(r);
          break;
        case 4:
          if (r === 44) {
            (e[++n] = y2() === 58 ? "&\f" : ""), (t[n] = e[n].length);
            break;
          }
        default:
          e[n] += j9(r);
      }
    while ((r = w3()));
    return e;
  },
  ih = function (e, t) {
    return Ol(oh(_l(e), t));
  },
  fo = new WeakMap(),
  sh = function (e) {
    if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
      for (
        var t = e.value,
          n = e.parent,
          r = e.column === n.column && e.line === n.line;
        n.type !== "rule";

      )
        if (((n = n.parent), !n)) return;
      if (
        !(e.props.length === 1 && t.charCodeAt(0) !== 58 && !fo.get(n)) &&
        !r
      ) {
        fo.set(e, !0);
        for (
          var o = [], i = ih(t, o), s = n.props, a = 0, l = 0;
          a < i.length;
          a++
        )
          for (var c = 0; c < s.length; c++, l++)
            e.props[l] = o[a] ? i[a].replace(/&\f/g, s[c]) : s[c] + " " + i[a];
      }
    }
  },
  ah = function (e) {
    if (e.type === "decl") {
      var t = e.value;
      t.charCodeAt(0) === 108 &&
        t.charCodeAt(2) === 98 &&
        ((e.return = ""), (e.value = ""));
    }
  };
function Ml(C, e) {
  switch ($p(C, e)) {
    case 5103:
      return o1 + "print-" + C + C;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return o1 + C + C;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return o1 + C + C9 + C + Q1 + C + C;
    case 6828:
    case 4268:
      return o1 + C + Q1 + C + C;
    case 6165:
      return o1 + C + Q1 + "flex-" + C + C;
    case 5187:
      return (
        o1 + C + i1(C, /(\w+).+(:[^]+)/, o1 + "box-$1$2" + Q1 + "flex-$1$2") + C
      );
    case 5443:
      return o1 + C + Q1 + "flex-item-" + i1(C, /flex-|-self/, "") + C;
    case 4675:
      return (
        o1 +
        C +
        Q1 +
        "flex-line-pack" +
        i1(C, /align-content|flex-|-self/, "") +
        C
      );
    case 5548:
      return o1 + C + Q1 + i1(C, "shrink", "negative") + C;
    case 5292:
      return o1 + C + Q1 + i1(C, "basis", "preferred-size") + C;
    case 6060:
      return (
        o1 +
        "box-" +
        i1(C, "-grow", "") +
        o1 +
        C +
        Q1 +
        i1(C, "grow", "positive") +
        C
      );
    case 4554:
      return o1 + i1(C, /([^-])(transform)/g, "$1" + o1 + "$2") + C;
    case 6187:
      return (
        i1(
          i1(i1(C, /(zoom-|grab)/, o1 + "$1"), /(image-set)/, o1 + "$1"),
          C,
          ""
        ) + C
      );
    case 5495:
    case 3959:
      return i1(C, /(image-set\([^]*)/, o1 + "$1$`$1");
    case 4968:
      return (
        i1(
          i1(C, /(.+:)(flex-)?(.*)/, o1 + "box-pack:$3" + Q1 + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        o1 +
        C +
        C
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return i1(C, /(.+)-inline(.+)/, o1 + "$1$2") + C;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (c2(C) - 1 - e > 6)
        switch (U1(C, e + 1)) {
          case 109:
            if (U1(C, e + 4) !== 45) break;
          case 102:
            return (
              i1(
                C,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  o1 +
                  "$2-$3$1" +
                  C9 +
                  (U1(C, e + 3) == 108 ? "$3" : "$2-$3")
              ) + C
            );
          case 115:
            return ~we(C, "stretch")
              ? Ml(i1(C, "stretch", "fill-available"), e) + C
              : C;
        }
      break;
    case 4949:
      if (U1(C, e + 1) !== 115) break;
    case 6444:
      switch (U1(C, c2(C) - 3 - (~we(C, "!important") && 10))) {
        case 107:
          return i1(C, ":", ":" + o1) + C;
        case 101:
          return (
            i1(
              C,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                o1 +
                (U1(C, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                o1 +
                "$2$3$1" +
                Q1 +
                "$2box$3"
            ) + C
          );
      }
      break;
    case 5936:
      switch (U1(C, e + 11)) {
        case 114:
          return o1 + C + Q1 + i1(C, /[svh]\w+-[tblr]{2}/, "tb") + C;
        case 108:
          return o1 + C + Q1 + i1(C, /[svh]\w+-[tblr]{2}/, "tb-rl") + C;
        case 45:
          return o1 + C + Q1 + i1(C, /[svh]\w+-[tblr]{2}/, "lr") + C;
      }
      return o1 + C + Q1 + C + C;
  }
  return C;
}
var lh = function (e, t, n, r) {
    if (e.length > -1 && !e.return)
      switch (e.type) {
        case Cn:
          e.return = Ml(e.value, e.length);
          break;
        case Tl:
          return x8([p4(e, { value: i1(e.value, "@", "@" + o1) })], r);
        case Jt:
          if (e.length)
            return Wp(e.props, function (o) {
              switch (Zp(o, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return x8(
                    [p4(e, { props: [i1(o, /:(read-\w+)/, ":" + C9 + "$1")] })],
                    r
                  );
                case "::placeholder":
                  return x8(
                    [
                      p4(e, {
                        props: [i1(o, /:(plac\w+)/, ":" + o1 + "input-$1")],
                      }),
                      p4(e, { props: [i1(o, /:(plac\w+)/, ":" + C9 + "$1")] }),
                      p4(e, { props: [i1(o, /:(plac\w+)/, Q1 + "input-$1")] }),
                    ],
                    r
                  );
              }
              return "";
            });
      }
  },
  uh = [lh],
  tn = function (e) {
    var t = e.key;
    if (t === "css") {
      var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(n, function (g) {
        var w = g.getAttribute("data-emotion");
        w.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var r = e.stylisPlugins || uh,
      o = {},
      i,
      s = [];
    (i = e.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
        function (g) {
          for (
            var w = g.getAttribute("data-emotion").split(" "), h = 1;
            h < w.length;
            h++
          )
            o[w[h]] = !0;
          s.push(g);
        }
      );
    var a,
      l = [sh, ah];
    {
      var c,
        f = [
          eh,
          nh(function (g) {
            c.insert(g);
          }),
        ],
        d = th(l.concat(r, f)),
        S = function (w) {
          return x8(Jp(w), d);
        };
      a = function (w, h, p, m) {
        (c = p),
          S(w ? w + "{" + h.styles + "}" : h.styles),
          m && (v.inserted[h.name] = !0);
      };
    }
    var v = {
      key: t,
      sheet: new Bp({
        key: t,
        container: i,
        nonce: e.nonce,
        speedy: e.speedy,
        prepend: e.prepend,
        insertionPoint: e.insertionPoint,
      }),
      nonce: e.nonce,
      inserted: o,
      registered: {},
      insert: a,
    };
    return v.sheet.hydrate(s), v;
  },
  Il = { exports: {} },
  u1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B1 = typeof Symbol == "function" && Symbol.for,
  nn = B1 ? Symbol.for("react.element") : 60103,
  rn = B1 ? Symbol.for("react.portal") : 60106,
  z9 = B1 ? Symbol.for("react.fragment") : 60107,
  F9 = B1 ? Symbol.for("react.strict_mode") : 60108,
  V9 = B1 ? Symbol.for("react.profiler") : 60114,
  U9 = B1 ? Symbol.for("react.provider") : 60109,
  $9 = B1 ? Symbol.for("react.context") : 60110,
  on = B1 ? Symbol.for("react.async_mode") : 60111,
  Z9 = B1 ? Symbol.for("react.concurrent_mode") : 60111,
  W9 = B1 ? Symbol.for("react.forward_ref") : 60112,
  K9 = B1 ? Symbol.for("react.suspense") : 60113,
  ch = B1 ? Symbol.for("react.suspense_list") : 60120,
  G9 = B1 ? Symbol.for("react.memo") : 60115,
  Q9 = B1 ? Symbol.for("react.lazy") : 60116,
  dh = B1 ? Symbol.for("react.block") : 60121,
  fh = B1 ? Symbol.for("react.fundamental") : 60117,
  ph = B1 ? Symbol.for("react.responder") : 60118,
  hh = B1 ? Symbol.for("react.scope") : 60119;
function k3(C) {
  if (typeof C == "object" && C !== null) {
    var e = C.$$typeof;
    switch (e) {
      case nn:
        switch (((C = C.type), C)) {
          case on:
          case Z9:
          case z9:
          case V9:
          case F9:
          case K9:
            return C;
          default:
            switch (((C = C && C.$$typeof), C)) {
              case $9:
              case W9:
              case Q9:
              case G9:
              case U9:
                return C;
              default:
                return e;
            }
        }
      case rn:
        return e;
    }
  }
}
function Rl(C) {
  return k3(C) === Z9;
}
u1.AsyncMode = on;
u1.ConcurrentMode = Z9;
u1.ContextConsumer = $9;
u1.ContextProvider = U9;
u1.Element = nn;
u1.ForwardRef = W9;
u1.Fragment = z9;
u1.Lazy = Q9;
u1.Memo = G9;
u1.Portal = rn;
u1.Profiler = V9;
u1.StrictMode = F9;
u1.Suspense = K9;
u1.isAsyncMode = function (C) {
  return Rl(C) || k3(C) === on;
};
u1.isConcurrentMode = Rl;
u1.isContextConsumer = function (C) {
  return k3(C) === $9;
};
u1.isContextProvider = function (C) {
  return k3(C) === U9;
};
u1.isElement = function (C) {
  return typeof C == "object" && C !== null && C.$$typeof === nn;
};
u1.isForwardRef = function (C) {
  return k3(C) === W9;
};
u1.isFragment = function (C) {
  return k3(C) === z9;
};
u1.isLazy = function (C) {
  return k3(C) === Q9;
};
u1.isMemo = function (C) {
  return k3(C) === G9;
};
u1.isPortal = function (C) {
  return k3(C) === rn;
};
u1.isProfiler = function (C) {
  return k3(C) === V9;
};
u1.isStrictMode = function (C) {
  return k3(C) === F9;
};
u1.isSuspense = function (C) {
  return k3(C) === K9;
};
u1.isValidElementType = function (C) {
  return (
    typeof C == "string" ||
    typeof C == "function" ||
    C === z9 ||
    C === Z9 ||
    C === V9 ||
    C === F9 ||
    C === K9 ||
    C === ch ||
    (typeof C == "object" &&
      C !== null &&
      (C.$$typeof === Q9 ||
        C.$$typeof === G9 ||
        C.$$typeof === U9 ||
        C.$$typeof === $9 ||
        C.$$typeof === W9 ||
        C.$$typeof === fh ||
        C.$$typeof === ph ||
        C.$$typeof === hh ||
        C.$$typeof === dh))
  );
};
u1.typeOf = k3;
Il.exports = u1;
var mh = Il.exports,
  Nl = mh,
  gh = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  vh = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Hl = {};
Hl[Nl.ForwardRef] = gh;
Hl[Nl.Memo] = vh;
var yh = !0;
function jl(C, e, t) {
  var n = "";
  return (
    t.split(" ").forEach(function (r) {
      C[r] !== void 0 ? e.push(C[r] + ";") : (n += r + " ");
    }),
    n
  );
}
var Dl = function (e, t, n) {
    var r = e.key + "-" + t.name;
    (n === !1 || yh === !1) &&
      e.registered[r] === void 0 &&
      (e.registered[r] = t.styles);
  },
  sn = function (e, t, n) {
    Dl(e, t, n);
    var r = e.key + "-" + t.name;
    if (e.inserted[t.name] === void 0) {
      var o = t;
      do e.insert(t === o ? "." + r : "", o, e.sheet, !0), (o = o.next);
      while (o !== void 0);
    }
  };
function Sh(C) {
  for (var e = 0, t, n = 0, r = C.length; r >= 4; ++n, r -= 4)
    (t =
      (C.charCodeAt(n) & 255) |
      ((C.charCodeAt(++n) & 255) << 8) |
      ((C.charCodeAt(++n) & 255) << 16) |
      ((C.charCodeAt(++n) & 255) << 24)),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      (t ^= t >>> 24),
      (e =
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)) ^
        ((e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)));
  switch (r) {
    case 3:
      e ^= (C.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (C.charCodeAt(n + 1) & 255) << 8;
    case 1:
      (e ^= C.charCodeAt(n) & 255),
        (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16));
  }
  return (
    (e ^= e >>> 13),
    (e = (e & 65535) * 1540483477 + (((e >>> 16) * 59797) << 16)),
    ((e ^ (e >>> 15)) >>> 0).toString(36)
  );
}
var xh = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  Ah = /[A-Z]|^ms/g,
  Eh = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Bl = function (e) {
    return e.charCodeAt(1) === 45;
  },
  po = function (e) {
    return e != null && typeof e != "boolean";
  },
  cC = Ll(function (C) {
    return Bl(C) ? C : C.replace(Ah, "-$&").toLowerCase();
  }),
  ho = function (e, t) {
    switch (e) {
      case "animation":
      case "animationName":
        if (typeof t == "string")
          return t.replace(Eh, function (n, r, o) {
            return (d2 = { name: r, styles: o, next: d2 }), r;
          });
    }
    return xh[e] !== 1 && !Bl(e) && typeof t == "number" && t !== 0
      ? t + "px"
      : t;
  };
function i0(C, e, t) {
  if (t == null) return "";
  if (t.__emotion_styles !== void 0) return t;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return (d2 = { name: t.name, styles: t.styles, next: d2 }), t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            (d2 = { name: n.name, styles: n.styles, next: d2 }), (n = n.next);
        var r = t.styles + ";";
        return r;
      }
      return wh(C, e, t);
    }
    case "function": {
      if (C !== void 0) {
        var o = d2,
          i = t(C);
        return (d2 = o), i0(C, e, i);
      }
      break;
    }
  }
  if (e == null) return t;
  var s = e[t];
  return s !== void 0 ? s : t;
}
function wh(C, e, t) {
  var n = "";
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) n += i0(C, e, t[r]) + ";";
  else
    for (var o in t) {
      var i = t[o];
      if (typeof i != "object")
        e != null && e[i] !== void 0
          ? (n += o + "{" + e[i] + "}")
          : po(i) && (n += cC(o) + ":" + ho(o, i) + ";");
      else if (
        Array.isArray(i) &&
        typeof i[0] == "string" &&
        (e == null || e[i[0]] === void 0)
      )
        for (var s = 0; s < i.length; s++)
          po(i[s]) && (n += cC(o) + ":" + ho(o, i[s]) + ";");
      else {
        var a = i0(C, e, i);
        switch (o) {
          case "animation":
          case "animationName": {
            n += cC(o) + ":" + a + ";";
            break;
          }
          default:
            n += o + "{" + a + "}";
        }
      }
    }
  return n;
}
var mo = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  d2,
  Y9 = function (e, t, n) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var r = !0,
      o = "";
    d2 = void 0;
    var i = e[0];
    i == null || i.raw === void 0
      ? ((r = !1), (o += i0(n, t, i)))
      : (o += i[0]);
    for (var s = 1; s < e.length; s++) (o += i0(n, t, e[s])), r && (o += i[s]);
    mo.lastIndex = 0;
    for (var a = "", l; (l = mo.exec(o)) !== null; ) a += "-" + l[1];
    var c = Sh(o) + a;
    return { name: c, styles: o, next: d2 };
  },
  Lh = function (e) {
    return e();
  },
  zl = _C.useInsertionEffect ? _C.useInsertionEffect : !1,
  bh = zl || Lh,
  go = zl || L.useLayoutEffect,
  an = L.createContext(typeof HTMLElement < "u" ? tn({ key: "css" }) : null),
  Fl = an.Provider,
  Th = function () {
    return L.useContext(an);
  },
  Vl = function (e) {
    return L.forwardRef(function (t, n) {
      var r = L.useContext(an);
      return e(t, r, n);
    });
  },
  x0 = L.createContext({}),
  Ph = Vl(function (C, e) {
    var t = C.styles,
      n = Y9([t], void 0, L.useContext(x0)),
      r = L.useRef();
    return (
      go(
        function () {
          var o = e.key + "-global",
            i = new e.sheet.constructor({
              key: o,
              nonce: e.sheet.nonce,
              container: e.sheet.container,
              speedy: e.sheet.isSpeedy,
            }),
            s = !1,
            a = document.querySelector(
              'style[data-emotion="' + o + " " + n.name + '"]'
            );
          return (
            e.sheet.tags.length && (i.before = e.sheet.tags[0]),
            a !== null &&
              ((s = !0), a.setAttribute("data-emotion", o), i.hydrate([a])),
            (r.current = [i, s]),
            function () {
              i.flush();
            }
          );
        },
        [e]
      ),
      go(
        function () {
          var o = r.current,
            i = o[0],
            s = o[1];
          if (s) {
            o[1] = !1;
            return;
          }
          if ((n.next !== void 0 && sn(e, n.next, !0), i.tags.length)) {
            var a = i.tags[i.tags.length - 1].nextElementSibling;
            (i.before = a), i.flush();
          }
          e.insert("", n, i, !1);
        },
        [e, n.name]
      ),
      null
    );
  });
function Ul() {
  for (var C = arguments.length, e = new Array(C), t = 0; t < C; t++)
    e[t] = arguments[t];
  return Y9(e);
}
var X9 = function () {
    var e = Ul.apply(void 0, arguments),
      t = "animation-" + e.name;
    return {
      name: t,
      styles: "@keyframes " + t + "{" + e.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  kh = Hp,
  _h = function (e) {
    return e !== "theme";
  },
  vo = function (e) {
    return typeof e == "string" && e.charCodeAt(0) > 96 ? kh : _h;
  },
  yo = function (e, t, n) {
    var r;
    if (t) {
      var o = t.shouldForwardProp;
      r =
        e.__emotion_forwardProp && o
          ? function (i) {
              return e.__emotion_forwardProp(i) && o(i);
            }
          : o;
    }
    return typeof r != "function" && n && (r = e.__emotion_forwardProp), r;
  },
  Oh = function (e) {
    var t = e.cache,
      n = e.serialized,
      r = e.isStringTag;
    return (
      Dl(t, n, r),
      bh(function () {
        return sn(t, n, r);
      }),
      null
    );
  },
  Mh = function C(e, t) {
    var n = e.__emotion_real === e,
      r = (n && e.__emotion_base) || e,
      o,
      i;
    t !== void 0 && ((o = t.label), (i = t.target));
    var s = yo(e, t, n),
      a = s || vo(r),
      l = !a("as");
    return function () {
      var c = arguments,
        f =
          n && e.__emotion_styles !== void 0 ? e.__emotion_styles.slice(0) : [];
      if (
        (o !== void 0 && f.push("label:" + o + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, S = 1; S < d; S++) f.push(c[S], c[0][S]);
      }
      var v = Vl(function (g, w, h) {
        var p = (l && g.as) || r,
          m = "",
          y = [],
          x = g;
        if (g.theme == null) {
          x = {};
          for (var E in g) x[E] = g[E];
          x.theme = L.useContext(x0);
        }
        typeof g.className == "string"
          ? (m = jl(w.registered, y, g.className))
          : g.className != null && (m = g.className + " ");
        var A = Y9(f.concat(y), w.registered, x);
        (m += w.key + "-" + A.name), i !== void 0 && (m += " " + i);
        var _ = l && s === void 0 ? vo(p) : a,
          T = {};
        for (var b in g) (l && b === "as") || (_(b) && (T[b] = g[b]));
        return (
          (T.className = m),
          (T.ref = h),
          L.createElement(
            L.Fragment,
            null,
            L.createElement(Oh, {
              cache: w,
              serialized: A,
              isStringTag: typeof p == "string",
            }),
            L.createElement(p, T)
          )
        );
      });
      return (
        (v.displayName =
          o !== void 0
            ? o
            : "Styled(" +
              (typeof r == "string"
                ? r
                : r.displayName || r.name || "Component") +
              ")"),
        (v.defaultProps = e.defaultProps),
        (v.__emotion_real = v),
        (v.__emotion_base = r),
        (v.__emotion_styles = f),
        (v.__emotion_forwardProp = s),
        Object.defineProperty(v, "toString", {
          value: function () {
            return "." + i;
          },
        }),
        (v.withComponent = function (g, w) {
          return C(g, P({}, t, w, { shouldForwardProp: yo(v, w, !0) })).apply(
            void 0,
            f
          );
        }),
        v
      );
    };
  },
  Ih = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  be = Mh.bind();
Ih.forEach(function (C) {
  be[C] = be(C);
});
let Te;
typeof document == "object" && (Te = tn({ key: "css", prepend: !0 }));
function Rh(C) {
  const { injectFirst: e, children: t } = C;
  return e && Te ? u.jsx(Fl, { value: Te, children: t }) : t;
}
function Nh(C) {
  return C == null || Object.keys(C).length === 0;
}
function Hh(C) {
  const { styles: e, defaultTheme: t = {} } = C,
    n = typeof e == "function" ? (r) => e(Nh(r) ? t : r) : e;
  return u.jsx(Ph, { styles: n });
}
function jh(C, e) {
  return be(C, e);
}
const Dh = (C, e) => {
    Array.isArray(C.__emotion_styles) &&
      (C.__emotion_styles = e(C.__emotion_styles));
  },
  Bh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        GlobalStyles: Hh,
        StyledEngineProvider: Rh,
        ThemeContext: x0,
        css: Ul,
        default: jh,
        internal_processStyles: Dh,
        keyframes: X9,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Y2(C) {
  if (typeof C != "object" || C === null) return !1;
  const e = Object.getPrototypeOf(C);
  return (
    (e === null ||
      e === Object.prototype ||
      Object.getPrototypeOf(e) === null) &&
    !(Symbol.toStringTag in C) &&
    !(Symbol.iterator in C)
  );
}
function $l(C) {
  if (!Y2(C)) return C;
  const e = {};
  return (
    Object.keys(C).forEach((t) => {
      e[t] = $l(C[t]);
    }),
    e
  );
}
function S2(C, e, t = { clone: !0 }) {
  const n = t.clone ? P({}, C) : C;
  return (
    Y2(C) &&
      Y2(e) &&
      Object.keys(e).forEach((r) => {
        r !== "__proto__" &&
          (Y2(e[r]) && r in C && Y2(C[r])
            ? (n[r] = S2(C[r], e[r], t))
            : t.clone
            ? (n[r] = Y2(e[r]) ? $l(e[r]) : e[r])
            : (n[r] = e[r]));
      }),
    n
  );
}
const zh = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: S2, isPlainObject: Y2 },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Fh = ["values", "unit", "step"],
  Vh = (C) => {
    const e = Object.keys(C).map((t) => ({ key: t, val: C[t] })) || [];
    return (
      e.sort((t, n) => t.val - n.val),
      e.reduce((t, n) => P({}, t, { [n.key]: n.val }), {})
    );
  };
function Zl(C) {
  const {
      values: e = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: t = "px",
      step: n = 5,
    } = C,
    r = X(C, Fh),
    o = Vh(e),
    i = Object.keys(o);
  function s(d) {
    return `@media (min-width:${typeof e[d] == "number" ? e[d] : d}${t})`;
  }
  function a(d) {
    return `@media (max-width:${
      (typeof e[d] == "number" ? e[d] : d) - n / 100
    }${t})`;
  }
  function l(d, S) {
    const v = i.indexOf(S);
    return `@media (min-width:${
      typeof e[d] == "number" ? e[d] : d
    }${t}) and (max-width:${
      (v !== -1 && typeof e[i[v]] == "number" ? e[i[v]] : S) - n / 100
    }${t})`;
  }
  function c(d) {
    return i.indexOf(d) + 1 < i.length ? l(d, i[i.indexOf(d) + 1]) : s(d);
  }
  function f(d) {
    const S = i.indexOf(d);
    return S === 0
      ? s(i[1])
      : S === i.length - 1
      ? a(i[S])
      : l(d, i[i.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return P(
    {
      keys: i,
      values: o,
      up: s,
      down: a,
      between: l,
      only: c,
      not: f,
      unit: t,
    },
    r
  );
}
const Uh = { borderRadius: 4 };
function R4(C, e) {
  return e ? S2(C, e, { clone: !1 }) : C;
}
const ln = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  So = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (C) => `@media (min-width:${ln[C]}px)`,
  };
function D2(C, e, t) {
  const n = C.theme || {};
  if (Array.isArray(e)) {
    const o = n.breakpoints || So;
    return e.reduce((i, s, a) => ((i[o.up(o.keys[a])] = t(e[a])), i), {});
  }
  if (typeof e == "object") {
    const o = n.breakpoints || So;
    return Object.keys(e).reduce((i, s) => {
      if (Object.keys(o.values || ln).indexOf(s) !== -1) {
        const a = o.up(s);
        i[a] = t(e[s], s);
      } else {
        const a = s;
        i[a] = e[a];
      }
      return i;
    }, {});
  }
  return t(e);
}
function $h(C = {}) {
  var e;
  return (
    ((e = C.keys) == null
      ? void 0
      : e.reduce((n, r) => {
          const o = C.up(r);
          return (n[o] = {}), n;
        }, {})) || {}
  );
}
function Zh(C, e) {
  return C.reduce((t, n) => {
    const r = t[n];
    return (!r || Object.keys(r).length === 0) && delete t[n], t;
  }, e);
}
function f1(C) {
  if (typeof C != "string") throw new Error(I8(7));
  return C.charAt(0).toUpperCase() + C.slice(1);
}
const Wh = Object.freeze(
  Object.defineProperty({ __proto__: null, default: f1 }, Symbol.toStringTag, {
    value: "Module",
  })
);
function q9(C, e, t = !0) {
  if (!e || typeof e != "string") return null;
  if (C && C.vars && t) {
    const n = `vars.${e}`
      .split(".")
      .reduce((r, o) => (r && r[o] ? r[o] : null), C);
    if (n != null) return n;
  }
  return e.split(".").reduce((n, r) => (n && n[r] != null ? n[r] : null), C);
}
function e9(C, e, t, n = t) {
  let r;
  return (
    typeof C == "function"
      ? (r = C(t))
      : Array.isArray(C)
      ? (r = C[t] || n)
      : (r = q9(C, t) || n),
    e && (r = e(r, n, C)),
    r
  );
}
function O1(C) {
  const { prop: e, cssProperty: t = C.prop, themeKey: n, transform: r } = C,
    o = (i) => {
      if (i[e] == null) return null;
      const s = i[e],
        a = i.theme,
        l = q9(a, n) || {};
      return D2(i, s, (f) => {
        let d = e9(l, r, f);
        return (
          f === d &&
            typeof f == "string" &&
            (d = e9(l, r, `${e}${f === "default" ? "" : f1(f)}`, f)),
          t === !1 ? d : { [t]: d }
        );
      });
    };
  return (o.propTypes = {}), (o.filterProps = [e]), o;
}
function Kh(C) {
  const e = {};
  return (t) => (e[t] === void 0 && (e[t] = C(t)), e[t]);
}
const Gh = { m: "margin", p: "padding" },
  Qh = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  xo = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Yh = Kh((C) => {
    if (C.length > 2)
      if (xo[C]) C = xo[C];
      else return [C];
    const [e, t] = C.split(""),
      n = Gh[e],
      r = Qh[t] || "";
    return Array.isArray(r) ? r.map((o) => n + o) : [n + r];
  }),
  un = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  cn = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...un, ...cn];
function A0(C, e, t, n) {
  var r;
  const o = (r = q9(C, e, !1)) != null ? r : t;
  return typeof o == "number"
    ? (i) => (typeof i == "string" ? i : o * i)
    : Array.isArray(o)
    ? (i) => (typeof i == "string" ? i : o[i])
    : typeof o == "function"
    ? o
    : () => {};
}
function Wl(C) {
  return A0(C, "spacing", 8);
}
function E0(C, e) {
  if (typeof e == "string" || e == null) return e;
  const t = Math.abs(e),
    n = C(t);
  return e >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function Xh(C, e) {
  return (t) => C.reduce((n, r) => ((n[r] = E0(e, t)), n), {});
}
function qh(C, e, t, n) {
  if (e.indexOf(t) === -1) return null;
  const r = Yh(t),
    o = Xh(r, n),
    i = C[t];
  return D2(C, i, o);
}
function Kl(C, e) {
  const t = Wl(C.theme);
  return Object.keys(C)
    .map((n) => qh(C, e, n, t))
    .reduce(R4, {});
}
function T1(C) {
  return Kl(C, un);
}
T1.propTypes = {};
T1.filterProps = un;
function P1(C) {
  return Kl(C, cn);
}
P1.propTypes = {};
P1.filterProps = cn;
function Jh(C = 8) {
  if (C.mui) return C;
  const e = Wl({ spacing: C }),
    t = (...n) =>
      (n.length === 0 ? [1] : n)
        .map((o) => {
          const i = e(o);
          return typeof i == "number" ? `${i}px` : i;
        })
        .join(" ");
  return (t.mui = !0), t;
}
function J9(...C) {
  const e = C.reduce(
      (n, r) => (
        r.filterProps.forEach((o) => {
          n[o] = r;
        }),
        n
      ),
      {}
    ),
    t = (n) => Object.keys(n).reduce((r, o) => (e[o] ? R4(r, e[o](n)) : r), {});
  return (
    (t.propTypes = {}),
    (t.filterProps = C.reduce((n, r) => n.concat(r.filterProps), [])),
    t
  );
}
function D3(C) {
  return typeof C != "number" ? C : `${C}px solid`;
}
function K3(C, e) {
  return O1({ prop: C, themeKey: "borders", transform: e });
}
const Cm = K3("border", D3),
  em = K3("borderTop", D3),
  tm = K3("borderRight", D3),
  nm = K3("borderBottom", D3),
  rm = K3("borderLeft", D3),
  om = K3("borderColor"),
  im = K3("borderTopColor"),
  sm = K3("borderRightColor"),
  am = K3("borderBottomColor"),
  lm = K3("borderLeftColor"),
  um = K3("outline", D3),
  cm = K3("outlineColor"),
  C7 = (C) => {
    if (C.borderRadius !== void 0 && C.borderRadius !== null) {
      const e = A0(C.theme, "shape.borderRadius", 4),
        t = (n) => ({ borderRadius: E0(e, n) });
      return D2(C, C.borderRadius, t);
    }
    return null;
  };
C7.propTypes = {};
C7.filterProps = ["borderRadius"];
J9(Cm, em, tm, nm, rm, om, im, sm, am, lm, C7, um, cm);
const e7 = (C) => {
  if (C.gap !== void 0 && C.gap !== null) {
    const e = A0(C.theme, "spacing", 8),
      t = (n) => ({ gap: E0(e, n) });
    return D2(C, C.gap, t);
  }
  return null;
};
e7.propTypes = {};
e7.filterProps = ["gap"];
const t7 = (C) => {
  if (C.columnGap !== void 0 && C.columnGap !== null) {
    const e = A0(C.theme, "spacing", 8),
      t = (n) => ({ columnGap: E0(e, n) });
    return D2(C, C.columnGap, t);
  }
  return null;
};
t7.propTypes = {};
t7.filterProps = ["columnGap"];
const n7 = (C) => {
  if (C.rowGap !== void 0 && C.rowGap !== null) {
    const e = A0(C.theme, "spacing", 8),
      t = (n) => ({ rowGap: E0(e, n) });
    return D2(C, C.rowGap, t);
  }
  return null;
};
n7.propTypes = {};
n7.filterProps = ["rowGap"];
const dm = O1({ prop: "gridColumn" }),
  fm = O1({ prop: "gridRow" }),
  pm = O1({ prop: "gridAutoFlow" }),
  hm = O1({ prop: "gridAutoColumns" }),
  mm = O1({ prop: "gridAutoRows" }),
  gm = O1({ prop: "gridTemplateColumns" }),
  vm = O1({ prop: "gridTemplateRows" }),
  ym = O1({ prop: "gridTemplateAreas" }),
  Sm = O1({ prop: "gridArea" });
J9(e7, t7, n7, dm, fm, pm, hm, mm, gm, vm, ym, Sm);
function A8(C, e) {
  return e === "grey" ? e : C;
}
const xm = O1({ prop: "color", themeKey: "palette", transform: A8 }),
  Am = O1({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: A8,
  }),
  Em = O1({ prop: "backgroundColor", themeKey: "palette", transform: A8 });
J9(xm, Am, Em);
function x3(C) {
  return C <= 1 && C !== 0 ? `${C * 100}%` : C;
}
const wm = O1({ prop: "width", transform: x3 }),
  dn = (C) => {
    if (C.maxWidth !== void 0 && C.maxWidth !== null) {
      const e = (t) => {
        var n, r;
        const o =
          ((n = C.theme) == null ||
          (n = n.breakpoints) == null ||
          (n = n.values) == null
            ? void 0
            : n[t]) || ln[t];
        return o
          ? ((r = C.theme) == null || (r = r.breakpoints) == null
              ? void 0
              : r.unit) !== "px"
            ? { maxWidth: `${o}${C.theme.breakpoints.unit}` }
            : { maxWidth: o }
          : { maxWidth: x3(t) };
      };
      return D2(C, C.maxWidth, e);
    }
    return null;
  };
dn.filterProps = ["maxWidth"];
const Lm = O1({ prop: "minWidth", transform: x3 }),
  bm = O1({ prop: "height", transform: x3 }),
  Tm = O1({ prop: "maxHeight", transform: x3 }),
  Pm = O1({ prop: "minHeight", transform: x3 });
O1({ prop: "size", cssProperty: "width", transform: x3 });
O1({ prop: "size", cssProperty: "height", transform: x3 });
const km = O1({ prop: "boxSizing" });
J9(wm, dn, Lm, bm, Tm, Pm, km);
const w0 = {
  border: { themeKey: "borders", transform: D3 },
  borderTop: { themeKey: "borders", transform: D3 },
  borderRight: { themeKey: "borders", transform: D3 },
  borderBottom: { themeKey: "borders", transform: D3 },
  borderLeft: { themeKey: "borders", transform: D3 },
  borderColor: { themeKey: "palette" },
  borderTopColor: { themeKey: "palette" },
  borderRightColor: { themeKey: "palette" },
  borderBottomColor: { themeKey: "palette" },
  borderLeftColor: { themeKey: "palette" },
  outline: { themeKey: "borders", transform: D3 },
  outlineColor: { themeKey: "palette" },
  borderRadius: { themeKey: "shape.borderRadius", style: C7 },
  color: { themeKey: "palette", transform: A8 },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: A8,
  },
  backgroundColor: { themeKey: "palette", transform: A8 },
  p: { style: P1 },
  pt: { style: P1 },
  pr: { style: P1 },
  pb: { style: P1 },
  pl: { style: P1 },
  px: { style: P1 },
  py: { style: P1 },
  padding: { style: P1 },
  paddingTop: { style: P1 },
  paddingRight: { style: P1 },
  paddingBottom: { style: P1 },
  paddingLeft: { style: P1 },
  paddingX: { style: P1 },
  paddingY: { style: P1 },
  paddingInline: { style: P1 },
  paddingInlineStart: { style: P1 },
  paddingInlineEnd: { style: P1 },
  paddingBlock: { style: P1 },
  paddingBlockStart: { style: P1 },
  paddingBlockEnd: { style: P1 },
  m: { style: T1 },
  mt: { style: T1 },
  mr: { style: T1 },
  mb: { style: T1 },
  ml: { style: T1 },
  mx: { style: T1 },
  my: { style: T1 },
  margin: { style: T1 },
  marginTop: { style: T1 },
  marginRight: { style: T1 },
  marginBottom: { style: T1 },
  marginLeft: { style: T1 },
  marginX: { style: T1 },
  marginY: { style: T1 },
  marginInline: { style: T1 },
  marginInlineStart: { style: T1 },
  marginInlineEnd: { style: T1 },
  marginBlock: { style: T1 },
  marginBlockStart: { style: T1 },
  marginBlockEnd: { style: T1 },
  displayPrint: {
    cssProperty: !1,
    transform: (C) => ({ "@media print": { display: C } }),
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  gap: { style: e7 },
  rowGap: { style: n7 },
  columnGap: { style: t7 },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  position: {},
  zIndex: { themeKey: "zIndex" },
  top: {},
  right: {},
  bottom: {},
  left: {},
  boxShadow: { themeKey: "shadows" },
  width: { transform: x3 },
  maxWidth: { style: dn },
  minWidth: { transform: x3 },
  height: { transform: x3 },
  maxHeight: { transform: x3 },
  minHeight: { transform: x3 },
  boxSizing: {},
  fontFamily: { themeKey: "typography" },
  fontSize: { themeKey: "typography" },
  fontStyle: { themeKey: "typography" },
  fontWeight: { themeKey: "typography" },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: { cssProperty: !1, themeKey: "typography" },
};
function _m(...C) {
  const e = C.reduce((n, r) => n.concat(Object.keys(r)), []),
    t = new Set(e);
  return C.every((n) => t.size === Object.keys(n).length);
}
function Om(C, e) {
  return typeof C == "function" ? C(e) : C;
}
function Gl() {
  function C(t, n, r, o) {
    const i = { [t]: n, theme: r },
      s = o[t];
    if (!s) return { [t]: n };
    const { cssProperty: a = t, themeKey: l, transform: c, style: f } = s;
    if (n == null) return null;
    if (l === "typography" && n === "inherit") return { [t]: n };
    const d = q9(r, l) || {};
    return f
      ? f(i)
      : D2(i, n, (v) => {
          let g = e9(d, c, v);
          return (
            v === g &&
              typeof v == "string" &&
              (g = e9(d, c, `${t}${v === "default" ? "" : f1(v)}`, v)),
            a === !1 ? g : { [a]: g }
          );
        });
  }
  function e(t) {
    var n;
    const { sx: r, theme: o = {} } = t || {};
    if (!r) return null;
    const i = (n = o.unstable_sxConfig) != null ? n : w0;
    function s(a) {
      let l = a;
      if (typeof a == "function") l = a(o);
      else if (typeof a != "object") return a;
      if (!l) return null;
      const c = $h(o.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(l).forEach((S) => {
          const v = Om(l[S], o);
          if (v != null)
            if (typeof v == "object")
              if (i[S]) d = R4(d, C(S, v, o, i));
              else {
                const g = D2({ theme: o }, v, (w) => ({ [S]: w }));
                _m(g, v) ? (d[S] = e({ sx: v, theme: o })) : (d = R4(d, g));
              }
            else d = R4(d, C(S, v, o, i));
        }),
        Zh(f, d)
      );
    }
    return Array.isArray(r) ? r.map(s) : s(r);
  }
  return e;
}
const r7 = Gl();
r7.filterProps = ["sx"];
function Ql(C, e) {
  const t = this;
  return t.vars && typeof t.getColorSchemeSelector == "function"
    ? {
        [t.getColorSchemeSelector(C).replace(/(\[[^\]]+\])/, "*:where($1)")]: e,
      }
    : t.palette.mode === C
    ? e
    : {};
}
const Mm = ["breakpoints", "palette", "spacing", "shape"];
function fn(C = {}, ...e) {
  const { breakpoints: t = {}, palette: n = {}, spacing: r, shape: o = {} } = C,
    i = X(C, Mm),
    s = Zl(t),
    a = Jh(r);
  let l = S2(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: P({ mode: "light" }, n),
      spacing: a,
      shape: P({}, Uh, o),
    },
    i
  );
  return (
    (l.applyStyles = Ql),
    (l = e.reduce((c, f) => S2(c, f), l)),
    (l.unstable_sxConfig = P({}, w0, i == null ? void 0 : i.unstable_sxConfig)),
    (l.unstable_sx = function (f) {
      return r7({ sx: f, theme: this });
    }),
    l
  );
}
const Im = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      default: fn,
      private_createBreakpoints: Zl,
      unstable_applyStyles: Ql,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function Rm(C) {
  return Object.keys(C).length === 0;
}
function pn(C = null) {
  const e = L.useContext(x0);
  return !e || Rm(e) ? C : e;
}
const Nm = fn();
function Yl(C = Nm) {
  return pn(C);
}
const Hm = ["sx"],
  jm = (C) => {
    var e, t;
    const n = { systemProps: {}, otherProps: {} },
      r =
        (e =
          C == null || (t = C.theme) == null ? void 0 : t.unstable_sxConfig) !=
        null
          ? e
          : w0;
    return (
      Object.keys(C).forEach((o) => {
        r[o] ? (n.systemProps[o] = C[o]) : (n.otherProps[o] = C[o]);
      }),
      n
    );
  };
function Xl(C) {
  const { sx: e } = C,
    t = X(C, Hm),
    { systemProps: n, otherProps: r } = jm(t);
  let o;
  return (
    Array.isArray(e)
      ? (o = [n, ...e])
      : typeof e == "function"
      ? (o = (...i) => {
          const s = e(...i);
          return Y2(s) ? P({}, n, s) : n;
        })
      : (o = P({}, n, e)),
    P({}, r, { sx: o })
  );
}
const Dm = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: r7,
        extendSxProp: Xl,
        unstable_createStyleFunctionSx: Gl,
        unstable_defaultSxConfig: w0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  Ao = (C) => C,
  Bm = () => {
    let C = Ao;
    return {
      configure(e) {
        C = e;
      },
      generate(e) {
        return C(e);
      },
      reset() {
        C = Ao;
      },
    };
  },
  zm = Bm();
function ql(C) {
  var e,
    t,
    n = "";
  if (typeof C == "string" || typeof C == "number") n += C;
  else if (typeof C == "object")
    if (Array.isArray(C)) {
      var r = C.length;
      for (e = 0; e < r; e++)
        C[e] && (t = ql(C[e])) && (n && (n += " "), (n += t));
    } else for (t in C) C[t] && (n && (n += " "), (n += t));
  return n;
}
function e1() {
  for (var C, e, t = 0, n = "", r = arguments.length; t < r; t++)
    (C = arguments[t]) && (e = ql(C)) && (n && (n += " "), (n += e));
  return n;
}
const Jl = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected",
};
function h3(C, e, t = "Mui") {
  const n = Jl[e];
  return n ? `${t}-${n}` : `${zm.generate(C)}-${e}`;
}
function m3(C, e, t = "Mui") {
  const n = {};
  return (
    e.forEach((r) => {
      n[r] = h3(C, r, t);
    }),
    n
  );
}
var Cu = { exports: {} },
  c1 = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hn = Symbol.for("react.element"),
  mn = Symbol.for("react.portal"),
  o7 = Symbol.for("react.fragment"),
  i7 = Symbol.for("react.strict_mode"),
  s7 = Symbol.for("react.profiler"),
  a7 = Symbol.for("react.provider"),
  l7 = Symbol.for("react.context"),
  Fm = Symbol.for("react.server_context"),
  u7 = Symbol.for("react.forward_ref"),
  c7 = Symbol.for("react.suspense"),
  d7 = Symbol.for("react.suspense_list"),
  f7 = Symbol.for("react.memo"),
  p7 = Symbol.for("react.lazy"),
  Vm = Symbol.for("react.offscreen"),
  eu;
eu = Symbol.for("react.module.reference");
function G3(C) {
  if (typeof C == "object" && C !== null) {
    var e = C.$$typeof;
    switch (e) {
      case hn:
        switch (((C = C.type), C)) {
          case o7:
          case s7:
          case i7:
          case c7:
          case d7:
            return C;
          default:
            switch (((C = C && C.$$typeof), C)) {
              case Fm:
              case l7:
              case u7:
              case p7:
              case f7:
              case a7:
                return C;
              default:
                return e;
            }
        }
      case mn:
        return e;
    }
  }
}
c1.ContextConsumer = l7;
c1.ContextProvider = a7;
c1.Element = hn;
c1.ForwardRef = u7;
c1.Fragment = o7;
c1.Lazy = p7;
c1.Memo = f7;
c1.Portal = mn;
c1.Profiler = s7;
c1.StrictMode = i7;
c1.Suspense = c7;
c1.SuspenseList = d7;
c1.isAsyncMode = function () {
  return !1;
};
c1.isConcurrentMode = function () {
  return !1;
};
c1.isContextConsumer = function (C) {
  return G3(C) === l7;
};
c1.isContextProvider = function (C) {
  return G3(C) === a7;
};
c1.isElement = function (C) {
  return typeof C == "object" && C !== null && C.$$typeof === hn;
};
c1.isForwardRef = function (C) {
  return G3(C) === u7;
};
c1.isFragment = function (C) {
  return G3(C) === o7;
};
c1.isLazy = function (C) {
  return G3(C) === p7;
};
c1.isMemo = function (C) {
  return G3(C) === f7;
};
c1.isPortal = function (C) {
  return G3(C) === mn;
};
c1.isProfiler = function (C) {
  return G3(C) === s7;
};
c1.isStrictMode = function (C) {
  return G3(C) === i7;
};
c1.isSuspense = function (C) {
  return G3(C) === c7;
};
c1.isSuspenseList = function (C) {
  return G3(C) === d7;
};
c1.isValidElementType = function (C) {
  return (
    typeof C == "string" ||
    typeof C == "function" ||
    C === o7 ||
    C === s7 ||
    C === i7 ||
    C === c7 ||
    C === d7 ||
    C === Vm ||
    (typeof C == "object" &&
      C !== null &&
      (C.$$typeof === p7 ||
        C.$$typeof === f7 ||
        C.$$typeof === a7 ||
        C.$$typeof === l7 ||
        C.$$typeof === u7 ||
        C.$$typeof === eu ||
        C.getModuleId !== void 0))
  );
};
c1.typeOf = G3;
Cu.exports = c1;
var Eo = Cu.exports;
const Um = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function tu(C) {
  const e = `${C}`.match(Um);
  return (e && e[1]) || "";
}
function nu(C, e = "") {
  return C.displayName || C.name || tu(C) || e;
}
function wo(C, e, t) {
  const n = nu(e);
  return C.displayName || (n !== "" ? `${t}(${n})` : t);
}
function $m(C) {
  if (C != null) {
    if (typeof C == "string") return C;
    if (typeof C == "function") return nu(C, "Component");
    if (typeof C == "object")
      switch (C.$$typeof) {
        case Eo.ForwardRef:
          return wo(C, C.render, "ForwardRef");
        case Eo.Memo:
          return wo(C, C.type, "memo");
        default:
          return;
      }
  }
}
const Zm = Object.freeze(
  Object.defineProperty(
    { __proto__: null, default: $m, getFunctionName: tu },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
function gn(C, e) {
  const t = P({}, e);
  return (
    Object.keys(C).forEach((n) => {
      if (n.toString().match(/^(components|slots)$/)) t[n] = P({}, C[n], t[n]);
      else if (n.toString().match(/^(componentsProps|slotProps)$/)) {
        const r = C[n] || {},
          o = e[n];
        (t[n] = {}),
          !o || !Object.keys(o)
            ? (t[n] = r)
            : !r || !Object.keys(r)
            ? (t[n] = o)
            : ((t[n] = P({}, o)),
              Object.keys(r).forEach((i) => {
                t[n][i] = gn(r[i], o[i]);
              }));
      } else t[n] === void 0 && (t[n] = C[n]);
    }),
    t
  );
}
function ru(C) {
  const { theme: e, name: t, props: n } = C;
  return !e ||
    !e.components ||
    !e.components[t] ||
    !e.components[t].defaultProps
    ? n
    : gn(e.components[t].defaultProps, n);
}
function Wm({ props: C, name: e, defaultTheme: t, themeId: n }) {
  let r = Yl(t);
  return n && (r = r[n] || r), ru({ theme: r, name: e, props: C });
}
const N8 = typeof window < "u" ? L.useLayoutEffect : L.useEffect;
function Km(C, e, t, n, r) {
  const [o, i] = L.useState(() =>
    r && t ? t(C).matches : n ? n(C).matches : e
  );
  return (
    N8(() => {
      let s = !0;
      if (!t) return;
      const a = t(C),
        l = () => {
          s && i(a.matches);
        };
      return (
        l(),
        a.addListener(l),
        () => {
          (s = !1), a.removeListener(l);
        }
      );
    }, [C, t]),
    o
  );
}
const ou = L.useSyncExternalStore;
function Gm(C, e, t, n, r) {
  const o = L.useCallback(() => e, [e]),
    i = L.useMemo(() => {
      if (r && t) return () => t(C).matches;
      if (n !== null) {
        const { matches: c } = n(C);
        return () => c;
      }
      return o;
    }, [o, C, n, r, t]),
    [s, a] = L.useMemo(() => {
      if (t === null) return [o, () => () => {}];
      const c = t(C);
      return [
        () => c.matches,
        (f) => (
          c.addListener(f),
          () => {
            c.removeListener(f);
          }
        ),
      ];
    }, [o, t, C]);
  return ou(a, s, i);
}
function h7(C, e = {}) {
  const t = pn(),
    n = typeof window < "u" && typeof window.matchMedia < "u",
    {
      defaultMatches: r = !1,
      matchMedia: o = n ? window.matchMedia : null,
      ssrMatchMedia: i = null,
      noSsr: s = !1,
    } = ru({ name: "MuiUseMediaQuery", props: e, theme: t });
  let a = typeof C == "function" ? C(t) : C;
  return (
    (a = a.replace(/^@media( ?)/m, "")),
    (ou !== void 0 ? Gm : Km)(a, r, o, i, s)
  );
}
function Qm(C, e = Number.MIN_SAFE_INTEGER, t = Number.MAX_SAFE_INTEGER) {
  return Math.max(e, Math.min(C, t));
}
const Ym = Object.freeze(
  Object.defineProperty({ __proto__: null, default: Qm }, Symbol.toStringTag, {
    value: "Module",
  })
);
function Lo(...C) {
  return C.reduce(
    (e, t) =>
      t == null
        ? e
        : function (...r) {
            e.apply(this, r), t.apply(this, r);
          },
    () => {}
  );
}
function Xm(C, e = 166) {
  let t;
  function n(...r) {
    const o = () => {
      C.apply(this, r);
    };
    clearTimeout(t), (t = setTimeout(o, e));
  }
  return (
    (n.clear = () => {
      clearTimeout(t);
    }),
    n
  );
}
function x2(C) {
  return (C && C.ownerDocument) || document;
}
function L0(C) {
  return x2(C).defaultView || window;
}
function Pe(C, e) {
  typeof C == "function" ? C(e) : C && (C.current = e);
}
let bo = 0;
function qm(C) {
  const [e, t] = L.useState(C),
    n = C || e;
  return (
    L.useEffect(() => {
      e == null && ((bo += 1), t(`mui-${bo}`));
    }, [e]),
    n
  );
}
const To = _C.useId;
function Jm(C) {
  if (To !== void 0) {
    const e = To();
    return C ?? e;
  }
  return qm(C);
}
function iu({ controlled: C, default: e, name: t, state: n = "value" }) {
  const { current: r } = L.useRef(C !== void 0),
    [o, i] = L.useState(e),
    s = r ? C : o,
    a = L.useCallback((l) => {
      r || i(l);
    }, []);
  return [s, a];
}
function J2(C) {
  const e = L.useRef(C);
  return (
    N8(() => {
      e.current = C;
    }),
    L.useRef((...t) => (0, e.current)(...t)).current
  );
}
function p3(...C) {
  return L.useMemo(
    () =>
      C.every((e) => e == null)
        ? null
        : (e) => {
            C.forEach((t) => {
              Pe(t, e);
            });
          },
    C
  );
}
const Po = {};
function Cg(C, e) {
  const t = L.useRef(Po);
  return t.current === Po && (t.current = C(e)), t;
}
const eg = [];
function tg(C) {
  L.useEffect(C, eg);
}
class b0 {
  constructor() {
    (this.currentId = null),
      (this.clear = () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      }),
      (this.disposeEffect = () => this.clear);
  }
  static create() {
    return new b0();
  }
  start(e, t) {
    this.clear(),
      (this.currentId = setTimeout(() => {
        (this.currentId = null), t();
      }, e));
  }
}
function T5() {
  const C = Cg(b0.create).current;
  return tg(C.disposeEffect), C;
}
let m7 = !0,
  ke = !1;
const ng = new b0(),
  rg = {
    text: !0,
    search: !0,
    url: !0,
    tel: !0,
    email: !0,
    password: !0,
    number: !0,
    date: !0,
    month: !0,
    week: !0,
    time: !0,
    datetime: !0,
    "datetime-local": !0,
  };
function og(C) {
  const { type: e, tagName: t } = C;
  return !!(
    (t === "INPUT" && rg[e] && !C.readOnly) ||
    (t === "TEXTAREA" && !C.readOnly) ||
    C.isContentEditable
  );
}
function ig(C) {
  C.metaKey || C.altKey || C.ctrlKey || (m7 = !0);
}
function dC() {
  m7 = !1;
}
function sg() {
  this.visibilityState === "hidden" && ke && (m7 = !0);
}
function ag(C) {
  C.addEventListener("keydown", ig, !0),
    C.addEventListener("mousedown", dC, !0),
    C.addEventListener("pointerdown", dC, !0),
    C.addEventListener("touchstart", dC, !0),
    C.addEventListener("visibilitychange", sg, !0);
}
function lg(C) {
  const { target: e } = C;
  try {
    return e.matches(":focus-visible");
  } catch {}
  return m7 || og(e);
}
function su() {
  const C = L.useCallback((r) => {
      r != null && ag(r.ownerDocument);
    }, []),
    e = L.useRef(!1);
  function t() {
    return e.current
      ? ((ke = !0),
        ng.start(100, () => {
          ke = !1;
        }),
        (e.current = !1),
        !0)
      : !1;
  }
  function n(r) {
    return lg(r) ? ((e.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: e, onFocus: n, onBlur: t, ref: C };
}
function ug(C) {
  const e = C.documentElement.clientWidth;
  return Math.abs(window.innerWidth - e);
}
function g3(C, e, t = void 0) {
  const n = {};
  return (
    Object.keys(C).forEach((r) => {
      n[r] = C[r]
        .reduce((o, i) => {
          if (i) {
            const s = e(i);
            s !== "" && o.push(s), t && t[i] && o.push(t[i]);
          }
          return o;
        }, [])
        .join(" ");
    }),
    n
  );
}
const au = L.createContext(null);
function lu() {
  return L.useContext(au);
}
const cg = typeof Symbol == "function" && Symbol.for,
  dg = cg ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function fg(C, e) {
  return typeof e == "function" ? e(C) : P({}, C, e);
}
function pg(C) {
  const { children: e, theme: t } = C,
    n = lu(),
    r = L.useMemo(() => {
      const o = n === null ? t : fg(n, t);
      return o != null && (o[dg] = n !== null), o;
    }, [t, n]);
  return u.jsx(au.Provider, { value: r, children: e });
}
const hg = ["value"],
  uu = L.createContext();
function mg(C) {
  let { value: e } = C,
    t = X(C, hg);
  return u.jsx(uu.Provider, P({ value: e ?? !0 }, t));
}
const cu = () => {
    const C = L.useContext(uu);
    return C ?? !1;
  },
  ko = {};
function _o(C, e, t, n = !1) {
  return L.useMemo(() => {
    const r = (C && e[C]) || e;
    if (typeof t == "function") {
      const o = t(r),
        i = C ? P({}, e, { [C]: o }) : o;
      return n ? () => i : i;
    }
    return C ? P({}, e, { [C]: t }) : P({}, e, t);
  }, [C, e, t, n]);
}
function gg(C) {
  const { children: e, theme: t, themeId: n } = C,
    r = pn(ko),
    o = lu() || ko,
    i = _o(n, r, t),
    s = _o(n, o, t, !0),
    a = i.direction === "rtl";
  return u.jsx(pg, {
    theme: s,
    children: u.jsx(x0.Provider, {
      value: i,
      children: u.jsx(mg, { value: a, children: e }),
    }),
  });
}
function vg(C, e) {
  return P(
    {
      toolbar: {
        minHeight: 56,
        [C.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [C.up("sm")]: { minHeight: 64 },
      },
    },
    e
  );
}
var M1 = {},
  du = { exports: {} };
(function (C) {
  function e(t) {
    return t && t.__esModule ? t : { default: t };
  }
  (C.exports = e), (C.exports.__esModule = !0), (C.exports.default = C.exports);
})(du);
var fu = du.exports;
const yg = w2(Ip),
  Sg = w2(Ym);
var pu = fu;
Object.defineProperty(M1, "__esModule", { value: !0 });
var h2 = (M1.alpha = vu);
M1.blend = Ig;
M1.colorChannel = void 0;
var xg = (M1.darken = yn);
M1.decomposeColor = $3;
M1.emphasize = yu;
var Ag = (M1.getContrastRatio = Pg);
M1.getLuminance = t9;
M1.hexToRgb = hu;
M1.hslToRgb = gu;
var Eg = (M1.lighten = Sn);
M1.private_safeAlpha = kg;
M1.private_safeColorChannel = void 0;
M1.private_safeDarken = _g;
M1.private_safeEmphasize = Mg;
M1.private_safeLighten = Og;
M1.recomposeColor = q8;
M1.rgbToHex = Tg;
var Oo = pu(yg),
  wg = pu(Sg);
function vn(C, e = 0, t = 1) {
  return (0, wg.default)(C, e, t);
}
function hu(C) {
  C = C.slice(1);
  const e = new RegExp(`.{1,${C.length >= 6 ? 2 : 1}}`, "g");
  let t = C.match(e);
  return (
    t && t[0].length === 1 && (t = t.map((n) => n + n)),
    t
      ? `rgb${t.length === 4 ? "a" : ""}(${t
          .map((n, r) =>
            r < 3
              ? parseInt(n, 16)
              : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function Lg(C) {
  const e = C.toString(16);
  return e.length === 1 ? `0${e}` : e;
}
function $3(C) {
  if (C.type) return C;
  if (C.charAt(0) === "#") return $3(hu(C));
  const e = C.indexOf("("),
    t = C.substring(0, e);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error((0, Oo.default)(9, C));
  let n = C.substring(e + 1, C.length - 1),
    r;
  if (t === "color") {
    if (
      ((n = n.split(" ")),
      (r = n.shift()),
      n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        r
      ) === -1)
    )
      throw new Error((0, Oo.default)(10, r));
  } else n = n.split(",");
  return (
    (n = n.map((o) => parseFloat(o))), { type: t, values: n, colorSpace: r }
  );
}
const mu = (C) => {
  const e = $3(C);
  return e.values
    .slice(0, 3)
    .map((t, n) => (e.type.indexOf("hsl") !== -1 && n !== 0 ? `${t}%` : t))
    .join(" ");
};
M1.colorChannel = mu;
const bg = (C, e) => {
  try {
    return mu(C);
  } catch {
    return C;
  }
};
M1.private_safeColorChannel = bg;
function q8(C) {
  const { type: e, colorSpace: t } = C;
  let { values: n } = C;
  return (
    e.indexOf("rgb") !== -1
      ? (n = n.map((r, o) => (o < 3 ? parseInt(r, 10) : r)))
      : e.indexOf("hsl") !== -1 && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
    e.indexOf("color") !== -1
      ? (n = `${t} ${n.join(" ")}`)
      : (n = `${n.join(", ")}`),
    `${e}(${n})`
  );
}
function Tg(C) {
  if (C.indexOf("#") === 0) return C;
  const { values: e } = $3(C);
  return `#${e.map((t, n) => Lg(n === 3 ? Math.round(255 * t) : t)).join("")}`;
}
function gu(C) {
  C = $3(C);
  const { values: e } = C,
    t = e[0],
    n = e[1] / 100,
    r = e[2] / 100,
    o = n * Math.min(r, 1 - r),
    i = (l, c = (l + t / 30) % 12) =>
      r - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let s = "rgb";
  const a = [
    Math.round(i(0) * 255),
    Math.round(i(8) * 255),
    Math.round(i(4) * 255),
  ];
  return (
    C.type === "hsla" && ((s += "a"), a.push(e[3])), q8({ type: s, values: a })
  );
}
function t9(C) {
  C = $3(C);
  let e = C.type === "hsl" || C.type === "hsla" ? $3(gu(C)).values : C.values;
  return (
    (e = e.map(
      (t) => (
        C.type !== "color" && (t /= 255),
        t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * e[0] + 0.7152 * e[1] + 0.0722 * e[2]).toFixed(3))
  );
}
function Pg(C, e) {
  const t = t9(C),
    n = t9(e);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function vu(C, e) {
  return (
    (C = $3(C)),
    (e = vn(e)),
    (C.type === "rgb" || C.type === "hsl") && (C.type += "a"),
    C.type === "color" ? (C.values[3] = `/${e}`) : (C.values[3] = e),
    q8(C)
  );
}
function kg(C, e, t) {
  try {
    return vu(C, e);
  } catch {
    return C;
  }
}
function yn(C, e) {
  if (((C = $3(C)), (e = vn(e)), C.type.indexOf("hsl") !== -1))
    C.values[2] *= 1 - e;
  else if (C.type.indexOf("rgb") !== -1 || C.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1) C.values[t] *= 1 - e;
  return q8(C);
}
function _g(C, e, t) {
  try {
    return yn(C, e);
  } catch {
    return C;
  }
}
function Sn(C, e) {
  if (((C = $3(C)), (e = vn(e)), C.type.indexOf("hsl") !== -1))
    C.values[2] += (100 - C.values[2]) * e;
  else if (C.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1) C.values[t] += (255 - C.values[t]) * e;
  else if (C.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1) C.values[t] += (1 - C.values[t]) * e;
  return q8(C);
}
function Og(C, e, t) {
  try {
    return Sn(C, e);
  } catch {
    return C;
  }
}
function yu(C, e = 0.15) {
  return t9(C) > 0.5 ? yn(C, e) : Sn(C, e);
}
function Mg(C, e, t) {
  try {
    return yu(C, e);
  } catch {
    return C;
  }
}
function Ig(C, e, t, n = 1) {
  const r = (a, l) =>
      Math.round((a ** (1 / n) * (1 - t) + l ** (1 / n) * t) ** n),
    o = $3(C),
    i = $3(e),
    s = [
      r(o.values[0], i.values[0]),
      r(o.values[1], i.values[1]),
      r(o.values[2], i.values[2]),
    ];
  return q8({ type: "rgb", values: s });
}
const Rg = ["mode", "contrastThreshold", "tonalOffset"],
  Mo = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: t0.white, default: t0.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  fC = {
    text: {
      primary: t0.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: t0.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Io(C, e, t, n) {
  const r = n.light || n,
    o = n.dark || n * 1.5;
  C[e] ||
    (C.hasOwnProperty(t)
      ? (C[e] = C[t])
      : e === "light"
      ? (C.light = Eg(C.main, r))
      : e === "dark" && (C.dark = xg(C.main, o)));
}
function Ng(C = "light") {
  return C === "dark"
    ? { main: K5[200], light: K5[50], dark: K5[400] }
    : { main: K5[700], light: K5[400], dark: K5[800] };
}
function Hg(C = "light") {
  return C === "dark"
    ? { main: W5[200], light: W5[50], dark: W5[400] }
    : { main: W5[500], light: W5[300], dark: W5[700] };
}
function jg(C = "light") {
  return C === "dark"
    ? { main: Z5[500], light: Z5[300], dark: Z5[700] }
    : { main: Z5[700], light: Z5[400], dark: Z5[800] };
}
function Dg(C = "light") {
  return C === "dark"
    ? { main: G5[400], light: G5[300], dark: G5[700] }
    : { main: G5[700], light: G5[500], dark: G5[900] };
}
function Bg(C = "light") {
  return C === "dark"
    ? { main: Q5[400], light: Q5[300], dark: Q5[700] }
    : { main: Q5[800], light: Q5[500], dark: Q5[900] };
}
function zg(C = "light") {
  return C === "dark"
    ? { main: f4[400], light: f4[300], dark: f4[700] }
    : { main: "#ed6c02", light: f4[500], dark: f4[900] };
}
function Fg(C) {
  const {
      mode: e = "light",
      contrastThreshold: t = 3,
      tonalOffset: n = 0.2,
    } = C,
    r = X(C, Rg),
    o = C.primary || Ng(e),
    i = C.secondary || Hg(e),
    s = C.error || jg(e),
    a = C.info || Dg(e),
    l = C.success || Bg(e),
    c = C.warning || zg(e);
  function f(g) {
    return Ag(g, fC.text.primary) >= t ? fC.text.primary : Mo.text.primary;
  }
  const d = ({
      color: g,
      name: w,
      mainShade: h = 500,
      lightShade: p = 300,
      darkShade: m = 700,
    }) => {
      if (
        ((g = P({}, g)),
        !g.main && g[h] && (g.main = g[h]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(I8(11, w ? ` (${w})` : "", h));
      if (typeof g.main != "string")
        throw new Error(I8(12, w ? ` (${w})` : "", JSON.stringify(g.main)));
      return (
        Io(g, "light", p, n),
        Io(g, "dark", m, n),
        g.contrastText || (g.contrastText = f(g.main)),
        g
      );
    },
    S = { dark: fC, light: Mo };
  return S2(
    P(
      {
        common: P({}, t0),
        mode: e,
        primary: d({ color: o, name: "primary" }),
        secondary: d({
          color: i,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: s, name: "error" }),
        warning: d({ color: c, name: "warning" }),
        info: d({ color: a, name: "info" }),
        success: d({ color: l, name: "success" }),
        grey: Mp,
        contrastThreshold: t,
        getContrastText: f,
        augmentColor: d,
        tonalOffset: n,
      },
      S[e]
    ),
    r
  );
}
const Vg = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function Ug(C) {
  return Math.round(C * 1e5) / 1e5;
}
const Ro = { textTransform: "uppercase" },
  No = '"Roboto", "Helvetica", "Arial", sans-serif';
function $g(C, e) {
  const t = typeof e == "function" ? e(C) : e,
    {
      fontFamily: n = No,
      fontSize: r = 14,
      fontWeightLight: o = 300,
      fontWeightRegular: i = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: a = 700,
      htmlFontSize: l = 16,
      allVariants: c,
      pxToRem: f,
    } = t,
    d = X(t, Vg),
    S = r / 14,
    v = f || ((h) => `${(h / l) * S}rem`),
    g = (h, p, m, y, x) =>
      P(
        { fontFamily: n, fontWeight: h, fontSize: v(p), lineHeight: m },
        n === No ? { letterSpacing: `${Ug(y / p)}em` } : {},
        x,
        c
      ),
    w = {
      h1: g(o, 96, 1.167, -1.5),
      h2: g(o, 60, 1.2, -0.5),
      h3: g(i, 48, 1.167, 0),
      h4: g(i, 34, 1.235, 0.25),
      h5: g(i, 24, 1.334, 0),
      h6: g(s, 20, 1.6, 0.15),
      subtitle1: g(i, 16, 1.75, 0.15),
      subtitle2: g(s, 14, 1.57, 0.1),
      body1: g(i, 16, 1.5, 0.15),
      body2: g(i, 14, 1.43, 0.15),
      button: g(s, 14, 1.75, 0.4, Ro),
      caption: g(i, 12, 1.66, 0.4),
      overline: g(i, 12, 2.66, 1, Ro),
      inherit: {
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit",
      },
    };
  return S2(
    P(
      {
        htmlFontSize: l,
        pxToRem: v,
        fontFamily: n,
        fontSize: r,
        fontWeightLight: o,
        fontWeightRegular: i,
        fontWeightMedium: s,
        fontWeightBold: a,
      },
      w
    ),
    d,
    { clone: !1 }
  );
}
const Zg = 0.2,
  Wg = 0.14,
  Kg = 0.12;
function y1(...C) {
  return [
    `${C[0]}px ${C[1]}px ${C[2]}px ${C[3]}px rgba(0,0,0,${Zg})`,
    `${C[4]}px ${C[5]}px ${C[6]}px ${C[7]}px rgba(0,0,0,${Wg})`,
    `${C[8]}px ${C[9]}px ${C[10]}px ${C[11]}px rgba(0,0,0,${Kg})`,
  ].join(",");
}
const Gg = [
    "none",
    y1(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    y1(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    y1(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    y1(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    y1(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    y1(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    y1(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    y1(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    y1(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    y1(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    y1(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    y1(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    y1(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    y1(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    y1(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    y1(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    y1(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    y1(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    y1(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    y1(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    y1(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    y1(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    y1(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    y1(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  Qg = ["duration", "easing", "delay"],
  Yg = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  Su = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Ho(C) {
  return `${Math.round(C)}ms`;
}
function Xg(C) {
  if (!C) return 0;
  const e = C / 36;
  return Math.round((4 + 15 * e ** 0.25 + e / 5) * 10);
}
function qg(C) {
  const e = P({}, Yg, C.easing),
    t = P({}, Su, C.duration);
  return P(
    {
      getAutoHeightDuration: Xg,
      create: (r = ["all"], o = {}) => {
        const {
          duration: i = t.standard,
          easing: s = e.easeInOut,
          delay: a = 0,
        } = o;
        return (
          X(o, Qg),
          (Array.isArray(r) ? r : [r])
            .map(
              (l) =>
                `${l} ${typeof i == "string" ? i : Ho(i)} ${s} ${
                  typeof a == "string" ? a : Ho(a)
                }`
            )
            .join(",")
        );
      },
    },
    C,
    { easing: e, duration: t }
  );
}
const Jg = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  Cv = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function xu(C = {}, ...e) {
  const {
      mixins: t = {},
      palette: n = {},
      transitions: r = {},
      typography: o = {},
    } = C,
    i = X(C, Cv);
  if (C.vars) throw new Error(I8(18));
  const s = Fg(n),
    a = fn(C);
  let l = S2(a, {
    mixins: vg(a.breakpoints, t),
    palette: s,
    shadows: Gg.slice(),
    typography: $g(s, o),
    transitions: qg(r),
    zIndex: P({}, Jg),
  });
  return (
    (l = S2(l, i)),
    (l = e.reduce((c, f) => S2(c, f), l)),
    (l.unstable_sxConfig = P({}, w0, i == null ? void 0 : i.unstable_sxConfig)),
    (l.unstable_sx = function (f) {
      return r7({ sx: f, theme: this });
    }),
    l
  );
}
function jo(C) {
  return String(parseFloat(C)).length === String(C).length;
}
function ev(C) {
  return String(C).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function y5(C) {
  return parseFloat(C);
}
function tv(C) {
  return (e, t) => {
    const n = ev(e);
    if (n === t) return e;
    let r = y5(e);
    n !== "px" && (n === "em" || n === "rem") && (r = y5(e) * y5(C));
    let o = r;
    if (t !== "px")
      if (t === "em") o = r / y5(C);
      else if (t === "rem") o = r / y5(C);
      else return e;
    return parseFloat(o.toFixed(5)) + t;
  };
}
function nv({ size: C, grid: e }) {
  const t = C - (C % e),
    n = t + e;
  return C - t < n - C ? t : n;
}
function rv({ lineHeight: C, pixels: e, htmlFontSize: t }) {
  return e / (C * t);
}
function ov({
  cssProperty: C,
  min: e,
  max: t,
  unit: n = "rem",
  breakpoints: r = [600, 900, 1200],
  transform: o = null,
}) {
  const i = { [C]: `${e}${n}` },
    s = (t - e) / r[r.length - 1];
  return (
    r.forEach((a) => {
      let l = e + s * a;
      o !== null && (l = o(l)),
        (i[`@media (min-width:${a}px)`] = {
          [C]: `${Math.round(l * 1e4) / 1e4}${n}`,
        });
    }),
    i
  );
}
function iv(C, e = {}) {
  const {
      breakpoints: t = ["sm", "md", "lg"],
      disableAlign: n = !1,
      factor: r = 2,
      variants: o = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "caption",
        "button",
        "overline",
      ],
    } = e,
    i = P({}, C);
  i.typography = P({}, i.typography);
  const s = i.typography,
    a = tv(s.htmlFontSize),
    l = t.map((c) => i.breakpoints.values[c]);
  return (
    o.forEach((c) => {
      const f = s[c],
        d = parseFloat(a(f.fontSize, "rem"));
      if (d <= 1) return;
      const S = d,
        v = 1 + (S - 1) / r;
      let { lineHeight: g } = f;
      if (!jo(g) && !n) throw new Error(I8(6));
      jo(g) || (g = parseFloat(a(g, "rem")) / parseFloat(d));
      let w = null;
      n ||
        (w = (h) =>
          nv({
            size: h,
            grid: rv({
              pixels: 4,
              lineHeight: g,
              htmlFontSize: s.htmlFontSize,
            }),
          })),
        (s[c] = P(
          {},
          f,
          ov({
            cssProperty: "fontSize",
            min: v,
            max: S,
            unit: "rem",
            breakpoints: l,
            transform: w,
          })
        ));
    }),
    i
  );
}
const xn = xu();
function h5() {
  const C = Yl(xn);
  return C[n0] || C;
}
function _3({ props: C, name: e }) {
  return Wm({ props: C, name: e, defaultTheme: xn, themeId: n0 });
}
var T0 = {};
const sv = w2(Rp);
var pC = { exports: {} },
  Do;
function av() {
  return (
    Do ||
      ((Do = 1),
      (function (C) {
        function e(t, n) {
          if (t == null) return {};
          var r = {},
            o = Object.keys(t),
            i,
            s;
          for (s = 0; s < o.length; s++)
            (i = o[s]), !(n.indexOf(i) >= 0) && (r[i] = t[i]);
          return r;
        }
        (C.exports = e),
          (C.exports.__esModule = !0),
          (C.exports.default = C.exports);
      })(pC)),
    pC.exports
  );
}
const Au = w2(Bh),
  lv = w2(zh),
  uv = w2(Wh),
  cv = w2(Zm),
  dv = w2(Im),
  fv = w2(Dm);
var J8 = fu;
Object.defineProperty(T0, "__esModule", { value: !0 });
var pv = (T0.default = Tv);
T0.shouldForwardProp = w6;
T0.systemDefaultTheme = void 0;
var R3 = J8(sv),
  _e = J8(av()),
  Bo = xv(Au),
  hv = lv;
J8(uv);
J8(cv);
var mv = J8(dv),
  gv = J8(fv);
const vv = ["ownerState"],
  yv = ["variants"],
  Sv = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Eu(C) {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap(),
    t = new WeakMap();
  return (Eu = function (n) {
    return n ? t : e;
  })(C);
}
function xv(C, e) {
  if (C && C.__esModule) return C;
  if (C === null || (typeof C != "object" && typeof C != "function"))
    return { default: C };
  var t = Eu(e);
  if (t && t.has(C)) return t.get(C);
  var n = { __proto__: null },
    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in C)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(C, o)) {
      var i = r ? Object.getOwnPropertyDescriptor(C, o) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = C[o]);
    }
  return (n.default = C), t && t.set(C, n), n;
}
function Av(C) {
  return Object.keys(C).length === 0;
}
function Ev(C) {
  return typeof C == "string" && C.charCodeAt(0) > 96;
}
function w6(C) {
  return C !== "ownerState" && C !== "theme" && C !== "sx" && C !== "as";
}
const wv = (T0.systemDefaultTheme = (0, mv.default)()),
  Lv = (C) => C && C.charAt(0).toLowerCase() + C.slice(1);
function J0({ defaultTheme: C, theme: e, themeId: t }) {
  return Av(e) ? C : e[t] || e;
}
function bv(C) {
  return C ? (e, t) => t[C] : null;
}
function L6(C, e) {
  let { ownerState: t } = e,
    n = (0, _e.default)(e, vv);
  const r =
    typeof C == "function" ? C((0, R3.default)({ ownerState: t }, n)) : C;
  if (Array.isArray(r))
    return r.flatMap((o) => L6(o, (0, R3.default)({ ownerState: t }, n)));
  if (r && typeof r == "object" && Array.isArray(r.variants)) {
    const { variants: o = [] } = r;
    let s = (0, _e.default)(r, yv);
    return (
      o.forEach((a) => {
        let l = !0;
        typeof a.props == "function"
          ? (l = a.props((0, R3.default)({ ownerState: t }, n, t)))
          : Object.keys(a.props).forEach((c) => {
              (t == null ? void 0 : t[c]) !== a.props[c] &&
                n[c] !== a.props[c] &&
                (l = !1);
            }),
          l &&
            (Array.isArray(s) || (s = [s]),
            s.push(
              typeof a.style == "function"
                ? a.style((0, R3.default)({ ownerState: t }, n, t))
                : a.style
            ));
      }),
      s
    );
  }
  return r;
}
function Tv(C = {}) {
  const {
      themeId: e,
      defaultTheme: t = wv,
      rootShouldForwardProp: n = w6,
      slotShouldForwardProp: r = w6,
    } = C,
    o = (i) =>
      (0, gv.default)(
        (0, R3.default)({}, i, {
          theme: J0((0, R3.default)({}, i, { defaultTheme: t, themeId: e })),
        })
      );
  return (
    (o.__mui_systemSx = !0),
    (i, s = {}) => {
      (0, Bo.internal_processStyles)(i, (x) =>
        x.filter((E) => !(E != null && E.__mui_systemSx))
      );
      const {
          name: a,
          slot: l,
          skipVariantsResolver: c,
          skipSx: f,
          overridesResolver: d = bv(Lv(l)),
        } = s,
        S = (0, _e.default)(s, Sv),
        v = c !== void 0 ? c : (l && l !== "Root" && l !== "root") || !1,
        g = f || !1;
      let w,
        h = w6;
      l === "Root" || l === "root"
        ? (h = n)
        : l
        ? (h = r)
        : Ev(i) && (h = void 0);
      const p = (0, Bo.default)(
          i,
          (0, R3.default)({ shouldForwardProp: h, label: w }, S)
        ),
        m = (x) =>
          (typeof x == "function" && x.__emotion_real !== x) ||
          (0, hv.isPlainObject)(x)
            ? (E) =>
                L6(
                  x,
                  (0, R3.default)({}, E, {
                    theme: J0({ theme: E.theme, defaultTheme: t, themeId: e }),
                  })
                )
            : x,
        y = (x, ...E) => {
          let A = m(x);
          const _ = E ? E.map(m) : [];
          a &&
            d &&
            _.push((O) => {
              const M = J0(
                (0, R3.default)({}, O, { defaultTheme: t, themeId: e })
              );
              if (
                !M.components ||
                !M.components[a] ||
                !M.components[a].styleOverrides
              )
                return null;
              const I = M.components[a].styleOverrides,
                R = {};
              return (
                Object.entries(I).forEach(([B, H]) => {
                  R[B] = L6(H, (0, R3.default)({}, O, { theme: M }));
                }),
                d(O, R)
              );
            }),
            a &&
              !v &&
              _.push((O) => {
                var M;
                const I = J0(
                    (0, R3.default)({}, O, { defaultTheme: t, themeId: e })
                  ),
                  R =
                    I == null ||
                    (M = I.components) == null ||
                    (M = M[a]) == null
                      ? void 0
                      : M.variants;
                return L6(
                  { variants: R },
                  (0, R3.default)({}, O, { theme: I })
                );
              }),
            g || _.push(o);
          const T = _.length - E.length;
          if (Array.isArray(x) && T > 0) {
            const O = new Array(T).fill("");
            (A = [...x, ...O]), (A.raw = [...x.raw, ...O]);
          }
          const b = p(A, ..._);
          return i.muiName && (b.muiName = i.muiName), b;
        };
      return p.withConfig && (y.withConfig = p.withConfig), y;
    }
  );
}
function Pv(C) {
  return C !== "ownerState" && C !== "theme" && C !== "sx" && C !== "as";
}
const An = (C) => Pv(C) && C !== "classes",
  a1 = pv({ themeId: n0, defaultTheme: xn, rootShouldForwardProp: An }),
  kv = ["theme"];
function _v(C) {
  let { theme: e } = C,
    t = X(C, kv);
  const n = e[n0];
  return u.jsx(gg, P({}, t, { themeId: n ? n0 : void 0, theme: n || e }));
}
const zo = (C) => {
  let e;
  return (
    C < 1 ? (e = 5.11916 * C ** 2) : (e = 4.5 * Math.log(C + 1) + 2),
    (e / 100).toFixed(2)
  );
};
var p1 = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var En = Symbol.for("react.element"),
  wn = Symbol.for("react.portal"),
  g7 = Symbol.for("react.fragment"),
  v7 = Symbol.for("react.strict_mode"),
  y7 = Symbol.for("react.profiler"),
  S7 = Symbol.for("react.provider"),
  x7 = Symbol.for("react.context"),
  Ov = Symbol.for("react.server_context"),
  A7 = Symbol.for("react.forward_ref"),
  E7 = Symbol.for("react.suspense"),
  w7 = Symbol.for("react.suspense_list"),
  L7 = Symbol.for("react.memo"),
  b7 = Symbol.for("react.lazy"),
  Mv = Symbol.for("react.offscreen"),
  wu;
wu = Symbol.for("react.module.reference");
function Q3(C) {
  if (typeof C == "object" && C !== null) {
    var e = C.$$typeof;
    switch (e) {
      case En:
        switch (((C = C.type), C)) {
          case g7:
          case y7:
          case v7:
          case E7:
          case w7:
            return C;
          default:
            switch (((C = C && C.$$typeof), C)) {
              case Ov:
              case x7:
              case A7:
              case b7:
              case L7:
              case S7:
                return C;
              default:
                return e;
            }
        }
      case wn:
        return e;
    }
  }
}
p1.ContextConsumer = x7;
p1.ContextProvider = S7;
p1.Element = En;
p1.ForwardRef = A7;
p1.Fragment = g7;
p1.Lazy = b7;
p1.Memo = L7;
p1.Portal = wn;
p1.Profiler = y7;
p1.StrictMode = v7;
p1.Suspense = E7;
p1.SuspenseList = w7;
p1.isAsyncMode = function () {
  return !1;
};
p1.isConcurrentMode = function () {
  return !1;
};
p1.isContextConsumer = function (C) {
  return Q3(C) === x7;
};
p1.isContextProvider = function (C) {
  return Q3(C) === S7;
};
p1.isElement = function (C) {
  return typeof C == "object" && C !== null && C.$$typeof === En;
};
p1.isForwardRef = function (C) {
  return Q3(C) === A7;
};
p1.isFragment = function (C) {
  return Q3(C) === g7;
};
p1.isLazy = function (C) {
  return Q3(C) === b7;
};
p1.isMemo = function (C) {
  return Q3(C) === L7;
};
p1.isPortal = function (C) {
  return Q3(C) === wn;
};
p1.isProfiler = function (C) {
  return Q3(C) === y7;
};
p1.isStrictMode = function (C) {
  return Q3(C) === v7;
};
p1.isSuspense = function (C) {
  return Q3(C) === E7;
};
p1.isSuspenseList = function (C) {
  return Q3(C) === w7;
};
p1.isValidElementType = function (C) {
  return (
    typeof C == "string" ||
    typeof C == "function" ||
    C === g7 ||
    C === y7 ||
    C === v7 ||
    C === E7 ||
    C === w7 ||
    C === Mv ||
    (typeof C == "object" &&
      C !== null &&
      (C.$$typeof === b7 ||
        C.$$typeof === L7 ||
        C.$$typeof === S7 ||
        C.$$typeof === x7 ||
        C.$$typeof === A7 ||
        C.$$typeof === wu ||
        C.getModuleId !== void 0))
  );
};
p1.typeOf = Q3;
function Ln(C) {
  return _3;
}
function Oe(C, e) {
  return (
    (Oe = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Oe(C, e)
  );
}
function Lu(C, e) {
  (C.prototype = Object.create(e.prototype)),
    (C.prototype.constructor = C),
    Oe(C, e);
}
const Fo = { disabled: !1 },
  n9 = p2.createContext(null);
var Iv = function (e) {
    return e.scrollTop;
  },
  w4 = "unmounted",
  A5 = "exited",
  E5 = "entering",
  C8 = "entered",
  Me = "exiting",
  Y3 = (function (C) {
    Lu(e, C);
    function e(n, r) {
      var o;
      o = C.call(this, n, r) || this;
      var i = r,
        s = i && !i.isMounting ? n.enter : n.appear,
        a;
      return (
        (o.appearStatus = null),
        n.in
          ? s
            ? ((a = A5), (o.appearStatus = E5))
            : (a = C8)
          : n.unmountOnExit || n.mountOnEnter
          ? (a = w4)
          : (a = A5),
        (o.state = { status: a }),
        (o.nextCallback = null),
        o
      );
    }
    e.getDerivedStateFromProps = function (r, o) {
      var i = r.in;
      return i && o.status === w4 ? { status: A5 } : null;
    };
    var t = e.prototype;
    return (
      (t.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (t.componentDidUpdate = function (r) {
        var o = null;
        if (r !== this.props) {
          var i = this.state.status;
          this.props.in
            ? i !== E5 && i !== C8 && (o = E5)
            : (i === E5 || i === C8) && (o = Me);
        }
        this.updateStatus(!1, o);
      }),
      (t.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (t.getTimeouts = function () {
        var r = this.props.timeout,
          o,
          i,
          s;
        return (
          (o = i = s = r),
          r != null &&
            typeof r != "number" &&
            ((o = r.exit),
            (i = r.enter),
            (s = r.appear !== void 0 ? r.appear : i)),
          { exit: o, enter: i, appear: s }
        );
      }),
      (t.updateStatus = function (r, o) {
        if ((r === void 0 && (r = !1), o !== null))
          if ((this.cancelNextCallback(), o === E5)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var i = this.props.nodeRef
                ? this.props.nodeRef.current
                : X0.findDOMNode(this);
              i && Iv(i);
            }
            this.performEnter(r);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === A5 &&
            this.setState({ status: w4 });
      }),
      (t.performEnter = function (r) {
        var o = this,
          i = this.props.enter,
          s = this.context ? this.context.isMounting : r,
          a = this.props.nodeRef ? [s] : [X0.findDOMNode(this), s],
          l = a[0],
          c = a[1],
          f = this.getTimeouts(),
          d = s ? f.appear : f.enter;
        if ((!r && !i) || Fo.disabled) {
          this.safeSetState({ status: C8 }, function () {
            o.props.onEntered(l);
          });
          return;
        }
        this.props.onEnter(l, c),
          this.safeSetState({ status: E5 }, function () {
            o.props.onEntering(l, c),
              o.onTransitionEnd(d, function () {
                o.safeSetState({ status: C8 }, function () {
                  o.props.onEntered(l, c);
                });
              });
          });
      }),
      (t.performExit = function () {
        var r = this,
          o = this.props.exit,
          i = this.getTimeouts(),
          s = this.props.nodeRef ? void 0 : X0.findDOMNode(this);
        if (!o || Fo.disabled) {
          this.safeSetState({ status: A5 }, function () {
            r.props.onExited(s);
          });
          return;
        }
        this.props.onExit(s),
          this.safeSetState({ status: Me }, function () {
            r.props.onExiting(s),
              r.onTransitionEnd(i.exit, function () {
                r.safeSetState({ status: A5 }, function () {
                  r.props.onExited(s);
                });
              });
          });
      }),
      (t.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (t.safeSetState = function (r, o) {
        (o = this.setNextCallback(o)), this.setState(r, o);
      }),
      (t.setNextCallback = function (r) {
        var o = this,
          i = !0;
        return (
          (this.nextCallback = function (s) {
            i && ((i = !1), (o.nextCallback = null), r(s));
          }),
          (this.nextCallback.cancel = function () {
            i = !1;
          }),
          this.nextCallback
        );
      }),
      (t.onTransitionEnd = function (r, o) {
        this.setNextCallback(o);
        var i = this.props.nodeRef
            ? this.props.nodeRef.current
            : X0.findDOMNode(this),
          s = r == null && !this.props.addEndListener;
        if (!i || s) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var a = this.props.nodeRef
              ? [this.nextCallback]
              : [i, this.nextCallback],
            l = a[0],
            c = a[1];
          this.props.addEndListener(l, c);
        }
        r != null && setTimeout(this.nextCallback, r);
      }),
      (t.render = function () {
        var r = this.state.status;
        if (r === w4) return null;
        var o = this.props,
          i = o.children;
        o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef;
        var s = X(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return p2.createElement(
          n9.Provider,
          { value: null },
          typeof i == "function"
            ? i(r, s)
            : p2.cloneElement(p2.Children.only(i), s)
        );
      }),
      e
    );
  })(p2.Component);
Y3.contextType = n9;
Y3.propTypes = {};
function Y5() {}
Y3.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Y5,
  onEntering: Y5,
  onEntered: Y5,
  onExit: Y5,
  onExiting: Y5,
  onExited: Y5,
};
Y3.UNMOUNTED = w4;
Y3.EXITED = A5;
Y3.ENTERING = E5;
Y3.ENTERED = C8;
Y3.EXITING = Me;
function Rv(C) {
  if (C === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return C;
}
function bn(C, e) {
  var t = function (o) {
      return e && L.isValidElement(o) ? e(o) : o;
    },
    n = Object.create(null);
  return (
    C &&
      L.Children.map(C, function (r) {
        return r;
      }).forEach(function (r) {
        n[r.key] = t(r);
      }),
    n
  );
}
function Nv(C, e) {
  (C = C || {}), (e = e || {});
  function t(c) {
    return c in e ? e[c] : C[c];
  }
  var n = Object.create(null),
    r = [];
  for (var o in C) o in e ? r.length && ((n[o] = r), (r = [])) : r.push(o);
  var i,
    s = {};
  for (var a in e) {
    if (n[a])
      for (i = 0; i < n[a].length; i++) {
        var l = n[a][i];
        s[n[a][i]] = t(l);
      }
    s[a] = t(a);
  }
  for (i = 0; i < r.length; i++) s[r[i]] = t(r[i]);
  return s;
}
function P5(C, e, t) {
  return t[e] != null ? t[e] : C.props[e];
}
function Hv(C, e) {
  return bn(C.children, function (t) {
    return L.cloneElement(t, {
      onExited: e.bind(null, t),
      in: !0,
      appear: P5(t, "appear", C),
      enter: P5(t, "enter", C),
      exit: P5(t, "exit", C),
    });
  });
}
function jv(C, e, t) {
  var n = bn(C.children),
    r = Nv(e, n);
  return (
    Object.keys(r).forEach(function (o) {
      var i = r[o];
      if (L.isValidElement(i)) {
        var s = o in e,
          a = o in n,
          l = e[o],
          c = L.isValidElement(l) && !l.props.in;
        a && (!s || c)
          ? (r[o] = L.cloneElement(i, {
              onExited: t.bind(null, i),
              in: !0,
              exit: P5(i, "exit", C),
              enter: P5(i, "enter", C),
            }))
          : !a && s && !c
          ? (r[o] = L.cloneElement(i, { in: !1 }))
          : a &&
            s &&
            L.isValidElement(l) &&
            (r[o] = L.cloneElement(i, {
              onExited: t.bind(null, i),
              in: l.props.in,
              exit: P5(i, "exit", C),
              enter: P5(i, "enter", C),
            }));
      }
    }),
    r
  );
}
var Dv =
    Object.values ||
    function (C) {
      return Object.keys(C).map(function (e) {
        return C[e];
      });
    },
  Bv = {
    component: "div",
    childFactory: function (e) {
      return e;
    },
  },
  Tn = (function (C) {
    Lu(e, C);
    function e(n, r) {
      var o;
      o = C.call(this, n, r) || this;
      var i = o.handleExited.bind(Rv(o));
      return (
        (o.state = {
          contextValue: { isMounting: !0 },
          handleExited: i,
          firstRender: !0,
        }),
        o
      );
    }
    var t = e.prototype;
    return (
      (t.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (t.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (e.getDerivedStateFromProps = function (r, o) {
        var i = o.children,
          s = o.handleExited,
          a = o.firstRender;
        return { children: a ? Hv(r, s) : jv(r, i, s), firstRender: !1 };
      }),
      (t.handleExited = function (r, o) {
        var i = bn(this.props.children);
        r.key in i ||
          (r.props.onExited && r.props.onExited(o),
          this.mounted &&
            this.setState(function (s) {
              var a = P({}, s.children);
              return delete a[r.key], { children: a };
            }));
      }),
      (t.render = function () {
        var r = this.props,
          o = r.component,
          i = r.childFactory,
          s = X(r, ["component", "childFactory"]),
          a = this.state.contextValue,
          l = Dv(this.state.children).map(i);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          o === null
            ? p2.createElement(n9.Provider, { value: a }, l)
            : p2.createElement(
                n9.Provider,
                { value: a },
                p2.createElement(o, s, l)
              )
        );
      }),
      e
    );
  })(p2.Component);
Tn.propTypes = {};
Tn.defaultProps = Bv;
const Pn = (C) => C.scrollTop;
function c5(C, e) {
  var t, n;
  const { timeout: r, easing: o, style: i = {} } = C;
  return {
    duration:
      (t = i.transitionDuration) != null
        ? t
        : typeof r == "number"
        ? r
        : r[e.mode] || 0,
    easing:
      (n = i.transitionTimingFunction) != null
        ? n
        : typeof o == "object"
        ? o[e.mode]
        : o,
    delay: i.transitionDelay,
  };
}
function zv(C) {
  return h3("MuiCollapse", C);
}
m3("MuiCollapse", [
  "root",
  "horizontal",
  "vertical",
  "entered",
  "hidden",
  "wrapper",
  "wrapperInner",
]);
const Fv = [
    "addEndListener",
    "children",
    "className",
    "collapsedSize",
    "component",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "orientation",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  Vv = (C) => {
    const { orientation: e, classes: t } = C,
      n = {
        root: ["root", `${e}`],
        entered: ["entered"],
        hidden: ["hidden"],
        wrapper: ["wrapper", `${e}`],
        wrapperInner: ["wrapperInner", `${e}`],
      };
    return g3(n, zv, t);
  },
  Uv = a1("div", {
    name: "MuiCollapse",
    slot: "Root",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [
        e.root,
        e[t.orientation],
        t.state === "entered" && e.entered,
        t.state === "exited" && !t.in && t.collapsedSize === "0px" && e.hidden,
      ];
    },
  })(({ theme: C, ownerState: e }) =>
    P(
      {
        height: 0,
        overflow: "hidden",
        transition: C.transitions.create("height"),
      },
      e.orientation === "horizontal" && {
        height: "auto",
        width: 0,
        transition: C.transitions.create("width"),
      },
      e.state === "entered" &&
        P(
          { height: "auto", overflow: "visible" },
          e.orientation === "horizontal" && { width: "auto" }
        ),
      e.state === "exited" &&
        !e.in &&
        e.collapsedSize === "0px" && { visibility: "hidden" }
    )
  ),
  $v = a1("div", {
    name: "MuiCollapse",
    slot: "Wrapper",
    overridesResolver: (C, e) => e.wrapper,
  })(({ ownerState: C }) =>
    P(
      { display: "flex", width: "100%" },
      C.orientation === "horizontal" && { width: "auto", height: "100%" }
    )
  ),
  Zv = a1("div", {
    name: "MuiCollapse",
    slot: "WrapperInner",
    overridesResolver: (C, e) => e.wrapperInner,
  })(({ ownerState: C }) =>
    P(
      { width: "100%" },
      C.orientation === "horizontal" && { width: "auto", height: "100%" }
    )
  ),
  bu = L.forwardRef(function (e, t) {
    const n = _3({ props: e, name: "MuiCollapse" }),
      {
        addEndListener: r,
        children: o,
        className: i,
        collapsedSize: s = "0px",
        component: a,
        easing: l,
        in: c,
        onEnter: f,
        onEntered: d,
        onEntering: S,
        onExit: v,
        onExited: g,
        onExiting: w,
        orientation: h = "vertical",
        style: p,
        timeout: m = Su.standard,
        TransitionComponent: y = Y3,
      } = n,
      x = X(n, Fv),
      E = P({}, n, { orientation: h, collapsedSize: s }),
      A = Vv(E),
      _ = h5(),
      T = T5(),
      b = L.useRef(null),
      O = L.useRef(),
      M = typeof s == "number" ? `${s}px` : s,
      I = h === "horizontal",
      R = I ? "width" : "height",
      B = L.useRef(null),
      H = p3(t, B),
      D = (U) => (n1) => {
        if (U) {
          const s1 = B.current;
          n1 === void 0 ? U(s1) : U(s1, n1);
        }
      },
      k = () => (b.current ? b.current[I ? "clientWidth" : "clientHeight"] : 0),
      N = D((U, n1) => {
        b.current && I && (b.current.style.position = "absolute"),
          (U.style[R] = M),
          f && f(U, n1);
      }),
      F = D((U, n1) => {
        const s1 = k();
        b.current && I && (b.current.style.position = "");
        const { duration: r1, easing: z1 } = c5(
          { style: p, timeout: m, easing: l },
          { mode: "enter" }
        );
        if (m === "auto") {
          const F1 = _.transitions.getAutoHeightDuration(s1);
          (U.style.transitionDuration = `${F1}ms`), (O.current = F1);
        } else
          U.style.transitionDuration = typeof r1 == "string" ? r1 : `${r1}ms`;
        (U.style[R] = `${s1}px`),
          (U.style.transitionTimingFunction = z1),
          S && S(U, n1);
      }),
      Z = D((U, n1) => {
        (U.style[R] = "auto"), d && d(U, n1);
      }),
      Q = D((U) => {
        (U.style[R] = `${k()}px`), v && v(U);
      }),
      h1 = D(g),
      J = D((U) => {
        const n1 = k(),
          { duration: s1, easing: r1 } = c5(
            { style: p, timeout: m, easing: l },
            { mode: "exit" }
          );
        if (m === "auto") {
          const z1 = _.transitions.getAutoHeightDuration(n1);
          (U.style.transitionDuration = `${z1}ms`), (O.current = z1);
        } else
          U.style.transitionDuration = typeof s1 == "string" ? s1 : `${s1}ms`;
        (U.style[R] = M), (U.style.transitionTimingFunction = r1), w && w(U);
      }),
      C1 = (U) => {
        m === "auto" && T.start(O.current || 0, U), r && r(B.current, U);
      };
    return u.jsx(
      y,
      P(
        {
          in: c,
          onEnter: N,
          onEntered: Z,
          onEntering: F,
          onExit: Q,
          onExited: h1,
          onExiting: J,
          addEndListener: C1,
          nodeRef: B,
          timeout: m === "auto" ? null : m,
        },
        x,
        {
          children: (U, n1) =>
            u.jsx(
              Uv,
              P(
                {
                  as: a,
                  className: e1(
                    A.root,
                    i,
                    {
                      entered: A.entered,
                      exited: !c && M === "0px" && A.hidden,
                    }[U]
                  ),
                  style: P({ [I ? "minWidth" : "minHeight"]: M }, p),
                  ref: H,
                },
                n1,
                {
                  ownerState: P({}, E, { state: U }),
                  children: u.jsx($v, {
                    ownerState: P({}, E, { state: U }),
                    className: A.wrapper,
                    ref: b,
                    children: u.jsx(Zv, {
                      ownerState: P({}, E, { state: U }),
                      className: A.wrapperInner,
                      children: o,
                    }),
                  }),
                }
              )
            ),
        }
      )
    );
  });
bu.muiSupportAuto = !0;
function Wv(C) {
  return h3("MuiPaper", C);
}
m3("MuiPaper", [
  "root",
  "rounded",
  "outlined",
  "elevation",
  "elevation0",
  "elevation1",
  "elevation2",
  "elevation3",
  "elevation4",
  "elevation5",
  "elevation6",
  "elevation7",
  "elevation8",
  "elevation9",
  "elevation10",
  "elevation11",
  "elevation12",
  "elevation13",
  "elevation14",
  "elevation15",
  "elevation16",
  "elevation17",
  "elevation18",
  "elevation19",
  "elevation20",
  "elevation21",
  "elevation22",
  "elevation23",
  "elevation24",
]);
const Kv = ["className", "component", "elevation", "square", "variant"],
  Gv = (C) => {
    const { square: e, elevation: t, variant: n, classes: r } = C,
      o = {
        root: [
          "root",
          n,
          !e && "rounded",
          n === "elevation" && `elevation${t}`,
        ],
      };
    return g3(o, Wv, r);
  },
  Qv = a1("div", {
    name: "MuiPaper",
    slot: "Root",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [
        e.root,
        e[t.variant],
        !t.square && e.rounded,
        t.variant === "elevation" && e[`elevation${t.elevation}`],
      ];
    },
  })(({ theme: C, ownerState: e }) => {
    var t;
    return P(
      {
        backgroundColor: (C.vars || C).palette.background.paper,
        color: (C.vars || C).palette.text.primary,
        transition: C.transitions.create("box-shadow"),
      },
      !e.square && { borderRadius: C.shape.borderRadius },
      e.variant === "outlined" && {
        border: `1px solid ${(C.vars || C).palette.divider}`,
      },
      e.variant === "elevation" &&
        P(
          { boxShadow: (C.vars || C).shadows[e.elevation] },
          !C.vars &&
            C.palette.mode === "dark" && {
              backgroundImage: `linear-gradient(${h2(
                "#fff",
                zo(e.elevation)
              )}, ${h2("#fff", zo(e.elevation))})`,
            },
          C.vars && {
            backgroundImage:
              (t = C.vars.overlays) == null ? void 0 : t[e.elevation],
          }
        )
    );
  }),
  Tu = L.forwardRef(function (e, t) {
    const n = _3({ props: e, name: "MuiPaper" }),
      {
        className: r,
        component: o = "div",
        elevation: i = 1,
        square: s = !1,
        variant: a = "elevation",
      } = n,
      l = X(n, Kv),
      c = P({}, n, { component: o, elevation: i, square: s, variant: a }),
      f = Gv(c);
    return u.jsx(
      Qv,
      P({ as: o, ownerState: c, className: e1(f.root, r), ref: t }, l)
    );
  }),
  Pu = L.createContext({});
function Yv(C) {
  return typeof C == "string";
}
function f8(C, e, t) {
  return C === void 0 || Yv(C)
    ? e
    : P({}, e, { ownerState: P({}, e.ownerState, t) });
}
const Xv = { disableDefaultClasses: !1 },
  qv = L.createContext(Xv);
function Jv(C) {
  const { disableDefaultClasses: e } = L.useContext(qv);
  return (t) => (e ? "" : C(t));
}
function ku(C, e = []) {
  if (C === void 0) return {};
  const t = {};
  return (
    Object.keys(C)
      .filter(
        (n) =>
          n.match(/^on[A-Z]/) && typeof C[n] == "function" && !e.includes(n)
      )
      .forEach((n) => {
        t[n] = C[n];
      }),
    t
  );
}
function _u(C, e, t) {
  return typeof C == "function" ? C(e, t) : C;
}
function Vo(C) {
  if (C === void 0) return {};
  const e = {};
  return (
    Object.keys(C)
      .filter((t) => !(t.match(/^on[A-Z]/) && typeof C[t] == "function"))
      .forEach((t) => {
        e[t] = C[t];
      }),
    e
  );
}
function Ou(C) {
  const {
    getSlotProps: e,
    additionalProps: t,
    externalSlotProps: n,
    externalForwardedProps: r,
    className: o,
  } = C;
  if (!e) {
    const S = e1(
        t == null ? void 0 : t.className,
        o,
        r == null ? void 0 : r.className,
        n == null ? void 0 : n.className
      ),
      v = P(
        {},
        t == null ? void 0 : t.style,
        r == null ? void 0 : r.style,
        n == null ? void 0 : n.style
      ),
      g = P({}, t, r, n);
    return (
      S.length > 0 && (g.className = S),
      Object.keys(v).length > 0 && (g.style = v),
      { props: g, internalRef: void 0 }
    );
  }
  const i = ku(P({}, r, n)),
    s = Vo(n),
    a = Vo(r),
    l = e(i),
    c = e1(
      l == null ? void 0 : l.className,
      t == null ? void 0 : t.className,
      o,
      r == null ? void 0 : r.className,
      n == null ? void 0 : n.className
    ),
    f = P(
      {},
      l == null ? void 0 : l.style,
      t == null ? void 0 : t.style,
      r == null ? void 0 : r.style,
      n == null ? void 0 : n.style
    ),
    d = P({}, l, t, a, s);
  return (
    c.length > 0 && (d.className = c),
    Object.keys(f).length > 0 && (d.style = f),
    { props: d, internalRef: l.ref }
  );
}
const Cy = [
  "elementType",
  "externalSlotProps",
  "ownerState",
  "skipResolvingSlotProps",
];
function Ie(C) {
  var e;
  const {
      elementType: t,
      externalSlotProps: n,
      ownerState: r,
      skipResolvingSlotProps: o = !1,
    } = C,
    i = X(C, Cy),
    s = o ? {} : _u(n, r),
    { props: a, internalRef: l } = Ou(P({}, i, { externalSlotProps: s })),
    c = p3(
      l,
      s == null ? void 0 : s.ref,
      (e = C.additionalProps) == null ? void 0 : e.ref
    );
  return f8(t, P({}, a, { ref: c }), r);
}
const ey = [
    "className",
    "elementType",
    "ownerState",
    "externalForwardedProps",
    "getSlotOwnerState",
    "internalForwardedProps",
  ],
  ty = ["component", "slots", "slotProps"],
  ny = ["component"];
function ry(C, e) {
  const {
      className: t,
      elementType: n,
      ownerState: r,
      externalForwardedProps: o,
      getSlotOwnerState: i,
      internalForwardedProps: s,
    } = e,
    a = X(e, ey),
    {
      component: l,
      slots: c = { [C]: void 0 },
      slotProps: f = { [C]: void 0 },
    } = o;
  X(o, ty);
  const d = c[C] || n,
    S = _u(f[C], r),
    v = Ou(
      P({ className: t }, a, {
        externalForwardedProps: void 0,
        externalSlotProps: S,
      })
    ),
    {
      props: { component: g },
      internalRef: w,
    } = v,
    h = X(v.props, ny),
    p = p3(w, S == null ? void 0 : S.ref, e.ref),
    m = i ? i(h) : {},
    y = P({}, r, m),
    x = g,
    E = f8(
      d,
      P({}, C === "root", !c[C] && s, h, x && { as: x }, { ref: p }),
      y
    );
  return (
    Object.keys(m).forEach((A) => {
      delete E[A];
    }),
    [d, E]
  );
}
function oy(C) {
  return h3("MuiAccordion", C);
}
const C6 = m3("MuiAccordion", [
    "root",
    "rounded",
    "expanded",
    "disabled",
    "gutters",
    "region",
  ]),
  iy = [
    "children",
    "className",
    "defaultExpanded",
    "disabled",
    "disableGutters",
    "expanded",
    "onChange",
    "square",
    "slots",
    "slotProps",
    "TransitionComponent",
    "TransitionProps",
  ],
  sy = Ln(),
  ay = (C) => {
    const {
      classes: e,
      square: t,
      expanded: n,
      disabled: r,
      disableGutters: o,
    } = C;
    return g3(
      {
        root: [
          "root",
          !t && "rounded",
          n && "expanded",
          r && "disabled",
          !o && "gutters",
        ],
        region: ["region"],
      },
      oy,
      e
    );
  },
  ly = a1(Tu, {
    name: "MuiAccordion",
    slot: "Root",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [
        { [`& .${C6.region}`]: e.region },
        e.root,
        !t.square && e.rounded,
        !t.disableGutters && e.gutters,
      ];
    },
  })(
    ({ theme: C }) => {
      const e = { duration: C.transitions.duration.shortest };
      return {
        position: "relative",
        transition: C.transitions.create(["margin"], e),
        overflowAnchor: "none",
        "&::before": {
          position: "absolute",
          left: 0,
          top: -1,
          right: 0,
          height: 1,
          content: '""',
          opacity: 1,
          backgroundColor: (C.vars || C).palette.divider,
          transition: C.transitions.create(["opacity", "background-color"], e),
        },
        "&:first-of-type": { "&::before": { display: "none" } },
        [`&.${C6.expanded}`]: {
          "&::before": { opacity: 0 },
          "&:first-of-type": { marginTop: 0 },
          "&:last-of-type": { marginBottom: 0 },
          "& + &": { "&::before": { display: "none" } },
        },
        [`&.${C6.disabled}`]: {
          backgroundColor: (C.vars || C).palette.action.disabledBackground,
        },
      };
    },
    ({ theme: C }) => ({
      variants: [
        {
          props: (e) => !e.square,
          style: {
            borderRadius: 0,
            "&:first-of-type": {
              borderTopLeftRadius: (C.vars || C).shape.borderRadius,
              borderTopRightRadius: (C.vars || C).shape.borderRadius,
            },
            "&:last-of-type": {
              borderBottomLeftRadius: (C.vars || C).shape.borderRadius,
              borderBottomRightRadius: (C.vars || C).shape.borderRadius,
              "@supports (-ms-ime-align: auto)": {
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
              },
            },
          },
        },
        {
          props: (e) => !e.disableGutters,
          style: { [`&.${C6.expanded}`]: { margin: "16px 0" } },
        },
      ],
    })
  ),
  uy = L.forwardRef(function (e, t) {
    const n = sy({ props: e, name: "MuiAccordion" }),
      {
        children: r,
        className: o,
        defaultExpanded: i = !1,
        disabled: s = !1,
        disableGutters: a = !1,
        expanded: l,
        onChange: c,
        square: f = !1,
        slots: d = {},
        slotProps: S = {},
        TransitionComponent: v,
        TransitionProps: g,
      } = n,
      w = X(n, iy),
      [h, p] = iu({
        controlled: l,
        default: i,
        name: "Accordion",
        state: "expanded",
      }),
      m = L.useCallback(
        (I) => {
          p(!h), c && c(I, !h);
        },
        [h, c, p]
      ),
      [y, ...x] = L.Children.toArray(r),
      E = L.useMemo(
        () => ({ expanded: h, disabled: s, disableGutters: a, toggle: m }),
        [h, s, a, m]
      ),
      A = P({}, n, { square: f, disabled: s, disableGutters: a, expanded: h }),
      _ = ay(A),
      T = P({ transition: v }, d),
      b = P({ transition: g }, S),
      [O, M] = ry("transition", {
        elementType: bu,
        externalForwardedProps: { slots: T, slotProps: b },
        ownerState: A,
      });
    return u.jsxs(
      ly,
      P({ className: e1(_.root, o), ref: t, ownerState: A, square: f }, w, {
        children: [
          u.jsx(Pu.Provider, { value: E, children: y }),
          u.jsx(
            O,
            P({ in: h, timeout: "auto" }, M, {
              children: u.jsx("div", {
                "aria-labelledby": y.props.id,
                id: y.props["aria-controls"],
                role: "region",
                className: _.region,
                children: x,
              }),
            })
          ),
        ],
      })
    );
  });
function cy(C) {
  return h3("MuiAccordionDetails", C);
}
m3("MuiAccordionDetails", ["root"]);
const dy = ["className"],
  fy = Ln(),
  py = (C) => {
    const { classes: e } = C;
    return g3({ root: ["root"] }, cy, e);
  },
  hy = a1("div", {
    name: "MuiAccordionDetails",
    slot: "Root",
    overridesResolver: (C, e) => e.root,
  })(({ theme: C }) => ({ padding: C.spacing(1, 2, 2) })),
  my = L.forwardRef(function (e, t) {
    const n = fy({ props: e, name: "MuiAccordionDetails" }),
      { className: r } = n,
      o = X(n, dy),
      i = n,
      s = py(i);
    return u.jsx(hy, P({ className: e1(s.root, r), ref: t, ownerState: i }, o));
  });
function gy(C) {
  const {
      className: e,
      classes: t,
      pulsate: n = !1,
      rippleX: r,
      rippleY: o,
      rippleSize: i,
      in: s,
      onExited: a,
      timeout: l,
    } = C,
    [c, f] = L.useState(!1),
    d = e1(e, t.ripple, t.rippleVisible, n && t.ripplePulsate),
    S = { width: i, height: i, top: -(i / 2) + o, left: -(i / 2) + r },
    v = e1(t.child, c && t.childLeaving, n && t.childPulsate);
  return (
    !s && !c && f(!0),
    L.useEffect(() => {
      if (!s && a != null) {
        const g = setTimeout(a, l);
        return () => {
          clearTimeout(g);
        };
      }
    }, [a, s, l]),
    u.jsx("span", {
      className: d,
      style: S,
      children: u.jsx("span", { className: v }),
    })
  );
}
const N3 = m3("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  vy = ["center", "classes", "className"];
let T7 = (C) => C,
  Uo,
  $o,
  Zo,
  Wo;
const Re = 550,
  yy = 80,
  Sy = X9(
    Uo ||
      (Uo = T7`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  xy = X9(
    $o ||
      ($o = T7`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  Ay = X9(
    Zo ||
      (Zo = T7`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  Ey = a1("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  wy = a1(gy, { name: "MuiTouchRipple", slot: "Ripple" })(
    Wo ||
      (Wo = T7`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    N3.rippleVisible,
    Sy,
    Re,
    ({ theme: C }) => C.transitions.easing.easeInOut,
    N3.ripplePulsate,
    ({ theme: C }) => C.transitions.duration.shorter,
    N3.child,
    N3.childLeaving,
    xy,
    Re,
    ({ theme: C }) => C.transitions.easing.easeInOut,
    N3.childPulsate,
    Ay,
    ({ theme: C }) => C.transitions.easing.easeInOut
  ),
  Ly = L.forwardRef(function (e, t) {
    const n = _3({ props: e, name: "MuiTouchRipple" }),
      { center: r = !1, classes: o = {}, className: i } = n,
      s = X(n, vy),
      [a, l] = L.useState([]),
      c = L.useRef(0),
      f = L.useRef(null);
    L.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [a]);
    const d = L.useRef(!1),
      S = T5(),
      v = L.useRef(null),
      g = L.useRef(null),
      w = L.useCallback(
        (y) => {
          const {
            pulsate: x,
            rippleX: E,
            rippleY: A,
            rippleSize: _,
            cb: T,
          } = y;
          l((b) => [
            ...b,
            u.jsx(
              wy,
              {
                classes: {
                  ripple: e1(o.ripple, N3.ripple),
                  rippleVisible: e1(o.rippleVisible, N3.rippleVisible),
                  ripplePulsate: e1(o.ripplePulsate, N3.ripplePulsate),
                  child: e1(o.child, N3.child),
                  childLeaving: e1(o.childLeaving, N3.childLeaving),
                  childPulsate: e1(o.childPulsate, N3.childPulsate),
                },
                timeout: Re,
                pulsate: x,
                rippleX: E,
                rippleY: A,
                rippleSize: _,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (f.current = T);
        },
        [o]
      ),
      h = L.useCallback(
        (y = {}, x = {}, E = () => {}) => {
          const {
            pulsate: A = !1,
            center: _ = r || x.pulsate,
            fakeElement: T = !1,
          } = x;
          if ((y == null ? void 0 : y.type) === "mousedown" && d.current) {
            d.current = !1;
            return;
          }
          (y == null ? void 0 : y.type) === "touchstart" && (d.current = !0);
          const b = T ? null : g.current,
            O = b
              ? b.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let M, I, R;
          if (
            _ ||
            y === void 0 ||
            (y.clientX === 0 && y.clientY === 0) ||
            (!y.clientX && !y.touches)
          )
            (M = Math.round(O.width / 2)), (I = Math.round(O.height / 2));
          else {
            const { clientX: B, clientY: H } =
              y.touches && y.touches.length > 0 ? y.touches[0] : y;
            (M = Math.round(B - O.left)), (I = Math.round(H - O.top));
          }
          if (_)
            (R = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3)),
              R % 2 === 0 && (R += 1);
          else {
            const B =
                Math.max(Math.abs((b ? b.clientWidth : 0) - M), M) * 2 + 2,
              H = Math.max(Math.abs((b ? b.clientHeight : 0) - I), I) * 2 + 2;
            R = Math.sqrt(B ** 2 + H ** 2);
          }
          y != null && y.touches
            ? v.current === null &&
              ((v.current = () => {
                w({ pulsate: A, rippleX: M, rippleY: I, rippleSize: R, cb: E });
              }),
              S.start(yy, () => {
                v.current && (v.current(), (v.current = null));
              }))
            : w({ pulsate: A, rippleX: M, rippleY: I, rippleSize: R, cb: E });
        },
        [r, w, S]
      ),
      p = L.useCallback(() => {
        h({}, { pulsate: !0 });
      }, [h]),
      m = L.useCallback(
        (y, x) => {
          if (
            (S.clear(),
            (y == null ? void 0 : y.type) === "touchend" && v.current)
          ) {
            v.current(),
              (v.current = null),
              S.start(0, () => {
                m(y, x);
              });
            return;
          }
          (v.current = null),
            l((E) => (E.length > 0 ? E.slice(1) : E)),
            (f.current = x);
        },
        [S]
      );
    return (
      L.useImperativeHandle(t, () => ({ pulsate: p, start: h, stop: m }), [
        p,
        h,
        m,
      ]),
      u.jsx(
        Ey,
        P({ className: e1(N3.root, o.root, i), ref: g }, s, {
          children: u.jsx(Tn, { component: null, exit: !0, children: a }),
        })
      )
    );
  });
function by(C) {
  return h3("MuiButtonBase", C);
}
const Ty = m3("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  Py = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  ky = (C) => {
    const {
        disabled: e,
        focusVisible: t,
        focusVisibleClassName: n,
        classes: r,
      } = C,
      i = g3({ root: ["root", e && "disabled", t && "focusVisible"] }, by, r);
    return t && n && (i.root += ` ${n}`), i;
  },
  _y = a1("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (C, e) => e.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${Ty.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  kn = L.forwardRef(function (e, t) {
    const n = _3({ props: e, name: "MuiButtonBase" }),
      {
        action: r,
        centerRipple: o = !1,
        children: i,
        className: s,
        component: a = "button",
        disabled: l = !1,
        disableRipple: c = !1,
        disableTouchRipple: f = !1,
        focusRipple: d = !1,
        LinkComponent: S = "a",
        onBlur: v,
        onClick: g,
        onContextMenu: w,
        onDragLeave: h,
        onFocus: p,
        onFocusVisible: m,
        onKeyDown: y,
        onKeyUp: x,
        onMouseDown: E,
        onMouseLeave: A,
        onMouseUp: _,
        onTouchEnd: T,
        onTouchMove: b,
        onTouchStart: O,
        tabIndex: M = 0,
        TouchRippleProps: I,
        touchRippleRef: R,
        type: B,
      } = n,
      H = X(n, Py),
      D = L.useRef(null),
      k = L.useRef(null),
      N = p3(k, R),
      { isFocusVisibleRef: F, onFocus: Z, onBlur: Q, ref: h1 } = su(),
      [J, C1] = L.useState(!1);
    l && J && C1(!1),
      L.useImperativeHandle(
        r,
        () => ({
          focusVisible: () => {
            C1(!0), D.current.focus();
          },
        }),
        []
      );
    const [U, n1] = L.useState(!1);
    L.useEffect(() => {
      n1(!0);
    }, []);
    const s1 = U && !c && !l;
    L.useEffect(() => {
      J && d && !c && U && k.current.pulsate();
    }, [c, d, J, U]);
    function r1(W, I3, C4 = f) {
      return J2(
        (U2) => (I3 && I3(U2), !C4 && k.current && k.current[W](U2), !0)
      );
    }
    const z1 = r1("start", E),
      F1 = r1("stop", w),
      g5 = r1("stop", h),
      v3 = r1("stop", _),
      q3 = r1("stop", (W) => {
        J && W.preventDefault(), A && A(W);
      }),
      O3 = r1("start", O),
      v5 = r1("stop", T),
      F5 = r1("stop", b),
      b2 = r1(
        "stop",
        (W) => {
          Q(W), F.current === !1 && C1(!1), v && v(W);
        },
        !1
      ),
      V5 = J2((W) => {
        D.current || (D.current = W.currentTarget),
          Z(W),
          F.current === !0 && (C1(!0), m && m(W)),
          p && p(W);
      }),
      q1 = () => {
        const W = D.current;
        return a && a !== "button" && !(W.tagName === "A" && W.href);
      },
      a2 = L.useRef(!1),
      T2 = J2((W) => {
        d &&
          !a2.current &&
          J &&
          k.current &&
          W.key === " " &&
          ((a2.current = !0),
          k.current.stop(W, () => {
            k.current.start(W);
          })),
          W.target === W.currentTarget &&
            q1() &&
            W.key === " " &&
            W.preventDefault(),
          y && y(W),
          W.target === W.currentTarget &&
            q1() &&
            W.key === "Enter" &&
            !l &&
            (W.preventDefault(), g && g(W));
      }),
      F2 = J2((W) => {
        d &&
          W.key === " " &&
          k.current &&
          J &&
          !W.defaultPrevented &&
          ((a2.current = !1),
          k.current.stop(W, () => {
            k.current.pulsate(W);
          })),
          x && x(W),
          g &&
            W.target === W.currentTarget &&
            q1() &&
            W.key === " " &&
            !W.defaultPrevented &&
            g(W);
      });
    let J3 = a;
    J3 === "button" && (H.href || H.to) && (J3 = S);
    const M3 = {};
    J3 === "button"
      ? ((M3.type = B === void 0 ? "button" : B), (M3.disabled = l))
      : (!H.href && !H.to && (M3.role = "button"),
        l && (M3["aria-disabled"] = l));
    const P2 = p3(t, h1, D),
      V2 = P({}, n, {
        centerRipple: o,
        component: a,
        disabled: l,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: d,
        tabIndex: M,
        focusVisible: J,
      }),
      U5 = ky(V2);
    return u.jsxs(
      _y,
      P(
        {
          as: J3,
          className: e1(U5.root, s),
          ownerState: V2,
          onBlur: b2,
          onClick: g,
          onContextMenu: F1,
          onFocus: V5,
          onKeyDown: T2,
          onKeyUp: F2,
          onMouseDown: z1,
          onMouseLeave: q3,
          onMouseUp: v3,
          onDragLeave: g5,
          onTouchEnd: v5,
          onTouchMove: F5,
          onTouchStart: O3,
          ref: P2,
          tabIndex: l ? -1 : M,
          type: B,
        },
        M3,
        H,
        { children: [i, s1 ? u.jsx(Ly, P({ ref: N, center: o }, I)) : null] }
      )
    );
  });
function Oy(C) {
  return h3("MuiAccordionSummary", C);
}
const p8 = m3("MuiAccordionSummary", [
    "root",
    "expanded",
    "focusVisible",
    "disabled",
    "gutters",
    "contentGutters",
    "content",
    "expandIconWrapper",
  ]),
  My = [
    "children",
    "className",
    "expandIcon",
    "focusVisibleClassName",
    "onClick",
  ],
  Iy = Ln(),
  Ry = (C) => {
    const { classes: e, expanded: t, disabled: n, disableGutters: r } = C;
    return g3(
      {
        root: ["root", t && "expanded", n && "disabled", !r && "gutters"],
        focusVisible: ["focusVisible"],
        content: ["content", t && "expanded", !r && "contentGutters"],
        expandIconWrapper: ["expandIconWrapper", t && "expanded"],
      },
      Oy,
      e
    );
  },
  Ny = a1(kn, {
    name: "MuiAccordionSummary",
    slot: "Root",
    overridesResolver: (C, e) => e.root,
  })(({ theme: C }) => {
    const e = { duration: C.transitions.duration.shortest };
    return {
      display: "flex",
      minHeight: 48,
      padding: C.spacing(0, 2),
      transition: C.transitions.create(["min-height", "background-color"], e),
      [`&.${p8.focusVisible}`]: {
        backgroundColor: (C.vars || C).palette.action.focus,
      },
      [`&.${p8.disabled}`]: {
        opacity: (C.vars || C).palette.action.disabledOpacity,
      },
      [`&:hover:not(.${p8.disabled})`]: { cursor: "pointer" },
      variants: [
        {
          props: (t) => !t.disableGutters,
          style: { [`&.${p8.expanded}`]: { minHeight: 64 } },
        },
      ],
    };
  }),
  Hy = a1("div", {
    name: "MuiAccordionSummary",
    slot: "Content",
    overridesResolver: (C, e) => e.content,
  })(({ theme: C }) => ({
    display: "flex",
    flexGrow: 1,
    margin: "12px 0",
    variants: [
      {
        props: (e) => !e.disableGutters,
        style: {
          transition: C.transitions.create(["margin"], {
            duration: C.transitions.duration.shortest,
          }),
          [`&.${p8.expanded}`]: { margin: "20px 0" },
        },
      },
    ],
  })),
  jy = a1("div", {
    name: "MuiAccordionSummary",
    slot: "ExpandIconWrapper",
    overridesResolver: (C, e) => e.expandIconWrapper,
  })(({ theme: C }) => ({
    display: "flex",
    color: (C.vars || C).palette.action.active,
    transform: "rotate(0deg)",
    transition: C.transitions.create("transform", {
      duration: C.transitions.duration.shortest,
    }),
    [`&.${p8.expanded}`]: { transform: "rotate(180deg)" },
  })),
  Dy = L.forwardRef(function (e, t) {
    const n = Iy({ props: e, name: "MuiAccordionSummary" }),
      {
        children: r,
        className: o,
        expandIcon: i,
        focusVisibleClassName: s,
        onClick: a,
      } = n,
      l = X(n, My),
      {
        disabled: c = !1,
        disableGutters: f,
        expanded: d,
        toggle: S,
      } = L.useContext(Pu),
      v = (h) => {
        S && S(h), a && a(h);
      },
      g = P({}, n, { expanded: d, disabled: c, disableGutters: f }),
      w = Ry(g);
    return u.jsxs(
      Ny,
      P(
        {
          focusRipple: !1,
          disableRipple: !0,
          disabled: c,
          component: "div",
          "aria-expanded": d,
          className: e1(w.root, o),
          focusVisibleClassName: e1(w.focusVisible, s),
          onClick: v,
          ref: t,
          ownerState: g,
        },
        l,
        {
          children: [
            u.jsx(Hy, { className: w.content, ownerState: g, children: r }),
            i &&
              u.jsx(jy, {
                className: w.expandIconWrapper,
                ownerState: g,
                children: i,
              }),
          ],
        }
      )
    );
  });
function By(C) {
  return h3("MuiIconButton", C);
}
const zy = m3("MuiIconButton", [
    "root",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorError",
    "colorInfo",
    "colorSuccess",
    "colorWarning",
    "edgeStart",
    "edgeEnd",
    "sizeSmall",
    "sizeMedium",
    "sizeLarge",
  ]),
  Fy = [
    "edge",
    "children",
    "className",
    "color",
    "disabled",
    "disableFocusRipple",
    "size",
  ],
  Vy = (C) => {
    const { classes: e, disabled: t, color: n, edge: r, size: o } = C,
      i = {
        root: [
          "root",
          t && "disabled",
          n !== "default" && `color${f1(n)}`,
          r && `edge${f1(r)}`,
          `size${f1(o)}`,
        ],
      };
    return g3(i, By, e);
  },
  Uy = a1(kn, {
    name: "MuiIconButton",
    slot: "Root",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [
        e.root,
        t.color !== "default" && e[`color${f1(t.color)}`],
        t.edge && e[`edge${f1(t.edge)}`],
        e[`size${f1(t.size)}`],
      ];
    },
  })(
    ({ theme: C, ownerState: e }) =>
      P(
        {
          textAlign: "center",
          flex: "0 0 auto",
          fontSize: C.typography.pxToRem(24),
          padding: 8,
          borderRadius: "50%",
          overflow: "visible",
          color: (C.vars || C).palette.action.active,
          transition: C.transitions.create("background-color", {
            duration: C.transitions.duration.shortest,
          }),
        },
        !e.disableRipple && {
          "&:hover": {
            backgroundColor: C.vars
              ? `rgba(${C.vars.palette.action.activeChannel} / ${C.vars.palette.action.hoverOpacity})`
              : h2(C.palette.action.active, C.palette.action.hoverOpacity),
            "@media (hover: none)": { backgroundColor: "transparent" },
          },
        },
        e.edge === "start" && { marginLeft: e.size === "small" ? -3 : -12 },
        e.edge === "end" && { marginRight: e.size === "small" ? -3 : -12 }
      ),
    ({ theme: C, ownerState: e }) => {
      var t;
      const n = (t = (C.vars || C).palette) == null ? void 0 : t[e.color];
      return P(
        {},
        e.color === "inherit" && { color: "inherit" },
        e.color !== "inherit" &&
          e.color !== "default" &&
          P(
            { color: n == null ? void 0 : n.main },
            !e.disableRipple && {
              "&:hover": P(
                {},
                n && {
                  backgroundColor: C.vars
                    ? `rgba(${n.mainChannel} / ${C.vars.palette.action.hoverOpacity})`
                    : h2(n.main, C.palette.action.hoverOpacity),
                },
                { "@media (hover: none)": { backgroundColor: "transparent" } }
              ),
            }
          ),
        e.size === "small" && {
          padding: 5,
          fontSize: C.typography.pxToRem(18),
        },
        e.size === "large" && {
          padding: 12,
          fontSize: C.typography.pxToRem(28),
        },
        {
          [`&.${zy.disabled}`]: {
            backgroundColor: "transparent",
            color: (C.vars || C).palette.action.disabled,
          },
        }
      );
    }
  ),
  $y = L.forwardRef(function (e, t) {
    const n = _3({ props: e, name: "MuiIconButton" }),
      {
        edge: r = !1,
        children: o,
        className: i,
        color: s = "default",
        disabled: a = !1,
        disableFocusRipple: l = !1,
        size: c = "medium",
      } = n,
      f = X(n, Fy),
      d = P({}, n, {
        edge: r,
        color: s,
        disabled: a,
        disableFocusRipple: l,
        size: c,
      }),
      S = Vy(d);
    return u.jsx(
      Uy,
      P(
        {
          className: e1(S.root, i),
          centerRipple: !0,
          focusRipple: !l,
          disabled: a,
          ref: t,
        },
        f,
        { ownerState: d, children: o }
      )
    );
  });
function Zy(C) {
  return h3("MuiTypography", C);
}
m3("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const Wy = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  Ky = (C) => {
    const {
        align: e,
        gutterBottom: t,
        noWrap: n,
        paragraph: r,
        variant: o,
        classes: i,
      } = C,
      s = {
        root: [
          "root",
          o,
          C.align !== "inherit" && `align${f1(e)}`,
          t && "gutterBottom",
          n && "noWrap",
          r && "paragraph",
        ],
      };
    return g3(s, Zy, i);
  },
  Gy = a1("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [
        e.root,
        t.variant && e[t.variant],
        t.align !== "inherit" && e[`align${f1(t.align)}`],
        t.noWrap && e.noWrap,
        t.gutterBottom && e.gutterBottom,
        t.paragraph && e.paragraph,
      ];
    },
  })(({ theme: C, ownerState: e }) =>
    P(
      { margin: 0 },
      e.variant === "inherit" && { font: "inherit" },
      e.variant !== "inherit" && C.typography[e.variant],
      e.align !== "inherit" && { textAlign: e.align },
      e.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      e.gutterBottom && { marginBottom: "0.35em" },
      e.paragraph && { marginBottom: 16 }
    )
  ),
  Ko = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  Qy = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  Yy = (C) => Qy[C] || C,
  x1 = L.forwardRef(function (e, t) {
    const n = _3({ props: e, name: "MuiTypography" }),
      r = Yy(n.color),
      o = Xl(P({}, n, { color: r })),
      {
        align: i = "inherit",
        className: s,
        component: a,
        gutterBottom: l = !1,
        noWrap: c = !1,
        paragraph: f = !1,
        variant: d = "body1",
        variantMapping: S = Ko,
      } = o,
      v = X(o, Wy),
      g = P({}, o, {
        align: i,
        color: r,
        className: s,
        component: a,
        gutterBottom: l,
        noWrap: c,
        paragraph: f,
        variant: d,
        variantMapping: S,
      }),
      w = a || (f ? "p" : S[d] || Ko[d]) || "span",
      h = Ky(g);
    return u.jsx(
      Gy,
      P({ as: w, ref: t, ownerState: g, className: e1(h.root, s) }, v)
    );
  }),
  Mu = "base";
function Xy(C) {
  return `${Mu}--${C}`;
}
function qy(C, e) {
  return `${Mu}-${C}-${e}`;
}
function Iu(C, e) {
  const t = Jl[e];
  return t ? Xy(t) : qy(C, e);
}
function Jy(C, e) {
  const t = {};
  return (
    e.forEach((n) => {
      t[n] = Iu(C, n);
    }),
    t
  );
}
const CS = [
  "input",
  "select",
  "textarea",
  "a[href]",
  "button",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable="false"])',
].join(",");
function eS(C) {
  const e = parseInt(C.getAttribute("tabindex") || "", 10);
  return Number.isNaN(e)
    ? C.contentEditable === "true" ||
      ((C.nodeName === "AUDIO" ||
        C.nodeName === "VIDEO" ||
        C.nodeName === "DETAILS") &&
        C.getAttribute("tabindex") === null)
      ? 0
      : C.tabIndex
    : e;
}
function tS(C) {
  if (C.tagName !== "INPUT" || C.type !== "radio" || !C.name) return !1;
  const e = (n) => C.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let t = e(`[name="${C.name}"]:checked`);
  return t || (t = e(`[name="${C.name}"]`)), t !== C;
}
function nS(C) {
  return !(
    C.disabled ||
    (C.tagName === "INPUT" && C.type === "hidden") ||
    tS(C)
  );
}
function rS(C) {
  const e = [],
    t = [];
  return (
    Array.from(C.querySelectorAll(CS)).forEach((n, r) => {
      const o = eS(n);
      o === -1 ||
        !nS(n) ||
        (o === 0
          ? e.push(n)
          : t.push({ documentOrder: r, tabIndex: o, node: n }));
    }),
    t
      .sort((n, r) =>
        n.tabIndex === r.tabIndex
          ? n.documentOrder - r.documentOrder
          : n.tabIndex - r.tabIndex
      )
      .map((n) => n.node)
      .concat(e)
  );
}
function oS() {
  return !0;
}
function iS(C) {
  const {
      children: e,
      disableAutoFocus: t = !1,
      disableEnforceFocus: n = !1,
      disableRestoreFocus: r = !1,
      getTabbable: o = rS,
      isEnabled: i = oS,
      open: s,
    } = C,
    a = L.useRef(!1),
    l = L.useRef(null),
    c = L.useRef(null),
    f = L.useRef(null),
    d = L.useRef(null),
    S = L.useRef(!1),
    v = L.useRef(null),
    g = p3(e.ref, v),
    w = L.useRef(null);
  L.useEffect(() => {
    !s || !v.current || (S.current = !t);
  }, [t, s]),
    L.useEffect(() => {
      if (!s || !v.current) return;
      const m = x2(v.current);
      return (
        v.current.contains(m.activeElement) ||
          (v.current.hasAttribute("tabIndex") ||
            v.current.setAttribute("tabIndex", "-1"),
          S.current && v.current.focus()),
        () => {
          r ||
            (f.current &&
              f.current.focus &&
              ((a.current = !0), f.current.focus()),
            (f.current = null));
        }
      );
    }, [s]),
    L.useEffect(() => {
      if (!s || !v.current) return;
      const m = x2(v.current),
        y = (A) => {
          (w.current = A),
            !(n || !i() || A.key !== "Tab") &&
              m.activeElement === v.current &&
              A.shiftKey &&
              ((a.current = !0), c.current && c.current.focus());
        },
        x = () => {
          const A = v.current;
          if (A === null) return;
          if (!m.hasFocus() || !i() || a.current) {
            a.current = !1;
            return;
          }
          if (
            A.contains(m.activeElement) ||
            (n &&
              m.activeElement !== l.current &&
              m.activeElement !== c.current)
          )
            return;
          if (m.activeElement !== d.current) d.current = null;
          else if (d.current !== null) return;
          if (!S.current) return;
          let _ = [];
          if (
            ((m.activeElement === l.current || m.activeElement === c.current) &&
              (_ = o(v.current)),
            _.length > 0)
          ) {
            var T, b;
            const O = !!(
                (T = w.current) != null &&
                T.shiftKey &&
                ((b = w.current) == null ? void 0 : b.key) === "Tab"
              ),
              M = _[0],
              I = _[_.length - 1];
            typeof M != "string" &&
              typeof I != "string" &&
              (O ? I.focus() : M.focus());
          } else A.focus();
        };
      m.addEventListener("focusin", x), m.addEventListener("keydown", y, !0);
      const E = setInterval(() => {
        m.activeElement && m.activeElement.tagName === "BODY" && x();
      }, 50);
      return () => {
        clearInterval(E),
          m.removeEventListener("focusin", x),
          m.removeEventListener("keydown", y, !0);
      };
    }, [t, n, r, i, s, o]);
  const h = (m) => {
      f.current === null && (f.current = m.relatedTarget),
        (S.current = !0),
        (d.current = m.target);
      const y = e.props.onFocus;
      y && y(m);
    },
    p = (m) => {
      f.current === null && (f.current = m.relatedTarget), (S.current = !0);
    };
  return u.jsxs(L.Fragment, {
    children: [
      u.jsx("div", {
        tabIndex: s ? 0 : -1,
        onFocus: p,
        ref: l,
        "data-testid": "sentinelStart",
      }),
      L.cloneElement(e, { ref: g, onFocus: h }),
      u.jsx("div", {
        tabIndex: s ? 0 : -1,
        onFocus: p,
        ref: c,
        "data-testid": "sentinelEnd",
      }),
    ],
  });
}
function sS(C) {
  return typeof C == "function" ? C() : C;
}
const Ru = L.forwardRef(function (e, t) {
  const { children: n, container: r, disablePortal: o = !1 } = e,
    [i, s] = L.useState(null),
    a = p3(L.isValidElement(n) ? n.ref : null, t);
  if (
    (N8(() => {
      o || s(sS(r) || document.body);
    }, [r, o]),
    N8(() => {
      if (i && !o)
        return (
          Pe(t, i),
          () => {
            Pe(t, null);
          }
        );
    }, [t, i, o]),
    o)
  ) {
    if (L.isValidElement(n)) {
      const l = { ref: a };
      return L.cloneElement(n, l);
    }
    return u.jsx(L.Fragment, { children: n });
  }
  return u.jsx(L.Fragment, { children: i && qt.createPortal(n, i) });
});
function aS(C) {
  const e = x2(C);
  return e.body === C
    ? L0(C).innerWidth > e.documentElement.clientWidth
    : C.scrollHeight > C.clientHeight;
}
function N4(C, e) {
  e ? C.setAttribute("aria-hidden", "true") : C.removeAttribute("aria-hidden");
}
function Go(C) {
  return parseInt(L0(C).getComputedStyle(C).paddingRight, 10) || 0;
}
function lS(C) {
  const t =
      [
        "TEMPLATE",
        "SCRIPT",
        "STYLE",
        "LINK",
        "MAP",
        "META",
        "NOSCRIPT",
        "PICTURE",
        "COL",
        "COLGROUP",
        "PARAM",
        "SLOT",
        "SOURCE",
        "TRACK",
      ].indexOf(C.tagName) !== -1,
    n = C.tagName === "INPUT" && C.getAttribute("type") === "hidden";
  return t || n;
}
function Qo(C, e, t, n, r) {
  const o = [e, t, ...n];
  [].forEach.call(C.children, (i) => {
    const s = o.indexOf(i) === -1,
      a = !lS(i);
    s && a && N4(i, r);
  });
}
function hC(C, e) {
  let t = -1;
  return C.some((n, r) => (e(n) ? ((t = r), !0) : !1)), t;
}
function uS(C, e) {
  const t = [],
    n = C.container;
  if (!e.disableScrollLock) {
    if (aS(n)) {
      const i = ug(x2(n));
      t.push({ value: n.style.paddingRight, property: "padding-right", el: n }),
        (n.style.paddingRight = `${Go(n) + i}px`);
      const s = x2(n).querySelectorAll(".mui-fixed");
      [].forEach.call(s, (a) => {
        t.push({
          value: a.style.paddingRight,
          property: "padding-right",
          el: a,
        }),
          (a.style.paddingRight = `${Go(a) + i}px`);
      });
    }
    let o;
    if (n.parentNode instanceof DocumentFragment) o = x2(n).body;
    else {
      const i = n.parentElement,
        s = L0(n);
      o =
        (i == null ? void 0 : i.nodeName) === "HTML" &&
        s.getComputedStyle(i).overflowY === "scroll"
          ? i
          : n;
    }
    t.push(
      { value: o.style.overflow, property: "overflow", el: o },
      { value: o.style.overflowX, property: "overflow-x", el: o },
      { value: o.style.overflowY, property: "overflow-y", el: o }
    ),
      (o.style.overflow = "hidden");
  }
  return () => {
    t.forEach(({ value: o, el: i, property: s }) => {
      o ? i.style.setProperty(s, o) : i.style.removeProperty(s);
    });
  };
}
function cS(C) {
  const e = [];
  return (
    [].forEach.call(C.children, (t) => {
      t.getAttribute("aria-hidden") === "true" && e.push(t);
    }),
    e
  );
}
class dS {
  constructor() {
    (this.containers = void 0),
      (this.modals = void 0),
      (this.modals = []),
      (this.containers = []);
  }
  add(e, t) {
    let n = this.modals.indexOf(e);
    if (n !== -1) return n;
    (n = this.modals.length),
      this.modals.push(e),
      e.modalRef && N4(e.modalRef, !1);
    const r = cS(t);
    Qo(t, e.mount, e.modalRef, r, !0);
    const o = hC(this.containers, (i) => i.container === t);
    return o !== -1
      ? (this.containers[o].modals.push(e), n)
      : (this.containers.push({
          modals: [e],
          container: t,
          restore: null,
          hiddenSiblings: r,
        }),
        n);
  }
  mount(e, t) {
    const n = hC(this.containers, (o) => o.modals.indexOf(e) !== -1),
      r = this.containers[n];
    r.restore || (r.restore = uS(r, t));
  }
  remove(e, t = !0) {
    const n = this.modals.indexOf(e);
    if (n === -1) return n;
    const r = hC(this.containers, (i) => i.modals.indexOf(e) !== -1),
      o = this.containers[r];
    if (
      (o.modals.splice(o.modals.indexOf(e), 1),
      this.modals.splice(n, 1),
      o.modals.length === 0)
    )
      o.restore && o.restore(),
        e.modalRef && N4(e.modalRef, t),
        Qo(o.container, e.mount, e.modalRef, o.hiddenSiblings, !1),
        this.containers.splice(r, 1);
    else {
      const i = o.modals[o.modals.length - 1];
      i.modalRef && N4(i.modalRef, !1);
    }
    return n;
  }
  isTopModal(e) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === e;
  }
}
function fS(C) {
  return typeof C == "function" ? C() : C;
}
function pS(C) {
  return C ? C.props.hasOwnProperty("in") : !1;
}
const hS = new dS();
function mS(C) {
  const {
      container: e,
      disableEscapeKeyDown: t = !1,
      disableScrollLock: n = !1,
      manager: r = hS,
      closeAfterTransition: o = !1,
      onTransitionEnter: i,
      onTransitionExited: s,
      children: a,
      onClose: l,
      open: c,
      rootRef: f,
    } = C,
    d = L.useRef({}),
    S = L.useRef(null),
    v = L.useRef(null),
    g = p3(v, f),
    [w, h] = L.useState(!c),
    p = pS(a);
  let m = !0;
  (C["aria-hidden"] === "false" || C["aria-hidden"] === !1) && (m = !1);
  const y = () => x2(S.current),
    x = () => (
      (d.current.modalRef = v.current), (d.current.mount = S.current), d.current
    ),
    E = () => {
      r.mount(x(), { disableScrollLock: n }),
        v.current && (v.current.scrollTop = 0);
    },
    A = J2(() => {
      const H = fS(e) || y().body;
      r.add(x(), H), v.current && E();
    }),
    _ = L.useCallback(() => r.isTopModal(x()), [r]),
    T = J2((H) => {
      (S.current = H), H && (c && _() ? E() : v.current && N4(v.current, m));
    }),
    b = L.useCallback(() => {
      r.remove(x(), m);
    }, [m, r]);
  L.useEffect(
    () => () => {
      b();
    },
    [b]
  ),
    L.useEffect(() => {
      c ? A() : (!p || !o) && b();
    }, [c, b, p, o, A]);
  const O = (H) => (D) => {
      var k;
      (k = H.onKeyDown) == null || k.call(H, D),
        !(D.key !== "Escape" || D.which === 229 || !_()) &&
          (t || (D.stopPropagation(), l && l(D, "escapeKeyDown")));
    },
    M = (H) => (D) => {
      var k;
      (k = H.onClick) == null || k.call(H, D),
        D.target === D.currentTarget && l && l(D, "backdropClick");
    };
  return {
    getRootProps: (H = {}) => {
      const D = ku(C);
      delete D.onTransitionEnter, delete D.onTransitionExited;
      const k = P({}, D, H);
      return P({ role: "presentation" }, k, { onKeyDown: O(k), ref: g });
    },
    getBackdropProps: (H = {}) => {
      const D = H;
      return P({ "aria-hidden": !0 }, D, { onClick: M(D), open: c });
    },
    getTransitionProps: () => {
      const H = () => {
          h(!1), i && i();
        },
        D = () => {
          h(!0), s && s(), o && b();
        };
      return {
        onEnter: Lo(H, a == null ? void 0 : a.props.onEnter),
        onExited: Lo(D, a == null ? void 0 : a.props.onExited),
      };
    },
    rootRef: g,
    portalRef: T,
    isTopModal: _,
    exited: w,
    hasTransition: p,
  };
}
var c3 = "top",
  Z3 = "bottom",
  W3 = "right",
  d3 = "left",
  _n = "auto",
  P0 = [c3, Z3, W3, d3],
  H8 = "start",
  s0 = "end",
  gS = "clippingParents",
  Nu = "viewport",
  h4 = "popper",
  vS = "reference",
  Yo = P0.reduce(function (C, e) {
    return C.concat([e + "-" + H8, e + "-" + s0]);
  }, []),
  Hu = [].concat(P0, [_n]).reduce(function (C, e) {
    return C.concat([e, e + "-" + H8, e + "-" + s0]);
  }, []),
  yS = "beforeRead",
  SS = "read",
  xS = "afterRead",
  AS = "beforeMain",
  ES = "main",
  wS = "afterMain",
  LS = "beforeWrite",
  bS = "write",
  TS = "afterWrite",
  PS = [yS, SS, xS, AS, ES, wS, LS, bS, TS];
function E2(C) {
  return C ? (C.nodeName || "").toLowerCase() : null;
}
function b3(C) {
  if (C == null) return window;
  if (C.toString() !== "[object Window]") {
    var e = C.ownerDocument;
    return (e && e.defaultView) || window;
  }
  return C;
}
function j5(C) {
  var e = b3(C).Element;
  return C instanceof e || C instanceof Element;
}
function F3(C) {
  var e = b3(C).HTMLElement;
  return C instanceof e || C instanceof HTMLElement;
}
function On(C) {
  if (typeof ShadowRoot > "u") return !1;
  var e = b3(C).ShadowRoot;
  return C instanceof e || C instanceof ShadowRoot;
}
function kS(C) {
  var e = C.state;
  Object.keys(e.elements).forEach(function (t) {
    var n = e.styles[t] || {},
      r = e.attributes[t] || {},
      o = e.elements[t];
    !F3(o) ||
      !E2(o) ||
      (Object.assign(o.style, n),
      Object.keys(r).forEach(function (i) {
        var s = r[i];
        s === !1 ? o.removeAttribute(i) : o.setAttribute(i, s === !0 ? "" : s);
      }));
  });
}
function _S(C) {
  var e = C.state,
    t = {
      popper: {
        position: e.options.strategy,
        left: "0",
        top: "0",
        margin: "0",
      },
      arrow: { position: "absolute" },
      reference: {},
    };
  return (
    Object.assign(e.elements.popper.style, t.popper),
    (e.styles = t),
    e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
    function () {
      Object.keys(e.elements).forEach(function (n) {
        var r = e.elements[n],
          o = e.attributes[n] || {},
          i = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : t[n]),
          s = i.reduce(function (a, l) {
            return (a[l] = ""), a;
          }, {});
        !F3(r) ||
          !E2(r) ||
          (Object.assign(r.style, s),
          Object.keys(o).forEach(function (a) {
            r.removeAttribute(a);
          }));
      });
    }
  );
}
const OS = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: kS,
  effect: _S,
  requires: ["computeStyles"],
};
function A2(C) {
  return C.split("-")[0];
}
var O5 = Math.max,
  r9 = Math.min,
  j8 = Math.round;
function Ne() {
  var C = navigator.userAgentData;
  return C != null && C.brands && Array.isArray(C.brands)
    ? C.brands
        .map(function (e) {
          return e.brand + "/" + e.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function ju() {
  return !/^((?!chrome|android).)*safari/i.test(Ne());
}
function D8(C, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var n = C.getBoundingClientRect(),
    r = 1,
    o = 1;
  e &&
    F3(C) &&
    ((r = (C.offsetWidth > 0 && j8(n.width) / C.offsetWidth) || 1),
    (o = (C.offsetHeight > 0 && j8(n.height) / C.offsetHeight) || 1));
  var i = j5(C) ? b3(C) : window,
    s = i.visualViewport,
    a = !ju() && t,
    l = (n.left + (a && s ? s.offsetLeft : 0)) / r,
    c = (n.top + (a && s ? s.offsetTop : 0)) / o,
    f = n.width / r,
    d = n.height / o;
  return {
    width: f,
    height: d,
    top: c,
    right: l + f,
    bottom: c + d,
    left: l,
    x: l,
    y: c,
  };
}
function Mn(C) {
  var e = D8(C),
    t = C.offsetWidth,
    n = C.offsetHeight;
  return (
    Math.abs(e.width - t) <= 1 && (t = e.width),
    Math.abs(e.height - n) <= 1 && (n = e.height),
    { x: C.offsetLeft, y: C.offsetTop, width: t, height: n }
  );
}
function Du(C, e) {
  var t = e.getRootNode && e.getRootNode();
  if (C.contains(e)) return !0;
  if (t && On(t)) {
    var n = e;
    do {
      if (n && C.isSameNode(n)) return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function B2(C) {
  return b3(C).getComputedStyle(C);
}
function MS(C) {
  return ["table", "td", "th"].indexOf(E2(C)) >= 0;
}
function m5(C) {
  return ((j5(C) ? C.ownerDocument : C.document) || window.document)
    .documentElement;
}
function P7(C) {
  return E2(C) === "html"
    ? C
    : C.assignedSlot || C.parentNode || (On(C) ? C.host : null) || m5(C);
}
function Xo(C) {
  return !F3(C) || B2(C).position === "fixed" ? null : C.offsetParent;
}
function IS(C) {
  var e = /firefox/i.test(Ne()),
    t = /Trident/i.test(Ne());
  if (t && F3(C)) {
    var n = B2(C);
    if (n.position === "fixed") return null;
  }
  var r = P7(C);
  for (On(r) && (r = r.host); F3(r) && ["html", "body"].indexOf(E2(r)) < 0; ) {
    var o = B2(r);
    if (
      o.transform !== "none" ||
      o.perspective !== "none" ||
      o.contain === "paint" ||
      ["transform", "perspective"].indexOf(o.willChange) !== -1 ||
      (e && o.willChange === "filter") ||
      (e && o.filter && o.filter !== "none")
    )
      return r;
    r = r.parentNode;
  }
  return null;
}
function k0(C) {
  for (var e = b3(C), t = Xo(C); t && MS(t) && B2(t).position === "static"; )
    t = Xo(t);
  return t &&
    (E2(t) === "html" || (E2(t) === "body" && B2(t).position === "static"))
    ? e
    : t || IS(C) || e;
}
function In(C) {
  return ["top", "bottom"].indexOf(C) >= 0 ? "x" : "y";
}
function H4(C, e, t) {
  return O5(C, r9(e, t));
}
function RS(C, e, t) {
  var n = H4(C, e, t);
  return n > t ? t : n;
}
function Bu() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function zu(C) {
  return Object.assign({}, Bu(), C);
}
function Fu(C, e) {
  return e.reduce(function (t, n) {
    return (t[n] = C), t;
  }, {});
}
var NS = function (e, t) {
  return (
    (e =
      typeof e == "function"
        ? e(Object.assign({}, t.rects, { placement: t.placement }))
        : e),
    zu(typeof e != "number" ? e : Fu(e, P0))
  );
};
function HS(C) {
  var e,
    t = C.state,
    n = C.name,
    r = C.options,
    o = t.elements.arrow,
    i = t.modifiersData.popperOffsets,
    s = A2(t.placement),
    a = In(s),
    l = [d3, W3].indexOf(s) >= 0,
    c = l ? "height" : "width";
  if (!(!o || !i)) {
    var f = NS(r.padding, t),
      d = Mn(o),
      S = a === "y" ? c3 : d3,
      v = a === "y" ? Z3 : W3,
      g =
        t.rects.reference[c] + t.rects.reference[a] - i[a] - t.rects.popper[c],
      w = i[a] - t.rects.reference[a],
      h = k0(o),
      p = h ? (a === "y" ? h.clientHeight || 0 : h.clientWidth || 0) : 0,
      m = g / 2 - w / 2,
      y = f[S],
      x = p - d[c] - f[v],
      E = p / 2 - d[c] / 2 + m,
      A = H4(y, E, x),
      _ = a;
    t.modifiersData[n] = ((e = {}), (e[_] = A), (e.centerOffset = A - E), e);
  }
}
function jS(C) {
  var e = C.state,
    t = C.options,
    n = t.element,
    r = n === void 0 ? "[data-popper-arrow]" : n;
  r != null &&
    ((typeof r == "string" && ((r = e.elements.popper.querySelector(r)), !r)) ||
      (Du(e.elements.popper, r) && (e.elements.arrow = r)));
}
const DS = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: HS,
  effect: jS,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function B8(C) {
  return C.split("-")[1];
}
var BS = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function zS(C, e) {
  var t = C.x,
    n = C.y,
    r = e.devicePixelRatio || 1;
  return { x: j8(t * r) / r || 0, y: j8(n * r) / r || 0 };
}
function qo(C) {
  var e,
    t = C.popper,
    n = C.popperRect,
    r = C.placement,
    o = C.variation,
    i = C.offsets,
    s = C.position,
    a = C.gpuAcceleration,
    l = C.adaptive,
    c = C.roundOffsets,
    f = C.isFixed,
    d = i.x,
    S = d === void 0 ? 0 : d,
    v = i.y,
    g = v === void 0 ? 0 : v,
    w = typeof c == "function" ? c({ x: S, y: g }) : { x: S, y: g };
  (S = w.x), (g = w.y);
  var h = i.hasOwnProperty("x"),
    p = i.hasOwnProperty("y"),
    m = d3,
    y = c3,
    x = window;
  if (l) {
    var E = k0(t),
      A = "clientHeight",
      _ = "clientWidth";
    if (
      (E === b3(t) &&
        ((E = m5(t)),
        B2(E).position !== "static" &&
          s === "absolute" &&
          ((A = "scrollHeight"), (_ = "scrollWidth"))),
      (E = E),
      r === c3 || ((r === d3 || r === W3) && o === s0))
    ) {
      y = Z3;
      var T = f && E === x && x.visualViewport ? x.visualViewport.height : E[A];
      (g -= T - n.height), (g *= a ? 1 : -1);
    }
    if (r === d3 || ((r === c3 || r === Z3) && o === s0)) {
      m = W3;
      var b = f && E === x && x.visualViewport ? x.visualViewport.width : E[_];
      (S -= b - n.width), (S *= a ? 1 : -1);
    }
  }
  var O = Object.assign({ position: s }, l && BS),
    M = c === !0 ? zS({ x: S, y: g }, b3(t)) : { x: S, y: g };
  if (((S = M.x), (g = M.y), a)) {
    var I;
    return Object.assign(
      {},
      O,
      ((I = {}),
      (I[y] = p ? "0" : ""),
      (I[m] = h ? "0" : ""),
      (I.transform =
        (x.devicePixelRatio || 1) <= 1
          ? "translate(" + S + "px, " + g + "px)"
          : "translate3d(" + S + "px, " + g + "px, 0)"),
      I)
    );
  }
  return Object.assign(
    {},
    O,
    ((e = {}),
    (e[y] = p ? g + "px" : ""),
    (e[m] = h ? S + "px" : ""),
    (e.transform = ""),
    e)
  );
}
function FS(C) {
  var e = C.state,
    t = C.options,
    n = t.gpuAcceleration,
    r = n === void 0 ? !0 : n,
    o = t.adaptive,
    i = o === void 0 ? !0 : o,
    s = t.roundOffsets,
    a = s === void 0 ? !0 : s,
    l = {
      placement: A2(e.placement),
      variation: B8(e.placement),
      popper: e.elements.popper,
      popperRect: e.rects.popper,
      gpuAcceleration: r,
      isFixed: e.options.strategy === "fixed",
    };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      {},
      e.styles.popper,
      qo(
        Object.assign({}, l, {
          offsets: e.modifiersData.popperOffsets,
          position: e.options.strategy,
          adaptive: i,
          roundOffsets: a,
        })
      )
    )),
    e.modifiersData.arrow != null &&
      (e.styles.arrow = Object.assign(
        {},
        e.styles.arrow,
        qo(
          Object.assign({}, l, {
            offsets: e.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: a,
          })
        )
      )),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-placement": e.placement,
    }));
}
const VS = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: FS,
  data: {},
};
var e6 = { passive: !0 };
function US(C) {
  var e = C.state,
    t = C.instance,
    n = C.options,
    r = n.scroll,
    o = r === void 0 ? !0 : r,
    i = n.resize,
    s = i === void 0 ? !0 : i,
    a = b3(e.elements.popper),
    l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return (
    o &&
      l.forEach(function (c) {
        c.addEventListener("scroll", t.update, e6);
      }),
    s && a.addEventListener("resize", t.update, e6),
    function () {
      o &&
        l.forEach(function (c) {
          c.removeEventListener("scroll", t.update, e6);
        }),
        s && a.removeEventListener("resize", t.update, e6);
    }
  );
}
const $S = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: US,
  data: {},
};
var ZS = { left: "right", right: "left", bottom: "top", top: "bottom" };
function b6(C) {
  return C.replace(/left|right|bottom|top/g, function (e) {
    return ZS[e];
  });
}
var WS = { start: "end", end: "start" };
function Jo(C) {
  return C.replace(/start|end/g, function (e) {
    return WS[e];
  });
}
function Rn(C) {
  var e = b3(C),
    t = e.pageXOffset,
    n = e.pageYOffset;
  return { scrollLeft: t, scrollTop: n };
}
function Nn(C) {
  return D8(m5(C)).left + Rn(C).scrollLeft;
}
function KS(C, e) {
  var t = b3(C),
    n = m5(C),
    r = t.visualViewport,
    o = n.clientWidth,
    i = n.clientHeight,
    s = 0,
    a = 0;
  if (r) {
    (o = r.width), (i = r.height);
    var l = ju();
    (l || (!l && e === "fixed")) && ((s = r.offsetLeft), (a = r.offsetTop));
  }
  return { width: o, height: i, x: s + Nn(C), y: a };
}
function GS(C) {
  var e,
    t = m5(C),
    n = Rn(C),
    r = (e = C.ownerDocument) == null ? void 0 : e.body,
    o = O5(
      t.scrollWidth,
      t.clientWidth,
      r ? r.scrollWidth : 0,
      r ? r.clientWidth : 0
    ),
    i = O5(
      t.scrollHeight,
      t.clientHeight,
      r ? r.scrollHeight : 0,
      r ? r.clientHeight : 0
    ),
    s = -n.scrollLeft + Nn(C),
    a = -n.scrollTop;
  return (
    B2(r || t).direction === "rtl" &&
      (s += O5(t.clientWidth, r ? r.clientWidth : 0) - o),
    { width: o, height: i, x: s, y: a }
  );
}
function Hn(C) {
  var e = B2(C),
    t = e.overflow,
    n = e.overflowX,
    r = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function Vu(C) {
  return ["html", "body", "#document"].indexOf(E2(C)) >= 0
    ? C.ownerDocument.body
    : F3(C) && Hn(C)
    ? C
    : Vu(P7(C));
}
function j4(C, e) {
  var t;
  e = [];
  var n = Vu(C),
    r = n === ((t = C.ownerDocument) == null ? void 0 : t.body),
    o = b3(n),
    i = r ? [o].concat(o.visualViewport || [], Hn(n) ? n : []) : n,
    s = e.concat(i);
  return r ? s : s.concat(j4(P7(i)));
}
function He(C) {
  return Object.assign({}, C, {
    left: C.x,
    top: C.y,
    right: C.x + C.width,
    bottom: C.y + C.height,
  });
}
function QS(C, e) {
  var t = D8(C, !1, e === "fixed");
  return (
    (t.top = t.top + C.clientTop),
    (t.left = t.left + C.clientLeft),
    (t.bottom = t.top + C.clientHeight),
    (t.right = t.left + C.clientWidth),
    (t.width = C.clientWidth),
    (t.height = C.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  );
}
function Ci(C, e, t) {
  return e === Nu ? He(KS(C, t)) : j5(e) ? QS(e, t) : He(GS(m5(C)));
}
function YS(C) {
  var e = j4(P7(C)),
    t = ["absolute", "fixed"].indexOf(B2(C).position) >= 0,
    n = t && F3(C) ? k0(C) : C;
  return j5(n)
    ? e.filter(function (r) {
        return j5(r) && Du(r, n) && E2(r) !== "body";
      })
    : [];
}
function XS(C, e, t, n) {
  var r = e === "clippingParents" ? YS(C) : [].concat(e),
    o = [].concat(r, [t]),
    i = o[0],
    s = o.reduce(function (a, l) {
      var c = Ci(C, l, n);
      return (
        (a.top = O5(c.top, a.top)),
        (a.right = r9(c.right, a.right)),
        (a.bottom = r9(c.bottom, a.bottom)),
        (a.left = O5(c.left, a.left)),
        a
      );
    }, Ci(C, i, n));
  return (
    (s.width = s.right - s.left),
    (s.height = s.bottom - s.top),
    (s.x = s.left),
    (s.y = s.top),
    s
  );
}
function Uu(C) {
  var e = C.reference,
    t = C.element,
    n = C.placement,
    r = n ? A2(n) : null,
    o = n ? B8(n) : null,
    i = e.x + e.width / 2 - t.width / 2,
    s = e.y + e.height / 2 - t.height / 2,
    a;
  switch (r) {
    case c3:
      a = { x: i, y: e.y - t.height };
      break;
    case Z3:
      a = { x: i, y: e.y + e.height };
      break;
    case W3:
      a = { x: e.x + e.width, y: s };
      break;
    case d3:
      a = { x: e.x - t.width, y: s };
      break;
    default:
      a = { x: e.x, y: e.y };
  }
  var l = r ? In(r) : null;
  if (l != null) {
    var c = l === "y" ? "height" : "width";
    switch (o) {
      case H8:
        a[l] = a[l] - (e[c] / 2 - t[c] / 2);
        break;
      case s0:
        a[l] = a[l] + (e[c] / 2 - t[c] / 2);
        break;
    }
  }
  return a;
}
function a0(C, e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.placement,
    r = n === void 0 ? C.placement : n,
    o = t.strategy,
    i = o === void 0 ? C.strategy : o,
    s = t.boundary,
    a = s === void 0 ? gS : s,
    l = t.rootBoundary,
    c = l === void 0 ? Nu : l,
    f = t.elementContext,
    d = f === void 0 ? h4 : f,
    S = t.altBoundary,
    v = S === void 0 ? !1 : S,
    g = t.padding,
    w = g === void 0 ? 0 : g,
    h = zu(typeof w != "number" ? w : Fu(w, P0)),
    p = d === h4 ? vS : h4,
    m = C.rects.popper,
    y = C.elements[v ? p : d],
    x = XS(j5(y) ? y : y.contextElement || m5(C.elements.popper), a, c, i),
    E = D8(C.elements.reference),
    A = Uu({ reference: E, element: m, strategy: "absolute", placement: r }),
    _ = He(Object.assign({}, m, A)),
    T = d === h4 ? _ : E,
    b = {
      top: x.top - T.top + h.top,
      bottom: T.bottom - x.bottom + h.bottom,
      left: x.left - T.left + h.left,
      right: T.right - x.right + h.right,
    },
    O = C.modifiersData.offset;
  if (d === h4 && O) {
    var M = O[r];
    Object.keys(b).forEach(function (I) {
      var R = [W3, Z3].indexOf(I) >= 0 ? 1 : -1,
        B = [c3, Z3].indexOf(I) >= 0 ? "y" : "x";
      b[I] += M[B] * R;
    });
  }
  return b;
}
function qS(C, e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.placement,
    r = t.boundary,
    o = t.rootBoundary,
    i = t.padding,
    s = t.flipVariations,
    a = t.allowedAutoPlacements,
    l = a === void 0 ? Hu : a,
    c = B8(n),
    f = c
      ? s
        ? Yo
        : Yo.filter(function (v) {
            return B8(v) === c;
          })
      : P0,
    d = f.filter(function (v) {
      return l.indexOf(v) >= 0;
    });
  d.length === 0 && (d = f);
  var S = d.reduce(function (v, g) {
    return (
      (v[g] = a0(C, { placement: g, boundary: r, rootBoundary: o, padding: i })[
        A2(g)
      ]),
      v
    );
  }, {});
  return Object.keys(S).sort(function (v, g) {
    return S[v] - S[g];
  });
}
function JS(C) {
  if (A2(C) === _n) return [];
  var e = b6(C);
  return [Jo(C), e, Jo(e)];
}
function Cx(C) {
  var e = C.state,
    t = C.options,
    n = C.name;
  if (!e.modifiersData[n]._skip) {
    for (
      var r = t.mainAxis,
        o = r === void 0 ? !0 : r,
        i = t.altAxis,
        s = i === void 0 ? !0 : i,
        a = t.fallbackPlacements,
        l = t.padding,
        c = t.boundary,
        f = t.rootBoundary,
        d = t.altBoundary,
        S = t.flipVariations,
        v = S === void 0 ? !0 : S,
        g = t.allowedAutoPlacements,
        w = e.options.placement,
        h = A2(w),
        p = h === w,
        m = a || (p || !v ? [b6(w)] : JS(w)),
        y = [w].concat(m).reduce(function (J, C1) {
          return J.concat(
            A2(C1) === _n
              ? qS(e, {
                  placement: C1,
                  boundary: c,
                  rootBoundary: f,
                  padding: l,
                  flipVariations: v,
                  allowedAutoPlacements: g,
                })
              : C1
          );
        }, []),
        x = e.rects.reference,
        E = e.rects.popper,
        A = new Map(),
        _ = !0,
        T = y[0],
        b = 0;
      b < y.length;
      b++
    ) {
      var O = y[b],
        M = A2(O),
        I = B8(O) === H8,
        R = [c3, Z3].indexOf(M) >= 0,
        B = R ? "width" : "height",
        H = a0(e, {
          placement: O,
          boundary: c,
          rootBoundary: f,
          altBoundary: d,
          padding: l,
        }),
        D = R ? (I ? W3 : d3) : I ? Z3 : c3;
      x[B] > E[B] && (D = b6(D));
      var k = b6(D),
        N = [];
      if (
        (o && N.push(H[M] <= 0),
        s && N.push(H[D] <= 0, H[k] <= 0),
        N.every(function (J) {
          return J;
        }))
      ) {
        (T = O), (_ = !1);
        break;
      }
      A.set(O, N);
    }
    if (_)
      for (
        var F = v ? 3 : 1,
          Z = function (C1) {
            var U = y.find(function (n1) {
              var s1 = A.get(n1);
              if (s1)
                return s1.slice(0, C1).every(function (r1) {
                  return r1;
                });
            });
            if (U) return (T = U), "break";
          },
          Q = F;
        Q > 0;
        Q--
      ) {
        var h1 = Z(Q);
        if (h1 === "break") break;
      }
    e.placement !== T &&
      ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
  }
}
const ex = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Cx,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function ei(C, e, t) {
  return (
    t === void 0 && (t = { x: 0, y: 0 }),
    {
      top: C.top - e.height - t.y,
      right: C.right - e.width + t.x,
      bottom: C.bottom - e.height + t.y,
      left: C.left - e.width - t.x,
    }
  );
}
function ti(C) {
  return [c3, W3, Z3, d3].some(function (e) {
    return C[e] >= 0;
  });
}
function tx(C) {
  var e = C.state,
    t = C.name,
    n = e.rects.reference,
    r = e.rects.popper,
    o = e.modifiersData.preventOverflow,
    i = a0(e, { elementContext: "reference" }),
    s = a0(e, { altBoundary: !0 }),
    a = ei(i, n),
    l = ei(s, r, o),
    c = ti(a),
    f = ti(l);
  (e.modifiersData[t] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: l,
    isReferenceHidden: c,
    hasPopperEscaped: f,
  }),
    (e.attributes.popper = Object.assign({}, e.attributes.popper, {
      "data-popper-reference-hidden": c,
      "data-popper-escaped": f,
    }));
}
const nx = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: tx,
};
function rx(C, e, t) {
  var n = A2(C),
    r = [d3, c3].indexOf(n) >= 0 ? -1 : 1,
    o = typeof t == "function" ? t(Object.assign({}, e, { placement: C })) : t,
    i = o[0],
    s = o[1];
  return (
    (i = i || 0),
    (s = (s || 0) * r),
    [d3, W3].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s }
  );
}
function ox(C) {
  var e = C.state,
    t = C.options,
    n = C.name,
    r = t.offset,
    o = r === void 0 ? [0, 0] : r,
    i = Hu.reduce(function (c, f) {
      return (c[f] = rx(f, e.rects, o)), c;
    }, {}),
    s = i[e.placement],
    a = s.x,
    l = s.y;
  e.modifiersData.popperOffsets != null &&
    ((e.modifiersData.popperOffsets.x += a),
    (e.modifiersData.popperOffsets.y += l)),
    (e.modifiersData[n] = i);
}
const ix = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ox,
};
function sx(C) {
  var e = C.state,
    t = C.name;
  e.modifiersData[t] = Uu({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement,
  });
}
const ax = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: sx,
  data: {},
};
function lx(C) {
  return C === "x" ? "y" : "x";
}
function ux(C) {
  var e = C.state,
    t = C.options,
    n = C.name,
    r = t.mainAxis,
    o = r === void 0 ? !0 : r,
    i = t.altAxis,
    s = i === void 0 ? !1 : i,
    a = t.boundary,
    l = t.rootBoundary,
    c = t.altBoundary,
    f = t.padding,
    d = t.tether,
    S = d === void 0 ? !0 : d,
    v = t.tetherOffset,
    g = v === void 0 ? 0 : v,
    w = a0(e, { boundary: a, rootBoundary: l, padding: f, altBoundary: c }),
    h = A2(e.placement),
    p = B8(e.placement),
    m = !p,
    y = In(h),
    x = lx(y),
    E = e.modifiersData.popperOffsets,
    A = e.rects.reference,
    _ = e.rects.popper,
    T =
      typeof g == "function"
        ? g(Object.assign({}, e.rects, { placement: e.placement }))
        : g,
    b =
      typeof T == "number"
        ? { mainAxis: T, altAxis: T }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
    O = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
    M = { x: 0, y: 0 };
  if (E) {
    if (o) {
      var I,
        R = y === "y" ? c3 : d3,
        B = y === "y" ? Z3 : W3,
        H = y === "y" ? "height" : "width",
        D = E[y],
        k = D + w[R],
        N = D - w[B],
        F = S ? -_[H] / 2 : 0,
        Z = p === H8 ? A[H] : _[H],
        Q = p === H8 ? -_[H] : -A[H],
        h1 = e.elements.arrow,
        J = S && h1 ? Mn(h1) : { width: 0, height: 0 },
        C1 = e.modifiersData["arrow#persistent"]
          ? e.modifiersData["arrow#persistent"].padding
          : Bu(),
        U = C1[R],
        n1 = C1[B],
        s1 = H4(0, A[H], J[H]),
        r1 = m ? A[H] / 2 - F - s1 - U - b.mainAxis : Z - s1 - U - b.mainAxis,
        z1 = m
          ? -A[H] / 2 + F + s1 + n1 + b.mainAxis
          : Q + s1 + n1 + b.mainAxis,
        F1 = e.elements.arrow && k0(e.elements.arrow),
        g5 = F1 ? (y === "y" ? F1.clientTop || 0 : F1.clientLeft || 0) : 0,
        v3 = (I = O == null ? void 0 : O[y]) != null ? I : 0,
        q3 = D + r1 - v3 - g5,
        O3 = D + z1 - v3,
        v5 = H4(S ? r9(k, q3) : k, D, S ? O5(N, O3) : N);
      (E[y] = v5), (M[y] = v5 - D);
    }
    if (s) {
      var F5,
        b2 = y === "x" ? c3 : d3,
        V5 = y === "x" ? Z3 : W3,
        q1 = E[x],
        a2 = x === "y" ? "height" : "width",
        T2 = q1 + w[b2],
        F2 = q1 - w[V5],
        J3 = [c3, d3].indexOf(h) !== -1,
        M3 = (F5 = O == null ? void 0 : O[x]) != null ? F5 : 0,
        P2 = J3 ? T2 : q1 - A[a2] - _[a2] - M3 + b.altAxis,
        V2 = J3 ? q1 + A[a2] + _[a2] - M3 - b.altAxis : F2,
        U5 = S && J3 ? RS(P2, q1, V2) : H4(S ? P2 : T2, q1, S ? V2 : F2);
      (E[x] = U5), (M[x] = U5 - q1);
    }
    e.modifiersData[n] = M;
  }
}
const cx = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ux,
  requiresIfExists: ["offset"],
};
function dx(C) {
  return { scrollLeft: C.scrollLeft, scrollTop: C.scrollTop };
}
function fx(C) {
  return C === b3(C) || !F3(C) ? Rn(C) : dx(C);
}
function px(C) {
  var e = C.getBoundingClientRect(),
    t = j8(e.width) / C.offsetWidth || 1,
    n = j8(e.height) / C.offsetHeight || 1;
  return t !== 1 || n !== 1;
}
function hx(C, e, t) {
  t === void 0 && (t = !1);
  var n = F3(e),
    r = F3(e) && px(e),
    o = m5(e),
    i = D8(C, r, t),
    s = { scrollLeft: 0, scrollTop: 0 },
    a = { x: 0, y: 0 };
  return (
    (n || (!n && !t)) &&
      ((E2(e) !== "body" || Hn(o)) && (s = fx(e)),
      F3(e)
        ? ((a = D8(e, !0)), (a.x += e.clientLeft), (a.y += e.clientTop))
        : o && (a.x = Nn(o))),
    {
      x: i.left + s.scrollLeft - a.x,
      y: i.top + s.scrollTop - a.y,
      width: i.width,
      height: i.height,
    }
  );
}
function mx(C) {
  var e = new Map(),
    t = new Set(),
    n = [];
  C.forEach(function (o) {
    e.set(o.name, o);
  });
  function r(o) {
    t.add(o.name);
    var i = [].concat(o.requires || [], o.requiresIfExists || []);
    i.forEach(function (s) {
      if (!t.has(s)) {
        var a = e.get(s);
        a && r(a);
      }
    }),
      n.push(o);
  }
  return (
    C.forEach(function (o) {
      t.has(o.name) || r(o);
    }),
    n
  );
}
function gx(C) {
  var e = mx(C);
  return PS.reduce(function (t, n) {
    return t.concat(
      e.filter(function (r) {
        return r.phase === n;
      })
    );
  }, []);
}
function vx(C) {
  var e;
  return function () {
    return (
      e ||
        (e = new Promise(function (t) {
          Promise.resolve().then(function () {
            (e = void 0), t(C());
          });
        })),
      e
    );
  };
}
function yx(C) {
  var e = C.reduce(function (t, n) {
    var r = t[n.name];
    return (
      (t[n.name] = r
        ? Object.assign({}, r, n, {
            options: Object.assign({}, r.options, n.options),
            data: Object.assign({}, r.data, n.data),
          })
        : n),
      t
    );
  }, {});
  return Object.keys(e).map(function (t) {
    return e[t];
  });
}
var ni = { placement: "bottom", modifiers: [], strategy: "absolute" };
function ri() {
  for (var C = arguments.length, e = new Array(C), t = 0; t < C; t++)
    e[t] = arguments[t];
  return !e.some(function (n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Sx(C) {
  C === void 0 && (C = {});
  var e = C,
    t = e.defaultModifiers,
    n = t === void 0 ? [] : t,
    r = e.defaultOptions,
    o = r === void 0 ? ni : r;
  return function (s, a, l) {
    l === void 0 && (l = o);
    var c = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ni, o),
        modifiersData: {},
        elements: { reference: s, popper: a },
        attributes: {},
        styles: {},
      },
      f = [],
      d = !1,
      S = {
        state: c,
        setOptions: function (h) {
          var p = typeof h == "function" ? h(c.options) : h;
          g(),
            (c.options = Object.assign({}, o, c.options, p)),
            (c.scrollParents = {
              reference: j5(s)
                ? j4(s)
                : s.contextElement
                ? j4(s.contextElement)
                : [],
              popper: j4(a),
            });
          var m = gx(yx([].concat(n, c.options.modifiers)));
          return (
            (c.orderedModifiers = m.filter(function (y) {
              return y.enabled;
            })),
            v(),
            S.update()
          );
        },
        forceUpdate: function () {
          if (!d) {
            var h = c.elements,
              p = h.reference,
              m = h.popper;
            if (ri(p, m)) {
              (c.rects = {
                reference: hx(p, k0(m), c.options.strategy === "fixed"),
                popper: Mn(m),
              }),
                (c.reset = !1),
                (c.placement = c.options.placement),
                c.orderedModifiers.forEach(function (b) {
                  return (c.modifiersData[b.name] = Object.assign({}, b.data));
                });
              for (var y = 0; y < c.orderedModifiers.length; y++) {
                if (c.reset === !0) {
                  (c.reset = !1), (y = -1);
                  continue;
                }
                var x = c.orderedModifiers[y],
                  E = x.fn,
                  A = x.options,
                  _ = A === void 0 ? {} : A,
                  T = x.name;
                typeof E == "function" &&
                  (c = E({ state: c, options: _, name: T, instance: S }) || c);
              }
            }
          }
        },
        update: vx(function () {
          return new Promise(function (w) {
            S.forceUpdate(), w(c);
          });
        }),
        destroy: function () {
          g(), (d = !0);
        },
      };
    if (!ri(s, a)) return S;
    S.setOptions(l).then(function (w) {
      !d && l.onFirstUpdate && l.onFirstUpdate(w);
    });
    function v() {
      c.orderedModifiers.forEach(function (w) {
        var h = w.name,
          p = w.options,
          m = p === void 0 ? {} : p,
          y = w.effect;
        if (typeof y == "function") {
          var x = y({ state: c, name: h, instance: S, options: m }),
            E = function () {};
          f.push(x || E);
        }
      });
    }
    function g() {
      f.forEach(function (w) {
        return w();
      }),
        (f = []);
    }
    return S;
  };
}
var xx = [$S, ax, VS, OS, ix, ex, cx, DS, nx],
  Ax = Sx({ defaultModifiers: xx });
const $u = "Popper";
function Ex(C) {
  return Iu($u, C);
}
Jy($u, ["root"]);
const wx = [
    "anchorEl",
    "children",
    "direction",
    "disablePortal",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "slotProps",
    "slots",
    "TransitionProps",
    "ownerState",
  ],
  Lx = [
    "anchorEl",
    "children",
    "container",
    "direction",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "style",
    "transition",
    "slotProps",
    "slots",
  ];
function bx(C, e) {
  if (e === "ltr") return C;
  switch (C) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return C;
  }
}
function je(C) {
  return typeof C == "function" ? C() : C;
}
function Tx(C) {
  return C.nodeType !== void 0;
}
const Px = () => g3({ root: ["root"] }, Jv(Ex)),
  kx = {},
  _x = L.forwardRef(function (e, t) {
    var n;
    const {
        anchorEl: r,
        children: o,
        direction: i,
        disablePortal: s,
        modifiers: a,
        open: l,
        placement: c,
        popperOptions: f,
        popperRef: d,
        slotProps: S = {},
        slots: v = {},
        TransitionProps: g,
      } = e,
      w = X(e, wx),
      h = L.useRef(null),
      p = p3(h, t),
      m = L.useRef(null),
      y = p3(m, d),
      x = L.useRef(y);
    N8(() => {
      x.current = y;
    }, [y]),
      L.useImperativeHandle(d, () => m.current, []);
    const E = bx(c, i),
      [A, _] = L.useState(E),
      [T, b] = L.useState(je(r));
    L.useEffect(() => {
      m.current && m.current.forceUpdate();
    }),
      L.useEffect(() => {
        r && b(je(r));
      }, [r]),
      N8(() => {
        if (!T || !l) return;
        const B = (k) => {
          _(k.placement);
        };
        let H = [
          { name: "preventOverflow", options: { altBoundary: s } },
          { name: "flip", options: { altBoundary: s } },
          {
            name: "onUpdate",
            enabled: !0,
            phase: "afterWrite",
            fn: ({ state: k }) => {
              B(k);
            },
          },
        ];
        a != null && (H = H.concat(a)),
          f && f.modifiers != null && (H = H.concat(f.modifiers));
        const D = Ax(T, h.current, P({ placement: E }, f, { modifiers: H }));
        return (
          x.current(D),
          () => {
            D.destroy(), x.current(null);
          }
        );
      }, [T, s, a, l, f, E]);
    const O = { placement: A };
    g !== null && (O.TransitionProps = g);
    const M = Px(),
      I = (n = v.root) != null ? n : "div",
      R = Ie({
        elementType: I,
        externalSlotProps: S.root,
        externalForwardedProps: w,
        additionalProps: { role: "tooltip", ref: p },
        ownerState: e,
        className: M.root,
      });
    return u.jsx(I, P({}, R, { children: typeof o == "function" ? o(O) : o }));
  }),
  Ox = L.forwardRef(function (e, t) {
    const {
        anchorEl: n,
        children: r,
        container: o,
        direction: i = "ltr",
        disablePortal: s = !1,
        keepMounted: a = !1,
        modifiers: l,
        open: c,
        placement: f = "bottom",
        popperOptions: d = kx,
        popperRef: S,
        style: v,
        transition: g = !1,
        slotProps: w = {},
        slots: h = {},
      } = e,
      p = X(e, Lx),
      [m, y] = L.useState(!0),
      x = () => {
        y(!1);
      },
      E = () => {
        y(!0);
      };
    if (!a && !c && (!g || m)) return null;
    let A;
    if (o) A = o;
    else if (n) {
      const b = je(n);
      A = b && Tx(b) ? x2(b).body : x2(null).body;
    }
    const _ = !c && a && (!g || m) ? "none" : void 0,
      T = g ? { in: c, onEnter: x, onExited: E } : void 0;
    return u.jsx(Ru, {
      disablePortal: s,
      container: A,
      children: u.jsx(
        _x,
        P(
          {
            anchorEl: n,
            direction: i,
            disablePortal: s,
            modifiers: l,
            ref: t,
            open: g ? !m : c,
            placement: f,
            popperOptions: d,
            popperRef: S,
            slotProps: w,
            slots: h,
          },
          p,
          {
            style: P({ position: "fixed", top: 0, left: 0, display: _ }, v),
            TransitionProps: T,
            children: r,
          }
        )
      ),
    });
  });
var jn = {};
Object.defineProperty(jn, "__esModule", { value: !0 });
var Zu = (jn.default = void 0),
  Mx = Rx(L),
  Ix = Au;
function Wu(C) {
  if (typeof WeakMap != "function") return null;
  var e = new WeakMap(),
    t = new WeakMap();
  return (Wu = function (n) {
    return n ? t : e;
  })(C);
}
function Rx(C, e) {
  if (C && C.__esModule) return C;
  if (C === null || (typeof C != "object" && typeof C != "function"))
    return { default: C };
  var t = Wu(e);
  if (t && t.has(C)) return t.get(C);
  var n = { __proto__: null },
    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in C)
    if (o !== "default" && Object.prototype.hasOwnProperty.call(C, o)) {
      var i = r ? Object.getOwnPropertyDescriptor(C, o) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, o, i) : (n[o] = C[o]);
    }
  return (n.default = C), t && t.set(C, n), n;
}
function Nx(C) {
  return Object.keys(C).length === 0;
}
function Hx(C = null) {
  const e = Mx.useContext(Ix.ThemeContext);
  return !e || Nx(e) ? C : e;
}
Zu = jn.default = Hx;
const jx = [
    "anchorEl",
    "component",
    "components",
    "componentsProps",
    "container",
    "disablePortal",
    "keepMounted",
    "modifiers",
    "open",
    "placement",
    "popperOptions",
    "popperRef",
    "transition",
    "slots",
    "slotProps",
  ],
  Dx = a1(Ox, {
    name: "MuiPopper",
    slot: "Root",
    overridesResolver: (C, e) => e.root,
  })({}),
  Ku = L.forwardRef(function (e, t) {
    var n;
    const r = Zu(),
      o = _3({ props: e, name: "MuiPopper" }),
      {
        anchorEl: i,
        component: s,
        components: a,
        componentsProps: l,
        container: c,
        disablePortal: f,
        keepMounted: d,
        modifiers: S,
        open: v,
        placement: g,
        popperOptions: w,
        popperRef: h,
        transition: p,
        slots: m,
        slotProps: y,
      } = o,
      x = X(o, jx),
      E =
        (n = m == null ? void 0 : m.root) != null
          ? n
          : a == null
          ? void 0
          : a.Root,
      A = P(
        {
          anchorEl: i,
          container: c,
          disablePortal: f,
          keepMounted: d,
          modifiers: S,
          open: v,
          placement: g,
          popperOptions: w,
          popperRef: h,
          transition: p,
        },
        x
      );
    return u.jsx(
      Dx,
      P(
        {
          as: s,
          direction: r == null ? void 0 : r.direction,
          slots: { root: E },
          slotProps: y ?? l,
        },
        A,
        { ref: t }
      )
    );
  }),
  Bx = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ],
  zx = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  Fx = L.forwardRef(function (e, t) {
    const n = h5(),
      r = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        addEndListener: o,
        appear: i = !0,
        children: s,
        easing: a,
        in: l,
        onEnter: c,
        onEntered: f,
        onEntering: d,
        onExit: S,
        onExited: v,
        onExiting: g,
        style: w,
        timeout: h = r,
        TransitionComponent: p = Y3,
      } = e,
      m = X(e, Bx),
      y = L.useRef(null),
      x = p3(y, s.ref, t),
      E = (R) => (B) => {
        if (R) {
          const H = y.current;
          B === void 0 ? R(H) : R(H, B);
        }
      },
      A = E(d),
      _ = E((R, B) => {
        Pn(R);
        const H = c5({ style: w, timeout: h, easing: a }, { mode: "enter" });
        (R.style.webkitTransition = n.transitions.create("opacity", H)),
          (R.style.transition = n.transitions.create("opacity", H)),
          c && c(R, B);
      }),
      T = E(f),
      b = E(g),
      O = E((R) => {
        const B = c5({ style: w, timeout: h, easing: a }, { mode: "exit" });
        (R.style.webkitTransition = n.transitions.create("opacity", B)),
          (R.style.transition = n.transitions.create("opacity", B)),
          S && S(R);
      }),
      M = E(v),
      I = (R) => {
        o && o(y.current, R);
      };
    return u.jsx(
      p,
      P(
        {
          appear: i,
          in: l,
          nodeRef: y,
          onEnter: _,
          onEntered: T,
          onEntering: A,
          onExit: O,
          onExited: M,
          onExiting: b,
          addEndListener: I,
          timeout: h,
        },
        m,
        {
          children: (R, B) =>
            L.cloneElement(
              s,
              P(
                {
                  style: P(
                    {
                      opacity: 0,
                      visibility: R === "exited" && !l ? "hidden" : void 0,
                    },
                    zx[R],
                    w,
                    s.props.style
                  ),
                  ref: x,
                },
                B
              )
            ),
        }
      )
    );
  });
function Vx(C) {
  return h3("MuiBackdrop", C);
}
m3("MuiBackdrop", ["root", "invisible"]);
const Ux = [
    "children",
    "className",
    "component",
    "components",
    "componentsProps",
    "invisible",
    "open",
    "slotProps",
    "slots",
    "TransitionComponent",
    "transitionDuration",
  ],
  $x = (C) => {
    const { classes: e, invisible: t } = C;
    return g3({ root: ["root", t && "invisible"] }, Vx, e);
  },
  Zx = a1("div", {
    name: "MuiBackdrop",
    slot: "Root",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [e.root, t.invisible && e.invisible];
    },
  })(({ ownerState: C }) =>
    P(
      {
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        WebkitTapHighlightColor: "transparent",
      },
      C.invisible && { backgroundColor: "transparent" }
    )
  ),
  Wx = L.forwardRef(function (e, t) {
    var n, r, o;
    const i = _3({ props: e, name: "MuiBackdrop" }),
      {
        children: s,
        className: a,
        component: l = "div",
        components: c = {},
        componentsProps: f = {},
        invisible: d = !1,
        open: S,
        slotProps: v = {},
        slots: g = {},
        TransitionComponent: w = Fx,
        transitionDuration: h,
      } = i,
      p = X(i, Ux),
      m = P({}, i, { component: l, invisible: d }),
      y = $x(m),
      x = (n = v.root) != null ? n : f.root;
    return u.jsx(
      w,
      P({ in: S, timeout: h }, p, {
        children: u.jsx(
          Zx,
          P({ "aria-hidden": !0 }, x, {
            as: (r = (o = g.root) != null ? o : c.Root) != null ? r : l,
            className: e1(y.root, a, x == null ? void 0 : x.className),
            ownerState: P({}, m, x == null ? void 0 : x.ownerState),
            classes: y,
            ref: t,
            children: s,
          })
        ),
      })
    );
  });
function Kx(C) {
  return h3("MuiButton", C);
}
const t6 = m3("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "colorPrimary",
    "colorSecondary",
    "colorSuccess",
    "colorError",
    "colorInfo",
    "colorWarning",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "icon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Gx = L.createContext({}),
  Qx = L.createContext(void 0),
  Yx = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  Xx = (C) => {
    const {
        color: e,
        disableElevation: t,
        fullWidth: n,
        size: r,
        variant: o,
        classes: i,
      } = C,
      s = {
        root: [
          "root",
          o,
          `${o}${f1(e)}`,
          `size${f1(r)}`,
          `${o}Size${f1(r)}`,
          `color${f1(e)}`,
          t && "disableElevation",
          n && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["icon", "startIcon", `iconSize${f1(r)}`],
        endIcon: ["icon", "endIcon", `iconSize${f1(r)}`],
      },
      a = g3(s, Kx, i);
    return P({}, i, a);
  },
  Gu = (C) =>
    P(
      {},
      C.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      C.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      C.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  qx = a1(kn, {
    shouldForwardProp: (C) => An(C) || C === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [
        e.root,
        e[t.variant],
        e[`${t.variant}${f1(t.color)}`],
        e[`size${f1(t.size)}`],
        e[`${t.variant}Size${f1(t.size)}`],
        t.color === "inherit" && e.colorInherit,
        t.disableElevation && e.disableElevation,
        t.fullWidth && e.fullWidth,
      ];
    },
  })(
    ({ theme: C, ownerState: e }) => {
      var t, n;
      const r =
          C.palette.mode === "light"
            ? C.palette.grey[300]
            : C.palette.grey[800],
        o =
          C.palette.mode === "light"
            ? C.palette.grey.A100
            : C.palette.grey[700];
      return P(
        {},
        C.typography.button,
        {
          minWidth: 64,
          padding: "6px 16px",
          borderRadius: (C.vars || C).shape.borderRadius,
          transition: C.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: C.transitions.duration.short }
          ),
          "&:hover": P(
            {
              textDecoration: "none",
              backgroundColor: C.vars
                ? `rgba(${C.vars.palette.text.primaryChannel} / ${C.vars.palette.action.hoverOpacity})`
                : h2(C.palette.text.primary, C.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            e.variant === "text" &&
              e.color !== "inherit" && {
                backgroundColor: C.vars
                  ? `rgba(${C.vars.palette[e.color].mainChannel} / ${
                      C.vars.palette.action.hoverOpacity
                    })`
                  : h2(C.palette[e.color].main, C.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            e.variant === "outlined" &&
              e.color !== "inherit" && {
                border: `1px solid ${(C.vars || C).palette[e.color].main}`,
                backgroundColor: C.vars
                  ? `rgba(${C.vars.palette[e.color].mainChannel} / ${
                      C.vars.palette.action.hoverOpacity
                    })`
                  : h2(C.palette[e.color].main, C.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            e.variant === "contained" && {
              backgroundColor: C.vars
                ? C.vars.palette.Button.inheritContainedHoverBg
                : o,
              boxShadow: (C.vars || C).shadows[4],
              "@media (hover: none)": {
                boxShadow: (C.vars || C).shadows[2],
                backgroundColor: (C.vars || C).palette.grey[300],
              },
            },
            e.variant === "contained" &&
              e.color !== "inherit" && {
                backgroundColor: (C.vars || C).palette[e.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (C.vars || C).palette[e.color].main,
                },
              }
          ),
          "&:active": P(
            {},
            e.variant === "contained" && { boxShadow: (C.vars || C).shadows[8] }
          ),
          [`&.${t6.focusVisible}`]: P(
            {},
            e.variant === "contained" && { boxShadow: (C.vars || C).shadows[6] }
          ),
          [`&.${t6.disabled}`]: P(
            { color: (C.vars || C).palette.action.disabled },
            e.variant === "outlined" && {
              border: `1px solid ${
                (C.vars || C).palette.action.disabledBackground
              }`,
            },
            e.variant === "contained" && {
              color: (C.vars || C).palette.action.disabled,
              boxShadow: (C.vars || C).shadows[0],
              backgroundColor: (C.vars || C).palette.action.disabledBackground,
            }
          ),
        },
        e.variant === "text" && { padding: "6px 8px" },
        e.variant === "text" &&
          e.color !== "inherit" && {
            color: (C.vars || C).palette[e.color].main,
          },
        e.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        e.variant === "outlined" &&
          e.color !== "inherit" && {
            color: (C.vars || C).palette[e.color].main,
            border: C.vars
              ? `1px solid rgba(${C.vars.palette[e.color].mainChannel} / 0.5)`
              : `1px solid ${h2(C.palette[e.color].main, 0.5)}`,
          },
        e.variant === "contained" && {
          color: C.vars
            ? C.vars.palette.text.primary
            : (t = (n = C.palette).getContrastText) == null
            ? void 0
            : t.call(n, C.palette.grey[300]),
          backgroundColor: C.vars
            ? C.vars.palette.Button.inheritContainedBg
            : r,
          boxShadow: (C.vars || C).shadows[2],
        },
        e.variant === "contained" &&
          e.color !== "inherit" && {
            color: (C.vars || C).palette[e.color].contrastText,
            backgroundColor: (C.vars || C).palette[e.color].main,
          },
        e.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        e.size === "small" &&
          e.variant === "text" && {
            padding: "4px 5px",
            fontSize: C.typography.pxToRem(13),
          },
        e.size === "large" &&
          e.variant === "text" && {
            padding: "8px 11px",
            fontSize: C.typography.pxToRem(15),
          },
        e.size === "small" &&
          e.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: C.typography.pxToRem(13),
          },
        e.size === "large" &&
          e.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: C.typography.pxToRem(15),
          },
        e.size === "small" &&
          e.variant === "contained" && {
            padding: "4px 10px",
            fontSize: C.typography.pxToRem(13),
          },
        e.size === "large" &&
          e.variant === "contained" && {
            padding: "8px 22px",
            fontSize: C.typography.pxToRem(15),
          },
        e.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: C }) =>
      C.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${t6.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${t6.disabled}`]: { boxShadow: "none" },
      }
  ),
  Jx = a1("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [e.startIcon, e[`iconSize${f1(t.size)}`]];
    },
  })(({ ownerState: C }) =>
    P(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      C.size === "small" && { marginLeft: -2 },
      Gu(C)
    )
  ),
  CA = a1("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [e.endIcon, e[`iconSize${f1(t.size)}`]];
    },
  })(({ ownerState: C }) =>
    P(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      C.size === "small" && { marginRight: -2 },
      Gu(C)
    )
  ),
  n6 = L.forwardRef(function (e, t) {
    const n = L.useContext(Gx),
      r = L.useContext(Qx),
      o = gn(n, e),
      i = _3({ props: o, name: "MuiButton" }),
      {
        children: s,
        color: a = "primary",
        component: l = "button",
        className: c,
        disabled: f = !1,
        disableElevation: d = !1,
        disableFocusRipple: S = !1,
        endIcon: v,
        focusVisibleClassName: g,
        fullWidth: w = !1,
        size: h = "medium",
        startIcon: p,
        type: m,
        variant: y = "text",
      } = i,
      x = X(i, Yx),
      E = P({}, i, {
        color: a,
        component: l,
        disabled: f,
        disableElevation: d,
        disableFocusRipple: S,
        fullWidth: w,
        size: h,
        type: m,
        variant: y,
      }),
      A = Xx(E),
      _ =
        p && u.jsx(Jx, { className: A.startIcon, ownerState: E, children: p }),
      T = v && u.jsx(CA, { className: A.endIcon, ownerState: E, children: v }),
      b = r || "";
    return u.jsxs(
      qx,
      P(
        {
          ownerState: E,
          className: e1(n.className, A.root, c, b),
          component: l,
          disabled: f,
          focusRipple: !S,
          focusVisibleClassName: e1(A.focusVisible, g),
          ref: t,
          type: m,
        },
        x,
        { classes: A, children: [_, s, T] }
      )
    );
  });
function eA(C) {
  return h3("MuiModal", C);
}
m3("MuiModal", ["root", "hidden", "backdrop"]);
const tA = [
    "BackdropComponent",
    "BackdropProps",
    "classes",
    "className",
    "closeAfterTransition",
    "children",
    "container",
    "component",
    "components",
    "componentsProps",
    "disableAutoFocus",
    "disableEnforceFocus",
    "disableEscapeKeyDown",
    "disablePortal",
    "disableRestoreFocus",
    "disableScrollLock",
    "hideBackdrop",
    "keepMounted",
    "onBackdropClick",
    "onClose",
    "onTransitionEnter",
    "onTransitionExited",
    "open",
    "slotProps",
    "slots",
    "theme",
  ],
  nA = (C) => {
    const { open: e, exited: t, classes: n } = C;
    return g3(
      { root: ["root", !e && t && "hidden"], backdrop: ["backdrop"] },
      eA,
      n
    );
  },
  rA = a1("div", {
    name: "MuiModal",
    slot: "Root",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [e.root, !t.open && t.exited && e.hidden];
    },
  })(({ theme: C, ownerState: e }) =>
    P(
      {
        position: "fixed",
        zIndex: (C.vars || C).zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },
      !e.open && e.exited && { visibility: "hidden" }
    )
  ),
  oA = a1(Wx, {
    name: "MuiModal",
    slot: "Backdrop",
    overridesResolver: (C, e) => e.backdrop,
  })({ zIndex: -1 }),
  iA = L.forwardRef(function (e, t) {
    var n, r, o, i, s, a;
    const l = _3({ name: "MuiModal", props: e }),
      {
        BackdropComponent: c = oA,
        BackdropProps: f,
        className: d,
        closeAfterTransition: S = !1,
        children: v,
        container: g,
        component: w,
        components: h = {},
        componentsProps: p = {},
        disableAutoFocus: m = !1,
        disableEnforceFocus: y = !1,
        disableEscapeKeyDown: x = !1,
        disablePortal: E = !1,
        disableRestoreFocus: A = !1,
        disableScrollLock: _ = !1,
        hideBackdrop: T = !1,
        keepMounted: b = !1,
        onBackdropClick: O,
        open: M,
        slotProps: I,
        slots: R,
      } = l,
      B = X(l, tA),
      H = P({}, l, {
        closeAfterTransition: S,
        disableAutoFocus: m,
        disableEnforceFocus: y,
        disableEscapeKeyDown: x,
        disablePortal: E,
        disableRestoreFocus: A,
        disableScrollLock: _,
        hideBackdrop: T,
        keepMounted: b,
      }),
      {
        getRootProps: D,
        getBackdropProps: k,
        getTransitionProps: N,
        portalRef: F,
        isTopModal: Z,
        exited: Q,
        hasTransition: h1,
      } = mS(P({}, H, { rootRef: t })),
      J = P({}, H, { exited: Q }),
      C1 = nA(J),
      U = {};
    if ((v.props.tabIndex === void 0 && (U.tabIndex = "-1"), h1)) {
      const { onEnter: v3, onExited: q3 } = N();
      (U.onEnter = v3), (U.onExited = q3);
    }
    const n1 =
        (n = (r = R == null ? void 0 : R.root) != null ? r : h.Root) != null
          ? n
          : rA,
      s1 =
        (o = (i = R == null ? void 0 : R.backdrop) != null ? i : h.Backdrop) !=
        null
          ? o
          : c,
      r1 = (s = I == null ? void 0 : I.root) != null ? s : p.root,
      z1 = (a = I == null ? void 0 : I.backdrop) != null ? a : p.backdrop,
      F1 = Ie({
        elementType: n1,
        externalSlotProps: r1,
        externalForwardedProps: B,
        getSlotProps: D,
        additionalProps: { ref: t, as: w },
        ownerState: J,
        className: e1(
          d,
          r1 == null ? void 0 : r1.className,
          C1 == null ? void 0 : C1.root,
          !J.open && J.exited && (C1 == null ? void 0 : C1.hidden)
        ),
      }),
      g5 = Ie({
        elementType: s1,
        externalSlotProps: z1,
        additionalProps: f,
        getSlotProps: (v3) =>
          k(
            P({}, v3, {
              onClick: (q3) => {
                O && O(q3), v3 != null && v3.onClick && v3.onClick(q3);
              },
            })
          ),
        className: e1(
          z1 == null ? void 0 : z1.className,
          f == null ? void 0 : f.className,
          C1 == null ? void 0 : C1.backdrop
        ),
        ownerState: J,
      });
    return !b && !M && (!h1 || Q)
      ? null
      : u.jsx(Ru, {
          ref: F,
          container: g,
          disablePortal: E,
          children: u.jsxs(
            n1,
            P({}, F1, {
              children: [
                !T && c ? u.jsx(s1, P({}, g5)) : null,
                u.jsx(iS, {
                  disableEnforceFocus: y,
                  disableAutoFocus: m,
                  disableRestoreFocus: A,
                  isEnabled: Z,
                  open: M,
                  children: L.cloneElement(v, U),
                }),
              ],
            })
          ),
        });
  }),
  sA = [
    "addEndListener",
    "appear",
    "children",
    "container",
    "direction",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function aA(C, e, t) {
  const n = e.getBoundingClientRect(),
    r = t && t.getBoundingClientRect(),
    o = L0(e);
  let i;
  if (e.fakeTransform) i = e.fakeTransform;
  else {
    const l = o.getComputedStyle(e);
    i =
      l.getPropertyValue("-webkit-transform") ||
      l.getPropertyValue("transform");
  }
  let s = 0,
    a = 0;
  if (i && i !== "none" && typeof i == "string") {
    const l = i.split("(")[1].split(")")[0].split(",");
    (s = parseInt(l[4], 10)), (a = parseInt(l[5], 10));
  }
  return C === "left"
    ? r
      ? `translateX(${r.right + s - n.left}px)`
      : `translateX(${o.innerWidth + s - n.left}px)`
    : C === "right"
    ? r
      ? `translateX(-${n.right - r.left - s}px)`
      : `translateX(-${n.left + n.width - s}px)`
    : C === "up"
    ? r
      ? `translateY(${r.bottom + a - n.top}px)`
      : `translateY(${o.innerHeight + a - n.top}px)`
    : r
    ? `translateY(-${n.top - r.top + n.height - a}px)`
    : `translateY(-${n.top + n.height - a}px)`;
}
function lA(C) {
  return typeof C == "function" ? C() : C;
}
function r6(C, e, t) {
  const n = lA(t),
    r = aA(C, e, n);
  r && ((e.style.webkitTransform = r), (e.style.transform = r));
}
const uA = L.forwardRef(function (e, t) {
  const n = h5(),
    r = {
      enter: n.transitions.easing.easeOut,
      exit: n.transitions.easing.sharp,
    },
    o = {
      enter: n.transitions.duration.enteringScreen,
      exit: n.transitions.duration.leavingScreen,
    },
    {
      addEndListener: i,
      appear: s = !0,
      children: a,
      container: l,
      direction: c = "down",
      easing: f = r,
      in: d,
      onEnter: S,
      onEntered: v,
      onEntering: g,
      onExit: w,
      onExited: h,
      onExiting: p,
      style: m,
      timeout: y = o,
      TransitionComponent: x = Y3,
    } = e,
    E = X(e, sA),
    A = L.useRef(null),
    _ = p3(a.ref, A, t),
    T = (k) => (N) => {
      k && (N === void 0 ? k(A.current) : k(A.current, N));
    },
    b = T((k, N) => {
      r6(c, k, l), Pn(k), S && S(k, N);
    }),
    O = T((k, N) => {
      const F = c5({ timeout: y, style: m, easing: f }, { mode: "enter" });
      (k.style.webkitTransition = n.transitions.create(
        "-webkit-transform",
        P({}, F)
      )),
        (k.style.transition = n.transitions.create("transform", P({}, F))),
        (k.style.webkitTransform = "none"),
        (k.style.transform = "none"),
        g && g(k, N);
    }),
    M = T(v),
    I = T(p),
    R = T((k) => {
      const N = c5({ timeout: y, style: m, easing: f }, { mode: "exit" });
      (k.style.webkitTransition = n.transitions.create("-webkit-transform", N)),
        (k.style.transition = n.transitions.create("transform", N)),
        r6(c, k, l),
        w && w(k);
    }),
    B = T((k) => {
      (k.style.webkitTransition = ""), (k.style.transition = ""), h && h(k);
    }),
    H = (k) => {
      i && i(A.current, k);
    },
    D = L.useCallback(() => {
      A.current && r6(c, A.current, l);
    }, [c, l]);
  return (
    L.useEffect(() => {
      if (d || c === "down" || c === "right") return;
      const k = Xm(() => {
          A.current && r6(c, A.current, l);
        }),
        N = L0(A.current);
      return (
        N.addEventListener("resize", k),
        () => {
          k.clear(), N.removeEventListener("resize", k);
        }
      );
    }, [c, d, l]),
    L.useEffect(() => {
      d || D();
    }, [d, D]),
    u.jsx(
      x,
      P(
        {
          nodeRef: A,
          onEnter: b,
          onEntered: M,
          onEntering: O,
          onExit: R,
          onExited: B,
          onExiting: I,
          addEndListener: H,
          appear: s,
          in: d,
          timeout: y,
        },
        E,
        {
          children: (k, N) =>
            L.cloneElement(
              a,
              P(
                {
                  ref: _,
                  style: P(
                    { visibility: k === "exited" && !d ? "hidden" : void 0 },
                    m,
                    a.props.style
                  ),
                },
                N
              )
            ),
        }
      )
    )
  );
});
function cA(C) {
  return h3("MuiDrawer", C);
}
m3("MuiDrawer", [
  "root",
  "docked",
  "paper",
  "paperAnchorLeft",
  "paperAnchorRight",
  "paperAnchorTop",
  "paperAnchorBottom",
  "paperAnchorDockedLeft",
  "paperAnchorDockedRight",
  "paperAnchorDockedTop",
  "paperAnchorDockedBottom",
  "modal",
]);
const dA = ["BackdropProps"],
  fA = [
    "anchor",
    "BackdropProps",
    "children",
    "className",
    "elevation",
    "hideBackdrop",
    "ModalProps",
    "onClose",
    "open",
    "PaperProps",
    "SlideProps",
    "TransitionComponent",
    "transitionDuration",
    "variant",
  ],
  Qu = (C, e) => {
    const { ownerState: t } = C;
    return [
      e.root,
      (t.variant === "permanent" || t.variant === "persistent") && e.docked,
      e.modal,
    ];
  },
  pA = (C) => {
    const { classes: e, anchor: t, variant: n } = C,
      r = {
        root: ["root"],
        docked: [(n === "permanent" || n === "persistent") && "docked"],
        modal: ["modal"],
        paper: [
          "paper",
          `paperAnchor${f1(t)}`,
          n !== "temporary" && `paperAnchorDocked${f1(t)}`,
        ],
      };
    return g3(r, cA, e);
  },
  hA = a1(iA, { name: "MuiDrawer", slot: "Root", overridesResolver: Qu })(
    ({ theme: C }) => ({ zIndex: (C.vars || C).zIndex.drawer })
  ),
  oi = a1("div", {
    shouldForwardProp: An,
    name: "MuiDrawer",
    slot: "Docked",
    skipVariantsResolver: !1,
    overridesResolver: Qu,
  })({ flex: "0 0 auto" }),
  mA = a1(Tu, {
    name: "MuiDrawer",
    slot: "Paper",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [
        e.paper,
        e[`paperAnchor${f1(t.anchor)}`],
        t.variant !== "temporary" && e[`paperAnchorDocked${f1(t.anchor)}`],
      ];
    },
  })(({ theme: C, ownerState: e }) =>
    P(
      {
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: "1 0 auto",
        zIndex: (C.vars || C).zIndex.drawer,
        WebkitOverflowScrolling: "touch",
        position: "fixed",
        top: 0,
        outline: 0,
      },
      e.anchor === "left" && { left: 0 },
      e.anchor === "top" && {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      e.anchor === "right" && { right: 0 },
      e.anchor === "bottom" && {
        top: "auto",
        left: 0,
        bottom: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      },
      e.anchor === "left" &&
        e.variant !== "temporary" && {
          borderRight: `1px solid ${(C.vars || C).palette.divider}`,
        },
      e.anchor === "top" &&
        e.variant !== "temporary" && {
          borderBottom: `1px solid ${(C.vars || C).palette.divider}`,
        },
      e.anchor === "right" &&
        e.variant !== "temporary" && {
          borderLeft: `1px solid ${(C.vars || C).palette.divider}`,
        },
      e.anchor === "bottom" &&
        e.variant !== "temporary" && {
          borderTop: `1px solid ${(C.vars || C).palette.divider}`,
        }
    )
  ),
  Yu = { left: "right", right: "left", top: "down", bottom: "up" };
function gA(C) {
  return ["left", "right"].indexOf(C) !== -1;
}
function vA({ direction: C }, e) {
  return C === "rtl" && gA(e) ? Yu[e] : e;
}
const yA = L.forwardRef(function (e, t) {
    const n = _3({ props: e, name: "MuiDrawer" }),
      r = h5(),
      o = cu(),
      i = {
        enter: r.transitions.duration.enteringScreen,
        exit: r.transitions.duration.leavingScreen,
      },
      {
        anchor: s = "left",
        BackdropProps: a,
        children: l,
        className: c,
        elevation: f = 16,
        hideBackdrop: d = !1,
        ModalProps: { BackdropProps: S } = {},
        onClose: v,
        open: g = !1,
        PaperProps: w = {},
        SlideProps: h,
        TransitionComponent: p = uA,
        transitionDuration: m = i,
        variant: y = "temporary",
      } = n,
      x = X(n.ModalProps, dA),
      E = X(n, fA),
      A = L.useRef(!1);
    L.useEffect(() => {
      A.current = !0;
    }, []);
    const _ = vA({ direction: o ? "rtl" : "ltr" }, s),
      b = P({}, n, { anchor: s, elevation: f, open: g, variant: y }, E),
      O = pA(b),
      M = u.jsx(
        mA,
        P({ elevation: y === "temporary" ? f : 0, square: !0 }, w, {
          className: e1(O.paper, w.className),
          ownerState: b,
          children: l,
        })
      );
    if (y === "permanent")
      return u.jsx(
        oi,
        P({ className: e1(O.root, O.docked, c), ownerState: b, ref: t }, E, {
          children: M,
        })
      );
    const I = u.jsx(
      p,
      P({ in: g, direction: Yu[_], timeout: m, appear: A.current }, h, {
        children: M,
      })
    );
    return y === "persistent"
      ? u.jsx(
          oi,
          P({ className: e1(O.root, O.docked, c), ownerState: b, ref: t }, E, {
            children: I,
          })
        )
      : u.jsx(
          hA,
          P(
            {
              BackdropProps: P({}, a, S, { transitionDuration: m }),
              className: e1(O.root, O.modal, c),
              open: g,
              ownerState: b,
              onClose: v,
              hideBackdrop: d,
              ref: t,
            },
            E,
            x,
            { children: I }
          )
        );
  }),
  SA = [
    "addEndListener",
    "appear",
    "children",
    "easing",
    "in",
    "onEnter",
    "onEntered",
    "onEntering",
    "onExit",
    "onExited",
    "onExiting",
    "style",
    "timeout",
    "TransitionComponent",
  ];
function De(C) {
  return `scale(${C}, ${C ** 2})`;
}
const xA = {
    entering: { opacity: 1, transform: De(1) },
    entered: { opacity: 1, transform: "none" },
  },
  mC =
    typeof navigator < "u" &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  Be = L.forwardRef(function (e, t) {
    const {
        addEndListener: n,
        appear: r = !0,
        children: o,
        easing: i,
        in: s,
        onEnter: a,
        onEntered: l,
        onEntering: c,
        onExit: f,
        onExited: d,
        onExiting: S,
        style: v,
        timeout: g = "auto",
        TransitionComponent: w = Y3,
      } = e,
      h = X(e, SA),
      p = T5(),
      m = L.useRef(),
      y = h5(),
      x = L.useRef(null),
      E = p3(x, o.ref, t),
      A = (B) => (H) => {
        if (B) {
          const D = x.current;
          H === void 0 ? B(D) : B(D, H);
        }
      },
      _ = A(c),
      T = A((B, H) => {
        Pn(B);
        const {
          duration: D,
          delay: k,
          easing: N,
        } = c5({ style: v, timeout: g, easing: i }, { mode: "enter" });
        let F;
        g === "auto"
          ? ((F = y.transitions.getAutoHeightDuration(B.clientHeight)),
            (m.current = F))
          : (F = D),
          (B.style.transition = [
            y.transitions.create("opacity", { duration: F, delay: k }),
            y.transitions.create("transform", {
              duration: mC ? F : F * 0.666,
              delay: k,
              easing: N,
            }),
          ].join(",")),
          a && a(B, H);
      }),
      b = A(l),
      O = A(S),
      M = A((B) => {
        const {
          duration: H,
          delay: D,
          easing: k,
        } = c5({ style: v, timeout: g, easing: i }, { mode: "exit" });
        let N;
        g === "auto"
          ? ((N = y.transitions.getAutoHeightDuration(B.clientHeight)),
            (m.current = N))
          : (N = H),
          (B.style.transition = [
            y.transitions.create("opacity", { duration: N, delay: D }),
            y.transitions.create("transform", {
              duration: mC ? N : N * 0.666,
              delay: mC ? D : D || N * 0.333,
              easing: k,
            }),
          ].join(",")),
          (B.style.opacity = 0),
          (B.style.transform = De(0.75)),
          f && f(B);
      }),
      I = A(d),
      R = (B) => {
        g === "auto" && p.start(m.current || 0, B), n && n(x.current, B);
      };
    return u.jsx(
      w,
      P(
        {
          appear: r,
          in: s,
          nodeRef: x,
          onEnter: T,
          onEntered: b,
          onEntering: _,
          onExit: M,
          onExited: I,
          onExiting: O,
          addEndListener: R,
          timeout: g === "auto" ? null : g,
        },
        h,
        {
          children: (B, H) =>
            L.cloneElement(
              o,
              P(
                {
                  style: P(
                    {
                      opacity: 0,
                      transform: De(0.75),
                      visibility: B === "exited" && !s ? "hidden" : void 0,
                    },
                    xA[B],
                    v,
                    o.props.style
                  ),
                  ref: E,
                },
                H
              )
            ),
        }
      )
    );
  });
Be.muiSupportAuto = !0;
function AA(C) {
  return h3("MuiTooltip", C);
}
const C5 = m3("MuiTooltip", [
    "popper",
    "popperInteractive",
    "popperArrow",
    "popperClose",
    "tooltip",
    "tooltipArrow",
    "touch",
    "tooltipPlacementLeft",
    "tooltipPlacementRight",
    "tooltipPlacementTop",
    "tooltipPlacementBottom",
    "arrow",
  ]),
  EA = [
    "arrow",
    "children",
    "classes",
    "components",
    "componentsProps",
    "describeChild",
    "disableFocusListener",
    "disableHoverListener",
    "disableInteractive",
    "disableTouchListener",
    "enterDelay",
    "enterNextDelay",
    "enterTouchDelay",
    "followCursor",
    "id",
    "leaveDelay",
    "leaveTouchDelay",
    "onClose",
    "onOpen",
    "open",
    "placement",
    "PopperComponent",
    "PopperProps",
    "slotProps",
    "slots",
    "title",
    "TransitionComponent",
    "TransitionProps",
  ];
function wA(C) {
  return Math.round(C * 1e5) / 1e5;
}
const LA = (C) => {
    const {
        classes: e,
        disableInteractive: t,
        arrow: n,
        touch: r,
        placement: o,
      } = C,
      i = {
        popper: ["popper", !t && "popperInteractive", n && "popperArrow"],
        tooltip: [
          "tooltip",
          n && "tooltipArrow",
          r && "touch",
          `tooltipPlacement${f1(o.split("-")[0])}`,
        ],
        arrow: ["arrow"],
      };
    return g3(i, AA, e);
  },
  bA = a1(Ku, {
    name: "MuiTooltip",
    slot: "Popper",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [
        e.popper,
        !t.disableInteractive && e.popperInteractive,
        t.arrow && e.popperArrow,
        !t.open && e.popperClose,
      ];
    },
  })(({ theme: C, ownerState: e, open: t }) =>
    P(
      { zIndex: (C.vars || C).zIndex.tooltip, pointerEvents: "none" },
      !e.disableInteractive && { pointerEvents: "auto" },
      !t && { pointerEvents: "none" },
      e.arrow && {
        [`&[data-popper-placement*="bottom"] .${C5.arrow}`]: {
          top: 0,
          marginTop: "-0.71em",
          "&::before": { transformOrigin: "0 100%" },
        },
        [`&[data-popper-placement*="top"] .${C5.arrow}`]: {
          bottom: 0,
          marginBottom: "-0.71em",
          "&::before": { transformOrigin: "100% 0" },
        },
        [`&[data-popper-placement*="right"] .${C5.arrow}`]: P(
          {},
          e.isRtl
            ? { right: 0, marginRight: "-0.71em" }
            : { left: 0, marginLeft: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "100% 100%" },
          }
        ),
        [`&[data-popper-placement*="left"] .${C5.arrow}`]: P(
          {},
          e.isRtl
            ? { left: 0, marginLeft: "-0.71em" }
            : { right: 0, marginRight: "-0.71em" },
          {
            height: "1em",
            width: "0.71em",
            "&::before": { transformOrigin: "0 0" },
          }
        ),
      }
    )
  ),
  TA = a1("div", {
    name: "MuiTooltip",
    slot: "Tooltip",
    overridesResolver: (C, e) => {
      const { ownerState: t } = C;
      return [
        e.tooltip,
        t.touch && e.touch,
        t.arrow && e.tooltipArrow,
        e[`tooltipPlacement${f1(t.placement.split("-")[0])}`],
      ];
    },
  })(({ theme: C, ownerState: e }) =>
    P(
      {
        backgroundColor: C.vars
          ? C.vars.palette.Tooltip.bg
          : h2(C.palette.grey[700], 0.92),
        borderRadius: (C.vars || C).shape.borderRadius,
        color: (C.vars || C).palette.common.white,
        fontFamily: C.typography.fontFamily,
        padding: "4px 8px",
        fontSize: C.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: "break-word",
        fontWeight: C.typography.fontWeightMedium,
      },
      e.arrow && { position: "relative", margin: 0 },
      e.touch && {
        padding: "8px 16px",
        fontSize: C.typography.pxToRem(14),
        lineHeight: `${wA(16 / 14)}em`,
        fontWeight: C.typography.fontWeightRegular,
      },
      {
        [`.${C5.popper}[data-popper-placement*="left"] &`]: P(
          { transformOrigin: "right center" },
          e.isRtl
            ? P({ marginLeft: "14px" }, e.touch && { marginLeft: "24px" })
            : P({ marginRight: "14px" }, e.touch && { marginRight: "24px" })
        ),
        [`.${C5.popper}[data-popper-placement*="right"] &`]: P(
          { transformOrigin: "left center" },
          e.isRtl
            ? P({ marginRight: "14px" }, e.touch && { marginRight: "24px" })
            : P({ marginLeft: "14px" }, e.touch && { marginLeft: "24px" })
        ),
        [`.${C5.popper}[data-popper-placement*="top"] &`]: P(
          { transformOrigin: "center bottom", marginBottom: "14px" },
          e.touch && { marginBottom: "24px" }
        ),
        [`.${C5.popper}[data-popper-placement*="bottom"] &`]: P(
          { transformOrigin: "center top", marginTop: "14px" },
          e.touch && { marginTop: "24px" }
        ),
      }
    )
  ),
  PA = a1("span", {
    name: "MuiTooltip",
    slot: "Arrow",
    overridesResolver: (C, e) => e.arrow,
  })(({ theme: C }) => ({
    overflow: "hidden",
    position: "absolute",
    width: "1em",
    height: "0.71em",
    boxSizing: "border-box",
    color: C.vars ? C.vars.palette.Tooltip.bg : h2(C.palette.grey[700], 0.9),
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "currentColor",
      transform: "rotate(45deg)",
    },
  }));
let o6 = !1;
const ii = new b0();
let m4 = { x: 0, y: 0 };
function i6(C, e) {
  return (t, ...n) => {
    e && e(t, ...n), C(t, ...n);
  };
}
const Xu = L.forwardRef(function (e, t) {
  var n, r, o, i, s, a, l, c, f, d, S, v, g, w, h, p, m, y, x;
  const E = _3({ props: e, name: "MuiTooltip" }),
    {
      arrow: A = !1,
      children: _,
      components: T = {},
      componentsProps: b = {},
      describeChild: O = !1,
      disableFocusListener: M = !1,
      disableHoverListener: I = !1,
      disableInteractive: R = !1,
      disableTouchListener: B = !1,
      enterDelay: H = 100,
      enterNextDelay: D = 0,
      enterTouchDelay: k = 700,
      followCursor: N = !1,
      id: F,
      leaveDelay: Z = 0,
      leaveTouchDelay: Q = 1500,
      onClose: h1,
      onOpen: J,
      open: C1,
      placement: U = "bottom",
      PopperComponent: n1,
      PopperProps: s1 = {},
      slotProps: r1 = {},
      slots: z1 = {},
      title: F1,
      TransitionComponent: g5 = Be,
      TransitionProps: v3,
    } = E,
    q3 = X(E, EA),
    O3 = L.isValidElement(_) ? _ : u.jsx("span", { children: _ }),
    v5 = h5(),
    F5 = cu(),
    [b2, V5] = L.useState(),
    [q1, a2] = L.useState(null),
    T2 = L.useRef(!1),
    F2 = R || N,
    J3 = T5(),
    M3 = T5(),
    P2 = T5(),
    V2 = T5(),
    [U5, W] = iu({
      controlled: C1,
      default: !1,
      name: "Tooltip",
      state: "open",
    });
  let I3 = U5;
  const C4 = Jm(F),
    U2 = L.useRef(),
    e4 = J2(() => {
      U2.current !== void 0 &&
        ((document.body.style.WebkitUserSelect = U2.current),
        (U2.current = void 0)),
        V2.clear();
    });
  L.useEffect(() => e4, [e4]);
  const Zn = (Y) => {
      ii.clear(), (o6 = !0), W(!0), J && !I3 && J(Y);
    },
    O0 = J2((Y) => {
      ii.start(800 + Z, () => {
        o6 = !1;
      }),
        W(!1),
        h1 && I3 && h1(Y),
        J3.start(v5.transitions.duration.shortest, () => {
          T2.current = !1;
        });
    }),
    M0 = (Y) => {
      (T2.current && Y.type !== "touchstart") ||
        (b2 && b2.removeAttribute("title"),
        M3.clear(),
        P2.clear(),
        H || (o6 && D)
          ? M3.start(o6 ? D : H, () => {
              Zn(Y);
            })
          : Zn(Y));
    },
    N7 = (Y) => {
      M3.clear(),
        P2.start(Z, () => {
          O0(Y);
        });
    },
    { isFocusVisibleRef: Wn, onBlur: Gc, onFocus: Qc, ref: Yc } = su(),
    [, Kn] = L.useState(!1),
    Gn = (Y) => {
      Gc(Y), Wn.current === !1 && (Kn(!1), N7(Y));
    },
    Qn = (Y) => {
      b2 || V5(Y.currentTarget), Qc(Y), Wn.current === !0 && (Kn(!0), M0(Y));
    },
    Yn = (Y) => {
      T2.current = !0;
      const y3 = O3.props;
      y3.onTouchStart && y3.onTouchStart(Y);
    },
    Xc = (Y) => {
      Yn(Y),
        P2.clear(),
        J3.clear(),
        e4(),
        (U2.current = document.body.style.WebkitUserSelect),
        (document.body.style.WebkitUserSelect = "none"),
        V2.start(k, () => {
          (document.body.style.WebkitUserSelect = U2.current), M0(Y);
        });
    },
    qc = (Y) => {
      O3.props.onTouchEnd && O3.props.onTouchEnd(Y),
        e4(),
        P2.start(Q, () => {
          O0(Y);
        });
    };
  L.useEffect(() => {
    if (!I3) return;
    function Y(y3) {
      (y3.key === "Escape" || y3.key === "Esc") && O0(y3);
    }
    return (
      document.addEventListener("keydown", Y),
      () => {
        document.removeEventListener("keydown", Y);
      }
    );
  }, [O0, I3]);
  const Jc = p3(O3.ref, Yc, V5, t);
  !F1 && F1 !== 0 && (I3 = !1);
  const H7 = L.useRef(),
    Cd = (Y) => {
      const y3 = O3.props;
      y3.onMouseMove && y3.onMouseMove(Y),
        (m4 = { x: Y.clientX, y: Y.clientY }),
        H7.current && H7.current.update();
    },
    t4 = {},
    j7 = typeof F1 == "string";
  O
    ? ((t4.title = !I3 && j7 && !I ? F1 : null),
      (t4["aria-describedby"] = I3 ? C4 : null))
    : ((t4["aria-label"] = j7 ? F1 : null),
      (t4["aria-labelledby"] = I3 && !j7 ? C4 : null));
  const C2 = P(
      {},
      t4,
      q3,
      O3.props,
      {
        className: e1(q3.className, O3.props.className),
        onTouchStart: Yn,
        ref: Jc,
      },
      N ? { onMouseMove: Cd } : {}
    ),
    n4 = {};
  B || ((C2.onTouchStart = Xc), (C2.onTouchEnd = qc)),
    I ||
      ((C2.onMouseOver = i6(M0, C2.onMouseOver)),
      (C2.onMouseLeave = i6(N7, C2.onMouseLeave)),
      F2 || ((n4.onMouseOver = M0), (n4.onMouseLeave = N7))),
    M ||
      ((C2.onFocus = i6(Qn, C2.onFocus)),
      (C2.onBlur = i6(Gn, C2.onBlur)),
      F2 || ((n4.onFocus = Qn), (n4.onBlur = Gn)));
  const ed = L.useMemo(() => {
      var Y;
      let y3 = [
        { name: "arrow", enabled: !!q1, options: { element: q1, padding: 4 } },
      ];
      return (
        (Y = s1.popperOptions) != null &&
          Y.modifiers &&
          (y3 = y3.concat(s1.popperOptions.modifiers)),
        P({}, s1.popperOptions, { modifiers: y3 })
      );
    }, [q1, s1]),
    r4 = P({}, E, {
      isRtl: F5,
      arrow: A,
      disableInteractive: F2,
      placement: U,
      PopperComponentProp: n1,
      touch: T2.current,
    }),
    D7 = LA(r4),
    Xn = (n = (r = z1.popper) != null ? r : T.Popper) != null ? n : bA,
    qn =
      (o =
        (i = (s = z1.transition) != null ? s : T.Transition) != null
          ? i
          : g5) != null
        ? o
        : Be,
    Jn = (a = (l = z1.tooltip) != null ? l : T.Tooltip) != null ? a : TA,
    Cr = (c = (f = z1.arrow) != null ? f : T.Arrow) != null ? c : PA,
    td = f8(
      Xn,
      P({}, s1, (d = r1.popper) != null ? d : b.popper, {
        className: e1(
          D7.popper,
          s1 == null ? void 0 : s1.className,
          (S = (v = r1.popper) != null ? v : b.popper) == null
            ? void 0
            : S.className
        ),
      }),
      r4
    ),
    nd = f8(qn, P({}, v3, (g = r1.transition) != null ? g : b.transition), r4),
    rd = f8(
      Jn,
      P({}, (w = r1.tooltip) != null ? w : b.tooltip, {
        className: e1(
          D7.tooltip,
          (h = (p = r1.tooltip) != null ? p : b.tooltip) == null
            ? void 0
            : h.className
        ),
      }),
      r4
    ),
    od = f8(
      Cr,
      P({}, (m = r1.arrow) != null ? m : b.arrow, {
        className: e1(
          D7.arrow,
          (y = (x = r1.arrow) != null ? x : b.arrow) == null
            ? void 0
            : y.className
        ),
      }),
      r4
    );
  return u.jsxs(L.Fragment, {
    children: [
      L.cloneElement(O3, C2),
      u.jsx(
        Xn,
        P(
          {
            as: n1 ?? Ku,
            placement: U,
            anchorEl: N
              ? {
                  getBoundingClientRect: () => ({
                    top: m4.y,
                    left: m4.x,
                    right: m4.x,
                    bottom: m4.y,
                    width: 0,
                    height: 0,
                  }),
                }
              : b2,
            popperRef: H7,
            open: b2 ? I3 : !1,
            id: C4,
            transition: !0,
          },
          n4,
          td,
          {
            popperOptions: ed,
            children: ({ TransitionProps: Y }) =>
              u.jsx(
                qn,
                P({ timeout: v5.transitions.duration.shorter }, Y, nd, {
                  children: u.jsxs(
                    Jn,
                    P({}, rd, {
                      children: [
                        F1,
                        A ? u.jsx(Cr, P({}, od, { ref: a2 })) : null,
                      ],
                    })
                  ),
                })
              ),
          }
        )
      ),
    ],
  });
});
function kA() {
  if (console && console.warn) {
    for (var C = arguments.length, e = new Array(C), t = 0; t < C; t++)
      e[t] = arguments[t];
    typeof e[0] == "string" && (e[0] = `react-i18next:: ${e[0]}`),
      console.warn(...e);
  }
}
const si = {};
function ze() {
  for (var C = arguments.length, e = new Array(C), t = 0; t < C; t++)
    e[t] = arguments[t];
  (typeof e[0] == "string" && si[e[0]]) ||
    (typeof e[0] == "string" && (si[e[0]] = new Date()), kA(...e));
}
const qu = (C, e) => () => {
  if (C.isInitialized) e();
  else {
    const t = () => {
      setTimeout(() => {
        C.off("initialized", t);
      }, 0),
        e();
    };
    C.on("initialized", t);
  }
};
function ai(C, e, t) {
  C.loadNamespaces(e, qu(C, t));
}
function li(C, e, t, n) {
  typeof t == "string" && (t = [t]),
    t.forEach((r) => {
      C.options.ns.indexOf(r) < 0 && C.options.ns.push(r);
    }),
    C.loadLanguages(e, qu(C, n));
}
function _A(C, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n = e.languages[0],
    r = e.options ? e.options.fallbackLng : !1,
    o = e.languages[e.languages.length - 1];
  if (n.toLowerCase() === "cimode") return !0;
  const i = (s, a) => {
    const l = e.services.backendConnector.state[`${s}|${a}`];
    return l === -1 || l === 2;
  };
  return t.bindI18n &&
    t.bindI18n.indexOf("languageChanging") > -1 &&
    e.services.backendConnector.backend &&
    e.isLanguageChangingTo &&
    !i(e.isLanguageChangingTo, C)
    ? !1
    : !!(
        e.hasResourceBundle(n, C) ||
        !e.services.backendConnector.backend ||
        (e.options.resources && !e.options.partialBundledLanguages) ||
        (i(n, C) && (!r || i(o, C)))
      );
}
function OA(C, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !e.languages || !e.languages.length
    ? (ze("i18n.languages were undefined or empty", e.languages), !0)
    : e.options.ignoreJSONStructure !== void 0
    ? e.hasLoadedNamespace(C, {
        lng: t.lng,
        precheck: (r, o) => {
          if (
            t.bindI18n &&
            t.bindI18n.indexOf("languageChanging") > -1 &&
            r.services.backendConnector.backend &&
            r.isLanguageChangingTo &&
            !o(r.isLanguageChangingTo, C)
          )
            return !1;
        },
      })
    : _A(C, e, t);
}
const MA =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  IA = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  RA = (C) => IA[C],
  NA = (C) => C.replace(MA, RA);
let Fe = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: NA,
};
function HA() {
  let C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  Fe = { ...Fe, ...C };
}
function jA() {
  return Fe;
}
let Ju;
function DA(C) {
  Ju = C;
}
function BA() {
  return Ju;
}
const zA = {
    type: "3rdParty",
    init(C) {
      HA(C.options.react), DA(C);
    },
  },
  FA = L.createContext();
class VA {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((t) => {
      this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const UA = (C, e) => {
  const t = L.useRef();
  return (
    L.useEffect(() => {
      t.current = C;
    }, [C, e]),
    t.current
  );
};
function Cc(C, e, t, n) {
  return C.getFixedT(e, t, n);
}
function $A(C, e, t, n) {
  return L.useCallback(Cc(C, e, t, n), [C, e, t, n]);
}
function L2(C) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: t } = e,
    { i18n: n, defaultNS: r } = L.useContext(FA) || {},
    o = t || n || BA();
  if ((o && !o.reportNamespaces && (o.reportNamespaces = new VA()), !o)) {
    ze(
      "You will need to pass in an i18next instance by using initReactI18next"
    );
    const y = (E, A) =>
        typeof A == "string"
          ? A
          : A && typeof A == "object" && typeof A.defaultValue == "string"
          ? A.defaultValue
          : Array.isArray(E)
          ? E[E.length - 1]
          : E,
      x = [y, {}, !1];
    return (x.t = y), (x.i18n = {}), (x.ready = !1), x;
  }
  o.options.react &&
    o.options.react.wait !== void 0 &&
    ze(
      "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
    );
  const i = { ...jA(), ...o.options.react, ...e },
    { useSuspense: s, keyPrefix: a } = i;
  let l = r || (o.options && o.options.defaultNS);
  (l = typeof l == "string" ? [l] : l || ["translation"]),
    o.reportNamespaces.addUsedNamespaces &&
      o.reportNamespaces.addUsedNamespaces(l);
  const c =
      (o.isInitialized || o.initializedStoreOnce) &&
      l.every((y) => OA(y, o, i)),
    f = $A(o, e.lng || null, i.nsMode === "fallback" ? l : l[0], a),
    d = () => f,
    S = () => Cc(o, e.lng || null, i.nsMode === "fallback" ? l : l[0], a),
    [v, g] = L.useState(d);
  let w = l.join();
  e.lng && (w = `${e.lng}${w}`);
  const h = UA(w),
    p = L.useRef(!0);
  L.useEffect(() => {
    const { bindI18n: y, bindI18nStore: x } = i;
    (p.current = !0),
      !c &&
        !s &&
        (e.lng
          ? li(o, e.lng, l, () => {
              p.current && g(S);
            })
          : ai(o, l, () => {
              p.current && g(S);
            })),
      c && h && h !== w && p.current && g(S);
    function E() {
      p.current && g(S);
    }
    return (
      y && o && o.on(y, E),
      x && o && o.store.on(x, E),
      () => {
        (p.current = !1),
          y && o && y.split(" ").forEach((A) => o.off(A, E)),
          x && o && x.split(" ").forEach((A) => o.store.off(A, E));
      }
    );
  }, [o, w]),
    L.useEffect(() => {
      p.current && c && g(d);
    }, [o, a, c]);
  const m = [v, o, c];
  if (((m.t = v), (m.i18n = o), (m.ready = c), c || (!c && !s))) return m;
  throw new Promise((y) => {
    e.lng ? li(o, e.lng, l, () => y()) : ai(o, l, () => y());
  });
}
const T6 = "/assets/bobukiheading-DLr1HVgv.png",
  ZA = "/assets/catFoot-BbcRijiR.png",
  WA = "/assets/logo-BYJ2PnrK.png",
  KA = "/assets/pinksale-itGaJT5_.png",
  GA =
    "/assets/dextools-round.png",
  QA = "/assets/telegram-i4CH0lng.png",
  YA =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAFHCAYAAAAySY5rAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApBSURBVHgB7d0xdhvHGQfwz06KpApzAu8NzHTpsjlBeAPBJ7B8AiEnkNpUpE8gp0sHuUtH+QREylRiunT0Dpc0YWpBLsDF7szi93vvE2GLIki9p/+b+WZ25ouAfCybevPo/62feH3d1P82Xl/fvV4HvNBvA/JWbXn9nHU8hOZPTX28e33/EZ4kHJmrKh7C9OzR792HZKr/bLwWmvxCOHKMTpqq72pTCsh1Uz/evf4QABlYNnWTWa2aehttkJ4EwASWkV84PhWWAKNYRv7huFmfmnrf1CJ2WywC2MkyygrHx3XZ1OumToPiWZCB4ZzGQzCum/qhqe+jXdwB2Nsyyhop7jqirAJgD8soK/T2qVW0PUoy92UAY6qbOo92MSd91J/MlHCEaaQ9k4top9yXYTSZHeEI00ujxzSKvLr7WAWTE46QjyraEaSQzIBwhDwtog3JtIBTB6MTjpC3OtqAtMo9MuEIZajjoS+5CA5OOEJZqngIyTo4GOEIZariYbpdBYMTjlC2OqxuH4RwhHlYRBuSb8KhvIMQjjAvy/DEzSCEI8xPFe00+zJMtfcmHGG+0mOJaaqdrnUw1d6RcIT5S2dJmmrvSDjCcaiinWpb1e5JOMJxWYRHEXsRjnB8qjCKfJZwhOO1iHYUeRZ8RjjCcauivXv7TfArwhFIltFu+6mCW8IRuFfFwzWyR084ApvSZvG3YeO4cAQ63W8cr+JICUdgmyqOeDVbOAJPqeJIV7OFI9DHMo6sDykcgb6Oqg8pHIFdVHEk99YIR2BXVbQjyDpmTDgC+0i9xzSCnO2GceEIvERapJnlSrZwBF5qGTMMSOEIDGEZMwtI4QgMZRntAbqzIByBIS1iJgEpHIGhLWIGASkcgUNYROEBKRyBQ1lEwQEpHIFDWkShASkcgUNbRLtZvCjCERhDesywqH2QwhEYyzIKCkjhCIxp2dSrKIBwBMZ2EQUcdyYcgSmke2mqyJhwBKZwfx5kFZkSjsBUqmhHkFle2iUcgSmdRqZ7IIUjMLVFZLjFRzgCOVhGZivYwhHIRVYr2MIRyEVamMlmgUY4AjlJCzRZ9B+FI5Cb15HBfdjCEchRGj1WMSHhCORo8v6jcARyNWn/UTgCOUu9xzomIByB3KU7aEafXgtHIHdVTHBJl3AESnB2V6MRjkApRp1eC0egFCkYR5teC0egJGlqXccIhCNQmlGm18IRKE0VI2wOF45AidLm8NM4IOEIlOqgd88IR6BUdbT3zxzEbwLyUUXbaF/fVXIdmV7dSRbqpv7R1P9jYF8ElOHkrqq7j6nf9PXGawF6vP4e7QVdgxKOzEUKyCrakcTXkdlNdhxUml38KR5mG4MQjsxZfVd/CWE5dxdNfRMDEo4cizTtTk9X/C3aoDQNn5+/NvUhgBdZRHsM/42aTa0CGEwVbVBeRVlBoLqrDmBwdRhNll6rAA6mirbBX0ogqF9XHcBBVSEkS6xVAKOoQkiWVnUAo6mauoyyQuJYaxXA6BZhdbuEqgMYXRWm2rnXKoDJ1GEUmXPVsSdHlsHLrJv6vqnfN/XnIEf/DGBSizCKzLE8Rw8ZqEJA5lbLALLxLsoKkDnXp9hj9KjnCIfxr2iPBKyDqf2uqf829e9d/pDzHOGw6mgPs8iu7/XmzZuo63qXPxLr9Tq++WbQM2VvnZycxPn5+e3Hrvf87rvv4vr6Ol7gQ7TnPQIZqSLDPmRVVTefPn262dXbt28H/17ev3/f+V5XV1e33+dA71MHkJ0qMgzIZuR4s4+zs7PBvocUtl1ScA8YjKneBZClKjIMyHfv3t3saqjgaqb2N2ME8F3ttTADjKOKDANytVp9Fk6vX7++HVne1+Mp+OXl5U3TI9z7Pb/99tutwbhcLg/1s74OIFtVZBaQaRSY+nub0n9vht9isfgsxPbtP56enk4RjKlWAWStiswCsqv/mBZKNj+nawqeRpi7vM9TC0Hp64/ws5paQ+aqyCwg06jtufBL0+lNKejSSLDP1+8aod5LX3ekn3MZQPaqaBcKbnKprv7jZvh1jfweT8G7Kv3+tmAceMvOc7UKoAh1jBMKvapP/7FrCn5+fv7k1x1pL2PfqgMoQlpFvcml+vQf+0zB72vEvYx9axlAMbI6rCIF3XPh1zUFT8G6+Tkj72XsW1cBFCOtomZ1gddz4dfVR9ycgk+0l7FvnQZQjCoyWqB5LvxSdU3BU6hOuJexby0DKMpZTB8cv1RXyKXw2/ycrin4xHsZ+9QqgOJk339MvcTNz9m2Gr1pxL2MfcuGcChM+kd7FRkFSVf4Pdd/3DTRlp3nyrPWUKA6MgqSbf3HzcBLU/Cu6XSmwZjqhwCKlNX0et/+4yEOyB2oPgVQpDS9zurxwj79x64DKl69epXNz/Co6gCKtIjMAuXi4uLmuf5j1wEVmU6tlwEUaxUZBUpX//Fx+HUdUPHSA3IPVKsAilVHXoHSufjyuP845AG5By5beqBgF5FRoGw7m/Fx+A1xQO4IVQdQrCoyCZOunuK2/mOqlxyQO1K5mRAKdxEZhMlzT8P06T/2OSB3xFoFULQqJg6Sp44g2/T4UcE+Z0ROWPY7wgxcRIbB2DWafNx/3OWA3AnKEWZQuPSPePTwSJu4t7k/gqxr8eXxgbZ9DsidqDxnDTOwihGDo+/ZjH32P/Y5I3KiOg+geHWMFBpPXaeanpTp+vyuzd+bn7PtgNyxfqYtdRXALBz8SoV975nus/m7zzPaE5TN4DADyzhgUDy1l7HPEWR9Dp947ozICcqiDMxAGuUcLChees90n8Mn+vQoRy6LMjATqzhASGzbsrPrky19Dp/oekZ7wusUPCkDMzH4ZVxD3zOd/sxjffqPEx1QsQpgFgY9DLfPXsZ9qqv/mKbTm9VlggNyPSkDM3IRAwTDoe+Zfuqgim0m6j9asYaZWMQLA2HXvYz7vse2u6yfMsEBuVasYSZetGq9717Gfaqr/9jHyP3HRQCzsYrxwmPutUx/oV8GMAc/BkP5Kv0iHGEePgRDue05CkeYh49NXQdDuF2tFo4wDykYPwZDqNIvwhHm46dgKF8JR5gPI8fh/FE4wnx8CIZSCUeYj3VYlBnKiXCEeVkHQzByhJmxKDMMI0eYmXUwhD8IR5iXdTAEq9UwM+tgCEaOMDPrYAh6jjAztvIMQzjCzAjHgQhHmJ918GLCEeBzNoHDDJlaD0A4wvwIxwEIR4AOXwQwN4u4O80aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgBX4Gb1Ux9yL0hFAAAAAASUVORK5CYII=",
  XA = "/assets/uniswap-ray.png",
  qA = "/assets/twitter-jup.png",
  JA = "/assets/dextools-DZ3SZzqh.png",
  CE = "/assets/dexscreener-pUHof9CD.png",
  eE = "/assets/uniswap-ray.png",
  tE = "/assets/twitter-jup.png",
  nE = "/assets/dextools-DZ3SZzqh.png",
  rE = "/assets/dexscreener-pUHof9CD.png",
  oE =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUsSURBVHgB7Z09TBRBFMcffkSDCgohMQoJlSZWUIIlUGqrpRQ22mpiraW00lhgiZbSSksLlQkaDHJgUD6iEgE1qPtnb7xlb79mZ3f27e37JeSA24Nk/vvef96b2d02MuSvAwn/aXMgA46RwAoRhBkiCDO08514hh66niIRwgwRhBkiCDNi85upZ9x9Sy3F82tkRJynSIQwQwRhhgjCjKZ8Jp6hR9aeIhHCDBGEGSIIM9rEM7LF1FMkQpghgjBDBGGGtoeIZ+ih6ykSIcwQQZghgjAj1kPEM7IlzlMkQpghgjDjBAlNXG0nGj5PNNBB1O6csvM7RK/WiTZ/U+6IIHUw8EMXiAbPOoKcOfre4Dnn/eNEE8uUO5UXBEKMdBONdrvfh9F3iqxQWUGQlm70NEdDGIgQG1RKEEQAfGG4M7kQitpPskIlBEmalqKo7ZEVWloQpCUIAVM2ZWWfrNBygpikpShWRRA90qal3T9E20590RszixIPSYi/iNOhtu9+4fORxzli7B6QFUorCHxhpCt9WprdIlrcJbrXF3/s5i+yRqkEyWK2hBQ1ueK+PuhP9pnFH2SNUgiCtISIQGuj3aAdioh4sUaE9YaH/cn/li1DB6wF0a2mo0CKmv5M1H3SFQOvSbFl6ICdIFmkJS9bzgxqas2NDvw9XTHweVuGDtgIklVa8qJSlGqb37msJwZYsZiuQOGCZJmWvMxsEL3eaPx862K6ir1WBUGyTktevClKAcFHuygVLS1IHmnJC0RQU1oFxLjZQ6mxWYMAK4Jg8JEy4ipiE146S6xvto/+Dv/PRAyY+arFGRawIkieYgSlKNB32v2/JtQsiwGsCJKXGNh8gFmUN0UBzKTu95mnRVtrIF6sCIKzWHe6GUdQigJpCr8w/FFnAyv7sjB4WQFxH38IFiNN4ReFbUMHVgRBapn4aJ6T5746YiyFT0XRLMwyEldb1UMAOqYYTAzYgDP1HetOPnjwiJkvwVGhgIHDyLOiiHQFrBeGSDmz2+4XBvB6p7u4FCYOjn9Wiy7QTAq/MIowdFBo6wSDPL3vdmHROlHr4EqcQ79Yap5FeTEt/MKwsW00CDbNRaQ0tRAEYcZVIzDiZkamhV8Uq5ZbJgqWu9/nvjVa3kOdwcdArPFLlBtFeQjbyxEWdtzXwY7g928bVuFRFFGhK9gKos5QbHL276tVM7W8KKL+ULCPEIjh33me9dqJH5ubGvywFQQeoqLEHw2oYfKkKEMHrC9pm69Hibc5idqlN+drNcRDQlj47r4ibWFxC2RdAPqxuUsxCNaCoDDcqhdoV+q+kbd/FGnogP1VuCptQYjBjuj+F/ZebRlW2LUC/QOwF0TNtpCywopEgBY/WjBPlxsipuFdgTMswF4QTEFVTg/bxjP1qdEJRoRM1txtQGko0tBBKW4csBByxqPpiEuVsU7iB3uyIIxOCoPwRRo6KIUg6G35UWJE9ZyQupDCkopSdHSAUghy2An2DDwG+MlSMgPGsY/eu+svcRS1BuKlNNeHYKvPWL0GgV/orldMr7tT2qitQQsGk4GsKI0gONMxizIBQiKNBW2EwCSgqJa7l8rdyQHCwlfQH0Nts3fgTgo4iAEqeWsN77o+N+R+WcwQQZgh9+3NGblvb8kRQZghgjBDnh+SMfL8kBZDBGGGCMIMeY6hIfIcwxZHBGGGCMIMeZ66JvI89YohgjBDBGFGrIf4MfWUqhHnGX4kQpghgjBDBGGGtof4EU85iq5n+JEIYYYIwgwRhBn/AMWYsrn+/OoUAAAAAElFTkSuQmCC",
  iE =
    "",
  sE =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARSSURBVHgB7Z2NUeMwEIWVmyuAEiiBEqAD6IAOgAqACqAD6AA6gA4oATqADnJaZuKRdXZW/35y3pvZuQsT/+nz7kpay9mYTG2tDDVoY2Uy9MdQUCIQMBEImKLjHXNGnGJzCj0ETAQCJgIBkxrfcnNGZrccTrkpVMsp9BAwEQiYCARM/8Uz5ow4lc4p9BAwEQiYCARMG+aMssrNKfQQMBEImAgETH9NpJgz9stvn9icQg8BE4GAiUDApOYQ5ow8xeaUJh7y8vLyeyIp9v39bY6Pj00LyXE+Pz9Hxz85OTFNtVUkX8m1o6Ojrb3Qbare3t6KnId2jh8fH6PjXl9fFz+OJnXqpFTIOj09NbZhh8+vr6/m5+dH3WbnHTc3N+bx8dHU0tPTk7m8vBw+39/fm7u7O1NaW60brBEzBe8O26DDfh8eHoLuWhuyhm1s+Ch+x4rd3t6OrlnOs8ZxApp72xSIH7qsB6jbnJ+fD9+XkCL7qAlDjlFy/9BAxATCTgInpIFjPSvUXNgx57MqICkNnOJZmtncNAqHsn/5W43rhQfiN7Dcqdo2KZ61D4Z7fAFTKz91AURMGsBtkFaha6oLbntX1a6zGyBitls5HMcOHqMbMyV0yXFcyTnUvMaugIi5g7GQgVhO6PJ7VK1hdAHETa7yb0hidUOXHdAlwQjxyIMEIiaesVPINIk/zaF1Cpbo3nYNRExA7BQSuvxOwZxnLdW97R5ISujSPGuqe7skjK6AhDTwlM151lT3NmS8QyCBDTxnc561dPd2NUD8mB8ygvY9SwaNiDC6BCLmz/CGbON6lqulurerAiLmhpyQaRLfs0RLdm9XByRlmsQNXQg9qlUBEUuZJnFDF1LuWAUQMdSy78ECyS37ouWR7oGIIZV9CSSxgWuUfQlkTwO3LvsSyIQtVfYlkBnzZ29DaydIoWs1QHwYO9Uu+xLIjPkPQu9Us+xLIDM2NXubUjuJKfsSyIztexC6VtmXQGbs6upqdC7+VHyNsi+BGP1uFs09nFCy7EsgMxb7pEipsi+BzDSW373VZmxLlH1bXV9XQHLW+aUs7FkidHUFRMYHrmILTM/Pz8O2sWXfVqGrGyAl1vnlln1rL2frBkjJdX4p0yTuAxW1y77wQGo8CI1c9oUGUutBaOSyLyyQ2uv8UMu+kEBarfNDLPtCAmn1IHTswh6x2rUTOCCt1/mhlX01NXv5jMjCGL3QRV5Ac3FxYWrLjjWMbdjf/399fZn39/e937fQjPWm4fPZ2Zm6TaiU5jbNPGTpdX5zT8eHqOS5qu2tfqHASSCs85t6Oj5GpZY1aGoasig9ZKnvXPR3QEBx0gD44ltJwUQgYCIQMEW/+505Zb9ic4YvegiYCARMBAIm/o5hpnJzBn/HEFwEAiYCARN/Tz1SpXOGL3oImAgETAQCpugAn5tTDk2byCRKDwETgYCJQMCUPUhgThlrkznwooeAiUDARCBg+gcNV2johC2rTQAAAABJRU5ErkJggg==",
  aE = "",
  l0 =
    "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b&chain=mainnet",
  ui = "https://coinsult.net/projects/bobuki-neko/",
  E8 = "0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b",
  u0 =
    "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b&chain=mainnet",
  c0 = l0,
  ec =
    "https://x.com/SanChan_dog",
  ci = "https://www.dextools.io/app/en/ether/pair-explorer/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b",
  lE = "",
  Dn = "https://t.me/SanChanDog",
  tc = "https://x.com/SanChan_dog",
  o9 = "",
  uE =
    "https://www.dextools.io/app/en/ether/pair-explorer/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b",
  e3 = {
    home: "home",
    about: "about",
    roadmap: "roadmap",
    tokenomics: "tokenomics",
    getbobwif: "getbobwif",
    contact: "contact",
    howtoget: "howtoget",
  },
  di = [
    { img: XA, url: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b&chain=mainnet" },
    { img: qA, url: "https://x.com/SanChan_dog" },
    { img: JA, url: "https://www.dextools.io/app/en/ether/pair-explorer/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b" },
    { img: CE, url: "https://dexscreener.com/ethereum/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b" },
    { img: eE, url: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b&chain=mainnet" },
    { img: tE, url: "https://x.com/SanChan_dog" },
    { img: nE, url: "https://www.dextools.io/app/en/ether/pair-explorer/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b" },
    { img: rE, url: "https://dexscreener.com/ethereum/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b" },
  ],
  cE = (C) => ({
    phase1: {
      title: C("PHASE_1"),
      steps: [
        {
          title: C("PHASE_1_STEP_TITLE_1"),
          description: C("PHASE_1_STEP_DESCRIPTION_1"),
        },
        {
          title: C("PHASE_1_STEP_TITLE_2"),
          description: C("PHASE_1_STEP_DESCRIPTION_2"),
        },
      ],
    },
    phase2: {
      title: C("PHASE_2"),
      steps: [
        {
          title: C("PHASE_2_STEP_TITLE_1"),
          description: C("PHASE_2_STEP_DESCRIPTION_1"),
        },
        {
          title: C("PHASE_2_STEP_TITLE_2"),
          description: C("PHASE_2_STEP_DESCRIPTION_2"),
        },
        {
          title: C("PHASE_2_STEP_TITLE_3"),
          description: C("PHASE_2_STEP_DESCRIPTION_3"),
        },
      ],
    },
    phase3: {
      title: C("PHASE_3"),
      steps: [
        {
          title: C("PHASE_3_STEP_TITLE_1"),
          description: C("PHASE_3_STEP_DESCRIPTION_1"),
        },
        {
          title: C("PHASE_3_STEP_TITLE_2"),
          description: C("PHASE_3_STEP_DESCRIPTION_2"),
        },
        {
          title: C("PHASE_3_STEP_TITLE_3"),
          description: C("PHASE_3_STEP_DESCRIPTION_3"),
        },
        {
          title: C("PHASE_3_STEP_TITLE_4"),
          description: C("PHASE_3_STEP_DESCRIPTION_4"),
        },
      ],
    },
    phase4: {
      title: C("PHASE_4"),
      steps: [
        {
          title: C("PHASE_4_STEP_TITLE_1"),
          description: C("PHASE_4_STEP_DESCRIPTION_1"),
        },
        {
          title: C("PHASE_4_STEP_TITLE_2"),
          description: C("PHASE_4_STEP_DESCRIPTION_2"),
        },
        {
          title: C("PHASE_4_STEP_TITLE_3"),
          description: C("PHASE_4_STEP_DESCRIPTION_3"),
        },
        {
          title: C("PHASE_4_STEP_TITLE_4"),
          description: C("PHASE_4_STEP_DESCRIPTION_4"),
        },
        {
          title: C("PHASE_4_STEP_TITLE_5"),
          description: C("PHASE_4_STEP_DESCRIPTION_5"),
        },
      ],
    },
  }),
  fi = (C) => [
    {
      id: "1",
      question: C("FAQ_1"),
      isExpanded: !1,
      answer: `${C("FAQ_1_DETAILS")} (${C(
        "Buy on"
      )} 
      <a style='color: #0EC9E3' href='https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b&chain=mainnet' target='_blank'>${C(
        "Uniswap"
      )}</a>
    )`,
    },
    {
      id: "2",
      question: C("FAQ_2"),
      isExpanded: !1,
      answer: C("FAQ_2_DETAILS"),
    }
  ],
  dE = (C) => [
    // { title: C("Buy Now"), url: e3.howtoget },
    { title: C("ABOUT"), url: e3.about },
    { title: C("TOKENOMICS"), url: e3.tokenomics },
    { title: C("ROADMAP"), url: e3.roadmap },
  ],
  fE = [
    { icon: oE, url: Dn },
    { icon: iE, url: lE },
    { icon: sE, url: tc },
  ],
  nc = Object.fromEntries
    ? Object.fromEntries
    : (C) => {
        if (!C || !C[Symbol.iterator])
          throw new Error(
            "Object.fromEntries() requires a single iterable argument"
          );
        const e = {};
        return (
          Object.keys(C).forEach((t) => {
            const [n, r] = C[t];
            e[n] = r;
          }),
          e
        );
      };
function z8(C) {
  return Object.keys(C);
}
function Bn(C, e) {
  if (!C) throw new Error(e);
}
function zn(C, e) {
  return e;
}
const Fn = (C) => {
  const e = C.length;
  let t = 0,
    n = "";
  for (; t < e; t++) {
    const r = C[t];
    if (r == null) continue;
    let o;
    switch (typeof r) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(r)) o = Fn(r);
        else {
          Bn(!zn(r, !1)), (o = "");
          for (const i in r) r[i] && i && (o && (o += " "), (o += i));
        }
        break;
      }
      default:
        o = r;
    }
    o && (n && (n += " "), (n += o));
  }
  return n;
};
function pE(C, e) {
  var t;
  const n = L.useRef();
  return (
    (!n.current ||
      e.length !==
        ((t = n.current.prevDeps) === null || t === void 0
          ? void 0
          : t.length) ||
      n.current.prevDeps.map((r, o) => r === e[o]).indexOf(!1) >= 0) &&
      (n.current = { v: C(), prevDeps: [...e] }),
    n.current.v
  );
}
function hE(C) {
  return (
    C instanceof Object &&
    !("styles" in C) &&
    !("length" in C) &&
    !("__emotion_styles" in C)
  );
}
const { createCssAndCx: mE } = (() => {
  function C(t, n, r) {
    const o = [],
      i = jl(t, o, r);
    return o.length < 2 ? r : i + n(o);
  }
  function e(t) {
    const { cache: n } = t,
      r = (...i) => {
        const s = Y9(i, n.registered);
        sn(n, s, !1);
        const a = `${n.key}-${s.name}`;
        C: {
          const l = i[0];
          if (!hE(l)) break C;
          pi.saveClassNameCSSObjectMapping(n, a, l);
        }
        return a;
      };
    return {
      css: r,
      cx: (...i) => {
        const s = Fn(i),
          a = pi.fixClassName(n, s, r);
        return C(n.registered, r, a);
      },
    };
  }
  return { createCssAndCx: e };
})();
function rc(C) {
  const { useCache: e } = C;
  function t() {
    const n = e(),
      { css: r, cx: o } = pE(() => mE({ cache: n }), [n]);
    return { css: r, cx: o };
  }
  return { useCssAndCx: t };
}
const pi = (() => {
  const C = new WeakMap();
  return {
    saveClassNameCSSObjectMapping: (e, t, n) => {
      let r = C.get(e);
      r === void 0 && ((r = new Map()), C.set(e, r)), r.set(t, n);
    },
    fixClassName: (() => {
      function e(t) {
        let n = !1;
        return t.map(([r, o]) => {
          if (o === void 0) return r;
          let i;
          if (n) i = { "&&": o };
          else {
            i = r;
            for (const s in o)
              if (s.startsWith("@media")) {
                n = !0;
                break;
              }
          }
          return i;
        });
      }
      return (t, n, r) => {
        const o = C.get(t);
        return Fn(
          e(n.split(" ").map((i) => [i, o == null ? void 0 : o.get(i)])).map(
            (i) => (typeof i == "string" ? i : r(i))
          )
        );
      };
    })(),
  };
})();
function F8(C) {
  if (!(C instanceof Object) || typeof C == "function") return C;
  const e = [];
  for (const t in C) {
    const n = C[t],
      r = typeof n;
    if (
      !(
        r === "string" ||
        (r === "number" && !isNaN(n)) ||
        r === "boolean" ||
        n === void 0 ||
        n === null
      )
    )
      return C;
    e.push(`${t}:${r}_${n}`);
  }
  return "xSqLiJdLMd9s" + e.join("|");
}
function Vn(C, e, t) {
  if (!(e instanceof Object)) return C;
  const n = {};
  return (
    z8(C).forEach((r) => (n[r] = t(C[r], e[r]))),
    z8(e).forEach((r) => {
      if (r in C) return;
      const o = e[r];
      typeof o == "string" && (n[r] = o);
    }),
    n
  );
}
const gE = ({
  classes: C,
  theme: e,
  muiStyleOverridesParams: t,
  css: n,
  cx: r,
  name: o,
}) => {
  var i, s;
  C: {
    if (o === "makeStyle no name") {
      o = void 0;
      break C;
    }
    if (t !== void 0 && o === void 0)
      throw new Error(
        "To use muiStyleOverridesParams, you must specify a name using .withName('MyComponent')"
      );
  }
  let a;
  try {
    a =
      o === void 0
        ? void 0
        : ((s = (i = e.components) === null || i === void 0 ? void 0 : i[o]) ===
            null || s === void 0
            ? void 0
            : s.styleOverrides) || void 0;
  } catch {}
  const l = L.useMemo(() => {
    if (a === void 0) return;
    const c = {};
    for (const f in a) {
      const d = a[f];
      d instanceof Object &&
        (c[f] = n(
          typeof d == "function"
            ? d(
                Object.assign(
                  { theme: e, ownerState: t == null ? void 0 : t.ownerState },
                  t == null ? void 0 : t.props
                )
              )
            : d
        ));
    }
    return c;
  }, [
    a,
    F8(t == null ? void 0 : t.props),
    F8(t == null ? void 0 : t.ownerState),
    n,
  ]);
  return (C = L.useMemo(() => Vn(C, l, r), [C, l, r])), { classes: C };
};
let vE = 0;
function yE(C) {
  const { useTheme: e, cache: t } = C,
    { useCache: n } = oc({ cacheProvidedAtInception: t }),
    { useCssAndCx: r } = rc({ useCache: n });
  function o(s) {
    const { name: a, uniqId: l = `${vE++}` } = s ?? {},
      c = typeof a != "object" ? a : Object.keys(a)[0];
    return function (f) {
      const d = typeof f == "function" ? f : () => f;
      return function (v, g) {
        const w = e();
        let { css: h, cx: p } = r();
        const m = n();
        let y = L.useMemo(() => {
          const x = {},
            E =
              typeof Proxy < "u" &&
              new Proxy(
                {},
                {
                  get: (T, b) => (
                    typeof b == "symbol" && Bn(!1),
                    (x[b] = `${m.key}-${l}${
                      c !== void 0 ? `-${c}` : ""
                    }-${b}-ref`)
                  ),
                }
              ),
            A = d(w, v, E || {}),
            _ = nc(
              z8(A).map((T) => {
                const b = A[T];
                return (
                  b.label || (b.label = `${c !== void 0 ? `${c}-` : ""}${T}`),
                  [T, `${h(b)}${zn(T, T in x) ? ` ${x[T]}` : ""}`]
                );
              })
            );
          return (
            z8(x).forEach((T) => {
              T in _ || (_[T] = x[T]);
            }),
            _
          );
        }, [m, h, p, w, F8(v)]);
        {
          const x = g == null ? void 0 : g.props.classes;
          y = L.useMemo(() => Vn(y, x, p), [y, F8(x), p]);
        }
        {
          const x = gE({
            classes: y,
            css: h,
            cx: p,
            name: c ?? "makeStyle no name",
            idOfUseStyles: l,
            muiStyleOverridesParams: g,
            theme: w,
          });
          x.classes !== void 0 && (y = x.classes),
            x.css !== void 0 && (h = x.css),
            x.cx !== void 0 && (p = x.cx);
        }
        return { classes: y, theme: w, css: h, cx: p };
      };
    };
  }
  function i() {
    const s = e(),
      { css: a, cx: l } = r();
    return { theme: s, css: a, cx: l };
  }
  return { makeStyles: o, useStyles: i };
}
const SE = L.createContext(void 0),
  { createUseCache: oc } = (() => {
    function C() {
      return L.useContext(SE);
    }
    function e(t) {
      const { cacheProvidedAtInception: n } = t;
      function r() {
        var o;
        const i = Th(),
          s = C(),
          a = (o = n ?? s) !== null && o !== void 0 ? o : i;
        if (a === null)
          throw new Error(
            [
              "In order to get SSR working with tss-react you need to explicitly provide an Emotion cache.",
              "MUI users be aware: This is not an error strictly related to tss-react, with or without tss-react,",
              "MUI needs an Emotion cache to be provided for SSR to work.",
              "Here is the MUI documentation related to SSR setup: https://mui.com/material-ui/guides/server-rendering/",
              "TSS provides helper that makes the process of setting up SSR easier: https://docs.tss-react.dev/ssr",
            ].join(`
`)
          );
        return a;
      }
      return { useCache: r };
    }
    return { createUseCache: e };
  })(),
  xE =
    !(
      typeof document == "object" &&
      typeof (document == null ? void 0 : document.getElementById) == "function"
    ) &&
    !(typeof jest < "u") &&
    !(typeof mocha < "u") &&
    !(typeof __vitest_worker__ < "u");
var AE = function (C, e) {
  var t = {};
  for (var n in C)
    Object.prototype.hasOwnProperty.call(C, n) &&
      e.indexOf(n) < 0 &&
      (t[n] = C[n]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(C); r < n.length; r++)
      e.indexOf(n[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(C, n[r]) &&
        (t[n[r]] = C[n[r]]);
  return t;
};
function EE(C) {
  const { useContext: e, usePlugin: t, cache: n } = C,
    { useCache: r } = oc({ cacheProvidedAtInception: n }),
    { useCssAndCx: o } = rc({ useCache: r });
  return {
    tss: P6({
      useContext: e,
      useCache: r,
      useCssAndCx: o,
      usePlugin:
        t ??
        (({ classes: a, cx: l, css: c }) => ({ classes: a, cx: l, css: c })),
      name: void 0,
      doesUseNestedSelectors: !1,
    }),
  };
}
let wE = 0;
const gC = [];
function P6(C) {
  const {
    useContext: e,
    useCache: t,
    useCssAndCx: n,
    usePlugin: r,
    name: o,
    doesUseNestedSelectors: i,
  } = C;
  return {
    withParams: () => P6(Object.assign({}, C)),
    withName: (s) =>
      P6(
        Object.assign(Object.assign({}, C), {
          name: typeof s != "object" ? s : Object.keys(s)[0],
        })
      ),
    withNestedSelectors: () =>
      P6(Object.assign(Object.assign({}, C), { doesUseNestedSelectors: !0 })),
    create: (s) => {
      const a = `x${wE++}`,
        l = typeof s == "function" ? s : () => s;
      return function (f) {
        var d, S, v;
        const g = f ?? {},
          { classesOverrides: w } = g,
          h = AE(g, ["classesOverrides"]),
          p = e(),
          { css: m, cx: y } = n(),
          x = t();
        let E = L.useMemo(() => {
          const _ = {},
            T = l(
              Object.assign(
                Object.assign(Object.assign({}, f), p),
                i
                  ? {
                      classes:
                        typeof Proxy > "u"
                          ? {}
                          : new Proxy(
                              {},
                              {
                                get: (O, M) => {
                                  if ((typeof M == "symbol" && Bn(!1), xE)) {
                                    {
                                      let I = gC.find(
                                        (R) =>
                                          R.name === o && R.idOfUseStyles === a
                                      );
                                      I === void 0 &&
                                        ((I = {
                                          name: o,
                                          idOfUseStyles: a,
                                          nestedSelectorRuleNames: new Set(),
                                        }),
                                        gC.push(I)),
                                        I.nestedSelectorRuleNames.add(M);
                                    }
                                    if (
                                      gC.find(
                                        (I) =>
                                          I.name === o &&
                                          I.idOfUseStyles !== a &&
                                          I.nestedSelectorRuleNames.has(M)
                                      ) !== void 0
                                    )
                                      throw new Error(
                                        [
                                          `tss-react: Duplicate nested selector "${M}" detected in ${
                                            o === void 0
                                              ? `useStyles named "${o}"`
                                              : "anonymous useStyles function"
                                          }.`,
                                          "In SSR setups, this may lead to CSS class name collisions, causing nested selectors to target elements outside of the intended scope.",
                                          'Solution: Ensure each useStyles using nested selectors has a unique name. Use tss.withName("UniqueName").withNestedSelectors<...>()... to set a name.',
                                        ].join(`
`)
                                      );
                                  }
                                  return (_[M] = `${x.key}-${a}${
                                    o !== void 0 ? `-${o}` : ""
                                  }-${M}-ref`);
                                },
                              }
                            ),
                    }
                  : {}
              )
            ),
            b = nc(
              z8(T).map((O) => {
                const M = T[O];
                return (
                  M.label || (M.label = `${o !== void 0 ? `${o}-` : ""}${O}`),
                  [O, `${m(M)}${zn(O, O in _) ? ` ${_[O]}` : ""}`]
                );
              })
            );
          return (
            z8(_).forEach((O) => {
              O in b || (b[O] = _[O]);
            }),
            b
          );
        }, [x, m, y, F8(f), ...Object.values(p)]);
        E = L.useMemo(() => Vn(E, w, y), [E, F8(w), y]);
        const A = r(
          Object.assign(
            Object.assign(
              { classes: E, css: m, cx: y, idOfUseStyles: a, name: o },
              p
            ),
            h
          )
        );
        return Object.assign(
          {
            classes: (d = A.classes) !== null && d !== void 0 ? d : E,
            css: (S = A.css) !== null && S !== void 0 ? S : m,
            cx: (v = A.cx) !== null && v !== void 0 ? v : y,
          },
          p
        );
      };
    },
  };
}
const { tss: LE } = EE({ useContext: () => ({}) });
LE.create({});
let Ve = xu({
  palette: { primary: { main: "#FCCB30" }, secondary: { main: "#0EC9E3" } },
});
Ve = iv(Ve);
const { makeStyles: X3 } = yE({ useTheme: h5 }),
  V8 = Ve,
  hi = () =>
    u.jsxs("svg", {
      width: 42,
      height: 36,
      viewBox: "0 0 42 36",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u.jsx("path", {
          d: "M38.3913 12.3479C38.3913 14.7491 36.4447 16.6957 34.0435 16.6957C31.6422 16.6957 29.6957 14.7491 29.6957 12.3479C29.6957 9.94663 31.6422 8.00004 34.0435 8.00004C36.4447 8.00004 38.3913 9.94663 38.3913 12.3479Z",
          stroke: "black",
          strokeWidth: 2,
        }),
        u.jsx("path", {
          d: "M12.3043 12.3479C12.3043 14.7491 10.3578 16.6957 7.95652 16.6957C5.55528 16.6957 3.6087 14.7491 3.6087 12.3479C3.6087 9.94663 5.55528 8.00004 7.95652 8.00004C10.3578 8.00004 12.3043 9.94663 12.3043 12.3479Z",
          stroke: "black",
          strokeWidth: 2,
        }),
        u.jsx("path", {
          d: "M26.2174 7.56526C26.2174 10.6869 23.6868 13.2174 20.5652 13.2174C17.4436 13.2174 14.913 10.6869 14.913 7.56526C14.913 4.44365 17.4436 1.91309 20.5652 1.91309C23.6868 1.91309 26.2174 4.44365 26.2174 7.56526Z",
          stroke: "black",
          strokeWidth: 2,
        }),
        u.jsx("path", {
          d: "M1 25.3633C1 22.4973 3.32335 20.174 6.18934 20.174H8.85414C11.7201 20.174 14.0435 22.4973 14.0435 25.3633V28.8977C14.0435 31.7636 11.7201 34.087 8.85414 34.087H6.18934C3.32335 34.087 1 31.7637 1 28.8977V25.3633Z",
          stroke: "black",
          strokeWidth: 2,
        }),
        u.jsx("path", {
          d: "M27.9565 25.3633C27.9565 22.4973 30.2799 20.174 33.1459 20.174H35.8107C38.6767 20.174 41 22.4973 41 25.3633V28.8977C41 31.7636 38.6767 34.087 35.8107 34.087H33.1459C30.2799 34.087 27.9565 31.7637 27.9565 28.8977V25.3633Z",
          stroke: "black",
          strokeWidth: 2,
        }),
        u.jsx("path", {
          d: "M13.1739 20.8472C13.1739 18.5544 15.0326 16.6957 17.3254 16.6957H24.6746C26.9674 16.6957 28.8261 18.5544 28.8261 20.8472V30.9734C28.8261 32.693 27.4321 34.087 25.7125 34.087H16.2875C14.5679 34.087 13.1739 32.693 13.1739 30.9734V20.8472Z",
          stroke: "black",
          strokeWidth: 2,
        }),
      ],
    }),
  bE = ({ fill: C = "#000" }) =>
    u.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 17,
      viewBox: "0 0 24 17",
      fill: "none",
      children: [
        u.jsx("rect", { width: 24, height: 3, rx: "1.5", fill: C }),
        u.jsx("rect", { y: 7, width: 24, height: 3, rx: "1.5", fill: C }),
        u.jsx("rect", { y: 14, width: 24, height: 3, rx: "1.5", fill: C }),
      ],
    }),
  mi = () =>
    u.jsxs("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: 33,
      height: 34,
      viewBox: "0 0 33 34",
      fill: "none",
      children: [
      ],
    }),
  gi = () =>
    u.jsxs("svg", {
      width: 44,
      height: 34,
      viewBox: "0 0 44 34",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u.jsx("path", {
          d: "M12.4672 3.74951H36.1245C40.1978 3.74951 43.4999 7.0516 43.4999 11.1249H40.4999C40.4999 8.70845 38.541 6.74951 36.1245 6.74951H12.4672V3.74951ZM43.4999 11.1249C43.4999 15.1983 40.1978 18.5003 36.1245 18.5003H12.4672V15.5003H36.1245C38.541 15.5003 40.4999 13.5414 40.4999 11.1249H43.4999ZM12.4672 17.0003V5.24951V17.0003ZM36.1245 3.74951C40.1978 3.74951 43.4999 7.0516 43.4999 11.1249C43.4999 15.1983 40.1978 18.5003 36.1245 18.5003V15.5003C38.541 15.5003 40.4999 13.5414 40.4999 11.1249C40.4999 8.70845 38.541 6.74951 36.1245 6.74951V3.74951Z",
          fill: "black",
        }),
        u.jsx("path", {
          d: "M35.2711 30.5601L8.03008 30.5601C3.87136 30.5601 0.500049 27.1888 0.500049 23.03L3.50005 23.03C3.50005 25.5319 5.52821 27.5601 8.03008 27.5601L35.2711 27.5601L35.2711 30.5601ZM0.500049 23.03C0.500049 18.8713 3.87136 15.5 8.03008 15.5L35.2711 15.5L35.2711 18.5L8.03008 18.5C5.52821 18.5 3.50005 20.5282 3.50005 23.03L0.500049 23.03ZM35.2711 17L35.2711 29.0601L35.2711 17ZM8.03008 30.5601C3.87136 30.5601 0.500049 27.1888 0.500049 23.03C0.500049 18.8713 3.87136 15.5 8.03008 15.5L8.03008 18.5C5.52821 18.5 3.50005 20.5282 3.50005 23.03C3.50005 25.5319 5.52821 27.5601 8.03008 27.5601L8.03008 30.5601Z",
          fill: "black",
        }),
        u.jsx("path", {
          d: "M10.7852 7.98622C12.2638 7.98622 13.9674 6.94537 13.9674 5.09467C13.9674 3.24397 12.2638 2.20312 10.7852 2.20312C9.30654 2.20312 7.60294 3.24397 7.60294 5.09467C7.60294 6.94537 9.30654 7.98622 10.7852 7.98622Z",
          fill: "#FCCB30",
          stroke: "black",
          strokeWidth: 3,
        }),
        u.jsx("path", {
          d: "M31.7196 7.98622C33.1982 7.98622 34.9018 6.94537 34.9018 5.09467C34.9018 3.24397 33.1982 2.20312 31.7196 2.20312C30.2409 2.20312 28.5373 3.24397 28.5373 5.09467C28.5373 6.94537 30.2409 7.98622 31.7196 7.98622Z",
          fill: "#FCCB30",
          stroke: "black",
          strokeWidth: 3,
        }),
        u.jsx("path", {
          d: "M22 20.3554C23.4787 20.3554 25.1823 19.3145 25.1823 17.4638C25.1823 15.6131 23.4787 14.5723 22 14.5723C20.5214 14.5723 18.8178 15.6131 18.8178 17.4638C18.8178 19.3145 20.5214 20.3554 22 20.3554Z",
          fill: "#FCCB30",
          stroke: "black",
          strokeWidth: 3,
        }),
        u.jsx("path", {
          d: "M13.402 31.7973C14.8806 31.7973 16.5842 30.7564 16.5842 28.9057C16.5842 27.055 14.8806 26.0142 13.402 26.0142C11.9233 26.0142 10.2197 27.055 10.2197 28.9057C10.2197 30.7564 11.9233 31.7973 13.402 31.7973Z",
          fill: "#FCCB30",
          stroke: "black",
          strokeWidth: 3,
        }),
        u.jsx("path", {
          d: "M35.6449 31.4877C36.8139 31.4877 38.2664 30.6545 38.2664 29.06C38.2664 27.4655 36.8139 26.6323 35.6449 26.6323C34.476 26.6323 33.0234 27.4655 33.0234 29.06C33.0234 30.6545 34.476 31.4877 35.6449 31.4877Z",
          fill: "#FCCB30",
          stroke: "black",
          strokeWidth: 3,
        }),
        u.jsx("path", {
          d: "M37.1449 20.0924C37.1449 19.264 36.4734 18.5924 35.6449 18.5924C34.8165 18.5924 34.1449 19.264 34.1449 20.0924L37.1449 20.0924ZM37.1449 27.8232L37.1449 20.0924L34.1449 20.0924L34.1449 27.8232L37.1449 27.8232Z",
          fill: "black",
        }),
        u.jsx("path", {
          d: "M35.6449 21.0923C35.6449 20.54 36.0926 20.0923 36.6449 20.0923H40.3795C41.0605 20.0923 41.4586 20.8601 41.0661 21.4167L40.9998 21.5107C40.8183 21.7681 40.8336 22.1155 41.037 22.3558V22.3558C41.4173 22.8052 41.0979 23.4938 40.5093 23.4938H36.6449C36.0926 23.4938 35.6449 23.0461 35.6449 22.4938V21.0923Z",
          stroke: "black",
          strokeWidth: 3,
        }),
      ],
    }),
  vi = () =>
    u.jsxs("svg", {
      width: 33,
      height: 34,
      viewBox: "0 0 33 34",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        u.jsx("path", {
          d: "M6.1181 4.5C6.1181 2.84315 7.46125 1.5 9.1181 1.5H25.1714C26.8283 1.5 28.1714 2.84315 28.1714 4.5V28.8753C28.1714 30.5322 26.8283 31.8753 25.1714 31.8753H20.5081C19.7382 31.8753 18.9978 31.5794 18.4401 31.0487L7.05015 20.2112C6.45499 19.645 6.1181 18.8594 6.1181 18.0379V4.5Z",
          stroke: "black",
          strokeWidth: 3,
        }),
        u.jsx("path", {
          d: "M8.92683 21.993C7.76089 20.7964 8.86919 18.8167 10.4988 19.1851L14.6685 20.1279C15.9983 20.4285 16.9478 21.6028 16.9635 22.9661L17.0399 29.6165C17.0404 29.6574 17.0073 29.6909 16.9664 29.6909V29.6909C16.9474 29.6909 16.9291 29.6835 16.9154 29.6703L8.92683 21.993V21.993Z",
          stroke: "black",
          strokeWidth: 3,
        }),
        u.jsx("line", {
          x1: "10.2791",
          y1: "6.65771",
          x2: "23.3863",
          y2: "6.65771",
          stroke: "black",
          strokeWidth: 3,
        }),
        u.jsx("line", {
          x1: "10.2791",
          y1: "10.4028",
          x2: "23.3863",
          y2: "10.4028",
          stroke: "black",
          strokeWidth: 3,
        }),
        u.jsx("line", {
          x1: "10.2791",
          y1: "13.9395",
          x2: "23.3863",
          y2: "13.9395",
          stroke: "black",
          strokeWidth: 3,
        }),
      ],
    }),
  TE = X3()((C) => ({
    root: {
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "repeat(12, auto)",
      borderBottom: "1px solid black",
      height: "100%",
      [C.breakpoints.down("md")]: { display: "none" },
    },
    logoContainer: {
      gridColumn: "1 / span 1",
      display: "flex",
      alignItems: "center",
      borderRight: "1px solid black",
      position: "relative",
      justifyContent: "center",
      overflow: "hidden",
      "&::before": {
        zIndex: -1,
        position: "absolute",
        content: "''",
        width: "100%",
        borderRadius: "50%",
        transform: "scale(0)",
        height: "100%",
        transition: "all 0.4s ease",
        background:
          "linear-gradient(180deg, #40260E 0%, #EBB773 50%, #884D15 100%)",
      },
      "&:hover::before": { transform: "scale(1.4)" },
      "& img": { width: "60%" },
    },
    bobWifTextContainer: {
      gridColumn: "auto / span 1",
      borderRight: "1px solid black",
      display: "flex",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
      "& img": { width: "60%" },
      "&::before": {
        zIndex: -1,
        position: "absolute",
        transition: "all 0.2s ease",
        top: "100%",
        right: "100%",
        content: "''",
        width: "100%",
        height: "100%",
        background: C.palette.secondary.main,
      },
      "&:hover::before": { top: "0%", right: "0%" },
    },
    link: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRight: "1px solid black",
      background: C.palette.primary.main,
      gridColumn: "auto / span 2",
      gap: "0.5rem",
      position: "relative",
      zIndex: 4,
      height: "100%",
      overflow: "hidden",
      padding: "0rem 2rem",
      cursor: "pointer",
      "& h5": { fontWeight: "bold" },
      "&::before": {
        zIndex: -1,
        position: "absolute",
        transition: "all 0.2s ease",
        top: "100%",
        right: "100%",
        content: "''",
        width: "100%",
        height: "100%",
        background: C.palette.secondary.main,
      },
      "&:not(:last-child):hover::before": { top: "0%", right: "0%" },
    },
    mobileLink: {
      border: "2px solid black",
      borderRightWidth: "4px",
      borderLeftWidth: "4px",
      "&::before": { content: '""', background: "transparent" },
    },
    howtogetLink: {
      position: "relative",
      background: "#000000",
      color: "#fff",
      border: "4px solid #000",
      gridColumn: "auto / span 2",
      transition: "border-color 0.2s ease",
      "& img": { width: "20%" },
      "&:hover": { borderColor: C.palette.secondary.main },
    },
    mobileNav: {
      zIndex: 1e8,
      position: "absolute",
      display: "none",
      [C.breakpoints.down("md")]: { display: "block" },
    },
    hamburger: { padding: "2rem" },
    floatingCom: {
      position: "fixed",
      bottom: "31%",
      right: "-151px",
      zIndex: "100000000",
      [C.breakpoints.down("md")]: { zoom: "0.8" },
    },
    iconWrapper: {
      width: "300px",
      borderRadius: "50%",
      height: "300px",
      transform: "rotate(0deg)",
      transition: "all 0.4s ease",
      "&:hover ": { transform: "rotate(180deg)" },
      "& .catFoot": {
        transform: "rotate(0deg) scale(1)",
        top: "34%",
        left: "15%",
      },
      "&:hover .catFoot": {
        left: "39%",
        transform: "rotate(180deg) scale(0.7)",
      },
      position: "relative",
    },
    icon: {
      position: "absolute",
      width: "100%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      "&:hover": {},
    },
    bobukiHeading: {
      position: "absolute",
      transition: "all 0.4s ease",
      width: "30%",
      height: "30%",
      zIndex: 999999999999999,
      top: "50%",
      left: "31%",
      transform: "translate(-50%,-50%)",
    },
    btnTelegram: {
      width: "67px",
      backgroundColor: "transparent",
      transition: "all 0.5s ease",
      cursor: "pointer",
      "&:hover": { backgroundColor: "#00000030" },
      height: "67px",
      position: "absolute",
      right: "73px",
      zIndex: "999",
      bottom: "10px",
      borderRadius: "50%",
    },
    btnTwitter: {
      width: "67px",
      backgroundColor: "transparent",
      transition: "all 0.5s ease",
      cursor: "pointer",
      "&:hover": { backgroundColor: "#fafafa30" },
      height: "67px",
      position: "absolute",
      right: "13px",
      zIndex: "999",
      top: "77px",
      borderRadius: "50%",
    },
    btnDecxTools: {
      width: "67px",
      backgroundColor: "transparent",
      transition: "all 0.5s ease",
      cursor: "pointer",
      "&:hover": { backgroundColor: "#00000030" },
      height: "67px",
      position: "absolute",
      right: "74px",
      zIndex: "999",
      top: "13px",
      borderRadius: "50%",
    },
    btnInstagram: {
      width: "67px",
      backgroundColor: "transparent",
      transition: "all 0.5s ease",
      cursor: "pointer",
      "&:hover": { backgroundColor: "#00000030" },
      height: "67px",
      position: "absolute",
      right: "12.3px",
      zIndex: "999",
      top: "158px",
      borderRadius: "50%",
    },
    languageSelectContainer: {
      position: "absolute",
      top: "100px",
      borderRadius: "5px",
      zIndex: 9,
      "& *": { fontFamily: "boogaloo" },
      background: "#00000061",
      color: "#fff",
      right: "30px",
      [C.breakpoints.down("sm")]: { top: "30px" },
      "&:hover": { "& .options": { display: "block" } },
      "& .options": {
        borderRadius: "5px",
        padding: "5px 4px",
        display: "none",
        background: C.palette.secondary.main,
        opacity: 0.9,
        "& .option": {
          cursor: "pointer",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "10px",
          padding: "5px",
          "&:hover": { background: C.palette.primary.main, color: "#000" },
        },
      },
    },
    // languageSelect: {},
    // flagIcon: { width: "13px" },
    // selectedLanguage: {},
    // "& .selectContainer": {},
    // selectedItem: {
    //   display: "flex",
    //   justifyContent: "flex-start",
    //   alignItems: "center",
    //   gap: "10px",
    //   padding: "5px 7px",
    //   width: "110.9px",
    // },
  })),
  PE = "/assets/br-Yf30zEjB.svg",
  kE =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20id='flag-icons-cn'%20viewBox='0%200%20512%20512'%3e%3cdefs%3e%3cpath%20id='cn-a'%20fill='%23ff0'%20d='M1-.3-.7.8%200-1%20.6.8-1-.3z'/%3e%3c/defs%3e%3cpath%20fill='%23ee1c25'%20d='M0%200h512v512H0z'/%3e%3cuse%20xlink:href='%23cn-a'%20width='30'%20height='20'%20transform='translate(128%20128)scale(76.8)'/%3e%3cuse%20xlink:href='%23cn-a'%20width='30'%20height='20'%20transform='rotate(-121%20142.6%20-47)scale(25.5827)'/%3e%3cuse%20xlink:href='%23cn-a'%20width='30'%20height='20'%20transform='rotate(-98.1%20198%20-82)scale(25.6)'/%3e%3cuse%20xlink:href='%23cn-a'%20width='30'%20height='20'%20transform='rotate(-74%20272.4%20-114)scale(25.6137)'/%3e%3cuse%20xlink:href='%23cn-a'%20width='30'%20height='20'%20transform='matrix(16%20-19.968%2019.968%2016%20256%20230.4)'/%3e%3c/svg%3e",
  _E =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='flag-icons-us'%20viewBox='0%200%20512%20512'%3e%3cpath%20fill='%23bd3d44'%20d='M0%200h512v512H0'/%3e%3cpath%20stroke='%23fff'%20stroke-width='40'%20d='M0%2058h512M0%20137h512M0%20216h512M0%20295h512M0%20374h512M0%20453h512'/%3e%3cpath%20fill='%23192f5d'%20d='M0%200h390v275H0z'/%3e%3cmarker%20id='us-a'%20markerHeight='30'%20markerWidth='30'%3e%3cpath%20fill='%23fff'%20d='m15%200%209.3%2028.6L0%2011h30L5.7%2028.6'/%3e%3c/marker%3e%3cpath%20fill='none'%20marker-mid='url(%23us-a)'%20d='m0%200%2018%2011h65%2065%2065%2065%2066L51%2039h65%2065%2065%2065L18%2066h65%2065%2065%2065%2066L51%2094h65%2065%2065%2065L18%20121h65%2065%2065%2065%2066L51%20149h65%2065%2065%2065L18%20177h65%2065%2065%2065%2066L51%20205h65%2065%2065%2065L18%20232h65%2065%2065%2065%2066z'/%3e%3c/svg%3e",
  OE = {
    type: "logger",
    log(C) {
      this.output("log", C);
    },
    warn(C) {
      this.output("warn", C);
    },
    error(C) {
      this.output("error", C);
    },
    output(C, e) {
      console && console[C] && console[C].apply(console, e);
    },
  };
class i9 {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(e, t);
  }
  init(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = t.prefix || "i18next:"),
      (this.logger = e || OE),
      (this.options = t),
      (this.debug = t.debug);
  }
  log() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "log", "", !0);
  }
  warn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "", !0);
  }
  error() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "error", "");
  }
  deprecate() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, t, n, r) {
    return r && !this.debug
      ? null
      : (typeof e[0] == "string" && (e[0] = `${n}${this.prefix} ${e[0]}`),
        this.logger[t](e));
  }
  create(e) {
    return new i9(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options,
    });
  }
  clone(e) {
    return (
      (e = e || this.options),
      (e.prefix = e.prefix || this.prefix),
      new i9(this.logger, e)
    );
  }
}
var m2 = new i9();
class k7 {
  constructor() {
    this.observers = {};
  }
  on(e, t) {
    return (
      e.split(" ").forEach((n) => {
        this.observers[n] || (this.observers[n] = new Map());
        const r = this.observers[n].get(t) || 0;
        this.observers[n].set(t, r + 1);
      }),
      this
    );
  }
  off(e, t) {
    if (this.observers[e]) {
      if (!t) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(t);
    }
  }
  emit(e) {
    for (
      var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
      r < t;
      r++
    )
      n[r - 1] = arguments[r];
    this.observers[e] &&
      Array.from(this.observers[e].entries()).forEach((i) => {
        let [s, a] = i;
        for (let l = 0; l < a; l++) s(...n);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach((i) => {
          let [s, a] = i;
          for (let l = 0; l < a; l++) s.apply(s, [e, ...n]);
        });
  }
}
function g4() {
  let C, e;
  const t = new Promise((n, r) => {
    (C = n), (e = r);
  });
  return (t.resolve = C), (t.reject = e), t;
}
function yi(C) {
  return C == null ? "" : "" + C;
}
function ME(C, e, t) {
  C.forEach((n) => {
    e[n] && (t[n] = e[n]);
  });
}
const IE = /###/g;
function D4(C, e, t) {
  function n(s) {
    return s && s.indexOf("###") > -1 ? s.replace(IE, ".") : s;
  }
  function r() {
    return !C || typeof C == "string";
  }
  const o = typeof e != "string" ? e : e.split(".");
  let i = 0;
  for (; i < o.length - 1; ) {
    if (r()) return {};
    const s = n(o[i]);
    !C[s] && t && (C[s] = new t()),
      Object.prototype.hasOwnProperty.call(C, s) ? (C = C[s]) : (C = {}),
      ++i;
  }
  return r() ? {} : { obj: C, k: n(o[i]) };
}
function Si(C, e, t) {
  const { obj: n, k: r } = D4(C, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[r] = t;
    return;
  }
  let o = e[e.length - 1],
    i = e.slice(0, e.length - 1),
    s = D4(C, i, Object);
  for (; s.obj === void 0 && i.length; )
    (o = `${i[i.length - 1]}.${o}`),
      (i = i.slice(0, i.length - 1)),
      (s = D4(C, i, Object)),
      s && s.obj && typeof s.obj[`${s.k}.${o}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${o}`] = t;
}
function RE(C, e, t, n) {
  const { obj: r, k: o } = D4(C, e, Object);
  (r[o] = r[o] || []), r[o].push(t);
}
function s9(C, e) {
  const { obj: t, k: n } = D4(C, e);
  if (t) return t[n];
}
function NE(C, e, t) {
  const n = s9(C, t);
  return n !== void 0 ? n : s9(e, t);
}
function ic(C, e, t) {
  for (const n in e)
    n !== "__proto__" &&
      n !== "constructor" &&
      (n in C
        ? typeof C[n] == "string" ||
          C[n] instanceof String ||
          typeof e[n] == "string" ||
          e[n] instanceof String
          ? t && (C[n] = e[n])
          : ic(C[n], e[n], t)
        : (C[n] = e[n]));
  return C;
}
function X5(C) {
  return C.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var HE = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
function jE(C) {
  return typeof C == "string" ? C.replace(/[&<>"'\/]/g, (e) => HE[e]) : C;
}
class DE {
  constructor(e) {
    (this.capacity = e), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(e) {
    const t = this.regExpMap.get(e);
    if (t !== void 0) return t;
    const n = new RegExp(e);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(e, n),
      this.regExpQueue.push(e),
      n
    );
  }
}
const BE = [" ", ",", "?", "!", ";"],
  zE = new DE(20);
function FE(C, e, t) {
  (e = e || ""), (t = t || "");
  const n = BE.filter((i) => e.indexOf(i) < 0 && t.indexOf(i) < 0);
  if (n.length === 0) return !0;
  const r = zE.getRegExp(
    `(${n.map((i) => (i === "?" ? "\\?" : i)).join("|")})`
  );
  let o = !r.test(C);
  if (!o) {
    const i = C.indexOf(t);
    i > 0 && !r.test(C.substring(0, i)) && (o = !0);
  }
  return o;
}
function Ue(C, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!C) return;
  if (C[e]) return C[e];
  const n = e.split(t);
  let r = C;
  for (let o = 0; o < n.length; ) {
    if (!r || typeof r != "object") return;
    let i,
      s = "";
    for (let a = o; a < n.length; ++a)
      if ((a !== o && (s += t), (s += n[a]), (i = r[s]), i !== void 0)) {
        if (
          ["string", "number", "boolean"].indexOf(typeof i) > -1 &&
          a < n.length - 1
        )
          continue;
        o += a - o + 1;
        break;
      }
    r = i;
  }
  return r;
}
function a9(C) {
  return C && C.indexOf("_") > 0 ? C.replace("_", "-") : C;
}
class xi extends k7 {
  constructor(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ["translation"], defaultNS: "translation" };
    super(),
      (this.data = e || {}),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const t = this.options.ns.indexOf(e);
    t > -1 && this.options.ns.splice(t, 1);
  }
  getResource(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o =
        r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator,
      i =
        r.ignoreJSONStructure !== void 0
          ? r.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let s;
    e.indexOf(".") > -1
      ? (s = e.split("."))
      : ((s = [e, t]),
        n &&
          (Array.isArray(n)
            ? s.push(...n)
            : typeof n == "string" && o
            ? s.push(...n.split(o))
            : s.push(n)));
    const a = s9(this.data, s);
    return (
      !a &&
        !t &&
        !n &&
        e.indexOf(".") > -1 &&
        ((e = s[0]), (t = s[1]), (n = s.slice(2).join("."))),
      a || !i || typeof n != "string"
        ? a
        : Ue(this.data && this.data[e] && this.data[e][t], n, o)
    );
  }
  addResource(e, t, n, r) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 };
    const i =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let s = [e, t];
    n && (s = s.concat(i ? n.split(i) : n)),
      e.indexOf(".") > -1 && ((s = e.split(".")), (r = t), (t = s[1])),
      this.addNamespaces(t),
      Si(this.data, s, r),
      o.silent || this.emit("added", e, t, n, r);
  }
  addResources(e, t, n) {
    let r =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 };
    for (const o in n)
      (typeof n[o] == "string" ||
        Object.prototype.toString.apply(n[o]) === "[object Array]") &&
        this.addResource(e, t, o, n[o], { silent: !0 });
    r.silent || this.emit("added", e, t, n);
  }
  addResourceBundle(e, t, n, r, o) {
    let i =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      s = [e, t];
    e.indexOf(".") > -1 && ((s = e.split(".")), (r = n), (n = t), (t = s[1])),
      this.addNamespaces(t);
    let a = s9(this.data, s) || {};
    i.skipCopy || (n = JSON.parse(JSON.stringify(n))),
      r ? ic(a, n, o) : (a = { ...a, ...n }),
      Si(this.data, s, a),
      i.silent || this.emit("added", e, t, n);
  }
  removeResourceBundle(e, t) {
    this.hasResourceBundle(e, t) && delete this.data[e][t],
      this.removeNamespaces(t),
      this.emit("removed", e, t);
  }
  hasResourceBundle(e, t) {
    return this.getResource(e, t) !== void 0;
  }
  getResourceBundle(e, t) {
    return (
      t || (t = this.options.defaultNS),
      this.options.compatibilityAPI === "v1"
        ? { ...this.getResource(e, t) }
        : this.getResource(e, t)
    );
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const t = this.getDataByLanguage(e);
    return !!((t && Object.keys(t)) || []).find(
      (r) => t[r] && Object.keys(t[r]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var sc = {
  processors: {},
  addPostProcessor(C) {
    this.processors[C.name] = C;
  },
  handle(C, e, t, n, r) {
    return (
      C.forEach((o) => {
        this.processors[o] && (e = this.processors[o].process(e, t, n, r));
      }),
      e
    );
  },
};
const Ai = {};
class l9 extends k7 {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      ME(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        e,
        this
      ),
      (this.options = t),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = m2.create("translator"));
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e) {
    let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} };
    if (e == null) return !1;
    const n = this.resolve(e, t);
    return n && n.res !== void 0;
  }
  extractFromKey(e, t) {
    let n = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const r =
      t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
    let o = t.ns || this.options.defaultNS || [];
    const i = n && e.indexOf(n) > -1,
      s =
        !this.options.userDefinedKeySeparator &&
        !t.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !t.nsSeparator &&
        !FE(e, n, r);
    if (i && !s) {
      const a = e.match(this.interpolator.nestingRegexp);
      if (a && a.length > 0) return { key: e, namespaces: o };
      const l = e.split(n);
      (n !== r || (n === r && this.options.ns.indexOf(l[0]) > -1)) &&
        (o = l.shift()),
        (e = l.join(r));
    }
    return typeof o == "string" && (o = [o]), { key: e, namespaces: o };
  }
  translate(e, t, n) {
    if (
      (typeof t != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (t = this.options.overloadTranslationOptionHandler(arguments)),
      typeof t == "object" && (t = { ...t }),
      t || (t = {}),
      e == null)
    )
      return "";
    Array.isArray(e) || (e = [String(e)]);
    const r =
        t.returnDetails !== void 0
          ? t.returnDetails
          : this.options.returnDetails,
      o =
        t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator,
      { key: i, namespaces: s } = this.extractFromKey(e[e.length - 1], t),
      a = s[s.length - 1],
      l = t.lng || this.language,
      c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (l && l.toLowerCase() === "cimode") {
      if (c) {
        const y = t.nsSeparator || this.options.nsSeparator;
        return r
          ? {
              res: `${a}${y}${i}`,
              usedKey: i,
              exactUsedKey: i,
              usedLng: l,
              usedNS: a,
              usedParams: this.getUsedParamsDetails(t),
            }
          : `${a}${y}${i}`;
      }
      return r
        ? {
            res: i,
            usedKey: i,
            exactUsedKey: i,
            usedLng: l,
            usedNS: a,
            usedParams: this.getUsedParamsDetails(t),
          }
        : i;
    }
    const f = this.resolve(e, t);
    let d = f && f.res;
    const S = (f && f.usedKey) || i,
      v = (f && f.exactUsedKey) || i,
      g = Object.prototype.toString.apply(d),
      w = ["[object Number]", "[object Function]", "[object RegExp]"],
      h = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays,
      p = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      p &&
      d &&
      typeof d != "string" &&
      typeof d != "boolean" &&
      typeof d != "number" &&
      w.indexOf(g) < 0 &&
      !(typeof h == "string" && g === "[object Array]")
    ) {
      if (!t.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const y = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(S, d, { ...t, ns: s })
          : `key '${i} (${this.language})' returned an object instead of string.`;
        return r
          ? ((f.res = y), (f.usedParams = this.getUsedParamsDetails(t)), f)
          : y;
      }
      if (o) {
        const y = g === "[object Array]",
          x = y ? [] : {},
          E = y ? v : S;
        for (const A in d)
          if (Object.prototype.hasOwnProperty.call(d, A)) {
            const _ = `${E}${o}${A}`;
            (x[A] = this.translate(_, { ...t, joinArrays: !1, ns: s })),
              x[A] === _ && (x[A] = d[A]);
          }
        d = x;
      }
    } else if (p && typeof h == "string" && g === "[object Array]")
      (d = d.join(h)), d && (d = this.extendTranslation(d, e, t, n));
    else {
      let y = !1,
        x = !1;
      const E = t.count !== void 0 && typeof t.count != "string",
        A = l9.hasDefaultValue(t),
        _ = E ? this.pluralResolver.getSuffix(l, t.count, t) : "",
        T =
          t.ordinal && E
            ? this.pluralResolver.getSuffix(l, t.count, { ordinal: !1 })
            : "",
        b =
          E &&
          !t.ordinal &&
          t.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        O =
          (b && t[`defaultValue${this.options.pluralSeparator}zero`]) ||
          t[`defaultValue${_}`] ||
          t[`defaultValue${T}`] ||
          t.defaultValue;
      !this.isValidLookup(d) && A && ((y = !0), (d = O)),
        this.isValidLookup(d) || ((x = !0), (d = i));
      const I =
          (t.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          x
            ? void 0
            : d,
        R = A && O !== d && this.options.updateMissing;
      if (x || y || R) {
        if (
          (this.logger.log(R ? "updateKey" : "missingKey", l, a, i, R ? O : d),
          o)
        ) {
          const k = this.resolve(i, { ...t, keySeparator: !1 });
          k &&
            k.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let B = [];
        const H = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          t.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && H && H[0])
          for (let k = 0; k < H.length; k++) B.push(H[k]);
        else
          this.options.saveMissingTo === "all"
            ? (B = this.languageUtils.toResolveHierarchy(
                t.lng || this.language
              ))
            : B.push(t.lng || this.language);
        const D = (k, N, F) => {
          const Z = A && F !== d ? F : I;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(k, a, N, Z, R, t)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(k, a, N, Z, R, t),
            this.emit("missingKey", k, a, N, d);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && E
            ? B.forEach((k) => {
                const N = this.pluralResolver.getSuffixes(k, t);
                b &&
                  t[`defaultValue${this.options.pluralSeparator}zero`] &&
                  N.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  N.push(`${this.options.pluralSeparator}zero`),
                  N.forEach((F) => {
                    D([k], i + F, t[`defaultValue${F}`] || O);
                  });
              })
            : D(B, i, O));
      }
      (d = this.extendTranslation(d, e, t, f, n)),
        x &&
          d === i &&
          this.options.appendNamespaceToMissingKey &&
          (d = `${a}:${i}`),
        (x || y) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== "v1"
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${a}:${i}` : i,
                y ? d : void 0
              ))
            : (d = this.options.parseMissingKeyHandler(d)));
    }
    return r
      ? ((f.res = d), (f.usedParams = this.getUsedParamsDetails(t)), f)
      : d;
  }
  extendTranslation(e, t, n, r, o) {
    var i = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      e = this.i18nFormat.parse(
        e,
        { ...this.options.interpolation.defaultVariables, ...n },
        n.lng || this.language || r.usedLng,
        r.usedNS,
        r.usedKey,
        { resolved: r }
      );
    else if (!n.skipInterpolation) {
      n.interpolation &&
        this.interpolator.init({
          ...n,
          interpolation: { ...this.options.interpolation, ...n.interpolation },
        });
      const l =
        typeof e == "string" &&
        (n && n.interpolation && n.interpolation.skipOnVariables !== void 0
          ? n.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (l) {
        const d = e.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let f = n.replace && typeof n.replace != "string" ? n.replace : n;
      if (
        (this.options.interpolation.defaultVariables &&
          (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (e = this.interpolator.interpolate(e, f, n.lng || this.language, n)),
        l)
      ) {
        const d = e.match(this.interpolator.nestingRegexp),
          S = d && d.length;
        c < S && (n.nest = !1);
      }
      !n.lng &&
        this.options.compatibilityAPI !== "v1" &&
        r &&
        r.res &&
        (n.lng = r.usedLng),
        n.nest !== !1 &&
          (e = this.interpolator.nest(
            e,
            function () {
              for (
                var d = arguments.length, S = new Array(d), v = 0;
                v < d;
                v++
              )
                S[v] = arguments[v];
              return o && o[0] === S[0] && !n.context
                ? (i.logger.warn(
                    `It seems you are nesting recursively key: ${S[0]} in key: ${t[0]}`
                  ),
                  null)
                : i.translate(...S, t);
            },
            n
          )),
        n.interpolation && this.interpolator.reset();
    }
    const s = n.postProcess || this.options.postProcess,
      a = typeof s == "string" ? [s] : s;
    return (
      e != null &&
        a &&
        a.length &&
        n.applyPostProcessor !== !1 &&
        (e = sc.handle(
          a,
          e,
          t,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...r,
                  usedParams: this.getUsedParamsDetails(n),
                },
                ...n,
              }
            : n,
          this
        )),
      e
    );
  }
  resolve(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n,
      r,
      o,
      i,
      s;
    return (
      typeof e == "string" && (e = [e]),
      e.forEach((a) => {
        if (this.isValidLookup(n)) return;
        const l = this.extractFromKey(a, t),
          c = l.key;
        r = c;
        let f = l.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const d = t.count !== void 0 && typeof t.count != "string",
          S =
            d &&
            !t.ordinal &&
            t.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          v =
            t.context !== void 0 &&
            (typeof t.context == "string" || typeof t.context == "number") &&
            t.context !== "",
          g = t.lngs
            ? t.lngs
            : this.languageUtils.toResolveHierarchy(
                t.lng || this.language,
                t.fallbackLng
              );
        f.forEach((w) => {
          this.isValidLookup(n) ||
            ((s = w),
            !Ai[`${g[0]}-${w}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((Ai[`${g[0]}-${w}`] = !0),
              this.logger.warn(
                `key "${r}" for languages "${g.join(
                  ", "
                )}" won't get resolved as namespace "${s}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            g.forEach((h) => {
              if (this.isValidLookup(n)) return;
              i = h;
              const p = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(p, c, h, w, t);
              else {
                let y;
                d && (y = this.pluralResolver.getSuffix(h, t.count, t));
                const x = `${this.options.pluralSeparator}zero`,
                  E = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (p.push(c + y),
                    t.ordinal &&
                      y.indexOf(E) === 0 &&
                      p.push(c + y.replace(E, this.options.pluralSeparator)),
                    S && p.push(c + x)),
                  v)
                ) {
                  const A = `${c}${this.options.contextSeparator}${t.context}`;
                  p.push(A),
                    d &&
                      (p.push(A + y),
                      t.ordinal &&
                        y.indexOf(E) === 0 &&
                        p.push(A + y.replace(E, this.options.pluralSeparator)),
                      S && p.push(A + x));
                }
              }
              let m;
              for (; (m = p.pop()); )
                this.isValidLookup(n) ||
                  ((o = m), (n = this.getResource(h, w, m, t)));
            }));
        });
      }),
      { res: n, usedKey: r, exactUsedKey: o, usedLng: i, usedNS: s }
    );
  }
  isValidLookup(e) {
    return (
      e !== void 0 &&
      !(!this.options.returnNull && e === null) &&
      !(!this.options.returnEmptyString && e === "")
    );
  }
  getResource(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(e, t, n, r)
      : this.resourceStore.getResource(e, t, n, r);
  }
  getUsedParamsDetails() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const t = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      n = e.replace && typeof e.replace != "string";
    let r = n ? e.replace : e;
    if (
      (n && typeof e.count < "u" && (r.count = e.count),
      this.options.interpolation.defaultVariables &&
        (r = { ...this.options.interpolation.defaultVariables, ...r }),
      !n)
    ) {
      r = { ...r };
      for (const o of t) delete r[o];
    }
    return r;
  }
  static hasDefaultValue(e) {
    const t = "defaultValue";
    for (const n in e)
      if (
        Object.prototype.hasOwnProperty.call(e, n) &&
        t === n.substring(0, t.length) &&
        e[n] !== void 0
      )
        return !0;
    return !1;
  }
}
function vC(C) {
  return C.charAt(0).toUpperCase() + C.slice(1);
}
class Ei {
  constructor(e) {
    (this.options = e),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = m2.create("languageUtils"));
  }
  getScriptPartFromCode(e) {
    if (((e = a9(e)), !e || e.indexOf("-") < 0)) return null;
    const t = e.split("-");
    return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(t.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (((e = a9(e)), !e || e.indexOf("-") < 0)) return e;
    const t = e.split("-");
    return this.formatLanguageCode(t[0]);
  }
  formatLanguageCode(e) {
    if (typeof e == "string" && e.indexOf("-") > -1) {
      const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let n = e.split("-");
      return (
        this.options.lowerCaseLng
          ? (n = n.map((r) => r.toLowerCase()))
          : n.length === 2
          ? ((n[0] = n[0].toLowerCase()),
            (n[1] = n[1].toUpperCase()),
            t.indexOf(n[1].toLowerCase()) > -1 &&
              (n[1] = vC(n[1].toLowerCase())))
          : n.length === 3 &&
            ((n[0] = n[0].toLowerCase()),
            n[1].length === 2 && (n[1] = n[1].toUpperCase()),
            n[0] !== "sgn" && n[2].length === 2 && (n[2] = n[2].toUpperCase()),
            t.indexOf(n[1].toLowerCase()) > -1 &&
              (n[1] = vC(n[1].toLowerCase())),
            t.indexOf(n[2].toLowerCase()) > -1 &&
              (n[2] = vC(n[2].toLowerCase()))),
        n.join("-")
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? e.toLowerCase()
      : e;
  }
  isSupportedCode(e) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (e = this.getLanguagePartFromCode(e)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(e) > -1
    );
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let t;
    return (
      e.forEach((n) => {
        if (t) return;
        const r = this.formatLanguageCode(n);
        (!this.options.supportedLngs || this.isSupportedCode(r)) && (t = r);
      }),
      !t &&
        this.options.supportedLngs &&
        e.forEach((n) => {
          if (t) return;
          const r = this.getLanguagePartFromCode(n);
          if (this.isSupportedCode(r)) return (t = r);
          t = this.options.supportedLngs.find((o) => {
            if (o === r) return o;
            if (
              !(o.indexOf("-") < 0 && r.indexOf("-") < 0) &&
              ((o.indexOf("-") > 0 &&
                r.indexOf("-") < 0 &&
                o.substring(0, o.indexOf("-")) === r) ||
                (o.indexOf(r) === 0 && r.length > 1))
            )
              return o;
          });
        }),
      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
      t
    );
  }
  getFallbackCodes(e, t) {
    if (!e) return [];
    if (
      (typeof e == "function" && (e = e(t)),
      typeof e == "string" && (e = [e]),
      Object.prototype.toString.apply(e) === "[object Array]")
    )
      return e;
    if (!t) return e.default || [];
    let n = e[t];
    return (
      n || (n = e[this.getScriptPartFromCode(t)]),
      n || (n = e[this.formatLanguageCode(t)]),
      n || (n = e[this.getLanguagePartFromCode(t)]),
      n || (n = e.default),
      n || []
    );
  }
  toResolveHierarchy(e, t) {
    const n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
      r = [],
      o = (i) => {
        i &&
          (this.isSupportedCode(i)
            ? r.push(i)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${i}`
              ));
      };
    return (
      typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            o(this.formatLanguageCode(e)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            o(this.getScriptPartFromCode(e)),
          this.options.load !== "currentOnly" &&
            o(this.getLanguagePartFromCode(e)))
        : typeof e == "string" && o(this.formatLanguageCode(e)),
      n.forEach((i) => {
        r.indexOf(i) < 0 && o(this.formatLanguageCode(i));
      }),
      r
    );
  }
}
let VE = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  UE = {
    1: function (C) {
      return +(C > 1);
    },
    2: function (C) {
      return +(C != 1);
    },
    3: function (C) {
      return 0;
    },
    4: function (C) {
      return C % 10 == 1 && C % 100 != 11
        ? 0
        : C % 10 >= 2 && C % 10 <= 4 && (C % 100 < 10 || C % 100 >= 20)
        ? 1
        : 2;
    },
    5: function (C) {
      return C == 0
        ? 0
        : C == 1
        ? 1
        : C == 2
        ? 2
        : C % 100 >= 3 && C % 100 <= 10
        ? 3
        : C % 100 >= 11
        ? 4
        : 5;
    },
    6: function (C) {
      return C == 1 ? 0 : C >= 2 && C <= 4 ? 1 : 2;
    },
    7: function (C) {
      return C == 1
        ? 0
        : C % 10 >= 2 && C % 10 <= 4 && (C % 100 < 10 || C % 100 >= 20)
        ? 1
        : 2;
    },
    8: function (C) {
      return C == 1 ? 0 : C == 2 ? 1 : C != 8 && C != 11 ? 2 : 3;
    },
    9: function (C) {
      return +(C >= 2);
    },
    10: function (C) {
      return C == 1 ? 0 : C == 2 ? 1 : C < 7 ? 2 : C < 11 ? 3 : 4;
    },
    11: function (C) {
      return C == 1 || C == 11
        ? 0
        : C == 2 || C == 12
        ? 1
        : C > 2 && C < 20
        ? 2
        : 3;
    },
    12: function (C) {
      return +(C % 10 != 1 || C % 100 == 11);
    },
    13: function (C) {
      return +(C !== 0);
    },
    14: function (C) {
      return C == 1 ? 0 : C == 2 ? 1 : C == 3 ? 2 : 3;
    },
    15: function (C) {
      return C % 10 == 1 && C % 100 != 11
        ? 0
        : C % 10 >= 2 && (C % 100 < 10 || C % 100 >= 20)
        ? 1
        : 2;
    },
    16: function (C) {
      return C % 10 == 1 && C % 100 != 11 ? 0 : C !== 0 ? 1 : 2;
    },
    17: function (C) {
      return C == 1 || (C % 10 == 1 && C % 100 != 11) ? 0 : 1;
    },
    18: function (C) {
      return C == 0 ? 0 : C == 1 ? 1 : 2;
    },
    19: function (C) {
      return C == 1
        ? 0
        : C == 0 || (C % 100 > 1 && C % 100 < 11)
        ? 1
        : C % 100 > 10 && C % 100 < 20
        ? 2
        : 3;
    },
    20: function (C) {
      return C == 1 ? 0 : C == 0 || (C % 100 > 0 && C % 100 < 20) ? 1 : 2;
    },
    21: function (C) {
      return C % 100 == 1
        ? 1
        : C % 100 == 2
        ? 2
        : C % 100 == 3 || C % 100 == 4
        ? 3
        : 0;
    },
    22: function (C) {
      return C == 1 ? 0 : C == 2 ? 1 : (C < 0 || C > 10) && C % 10 == 0 ? 2 : 3;
    },
  };
const $E = ["v1", "v2", "v3"],
  ZE = ["v4"],
  wi = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function WE() {
  const C = {};
  return (
    VE.forEach((e) => {
      e.lngs.forEach((t) => {
        C[t] = { numbers: e.nr, plurals: UE[e.fc] };
      });
    }),
    C
  );
}
class KE {
  constructor(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = e),
      (this.options = t),
      (this.logger = m2.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        ZE.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling."
        )),
      (this.rules = WE());
  }
  addRule(e, t) {
    this.rules[e] = t;
  }
  getRule(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(a9(e === "dev" ? "en" : e), {
          type: t.ordinal ? "ordinal" : "cardinal",
        });
      } catch {
        return;
      }
    return (
      this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    );
  }
  needsPlural(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(e, t);
    return this.shouldUseIntlApi()
      ? n && n.resolvedOptions().pluralCategories.length > 1
      : n && n.numbers.length > 1;
  }
  getPluralFormsOfKey(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(e, n).map((r) => `${t}${r}`);
  }
  getSuffixes(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(e, t);
    return n
      ? this.shouldUseIntlApi()
        ? n
            .resolvedOptions()
            .pluralCategories.sort((r, o) => wi[r] - wi[o])
            .map(
              (r) =>
                `${this.options.prepend}${
                  t.ordinal ? `ordinal${this.options.prepend}` : ""
                }${r}`
            )
        : n.numbers.map((r) => this.getSuffix(e, r, t))
      : [];
  }
  getSuffix(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const r = this.getRule(e, n);
    return r
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${
            n.ordinal ? `ordinal${this.options.prepend}` : ""
          }${r.select(t)}`
        : this.getSuffixRetroCompatible(r, t)
      : (this.logger.warn(`no plural rule found for: ${e}`), "");
  }
  getSuffixRetroCompatible(e, t) {
    const n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
    let r = e.numbers[n];
    this.options.simplifyPluralSuffix &&
      e.numbers.length === 2 &&
      e.numbers[0] === 1 &&
      (r === 2 ? (r = "plural") : r === 1 && (r = ""));
    const o = () =>
      this.options.prepend && r.toString()
        ? this.options.prepend + r.toString()
        : r.toString();
    return this.options.compatibilityJSON === "v1"
      ? r === 1
        ? ""
        : typeof r == "number"
        ? `_plural_${r.toString()}`
        : o()
      : this.options.compatibilityJSON === "v2" ||
        (this.options.simplifyPluralSuffix &&
          e.numbers.length === 2 &&
          e.numbers[0] === 1)
      ? o()
      : this.options.prepend && n.toString()
      ? this.options.prepend + n.toString()
      : n.toString();
  }
  shouldUseIntlApi() {
    return !$E.includes(this.options.compatibilityJSON);
  }
}
function Li(C, e, t) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
    r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    o = NE(C, e, t);
  return (
    !o &&
      r &&
      typeof t == "string" &&
      ((o = Ue(C, t, n)), o === void 0 && (o = Ue(e, t, n))),
    o
  );
}
class GE {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = m2.create("interpolator")),
      (this.options = e),
      (this.format = (e.interpolation && e.interpolation.format) || ((t) => t)),
      this.init(e);
  }
  init() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    e.interpolation || (e.interpolation = { escapeValue: !0 });
    const t = e.interpolation;
    (this.escape = t.escape !== void 0 ? t.escape : jE),
      (this.escapeValue = t.escapeValue !== void 0 ? t.escapeValue : !0),
      (this.useRawValueToEscape =
        t.useRawValueToEscape !== void 0 ? t.useRawValueToEscape : !1),
      (this.prefix = t.prefix ? X5(t.prefix) : t.prefixEscaped || "{{"),
      (this.suffix = t.suffix ? X5(t.suffix) : t.suffixEscaped || "}}"),
      (this.formatSeparator = t.formatSeparator
        ? t.formatSeparator
        : t.formatSeparator || ","),
      (this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || ""),
      (this.nestingPrefix = t.nestingPrefix
        ? X5(t.nestingPrefix)
        : t.nestingPrefixEscaped || X5("$t(")),
      (this.nestingSuffix = t.nestingSuffix
        ? X5(t.nestingSuffix)
        : t.nestingSuffixEscaped || X5(")")),
      (this.nestingOptionsSeparator = t.nestingOptionsSeparator
        ? t.nestingOptionsSeparator
        : t.nestingOptionsSeparator || ","),
      (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
      (this.alwaysFormat = t.alwaysFormat !== void 0 ? t.alwaysFormat : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (t, n) =>
      t && t.source === n ? ((t.lastIndex = 0), t) : new RegExp(n, "g");
    (this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = e(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = e(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      ));
  }
  interpolate(e, t, n, r) {
    let o, i, s;
    const a =
      (this.options &&
        this.options.interpolation &&
        this.options.interpolation.defaultVariables) ||
      {};
    function l(v) {
      return v.replace(/\$/g, "$$$$");
    }
    const c = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const p = Li(
          t,
          a,
          v,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        );
        return this.alwaysFormat
          ? this.format(p, void 0, n, { ...r, ...t, interpolationkey: v })
          : p;
      }
      const g = v.split(this.formatSeparator),
        w = g.shift().trim(),
        h = g.join(this.formatSeparator).trim();
      return this.format(
        Li(
          t,
          a,
          w,
          this.options.keySeparator,
          this.options.ignoreJSONStructure
        ),
        h,
        n,
        { ...r, ...t, interpolationkey: w }
      );
    };
    this.resetRegExp();
    const f =
        (r && r.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      d =
        r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (v) => l(v) },
        {
          regex: this.regexp,
          safeValue: (v) => (this.escapeValue ? l(this.escape(v)) : l(v)),
        },
      ].forEach((v) => {
        for (s = 0; (o = v.regex.exec(e)); ) {
          const g = o[1].trim();
          if (((i = c(g)), i === void 0))
            if (typeof f == "function") {
              const h = f(e, o, r);
              i = typeof h == "string" ? h : "";
            } else if (r && Object.prototype.hasOwnProperty.call(r, g)) i = "";
            else if (d) {
              i = o[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${g} for interpolating ${e}`
              ),
                (i = "");
          else typeof i != "string" && !this.useRawValueToEscape && (i = yi(i));
          const w = v.safeValue(i);
          if (
            ((e = e.replace(o[0], w)),
            d
              ? ((v.regex.lastIndex += i.length),
                (v.regex.lastIndex -= o[0].length))
              : (v.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break;
        }
      }),
      e
    );
  }
  nest(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r,
      o,
      i;
    function s(a, l) {
      const c = this.nestingOptionsSeparator;
      if (a.indexOf(c) < 0) return a;
      const f = a.split(new RegExp(`${c}[ ]*{`));
      let d = `{${f[1]}`;
      (a = f[0]), (d = this.interpolate(d, i));
      const S = d.match(/'/g),
        v = d.match(/"/g);
      ((S && S.length % 2 === 0 && !v) || v.length % 2 !== 0) &&
        (d = d.replace(/'/g, '"'));
      try {
        (i = JSON.parse(d)), l && (i = { ...l, ...i });
      } catch (g) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${a}`,
            g
          ),
          `${a}${c}${d}`
        );
      }
      return (
        i.defaultValue &&
          i.defaultValue.indexOf(this.prefix) > -1 &&
          delete i.defaultValue,
        a
      );
    }
    for (; (r = this.nestingRegexp.exec(e)); ) {
      let a = [];
      (i = { ...n }),
        (i = i.replace && typeof i.replace != "string" ? i.replace : i),
        (i.applyPostProcessor = !1),
        delete i.defaultValue;
      let l = !1;
      if (r[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(r[1])) {
        const c = r[1].split(this.formatSeparator).map((f) => f.trim());
        (r[1] = c.shift()), (a = c), (l = !0);
      }
      if (
        ((o = t(s.call(this, r[1].trim(), i), i)),
        o && r[0] === e && typeof o != "string")
      )
        return o;
      typeof o != "string" && (o = yi(o)),
        o ||
          (this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),
          (o = "")),
        l &&
          (o = a.reduce(
            (c, f) =>
              this.format(c, f, n.lng, { ...n, interpolationkey: r[1].trim() }),
            o.trim()
          )),
        (e = e.replace(r[0], o)),
        (this.regexp.lastIndex = 0);
    }
    return e;
  }
}
function QE(C) {
  let e = C.toLowerCase().trim();
  const t = {};
  if (C.indexOf("(") > -1) {
    const n = C.split("(");
    e = n[0].toLowerCase().trim();
    const r = n[1].substring(0, n[1].length - 1);
    e === "currency" && r.indexOf(":") < 0
      ? t.currency || (t.currency = r.trim())
      : e === "relativetime" && r.indexOf(":") < 0
      ? t.range || (t.range = r.trim())
      : r.split(";").forEach((i) => {
          if (!i) return;
          const [s, ...a] = i.split(":"),
            l = a
              .join(":")
              .trim()
              .replace(/^'+|'+$/g, "");
          t[s.trim()] || (t[s.trim()] = l),
            l === "false" && (t[s.trim()] = !1),
            l === "true" && (t[s.trim()] = !0),
            isNaN(l) || (t[s.trim()] = parseInt(l, 10));
        });
  }
  return { formatName: e, formatOptions: t };
}
function q5(C) {
  const e = {};
  return function (n, r, o) {
    const i = r + JSON.stringify(o);
    let s = e[i];
    return s || ((s = C(a9(r), o)), (e[i] = s)), s(n);
  };
}
class YE {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = m2.create("formatter")),
      (this.options = e),
      (this.formats = {
        number: q5((t, n) => {
          const r = new Intl.NumberFormat(t, { ...n });
          return (o) => r.format(o);
        }),
        currency: q5((t, n) => {
          const r = new Intl.NumberFormat(t, { ...n, style: "currency" });
          return (o) => r.format(o);
        }),
        datetime: q5((t, n) => {
          const r = new Intl.DateTimeFormat(t, { ...n });
          return (o) => r.format(o);
        }),
        relativetime: q5((t, n) => {
          const r = new Intl.RelativeTimeFormat(t, { ...n });
          return (o) => r.format(o, n.range || "day");
        }),
        list: q5((t, n) => {
          const r = new Intl.ListFormat(t, { ...n });
          return (o) => r.format(o);
        }),
      }),
      this.init(e);
  }
  init(e) {
    const n = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation;
    this.formatSeparator = n.formatSeparator
      ? n.formatSeparator
      : n.formatSeparator || ",";
  }
  add(e, t) {
    this.formats[e.toLowerCase().trim()] = t;
  }
  addCached(e, t) {
    this.formats[e.toLowerCase().trim()] = q5(t);
  }
  format(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return t.split(this.formatSeparator).reduce((s, a) => {
      const { formatName: l, formatOptions: c } = QE(a);
      if (this.formats[l]) {
        let f = s;
        try {
          const d =
              (r && r.formatParams && r.formatParams[r.interpolationkey]) || {},
            S = d.locale || d.lng || r.locale || r.lng || n;
          f = this.formats[l](s, S, { ...c, ...r, ...d });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${l}`);
      return s;
    }, e);
  }
}
function XE(C, e) {
  C.pending[e] !== void 0 && (delete C.pending[e], C.pendingCount--);
}
class qE extends k7 {
  constructor(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = e),
      (this.store = t),
      (this.services = n),
      (this.languageUtils = n.languageUtils),
      (this.options = r),
      (this.logger = m2.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = r.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5),
      (this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(n, r.backend, r);
  }
  queueLoad(e, t, n, r) {
    const o = {},
      i = {},
      s = {},
      a = {};
    return (
      e.forEach((l) => {
        let c = !0;
        t.forEach((f) => {
          const d = `${l}|${f}`;
          !n.reload && this.store.hasResourceBundle(l, f)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? i[d] === void 0 && (i[d] = !0)
                : ((this.state[d] = 1),
                  (c = !1),
                  i[d] === void 0 && (i[d] = !0),
                  o[d] === void 0 && (o[d] = !0),
                  a[f] === void 0 && (a[f] = !0)));
        }),
          c || (s[l] = !0);
      }),
      (Object.keys(o).length || Object.keys(i).length) &&
        this.queue.push({
          pending: i,
          pendingCount: Object.keys(i).length,
          loaded: {},
          errors: [],
          callback: r,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(i),
        toLoadLanguages: Object.keys(s),
        toLoadNamespaces: Object.keys(a),
      }
    );
  }
  loaded(e, t, n) {
    const r = e.split("|"),
      o = r[0],
      i = r[1];
    t && this.emit("failedLoading", o, i, t),
      n &&
        this.store.addResourceBundle(o, i, n, void 0, void 0, { skipCopy: !0 }),
      (this.state[e] = t ? -1 : 2);
    const s = {};
    this.queue.forEach((a) => {
      RE(a.loaded, [o], i),
        XE(a, e),
        t && a.errors.push(t),
        a.pendingCount === 0 &&
          !a.done &&
          (Object.keys(a.loaded).forEach((l) => {
            s[l] || (s[l] = {});
            const c = a.loaded[l];
            c.length &&
              c.forEach((f) => {
                s[l][f] === void 0 && (s[l][f] = !0);
              });
          }),
          (a.done = !0),
          a.errors.length ? a.callback(a.errors) : a.callback());
    }),
      this.emit("loaded", s),
      (this.queue = this.queue.filter((a) => !a.done));
  }
  read(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      i = arguments.length > 5 ? arguments[5] : void 0;
    if (!e.length) return i(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: t,
        fcName: n,
        tried: r,
        wait: o,
        callback: i,
      });
      return;
    }
    this.readingCalls++;
    const s = (l, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (l && c && r < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, e, t, n, r + 1, o * 2, i);
          }, o);
          return;
        }
        i(l, c);
      },
      a = this.backend[n].bind(this.backend);
    if (a.length === 2) {
      try {
        const l = a(e, t);
        l && typeof l.then == "function"
          ? l.then((c) => s(null, c)).catch(s)
          : s(null, l);
      } catch (l) {
        s(l);
      }
      return;
    }
    return a(e, t, s);
  }
  prepareLoading(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      r = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        r && r()
      );
    typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)),
      typeof t == "string" && (t = [t]);
    const o = this.queueLoad(e, t, n, r);
    if (!o.toLoad.length) return o.pending.length || r(), null;
    o.toLoad.forEach((i) => {
      this.loadOne(i);
    });
  }
  load(e, t, n) {
    this.prepareLoading(e, t, {}, n);
  }
  reload(e, t, n) {
    this.prepareLoading(e, t, { reload: !0 }, n);
  }
  loadOne(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const n = e.split("|"),
      r = n[0],
      o = n[1];
    this.read(r, o, "read", void 0, void 0, (i, s) => {
      i &&
        this.logger.warn(
          `${t}loading namespace ${o} for language ${r} failed`,
          i
        ),
        !i &&
          s &&
          this.logger.log(`${t}loaded namespace ${o} for language ${r}`, s),
        this.loaded(e, i, s);
    });
  }
  saveMissing(e, t, n, r, o) {
    let i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      s =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(t)
    ) {
      this.logger.warn(
        `did not save key "${n}" as the namespace "${t}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(n == null || n === "")) {
      if (this.backend && this.backend.create) {
        const a = { ...i, isUpdate: o },
          l = this.backend.create.bind(this.backend);
        if (l.length < 6)
          try {
            let c;
            l.length === 5 ? (c = l(e, t, n, r, a)) : (c = l(e, t, n, r)),
              c && typeof c.then == "function"
                ? c.then((f) => s(null, f)).catch(s)
                : s(null, c);
          } catch (c) {
            s(c);
          }
        else l(e, t, n, r, s, a);
      }
      !e || !e[0] || this.store.addResource(e[0], t, n, r);
    }
  }
}
function bi() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (e) {
      let t = {};
      if (
        (typeof e[1] == "object" && (t = e[1]),
        typeof e[1] == "string" && (t.defaultValue = e[1]),
        typeof e[2] == "string" && (t.tDescription = e[2]),
        typeof e[2] == "object" || typeof e[3] == "object")
      ) {
        const n = e[3] || e[2];
        Object.keys(n).forEach((r) => {
          t[r] = n[r];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (C) => C,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function Ti(C) {
  return (
    typeof C.ns == "string" && (C.ns = [C.ns]),
    typeof C.fallbackLng == "string" && (C.fallbackLng = [C.fallbackLng]),
    typeof C.fallbackNS == "string" && (C.fallbackNS = [C.fallbackNS]),
    C.supportedLngs &&
      C.supportedLngs.indexOf("cimode") < 0 &&
      (C.supportedLngs = C.supportedLngs.concat(["cimode"])),
    C
  );
}
function s6() {}
function JE(C) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(C)).forEach((t) => {
    typeof C[t] == "function" && (C[t] = C[t].bind(C));
  });
}
class d0 extends k7 {
  constructor() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = Ti(e)),
      (this.services = {}),
      (this.logger = m2),
      (this.modules = { external: [] }),
      JE(this),
      t && !this.isInitialized && !e.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(e, t), this;
      setTimeout(() => {
        this.init(e, t);
      }, 0);
    }
  }
  init() {
    var e = this;
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof t == "function" && ((n = t), (t = {})),
      !t.defaultNS &&
        t.defaultNS !== !1 &&
        t.ns &&
        (typeof t.ns == "string"
          ? (t.defaultNS = t.ns)
          : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = bi();
    (this.options = { ...r, ...this.options, ...Ti(t) }),
      this.options.compatibilityAPI !== "v1" &&
        (this.options.interpolation = {
          ...r.interpolation,
          ...this.options.interpolation,
        }),
      t.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = t.keySeparator),
      t.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = t.nsSeparator);
    function o(c) {
      return c ? (typeof c == "function" ? new c() : c) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger
        ? m2.init(o(this.modules.logger), this.options)
        : m2.init(null, this.options);
      let c;
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < "u" && (c = YE);
      const f = new Ei(this.options);
      this.store = new xi(this.options.resources, this.options);
      const d = this.services;
      (d.logger = m2),
        (d.resourceStore = this.store),
        (d.languageUtils = f),
        (d.pluralResolver = new KE(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === r.interpolation.format) &&
          ((d.formatter = o(c)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(
            d.formatter
          ))),
        (d.interpolator = new GE(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new qE(
          o(this.modules.backend),
          d.resourceStore,
          d,
          this.options
        )),
        d.backendConnector.on("*", function (S) {
          for (
            var v = arguments.length, g = new Array(v > 1 ? v - 1 : 0), w = 1;
            w < v;
            w++
          )
            g[w - 1] = arguments[w];
          e.emit(S, ...g);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = o(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = o(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new l9(this.services, this.options)),
        this.translator.on("*", function (S) {
          for (
            var v = arguments.length, g = new Array(v > 1 ? v - 1 : 0), w = 1;
            w < v;
            w++
          )
            g[w - 1] = arguments[w];
          e.emit(S, ...g);
        }),
        this.modules.external.forEach((S) => {
          S.init && S.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      n || (n = s6),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((c) => {
        this[c] = function () {
          return e.store[c](...arguments);
        };
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((c) => {
        this[c] = function () {
          return e.store[c](...arguments), e;
        };
      });
    const a = g4(),
      l = () => {
        const c = (f, d) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            a.resolve(d),
            n(f, d);
        };
        if (
          this.languages &&
          this.options.compatibilityAPI !== "v1" &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (
      this.options.resources || !this.options.initImmediate
        ? l()
        : setTimeout(l, 0),
      a
    );
  }
  loadResources(e) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s6;
    const r = typeof e == "string" ? e : this.language;
    if (
      (typeof e == "function" && (n = e),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        r &&
        r.toLowerCase() === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return n();
      const o = [],
        i = (s) => {
          if (!s || s === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(s).forEach((l) => {
            l !== "cimode" && o.indexOf(l) < 0 && o.push(l);
          });
        };
      r
        ? i(r)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((a) => i(a)),
        this.options.preload && this.options.preload.forEach((s) => i(s)),
        this.services.backendConnector.load(o, this.options.ns, (s) => {
          !s &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            n(s);
        });
    } else n(null);
  }
  reloadResources(e, t, n) {
    const r = g4();
    return (
      e || (e = this.languages),
      t || (t = this.options.ns),
      n || (n = s6),
      this.services.backendConnector.reload(e, t, (o) => {
        r.resolve(), n(o);
      }),
      r
    );
  }
  use(e) {
    if (!e)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!e.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      e.type === "backend" && (this.modules.backend = e),
      (e.type === "logger" || (e.log && e.warn && e.error)) &&
        (this.modules.logger = e),
      e.type === "languageDetector" && (this.modules.languageDetector = e),
      e.type === "i18nFormat" && (this.modules.i18nFormat = e),
      e.type === "postProcessor" && sc.addPostProcessor(e),
      e.type === "formatter" && (this.modules.formatter = e),
      e.type === "3rdParty" && this.modules.external.push(e),
      this
    );
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
      for (let t = 0; t < this.languages.length; t++) {
        const n = this.languages[t];
        if (
          !(["cimode", "dev"].indexOf(n) > -1) &&
          this.store.hasLanguageSomeTranslations(n)
        ) {
          this.resolvedLanguage = n;
          break;
        }
      }
  }
  changeLanguage(e, t) {
    var n = this;
    this.isLanguageChangingTo = e;
    const r = g4();
    this.emit("languageChanging", e);
    const o = (a) => {
        (this.language = a),
          (this.languages = this.services.languageUtils.toResolveHierarchy(a)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(a);
      },
      i = (a, l) => {
        l
          ? (o(l),
            this.translator.changeLanguage(l),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", l),
            this.logger.log("languageChanged", l))
          : (this.isLanguageChangingTo = void 0),
          r.resolve(function () {
            return n.t(...arguments);
          }),
          t &&
            t(a, function () {
              return n.t(...arguments);
            });
      },
      s = (a) => {
        !e && !a && this.services.languageDetector && (a = []);
        const l =
          typeof a == "string"
            ? a
            : this.services.languageUtils.getBestMatchFromCodes(a);
        l &&
          (this.language || o(l),
          this.translator.language || this.translator.changeLanguage(l),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(l)),
          this.loadResources(l, (c) => {
            i(c, l);
          });
      };
    return (
      !e &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? s(this.services.languageDetector.detect())
        : !e &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(s)
          : this.services.languageDetector.detect(s)
        : s(e),
      r
    );
  }
  getFixedT(e, t, n) {
    var r = this;
    const o = function (i, s) {
      let a;
      if (typeof s != "object") {
        for (
          var l = arguments.length, c = new Array(l > 2 ? l - 2 : 0), f = 2;
          f < l;
          f++
        )
          c[f - 2] = arguments[f];
        a = r.options.overloadTranslationOptionHandler([i, s].concat(c));
      } else a = { ...s };
      (a.lng = a.lng || o.lng),
        (a.lngs = a.lngs || o.lngs),
        (a.ns = a.ns || o.ns),
        (a.keyPrefix = a.keyPrefix || n || o.keyPrefix);
      const d = r.options.keySeparator || ".";
      let S;
      return (
        a.keyPrefix && Array.isArray(i)
          ? (S = i.map((v) => `${a.keyPrefix}${d}${v}`))
          : (S = a.keyPrefix ? `${a.keyPrefix}${d}${i}` : i),
        r.t(S, a)
      );
    };
    return (
      typeof e == "string" ? (o.lng = e) : (o.lngs = e),
      (o.ns = t),
      (o.keyPrefix = n),
      o
    );
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const n = t.lng || this.resolvedLanguage || this.languages[0],
      r = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const i = (s, a) => {
      const l = this.services.backendConnector.state[`${s}|${a}`];
      return l === -1 || l === 2;
    };
    if (t.precheck) {
      const s = t.precheck(this, i);
      if (s !== void 0) return s;
    }
    return !!(
      this.hasResourceBundle(n, e) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (i(n, e) && (!r || i(o, e)))
    );
  }
  loadNamespaces(e, t) {
    const n = g4();
    return this.options.ns
      ? (typeof e == "string" && (e = [e]),
        e.forEach((r) => {
          this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
        }),
        this.loadResources((r) => {
          n.resolve(), t && t(r);
        }),
        n)
      : (t && t(), Promise.resolve());
  }
  loadLanguages(e, t) {
    const n = g4();
    typeof e == "string" && (e = [e]);
    const r = this.options.preload || [],
      o = e.filter(
        (i) =>
          r.indexOf(i) < 0 && this.services.languageUtils.isSupportedCode(i)
      );
    return o.length
      ? ((this.options.preload = r.concat(o)),
        this.loadResources((i) => {
          n.resolve(), t && t(i);
        }),
        n)
      : (t && t(), Promise.resolve());
  }
  dir(e) {
    if (
      (e ||
        (e =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !e)
    )
      return "rtl";
    const t = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      n = (this.services && this.services.languageUtils) || new Ei(bi());
    return t.indexOf(n.getLanguagePartFromCode(e)) > -1 ||
      e.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 ? arguments[1] : void 0;
    return new d0(e, t);
  }
  cloneInstance() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : s6;
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const r = { ...this.options, ...e, isClone: !0 },
      o = new d0(r);
    return (
      (e.debug !== void 0 || e.prefix !== void 0) &&
        (o.logger = o.logger.clone(e)),
      ["store", "services", "language"].forEach((s) => {
        o[s] = this[s];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      n &&
        ((o.store = new xi(this.store.data, r)),
        (o.services.resourceStore = o.store)),
      (o.translator = new l9(o.services, r)),
      o.translator.on("*", function (s) {
        for (
          var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), c = 1;
          c < a;
          c++
        )
          l[c - 1] = arguments[c];
        o.emit(s, ...l);
      }),
      o.init(r, t),
      (o.translator.options = r),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const W1 = d0.createInstance();
W1.createInstance = d0.createInstance;
W1.createInstance;
W1.dir;
W1.init;
W1.loadResources;
W1.reloadResources;
W1.use;
W1.changeLanguage;
W1.getFixedT;
W1.t;
W1.exists;
W1.setDefaultNamespace;
W1.hasLoadedNamespace;
W1.loadNamespaces;
W1.loadLanguages;
const Cw = "ABOUT",
  ew = "WHITEPAPER",
  tw = "ROADMAP",
  nw = "Chart",
  rw = "HOW TO BUY",
  ow = "", //Claim  on Pinksale
  iw = "$SAN Contract Address",
  sw = "JOIN COMMUNITY",
  aw = "GET",
  lw = "Watch this tutorial!",
  uw = "PINK SALE",
  cw = "BUY ON UNISWAP",
  dw = "FIND US ",
  fw = "",
  pw =
    "Join the legendary $SAN, the fearless inu of $SAN's sacred lore! Unlike his peers who revel in luxury, $SAN is a courageous one, leading his community towards one noble goal: to elevate the glory of inus to new heights!",
  hw = "Renowned for his cunning strategy,",
  mw =
    "consistently exceeds expectations. His quest? To catapult the market to",
  gw = "its current standing!",
  vw = "Now, armed with the samurai sword filled with secrets of Ethereum,",
  yw =
    "prepares to unleash a revolutionary marketing blitz.But how, you ask? Embark on this thrilling samurai journey and witness his daring exploits firsthand!",
  Sw = "TOKENOMICS",
  xw = "TOTAL SUPPLY",
  Aw = "AUDIT",
  Ew = "How to buy",
  ww = "",
  Lw = "PAGE 1",
  bw = "PAGE 2",
  Tw = "PAGE 3",
  Pw = "PAGE 4",
  kw = "Create Wallet",
  _w = "Convert some money into Ethereum (ETH) through a centralized exchange like Coinbase or Binance.",
  Ow = "Create a brand new wallet with the MetaMask App, keep your seed phrase safe, write it down on a piece of paper you can keep safely.",
  Mw =
    "",
  Iw = "Connect Wallet",
  Rw =
    "Copy the MetaMask wallet address and send some ETH from your exchange account to your MetaMask wallet address.",
  Nw =
    "Now visit an exchange platform such as Uniswap (via our buy button if you're having trouble) and head over to 'Swap.' Connect your MetaMask wallet when prompted.",
  Hw =
    "",
  jw = "The legend has born",
  Dw = "I’m",
  Bw = "THE CUTEST Inu On Ethereum",
  zw = "The future is forseen, comrades!",
  Fw = "Swap",
  Vw =
    "Swap the ETH in your wallet for $SAN, you can find $SAN as an option by pasting in the contract address below:",
  Uw =
    "Input your desired amount of ETH. Finally, you can swap by pressing the ‘swap’ button.",
  $w = "Now you can wait for profit upon $SAN token launch.",
  Zw = "PROJECT",
  Ww = "UTILITIES",
  Kw = "X100 MASSIVE MARKETING",
  Gw = "100 %LP BURNT",
  Qw = "Phase 1: Dawn of Kitties",
  Yw = "Initiation",
  Xw = "Unleash the power of personal growth",
  qw = "Foundation",
  Jw = "Website Unveiling",
  CL = "Phase 2: Triumph of the kitty",
  eL = "Alliance Rally",
  tL = "Ignite the flames of Marketingh",
  nL = "Influencer Quest",
  rL = "Forge the alliance with Key Influencers",
  oL = "Content Crusade",
  iL = "Craft Captivating Chronicles",
  sL = "Phase 3: Token Unleashed",
  aL = "Commencement",
  lL = "Unveil the Token",
  uL = "Launch",
  cL = "Launch on Uniswap",
  dL = "Ascendancy",
  fL = "Secure listings on CoinGecko and CoinMarketCap",
  pL = "Marketing Metamorphosis",
  hL = "Evolve into the next phase of Marketing",
  mL = "Phase 4: Apex Felines",
  gL = "Expansion",
  vL = "More CEXs Expansion",
  yL = "Genesis Unleashed",
  SL = "First Batch $SAN MEME Launch",
  xL = "Genesis Rebirth",
  AL = "Second Batch $SAN MEME Launch",
  EL = "Campaign Continuation",
  wL = "Breaking through the Marketing Efforts Pinnacle",
  LL = "Genesis Evolution",
  bL = "Third Batch $SAN MEME Launch",
  TL = "How can I acquire and sell $SAN tokens?",
  PL =
    "$SAN can be purchased on Uniswap once it's live.",
  kL = "Presale at",
  _L = "Pinksale",
  OL = "Will $SAN secure listings on centralized exchanges (CEXs)?",
  ML =
    "Yes, $SAN is currently in advanced negotiations with several CEXs like MEXC, BITGET, and GATE.IO.",
  IL = "Is there a $SAN whitepaper or roadmap available for viewing?",
  RL = "Yes, check out our whitepaper here.",
  NL = "Whitepaper",
  HL = {
    ABOUT: Cw,
    WHITEPAPER: ew,
    ROADMAP: tw,
    NFT: nw,
    HOW_TO_GET: rw,
    JOIN_$BOBUKI_PRESALE: ow,
    $BOBUKI_CONTRACT_ADDRESS: iw,
    JOIN_COMMUNITY: sw,
    GET: aw,
    WATCH_THIS_TUTORIAL: lw,
    PINK_SALE: uw,
    BUY_ON_RAYDIUM: cw,
    BUY_ON_JUPITER: dw,
    $BOBUKI_ON_SOL: fw,
    FEATURE_ONE: pw,
    RENOWED_FOR_HIS_CUNNING_STRATGY: hw,
    CONSISTENTLY_EXCEEDS_EXPECTATIONS: mw,
    "100_X": "100x",
    ITS_CURRENT_STANDING: gw,
    NOW_ARMED_WITH_SUMAARI: vw,
    PREPARE_TO_UNLEASH: yw,
    TOKENOMICS: Sw,
    TOTAL_SUPPLY: xw,
    AUDIT: Aw,
    HOW_TO_GET_SMALL: Ew,
    ON_DESKTOP: ww,
    PAGE_1: Lw,
    PAGE_2: bw,
    PAGE_3: Tw,
    PAGE_4: Pw,
    INTRODUCTION: kw,
    INTRODUCTION_PARA_1: _w,
    INTRODUCTION_PARA_2: Ow,
    INTRODUCTION_PARA_3: Mw,
    CONNECT_WALLET: Iw,
    CONNECT_WALLET_PARA1: Rw,
    CONNECT_WALLET_PARA2: Nw,
    CONNECT_WALLET_PARA3: Hw,
    THE_LENGEND_BORN: jw,
    I_M: Dw,
    THE_CUTEST: Bw,
    THE_FUTURE_IS_FORSEEN: zw,
    SWAP: Fw,
    SWAP_PARA_1: Vw,
    SWAP_PARA_2: Uw,
    SWAP_PARA_3: $w,
    PROJECT: Zw,
    UTILITIES: Ww,
    X100_MASSIVE_MARKETING: Kw,
    LP_BURNT_FOREVER: Gw,
    PHASE_1: Qw,
    PHASE_1_STEP_TITLE_1: Yw,
    PHASE_1_STEP_DESCRIPTION_1: Xw,
    PHASE_1_STEP_TITLE_2: qw,
    PHASE_1_STEP_DESCRIPTION_2: Jw,
    PHASE_2: CL,
    PHASE_2_STEP_TITLE_1: eL,
    PHASE_2_STEP_DESCRIPTION_1: tL,
    PHASE_2_STEP_TITLE_2: nL,
    PHASE_2_STEP_DESCRIPTION_2: rL,
    PHASE_2_STEP_TITLE_3: oL,
    PHASE_2_STEP_DESCRIPTION_3: iL,
    PHASE_3: sL,
    PHASE_3_STEP_TITLE_1: aL,
    PHASE_3_STEP_DESCRIPTION_1: lL,
    PHASE_3_STEP_TITLE_2: uL,
    PHASE_3_STEP_DESCRIPTION_2: cL,
    PHASE_3_STEP_TITLE_3: dL,
    PHASE_3_STEP_DESCRIPTION_3: fL,
    PHASE_3_STEP_TITLE_4: pL,
    PHASE_3_STEP_DESCRIPTION_4: hL,
    PHASE_4: mL,
    PHASE_4_STEP_TITLE_1: gL,
    PHASE_4_STEP_DESCRIPTION_1: vL,
    PHASE_4_STEP_TITLE_2: yL,
    PHASE_4_STEP_DESCRIPTION_2: SL,
    PHASE_4_STEP_TITLE_3: xL,
    PHASE_4_STEP_DESCRIPTION_3: AL,
    PHASE_4_STEP_TITLE_4: EL,
    PHASE_4_STEP_DESCRIPTION_4: wL,
    PHASE_4_STEP_TITLE_5: LL,
    PHASE_4_STEP_DESCRIPTION_5: bL,
    FAQ_1: TL,
    FAQ_1_DETAILS: PL,
    PREASALE_AT: kL,
    PINKSALE: _L,
    FAQ_2: OL,
    FAQ_2_DETAILS: ML,
    // FAQ_3: IL,
    // FAQ_3_DETAILS: RL,
    WHITEPAPER_SMALL: NL,
  },
  jL = "关于",
  DL = "路线图",
  BL = "白皮书",
  zL = "NFT",
  FL = "如何获得",
  VL = "Pinksale 索赔",
  UL = "$SAN 合约地址",
  $L = "加入社区",
  ZL = "得到",
  WL = "观看本教程！",
  KL = "粉色促销",
  GL = "在 RAYDIUM 上购买",
  QL = "在木星上购买",
  YL = "$SAN 索尔",
  XL =
    "加入传奇的 $SAN Chan！与那些沉迷于奢华的同龄人不同，$SAN 是一位勇敢的人，带领社区朝着一个崇高的目标前进：将 Inus 的荣耀提升到新的高度！",
  qL = "因其狡猾的策略而闻名,",
  JL = "持续超出预期。他的追求？为推动市场",
  Cb = "目前的地位!",
  eb = "现在，手持充满索拉纳秘密的武士刀,",
  tb =
    "准备发动一场革命性的营销闪电战。但是，您会问，如何发动呢？踏上这段惊心动魄的武士之旅，亲眼目睹他的勇敢事迹！",
  nb = "代币经济学",
  rb = "总供应量",
  ob = "审计",
  ib = "如何获得",
  sb = "在桌面上",
  ab = "第1页",
  lb = "第2页",
  ub = "第3页",
  cb = "第4页",
  db = "介绍",
  fb = "为了聆听猫的叫声，我们将来到 Pinksale 的基地.",
  pb = "连接您的钱包即可加入我们的粉色预售活动.",
  hb = "见证并关注 $SAN 在他的第一波策略中取得的胜利。",
  mb = "连接钱包",
  gb =
    "在预售日期，您可以通过将钱包与网站扩展程序中连接的 phantom 或 solflare 连接起来来进行操作。",
  vb =
    "要使用此功能，您必须首先将 Phantom 或 Solflare 安装到浏览器的扩展程序中。",
  yb = "连接成功后，您终于可以在钱包当前余额中进行操作了。",
  Sb = "传奇已经诞​​生",
  xb = "我是",
  Ab = "Solana 上最可爱的 Inu",
  Eb = "未来可期，同志们！",
  wb = "交换",
  Lb =
    "为了在您的 Sol 中模拟 $SAN 预售，您必须在此处输入 $SAN 代币地址 (#codes).",
  bb = "输入您想要的 Sol 数量并设置滑点。最后，您可以通过按“交换”按钮进行交换.",
  Tb = "现在您可以等待 $SAN 代币推出后获利.",
  Pb = "项目",
  kb = "公用事业",
  _b = "X100大规模营销",
  Ob = "LP 永远烧毁",
  Mb = "第一阶段：小猫的黎明",
  Ib = "启动",
  Rb = "释放个人成长的力量",
  Nb = "基础",
  Hb = "网站揭幕",
  jb = "第二阶段：小猫的胜利",
  Db = "联盟集结",
  Bb = "点燃营销之火",
  zb = "影响者任务",
  Fb = "与关键影响者建立联盟",
  Vb = "内容征程",
  Ub = "编织引人入胜的故事",
  $b = "第三阶段：代币释放",
  Zb = "开始",
  Wb = "揭幕代币预售",
  Kb = "发布",
  Gb = "在Raydium、Jupiter、Orca上发布",
  Qb = "优势",
  Yb = "在CoinGecko和CoinMarketCap上获得上市",
  Xb = "营销变革",
  qb = "进入营销的下一个阶段",
  Jb = "第四阶段：顶峰猫科",
  CT = "扩展",
  eT = "更多中央交易所的扩展",
  tT = "创世解禁",
  nT = "第一批$SAN MEME发行",
  rT = "创世重生",
  oT = "第二批$SAN MEME发行",
  iT = "活动持续",
  sT = "突破营销努力的巅峰",
  aT = "创世进化",
  lT = "第三批$SAN MEME发行",
  uT = "我如何购买和出售 $SAN 代币？",
  cT =
    "您可以在我们的预售活动中早期购买 $SAN，预售活动在 Pinksale 进行，一旦 Raydium DEX 上线，就可以交易 1$SAN。",
  dT = "预售于",
  fT = "Pinksale",
  pT = "$SAN 是否会在中心化交易所（CEXs）上市？",
  hT =
    "是的，$SAN 目前正在与多家中心化交易所进行高级谈判，如 MEXC、BITGET 和 GATE.IO。",
  mT = "是否有可供查看的 $SAN 白皮书或路线图？",
  gT = "是的，点击这里查看我们的白皮书。",
  vT = "白皮书",
  yT = {
    ABOUT: jL,
    ROADMAP: DL,
    WHITEPAPER: BL,
    NFT: zL,
    HOW_TO_GET: FL,
    JOIN_$BOBUKI_PRESALE: VL,
    $BOBUKI_CONTRACT_ADDRESS: UL,
    JOIN_COMMUNITY: $L,
    GET: ZL,
    WATCH_THIS_TUTORIAL: WL,
    PINK_SALE: KL,
    BUY_ON_RAYDIUM: GL,
    BUY_ON_JUPITER: QL,
    $BOBUKI_ON_SOL: YL,
    FEATURE_ONE: XL,
    RENOWED_FOR_HIS_CUNNING_STRATGY: qL,
    CONSISTENTLY_EXCEEDS_EXPECTATIONS: JL,
    "100_X": "100倍",
    ITS_CURRENT_STANDING: Cb,
    NOW_ARMED_WITH_SUMAARI: eb,
    PREPARE_TO_UNLEASH: tb,
    TOKENOMICS: nb,
    TOTAL_SUPPLY: rb,
    AUDIT: ob,
    HOW_TO_GET_SMALL: ib,
    ON_DESKTOP: sb,
    PAGE_1: ab,
    PAGE_2: lb,
    PAGE_3: ub,
    PAGE_4: cb,
    INTRODUCTION: db,
    INTRODUCTION_PARA_1: fb,
    INTRODUCTION_PARA_2: pb,
    INTRODUCTION_PARA_3: hb,
    CONNECT_WALLET: mb,
    CONNECT_WALLET_PARA1: gb,
    CONNECT_WALLET_PARA2: vb,
    CONNECT_WALLET_PARA3: yb,
    THE_LENGEND_BORN: Sb,
    I_M: xb,
    THE_CUTEST: Ab,
    THE_FUTURE_IS_FORSEEN: Eb,
    SWAP: wb,
    SWAP_PARA_1: Lb,
    SWAP_PARA_2: bb,
    SWAP_PARA_3: Tb,
    PROJECT: Pb,
    UTILITIES: kb,
    X100_MASSIVE_MARKETING: _b,
    LP_BURNT_FOREVER: Ob,
    PHASE_1: Mb,
    PHASE_1_STEP_TITLE_1: Ib,
    PHASE_1_STEP_DESCRIPTION_1: Rb,
    PHASE_1_STEP_TITLE_2: Nb,
    PHASE_1_STEP_DESCRIPTION_2: Hb,
    PHASE_2: jb,
    PHASE_2_STEP_TITLE_1: Db,
    PHASE_2_STEP_DESCRIPTION_1: Bb,
    PHASE_2_STEP_TITLE_2: zb,
    PHASE_2_STEP_DESCRIPTION_2: Fb,
    PHASE_2_STEP_TITLE_3: Vb,
    PHASE_2_STEP_DESCRIPTION_3: Ub,
    PHASE_3: $b,
    PHASE_3_STEP_TITLE_1: Zb,
    PHASE_3_STEP_DESCRIPTION_1: Wb,
    PHASE_3_STEP_TITLE_2: Kb,
    PHASE_3_STEP_DESCRIPTION_2: Gb,
    PHASE_3_STEP_TITLE_3: Qb,
    PHASE_3_STEP_DESCRIPTION_3: Yb,
    PHASE_3_STEP_TITLE_4: Xb,
    PHASE_3_STEP_DESCRIPTION_4: qb,
    PHASE_4: Jb,
    PHASE_4_STEP_TITLE_1: CT,
    PHASE_4_STEP_DESCRIPTION_1: eT,
    PHASE_4_STEP_TITLE_2: tT,
    PHASE_4_STEP_DESCRIPTION_2: nT,
    PHASE_4_STEP_TITLE_3: rT,
    PHASE_4_STEP_DESCRIPTION_3: oT,
    PHASE_4_STEP_TITLE_4: iT,
    PHASE_4_STEP_DESCRIPTION_4: sT,
    PHASE_4_STEP_TITLE_5: aT,
    PHASE_4_STEP_DESCRIPTION_5: lT,
    FAQ_1: uT,
    FAQ_1_DETAILS: cT,
    PREASALE_AT: dT,
    PINKSALE: fT,
    FAQ_2: pT,
    FAQ_2_DETAILS: hT,
    // FAQ_3: mT,
    // FAQ_3_DETAILS: gT,
    WHITEPAPER_SMALL: vT,
  },
  ST = "Sobre",
  xT = "Mapa Estratégico",
  AT = "PAPEL BRANCO",
  ET = "NFT",
  wT = "Como Obter",
  LT = "Reivindicar na Pinksale",
  bT = "$SAN Endereço do contrato",
  TT = "JUNTE-SE À COMUNIDADE",
  PT = "PEGAR",
  kT = "Assista a este tutorial！",
  _T = "PROMOÇÃO ROSA",
  OT = "COMPRE NO RAYDIUM",
  MT = "COMPRE EM JÚPITER",
  IT = "$SAN NO SOL",
  RT =
    "Junte-se ao lendário $SAN, o destemido Inu da tradição sagrada do $SAN! Ao contrário de seus colegas que se deleitam com o luxo, $SAN é corajoso, liderando sua comunidade em direção a um objetivo nobre: ​​elevar a glória dos Inus a novos patamares!",
  NT = "Famoso por sua estratégia astuta,",
  HT =
    "supera consistentemente as expectativas. Sua missão? Para catapultar o mercado para",
  jT = "sua posição atual!",
  DT = "Agora, armado com a espada de samurai repleta de segredos de Solana,",
  BT =
    "se prepara para desencadear uma campanha de marketing revolucionária. Mas como, você pergunta? Embarque nesta emocionante jornada de samurai e testemunhe em primeira mão suas ousadas façanhas!",
  zT = "TOKENÔMICA",
  FT = "FORNECIMENTO TOTAL",
  VT = "AUDITORIA",
  UT = "Como Obter",
  $T = "NO DESKTOP",
  ZT = "PÁGINA 1",
  WT = "PÁGINA 2",
  KT = "PÁGINA 3",
  GT = "PÁGINA 4",
  QT = "INTRODUÇÃO",
  YT = "Para imitar os miados, estaremos em nossa base no Pinksale.",
  XT =
    "Participe do nosso evento de pré-venda no pinksale conectando sua carteira.",
  qT =
    "Testemunhe e acompanhe a vitória PUMP de $SAN em sua primeira onda de estratégia.",
  JT = "Conectar carteira",
  CP =
    "Na data da pré-venda, você pode entrar conectando sua carteira ao Phantom ou Solflare conectado na extensão do seu site.",
  eP =
    "Para usar este recurso, você deve primeiro instalar o Phantom ou Solflare na extensão do seu navegador.",
  tP =
    "Depois de conectado com sucesso, você pode finalmente usar o saldo atual da sua carteira.",
  nP = "A lenda nasceu",
  rP = "Eu sou",
  oP = "O Inu mais fofo de Solana",
  iP = "O futuro está previsto, camaradas!",
  sP = "Trocar",
  aP =
    "Para imitar seu Sol para a pré-venda de $SAN, você deve inserir o endereço do token $SAN aqui (#codes).",
  lP =
    "Insira a quantidade desejada de Sol e defina o deslizamento. Finalmente, você pode trocar pressionando o botão ‘trocar’.",
  uP = "Agora você pode esperar pelo lucro após o lançamento do token $SAN.",
  cP = "PROJETO",
  dP = "UTILITÁRIO",
  fP = "MARKETING MASSIVO X100",
  pP = "LP QUEIMADO PARA SEMPRE",
  hP = "Fase 1: Amanhecer dos Gatinhos",
  mP = "Iniciação",
  gP = "Libere o poder do crescimento pessoal",
  vP = "Fundação",
  yP = "Revelação do Site",
  SP = "Fase 2: Triunfo do Gatinho",
  xP = "Rally da Aliança",
  AP = "Acenda as chamas do Marketing",
  EP = "Missão dos Influenciadores",
  wP = "Forje a aliança com os Principais Influenciadores",
  LP = "Cruzada de Conteúdo",
  bP = "Crie Crônicas Cativantes",
  TP = "Fase 3: Token Liberado",
  PP = "Início",
  kP = "Revele a Pré-venda do Token",
  _P = "Lançamento",
  OP = "Lançamento no Uniswap",
  MP = "Ascendência",
  IP = "Obtenha listagens no CoinGecko e CoinMarketCap",
  RP = "Metamorfose de Marketing",
  NP = "Evolua para a próxima fase do Marketing",
  HP = "Fase 4: Felinos no Ápice",
  jP = "Expansão",
  DP = "Expansão em Mais CEXs",
  BP = "Gênese Desencadeada",
  zP = "Lançamento do Primeiro Lote de NFT $SAN",
  FP = "Renascimento da Gênese",
  VP = "Lançamento do Segundo Lote de NFT $SAN",
  UP = "Continuação da Campanha",
  $P = "Rompendo o Pico dos Esforços de Marketing",
  ZP = "Evolução da Gênese",
  WP = "Lançamento do Terceiro Lote de NFT $SAN",
  KP = "Como posso adquirir e vender tokens $SAN?",
  GP =
    "$SAN pode ser comprado antecipadamente na nossa Pré-venda em Pinksale ou negociado no Raydium DEX assim que estiver ao vivo.",
  QP = "Pré-venda em",
  YP = "Pinksale",
  XP = "$SAN terá listagens em exchanges centralizadas (CEXs)?",
  qP =
    "Sim, $SAN está atualmente em negociações avançadas com várias CEXs como MEXC, BITGET e GATE.IO.",
  JP = "Há um whitepaper ou roadmap do $SAN disponível para consulta?",
  Ck = "Sim, confira nosso whitepaper aqui.",
  ek = "Whitepaper",
  tk = {
    ABOUT: ST,
    ROADMAP: xT,
    WHITEPAPER: AT,
    NFT: ET,
    HOW_TO_GET: wT,
    JOIN_$BOBUKI_PRESALE: LT,
    $BOBUKI_CONTRACT_ADDRESS: bT,
    JOIN_COMMUNITY: TT,
    GET: PT,
    WATCH_THIS_TUTORIAL: kT,
    PINK_SALE: _T,
    BUY_ON_RAYDIUM: OT,
    BUY_ON_JUPITER: MT,
    $BOBUKI_ON_SOL: IT,
    FEATURE_ONE: RT,
    RENOWED_FOR_HIS_CUNNING_STRATGY: NT,
    CONSISTENTLY_EXCEEDS_EXPECTATIONS: HT,
    "100_X": "100x",
    ITS_CURRENT_STANDING: jT,
    NOW_ARMED_WITH_SUMAARI: DT,
    PREPARE_TO_UNLEASH: BT,
    TOKENOMICS: zT,
    TOTAL_SUPPLY: FT,
    AUDIT: VT,
    HOW_TO_GET_SMALL: UT,
    ON_DESKTOP: $T,
    PAGE_1: ZT,
    PAGE_2: WT,
    PAGE_3: KT,
    PAGE_4: GT,
    INTRODUCTION: QT,
    INTRODUCTION_PARA_1: YT,
    INTRODUCTION_PARA_2: XT,
    INTRODUCTION_PARA_3: qT,
    CONNECT_WALLET: JT,
    CONNECT_WALLET_PARA1: CP,
    CONNECT_WALLET_PARA2: eP,
    CONNECT_WALLET_PARA3: tP,
    THE_LENGEND_BORN: nP,
    I_M: rP,
    THE_CUTEST: oP,
    THE_FUTURE_IS_FORSEEN: iP,
    SWAP: sP,
    SWAP_PARA_1: aP,
    SWAP_PARA_2: lP,
    SWAP_PARA_3: uP,
    PROJECT: cP,
    UTILITIES: dP,
    X100_MASSIVE_MARKETING: fP,
    LP_BURNT_FOREVER: pP,
    PHASE_1: hP,
    PHASE_1_STEP_TITLE_1: mP,
    PHASE_1_STEP_DESCRIPTION_1: gP,
    PHASE_1_STEP_TITLE_2: vP,
    PHASE_1_STEP_DESCRIPTION_2: yP,
    PHASE_2: SP,
    PHASE_2_STEP_TITLE_1: xP,
    PHASE_2_STEP_DESCRIPTION_1: AP,
    PHASE_2_STEP_TITLE_2: EP,
    PHASE_2_STEP_DESCRIPTION_2: wP,
    PHASE_2_STEP_TITLE_3: LP,
    PHASE_2_STEP_DESCRIPTION_3: bP,
    PHASE_3: TP,
    PHASE_3_STEP_TITLE_1: PP,
    PHASE_3_STEP_DESCRIPTION_1: kP,
    PHASE_3_STEP_TITLE_2: _P,
    PHASE_3_STEP_DESCRIPTION_2: OP,
    PHASE_3_STEP_TITLE_3: MP,
    PHASE_3_STEP_DESCRIPTION_3: IP,
    PHASE_3_STEP_TITLE_4: RP,
    PHASE_3_STEP_DESCRIPTION_4: NP,
    PHASE_4: HP,
    PHASE_4_STEP_TITLE_1: jP,
    PHASE_4_STEP_DESCRIPTION_1: DP,
    PHASE_4_STEP_TITLE_2: BP,
    PHASE_4_STEP_DESCRIPTION_2: zP,
    PHASE_4_STEP_TITLE_3: FP,
    PHASE_4_STEP_DESCRIPTION_3: VP,
    PHASE_4_STEP_TITLE_4: UP,
    PHASE_4_STEP_DESCRIPTION_4: $P,
    PHASE_4_STEP_TITLE_5: ZP,
    PHASE_4_STEP_DESCRIPTION_5: WP,
    FAQ_1: KP,
    FAQ_1_DETAILS: GP,
    PREASALE_AT: QP,
    PINKSALE: YP,
    FAQ_2: XP,
    FAQ_2_DETAILS: qP,
    // FAQ_3: JP,
    // FAQ_3_DETAILS: Ck,
    WHITEPAPER_SMALL: ek,
  };
function nk(C, e) {
  if (!(C instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function f0(C) {
  "@babel/helpers - typeof";
  return (
    (f0 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    f0(C)
  );
}
function rk(C, e) {
  if (f0(C) != "object" || !C) return C;
  var t = C[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(C, e);
    if (f0(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(C);
}
function ok(C) {
  var e = rk(C, "string");
  return f0(e) == "symbol" ? e : e + "";
}
function ik(C, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(C, ok(n.key), n);
  }
}
function sk(C, e, t) {
  return (
    e && ik(C.prototype, e),
    Object.defineProperty(C, "prototype", { writable: !1 }),
    C
  );
}
var ac = [],
  ak = ac.forEach,
  lk = ac.slice;
function uk(C) {
  return (
    ak.call(lk.call(arguments, 1), function (e) {
      if (e) for (var t in e) C[t] === void 0 && (C[t] = e[t]);
    }),
    C
  );
}
var Pi = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  ck = function (e, t, n) {
    var r = n || {};
    r.path = r.path || "/";
    var o = encodeURIComponent(t),
      i = "".concat(e, "=").concat(o);
    if (r.maxAge > 0) {
      var s = r.maxAge - 0;
      if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
      i += "; Max-Age=".concat(Math.floor(s));
    }
    if (r.domain) {
      if (!Pi.test(r.domain)) throw new TypeError("option domain is invalid");
      i += "; Domain=".concat(r.domain);
    }
    if (r.path) {
      if (!Pi.test(r.path)) throw new TypeError("option path is invalid");
      i += "; Path=".concat(r.path);
    }
    if (r.expires) {
      if (typeof r.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      i += "; Expires=".concat(r.expires.toUTCString());
    }
    if (
      (r.httpOnly && (i += "; HttpOnly"),
      r.secure && (i += "; Secure"),
      r.sameSite)
    ) {
      var a =
        typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite;
      switch (a) {
        case !0:
          i += "; SameSite=Strict";
          break;
        case "lax":
          i += "; SameSite=Lax";
          break;
        case "strict":
          i += "; SameSite=Strict";
          break;
        case "none":
          i += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return i;
  },
  ki = {
    create: function (e, t, n, r) {
      var o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      n &&
        ((o.expires = new Date()),
        o.expires.setTime(o.expires.getTime() + n * 60 * 1e3)),
        r && (o.domain = r),
        (document.cookie = ck(e, encodeURIComponent(t), o));
    },
    read: function (e) {
      for (
        var t = "".concat(e, "="), n = document.cookie.split(";"), r = 0;
        r < n.length;
        r++
      ) {
        for (var o = n[r]; o.charAt(0) === " "; ) o = o.substring(1, o.length);
        if (o.indexOf(t) === 0) return o.substring(t.length, o.length);
      }
      return null;
    },
    remove: function (e) {
      this.create(e, "", -1);
    },
  },
  dk = {
    name: "cookie",
    lookup: function (e) {
      var t;
      if (e.lookupCookie && typeof document < "u") {
        var n = ki.read(e.lookupCookie);
        n && (t = n);
      }
      return t;
    },
    cacheUserLanguage: function (e, t) {
      t.lookupCookie &&
        typeof document < "u" &&
        ki.create(
          t.lookupCookie,
          e,
          t.cookieMinutes,
          t.cookieDomain,
          t.cookieOptions
        );
    },
  },
  fk = {
    name: "querystring",
    lookup: function (e) {
      var t;
      if (typeof window < "u") {
        var n = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf("?") > -1 &&
          (n = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        for (
          var r = n.substring(1), o = r.split("&"), i = 0;
          i < o.length;
          i++
        ) {
          var s = o[i].indexOf("=");
          if (s > 0) {
            var a = o[i].substring(0, s);
            a === e.lookupQuerystring && (t = o[i].substring(s + 1));
          }
        }
      }
      return t;
    },
  },
  v4 = null,
  _i = function () {
    if (v4 !== null) return v4;
    try {
      v4 = window !== "undefined" && window.localStorage !== null;
      var e = "i18next.translate.boo";
      window.localStorage.setItem(e, "foo"), window.localStorage.removeItem(e);
    } catch {
      v4 = !1;
    }
    return v4;
  },
  pk = {
    name: "localStorage",
    lookup: function (e) {
      var t;
      if (e.lookupLocalStorage && _i()) {
        var n = window.localStorage.getItem(e.lookupLocalStorage);
        n && (t = n);
      }
      return t;
    },
    cacheUserLanguage: function (e, t) {
      t.lookupLocalStorage &&
        _i() &&
        window.localStorage.setItem(t.lookupLocalStorage, e);
    },
  },
  y4 = null,
  Oi = function () {
    if (y4 !== null) return y4;
    try {
      y4 = window !== "undefined" && window.sessionStorage !== null;
      var e = "i18next.translate.boo";
      window.sessionStorage.setItem(e, "foo"),
        window.sessionStorage.removeItem(e);
    } catch {
      y4 = !1;
    }
    return y4;
  },
  hk = {
    name: "sessionStorage",
    lookup: function (e) {
      var t;
      if (e.lookupSessionStorage && Oi()) {
        var n = window.sessionStorage.getItem(e.lookupSessionStorage);
        n && (t = n);
      }
      return t;
    },
    cacheUserLanguage: function (e, t) {
      t.lookupSessionStorage &&
        Oi() &&
        window.sessionStorage.setItem(t.lookupSessionStorage, e);
    },
  },
  mk = {
    name: "navigator",
    lookup: function (e) {
      var t = [];
      if (typeof navigator < "u") {
        if (navigator.languages)
          for (var n = 0; n < navigator.languages.length; n++)
            t.push(navigator.languages[n]);
        navigator.userLanguage && t.push(navigator.userLanguage),
          navigator.language && t.push(navigator.language);
      }
      return t.length > 0 ? t : void 0;
    },
  },
  gk = {
    name: "htmlTag",
    lookup: function (e) {
      var t,
        n =
          e.htmlTag ||
          (typeof document < "u" ? document.documentElement : null);
      return (
        n &&
          typeof n.getAttribute == "function" &&
          (t = n.getAttribute("lang")),
        t
      );
    },
  },
  vk = {
    name: "path",
    lookup: function (e) {
      var t;
      if (typeof window < "u") {
        var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (n instanceof Array)
          if (typeof e.lookupFromPathIndex == "number") {
            if (typeof n[e.lookupFromPathIndex] != "string") return;
            t = n[e.lookupFromPathIndex].replace("/", "");
          } else t = n[0].replace("/", "");
      }
      return t;
    },
  },
  yk = {
    name: "subdomain",
    lookup: function (e) {
      var t =
          typeof e.lookupFromSubdomainIndex == "number"
            ? e.lookupFromSubdomainIndex + 1
            : 1,
        n =
          typeof window < "u" &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
          );
      if (n) return n[t];
    },
  };
function Sk() {
  return {
    order: [
      "querystring",
      "cookie",
      "localStorage",
      "sessionStorage",
      "navigator",
      "htmlTag",
    ],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: function (e) {
      return e;
    },
  };
}
var lc = (function () {
  function C(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    nk(this, C),
      (this.type = "languageDetector"),
      (this.detectors = {}),
      this.init(e, t);
  }
  return (
    sk(C, [
      {
        key: "init",
        value: function (t) {
          var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            r =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          (this.services = t || { languageUtils: {} }),
            (this.options = uk(n, this.options || {}, Sk())),
            typeof this.options.convertDetectedLanguage == "string" &&
              this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
              (this.options.convertDetectedLanguage = function (o) {
                return o.replace("-", "_");
              }),
            this.options.lookupFromUrlIndex &&
              (this.options.lookupFromPathIndex =
                this.options.lookupFromUrlIndex),
            (this.i18nOptions = r),
            this.addDetector(dk),
            this.addDetector(fk),
            this.addDetector(pk),
            this.addDetector(hk),
            this.addDetector(mk),
            this.addDetector(gk),
            this.addDetector(vk),
            this.addDetector(yk);
        },
      },
      {
        key: "addDetector",
        value: function (t) {
          return (this.detectors[t.name] = t), this;
        },
      },
      {
        key: "detect",
        value: function (t) {
          var n = this;
          t || (t = this.options.order);
          var r = [];
          return (
            t.forEach(function (o) {
              if (n.detectors[o]) {
                var i = n.detectors[o].lookup(n.options);
                i && typeof i == "string" && (i = [i]), i && (r = r.concat(i));
              }
            }),
            (r = r.map(function (o) {
              return n.options.convertDetectedLanguage(o);
            })),
            this.services.languageUtils.getBestMatchFromCodes
              ? r
              : r.length > 0
              ? r[0]
              : null
          );
        },
      },
      {
        key: "cacheUserLanguage",
        value: function (t, n) {
          var r = this;
          n || (n = this.options.caches),
            n &&
              ((this.options.excludeCacheFor &&
                this.options.excludeCacheFor.indexOf(t) > -1) ||
                n.forEach(function (o) {
                  r.detectors[o] &&
                    r.detectors[o].cacheUserLanguage(t, r.options);
                }));
        },
      },
    ]),
    C
  );
})();
lc.type = "languageDetector";
const xk = {
  en: { translation: HL },
  zh: { translation: yT },
  pt: { translation: tk },
};
W1.use(zA)
  .use(lc)
  .init({
    fallbackLng: ["en"],
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
    resources: xk,
    interpolation: { escapeValue: !1 },
  });
const Ak = () => {
    const { classes: C, cx: e } = TE(),
      [t, n] = L.useState(!1),
      [r, o] = L.useState(localStorage.getItem("i18nextLng") ?? "en"),
      { t: i } = L2(),
      s = [
        { code: "en", name: "", flag: _E },
        { code: "zh", name: "", flag: kE },
        { code: "pt", name: "", flag: PE },
      ],
      a = (l) => {
        o(l), W1.changeLanguage(l);
      };
    return (
      console.log(
        "languages.filter((item) => item.code === code)[0] =>",
        s.filter((l) => l.code === r)[0]
      ),
      u.jsxs(u.Fragment, {
        children: [
          u.jsxs("div", {
            className: C.root,
            style: { minHeight: "80px" },
            children: [
              u.jsx("div", {
                className: C.logoContainer,
                style: { height: "100%" },
                children: u.jsx("img", { src: WA, alt: "Mochi the cat Logo" }),
              }),
              u.jsx("div", {
                className: C.bobWifTextContainer,
                onClick: () => (window.location.href = `#${e3.home}`),
                children: u.jsx("img", { src: T6, height: "60%" }),
              }),
              u.jsxs("div", {
                className: C.link,
                onClick: () => (window.location.href = `#${e3.about}`),
                children: [
                  u.jsx(x1, {
                    variant: "h5",
                    fontFamily: "'Nunito'",
                    children: i("ABOUT"),
                  }),
                  u.jsx(hi, {}),
                ],
              }),
              u.jsxs("div", {
                className: C.link,
                onClick: () => (window.location.href = `#${e3.roadmap}`),
                children: [
                  u.jsx(x1, {
                    variant: "h5",
                    fontFamily: "'Nunito'",
                    children: i("ROADMAP"),
                  }),
                  u.jsx(gi, {}),
                ],
              }),
              u.jsxs("div", {
                className: C.link,
                onClick: () => window.open(ci, "_blank"),
                children: [
                  u.jsx(x1, {
                    variant: "h5",
                    fontFamily: "'Nunito'",
                    children: i("NFT"),
                  }),
                  u.jsx(mi, {}),
                ],
              }),
              u.jsxs("div", {
                className: e(C.link, C.howtogetLink),
                onClick: () => window.open("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b&chain=mainnet", "_blank"),
                children: [
                  u.jsx(x1, {
                    variant: "h5",
                    fontFamily: "'Nunito'",
                    children: i("Buy"),
                  }),
                  // u.jsx("img", { src: T6, height: "50%", width: "100%" }),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: C.mobileNav,
            children: [
              u.jsx($y, {
                className: C.hamburger,
                onClick: () => n((l) => !l),
                children: u.jsx(bE, {
                  fill: t ? "#F56221" : V8.palette.primary.main,
                }),
              }),
              u.jsxs(yA, {
                open: t,
                onClose: () => n(!1),
                style: { maxWidth: "300px" },
                children: [
                  u.jsxs("div", {
                    className: e(C.link, C.mobileLink),
                    onClick: () => (window.location.href = `#${e3.about}`),
                    children: [
                      u.jsx(x1, {
                        variant: "h3",
                        fontFamily: "'Boogaloo'",
                        children: i("ABOUT"),
                      }),
                      u.jsx(hi, {}),
                    ],
                  }),
                  u.jsxs("div", {
                    className: e(C.link, C.mobileLink),
                    onClick: () => (window.location.href = `#${e3.roadmap}`),
                    children: [
                      u.jsx(x1, {
                        variant: "h3",
                        fontFamily: "'Boogaloo'",
                        children: i("ROADMAP"),
                      }),
                      u.jsx(gi, {}),
                    ],
                  }),
                  u.jsxs("div", {
                    className: e(C.link, C.mobileLink),
                    onClick: () => window.open(ci, "_blank"),
                    children: [
                      u.jsx(x1, {
                        variant: "h3",
                        fontFamily: "'Boogaloo'",
                        children: i("NFT"),
                      }),
                      u.jsx(mi, {}),
                    ],
                  }),
                  u.jsxs("div", {
                    className: e(C.link, C.howtogetLink, C.mobileLink),
                    style: { flexDirection: "column" },
                    onClick: () => window.open("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b&chain=mainnet", "_blank"),
                    children: [
                      u.jsx(x1, {
                        variant: "h3",
                        fontFamily: "'Boogaloo'",
                        children: i("Buy"),
                      }),
                      u.jsx("img", {
                        src: T6,
                        alt: "",
                        height: 40,
                        style: { width: "40%" },
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: C.floatingCom,
            children: u.jsxs("div", {
              className: e(C.iconWrapper, "catFootWrapper"),
              children: [
                u.jsx("img", {
                  src: ZA,
                  className: e(C.bobukiHeading, "catFoot"),
                  height: 40,
                }),
                u.jsx(n6, {
                  className: C.btnTelegram,
                  onClick: () => window.open("https://t.me/SanChanDog", "_blank"),
                }),
                u.jsx(n6, {
                  className: C.btnTwitter,
                  onClick: () => window.open("https://x.com/SanChan_dog", "_blank"),
                }),
                u.jsx(n6, {
                  className: C.btnInstagram,
                  onClick: () => window.open("https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b&chain=mainnet", "_blank"),
                }),
                u.jsx(n6, {
                  className: C.btnDecxTools,
                  onClick: () => window.open("https://www.dextools.io/app/en/ether/pair-explorer/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b", "_blank"),
                }),
                u.jsx("img", { src: QA, className: C.icon }),
                u.jsx("img", { src: KA, className: C.icon }),
                u.jsx("img", { src: YA, className: C.icon }),
                u.jsx("img", { src: GA, className: C.icon }),
              ],
            }),
          }),
          u.jsxs("div", {
            className: `${C.languageSelectContainer} selectContainer`,
            children: [
              u.jsxs("div", {
                className: C.selectedItem,
                children: [
                  u.jsx("img", {
                    src: s.filter((l) => l.code === r)[0].flag ?? "",
                    alt: s.filter((l) => l.code === r)[0].name ?? "",
                    className: C.flagIcon,
                  }),
                  u.jsx("span", {
                    children: s.filter((l) => l.code === r)[0].name ?? "en",
                  }),
                ],
              }),
              u.jsx("div", {
                className: "options",
                children: s.map((l) =>
                  u.jsxs("div", {
                    className: "option",
                    onClick: () => a(l.code),
                    style:
                      l.code === r
                        ? {
                            background: V8.palette.primary.main,
                            color: "#000",
                            borderRadius: "5px",
                          }
                        : {},
                    children: [
                      u.jsx("img", {
                        src: l.flag,
                        alt: l.name,
                        className: C.flagIcon,
                      }),
                      u.jsx("span", { children: l.name }),
                    ],
                  })
                ),
              }),
            ],
          }),
        ],
      })
    );
  },
  Ek = "/assets/featBg-C2UCZZrS.png",
  wk = X3()((C) => ({
    root: {
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${Ek})`,
      padding: "70px 20px",
      position: "relative",
      "&::before": {
        position: "absolute",
        content: "''",
        width: "100%",
        height: "100%",
        background: "#d37a6d",
        opacity: "0.6",
      },
    },
    content: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "0px",
      width: "100%",
      "& h1": {
        [C.breakpoints.down("sm")]: { textAlign: "center", fontSize: "3rem" },
        zIndex: "1",
        WebkitTextStroke: "2px #000",
        fontFamily: "boogaloo",
        color: "#fff",
        fontSize: "5rem",
        fontWeight: "900",
        letterSpacing: "0px",
        textShadow: "1px 10px 0px #000",
      },
      position: "relative",
    },
    bobwif: { width: "91%", zIndex: "1" },
    water: {
      position: "absolute",
      left: "19%",
      top: "30%",
      width: "78%",
      transform: "translate(-50%, -50%)",
      zIndex: "0",
    },
    wrapper: {
      width: "95%",
      maxWidth: "1002px",
      [C.breakpoints.down(1600)]: { maxWidth: "700px", padding: "50px 0px" },
      zIndex: "2",
      padding: "100px 0px",
    },
    content2: {
      "& p": { width: "100%", maxWidth: "500px" },
      "& b": {
        [C.breakpoints.down("sm")]: { fontSize: "0.9rem" },
        fontSize: "1.3rem",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.2rem",
      fontWeight: "700",
      position: "relative",
      fontFamily: "inter",
      [C.breakpoints.down("sm")]: {
        textAlign: "center",
        flexDirection: "column-reverse",
        fontSize: "0.9rem",
      },
    },
    content3: {
      "& p": { width: "100%", maxWidth: "500px" },
      "& b": {
        [C.breakpoints.down("sm")]: { fontSize: "0.9rem" },
        fontSize: "1.3rem",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.2rem",
      fontWeight: "700",
      position: "relative",
      [C.breakpoints.down("sm")]: {
        textAlign: "center",
        flexDirection: "column",
        fontSize: "0.9rem",
      },
      fontFamily: "inter",
    },
    content4: {
      "& p": { width: "100%", maxWidth: "500px" },
      "& b": {
        [C.breakpoints.down("sm")]: { fontSize: "0.9rem" },
        fontSize: "1.3rem",
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.2rem",
      fontWeight: "700",
      position: "relative",
      fontFamily: "inter",
      [C.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
        textAlign: "center",
        flexDirection: "column",
      },
    },
    dialogContainer1: {
      [C.breakpoints.down("sm")]: { width: "100%" },
      position: "relative",
      width: "30%",
      "& p": {
        padding: "1px",
        fontFamily: "boogaloo",
        fontSize: "2.5rem",
        fontWeight: "300",
        width: 200,
        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) rotate(-10deg)",
        zIndex: 2,
        [C.breakpoints.down(1600)]: { width: 100, fontSize: "1.5rem" },
        [C.breakpoints.down(880)]: { fontSize: "1.5rem" },
      },
    },
    dialogContainer2: {
      [C.breakpoints.down("sm")]: { width: "100%" },
      position: "relative",
      width: "37%",
      "& p": {
        "& b": { fontSize: "1.8rem" },
        fontFamily: "boogaloo",
        fontSize: "2.3rem",
        fontWeight: "300",
        width: 225,
        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) rotate(-10deg)",
        zIndex: 2,
        [C.breakpoints.down(880)]: { fontSize: "1.5rem" },
        [C.breakpoints.down(1600)]: {
          width: 100,
          fontSize: "1rem",
          "& b": { fontSize: "1rem" },
        },
      },
    },
    dialogContainer3: {
      position: "relative",
      width: "37%",
      [C.breakpoints.down("sm")]: { width: "100%" },
      "& p": {
        fontFamily: "boogaloo",
        fontSize: "2rem",
        fontWeight: "300",
        width: 231,
        textAlign: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%) rotate(23deg)",
        zIndex: 2,
        [C.breakpoints.down(880)]: { width: "100%", fontSize: "1.5rem" },
        [C.breakpoints.down(1600)]: { width: 100, fontSize: "1.5rem" },
      },
    },
    dialog1: { width: "100%", [C.breakpoints.down(880)]: { width: "200px" } },
    dialog2: { width: "100%", [C.breakpoints.down(880)]: { width: "200px" } },
    dialog3: {
      width: "100%",
      left: "14%",
      top: "-82px",
      [C.breakpoints.down(880)]: { position: "unset", width: "200px" },
    },
    cat1: {
      position: "absolute",
      [C.breakpoints.down(1200)]: { display: "none" },
      right: "-35%",
      top: "-100%",
      width: "39%",
    },
    cat2: {
      position: "absolute",
      [C.breakpoints.down(1200)]: { display: "none" },
      left: "-35%",
      top: "-40%",
      width: "39%",
    },
    cat3: {
      position: "absolute",
      [C.breakpoints.down(1200)]: { display: "none" },
      right: "-35%",
      top: "-60%",
      width: "39%",
    },
  })),
  uc = "/assets/bobwif-0SWLgwQm.png",
  Lk = "/assets/water-DAntuUkt.png",
  bk = "/assets/dialog1-BuXU0UbS.png",
  Tk = "/assets/dialog2-84gCvskX.png",
  Pk = "/assets/dialog3-adyKCEU4.png",
  kk = "/assets/cat1-BrIlgkKZ.png",
  _k = "/assets/cat2-9BvXMWzt.png",
  Ok = "/assets/cat3-BToeuSwn.png",
  Mk = () => {
    const { classes: C } = wk(),
      { t: e } = L2();
    return u.jsx("div", {
      className: C.root,
      id: e3.about,
      children: u.jsxs("div", {
        className: C.wrapper,
        children: [
          u.jsxs("div", {
            className: C.content,
            children: [
              u.jsx("img", { className: C.bobwif, src: uc, alt: " bobwif" }),
              u.jsx("img", { className: C.water, src: Lk, alt: " water drop" }),
              u.jsx("h1", { children: e("$BOBUKI_ON_SOL") }),
            ],
          }),
          u.jsxs("div", {
            className: C.content2,
            children: [
              u.jsx("p", { children: e("FEATURE_ONE") }),
              u.jsxs("div", {
                className: C.dialogContainer1,
                children: [
                  u.jsx("img", { src: bk, className: C.dialog1, alt: "" }),
                  u.jsx("p", { children: e("THE_LENGEND_BORN") }),
                ],
              }),
              u.jsx("img", { src: kk, className: C.cat1, alt: "" }),
            ],
          }),
          u.jsxs("div", {
            className: C.content3,
            children: [
              u.jsx("img", { src: _k, className: C.cat2, alt: "" }),
              u.jsxs("div", {
                className: C.dialogContainer2,
                children: [
                  u.jsx("img", { src: Tk, className: C.dialog2, alt: "" }),
                  u.jsxs("p", {
                    children: [
                      u.jsx("b", { children: e("I_M") }),
                      e("THE_CUTEST"),
                    ],
                  }),
                ],
              }),
              u.jsxs("p", {
                children: [
                  e("RENOWED_FOR_HIS_CUNNING_STRATGY"),
                  " ",
                  u.jsx("b", { children: "$SAN" }),
                  " ",
                  e("CONSISTENTLY_EXCEEDS_EXPECTATIONS"),
                  " ",
                  u.jsx("b", { children: e("100x") }),
                  " ",
                  e("ITS_CURRENT_STANDING"),
                ],
              }),
            ],
          }),
          u.jsxs("div", {
            className: C.content4,
            children: [
              u.jsx("img", { src: Ok, className: C.cat3, alt: "" }),
              u.jsxs("p", {
                children: [
                  e("NOW_ARMED_WITH_SUMAARI"),
                  u.jsx("b", { children: "$SAN" }),
                  " ",
                  e("PREPARE_TO_UNLEASH"),
                ],
              }),
              u.jsxs("div", {
                className: C.dialogContainer3,
                children: [
                  u.jsx("img", { src: Pk, className: C.dialog3, alt: "" }),
                  u.jsx("p", { children: e("THE_FUTURE_IS_FORSEEN") }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  Ik = () =>
    u.jsx("svg", {
      className: "expandIcon",
      xmlns: "http://www.w3.org/2000/svg",
      width: 46,
      height: 39,
      viewBox: "0 0 46 39",
      fill: "none",
      children: u.jsx("path", {
        d: "M22.5167 -1.96847e-06L45.0333 39L3.40949e-06 39L22.5167 -1.96847e-06Z",
      }),
    }),
  Rk = "/assets/catinquestion-DV3JK9kd.png",
  Nk = a1((C) =>
    u.jsx(uy, { disableGutters: !0, elevation: 0, square: !0, ...C })
  )(({ expanded: C }) => ({
    padding: "1rem",
    transition: "all 0.2s ease",
    background: C ? "#747474" : "transparent",
    color: C ? "#fff" : "#000",
    "&:not(:last-child)": { borderBottom: 0 },
    "&::before": { display: "none" },
    "&:hover": { background: "#747474", color: "#fff" },
    "& .expandIcon path": { fill: C ? "#fff" : "#000" },
    "&:hover .expandIcon path": { fill: "#fff" },
  })),
  Hk = a1((C) => u.jsx(Dy, { expandIcon: u.jsx(Ik, {}), ...C }))(
    ({ theme: C }) => ({
      flexDirection: "row-reverse",
      "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(180deg)",
      },
      "& .MuiAccordionSummary-content": { marginLeft: C.spacing(1) },
    })
  ),
  jk = a1(my)(({ theme: C }) => ({
    padding: C.spacing(2),
    maxWidth: "70%",
    [C.breakpoints.down("md")]: { maxWidth: "100%" },
  }));
function Dk() {
  const { t: C } = L2(),
    e = localStorage.getItem("lang"),
    t = fi(C),
    [n, r] = L.useState(e ? [] : t);
  L.useEffect(() => {
    const i = setTimeout(() => {
      if (e) {
        const s = fi(C);
        r(s);
      }
    }, 500);
    return () => clearTimeout(i);
  }, [e]);
  const o = (i) => () => {
    r((s) =>
      s.map((a) => (a.id === i ? { ...a, isExpanded: !a.isExpanded } : a))
    );
  };
  return u.jsxs("div", {
    style: {
      width: "100%",
      position: "relative",
      height: "100%",
      overflow: "hidden",
    },
    children: [
      n.map((i, s) =>
        u.jsxs(
          Nk,
          {
            expanded: i == null ? void 0 : i.isExpanded,
            onChange: o(i == null ? void 0 : i.id),
            children: [
              u.jsx(Hk, {
                "aria-controls": "panel1d-content",
                id: "panel1d-header",
                children: u.jsx(x1, {
                  fontFamily: "Boogaloo",
                  variant: "h3",
                  children: i == null ? void 0 : i.question,
                }),
              }),
              u.jsx(jk, {
                children: u.jsx(x1, {
                  dangerouslySetInnerHTML: {
                    __html: i == null ? void 0 : i.answer,
                  },
                  variant: "h5",
                  fontFamily: "Boogaloo",
                  fontWeight: 300,
                }),
              }),
            ],
          },
          s
        )
      ),
      u.jsx("img", {
        src: Rk,
        alt: "",
        style: { position: "absolute", bottom: 0, right: 0, width: "10%" },
      }),
    ],
  });
}
const Bk = X3()(() => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#D9D9D9",
    },
  })),
  zk = () => {
    const { classes: C } = Bk();
    return u.jsxs("div", {
      className: C.root,
      children: [
        u.jsx(x1, {
          variant: "h1",
          fontFamily: "Boogaloo",
          mb: 2,
          children: "FAQ",
        }),
        u.jsx(Dk, {}),
      ],
    });
  },
  Fk = X3()((C) => ({
    root: {
      width: "100%",
      background: "black",
      color: "white",
      padding: "5rem 8rem 2rem",
      position: "relative",
      [C.breakpoints.down("md")]: { padding: "5rem 2rem 2rem" },
    },
    footercat: {
      width: "28%",
      position: "absolute",
      bottom: 0,
      right: 0,
      [C.breakpoints.down("md")]: { display: "none" },
    },
    mainContainer: {
      width: "100%",
      display: "flex",
      gap: "15%",
      "@media screen and (min-width: 1921px)": { gap: "25%" },
      [C.breakpoints.down("md")]: { flexDirection: "column" },
    },
    navLinks: {
      width: "100%",
      maxWidth: "600px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      [C.breakpoints.down("md")]: { maxWidth: "100%" },
    },
    navLink: {
      margin: "0.5rem 0 ",
      fontFamily: "Boogaloo",
      textTransform: "uppercase",
      transition: "all 0.2s ease",
      cursor: "pointer",
      "&:hover": { color: "#FFA740" },
      [C.breakpoints.down("sm")]: { fontSize: "1.5rem !important" },
    },
    socialIcons: {
      maxWidth: "320px",
      placeItems: "center",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      [C.breakpoints.down("md")]: {
        marginTop: "2rem",
        maxWidth: "100%",
        gap: "1rem",
      },
    },
    icon: {
      cursor: "pointer",
      width: "80%",
      "& img": { width: "100%", margin: "0 auto" },
    },
    bottomContainer: {
      marginTop: "8rem",
      maxWidth: "90%",
      [C.breakpoints.down("md")]: { maxWidth: "100%" },
    },
    bobukionsale: { [C.breakpoints.down("md")]: { display: "none" } },
    line: { width: "100%", height: "4px", background: "white" },
    emailContainer: {
      marginTop: "1rem",
      width: "100%",
      padding: "0.5rem 6rem 0.5rem 3rem",
      display: "flex",
      justifyContent: "space-between",
      [C.breakpoints.down("md")]: {
        justifyContent: "center",
        padding: "0.5rem 0rem 0.5rem 0rem",
      },
    },
  })),
  Vk = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: 36,
      height: 30,
      viewBox: "0 0 44 38",
      fill: "none",
      
    }),
  Uk = "/assets/footercat-CFbf_4tg.png",
  $k = () => {
    const { classes: C } = Fk(),
      { t: e } = L2();
    return u.jsxs("div", {
      className: C.root,
      children: [
        u.jsx("img", { src: Uk, alt: "", className: C.footercat }),
        u.jsxs("div", {
          className: C.mainContainer,
          children: [
            u.jsx("div", {
              className: C.navLinks,
              children: dE(e).map((t, n) =>
                u.jsx(
                  x1,
                  {
                    variant: "h3",
                    onClick: () => {
                      if (t.title === "Whitepaper") {
                        window.open(o9, "_blank");
                        return;
                      }
                      if (t.url === "howtoget") {
                        window.open(c0, "_blank");
                        return;
                      }
                      window.location.href = `#${t.url}`;
                    },
                    className: C.navLink,
                    children: t.title,
                  },
                  n
                )
              ),
            }),
            u.jsx("div", {
              className: C.socialIcons,
              children: fE.map((t, n) =>
                u.jsx(
                  "div",
                  {
                    className: C.icon,
                    onClick: () =>
                      t.url ? window.open(t.url, "_blank") : null,
                    children: u.jsx("img", { src: t.icon, alt: "" }),
                  },
                  n
                )
              ),
            }),
          ],
        }),
        u.jsxs("div", {
          className: C.bottomContainer,
          children: [
            u.jsx("div", { className: C.line }),
            u.jsxs("div", {
              className: C.emailContainer,
              children: [
                u.jsxs("div", {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  },
                  children: [
                    u.jsx(Vk, {}),
                    u.jsx(x1, { variant: "h6", children: aE }),
                  ],
                }),
                u.jsx("div", {
                  className: C.bobukionsale,
                  children: u.jsx(x1, {
                    variant: "h6",
                    children: e("$BOBUKI_ON_SOL"),
                  }),
                }),
              ],
            }),
            u.jsx("div", {
              style: { width: "100%" },
              children: u.jsxs(x1, {
                variant: "h6",
                textAlign: "center",
                children: ["© $SAN ", new Date().getFullYear()],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Zk = X3()((C, { strokeWidth: e, strokeShadowY: t }) => ({
    root: {
      fontFamily: "Boogaloo",
      textShadow: `0px ${t}px 0px #000`,
      WebkitTextStrokeWidth: `${e}px`,
      WebkitTextStrokeColor: "black",
    },
  })),
  d1 = ({
    text: C,
    variant: e,
    className: t,
    strokeWidth: n = 5,
    strokeShadowY: r = 12,
  }) => {
    const { classes: o, cx: i } = Zk({ strokeWidth: n, strokeShadowY: r });
    return u.jsx(x1, { variant: e, className: i(o.root, t), children: C });
  },
  Wk = "/assets/pawbackground-AcQP_GRl.png",
  Kk = "/assets/brownpaw-B4v83LPG.png",
  Gk = "/assets/pinkpaw-DQ3I0Gbj.png",
  Qk = "/assets/cyanpaw-DyyAU6mS.png",
  Yk = "/assets/getbobukibg-k0JSVOhK.png",
  Xk = X3()((C) => ({
    root: {
      width: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      borderTop: "2px solid black",
      borderBottom: "2px solid black",
      [C.breakpoints.down("md")]: { display: "none" },
    },
    getBobWifHeading: {
      borderRight: "1px solid black",
      padding: "4rem 2rem",
      background: "#FFB530",
      width: "100%",
      minHeight: "20vh",
    },
    firstText: {
      display: "flex",
      gap: "5rem",
      "& img": {
        width: "15%",
        animation: "float 3s infinite",
        animationTimingFunction: "linear",
      },
    },
    heading: { color: "#fff", fontSize: "10rem !important", lineHeight: "95%" },
    secondText: {
      display: "flex",
      gap: "2rem",
      "& img": {
        width: "250px",
        height: "100%",
        animation: "rotateAndGrow 5s infinite",
        animationTimingFunction: "linear",
        marginTop: "-10rem",
      },
    },
    stepsContainer: { width: "100%", height: "100%" },
    stepContainer: {
      maxHeight: "calc(100% / 3)",
      height: "100%",
      borderBottom: "1px solid black",
      background: `url(${Wk}), #fff`,
      backgroundBlendMode: "hard-light",
      overflow: "hidden",
      cursor: "pointer",
      "&:hover .brownpaw": { transform: "translateX(0%)" },
      "&:hover .pinkpaw": { transform: "translateX(0%)" },
      "&:hover .cyanpaw": { transform: "translateX(0%)" },
    },
    step: {
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
      padding: "3rem",
      transition: "transform 0.3s ease-in-out",
      "&.brownpaw": {
        background: `url(${Kk})`,
        backgroundSize: "100% 100%",
        transform: "translateX(-85%)",
      },
      "&.pinkpaw": {
        background: `url(${Gk})`,
        backgroundSize: "100% 100%",
        transform: "translateX(-85%)",
      },
      "&.cyanpaw": {
        background: `url(${Qk})`,
        backgroundSize: "100% 100%",
        transform: "translateX(-85%)",
      },
    },
    text: { color: "#fff" },
    mobileRoot: {
      padding: "4rem",
      background: `url(${Yk})`,
      backgroundSize: "100% 100%",
      display: "none",
      [C.breakpoints.down("md")]: { display: "block" },
      [C.breakpoints.down("sm")]: { padding: "4rem 1rem" },
    },
    mobileHeading: {
      fontSize: "8rem !important",
      [C.breakpoints.down("sm")]: { fontSize: "4rem !important" },
    },
    linksContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      marginTop: "2rem",
    },
    linkContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "300px",
      margin: "0 auto",
      padding: "1rem 1rem",
      border: "4px solid black",
      borderRadius: "1rem",
      [C.breakpoints.up("sm")]: { maxWidth: "450px" },
    },
    outlinetext: {},
  })),
  Mi = "/assets/coin-LeEj56nR.png",
  Ii = "/assets/cathead-BtGR_D9v.png",
  J5 = () =>
    u.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: 22,
      height: 22,
      viewBox: "0 0 22 22",
      fill: "none",
      children: u.jsx("path", {
        d: "M6.01574 1H21V16.0653M1 21L20.8924 1",
        stroke: "black",
        strokeWidth: 2,
        strokeLinecap: "round",
      }),
    }),
  $e =
    "",
  Ze =
    "/assets/uniswap.png",
  qk = () => {
    const { classes: C, cx: e } = Xk(),
      { t } = L2();
    return u.jsxs(u.Fragment, {
      children: [
        u.jsxs("section", {
          className: C.root,
          children: [
            u.jsxs("div", {
              className: C.getBobWifHeading,
              children: [
                u.jsxs("div", {
                  className: C.firstText,
                  children: [
                    u.jsx(d1, {
                      text: t("GET"),
                      variant: "h1",
                      className: C.heading,
                    }),
                    u.jsx("img", { src: Mi }),
                  ],
                }),
                u.jsxs("div", {
                  className: C.secondText,
                  children: [
                    u.jsx(d1, {
                      text: "$SAN",
                      variant: "h1",
                      className: C.heading,
                    }),
                    u.jsx("img", { src: Ii, alt: "" }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: C.stepsContainer,
              children: [
                u.jsx("div", {
                  className: C.stepContainer,
                  children: u.jsxs("div", {
                    className: e(C.step, "brownpaw"),
                    onClick: () => window.open("https://www.dextools.io/app/en/ether/pair-explorer/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b", "_blank"),
                    children: [
                      u.jsxs("div", {
                        style: { display: "flex", gap: "1rem" },
                        children: [
                          u.jsx(d1, {
                            text: t("DexTools"),
                            variant: "h2",
                            strokeWidth: 2,
                            strokeShadowY: 5,
                            className: C.text,
                          }),
                          u.jsx(J5, {}),
                        ],
                      }),
                      // u.jsx(x1, { children: t("WATCH_THIS_TUTORIAL") }),
                    ],
                  }),
                }),
                u.jsx("div", {
                  className: C.stepContainer,
                  children: u.jsx("div", {
                    className: e(C.step, "pinkpaw"),
                    onClick: () => window.open("https://dexscreener.com/ethereum/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b", "_blank"),
                    children: u.jsxs("div", {
                      style: { display: "flex", gap: "1rem" },
                      children: [
                        u.jsx(d1, {
                          text: t("DexScreener"),
                          variant: "h2",
                          strokeWidth: 2,
                          strokeShadowY: 5,
                          className: C.text,
                        }),
                        u.jsx("img", { src: $e, alt: "" }),
                        u.jsx(J5, {}),
                      ],
                    }),
                  }),
                }),
                u.jsx("div", {
                  className: C.stepContainer,
                  children: u.jsx("div", {
                    className: e(C.step, "cyanpaw"),
                    onClick: () => window.open(u0, "_blank"),
                    children: u.jsxs("div", {
                      style: { display: "flex", gap: "1rem" },
                      children: [
                        u.jsx(d1, {
                          text: t("BUY_ON_RAYDIUM"),
                          variant: "h2",
                          strokeWidth: 2,
                          strokeShadowY: 5,
                          className: C.text,
                        }),
                        u.jsx("img", {  }),
                        u.jsx(J5, {}),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        u.jsxs("section", {
          className: C.mobileRoot,
          children: [
            u.jsxs("div", {
              style: { display: "flex", gap: "1rem" },
              children: [
                u.jsxs("div", {
                  style: { transform: "rotate(-4.3deg)", marginTop: "-1rem" },
                  children: [
                    u.jsxs("div", {
                      style: { display: "flex", gap: "1rem" },
                      children: [
                        u.jsx(d1, {
                          text: t("GET"),
                          variant: "h3",
                          strokeWidth: 2,
                          strokeShadowY: 4,
                          className: e(C.heading, C.mobileHeading),
                        }),
                        u.jsx("img", {
                          src: Mi,
                          alt: "",
                          style: { width: "20%" },
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      style: { display: "flex" },
                      children: u.jsx(d1, {
                        text: "$SAN",
                        variant: "h3",
                        strokeWidth: 2,
                        strokeShadowY: 4,
                        className: e(C.heading, C.mobileHeading),
                      }),
                    }),
                  ],
                }),
                u.jsx("img", {
                  src: Ii,
                  alt: "",
                  style: { width: "40%", marginTop: "-3rem" },
                }),
              ],
            }),
            u.jsx("div", {
              children: u.jsxs("div", {
                className: C.linksContainer,
                children: [
                  u.jsx("div", {
                    className: C.linkContainer,
                    style: { background: "#F6D396" },
                    onClick: () => window.open("https://www.dextools.io/app/en/ether/pair-explorer/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b", "_blank"),
                    children: u.jsxs("div", {
                      style: { position: "relative" },
                      children: [
                        u.jsx(d1, {
                          text: t("DexTools"),
                          strokeWidth: 1,
                          strokeShadowY: 3,
                          variant: "h2",
                          className: e(C.text, C.outlinetext),
                        }),
                        u.jsx("div", {
                          style: {
                            position: "absolute",
                            right: "-40px",
                            top: 0,
                          },
                          children: u.jsx(J5, {}),
                        }),
                        // u.jsx(x1, { children: t("WATCH_THIS_TUTORIAL") }),
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    className: C.linkContainer,
                    style: { background: "#F95093" },
                    onClick: () => window.open("https://dexscreener.com/ethereum/0x7cba815d7dadd811948c6f9d35df8ff437b3ef1b", "_blank"),
                    children: u.jsxs("div", {
                      style: { position: "relative" },
                      children: [
                        u.jsxs("div", {
                          style: { display: "flex", gap: "1rem" },
                          children: [
                            u.jsx(d1, {
                              text: t("DexScreener"),
                              strokeWidth: 1,
                              strokeShadowY: 3,
                              variant: "h2",
                              className: e(C.text, C.outlinetext),
                            }),
                            u.jsx("img", {
                              src: $e,
                              alt: "",
                              style: { width: "20%" },
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          style: {
                            position: "absolute",
                            right: "-20px",
                            top: 0,
                          },
                          children: u.jsx(J5, {}),
                        }),
                      ],
                    }),
                  }),
                  u.jsx("div", {
                    className: C.linkContainer,
                    style: { background: "#90D0EC" },
                    onClick: () => window.open(u0, "_blank"),
                    children: u.jsxs("div", {
                      style: { position: "relative", width: "100%" },
                      children: [
                        u.jsxs("div", {
                          style: {
                            display: "flex",
                            gap: "0.4rem",
                            alignItems: "center",
                          },
                          children: [
                            u.jsx(d1, {                              
                              text: t("BUY_ON_RAYDIUM"),
                              strokeWidth: 1,
                              strokeShadowY: 2,
                              variant: "h3",
                              className: e(C.text, C.outlinetext),
                            }),
                            u.jsx("img", {
                              src: Ze,
                              alt: "",
                              style: { width: "15%" },
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          style: { position: "absolute", right: "20px", top: 0 },
                          children: u.jsx(J5, {}),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  };
var cc = {},
  dc = {},
  _7 = {},
  fc = {};
(function (C) {
  Object.defineProperty(C, "__esModule", { value: !0 }), (C.default = void 0);
  var e = {
    animating: !1,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: !1,
    edgeDragged: !1,
    initialized: !1,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: !1,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: !1,
    swiping: !1,
    touchObject: { startX: 0, startY: 0, curX: 0, curY: 0 },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0,
  };
  C.default = e;
})(fc);
var Jk = "Expected a function",
  Ri = NaN,
  C_ = "[object Symbol]",
  e_ = /^\s+|\s+$/g,
  t_ = /^[-+]0x[0-9a-f]+$/i,
  n_ = /^0b[01]+$/i,
  r_ = /^0o[0-7]+$/i,
  o_ = parseInt,
  i_ = typeof I0 == "object" && I0 && I0.Object === Object && I0,
  s_ = typeof self == "object" && self && self.Object === Object && self,
  a_ = i_ || s_ || Function("return this")(),
  l_ = Object.prototype,
  u_ = l_.toString,
  c_ = Math.max,
  d_ = Math.min,
  yC = function () {
    return a_.Date.now();
  };
function f_(C, e, t) {
  var n,
    r,
    o,
    i,
    s,
    a,
    l = 0,
    c = !1,
    f = !1,
    d = !0;
  if (typeof C != "function") throw new TypeError(Jk);
  (e = Ni(e) || 0),
    We(t) &&
      ((c = !!t.leading),
      (f = "maxWait" in t),
      (o = f ? c_(Ni(t.maxWait) || 0, e) : o),
      (d = "trailing" in t ? !!t.trailing : d));
  function S(E) {
    var A = n,
      _ = r;
    return (n = r = void 0), (l = E), (i = C.apply(_, A)), i;
  }
  function v(E) {
    return (l = E), (s = setTimeout(h, e)), c ? S(E) : i;
  }
  function g(E) {
    var A = E - a,
      _ = E - l,
      T = e - A;
    return f ? d_(T, o - _) : T;
  }
  function w(E) {
    var A = E - a,
      _ = E - l;
    return a === void 0 || A >= e || A < 0 || (f && _ >= o);
  }
  function h() {
    var E = yC();
    if (w(E)) return p(E);
    s = setTimeout(h, g(E));
  }
  function p(E) {
    return (s = void 0), d && n ? S(E) : ((n = r = void 0), i);
  }
  function m() {
    s !== void 0 && clearTimeout(s), (l = 0), (n = a = r = s = void 0);
  }
  function y() {
    return s === void 0 ? i : p(yC());
  }
  function x() {
    var E = yC(),
      A = w(E);
    if (((n = arguments), (r = this), (a = E), A)) {
      if (s === void 0) return v(a);
      if (f) return (s = setTimeout(h, e)), S(a);
    }
    return s === void 0 && (s = setTimeout(h, e)), i;
  }
  return (x.cancel = m), (x.flush = y), x;
}
function We(C) {
  var e = typeof C;
  return !!C && (e == "object" || e == "function");
}
function p_(C) {
  return !!C && typeof C == "object";
}
function h_(C) {
  return typeof C == "symbol" || (p_(C) && u_.call(C) == C_);
}
function Ni(C) {
  if (typeof C == "number") return C;
  if (h_(C)) return Ri;
  if (We(C)) {
    var e = typeof C.valueOf == "function" ? C.valueOf() : C;
    C = We(e) ? e + "" : e;
  }
  if (typeof C != "string") return C === 0 ? C : +C;
  C = C.replace(e_, "");
  var t = n_.test(C);
  return t || r_.test(C) ? o_(C.slice(2), t ? 2 : 8) : t_.test(C) ? Ri : +C;
}
var m_ = f_,
  pc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (C) {
  (function () {
    var e = {}.hasOwnProperty;
    function t() {
      for (var o = "", i = 0; i < arguments.length; i++) {
        var s = arguments[i];
        s && (o = r(o, n(s)));
      }
      return o;
    }
    function n(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return t.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var i = "";
      for (var s in o) e.call(o, s) && o[s] && (i = r(i, s));
      return i;
    }
    function r(o, i) {
      return i ? (o ? o + " " + i : o + i) : o;
    }
    C.exports ? ((t.default = t), (C.exports = t)) : (window.classNames = t);
  })();
})(pc);
var O7 = pc.exports,
  z = {},
  Un = {};
(function (C) {
  Object.defineProperty(C, "__esModule", { value: !0 }), (C.default = void 0);
  var e = t(L);
  function t(r) {
    return r && r.__esModule ? r : { default: r };
  }
  var n = {
    accessibility: !0,
    adaptiveHeight: !1,
    afterChange: null,
    appendDots: function (o) {
      return e.default.createElement("ul", { style: { display: "block" } }, o);
    },
    arrows: !0,
    autoplay: !1,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: !1,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function (o) {
      return e.default.createElement("button", null, o + 1);
    },
    dots: !1,
    dotsClass: "slick-dots",
    draggable: !0,
    easing: "linear",
    edgeFriction: 0.35,
    fade: !1,
    focusOnSelect: !1,
    infinite: !0,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: !1,
    pauseOnFocus: !1,
    pauseOnHover: !0,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: !1,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: !0,
    swipeEvent: null,
    swipeToSlide: !1,
    touchMove: !0,
    touchThreshold: 5,
    useCSS: !0,
    useTransform: !0,
    variableWidth: !1,
    vertical: !1,
    waitForAnimate: !0,
    asNavFor: null,
  };
  C.default = n;
})(Un);
Object.defineProperty(z, "__esModule", { value: !0 });
z.checkSpecKeys =
  z.checkNavigable =
  z.changeSlide =
  z.canUseDOM =
  z.canGoNext =
    void 0;
z.clamp = mc;
z.extractObject = void 0;
z.filterSettings = O_;
z.validSettings =
  z.swipeStart =
  z.swipeMove =
  z.swipeEnd =
  z.slidesOnRight =
  z.slidesOnLeft =
  z.slideHandler =
  z.siblingDirection =
  z.safePreventDefault =
  z.lazyStartIndex =
  z.lazySlidesOnRight =
  z.lazySlidesOnLeft =
  z.lazyEndIndex =
  z.keyHandler =
  z.initializedState =
  z.getWidth =
  z.getTrackLeft =
  z.getTrackCSS =
  z.getTrackAnimateCSS =
  z.getTotalSlides =
  z.getSwipeDirection =
  z.getSlideCount =
  z.getRequiredLazySlides =
  z.getPreClones =
  z.getPostClones =
  z.getOnDemandLazySlides =
  z.getNavigableIndexes =
  z.getHeight =
    void 0;
var g_ = hc(L),
  v_ = hc(Un);
function hc(C) {
  return C && C.__esModule ? C : { default: C };
}
function p0(C) {
  "@babel/helpers - typeof";
  return (
    (p0 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    p0(C)
  );
}
function Hi(C, e) {
  var t = Object.keys(C);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(C);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(C, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function S1(C) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Hi(Object(t), !0).forEach(function (n) {
          y_(C, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(t))
      : Hi(Object(t)).forEach(function (n) {
          Object.defineProperty(C, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return C;
}
function y_(C, e, t) {
  return (
    (e = S_(e)),
    e in C
      ? Object.defineProperty(C, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (C[e] = t),
    C
  );
}
function S_(C) {
  var e = x_(C, "string");
  return p0(e) == "symbol" ? e : String(e);
}
function x_(C, e) {
  if (p0(C) != "object" || !C) return C;
  var t = C[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(C, e);
    if (p0(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(C);
}
function mc(C, e, t) {
  return Math.max(e, Math.min(C, t));
}
var w8 = (z.safePreventDefault = function (e) {
    var t = ["onTouchStart", "onTouchMove", "onWheel"];
    t.includes(e._reactName) || e.preventDefault();
  }),
  gc = (z.getOnDemandLazySlides = function (e) {
    for (var t = [], n = vc(e), r = yc(e), o = n; o < r; o++)
      e.lazyLoadedList.indexOf(o) < 0 && t.push(o);
    return t;
  });
z.getRequiredLazySlides = function (e) {
  for (var t = [], n = vc(e), r = yc(e), o = n; o < r; o++) t.push(o);
  return t;
};
var vc = (z.lazyStartIndex = function (e) {
    return e.currentSlide - A_(e);
  }),
  yc = (z.lazyEndIndex = function (e) {
    return e.currentSlide + E_(e);
  }),
  A_ = (z.lazySlidesOnLeft = function (e) {
    return e.centerMode
      ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0)
      : 0;
  }),
  E_ = (z.lazySlidesOnRight = function (e) {
    return e.centerMode
      ? Math.floor((e.slidesToShow - 1) / 2) +
          1 +
          (parseInt(e.centerPadding) > 0 ? 1 : 0)
      : e.slidesToShow;
  }),
  Ke = (z.getWidth = function (e) {
    return (e && e.offsetWidth) || 0;
  }),
  Sc = (z.getHeight = function (e) {
    return (e && e.offsetHeight) || 0;
  }),
  xc = (z.getSwipeDirection = function (e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      n,
      r,
      o,
      i;
    return (
      (n = e.startX - e.curX),
      (r = e.startY - e.curY),
      (o = Math.atan2(r, n)),
      (i = Math.round((o * 180) / Math.PI)),
      i < 0 && (i = 360 - Math.abs(i)),
      (i <= 45 && i >= 0) || (i <= 360 && i >= 315)
        ? "left"
        : i >= 135 && i <= 225
        ? "right"
        : t === !0
        ? i >= 35 && i <= 135
          ? "up"
          : "down"
        : "vertical"
    );
  }),
  Ac = (z.canGoNext = function (e) {
    var t = !0;
    return (
      e.infinite ||
        (((e.centerMode && e.currentSlide >= e.slideCount - 1) ||
          e.slideCount <= e.slidesToShow ||
          e.currentSlide >= e.slideCount - e.slidesToShow) &&
          (t = !1)),
      t
    );
  });
z.extractObject = function (e, t) {
  var n = {};
  return (
    t.forEach(function (r) {
      return (n[r] = e[r]);
    }),
    n
  );
};
z.initializedState = function (e) {
  var t = g_.default.Children.count(e.children),
    n = e.listRef,
    r = Math.ceil(Ke(n)),
    o = e.trackRef && e.trackRef.node,
    i = Math.ceil(Ke(o)),
    s;
  if (e.vertical) s = r;
  else {
    var a = e.centerMode && parseInt(e.centerPadding) * 2;
    typeof e.centerPadding == "string" &&
      e.centerPadding.slice(-1) === "%" &&
      (a *= r / 100),
      (s = Math.ceil((r - a) / e.slidesToShow));
  }
  var l = n && Sc(n.querySelector('[data-index="0"]')),
    c = l * e.slidesToShow,
    f = e.currentSlide === void 0 ? e.initialSlide : e.currentSlide;
  e.rtl && e.currentSlide === void 0 && (f = t - 1 - e.initialSlide);
  var d = e.lazyLoadedList || [],
    S = gc(S1(S1({}, e), {}, { currentSlide: f, lazyLoadedList: d }));
  d = d.concat(S);
  var v = {
    slideCount: t,
    slideWidth: s,
    listWidth: r,
    trackWidth: i,
    currentSlide: f,
    slideHeight: l,
    listHeight: c,
    lazyLoadedList: d,
  };
  return e.autoplaying === null && e.autoplay && (v.autoplaying = "playing"), v;
};
z.slideHandler = function (e) {
  var t = e.waitForAnimate,
    n = e.animating,
    r = e.fade,
    o = e.infinite,
    i = e.index,
    s = e.slideCount,
    a = e.lazyLoad,
    l = e.currentSlide,
    c = e.centerMode,
    f = e.slidesToScroll,
    d = e.slidesToShow,
    S = e.useCSS,
    v = e.lazyLoadedList;
  if (t && n) return {};
  var g = i,
    w,
    h,
    p,
    m = {},
    y = {},
    x = o ? i : mc(i, 0, s - 1);
  if (r) {
    if (!o && (i < 0 || i >= s)) return {};
    i < 0 ? (g = i + s) : i >= s && (g = i - s),
      a && v.indexOf(g) < 0 && (v = v.concat(g)),
      (m = {
        animating: !0,
        currentSlide: g,
        lazyLoadedList: v,
        targetSlide: g,
      }),
      (y = { animating: !1, targetSlide: g });
  } else
    (w = g),
      g < 0
        ? ((w = g + s), o ? s % f !== 0 && (w = s - (s % f)) : (w = 0))
        : !Ac(e) && g > l
        ? (g = w = l)
        : c && g >= s
        ? ((g = o ? s : s - 1), (w = o ? 0 : s - 1))
        : g >= s && ((w = g - s), o ? s % f !== 0 && (w = 0) : (w = s - d)),
      !o && g + d >= s && (w = s - d),
      (h = c9(S1(S1({}, e), {}, { slideIndex: g }))),
      (p = c9(S1(S1({}, e), {}, { slideIndex: w }))),
      o || (h === p && (g = w), (h = p)),
      a && (v = v.concat(gc(S1(S1({}, e), {}, { currentSlide: g })))),
      S
        ? ((m = {
            animating: !0,
            currentSlide: w,
            trackStyle: Ec(S1(S1({}, e), {}, { left: h })),
            lazyLoadedList: v,
            targetSlide: x,
          }),
          (y = {
            animating: !1,
            currentSlide: w,
            trackStyle: u9(S1(S1({}, e), {}, { left: p })),
            swipeLeft: null,
            targetSlide: x,
          }))
        : (m = {
            currentSlide: w,
            trackStyle: u9(S1(S1({}, e), {}, { left: p })),
            lazyLoadedList: v,
            targetSlide: x,
          });
  return { state: m, nextState: y };
};
z.changeSlide = function (e, t) {
  var n,
    r,
    o,
    i,
    s,
    a = e.slidesToScroll,
    l = e.slidesToShow,
    c = e.slideCount,
    f = e.currentSlide,
    d = e.targetSlide,
    S = e.lazyLoad,
    v = e.infinite;
  if (((i = c % a !== 0), (n = i ? 0 : (c - f) % a), t.message === "previous"))
    (o = n === 0 ? a : l - n),
      (s = f - o),
      S && !v && ((r = f - o), (s = r === -1 ? c - 1 : r)),
      v || (s = d - a);
  else if (t.message === "next")
    (o = n === 0 ? a : n),
      (s = f + o),
      S && !v && (s = ((f + a) % c) + n),
      v || (s = d + a);
  else if (t.message === "dots") s = t.index * t.slidesToScroll;
  else if (t.message === "children") {
    if (((s = t.index), v)) {
      var g = T_(S1(S1({}, e), {}, { targetSlide: s }));
      s > t.currentSlide && g === "left"
        ? (s = s - c)
        : s < t.currentSlide && g === "right" && (s = s + c);
    }
  } else t.message === "index" && (s = Number(t.index));
  return s;
};
z.keyHandler = function (e, t, n) {
  return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t
    ? ""
    : e.keyCode === 37
    ? n
      ? "next"
      : "previous"
    : e.keyCode === 39
    ? n
      ? "previous"
      : "next"
    : "";
};
z.swipeStart = function (e, t, n) {
  return (
    e.target.tagName === "IMG" && w8(e),
    !t || (!n && e.type.indexOf("mouse") !== -1)
      ? ""
      : {
          dragging: !0,
          touchObject: {
            startX: e.touches ? e.touches[0].pageX : e.clientX,
            startY: e.touches ? e.touches[0].pageY : e.clientY,
            curX: e.touches ? e.touches[0].pageX : e.clientX,
            curY: e.touches ? e.touches[0].pageY : e.clientY,
          },
        }
  );
};
z.swipeMove = function (e, t) {
  var n = t.scrolling,
    r = t.animating,
    o = t.vertical,
    i = t.swipeToSlide,
    s = t.verticalSwiping,
    a = t.rtl,
    l = t.currentSlide,
    c = t.edgeFriction,
    f = t.edgeDragged,
    d = t.onEdge,
    S = t.swiped,
    v = t.swiping,
    g = t.slideCount,
    w = t.slidesToScroll,
    h = t.infinite,
    p = t.touchObject,
    m = t.swipeEvent,
    y = t.listHeight,
    x = t.listWidth;
  if (!n) {
    if (r) return w8(e);
    o && i && s && w8(e);
    var E,
      A = {},
      _ = c9(t);
    (p.curX = e.touches ? e.touches[0].pageX : e.clientX),
      (p.curY = e.touches ? e.touches[0].pageY : e.clientY),
      (p.swipeLength = Math.round(Math.sqrt(Math.pow(p.curX - p.startX, 2))));
    var T = Math.round(Math.sqrt(Math.pow(p.curY - p.startY, 2)));
    if (!s && !v && T > 10) return { scrolling: !0 };
    s && (p.swipeLength = T);
    var b = (a ? -1 : 1) * (p.curX > p.startX ? 1 : -1);
    s && (b = p.curY > p.startY ? 1 : -1);
    var O = Math.ceil(g / w),
      M = xc(t.touchObject, s),
      I = p.swipeLength;
    return (
      h ||
        (((l === 0 && (M === "right" || M === "down")) ||
          (l + 1 >= O && (M === "left" || M === "up")) ||
          (!Ac(t) && (M === "left" || M === "up"))) &&
          ((I = p.swipeLength * c),
          f === !1 && d && (d(M), (A.edgeDragged = !0)))),
      !S && m && (m(M), (A.swiped = !0)),
      o ? (E = _ + I * (y / x) * b) : a ? (E = _ - I * b) : (E = _ + I * b),
      s && (E = _ + I * b),
      (A = S1(
        S1({}, A),
        {},
        {
          touchObject: p,
          swipeLeft: E,
          trackStyle: u9(S1(S1({}, t), {}, { left: E })),
        }
      )),
      Math.abs(p.curX - p.startX) < Math.abs(p.curY - p.startY) * 0.8 ||
        (p.swipeLength > 10 && ((A.swiping = !0), w8(e))),
      A
    );
  }
};
z.swipeEnd = function (e, t) {
  var n = t.dragging,
    r = t.swipe,
    o = t.touchObject,
    i = t.listWidth,
    s = t.touchThreshold,
    a = t.verticalSwiping,
    l = t.listHeight,
    c = t.swipeToSlide,
    f = t.scrolling,
    d = t.onSwipe,
    S = t.targetSlide,
    v = t.currentSlide,
    g = t.infinite;
  if (!n) return r && w8(e), {};
  var w = a ? l / s : i / s,
    h = xc(o, a),
    p = {
      dragging: !1,
      edgeDragged: !1,
      scrolling: !1,
      swiping: !1,
      swiped: !1,
      swipeLeft: null,
      touchObject: {},
    };
  if (f || !o.swipeLength) return p;
  if (o.swipeLength > w) {
    w8(e), d && d(h);
    var m,
      y,
      x = g ? v : S;
    switch (h) {
      case "left":
      case "up":
        (y = x + Di(t)), (m = c ? ji(t, y) : y), (p.currentDirection = 0);
        break;
      case "right":
      case "down":
        (y = x - Di(t)), (m = c ? ji(t, y) : y), (p.currentDirection = 1);
        break;
      default:
        m = x;
    }
    p.triggerSlideHandler = m;
  } else {
    var E = c9(t);
    p.trackStyle = Ec(S1(S1({}, t), {}, { left: E }));
  }
  return p;
};
var w_ = (z.getNavigableIndexes = function (e) {
    for (
      var t = e.infinite ? e.slideCount * 2 : e.slideCount,
        n = e.infinite ? e.slidesToShow * -1 : 0,
        r = e.infinite ? e.slidesToShow * -1 : 0,
        o = [];
      n < t;

    )
      o.push(n),
        (n = r + e.slidesToScroll),
        (r += Math.min(e.slidesToScroll, e.slidesToShow));
    return o;
  }),
  ji = (z.checkNavigable = function (e, t) {
    var n = w_(e),
      r = 0;
    if (t > n[n.length - 1]) t = n[n.length - 1];
    else
      for (var o in n) {
        if (t < n[o]) {
          t = r;
          break;
        }
        r = n[o];
      }
    return t;
  }),
  Di = (z.getSlideCount = function (e) {
    var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
    if (e.swipeToSlide) {
      var n,
        r = e.listRef,
        o = (r.querySelectorAll && r.querySelectorAll(".slick-slide")) || [];
      if (
        (Array.from(o).every(function (a) {
          if (e.vertical) {
            if (a.offsetTop + Sc(a) / 2 > e.swipeLeft * -1) return (n = a), !1;
          } else if (a.offsetLeft - t + Ke(a) / 2 > e.swipeLeft * -1) return (n = a), !1;
          return !0;
        }),
        !n)
      )
        return 0;
      var i = e.rtl === !0 ? e.slideCount - e.currentSlide : e.currentSlide,
        s = Math.abs(n.dataset.index - i) || 1;
      return s;
    } else return e.slidesToScroll;
  }),
  $n = (z.checkSpecKeys = function (e, t) {
    return t.reduce(function (n, r) {
      return n && e.hasOwnProperty(r);
    }, !0)
      ? null
      : console.error("Keys Missing:", e);
  }),
  u9 = (z.getTrackCSS = function (e) {
    $n(e, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
    ]);
    var t,
      n,
      r = e.slideCount + 2 * e.slidesToShow;
    e.vertical ? (n = r * e.slideHeight) : (t = b_(e) * e.slideWidth);
    var o = { opacity: 1, transition: "", WebkitTransition: "" };
    if (e.useTransform) {
      var i = e.vertical
          ? "translate3d(0px, " + e.left + "px, 0px)"
          : "translate3d(" + e.left + "px, 0px, 0px)",
        s = e.vertical
          ? "translate3d(0px, " + e.left + "px, 0px)"
          : "translate3d(" + e.left + "px, 0px, 0px)",
        a = e.vertical
          ? "translateY(" + e.left + "px)"
          : "translateX(" + e.left + "px)";
      o = S1(
        S1({}, o),
        {},
        { WebkitTransform: i, transform: s, msTransform: a }
      );
    } else e.vertical ? (o.top = e.left) : (o.left = e.left);
    return (
      e.fade && (o = { opacity: 1 }),
      t && (o.width = t),
      n && (o.height = n),
      window &&
        !window.addEventListener &&
        window.attachEvent &&
        (e.vertical
          ? (o.marginTop = e.left + "px")
          : (o.marginLeft = e.left + "px")),
      o
    );
  }),
  Ec = (z.getTrackAnimateCSS = function (e) {
    $n(e, [
      "left",
      "variableWidth",
      "slideCount",
      "slidesToShow",
      "slideWidth",
      "speed",
      "cssEase",
    ]);
    var t = u9(e);
    return (
      e.useTransform
        ? ((t.WebkitTransition =
            "-webkit-transform " + e.speed + "ms " + e.cssEase),
          (t.transition = "transform " + e.speed + "ms " + e.cssEase))
        : e.vertical
        ? (t.transition = "top " + e.speed + "ms " + e.cssEase)
        : (t.transition = "left " + e.speed + "ms " + e.cssEase),
      t
    );
  }),
  c9 = (z.getTrackLeft = function (e) {
    if (e.unslick) return 0;
    $n(e, [
      "slideIndex",
      "trackRef",
      "infinite",
      "centerMode",
      "slideCount",
      "slidesToShow",
      "slidesToScroll",
      "slideWidth",
      "listWidth",
      "variableWidth",
      "slideHeight",
    ]);
    var t = e.slideIndex,
      n = e.trackRef,
      r = e.infinite,
      o = e.centerMode,
      i = e.slideCount,
      s = e.slidesToShow,
      a = e.slidesToScroll,
      l = e.slideWidth,
      c = e.listWidth,
      f = e.variableWidth,
      d = e.slideHeight,
      S = e.fade,
      v = e.vertical,
      g = 0,
      w,
      h,
      p = 0;
    if (S || e.slideCount === 1) return 0;
    var m = 0;
    if (
      (r
        ? ((m = -k6(e)),
          i % a !== 0 && t + a > i && (m = -(t > i ? s - (t - i) : i % a)),
          o && (m += parseInt(s / 2)))
        : (i % a !== 0 && t + a > i && (m = s - (i % a)),
          o && (m = parseInt(s / 2))),
      (g = m * l),
      (p = m * d),
      v ? (w = t * d * -1 + p) : (w = t * l * -1 + g),
      f === !0)
    ) {
      var y,
        x = n && n.node;
      if (
        ((y = t + k6(e)),
        (h = x && x.childNodes[y]),
        (w = h ? h.offsetLeft * -1 : 0),
        o === !0)
      ) {
        (y = r ? t + k6(e) : t), (h = x && x.children[y]), (w = 0);
        for (var E = 0; E < y; E++)
          w -= x && x.children[E] && x.children[E].offsetWidth;
        (w -= parseInt(e.centerPadding)), (w += h && (c - h.offsetWidth) / 2);
      }
    }
    return w;
  }),
  k6 = (z.getPreClones = function (e) {
    return e.unslick || !e.infinite
      ? 0
      : e.variableWidth
      ? e.slideCount
      : e.slidesToShow + (e.centerMode ? 1 : 0);
  }),
  L_ = (z.getPostClones = function (e) {
    return e.unslick || !e.infinite ? 0 : e.slideCount;
  }),
  b_ = (z.getTotalSlides = function (e) {
    return e.slideCount === 1 ? 1 : k6(e) + e.slideCount + L_(e);
  }),
  T_ = (z.siblingDirection = function (e) {
    return e.targetSlide > e.currentSlide
      ? e.targetSlide > e.currentSlide + P_(e)
        ? "left"
        : "right"
      : e.targetSlide < e.currentSlide - k_(e)
      ? "right"
      : "left";
  }),
  P_ = (z.slidesOnRight = function (e) {
    var t = e.slidesToShow,
      n = e.centerMode,
      r = e.rtl,
      o = e.centerPadding;
    if (n) {
      var i = (t - 1) / 2 + 1;
      return parseInt(o) > 0 && (i += 1), r && t % 2 === 0 && (i += 1), i;
    }
    return r ? 0 : t - 1;
  }),
  k_ = (z.slidesOnLeft = function (e) {
    var t = e.slidesToShow,
      n = e.centerMode,
      r = e.rtl,
      o = e.centerPadding;
    if (n) {
      var i = (t - 1) / 2 + 1;
      return parseInt(o) > 0 && (i += 1), !r && t % 2 === 0 && (i += 1), i;
    }
    return r ? t - 1 : 0;
  });
z.canUseDOM = function () {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
};
var __ = (z.validSettings = Object.keys(v_.default));
function O_(C) {
  return __.reduce(function (e, t) {
    return C.hasOwnProperty(t) && (e[t] = C[t]), e;
  }, {});
}
var M7 = {};
Object.defineProperty(M7, "__esModule", { value: !0 });
M7.Track = void 0;
var K2 = wc(L),
  SC = wc(O7),
  xC = z;
function wc(C) {
  return C && C.__esModule ? C : { default: C };
}
function U8(C) {
  "@babel/helpers - typeof";
  return (
    (U8 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    U8(C)
  );
}
function Ge() {
  return (
    (Ge = Object.assign
      ? Object.assign.bind()
      : function (C) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n]);
          }
          return C;
        }),
    Ge.apply(this, arguments)
  );
}
function M_(C, e) {
  if (!(C instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function I_(C, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(C, bc(n.key), n);
  }
}
function R_(C, e, t) {
  return (
    e && I_(C.prototype, e),
    Object.defineProperty(C, "prototype", { writable: !1 }),
    C
  );
}
function N_(C, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (C.prototype = Object.create(e && e.prototype, {
    constructor: { value: C, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(C, "prototype", { writable: !1 }),
    e && Qe(C, e);
}
function Qe(C, e) {
  return (
    (Qe = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Qe(C, e)
  );
}
function H_(C) {
  var e = Lc();
  return function () {
    var n = d9(C),
      r;
    if (e) {
      var o = d9(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return j_(this, r);
  };
}
function j_(C, e) {
  if (e && (U8(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return Ye(C);
}
function Ye(C) {
  if (C === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return C;
}
function Lc() {
  try {
    var C = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Lc = function () {
    return !!C;
  })();
}
function d9(C) {
  return (
    (d9 = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    d9(C)
  );
}
function Bi(C, e) {
  var t = Object.keys(C);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(C);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(C, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function o3(C) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Bi(Object(t), !0).forEach(function (n) {
          Xe(C, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(t))
      : Bi(Object(t)).forEach(function (n) {
          Object.defineProperty(C, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return C;
}
function Xe(C, e, t) {
  return (
    (e = bc(e)),
    e in C
      ? Object.defineProperty(C, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (C[e] = t),
    C
  );
}
function bc(C) {
  var e = D_(C, "string");
  return U8(e) == "symbol" ? e : String(e);
}
function D_(C, e) {
  if (U8(C) != "object" || !C) return C;
  var t = C[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(C, e);
    if (U8(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(C);
}
var AC = function (e) {
    var t, n, r, o, i;
    e.rtl ? (i = e.slideCount - 1 - e.index) : (i = e.index),
      (r = i < 0 || i >= e.slideCount),
      e.centerMode
        ? ((o = Math.floor(e.slidesToShow / 2)),
          (n = (i - e.currentSlide) % e.slideCount === 0),
          i > e.currentSlide - o - 1 && i <= e.currentSlide + o && (t = !0))
        : (t = e.currentSlide <= i && i < e.currentSlide + e.slidesToShow);
    var s;
    e.targetSlide < 0
      ? (s = e.targetSlide + e.slideCount)
      : e.targetSlide >= e.slideCount
      ? (s = e.targetSlide - e.slideCount)
      : (s = e.targetSlide);
    var a = i === s;
    return {
      "slick-slide": !0,
      "slick-active": t,
      "slick-center": n,
      "slick-cloned": r,
      "slick-current": a,
    };
  },
  B_ = function (e) {
    var t = {};
    return (
      (e.variableWidth === void 0 || e.variableWidth === !1) &&
        (t.width = e.slideWidth),
      e.fade &&
        ((t.position = "relative"),
        e.vertical
          ? (t.top = -e.index * parseInt(e.slideHeight))
          : (t.left = -e.index * parseInt(e.slideWidth)),
        (t.opacity = e.currentSlide === e.index ? 1 : 0),
        (t.zIndex = e.currentSlide === e.index ? 999 : 998),
        e.useCSS &&
          (t.transition =
            "opacity " +
            e.speed +
            "ms " +
            e.cssEase +
            ", visibility " +
            e.speed +
            "ms " +
            e.cssEase)),
      t
    );
  },
  EC = function (e, t) {
    return e.key || t;
  },
  z_ = function (e) {
    var t,
      n = [],
      r = [],
      o = [],
      i = K2.default.Children.count(e.children),
      s = (0, xC.lazyStartIndex)(e),
      a = (0, xC.lazyEndIndex)(e);
    return (
      K2.default.Children.forEach(e.children, function (l, c) {
        var f,
          d = {
            message: "children",
            index: c,
            slidesToScroll: e.slidesToScroll,
            currentSlide: e.currentSlide,
          };
        !e.lazyLoad || (e.lazyLoad && e.lazyLoadedList.indexOf(c) >= 0)
          ? (f = l)
          : (f = K2.default.createElement("div", null));
        var S = B_(o3(o3({}, e), {}, { index: c })),
          v = f.props.className || "",
          g = AC(o3(o3({}, e), {}, { index: c }));
        if (
          (n.push(
            K2.default.cloneElement(f, {
              key: "original" + EC(f, c),
              "data-index": c,
              className: (0, SC.default)(g, v),
              tabIndex: "-1",
              "aria-hidden": !g["slick-active"],
              style: o3(o3({ outline: "none" }, f.props.style || {}), S),
              onClick: function (p) {
                f.props && f.props.onClick && f.props.onClick(p),
                  e.focusOnSelect && e.focusOnSelect(d);
              },
            })
          ),
          e.infinite && e.fade === !1)
        ) {
          var w = i - c;
          w <= (0, xC.getPreClones)(e) &&
            ((t = -w),
            t >= s && (f = l),
            (g = AC(o3(o3({}, e), {}, { index: t }))),
            r.push(
              K2.default.cloneElement(f, {
                key: "precloned" + EC(f, t),
                "data-index": t,
                tabIndex: "-1",
                className: (0, SC.default)(g, v),
                "aria-hidden": !g["slick-active"],
                style: o3(o3({}, f.props.style || {}), S),
                onClick: function (p) {
                  f.props && f.props.onClick && f.props.onClick(p),
                    e.focusOnSelect && e.focusOnSelect(d);
                },
              })
            )),
            (t = i + c),
            t < a && (f = l),
            (g = AC(o3(o3({}, e), {}, { index: t }))),
            o.push(
              K2.default.cloneElement(f, {
                key: "postcloned" + EC(f, t),
                "data-index": t,
                tabIndex: "-1",
                className: (0, SC.default)(g, v),
                "aria-hidden": !g["slick-active"],
                style: o3(o3({}, f.props.style || {}), S),
                onClick: function (p) {
                  f.props && f.props.onClick && f.props.onClick(p),
                    e.focusOnSelect && e.focusOnSelect(d);
                },
              })
            );
        }
      }),
      e.rtl ? r.concat(n, o).reverse() : r.concat(n, o)
    );
  };
M7.Track = (function (C) {
  N_(t, C);
  var e = H_(t);
  function t() {
    var n;
    M_(this, t);
    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
      o[i] = arguments[i];
    return (
      (n = e.call.apply(e, [this].concat(o))),
      Xe(Ye(n), "node", null),
      Xe(Ye(n), "handleRef", function (s) {
        n.node = s;
      }),
      n
    );
  }
  return (
    R_(t, [
      {
        key: "render",
        value: function () {
          var r = z_(this.props),
            o = this.props,
            i = o.onMouseEnter,
            s = o.onMouseOver,
            a = o.onMouseLeave,
            l = { onMouseEnter: i, onMouseOver: s, onMouseLeave: a };
          return K2.default.createElement(
            "div",
            Ge(
              {
                ref: this.handleRef,
                className: "slick-track",
                style: this.props.trackStyle,
              },
              l
            ),
            r
          );
        },
      },
    ]),
    t
  );
})(K2.default.PureComponent);
var I7 = {};
function $8(C) {
  "@babel/helpers - typeof";
  return (
    ($8 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    $8(C)
  );
}
Object.defineProperty(I7, "__esModule", { value: !0 });
I7.Dots = void 0;
var a6 = Tc(L),
  F_ = Tc(O7),
  zi = z;
function Tc(C) {
  return C && C.__esModule ? C : { default: C };
}
function Fi(C, e) {
  var t = Object.keys(C);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(C);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(C, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function V_(C) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Fi(Object(t), !0).forEach(function (n) {
          U_(C, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(t))
      : Fi(Object(t)).forEach(function (n) {
          Object.defineProperty(C, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return C;
}
function U_(C, e, t) {
  return (
    (e = Pc(e)),
    e in C
      ? Object.defineProperty(C, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (C[e] = t),
    C
  );
}
function $_(C, e) {
  if (!(C instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Z_(C, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(C, Pc(n.key), n);
  }
}
function W_(C, e, t) {
  return (
    e && Z_(C.prototype, e),
    Object.defineProperty(C, "prototype", { writable: !1 }),
    C
  );
}
function Pc(C) {
  var e = K_(C, "string");
  return $8(e) == "symbol" ? e : String(e);
}
function K_(C, e) {
  if ($8(C) != "object" || !C) return C;
  var t = C[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(C, e);
    if ($8(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(C);
}
function G_(C, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (C.prototype = Object.create(e && e.prototype, {
    constructor: { value: C, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(C, "prototype", { writable: !1 }),
    e && qe(C, e);
}
function qe(C, e) {
  return (
    (qe = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    qe(C, e)
  );
}
function Q_(C) {
  var e = kc();
  return function () {
    var n = f9(C),
      r;
    if (e) {
      var o = f9(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return Y_(this, r);
  };
}
function Y_(C, e) {
  if (e && ($8(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return X_(C);
}
function X_(C) {
  if (C === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return C;
}
function kc() {
  try {
    var C = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (kc = function () {
    return !!C;
  })();
}
function f9(C) {
  return (
    (f9 = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    f9(C)
  );
}
var q_ = function (e) {
  var t;
  return (
    e.infinite
      ? (t = Math.ceil(e.slideCount / e.slidesToScroll))
      : (t = Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1),
    t
  );
};
I7.Dots = (function (C) {
  G_(t, C);
  var e = Q_(t);
  function t() {
    return $_(this, t), e.apply(this, arguments);
  }
  return (
    W_(t, [
      {
        key: "clickHandler",
        value: function (r, o) {
          o.preventDefault(), this.props.clickHandler(r);
        },
      },
      {
        key: "render",
        value: function () {
          for (
            var r = this.props,
              o = r.onMouseEnter,
              i = r.onMouseOver,
              s = r.onMouseLeave,
              a = r.infinite,
              l = r.slidesToScroll,
              c = r.slidesToShow,
              f = r.slideCount,
              d = r.currentSlide,
              S = q_({
                slideCount: f,
                slidesToScroll: l,
                slidesToShow: c,
                infinite: a,
              }),
              v = { onMouseEnter: o, onMouseOver: i, onMouseLeave: s },
              g = [],
              w = 0;
            w < S;
            w++
          ) {
            var h = (w + 1) * l - 1,
              p = a ? h : (0, zi.clamp)(h, 0, f - 1),
              m = p - (l - 1),
              y = a ? m : (0, zi.clamp)(m, 0, f - 1),
              x = (0, F_.default)({
                "slick-active": a ? d >= y && d <= p : d === y,
              }),
              E = {
                message: "dots",
                index: w,
                slidesToScroll: l,
                currentSlide: d,
              },
              A = this.clickHandler.bind(this, E);
            g = g.concat(
              a6.default.createElement(
                "li",
                { key: w, className: x },
                a6.default.cloneElement(this.props.customPaging(w), {
                  onClick: A,
                })
              )
            );
          }
          return a6.default.cloneElement(
            this.props.appendDots(g),
            V_({ className: this.props.dotsClass }, v)
          );
        },
      },
    ]),
    t
  );
})(a6.default.PureComponent);
var Z8 = {};
function W8(C) {
  "@babel/helpers - typeof";
  return (
    (W8 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    W8(C)
  );
}
Object.defineProperty(Z8, "__esModule", { value: !0 });
Z8.PrevArrow = Z8.NextArrow = void 0;
var L8 = Oc(L),
  _c = Oc(O7),
  J_ = z;
function Oc(C) {
  return C && C.__esModule ? C : { default: C };
}
function p9() {
  return (
    (p9 = Object.assign
      ? Object.assign.bind()
      : function (C) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n]);
          }
          return C;
        }),
    p9.apply(this, arguments)
  );
}
function Vi(C, e) {
  var t = Object.keys(C);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(C);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(C, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function h9(C) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Vi(Object(t), !0).forEach(function (n) {
          CO(C, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(t))
      : Vi(Object(t)).forEach(function (n) {
          Object.defineProperty(C, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return C;
}
function CO(C, e, t) {
  return (
    (e = Rc(e)),
    e in C
      ? Object.defineProperty(C, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (C[e] = t),
    C
  );
}
function Mc(C, e) {
  if (!(C instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function eO(C, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(C, Rc(n.key), n);
  }
}
function Ic(C, e, t) {
  return (
    e && eO(C.prototype, e),
    Object.defineProperty(C, "prototype", { writable: !1 }),
    C
  );
}
function Rc(C) {
  var e = tO(C, "string");
  return W8(e) == "symbol" ? e : String(e);
}
function tO(C, e) {
  if (W8(C) != "object" || !C) return C;
  var t = C[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(C, e);
    if (W8(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(C);
}
function Nc(C, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (C.prototype = Object.create(e && e.prototype, {
    constructor: { value: C, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(C, "prototype", { writable: !1 }),
    e && Je(C, e);
}
function Je(C, e) {
  return (
    (Je = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Je(C, e)
  );
}
function Hc(C) {
  var e = jc();
  return function () {
    var n = m9(C),
      r;
    if (e) {
      var o = m9(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return nO(this, r);
  };
}
function nO(C, e) {
  if (e && (W8(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return rO(C);
}
function rO(C) {
  if (C === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return C;
}
function jc() {
  try {
    var C = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (jc = function () {
    return !!C;
  })();
}
function m9(C) {
  return (
    (m9 = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    m9(C)
  );
}
Z8.PrevArrow = (function (C) {
  Nc(t, C);
  var e = Hc(t);
  function t() {
    return Mc(this, t), e.apply(this, arguments);
  }
  return (
    Ic(t, [
      {
        key: "clickHandler",
        value: function (r, o) {
          o && o.preventDefault(), this.props.clickHandler(r, o);
        },
      },
      {
        key: "render",
        value: function () {
          var r = { "slick-arrow": !0, "slick-prev": !0 },
            o = this.clickHandler.bind(this, { message: "previous" });
          !this.props.infinite &&
            (this.props.currentSlide === 0 ||
              this.props.slideCount <= this.props.slidesToShow) &&
            ((r["slick-disabled"] = !0), (o = null));
          var i = {
              key: "0",
              "data-role": "none",
              className: (0, _c.default)(r),
              style: { display: "block" },
              onClick: o,
            },
            s = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            a;
          return (
            this.props.prevArrow
              ? (a = L8.default.cloneElement(
                  this.props.prevArrow,
                  h9(h9({}, i), s)
                ))
              : (a = L8.default.createElement(
                  "button",
                  p9({ key: "0", type: "button" }, i),
                  " ",
                  "Previous"
                )),
            a
          );
        },
      },
    ]),
    t
  );
})(L8.default.PureComponent);
Z8.NextArrow = (function (C) {
  Nc(t, C);
  var e = Hc(t);
  function t() {
    return Mc(this, t), e.apply(this, arguments);
  }
  return (
    Ic(t, [
      {
        key: "clickHandler",
        value: function (r, o) {
          o && o.preventDefault(), this.props.clickHandler(r, o);
        },
      },
      {
        key: "render",
        value: function () {
          var r = { "slick-arrow": !0, "slick-next": !0 },
            o = this.clickHandler.bind(this, { message: "next" });
          (0, J_.canGoNext)(this.props) ||
            ((r["slick-disabled"] = !0), (o = null));
          var i = {
              key: "1",
              "data-role": "none",
              className: (0, _c.default)(r),
              style: { display: "block" },
              onClick: o,
            },
            s = {
              currentSlide: this.props.currentSlide,
              slideCount: this.props.slideCount,
            },
            a;
          return (
            this.props.nextArrow
              ? (a = L8.default.cloneElement(
                  this.props.nextArrow,
                  h9(h9({}, i), s)
                ))
              : (a = L8.default.createElement(
                  "button",
                  p9({ key: "1", type: "button" }, i),
                  " ",
                  "Next"
                )),
            a
          );
        },
      },
    ]),
    t
  );
})(L8.default.PureComponent);
var Dc = (function () {
    if (typeof Map < "u") return Map;
    function C(e, t) {
      var n = -1;
      return (
        e.some(function (r, o) {
          return r[0] === t ? ((n = o), !0) : !1;
        }),
        n
      );
    }
    return (function () {
      function e() {
        this.__entries__ = [];
      }
      return (
        Object.defineProperty(e.prototype, "size", {
          get: function () {
            return this.__entries__.length;
          },
          enumerable: !0,
          configurable: !0,
        }),
        (e.prototype.get = function (t) {
          var n = C(this.__entries__, t),
            r = this.__entries__[n];
          return r && r[1];
        }),
        (e.prototype.set = function (t, n) {
          var r = C(this.__entries__, t);
          ~r ? (this.__entries__[r][1] = n) : this.__entries__.push([t, n]);
        }),
        (e.prototype.delete = function (t) {
          var n = this.__entries__,
            r = C(n, t);
          ~r && n.splice(r, 1);
        }),
        (e.prototype.has = function (t) {
          return !!~C(this.__entries__, t);
        }),
        (e.prototype.clear = function () {
          this.__entries__.splice(0);
        }),
        (e.prototype.forEach = function (t, n) {
          n === void 0 && (n = null);
          for (var r = 0, o = this.__entries__; r < o.length; r++) {
            var i = o[r];
            t.call(n, i[1], i[0]);
          }
        }),
        e
      );
    })();
  })(),
  Ct =
    typeof window < "u" &&
    typeof document < "u" &&
    window.document === document,
  g9 = (function () {
    return typeof global < "u" && global.Math === Math
      ? global
      : typeof self < "u" && self.Math === Math
      ? self
      : typeof window < "u" && window.Math === Math
      ? window
      : Function("return this")();
  })(),
  oO = (function () {
    return typeof requestAnimationFrame == "function"
      ? requestAnimationFrame.bind(g9)
      : function (C) {
          return setTimeout(function () {
            return C(Date.now());
          }, 1e3 / 60);
        };
  })(),
  iO = 2;
function sO(C, e) {
  var t = !1,
    n = !1,
    r = 0;
  function o() {
    t && ((t = !1), C()), n && s();
  }
  function i() {
    oO(o);
  }
  function s() {
    var a = Date.now();
    if (t) {
      if (a - r < iO) return;
      n = !0;
    } else (t = !0), (n = !1), setTimeout(i, e);
    r = a;
  }
  return s;
}
var aO = 20,
  lO = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
  uO = typeof MutationObserver < "u",
  cO = (function () {
    function C() {
      (this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = sO(this.refresh.bind(this), aO));
    }
    return (
      (C.prototype.addObserver = function (e) {
        ~this.observers_.indexOf(e) || this.observers_.push(e),
          this.connected_ || this.connect_();
      }),
      (C.prototype.removeObserver = function (e) {
        var t = this.observers_,
          n = t.indexOf(e);
        ~n && t.splice(n, 1),
          !t.length && this.connected_ && this.disconnect_();
      }),
      (C.prototype.refresh = function () {
        var e = this.updateObservers_();
        e && this.refresh();
      }),
      (C.prototype.updateObservers_ = function () {
        var e = this.observers_.filter(function (t) {
          return t.gatherActive(), t.hasActive();
        });
        return (
          e.forEach(function (t) {
            return t.broadcastActive();
          }),
          e.length > 0
        );
      }),
      (C.prototype.connect_ = function () {
        !Ct ||
          this.connected_ ||
          (document.addEventListener("transitionend", this.onTransitionEnd_),
          window.addEventListener("resize", this.refresh),
          uO
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener("DOMSubtreeModified", this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0));
      }),
      (C.prototype.disconnect_ = function () {
        !Ct ||
          !this.connected_ ||
          (document.removeEventListener("transitionend", this.onTransitionEnd_),
          window.removeEventListener("resize", this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener("DOMSubtreeModified", this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1));
      }),
      (C.prototype.onTransitionEnd_ = function (e) {
        var t = e.propertyName,
          n = t === void 0 ? "" : t,
          r = lO.some(function (o) {
            return !!~n.indexOf(o);
          });
        r && this.refresh();
      }),
      (C.getInstance = function () {
        return this.instance_ || (this.instance_ = new C()), this.instance_;
      }),
      (C.instance_ = null),
      C
    );
  })(),
  Bc = function (C, e) {
    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
      var r = n[t];
      Object.defineProperty(C, r, {
        value: e[r],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      });
    }
    return C;
  },
  K8 = function (C) {
    var e = C && C.ownerDocument && C.ownerDocument.defaultView;
    return e || g9;
  },
  zc = R7(0, 0, 0, 0);
function v9(C) {
  return parseFloat(C) || 0;
}
function Ui(C) {
  for (var e = [], t = 1; t < arguments.length; t++) e[t - 1] = arguments[t];
  return e.reduce(function (n, r) {
    var o = C["border-" + r + "-width"];
    return n + v9(o);
  }, 0);
}
function dO(C) {
  for (
    var e = ["top", "right", "bottom", "left"], t = {}, n = 0, r = e;
    n < r.length;
    n++
  ) {
    var o = r[n],
      i = C["padding-" + o];
    t[o] = v9(i);
  }
  return t;
}
function fO(C) {
  var e = C.getBBox();
  return R7(0, 0, e.width, e.height);
}
function pO(C) {
  var e = C.clientWidth,
    t = C.clientHeight;
  if (!e && !t) return zc;
  var n = K8(C).getComputedStyle(C),
    r = dO(n),
    o = r.left + r.right,
    i = r.top + r.bottom,
    s = v9(n.width),
    a = v9(n.height);
  if (
    (n.boxSizing === "border-box" &&
      (Math.round(s + o) !== e && (s -= Ui(n, "left", "right") + o),
      Math.round(a + i) !== t && (a -= Ui(n, "top", "bottom") + i)),
    !mO(C))
  ) {
    var l = Math.round(s + o) - e,
      c = Math.round(a + i) - t;
    Math.abs(l) !== 1 && (s -= l), Math.abs(c) !== 1 && (a -= c);
  }
  return R7(r.left, r.top, s, a);
}
var hO = (function () {
  return typeof SVGGraphicsElement < "u"
    ? function (C) {
        return C instanceof K8(C).SVGGraphicsElement;
      }
    : function (C) {
        return C instanceof K8(C).SVGElement && typeof C.getBBox == "function";
      };
})();
function mO(C) {
  return C === K8(C).document.documentElement;
}
function gO(C) {
  return Ct ? (hO(C) ? fO(C) : pO(C)) : zc;
}
function vO(C) {
  var e = C.x,
    t = C.y,
    n = C.width,
    r = C.height,
    o = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
    i = Object.create(o.prototype);
  return (
    Bc(i, {
      x: e,
      y: t,
      width: n,
      height: r,
      top: t,
      right: e + n,
      bottom: r + t,
      left: e,
    }),
    i
  );
}
function R7(C, e, t, n) {
  return { x: C, y: e, width: t, height: n };
}
var yO = (function () {
    function C(e) {
      (this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = R7(0, 0, 0, 0)),
        (this.target = e);
    }
    return (
      (C.prototype.isActive = function () {
        var e = gO(this.target);
        return (
          (this.contentRect_ = e),
          e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        );
      }),
      (C.prototype.broadcastRect = function () {
        var e = this.contentRect_;
        return (
          (this.broadcastWidth = e.width), (this.broadcastHeight = e.height), e
        );
      }),
      C
    );
  })(),
  SO = (function () {
    function C(e, t) {
      var n = vO(t);
      Bc(this, { target: e, contentRect: n });
    }
    return C;
  })(),
  xO = (function () {
    function C(e, t, n) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new Dc()),
        typeof e != "function")
      )
        throw new TypeError(
          "The callback provided as parameter 1 is not a function."
        );
      (this.callback_ = e), (this.controller_ = t), (this.callbackCtx_ = n);
    }
    return (
      (C.prototype.observe = function (e) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(e instanceof K8(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) ||
            (t.set(e, new yO(e)),
            this.controller_.addObserver(this),
            this.controller_.refresh());
        }
      }),
      (C.prototype.unobserve = function (e) {
        if (!arguments.length)
          throw new TypeError("1 argument required, but only 0 present.");
        if (!(typeof Element > "u" || !(Element instanceof Object))) {
          if (!(e instanceof K8(e).Element))
            throw new TypeError('parameter 1 is not of type "Element".');
          var t = this.observations_;
          t.has(e) &&
            (t.delete(e), t.size || this.controller_.removeObserver(this));
        }
      }),
      (C.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this);
      }),
      (C.prototype.gatherActive = function () {
        var e = this;
        this.clearActive(),
          this.observations_.forEach(function (t) {
            t.isActive() && e.activeObservations_.push(t);
          });
      }),
      (C.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var e = this.callbackCtx_,
            t = this.activeObservations_.map(function (n) {
              return new SO(n.target, n.broadcastRect());
            });
          this.callback_.call(e, t, e), this.clearActive();
        }
      }),
      (C.prototype.clearActive = function () {
        this.activeObservations_.splice(0);
      }),
      (C.prototype.hasActive = function () {
        return this.activeObservations_.length > 0;
      }),
      C
    );
  })(),
  Fc = typeof WeakMap < "u" ? new WeakMap() : new Dc(),
  Vc = (function () {
    function C(e) {
      if (!(this instanceof C))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var t = cO.getInstance(),
        n = new xO(e, t, this);
      Fc.set(this, n);
    }
    return C;
  })();
["observe", "unobserve", "disconnect"].forEach(function (C) {
  Vc.prototype[C] = function () {
    var e;
    return (e = Fc.get(this))[C].apply(e, arguments);
  };
});
var AO = (function () {
  return typeof g9.ResizeObserver < "u" ? g9.ResizeObserver : Vc;
})();
const EO = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: AO },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  wO = w2(EO);
Object.defineProperty(_7, "__esModule", { value: !0 });
_7.InnerSlider = void 0;
var J1 = _0(L),
  LO = _0(fc),
  bO = _0(m_),
  TO = _0(O7),
  E1 = z,
  PO = M7,
  kO = I7,
  $i = Z8,
  _O = _0(wO);
function _0(C) {
  return C && C.__esModule ? C : { default: C };
}
function D5(C) {
  "@babel/helpers - typeof";
  return (
    (D5 =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    D5(C)
  );
}
function y9() {
  return (
    (y9 = Object.assign
      ? Object.assign.bind()
      : function (C) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (C[n] = t[n]);
          }
          return C;
        }),
    y9.apply(this, arguments)
  );
}
function OO(C, e) {
  if (C == null) return {};
  var t = MO(C, e),
    n,
    r;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(C);
    for (r = 0; r < o.length; r++)
      (n = o[r]),
        !(e.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(C, n) &&
          (t[n] = C[n]);
  }
  return t;
}
function MO(C, e) {
  if (C == null) return {};
  var t = {},
    n = Object.keys(C),
    r,
    o;
  for (o = 0; o < n.length; o++)
    (r = n[o]), !(e.indexOf(r) >= 0) && (t[r] = C[r]);
  return t;
}
function Zi(C, e) {
  var t = Object.keys(C);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(C);
    e &&
      (n = n.filter(function (r) {
        return Object.getOwnPropertyDescriptor(C, r).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function $(C) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2
      ? Zi(Object(t), !0).forEach(function (n) {
          G(C, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(C, Object.getOwnPropertyDescriptors(t))
      : Zi(Object(t)).forEach(function (n) {
          Object.defineProperty(C, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return C;
}
function IO(C, e) {
  if (!(C instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function RO(C, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(C, $c(n.key), n);
  }
}
function NO(C, e, t) {
  return (
    e && RO(C.prototype, e),
    Object.defineProperty(C, "prototype", { writable: !1 }),
    C
  );
}
function HO(C, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (C.prototype = Object.create(e && e.prototype, {
    constructor: { value: C, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(C, "prototype", { writable: !1 }),
    e && et(C, e);
}
function et(C, e) {
  return (
    (et = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    et(C, e)
  );
}
function jO(C) {
  var e = Uc();
  return function () {
    var n = S9(C),
      r;
    if (e) {
      var o = S9(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return DO(this, r);
  };
}
function DO(C, e) {
  if (e && (D5(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return K(C);
}
function K(C) {
  if (C === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return C;
}
function Uc() {
  try {
    var C = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (Uc = function () {
    return !!C;
  })();
}
function S9(C) {
  return (
    (S9 = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    S9(C)
  );
}
function G(C, e, t) {
  return (
    (e = $c(e)),
    e in C
      ? Object.defineProperty(C, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (C[e] = t),
    C
  );
}
function $c(C) {
  var e = BO(C, "string");
  return D5(e) == "symbol" ? e : String(e);
}
function BO(C, e) {
  if (D5(C) != "object" || !C) return C;
  var t = C[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(C, e);
    if (D5(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(C);
}
_7.InnerSlider = (function (C) {
  HO(t, C);
  var e = jO(t);
  function t(n) {
    var r;
    IO(this, t),
      (r = e.call(this, n)),
      G(K(r), "listRefHandler", function (i) {
        return (r.list = i);
      }),
      G(K(r), "trackRefHandler", function (i) {
        return (r.track = i);
      }),
      G(K(r), "adaptHeight", function () {
        if (r.props.adaptiveHeight && r.list) {
          var i = r.list.querySelector(
            '[data-index="'.concat(r.state.currentSlide, '"]')
          );
          r.list.style.height = (0, E1.getHeight)(i) + "px";
        }
      }),
      G(K(r), "componentDidMount", function () {
        if ((r.props.onInit && r.props.onInit(), r.props.lazyLoad)) {
          var i = (0, E1.getOnDemandLazySlides)($($({}, r.props), r.state));
          i.length > 0 &&
            (r.setState(function (a) {
              return { lazyLoadedList: a.lazyLoadedList.concat(i) };
            }),
            r.props.onLazyLoad && r.props.onLazyLoad(i));
        }
        var s = $({ listRef: r.list, trackRef: r.track }, r.props);
        r.updateState(s, !0, function () {
          r.adaptHeight(), r.props.autoplay && r.autoPlay("update");
        }),
          r.props.lazyLoad === "progressive" &&
            (r.lazyLoadTimer = setInterval(r.progressiveLazyLoad, 1e3)),
          (r.ro = new _O.default(function () {
            r.state.animating
              ? (r.onWindowResized(!1),
                r.callbackTimers.push(
                  setTimeout(function () {
                    return r.onWindowResized();
                  }, r.props.speed)
                ))
              : r.onWindowResized();
          })),
          r.ro.observe(r.list),
          document.querySelectorAll &&
            Array.prototype.forEach.call(
              document.querySelectorAll(".slick-slide"),
              function (a) {
                (a.onfocus = r.props.pauseOnFocus ? r.onSlideFocus : null),
                  (a.onblur = r.props.pauseOnFocus ? r.onSlideBlur : null);
              }
            ),
          window.addEventListener
            ? window.addEventListener("resize", r.onWindowResized)
            : window.attachEvent("onresize", r.onWindowResized);
      }),
      G(K(r), "componentWillUnmount", function () {
        r.animationEndCallback && clearTimeout(r.animationEndCallback),
          r.lazyLoadTimer && clearInterval(r.lazyLoadTimer),
          r.callbackTimers.length &&
            (r.callbackTimers.forEach(function (i) {
              return clearTimeout(i);
            }),
            (r.callbackTimers = [])),
          window.addEventListener
            ? window.removeEventListener("resize", r.onWindowResized)
            : window.detachEvent("onresize", r.onWindowResized),
          r.autoplayTimer && clearInterval(r.autoplayTimer),
          r.ro.disconnect();
      }),
      G(K(r), "componentDidUpdate", function (i) {
        if (
          (r.checkImagesLoad(),
          r.props.onReInit && r.props.onReInit(),
          r.props.lazyLoad)
        ) {
          var s = (0, E1.getOnDemandLazySlides)($($({}, r.props), r.state));
          s.length > 0 &&
            (r.setState(function (c) {
              return { lazyLoadedList: c.lazyLoadedList.concat(s) };
            }),
            r.props.onLazyLoad && r.props.onLazyLoad(s));
        }
        r.adaptHeight();
        var a = $($({ listRef: r.list, trackRef: r.track }, r.props), r.state),
          l = r.didPropsChange(i);
        l &&
          r.updateState(a, l, function () {
            r.state.currentSlide >=
              J1.default.Children.count(r.props.children) &&
              r.changeSlide({
                message: "index",
                index:
                  J1.default.Children.count(r.props.children) -
                  r.props.slidesToShow,
                currentSlide: r.state.currentSlide,
              }),
              r.props.autoplay ? r.autoPlay("update") : r.pause("paused");
          });
      }),
      G(K(r), "onWindowResized", function (i) {
        r.debouncedResize && r.debouncedResize.cancel(),
          (r.debouncedResize = (0, bO.default)(function () {
            return r.resizeWindow(i);
          }, 50)),
          r.debouncedResize();
      }),
      G(K(r), "resizeWindow", function () {
        var i =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0,
          s = !!(r.track && r.track.node);
        if (s) {
          var a = $(
            $({ listRef: r.list, trackRef: r.track }, r.props),
            r.state
          );
          r.updateState(a, i, function () {
            r.props.autoplay ? r.autoPlay("update") : r.pause("paused");
          }),
            r.setState({ animating: !1 }),
            clearTimeout(r.animationEndCallback),
            delete r.animationEndCallback;
        }
      }),
      G(K(r), "updateState", function (i, s, a) {
        var l = (0, E1.initializedState)(i);
        i = $($($({}, i), l), {}, { slideIndex: l.currentSlide });
        var c = (0, E1.getTrackLeft)(i);
        i = $($({}, i), {}, { left: c });
        var f = (0, E1.getTrackCSS)(i);
        (s ||
          J1.default.Children.count(r.props.children) !==
            J1.default.Children.count(i.children)) &&
          (l.trackStyle = f),
          r.setState(l, a);
      }),
      G(K(r), "ssrInit", function () {
        if (r.props.variableWidth) {
          var i = 0,
            s = 0,
            a = [],
            l = (0, E1.getPreClones)(
              $(
                $($({}, r.props), r.state),
                {},
                { slideCount: r.props.children.length }
              )
            ),
            c = (0, E1.getPostClones)(
              $(
                $($({}, r.props), r.state),
                {},
                { slideCount: r.props.children.length }
              )
            );
          r.props.children.forEach(function (A) {
            a.push(A.props.style.width), (i += A.props.style.width);
          });
          for (var f = 0; f < l; f++)
            (s += a[a.length - 1 - f]), (i += a[a.length - 1 - f]);
          for (var d = 0; d < c; d++) i += a[d];
          for (var S = 0; S < r.state.currentSlide; S++) s += a[S];
          var v = { width: i + "px", left: -s + "px" };
          if (r.props.centerMode) {
            var g = "".concat(a[r.state.currentSlide], "px");
            v.left = "calc("
              .concat(v.left, " + (100% - ")
              .concat(g, ") / 2 ) ");
          }
          return { trackStyle: v };
        }
        var w = J1.default.Children.count(r.props.children),
          h = $($($({}, r.props), r.state), {}, { slideCount: w }),
          p = (0, E1.getPreClones)(h) + (0, E1.getPostClones)(h) + w,
          m = (100 / r.props.slidesToShow) * p,
          y = 100 / p,
          x = (-y * ((0, E1.getPreClones)(h) + r.state.currentSlide) * m) / 100;
        r.props.centerMode && (x += (100 - (y * m) / 100) / 2);
        var E = { width: m + "%", left: x + "%" };
        return { slideWidth: y + "%", trackStyle: E };
      }),
      G(K(r), "checkImagesLoad", function () {
        var i =
            (r.list &&
              r.list.querySelectorAll &&
              r.list.querySelectorAll(".slick-slide img")) ||
            [],
          s = i.length,
          a = 0;
        Array.prototype.forEach.call(i, function (l) {
          var c = function () {
            return ++a && a >= s && r.onWindowResized();
          };
          if (!l.onclick)
            l.onclick = function () {
              return l.parentNode.focus();
            };
          else {
            var f = l.onclick;
            l.onclick = function (d) {
              f(d), l.parentNode.focus();
            };
          }
          l.onload ||
            (r.props.lazyLoad
              ? (l.onload = function () {
                  r.adaptHeight(),
                    r.callbackTimers.push(
                      setTimeout(r.onWindowResized, r.props.speed)
                    );
                })
              : ((l.onload = c),
                (l.onerror = function () {
                  c(), r.props.onLazyLoadError && r.props.onLazyLoadError();
                })));
        });
      }),
      G(K(r), "progressiveLazyLoad", function () {
        for (
          var i = [], s = $($({}, r.props), r.state), a = r.state.currentSlide;
          a < r.state.slideCount + (0, E1.getPostClones)(s);
          a++
        )
          if (r.state.lazyLoadedList.indexOf(a) < 0) {
            i.push(a);
            break;
          }
        for (
          var l = r.state.currentSlide - 1;
          l >= -(0, E1.getPreClones)(s);
          l--
        )
          if (r.state.lazyLoadedList.indexOf(l) < 0) {
            i.push(l);
            break;
          }
        i.length > 0
          ? (r.setState(function (c) {
              return { lazyLoadedList: c.lazyLoadedList.concat(i) };
            }),
            r.props.onLazyLoad && r.props.onLazyLoad(i))
          : r.lazyLoadTimer &&
            (clearInterval(r.lazyLoadTimer), delete r.lazyLoadTimer);
      }),
      G(K(r), "slideHandler", function (i) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          a = r.props,
          l = a.asNavFor,
          c = a.beforeChange,
          f = a.onLazyLoad,
          d = a.speed,
          S = a.afterChange,
          v = r.state.currentSlide,
          g = (0, E1.slideHandler)(
            $(
              $($({ index: i }, r.props), r.state),
              {},
              { trackRef: r.track, useCSS: r.props.useCSS && !s }
            )
          ),
          w = g.state,
          h = g.nextState;
        if (w) {
          c && c(v, w.currentSlide);
          var p = w.lazyLoadedList.filter(function (m) {
            return r.state.lazyLoadedList.indexOf(m) < 0;
          });
          f && p.length > 0 && f(p),
            !r.props.waitForAnimate &&
              r.animationEndCallback &&
              (clearTimeout(r.animationEndCallback),
              S && S(v),
              delete r.animationEndCallback),
            r.setState(w, function () {
              l &&
                r.asNavForIndex !== i &&
                ((r.asNavForIndex = i), l.innerSlider.slideHandler(i)),
                h &&
                  (r.animationEndCallback = setTimeout(function () {
                    var m = h.animating,
                      y = OO(h, ["animating"]);
                    r.setState(y, function () {
                      r.callbackTimers.push(
                        setTimeout(function () {
                          return r.setState({ animating: m });
                        }, 10)
                      ),
                        S && S(w.currentSlide),
                        delete r.animationEndCallback;
                    });
                  }, d));
            });
        }
      }),
      G(K(r), "changeSlide", function (i) {
        var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          a = $($({}, r.props), r.state),
          l = (0, E1.changeSlide)(a, i);
        if (
          !(l !== 0 && !l) &&
          (s === !0 ? r.slideHandler(l, s) : r.slideHandler(l),
          r.props.autoplay && r.autoPlay("update"),
          r.props.focusOnSelect)
        ) {
          var c = r.list.querySelectorAll(".slick-current");
          c[0] && c[0].focus();
        }
      }),
      G(K(r), "clickHandler", function (i) {
        r.clickable === !1 && (i.stopPropagation(), i.preventDefault()),
          (r.clickable = !0);
      }),
      G(K(r), "keyHandler", function (i) {
        var s = (0, E1.keyHandler)(i, r.props.accessibility, r.props.rtl);
        s !== "" && r.changeSlide({ message: s });
      }),
      G(K(r), "selectHandler", function (i) {
        r.changeSlide(i);
      }),
      G(K(r), "disableBodyScroll", function () {
        var i = function (a) {
          (a = a || window.event),
            a.preventDefault && a.preventDefault(),
            (a.returnValue = !1);
        };
        window.ontouchmove = i;
      }),
      G(K(r), "enableBodyScroll", function () {
        window.ontouchmove = null;
      }),
      G(K(r), "swipeStart", function (i) {
        r.props.verticalSwiping && r.disableBodyScroll();
        var s = (0, E1.swipeStart)(i, r.props.swipe, r.props.draggable);
        s !== "" && r.setState(s);
      }),
      G(K(r), "swipeMove", function (i) {
        var s = (0, E1.swipeMove)(
          i,
          $(
            $($({}, r.props), r.state),
            {},
            {
              trackRef: r.track,
              listRef: r.list,
              slideIndex: r.state.currentSlide,
            }
          )
        );
        s && (s.swiping && (r.clickable = !1), r.setState(s));
      }),
      G(K(r), "swipeEnd", function (i) {
        var s = (0, E1.swipeEnd)(
          i,
          $(
            $($({}, r.props), r.state),
            {},
            {
              trackRef: r.track,
              listRef: r.list,
              slideIndex: r.state.currentSlide,
            }
          )
        );
        if (s) {
          var a = s.triggerSlideHandler;
          delete s.triggerSlideHandler,
            r.setState(s),
            a !== void 0 &&
              (r.slideHandler(a),
              r.props.verticalSwiping && r.enableBodyScroll());
        }
      }),
      G(K(r), "touchEnd", function (i) {
        r.swipeEnd(i), (r.clickable = !0);
      }),
      G(K(r), "slickPrev", function () {
        r.callbackTimers.push(
          setTimeout(function () {
            return r.changeSlide({ message: "previous" });
          }, 0)
        );
      }),
      G(K(r), "slickNext", function () {
        r.callbackTimers.push(
          setTimeout(function () {
            return r.changeSlide({ message: "next" });
          }, 0)
        );
      }),
      G(K(r), "slickGoTo", function (i) {
        var s =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        if (((i = Number(i)), isNaN(i))) return "";
        r.callbackTimers.push(
          setTimeout(function () {
            return r.changeSlide(
              {
                message: "index",
                index: i,
                currentSlide: r.state.currentSlide,
              },
              s
            );
          }, 0)
        );
      }),
      G(K(r), "play", function () {
        var i;
        if (r.props.rtl) i = r.state.currentSlide - r.props.slidesToScroll;
        else if ((0, E1.canGoNext)($($({}, r.props), r.state)))
          i = r.state.currentSlide + r.props.slidesToScroll;
        else return !1;
        r.slideHandler(i);
      }),
      G(K(r), "autoPlay", function (i) {
        r.autoplayTimer && clearInterval(r.autoplayTimer);
        var s = r.state.autoplaying;
        if (i === "update") {
          if (s === "hovered" || s === "focused" || s === "paused") return;
        } else if (i === "leave") {
          if (s === "paused" || s === "focused") return;
        } else if (i === "blur" && (s === "paused" || s === "hovered")) return;
        (r.autoplayTimer = setInterval(r.play, r.props.autoplaySpeed + 50)),
          r.setState({ autoplaying: "playing" });
      }),
      G(K(r), "pause", function (i) {
        r.autoplayTimer &&
          (clearInterval(r.autoplayTimer), (r.autoplayTimer = null));
        var s = r.state.autoplaying;
        i === "paused"
          ? r.setState({ autoplaying: "paused" })
          : i === "focused"
          ? (s === "hovered" || s === "playing") &&
            r.setState({ autoplaying: "focused" })
          : s === "playing" && r.setState({ autoplaying: "hovered" });
      }),
      G(K(r), "onDotsOver", function () {
        return r.props.autoplay && r.pause("hovered");
      }),
      G(K(r), "onDotsLeave", function () {
        return (
          r.props.autoplay &&
          r.state.autoplaying === "hovered" &&
          r.autoPlay("leave")
        );
      }),
      G(K(r), "onTrackOver", function () {
        return r.props.autoplay && r.pause("hovered");
      }),
      G(K(r), "onTrackLeave", function () {
        return (
          r.props.autoplay &&
          r.state.autoplaying === "hovered" &&
          r.autoPlay("leave")
        );
      }),
      G(K(r), "onSlideFocus", function () {
        return r.props.autoplay && r.pause("focused");
      }),
      G(K(r), "onSlideBlur", function () {
        return (
          r.props.autoplay &&
          r.state.autoplaying === "focused" &&
          r.autoPlay("blur")
        );
      }),
      G(K(r), "render", function () {
        var i = (0, TO.default)("slick-slider", r.props.className, {
            "slick-vertical": r.props.vertical,
            "slick-initialized": !0,
          }),
          s = $($({}, r.props), r.state),
          a = (0, E1.extractObject)(s, [
            "fade",
            "cssEase",
            "speed",
            "infinite",
            "centerMode",
            "focusOnSelect",
            "currentSlide",
            "lazyLoad",
            "lazyLoadedList",
            "rtl",
            "slideWidth",
            "slideHeight",
            "listHeight",
            "vertical",
            "slidesToShow",
            "slidesToScroll",
            "slideCount",
            "trackStyle",
            "variableWidth",
            "unslick",
            "centerPadding",
            "targetSlide",
            "useCSS",
          ]),
          l = r.props.pauseOnHover;
        a = $(
          $({}, a),
          {},
          {
            onMouseEnter: l ? r.onTrackOver : null,
            onMouseLeave: l ? r.onTrackLeave : null,
            onMouseOver: l ? r.onTrackOver : null,
            focusOnSelect:
              r.props.focusOnSelect && r.clickable ? r.selectHandler : null,
          }
        );
        var c;
        if (r.props.dots === !0 && r.state.slideCount >= r.props.slidesToShow) {
          var f = (0, E1.extractObject)(s, [
              "dotsClass",
              "slideCount",
              "slidesToShow",
              "currentSlide",
              "slidesToScroll",
              "clickHandler",
              "children",
              "customPaging",
              "infinite",
              "appendDots",
            ]),
            d = r.props.pauseOnDotsHover;
          (f = $(
            $({}, f),
            {},
            {
              clickHandler: r.changeSlide,
              onMouseEnter: d ? r.onDotsLeave : null,
              onMouseOver: d ? r.onDotsOver : null,
              onMouseLeave: d ? r.onDotsLeave : null,
            }
          )),
            (c = J1.default.createElement(kO.Dots, f));
        }
        var S,
          v,
          g = (0, E1.extractObject)(s, [
            "infinite",
            "centerMode",
            "currentSlide",
            "slideCount",
            "slidesToShow",
            "prevArrow",
            "nextArrow",
          ]);
        (g.clickHandler = r.changeSlide),
          r.props.arrows &&
            ((S = J1.default.createElement($i.PrevArrow, g)),
            (v = J1.default.createElement($i.NextArrow, g)));
        var w = null;
        r.props.vertical && (w = { height: r.state.listHeight });
        var h = null;
        r.props.vertical === !1
          ? r.props.centerMode === !0 &&
            (h = { padding: "0px " + r.props.centerPadding })
          : r.props.centerMode === !0 &&
            (h = { padding: r.props.centerPadding + " 0px" });
        var p = $($({}, w), h),
          m = r.props.touchMove,
          y = {
            className: "slick-list",
            style: p,
            onClick: r.clickHandler,
            onMouseDown: m ? r.swipeStart : null,
            onMouseMove: r.state.dragging && m ? r.swipeMove : null,
            onMouseUp: m ? r.swipeEnd : null,
            onMouseLeave: r.state.dragging && m ? r.swipeEnd : null,
            onTouchStart: m ? r.swipeStart : null,
            onTouchMove: r.state.dragging && m ? r.swipeMove : null,
            onTouchEnd: m ? r.touchEnd : null,
            onTouchCancel: r.state.dragging && m ? r.swipeEnd : null,
            onKeyDown: r.props.accessibility ? r.keyHandler : null,
          },
          x = { className: i, dir: "ltr", style: r.props.style };
        return (
          r.props.unslick &&
            ((y = { className: "slick-list" }), (x = { className: i })),
          J1.default.createElement(
            "div",
            x,
            r.props.unslick ? "" : S,
            J1.default.createElement(
              "div",
              y9({ ref: r.listRefHandler }, y),
              J1.default.createElement(
                PO.Track,
                y9({ ref: r.trackRefHandler }, a),
                r.props.children
              )
            ),
            r.props.unslick ? "" : v,
            r.props.unslick ? "" : c
          )
        );
      }),
      (r.list = null),
      (r.track = null),
      (r.state = $(
        $({}, LO.default),
        {},
        {
          currentSlide: r.props.initialSlide,
          targetSlide: r.props.initialSlide ? r.props.initialSlide : 0,
          slideCount: J1.default.Children.count(r.props.children),
        }
      )),
      (r.callbackTimers = []),
      (r.clickable = !0),
      (r.debouncedResize = null);
    var o = r.ssrInit();
    return (r.state = $($({}, r.state), o)), r;
  }
  return (
    NO(t, [
      {
        key: "didPropsChange",
        value: function (r) {
          for (
            var o = !1, i = 0, s = Object.keys(this.props);
            i < s.length;
            i++
          ) {
            var a = s[i];
            if (!r.hasOwnProperty(a)) {
              o = !0;
              break;
            }
            if (
              !(
                D5(r[a]) === "object" ||
                typeof r[a] == "function" ||
                isNaN(r[a])
              ) &&
              r[a] !== this.props[a]
            ) {
              o = !0;
              break;
            }
          }
          return (
            o ||
            J1.default.Children.count(this.props.children) !==
              J1.default.Children.count(r.children)
          );
        },
      },
    ]),
    t
  );
})(J1.default.Component);
var zO = function (C) {
    return C.replace(/[A-Z]/g, function (e) {
      return "-" + e.toLowerCase();
    }).toLowerCase();
  },
  FO = zO,
  VO = FO,
  UO = function (C) {
    var e = /[height|width]$/;
    return e.test(C);
  },
  Wi = function (C) {
    var e = "",
      t = Object.keys(C);
    return (
      t.forEach(function (n, r) {
        var o = C[n];
        (n = VO(n)),
          UO(n) && typeof o == "number" && (o = o + "px"),
          o === !0
            ? (e += n)
            : o === !1
            ? (e += "not " + n)
            : (e += "(" + n + ": " + o + ")"),
          r < t.length - 1 && (e += " and ");
      }),
      e
    );
  },
  $O = function (C) {
    var e = "";
    return typeof C == "string"
      ? C
      : C instanceof Array
      ? (C.forEach(function (t, n) {
          (e += Wi(t)), n < C.length - 1 && (e += ", ");
        }),
        e)
      : Wi(C);
  },
  ZO = $O,
  wC,
  Ki;
function WO() {
  if (Ki) return wC;
  Ki = 1;
  function C(e) {
    (this.options = e), !e.deferSetup && this.setup();
  }
  return (
    (C.prototype = {
      constructor: C,
      setup: function () {
        this.options.setup && this.options.setup(), (this.initialised = !0);
      },
      on: function () {
        !this.initialised && this.setup(),
          this.options.match && this.options.match();
      },
      off: function () {
        this.options.unmatch && this.options.unmatch();
      },
      destroy: function () {
        this.options.destroy ? this.options.destroy() : this.off();
      },
      equals: function (e) {
        return this.options === e || this.options.match === e;
      },
    }),
    (wC = C),
    wC
  );
}
var LC, Gi;
function Zc() {
  if (Gi) return LC;
  Gi = 1;
  function C(n, r) {
    var o = 0,
      i = n.length,
      s;
    for (o; o < i && ((s = r(n[o], o)), s !== !1); o++);
  }
  function e(n) {
    return Object.prototype.toString.apply(n) === "[object Array]";
  }
  function t(n) {
    return typeof n == "function";
  }
  return (LC = { isFunction: t, isArray: e, each: C }), LC;
}
var bC, Qi;
function KO() {
  if (Qi) return bC;
  Qi = 1;
  var C = WO(),
    e = Zc().each;
  function t(n, r) {
    (this.query = n),
      (this.isUnconditional = r),
      (this.handlers = []),
      (this.mql = window.matchMedia(n));
    var o = this;
    (this.listener = function (i) {
      (o.mql = i.currentTarget || i), o.assess();
    }),
      this.mql.addListener(this.listener);
  }
  return (
    (t.prototype = {
      constuctor: t,
      addHandler: function (n) {
        var r = new C(n);
        this.handlers.push(r), this.matches() && r.on();
      },
      removeHandler: function (n) {
        var r = this.handlers;
        e(r, function (o, i) {
          if (o.equals(n)) return o.destroy(), !r.splice(i, 1);
        });
      },
      matches: function () {
        return this.mql.matches || this.isUnconditional;
      },
      clear: function () {
        e(this.handlers, function (n) {
          n.destroy();
        }),
          this.mql.removeListener(this.listener),
          (this.handlers.length = 0);
      },
      assess: function () {
        var n = this.matches() ? "on" : "off";
        e(this.handlers, function (r) {
          r[n]();
        });
      },
    }),
    (bC = t),
    bC
  );
}
var TC, Yi;
function GO() {
  if (Yi) return TC;
  Yi = 1;
  var C = KO(),
    e = Zc(),
    t = e.each,
    n = e.isFunction,
    r = e.isArray;
  function o() {
    if (!window.matchMedia)
      throw new Error(
        "matchMedia not present, legacy browsers require a polyfill"
      );
    (this.queries = {}),
      (this.browserIsIncapable = !window.matchMedia("only all").matches);
  }
  return (
    (o.prototype = {
      constructor: o,
      register: function (i, s, a) {
        var l = this.queries,
          c = a && this.browserIsIncapable;
        return (
          l[i] || (l[i] = new C(i, c)),
          n(s) && (s = { match: s }),
          r(s) || (s = [s]),
          t(s, function (f) {
            n(f) && (f = { match: f }), l[i].addHandler(f);
          }),
          this
        );
      },
      unregister: function (i, s) {
        var a = this.queries[i];
        return (
          a && (s ? a.removeHandler(s) : (a.clear(), delete this.queries[i])),
          this
        );
      },
    }),
    (TC = o),
    TC
  );
}
var PC, Xi;
function QO() {
  if (Xi) return PC;
  Xi = 1;
  var C = GO();
  return (PC = new C()), PC;
}
(function (C) {
  Object.defineProperty(C, "__esModule", { value: !0 }), (C.default = void 0);
  var e = i(L),
    t = _7,
    n = i(ZO),
    r = i(Un),
    o = z;
  function i(T) {
    return T && T.__esModule ? T : { default: T };
  }
  function s(T) {
    "@babel/helpers - typeof";
    return (
      (s =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (b) {
              return typeof b;
            }
          : function (b) {
              return b &&
                typeof Symbol == "function" &&
                b.constructor === Symbol &&
                b !== Symbol.prototype
                ? "symbol"
                : typeof b;
            }),
      s(T)
    );
  }
  function a() {
    return (
      (a = Object.assign
        ? Object.assign.bind()
        : function (T) {
            for (var b = 1; b < arguments.length; b++) {
              var O = arguments[b];
              for (var M in O)
                Object.prototype.hasOwnProperty.call(O, M) && (T[M] = O[M]);
            }
            return T;
          }),
      a.apply(this, arguments)
    );
  }
  function l(T, b) {
    var O = Object.keys(T);
    if (Object.getOwnPropertySymbols) {
      var M = Object.getOwnPropertySymbols(T);
      b &&
        (M = M.filter(function (I) {
          return Object.getOwnPropertyDescriptor(T, I).enumerable;
        })),
        O.push.apply(O, M);
    }
    return O;
  }
  function c(T) {
    for (var b = 1; b < arguments.length; b++) {
      var O = arguments[b] != null ? arguments[b] : {};
      b % 2
        ? l(Object(O), !0).forEach(function (M) {
            x(T, M, O[M]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(T, Object.getOwnPropertyDescriptors(O))
        : l(Object(O)).forEach(function (M) {
            Object.defineProperty(T, M, Object.getOwnPropertyDescriptor(O, M));
          });
    }
    return T;
  }
  function f(T, b) {
    if (!(T instanceof b))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(T, b) {
    for (var O = 0; O < b.length; O++) {
      var M = b[O];
      (M.enumerable = M.enumerable || !1),
        (M.configurable = !0),
        "value" in M && (M.writable = !0),
        Object.defineProperty(T, E(M.key), M);
    }
  }
  function S(T, b, O) {
    return (
      b && d(T.prototype, b),
      Object.defineProperty(T, "prototype", { writable: !1 }),
      T
    );
  }
  function v(T, b) {
    if (typeof b != "function" && b !== null)
      throw new TypeError("Super expression must either be null or a function");
    (T.prototype = Object.create(b && b.prototype, {
      constructor: { value: T, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(T, "prototype", { writable: !1 }),
      b && g(T, b);
  }
  function g(T, b) {
    return (
      (g = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (M, I) {
            return (M.__proto__ = I), M;
          }),
      g(T, b)
    );
  }
  function w(T) {
    var b = m();
    return function () {
      var M = y(T),
        I;
      if (b) {
        var R = y(this).constructor;
        I = Reflect.construct(M, arguments, R);
      } else I = M.apply(this, arguments);
      return h(this, I);
    };
  }
  function h(T, b) {
    if (b && (s(b) === "object" || typeof b == "function")) return b;
    if (b !== void 0)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return p(T);
  }
  function p(T) {
    if (T === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return T;
  }
  function m() {
    try {
      var T = !Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      );
    } catch {}
    return (m = function () {
      return !!T;
    })();
  }
  function y(T) {
    return (
      (y = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (O) {
            return O.__proto__ || Object.getPrototypeOf(O);
          }),
      y(T)
    );
  }
  function x(T, b, O) {
    return (
      (b = E(b)),
      b in T
        ? Object.defineProperty(T, b, {
            value: O,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (T[b] = O),
      T
    );
  }
  function E(T) {
    var b = A(T, "string");
    return s(b) == "symbol" ? b : String(b);
  }
  function A(T, b) {
    if (s(T) != "object" || !T) return T;
    var O = T[Symbol.toPrimitive];
    if (O !== void 0) {
      var M = O.call(T, b);
      if (s(M) != "object") return M;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return String(T);
  }
  var _ = (0, o.canUseDOM)() && QO();
  C.default = (function (T) {
    v(O, T);
    var b = w(O);
    function O(M) {
      var I;
      return (
        f(this, O),
        (I = b.call(this, M)),
        x(p(I), "innerSliderRefHandler", function (R) {
          return (I.innerSlider = R);
        }),
        x(p(I), "slickPrev", function () {
          return I.innerSlider.slickPrev();
        }),
        x(p(I), "slickNext", function () {
          return I.innerSlider.slickNext();
        }),
        x(p(I), "slickGoTo", function (R) {
          var B =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return I.innerSlider.slickGoTo(R, B);
        }),
        x(p(I), "slickPause", function () {
          return I.innerSlider.pause("paused");
        }),
        x(p(I), "slickPlay", function () {
          return I.innerSlider.autoPlay("play");
        }),
        (I.state = { breakpoint: null }),
        (I._responsiveMediaHandlers = []),
        I
      );
    }
    return (
      S(O, [
        {
          key: "media",
          value: function (I, R) {
            _.register(I, R),
              this._responsiveMediaHandlers.push({ query: I, handler: R });
          },
        },
        {
          key: "componentDidMount",
          value: function () {
            var I = this;
            if (this.props.responsive) {
              var R = this.props.responsive.map(function (H) {
                return H.breakpoint;
              });
              R.sort(function (H, D) {
                return H - D;
              }),
                R.forEach(function (H, D) {
                  var k;
                  D === 0
                    ? (k = (0, n.default)({ minWidth: 0, maxWidth: H }))
                    : (k = (0, n.default)({
                        minWidth: R[D - 1] + 1,
                        maxWidth: H,
                      })),
                    (0, o.canUseDOM)() &&
                      I.media(k, function () {
                        I.setState({ breakpoint: H });
                      });
                });
              var B = (0, n.default)({ minWidth: R.slice(-1)[0] });
              (0, o.canUseDOM)() &&
                this.media(B, function () {
                  I.setState({ breakpoint: null });
                });
            }
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this._responsiveMediaHandlers.forEach(function (I) {
              _.unregister(I.query, I.handler);
            });
          },
        },
        {
          key: "render",
          value: function () {
            var I = this,
              R,
              B;
            this.state.breakpoint
              ? ((B = this.props.responsive.filter(function (C1) {
                  return C1.breakpoint === I.state.breakpoint;
                })),
                (R =
                  B[0].settings === "unslick"
                    ? "unslick"
                    : c(c(c({}, r.default), this.props), B[0].settings)))
              : (R = c(c({}, r.default), this.props)),
              R.centerMode && (R.slidesToScroll > 1, (R.slidesToScroll = 1)),
              R.fade &&
                (R.slidesToShow > 1,
                R.slidesToScroll > 1,
                (R.slidesToShow = 1),
                (R.slidesToScroll = 1));
            var H = e.default.Children.toArray(this.props.children);
            (H = H.filter(function (C1) {
              return typeof C1 == "string" ? !!C1.trim() : !!C1;
            })),
              R.variableWidth &&
                (R.rows > 1 || R.slidesPerRow > 1) &&
                (console.warn(
                  "variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"
                ),
                (R.variableWidth = !1));
            for (
              var D = [], k = null, N = 0;
              N < H.length;
              N += R.rows * R.slidesPerRow
            ) {
              for (
                var F = [], Z = N;
                Z < N + R.rows * R.slidesPerRow;
                Z += R.slidesPerRow
              ) {
                for (
                  var Q = [], h1 = Z;
                  h1 < Z + R.slidesPerRow &&
                  (R.variableWidth &&
                    H[h1].props.style &&
                    (k = H[h1].props.style.width),
                  !(h1 >= H.length));
                  h1 += 1
                )
                  Q.push(
                    e.default.cloneElement(H[h1], {
                      key: 100 * N + 10 * Z + h1,
                      tabIndex: -1,
                      style: {
                        width: "".concat(100 / R.slidesPerRow, "%"),
                        display: "inline-block",
                      },
                    })
                  );
                F.push(e.default.createElement("div", { key: 10 * N + Z }, Q));
              }
              R.variableWidth
                ? D.push(
                    e.default.createElement(
                      "div",
                      { key: N, style: { width: k } },
                      F
                    )
                  )
                : D.push(e.default.createElement("div", { key: N }, F));
            }
            if (R === "unslick") {
              var J = "regular slider " + (this.props.className || "");
              return e.default.createElement("div", { className: J }, H);
            } else
              D.length <= R.slidesToShow && !R.infinite && (R.unslick = !0);
            return e.default.createElement(
              t.InnerSlider,
              a(
                { style: this.props.style, ref: this.innerSliderRefHandler },
                (0, o.filterSettings)(R)
              ),
              D
            );
          },
        },
      ]),
      O
    );
  })(e.default.Component);
})(dc);
(function (C) {
  Object.defineProperty(C, "__esModule", { value: !0 }), (C.default = void 0);
  var e = t(dc);
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  C.default = e.default;
})(cc);
const tt = nt(cc),
  qi = "/assets/advertisment-CZd4UuFE.png",
  YO =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABrCAYAAADO6SRRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXvSURBVHgB7ZtPaBxVHMd/lSIttGS9JRezBQOeTCL2IGhDpR6Sg6BUD4KhSXsSEpR4UYxuWewtYBvqSRMbwYNojR6Sg9J/Fj0IzZ+LhwS6OW1u3dBCQy/rfGfmTd7+sklnZ35vJiS/DwyZnWR3Zj557zfv93tvDxFRnZSIZ0hp4LDZeXK3TAeZZ18b939qC2GoEIYKYagQhgphqBCGCmGoEIYKYagQhgphqBCGCmGoEIYKYagQhgphHCaH1B5u0u3F+7TxaJM2Hj6mmvczCYVjR6jt+FHqbC9Q9wsdVDh+hFzhRMjthftUnrpJd7yfLjjVe4IG+3tpcKCXpBEXMnZlniZ/+ptcAtHYllbXaWK0nyQRFdJMRndXu9/M27xmjqafhJrf5TZpbf2B1/oq0XFzLkkpYkJm5hYaZIy89yqND70h3t/XqjUqT9/wzwdwzrdef5H6vG4kgdhTZmZ+Idr/wOvbE6MDToJfZ0eBvv3sHV+4AfFKChEhaNJ2AP3CaxmuGR/eOgfOnfQJxhERsrRSjfb7eov+f9E1iEcvefHJcOeezBNNRMjaei3af779OcqKnq6OaL/26DFJICIEgy6Dy0ETp816am3spS5j99+kj9Yk2OfaUzFkP6FCGCqEoUIYKoShQhgqhCEixMV4IA4uxj8iQlDeM6BsmBX26LRNSIhIPcS+mOWV9djvQ9penrrRcAxZ7Pjw6Vjvr1S3cqjODpkcSqSF2MWZpdVq7G7DZex0rBkoFNklh24r0UuDWAw5ZUmJW7Bp1hLitg5UzQwoOUjFkEMULu1Ou3AXlfY3R6ai16iaoVAkXRtBjCpP32woV6KClrYCbxbuigkBY1fmvAv9p+EYWg7mUwopi8wQgSr7slWMAiglolyZFiNEtOpuLsyW4mpuBkjJsBGfl8EFYtrhh/l7DVMGkiBmfO49jaQq7TaiXYYTNPOqX2LkU5mYRjClR8SbQ+ExgC5mxwQzlYnHe1/PCSdVOSddhoML3+m/iNZjhGBaEhghhWNHG6rqWeJUyG7YwRFjCHvUiRk6tKYsy5GGTIRgEDXjxZTotdcy7O5jHqEQ4D9RvO3CV9f9aVDDYP/LmUxvOI0hhq6zEw1TFUlAXFn5eYxcoV8g2oFMusyfk+cbukwS0GWyIBMh6Pt5PTVaRbsMQ4UwVAhDhTBUCEOFMFQIQ4UwVAhDhTBUCEOFMFQIQ4UwVAhDhTBUCEOFMFQIQ4UwVAhjTwjBlxex7QVym9sFmOI8f+l6tIYEq5B+ufR+JlOWO5FbC8HX0s6MfGdkVLAth8fWqummPdOQixAse8B6tHC+d9HbTofbIo6dHLq6bWlWVmQuBCsUL3jdJJz9v+xtWBxSCTfsX8bvsF5N8uuncclMCFYTnfFahbUO9WNv+6jJn+LYRezgb89++mOmy8UzEYKYgG4Qxgv0E3SPr3d5S4nClvP7X//RyXNXM4srzoXgyQEZVrzAjd6K8VYTWyomrvzmyXGNUyGIAQieYZO/RuENtvAR+FsIvIbPeNfrPq7jipNxCOLFJ5Nz0SI6CmJCiZKBpnWOAjlfIq5ADpaAu1iDJt5C0NcRPEMZuJm3KbkMm1L4WTWsSXMVV0SFIF5gYLW86q8wrFDQ3GdJjtnwM/24gnMtsaXeaRETgoGUNdi6RVvjC2kqFMSi2SDYfiM6iBMREiRnc+YlBlu4YJfPyQoF3edicP45seQwlRATL8J1phAwRM0HW64oUTDA86/hFa+1pI0riYU0Sc7QKr6n7MEAD+vHRZLDREJ2SM4WKT8qJJQctixkl+QsbyokkBzGFtJCcpY3qZLDWEISJGd5U6KEyeFThaRIzvImUXK4qxCB5CxvKtRictg0uRNOzvKmpeRwWwtxmJzlTYliJof4AlH9yd1y/Y/J4Xpne6EeHkMELdL+o0jBvfn3+u/0h/69U+iBzM7E6IB9EB0tv8kR9xS97Vdqfu9UZ9tefpxKU6Lt9x/tPKAg+Bw0MJDbJgR9qocOLkUK4wpeLND+DJ6tUqTAhWLzP5Sq1Tn6zLxoAAAAAElFTkSuQmCC",
  Ji = "/assets/carCards-Dy7Fpslw.png",
  Cs = "/assets/catShield-BKUPLFdO.png",
  XO = "/assets/introBg-BUxKf4t2.png",
  Wc = X3()((C) => ({
    root: {
      width: "100%",
      paddingTop: "10rem",
      flexDirection: "column",
      justifyContent: "space-between",
      display: "flex",
      backgroundImage: `url(${XO})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      minHeight: "100vh",
      position: "relative",
      [C.breakpoints.down("md")]: { minHeight: "100vh" },
      [C.breakpoints.down("sm")]: { minHeight: "70vh", paddingTop: "3rem" },
    },
    content: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      [C.breakpoints.down(1e3)]: { flexDirection: "column" },
    },
    box1: {
      borderRadius: 21,
      padding: "20px 20px 20px 40px",
      background: "#fff",
      boxShadow: "5px 5px 1px black",
      border: "2px solid #000",
      position: "relative",
      display: "flex",
      fontFamily: "boogaloo",
      justifyContent: "center",
      width: "30%",
      height: "700px",
      alignItems: "flex-start",
      flexDirection: "column",
      gap: "10px",
      [C.breakpoints.down("md")]: { margin: "0 auto", gap: "5px" },
      [C.breakpoints.down(1e3)]: {
        height: "500px",
        width: "80%",
        alignItems: "center",
      },
      [C.breakpoints.down("sm")]: { zoom: "0.5" },
      [C.breakpoints.down(1600)]: { zoom: "0.7" },
    },
    badge: { position: "absolute", width: "10%", left: "8%", top: "0%" },
    box2: {
      [C.breakpoints.down(1e3)]: {
        width: "80%",
        alignItems: "center",
        height: "500px",
      },
      [C.breakpoints.down("md")]: { margin: "0 auto" },
      [C.breakpoints.down("sm")]: { zoom: "0.5" },
      [C.breakpoints.down(1600)]: { zoom: "0.7" },
      position: "relative",
      left: "-2px",
      width: "30%",
      height: "700px",
      borderRadius: 21,
      background: "#fff",
      zIndex: 99,
      padding: "20px",
      boxShadow: "5px 5px 1px black",
      border: "2px solid #000",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
      gap: "10px",
    },
    titleContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      padding: "20px",
      [C.breakpoints.down("md")]: { gap: "5px" },
    },
    title1: {
      [C.breakpoints.down(1e3)]: { fontSize: "3rem" },
      WebkitTextStroke: "0.5px #000",
      color: "#fff",
      fontSize: "5rem",
    },
    title2: {
      [C.breakpoints.down(1e3)]: { fontSize: "3rem" },
      WebkitTextStroke: "0.5px #000",
      color: "#FAC483",
      fontSize: "5rem",
    },
    subTitle: {},
    pageTitle: {
      position: "absolute",
      bottom: "2%",
      fontFamily: "Nunito",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "1rem",
      letterSpacing: "3px",
      color: "#C4C4C4",
    },
    title: {
      WebkitTextStroke: "0.5px #000",
      color: "#FAC483",
      fontSize: "5rem",
      fontFamily: "boogaloo",
      [C.breakpoints.down(1e3)]: { fontSize: "3rem" },
    },
    intro: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "30px",
      fontWeight: "bold",
      fontSize: "1.5rem",
      padding: "20px",
      fontFamily: "Inter !important",
      [C.breakpoints.down("md")]: { gap: "5px" },
      [C.breakpoints.down(1e3)]: { fontSize: "1.2rem" },
    },
    sliderWrapper: { width: "100%", padding: "20px" },
    text1: {
      fontFamily: "boogaloo",
      fontSize: "7.75rem !important",
      color: "#ffffff ",
      [C.breakpoints.down("md")]: { fontSize: "4rem !important" },
    },
    text2: {
      fontSize: "7.75rem !important",
      color: "#ffaf4f",
      fontFamily: "boogaloo",
    },
    headingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      marginTop: "10px",
      [C.breakpoints.down(1600)]: { zoom: "0.7" },
      "& *": {
        textShadow: "6px 6px 1px #000, 0px 0px 100px yellow !important",
      },
    },
    pinkCloud: {
      position: "absolute",
      top: "0",
      right: "0",
      width: "100%",
      zIndex: -1,
    },
    stairs: {
      position: "absolute",
      bottom: "0%",
      left: "0",
      width: "100%",
      zIndex: -1,
    },
    grass: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      zIndex: -1,
    },
    imageContainer: {
      width: "100%",
      display: "flex",
      padding: "60px 0px",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "20px",
      position: "relative",
      top: "50px",
      [C.breakpoints.down(1600)]: { top: "-10px" },
    },
    catShield: {
      width: "15%",
      [C.breakpoints.down(1e3)]: { width: "25%" },
      [C.breakpoints.down("md")]: {
        width: "70%",
        margin: "0 auto",
        alignItems: "center",
      },
    },
    catCards: {
      width: "15%",
      [C.breakpoints.down(1e3)]: { width: "25%" },
      [C.breakpoints.down("md")]: { width: "80%", margin: "0 auto" },
    },
    advertisement: {
      width: "15%",
      [C.breakpoints.down(1e3)]: { width: "25%" },
      [C.breakpoints.down("md")]: { width: "50%", margin: "0 auto" },
    },
    links: {
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "repeat(3,1fr)",
      borderBottom: "1px solid black",
      height: "100%",
      [C.breakpoints.down("md")]: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
      },
    },
    link: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRight: "1px solid black",
      background: "#fff",
      color: "#000",
      fontFamily: "Boogaloo !important",
      gap: "0.5rem",
      position: "relative",
      zIndex: 4,
      height: "100%",
      overflow: "hidden",
      padding: "1rem 3rem",
      borderTop: "1px solid black",
      "& h5": {
        [C.breakpoints.down(1e3)]: { fontSize: "1rem" },
        fontWeight: "bold",
      },
      "&::before": {
        zIndex: -1,
        position: "absolute",
        transition: "all 0.2s ease",
        top: "100%",
        right: "100%",
        content: "''",
        width: "100%",
        height: "100%",
        background: C.palette.secondary.main,
      },
      "&:hover::before": { top: "0%", right: "0%" },
      [C.breakpoints.down("md")]: {
        background: "#fff",
        fontSize: "1.2rem !important",
        color: "#000",
        padding: "1rem 1rem",
        "& svg": { width: "5%" },
        "&::before": {
          zIndex: -1,
          position: "absolute",
          transition: "all 0.2s ease",
          top: "100%",
          right: "100%",
          content: "''",
          width: "100%",
          height: "100%",
          background: "transparent",
        },
      },
    },
    dot: {
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      background: "#d6d6d6",
      border: "1px solid black",
    },
    dotActive: { background: C.palette.primary.main },
    linkActive: { background: "#FFA740", color: "#fff" },
  })),
  qO = () => {
    const { classes: C, cx: e } = Wc(),
      t = h7(V8.breakpoints.down("md")),
      { t: n } = L2(),
      [r, o] = L.useState(0),
      i = L.useRef(null),
      s = {
        dots: !1,
        arrow: !0,
        infinite: !1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 5e3,
      },
      a = {
        dots: !0,
        arrow: !0,
        customPaging: function (l) {
          return u.jsx("div", {
            className: r === l ? e(C.dot, C.dotActive) : C.dot,
            children: u.jsx("div", { style: { opacity: 0 }, children: l + 1 }),
          });
        },
        infinite: !1,
        dotsClass: "slick-dots",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (l) => {
          o(l);
        },
        autoplay: !1,
        autoplaySpeed: 5e3,
      };
    return (
      L.useEffect(() => {
        t || o(0);
      }, [t]),
      L.useEffect(() => {
        i.current && i.current.slickGoTo(r);
      }, [r]),
      u.jsxs("div", {
        className: C.root,
        children: [
          u.jsxs(tt, {
            ...s,
            children: [
              u.jsx("div", {
                className: C.sliderWrapper,
                children: u.jsxs("div", {
                  className: C.content,
                  children: [
                    u.jsxs("div", {
                      className: C.box1,
                      children: [
                        u.jsx("img", {
                          src: YO,
                          className: C.badge,
                          alt: "badge",
                        }),
                        u.jsx("h1", {
                          className: C.title1,
                          children: n("HOW_TO_GET_SMALL"),
                        }),
                        u.jsx("h1", {
                          className: C.title2,
                          children: "$SAN",
                        }),
                        u.jsx("h1", {
                          className: C.subTitle,
                          children: n("ON_DESKTOP"),
                        }),
                        u.jsx("span", {
                          className: C.pageTitle,
                          children: n("PAGE_1"),
                        }),
                      ],
                    }),
                    u.jsx(kC, {
                      title: n("INTRODUCTION"),
                      page: n("PAGE_2"),
                      content: [
                        n("INTRODUCTION_PARA_1"),
                        n("INTRODUCTION_PARA_2"),
                        n("INTRODUCTION_PARA_3"),
                      ],
                    }),
                  ],
                }),
              }),
              u.jsx("div", {
                className: C.sliderWrapper,
                children: u.jsxs("div", {
                  className: C.content,
                  children: [
                    u.jsx(kC, {
                      page: n("PAGE_3"),
                      title: n("CONNECT_WALLET"),
                      content: [
                        n("CONNECT_WALLET_PARA1"),
                        n("CONNECT_WALLET_PARA2"),
                        n("CONNECT_WALLET_PARA3"),
                      ],
                    }),
                    u.jsx(kC, {
                      title: n("SWAP"),
                      page: n("PAGE_4"),
                      content: [
                        n("SWAP_PARA_1"),
                        n("SWAP_PARA_2"),
                        n("SWAP_PARA_3"),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          u.jsxs("div", {
            className: C.headingContainer,
            children: [
              u.jsx(d1, {
                variant: "h2",
                strokeShadowY: 5,
                strokeWidth: 2,
                className: C.text1,
                text: n("PROJECT"),
              }),
              u.jsx(d1, {
                strokeWidth: 2,
                className: C.text1,
                variant: "h2",
                strokeShadowY: 5,
                text: n("UTILITIES"),
              }),
            ],
          }),
          !t &&
            u.jsxs("div", {
              className: C.imageContainer,
              children: [
                u.jsx("img", {
                  src: Ji,
                  className: C.catCards,
                  alt: "catShield ",
                }),
                u.jsx("img", {
                  src: qi,
                  className: C.advertisement,
                  alt: "advertisement ",
                }),
                u.jsx("img", {
                  src: Cs,
                  className: C.catShield,
                  alt: "catShield ",
                }),
              ],
            }),
          t &&
            u.jsx("div", {
              style: { padding: "2rem 0rem" },
              children: u.jsxs(tt, {
                ...a,
                ref: i,
                children: [
                  u.jsx("div", {
                    style: { width: "100%" },
                    children: u.jsx("img", {
                      src: Ji,
                      className: C.catCards,
                      alt: "catShield ",
                    }),
                  }),
                  u.jsx("div", {
                    style: { width: "100%" },
                    children: u.jsx("img", {
                      src: qi,
                      className: C.advertisement,
                      alt: "advertisement ",
                    }),
                  }),
                  u.jsx("div", {
                    style: { width: "100%" },
                    children: u.jsx("img", {
                      src: Cs,
                      className: C.catShield,
                      alt: "catShield ",
                    }),
                  }),
                ],
              }),
            }),
          u.jsxs("div", {
            className: C.links,
            children: [
              u.jsxs("div", {
                className: r === 0 ? e(C.link, C.linkActive) : C.link,
                onClick: t ? () => o(0) : void 0,
                children: [
                  u.jsx(x1, {
                    variant: "h4",
                    fontFamily: "'Boogaloo'",
                    children: n("NFT"),
                  }),
                  u.jsx("svg", {
                    width: "27",
                    height: "41",
                    viewBox: "0 0 27 41",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: u.jsx("path", {
                      d: "M7.26968 8H26V26.8316M1 33L25.8656 8",
                      stroke: r === 0 ? "white" : "black",
                      strokeWidth: "3",
                      strokeLinecap: "round",
                    }),
                  }),
                ],
              }),
              u.jsxs("div", {
                className: r === 1 ? e(C.link, C.linkActive) : C.link,
                onClick: t ? () => o(1) : void 0,
                children: [
                  u.jsx(x1, {
                    variant: "h4",
                    fontFamily: "'Boogaloo'",
                    children: n("X100_MASSIVE_MARKETING"),
                  }),
                  u.jsx("svg", {
                    width: "27",
                    height: "41",
                    viewBox: "0 0 27 41",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: u.jsx("path", {
                      d: "M7.26968 8H26V26.8316M1 33L25.8656 8",
                      stroke: r === 1 ? "white" : "black",
                      strokeWidth: "3",
                      strokeLinecap: "round",
                    }),
                  }),
                ],
              }),
              u.jsxs("div", {
                className: r === 2 ? e(C.link, C.linkActive) : C.link,
                onClick: t ? () => o(2) : void 0,
                children: [
                  u.jsxs(x1, {
                    variant: "h4",
                    fontFamily: "'Boogaloo'",
                    children: [n("LP_BURNT_FOREVER"), " 🔥🔥🔥"],
                  }),
                  u.jsx("svg", {
                    width: "27",
                    height: "41",
                    viewBox: "0 0 27 41",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: u.jsx("path", {
                      d: "M7.26968 8H26V26.8316M1 33L25.8656 8",
                      stroke: r === 2 ? "white" : "black",
                      strokeWidth: "3",
                      strokeLinecap: "round",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  },
  kC = ({ title: C, content: e, width: t, page: n }) => {
    const { classes: r } = Wc();
    return u.jsxs("div", {
      className: r.box2,
      style: { width: t },
      children: [
        u.jsx("h1", { className: r.title, children: C }),
        u.jsx("div", {
          className: r.intro,
          children: e.map((o, i) => u.jsx("p", { children: o }, i)),
        }),
        u.jsx("span", { className: r.pageTitle, children: n }),
      ],
    });
  },
  JO =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAS0SURBVHgBnVZfaJtVFD83aZcsMe03IRM2tnwFhdlM15cUocXFPYisqBvCQHFY32R9cKJQ0YelD8Lck3voXnyw4KCylxXH+jLFDBYYjVBLbaeIJOnWII2wpDGx8Wu/6zn3u/fmpknptgMn+e6/8/udc8+95wLsLhbqKOo3qDnUh6hc6jzqdTlu7WaI7QLyIer5UP+Qte/EOxB6fhh8T/VyX6hHTGjkFtlGYRGqc7NQzc6WsWsK9TJq/nHAkuTJ0yMf2NEz49wftmgi45zrCfTNmLcce7lTug9/X7vIyunpPHZ9hDrzKGAXuqOHUgfGJiEcH4bHlY38Ity/9C4geAqbE+aYvxOQnboBwb4XdjRInrBORBnjfms/9AyOsOrczaRbX69g7109bEwd6I4eno9NfM/3RA+zNsNoyOvg3rf8F+GUdkwS6Bn/85OXmVuvvILNNPX5DLDr+8+MAwGJRbgfzGPjGaL9IgD1LYFND/U3ksAIsUPjV2kiZbFlgo32Jt+OoepFZND10lv3EQHFXkBLlRO49l4KZjGE4sM2fp6XNoTknr2yENuDbHTwtm+JDJ0CVF6SHAz74MSBbijWXPih6HDTw9rSHShceJ32bl8X/iTD8SEb3TZYsbYkkHujQij6E9EuONe/FwajXWJOtrQJPxadJkskhBnNQ/Ehq76USdKsU5HESJsXzGBuSk83g7PPBVEDEOlunVJ1XI+Uz6cTSKxB+wh2isCOBfpeNL3gnUAOhnzstB1oASFPjlh+3b5X3tLhFpzxn4zJY3ScwAaCsbhJkYFxU1CoxjBUCRkqzwMOk8v/yvGQ7l/FPWsJvfzv8rbIJguWP9zb5kknEJLfkf1nP9fgSK8fvkiEW8aKdRcMIH0+5bm1PEvCdVeTmjoeaQMh+faPBlxcqItQfnos1DZORJrhkca8UIr0pnNW/m9tBcxU/zxbE4Z/k4uJ8ejtqgA61x/sCEShXXfat5tOvVurkPEy0c87a4UBPGN6cx/UXY6GFSPJksObdpBjaDtmKRETZ5C3AlKzgWUI5Rfy7HYj/6sccVnTuLgyjA1neGi3WNXpmKw6CtIdPYkIb+SE/QUCm6lmb6pZwHdIfeqfK23yt26tw6qRCEpW61tNr1y35b5cz87S5wyBpWtLmXJtOSPuNnXvbTfGvPAzAnp1tqJTv+mZa3rmkUZ7TmkFD/SdPOGoi/gyVVl9GJm6ImUZMS9cKVeWNwQoJQ9ptuS0kaP1pWtfUnNC9gmhEjBvT9yw6abWoTOvHoJjxhIiz70oGGmOdcTH1dpKepoVJ8fy2OyjPuUZPVbel+Vcg/l8TNcwEUS5p56XrOmBIqeuKlRnbUV5dVqNm8+CPHcaFXwpvRZJnAR9q3iZpUuG2jvo8CxQ+01AhdQbSHyFwvddJzCSu1jGGT7LqOxAl/UMmEBNL5sFT4bR68U59eUMPLh0lkmglGl8OxhJGgEXHt6aeglDagXso8rLZjrrDNJhZFu1CqxdTbG/vv64gOspdFPQ7vmOYoNXzt+LDJ60qObtxVIRiB0V/rj1Kmz+U4b6vQxUfpoGrMi07/RA/Qq8HHgiUc9vembPQ/PpTc/wHHgPmlF4hOf3/7hSNoExM7jPAAAAAElFTkSuQmCC",
  CM = "/assets/logo-mobile-MuN3yX5D.png",
  Kc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7ZVZCsAgDAVj8P5XTv9ECtmf0IIDCi5kCJFI9HfGay3OeRo2gkOYyr6XmXd/wYDg5h2mHGMbIUlGECm4dARRsaAFpmRSH/MRoDJQ6WSgFf1IDVSuoCSAdlUtA5hkF3i9ptRVSw0syFjTAUn7q/0OD9i6ESlTVIjFAAAAAElFTkSuQmCC",
  eM =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAmCAYAAAA820BcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdKSURBVHgB7Vd7bFtnFf999+Fr51HHTZw4r7Vp3SS1k3RbmpUV0bINlSAhRWsJGo8OTfwDowjEhsRDQhUgVCHQAA1WbepYNzamtIM2YTzKNKR1Wdola7pkSdtl6dw2SZ3ESZqHc/3IvR/n+242CqobZyDBH5wk9rXvyfmd5+98F/i//BdEzUYpVFP1KXeOp3JubmE4k059fW2jz7fm7qmpmX5kKSuCNzSE7vnC3pYnq6tCd5mzZufY5Hj0X3Vqamoadt21raN518eaL0VGr0xOTQ0gC1FWuM/KA/5Qid9fXJBnVTMWr7iR0ratt97idhsVa/L0QHmxd/3+/ftXsitFu9nN4PrgjqbbQr+4b08z7OlBRCJXjy/Eld3puXgPPKRgAtxQS7xrPO0/+N7XgNkhzE9uP/Dk00fO0d0O/DvgOmMuhdtUGwbbVYSazUFmMe33HJxyIiomr1BbW0UpZLC0tSgLeFld/cbahMI7BwcHpz8wOKR5RkAMrrwy7PvS5+kTA+cWRMUYo+xyLv+YTV/lFOETzTuh6/qPE8nUuomJiW/HYrH5TLZvWhuVfOOKcyU0FSZALSjyWrrlWBA+MC5d1XIK8fEPb0CZv/ArxcXFJfggka9du7Y1tjDb+Gb/RRw83OFEJ83bYArFz8gx25ZZEZkQ9xh5alMK7MVJDLxzBdOx6d2hUOhnlP4UViOGy3h3fWWQFxX6+eaaOq4oOmdMFcWmd4Xv3HEnP/rbg7yivIJXB2t5Q90WrmkurjChp0sdRdV4UVFRaSaMjGkvKy9rmYhFUV5aDk1VEA6FKNWQddZUFz7b2oL6cBDpVBLx+TisJRtbb98KX4GXdDjCG0tRVxMUptiqwYuLveae3buQr3NYM1NITkSRm+NBfq4Hj/9yP764916UBgJ4/tmfQ9WWMD89iejQeRTpChrra9DxzHcQrCoHj8czgmeseTJpoHBtHp769Y9gDQ/BVlQkGm7FWDyFqkAhEhTp3vv3oe3Iozjd2Y70xXcRmJ2kMJeQqAvDpcUQrPBipHZj6VTvW6OritzlSlArKUgaKkyfD2ZBATS3jheefQavnupDz6mzCJcF8Prrb6P9+J/w4p//iKTXi0XSg+qB6vLh+99oQZ6Re7KtrU3NOnJBj309nTvC4U3QA2UwAhVOp1MnP7zvM/jJwd8hPR7BA5/cgceeO4QQZeRzX70fOXlFVGExdzqx3wJdW1AV1aZuZ1mDnzhxojJQ4HnigfvupSazBSocFqGM5Afw3YceRHp+jMZOwQ/v+BCM3IC8x5Q0jZ2gIRo3MRcWXXPOadx41uCmaYL5jGXydGZZGpesRkRDLOPylkufxPQzomAnM6KK9F88TcppmnliBW1p9Q3HJZh4dQy+F7mcHMFmXDhiOzrL5ilKIh4FluB9ThtBvNsqy5T2GzacYRiSLAXIEhlLkyEueFb+sevcu95bJu/btorHDx/Da1290kfiBntgYIBnDZ5MJjmTSWdo/0sXfvPcC9I458tRLzv2z8KcXyLBS5HLiMcXJBXfTG4I7vF4ZGQi04lEClbsHJLmFIHzzJZkY5LjtsP/iqLJXrGJ9sPhcPaRw3Q7zUbR+bwuWLoPsWiUOtgCz8CWotYEiUOH29G0tR533/MRnL+8iIS1BOr27Gs+tTg6nbTQ0X32bezauQ1xpRA9J1+CnVqkBrq+7jLk5c8Mw5EJmMkF2gc+2rwpHHj0RczGFo+1trbaWYNfuHBhfmpm7qHnj/5Bpk61IGeXuslp9PfBnSXr9B7HS6900vgk0NSwAT39lzA3a+Lq3MQ3GWM3THvG06vf77bz84sKR0anG3vP9GFzZQ6q626DqhuyHM7os+tioAVEzl0ZncbZM4MYH4ugt38IEzNzjxBvzK8KPBq9lsjN83b2dL2hbtnk3t7SfDvyCtdBcRl4PxA5E4pzkKCX8lI/fO447LnLuByzkIbnQU9u/iuRSMReFbiQkZERUwcfqFwXdAcqy+64ZcMm4mqXQyz8HxELYC4dsVGYr2FdSS6Ov3wBnS+/8fXuvt5YJvsrHiCvxGJjJ7veHIiMRC1PwXr1zqYtkki4psPhQBuanRJnV9jJOdjmNTxxdMAai85+enBkePhmtlcEF3Lu4sXHdEWpj5vzX3Y6zoWdH90LM5VYClZXaE8f+ilcYgxTk3jqSBeO/fX0nr+dfO34SnazerJwFFW5QORRmaKNJxdHRyeiBef7I70Pf+uAOLfKaUglOK5enTazs5mtiJaRW4stNznD+Ph4PG4lWmhlU92X5Jle0oCazspu1uB0fLVtLj2grSV63CFugxviC8l84rAhfixL5/9RcOJPldnv7XV6t53HCW7QFrdN2Av0eEYMKL7VdS2rXspKSUjKpRx+tXuoqe/ceCOXe9s5JIgNOPTOGB751Qn5MDE5s9SWvLaY1TM6wyqkdkNtvZbjDoi4DEWZP33mzKmSkpLcUr9/u3hQAJ1cNcv9VvdgdxT/6/J3w2oHWYYMxl4AAAAASUVORK5CYII=",
  tM = "/assets/house-C4B8XJMo.png",
  nM = "/assets/Pinkcloud-BdaX6nju.png",
  rM = "/assets/cherryblossom-CKCf0aza.png",
  oM = X3()((C) => ({
    root: {
      position: "relative",
      minHeight: "calc(100vh - 80px)",
      overflowX: "hidden",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "120px",
      [C.breakpoints.down("md")]: { gap: "60px" },
      "& *": { fontFamily: "boogaloo" },
    },
    bobwifImg: {
      width: "70%",
      [C.breakpoints.down("md")]: { marginTop: "64px", width: "80%" },
    },
    // pinksaleContainer: {
    //   cursor: "pointer",
    //   width: "100%",
    //   display: "flex",
    //   gap: "1rem",
    //   padding: "1rem 2rem",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   maxWidth: "50%",
    //   background: "#F95093",
    //   margin: "0 auto",
    //   marginBottom: "1rem",
    //   border: "5px solid #000",
    //   boxShadow: "6px 6px 1px #000",
    //   color: "white",
    //   fontFamily: "Boogaloo",
    //   "& img": { width: "15%" },
    //   [C.breakpoints.down("md")]: { maxWidth: "90%", marginBottom: "0rem" },
    // },
    box1: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      flexDirection: "column",
      padding: "20px",
      gap: "5px",
      [C.breakpoints.down("md")]: { zoom: "0.8" },
      [C.breakpoints.down("sm")]: { zoom: "0.7" },
      boxShadow: "10px 10px 1px #000",
      width: "100%",
      height: "104px",
      maxWidth: "max-content",
      "& p": { display: "flex", alignItems: "center", gap: "10px" },
      border: "5px solid #000",
      backgroundColor: "#FFEC9E",
      "& img": { cursor: "pointer" },
    },
    box2: {
      height: "104px",
      backgroundColor: "#FAC483",
      width: "100%",
      maxWidth: "max-content",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      gap: "10px",
      padding: "20px",
      border: "5px solid #000",
      boxShadow: "10px 10px 1px #000",
      [C.breakpoints.down("md")]: { zoom: "0.8" },
      [C.breakpoints.down("sm")]: { zoom: "0.7" },
    },
    box3: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "20px 50px",
      gap: "15px",
      [C.breakpoints.down("md")]: { zoom: "0.8" },
      [C.breakpoints.down("sm")]: { zoom: "0.7" },
      boxShadow: "10px 10px 1px #000",
      width: "100%",
      height: "104px",
      maxWidth: "max-content",
      "& p": { display: "flex", alignItems: "center", gap: "10px" },
      border: "5px solid #000",
      backgroundColor: "#68E4FF",
      cursor: "pointer",
      "& img": { width: "50px", height: "50px" },
    },
    box4: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "20px 50px",
      gap: "15px",
      [C.breakpoints.down("md")]: { zoom: "0.8" },
      [C.breakpoints.down("sm")]: { zoom: "0.7" },
      boxShadow: "10px 10px 1px #000",
      width: "100%",
      height: "104px",
      maxWidth: "max-content",
      "& p": { display: "flex", alignItems: "center", gap: "10px" },
      border: "5px solid #000",
      backgroundColor: "#000000",
      color: "white",
      "& img": { cursor: "pointer", width: "50px", height: "50px" },
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
      [C.breakpoints.down("md")]: {
        padding: "20px",
        flexDirection: "column",
        gap: "20px",
      },
    },
    content1: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "50px",
      paddingBottom: "20px",
      [C.breakpoints.down("md")]: {
        padding: "20px",
        flexDirection: "column",
        gap: "20px",
      },
    },
    house: {
      position: "absolute",
      bottom: "0",
      left: "0",
      width: "100%",
      zIndex: -1,
      [C.breakpoints.down("md")]: {},
    },
    pinkCloud: {
      position: "absolute",
      transition: "all 5s ease",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "50%",
      height: "100%",
      "& img": { height: "100%" },
      left: "50%",
      transform: "translate(-50%, -50%)",
      WebkitBoxReflect: "right",
      animation: "cloud 10s infinite linear",
      zIndex: -12,
      "@keyframes cloud": { "0%": { left: "-10%" }, "100%": { left: "-100%" } },
    },
    cherryblossom: {
      width: "80%",
      position: "absolute",
      bottom: "0",
      right: "0",
      zIndex: -1,
    },
  })),
  iM =
    "/assets/twitter.png",
  sM = () => {
    const { classes: C } = oM(),
      [e, t] = L.useState(""),
      n = h5(),
      r = h7(n.breakpoints.down("sm")),
      { t: o } = L2(),
      i = () => {
        navigator.clipboard.writeText(E8).then(
          () => {
            t(E8);
          },
          (s) => {
            console.error("Unable to copy address to clipboard: ", s);
          }
        );
      };
    return u.jsxs("div", {
      className: C.root,
      id: e3.home,
      children: [
        u.jsx("img", {
          src: r ? CM : uc,
          className: C.bobwifImg,
          alt: "bobwif",
        }),
        u.jsxs("div", {
          children: [
            u.jsxs("div", {
              className: C.pinksaleContainer,
              onClick: () => window.open(l0, "_blank"),
              children: [
                u.jsx(x1, {
                  fontFamily: "Boogaloo",
                  variant: "h5",
                  children: o("JOIN_$BOBUKI_PRESALE"),
                }),
                u.jsx("img", { src: $e }),
              ],
            }),
            u.jsxs("div", {
              className: C.content1,
              children: [
                u.jsxs("div", {
                  className: C.box3,
                  onClick: () => window.open(u0, "_blank"),
                  children: [
                    u.jsx("h1", { children: o("BUY_ON_RAYDIUM") }),
                    u.jsx("img", { src: Ze, alt: "" }),
                  ],
                }),
                u.jsxs("div", {
                  className: C.box4,
                  onClick: () => window.open(ec, "_blank"),
                  style: { cursor: "pointer" },
                  children: [
                    u.jsx("h1", { children: o("BUY_ON_JUPITER") }),
                    u.jsx("img", { src: iM, alt: "telegram" }),
                  ],
                }),
              ],
            }),
            u.jsxs("div", {
              className: C.content,
              children: [
                u.jsxs("div", {
                  className: C.box1,
                  children: [
                    u.jsxs("h1", {
                      children: [o("$BOBUKI_CONTRACT_ADDRESS")],
                    }),
                    u.jsxs("p", {
                      children: [
                        u.jsx("span", { children: E8 }),
                        u.jsx(Xu, {
                          arrow: !0,
                          title: e ? "Address Copied!" : "Copy Address",
                          children: u.jsx("img", {
                            src: Kc,
                            alt: "clipboardIcon",
                            onClick: i,
                            style: { cursor: "pointer" },
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className: C.box2,
                  onClick: () => window.open(Dn, "_blank"),
                  style: { cursor: "pointer" },
                  children: [
                    u.jsx("img", { src: eM, alt: "" }),
                    u.jsx("h1", { children: o("JOIN_COMMUNITY") }),
                    u.jsx("img", { src: JO, alt: "telegram" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        u.jsx("img", { src: tM, className: C.house, alt: "" }),
        u.jsx("div", {
          className: C.pinkCloud,
          children: [...Array(10)].map((s, a) =>
            u.jsx("img", { src: nM, alt: "pinkClouds" }, a)
          ),
        }),
        u.jsx("img", { src: rM, className: C.cherryblossom, alt: "" }),
      ],
    });
  },
  aM = X3()((C) => ({
    root: {
      width: "100%",
      background: "#fff",
      overflow: "hidden",
      display: "flex",
      position: "relative",
      alignItems: "center",
      height: "150px",
      gap: "3rem",
    },
    marqueeContainer: {
      top: "0",
      left: "100%",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "3rem",
      overflow: "hidden",
      position: "absolute",
      whiteSpace: "nowrap",
      animation: "marquee 20s linear infinite",
      [C.breakpoints.down("md")]: { width: "1920px", animationDuration: "8s" },
    },
    marqueeContainer2: {
      left: "100%",
      animationDelay: "10s",
      [C.breakpoints.down("md")]: { left: "1920px", animationDelay: "8s" },
    },
    marqueeLink: {
      width: "100%",
      "&:hover": { cursor: "pointer" },
      "&:first-of-type": { paddingLeft: "3rem" },
      "& img": { width: "100%" },
      "@keyframes marquee": {
        "0%": { left: "100%" },
        "100%": { left: "-100%" },
      },
      "@keyframes marquee2": {
        "0%": { left: "100%" },
        "100%": { left: "-100%" },
      },
    },
  })),
  es = () => {
    const { classes: C, cx: e } = aM();
    return u.jsxs("div", {
      className: C.root,
      children: [
        u.jsx("div", {
          className: C.marqueeContainer,
          children: di.map((t, n) =>
            u.jsx(
              "div",
              {
                className: C.marqueeLink,
                onClick: () => window.open(t.url, "_blank"),
                children: u.jsx("img", { src: t.img }),
              },
              n
            )
          ),
        }),
        u.jsx("div", {
          className: e(C.marqueeContainer, C.marqueeContainer2),
          children: di.map((t, n) =>
            u.jsx(
              "div",
              {
                className: C.marqueeLink,
                onClick: () => window.open(t.url, "_blank"),
                children: u.jsx("img", { src: t.img }),
              },
              n
            )
          ),
        }),
      ],
    });
  },
  ts = "/assets/logo-BYJ2PnrK.png",
  ns = "/assets/phase2cat-CSNId1J8.png",
  rs = "/assets/phase3cat-Dr1kBqXh.png",
  os = "/assets/phase4cat-D0pLNrQ8.png",
  is = "/assets/roadmapimg-DvlNj_D0.png",
  lM =
    "data:image/svg+xml,%3csvg%20width='1073'%20height='100'%20viewBox='0%200%201073%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20y1='1.5'%20x2='1023'%20y2='1.5'%20stroke='black'%20stroke-width='3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1040.99%206.57766C1036.21%204.59917%201031.15%203.42497%201026%203.09584L1026%2096.9042C1031.15%2096.575%201036.21%2095.4008%201040.99%2093.4223C1046.69%2091.0604%201051.87%2087.5984%201056.23%2083.234C1060.6%2078.8697%201064.06%2073.6884%201066.42%2067.9861C1068.78%2062.2838%201070%2056.1721%201070%2050C1070%2043.8279%201068.78%2037.7162%201066.42%2032.0139C1064.06%2026.3116%201060.6%2021.1303%201056.23%2016.766C1051.87%2012.4016%201046.69%208.93964%201040.99%206.57766ZM1026%2099.9099C1025%2099.9699%201024%20100%201023%20100L1023%2097L1023%203L1023%200C1024%20-4.37961e-08%201025%200.0301131%201026%200.0900801C1031.54%200.423088%201036.99%201.67671%201042.13%203.80602C1048.2%206.31875%201053.71%2010.0017%201058.36%2014.6447C1063%2019.2876%201066.68%2024.7996%201069.19%2030.8658C1071.71%2036.9321%201073%2043.4339%201073%2050C1073%2056.5661%201071.71%2063.0679%201069.19%2069.1342C1066.68%2075.2004%201063%2080.7124%201058.36%2085.3553C1053.71%2089.9983%201048.2%2093.6812%201042.13%2096.194C1036.99%2098.3233%201031.54%2099.5769%201026%2099.9099ZM1023%2097L1023%203L1026%203L1026%2097L1023%2097Z'%20fill='black'/%3e%3c/svg%3e",
  uM =
    "data:image/svg+xml,%3csvg%20width='488'%20height='100'%20viewBox='0%200%20488%20100'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='50'%20y1='1.5'%20x2='488'%20y2='1.5'%20stroke='black'%20stroke-width='3'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M32.0139%2093.4223C36.7904%2095.4008%2041.8541%2096.575%2047%2096.9042L47%203.09584C41.8541%203.42497%2036.7904%204.59917%2032.0139%206.57766C26.3116%208.93963%2021.1303%2012.4016%2016.766%2016.766C12.4016%2021.1303%208.93963%2026.3116%206.57766%2032.0139C4.21569%2037.7162%203%2043.8279%203%2050C3%2056.1721%204.21569%2062.2838%206.57766%2067.9861C8.93963%2073.6884%2012.4016%2078.8697%2016.766%2083.234C21.1303%2087.5984%2026.3116%2091.0604%2032.0139%2093.4223ZM47%200.0900803C47.9976%200.0301156%2048.9981%204.37961e-08%2050%200L50%203L50%2097L50%20100C48.9981%20100%2047.9976%2099.9699%2047%2099.9099C41.4598%2099.5769%2036.0064%2098.3233%2030.8658%2096.194C24.7995%2093.6812%2019.2876%2089.9983%2014.6447%2085.3553C10.0017%2080.7124%206.31876%2075.2004%203.80602%2069.1342C1.29329%2063.0679%20-3.52768e-06%2056.5661%20-3.8147e-06%2050C-4.10171e-06%2043.4339%201.29329%2036.9321%203.80602%2030.8658C6.31876%2024.7996%2010.0017%2019.2876%2014.6447%2014.6447C19.2876%2010.0017%2024.7995%206.31876%2030.8658%203.80602C36.0064%201.67671%2041.4598%200.423088%2047%200.0900803ZM50%203L50%2097L47%2097L47%202.99999L50%203Z'%20fill='black'/%3e%3c/svg%3e",
  cM =
    "data:image/svg+xml,%3csvg%20width='292'%20height='153'%20viewBox='0%200%20292%20153'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%201.5L242%201.5'%20stroke='black'%20stroke-width='3'/%3e%3cline%20x1='290.5'%20y1='153'%20x2='290.5'%20y2='50'%20stroke='black'%20stroke-width='3'/%3e%3cmask%20id='mask0_2006_278'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='192'%20y='0'%20width='100'%20height='50'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M198.578%2032.0139C196.599%2036.7904%20195.425%2041.8541%20195.096%2047L288.904%2047C288.575%2041.8541%20287.401%2036.7904%20285.422%2032.0139C283.06%2026.3116%20279.598%2021.1303%20275.234%2016.766C270.87%2012.4016%20265.688%208.93964%20259.986%206.57766C254.284%204.2157%20248.172%203%20242%203C235.828%203%20229.716%204.2157%20224.014%206.57766C218.312%208.93963%20213.13%2012.4016%20208.766%2016.766C204.402%2021.1303%20200.94%2026.3116%20198.578%2032.0139ZM291.91%2047C291.97%2047.9976%20292%2048.9981%20292%2050L289%2050L195%2050L192%2050C192%2048.9981%20192.03%2047.9976%20192.09%2047C192.423%2041.4598%20193.677%2036.0064%20195.806%2030.8658C198.319%2024.7995%20202.002%2019.2876%20206.645%2014.6447C211.288%2010.0017%20216.8%206.31876%20222.866%203.80603C228.932%201.29329%20235.434%202.16798e-06%20242%202.74201e-06C248.566%203.31604e-06%20255.068%201.29329%20261.134%203.80603C267.2%206.31877%20272.712%2010.0017%20277.355%2014.6447C281.998%2019.2876%20285.681%2024.7996%20288.194%2030.8658C290.323%2036.0064%20291.577%2041.4598%20291.91%2047ZM289%2050L195%2050L195%2047L289%2047L289%2050Z'%20fill='black'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_2006_278)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M259.986%206.57766C255.21%204.59917%20250.146%203.42497%20245%203.09584L245%2096.9042C250.146%2096.575%20255.21%2095.4008%20259.986%2093.4223C265.688%2091.0604%20270.87%2087.5984%20275.234%2083.234C279.598%2078.8697%20283.06%2073.6884%20285.422%2067.9861C287.784%2062.2838%20289%2056.1721%20289%2050C289%2043.8279%20287.784%2037.7162%20285.422%2032.0139C283.06%2026.3116%20279.598%2021.1303%20275.234%2016.766C270.87%2012.4016%20265.688%208.93964%20259.986%206.57766ZM245%2099.9099C244.002%2099.9699%20243.002%20100%20242%20100L242%2097L242%203L242%200C243.002%20-4.37961e-08%20244.002%200.0301131%20245%200.0900801C250.54%200.423088%20255.994%201.67671%20261.134%203.80602C267.2%206.31875%20272.712%2010.0017%20277.355%2014.6447C281.998%2019.2876%20285.681%2024.7996%20288.194%2030.8658C290.707%2036.9321%20292%2043.4339%20292%2050C292%2056.5661%20290.707%2063.0679%20288.194%2069.1342C285.681%2075.2004%20281.998%2080.7124%20277.355%2085.3553C272.712%2089.9983%20267.2%2093.6812%20261.134%2096.194C255.994%2098.3233%20250.54%2099.5769%20245%2099.9099ZM242%2097L242%203L245%203L245%2097L242%2097Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e",
  ss = "/assets/roadmapflowers-Dkm5UN0A.png",
  dM = X3()((C) => ({
    root: {
      width: "100%",
      height: "100%",
      borderTop: "1px solid black",
      padding: "4rem",
      background: `url(${ss})`,
      backgroundSize: "100% 100%",
      [C.breakpoints.down("md")]: { display: "none" },
    },
    heading: {
      color: C.palette.primary.main,
      fontSize: "8rem !important",
      [C.breakpoints.down("md")]: { fontSize: "4rem !important" },
    },
    roadmapImgContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    roadmapimg: {
      width: "50%",
      animation: "floatImg 5s infinite linear",
      "@keyframes floatImg": {
        "0%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-100px)" },
        "100%": { transform: "translateY(0px)" },
      },
    },
    roadmap: {
      maxWidth: "1200px",
      width: "100%",
      margin: "0 auto",
      fontFamily: "Nunito",
    },
    phase1Container: {
      display: "flex",
      gap: "0.5rem",
      maxWidth: "100%",
      width: "100%",
    },
    phase1: { fontFamily: "Nunito" },
    firstLine: {
      marginTop: "0rem",
      backgroundImage: `url("${lM}")`,
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "120px",
    },
    phase2Container: {
      maxWidth: "80%",
      width: "100%",
      marginLeft: "auto",
      marginTop: "2rem",
      display: "flex",
      gap: "0.5rem",
    },
    phase2: { width: "100%", marginTop: "-3rem", fontFamily: "Nunito" },
    secondLine: {
      width: "100%",
      backgroundImage: `url("${uM}")`,
      marginTop: "-1rem",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      height: "120px",
    },
    phase3Container: {
      width: "100%",
      marginTop: "3rem",
      marginLeft: "0rem",
      display: "flex",
      gap: "0.5rem",
    },
    phase3: { width: "100%", maxWidth: "500px", marginLeft: "-2rem" },
    thirdLine: {
      width: "100%",
      backgroundImage: `url("${cM}")`,
      marginTop: "-1rem",
      backgroundRepeat: "no-repeat",
    },
    phase4Container: {
      display: "flex",
      gap: "0.5rem",
      marginLeft: "auto",
      maxWidth: "50%",
      justifyContent: "center",
    },
    phase4: {},
    phase1Text: { color: "#8DD7C0" },
    phase2Text: { color: "#FF5768" },
    phase3Text: { color: "#FFD871" },
    phase4Text: { color: "#01A5E4" },
    mobileRoot: {
      padding: "2rem 1rem",
      paddingTop: "2rem",
      width: "100%",
      minHeight: "100vh",
      background: `url(${ss})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      display: "none",
      [C.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sliderWrapper: {
      padding: "20px",
      "&:first-of-type": { marginTop: "2rem" },
      "& img": { height: "75px" },
    },
    dot: {
      width: "15px",
      height: "15px",
      borderRadius: "50%",
      background: "#d6d6d6",
      border: "1px solid black",
    },
    dotActive: { background: C.palette.primary.main },
  })),
  fM = () => {
    const { classes: C, cx: e } = dM(),
      t = h7(V8.breakpoints.down("md")),
      [n, r] = L.useState(0),
      { t: o } = L2(),
      i = cE(o),
      s = {
        dots: !0,
        arrow: !0,
        customPaging: function (a) {
          return u.jsx("div", {
            className: n === a ? e(C.dot, C.dotActive) : C.dot,
            children: u.jsx("div", { style: { opacity: 0 }, children: a + 1 }),
          });
        },
        infinite: !1,
        dotsClass: "slick-dots",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (a) => {
          r(a);
        },
        autoplay: !1,
        autoplaySpeed: 5e3,
      };
    return u.jsxs(u.Fragment, {
      children: [
        !t &&
          u.jsxs("div", {
            className: C.root,
            id: e3.roadmap,
            children: [
              u.jsx(d1, {
                text: o("ROADMAP"),
                variant: "h1",
                strokeWidth: t ? 1 : 2,
                strokeShadowY: t ? 4 : 8,
                className: C.heading,
              }),
              u.jsx("div", {
                className: C.roadmapImgContainer,
                children: u.jsx("img", {
                  src: is,
                  alt: "",
                  className: C.roadmapimg,
                }),
              }),
              u.jsxs("div", {
                className: C.roadmap,
                children: [
                  u.jsxs("div", {
                    className: C.phase1Container,
                    children: [
                      u.jsxs("div", {
                        className: C.phase1,
                        children: [
                          u.jsxs("div", {
                            style: {
                              position: "relative",
                              display: "flex",
                              gap: "1rem",
                              justifyContent: "flex-start",
                            },
                            children: [
                              u.jsx(d1, {
                                text: i.phase1.title,
                                className: C.phase1Text,
                                variant: "h4",
                                strokeWidth: 1,
                                strokeShadowY: 3,
                              }),
                              u.jsx("img", {
                                src: ts,
                                alt: "",
                                style: {
                                  marginRight: "1rem",
                                  marginTop: "-3rem",
                                },
                              }),
                            ],
                          }),
                          u.jsx("ul", {
                            children: i.phase1.steps.map((a, l) =>
                              u.jsxs(
                                "li",
                                {
                                  children: [
                                    u.jsxs("b", { children: [a.title, ":"] }),
                                    " ",
                                    a.description,
                                  ],
                                },
                                l
                              )
                            ),
                          }),
                        ],
                      }),
                      u.jsx("div", { className: C.firstLine }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: C.phase2Container,
                    children: [
                      u.jsx("div", { className: C.secondLine }),
                      u.jsxs("div", {
                        className: C.phase2,
                        children: [
                          u.jsxs("div", {
                            style: { display: "flex" },
                            children: [
                              u.jsx(d1, {
                                text: i.phase2.title,
                                className: C.phase2Text,
                                variant: "h4",
                                strokeWidth: 1,
                                strokeShadowY: 3,
                              }),
                              u.jsx("img", {
                                src: ns,
                                alt: "",
                                height: 140,
                                style: {
                                  marginTop: "-5rem",
                                  marginRight: "5rem",
                                  aspectRatio: "1/1",
                                },
                              }),
                            ],
                          }),
                          u.jsx("ul", {
                            children: i.phase2.steps.map((a, l) =>
                              u.jsxs(
                                "li",
                                {
                                  children: [
                                    u.jsxs("b", { children: [a.title, ":"] }),
                                    " ",
                                    a.description,
                                  ],
                                },
                                l
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: C.phase3Container,
                    children: [
                      u.jsxs("div", {
                        className: C.phase3,
                        children: [
                          u.jsxs("div", {
                            style: { display: "flex", gap: "2rem" },
                            children: [
                              u.jsx(d1, {
                                text: i.phase3.title,
                                className: C.phase3Text,
                                variant: "h4",
                                strokeWidth: 1,
                                strokeShadowY: 3,
                              }),
                              u.jsx("img", {
                                src: rs,
                                alt: "",
                                style: { width: "30%", marginTop: "-6rem" },
                              }),
                            ],
                          }),
                          u.jsx("ul", {
                            children: i.phase3.steps.map((a, l) =>
                              u.jsxs(
                                "li",
                                {
                                  children: [
                                    u.jsxs("b", { children: [a.title, ":"] }),
                                    " ",
                                    a.description,
                                  ],
                                },
                                l
                              )
                            ),
                          }),
                        ],
                      }),
                      u.jsx("div", { className: C.thirdLine }),
                    ],
                  }),
                  u.jsx("div", {
                    className: C.phase4Container,
                    children: u.jsxs("div", {
                      className: C.phase4,
                      children: [
                        u.jsx("img", { src: os, alt: "" }),
                        u.jsx(d1, {
                          text: i.phase4.title,
                          className: C.phase4Text,
                          variant: "h4",
                          strokeWidth: 1,
                          strokeShadowY: 3,
                        }),
                        u.jsx("ul", {
                          children: i.phase4.steps.map((a, l) =>
                            u.jsxs(
                              "li",
                              {
                                children: [
                                  u.jsxs("b", { children: [a.title, ":"] }),
                                  " ",
                                  a.description,
                                ],
                              },
                              l
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        t &&
          u.jsxs("div", {
            className: C.mobileRoot,
            id: e3.roadmap,
            children: [
              u.jsx(d1, {
                text: "ROADMAP",
                variant: "h1",
                strokeWidth: t ? 1 : 2,
                strokeShadowY: 6,
                className: C.heading,
              }),
              u.jsx("img", { src: is, alt: "", style: { width: "100%" } }),
              u.jsx("div", {
                style: { width: "100%" },
                children: u.jsxs(tt, {
                  ...s,
                  children: [
                    u.jsxs("div", {
                      className: C.sliderWrapper,
                      children: [
                        u.jsxs("div", {
                          className: C.phase1,
                          children: [
                            u.jsxs("div", {
                              style: {
                                position: "relative",
                                display: "flex",
                                gap: "1rem",
                                justifyContent: "flex-start",
                              },
                              children: [
                                u.jsx(d1, {
                                  text: i.phase1.title,
                                  className: C.phase1Text,
                                  variant: "h3",
                                  strokeWidth: 1,
                                  strokeShadowY: 3,
                                }),
                                u.jsx("img", {
                                  src: ts,
                                  alt: "",
                                  style: { marginTop: "-1rem" },
                                  height: 100,
                                }),
                              ],
                            }),
                            u.jsx("ul", {
                              children: i.phase1.steps.map((a, l) =>
                                u.jsxs(
                                  "li",
                                  {
                                    children: [
                                      u.jsxs("b", { children: [a.title, ":"] }),
                                      " ",
                                      a.description,
                                    ],
                                  },
                                  l
                                )
                              ),
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: C.phase2,
                          style: { marginTop: "3rem", width: "auto" },
                          children: [
                            u.jsxs("div", {
                              style: {
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                              },
                              children: [
                                u.jsx("img", {
                                  src: ns,
                                  alt: "",
                                  height: 70,
                                  style: {
                                    marginRight: "0.5rem",
                                    aspectRatio: "1/1",
                                  },
                                }),
                                u.jsx(d1, {
                                  text: i.phase2.title,
                                  className: C.phase2Text,
                                  variant: "h3",
                                  strokeWidth: 1,
                                  strokeShadowY: 3,
                                }),
                              ],
                            }),
                            u.jsx("ul", {
                              children: i.phase2.steps.map((a, l) =>
                                u.jsxs(
                                  "li",
                                  {
                                    children: [
                                      u.jsxs("b", { children: [a.title, ":"] }),
                                      " ",
                                      a.description,
                                    ],
                                  },
                                  l
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsxs("div", {
                      className: C.sliderWrapper,
                      children: [
                        u.jsxs("div", {
                          className: C.phase3,
                          style: {
                            width: "auto",
                            fontFamily: "Nunito",
                            marginLeft: 0,
                            marginTop: "2rem",
                          },
                          children: [
                            u.jsxs("div", {
                              style: { display: "flex" },
                              children: [
                                u.jsx(d1, {
                                  text: i.phase3.title,
                                  className: C.phase3Text,
                                  variant: "h3",
                                  strokeWidth: 1,
                                  strokeShadowY: 3,
                                }),
                                u.jsx("img", {
                                  src: rs,
                                  alt: "",
                                  height: 100,
                                  style: {
                                    marginTop: "-1rem",
                                    marginRight: "2rem",
                                  },
                                }),
                              ],
                            }),
                            u.jsx("ul", {
                              children: i.phase3.steps.map((a, l) =>
                                u.jsxs(
                                  "li",
                                  {
                                    children: [
                                      u.jsxs("b", { children: [a.title, ":"] }),
                                      " ",
                                      a.description,
                                    ],
                                  },
                                  l
                                )
                              ),
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: C.phase4,
                          style: { fontFamily: "Nunito", marginTop: "2rem" },
                          children: [
                            u.jsxs("div", {
                              style: { display: "flex", alignItems: "center" },
                              children: [
                                u.jsx("img", { src: os, alt: "", height: 100 }),
                                u.jsx(d1, {
                                  text: i.phase4.title,
                                  className: C.phase4Text,
                                  variant: "h3",
                                  strokeWidth: 1,
                                  strokeShadowY: 3,
                                }),
                              ],
                            }),
                            u.jsx("ul", {
                              children: i.phase4.steps.map((a, l) =>
                                u.jsxs(
                                  "li",
                                  {
                                    children: [
                                      u.jsxs("b", { children: [a.title, ":"] }),
                                      " ",
                                      a.description,
                                    ],
                                  },
                                  l
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
      ],
    });
  },
  as = "/assets/tokenomicsbg-D9yR7PYC.png",
  pM = "/assets/mountain-DvsQsccc.png",
  hM = X3()((C) => ({
    root: {
      backgroundImage: ` url(${pM}),linear-gradient(0deg,#fbba23c7, #fbba23c7), url(${as})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "37% 70%, 100% 100%, 100% 100%",
      backgroundPosition: "0% 105%, 0% 0%, 0% 0%",
      padding: "1rem 5rem 5rem 5rem",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      [C.breakpoints.down("md")]: { display: "none" },
    },
    tokenomicsHeading: { color: "#0EC9E3", textAlign: "center" },
    upper: {
      maxWidth: "30vw",
      height: "20vh",
      position: "relative",
      margin: "0 auto",
      gap: "0rem",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    holdersairdrop: {
      left: "50%",
      transform: "translateX(-50%)",
      top: "10%",
      position: "absolute",
      width: "40%",
    },
    walletairdrop: {
      left: "90%",
      transform: "translateX(-50%)",
      top: "18%",
      position: "absolute",
      width: "60%",
    },
    presale: {
      left: "10%",
      transform: "translateX(-50%)",
      top: "10%",
      position: "absolute",
      width: "60%",
    },
    lower: {
      height: "40vh",
      maxWidth: "40vw",
      margin: "0 auto",
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      marginTop: "0%",
    },
    bobcat: {
      width: "40%",
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
    },
    burn: {
      position: "absolute",
      transform: "translateX(-50%)",
      top: "18%",
      left: "10%",
      width: "60%",
    },
    cex: {
      position: "absolute",
      transform: "translateX(-50%)",
      left: "95%",
      top: "15%",
      width: "70%",
    },
    textSection: {
      marginTop: "-3%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    text: { color: "#fff" },
    yellowText: { color: "#0EC9E3" },
    btnsContainer: {
      marginTop: "1rem",
      display: "flex",
      gap: "3rem",
      zIndex: 1,
      position: "absolute",
      bottom: "-10%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      [C.breakpoints.down("md")]: {
        position: "unset",
        transform: "translate(0%, 0%)",
      },
    },
    auditButton: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      minWidth: "250px",
      justifyContent: "center",
      boxShadow: "10px 10px 1px #000",
      fontFamily: "Boogaloo",
      background: "#59F2A9",
      border: "5px solid #000",
      [C.breakpoints.down("md")]: {
        borderWidth: "4px",
        boxShadow: "5px 5px 1px #000",
        borderRadius: "0.5rem",
        padding: "0.6rem 1rem",
      },
    },
    mobileRoot: {
      paddingBottom: "3rem",
      display: "none",
      backgroundImage: `linear-gradient(0deg,#fbba23c7, #fbba23c7), url(${as})`,
      backgroundSize: "100% 100%",
      [C.breakpoints.down("md")]: { display: "block" },
    },
    mainHeading: { color: "#0EC9E3" },
    mobileHeading: {
      paddingTop: "2rem",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    amount: { marginTop: "-2rem" },
  })),
  mM = "/assets/presaleLiquidity-Dvq2mv6Q.png",
  gM = "/assets/zhpresaleLiquidity-BGLQcmBu.png",
  vM = "/assets/ptpresaleLiquidity-DIrElB00.png",
  yM = "/assets/holdersairdrop-BMUcrw-x.png",
  SM = "/assets/zhholdersairdrop-Amt75jt4.png",
  xM = "/assets/ptholdersairdrop-COXAxzMP.png",
  AM = "/assets/walletairdrop-CbIlGqXH.png",
  EM = "/assets/zhwalletairdrop-FJ17aGiY.png",
  wM = "/assets/ptwalletairdrop-gJaqTKPU.png",
  ls = "/assets/bobcat-D5qrZeMJ.png",
  LM = "/assets/enburn-vsF0mSGv.png",
  bM = "/assets/zhburn-BEXdaS93.png",
  TM = "/assets/ptBurn-1BG9gqH9.png",
  PM = "/assets/zhcex-CmO1MNEB.png",
  kM = "/assets/cex-CE_-dsrU.png",
  _M = X3()((C) => ({
    box1: {
      fontFamily: "Boogaloo",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      flexDirection: "column",
      padding: "20px",
      gap: "5px",
      [C.breakpoints.down("md")]: { zoom: "0.8" },
      [C.breakpoints.down("sm")]: { zoom: "0.7" },
      boxShadow: "10px 10px 1px #000",
      width: "100%",
      height: "104px",
      maxWidth: "max-content",
      "& p": { display: "flex", alignItems: "center", gap: "10px" },
      border: "5px solid #000",
      backgroundColor: "#FFEC9E",
      "& img": { cursor: "pointer" },
      [C.breakpoints.down("md")]: { borderRadius: "1rem" },
    },
  })),
  us = () => {
    const { classes: C } = _M(),
      [e, t] = L.useState(""),
      { t: n } = L2(),
      r = () => {
        navigator.clipboard.writeText(E8).then(
          () => {
            t(E8);
          },
          (o) => {
            console.error("Unable to copy address to clipboard: ", o);
          }
        );
      };
    return u.jsxs("div", {
      className: C.box1,
      children: [
        u.jsx("h1", { children: n("$BOBUKI_CONTRACT_ADDRESS") }),
        u.jsxs("p", {
          children: [
            u.jsxs("span", { children: [E8, " "] }),
            u.jsx(Xu, {
              arrow: !0,
              title: e ? "Address Copied!" : "Copy Address",
              children: u.jsx("img", {
                src: Kc,
                alt: "clipboardIcon",
                onClick: r,
                style: { cursor: "pointer" },
              }),
            }),
          ],
        }),
      ],
    });
  },
  cs =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcGSURBVHgBrZgLUFNXGsf/eZE3BBIekWcxlTc+Glbk2UHFLpU6uHZsXUrXRVZdn7vb7Yyz41S37Vrrdtfaat217fqc1q6MVtEqtrSgQlO1oFIVEBAjL0lMyIMkJOT23IvSWsGQtL+ZM+d+55757v9+373fPeey4B0xpB3y53KnkZ4FFovpfME25LrrdLt3kMP13no48m7C1HkrIicOWyEKgO8HX9BaLSj6vAIXdXfUbHhH6Myg4BGje9DO9EaHAxRFMcd6hx0GYl/S60bGWs1G9A860KDvQ73+DtrMJkSKJUiUBdGnlVz4SJvNipSqI+h8vhRrNDV4NkYFdXAo8k6UIyFAjqZ+A6wuJ6qf/g3mfPYpXlfPwDtXL6HRoMe8qFjsyc0f8eWziDfbmyDkcPG/5qvEouAmd33/zmnezshFbU8X/tVYj0G3GwWRMUgOlGPZuaoHBNB4mw4GvXMQ+7o7kEDCWX6zlRlzUm5GCIf1g0s65PYhl0d/Pok4qetBiB8fiQEytJgMkPOF+HdjA15t+AapQXJmzh4SoY3EfkEV79GfT+lIkvjjiydyEauKxdxOFVLIhWt7u8lDaUMJuehXPZ24elePpfEpyAxV4o20TEh5fggnkSmLT37In7evaN3OxGnpYX6CYUsuIx58CiYD/bzU9HQWeh2JnVGREJE00ARwfMznPZq4HKb3WsT8v/0DyseH85zAZ4HnW8Fk2Li0BCcO7vdKBH37sn0vL4eFFB2aMIUCCVPT8ExJKR6LS4CvjEcEHfH1fjzRy0mTnhJFSaYhKCIaHFIjHC4djC2tWJ4/C+qZOVixYROUUTHwFk8p5ZF2NPHx/A2Ln90rylaXQSQMhEQcCKEYpC6YkJKYh7/88SD4FiVWFuajo6UJ3uIpElsSVPlPz8r8Mwz9Whz67K/QC7qxYPciSOxsVL92CroKA7LTFyE3oxiBAWFYVTQHH9VdgVgqxXh5VCRU/pLQNdnqJdB21eOjqtXQr+Yi+VgBoiNCIFcpsHD3b1F87AVcuFWO09W7EKfKwERlOvZv2wJveJSI16ZPKYZryIHPv90K19uTgDnBmMGPemBSQHgAFh0oxqXOClz6rhJ5Wb/Dp7s/hJV8KX+uiBA2m7NQFZ2NGx1nYc4j0yaJEdTDhu2akZlgN9lxeMUh7FuwG4YOAwo2FeKs5hMIBBIoFXG4UP0lPBE3ZZqNdK1jiUhWBMaCxxOgTasBZpPFS6MZzt834tSaStRuP4sDC/cgI7UI6za+j693noNy8gRYub2wWA2IUCag9doVeOK5ZWvbSHdtLBFSHne4NA8OWoAgsnq6bMa8kiV4v7IWHcc7UVhUhlV/34z62jPwnzBcQcUKMQZsJhINKcymfnjiv5teSSTdjLHeDrPNMexEKJDRyyVglgIfr3wPyWnpKK9vAZvNxvYN63C2oRzPbC1i5tqNdgiFUtiIkGBxKDzR3dFO11v5WCKumCy9cDptmBCahI7aL4A/REG4LRWb1y5FX1cXWsinu1Fbwwjg8DjQNfeBa5FAKg5CZ3cTZqfOwXgZKx19Lpejok1bh5S4QnAPG4AuOyxhLBTsKsKJM/9Br+j6iAD3kBtHVpUz9cLhsOJW92VMzsjGzxVB81bD1SNkMS1CZvyLwMrvQGltuKGwoGBzIbJW5zAC7GY7Tq47jgjxZExN/TU03x5Gzty58JcFYrw8qmLe7tU1W85d+ECSlVYGmX84qkq34fyUW+CoE8EX8HH3ph5tp9sxPWkBnpxfwqShsf00drxTBW/gjjE2ky8Q/P/1Dz+WHHj3LVRr3kP61GIsXrAHt7ouoremBS4uhViFGoUlOUSQBOcbjkJz+RC2lldAGRn9kFPbgBWGvjsPLIbNJuOoIugYVsUHi6borE60N1+Hud+IG9fO1LTcrM6ZGJWF5LinkJa6EMwGjD2A+isnmUoZFCXHjuOnER4z8SEBDXVn8NLz88AVSsDx4zFjdpMJFrL8J9z58Vy6MFQuViupC6t+RR1bMp1isdi07H/eO59CmjZQGU758UWUgC+l5CFhVGZ+AfXmgcPU14YhSmN0j9qeyMqlSrfvpXb1DDHtjfOtlDwy2k38rf9xJMJI20sEzF4xIxJifxkEFL2rcl8n4y/dm0OXwNt/+qQyIkwVB4rsJZJE3HGtrAw6HeIznmSO9dqb2DI/j9JrO8qI+cF9EbSbr0rTJsQtT49gBDT3DaBkn4beMKwdzSmLbIRZHA68ZTQBNPQrOisrRvaAgBf3a3T9Nudccu4UfiF6WptGFXBfxN0+6yBMLjZu9zuw/OBFl3HAuXQMAV3NdTUjxiCFcbNzyXO0gFd+KoDmfkZf5bJZa9wULGQrt4zYR8fw9RhpFQKpf+Lwn4l7vyg8YLOYXW63e9loAmi+B1oCyQH6RZ5CAAAAAElFTkSuQmCC",
  OM = "/assets/presaleLiquidityMobile-CwTenLJV.png",
  MM = "/assets/zhpresaleLiquiditymobile-YRvBLumw.png",
  IM = "/assets/ptpresaleLiquiditymobile-BD6l1nDG.png",
  RM = "/assets/holdersairdropmobile-CYC_aBq2.png",
  NM = "/assets/zhholdersairdropmobile-wK5HxuPQ.png",
  HM = "/assets/ptholdersairdropmobile-CnzTeFxe.png",
  jM = "/assets/walletairdropmobile-Da7iAG4_.png",
  DM = "/assets/zhwalletairdropmobile-CSqdokaY.png",
  BM = "/assets/ptwalletairdropmobile-CZF69rGr.png",
  zM = "/assets/burnmobile-B1232C69.png",
  FM = "/assets/zhburnmobile-BfbtwGD1.png",
  VM = "/assets/ptBurnmobile-Ba69rS3V.png",
  UM = "/assets/cexmobile-Cw0eF7R7.png",
  $M = "/assets/zhcexmobile-BMXm-Rro.png",
  ZM = () => {
    const { classes: C, cx: e } = hM(),
      { t } = L2(),
      n = h7(V8.breakpoints.down("md")),
      r = localStorage.getItem("i18nextLng");
    return u.jsxs(u.Fragment, {
      children: [
        !n &&
          u.jsxs("div", {
            className: C.root,
            id: "tokenomics",
            children: [
              u.jsx(d1, {
                text: t("TOKENOMICS"),
                className: C.tokenomicsHeading,
                variant: "h1",
                strokeShadowY: 8,
                strokeWidth: 2,
              }),
              u.jsxs("div", {
                className: C.upper,
                children: [
                  // u.jsx("img", {
                  //   src: r === "en" ? mM : r === "pt" ? vM : gM,
                  //   alt: "",
                  //   className: C.presale,
                  // }),
                  u.jsx("img", {
                    src: r === "en" ? yM : r === "pt" ? xM : SM,
                    alt: "",
                    className: C.holdersairdrop,
                  }),
                  // u.jsx("img", {
                  //   src: r === "en" ? AM : r === "pt" ? wM : EM,
                  //   alt: "",
                  //   className: C.walletairdrop,
                  // }),
                ],
              }),
              u.jsxs("div", {
                className: C.lower,
                children: [
                  u.jsx("img", {
                    src: r === "en" ? LM : r === "pt" ? TM : bM,
                    alt: "",
                    className: C.burn,
                  }),
                  u.jsx("img", { src: ls, alt: "", className: C.bobcat }),
                  u.jsx("img", {
                    src: r === "en" || r === "pt" ? kM : PM,
                    alt: "",
                    className: C.cex,
                  }),
                ],
              }),
              u.jsxs("div", {
                className: C.textSection,
                children: [
                  u.jsx(d1, {
                    text: "1,000,000,000",
                    strokeWidth: 2,
                    strokeShadowY: 6,
                    className: C.text,
                    variant: "h1",
                  }),
                  u.jsx(d1, {
                    text: t("TOTAL_SUPPLY"),
                    strokeWidth: 2,
                    strokeShadowY: 4,
                    className: C.yellowText,
                    variant: "h3",
                  }),
                  u.jsxs("div", {
                    className: C.btnsContainer,
                    children: [
                      u.jsx(us, {}),
                      // u.jsxs("div", {
                      //   className: C.auditButton,
                      //   onClick: () => window.open(ui, "_blank"),
                      //   children: [
                      //     u.jsx("h1", { children: t("AUDIT") }),
                      //     u.jsx("img", { src: cs, alt: "" }),
                      //   ],
                      // }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        n &&
          u.jsxs("div", {
            className: C.mobileRoot,
            id: e3.tokenomics,
            children: [
              u.jsxs("div", {
                className: C.mobileHeading,
                children: [
                  u.jsx(d1, {
                    text: t("TOKENOMICS"),
                    strokeWidth: 1,
                    strokeShadowY: 3,
                    variant: "h1",
                    className: C.mainHeading,
                  }),
                  u.jsx("img", { src: T6, alt: "", width: "70%" }),
                ],
              }),
              u.jsxs("div", {
                style: {
                  width: "100%",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: "3rem",
                  padding: "1rem",
                  gap: "1rem",
                },
                children: [
                  // u.jsx("div", {
                  //   style: { width: "calc(50% - 1rem)" },
                  //   children: u.jsx("img", {
                  //     src: r === "en" ? OM : r === "pt" ? IM : MM,
                  //     alt: "",
                  //     style: { width: "100%" },
                  //   }),
                  // }),
                  u.jsx("div", {
                    style: { width: "calc(50% - 1rem)" },
                    children: u.jsx("img", {
                      src: r === "en" ? RM : r === "pt" ? HM : NM,
                      alt: "",
                      style: { width: "100%" },
                    }),
                  }),
                  u.jsx("div", {
                    style: { width: "calc(50% - 1rem)" },
                    children: u.jsx("img", {
                      src: r === "en" ? zM : r === "pt" ? VM : FM,
                      alt: "",
                      style: { width: "100%" },
                    }),
                  }),
                  u.jsx("div", {
                    style: { width: "calc(50% - 1rem)" },
                    children: u.jsx("img", {
                      src: r === "en" || r === "pt" ? UM : $M,
                      alt: "",
                      style: { width: "100%" },
                    }),
                  }),
                  // u.jsx("div", {
                  //   style: { width: "calc(50% - 1rem)" },
                  //   children: u.jsx("img", {
                  //     src: r === "en" ? jM : r === "pt" ? BM : DM,
                  //     alt: "",
                  //     style: { width: "100%" },
                  //   }),
                  // }),
                ],
              }),
              u.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
                children: [
                  u.jsx("img", { src: ls, width: "70%" }),
                  u.jsx(d1, {
                    text: "1,000,000,000",
                    strokeWidth: 2,
                    strokeShadowY: 6,
                    className: e(C.text, C.amount),
                    variant: "h1",
                  }),
                  u.jsx(d1, {
                    text: t("TOTAL_SUPPLY"),
                    strokeWidth: 1,
                    strokeShadowY: 3,
                    className: e(C.text, C.mainHeading),
                    variant: "h2",
                  }),
                  u.jsxs("div", {
                    style: {
                      marginTop: "1rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    },
                    children: [
                      u.jsx(us, {}),
                      // u.jsxs("div", {
                      //   className: C.auditButton,
                      //   onClick: () => window.open(ui, "_blank"),
                      //   children: [
                      //     u.jsx("h1", { children: t("AUDIT") }),
                      //     u.jsx("img", { src: cs, alt: "" }),
                      //   ],
                      // }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  WM = () =>
    u.jsxs(u.Fragment, {
      children: [
        u.jsx(Ak, {}),
        u.jsx(sM, {}),
        u.jsx(qk, {}),
        u.jsx(Mk, {}),
        u.jsx(es, {}),
        u.jsx(ZM, {}),
        u.jsx(qO, {}),
        u.jsx(fM, {}),
        u.jsx(zk, {}),
        u.jsx(es, {}),
        u.jsx($k, {}),
      ],
    });
function KM() {
  return u.jsx(u.Fragment, { children: u.jsx(WM, {}) });
}
const GM = tn({ key: "mui", prepend: !0 });
OC.createRoot(document.getElementById("root")).render(
  u.jsx(Fl, {
    value: GM,
    children: u.jsx(_v, { theme: V8, children: u.jsx(KM, {}) }),
  })
);
