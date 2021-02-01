# README

[Live website](https://bleong7818.github.io/Raw-g-Data/)

Raw(g) Data is a data visualization of game popularity data and critical review data from Rawg.io and Metacritic. Users of Raw(g) Data are able to pick a year of data they wish to see and then filter that data using the "Filter by Popularity" and "Filter by Metacritic Score" buttons. Users are then shown charts corresponding to their button presses, with either a user popularity chart or a critical review data chart showing up. These charts show a list of games from the selected year that are ordered either by popularity or review scores. Data is taken from the Rawg.io API.

Rawg.io is a gaming social media site where users can talk about and rate video games they have played. Metacritic is an aggregate review website where reviewers can post their review scores for a game and contribute to the total average review score for a game. 

On the technical side Raw(g) Data is made purely using Javascript and HTML. The backend/data for the project comes from the Rawg.io API, and the charts were made using Chart.js. Webpack is also used to run the local server for testing purposes.


Specs
=============

Project Uses ES6 Javascript

Webpack Version: 5.4.0

Webpack-cli Version: 4.2.0

Chart.js Version: 2.9.4

Challenging Features
=============

#API Fetch

This project was the first time that I had ever fetched data from an API, so I spent a good deal of time researching how to not only fetch that data but also how to get the specific data that I wanted. I realized that I wanted two different sets of data, popularity data and critical review data, to make the two charts. As such, I created two different functions that would trigger upon the user clicking either the "Filter by Popularity" or "Filter by Metacritic" buttons respectively. I then sorted the data depending on which button was pressed and put the names of the games into one array and the actual game data into a seperate array. By the end of the project I had learned how to fetch data reliably and manipulate/sort it based on my specific needs.

* The api fetch and subsequent sort based on critical review data.
    export const fetchMetacriticData = (number) => {
    fetch(`https://api.rawg.io/api/games?key=81183f5004fb4463843a06bde5573086&dates=${number}-01-01,${number}-12-31&ordering=-added/`)
        .then(res => {
            if (!res.ok) {
                throw Error("ERROR");
            }
            return res.json();
        }).then(data => {
            let half = data.results.splice(10, 19);
            
            let sorted = data.results.sort((a, b) => {
                    return (a.metacritic < b.metacritic) ? 1 : -1;
            });
            
            let namesArray = []; 
            sorted.forEach(game => {
                if (game.metacritic) {
                    namesArray.push(game.name);
                }
            });
            let scoresArray = [];
            sorted.forEach(game => {
                if (game.metacritic) {
                scoresArray.push(game.metacritic);
                }
            });
         

