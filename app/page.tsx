import Nav from './Components/Nav'
import Hero from "./Components/Hero";
import Marquee from "./Components/Marquee";
import Choice from "./Components/Choice";
import Review from "./Components/Review";
import FAQs from "./Components/FAQs";
import FinalSection from "./Components/FinalSection";
import Footer from './Components/Footer';

export default function Home() {

  return (
    <main className=" mx-24">
      <Nav />
      <Hero />
      <Marquee />
      <Choice />
      <Review />
      <FAQs />
      <FinalSection />
      <Footer />
    </main>
  );
}
