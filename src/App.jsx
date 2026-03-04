import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import Mike from './pages/Mike';
import Team from './pages/Team';
import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mike" element={<Mike />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
