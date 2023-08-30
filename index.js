import express from "express";
import { write } from "./write.js";
import { read } from "./read.js";
import { list } from "./list.js";
import { clear } from "./clear.js";

const app = express();
app.use(express.text());
app.set("trust proxy", true);

app.post("/data", write);
app.get("/data", read);

app.get("/list", list);
app.post("/clear", clear);

app.get("/", (_, res) => {
  res.send("hello");
});

const port = process.env.port ?? 3000;
app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}/`)
);
