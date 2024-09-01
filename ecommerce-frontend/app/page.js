import Header from "@/components/Header";
import HeroItem from "@/components/HeroItem";
import connectDB from "@/lib/connectDB";
import Products from "@/models/products";

export default async function Home() {
  const HeroProductID = "66c6f85da567fc650f3de003";
  await connectDB();
  const HeroProduct = await Products.findById(HeroProductID);
  return (
    <>
      <div>
        <Header />
        <HeroItem product={HeroProduct} />
      </div>
    </>
  );
}
