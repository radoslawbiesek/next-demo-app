import { getAll } from "../../../fakeDb";

export default function (req, res) {
  const data = getAll();
  res
    .status(200)
    .json(data);
}
