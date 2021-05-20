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
    .slice(0, 5);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const data = getById(context.params.id);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
