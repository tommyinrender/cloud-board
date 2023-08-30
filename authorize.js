export function authorize(req) {
  const { key } = req.query;

  if (!key) {
    res.status(400).send(`key is not provided`);
    return false;
  }

  if (key !== (process.env.key ?? "123")) {
    res.status(401).send(`unauthorized`);
    return false;
  }

  return true;
}
