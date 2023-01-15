const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const productsRouter = require("./routes/productsRouter");
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () =>
    console.log(`The server is running in: http://localhost:${PORT} 🔐`)
);
app.use("/api/products", productsRouter);
app.get("*", (req, res) => {
    res.status(404).json({
        error: -2,
        description: "This route is not available 🚫",
    });
});
