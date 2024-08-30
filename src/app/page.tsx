import Hero from "@/app/hero/hero";
import Header from "@/app/header/header";
import ServiceGrid from "@/app/service-grid/ServiceGrid";

export default function Home() {
  return (
      <div>
        <Header/>
        <Hero/>
        <ServiceGrid/>
      </div>
  );
}
