// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // $(".change-sleep").on("click", function(event) {
    //   var id = $(this).data("id");
    //   var newSleep = $(this).data("newsleep");
  
    //   var newSleepState = {
    //     sleepy: newSleep
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "PUT",
    //     data: newSleepState
    //   }).then(
    //     function() {
    //       console.log("changed sleep to", newSleep);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    $(".create-burger").on("submit", function(event) {
      console.log("CANSU");
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#input").val()
        // devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
        
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
        location.reload();
        }
      );
    });

    $(".devour-button").on("click", function(event) { 
      var id = $(this).data("id");
      // var newDevoured = $(this).data("newdevoured");
      var newDevoured = true;

      var newDevouredState = {
        devoured: newDevoured
      };
    $.ajax("/api/burgers/"+ id, {
      // id: data-id
      type: "PUT",
      data: newDevouredState
   
    }).then(
      function() {
        console.log("you ate a burger", newDevoured);
        location.reload();
      }
    );
  });
  
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE",
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    });
 