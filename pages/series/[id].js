import Details from "../../components/details/Details";
import { getAll, getById } from "../../fakeDb";

const details = ({ data }) => {
  return <Details data={data} />;
};

export default details;

export async function getStaticPaths() {
  const data = getAll();
  const paths = data
    .map((item) => ({ params: { id: item.id.toString() } }))

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = getById(context.params.id);

  return {
    props: {
      data,
    },
  };
}
