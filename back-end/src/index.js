import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const tweets = [];

let user = {
  username: "",
  avatar: "",
};

app.post("/sign-up", (req, res) => {
  user = req.body;
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.unshift({
    username: user.username,
    avatar: user.avatar,
    tweet: req.body.tweet,
  });
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  const last10 = tweets.slice(0, 10);
  res.send(last10);
});

app.listen(5000, () => {
  console.log("Server listening on port", 5000);
});
