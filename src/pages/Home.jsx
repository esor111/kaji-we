import { Header, Footer } from '../components/layout';
import {
  Hero,
  Services,
  Process,
  Reviews,
  HonestService,
  About,
  ServiceAreas,
  Offers,
  Trusted,
  FAQ,
  Blog,
  Contact
} from '../components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Reviews />
        <HonestService />
        <About />
        <ServiceAreas />
        <Offers />
        <Trusted />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
