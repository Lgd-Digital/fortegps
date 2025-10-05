import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import PortalCliente from './pages/PortalCliente';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTopWrapper from './components/ScrollToTopWrapper';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopWrapper>
          <div className="min-h-screen bg-[var(--color-bg)]">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/portal-cliente" element={<PortalCliente />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppFloat />
          </div>
        </ScrollToTopWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;