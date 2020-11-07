import { fetchAddedData, fetchMetacriticData } from './data'

const buttonResult = () => {
    const popularity = document.getElementById("popularity")
    popularity.addEventListener("click", e => {
        let list = document.getElementById("games-list")
        while (list.lastChild) {
            list.removeChild(list.lastChild);
        }
        fetchAddedData(2015);
        // location.reload();
    });

    const critical = document.getElementById("metacritic")
    critical.addEventListener("click", e => {
        // location.reload();
        // debugger;
        // let list = document.getElementById('games-list')
        // list.innerHTML = "";
        let list = document.getElementById("games-list")
        while (list.lastChild) {
            list.removeChild(list.lastChild);
        }
        fetchMetacriticData(2015);
    });

};

export default buttonResult;

