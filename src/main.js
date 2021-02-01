import { fetchAddedData, fetchMetacriticData } from './data';
import buttonResult from './filter';
import { renderSlider } from './slider';
import initialFetch from './initial_fetch';

// ;
document.addEventListener("DOMContentLoaded", () => {
    let slider = document.getElementById('slider-input');
    const sliderValue = parseFloat(slider.value);
    // console.log(sliderValue);
    // let data = initialFetch(sliderValue);
    // console.log(allData);
    buttonResult(sliderValue);
});