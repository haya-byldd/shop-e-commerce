import Hero from "@/components/hero";
import HomeProducts from "@/components/homeProducts";

const HomePage = () => {
  return (
    <main className="max-w-340 w-full mx-auto p-8 space-y-10">
      <Hero />
      <HomeProducts />
    </main>
  );
};

export default HomePage;
