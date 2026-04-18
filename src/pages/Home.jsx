import { Header, Footer, MobileBottomBar } from '../components/layout';
import { WhatsAppButton } from '../components/common';
import {
  Hero,
  Services,
  Process,
  Reviews,
  About,
  Videos,
  Gallery,
  FAQ,
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
        <About />
        <Videos />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppButton />
    </>
  );
}
