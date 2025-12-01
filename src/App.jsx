import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mike from './pages/Mike';
import './styles/global.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mike" element={<Mike />} />
      </Routes>
    </Router>
  );
}

export default App;
