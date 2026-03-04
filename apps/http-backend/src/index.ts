import express from 'express'

const app = express();

app.use(express());

app.get('/health', (req, res) => {
    res.send("Healthy")
});

app.listen(5000);