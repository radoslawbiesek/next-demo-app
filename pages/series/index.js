import List from "../../components/list/List";
import { getAll } from "../../fakeDb";

const series = ({ data }) => {
  return <List data={data} />;
};

export default series;

export async function getStaticProps() {
  // DO: call an external API, query db, read file system
  // DONT: call your own api from your pages directory

  const data = getAll();

  return {
    props: {
      data,
    },
  };
}
