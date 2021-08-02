const modalFunction = () => {
    var question = document.getElementById("question-mark");
    // var rawg = document.getElementById("rawg-trigger");
    // var metacritic = document.getElementById("metacritic-trigger");
    var rawgInfo = document.getElementById("rawg-info");
    var metacriticInfo = document.getElementById("metacritic-info");
    var instructions = document.getElementById("page-instructions")

    question.onmouseover = function () {
        rawgInfo.style.display = "flex";
        metacriticInfo.style.display = "flex";
        instructions.style.display = "flex";
    };

    question.onmouseleave = function () {
        rawgInfo.style.display = "none";
        metacriticInfo.style.display = "none";
        instructions.style.display = "none";
    };


    // question.onmouseover = function () {
    //     metacriticInfo.style.display = "flex";
    // };

    // question.onmouseleave = function () {
    //     metacriticInfo.style.display = "none";
    // };

};

export default modalFunction;