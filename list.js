import { readdir } from "fs/promises";
import { authorize } from "./authorize.js";

export async function list(req, res) {
  if (!authorize(req, res)) {
    return;
  }

  let files;
  try {
    files = await readdir("./data");
  } catch {
    files = [];
  }

  res.json({
    count: files.length,
    files,
  });
}
