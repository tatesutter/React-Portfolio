import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AboutMe from './pages/aboutme';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Hero from './components/hero';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
      <div>
      <Hero />
      {/* Other components */}
    </div>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
