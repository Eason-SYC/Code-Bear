import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { db } from './firebase';
import { doc, setDoc, increment } from 'firebase/firestore';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Downloads from './pages/Downloads';
import OnlineTools from './pages/OnlineTools';
import Team from './pages/Team';
import Projects from './pages/Projects';
import Support from './pages/Support';
import Boards from './pages/Boards';
import ProductProjects from './pages/ProductProjects';
import DevTools from './pages/DevTools';

function App() {
  useEffect(() => {
    // This function runs once when the app is first loaded.
    const incrementVisitCount = async () => {
      const counterRef = doc(db, 'counters', 'visits');
      try {
        // Atomically increment the 'count' field.
        // The { merge: true } option creates the document if it doesn't exist.
        await setDoc(counterRef, { count: increment(1) }, { merge: true });
      } catch (error) {
        console.error("Error updating visit count: ", error);
      }
    };

    incrementVisitCount();
  }, []); // The empty dependency array ensures this effect runs only once.

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/online-tools" element={<OnlineTools />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/support" element={<Support />} />
          {/* Product Introduction Routes */}
          <Route path="/products/boards" element={<Boards />} />
          <Route path="/products/projects" element={<ProductProjects />} />
          <Route path="/products/devtools" element={<DevTools />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
