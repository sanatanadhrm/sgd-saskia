import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import MateriSection from "./components/materi-section";
import Footer from "./components/footer";
import SWOTSection from "./components/swot-section";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-blue-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MateriSection />
        <SWOTSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
