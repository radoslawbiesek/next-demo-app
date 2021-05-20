import { getById } from "../../../fakeDb";

export default function (req, res) {
  const item = getById(req.query.id);
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ error: "Invalid id" });
  }
}
