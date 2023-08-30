import { rimraf } from "rimraf";
import { authorize } from "./authorize.js";

export async function clear(req, res) {
  if (!authorize(req, res)) {
    return;
  }

  await rimraf("./data");

  res.send("cleared all files");
}
