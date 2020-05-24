var movies = [
  { title: "In Bruges", havewatched: true, rating: 5 },
  { title: "Ganges", havewatched: false, rating: 3.4 },
  { title: "Goallll", havewatched: false, rating: 4 },
  { title: "SKywalk", havewatched: true, rating: 4.8 },
];

movies.forEach(function (movie) {
  //access obejct using name of paramter passed to function
  var result = "You have ";
  var action;
  if (movie.havewatched === false) {
    action = "not seen ";
  }
  action = "seen ";
  console.log(result + action + movie.title + " - " + movie.rating + " stars");
});
