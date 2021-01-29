// fetch('https://api.rawg.io/api/games/grand-theft-auto-v')
//     .then(res => {
//         if (res.ok) {
//             console.log("SUCCESS")
//         } else {
//             console.log("NOT SUCCESSFUL")
//         }
//         res.json()
//         .then(data => console.log(data))
//         .catch(error => console.log("ERROR"))
// })
// api key: 81183f5004fb4463843a06bde5573086

function fetchData() {
    fetch("https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=2010-01-01,2010-12-31&ordering=-added/")
    .then(res => {
        if (!res.ok) {
            throw Error("ERROR");
        }
       return res.json();
    }).then(data => {
        // console.log(data)
        // const half = data.results.splice(10, 19);
        // debugger;
        // const sorted 
        
        // const sorted = data.results.sort((a, b) => {
        //     return (a.metacritic < b.metacritic) ? 1 : -1
        // })
        // debugger;
        // console.log(sorted);
        // console.log(data.results)
        const games = data.results.map(game => {
            return `
            <div class="game">
                <p> <img style="height:${game.added/25}px; width:${game.added/25}px" src="${game.background_image}" alt=${game.name}/> </p>
                <p class="info-text"> Name: ${game.name}, added by ${game.added} users, metacritic score: ${game.metacritic}, playtime: ${game.playtime} </p>
            </div>
            `
        }).join('')
        // console.log(games)
        // debugger;
        // console.log(data)
        document.getElementById('app')
        .insertAdjacentHTML("afterbegin", games);
    }).catch(err => {
        console.log(err);
    });
}
{/* <p> <img src="${game.background_image}" alt= ${game.name} /> </p> */}
{/* <p> Name: ${game.name}, added by ${game.added} users, score: ${game.metacritic} </p> */}
fetchData();