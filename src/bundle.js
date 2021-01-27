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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAddedData\": () => /* binding */ fetchAddedData,\n/* harmony export */   \"fetchMetacriticData\": () => /* binding */ fetchMetacriticData\n/* harmony export */ });\nconst fetchAddedData = (number) => {\n    \n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\");\n            }\n            return res.json();\n        })\n        .then(data => {\n            console.log(data);\n            const half = data.results.splice(10, 19);\n            // debugger\n            let numbersArray = [];\n            data.results.forEach(game => {\n               numbersArray.push(game.added);\n            });\n            let nameArray = [];\n            data.results.forEach(game => {\n                nameArray.push(game.name);\n            });\n            // debugger;\n            let myChart = document.getElementById('myChart').getContext('2d');\n            let massPopChart = new Chart(myChart, {\n                type: 'bar', //bar, horizontal bar, pie, line, doughnut, radar, polarArea\n                data: {\n                    labels: nameArray,\n                    datasets: [{\n                        label: 'Popularity in terms of users',\n                        data: numbersArray,\n                        backgroundColor: ['white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',\n                            'white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',], \n                    }]\n                },\n                options: {}\n            });\n            const games = \n            `\n                <script class=\"chart\">\n                    ${massPopChart}\n                </script>\n                \n            `;\n            document.getElementById('chart')\n                .insertAdjacentHTML(\"afterbegin\", games);\n            }).catch(err => {\n            console.log(err);\n        });\n        // .then(data => {\n            \n        //     console.log(data);\n        //     const half = data.results.splice(15, 19);\n        //     // debugger\n        //     resultsArray = [];\n        //     data.results.forEach(game => {\n        //     // debugger\n        //        resultsArray.push(game.added);\n        //     });\n        //     // console.log(resultsArray);\n            // const games = data.results.map(game => {\n            //     return `\n            // <li class=\"game\" style=\"height:${game.added / 35}px; width:${game.added / 30}px\">\n            //     <p class=\"image\"> <img style=\"height:${game.added / 40}px; width:${game.added / 30}px\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n            //     <p class =\"game-text\"> ${game.name} </p>\n            //     <p class =\"game-text\"> Added by ${game.added} users </p>\n            // </li>\n            // `\n            // }).join('');\n        //     document.getElementById('games-list')\n        //         .insertAdjacentHTML(\"afterbegin\", games);\n        // }).catch(err => {\n        //     console.log(err);\n        // });\n};\n\nconst fetchMetacriticData = (number) => {\n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\");\n            }\n            return res.json();\n        }).then(data => {\n            let half = data.results.splice(10, 19);\n            \n            let sorted = data.results.sort((a, b) => {\n                    return (a.metacritic < b.metacritic) ? 1 : -1;\n            });\n            \n            let namesArray = []; \n            sorted.forEach(game => {\n                if (game.metacritic) {\n                    namesArray.push(game.name);\n                }\n            });\n            let scoresArray = [];\n            sorted.forEach(game => {\n                if (game.metacritic) {\n                scoresArray.push(game.metacritic);\n                }\n            });\n            debugger;\n            let myChart = document.getElementById('myChart').getContext('2d');\n            let massPopChart = new Chart(myChart, {\n                type: 'bar', //bar, horizontal bar, pie, line, doughnut, radar, polarArea\n                data: {\n                    labels: namesArray,\n                    datasets: [{\n                        label: 'Metacritic Score',\n                        data: scoresArray,\n                        backgroundColor: ['white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',\n                            'white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',],\n                    }]\n                },\n                options: {}\n            });\n            const games =\n                `\n                    <script class=\"chart\">\n                        ${massPopChart}\n                    </script>\n\n                `;\n            document.getElementById('chart')\n                .insertAdjacentHTML(\"afterbegin\", games);\n        }).catch(err => {\n            console.log(err);\n            // let scoresArray = [];\n            // sorted.results.forEach(game => {\n            //     scoresArray.push(game.metacritic);\n            // });\n\n        //     let nineties = data.results.filter(game => game.metacritic >= 90);\n        //     let eighties = data.results.filter(game => game.metacritic >= 80 && game.metacritic < 90);\n        //     let seventies = data.results.filter(game => game.metacritic >= 70 && game.metacritic < 80);\n\n        //     const ninetiesGames = nineties.map(game => {\n        //         return `\n        //     <li class=\"nineties-game\">\n        //         <p> <img class=\"nineties-image\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n        //         <p class=\"nineties-title\">${game.name}</p>\n        //         <p class=\"nineties-title\"> Metacritic score: ${game.metacritic} </p>\n        //     </li>\n        //     `\n        //     }).join('');\n\n        //     const eightiesGames = eighties.map(game => {\n        //         return `\n        //     <li class=\"eighties-game\" >\n        //         <p> <img class=\"eighties-image\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n        //         <p class=\"eighties-title\"> ${game.name} </p>\n        //         <p class=\"eighties-title\"> Metacritic score: ${game.metacritic} </p>\n        //     </li>\n        //     `\n        //     }).join('');\n\n        //     const seventiesGames = seventies.map(game => {\n        //         return `\n        //     <li class=\"seventies-game\" >\n        //         <p > <img class=\"seventies-image\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n        //         <p class=\"seventies-title\"> ${game.name} </p>\n        //         <p class=\"seventies-title\"> Metacritic score: ${game.metacritic} </p>\n        //     </li>\n        //     `\n        //     }).join('');\n        //     document.getElementById('games-list')\n        //         .insertAdjacentHTML(\"afterbegin\", seventiesGames);\n\n        //     document.getElementById('games-list')\n        //             .insertAdjacentHTML(\"afterbegin\", eightiesGames);\n\n        //     document.getElementById('games-list')\n        //         .insertAdjacentHTML(\"afterbegin\", ninetiesGames);\n        // }).catch(err => {\n        //     console.log(err);\n        });\n};\n\n{/* <p> Name: ${game.name}, added by ${game.added} users, metacritic score: ${game.metacritic} </p> */}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZGF0YS5qcz9mNjAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU87O0FBRVAsc0ZBQXNGLE9BQU8sU0FBUyxPQUFPO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGdCQUFnQixHQUFHLFNBQVMsZ0JBQWdCO0FBQzVGLDBEQUEwRCxnQkFBZ0IsR0FBRyxTQUFTLGdCQUFnQixXQUFXLHNCQUFzQixRQUFRLFVBQVU7QUFDekosNENBQTRDLFVBQVU7QUFDdEQscURBQXFELFdBQVc7QUFDaEU7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaOztBQUVPO0FBQ1Asc0ZBQXNGLE9BQU8sU0FBUyxPQUFPO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWIsZ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsc0JBQXNCLFFBQVEsVUFBVTtBQUNsRywrQ0FBK0MsVUFBVTtBQUN6RCxrRUFBa0UsZ0JBQWdCO0FBQ2xGO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxzQkFBc0IsUUFBUSxVQUFVO0FBQ2xHLGdEQUFnRCxVQUFVO0FBQzFELGtFQUFrRSxnQkFBZ0I7QUFDbEY7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0EsNERBQTRELHNCQUFzQixRQUFRLFVBQVU7QUFDcEcsaURBQWlELFVBQVU7QUFDM0QsbUVBQW1FLGdCQUFnQjtBQUNuRjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsU0FBUztBQUNUOztBQUVBLENBQUMsZUFBZSxVQUFVLGFBQWEsV0FBVyw0QkFBNEIsZ0JBQWdCIiwiZmlsZSI6Ii4vc3JjL2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZmV0Y2hBZGRlZERhdGEgPSAobnVtYmVyKSA9PiB7XG4gICAgXG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnJhd2cuaW8vYXBpL2dhbWVzP2tleT04MTE4M2Y1MDA0ZmI0NDYzODQzYTA2YmRlNTU3MzA4NiZkYXRlcz0ke251bWJlcn0tMDEtMDEsJHtudW1iZXJ9LTEyLTMxJm9yZGVyaW5nPS1hZGRlZC9gKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkVSUk9SXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICBjb25zdCBoYWxmID0gZGF0YS5yZXN1bHRzLnNwbGljZSgxMCwgMTkpO1xuICAgICAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgICAgIGxldCBudW1iZXJzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGRhdGEucmVzdWx0cy5mb3JFYWNoKGdhbWUgPT4ge1xuICAgICAgICAgICAgICAgbnVtYmVyc0FycmF5LnB1c2goZ2FtZS5hZGRlZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBuYW1lQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGRhdGEucmVzdWx0cy5mb3JFYWNoKGdhbWUgPT4ge1xuICAgICAgICAgICAgICAgIG5hbWVBcnJheS5wdXNoKGdhbWUubmFtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAgICAgbGV0IG15Q2hhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBsZXQgbWFzc1BvcENoYXJ0ID0gbmV3IENoYXJ0KG15Q2hhcnQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJywgLy9iYXIsIGhvcml6b250YWwgYmFyLCBwaWUsIGxpbmUsIGRvdWdobnV0LCByYWRhciwgcG9sYXJBcmVhXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IG5hbWVBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1BvcHVsYXJpdHkgaW4gdGVybXMgb2YgdXNlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogbnVtYmVyc0FycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJ3doaXRlJywgJ2dyYXknLCAnd2hpdGUnLCAnZ3JheScsICd3aGl0ZScsICdncmF5JywgJ3doaXRlJywgJ2dyYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aGl0ZScsICdncmF5JywgJ3doaXRlJywgJ2dyYXknLCAnd2hpdGUnLCAnZ3JheScsICd3aGl0ZScsICdncmF5JyxdLCBcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGdhbWVzID0gXG4gICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBjbGFzcz1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7bWFzc1BvcENoYXJ0fVxuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydCcpXG4gICAgICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZ2FtZXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIC8vICAgICBjb25zdCBoYWxmID0gZGF0YS5yZXN1bHRzLnNwbGljZSgxNSwgMTkpO1xuICAgICAgICAvLyAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gICAgIHJlc3VsdHNBcnJheSA9IFtdO1xuICAgICAgICAvLyAgICAgZGF0YS5yZXN1bHRzLmZvckVhY2goZ2FtZSA9PiB7XG4gICAgICAgIC8vICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICAvLyAgICAgICAgcmVzdWx0c0FycmF5LnB1c2goZ2FtZS5hZGRlZCk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdHNBcnJheSk7XG4gICAgICAgICAgICAvLyBjb25zdCBnYW1lcyA9IGRhdGEucmVzdWx0cy5tYXAoZ2FtZSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIC8vIDxsaSBjbGFzcz1cImdhbWVcIiBzdHlsZT1cImhlaWdodDoke2dhbWUuYWRkZWQgLyAzNX1weDsgd2lkdGg6JHtnYW1lLmFkZGVkIC8gMzB9cHhcIj5cbiAgICAgICAgICAgIC8vICAgICA8cCBjbGFzcz1cImltYWdlXCI+IDxpbWcgc3R5bGU9XCJoZWlnaHQ6JHtnYW1lLmFkZGVkIC8gNDB9cHg7IHdpZHRoOiR7Z2FtZS5hZGRlZCAvIDMwfXB4XCIgc3JjPVwiJHtnYW1lLmJhY2tncm91bmRfaW1hZ2V9XCIgYWx0PSR7Z2FtZS5uYW1lfS8+IDwvcD5cbiAgICAgICAgICAgIC8vICAgICA8cCBjbGFzcyA9XCJnYW1lLXRleHRcIj4gJHtnYW1lLm5hbWV9IDwvcD5cbiAgICAgICAgICAgIC8vICAgICA8cCBjbGFzcyA9XCJnYW1lLXRleHRcIj4gQWRkZWQgYnkgJHtnYW1lLmFkZGVkfSB1c2VycyA8L3A+XG4gICAgICAgICAgICAvLyA8L2xpPlxuICAgICAgICAgICAgLy8gYFxuICAgICAgICAgICAgLy8gfSkuam9pbignJyk7XG4gICAgICAgIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZXMtbGlzdCcpXG4gICAgICAgIC8vICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZ2FtZXMpO1xuICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgLy8gfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNZXRhY3JpdGljRGF0YSA9IChudW1iZXIpID0+IHtcbiAgICBmZXRjaChgaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXM/a2V5PTgxMTgzZjUwMDRmYjQ0NjM4NDNhMDZiZGU1NTczMDg2JmRhdGVzPSR7bnVtYmVyfS0wMS0wMSwke251bWJlcn0tMTItMzEmb3JkZXJpbmc9LWFkZGVkL2ApXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKFwiRVJST1JcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxldCBoYWxmID0gZGF0YS5yZXN1bHRzLnNwbGljZSgxMCwgMTkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgc29ydGVkID0gZGF0YS5yZXN1bHRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChhLm1ldGFjcml0aWMgPCBiLm1ldGFjcml0aWMpID8gMSA6IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBuYW1lc0FycmF5ID0gW107IFxuICAgICAgICAgICAgc29ydGVkLmZvckVhY2goZ2FtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWUubWV0YWNyaXRpYykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lc0FycmF5LnB1c2goZ2FtZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBzY29yZXNBcnJheSA9IFtdO1xuICAgICAgICAgICAgc29ydGVkLmZvckVhY2goZ2FtZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWUubWV0YWNyaXRpYykge1xuICAgICAgICAgICAgICAgIHNjb3Jlc0FycmF5LnB1c2goZ2FtZS5tZXRhY3JpdGljKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgbGV0IG15Q2hhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlDaGFydCcpLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBsZXQgbWFzc1BvcENoYXJ0ID0gbmV3IENoYXJ0KG15Q2hhcnQsIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnYmFyJywgLy9iYXIsIGhvcml6b250YWwgYmFyLCBwaWUsIGxpbmUsIGRvdWdobnV0LCByYWRhciwgcG9sYXJBcmVhXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbHM6IG5hbWVzQXJyYXksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNZXRhY3JpdGljIFNjb3JlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHNjb3Jlc0FycmF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbJ3doaXRlJywgJ2dyYXknLCAnd2hpdGUnLCAnZ3JheScsICd3aGl0ZScsICdncmF5JywgJ3doaXRlJywgJ2dyYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aGl0ZScsICdncmF5JywgJ3doaXRlJywgJ2dyYXknLCAnd2hpdGUnLCAnZ3JheScsICd3aGl0ZScsICdncmF5JyxdLFxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZ2FtZXMgPVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgPHNjcmlwdCBjbGFzcz1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke21hc3NQb3BDaGFydH1cbiAgICAgICAgICAgICAgICAgICAgPC9zY3JpcHQ+XG5cbiAgICAgICAgICAgICAgICBgO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXJ0JylcbiAgICAgICAgICAgICAgICAuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBnYW1lcyk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgLy8gbGV0IHNjb3Jlc0FycmF5ID0gW107XG4gICAgICAgICAgICAvLyBzb3J0ZWQucmVzdWx0cy5mb3JFYWNoKGdhbWUgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHNjb3Jlc0FycmF5LnB1c2goZ2FtZS5tZXRhY3JpdGljKTtcbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vICAgICBsZXQgbmluZXRpZXMgPSBkYXRhLnJlc3VsdHMuZmlsdGVyKGdhbWUgPT4gZ2FtZS5tZXRhY3JpdGljID49IDkwKTtcbiAgICAgICAgLy8gICAgIGxldCBlaWdodGllcyA9IGRhdGEucmVzdWx0cy5maWx0ZXIoZ2FtZSA9PiBnYW1lLm1ldGFjcml0aWMgPj0gODAgJiYgZ2FtZS5tZXRhY3JpdGljIDwgOTApO1xuICAgICAgICAvLyAgICAgbGV0IHNldmVudGllcyA9IGRhdGEucmVzdWx0cy5maWx0ZXIoZ2FtZSA9PiBnYW1lLm1ldGFjcml0aWMgPj0gNzAgJiYgZ2FtZS5tZXRhY3JpdGljIDwgODApO1xuXG4gICAgICAgIC8vICAgICBjb25zdCBuaW5ldGllc0dhbWVzID0gbmluZXRpZXMubWFwKGdhbWUgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBgXG4gICAgICAgIC8vICAgICA8bGkgY2xhc3M9XCJuaW5ldGllcy1nYW1lXCI+XG4gICAgICAgIC8vICAgICAgICAgPHA+IDxpbWcgY2xhc3M9XCJuaW5ldGllcy1pbWFnZVwiIHNyYz1cIiR7Z2FtZS5iYWNrZ3JvdW5kX2ltYWdlfVwiIGFsdD0ke2dhbWUubmFtZX0vPiA8L3A+XG4gICAgICAgIC8vICAgICAgICAgPHAgY2xhc3M9XCJuaW5ldGllcy10aXRsZVwiPiR7Z2FtZS5uYW1lfTwvcD5cbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzcz1cIm5pbmV0aWVzLXRpdGxlXCI+IE1ldGFjcml0aWMgc2NvcmU6ICR7Z2FtZS5tZXRhY3JpdGljfSA8L3A+XG4gICAgICAgIC8vICAgICA8L2xpPlxuICAgICAgICAvLyAgICAgYFxuICAgICAgICAvLyAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgLy8gICAgIGNvbnN0IGVpZ2h0aWVzR2FtZXMgPSBlaWdodGllcy5tYXAoZ2FtZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgLy8gICAgIDxsaSBjbGFzcz1cImVpZ2h0aWVzLWdhbWVcIiA+XG4gICAgICAgIC8vICAgICAgICAgPHA+IDxpbWcgY2xhc3M9XCJlaWdodGllcy1pbWFnZVwiIHNyYz1cIiR7Z2FtZS5iYWNrZ3JvdW5kX2ltYWdlfVwiIGFsdD0ke2dhbWUubmFtZX0vPiA8L3A+XG4gICAgICAgIC8vICAgICAgICAgPHAgY2xhc3M9XCJlaWdodGllcy10aXRsZVwiPiAke2dhbWUubmFtZX0gPC9wPlxuICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzPVwiZWlnaHRpZXMtdGl0bGVcIj4gTWV0YWNyaXRpYyBzY29yZTogJHtnYW1lLm1ldGFjcml0aWN9IDwvcD5cbiAgICAgICAgLy8gICAgIDwvbGk+XG4gICAgICAgIC8vICAgICBgXG4gICAgICAgIC8vICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICAvLyAgICAgY29uc3Qgc2V2ZW50aWVzR2FtZXMgPSBzZXZlbnRpZXMubWFwKGdhbWUgPT4ge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBgXG4gICAgICAgIC8vICAgICA8bGkgY2xhc3M9XCJzZXZlbnRpZXMtZ2FtZVwiID5cbiAgICAgICAgLy8gICAgICAgICA8cCA+IDxpbWcgY2xhc3M9XCJzZXZlbnRpZXMtaW1hZ2VcIiBzcmM9XCIke2dhbWUuYmFja2dyb3VuZF9pbWFnZX1cIiBhbHQ9JHtnYW1lLm5hbWV9Lz4gPC9wPlxuICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzPVwic2V2ZW50aWVzLXRpdGxlXCI+ICR7Z2FtZS5uYW1lfSA8L3A+XG4gICAgICAgIC8vICAgICAgICAgPHAgY2xhc3M9XCJzZXZlbnRpZXMtdGl0bGVcIj4gTWV0YWNyaXRpYyBzY29yZTogJHtnYW1lLm1ldGFjcml0aWN9IDwvcD5cbiAgICAgICAgLy8gICAgIDwvbGk+XG4gICAgICAgIC8vICAgICBgXG4gICAgICAgIC8vICAgICB9KS5qb2luKCcnKTtcbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lcy1saXN0JylcbiAgICAgICAgLy8gICAgICAgICAuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBzZXZlbnRpZXNHYW1lcyk7XG5cbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lcy1saXN0JylcbiAgICAgICAgLy8gICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgZWlnaHRpZXNHYW1lcyk7XG5cbiAgICAgICAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lcy1saXN0JylcbiAgICAgICAgLy8gICAgICAgICAuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBuaW5ldGllc0dhbWVzKTtcbiAgICAgICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xufTtcblxuey8qIDxwPiBOYW1lOiAke2dhbWUubmFtZX0sIGFkZGVkIGJ5ICR7Z2FtZS5hZGRlZH0gdXNlcnMsIG1ldGFjcml0aWMgc2NvcmU6ICR7Z2FtZS5tZXRhY3JpdGljfSA8L3A+ICovfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n;\n\nconst buttonResult = () => {\n    const popularity = document.getElementById(\"popularity\");\n    popularity.addEventListener(\"click\", e => {\n        let slider = document.getElementById('slider-input');\n        const sliderValue = parseFloat(slider.value);\n        debugger;\n        // let list = document.getElementById(\"games-list\");\n        let testing = document.getElementById('chart');\n        \n        // while (list.lastChild) {\n        //     list.removeChild(list.lastChild);\n        // }\n        while (testing.lastChild) {\n            testing.removeChild(testing.lastChild);\n        }\n        // if (testing.childElementCount !== 1) {\n        //     testing.removeChild(testing.firstElementChild);\n        // }\n        const newCanvas =\n        `\n            <div class=\"container\">\n                <canvas id=\"myChart\"></canvas>\n            </div>\n        `;\n        document.getElementById('chart')\n            .insertAdjacentHTML(\"afterbegin\", newCanvas);\n        \n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchAddedData)(sliderValue);\n        // location.reload();\n    });\n\n    const critical = document.getElementById(\"metacritic\");\n    critical.addEventListener(\"click\", e => {\n        \n        let slider = document.getElementById('slider-input');\n        const sliderValue = parseFloat(slider.value);\n        let testing = document.getElementById('chart');\n        \n        while (testing.lastChild) {\n            testing.removeChild(testing.lastChild);\n        }\n        // if (testing.childElementCount !== 1) {\n        //     testing.removeChild(testing.firstElementChild);\n        // }\n        const newCanvas = \n        `\n            <div class=\"container\">\n                <canvas id=\"myChart\"></canvas>\n            </div>\n        `;\n        document.getElementById('chart')\n            .insertAdjacentHTML(\"afterbegin\", newCanvas);\n        \n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchMetacriticData)(sliderValue);\n    });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonResult);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZmlsdGVyLmpzPzhiNjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxDQUE2RDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEscURBQWM7QUFDdEI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSwwREFBbUI7QUFDM0IsS0FBSzs7QUFFTDs7QUFFQSxpRUFBZSxZQUFZLEVBQUMiLCJmaWxlIjoiLi9zcmMvZmlsdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hBZGRlZERhdGEsIGZldGNoTWV0YWNyaXRpY0RhdGEgfSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCBidXR0b25SZXN1bHQgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wdWxhcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wdWxhcml0eVwiKTtcbiAgICBwb3B1bGFyaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgbGV0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzbGlkZXItaW5wdXQnKTtcbiAgICAgICAgY29uc3Qgc2xpZGVyVmFsdWUgPSBwYXJzZUZsb2F0KHNsaWRlci52YWx1ZSk7XG4gICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAvLyBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZXMtbGlzdFwiKTtcbiAgICAgICAgbGV0IHRlc3RpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnQnKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHdoaWxlIChsaXN0Lmxhc3RDaGlsZCkge1xuICAgICAgICAvLyAgICAgbGlzdC5yZW1vdmVDaGlsZChsaXN0Lmxhc3RDaGlsZCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgd2hpbGUgKHRlc3RpbmcubGFzdENoaWxkKSB7XG4gICAgICAgICAgICB0ZXN0aW5nLnJlbW92ZUNoaWxkKHRlc3RpbmcubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodGVzdGluZy5jaGlsZEVsZW1lbnRDb3VudCAhPT0gMSkge1xuICAgICAgICAvLyAgICAgdGVzdGluZy5yZW1vdmVDaGlsZCh0ZXN0aW5nLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zdCBuZXdDYW52YXMgPVxuICAgICAgICBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGNhbnZhcyBpZD1cIm15Q2hhcnRcIj48L2NhbnZhcz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnQnKVxuICAgICAgICAgICAgLmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgbmV3Q2FudmFzKTtcbiAgICAgICAgXG4gICAgICAgIGZldGNoQWRkZWREYXRhKHNsaWRlclZhbHVlKTtcbiAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjcml0aWNhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWV0YWNyaXRpY1wiKTtcbiAgICBjcml0aWNhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIFxuICAgICAgICBsZXQgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NsaWRlci1pbnB1dCcpO1xuICAgICAgICBjb25zdCBzbGlkZXJWYWx1ZSA9IHBhcnNlRmxvYXQoc2xpZGVyLnZhbHVlKTtcbiAgICAgICAgbGV0IHRlc3RpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhcnQnKTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICh0ZXN0aW5nLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgdGVzdGluZy5yZW1vdmVDaGlsZCh0ZXN0aW5nLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHRlc3RpbmcuY2hpbGRFbGVtZW50Q291bnQgIT09IDEpIHtcbiAgICAgICAgLy8gICAgIHRlc3RpbmcucmVtb3ZlQ2hpbGQodGVzdGluZy5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgbmV3Q2FudmFzID0gXG4gICAgICAgIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8Y2FudmFzIGlkPVwibXlDaGFydFwiPjwvY2FudmFzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydCcpXG4gICAgICAgICAgICAuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBuZXdDYW52YXMpO1xuICAgICAgICBcbiAgICAgICAgZmV0Y2hNZXRhY3JpdGljRGF0YShzbGlkZXJWYWx1ZSk7XG4gICAgfSk7XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1dHRvblJlc3VsdDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/filter.js\n");

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