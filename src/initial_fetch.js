const initialFetch = (year) => {
    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${year}-01-01,${year}-12-31&ordering=-added/`)
        .then(res => {
            if (!res.ok) {
                throw Error("ERROR");
            }
            return res.json();
        }).then(data => {
            return data;
        }).catch(err => {
            console.log(err);
        });
}; 

export default initialFetch;

