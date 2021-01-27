import { fetchAddedData, fetchMetacriticData } from './data';

const buttonResult = () => {
    const popularity = document.getElementById("popularity");
    popularity.addEventListener("click", e => {
        let slider = document.getElementsByClassName('range-input');
        debugger;
        // let list = document.getElementById("games-list");
        let testing = document.getElementById('testing-ground');
        
        // while (list.lastChild) {
        //     list.removeChild(list.lastChild);
        // }
        while (testing.lastChild) {
            testing.removeChild(testing.lastChild);
        }
        // if (testing.childElementCount !== 1) {
        //     testing.removeChild(testing.firstElementChild);
        // }
        const newCanvas =
        `
            <div class="container">
                <canvas id="myChart"></canvas>
            </div>
        `;
        document.getElementById('testing-ground')
            .insertAdjacentHTML("afterbegin", newCanvas);
        
        fetchAddedData(2016);
        // location.reload();
    });

    const critical = document.getElementById("metacritic");
    critical.addEventListener("click", e => {
        // location.reload();
        // debugger;
        // let list = document.getElementById('games-list')
        // list.innerHTML = "";
        let testing = document.getElementById('testing-ground');
        
        while (testing.lastChild) {
            testing.removeChild(testing.lastChild);
        }
        // if (testing.childElementCount !== 1) {
        //     testing.removeChild(testing.firstElementChild);
        // }
        const newCanvas = 
        `
            <div class="container">
                <canvas id="myChart"></canvas>
            </div>
        `;
        document.getElementById('testing-ground')
            .insertAdjacentHTML("afterbegin", newCanvas);
        
        fetchMetacriticData(2016);
    });

};

export default buttonResult;

