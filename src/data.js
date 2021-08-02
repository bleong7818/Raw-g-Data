export const fetchAddedData = (number) => {
    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)
        .then(res => {
            if (!res.ok) {
                throw Error("ERROR");
            }
            return res.json();
        })
        .then(data => {
            const half = data.results.splice(10, 19);
            let numbersArray = [];
            data.results.forEach(game => {
               numbersArray.push(game.added);
            })
            let nameArray = [];
            data.results.forEach(game => {
                nameArray.push(game.name);
            });
            let myChart = document.getElementById('myChart').getContext('2d');
            let massPopChart = new Chart(myChart, {
                type: 'bar', //bar, horizontal bar, pie, line, doughnut, radar, polarArea
                data: {
                    labels: nameArray,
                    datasets: [{
                        label: 'User Downloads',
                        data: numbersArray,
                        backgroundColor: ['white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',
                            'white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',
                        ],
                        hoverBorderWidth: 2,
                        hoverBorderColor: '#151515' 
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Top ' + number + ' Games Ordered by Number of Rawg.io User Downloads',
                        fontSize: 26,
                        fontColor:'White'
                    },
                    legend: {
                        display: false
                    }
                }
            });
            const games = 
            `
                <script class="chart">
                    ${massPopChart}
                </script>
                
            `;
            document.getElementById('chart')
                .insertAdjacentHTML("afterbegin", games);
            }).catch(err => {
            console.log(err);
        });
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
            
            let sorted = data.results.sort((a, b) => {
                    return (a.metacritic < b.metacritic) ? 1 : -1;
            });
            
            let namesArray = []; 
            sorted.forEach(game => {
                if (game.metacritic) {
                    namesArray.push(game.name);
                }
            });
            let scoresArray = [];
            sorted.forEach(game => {
                if (game.metacritic) {
                scoresArray.push(game.metacritic);
                }
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
                            'white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',
                        ],
                        hoverBorderWidth:2,
                        hoverBorderColor:'#151515'
                    }]
                },
                options: {
                    title: {
                        display:true,
                        text: 'Top ' + number + ' Games Ordered by Aggregate Critical Score',
                        fontSize: 26,
                        fontColor: 'White'
                    },
                    legend: {
                        display:false
                    }
                }
            });
            const games =
                `
                    <script class="chart">
                        ${massPopChart}
                    </script>

                `;
            document.getElementById('chart')
                .insertAdjacentHTML("afterbegin", games);
        }).catch(err => {
            console.log(err);
        });
};