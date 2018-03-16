var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/burgers", function (req, res) {
  var newd = false;
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, newd
  ], function () {
    console.log("You created a burger yah");
    res.redirect("/");
  });
});



router.put('/api/burgers/update', function(req, res){
  burger.update({devoured: true},"id = " + req.body.burger_id, function(result) {
    console.log(result);
    res.redirect("/");
  });
});
module.exports = router;