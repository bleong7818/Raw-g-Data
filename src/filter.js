import { fetchAddedData, fetchMetacriticData } from './data';
// import initialFetch from './initial_fetch';

const buttonResult = (year) => {
    const popularity = document.getElementById("popularity");
    popularity.addEventListener("click", e => {

        let slider = document.getElementById('slider-input');
        const sliderValue = parseFloat(slider.value);

        let chart = document.getElementById('chart');
        while (chart.lastChild) {
            chart.removeChild(chart.lastChild);
        }
        const newCanvas =
        `
            <div class="container">
                <canvas id="myChart"></canvas>
            </div>
        `;
        document.getElementById('chart')
            .insertAdjacentHTML("afterbegin", newCanvas);
        
        fetchAddedData(sliderValue);
    });

    const critical = document.getElementById("metacritic");
    critical.addEventListener("click", e => {
        
        let slider = document.getElementById('slider-input');
        const sliderValue = parseFloat(slider.value);
        let chart = document.getElementById('chart');
        
        while (chart.lastChild) {
            chart.removeChild(chart.lastChild);
        }

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

