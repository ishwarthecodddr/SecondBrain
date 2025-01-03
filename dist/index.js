"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
const app = (0, express_1.default)();
const zod_1 = __importDefault(require("zod"));
app.use(express_1.default.json());
const db_1 = require("./db");
const middleware_1 = require("./middleware");
const signupSchema = zod_1.default.object({
    username: zod_1.default.string().min(3, { message: "min 3 to 10 letters" }),
    password: zod_1.default.string().min(8, {
        message: "min 8 to 20 letters should have upparcase , lowercase, special character , number",
    }),
});
// const ContentSchema = z.object{
//   link: z.string();
// }
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const result = signupSchema.safeParse({ username, password });
        if (!result.success) {
            res.status(411).json({ msg: "Check username and password" });
        }
        else {
            yield db_1.UserModel.create({ username: username, password: password });
            res.json({ msg: "SignedUp" });
        }
    }
    catch (e) {
        res.status(411).json({ msg: "User already exits" });
        console.log(e);
    }
}));
app.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const userexist = yield db_1.UserModel.findOne({
            username,
            password,
        });
        if (userexist) {
            const token = jsonwebtoken_1.default.sign({ id: userexist._id }, config_1.JWT_SECRET);
            res.json({ token: token });
        }
    }
    catch (e) {
        res.json("Error signIn plz check the credentials");
    }
}));
app.post("/content", middleware_1.Usermiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const link = req.body.link;
    const title = req.body.title;
    const type = req.body.type;
    try {
        //todo: zod validation
        yield db_1.ContentModel.create({
            link,
            title,
            type,
            // @ts-ignore
            userId: req.userId,
            tags: [],
        });
        res.json({ msg: "content added" });
    }
    catch (e) {
        res.json({ msg: "Some error while creating content" });
        console.log(e);
    }
}));
app.get("/content", middleware_1.Usermiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const content = yield db_1.ContentModel.find({
        // @ts-ignore
        userId: req.userId
    }).populate("userId", "username");
    res.json({ content });
}));
app.delete("/content", middleware_1.Usermiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.ContentModel.deleteOne({
        userId: req.userId
    });
    res.json({ msg: "deleted successfully" });
}));
app.post("/brain/share", (req, res) => { });
app.get("/brain/:shareLink", (req, res) => { });
app.listen(3000);
