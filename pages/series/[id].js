import Details from "../../components/details/Details";

import mockedData from "../../data/mockedData.json";

const details = ({ data }) => {
  return <Details data={data} />;
};

export default details;

export async function getStaticPaths() {
  //   const res = await fetch("http://localhost:3000/api/series");
  //   const data = await res.json();

  const data = mockedData;
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

  //   const res = await fetch("http://localhost:3000/api/series/" + id);
  //   const data = await res.json();

  const data = mockedData.find((item) => +item.id === +id);

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
