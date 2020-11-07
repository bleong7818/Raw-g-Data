/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! namespace exports */
/*! export fetchAddedData [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchMetacriticData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAddedData\": () => /* binding */ fetchAddedData,\n/* harmony export */   \"fetchMetacriticData\": () => /* binding */ fetchMetacriticData\n/* harmony export */ });\nconst fetchAddedData = (number) => {\n    // debugger;\n    // console.log('here')\n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\");\n            }\n            return res.json();\n        }).then(data => {\n            // debugger;\n            // console.log(data);\n            const half = data.results.splice(15, 19);\n            // debugger;\n            // const sorted \n            // debugger;\n            // if (truth) {\n            //     const sorted = data.results.sort((a, b) => {\n            //         return (a.metacritic < b.metacritic) ? 1 : -1\n            //     })\n            // }\n            const games = data.results.map(game => {\n                return `\n            <li class=\"game\" style=\"height:${game.added / 35}px; width:${game.added / 35}px\">\n                <p> <img style=\"height:${game.added / 50}px; width:${game.added / 50}px\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n                <p> Title: ${game.name} </p>\n                <p> Added by ${game.added} users </p>\n            </li>\n            `\n            }).join('');\n            document.getElementById('games-list')\n                .insertAdjacentHTML(\"afterbegin\", games);\n        }).catch(err => {\n            console.log(err);\n        });\n}\n\nconst fetchMetacriticData = (number) => {\n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\")\n            }\n            return res.json()\n        }).then(data => {\n            const half = data.results.splice(15, 19);\n            // debugger;\n            // const sorted \n            // debugger;\n            // if (truth) {\n            const sorted = data.results.sort((a, b) => {\n                    return (a.metacritic < b.metacritic) ? 1 : -1\n            })\n            const games = data.results.map(game => {\n                return `\n            <li class=\"game\">\n                <img style=\"height:${game.metacritic * 2}px; width:${game.metacritic * 2}px\" src=\"${game.background_image}\" alt=${game.name}/>\n                <p> Title: ${game.name} </p>\n                <p> metacritic score: ${game.metacritic} </p>\n            </li>\n            `\n            }).join('')\n            document.getElementById('games-list')\n                .insertAdjacentHTML(\"afterbegin\", games)\n        }).catch(err => {\n            console.log(err)\n        })\n}\n\n{/* <p> Name: ${game.name}, added by ${game.added} users, metacritic score: ${game.metacritic} </p> */}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZGF0YS5qcz9mNjAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0Esc0ZBQXNGLE9BQU8sU0FBUyxPQUFPO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0IsR0FBRyxTQUFTLGdCQUFnQjtBQUN6Rix5Q0FBeUMsZ0JBQWdCLEdBQUcsU0FBUyxnQkFBZ0IsV0FBVyxzQkFBc0IsUUFBUSxVQUFVO0FBQ3hJLDZCQUE2QixVQUFVO0FBQ3ZDLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFTztBQUNQLHNGQUFzRixPQUFPLFNBQVMsT0FBTztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxvQkFBb0IsR0FBRyxTQUFTLG9CQUFvQixXQUFXLHNCQUFzQixRQUFRLFVBQVU7QUFDNUksNkJBQTZCLFVBQVU7QUFDdkMsd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsQ0FBQyxlQUFlLFVBQVUsYUFBYSxXQUFXLDRCQUE0QixnQkFBZ0IiLCJmaWxlIjoiLi9zcmMvZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmZXRjaEFkZGVkRGF0YSA9IChudW1iZXIpID0+IHtcbiAgICAvLyBkZWJ1Z2dlcjtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVyZScpXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnJhd2cuaW8vYXBpL2dhbWVzP2tleT04MTE4M2Y1MDA0ZmI0NDYzODQzYTA2YmRlNTU3MzA4NiZkYXRlcz0ke251bWJlcn0tMDEtMDEsJHtudW1iZXJ9LTEyLTMxJm9yZGVyaW5nPS1hZGRlZC9gKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkVSUk9SXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgY29uc3QgaGFsZiA9IGRhdGEucmVzdWx0cy5zcGxpY2UoMTUsIDE5KTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgLy8gY29uc3Qgc29ydGVkIFxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAvLyBpZiAodHJ1dGgpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzb3J0ZWQgPSBkYXRhLnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gKGEubWV0YWNyaXRpYyA8IGIubWV0YWNyaXRpYykgPyAxIDogLTFcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgY29uc3QgZ2FtZXMgPSBkYXRhLnJlc3VsdHMubWFwKGdhbWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJnYW1lXCIgc3R5bGU9XCJoZWlnaHQ6JHtnYW1lLmFkZGVkIC8gMzV9cHg7IHdpZHRoOiR7Z2FtZS5hZGRlZCAvIDM1fXB4XCI+XG4gICAgICAgICAgICAgICAgPHA+IDxpbWcgc3R5bGU9XCJoZWlnaHQ6JHtnYW1lLmFkZGVkIC8gNTB9cHg7IHdpZHRoOiR7Z2FtZS5hZGRlZCAvIDUwfXB4XCIgc3JjPVwiJHtnYW1lLmJhY2tncm91bmRfaW1hZ2V9XCIgYWx0PSR7Z2FtZS5uYW1lfS8+IDwvcD5cbiAgICAgICAgICAgICAgICA8cD4gVGl0bGU6ICR7Z2FtZS5uYW1lfSA8L3A+XG4gICAgICAgICAgICAgICAgPHA+IEFkZGVkIGJ5ICR7Z2FtZS5hZGRlZH0gdXNlcnMgPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGdhbWVzKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hNZXRhY3JpdGljRGF0YSA9IChudW1iZXIpID0+IHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXM/a2V5PTgxMTgzZjUwMDRmYjQ0NjM4NDNhMDZiZGU1NTczMDg2JmRhdGVzPSR7bnVtYmVyfS0wMS0wMSwke251bWJlcn0tMTItMzEmb3JkZXJpbmc9LWFkZGVkL2ApXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiRVJST1JcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoYWxmID0gZGF0YS5yZXN1bHRzLnNwbGljZSgxNSwgMTkpO1xuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAvLyBjb25zdCBzb3J0ZWQgXG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIC8vIGlmICh0cnV0aCkge1xuICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gZGF0YS5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhLm1ldGFjcml0aWMgPCBiLm1ldGFjcml0aWMpID8gMSA6IC0xXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgY29uc3QgZ2FtZXMgPSBkYXRhLnJlc3VsdHMubWFwKGdhbWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJnYW1lXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT1cImhlaWdodDoke2dhbWUubWV0YWNyaXRpYyAqIDJ9cHg7IHdpZHRoOiR7Z2FtZS5tZXRhY3JpdGljICogMn1weFwiIHNyYz1cIiR7Z2FtZS5iYWNrZ3JvdW5kX2ltYWdlfVwiIGFsdD0ke2dhbWUubmFtZX0vPlxuICAgICAgICAgICAgICAgIDxwPiBUaXRsZTogJHtnYW1lLm5hbWV9IDwvcD5cbiAgICAgICAgICAgICAgICA8cD4gbWV0YWNyaXRpYyBzY29yZTogJHtnYW1lLm1ldGFjcml0aWN9IDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICB9KS5qb2luKCcnKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGdhbWVzKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxufVxuXG57LyogPHA+IE5hbWU6ICR7Z2FtZS5uYW1lfSwgYWRkZWQgYnkgJHtnYW1lLmFkZGVkfSB1c2VycywgbWV0YWNyaXRpYyBzY29yZTogJHtnYW1lLm1ldGFjcml0aWN9IDwvcD4gKi99Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data.js\n");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n;\n\nconst buttonResult = () => {\n    const popularity = document.getElementById(\"popularity\")\n    popularity.addEventListener(\"click\", e => {\n        let list = document.getElementById(\"games-list\")\n        while (list.lastChild) {\n            list.removeChild(list.lastChild);\n        }\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchAddedData)(2015);\n        // location.reload();\n    });\n\n    const critical = document.getElementById(\"metacritic\")\n    critical.addEventListener(\"click\", e => {\n        // location.reload();\n        // debugger;\n        // let list = document.getElementById('games-list')\n        // list.innerHTML = \"\";\n        let list = document.getElementById(\"games-list\")\n        while (list.lastChild) {\n            list.removeChild(list.lastChild);\n        }\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchMetacriticData)(2015);\n    });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonResult);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZmlsdGVyLmpzPzhiNjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxDQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFjO0FBQ3RCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQW1CO0FBQzNCLEtBQUs7O0FBRUw7O0FBRUEsaUVBQWUsWUFBWSxFQUFDIiwiZmlsZSI6Ii4vc3JjL2ZpbHRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoQWRkZWREYXRhLCBmZXRjaE1ldGFjcml0aWNEYXRhIH0gZnJvbSAnLi9kYXRhJ1xuXG5jb25zdCBidXR0b25SZXN1bHQgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdWxhcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdWxhcml0eVwiKVxuICAgIHBvcHVsYXJpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZXMtbGlzdFwiKVxuICAgICAgICB3aGlsZSAobGlzdC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoQWRkZWREYXRhKDIwMTUpO1xuICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNyaXRpY2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXRhY3JpdGljXCIpXG4gICAgY3JpdGljYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgIC8vIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAvLyBsaXN0LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lcy1saXN0XCIpXG4gICAgICAgIHdoaWxlIChsaXN0Lmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgbGlzdC5yZW1vdmVDaGlsZChsaXN0Lmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hNZXRhY3JpdGljRGF0YSgyMDE1KTtcbiAgICB9KTtcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uUmVzdWx0O1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/filter.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);\n;\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n    (0,_filter__WEBPACK_IMPORTED_MODULE_1__.default)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsQ0FBNEQ7QUFDeEI7QUFDRzs7QUFFdkM7O0FBRUEsSUFBSSxnREFBWTtBQUNoQixDQUFDIiwiZmlsZSI6Ii4vc3JjL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEFkZGVkRGF0YSwgZmV0Y2hNZXRhY3JpdGljRGF0YSB9IGZyb20gJy4vZGF0YSdcbmltcG9ydCBidXR0b25SZXN1bHQgZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgcmVuZGVyU2xpZGVyIH0gZnJvbSAnLi9zbGlkZXInXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcblxuICAgIGJ1dHRvblJlc3VsdCgpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("// export const renderSlider = () => {\n//     const slider = document.createElement(\"div\");\n//     slider.setAttribute(\"id\", \"slider-container\");\n//     slider.setAttribute(\"class\", \"slider\")\n\n//     const sliderInput = document.createElement(\"input\");\n//     sliderInput.setAttribute(\"id\", \"year-slider\");\n//     sliderInput.setAttribute(\"type\", \"range\");\n//     sliderInput.setAttribute(\"min\", \"2005\");\n//     sliderInput.setAttribute(\"max\", \"2019\");\n//     sliderInput.setAttribute(\"value\", \"2019\");\n//     sliderInput.setAttribute(\"step\", \"1\");\n\n//     const sliderLabel = document.createElement(\"spam\");\n//     sliderLabel.setAttribute(\"id\", \"slider-current-year\");\n//     sliderLabel.innerHTML = 2019;\n\n//     document.getElementById('games-list')\n//         .insertAdjacentHTML(\"afterbegin\", slider)\n\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvc2xpZGVyLmpzP2FkYjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiLi9zcmMvc2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXhwb3J0IGNvbnN0IHJlbmRlclNsaWRlciA9ICgpID0+IHtcbi8vICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgIHNsaWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNsaWRlci1jb250YWluZXJcIik7XG4vLyAgICAgc2xpZGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2xpZGVyXCIpXG5cbi8vICAgICBjb25zdCBzbGlkZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbi8vICAgICBzbGlkZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInllYXItc2xpZGVyXCIpO1xuLy8gICAgIHNsaWRlcklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbi8vICAgICBzbGlkZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIyMDA1XCIpO1xuLy8gICAgIHNsaWRlcklucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjIwMTlcIik7XG4vLyAgICAgc2xpZGVySW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIyMDE5XCIpO1xuLy8gICAgIHNsaWRlcklucHV0LnNldEF0dHJpYnV0ZShcInN0ZXBcIiwgXCIxXCIpO1xuXG4vLyAgICAgY29uc3Qgc2xpZGVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhbVwiKTtcbi8vICAgICBzbGlkZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNsaWRlci1jdXJyZW50LXllYXJcIik7XG4vLyAgICAgc2xpZGVyTGFiZWwuaW5uZXJIVE1MID0gMjAxOTtcblxuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lcy1saXN0Jylcbi8vICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgc2xpZGVyKVxuXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slider.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;