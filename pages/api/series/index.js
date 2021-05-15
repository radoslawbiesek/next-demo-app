import mockedData from "../../../data/mockedData.json";

export default function (req, res) {
  res
    .status(200)
    .json(mockedData);
}
