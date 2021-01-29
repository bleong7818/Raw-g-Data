import { fetchAddedData, fetchMetacriticData } from './data';
import initialFetch from './initial_fetch';

const buttonResult = (year) => {
    // console.log(data);

    // let results = initialFetch(year);
    // debugger;
    const popularity = document.getElementById("popularity");
    popularity.addEventListener("click", e => {
        // console.log(results);
        // debugger;
        let slider = document.getElementById('slider-input');
        const sliderValue = parseFloat(slider.value);
        // let list = document.getElementById("games-list");
        let chart = document.getElementById('chart');
        
        // while (list.lastChild) {
        //     list.removeChild(list.lastChild);
        // }
        while (chart.lastChild) {
            chart.removeChild(chart.lastChild);
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
        let chart = document.getElementById('chart');
        
        while (chart.lastChild) {
            chart.removeChild(chart.lastChild);
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

