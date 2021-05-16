import Details from "../../components/details/Details";

const details = ({ data }) => {
  return <Details data={data} />;
};

export default details;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/series");
  const data = await res.json();

  const paths = data
    .map((item) => ({ params: { id: item.id.toString() } }))
    .slice(0, 5);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;

  const res = await fetch("http://localhost:3000/api/series/" + id);
  const data = await res.json();
  
  return {
    props: {
      data,
    },
  };
}
