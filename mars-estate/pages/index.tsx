import Hero from "../components/Hero";
import Quote from "../components/Quote";

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden">
      <header className="snap-center">
        <Hero />
      </header>
      <section className="snap-center">
        <Quote />
      </section>
      {/*Feature cards */}
      {/*Quality */}
      {/*Quote card */}
      {/*Catalog cards */}
      {/*Quote */}
      {/*Footer*/}
    </div>
  );
}
