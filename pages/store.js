import React from "react";
import Link from "next/link";
import Head from "next/head";

// components

import Navbar from "../components/Navbars/AnaisNavBar.js";
import Footer from "../components/Footers/Footer.js";
import ProductsList from "../components/store/ProductsList";
import CategoryButtons from "../components/store/CategoryButtons";
import CategoriesList from "../components/store/CategoriesList";
import { getProducts, getCategories } from "../utils/api";

const Store = ({ products, categories }) => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Anais Concept - Boutique</title>
      </Head>    
      <div className="container mx-auto px-4 item-center mt-8 mb-8">
        <br/>
        <p class="m-6 mt-8 text-xl">Ce que Nous vous proposons</p>
        {/* <CategoryButtons categories={categories} />
        <ProductsList products={products} /> */}
        <CategoriesList categories={categories} />
        <br/><br/>
      </div>

      <Footer />
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
        data-currency="xof"
      ></div>
    </>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  const categories = await getCategories();
  return { props: { products, categories } };
}

export default Store;