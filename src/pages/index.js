import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";


export default function Home({products}) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/**header*/}
      <main className="max-w-screen-2xl mx-auto">
        {/**Banner  */}
        <Banner/>
         {/**Product Feed  */}
         <ProductFeed products={products}/>

      </main>
      
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);
  const products=await fetch("https://fakestoreapi.com/products").then(
    (res)=>res.json()
  );
  return{
    props:{
      products,
      session
    },
  };
}

//get the products
//https://fakestoreapi.com/products