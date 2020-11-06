/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAddedData\": () => /* binding */ fetchAddedData,\n/* harmony export */   \"fetchMetacriticData\": () => /* binding */ fetchMetacriticData\n/* harmony export */ });\nconst fetchAddedData = (number) => {\n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\");\n            }\n            return res.json();\n        }).then(data => {\n            console.log(data);\n            const half = data.results.splice(15, 19);\n            // debugger;\n            // const sorted \n            // debugger;\n            // if (truth) {\n            //     const sorted = data.results.sort((a, b) => {\n            //         return (a.metacritic < b.metacritic) ? 1 : -1\n            //     })\n            // }\n            const games = data.results.map(game => {\n                return `\n            <div class=\"game\" style=\"height:${game.added / 35}px; width:${game.added / 35}px\">\n                <p> <img style=\"height:${game.added / 50}px; width:${game.added / 50}px\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n                <p> Title: ${game.name} </p>\n                <p> Added by ${game.added} users </p>\n            </div>\n            `\n            }).join('');\n            document.getElementById('games-list')\n                .insertAdjacentHTML(\"afterbegin\", games);\n        }).catch(err => {\n            console.log(err);\n        });\n}\n\nconst fetchMetacriticData = (number) => {\n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\")\n            }\n            return res.json()\n        }).then(data => {\n            const half = data.results.splice(15, 19);\n            // debugger;\n            // const sorted \n            // debugger;\n            // if (truth) {\n            const sorted = data.results.sort((a, b) => {\n                    return (a.metacritic < b.metacritic) ? 1 : -1\n            })\n            const games = data.results.map(game => {\n                return `\n            <li class=\"game\">\n                <img style=\"height:${game.metacritic * 2}px; width:${game.metacritic * 2}px\" src=\"${game.background_image}\" alt=${game.name}/>\n                <p> Title: ${game.name} </p>\n                <p> metacritic score: ${game.metacritic} </p>\n            </li>\n            `\n            }).join('')\n            document.getElementById('games-list')\n                .insertAdjacentHTML(\"afterbegin\", games)\n        }).catch(err => {\n            console.log(err)\n        })\n}\n\n{/* <p> Name: ${game.name}, added by ${game.added} users, metacritic score: ${game.metacritic} </p> */}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZGF0YS5qcz9mNjAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUCxzRkFBc0YsT0FBTyxTQUFTLE9BQU87QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxnQkFBZ0IsR0FBRyxTQUFTLGdCQUFnQjtBQUMxRix5Q0FBeUMsZ0JBQWdCLEdBQUcsU0FBUyxnQkFBZ0IsV0FBVyxzQkFBc0IsUUFBUSxVQUFVO0FBQ3hJLDZCQUE2QixVQUFVO0FBQ3ZDLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFTztBQUNQLHNGQUFzRixPQUFPLFNBQVMsT0FBTztBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxvQkFBb0IsR0FBRyxTQUFTLG9CQUFvQixXQUFXLHNCQUFzQixRQUFRLFVBQVU7QUFDNUksNkJBQTZCLFVBQVU7QUFDdkMsd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsQ0FBQyxlQUFlLFVBQVUsYUFBYSxXQUFXLDRCQUE0QixnQkFBZ0IiLCJmaWxlIjoiLi9zcmMvZGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmZXRjaEFkZGVkRGF0YSA9IChudW1iZXIpID0+IHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXM/a2V5PTgxMTgzZjUwMDRmYjQ0NjM4NDNhMDZiZGU1NTczMDg2JmRhdGVzPSR7bnVtYmVyfS0wMS0wMSwke251bWJlcn0tMTItMzEmb3JkZXJpbmc9LWFkZGVkL2ApXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiRVJST1JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgY29uc3QgaGFsZiA9IGRhdGEucmVzdWx0cy5zcGxpY2UoMTUsIDE5KTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgLy8gY29uc3Qgc29ydGVkIFxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAvLyBpZiAodHJ1dGgpIHtcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBzb3J0ZWQgPSBkYXRhLnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gKGEubWV0YWNyaXRpYyA8IGIubWV0YWNyaXRpYykgPyAxIDogLTFcbiAgICAgICAgICAgIC8vICAgICB9KVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgY29uc3QgZ2FtZXMgPSBkYXRhLnJlc3VsdHMubWFwKGdhbWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FtZVwiIHN0eWxlPVwiaGVpZ2h0OiR7Z2FtZS5hZGRlZCAvIDM1fXB4OyB3aWR0aDoke2dhbWUuYWRkZWQgLyAzNX1weFwiPlxuICAgICAgICAgICAgICAgIDxwPiA8aW1nIHN0eWxlPVwiaGVpZ2h0OiR7Z2FtZS5hZGRlZCAvIDUwfXB4OyB3aWR0aDoke2dhbWUuYWRkZWQgLyA1MH1weFwiIHNyYz1cIiR7Z2FtZS5iYWNrZ3JvdW5kX2ltYWdlfVwiIGFsdD0ke2dhbWUubmFtZX0vPiA8L3A+XG4gICAgICAgICAgICAgICAgPHA+IFRpdGxlOiAke2dhbWUubmFtZX0gPC9wPlxuICAgICAgICAgICAgICAgIDxwPiBBZGRlZCBieSAke2dhbWUuYWRkZWR9IHVzZXJzIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgfSkuam9pbignJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZXMtbGlzdCcpXG4gICAgICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZ2FtZXMpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaE1ldGFjcml0aWNEYXRhID0gKG51bWJlcikgPT4ge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9rZXk9ODExODNmNTAwNGZiNDQ2Mzg0M2EwNmJkZTU1NzMwODYmZGF0ZXM9JHtudW1iZXJ9LTAxLTAxLCR7bnVtYmVyfS0xMi0zMSZvcmRlcmluZz0tYWRkZWQvYClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJFUlJPUlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhhbGYgPSBkYXRhLnJlc3VsdHMuc3BsaWNlKDE1LCAxOSk7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIC8vIGNvbnN0IHNvcnRlZCBcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgLy8gaWYgKHRydXRoKSB7XG4gICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBkYXRhLnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGEubWV0YWNyaXRpYyA8IGIubWV0YWNyaXRpYykgPyAxIDogLTFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBnYW1lcyA9IGRhdGEucmVzdWx0cy5tYXAoZ2FtZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImdhbWVcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPVwiaGVpZ2h0OiR7Z2FtZS5tZXRhY3JpdGljICogMn1weDsgd2lkdGg6JHtnYW1lLm1ldGFjcml0aWMgKiAyfXB4XCIgc3JjPVwiJHtnYW1lLmJhY2tncm91bmRfaW1hZ2V9XCIgYWx0PSR7Z2FtZS5uYW1lfS8+XG4gICAgICAgICAgICAgICAgPHA+IFRpdGxlOiAke2dhbWUubmFtZX0gPC9wPlxuICAgICAgICAgICAgICAgIDxwPiBtZXRhY3JpdGljIHNjb3JlOiAke2dhbWUubWV0YWNyaXRpY30gPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pLmpvaW4oJycpXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZXMtbGlzdCcpXG4gICAgICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZ2FtZXMpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG59XG5cbnsvKiA8cD4gTmFtZTogJHtnYW1lLm5hbWV9LCBhZGRlZCBieSAke2dhbWUuYWRkZWR9IHVzZXJzLCBtZXRhY3JpdGljIHNjb3JlOiAke2dhbWUubWV0YWNyaXRpY30gPC9wPiAqL30iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/data.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n;\n// export const popResult = () => {\n//     const popularity = document.getElementById(\"popularity\")\n//     popularity.addEventListener(\"click\", e => {\n//         return true;\n//     })\n// }\n\n// export const critcalResult = () => {\n//     const critical = document.getElementById(\"metacritic\")\n//     critical.addEventListener(\"click\", e => {\n//         return false;\n//     })\n// }\n\nconst buttonResult = () => {\n    const popularity = document.getElementById(\"popularity\")\n    popularity.addEventListener(\"click\", e => {\n        \n        ;(0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchAddedData)(2015);\n        // location.reload();\n    });\n\n    const critical = document.getElementById(\"metacritic\")\n    critical.addEventListener(\"click\", e => {\n        // location.reload();\n        ;(0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchMetacriticData)(2015);\n    });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonResult);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZmlsdGVyLmpzPzhiNjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxDQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxzREFBYztBQUN0QjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBbUI7QUFDM0IsS0FBSztBQUNMOztBQUVBLGlFQUFlLFlBQVksRUFBQyIsImZpbGUiOiIuL3NyYy9maWx0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaEFkZGVkRGF0YSwgZmV0Y2hNZXRhY3JpdGljRGF0YSB9IGZyb20gJy4vZGF0YSdcbi8vIGV4cG9ydCBjb25zdCBwb3BSZXN1bHQgPSAoKSA9PiB7XG4vLyAgICAgY29uc3QgcG9wdWxhcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdWxhcml0eVwiKVxuLy8gICAgIHBvcHVsYXJpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuLy8gICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICB9KVxuLy8gfVxuXG4vLyBleHBvcnQgY29uc3QgY3JpdGNhbFJlc3VsdCA9ICgpID0+IHtcbi8vICAgICBjb25zdCBjcml0aWNhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWV0YWNyaXRpY1wiKVxuLy8gICAgIGNyaXRpY2FsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgIH0pXG4vLyB9XG5cbmNvbnN0IGJ1dHRvblJlc3VsdCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3B1bGFyaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3B1bGFyaXR5XCIpXG4gICAgcG9wdWxhcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIFxuICAgICAgICBmZXRjaEFkZGVkRGF0YSgyMDE1KTtcbiAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjcml0aWNhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWV0YWNyaXRpY1wiKVxuICAgIGNyaXRpY2FsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIGZldGNoTWV0YWNyaXRpY0RhdGEoMjAxNSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b25SZXN1bHQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/filter.js\n");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    (0,_filter__WEBPACK_IMPORTED_MODULE_1__.default)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLENBQTREO0FBQ3hCOztBQUVwQztBQUNBLElBQUksZ0RBQVk7QUFDaEIsQ0FBQyIsImZpbGUiOiIuL3NyYy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hBZGRlZERhdGEsIGZldGNoTWV0YWNyaXRpY0RhdGEgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgYnV0dG9uUmVzdWx0IGZyb20gJy4vZmlsdGVyJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGJ1dHRvblJlc3VsdCgpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main.js\n");

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