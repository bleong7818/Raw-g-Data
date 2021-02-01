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
         
#Chart.js and how to delete previous charts.

This project was also the first time I used Chart.js, which thankfully was pretty simple to pick up and learn. I was able to create my first chart with dummy data pretty easily, but then I ran into the problem of creating a chart using data that I had fetched from the api. The demos I had seen had created charts in the html, but my data was stuck in a javascript file, so I could not use variables in the html to create the chart. Furthermore, Chart.js requires the use of a canvas element wrapped in a container element that is adjacent to the actual script element containing the chart data, and the container element has to be in the html. This meant that I could not simply append the container element and the accompanying script element to the html at the same time, as the script file would fail to do anything without the container element being present first. Eventually I worked out a solution where I hard coded in a container element into the html and then appended the script element from the javascript file where the data was located. That way I could fulfill the condition of the container element being present first while also utilizing the data from the javascript file by putting it in the script element.

* The container element inside the html

        <div id="chart">
            <div class="container">
                <canvas id="myChart"></canvas>
            </div>
       </div>
       
* The script element containing the actual chart data and formatting that was then appended to the chart div element. This was done so that the container and subsequent canvas element would be present before the script element was added to the chart div element.
    
            let myChart = document.getElementById('myChart').getContext('2d');
            let massPopChart = new Chart(myChart, {
                type: 'bar', //bar, horizontal bar, pie, line, doughnut, radar, polarArea
                data: {
                    labels: namesArray,
                    datasets: [{
                        label: 'Metacritic Score',
                        data: scoresArray,
                        backgroundColor: ['white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',
                            'white', 'gray', 'white', 'gray', 'white', 'gray', 'white', 'gray',
                        ],
                        hoverBorderWidth:2,
                        hoverBorderColor:'#151515'
                    }]
                },
                options: {
                    title: {
                        display:true,
                        text: 'Top ' + number + ' Games Ordered by Aggregate Critical Score',
                        fontSize: 26,
                        fontColor: 'White'
                    },
                    legend: {
                        display:false
                    }
                }
            });
            const games =
                `
                    <script class="chart">
                        ${massPopChart}
                    </script>

                `;
            document.getElementById('chart')
                .insertAdjacentHTML("afterbegin", games);

#How to Delete Previous Charts

The above method worked for creating a chart for the first click, but due to the fact that the container element was hard coded in I then had the issue of subsequent charts being piled on top of the previous chart, which resulted in multiple charts being displayed at the same time. Initially I tried deleting the script elements themselves, but that left the old container element behind, which resulted in strange behavior where the old chart would occasionally pop into existence behind the old one if I hovered over the left side of the new chart. Eventually I settled on a solution where I would delete both the container element and the script tag before adding back a new container element before adding in the new script tag. That way I could both delete the old chart entirely while fulfilling the condition of the container element needing to be present before appending the script tag.

* Deleting all the elements inside the div with the id of 'chart' before appending a new container element that would be present before the api call and subsequent script tag.

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
 
Instructions for how to run the suite
=============

Start out by running npm start.

        npm start

Then just right-click on the index.html file and click "Run with Live Server" and you're good to go!

