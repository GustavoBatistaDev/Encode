// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader } from './pages/loader';
import { Home } from './pages/Home';

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        
        
      </Routes>
    </Router>
  );
}


