import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={
            <div className="min-h-screen bg-cisco-midnight flex items-center justify-center text-center px-4 pt-20">
              <div>
                <div className="font-mono text-cisco-blue/20 text-9xl font-bold mb-4">404</div>
                <h1 className="font-display font-bold text-white text-2xl mb-3">Page Not Found</h1>
                <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
                <a href="/" className="px-6 py-3 bg-cisco-blue text-white font-display font-semibold text-sm rounded-md hover:bg-cisco-accent transition-colors duration-200">
                  Back to Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </Layout>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
