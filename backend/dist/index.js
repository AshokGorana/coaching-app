"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 3000;
app.post("/api/v1/signup", async (req, res) => {
    const { name, gmail, password } = req.body;
    await db_1.UserModel.create({
        name: name,
        gmail: gmail,
        password: password
    });
    res.json({
        message: "User signed up"
    });
});
app.post("/api/v1/sigin", (req, res) => {
});
app.listen(PORT);
//# sourceMappingURL=index.js.map