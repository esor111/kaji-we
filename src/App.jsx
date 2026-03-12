import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import Mike from './pages/Mike';
import Team from './pages/Team';
import Admin from './pages/Admin';
import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mike" element={<Mike />} />
          <Route path="/team" element={<Team />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
