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
    const {gmail, password} = req.body;

    const user = await UserModel.findOne({gmail: gmail});

    if(!user) {
        return res.status(401).json({message: "User not found"});
    }
    
    if(user.password !== password) {
        return res.status(401).json({message: "Invalid password"});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    res.json({token: token});
});


app.listen(PORT);
