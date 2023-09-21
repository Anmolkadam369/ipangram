const express = require('express');
const mongoose = require('mongoose');
const model = require('./model/dataModel')
const app = express();
const cors = require ('cors');
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://nehajaiswal:neha123@nehadb.pcorgpc.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("mongoDB is connected");
})
    .catch((err) => {
        console.log(err.message);
    });


app.post('/test-me', function () {
    console.log('SERVER is running ok')
})
let count = 100;
let count1 = 0;
let demoName = "Test";
app.post('/createData', async function (req, res) {
    console.log("some");
    const data = req.body;
    let { id, name, date, time } = data;
    if (!date) return res.status(400).send({ status: false, message: "send proper date" });
    if (typeof date != "string") return res.status(400).send({ status: false, message: "send proper date in string" });

    if (!time) return res.status(400).send({ status: false, message: "send proper time" });

    id = data.id = count++;
    name = data.name = demoName + count1++;

    const createdata = await model.create(data);

    res.status(201).send({ status: true, data: createdata });
})
app.get('/getData', async function (req, res) {
    console.log("some");
    const createdata = await model.find();
    res.status(201).send({ status: true, data: createdata });
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});