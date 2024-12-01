import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
