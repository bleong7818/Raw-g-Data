import { fetchAddedData, fetchMetacriticData } from './data';
import buttonResult from './filter';
import { renderSlider } from './slider';
import initialFetch from './initial_fetch';
import modalFunction from './modal';


document.addEventListener("DOMContentLoaded", () => {
    let slider = document.getElementById('slider-input');
    const sliderValue = parseFloat(slider.value);
    modalFunction();
    buttonResult(sliderValue);
});