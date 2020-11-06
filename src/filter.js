import { fetchAddedData, fetchMetacriticData } from './data'
// export const popResult = () => {
//     const popularity = document.getElementById("popularity")
//     popularity.addEventListener("click", e => {
//         return true;
//     })
// }

// export const critcalResult = () => {
//     const critical = document.getElementById("metacritic")
//     critical.addEventListener("click", e => {
//         return false;
//     })
// }

const buttonResult = () => {
    const popularity = document.getElementById("popularity")
    popularity.addEventListener("click", e => {
        
        fetchAddedData(2015);
        // location.reload();
    });

    const critical = document.getElementById("metacritic")
    critical.addEventListener("click", e => {
        // location.reload();
        fetchMetacriticData(2015);
    });
};

export default buttonResult;

