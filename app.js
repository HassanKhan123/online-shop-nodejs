const express = require("express");
const path = require("path");

const { adminRoutes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { handle404 } = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(handle404);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
