import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
const app = express();
import z, { string } from "zod";
app.use(express.json());
import { UserModel, TagsModel, ContentModel } from "./db";
import { Usermiddleware } from "./middleware";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

const signupSchema = z.object({
  username: z.string().min(3, { message: "min 3 to 10 letters" }),
  password: z.string().min(8, {
    message:
      "min 8 to 20 letters should have upparcase , lowercase, special character , number",
  }),
});

// const ContentSchema = z.object{
//   link: z.string();
// }

app.post("/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const result = signupSchema.safeParse({ username, password });
    if (!result.success) {
      res.status(411).json({ msg: "Check username and password" });
    } else {
      await UserModel.create({ username: username, password: password });
      res.json({ msg: "SignedUp" });
    }
  } catch (e) {
    res.status(411).json({ msg: "User already exits" });
    console.log(e);
  }
});
app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const userexist = await UserModel.findOne({
      username,
      password,
    });
    if (userexist) {
      const token = jwt.sign({ id: userexist._id }, JWT_SECRET);
      res.json({ token: token });
    }
  } catch (e) {
    res.json("Error signIn plz check the credentials");
  }
});
app.post("/content", Usermiddleware, async (req, res) => {
  const link = req.body.link;
  const title = req.body.title;
  const type = req.body.type;
  try {
    //todo: zod validation
    await ContentModel.create({
      link,
      title,
      type,
      // @ts-ignore
      userId: req.userId,
      tags: [],
    });
     res.json({msg:"content added"})
  } catch (e) {
     res.json({ msg: "Some error while creating content" });
    console.log(e);
  }
});

app.get("/content", Usermiddleware,async (req, res) => {
  const content = await ContentModel.find({
    // @ts-ignore
    userId: req.userId
  }).populate("userId","username")
  res.json({ content });
});
app.delete("/content", Usermiddleware, async (req, res) => {
  const contentId = req.body.contentId;
  await ContentModel.deleteOne({
    contentId,
    userId: req.userId
  })
   res.json({ msg: "deleted successfully" });
});

app.post("/brain/share", (req: Express.Request, res: Express.Response) => {});
app.get(
  "/brain/:shareLink",
  (req: Express.Request, res: Express.Response) => {}
);
app.listen(3000);
