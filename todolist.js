// var todos = ["Buy New Turtle"];
window.setTimeout(function () {
  // put all the rest of your JS code from the lecture here
  var todos = [];

  var input = prompt("What would you like to do?");

  while (input !== "quit") {
    //handle input
    if (input === "list") {
      console.log("**********");
      //console.log(todos);
      //   function display(items) {

      //   }
      //   for (let index = 0; index < todos.length; index++) {
      //     console.log(index + ": " + todos[index]);
      //   }

      todos.forEach(function (todo, i) {
        console.log(i + ": " + todo);
      });
      console.log("**********");
    } else if (input === "new") {
      var newTodo = prompt("Enter new todo");
      todos.push(newTodo);
    } else if (input === "delete") {
      var todelete = prompt("Select index to delete.");
      todos.splice(todelete, 1);
    }

    //ask again
    input = prompt("What would you like to do?");
  }
  console.log("You quit the app!");
}, 500);

// var todos = [];
// todos.push(prompt("Add a todo"));
