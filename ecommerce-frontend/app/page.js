import Header from "@/components/Header";
import HeroItem from "@/components/HeroItem";
import connectDB from "@/lib/connectDB";
import Products from "@/models/products";

export default function Home({ Products }) {
  console.log(Products);
  return (
    <>
      <div>
        <Header />
        <HeroItem />
      </div>
    </>
  );
}

export async function GetProducts() {
  const HeroProductID = "66c6f85da567fc650f3de003";
  await connectDB();
  const FeaturedProduct = Products.findById(HeroProductID);
  return {
    props: FeaturedProduct,
  };
}
