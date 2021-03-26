// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
movies.map(value =>{
return value.director;
})
} 

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    return movies.filter(movie => {
      return movie.genre.includes ('Drama') && movie.director === 'Steven Spielberg';
    }).length;

  }
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (!movies.length) {
      return 0;
    }
    const rates = movies.map(value => {
      return value.rate;
    });
    const sumOfRates = rates.reduce((sum, rate) => {
      return sum + rate;
    },);
    return sumOfRates / movies.length;
    
} 


// Iteration 4: Drama movies - Get the average of Drama Movies
    function dramaMoviesRate(array) {
        let drama = array.filter ((movie) => {
            return movie.genre.includes("Drama")
        });
        let dramaAvg = drama.reduce((acc, elem) => {
            acc += elem.rate / drama.length;
            return acc;
        }, 0)
        return Number(dramaAvg.toFixed(2));
    }
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let newMoviesArray = movies.map(function(movie) {
        return movie
    });

    let moviesByYear = newMoviesArray.sort(function(movie1, movie2) {
        return movie1.year - movie2.year
    });
    return moviesByYear;


}
orderByYear(movies)
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    return movies
    .map(movie => movie.title)
    .sort((a, b) => {
      const firstMovie = a.toLowerCase();
      const secondMovie = b.toLowerCase();
      if (firstMovie > secondMovie) {
        return 1;
      } else if (firstMovie < secondMovie) {
        return -1;
      } else {
        return 0;
      }
    })
   
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
