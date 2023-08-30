export function takeId(req) {
  const { id } = req.query;

  if (!id) {
    res.status(400).send(`id is not provided`);
    return undefined;
  }

  if (!/^[\w-]+$/.test(id)) {
    res.status(400).send(`id is invalid`);
    return undefined;
  }

  return id;
}
