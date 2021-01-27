export const fetchAddedData = (number) => {
    
    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)
        .then(res => {
            if (!res.ok) {
                throw Error("ERROR");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            const half = data.results.splice(10, 19);
            // debugger
            let numbersArray = [];
            data.results.forEach(game => {
               numbersArray.push(game.added);
            });
            let nameArray = [];
            data.results.forEach(game => {
                nameArray.push(game.name);
            });
            // debugger;
            let myChart = document.getElementById('myChart').getContext('2d');
            let massPopChart = new Chart(myChart, {
                type: 'bar', //bar, horizontal bar, pie, line, doughnut, radar, polarArea
                data: {
                    labels: nameArray,
                    datasets: [{
                        label: 'Popularity in terms of users',
                        data: numbersArray,
                        backgroundColor: ['white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',
                            'white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',], 
                    }]
                },
                options: {}
            });
            const games = 
            `
                <script class="chart">
                    ${massPopChart}
                </script>
                
            `;
            document.getElementById('testing-ground')
                .insertAdjacentHTML("afterbegin", games);
            }).catch(err => {
            console.log(err);
        });
        // .then(data => {
            
        //     console.log(data);
        //     const half = data.results.splice(15, 19);
        //     // debugger
        //     resultsArray = [];
        //     data.results.forEach(game => {
        //     // debugger
        //        resultsArray.push(game.added);
        //     });
        //     // console.log(resultsArray);
            // const games = data.results.map(game => {
            //     return `
            // <li class="game" style="height:${game.added / 35}px; width:${game.added / 30}px">
            //     <p class="image"> <img style="height:${game.added / 40}px; width:${game.added / 30}px" src="${game.background_image}" alt=${game.name}/> </p>
            //     <p class ="game-text"> ${game.name} </p>
            //     <p class ="game-text"> Added by ${game.added} users </p>
            // </li>
            // `
            // }).join('');
        //     document.getElementById('games-list')
        //         .insertAdjacentHTML("afterbegin", games);
        // }).catch(err => {
        //     console.log(err);
        // });
};

export const fetchMetacriticData = (number) => {
    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)
        .then(res => {
            if (!res.ok) {
                throw Error("ERROR");
            }
            return res.json();
        }).then(data => {
            let half = data.results.splice(10, 19);
            debugger;
            let sorted = data.results.sort((a, b) => {
                    return (a.metacritic < b.metacritic) ? 1 : -1;
            });
            
            let namesArray = []; 
            sorted.forEach(game => {
                namesArray.push(game.name);
            });
            let scoresArray = [];
            sorted.forEach(game => {
                scoresArray.push(game.metacritic);
            });
           
            let myChart = document.getElementById('myChart').getContext('2d');
            let massPopChart = new Chart(myChart, {
                type: 'bar', //bar, horizontal bar, pie, line, doughnut, radar, polarArea
                data: {
                    labels: namesArray,
                    datasets: [{
                        label: 'Metacritic Score',
                        data: scoresArray,
                        backgroundColor: ['white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',
                            'white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',],
                    }]
                },
                options: {}
            });
            const games =
                `
                    <script class="chart">
                        ${massPopChart}
                    </script>

                `;
            document.getElementById('testing-ground')
                .insertAdjacentHTML("afterbegin", games);
        }).catch(err => {
            console.log(err);
            // let scoresArray = [];
            // sorted.results.forEach(game => {
            //     scoresArray.push(game.metacritic);
            // });

        //     let nineties = data.results.filter(game => game.metacritic >= 90);
        //     let eighties = data.results.filter(game => game.metacritic >= 80 && game.metacritic < 90);
        //     let seventies = data.results.filter(game => game.metacritic >= 70 && game.metacritic < 80);

        //     const ninetiesGames = nineties.map(game => {
        //         return `
        //     <li class="nineties-game">
        //         <p> <img class="nineties-image" src="${game.background_image}" alt=${game.name}/> </p>
        //         <p class="nineties-title">${game.name}</p>
        //         <p class="nineties-title"> Metacritic score: ${game.metacritic} </p>
        //     </li>
        //     `
        //     }).join('');

        //     const eightiesGames = eighties.map(game => {
        //         return `
        //     <li class="eighties-game" >
        //         <p> <img class="eighties-image" src="${game.background_image}" alt=${game.name}/> </p>
        //         <p class="eighties-title"> ${game.name} </p>
        //         <p class="eighties-title"> Metacritic score: ${game.metacritic} </p>
        //     </li>
        //     `
        //     }).join('');

        //     const seventiesGames = seventies.map(game => {
        //         return `
        //     <li class="seventies-game" >
        //         <p > <img class="seventies-image" src="${game.background_image}" alt=${game.name}/> </p>
        //         <p class="seventies-title"> ${game.name} </p>
        //         <p class="seventies-title"> Metacritic score: ${game.metacritic} </p>
        //     </li>
        //     `
        //     }).join('');
        //     document.getElementById('games-list')
        //         .insertAdjacentHTML("afterbegin", seventiesGames);

        //     document.getElementById('games-list')
        //             .insertAdjacentHTML("afterbegin", eightiesGames);

        //     document.getElementById('games-list')
        //         .insertAdjacentHTML("afterbegin", ninetiesGames);
        // }).catch(err => {
        //     console.log(err);
        });
};

{/* <p> Name: ${game.name}, added by ${game.added} users, metacritic score: ${game.metacritic} </p> */}