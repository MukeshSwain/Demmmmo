import express from "express";



const app = express();  

app.get("/", (req, res) => {
    res.send("Hello from the backend");
});

app.listen(3000, () => {
    console.log(`server is runing on localhost http://localhost:3000`);
});
export default app;
