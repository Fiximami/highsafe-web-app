import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AppLayout from "./components/AppLayout";
import Emergency from './pages/Emergency';
import VehicleStatus from './pages/VehicleStatus';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="emergency" element={<Emergency />} />
              <Route path="vehicle" element={<VehicleStatus />} />
              <Route path="setup" element={<div>Device Setup Coming Soon</div>} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
