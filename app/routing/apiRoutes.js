var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    let currentScores = req.body.scores;
    let totalDifference = [];

    friends.forEach(function(item) {
      let total = 0;
      for (let i = 0; i < currentScores.length; i++) {
        total += Math.abs(currentScores[i] - item.scores[i]);
      }
      totalDifference.push(total);
    });
    friends.push(req.body);
    console.log(Math.max(...totalDifference));
    const index = totalDifference.indexOf(Math.min(...totalDifference));
    res.json(friends[index]);
  });
};
