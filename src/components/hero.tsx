import Link from "next/link";

const Hero = () => {

  return (
    <section className="bg-surface p-16 rounded-card ">
      <div className="space-y-8">
     <div>
         <h1 className="text-5xl font-bold">Your everyday shopping destination.</h1>
        <p className="text-sm text-link mt-2">Shop beauty, fashion, accessories, electronics, and home essentials, all in one convenient place.</p>
     </div>
        <Link href="/products" className="btn-primary">Shop Now</Link>
      </div>
    </section>
  );
};

export default Hero;
