// import React from "react";
// async function getSingleninja({ params }) {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users${params.id}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("failed to get user");
//     }
//     return res.json();
//   }//prev try|| above

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users" + id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};
const page = ({ ninja }) => {
  // const data =  getSingleninja({ params });//prev
  return (
    <div>
      {/* { data && ( */}
      <div>
        {/* <h1>{ninja.name}</h1> */}
        <p> {ninja.email}</p>
        <p> {ninja.website}</p>
        <p> {ninja.phone}</p>
      </div>
      
      {/* // )} */}
    </div>
  );
};
export default page;
