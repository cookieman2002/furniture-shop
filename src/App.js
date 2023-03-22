import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Tips from "./components/Tips";

function App() {
  return (
    <div className="App">
      <header className="from-amber-100 to-amber-200 bg-gradient-to-bl">
        <Navbar />
      </header>
      <main>
        <section>
          <Info />
        </section>
        <section className="flex flex-col content-center">
          <h1 className="font-bold text-xl self-center mb-6">Our Products</h1>
          <Products />
          <button className="border-solid border-2 self-center mt-6 text-orange-500 p-4 border-orange-500">
            Show more
          </button>
        </section>
        <section>
          <Tips />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
