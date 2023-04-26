const express = require("express");
const path = require("path");

const { routes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
