export const fetchAddedData = (number) => {
    // debugger;
    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)
        .then(res => {
            if (!res.ok) {
                throw Error("ERROR");
            }
            return res.json();
        }).then(data => {
            console.log(data);
            const half = data.results.splice(15, 19);
            // debugger;
            // const sorted 
            // debugger;
            // if (truth) {
            //     const sorted = data.results.sort((a, b) => {
            //         return (a.metacritic < b.metacritic) ? 1 : -1
            //     })
            // }
            const games = data.results.map(game => {
                return `
            <li class="game" style="height:${game.added / 35}px; width:${game.added / 35}px">
                <p> <img style="height:${game.added / 50}px; width:${game.added / 50}px" src="${game.background_image}" alt=${game.name}/> </p>
                <p> Title: ${game.name} </p>
                <p> Added by ${game.added} users </p>
            </li>
            `
            }).join('');
            document.getElementById('games-list')
                .insertInnerHTML("afterbegin", games);
        }).catch(err => {
            console.log(err);
        });
}

export const fetchMetacriticData = (number) => {
    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)
        .then(res => {
            if (!res.ok) {
                throw Error("ERROR")
            }
            return res.json()
        }).then(data => {
            const half = data.results.splice(15, 19);
            // debugger;
            // const sorted 
            // debugger;
            // if (truth) {
            const sorted = data.results.sort((a, b) => {
                    return (a.metacritic < b.metacritic) ? 1 : -1
            })
            const games = data.results.map(game => {
                return `
            <li class="game">
                <img style="height:${game.metacritic * 2}px; width:${game.metacritic * 2}px" src="${game.background_image}" alt=${game.name}/>
                <p> Title: ${game.name} </p>
                <p> metacritic score: ${game.metacritic} </p>
            </li>
            `
            }).join('')
            document.getElementById('games-list')
                .insertInnerHTML("afterbegin", games)
        }).catch(err => {
            console.log(err)
        })
}

{/* <p> Name: ${game.name}, added by ${game.added} users, metacritic score: ${game.metacritic} </p> */}