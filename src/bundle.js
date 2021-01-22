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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAddedData\": () => /* binding */ fetchAddedData,\n/* harmony export */   \"fetchMetacriticData\": () => /* binding */ fetchMetacriticData\n/* harmony export */ });\nconst fetchAddedData = (number) => {\n    // debugger;\n    // console.log('here')\n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\");\n            }\n            return res.json();\n        }).then(data => {\n            // debugger;\n            console.log(data);\n            const half = data.results.splice(15, 19);\n            \n            const games = data.results.map(game => {\n                return `\n            <li class=\"game\" style=\"height:${game.added / 35}px; width:${game.added / 30}px\">\n                <p class=\"image\"> <img style=\"height:${game.added / 40}px; width:${game.added / 30}px\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n                <p class =\"game-text\"> ${game.name} </p>\n                <p class =\"game-text\"> Added by ${game.added} users </p>\n            </li>\n            `\n            }).join('');\n            document.getElementById('games-list')\n                .insertAdjacentHTML(\"afterbegin\", games);\n        }).catch(err => {\n            console.log(err);\n        });\n}\n\nconst fetchMetacriticData = (number) => {\n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\");\n            }\n            return res.json();\n        }).then(data => {\n            let half = data.results.splice(15, 19);\n            // debugger;\n            // const sorted \n            // debugger;\n            // if (truth) {\n            let sorted = data.results.sort((a, b) => {\n                    return (a.metacritic < b.metacritic) ? 1 : -1\n            })\n\n            let nineties = data.results.filter(game => game.metacritic >= 90);\n            let eighties = data.results.filter(game => game.metacritic >= 80 && game.metacritic < 90);\n            let seventies = data.results.filter(game => game.metacritic >= 70 && game.metacritic < 80);\n            // debugger;\n            // const games = sorted.map(game => {\n            //     return `\n            // <li class=\"game\" style=\"height:${game.metacritic * 2.5}px; width:${game.metacritic * 3}px\">\n            //     <p class=\"image\"> <img style=\"height:${game.metacritic * 2}px; width:${game.metacritic * 2.5}px\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n            //     <p> Title: ${game.name} </p>\n            //     <p> metacritic score: ${game.metacritic} </p>\n            // </li>\n            // `\n            // }).join('')\n\n            const ninetiesGames = nineties.map(game => {\n                return `\n            <li class=\"nineties-game\">\n                <p> <img class=\"nineties-image\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n                <p class=\"nineties-title\">${game.name}</p>\n                <p class=\"nineties-title\"> Metacritic score: ${game.metacritic} </p>\n            </li>\n            `\n            }).join('')\n\n            const eightiesGames = eighties.map(game => {\n                return `\n            <li class=\"eighties-game\" >\n                <p> <img class=\"eighties-image\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n                <p class=\"eighties-title\"> ${game.name} </p>\n                <p class=\"eighties-title\"> Metacritic score: ${game.metacritic} </p>\n            </li>\n            `\n            }).join('')\n\n            const seventiesGames = seventies.map(game => {\n                return `\n            <li class=\"seventies-game\" >\n                <p > <img class=\"seventies-image\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n                <p class=\"seventies-title\"> ${game.name} </p>\n                <p class=\"seventies-title\"> Metacritic score: ${game.metacritic} </p>\n            </li>\n            `\n            }).join('')\n            document.getElementById('games-list')\n                .insertAdjacentHTML(\"afterbegin\", seventiesGames);\n\n            document.getElementById('games-list')\n                    .insertAdjacentHTML(\"afterbegin\", eightiesGames);\n\n            document.getElementById('games-list')\n                .insertAdjacentHTML(\"afterbegin\", ninetiesGames);\n        }).catch(err => {\n            console.log(err);\n        });\n};\n\n{/* <p> Name: ${game.name}, added by ${game.added} users, metacritic score: ${game.metacritic} </p> */}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZGF0YS5qcz9mNjAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0Esc0ZBQXNGLE9BQU8sU0FBUyxPQUFPO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkMsZ0JBQWdCLEdBQUcsU0FBUyxnQkFBZ0I7QUFDekYsdURBQXVELGdCQUFnQixHQUFHLFNBQVMsZ0JBQWdCLFdBQVcsc0JBQXNCLFFBQVEsVUFBVTtBQUN0Six5Q0FBeUMsVUFBVTtBQUNuRCxrREFBa0QsV0FBVztBQUM3RDtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRU87QUFDUCxzRkFBc0YsT0FBTyxTQUFTLE9BQU87QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHNCQUFzQixHQUFHLFNBQVMsb0JBQW9CO0FBQ3RHLDBEQUEwRCxvQkFBb0IsR0FBRyxTQUFTLHNCQUFzQixXQUFXLHNCQUFzQixRQUFRLFVBQVU7QUFDbkssZ0NBQWdDLFVBQVU7QUFDMUMsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsc0JBQXNCLFFBQVEsVUFBVTtBQUMvRiw0Q0FBNEMsVUFBVTtBQUN0RCwrREFBK0QsZ0JBQWdCO0FBQy9FO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxzQkFBc0IsUUFBUSxVQUFVO0FBQy9GLDZDQUE2QyxVQUFVO0FBQ3ZELCtEQUErRCxnQkFBZ0I7QUFDL0U7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EseURBQXlELHNCQUFzQixRQUFRLFVBQVU7QUFDakcsOENBQThDLFVBQVU7QUFDeEQsZ0VBQWdFLGdCQUFnQjtBQUNoRjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBLENBQUMsZUFBZSxVQUFVLGFBQWEsV0FBVyw0QkFBNEIsZ0JBQWdCIiwiZmlsZSI6Ii4vc3JjL2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZmV0Y2hBZGRlZERhdGEgPSAobnVtYmVyKSA9PiB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgLy8gY29uc29sZS5sb2coJ2hlcmUnKVxuICAgIGZldGNoKGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9rZXk9ODExODNmNTAwNGZiNDQ2Mzg0M2EwNmJkZTU1NzMwODYmZGF0ZXM9JHtudW1iZXJ9LTAxLTAxLCR7bnVtYmVyfS0xMi0zMSZvcmRlcmluZz0tYWRkZWQvYClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJFUlJPUlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGNvbnN0IGhhbGYgPSBkYXRhLnJlc3VsdHMuc3BsaWNlKDE1LCAxOSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGdhbWVzID0gZGF0YS5yZXN1bHRzLm1hcChnYW1lID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGxpIGNsYXNzPVwiZ2FtZVwiIHN0eWxlPVwiaGVpZ2h0OiR7Z2FtZS5hZGRlZCAvIDM1fXB4OyB3aWR0aDoke2dhbWUuYWRkZWQgLyAzMH1weFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW1hZ2VcIj4gPGltZyBzdHlsZT1cImhlaWdodDoke2dhbWUuYWRkZWQgLyA0MH1weDsgd2lkdGg6JHtnYW1lLmFkZGVkIC8gMzB9cHhcIiBzcmM9XCIke2dhbWUuYmFja2dyb3VuZF9pbWFnZX1cIiBhbHQ9JHtnYW1lLm5hbWV9Lz4gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzID1cImdhbWUtdGV4dFwiPiAke2dhbWUubmFtZX0gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzID1cImdhbWUtdGV4dFwiPiBBZGRlZCBieSAke2dhbWUuYWRkZWR9IHVzZXJzIDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lcy1saXN0JylcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBnYW1lcyk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoTWV0YWNyaXRpY0RhdGEgPSAobnVtYmVyKSA9PiB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnJhd2cuaW8vYXBpL2dhbWVzP2tleT04MTE4M2Y1MDA0ZmI0NDYzODQzYTA2YmRlNTU3MzA4NiZkYXRlcz0ke251bWJlcn0tMDEtMDEsJHtudW1iZXJ9LTEyLTMxJm9yZGVyaW5nPS1hZGRlZC9gKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkVSUk9SXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgaGFsZiA9IGRhdGEucmVzdWx0cy5zcGxpY2UoMTUsIDE5KTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgLy8gY29uc3Qgc29ydGVkIFxuICAgICAgICAgICAgLy8gZGVidWdnZXI7XG4gICAgICAgICAgICAvLyBpZiAodHJ1dGgpIHtcbiAgICAgICAgICAgIGxldCBzb3J0ZWQgPSBkYXRhLnJlc3VsdHMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGEubWV0YWNyaXRpYyA8IGIubWV0YWNyaXRpYykgPyAxIDogLTFcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxldCBuaW5ldGllcyA9IGRhdGEucmVzdWx0cy5maWx0ZXIoZ2FtZSA9PiBnYW1lLm1ldGFjcml0aWMgPj0gOTApO1xuICAgICAgICAgICAgbGV0IGVpZ2h0aWVzID0gZGF0YS5yZXN1bHRzLmZpbHRlcihnYW1lID0+IGdhbWUubWV0YWNyaXRpYyA+PSA4MCAmJiBnYW1lLm1ldGFjcml0aWMgPCA5MCk7XG4gICAgICAgICAgICBsZXQgc2V2ZW50aWVzID0gZGF0YS5yZXN1bHRzLmZpbHRlcihnYW1lID0+IGdhbWUubWV0YWNyaXRpYyA+PSA3MCAmJiBnYW1lLm1ldGFjcml0aWMgPCA4MCk7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIC8vIGNvbnN0IGdhbWVzID0gc29ydGVkLm1hcChnYW1lID0+IHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gYFxuICAgICAgICAgICAgLy8gPGxpIGNsYXNzPVwiZ2FtZVwiIHN0eWxlPVwiaGVpZ2h0OiR7Z2FtZS5tZXRhY3JpdGljICogMi41fXB4OyB3aWR0aDoke2dhbWUubWV0YWNyaXRpYyAqIDN9cHhcIj5cbiAgICAgICAgICAgIC8vICAgICA8cCBjbGFzcz1cImltYWdlXCI+IDxpbWcgc3R5bGU9XCJoZWlnaHQ6JHtnYW1lLm1ldGFjcml0aWMgKiAyfXB4OyB3aWR0aDoke2dhbWUubWV0YWNyaXRpYyAqIDIuNX1weFwiIHNyYz1cIiR7Z2FtZS5iYWNrZ3JvdW5kX2ltYWdlfVwiIGFsdD0ke2dhbWUubmFtZX0vPiA8L3A+XG4gICAgICAgICAgICAvLyAgICAgPHA+IFRpdGxlOiAke2dhbWUubmFtZX0gPC9wPlxuICAgICAgICAgICAgLy8gICAgIDxwPiBtZXRhY3JpdGljIHNjb3JlOiAke2dhbWUubWV0YWNyaXRpY30gPC9wPlxuICAgICAgICAgICAgLy8gPC9saT5cbiAgICAgICAgICAgIC8vIGBcbiAgICAgICAgICAgIC8vIH0pLmpvaW4oJycpXG5cbiAgICAgICAgICAgIGNvbnN0IG5pbmV0aWVzR2FtZXMgPSBuaW5ldGllcy5tYXAoZ2FtZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5pbmV0aWVzLWdhbWVcIj5cbiAgICAgICAgICAgICAgICA8cD4gPGltZyBjbGFzcz1cIm5pbmV0aWVzLWltYWdlXCIgc3JjPVwiJHtnYW1lLmJhY2tncm91bmRfaW1hZ2V9XCIgYWx0PSR7Z2FtZS5uYW1lfS8+IDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5pbmV0aWVzLXRpdGxlXCI+JHtnYW1lLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibmluZXRpZXMtdGl0bGVcIj4gTWV0YWNyaXRpYyBzY29yZTogJHtnYW1lLm1ldGFjcml0aWN9IDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICB9KS5qb2luKCcnKVxuXG4gICAgICAgICAgICBjb25zdCBlaWdodGllc0dhbWVzID0gZWlnaHRpZXMubWFwKGdhbWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJlaWdodGllcy1nYW1lXCIgPlxuICAgICAgICAgICAgICAgIDxwPiA8aW1nIGNsYXNzPVwiZWlnaHRpZXMtaW1hZ2VcIiBzcmM9XCIke2dhbWUuYmFja2dyb3VuZF9pbWFnZX1cIiBhbHQ9JHtnYW1lLm5hbWV9Lz4gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZWlnaHRpZXMtdGl0bGVcIj4gJHtnYW1lLm5hbWV9IDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVpZ2h0aWVzLXRpdGxlXCI+IE1ldGFjcml0aWMgc2NvcmU6ICR7Z2FtZS5tZXRhY3JpdGljfSA8L3A+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgfSkuam9pbignJylcblxuICAgICAgICAgICAgY29uc3Qgc2V2ZW50aWVzR2FtZXMgPSBzZXZlbnRpZXMubWFwKGdhbWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJzZXZlbnRpZXMtZ2FtZVwiID5cbiAgICAgICAgICAgICAgICA8cCA+IDxpbWcgY2xhc3M9XCJzZXZlbnRpZXMtaW1hZ2VcIiBzcmM9XCIke2dhbWUuYmFja2dyb3VuZF9pbWFnZX1cIiBhbHQ9JHtnYW1lLm5hbWV9Lz4gPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic2V2ZW50aWVzLXRpdGxlXCI+ICR7Z2FtZS5uYW1lfSA8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzZXZlbnRpZXMtdGl0bGVcIj4gTWV0YWNyaXRpYyBzY29yZTogJHtnYW1lLm1ldGFjcml0aWN9IDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgICB9KS5qb2luKCcnKVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHNldmVudGllc0dhbWVzKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBlaWdodGllc0dhbWVzKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIG5pbmV0aWVzR2FtZXMpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG59O1xuXG57LyogPHA+IE5hbWU6ICR7Z2FtZS5uYW1lfSwgYWRkZWQgYnkgJHtnYW1lLmFkZGVkfSB1c2VycywgbWV0YWNyaXRpYyBzY29yZTogJHtnYW1lLm1ldGFjcml0aWN9IDwvcD4gKi99Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n;\n\n\n\nconst buttonResult = () => {\n    const popularity = document.getElementById(\"popularity\");\n    popularity.addEventListener(\"click\", e => {\n        let list = document.getElementById(\"games-list\");\n        while (list.lastChild) {\n            list.removeChild(list.lastChild);\n        }\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchAddedData)(2013);\n        // location.reload();\n    });\n\n    const critical = document.getElementById(\"metacritic\");\n    critical.addEventListener(\"click\", e => {\n        // location.reload();\n        // debugger;\n        // let list = document.getElementById('games-list')\n        // list.innerHTML = \"\";\n        let list = document.getElementById(\"games-list\");\n        while (list.lastChild) {\n            list.removeChild(list.lastChild);\n        }\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchMetacriticData)(2013);\n    });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonResult);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZmlsdGVyLmpzPzhiNjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxDQUE2RDs7OztBQUk3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQWM7QUFDdEI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwwREFBbUI7QUFDM0IsS0FBSzs7QUFFTDs7QUFFQSxpRUFBZSxZQUFZLEVBQUMiLCJmaWxlIjoiLi9zcmMvZmlsdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hBZGRlZERhdGEsIGZldGNoTWV0YWNyaXRpY0RhdGEgfSBmcm9tICcuL2RhdGEnO1xuXG5cblxuY29uc3QgYnV0dG9uUmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVsYXJpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVsYXJpdHlcIik7XG4gICAgcG9wdWxhcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lcy1saXN0XCIpO1xuICAgICAgICB3aGlsZSAobGlzdC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoQWRkZWREYXRhKDIwMTMpO1xuICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNyaXRpY2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXRhY3JpdGljXCIpO1xuICAgIGNyaXRpY2FsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAvLyBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lcy1saXN0JylcbiAgICAgICAgLy8gbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZXMtbGlzdFwiKTtcbiAgICAgICAgd2hpbGUgKGxpc3QubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKGxpc3QubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaE1ldGFjcml0aWNEYXRhKDIwMTMpO1xuICAgIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b25SZXN1bHQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/filter.js\n");

/***/ }),

/***/ "./src/initial_fetch.js":
/*!******************************!*\
  !*** ./src/initial_fetch.js ***!
  \******************************/
/*! namespace exports */
/*! export initialFetch [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialFetch\": () => /* binding */ initialFetch\n/* harmony export */ });\nconst initialFetch = () => {\n    fetch(`https://api.rawg.io/api/games?page_size=50`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\");\n            }\n            return res.json();\n        }).then(data => {\n            console.log(data);\n            console.log(data.results);\n            const dated = data.results.filter(game => game.released.includes('2013'));\n            console.log(dated);\n            return data;\n        }).catch(err => {\n            console.log(err);\n        });\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvaW5pdGlhbF9mZXRjaC5qcz9kZjY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUIiwiZmlsZSI6Ii4vc3JjL2luaXRpYWxfZmV0Y2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbEZldGNoID0gKCkgPT4ge1xuICAgIGZldGNoKGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9wYWdlX3NpemU9NTBgKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkVSUk9SXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cyk7XG4gICAgICAgICAgICBjb25zdCBkYXRlZCA9IGRhdGEucmVzdWx0cy5maWx0ZXIoZ2FtZSA9PiBnYW1lLnJlbGVhc2VkLmluY2x1ZGVzKCcyMDEzJykpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbn07XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/initial_fetch.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ \"./src/slider.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _initial_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initial_fetch */ \"./src/initial_fetch.js\");\n;\n\n\n\n\n// debugger;\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    // let allData = initialFetch();\n    // console.log(allData);\n    (0,_filter__WEBPACK_IMPORTED_MODULE_1__.default)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLENBQTZEO0FBQ3pCO0FBQ0k7QUFDTzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFZO0FBQ2hCLENBQUMiLCJmaWxlIjoiLi9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoQWRkZWREYXRhLCBmZXRjaE1ldGFjcml0aWNEYXRhIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCBidXR0b25SZXN1bHQgZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgcmVuZGVyU2xpZGVyIH0gZnJvbSAnLi9zbGlkZXInO1xuaW1wb3J0IHsgaW5pdGlhbEZldGNoIH0gZnJvbSAnLi9pbml0aWFsX2ZldGNoJztcblxuLy8gZGVidWdnZXI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gbGV0IGFsbERhdGEgPSBpbml0aWFsRmV0Y2goKTtcbiAgICAvLyBjb25zb2xlLmxvZyhhbGxEYXRhKTtcbiAgICBidXR0b25SZXN1bHQoKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.js\n");

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