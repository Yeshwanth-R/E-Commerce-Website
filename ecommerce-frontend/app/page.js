import Header from "@/components/Header";
import HeroItem from "@/components/HeroItem";
import LatestProduct from "@/components/LatestProduct";
import connectDB from "@/lib/connectDB";
import Products from "@/models/products";

export default async function Home() {
  const HeroProductID = "66c6f85da567fc650f3de003";
  await connectDB();
  const HeroProduct = await Products.findById(HeroProductID);
  const LatestProducts = await Products.find({}, null, {
    sort: { _id: -1 },
    limit: 8,
  });

  return (
    <>
      <div className="bg-slate-200">
        <Header />
        <HeroItem product={HeroProduct} />
        <LatestProduct lateProduct={LatestProducts} />
      </div>
    </>
  );
}
