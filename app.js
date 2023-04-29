const express = require("express");
const path = require("path");

const { routes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("404", { path: "" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
