import express from "express";
import githubRoutes from "./routes/github.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", githubRoutes);

app.listen(port, () => {
    console.log(`Server is listening at port ${port}.`);
});