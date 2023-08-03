import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>
        ninja list | Home
      </title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div>
      <h1 className="title">Home page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        debitis nam officia nobis repellat excepturi temporibus. Quaerat,
        necessitatibus fugit quae magnam cumque, architecto facilis sint minima,
        quo excepturi quis dignissimos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        debitis nam officia nobis repellat excepturi temporibus. Quaerat,
        necessitatibus fugit quae magnam cumque, architecto facilis sint minima,
        quo excepturi quis dignissimos!
      </p>
      <Link className="btn" href="/ninjas">see ninja listing</Link>
    </div>
    </>
  );
}
