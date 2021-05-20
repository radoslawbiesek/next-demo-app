import List from "../../components/list/List";
import { getAll } from "../../fakeDb";

const series = ({ data }) => {
  return <List data={data} />;
};

export default series;

export async function getStaticProps() {
  const data = getAll();
  return {
    props: {
      data,
    },
  };
}
