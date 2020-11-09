export const initialFetch = () => {
    fetch(`https://api.rawg.io/api/games?page_size=50`)
        .then(res => {
            if (!res.ok) {
                throw Error("ERROR");
            }
            return res.json();
        }).then(data => {
            console.log(data);
            console.log(data.results);
            const dated = data.results.filter(game => game.released.includes('2013'));
            console.log(dated);
            return data;
        }).catch(err => {
            console.log(err);
        });
};

