import { fetchAddedData, fetchMetacriticData } from './data';
import buttonResult from './filter';
import { renderSlider } from './slider';
import { initialFetch } from './initial_fetch';

// debugger;
document.addEventListener("DOMContentLoaded", () => {
    // let allData = initialFetch();
    // console.log(allData);
    buttonResult();
});