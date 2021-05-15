import List from "../../components/list/List";

const series = ({ data }) => {
  return <List data={data} />;
};

export default series;

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/series");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
