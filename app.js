const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Admin routes for logged in users
app.use("/admin", adminRoutes.routes);

// Shop routes is considered root/home
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

http.listen(3000);
