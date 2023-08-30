import { writeFile, mkdir } from "fs/promises";
import { authorize } from "./authorize.js";
import { takeId } from "./takeId.js";

export async function write(req, res) {
  if (!authorize(req, res)) {
    return;
  }

  const id = takeId(req, res);
  if (!id) {
    return;
  }

  const data = {
    from: req.ip,
    content: req.body,
    time: new Date(),
  };
  const text = JSON.stringify(data);

  try {
    await mkdir("data", { recursive: true });

    await writeFile(`./data/${id}.json`, text, "utf8");
  } catch (error) {
    res.status(500).send(`Error writing to data.json: ${error}`);
    return;
  }

  res.send("data received and stored.");
}
