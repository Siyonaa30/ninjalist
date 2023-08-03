// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   return {
//     props: { ninjas: data },
//   };
// }; //this function runs at build time

import Link from "next/link";

//the above didnt work for me :(
  async function getNinjas() {
    const res = await fetch("http://localhost:3000/api/users", {cache:"no-store"})
    if (!res.ok) {
      throw new Error("failed to get products")
    }
    return res.json()
  }

  async function Ninjas(){
  const data = await getNinjas()
  return (
    <div>
      <h1 className="title">All Ninjas</h1>
      {
        data.map((ninja) =>(
          <div key={ninja.id}>
            <Link className="single">
              <h3>{ninja.name}</h3>
            </Link>
          </div>
        ))
      }
        </div>

  );
};

export default Ninjas;
