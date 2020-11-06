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
        fetchMetacriticData(2015);
    });

    const deletion = document.getElementById("delete-button");
    deletion.onclick = () => {
        // debugger;
        const myNode = document.getElementById("games-list");
        myNode.innerHTML = '';
    }
};

export default buttonResult;

