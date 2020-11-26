const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const postRoutes = require("./routes/posts");

const app = express();

// for sending request
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//Routes
app.use("/posts", postRoutes);

const CONNECTION_URL =
    "mongodb+srv://admin:admin@cluster0.3aqju.mongodb.net/<dbname>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    )
    .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
