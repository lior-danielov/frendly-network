"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nanoid";
exports.ids = ["vendor-chunks/nanoid"];
exports.modules = {

/***/ "(ssr)/./node_modules/nanoid/index.js":
/*!**************************************!*\
  !*** ./node_modules/nanoid/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),\n/* harmony export */   customRandom: () => (/* binding */ customRandom),\n/* harmony export */   nanoid: () => (/* binding */ nanoid),\n/* harmony export */   random: () => (/* binding */ random),\n/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__.urlAlphabet)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"(ssr)/./node_modules/nanoid/url-alphabet/index.js\");\n\n\nconst POOL_SIZE_MULTIPLIER = 128\nlet pool, poolOffset\nlet fillPool = bytes => {\n  if (!pool || pool.length < bytes) {\n    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER)\n    crypto__WEBPACK_IMPORTED_MODULE_0__.randomFillSync(pool)\n    poolOffset = 0\n  } else if (poolOffset + bytes > pool.length) {\n    crypto__WEBPACK_IMPORTED_MODULE_0__.randomFillSync(pool)\n    poolOffset = 0\n  }\n  poolOffset += bytes\n}\nlet random = bytes => {\n  fillPool((bytes -= 0))\n  return pool.subarray(poolOffset - bytes, poolOffset)\n}\nlet customRandom = (alphabet, defaultSize, getRandom) => {\n  let mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1\n  let step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length)\n  return (size = defaultSize) => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      let i = step\n      while (i--) {\n        id += alphabet[bytes[i] & mask] || ''\n        if (id.length === size) return id\n      }\n    }\n  }\n}\nlet customAlphabet = (alphabet, size = 21) =>\n  customRandom(alphabet, size, random)\nlet nanoid = (size = 21) => {\n  fillPool((size -= 0))\n  let id = ''\n  for (let i = poolOffset - size; i < poolOffset; i++) {\n    id += _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_1__.urlAlphabet[pool[i] & 63]\n  }\n  return id\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFub2lkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkI7QUFDMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0EsSUFBSTtBQUNKLElBQUksa0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRCxVQUFVLCtEQUFXO0FBQ3JCO0FBQ0E7QUFDQTtBQUNvRSIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5qcz83NmRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xuaW1wb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcbmNvbnN0IFBPT0xfU0laRV9NVUxUSVBMSUVSID0gMTI4XG5sZXQgcG9vbCwgcG9vbE9mZnNldFxubGV0IGZpbGxQb29sID0gYnl0ZXMgPT4ge1xuICBpZiAoIXBvb2wgfHwgcG9vbC5sZW5ndGggPCBieXRlcykge1xuICAgIHBvb2wgPSBCdWZmZXIuYWxsb2NVbnNhZmUoYnl0ZXMgKiBQT09MX1NJWkVfTVVMVElQTElFUilcbiAgICBjcnlwdG8ucmFuZG9tRmlsbFN5bmMocG9vbClcbiAgICBwb29sT2Zmc2V0ID0gMFxuICB9IGVsc2UgaWYgKHBvb2xPZmZzZXQgKyBieXRlcyA+IHBvb2wubGVuZ3RoKSB7XG4gICAgY3J5cHRvLnJhbmRvbUZpbGxTeW5jKHBvb2wpXG4gICAgcG9vbE9mZnNldCA9IDBcbiAgfVxuICBwb29sT2Zmc2V0ICs9IGJ5dGVzXG59XG5sZXQgcmFuZG9tID0gYnl0ZXMgPT4ge1xuICBmaWxsUG9vbCgoYnl0ZXMgLT0gMCkpXG4gIHJldHVybiBwb29sLnN1YmFycmF5KHBvb2xPZmZzZXQgLSBieXRlcywgcG9vbE9mZnNldClcbn1cbmxldCBjdXN0b21SYW5kb20gPSAoYWxwaGFiZXQsIGRlZmF1bHRTaXplLCBnZXRSYW5kb20pID0+IHtcbiAgbGV0IG1hc2sgPSAoMiA8PCAoMzEgLSBNYXRoLmNsejMyKChhbHBoYWJldC5sZW5ndGggLSAxKSB8IDEpKSkgLSAxXG4gIGxldCBzdGVwID0gTWF0aC5jZWlsKCgxLjYgKiBtYXNrICogZGVmYXVsdFNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuICByZXR1cm4gKHNpemUgPSBkZWZhdWx0U2l6ZSkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgbGV0IGkgPSBzdGVwXG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2ldICYgbWFza10gfHwgJydcbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gc2l6ZSkgcmV0dXJuIGlkXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5sZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUgPSAyMSkgPT5cbiAgY3VzdG9tUmFuZG9tKGFscGhhYmV0LCBzaXplLCByYW5kb20pXG5sZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT4ge1xuICBmaWxsUG9vbCgoc2l6ZSAtPSAwKSlcbiAgbGV0IGlkID0gJydcbiAgZm9yIChsZXQgaSA9IHBvb2xPZmZzZXQgLSBzaXplOyBpIDwgcG9vbE9mZnNldDsgaSsrKSB7XG4gICAgaWQgKz0gdXJsQWxwaGFiZXRbcG9vbFtpXSAmIDYzXVxuICB9XG4gIHJldHVybiBpZFxufVxuZXhwb3J0IHsgbmFub2lkLCBjdXN0b21BbHBoYWJldCwgY3VzdG9tUmFuZG9tLCB1cmxBbHBoYWJldCwgcmFuZG9tIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nanoid/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)\n/* harmony export */ });\nlet urlAlphabet =\n  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFub2lkL3VybC1hbHBoYWJldC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3NvY2lhbC1uZXR3b3JrLy4vbm9kZV9tb2R1bGVzL25hbm9pZC91cmwtYWxwaGFiZXQvaW5kZXguanM/ZDRlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgdXJsQWxwaGFiZXQgPVxuICAndXNlYW5kb20tMjZUMTk4MzQwUFg3NXB4SkFDS1ZFUllNSU5EQlVTSFdPTEZfR1FaYmZnaGprbHF2d3l6cmljdCdcbmV4cG9ydCB7IHVybEFscGhhYmV0IH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nanoid/url-alphabet/index.js\n");

/***/ })

};
;