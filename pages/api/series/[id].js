import mockedData from "../../../data/mockedData.json";

export default function (req, res) {
  const item = mockedData.find((item) => +item.id === +req.query.id);
  if (item) {
    res.status(200).json(item);
  } else {
    res.status(404).json({ error: "Invalid id" });
  }
}
