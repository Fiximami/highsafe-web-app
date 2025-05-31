import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <nav className="flex justify-between">
        <h1 className="font-bold text-xl">HighSafe</h1>
        <ul className="flex gap-4">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/vehicle-status">Vehicle Status</Link></li>
          <li><Link to="/emergency">Emergency</Link></li>
        </ul>
      </nav>
    </header>
  );
}
