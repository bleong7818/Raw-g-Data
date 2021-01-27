import { fetchAddedData, fetchMetacriticData } from './data';

const buttonResult = () => {
    const popularity = document.getElementById("popularity");
    popularity.addEventListener("click", e => {
        let slider = document.getElementById('slider-input');
        const sliderValue = parseFloat(slider.value);
        debugger;
        // let list = document.getElementById("games-list");
        let testing = document.getElementById('chart');
        
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
        document.getElementById('chart')
            .insertAdjacentHTML("afterbegin", newCanvas);
        
        fetchAddedData(sliderValue);
        // location.reload();
    });

    const critical = document.getElementById("metacritic");
    critical.addEventListener("click", e => {
        
        let slider = document.getElementById('slider-input');
        const sliderValue = parseFloat(slider.value);
        let testing = document.getElementById('chart');
        
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
        document.getElementById('chart')
            .insertAdjacentHTML("afterbegin", newCanvas);
        
        fetchMetacriticData(sliderValue);
    });

};

export default buttonResult;

