const express = require('express');
require("./db/conn");
const Users = require("./db/models/users");
const Form = require("./db/models/form");
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

// post a new user data
app.post("/users", async (req, res) => {
    try {
        const user = new Users(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) { res.status(400).send(e); }
})
app.post("/form", async (req, res) => {
    try {
        const forms = new Form(req.body);
        const createForm = await forms.save();
        res.status(201).send(createForm);
    } catch (e) { res.status(400).send(e); }
})




// read the data of registed users
app.get("/users", async (req, res) => {
    try {
        const usersData = await Users.find();
        res.json(usersData)
    } catch (e) { res.status(400).send(e); }
})
app.get("/form", async (req, res) => {
    try {
        const formsData = await Form.find();
        res.json(formsData)
    } catch (e) { res.status(400).send(e); }
})





// read the data of indiviusal user
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await Users.findById(id);
        console.log(userData)
        if (!userData) {
            return res.status(404).send();
        } else { res.send(userData) }
    } catch (e) {
        res.status(500).send(e);
    }
})
app.get("/form/:name", async (req, res) => {
    try {
        const id = req.params.id;
        const userData = await Users.findByName(id);
        console.log(userData)
        if (!userData) {
            return res.status(404).send();
        } else { res.send(userData) }
    } catch (e) {
        res.status(500).send(e);
    }
})









// update the students by it id
app.patch("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updateUser = await Users.findByIdAndUpdate(id, req.body, {
            new: true
        });
        res.send(updateUser);
    } catch (e) {
        res.status(404).send(e);
    }
})


// delete the user by it id
app.delete("/users/:id", async (req, res) => {
    try {
        const deleteUser = await Users.findByIdAndDelete(req.params.id)
        if (!req.params.id) {
            return res.status(400).send();
        }
        res.send(deleteUser)
    } catch (e) {
        res.status(500).send(e);
    }
})

app.listen(port, () => {
    console.log('connection is setup at ' + port + '')
})
