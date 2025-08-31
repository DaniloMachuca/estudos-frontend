"use strict";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//map é tipo um dicionario, conjunto de valores, valores esses q são como objetos

//criando o um map
var meuMap = new Map();
//setando a chave e dps o valor
meuMap.set("nome", "Danilo");
meuMap.set("stack", "html, css, js");
//mostra o map inteiro
console.log(meuMap);

//recupera um valor com a chave usando o get
var nome = meuMap.get("nome");
console.log(nome);

//vendo o tamanho do map
console.log(meuMap.size);

//verificando se há uma chave em um map
console.log(meuMap.has("nome"));
console.log(meuMap.has("sobrenome"));

//para recuperar as chaves
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    console.log(chave);
  }

  //para recuperar os valores
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    console.log(valor);
  }

  //para ver os pares de chaves e valores
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var _step3$value = _slicedToArray(_step3.value, 2),
      _chave = _step3$value[0],
      _valor = _step3$value[1];
    console.log("".concat(_chave, ": ").concat(_valor));
  }

  //usando o forEach para listar cada valor de um map
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
meuMap.forEach(function (valor, chave) {
  console.log("".concat(chave, ": ").concat(valor));
});

//removendo uma chave do map
meuMap.delete("stack");
console.log(meuMap);

//limpando o map
meuMap.clear();
console.log(meuMap.size);

//criando um set
var cpfs = new Set();

//adicionando valores ao set
cpfs.add("32791151087");
cpfs.add("66208876001");
cpfs.add("43112810058");
console.log(cpfs);

//provando q as chaves e valores são iguais
console.log(cpfs.keys());
console.log(cpfs.values());

//usando o forEach para listar cada valor de um set (funciona com o map tbm)
cpfs.forEach(function (valor) {
  console.log(valor);
});

//mostrando como o set não permite itens duplicados
var array = ["Gian Souza", "José Paulo", "Maria Isabel", "Luana", "Luana", "Gian Souza"];
var arraySet = new Set([].concat(array));
var arrayLimpo = _toConsumableArray(arraySet);
console.log(arrayLimpo);