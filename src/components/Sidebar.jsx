import { NavLink } from "react-router-dom";
import { Home, AlertTriangle, Settings, Car, PhoneCall, Moon, Sun, LogOut } from "lucide-react";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDark(storedTheme === "dark");
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setIsDark(!isDark);
  };

  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home /> },
    { name: "Live Alert", path: "/emergency", icon: <AlertTriangle /> },
    { name: "Diagnostics", path: "/vehiclestatus", icon: <Car /> },
    { name: "Setup", path: "/setup", icon: <Settings /> },
    { name: "Emergency", path: "/emergency", icon: <PhoneCall /> },
  ];

  return (
    <aside className="h-screen w-64 bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 flex flex-col">
      <div className="p-6 text-xl font-bold text-center text-gray-800 dark:text-white">
        HighSafe
      </div>
      <nav className="flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                isActive ? "bg-gray-200 dark:bg-gray-800" : ""
              }`
            }
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <button
          onClick={toggleTheme}
          className="flex items-center w-full px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
        >
          {isDark ? <Sun className="mr-2" /> : <Moon className="mr-2" />}
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
        <button className="flex items-center w-full mt-2 px-4 py-2 text-sm font-medium hover:bg-red-100 dark:hover:bg-red-700 text-red-600 dark:text-red-300">
          <LogOut className="mr-2" /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
