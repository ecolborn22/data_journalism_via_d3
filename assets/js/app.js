// Read in data from csv
d3.csv("./assets/data/data.csv", function(error, healthData) {
    // Log an error if one exists
    if (error) return console.warn(error);
    
    // Verify the data was loaded properly
    console.log(healthData);

    // Store necessary data for plotting
    healthData.forEach(function(data) {
        data.poverty = +data.poverty;
      });

console.log(data.poverty);
});

// Use d3 to select where the chart is going ('#scatter')

// Design the chart!
// x and y axes
