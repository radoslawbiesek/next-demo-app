import Details from "../../components/details/Details";
import { getAll, getById } from "../../fakeDb";

const details = ({ data }) => {
  return <Details data={data} />;
};

export default details;

export async function getServerSideProps(context) {
  const data = getById(context.query.id);

  if (!data) {
    return {
      redirect: {
        destination: '/series'
      }
    };
  }

  return {
    props: {
      data,
    },
  };
}
