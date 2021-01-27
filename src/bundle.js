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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchAddedData\": () => /* binding */ fetchAddedData,\n/* harmony export */   \"fetchMetacriticData\": () => /* binding */ fetchMetacriticData\n/* harmony export */ });\nconst fetchAddedData = (number) => {\n    \n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\");\n            }\n            return res.json();\n        })\n        .then(data => {\n            console.log(data);\n            const half = data.results.splice(15, 19);\n            // debugger\n            let numbersArray = [];\n            data.results.forEach(game => {\n               numbersArray.push(game.added);\n            });\n            let nameArray = [];\n            data.results.forEach(game => {\n                nameArray.push(game.name);\n            });\n            // debugger;\n            let myChart = document.getElementById('myChart').getContext('2d');\n            let massPopChart = new Chart(myChart, {\n                type: 'bar', //bar, horizontal bar, pie, line, doughnut, radar, polarArea\n                data: {\n                    labels: nameArray,\n                    datasets: [{\n                        label: 'Popularity in terms of users',\n                        data: numbersArray,\n                        backgroundColor: ['white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',\n                            'white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',], \n                    }]\n                },\n                options: {}\n            });\n            const games = \n            `\n            <script class=\"chart\">\n                ${massPopChart}\n            </script>\n            `;\n            document.getElementById('testing-ground')\n                .insertAdjacentHTML(\"afterbegin\", games);\n            }).catch(err => {\n            console.log(err);\n        });\n        // .then(data => {\n            \n        //     console.log(data);\n        //     const half = data.results.splice(15, 19);\n        //     // debugger\n        //     resultsArray = [];\n        //     data.results.forEach(game => {\n        //     // debugger\n        //        resultsArray.push(game.added);\n        //     });\n        //     // console.log(resultsArray);\n            // const games = data.results.map(game => {\n            //     return `\n            // <li class=\"game\" style=\"height:${game.added / 35}px; width:${game.added / 30}px\">\n            //     <p class=\"image\"> <img style=\"height:${game.added / 40}px; width:${game.added / 30}px\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n            //     <p class =\"game-text\"> ${game.name} </p>\n            //     <p class =\"game-text\"> Added by ${game.added} users </p>\n            // </li>\n            // `\n            // }).join('');\n        //     document.getElementById('games-list')\n        //         .insertAdjacentHTML(\"afterbegin\", games);\n        // }).catch(err => {\n        //     console.log(err);\n        // });\n};\n\nconst fetchMetacriticData = (number) => {\n    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)\n        .then(res => {\n            if (!res.ok) {\n                throw Error(\"ERROR\");\n            }\n            return res.json();\n        }).then(data => {\n            let half = data.results.splice(15, 19);\n            \n            let sorted = data.results.sort((a, b) => {\n                    return (a.metacritic < b.metacritic) ? 1 : -1;\n            });\n            \n            let namesArray = []; \n            sorted.forEach(game => {\n                namesArray.push(game.name);\n            });\n            let scoresArray = [];\n            sorted.forEach(game => {\n                scoresArray.push(game.metacritic);\n            });\n           \n            let myChart = document.getElementById('myChart').getContext('2d');\n            let massPopChart = new Chart(myChart, {\n                type: 'bar', //bar, horizontal bar, pie, line, doughnut, radar, polarArea\n                data: {\n                    labels: namesArray,\n                    datasets: [{\n                        label: 'Metacritic Score',\n                        data: scoresArray,\n                        backgroundColor: ['white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',\n                            'white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',],\n                    }]\n                },\n                options: {}\n            });\n            const games =\n                `\n                <script class=\"chart\">\n                    ${massPopChart}\n                </script>\n                `;\n            document.getElementById('testing-ground')\n                .insertAdjacentHTML(\"afterbegin\", games);\n        }).catch(err => {\n            console.log(err);\n            // let scoresArray = [];\n            // sorted.results.forEach(game => {\n            //     scoresArray.push(game.metacritic);\n            // });\n\n        //     let nineties = data.results.filter(game => game.metacritic >= 90);\n        //     let eighties = data.results.filter(game => game.metacritic >= 80 && game.metacritic < 90);\n        //     let seventies = data.results.filter(game => game.metacritic >= 70 && game.metacritic < 80);\n\n        //     const ninetiesGames = nineties.map(game => {\n        //         return `\n        //     <li class=\"nineties-game\">\n        //         <p> <img class=\"nineties-image\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n        //         <p class=\"nineties-title\">${game.name}</p>\n        //         <p class=\"nineties-title\"> Metacritic score: ${game.metacritic} </p>\n        //     </li>\n        //     `\n        //     }).join('');\n\n        //     const eightiesGames = eighties.map(game => {\n        //         return `\n        //     <li class=\"eighties-game\" >\n        //         <p> <img class=\"eighties-image\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n        //         <p class=\"eighties-title\"> ${game.name} </p>\n        //         <p class=\"eighties-title\"> Metacritic score: ${game.metacritic} </p>\n        //     </li>\n        //     `\n        //     }).join('');\n\n        //     const seventiesGames = seventies.map(game => {\n        //         return `\n        //     <li class=\"seventies-game\" >\n        //         <p > <img class=\"seventies-image\" src=\"${game.background_image}\" alt=${game.name}/> </p>\n        //         <p class=\"seventies-title\"> ${game.name} </p>\n        //         <p class=\"seventies-title\"> Metacritic score: ${game.metacritic} </p>\n        //     </li>\n        //     `\n        //     }).join('');\n        //     document.getElementById('games-list')\n        //         .insertAdjacentHTML(\"afterbegin\", seventiesGames);\n\n        //     document.getElementById('games-list')\n        //             .insertAdjacentHTML(\"afterbegin\", eightiesGames);\n\n        //     document.getElementById('games-list')\n        //         .insertAdjacentHTML(\"afterbegin\", ninetiesGames);\n        // }).catch(err => {\n        //     console.log(err);\n        });\n};\n\n{/* <p> Name: ${game.name}, added by ${game.added} users, metacritic score: ${game.metacritic} </p> */}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZGF0YS5qcz9mNjAxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU87O0FBRVAsc0ZBQXNGLE9BQU8sU0FBUyxPQUFPO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsZ0JBQWdCLEdBQUcsU0FBUyxnQkFBZ0I7QUFDNUYsMERBQTBELGdCQUFnQixHQUFHLFNBQVMsZ0JBQWdCLFdBQVcsc0JBQXNCLFFBQVEsVUFBVTtBQUN6Siw0Q0FBNEMsVUFBVTtBQUN0RCxxREFBcUQsV0FBVztBQUNoRTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7O0FBRU87QUFDUCxzRkFBc0YsT0FBTyxTQUFTLE9BQU87QUFDN0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixnQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHNCQUFzQixRQUFRLFVBQVU7QUFDbEcsK0NBQStDLFVBQVU7QUFDekQsa0VBQWtFLGdCQUFnQjtBQUNsRjtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsc0JBQXNCLFFBQVEsVUFBVTtBQUNsRyxnREFBZ0QsVUFBVTtBQUMxRCxrRUFBa0UsZ0JBQWdCO0FBQ2xGO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxzQkFBc0IsUUFBUSxVQUFVO0FBQ3BHLGlEQUFpRCxVQUFVO0FBQzNELG1FQUFtRSxnQkFBZ0I7QUFDbkY7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLFNBQVM7QUFDVDs7QUFFQSxDQUFDLGVBQWUsVUFBVSxhQUFhLFdBQVcsNEJBQTRCLGdCQUFnQiIsImZpbGUiOiIuL3NyYy9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoQWRkZWREYXRhID0gKG51bWJlcikgPT4ge1xuICAgIFxuICAgIGZldGNoKGBodHRwczovL2FwaS5yYXdnLmlvL2FwaS9nYW1lcz9rZXk9ODExODNmNTAwNGZiNDQ2Mzg0M2EwNmJkZTU1NzMwODYmZGF0ZXM9JHtudW1iZXJ9LTAxLTAxLCR7bnVtYmVyfS0xMi0zMSZvcmRlcmluZz0tYWRkZWQvYClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJFUlJPUlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgY29uc3QgaGFsZiA9IGRhdGEucmVzdWx0cy5zcGxpY2UoMTUsIDE5KTtcbiAgICAgICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgICAgICBsZXQgbnVtYmVyc0FycmF5ID0gW107XG4gICAgICAgICAgICBkYXRhLnJlc3VsdHMuZm9yRWFjaChnYW1lID0+IHtcbiAgICAgICAgICAgICAgIG51bWJlcnNBcnJheS5wdXNoKGdhbWUuYWRkZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgbmFtZUFycmF5ID0gW107XG4gICAgICAgICAgICBkYXRhLnJlc3VsdHMuZm9yRWFjaChnYW1lID0+IHtcbiAgICAgICAgICAgICAgICBuYW1lQXJyYXkucHVzaChnYW1lLm5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIGxldCBteUNoYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgbGV0IG1hc3NQb3BDaGFydCA9IG5ldyBDaGFydChteUNoYXJ0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsIC8vYmFyLCBob3Jpem9udGFsIGJhciwgcGllLCBsaW5lLCBkb3VnaG51dCwgcmFkYXIsIHBvbGFyQXJlYVxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBuYW1lQXJyYXksXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQb3B1bGFyaXR5IGluIHRlcm1zIG9mIHVzZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IG51bWJlcnNBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWyd3aGl0ZScsICdncmF5JywgJ3doaXRlJywgJ2dyYXknLCAnd2hpdGUnLCAnZ3JheScsICd3aGl0ZScsICdncmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2hpdGUnLCAnZ3JheScsICd3aGl0ZScsICdncmF5JywgJ3doaXRlJywgJ2dyYXknLCAnd2hpdGUnLCAnZ3JheScsXSwgXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBnYW1lcyA9IFxuICAgICAgICAgICAgYFxuICAgICAgICAgICAgPHNjcmlwdCBjbGFzcz1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgJHttYXNzUG9wQ2hhcnR9XG4gICAgICAgICAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdGluZy1ncm91bmQnKVxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGdhbWVzKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAvLyAgICAgY29uc3QgaGFsZiA9IGRhdGEucmVzdWx0cy5zcGxpY2UoMTUsIDE5KTtcbiAgICAgICAgLy8gICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIC8vICAgICByZXN1bHRzQXJyYXkgPSBbXTtcbiAgICAgICAgLy8gICAgIGRhdGEucmVzdWx0cy5mb3JFYWNoKGdhbWUgPT4ge1xuICAgICAgICAvLyAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgLy8gICAgICAgIHJlc3VsdHNBcnJheS5wdXNoKGdhbWUuYWRkZWQpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHRzQXJyYXkpO1xuICAgICAgICAgICAgLy8gY29uc3QgZ2FtZXMgPSBkYXRhLnJlc3VsdHMubWFwKGdhbWUgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBgXG4gICAgICAgICAgICAvLyA8bGkgY2xhc3M9XCJnYW1lXCIgc3R5bGU9XCJoZWlnaHQ6JHtnYW1lLmFkZGVkIC8gMzV9cHg7IHdpZHRoOiR7Z2FtZS5hZGRlZCAvIDMwfXB4XCI+XG4gICAgICAgICAgICAvLyAgICAgPHAgY2xhc3M9XCJpbWFnZVwiPiA8aW1nIHN0eWxlPVwiaGVpZ2h0OiR7Z2FtZS5hZGRlZCAvIDQwfXB4OyB3aWR0aDoke2dhbWUuYWRkZWQgLyAzMH1weFwiIHNyYz1cIiR7Z2FtZS5iYWNrZ3JvdW5kX2ltYWdlfVwiIGFsdD0ke2dhbWUubmFtZX0vPiA8L3A+XG4gICAgICAgICAgICAvLyAgICAgPHAgY2xhc3MgPVwiZ2FtZS10ZXh0XCI+ICR7Z2FtZS5uYW1lfSA8L3A+XG4gICAgICAgICAgICAvLyAgICAgPHAgY2xhc3MgPVwiZ2FtZS10ZXh0XCI+IEFkZGVkIGJ5ICR7Z2FtZS5hZGRlZH0gdXNlcnMgPC9wPlxuICAgICAgICAgICAgLy8gPC9saT5cbiAgICAgICAgICAgIC8vIGBcbiAgICAgICAgICAgIC8vIH0pLmpvaW4oJycpO1xuICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAvLyAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGdhbWVzKTtcbiAgICAgICAgLy8gfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIC8vIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoTWV0YWNyaXRpY0RhdGEgPSAobnVtYmVyKSA9PiB7XG4gICAgZmV0Y2goYGh0dHBzOi8vYXBpLnJhd2cuaW8vYXBpL2dhbWVzP2tleT04MTE4M2Y1MDA0ZmI0NDYzODQzYTA2YmRlNTU3MzA4NiZkYXRlcz0ke251bWJlcn0tMDEtMDEsJHtudW1iZXJ9LTEyLTMxJm9yZGVyaW5nPS1hZGRlZC9gKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIkVSUk9SXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgaGFsZiA9IGRhdGEucmVzdWx0cy5zcGxpY2UoMTUsIDE5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHNvcnRlZCA9IGRhdGEucmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYS5tZXRhY3JpdGljIDwgYi5tZXRhY3JpdGljKSA/IDEgOiAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgbmFtZXNBcnJheSA9IFtdOyBcbiAgICAgICAgICAgIHNvcnRlZC5mb3JFYWNoKGdhbWUgPT4ge1xuICAgICAgICAgICAgICAgIG5hbWVzQXJyYXkucHVzaChnYW1lLm5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgc2NvcmVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIHNvcnRlZC5mb3JFYWNoKGdhbWUgPT4ge1xuICAgICAgICAgICAgICAgIHNjb3Jlc0FycmF5LnB1c2goZ2FtZS5tZXRhY3JpdGljKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBteUNoYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215Q2hhcnQnKS5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgbGV0IG1hc3NQb3BDaGFydCA9IG5ldyBDaGFydChteUNoYXJ0LCB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2JhcicsIC8vYmFyLCBob3Jpem9udGFsIGJhciwgcGllLCBsaW5lLCBkb3VnaG51dCwgcmFkYXIsIHBvbGFyQXJlYVxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxzOiBuYW1lc0FycmF5LFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0czogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWV0YWNyaXRpYyBTY29yZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzY29yZXNBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogWyd3aGl0ZScsICdncmF5JywgJ3doaXRlJywgJ2dyYXknLCAnd2hpdGUnLCAnZ3JheScsICd3aGl0ZScsICdncmF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2hpdGUnLCAnZ3JheScsICd3aGl0ZScsICdncmF5JywgJ3doaXRlJywgJ2dyYXknLCAnd2hpdGUnLCAnZ3JheScsXSxcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGdhbWVzID1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgPHNjcmlwdCBjbGFzcz1cImNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICR7bWFzc1BvcENoYXJ0fVxuICAgICAgICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVzdGluZy1ncm91bmQnKVxuICAgICAgICAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIGdhbWVzKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAvLyBsZXQgc2NvcmVzQXJyYXkgPSBbXTtcbiAgICAgICAgICAgIC8vIHNvcnRlZC5yZXN1bHRzLmZvckVhY2goZ2FtZSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgc2NvcmVzQXJyYXkucHVzaChnYW1lLm1ldGFjcml0aWMpO1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gICAgIGxldCBuaW5ldGllcyA9IGRhdGEucmVzdWx0cy5maWx0ZXIoZ2FtZSA9PiBnYW1lLm1ldGFjcml0aWMgPj0gOTApO1xuICAgICAgICAvLyAgICAgbGV0IGVpZ2h0aWVzID0gZGF0YS5yZXN1bHRzLmZpbHRlcihnYW1lID0+IGdhbWUubWV0YWNyaXRpYyA+PSA4MCAmJiBnYW1lLm1ldGFjcml0aWMgPCA5MCk7XG4gICAgICAgIC8vICAgICBsZXQgc2V2ZW50aWVzID0gZGF0YS5yZXN1bHRzLmZpbHRlcihnYW1lID0+IGdhbWUubWV0YWNyaXRpYyA+PSA3MCAmJiBnYW1lLm1ldGFjcml0aWMgPCA4MCk7XG5cbiAgICAgICAgLy8gICAgIGNvbnN0IG5pbmV0aWVzR2FtZXMgPSBuaW5ldGllcy5tYXAoZ2FtZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgLy8gICAgIDxsaSBjbGFzcz1cIm5pbmV0aWVzLWdhbWVcIj5cbiAgICAgICAgLy8gICAgICAgICA8cD4gPGltZyBjbGFzcz1cIm5pbmV0aWVzLWltYWdlXCIgc3JjPVwiJHtnYW1lLmJhY2tncm91bmRfaW1hZ2V9XCIgYWx0PSR7Z2FtZS5uYW1lfS8+IDwvcD5cbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzcz1cIm5pbmV0aWVzLXRpdGxlXCI+JHtnYW1lLm5hbWV9PC9wPlxuICAgICAgICAvLyAgICAgICAgIDxwIGNsYXNzPVwibmluZXRpZXMtdGl0bGVcIj4gTWV0YWNyaXRpYyBzY29yZTogJHtnYW1lLm1ldGFjcml0aWN9IDwvcD5cbiAgICAgICAgLy8gICAgIDwvbGk+XG4gICAgICAgIC8vICAgICBgXG4gICAgICAgIC8vICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICAvLyAgICAgY29uc3QgZWlnaHRpZXNHYW1lcyA9IGVpZ2h0aWVzLm1hcChnYW1lID0+IHtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gYFxuICAgICAgICAvLyAgICAgPGxpIGNsYXNzPVwiZWlnaHRpZXMtZ2FtZVwiID5cbiAgICAgICAgLy8gICAgICAgICA8cD4gPGltZyBjbGFzcz1cImVpZ2h0aWVzLWltYWdlXCIgc3JjPVwiJHtnYW1lLmJhY2tncm91bmRfaW1hZ2V9XCIgYWx0PSR7Z2FtZS5uYW1lfS8+IDwvcD5cbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzcz1cImVpZ2h0aWVzLXRpdGxlXCI+ICR7Z2FtZS5uYW1lfSA8L3A+XG4gICAgICAgIC8vICAgICAgICAgPHAgY2xhc3M9XCJlaWdodGllcy10aXRsZVwiPiBNZXRhY3JpdGljIHNjb3JlOiAke2dhbWUubWV0YWNyaXRpY30gPC9wPlxuICAgICAgICAvLyAgICAgPC9saT5cbiAgICAgICAgLy8gICAgIGBcbiAgICAgICAgLy8gICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgIC8vICAgICBjb25zdCBzZXZlbnRpZXNHYW1lcyA9IHNldmVudGllcy5tYXAoZ2FtZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgLy8gICAgIDxsaSBjbGFzcz1cInNldmVudGllcy1nYW1lXCIgPlxuICAgICAgICAvLyAgICAgICAgIDxwID4gPGltZyBjbGFzcz1cInNldmVudGllcy1pbWFnZVwiIHNyYz1cIiR7Z2FtZS5iYWNrZ3JvdW5kX2ltYWdlfVwiIGFsdD0ke2dhbWUubmFtZX0vPiA8L3A+XG4gICAgICAgIC8vICAgICAgICAgPHAgY2xhc3M9XCJzZXZlbnRpZXMtdGl0bGVcIj4gJHtnYW1lLm5hbWV9IDwvcD5cbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzcz1cInNldmVudGllcy10aXRsZVwiPiBNZXRhY3JpdGljIHNjb3JlOiAke2dhbWUubWV0YWNyaXRpY30gPC9wPlxuICAgICAgICAvLyAgICAgPC9saT5cbiAgICAgICAgLy8gICAgIGBcbiAgICAgICAgLy8gICAgIH0pLmpvaW4oJycpO1xuICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAvLyAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHNldmVudGllc0dhbWVzKTtcblxuICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAvLyAgICAgICAgICAgICAuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBlaWdodGllc0dhbWVzKTtcblxuICAgICAgICAvLyAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVzLWxpc3QnKVxuICAgICAgICAvLyAgICAgICAgIC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIG5pbmV0aWVzR2FtZXMpO1xuICAgICAgICAvLyB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG59O1xuXG57LyogPHA+IE5hbWU6ICR7Z2FtZS5uYW1lfSwgYWRkZWQgYnkgJHtnYW1lLmFkZGVkfSB1c2VycywgbWV0YWNyaXRpYyBzY29yZTogJHtnYW1lLm1ldGFjcml0aWN9IDwvcD4gKi99Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/data.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n;\n\nconst buttonResult = () => {\n    const popularity = document.getElementById(\"popularity\");\n    popularity.addEventListener(\"click\", e => {\n        let list = document.getElementById(\"games-list\");\n        while (list.lastChild) {\n            list.removeChild(list.lastChild);\n        }\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchAddedData)(2016);\n        // location.reload();\n    });\n\n    const critical = document.getElementById(\"metacritic\");\n    critical.addEventListener(\"click\", e => {\n        // location.reload();\n        // debugger;\n        // let list = document.getElementById('games-list')\n        // list.innerHTML = \"\";\n        let list = document.getElementById(\"games-list\");\n        while (list.lastChild) {\n            list.removeChild(list.lastChild);\n        }\n        (0,_data__WEBPACK_IMPORTED_MODULE_0__.fetchMetacriticData)(2016);\n    });\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonResult);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9SYXcoZykvLi9zcmMvZmlsdGVyLmpzPzhiNjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxDQUE2RDs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFjO0FBQ3RCO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMERBQW1CO0FBQzNCLEtBQUs7O0FBRUw7O0FBRUEsaUVBQWUsWUFBWSxFQUFDIiwiZmlsZSI6Ii4vc3JjL2ZpbHRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoQWRkZWREYXRhLCBmZXRjaE1ldGFjcml0aWNEYXRhIH0gZnJvbSAnLi9kYXRhJztcblxuY29uc3QgYnV0dG9uUmVzdWx0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVsYXJpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcHVsYXJpdHlcIik7XG4gICAgcG9wdWxhcml0eS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lcy1saXN0XCIpO1xuICAgICAgICB3aGlsZSAobGlzdC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGxpc3QucmVtb3ZlQ2hpbGQobGlzdC5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoQWRkZWREYXRhKDIwMTYpO1xuICAgICAgICAvLyBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNyaXRpY2FsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXRhY3JpdGljXCIpO1xuICAgIGNyaXRpY2FsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgLy8gbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIC8vIGRlYnVnZ2VyO1xuICAgICAgICAvLyBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lcy1saXN0JylcbiAgICAgICAgLy8gbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBsZXQgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZXMtbGlzdFwiKTtcbiAgICAgICAgd2hpbGUgKGxpc3QubGFzdENoaWxkKSB7XG4gICAgICAgICAgICBsaXN0LnJlbW92ZUNoaWxkKGxpc3QubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaE1ldGFjcml0aWNEYXRhKDIwMTYpO1xuICAgIH0pO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b25SZXN1bHQ7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/filter.js\n");

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