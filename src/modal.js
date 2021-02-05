const modalFunction = () => {
    var rawg = document.getElementById("rawg-trigger");
    var rawgInfo = document.getElementById("rawg-info");
    rawg.onmouseover = function () {
        rawgInfo.style.display = "block";
    };

    rawg.onmouseleave = function () {
        rawgInfo.style.display = "none";
    };

    var metacritic = document.getElementById("metacritic-trigger");
    var metacriticInfo = document.getElementById("metacritic-info");

    metacritic.onmouseover = function () {
        metacriticInfo.style.display = "block";
    };

    metacritic.onmouseleave = function () {
        metacriticInfo.style.display = "none";
    };

};

export default modalFunction;