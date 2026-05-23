import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Infrastructure from "@/pages/Infrastructure";
import Quality from "@/pages/Quality";
import Gallery from "@/pages/Gallery";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
