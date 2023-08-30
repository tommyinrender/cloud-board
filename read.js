import { readFile } from "fs/promises";
import { authorize } from "./authorize.js";
import { takeId } from "./takeId.js";

export async function read(req, res) {
  if (!authorize(req, res)) {
    return;
  }

  const id = takeId(req, res);
  if (!id) {
    return;
  }

  let text;
  try {
    text = await readFile(`./data/${id}.json`, "utf8");
  } catch (error) {
    res.status(500).send(`error reading from data.json: ${error}`);
    return;
  }

  const data = JSON.parse(text);

  if (req.query.raw) {
    res.send(data.content);
  } else {
    res.send(data);
  }
}
