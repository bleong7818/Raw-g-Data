const modalFunction = () => {
    var question = document.getElementById("question-mark");
    var rawg = document.getElementById("rawg-trigger");
    var rawgInfo = document.getElementById("rawg-info");
    var metacritic = document.getElementById("metacritic-trigger");
    var metacriticInfo = document.getElementById("metacritic-info");

    question.onmouseover = function () {
        rawgInfo.style.display = "flex";
        metacriticInfo.style.display = "flex";
    };

    question.onmouseleave = function () {
        rawgInfo.style.display = "none";
        metacriticInfo.style.display = "none";
    };


    // question.onmouseover = function () {
    //     metacriticInfo.style.display = "flex";
    // };

    // question.onmouseleave = function () {
    //     metacriticInfo.style.display = "none";
    // };

};

export default modalFunction;