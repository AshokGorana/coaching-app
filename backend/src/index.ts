import express from 'express';
import jwt from 'jsonwebtoken';
import { UserModel } from './db';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


app.post("/api/v1/signup", async (req, res) => {
    const {name, gmail, password} = req.body;

    await UserModel.create({
        name: name,
        gmail: gmail,
        password: password
    })

    res.json({
        message: "User signed up"
    })
});

app.post("/api/v1/sigin", (req, res) => {
    
});


app.listen(PORT);
