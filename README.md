# HighSafe: Intelligent Road Safety and Emergency System

HighSafe is a smart accident detection and prevention system designed for low-budget vehicles and commercial drivers in Ghana. Inspired by Tesla-like safety features, it leverages IoT and a responsive web dashboard to deliver real-time alerts, emergency triggers, and vehicle diagnostics.

---

## MVP Features

- **Device Setup:** Pair your car with an IoT safety device (ESP32-based).
- **Dashboard:** Real-time overview of driver and vehicle status.
- **Vehicle Diagnostics:** Displays smart sensor readings (e.g., crash detection, fuel, tire pressure).
- **Emergency Trigger:** One-tap button for sending SOS messages to preset emergency contacts.
- **Live Alerts:** Instant alerts on accidents or dangerous driving behavior.

---

## 🖥️ Tech Stack

- **Frontend**: Vite + React + Tailwind CSS
- **Backend/Realtime**: Firebase (planned)
- **Hardware**: ESP32, sensors (planned)
- **Version Control**: Git & GitHub

---

## 📁 Folder Structure

```bash
highsafe-web/
├── public/
├── src/
│   ├── assets/              # Logos, images, icons
│   ├── components/          # Reusable UI components
│   ├── pages/               # Dashboard, Emergency, etc.
│   ├── services/            # Firebase integration (upcoming)
│   ├── App.jsx              # Main app component
│   └── main.jsx             # Entry point
├── tailwind.config.js
├── postcss.config.cjs
├── vite.config.js
└── package.json

Getting Started (Dev Setup)

Clone the repository
git clone https://github.com/your-username/highsafe-web.git

Navigate to the project
cd highsafe-web

Install dependencies
npm install

Run the development server
npm run dev

👥 Target Audience
Low-income vehicle owners in Ghana

Commercial transport operators

NGOs and road safety authorities

Tech-based vehicle insurers

🌐 Live Demo (Coming Soon)
A working MVP demo will be deployed once Firebase and IoT integration are finalized.

🤝 Support & Collaboration
This project is part of the GAIAthon'25 innovation challenge. We're open to partnerships, sponsorships, and contributions to scale this impact for road safety in Africa.

License
This project is licensed under the MIT License.