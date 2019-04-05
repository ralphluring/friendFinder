let express = require("express");
// path module allows for dealing with route paths easier
let path = require("path");
let app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set static Path
app.use(express.static(path.join(__dirname,'./app/public')));

// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT,function(){
    console.log("server started on" + PORT);
})
