import List from "../../components/list/List";

import mockedData from '../../data/mockedData.json';

const series = ({ data }) => {
  return <List data={data} />;
};

export default series;

export async function getStaticProps() {
  // const res = await fetch("http://localhost:3000/api/series");
  // const data = await res.json();

  const data = mockedData;
  return {
    props: {
      data,
    },
  };
}
