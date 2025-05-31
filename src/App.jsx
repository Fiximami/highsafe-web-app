import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Emergency from './pages/Emergency';
import VehicleStatus from './pages/VehicleStatus';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/vehicle-status" element={<VehicleStatus />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
