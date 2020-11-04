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
    fetch("https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating")
    .then(res => {
        if (!res.ok) {
            throw Error("ERROR")
        }
       return res.json()
    }).then(data => {
        const games = data.results.map(game => {
            return `<p>Name: ${game.name}, added by ${game.added} users, score: ${game.metacritic}</p>`
        }).join('')
        console.log(games)
        console.log(data)
        document.getElementById('app')
        .insertAdjacentHTML("afterbegin", games)
    }).catch(err => {
        console.log(err)
    })
}

fetchData()