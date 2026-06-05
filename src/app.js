import app from "./index.js";
const port = process.env.port || 5423;

app.get("/health", (req, res) => {
    res.status(200).json({ status: "Health 100" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});