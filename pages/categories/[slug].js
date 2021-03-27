import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbars/AnaisNavBar.js";
import Footer from "../../components/Footers/Footer.js";
import ProductsList from "../../components/store/ProductsList";
import { getCategories, getCategory } from "../../utils/api";

const CategoryPage = ({ category }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div>
      <Navbar />
      <Head>
        <title>{category.name} products</title>
      </Head>
      <div className="container mx-auto px-4 item-center mt-8 mb-8">
        <br/>
        <p class="m-6 mt-8 text-xl">Produits {category.name}</p>
        <ProductsList products={category.products} />
        <br/><br/>
      </div>
      <Footer />
      <div
        hidden
        id="snipcart"
        data-api-key="ODhhNWUxOGEtNTk0OC00OTQwLWJkOWMtM2M1ZmNjODU1ZDJhNjM3MzMyNzM0NjM1OTMyNjcz"
        data-currency="xof"
      ></div>
    </div>
  );
};

export default CategoryPage;

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);
  return { props: { category } };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map((_category) => {
      return {
        params: { slug: _category.slug },
      };
    }),
    fallback: true,
  };
}
