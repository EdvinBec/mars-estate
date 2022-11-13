import ExcellentQuality from "../components/ExcellentQuality";
import FeatureCards from "../components/FeatureCards";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import QuoteCard from "../components/QuoteCard";

export default function Home() {
  return (
    <div className="h-screen snap-y md:snap-mandatory overflow-scroll overflow-x-hidden">
      <header className="snap-center">
        <Hero />
      </header>
      <section className="snap-center">
        <Quote />
      </section>
      <section className="md:snap-center">
        <FeatureCards />
      </section>
      {/*Quality */}
      <section className="snap-center">
        <ExcellentQuality />
      </section>
      {/*Quote card */}
      <section className="snap-center">
        <QuoteCard />
      </section>
      {/*Catalog cards */}
      {/*Quote */}
      {/*Footer*/}
    </div>
  );
}
