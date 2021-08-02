

function fetchData() {
    fetch("https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=2010-01-01,2010-12-31&ordering=-added/")
    .then(res => {
        if (!res.ok) {
            throw Error("ERROR");
        }
       return res.json();
    }).then(data => {
        const games = data.results.map(game => {
            return `
            <div class="game">
                <p> <img style="height:${game.added/25}px; width:${game.added/25}px" src="${game.background_image}" alt=${game.name}/> </p>
                <p class="info-text"> Name: ${game.name}, added by ${game.added} users, metacritic score: ${game.metacritic}, playtime: ${game.playtime} </p>
            </div>
            `
        }).join('');
        document.getElementById('app')
        .insertAdjacentHTML("afterbegin", games);
    }).catch(err => {
        console.log(err);
    });
}

fetchData();