import Header from '@/components/header';
import Hero from '@/components/hero';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <div className="layout">
        <Header />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
